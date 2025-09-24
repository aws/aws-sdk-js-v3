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
import { v4 as generateIdempotencyToken } from "@smithy/uuid";

import { CreateSavingsPlanCommandInput, CreateSavingsPlanCommandOutput } from "../commands/CreateSavingsPlanCommand";
import {
  DeleteQueuedSavingsPlanCommandInput,
  DeleteQueuedSavingsPlanCommandOutput,
} from "../commands/DeleteQueuedSavingsPlanCommand";
import {
  DescribeSavingsPlanRatesCommandInput,
  DescribeSavingsPlanRatesCommandOutput,
} from "../commands/DescribeSavingsPlanRatesCommand";
import {
  DescribeSavingsPlansCommandInput,
  DescribeSavingsPlansCommandOutput,
} from "../commands/DescribeSavingsPlansCommand";
import {
  DescribeSavingsPlansOfferingRatesCommandInput,
  DescribeSavingsPlansOfferingRatesCommandOutput,
} from "../commands/DescribeSavingsPlansOfferingRatesCommand";
import {
  DescribeSavingsPlansOfferingsCommandInput,
  DescribeSavingsPlansOfferingsCommandOutput,
} from "../commands/DescribeSavingsPlansOfferingsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ReturnSavingsPlanCommandInput, ReturnSavingsPlanCommandOutput } from "../commands/ReturnSavingsPlanCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  CurrencyCode,
  InternalServerException,
  ResourceNotFoundException,
  SavingsPlanFilter,
  SavingsPlanOfferingFilterElement,
  SavingsPlanOfferingRateFilterElement,
  SavingsPlanPaymentOption,
  SavingsPlanProductType,
  SavingsPlanRateFilter,
  SavingsPlanRateServiceCode,
  SavingsPlanState,
  SavingsPlanType,
  ServiceQuotaExceededException,
  ValidationException,
} from "../models/models_0";
import { SavingsplansServiceException as __BaseException } from "../models/SavingsplansServiceException";

/**
 * serializeAws_restJson1CreateSavingsPlanCommand
 */
export const se_CreateSavingsPlanCommand = async (
  input: CreateSavingsPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CreateSavingsPlan");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      commitment: [],
      purchaseTime: (_) => _.getTime() / 1_000,
      savingsPlanOfferingId: [],
      tags: (_) => _json(_),
      upfrontPaymentAmount: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteQueuedSavingsPlanCommand
 */
export const se_DeleteQueuedSavingsPlanCommand = async (
  input: DeleteQueuedSavingsPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DeleteQueuedSavingsPlan");
  let body: any;
  body = JSON.stringify(
    take(input, {
      savingsPlanId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeSavingsPlanRatesCommand
 */
export const se_DescribeSavingsPlanRatesCommand = async (
  input: DescribeSavingsPlanRatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DescribeSavingsPlanRates");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      savingsPlanId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeSavingsPlansCommand
 */
export const se_DescribeSavingsPlansCommand = async (
  input: DescribeSavingsPlansCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DescribeSavingsPlans");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      savingsPlanArns: (_) => _json(_),
      savingsPlanIds: (_) => _json(_),
      states: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeSavingsPlansOfferingRatesCommand
 */
export const se_DescribeSavingsPlansOfferingRatesCommand = async (
  input: DescribeSavingsPlansOfferingRatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DescribeSavingsPlansOfferingRates");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      operations: (_) => _json(_),
      products: (_) => _json(_),
      savingsPlanOfferingIds: (_) => _json(_),
      savingsPlanPaymentOptions: (_) => _json(_),
      savingsPlanTypes: (_) => _json(_),
      serviceCodes: (_) => _json(_),
      usageTypes: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeSavingsPlansOfferingsCommand
 */
export const se_DescribeSavingsPlansOfferingsCommand = async (
  input: DescribeSavingsPlansOfferingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DescribeSavingsPlansOfferings");
  let body: any;
  body = JSON.stringify(
    take(input, {
      currencies: (_) => _json(_),
      descriptions: (_) => _json(_),
      durations: (_) => _json(_),
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      offeringIds: (_) => _json(_),
      operations: (_) => _json(_),
      paymentOptions: (_) => _json(_),
      planTypes: (_) => _json(_),
      productType: [],
      serviceCodes: (_) => _json(_),
      usageTypes: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
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
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListTagsForResource");
  let body: any;
  body = JSON.stringify(
    take(input, {
      resourceArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ReturnSavingsPlanCommand
 */
export const se_ReturnSavingsPlanCommand = async (
  input: ReturnSavingsPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ReturnSavingsPlan");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      savingsPlanId: [],
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
  b.bp("/TagResource");
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
  b.bp("/UntagResource");
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
 * deserializeAws_restJson1CreateSavingsPlanCommand
 */
export const de_CreateSavingsPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSavingsPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    savingsPlanId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteQueuedSavingsPlanCommand
 */
export const de_DeleteQueuedSavingsPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQueuedSavingsPlanCommandOutput> => {
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
 * deserializeAws_restJson1DescribeSavingsPlanRatesCommand
 */
export const de_DescribeSavingsPlanRatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSavingsPlanRatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    savingsPlanId: __expectString,
    searchResults: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeSavingsPlansCommand
 */
export const de_DescribeSavingsPlansCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSavingsPlansCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    savingsPlans: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeSavingsPlansOfferingRatesCommand
 */
export const de_DescribeSavingsPlansOfferingRatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSavingsPlansOfferingRatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    searchResults: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeSavingsPlansOfferingsCommand
 */
export const de_DescribeSavingsPlansOfferingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSavingsPlansOfferingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    searchResults: _json,
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
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ReturnSavingsPlanCommand
 */
export const de_ReturnSavingsPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReturnSavingsPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    savingsPlanId: __expectString,
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
  await collectBody(output.body, context);
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
  await collectBody(output.body, context);
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
    case "InternalServerException":
    case "com.amazonaws.savingsplans#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.savingsplans#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.savingsplans#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.savingsplans#ValidationException":
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
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceQuotaExceededException({
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

// se_CurrencyList omitted.

// se_DurationsList omitted.

// se_FilterValuesList omitted.

// se_ListOfStrings omitted.

// se_SavingsPlanArnList omitted.

// se_SavingsPlanDescriptionsList omitted.

// se_SavingsPlanFilter omitted.

// se_SavingsPlanFilterList omitted.

// se_SavingsPlanIdList omitted.

// se_SavingsPlanOfferingFilterElement omitted.

// se_SavingsPlanOfferingFiltersList omitted.

// se_SavingsPlanOfferingRateFilterElement omitted.

// se_SavingsPlanOfferingRateFiltersList omitted.

// se_SavingsPlanOperationList omitted.

// se_SavingsPlanPaymentOptionList omitted.

// se_SavingsPlanProductTypeList omitted.

// se_SavingsPlanRateFilter omitted.

// se_SavingsPlanRateFilterList omitted.

// se_SavingsPlanRateOperationList omitted.

// se_SavingsPlanRateServiceCodeList omitted.

// se_SavingsPlanRateUsageTypeList omitted.

// se_SavingsPlanServiceCodeList omitted.

// se_SavingsPlanStateList omitted.

// se_SavingsPlanTypeList omitted.

// se_SavingsPlanUsageTypeList omitted.

// se_TagKeyList omitted.

// se_TagMap omitted.

// se_UUIDs omitted.

// de_ParentSavingsPlanOffering omitted.

// de_SavingsPlan omitted.

// de_SavingsPlanList omitted.

// de_SavingsPlanOffering omitted.

// de_SavingsPlanOfferingProperty omitted.

// de_SavingsPlanOfferingPropertyList omitted.

// de_SavingsPlanOfferingRate omitted.

// de_SavingsPlanOfferingRateProperty omitted.

// de_SavingsPlanOfferingRatePropertyList omitted.

// de_SavingsPlanOfferingRatesList omitted.

// de_SavingsPlanOfferingsList omitted.

// de_SavingsPlanProductTypeList omitted.

// de_SavingsPlanRate omitted.

// de_SavingsPlanRateList omitted.

// de_SavingsPlanRateProperty omitted.

// de_SavingsPlanRatePropertyList omitted.

// de_TagMap omitted.

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
