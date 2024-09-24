// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  map,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  AcceptPrimaryEmailUpdateCommandInput,
  AcceptPrimaryEmailUpdateCommandOutput,
} from "../commands/AcceptPrimaryEmailUpdateCommand";
import {
  DeleteAlternateContactCommandInput,
  DeleteAlternateContactCommandOutput,
} from "../commands/DeleteAlternateContactCommand";
import { DisableRegionCommandInput, DisableRegionCommandOutput } from "../commands/DisableRegionCommand";
import { EnableRegionCommandInput, EnableRegionCommandOutput } from "../commands/EnableRegionCommand";
import {
  GetAlternateContactCommandInput,
  GetAlternateContactCommandOutput,
} from "../commands/GetAlternateContactCommand";
import {
  GetContactInformationCommandInput,
  GetContactInformationCommandOutput,
} from "../commands/GetContactInformationCommand";
import { GetPrimaryEmailCommandInput, GetPrimaryEmailCommandOutput } from "../commands/GetPrimaryEmailCommand";
import { GetRegionOptStatusCommandInput, GetRegionOptStatusCommandOutput } from "../commands/GetRegionOptStatusCommand";
import { ListRegionsCommandInput, ListRegionsCommandOutput } from "../commands/ListRegionsCommand";
import {
  PutAlternateContactCommandInput,
  PutAlternateContactCommandOutput,
} from "../commands/PutAlternateContactCommand";
import {
  PutContactInformationCommandInput,
  PutContactInformationCommandOutput,
} from "../commands/PutContactInformationCommand";
import {
  StartPrimaryEmailUpdateCommandInput,
  StartPrimaryEmailUpdateCommandOutput,
} from "../commands/StartPrimaryEmailUpdateCommand";
import { AccountServiceException as __BaseException } from "../models/AccountServiceException";
import {
  AccessDeniedException,
  ConflictException,
  ContactInformation,
  InternalServerException,
  RegionOptStatus,
  ResourceNotFoundException,
  TooManyRequestsException,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1AcceptPrimaryEmailUpdateCommand
 */
export const se_AcceptPrimaryEmailUpdateCommand = async (
  input: AcceptPrimaryEmailUpdateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/acceptPrimaryEmailUpdate");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountId: [],
      Otp: [],
      PrimaryEmail: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAlternateContactCommand
 */
export const se_DeleteAlternateContactCommand = async (
  input: DeleteAlternateContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/deleteAlternateContact");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountId: [],
      AlternateContactType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisableRegionCommand
 */
export const se_DisableRegionCommand = async (
  input: DisableRegionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/disableRegion");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountId: [],
      RegionName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1EnableRegionCommand
 */
export const se_EnableRegionCommand = async (
  input: EnableRegionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/enableRegion");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountId: [],
      RegionName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAlternateContactCommand
 */
export const se_GetAlternateContactCommand = async (
  input: GetAlternateContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/getAlternateContact");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountId: [],
      AlternateContactType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetContactInformationCommand
 */
export const se_GetContactInformationCommand = async (
  input: GetContactInformationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/getContactInformation");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPrimaryEmailCommand
 */
export const se_GetPrimaryEmailCommand = async (
  input: GetPrimaryEmailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/getPrimaryEmail");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRegionOptStatusCommand
 */
export const se_GetRegionOptStatusCommand = async (
  input: GetRegionOptStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/getRegionOptStatus");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountId: [],
      RegionName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRegionsCommand
 */
export const se_ListRegionsCommand = async (
  input: ListRegionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/listRegions");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountId: [],
      MaxResults: [],
      NextToken: [],
      RegionOptStatusContains: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutAlternateContactCommand
 */
export const se_PutAlternateContactCommand = async (
  input: PutAlternateContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/putAlternateContact");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountId: [],
      AlternateContactType: [],
      EmailAddress: [],
      Name: [],
      PhoneNumber: [],
      Title: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutContactInformationCommand
 */
export const se_PutContactInformationCommand = async (
  input: PutContactInformationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/putContactInformation");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountId: [],
      ContactInformation: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartPrimaryEmailUpdateCommand
 */
export const se_StartPrimaryEmailUpdateCommand = async (
  input: StartPrimaryEmailUpdateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/startPrimaryEmailUpdate");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountId: [],
      PrimaryEmail: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AcceptPrimaryEmailUpdateCommand
 */
export const de_AcceptPrimaryEmailUpdateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptPrimaryEmailUpdateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAlternateContactCommand
 */
export const de_DeleteAlternateContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAlternateContactCommandOutput> => {
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
 * deserializeAws_restJson1DisableRegionCommand
 */
export const de_DisableRegionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableRegionCommandOutput> => {
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
 * deserializeAws_restJson1EnableRegionCommand
 */
export const de_EnableRegionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableRegionCommandOutput> => {
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
 * deserializeAws_restJson1GetAlternateContactCommand
 */
export const de_GetAlternateContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAlternateContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AlternateContact: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetContactInformationCommand
 */
export const de_GetContactInformationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactInformationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ContactInformation: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPrimaryEmailCommand
 */
export const de_GetPrimaryEmailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPrimaryEmailCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PrimaryEmail: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRegionOptStatusCommand
 */
export const de_GetRegionOptStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRegionOptStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RegionName: __expectString,
    RegionOptStatus: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRegionsCommand
 */
export const de_ListRegionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRegionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Regions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutAlternateContactCommand
 */
export const de_PutAlternateContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAlternateContactCommandOutput> => {
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
 * deserializeAws_restJson1PutContactInformationCommand
 */
export const de_PutContactInformationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutContactInformationCommandOutput> => {
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
 * deserializeAws_restJson1StartPrimaryEmailUpdateCommand
 */
export const de_StartPrimaryEmailUpdateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPrimaryEmailUpdateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Status: __expectString,
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
    case "com.amazonaws.account#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.account#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.account#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.account#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.account#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.account#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
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
 * deserializeAws_restJson1TooManyRequestsExceptionRes
 */
const de_TooManyRequestsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new TooManyRequestsException({
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
    fieldList: _json,
    message: __expectString,
    reason: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_ContactInformation omitted.

// se_RegionOptStatusList omitted.

// de_AlternateContact omitted.

// de_ContactInformation omitted.

// de_Region omitted.

// de_RegionOptList omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

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
