import {
  AssociateMemberAccountCommandInput,
  AssociateMemberAccountCommandOutput,
} from "../commands/AssociateMemberAccountCommand";
import {
  AssociateS3ResourcesCommandInput,
  AssociateS3ResourcesCommandOutput,
} from "../commands/AssociateS3ResourcesCommand";
import {
  DisassociateMemberAccountCommandInput,
  DisassociateMemberAccountCommandOutput,
} from "../commands/DisassociateMemberAccountCommand";
import {
  DisassociateS3ResourcesCommandInput,
  DisassociateS3ResourcesCommandOutput,
} from "../commands/DisassociateS3ResourcesCommand";
import { ListMemberAccountsCommandInput, ListMemberAccountsCommandOutput } from "../commands/ListMemberAccountsCommand";
import { ListS3ResourcesCommandInput, ListS3ResourcesCommandOutput } from "../commands/ListS3ResourcesCommand";
import { UpdateS3ResourcesCommandInput, UpdateS3ResourcesCommandOutput } from "../commands/UpdateS3ResourcesCommand";
import {
  AccessDeniedException,
  AssociateMemberAccountRequest,
  AssociateS3ResourcesRequest,
  AssociateS3ResourcesResult,
  ClassificationType,
  ClassificationTypeUpdate,
  DisassociateMemberAccountRequest,
  DisassociateS3ResourcesRequest,
  DisassociateS3ResourcesResult,
  FailedS3Resource,
  InternalException,
  InvalidInputException,
  LimitExceededException,
  ListMemberAccountsRequest,
  ListMemberAccountsResult,
  ListS3ResourcesRequest,
  ListS3ResourcesResult,
  MemberAccount,
  S3Resource,
  S3ResourceClassification,
  S3ResourceClassificationUpdate,
  UpdateS3ResourcesRequest,
  UpdateS3ResourcesResult,
} from "../models/index";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_json1_1AssociateMemberAccountCommand = async (
  input: AssociateMemberAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MacieService.AssociateMemberAccount",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateMemberAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AssociateS3ResourcesCommand = async (
  input: AssociateS3ResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MacieService.AssociateS3Resources",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateS3ResourcesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateMemberAccountCommand = async (
  input: DisassociateMemberAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MacieService.DisassociateMemberAccount",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateMemberAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateS3ResourcesCommand = async (
  input: DisassociateS3ResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MacieService.DisassociateS3Resources",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateS3ResourcesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListMemberAccountsCommand = async (
  input: ListMemberAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MacieService.ListMemberAccounts",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListMemberAccountsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListS3ResourcesCommand = async (
  input: ListS3ResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MacieService.ListS3Resources",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListS3ResourcesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateS3ResourcesCommand = async (
  input: UpdateS3ResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "MacieService.UpdateS3Resources",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateS3ResourcesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AssociateMemberAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateMemberAccountCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AssociateMemberAccountCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AssociateMemberAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateMemberAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateMemberAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.macie#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.macie#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.macie#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1AssociateS3ResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateS3ResourcesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AssociateS3ResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateS3ResourcesResult(data, context);
  const response: AssociateS3ResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AssociateS3ResourcesResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateS3ResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateS3ResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.macie#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.macie#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.macie#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DisassociateMemberAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMemberAccountCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisassociateMemberAccountCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisassociateMemberAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateMemberAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMemberAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.macie#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.macie#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DisassociateS3ResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateS3ResourcesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisassociateS3ResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateS3ResourcesResult(data, context);
  const response: DisassociateS3ResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisassociateS3ResourcesResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateS3ResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateS3ResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.macie#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.macie#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListMemberAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMemberAccountsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListMemberAccountsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListMemberAccountsResult(data, context);
  const response: ListMemberAccountsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListMemberAccountsResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListMemberAccountsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMemberAccountsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.macie#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.macie#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListS3ResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListS3ResourcesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListS3ResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListS3ResourcesResult(data, context);
  const response: ListS3ResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListS3ResourcesResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListS3ResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListS3ResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.macie#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.macie#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateS3ResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateS3ResourcesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateS3ResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateS3ResourcesResult(data, context);
  const response: UpdateS3ResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateS3ResourcesResult",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateS3ResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateS3ResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.macie#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.macie#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(body, context);
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InternalExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalException(body, context);
  const contents: InternalException = {
    name: "InternalException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidInputExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInputException(body, context);
  const contents: InvalidInputException = {
    name: "InvalidInputException",
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

const serializeAws_json1_1AssociateMemberAccountRequest = (
  input: AssociateMemberAccountRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.memberAccountId !== undefined && { memberAccountId: input.memberAccountId }),
  };
};

const serializeAws_json1_1AssociateS3ResourcesRequest = (
  input: AssociateS3ResourcesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.memberAccountId !== undefined && { memberAccountId: input.memberAccountId }),
    ...(input.s3Resources !== undefined && {
      s3Resources: serializeAws_json1_1S3ResourcesClassification(input.s3Resources, context),
    }),
  };
};

const serializeAws_json1_1ClassificationType = (input: ClassificationType, context: __SerdeContext): any => {
  return {
    ...(input.continuous !== undefined && { continuous: input.continuous }),
    ...(input.oneTime !== undefined && { oneTime: input.oneTime }),
  };
};

const serializeAws_json1_1ClassificationTypeUpdate = (
  input: ClassificationTypeUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.continuous !== undefined && { continuous: input.continuous }),
    ...(input.oneTime !== undefined && { oneTime: input.oneTime }),
  };
};

const serializeAws_json1_1DisassociateMemberAccountRequest = (
  input: DisassociateMemberAccountRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.memberAccountId !== undefined && { memberAccountId: input.memberAccountId }),
  };
};

const serializeAws_json1_1DisassociateS3ResourcesRequest = (
  input: DisassociateS3ResourcesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.associatedS3Resources !== undefined && {
      associatedS3Resources: serializeAws_json1_1S3Resources(input.associatedS3Resources, context),
    }),
    ...(input.memberAccountId !== undefined && { memberAccountId: input.memberAccountId }),
  };
};

const serializeAws_json1_1ListMemberAccountsRequest = (
  input: ListMemberAccountsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListS3ResourcesRequest = (input: ListS3ResourcesRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.memberAccountId !== undefined && { memberAccountId: input.memberAccountId }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1S3Resource = (input: S3Resource, context: __SerdeContext): any => {
  return {
    ...(input.bucketName !== undefined && { bucketName: input.bucketName }),
    ...(input.prefix !== undefined && { prefix: input.prefix }),
  };
};

const serializeAws_json1_1S3ResourceClassification = (
  input: S3ResourceClassification,
  context: __SerdeContext
): any => {
  return {
    ...(input.bucketName !== undefined && { bucketName: input.bucketName }),
    ...(input.classificationType !== undefined && {
      classificationType: serializeAws_json1_1ClassificationType(input.classificationType, context),
    }),
    ...(input.prefix !== undefined && { prefix: input.prefix }),
  };
};

const serializeAws_json1_1S3ResourceClassificationUpdate = (
  input: S3ResourceClassificationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.bucketName !== undefined && { bucketName: input.bucketName }),
    ...(input.classificationTypeUpdate !== undefined && {
      classificationTypeUpdate: serializeAws_json1_1ClassificationTypeUpdate(input.classificationTypeUpdate, context),
    }),
    ...(input.prefix !== undefined && { prefix: input.prefix }),
  };
};

const serializeAws_json1_1S3Resources = (input: S3Resource[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1S3Resource(entry, context));
};

const serializeAws_json1_1S3ResourcesClassification = (
  input: S3ResourceClassification[],
  context: __SerdeContext
): any => {
  return input.map((entry) => serializeAws_json1_1S3ResourceClassification(entry, context));
};

const serializeAws_json1_1S3ResourcesClassificationUpdate = (
  input: S3ResourceClassificationUpdate[],
  context: __SerdeContext
): any => {
  return input.map((entry) => serializeAws_json1_1S3ResourceClassificationUpdate(entry, context));
};

const serializeAws_json1_1UpdateS3ResourcesRequest = (
  input: UpdateS3ResourcesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.memberAccountId !== undefined && { memberAccountId: input.memberAccountId }),
    ...(input.s3ResourcesUpdate !== undefined && {
      s3ResourcesUpdate: serializeAws_json1_1S3ResourcesClassificationUpdate(input.s3ResourcesUpdate, context),
    }),
  };
};

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    __type: "AccessDeniedException",
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
    resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
  } as any;
};

const deserializeAws_json1_1AssociateS3ResourcesResult = (
  output: any,
  context: __SerdeContext
): AssociateS3ResourcesResult => {
  return {
    __type: "AssociateS3ResourcesResult",
    failedS3Resources:
      output.failedS3Resources !== undefined && output.failedS3Resources !== null
        ? deserializeAws_json1_1FailedS3Resources(output.failedS3Resources, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ClassificationType = (output: any, context: __SerdeContext): ClassificationType => {
  return {
    __type: "ClassificationType",
    continuous: output.continuous !== undefined && output.continuous !== null ? output.continuous : undefined,
    oneTime: output.oneTime !== undefined && output.oneTime !== null ? output.oneTime : undefined,
  } as any;
};

const deserializeAws_json1_1DisassociateS3ResourcesResult = (
  output: any,
  context: __SerdeContext
): DisassociateS3ResourcesResult => {
  return {
    __type: "DisassociateS3ResourcesResult",
    failedS3Resources:
      output.failedS3Resources !== undefined && output.failedS3Resources !== null
        ? deserializeAws_json1_1FailedS3Resources(output.failedS3Resources, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1FailedS3Resource = (output: any, context: __SerdeContext): FailedS3Resource => {
  return {
    __type: "FailedS3Resource",
    errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
    errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
    failedItem:
      output.failedItem !== undefined && output.failedItem !== null
        ? deserializeAws_json1_1S3Resource(output.failedItem, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1FailedS3Resources = (output: any, context: __SerdeContext): FailedS3Resource[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1FailedS3Resource(entry, context));
};

const deserializeAws_json1_1InternalException = (output: any, context: __SerdeContext): InternalException => {
  return {
    __type: "InternalException",
    errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidInputException = (output: any, context: __SerdeContext): InvalidInputException => {
  return {
    __type: "InvalidInputException",
    errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
    fieldName: output.fieldName !== undefined && output.fieldName !== null ? output.fieldName : undefined,
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    __type: "LimitExceededException",
    errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
    resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
  } as any;
};

const deserializeAws_json1_1ListMemberAccountsResult = (
  output: any,
  context: __SerdeContext
): ListMemberAccountsResult => {
  return {
    __type: "ListMemberAccountsResult",
    memberAccounts:
      output.memberAccounts !== undefined && output.memberAccounts !== null
        ? deserializeAws_json1_1MemberAccounts(output.memberAccounts, context)
        : undefined,
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
  } as any;
};

const deserializeAws_json1_1ListS3ResourcesResult = (output: any, context: __SerdeContext): ListS3ResourcesResult => {
  return {
    __type: "ListS3ResourcesResult",
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    s3Resources:
      output.s3Resources !== undefined && output.s3Resources !== null
        ? deserializeAws_json1_1S3ResourcesClassification(output.s3Resources, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1MemberAccount = (output: any, context: __SerdeContext): MemberAccount => {
  return {
    __type: "MemberAccount",
    accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
  } as any;
};

const deserializeAws_json1_1MemberAccounts = (output: any, context: __SerdeContext): MemberAccount[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1MemberAccount(entry, context));
};

const deserializeAws_json1_1S3Resource = (output: any, context: __SerdeContext): S3Resource => {
  return {
    __type: "S3Resource",
    bucketName: output.bucketName !== undefined && output.bucketName !== null ? output.bucketName : undefined,
    prefix: output.prefix !== undefined && output.prefix !== null ? output.prefix : undefined,
  } as any;
};

const deserializeAws_json1_1S3ResourceClassification = (
  output: any,
  context: __SerdeContext
): S3ResourceClassification => {
  return {
    __type: "S3ResourceClassification",
    bucketName: output.bucketName !== undefined && output.bucketName !== null ? output.bucketName : undefined,
    classificationType:
      output.classificationType !== undefined && output.classificationType !== null
        ? deserializeAws_json1_1ClassificationType(output.classificationType, context)
        : undefined,
    prefix: output.prefix !== undefined && output.prefix !== null ? output.prefix : undefined,
  } as any;
};

const deserializeAws_json1_1S3ResourcesClassification = (
  output: any,
  context: __SerdeContext
): S3ResourceClassification[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1S3ResourceClassification(entry, context));
};

const deserializeAws_json1_1UpdateS3ResourcesResult = (
  output: any,
  context: __SerdeContext
): UpdateS3ResourcesResult => {
  return {
    __type: "UpdateS3ResourcesResult",
    failedS3Resources:
      output.failedS3Resources !== undefined && output.failedS3Resources !== null
        ? deserializeAws_json1_1FailedS3Resources(output.failedS3Resources, context)
        : undefined,
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"],
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
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
