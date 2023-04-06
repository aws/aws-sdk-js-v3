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

/**
 * serializeAws_json1_1CreateGroupCommand
 */
export const se_CreateGroupCommand = async (
  input: CreateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIdentityStore.CreateGroup",
  };
  let body: any;
  body = JSON.stringify(se_CreateGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateGroupMembershipCommand
 */
export const se_CreateGroupMembershipCommand = async (
  input: CreateGroupMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIdentityStore.CreateGroupMembership",
  };
  let body: any;
  body = JSON.stringify(se_CreateGroupMembershipRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateUserCommand
 */
export const se_CreateUserCommand = async (
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIdentityStore.CreateUser",
  };
  let body: any;
  body = JSON.stringify(se_CreateUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteGroupCommand
 */
export const se_DeleteGroupCommand = async (
  input: DeleteGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIdentityStore.DeleteGroup",
  };
  let body: any;
  body = JSON.stringify(se_DeleteGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteGroupMembershipCommand
 */
export const se_DeleteGroupMembershipCommand = async (
  input: DeleteGroupMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIdentityStore.DeleteGroupMembership",
  };
  let body: any;
  body = JSON.stringify(se_DeleteGroupMembershipRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteUserCommand
 */
export const se_DeleteUserCommand = async (
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIdentityStore.DeleteUser",
  };
  let body: any;
  body = JSON.stringify(se_DeleteUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeGroupCommand
 */
export const se_DescribeGroupCommand = async (
  input: DescribeGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIdentityStore.DescribeGroup",
  };
  let body: any;
  body = JSON.stringify(se_DescribeGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeGroupMembershipCommand
 */
export const se_DescribeGroupMembershipCommand = async (
  input: DescribeGroupMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIdentityStore.DescribeGroupMembership",
  };
  let body: any;
  body = JSON.stringify(se_DescribeGroupMembershipRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeUserCommand
 */
export const se_DescribeUserCommand = async (
  input: DescribeUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIdentityStore.DescribeUser",
  };
  let body: any;
  body = JSON.stringify(se_DescribeUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetGroupIdCommand
 */
export const se_GetGroupIdCommand = async (
  input: GetGroupIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIdentityStore.GetGroupId",
  };
  let body: any;
  body = JSON.stringify(se_GetGroupIdRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetGroupMembershipIdCommand
 */
export const se_GetGroupMembershipIdCommand = async (
  input: GetGroupMembershipIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIdentityStore.GetGroupMembershipId",
  };
  let body: any;
  body = JSON.stringify(se_GetGroupMembershipIdRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetUserIdCommand
 */
export const se_GetUserIdCommand = async (
  input: GetUserIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIdentityStore.GetUserId",
  };
  let body: any;
  body = JSON.stringify(se_GetUserIdRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1IsMemberInGroupsCommand
 */
export const se_IsMemberInGroupsCommand = async (
  input: IsMemberInGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIdentityStore.IsMemberInGroups",
  };
  let body: any;
  body = JSON.stringify(se_IsMemberInGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListGroupMembershipsCommand
 */
export const se_ListGroupMembershipsCommand = async (
  input: ListGroupMembershipsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIdentityStore.ListGroupMemberships",
  };
  let body: any;
  body = JSON.stringify(se_ListGroupMembershipsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListGroupMembershipsForMemberCommand
 */
export const se_ListGroupMembershipsForMemberCommand = async (
  input: ListGroupMembershipsForMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIdentityStore.ListGroupMembershipsForMember",
  };
  let body: any;
  body = JSON.stringify(se_ListGroupMembershipsForMemberRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListGroupsCommand
 */
export const se_ListGroupsCommand = async (
  input: ListGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIdentityStore.ListGroups",
  };
  let body: any;
  body = JSON.stringify(se_ListGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListUsersCommand
 */
export const se_ListUsersCommand = async (
  input: ListUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIdentityStore.ListUsers",
  };
  let body: any;
  body = JSON.stringify(se_ListUsersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateGroupCommand
 */
export const se_UpdateGroupCommand = async (
  input: UpdateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIdentityStore.UpdateGroup",
  };
  let body: any;
  body = JSON.stringify(se_UpdateGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateUserCommand
 */
export const se_UpdateUserCommand = async (
  input: UpdateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIdentityStore.UpdateUser",
  };
  let body: any;
  body = JSON.stringify(se_UpdateUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1CreateGroupCommand
 */
export const de_CreateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateGroupResponse(data, context);
  const response: CreateGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateGroupCommandError
 */
const de_CreateGroupCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.identitystore#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.identitystore#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.identitystore#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.identitystore#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.identitystore#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.identitystore#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1CreateGroupMembershipCommand
 */
export const de_CreateGroupMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupMembershipCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateGroupMembershipCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateGroupMembershipResponse(data, context);
  const response: CreateGroupMembershipCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateGroupMembershipCommandError
 */
const de_CreateGroupMembershipCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.identitystore#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.identitystore#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.identitystore#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.identitystore#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.identitystore#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.identitystore#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1CreateUserCommand
 */
export const de_CreateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateUserResponse(data, context);
  const response: CreateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateUserCommandError
 */
const de_CreateUserCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.identitystore#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.identitystore#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.identitystore#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.identitystore#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.identitystore#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.identitystore#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1DeleteGroupCommand
 */
export const de_DeleteGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteGroupResponse(data, context);
  const response: DeleteGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteGroupCommandError
 */
const de_DeleteGroupCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.identitystore#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.identitystore#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.identitystore#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.identitystore#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.identitystore#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1DeleteGroupMembershipCommand
 */
export const de_DeleteGroupMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupMembershipCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteGroupMembershipCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteGroupMembershipResponse(data, context);
  const response: DeleteGroupMembershipCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteGroupMembershipCommandError
 */
const de_DeleteGroupMembershipCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.identitystore#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.identitystore#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.identitystore#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.identitystore#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.identitystore#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1DeleteUserCommand
 */
export const de_DeleteUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteUserResponse(data, context);
  const response: DeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteUserCommandError
 */
const de_DeleteUserCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.identitystore#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.identitystore#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.identitystore#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.identitystore#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.identitystore#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1DescribeGroupCommand
 */
export const de_DescribeGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeGroupResponse(data, context);
  const response: DescribeGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeGroupCommandError
 */
const de_DescribeGroupCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.identitystore#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.identitystore#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.identitystore#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.identitystore#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1DescribeGroupMembershipCommand
 */
export const de_DescribeGroupMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGroupMembershipCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeGroupMembershipCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeGroupMembershipResponse(data, context);
  const response: DescribeGroupMembershipCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeGroupMembershipCommandError
 */
const de_DescribeGroupMembershipCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.identitystore#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.identitystore#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.identitystore#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.identitystore#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1DescribeUserCommand
 */
export const de_DescribeUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeUserResponse(data, context);
  const response: DescribeUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeUserCommandError
 */
const de_DescribeUserCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.identitystore#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.identitystore#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.identitystore#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.identitystore#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1GetGroupIdCommand
 */
export const de_GetGroupIdCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupIdCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetGroupIdCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetGroupIdResponse(data, context);
  const response: GetGroupIdCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetGroupIdCommandError
 */
const de_GetGroupIdCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.identitystore#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.identitystore#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.identitystore#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.identitystore#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1GetGroupMembershipIdCommand
 */
export const de_GetGroupMembershipIdCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupMembershipIdCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetGroupMembershipIdCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetGroupMembershipIdResponse(data, context);
  const response: GetGroupMembershipIdCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetGroupMembershipIdCommandError
 */
const de_GetGroupMembershipIdCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.identitystore#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.identitystore#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.identitystore#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.identitystore#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1GetUserIdCommand
 */
export const de_GetUserIdCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserIdCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetUserIdCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetUserIdResponse(data, context);
  const response: GetUserIdCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetUserIdCommandError
 */
const de_GetUserIdCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.identitystore#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.identitystore#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.identitystore#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.identitystore#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1IsMemberInGroupsCommand
 */
export const de_IsMemberInGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IsMemberInGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_IsMemberInGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_IsMemberInGroupsResponse(data, context);
  const response: IsMemberInGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1IsMemberInGroupsCommandError
 */
const de_IsMemberInGroupsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.identitystore#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.identitystore#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.identitystore#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.identitystore#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1ListGroupMembershipsCommand
 */
export const de_ListGroupMembershipsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupMembershipsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListGroupMembershipsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListGroupMembershipsResponse(data, context);
  const response: ListGroupMembershipsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListGroupMembershipsCommandError
 */
const de_ListGroupMembershipsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.identitystore#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.identitystore#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.identitystore#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.identitystore#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1ListGroupMembershipsForMemberCommand
 */
export const de_ListGroupMembershipsForMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupMembershipsForMemberCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListGroupMembershipsForMemberCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListGroupMembershipsForMemberResponse(data, context);
  const response: ListGroupMembershipsForMemberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListGroupMembershipsForMemberCommandError
 */
const de_ListGroupMembershipsForMemberCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.identitystore#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.identitystore#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.identitystore#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.identitystore#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1ListGroupsCommand
 */
export const de_ListGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListGroupsResponse(data, context);
  const response: ListGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListGroupsCommandError
 */
const de_ListGroupsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.identitystore#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.identitystore#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.identitystore#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.identitystore#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1ListUsersCommand
 */
export const de_ListUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListUsersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListUsersResponse(data, context);
  const response: ListUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListUsersCommandError
 */
const de_ListUsersCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.identitystore#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.identitystore#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.identitystore#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.identitystore#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1UpdateGroupCommand
 */
export const de_UpdateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateGroupResponse(data, context);
  const response: UpdateGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateGroupCommandError
 */
const de_UpdateGroupCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.identitystore#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.identitystore#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.identitystore#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.identitystore#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.identitystore#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.identitystore#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1UpdateUserCommand
 */
export const de_UpdateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateUserResponse(data, context);
  const response: UpdateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateUserCommandError
 */
const de_UpdateUserCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.identitystore#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.identitystore#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.identitystore#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.identitystore#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.identitystore#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.identitystore#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InternalServerException(body, context);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServiceQuotaExceededException(body, context);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ThrottlingException(body, context);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1Address
 */
const se_Address = (input: Address, context: __SerdeContext): any => {
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

/**
 * serializeAws_json1_1Addresses
 */
const se_Addresses = (input: Address[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Address(entry, context);
    });
};

/**
 * serializeAws_json1_1AlternateIdentifier
 */
const se_AlternateIdentifier = (input: AlternateIdentifier, context: __SerdeContext): any => {
  return AlternateIdentifier.visit(input, {
    ExternalId: (value) => ({ ExternalId: se_ExternalId(value, context) }),
    UniqueAttribute: (value) => ({ UniqueAttribute: se_UniqueAttribute(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_json1_1AttributeOperation
 */
const se_AttributeOperation = (input: AttributeOperation, context: __SerdeContext): any => {
  return {
    ...(input.AttributePath != null && { AttributePath: input.AttributePath }),
    ...(input.AttributeValue != null && { AttributeValue: se_AttributeValue(input.AttributeValue, context) }),
  };
};

/**
 * serializeAws_json1_1AttributeOperations
 */
const se_AttributeOperations = (input: AttributeOperation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AttributeOperation(entry, context);
    });
};

/**
 * serializeAws_json1_1AttributeValue
 */
const se_AttributeValue = (input: __DocumentType, context: __SerdeContext): any => {
  return input;
};

/**
 * serializeAws_json1_1CreateGroupMembershipRequest
 */
const se_CreateGroupMembershipRequest = (input: CreateGroupMembershipRequest, context: __SerdeContext): any => {
  return {
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.IdentityStoreId != null && { IdentityStoreId: input.IdentityStoreId }),
    ...(input.MemberId != null && { MemberId: se_MemberId(input.MemberId, context) }),
  };
};

/**
 * serializeAws_json1_1CreateGroupRequest
 */
const se_CreateGroupRequest = (input: CreateGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    ...(input.IdentityStoreId != null && { IdentityStoreId: input.IdentityStoreId }),
  };
};

/**
 * serializeAws_json1_1CreateUserRequest
 */
const se_CreateUserRequest = (input: CreateUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.Addresses != null && { Addresses: se_Addresses(input.Addresses, context) }),
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    ...(input.Emails != null && { Emails: se_Emails(input.Emails, context) }),
    ...(input.IdentityStoreId != null && { IdentityStoreId: input.IdentityStoreId }),
    ...(input.Locale != null && { Locale: input.Locale }),
    ...(input.Name != null && { Name: se_Name(input.Name, context) }),
    ...(input.NickName != null && { NickName: input.NickName }),
    ...(input.PhoneNumbers != null && { PhoneNumbers: se_PhoneNumbers(input.PhoneNumbers, context) }),
    ...(input.PreferredLanguage != null && { PreferredLanguage: input.PreferredLanguage }),
    ...(input.ProfileUrl != null && { ProfileUrl: input.ProfileUrl }),
    ...(input.Timezone != null && { Timezone: input.Timezone }),
    ...(input.Title != null && { Title: input.Title }),
    ...(input.UserName != null && { UserName: input.UserName }),
    ...(input.UserType != null && { UserType: input.UserType }),
  };
};

/**
 * serializeAws_json1_1DeleteGroupMembershipRequest
 */
const se_DeleteGroupMembershipRequest = (input: DeleteGroupMembershipRequest, context: __SerdeContext): any => {
  return {
    ...(input.IdentityStoreId != null && { IdentityStoreId: input.IdentityStoreId }),
    ...(input.MembershipId != null && { MembershipId: input.MembershipId }),
  };
};

/**
 * serializeAws_json1_1DeleteGroupRequest
 */
const se_DeleteGroupRequest = (input: DeleteGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.IdentityStoreId != null && { IdentityStoreId: input.IdentityStoreId }),
  };
};

/**
 * serializeAws_json1_1DeleteUserRequest
 */
const se_DeleteUserRequest = (input: DeleteUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.IdentityStoreId != null && { IdentityStoreId: input.IdentityStoreId }),
    ...(input.UserId != null && { UserId: input.UserId }),
  };
};

/**
 * serializeAws_json1_1DescribeGroupMembershipRequest
 */
const se_DescribeGroupMembershipRequest = (input: DescribeGroupMembershipRequest, context: __SerdeContext): any => {
  return {
    ...(input.IdentityStoreId != null && { IdentityStoreId: input.IdentityStoreId }),
    ...(input.MembershipId != null && { MembershipId: input.MembershipId }),
  };
};

/**
 * serializeAws_json1_1DescribeGroupRequest
 */
const se_DescribeGroupRequest = (input: DescribeGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.IdentityStoreId != null && { IdentityStoreId: input.IdentityStoreId }),
  };
};

/**
 * serializeAws_json1_1DescribeUserRequest
 */
const se_DescribeUserRequest = (input: DescribeUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.IdentityStoreId != null && { IdentityStoreId: input.IdentityStoreId }),
    ...(input.UserId != null && { UserId: input.UserId }),
  };
};

/**
 * serializeAws_json1_1Email
 */
const se_Email = (input: Email, context: __SerdeContext): any => {
  return {
    ...(input.Primary != null && { Primary: input.Primary }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1Emails
 */
const se_Emails = (input: Email[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Email(entry, context);
    });
};

/**
 * serializeAws_json1_1ExternalId
 */
const se_ExternalId = (input: ExternalId, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Issuer != null && { Issuer: input.Issuer }),
  };
};

/**
 * serializeAws_json1_1Filter
 */
const se_Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.AttributePath != null && { AttributePath: input.AttributePath }),
    ...(input.AttributeValue != null && { AttributeValue: input.AttributeValue }),
  };
};

/**
 * serializeAws_json1_1Filters
 */
const se_Filters = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Filter(entry, context);
    });
};

/**
 * serializeAws_json1_1GetGroupIdRequest
 */
const se_GetGroupIdRequest = (input: GetGroupIdRequest, context: __SerdeContext): any => {
  return {
    ...(input.AlternateIdentifier != null && {
      AlternateIdentifier: se_AlternateIdentifier(input.AlternateIdentifier, context),
    }),
    ...(input.IdentityStoreId != null && { IdentityStoreId: input.IdentityStoreId }),
  };
};

/**
 * serializeAws_json1_1GetGroupMembershipIdRequest
 */
const se_GetGroupMembershipIdRequest = (input: GetGroupMembershipIdRequest, context: __SerdeContext): any => {
  return {
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.IdentityStoreId != null && { IdentityStoreId: input.IdentityStoreId }),
    ...(input.MemberId != null && { MemberId: se_MemberId(input.MemberId, context) }),
  };
};

/**
 * serializeAws_json1_1GetUserIdRequest
 */
const se_GetUserIdRequest = (input: GetUserIdRequest, context: __SerdeContext): any => {
  return {
    ...(input.AlternateIdentifier != null && {
      AlternateIdentifier: se_AlternateIdentifier(input.AlternateIdentifier, context),
    }),
    ...(input.IdentityStoreId != null && { IdentityStoreId: input.IdentityStoreId }),
  };
};

/**
 * serializeAws_json1_1GroupIds
 */
const se_GroupIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1IsMemberInGroupsRequest
 */
const se_IsMemberInGroupsRequest = (input: IsMemberInGroupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.GroupIds != null && { GroupIds: se_GroupIds(input.GroupIds, context) }),
    ...(input.IdentityStoreId != null && { IdentityStoreId: input.IdentityStoreId }),
    ...(input.MemberId != null && { MemberId: se_MemberId(input.MemberId, context) }),
  };
};

/**
 * serializeAws_json1_1ListGroupMembershipsForMemberRequest
 */
const se_ListGroupMembershipsForMemberRequest = (
  input: ListGroupMembershipsForMemberRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IdentityStoreId != null && { IdentityStoreId: input.IdentityStoreId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.MemberId != null && { MemberId: se_MemberId(input.MemberId, context) }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListGroupMembershipsRequest
 */
const se_ListGroupMembershipsRequest = (input: ListGroupMembershipsRequest, context: __SerdeContext): any => {
  return {
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.IdentityStoreId != null && { IdentityStoreId: input.IdentityStoreId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListGroupsRequest
 */
const se_ListGroupsRequest = (input: ListGroupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_Filters(input.Filters, context) }),
    ...(input.IdentityStoreId != null && { IdentityStoreId: input.IdentityStoreId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListUsersRequest
 */
const se_ListUsersRequest = (input: ListUsersRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_Filters(input.Filters, context) }),
    ...(input.IdentityStoreId != null && { IdentityStoreId: input.IdentityStoreId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1MemberId
 */
const se_MemberId = (input: MemberId, context: __SerdeContext): any => {
  return MemberId.visit(input, {
    UserId: (value) => ({ UserId: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_json1_1Name
 */
const se_Name = (input: Name, context: __SerdeContext): any => {
  return {
    ...(input.FamilyName != null && { FamilyName: input.FamilyName }),
    ...(input.Formatted != null && { Formatted: input.Formatted }),
    ...(input.GivenName != null && { GivenName: input.GivenName }),
    ...(input.HonorificPrefix != null && { HonorificPrefix: input.HonorificPrefix }),
    ...(input.HonorificSuffix != null && { HonorificSuffix: input.HonorificSuffix }),
    ...(input.MiddleName != null && { MiddleName: input.MiddleName }),
  };
};

/**
 * serializeAws_json1_1PhoneNumber
 */
const se_PhoneNumber = (input: PhoneNumber, context: __SerdeContext): any => {
  return {
    ...(input.Primary != null && { Primary: input.Primary }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1PhoneNumbers
 */
const se_PhoneNumbers = (input: PhoneNumber[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PhoneNumber(entry, context);
    });
};

/**
 * serializeAws_json1_1UniqueAttribute
 */
const se_UniqueAttribute = (input: UniqueAttribute, context: __SerdeContext): any => {
  return {
    ...(input.AttributePath != null && { AttributePath: input.AttributePath }),
    ...(input.AttributeValue != null && { AttributeValue: se_AttributeValue(input.AttributeValue, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateGroupRequest
 */
const se_UpdateGroupRequest = (input: UpdateGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.IdentityStoreId != null && { IdentityStoreId: input.IdentityStoreId }),
    ...(input.Operations != null && { Operations: se_AttributeOperations(input.Operations, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateUserRequest
 */
const se_UpdateUserRequest = (input: UpdateUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.IdentityStoreId != null && { IdentityStoreId: input.IdentityStoreId }),
    ...(input.Operations != null && { Operations: se_AttributeOperations(input.Operations, context) }),
    ...(input.UserId != null && { UserId: input.UserId }),
  };
};

/**
 * deserializeAws_json1_1AccessDeniedException
 */
const de_AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1Address
 */
const de_Address = (output: any, context: __SerdeContext): Address => {
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

/**
 * deserializeAws_json1_1Addresses
 */
const de_Addresses = (output: any, context: __SerdeContext): Address[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Address(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConflictException
 */
const de_ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
    Reason: __expectString(output.Reason),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateGroupMembershipResponse
 */
const de_CreateGroupMembershipResponse = (output: any, context: __SerdeContext): CreateGroupMembershipResponse => {
  return {
    IdentityStoreId: __expectString(output.IdentityStoreId),
    MembershipId: __expectString(output.MembershipId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateGroupResponse
 */
const de_CreateGroupResponse = (output: any, context: __SerdeContext): CreateGroupResponse => {
  return {
    GroupId: __expectString(output.GroupId),
    IdentityStoreId: __expectString(output.IdentityStoreId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateUserResponse
 */
const de_CreateUserResponse = (output: any, context: __SerdeContext): CreateUserResponse => {
  return {
    IdentityStoreId: __expectString(output.IdentityStoreId),
    UserId: __expectString(output.UserId),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteGroupMembershipResponse
 */
const de_DeleteGroupMembershipResponse = (output: any, context: __SerdeContext): DeleteGroupMembershipResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteGroupResponse
 */
const de_DeleteGroupResponse = (output: any, context: __SerdeContext): DeleteGroupResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteUserResponse
 */
const de_DeleteUserResponse = (output: any, context: __SerdeContext): DeleteUserResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DescribeGroupMembershipResponse
 */
const de_DescribeGroupMembershipResponse = (output: any, context: __SerdeContext): DescribeGroupMembershipResponse => {
  return {
    GroupId: __expectString(output.GroupId),
    IdentityStoreId: __expectString(output.IdentityStoreId),
    MemberId: output.MemberId != null ? de_MemberId(__expectUnion(output.MemberId), context) : undefined,
    MembershipId: __expectString(output.MembershipId),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeGroupResponse
 */
const de_DescribeGroupResponse = (output: any, context: __SerdeContext): DescribeGroupResponse => {
  return {
    Description: __expectString(output.Description),
    DisplayName: __expectString(output.DisplayName),
    ExternalIds: output.ExternalIds != null ? de_ExternalIds(output.ExternalIds, context) : undefined,
    GroupId: __expectString(output.GroupId),
    IdentityStoreId: __expectString(output.IdentityStoreId),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeUserResponse
 */
const de_DescribeUserResponse = (output: any, context: __SerdeContext): DescribeUserResponse => {
  return {
    Addresses: output.Addresses != null ? de_Addresses(output.Addresses, context) : undefined,
    DisplayName: __expectString(output.DisplayName),
    Emails: output.Emails != null ? de_Emails(output.Emails, context) : undefined,
    ExternalIds: output.ExternalIds != null ? de_ExternalIds(output.ExternalIds, context) : undefined,
    IdentityStoreId: __expectString(output.IdentityStoreId),
    Locale: __expectString(output.Locale),
    Name: output.Name != null ? de_Name(output.Name, context) : undefined,
    NickName: __expectString(output.NickName),
    PhoneNumbers: output.PhoneNumbers != null ? de_PhoneNumbers(output.PhoneNumbers, context) : undefined,
    PreferredLanguage: __expectString(output.PreferredLanguage),
    ProfileUrl: __expectString(output.ProfileUrl),
    Timezone: __expectString(output.Timezone),
    Title: __expectString(output.Title),
    UserId: __expectString(output.UserId),
    UserName: __expectString(output.UserName),
    UserType: __expectString(output.UserType),
  } as any;
};

/**
 * deserializeAws_json1_1Email
 */
const de_Email = (output: any, context: __SerdeContext): Email => {
  return {
    Primary: __expectBoolean(output.Primary),
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1Emails
 */
const de_Emails = (output: any, context: __SerdeContext): Email[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Email(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ExternalId
 */
const de_ExternalId = (output: any, context: __SerdeContext): ExternalId => {
  return {
    Id: __expectString(output.Id),
    Issuer: __expectString(output.Issuer),
  } as any;
};

/**
 * deserializeAws_json1_1ExternalIds
 */
const de_ExternalIds = (output: any, context: __SerdeContext): ExternalId[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExternalId(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GetGroupIdResponse
 */
const de_GetGroupIdResponse = (output: any, context: __SerdeContext): GetGroupIdResponse => {
  return {
    GroupId: __expectString(output.GroupId),
    IdentityStoreId: __expectString(output.IdentityStoreId),
  } as any;
};

/**
 * deserializeAws_json1_1GetGroupMembershipIdResponse
 */
const de_GetGroupMembershipIdResponse = (output: any, context: __SerdeContext): GetGroupMembershipIdResponse => {
  return {
    IdentityStoreId: __expectString(output.IdentityStoreId),
    MembershipId: __expectString(output.MembershipId),
  } as any;
};

/**
 * deserializeAws_json1_1GetUserIdResponse
 */
const de_GetUserIdResponse = (output: any, context: __SerdeContext): GetUserIdResponse => {
  return {
    IdentityStoreId: __expectString(output.IdentityStoreId),
    UserId: __expectString(output.UserId),
  } as any;
};

/**
 * deserializeAws_json1_1Group
 */
const de_Group = (output: any, context: __SerdeContext): Group => {
  return {
    Description: __expectString(output.Description),
    DisplayName: __expectString(output.DisplayName),
    ExternalIds: output.ExternalIds != null ? de_ExternalIds(output.ExternalIds, context) : undefined,
    GroupId: __expectString(output.GroupId),
    IdentityStoreId: __expectString(output.IdentityStoreId),
  } as any;
};

/**
 * deserializeAws_json1_1GroupMembership
 */
const de_GroupMembership = (output: any, context: __SerdeContext): GroupMembership => {
  return {
    GroupId: __expectString(output.GroupId),
    IdentityStoreId: __expectString(output.IdentityStoreId),
    MemberId: output.MemberId != null ? de_MemberId(__expectUnion(output.MemberId), context) : undefined,
    MembershipId: __expectString(output.MembershipId),
  } as any;
};

/**
 * deserializeAws_json1_1GroupMembershipExistenceResult
 */
const de_GroupMembershipExistenceResult = (output: any, context: __SerdeContext): GroupMembershipExistenceResult => {
  return {
    GroupId: __expectString(output.GroupId),
    MemberId: output.MemberId != null ? de_MemberId(__expectUnion(output.MemberId), context) : undefined,
    MembershipExists: __expectBoolean(output.MembershipExists),
  } as any;
};

/**
 * deserializeAws_json1_1GroupMembershipExistenceResults
 */
const de_GroupMembershipExistenceResults = (output: any, context: __SerdeContext): GroupMembershipExistenceResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GroupMembershipExistenceResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GroupMemberships
 */
const de_GroupMemberships = (output: any, context: __SerdeContext): GroupMembership[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GroupMembership(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Groups
 */
const de_Groups = (output: any, context: __SerdeContext): Group[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Group(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InternalServerException
 */
const de_InternalServerException = (output: any, context: __SerdeContext): InternalServerException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
    RetryAfterSeconds: __expectInt32(output.RetryAfterSeconds),
  } as any;
};

/**
 * deserializeAws_json1_1IsMemberInGroupsResponse
 */
const de_IsMemberInGroupsResponse = (output: any, context: __SerdeContext): IsMemberInGroupsResponse => {
  return {
    Results: output.Results != null ? de_GroupMembershipExistenceResults(output.Results, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListGroupMembershipsForMemberResponse
 */
const de_ListGroupMembershipsForMemberResponse = (
  output: any,
  context: __SerdeContext
): ListGroupMembershipsForMemberResponse => {
  return {
    GroupMemberships:
      output.GroupMemberships != null ? de_GroupMemberships(output.GroupMemberships, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListGroupMembershipsResponse
 */
const de_ListGroupMembershipsResponse = (output: any, context: __SerdeContext): ListGroupMembershipsResponse => {
  return {
    GroupMemberships:
      output.GroupMemberships != null ? de_GroupMemberships(output.GroupMemberships, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListGroupsResponse
 */
const de_ListGroupsResponse = (output: any, context: __SerdeContext): ListGroupsResponse => {
  return {
    Groups: output.Groups != null ? de_Groups(output.Groups, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListUsersResponse
 */
const de_ListUsersResponse = (output: any, context: __SerdeContext): ListUsersResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Users: output.Users != null ? de_Users(output.Users, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MemberId
 */
const de_MemberId = (output: any, context: __SerdeContext): MemberId => {
  if (__expectString(output.UserId) !== undefined) {
    return { UserId: __expectString(output.UserId) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_json1_1Name
 */
const de_Name = (output: any, context: __SerdeContext): Name => {
  return {
    FamilyName: __expectString(output.FamilyName),
    Formatted: __expectString(output.Formatted),
    GivenName: __expectString(output.GivenName),
    HonorificPrefix: __expectString(output.HonorificPrefix),
    HonorificSuffix: __expectString(output.HonorificSuffix),
    MiddleName: __expectString(output.MiddleName),
  } as any;
};

/**
 * deserializeAws_json1_1PhoneNumber
 */
const de_PhoneNumber = (output: any, context: __SerdeContext): PhoneNumber => {
  return {
    Primary: __expectBoolean(output.Primary),
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1PhoneNumbers
 */
const de_PhoneNumbers = (output: any, context: __SerdeContext): PhoneNumber[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PhoneNumber(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

/**
 * deserializeAws_json1_1ServiceQuotaExceededException
 */
const de_ServiceQuotaExceededException = (output: any, context: __SerdeContext): ServiceQuotaExceededException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1ThrottlingException
 */
const de_ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
    RetryAfterSeconds: __expectInt32(output.RetryAfterSeconds),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateGroupResponse
 */
const de_UpdateGroupResponse = (output: any, context: __SerdeContext): UpdateGroupResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateUserResponse
 */
const de_UpdateUserResponse = (output: any, context: __SerdeContext): UpdateUserResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1User
 */
const de_User = (output: any, context: __SerdeContext): User => {
  return {
    Addresses: output.Addresses != null ? de_Addresses(output.Addresses, context) : undefined,
    DisplayName: __expectString(output.DisplayName),
    Emails: output.Emails != null ? de_Emails(output.Emails, context) : undefined,
    ExternalIds: output.ExternalIds != null ? de_ExternalIds(output.ExternalIds, context) : undefined,
    IdentityStoreId: __expectString(output.IdentityStoreId),
    Locale: __expectString(output.Locale),
    Name: output.Name != null ? de_Name(output.Name, context) : undefined,
    NickName: __expectString(output.NickName),
    PhoneNumbers: output.PhoneNumbers != null ? de_PhoneNumbers(output.PhoneNumbers, context) : undefined,
    PreferredLanguage: __expectString(output.PreferredLanguage),
    ProfileUrl: __expectString(output.ProfileUrl),
    Timezone: __expectString(output.Timezone),
    Title: __expectString(output.Title),
    UserId: __expectString(output.UserId),
    UserName: __expectString(output.UserName),
    UserType: __expectString(output.UserType),
  } as any;
};

/**
 * deserializeAws_json1_1Users
 */
const de_Users = (output: any, context: __SerdeContext): User[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_User(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ValidationException
 */
const de_ValidationException = (output: any, context: __SerdeContext): ValidationException => {
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
