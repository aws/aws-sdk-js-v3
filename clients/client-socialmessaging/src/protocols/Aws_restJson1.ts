// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  AssociateWhatsAppBusinessAccountCommandInput,
  AssociateWhatsAppBusinessAccountCommandOutput,
} from "../commands/AssociateWhatsAppBusinessAccountCommand";
import {
  DeleteWhatsAppMessageMediaCommandInput,
  DeleteWhatsAppMessageMediaCommandOutput,
} from "../commands/DeleteWhatsAppMessageMediaCommand";
import {
  DisassociateWhatsAppBusinessAccountCommandInput,
  DisassociateWhatsAppBusinessAccountCommandOutput,
} from "../commands/DisassociateWhatsAppBusinessAccountCommand";
import {
  GetLinkedWhatsAppBusinessAccountCommandInput,
  GetLinkedWhatsAppBusinessAccountCommandOutput,
} from "../commands/GetLinkedWhatsAppBusinessAccountCommand";
import {
  GetLinkedWhatsAppBusinessAccountPhoneNumberCommandInput,
  GetLinkedWhatsAppBusinessAccountPhoneNumberCommandOutput,
} from "../commands/GetLinkedWhatsAppBusinessAccountPhoneNumberCommand";
import {
  GetWhatsAppMessageMediaCommandInput,
  GetWhatsAppMessageMediaCommandOutput,
} from "../commands/GetWhatsAppMessageMediaCommand";
import {
  ListLinkedWhatsAppBusinessAccountsCommandInput,
  ListLinkedWhatsAppBusinessAccountsCommandOutput,
} from "../commands/ListLinkedWhatsAppBusinessAccountsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  PostWhatsAppMessageMediaCommandInput,
  PostWhatsAppMessageMediaCommandOutput,
} from "../commands/PostWhatsAppMessageMediaCommand";
import {
  PutWhatsAppBusinessAccountEventDestinationsCommandInput,
  PutWhatsAppBusinessAccountEventDestinationsCommandOutput,
} from "../commands/PutWhatsAppBusinessAccountEventDestinationsCommand";
import {
  SendWhatsAppMessageCommandInput,
  SendWhatsAppMessageCommandOutput,
} from "../commands/SendWhatsAppMessageCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  AccessDeniedByMetaException,
  AccessDeniedException,
  DependencyException,
  InternalServiceException,
  InvalidParametersException,
  LinkedWhatsAppBusinessAccount,
  LinkedWhatsAppBusinessAccountSummary,
  ResourceNotFoundException,
  S3File,
  S3PresignedUrl,
  Tag,
  ThrottledRequestException,
  ValidationException,
  WabaPhoneNumberSetupFinalization,
  WabaSetupFinalization,
  WhatsAppBusinessAccountEventDestination,
  WhatsAppSetupFinalization,
  WhatsAppSignupCallback,
} from "../models/models_0";
import { SocialMessagingServiceException as __BaseException } from "../models/SocialMessagingServiceException";

/**
 * serializeAws_restJson1AssociateWhatsAppBusinessAccountCommand
 */
export const se_AssociateWhatsAppBusinessAccountCommand = async (
  input: AssociateWhatsAppBusinessAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/whatsapp/signup");
  let body: any;
  body = JSON.stringify(
    take(input, {
      setupFinalization: (_) => _json(_),
      signupCallback: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteWhatsAppMessageMediaCommand
 */
export const se_DeleteWhatsAppMessageMediaCommand = async (
  input: DeleteWhatsAppMessageMediaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/whatsapp/media");
  const query: any = map({
    [_mI]: [, __expectNonNull(input[_mI]!, `mediaId`)],
    [_oPNI]: [, __expectNonNull(input[_oPNI]!, `originationPhoneNumberId`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateWhatsAppBusinessAccountCommand
 */
export const se_DisassociateWhatsAppBusinessAccountCommand = async (
  input: DisassociateWhatsAppBusinessAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/whatsapp/waba/disassociate");
  const query: any = map({
    [_i]: [, __expectNonNull(input[_i]!, `id`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetLinkedWhatsAppBusinessAccountCommand
 */
export const se_GetLinkedWhatsAppBusinessAccountCommand = async (
  input: GetLinkedWhatsAppBusinessAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/whatsapp/waba/details");
  const query: any = map({
    [_i]: [, __expectNonNull(input[_i]!, `id`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetLinkedWhatsAppBusinessAccountPhoneNumberCommand
 */
export const se_GetLinkedWhatsAppBusinessAccountPhoneNumberCommand = async (
  input: GetLinkedWhatsAppBusinessAccountPhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/whatsapp/waba/phone/details");
  const query: any = map({
    [_i]: [, __expectNonNull(input[_i]!, `id`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetWhatsAppMessageMediaCommand
 */
export const se_GetWhatsAppMessageMediaCommand = async (
  input: GetWhatsAppMessageMediaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/whatsapp/media/get");
  let body: any;
  body = JSON.stringify(
    take(input, {
      destinationS3File: (_) => _json(_),
      destinationS3PresignedUrl: (_) => _json(_),
      mediaId: [],
      metadataOnly: [],
      originationPhoneNumberId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListLinkedWhatsAppBusinessAccountsCommand
 */
export const se_ListLinkedWhatsAppBusinessAccountsCommand = async (
  input: ListLinkedWhatsAppBusinessAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/whatsapp/waba/list");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/tags/list");
  const query: any = map({
    [_rA]: [, __expectNonNull(input[_rA]!, `resourceArn`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PostWhatsAppMessageMediaCommand
 */
export const se_PostWhatsAppMessageMediaCommand = async (
  input: PostWhatsAppMessageMediaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/whatsapp/media");
  let body: any;
  body = JSON.stringify(
    take(input, {
      originationPhoneNumberId: [],
      sourceS3File: (_) => _json(_),
      sourceS3PresignedUrl: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutWhatsAppBusinessAccountEventDestinationsCommand
 */
export const se_PutWhatsAppBusinessAccountEventDestinationsCommand = async (
  input: PutWhatsAppBusinessAccountEventDestinationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/whatsapp/waba/eventdestinations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      eventDestinations: (_) => _json(_),
      id: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SendWhatsAppMessageCommand
 */
export const se_SendWhatsAppMessageCommand = async (
  input: SendWhatsAppMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/whatsapp/send");
  let body: any;
  body = JSON.stringify(
    take(input, {
      message: (_) => context.base64Encoder(_),
      metaApiVersion: [],
      originationPhoneNumberId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/tags/tag-resource");
  let body: any;
  body = JSON.stringify(
    take(input, {
      resourceArn: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/tags/untag-resource");
  let body: any;
  body = JSON.stringify(
    take(input, {
      resourceArn: [],
      tagKeys: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AssociateWhatsAppBusinessAccountCommand
 */
export const de_AssociateWhatsAppBusinessAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateWhatsAppBusinessAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    signupCallbackResult: _json,
    statusCode: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteWhatsAppMessageMediaCommand
 */
export const de_DeleteWhatsAppMessageMediaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWhatsAppMessageMediaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    success: __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateWhatsAppBusinessAccountCommand
 */
export const de_DisassociateWhatsAppBusinessAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateWhatsAppBusinessAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetLinkedWhatsAppBusinessAccountCommand
 */
export const de_GetLinkedWhatsAppBusinessAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLinkedWhatsAppBusinessAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    account: (_) => de_LinkedWhatsAppBusinessAccount(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetLinkedWhatsAppBusinessAccountPhoneNumberCommand
 */
export const de_GetLinkedWhatsAppBusinessAccountPhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLinkedWhatsAppBusinessAccountPhoneNumberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    linkedWhatsAppBusinessAccountId: __expectString,
    phoneNumber: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetWhatsAppMessageMediaCommand
 */
export const de_GetWhatsAppMessageMediaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWhatsAppMessageMediaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    fileSize: __expectLong,
    mimeType: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListLinkedWhatsAppBusinessAccountsCommand
 */
export const de_ListLinkedWhatsAppBusinessAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLinkedWhatsAppBusinessAccountsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    linkedAccounts: (_) => de_LinkedWhatsAppBusinessAccountSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    statusCode: __expectInt32,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PostWhatsAppMessageMediaCommand
 */
export const de_PostWhatsAppMessageMediaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostWhatsAppMessageMediaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    mediaId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutWhatsAppBusinessAccountEventDestinationsCommand
 */
export const de_PutWhatsAppBusinessAccountEventDestinationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutWhatsAppBusinessAccountEventDestinationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1SendWhatsAppMessageCommand
 */
export const de_SendWhatsAppMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendWhatsAppMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    messageId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    statusCode: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    statusCode: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.socialmessaging#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DependencyException":
    case "com.amazonaws.socialmessaging#DependencyException":
      throw await de_DependencyExceptionRes(parsedOutput, context);
    case "InvalidParametersException":
    case "com.amazonaws.socialmessaging#InvalidParametersException":
      throw await de_InvalidParametersExceptionRes(parsedOutput, context);
    case "ThrottledRequestException":
    case "com.amazonaws.socialmessaging#ThrottledRequestException":
      throw await de_ThrottledRequestExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.socialmessaging#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "AccessDeniedByMetaException":
    case "com.amazonaws.socialmessaging#AccessDeniedByMetaException":
      throw await de_AccessDeniedByMetaExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.socialmessaging#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.socialmessaging#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccessDeniedByMetaExceptionRes
 */
const de_AccessDeniedByMetaExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedByMetaException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedByMetaException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1DependencyExceptionRes
 */
const de_DependencyExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<DependencyException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new DependencyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServiceExceptionRes
 */
const de_InternalServiceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidParametersExceptionRes
 */
const de_InvalidParametersExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParametersException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidParametersException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottledRequestExceptionRes
 */
const de_ThrottledRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottledRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottledRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_Headers omitted.

// se_S3File omitted.

// se_S3PresignedUrl omitted.

// se_StringList omitted.

// se_Tag omitted.

// se_TagList omitted.

// se_WabaPhoneNumberSetupFinalization omitted.

// se_WabaPhoneNumberSetupFinalizationList omitted.

// se_WabaSetupFinalization omitted.

// se_WhatsAppBusinessAccountEventDestination omitted.

// se_WhatsAppBusinessAccountEventDestinations omitted.

// se_WhatsAppSetupFinalization omitted.

// se_WhatsAppSignupCallback omitted.

// de_LinkedAccountWithIncompleteSetup omitted.

/**
 * deserializeAws_restJson1LinkedWhatsAppBusinessAccount
 */
const de_LinkedWhatsAppBusinessAccount = (output: any, context: __SerdeContext): LinkedWhatsAppBusinessAccount => {
  return take(output, {
    arn: __expectString,
    eventDestinations: _json,
    id: __expectString,
    linkDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    phoneNumbers: _json,
    registrationStatus: __expectString,
    wabaId: __expectString,
    wabaName: __expectString,
  }) as any;
};

// de_LinkedWhatsAppBusinessAccountIdMetaData omitted.

/**
 * deserializeAws_restJson1LinkedWhatsAppBusinessAccountSummary
 */
const de_LinkedWhatsAppBusinessAccountSummary = (
  output: any,
  context: __SerdeContext
): LinkedWhatsAppBusinessAccountSummary => {
  return take(output, {
    arn: __expectString,
    eventDestinations: _json,
    id: __expectString,
    linkDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    registrationStatus: __expectString,
    wabaId: __expectString,
    wabaName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1LinkedWhatsAppBusinessAccountSummaryList
 */
const de_LinkedWhatsAppBusinessAccountSummaryList = (
  output: any,
  context: __SerdeContext
): LinkedWhatsAppBusinessAccountSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LinkedWhatsAppBusinessAccountSummary(entry, context);
    });
  return retVal;
};

// de_Tag omitted.

// de_TagList omitted.

// de_WhatsAppBusinessAccountEventDestination omitted.

// de_WhatsAppBusinessAccountEventDestinations omitted.

// de_WhatsAppPhoneNumberDetail omitted.

// de_WhatsAppPhoneNumberDetailList omitted.

// de_WhatsAppPhoneNumberSummary omitted.

// de_WhatsAppPhoneNumberSummaryList omitted.

// de_WhatsAppSignupCallbackResult omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const _i = "id";
const _mI = "mediaId";
const _mR = "maxResults";
const _nT = "nextToken";
const _oPNI = "originationPhoneNumberId";
const _rA = "resourceArn";
