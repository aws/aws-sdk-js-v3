// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  map as __map,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

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
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  CurrencyCode,
  InternalServerException,
  ParentSavingsPlanOffering,
  ResourceNotFoundException,
  SavingsPlan,
  SavingsPlanFilter,
  SavingsPlanOffering,
  SavingsPlanOfferingFilterElement,
  SavingsPlanOfferingProperty,
  SavingsPlanOfferingRate,
  SavingsPlanOfferingRateFilterElement,
  SavingsPlanOfferingRateProperty,
  SavingsPlanPaymentOption,
  SavingsPlanProductType,
  SavingsPlanRate,
  SavingsPlanRateFilter,
  SavingsPlanRateProperty,
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
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CreateSavingsPlan";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.commitment != null && { commitment: input.commitment }),
    ...(input.purchaseTime != null && { purchaseTime: Math.round(input.purchaseTime.getTime() / 1000) }),
    ...(input.savingsPlanOfferingId != null && { savingsPlanOfferingId: input.savingsPlanOfferingId }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
    ...(input.upfrontPaymentAmount != null && { upfrontPaymentAmount: input.upfrontPaymentAmount }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteQueuedSavingsPlanCommand
 */
export const se_DeleteQueuedSavingsPlanCommand = async (
  input: DeleteQueuedSavingsPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeleteQueuedSavingsPlan";
  let body: any;
  body = JSON.stringify({
    ...(input.savingsPlanId != null && { savingsPlanId: input.savingsPlanId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeSavingsPlanRatesCommand
 */
export const se_DescribeSavingsPlanRatesCommand = async (
  input: DescribeSavingsPlanRatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DescribeSavingsPlanRates";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_SavingsPlanRateFilterList(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.savingsPlanId != null && { savingsPlanId: input.savingsPlanId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeSavingsPlansCommand
 */
export const se_DescribeSavingsPlansCommand = async (
  input: DescribeSavingsPlansCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DescribeSavingsPlans";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_SavingsPlanFilterList(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.savingsPlanArns != null && { savingsPlanArns: se_SavingsPlanArnList(input.savingsPlanArns, context) }),
    ...(input.savingsPlanIds != null && { savingsPlanIds: se_SavingsPlanIdList(input.savingsPlanIds, context) }),
    ...(input.states != null && { states: se_SavingsPlanStateList(input.states, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeSavingsPlansOfferingRatesCommand
 */
export const se_DescribeSavingsPlansOfferingRatesCommand = async (
  input: DescribeSavingsPlansOfferingRatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DescribeSavingsPlansOfferingRates";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_SavingsPlanOfferingRateFiltersList(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.operations != null && { operations: se_SavingsPlanRateOperationList(input.operations, context) }),
    ...(input.products != null && { products: se_SavingsPlanProductTypeList(input.products, context) }),
    ...(input.savingsPlanOfferingIds != null && {
      savingsPlanOfferingIds: se_UUIDs(input.savingsPlanOfferingIds, context),
    }),
    ...(input.savingsPlanPaymentOptions != null && {
      savingsPlanPaymentOptions: se_SavingsPlanPaymentOptionList(input.savingsPlanPaymentOptions, context),
    }),
    ...(input.savingsPlanTypes != null && {
      savingsPlanTypes: se_SavingsPlanTypeList(input.savingsPlanTypes, context),
    }),
    ...(input.serviceCodes != null && { serviceCodes: se_SavingsPlanRateServiceCodeList(input.serviceCodes, context) }),
    ...(input.usageTypes != null && { usageTypes: se_SavingsPlanRateUsageTypeList(input.usageTypes, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeSavingsPlansOfferingsCommand
 */
export const se_DescribeSavingsPlansOfferingsCommand = async (
  input: DescribeSavingsPlansOfferingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DescribeSavingsPlansOfferings";
  let body: any;
  body = JSON.stringify({
    ...(input.currencies != null && { currencies: se_CurrencyList(input.currencies, context) }),
    ...(input.descriptions != null && { descriptions: se_SavingsPlanDescriptionsList(input.descriptions, context) }),
    ...(input.durations != null && { durations: se_DurationsList(input.durations, context) }),
    ...(input.filters != null && { filters: se_SavingsPlanOfferingFiltersList(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.offeringIds != null && { offeringIds: se_UUIDs(input.offeringIds, context) }),
    ...(input.operations != null && { operations: se_SavingsPlanOperationList(input.operations, context) }),
    ...(input.paymentOptions != null && {
      paymentOptions: se_SavingsPlanPaymentOptionList(input.paymentOptions, context),
    }),
    ...(input.planTypes != null && { planTypes: se_SavingsPlanTypeList(input.planTypes, context) }),
    ...(input.productType != null && { productType: input.productType }),
    ...(input.serviceCodes != null && { serviceCodes: se_SavingsPlanServiceCodeList(input.serviceCodes, context) }),
    ...(input.usageTypes != null && { usageTypes: se_SavingsPlanUsageTypeList(input.usageTypes, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListTagsForResource";
  let body: any;
  body = JSON.stringify({
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/TagResource";
  let body: any;
  body = JSON.stringify({
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UntagResource";
  let body: any;
  body = JSON.stringify({
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tagKeys != null && { tagKeys: se_TagKeyList(input.tagKeys, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1CreateSavingsPlanCommand
 */
export const de_CreateSavingsPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSavingsPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateSavingsPlanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.savingsPlanId != null) {
    contents.savingsPlanId = __expectString(data.savingsPlanId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateSavingsPlanCommandError
 */
const de_CreateSavingsPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSavingsPlanCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteQueuedSavingsPlanCommand
 */
export const de_DeleteQueuedSavingsPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQueuedSavingsPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteQueuedSavingsPlanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteQueuedSavingsPlanCommandError
 */
const de_DeleteQueuedSavingsPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQueuedSavingsPlanCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeSavingsPlanRatesCommand
 */
export const de_DescribeSavingsPlanRatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSavingsPlanRatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeSavingsPlanRatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.savingsPlanId != null) {
    contents.savingsPlanId = __expectString(data.savingsPlanId);
  }
  if (data.searchResults != null) {
    contents.searchResults = de_SavingsPlanRateList(data.searchResults, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeSavingsPlanRatesCommandError
 */
const de_DescribeSavingsPlanRatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSavingsPlanRatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.savingsplans#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.savingsplans#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeSavingsPlansCommand
 */
export const de_DescribeSavingsPlansCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSavingsPlansCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeSavingsPlansCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.savingsPlans != null) {
    contents.savingsPlans = de_SavingsPlanList(data.savingsPlans, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeSavingsPlansCommandError
 */
const de_DescribeSavingsPlansCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSavingsPlansCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.savingsplans#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.savingsplans#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeSavingsPlansOfferingRatesCommand
 */
export const de_DescribeSavingsPlansOfferingRatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSavingsPlansOfferingRatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeSavingsPlansOfferingRatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.searchResults != null) {
    contents.searchResults = de_SavingsPlanOfferingRatesList(data.searchResults, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeSavingsPlansOfferingRatesCommandError
 */
const de_DescribeSavingsPlansOfferingRatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSavingsPlansOfferingRatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.savingsplans#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.savingsplans#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeSavingsPlansOfferingsCommand
 */
export const de_DescribeSavingsPlansOfferingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSavingsPlansOfferingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeSavingsPlansOfferingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.searchResults != null) {
    contents.searchResults = de_SavingsPlanOfferingsList(data.searchResults, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeSavingsPlansOfferingsCommandError
 */
const de_DescribeSavingsPlansOfferingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSavingsPlansOfferingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.savingsplans#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.savingsplans#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
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
    case "ValidationException":
    case "com.amazonaws.savingsplans#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
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
    case "ValidationException":
    case "com.amazonaws.savingsplans#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

const map = __map;
/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1CurrencyList
 */
const se_CurrencyList = (input: (CurrencyCode | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1DurationsList
 */
const se_DurationsList = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1FilterValuesList
 */
const se_FilterValuesList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ListOfStrings
 */
const se_ListOfStrings = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SavingsPlanArnList
 */
const se_SavingsPlanArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SavingsPlanDescriptionsList
 */
const se_SavingsPlanDescriptionsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SavingsPlanFilter
 */
const se_SavingsPlanFilter = (input: SavingsPlanFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.values != null && { values: se_ListOfStrings(input.values, context) }),
  };
};

/**
 * serializeAws_restJson1SavingsPlanFilterList
 */
const se_SavingsPlanFilterList = (input: SavingsPlanFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SavingsPlanFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1SavingsPlanIdList
 */
const se_SavingsPlanIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SavingsPlanOfferingFilterElement
 */
const se_SavingsPlanOfferingFilterElement = (input: SavingsPlanOfferingFilterElement, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.values != null && { values: se_FilterValuesList(input.values, context) }),
  };
};

/**
 * serializeAws_restJson1SavingsPlanOfferingFiltersList
 */
const se_SavingsPlanOfferingFiltersList = (input: SavingsPlanOfferingFilterElement[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SavingsPlanOfferingFilterElement(entry, context);
    });
};

/**
 * serializeAws_restJson1SavingsPlanOfferingRateFilterElement
 */
const se_SavingsPlanOfferingRateFilterElement = (
  input: SavingsPlanOfferingRateFilterElement,
  context: __SerdeContext
): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.values != null && { values: se_FilterValuesList(input.values, context) }),
  };
};

/**
 * serializeAws_restJson1SavingsPlanOfferingRateFiltersList
 */
const se_SavingsPlanOfferingRateFiltersList = (
  input: SavingsPlanOfferingRateFilterElement[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SavingsPlanOfferingRateFilterElement(entry, context);
    });
};

/**
 * serializeAws_restJson1SavingsPlanOperationList
 */
const se_SavingsPlanOperationList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SavingsPlanPaymentOptionList
 */
const se_SavingsPlanPaymentOptionList = (
  input: (SavingsPlanPaymentOption | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SavingsPlanProductTypeList
 */
const se_SavingsPlanProductTypeList = (input: (SavingsPlanProductType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SavingsPlanRateFilter
 */
const se_SavingsPlanRateFilter = (input: SavingsPlanRateFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.values != null && { values: se_ListOfStrings(input.values, context) }),
  };
};

/**
 * serializeAws_restJson1SavingsPlanRateFilterList
 */
const se_SavingsPlanRateFilterList = (input: SavingsPlanRateFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SavingsPlanRateFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1SavingsPlanRateOperationList
 */
const se_SavingsPlanRateOperationList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SavingsPlanRateServiceCodeList
 */
const se_SavingsPlanRateServiceCodeList = (
  input: (SavingsPlanRateServiceCode | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SavingsPlanRateUsageTypeList
 */
const se_SavingsPlanRateUsageTypeList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SavingsPlanServiceCodeList
 */
const se_SavingsPlanServiceCodeList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SavingsPlanStateList
 */
const se_SavingsPlanStateList = (input: (SavingsPlanState | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SavingsPlanTypeList
 */
const se_SavingsPlanTypeList = (input: (SavingsPlanType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SavingsPlanUsageTypeList
 */
const se_SavingsPlanUsageTypeList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1TagMap
 */
const se_TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1UUIDs
 */
const se_UUIDs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * deserializeAws_restJson1ParentSavingsPlanOffering
 */
const de_ParentSavingsPlanOffering = (output: any, context: __SerdeContext): ParentSavingsPlanOffering => {
  return {
    currency: __expectString(output.currency),
    durationSeconds: __expectLong(output.durationSeconds),
    offeringId: __expectString(output.offeringId),
    paymentOption: __expectString(output.paymentOption),
    planDescription: __expectString(output.planDescription),
    planType: __expectString(output.planType),
  } as any;
};

/**
 * deserializeAws_restJson1SavingsPlan
 */
const de_SavingsPlan = (output: any, context: __SerdeContext): SavingsPlan => {
  return {
    commitment: __expectString(output.commitment),
    currency: __expectString(output.currency),
    description: __expectString(output.description),
    ec2InstanceFamily: __expectString(output.ec2InstanceFamily),
    end: __expectString(output.end),
    offeringId: __expectString(output.offeringId),
    paymentOption: __expectString(output.paymentOption),
    productTypes: output.productTypes != null ? de_SavingsPlanProductTypeList(output.productTypes, context) : undefined,
    recurringPaymentAmount: __expectString(output.recurringPaymentAmount),
    region: __expectString(output.region),
    savingsPlanArn: __expectString(output.savingsPlanArn),
    savingsPlanId: __expectString(output.savingsPlanId),
    savingsPlanType: __expectString(output.savingsPlanType),
    start: __expectString(output.start),
    state: __expectString(output.state),
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
    termDurationInSeconds: __expectLong(output.termDurationInSeconds),
    upfrontPaymentAmount: __expectString(output.upfrontPaymentAmount),
  } as any;
};

/**
 * deserializeAws_restJson1SavingsPlanList
 */
const de_SavingsPlanList = (output: any, context: __SerdeContext): SavingsPlan[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SavingsPlan(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SavingsPlanOffering
 */
const de_SavingsPlanOffering = (output: any, context: __SerdeContext): SavingsPlanOffering => {
  return {
    currency: __expectString(output.currency),
    description: __expectString(output.description),
    durationSeconds: __expectLong(output.durationSeconds),
    offeringId: __expectString(output.offeringId),
    operation: __expectString(output.operation),
    paymentOption: __expectString(output.paymentOption),
    planType: __expectString(output.planType),
    productTypes: output.productTypes != null ? de_SavingsPlanProductTypeList(output.productTypes, context) : undefined,
    properties: output.properties != null ? de_SavingsPlanOfferingPropertyList(output.properties, context) : undefined,
    serviceCode: __expectString(output.serviceCode),
    usageType: __expectString(output.usageType),
  } as any;
};

/**
 * deserializeAws_restJson1SavingsPlanOfferingProperty
 */
const de_SavingsPlanOfferingProperty = (output: any, context: __SerdeContext): SavingsPlanOfferingProperty => {
  return {
    name: __expectString(output.name),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1SavingsPlanOfferingPropertyList
 */
const de_SavingsPlanOfferingPropertyList = (output: any, context: __SerdeContext): SavingsPlanOfferingProperty[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SavingsPlanOfferingProperty(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SavingsPlanOfferingRate
 */
const de_SavingsPlanOfferingRate = (output: any, context: __SerdeContext): SavingsPlanOfferingRate => {
  return {
    operation: __expectString(output.operation),
    productType: __expectString(output.productType),
    properties:
      output.properties != null ? de_SavingsPlanOfferingRatePropertyList(output.properties, context) : undefined,
    rate: __expectString(output.rate),
    savingsPlanOffering:
      output.savingsPlanOffering != null
        ? de_ParentSavingsPlanOffering(output.savingsPlanOffering, context)
        : undefined,
    serviceCode: __expectString(output.serviceCode),
    unit: __expectString(output.unit),
    usageType: __expectString(output.usageType),
  } as any;
};

/**
 * deserializeAws_restJson1SavingsPlanOfferingRateProperty
 */
const de_SavingsPlanOfferingRateProperty = (output: any, context: __SerdeContext): SavingsPlanOfferingRateProperty => {
  return {
    name: __expectString(output.name),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1SavingsPlanOfferingRatePropertyList
 */
const de_SavingsPlanOfferingRatePropertyList = (
  output: any,
  context: __SerdeContext
): SavingsPlanOfferingRateProperty[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SavingsPlanOfferingRateProperty(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SavingsPlanOfferingRatesList
 */
const de_SavingsPlanOfferingRatesList = (output: any, context: __SerdeContext): SavingsPlanOfferingRate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SavingsPlanOfferingRate(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SavingsPlanOfferingsList
 */
const de_SavingsPlanOfferingsList = (output: any, context: __SerdeContext): SavingsPlanOffering[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SavingsPlanOffering(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SavingsPlanProductTypeList
 */
const de_SavingsPlanProductTypeList = (output: any, context: __SerdeContext): (SavingsPlanProductType | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SavingsPlanRate
 */
const de_SavingsPlanRate = (output: any, context: __SerdeContext): SavingsPlanRate => {
  return {
    currency: __expectString(output.currency),
    operation: __expectString(output.operation),
    productType: __expectString(output.productType),
    properties: output.properties != null ? de_SavingsPlanRatePropertyList(output.properties, context) : undefined,
    rate: __expectString(output.rate),
    serviceCode: __expectString(output.serviceCode),
    unit: __expectString(output.unit),
    usageType: __expectString(output.usageType),
  } as any;
};

/**
 * deserializeAws_restJson1SavingsPlanRateList
 */
const de_SavingsPlanRateList = (output: any, context: __SerdeContext): SavingsPlanRate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SavingsPlanRate(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SavingsPlanRateProperty
 */
const de_SavingsPlanRateProperty = (output: any, context: __SerdeContext): SavingsPlanRateProperty => {
  return {
    name: __expectString(output.name),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1SavingsPlanRatePropertyList
 */
const de_SavingsPlanRatePropertyList = (output: any, context: __SerdeContext): SavingsPlanRateProperty[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SavingsPlanRateProperty(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TagMap
 */
const de_TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

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
