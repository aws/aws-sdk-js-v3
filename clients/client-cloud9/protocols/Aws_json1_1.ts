import {
  CreateEnvironmentEC2CommandInput,
  CreateEnvironmentEC2CommandOutput
} from "../commands/CreateEnvironmentEC2Command";
import {
  CreateEnvironmentMembershipCommandInput,
  CreateEnvironmentMembershipCommandOutput
} from "../commands/CreateEnvironmentMembershipCommand";
import {
  DeleteEnvironmentCommandInput,
  DeleteEnvironmentCommandOutput
} from "../commands/DeleteEnvironmentCommand";
import {
  DeleteEnvironmentMembershipCommandInput,
  DeleteEnvironmentMembershipCommandOutput
} from "../commands/DeleteEnvironmentMembershipCommand";
import {
  DescribeEnvironmentMembershipsCommandInput,
  DescribeEnvironmentMembershipsCommandOutput
} from "../commands/DescribeEnvironmentMembershipsCommand";
import {
  DescribeEnvironmentStatusCommandInput,
  DescribeEnvironmentStatusCommandOutput
} from "../commands/DescribeEnvironmentStatusCommand";
import {
  DescribeEnvironmentsCommandInput,
  DescribeEnvironmentsCommandOutput
} from "../commands/DescribeEnvironmentsCommand";
import {
  ListEnvironmentsCommandInput,
  ListEnvironmentsCommandOutput
} from "../commands/ListEnvironmentsCommand";
import {
  UpdateEnvironmentCommandInput,
  UpdateEnvironmentCommandOutput
} from "../commands/UpdateEnvironmentCommand";
import {
  UpdateEnvironmentMembershipCommandInput,
  UpdateEnvironmentMembershipCommandOutput
} from "../commands/UpdateEnvironmentMembershipCommand";
import {
  BadRequestException,
  ConflictException,
  CreateEnvironmentEC2Request,
  CreateEnvironmentEC2Result,
  CreateEnvironmentMembershipRequest,
  CreateEnvironmentMembershipResult,
  DeleteEnvironmentMembershipRequest,
  DeleteEnvironmentMembershipResult,
  DeleteEnvironmentRequest,
  DeleteEnvironmentResult,
  DescribeEnvironmentMembershipsRequest,
  DescribeEnvironmentMembershipsResult,
  DescribeEnvironmentStatusRequest,
  DescribeEnvironmentStatusResult,
  DescribeEnvironmentsRequest,
  DescribeEnvironmentsResult,
  Environment,
  EnvironmentLifecycle,
  EnvironmentMember,
  ForbiddenException,
  InternalServerErrorException,
  LimitExceededException,
  ListEnvironmentsRequest,
  ListEnvironmentsResult,
  NotFoundException,
  Permissions,
  TooManyRequestsException,
  UpdateEnvironmentMembershipRequest,
  UpdateEnvironmentMembershipResult,
  UpdateEnvironmentRequest,
  UpdateEnvironmentResult
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

export async function serializeAws_json1_1CreateEnvironmentEC2Command(
  input: CreateEnvironmentEC2CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1CreateEnvironmentEC2Request(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateEnvironmentEC2",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateEnvironmentMembershipCommand(
  input: CreateEnvironmentMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSCloud9WorkspaceManagementService.CreateEnvironmentMembership";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1CreateEnvironmentMembershipRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateEnvironmentMembership",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteEnvironmentCommand(
  input: DeleteEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSCloud9WorkspaceManagementService.DeleteEnvironment";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DeleteEnvironmentRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteEnvironment",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteEnvironmentMembershipCommand(
  input: DeleteEnvironmentMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSCloud9WorkspaceManagementService.DeleteEnvironmentMembership";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DeleteEnvironmentMembershipRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteEnvironmentMembership",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeEnvironmentMembershipsCommand(
  input: DescribeEnvironmentMembershipsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DescribeEnvironmentMembershipsRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeEnvironmentMemberships",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeEnvironmentStatusCommand(
  input: DescribeEnvironmentStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DescribeEnvironmentStatusRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeEnvironmentStatus",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeEnvironmentsCommand(
  input: DescribeEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSCloud9WorkspaceManagementService.DescribeEnvironments";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DescribeEnvironmentsRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeEnvironments",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListEnvironmentsCommand(
  input: ListEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSCloud9WorkspaceManagementService.ListEnvironments";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1ListEnvironmentsRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListEnvironments",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateEnvironmentCommand(
  input: UpdateEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSCloud9WorkspaceManagementService.UpdateEnvironment";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1UpdateEnvironmentRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateEnvironment",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateEnvironmentMembershipCommand(
  input: UpdateEnvironmentMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1UpdateEnvironmentMembershipRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateEnvironmentMembership",
    headers: headers,
    body: body
  });
}

export async function deserializeAws_json1_1CreateEnvironmentEC2Command(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentEC2CommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateEnvironmentEC2CommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateEnvironmentEC2Result(data, context);
  const response: CreateEnvironmentEC2CommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateEnvironmentEC2Result",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateEnvironmentEC2CommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentEC2CommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.AWSCloud9WorkspaceManagement#BadRequestException":
      response = await deserializeAws_json1_1BadRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConflictException":
    case "com.amazon.AWSCloud9WorkspaceManagement#ConflictException":
      response = await deserializeAws_json1_1ConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ForbiddenException":
    case "com.amazon.AWSCloud9WorkspaceManagement#ForbiddenException":
      response = await deserializeAws_json1_1ForbiddenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazon.AWSCloud9WorkspaceManagement#InternalServerErrorException":
      response = await deserializeAws_json1_1InternalServerErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazon.AWSCloud9WorkspaceManagement#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.AWSCloud9WorkspaceManagement#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.AWSCloud9WorkspaceManagement#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.AWSCloud9WorkspaceManagement#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1CreateEnvironmentMembershipCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentMembershipCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateEnvironmentMembershipCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateEnvironmentMembershipResult(
    data,
    context
  );
  const response: CreateEnvironmentMembershipCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateEnvironmentMembershipResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateEnvironmentMembershipCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentMembershipCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.AWSCloud9WorkspaceManagement#BadRequestException":
      response = await deserializeAws_json1_1BadRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConflictException":
    case "com.amazon.AWSCloud9WorkspaceManagement#ConflictException":
      response = await deserializeAws_json1_1ConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ForbiddenException":
    case "com.amazon.AWSCloud9WorkspaceManagement#ForbiddenException":
      response = await deserializeAws_json1_1ForbiddenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazon.AWSCloud9WorkspaceManagement#InternalServerErrorException":
      response = await deserializeAws_json1_1InternalServerErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazon.AWSCloud9WorkspaceManagement#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.AWSCloud9WorkspaceManagement#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.AWSCloud9WorkspaceManagement#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.AWSCloud9WorkspaceManagement#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DeleteEnvironmentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteEnvironmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteEnvironmentResult(data, context);
  const response: DeleteEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteEnvironmentResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteEnvironmentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.AWSCloud9WorkspaceManagement#BadRequestException":
      response = await deserializeAws_json1_1BadRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConflictException":
    case "com.amazon.AWSCloud9WorkspaceManagement#ConflictException":
      response = await deserializeAws_json1_1ConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ForbiddenException":
    case "com.amazon.AWSCloud9WorkspaceManagement#ForbiddenException":
      response = await deserializeAws_json1_1ForbiddenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazon.AWSCloud9WorkspaceManagement#InternalServerErrorException":
      response = await deserializeAws_json1_1InternalServerErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazon.AWSCloud9WorkspaceManagement#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.AWSCloud9WorkspaceManagement#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.AWSCloud9WorkspaceManagement#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.AWSCloud9WorkspaceManagement#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DeleteEnvironmentMembershipCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentMembershipCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteEnvironmentMembershipCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteEnvironmentMembershipResult(
    data,
    context
  );
  const response: DeleteEnvironmentMembershipCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteEnvironmentMembershipResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteEnvironmentMembershipCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentMembershipCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.AWSCloud9WorkspaceManagement#BadRequestException":
      response = await deserializeAws_json1_1BadRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConflictException":
    case "com.amazon.AWSCloud9WorkspaceManagement#ConflictException":
      response = await deserializeAws_json1_1ConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ForbiddenException":
    case "com.amazon.AWSCloud9WorkspaceManagement#ForbiddenException":
      response = await deserializeAws_json1_1ForbiddenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazon.AWSCloud9WorkspaceManagement#InternalServerErrorException":
      response = await deserializeAws_json1_1InternalServerErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazon.AWSCloud9WorkspaceManagement#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.AWSCloud9WorkspaceManagement#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.AWSCloud9WorkspaceManagement#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.AWSCloud9WorkspaceManagement#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DescribeEnvironmentMembershipsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentMembershipsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeEnvironmentMembershipsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEnvironmentMembershipsResult(
    data,
    context
  );
  const response: DescribeEnvironmentMembershipsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeEnvironmentMembershipsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeEnvironmentMembershipsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentMembershipsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.AWSCloud9WorkspaceManagement#BadRequestException":
      response = await deserializeAws_json1_1BadRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConflictException":
    case "com.amazon.AWSCloud9WorkspaceManagement#ConflictException":
      response = await deserializeAws_json1_1ConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ForbiddenException":
    case "com.amazon.AWSCloud9WorkspaceManagement#ForbiddenException":
      response = await deserializeAws_json1_1ForbiddenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazon.AWSCloud9WorkspaceManagement#InternalServerErrorException":
      response = await deserializeAws_json1_1InternalServerErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazon.AWSCloud9WorkspaceManagement#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.AWSCloud9WorkspaceManagement#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.AWSCloud9WorkspaceManagement#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.AWSCloud9WorkspaceManagement#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DescribeEnvironmentStatusCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentStatusCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeEnvironmentStatusCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEnvironmentStatusResult(
    data,
    context
  );
  const response: DescribeEnvironmentStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeEnvironmentStatusResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeEnvironmentStatusCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentStatusCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.AWSCloud9WorkspaceManagement#BadRequestException":
      response = await deserializeAws_json1_1BadRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConflictException":
    case "com.amazon.AWSCloud9WorkspaceManagement#ConflictException":
      response = await deserializeAws_json1_1ConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ForbiddenException":
    case "com.amazon.AWSCloud9WorkspaceManagement#ForbiddenException":
      response = await deserializeAws_json1_1ForbiddenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazon.AWSCloud9WorkspaceManagement#InternalServerErrorException":
      response = await deserializeAws_json1_1InternalServerErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazon.AWSCloud9WorkspaceManagement#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.AWSCloud9WorkspaceManagement#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.AWSCloud9WorkspaceManagement#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.AWSCloud9WorkspaceManagement#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DescribeEnvironmentsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeEnvironmentsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEnvironmentsResult(data, context);
  const response: DescribeEnvironmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeEnvironmentsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeEnvironmentsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.AWSCloud9WorkspaceManagement#BadRequestException":
      response = await deserializeAws_json1_1BadRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConflictException":
    case "com.amazon.AWSCloud9WorkspaceManagement#ConflictException":
      response = await deserializeAws_json1_1ConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ForbiddenException":
    case "com.amazon.AWSCloud9WorkspaceManagement#ForbiddenException":
      response = await deserializeAws_json1_1ForbiddenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazon.AWSCloud9WorkspaceManagement#InternalServerErrorException":
      response = await deserializeAws_json1_1InternalServerErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazon.AWSCloud9WorkspaceManagement#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.AWSCloud9WorkspaceManagement#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.AWSCloud9WorkspaceManagement#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.AWSCloud9WorkspaceManagement#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListEnvironmentsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListEnvironmentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListEnvironmentsResult(data, context);
  const response: ListEnvironmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListEnvironmentsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListEnvironmentsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.AWSCloud9WorkspaceManagement#BadRequestException":
      response = await deserializeAws_json1_1BadRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConflictException":
    case "com.amazon.AWSCloud9WorkspaceManagement#ConflictException":
      response = await deserializeAws_json1_1ConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ForbiddenException":
    case "com.amazon.AWSCloud9WorkspaceManagement#ForbiddenException":
      response = await deserializeAws_json1_1ForbiddenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazon.AWSCloud9WorkspaceManagement#InternalServerErrorException":
      response = await deserializeAws_json1_1InternalServerErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazon.AWSCloud9WorkspaceManagement#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.AWSCloud9WorkspaceManagement#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.AWSCloud9WorkspaceManagement#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.AWSCloud9WorkspaceManagement#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1UpdateEnvironmentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateEnvironmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateEnvironmentResult(data, context);
  const response: UpdateEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateEnvironmentResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateEnvironmentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.AWSCloud9WorkspaceManagement#BadRequestException":
      response = await deserializeAws_json1_1BadRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConflictException":
    case "com.amazon.AWSCloud9WorkspaceManagement#ConflictException":
      response = await deserializeAws_json1_1ConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ForbiddenException":
    case "com.amazon.AWSCloud9WorkspaceManagement#ForbiddenException":
      response = await deserializeAws_json1_1ForbiddenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazon.AWSCloud9WorkspaceManagement#InternalServerErrorException":
      response = await deserializeAws_json1_1InternalServerErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazon.AWSCloud9WorkspaceManagement#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.AWSCloud9WorkspaceManagement#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.AWSCloud9WorkspaceManagement#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.AWSCloud9WorkspaceManagement#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1UpdateEnvironmentMembershipCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentMembershipCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateEnvironmentMembershipCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateEnvironmentMembershipResult(
    data,
    context
  );
  const response: UpdateEnvironmentMembershipCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateEnvironmentMembershipResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateEnvironmentMembershipCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentMembershipCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.AWSCloud9WorkspaceManagement#BadRequestException":
      response = await deserializeAws_json1_1BadRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConflictException":
    case "com.amazon.AWSCloud9WorkspaceManagement#ConflictException":
      response = await deserializeAws_json1_1ConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ForbiddenException":
    case "com.amazon.AWSCloud9WorkspaceManagement#ForbiddenException":
      response = await deserializeAws_json1_1ForbiddenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazon.AWSCloud9WorkspaceManagement#InternalServerErrorException":
      response = await deserializeAws_json1_1InternalServerErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazon.AWSCloud9WorkspaceManagement#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazon.AWSCloud9WorkspaceManagement#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.AWSCloud9WorkspaceManagement#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.AWSCloud9WorkspaceManagement#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

const deserializeAws_json1_1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BadRequestException(
    body,
    context
  );
  const contents: BadRequestException = {
    name: "BadRequestException",
    __type: "BadRequestException",
    $fault: "client",
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
    __type: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ForbiddenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ForbiddenException(
    body,
    context
  );
  const contents: ForbiddenException = {
    name: "ForbiddenException",
    __type: "ForbiddenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InternalServerErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerErrorException(
    body,
    context
  );
  const contents: InternalServerErrorException = {
    name: "InternalServerErrorException",
    __type: "InternalServerErrorException",
    $fault: "server",
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
    __type: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NotFoundException(
    body,
    context
  );
  const contents: NotFoundException = {
    name: "NotFoundException",
    __type: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyRequestsException(
    body,
    context
  );
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    __type: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1BoundedEnvironmentIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1CreateEnvironmentEC2Request = (
  input: CreateEnvironmentEC2Request,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.automaticStopTimeMinutes !== undefined) {
    bodyParams["automaticStopTimeMinutes"] = input.automaticStopTimeMinutes;
  }
  if (input.clientRequestToken !== undefined) {
    bodyParams["clientRequestToken"] = input.clientRequestToken;
  }
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.instanceType !== undefined) {
    bodyParams["instanceType"] = input.instanceType;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.ownerArn !== undefined) {
    bodyParams["ownerArn"] = input.ownerArn;
  }
  if (input.subnetId !== undefined) {
    bodyParams["subnetId"] = input.subnetId;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateEnvironmentMembershipRequest = (
  input: CreateEnvironmentMembershipRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.environmentId !== undefined) {
    bodyParams["environmentId"] = input.environmentId;
  }
  if (input.permissions !== undefined) {
    bodyParams["permissions"] = input.permissions;
  }
  if (input.userArn !== undefined) {
    bodyParams["userArn"] = input.userArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteEnvironmentMembershipRequest = (
  input: DeleteEnvironmentMembershipRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.environmentId !== undefined) {
    bodyParams["environmentId"] = input.environmentId;
  }
  if (input.userArn !== undefined) {
    bodyParams["userArn"] = input.userArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteEnvironmentRequest = (
  input: DeleteEnvironmentRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.environmentId !== undefined) {
    bodyParams["environmentId"] = input.environmentId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeEnvironmentMembershipsRequest = (
  input: DescribeEnvironmentMembershipsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.environmentId !== undefined) {
    bodyParams["environmentId"] = input.environmentId;
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.permissions !== undefined) {
    bodyParams["permissions"] = serializeAws_json1_1PermissionsList(
      input.permissions,
      context
    );
  }
  if (input.userArn !== undefined) {
    bodyParams["userArn"] = input.userArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeEnvironmentStatusRequest = (
  input: DescribeEnvironmentStatusRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.environmentId !== undefined) {
    bodyParams["environmentId"] = input.environmentId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeEnvironmentsRequest = (
  input: DescribeEnvironmentsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.environmentIds !== undefined) {
    bodyParams["environmentIds"] = serializeAws_json1_1BoundedEnvironmentIdList(
      input.environmentIds,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ListEnvironmentsRequest = (
  input: ListEnvironmentsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1PermissionsList = (
  input: Array<Permissions | string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1UpdateEnvironmentMembershipRequest = (
  input: UpdateEnvironmentMembershipRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.environmentId !== undefined) {
    bodyParams["environmentId"] = input.environmentId;
  }
  if (input.permissions !== undefined) {
    bodyParams["permissions"] = input.permissions;
  }
  if (input.userArn !== undefined) {
    bodyParams["userArn"] = input.userArn;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateEnvironmentRequest = (
  input: UpdateEnvironmentRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.environmentId !== undefined) {
    bodyParams["environmentId"] = input.environmentId;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const deserializeAws_json1_1BadRequestException = (
  output: any,
  context: __SerdeContext
): BadRequestException => {
  let contents: any = {
    __type: "BadRequestException",
    className: undefined,
    code: undefined,
    message: undefined
  };
  if (output.className !== undefined) {
    contents.className = output.className;
  }
  if (output.code !== undefined) {
    contents.code = output.code;
  }
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ConflictException = (
  output: any,
  context: __SerdeContext
): ConflictException => {
  let contents: any = {
    __type: "ConflictException",
    className: undefined,
    code: undefined,
    message: undefined
  };
  if (output.className !== undefined) {
    contents.className = output.className;
  }
  if (output.code !== undefined) {
    contents.code = output.code;
  }
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1CreateEnvironmentEC2Result = (
  output: any,
  context: __SerdeContext
): CreateEnvironmentEC2Result => {
  let contents: any = {
    __type: "CreateEnvironmentEC2Result",
    environmentId: undefined
  };
  if (output.environmentId !== undefined) {
    contents.environmentId = output.environmentId;
  }
  return contents;
};

const deserializeAws_json1_1CreateEnvironmentMembershipResult = (
  output: any,
  context: __SerdeContext
): CreateEnvironmentMembershipResult => {
  let contents: any = {
    __type: "CreateEnvironmentMembershipResult",
    membership: undefined
  };
  if (output.membership !== undefined) {
    contents.membership = deserializeAws_json1_1EnvironmentMember(
      output.membership,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeleteEnvironmentMembershipResult = (
  output: any,
  context: __SerdeContext
): DeleteEnvironmentMembershipResult => {
  let contents: any = {
    __type: "DeleteEnvironmentMembershipResult"
  };
  return contents;
};

const deserializeAws_json1_1DeleteEnvironmentResult = (
  output: any,
  context: __SerdeContext
): DeleteEnvironmentResult => {
  let contents: any = {
    __type: "DeleteEnvironmentResult"
  };
  return contents;
};

const deserializeAws_json1_1DescribeEnvironmentMembershipsResult = (
  output: any,
  context: __SerdeContext
): DescribeEnvironmentMembershipsResult => {
  let contents: any = {
    __type: "DescribeEnvironmentMembershipsResult",
    memberships: undefined,
    nextToken: undefined
  };
  if (output.memberships !== undefined) {
    contents.memberships = deserializeAws_json1_1EnvironmentMembersList(
      output.memberships,
      context
    );
  }
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1DescribeEnvironmentStatusResult = (
  output: any,
  context: __SerdeContext
): DescribeEnvironmentStatusResult => {
  let contents: any = {
    __type: "DescribeEnvironmentStatusResult",
    message: undefined,
    status: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1DescribeEnvironmentsResult = (
  output: any,
  context: __SerdeContext
): DescribeEnvironmentsResult => {
  let contents: any = {
    __type: "DescribeEnvironmentsResult",
    environments: undefined
  };
  if (output.environments !== undefined) {
    contents.environments = deserializeAws_json1_1EnvironmentList(
      output.environments,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1Environment = (
  output: any,
  context: __SerdeContext
): Environment => {
  let contents: any = {
    __type: "Environment",
    arn: undefined,
    description: undefined,
    id: undefined,
    lifecycle: undefined,
    name: undefined,
    ownerArn: undefined,
    type: undefined
  };
  if (output.arn !== undefined) {
    contents.arn = output.arn;
  }
  if (output.description !== undefined) {
    contents.description = output.description;
  }
  if (output.id !== undefined) {
    contents.id = output.id;
  }
  if (output.lifecycle !== undefined) {
    contents.lifecycle = deserializeAws_json1_1EnvironmentLifecycle(
      output.lifecycle,
      context
    );
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.ownerArn !== undefined) {
    contents.ownerArn = output.ownerArn;
  }
  if (output.type !== undefined) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_json1_1EnvironmentIdList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1EnvironmentLifecycle = (
  output: any,
  context: __SerdeContext
): EnvironmentLifecycle => {
  let contents: any = {
    __type: "EnvironmentLifecycle",
    failureResource: undefined,
    reason: undefined,
    status: undefined
  };
  if (output.failureResource !== undefined) {
    contents.failureResource = output.failureResource;
  }
  if (output.reason !== undefined) {
    contents.reason = output.reason;
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1EnvironmentList = (
  output: any,
  context: __SerdeContext
): Array<Environment> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Environment(entry, context)
  );
};

const deserializeAws_json1_1EnvironmentMember = (
  output: any,
  context: __SerdeContext
): EnvironmentMember => {
  let contents: any = {
    __type: "EnvironmentMember",
    environmentId: undefined,
    lastAccess: undefined,
    permissions: undefined,
    userArn: undefined,
    userId: undefined
  };
  if (output.environmentId !== undefined) {
    contents.environmentId = output.environmentId;
  }
  if (output.lastAccess !== undefined) {
    contents.lastAccess = new Date(
      output.lastAccess % 1 != 0
        ? Math.round(output.lastAccess * 1000)
        : output.lastAccess
    );
  }
  if (output.permissions !== undefined) {
    contents.permissions = output.permissions;
  }
  if (output.userArn !== undefined) {
    contents.userArn = output.userArn;
  }
  if (output.userId !== undefined) {
    contents.userId = output.userId;
  }
  return contents;
};

const deserializeAws_json1_1EnvironmentMembersList = (
  output: any,
  context: __SerdeContext
): Array<EnvironmentMember> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EnvironmentMember(entry, context)
  );
};

const deserializeAws_json1_1ForbiddenException = (
  output: any,
  context: __SerdeContext
): ForbiddenException => {
  let contents: any = {
    __type: "ForbiddenException",
    className: undefined,
    code: undefined,
    message: undefined
  };
  if (output.className !== undefined) {
    contents.className = output.className;
  }
  if (output.code !== undefined) {
    contents.code = output.code;
  }
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InternalServerErrorException = (
  output: any,
  context: __SerdeContext
): InternalServerErrorException => {
  let contents: any = {
    __type: "InternalServerErrorException",
    className: undefined,
    code: undefined,
    message: undefined
  };
  if (output.className !== undefined) {
    contents.className = output.className;
  }
  if (output.code !== undefined) {
    contents.code = output.code;
  }
  if (output.message !== undefined) {
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
    className: undefined,
    code: undefined,
    message: undefined
  };
  if (output.className !== undefined) {
    contents.className = output.className;
  }
  if (output.code !== undefined) {
    contents.code = output.code;
  }
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ListEnvironmentsResult = (
  output: any,
  context: __SerdeContext
): ListEnvironmentsResult => {
  let contents: any = {
    __type: "ListEnvironmentsResult",
    environmentIds: undefined,
    nextToken: undefined
  };
  if (output.environmentIds !== undefined) {
    contents.environmentIds = deserializeAws_json1_1EnvironmentIdList(
      output.environmentIds,
      context
    );
  }
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1NotFoundException = (
  output: any,
  context: __SerdeContext
): NotFoundException => {
  let contents: any = {
    __type: "NotFoundException",
    className: undefined,
    code: undefined,
    message: undefined
  };
  if (output.className !== undefined) {
    contents.className = output.className;
  }
  if (output.code !== undefined) {
    contents.code = output.code;
  }
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1TooManyRequestsException = (
  output: any,
  context: __SerdeContext
): TooManyRequestsException => {
  let contents: any = {
    __type: "TooManyRequestsException",
    className: undefined,
    code: undefined,
    message: undefined
  };
  if (output.className !== undefined) {
    contents.className = output.className;
  }
  if (output.code !== undefined) {
    contents.code = output.code;
  }
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1UpdateEnvironmentMembershipResult = (
  output: any,
  context: __SerdeContext
): UpdateEnvironmentMembershipResult => {
  let contents: any = {
    __type: "UpdateEnvironmentMembershipResult",
    membership: undefined
  };
  if (output.membership !== undefined) {
    contents.membership = deserializeAws_json1_1EnvironmentMember(
      output.membership,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1UpdateEnvironmentResult = (
  output: any,
  context: __SerdeContext
): UpdateEnvironmentResult => {
  let contents: any = {
    __type: "UpdateEnvironmentResult"
  };
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

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
