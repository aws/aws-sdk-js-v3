import {
  AssumeRoleCommandInput,
  AssumeRoleCommandOutput
} from "../commands/AssumeRoleCommand";
import {
  AssumeRoleWithSAMLCommandInput,
  AssumeRoleWithSAMLCommandOutput
} from "../commands/AssumeRoleWithSAMLCommand";
import {
  AssumeRoleWithWebIdentityCommandInput,
  AssumeRoleWithWebIdentityCommandOutput
} from "../commands/AssumeRoleWithWebIdentityCommand";
import {
  DecodeAuthorizationMessageCommandInput,
  DecodeAuthorizationMessageCommandOutput
} from "../commands/DecodeAuthorizationMessageCommand";
import {
  GetAccessKeyInfoCommandInput,
  GetAccessKeyInfoCommandOutput
} from "../commands/GetAccessKeyInfoCommand";
import {
  GetCallerIdentityCommandInput,
  GetCallerIdentityCommandOutput
} from "../commands/GetCallerIdentityCommand";
import {
  GetFederationTokenCommandInput,
  GetFederationTokenCommandOutput
} from "../commands/GetFederationTokenCommand";
import {
  GetSessionTokenCommandInput,
  GetSessionTokenCommandOutput
} from "../commands/GetSessionTokenCommand";
import {
  AssumeRoleRequest,
  AssumeRoleResponse,
  AssumeRoleWithSAMLRequest,
  AssumeRoleWithSAMLResponse,
  AssumeRoleWithWebIdentityRequest,
  AssumeRoleWithWebIdentityResponse,
  AssumedRoleUser,
  Credentials,
  DecodeAuthorizationMessageRequest,
  DecodeAuthorizationMessageResponse,
  ExpiredTokenException,
  FederatedUser,
  GetAccessKeyInfoRequest,
  GetAccessKeyInfoResponse,
  GetCallerIdentityRequest,
  GetCallerIdentityResponse,
  GetFederationTokenRequest,
  GetFederationTokenResponse,
  GetSessionTokenRequest,
  GetSessionTokenResponse,
  IDPCommunicationErrorException,
  IDPRejectedClaimException,
  InvalidAuthorizationMessageException,
  InvalidIdentityTokenException,
  MalformedPolicyDocumentException,
  PackedPolicyTooLargeException,
  PolicyDescriptorType,
  RegionDisabledException,
  Tag
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
import { parse as pixlParse } from "pixl-xml";

export async function serializeAws_queryAssumeRoleCommand(
  input: AssumeRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any = {};
  const entries = serializeAws_queryAssumeRoleRequest(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "AssumeRole",
    Version: "2011-06-15"
  });
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/",
    headers: headers,
    body: body
  });
}

export async function serializeAws_queryAssumeRoleWithSAMLCommand(
  input: AssumeRoleWithSAMLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any = {};
  const entries = serializeAws_queryAssumeRoleWithSAMLRequest(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "AssumeRoleWithSAML",
    Version: "2011-06-15"
  });
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/",
    headers: headers,
    body: body
  });
}

export async function serializeAws_queryAssumeRoleWithWebIdentityCommand(
  input: AssumeRoleWithWebIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any = {};
  const entries = serializeAws_queryAssumeRoleWithWebIdentityRequest(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "AssumeRoleWithWebIdentity",
    Version: "2011-06-15"
  });
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/",
    headers: headers,
    body: body
  });
}

export async function serializeAws_queryDecodeAuthorizationMessageCommand(
  input: DecodeAuthorizationMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any = {};
  const entries = serializeAws_queryDecodeAuthorizationMessageRequest(
    input,
    context
  );
  body = buildFormUrlencodedString({
    ...entries,
    Action: "DecodeAuthorizationMessage",
    Version: "2011-06-15"
  });
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/",
    headers: headers,
    body: body
  });
}

export async function serializeAws_queryGetAccessKeyInfoCommand(
  input: GetAccessKeyInfoCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any = {};
  const entries = serializeAws_queryGetAccessKeyInfoRequest(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "GetAccessKeyInfo",
    Version: "2011-06-15"
  });
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/",
    headers: headers,
    body: body
  });
}

export async function serializeAws_queryGetCallerIdentityCommand(
  input: GetCallerIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any = {};
  const entries = serializeAws_queryGetCallerIdentityRequest(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "GetCallerIdentity",
    Version: "2011-06-15"
  });
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/",
    headers: headers,
    body: body
  });
}

export async function serializeAws_queryGetFederationTokenCommand(
  input: GetFederationTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any = {};
  const entries = serializeAws_queryGetFederationTokenRequest(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "GetFederationToken",
    Version: "2011-06-15"
  });
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/",
    headers: headers,
    body: body
  });
}

export async function serializeAws_queryGetSessionTokenCommand(
  input: GetSessionTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  let body: any = {};
  const entries = serializeAws_queryGetSessionTokenRequest(input, context);
  body = buildFormUrlencodedString({
    ...entries,
    Action: "GetSessionToken",
    Version: "2011-06-15"
  });
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/",
    headers: headers,
    body: body
  });
}

export async function deserializeAws_queryAssumeRoleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssumeRoleCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryAssumeRoleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryAssumeRoleResponse(
    data.AssumeRoleResult,
    context
  );
  const response: AssumeRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AssumeRoleResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryAssumeRoleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssumeRoleCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "MalformedPolicyDocumentException":
    case "com.amazon.its#MalformedPolicyDocumentException":
      response = await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "PackedPolicyTooLargeException":
    case "com.amazon.its#PackedPolicyTooLargeException":
      response = await deserializeAws_queryPackedPolicyTooLargeExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RegionDisabledException":
    case "com.amazon.its#RegionDisabledException":
      response = await deserializeAws_queryRegionDisabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
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

export async function deserializeAws_queryAssumeRoleWithSAMLCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssumeRoleWithSAMLCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryAssumeRoleWithSAMLCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryAssumeRoleWithSAMLResponse(
    data.AssumeRoleWithSAMLResult,
    context
  );
  const response: AssumeRoleWithSAMLCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AssumeRoleWithSAMLResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryAssumeRoleWithSAMLCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssumeRoleWithSAMLCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ExpiredTokenException":
    case "com.amazon.its#ExpiredTokenException":
      response = await deserializeAws_queryExpiredTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "IDPRejectedClaimException":
    case "com.amazon.its#IDPRejectedClaimException":
      response = await deserializeAws_queryIDPRejectedClaimExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidIdentityTokenException":
    case "com.amazon.its#InvalidIdentityTokenException":
      response = await deserializeAws_queryInvalidIdentityTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MalformedPolicyDocumentException":
    case "com.amazon.its#MalformedPolicyDocumentException":
      response = await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "PackedPolicyTooLargeException":
    case "com.amazon.its#PackedPolicyTooLargeException":
      response = await deserializeAws_queryPackedPolicyTooLargeExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RegionDisabledException":
    case "com.amazon.its#RegionDisabledException":
      response = await deserializeAws_queryRegionDisabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
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

export async function deserializeAws_queryAssumeRoleWithWebIdentityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssumeRoleWithWebIdentityCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryAssumeRoleWithWebIdentityCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryAssumeRoleWithWebIdentityResponse(
    data.AssumeRoleWithWebIdentityResult,
    context
  );
  const response: AssumeRoleWithWebIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AssumeRoleWithWebIdentityResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryAssumeRoleWithWebIdentityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssumeRoleWithWebIdentityCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ExpiredTokenException":
    case "com.amazon.its#ExpiredTokenException":
      response = await deserializeAws_queryExpiredTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "IDPCommunicationErrorException":
    case "com.amazon.its#IDPCommunicationErrorException":
      response = await deserializeAws_queryIDPCommunicationErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "IDPRejectedClaimException":
    case "com.amazon.its#IDPRejectedClaimException":
      response = await deserializeAws_queryIDPRejectedClaimExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidIdentityTokenException":
    case "com.amazon.its#InvalidIdentityTokenException":
      response = await deserializeAws_queryInvalidIdentityTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MalformedPolicyDocumentException":
    case "com.amazon.its#MalformedPolicyDocumentException":
      response = await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "PackedPolicyTooLargeException":
    case "com.amazon.its#PackedPolicyTooLargeException":
      response = await deserializeAws_queryPackedPolicyTooLargeExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RegionDisabledException":
    case "com.amazon.its#RegionDisabledException":
      response = await deserializeAws_queryRegionDisabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
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

export async function deserializeAws_queryDecodeAuthorizationMessageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DecodeAuthorizationMessageCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDecodeAuthorizationMessageCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDecodeAuthorizationMessageResponse(
    data.DecodeAuthorizationMessageResult,
    context
  );
  const response: DecodeAuthorizationMessageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DecodeAuthorizationMessageResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryDecodeAuthorizationMessageCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DecodeAuthorizationMessageCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidAuthorizationMessageException":
    case "com.amazon.its#InvalidAuthorizationMessageException":
      response = await deserializeAws_queryInvalidAuthorizationMessageExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
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

export async function deserializeAws_queryGetAccessKeyInfoCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessKeyInfoCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetAccessKeyInfoCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetAccessKeyInfoResponse(
    data.GetAccessKeyInfoResult,
    context
  );
  const response: GetAccessKeyInfoCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAccessKeyInfoResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryGetAccessKeyInfoCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessKeyInfoCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
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

export async function deserializeAws_queryGetCallerIdentityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCallerIdentityCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetCallerIdentityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetCallerIdentityResponse(
    data.GetCallerIdentityResult,
    context
  );
  const response: GetCallerIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCallerIdentityResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryGetCallerIdentityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCallerIdentityCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
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

export async function deserializeAws_queryGetFederationTokenCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFederationTokenCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetFederationTokenCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetFederationTokenResponse(
    data.GetFederationTokenResult,
    context
  );
  const response: GetFederationTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetFederationTokenResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryGetFederationTokenCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFederationTokenCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "MalformedPolicyDocumentException":
    case "com.amazon.its#MalformedPolicyDocumentException":
      response = await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "PackedPolicyTooLargeException":
    case "com.amazon.its#PackedPolicyTooLargeException":
      response = await deserializeAws_queryPackedPolicyTooLargeExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RegionDisabledException":
    case "com.amazon.its#RegionDisabledException":
      response = await deserializeAws_queryRegionDisabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
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

export async function deserializeAws_queryGetSessionTokenCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionTokenCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetSessionTokenCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetSessionTokenResponse(
    data.GetSessionTokenResult,
    context
  );
  const response: GetSessionTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSessionTokenResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_queryGetSessionTokenCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionTokenCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RegionDisabledException":
    case "com.amazon.its#RegionDisabledException":
      response = await deserializeAws_queryRegionDisabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
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

const deserializeAws_queryExpiredTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExpiredTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryExpiredTokenException(
    body,
    context
  );
  const contents: ExpiredTokenException = {
    name: "ExpiredTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryIDPCommunicationErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IDPCommunicationErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryIDPCommunicationErrorException(
    body,
    context
  );
  const contents: IDPCommunicationErrorException = {
    name: "IDPCommunicationErrorException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryIDPRejectedClaimExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IDPRejectedClaimException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryIDPRejectedClaimException(
    body,
    context
  );
  const contents: IDPRejectedClaimException = {
    name: "IDPRejectedClaimException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidAuthorizationMessageExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAuthorizationMessageException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidAuthorizationMessageException(
    body,
    context
  );
  const contents: InvalidAuthorizationMessageException = {
    name: "InvalidAuthorizationMessageException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidIdentityTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidIdentityTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidIdentityTokenException(
    body,
    context
  );
  const contents: InvalidIdentityTokenException = {
    name: "InvalidIdentityTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryMalformedPolicyDocumentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MalformedPolicyDocumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryMalformedPolicyDocumentException(
    body,
    context
  );
  const contents: MalformedPolicyDocumentException = {
    name: "MalformedPolicyDocumentException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryPackedPolicyTooLargeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PackedPolicyTooLargeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryPackedPolicyTooLargeException(
    body,
    context
  );
  const contents: PackedPolicyTooLargeException = {
    name: "PackedPolicyTooLargeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryRegionDisabledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RegionDisabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryRegionDisabledException(
    body,
    context
  );
  const contents: RegionDisabledException = {
    name: "RegionDisabledException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_queryAssumeRoleRequest = (
  input: AssumeRoleRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DurationSeconds !== undefined) {
    entries["DurationSeconds"] = input.DurationSeconds;
  }
  if (input.ExternalId !== undefined) {
    entries["ExternalId"] = input.ExternalId;
  }
  if (input.Policy !== undefined) {
    entries["Policy"] = input.Policy;
  }
  if (input.PolicyArns !== undefined) {
    const memberEntries = serializeAws_querypolicyDescriptorListType(
      input.PolicyArns,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `PolicyArns.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.RoleArn !== undefined) {
    entries["RoleArn"] = input.RoleArn;
  }
  if (input.RoleSessionName !== undefined) {
    entries["RoleSessionName"] = input.RoleSessionName;
  }
  if (input.SerialNumber !== undefined) {
    entries["SerialNumber"] = input.SerialNumber;
  }
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_querytagListType(input.Tags, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Tags.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.TokenCode !== undefined) {
    entries["TokenCode"] = input.TokenCode;
  }
  if (input.TransitiveTagKeys !== undefined) {
    const memberEntries = serializeAws_querytagKeyListType(
      input.TransitiveTagKeys,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `TransitiveTagKeys.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryAssumeRoleWithSAMLRequest = (
  input: AssumeRoleWithSAMLRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DurationSeconds !== undefined) {
    entries["DurationSeconds"] = input.DurationSeconds;
  }
  if (input.Policy !== undefined) {
    entries["Policy"] = input.Policy;
  }
  if (input.PolicyArns !== undefined) {
    const memberEntries = serializeAws_querypolicyDescriptorListType(
      input.PolicyArns,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `PolicyArns.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.PrincipalArn !== undefined) {
    entries["PrincipalArn"] = input.PrincipalArn;
  }
  if (input.RoleArn !== undefined) {
    entries["RoleArn"] = input.RoleArn;
  }
  if (input.SAMLAssertion !== undefined) {
    entries["SAMLAssertion"] = input.SAMLAssertion;
  }
  return entries;
};

const serializeAws_queryAssumeRoleWithWebIdentityRequest = (
  input: AssumeRoleWithWebIdentityRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DurationSeconds !== undefined) {
    entries["DurationSeconds"] = input.DurationSeconds;
  }
  if (input.Policy !== undefined) {
    entries["Policy"] = input.Policy;
  }
  if (input.PolicyArns !== undefined) {
    const memberEntries = serializeAws_querypolicyDescriptorListType(
      input.PolicyArns,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `PolicyArns.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.ProviderId !== undefined) {
    entries["ProviderId"] = input.ProviderId;
  }
  if (input.RoleArn !== undefined) {
    entries["RoleArn"] = input.RoleArn;
  }
  if (input.RoleSessionName !== undefined) {
    entries["RoleSessionName"] = input.RoleSessionName;
  }
  if (input.WebIdentityToken !== undefined) {
    entries["WebIdentityToken"] = input.WebIdentityToken;
  }
  return entries;
};

const serializeAws_queryDecodeAuthorizationMessageRequest = (
  input: DecodeAuthorizationMessageRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.EncodedMessage !== undefined) {
    entries["EncodedMessage"] = input.EncodedMessage;
  }
  return entries;
};

const serializeAws_queryGetAccessKeyInfoRequest = (
  input: GetAccessKeyInfoRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AccessKeyId !== undefined) {
    entries["AccessKeyId"] = input.AccessKeyId;
  }
  return entries;
};

const serializeAws_queryGetCallerIdentityRequest = (
  input: GetCallerIdentityRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  return entries;
};

const serializeAws_queryGetFederationTokenRequest = (
  input: GetFederationTokenRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DurationSeconds !== undefined) {
    entries["DurationSeconds"] = input.DurationSeconds;
  }
  if (input.Name !== undefined) {
    entries["Name"] = input.Name;
  }
  if (input.Policy !== undefined) {
    entries["Policy"] = input.Policy;
  }
  if (input.PolicyArns !== undefined) {
    const memberEntries = serializeAws_querypolicyDescriptorListType(
      input.PolicyArns,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      const loc = `PolicyArns.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_querytagListType(input.Tags, context);
    Object.keys(memberEntries).forEach(key => {
      const loc = `Tags.${key}`;
      entries[loc] = memberEntries[key];
    });
  }
  return entries;
};

const serializeAws_queryGetSessionTokenRequest = (
  input: GetSessionTokenRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DurationSeconds !== undefined) {
    entries["DurationSeconds"] = input.DurationSeconds;
  }
  if (input.SerialNumber !== undefined) {
    entries["SerialNumber"] = input.SerialNumber;
  }
  if (input.TokenCode !== undefined) {
    entries["TokenCode"] = input.TokenCode;
  }
  return entries;
};

const serializeAws_queryPolicyDescriptorType = (
  input: PolicyDescriptorType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.arn !== undefined) {
    entries["arn"] = input.arn;
  }
  return entries;
};

const serializeAws_queryTag = (input: Tag, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Key !== undefined) {
    entries["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    entries["Value"] = input.Value;
  }
  return entries;
};

const serializeAws_querypolicyDescriptorListType = (
  input: Array<PolicyDescriptorType>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  (input || []).map(entry => {
    const memberEntries = serializeAws_queryPolicyDescriptorType(
      entry,
      context
    );
    Object.keys(memberEntries).forEach(key => {
      entries[`member.${counter}.${key}`] = memberEntries[key];
    });
    counter++;
  });
  return entries;
};

const serializeAws_querytagKeyListType = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  (input || []).map(entry => {
    entries[`member.${counter}`] = entry;
    counter++;
  });
  return entries;
};

const serializeAws_querytagListType = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  (input || []).map(entry => {
    const memberEntries = serializeAws_queryTag(entry, context);
    Object.keys(memberEntries).forEach(key => {
      entries[`member.${counter}.${key}`] = memberEntries[key];
    });
    counter++;
  });
  return entries;
};

const deserializeAws_queryAssumeRoleResponse = (
  output: any,
  context: __SerdeContext
): AssumeRoleResponse => {
  let contents: any = {
    __type: "AssumeRoleResponse",
    AssumedRoleUser: undefined,
    Credentials: undefined,
    PackedPolicySize: undefined
  };
  if (output["AssumedRoleUser"] !== undefined) {
    contents.AssumedRoleUser = deserializeAws_queryAssumedRoleUser(
      output["AssumedRoleUser"],
      context
    );
  }
  if (output["Credentials"] !== undefined) {
    contents.Credentials = deserializeAws_queryCredentials(
      output["Credentials"],
      context
    );
  }
  if (output["PackedPolicySize"] !== undefined) {
    contents.PackedPolicySize = parseInt(output["PackedPolicySize"]);
  }
  return contents;
};

const deserializeAws_queryAssumeRoleWithSAMLResponse = (
  output: any,
  context: __SerdeContext
): AssumeRoleWithSAMLResponse => {
  let contents: any = {
    __type: "AssumeRoleWithSAMLResponse",
    AssumedRoleUser: undefined,
    Audience: undefined,
    Credentials: undefined,
    Issuer: undefined,
    NameQualifier: undefined,
    PackedPolicySize: undefined,
    Subject: undefined,
    SubjectType: undefined
  };
  if (output["AssumedRoleUser"] !== undefined) {
    contents.AssumedRoleUser = deserializeAws_queryAssumedRoleUser(
      output["AssumedRoleUser"],
      context
    );
  }
  if (output["Audience"] !== undefined) {
    contents.Audience = output["Audience"];
  }
  if (output["Credentials"] !== undefined) {
    contents.Credentials = deserializeAws_queryCredentials(
      output["Credentials"],
      context
    );
  }
  if (output["Issuer"] !== undefined) {
    contents.Issuer = output["Issuer"];
  }
  if (output["NameQualifier"] !== undefined) {
    contents.NameQualifier = output["NameQualifier"];
  }
  if (output["PackedPolicySize"] !== undefined) {
    contents.PackedPolicySize = parseInt(output["PackedPolicySize"]);
  }
  if (output["Subject"] !== undefined) {
    contents.Subject = output["Subject"];
  }
  if (output["SubjectType"] !== undefined) {
    contents.SubjectType = output["SubjectType"];
  }
  return contents;
};

const deserializeAws_queryAssumeRoleWithWebIdentityResponse = (
  output: any,
  context: __SerdeContext
): AssumeRoleWithWebIdentityResponse => {
  let contents: any = {
    __type: "AssumeRoleWithWebIdentityResponse",
    AssumedRoleUser: undefined,
    Audience: undefined,
    Credentials: undefined,
    PackedPolicySize: undefined,
    Provider: undefined,
    SubjectFromWebIdentityToken: undefined
  };
  if (output["AssumedRoleUser"] !== undefined) {
    contents.AssumedRoleUser = deserializeAws_queryAssumedRoleUser(
      output["AssumedRoleUser"],
      context
    );
  }
  if (output["Audience"] !== undefined) {
    contents.Audience = output["Audience"];
  }
  if (output["Credentials"] !== undefined) {
    contents.Credentials = deserializeAws_queryCredentials(
      output["Credentials"],
      context
    );
  }
  if (output["PackedPolicySize"] !== undefined) {
    contents.PackedPolicySize = parseInt(output["PackedPolicySize"]);
  }
  if (output["Provider"] !== undefined) {
    contents.Provider = output["Provider"];
  }
  if (output["SubjectFromWebIdentityToken"] !== undefined) {
    contents.SubjectFromWebIdentityToken =
      output["SubjectFromWebIdentityToken"];
  }
  return contents;
};

const deserializeAws_queryAssumedRoleUser = (
  output: any,
  context: __SerdeContext
): AssumedRoleUser => {
  let contents: any = {
    __type: "AssumedRoleUser",
    Arn: undefined,
    AssumedRoleId: undefined
  };
  if (output["Arn"] !== undefined) {
    contents.Arn = output["Arn"];
  }
  if (output["AssumedRoleId"] !== undefined) {
    contents.AssumedRoleId = output["AssumedRoleId"];
  }
  return contents;
};

const deserializeAws_queryCredentials = (
  output: any,
  context: __SerdeContext
): Credentials => {
  let contents: any = {
    __type: "Credentials",
    AccessKeyId: undefined,
    Expiration: undefined,
    SecretAccessKey: undefined,
    SessionToken: undefined
  };
  if (output["AccessKeyId"] !== undefined) {
    contents.AccessKeyId = output["AccessKeyId"];
  }
  if (output["Expiration"] !== undefined) {
    contents.Expiration = new Date(output["Expiration"]);
  }
  if (output["SecretAccessKey"] !== undefined) {
    contents.SecretAccessKey = output["SecretAccessKey"];
  }
  if (output["SessionToken"] !== undefined) {
    contents.SessionToken = output["SessionToken"];
  }
  return contents;
};

const deserializeAws_queryDecodeAuthorizationMessageResponse = (
  output: any,
  context: __SerdeContext
): DecodeAuthorizationMessageResponse => {
  let contents: any = {
    __type: "DecodeAuthorizationMessageResponse",
    DecodedMessage: undefined
  };
  if (output["DecodedMessage"] !== undefined) {
    contents.DecodedMessage = output["DecodedMessage"];
  }
  return contents;
};

const deserializeAws_queryExpiredTokenException = (
  output: any,
  context: __SerdeContext
): ExpiredTokenException => {
  let contents: any = {
    __type: "ExpiredTokenException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryFederatedUser = (
  output: any,
  context: __SerdeContext
): FederatedUser => {
  let contents: any = {
    __type: "FederatedUser",
    Arn: undefined,
    FederatedUserId: undefined
  };
  if (output["Arn"] !== undefined) {
    contents.Arn = output["Arn"];
  }
  if (output["FederatedUserId"] !== undefined) {
    contents.FederatedUserId = output["FederatedUserId"];
  }
  return contents;
};

const deserializeAws_queryGetAccessKeyInfoResponse = (
  output: any,
  context: __SerdeContext
): GetAccessKeyInfoResponse => {
  let contents: any = {
    __type: "GetAccessKeyInfoResponse",
    Account: undefined
  };
  if (output["Account"] !== undefined) {
    contents.Account = output["Account"];
  }
  return contents;
};

const deserializeAws_queryGetCallerIdentityResponse = (
  output: any,
  context: __SerdeContext
): GetCallerIdentityResponse => {
  let contents: any = {
    __type: "GetCallerIdentityResponse",
    Account: undefined,
    Arn: undefined,
    UserId: undefined
  };
  if (output["Account"] !== undefined) {
    contents.Account = output["Account"];
  }
  if (output["Arn"] !== undefined) {
    contents.Arn = output["Arn"];
  }
  if (output["UserId"] !== undefined) {
    contents.UserId = output["UserId"];
  }
  return contents;
};

const deserializeAws_queryGetFederationTokenResponse = (
  output: any,
  context: __SerdeContext
): GetFederationTokenResponse => {
  let contents: any = {
    __type: "GetFederationTokenResponse",
    Credentials: undefined,
    FederatedUser: undefined,
    PackedPolicySize: undefined
  };
  if (output["Credentials"] !== undefined) {
    contents.Credentials = deserializeAws_queryCredentials(
      output["Credentials"],
      context
    );
  }
  if (output["FederatedUser"] !== undefined) {
    contents.FederatedUser = deserializeAws_queryFederatedUser(
      output["FederatedUser"],
      context
    );
  }
  if (output["PackedPolicySize"] !== undefined) {
    contents.PackedPolicySize = parseInt(output["PackedPolicySize"]);
  }
  return contents;
};

const deserializeAws_queryGetSessionTokenResponse = (
  output: any,
  context: __SerdeContext
): GetSessionTokenResponse => {
  let contents: any = {
    __type: "GetSessionTokenResponse",
    Credentials: undefined
  };
  if (output["Credentials"] !== undefined) {
    contents.Credentials = deserializeAws_queryCredentials(
      output["Credentials"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryIDPCommunicationErrorException = (
  output: any,
  context: __SerdeContext
): IDPCommunicationErrorException => {
  let contents: any = {
    __type: "IDPCommunicationErrorException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryIDPRejectedClaimException = (
  output: any,
  context: __SerdeContext
): IDPRejectedClaimException => {
  let contents: any = {
    __type: "IDPRejectedClaimException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryInvalidAuthorizationMessageException = (
  output: any,
  context: __SerdeContext
): InvalidAuthorizationMessageException => {
  let contents: any = {
    __type: "InvalidAuthorizationMessageException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryInvalidIdentityTokenException = (
  output: any,
  context: __SerdeContext
): InvalidIdentityTokenException => {
  let contents: any = {
    __type: "InvalidIdentityTokenException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryMalformedPolicyDocumentException = (
  output: any,
  context: __SerdeContext
): MalformedPolicyDocumentException => {
  let contents: any = {
    __type: "MalformedPolicyDocumentException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryPackedPolicyTooLargeException = (
  output: any,
  context: __SerdeContext
): PackedPolicyTooLargeException => {
  let contents: any = {
    __type: "PackedPolicyTooLargeException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryRegionDisabledException = (
  output: any,
  context: __SerdeContext
): RegionDisabledException => {
  let contents: any = {
    __type: "RegionDisabledException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
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

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return pixlParse(encoded);
    }
    return {};
  });
};

const buildFormUrlencodedString = (entries: any): string => {
  return Object.keys(entries)
    .map(
      key => encodeURIComponent(key) + "=" + encodeURIComponent(entries[key])
    )
    .join("&");
};
const loadQueryErrorCode = (output: __HttpResponse, data: any): string => {
  if (data.Error.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
  return "";
};
