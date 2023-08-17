// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  AssociateTeamMemberCommandInput,
  AssociateTeamMemberCommandOutput,
} from "../commands/AssociateTeamMemberCommand";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "../commands/CreateProjectCommand";
import { CreateUserProfileCommandInput, CreateUserProfileCommandOutput } from "../commands/CreateUserProfileCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "../commands/DeleteProjectCommand";
import { DeleteUserProfileCommandInput, DeleteUserProfileCommandOutput } from "../commands/DeleteUserProfileCommand";
import { DescribeProjectCommandInput, DescribeProjectCommandOutput } from "../commands/DescribeProjectCommand";
import {
  DescribeUserProfileCommandInput,
  DescribeUserProfileCommandOutput,
} from "../commands/DescribeUserProfileCommand";
import {
  DisassociateTeamMemberCommandInput,
  DisassociateTeamMemberCommandOutput,
} from "../commands/DisassociateTeamMemberCommand";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "../commands/ListProjectsCommand";
import { ListResourcesCommandInput, ListResourcesCommandOutput } from "../commands/ListResourcesCommand";
import { ListTagsForProjectCommandInput, ListTagsForProjectCommandOutput } from "../commands/ListTagsForProjectCommand";
import { ListTeamMembersCommandInput, ListTeamMembersCommandOutput } from "../commands/ListTeamMembersCommand";
import { ListUserProfilesCommandInput, ListUserProfilesCommandOutput } from "../commands/ListUserProfilesCommand";
import { TagProjectCommandInput, TagProjectCommandOutput } from "../commands/TagProjectCommand";
import { UntagProjectCommandInput, UntagProjectCommandOutput } from "../commands/UntagProjectCommand";
import { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "../commands/UpdateProjectCommand";
import { UpdateTeamMemberCommandInput, UpdateTeamMemberCommandOutput } from "../commands/UpdateTeamMemberCommand";
import { UpdateUserProfileCommandInput, UpdateUserProfileCommandOutput } from "../commands/UpdateUserProfileCommand";
import { CodeStarServiceException as __BaseException } from "../models/CodeStarServiceException";
import {
  AssociateTeamMemberRequest,
  Code,
  CodeCommitCodeDestination,
  CodeDestination,
  CodeSource,
  ConcurrentModificationException,
  CreateProjectRequest,
  CreateUserProfileRequest,
  CreateUserProfileResult,
  DeleteProjectRequest,
  DeleteUserProfileRequest,
  DescribeProjectRequest,
  DescribeProjectResult,
  DescribeUserProfileRequest,
  DescribeUserProfileResult,
  DisassociateTeamMemberRequest,
  GitHubCodeDestination,
  InvalidNextTokenException,
  InvalidServiceRoleException,
  LimitExceededException,
  ListProjectsRequest,
  ListResourcesRequest,
  ListTagsForProjectRequest,
  ListTeamMembersRequest,
  ListUserProfilesRequest,
  ProjectAlreadyExistsException,
  ProjectConfigurationException,
  ProjectCreationFailedException,
  ProjectNotFoundException,
  S3Location,
  TagProjectRequest,
  TeamMemberAlreadyAssociatedException,
  TeamMemberNotFoundException,
  Toolchain,
  ToolchainSource,
  UntagProjectRequest,
  UpdateProjectRequest,
  UpdateTeamMemberRequest,
  UpdateUserProfileRequest,
  UpdateUserProfileResult,
  UserProfileAlreadyExistsException,
  UserProfileNotFoundException,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_json1_1AssociateTeamMemberCommand
 */
export const se_AssociateTeamMemberCommand = async (
  input: AssociateTeamMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateTeamMember");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateProjectCommand
 */
export const se_CreateProjectCommand = async (
  input: CreateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateProject");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateUserProfileCommand
 */
export const se_CreateUserProfileCommand = async (
  input: CreateUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateUserProfile");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteProjectCommand
 */
export const se_DeleteProjectCommand = async (
  input: DeleteProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteProject");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteUserProfileCommand
 */
export const se_DeleteUserProfileCommand = async (
  input: DeleteUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteUserProfile");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeProjectCommand
 */
export const se_DescribeProjectCommand = async (
  input: DescribeProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeProject");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeUserProfileCommand
 */
export const se_DescribeUserProfileCommand = async (
  input: DescribeUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeUserProfile");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateTeamMemberCommand
 */
export const se_DisassociateTeamMemberCommand = async (
  input: DisassociateTeamMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateTeamMember");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListProjectsCommand
 */
export const se_ListProjectsCommand = async (
  input: ListProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListProjects");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListResourcesCommand
 */
export const se_ListResourcesCommand = async (
  input: ListResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListResources");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForProjectCommand
 */
export const se_ListTagsForProjectCommand = async (
  input: ListTagsForProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForProject");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTeamMembersCommand
 */
export const se_ListTeamMembersCommand = async (
  input: ListTeamMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTeamMembers");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListUserProfilesCommand
 */
export const se_ListUserProfilesCommand = async (
  input: ListUserProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListUserProfiles");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagProjectCommand
 */
export const se_TagProjectCommand = async (
  input: TagProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagProject");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagProjectCommand
 */
export const se_UntagProjectCommand = async (
  input: UntagProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagProject");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateProjectCommand
 */
export const se_UpdateProjectCommand = async (
  input: UpdateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateProject");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateTeamMemberCommand
 */
export const se_UpdateTeamMemberCommand = async (
  input: UpdateTeamMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateTeamMember");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateUserProfileCommand
 */
export const se_UpdateUserProfileCommand = async (
  input: UpdateUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateUserProfile");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AssociateTeamMemberCommand
 */
export const de_AssociateTeamMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateTeamMemberCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateTeamMemberCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AssociateTeamMemberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AssociateTeamMemberCommandError
 */
const de_AssociateTeamMemberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateTeamMemberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.codestar#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidServiceRoleException":
    case "com.amazonaws.codestar#InvalidServiceRoleException":
      throw await de_InvalidServiceRoleExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.codestar#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ProjectConfigurationException":
    case "com.amazonaws.codestar#ProjectConfigurationException":
      throw await de_ProjectConfigurationExceptionRes(parsedOutput, context);
    case "ProjectNotFoundException":
    case "com.amazonaws.codestar#ProjectNotFoundException":
      throw await de_ProjectNotFoundExceptionRes(parsedOutput, context);
    case "TeamMemberAlreadyAssociatedException":
    case "com.amazonaws.codestar#TeamMemberAlreadyAssociatedException":
      throw await de_TeamMemberAlreadyAssociatedExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
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
 * deserializeAws_json1_1CreateProjectCommand
 */
export const de_CreateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateProjectCommandError
 */
const de_CreateProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.codestar#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidServiceRoleException":
    case "com.amazonaws.codestar#InvalidServiceRoleException":
      throw await de_InvalidServiceRoleExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.codestar#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ProjectAlreadyExistsException":
    case "com.amazonaws.codestar#ProjectAlreadyExistsException":
      throw await de_ProjectAlreadyExistsExceptionRes(parsedOutput, context);
    case "ProjectConfigurationException":
    case "com.amazonaws.codestar#ProjectConfigurationException":
      throw await de_ProjectConfigurationExceptionRes(parsedOutput, context);
    case "ProjectCreationFailedException":
    case "com.amazonaws.codestar#ProjectCreationFailedException":
      throw await de_ProjectCreationFailedExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
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
 * deserializeAws_json1_1CreateUserProfileCommand
 */
export const de_CreateUserProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateUserProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateUserProfileResult(data, context);
  const response: CreateUserProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateUserProfileCommandError
 */
const de_CreateUserProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "UserProfileAlreadyExistsException":
    case "com.amazonaws.codestar#UserProfileAlreadyExistsException":
      throw await de_UserProfileAlreadyExistsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
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
 * deserializeAws_json1_1DeleteProjectCommand
 */
export const de_DeleteProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteProjectCommandError
 */
const de_DeleteProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.codestar#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidServiceRoleException":
    case "com.amazonaws.codestar#InvalidServiceRoleException":
      throw await de_InvalidServiceRoleExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
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
 * deserializeAws_json1_1DeleteUserProfileCommand
 */
export const de_DeleteUserProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteUserProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteUserProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteUserProfileCommandError
 */
const de_DeleteUserProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
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
 * deserializeAws_json1_1DescribeProjectCommand
 */
export const de_DescribeProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeProjectResult(data, context);
  const response: DescribeProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeProjectCommandError
 */
const de_DescribeProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.codestar#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidServiceRoleException":
    case "com.amazonaws.codestar#InvalidServiceRoleException":
      throw await de_InvalidServiceRoleExceptionRes(parsedOutput, context);
    case "ProjectConfigurationException":
    case "com.amazonaws.codestar#ProjectConfigurationException":
      throw await de_ProjectConfigurationExceptionRes(parsedOutput, context);
    case "ProjectNotFoundException":
    case "com.amazonaws.codestar#ProjectNotFoundException":
      throw await de_ProjectNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
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
 * deserializeAws_json1_1DescribeUserProfileCommand
 */
export const de_DescribeUserProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeUserProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeUserProfileResult(data, context);
  const response: DescribeUserProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeUserProfileCommandError
 */
const de_DescribeUserProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "UserProfileNotFoundException":
    case "com.amazonaws.codestar#UserProfileNotFoundException":
      throw await de_UserProfileNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
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
 * deserializeAws_json1_1DisassociateTeamMemberCommand
 */
export const de_DisassociateTeamMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateTeamMemberCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateTeamMemberCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DisassociateTeamMemberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DisassociateTeamMemberCommandError
 */
const de_DisassociateTeamMemberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateTeamMemberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.codestar#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidServiceRoleException":
    case "com.amazonaws.codestar#InvalidServiceRoleException":
      throw await de_InvalidServiceRoleExceptionRes(parsedOutput, context);
    case "ProjectNotFoundException":
    case "com.amazonaws.codestar#ProjectNotFoundException":
      throw await de_ProjectNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
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
 * deserializeAws_json1_1ListProjectsCommand
 */
export const de_ListProjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListProjectsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListProjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListProjectsCommandError
 */
const de_ListProjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codestar#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
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
 * deserializeAws_json1_1ListResourcesCommand
 */
export const de_ListResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListResourcesCommandError
 */
const de_ListResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codestar#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "ProjectNotFoundException":
    case "com.amazonaws.codestar#ProjectNotFoundException":
      throw await de_ProjectNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
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
 * deserializeAws_json1_1ListTagsForProjectCommand
 */
export const de_ListTagsForProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTagsForProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTagsForProjectCommandError
 */
const de_ListTagsForProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codestar#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "ProjectNotFoundException":
    case "com.amazonaws.codestar#ProjectNotFoundException":
      throw await de_ProjectNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
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
 * deserializeAws_json1_1ListTeamMembersCommand
 */
export const de_ListTeamMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTeamMembersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTeamMembersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTeamMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTeamMembersCommandError
 */
const de_ListTeamMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTeamMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codestar#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "ProjectNotFoundException":
    case "com.amazonaws.codestar#ProjectNotFoundException":
      throw await de_ProjectNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
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
 * deserializeAws_json1_1ListUserProfilesCommand
 */
export const de_ListUserProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserProfilesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListUserProfilesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListUserProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListUserProfilesCommandError
 */
const de_ListUserProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codestar#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
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
 * deserializeAws_json1_1TagProjectCommand
 */
export const de_TagProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: TagProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1TagProjectCommandError
 */
const de_TagProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.codestar#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.codestar#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ProjectNotFoundException":
    case "com.amazonaws.codestar#ProjectNotFoundException":
      throw await de_ProjectNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
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
 * deserializeAws_json1_1UntagProjectCommand
 */
export const de_UntagProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UntagProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UntagProjectCommandError
 */
const de_UntagProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.codestar#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.codestar#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ProjectNotFoundException":
    case "com.amazonaws.codestar#ProjectNotFoundException":
      throw await de_ProjectNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
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
 * deserializeAws_json1_1UpdateProjectCommand
 */
export const de_UpdateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateProjectCommandError
 */
const de_UpdateProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ProjectNotFoundException":
    case "com.amazonaws.codestar#ProjectNotFoundException":
      throw await de_ProjectNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
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
 * deserializeAws_json1_1UpdateTeamMemberCommand
 */
export const de_UpdateTeamMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTeamMemberCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateTeamMemberCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateTeamMemberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateTeamMemberCommandError
 */
const de_UpdateTeamMemberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTeamMemberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.codestar#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidServiceRoleException":
    case "com.amazonaws.codestar#InvalidServiceRoleException":
      throw await de_InvalidServiceRoleExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.codestar#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ProjectConfigurationException":
    case "com.amazonaws.codestar#ProjectConfigurationException":
      throw await de_ProjectConfigurationExceptionRes(parsedOutput, context);
    case "ProjectNotFoundException":
    case "com.amazonaws.codestar#ProjectNotFoundException":
      throw await de_ProjectNotFoundExceptionRes(parsedOutput, context);
    case "TeamMemberNotFoundException":
    case "com.amazonaws.codestar#TeamMemberNotFoundException":
      throw await de_TeamMemberNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
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
 * deserializeAws_json1_1UpdateUserProfileCommand
 */
export const de_UpdateUserProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateUserProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateUserProfileResult(data, context);
  const response: UpdateUserProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateUserProfileCommandError
 */
const de_UpdateUserProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "UserProfileNotFoundException":
    case "com.amazonaws.codestar#UserProfileNotFoundException":
      throw await de_UserProfileNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
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
 * deserializeAws_json1_1ConcurrentModificationExceptionRes
 */
const de_ConcurrentModificationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ConcurrentModificationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidNextTokenExceptionRes
 */
const de_InvalidNextTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidNextTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidServiceRoleExceptionRes
 */
const de_InvalidServiceRoleExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidServiceRoleException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidServiceRoleException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ProjectAlreadyExistsExceptionRes
 */
const de_ProjectAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ProjectAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ProjectAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ProjectConfigurationExceptionRes
 */
const de_ProjectConfigurationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ProjectConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ProjectConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ProjectCreationFailedExceptionRes
 */
const de_ProjectCreationFailedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ProjectCreationFailedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ProjectCreationFailedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ProjectNotFoundExceptionRes
 */
const de_ProjectNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ProjectNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ProjectNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TeamMemberAlreadyAssociatedExceptionRes
 */
const de_TeamMemberAlreadyAssociatedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TeamMemberAlreadyAssociatedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new TeamMemberAlreadyAssociatedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TeamMemberNotFoundExceptionRes
 */
const de_TeamMemberNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TeamMemberNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new TeamMemberNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UserProfileAlreadyExistsExceptionRes
 */
const de_UserProfileAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UserProfileAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new UserProfileAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UserProfileNotFoundExceptionRes
 */
const de_UserProfileNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UserProfileNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new UserProfileNotFoundException({
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

// se_AssociateTeamMemberRequest omitted.

// se_Code omitted.

// se_CodeCommitCodeDestination omitted.

// se_CodeDestination omitted.

// se_CodeSource omitted.

// se_CreateProjectRequest omitted.

// se_CreateUserProfileRequest omitted.

// se_DeleteProjectRequest omitted.

// se_DeleteUserProfileRequest omitted.

// se_DescribeProjectRequest omitted.

// se_DescribeUserProfileRequest omitted.

// se_DisassociateTeamMemberRequest omitted.

// se_GitHubCodeDestination omitted.

// se_ListProjectsRequest omitted.

// se_ListResourcesRequest omitted.

// se_ListTagsForProjectRequest omitted.

// se_ListTeamMembersRequest omitted.

// se_ListUserProfilesRequest omitted.

// se_S3Location omitted.

// se_SourceCode omitted.

// se_TagKeys omitted.

// se_TagProjectRequest omitted.

// se_Tags omitted.

// se_TemplateParameterMap omitted.

// se_Toolchain omitted.

// se_ToolchainSource omitted.

// se_UntagProjectRequest omitted.

// se_UpdateProjectRequest omitted.

// se_UpdateTeamMemberRequest omitted.

// se_UpdateUserProfileRequest omitted.

// de_AssociateTeamMemberResult omitted.

// de_ConcurrentModificationException omitted.

// de_CreateProjectResult omitted.

/**
 * deserializeAws_json1_1CreateUserProfileResult
 */
const de_CreateUserProfileResult = (output: any, context: __SerdeContext): CreateUserProfileResult => {
  return take(output, {
    createdTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    displayName: __expectString,
    emailAddress: __expectString,
    lastModifiedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    sshPublicKey: __expectString,
    userArn: __expectString,
  }) as any;
};

// de_DeleteProjectResult omitted.

// de_DeleteUserProfileResult omitted.

/**
 * deserializeAws_json1_1DescribeProjectResult
 */
const de_DescribeProjectResult = (output: any, context: __SerdeContext): DescribeProjectResult => {
  return take(output, {
    arn: __expectString,
    clientRequestToken: __expectString,
    createdTimeStamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    id: __expectString,
    name: __expectString,
    projectTemplateId: __expectString,
    stackId: __expectString,
    status: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeUserProfileResult
 */
const de_DescribeUserProfileResult = (output: any, context: __SerdeContext): DescribeUserProfileResult => {
  return take(output, {
    createdTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    displayName: __expectString,
    emailAddress: __expectString,
    lastModifiedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    sshPublicKey: __expectString,
    userArn: __expectString,
  }) as any;
};

// de_DisassociateTeamMemberResult omitted.

// de_InvalidNextTokenException omitted.

// de_InvalidServiceRoleException omitted.

// de_LimitExceededException omitted.

// de_ListProjectsResult omitted.

// de_ListResourcesResult omitted.

// de_ListTagsForProjectResult omitted.

// de_ListTeamMembersResult omitted.

// de_ListUserProfilesResult omitted.

// de_ProjectAlreadyExistsException omitted.

// de_ProjectConfigurationException omitted.

// de_ProjectCreationFailedException omitted.

// de_ProjectNotFoundException omitted.

// de_ProjectsList omitted.

// de_ProjectStatus omitted.

// de_ProjectSummary omitted.

// de_Resource omitted.

// de_ResourcesResult omitted.

// de_TagProjectResult omitted.

// de_Tags omitted.

// de_TeamMember omitted.

// de_TeamMemberAlreadyAssociatedException omitted.

// de_TeamMemberNotFoundException omitted.

// de_TeamMemberResult omitted.

// de_UntagProjectResult omitted.

// de_UpdateProjectResult omitted.

// de_UpdateTeamMemberResult omitted.

/**
 * deserializeAws_json1_1UpdateUserProfileResult
 */
const de_UpdateUserProfileResult = (output: any, context: __SerdeContext): UpdateUserProfileResult => {
  return take(output, {
    createdTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    displayName: __expectString,
    emailAddress: __expectString,
    lastModifiedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    sshPublicKey: __expectString,
    userArn: __expectString,
  }) as any;
};

// de_UserProfileAlreadyExistsException omitted.

// de_UserProfileNotFoundException omitted.

// de_UserProfilesList omitted.

// de_UserProfileSummary omitted.

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
    "x-amz-target": `CodeStar_20170419.${operation}`,
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
