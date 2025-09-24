// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "@smithy/uuid";

import { AssociateVolumeCommandInput, AssociateVolumeCommandOutput } from "../commands/AssociateVolumeCommand";
import { CreateVolumeCommandInput, CreateVolumeCommandOutput } from "../commands/CreateVolumeCommand";
import {
  CreateWorkspaceInstanceCommandInput,
  CreateWorkspaceInstanceCommandOutput,
} from "../commands/CreateWorkspaceInstanceCommand";
import { DeleteVolumeCommandInput, DeleteVolumeCommandOutput } from "../commands/DeleteVolumeCommand";
import {
  DeleteWorkspaceInstanceCommandInput,
  DeleteWorkspaceInstanceCommandOutput,
} from "../commands/DeleteWorkspaceInstanceCommand";
import { DisassociateVolumeCommandInput, DisassociateVolumeCommandOutput } from "../commands/DisassociateVolumeCommand";
import {
  GetWorkspaceInstanceCommandInput,
  GetWorkspaceInstanceCommandOutput,
} from "../commands/GetWorkspaceInstanceCommand";
import { ListInstanceTypesCommandInput, ListInstanceTypesCommandOutput } from "../commands/ListInstanceTypesCommand";
import { ListRegionsCommandInput, ListRegionsCommandOutput } from "../commands/ListRegionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListWorkspaceInstancesCommandInput,
  ListWorkspaceInstancesCommandOutput,
} from "../commands/ListWorkspaceInstancesCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  AccessDeniedException,
  AssociateVolumeRequest,
  BlockDeviceMappingRequest,
  CapacityReservationSpecification,
  CapacityReservationTarget,
  ConflictException,
  ConnectionTrackingSpecificationRequest,
  CpuOptionsRequest,
  CreateVolumeRequest,
  CreateWorkspaceInstanceRequest,
  CreditSpecificationRequest,
  DeleteVolumeRequest,
  DeleteWorkspaceInstanceRequest,
  DisassociateVolumeRequest,
  EbsBlockDevice,
  EnaSrdSpecificationRequest,
  EnaSrdUdpSpecificationRequest,
  EnclaveOptionsRequest,
  GetWorkspaceInstanceRequest,
  HibernationOptionsRequest,
  IamInstanceProfileSpecification,
  InstanceIpv6Address,
  InstanceMaintenanceOptionsRequest,
  InstanceMarketOptionsRequest,
  InstanceMetadataOptionsRequest,
  InstanceNetworkInterfaceSpecification,
  InstanceNetworkPerformanceOptionsRequest,
  InternalServerException,
  Ipv4PrefixSpecificationRequest,
  Ipv6PrefixSpecificationRequest,
  LicenseConfigurationRequest,
  ListInstanceTypesRequest,
  ListRegionsRequest,
  ListTagsForResourceRequest,
  ListWorkspaceInstancesRequest,
  ManagedInstanceRequest,
  Placement,
  PrivateDnsNameOptionsRequest,
  PrivateIpAddressSpecification,
  ProvisionStateEnum,
  ResourceNotFoundException,
  RunInstancesMonitoringEnabled,
  ServiceQuotaExceededException,
  SpotMarketOptions,
  Tag,
  TagResourceRequest,
  TagSpecification,
  ThrottlingException,
  UntagResourceRequest,
  ValidationException,
} from "../models/models_0";
import { WorkspacesInstancesServiceException as __BaseException } from "../models/WorkspacesInstancesServiceException";

/**
 * serializeAws_json1_0AssociateVolumeCommand
 */
export const se_AssociateVolumeCommand = async (
  input: AssociateVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateVolume");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateVolumeCommand
 */
export const se_CreateVolumeCommand = async (
  input: CreateVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateVolume");
  let body: any;
  body = JSON.stringify(se_CreateVolumeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateWorkspaceInstanceCommand
 */
export const se_CreateWorkspaceInstanceCommand = async (
  input: CreateWorkspaceInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateWorkspaceInstance");
  let body: any;
  body = JSON.stringify(se_CreateWorkspaceInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteVolumeCommand
 */
export const se_DeleteVolumeCommand = async (
  input: DeleteVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteVolume");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteWorkspaceInstanceCommand
 */
export const se_DeleteWorkspaceInstanceCommand = async (
  input: DeleteWorkspaceInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteWorkspaceInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DisassociateVolumeCommand
 */
export const se_DisassociateVolumeCommand = async (
  input: DisassociateVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateVolume");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetWorkspaceInstanceCommand
 */
export const se_GetWorkspaceInstanceCommand = async (
  input: GetWorkspaceInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetWorkspaceInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListInstanceTypesCommand
 */
export const se_ListInstanceTypesCommand = async (
  input: ListInstanceTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListInstanceTypes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListRegionsCommand
 */
export const se_ListRegionsCommand = async (
  input: ListRegionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListRegions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListTagsForResourceCommand
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
 * serializeAws_json1_0ListWorkspaceInstancesCommand
 */
export const se_ListWorkspaceInstancesCommand = async (
  input: ListWorkspaceInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListWorkspaceInstances");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0TagResourceCommand
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
 * serializeAws_json1_0UntagResourceCommand
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
 * deserializeAws_json1_0AssociateVolumeCommand
 */
export const de_AssociateVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AssociateVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateVolumeCommand
 */
export const de_CreateVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateWorkspaceInstanceCommand
 */
export const de_CreateWorkspaceInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkspaceInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateWorkspaceInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteVolumeCommand
 */
export const de_DeleteVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteWorkspaceInstanceCommand
 */
export const de_DeleteWorkspaceInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkspaceInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteWorkspaceInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DisassociateVolumeCommand
 */
export const de_DisassociateVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DisassociateVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetWorkspaceInstanceCommand
 */
export const de_GetWorkspaceInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkspaceInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetWorkspaceInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListInstanceTypesCommand
 */
export const de_ListInstanceTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListInstanceTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListRegionsCommand
 */
export const de_ListRegionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRegionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListRegionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0ListWorkspaceInstancesCommand
 */
export const de_ListWorkspaceInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkspaceInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListWorkspaceInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserialize_Aws_json1_0CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.workspacesinstances#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.workspacesinstances#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.workspacesinstances#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workspacesinstances#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.workspacesinstances#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.workspacesinstances#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.workspacesinstances#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ServiceQuotaExceededException({
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AssociateVolumeRequest omitted.

// se_BlockDeviceMappingRequest omitted.

// se_BlockDeviceMappings omitted.

// se_CapacityReservationSpecification omitted.

// se_CapacityReservationTarget omitted.

// se_ConnectionTrackingSpecificationRequest omitted.

// se_CpuOptionsRequest omitted.

/**
 * serializeAws_json1_0CreateVolumeRequest
 */
const se_CreateVolumeRequest = (input: CreateVolumeRequest, context: __SerdeContext): any => {
  return take(input, {
    AvailabilityZone: [],
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Encrypted: [],
    Iops: [],
    KmsKeyId: [],
    SizeInGB: [],
    SnapshotId: [],
    TagSpecifications: _json,
    Throughput: [],
    VolumeType: [],
  });
};

/**
 * serializeAws_json1_0CreateWorkspaceInstanceRequest
 */
const se_CreateWorkspaceInstanceRequest = (input: CreateWorkspaceInstanceRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    ManagedInstance: (_) => se_ManagedInstanceRequest(_, context),
    Tags: _json,
  });
};

// se_CreditSpecificationRequest omitted.

// se_DeleteVolumeRequest omitted.

// se_DeleteWorkspaceInstanceRequest omitted.

// se_DisassociateVolumeRequest omitted.

// se_EbsBlockDevice omitted.

// se_EnaSrdSpecificationRequest omitted.

// se_EnaSrdUdpSpecificationRequest omitted.

// se_EnclaveOptionsRequest omitted.

// se_GetWorkspaceInstanceRequest omitted.

// se_HibernationOptionsRequest omitted.

// se_IamInstanceProfileSpecification omitted.

// se_InstanceIpv6Address omitted.

// se_InstanceMaintenanceOptionsRequest omitted.

/**
 * serializeAws_json1_0InstanceMarketOptionsRequest
 */
const se_InstanceMarketOptionsRequest = (input: InstanceMarketOptionsRequest, context: __SerdeContext): any => {
  return take(input, {
    MarketType: [],
    SpotOptions: (_) => se_SpotMarketOptions(_, context),
  });
};

// se_InstanceMetadataOptionsRequest omitted.

// se_InstanceNetworkInterfaceSpecification omitted.

// se_InstanceNetworkPerformanceOptionsRequest omitted.

// se_Ipv4Prefixes omitted.

// se_Ipv4PrefixSpecificationRequest omitted.

// se_Ipv6Addresses omitted.

// se_Ipv6Prefixes omitted.

// se_Ipv6PrefixSpecificationRequest omitted.

// se_LicenseConfigurationRequest omitted.

// se_LicenseSpecifications omitted.

// se_ListInstanceTypesRequest omitted.

// se_ListRegionsRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_ListWorkspaceInstancesRequest omitted.

/**
 * serializeAws_json1_0ManagedInstanceRequest
 */
const se_ManagedInstanceRequest = (input: ManagedInstanceRequest, context: __SerdeContext): any => {
  return take(input, {
    BlockDeviceMappings: _json,
    CapacityReservationSpecification: _json,
    CpuOptions: _json,
    CreditSpecification: _json,
    DisableApiStop: [],
    EbsOptimized: [],
    EnablePrimaryIpv6: [],
    EnclaveOptions: _json,
    HibernationOptions: _json,
    IamInstanceProfile: _json,
    ImageId: [],
    InstanceMarketOptions: (_) => se_InstanceMarketOptionsRequest(_, context),
    InstanceType: [],
    Ipv6AddressCount: [],
    Ipv6Addresses: _json,
    KernelId: [],
    KeyName: [],
    LicenseSpecifications: _json,
    MaintenanceOptions: _json,
    MetadataOptions: _json,
    Monitoring: _json,
    NetworkInterfaces: _json,
    NetworkPerformanceOptions: _json,
    Placement: _json,
    PrivateDnsNameOptions: _json,
    PrivateIpAddress: [],
    RamdiskId: [],
    SecurityGroupIds: _json,
    SecurityGroups: _json,
    SubnetId: [],
    TagSpecifications: _json,
    UserData: [],
  });
};

// se_NetworkInterfaces omitted.

// se_Placement omitted.

// se_PrivateDnsNameOptionsRequest omitted.

// se_PrivateIpAddresses omitted.

// se_PrivateIpAddressSpecification omitted.

// se_ProvisionStates omitted.

// se_RunInstancesMonitoringEnabled omitted.

// se_SecurityGroupIds omitted.

// se_SecurityGroupNames omitted.

/**
 * serializeAws_json1_0SpotMarketOptions
 */
const se_SpotMarketOptions = (input: SpotMarketOptions, context: __SerdeContext): any => {
  return take(input, {
    BlockDurationMinutes: [],
    InstanceInterruptionBehavior: [],
    MaxPrice: [],
    SpotInstanceType: [],
    ValidUntilUtc: (_) => _.getTime() / 1_000,
  });
};

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

// se_TagSpecification omitted.

// se_TagSpecifications omitted.

// se_UntagResourceRequest omitted.

// de_AccessDeniedException omitted.

// de_AssociateVolumeResponse omitted.

// de_ConflictException omitted.

// de_CreateVolumeResponse omitted.

// de_CreateWorkspaceInstanceResponse omitted.

// de_DeleteVolumeResponse omitted.

// de_DeleteWorkspaceInstanceResponse omitted.

// de_DisassociateVolumeResponse omitted.

// de_EC2InstanceError omitted.

// de_EC2InstanceErrors omitted.

// de_EC2ManagedInstance omitted.

// de_GetWorkspaceInstanceResponse omitted.

// de_InstanceTypeInfo omitted.

// de_InstanceTypes omitted.

// de_InternalServerException omitted.

// de_ListInstanceTypesResponse omitted.

// de_ListRegionsResponse omitted.

// de_ListTagsForResourceResponse omitted.

// de_ListWorkspaceInstancesResponse omitted.

// de_Region omitted.

// de_RegionList omitted.

// de_ResourceNotFoundException omitted.

// de_ServiceQuotaExceededException omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceResponse omitted.

// de_ThrottlingException omitted.

// de_UntagResourceResponse omitted.

// de_ValidationException omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

// de_WorkspaceInstance omitted.

// de_WorkspaceInstanceError omitted.

// de_WorkspaceInstanceErrors omitted.

// de_WorkspaceInstances omitted.

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
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": `EUCMIFrontendAPIService.${operation}`,
  };
}
