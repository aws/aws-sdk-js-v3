// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectString as __expectString,
  expectUnion as __expectUnion,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CreateGroupCommandInput, CreateGroupCommandOutput } from "../commands/CreateGroupCommand";
import {
  CreateGroupMembershipCommandInput,
  CreateGroupMembershipCommandOutput,
} from "../commands/CreateGroupMembershipCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "../commands/CreateUserCommand";
import { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "../commands/DeleteGroupCommand";
import {
  DeleteGroupMembershipCommandInput,
  DeleteGroupMembershipCommandOutput,
} from "../commands/DeleteGroupMembershipCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "../commands/DeleteUserCommand";
import { DescribeGroupCommandInput, DescribeGroupCommandOutput } from "../commands/DescribeGroupCommand";
import {
  DescribeGroupMembershipCommandInput,
  DescribeGroupMembershipCommandOutput,
} from "../commands/DescribeGroupMembershipCommand";
import { DescribeUserCommandInput, DescribeUserCommandOutput } from "../commands/DescribeUserCommand";
import { GetGroupIdCommandInput, GetGroupIdCommandOutput } from "../commands/GetGroupIdCommand";
import {
  GetGroupMembershipIdCommandInput,
  GetGroupMembershipIdCommandOutput,
} from "../commands/GetGroupMembershipIdCommand";
import { GetUserIdCommandInput, GetUserIdCommandOutput } from "../commands/GetUserIdCommand";
import { IsMemberInGroupsCommandInput, IsMemberInGroupsCommandOutput } from "../commands/IsMemberInGroupsCommand";
import {
  ListGroupMembershipsCommandInput,
  ListGroupMembershipsCommandOutput,
} from "../commands/ListGroupMembershipsCommand";
import {
  ListGroupMembershipsForMemberCommandInput,
  ListGroupMembershipsForMemberCommandOutput,
} from "../commands/ListGroupMembershipsForMemberCommand";
import { ListGroupsCommandInput, ListGroupsCommandOutput } from "../commands/ListGroupsCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "../commands/ListUsersCommand";
import { UpdateGroupCommandInput, UpdateGroupCommandOutput } from "../commands/UpdateGroupCommand";
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "../commands/UpdateUserCommand";
import { IdentitystoreServiceException as __BaseException } from "../models/IdentitystoreServiceException";
import {
  AccessDeniedException,
  Address,
  AlternateIdentifier,
  AttributeOperation,
  ConflictException,
  CreateGroupMembershipRequest,
  CreateGroupMembershipResponse,
  CreateGroupRequest,
  CreateGroupResponse,
  CreateUserRequest,
  CreateUserResponse,
  DeleteGroupMembershipRequest,
  DeleteGroupMembershipResponse,
  DeleteGroupRequest,
  DeleteGroupResponse,
  DeleteUserRequest,
  DeleteUserResponse,
  DescribeGroupMembershipRequest,
  DescribeGroupMembershipResponse,
  DescribeGroupRequest,
  DescribeGroupResponse,
  DescribeUserRequest,
  DescribeUserResponse,
  Email,
  ExternalId,
  Filter,
  GetGroupIdRequest,
  GetGroupIdResponse,
  GetGroupMembershipIdRequest,
  GetGroupMembershipIdResponse,
  GetUserIdRequest,
  GetUserIdResponse,
  Group,
  GroupMembership,
  GroupMembershipExistenceResult,
  InternalServerException,
  IsMemberInGroupsRequest,
  IsMemberInGroupsResponse,
  ListGroupMembershipsForMemberRequest,
  ListGroupMembershipsForMemberResponse,
  ListGroupMembershipsRequest,
  ListGroupMembershipsResponse,
  ListGroupsRequest,
  ListGroupsResponse,
  ListUsersRequest,
  ListUsersResponse,
  MemberId,
  Name,
  PhoneNumber,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  UniqueAttribute,
  UpdateGroupRequest,
  UpdateGroupResponse,
  UpdateUserRequest,
  UpdateUserResponse,
  User,
  ValidationException,
} from "../models/models_0";

export const serializeAws_json1_1CreateGroupCommand = async (
  input: CreateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIdentityStore.CreateGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateGroupMembershipCommand = async (
  input: CreateGroupMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIdentityStore.CreateGroupMembership",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateGroupMembershipRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateUserCommand = async (
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIdentityStore.CreateUser",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteGroupCommand = async (
  input: DeleteGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIdentityStore.DeleteGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteGroupMembershipCommand = async (
  input: DeleteGroupMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIdentityStore.DeleteGroupMembership",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteGroupMembershipRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteUserCommand = async (
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIdentityStore.DeleteUser",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeGroupCommand = async (
  input: DescribeGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIdentityStore.DescribeGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeGroupMembershipCommand = async (
  input: DescribeGroupMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIdentityStore.DescribeGroupMembership",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeGroupMembershipRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeUserCommand = async (
  input: DescribeUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIdentityStore.DescribeUser",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetGroupIdCommand = async (
  input: GetGroupIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIdentityStore.GetGroupId",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetGroupIdRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetGroupMembershipIdCommand = async (
  input: GetGroupMembershipIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIdentityStore.GetGroupMembershipId",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetGroupMembershipIdRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetUserIdCommand = async (
  input: GetUserIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIdentityStore.GetUserId",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetUserIdRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1IsMemberInGroupsCommand = async (
  input: IsMemberInGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIdentityStore.IsMemberInGroups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1IsMemberInGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListGroupMembershipsCommand = async (
  input: ListGroupMembershipsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIdentityStore.ListGroupMemberships",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListGroupMembershipsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListGroupMembershipsForMemberCommand = async (
  input: ListGroupMembershipsForMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIdentityStore.ListGroupMembershipsForMember",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListGroupMembershipsForMemberRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListGroupsCommand = async (
  input: ListGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIdentityStore.ListGroups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListUsersCommand = async (
  input: ListUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIdentityStore.ListUsers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListUsersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateGroupCommand = async (
  input: UpdateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIdentityStore.UpdateGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateUserCommand = async (
  input: UpdateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIdentityStore.UpdateUser",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CreateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateGroupResponse(data, context);
  const response: CreateGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.identitystore#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.identitystore#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.identitystore#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.identitystore#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.identitystore#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.identitystore#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.identitystore#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1CreateGroupMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupMembershipCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateGroupMembershipCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateGroupMembershipResponse(data, context);
  const response: CreateGroupMembershipCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateGroupMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupMembershipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.identitystore#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.identitystore#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.identitystore#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.identitystore#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.identitystore#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.identitystore#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.identitystore#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.identitystore#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.identitystore#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.identitystore#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.identitystore#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.identitystore#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.identitystore#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.identitystore#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeleteGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteGroupResponse(data, context);
  const response: DeleteGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.identitystore#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.identitystore#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.identitystore#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.identitystore#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.identitystore#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.identitystore#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeleteGroupMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupMembershipCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteGroupMembershipCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteGroupMembershipResponse(data, context);
  const response: DeleteGroupMembershipCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteGroupMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupMembershipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.identitystore#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.identitystore#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.identitystore#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.identitystore#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.identitystore#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.identitystore#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeleteUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteUserResponse(data, context);
  const response: DeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.identitystore#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.identitystore#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.identitystore#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.identitystore#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.identitystore#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.identitystore#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DescribeGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeGroupResponse(data, context);
  const response: DescribeGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.identitystore#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.identitystore#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.identitystore#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.identitystore#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.identitystore#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DescribeGroupMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGroupMembershipCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeGroupMembershipCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeGroupMembershipResponse(data, context);
  const response: DescribeGroupMembershipCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeGroupMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGroupMembershipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.identitystore#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.identitystore#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.identitystore#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.identitystore#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.identitystore#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.identitystore#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.identitystore#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.identitystore#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.identitystore#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.identitystore#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetGroupIdCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupIdCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetGroupIdCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetGroupIdResponse(data, context);
  const response: GetGroupIdCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetGroupIdCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupIdCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.identitystore#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.identitystore#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.identitystore#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.identitystore#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.identitystore#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetGroupMembershipIdCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupMembershipIdCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetGroupMembershipIdCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetGroupMembershipIdResponse(data, context);
  const response: GetGroupMembershipIdCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetGroupMembershipIdCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupMembershipIdCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.identitystore#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.identitystore#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.identitystore#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.identitystore#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.identitystore#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetUserIdCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserIdCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetUserIdCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetUserIdResponse(data, context);
  const response: GetUserIdCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetUserIdCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserIdCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.identitystore#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.identitystore#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.identitystore#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.identitystore#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.identitystore#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1IsMemberInGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IsMemberInGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1IsMemberInGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1IsMemberInGroupsResponse(data, context);
  const response: IsMemberInGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1IsMemberInGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IsMemberInGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.identitystore#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.identitystore#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.identitystore#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.identitystore#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.identitystore#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListGroupMembershipsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupMembershipsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListGroupMembershipsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListGroupMembershipsResponse(data, context);
  const response: ListGroupMembershipsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListGroupMembershipsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupMembershipsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.identitystore#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.identitystore#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.identitystore#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.identitystore#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.identitystore#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListGroupMembershipsForMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupMembershipsForMemberCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListGroupMembershipsForMemberCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListGroupMembershipsForMemberResponse(data, context);
  const response: ListGroupMembershipsForMemberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListGroupMembershipsForMemberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupMembershipsForMemberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.identitystore#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.identitystore#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.identitystore#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.identitystore#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.identitystore#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListGroupsResponse(data, context);
  const response: ListGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.identitystore#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.identitystore#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.identitystore#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.identitystore#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.identitystore#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.identitystore#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.identitystore#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.identitystore#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.identitystore#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.identitystore#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1UpdateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateGroupResponse(data, context);
  const response: UpdateGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.identitystore#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.identitystore#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.identitystore#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.identitystore#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.identitystore#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.identitystore#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.identitystore#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.identitystore#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.identitystore#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.identitystore#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.identitystore#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.identitystore#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.identitystore#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.identitystore#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerException(body, context);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceQuotaExceededException(body, context);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ThrottlingException(body, context);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1Address = (input: Address, context: __SerdeContext): any => {
  return {
    ...(input.Country != null && { Country: input.Country }),
    ...(input.Formatted != null && { Formatted: input.Formatted }),
    ...(input.Locality != null && { Locality: input.Locality }),
    ...(input.PostalCode != null && { PostalCode: input.PostalCode }),
    ...(input.Primary != null && { Primary: input.Primary }),
    ...(input.Region != null && { Region: input.Region }),
    ...(input.StreetAddress != null && { StreetAddress: input.StreetAddress }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1Addresses = (input: Address[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Address(entry, context);
    });
};

const serializeAws_json1_1AlternateIdentifier = (input: AlternateIdentifier, context: __SerdeContext): any => {
  return AlternateIdentifier.visit(input, {
    ExternalId: (value) => ({ ExternalId: serializeAws_json1_1ExternalId(value, context) }),
    UniqueAttribute: (value) => ({ UniqueAttribute: serializeAws_json1_1UniqueAttribute(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_json1_1AttributeOperation = (input: AttributeOperation, context: __SerdeContext): any => {
  return {
    ...(input.AttributePath != null && { AttributePath: input.AttributePath }),
    ...(input.AttributeValue != null && {
      AttributeValue: serializeAws_json1_1AttributeValue(input.AttributeValue, context),
    }),
  };
};

const serializeAws_json1_1AttributeOperations = (input: AttributeOperation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1AttributeOperation(entry, context);
    });
};

const serializeAws_json1_1AttributeValue = (input: __DocumentType, context: __SerdeContext): any => {
  return input;
};

const serializeAws_json1_1CreateGroupMembershipRequest = (
  input: CreateGroupMembershipRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.IdentityStoreId != null && { IdentityStoreId: input.IdentityStoreId }),
    ...(input.MemberId != null && { MemberId: serializeAws_json1_1MemberId(input.MemberId, context) }),
  };
};

const serializeAws_json1_1CreateGroupRequest = (input: CreateGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    ...(input.IdentityStoreId != null && { IdentityStoreId: input.IdentityStoreId }),
  };
};

const serializeAws_json1_1CreateUserRequest = (input: CreateUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.Addresses != null && { Addresses: serializeAws_json1_1Addresses(input.Addresses, context) }),
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    ...(input.Emails != null && { Emails: serializeAws_json1_1Emails(input.Emails, context) }),
    ...(input.IdentityStoreId != null && { IdentityStoreId: input.IdentityStoreId }),
    ...(input.Locale != null && { Locale: input.Locale }),
    ...(input.Name != null && { Name: serializeAws_json1_1Name(input.Name, context) }),
    ...(input.NickName != null && { NickName: input.NickName }),
    ...(input.PhoneNumbers != null && { PhoneNumbers: serializeAws_json1_1PhoneNumbers(input.PhoneNumbers, context) }),
    ...(input.PreferredLanguage != null && { PreferredLanguage: input.PreferredLanguage }),
    ...(input.ProfileUrl != null && { ProfileUrl: input.ProfileUrl }),
    ...(input.Timezone != null && { Timezone: input.Timezone }),
    ...(input.Title != null && { Title: input.Title }),
    ...(input.UserName != null && { UserName: input.UserName }),
    ...(input.UserType != null && { UserType: input.UserType }),
  };
};

const serializeAws_json1_1DeleteGroupMembershipRequest = (
  input: DeleteGroupMembershipRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IdentityStoreId != null && { IdentityStoreId: input.IdentityStoreId }),
    ...(input.MembershipId != null && { MembershipId: input.MembershipId }),
  };
};

const serializeAws_json1_1DeleteGroupRequest = (input: DeleteGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.IdentityStoreId != null && { IdentityStoreId: input.IdentityStoreId }),
  };
};

const serializeAws_json1_1DeleteUserRequest = (input: DeleteUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.IdentityStoreId != null && { IdentityStoreId: input.IdentityStoreId }),
    ...(input.UserId != null && { UserId: input.UserId }),
  };
};

const serializeAws_json1_1DescribeGroupMembershipRequest = (
  input: DescribeGroupMembershipRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IdentityStoreId != null && { IdentityStoreId: input.IdentityStoreId }),
    ...(input.MembershipId != null && { MembershipId: input.MembershipId }),
  };
};

const serializeAws_json1_1DescribeGroupRequest = (input: DescribeGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.IdentityStoreId != null && { IdentityStoreId: input.IdentityStoreId }),
  };
};

const serializeAws_json1_1DescribeUserRequest = (input: DescribeUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.IdentityStoreId != null && { IdentityStoreId: input.IdentityStoreId }),
    ...(input.UserId != null && { UserId: input.UserId }),
  };
};

const serializeAws_json1_1Email = (input: Email, context: __SerdeContext): any => {
  return {
    ...(input.Primary != null && { Primary: input.Primary }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1Emails = (input: Email[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Email(entry, context);
    });
};

const serializeAws_json1_1ExternalId = (input: ExternalId, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Issuer != null && { Issuer: input.Issuer }),
  };
};

const serializeAws_json1_1Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.AttributePath != null && { AttributePath: input.AttributePath }),
    ...(input.AttributeValue != null && { AttributeValue: input.AttributeValue }),
  };
};

const serializeAws_json1_1Filters = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Filter(entry, context);
    });
};

const serializeAws_json1_1GetGroupIdRequest = (input: GetGroupIdRequest, context: __SerdeContext): any => {
  return {
    ...(input.AlternateIdentifier != null && {
      AlternateIdentifier: serializeAws_json1_1AlternateIdentifier(input.AlternateIdentifier, context),
    }),
    ...(input.IdentityStoreId != null && { IdentityStoreId: input.IdentityStoreId }),
  };
};

const serializeAws_json1_1GetGroupMembershipIdRequest = (
  input: GetGroupMembershipIdRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.IdentityStoreId != null && { IdentityStoreId: input.IdentityStoreId }),
    ...(input.MemberId != null && { MemberId: serializeAws_json1_1MemberId(input.MemberId, context) }),
  };
};

const serializeAws_json1_1GetUserIdRequest = (input: GetUserIdRequest, context: __SerdeContext): any => {
  return {
    ...(input.AlternateIdentifier != null && {
      AlternateIdentifier: serializeAws_json1_1AlternateIdentifier(input.AlternateIdentifier, context),
    }),
    ...(input.IdentityStoreId != null && { IdentityStoreId: input.IdentityStoreId }),
  };
};

const serializeAws_json1_1GroupIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1IsMemberInGroupsRequest = (input: IsMemberInGroupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.GroupIds != null && { GroupIds: serializeAws_json1_1GroupIds(input.GroupIds, context) }),
    ...(input.IdentityStoreId != null && { IdentityStoreId: input.IdentityStoreId }),
    ...(input.MemberId != null && { MemberId: serializeAws_json1_1MemberId(input.MemberId, context) }),
  };
};

const serializeAws_json1_1ListGroupMembershipsForMemberRequest = (
  input: ListGroupMembershipsForMemberRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IdentityStoreId != null && { IdentityStoreId: input.IdentityStoreId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.MemberId != null && { MemberId: serializeAws_json1_1MemberId(input.MemberId, context) }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListGroupMembershipsRequest = (
  input: ListGroupMembershipsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.IdentityStoreId != null && { IdentityStoreId: input.IdentityStoreId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListGroupsRequest = (input: ListGroupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1Filters(input.Filters, context) }),
    ...(input.IdentityStoreId != null && { IdentityStoreId: input.IdentityStoreId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListUsersRequest = (input: ListUsersRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1Filters(input.Filters, context) }),
    ...(input.IdentityStoreId != null && { IdentityStoreId: input.IdentityStoreId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1MemberId = (input: MemberId, context: __SerdeContext): any => {
  return MemberId.visit(input, {
    UserId: (value) => ({ UserId: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_json1_1Name = (input: Name, context: __SerdeContext): any => {
  return {
    ...(input.FamilyName != null && { FamilyName: input.FamilyName }),
    ...(input.Formatted != null && { Formatted: input.Formatted }),
    ...(input.GivenName != null && { GivenName: input.GivenName }),
    ...(input.HonorificPrefix != null && { HonorificPrefix: input.HonorificPrefix }),
    ...(input.HonorificSuffix != null && { HonorificSuffix: input.HonorificSuffix }),
    ...(input.MiddleName != null && { MiddleName: input.MiddleName }),
  };
};

const serializeAws_json1_1PhoneNumber = (input: PhoneNumber, context: __SerdeContext): any => {
  return {
    ...(input.Primary != null && { Primary: input.Primary }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1PhoneNumbers = (input: PhoneNumber[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1PhoneNumber(entry, context);
    });
};

const serializeAws_json1_1UniqueAttribute = (input: UniqueAttribute, context: __SerdeContext): any => {
  return {
    ...(input.AttributePath != null && { AttributePath: input.AttributePath }),
    ...(input.AttributeValue != null && {
      AttributeValue: serializeAws_json1_1AttributeValue(input.AttributeValue, context),
    }),
  };
};

const serializeAws_json1_1UpdateGroupRequest = (input: UpdateGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.IdentityStoreId != null && { IdentityStoreId: input.IdentityStoreId }),
    ...(input.Operations != null && { Operations: serializeAws_json1_1AttributeOperations(input.Operations, context) }),
  };
};

const serializeAws_json1_1UpdateUserRequest = (input: UpdateUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.IdentityStoreId != null && { IdentityStoreId: input.IdentityStoreId }),
    ...(input.Operations != null && { Operations: serializeAws_json1_1AttributeOperations(input.Operations, context) }),
    ...(input.UserId != null && { UserId: input.UserId }),
  };
};

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

const deserializeAws_json1_1Address = (output: any, context: __SerdeContext): Address => {
  return {
    Country: __expectString(output.Country),
    Formatted: __expectString(output.Formatted),
    Locality: __expectString(output.Locality),
    PostalCode: __expectString(output.PostalCode),
    Primary: __expectBoolean(output.Primary),
    Region: __expectString(output.Region),
    StreetAddress: __expectString(output.StreetAddress),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1Addresses = (output: any, context: __SerdeContext): Address[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Address(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
    Reason: __expectString(output.Reason),
    RequestId: __expectString(output.RequestId),
  } as any;
};

const deserializeAws_json1_1CreateGroupMembershipResponse = (
  output: any,
  context: __SerdeContext
): CreateGroupMembershipResponse => {
  return {
    IdentityStoreId: __expectString(output.IdentityStoreId),
    MembershipId: __expectString(output.MembershipId),
  } as any;
};

const deserializeAws_json1_1CreateGroupResponse = (output: any, context: __SerdeContext): CreateGroupResponse => {
  return {
    GroupId: __expectString(output.GroupId),
    IdentityStoreId: __expectString(output.IdentityStoreId),
  } as any;
};

const deserializeAws_json1_1CreateUserResponse = (output: any, context: __SerdeContext): CreateUserResponse => {
  return {
    IdentityStoreId: __expectString(output.IdentityStoreId),
    UserId: __expectString(output.UserId),
  } as any;
};

const deserializeAws_json1_1DeleteGroupMembershipResponse = (
  output: any,
  context: __SerdeContext
): DeleteGroupMembershipResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteGroupResponse = (output: any, context: __SerdeContext): DeleteGroupResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteUserResponse = (output: any, context: __SerdeContext): DeleteUserResponse => {
  return {} as any;
};

const deserializeAws_json1_1DescribeGroupMembershipResponse = (
  output: any,
  context: __SerdeContext
): DescribeGroupMembershipResponse => {
  return {
    GroupId: __expectString(output.GroupId),
    IdentityStoreId: __expectString(output.IdentityStoreId),
    MemberId:
      output.MemberId != null ? deserializeAws_json1_1MemberId(__expectUnion(output.MemberId), context) : undefined,
    MembershipId: __expectString(output.MembershipId),
  } as any;
};

const deserializeAws_json1_1DescribeGroupResponse = (output: any, context: __SerdeContext): DescribeGroupResponse => {
  return {
    Description: __expectString(output.Description),
    DisplayName: __expectString(output.DisplayName),
    ExternalIds:
      output.ExternalIds != null ? deserializeAws_json1_1ExternalIds(output.ExternalIds, context) : undefined,
    GroupId: __expectString(output.GroupId),
    IdentityStoreId: __expectString(output.IdentityStoreId),
  } as any;
};

const deserializeAws_json1_1DescribeUserResponse = (output: any, context: __SerdeContext): DescribeUserResponse => {
  return {
    Addresses: output.Addresses != null ? deserializeAws_json1_1Addresses(output.Addresses, context) : undefined,
    DisplayName: __expectString(output.DisplayName),
    Emails: output.Emails != null ? deserializeAws_json1_1Emails(output.Emails, context) : undefined,
    ExternalIds:
      output.ExternalIds != null ? deserializeAws_json1_1ExternalIds(output.ExternalIds, context) : undefined,
    IdentityStoreId: __expectString(output.IdentityStoreId),
    Locale: __expectString(output.Locale),
    Name: output.Name != null ? deserializeAws_json1_1Name(output.Name, context) : undefined,
    NickName: __expectString(output.NickName),
    PhoneNumbers:
      output.PhoneNumbers != null ? deserializeAws_json1_1PhoneNumbers(output.PhoneNumbers, context) : undefined,
    PreferredLanguage: __expectString(output.PreferredLanguage),
    ProfileUrl: __expectString(output.ProfileUrl),
    Timezone: __expectString(output.Timezone),
    Title: __expectString(output.Title),
    UserId: __expectString(output.UserId),
    UserName: __expectString(output.UserName),
    UserType: __expectString(output.UserType),
  } as any;
};

const deserializeAws_json1_1Email = (output: any, context: __SerdeContext): Email => {
  return {
    Primary: __expectBoolean(output.Primary),
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1Emails = (output: any, context: __SerdeContext): Email[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Email(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ExternalId = (output: any, context: __SerdeContext): ExternalId => {
  return {
    Id: __expectString(output.Id),
    Issuer: __expectString(output.Issuer),
  } as any;
};

const deserializeAws_json1_1ExternalIds = (output: any, context: __SerdeContext): ExternalId[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ExternalId(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GetGroupIdResponse = (output: any, context: __SerdeContext): GetGroupIdResponse => {
  return {
    GroupId: __expectString(output.GroupId),
    IdentityStoreId: __expectString(output.IdentityStoreId),
  } as any;
};

const deserializeAws_json1_1GetGroupMembershipIdResponse = (
  output: any,
  context: __SerdeContext
): GetGroupMembershipIdResponse => {
  return {
    IdentityStoreId: __expectString(output.IdentityStoreId),
    MembershipId: __expectString(output.MembershipId),
  } as any;
};

const deserializeAws_json1_1GetUserIdResponse = (output: any, context: __SerdeContext): GetUserIdResponse => {
  return {
    IdentityStoreId: __expectString(output.IdentityStoreId),
    UserId: __expectString(output.UserId),
  } as any;
};

const deserializeAws_json1_1Group = (output: any, context: __SerdeContext): Group => {
  return {
    Description: __expectString(output.Description),
    DisplayName: __expectString(output.DisplayName),
    ExternalIds:
      output.ExternalIds != null ? deserializeAws_json1_1ExternalIds(output.ExternalIds, context) : undefined,
    GroupId: __expectString(output.GroupId),
    IdentityStoreId: __expectString(output.IdentityStoreId),
  } as any;
};

const deserializeAws_json1_1GroupMembership = (output: any, context: __SerdeContext): GroupMembership => {
  return {
    GroupId: __expectString(output.GroupId),
    IdentityStoreId: __expectString(output.IdentityStoreId),
    MemberId:
      output.MemberId != null ? deserializeAws_json1_1MemberId(__expectUnion(output.MemberId), context) : undefined,
    MembershipId: __expectString(output.MembershipId),
  } as any;
};

const deserializeAws_json1_1GroupMembershipExistenceResult = (
  output: any,
  context: __SerdeContext
): GroupMembershipExistenceResult => {
  return {
    GroupId: __expectString(output.GroupId),
    MemberId:
      output.MemberId != null ? deserializeAws_json1_1MemberId(__expectUnion(output.MemberId), context) : undefined,
    MembershipExists: __expectBoolean(output.MembershipExists),
  } as any;
};

const deserializeAws_json1_1GroupMembershipExistenceResults = (
  output: any,
  context: __SerdeContext
): GroupMembershipExistenceResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GroupMembershipExistenceResult(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GroupMemberships = (output: any, context: __SerdeContext): GroupMembership[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GroupMembership(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Groups = (output: any, context: __SerdeContext): Group[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Group(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
    RetryAfterSeconds: __expectInt32(output.RetryAfterSeconds),
  } as any;
};

const deserializeAws_json1_1IsMemberInGroupsResponse = (
  output: any,
  context: __SerdeContext
): IsMemberInGroupsResponse => {
  return {
    Results:
      output.Results != null
        ? deserializeAws_json1_1GroupMembershipExistenceResults(output.Results, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListGroupMembershipsForMemberResponse = (
  output: any,
  context: __SerdeContext
): ListGroupMembershipsForMemberResponse => {
  return {
    GroupMemberships:
      output.GroupMemberships != null
        ? deserializeAws_json1_1GroupMemberships(output.GroupMemberships, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListGroupMembershipsResponse = (
  output: any,
  context: __SerdeContext
): ListGroupMembershipsResponse => {
  return {
    GroupMemberships:
      output.GroupMemberships != null
        ? deserializeAws_json1_1GroupMemberships(output.GroupMemberships, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListGroupsResponse = (output: any, context: __SerdeContext): ListGroupsResponse => {
  return {
    Groups: output.Groups != null ? deserializeAws_json1_1Groups(output.Groups, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListUsersResponse = (output: any, context: __SerdeContext): ListUsersResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Users: output.Users != null ? deserializeAws_json1_1Users(output.Users, context) : undefined,
  } as any;
};

const deserializeAws_json1_1MemberId = (output: any, context: __SerdeContext): MemberId => {
  if (__expectString(output.UserId) !== undefined) {
    return { UserId: __expectString(output.UserId) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_json1_1Name = (output: any, context: __SerdeContext): Name => {
  return {
    FamilyName: __expectString(output.FamilyName),
    Formatted: __expectString(output.Formatted),
    GivenName: __expectString(output.GivenName),
    HonorificPrefix: __expectString(output.HonorificPrefix),
    HonorificSuffix: __expectString(output.HonorificSuffix),
    MiddleName: __expectString(output.MiddleName),
  } as any;
};

const deserializeAws_json1_1PhoneNumber = (output: any, context: __SerdeContext): PhoneNumber => {
  return {
    Primary: __expectBoolean(output.Primary),
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1PhoneNumbers = (output: any, context: __SerdeContext): PhoneNumber[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PhoneNumber(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_json1_1ServiceQuotaExceededException = (
  output: any,
  context: __SerdeContext
): ServiceQuotaExceededException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

const deserializeAws_json1_1ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
    RetryAfterSeconds: __expectInt32(output.RetryAfterSeconds),
  } as any;
};

const deserializeAws_json1_1UpdateGroupResponse = (output: any, context: __SerdeContext): UpdateGroupResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateUserResponse = (output: any, context: __SerdeContext): UpdateUserResponse => {
  return {} as any;
};

const deserializeAws_json1_1User = (output: any, context: __SerdeContext): User => {
  return {
    Addresses: output.Addresses != null ? deserializeAws_json1_1Addresses(output.Addresses, context) : undefined,
    DisplayName: __expectString(output.DisplayName),
    Emails: output.Emails != null ? deserializeAws_json1_1Emails(output.Emails, context) : undefined,
    ExternalIds:
      output.ExternalIds != null ? deserializeAws_json1_1ExternalIds(output.ExternalIds, context) : undefined,
    IdentityStoreId: __expectString(output.IdentityStoreId),
    Locale: __expectString(output.Locale),
    Name: output.Name != null ? deserializeAws_json1_1Name(output.Name, context) : undefined,
    NickName: __expectString(output.NickName),
    PhoneNumbers:
      output.PhoneNumbers != null ? deserializeAws_json1_1PhoneNumbers(output.PhoneNumbers, context) : undefined,
    PreferredLanguage: __expectString(output.PreferredLanguage),
    ProfileUrl: __expectString(output.ProfileUrl),
    Timezone: __expectString(output.Timezone),
    Title: __expectString(output.Title),
    UserId: __expectString(output.UserId),
    UserName: __expectString(output.UserName),
    UserType: __expectString(output.UserType),
  } as any;
};

const deserializeAws_json1_1Users = (output: any, context: __SerdeContext): User[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1User(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
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
