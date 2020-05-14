import { CreateSavingsPlanCommandInput, CreateSavingsPlanCommandOutput } from "../commands/CreateSavingsPlanCommand";
import {
  DescribeSavingsPlanRatesCommandInput,
  DescribeSavingsPlanRatesCommandOutput
} from "../commands/DescribeSavingsPlanRatesCommand";
import {
  DescribeSavingsPlansCommandInput,
  DescribeSavingsPlansCommandOutput
} from "../commands/DescribeSavingsPlansCommand";
import {
  DescribeSavingsPlansOfferingRatesCommandInput,
  DescribeSavingsPlansOfferingRatesCommandOutput
} from "../commands/DescribeSavingsPlansOfferingRatesCommand";
import {
  DescribeSavingsPlansOfferingsCommandInput,
  DescribeSavingsPlansOfferingsCommandOutput
} from "../commands/DescribeSavingsPlansOfferingsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
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
  ValidationException
} from "../models/index";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_restJson1_1DescribeSavingsPlansOfferingRatesCommand = async (
  input: DescribeSavingsPlansOfferingRatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/DescribeSavingsPlansOfferingRates";
  let body: any;
  body = JSON.stringify({
    ...(input.filters !== undefined && {
      filters: serializeAws_restJson1_1SavingsPlanOfferingRateFiltersList(input.filters, context)
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.operations !== undefined && {
      operations: serializeAws_restJson1_1SavingsPlanRateOperationList(input.operations, context)
    }),
    ...(input.products !== undefined && {
      products: serializeAws_restJson1_1SavingsPlanProductTypeList(input.products, context)
    }),
    ...(input.savingsPlanOfferingIds !== undefined && {
      savingsPlanOfferingIds: serializeAws_restJson1_1UUIDs(input.savingsPlanOfferingIds, context)
    }),
    ...(input.savingsPlanPaymentOptions !== undefined && {
      savingsPlanPaymentOptions: serializeAws_restJson1_1SavingsPlanPaymentOptionList(
        input.savingsPlanPaymentOptions,
        context
      )
    }),
    ...(input.savingsPlanTypes !== undefined && {
      savingsPlanTypes: serializeAws_restJson1_1SavingsPlanTypeList(input.savingsPlanTypes, context)
    }),
    ...(input.serviceCodes !== undefined && {
      serviceCodes: serializeAws_restJson1_1SavingsPlanRateServiceCodeList(input.serviceCodes, context)
    }),
    ...(input.usageTypes !== undefined && {
      usageTypes: serializeAws_restJson1_1SavingsPlanRateUsageTypeList(input.usageTypes, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DescribeSavingsPlansOfferingsCommand = async (
  input: DescribeSavingsPlansOfferingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/DescribeSavingsPlansOfferings";
  let body: any;
  body = JSON.stringify({
    ...(input.currencies !== undefined && {
      currencies: serializeAws_restJson1_1CurrencyList(input.currencies, context)
    }),
    ...(input.descriptions !== undefined && {
      descriptions: serializeAws_restJson1_1SavingsPlanDescriptionsList(input.descriptions, context)
    }),
    ...(input.durations !== undefined && {
      durations: serializeAws_restJson1_1DurationsList(input.durations, context)
    }),
    ...(input.filters !== undefined && {
      filters: serializeAws_restJson1_1SavingsPlanOfferingFiltersList(input.filters, context)
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.offeringIds !== undefined && {
      offeringIds: serializeAws_restJson1_1UUIDs(input.offeringIds, context)
    }),
    ...(input.operations !== undefined && {
      operations: serializeAws_restJson1_1SavingsPlanOperationList(input.operations, context)
    }),
    ...(input.paymentOptions !== undefined && {
      paymentOptions: serializeAws_restJson1_1SavingsPlanPaymentOptionList(input.paymentOptions, context)
    }),
    ...(input.planTypes !== undefined && {
      planTypes: serializeAws_restJson1_1SavingsPlanTypeList(input.planTypes, context)
    }),
    ...(input.productType !== undefined && { productType: input.productType }),
    ...(input.serviceCodes !== undefined && {
      serviceCodes: serializeAws_restJson1_1SavingsPlanServiceCodeList(input.serviceCodes, context)
    }),
    ...(input.usageTypes !== undefined && {
      usageTypes: serializeAws_restJson1_1SavingsPlanUsageTypeList(input.usageTypes, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1CreateSavingsPlanCommand = async (
  input: CreateSavingsPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/CreateSavingsPlan";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.commitment !== undefined && { commitment: input.commitment }),
    ...(input.savingsPlanOfferingId !== undefined && {
      savingsPlanOfferingId: input.savingsPlanOfferingId
    }),
    ...(input.tags !== undefined && {
      tags: serializeAws_restJson1_1TagMap(input.tags, context)
    }),
    ...(input.upfrontPaymentAmount !== undefined && {
      upfrontPaymentAmount: input.upfrontPaymentAmount
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DescribeSavingsPlanRatesCommand = async (
  input: DescribeSavingsPlanRatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/DescribeSavingsPlanRates";
  let body: any;
  body = JSON.stringify({
    ...(input.filters !== undefined && {
      filters: serializeAws_restJson1_1SavingsPlanRateFilterList(input.filters, context)
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.savingsPlanId !== undefined && {
      savingsPlanId: input.savingsPlanId
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DescribeSavingsPlansCommand = async (
  input: DescribeSavingsPlansCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/DescribeSavingsPlans";
  let body: any;
  body = JSON.stringify({
    ...(input.filters !== undefined && {
      filters: serializeAws_restJson1_1SavingsPlanFilterList(input.filters, context)
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.savingsPlanArns !== undefined && {
      savingsPlanArns: serializeAws_restJson1_1SavingsPlanArnList(input.savingsPlanArns, context)
    }),
    ...(input.savingsPlanIds !== undefined && {
      savingsPlanIds: serializeAws_restJson1_1SavingsPlanIdList(input.savingsPlanIds, context)
    }),
    ...(input.states !== undefined && {
      states: serializeAws_restJson1_1SavingsPlanStateList(input.states, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/ListTagsForResource";
  let body: any;
  body = JSON.stringify({
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/TagResource";
  let body: any;
  body = JSON.stringify({
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
    ...(input.tags !== undefined && {
      tags: serializeAws_restJson1_1TagMap(input.tags, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/UntagResource";
  let body: any;
  body = JSON.stringify({
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
    ...(input.tagKeys !== undefined && {
      tagKeys: serializeAws_restJson1_1TagKeyList(input.tagKeys, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const deserializeAws_restJson1_1DescribeSavingsPlansOfferingRatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSavingsPlansOfferingRatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeSavingsPlansOfferingRatesCommandError(output, context);
  }
  const contents: DescribeSavingsPlansOfferingRatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeSavingsPlansOfferingRatesResponse",
    nextToken: undefined,
    searchResults: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.searchResults !== undefined && data.searchResults !== null) {
    contents.searchResults = deserializeAws_restJson1_1SavingsPlanOfferingRatesList(data.searchResults, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DescribeSavingsPlansOfferingRatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSavingsPlansOfferingRatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.awssavingsplanservice.external#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.awssavingsplanservice.external#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
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
};

export const deserializeAws_restJson1_1DescribeSavingsPlansOfferingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSavingsPlansOfferingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeSavingsPlansOfferingsCommandError(output, context);
  }
  const contents: DescribeSavingsPlansOfferingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeSavingsPlansOfferingsResponse",
    nextToken: undefined,
    searchResults: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.searchResults !== undefined && data.searchResults !== null) {
    contents.searchResults = deserializeAws_restJson1_1SavingsPlanOfferingsList(data.searchResults, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DescribeSavingsPlansOfferingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSavingsPlansOfferingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.awssavingsplanservice.external#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.awssavingsplanservice.external#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
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
};

export const deserializeAws_restJson1_1CreateSavingsPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSavingsPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateSavingsPlanCommandError(output, context);
  }
  const contents: CreateSavingsPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateSavingsPlanResponse",
    savingsPlanId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.savingsPlanId !== undefined && data.savingsPlanId !== null) {
    contents.savingsPlanId = data.savingsPlanId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateSavingsPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSavingsPlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.awssavingsplanservice.external#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awssavingsplanservice.external#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.awssavingsplanservice.external#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.awssavingsplanservice.external#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
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
};

export const deserializeAws_restJson1_1DescribeSavingsPlanRatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSavingsPlanRatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeSavingsPlanRatesCommandError(output, context);
  }
  const contents: DescribeSavingsPlanRatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeSavingsPlanRatesResponse",
    nextToken: undefined,
    savingsPlanId: undefined,
    searchResults: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.savingsPlanId !== undefined && data.savingsPlanId !== null) {
    contents.savingsPlanId = data.savingsPlanId;
  }
  if (data.searchResults !== undefined && data.searchResults !== null) {
    contents.searchResults = deserializeAws_restJson1_1SavingsPlanRateList(data.searchResults, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DescribeSavingsPlanRatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSavingsPlanRatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.awssavingsplanservice.external#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.awssavingsplanservice.external#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
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
};

export const deserializeAws_restJson1_1DescribeSavingsPlansCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSavingsPlansCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeSavingsPlansCommandError(output, context);
  }
  const contents: DescribeSavingsPlansCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeSavingsPlansResponse",
    nextToken: undefined,
    savingsPlans: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.savingsPlans !== undefined && data.savingsPlans !== null) {
    contents.savingsPlans = deserializeAws_restJson1_1SavingsPlanList(data.savingsPlans, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DescribeSavingsPlansCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSavingsPlansCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.awssavingsplanservice.external#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.awssavingsplanservice.external#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
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
};

export const deserializeAws_restJson1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.awssavingsplanservice.external#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awssavingsplanservice.external#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.awssavingsplanservice.external#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
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
};

export const deserializeAws_restJson1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.awssavingsplanservice.external#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awssavingsplanservice.external#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.awssavingsplanservice.external#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.awssavingsplanservice.external#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
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
};

export const deserializeAws_restJson1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.awssavingsplanservice.external#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awssavingsplanservice.external#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.awssavingsplanservice.external#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
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
};

const deserializeAws_restJson1_1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: ServiceQuotaExceededException = {
    name: "ServiceQuotaExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1CurrencyList = (input: (CurrencyCode | string)[], context: __SerdeContext): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1DurationsList = (input: number[], context: __SerdeContext): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1FilterValuesList = (input: string[], context: __SerdeContext): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1SavingsPlanDescriptionsList = (input: string[], context: __SerdeContext): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1SavingsPlanOfferingFilterElement = (
  input: SavingsPlanOfferingFilterElement,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name }),
    ...(input.values !== undefined && {
      values: serializeAws_restJson1_1FilterValuesList(input.values, context)
    })
  };
};

const serializeAws_restJson1_1SavingsPlanOfferingFiltersList = (
  input: SavingsPlanOfferingFilterElement[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1_1SavingsPlanOfferingFilterElement(entry, context));
};

const serializeAws_restJson1_1SavingsPlanOfferingRateFilterElement = (
  input: SavingsPlanOfferingRateFilterElement,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name }),
    ...(input.values !== undefined && {
      values: serializeAws_restJson1_1FilterValuesList(input.values, context)
    })
  };
};

const serializeAws_restJson1_1SavingsPlanOfferingRateFiltersList = (
  input: SavingsPlanOfferingRateFilterElement[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1_1SavingsPlanOfferingRateFilterElement(entry, context));
};

const serializeAws_restJson1_1UUIDs = (input: string[], context: __SerdeContext): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1SavingsPlanOperationList = (input: string[], context: __SerdeContext): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1SavingsPlanPaymentOptionList = (
  input: (SavingsPlanPaymentOption | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1SavingsPlanProductTypeList = (
  input: (SavingsPlanProductType | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1SavingsPlanRateOperationList = (input: string[], context: __SerdeContext): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1SavingsPlanRateServiceCodeList = (
  input: (SavingsPlanRateServiceCode | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1SavingsPlanRateUsageTypeList = (input: string[], context: __SerdeContext): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1SavingsPlanServiceCodeList = (input: string[], context: __SerdeContext): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1SavingsPlanTypeList = (
  input: (SavingsPlanType | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1SavingsPlanUsageTypeList = (input: string[], context: __SerdeContext): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1ListOfStrings = (input: string[], context: __SerdeContext): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1SavingsPlanArnList = (input: string[], context: __SerdeContext): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1SavingsPlanFilter = (input: SavingsPlanFilter, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && { name: input.name }),
    ...(input.values !== undefined && {
      values: serializeAws_restJson1_1ListOfStrings(input.values, context)
    })
  };
};

const serializeAws_restJson1_1SavingsPlanFilterList = (input: SavingsPlanFilter[], context: __SerdeContext): any => {
  return input.map(entry => serializeAws_restJson1_1SavingsPlanFilter(entry, context));
};

const serializeAws_restJson1_1SavingsPlanIdList = (input: string[], context: __SerdeContext): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1SavingsPlanRateFilter = (input: SavingsPlanRateFilter, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && { name: input.name }),
    ...(input.values !== undefined && {
      values: serializeAws_restJson1_1ListOfStrings(input.values, context)
    })
  };
};

const serializeAws_restJson1_1SavingsPlanRateFilterList = (
  input: SavingsPlanRateFilter[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1_1SavingsPlanRateFilter(entry, context));
};

const serializeAws_restJson1_1SavingsPlanStateList = (
  input: (SavingsPlanState | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1TagMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_restJson1_1ParentSavingsPlanOffering = (
  output: any,
  context: __SerdeContext
): ParentSavingsPlanOffering => {
  return {
    __type: "ParentSavingsPlanOffering",
    currency: output.currency !== undefined && output.currency !== null ? output.currency : undefined,
    durationSeconds:
      output.durationSeconds !== undefined && output.durationSeconds !== null ? output.durationSeconds : undefined,
    offeringId: output.offeringId !== undefined && output.offeringId !== null ? output.offeringId : undefined,
    paymentOption:
      output.paymentOption !== undefined && output.paymentOption !== null ? output.paymentOption : undefined,
    planDescription:
      output.planDescription !== undefined && output.planDescription !== null ? output.planDescription : undefined,
    planType: output.planType !== undefined && output.planType !== null ? output.planType : undefined
  } as any;
};

const deserializeAws_restJson1_1SavingsPlanOffering = (output: any, context: __SerdeContext): SavingsPlanOffering => {
  return {
    __type: "SavingsPlanOffering",
    currency: output.currency !== undefined && output.currency !== null ? output.currency : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    durationSeconds:
      output.durationSeconds !== undefined && output.durationSeconds !== null ? output.durationSeconds : undefined,
    offeringId: output.offeringId !== undefined && output.offeringId !== null ? output.offeringId : undefined,
    operation: output.operation !== undefined && output.operation !== null ? output.operation : undefined,
    paymentOption:
      output.paymentOption !== undefined && output.paymentOption !== null ? output.paymentOption : undefined,
    planType: output.planType !== undefined && output.planType !== null ? output.planType : undefined,
    productTypes:
      output.productTypes !== undefined && output.productTypes !== null
        ? deserializeAws_restJson1_1SavingsPlanProductTypeList(output.productTypes, context)
        : undefined,
    properties:
      output.properties !== undefined && output.properties !== null
        ? deserializeAws_restJson1_1SavingsPlanOfferingPropertyList(output.properties, context)
        : undefined,
    serviceCode: output.serviceCode !== undefined && output.serviceCode !== null ? output.serviceCode : undefined,
    usageType: output.usageType !== undefined && output.usageType !== null ? output.usageType : undefined
  } as any;
};

const deserializeAws_restJson1_1SavingsPlanOfferingProperty = (
  output: any,
  context: __SerdeContext
): SavingsPlanOfferingProperty => {
  return {
    __type: "SavingsPlanOfferingProperty",
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined
  } as any;
};

const deserializeAws_restJson1_1SavingsPlanOfferingPropertyList = (
  output: any,
  context: __SerdeContext
): SavingsPlanOfferingProperty[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1_1SavingsPlanOfferingProperty(entry, context));
};

const deserializeAws_restJson1_1SavingsPlanOfferingRate = (
  output: any,
  context: __SerdeContext
): SavingsPlanOfferingRate => {
  return {
    __type: "SavingsPlanOfferingRate",
    operation: output.operation !== undefined && output.operation !== null ? output.operation : undefined,
    productType: output.productType !== undefined && output.productType !== null ? output.productType : undefined,
    properties:
      output.properties !== undefined && output.properties !== null
        ? deserializeAws_restJson1_1SavingsPlanOfferingRatePropertyList(output.properties, context)
        : undefined,
    rate: output.rate !== undefined && output.rate !== null ? output.rate : undefined,
    savingsPlanOffering:
      output.savingsPlanOffering !== undefined && output.savingsPlanOffering !== null
        ? deserializeAws_restJson1_1ParentSavingsPlanOffering(output.savingsPlanOffering, context)
        : undefined,
    serviceCode: output.serviceCode !== undefined && output.serviceCode !== null ? output.serviceCode : undefined,
    unit: output.unit !== undefined && output.unit !== null ? output.unit : undefined,
    usageType: output.usageType !== undefined && output.usageType !== null ? output.usageType : undefined
  } as any;
};

const deserializeAws_restJson1_1SavingsPlanOfferingRateProperty = (
  output: any,
  context: __SerdeContext
): SavingsPlanOfferingRateProperty => {
  return {
    __type: "SavingsPlanOfferingRateProperty",
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined
  } as any;
};

const deserializeAws_restJson1_1SavingsPlanOfferingRatePropertyList = (
  output: any,
  context: __SerdeContext
): SavingsPlanOfferingRateProperty[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1_1SavingsPlanOfferingRateProperty(entry, context));
};

const deserializeAws_restJson1_1SavingsPlanOfferingRatesList = (
  output: any,
  context: __SerdeContext
): SavingsPlanOfferingRate[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1_1SavingsPlanOfferingRate(entry, context));
};

const deserializeAws_restJson1_1SavingsPlanOfferingsList = (
  output: any,
  context: __SerdeContext
): SavingsPlanOffering[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1_1SavingsPlanOffering(entry, context));
};

const deserializeAws_restJson1_1SavingsPlanProductTypeList = (
  output: any,
  context: __SerdeContext
): (SavingsPlanProductType | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1SavingsPlanRateProperty = (
  output: any,
  context: __SerdeContext
): SavingsPlanRateProperty => {
  return {
    __type: "SavingsPlanRateProperty",
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined
  } as any;
};

const deserializeAws_restJson1_1SavingsPlanRatePropertyList = (
  output: any,
  context: __SerdeContext
): SavingsPlanRateProperty[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1_1SavingsPlanRateProperty(entry, context));
};

const deserializeAws_restJson1_1SavingsPlan = (output: any, context: __SerdeContext): SavingsPlan => {
  return {
    __type: "SavingsPlan",
    commitment: output.commitment !== undefined && output.commitment !== null ? output.commitment : undefined,
    currency: output.currency !== undefined && output.currency !== null ? output.currency : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    ec2InstanceFamily:
      output.ec2InstanceFamily !== undefined && output.ec2InstanceFamily !== null
        ? output.ec2InstanceFamily
        : undefined,
    end: output.end !== undefined && output.end !== null ? output.end : undefined,
    offeringId: output.offeringId !== undefined && output.offeringId !== null ? output.offeringId : undefined,
    paymentOption:
      output.paymentOption !== undefined && output.paymentOption !== null ? output.paymentOption : undefined,
    productTypes:
      output.productTypes !== undefined && output.productTypes !== null
        ? deserializeAws_restJson1_1SavingsPlanProductTypeList(output.productTypes, context)
        : undefined,
    recurringPaymentAmount:
      output.recurringPaymentAmount !== undefined && output.recurringPaymentAmount !== null
        ? output.recurringPaymentAmount
        : undefined,
    region: output.region !== undefined && output.region !== null ? output.region : undefined,
    savingsPlanArn:
      output.savingsPlanArn !== undefined && output.savingsPlanArn !== null ? output.savingsPlanArn : undefined,
    savingsPlanId:
      output.savingsPlanId !== undefined && output.savingsPlanId !== null ? output.savingsPlanId : undefined,
    savingsPlanType:
      output.savingsPlanType !== undefined && output.savingsPlanType !== null ? output.savingsPlanType : undefined,
    start: output.start !== undefined && output.start !== null ? output.start : undefined,
    state: output.state !== undefined && output.state !== null ? output.state : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1_1TagMap(output.tags, context)
        : undefined,
    termDurationInSeconds:
      output.termDurationInSeconds !== undefined && output.termDurationInSeconds !== null
        ? output.termDurationInSeconds
        : undefined,
    upfrontPaymentAmount:
      output.upfrontPaymentAmount !== undefined && output.upfrontPaymentAmount !== null
        ? output.upfrontPaymentAmount
        : undefined
  } as any;
};

const deserializeAws_restJson1_1SavingsPlanList = (output: any, context: __SerdeContext): SavingsPlan[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1_1SavingsPlan(entry, context));
};

const deserializeAws_restJson1_1SavingsPlanRate = (output: any, context: __SerdeContext): SavingsPlanRate => {
  return {
    __type: "SavingsPlanRate",
    currency: output.currency !== undefined && output.currency !== null ? output.currency : undefined,
    operation: output.operation !== undefined && output.operation !== null ? output.operation : undefined,
    productType: output.productType !== undefined && output.productType !== null ? output.productType : undefined,
    properties:
      output.properties !== undefined && output.properties !== null
        ? deserializeAws_restJson1_1SavingsPlanRatePropertyList(output.properties, context)
        : undefined,
    rate: output.rate !== undefined && output.rate !== null ? output.rate : undefined,
    serviceCode: output.serviceCode !== undefined && output.serviceCode !== null ? output.serviceCode : undefined,
    unit: output.unit !== undefined && output.unit !== null ? output.unit : undefined,
    usageType: output.usageType !== undefined && output.usageType !== null ? output.usageType : undefined
  } as any;
};

const deserializeAws_restJson1_1SavingsPlanRateList = (output: any, context: __SerdeContext): SavingsPlanRate[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1_1SavingsPlanRate(entry, context));
};

const deserializeAws_restJson1_1TagMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
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
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find(k => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
