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

/**
 * serializeAws_json1_1AssociateMemberAccountCommand
 */
export const se_AssociateMemberAccountCommand = async (
  input: AssociateMemberAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateMemberAccount");
  let body: any;
  body = JSON.stringify(se_AssociateMemberAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateS3ResourcesCommand
 */
export const se_AssociateS3ResourcesCommand = async (
  input: AssociateS3ResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateS3Resources");
  let body: any;
  body = JSON.stringify(se_AssociateS3ResourcesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateMemberAccountCommand
 */
export const se_DisassociateMemberAccountCommand = async (
  input: DisassociateMemberAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateMemberAccount");
  let body: any;
  body = JSON.stringify(se_DisassociateMemberAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateS3ResourcesCommand
 */
export const se_DisassociateS3ResourcesCommand = async (
  input: DisassociateS3ResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateS3Resources");
  let body: any;
  body = JSON.stringify(se_DisassociateS3ResourcesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListMemberAccountsCommand
 */
export const se_ListMemberAccountsCommand = async (
  input: ListMemberAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListMemberAccounts");
  let body: any;
  body = JSON.stringify(se_ListMemberAccountsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListS3ResourcesCommand
 */
export const se_ListS3ResourcesCommand = async (
  input: ListS3ResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListS3Resources");
  let body: any;
  body = JSON.stringify(se_ListS3ResourcesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateS3ResourcesCommand
 */
export const se_UpdateS3ResourcesCommand = async (
  input: UpdateS3ResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateS3Resources");
  let body: any;
  body = JSON.stringify(se_UpdateS3ResourcesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AssociateMemberAccountCommand
 */
export const de_AssociateMemberAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateMemberAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateMemberAccountCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AssociateMemberAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateMemberAccountCommandError
 */
const de_AssociateMemberAccountCommandError = async (
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
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.macie#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.macie#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1AssociateS3ResourcesCommand
 */
export const de_AssociateS3ResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateS3ResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateS3ResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateS3ResourcesResult(data, context);
  const response: AssociateS3ResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateS3ResourcesCommandError
 */
const de_AssociateS3ResourcesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.macie#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.macie#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.macie#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DisassociateMemberAccountCommand
 */
export const de_DisassociateMemberAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMemberAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateMemberAccountCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisassociateMemberAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisassociateMemberAccountCommandError
 */
const de_DisassociateMemberAccountCommandError = async (
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
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.macie#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DisassociateS3ResourcesCommand
 */
export const de_DisassociateS3ResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateS3ResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateS3ResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateS3ResourcesResult(data, context);
  const response: DisassociateS3ResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisassociateS3ResourcesCommandError
 */
const de_DisassociateS3ResourcesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.macie#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.macie#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListMemberAccountsCommand
 */
export const de_ListMemberAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMemberAccountsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListMemberAccountsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListMemberAccountsResult(data, context);
  const response: ListMemberAccountsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListMemberAccountsCommandError
 */
const de_ListMemberAccountsCommandError = async (
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
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.macie#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListS3ResourcesCommand
 */
export const de_ListS3ResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListS3ResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListS3ResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListS3ResourcesResult(data, context);
  const response: ListS3ResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListS3ResourcesCommandError
 */
const de_ListS3ResourcesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.macie#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.macie#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateS3ResourcesCommand
 */
export const de_UpdateS3ResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateS3ResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateS3ResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateS3ResourcesResult(data, context);
  const response: UpdateS3ResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateS3ResourcesCommandError
 */
const de_UpdateS3ResourcesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.macie#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.macie#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalExceptionRes
 */
const de_InternalExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<InternalException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InternalException(body, context);
  const exception = new InternalException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidInputExceptionRes
 */
const de_InvalidInputExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidInputException(body, context);
  const exception = new InvalidInputException({
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
 * serializeAws_json1_1AssociateMemberAccountRequest
 */
const se_AssociateMemberAccountRequest = (input: AssociateMemberAccountRequest, context: __SerdeContext): any => {
  return {
    ...(input.memberAccountId != null && { memberAccountId: input.memberAccountId }),
  };
};

/**
 * serializeAws_json1_1AssociateS3ResourcesRequest
 */
const se_AssociateS3ResourcesRequest = (input: AssociateS3ResourcesRequest, context: __SerdeContext): any => {
  return {
    ...(input.memberAccountId != null && { memberAccountId: input.memberAccountId }),
    ...(input.s3Resources != null && { s3Resources: se_S3ResourcesClassification(input.s3Resources, context) }),
  };
};

/**
 * serializeAws_json1_1ClassificationType
 */
const se_ClassificationType = (input: ClassificationType, context: __SerdeContext): any => {
  return {
    ...(input.continuous != null && { continuous: input.continuous }),
    ...(input.oneTime != null && { oneTime: input.oneTime }),
  };
};

/**
 * serializeAws_json1_1ClassificationTypeUpdate
 */
const se_ClassificationTypeUpdate = (input: ClassificationTypeUpdate, context: __SerdeContext): any => {
  return {
    ...(input.continuous != null && { continuous: input.continuous }),
    ...(input.oneTime != null && { oneTime: input.oneTime }),
  };
};

/**
 * serializeAws_json1_1DisassociateMemberAccountRequest
 */
const se_DisassociateMemberAccountRequest = (input: DisassociateMemberAccountRequest, context: __SerdeContext): any => {
  return {
    ...(input.memberAccountId != null && { memberAccountId: input.memberAccountId }),
  };
};

/**
 * serializeAws_json1_1DisassociateS3ResourcesRequest
 */
const se_DisassociateS3ResourcesRequest = (input: DisassociateS3ResourcesRequest, context: __SerdeContext): any => {
  return {
    ...(input.associatedS3Resources != null && {
      associatedS3Resources: se_S3Resources(input.associatedS3Resources, context),
    }),
    ...(input.memberAccountId != null && { memberAccountId: input.memberAccountId }),
  };
};

/**
 * serializeAws_json1_1ListMemberAccountsRequest
 */
const se_ListMemberAccountsRequest = (input: ListMemberAccountsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListS3ResourcesRequest
 */
const se_ListS3ResourcesRequest = (input: ListS3ResourcesRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.memberAccountId != null && { memberAccountId: input.memberAccountId }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1S3Resource
 */
const se_S3Resource = (input: S3Resource, context: __SerdeContext): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.prefix != null && { prefix: input.prefix }),
  };
};

/**
 * serializeAws_json1_1S3ResourceClassification
 */
const se_S3ResourceClassification = (input: S3ResourceClassification, context: __SerdeContext): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.classificationType != null && {
      classificationType: se_ClassificationType(input.classificationType, context),
    }),
    ...(input.prefix != null && { prefix: input.prefix }),
  };
};

/**
 * serializeAws_json1_1S3ResourceClassificationUpdate
 */
const se_S3ResourceClassificationUpdate = (input: S3ResourceClassificationUpdate, context: __SerdeContext): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.classificationTypeUpdate != null && {
      classificationTypeUpdate: se_ClassificationTypeUpdate(input.classificationTypeUpdate, context),
    }),
    ...(input.prefix != null && { prefix: input.prefix }),
  };
};

/**
 * serializeAws_json1_1S3Resources
 */
const se_S3Resources = (input: S3Resource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_S3Resource(entry, context);
    });
};

/**
 * serializeAws_json1_1S3ResourcesClassification
 */
const se_S3ResourcesClassification = (input: S3ResourceClassification[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_S3ResourceClassification(entry, context);
    });
};

/**
 * serializeAws_json1_1S3ResourcesClassificationUpdate
 */
const se_S3ResourcesClassificationUpdate = (input: S3ResourceClassificationUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_S3ResourceClassificationUpdate(entry, context);
    });
};

/**
 * serializeAws_json1_1UpdateS3ResourcesRequest
 */
const se_UpdateS3ResourcesRequest = (input: UpdateS3ResourcesRequest, context: __SerdeContext): any => {
  return {
    ...(input.memberAccountId != null && { memberAccountId: input.memberAccountId }),
    ...(input.s3ResourcesUpdate != null && {
      s3ResourcesUpdate: se_S3ResourcesClassificationUpdate(input.s3ResourcesUpdate, context),
    }),
  };
};

/**
 * deserializeAws_json1_1AccessDeniedException
 */
const de_AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    message: __expectString(output.message),
    resourceType: __expectString(output.resourceType),
  } as any;
};

/**
 * deserializeAws_json1_1AssociateS3ResourcesResult
 */
const de_AssociateS3ResourcesResult = (output: any, context: __SerdeContext): AssociateS3ResourcesResult => {
  return {
    failedS3Resources:
      output.failedS3Resources != null ? de_FailedS3Resources(output.failedS3Resources, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ClassificationType
 */
const de_ClassificationType = (output: any, context: __SerdeContext): ClassificationType => {
  return {
    continuous: __expectString(output.continuous),
    oneTime: __expectString(output.oneTime),
  } as any;
};

/**
 * deserializeAws_json1_1DisassociateS3ResourcesResult
 */
const de_DisassociateS3ResourcesResult = (output: any, context: __SerdeContext): DisassociateS3ResourcesResult => {
  return {
    failedS3Resources:
      output.failedS3Resources != null ? de_FailedS3Resources(output.failedS3Resources, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1FailedS3Resource
 */
const de_FailedS3Resource = (output: any, context: __SerdeContext): FailedS3Resource => {
  return {
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    failedItem: output.failedItem != null ? de_S3Resource(output.failedItem, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1FailedS3Resources
 */
const de_FailedS3Resources = (output: any, context: __SerdeContext): FailedS3Resource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FailedS3Resource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InternalException
 */
const de_InternalException = (output: any, context: __SerdeContext): InternalException => {
  return {
    errorCode: __expectString(output.errorCode),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidInputException
 */
const de_InvalidInputException = (output: any, context: __SerdeContext): InvalidInputException => {
  return {
    errorCode: __expectString(output.errorCode),
    fieldName: __expectString(output.fieldName),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    errorCode: __expectString(output.errorCode),
    message: __expectString(output.message),
    resourceType: __expectString(output.resourceType),
  } as any;
};

/**
 * deserializeAws_json1_1ListMemberAccountsResult
 */
const de_ListMemberAccountsResult = (output: any, context: __SerdeContext): ListMemberAccountsResult => {
  return {
    memberAccounts: output.memberAccounts != null ? de_MemberAccounts(output.memberAccounts, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListS3ResourcesResult
 */
const de_ListS3ResourcesResult = (output: any, context: __SerdeContext): ListS3ResourcesResult => {
  return {
    nextToken: __expectString(output.nextToken),
    s3Resources: output.s3Resources != null ? de_S3ResourcesClassification(output.s3Resources, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MemberAccount
 */
const de_MemberAccount = (output: any, context: __SerdeContext): MemberAccount => {
  return {
    accountId: __expectString(output.accountId),
  } as any;
};

/**
 * deserializeAws_json1_1MemberAccounts
 */
const de_MemberAccounts = (output: any, context: __SerdeContext): MemberAccount[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MemberAccount(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1S3Resource
 */
const de_S3Resource = (output: any, context: __SerdeContext): S3Resource => {
  return {
    bucketName: __expectString(output.bucketName),
    prefix: __expectString(output.prefix),
  } as any;
};

/**
 * deserializeAws_json1_1S3ResourceClassification
 */
const de_S3ResourceClassification = (output: any, context: __SerdeContext): S3ResourceClassification => {
  return {
    bucketName: __expectString(output.bucketName),
    classificationType:
      output.classificationType != null ? de_ClassificationType(output.classificationType, context) : undefined,
    prefix: __expectString(output.prefix),
  } as any;
};

/**
 * deserializeAws_json1_1S3ResourcesClassification
 */
const de_S3ResourcesClassification = (output: any, context: __SerdeContext): S3ResourceClassification[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_S3ResourceClassification(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UpdateS3ResourcesResult
 */
const de_UpdateS3ResourcesResult = (output: any, context: __SerdeContext): UpdateS3ResourcesResult => {
  return {
    failedS3Resources:
      output.failedS3Resources != null ? de_FailedS3Resources(output.failedS3Resources, context) : undefined,
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `MacieService.${operation}`,
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
