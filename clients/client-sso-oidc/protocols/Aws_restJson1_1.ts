import {
  CreateTokenCommandInput,
  CreateTokenCommandOutput
} from "../commands/CreateTokenCommand";
import {
  RegisterClientCommandInput,
  RegisterClientCommandOutput
} from "../commands/RegisterClientCommand";
import {
  StartDeviceAuthorizationCommandInput,
  StartDeviceAuthorizationCommandOutput
} from "../commands/StartDeviceAuthorizationCommand";
import {
  AccessDeniedException,
  AuthorizationPendingException,
  ExpiredTokenException,
  InternalServerException,
  InvalidClientException,
  InvalidClientMetadataException,
  InvalidGrantException,
  InvalidRequestException,
  InvalidScopeException,
  SlowDownException,
  UnauthorizedClientException,
  UnsupportedGrantTypeException
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

export async function serializeAws_restJson1_1CreateTokenCommand(
  input: CreateTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/token";
  let body: any = {};
  const bodyParams: any = {};
  if (input.clientId !== undefined) {
    bodyParams["clientId"] = input.clientId;
  }
  if (input.clientSecret !== undefined) {
    bodyParams["clientSecret"] = input.clientSecret;
  }
  if (input.code !== undefined) {
    bodyParams["code"] = input.code;
  }
  if (input.deviceCode !== undefined) {
    bodyParams["deviceCode"] = input.deviceCode;
  }
  if (input.grantType !== undefined) {
    bodyParams["grantType"] = input.grantType;
  }
  if (input.redirectUri !== undefined) {
    bodyParams["redirectUri"] = input.redirectUri;
  }
  if (input.refreshToken !== undefined) {
    bodyParams["refreshToken"] = input.refreshToken;
  }
  if (input.scope !== undefined) {
    bodyParams["scope"] = serializeAws_restJson1_1Scopes(input.scope, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1RegisterClientCommand(
  input: RegisterClientCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/client/register";
  let body: any = {};
  const bodyParams: any = {};
  if (input.clientName !== undefined) {
    bodyParams["clientName"] = input.clientName;
  }
  if (input.clientType !== undefined) {
    bodyParams["clientType"] = input.clientType;
  }
  if (input.scopes !== undefined) {
    bodyParams["scopes"] = serializeAws_restJson1_1Scopes(
      input.scopes,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1StartDeviceAuthorizationCommand(
  input: StartDeviceAuthorizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/device_authorization";
  let body: any = {};
  const bodyParams: any = {};
  if (input.clientId !== undefined) {
    bodyParams["clientId"] = input.clientId;
  }
  if (input.clientSecret !== undefined) {
    bodyParams["clientSecret"] = input.clientSecret;
  }
  if (input.startUrl !== undefined) {
    bodyParams["startUrl"] = input.startUrl;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1CreateTokenCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTokenCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1CreateTokenCommandError(output, context);
  }
  const contents: CreateTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateTokenResponse",
    accessToken: undefined,
    expiresIn: undefined,
    idToken: undefined,
    refreshToken: undefined,
    tokenType: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.accessToken !== undefined) {
    contents.accessToken = data.accessToken;
  }
  if (data.expiresIn !== undefined) {
    contents.expiresIn = data.expiresIn;
  }
  if (data.idToken !== undefined) {
    contents.idToken = data.idToken;
  }
  if (data.refreshToken !== undefined) {
    contents.refreshToken = data.refreshToken;
  }
  if (data.tokenType !== undefined) {
    contents.tokenType = data.tokenType;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateTokenCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTokenCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.sso.oidc#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        output,
        context
      );
      break;
    case "AuthorizationPendingException":
    case "com.amazonaws.sso.oidc#AuthorizationPendingException":
      response = await deserializeAws_restJson1_1AuthorizationPendingExceptionResponse(
        output,
        context
      );
      break;
    case "ExpiredTokenException":
    case "com.amazonaws.sso.oidc#ExpiredTokenException":
      response = await deserializeAws_restJson1_1ExpiredTokenExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazonaws.sso.oidc#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidClientException":
    case "com.amazonaws.sso.oidc#InvalidClientException":
      response = await deserializeAws_restJson1_1InvalidClientExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidGrantException":
    case "com.amazonaws.sso.oidc#InvalidGrantException":
      response = await deserializeAws_restJson1_1InvalidGrantExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.sso.oidc#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidScopeException":
    case "com.amazonaws.sso.oidc#InvalidScopeException":
      response = await deserializeAws_restJson1_1InvalidScopeExceptionResponse(
        output,
        context
      );
      break;
    case "SlowDownException":
    case "com.amazonaws.sso.oidc#SlowDownException":
      response = await deserializeAws_restJson1_1SlowDownExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.sso.oidc#UnauthorizedClientException":
      response = await deserializeAws_restJson1_1UnauthorizedClientExceptionResponse(
        output,
        context
      );
      break;
    case "UnsupportedGrantTypeException":
    case "com.amazonaws.sso.oidc#UnsupportedGrantTypeException":
      response = await deserializeAws_restJson1_1UnsupportedGrantTypeExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.sso.oidc#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1RegisterClientCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterClientCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1RegisterClientCommandError(
      output,
      context
    );
  }
  const contents: RegisterClientCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RegisterClientResponse",
    authorizationEndpoint: undefined,
    clientId: undefined,
    clientIdIssuedAt: undefined,
    clientSecret: undefined,
    clientSecretExpiresAt: undefined,
    tokenEndpoint: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.authorizationEndpoint !== undefined) {
    contents.authorizationEndpoint = data.authorizationEndpoint;
  }
  if (data.clientId !== undefined) {
    contents.clientId = data.clientId;
  }
  if (data.clientIdIssuedAt !== undefined) {
    contents.clientIdIssuedAt = data.clientIdIssuedAt;
  }
  if (data.clientSecret !== undefined) {
    contents.clientSecret = data.clientSecret;
  }
  if (data.clientSecretExpiresAt !== undefined) {
    contents.clientSecretExpiresAt = data.clientSecretExpiresAt;
  }
  if (data.tokenEndpoint !== undefined) {
    contents.tokenEndpoint = data.tokenEndpoint;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1RegisterClientCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterClientCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.sso.oidc#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidClientMetadataException":
    case "com.amazonaws.sso.oidc#InvalidClientMetadataException":
      response = await deserializeAws_restJson1_1InvalidClientMetadataExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.sso.oidc#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidScopeException":
    case "com.amazonaws.sso.oidc#InvalidScopeException":
      response = await deserializeAws_restJson1_1InvalidScopeExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.sso.oidc#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1StartDeviceAuthorizationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDeviceAuthorizationCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1StartDeviceAuthorizationCommandError(
      output,
      context
    );
  }
  const contents: StartDeviceAuthorizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartDeviceAuthorizationResponse",
    deviceCode: undefined,
    expiresIn: undefined,
    interval: undefined,
    userCode: undefined,
    verificationUri: undefined,
    verificationUriComplete: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.deviceCode !== undefined) {
    contents.deviceCode = data.deviceCode;
  }
  if (data.expiresIn !== undefined) {
    contents.expiresIn = data.expiresIn;
  }
  if (data.interval !== undefined) {
    contents.interval = data.interval;
  }
  if (data.userCode !== undefined) {
    contents.userCode = data.userCode;
  }
  if (data.verificationUri !== undefined) {
    contents.verificationUri = data.verificationUri;
  }
  if (data.verificationUriComplete !== undefined) {
    contents.verificationUriComplete = data.verificationUriComplete;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1StartDeviceAuthorizationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDeviceAuthorizationCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.sso.oidc#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidClientException":
    case "com.amazonaws.sso.oidc#InvalidClientException":
      response = await deserializeAws_restJson1_1InvalidClientExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.sso.oidc#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        output,
        context
      );
      break;
    case "SlowDownException":
    case "com.amazonaws.sso.oidc#SlowDownException":
      response = await deserializeAws_restJson1_1SlowDownExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.sso.oidc#UnauthorizedClientException":
      response = await deserializeAws_restJson1_1UnauthorizedClientExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.sso.oidc#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_restJson1_1AccessDeniedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    __type: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    error: undefined,
    error_description: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.error !== undefined) {
    contents.error = data.error;
  }
  if (data.error_description !== undefined) {
    contents.error_description = data.error_description;
  }
  return contents;
};

const deserializeAws_restJson1_1AuthorizationPendingExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AuthorizationPendingException> => {
  const contents: AuthorizationPendingException = {
    name: "AuthorizationPendingException",
    __type: "AuthorizationPendingException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    error: undefined,
    error_description: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.error !== undefined) {
    contents.error = data.error;
  }
  if (data.error_description !== undefined) {
    contents.error_description = data.error_description;
  }
  return contents;
};

const deserializeAws_restJson1_1ExpiredTokenExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ExpiredTokenException> => {
  const contents: ExpiredTokenException = {
    name: "ExpiredTokenException",
    __type: "ExpiredTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    error: undefined,
    error_description: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.error !== undefined) {
    contents.error = data.error;
  }
  if (data.error_description !== undefined) {
    contents.error_description = data.error_description;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalServerExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
    __type: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    error: undefined,
    error_description: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.error !== undefined) {
    contents.error = data.error;
  }
  if (data.error_description !== undefined) {
    contents.error_description = data.error_description;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidClientExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidClientException> => {
  const contents: InvalidClientException = {
    name: "InvalidClientException",
    __type: "InvalidClientException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    error: undefined,
    error_description: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.error !== undefined) {
    contents.error = data.error;
  }
  if (data.error_description !== undefined) {
    contents.error_description = data.error_description;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidClientMetadataExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidClientMetadataException> => {
  const contents: InvalidClientMetadataException = {
    name: "InvalidClientMetadataException",
    __type: "InvalidClientMetadataException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    error: undefined,
    error_description: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.error !== undefined) {
    contents.error = data.error;
  }
  if (data.error_description !== undefined) {
    contents.error_description = data.error_description;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidGrantExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidGrantException> => {
  const contents: InvalidGrantException = {
    name: "InvalidGrantException",
    __type: "InvalidGrantException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    error: undefined,
    error_description: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.error !== undefined) {
    contents.error = data.error;
  }
  if (data.error_description !== undefined) {
    contents.error_description = data.error_description;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    __type: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    error: undefined,
    error_description: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.error !== undefined) {
    contents.error = data.error;
  }
  if (data.error_description !== undefined) {
    contents.error_description = data.error_description;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidScopeExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidScopeException> => {
  const contents: InvalidScopeException = {
    name: "InvalidScopeException",
    __type: "InvalidScopeException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    error: undefined,
    error_description: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.error !== undefined) {
    contents.error = data.error;
  }
  if (data.error_description !== undefined) {
    contents.error_description = data.error_description;
  }
  return contents;
};

const deserializeAws_restJson1_1SlowDownExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<SlowDownException> => {
  const contents: SlowDownException = {
    name: "SlowDownException",
    __type: "SlowDownException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    error: undefined,
    error_description: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.error !== undefined) {
    contents.error = data.error;
  }
  if (data.error_description !== undefined) {
    contents.error_description = data.error_description;
  }
  return contents;
};

const deserializeAws_restJson1_1UnauthorizedClientExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<UnauthorizedClientException> => {
  const contents: UnauthorizedClientException = {
    name: "UnauthorizedClientException",
    __type: "UnauthorizedClientException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    error: undefined,
    error_description: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.error !== undefined) {
    contents.error = data.error;
  }
  if (data.error_description !== undefined) {
    contents.error_description = data.error_description;
  }
  return contents;
};

const deserializeAws_restJson1_1UnsupportedGrantTypeExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<UnsupportedGrantTypeException> => {
  const contents: UnsupportedGrantTypeException = {
    name: "UnsupportedGrantTypeException",
    __type: "UnsupportedGrantTypeException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    error: undefined,
    error_description: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.error !== undefined) {
    contents.error = data.error;
  }
  if (data.error_description !== undefined) {
    contents.error_description = data.error_description;
  }
  return contents;
};

const serializeAws_restJson1_1Scopes = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
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
