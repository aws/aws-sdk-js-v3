import {
  CreateSavingsPlanCommandInput,
  CreateSavingsPlanCommandOutput
} from "../commands/CreateSavingsPlanCommand";
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
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
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
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

export async function serializeAws_restJson1_1DescribeSavingsPlansOfferingRatesCommand(
  input: DescribeSavingsPlansOfferingRatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/DescribeSavingsPlansOfferingRates";
  let body: any;
  const bodyParams: any = {};
  if (input.filters !== undefined) {
    bodyParams[
      "filters"
    ] = serializeAws_restJson1_1SavingsPlanOfferingRateFiltersList(
      input.filters,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.operations !== undefined) {
    bodyParams[
      "operations"
    ] = serializeAws_restJson1_1SavingsPlanRateOperationList(
      input.operations,
      context
    );
  }
  if (input.products !== undefined) {
    bodyParams["products"] = serializeAws_restJson1_1SavingsPlanProductTypeList(
      input.products,
      context
    );
  }
  if (input.savingsPlanOfferingIds !== undefined) {
    bodyParams["savingsPlanOfferingIds"] = serializeAws_restJson1_1UUIDs(
      input.savingsPlanOfferingIds,
      context
    );
  }
  if (input.savingsPlanPaymentOptions !== undefined) {
    bodyParams[
      "savingsPlanPaymentOptions"
    ] = serializeAws_restJson1_1SavingsPlanPaymentOptionList(
      input.savingsPlanPaymentOptions,
      context
    );
  }
  if (input.savingsPlanTypes !== undefined) {
    bodyParams[
      "savingsPlanTypes"
    ] = serializeAws_restJson1_1SavingsPlanTypeList(
      input.savingsPlanTypes,
      context
    );
  }
  if (input.serviceCodes !== undefined) {
    bodyParams[
      "serviceCodes"
    ] = serializeAws_restJson1_1SavingsPlanRateServiceCodeList(
      input.serviceCodes,
      context
    );
  }
  if (input.usageTypes !== undefined) {
    bodyParams[
      "usageTypes"
    ] = serializeAws_restJson1_1SavingsPlanRateUsageTypeList(
      input.usageTypes,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DescribeSavingsPlansOfferingsCommand(
  input: DescribeSavingsPlansOfferingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/DescribeSavingsPlansOfferings";
  let body: any;
  const bodyParams: any = {};
  if (input.currencies !== undefined) {
    bodyParams["currencies"] = serializeAws_restJson1_1CurrencyList(
      input.currencies,
      context
    );
  }
  if (input.descriptions !== undefined) {
    bodyParams[
      "descriptions"
    ] = serializeAws_restJson1_1SavingsPlanDescriptionsList(
      input.descriptions,
      context
    );
  }
  if (input.durations !== undefined) {
    bodyParams["durations"] = serializeAws_restJson1_1DurationsList(
      input.durations,
      context
    );
  }
  if (input.filters !== undefined) {
    bodyParams[
      "filters"
    ] = serializeAws_restJson1_1SavingsPlanOfferingFiltersList(
      input.filters,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.offeringIds !== undefined) {
    bodyParams["offeringIds"] = serializeAws_restJson1_1UUIDs(
      input.offeringIds,
      context
    );
  }
  if (input.operations !== undefined) {
    bodyParams["operations"] = serializeAws_restJson1_1SavingsPlanOperationList(
      input.operations,
      context
    );
  }
  if (input.paymentOptions !== undefined) {
    bodyParams[
      "paymentOptions"
    ] = serializeAws_restJson1_1SavingsPlanPaymentOptionList(
      input.paymentOptions,
      context
    );
  }
  if (input.planTypes !== undefined) {
    bodyParams["planTypes"] = serializeAws_restJson1_1SavingsPlanTypeList(
      input.planTypes,
      context
    );
  }
  if (input.productType !== undefined) {
    bodyParams["productType"] = input.productType;
  }
  if (input.serviceCodes !== undefined) {
    bodyParams[
      "serviceCodes"
    ] = serializeAws_restJson1_1SavingsPlanServiceCodeList(
      input.serviceCodes,
      context
    );
  }
  if (input.usageTypes !== undefined) {
    bodyParams["usageTypes"] = serializeAws_restJson1_1SavingsPlanUsageTypeList(
      input.usageTypes,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateSavingsPlanCommand(
  input: CreateSavingsPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/CreateSavingsPlan";
  let body: any;
  const bodyParams: any = {};
  if (input.clientToken === undefined) {
    input.clientToken = generateIdempotencyToken();
  }
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.commitment !== undefined) {
    bodyParams["commitment"] = input.commitment;
  }
  if (input.savingsPlanOfferingId !== undefined) {
    bodyParams["savingsPlanOfferingId"] = input.savingsPlanOfferingId;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagMap(input.tags, context);
  }
  if (input.upfrontPaymentAmount !== undefined) {
    bodyParams["upfrontPaymentAmount"] = input.upfrontPaymentAmount;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DescribeSavingsPlanRatesCommand(
  input: DescribeSavingsPlanRatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/DescribeSavingsPlanRates";
  let body: any;
  const bodyParams: any = {};
  if (input.filters !== undefined) {
    bodyParams["filters"] = serializeAws_restJson1_1SavingsPlanRateFilterList(
      input.filters,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.savingsPlanId !== undefined) {
    bodyParams["savingsPlanId"] = input.savingsPlanId;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DescribeSavingsPlansCommand(
  input: DescribeSavingsPlansCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/DescribeSavingsPlans";
  let body: any;
  const bodyParams: any = {};
  if (input.filters !== undefined) {
    bodyParams["filters"] = serializeAws_restJson1_1SavingsPlanFilterList(
      input.filters,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.savingsPlanArns !== undefined) {
    bodyParams["savingsPlanArns"] = serializeAws_restJson1_1SavingsPlanArnList(
      input.savingsPlanArns,
      context
    );
  }
  if (input.savingsPlanIds !== undefined) {
    bodyParams["savingsPlanIds"] = serializeAws_restJson1_1SavingsPlanIdList(
      input.savingsPlanIds,
      context
    );
  }
  if (input.states !== undefined) {
    bodyParams["states"] = serializeAws_restJson1_1SavingsPlanStateList(
      input.states,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/ListTagsForResource";
  let body: any;
  const bodyParams: any = {};
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/TagResource";
  let body: any;
  const bodyParams: any = {};
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagMap(input.tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/UntagResource";
  let body: any;
  const bodyParams: any = {};
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  if (input.tagKeys !== undefined) {
    bodyParams["tagKeys"] = serializeAws_restJson1_1TagKeyList(
      input.tagKeys,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1DescribeSavingsPlansOfferingRatesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSavingsPlansOfferingRatesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeSavingsPlansOfferingRatesCommandError(
      output,
      context
    );
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
    contents.searchResults = deserializeAws_restJson1_1SavingsPlanOfferingRatesList(
      data.searchResults,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeSavingsPlansOfferingRatesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSavingsPlansOfferingRatesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.awssavingsplanservice.external#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.awssavingsplanservice.external#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1DescribeSavingsPlansOfferingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSavingsPlansOfferingsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeSavingsPlansOfferingsCommandError(
      output,
      context
    );
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
    contents.searchResults = deserializeAws_restJson1_1SavingsPlanOfferingsList(
      data.searchResults,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeSavingsPlansOfferingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSavingsPlansOfferingsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.awssavingsplanservice.external#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.awssavingsplanservice.external#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1CreateSavingsPlanCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSavingsPlanCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateSavingsPlanCommandError(
      output,
      context
    );
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
}

async function deserializeAws_restJson1_1CreateSavingsPlanCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSavingsPlanCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.awssavingsplanservice.external#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awssavingsplanservice.external#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.awssavingsplanservice.external#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.awssavingsplanservice.external#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1DescribeSavingsPlanRatesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSavingsPlanRatesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeSavingsPlanRatesCommandError(
      output,
      context
    );
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
    contents.searchResults = deserializeAws_restJson1_1SavingsPlanRateList(
      data.searchResults,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeSavingsPlanRatesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSavingsPlanRatesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.awssavingsplanservice.external#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.awssavingsplanservice.external#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1DescribeSavingsPlansCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSavingsPlansCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeSavingsPlansCommandError(
      output,
      context
    );
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
    contents.savingsPlans = deserializeAws_restJson1_1SavingsPlanList(
      data.savingsPlans,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeSavingsPlansCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSavingsPlansCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.awssavingsplanservice.external#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.awssavingsplanservice.external#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListTagsForResourceCommandError(
      output,
      context
    );
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
}

async function deserializeAws_restJson1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.awssavingsplanservice.external#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awssavingsplanservice.external#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.awssavingsplanservice.external#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.awssavingsplanservice.external#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awssavingsplanservice.external#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.awssavingsplanservice.external#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.awssavingsplanservice.external#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.awssavingsplanservice.external#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awssavingsplanservice.external#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.awssavingsplanservice.external#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

const deserializeAws_restJson1_1InternalServerExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: ServiceQuotaExceededException = {
    name: "ServiceQuotaExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ValidationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1CurrencyList = (
  input: Array<CurrencyCode | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1DurationsList = (
  input: Array<number>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1FilterValuesList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1SavingsPlanDescriptionsList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1SavingsPlanOfferingFilterElement = (
  input: SavingsPlanOfferingFilterElement,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.values !== undefined) {
    bodyParams["values"] = serializeAws_restJson1_1FilterValuesList(
      input.values,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1SavingsPlanOfferingFiltersList = (
  input: Array<SavingsPlanOfferingFilterElement>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_restJson1_1SavingsPlanOfferingFilterElement(entry, context)
    );
  }
  return contents;
};

const serializeAws_restJson1_1SavingsPlanOfferingRateFilterElement = (
  input: SavingsPlanOfferingRateFilterElement,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.values !== undefined) {
    bodyParams["values"] = serializeAws_restJson1_1FilterValuesList(
      input.values,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1SavingsPlanOfferingRateFiltersList = (
  input: Array<SavingsPlanOfferingRateFilterElement>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_restJson1_1SavingsPlanOfferingRateFilterElement(
        entry,
        context
      )
    );
  }
  return contents;
};

const serializeAws_restJson1_1UUIDs = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1SavingsPlanOperationList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1SavingsPlanPaymentOptionList = (
  input: Array<SavingsPlanPaymentOption | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1SavingsPlanProductTypeList = (
  input: Array<SavingsPlanProductType | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1SavingsPlanRateOperationList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1SavingsPlanRateServiceCodeList = (
  input: Array<SavingsPlanRateServiceCode | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1SavingsPlanRateUsageTypeList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1SavingsPlanServiceCodeList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1SavingsPlanTypeList = (
  input: Array<SavingsPlanType | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1SavingsPlanUsageTypeList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1ListOfStrings = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1SavingsPlanArnList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1SavingsPlanFilter = (
  input: SavingsPlanFilter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.values !== undefined) {
    bodyParams["values"] = serializeAws_restJson1_1ListOfStrings(
      input.values,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1SavingsPlanFilterList = (
  input: Array<SavingsPlanFilter>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1SavingsPlanFilter(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1SavingsPlanIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1SavingsPlanRateFilter = (
  input: SavingsPlanRateFilter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.values !== undefined) {
    bodyParams["values"] = serializeAws_restJson1_1ListOfStrings(
      input.values,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1SavingsPlanRateFilterList = (
  input: Array<SavingsPlanRateFilter>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_restJson1_1SavingsPlanRateFilter(entry, context)
    );
  }
  return contents;
};

const serializeAws_restJson1_1SavingsPlanStateList = (
  input: Array<SavingsPlanState | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1TagKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1TagMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1ParentSavingsPlanOffering = (
  output: any,
  context: __SerdeContext
): ParentSavingsPlanOffering => {
  let contents: any = {
    __type: "ParentSavingsPlanOffering",
    currency: undefined,
    durationSeconds: undefined,
    offeringId: undefined,
    paymentOption: undefined,
    planDescription: undefined,
    planType: undefined
  };
  if (output.currency !== undefined && output.currency !== null) {
    contents.currency = output.currency;
  }
  if (output.durationSeconds !== undefined && output.durationSeconds !== null) {
    contents.durationSeconds = output.durationSeconds;
  }
  if (output.offeringId !== undefined && output.offeringId !== null) {
    contents.offeringId = output.offeringId;
  }
  if (output.paymentOption !== undefined && output.paymentOption !== null) {
    contents.paymentOption = output.paymentOption;
  }
  if (output.planDescription !== undefined && output.planDescription !== null) {
    contents.planDescription = output.planDescription;
  }
  if (output.planType !== undefined && output.planType !== null) {
    contents.planType = output.planType;
  }
  return contents;
};

const deserializeAws_restJson1_1SavingsPlanOffering = (
  output: any,
  context: __SerdeContext
): SavingsPlanOffering => {
  let contents: any = {
    __type: "SavingsPlanOffering",
    currency: undefined,
    description: undefined,
    durationSeconds: undefined,
    offeringId: undefined,
    operation: undefined,
    paymentOption: undefined,
    planType: undefined,
    productTypes: undefined,
    properties: undefined,
    serviceCode: undefined,
    usageType: undefined
  };
  if (output.currency !== undefined && output.currency !== null) {
    contents.currency = output.currency;
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.durationSeconds !== undefined && output.durationSeconds !== null) {
    contents.durationSeconds = output.durationSeconds;
  }
  if (output.offeringId !== undefined && output.offeringId !== null) {
    contents.offeringId = output.offeringId;
  }
  if (output.operation !== undefined && output.operation !== null) {
    contents.operation = output.operation;
  }
  if (output.paymentOption !== undefined && output.paymentOption !== null) {
    contents.paymentOption = output.paymentOption;
  }
  if (output.planType !== undefined && output.planType !== null) {
    contents.planType = output.planType;
  }
  if (output.productTypes !== undefined && output.productTypes !== null) {
    contents.productTypes = deserializeAws_restJson1_1SavingsPlanProductTypeList(
      output.productTypes,
      context
    );
  }
  if (output.properties !== undefined && output.properties !== null) {
    contents.properties = deserializeAws_restJson1_1SavingsPlanOfferingPropertyList(
      output.properties,
      context
    );
  }
  if (output.serviceCode !== undefined && output.serviceCode !== null) {
    contents.serviceCode = output.serviceCode;
  }
  if (output.usageType !== undefined && output.usageType !== null) {
    contents.usageType = output.usageType;
  }
  return contents;
};

const deserializeAws_restJson1_1SavingsPlanOfferingProperty = (
  output: any,
  context: __SerdeContext
): SavingsPlanOfferingProperty => {
  let contents: any = {
    __type: "SavingsPlanOfferingProperty",
    name: undefined,
    value: undefined
  };
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.value !== undefined && output.value !== null) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_restJson1_1SavingsPlanOfferingPropertyList = (
  output: any,
  context: __SerdeContext
): Array<SavingsPlanOfferingProperty> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1SavingsPlanOfferingProperty(entry, context)
  );
};

const deserializeAws_restJson1_1SavingsPlanOfferingRate = (
  output: any,
  context: __SerdeContext
): SavingsPlanOfferingRate => {
  let contents: any = {
    __type: "SavingsPlanOfferingRate",
    operation: undefined,
    productType: undefined,
    properties: undefined,
    rate: undefined,
    savingsPlanOffering: undefined,
    serviceCode: undefined,
    unit: undefined,
    usageType: undefined
  };
  if (output.operation !== undefined && output.operation !== null) {
    contents.operation = output.operation;
  }
  if (output.productType !== undefined && output.productType !== null) {
    contents.productType = output.productType;
  }
  if (output.properties !== undefined && output.properties !== null) {
    contents.properties = deserializeAws_restJson1_1SavingsPlanOfferingRatePropertyList(
      output.properties,
      context
    );
  }
  if (output.rate !== undefined && output.rate !== null) {
    contents.rate = output.rate;
  }
  if (
    output.savingsPlanOffering !== undefined &&
    output.savingsPlanOffering !== null
  ) {
    contents.savingsPlanOffering = deserializeAws_restJson1_1ParentSavingsPlanOffering(
      output.savingsPlanOffering,
      context
    );
  }
  if (output.serviceCode !== undefined && output.serviceCode !== null) {
    contents.serviceCode = output.serviceCode;
  }
  if (output.unit !== undefined && output.unit !== null) {
    contents.unit = output.unit;
  }
  if (output.usageType !== undefined && output.usageType !== null) {
    contents.usageType = output.usageType;
  }
  return contents;
};

const deserializeAws_restJson1_1SavingsPlanOfferingRateProperty = (
  output: any,
  context: __SerdeContext
): SavingsPlanOfferingRateProperty => {
  let contents: any = {
    __type: "SavingsPlanOfferingRateProperty",
    name: undefined,
    value: undefined
  };
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.value !== undefined && output.value !== null) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_restJson1_1SavingsPlanOfferingRatePropertyList = (
  output: any,
  context: __SerdeContext
): Array<SavingsPlanOfferingRateProperty> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1SavingsPlanOfferingRateProperty(entry, context)
  );
};

const deserializeAws_restJson1_1SavingsPlanOfferingRatesList = (
  output: any,
  context: __SerdeContext
): Array<SavingsPlanOfferingRate> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1SavingsPlanOfferingRate(entry, context)
  );
};

const deserializeAws_restJson1_1SavingsPlanOfferingsList = (
  output: any,
  context: __SerdeContext
): Array<SavingsPlanOffering> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1SavingsPlanOffering(entry, context)
  );
};

const deserializeAws_restJson1_1SavingsPlanProductTypeList = (
  output: any,
  context: __SerdeContext
): Array<SavingsPlanProductType | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1SavingsPlanRateProperty = (
  output: any,
  context: __SerdeContext
): SavingsPlanRateProperty => {
  let contents: any = {
    __type: "SavingsPlanRateProperty",
    name: undefined,
    value: undefined
  };
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.value !== undefined && output.value !== null) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_restJson1_1SavingsPlanRatePropertyList = (
  output: any,
  context: __SerdeContext
): Array<SavingsPlanRateProperty> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1SavingsPlanRateProperty(entry, context)
  );
};

const deserializeAws_restJson1_1SavingsPlan = (
  output: any,
  context: __SerdeContext
): SavingsPlan => {
  let contents: any = {
    __type: "SavingsPlan",
    commitment: undefined,
    currency: undefined,
    description: undefined,
    ec2InstanceFamily: undefined,
    end: undefined,
    offeringId: undefined,
    paymentOption: undefined,
    productTypes: undefined,
    recurringPaymentAmount: undefined,
    region: undefined,
    savingsPlanArn: undefined,
    savingsPlanId: undefined,
    savingsPlanType: undefined,
    start: undefined,
    state: undefined,
    tags: undefined,
    termDurationInSeconds: undefined,
    upfrontPaymentAmount: undefined
  };
  if (output.commitment !== undefined && output.commitment !== null) {
    contents.commitment = output.commitment;
  }
  if (output.currency !== undefined && output.currency !== null) {
    contents.currency = output.currency;
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (
    output.ec2InstanceFamily !== undefined &&
    output.ec2InstanceFamily !== null
  ) {
    contents.ec2InstanceFamily = output.ec2InstanceFamily;
  }
  if (output.end !== undefined && output.end !== null) {
    contents.end = output.end;
  }
  if (output.offeringId !== undefined && output.offeringId !== null) {
    contents.offeringId = output.offeringId;
  }
  if (output.paymentOption !== undefined && output.paymentOption !== null) {
    contents.paymentOption = output.paymentOption;
  }
  if (output.productTypes !== undefined && output.productTypes !== null) {
    contents.productTypes = deserializeAws_restJson1_1SavingsPlanProductTypeList(
      output.productTypes,
      context
    );
  }
  if (
    output.recurringPaymentAmount !== undefined &&
    output.recurringPaymentAmount !== null
  ) {
    contents.recurringPaymentAmount = output.recurringPaymentAmount;
  }
  if (output.region !== undefined && output.region !== null) {
    contents.region = output.region;
  }
  if (output.savingsPlanArn !== undefined && output.savingsPlanArn !== null) {
    contents.savingsPlanArn = output.savingsPlanArn;
  }
  if (output.savingsPlanId !== undefined && output.savingsPlanId !== null) {
    contents.savingsPlanId = output.savingsPlanId;
  }
  if (output.savingsPlanType !== undefined && output.savingsPlanType !== null) {
    contents.savingsPlanType = output.savingsPlanType;
  }
  if (output.start !== undefined && output.start !== null) {
    contents.start = output.start;
  }
  if (output.state !== undefined && output.state !== null) {
    contents.state = output.state;
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagMap(output.tags, context);
  }
  if (
    output.termDurationInSeconds !== undefined &&
    output.termDurationInSeconds !== null
  ) {
    contents.termDurationInSeconds = output.termDurationInSeconds;
  }
  if (
    output.upfrontPaymentAmount !== undefined &&
    output.upfrontPaymentAmount !== null
  ) {
    contents.upfrontPaymentAmount = output.upfrontPaymentAmount;
  }
  return contents;
};

const deserializeAws_restJson1_1SavingsPlanList = (
  output: any,
  context: __SerdeContext
): Array<SavingsPlan> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1SavingsPlan(entry, context)
  );
};

const deserializeAws_restJson1_1SavingsPlanRate = (
  output: any,
  context: __SerdeContext
): SavingsPlanRate => {
  let contents: any = {
    __type: "SavingsPlanRate",
    currency: undefined,
    operation: undefined,
    productType: undefined,
    properties: undefined,
    rate: undefined,
    serviceCode: undefined,
    unit: undefined,
    usageType: undefined
  };
  if (output.currency !== undefined && output.currency !== null) {
    contents.currency = output.currency;
  }
  if (output.operation !== undefined && output.operation !== null) {
    contents.operation = output.operation;
  }
  if (output.productType !== undefined && output.productType !== null) {
    contents.productType = output.productType;
  }
  if (output.properties !== undefined && output.properties !== null) {
    contents.properties = deserializeAws_restJson1_1SavingsPlanRatePropertyList(
      output.properties,
      context
    );
  }
  if (output.rate !== undefined && output.rate !== null) {
    contents.rate = output.rate;
  }
  if (output.serviceCode !== undefined && output.serviceCode !== null) {
    contents.serviceCode = output.serviceCode;
  }
  if (output.unit !== undefined && output.unit !== null) {
    contents.unit = output.unit;
  }
  if (output.usageType !== undefined && output.usageType !== null) {
    contents.usageType = output.usageType;
  }
  return contents;
};

const deserializeAws_restJson1_1SavingsPlanRateList = (
  output: any,
  context: __SerdeContext
): Array<SavingsPlanRate> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1SavingsPlanRate(entry, context)
  );
};

const deserializeAws_restJson1_1TagMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
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

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
