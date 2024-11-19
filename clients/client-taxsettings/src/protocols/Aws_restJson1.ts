// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
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
  BatchDeleteTaxRegistrationCommandInput,
  BatchDeleteTaxRegistrationCommandOutput,
} from "../commands/BatchDeleteTaxRegistrationCommand";
import {
  BatchGetTaxExemptionsCommandInput,
  BatchGetTaxExemptionsCommandOutput,
} from "../commands/BatchGetTaxExemptionsCommand";
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
import {
  GetTaxExemptionTypesCommandInput,
  GetTaxExemptionTypesCommandOutput,
} from "../commands/GetTaxExemptionTypesCommand";
import { GetTaxInheritanceCommandInput, GetTaxInheritanceCommandOutput } from "../commands/GetTaxInheritanceCommand";
import { GetTaxRegistrationCommandInput, GetTaxRegistrationCommandOutput } from "../commands/GetTaxRegistrationCommand";
import {
  GetTaxRegistrationDocumentCommandInput,
  GetTaxRegistrationDocumentCommandOutput,
} from "../commands/GetTaxRegistrationDocumentCommand";
import {
  ListSupplementalTaxRegistrationsCommandInput,
  ListSupplementalTaxRegistrationsCommandOutput,
} from "../commands/ListSupplementalTaxRegistrationsCommand";
import { ListTaxExemptionsCommandInput, ListTaxExemptionsCommandOutput } from "../commands/ListTaxExemptionsCommand";
import {
  ListTaxRegistrationsCommandInput,
  ListTaxRegistrationsCommandOutput,
} from "../commands/ListTaxRegistrationsCommand";
import {
  PutSupplementalTaxRegistrationCommandInput,
  PutSupplementalTaxRegistrationCommandOutput,
} from "../commands/PutSupplementalTaxRegistrationCommand";
import { PutTaxExemptionCommandInput, PutTaxExemptionCommandOutput } from "../commands/PutTaxExemptionCommand";
import { PutTaxInheritanceCommandInput, PutTaxInheritanceCommandOutput } from "../commands/PutTaxInheritanceCommand";
import { PutTaxRegistrationCommandInput, PutTaxRegistrationCommandOutput } from "../commands/PutTaxRegistrationCommand";
import {
  AccessDeniedException,
  AdditionalInfoRequest,
  Address,
  AttachmentUploadException,
  Authority,
  CanadaAdditionalInfo,
  CaseCreationLimitExceededException,
  ConflictException,
  DestinationS3Location,
  EstoniaAdditionalInfo,
  ExemptionCertificate,
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
  TaxExemption,
  TaxExemptionDetails,
  TaxRegistrationDocFile,
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
 * serializeAws_restJson1BatchGetTaxExemptionsCommand
 */
export const se_BatchGetTaxExemptionsCommand = async (
  input: BatchGetTaxExemptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/BatchGetTaxExemptions");
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
      taxRegistrationEntry: (_) => se_TaxRegistrationEntry(_, context),
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
 * serializeAws_restJson1GetTaxExemptionTypesCommand
 */
export const se_GetTaxExemptionTypesCommand = async (
  input: GetTaxExemptionTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/GetTaxExemptionTypes");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTaxInheritanceCommand
 */
export const se_GetTaxInheritanceCommand = async (
  input: GetTaxInheritanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/GetTaxInheritance");
  let body: any;
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
 * serializeAws_restJson1ListTaxExemptionsCommand
 */
export const se_ListTaxExemptionsCommand = async (
  input: ListTaxExemptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListTaxExemptions");
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
 * serializeAws_restJson1PutTaxExemptionCommand
 */
export const se_PutTaxExemptionCommand = async (
  input: PutTaxExemptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/PutTaxExemption");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountIds: (_) => _json(_),
      authority: (_) => _json(_),
      exemptionCertificate: (_) => se_ExemptionCertificate(_, context),
      exemptionType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutTaxInheritanceCommand
 */
export const se_PutTaxInheritanceCommand = async (
  input: PutTaxInheritanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/PutTaxInheritance");
  let body: any;
  body = JSON.stringify(
    take(input, {
      heritageStatus: [],
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
      taxRegistrationEntry: (_) => se_TaxRegistrationEntry(_, context),
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
 * deserializeAws_restJson1BatchGetTaxExemptionsCommand
 */
export const de_BatchGetTaxExemptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetTaxExemptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    failedAccounts: _json,
    taxExemptionDetailsMap: (_) => de_TaxExemptionDetailsMap(_, context),
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
 * deserializeAws_restJson1GetTaxExemptionTypesCommand
 */
export const de_GetTaxExemptionTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTaxExemptionTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    taxExemptionTypes: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTaxInheritanceCommand
 */
export const de_GetTaxInheritanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTaxInheritanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    heritageStatus: __expectString,
  });
  Object.assign(contents, doc);
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
    presignedS3Url: __expectString,
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
 * deserializeAws_restJson1ListTaxExemptionsCommand
 */
export const de_ListTaxExemptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTaxExemptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    taxExemptionDetailsMap: (_) => de_TaxExemptionDetailsMap(_, context),
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
 * deserializeAws_restJson1PutTaxExemptionCommand
 */
export const de_PutTaxExemptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTaxExemptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    caseId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutTaxInheritanceCommand
 */
export const de_PutTaxInheritanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTaxInheritanceCommandOutput> => {
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
    case "AccessDeniedException":
    case "com.amazonaws.taxsettings#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AttachmentUploadException":
    case "com.amazonaws.taxsettings#AttachmentUploadException":
      throw await de_AttachmentUploadExceptionRes(parsedOutput, context);
    case "CaseCreationLimitExceededException":
    case "com.amazonaws.taxsettings#CaseCreationLimitExceededException":
      throw await de_CaseCreationLimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1AttachmentUploadExceptionRes
 */
const de_AttachmentUploadExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AttachmentUploadException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AttachmentUploadException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1CaseCreationLimitExceededExceptionRes
 */
const de_CaseCreationLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CaseCreationLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new CaseCreationLimitExceededException({
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

// se_Authority omitted.

// se_CanadaAdditionalInfo omitted.

// se_DestinationS3Location omitted.

// se_EstoniaAdditionalInfo omitted.

/**
 * serializeAws_restJson1ExemptionCertificate
 */
const se_ExemptionCertificate = (input: ExemptionCertificate, context: __SerdeContext): any => {
  return take(input, {
    documentFile: context.base64Encoder,
    documentName: [],
  });
};

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

/**
 * serializeAws_restJson1TaxRegistrationDocFile
 */
const se_TaxRegistrationDocFile = (input: TaxRegistrationDocFile, context: __SerdeContext): any => {
  return take(input, {
    fileContent: context.base64Encoder,
    fileName: [],
  });
};

/**
 * serializeAws_restJson1TaxRegistrationDocument
 */
const se_TaxRegistrationDocument = (input: TaxRegistrationDocument, context: __SerdeContext): any => {
  return take(input, {
    file: (_) => se_TaxRegistrationDocFile(_, context),
    s3Location: _json,
  });
};

/**
 * serializeAws_restJson1TaxRegistrationDocuments
 */
const se_TaxRegistrationDocuments = (input: TaxRegistrationDocument[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TaxRegistrationDocument(entry, context);
    });
};

/**
 * serializeAws_restJson1TaxRegistrationEntry
 */
const se_TaxRegistrationEntry = (input: TaxRegistrationEntry, context: __SerdeContext): any => {
  return take(input, {
    additionalTaxInformation: _json,
    certifiedEmailId: [],
    legalAddress: _json,
    legalName: [],
    registrationId: [],
    registrationType: [],
    sector: [],
    verificationDetails: (_) => se_VerificationDetails(_, context),
  });
};

// se_TurkeyAdditionalInfo omitted.

// se_UkraineAdditionalInfo omitted.

/**
 * serializeAws_restJson1VerificationDetails
 */
const se_VerificationDetails = (input: VerificationDetails, context: __SerdeContext): any => {
  return take(input, {
    dateOfBirth: [],
    taxRegistrationDocuments: (_) => se_TaxRegistrationDocuments(_, context),
  });
};

// de_AccountDetails omitted.

// de_AccountDetailsList omitted.

// de_AccountIds omitted.

// de_AccountMetaData omitted.

// de_AdditionalInfoResponse omitted.

// de_Address omitted.

// de_AddressRoleMap omitted.

// de_Authorities omitted.

// de_Authority omitted.

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

/**
 * deserializeAws_restJson1TaxExemption
 */
const de_TaxExemption = (output: any, context: __SerdeContext): TaxExemption => {
  return take(output, {
    authority: _json,
    effectiveDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    expirationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    systemEffectiveDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    taxExemptionType: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1TaxExemptionDetails
 */
const de_TaxExemptionDetails = (output: any, context: __SerdeContext): TaxExemptionDetails => {
  return take(output, {
    heritageObtainedDetails: __expectBoolean,
    heritageObtainedParentEntity: __expectString,
    heritageObtainedReason: __expectString,
    taxExemptions: (_: any) => de_TaxExemptions(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1TaxExemptionDetailsMap
 */
const de_TaxExemptionDetailsMap = (output: any, context: __SerdeContext): Record<string, TaxExemptionDetails> => {
  return Object.entries(output).reduce((acc: Record<string, TaxExemptionDetails>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_TaxExemptionDetails(value, context);
    return acc;
  }, {} as Record<string, TaxExemptionDetails>);
};

/**
 * deserializeAws_restJson1TaxExemptions
 */
const de_TaxExemptions = (output: any, context: __SerdeContext): TaxExemption[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TaxExemption(entry, context);
    });
  return retVal;
};

// de_TaxExemptionType omitted.

// de_TaxExemptionTypes omitted.

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
