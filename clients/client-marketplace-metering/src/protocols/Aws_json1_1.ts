// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
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

import { BatchMeterUsageCommandInput, BatchMeterUsageCommandOutput } from "../commands/BatchMeterUsageCommand";
import { MeterUsageCommandInput, MeterUsageCommandOutput } from "../commands/MeterUsageCommand";
import { RegisterUsageCommandInput, RegisterUsageCommandOutput } from "../commands/RegisterUsageCommand";
import { ResolveCustomerCommandInput, ResolveCustomerCommandOutput } from "../commands/ResolveCustomerCommand";
import { MarketplaceMeteringServiceException as __BaseException } from "../models/MarketplaceMeteringServiceException";
import {
  BatchMeterUsageRequest,
  BatchMeterUsageResult,
  CustomerNotEntitledException,
  DisabledApiException,
  DuplicateRequestException,
  ExpiredTokenException,
  InternalServiceErrorException,
  InvalidCustomerIdentifierException,
  InvalidEndpointRegionException,
  InvalidProductCodeException,
  InvalidPublicKeyVersionException,
  InvalidRegionException,
  InvalidTagException,
  InvalidTokenException,
  InvalidUsageAllocationsException,
  InvalidUsageDimensionException,
  MeterUsageRequest,
  PlatformNotSupportedException,
  RegisterUsageRequest,
  RegisterUsageResult,
  ResolveCustomerRequest,
  Tag,
  ThrottlingException,
  TimestampOutOfBoundsException,
  UsageAllocation,
  UsageRecord,
  UsageRecordResult,
} from "../models/models_0";

/**
 * serializeAws_json1_1BatchMeterUsageCommand
 */
export const se_BatchMeterUsageCommand = async (
  input: BatchMeterUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchMeterUsage");
  let body: any;
  body = JSON.stringify(se_BatchMeterUsageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1MeterUsageCommand
 */
export const se_MeterUsageCommand = async (
  input: MeterUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("MeterUsage");
  let body: any;
  body = JSON.stringify(se_MeterUsageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterUsageCommand
 */
export const se_RegisterUsageCommand = async (
  input: RegisterUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterUsage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ResolveCustomerCommand
 */
export const se_ResolveCustomerCommand = async (
  input: ResolveCustomerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ResolveCustomer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1BatchMeterUsageCommand
 */
export const de_BatchMeterUsageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchMeterUsageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchMeterUsageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchMeterUsageResult(data, context);
  const response: BatchMeterUsageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchMeterUsageCommandError
 */
const de_BatchMeterUsageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchMeterUsageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DisabledApiException":
    case "com.amazonaws.marketplacemetering#DisabledApiException":
      throw await de_DisabledApiExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.marketplacemetering#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidCustomerIdentifierException":
    case "com.amazonaws.marketplacemetering#InvalidCustomerIdentifierException":
      throw await de_InvalidCustomerIdentifierExceptionRes(parsedOutput, context);
    case "InvalidProductCodeException":
    case "com.amazonaws.marketplacemetering#InvalidProductCodeException":
      throw await de_InvalidProductCodeExceptionRes(parsedOutput, context);
    case "InvalidTagException":
    case "com.amazonaws.marketplacemetering#InvalidTagException":
      throw await de_InvalidTagExceptionRes(parsedOutput, context);
    case "InvalidUsageAllocationsException":
    case "com.amazonaws.marketplacemetering#InvalidUsageAllocationsException":
      throw await de_InvalidUsageAllocationsExceptionRes(parsedOutput, context);
    case "InvalidUsageDimensionException":
    case "com.amazonaws.marketplacemetering#InvalidUsageDimensionException":
      throw await de_InvalidUsageDimensionExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.marketplacemetering#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "TimestampOutOfBoundsException":
    case "com.amazonaws.marketplacemetering#TimestampOutOfBoundsException":
      throw await de_TimestampOutOfBoundsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1MeterUsageCommand
 */
export const de_MeterUsageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MeterUsageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_MeterUsageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: MeterUsageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1MeterUsageCommandError
 */
const de_MeterUsageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MeterUsageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CustomerNotEntitledException":
    case "com.amazonaws.marketplacemetering#CustomerNotEntitledException":
      throw await de_CustomerNotEntitledExceptionRes(parsedOutput, context);
    case "DuplicateRequestException":
    case "com.amazonaws.marketplacemetering#DuplicateRequestException":
      throw await de_DuplicateRequestExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.marketplacemetering#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidEndpointRegionException":
    case "com.amazonaws.marketplacemetering#InvalidEndpointRegionException":
      throw await de_InvalidEndpointRegionExceptionRes(parsedOutput, context);
    case "InvalidProductCodeException":
    case "com.amazonaws.marketplacemetering#InvalidProductCodeException":
      throw await de_InvalidProductCodeExceptionRes(parsedOutput, context);
    case "InvalidTagException":
    case "com.amazonaws.marketplacemetering#InvalidTagException":
      throw await de_InvalidTagExceptionRes(parsedOutput, context);
    case "InvalidUsageAllocationsException":
    case "com.amazonaws.marketplacemetering#InvalidUsageAllocationsException":
      throw await de_InvalidUsageAllocationsExceptionRes(parsedOutput, context);
    case "InvalidUsageDimensionException":
    case "com.amazonaws.marketplacemetering#InvalidUsageDimensionException":
      throw await de_InvalidUsageDimensionExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.marketplacemetering#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "TimestampOutOfBoundsException":
    case "com.amazonaws.marketplacemetering#TimestampOutOfBoundsException":
      throw await de_TimestampOutOfBoundsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RegisterUsageCommand
 */
export const de_RegisterUsageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterUsageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterUsageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RegisterUsageResult(data, context);
  const response: RegisterUsageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RegisterUsageCommandError
 */
const de_RegisterUsageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterUsageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CustomerNotEntitledException":
    case "com.amazonaws.marketplacemetering#CustomerNotEntitledException":
      throw await de_CustomerNotEntitledExceptionRes(parsedOutput, context);
    case "DisabledApiException":
    case "com.amazonaws.marketplacemetering#DisabledApiException":
      throw await de_DisabledApiExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.marketplacemetering#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidProductCodeException":
    case "com.amazonaws.marketplacemetering#InvalidProductCodeException":
      throw await de_InvalidProductCodeExceptionRes(parsedOutput, context);
    case "InvalidPublicKeyVersionException":
    case "com.amazonaws.marketplacemetering#InvalidPublicKeyVersionException":
      throw await de_InvalidPublicKeyVersionExceptionRes(parsedOutput, context);
    case "InvalidRegionException":
    case "com.amazonaws.marketplacemetering#InvalidRegionException":
      throw await de_InvalidRegionExceptionRes(parsedOutput, context);
    case "PlatformNotSupportedException":
    case "com.amazonaws.marketplacemetering#PlatformNotSupportedException":
      throw await de_PlatformNotSupportedExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.marketplacemetering#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ResolveCustomerCommand
 */
export const de_ResolveCustomerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResolveCustomerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ResolveCustomerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ResolveCustomerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ResolveCustomerCommandError
 */
const de_ResolveCustomerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResolveCustomerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DisabledApiException":
    case "com.amazonaws.marketplacemetering#DisabledApiException":
      throw await de_DisabledApiExceptionRes(parsedOutput, context);
    case "ExpiredTokenException":
    case "com.amazonaws.marketplacemetering#ExpiredTokenException":
      throw await de_ExpiredTokenExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.marketplacemetering#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidTokenException":
    case "com.amazonaws.marketplacemetering#InvalidTokenException":
      throw await de_InvalidTokenExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.marketplacemetering#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CustomerNotEntitledExceptionRes
 */
const de_CustomerNotEntitledExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomerNotEntitledException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new CustomerNotEntitledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DisabledApiExceptionRes
 */
const de_DisabledApiExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DisabledApiException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new DisabledApiException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DuplicateRequestExceptionRes
 */
const de_DuplicateRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new DuplicateRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ExpiredTokenExceptionRes
 */
const de_ExpiredTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExpiredTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ExpiredTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalServiceErrorExceptionRes
 */
const de_InternalServiceErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InternalServiceErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidCustomerIdentifierExceptionRes
 */
const de_InvalidCustomerIdentifierExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCustomerIdentifierException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidCustomerIdentifierException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidEndpointRegionExceptionRes
 */
const de_InvalidEndpointRegionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEndpointRegionException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidEndpointRegionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidProductCodeExceptionRes
 */
const de_InvalidProductCodeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidProductCodeException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidProductCodeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidPublicKeyVersionExceptionRes
 */
const de_InvalidPublicKeyVersionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPublicKeyVersionException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidPublicKeyVersionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidRegionExceptionRes
 */
const de_InvalidRegionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRegionException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidRegionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidTagExceptionRes
 */
const de_InvalidTagExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidTagException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidTagException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidTokenExceptionRes
 */
const de_InvalidTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidUsageAllocationsExceptionRes
 */
const de_InvalidUsageAllocationsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidUsageAllocationsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidUsageAllocationsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidUsageDimensionExceptionRes
 */
const de_InvalidUsageDimensionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidUsageDimensionException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidUsageDimensionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1PlatformNotSupportedExceptionRes
 */
const de_PlatformNotSupportedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PlatformNotSupportedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new PlatformNotSupportedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ThrottlingExceptionRes
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
 * deserializeAws_json1_1TimestampOutOfBoundsExceptionRes
 */
const de_TimestampOutOfBoundsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TimestampOutOfBoundsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new TimestampOutOfBoundsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1BatchMeterUsageRequest
 */
const se_BatchMeterUsageRequest = (input: BatchMeterUsageRequest, context: __SerdeContext): any => {
  return take(input, {
    ProductCode: [],
    UsageRecords: (_) => se_UsageRecordList(_, context),
  });
};

/**
 * serializeAws_json1_1MeterUsageRequest
 */
const se_MeterUsageRequest = (input: MeterUsageRequest, context: __SerdeContext): any => {
  return take(input, {
    DryRun: [],
    ProductCode: [],
    Timestamp: (_) => Math.round(_.getTime() / 1000),
    UsageAllocations: _json,
    UsageDimension: [],
    UsageQuantity: [],
  });
};

// se_RegisterUsageRequest omitted.

// se_ResolveCustomerRequest omitted.

// se_Tag omitted.

// se_TagList omitted.

// se_UsageAllocation omitted.

// se_UsageAllocations omitted.

/**
 * serializeAws_json1_1UsageRecord
 */
const se_UsageRecord = (input: UsageRecord, context: __SerdeContext): any => {
  return take(input, {
    CustomerIdentifier: [],
    Dimension: [],
    Quantity: [],
    Timestamp: (_) => Math.round(_.getTime() / 1000),
    UsageAllocations: _json,
  });
};

/**
 * serializeAws_json1_1UsageRecordList
 */
const se_UsageRecordList = (input: UsageRecord[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_UsageRecord(entry, context);
    });
};

/**
 * deserializeAws_json1_1BatchMeterUsageResult
 */
const de_BatchMeterUsageResult = (output: any, context: __SerdeContext): BatchMeterUsageResult => {
  return take(output, {
    Results: (_: any) => de_UsageRecordResultList(_, context),
    UnprocessedRecords: (_: any) => de_UsageRecordList(_, context),
  }) as any;
};

// de_CustomerNotEntitledException omitted.

// de_DisabledApiException omitted.

// de_DuplicateRequestException omitted.

// de_ExpiredTokenException omitted.

// de_InternalServiceErrorException omitted.

// de_InvalidCustomerIdentifierException omitted.

// de_InvalidEndpointRegionException omitted.

// de_InvalidProductCodeException omitted.

// de_InvalidPublicKeyVersionException omitted.

// de_InvalidRegionException omitted.

// de_InvalidTagException omitted.

// de_InvalidTokenException omitted.

// de_InvalidUsageAllocationsException omitted.

// de_InvalidUsageDimensionException omitted.

// de_MeterUsageResult omitted.

// de_PlatformNotSupportedException omitted.

/**
 * deserializeAws_json1_1RegisterUsageResult
 */
const de_RegisterUsageResult = (output: any, context: __SerdeContext): RegisterUsageResult => {
  return take(output, {
    PublicKeyRotationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Signature: __expectString,
  }) as any;
};

// de_ResolveCustomerResult omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_ThrottlingException omitted.

// de_TimestampOutOfBoundsException omitted.

// de_UsageAllocation omitted.

// de_UsageAllocations omitted.

/**
 * deserializeAws_json1_1UsageRecord
 */
const de_UsageRecord = (output: any, context: __SerdeContext): UsageRecord => {
  return take(output, {
    CustomerIdentifier: __expectString,
    Dimension: __expectString,
    Quantity: __expectInt32,
    Timestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    UsageAllocations: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1UsageRecordList
 */
const de_UsageRecordList = (output: any, context: __SerdeContext): UsageRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UsageRecord(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UsageRecordResult
 */
const de_UsageRecordResult = (output: any, context: __SerdeContext): UsageRecordResult => {
  return take(output, {
    MeteringRecordId: __expectString,
    Status: __expectString,
    UsageRecord: (_: any) => de_UsageRecord(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UsageRecordResultList
 */
const de_UsageRecordResultList = (output: any, context: __SerdeContext): UsageRecordResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UsageRecordResult(entry, context);
    });
  return retVal;
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `AWSMPMeteringService.${operation}`,
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
