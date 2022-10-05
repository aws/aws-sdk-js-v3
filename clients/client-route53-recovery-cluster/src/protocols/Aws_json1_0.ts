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

export const serializeAws_json1_0GetRoutingControlStateCommand = async (
  input: GetRoutingControlStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ToggleCustomerAPI.GetRoutingControlState",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetRoutingControlStateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListRoutingControlsCommand = async (
  input: ListRoutingControlsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ToggleCustomerAPI.ListRoutingControls",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListRoutingControlsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateRoutingControlStateCommand = async (
  input: UpdateRoutingControlStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ToggleCustomerAPI.UpdateRoutingControlState",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateRoutingControlStateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateRoutingControlStatesCommand = async (
  input: UpdateRoutingControlStatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ToggleCustomerAPI.UpdateRoutingControlStates",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateRoutingControlStatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_0GetRoutingControlStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRoutingControlStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetRoutingControlStateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetRoutingControlStateResponse(data, context);
  const response: GetRoutingControlStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetRoutingControlStateCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "EndpointTemporarilyUnavailableException":
    case "com.amazonaws.route53recoverycluster#EndpointTemporarilyUnavailableException":
      throw await deserializeAws_json1_0EndpointTemporarilyUnavailableExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.route53recoverycluster#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoverycluster#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53recoverycluster#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoverycluster#ValidationException":
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

export const deserializeAws_json1_0ListRoutingControlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoutingControlsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListRoutingControlsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListRoutingControlsResponse(data, context);
  const response: ListRoutingControlsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListRoutingControlsCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "EndpointTemporarilyUnavailableException":
    case "com.amazonaws.route53recoverycluster#EndpointTemporarilyUnavailableException":
      throw await deserializeAws_json1_0EndpointTemporarilyUnavailableExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.route53recoverycluster#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoverycluster#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53recoverycluster#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoverycluster#ValidationException":
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

export const deserializeAws_json1_0UpdateRoutingControlStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoutingControlStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateRoutingControlStateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateRoutingControlStateResponse(data, context);
  const response: UpdateRoutingControlStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateRoutingControlStateCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.route53recoverycluster#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "EndpointTemporarilyUnavailableException":
    case "com.amazonaws.route53recoverycluster#EndpointTemporarilyUnavailableException":
      throw await deserializeAws_json1_0EndpointTemporarilyUnavailableExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.route53recoverycluster#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoverycluster#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53recoverycluster#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoverycluster#ValidationException":
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

export const deserializeAws_json1_0UpdateRoutingControlStatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoutingControlStatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateRoutingControlStatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateRoutingControlStatesResponse(data, context);
  const response: UpdateRoutingControlStatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateRoutingControlStatesCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.route53recoverycluster#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "EndpointTemporarilyUnavailableException":
    case "com.amazonaws.route53recoverycluster#EndpointTemporarilyUnavailableException":
      throw await deserializeAws_json1_0EndpointTemporarilyUnavailableExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.route53recoverycluster#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoverycluster#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceLimitExceededException":
    case "com.amazonaws.route53recoverycluster#ServiceLimitExceededException":
      throw await deserializeAws_json1_0ServiceLimitExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53recoverycluster#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53recoverycluster#ValidationException":
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

const deserializeAws_json1_0EndpointTemporarilyUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EndpointTemporarilyUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0EndpointTemporarilyUnavailableException(body, context);
  const exception = new EndpointTemporarilyUnavailableException({
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

const deserializeAws_json1_0ServiceLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ServiceLimitExceededException(body, context);
  const exception = new ServiceLimitExceededException({
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

const serializeAws_json1_0Arns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0GetRoutingControlStateRequest = (
  input: GetRoutingControlStateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.RoutingControlArn != null && { RoutingControlArn: input.RoutingControlArn }),
  };
};

const serializeAws_json1_0ListRoutingControlsRequest = (
  input: ListRoutingControlsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ControlPanelArn != null && { ControlPanelArn: input.ControlPanelArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_0UpdateRoutingControlStateEntries = (
  input: UpdateRoutingControlStateEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0UpdateRoutingControlStateEntry(entry, context);
    });
};

const serializeAws_json1_0UpdateRoutingControlStateEntry = (
  input: UpdateRoutingControlStateEntry,
  context: __SerdeContext
): any => {
  return {
    ...(input.RoutingControlArn != null && { RoutingControlArn: input.RoutingControlArn }),
    ...(input.RoutingControlState != null && { RoutingControlState: input.RoutingControlState }),
  };
};

const serializeAws_json1_0UpdateRoutingControlStateRequest = (
  input: UpdateRoutingControlStateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.RoutingControlArn != null && { RoutingControlArn: input.RoutingControlArn }),
    ...(input.RoutingControlState != null && { RoutingControlState: input.RoutingControlState }),
    ...(input.SafetyRulesToOverride != null && {
      SafetyRulesToOverride: serializeAws_json1_0Arns(input.SafetyRulesToOverride, context),
    }),
  };
};

const serializeAws_json1_0UpdateRoutingControlStatesRequest = (
  input: UpdateRoutingControlStatesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SafetyRulesToOverride != null && {
      SafetyRulesToOverride: serializeAws_json1_0Arns(input.SafetyRulesToOverride, context),
    }),
    ...(input.UpdateRoutingControlStateEntries != null && {
      UpdateRoutingControlStateEntries: serializeAws_json1_0UpdateRoutingControlStateEntries(
        input.UpdateRoutingControlStateEntries,
        context
      ),
    }),
  };
};

const deserializeAws_json1_0AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    message: __expectString(output.message),
    resourceId: __expectString(output.resourceId),
    resourceType: __expectString(output.resourceType),
  } as any;
};

const deserializeAws_json1_0EndpointTemporarilyUnavailableException = (
  output: any,
  context: __SerdeContext
): EndpointTemporarilyUnavailableException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0GetRoutingControlStateResponse = (
  output: any,
  context: __SerdeContext
): GetRoutingControlStateResponse => {
  return {
    RoutingControlArn: __expectString(output.RoutingControlArn),
    RoutingControlName: __expectString(output.RoutingControlName),
    RoutingControlState: __expectString(output.RoutingControlState),
  } as any;
};

const deserializeAws_json1_0InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  return {
    message: __expectString(output.message),
    retryAfterSeconds: __expectInt32(output.retryAfterSeconds),
  } as any;
};

const deserializeAws_json1_0ListRoutingControlsResponse = (
  output: any,
  context: __SerdeContext
): ListRoutingControlsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    RoutingControls:
      output.RoutingControls != null
        ? deserializeAws_json1_0RoutingControls(output.RoutingControls, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
    resourceId: __expectString(output.resourceId),
    resourceType: __expectString(output.resourceType),
  } as any;
};

const deserializeAws_json1_0RoutingControl = (output: any, context: __SerdeContext): RoutingControl => {
  return {
    ControlPanelArn: __expectString(output.ControlPanelArn),
    ControlPanelName: __expectString(output.ControlPanelName),
    RoutingControlArn: __expectString(output.RoutingControlArn),
    RoutingControlName: __expectString(output.RoutingControlName),
    RoutingControlState: __expectString(output.RoutingControlState),
  } as any;
};

const deserializeAws_json1_0RoutingControls = (output: any, context: __SerdeContext): RoutingControl[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0RoutingControl(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0ServiceLimitExceededException = (
  output: any,
  context: __SerdeContext
): ServiceLimitExceededException => {
  return {
    limitCode: __expectString(output.limitCode),
    message: __expectString(output.message),
    resourceId: __expectString(output.resourceId),
    resourceType: __expectString(output.resourceType),
    serviceCode: __expectString(output.serviceCode),
  } as any;
};

const deserializeAws_json1_0ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    message: __expectString(output.message),
    retryAfterSeconds: __expectInt32(output.retryAfterSeconds),
  } as any;
};

const deserializeAws_json1_0UpdateRoutingControlStateResponse = (
  output: any,
  context: __SerdeContext
): UpdateRoutingControlStateResponse => {
  return {} as any;
};

const deserializeAws_json1_0UpdateRoutingControlStatesResponse = (
  output: any,
  context: __SerdeContext
): UpdateRoutingControlStatesResponse => {
  return {} as any;
};

const deserializeAws_json1_0ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    fields:
      output.fields != null ? deserializeAws_json1_0ValidationExceptionFieldList(output.fields, context) : undefined,
    message: __expectString(output.message),
    reason: __expectString(output.reason),
  } as any;
};

const deserializeAws_json1_0ValidationExceptionField = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField => {
  return {
    message: __expectString(output.message),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_0ValidationExceptionFieldList = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ValidationExceptionField(entry, context);
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
