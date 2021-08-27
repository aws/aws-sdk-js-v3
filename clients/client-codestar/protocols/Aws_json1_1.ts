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
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { expectBoolean as __expectBoolean, expectString as __expectString } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_json1_1AssociateTeamMemberCommand = async (
  input: AssociateTeamMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeStar_20170419.AssociateTeamMember",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateTeamMemberRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateProjectCommand = async (
  input: CreateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeStar_20170419.CreateProject",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateProjectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateUserProfileCommand = async (
  input: CreateUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeStar_20170419.CreateUserProfile",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateUserProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteProjectCommand = async (
  input: DeleteProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeStar_20170419.DeleteProject",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteProjectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteUserProfileCommand = async (
  input: DeleteUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeStar_20170419.DeleteUserProfile",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteUserProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeProjectCommand = async (
  input: DescribeProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeStar_20170419.DescribeProject",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeProjectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeUserProfileCommand = async (
  input: DescribeUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeStar_20170419.DescribeUserProfile",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeUserProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateTeamMemberCommand = async (
  input: DisassociateTeamMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeStar_20170419.DisassociateTeamMember",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateTeamMemberRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListProjectsCommand = async (
  input: ListProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeStar_20170419.ListProjects",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListProjectsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListResourcesCommand = async (
  input: ListResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeStar_20170419.ListResources",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListResourcesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForProjectCommand = async (
  input: ListTagsForProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeStar_20170419.ListTagsForProject",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForProjectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTeamMembersCommand = async (
  input: ListTeamMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeStar_20170419.ListTeamMembers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTeamMembersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListUserProfilesCommand = async (
  input: ListUserProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeStar_20170419.ListUserProfiles",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListUserProfilesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagProjectCommand = async (
  input: TagProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeStar_20170419.TagProject",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagProjectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagProjectCommand = async (
  input: UntagProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeStar_20170419.UntagProject",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagProjectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateProjectCommand = async (
  input: UpdateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeStar_20170419.UpdateProject",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateProjectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateTeamMemberCommand = async (
  input: UpdateTeamMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeStar_20170419.UpdateTeamMember",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateTeamMemberRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateUserProfileCommand = async (
  input: UpdateUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeStar_20170419.UpdateUserProfile",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateUserProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AssociateTeamMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateTeamMemberCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateTeamMemberCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateTeamMemberResult(data, context);
  const response: AssociateTeamMemberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateTeamMemberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateTeamMemberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.codestar#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidServiceRoleException":
    case "com.amazonaws.codestar#InvalidServiceRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidServiceRoleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.codestar#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProjectConfigurationException":
    case "com.amazonaws.codestar#ProjectConfigurationException":
      response = {
        ...(await deserializeAws_json1_1ProjectConfigurationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProjectNotFoundException":
    case "com.amazonaws.codestar#ProjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ProjectNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TeamMemberAlreadyAssociatedException":
    case "com.amazonaws.codestar#TeamMemberAlreadyAssociatedException":
      response = {
        ...(await deserializeAws_json1_1TeamMemberAlreadyAssociatedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateProjectResult(data, context);
  const response: CreateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.codestar#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidServiceRoleException":
    case "com.amazonaws.codestar#InvalidServiceRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidServiceRoleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.codestar#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProjectAlreadyExistsException":
    case "com.amazonaws.codestar#ProjectAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ProjectAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProjectConfigurationException":
    case "com.amazonaws.codestar#ProjectConfigurationException":
      response = {
        ...(await deserializeAws_json1_1ProjectConfigurationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProjectCreationFailedException":
    case "com.amazonaws.codestar#ProjectCreationFailedException":
      response = {
        ...(await deserializeAws_json1_1ProjectCreationFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateUserProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateUserProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateUserProfileResult(data, context);
  const response: CreateUserProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateUserProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "UserProfileAlreadyExistsException":
    case "com.amazonaws.codestar#UserProfileAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1UserProfileAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteProjectResult(data, context);
  const response: DeleteProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.codestar#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidServiceRoleException":
    case "com.amazonaws.codestar#InvalidServiceRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidServiceRoleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteUserProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteUserProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteUserProfileResult(data, context);
  const response: DeleteUserProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteUserProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeProjectResult(data, context);
  const response: DescribeProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.codestar#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidServiceRoleException":
    case "com.amazonaws.codestar#InvalidServiceRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidServiceRoleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProjectConfigurationException":
    case "com.amazonaws.codestar#ProjectConfigurationException":
      response = {
        ...(await deserializeAws_json1_1ProjectConfigurationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProjectNotFoundException":
    case "com.amazonaws.codestar#ProjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ProjectNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeUserProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeUserProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeUserProfileResult(data, context);
  const response: DescribeUserProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeUserProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "UserProfileNotFoundException":
    case "com.amazonaws.codestar#UserProfileNotFoundException":
      response = {
        ...(await deserializeAws_json1_1UserProfileNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DisassociateTeamMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateTeamMemberCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateTeamMemberCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateTeamMemberResult(data, context);
  const response: DisassociateTeamMemberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateTeamMemberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateTeamMemberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.codestar#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidServiceRoleException":
    case "com.amazonaws.codestar#InvalidServiceRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidServiceRoleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProjectNotFoundException":
    case "com.amazonaws.codestar#ProjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ProjectNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListProjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListProjectsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListProjectsResult(data, context);
  const response: ListProjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListProjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codestar#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListResourcesResult(data, context);
  const response: ListResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codestar#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProjectNotFoundException":
    case "com.amazonaws.codestar#ProjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ProjectNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListTagsForProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForProjectResult(data, context);
  const response: ListTagsForProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codestar#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProjectNotFoundException":
    case "com.amazonaws.codestar#ProjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ProjectNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListTeamMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTeamMembersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTeamMembersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTeamMembersResult(data, context);
  const response: ListTeamMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTeamMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTeamMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codestar#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProjectNotFoundException":
    case "com.amazonaws.codestar#ProjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ProjectNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListUserProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserProfilesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListUserProfilesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListUserProfilesResult(data, context);
  const response: ListUserProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListUserProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codestar#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1TagProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagProjectResult(data, context);
  const response: TagProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.codestar#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.codestar#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProjectNotFoundException":
    case "com.amazonaws.codestar#ProjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ProjectNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UntagProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagProjectResult(data, context);
  const response: UntagProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.codestar#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.codestar#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProjectNotFoundException":
    case "com.amazonaws.codestar#ProjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ProjectNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateProjectResult(data, context);
  const response: UpdateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ProjectNotFoundException":
    case "com.amazonaws.codestar#ProjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ProjectNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateTeamMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTeamMemberCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateTeamMemberCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateTeamMemberResult(data, context);
  const response: UpdateTeamMemberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateTeamMemberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTeamMemberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.codestar#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidServiceRoleException":
    case "com.amazonaws.codestar#InvalidServiceRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidServiceRoleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.codestar#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProjectConfigurationException":
    case "com.amazonaws.codestar#ProjectConfigurationException":
      response = {
        ...(await deserializeAws_json1_1ProjectConfigurationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProjectNotFoundException":
    case "com.amazonaws.codestar#ProjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ProjectNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TeamMemberNotFoundException":
    case "com.amazonaws.codestar#TeamMemberNotFoundException":
      response = {
        ...(await deserializeAws_json1_1TeamMemberNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateUserProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateUserProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateUserProfileResult(data, context);
  const response: UpdateUserProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateUserProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "UserProfileNotFoundException":
    case "com.amazonaws.codestar#UserProfileNotFoundException":
      response = {
        ...(await deserializeAws_json1_1UserProfileNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentModificationException(body, context);
  const contents: ConcurrentModificationException = {
    name: "ConcurrentModificationException",
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

const deserializeAws_json1_1InvalidServiceRoleExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidServiceRoleException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidServiceRoleException(body, context);
  const contents: InvalidServiceRoleException = {
    name: "InvalidServiceRoleException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ProjectAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ProjectAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ProjectAlreadyExistsException(body, context);
  const contents: ProjectAlreadyExistsException = {
    name: "ProjectAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ProjectConfigurationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ProjectConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ProjectConfigurationException(body, context);
  const contents: ProjectConfigurationException = {
    name: "ProjectConfigurationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ProjectCreationFailedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ProjectCreationFailedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ProjectCreationFailedException(body, context);
  const contents: ProjectCreationFailedException = {
    name: "ProjectCreationFailedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ProjectNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ProjectNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ProjectNotFoundException(body, context);
  const contents: ProjectNotFoundException = {
    name: "ProjectNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1TeamMemberAlreadyAssociatedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TeamMemberAlreadyAssociatedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TeamMemberAlreadyAssociatedException(body, context);
  const contents: TeamMemberAlreadyAssociatedException = {
    name: "TeamMemberAlreadyAssociatedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1TeamMemberNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TeamMemberNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TeamMemberNotFoundException(body, context);
  const contents: TeamMemberNotFoundException = {
    name: "TeamMemberNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1UserProfileAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UserProfileAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UserProfileAlreadyExistsException(body, context);
  const contents: UserProfileAlreadyExistsException = {
    name: "UserProfileAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1UserProfileNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UserProfileNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UserProfileNotFoundException(body, context);
  const contents: UserProfileNotFoundException = {
    name: "UserProfileNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ValidationException(body, context);
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1AssociateTeamMemberRequest = (
  input: AssociateTeamMemberRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.clientRequestToken !== undefined &&
      input.clientRequestToken !== null && { clientRequestToken: input.clientRequestToken }),
    ...(input.projectId !== undefined && input.projectId !== null && { projectId: input.projectId }),
    ...(input.projectRole !== undefined && input.projectRole !== null && { projectRole: input.projectRole }),
    ...(input.remoteAccessAllowed !== undefined &&
      input.remoteAccessAllowed !== null && { remoteAccessAllowed: input.remoteAccessAllowed }),
    ...(input.userArn !== undefined && input.userArn !== null && { userArn: input.userArn }),
  };
};

const serializeAws_json1_1Code = (input: Code, context: __SerdeContext): any => {
  return {
    ...(input.destination !== undefined &&
      input.destination !== null && { destination: serializeAws_json1_1CodeDestination(input.destination, context) }),
    ...(input.source !== undefined &&
      input.source !== null && { source: serializeAws_json1_1CodeSource(input.source, context) }),
  };
};

const serializeAws_json1_1CodeCommitCodeDestination = (
  input: CodeCommitCodeDestination,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  };
};

const serializeAws_json1_1CodeDestination = (input: CodeDestination, context: __SerdeContext): any => {
  return {
    ...(input.codeCommit !== undefined &&
      input.codeCommit !== null && {
        codeCommit: serializeAws_json1_1CodeCommitCodeDestination(input.codeCommit, context),
      }),
    ...(input.gitHub !== undefined &&
      input.gitHub !== null && { gitHub: serializeAws_json1_1GitHubCodeDestination(input.gitHub, context) }),
  };
};

const serializeAws_json1_1CodeSource = (input: CodeSource, context: __SerdeContext): any => {
  return {
    ...(input.s3 !== undefined && input.s3 !== null && { s3: serializeAws_json1_1S3Location(input.s3, context) }),
  };
};

const serializeAws_json1_1CreateProjectRequest = (input: CreateProjectRequest, context: __SerdeContext): any => {
  return {
    ...(input.clientRequestToken !== undefined &&
      input.clientRequestToken !== null && { clientRequestToken: input.clientRequestToken }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.sourceCode !== undefined &&
      input.sourceCode !== null && { sourceCode: serializeAws_json1_1SourceCode(input.sourceCode, context) }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
    ...(input.toolchain !== undefined &&
      input.toolchain !== null && { toolchain: serializeAws_json1_1Toolchain(input.toolchain, context) }),
  };
};

const serializeAws_json1_1CreateUserProfileRequest = (
  input: CreateUserProfileRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.displayName !== undefined && input.displayName !== null && { displayName: input.displayName }),
    ...(input.emailAddress !== undefined && input.emailAddress !== null && { emailAddress: input.emailAddress }),
    ...(input.sshPublicKey !== undefined && input.sshPublicKey !== null && { sshPublicKey: input.sshPublicKey }),
    ...(input.userArn !== undefined && input.userArn !== null && { userArn: input.userArn }),
  };
};

const serializeAws_json1_1DeleteProjectRequest = (input: DeleteProjectRequest, context: __SerdeContext): any => {
  return {
    ...(input.clientRequestToken !== undefined &&
      input.clientRequestToken !== null && { clientRequestToken: input.clientRequestToken }),
    ...(input.deleteStack !== undefined && input.deleteStack !== null && { deleteStack: input.deleteStack }),
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
  };
};

const serializeAws_json1_1DeleteUserProfileRequest = (
  input: DeleteUserProfileRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.userArn !== undefined && input.userArn !== null && { userArn: input.userArn }),
  };
};

const serializeAws_json1_1DescribeProjectRequest = (input: DescribeProjectRequest, context: __SerdeContext): any => {
  return {
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
  };
};

const serializeAws_json1_1DescribeUserProfileRequest = (
  input: DescribeUserProfileRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.userArn !== undefined && input.userArn !== null && { userArn: input.userArn }),
  };
};

const serializeAws_json1_1DisassociateTeamMemberRequest = (
  input: DisassociateTeamMemberRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.projectId !== undefined && input.projectId !== null && { projectId: input.projectId }),
    ...(input.userArn !== undefined && input.userArn !== null && { userArn: input.userArn }),
  };
};

const serializeAws_json1_1GitHubCodeDestination = (input: GitHubCodeDestination, context: __SerdeContext): any => {
  return {
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.issuesEnabled !== undefined && input.issuesEnabled !== null && { issuesEnabled: input.issuesEnabled }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.owner !== undefined && input.owner !== null && { owner: input.owner }),
    ...(input.privateRepository !== undefined &&
      input.privateRepository !== null && { privateRepository: input.privateRepository }),
    ...(input.token !== undefined && input.token !== null && { token: input.token }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
  };
};

const serializeAws_json1_1ListProjectsRequest = (input: ListProjectsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListResourcesRequest = (input: ListResourcesRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.projectId !== undefined && input.projectId !== null && { projectId: input.projectId }),
  };
};

const serializeAws_json1_1ListTagsForProjectRequest = (
  input: ListTagsForProjectRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListTeamMembersRequest = (input: ListTeamMembersRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.projectId !== undefined && input.projectId !== null && { projectId: input.projectId }),
  };
};

const serializeAws_json1_1ListUserProfilesRequest = (input: ListUserProfilesRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1S3Location = (input: S3Location, context: __SerdeContext): any => {
  return {
    ...(input.bucketKey !== undefined && input.bucketKey !== null && { bucketKey: input.bucketKey }),
    ...(input.bucketName !== undefined && input.bucketName !== null && { bucketName: input.bucketName }),
  };
};

const serializeAws_json1_1SourceCode = (input: Code[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Code(entry, context);
    });
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

const serializeAws_json1_1TagProjectRequest = (input: TagProjectRequest, context: __SerdeContext): any => {
  return {
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
  };
};

const serializeAws_json1_1Tags = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1TemplateParameterMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1Toolchain = (input: Toolchain, context: __SerdeContext): any => {
  return {
    ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
    ...(input.source !== undefined &&
      input.source !== null && { source: serializeAws_json1_1ToolchainSource(input.source, context) }),
    ...(input.stackParameters !== undefined &&
      input.stackParameters !== null && {
        stackParameters: serializeAws_json1_1TemplateParameterMap(input.stackParameters, context),
      }),
  };
};

const serializeAws_json1_1ToolchainSource = (input: ToolchainSource, context: __SerdeContext): any => {
  return {
    ...(input.s3 !== undefined && input.s3 !== null && { s3: serializeAws_json1_1S3Location(input.s3, context) }),
  };
};

const serializeAws_json1_1UntagProjectRequest = (input: UntagProjectRequest, context: __SerdeContext): any => {
  return {
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagKeys(input.tags, context) }),
  };
};

const serializeAws_json1_1UpdateProjectRequest = (input: UpdateProjectRequest, context: __SerdeContext): any => {
  return {
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  };
};

const serializeAws_json1_1UpdateTeamMemberRequest = (input: UpdateTeamMemberRequest, context: __SerdeContext): any => {
  return {
    ...(input.projectId !== undefined && input.projectId !== null && { projectId: input.projectId }),
    ...(input.projectRole !== undefined && input.projectRole !== null && { projectRole: input.projectRole }),
    ...(input.remoteAccessAllowed !== undefined &&
      input.remoteAccessAllowed !== null && { remoteAccessAllowed: input.remoteAccessAllowed }),
    ...(input.userArn !== undefined && input.userArn !== null && { userArn: input.userArn }),
  };
};

const serializeAws_json1_1UpdateUserProfileRequest = (
  input: UpdateUserProfileRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.displayName !== undefined && input.displayName !== null && { displayName: input.displayName }),
    ...(input.emailAddress !== undefined && input.emailAddress !== null && { emailAddress: input.emailAddress }),
    ...(input.sshPublicKey !== undefined && input.sshPublicKey !== null && { sshPublicKey: input.sshPublicKey }),
    ...(input.userArn !== undefined && input.userArn !== null && { userArn: input.userArn }),
  };
};

const deserializeAws_json1_1AssociateTeamMemberResult = (
  output: any,
  context: __SerdeContext
): AssociateTeamMemberResult => {
  return {
    clientRequestToken: __expectString(output.clientRequestToken),
  } as any;
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1CreateProjectResult = (output: any, context: __SerdeContext): CreateProjectResult => {
  return {
    arn: __expectString(output.arn),
    clientRequestToken: __expectString(output.clientRequestToken),
    id: __expectString(output.id),
    projectTemplateId: __expectString(output.projectTemplateId),
  } as any;
};

const deserializeAws_json1_1CreateUserProfileResult = (
  output: any,
  context: __SerdeContext
): CreateUserProfileResult => {
  return {
    createdTimestamp:
      output.createdTimestamp !== undefined && output.createdTimestamp !== null
        ? new Date(Math.round(output.createdTimestamp * 1000))
        : undefined,
    displayName: __expectString(output.displayName),
    emailAddress: __expectString(output.emailAddress),
    lastModifiedTimestamp:
      output.lastModifiedTimestamp !== undefined && output.lastModifiedTimestamp !== null
        ? new Date(Math.round(output.lastModifiedTimestamp * 1000))
        : undefined,
    sshPublicKey: __expectString(output.sshPublicKey),
    userArn: __expectString(output.userArn),
  } as any;
};

const deserializeAws_json1_1DeleteProjectResult = (output: any, context: __SerdeContext): DeleteProjectResult => {
  return {
    projectArn: __expectString(output.projectArn),
    stackId: __expectString(output.stackId),
  } as any;
};

const deserializeAws_json1_1DeleteUserProfileResult = (
  output: any,
  context: __SerdeContext
): DeleteUserProfileResult => {
  return {
    userArn: __expectString(output.userArn),
  } as any;
};

const deserializeAws_json1_1DescribeProjectResult = (output: any, context: __SerdeContext): DescribeProjectResult => {
  return {
    arn: __expectString(output.arn),
    clientRequestToken: __expectString(output.clientRequestToken),
    createdTimeStamp:
      output.createdTimeStamp !== undefined && output.createdTimeStamp !== null
        ? new Date(Math.round(output.createdTimeStamp * 1000))
        : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    name: __expectString(output.name),
    projectTemplateId: __expectString(output.projectTemplateId),
    stackId: __expectString(output.stackId),
    status:
      output.status !== undefined && output.status !== null
        ? deserializeAws_json1_1ProjectStatus(output.status, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeUserProfileResult = (
  output: any,
  context: __SerdeContext
): DescribeUserProfileResult => {
  return {
    createdTimestamp:
      output.createdTimestamp !== undefined && output.createdTimestamp !== null
        ? new Date(Math.round(output.createdTimestamp * 1000))
        : undefined,
    displayName: __expectString(output.displayName),
    emailAddress: __expectString(output.emailAddress),
    lastModifiedTimestamp:
      output.lastModifiedTimestamp !== undefined && output.lastModifiedTimestamp !== null
        ? new Date(Math.round(output.lastModifiedTimestamp * 1000))
        : undefined,
    sshPublicKey: __expectString(output.sshPublicKey),
    userArn: __expectString(output.userArn),
  } as any;
};

const deserializeAws_json1_1DisassociateTeamMemberResult = (
  output: any,
  context: __SerdeContext
): DisassociateTeamMemberResult => {
  return {} as any;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidServiceRoleException = (
  output: any,
  context: __SerdeContext
): InvalidServiceRoleException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ListProjectsResult = (output: any, context: __SerdeContext): ListProjectsResult => {
  return {
    nextToken: __expectString(output.nextToken),
    projects:
      output.projects !== undefined && output.projects !== null
        ? deserializeAws_json1_1ProjectsList(output.projects, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListResourcesResult = (output: any, context: __SerdeContext): ListResourcesResult => {
  return {
    nextToken: __expectString(output.nextToken),
    resources:
      output.resources !== undefined && output.resources !== null
        ? deserializeAws_json1_1ResourcesResult(output.resources, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForProjectResult = (
  output: any,
  context: __SerdeContext
): ListTagsForProjectResult => {
  return {
    nextToken: __expectString(output.nextToken),
    tags:
      output.tags !== undefined && output.tags !== null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListTeamMembersResult = (output: any, context: __SerdeContext): ListTeamMembersResult => {
  return {
    nextToken: __expectString(output.nextToken),
    teamMembers:
      output.teamMembers !== undefined && output.teamMembers !== null
        ? deserializeAws_json1_1TeamMemberResult(output.teamMembers, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListUserProfilesResult = (output: any, context: __SerdeContext): ListUserProfilesResult => {
  return {
    nextToken: __expectString(output.nextToken),
    userProfiles:
      output.userProfiles !== undefined && output.userProfiles !== null
        ? deserializeAws_json1_1UserProfilesList(output.userProfiles, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ProjectAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ProjectAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ProjectConfigurationException = (
  output: any,
  context: __SerdeContext
): ProjectConfigurationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ProjectCreationFailedException = (
  output: any,
  context: __SerdeContext
): ProjectCreationFailedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ProjectNotFoundException = (
  output: any,
  context: __SerdeContext
): ProjectNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ProjectsList = (output: any, context: __SerdeContext): ProjectSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ProjectSummary(entry, context);
    });
};

const deserializeAws_json1_1ProjectStatus = (output: any, context: __SerdeContext): ProjectStatus => {
  return {
    reason: __expectString(output.reason),
    state: __expectString(output.state),
  } as any;
};

const deserializeAws_json1_1ProjectSummary = (output: any, context: __SerdeContext): ProjectSummary => {
  return {
    projectArn: __expectString(output.projectArn),
    projectId: __expectString(output.projectId),
  } as any;
};

const deserializeAws_json1_1Resource = (output: any, context: __SerdeContext): Resource => {
  return {
    id: __expectString(output.id),
  } as any;
};

const deserializeAws_json1_1ResourcesResult = (output: any, context: __SerdeContext): Resource[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Resource(entry, context);
    });
};

const deserializeAws_json1_1TagProjectResult = (output: any, context: __SerdeContext): TagProjectResult => {
  return {
    tags:
      output.tags !== undefined && output.tags !== null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Tags = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1TeamMember = (output: any, context: __SerdeContext): TeamMember => {
  return {
    projectRole: __expectString(output.projectRole),
    remoteAccessAllowed: __expectBoolean(output.remoteAccessAllowed),
    userArn: __expectString(output.userArn),
  } as any;
};

const deserializeAws_json1_1TeamMemberAlreadyAssociatedException = (
  output: any,
  context: __SerdeContext
): TeamMemberAlreadyAssociatedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1TeamMemberNotFoundException = (
  output: any,
  context: __SerdeContext
): TeamMemberNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1TeamMemberResult = (output: any, context: __SerdeContext): TeamMember[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TeamMember(entry, context);
    });
};

const deserializeAws_json1_1UntagProjectResult = (output: any, context: __SerdeContext): UntagProjectResult => {
  return {} as any;
};

const deserializeAws_json1_1UpdateProjectResult = (output: any, context: __SerdeContext): UpdateProjectResult => {
  return {} as any;
};

const deserializeAws_json1_1UpdateTeamMemberResult = (output: any, context: __SerdeContext): UpdateTeamMemberResult => {
  return {
    projectRole: __expectString(output.projectRole),
    remoteAccessAllowed: __expectBoolean(output.remoteAccessAllowed),
    userArn: __expectString(output.userArn),
  } as any;
};

const deserializeAws_json1_1UpdateUserProfileResult = (
  output: any,
  context: __SerdeContext
): UpdateUserProfileResult => {
  return {
    createdTimestamp:
      output.createdTimestamp !== undefined && output.createdTimestamp !== null
        ? new Date(Math.round(output.createdTimestamp * 1000))
        : undefined,
    displayName: __expectString(output.displayName),
    emailAddress: __expectString(output.emailAddress),
    lastModifiedTimestamp:
      output.lastModifiedTimestamp !== undefined && output.lastModifiedTimestamp !== null
        ? new Date(Math.round(output.lastModifiedTimestamp * 1000))
        : undefined,
    sshPublicKey: __expectString(output.sshPublicKey),
    userArn: __expectString(output.userArn),
  } as any;
};

const deserializeAws_json1_1UserProfileAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): UserProfileAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1UserProfileNotFoundException = (
  output: any,
  context: __SerdeContext
): UserProfileNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1UserProfilesList = (output: any, context: __SerdeContext): UserProfileSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1UserProfileSummary(entry, context);
    });
};

const deserializeAws_json1_1UserProfileSummary = (output: any, context: __SerdeContext): UserProfileSummary => {
  return {
    displayName: __expectString(output.displayName),
    emailAddress: __expectString(output.emailAddress),
    sshPublicKey: __expectString(output.sshPublicKey),
    userArn: __expectString(output.userArn),
  } as any;
};

const deserializeAws_json1_1ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    message: __expectString(output.message),
  } as any;
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
