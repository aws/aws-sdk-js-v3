import { CreateAccessCommandInput, CreateAccessCommandOutput } from "../commands/CreateAccessCommand";
import { CreateServerCommandInput, CreateServerCommandOutput } from "../commands/CreateServerCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "../commands/CreateUserCommand";
import { CreateWorkflowCommandInput, CreateWorkflowCommandOutput } from "../commands/CreateWorkflowCommand";
import { DeleteAccessCommandInput, DeleteAccessCommandOutput } from "../commands/DeleteAccessCommand";
import { DeleteServerCommandInput, DeleteServerCommandOutput } from "../commands/DeleteServerCommand";
import { DeleteSshPublicKeyCommandInput, DeleteSshPublicKeyCommandOutput } from "../commands/DeleteSshPublicKeyCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "../commands/DeleteUserCommand";
import { DeleteWorkflowCommandInput, DeleteWorkflowCommandOutput } from "../commands/DeleteWorkflowCommand";
import { DescribeAccessCommandInput, DescribeAccessCommandOutput } from "../commands/DescribeAccessCommand";
import { DescribeExecutionCommandInput, DescribeExecutionCommandOutput } from "../commands/DescribeExecutionCommand";
import {
  DescribeSecurityPolicyCommandInput,
  DescribeSecurityPolicyCommandOutput,
} from "../commands/DescribeSecurityPolicyCommand";
import { DescribeServerCommandInput, DescribeServerCommandOutput } from "../commands/DescribeServerCommand";
import { DescribeUserCommandInput, DescribeUserCommandOutput } from "../commands/DescribeUserCommand";
import { DescribeWorkflowCommandInput, DescribeWorkflowCommandOutput } from "../commands/DescribeWorkflowCommand";
import { ImportSshPublicKeyCommandInput, ImportSshPublicKeyCommandOutput } from "../commands/ImportSshPublicKeyCommand";
import { ListAccessesCommandInput, ListAccessesCommandOutput } from "../commands/ListAccessesCommand";
import { ListExecutionsCommandInput, ListExecutionsCommandOutput } from "../commands/ListExecutionsCommand";
import {
  ListSecurityPoliciesCommandInput,
  ListSecurityPoliciesCommandOutput,
} from "../commands/ListSecurityPoliciesCommand";
import { ListServersCommandInput, ListServersCommandOutput } from "../commands/ListServersCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "../commands/ListUsersCommand";
import { ListWorkflowsCommandInput, ListWorkflowsCommandOutput } from "../commands/ListWorkflowsCommand";
import {
  SendWorkflowStepStateCommandInput,
  SendWorkflowStepStateCommandOutput,
} from "../commands/SendWorkflowStepStateCommand";
import { StartServerCommandInput, StartServerCommandOutput } from "../commands/StartServerCommand";
import { StopServerCommandInput, StopServerCommandOutput } from "../commands/StopServerCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import {
  TestIdentityProviderCommandInput,
  TestIdentityProviderCommandOutput,
} from "../commands/TestIdentityProviderCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAccessCommandInput, UpdateAccessCommandOutput } from "../commands/UpdateAccessCommand";
import { UpdateServerCommandInput, UpdateServerCommandOutput } from "../commands/UpdateServerCommand";
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "../commands/UpdateUserCommand";
import {
  AccessDeniedException,
  ConflictException,
  CopyStepDetails,
  CreateAccessRequest,
  CreateAccessResponse,
  CreateServerRequest,
  CreateServerResponse,
  CreateUserRequest,
  CreateUserResponse,
  CreateWorkflowRequest,
  CreateWorkflowResponse,
  CustomStepDetails,
  DeleteAccessRequest,
  DeleteServerRequest,
  DeleteSshPublicKeyRequest,
  DeleteStepDetails,
  DeleteUserRequest,
  DeleteWorkflowRequest,
  DescribeAccessRequest,
  DescribeAccessResponse,
  DescribeExecutionRequest,
  DescribeExecutionResponse,
  DescribeSecurityPolicyRequest,
  DescribeSecurityPolicyResponse,
  DescribeServerRequest,
  DescribeServerResponse,
  DescribeUserRequest,
  DescribeUserResponse,
  DescribeWorkflowRequest,
  DescribeWorkflowResponse,
  DescribedAccess,
  DescribedExecution,
  DescribedSecurityPolicy,
  DescribedServer,
  DescribedUser,
  DescribedWorkflow,
  EfsFileLocation,
  EndpointDetails,
  ExecutionError,
  ExecutionResults,
  ExecutionStepResult,
  FileLocation,
  HomeDirectoryMapEntry,
  IdentityProviderDetails,
  ImportSshPublicKeyRequest,
  ImportSshPublicKeyResponse,
  InputFileLocation,
  InternalServiceError,
  InvalidNextTokenException,
  InvalidRequestException,
  ListAccessesRequest,
  ListAccessesResponse,
  ListExecutionsRequest,
  ListExecutionsResponse,
  ListSecurityPoliciesRequest,
  ListSecurityPoliciesResponse,
  ListServersRequest,
  ListServersResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListUsersRequest,
  ListUsersResponse,
  ListWorkflowsRequest,
  ListWorkflowsResponse,
  ListedAccess,
  ListedExecution,
  ListedServer,
  ListedUser,
  ListedWorkflow,
  LoggingConfiguration,
  PosixProfile,
  Protocol,
  ProtocolDetails,
  ResourceExistsException,
  ResourceNotFoundException,
  S3FileLocation,
  S3InputFileLocation,
  S3Tag,
  SendWorkflowStepStateRequest,
  SendWorkflowStepStateResponse,
  ServiceMetadata,
  ServiceUnavailableException,
  SshPublicKey,
  StartServerRequest,
  StopServerRequest,
  Tag,
  TagResourceRequest,
  TagStepDetails,
  TestIdentityProviderRequest,
  TestIdentityProviderResponse,
  ThrottlingException,
  UntagResourceRequest,
  UpdateAccessRequest,
  UpdateAccessResponse,
  UpdateServerRequest,
  UpdateServerResponse,
  UpdateUserRequest,
  UpdateUserResponse,
  UserDetails,
  WorkflowDetail,
  WorkflowDetails,
  WorkflowStep,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectString as __expectString,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_json1_1CreateAccessCommand = async (
  input: CreateAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.CreateAccess",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateAccessRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateServerCommand = async (
  input: CreateServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.CreateServer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateServerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateUserCommand = async (
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.CreateUser",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateWorkflowCommand = async (
  input: CreateWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.CreateWorkflow",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateWorkflowRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteAccessCommand = async (
  input: DeleteAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.DeleteAccess",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteAccessRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteServerCommand = async (
  input: DeleteServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.DeleteServer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteServerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSshPublicKeyCommand = async (
  input: DeleteSshPublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.DeleteSshPublicKey",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteSshPublicKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteUserCommand = async (
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.DeleteUser",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteWorkflowCommand = async (
  input: DeleteWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.DeleteWorkflow",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteWorkflowRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAccessCommand = async (
  input: DescribeAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.DescribeAccess",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAccessRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeExecutionCommand = async (
  input: DescribeExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.DescribeExecution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeExecutionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSecurityPolicyCommand = async (
  input: DescribeSecurityPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.DescribeSecurityPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeSecurityPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeServerCommand = async (
  input: DescribeServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.DescribeServer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeServerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeUserCommand = async (
  input: DescribeUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.DescribeUser",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeWorkflowCommand = async (
  input: DescribeWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.DescribeWorkflow",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeWorkflowRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ImportSshPublicKeyCommand = async (
  input: ImportSshPublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.ImportSshPublicKey",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ImportSshPublicKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAccessesCommand = async (
  input: ListAccessesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.ListAccesses",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAccessesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListExecutionsCommand = async (
  input: ListExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.ListExecutions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListExecutionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSecurityPoliciesCommand = async (
  input: ListSecurityPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.ListSecurityPolicies",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListSecurityPoliciesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListServersCommand = async (
  input: ListServersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.ListServers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListServersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListUsersCommand = async (
  input: ListUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.ListUsers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListUsersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListWorkflowsCommand = async (
  input: ListWorkflowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.ListWorkflows",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListWorkflowsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SendWorkflowStepStateCommand = async (
  input: SendWorkflowStepStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.SendWorkflowStepState",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SendWorkflowStepStateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartServerCommand = async (
  input: StartServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.StartServer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartServerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopServerCommand = async (
  input: StopServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.StopServer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopServerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TestIdentityProviderCommand = async (
  input: TestIdentityProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.TestIdentityProvider",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TestIdentityProviderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateAccessCommand = async (
  input: UpdateAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.UpdateAccess",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateAccessRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateServerCommand = async (
  input: UpdateServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.UpdateServer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateServerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateUserCommand = async (
  input: UpdateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.UpdateUser",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CreateAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateAccessResponse(data, context);
  const response: CreateAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.transfer#ResourceExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateServerResponse(data, context);
  const response: CreateServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.transfer#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.transfer#ResourceExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
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

export const deserializeAws_json1_1CreateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateUserResponse(data, context);
  const response: CreateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.transfer#ResourceExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkflowCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateWorkflowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateWorkflowResponse(data, context);
  const response: CreateWorkflowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateWorkflowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkflowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.transfer#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.transfer#ResourceExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
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

export const deserializeAws_json1_1DeleteAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteAccessCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteServerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteServerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.transfer#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteSshPublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSshPublicKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteSshPublicKeyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteSshPublicKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteSshPublicKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSshPublicKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
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

export const deserializeAws_json1_1DeleteUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteUserCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkflowCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteWorkflowCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteWorkflowCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteWorkflowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkflowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.transfer#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAccessResponse(data, context);
  const response: DescribeAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeExecutionResponse(data, context);
  const response: DescribeExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeSecurityPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSecurityPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeSecurityPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSecurityPolicyResponse(data, context);
  const response: DescribeSecurityPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeSecurityPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSecurityPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeServerResponse(data, context);
  const response: DescribeServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeUserResponse(data, context);
  const response: DescribeUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkflowCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeWorkflowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeWorkflowResponse(data, context);
  const response: DescribeWorkflowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeWorkflowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkflowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ImportSshPublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportSshPublicKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ImportSshPublicKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ImportSshPublicKeyResponse(data, context);
  const response: ImportSshPublicKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ImportSshPublicKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportSshPublicKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.transfer#ResourceExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
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

export const deserializeAws_json1_1ListAccessesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAccessesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAccessesResponse(data, context);
  const response: ListAccessesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAccessesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.transfer#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListExecutionsResponse(data, context);
  const response: ListExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.transfer#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListSecurityPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListSecurityPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSecurityPoliciesResponse(data, context);
  const response: ListSecurityPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSecurityPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.transfer#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListServersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListServersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListServersResponse(data, context);
  const response: ListServersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListServersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.transfer#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.transfer#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListUsersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListUsersResponse(data, context);
  const response: ListUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListUsersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.transfer#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListWorkflowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListWorkflowsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListWorkflowsResponse(data, context);
  const response: ListWorkflowsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListWorkflowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.transfer#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1SendWorkflowStepStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendWorkflowStepStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SendWorkflowStepStateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SendWorkflowStepStateResponse(data, context);
  const response: SendWorkflowStepStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SendWorkflowStepStateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendWorkflowStepStateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.transfer#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
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

export const deserializeAws_json1_1StartServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartServerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StartServerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartServerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
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

export const deserializeAws_json1_1StopServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopServerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopServerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopServerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
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

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1TestIdentityProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestIdentityProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TestIdentityProviderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TestIdentityProviderResponse(data, context);
  const response: TestIdentityProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TestIdentityProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestIdentityProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateAccessResponse(data, context);
  const response: UpdateAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.transfer#ResourceExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateServerResponse(data, context);
  const response: UpdateServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.transfer#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.transfer#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.transfer#ResourceExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
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

export const deserializeAws_json1_1UpdateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateUserResponse(data, context);
  const response: UpdateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
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

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(body, context);
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConflictException(body, context);
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InternalServiceErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServiceError(body, context);
  const contents: InternalServiceError = {
    name: "InternalServiceError",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidNextTokenException(body, context);
  const contents: InvalidNextTokenException = {
    name: "InvalidNextTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRequestException(body, context);
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceExistsException(body, context);
  const contents: ResourceExistsException = {
    name: "ResourceExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceUnavailableException(body, context);
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
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

const serializeAws_json1_1AddressAllocationIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1CopyStepDetails = (input: CopyStepDetails, context: __SerdeContext): any => {
  return {
    ...(input.DestinationFileLocation !== undefined &&
      input.DestinationFileLocation !== null && {
        DestinationFileLocation: serializeAws_json1_1InputFileLocation(input.DestinationFileLocation, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.OverwriteExisting !== undefined &&
      input.OverwriteExisting !== null && { OverwriteExisting: input.OverwriteExisting }),
  };
};

const serializeAws_json1_1CreateAccessRequest = (input: CreateAccessRequest, context: __SerdeContext): any => {
  return {
    ...(input.ExternalId !== undefined && input.ExternalId !== null && { ExternalId: input.ExternalId }),
    ...(input.HomeDirectory !== undefined && input.HomeDirectory !== null && { HomeDirectory: input.HomeDirectory }),
    ...(input.HomeDirectoryMappings !== undefined &&
      input.HomeDirectoryMappings !== null && {
        HomeDirectoryMappings: serializeAws_json1_1HomeDirectoryMappings(input.HomeDirectoryMappings, context),
      }),
    ...(input.HomeDirectoryType !== undefined &&
      input.HomeDirectoryType !== null && { HomeDirectoryType: input.HomeDirectoryType }),
    ...(input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy }),
    ...(input.PosixProfile !== undefined &&
      input.PosixProfile !== null && { PosixProfile: serializeAws_json1_1PosixProfile(input.PosixProfile, context) }),
    ...(input.Role !== undefined && input.Role !== null && { Role: input.Role }),
    ...(input.ServerId !== undefined && input.ServerId !== null && { ServerId: input.ServerId }),
  };
};

const serializeAws_json1_1CreateServerRequest = (input: CreateServerRequest, context: __SerdeContext): any => {
  return {
    ...(input.Certificate !== undefined && input.Certificate !== null && { Certificate: input.Certificate }),
    ...(input.Domain !== undefined && input.Domain !== null && { Domain: input.Domain }),
    ...(input.EndpointDetails !== undefined &&
      input.EndpointDetails !== null && {
        EndpointDetails: serializeAws_json1_1EndpointDetails(input.EndpointDetails, context),
      }),
    ...(input.EndpointType !== undefined && input.EndpointType !== null && { EndpointType: input.EndpointType }),
    ...(input.HostKey !== undefined && input.HostKey !== null && { HostKey: input.HostKey }),
    ...(input.IdentityProviderDetails !== undefined &&
      input.IdentityProviderDetails !== null && {
        IdentityProviderDetails: serializeAws_json1_1IdentityProviderDetails(input.IdentityProviderDetails, context),
      }),
    ...(input.IdentityProviderType !== undefined &&
      input.IdentityProviderType !== null && { IdentityProviderType: input.IdentityProviderType }),
    ...(input.LoggingRole !== undefined && input.LoggingRole !== null && { LoggingRole: input.LoggingRole }),
    ...(input.Protocols !== undefined &&
      input.Protocols !== null && { Protocols: serializeAws_json1_1Protocols(input.Protocols, context) }),
    ...(input.SecurityPolicyName !== undefined &&
      input.SecurityPolicyName !== null && { SecurityPolicyName: input.SecurityPolicyName }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.WorkflowDetails !== undefined &&
      input.WorkflowDetails !== null && {
        WorkflowDetails: serializeAws_json1_1WorkflowDetails(input.WorkflowDetails, context),
      }),
  };
};

const serializeAws_json1_1CreateUserRequest = (input: CreateUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.HomeDirectory !== undefined && input.HomeDirectory !== null && { HomeDirectory: input.HomeDirectory }),
    ...(input.HomeDirectoryMappings !== undefined &&
      input.HomeDirectoryMappings !== null && {
        HomeDirectoryMappings: serializeAws_json1_1HomeDirectoryMappings(input.HomeDirectoryMappings, context),
      }),
    ...(input.HomeDirectoryType !== undefined &&
      input.HomeDirectoryType !== null && { HomeDirectoryType: input.HomeDirectoryType }),
    ...(input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy }),
    ...(input.PosixProfile !== undefined &&
      input.PosixProfile !== null && { PosixProfile: serializeAws_json1_1PosixProfile(input.PosixProfile, context) }),
    ...(input.Role !== undefined && input.Role !== null && { Role: input.Role }),
    ...(input.ServerId !== undefined && input.ServerId !== null && { ServerId: input.ServerId }),
    ...(input.SshPublicKeyBody !== undefined &&
      input.SshPublicKeyBody !== null && { SshPublicKeyBody: input.SshPublicKeyBody }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
  };
};

const serializeAws_json1_1CreateWorkflowRequest = (input: CreateWorkflowRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.OnExceptionSteps !== undefined &&
      input.OnExceptionSteps !== null && {
        OnExceptionSteps: serializeAws_json1_1WorkflowSteps(input.OnExceptionSteps, context),
      }),
    ...(input.Steps !== undefined &&
      input.Steps !== null && { Steps: serializeAws_json1_1WorkflowSteps(input.Steps, context) }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1CustomStepDetails = (input: CustomStepDetails, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Target !== undefined && input.Target !== null && { Target: input.Target }),
    ...(input.TimeoutSeconds !== undefined &&
      input.TimeoutSeconds !== null && { TimeoutSeconds: input.TimeoutSeconds }),
  };
};

const serializeAws_json1_1DeleteAccessRequest = (input: DeleteAccessRequest, context: __SerdeContext): any => {
  return {
    ...(input.ExternalId !== undefined && input.ExternalId !== null && { ExternalId: input.ExternalId }),
    ...(input.ServerId !== undefined && input.ServerId !== null && { ServerId: input.ServerId }),
  };
};

const serializeAws_json1_1DeleteServerRequest = (input: DeleteServerRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServerId !== undefined && input.ServerId !== null && { ServerId: input.ServerId }),
  };
};

const serializeAws_json1_1DeleteSshPublicKeyRequest = (
  input: DeleteSshPublicKeyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ServerId !== undefined && input.ServerId !== null && { ServerId: input.ServerId }),
    ...(input.SshPublicKeyId !== undefined &&
      input.SshPublicKeyId !== null && { SshPublicKeyId: input.SshPublicKeyId }),
    ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
  };
};

const serializeAws_json1_1DeleteStepDetails = (input: DeleteStepDetails, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteUserRequest = (input: DeleteUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServerId !== undefined && input.ServerId !== null && { ServerId: input.ServerId }),
    ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
  };
};

const serializeAws_json1_1DeleteWorkflowRequest = (input: DeleteWorkflowRequest, context: __SerdeContext): any => {
  return {
    ...(input.WorkflowId !== undefined && input.WorkflowId !== null && { WorkflowId: input.WorkflowId }),
  };
};

const serializeAws_json1_1DescribeAccessRequest = (input: DescribeAccessRequest, context: __SerdeContext): any => {
  return {
    ...(input.ExternalId !== undefined && input.ExternalId !== null && { ExternalId: input.ExternalId }),
    ...(input.ServerId !== undefined && input.ServerId !== null && { ServerId: input.ServerId }),
  };
};

const serializeAws_json1_1DescribeExecutionRequest = (
  input: DescribeExecutionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ExecutionId !== undefined && input.ExecutionId !== null && { ExecutionId: input.ExecutionId }),
    ...(input.WorkflowId !== undefined && input.WorkflowId !== null && { WorkflowId: input.WorkflowId }),
  };
};

const serializeAws_json1_1DescribeSecurityPolicyRequest = (
  input: DescribeSecurityPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SecurityPolicyName !== undefined &&
      input.SecurityPolicyName !== null && { SecurityPolicyName: input.SecurityPolicyName }),
  };
};

const serializeAws_json1_1DescribeServerRequest = (input: DescribeServerRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServerId !== undefined && input.ServerId !== null && { ServerId: input.ServerId }),
  };
};

const serializeAws_json1_1DescribeUserRequest = (input: DescribeUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServerId !== undefined && input.ServerId !== null && { ServerId: input.ServerId }),
    ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
  };
};

const serializeAws_json1_1DescribeWorkflowRequest = (input: DescribeWorkflowRequest, context: __SerdeContext): any => {
  return {
    ...(input.WorkflowId !== undefined && input.WorkflowId !== null && { WorkflowId: input.WorkflowId }),
  };
};

const serializeAws_json1_1EfsFileLocation = (input: EfsFileLocation, context: __SerdeContext): any => {
  return {
    ...(input.FileSystemId !== undefined && input.FileSystemId !== null && { FileSystemId: input.FileSystemId }),
    ...(input.Path !== undefined && input.Path !== null && { Path: input.Path }),
  };
};

const serializeAws_json1_1EndpointDetails = (input: EndpointDetails, context: __SerdeContext): any => {
  return {
    ...(input.AddressAllocationIds !== undefined &&
      input.AddressAllocationIds !== null && {
        AddressAllocationIds: serializeAws_json1_1AddressAllocationIds(input.AddressAllocationIds, context),
      }),
    ...(input.SecurityGroupIds !== undefined &&
      input.SecurityGroupIds !== null && {
        SecurityGroupIds: serializeAws_json1_1SecurityGroupIds(input.SecurityGroupIds, context),
      }),
    ...(input.SubnetIds !== undefined &&
      input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1SubnetIds(input.SubnetIds, context) }),
    ...(input.VpcEndpointId !== undefined && input.VpcEndpointId !== null && { VpcEndpointId: input.VpcEndpointId }),
    ...(input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }),
  };
};

const serializeAws_json1_1HomeDirectoryMapEntry = (input: HomeDirectoryMapEntry, context: __SerdeContext): any => {
  return {
    ...(input.Entry !== undefined && input.Entry !== null && { Entry: input.Entry }),
    ...(input.Target !== undefined && input.Target !== null && { Target: input.Target }),
  };
};

const serializeAws_json1_1HomeDirectoryMappings = (input: HomeDirectoryMapEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1HomeDirectoryMapEntry(entry, context);
    });
};

const serializeAws_json1_1IdentityProviderDetails = (input: IdentityProviderDetails, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.InvocationRole !== undefined &&
      input.InvocationRole !== null && { InvocationRole: input.InvocationRole }),
    ...(input.Url !== undefined && input.Url !== null && { Url: input.Url }),
  };
};

const serializeAws_json1_1ImportSshPublicKeyRequest = (
  input: ImportSshPublicKeyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ServerId !== undefined && input.ServerId !== null && { ServerId: input.ServerId }),
    ...(input.SshPublicKeyBody !== undefined &&
      input.SshPublicKeyBody !== null && { SshPublicKeyBody: input.SshPublicKeyBody }),
    ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
  };
};

const serializeAws_json1_1InputFileLocation = (input: InputFileLocation, context: __SerdeContext): any => {
  return {
    ...(input.EfsFileLocation !== undefined &&
      input.EfsFileLocation !== null && {
        EfsFileLocation: serializeAws_json1_1EfsFileLocation(input.EfsFileLocation, context),
      }),
    ...(input.S3FileLocation !== undefined &&
      input.S3FileLocation !== null && {
        S3FileLocation: serializeAws_json1_1S3InputFileLocation(input.S3FileLocation, context),
      }),
  };
};

const serializeAws_json1_1ListAccessesRequest = (input: ListAccessesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ServerId !== undefined && input.ServerId !== null && { ServerId: input.ServerId }),
  };
};

const serializeAws_json1_1ListExecutionsRequest = (input: ListExecutionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.WorkflowId !== undefined && input.WorkflowId !== null && { WorkflowId: input.WorkflowId }),
  };
};

const serializeAws_json1_1ListSecurityPoliciesRequest = (
  input: ListSecurityPoliciesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListServersRequest = (input: ListServersRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListUsersRequest = (input: ListUsersRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ServerId !== undefined && input.ServerId !== null && { ServerId: input.ServerId }),
  };
};

const serializeAws_json1_1ListWorkflowsRequest = (input: ListWorkflowsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1OnUploadWorkflowDetails = (input: WorkflowDetail[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1WorkflowDetail(entry, context);
    });
};

const serializeAws_json1_1PosixProfile = (input: PosixProfile, context: __SerdeContext): any => {
  return {
    ...(input.Gid !== undefined && input.Gid !== null && { Gid: input.Gid }),
    ...(input.SecondaryGids !== undefined &&
      input.SecondaryGids !== null && {
        SecondaryGids: serializeAws_json1_1SecondaryGids(input.SecondaryGids, context),
      }),
    ...(input.Uid !== undefined && input.Uid !== null && { Uid: input.Uid }),
  };
};

const serializeAws_json1_1ProtocolDetails = (input: ProtocolDetails, context: __SerdeContext): any => {
  return {
    ...(input.PassiveIp !== undefined && input.PassiveIp !== null && { PassiveIp: input.PassiveIp }),
  };
};

const serializeAws_json1_1Protocols = (input: (Protocol | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1S3InputFileLocation = (input: S3InputFileLocation, context: __SerdeContext): any => {
  return {
    ...(input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket }),
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
  };
};

const serializeAws_json1_1S3Tag = (input: S3Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1S3Tags = (input: S3Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1S3Tag(entry, context);
    });
};

const serializeAws_json1_1SecondaryGids = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1SecurityGroupIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1SendWorkflowStepStateRequest = (
  input: SendWorkflowStepStateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ExecutionId !== undefined && input.ExecutionId !== null && { ExecutionId: input.ExecutionId }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
    ...(input.Token !== undefined && input.Token !== null && { Token: input.Token }),
    ...(input.WorkflowId !== undefined && input.WorkflowId !== null && { WorkflowId: input.WorkflowId }),
  };
};

const serializeAws_json1_1StartServerRequest = (input: StartServerRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServerId !== undefined && input.ServerId !== null && { ServerId: input.ServerId }),
  };
};

const serializeAws_json1_1StopServerRequest = (input: StopServerRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServerId !== undefined && input.ServerId !== null && { ServerId: input.ServerId }),
  };
};

const serializeAws_json1_1SubnetIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1Tags = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TagStepDetails = (input: TagStepDetails, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1S3Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1TestIdentityProviderRequest = (
  input: TestIdentityProviderRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ServerId !== undefined && input.ServerId !== null && { ServerId: input.ServerId }),
    ...(input.ServerProtocol !== undefined &&
      input.ServerProtocol !== null && { ServerProtocol: input.ServerProtocol }),
    ...(input.SourceIp !== undefined && input.SourceIp !== null && { SourceIp: input.SourceIp }),
    ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
    ...(input.UserPassword !== undefined && input.UserPassword !== null && { UserPassword: input.UserPassword }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeys(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateAccessRequest = (input: UpdateAccessRequest, context: __SerdeContext): any => {
  return {
    ...(input.ExternalId !== undefined && input.ExternalId !== null && { ExternalId: input.ExternalId }),
    ...(input.HomeDirectory !== undefined && input.HomeDirectory !== null && { HomeDirectory: input.HomeDirectory }),
    ...(input.HomeDirectoryMappings !== undefined &&
      input.HomeDirectoryMappings !== null && {
        HomeDirectoryMappings: serializeAws_json1_1HomeDirectoryMappings(input.HomeDirectoryMappings, context),
      }),
    ...(input.HomeDirectoryType !== undefined &&
      input.HomeDirectoryType !== null && { HomeDirectoryType: input.HomeDirectoryType }),
    ...(input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy }),
    ...(input.PosixProfile !== undefined &&
      input.PosixProfile !== null && { PosixProfile: serializeAws_json1_1PosixProfile(input.PosixProfile, context) }),
    ...(input.Role !== undefined && input.Role !== null && { Role: input.Role }),
    ...(input.ServerId !== undefined && input.ServerId !== null && { ServerId: input.ServerId }),
  };
};

const serializeAws_json1_1UpdateServerRequest = (input: UpdateServerRequest, context: __SerdeContext): any => {
  return {
    ...(input.Certificate !== undefined && input.Certificate !== null && { Certificate: input.Certificate }),
    ...(input.EndpointDetails !== undefined &&
      input.EndpointDetails !== null && {
        EndpointDetails: serializeAws_json1_1EndpointDetails(input.EndpointDetails, context),
      }),
    ...(input.EndpointType !== undefined && input.EndpointType !== null && { EndpointType: input.EndpointType }),
    ...(input.HostKey !== undefined && input.HostKey !== null && { HostKey: input.HostKey }),
    ...(input.IdentityProviderDetails !== undefined &&
      input.IdentityProviderDetails !== null && {
        IdentityProviderDetails: serializeAws_json1_1IdentityProviderDetails(input.IdentityProviderDetails, context),
      }),
    ...(input.LoggingRole !== undefined && input.LoggingRole !== null && { LoggingRole: input.LoggingRole }),
    ...(input.ProtocolDetails !== undefined &&
      input.ProtocolDetails !== null && {
        ProtocolDetails: serializeAws_json1_1ProtocolDetails(input.ProtocolDetails, context),
      }),
    ...(input.Protocols !== undefined &&
      input.Protocols !== null && { Protocols: serializeAws_json1_1Protocols(input.Protocols, context) }),
    ...(input.SecurityPolicyName !== undefined &&
      input.SecurityPolicyName !== null && { SecurityPolicyName: input.SecurityPolicyName }),
    ...(input.ServerId !== undefined && input.ServerId !== null && { ServerId: input.ServerId }),
    ...(input.WorkflowDetails !== undefined &&
      input.WorkflowDetails !== null && {
        WorkflowDetails: serializeAws_json1_1WorkflowDetails(input.WorkflowDetails, context),
      }),
  };
};

const serializeAws_json1_1UpdateUserRequest = (input: UpdateUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.HomeDirectory !== undefined && input.HomeDirectory !== null && { HomeDirectory: input.HomeDirectory }),
    ...(input.HomeDirectoryMappings !== undefined &&
      input.HomeDirectoryMappings !== null && {
        HomeDirectoryMappings: serializeAws_json1_1HomeDirectoryMappings(input.HomeDirectoryMappings, context),
      }),
    ...(input.HomeDirectoryType !== undefined &&
      input.HomeDirectoryType !== null && { HomeDirectoryType: input.HomeDirectoryType }),
    ...(input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy }),
    ...(input.PosixProfile !== undefined &&
      input.PosixProfile !== null && { PosixProfile: serializeAws_json1_1PosixProfile(input.PosixProfile, context) }),
    ...(input.Role !== undefined && input.Role !== null && { Role: input.Role }),
    ...(input.ServerId !== undefined && input.ServerId !== null && { ServerId: input.ServerId }),
    ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
  };
};

const serializeAws_json1_1WorkflowDetail = (input: WorkflowDetail, context: __SerdeContext): any => {
  return {
    ...(input.ExecutionRole !== undefined && input.ExecutionRole !== null && { ExecutionRole: input.ExecutionRole }),
    ...(input.WorkflowId !== undefined && input.WorkflowId !== null && { WorkflowId: input.WorkflowId }),
  };
};

const serializeAws_json1_1WorkflowDetails = (input: WorkflowDetails, context: __SerdeContext): any => {
  return {
    ...(input.OnUpload !== undefined &&
      input.OnUpload !== null && { OnUpload: serializeAws_json1_1OnUploadWorkflowDetails(input.OnUpload, context) }),
  };
};

const serializeAws_json1_1WorkflowStep = (input: WorkflowStep, context: __SerdeContext): any => {
  return {
    ...(input.CopyStepDetails !== undefined &&
      input.CopyStepDetails !== null && {
        CopyStepDetails: serializeAws_json1_1CopyStepDetails(input.CopyStepDetails, context),
      }),
    ...(input.CustomStepDetails !== undefined &&
      input.CustomStepDetails !== null && {
        CustomStepDetails: serializeAws_json1_1CustomStepDetails(input.CustomStepDetails, context),
      }),
    ...(input.DeleteStepDetails !== undefined &&
      input.DeleteStepDetails !== null && {
        DeleteStepDetails: serializeAws_json1_1DeleteStepDetails(input.DeleteStepDetails, context),
      }),
    ...(input.TagStepDetails !== undefined &&
      input.TagStepDetails !== null && {
        TagStepDetails: serializeAws_json1_1TagStepDetails(input.TagStepDetails, context),
      }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_json1_1WorkflowSteps = (input: WorkflowStep[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1WorkflowStep(entry, context);
    });
};

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1AddressAllocationIds = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CopyStepDetails = (output: any, context: __SerdeContext): CopyStepDetails => {
  return {
    DestinationFileLocation:
      output.DestinationFileLocation !== undefined && output.DestinationFileLocation !== null
        ? deserializeAws_json1_1InputFileLocation(output.DestinationFileLocation, context)
        : undefined,
    Name: __expectString(output.Name),
    OverwriteExisting: __expectString(output.OverwriteExisting),
  } as any;
};

const deserializeAws_json1_1CreateAccessResponse = (output: any, context: __SerdeContext): CreateAccessResponse => {
  return {
    ExternalId: __expectString(output.ExternalId),
    ServerId: __expectString(output.ServerId),
  } as any;
};

const deserializeAws_json1_1CreateServerResponse = (output: any, context: __SerdeContext): CreateServerResponse => {
  return {
    ServerId: __expectString(output.ServerId),
  } as any;
};

const deserializeAws_json1_1CreateUserResponse = (output: any, context: __SerdeContext): CreateUserResponse => {
  return {
    ServerId: __expectString(output.ServerId),
    UserName: __expectString(output.UserName),
  } as any;
};

const deserializeAws_json1_1CreateWorkflowResponse = (output: any, context: __SerdeContext): CreateWorkflowResponse => {
  return {
    WorkflowId: __expectString(output.WorkflowId),
  } as any;
};

const deserializeAws_json1_1CustomStepDetails = (output: any, context: __SerdeContext): CustomStepDetails => {
  return {
    Name: __expectString(output.Name),
    Target: __expectString(output.Target),
    TimeoutSeconds: __expectInt32(output.TimeoutSeconds),
  } as any;
};

const deserializeAws_json1_1DeleteStepDetails = (output: any, context: __SerdeContext): DeleteStepDetails => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1DescribeAccessResponse = (output: any, context: __SerdeContext): DescribeAccessResponse => {
  return {
    Access:
      output.Access !== undefined && output.Access !== null
        ? deserializeAws_json1_1DescribedAccess(output.Access, context)
        : undefined,
    ServerId: __expectString(output.ServerId),
  } as any;
};

const deserializeAws_json1_1DescribedAccess = (output: any, context: __SerdeContext): DescribedAccess => {
  return {
    ExternalId: __expectString(output.ExternalId),
    HomeDirectory: __expectString(output.HomeDirectory),
    HomeDirectoryMappings:
      output.HomeDirectoryMappings !== undefined && output.HomeDirectoryMappings !== null
        ? deserializeAws_json1_1HomeDirectoryMappings(output.HomeDirectoryMappings, context)
        : undefined,
    HomeDirectoryType: __expectString(output.HomeDirectoryType),
    Policy: __expectString(output.Policy),
    PosixProfile:
      output.PosixProfile !== undefined && output.PosixProfile !== null
        ? deserializeAws_json1_1PosixProfile(output.PosixProfile, context)
        : undefined,
    Role: __expectString(output.Role),
  } as any;
};

const deserializeAws_json1_1DescribedExecution = (output: any, context: __SerdeContext): DescribedExecution => {
  return {
    ExecutionId: __expectString(output.ExecutionId),
    ExecutionRole: __expectString(output.ExecutionRole),
    InitialFileLocation:
      output.InitialFileLocation !== undefined && output.InitialFileLocation !== null
        ? deserializeAws_json1_1FileLocation(output.InitialFileLocation, context)
        : undefined,
    LoggingConfiguration:
      output.LoggingConfiguration !== undefined && output.LoggingConfiguration !== null
        ? deserializeAws_json1_1LoggingConfiguration(output.LoggingConfiguration, context)
        : undefined,
    PosixProfile:
      output.PosixProfile !== undefined && output.PosixProfile !== null
        ? deserializeAws_json1_1PosixProfile(output.PosixProfile, context)
        : undefined,
    Results:
      output.Results !== undefined && output.Results !== null
        ? deserializeAws_json1_1ExecutionResults(output.Results, context)
        : undefined,
    ServiceMetadata:
      output.ServiceMetadata !== undefined && output.ServiceMetadata !== null
        ? deserializeAws_json1_1ServiceMetadata(output.ServiceMetadata, context)
        : undefined,
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1DescribedSecurityPolicy = (
  output: any,
  context: __SerdeContext
): DescribedSecurityPolicy => {
  return {
    Fips: __expectBoolean(output.Fips),
    SecurityPolicyName: __expectString(output.SecurityPolicyName),
    SshCiphers:
      output.SshCiphers !== undefined && output.SshCiphers !== null
        ? deserializeAws_json1_1SecurityPolicyOptions(output.SshCiphers, context)
        : undefined,
    SshKexs:
      output.SshKexs !== undefined && output.SshKexs !== null
        ? deserializeAws_json1_1SecurityPolicyOptions(output.SshKexs, context)
        : undefined,
    SshMacs:
      output.SshMacs !== undefined && output.SshMacs !== null
        ? deserializeAws_json1_1SecurityPolicyOptions(output.SshMacs, context)
        : undefined,
    TlsCiphers:
      output.TlsCiphers !== undefined && output.TlsCiphers !== null
        ? deserializeAws_json1_1SecurityPolicyOptions(output.TlsCiphers, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribedServer = (output: any, context: __SerdeContext): DescribedServer => {
  return {
    Arn: __expectString(output.Arn),
    Certificate: __expectString(output.Certificate),
    Domain: __expectString(output.Domain),
    EndpointDetails:
      output.EndpointDetails !== undefined && output.EndpointDetails !== null
        ? deserializeAws_json1_1EndpointDetails(output.EndpointDetails, context)
        : undefined,
    EndpointType: __expectString(output.EndpointType),
    HostKeyFingerprint: __expectString(output.HostKeyFingerprint),
    IdentityProviderDetails:
      output.IdentityProviderDetails !== undefined && output.IdentityProviderDetails !== null
        ? deserializeAws_json1_1IdentityProviderDetails(output.IdentityProviderDetails, context)
        : undefined,
    IdentityProviderType: __expectString(output.IdentityProviderType),
    LoggingRole: __expectString(output.LoggingRole),
    ProtocolDetails:
      output.ProtocolDetails !== undefined && output.ProtocolDetails !== null
        ? deserializeAws_json1_1ProtocolDetails(output.ProtocolDetails, context)
        : undefined,
    Protocols:
      output.Protocols !== undefined && output.Protocols !== null
        ? deserializeAws_json1_1Protocols(output.Protocols, context)
        : undefined,
    SecurityPolicyName: __expectString(output.SecurityPolicyName),
    ServerId: __expectString(output.ServerId),
    State: __expectString(output.State),
    Tags:
      output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    UserCount: __expectInt32(output.UserCount),
    WorkflowDetails:
      output.WorkflowDetails !== undefined && output.WorkflowDetails !== null
        ? deserializeAws_json1_1WorkflowDetails(output.WorkflowDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribedUser = (output: any, context: __SerdeContext): DescribedUser => {
  return {
    Arn: __expectString(output.Arn),
    HomeDirectory: __expectString(output.HomeDirectory),
    HomeDirectoryMappings:
      output.HomeDirectoryMappings !== undefined && output.HomeDirectoryMappings !== null
        ? deserializeAws_json1_1HomeDirectoryMappings(output.HomeDirectoryMappings, context)
        : undefined,
    HomeDirectoryType: __expectString(output.HomeDirectoryType),
    Policy: __expectString(output.Policy),
    PosixProfile:
      output.PosixProfile !== undefined && output.PosixProfile !== null
        ? deserializeAws_json1_1PosixProfile(output.PosixProfile, context)
        : undefined,
    Role: __expectString(output.Role),
    SshPublicKeys:
      output.SshPublicKeys !== undefined && output.SshPublicKeys !== null
        ? deserializeAws_json1_1SshPublicKeys(output.SshPublicKeys, context)
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    UserName: __expectString(output.UserName),
  } as any;
};

const deserializeAws_json1_1DescribedWorkflow = (output: any, context: __SerdeContext): DescribedWorkflow => {
  return {
    Arn: __expectString(output.Arn),
    Description: __expectString(output.Description),
    OnExceptionSteps:
      output.OnExceptionSteps !== undefined && output.OnExceptionSteps !== null
        ? deserializeAws_json1_1WorkflowSteps(output.OnExceptionSteps, context)
        : undefined,
    Steps:
      output.Steps !== undefined && output.Steps !== null
        ? deserializeAws_json1_1WorkflowSteps(output.Steps, context)
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    WorkflowId: __expectString(output.WorkflowId),
  } as any;
};

const deserializeAws_json1_1DescribeExecutionResponse = (
  output: any,
  context: __SerdeContext
): DescribeExecutionResponse => {
  return {
    Execution:
      output.Execution !== undefined && output.Execution !== null
        ? deserializeAws_json1_1DescribedExecution(output.Execution, context)
        : undefined,
    WorkflowId: __expectString(output.WorkflowId),
  } as any;
};

const deserializeAws_json1_1DescribeSecurityPolicyResponse = (
  output: any,
  context: __SerdeContext
): DescribeSecurityPolicyResponse => {
  return {
    SecurityPolicy:
      output.SecurityPolicy !== undefined && output.SecurityPolicy !== null
        ? deserializeAws_json1_1DescribedSecurityPolicy(output.SecurityPolicy, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeServerResponse = (output: any, context: __SerdeContext): DescribeServerResponse => {
  return {
    Server:
      output.Server !== undefined && output.Server !== null
        ? deserializeAws_json1_1DescribedServer(output.Server, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeUserResponse = (output: any, context: __SerdeContext): DescribeUserResponse => {
  return {
    ServerId: __expectString(output.ServerId),
    User:
      output.User !== undefined && output.User !== null
        ? deserializeAws_json1_1DescribedUser(output.User, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeWorkflowResponse = (
  output: any,
  context: __SerdeContext
): DescribeWorkflowResponse => {
  return {
    Workflow:
      output.Workflow !== undefined && output.Workflow !== null
        ? deserializeAws_json1_1DescribedWorkflow(output.Workflow, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1EfsFileLocation = (output: any, context: __SerdeContext): EfsFileLocation => {
  return {
    FileSystemId: __expectString(output.FileSystemId),
    Path: __expectString(output.Path),
  } as any;
};

const deserializeAws_json1_1EndpointDetails = (output: any, context: __SerdeContext): EndpointDetails => {
  return {
    AddressAllocationIds:
      output.AddressAllocationIds !== undefined && output.AddressAllocationIds !== null
        ? deserializeAws_json1_1AddressAllocationIds(output.AddressAllocationIds, context)
        : undefined,
    SecurityGroupIds:
      output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
        ? deserializeAws_json1_1SecurityGroupIds(output.SecurityGroupIds, context)
        : undefined,
    SubnetIds:
      output.SubnetIds !== undefined && output.SubnetIds !== null
        ? deserializeAws_json1_1SubnetIds(output.SubnetIds, context)
        : undefined,
    VpcEndpointId: __expectString(output.VpcEndpointId),
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_json1_1ExecutionError = (output: any, context: __SerdeContext): ExecutionError => {
  return {
    Message: __expectString(output.Message),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1ExecutionResults = (output: any, context: __SerdeContext): ExecutionResults => {
  return {
    OnExceptionSteps:
      output.OnExceptionSteps !== undefined && output.OnExceptionSteps !== null
        ? deserializeAws_json1_1ExecutionStepResults(output.OnExceptionSteps, context)
        : undefined,
    Steps:
      output.Steps !== undefined && output.Steps !== null
        ? deserializeAws_json1_1ExecutionStepResults(output.Steps, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ExecutionStepResult = (output: any, context: __SerdeContext): ExecutionStepResult => {
  return {
    Error:
      output.Error !== undefined && output.Error !== null
        ? deserializeAws_json1_1ExecutionError(output.Error, context)
        : undefined,
    Outputs: __expectString(output.Outputs),
    StepType: __expectString(output.StepType),
  } as any;
};

const deserializeAws_json1_1ExecutionStepResults = (output: any, context: __SerdeContext): ExecutionStepResult[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ExecutionStepResult(entry, context);
    });
};

const deserializeAws_json1_1FileLocation = (output: any, context: __SerdeContext): FileLocation => {
  return {
    EfsFileLocation:
      output.EfsFileLocation !== undefined && output.EfsFileLocation !== null
        ? deserializeAws_json1_1EfsFileLocation(output.EfsFileLocation, context)
        : undefined,
    S3FileLocation:
      output.S3FileLocation !== undefined && output.S3FileLocation !== null
        ? deserializeAws_json1_1S3FileLocation(output.S3FileLocation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1HomeDirectoryMapEntry = (output: any, context: __SerdeContext): HomeDirectoryMapEntry => {
  return {
    Entry: __expectString(output.Entry),
    Target: __expectString(output.Target),
  } as any;
};

const deserializeAws_json1_1HomeDirectoryMappings = (output: any, context: __SerdeContext): HomeDirectoryMapEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1HomeDirectoryMapEntry(entry, context);
    });
};

const deserializeAws_json1_1IdentityProviderDetails = (
  output: any,
  context: __SerdeContext
): IdentityProviderDetails => {
  return {
    DirectoryId: __expectString(output.DirectoryId),
    InvocationRole: __expectString(output.InvocationRole),
    Url: __expectString(output.Url),
  } as any;
};

const deserializeAws_json1_1ImportSshPublicKeyResponse = (
  output: any,
  context: __SerdeContext
): ImportSshPublicKeyResponse => {
  return {
    ServerId: __expectString(output.ServerId),
    SshPublicKeyId: __expectString(output.SshPublicKeyId),
    UserName: __expectString(output.UserName),
  } as any;
};

const deserializeAws_json1_1InputFileLocation = (output: any, context: __SerdeContext): InputFileLocation => {
  return {
    EfsFileLocation:
      output.EfsFileLocation !== undefined && output.EfsFileLocation !== null
        ? deserializeAws_json1_1EfsFileLocation(output.EfsFileLocation, context)
        : undefined,
    S3FileLocation:
      output.S3FileLocation !== undefined && output.S3FileLocation !== null
        ? deserializeAws_json1_1S3InputFileLocation(output.S3FileLocation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InternalServiceError = (output: any, context: __SerdeContext): InternalServiceError => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ListAccessesResponse = (output: any, context: __SerdeContext): ListAccessesResponse => {
  return {
    Accesses:
      output.Accesses !== undefined && output.Accesses !== null
        ? deserializeAws_json1_1ListedAccesses(output.Accesses, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
    ServerId: __expectString(output.ServerId),
  } as any;
};

const deserializeAws_json1_1ListedAccess = (output: any, context: __SerdeContext): ListedAccess => {
  return {
    ExternalId: __expectString(output.ExternalId),
    HomeDirectory: __expectString(output.HomeDirectory),
    HomeDirectoryType: __expectString(output.HomeDirectoryType),
    Role: __expectString(output.Role),
  } as any;
};

const deserializeAws_json1_1ListedAccesses = (output: any, context: __SerdeContext): ListedAccess[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ListedAccess(entry, context);
    });
};

const deserializeAws_json1_1ListedExecution = (output: any, context: __SerdeContext): ListedExecution => {
  return {
    ExecutionId: __expectString(output.ExecutionId),
    InitialFileLocation:
      output.InitialFileLocation !== undefined && output.InitialFileLocation !== null
        ? deserializeAws_json1_1FileLocation(output.InitialFileLocation, context)
        : undefined,
    ServiceMetadata:
      output.ServiceMetadata !== undefined && output.ServiceMetadata !== null
        ? deserializeAws_json1_1ServiceMetadata(output.ServiceMetadata, context)
        : undefined,
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1ListedExecutions = (output: any, context: __SerdeContext): ListedExecution[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ListedExecution(entry, context);
    });
};

const deserializeAws_json1_1ListedServer = (output: any, context: __SerdeContext): ListedServer => {
  return {
    Arn: __expectString(output.Arn),
    Domain: __expectString(output.Domain),
    EndpointType: __expectString(output.EndpointType),
    IdentityProviderType: __expectString(output.IdentityProviderType),
    LoggingRole: __expectString(output.LoggingRole),
    ServerId: __expectString(output.ServerId),
    State: __expectString(output.State),
    UserCount: __expectInt32(output.UserCount),
  } as any;
};

const deserializeAws_json1_1ListedServers = (output: any, context: __SerdeContext): ListedServer[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ListedServer(entry, context);
    });
};

const deserializeAws_json1_1ListedUser = (output: any, context: __SerdeContext): ListedUser => {
  return {
    Arn: __expectString(output.Arn),
    HomeDirectory: __expectString(output.HomeDirectory),
    HomeDirectoryType: __expectString(output.HomeDirectoryType),
    Role: __expectString(output.Role),
    SshPublicKeyCount: __expectInt32(output.SshPublicKeyCount),
    UserName: __expectString(output.UserName),
  } as any;
};

const deserializeAws_json1_1ListedUsers = (output: any, context: __SerdeContext): ListedUser[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ListedUser(entry, context);
    });
};

const deserializeAws_json1_1ListedWorkflow = (output: any, context: __SerdeContext): ListedWorkflow => {
  return {
    Arn: __expectString(output.Arn),
    Description: __expectString(output.Description),
    WorkflowId: __expectString(output.WorkflowId),
  } as any;
};

const deserializeAws_json1_1ListedWorkflows = (output: any, context: __SerdeContext): ListedWorkflow[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ListedWorkflow(entry, context);
    });
};

const deserializeAws_json1_1ListExecutionsResponse = (output: any, context: __SerdeContext): ListExecutionsResponse => {
  return {
    Executions:
      output.Executions !== undefined && output.Executions !== null
        ? deserializeAws_json1_1ListedExecutions(output.Executions, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
    WorkflowId: __expectString(output.WorkflowId),
  } as any;
};

const deserializeAws_json1_1ListSecurityPoliciesResponse = (
  output: any,
  context: __SerdeContext
): ListSecurityPoliciesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SecurityPolicyNames:
      output.SecurityPolicyNames !== undefined && output.SecurityPolicyNames !== null
        ? deserializeAws_json1_1SecurityPolicyNames(output.SecurityPolicyNames, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListServersResponse = (output: any, context: __SerdeContext): ListServersResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Servers:
      output.Servers !== undefined && output.Servers !== null
        ? deserializeAws_json1_1ListedServers(output.Servers, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    Arn: __expectString(output.Arn),
    NextToken: __expectString(output.NextToken),
    Tags:
      output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListUsersResponse = (output: any, context: __SerdeContext): ListUsersResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ServerId: __expectString(output.ServerId),
    Users:
      output.Users !== undefined && output.Users !== null
        ? deserializeAws_json1_1ListedUsers(output.Users, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListWorkflowsResponse = (output: any, context: __SerdeContext): ListWorkflowsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Workflows:
      output.Workflows !== undefined && output.Workflows !== null
        ? deserializeAws_json1_1ListedWorkflows(output.Workflows, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1LoggingConfiguration = (output: any, context: __SerdeContext): LoggingConfiguration => {
  return {
    LogGroupName: __expectString(output.LogGroupName),
    LoggingRole: __expectString(output.LoggingRole),
  } as any;
};

const deserializeAws_json1_1OnUploadWorkflowDetails = (output: any, context: __SerdeContext): WorkflowDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1WorkflowDetail(entry, context);
    });
};

const deserializeAws_json1_1PosixProfile = (output: any, context: __SerdeContext): PosixProfile => {
  return {
    Gid: __expectLong(output.Gid),
    SecondaryGids:
      output.SecondaryGids !== undefined && output.SecondaryGids !== null
        ? deserializeAws_json1_1SecondaryGids(output.SecondaryGids, context)
        : undefined,
    Uid: __expectLong(output.Uid),
  } as any;
};

const deserializeAws_json1_1ProtocolDetails = (output: any, context: __SerdeContext): ProtocolDetails => {
  return {
    PassiveIp: __expectString(output.PassiveIp),
  } as any;
};

const deserializeAws_json1_1Protocols = (output: any, context: __SerdeContext): (Protocol | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1ResourceExistsException = (
  output: any,
  context: __SerdeContext
): ResourceExistsException => {
  return {
    Message: __expectString(output.Message),
    Resource: __expectString(output.Resource),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
    Resource: __expectString(output.Resource),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_json1_1S3FileLocation = (output: any, context: __SerdeContext): S3FileLocation => {
  return {
    Bucket: __expectString(output.Bucket),
    Etag: __expectString(output.Etag),
    Key: __expectString(output.Key),
    VersionId: __expectString(output.VersionId),
  } as any;
};

const deserializeAws_json1_1S3InputFileLocation = (output: any, context: __SerdeContext): S3InputFileLocation => {
  return {
    Bucket: __expectString(output.Bucket),
    Key: __expectString(output.Key),
  } as any;
};

const deserializeAws_json1_1S3Tag = (output: any, context: __SerdeContext): S3Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1S3Tags = (output: any, context: __SerdeContext): S3Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1S3Tag(entry, context);
    });
};

const deserializeAws_json1_1SecondaryGids = (output: any, context: __SerdeContext): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectLong(entry) as any;
    });
};

const deserializeAws_json1_1SecurityGroupIds = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1SecurityPolicyNames = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1SecurityPolicyOptions = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1SendWorkflowStepStateResponse = (
  output: any,
  context: __SerdeContext
): SendWorkflowStepStateResponse => {
  return {} as any;
};

const deserializeAws_json1_1ServiceMetadata = (output: any, context: __SerdeContext): ServiceMetadata => {
  return {
    UserDetails:
      output.UserDetails !== undefined && output.UserDetails !== null
        ? deserializeAws_json1_1UserDetails(output.UserDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ServiceUnavailableException = (
  output: any,
  context: __SerdeContext
): ServiceUnavailableException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1SshPublicKey = (output: any, context: __SerdeContext): SshPublicKey => {
  return {
    DateImported:
      output.DateImported !== undefined && output.DateImported !== null
        ? new Date(Math.round(output.DateImported * 1000))
        : undefined,
    SshPublicKeyBody: __expectString(output.SshPublicKeyBody),
    SshPublicKeyId: __expectString(output.SshPublicKeyId),
  } as any;
};

const deserializeAws_json1_1SshPublicKeys = (output: any, context: __SerdeContext): SshPublicKey[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SshPublicKey(entry, context);
    });
};

const deserializeAws_json1_1SubnetIds = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1Tags = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
};

const deserializeAws_json1_1TagStepDetails = (output: any, context: __SerdeContext): TagStepDetails => {
  return {
    Name: __expectString(output.Name),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1S3Tags(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1TestIdentityProviderResponse = (
  output: any,
  context: __SerdeContext
): TestIdentityProviderResponse => {
  return {
    Message: __expectString(output.Message),
    Response: __expectString(output.Response),
    StatusCode: __expectInt32(output.StatusCode),
    Url: __expectString(output.Url),
  } as any;
};

const deserializeAws_json1_1ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    RetryAfterSeconds: __expectString(output.RetryAfterSeconds),
  } as any;
};

const deserializeAws_json1_1UpdateAccessResponse = (output: any, context: __SerdeContext): UpdateAccessResponse => {
  return {
    ExternalId: __expectString(output.ExternalId),
    ServerId: __expectString(output.ServerId),
  } as any;
};

const deserializeAws_json1_1UpdateServerResponse = (output: any, context: __SerdeContext): UpdateServerResponse => {
  return {
    ServerId: __expectString(output.ServerId),
  } as any;
};

const deserializeAws_json1_1UpdateUserResponse = (output: any, context: __SerdeContext): UpdateUserResponse => {
  return {
    ServerId: __expectString(output.ServerId),
    UserName: __expectString(output.UserName),
  } as any;
};

const deserializeAws_json1_1UserDetails = (output: any, context: __SerdeContext): UserDetails => {
  return {
    ServerId: __expectString(output.ServerId),
    SessionId: __expectString(output.SessionId),
    UserName: __expectString(output.UserName),
  } as any;
};

const deserializeAws_json1_1WorkflowDetail = (output: any, context: __SerdeContext): WorkflowDetail => {
  return {
    ExecutionRole: __expectString(output.ExecutionRole),
    WorkflowId: __expectString(output.WorkflowId),
  } as any;
};

const deserializeAws_json1_1WorkflowDetails = (output: any, context: __SerdeContext): WorkflowDetails => {
  return {
    OnUpload:
      output.OnUpload !== undefined && output.OnUpload !== null
        ? deserializeAws_json1_1OnUploadWorkflowDetails(output.OnUpload, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1WorkflowStep = (output: any, context: __SerdeContext): WorkflowStep => {
  return {
    CopyStepDetails:
      output.CopyStepDetails !== undefined && output.CopyStepDetails !== null
        ? deserializeAws_json1_1CopyStepDetails(output.CopyStepDetails, context)
        : undefined,
    CustomStepDetails:
      output.CustomStepDetails !== undefined && output.CustomStepDetails !== null
        ? deserializeAws_json1_1CustomStepDetails(output.CustomStepDetails, context)
        : undefined,
    DeleteStepDetails:
      output.DeleteStepDetails !== undefined && output.DeleteStepDetails !== null
        ? deserializeAws_json1_1DeleteStepDetails(output.DeleteStepDetails, context)
        : undefined,
    TagStepDetails:
      output.TagStepDetails !== undefined && output.TagStepDetails !== null
        ? deserializeAws_json1_1TagStepDetails(output.TagStepDetails, context)
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1WorkflowSteps = (output: any, context: __SerdeContext): WorkflowStep[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1WorkflowStep(entry, context);
    });
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
