import {
  CancelRotateSecretCommandInput,
  CancelRotateSecretCommandOutput
} from "../commands/CancelRotateSecretCommand";
import {
  CreateSecretCommandInput,
  CreateSecretCommandOutput
} from "../commands/CreateSecretCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput
} from "../commands/DeleteResourcePolicyCommand";
import {
  DeleteSecretCommandInput,
  DeleteSecretCommandOutput
} from "../commands/DeleteSecretCommand";
import {
  DescribeSecretCommandInput,
  DescribeSecretCommandOutput
} from "../commands/DescribeSecretCommand";
import {
  GetRandomPasswordCommandInput,
  GetRandomPasswordCommandOutput
} from "../commands/GetRandomPasswordCommand";
import {
  GetResourcePolicyCommandInput,
  GetResourcePolicyCommandOutput
} from "../commands/GetResourcePolicyCommand";
import {
  GetSecretValueCommandInput,
  GetSecretValueCommandOutput
} from "../commands/GetSecretValueCommand";
import {
  ListSecretVersionIdsCommandInput,
  ListSecretVersionIdsCommandOutput
} from "../commands/ListSecretVersionIdsCommand";
import {
  ListSecretsCommandInput,
  ListSecretsCommandOutput
} from "../commands/ListSecretsCommand";
import {
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput
} from "../commands/PutResourcePolicyCommand";
import {
  PutSecretValueCommandInput,
  PutSecretValueCommandOutput
} from "../commands/PutSecretValueCommand";
import {
  RestoreSecretCommandInput,
  RestoreSecretCommandOutput
} from "../commands/RestoreSecretCommand";
import {
  RotateSecretCommandInput,
  RotateSecretCommandOutput
} from "../commands/RotateSecretCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateSecretCommandInput,
  UpdateSecretCommandOutput
} from "../commands/UpdateSecretCommand";
import {
  UpdateSecretVersionStageCommandInput,
  UpdateSecretVersionStageCommandOutput
} from "../commands/UpdateSecretVersionStageCommand";
import {
  CancelRotateSecretRequest,
  CancelRotateSecretResponse,
  CreateSecretRequest,
  CreateSecretResponse,
  DecryptionFailure,
  DeleteResourcePolicyRequest,
  DeleteResourcePolicyResponse,
  DeleteSecretRequest,
  DeleteSecretResponse,
  DescribeSecretRequest,
  DescribeSecretResponse,
  EncryptionFailure,
  GetRandomPasswordRequest,
  GetRandomPasswordResponse,
  GetResourcePolicyRequest,
  GetResourcePolicyResponse,
  GetSecretValueRequest,
  GetSecretValueResponse,
  InternalServiceError,
  InvalidNextTokenException,
  InvalidParameterException,
  InvalidRequestException,
  LimitExceededException,
  ListSecretVersionIdsRequest,
  ListSecretVersionIdsResponse,
  ListSecretsRequest,
  ListSecretsResponse,
  MalformedPolicyDocumentException,
  PreconditionNotMetException,
  PutResourcePolicyRequest,
  PutResourcePolicyResponse,
  PutSecretValueRequest,
  PutSecretValueResponse,
  ResourceExistsException,
  ResourceNotFoundException,
  RestoreSecretRequest,
  RestoreSecretResponse,
  RotateSecretRequest,
  RotateSecretResponse,
  RotationRulesType,
  SecretListEntry,
  SecretVersionsListEntry,
  Tag,
  TagResourceRequest,
  UntagResourceRequest,
  UpdateSecretRequest,
  UpdateSecretResponse,
  UpdateSecretVersionStageRequest,
  UpdateSecretVersionStageResponse
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
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_json1_1CancelRotateSecretCommand = async (
  input: CancelRotateSecretCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "secretsmanager.CancelRotateSecret"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CancelRotateSecretRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateSecretCommand = async (
  input: CreateSecretCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "secretsmanager.CreateSecret"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateSecretRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "secretsmanager.DeleteResourcePolicy"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteResourcePolicyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSecretCommand = async (
  input: DeleteSecretCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "secretsmanager.DeleteSecret"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteSecretRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSecretCommand = async (
  input: DescribeSecretCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "secretsmanager.DescribeSecret"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeSecretRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRandomPasswordCommand = async (
  input: GetRandomPasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "secretsmanager.GetRandomPassword"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetRandomPasswordRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetResourcePolicyCommand = async (
  input: GetResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "secretsmanager.GetResourcePolicy"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetResourcePolicyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSecretValueCommand = async (
  input: GetSecretValueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "secretsmanager.GetSecretValue"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetSecretValueRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSecretsCommand = async (
  input: ListSecretsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "secretsmanager.ListSecrets"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListSecretsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSecretVersionIdsCommand = async (
  input: ListSecretVersionIdsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "secretsmanager.ListSecretVersionIds"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListSecretVersionIdsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "secretsmanager.PutResourcePolicy"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutResourcePolicyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutSecretValueCommand = async (
  input: PutSecretValueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "secretsmanager.PutSecretValue"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutSecretValueRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RestoreSecretCommand = async (
  input: RestoreSecretCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "secretsmanager.RestoreSecret"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RestoreSecretRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RotateSecretCommand = async (
  input: RotateSecretCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "secretsmanager.RotateSecret"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RotateSecretRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "secretsmanager.TagResource"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "secretsmanager.UntagResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UntagResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateSecretCommand = async (
  input: UpdateSecretCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "secretsmanager.UpdateSecret"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateSecretRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateSecretVersionStageCommand = async (
  input: UpdateSecretVersionStageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "secretsmanager.UpdateSecretVersionStage"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateSecretVersionStageRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CancelRotateSecretCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelRotateSecretCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CancelRotateSecretCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelRotateSecretResponse(data, context);
  const response: CancelRotateSecretCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CancelRotateSecretResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CancelRotateSecretCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelRotateSecretCommandOutput> => {
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
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1CreateSecretCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSecretCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateSecretCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSecretResponse(data, context);
  const response: CreateSecretCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateSecretResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateSecretCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSecretCommandOutput> => {
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
    case "EncryptionFailure":
    case "com.amazonaws.secretsmanager#EncryptionFailure":
      response = {
        ...(await deserializeAws_json1_1EncryptionFailureResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.secretsmanager#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedPolicyDocumentException":
    case "com.amazonaws.secretsmanager#MalformedPolicyDocumentException":
      response = {
        ...(await deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PreconditionNotMetException":
    case "com.amazonaws.secretsmanager#PreconditionNotMetException":
      response = {
        ...(await deserializeAws_json1_1PreconditionNotMetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.secretsmanager#ResourceExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteResourcePolicyCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteResourcePolicyResponse(data, context);
  const response: DeleteResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteResourcePolicyResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
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
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1DeleteSecretCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSecretCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteSecretCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteSecretResponse(data, context);
  const response: DeleteSecretCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteSecretResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteSecretCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSecretCommandOutput> => {
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
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1DescribeSecretCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSecretCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeSecretCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSecretResponse(data, context);
  const response: DescribeSecretCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeSecretResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeSecretCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSecretCommandOutput> => {
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
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1GetRandomPasswordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRandomPasswordCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetRandomPasswordCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRandomPasswordResponse(data, context);
  const response: GetRandomPasswordCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRandomPasswordResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRandomPasswordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRandomPasswordCommandOutput> => {
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
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1GetResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetResourcePolicyResponse(data, context);
  const response: GetResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetResourcePolicyResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
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
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1GetSecretValueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSecretValueCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetSecretValueCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSecretValueResponse(data, context);
  const response: GetSecretValueCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSecretValueResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSecretValueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSecretValueCommandOutput> => {
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
    case "DecryptionFailure":
    case "com.amazonaws.secretsmanager#DecryptionFailure":
      response = {
        ...(await deserializeAws_json1_1DecryptionFailureResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1ListSecretsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecretsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListSecretsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSecretsResponse(data, context);
  const response: ListSecretsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListSecretsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSecretsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecretsCommandOutput> => {
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
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.secretsmanager#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
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

export const deserializeAws_json1_1ListSecretVersionIdsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecretVersionIdsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListSecretVersionIdsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSecretVersionIdsResponse(data, context);
  const response: ListSecretVersionIdsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListSecretVersionIdsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSecretVersionIdsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecretVersionIdsCommandOutput> => {
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
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.secretsmanager#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutResourcePolicyResponse(data, context);
  const response: PutResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutResourcePolicyResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
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
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedPolicyDocumentException":
    case "com.amazonaws.secretsmanager#MalformedPolicyDocumentException":
      response = {
        ...(await deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1PutSecretValueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSecretValueCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutSecretValueCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutSecretValueResponse(data, context);
  const response: PutSecretValueCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutSecretValueResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutSecretValueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSecretValueCommandOutput> => {
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
    case "EncryptionFailure":
    case "com.amazonaws.secretsmanager#EncryptionFailure":
      response = {
        ...(await deserializeAws_json1_1EncryptionFailureResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.secretsmanager#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.secretsmanager#ResourceExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1RestoreSecretCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreSecretCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RestoreSecretCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RestoreSecretResponse(data, context);
  const response: RestoreSecretCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RestoreSecretResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RestoreSecretCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreSecretCommandOutput> => {
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
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1RotateSecretCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RotateSecretCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RotateSecretCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RotateSecretResponse(data, context);
  const response: RotateSecretCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RotateSecretResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RotateSecretCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RotateSecretCommandOutput> => {
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
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
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
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
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
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1UpdateSecretCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSecretCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateSecretCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateSecretResponse(data, context);
  const response: UpdateSecretCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateSecretResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateSecretCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSecretCommandOutput> => {
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
    case "EncryptionFailure":
    case "com.amazonaws.secretsmanager#EncryptionFailure":
      response = {
        ...(await deserializeAws_json1_1EncryptionFailureResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.secretsmanager#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedPolicyDocumentException":
    case "com.amazonaws.secretsmanager#MalformedPolicyDocumentException":
      response = {
        ...(await deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PreconditionNotMetException":
    case "com.amazonaws.secretsmanager#PreconditionNotMetException":
      response = {
        ...(await deserializeAws_json1_1PreconditionNotMetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.secretsmanager#ResourceExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1UpdateSecretVersionStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSecretVersionStageCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateSecretVersionStageCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateSecretVersionStageResponse(
    data,
    context
  );
  const response: UpdateSecretVersionStageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateSecretVersionStageResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateSecretVersionStageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSecretVersionStageCommandOutput> => {
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
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.secretsmanager#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

const deserializeAws_json1_1DecryptionFailureResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DecryptionFailure> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DecryptionFailure(
    body,
    context
  );
  const contents: DecryptionFailure = {
    name: "DecryptionFailure",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1EncryptionFailureResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EncryptionFailure> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EncryptionFailure(
    body,
    context
  );
  const contents: EncryptionFailure = {
    name: "EncryptionFailure",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InternalServiceErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServiceError(
    body,
    context
  );
  const contents: InternalServiceError = {
    name: "InternalServiceError",
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

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(
    body,
    context
  );
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRequestException(
    body,
    context
  );
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
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

const deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MalformedPolicyDocumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MalformedPolicyDocumentException(
    body,
    context
  );
  const contents: MalformedPolicyDocumentException = {
    name: "MalformedPolicyDocumentException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1PreconditionNotMetExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PreconditionNotMetException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PreconditionNotMetException(
    body,
    context
  );
  const contents: PreconditionNotMetException = {
    name: "PreconditionNotMetException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceExistsException(
    body,
    context
  );
  const contents: ResourceExistsException = {
    name: "ResourceExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(
    body,
    context
  );
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1CancelRotateSecretRequest = (
  input: CancelRotateSecretRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SecretId !== undefined && { SecretId: input.SecretId })
  };
};

const serializeAws_json1_1CreateSecretRequest = (
  input: CreateSecretRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.KmsKeyId !== undefined && { KmsKeyId: input.KmsKeyId }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.SecretBinary !== undefined && {
      SecretBinary: context.base64Encoder(input.SecretBinary)
    }),
    ...(input.SecretString !== undefined && {
      SecretString: input.SecretString
    }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1TagListType(input.Tags, context)
    })
  };
};

const serializeAws_json1_1DeleteResourcePolicyRequest = (
  input: DeleteResourcePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SecretId !== undefined && { SecretId: input.SecretId })
  };
};

const serializeAws_json1_1DeleteSecretRequest = (
  input: DeleteSecretRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ForceDeleteWithoutRecovery !== undefined && {
      ForceDeleteWithoutRecovery: input.ForceDeleteWithoutRecovery
    }),
    ...(input.RecoveryWindowInDays !== undefined && {
      RecoveryWindowInDays: input.RecoveryWindowInDays
    }),
    ...(input.SecretId !== undefined && { SecretId: input.SecretId })
  };
};

const serializeAws_json1_1DescribeSecretRequest = (
  input: DescribeSecretRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SecretId !== undefined && { SecretId: input.SecretId })
  };
};

const serializeAws_json1_1GetRandomPasswordRequest = (
  input: GetRandomPasswordRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ExcludeCharacters !== undefined && {
      ExcludeCharacters: input.ExcludeCharacters
    }),
    ...(input.ExcludeLowercase !== undefined && {
      ExcludeLowercase: input.ExcludeLowercase
    }),
    ...(input.ExcludeNumbers !== undefined && {
      ExcludeNumbers: input.ExcludeNumbers
    }),
    ...(input.ExcludePunctuation !== undefined && {
      ExcludePunctuation: input.ExcludePunctuation
    }),
    ...(input.ExcludeUppercase !== undefined && {
      ExcludeUppercase: input.ExcludeUppercase
    }),
    ...(input.IncludeSpace !== undefined && {
      IncludeSpace: input.IncludeSpace
    }),
    ...(input.PasswordLength !== undefined && {
      PasswordLength: input.PasswordLength
    }),
    ...(input.RequireEachIncludedType !== undefined && {
      RequireEachIncludedType: input.RequireEachIncludedType
    })
  };
};

const serializeAws_json1_1GetResourcePolicyRequest = (
  input: GetResourcePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SecretId !== undefined && { SecretId: input.SecretId })
  };
};

const serializeAws_json1_1GetSecretValueRequest = (
  input: GetSecretValueRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SecretId !== undefined && { SecretId: input.SecretId }),
    ...(input.VersionId !== undefined && { VersionId: input.VersionId }),
    ...(input.VersionStage !== undefined && {
      VersionStage: input.VersionStage
    })
  };
};

const serializeAws_json1_1ListSecretsRequest = (
  input: ListSecretsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListSecretVersionIdsRequest = (
  input: ListSecretVersionIdsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IncludeDeprecated !== undefined && {
      IncludeDeprecated: input.IncludeDeprecated
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.SecretId !== undefined && { SecretId: input.SecretId })
  };
};

const serializeAws_json1_1PutResourcePolicyRequest = (
  input: PutResourcePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourcePolicy !== undefined && {
      ResourcePolicy: input.ResourcePolicy
    }),
    ...(input.SecretId !== undefined && { SecretId: input.SecretId })
  };
};

const serializeAws_json1_1PutSecretValueRequest = (
  input: PutSecretValueRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.SecretBinary !== undefined && {
      SecretBinary: context.base64Encoder(input.SecretBinary)
    }),
    ...(input.SecretId !== undefined && { SecretId: input.SecretId }),
    ...(input.SecretString !== undefined && {
      SecretString: input.SecretString
    }),
    ...(input.VersionStages !== undefined && {
      VersionStages: serializeAws_json1_1SecretVersionStagesType(
        input.VersionStages,
        context
      )
    })
  };
};

const serializeAws_json1_1RestoreSecretRequest = (
  input: RestoreSecretRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SecretId !== undefined && { SecretId: input.SecretId })
  };
};

const serializeAws_json1_1RotateSecretRequest = (
  input: RotateSecretRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.RotationLambdaARN !== undefined && {
      RotationLambdaARN: input.RotationLambdaARN
    }),
    ...(input.RotationRules !== undefined && {
      RotationRules: serializeAws_json1_1RotationRulesType(
        input.RotationRules,
        context
      )
    }),
    ...(input.SecretId !== undefined && { SecretId: input.SecretId })
  };
};

const serializeAws_json1_1RotationRulesType = (
  input: RotationRulesType,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutomaticallyAfterDays !== undefined && {
      AutomaticallyAfterDays: input.AutomaticallyAfterDays
    })
  };
};

const serializeAws_json1_1SecretVersionStagesType = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_json1_1TagKeyListType = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1TagListType = (
  input: Tag[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1TagResourceRequest = (
  input: TagResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SecretId !== undefined && { SecretId: input.SecretId }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1TagListType(input.Tags, context)
    })
  };
};

const serializeAws_json1_1UntagResourceRequest = (
  input: UntagResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SecretId !== undefined && { SecretId: input.SecretId }),
    ...(input.TagKeys !== undefined && {
      TagKeys: serializeAws_json1_1TagKeyListType(input.TagKeys, context)
    })
  };
};

const serializeAws_json1_1UpdateSecretRequest = (
  input: UpdateSecretRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.KmsKeyId !== undefined && { KmsKeyId: input.KmsKeyId }),
    ...(input.SecretBinary !== undefined && {
      SecretBinary: context.base64Encoder(input.SecretBinary)
    }),
    ...(input.SecretId !== undefined && { SecretId: input.SecretId }),
    ...(input.SecretString !== undefined && {
      SecretString: input.SecretString
    })
  };
};

const serializeAws_json1_1UpdateSecretVersionStageRequest = (
  input: UpdateSecretVersionStageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MoveToVersionId !== undefined && {
      MoveToVersionId: input.MoveToVersionId
    }),
    ...(input.RemoveFromVersionId !== undefined && {
      RemoveFromVersionId: input.RemoveFromVersionId
    }),
    ...(input.SecretId !== undefined && { SecretId: input.SecretId }),
    ...(input.VersionStage !== undefined && {
      VersionStage: input.VersionStage
    })
  };
};

const deserializeAws_json1_1CancelRotateSecretResponse = (
  output: any,
  context: __SerdeContext
): CancelRotateSecretResponse => {
  return {
    __type: "CancelRotateSecretResponse",
    ARN:
      output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    VersionId:
      output.VersionId !== undefined && output.VersionId !== null
        ? output.VersionId
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateSecretResponse = (
  output: any,
  context: __SerdeContext
): CreateSecretResponse => {
  return {
    __type: "CreateSecretResponse",
    ARN:
      output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    VersionId:
      output.VersionId !== undefined && output.VersionId !== null
        ? output.VersionId
        : undefined
  } as any;
};

const deserializeAws_json1_1DecryptionFailure = (
  output: any,
  context: __SerdeContext
): DecryptionFailure => {
  return {
    __type: "DecryptionFailure",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteResourcePolicyResponse = (
  output: any,
  context: __SerdeContext
): DeleteResourcePolicyResponse => {
  return {
    __type: "DeleteResourcePolicyResponse",
    ARN:
      output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteSecretResponse = (
  output: any,
  context: __SerdeContext
): DeleteSecretResponse => {
  return {
    __type: "DeleteSecretResponse",
    ARN:
      output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
    DeletionDate:
      output.DeletionDate !== undefined && output.DeletionDate !== null
        ? new Date(Math.round(output.DeletionDate * 1000))
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeSecretResponse = (
  output: any,
  context: __SerdeContext
): DescribeSecretResponse => {
  return {
    __type: "DescribeSecretResponse",
    ARN:
      output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
    DeletedDate:
      output.DeletedDate !== undefined && output.DeletedDate !== null
        ? new Date(Math.round(output.DeletedDate * 1000))
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    KmsKeyId:
      output.KmsKeyId !== undefined && output.KmsKeyId !== null
        ? output.KmsKeyId
        : undefined,
    LastAccessedDate:
      output.LastAccessedDate !== undefined && output.LastAccessedDate !== null
        ? new Date(Math.round(output.LastAccessedDate * 1000))
        : undefined,
    LastChangedDate:
      output.LastChangedDate !== undefined && output.LastChangedDate !== null
        ? new Date(Math.round(output.LastChangedDate * 1000))
        : undefined,
    LastRotatedDate:
      output.LastRotatedDate !== undefined && output.LastRotatedDate !== null
        ? new Date(Math.round(output.LastRotatedDate * 1000))
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    OwningService:
      output.OwningService !== undefined && output.OwningService !== null
        ? output.OwningService
        : undefined,
    RotationEnabled:
      output.RotationEnabled !== undefined && output.RotationEnabled !== null
        ? output.RotationEnabled
        : undefined,
    RotationLambdaARN:
      output.RotationLambdaARN !== undefined &&
      output.RotationLambdaARN !== null
        ? output.RotationLambdaARN
        : undefined,
    RotationRules:
      output.RotationRules !== undefined && output.RotationRules !== null
        ? deserializeAws_json1_1RotationRulesType(output.RotationRules, context)
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagListType(output.Tags, context)
        : undefined,
    VersionIdsToStages:
      output.VersionIdsToStages !== undefined &&
      output.VersionIdsToStages !== null
        ? deserializeAws_json1_1SecretVersionsToStagesMapType(
            output.VersionIdsToStages,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1EncryptionFailure = (
  output: any,
  context: __SerdeContext
): EncryptionFailure => {
  return {
    __type: "EncryptionFailure",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1GetRandomPasswordResponse = (
  output: any,
  context: __SerdeContext
): GetRandomPasswordResponse => {
  return {
    __type: "GetRandomPasswordResponse",
    RandomPassword:
      output.RandomPassword !== undefined && output.RandomPassword !== null
        ? output.RandomPassword
        : undefined
  } as any;
};

const deserializeAws_json1_1GetResourcePolicyResponse = (
  output: any,
  context: __SerdeContext
): GetResourcePolicyResponse => {
  return {
    __type: "GetResourcePolicyResponse",
    ARN:
      output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    ResourcePolicy:
      output.ResourcePolicy !== undefined && output.ResourcePolicy !== null
        ? output.ResourcePolicy
        : undefined
  } as any;
};

const deserializeAws_json1_1GetSecretValueResponse = (
  output: any,
  context: __SerdeContext
): GetSecretValueResponse => {
  return {
    __type: "GetSecretValueResponse",
    ARN:
      output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
    CreatedDate:
      output.CreatedDate !== undefined && output.CreatedDate !== null
        ? new Date(Math.round(output.CreatedDate * 1000))
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    SecretBinary:
      output.SecretBinary !== undefined && output.SecretBinary !== null
        ? context.base64Decoder(output.SecretBinary)
        : undefined,
    SecretString:
      output.SecretString !== undefined && output.SecretString !== null
        ? output.SecretString
        : undefined,
    VersionId:
      output.VersionId !== undefined && output.VersionId !== null
        ? output.VersionId
        : undefined,
    VersionStages:
      output.VersionStages !== undefined && output.VersionStages !== null
        ? deserializeAws_json1_1SecretVersionStagesType(
            output.VersionStages,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1InternalServiceError = (
  output: any,
  context: __SerdeContext
): InternalServiceError => {
  return {
    __type: "InternalServiceError",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  return {
    __type: "InvalidNextTokenException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  return {
    __type: "InvalidParameterException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  return {
    __type: "InvalidRequestException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  return {
    __type: "LimitExceededException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1ListSecretsResponse = (
  output: any,
  context: __SerdeContext
): ListSecretsResponse => {
  return {
    __type: "ListSecretsResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    SecretList:
      output.SecretList !== undefined && output.SecretList !== null
        ? deserializeAws_json1_1SecretListType(output.SecretList, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ListSecretVersionIdsResponse = (
  output: any,
  context: __SerdeContext
): ListSecretVersionIdsResponse => {
  return {
    __type: "ListSecretVersionIdsResponse",
    ARN:
      output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    Versions:
      output.Versions !== undefined && output.Versions !== null
        ? deserializeAws_json1_1SecretVersionsListType(output.Versions, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1MalformedPolicyDocumentException = (
  output: any,
  context: __SerdeContext
): MalformedPolicyDocumentException => {
  return {
    __type: "MalformedPolicyDocumentException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1PreconditionNotMetException = (
  output: any,
  context: __SerdeContext
): PreconditionNotMetException => {
  return {
    __type: "PreconditionNotMetException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1PutResourcePolicyResponse = (
  output: any,
  context: __SerdeContext
): PutResourcePolicyResponse => {
  return {
    __type: "PutResourcePolicyResponse",
    ARN:
      output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined
  } as any;
};

const deserializeAws_json1_1PutSecretValueResponse = (
  output: any,
  context: __SerdeContext
): PutSecretValueResponse => {
  return {
    __type: "PutSecretValueResponse",
    ARN:
      output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    VersionId:
      output.VersionId !== undefined && output.VersionId !== null
        ? output.VersionId
        : undefined,
    VersionStages:
      output.VersionStages !== undefined && output.VersionStages !== null
        ? deserializeAws_json1_1SecretVersionStagesType(
            output.VersionStages,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ResourceExistsException = (
  output: any,
  context: __SerdeContext
): ResourceExistsException => {
  return {
    __type: "ResourceExistsException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    __type: "ResourceNotFoundException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1RestoreSecretResponse = (
  output: any,
  context: __SerdeContext
): RestoreSecretResponse => {
  return {
    __type: "RestoreSecretResponse",
    ARN:
      output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined
  } as any;
};

const deserializeAws_json1_1RotateSecretResponse = (
  output: any,
  context: __SerdeContext
): RotateSecretResponse => {
  return {
    __type: "RotateSecretResponse",
    ARN:
      output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    VersionId:
      output.VersionId !== undefined && output.VersionId !== null
        ? output.VersionId
        : undefined
  } as any;
};

const deserializeAws_json1_1RotationRulesType = (
  output: any,
  context: __SerdeContext
): RotationRulesType => {
  return {
    __type: "RotationRulesType",
    AutomaticallyAfterDays:
      output.AutomaticallyAfterDays !== undefined &&
      output.AutomaticallyAfterDays !== null
        ? output.AutomaticallyAfterDays
        : undefined
  } as any;
};

const deserializeAws_json1_1SecretListEntry = (
  output: any,
  context: __SerdeContext
): SecretListEntry => {
  return {
    __type: "SecretListEntry",
    ARN:
      output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
    DeletedDate:
      output.DeletedDate !== undefined && output.DeletedDate !== null
        ? new Date(Math.round(output.DeletedDate * 1000))
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    KmsKeyId:
      output.KmsKeyId !== undefined && output.KmsKeyId !== null
        ? output.KmsKeyId
        : undefined,
    LastAccessedDate:
      output.LastAccessedDate !== undefined && output.LastAccessedDate !== null
        ? new Date(Math.round(output.LastAccessedDate * 1000))
        : undefined,
    LastChangedDate:
      output.LastChangedDate !== undefined && output.LastChangedDate !== null
        ? new Date(Math.round(output.LastChangedDate * 1000))
        : undefined,
    LastRotatedDate:
      output.LastRotatedDate !== undefined && output.LastRotatedDate !== null
        ? new Date(Math.round(output.LastRotatedDate * 1000))
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    OwningService:
      output.OwningService !== undefined && output.OwningService !== null
        ? output.OwningService
        : undefined,
    RotationEnabled:
      output.RotationEnabled !== undefined && output.RotationEnabled !== null
        ? output.RotationEnabled
        : undefined,
    RotationLambdaARN:
      output.RotationLambdaARN !== undefined &&
      output.RotationLambdaARN !== null
        ? output.RotationLambdaARN
        : undefined,
    RotationRules:
      output.RotationRules !== undefined && output.RotationRules !== null
        ? deserializeAws_json1_1RotationRulesType(output.RotationRules, context)
        : undefined,
    SecretVersionsToStages:
      output.SecretVersionsToStages !== undefined &&
      output.SecretVersionsToStages !== null
        ? deserializeAws_json1_1SecretVersionsToStagesMapType(
            output.SecretVersionsToStages,
            context
          )
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagListType(output.Tags, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1SecretListType = (
  output: any,
  context: __SerdeContext
): SecretListEntry[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SecretListEntry(entry, context)
  );
};

const deserializeAws_json1_1SecretVersionsListEntry = (
  output: any,
  context: __SerdeContext
): SecretVersionsListEntry => {
  return {
    __type: "SecretVersionsListEntry",
    CreatedDate:
      output.CreatedDate !== undefined && output.CreatedDate !== null
        ? new Date(Math.round(output.CreatedDate * 1000))
        : undefined,
    LastAccessedDate:
      output.LastAccessedDate !== undefined && output.LastAccessedDate !== null
        ? new Date(Math.round(output.LastAccessedDate * 1000))
        : undefined,
    VersionId:
      output.VersionId !== undefined && output.VersionId !== null
        ? output.VersionId
        : undefined,
    VersionStages:
      output.VersionStages !== undefined && output.VersionStages !== null
        ? deserializeAws_json1_1SecretVersionStagesType(
            output.VersionStages,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1SecretVersionsListType = (
  output: any,
  context: __SerdeContext
): SecretVersionsListEntry[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SecretVersionsListEntry(entry, context)
  );
};

const deserializeAws_json1_1SecretVersionStagesType = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1SecretVersionsToStagesMapType = (
  output: any,
  context: __SerdeContext
): { [key: string]: string[] } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string[] }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: deserializeAws_json1_1SecretVersionStagesType(value, context)
    }),
    {}
  );
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  return {
    __type: "Tag",
    Key:
      output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_json1_1TagListType = (
  output: any,
  context: __SerdeContext
): Tag[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1UpdateSecretResponse = (
  output: any,
  context: __SerdeContext
): UpdateSecretResponse => {
  return {
    __type: "UpdateSecretResponse",
    ARN:
      output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    VersionId:
      output.VersionId !== undefined && output.VersionId !== null
        ? output.VersionId
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateSecretVersionStageResponse = (
  output: any,
  context: __SerdeContext
): UpdateSecretVersionStageResponse => {
  return {
    __type: "UpdateSecretVersionStageResponse",
    ARN:
      output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined
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
