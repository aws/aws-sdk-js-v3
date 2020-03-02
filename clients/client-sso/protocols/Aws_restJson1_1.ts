import {
  GetRoleCredentialsCommandInput,
  GetRoleCredentialsCommandOutput
} from "../commands/GetRoleCredentialsCommand";
import {
  ListAccountRolesCommandInput,
  ListAccountRolesCommandOutput
} from "../commands/ListAccountRolesCommand";
import {
  ListAccountsCommandInput,
  ListAccountsCommandOutput
} from "../commands/ListAccountsCommand";
import {
  LogoutCommandInput,
  LogoutCommandOutput
} from "../commands/LogoutCommand";
import {
  AccountInfo,
  InvalidRequestException,
  ResourceNotFoundException,
  RoleCredentials,
  RoleInfo,
  TooManyRequestsException,
  UnauthorizedException
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_restJson1_1GetRoleCredentialsCommand(
  input: GetRoleCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.accessToken !== undefined) {
    headers["x-amz-sso_bearer_token"] = input.accessToken;
  }
  let resolvedPath = "/federation/credentials";
  const query: any = {};
  if (input.accountId !== undefined) {
    query["account_id"] = input.accountId;
  }
  if (input.roleName !== undefined) {
    query["role_name"] = input.roleName;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListAccountRolesCommand(
  input: ListAccountRolesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.accessToken !== undefined) {
    headers["x-amz-sso_bearer_token"] = input.accessToken;
  }
  let resolvedPath = "/assignment/roles";
  const query: any = {};
  if (input.accountId !== undefined) {
    query["account_id"] = input.accountId;
  }
  if (input.maxResults !== undefined) {
    query["max_result"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["next_token"] = input.nextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListAccountsCommand(
  input: ListAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.accessToken !== undefined) {
    headers["x-amz-sso_bearer_token"] = input.accessToken;
  }
  let resolvedPath = "/assignment/accounts";
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["max_result"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["next_token"] = input.nextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1LogoutCommand(
  input: LogoutCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.accessToken !== undefined) {
    headers["x-amz-sso_bearer_token"] = input.accessToken;
  }
  let resolvedPath = "/logout";
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath
  });
}

export async function deserializeAws_restJson1_1GetRoleCredentialsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRoleCredentialsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetRoleCredentialsCommandError(
      output,
      context
    );
  }
  const contents: GetRoleCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRoleCredentialsResponse",
    roleCredentials: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.roleCredentials !== undefined && data.roleCredentials !== null) {
    contents.roleCredentials = deserializeAws_restJson1_1RoleCredentials(
      data.roleCredentials,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetRoleCredentialsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRoleCredentialsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.switchboard.portal#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.switchboard.portal#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.switchboard.portal#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.switchboard.portal#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ListAccountRolesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountRolesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListAccountRolesCommandError(
      output,
      context
    );
  }
  const contents: ListAccountRolesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAccountRolesResponse",
    nextToken: undefined,
    roleList: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.roleList !== undefined && data.roleList !== null) {
    contents.roleList = deserializeAws_restJson1_1RoleListType(
      data.roleList,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListAccountRolesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountRolesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.switchboard.portal#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.switchboard.portal#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.switchboard.portal#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.switchboard.portal#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ListAccountsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListAccountsCommandError(output, context);
  }
  const contents: ListAccountsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAccountsResponse",
    accountList: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.accountList !== undefined && data.accountList !== null) {
    contents.accountList = deserializeAws_restJson1_1AccountListType(
      data.accountList,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListAccountsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.switchboard.portal#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.switchboard.portal#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.switchboard.portal#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.switchboard.portal#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1LogoutCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LogoutCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1LogoutCommandError(output, context);
  }
  const contents: LogoutCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1LogoutCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LogoutCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.switchboard.portal#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.switchboard.portal#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.switchboard.portal#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

const deserializeAws_restJson1_1InvalidRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1TooManyRequestsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1UnauthorizedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: UnauthorizedException = {
    name: "UnauthorizedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1AccountInfo = (
  output: any,
  context: __SerdeContext
): AccountInfo => {
  let contents: any = {
    __type: "AccountInfo",
    accountId: undefined,
    accountName: undefined,
    emailAddress: undefined
  };
  if (output.accountId !== undefined && output.accountId !== null) {
    contents.accountId = output.accountId;
  }
  if (output.accountName !== undefined && output.accountName !== null) {
    contents.accountName = output.accountName;
  }
  if (output.emailAddress !== undefined && output.emailAddress !== null) {
    contents.emailAddress = output.emailAddress;
  }
  return contents;
};

const deserializeAws_restJson1_1AccountListType = (
  output: any,
  context: __SerdeContext
): Array<AccountInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1AccountInfo(entry, context)
  );
};

const deserializeAws_restJson1_1RoleCredentials = (
  output: any,
  context: __SerdeContext
): RoleCredentials => {
  let contents: any = {
    __type: "RoleCredentials",
    accessKeyId: undefined,
    expiration: undefined,
    secretAccessKey: undefined,
    sessionToken: undefined
  };
  if (output.accessKeyId !== undefined && output.accessKeyId !== null) {
    contents.accessKeyId = output.accessKeyId;
  }
  if (output.expiration !== undefined && output.expiration !== null) {
    contents.expiration = output.expiration;
  }
  if (output.secretAccessKey !== undefined && output.secretAccessKey !== null) {
    contents.secretAccessKey = output.secretAccessKey;
  }
  if (output.sessionToken !== undefined && output.sessionToken !== null) {
    contents.sessionToken = output.sessionToken;
  }
  return contents;
};

const deserializeAws_restJson1_1RoleInfo = (
  output: any,
  context: __SerdeContext
): RoleInfo => {
  let contents: any = {
    __type: "RoleInfo",
    accountId: undefined,
    roleName: undefined
  };
  if (output.accountId !== undefined && output.accountId !== null) {
    contents.accountId = output.accountId;
  }
  if (output.roleName !== undefined && output.roleName !== null) {
    contents.roleName = output.roleName;
  }
  return contents;
};

const deserializeAws_restJson1_1RoleListType = (
  output: any,
  context: __SerdeContext
): Array<RoleInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1RoleInfo(entry, context)
  );
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
