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
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
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
    headers["x-amz-sso_bearer_token"] = input.accessToken.toString();
  }
  let resolvedPath = "/federation/credentials";
  const query: any = {};
  if (input.accountId !== undefined) {
    query["account_id"] = input.accountId.toString();
  }
  if (input.roleName !== undefined) {
    query["role_name"] = input.roleName.toString();
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
    headers["x-amz-sso_bearer_token"] = input.accessToken.toString();
  }
  let resolvedPath = "/assignment/roles";
  const query: any = {};
  if (input.accountId !== undefined) {
    query["account_id"] = input.accountId.toString();
  }
  if (input.maxResults !== undefined) {
    query["max_result"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["next_token"] = input.nextToken.toString();
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
    headers["x-amz-sso_bearer_token"] = input.accessToken.toString();
  }
  let resolvedPath = "/assignment/accounts";
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["max_result"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["next_token"] = input.nextToken.toString();
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
    headers["x-amz-sso_bearer_token"] = input.accessToken.toString();
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
  if (output.statusCode !== 200) {
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
  if (data.roleCredentials !== undefined) {
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.switchboard.portal#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.switchboard.portal#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.switchboard.portal#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.switchboard.portal#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.switchboard.portal#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListAccountRolesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountRolesCommandOutput> {
  if (output.statusCode !== 200) {
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
  if (data.nextToken !== undefined) {
    contents.nextToken = data.nextToken;
  }
  if (data.roleList !== undefined) {
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.switchboard.portal#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.switchboard.portal#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.switchboard.portal#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.switchboard.portal#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.switchboard.portal#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListAccountsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListAccountsCommandError(output, context);
  }
  const contents: ListAccountsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAccountsResponse",
    accountList: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.accountList !== undefined) {
    contents.accountList = deserializeAws_restJson1_1AccountListType(
      data.accountList,
      context
    );
  }
  if (data.nextToken !== undefined) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListAccountsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.switchboard.portal#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.switchboard.portal#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.switchboard.portal#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.switchboard.portal#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.switchboard.portal#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1LogoutCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LogoutCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1LogoutCommandError(output, context);
  }
  const contents: LogoutCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1LogoutCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LogoutCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.switchboard.portal#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.switchboard.portal#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.switchboard.portal#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.switchboard.portal#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_restJson1_1InvalidRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: InvalidRequestException = {
    __type: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = output.body;
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    __type: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = output.body;
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1TooManyRequestsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    __type: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = output.body;
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1UnauthorizedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: UnauthorizedException = {
    __type: "UnauthorizedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = output.body;
  if (data.message !== undefined) {
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
  if (output.accountId !== undefined) {
    contents.accountId = output.accountId;
  }
  if (output.accountName !== undefined) {
    contents.accountName = output.accountName;
  }
  if (output.emailAddress !== undefined) {
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
  if (output.accessKeyId !== undefined) {
    contents.accessKeyId = output.accessKeyId;
  }
  if (output.expiration !== undefined) {
    contents.expiration = output.expiration;
  }
  if (output.secretAccessKey !== undefined) {
    contents.secretAccessKey = output.secretAccessKey;
  }
  if (output.sessionToken !== undefined) {
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
  if (output.accountId !== undefined) {
    contents.accountId = output.accountId;
  }
  if (output.roleName !== undefined) {
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

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
