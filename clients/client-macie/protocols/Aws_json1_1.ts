import {
  AssociateMemberAccountCommandInput,
  AssociateMemberAccountCommandOutput
} from "../commands/AssociateMemberAccountCommand";
import {
  AssociateS3ResourcesCommandInput,
  AssociateS3ResourcesCommandOutput
} from "../commands/AssociateS3ResourcesCommand";
import {
  DisassociateMemberAccountCommandInput,
  DisassociateMemberAccountCommandOutput
} from "../commands/DisassociateMemberAccountCommand";
import {
  DisassociateS3ResourcesCommandInput,
  DisassociateS3ResourcesCommandOutput
} from "../commands/DisassociateS3ResourcesCommand";
import {
  ListMemberAccountsCommandInput,
  ListMemberAccountsCommandOutput
} from "../commands/ListMemberAccountsCommand";
import {
  ListS3ResourcesCommandInput,
  ListS3ResourcesCommandOutput
} from "../commands/ListS3ResourcesCommand";
import {
  UpdateS3ResourcesCommandInput,
  UpdateS3ResourcesCommandOutput
} from "../commands/UpdateS3ResourcesCommand";
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
  UpdateS3ResourcesResult
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

export async function serializeAws_json1_1AssociateMemberAccountCommand(
  input: AssociateMemberAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MacieService.AssociateMemberAccount";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AssociateMemberAccountRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1AssociateS3ResourcesCommand(
  input: AssociateS3ResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MacieService.AssociateS3Resources";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AssociateS3ResourcesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DisassociateMemberAccountCommand(
  input: DisassociateMemberAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MacieService.DisassociateMemberAccount";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisassociateMemberAccountRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DisassociateS3ResourcesCommand(
  input: DisassociateS3ResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MacieService.DisassociateS3Resources";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisassociateS3ResourcesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListMemberAccountsCommand(
  input: ListMemberAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MacieService.ListMemberAccounts";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListMemberAccountsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListS3ResourcesCommand(
  input: ListS3ResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MacieService.ListS3Resources";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListS3ResourcesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateS3ResourcesCommand(
  input: UpdateS3ResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "MacieService.UpdateS3Resources";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateS3ResourcesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1AssociateMemberAccountCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateMemberAccountCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AssociateMemberAccountCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: AssociateMemberAccountCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1AssociateMemberAccountCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateMemberAccountCommandOutput> {
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
    case "InternalException":
    case "com.amazonaws.macie.service#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.macie.service#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.macie.service#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
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

export async function deserializeAws_json1_1AssociateS3ResourcesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateS3ResourcesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AssociateS3ResourcesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateS3ResourcesResult(data, context);
  const response: AssociateS3ResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AssociateS3ResourcesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1AssociateS3ResourcesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateS3ResourcesCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.macie.service#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.macie.service#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.macie.service#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.macie.service#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
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

export async function deserializeAws_json1_1DisassociateMemberAccountCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMemberAccountCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisassociateMemberAccountCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DisassociateMemberAccountCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DisassociateMemberAccountCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMemberAccountCommandOutput> {
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
    case "InternalException":
    case "com.amazonaws.macie.service#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.macie.service#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
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

export async function deserializeAws_json1_1DisassociateS3ResourcesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateS3ResourcesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisassociateS3ResourcesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateS3ResourcesResult(data, context);
  const response: DisassociateS3ResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisassociateS3ResourcesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DisassociateS3ResourcesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateS3ResourcesCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.macie.service#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.macie.service#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.macie.service#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
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

export async function deserializeAws_json1_1ListMemberAccountsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMemberAccountsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListMemberAccountsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListMemberAccountsResult(data, context);
  const response: ListMemberAccountsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListMemberAccountsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListMemberAccountsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMemberAccountsCommandOutput> {
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
    case "InternalException":
    case "com.amazonaws.macie.service#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.macie.service#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
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

export async function deserializeAws_json1_1ListS3ResourcesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListS3ResourcesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListS3ResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListS3ResourcesResult(data, context);
  const response: ListS3ResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListS3ResourcesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListS3ResourcesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListS3ResourcesCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.macie.service#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.macie.service#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.macie.service#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
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

export async function deserializeAws_json1_1UpdateS3ResourcesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateS3ResourcesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateS3ResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateS3ResourcesResult(data, context);
  const response: UpdateS3ResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateS3ResourcesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateS3ResourcesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateS3ResourcesCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.macie.service#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.macie.service#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.macie.service#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
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

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(
    body,
    context
  );
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InternalExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalException(
    body,
    context
  );
  const contents: InternalException = {
    name: "InternalException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidInputExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInputException(
    body,
    context
  );
  const contents: InvalidInputException = {
    name: "InvalidInputException",
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

const serializeAws_json1_1AssociateMemberAccountRequest = (
  input: AssociateMemberAccountRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.memberAccountId !== undefined) {
    bodyParams["memberAccountId"] = input.memberAccountId;
  }
  return bodyParams;
};

const serializeAws_json1_1AssociateS3ResourcesRequest = (
  input: AssociateS3ResourcesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.memberAccountId !== undefined) {
    bodyParams["memberAccountId"] = input.memberAccountId;
  }
  if (input.s3Resources !== undefined) {
    bodyParams["s3Resources"] = serializeAws_json1_1S3ResourcesClassification(
      input.s3Resources,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ClassificationType = (
  input: ClassificationType,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.continuous !== undefined) {
    bodyParams["continuous"] = input.continuous;
  }
  if (input.oneTime !== undefined) {
    bodyParams["oneTime"] = input.oneTime;
  }
  return bodyParams;
};

const serializeAws_json1_1ClassificationTypeUpdate = (
  input: ClassificationTypeUpdate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.continuous !== undefined) {
    bodyParams["continuous"] = input.continuous;
  }
  if (input.oneTime !== undefined) {
    bodyParams["oneTime"] = input.oneTime;
  }
  return bodyParams;
};

const serializeAws_json1_1DisassociateMemberAccountRequest = (
  input: DisassociateMemberAccountRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.memberAccountId !== undefined) {
    bodyParams["memberAccountId"] = input.memberAccountId;
  }
  return bodyParams;
};

const serializeAws_json1_1DisassociateS3ResourcesRequest = (
  input: DisassociateS3ResourcesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.associatedS3Resources !== undefined) {
    bodyParams["associatedS3Resources"] = serializeAws_json1_1S3Resources(
      input.associatedS3Resources,
      context
    );
  }
  if (input.memberAccountId !== undefined) {
    bodyParams["memberAccountId"] = input.memberAccountId;
  }
  return bodyParams;
};

const serializeAws_json1_1ListMemberAccountsRequest = (
  input: ListMemberAccountsRequest,
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

const serializeAws_json1_1ListS3ResourcesRequest = (
  input: ListS3ResourcesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.memberAccountId !== undefined) {
    bodyParams["memberAccountId"] = input.memberAccountId;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1S3Resource = (
  input: S3Resource,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.bucketName !== undefined) {
    bodyParams["bucketName"] = input.bucketName;
  }
  if (input.prefix !== undefined) {
    bodyParams["prefix"] = input.prefix;
  }
  return bodyParams;
};

const serializeAws_json1_1S3ResourceClassification = (
  input: S3ResourceClassification,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.bucketName !== undefined) {
    bodyParams["bucketName"] = input.bucketName;
  }
  if (input.classificationType !== undefined) {
    bodyParams["classificationType"] = serializeAws_json1_1ClassificationType(
      input.classificationType,
      context
    );
  }
  if (input.prefix !== undefined) {
    bodyParams["prefix"] = input.prefix;
  }
  return bodyParams;
};

const serializeAws_json1_1S3ResourceClassificationUpdate = (
  input: S3ResourceClassificationUpdate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.bucketName !== undefined) {
    bodyParams["bucketName"] = input.bucketName;
  }
  if (input.classificationTypeUpdate !== undefined) {
    bodyParams[
      "classificationTypeUpdate"
    ] = serializeAws_json1_1ClassificationTypeUpdate(
      input.classificationTypeUpdate,
      context
    );
  }
  if (input.prefix !== undefined) {
    bodyParams["prefix"] = input.prefix;
  }
  return bodyParams;
};

const serializeAws_json1_1S3Resources = (
  input: Array<S3Resource>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1S3Resource(entry, context));
  }
  return contents;
};

const serializeAws_json1_1S3ResourcesClassification = (
  input: Array<S3ResourceClassification>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1S3ResourceClassification(entry, context));
  }
  return contents;
};

const serializeAws_json1_1S3ResourcesClassificationUpdate = (
  input: Array<S3ResourceClassificationUpdate>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_json1_1S3ResourceClassificationUpdate(entry, context)
    );
  }
  return contents;
};

const serializeAws_json1_1UpdateS3ResourcesRequest = (
  input: UpdateS3ResourcesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.memberAccountId !== undefined) {
    bodyParams["memberAccountId"] = input.memberAccountId;
  }
  if (input.s3ResourcesUpdate !== undefined) {
    bodyParams[
      "s3ResourcesUpdate"
    ] = serializeAws_json1_1S3ResourcesClassificationUpdate(
      input.s3ResourcesUpdate,
      context
    );
  }
  return bodyParams;
};

const deserializeAws_json1_1AccessDeniedException = (
  output: any,
  context: __SerdeContext
): AccessDeniedException => {
  let contents: any = {
    __type: "AccessDeniedException",
    message: undefined,
    resourceType: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  if (output.resourceType !== undefined && output.resourceType !== null) {
    contents.resourceType = output.resourceType;
  }
  return contents;
};

const deserializeAws_json1_1AssociateS3ResourcesResult = (
  output: any,
  context: __SerdeContext
): AssociateS3ResourcesResult => {
  let contents: any = {
    __type: "AssociateS3ResourcesResult",
    failedS3Resources: undefined
  };
  if (
    output.failedS3Resources !== undefined &&
    output.failedS3Resources !== null
  ) {
    contents.failedS3Resources = deserializeAws_json1_1FailedS3Resources(
      output.failedS3Resources,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ClassificationType = (
  output: any,
  context: __SerdeContext
): ClassificationType => {
  let contents: any = {
    __type: "ClassificationType",
    continuous: undefined,
    oneTime: undefined
  };
  if (output.continuous !== undefined && output.continuous !== null) {
    contents.continuous = output.continuous;
  }
  if (output.oneTime !== undefined && output.oneTime !== null) {
    contents.oneTime = output.oneTime;
  }
  return contents;
};

const deserializeAws_json1_1DisassociateS3ResourcesResult = (
  output: any,
  context: __SerdeContext
): DisassociateS3ResourcesResult => {
  let contents: any = {
    __type: "DisassociateS3ResourcesResult",
    failedS3Resources: undefined
  };
  if (
    output.failedS3Resources !== undefined &&
    output.failedS3Resources !== null
  ) {
    contents.failedS3Resources = deserializeAws_json1_1FailedS3Resources(
      output.failedS3Resources,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1FailedS3Resource = (
  output: any,
  context: __SerdeContext
): FailedS3Resource => {
  let contents: any = {
    __type: "FailedS3Resource",
    errorCode: undefined,
    errorMessage: undefined,
    failedItem: undefined
  };
  if (output.errorCode !== undefined && output.errorCode !== null) {
    contents.errorCode = output.errorCode;
  }
  if (output.errorMessage !== undefined && output.errorMessage !== null) {
    contents.errorMessage = output.errorMessage;
  }
  if (output.failedItem !== undefined && output.failedItem !== null) {
    contents.failedItem = deserializeAws_json1_1S3Resource(
      output.failedItem,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1FailedS3Resources = (
  output: any,
  context: __SerdeContext
): Array<FailedS3Resource> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1FailedS3Resource(entry, context)
  );
};

const deserializeAws_json1_1InternalException = (
  output: any,
  context: __SerdeContext
): InternalException => {
  let contents: any = {
    __type: "InternalException",
    errorCode: undefined,
    message: undefined
  };
  if (output.errorCode !== undefined && output.errorCode !== null) {
    contents.errorCode = output.errorCode;
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidInputException = (
  output: any,
  context: __SerdeContext
): InvalidInputException => {
  let contents: any = {
    __type: "InvalidInputException",
    errorCode: undefined,
    fieldName: undefined,
    message: undefined
  };
  if (output.errorCode !== undefined && output.errorCode !== null) {
    contents.errorCode = output.errorCode;
  }
  if (output.fieldName !== undefined && output.fieldName !== null) {
    contents.fieldName = output.fieldName;
  }
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
    errorCode: undefined,
    message: undefined,
    resourceType: undefined
  };
  if (output.errorCode !== undefined && output.errorCode !== null) {
    contents.errorCode = output.errorCode;
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  if (output.resourceType !== undefined && output.resourceType !== null) {
    contents.resourceType = output.resourceType;
  }
  return contents;
};

const deserializeAws_json1_1ListMemberAccountsResult = (
  output: any,
  context: __SerdeContext
): ListMemberAccountsResult => {
  let contents: any = {
    __type: "ListMemberAccountsResult",
    memberAccounts: undefined,
    nextToken: undefined
  };
  if (output.memberAccounts !== undefined && output.memberAccounts !== null) {
    contents.memberAccounts = deserializeAws_json1_1MemberAccounts(
      output.memberAccounts,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListS3ResourcesResult = (
  output: any,
  context: __SerdeContext
): ListS3ResourcesResult => {
  let contents: any = {
    __type: "ListS3ResourcesResult",
    nextToken: undefined,
    s3Resources: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.s3Resources !== undefined && output.s3Resources !== null) {
    contents.s3Resources = deserializeAws_json1_1S3ResourcesClassification(
      output.s3Resources,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1MemberAccount = (
  output: any,
  context: __SerdeContext
): MemberAccount => {
  let contents: any = {
    __type: "MemberAccount",
    accountId: undefined
  };
  if (output.accountId !== undefined && output.accountId !== null) {
    contents.accountId = output.accountId;
  }
  return contents;
};

const deserializeAws_json1_1MemberAccounts = (
  output: any,
  context: __SerdeContext
): Array<MemberAccount> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1MemberAccount(entry, context)
  );
};

const deserializeAws_json1_1S3Resource = (
  output: any,
  context: __SerdeContext
): S3Resource => {
  let contents: any = {
    __type: "S3Resource",
    bucketName: undefined,
    prefix: undefined
  };
  if (output.bucketName !== undefined && output.bucketName !== null) {
    contents.bucketName = output.bucketName;
  }
  if (output.prefix !== undefined && output.prefix !== null) {
    contents.prefix = output.prefix;
  }
  return contents;
};

const deserializeAws_json1_1S3ResourceClassification = (
  output: any,
  context: __SerdeContext
): S3ResourceClassification => {
  let contents: any = {
    __type: "S3ResourceClassification",
    bucketName: undefined,
    classificationType: undefined,
    prefix: undefined
  };
  if (output.bucketName !== undefined && output.bucketName !== null) {
    contents.bucketName = output.bucketName;
  }
  if (
    output.classificationType !== undefined &&
    output.classificationType !== null
  ) {
    contents.classificationType = deserializeAws_json1_1ClassificationType(
      output.classificationType,
      context
    );
  }
  if (output.prefix !== undefined && output.prefix !== null) {
    contents.prefix = output.prefix;
  }
  return contents;
};

const deserializeAws_json1_1S3ResourcesClassification = (
  output: any,
  context: __SerdeContext
): Array<S3ResourceClassification> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1S3ResourceClassification(entry, context)
  );
};

const deserializeAws_json1_1UpdateS3ResourcesResult = (
  output: any,
  context: __SerdeContext
): UpdateS3ResourcesResult => {
  let contents: any = {
    __type: "UpdateS3ResourcesResult",
    failedS3Resources: undefined
  };
  if (
    output.failedS3Resources !== undefined &&
    output.failedS3Resources !== null
  ) {
    contents.failedS3Resources = deserializeAws_json1_1FailedS3Resources(
      output.failedS3Resources,
      context
    );
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
