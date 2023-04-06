// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
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

import {
  AssociateGatewayToServerCommandInput,
  AssociateGatewayToServerCommandOutput,
} from "../commands/AssociateGatewayToServerCommand";
import { CreateGatewayCommandInput, CreateGatewayCommandOutput } from "../commands/CreateGatewayCommand";
import { DeleteGatewayCommandInput, DeleteGatewayCommandOutput } from "../commands/DeleteGatewayCommand";
import { DeleteHypervisorCommandInput, DeleteHypervisorCommandOutput } from "../commands/DeleteHypervisorCommand";
import {
  DisassociateGatewayFromServerCommandInput,
  DisassociateGatewayFromServerCommandOutput,
} from "../commands/DisassociateGatewayFromServerCommand";
import {
  GetBandwidthRateLimitScheduleCommandInput,
  GetBandwidthRateLimitScheduleCommandOutput,
} from "../commands/GetBandwidthRateLimitScheduleCommand";
import { GetGatewayCommandInput, GetGatewayCommandOutput } from "../commands/GetGatewayCommand";
import { GetHypervisorCommandInput, GetHypervisorCommandOutput } from "../commands/GetHypervisorCommand";
import {
  GetHypervisorPropertyMappingsCommandInput,
  GetHypervisorPropertyMappingsCommandOutput,
} from "../commands/GetHypervisorPropertyMappingsCommand";
import { GetVirtualMachineCommandInput, GetVirtualMachineCommandOutput } from "../commands/GetVirtualMachineCommand";
import {
  ImportHypervisorConfigurationCommandInput,
  ImportHypervisorConfigurationCommandOutput,
} from "../commands/ImportHypervisorConfigurationCommand";
import { ListGatewaysCommandInput, ListGatewaysCommandOutput } from "../commands/ListGatewaysCommand";
import { ListHypervisorsCommandInput, ListHypervisorsCommandOutput } from "../commands/ListHypervisorsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListVirtualMachinesCommandInput,
  ListVirtualMachinesCommandOutput,
} from "../commands/ListVirtualMachinesCommand";
import {
  PutBandwidthRateLimitScheduleCommandInput,
  PutBandwidthRateLimitScheduleCommandOutput,
} from "../commands/PutBandwidthRateLimitScheduleCommand";
import {
  PutHypervisorPropertyMappingsCommandInput,
  PutHypervisorPropertyMappingsCommandOutput,
} from "../commands/PutHypervisorPropertyMappingsCommand";
import {
  PutMaintenanceStartTimeCommandInput,
  PutMaintenanceStartTimeCommandOutput,
} from "../commands/PutMaintenanceStartTimeCommand";
import {
  StartVirtualMachinesMetadataSyncCommandInput,
  StartVirtualMachinesMetadataSyncCommandOutput,
} from "../commands/StartVirtualMachinesMetadataSyncCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import {
  TestHypervisorConfigurationCommandInput,
  TestHypervisorConfigurationCommandOutput,
} from "../commands/TestHypervisorConfigurationCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateGatewayInformationCommandInput,
  UpdateGatewayInformationCommandOutput,
} from "../commands/UpdateGatewayInformationCommand";
import {
  UpdateGatewaySoftwareNowCommandInput,
  UpdateGatewaySoftwareNowCommandOutput,
} from "../commands/UpdateGatewaySoftwareNowCommand";
import { UpdateHypervisorCommandInput, UpdateHypervisorCommandOutput } from "../commands/UpdateHypervisorCommand";
import { BackupGatewayServiceException as __BaseException } from "../models/BackupGatewayServiceException";
import {
  AccessDeniedException,
  AssociateGatewayToServerInput,
  AssociateGatewayToServerOutput,
  BandwidthRateLimitInterval,
  ConflictException,
  CreateGatewayInput,
  CreateGatewayOutput,
  DeleteGatewayInput,
  DeleteGatewayOutput,
  DeleteHypervisorInput,
  DeleteHypervisorOutput,
  DisassociateGatewayFromServerInput,
  DisassociateGatewayFromServerOutput,
  Gateway,
  GatewayDetails,
  GetBandwidthRateLimitScheduleInput,
  GetBandwidthRateLimitScheduleOutput,
  GetGatewayInput,
  GetGatewayOutput,
  GetHypervisorInput,
  GetHypervisorOutput,
  GetHypervisorPropertyMappingsInput,
  GetHypervisorPropertyMappingsOutput,
  GetVirtualMachineInput,
  GetVirtualMachineOutput,
  Hypervisor,
  HypervisorDetails,
  ImportHypervisorConfigurationInput,
  ImportHypervisorConfigurationOutput,
  InternalServerException,
  ListGatewaysInput,
  ListGatewaysOutput,
  ListHypervisorsInput,
  ListHypervisorsOutput,
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  ListVirtualMachinesInput,
  ListVirtualMachinesOutput,
  MaintenanceStartTime,
  PutBandwidthRateLimitScheduleInput,
  PutBandwidthRateLimitScheduleOutput,
  PutHypervisorPropertyMappingsInput,
  PutHypervisorPropertyMappingsOutput,
  PutMaintenanceStartTimeInput,
  PutMaintenanceStartTimeOutput,
  ResourceNotFoundException,
  StartVirtualMachinesMetadataSyncInput,
  StartVirtualMachinesMetadataSyncOutput,
  Tag,
  TagResourceInput,
  TagResourceOutput,
  TestHypervisorConfigurationInput,
  TestHypervisorConfigurationOutput,
  ThrottlingException,
  UntagResourceInput,
  UntagResourceOutput,
  UpdateGatewayInformationInput,
  UpdateGatewayInformationOutput,
  UpdateGatewaySoftwareNowInput,
  UpdateGatewaySoftwareNowOutput,
  UpdateHypervisorInput,
  UpdateHypervisorOutput,
  ValidationException,
  VirtualMachine,
  VirtualMachineDetails,
  VmwareTag,
  VmwareToAwsTagMapping,
} from "../models/models_0";

/**
 * serializeAws_json1_0AssociateGatewayToServerCommand
 */
export const se_AssociateGatewayToServerCommand = async (
  input: AssociateGatewayToServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.AssociateGatewayToServer",
  };
  let body: any;
  body = JSON.stringify(se_AssociateGatewayToServerInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateGatewayCommand
 */
export const se_CreateGatewayCommand = async (
  input: CreateGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.CreateGateway",
  };
  let body: any;
  body = JSON.stringify(se_CreateGatewayInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteGatewayCommand
 */
export const se_DeleteGatewayCommand = async (
  input: DeleteGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.DeleteGateway",
  };
  let body: any;
  body = JSON.stringify(se_DeleteGatewayInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteHypervisorCommand
 */
export const se_DeleteHypervisorCommand = async (
  input: DeleteHypervisorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.DeleteHypervisor",
  };
  let body: any;
  body = JSON.stringify(se_DeleteHypervisorInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DisassociateGatewayFromServerCommand
 */
export const se_DisassociateGatewayFromServerCommand = async (
  input: DisassociateGatewayFromServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.DisassociateGatewayFromServer",
  };
  let body: any;
  body = JSON.stringify(se_DisassociateGatewayFromServerInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetBandwidthRateLimitScheduleCommand
 */
export const se_GetBandwidthRateLimitScheduleCommand = async (
  input: GetBandwidthRateLimitScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.GetBandwidthRateLimitSchedule",
  };
  let body: any;
  body = JSON.stringify(se_GetBandwidthRateLimitScheduleInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetGatewayCommand
 */
export const se_GetGatewayCommand = async (
  input: GetGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.GetGateway",
  };
  let body: any;
  body = JSON.stringify(se_GetGatewayInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetHypervisorCommand
 */
export const se_GetHypervisorCommand = async (
  input: GetHypervisorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.GetHypervisor",
  };
  let body: any;
  body = JSON.stringify(se_GetHypervisorInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetHypervisorPropertyMappingsCommand
 */
export const se_GetHypervisorPropertyMappingsCommand = async (
  input: GetHypervisorPropertyMappingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.GetHypervisorPropertyMappings",
  };
  let body: any;
  body = JSON.stringify(se_GetHypervisorPropertyMappingsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetVirtualMachineCommand
 */
export const se_GetVirtualMachineCommand = async (
  input: GetVirtualMachineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.GetVirtualMachine",
  };
  let body: any;
  body = JSON.stringify(se_GetVirtualMachineInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ImportHypervisorConfigurationCommand
 */
export const se_ImportHypervisorConfigurationCommand = async (
  input: ImportHypervisorConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.ImportHypervisorConfiguration",
  };
  let body: any;
  body = JSON.stringify(se_ImportHypervisorConfigurationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListGatewaysCommand
 */
export const se_ListGatewaysCommand = async (
  input: ListGatewaysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.ListGateways",
  };
  let body: any;
  body = JSON.stringify(se_ListGatewaysInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListHypervisorsCommand
 */
export const se_ListHypervisorsCommand = async (
  input: ListHypervisorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.ListHypervisors",
  };
  let body: any;
  body = JSON.stringify(se_ListHypervisorsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListVirtualMachinesCommand
 */
export const se_ListVirtualMachinesCommand = async (
  input: ListVirtualMachinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.ListVirtualMachines",
  };
  let body: any;
  body = JSON.stringify(se_ListVirtualMachinesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0PutBandwidthRateLimitScheduleCommand
 */
export const se_PutBandwidthRateLimitScheduleCommand = async (
  input: PutBandwidthRateLimitScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.PutBandwidthRateLimitSchedule",
  };
  let body: any;
  body = JSON.stringify(se_PutBandwidthRateLimitScheduleInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0PutHypervisorPropertyMappingsCommand
 */
export const se_PutHypervisorPropertyMappingsCommand = async (
  input: PutHypervisorPropertyMappingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.PutHypervisorPropertyMappings",
  };
  let body: any;
  body = JSON.stringify(se_PutHypervisorPropertyMappingsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0PutMaintenanceStartTimeCommand
 */
export const se_PutMaintenanceStartTimeCommand = async (
  input: PutMaintenanceStartTimeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.PutMaintenanceStartTime",
  };
  let body: any;
  body = JSON.stringify(se_PutMaintenanceStartTimeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0StartVirtualMachinesMetadataSyncCommand
 */
export const se_StartVirtualMachinesMetadataSyncCommand = async (
  input: StartVirtualMachinesMetadataSyncCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.StartVirtualMachinesMetadataSync",
  };
  let body: any;
  body = JSON.stringify(se_StartVirtualMachinesMetadataSyncInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.TagResource",
  };
  let body: any;
  body = JSON.stringify(se_TagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0TestHypervisorConfigurationCommand
 */
export const se_TestHypervisorConfigurationCommand = async (
  input: TestHypervisorConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.TestHypervisorConfiguration",
  };
  let body: any;
  body = JSON.stringify(se_TestHypervisorConfigurationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateGatewayInformationCommand
 */
export const se_UpdateGatewayInformationCommand = async (
  input: UpdateGatewayInformationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.UpdateGatewayInformation",
  };
  let body: any;
  body = JSON.stringify(se_UpdateGatewayInformationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateGatewaySoftwareNowCommand
 */
export const se_UpdateGatewaySoftwareNowCommand = async (
  input: UpdateGatewaySoftwareNowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.UpdateGatewaySoftwareNow",
  };
  let body: any;
  body = JSON.stringify(se_UpdateGatewaySoftwareNowInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateHypervisorCommand
 */
export const se_UpdateHypervisorCommand = async (
  input: UpdateHypervisorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.UpdateHypervisor",
  };
  let body: any;
  body = JSON.stringify(se_UpdateHypervisorInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0AssociateGatewayToServerCommand
 */
export const de_AssociateGatewayToServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateGatewayToServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateGatewayToServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateGatewayToServerOutput(data, context);
  const response: AssociateGatewayToServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0AssociateGatewayToServerCommandError
 */
const de_AssociateGatewayToServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateGatewayToServerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.backupgateway#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.backupgateway#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0CreateGatewayCommand
 */
export const de_CreateGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGatewayCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateGatewayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateGatewayOutput(data, context);
  const response: CreateGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0CreateGatewayCommandError
 */
const de_CreateGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.backupgateway#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DeleteGatewayCommand
 */
export const de_DeleteGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGatewayCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteGatewayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteGatewayOutput(data, context);
  const response: DeleteGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteGatewayCommandError
 */
const de_DeleteGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.backupgateway#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupgateway#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DeleteHypervisorCommand
 */
export const de_DeleteHypervisorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHypervisorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteHypervisorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteHypervisorOutput(data, context);
  const response: DeleteHypervisorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteHypervisorCommandError
 */
const de_DeleteHypervisorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHypervisorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.backupgateway#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.backupgateway#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.backupgateway#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupgateway#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DisassociateGatewayFromServerCommand
 */
export const de_DisassociateGatewayFromServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateGatewayFromServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateGatewayFromServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateGatewayFromServerOutput(data, context);
  const response: DisassociateGatewayFromServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DisassociateGatewayFromServerCommandError
 */
const de_DisassociateGatewayFromServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateGatewayFromServerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.backupgateway#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.backupgateway#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupgateway#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetBandwidthRateLimitScheduleCommand
 */
export const de_GetBandwidthRateLimitScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBandwidthRateLimitScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetBandwidthRateLimitScheduleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetBandwidthRateLimitScheduleOutput(data, context);
  const response: GetBandwidthRateLimitScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0GetBandwidthRateLimitScheduleCommandError
 */
const de_GetBandwidthRateLimitScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBandwidthRateLimitScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.backupgateway#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupgateway#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetGatewayCommand
 */
export const de_GetGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGatewayCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetGatewayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetGatewayOutput(data, context);
  const response: GetGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0GetGatewayCommandError
 */
const de_GetGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.backupgateway#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupgateway#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetHypervisorCommand
 */
export const de_GetHypervisorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHypervisorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetHypervisorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetHypervisorOutput(data, context);
  const response: GetHypervisorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0GetHypervisorCommandError
 */
const de_GetHypervisorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHypervisorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.backupgateway#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupgateway#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetHypervisorPropertyMappingsCommand
 */
export const de_GetHypervisorPropertyMappingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHypervisorPropertyMappingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetHypervisorPropertyMappingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetHypervisorPropertyMappingsOutput(data, context);
  const response: GetHypervisorPropertyMappingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0GetHypervisorPropertyMappingsCommandError
 */
const de_GetHypervisorPropertyMappingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHypervisorPropertyMappingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.backupgateway#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupgateway#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetVirtualMachineCommand
 */
export const de_GetVirtualMachineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVirtualMachineCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetVirtualMachineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetVirtualMachineOutput(data, context);
  const response: GetVirtualMachineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0GetVirtualMachineCommandError
 */
const de_GetVirtualMachineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVirtualMachineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.backupgateway#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupgateway#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ImportHypervisorConfigurationCommand
 */
export const de_ImportHypervisorConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportHypervisorConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ImportHypervisorConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ImportHypervisorConfigurationOutput(data, context);
  const response: ImportHypervisorConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ImportHypervisorConfigurationCommandError
 */
const de_ImportHypervisorConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportHypervisorConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.backupgateway#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.backupgateway#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.backupgateway#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListGatewaysCommand
 */
export const de_ListGatewaysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGatewaysCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListGatewaysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListGatewaysOutput(data, context);
  const response: ListGatewaysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListGatewaysCommandError
 */
const de_ListGatewaysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGatewaysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.backupgateway#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListHypervisorsCommand
 */
export const de_ListHypervisorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHypervisorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListHypervisorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListHypervisorsOutput(data, context);
  const response: ListHypervisorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListHypervisorsCommandError
 */
const de_ListHypervisorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHypervisorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.backupgateway#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListTagsForResourceCommand
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
  contents = de_ListTagsForResourceOutput(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListTagsForResourceCommandError
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
    case "InternalServerException":
    case "com.amazonaws.backupgateway#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupgateway#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListVirtualMachinesCommand
 */
export const de_ListVirtualMachinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualMachinesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListVirtualMachinesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListVirtualMachinesOutput(data, context);
  const response: ListVirtualMachinesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListVirtualMachinesCommandError
 */
const de_ListVirtualMachinesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualMachinesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.backupgateway#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0PutBandwidthRateLimitScheduleCommand
 */
export const de_PutBandwidthRateLimitScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBandwidthRateLimitScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutBandwidthRateLimitScheduleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutBandwidthRateLimitScheduleOutput(data, context);
  const response: PutBandwidthRateLimitScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0PutBandwidthRateLimitScheduleCommandError
 */
const de_PutBandwidthRateLimitScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBandwidthRateLimitScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.backupgateway#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupgateway#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0PutHypervisorPropertyMappingsCommand
 */
export const de_PutHypervisorPropertyMappingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutHypervisorPropertyMappingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutHypervisorPropertyMappingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutHypervisorPropertyMappingsOutput(data, context);
  const response: PutHypervisorPropertyMappingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0PutHypervisorPropertyMappingsCommandError
 */
const de_PutHypervisorPropertyMappingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutHypervisorPropertyMappingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.backupgateway#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.backupgateway#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.backupgateway#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupgateway#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0PutMaintenanceStartTimeCommand
 */
export const de_PutMaintenanceStartTimeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMaintenanceStartTimeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutMaintenanceStartTimeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutMaintenanceStartTimeOutput(data, context);
  const response: PutMaintenanceStartTimeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0PutMaintenanceStartTimeCommandError
 */
const de_PutMaintenanceStartTimeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMaintenanceStartTimeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.backupgateway#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.backupgateway#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupgateway#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0StartVirtualMachinesMetadataSyncCommand
 */
export const de_StartVirtualMachinesMetadataSyncCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartVirtualMachinesMetadataSyncCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartVirtualMachinesMetadataSyncCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartVirtualMachinesMetadataSyncOutput(data, context);
  const response: StartVirtualMachinesMetadataSyncCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0StartVirtualMachinesMetadataSyncCommandError
 */
const de_StartVirtualMachinesMetadataSyncCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartVirtualMachinesMetadataSyncCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.backupgateway#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.backupgateway#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupgateway#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0TagResourceCommand
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
  contents = de_TagResourceOutput(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0TagResourceCommandError
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
    case "InternalServerException":
    case "com.amazonaws.backupgateway#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupgateway#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0TestHypervisorConfigurationCommand
 */
export const de_TestHypervisorConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestHypervisorConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TestHypervisorConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TestHypervisorConfigurationOutput(data, context);
  const response: TestHypervisorConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0TestHypervisorConfigurationCommandError
 */
const de_TestHypervisorConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestHypervisorConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.backupgateway#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.backupgateway#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupgateway#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UntagResourceCommand
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
  contents = de_UntagResourceOutput(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UntagResourceCommandError
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
    case "InternalServerException":
    case "com.amazonaws.backupgateway#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupgateway#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateGatewayInformationCommand
 */
export const de_UpdateGatewayInformationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayInformationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateGatewayInformationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateGatewayInformationOutput(data, context);
  const response: UpdateGatewayInformationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateGatewayInformationCommandError
 */
const de_UpdateGatewayInformationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayInformationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.backupgateway#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.backupgateway#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupgateway#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateGatewaySoftwareNowCommand
 */
export const de_UpdateGatewaySoftwareNowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewaySoftwareNowCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateGatewaySoftwareNowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateGatewaySoftwareNowOutput(data, context);
  const response: UpdateGatewaySoftwareNowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateGatewaySoftwareNowCommandError
 */
const de_UpdateGatewaySoftwareNowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewaySoftwareNowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.backupgateway#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupgateway#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateHypervisorCommand
 */
export const de_UpdateHypervisorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHypervisorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateHypervisorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateHypervisorOutput(data, context);
  const response: UpdateHypervisorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateHypervisorCommandError
 */
const de_UpdateHypervisorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHypervisorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.backupgateway#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.backupgateway#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.backupgateway#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupgateway#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InternalServerException(body, context);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ThrottlingException(body, context);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_0AssociateGatewayToServerInput
 */
const se_AssociateGatewayToServerInput = (input: AssociateGatewayToServerInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayArn != null && { GatewayArn: input.GatewayArn }),
    ...(input.ServerArn != null && { ServerArn: input.ServerArn }),
  };
};

/**
 * serializeAws_json1_0BandwidthRateLimitInterval
 */
const se_BandwidthRateLimitInterval = (input: BandwidthRateLimitInterval, context: __SerdeContext): any => {
  return {
    ...(input.AverageUploadRateLimitInBitsPerSec != null && {
      AverageUploadRateLimitInBitsPerSec: input.AverageUploadRateLimitInBitsPerSec,
    }),
    ...(input.DaysOfWeek != null && { DaysOfWeek: se_DaysOfWeek(input.DaysOfWeek, context) }),
    ...(input.EndHourOfDay != null && { EndHourOfDay: input.EndHourOfDay }),
    ...(input.EndMinuteOfHour != null && { EndMinuteOfHour: input.EndMinuteOfHour }),
    ...(input.StartHourOfDay != null && { StartHourOfDay: input.StartHourOfDay }),
    ...(input.StartMinuteOfHour != null && { StartMinuteOfHour: input.StartMinuteOfHour }),
  };
};

/**
 * serializeAws_json1_0BandwidthRateLimitIntervals
 */
const se_BandwidthRateLimitIntervals = (input: BandwidthRateLimitInterval[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BandwidthRateLimitInterval(entry, context);
    });
};

/**
 * serializeAws_json1_0CreateGatewayInput
 */
const se_CreateGatewayInput = (input: CreateGatewayInput, context: __SerdeContext): any => {
  return {
    ...(input.ActivationKey != null && { ActivationKey: input.ActivationKey }),
    ...(input.GatewayDisplayName != null && { GatewayDisplayName: input.GatewayDisplayName }),
    ...(input.GatewayType != null && { GatewayType: input.GatewayType }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_0DaysOfWeek
 */
const se_DaysOfWeek = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0DeleteGatewayInput
 */
const se_DeleteGatewayInput = (input: DeleteGatewayInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayArn != null && { GatewayArn: input.GatewayArn }),
  };
};

/**
 * serializeAws_json1_0DeleteHypervisorInput
 */
const se_DeleteHypervisorInput = (input: DeleteHypervisorInput, context: __SerdeContext): any => {
  return {
    ...(input.HypervisorArn != null && { HypervisorArn: input.HypervisorArn }),
  };
};

/**
 * serializeAws_json1_0DisassociateGatewayFromServerInput
 */
const se_DisassociateGatewayFromServerInput = (
  input: DisassociateGatewayFromServerInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayArn != null && { GatewayArn: input.GatewayArn }),
  };
};

/**
 * serializeAws_json1_0GetBandwidthRateLimitScheduleInput
 */
const se_GetBandwidthRateLimitScheduleInput = (
  input: GetBandwidthRateLimitScheduleInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayArn != null && { GatewayArn: input.GatewayArn }),
  };
};

/**
 * serializeAws_json1_0GetGatewayInput
 */
const se_GetGatewayInput = (input: GetGatewayInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayArn != null && { GatewayArn: input.GatewayArn }),
  };
};

/**
 * serializeAws_json1_0GetHypervisorInput
 */
const se_GetHypervisorInput = (input: GetHypervisorInput, context: __SerdeContext): any => {
  return {
    ...(input.HypervisorArn != null && { HypervisorArn: input.HypervisorArn }),
  };
};

/**
 * serializeAws_json1_0GetHypervisorPropertyMappingsInput
 */
const se_GetHypervisorPropertyMappingsInput = (
  input: GetHypervisorPropertyMappingsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.HypervisorArn != null && { HypervisorArn: input.HypervisorArn }),
  };
};

/**
 * serializeAws_json1_0GetVirtualMachineInput
 */
const se_GetVirtualMachineInput = (input: GetVirtualMachineInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_0ImportHypervisorConfigurationInput
 */
const se_ImportHypervisorConfigurationInput = (
  input: ImportHypervisorConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Host != null && { Host: input.Host }),
    ...(input.KmsKeyArn != null && { KmsKeyArn: input.KmsKeyArn }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_0ListGatewaysInput
 */
const se_ListGatewaysInput = (input: ListGatewaysInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_0ListHypervisorsInput
 */
const se_ListHypervisorsInput = (input: ListHypervisorsInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_0ListTagsForResourceInput
 */
const se_ListTagsForResourceInput = (input: ListTagsForResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_0ListVirtualMachinesInput
 */
const se_ListVirtualMachinesInput = (input: ListVirtualMachinesInput, context: __SerdeContext): any => {
  return {
    ...(input.HypervisorArn != null && { HypervisorArn: input.HypervisorArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_0PutBandwidthRateLimitScheduleInput
 */
const se_PutBandwidthRateLimitScheduleInput = (
  input: PutBandwidthRateLimitScheduleInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.BandwidthRateLimitIntervals != null && {
      BandwidthRateLimitIntervals: se_BandwidthRateLimitIntervals(input.BandwidthRateLimitIntervals, context),
    }),
    ...(input.GatewayArn != null && { GatewayArn: input.GatewayArn }),
  };
};

/**
 * serializeAws_json1_0PutHypervisorPropertyMappingsInput
 */
const se_PutHypervisorPropertyMappingsInput = (
  input: PutHypervisorPropertyMappingsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.HypervisorArn != null && { HypervisorArn: input.HypervisorArn }),
    ...(input.IamRoleArn != null && { IamRoleArn: input.IamRoleArn }),
    ...(input.VmwareToAwsTagMappings != null && {
      VmwareToAwsTagMappings: se_VmwareToAwsTagMappings(input.VmwareToAwsTagMappings, context),
    }),
  };
};

/**
 * serializeAws_json1_0PutMaintenanceStartTimeInput
 */
const se_PutMaintenanceStartTimeInput = (input: PutMaintenanceStartTimeInput, context: __SerdeContext): any => {
  return {
    ...(input.DayOfMonth != null && { DayOfMonth: input.DayOfMonth }),
    ...(input.DayOfWeek != null && { DayOfWeek: input.DayOfWeek }),
    ...(input.GatewayArn != null && { GatewayArn: input.GatewayArn }),
    ...(input.HourOfDay != null && { HourOfDay: input.HourOfDay }),
    ...(input.MinuteOfHour != null && { MinuteOfHour: input.MinuteOfHour }),
  };
};

/**
 * serializeAws_json1_0StartVirtualMachinesMetadataSyncInput
 */
const se_StartVirtualMachinesMetadataSyncInput = (
  input: StartVirtualMachinesMetadataSyncInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.HypervisorArn != null && { HypervisorArn: input.HypervisorArn }),
  };
};

/**
 * serializeAws_json1_0Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_0TagKeys
 */
const se_TagKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0TagResourceInput
 */
const se_TagResourceInput = (input: TagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_0Tags
 */
const se_Tags = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_0TestHypervisorConfigurationInput
 */
const se_TestHypervisorConfigurationInput = (input: TestHypervisorConfigurationInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayArn != null && { GatewayArn: input.GatewayArn }),
    ...(input.Host != null && { Host: input.Host }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_0UntagResourceInput
 */
const se_UntagResourceInput = (input: UntagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeys(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_0UpdateGatewayInformationInput
 */
const se_UpdateGatewayInformationInput = (input: UpdateGatewayInformationInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayArn != null && { GatewayArn: input.GatewayArn }),
    ...(input.GatewayDisplayName != null && { GatewayDisplayName: input.GatewayDisplayName }),
  };
};

/**
 * serializeAws_json1_0UpdateGatewaySoftwareNowInput
 */
const se_UpdateGatewaySoftwareNowInput = (input: UpdateGatewaySoftwareNowInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayArn != null && { GatewayArn: input.GatewayArn }),
  };
};

/**
 * serializeAws_json1_0UpdateHypervisorInput
 */
const se_UpdateHypervisorInput = (input: UpdateHypervisorInput, context: __SerdeContext): any => {
  return {
    ...(input.Host != null && { Host: input.Host }),
    ...(input.HypervisorArn != null && { HypervisorArn: input.HypervisorArn }),
    ...(input.LogGroupArn != null && { LogGroupArn: input.LogGroupArn }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_0VmwareToAwsTagMapping
 */
const se_VmwareToAwsTagMapping = (input: VmwareToAwsTagMapping, context: __SerdeContext): any => {
  return {
    ...(input.AwsTagKey != null && { AwsTagKey: input.AwsTagKey }),
    ...(input.AwsTagValue != null && { AwsTagValue: input.AwsTagValue }),
    ...(input.VmwareCategory != null && { VmwareCategory: input.VmwareCategory }),
    ...(input.VmwareTagName != null && { VmwareTagName: input.VmwareTagName }),
  };
};

/**
 * serializeAws_json1_0VmwareToAwsTagMappings
 */
const se_VmwareToAwsTagMappings = (input: VmwareToAwsTagMapping[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_VmwareToAwsTagMapping(entry, context);
    });
};

/**
 * deserializeAws_json1_0AccessDeniedException
 */
const de_AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0AssociateGatewayToServerOutput
 */
const de_AssociateGatewayToServerOutput = (output: any, context: __SerdeContext): AssociateGatewayToServerOutput => {
  return {
    GatewayArn: __expectString(output.GatewayArn),
  } as any;
};

/**
 * deserializeAws_json1_0BandwidthRateLimitInterval
 */
const de_BandwidthRateLimitInterval = (output: any, context: __SerdeContext): BandwidthRateLimitInterval => {
  return {
    AverageUploadRateLimitInBitsPerSec: __expectLong(output.AverageUploadRateLimitInBitsPerSec),
    DaysOfWeek: output.DaysOfWeek != null ? de_DaysOfWeek(output.DaysOfWeek, context) : undefined,
    EndHourOfDay: __expectInt32(output.EndHourOfDay),
    EndMinuteOfHour: __expectInt32(output.EndMinuteOfHour),
    StartHourOfDay: __expectInt32(output.StartHourOfDay),
    StartMinuteOfHour: __expectInt32(output.StartMinuteOfHour),
  } as any;
};

/**
 * deserializeAws_json1_0BandwidthRateLimitIntervals
 */
const de_BandwidthRateLimitIntervals = (output: any, context: __SerdeContext): BandwidthRateLimitInterval[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BandwidthRateLimitInterval(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ConflictException
 */
const de_ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0CreateGatewayOutput
 */
const de_CreateGatewayOutput = (output: any, context: __SerdeContext): CreateGatewayOutput => {
  return {
    GatewayArn: __expectString(output.GatewayArn),
  } as any;
};

/**
 * deserializeAws_json1_0DaysOfWeek
 */
const de_DaysOfWeek = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectInt32(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_0DeleteGatewayOutput
 */
const de_DeleteGatewayOutput = (output: any, context: __SerdeContext): DeleteGatewayOutput => {
  return {
    GatewayArn: __expectString(output.GatewayArn),
  } as any;
};

/**
 * deserializeAws_json1_0DeleteHypervisorOutput
 */
const de_DeleteHypervisorOutput = (output: any, context: __SerdeContext): DeleteHypervisorOutput => {
  return {
    HypervisorArn: __expectString(output.HypervisorArn),
  } as any;
};

/**
 * deserializeAws_json1_0DisassociateGatewayFromServerOutput
 */
const de_DisassociateGatewayFromServerOutput = (
  output: any,
  context: __SerdeContext
): DisassociateGatewayFromServerOutput => {
  return {
    GatewayArn: __expectString(output.GatewayArn),
  } as any;
};

/**
 * deserializeAws_json1_0Gateway
 */
const de_Gateway = (output: any, context: __SerdeContext): Gateway => {
  return {
    GatewayArn: __expectString(output.GatewayArn),
    GatewayDisplayName: __expectString(output.GatewayDisplayName),
    GatewayType: __expectString(output.GatewayType),
    HypervisorId: __expectString(output.HypervisorId),
    LastSeenTime:
      output.LastSeenTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastSeenTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GatewayDetails
 */
const de_GatewayDetails = (output: any, context: __SerdeContext): GatewayDetails => {
  return {
    GatewayArn: __expectString(output.GatewayArn),
    GatewayDisplayName: __expectString(output.GatewayDisplayName),
    GatewayType: __expectString(output.GatewayType),
    HypervisorId: __expectString(output.HypervisorId),
    LastSeenTime:
      output.LastSeenTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastSeenTime)))
        : undefined,
    MaintenanceStartTime:
      output.MaintenanceStartTime != null ? de_MaintenanceStartTime(output.MaintenanceStartTime, context) : undefined,
    NextUpdateAvailabilityTime:
      output.NextUpdateAvailabilityTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.NextUpdateAvailabilityTime)))
        : undefined,
    VpcEndpoint: __expectString(output.VpcEndpoint),
  } as any;
};

/**
 * deserializeAws_json1_0Gateways
 */
const de_Gateways = (output: any, context: __SerdeContext): Gateway[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Gateway(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0GetBandwidthRateLimitScheduleOutput
 */
const de_GetBandwidthRateLimitScheduleOutput = (
  output: any,
  context: __SerdeContext
): GetBandwidthRateLimitScheduleOutput => {
  return {
    BandwidthRateLimitIntervals:
      output.BandwidthRateLimitIntervals != null
        ? de_BandwidthRateLimitIntervals(output.BandwidthRateLimitIntervals, context)
        : undefined,
    GatewayArn: __expectString(output.GatewayArn),
  } as any;
};

/**
 * deserializeAws_json1_0GetGatewayOutput
 */
const de_GetGatewayOutput = (output: any, context: __SerdeContext): GetGatewayOutput => {
  return {
    Gateway: output.Gateway != null ? de_GatewayDetails(output.Gateway, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GetHypervisorOutput
 */
const de_GetHypervisorOutput = (output: any, context: __SerdeContext): GetHypervisorOutput => {
  return {
    Hypervisor: output.Hypervisor != null ? de_HypervisorDetails(output.Hypervisor, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GetHypervisorPropertyMappingsOutput
 */
const de_GetHypervisorPropertyMappingsOutput = (
  output: any,
  context: __SerdeContext
): GetHypervisorPropertyMappingsOutput => {
  return {
    HypervisorArn: __expectString(output.HypervisorArn),
    IamRoleArn: __expectString(output.IamRoleArn),
    VmwareToAwsTagMappings:
      output.VmwareToAwsTagMappings != null
        ? de_VmwareToAwsTagMappings(output.VmwareToAwsTagMappings, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GetVirtualMachineOutput
 */
const de_GetVirtualMachineOutput = (output: any, context: __SerdeContext): GetVirtualMachineOutput => {
  return {
    VirtualMachine:
      output.VirtualMachine != null ? de_VirtualMachineDetails(output.VirtualMachine, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0Hypervisor
 */
const de_Hypervisor = (output: any, context: __SerdeContext): Hypervisor => {
  return {
    Host: __expectString(output.Host),
    HypervisorArn: __expectString(output.HypervisorArn),
    KmsKeyArn: __expectString(output.KmsKeyArn),
    Name: __expectString(output.Name),
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_json1_0HypervisorDetails
 */
const de_HypervisorDetails = (output: any, context: __SerdeContext): HypervisorDetails => {
  return {
    Host: __expectString(output.Host),
    HypervisorArn: __expectString(output.HypervisorArn),
    KmsKeyArn: __expectString(output.KmsKeyArn),
    LastSuccessfulMetadataSyncTime:
      output.LastSuccessfulMetadataSyncTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastSuccessfulMetadataSyncTime)))
        : undefined,
    LatestMetadataSyncStatus: __expectString(output.LatestMetadataSyncStatus),
    LatestMetadataSyncStatusMessage: __expectString(output.LatestMetadataSyncStatusMessage),
    LogGroupArn: __expectString(output.LogGroupArn),
    Name: __expectString(output.Name),
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_json1_0Hypervisors
 */
const de_Hypervisors = (output: any, context: __SerdeContext): Hypervisor[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Hypervisor(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ImportHypervisorConfigurationOutput
 */
const de_ImportHypervisorConfigurationOutput = (
  output: any,
  context: __SerdeContext
): ImportHypervisorConfigurationOutput => {
  return {
    HypervisorArn: __expectString(output.HypervisorArn),
  } as any;
};

/**
 * deserializeAws_json1_0InternalServerException
 */
const de_InternalServerException = (output: any, context: __SerdeContext): InternalServerException => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0ListGatewaysOutput
 */
const de_ListGatewaysOutput = (output: any, context: __SerdeContext): ListGatewaysOutput => {
  return {
    Gateways: output.Gateways != null ? de_Gateways(output.Gateways, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListHypervisorsOutput
 */
const de_ListHypervisorsOutput = (output: any, context: __SerdeContext): ListHypervisorsOutput => {
  return {
    Hypervisors: output.Hypervisors != null ? de_Hypervisors(output.Hypervisors, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListTagsForResourceOutput
 */
const de_ListTagsForResourceOutput = (output: any, context: __SerdeContext): ListTagsForResourceOutput => {
  return {
    ResourceArn: __expectString(output.ResourceArn),
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListVirtualMachinesOutput
 */
const de_ListVirtualMachinesOutput = (output: any, context: __SerdeContext): ListVirtualMachinesOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    VirtualMachines: output.VirtualMachines != null ? de_VirtualMachines(output.VirtualMachines, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0MaintenanceStartTime
 */
const de_MaintenanceStartTime = (output: any, context: __SerdeContext): MaintenanceStartTime => {
  return {
    DayOfMonth: __expectInt32(output.DayOfMonth),
    DayOfWeek: __expectInt32(output.DayOfWeek),
    HourOfDay: __expectInt32(output.HourOfDay),
    MinuteOfHour: __expectInt32(output.MinuteOfHour),
  } as any;
};

/**
 * deserializeAws_json1_0PutBandwidthRateLimitScheduleOutput
 */
const de_PutBandwidthRateLimitScheduleOutput = (
  output: any,
  context: __SerdeContext
): PutBandwidthRateLimitScheduleOutput => {
  return {
    GatewayArn: __expectString(output.GatewayArn),
  } as any;
};

/**
 * deserializeAws_json1_0PutHypervisorPropertyMappingsOutput
 */
const de_PutHypervisorPropertyMappingsOutput = (
  output: any,
  context: __SerdeContext
): PutHypervisorPropertyMappingsOutput => {
  return {
    HypervisorArn: __expectString(output.HypervisorArn),
  } as any;
};

/**
 * deserializeAws_json1_0PutMaintenanceStartTimeOutput
 */
const de_PutMaintenanceStartTimeOutput = (output: any, context: __SerdeContext): PutMaintenanceStartTimeOutput => {
  return {
    GatewayArn: __expectString(output.GatewayArn),
  } as any;
};

/**
 * deserializeAws_json1_0ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0StartVirtualMachinesMetadataSyncOutput
 */
const de_StartVirtualMachinesMetadataSyncOutput = (
  output: any,
  context: __SerdeContext
): StartVirtualMachinesMetadataSyncOutput => {
  return {
    HypervisorArn: __expectString(output.HypervisorArn),
  } as any;
};

/**
 * deserializeAws_json1_0Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_0TagResourceOutput
 */
const de_TagResourceOutput = (output: any, context: __SerdeContext): TagResourceOutput => {
  return {
    ResourceARN: __expectString(output.ResourceARN),
  } as any;
};

/**
 * deserializeAws_json1_0Tags
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
 * deserializeAws_json1_0TestHypervisorConfigurationOutput
 */
const de_TestHypervisorConfigurationOutput = (
  output: any,
  context: __SerdeContext
): TestHypervisorConfigurationOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_0ThrottlingException
 */
const de_ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0UntagResourceOutput
 */
const de_UntagResourceOutput = (output: any, context: __SerdeContext): UntagResourceOutput => {
  return {
    ResourceARN: __expectString(output.ResourceARN),
  } as any;
};

/**
 * deserializeAws_json1_0UpdateGatewayInformationOutput
 */
const de_UpdateGatewayInformationOutput = (output: any, context: __SerdeContext): UpdateGatewayInformationOutput => {
  return {
    GatewayArn: __expectString(output.GatewayArn),
  } as any;
};

/**
 * deserializeAws_json1_0UpdateGatewaySoftwareNowOutput
 */
const de_UpdateGatewaySoftwareNowOutput = (output: any, context: __SerdeContext): UpdateGatewaySoftwareNowOutput => {
  return {
    GatewayArn: __expectString(output.GatewayArn),
  } as any;
};

/**
 * deserializeAws_json1_0UpdateHypervisorOutput
 */
const de_UpdateHypervisorOutput = (output: any, context: __SerdeContext): UpdateHypervisorOutput => {
  return {
    HypervisorArn: __expectString(output.HypervisorArn),
  } as any;
};

/**
 * deserializeAws_json1_0ValidationException
 */
const de_ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0VirtualMachine
 */
const de_VirtualMachine = (output: any, context: __SerdeContext): VirtualMachine => {
  return {
    HostName: __expectString(output.HostName),
    HypervisorId: __expectString(output.HypervisorId),
    LastBackupDate:
      output.LastBackupDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastBackupDate)))
        : undefined,
    Name: __expectString(output.Name),
    Path: __expectString(output.Path),
    ResourceArn: __expectString(output.ResourceArn),
  } as any;
};

/**
 * deserializeAws_json1_0VirtualMachineDetails
 */
const de_VirtualMachineDetails = (output: any, context: __SerdeContext): VirtualMachineDetails => {
  return {
    HostName: __expectString(output.HostName),
    HypervisorId: __expectString(output.HypervisorId),
    LastBackupDate:
      output.LastBackupDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastBackupDate)))
        : undefined,
    Name: __expectString(output.Name),
    Path: __expectString(output.Path),
    ResourceArn: __expectString(output.ResourceArn),
    VmwareTags: output.VmwareTags != null ? de_VmwareTags(output.VmwareTags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0VirtualMachines
 */
const de_VirtualMachines = (output: any, context: __SerdeContext): VirtualMachine[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VirtualMachine(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0VmwareTag
 */
const de_VmwareTag = (output: any, context: __SerdeContext): VmwareTag => {
  return {
    VmwareCategory: __expectString(output.VmwareCategory),
    VmwareTagDescription: __expectString(output.VmwareTagDescription),
    VmwareTagName: __expectString(output.VmwareTagName),
  } as any;
};

/**
 * deserializeAws_json1_0VmwareTags
 */
const de_VmwareTags = (output: any, context: __SerdeContext): VmwareTag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VmwareTag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0VmwareToAwsTagMapping
 */
const de_VmwareToAwsTagMapping = (output: any, context: __SerdeContext): VmwareToAwsTagMapping => {
  return {
    AwsTagKey: __expectString(output.AwsTagKey),
    AwsTagValue: __expectString(output.AwsTagValue),
    VmwareCategory: __expectString(output.VmwareCategory),
    VmwareTagName: __expectString(output.VmwareTagName),
  } as any;
};

/**
 * deserializeAws_json1_0VmwareToAwsTagMappings
 */
const de_VmwareToAwsTagMappings = (output: any, context: __SerdeContext): VmwareToAwsTagMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VmwareToAwsTagMapping(entry, context);
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
