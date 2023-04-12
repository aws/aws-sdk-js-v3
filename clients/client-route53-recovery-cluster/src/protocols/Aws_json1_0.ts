// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectString as __expectString,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  GetRoutingControlStateCommandInput,
  GetRoutingControlStateCommandOutput,
} from "../commands/GetRoutingControlStateCommand";
import {
  ListRoutingControlsCommandInput,
  ListRoutingControlsCommandOutput,
} from "../commands/ListRoutingControlsCommand";
import {
  UpdateRoutingControlStateCommandInput,
  UpdateRoutingControlStateCommandOutput,
} from "../commands/UpdateRoutingControlStateCommand";
import {
  UpdateRoutingControlStatesCommandInput,
  UpdateRoutingControlStatesCommandOutput,
} from "../commands/UpdateRoutingControlStatesCommand";
import {
  AccessDeniedException,
  ConflictException,
  EndpointTemporarilyUnavailableException,
  GetRoutingControlStateRequest,
  GetRoutingControlStateResponse,
  InternalServerException,
  ListRoutingControlsRequest,
  ListRoutingControlsResponse,
  ResourceNotFoundException,
  RoutingControl,
  ServiceLimitExceededException,
  ThrottlingException,
  UpdateRoutingControlStateEntry,
  UpdateRoutingControlStateRequest,
  UpdateRoutingControlStateResponse,
  UpdateRoutingControlStatesRequest,
  UpdateRoutingControlStatesResponse,
  ValidationException,
  ValidationExceptionField,
} from "../models/models_0";
import { Route53RecoveryClusterServiceException as __BaseException } from "../models/Route53RecoveryClusterServiceException";

/**
 * serializeAws_json1_0GetRoutingControlStateCommand
 */
export const se_GetRoutingControlStateCommand = async (
  input: GetRoutingControlStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRoutingControlState");
  let body: any;
  body = JSON.stringify(se_GetRoutingControlStateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListRoutingControlsCommand
 */
export const se_ListRoutingControlsCommand = async (
  input: ListRoutingControlsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListRoutingControls");
  let body: any;
  body = JSON.stringify(se_ListRoutingControlsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateRoutingControlStateCommand
 */
export const se_UpdateRoutingControlStateCommand = async (
  input: UpdateRoutingControlStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateRoutingControlState");
  let body: any;
  body = JSON.stringify(se_UpdateRoutingControlStateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateRoutingControlStatesCommand
 */
export const se_UpdateRoutingControlStatesCommand = async (
  input: UpdateRoutingControlStatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateRoutingControlStates");
  let body: any;
  body = JSON.stringify(se_UpdateRoutingControlStatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0GetRoutingControlStateCommand
 */
export const de_GetRoutingControlStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRoutingControlStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRoutingControlStateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRoutingControlStateResponse(data, context);
  const response: GetRoutingControlStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0GetRoutingControlStateCommandError
 */
const de_GetRoutingControlStateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRoutingControlStateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoverycluster#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "EndpointTemporarilyUnavailableException":
    case "com.amazonaws.route53recoverycluster#EndpointTemporarilyUnavailableException":
      throw await de_EndpointTemporarilyUnavailableExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.route53recoverycluster#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoverycluster#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53recoverycluster#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoverycluster#ValidationException":
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
 * deserializeAws_json1_0ListRoutingControlsCommand
 */
export const de_ListRoutingControlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoutingControlsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListRoutingControlsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListRoutingControlsResponse(data, context);
  const response: ListRoutingControlsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListRoutingControlsCommandError
 */
const de_ListRoutingControlsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoutingControlsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoverycluster#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "EndpointTemporarilyUnavailableException":
    case "com.amazonaws.route53recoverycluster#EndpointTemporarilyUnavailableException":
      throw await de_EndpointTemporarilyUnavailableExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.route53recoverycluster#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoverycluster#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53recoverycluster#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoverycluster#ValidationException":
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
 * deserializeAws_json1_0UpdateRoutingControlStateCommand
 */
export const de_UpdateRoutingControlStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoutingControlStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateRoutingControlStateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateRoutingControlStateResponse(data, context);
  const response: UpdateRoutingControlStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateRoutingControlStateCommandError
 */
const de_UpdateRoutingControlStateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoutingControlStateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoverycluster#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.route53recoverycluster#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "EndpointTemporarilyUnavailableException":
    case "com.amazonaws.route53recoverycluster#EndpointTemporarilyUnavailableException":
      throw await de_EndpointTemporarilyUnavailableExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.route53recoverycluster#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoverycluster#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53recoverycluster#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoverycluster#ValidationException":
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
 * deserializeAws_json1_0UpdateRoutingControlStatesCommand
 */
export const de_UpdateRoutingControlStatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoutingControlStatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateRoutingControlStatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateRoutingControlStatesResponse(data, context);
  const response: UpdateRoutingControlStatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateRoutingControlStatesCommandError
 */
const de_UpdateRoutingControlStatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoutingControlStatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoverycluster#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.route53recoverycluster#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "EndpointTemporarilyUnavailableException":
    case "com.amazonaws.route53recoverycluster#EndpointTemporarilyUnavailableException":
      throw await de_EndpointTemporarilyUnavailableExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.route53recoverycluster#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoverycluster#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceLimitExceededException":
    case "com.amazonaws.route53recoverycluster#ServiceLimitExceededException":
      throw await de_ServiceLimitExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53recoverycluster#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoverycluster#ValidationException":
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
 * deserializeAws_json1_0EndpointTemporarilyUnavailableExceptionRes
 */
const de_EndpointTemporarilyUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EndpointTemporarilyUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_EndpointTemporarilyUnavailableException(body, context);
  const exception = new EndpointTemporarilyUnavailableException({
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
 * deserializeAws_json1_0ServiceLimitExceededExceptionRes
 */
const de_ServiceLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServiceLimitExceededException(body, context);
  const exception = new ServiceLimitExceededException({
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
 * serializeAws_json1_0Arns
 */
const se_Arns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0GetRoutingControlStateRequest
 */
const se_GetRoutingControlStateRequest = (input: GetRoutingControlStateRequest, context: __SerdeContext): any => {
  return {
    ...(input.RoutingControlArn != null && { RoutingControlArn: input.RoutingControlArn }),
  };
};

/**
 * serializeAws_json1_0ListRoutingControlsRequest
 */
const se_ListRoutingControlsRequest = (input: ListRoutingControlsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ControlPanelArn != null && { ControlPanelArn: input.ControlPanelArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_0UpdateRoutingControlStateEntries
 */
const se_UpdateRoutingControlStateEntries = (input: UpdateRoutingControlStateEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_UpdateRoutingControlStateEntry(entry, context);
    });
};

/**
 * serializeAws_json1_0UpdateRoutingControlStateEntry
 */
const se_UpdateRoutingControlStateEntry = (input: UpdateRoutingControlStateEntry, context: __SerdeContext): any => {
  return {
    ...(input.RoutingControlArn != null && { RoutingControlArn: input.RoutingControlArn }),
    ...(input.RoutingControlState != null && { RoutingControlState: input.RoutingControlState }),
  };
};

/**
 * serializeAws_json1_0UpdateRoutingControlStateRequest
 */
const se_UpdateRoutingControlStateRequest = (input: UpdateRoutingControlStateRequest, context: __SerdeContext): any => {
  return {
    ...(input.RoutingControlArn != null && { RoutingControlArn: input.RoutingControlArn }),
    ...(input.RoutingControlState != null && { RoutingControlState: input.RoutingControlState }),
    ...(input.SafetyRulesToOverride != null && {
      SafetyRulesToOverride: se_Arns(input.SafetyRulesToOverride, context),
    }),
  };
};

/**
 * serializeAws_json1_0UpdateRoutingControlStatesRequest
 */
const se_UpdateRoutingControlStatesRequest = (
  input: UpdateRoutingControlStatesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SafetyRulesToOverride != null && {
      SafetyRulesToOverride: se_Arns(input.SafetyRulesToOverride, context),
    }),
    ...(input.UpdateRoutingControlStateEntries != null && {
      UpdateRoutingControlStateEntries: se_UpdateRoutingControlStateEntries(
        input.UpdateRoutingControlStateEntries,
        context
      ),
    }),
  };
};

/**
 * deserializeAws_json1_0AccessDeniedException
 */
const de_AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0ConflictException
 */
const de_ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    message: __expectString(output.message),
    resourceId: __expectString(output.resourceId),
    resourceType: __expectString(output.resourceType),
  } as any;
};

/**
 * deserializeAws_json1_0EndpointTemporarilyUnavailableException
 */
const de_EndpointTemporarilyUnavailableException = (
  output: any,
  context: __SerdeContext
): EndpointTemporarilyUnavailableException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0GetRoutingControlStateResponse
 */
const de_GetRoutingControlStateResponse = (output: any, context: __SerdeContext): GetRoutingControlStateResponse => {
  return {
    RoutingControlArn: __expectString(output.RoutingControlArn),
    RoutingControlName: __expectString(output.RoutingControlName),
    RoutingControlState: __expectString(output.RoutingControlState),
  } as any;
};

/**
 * deserializeAws_json1_0InternalServerException
 */
const de_InternalServerException = (output: any, context: __SerdeContext): InternalServerException => {
  return {
    message: __expectString(output.message),
    retryAfterSeconds: __expectInt32(output.retryAfterSeconds),
  } as any;
};

/**
 * deserializeAws_json1_0ListRoutingControlsResponse
 */
const de_ListRoutingControlsResponse = (output: any, context: __SerdeContext): ListRoutingControlsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    RoutingControls: output.RoutingControls != null ? de_RoutingControls(output.RoutingControls, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
    resourceId: __expectString(output.resourceId),
    resourceType: __expectString(output.resourceType),
  } as any;
};

/**
 * deserializeAws_json1_0RoutingControl
 */
const de_RoutingControl = (output: any, context: __SerdeContext): RoutingControl => {
  return {
    ControlPanelArn: __expectString(output.ControlPanelArn),
    ControlPanelName: __expectString(output.ControlPanelName),
    RoutingControlArn: __expectString(output.RoutingControlArn),
    RoutingControlName: __expectString(output.RoutingControlName),
    RoutingControlState: __expectString(output.RoutingControlState),
  } as any;
};

/**
 * deserializeAws_json1_0RoutingControls
 */
const de_RoutingControls = (output: any, context: __SerdeContext): RoutingControl[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RoutingControl(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ServiceLimitExceededException
 */
const de_ServiceLimitExceededException = (output: any, context: __SerdeContext): ServiceLimitExceededException => {
  return {
    limitCode: __expectString(output.limitCode),
    message: __expectString(output.message),
    resourceId: __expectString(output.resourceId),
    resourceType: __expectString(output.resourceType),
    serviceCode: __expectString(output.serviceCode),
  } as any;
};

/**
 * deserializeAws_json1_0ThrottlingException
 */
const de_ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    message: __expectString(output.message),
    retryAfterSeconds: __expectInt32(output.retryAfterSeconds),
  } as any;
};

/**
 * deserializeAws_json1_0UpdateRoutingControlStateResponse
 */
const de_UpdateRoutingControlStateResponse = (
  output: any,
  context: __SerdeContext
): UpdateRoutingControlStateResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_0UpdateRoutingControlStatesResponse
 */
const de_UpdateRoutingControlStatesResponse = (
  output: any,
  context: __SerdeContext
): UpdateRoutingControlStatesResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_0ValidationException
 */
const de_ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    fields: output.fields != null ? de_ValidationExceptionFieldList(output.fields, context) : undefined,
    message: __expectString(output.message),
    reason: __expectString(output.reason),
  } as any;
};

/**
 * deserializeAws_json1_0ValidationExceptionField
 */
const de_ValidationExceptionField = (output: any, context: __SerdeContext): ValidationExceptionField => {
  return {
    message: __expectString(output.message),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_0ValidationExceptionFieldList
 */
const de_ValidationExceptionFieldList = (output: any, context: __SerdeContext): ValidationExceptionField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ValidationExceptionField(entry, context);
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
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": `ToggleCustomerAPI.${operation}`,
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
