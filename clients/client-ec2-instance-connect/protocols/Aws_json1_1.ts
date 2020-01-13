import {
  SendSSHPublicKeyCommandInput,
  SendSSHPublicKeyCommandOutput
} from "../commands/SendSSHPublicKeyCommand";
import {
  AuthException,
  EC2InstanceNotFoundException,
  InvalidArgsException,
  SendSSHPublicKeyRequest,
  SendSSHPublicKeyResponse,
  ServiceException,
  ThrottlingException
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1SendSSHPublicKeyCommand(
  input: SendSSHPublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSEC2InstanceConnectService.SendSSHPublicKey";
  let body: any = {};
  const wrappedBody: any = {
    SendSSHPublicKeyRequest: serializeAws_json1_1SendSSHPublicKeyRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/SendSSHPublicKey",
    headers: headers,
    body: body
  });
}

export async function deserializeAws_json1_1SendSSHPublicKeyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendSSHPublicKeyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1SendSSHPublicKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SendSSHPublicKeyResponse(data, context);
  const response: SendSSHPublicKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SendSSHPublicKeyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1SendSSHPublicKeyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendSSHPublicKeyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AuthException":
    case "com.amazon.aws.sshaccessproxyservice#AuthException":
      response = await deserializeAws_json1_1AuthExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "EC2InstanceNotFoundException":
    case "com.amazon.aws.sshaccessproxyservice#EC2InstanceNotFoundException":
      response = await deserializeAws_json1_1EC2InstanceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArgsException":
    case "com.amazon.aws.sshaccessproxyservice#InvalidArgsException":
      response = await deserializeAws_json1_1InvalidArgsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.aws.sshaccessproxyservice#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.aws.sshaccessproxyservice#ThrottlingException":
      response = await deserializeAws_json1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.aws.sshaccessproxyservice#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_json1_1AuthExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AuthException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AuthException(body, context);
  const contents: AuthException = {
    name: "AuthException",
    __type: "AuthException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1EC2InstanceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EC2InstanceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EC2InstanceNotFoundException(
    body,
    context
  );
  const contents: EC2InstanceNotFoundException = {
    name: "EC2InstanceNotFoundException",
    __type: "EC2InstanceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidArgsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArgsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidArgsException(
    body,
    context
  );
  const contents: InvalidArgsException = {
    name: "InvalidArgsException",
    __type: "InvalidArgsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceException(
    body,
    context
  );
  const contents: ServiceException = {
    name: "ServiceException",
    __type: "ServiceException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ThrottlingException(
    body,
    context
  );
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    __type: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1SendSSHPublicKeyRequest = (
  input: SendSSHPublicKeyRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AvailabilityZone !== undefined) {
    bodyParams["AvailabilityZone"] = input.AvailabilityZone;
  }
  if (input.InstanceId !== undefined) {
    bodyParams["InstanceId"] = input.InstanceId;
  }
  if (input.InstanceOSUser !== undefined) {
    bodyParams["InstanceOSUser"] = input.InstanceOSUser;
  }
  if (input.SSHPublicKey !== undefined) {
    bodyParams["SSHPublicKey"] = input.SSHPublicKey;
  }
  return bodyParams;
};

const deserializeAws_json1_1AuthException = (
  output: any,
  context: __SerdeContext
): AuthException => {
  let contents: any = {
    __type: "AuthException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1EC2InstanceNotFoundException = (
  output: any,
  context: __SerdeContext
): EC2InstanceNotFoundException => {
  let contents: any = {
    __type: "EC2InstanceNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidArgsException = (
  output: any,
  context: __SerdeContext
): InvalidArgsException => {
  let contents: any = {
    __type: "InvalidArgsException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1SendSSHPublicKeyResponse = (
  output: any,
  context: __SerdeContext
): SendSSHPublicKeyResponse => {
  let contents: any = {
    __type: "SendSSHPublicKeyResponse",
    RequestId: undefined,
    Success: undefined
  };
  if (output.RequestId !== undefined) {
    contents.RequestId = output.RequestId;
  }
  if (output.Success !== undefined) {
    contents.Success = output.Success;
  }
  return contents;
};

const deserializeAws_json1_1ServiceException = (
  output: any,
  context: __SerdeContext
): ServiceException => {
  let contents: any = {
    __type: "ServiceException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ThrottlingException = (
  output: any,
  context: __SerdeContext
): ThrottlingException => {
  let contents: any = {
    __type: "ThrottlingException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
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
  return context.streamCollector(streamBody) || new Uint8Array();
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

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
