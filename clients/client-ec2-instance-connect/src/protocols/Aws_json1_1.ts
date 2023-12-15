// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  SendSerialConsoleSSHPublicKeyCommandInput,
  SendSerialConsoleSSHPublicKeyCommandOutput,
} from "../commands/SendSerialConsoleSSHPublicKeyCommand";
import { SendSSHPublicKeyCommandInput, SendSSHPublicKeyCommandOutput } from "../commands/SendSSHPublicKeyCommand";
import { EC2InstanceConnectServiceException as __BaseException } from "../models/EC2InstanceConnectServiceException";
import {
  AuthException,
  EC2InstanceNotFoundException,
  EC2InstanceStateInvalidException,
  EC2InstanceTypeInvalidException,
  EC2InstanceUnavailableException,
  InvalidArgsException,
  SendSerialConsoleSSHPublicKeyRequest,
  SendSSHPublicKeyRequest,
  SerialConsoleAccessDisabledException,
  SerialConsoleSessionLimitExceededException,
  SerialConsoleSessionUnavailableException,
  ServiceException,
  ThrottlingException,
} from "../models/models_0";

/**
 * serializeAws_json1_1SendSerialConsoleSSHPublicKeyCommand
 */
export const se_SendSerialConsoleSSHPublicKeyCommand = async (
  input: SendSerialConsoleSSHPublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SendSerialConsoleSSHPublicKey");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SendSSHPublicKeyCommand
 */
export const se_SendSSHPublicKeyCommand = async (
  input: SendSSHPublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SendSSHPublicKey");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1SendSerialConsoleSSHPublicKeyCommand
 */
export const de_SendSerialConsoleSSHPublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendSerialConsoleSSHPublicKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SendSerialConsoleSSHPublicKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: SendSerialConsoleSSHPublicKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1SendSerialConsoleSSHPublicKeyCommandError
 */
const de_SendSerialConsoleSSHPublicKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendSerialConsoleSSHPublicKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthException":
    case "com.amazonaws.ec2instanceconnect#AuthException":
      throw await de_AuthExceptionRes(parsedOutput, context);
    case "EC2InstanceNotFoundException":
    case "com.amazonaws.ec2instanceconnect#EC2InstanceNotFoundException":
      throw await de_EC2InstanceNotFoundExceptionRes(parsedOutput, context);
    case "EC2InstanceStateInvalidException":
    case "com.amazonaws.ec2instanceconnect#EC2InstanceStateInvalidException":
      throw await de_EC2InstanceStateInvalidExceptionRes(parsedOutput, context);
    case "EC2InstanceTypeInvalidException":
    case "com.amazonaws.ec2instanceconnect#EC2InstanceTypeInvalidException":
      throw await de_EC2InstanceTypeInvalidExceptionRes(parsedOutput, context);
    case "EC2InstanceUnavailableException":
    case "com.amazonaws.ec2instanceconnect#EC2InstanceUnavailableException":
      throw await de_EC2InstanceUnavailableExceptionRes(parsedOutput, context);
    case "InvalidArgsException":
    case "com.amazonaws.ec2instanceconnect#InvalidArgsException":
      throw await de_InvalidArgsExceptionRes(parsedOutput, context);
    case "SerialConsoleAccessDisabledException":
    case "com.amazonaws.ec2instanceconnect#SerialConsoleAccessDisabledException":
      throw await de_SerialConsoleAccessDisabledExceptionRes(parsedOutput, context);
    case "SerialConsoleSessionLimitExceededException":
    case "com.amazonaws.ec2instanceconnect#SerialConsoleSessionLimitExceededException":
      throw await de_SerialConsoleSessionLimitExceededExceptionRes(parsedOutput, context);
    case "SerialConsoleSessionUnavailableException":
    case "com.amazonaws.ec2instanceconnect#SerialConsoleSessionUnavailableException":
      throw await de_SerialConsoleSessionUnavailableExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.ec2instanceconnect#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ec2instanceconnect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1SendSSHPublicKeyCommand
 */
export const de_SendSSHPublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendSSHPublicKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SendSSHPublicKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: SendSSHPublicKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1SendSSHPublicKeyCommandError
 */
const de_SendSSHPublicKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendSSHPublicKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthException":
    case "com.amazonaws.ec2instanceconnect#AuthException":
      throw await de_AuthExceptionRes(parsedOutput, context);
    case "EC2InstanceNotFoundException":
    case "com.amazonaws.ec2instanceconnect#EC2InstanceNotFoundException":
      throw await de_EC2InstanceNotFoundExceptionRes(parsedOutput, context);
    case "EC2InstanceStateInvalidException":
    case "com.amazonaws.ec2instanceconnect#EC2InstanceStateInvalidException":
      throw await de_EC2InstanceStateInvalidExceptionRes(parsedOutput, context);
    case "EC2InstanceUnavailableException":
    case "com.amazonaws.ec2instanceconnect#EC2InstanceUnavailableException":
      throw await de_EC2InstanceUnavailableExceptionRes(parsedOutput, context);
    case "InvalidArgsException":
    case "com.amazonaws.ec2instanceconnect#InvalidArgsException":
      throw await de_InvalidArgsExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.ec2instanceconnect#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ec2instanceconnect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1AuthExceptionRes
 */
const de_AuthExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<AuthException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new AuthException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1EC2InstanceNotFoundExceptionRes
 */
const de_EC2InstanceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EC2InstanceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new EC2InstanceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1EC2InstanceStateInvalidExceptionRes
 */
const de_EC2InstanceStateInvalidExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EC2InstanceStateInvalidException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new EC2InstanceStateInvalidException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1EC2InstanceTypeInvalidExceptionRes
 */
const de_EC2InstanceTypeInvalidExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EC2InstanceTypeInvalidException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new EC2InstanceTypeInvalidException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1EC2InstanceUnavailableExceptionRes
 */
const de_EC2InstanceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EC2InstanceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new EC2InstanceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidArgsExceptionRes
 */
const de_InvalidArgsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArgsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidArgsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1SerialConsoleAccessDisabledExceptionRes
 */
const de_SerialConsoleAccessDisabledExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SerialConsoleAccessDisabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new SerialConsoleAccessDisabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1SerialConsoleSessionLimitExceededExceptionRes
 */
const de_SerialConsoleSessionLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SerialConsoleSessionLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new SerialConsoleSessionLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1SerialConsoleSessionUnavailableExceptionRes
 */
const de_SerialConsoleSessionUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SerialConsoleSessionUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new SerialConsoleSessionUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ServiceExceptionRes
 */
const de_ServiceExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ThrottlingExceptionRes
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

// se_SendSerialConsoleSSHPublicKeyRequest omitted.

// se_SendSSHPublicKeyRequest omitted.

// de_AuthException omitted.

// de_EC2InstanceNotFoundException omitted.

// de_EC2InstanceStateInvalidException omitted.

// de_EC2InstanceTypeInvalidException omitted.

// de_EC2InstanceUnavailableException omitted.

// de_InvalidArgsException omitted.

// de_SendSerialConsoleSSHPublicKeyResponse omitted.

// de_SendSSHPublicKeyResponse omitted.

// de_SerialConsoleAccessDisabledException omitted.

// de_SerialConsoleSessionLimitExceededException omitted.

// de_SerialConsoleSessionUnavailableException omitted.

// de_ServiceException omitted.

// de_ThrottlingException omitted.

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
    "x-amz-target": `AWSEC2InstanceConnectService.${operation}`,
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
