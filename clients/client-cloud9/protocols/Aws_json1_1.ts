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
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export const serializeAws_json1_1CreateEnvironmentEC2Command = async (
  input: CreateEnvironmentEC2CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateEnvironmentEC2Request(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateEnvironmentMembershipCommand = async (
  input: CreateEnvironmentMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "AWSCloud9WorkspaceManagementService.CreateEnvironmentMembership"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateEnvironmentMembershipRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteEnvironmentCommand = async (
  input: DeleteEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSCloud9WorkspaceManagementService.DeleteEnvironment"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteEnvironmentRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteEnvironmentMembershipCommand = async (
  input: DeleteEnvironmentMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "AWSCloud9WorkspaceManagementService.DeleteEnvironmentMembership"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteEnvironmentMembershipRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEnvironmentMembershipsCommand = async (
  input: DescribeEnvironmentMembershipsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeEnvironmentMembershipsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEnvironmentsCommand = async (
  input: DescribeEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSCloud9WorkspaceManagementService.DescribeEnvironments"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeEnvironmentsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEnvironmentStatusCommand = async (
  input: DescribeEnvironmentStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeEnvironmentStatusRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListEnvironmentsCommand = async (
  input: ListEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSCloud9WorkspaceManagementService.ListEnvironments"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListEnvironmentsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateEnvironmentCommand = async (
  input: UpdateEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSCloud9WorkspaceManagementService.UpdateEnvironment"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateEnvironmentRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateEnvironmentMembershipCommand = async (
  input: UpdateEnvironmentMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateEnvironmentMembershipRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CreateEnvironmentEC2Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentEC2CommandOutput> => {
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
};

const deserializeAws_json1_1CreateEnvironmentEC2CommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentEC2CommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.cloud9#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.cloud9#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.cloud9#ForbiddenException":
      response = {
        ...(await deserializeAws_json1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.cloud9#InternalServerErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloud9#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.cloud9#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cloud9#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1CreateEnvironmentMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentMembershipCommandOutput> => {
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
};

const deserializeAws_json1_1CreateEnvironmentMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentMembershipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.cloud9#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.cloud9#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.cloud9#ForbiddenException":
      response = {
        ...(await deserializeAws_json1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.cloud9#InternalServerErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloud9#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.cloud9#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cloud9#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1DeleteEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentCommandOutput> => {
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
};

const deserializeAws_json1_1DeleteEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.cloud9#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.cloud9#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.cloud9#ForbiddenException":
      response = {
        ...(await deserializeAws_json1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.cloud9#InternalServerErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloud9#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.cloud9#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cloud9#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1DeleteEnvironmentMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentMembershipCommandOutput> => {
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
};

const deserializeAws_json1_1DeleteEnvironmentMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentMembershipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.cloud9#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.cloud9#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.cloud9#ForbiddenException":
      response = {
        ...(await deserializeAws_json1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.cloud9#InternalServerErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloud9#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.cloud9#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cloud9#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1DescribeEnvironmentMembershipsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentMembershipsCommandOutput> => {
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
};

const deserializeAws_json1_1DescribeEnvironmentMembershipsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentMembershipsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.cloud9#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.cloud9#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.cloud9#ForbiddenException":
      response = {
        ...(await deserializeAws_json1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.cloud9#InternalServerErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloud9#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.cloud9#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cloud9#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1DescribeEnvironmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentsCommandOutput> => {
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
};

const deserializeAws_json1_1DescribeEnvironmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.cloud9#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.cloud9#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.cloud9#ForbiddenException":
      response = {
        ...(await deserializeAws_json1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.cloud9#InternalServerErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloud9#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.cloud9#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cloud9#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1DescribeEnvironmentStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentStatusCommandOutput> => {
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
};

const deserializeAws_json1_1DescribeEnvironmentStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.cloud9#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.cloud9#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.cloud9#ForbiddenException":
      response = {
        ...(await deserializeAws_json1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.cloud9#InternalServerErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloud9#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.cloud9#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cloud9#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1ListEnvironmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentsCommandOutput> => {
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
};

const deserializeAws_json1_1ListEnvironmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.cloud9#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.cloud9#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.cloud9#ForbiddenException":
      response = {
        ...(await deserializeAws_json1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.cloud9#InternalServerErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloud9#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.cloud9#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cloud9#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1UpdateEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentCommandOutput> => {
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
};

const deserializeAws_json1_1UpdateEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.cloud9#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.cloud9#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.cloud9#ForbiddenException":
      response = {
        ...(await deserializeAws_json1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.cloud9#InternalServerErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloud9#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.cloud9#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cloud9#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1UpdateEnvironmentMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentMembershipCommandOutput> => {
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
};

const deserializeAws_json1_1UpdateEnvironmentMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentMembershipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.cloud9#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.cloud9#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.cloud9#ForbiddenException":
      response = {
        ...(await deserializeAws_json1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.cloud9#InternalServerErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloud9#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.cloud9#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cloud9#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

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
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1BoundedEnvironmentIdList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1CreateEnvironmentEC2Request = (
  input: CreateEnvironmentEC2Request,
  context: __SerdeContext
): any => {
  return {
    ...(input.automaticStopTimeMinutes !== undefined && {
      automaticStopTimeMinutes: input.automaticStopTimeMinutes
    }),
    ...(input.clientRequestToken !== undefined && {
      clientRequestToken: input.clientRequestToken
    }),
    ...(input.description !== undefined && { description: input.description }),
    ...(input.instanceType !== undefined && {
      instanceType: input.instanceType
    }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.ownerArn !== undefined && { ownerArn: input.ownerArn }),
    ...(input.subnetId !== undefined && { subnetId: input.subnetId })
  };
};

const serializeAws_json1_1CreateEnvironmentMembershipRequest = (
  input: CreateEnvironmentMembershipRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.environmentId !== undefined && {
      environmentId: input.environmentId
    }),
    ...(input.permissions !== undefined && { permissions: input.permissions }),
    ...(input.userArn !== undefined && { userArn: input.userArn })
  };
};

const serializeAws_json1_1DeleteEnvironmentMembershipRequest = (
  input: DeleteEnvironmentMembershipRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.environmentId !== undefined && {
      environmentId: input.environmentId
    }),
    ...(input.userArn !== undefined && { userArn: input.userArn })
  };
};

const serializeAws_json1_1DeleteEnvironmentRequest = (
  input: DeleteEnvironmentRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.environmentId !== undefined && {
      environmentId: input.environmentId
    })
  };
};

const serializeAws_json1_1DescribeEnvironmentMembershipsRequest = (
  input: DescribeEnvironmentMembershipsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.environmentId !== undefined && {
      environmentId: input.environmentId
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.permissions !== undefined && {
      permissions: serializeAws_json1_1PermissionsList(
        input.permissions,
        context
      )
    }),
    ...(input.userArn !== undefined && { userArn: input.userArn })
  };
};

const serializeAws_json1_1DescribeEnvironmentsRequest = (
  input: DescribeEnvironmentsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.environmentIds !== undefined && {
      environmentIds: serializeAws_json1_1BoundedEnvironmentIdList(
        input.environmentIds,
        context
      )
    })
  };
};

const serializeAws_json1_1DescribeEnvironmentStatusRequest = (
  input: DescribeEnvironmentStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.environmentId !== undefined && {
      environmentId: input.environmentId
    })
  };
};

const serializeAws_json1_1ListEnvironmentsRequest = (
  input: ListEnvironmentsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1PermissionsList = (
  input: (Permissions | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1UpdateEnvironmentMembershipRequest = (
  input: UpdateEnvironmentMembershipRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.environmentId !== undefined && {
      environmentId: input.environmentId
    }),
    ...(input.permissions !== undefined && { permissions: input.permissions }),
    ...(input.userArn !== undefined && { userArn: input.userArn })
  };
};

const serializeAws_json1_1UpdateEnvironmentRequest = (
  input: UpdateEnvironmentRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.description !== undefined && { description: input.description }),
    ...(input.environmentId !== undefined && {
      environmentId: input.environmentId
    }),
    ...(input.name !== undefined && { name: input.name })
  };
};

const deserializeAws_json1_1BadRequestException = (
  output: any,
  context: __SerdeContext
): BadRequestException => {
  return {
    __type: "BadRequestException",
    className:
      output.className !== undefined && output.className !== null
        ? output.className
        : undefined,
    code:
      output.code !== undefined && output.code !== null
        ? output.code
        : undefined,
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ConflictException = (
  output: any,
  context: __SerdeContext
): ConflictException => {
  return {
    __type: "ConflictException",
    className:
      output.className !== undefined && output.className !== null
        ? output.className
        : undefined,
    code:
      output.code !== undefined && output.code !== null
        ? output.code
        : undefined,
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateEnvironmentEC2Result = (
  output: any,
  context: __SerdeContext
): CreateEnvironmentEC2Result => {
  return {
    __type: "CreateEnvironmentEC2Result",
    environmentId:
      output.environmentId !== undefined && output.environmentId !== null
        ? output.environmentId
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateEnvironmentMembershipResult = (
  output: any,
  context: __SerdeContext
): CreateEnvironmentMembershipResult => {
  return {
    __type: "CreateEnvironmentMembershipResult",
    membership:
      output.membership !== undefined && output.membership !== null
        ? deserializeAws_json1_1EnvironmentMember(output.membership, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteEnvironmentMembershipResult = (
  output: any,
  context: __SerdeContext
): DeleteEnvironmentMembershipResult => {
  return {
    __type: "DeleteEnvironmentMembershipResult"
  } as any;
};

const deserializeAws_json1_1DeleteEnvironmentResult = (
  output: any,
  context: __SerdeContext
): DeleteEnvironmentResult => {
  return {
    __type: "DeleteEnvironmentResult"
  } as any;
};

const deserializeAws_json1_1DescribeEnvironmentMembershipsResult = (
  output: any,
  context: __SerdeContext
): DescribeEnvironmentMembershipsResult => {
  return {
    __type: "DescribeEnvironmentMembershipsResult",
    memberships:
      output.memberships !== undefined && output.memberships !== null
        ? deserializeAws_json1_1EnvironmentMembersList(
            output.memberships,
            context
          )
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeEnvironmentsResult = (
  output: any,
  context: __SerdeContext
): DescribeEnvironmentsResult => {
  return {
    __type: "DescribeEnvironmentsResult",
    environments:
      output.environments !== undefined && output.environments !== null
        ? deserializeAws_json1_1EnvironmentList(output.environments, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeEnvironmentStatusResult = (
  output: any,
  context: __SerdeContext
): DescribeEnvironmentStatusResult => {
  return {
    __type: "DescribeEnvironmentStatusResult",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_json1_1Environment = (
  output: any,
  context: __SerdeContext
): Environment => {
  return {
    __type: "Environment",
    arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    description:
      output.description !== undefined && output.description !== null
        ? output.description
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    lifecycle:
      output.lifecycle !== undefined && output.lifecycle !== null
        ? deserializeAws_json1_1EnvironmentLifecycle(output.lifecycle, context)
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    ownerArn:
      output.ownerArn !== undefined && output.ownerArn !== null
        ? output.ownerArn
        : undefined,
    type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_json1_1EnvironmentIdList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1EnvironmentLifecycle = (
  output: any,
  context: __SerdeContext
): EnvironmentLifecycle => {
  return {
    __type: "EnvironmentLifecycle",
    failureResource:
      output.failureResource !== undefined && output.failureResource !== null
        ? output.failureResource
        : undefined,
    reason:
      output.reason !== undefined && output.reason !== null
        ? output.reason
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_json1_1EnvironmentList = (
  output: any,
  context: __SerdeContext
): Environment[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Environment(entry, context)
  );
};

const deserializeAws_json1_1EnvironmentMember = (
  output: any,
  context: __SerdeContext
): EnvironmentMember => {
  return {
    __type: "EnvironmentMember",
    environmentId:
      output.environmentId !== undefined && output.environmentId !== null
        ? output.environmentId
        : undefined,
    lastAccess:
      output.lastAccess !== undefined && output.lastAccess !== null
        ? new Date(Math.round(output.lastAccess * 1000))
        : undefined,
    permissions:
      output.permissions !== undefined && output.permissions !== null
        ? output.permissions
        : undefined,
    userArn:
      output.userArn !== undefined && output.userArn !== null
        ? output.userArn
        : undefined,
    userId:
      output.userId !== undefined && output.userId !== null
        ? output.userId
        : undefined
  } as any;
};

const deserializeAws_json1_1EnvironmentMembersList = (
  output: any,
  context: __SerdeContext
): EnvironmentMember[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EnvironmentMember(entry, context)
  );
};

const deserializeAws_json1_1ForbiddenException = (
  output: any,
  context: __SerdeContext
): ForbiddenException => {
  return {
    __type: "ForbiddenException",
    className:
      output.className !== undefined && output.className !== null
        ? output.className
        : undefined,
    code:
      output.code !== undefined && output.code !== null
        ? output.code
        : undefined,
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InternalServerErrorException = (
  output: any,
  context: __SerdeContext
): InternalServerErrorException => {
  return {
    __type: "InternalServerErrorException",
    className:
      output.className !== undefined && output.className !== null
        ? output.className
        : undefined,
    code:
      output.code !== undefined && output.code !== null
        ? output.code
        : undefined,
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  return {
    __type: "LimitExceededException",
    className:
      output.className !== undefined && output.className !== null
        ? output.className
        : undefined,
    code:
      output.code !== undefined && output.code !== null
        ? output.code
        : undefined,
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ListEnvironmentsResult = (
  output: any,
  context: __SerdeContext
): ListEnvironmentsResult => {
  return {
    __type: "ListEnvironmentsResult",
    environmentIds:
      output.environmentIds !== undefined && output.environmentIds !== null
        ? deserializeAws_json1_1EnvironmentIdList(
            output.environmentIds,
            context
          )
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1NotFoundException = (
  output: any,
  context: __SerdeContext
): NotFoundException => {
  return {
    __type: "NotFoundException",
    className:
      output.className !== undefined && output.className !== null
        ? output.className
        : undefined,
    code:
      output.code !== undefined && output.code !== null
        ? output.code
        : undefined,
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1TooManyRequestsException = (
  output: any,
  context: __SerdeContext
): TooManyRequestsException => {
  return {
    __type: "TooManyRequestsException",
    className:
      output.className !== undefined && output.className !== null
        ? output.className
        : undefined,
    code:
      output.code !== undefined && output.code !== null
        ? output.code
        : undefined,
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateEnvironmentMembershipResult = (
  output: any,
  context: __SerdeContext
): UpdateEnvironmentMembershipResult => {
  return {
    __type: "UpdateEnvironmentMembershipResult",
    membership:
      output.membership !== undefined && output.membership !== null
        ? deserializeAws_json1_1EnvironmentMember(output.membership, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateEnvironmentResult = (
  output: any,
  context: __SerdeContext
): UpdateEnvironmentResult => {
  return {
    __type: "UpdateEnvironmentResult"
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
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
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
    headers
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
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
