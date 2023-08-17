// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
  CreateGroupRequest,
  CreateUserRequest,
  DeleteGroupMembershipRequest,
  DeleteGroupRequest,
  DeleteUserRequest,
  DescribeGroupMembershipRequest,
  DescribeGroupRequest,
  DescribeUserRequest,
  Email,
  ExternalId,
  Filter,
  GetGroupIdRequest,
  GetGroupMembershipIdRequest,
  GetUserIdRequest,
  InternalServerException,
  IsMemberInGroupsRequest,
  ListGroupMembershipsForMemberRequest,
  ListGroupMembershipsRequest,
  ListGroupsRequest,
  ListUsersRequest,
  MemberId,
  Name,
  PhoneNumber,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  UniqueAttribute,
  UpdateGroupRequest,
  UpdateUserRequest,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_json1_1CreateGroupCommand
 */
export const se_CreateGroupCommand = async (
  input: CreateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateGroupMembershipCommand
 */
export const se_CreateGroupMembershipCommand = async (
  input: CreateGroupMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateGroupMembership");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateUserCommand
 */
export const se_CreateUserCommand = async (
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateUser");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteGroupCommand
 */
export const se_DeleteGroupCommand = async (
  input: DeleteGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteGroupMembershipCommand
 */
export const se_DeleteGroupMembershipCommand = async (
  input: DeleteGroupMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteGroupMembership");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteUserCommand
 */
export const se_DeleteUserCommand = async (
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteUser");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeGroupCommand
 */
export const se_DescribeGroupCommand = async (
  input: DescribeGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeGroupMembershipCommand
 */
export const se_DescribeGroupMembershipCommand = async (
  input: DescribeGroupMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeGroupMembership");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeUserCommand
 */
export const se_DescribeUserCommand = async (
  input: DescribeUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeUser");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetGroupIdCommand
 */
export const se_GetGroupIdCommand = async (
  input: GetGroupIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetGroupId");
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
  const headers: __HeaderBag = sharedHeaders("GetGroupMembershipId");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetUserIdCommand
 */
export const se_GetUserIdCommand = async (
  input: GetUserIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetUserId");
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
  const headers: __HeaderBag = sharedHeaders("IsMemberInGroups");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListGroupMembershipsCommand
 */
export const se_ListGroupMembershipsCommand = async (
  input: ListGroupMembershipsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListGroupMemberships");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListGroupMembershipsForMemberCommand
 */
export const se_ListGroupMembershipsForMemberCommand = async (
  input: ListGroupMembershipsForMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListGroupMembershipsForMember");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListGroupsCommand
 */
export const se_ListGroupsCommand = async (
  input: ListGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListGroups");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListUsersCommand
 */
export const se_ListUsersCommand = async (
  input: ListUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListUsers");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateGroupCommand
 */
export const se_UpdateGroupCommand = async (
  input: UpdateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateGroup");
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
  const headers: __HeaderBag = sharedHeaders("UpdateUser");
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
  contents = _json(data);
  const response: CreateGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateGroupMembershipCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteGroupMembershipCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeGroupMembershipCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetGroupIdCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetGroupMembershipIdCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetUserIdCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: IsMemberInGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListGroupMembershipsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListGroupMembershipsForMemberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_Address omitted.

// se_Addresses omitted.

/**
 * serializeAws_json1_1AlternateIdentifier
 */
const se_AlternateIdentifier = (input: AlternateIdentifier, context: __SerdeContext): any => {
  return AlternateIdentifier.visit(input, {
    ExternalId: (value) => ({ ExternalId: _json(value) }),
    UniqueAttribute: (value) => ({ UniqueAttribute: se_UniqueAttribute(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_json1_1AttributeOperation
 */
const se_AttributeOperation = (input: AttributeOperation, context: __SerdeContext): any => {
  return take(input, {
    AttributePath: [],
    AttributeValue: (_) => se_AttributeValue(_, context),
  });
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

// se_CreateGroupMembershipRequest omitted.

// se_CreateGroupRequest omitted.

// se_CreateUserRequest omitted.

// se_DeleteGroupMembershipRequest omitted.

// se_DeleteGroupRequest omitted.

// se_DeleteUserRequest omitted.

// se_DescribeGroupMembershipRequest omitted.

// se_DescribeGroupRequest omitted.

// se_DescribeUserRequest omitted.

// se_Email omitted.

// se_Emails omitted.

// se_ExternalId omitted.

// se_Filter omitted.

// se_Filters omitted.

/**
 * serializeAws_json1_1GetGroupIdRequest
 */
const se_GetGroupIdRequest = (input: GetGroupIdRequest, context: __SerdeContext): any => {
  return take(input, {
    AlternateIdentifier: (_) => se_AlternateIdentifier(_, context),
    IdentityStoreId: [],
  });
};

// se_GetGroupMembershipIdRequest omitted.

/**
 * serializeAws_json1_1GetUserIdRequest
 */
const se_GetUserIdRequest = (input: GetUserIdRequest, context: __SerdeContext): any => {
  return take(input, {
    AlternateIdentifier: (_) => se_AlternateIdentifier(_, context),
    IdentityStoreId: [],
  });
};

// se_GroupIds omitted.

// se_IsMemberInGroupsRequest omitted.

// se_ListGroupMembershipsForMemberRequest omitted.

// se_ListGroupMembershipsRequest omitted.

// se_ListGroupsRequest omitted.

// se_ListUsersRequest omitted.

// se_MemberId omitted.

// se_Name omitted.

// se_PhoneNumber omitted.

// se_PhoneNumbers omitted.

/**
 * serializeAws_json1_1UniqueAttribute
 */
const se_UniqueAttribute = (input: UniqueAttribute, context: __SerdeContext): any => {
  return take(input, {
    AttributePath: [],
    AttributeValue: (_) => se_AttributeValue(_, context),
  });
};

/**
 * serializeAws_json1_1UpdateGroupRequest
 */
const se_UpdateGroupRequest = (input: UpdateGroupRequest, context: __SerdeContext): any => {
  return take(input, {
    GroupId: [],
    IdentityStoreId: [],
    Operations: (_) => se_AttributeOperations(_, context),
  });
};

/**
 * serializeAws_json1_1UpdateUserRequest
 */
const se_UpdateUserRequest = (input: UpdateUserRequest, context: __SerdeContext): any => {
  return take(input, {
    IdentityStoreId: [],
    Operations: (_) => se_AttributeOperations(_, context),
    UserId: [],
  });
};

// de_AccessDeniedException omitted.

// de_Address omitted.

// de_Addresses omitted.

// de_ConflictException omitted.

// de_CreateGroupMembershipResponse omitted.

// de_CreateGroupResponse omitted.

// de_CreateUserResponse omitted.

// de_DeleteGroupMembershipResponse omitted.

// de_DeleteGroupResponse omitted.

// de_DeleteUserResponse omitted.

// de_DescribeGroupMembershipResponse omitted.

// de_DescribeGroupResponse omitted.

// de_DescribeUserResponse omitted.

// de_Email omitted.

// de_Emails omitted.

// de_ExternalId omitted.

// de_ExternalIds omitted.

// de_GetGroupIdResponse omitted.

// de_GetGroupMembershipIdResponse omitted.

// de_GetUserIdResponse omitted.

// de_Group omitted.

// de_GroupMembership omitted.

// de_GroupMembershipExistenceResult omitted.

// de_GroupMembershipExistenceResults omitted.

// de_GroupMemberships omitted.

// de_Groups omitted.

// de_InternalServerException omitted.

// de_IsMemberInGroupsResponse omitted.

// de_ListGroupMembershipsForMemberResponse omitted.

// de_ListGroupMembershipsResponse omitted.

// de_ListGroupsResponse omitted.

// de_ListUsersResponse omitted.

// de_MemberId omitted.

// de_Name omitted.

// de_PhoneNumber omitted.

// de_PhoneNumbers omitted.

// de_ResourceNotFoundException omitted.

// de_ServiceQuotaExceededException omitted.

// de_ThrottlingException omitted.

// de_UpdateGroupResponse omitted.

// de_UpdateUserResponse omitted.

// de_User omitted.

// de_Users omitted.

// de_ValidationException omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const throwDefaultError = withBaseException(__BaseException);
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `AWSIdentityStore.${operation}`,
  };
}

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
