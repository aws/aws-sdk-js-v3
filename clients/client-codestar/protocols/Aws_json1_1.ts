import {
  AssociateTeamMemberCommandInput,
  AssociateTeamMemberCommandOutput
} from "../commands/AssociateTeamMemberCommand";
import {
  CreateProjectCommandInput,
  CreateProjectCommandOutput
} from "../commands/CreateProjectCommand";
import {
  CreateUserProfileCommandInput,
  CreateUserProfileCommandOutput
} from "../commands/CreateUserProfileCommand";
import {
  DeleteProjectCommandInput,
  DeleteProjectCommandOutput
} from "../commands/DeleteProjectCommand";
import {
  DeleteUserProfileCommandInput,
  DeleteUserProfileCommandOutput
} from "../commands/DeleteUserProfileCommand";
import {
  DescribeProjectCommandInput,
  DescribeProjectCommandOutput
} from "../commands/DescribeProjectCommand";
import {
  DescribeUserProfileCommandInput,
  DescribeUserProfileCommandOutput
} from "../commands/DescribeUserProfileCommand";
import {
  DisassociateTeamMemberCommandInput,
  DisassociateTeamMemberCommandOutput
} from "../commands/DisassociateTeamMemberCommand";
import {
  ListProjectsCommandInput,
  ListProjectsCommandOutput
} from "../commands/ListProjectsCommand";
import {
  ListResourcesCommandInput,
  ListResourcesCommandOutput
} from "../commands/ListResourcesCommand";
import {
  ListTagsForProjectCommandInput,
  ListTagsForProjectCommandOutput
} from "../commands/ListTagsForProjectCommand";
import {
  ListTeamMembersCommandInput,
  ListTeamMembersCommandOutput
} from "../commands/ListTeamMembersCommand";
import {
  ListUserProfilesCommandInput,
  ListUserProfilesCommandOutput
} from "../commands/ListUserProfilesCommand";
import {
  TagProjectCommandInput,
  TagProjectCommandOutput
} from "../commands/TagProjectCommand";
import {
  UntagProjectCommandInput,
  UntagProjectCommandOutput
} from "../commands/UntagProjectCommand";
import {
  UpdateProjectCommandInput,
  UpdateProjectCommandOutput
} from "../commands/UpdateProjectCommand";
import {
  UpdateTeamMemberCommandInput,
  UpdateTeamMemberCommandOutput
} from "../commands/UpdateTeamMemberCommand";
import {
  UpdateUserProfileCommandInput,
  UpdateUserProfileCommandOutput
} from "../commands/UpdateUserProfileCommand";
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
  ValidationException
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

export async function serializeAws_json1_1AssociateTeamMemberCommand(
  input: AssociateTeamMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeStar_20170419.AssociateTeamMember";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AssociateTeamMemberRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateProjectCommand(
  input: CreateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeStar_20170419.CreateProject";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateProjectRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateUserProfileCommand(
  input: CreateUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeStar_20170419.CreateUserProfile";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateUserProfileRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteProjectCommand(
  input: DeleteProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeStar_20170419.DeleteProject";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteProjectRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteUserProfileCommand(
  input: DeleteUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeStar_20170419.DeleteUserProfile";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteUserProfileRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeProjectCommand(
  input: DescribeProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeStar_20170419.DescribeProject";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeProjectRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeUserProfileCommand(
  input: DescribeUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeStar_20170419.DescribeUserProfile";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeUserProfileRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DisassociateTeamMemberCommand(
  input: DisassociateTeamMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeStar_20170419.DisassociateTeamMember";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisassociateTeamMemberRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListProjectsCommand(
  input: ListProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeStar_20170419.ListProjects";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListProjectsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListResourcesCommand(
  input: ListResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeStar_20170419.ListResources";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListResourcesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListTagsForProjectCommand(
  input: ListTagsForProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeStar_20170419.ListTagsForProject";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTagsForProjectRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListTeamMembersCommand(
  input: ListTeamMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeStar_20170419.ListTeamMembers";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTeamMembersRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListUserProfilesCommand(
  input: ListUserProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeStar_20170419.ListUserProfiles";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListUserProfilesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1TagProjectCommand(
  input: TagProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeStar_20170419.TagProject";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagProjectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UntagProjectCommand(
  input: UntagProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeStar_20170419.UntagProject";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UntagProjectRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateProjectCommand(
  input: UpdateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeStar_20170419.UpdateProject";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateProjectRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateTeamMemberCommand(
  input: UpdateTeamMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeStar_20170419.UpdateTeamMember";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateTeamMemberRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateUserProfileCommand(
  input: UpdateUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeStar_20170419.UpdateUserProfile";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateUserProfileRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1AssociateTeamMemberCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateTeamMemberCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AssociateTeamMemberCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateTeamMemberResult(data, context);
  const response: AssociateTeamMemberCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AssociateTeamMemberResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1AssociateTeamMemberCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateTeamMemberCommandOutput> {
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
    case "ConcurrentModificationException":
    case "com.amazonaws.codestar#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidServiceRoleException":
    case "com.amazonaws.codestar#InvalidServiceRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidServiceRoleExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.codestar#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProjectConfigurationException":
    case "com.amazonaws.codestar#ProjectConfigurationException":
      response = {
        ...(await deserializeAws_json1_1ProjectConfigurationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProjectNotFoundException":
    case "com.amazonaws.codestar#ProjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ProjectNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TeamMemberAlreadyAssociatedException":
    case "com.amazonaws.codestar#TeamMemberAlreadyAssociatedException":
      response = {
        ...(await deserializeAws_json1_1TeamMemberAlreadyAssociatedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export async function deserializeAws_json1_1CreateProjectCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateProjectResult(data, context);
  const response: CreateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateProjectResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateProjectCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> {
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
    case "ConcurrentModificationException":
    case "com.amazonaws.codestar#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidServiceRoleException":
    case "com.amazonaws.codestar#InvalidServiceRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidServiceRoleExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.codestar#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProjectAlreadyExistsException":
    case "com.amazonaws.codestar#ProjectAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ProjectAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProjectConfigurationException":
    case "com.amazonaws.codestar#ProjectConfigurationException":
      response = {
        ...(await deserializeAws_json1_1ProjectConfigurationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProjectCreationFailedException":
    case "com.amazonaws.codestar#ProjectCreationFailedException":
      response = {
        ...(await deserializeAws_json1_1ProjectCreationFailedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export async function deserializeAws_json1_1CreateUserProfileCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserProfileCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateUserProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateUserProfileResult(data, context);
  const response: CreateUserProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateUserProfileResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateUserProfileCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserProfileCommandOutput> {
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
    case "UserProfileAlreadyExistsException":
    case "com.amazonaws.codestar#UserProfileAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1UserProfileAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export async function deserializeAws_json1_1DeleteProjectCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteProjectResult(data, context);
  const response: DeleteProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteProjectResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteProjectCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> {
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
    case "ConcurrentModificationException":
    case "com.amazonaws.codestar#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidServiceRoleException":
    case "com.amazonaws.codestar#InvalidServiceRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidServiceRoleExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export async function deserializeAws_json1_1DeleteUserProfileCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserProfileCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteUserProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteUserProfileResult(data, context);
  const response: DeleteUserProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteUserProfileResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteUserProfileCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserProfileCommandOutput> {
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
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export async function deserializeAws_json1_1DescribeProjectCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProjectCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeProjectResult(data, context);
  const response: DescribeProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeProjectResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeProjectCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProjectCommandOutput> {
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
    case "ConcurrentModificationException":
    case "com.amazonaws.codestar#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidServiceRoleException":
    case "com.amazonaws.codestar#InvalidServiceRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidServiceRoleExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProjectConfigurationException":
    case "com.amazonaws.codestar#ProjectConfigurationException":
      response = {
        ...(await deserializeAws_json1_1ProjectConfigurationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProjectNotFoundException":
    case "com.amazonaws.codestar#ProjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ProjectNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export async function deserializeAws_json1_1DescribeUserProfileCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserProfileCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeUserProfileCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeUserProfileResult(data, context);
  const response: DescribeUserProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeUserProfileResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeUserProfileCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserProfileCommandOutput> {
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
    case "UserProfileNotFoundException":
    case "com.amazonaws.codestar#UserProfileNotFoundException":
      response = {
        ...(await deserializeAws_json1_1UserProfileNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export async function deserializeAws_json1_1DisassociateTeamMemberCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateTeamMemberCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisassociateTeamMemberCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateTeamMemberResult(data, context);
  const response: DisassociateTeamMemberCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisassociateTeamMemberResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DisassociateTeamMemberCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateTeamMemberCommandOutput> {
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
    case "ConcurrentModificationException":
    case "com.amazonaws.codestar#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidServiceRoleException":
    case "com.amazonaws.codestar#InvalidServiceRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidServiceRoleExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProjectNotFoundException":
    case "com.amazonaws.codestar#ProjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ProjectNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export async function deserializeAws_json1_1ListProjectsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListProjectsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListProjectsResult(data, context);
  const response: ListProjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListProjectsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListProjectsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> {
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
    case "InvalidNextTokenException":
    case "com.amazonaws.codestar#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export async function deserializeAws_json1_1ListResourcesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListResourcesResult(data, context);
  const response: ListResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListResourcesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListResourcesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesCommandOutput> {
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
    case "InvalidNextTokenException":
    case "com.amazonaws.codestar#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProjectNotFoundException":
    case "com.amazonaws.codestar#ProjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ProjectNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export async function deserializeAws_json1_1ListTagsForProjectCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForProjectCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsForProjectCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForProjectResult(data, context);
  const response: ListTagsForProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForProjectResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListTagsForProjectCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForProjectCommandOutput> {
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
    case "InvalidNextTokenException":
    case "com.amazonaws.codestar#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProjectNotFoundException":
    case "com.amazonaws.codestar#ProjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ProjectNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export async function deserializeAws_json1_1ListTeamMembersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTeamMembersCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTeamMembersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTeamMembersResult(data, context);
  const response: ListTeamMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTeamMembersResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListTeamMembersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTeamMembersCommandOutput> {
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
    case "InvalidNextTokenException":
    case "com.amazonaws.codestar#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProjectNotFoundException":
    case "com.amazonaws.codestar#ProjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ProjectNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export async function deserializeAws_json1_1ListUserProfilesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserProfilesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListUserProfilesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListUserProfilesResult(data, context);
  const response: ListUserProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListUserProfilesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListUserProfilesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserProfilesCommandOutput> {
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
    case "InvalidNextTokenException":
    case "com.amazonaws.codestar#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export async function deserializeAws_json1_1TagProjectCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagProjectCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagProjectResult(data, context);
  const response: TagProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagProjectResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1TagProjectCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagProjectCommandOutput> {
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
    case "ConcurrentModificationException":
    case "com.amazonaws.codestar#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.codestar#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProjectNotFoundException":
    case "com.amazonaws.codestar#ProjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ProjectNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export async function deserializeAws_json1_1UntagProjectCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagProjectCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagProjectResult(data, context);
  const response: UntagProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagProjectResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UntagProjectCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagProjectCommandOutput> {
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
    case "ConcurrentModificationException":
    case "com.amazonaws.codestar#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.codestar#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProjectNotFoundException":
    case "com.amazonaws.codestar#ProjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ProjectNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export async function deserializeAws_json1_1UpdateProjectCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateProjectResult(data, context);
  const response: UpdateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateProjectResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateProjectCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> {
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
    case "ProjectNotFoundException":
    case "com.amazonaws.codestar#ProjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ProjectNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export async function deserializeAws_json1_1UpdateTeamMemberCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTeamMemberCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateTeamMemberCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateTeamMemberResult(data, context);
  const response: UpdateTeamMemberCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateTeamMemberResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateTeamMemberCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTeamMemberCommandOutput> {
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
    case "ConcurrentModificationException":
    case "com.amazonaws.codestar#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidServiceRoleException":
    case "com.amazonaws.codestar#InvalidServiceRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidServiceRoleExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.codestar#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProjectConfigurationException":
    case "com.amazonaws.codestar#ProjectConfigurationException":
      response = {
        ...(await deserializeAws_json1_1ProjectConfigurationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProjectNotFoundException":
    case "com.amazonaws.codestar#ProjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ProjectNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TeamMemberNotFoundException":
    case "com.amazonaws.codestar#TeamMemberNotFoundException":
      response = {
        ...(await deserializeAws_json1_1TeamMemberNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export async function deserializeAws_json1_1UpdateUserProfileCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserProfileCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateUserProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateUserProfileResult(data, context);
  const response: UpdateUserProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateUserProfileResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateUserProfileCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserProfileCommandOutput> {
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
    case "UserProfileNotFoundException":
    case "com.amazonaws.codestar#UserProfileNotFoundException":
      response = {
        ...(await deserializeAws_json1_1UserProfileNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codestar#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentModificationException(
    body,
    context
  );
  const contents: ConcurrentModificationException = {
    name: "ConcurrentModificationException",
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

const deserializeAws_json1_1InvalidServiceRoleExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidServiceRoleException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidServiceRoleException(
    body,
    context
  );
  const contents: InvalidServiceRoleException = {
    name: "InvalidServiceRoleException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(
    body,
    context
  );
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ProjectAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ProjectAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ProjectAlreadyExistsException(
    body,
    context
  );
  const contents: ProjectAlreadyExistsException = {
    name: "ProjectAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ProjectConfigurationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ProjectConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ProjectConfigurationException(
    body,
    context
  );
  const contents: ProjectConfigurationException = {
    name: "ProjectConfigurationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ProjectCreationFailedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ProjectCreationFailedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ProjectCreationFailedException(
    body,
    context
  );
  const contents: ProjectCreationFailedException = {
    name: "ProjectCreationFailedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ProjectNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ProjectNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ProjectNotFoundException(
    body,
    context
  );
  const contents: ProjectNotFoundException = {
    name: "ProjectNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TeamMemberAlreadyAssociatedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TeamMemberAlreadyAssociatedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TeamMemberAlreadyAssociatedException(
    body,
    context
  );
  const contents: TeamMemberAlreadyAssociatedException = {
    name: "TeamMemberAlreadyAssociatedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TeamMemberNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TeamMemberNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TeamMemberNotFoundException(
    body,
    context
  );
  const contents: TeamMemberNotFoundException = {
    name: "TeamMemberNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1UserProfileAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UserProfileAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UserProfileAlreadyExistsException(
    body,
    context
  );
  const contents: UserProfileAlreadyExistsException = {
    name: "UserProfileAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1UserProfileNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UserProfileNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UserProfileNotFoundException(
    body,
    context
  );
  const contents: UserProfileNotFoundException = {
    name: "UserProfileNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ValidationException(
    body,
    context
  );
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1AssociateTeamMemberRequest = (
  input: AssociateTeamMemberRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.clientRequestToken !== undefined) {
    bodyParams["clientRequestToken"] = input.clientRequestToken;
  }
  if (input.projectId !== undefined) {
    bodyParams["projectId"] = input.projectId;
  }
  if (input.projectRole !== undefined) {
    bodyParams["projectRole"] = input.projectRole;
  }
  if (input.remoteAccessAllowed !== undefined) {
    bodyParams["remoteAccessAllowed"] = input.remoteAccessAllowed;
  }
  if (input.userArn !== undefined) {
    bodyParams["userArn"] = input.userArn;
  }
  return bodyParams;
};

const serializeAws_json1_1Code = (
  input: Code,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.destination !== undefined) {
    bodyParams["destination"] = serializeAws_json1_1CodeDestination(
      input.destination,
      context
    );
  }
  if (input.source !== undefined) {
    bodyParams["source"] = serializeAws_json1_1CodeSource(
      input.source,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1CodeCommitCodeDestination = (
  input: CodeCommitCodeDestination,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_json1_1CodeDestination = (
  input: CodeDestination,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.codeCommit !== undefined) {
    bodyParams["codeCommit"] = serializeAws_json1_1CodeCommitCodeDestination(
      input.codeCommit,
      context
    );
  }
  if (input.gitHub !== undefined) {
    bodyParams["gitHub"] = serializeAws_json1_1GitHubCodeDestination(
      input.gitHub,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1CodeSource = (
  input: CodeSource,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.s3 !== undefined) {
    bodyParams["s3"] = serializeAws_json1_1S3Location(input.s3, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreateProjectRequest = (
  input: CreateProjectRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.clientRequestToken !== undefined) {
    bodyParams["clientRequestToken"] = input.clientRequestToken;
  }
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.id !== undefined) {
    bodyParams["id"] = input.id;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.sourceCode !== undefined) {
    bodyParams["sourceCode"] = serializeAws_json1_1SourceCode(
      input.sourceCode,
      context
    );
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1Tags(input.tags, context);
  }
  if (input.toolchain !== undefined) {
    bodyParams["toolchain"] = serializeAws_json1_1Toolchain(
      input.toolchain,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1CreateUserProfileRequest = (
  input: CreateUserProfileRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.displayName !== undefined) {
    bodyParams["displayName"] = input.displayName;
  }
  if (input.emailAddress !== undefined) {
    bodyParams["emailAddress"] = input.emailAddress;
  }
  if (input.sshPublicKey !== undefined) {
    bodyParams["sshPublicKey"] = input.sshPublicKey;
  }
  if (input.userArn !== undefined) {
    bodyParams["userArn"] = input.userArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteProjectRequest = (
  input: DeleteProjectRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.clientRequestToken !== undefined) {
    bodyParams["clientRequestToken"] = input.clientRequestToken;
  }
  if (input.deleteStack !== undefined) {
    bodyParams["deleteStack"] = input.deleteStack;
  }
  if (input.id !== undefined) {
    bodyParams["id"] = input.id;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteUserProfileRequest = (
  input: DeleteUserProfileRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.userArn !== undefined) {
    bodyParams["userArn"] = input.userArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeProjectRequest = (
  input: DescribeProjectRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.id !== undefined) {
    bodyParams["id"] = input.id;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeUserProfileRequest = (
  input: DescribeUserProfileRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.userArn !== undefined) {
    bodyParams["userArn"] = input.userArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DisassociateTeamMemberRequest = (
  input: DisassociateTeamMemberRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.projectId !== undefined) {
    bodyParams["projectId"] = input.projectId;
  }
  if (input.userArn !== undefined) {
    bodyParams["userArn"] = input.userArn;
  }
  return bodyParams;
};

const serializeAws_json1_1GitHubCodeDestination = (
  input: GitHubCodeDestination,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.issuesEnabled !== undefined) {
    bodyParams["issuesEnabled"] = input.issuesEnabled;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.owner !== undefined) {
    bodyParams["owner"] = input.owner;
  }
  if (input.privateRepository !== undefined) {
    bodyParams["privateRepository"] = input.privateRepository;
  }
  if (input.token !== undefined) {
    bodyParams["token"] = input.token;
  }
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  return bodyParams;
};

const serializeAws_json1_1ListProjectsRequest = (
  input: ListProjectsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListResourcesRequest = (
  input: ListResourcesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.projectId !== undefined) {
    bodyParams["projectId"] = input.projectId;
  }
  return bodyParams;
};

const serializeAws_json1_1ListTagsForProjectRequest = (
  input: ListTagsForProjectRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.id !== undefined) {
    bodyParams["id"] = input.id;
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListTeamMembersRequest = (
  input: ListTeamMembersRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.projectId !== undefined) {
    bodyParams["projectId"] = input.projectId;
  }
  return bodyParams;
};

const serializeAws_json1_1ListUserProfilesRequest = (
  input: ListUserProfilesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1S3Location = (
  input: S3Location,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.bucketKey !== undefined) {
    bodyParams["bucketKey"] = input.bucketKey;
  }
  if (input.bucketName !== undefined) {
    bodyParams["bucketName"] = input.bucketName;
  }
  return bodyParams;
};

const serializeAws_json1_1SourceCode = (
  input: Array<Code>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Code(entry, context));
  }
  return contents;
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

const serializeAws_json1_1TagProjectRequest = (
  input: TagProjectRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.id !== undefined) {
    bodyParams["id"] = input.id;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1Tags(input.tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1Tags = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1TemplateParameterMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1Toolchain = (
  input: Toolchain,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.roleArn !== undefined) {
    bodyParams["roleArn"] = input.roleArn;
  }
  if (input.source !== undefined) {
    bodyParams["source"] = serializeAws_json1_1ToolchainSource(
      input.source,
      context
    );
  }
  if (input.stackParameters !== undefined) {
    bodyParams["stackParameters"] = serializeAws_json1_1TemplateParameterMap(
      input.stackParameters,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ToolchainSource = (
  input: ToolchainSource,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.s3 !== undefined) {
    bodyParams["s3"] = serializeAws_json1_1S3Location(input.s3, context);
  }
  return bodyParams;
};

const serializeAws_json1_1UntagProjectRequest = (
  input: UntagProjectRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.id !== undefined) {
    bodyParams["id"] = input.id;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1TagKeys(input.tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateProjectRequest = (
  input: UpdateProjectRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.id !== undefined) {
    bodyParams["id"] = input.id;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateTeamMemberRequest = (
  input: UpdateTeamMemberRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.projectId !== undefined) {
    bodyParams["projectId"] = input.projectId;
  }
  if (input.projectRole !== undefined) {
    bodyParams["projectRole"] = input.projectRole;
  }
  if (input.remoteAccessAllowed !== undefined) {
    bodyParams["remoteAccessAllowed"] = input.remoteAccessAllowed;
  }
  if (input.userArn !== undefined) {
    bodyParams["userArn"] = input.userArn;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateUserProfileRequest = (
  input: UpdateUserProfileRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.displayName !== undefined) {
    bodyParams["displayName"] = input.displayName;
  }
  if (input.emailAddress !== undefined) {
    bodyParams["emailAddress"] = input.emailAddress;
  }
  if (input.sshPublicKey !== undefined) {
    bodyParams["sshPublicKey"] = input.sshPublicKey;
  }
  if (input.userArn !== undefined) {
    bodyParams["userArn"] = input.userArn;
  }
  return bodyParams;
};

const deserializeAws_json1_1AssociateTeamMemberResult = (
  output: any,
  context: __SerdeContext
): AssociateTeamMemberResult => {
  let contents: any = {
    __type: "AssociateTeamMemberResult",
    clientRequestToken: undefined
  };
  if (
    output.clientRequestToken !== undefined &&
    output.clientRequestToken !== null
  ) {
    contents.clientRequestToken = output.clientRequestToken;
  }
  return contents;
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  let contents: any = {
    __type: "ConcurrentModificationException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1CreateProjectResult = (
  output: any,
  context: __SerdeContext
): CreateProjectResult => {
  let contents: any = {
    __type: "CreateProjectResult",
    arn: undefined,
    clientRequestToken: undefined,
    id: undefined,
    projectTemplateId: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (
    output.clientRequestToken !== undefined &&
    output.clientRequestToken !== null
  ) {
    contents.clientRequestToken = output.clientRequestToken;
  }
  if (output.id !== undefined && output.id !== null) {
    contents.id = output.id;
  }
  if (
    output.projectTemplateId !== undefined &&
    output.projectTemplateId !== null
  ) {
    contents.projectTemplateId = output.projectTemplateId;
  }
  return contents;
};

const deserializeAws_json1_1CreateUserProfileResult = (
  output: any,
  context: __SerdeContext
): CreateUserProfileResult => {
  let contents: any = {
    __type: "CreateUserProfileResult",
    createdTimestamp: undefined,
    displayName: undefined,
    emailAddress: undefined,
    lastModifiedTimestamp: undefined,
    sshPublicKey: undefined,
    userArn: undefined
  };
  if (
    output.createdTimestamp !== undefined &&
    output.createdTimestamp !== null
  ) {
    contents.createdTimestamp = new Date(
      Math.round(output.createdTimestamp * 1000)
    );
  }
  if (output.displayName !== undefined && output.displayName !== null) {
    contents.displayName = output.displayName;
  }
  if (output.emailAddress !== undefined && output.emailAddress !== null) {
    contents.emailAddress = output.emailAddress;
  }
  if (
    output.lastModifiedTimestamp !== undefined &&
    output.lastModifiedTimestamp !== null
  ) {
    contents.lastModifiedTimestamp = new Date(
      Math.round(output.lastModifiedTimestamp * 1000)
    );
  }
  if (output.sshPublicKey !== undefined && output.sshPublicKey !== null) {
    contents.sshPublicKey = output.sshPublicKey;
  }
  if (output.userArn !== undefined && output.userArn !== null) {
    contents.userArn = output.userArn;
  }
  return contents;
};

const deserializeAws_json1_1DeleteProjectResult = (
  output: any,
  context: __SerdeContext
): DeleteProjectResult => {
  let contents: any = {
    __type: "DeleteProjectResult",
    projectArn: undefined,
    stackId: undefined
  };
  if (output.projectArn !== undefined && output.projectArn !== null) {
    contents.projectArn = output.projectArn;
  }
  if (output.stackId !== undefined && output.stackId !== null) {
    contents.stackId = output.stackId;
  }
  return contents;
};

const deserializeAws_json1_1DeleteUserProfileResult = (
  output: any,
  context: __SerdeContext
): DeleteUserProfileResult => {
  let contents: any = {
    __type: "DeleteUserProfileResult",
    userArn: undefined
  };
  if (output.userArn !== undefined && output.userArn !== null) {
    contents.userArn = output.userArn;
  }
  return contents;
};

const deserializeAws_json1_1DescribeProjectResult = (
  output: any,
  context: __SerdeContext
): DescribeProjectResult => {
  let contents: any = {
    __type: "DescribeProjectResult",
    arn: undefined,
    clientRequestToken: undefined,
    createdTimeStamp: undefined,
    description: undefined,
    id: undefined,
    name: undefined,
    projectTemplateId: undefined,
    stackId: undefined,
    status: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (
    output.clientRequestToken !== undefined &&
    output.clientRequestToken !== null
  ) {
    contents.clientRequestToken = output.clientRequestToken;
  }
  if (
    output.createdTimeStamp !== undefined &&
    output.createdTimeStamp !== null
  ) {
    contents.createdTimeStamp = new Date(
      Math.round(output.createdTimeStamp * 1000)
    );
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.id !== undefined && output.id !== null) {
    contents.id = output.id;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (
    output.projectTemplateId !== undefined &&
    output.projectTemplateId !== null
  ) {
    contents.projectTemplateId = output.projectTemplateId;
  }
  if (output.stackId !== undefined && output.stackId !== null) {
    contents.stackId = output.stackId;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = deserializeAws_json1_1ProjectStatus(
      output.status,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeUserProfileResult = (
  output: any,
  context: __SerdeContext
): DescribeUserProfileResult => {
  let contents: any = {
    __type: "DescribeUserProfileResult",
    createdTimestamp: undefined,
    displayName: undefined,
    emailAddress: undefined,
    lastModifiedTimestamp: undefined,
    sshPublicKey: undefined,
    userArn: undefined
  };
  if (
    output.createdTimestamp !== undefined &&
    output.createdTimestamp !== null
  ) {
    contents.createdTimestamp = new Date(
      Math.round(output.createdTimestamp * 1000)
    );
  }
  if (output.displayName !== undefined && output.displayName !== null) {
    contents.displayName = output.displayName;
  }
  if (output.emailAddress !== undefined && output.emailAddress !== null) {
    contents.emailAddress = output.emailAddress;
  }
  if (
    output.lastModifiedTimestamp !== undefined &&
    output.lastModifiedTimestamp !== null
  ) {
    contents.lastModifiedTimestamp = new Date(
      Math.round(output.lastModifiedTimestamp * 1000)
    );
  }
  if (output.sshPublicKey !== undefined && output.sshPublicKey !== null) {
    contents.sshPublicKey = output.sshPublicKey;
  }
  if (output.userArn !== undefined && output.userArn !== null) {
    contents.userArn = output.userArn;
  }
  return contents;
};

const deserializeAws_json1_1DisassociateTeamMemberResult = (
  output: any,
  context: __SerdeContext
): DisassociateTeamMemberResult => {
  let contents: any = {
    __type: "DisassociateTeamMemberResult"
  };
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  let contents: any = {
    __type: "InvalidNextTokenException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidServiceRoleException = (
  output: any,
  context: __SerdeContext
): InvalidServiceRoleException => {
  let contents: any = {
    __type: "InvalidServiceRoleException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ListProjectsResult = (
  output: any,
  context: __SerdeContext
): ListProjectsResult => {
  let contents: any = {
    __type: "ListProjectsResult",
    nextToken: undefined,
    projects: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.projects !== undefined && output.projects !== null) {
    contents.projects = deserializeAws_json1_1ProjectsList(
      output.projects,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListResourcesResult = (
  output: any,
  context: __SerdeContext
): ListResourcesResult => {
  let contents: any = {
    __type: "ListResourcesResult",
    nextToken: undefined,
    resources: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.resources !== undefined && output.resources !== null) {
    contents.resources = deserializeAws_json1_1ResourcesResult(
      output.resources,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListTagsForProjectResult = (
  output: any,
  context: __SerdeContext
): ListTagsForProjectResult => {
  let contents: any = {
    __type: "ListTagsForProjectResult",
    nextToken: undefined,
    tags: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.tags = deserializeAws_json1_1Tags(output.tags, context);
  }
  return contents;
};

const deserializeAws_json1_1ListTeamMembersResult = (
  output: any,
  context: __SerdeContext
): ListTeamMembersResult => {
  let contents: any = {
    __type: "ListTeamMembersResult",
    nextToken: undefined,
    teamMembers: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.teamMembers !== undefined && output.teamMembers !== null) {
    contents.teamMembers = deserializeAws_json1_1TeamMemberResult(
      output.teamMembers,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListUserProfilesResult = (
  output: any,
  context: __SerdeContext
): ListUserProfilesResult => {
  let contents: any = {
    __type: "ListUserProfilesResult",
    nextToken: undefined,
    userProfiles: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.userProfiles !== undefined && output.userProfiles !== null) {
    contents.userProfiles = deserializeAws_json1_1UserProfilesList(
      output.userProfiles,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ProjectAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ProjectAlreadyExistsException => {
  let contents: any = {
    __type: "ProjectAlreadyExistsException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ProjectConfigurationException = (
  output: any,
  context: __SerdeContext
): ProjectConfigurationException => {
  let contents: any = {
    __type: "ProjectConfigurationException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ProjectCreationFailedException = (
  output: any,
  context: __SerdeContext
): ProjectCreationFailedException => {
  let contents: any = {
    __type: "ProjectCreationFailedException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ProjectNotFoundException = (
  output: any,
  context: __SerdeContext
): ProjectNotFoundException => {
  let contents: any = {
    __type: "ProjectNotFoundException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ProjectStatus = (
  output: any,
  context: __SerdeContext
): ProjectStatus => {
  let contents: any = {
    __type: "ProjectStatus",
    reason: undefined,
    state: undefined
  };
  if (output.reason !== undefined && output.reason !== null) {
    contents.reason = output.reason;
  }
  if (output.state !== undefined && output.state !== null) {
    contents.state = output.state;
  }
  return contents;
};

const deserializeAws_json1_1ProjectSummary = (
  output: any,
  context: __SerdeContext
): ProjectSummary => {
  let contents: any = {
    __type: "ProjectSummary",
    projectArn: undefined,
    projectId: undefined
  };
  if (output.projectArn !== undefined && output.projectArn !== null) {
    contents.projectArn = output.projectArn;
  }
  if (output.projectId !== undefined && output.projectId !== null) {
    contents.projectId = output.projectId;
  }
  return contents;
};

const deserializeAws_json1_1ProjectsList = (
  output: any,
  context: __SerdeContext
): Array<ProjectSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ProjectSummary(entry, context)
  );
};

const deserializeAws_json1_1Resource = (
  output: any,
  context: __SerdeContext
): Resource => {
  let contents: any = {
    __type: "Resource",
    id: undefined
  };
  if (output.id !== undefined && output.id !== null) {
    contents.id = output.id;
  }
  return contents;
};

const deserializeAws_json1_1ResourcesResult = (
  output: any,
  context: __SerdeContext
): Array<Resource> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Resource(entry, context)
  );
};

const deserializeAws_json1_1TagProjectResult = (
  output: any,
  context: __SerdeContext
): TagProjectResult => {
  let contents: any = {
    __type: "TagProjectResult",
    tags: undefined
  };
  if (output.tags !== undefined && output.tags !== null) {
    contents.tags = deserializeAws_json1_1Tags(output.tags, context);
  }
  return contents;
};

const deserializeAws_json1_1Tags = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1TeamMember = (
  output: any,
  context: __SerdeContext
): TeamMember => {
  let contents: any = {
    __type: "TeamMember",
    projectRole: undefined,
    remoteAccessAllowed: undefined,
    userArn: undefined
  };
  if (output.projectRole !== undefined && output.projectRole !== null) {
    contents.projectRole = output.projectRole;
  }
  if (
    output.remoteAccessAllowed !== undefined &&
    output.remoteAccessAllowed !== null
  ) {
    contents.remoteAccessAllowed = output.remoteAccessAllowed;
  }
  if (output.userArn !== undefined && output.userArn !== null) {
    contents.userArn = output.userArn;
  }
  return contents;
};

const deserializeAws_json1_1TeamMemberAlreadyAssociatedException = (
  output: any,
  context: __SerdeContext
): TeamMemberAlreadyAssociatedException => {
  let contents: any = {
    __type: "TeamMemberAlreadyAssociatedException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1TeamMemberNotFoundException = (
  output: any,
  context: __SerdeContext
): TeamMemberNotFoundException => {
  let contents: any = {
    __type: "TeamMemberNotFoundException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1TeamMemberResult = (
  output: any,
  context: __SerdeContext
): Array<TeamMember> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TeamMember(entry, context)
  );
};

const deserializeAws_json1_1UntagProjectResult = (
  output: any,
  context: __SerdeContext
): UntagProjectResult => {
  let contents: any = {
    __type: "UntagProjectResult"
  };
  return contents;
};

const deserializeAws_json1_1UpdateProjectResult = (
  output: any,
  context: __SerdeContext
): UpdateProjectResult => {
  let contents: any = {
    __type: "UpdateProjectResult"
  };
  return contents;
};

const deserializeAws_json1_1UpdateTeamMemberResult = (
  output: any,
  context: __SerdeContext
): UpdateTeamMemberResult => {
  let contents: any = {
    __type: "UpdateTeamMemberResult",
    projectRole: undefined,
    remoteAccessAllowed: undefined,
    userArn: undefined
  };
  if (output.projectRole !== undefined && output.projectRole !== null) {
    contents.projectRole = output.projectRole;
  }
  if (
    output.remoteAccessAllowed !== undefined &&
    output.remoteAccessAllowed !== null
  ) {
    contents.remoteAccessAllowed = output.remoteAccessAllowed;
  }
  if (output.userArn !== undefined && output.userArn !== null) {
    contents.userArn = output.userArn;
  }
  return contents;
};

const deserializeAws_json1_1UpdateUserProfileResult = (
  output: any,
  context: __SerdeContext
): UpdateUserProfileResult => {
  let contents: any = {
    __type: "UpdateUserProfileResult",
    createdTimestamp: undefined,
    displayName: undefined,
    emailAddress: undefined,
    lastModifiedTimestamp: undefined,
    sshPublicKey: undefined,
    userArn: undefined
  };
  if (
    output.createdTimestamp !== undefined &&
    output.createdTimestamp !== null
  ) {
    contents.createdTimestamp = new Date(
      Math.round(output.createdTimestamp * 1000)
    );
  }
  if (output.displayName !== undefined && output.displayName !== null) {
    contents.displayName = output.displayName;
  }
  if (output.emailAddress !== undefined && output.emailAddress !== null) {
    contents.emailAddress = output.emailAddress;
  }
  if (
    output.lastModifiedTimestamp !== undefined &&
    output.lastModifiedTimestamp !== null
  ) {
    contents.lastModifiedTimestamp = new Date(
      Math.round(output.lastModifiedTimestamp * 1000)
    );
  }
  if (output.sshPublicKey !== undefined && output.sshPublicKey !== null) {
    contents.sshPublicKey = output.sshPublicKey;
  }
  if (output.userArn !== undefined && output.userArn !== null) {
    contents.userArn = output.userArn;
  }
  return contents;
};

const deserializeAws_json1_1UserProfileAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): UserProfileAlreadyExistsException => {
  let contents: any = {
    __type: "UserProfileAlreadyExistsException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1UserProfileNotFoundException = (
  output: any,
  context: __SerdeContext
): UserProfileNotFoundException => {
  let contents: any = {
    __type: "UserProfileNotFoundException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1UserProfileSummary = (
  output: any,
  context: __SerdeContext
): UserProfileSummary => {
  let contents: any = {
    __type: "UserProfileSummary",
    displayName: undefined,
    emailAddress: undefined,
    sshPublicKey: undefined,
    userArn: undefined
  };
  if (output.displayName !== undefined && output.displayName !== null) {
    contents.displayName = output.displayName;
  }
  if (output.emailAddress !== undefined && output.emailAddress !== null) {
    contents.emailAddress = output.emailAddress;
  }
  if (output.sshPublicKey !== undefined && output.sshPublicKey !== null) {
    contents.sshPublicKey = output.sshPublicKey;
  }
  if (output.userArn !== undefined && output.userArn !== null) {
    contents.userArn = output.userArn;
  }
  return contents;
};

const deserializeAws_json1_1UserProfilesList = (
  output: any,
  context: __SerdeContext
): Array<UserProfileSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1UserProfileSummary(entry, context)
  );
};

const deserializeAws_json1_1ValidationException = (
  output: any,
  context: __SerdeContext
): ValidationException => {
  let contents: any = {
    __type: "ValidationException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
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
