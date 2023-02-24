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

export const serializeAws_json1_0AssociateGatewayToServerCommand = async (
  input: AssociateGatewayToServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.AssociateGatewayToServer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0AssociateGatewayToServerInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateGatewayCommand = async (
  input: CreateGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.CreateGateway",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateGatewayInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteGatewayCommand = async (
  input: DeleteGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.DeleteGateway",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteGatewayInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteHypervisorCommand = async (
  input: DeleteHypervisorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.DeleteHypervisor",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteHypervisorInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DisassociateGatewayFromServerCommand = async (
  input: DisassociateGatewayFromServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.DisassociateGatewayFromServer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DisassociateGatewayFromServerInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetBandwidthRateLimitScheduleCommand = async (
  input: GetBandwidthRateLimitScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.GetBandwidthRateLimitSchedule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetBandwidthRateLimitScheduleInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetGatewayCommand = async (
  input: GetGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.GetGateway",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetGatewayInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetHypervisorCommand = async (
  input: GetHypervisorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.GetHypervisor",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetHypervisorInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetHypervisorPropertyMappingsCommand = async (
  input: GetHypervisorPropertyMappingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.GetHypervisorPropertyMappings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetHypervisorPropertyMappingsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetVirtualMachineCommand = async (
  input: GetVirtualMachineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.GetVirtualMachine",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetVirtualMachineInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ImportHypervisorConfigurationCommand = async (
  input: ImportHypervisorConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.ImportHypervisorConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ImportHypervisorConfigurationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListGatewaysCommand = async (
  input: ListGatewaysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.ListGateways",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListGatewaysInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListHypervisorsCommand = async (
  input: ListHypervisorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.ListHypervisors",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListHypervisorsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListTagsForResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListVirtualMachinesCommand = async (
  input: ListVirtualMachinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.ListVirtualMachines",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListVirtualMachinesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0PutBandwidthRateLimitScheduleCommand = async (
  input: PutBandwidthRateLimitScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.PutBandwidthRateLimitSchedule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0PutBandwidthRateLimitScheduleInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0PutHypervisorPropertyMappingsCommand = async (
  input: PutHypervisorPropertyMappingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.PutHypervisorPropertyMappings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0PutHypervisorPropertyMappingsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0PutMaintenanceStartTimeCommand = async (
  input: PutMaintenanceStartTimeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.PutMaintenanceStartTime",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0PutMaintenanceStartTimeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0StartVirtualMachinesMetadataSyncCommand = async (
  input: StartVirtualMachinesMetadataSyncCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.StartVirtualMachinesMetadataSync",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0StartVirtualMachinesMetadataSyncInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0TagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0TestHypervisorConfigurationCommand = async (
  input: TestHypervisorConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.TestHypervisorConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0TestHypervisorConfigurationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UntagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateGatewayInformationCommand = async (
  input: UpdateGatewayInformationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.UpdateGatewayInformation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateGatewayInformationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateGatewaySoftwareNowCommand = async (
  input: UpdateGatewaySoftwareNowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.UpdateGatewaySoftwareNow",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateGatewaySoftwareNowInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateHypervisorCommand = async (
  input: UpdateHypervisorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "BackupOnPremises_v20210101.UpdateHypervisor",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateHypervisorInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_0AssociateGatewayToServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateGatewayToServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0AssociateGatewayToServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0AssociateGatewayToServerOutput(data, context);
  const response: AssociateGatewayToServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0AssociateGatewayToServerCommandError = async (
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
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.backupgateway#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CreateGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGatewayCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateGatewayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateGatewayOutput(data, context);
  const response: CreateGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateGatewayCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGatewayCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteGatewayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteGatewayOutput(data, context);
  const response: DeleteGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteGatewayCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupgateway#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteHypervisorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHypervisorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteHypervisorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteHypervisorOutput(data, context);
  const response: DeleteHypervisorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteHypervisorCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.backupgateway#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.backupgateway#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupgateway#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DisassociateGatewayFromServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateGatewayFromServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DisassociateGatewayFromServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DisassociateGatewayFromServerOutput(data, context);
  const response: DisassociateGatewayFromServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DisassociateGatewayFromServerCommandError = async (
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
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.backupgateway#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupgateway#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0GetBandwidthRateLimitScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBandwidthRateLimitScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetBandwidthRateLimitScheduleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetBandwidthRateLimitScheduleOutput(data, context);
  const response: GetBandwidthRateLimitScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetBandwidthRateLimitScheduleCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupgateway#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0GetGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGatewayCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetGatewayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetGatewayOutput(data, context);
  const response: GetGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetGatewayCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupgateway#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0GetHypervisorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHypervisorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetHypervisorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetHypervisorOutput(data, context);
  const response: GetHypervisorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetHypervisorCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupgateway#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0GetHypervisorPropertyMappingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHypervisorPropertyMappingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetHypervisorPropertyMappingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetHypervisorPropertyMappingsOutput(data, context);
  const response: GetHypervisorPropertyMappingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetHypervisorPropertyMappingsCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupgateway#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0GetVirtualMachineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVirtualMachineCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetVirtualMachineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetVirtualMachineOutput(data, context);
  const response: GetVirtualMachineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetVirtualMachineCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupgateway#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ImportHypervisorConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportHypervisorConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ImportHypervisorConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ImportHypervisorConfigurationOutput(data, context);
  const response: ImportHypervisorConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ImportHypervisorConfigurationCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.backupgateway#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.backupgateway#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListGatewaysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGatewaysCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListGatewaysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListGatewaysOutput(data, context);
  const response: ListGatewaysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListGatewaysCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListHypervisorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHypervisorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListHypervisorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListHypervisorsOutput(data, context);
  const response: ListHypervisorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListHypervisorsCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListTagsForResourceOutput(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupgateway#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListVirtualMachinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualMachinesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListVirtualMachinesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListVirtualMachinesOutput(data, context);
  const response: ListVirtualMachinesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListVirtualMachinesCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0PutBandwidthRateLimitScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBandwidthRateLimitScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0PutBandwidthRateLimitScheduleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0PutBandwidthRateLimitScheduleOutput(data, context);
  const response: PutBandwidthRateLimitScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0PutBandwidthRateLimitScheduleCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupgateway#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0PutHypervisorPropertyMappingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutHypervisorPropertyMappingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0PutHypervisorPropertyMappingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0PutHypervisorPropertyMappingsOutput(data, context);
  const response: PutHypervisorPropertyMappingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0PutHypervisorPropertyMappingsCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.backupgateway#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.backupgateway#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupgateway#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0PutMaintenanceStartTimeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMaintenanceStartTimeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0PutMaintenanceStartTimeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0PutMaintenanceStartTimeOutput(data, context);
  const response: PutMaintenanceStartTimeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0PutMaintenanceStartTimeCommandError = async (
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
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.backupgateway#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupgateway#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0StartVirtualMachinesMetadataSyncCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartVirtualMachinesMetadataSyncCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0StartVirtualMachinesMetadataSyncCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0StartVirtualMachinesMetadataSyncOutput(data, context);
  const response: StartVirtualMachinesMetadataSyncCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0StartVirtualMachinesMetadataSyncCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.backupgateway#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupgateway#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0TagResourceOutput(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0TagResourceCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupgateway#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0TestHypervisorConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestHypervisorConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0TestHypervisorConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0TestHypervisorConfigurationOutput(data, context);
  const response: TestHypervisorConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0TestHypervisorConfigurationCommandError = async (
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
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.backupgateway#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupgateway#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UntagResourceOutput(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UntagResourceCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupgateway#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateGatewayInformationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayInformationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateGatewayInformationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateGatewayInformationOutput(data, context);
  const response: UpdateGatewayInformationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateGatewayInformationCommandError = async (
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
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.backupgateway#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupgateway#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateGatewaySoftwareNowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewaySoftwareNowCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateGatewaySoftwareNowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateGatewaySoftwareNowOutput(data, context);
  const response: UpdateGatewaySoftwareNowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateGatewaySoftwareNowCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupgateway#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateHypervisorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHypervisorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateHypervisorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateHypervisorOutput(data, context);
  const response: UpdateHypervisorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateHypervisorCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.backupgateway#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.backupgateway#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backupgateway#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.backupgateway#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.backupgateway#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_0AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InternalServerException(body, context);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ThrottlingException(body, context);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_0AssociateGatewayToServerInput = (
  input: AssociateGatewayToServerInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayArn != null && { GatewayArn: input.GatewayArn }),
    ...(input.ServerArn != null && { ServerArn: input.ServerArn }),
  };
};

const serializeAws_json1_0BandwidthRateLimitInterval = (
  input: BandwidthRateLimitInterval,
  context: __SerdeContext
): any => {
  return {
    ...(input.AverageUploadRateLimitInBitsPerSec != null && {
      AverageUploadRateLimitInBitsPerSec: input.AverageUploadRateLimitInBitsPerSec,
    }),
    ...(input.DaysOfWeek != null && { DaysOfWeek: serializeAws_json1_0DaysOfWeek(input.DaysOfWeek, context) }),
    ...(input.EndHourOfDay != null && { EndHourOfDay: input.EndHourOfDay }),
    ...(input.EndMinuteOfHour != null && { EndMinuteOfHour: input.EndMinuteOfHour }),
    ...(input.StartHourOfDay != null && { StartHourOfDay: input.StartHourOfDay }),
    ...(input.StartMinuteOfHour != null && { StartMinuteOfHour: input.StartMinuteOfHour }),
  };
};

const serializeAws_json1_0BandwidthRateLimitIntervals = (
  input: BandwidthRateLimitInterval[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0BandwidthRateLimitInterval(entry, context);
    });
};

const serializeAws_json1_0CreateGatewayInput = (input: CreateGatewayInput, context: __SerdeContext): any => {
  return {
    ...(input.ActivationKey != null && { ActivationKey: input.ActivationKey }),
    ...(input.GatewayDisplayName != null && { GatewayDisplayName: input.GatewayDisplayName }),
    ...(input.GatewayType != null && { GatewayType: input.GatewayType }),
    ...(input.Tags != null && { Tags: serializeAws_json1_0Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_0DaysOfWeek = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0DeleteGatewayInput = (input: DeleteGatewayInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayArn != null && { GatewayArn: input.GatewayArn }),
  };
};

const serializeAws_json1_0DeleteHypervisorInput = (input: DeleteHypervisorInput, context: __SerdeContext): any => {
  return {
    ...(input.HypervisorArn != null && { HypervisorArn: input.HypervisorArn }),
  };
};

const serializeAws_json1_0DisassociateGatewayFromServerInput = (
  input: DisassociateGatewayFromServerInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayArn != null && { GatewayArn: input.GatewayArn }),
  };
};

const serializeAws_json1_0GetBandwidthRateLimitScheduleInput = (
  input: GetBandwidthRateLimitScheduleInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayArn != null && { GatewayArn: input.GatewayArn }),
  };
};

const serializeAws_json1_0GetGatewayInput = (input: GetGatewayInput, context: __SerdeContext): any => {
  return {
    ...(input.GatewayArn != null && { GatewayArn: input.GatewayArn }),
  };
};

const serializeAws_json1_0GetHypervisorInput = (input: GetHypervisorInput, context: __SerdeContext): any => {
  return {
    ...(input.HypervisorArn != null && { HypervisorArn: input.HypervisorArn }),
  };
};

const serializeAws_json1_0GetHypervisorPropertyMappingsInput = (
  input: GetHypervisorPropertyMappingsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.HypervisorArn != null && { HypervisorArn: input.HypervisorArn }),
  };
};

const serializeAws_json1_0GetVirtualMachineInput = (input: GetVirtualMachineInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_0ImportHypervisorConfigurationInput = (
  input: ImportHypervisorConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Host != null && { Host: input.Host }),
    ...(input.KmsKeyArn != null && { KmsKeyArn: input.KmsKeyArn }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.Tags != null && { Tags: serializeAws_json1_0Tags(input.Tags, context) }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

const serializeAws_json1_0ListGatewaysInput = (input: ListGatewaysInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_0ListHypervisorsInput = (input: ListHypervisorsInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_0ListTagsForResourceInput = (
  input: ListTagsForResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_0ListVirtualMachinesInput = (
  input: ListVirtualMachinesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.HypervisorArn != null && { HypervisorArn: input.HypervisorArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_0PutBandwidthRateLimitScheduleInput = (
  input: PutBandwidthRateLimitScheduleInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.BandwidthRateLimitIntervals != null && {
      BandwidthRateLimitIntervals: serializeAws_json1_0BandwidthRateLimitIntervals(
        input.BandwidthRateLimitIntervals,
        context
      ),
    }),
    ...(input.GatewayArn != null && { GatewayArn: input.GatewayArn }),
  };
};

const serializeAws_json1_0PutHypervisorPropertyMappingsInput = (
  input: PutHypervisorPropertyMappingsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.HypervisorArn != null && { HypervisorArn: input.HypervisorArn }),
    ...(input.IamRoleArn != null && { IamRoleArn: input.IamRoleArn }),
    ...(input.VmwareToAwsTagMappings != null && {
      VmwareToAwsTagMappings: serializeAws_json1_0VmwareToAwsTagMappings(input.VmwareToAwsTagMappings, context),
    }),
  };
};

const serializeAws_json1_0PutMaintenanceStartTimeInput = (
  input: PutMaintenanceStartTimeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DayOfMonth != null && { DayOfMonth: input.DayOfMonth }),
    ...(input.DayOfWeek != null && { DayOfWeek: input.DayOfWeek }),
    ...(input.GatewayArn != null && { GatewayArn: input.GatewayArn }),
    ...(input.HourOfDay != null && { HourOfDay: input.HourOfDay }),
    ...(input.MinuteOfHour != null && { MinuteOfHour: input.MinuteOfHour }),
  };
};

const serializeAws_json1_0StartVirtualMachinesMetadataSyncInput = (
  input: StartVirtualMachinesMetadataSyncInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.HypervisorArn != null && { HypervisorArn: input.HypervisorArn }),
  };
};

const serializeAws_json1_0Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_0TagKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0TagResourceInput = (input: TagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: serializeAws_json1_0Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_0Tags = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0Tag(entry, context);
    });
};

const serializeAws_json1_0TestHypervisorConfigurationInput = (
  input: TestHypervisorConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayArn != null && { GatewayArn: input.GatewayArn }),
    ...(input.Host != null && { Host: input.Host }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

const serializeAws_json1_0UntagResourceInput = (input: UntagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_0TagKeys(input.TagKeys, context) }),
  };
};

const serializeAws_json1_0UpdateGatewayInformationInput = (
  input: UpdateGatewayInformationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayArn != null && { GatewayArn: input.GatewayArn }),
    ...(input.GatewayDisplayName != null && { GatewayDisplayName: input.GatewayDisplayName }),
  };
};

const serializeAws_json1_0UpdateGatewaySoftwareNowInput = (
  input: UpdateGatewaySoftwareNowInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayArn != null && { GatewayArn: input.GatewayArn }),
  };
};

const serializeAws_json1_0UpdateHypervisorInput = (input: UpdateHypervisorInput, context: __SerdeContext): any => {
  return {
    ...(input.Host != null && { Host: input.Host }),
    ...(input.HypervisorArn != null && { HypervisorArn: input.HypervisorArn }),
    ...(input.LogGroupArn != null && { LogGroupArn: input.LogGroupArn }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

const serializeAws_json1_0VmwareToAwsTagMapping = (input: VmwareToAwsTagMapping, context: __SerdeContext): any => {
  return {
    ...(input.AwsTagKey != null && { AwsTagKey: input.AwsTagKey }),
    ...(input.AwsTagValue != null && { AwsTagValue: input.AwsTagValue }),
    ...(input.VmwareCategory != null && { VmwareCategory: input.VmwareCategory }),
    ...(input.VmwareTagName != null && { VmwareTagName: input.VmwareTagName }),
  };
};

const serializeAws_json1_0VmwareToAwsTagMappings = (input: VmwareToAwsTagMapping[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0VmwareToAwsTagMapping(entry, context);
    });
};

const deserializeAws_json1_0AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0AssociateGatewayToServerOutput = (
  output: any,
  context: __SerdeContext
): AssociateGatewayToServerOutput => {
  return {
    GatewayArn: __expectString(output.GatewayArn),
  } as any;
};

const deserializeAws_json1_0BandwidthRateLimitInterval = (
  output: any,
  context: __SerdeContext
): BandwidthRateLimitInterval => {
  return {
    AverageUploadRateLimitInBitsPerSec: __expectLong(output.AverageUploadRateLimitInBitsPerSec),
    DaysOfWeek: output.DaysOfWeek != null ? deserializeAws_json1_0DaysOfWeek(output.DaysOfWeek, context) : undefined,
    EndHourOfDay: __expectInt32(output.EndHourOfDay),
    EndMinuteOfHour: __expectInt32(output.EndMinuteOfHour),
    StartHourOfDay: __expectInt32(output.StartHourOfDay),
    StartMinuteOfHour: __expectInt32(output.StartMinuteOfHour),
  } as any;
};

const deserializeAws_json1_0BandwidthRateLimitIntervals = (
  output: any,
  context: __SerdeContext
): BandwidthRateLimitInterval[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0BandwidthRateLimitInterval(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0CreateGatewayOutput = (output: any, context: __SerdeContext): CreateGatewayOutput => {
  return {
    GatewayArn: __expectString(output.GatewayArn),
  } as any;
};

const deserializeAws_json1_0DaysOfWeek = (output: any, context: __SerdeContext): number[] => {
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

const deserializeAws_json1_0DeleteGatewayOutput = (output: any, context: __SerdeContext): DeleteGatewayOutput => {
  return {
    GatewayArn: __expectString(output.GatewayArn),
  } as any;
};

const deserializeAws_json1_0DeleteHypervisorOutput = (output: any, context: __SerdeContext): DeleteHypervisorOutput => {
  return {
    HypervisorArn: __expectString(output.HypervisorArn),
  } as any;
};

const deserializeAws_json1_0DisassociateGatewayFromServerOutput = (
  output: any,
  context: __SerdeContext
): DisassociateGatewayFromServerOutput => {
  return {
    GatewayArn: __expectString(output.GatewayArn),
  } as any;
};

const deserializeAws_json1_0Gateway = (output: any, context: __SerdeContext): Gateway => {
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

const deserializeAws_json1_0GatewayDetails = (output: any, context: __SerdeContext): GatewayDetails => {
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
      output.MaintenanceStartTime != null
        ? deserializeAws_json1_0MaintenanceStartTime(output.MaintenanceStartTime, context)
        : undefined,
    NextUpdateAvailabilityTime:
      output.NextUpdateAvailabilityTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.NextUpdateAvailabilityTime)))
        : undefined,
    VpcEndpoint: __expectString(output.VpcEndpoint),
  } as any;
};

const deserializeAws_json1_0Gateways = (output: any, context: __SerdeContext): Gateway[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0Gateway(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0GetBandwidthRateLimitScheduleOutput = (
  output: any,
  context: __SerdeContext
): GetBandwidthRateLimitScheduleOutput => {
  return {
    BandwidthRateLimitIntervals:
      output.BandwidthRateLimitIntervals != null
        ? deserializeAws_json1_0BandwidthRateLimitIntervals(output.BandwidthRateLimitIntervals, context)
        : undefined,
    GatewayArn: __expectString(output.GatewayArn),
  } as any;
};

const deserializeAws_json1_0GetGatewayOutput = (output: any, context: __SerdeContext): GetGatewayOutput => {
  return {
    Gateway: output.Gateway != null ? deserializeAws_json1_0GatewayDetails(output.Gateway, context) : undefined,
  } as any;
};

const deserializeAws_json1_0GetHypervisorOutput = (output: any, context: __SerdeContext): GetHypervisorOutput => {
  return {
    Hypervisor:
      output.Hypervisor != null ? deserializeAws_json1_0HypervisorDetails(output.Hypervisor, context) : undefined,
  } as any;
};

const deserializeAws_json1_0GetHypervisorPropertyMappingsOutput = (
  output: any,
  context: __SerdeContext
): GetHypervisorPropertyMappingsOutput => {
  return {
    HypervisorArn: __expectString(output.HypervisorArn),
    IamRoleArn: __expectString(output.IamRoleArn),
    VmwareToAwsTagMappings:
      output.VmwareToAwsTagMappings != null
        ? deserializeAws_json1_0VmwareToAwsTagMappings(output.VmwareToAwsTagMappings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0GetVirtualMachineOutput = (
  output: any,
  context: __SerdeContext
): GetVirtualMachineOutput => {
  return {
    VirtualMachine:
      output.VirtualMachine != null
        ? deserializeAws_json1_0VirtualMachineDetails(output.VirtualMachine, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0Hypervisor = (output: any, context: __SerdeContext): Hypervisor => {
  return {
    Host: __expectString(output.Host),
    HypervisorArn: __expectString(output.HypervisorArn),
    KmsKeyArn: __expectString(output.KmsKeyArn),
    Name: __expectString(output.Name),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_json1_0HypervisorDetails = (output: any, context: __SerdeContext): HypervisorDetails => {
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

const deserializeAws_json1_0Hypervisors = (output: any, context: __SerdeContext): Hypervisor[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0Hypervisor(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0ImportHypervisorConfigurationOutput = (
  output: any,
  context: __SerdeContext
): ImportHypervisorConfigurationOutput => {
  return {
    HypervisorArn: __expectString(output.HypervisorArn),
  } as any;
};

const deserializeAws_json1_0InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0ListGatewaysOutput = (output: any, context: __SerdeContext): ListGatewaysOutput => {
  return {
    Gateways: output.Gateways != null ? deserializeAws_json1_0Gateways(output.Gateways, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_0ListHypervisorsOutput = (output: any, context: __SerdeContext): ListHypervisorsOutput => {
  return {
    Hypervisors:
      output.Hypervisors != null ? deserializeAws_json1_0Hypervisors(output.Hypervisors, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_0ListTagsForResourceOutput = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceOutput => {
  return {
    ResourceArn: __expectString(output.ResourceArn),
    Tags: output.Tags != null ? deserializeAws_json1_0Tags(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_0ListVirtualMachinesOutput = (
  output: any,
  context: __SerdeContext
): ListVirtualMachinesOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    VirtualMachines:
      output.VirtualMachines != null
        ? deserializeAws_json1_0VirtualMachines(output.VirtualMachines, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0MaintenanceStartTime = (output: any, context: __SerdeContext): MaintenanceStartTime => {
  return {
    DayOfMonth: __expectInt32(output.DayOfMonth),
    DayOfWeek: __expectInt32(output.DayOfWeek),
    HourOfDay: __expectInt32(output.HourOfDay),
    MinuteOfHour: __expectInt32(output.MinuteOfHour),
  } as any;
};

const deserializeAws_json1_0PutBandwidthRateLimitScheduleOutput = (
  output: any,
  context: __SerdeContext
): PutBandwidthRateLimitScheduleOutput => {
  return {
    GatewayArn: __expectString(output.GatewayArn),
  } as any;
};

const deserializeAws_json1_0PutHypervisorPropertyMappingsOutput = (
  output: any,
  context: __SerdeContext
): PutHypervisorPropertyMappingsOutput => {
  return {
    HypervisorArn: __expectString(output.HypervisorArn),
  } as any;
};

const deserializeAws_json1_0PutMaintenanceStartTimeOutput = (
  output: any,
  context: __SerdeContext
): PutMaintenanceStartTimeOutput => {
  return {
    GatewayArn: __expectString(output.GatewayArn),
  } as any;
};

const deserializeAws_json1_0ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0StartVirtualMachinesMetadataSyncOutput = (
  output: any,
  context: __SerdeContext
): StartVirtualMachinesMetadataSyncOutput => {
  return {
    HypervisorArn: __expectString(output.HypervisorArn),
  } as any;
};

const deserializeAws_json1_0Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_0TagResourceOutput = (output: any, context: __SerdeContext): TagResourceOutput => {
  return {
    ResourceARN: __expectString(output.ResourceARN),
  } as any;
};

const deserializeAws_json1_0Tags = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0TestHypervisorConfigurationOutput = (
  output: any,
  context: __SerdeContext
): TestHypervisorConfigurationOutput => {
  return {} as any;
};

const deserializeAws_json1_0ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0UntagResourceOutput = (output: any, context: __SerdeContext): UntagResourceOutput => {
  return {
    ResourceARN: __expectString(output.ResourceARN),
  } as any;
};

const deserializeAws_json1_0UpdateGatewayInformationOutput = (
  output: any,
  context: __SerdeContext
): UpdateGatewayInformationOutput => {
  return {
    GatewayArn: __expectString(output.GatewayArn),
  } as any;
};

const deserializeAws_json1_0UpdateGatewaySoftwareNowOutput = (
  output: any,
  context: __SerdeContext
): UpdateGatewaySoftwareNowOutput => {
  return {
    GatewayArn: __expectString(output.GatewayArn),
  } as any;
};

const deserializeAws_json1_0UpdateHypervisorOutput = (output: any, context: __SerdeContext): UpdateHypervisorOutput => {
  return {
    HypervisorArn: __expectString(output.HypervisorArn),
  } as any;
};

const deserializeAws_json1_0ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0VirtualMachine = (output: any, context: __SerdeContext): VirtualMachine => {
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

const deserializeAws_json1_0VirtualMachineDetails = (output: any, context: __SerdeContext): VirtualMachineDetails => {
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
    VmwareTags: output.VmwareTags != null ? deserializeAws_json1_0VmwareTags(output.VmwareTags, context) : undefined,
  } as any;
};

const deserializeAws_json1_0VirtualMachines = (output: any, context: __SerdeContext): VirtualMachine[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0VirtualMachine(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0VmwareTag = (output: any, context: __SerdeContext): VmwareTag => {
  return {
    VmwareCategory: __expectString(output.VmwareCategory),
    VmwareTagDescription: __expectString(output.VmwareTagDescription),
    VmwareTagName: __expectString(output.VmwareTagName),
  } as any;
};

const deserializeAws_json1_0VmwareTags = (output: any, context: __SerdeContext): VmwareTag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0VmwareTag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0VmwareToAwsTagMapping = (output: any, context: __SerdeContext): VmwareToAwsTagMapping => {
  return {
    AwsTagKey: __expectString(output.AwsTagKey),
    AwsTagValue: __expectString(output.AwsTagValue),
    VmwareCategory: __expectString(output.VmwareCategory),
    VmwareTagName: __expectString(output.VmwareTagName),
  } as any;
};

const deserializeAws_json1_0VmwareToAwsTagMappings = (
  output: any,
  context: __SerdeContext
): VmwareToAwsTagMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0VmwareToAwsTagMapping(entry, context);
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
