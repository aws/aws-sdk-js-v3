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

export const serializeAws_json1_1BatchMeterUsageCommand = async (
  input: BatchMeterUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSMPMeteringService.BatchMeterUsage",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchMeterUsageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1MeterUsageCommand = async (
  input: MeterUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSMPMeteringService.MeterUsage",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1MeterUsageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterUsageCommand = async (
  input: RegisterUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSMPMeteringService.RegisterUsage",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RegisterUsageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ResolveCustomerCommand = async (
  input: ResolveCustomerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSMPMeteringService.ResolveCustomer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ResolveCustomerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1BatchMeterUsageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchMeterUsageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchMeterUsageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchMeterUsageResult(data, context);
  const response: BatchMeterUsageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchMeterUsageCommandError = async (
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
      throw await deserializeAws_json1_1DisabledApiExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.marketplacemetering#InternalServiceErrorException":
      throw await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidCustomerIdentifierException":
    case "com.amazonaws.marketplacemetering#InvalidCustomerIdentifierException":
      throw await deserializeAws_json1_1InvalidCustomerIdentifierExceptionResponse(parsedOutput, context);
    case "InvalidProductCodeException":
    case "com.amazonaws.marketplacemetering#InvalidProductCodeException":
      throw await deserializeAws_json1_1InvalidProductCodeExceptionResponse(parsedOutput, context);
    case "InvalidTagException":
    case "com.amazonaws.marketplacemetering#InvalidTagException":
      throw await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context);
    case "InvalidUsageAllocationsException":
    case "com.amazonaws.marketplacemetering#InvalidUsageAllocationsException":
      throw await deserializeAws_json1_1InvalidUsageAllocationsExceptionResponse(parsedOutput, context);
    case "InvalidUsageDimensionException":
    case "com.amazonaws.marketplacemetering#InvalidUsageDimensionException":
      throw await deserializeAws_json1_1InvalidUsageDimensionExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.marketplacemetering#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "TimestampOutOfBoundsException":
    case "com.amazonaws.marketplacemetering#TimestampOutOfBoundsException":
      throw await deserializeAws_json1_1TimestampOutOfBoundsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1MeterUsageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MeterUsageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1MeterUsageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1MeterUsageResult(data, context);
  const response: MeterUsageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1MeterUsageCommandError = async (
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
      throw await deserializeAws_json1_1CustomerNotEntitledExceptionResponse(parsedOutput, context);
    case "DuplicateRequestException":
    case "com.amazonaws.marketplacemetering#DuplicateRequestException":
      throw await deserializeAws_json1_1DuplicateRequestExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.marketplacemetering#InternalServiceErrorException":
      throw await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidEndpointRegionException":
    case "com.amazonaws.marketplacemetering#InvalidEndpointRegionException":
      throw await deserializeAws_json1_1InvalidEndpointRegionExceptionResponse(parsedOutput, context);
    case "InvalidProductCodeException":
    case "com.amazonaws.marketplacemetering#InvalidProductCodeException":
      throw await deserializeAws_json1_1InvalidProductCodeExceptionResponse(parsedOutput, context);
    case "InvalidTagException":
    case "com.amazonaws.marketplacemetering#InvalidTagException":
      throw await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context);
    case "InvalidUsageAllocationsException":
    case "com.amazonaws.marketplacemetering#InvalidUsageAllocationsException":
      throw await deserializeAws_json1_1InvalidUsageAllocationsExceptionResponse(parsedOutput, context);
    case "InvalidUsageDimensionException":
    case "com.amazonaws.marketplacemetering#InvalidUsageDimensionException":
      throw await deserializeAws_json1_1InvalidUsageDimensionExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.marketplacemetering#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "TimestampOutOfBoundsException":
    case "com.amazonaws.marketplacemetering#TimestampOutOfBoundsException":
      throw await deserializeAws_json1_1TimestampOutOfBoundsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RegisterUsageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterUsageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RegisterUsageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterUsageResult(data, context);
  const response: RegisterUsageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterUsageCommandError = async (
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
      throw await deserializeAws_json1_1CustomerNotEntitledExceptionResponse(parsedOutput, context);
    case "DisabledApiException":
    case "com.amazonaws.marketplacemetering#DisabledApiException":
      throw await deserializeAws_json1_1DisabledApiExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.marketplacemetering#InternalServiceErrorException":
      throw await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidProductCodeException":
    case "com.amazonaws.marketplacemetering#InvalidProductCodeException":
      throw await deserializeAws_json1_1InvalidProductCodeExceptionResponse(parsedOutput, context);
    case "InvalidPublicKeyVersionException":
    case "com.amazonaws.marketplacemetering#InvalidPublicKeyVersionException":
      throw await deserializeAws_json1_1InvalidPublicKeyVersionExceptionResponse(parsedOutput, context);
    case "InvalidRegionException":
    case "com.amazonaws.marketplacemetering#InvalidRegionException":
      throw await deserializeAws_json1_1InvalidRegionExceptionResponse(parsedOutput, context);
    case "PlatformNotSupportedException":
    case "com.amazonaws.marketplacemetering#PlatformNotSupportedException":
      throw await deserializeAws_json1_1PlatformNotSupportedExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.marketplacemetering#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ResolveCustomerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResolveCustomerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ResolveCustomerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ResolveCustomerResult(data, context);
  const response: ResolveCustomerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ResolveCustomerCommandError = async (
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
      throw await deserializeAws_json1_1DisabledApiExceptionResponse(parsedOutput, context);
    case "ExpiredTokenException":
    case "com.amazonaws.marketplacemetering#ExpiredTokenException":
      throw await deserializeAws_json1_1ExpiredTokenExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.marketplacemetering#InternalServiceErrorException":
      throw await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidTokenException":
    case "com.amazonaws.marketplacemetering#InvalidTokenException":
      throw await deserializeAws_json1_1InvalidTokenExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.marketplacemetering#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1CustomerNotEntitledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomerNotEntitledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CustomerNotEntitledException(body, context);
  const exception = new CustomerNotEntitledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DisabledApiExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DisabledApiException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DisabledApiException(body, context);
  const exception = new DisabledApiException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DuplicateRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DuplicateRequestException(body, context);
  const exception = new DuplicateRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ExpiredTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExpiredTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ExpiredTokenException(body, context);
  const exception = new ExpiredTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InternalServiceErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServiceErrorException(body, context);
  const exception = new InternalServiceErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidCustomerIdentifierExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCustomerIdentifierException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidCustomerIdentifierException(body, context);
  const exception = new InvalidCustomerIdentifierException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidEndpointRegionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEndpointRegionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidEndpointRegionException(body, context);
  const exception = new InvalidEndpointRegionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidProductCodeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidProductCodeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidProductCodeException(body, context);
  const exception = new InvalidProductCodeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidPublicKeyVersionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPublicKeyVersionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidPublicKeyVersionException(body, context);
  const exception = new InvalidPublicKeyVersionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidRegionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRegionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRegionException(body, context);
  const exception = new InvalidRegionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidTagExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTagException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTagException(body, context);
  const exception = new InvalidTagException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTokenException(body, context);
  const exception = new InvalidTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidUsageAllocationsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidUsageAllocationsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidUsageAllocationsException(body, context);
  const exception = new InvalidUsageAllocationsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidUsageDimensionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidUsageDimensionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidUsageDimensionException(body, context);
  const exception = new InvalidUsageDimensionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1PlatformNotSupportedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PlatformNotSupportedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PlatformNotSupportedException(body, context);
  const exception = new PlatformNotSupportedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ThrottlingException(body, context);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TimestampOutOfBoundsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TimestampOutOfBoundsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TimestampOutOfBoundsException(body, context);
  const exception = new TimestampOutOfBoundsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1BatchMeterUsageRequest = (input: BatchMeterUsageRequest, context: __SerdeContext): any => {
  return {
    ...(input.ProductCode != null && { ProductCode: input.ProductCode }),
    ...(input.UsageRecords != null && {
      UsageRecords: serializeAws_json1_1UsageRecordList(input.UsageRecords, context),
    }),
  };
};

const serializeAws_json1_1MeterUsageRequest = (input: MeterUsageRequest, context: __SerdeContext): any => {
  return {
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.ProductCode != null && { ProductCode: input.ProductCode }),
    ...(input.Timestamp != null && { Timestamp: Math.round(input.Timestamp.getTime() / 1000) }),
    ...(input.UsageAllocations != null && {
      UsageAllocations: serializeAws_json1_1UsageAllocations(input.UsageAllocations, context),
    }),
    ...(input.UsageDimension != null && { UsageDimension: input.UsageDimension }),
    ...(input.UsageQuantity != null && { UsageQuantity: input.UsageQuantity }),
  };
};

const serializeAws_json1_1RegisterUsageRequest = (input: RegisterUsageRequest, context: __SerdeContext): any => {
  return {
    ...(input.Nonce != null && { Nonce: input.Nonce }),
    ...(input.ProductCode != null && { ProductCode: input.ProductCode }),
    ...(input.PublicKeyVersion != null && { PublicKeyVersion: input.PublicKeyVersion }),
  };
};

const serializeAws_json1_1ResolveCustomerRequest = (input: ResolveCustomerRequest, context: __SerdeContext): any => {
  return {
    ...(input.RegistrationToken != null && { RegistrationToken: input.RegistrationToken }),
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1UsageAllocation = (input: UsageAllocation, context: __SerdeContext): any => {
  return {
    ...(input.AllocatedUsageQuantity != null && { AllocatedUsageQuantity: input.AllocatedUsageQuantity }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1UsageAllocations = (input: UsageAllocation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1UsageAllocation(entry, context);
    });
};

const serializeAws_json1_1UsageRecord = (input: UsageRecord, context: __SerdeContext): any => {
  return {
    ...(input.CustomerIdentifier != null && { CustomerIdentifier: input.CustomerIdentifier }),
    ...(input.Dimension != null && { Dimension: input.Dimension }),
    ...(input.Quantity != null && { Quantity: input.Quantity }),
    ...(input.Timestamp != null && { Timestamp: Math.round(input.Timestamp.getTime() / 1000) }),
    ...(input.UsageAllocations != null && {
      UsageAllocations: serializeAws_json1_1UsageAllocations(input.UsageAllocations, context),
    }),
  };
};

const serializeAws_json1_1UsageRecordList = (input: UsageRecord[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1UsageRecord(entry, context);
    });
};

const deserializeAws_json1_1BatchMeterUsageResult = (output: any, context: __SerdeContext): BatchMeterUsageResult => {
  return {
    Results: output.Results != null ? deserializeAws_json1_1UsageRecordResultList(output.Results, context) : undefined,
    UnprocessedRecords:
      output.UnprocessedRecords != null
        ? deserializeAws_json1_1UsageRecordList(output.UnprocessedRecords, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CustomerNotEntitledException = (
  output: any,
  context: __SerdeContext
): CustomerNotEntitledException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1DisabledApiException = (output: any, context: __SerdeContext): DisabledApiException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1DuplicateRequestException = (
  output: any,
  context: __SerdeContext
): DuplicateRequestException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ExpiredTokenException = (output: any, context: __SerdeContext): ExpiredTokenException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InternalServiceErrorException = (
  output: any,
  context: __SerdeContext
): InternalServiceErrorException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidCustomerIdentifierException = (
  output: any,
  context: __SerdeContext
): InvalidCustomerIdentifierException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidEndpointRegionException = (
  output: any,
  context: __SerdeContext
): InvalidEndpointRegionException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidProductCodeException = (
  output: any,
  context: __SerdeContext
): InvalidProductCodeException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidPublicKeyVersionException = (
  output: any,
  context: __SerdeContext
): InvalidPublicKeyVersionException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidRegionException = (output: any, context: __SerdeContext): InvalidRegionException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidTagException = (output: any, context: __SerdeContext): InvalidTagException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidTokenException = (output: any, context: __SerdeContext): InvalidTokenException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidUsageAllocationsException = (
  output: any,
  context: __SerdeContext
): InvalidUsageAllocationsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidUsageDimensionException = (
  output: any,
  context: __SerdeContext
): InvalidUsageDimensionException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1MeterUsageResult = (output: any, context: __SerdeContext): MeterUsageResult => {
  return {
    MeteringRecordId: __expectString(output.MeteringRecordId),
  } as any;
};

const deserializeAws_json1_1PlatformNotSupportedException = (
  output: any,
  context: __SerdeContext
): PlatformNotSupportedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1RegisterUsageResult = (output: any, context: __SerdeContext): RegisterUsageResult => {
  return {
    PublicKeyRotationTimestamp:
      output.PublicKeyRotationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.PublicKeyRotationTimestamp)))
        : undefined,
    Signature: __expectString(output.Signature),
  } as any;
};

const deserializeAws_json1_1ResolveCustomerResult = (output: any, context: __SerdeContext): ResolveCustomerResult => {
  return {
    CustomerAWSAccountId: __expectString(output.CustomerAWSAccountId),
    CustomerIdentifier: __expectString(output.CustomerIdentifier),
    ProductCode: __expectString(output.ProductCode),
  } as any;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1TimestampOutOfBoundsException = (
  output: any,
  context: __SerdeContext
): TimestampOutOfBoundsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1UsageAllocation = (output: any, context: __SerdeContext): UsageAllocation => {
  return {
    AllocatedUsageQuantity: __expectInt32(output.AllocatedUsageQuantity),
    Tags: output.Tags != null ? deserializeAws_json1_1TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UsageAllocations = (output: any, context: __SerdeContext): UsageAllocation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1UsageAllocation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1UsageRecord = (output: any, context: __SerdeContext): UsageRecord => {
  return {
    CustomerIdentifier: __expectString(output.CustomerIdentifier),
    Dimension: __expectString(output.Dimension),
    Quantity: __expectInt32(output.Quantity),
    Timestamp:
      output.Timestamp != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Timestamp))) : undefined,
    UsageAllocations:
      output.UsageAllocations != null
        ? deserializeAws_json1_1UsageAllocations(output.UsageAllocations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UsageRecordList = (output: any, context: __SerdeContext): UsageRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1UsageRecord(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1UsageRecordResult = (output: any, context: __SerdeContext): UsageRecordResult => {
  return {
    MeteringRecordId: __expectString(output.MeteringRecordId),
    Status: __expectString(output.Status),
    UsageRecord:
      output.UsageRecord != null ? deserializeAws_json1_1UsageRecord(output.UsageRecord, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UsageRecordResultList = (output: any, context: __SerdeContext): UsageRecordResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1UsageRecordResult(entry, context);
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
