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
  BatchDeleteTaxRegistrationCommandInput,
  BatchDeleteTaxRegistrationCommandOutput,
} from "../commands/BatchDeleteTaxRegistrationCommand";
import {
  BatchPutTaxRegistrationCommandInput,
  BatchPutTaxRegistrationCommandOutput,
} from "../commands/BatchPutTaxRegistrationCommand";
import {
  DeleteSupplementalTaxRegistrationCommandInput,
  DeleteSupplementalTaxRegistrationCommandOutput,
} from "../commands/DeleteSupplementalTaxRegistrationCommand";
import {
  DeleteTaxRegistrationCommandInput,
  DeleteTaxRegistrationCommandOutput,
} from "../commands/DeleteTaxRegistrationCommand";
import { GetTaxRegistrationCommandInput, GetTaxRegistrationCommandOutput } from "../commands/GetTaxRegistrationCommand";
import {
  GetTaxRegistrationDocumentCommandInput,
  GetTaxRegistrationDocumentCommandOutput,
} from "../commands/GetTaxRegistrationDocumentCommand";
import {
  ListSupplementalTaxRegistrationsCommandInput,
  ListSupplementalTaxRegistrationsCommandOutput,
} from "../commands/ListSupplementalTaxRegistrationsCommand";
import {
  ListTaxRegistrationsCommandInput,
  ListTaxRegistrationsCommandOutput,
} from "../commands/ListTaxRegistrationsCommand";
import {
  PutSupplementalTaxRegistrationCommandInput,
  PutSupplementalTaxRegistrationCommandOutput,
} from "../commands/PutSupplementalTaxRegistrationCommand";
import { PutTaxRegistrationCommandInput, PutTaxRegistrationCommandOutput } from "../commands/PutTaxRegistrationCommand";
import {
  AdditionalInfoRequest,
  Address,
  CanadaAdditionalInfo,
  ConflictException,
  DestinationS3Location,
  EstoniaAdditionalInfo,
  GeorgiaAdditionalInfo,
  InternalServerException,
  IsraelAdditionalInfo,
  ItalyAdditionalInfo,
  KenyaAdditionalInfo,
  MalaysiaAdditionalInfo,
  MalaysiaServiceTaxCode,
  PolandAdditionalInfo,
  ResourceNotFoundException,
  RomaniaAdditionalInfo,
  SaudiArabiaAdditionalInfo,
  SourceS3Location,
  SouthKoreaAdditionalInfo,
  SpainAdditionalInfo,
  SupplementalTaxRegistrationEntry,
  TaxDocumentMetadata,
  TaxRegistrationDocument,
  TaxRegistrationEntry,
  TurkeyAdditionalInfo,
  UkraineAdditionalInfo,
  ValidationException,
  VerificationDetails,
} from "../models/models_0";
import { TaxSettingsServiceException as __BaseException } from "../models/TaxSettingsServiceException";

/**
 * serializeAws_restJson1BatchDeleteTaxRegistrationCommand
 */
export const se_BatchDeleteTaxRegistrationCommand = async (
  input: BatchDeleteTaxRegistrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/BatchDeleteTaxRegistration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountIds: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchPutTaxRegistrationCommand
 */
export const se_BatchPutTaxRegistrationCommand = async (
  input: BatchPutTaxRegistrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/BatchPutTaxRegistration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountIds: (_) => _json(_),
      taxRegistrationEntry: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSupplementalTaxRegistrationCommand
 */
export const se_DeleteSupplementalTaxRegistrationCommand = async (
  input: DeleteSupplementalTaxRegistrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DeleteSupplementalTaxRegistration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      authorityId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteTaxRegistrationCommand
 */
export const se_DeleteTaxRegistrationCommand = async (
  input: DeleteTaxRegistrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DeleteTaxRegistration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTaxRegistrationCommand
 */
export const se_GetTaxRegistrationCommand = async (
  input: GetTaxRegistrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/GetTaxRegistration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTaxRegistrationDocumentCommand
 */
export const se_GetTaxRegistrationDocumentCommand = async (
  input: GetTaxRegistrationDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/GetTaxRegistrationDocument");
  let body: any;
  body = JSON.stringify(
    take(input, {
      destinationS3Location: (_) => _json(_),
      taxDocumentMetadata: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSupplementalTaxRegistrationsCommand
 */
export const se_ListSupplementalTaxRegistrationsCommand = async (
  input: ListSupplementalTaxRegistrationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListSupplementalTaxRegistrations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTaxRegistrationsCommand
 */
export const se_ListTaxRegistrationsCommand = async (
  input: ListTaxRegistrationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListTaxRegistrations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutSupplementalTaxRegistrationCommand
 */
export const se_PutSupplementalTaxRegistrationCommand = async (
  input: PutSupplementalTaxRegistrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/PutSupplementalTaxRegistration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      taxRegistrationEntry: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutTaxRegistrationCommand
 */
export const se_PutTaxRegistrationCommand = async (
  input: PutTaxRegistrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/PutTaxRegistration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountId: [],
      taxRegistrationEntry: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1BatchDeleteTaxRegistrationCommand
 */
export const de_BatchDeleteTaxRegistrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteTaxRegistrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    errors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchPutTaxRegistrationCommand
 */
export const de_BatchPutTaxRegistrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutTaxRegistrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    errors: _json,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSupplementalTaxRegistrationCommand
 */
export const de_DeleteSupplementalTaxRegistrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSupplementalTaxRegistrationCommandOutput> => {
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
 * deserializeAws_restJson1DeleteTaxRegistrationCommand
 */
export const de_DeleteTaxRegistrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTaxRegistrationCommandOutput> => {
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
 * deserializeAws_restJson1GetTaxRegistrationCommand
 */
export const de_GetTaxRegistrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTaxRegistrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    taxRegistration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTaxRegistrationDocumentCommand
 */
export const de_GetTaxRegistrationDocumentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTaxRegistrationDocumentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    destinationFilePath: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSupplementalTaxRegistrationsCommand
 */
export const de_ListSupplementalTaxRegistrationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSupplementalTaxRegistrationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    taxRegistrations: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTaxRegistrationsCommand
 */
export const de_ListTaxRegistrationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTaxRegistrationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    accountDetails: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutSupplementalTaxRegistrationCommand
 */
export const de_PutSupplementalTaxRegistrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSupplementalTaxRegistrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    authorityId: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutTaxRegistrationCommand
 */
export const de_PutTaxRegistrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTaxRegistrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    status: __expectString,
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
    case "ConflictException":
    case "com.amazonaws.taxsettings#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.taxsettings#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.taxsettings#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.taxsettings#ResourceNotFoundException":
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
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    errorCode: __expectString,
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
    errorCode: __expectString,
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
    errorCode: __expectString,
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
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    errorCode: __expectString,
    fieldList: _json,
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AccountIds omitted.

// se_AdditionalInfoRequest omitted.

// se_Address omitted.

// se_CanadaAdditionalInfo omitted.

// se_DestinationS3Location omitted.

// se_EstoniaAdditionalInfo omitted.

// se_GeorgiaAdditionalInfo omitted.

// se_IsraelAdditionalInfo omitted.

// se_ItalyAdditionalInfo omitted.

// se_KenyaAdditionalInfo omitted.

// se_MalaysiaAdditionalInfo omitted.

// se_MalaysiaServiceTaxCodesList omitted.

// se_PolandAdditionalInfo omitted.

// se_RomaniaAdditionalInfo omitted.

// se_SaudiArabiaAdditionalInfo omitted.

// se_SourceS3Location omitted.

// se_SouthKoreaAdditionalInfo omitted.

// se_SpainAdditionalInfo omitted.

// se_SupplementalTaxRegistrationEntry omitted.

// se_TaxDocumentMetadata omitted.

// se_TaxRegistrationDocument omitted.

// se_TaxRegistrationDocuments omitted.

// se_TaxRegistrationEntry omitted.

// se_TurkeyAdditionalInfo omitted.

// se_UkraineAdditionalInfo omitted.

// se_VerificationDetails omitted.

// de_AccountDetails omitted.

// de_AccountDetailsList omitted.

// de_AccountMetaData omitted.

// de_AdditionalInfoResponse omitted.

// de_Address omitted.

// de_AddressRoleMap omitted.

// de_BatchDeleteTaxRegistrationError omitted.

// de_BatchDeleteTaxRegistrationErrors omitted.

// de_BatchPutTaxRegistrationError omitted.

// de_BatchPutTaxRegistrationErrors omitted.

// de_BrazilAdditionalInfo omitted.

// de_CanadaAdditionalInfo omitted.

// de_EstoniaAdditionalInfo omitted.

// de_GeorgiaAdditionalInfo omitted.

// de_IndiaAdditionalInfo omitted.

// de_IsraelAdditionalInfo omitted.

// de_ItalyAdditionalInfo omitted.

// de_Jurisdiction omitted.

// de_KenyaAdditionalInfo omitted.

// de_MalaysiaAdditionalInfo omitted.

// de_MalaysiaServiceTaxCodesList omitted.

// de_PolandAdditionalInfo omitted.

// de_RomaniaAdditionalInfo omitted.

// de_SaudiArabiaAdditionalInfo omitted.

// de_SouthKoreaAdditionalInfo omitted.

// de_SpainAdditionalInfo omitted.

// de_SupplementalTaxRegistration omitted.

// de_SupplementalTaxRegistrationList omitted.

// de_TaxDocumentMetadata omitted.

// de_TaxDocumentMetadatas omitted.

// de_TaxInheritanceDetails omitted.

// de_TaxRegistration omitted.

// de_TaxRegistrationWithJurisdiction omitted.

// de_TurkeyAdditionalInfo omitted.

// de_UkraineAdditionalInfo omitted.

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
