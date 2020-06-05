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

export const serializeAws_restJson1CreateTokenCommand = async (
  input: CreateTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/token";
  let body: any;
  body = JSON.stringify({
    ...(input.clientId !== undefined && { clientId: input.clientId }),
    ...(input.clientSecret !== undefined && {
      clientSecret: input.clientSecret
    }),
    ...(input.code !== undefined && { code: input.code }),
    ...(input.deviceCode !== undefined && { deviceCode: input.deviceCode }),
    ...(input.grantType !== undefined && { grantType: input.grantType }),
    ...(input.redirectUri !== undefined && { redirectUri: input.redirectUri }),
    ...(input.refreshToken !== undefined && {
      refreshToken: input.refreshToken
    }),
    ...(input.scope !== undefined && {
      scope: serializeAws_restJson1Scopes(input.scope, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1RegisterClientCommand = async (
  input: RegisterClientCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/client/register";
  let body: any;
  body = JSON.stringify({
    ...(input.clientName !== undefined && { clientName: input.clientName }),
    ...(input.clientType !== undefined && { clientType: input.clientType }),
    ...(input.scopes !== undefined && {
      scopes: serializeAws_restJson1Scopes(input.scopes, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1StartDeviceAuthorizationCommand = async (
  input: StartDeviceAuthorizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/device_authorization";
  let body: any;
  body = JSON.stringify({
    ...(input.clientId !== undefined && { clientId: input.clientId }),
    ...(input.clientSecret !== undefined && {
      clientSecret: input.clientSecret
    }),
    ...(input.startUrl !== undefined && { startUrl: input.startUrl })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const deserializeAws_restJson1CreateTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTokenCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateTokenCommandError(output, context);
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
  if (data.accessToken !== undefined && data.accessToken !== null) {
    contents.accessToken = data.accessToken;
  }
  if (data.expiresIn !== undefined && data.expiresIn !== null) {
    contents.expiresIn = data.expiresIn;
  }
  if (data.idToken !== undefined && data.idToken !== null) {
    contents.idToken = data.idToken;
  }
  if (data.refreshToken !== undefined && data.refreshToken !== null) {
    contents.refreshToken = data.refreshToken;
  }
  if (data.tokenType !== undefined && data.tokenType !== null) {
    contents.tokenType = data.tokenType;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssooidc#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AuthorizationPendingException":
    case "com.amazonaws.ssooidc#AuthorizationPendingException":
      response = {
        ...(await deserializeAws_restJson1AuthorizationPendingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ExpiredTokenException":
    case "com.amazonaws.ssooidc#ExpiredTokenException":
      response = {
        ...(await deserializeAws_restJson1ExpiredTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.ssooidc#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidClientException":
    case "com.amazonaws.ssooidc#InvalidClientException":
      response = {
        ...(await deserializeAws_restJson1InvalidClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGrantException":
    case "com.amazonaws.ssooidc#InvalidGrantException":
      response = {
        ...(await deserializeAws_restJson1InvalidGrantExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.ssooidc#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidScopeException":
    case "com.amazonaws.ssooidc#InvalidScopeException":
      response = {
        ...(await deserializeAws_restJson1InvalidScopeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SlowDownException":
    case "com.amazonaws.ssooidc#SlowDownException":
      response = {
        ...(await deserializeAws_restJson1SlowDownExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.ssooidc#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedGrantTypeException":
    case "com.amazonaws.ssooidc#UnsupportedGrantTypeException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedGrantTypeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1RegisterClientCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterClientCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1RegisterClientCommandError(output, context);
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
  if (
    data.authorizationEndpoint !== undefined &&
    data.authorizationEndpoint !== null
  ) {
    contents.authorizationEndpoint = data.authorizationEndpoint;
  }
  if (data.clientId !== undefined && data.clientId !== null) {
    contents.clientId = data.clientId;
  }
  if (data.clientIdIssuedAt !== undefined && data.clientIdIssuedAt !== null) {
    contents.clientIdIssuedAt = data.clientIdIssuedAt;
  }
  if (data.clientSecret !== undefined && data.clientSecret !== null) {
    contents.clientSecret = data.clientSecret;
  }
  if (
    data.clientSecretExpiresAt !== undefined &&
    data.clientSecretExpiresAt !== null
  ) {
    contents.clientSecretExpiresAt = data.clientSecretExpiresAt;
  }
  if (data.tokenEndpoint !== undefined && data.tokenEndpoint !== null) {
    contents.tokenEndpoint = data.tokenEndpoint;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RegisterClientCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterClientCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.ssooidc#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidClientMetadataException":
    case "com.amazonaws.ssooidc#InvalidClientMetadataException":
      response = {
        ...(await deserializeAws_restJson1InvalidClientMetadataExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.ssooidc#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidScopeException":
    case "com.amazonaws.ssooidc#InvalidScopeException":
      response = {
        ...(await deserializeAws_restJson1InvalidScopeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1StartDeviceAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDeviceAuthorizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1StartDeviceAuthorizationCommandError(
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
  if (data.deviceCode !== undefined && data.deviceCode !== null) {
    contents.deviceCode = data.deviceCode;
  }
  if (data.expiresIn !== undefined && data.expiresIn !== null) {
    contents.expiresIn = data.expiresIn;
  }
  if (data.interval !== undefined && data.interval !== null) {
    contents.interval = data.interval;
  }
  if (data.userCode !== undefined && data.userCode !== null) {
    contents.userCode = data.userCode;
  }
  if (data.verificationUri !== undefined && data.verificationUri !== null) {
    contents.verificationUri = data.verificationUri;
  }
  if (
    data.verificationUriComplete !== undefined &&
    data.verificationUriComplete !== null
  ) {
    contents.verificationUriComplete = data.verificationUriComplete;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartDeviceAuthorizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDeviceAuthorizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.ssooidc#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidClientException":
    case "com.amazonaws.ssooidc#InvalidClientException":
      response = {
        ...(await deserializeAws_restJson1InvalidClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.ssooidc#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SlowDownException":
    case "com.amazonaws.ssooidc#SlowDownException":
      response = {
        ...(await deserializeAws_restJson1SlowDownExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.ssooidc#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    error: undefined,
    error_description: undefined
  };
  const data: any = parsedOutput.body;
  if (data.error !== undefined && data.error !== null) {
    contents.error = data.error;
  }
  if (data.error_description !== undefined && data.error_description !== null) {
    contents.error_description = data.error_description;
  }
  return contents;
};

const deserializeAws_restJson1AuthorizationPendingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AuthorizationPendingException> => {
  const contents: AuthorizationPendingException = {
    name: "AuthorizationPendingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    error: undefined,
    error_description: undefined
  };
  const data: any = parsedOutput.body;
  if (data.error !== undefined && data.error !== null) {
    contents.error = data.error;
  }
  if (data.error_description !== undefined && data.error_description !== null) {
    contents.error_description = data.error_description;
  }
  return contents;
};

const deserializeAws_restJson1ExpiredTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExpiredTokenException> => {
  const contents: ExpiredTokenException = {
    name: "ExpiredTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    error: undefined,
    error_description: undefined
  };
  const data: any = parsedOutput.body;
  if (data.error !== undefined && data.error !== null) {
    contents.error = data.error;
  }
  if (data.error_description !== undefined && data.error_description !== null) {
    contents.error_description = data.error_description;
  }
  return contents;
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    error: undefined,
    error_description: undefined
  };
  const data: any = parsedOutput.body;
  if (data.error !== undefined && data.error !== null) {
    contents.error = data.error;
  }
  if (data.error_description !== undefined && data.error_description !== null) {
    contents.error_description = data.error_description;
  }
  return contents;
};

const deserializeAws_restJson1InvalidClientExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidClientException> => {
  const contents: InvalidClientException = {
    name: "InvalidClientException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    error: undefined,
    error_description: undefined
  };
  const data: any = parsedOutput.body;
  if (data.error !== undefined && data.error !== null) {
    contents.error = data.error;
  }
  if (data.error_description !== undefined && data.error_description !== null) {
    contents.error_description = data.error_description;
  }
  return contents;
};

const deserializeAws_restJson1InvalidClientMetadataExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidClientMetadataException> => {
  const contents: InvalidClientMetadataException = {
    name: "InvalidClientMetadataException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    error: undefined,
    error_description: undefined
  };
  const data: any = parsedOutput.body;
  if (data.error !== undefined && data.error !== null) {
    contents.error = data.error;
  }
  if (data.error_description !== undefined && data.error_description !== null) {
    contents.error_description = data.error_description;
  }
  return contents;
};

const deserializeAws_restJson1InvalidGrantExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGrantException> => {
  const contents: InvalidGrantException = {
    name: "InvalidGrantException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    error: undefined,
    error_description: undefined
  };
  const data: any = parsedOutput.body;
  if (data.error !== undefined && data.error !== null) {
    contents.error = data.error;
  }
  if (data.error_description !== undefined && data.error_description !== null) {
    contents.error_description = data.error_description;
  }
  return contents;
};

const deserializeAws_restJson1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    error: undefined,
    error_description: undefined
  };
  const data: any = parsedOutput.body;
  if (data.error !== undefined && data.error !== null) {
    contents.error = data.error;
  }
  if (data.error_description !== undefined && data.error_description !== null) {
    contents.error_description = data.error_description;
  }
  return contents;
};

const deserializeAws_restJson1InvalidScopeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidScopeException> => {
  const contents: InvalidScopeException = {
    name: "InvalidScopeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    error: undefined,
    error_description: undefined
  };
  const data: any = parsedOutput.body;
  if (data.error !== undefined && data.error !== null) {
    contents.error = data.error;
  }
  if (data.error_description !== undefined && data.error_description !== null) {
    contents.error_description = data.error_description;
  }
  return contents;
};

const deserializeAws_restJson1SlowDownExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SlowDownException> => {
  const contents: SlowDownException = {
    name: "SlowDownException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    error: undefined,
    error_description: undefined
  };
  const data: any = parsedOutput.body;
  if (data.error !== undefined && data.error !== null) {
    contents.error = data.error;
  }
  if (data.error_description !== undefined && data.error_description !== null) {
    contents.error_description = data.error_description;
  }
  return contents;
};

const deserializeAws_restJson1UnauthorizedClientExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedClientException> => {
  const contents: UnauthorizedClientException = {
    name: "UnauthorizedClientException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    error: undefined,
    error_description: undefined
  };
  const data: any = parsedOutput.body;
  if (data.error !== undefined && data.error !== null) {
    contents.error = data.error;
  }
  if (data.error_description !== undefined && data.error_description !== null) {
    contents.error_description = data.error_description;
  }
  return contents;
};

const deserializeAws_restJson1UnsupportedGrantTypeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedGrantTypeException> => {
  const contents: UnsupportedGrantTypeException = {
    name: "UnsupportedGrantTypeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    error: undefined,
    error_description: undefined
  };
  const data: any = parsedOutput.body;
  if (data.error !== undefined && data.error !== null) {
    contents.error = data.error;
  }
  if (data.error_description !== undefined && data.error_description !== null) {
    contents.error_description = data.error_description;
  }
  return contents;
};

const serializeAws_restJson1Scopes = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") ||
    value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) =>
    Object.keys(object).find(k => k.toLowerCase() === key.toLowerCase());

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
