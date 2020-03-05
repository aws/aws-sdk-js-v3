import {
  CreateServerCommandInput,
  CreateServerCommandOutput
} from "../commands/CreateServerCommand";
import {
  CreateUserCommandInput,
  CreateUserCommandOutput
} from "../commands/CreateUserCommand";
import {
  DeleteServerCommandInput,
  DeleteServerCommandOutput
} from "../commands/DeleteServerCommand";
import {
  DeleteSshPublicKeyCommandInput,
  DeleteSshPublicKeyCommandOutput
} from "../commands/DeleteSshPublicKeyCommand";
import {
  DeleteUserCommandInput,
  DeleteUserCommandOutput
} from "../commands/DeleteUserCommand";
import {
  DescribeServerCommandInput,
  DescribeServerCommandOutput
} from "../commands/DescribeServerCommand";
import {
  DescribeUserCommandInput,
  DescribeUserCommandOutput
} from "../commands/DescribeUserCommand";
import {
  ImportSshPublicKeyCommandInput,
  ImportSshPublicKeyCommandOutput
} from "../commands/ImportSshPublicKeyCommand";
import {
  ListServersCommandInput,
  ListServersCommandOutput
} from "../commands/ListServersCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  ListUsersCommandInput,
  ListUsersCommandOutput
} from "../commands/ListUsersCommand";
import {
  StartServerCommandInput,
  StartServerCommandOutput
} from "../commands/StartServerCommand";
import {
  StopServerCommandInput,
  StopServerCommandOutput
} from "../commands/StopServerCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  TestIdentityProviderCommandInput,
  TestIdentityProviderCommandOutput
} from "../commands/TestIdentityProviderCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateServerCommandInput,
  UpdateServerCommandOutput
} from "../commands/UpdateServerCommand";
import {
  UpdateUserCommandInput,
  UpdateUserCommandOutput
} from "../commands/UpdateUserCommand";
import {
  ConflictException,
  CreateServerRequest,
  CreateServerResponse,
  CreateUserRequest,
  CreateUserResponse,
  DeleteServerRequest,
  DeleteSshPublicKeyRequest,
  DeleteUserRequest,
  DescribeServerRequest,
  DescribeServerResponse,
  DescribeUserRequest,
  DescribeUserResponse,
  DescribedServer,
  DescribedUser,
  EndpointDetails,
  HomeDirectoryMapEntry,
  IdentityProviderDetails,
  ImportSshPublicKeyRequest,
  ImportSshPublicKeyResponse,
  InternalServiceError,
  InvalidNextTokenException,
  InvalidRequestException,
  ListServersRequest,
  ListServersResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListUsersRequest,
  ListUsersResponse,
  ListedServer,
  ListedUser,
  ResourceExistsException,
  ResourceNotFoundException,
  ServiceUnavailableException,
  SshPublicKey,
  StartServerRequest,
  StopServerRequest,
  Tag,
  TagResourceRequest,
  TestIdentityProviderRequest,
  TestIdentityProviderResponse,
  ThrottlingException,
  UntagResourceRequest,
  UpdateServerRequest,
  UpdateServerResponse,
  UpdateUserRequest,
  UpdateUserResponse
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1CreateServerCommand(
  input: CreateServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TransferService.CreateServer";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateServerRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateUserCommand(
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TransferService.CreateUser";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteServerCommand(
  input: DeleteServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TransferService.DeleteServer";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteServerRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteSshPublicKeyCommand(
  input: DeleteSshPublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TransferService.DeleteSshPublicKey";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteSshPublicKeyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteUserCommand(
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TransferService.DeleteUser";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeServerCommand(
  input: DescribeServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TransferService.DescribeServer";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeServerRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeUserCommand(
  input: DescribeUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TransferService.DescribeUser";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeUserRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ImportSshPublicKeyCommand(
  input: ImportSshPublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TransferService.ImportSshPublicKey";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ImportSshPublicKeyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListServersCommand(
  input: ListServersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TransferService.ListServers";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListServersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TransferService.ListTagsForResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTagsForResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListUsersCommand(
  input: ListUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TransferService.ListUsers";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListUsersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StartServerCommand(
  input: StartServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TransferService.StartServer";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartServerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StopServerCommand(
  input: StopServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TransferService.StopServer";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopServerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TransferService.TagResource";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1TestIdentityProviderCommand(
  input: TestIdentityProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TransferService.TestIdentityProvider";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1TestIdentityProviderRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TransferService.UntagResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UntagResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateServerCommand(
  input: UpdateServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TransferService.UpdateServer";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateServerRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateUserCommand(
  input: UpdateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "TransferService.UpdateUser";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1CreateServerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateServerResponse(data, context);
  const response: CreateServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateServerResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateServerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServerCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazon.coral.service#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceError":
    case "com.amazonaws.necco.coral#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.necco.coral#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.necco.coral#ResourceExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceExistsExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateUserCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateUserResponse(data, context);
  const response: CreateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateUserResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateUserCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazon.coral.service#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceError":
    case "com.amazonaws.necco.coral#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.necco.coral#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.necco.coral#ResourceExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.necco.coral#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteServerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteServerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteServerCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteServerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServerCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazon.coral.service#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceError":
    case "com.amazonaws.necco.coral#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.necco.coral#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.necco.coral#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteSshPublicKeyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSshPublicKeyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteSshPublicKeyCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DeleteSshPublicKeyCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteSshPublicKeyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSshPublicKeyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazon.coral.service#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceError":
    case "com.amazonaws.necco.coral#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.necco.coral#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.necco.coral#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.necco.coral#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteUserCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteUserCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteUserCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazon.coral.service#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceError":
    case "com.amazonaws.necco.coral#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.necco.coral#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.necco.coral#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeServerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeServerResponse(data, context);
  const response: DescribeServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeServerResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeServerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServerCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazon.coral.service#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceError":
    case "com.amazonaws.necco.coral#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.necco.coral#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.necco.coral#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeUserCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeUserResponse(data, context);
  const response: DescribeUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeUserResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeUserCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazon.coral.service#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceError":
    case "com.amazonaws.necco.coral#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.necco.coral#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.necco.coral#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ImportSshPublicKeyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportSshPublicKeyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ImportSshPublicKeyCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ImportSshPublicKeyResponse(data, context);
  const response: ImportSshPublicKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ImportSshPublicKeyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ImportSshPublicKeyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportSshPublicKeyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazon.coral.service#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceError":
    case "com.amazonaws.necco.coral#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.necco.coral#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.necco.coral#ResourceExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.necco.coral#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.necco.coral#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListServersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServersCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListServersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListServersResponse(data, context);
  const response: ListServersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListServersResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListServersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServersCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazon.coral.service#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceError":
    case "com.amazonaws.necco.coral#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.necco.coral#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.necco.coral#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazon.coral.service#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceError":
    case "com.amazonaws.necco.coral#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.necco.coral#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.necco.coral#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListUsersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListUsersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListUsersResponse(data, context);
  const response: ListUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListUsersResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListUsersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazon.coral.service#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceError":
    case "com.amazonaws.necco.coral#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.necco.coral#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.necco.coral#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.necco.coral#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1StartServerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartServerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartServerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StartServerCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartServerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartServerCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazon.coral.service#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceError":
    case "com.amazonaws.necco.coral#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.necco.coral#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.necco.coral#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.necco.coral#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1StopServerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopServerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopServerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopServerCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StopServerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopServerCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazon.coral.service#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceError":
    case "com.amazonaws.necco.coral#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.necco.coral#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.necco.coral#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.necco.coral#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazon.coral.service#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceError":
    case "com.amazonaws.necco.coral#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.necco.coral#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.necco.coral#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1TestIdentityProviderCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestIdentityProviderCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TestIdentityProviderCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TestIdentityProviderResponse(data, context);
  const response: TestIdentityProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TestIdentityProviderResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1TestIdentityProviderCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestIdentityProviderCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazon.coral.service#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceError":
    case "com.amazonaws.necco.coral#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.necco.coral#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.necco.coral#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazon.coral.service#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceError":
    case "com.amazonaws.necco.coral#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.necco.coral#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.necco.coral#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdateServerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateServerResponse(data, context);
  const response: UpdateServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateServerResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateServerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServerCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazon.coral.service#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.necco.coral#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceError":
    case "com.amazonaws.necco.coral#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.necco.coral#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.necco.coral#ResourceExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.necco.coral#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.necco.coral#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdateUserCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateUserResponse(data, context);
  const response: UpdateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateUserResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateUserCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazon.coral.service#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceError":
    case "com.amazonaws.necco.coral#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.necco.coral#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.necco.coral#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.necco.coral#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
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
}

const deserializeAws_json1_1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceUnavailableException(
    body,
    context
  );
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConflictException(
    body,
    context
  );
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InternalServiceErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServiceError(
    body,
    context
  );
  const contents: InternalServiceError = {
    name: "InternalServiceError",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidNextTokenException(
    body,
    context
  );
  const contents: InvalidNextTokenException = {
    name: "InvalidNextTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRequestException(
    body,
    context
  );
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceExistsException(
    body,
    context
  );
  const contents: ResourceExistsException = {
    name: "ResourceExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(
    body,
    context
  );
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
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
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1AddressAllocationIds = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1CreateServerRequest = (
  input: CreateServerRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EndpointDetails !== undefined) {
    bodyParams["EndpointDetails"] = serializeAws_json1_1EndpointDetails(
      input.EndpointDetails,
      context
    );
  }
  if (input.EndpointType !== undefined) {
    bodyParams["EndpointType"] = input.EndpointType;
  }
  if (input.HostKey !== undefined) {
    bodyParams["HostKey"] = input.HostKey;
  }
  if (input.IdentityProviderDetails !== undefined) {
    bodyParams[
      "IdentityProviderDetails"
    ] = serializeAws_json1_1IdentityProviderDetails(
      input.IdentityProviderDetails,
      context
    );
  }
  if (input.IdentityProviderType !== undefined) {
    bodyParams["IdentityProviderType"] = input.IdentityProviderType;
  }
  if (input.LoggingRole !== undefined) {
    bodyParams["LoggingRole"] = input.LoggingRole;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreateUserRequest = (
  input: CreateUserRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.HomeDirectory !== undefined) {
    bodyParams["HomeDirectory"] = input.HomeDirectory;
  }
  if (input.HomeDirectoryMappings !== undefined) {
    bodyParams[
      "HomeDirectoryMappings"
    ] = serializeAws_json1_1HomeDirectoryMappings(
      input.HomeDirectoryMappings,
      context
    );
  }
  if (input.HomeDirectoryType !== undefined) {
    bodyParams["HomeDirectoryType"] = input.HomeDirectoryType;
  }
  if (input.Policy !== undefined) {
    bodyParams["Policy"] = input.Policy;
  }
  if (input.Role !== undefined) {
    bodyParams["Role"] = input.Role;
  }
  if (input.ServerId !== undefined) {
    bodyParams["ServerId"] = input.ServerId;
  }
  if (input.SshPublicKeyBody !== undefined) {
    bodyParams["SshPublicKeyBody"] = input.SshPublicKeyBody;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
  }
  if (input.UserName !== undefined) {
    bodyParams["UserName"] = input.UserName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteServerRequest = (
  input: DeleteServerRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ServerId !== undefined) {
    bodyParams["ServerId"] = input.ServerId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteSshPublicKeyRequest = (
  input: DeleteSshPublicKeyRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ServerId !== undefined) {
    bodyParams["ServerId"] = input.ServerId;
  }
  if (input.SshPublicKeyId !== undefined) {
    bodyParams["SshPublicKeyId"] = input.SshPublicKeyId;
  }
  if (input.UserName !== undefined) {
    bodyParams["UserName"] = input.UserName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteUserRequest = (
  input: DeleteUserRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ServerId !== undefined) {
    bodyParams["ServerId"] = input.ServerId;
  }
  if (input.UserName !== undefined) {
    bodyParams["UserName"] = input.UserName;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeServerRequest = (
  input: DescribeServerRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ServerId !== undefined) {
    bodyParams["ServerId"] = input.ServerId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeUserRequest = (
  input: DescribeUserRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ServerId !== undefined) {
    bodyParams["ServerId"] = input.ServerId;
  }
  if (input.UserName !== undefined) {
    bodyParams["UserName"] = input.UserName;
  }
  return bodyParams;
};

const serializeAws_json1_1EndpointDetails = (
  input: EndpointDetails,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AddressAllocationIds !== undefined) {
    bodyParams[
      "AddressAllocationIds"
    ] = serializeAws_json1_1AddressAllocationIds(
      input.AddressAllocationIds,
      context
    );
  }
  if (input.SubnetIds !== undefined) {
    bodyParams["SubnetIds"] = serializeAws_json1_1SubnetIds(
      input.SubnetIds,
      context
    );
  }
  if (input.VpcEndpointId !== undefined) {
    bodyParams["VpcEndpointId"] = input.VpcEndpointId;
  }
  if (input.VpcId !== undefined) {
    bodyParams["VpcId"] = input.VpcId;
  }
  return bodyParams;
};

const serializeAws_json1_1HomeDirectoryMapEntry = (
  input: HomeDirectoryMapEntry,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Entry !== undefined) {
    bodyParams["Entry"] = input.Entry;
  }
  if (input.Target !== undefined) {
    bodyParams["Target"] = input.Target;
  }
  return bodyParams;
};

const serializeAws_json1_1HomeDirectoryMappings = (
  input: Array<HomeDirectoryMapEntry>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1HomeDirectoryMapEntry(entry, context));
  }
  return contents;
};

const serializeAws_json1_1IdentityProviderDetails = (
  input: IdentityProviderDetails,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.InvocationRole !== undefined) {
    bodyParams["InvocationRole"] = input.InvocationRole;
  }
  if (input.Url !== undefined) {
    bodyParams["Url"] = input.Url;
  }
  return bodyParams;
};

const serializeAws_json1_1ImportSshPublicKeyRequest = (
  input: ImportSshPublicKeyRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ServerId !== undefined) {
    bodyParams["ServerId"] = input.ServerId;
  }
  if (input.SshPublicKeyBody !== undefined) {
    bodyParams["SshPublicKeyBody"] = input.SshPublicKeyBody;
  }
  if (input.UserName !== undefined) {
    bodyParams["UserName"] = input.UserName;
  }
  return bodyParams;
};

const serializeAws_json1_1ListServersRequest = (
  input: ListServersRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Arn !== undefined) {
    bodyParams["Arn"] = input.Arn;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListUsersRequest = (
  input: ListUsersRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ServerId !== undefined) {
    bodyParams["ServerId"] = input.ServerId;
  }
  return bodyParams;
};

const serializeAws_json1_1StartServerRequest = (
  input: StartServerRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ServerId !== undefined) {
    bodyParams["ServerId"] = input.ServerId;
  }
  return bodyParams;
};

const serializeAws_json1_1StopServerRequest = (
  input: StopServerRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ServerId !== undefined) {
    bodyParams["ServerId"] = input.ServerId;
  }
  return bodyParams;
};

const serializeAws_json1_1SubnetIds = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  const bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1TagKeys = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1TagResourceRequest = (
  input: TagResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Arn !== undefined) {
    bodyParams["Arn"] = input.Arn;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1Tags = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Tag(entry, context));
  }
  return contents;
};

const serializeAws_json1_1TestIdentityProviderRequest = (
  input: TestIdentityProviderRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ServerId !== undefined) {
    bodyParams["ServerId"] = input.ServerId;
  }
  if (input.UserName !== undefined) {
    bodyParams["UserName"] = input.UserName;
  }
  if (input.UserPassword !== undefined) {
    bodyParams["UserPassword"] = input.UserPassword;
  }
  return bodyParams;
};

const serializeAws_json1_1UntagResourceRequest = (
  input: UntagResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Arn !== undefined) {
    bodyParams["Arn"] = input.Arn;
  }
  if (input.TagKeys !== undefined) {
    bodyParams["TagKeys"] = serializeAws_json1_1TagKeys(input.TagKeys, context);
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateServerRequest = (
  input: UpdateServerRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EndpointDetails !== undefined) {
    bodyParams["EndpointDetails"] = serializeAws_json1_1EndpointDetails(
      input.EndpointDetails,
      context
    );
  }
  if (input.EndpointType !== undefined) {
    bodyParams["EndpointType"] = input.EndpointType;
  }
  if (input.HostKey !== undefined) {
    bodyParams["HostKey"] = input.HostKey;
  }
  if (input.IdentityProviderDetails !== undefined) {
    bodyParams[
      "IdentityProviderDetails"
    ] = serializeAws_json1_1IdentityProviderDetails(
      input.IdentityProviderDetails,
      context
    );
  }
  if (input.LoggingRole !== undefined) {
    bodyParams["LoggingRole"] = input.LoggingRole;
  }
  if (input.ServerId !== undefined) {
    bodyParams["ServerId"] = input.ServerId;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateUserRequest = (
  input: UpdateUserRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.HomeDirectory !== undefined) {
    bodyParams["HomeDirectory"] = input.HomeDirectory;
  }
  if (input.HomeDirectoryMappings !== undefined) {
    bodyParams[
      "HomeDirectoryMappings"
    ] = serializeAws_json1_1HomeDirectoryMappings(
      input.HomeDirectoryMappings,
      context
    );
  }
  if (input.HomeDirectoryType !== undefined) {
    bodyParams["HomeDirectoryType"] = input.HomeDirectoryType;
  }
  if (input.Policy !== undefined) {
    bodyParams["Policy"] = input.Policy;
  }
  if (input.Role !== undefined) {
    bodyParams["Role"] = input.Role;
  }
  if (input.ServerId !== undefined) {
    bodyParams["ServerId"] = input.ServerId;
  }
  if (input.UserName !== undefined) {
    bodyParams["UserName"] = input.UserName;
  }
  return bodyParams;
};

const deserializeAws_json1_1ServiceUnavailableException = (
  output: any,
  context: __SerdeContext
): ServiceUnavailableException => {
  let contents: any = {
    __type: "ServiceUnavailableException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1AddressAllocationIds = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ConflictException = (
  output: any,
  context: __SerdeContext
): ConflictException => {
  let contents: any = {
    __type: "ConflictException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1CreateServerResponse = (
  output: any,
  context: __SerdeContext
): CreateServerResponse => {
  let contents: any = {
    __type: "CreateServerResponse",
    ServerId: undefined
  };
  if (output.ServerId !== undefined && output.ServerId !== null) {
    contents.ServerId = output.ServerId;
  }
  return contents;
};

const deserializeAws_json1_1CreateUserResponse = (
  output: any,
  context: __SerdeContext
): CreateUserResponse => {
  let contents: any = {
    __type: "CreateUserResponse",
    ServerId: undefined,
    UserName: undefined
  };
  if (output.ServerId !== undefined && output.ServerId !== null) {
    contents.ServerId = output.ServerId;
  }
  if (output.UserName !== undefined && output.UserName !== null) {
    contents.UserName = output.UserName;
  }
  return contents;
};

const deserializeAws_json1_1DescribeServerResponse = (
  output: any,
  context: __SerdeContext
): DescribeServerResponse => {
  let contents: any = {
    __type: "DescribeServerResponse",
    Server: undefined
  };
  if (output.Server !== undefined && output.Server !== null) {
    contents.Server = deserializeAws_json1_1DescribedServer(
      output.Server,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeUserResponse = (
  output: any,
  context: __SerdeContext
): DescribeUserResponse => {
  let contents: any = {
    __type: "DescribeUserResponse",
    ServerId: undefined,
    User: undefined
  };
  if (output.ServerId !== undefined && output.ServerId !== null) {
    contents.ServerId = output.ServerId;
  }
  if (output.User !== undefined && output.User !== null) {
    contents.User = deserializeAws_json1_1DescribedUser(output.User, context);
  }
  return contents;
};

const deserializeAws_json1_1DescribedServer = (
  output: any,
  context: __SerdeContext
): DescribedServer => {
  let contents: any = {
    __type: "DescribedServer",
    Arn: undefined,
    EndpointDetails: undefined,
    EndpointType: undefined,
    HostKeyFingerprint: undefined,
    IdentityProviderDetails: undefined,
    IdentityProviderType: undefined,
    LoggingRole: undefined,
    ServerId: undefined,
    State: undefined,
    Tags: undefined,
    UserCount: undefined
  };
  if (output.Arn !== undefined && output.Arn !== null) {
    contents.Arn = output.Arn;
  }
  if (output.EndpointDetails !== undefined && output.EndpointDetails !== null) {
    contents.EndpointDetails = deserializeAws_json1_1EndpointDetails(
      output.EndpointDetails,
      context
    );
  }
  if (output.EndpointType !== undefined && output.EndpointType !== null) {
    contents.EndpointType = output.EndpointType;
  }
  if (
    output.HostKeyFingerprint !== undefined &&
    output.HostKeyFingerprint !== null
  ) {
    contents.HostKeyFingerprint = output.HostKeyFingerprint;
  }
  if (
    output.IdentityProviderDetails !== undefined &&
    output.IdentityProviderDetails !== null
  ) {
    contents.IdentityProviderDetails = deserializeAws_json1_1IdentityProviderDetails(
      output.IdentityProviderDetails,
      context
    );
  }
  if (
    output.IdentityProviderType !== undefined &&
    output.IdentityProviderType !== null
  ) {
    contents.IdentityProviderType = output.IdentityProviderType;
  }
  if (output.LoggingRole !== undefined && output.LoggingRole !== null) {
    contents.LoggingRole = output.LoggingRole;
  }
  if (output.ServerId !== undefined && output.ServerId !== null) {
    contents.ServerId = output.ServerId;
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (output.Tags !== undefined && output.Tags !== null) {
    contents.Tags = deserializeAws_json1_1Tags(output.Tags, context);
  }
  if (output.UserCount !== undefined && output.UserCount !== null) {
    contents.UserCount = output.UserCount;
  }
  return contents;
};

const deserializeAws_json1_1DescribedUser = (
  output: any,
  context: __SerdeContext
): DescribedUser => {
  let contents: any = {
    __type: "DescribedUser",
    Arn: undefined,
    HomeDirectory: undefined,
    HomeDirectoryMappings: undefined,
    HomeDirectoryType: undefined,
    Policy: undefined,
    Role: undefined,
    SshPublicKeys: undefined,
    Tags: undefined,
    UserName: undefined
  };
  if (output.Arn !== undefined && output.Arn !== null) {
    contents.Arn = output.Arn;
  }
  if (output.HomeDirectory !== undefined && output.HomeDirectory !== null) {
    contents.HomeDirectory = output.HomeDirectory;
  }
  if (
    output.HomeDirectoryMappings !== undefined &&
    output.HomeDirectoryMappings !== null
  ) {
    contents.HomeDirectoryMappings = deserializeAws_json1_1HomeDirectoryMappings(
      output.HomeDirectoryMappings,
      context
    );
  }
  if (
    output.HomeDirectoryType !== undefined &&
    output.HomeDirectoryType !== null
  ) {
    contents.HomeDirectoryType = output.HomeDirectoryType;
  }
  if (output.Policy !== undefined && output.Policy !== null) {
    contents.Policy = output.Policy;
  }
  if (output.Role !== undefined && output.Role !== null) {
    contents.Role = output.Role;
  }
  if (output.SshPublicKeys !== undefined && output.SshPublicKeys !== null) {
    contents.SshPublicKeys = deserializeAws_json1_1SshPublicKeys(
      output.SshPublicKeys,
      context
    );
  }
  if (output.Tags !== undefined && output.Tags !== null) {
    contents.Tags = deserializeAws_json1_1Tags(output.Tags, context);
  }
  if (output.UserName !== undefined && output.UserName !== null) {
    contents.UserName = output.UserName;
  }
  return contents;
};

const deserializeAws_json1_1EndpointDetails = (
  output: any,
  context: __SerdeContext
): EndpointDetails => {
  let contents: any = {
    __type: "EndpointDetails",
    AddressAllocationIds: undefined,
    SubnetIds: undefined,
    VpcEndpointId: undefined,
    VpcId: undefined
  };
  if (
    output.AddressAllocationIds !== undefined &&
    output.AddressAllocationIds !== null
  ) {
    contents.AddressAllocationIds = deserializeAws_json1_1AddressAllocationIds(
      output.AddressAllocationIds,
      context
    );
  }
  if (output.SubnetIds !== undefined && output.SubnetIds !== null) {
    contents.SubnetIds = deserializeAws_json1_1SubnetIds(
      output.SubnetIds,
      context
    );
  }
  if (output.VpcEndpointId !== undefined && output.VpcEndpointId !== null) {
    contents.VpcEndpointId = output.VpcEndpointId;
  }
  if (output.VpcId !== undefined && output.VpcId !== null) {
    contents.VpcId = output.VpcId;
  }
  return contents;
};

const deserializeAws_json1_1HomeDirectoryMapEntry = (
  output: any,
  context: __SerdeContext
): HomeDirectoryMapEntry => {
  let contents: any = {
    __type: "HomeDirectoryMapEntry",
    Entry: undefined,
    Target: undefined
  };
  if (output.Entry !== undefined && output.Entry !== null) {
    contents.Entry = output.Entry;
  }
  if (output.Target !== undefined && output.Target !== null) {
    contents.Target = output.Target;
  }
  return contents;
};

const deserializeAws_json1_1HomeDirectoryMappings = (
  output: any,
  context: __SerdeContext
): Array<HomeDirectoryMapEntry> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1HomeDirectoryMapEntry(entry, context)
  );
};

const deserializeAws_json1_1IdentityProviderDetails = (
  output: any,
  context: __SerdeContext
): IdentityProviderDetails => {
  let contents: any = {
    __type: "IdentityProviderDetails",
    InvocationRole: undefined,
    Url: undefined
  };
  if (output.InvocationRole !== undefined && output.InvocationRole !== null) {
    contents.InvocationRole = output.InvocationRole;
  }
  if (output.Url !== undefined && output.Url !== null) {
    contents.Url = output.Url;
  }
  return contents;
};

const deserializeAws_json1_1ImportSshPublicKeyResponse = (
  output: any,
  context: __SerdeContext
): ImportSshPublicKeyResponse => {
  let contents: any = {
    __type: "ImportSshPublicKeyResponse",
    ServerId: undefined,
    SshPublicKeyId: undefined,
    UserName: undefined
  };
  if (output.ServerId !== undefined && output.ServerId !== null) {
    contents.ServerId = output.ServerId;
  }
  if (output.SshPublicKeyId !== undefined && output.SshPublicKeyId !== null) {
    contents.SshPublicKeyId = output.SshPublicKeyId;
  }
  if (output.UserName !== undefined && output.UserName !== null) {
    contents.UserName = output.UserName;
  }
  return contents;
};

const deserializeAws_json1_1InternalServiceError = (
  output: any,
  context: __SerdeContext
): InternalServiceError => {
  let contents: any = {
    __type: "InternalServiceError",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  let contents: any = {
    __type: "InvalidNextTokenException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  let contents: any = {
    __type: "InvalidRequestException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ListServersResponse = (
  output: any,
  context: __SerdeContext
): ListServersResponse => {
  let contents: any = {
    __type: "ListServersResponse",
    NextToken: undefined,
    Servers: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.Servers !== undefined && output.Servers !== null) {
    contents.Servers = deserializeAws_json1_1ListedServers(
      output.Servers,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  let contents: any = {
    __type: "ListTagsForResourceResponse",
    Arn: undefined,
    NextToken: undefined,
    Tags: undefined
  };
  if (output.Arn !== undefined && output.Arn !== null) {
    contents.Arn = output.Arn;
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.Tags !== undefined && output.Tags !== null) {
    contents.Tags = deserializeAws_json1_1Tags(output.Tags, context);
  }
  return contents;
};

const deserializeAws_json1_1ListUsersResponse = (
  output: any,
  context: __SerdeContext
): ListUsersResponse => {
  let contents: any = {
    __type: "ListUsersResponse",
    NextToken: undefined,
    ServerId: undefined,
    Users: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.ServerId !== undefined && output.ServerId !== null) {
    contents.ServerId = output.ServerId;
  }
  if (output.Users !== undefined && output.Users !== null) {
    contents.Users = deserializeAws_json1_1ListedUsers(output.Users, context);
  }
  return contents;
};

const deserializeAws_json1_1ListedServer = (
  output: any,
  context: __SerdeContext
): ListedServer => {
  let contents: any = {
    __type: "ListedServer",
    Arn: undefined,
    EndpointType: undefined,
    IdentityProviderType: undefined,
    LoggingRole: undefined,
    ServerId: undefined,
    State: undefined,
    UserCount: undefined
  };
  if (output.Arn !== undefined && output.Arn !== null) {
    contents.Arn = output.Arn;
  }
  if (output.EndpointType !== undefined && output.EndpointType !== null) {
    contents.EndpointType = output.EndpointType;
  }
  if (
    output.IdentityProviderType !== undefined &&
    output.IdentityProviderType !== null
  ) {
    contents.IdentityProviderType = output.IdentityProviderType;
  }
  if (output.LoggingRole !== undefined && output.LoggingRole !== null) {
    contents.LoggingRole = output.LoggingRole;
  }
  if (output.ServerId !== undefined && output.ServerId !== null) {
    contents.ServerId = output.ServerId;
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (output.UserCount !== undefined && output.UserCount !== null) {
    contents.UserCount = output.UserCount;
  }
  return contents;
};

const deserializeAws_json1_1ListedServers = (
  output: any,
  context: __SerdeContext
): Array<ListedServer> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ListedServer(entry, context)
  );
};

const deserializeAws_json1_1ListedUser = (
  output: any,
  context: __SerdeContext
): ListedUser => {
  let contents: any = {
    __type: "ListedUser",
    Arn: undefined,
    HomeDirectory: undefined,
    HomeDirectoryType: undefined,
    Role: undefined,
    SshPublicKeyCount: undefined,
    UserName: undefined
  };
  if (output.Arn !== undefined && output.Arn !== null) {
    contents.Arn = output.Arn;
  }
  if (output.HomeDirectory !== undefined && output.HomeDirectory !== null) {
    contents.HomeDirectory = output.HomeDirectory;
  }
  if (
    output.HomeDirectoryType !== undefined &&
    output.HomeDirectoryType !== null
  ) {
    contents.HomeDirectoryType = output.HomeDirectoryType;
  }
  if (output.Role !== undefined && output.Role !== null) {
    contents.Role = output.Role;
  }
  if (
    output.SshPublicKeyCount !== undefined &&
    output.SshPublicKeyCount !== null
  ) {
    contents.SshPublicKeyCount = output.SshPublicKeyCount;
  }
  if (output.UserName !== undefined && output.UserName !== null) {
    contents.UserName = output.UserName;
  }
  return contents;
};

const deserializeAws_json1_1ListedUsers = (
  output: any,
  context: __SerdeContext
): Array<ListedUser> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ListedUser(entry, context)
  );
};

const deserializeAws_json1_1ResourceExistsException = (
  output: any,
  context: __SerdeContext
): ResourceExistsException => {
  let contents: any = {
    __type: "ResourceExistsException",
    Message: undefined,
    Resource: undefined,
    ResourceType: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  if (output.Resource !== undefined && output.Resource !== null) {
    contents.Resource = output.Resource;
  }
  if (output.ResourceType !== undefined && output.ResourceType !== null) {
    contents.ResourceType = output.ResourceType;
  }
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    Message: undefined,
    Resource: undefined,
    ResourceType: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  if (output.Resource !== undefined && output.Resource !== null) {
    contents.Resource = output.Resource;
  }
  if (output.ResourceType !== undefined && output.ResourceType !== null) {
    contents.ResourceType = output.ResourceType;
  }
  return contents;
};

const deserializeAws_json1_1SshPublicKey = (
  output: any,
  context: __SerdeContext
): SshPublicKey => {
  let contents: any = {
    __type: "SshPublicKey",
    DateImported: undefined,
    SshPublicKeyBody: undefined,
    SshPublicKeyId: undefined
  };
  if (output.DateImported !== undefined && output.DateImported !== null) {
    contents.DateImported = new Date(Math.round(output.DateImported * 1000));
  }
  if (
    output.SshPublicKeyBody !== undefined &&
    output.SshPublicKeyBody !== null
  ) {
    contents.SshPublicKeyBody = output.SshPublicKeyBody;
  }
  if (output.SshPublicKeyId !== undefined && output.SshPublicKeyId !== null) {
    contents.SshPublicKeyId = output.SshPublicKeyId;
  }
  return contents;
};

const deserializeAws_json1_1SshPublicKeys = (
  output: any,
  context: __SerdeContext
): Array<SshPublicKey> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SshPublicKey(entry, context)
  );
};

const deserializeAws_json1_1SubnetIds = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined
  };
  if (output.Key !== undefined && output.Key !== null) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1Tags = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1TestIdentityProviderResponse = (
  output: any,
  context: __SerdeContext
): TestIdentityProviderResponse => {
  let contents: any = {
    __type: "TestIdentityProviderResponse",
    Message: undefined,
    Response: undefined,
    StatusCode: undefined,
    Url: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  if (output.Response !== undefined && output.Response !== null) {
    contents.Response = output.Response;
  }
  if (output.StatusCode !== undefined && output.StatusCode !== null) {
    contents.StatusCode = output.StatusCode;
  }
  if (output.Url !== undefined && output.Url !== null) {
    contents.Url = output.Url;
  }
  return contents;
};

const deserializeAws_json1_1ThrottlingException = (
  output: any,
  context: __SerdeContext
): ThrottlingException => {
  let contents: any = {
    __type: "ThrottlingException",
    RetryAfterSeconds: undefined
  };
  if (
    output.RetryAfterSeconds !== undefined &&
    output.RetryAfterSeconds !== null
  ) {
    contents.RetryAfterSeconds = output.RetryAfterSeconds;
  }
  return contents;
};

const deserializeAws_json1_1UpdateServerResponse = (
  output: any,
  context: __SerdeContext
): UpdateServerResponse => {
  let contents: any = {
    __type: "UpdateServerResponse",
    ServerId: undefined
  };
  if (output.ServerId !== undefined && output.ServerId !== null) {
    contents.ServerId = output.ServerId;
  }
  return contents;
};

const deserializeAws_json1_1UpdateUserResponse = (
  output: any,
  context: __SerdeContext
): UpdateUserResponse => {
  let contents: any = {
    __type: "UpdateUserResponse",
    ServerId: undefined,
    UserName: undefined
  };
  if (output.ServerId !== undefined && output.ServerId !== null) {
    contents.ServerId = output.ServerId;
  }
  if (output.UserName !== undefined && output.UserName !== null) {
    contents.UserName = output.UserName;
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

const buildHttpRpcRequest = (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): __HttpRequest => {
  const contents: any = {
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: path,
    headers: headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
