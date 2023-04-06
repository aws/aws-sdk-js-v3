// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
  MeterUsageResult,
  PlatformNotSupportedException,
  RegisterUsageRequest,
  RegisterUsageResult,
  ResolveCustomerRequest,
  ResolveCustomerResult,
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSMPMeteringService.BatchMeterUsage",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSMPMeteringService.MeterUsage",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSMPMeteringService.RegisterUsage",
  };
  let body: any;
  body = JSON.stringify(se_RegisterUsageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ResolveCustomerCommand
 */
export const se_ResolveCustomerCommand = async (
  input: ResolveCustomerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSMPMeteringService.ResolveCustomer",
  };
  let body: any;
  body = JSON.stringify(se_ResolveCustomerRequest(input, context));
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_MeterUsageResult(data, context);
  const response: MeterUsageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ResolveCustomerResult(data, context);
  const response: ResolveCustomerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  const deserialized: any = de_CustomerNotEntitledException(body, context);
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
  const deserialized: any = de_DisabledApiException(body, context);
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
  const deserialized: any = de_DuplicateRequestException(body, context);
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
  const deserialized: any = de_ExpiredTokenException(body, context);
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
  const deserialized: any = de_InternalServiceErrorException(body, context);
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
  const deserialized: any = de_InvalidCustomerIdentifierException(body, context);
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
  const deserialized: any = de_InvalidEndpointRegionException(body, context);
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
  const deserialized: any = de_InvalidProductCodeException(body, context);
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
  const deserialized: any = de_InvalidPublicKeyVersionException(body, context);
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
  const deserialized: any = de_InvalidRegionException(body, context);
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
  const deserialized: any = de_InvalidTagException(body, context);
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
  const deserialized: any = de_InvalidTokenException(body, context);
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
  const deserialized: any = de_InvalidUsageAllocationsException(body, context);
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
  const deserialized: any = de_InvalidUsageDimensionException(body, context);
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
  const deserialized: any = de_PlatformNotSupportedException(body, context);
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
  const deserialized: any = de_ThrottlingException(body, context);
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
  const deserialized: any = de_TimestampOutOfBoundsException(body, context);
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
  return {
    ...(input.ProductCode != null && { ProductCode: input.ProductCode }),
    ...(input.UsageRecords != null && { UsageRecords: se_UsageRecordList(input.UsageRecords, context) }),
  };
};

/**
 * serializeAws_json1_1MeterUsageRequest
 */
const se_MeterUsageRequest = (input: MeterUsageRequest, context: __SerdeContext): any => {
  return {
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.ProductCode != null && { ProductCode: input.ProductCode }),
    ...(input.Timestamp != null && { Timestamp: Math.round(input.Timestamp.getTime() / 1000) }),
    ...(input.UsageAllocations != null && { UsageAllocations: se_UsageAllocations(input.UsageAllocations, context) }),
    ...(input.UsageDimension != null && { UsageDimension: input.UsageDimension }),
    ...(input.UsageQuantity != null && { UsageQuantity: input.UsageQuantity }),
  };
};

/**
 * serializeAws_json1_1RegisterUsageRequest
 */
const se_RegisterUsageRequest = (input: RegisterUsageRequest, context: __SerdeContext): any => {
  return {
    ...(input.Nonce != null && { Nonce: input.Nonce }),
    ...(input.ProductCode != null && { ProductCode: input.ProductCode }),
    ...(input.PublicKeyVersion != null && { PublicKeyVersion: input.PublicKeyVersion }),
  };
};

/**
 * serializeAws_json1_1ResolveCustomerRequest
 */
const se_ResolveCustomerRequest = (input: ResolveCustomerRequest, context: __SerdeContext): any => {
  return {
    ...(input.RegistrationToken != null && { RegistrationToken: input.RegistrationToken }),
  };
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1UsageAllocation
 */
const se_UsageAllocation = (input: UsageAllocation, context: __SerdeContext): any => {
  return {
    ...(input.AllocatedUsageQuantity != null && { AllocatedUsageQuantity: input.AllocatedUsageQuantity }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1UsageAllocations
 */
const se_UsageAllocations = (input: UsageAllocation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_UsageAllocation(entry, context);
    });
};

/**
 * serializeAws_json1_1UsageRecord
 */
const se_UsageRecord = (input: UsageRecord, context: __SerdeContext): any => {
  return {
    ...(input.CustomerIdentifier != null && { CustomerIdentifier: input.CustomerIdentifier }),
    ...(input.Dimension != null && { Dimension: input.Dimension }),
    ...(input.Quantity != null && { Quantity: input.Quantity }),
    ...(input.Timestamp != null && { Timestamp: Math.round(input.Timestamp.getTime() / 1000) }),
    ...(input.UsageAllocations != null && { UsageAllocations: se_UsageAllocations(input.UsageAllocations, context) }),
  };
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
  return {
    Results: output.Results != null ? de_UsageRecordResultList(output.Results, context) : undefined,
    UnprocessedRecords:
      output.UnprocessedRecords != null ? de_UsageRecordList(output.UnprocessedRecords, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CustomerNotEntitledException
 */
const de_CustomerNotEntitledException = (output: any, context: __SerdeContext): CustomerNotEntitledException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1DisabledApiException
 */
const de_DisabledApiException = (output: any, context: __SerdeContext): DisabledApiException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1DuplicateRequestException
 */
const de_DuplicateRequestException = (output: any, context: __SerdeContext): DuplicateRequestException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ExpiredTokenException
 */
const de_ExpiredTokenException = (output: any, context: __SerdeContext): ExpiredTokenException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InternalServiceErrorException
 */
const de_InternalServiceErrorException = (output: any, context: __SerdeContext): InternalServiceErrorException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidCustomerIdentifierException
 */
const de_InvalidCustomerIdentifierException = (
  output: any,
  context: __SerdeContext
): InvalidCustomerIdentifierException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidEndpointRegionException
 */
const de_InvalidEndpointRegionException = (output: any, context: __SerdeContext): InvalidEndpointRegionException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidProductCodeException
 */
const de_InvalidProductCodeException = (output: any, context: __SerdeContext): InvalidProductCodeException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidPublicKeyVersionException
 */
const de_InvalidPublicKeyVersionException = (
  output: any,
  context: __SerdeContext
): InvalidPublicKeyVersionException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidRegionException
 */
const de_InvalidRegionException = (output: any, context: __SerdeContext): InvalidRegionException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidTagException
 */
const de_InvalidTagException = (output: any, context: __SerdeContext): InvalidTagException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidTokenException
 */
const de_InvalidTokenException = (output: any, context: __SerdeContext): InvalidTokenException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidUsageAllocationsException
 */
const de_InvalidUsageAllocationsException = (
  output: any,
  context: __SerdeContext
): InvalidUsageAllocationsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidUsageDimensionException
 */
const de_InvalidUsageDimensionException = (output: any, context: __SerdeContext): InvalidUsageDimensionException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1MeterUsageResult
 */
const de_MeterUsageResult = (output: any, context: __SerdeContext): MeterUsageResult => {
  return {
    MeteringRecordId: __expectString(output.MeteringRecordId),
  } as any;
};

/**
 * deserializeAws_json1_1PlatformNotSupportedException
 */
const de_PlatformNotSupportedException = (output: any, context: __SerdeContext): PlatformNotSupportedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1RegisterUsageResult
 */
const de_RegisterUsageResult = (output: any, context: __SerdeContext): RegisterUsageResult => {
  return {
    PublicKeyRotationTimestamp:
      output.PublicKeyRotationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.PublicKeyRotationTimestamp)))
        : undefined,
    Signature: __expectString(output.Signature),
  } as any;
};

/**
 * deserializeAws_json1_1ResolveCustomerResult
 */
const de_ResolveCustomerResult = (output: any, context: __SerdeContext): ResolveCustomerResult => {
  return {
    CustomerAWSAccountId: __expectString(output.CustomerAWSAccountId),
    CustomerIdentifier: __expectString(output.CustomerIdentifier),
    ProductCode: __expectString(output.ProductCode),
  } as any;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ThrottlingException
 */
const de_ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1TimestampOutOfBoundsException
 */
const de_TimestampOutOfBoundsException = (output: any, context: __SerdeContext): TimestampOutOfBoundsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UsageAllocation
 */
const de_UsageAllocation = (output: any, context: __SerdeContext): UsageAllocation => {
  return {
    AllocatedUsageQuantity: __expectInt32(output.AllocatedUsageQuantity),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UsageAllocations
 */
const de_UsageAllocations = (output: any, context: __SerdeContext): UsageAllocation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UsageAllocation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UsageRecord
 */
const de_UsageRecord = (output: any, context: __SerdeContext): UsageRecord => {
  return {
    CustomerIdentifier: __expectString(output.CustomerIdentifier),
    Dimension: __expectString(output.Dimension),
    Quantity: __expectInt32(output.Quantity),
    Timestamp:
      output.Timestamp != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Timestamp))) : undefined,
    UsageAllocations:
      output.UsageAllocations != null ? de_UsageAllocations(output.UsageAllocations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UsageRecordList
 */
const de_UsageRecordList = (output: any, context: __SerdeContext): UsageRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UsageRecord(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UsageRecordResult
 */
const de_UsageRecordResult = (output: any, context: __SerdeContext): UsageRecordResult => {
  return {
    MeteringRecordId: __expectString(output.MeteringRecordId),
    Status: __expectString(output.Status),
    UsageRecord: output.UsageRecord != null ? de_UsageRecord(output.UsageRecord, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UsageRecordResultList
 */
const de_UsageRecordResultList = (output: any, context: __SerdeContext): UsageRecordResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
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
