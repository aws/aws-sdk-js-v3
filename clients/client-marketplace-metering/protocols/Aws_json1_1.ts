import {
  BatchMeterUsageCommandInput,
  BatchMeterUsageCommandOutput
} from "../commands/BatchMeterUsageCommand";
import {
  MeterUsageCommandInput,
  MeterUsageCommandOutput
} from "../commands/MeterUsageCommand";
import {
  RegisterUsageCommandInput,
  RegisterUsageCommandOutput
} from "../commands/RegisterUsageCommand";
import {
  ResolveCustomerCommandInput,
  ResolveCustomerCommandOutput
} from "../commands/ResolveCustomerCommand";
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
  InvalidTokenException,
  InvalidUsageDimensionException,
  MeterUsageRequest,
  MeterUsageResult,
  PlatformNotSupportedException,
  RegisterUsageRequest,
  RegisterUsageResult,
  ResolveCustomerRequest,
  ResolveCustomerResult,
  ThrottlingException,
  TimestampOutOfBoundsException,
  UsageRecord,
  UsageRecordResult
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

export async function serializeAws_json1_1BatchMeterUsageCommand(
  input: BatchMeterUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSMPMeteringService.BatchMeterUsage";
  let body: any = {};
  const wrappedBody: any = {
    BatchMeterUsageRequest: serializeAws_json1_1BatchMeterUsageRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/BatchMeterUsage",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1MeterUsageCommand(
  input: MeterUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSMPMeteringService.MeterUsage";
  let body: any = {};
  const wrappedBody: any = {
    MeterUsageRequest: serializeAws_json1_1MeterUsageRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/MeterUsage",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1RegisterUsageCommand(
  input: RegisterUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSMPMeteringService.RegisterUsage";
  let body: any = {};
  const wrappedBody: any = {
    RegisterUsageRequest: serializeAws_json1_1RegisterUsageRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RegisterUsage",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ResolveCustomerCommand(
  input: ResolveCustomerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSMPMeteringService.ResolveCustomer";
  let body: any = {};
  const wrappedBody: any = {
    ResolveCustomerRequest: serializeAws_json1_1ResolveCustomerRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ResolveCustomer",
    headers: headers,
    body: body
  });
}

export async function deserializeAws_json1_1BatchMeterUsageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchMeterUsageCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1BatchMeterUsageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchMeterUsageResult(data, context);
  const response: BatchMeterUsageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchMeterUsageResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1BatchMeterUsageCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchMeterUsageCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DisabledApiException":
    case "com.amazonaws.marketplace.metering#DisabledApiException":
      response = await deserializeAws_json1_1DisabledApiExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.marketplace.metering#InternalServiceErrorException":
      response = await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidCustomerIdentifierException":
    case "com.amazonaws.marketplace.metering#InvalidCustomerIdentifierException":
      response = await deserializeAws_json1_1InvalidCustomerIdentifierExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidProductCodeException":
    case "com.amazonaws.marketplace.metering#InvalidProductCodeException":
      response = await deserializeAws_json1_1InvalidProductCodeExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidUsageDimensionException":
    case "com.amazonaws.marketplace.metering#InvalidUsageDimensionException":
      response = await deserializeAws_json1_1InvalidUsageDimensionExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.marketplace.metering#ThrottlingException":
      response = await deserializeAws_json1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TimestampOutOfBoundsException":
    case "com.amazonaws.marketplace.metering#TimestampOutOfBoundsException":
      response = await deserializeAws_json1_1TimestampOutOfBoundsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.marketplace.metering#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1MeterUsageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MeterUsageCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1MeterUsageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1MeterUsageResult(data, context);
  const response: MeterUsageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "MeterUsageResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1MeterUsageCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MeterUsageCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CustomerNotEntitledException":
    case "com.amazonaws.marketplace.metering#CustomerNotEntitledException":
      response = await deserializeAws_json1_1CustomerNotEntitledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DuplicateRequestException":
    case "com.amazonaws.marketplace.metering#DuplicateRequestException":
      response = await deserializeAws_json1_1DuplicateRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.marketplace.metering#InternalServiceErrorException":
      response = await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidEndpointRegionException":
    case "com.amazonaws.marketplace.metering#InvalidEndpointRegionException":
      response = await deserializeAws_json1_1InvalidEndpointRegionExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidProductCodeException":
    case "com.amazonaws.marketplace.metering#InvalidProductCodeException":
      response = await deserializeAws_json1_1InvalidProductCodeExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidUsageDimensionException":
    case "com.amazonaws.marketplace.metering#InvalidUsageDimensionException":
      response = await deserializeAws_json1_1InvalidUsageDimensionExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.marketplace.metering#ThrottlingException":
      response = await deserializeAws_json1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TimestampOutOfBoundsException":
    case "com.amazonaws.marketplace.metering#TimestampOutOfBoundsException":
      response = await deserializeAws_json1_1TimestampOutOfBoundsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.marketplace.metering#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1RegisterUsageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterUsageCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RegisterUsageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterUsageResult(data, context);
  const response: RegisterUsageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RegisterUsageResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RegisterUsageCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterUsageCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CustomerNotEntitledException":
    case "com.amazonaws.marketplace.metering#CustomerNotEntitledException":
      response = await deserializeAws_json1_1CustomerNotEntitledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DisabledApiException":
    case "com.amazonaws.marketplace.metering#DisabledApiException":
      response = await deserializeAws_json1_1DisabledApiExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.marketplace.metering#InternalServiceErrorException":
      response = await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidProductCodeException":
    case "com.amazonaws.marketplace.metering#InvalidProductCodeException":
      response = await deserializeAws_json1_1InvalidProductCodeExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidPublicKeyVersionException":
    case "com.amazonaws.marketplace.metering#InvalidPublicKeyVersionException":
      response = await deserializeAws_json1_1InvalidPublicKeyVersionExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRegionException":
    case "com.amazonaws.marketplace.metering#InvalidRegionException":
      response = await deserializeAws_json1_1InvalidRegionExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "PlatformNotSupportedException":
    case "com.amazonaws.marketplace.metering#PlatformNotSupportedException":
      response = await deserializeAws_json1_1PlatformNotSupportedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.marketplace.metering#ThrottlingException":
      response = await deserializeAws_json1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.marketplace.metering#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ResolveCustomerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResolveCustomerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ResolveCustomerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ResolveCustomerResult(data, context);
  const response: ResolveCustomerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ResolveCustomerResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ResolveCustomerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResolveCustomerCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DisabledApiException":
    case "com.amazonaws.marketplace.metering#DisabledApiException":
      response = await deserializeAws_json1_1DisabledApiExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ExpiredTokenException":
    case "com.amazonaws.marketplace.metering#ExpiredTokenException":
      response = await deserializeAws_json1_1ExpiredTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.marketplace.metering#InternalServiceErrorException":
      response = await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTokenException":
    case "com.amazonaws.marketplace.metering#InvalidTokenException":
      response = await deserializeAws_json1_1InvalidTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.marketplace.metering#ThrottlingException":
      response = await deserializeAws_json1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.marketplace.metering#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_json1_1CustomerNotEntitledExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<CustomerNotEntitledException> => {
  const deserialized: any = deserializeAws_json1_1CustomerNotEntitledException(
    output.body,
    context
  );
  const contents: CustomerNotEntitledException = {
    __type: "CustomerNotEntitledException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DisabledApiExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DisabledApiException> => {
  const deserialized: any = deserializeAws_json1_1DisabledApiException(
    output.body,
    context
  );
  const contents: DisabledApiException = {
    __type: "DisabledApiException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DuplicateRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DuplicateRequestException> => {
  const deserialized: any = deserializeAws_json1_1DuplicateRequestException(
    output.body,
    context
  );
  const contents: DuplicateRequestException = {
    __type: "DuplicateRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ExpiredTokenExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ExpiredTokenException> => {
  const deserialized: any = deserializeAws_json1_1ExpiredTokenException(
    output.body,
    context
  );
  const contents: ExpiredTokenException = {
    __type: "ExpiredTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InternalServiceErrorExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServiceErrorException> => {
  const deserialized: any = deserializeAws_json1_1InternalServiceErrorException(
    output.body,
    context
  );
  const contents: InternalServiceErrorException = {
    __type: "InternalServiceErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidCustomerIdentifierExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidCustomerIdentifierException> => {
  const deserialized: any = deserializeAws_json1_1InvalidCustomerIdentifierException(
    output.body,
    context
  );
  const contents: InvalidCustomerIdentifierException = {
    __type: "InvalidCustomerIdentifierException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidEndpointRegionExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidEndpointRegionException> => {
  const deserialized: any = deserializeAws_json1_1InvalidEndpointRegionException(
    output.body,
    context
  );
  const contents: InvalidEndpointRegionException = {
    __type: "InvalidEndpointRegionException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidProductCodeExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidProductCodeException> => {
  const deserialized: any = deserializeAws_json1_1InvalidProductCodeException(
    output.body,
    context
  );
  const contents: InvalidProductCodeException = {
    __type: "InvalidProductCodeException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidPublicKeyVersionExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidPublicKeyVersionException> => {
  const deserialized: any = deserializeAws_json1_1InvalidPublicKeyVersionException(
    output.body,
    context
  );
  const contents: InvalidPublicKeyVersionException = {
    __type: "InvalidPublicKeyVersionException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidRegionExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidRegionException> => {
  const deserialized: any = deserializeAws_json1_1InvalidRegionException(
    output.body,
    context
  );
  const contents: InvalidRegionException = {
    __type: "InvalidRegionException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidTokenExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidTokenException> => {
  const deserialized: any = deserializeAws_json1_1InvalidTokenException(
    output.body,
    context
  );
  const contents: InvalidTokenException = {
    __type: "InvalidTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidUsageDimensionExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidUsageDimensionException> => {
  const deserialized: any = deserializeAws_json1_1InvalidUsageDimensionException(
    output.body,
    context
  );
  const contents: InvalidUsageDimensionException = {
    __type: "InvalidUsageDimensionException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1PlatformNotSupportedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<PlatformNotSupportedException> => {
  const deserialized: any = deserializeAws_json1_1PlatformNotSupportedException(
    output.body,
    context
  );
  const contents: PlatformNotSupportedException = {
    __type: "PlatformNotSupportedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ThrottlingExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const deserialized: any = deserializeAws_json1_1ThrottlingException(
    output.body,
    context
  );
  const contents: ThrottlingException = {
    __type: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TimestampOutOfBoundsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TimestampOutOfBoundsException> => {
  const deserialized: any = deserializeAws_json1_1TimestampOutOfBoundsException(
    output.body,
    context
  );
  const contents: TimestampOutOfBoundsException = {
    __type: "TimestampOutOfBoundsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1BatchMeterUsageRequest = (
  input: BatchMeterUsageRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ProductCode !== undefined) {
    bodyParams["ProductCode"] = input.ProductCode;
  }
  if (input.UsageRecords !== undefined) {
    bodyParams["UsageRecords"] = serializeAws_json1_1UsageRecordList(
      input.UsageRecords,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1MeterUsageRequest = (
  input: MeterUsageRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DryRun !== undefined) {
    bodyParams["DryRun"] = input.DryRun;
  }
  if (input.ProductCode !== undefined) {
    bodyParams["ProductCode"] = input.ProductCode;
  }
  if (input.Timestamp !== undefined) {
    bodyParams["Timestamp"] = Math.round(input.Timestamp.getTime() / 1000);
  }
  if (input.UsageDimension !== undefined) {
    bodyParams["UsageDimension"] = input.UsageDimension;
  }
  if (input.UsageQuantity !== undefined) {
    bodyParams["UsageQuantity"] = input.UsageQuantity;
  }
  return bodyParams;
};

const serializeAws_json1_1RegisterUsageRequest = (
  input: RegisterUsageRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Nonce !== undefined) {
    bodyParams["Nonce"] = input.Nonce;
  }
  if (input.ProductCode !== undefined) {
    bodyParams["ProductCode"] = input.ProductCode;
  }
  if (input.PublicKeyVersion !== undefined) {
    bodyParams["PublicKeyVersion"] = input.PublicKeyVersion;
  }
  return bodyParams;
};

const serializeAws_json1_1ResolveCustomerRequest = (
  input: ResolveCustomerRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.RegistrationToken !== undefined) {
    bodyParams["RegistrationToken"] = input.RegistrationToken;
  }
  return bodyParams;
};

const serializeAws_json1_1UsageRecord = (
  input: UsageRecord,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CustomerIdentifier !== undefined) {
    bodyParams["CustomerIdentifier"] = input.CustomerIdentifier;
  }
  if (input.Dimension !== undefined) {
    bodyParams["Dimension"] = input.Dimension;
  }
  if (input.Quantity !== undefined) {
    bodyParams["Quantity"] = input.Quantity;
  }
  if (input.Timestamp !== undefined) {
    bodyParams["Timestamp"] = Math.round(input.Timestamp.getTime() / 1000);
  }
  return bodyParams;
};

const serializeAws_json1_1UsageRecordList = (
  input: Array<UsageRecord>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1UsageRecord(entry, context)
  );
};

const deserializeAws_json1_1BatchMeterUsageResult = (
  output: any,
  context: __SerdeContext
): BatchMeterUsageResult => {
  let contents: any = {
    __type: "BatchMeterUsageResult",
    Results: undefined,
    UnprocessedRecords: undefined
  };
  if (output.Results !== undefined) {
    contents.Results = deserializeAws_json1_1UsageRecordResultList(
      output.Results,
      context
    );
  }
  if (output.UnprocessedRecords !== undefined) {
    contents.UnprocessedRecords = deserializeAws_json1_1UsageRecordList(
      output.UnprocessedRecords,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CustomerNotEntitledException = (
  output: any,
  context: __SerdeContext
): CustomerNotEntitledException => {
  let contents: any = {
    __type: "CustomerNotEntitledException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1DisabledApiException = (
  output: any,
  context: __SerdeContext
): DisabledApiException => {
  let contents: any = {
    __type: "DisabledApiException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1DuplicateRequestException = (
  output: any,
  context: __SerdeContext
): DuplicateRequestException => {
  let contents: any = {
    __type: "DuplicateRequestException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ExpiredTokenException = (
  output: any,
  context: __SerdeContext
): ExpiredTokenException => {
  let contents: any = {
    __type: "ExpiredTokenException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InternalServiceErrorException = (
  output: any,
  context: __SerdeContext
): InternalServiceErrorException => {
  let contents: any = {
    __type: "InternalServiceErrorException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidCustomerIdentifierException = (
  output: any,
  context: __SerdeContext
): InvalidCustomerIdentifierException => {
  let contents: any = {
    __type: "InvalidCustomerIdentifierException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidEndpointRegionException = (
  output: any,
  context: __SerdeContext
): InvalidEndpointRegionException => {
  let contents: any = {
    __type: "InvalidEndpointRegionException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidProductCodeException = (
  output: any,
  context: __SerdeContext
): InvalidProductCodeException => {
  let contents: any = {
    __type: "InvalidProductCodeException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidPublicKeyVersionException = (
  output: any,
  context: __SerdeContext
): InvalidPublicKeyVersionException => {
  let contents: any = {
    __type: "InvalidPublicKeyVersionException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidRegionException = (
  output: any,
  context: __SerdeContext
): InvalidRegionException => {
  let contents: any = {
    __type: "InvalidRegionException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidTokenException = (
  output: any,
  context: __SerdeContext
): InvalidTokenException => {
  let contents: any = {
    __type: "InvalidTokenException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidUsageDimensionException = (
  output: any,
  context: __SerdeContext
): InvalidUsageDimensionException => {
  let contents: any = {
    __type: "InvalidUsageDimensionException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1MeterUsageResult = (
  output: any,
  context: __SerdeContext
): MeterUsageResult => {
  let contents: any = {
    __type: "MeterUsageResult",
    MeteringRecordId: undefined
  };
  if (output.MeteringRecordId !== undefined) {
    contents.MeteringRecordId = output.MeteringRecordId;
  }
  return contents;
};

const deserializeAws_json1_1PlatformNotSupportedException = (
  output: any,
  context: __SerdeContext
): PlatformNotSupportedException => {
  let contents: any = {
    __type: "PlatformNotSupportedException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1RegisterUsageResult = (
  output: any,
  context: __SerdeContext
): RegisterUsageResult => {
  let contents: any = {
    __type: "RegisterUsageResult",
    PublicKeyRotationTimestamp: undefined,
    Signature: undefined
  };
  if (output.PublicKeyRotationTimestamp !== undefined) {
    contents.PublicKeyRotationTimestamp = new Date(
      output.PublicKeyRotationTimestamp % 1 != 0
        ? Math.round(output.PublicKeyRotationTimestamp * 1000)
        : output.PublicKeyRotationTimestamp
    );
  }
  if (output.Signature !== undefined) {
    contents.Signature = output.Signature;
  }
  return contents;
};

const deserializeAws_json1_1ResolveCustomerResult = (
  output: any,
  context: __SerdeContext
): ResolveCustomerResult => {
  let contents: any = {
    __type: "ResolveCustomerResult",
    CustomerIdentifier: undefined,
    ProductCode: undefined
  };
  if (output.CustomerIdentifier !== undefined) {
    contents.CustomerIdentifier = output.CustomerIdentifier;
  }
  if (output.ProductCode !== undefined) {
    contents.ProductCode = output.ProductCode;
  }
  return contents;
};

const deserializeAws_json1_1ThrottlingException = (
  output: any,
  context: __SerdeContext
): ThrottlingException => {
  let contents: any = {
    __type: "ThrottlingException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1TimestampOutOfBoundsException = (
  output: any,
  context: __SerdeContext
): TimestampOutOfBoundsException => {
  let contents: any = {
    __type: "TimestampOutOfBoundsException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1UsageRecord = (
  output: any,
  context: __SerdeContext
): UsageRecord => {
  let contents: any = {
    __type: "UsageRecord",
    CustomerIdentifier: undefined,
    Dimension: undefined,
    Quantity: undefined,
    Timestamp: undefined
  };
  if (output.CustomerIdentifier !== undefined) {
    contents.CustomerIdentifier = output.CustomerIdentifier;
  }
  if (output.Dimension !== undefined) {
    contents.Dimension = output.Dimension;
  }
  if (output.Quantity !== undefined) {
    contents.Quantity = output.Quantity;
  }
  if (output.Timestamp !== undefined) {
    contents.Timestamp = new Date(
      output.Timestamp % 1 != 0
        ? Math.round(output.Timestamp * 1000)
        : output.Timestamp
    );
  }
  return contents;
};

const deserializeAws_json1_1UsageRecordList = (
  output: any,
  context: __SerdeContext
): Array<UsageRecord> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1UsageRecord(entry, context)
  );
};

const deserializeAws_json1_1UsageRecordResult = (
  output: any,
  context: __SerdeContext
): UsageRecordResult => {
  let contents: any = {
    __type: "UsageRecordResult",
    MeteringRecordId: undefined,
    Status: undefined,
    UsageRecord: undefined
  };
  if (output.MeteringRecordId !== undefined) {
    contents.MeteringRecordId = output.MeteringRecordId;
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  if (output.UsageRecord !== undefined) {
    contents.UsageRecord = deserializeAws_json1_1UsageRecord(
      output.UsageRecord,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1UsageRecordResultList = (
  output: any,
  context: __SerdeContext
): Array<UsageRecordResult> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1UsageRecordResult(entry, context)
  );
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
