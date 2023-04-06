// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
  AssociateTeamMemberResult,
  Code,
  CodeCommitCodeDestination,
  CodeDestination,
  CodeSource,
  ConcurrentModificationException,
  CreateProjectRequest,
  CreateProjectResult,
  CreateUserProfileRequest,
  CreateUserProfileResult,
  DeleteProjectRequest,
  DeleteProjectResult,
  DeleteUserProfileRequest,
  DeleteUserProfileResult,
  DescribeProjectRequest,
  DescribeProjectResult,
  DescribeUserProfileRequest,
  DescribeUserProfileResult,
  DisassociateTeamMemberRequest,
  DisassociateTeamMemberResult,
  GitHubCodeDestination,
  InvalidNextTokenException,
  InvalidServiceRoleException,
  LimitExceededException,
  ListProjectsRequest,
  ListProjectsResult,
  ListResourcesRequest,
  ListResourcesResult,
  ListTagsForProjectRequest,
  ListTagsForProjectResult,
  ListTeamMembersRequest,
  ListTeamMembersResult,
  ListUserProfilesRequest,
  ListUserProfilesResult,
  ProjectAlreadyExistsException,
  ProjectConfigurationException,
  ProjectCreationFailedException,
  ProjectNotFoundException,
  ProjectStatus,
  ProjectSummary,
  Resource,
  S3Location,
  TagProjectRequest,
  TagProjectResult,
  TeamMember,
  TeamMemberAlreadyAssociatedException,
  TeamMemberNotFoundException,
  Toolchain,
  ToolchainSource,
  UntagProjectRequest,
  UntagProjectResult,
  UpdateProjectRequest,
  UpdateProjectResult,
  UpdateTeamMemberRequest,
  UpdateTeamMemberResult,
  UpdateUserProfileRequest,
  UpdateUserProfileResult,
  UserProfileAlreadyExistsException,
  UserProfileNotFoundException,
  UserProfileSummary,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_json1_1AssociateTeamMemberCommand
 */
export const se_AssociateTeamMemberCommand = async (
  input: AssociateTeamMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeStar_20170419.AssociateTeamMember",
  };
  let body: any;
  body = JSON.stringify(se_AssociateTeamMemberRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateProjectCommand
 */
export const se_CreateProjectCommand = async (
  input: CreateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeStar_20170419.CreateProject",
  };
  let body: any;
  body = JSON.stringify(se_CreateProjectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateUserProfileCommand
 */
export const se_CreateUserProfileCommand = async (
  input: CreateUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeStar_20170419.CreateUserProfile",
  };
  let body: any;
  body = JSON.stringify(se_CreateUserProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteProjectCommand
 */
export const se_DeleteProjectCommand = async (
  input: DeleteProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeStar_20170419.DeleteProject",
  };
  let body: any;
  body = JSON.stringify(se_DeleteProjectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteUserProfileCommand
 */
export const se_DeleteUserProfileCommand = async (
  input: DeleteUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeStar_20170419.DeleteUserProfile",
  };
  let body: any;
  body = JSON.stringify(se_DeleteUserProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeProjectCommand
 */
export const se_DescribeProjectCommand = async (
  input: DescribeProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeStar_20170419.DescribeProject",
  };
  let body: any;
  body = JSON.stringify(se_DescribeProjectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeUserProfileCommand
 */
export const se_DescribeUserProfileCommand = async (
  input: DescribeUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeStar_20170419.DescribeUserProfile",
  };
  let body: any;
  body = JSON.stringify(se_DescribeUserProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateTeamMemberCommand
 */
export const se_DisassociateTeamMemberCommand = async (
  input: DisassociateTeamMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeStar_20170419.DisassociateTeamMember",
  };
  let body: any;
  body = JSON.stringify(se_DisassociateTeamMemberRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListProjectsCommand
 */
export const se_ListProjectsCommand = async (
  input: ListProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeStar_20170419.ListProjects",
  };
  let body: any;
  body = JSON.stringify(se_ListProjectsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListResourcesCommand
 */
export const se_ListResourcesCommand = async (
  input: ListResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeStar_20170419.ListResources",
  };
  let body: any;
  body = JSON.stringify(se_ListResourcesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForProjectCommand
 */
export const se_ListTagsForProjectCommand = async (
  input: ListTagsForProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeStar_20170419.ListTagsForProject",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForProjectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTeamMembersCommand
 */
export const se_ListTeamMembersCommand = async (
  input: ListTeamMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeStar_20170419.ListTeamMembers",
  };
  let body: any;
  body = JSON.stringify(se_ListTeamMembersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListUserProfilesCommand
 */
export const se_ListUserProfilesCommand = async (
  input: ListUserProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeStar_20170419.ListUserProfiles",
  };
  let body: any;
  body = JSON.stringify(se_ListUserProfilesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagProjectCommand
 */
export const se_TagProjectCommand = async (
  input: TagProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeStar_20170419.TagProject",
  };
  let body: any;
  body = JSON.stringify(se_TagProjectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagProjectCommand
 */
export const se_UntagProjectCommand = async (
  input: UntagProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeStar_20170419.UntagProject",
  };
  let body: any;
  body = JSON.stringify(se_UntagProjectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateProjectCommand
 */
export const se_UpdateProjectCommand = async (
  input: UpdateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeStar_20170419.UpdateProject",
  };
  let body: any;
  body = JSON.stringify(se_UpdateProjectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateTeamMemberCommand
 */
export const se_UpdateTeamMemberCommand = async (
  input: UpdateTeamMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeStar_20170419.UpdateTeamMember",
  };
  let body: any;
  body = JSON.stringify(se_UpdateTeamMemberRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateUserProfileCommand
 */
export const se_UpdateUserProfileCommand = async (
  input: UpdateUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeStar_20170419.UpdateUserProfile",
  };
  let body: any;
  body = JSON.stringify(se_UpdateUserProfileRequest(input, context));
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
  contents = de_AssociateTeamMemberResult(data, context);
  const response: AssociateTeamMemberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateProjectResult(data, context);
  const response: CreateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteProjectResult(data, context);
  const response: DeleteProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteUserProfileResult(data, context);
  const response: DeleteUserProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DisassociateTeamMemberResult(data, context);
  const response: DisassociateTeamMemberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListProjectsResult(data, context);
  const response: ListProjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListResourcesResult(data, context);
  const response: ListResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListTagsForProjectResult(data, context);
  const response: ListTagsForProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListTeamMembersResult(data, context);
  const response: ListTeamMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListUserProfilesResult(data, context);
  const response: ListUserProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_TagProjectResult(data, context);
  const response: TagProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UntagProjectResult(data, context);
  const response: UntagProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UpdateProjectResult(data, context);
  const response: UpdateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UpdateTeamMemberResult(data, context);
  const response: UpdateTeamMemberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  const deserialized: any = de_ConcurrentModificationException(body, context);
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
  const deserialized: any = de_InvalidNextTokenException(body, context);
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
  const deserialized: any = de_InvalidServiceRoleException(body, context);
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
  const deserialized: any = de_LimitExceededException(body, context);
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
  const deserialized: any = de_ProjectAlreadyExistsException(body, context);
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
  const deserialized: any = de_ProjectConfigurationException(body, context);
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
  const deserialized: any = de_ProjectCreationFailedException(body, context);
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
  const deserialized: any = de_ProjectNotFoundException(body, context);
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
  const deserialized: any = de_TeamMemberAlreadyAssociatedException(body, context);
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
  const deserialized: any = de_TeamMemberNotFoundException(body, context);
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
  const deserialized: any = de_UserProfileAlreadyExistsException(body, context);
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
  const deserialized: any = de_UserProfileNotFoundException(body, context);
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
  const deserialized: any = de_ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AssociateTeamMemberRequest
 */
const se_AssociateTeamMemberRequest = (input: AssociateTeamMemberRequest, context: __SerdeContext): any => {
  return {
    ...(input.clientRequestToken != null && { clientRequestToken: input.clientRequestToken }),
    ...(input.projectId != null && { projectId: input.projectId }),
    ...(input.projectRole != null && { projectRole: input.projectRole }),
    ...(input.remoteAccessAllowed != null && { remoteAccessAllowed: input.remoteAccessAllowed }),
    ...(input.userArn != null && { userArn: input.userArn }),
  };
};

/**
 * serializeAws_json1_1Code
 */
const se_Code = (input: Code, context: __SerdeContext): any => {
  return {
    ...(input.destination != null && { destination: se_CodeDestination(input.destination, context) }),
    ...(input.source != null && { source: se_CodeSource(input.source, context) }),
  };
};

/**
 * serializeAws_json1_1CodeCommitCodeDestination
 */
const se_CodeCommitCodeDestination = (input: CodeCommitCodeDestination, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_1CodeDestination
 */
const se_CodeDestination = (input: CodeDestination, context: __SerdeContext): any => {
  return {
    ...(input.codeCommit != null && { codeCommit: se_CodeCommitCodeDestination(input.codeCommit, context) }),
    ...(input.gitHub != null && { gitHub: se_GitHubCodeDestination(input.gitHub, context) }),
  };
};

/**
 * serializeAws_json1_1CodeSource
 */
const se_CodeSource = (input: CodeSource, context: __SerdeContext): any => {
  return {
    ...(input.s3 != null && { s3: se_S3Location(input.s3, context) }),
  };
};

/**
 * serializeAws_json1_1CreateProjectRequest
 */
const se_CreateProjectRequest = (input: CreateProjectRequest, context: __SerdeContext): any => {
  return {
    ...(input.clientRequestToken != null && { clientRequestToken: input.clientRequestToken }),
    ...(input.description != null && { description: input.description }),
    ...(input.id != null && { id: input.id }),
    ...(input.name != null && { name: input.name }),
    ...(input.sourceCode != null && { sourceCode: se_SourceCode(input.sourceCode, context) }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
    ...(input.toolchain != null && { toolchain: se_Toolchain(input.toolchain, context) }),
  };
};

/**
 * serializeAws_json1_1CreateUserProfileRequest
 */
const se_CreateUserProfileRequest = (input: CreateUserProfileRequest, context: __SerdeContext): any => {
  return {
    ...(input.displayName != null && { displayName: input.displayName }),
    ...(input.emailAddress != null && { emailAddress: input.emailAddress }),
    ...(input.sshPublicKey != null && { sshPublicKey: input.sshPublicKey }),
    ...(input.userArn != null && { userArn: input.userArn }),
  };
};

/**
 * serializeAws_json1_1DeleteProjectRequest
 */
const se_DeleteProjectRequest = (input: DeleteProjectRequest, context: __SerdeContext): any => {
  return {
    ...(input.clientRequestToken != null && { clientRequestToken: input.clientRequestToken }),
    ...(input.deleteStack != null && { deleteStack: input.deleteStack }),
    ...(input.id != null && { id: input.id }),
  };
};

/**
 * serializeAws_json1_1DeleteUserProfileRequest
 */
const se_DeleteUserProfileRequest = (input: DeleteUserProfileRequest, context: __SerdeContext): any => {
  return {
    ...(input.userArn != null && { userArn: input.userArn }),
  };
};

/**
 * serializeAws_json1_1DescribeProjectRequest
 */
const se_DescribeProjectRequest = (input: DescribeProjectRequest, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
  };
};

/**
 * serializeAws_json1_1DescribeUserProfileRequest
 */
const se_DescribeUserProfileRequest = (input: DescribeUserProfileRequest, context: __SerdeContext): any => {
  return {
    ...(input.userArn != null && { userArn: input.userArn }),
  };
};

/**
 * serializeAws_json1_1DisassociateTeamMemberRequest
 */
const se_DisassociateTeamMemberRequest = (input: DisassociateTeamMemberRequest, context: __SerdeContext): any => {
  return {
    ...(input.projectId != null && { projectId: input.projectId }),
    ...(input.userArn != null && { userArn: input.userArn }),
  };
};

/**
 * serializeAws_json1_1GitHubCodeDestination
 */
const se_GitHubCodeDestination = (input: GitHubCodeDestination, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.issuesEnabled != null && { issuesEnabled: input.issuesEnabled }),
    ...(input.name != null && { name: input.name }),
    ...(input.owner != null && { owner: input.owner }),
    ...(input.privateRepository != null && { privateRepository: input.privateRepository }),
    ...(input.token != null && { token: input.token }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_1ListProjectsRequest
 */
const se_ListProjectsRequest = (input: ListProjectsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListResourcesRequest
 */
const se_ListResourcesRequest = (input: ListResourcesRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.projectId != null && { projectId: input.projectId }),
  };
};

/**
 * serializeAws_json1_1ListTagsForProjectRequest
 */
const se_ListTagsForProjectRequest = (input: ListTagsForProjectRequest, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListTeamMembersRequest
 */
const se_ListTeamMembersRequest = (input: ListTeamMembersRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.projectId != null && { projectId: input.projectId }),
  };
};

/**
 * serializeAws_json1_1ListUserProfilesRequest
 */
const se_ListUserProfilesRequest = (input: ListUserProfilesRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1S3Location
 */
const se_S3Location = (input: S3Location, context: __SerdeContext): any => {
  return {
    ...(input.bucketKey != null && { bucketKey: input.bucketKey }),
    ...(input.bucketName != null && { bucketName: input.bucketName }),
  };
};

/**
 * serializeAws_json1_1SourceCode
 */
const se_SourceCode = (input: Code[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Code(entry, context);
    });
};

/**
 * serializeAws_json1_1TagKeys
 */
const se_TagKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagProjectRequest
 */
const se_TagProjectRequest = (input: TagProjectRequest, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1Tags
 */
const se_Tags = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1TemplateParameterMap
 */
const se_TemplateParameterMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1Toolchain
 */
const se_Toolchain = (input: Toolchain, context: __SerdeContext): any => {
  return {
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.source != null && { source: se_ToolchainSource(input.source, context) }),
    ...(input.stackParameters != null && { stackParameters: se_TemplateParameterMap(input.stackParameters, context) }),
  };
};

/**
 * serializeAws_json1_1ToolchainSource
 */
const se_ToolchainSource = (input: ToolchainSource, context: __SerdeContext): any => {
  return {
    ...(input.s3 != null && { s3: se_S3Location(input.s3, context) }),
  };
};

/**
 * serializeAws_json1_1UntagProjectRequest
 */
const se_UntagProjectRequest = (input: UntagProjectRequest, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
    ...(input.tags != null && { tags: se_TagKeys(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateProjectRequest
 */
const se_UpdateProjectRequest = (input: UpdateProjectRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.id != null && { id: input.id }),
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_1UpdateTeamMemberRequest
 */
const se_UpdateTeamMemberRequest = (input: UpdateTeamMemberRequest, context: __SerdeContext): any => {
  return {
    ...(input.projectId != null && { projectId: input.projectId }),
    ...(input.projectRole != null && { projectRole: input.projectRole }),
    ...(input.remoteAccessAllowed != null && { remoteAccessAllowed: input.remoteAccessAllowed }),
    ...(input.userArn != null && { userArn: input.userArn }),
  };
};

/**
 * serializeAws_json1_1UpdateUserProfileRequest
 */
const se_UpdateUserProfileRequest = (input: UpdateUserProfileRequest, context: __SerdeContext): any => {
  return {
    ...(input.displayName != null && { displayName: input.displayName }),
    ...(input.emailAddress != null && { emailAddress: input.emailAddress }),
    ...(input.sshPublicKey != null && { sshPublicKey: input.sshPublicKey }),
    ...(input.userArn != null && { userArn: input.userArn }),
  };
};

/**
 * deserializeAws_json1_1AssociateTeamMemberResult
 */
const de_AssociateTeamMemberResult = (output: any, context: __SerdeContext): AssociateTeamMemberResult => {
  return {
    clientRequestToken: __expectString(output.clientRequestToken),
  } as any;
};

/**
 * deserializeAws_json1_1ConcurrentModificationException
 */
const de_ConcurrentModificationException = (output: any, context: __SerdeContext): ConcurrentModificationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1CreateProjectResult
 */
const de_CreateProjectResult = (output: any, context: __SerdeContext): CreateProjectResult => {
  return {
    arn: __expectString(output.arn),
    clientRequestToken: __expectString(output.clientRequestToken),
    id: __expectString(output.id),
    projectTemplateId: __expectString(output.projectTemplateId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateUserProfileResult
 */
const de_CreateUserProfileResult = (output: any, context: __SerdeContext): CreateUserProfileResult => {
  return {
    createdTimestamp:
      output.createdTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdTimestamp)))
        : undefined,
    displayName: __expectString(output.displayName),
    emailAddress: __expectString(output.emailAddress),
    lastModifiedTimestamp:
      output.lastModifiedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModifiedTimestamp)))
        : undefined,
    sshPublicKey: __expectString(output.sshPublicKey),
    userArn: __expectString(output.userArn),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteProjectResult
 */
const de_DeleteProjectResult = (output: any, context: __SerdeContext): DeleteProjectResult => {
  return {
    projectArn: __expectString(output.projectArn),
    stackId: __expectString(output.stackId),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteUserProfileResult
 */
const de_DeleteUserProfileResult = (output: any, context: __SerdeContext): DeleteUserProfileResult => {
  return {
    userArn: __expectString(output.userArn),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeProjectResult
 */
const de_DescribeProjectResult = (output: any, context: __SerdeContext): DescribeProjectResult => {
  return {
    arn: __expectString(output.arn),
    clientRequestToken: __expectString(output.clientRequestToken),
    createdTimeStamp:
      output.createdTimeStamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdTimeStamp)))
        : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    name: __expectString(output.name),
    projectTemplateId: __expectString(output.projectTemplateId),
    stackId: __expectString(output.stackId),
    status: output.status != null ? de_ProjectStatus(output.status, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeUserProfileResult
 */
const de_DescribeUserProfileResult = (output: any, context: __SerdeContext): DescribeUserProfileResult => {
  return {
    createdTimestamp:
      output.createdTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdTimestamp)))
        : undefined,
    displayName: __expectString(output.displayName),
    emailAddress: __expectString(output.emailAddress),
    lastModifiedTimestamp:
      output.lastModifiedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModifiedTimestamp)))
        : undefined,
    sshPublicKey: __expectString(output.sshPublicKey),
    userArn: __expectString(output.userArn),
  } as any;
};

/**
 * deserializeAws_json1_1DisassociateTeamMemberResult
 */
const de_DisassociateTeamMemberResult = (output: any, context: __SerdeContext): DisassociateTeamMemberResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1InvalidNextTokenException
 */
const de_InvalidNextTokenException = (output: any, context: __SerdeContext): InvalidNextTokenException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidServiceRoleException
 */
const de_InvalidServiceRoleException = (output: any, context: __SerdeContext): InvalidServiceRoleException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ListProjectsResult
 */
const de_ListProjectsResult = (output: any, context: __SerdeContext): ListProjectsResult => {
  return {
    nextToken: __expectString(output.nextToken),
    projects: output.projects != null ? de_ProjectsList(output.projects, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListResourcesResult
 */
const de_ListResourcesResult = (output: any, context: __SerdeContext): ListResourcesResult => {
  return {
    nextToken: __expectString(output.nextToken),
    resources: output.resources != null ? de_ResourcesResult(output.resources, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForProjectResult
 */
const de_ListTagsForProjectResult = (output: any, context: __SerdeContext): ListTagsForProjectResult => {
  return {
    nextToken: __expectString(output.nextToken),
    tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTeamMembersResult
 */
const de_ListTeamMembersResult = (output: any, context: __SerdeContext): ListTeamMembersResult => {
  return {
    nextToken: __expectString(output.nextToken),
    teamMembers: output.teamMembers != null ? de_TeamMemberResult(output.teamMembers, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListUserProfilesResult
 */
const de_ListUserProfilesResult = (output: any, context: __SerdeContext): ListUserProfilesResult => {
  return {
    nextToken: __expectString(output.nextToken),
    userProfiles: output.userProfiles != null ? de_UserProfilesList(output.userProfiles, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ProjectAlreadyExistsException
 */
const de_ProjectAlreadyExistsException = (output: any, context: __SerdeContext): ProjectAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ProjectConfigurationException
 */
const de_ProjectConfigurationException = (output: any, context: __SerdeContext): ProjectConfigurationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ProjectCreationFailedException
 */
const de_ProjectCreationFailedException = (output: any, context: __SerdeContext): ProjectCreationFailedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ProjectNotFoundException
 */
const de_ProjectNotFoundException = (output: any, context: __SerdeContext): ProjectNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ProjectsList
 */
const de_ProjectsList = (output: any, context: __SerdeContext): ProjectSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProjectSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProjectStatus
 */
const de_ProjectStatus = (output: any, context: __SerdeContext): ProjectStatus => {
  return {
    reason: __expectString(output.reason),
    state: __expectString(output.state),
  } as any;
};

/**
 * deserializeAws_json1_1ProjectSummary
 */
const de_ProjectSummary = (output: any, context: __SerdeContext): ProjectSummary => {
  return {
    projectArn: __expectString(output.projectArn),
    projectId: __expectString(output.projectId),
  } as any;
};

/**
 * deserializeAws_json1_1Resource
 */
const de_Resource = (output: any, context: __SerdeContext): Resource => {
  return {
    id: __expectString(output.id),
  } as any;
};

/**
 * deserializeAws_json1_1ResourcesResult
 */
const de_ResourcesResult = (output: any, context: __SerdeContext): Resource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Resource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TagProjectResult
 */
const de_TagProjectResult = (output: any, context: __SerdeContext): TagProjectResult => {
  return {
    tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Tags
 */
const de_Tags = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1TeamMember
 */
const de_TeamMember = (output: any, context: __SerdeContext): TeamMember => {
  return {
    projectRole: __expectString(output.projectRole),
    remoteAccessAllowed: __expectBoolean(output.remoteAccessAllowed),
    userArn: __expectString(output.userArn),
  } as any;
};

/**
 * deserializeAws_json1_1TeamMemberAlreadyAssociatedException
 */
const de_TeamMemberAlreadyAssociatedException = (
  output: any,
  context: __SerdeContext
): TeamMemberAlreadyAssociatedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1TeamMemberNotFoundException
 */
const de_TeamMemberNotFoundException = (output: any, context: __SerdeContext): TeamMemberNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1TeamMemberResult
 */
const de_TeamMemberResult = (output: any, context: __SerdeContext): TeamMember[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TeamMember(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UntagProjectResult
 */
const de_UntagProjectResult = (output: any, context: __SerdeContext): UntagProjectResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateProjectResult
 */
const de_UpdateProjectResult = (output: any, context: __SerdeContext): UpdateProjectResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateTeamMemberResult
 */
const de_UpdateTeamMemberResult = (output: any, context: __SerdeContext): UpdateTeamMemberResult => {
  return {
    projectRole: __expectString(output.projectRole),
    remoteAccessAllowed: __expectBoolean(output.remoteAccessAllowed),
    userArn: __expectString(output.userArn),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateUserProfileResult
 */
const de_UpdateUserProfileResult = (output: any, context: __SerdeContext): UpdateUserProfileResult => {
  return {
    createdTimestamp:
      output.createdTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdTimestamp)))
        : undefined,
    displayName: __expectString(output.displayName),
    emailAddress: __expectString(output.emailAddress),
    lastModifiedTimestamp:
      output.lastModifiedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModifiedTimestamp)))
        : undefined,
    sshPublicKey: __expectString(output.sshPublicKey),
    userArn: __expectString(output.userArn),
  } as any;
};

/**
 * deserializeAws_json1_1UserProfileAlreadyExistsException
 */
const de_UserProfileAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): UserProfileAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UserProfileNotFoundException
 */
const de_UserProfileNotFoundException = (output: any, context: __SerdeContext): UserProfileNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UserProfilesList
 */
const de_UserProfilesList = (output: any, context: __SerdeContext): UserProfileSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UserProfileSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UserProfileSummary
 */
const de_UserProfileSummary = (output: any, context: __SerdeContext): UserProfileSummary => {
  return {
    displayName: __expectString(output.displayName),
    emailAddress: __expectString(output.emailAddress),
    sshPublicKey: __expectString(output.sshPublicKey),
    userArn: __expectString(output.userArn),
  } as any;
};

/**
 * deserializeAws_json1_1ValidationException
 */
const de_ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    message: __expectString(output.message),
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
