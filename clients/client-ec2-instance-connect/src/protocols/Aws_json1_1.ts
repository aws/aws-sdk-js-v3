import { SendSSHPublicKeyCommandInput, SendSSHPublicKeyCommandOutput } from "../commands/SendSSHPublicKeyCommand";
import {
  SendSerialConsoleSSHPublicKeyCommandInput,
  SendSerialConsoleSSHPublicKeyCommandOutput,
} from "../commands/SendSerialConsoleSSHPublicKeyCommand";
import {
  AuthException,
  EC2InstanceNotFoundException,
  EC2InstanceTypeInvalidException,
  InvalidArgsException,
  SendSSHPublicKeyRequest,
  SendSSHPublicKeyResponse,
  SendSerialConsoleSSHPublicKeyRequest,
  SendSerialConsoleSSHPublicKeyResponse,
  SerialConsoleAccessDisabledException,
  SerialConsoleSessionLimitExceededException,
  SerialConsoleSessionUnavailableException,
  ServiceException,
  ThrottlingException,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { expectBoolean as __expectBoolean, expectString as __expectString } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_json1_1SendSerialConsoleSSHPublicKeyCommand = async (
  input: SendSerialConsoleSSHPublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SendSerialConsoleSSHPublicKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SendSSHPublicKeyCommand = async (
  input: SendSSHPublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEC2InstanceConnectService.SendSSHPublicKey",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SendSSHPublicKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1SendSerialConsoleSSHPublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendSerialConsoleSSHPublicKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SendSerialConsoleSSHPublicKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SendSerialConsoleSSHPublicKeyResponse(data, context);
  const response: SendSerialConsoleSSHPublicKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SendSerialConsoleSSHPublicKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendSerialConsoleSSHPublicKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthException":
    case "com.amazonaws.ec2instanceconnect#AuthException":
      response = {
        ...(await deserializeAws_json1_1AuthExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EC2InstanceNotFoundException":
    case "com.amazonaws.ec2instanceconnect#EC2InstanceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EC2InstanceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EC2InstanceTypeInvalidException":
    case "com.amazonaws.ec2instanceconnect#EC2InstanceTypeInvalidException":
      response = {
        ...(await deserializeAws_json1_1EC2InstanceTypeInvalidExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgsException":
    case "com.amazonaws.ec2instanceconnect#InvalidArgsException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SerialConsoleAccessDisabledException":
    case "com.amazonaws.ec2instanceconnect#SerialConsoleAccessDisabledException":
      response = {
        ...(await deserializeAws_json1_1SerialConsoleAccessDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SerialConsoleSessionLimitExceededException":
    case "com.amazonaws.ec2instanceconnect#SerialConsoleSessionLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1SerialConsoleSessionLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SerialConsoleSessionUnavailableException":
    case "com.amazonaws.ec2instanceconnect#SerialConsoleSessionUnavailableException":
      response = {
        ...(await deserializeAws_json1_1SerialConsoleSessionUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.ec2instanceconnect#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.ec2instanceconnect#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1SendSSHPublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendSSHPublicKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SendSSHPublicKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SendSSHPublicKeyResponse(data, context);
  const response: SendSSHPublicKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SendSSHPublicKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendSSHPublicKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthException":
    case "com.amazonaws.ec2instanceconnect#AuthException":
      response = {
        ...(await deserializeAws_json1_1AuthExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EC2InstanceNotFoundException":
    case "com.amazonaws.ec2instanceconnect#EC2InstanceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EC2InstanceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgsException":
    case "com.amazonaws.ec2instanceconnect#InvalidArgsException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.ec2instanceconnect#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.ec2instanceconnect#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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

const deserializeAws_json1_1AuthExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AuthException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AuthException(body, context);
  const contents: AuthException = {
    name: "AuthException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1EC2InstanceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EC2InstanceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EC2InstanceNotFoundException(body, context);
  const contents: EC2InstanceNotFoundException = {
    name: "EC2InstanceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1EC2InstanceTypeInvalidExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EC2InstanceTypeInvalidException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EC2InstanceTypeInvalidException(body, context);
  const contents: EC2InstanceTypeInvalidException = {
    name: "EC2InstanceTypeInvalidException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidArgsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArgsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidArgsException(body, context);
  const contents: InvalidArgsException = {
    name: "InvalidArgsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1SerialConsoleAccessDisabledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SerialConsoleAccessDisabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SerialConsoleAccessDisabledException(body, context);
  const contents: SerialConsoleAccessDisabledException = {
    name: "SerialConsoleAccessDisabledException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1SerialConsoleSessionLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SerialConsoleSessionLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SerialConsoleSessionLimitExceededException(body, context);
  const contents: SerialConsoleSessionLimitExceededException = {
    name: "SerialConsoleSessionLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1SerialConsoleSessionUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SerialConsoleSessionUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SerialConsoleSessionUnavailableException(body, context);
  const contents: SerialConsoleSessionUnavailableException = {
    name: "SerialConsoleSessionUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceException(body, context);
  const contents: ServiceException = {
    name: "ServiceException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ThrottlingException(body, context);
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1SendSerialConsoleSSHPublicKeyRequest = (
  input: SendSerialConsoleSSHPublicKeyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
    ...(input.SSHPublicKey !== undefined && input.SSHPublicKey !== null && { SSHPublicKey: input.SSHPublicKey }),
    ...(input.SerialPort !== undefined && input.SerialPort !== null && { SerialPort: input.SerialPort }),
  };
};

const serializeAws_json1_1SendSSHPublicKeyRequest = (input: SendSSHPublicKeyRequest, context: __SerdeContext): any => {
  return {
    ...(input.AvailabilityZone !== undefined &&
      input.AvailabilityZone !== null && { AvailabilityZone: input.AvailabilityZone }),
    ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
    ...(input.InstanceOSUser !== undefined &&
      input.InstanceOSUser !== null && { InstanceOSUser: input.InstanceOSUser }),
    ...(input.SSHPublicKey !== undefined && input.SSHPublicKey !== null && { SSHPublicKey: input.SSHPublicKey }),
  };
};

const deserializeAws_json1_1AuthException = (output: any, context: __SerdeContext): AuthException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1EC2InstanceNotFoundException = (
  output: any,
  context: __SerdeContext
): EC2InstanceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1EC2InstanceTypeInvalidException = (
  output: any,
  context: __SerdeContext
): EC2InstanceTypeInvalidException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidArgsException = (output: any, context: __SerdeContext): InvalidArgsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1SendSerialConsoleSSHPublicKeyResponse = (
  output: any,
  context: __SerdeContext
): SendSerialConsoleSSHPublicKeyResponse => {
  return {
    RequestId: __expectString(output.RequestId),
    Success: __expectBoolean(output.Success),
  } as any;
};

const deserializeAws_json1_1SendSSHPublicKeyResponse = (
  output: any,
  context: __SerdeContext
): SendSSHPublicKeyResponse => {
  return {
    RequestId: __expectString(output.RequestId),
    Success: __expectBoolean(output.Success),
  } as any;
};

const deserializeAws_json1_1SerialConsoleAccessDisabledException = (
  output: any,
  context: __SerdeContext
): SerialConsoleAccessDisabledException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1SerialConsoleSessionLimitExceededException = (
  output: any,
  context: __SerdeContext
): SerialConsoleSessionLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1SerialConsoleSessionUnavailableException = (
  output: any,
  context: __SerdeContext
): SerialConsoleSessionUnavailableException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ServiceException = (output: any, context: __SerdeContext): ServiceException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    Message: __expectString(output.Message),
  } as any;
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
