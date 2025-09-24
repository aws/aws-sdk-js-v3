// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
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
import { v4 as generateIdempotencyToken } from "@smithy/uuid";

import { AssociateEipToVlanCommandInput, AssociateEipToVlanCommandOutput } from "../commands/AssociateEipToVlanCommand";
import { CreateEnvironmentCommandInput, CreateEnvironmentCommandOutput } from "../commands/CreateEnvironmentCommand";
import {
  CreateEnvironmentHostCommandInput,
  CreateEnvironmentHostCommandOutput,
} from "../commands/CreateEnvironmentHostCommand";
import { DeleteEnvironmentCommandInput, DeleteEnvironmentCommandOutput } from "../commands/DeleteEnvironmentCommand";
import {
  DeleteEnvironmentHostCommandInput,
  DeleteEnvironmentHostCommandOutput,
} from "../commands/DeleteEnvironmentHostCommand";
import {
  DisassociateEipFromVlanCommandInput,
  DisassociateEipFromVlanCommandOutput,
} from "../commands/DisassociateEipFromVlanCommand";
import { GetEnvironmentCommandInput, GetEnvironmentCommandOutput } from "../commands/GetEnvironmentCommand";
import {
  ListEnvironmentHostsCommandInput,
  ListEnvironmentHostsCommandOutput,
} from "../commands/ListEnvironmentHostsCommand";
import { ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput } from "../commands/ListEnvironmentsCommand";
import {
  ListEnvironmentVlansCommandInput,
  ListEnvironmentVlansCommandOutput,
} from "../commands/ListEnvironmentVlansCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { EvsServiceException as __BaseException } from "../models/EvsServiceException";
import {
  AssociateEipToVlanRequest,
  AssociateEipToVlanResponse,
  Check,
  ConnectivityInfo,
  CreateEnvironmentHostRequest,
  CreateEnvironmentHostResponse,
  CreateEnvironmentRequest,
  CreateEnvironmentResponse,
  DeleteEnvironmentHostRequest,
  DeleteEnvironmentHostResponse,
  DeleteEnvironmentRequest,
  DeleteEnvironmentResponse,
  DisassociateEipFromVlanRequest,
  DisassociateEipFromVlanResponse,
  Environment,
  EnvironmentState,
  EnvironmentSummary,
  GetEnvironmentRequest,
  GetEnvironmentResponse,
  Host,
  HostInfoForCreate,
  InitialVlanInfo,
  InitialVlans,
  LicenseInfo,
  ListEnvironmentHostsRequest,
  ListEnvironmentHostsResponse,
  ListEnvironmentsRequest,
  ListEnvironmentsResponse,
  ListEnvironmentVlansRequest,
  ListEnvironmentVlansResponse,
  ListTagsForResourceRequest,
  ResourceNotFoundException,
  ServiceAccessSecurityGroups,
  ServiceQuotaExceededException,
  TagPolicyException,
  TagResourceRequest,
  ThrottlingException,
  TooManyTagsException,
  UntagResourceRequest,
  ValidationException,
  VcfHostnames,
  Vlan,
} from "../models/models_0";

/**
 * serializeAws_json1_0AssociateEipToVlanCommand
 */
export const se_AssociateEipToVlanCommand = async (
  input: AssociateEipToVlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateEipToVlan");
  let body: any;
  body = JSON.stringify(se_AssociateEipToVlanRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateEnvironmentCommand
 */
export const se_CreateEnvironmentCommand = async (
  input: CreateEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateEnvironment");
  let body: any;
  body = JSON.stringify(se_CreateEnvironmentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateEnvironmentHostCommand
 */
export const se_CreateEnvironmentHostCommand = async (
  input: CreateEnvironmentHostCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateEnvironmentHost");
  let body: any;
  body = JSON.stringify(se_CreateEnvironmentHostRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteEnvironmentCommand
 */
export const se_DeleteEnvironmentCommand = async (
  input: DeleteEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteEnvironment");
  let body: any;
  body = JSON.stringify(se_DeleteEnvironmentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteEnvironmentHostCommand
 */
export const se_DeleteEnvironmentHostCommand = async (
  input: DeleteEnvironmentHostCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteEnvironmentHost");
  let body: any;
  body = JSON.stringify(se_DeleteEnvironmentHostRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DisassociateEipFromVlanCommand
 */
export const se_DisassociateEipFromVlanCommand = async (
  input: DisassociateEipFromVlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateEipFromVlan");
  let body: any;
  body = JSON.stringify(se_DisassociateEipFromVlanRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetEnvironmentCommand
 */
export const se_GetEnvironmentCommand = async (
  input: GetEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetEnvironment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListEnvironmentHostsCommand
 */
export const se_ListEnvironmentHostsCommand = async (
  input: ListEnvironmentHostsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEnvironmentHosts");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListEnvironmentsCommand
 */
export const se_ListEnvironmentsCommand = async (
  input: ListEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEnvironments");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListEnvironmentVlansCommand
 */
export const se_ListEnvironmentVlansCommand = async (
  input: ListEnvironmentVlansCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEnvironmentVlans");
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
 * deserializeAws_json1_0AssociateEipToVlanCommand
 */
export const de_AssociateEipToVlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateEipToVlanCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateEipToVlanResponse(data, context);
  const response: AssociateEipToVlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateEnvironmentCommand
 */
export const de_CreateEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateEnvironmentResponse(data, context);
  const response: CreateEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateEnvironmentHostCommand
 */
export const de_CreateEnvironmentHostCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentHostCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateEnvironmentHostResponse(data, context);
  const response: CreateEnvironmentHostCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteEnvironmentCommand
 */
export const de_DeleteEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteEnvironmentResponse(data, context);
  const response: DeleteEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteEnvironmentHostCommand
 */
export const de_DeleteEnvironmentHostCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentHostCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteEnvironmentHostResponse(data, context);
  const response: DeleteEnvironmentHostCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DisassociateEipFromVlanCommand
 */
export const de_DisassociateEipFromVlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateEipFromVlanCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateEipFromVlanResponse(data, context);
  const response: DisassociateEipFromVlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetEnvironmentCommand
 */
export const de_GetEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnvironmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetEnvironmentResponse(data, context);
  const response: GetEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListEnvironmentHostsCommand
 */
export const de_ListEnvironmentHostsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentHostsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEnvironmentHostsResponse(data, context);
  const response: ListEnvironmentHostsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListEnvironmentsCommand
 */
export const de_ListEnvironmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEnvironmentsResponse(data, context);
  const response: ListEnvironmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListEnvironmentVlansCommand
 */
export const de_ListEnvironmentVlansCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentVlansCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEnvironmentVlansResponse(data, context);
  const response: ListEnvironmentVlansCommandOutput = {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.evs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evs#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.evs#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "TagPolicyException":
    case "com.amazonaws.evs#TagPolicyException":
      throw await de_TagPolicyExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.evs#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0TagPolicyExceptionRes
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
 * deserializeAws_json1_0TooManyTagsExceptionRes
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

/**
 * serializeAws_json1_0AssociateEipToVlanRequest
 */
const se_AssociateEipToVlanRequest = (input: AssociateEipToVlanRequest, context: __SerdeContext): any => {
  return take(input, {
    allocationId: [],
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    environmentId: [],
    vlanName: [],
  });
};

// se_ConnectivityInfo omitted.

/**
 * serializeAws_json1_0CreateEnvironmentHostRequest
 */
const se_CreateEnvironmentHostRequest = (input: CreateEnvironmentHostRequest, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    environmentId: [],
    host: _json,
  });
};

/**
 * serializeAws_json1_0CreateEnvironmentRequest
 */
const se_CreateEnvironmentRequest = (input: CreateEnvironmentRequest, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    connectivityInfo: _json,
    environmentName: [],
    hosts: _json,
    initialVlans: _json,
    kmsKeyId: [],
    licenseInfo: _json,
    serviceAccessSecurityGroups: _json,
    serviceAccessSubnetId: [],
    siteId: [],
    tags: _json,
    termsAccepted: [],
    vcfHostnames: _json,
    vcfVersion: [],
    vpcId: [],
  });
};

/**
 * serializeAws_json1_0DeleteEnvironmentHostRequest
 */
const se_DeleteEnvironmentHostRequest = (input: DeleteEnvironmentHostRequest, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    environmentId: [],
    hostName: [],
  });
};

/**
 * serializeAws_json1_0DeleteEnvironmentRequest
 */
const se_DeleteEnvironmentRequest = (input: DeleteEnvironmentRequest, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    environmentId: [],
  });
};

/**
 * serializeAws_json1_0DisassociateEipFromVlanRequest
 */
const se_DisassociateEipFromVlanRequest = (input: DisassociateEipFromVlanRequest, context: __SerdeContext): any => {
  return take(input, {
    associationId: [],
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    environmentId: [],
    vlanName: [],
  });
};

// se_EnvironmentStateList omitted.

// se_GetEnvironmentRequest omitted.

// se_HostInfoForCreate omitted.

// se_HostInfoForCreateList omitted.

// se_InitialVlanInfo omitted.

// se_InitialVlans omitted.

// se_LicenseInfo omitted.

// se_LicenseInfoList omitted.

// se_ListEnvironmentHostsRequest omitted.

// se_ListEnvironmentsRequest omitted.

// se_ListEnvironmentVlansRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_RequestTagMap omitted.

// se_RouteServerPeeringList omitted.

// se_SecurityGroups omitted.

// se_ServiceAccessSecurityGroups omitted.

// se_TagKeys omitted.

// se_TagResourceRequest omitted.

// se_UntagResourceRequest omitted.

// se_VcfHostnames omitted.

/**
 * deserializeAws_json1_0AssociateEipToVlanResponse
 */
const de_AssociateEipToVlanResponse = (output: any, context: __SerdeContext): AssociateEipToVlanResponse => {
  return take(output, {
    vlan: (_: any) => de_Vlan(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0Check
 */
const de_Check = (output: any, context: __SerdeContext): Check => {
  return take(output, {
    impairedSince: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    result: __expectString,
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ChecksList
 */
const de_ChecksList = (output: any, context: __SerdeContext): Check[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Check(entry, context);
    });
  return retVal;
};

// de_ConnectivityInfo omitted.

/**
 * deserializeAws_json1_0CreateEnvironmentHostResponse
 */
const de_CreateEnvironmentHostResponse = (output: any, context: __SerdeContext): CreateEnvironmentHostResponse => {
  return take(output, {
    environmentSummary: (_: any) => de_EnvironmentSummary(_, context),
    host: (_: any) => de_Host(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0CreateEnvironmentResponse
 */
const de_CreateEnvironmentResponse = (output: any, context: __SerdeContext): CreateEnvironmentResponse => {
  return take(output, {
    environment: (_: any) => de_Environment(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DeleteEnvironmentHostResponse
 */
const de_DeleteEnvironmentHostResponse = (output: any, context: __SerdeContext): DeleteEnvironmentHostResponse => {
  return take(output, {
    environmentSummary: (_: any) => de_EnvironmentSummary(_, context),
    host: (_: any) => de_Host(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DeleteEnvironmentResponse
 */
const de_DeleteEnvironmentResponse = (output: any, context: __SerdeContext): DeleteEnvironmentResponse => {
  return take(output, {
    environment: (_: any) => de_Environment(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DisassociateEipFromVlanResponse
 */
const de_DisassociateEipFromVlanResponse = (output: any, context: __SerdeContext): DisassociateEipFromVlanResponse => {
  return take(output, {
    vlan: (_: any) => de_Vlan(_, context),
  }) as any;
};

// de_EipAssociation omitted.

// de_EipAssociationList omitted.

/**
 * deserializeAws_json1_0Environment
 */
const de_Environment = (output: any, context: __SerdeContext): Environment => {
  return take(output, {
    checks: (_: any) => de_ChecksList(_, context),
    connectivityInfo: _json,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    credentials: _json,
    environmentArn: __expectString,
    environmentId: __expectString,
    environmentName: __expectString,
    environmentState: __expectString,
    environmentStatus: __expectString,
    kmsKeyId: __expectString,
    licenseInfo: _json,
    modifiedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    serviceAccessSecurityGroups: _json,
    serviceAccessSubnetId: __expectString,
    siteId: __expectString,
    stateDetails: __expectString,
    termsAccepted: __expectBoolean,
    vcfHostnames: _json,
    vcfVersion: __expectString,
    vpcId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0EnvironmentSummary
 */
const de_EnvironmentSummary = (output: any, context: __SerdeContext): EnvironmentSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    environmentArn: __expectString,
    environmentId: __expectString,
    environmentName: __expectString,
    environmentState: __expectString,
    environmentStatus: __expectString,
    modifiedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    vcfVersion: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0EnvironmentSummaryList
 */
const de_EnvironmentSummaryList = (output: any, context: __SerdeContext): EnvironmentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EnvironmentSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0GetEnvironmentResponse
 */
const de_GetEnvironmentResponse = (output: any, context: __SerdeContext): GetEnvironmentResponse => {
  return take(output, {
    environment: (_: any) => de_Environment(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0Host
 */
const de_Host = (output: any, context: __SerdeContext): Host => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    dedicatedHostId: __expectString,
    ec2InstanceId: __expectString,
    hostName: __expectString,
    hostState: __expectString,
    instanceType: __expectString,
    ipAddress: __expectString,
    keyName: __expectString,
    modifiedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    networkInterfaces: _json,
    placementGroupId: __expectString,
    stateDetails: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0HostList
 */
const de_HostList = (output: any, context: __SerdeContext): Host[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Host(entry, context);
    });
  return retVal;
};

// de_LicenseInfo omitted.

// de_LicenseInfoList omitted.

/**
 * deserializeAws_json1_0ListEnvironmentHostsResponse
 */
const de_ListEnvironmentHostsResponse = (output: any, context: __SerdeContext): ListEnvironmentHostsResponse => {
  return take(output, {
    environmentHosts: (_: any) => de_HostList(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListEnvironmentsResponse
 */
const de_ListEnvironmentsResponse = (output: any, context: __SerdeContext): ListEnvironmentsResponse => {
  return take(output, {
    environmentSummaries: (_: any) => de_EnvironmentSummaryList(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListEnvironmentVlansResponse
 */
const de_ListEnvironmentVlansResponse = (output: any, context: __SerdeContext): ListEnvironmentVlansResponse => {
  return take(output, {
    environmentVlans: (_: any) => de_VlanList(_, context),
    nextToken: __expectString,
  }) as any;
};

// de_ListTagsForResourceResponse omitted.

// de_NetworkInterface omitted.

// de_NetworkInterfaceList omitted.

// de_ResourceNotFoundException omitted.

// de_ResponseTagMap omitted.

// de_RouteServerPeeringList omitted.

// de_Secret omitted.

// de_SecretList omitted.

// de_SecurityGroups omitted.

// de_ServiceAccessSecurityGroups omitted.

// de_ServiceQuotaExceededException omitted.

// de_TagPolicyException omitted.

// de_TagResourceResponse omitted.

// de_ThrottlingException omitted.

// de_TooManyTagsException omitted.

// de_UntagResourceResponse omitted.

// de_ValidationException omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

// de_VcfHostnames omitted.

/**
 * deserializeAws_json1_0Vlan
 */
const de_Vlan = (output: any, context: __SerdeContext): Vlan => {
  return take(output, {
    availabilityZone: __expectString,
    cidr: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    eipAssociations: _json,
    functionName: __expectString,
    isPublic: __expectBoolean,
    modifiedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    networkAclId: __expectString,
    stateDetails: __expectString,
    subnetId: __expectString,
    vlanId: __expectInt32,
    vlanState: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0VlanList
 */
const de_VlanList = (output: any, context: __SerdeContext): Vlan[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Vlan(entry, context);
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
    "x-amz-target": `AmazonElasticVMwareService.${operation}`,
  };
}
