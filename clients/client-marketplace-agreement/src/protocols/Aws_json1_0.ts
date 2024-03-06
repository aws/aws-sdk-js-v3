// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { DescribeAgreementCommandInput, DescribeAgreementCommandOutput } from "../commands/DescribeAgreementCommand";
import { GetAgreementTermsCommandInput, GetAgreementTermsCommandOutput } from "../commands/GetAgreementTermsCommand";
import { SearchAgreementsCommandInput, SearchAgreementsCommandOutput } from "../commands/SearchAgreementsCommand";
import { MarketplaceAgreementServiceException as __BaseException } from "../models/MarketplaceAgreementServiceException";
import {
  AcceptedTerm,
  AccessDeniedException,
  AgreementViewSummary,
  DescribeAgreementInput,
  DescribeAgreementOutput,
  Filter,
  GetAgreementTermsInput,
  GetAgreementTermsOutput,
  InternalServerException,
  PaymentScheduleTerm,
  ResourceNotFoundException,
  ScheduleItem,
  SearchAgreementsInput,
  SearchAgreementsOutput,
  Sort,
  ThrottlingException,
  ValidationException,
  ValidityTerm,
} from "../models/models_0";

/**
 * serializeAws_json1_0DescribeAgreementCommand
 */
export const se_DescribeAgreementCommand = async (
  input: DescribeAgreementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAgreement");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetAgreementTermsCommand
 */
export const se_GetAgreementTermsCommand = async (
  input: GetAgreementTermsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAgreementTerms");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0SearchAgreementsCommand
 */
export const se_SearchAgreementsCommand = async (
  input: SearchAgreementsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SearchAgreements");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0DescribeAgreementCommand
 */
export const de_DescribeAgreementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAgreementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAgreementOutput(data, context);
  const response: DescribeAgreementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetAgreementTermsCommand
 */
export const de_GetAgreementTermsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAgreementTermsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAgreementTermsOutput(data, context);
  const response: GetAgreementTermsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0SearchAgreementsCommand
 */
export const de_SearchAgreementsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchAgreementsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SearchAgreementsOutput(data, context);
  const response: SearchAgreementsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserialize_Aws_json1_0CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.marketplaceagreement#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.marketplaceagreement#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.marketplaceagreement#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.marketplaceagreement#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.marketplaceagreement#ValidationException":
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

/**
 * deserializeAws_json1_0AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_DescribeAgreementInput omitted.

// se_Filter omitted.

// se_FilterList omitted.

// se_FilterValueList omitted.

// se_GetAgreementTermsInput omitted.

// se_SearchAgreementsInput omitted.

// se_Sort omitted.

/**
 * deserializeAws_json1_0AcceptedTerm
 */
const de_AcceptedTerm = (output: any, context: __SerdeContext): AcceptedTerm => {
  if (output.byolPricingTerm != null) {
    return {
      byolPricingTerm: _json(output.byolPricingTerm),
    };
  }
  if (output.configurableUpfrontPricingTerm != null) {
    return {
      configurableUpfrontPricingTerm: _json(output.configurableUpfrontPricingTerm),
    };
  }
  if (output.fixedUpfrontPricingTerm != null) {
    return {
      fixedUpfrontPricingTerm: _json(output.fixedUpfrontPricingTerm),
    };
  }
  if (output.freeTrialPricingTerm != null) {
    return {
      freeTrialPricingTerm: _json(output.freeTrialPricingTerm),
    };
  }
  if (output.legalTerm != null) {
    return {
      legalTerm: _json(output.legalTerm),
    };
  }
  if (output.paymentScheduleTerm != null) {
    return {
      paymentScheduleTerm: de_PaymentScheduleTerm(output.paymentScheduleTerm, context),
    };
  }
  if (output.recurringPaymentTerm != null) {
    return {
      recurringPaymentTerm: _json(output.recurringPaymentTerm),
    };
  }
  if (output.renewalTerm != null) {
    return {
      renewalTerm: _json(output.renewalTerm),
    };
  }
  if (output.supportTerm != null) {
    return {
      supportTerm: _json(output.supportTerm),
    };
  }
  if (output.usageBasedPricingTerm != null) {
    return {
      usageBasedPricingTerm: _json(output.usageBasedPricingTerm),
    };
  }
  if (output.validityTerm != null) {
    return {
      validityTerm: de_ValidityTerm(output.validityTerm, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_json1_0AcceptedTermList
 */
const de_AcceptedTermList = (output: any, context: __SerdeContext): AcceptedTerm[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AcceptedTerm(__expectUnion(entry), context);
    });
  return retVal;
};

// de_Acceptor omitted.

// de_AccessDeniedException omitted.

/**
 * deserializeAws_json1_0AgreementViewSummary
 */
const de_AgreementViewSummary = (output: any, context: __SerdeContext): AgreementViewSummary => {
  return take(output, {
    acceptanceTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    acceptor: _json,
    agreementId: __expectString,
    agreementType: __expectString,
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    proposalSummary: _json,
    proposer: _json,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0AgreementViewSummaryList
 */
const de_AgreementViewSummaryList = (output: any, context: __SerdeContext): AgreementViewSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AgreementViewSummary(entry, context);
    });
  return retVal;
};

// de_ByolPricingTerm omitted.

// de_ConfigurableUpfrontPricingTerm omitted.

// de_ConfigurableUpfrontPricingTermConfiguration omitted.

// de_ConfigurableUpfrontRateCardItem omitted.

// de_ConfigurableUpfrontRateCardList omitted.

// de_Constraints omitted.

/**
 * deserializeAws_json1_0DescribeAgreementOutput
 */
const de_DescribeAgreementOutput = (output: any, context: __SerdeContext): DescribeAgreementOutput => {
  return take(output, {
    acceptanceTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    acceptor: _json,
    agreementId: __expectString,
    agreementType: __expectString,
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    estimatedCharges: _json,
    proposalSummary: _json,
    proposer: _json,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
  }) as any;
};

// de_Dimension omitted.

// de_DimensionList omitted.

// de_DocumentItem omitted.

// de_DocumentList omitted.

// de_EstimatedCharges omitted.

// de_FixedUpfrontPricingTerm omitted.

// de_FreeTrialPricingTerm omitted.

/**
 * deserializeAws_json1_0GetAgreementTermsOutput
 */
const de_GetAgreementTermsOutput = (output: any, context: __SerdeContext): GetAgreementTermsOutput => {
  return take(output, {
    acceptedTerms: (_: any) => de_AcceptedTermList(_, context),
    nextToken: __expectString,
  }) as any;
};

// de_GrantItem omitted.

// de_GrantList omitted.

// de_InternalServerException omitted.

// de_LegalTerm omitted.

/**
 * deserializeAws_json1_0PaymentScheduleTerm
 */
const de_PaymentScheduleTerm = (output: any, context: __SerdeContext): PaymentScheduleTerm => {
  return take(output, {
    currencyCode: __expectString,
    schedule: (_: any) => de_ScheduleList(_, context),
    type: __expectString,
  }) as any;
};

// de_ProposalSummary omitted.

// de_Proposer omitted.

// de_RateCardItem omitted.

// de_RateCardList omitted.

// de_RecurringPaymentTerm omitted.

// de_RenewalTerm omitted.

// de_RenewalTermConfiguration omitted.

// de_Resource omitted.

// de_ResourceNotFoundException omitted.

// de_Resources omitted.

/**
 * deserializeAws_json1_0ScheduleItem
 */
const de_ScheduleItem = (output: any, context: __SerdeContext): ScheduleItem => {
  return take(output, {
    chargeAmount: __expectString,
    chargeDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_0ScheduleList
 */
const de_ScheduleList = (output: any, context: __SerdeContext): ScheduleItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ScheduleItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0SearchAgreementsOutput
 */
const de_SearchAgreementsOutput = (output: any, context: __SerdeContext): SearchAgreementsOutput => {
  return take(output, {
    agreementViewSummaries: (_: any) => de_AgreementViewSummaryList(_, context),
    nextToken: __expectString,
  }) as any;
};

// de_Selector omitted.

// de_SupportTerm omitted.

// de_ThrottlingException omitted.

// de_UsageBasedPricingTerm omitted.

// de_UsageBasedRateCardItem omitted.

// de_UsageBasedRateCardList omitted.

// de_ValidationException omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

/**
 * deserializeAws_json1_0ValidityTerm
 */
const de_ValidityTerm = (output: any, context: __SerdeContext): ValidityTerm => {
  return take(output, {
    agreementDuration: __expectString,
    agreementEndDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    agreementStartDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    type: __expectString,
  }) as any;
};

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

const throwDefaultError = withBaseException(__BaseException);
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
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": `AWSMPCommerceService_v20200301.${operation}`,
  };
}
