// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectString as __expectString,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
import { MacieServiceException as __BaseException } from "../models/MacieServiceException";
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
} from "../models/models_0";

export const serializeAws_json1_1AssociateMemberAccountCommand = async (
  input: AssociateMemberAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MacieService.AssociateMemberAccount",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MacieService.AssociateS3Resources",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MacieService.DisassociateMemberAccount",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MacieService.DisassociateS3Resources",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MacieService.ListMemberAccounts",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MacieService.ListS3Resources",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "MacieService.UpdateS3Resources",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateS3ResourcesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AssociateMemberAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateMemberAccountCommandOutput> => {
  if (output.statusCode >= 300) {
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.macie#InternalException":
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.macie#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.macie#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1AssociateS3ResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateS3ResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateS3ResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateS3ResourcesResult(data, context);
  const response: AssociateS3ResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.macie#InternalException":
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.macie#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.macie#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DisassociateMemberAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMemberAccountCommandOutput> => {
  if (output.statusCode >= 300) {
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.macie#InternalException":
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.macie#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DisassociateS3ResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateS3ResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateS3ResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateS3ResourcesResult(data, context);
  const response: DisassociateS3ResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.macie#InternalException":
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.macie#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListMemberAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMemberAccountsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListMemberAccountsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListMemberAccountsResult(data, context);
  const response: ListMemberAccountsCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.macie#InternalException":
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.macie#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListS3ResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListS3ResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListS3ResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListS3ResourcesResult(data, context);
  const response: ListS3ResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.macie#InternalException":
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.macie#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateS3ResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateS3ResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateS3ResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateS3ResourcesResult(data, context);
  const response: UpdateS3ResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.macie#InternalException":
      throw await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.macie#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InternalExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalException(body, context);
  const exception = new InternalException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidInputExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInputException(body, context);
  const exception = new InvalidInputException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1AssociateMemberAccountRequest = (
  input: AssociateMemberAccountRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.memberAccountId != null && { memberAccountId: input.memberAccountId }),
  };
};

const serializeAws_json1_1AssociateS3ResourcesRequest = (
  input: AssociateS3ResourcesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.memberAccountId != null && { memberAccountId: input.memberAccountId }),
    ...(input.s3Resources != null && {
      s3Resources: serializeAws_json1_1S3ResourcesClassification(input.s3Resources, context),
    }),
  };
};

const serializeAws_json1_1ClassificationType = (input: ClassificationType, context: __SerdeContext): any => {
  return {
    ...(input.continuous != null && { continuous: input.continuous }),
    ...(input.oneTime != null && { oneTime: input.oneTime }),
  };
};

const serializeAws_json1_1ClassificationTypeUpdate = (
  input: ClassificationTypeUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.continuous != null && { continuous: input.continuous }),
    ...(input.oneTime != null && { oneTime: input.oneTime }),
  };
};

const serializeAws_json1_1DisassociateMemberAccountRequest = (
  input: DisassociateMemberAccountRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.memberAccountId != null && { memberAccountId: input.memberAccountId }),
  };
};

const serializeAws_json1_1DisassociateS3ResourcesRequest = (
  input: DisassociateS3ResourcesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.associatedS3Resources != null && {
      associatedS3Resources: serializeAws_json1_1S3Resources(input.associatedS3Resources, context),
    }),
    ...(input.memberAccountId != null && { memberAccountId: input.memberAccountId }),
  };
};

const serializeAws_json1_1ListMemberAccountsRequest = (
  input: ListMemberAccountsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListS3ResourcesRequest = (input: ListS3ResourcesRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.memberAccountId != null && { memberAccountId: input.memberAccountId }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1S3Resource = (input: S3Resource, context: __SerdeContext): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.prefix != null && { prefix: input.prefix }),
  };
};

const serializeAws_json1_1S3ResourceClassification = (
  input: S3ResourceClassification,
  context: __SerdeContext
): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.classificationType != null && {
      classificationType: serializeAws_json1_1ClassificationType(input.classificationType, context),
    }),
    ...(input.prefix != null && { prefix: input.prefix }),
  };
};

const serializeAws_json1_1S3ResourceClassificationUpdate = (
  input: S3ResourceClassificationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.classificationTypeUpdate != null && {
      classificationTypeUpdate: serializeAws_json1_1ClassificationTypeUpdate(input.classificationTypeUpdate, context),
    }),
    ...(input.prefix != null && { prefix: input.prefix }),
  };
};

const serializeAws_json1_1S3Resources = (input: S3Resource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1S3Resource(entry, context);
    });
};

const serializeAws_json1_1S3ResourcesClassification = (
  input: S3ResourceClassification[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1S3ResourceClassification(entry, context);
    });
};

const serializeAws_json1_1S3ResourcesClassificationUpdate = (
  input: S3ResourceClassificationUpdate[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1S3ResourceClassificationUpdate(entry, context);
    });
};

const serializeAws_json1_1UpdateS3ResourcesRequest = (
  input: UpdateS3ResourcesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.memberAccountId != null && { memberAccountId: input.memberAccountId }),
    ...(input.s3ResourcesUpdate != null && {
      s3ResourcesUpdate: serializeAws_json1_1S3ResourcesClassificationUpdate(input.s3ResourcesUpdate, context),
    }),
  };
};

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    message: __expectString(output.message),
    resourceType: __expectString(output.resourceType),
  } as any;
};

const deserializeAws_json1_1AssociateS3ResourcesResult = (
  output: any,
  context: __SerdeContext
): AssociateS3ResourcesResult => {
  return {
    failedS3Resources:
      output.failedS3Resources != null
        ? deserializeAws_json1_1FailedS3Resources(output.failedS3Resources, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ClassificationType = (output: any, context: __SerdeContext): ClassificationType => {
  return {
    continuous: __expectString(output.continuous),
    oneTime: __expectString(output.oneTime),
  } as any;
};

const deserializeAws_json1_1DisassociateS3ResourcesResult = (
  output: any,
  context: __SerdeContext
): DisassociateS3ResourcesResult => {
  return {
    failedS3Resources:
      output.failedS3Resources != null
        ? deserializeAws_json1_1FailedS3Resources(output.failedS3Resources, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1FailedS3Resource = (output: any, context: __SerdeContext): FailedS3Resource => {
  return {
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    failedItem: output.failedItem != null ? deserializeAws_json1_1S3Resource(output.failedItem, context) : undefined,
  } as any;
};

const deserializeAws_json1_1FailedS3Resources = (output: any, context: __SerdeContext): FailedS3Resource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FailedS3Resource(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InternalException = (output: any, context: __SerdeContext): InternalException => {
  return {
    errorCode: __expectString(output.errorCode),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidInputException = (output: any, context: __SerdeContext): InvalidInputException => {
  return {
    errorCode: __expectString(output.errorCode),
    fieldName: __expectString(output.fieldName),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    errorCode: __expectString(output.errorCode),
    message: __expectString(output.message),
    resourceType: __expectString(output.resourceType),
  } as any;
};

const deserializeAws_json1_1ListMemberAccountsResult = (
  output: any,
  context: __SerdeContext
): ListMemberAccountsResult => {
  return {
    memberAccounts:
      output.memberAccounts != null ? deserializeAws_json1_1MemberAccounts(output.memberAccounts, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListS3ResourcesResult = (output: any, context: __SerdeContext): ListS3ResourcesResult => {
  return {
    nextToken: __expectString(output.nextToken),
    s3Resources:
      output.s3Resources != null
        ? deserializeAws_json1_1S3ResourcesClassification(output.s3Resources, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1MemberAccount = (output: any, context: __SerdeContext): MemberAccount => {
  return {
    accountId: __expectString(output.accountId),
  } as any;
};

const deserializeAws_json1_1MemberAccounts = (output: any, context: __SerdeContext): MemberAccount[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MemberAccount(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1S3Resource = (output: any, context: __SerdeContext): S3Resource => {
  return {
    bucketName: __expectString(output.bucketName),
    prefix: __expectString(output.prefix),
  } as any;
};

const deserializeAws_json1_1S3ResourceClassification = (
  output: any,
  context: __SerdeContext
): S3ResourceClassification => {
  return {
    bucketName: __expectString(output.bucketName),
    classificationType:
      output.classificationType != null
        ? deserializeAws_json1_1ClassificationType(output.classificationType, context)
        : undefined,
    prefix: __expectString(output.prefix),
  } as any;
};

const deserializeAws_json1_1S3ResourcesClassification = (
  output: any,
  context: __SerdeContext
): S3ResourceClassification[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1S3ResourceClassification(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1UpdateS3ResourcesResult = (
  output: any,
  context: __SerdeContext
): UpdateS3ResourcesResult => {
  return {
    failedS3Resources:
      output.failedS3Resources != null
        ? deserializeAws_json1_1FailedS3Resources(output.failedS3Resources, context)
        : undefined,
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
