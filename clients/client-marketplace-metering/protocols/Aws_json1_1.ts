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
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1BatchMeterUsageCommand(
  input: BatchMeterUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSMPMeteringService.BatchMeterUsage";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchMeterUsageRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1MeterUsageCommand(
  input: MeterUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSMPMeteringService.MeterUsage";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1MeterUsageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RegisterUsageCommand(
  input: RegisterUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSMPMeteringService.RegisterUsage";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RegisterUsageRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ResolveCustomerCommand(
  input: ResolveCustomerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSMPMeteringService.ResolveCustomer";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ResolveCustomerRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
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
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DisabledApiException":
    case "com.amazonaws.marketplace.metering#DisabledApiException":
      response = {
        ...(await deserializeAws_json1_1DisabledApiExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.marketplace.metering#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidCustomerIdentifierException":
    case "com.amazonaws.marketplace.metering#InvalidCustomerIdentifierException":
      response = {
        ...(await deserializeAws_json1_1InvalidCustomerIdentifierExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidProductCodeException":
    case "com.amazonaws.marketplace.metering#InvalidProductCodeException":
      response = {
        ...(await deserializeAws_json1_1InvalidProductCodeExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidUsageDimensionException":
    case "com.amazonaws.marketplace.metering#InvalidUsageDimensionException":
      response = {
        ...(await deserializeAws_json1_1InvalidUsageDimensionExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.marketplace.metering#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TimestampOutOfBoundsException":
    case "com.amazonaws.marketplace.metering#TimestampOutOfBoundsException":
      response = {
        ...(await deserializeAws_json1_1TimestampOutOfBoundsExceptionResponse(
          parsedOutput,
          context
        )),
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
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CustomerNotEntitledException":
    case "com.amazonaws.marketplace.metering#CustomerNotEntitledException":
      response = {
        ...(await deserializeAws_json1_1CustomerNotEntitledExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DuplicateRequestException":
    case "com.amazonaws.marketplace.metering#DuplicateRequestException":
      response = {
        ...(await deserializeAws_json1_1DuplicateRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.marketplace.metering#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEndpointRegionException":
    case "com.amazonaws.marketplace.metering#InvalidEndpointRegionException":
      response = {
        ...(await deserializeAws_json1_1InvalidEndpointRegionExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidProductCodeException":
    case "com.amazonaws.marketplace.metering#InvalidProductCodeException":
      response = {
        ...(await deserializeAws_json1_1InvalidProductCodeExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidUsageDimensionException":
    case "com.amazonaws.marketplace.metering#InvalidUsageDimensionException":
      response = {
        ...(await deserializeAws_json1_1InvalidUsageDimensionExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.marketplace.metering#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TimestampOutOfBoundsException":
    case "com.amazonaws.marketplace.metering#TimestampOutOfBoundsException":
      response = {
        ...(await deserializeAws_json1_1TimestampOutOfBoundsExceptionResponse(
          parsedOutput,
          context
        )),
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
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CustomerNotEntitledException":
    case "com.amazonaws.marketplace.metering#CustomerNotEntitledException":
      response = {
        ...(await deserializeAws_json1_1CustomerNotEntitledExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DisabledApiException":
    case "com.amazonaws.marketplace.metering#DisabledApiException":
      response = {
        ...(await deserializeAws_json1_1DisabledApiExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.marketplace.metering#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidProductCodeException":
    case "com.amazonaws.marketplace.metering#InvalidProductCodeException":
      response = {
        ...(await deserializeAws_json1_1InvalidProductCodeExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPublicKeyVersionException":
    case "com.amazonaws.marketplace.metering#InvalidPublicKeyVersionException":
      response = {
        ...(await deserializeAws_json1_1InvalidPublicKeyVersionExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRegionException":
    case "com.amazonaws.marketplace.metering#InvalidRegionException":
      response = {
        ...(await deserializeAws_json1_1InvalidRegionExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PlatformNotSupportedException":
    case "com.amazonaws.marketplace.metering#PlatformNotSupportedException":
      response = {
        ...(await deserializeAws_json1_1PlatformNotSupportedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.marketplace.metering#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
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
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DisabledApiException":
    case "com.amazonaws.marketplace.metering#DisabledApiException":
      response = {
        ...(await deserializeAws_json1_1DisabledApiExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ExpiredTokenException":
    case "com.amazonaws.marketplace.metering#ExpiredTokenException":
      response = {
        ...(await deserializeAws_json1_1ExpiredTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.marketplace.metering#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTokenException":
    case "com.amazonaws.marketplace.metering#InvalidTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.marketplace.metering#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
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
}

const deserializeAws_json1_1CustomerNotEntitledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomerNotEntitledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CustomerNotEntitledException(
    body,
    context
  );
  const contents: CustomerNotEntitledException = {
    name: "CustomerNotEntitledException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DisabledApiExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DisabledApiException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DisabledApiException(
    body,
    context
  );
  const contents: DisabledApiException = {
    name: "DisabledApiException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DuplicateRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DuplicateRequestException(
    body,
    context
  );
  const contents: DuplicateRequestException = {
    name: "DuplicateRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ExpiredTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExpiredTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ExpiredTokenException(
    body,
    context
  );
  const contents: ExpiredTokenException = {
    name: "ExpiredTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InternalServiceErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServiceErrorException(
    body,
    context
  );
  const contents: InternalServiceErrorException = {
    name: "InternalServiceErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidCustomerIdentifierExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCustomerIdentifierException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidCustomerIdentifierException(
    body,
    context
  );
  const contents: InvalidCustomerIdentifierException = {
    name: "InvalidCustomerIdentifierException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidEndpointRegionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEndpointRegionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidEndpointRegionException(
    body,
    context
  );
  const contents: InvalidEndpointRegionException = {
    name: "InvalidEndpointRegionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidProductCodeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidProductCodeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidProductCodeException(
    body,
    context
  );
  const contents: InvalidProductCodeException = {
    name: "InvalidProductCodeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidPublicKeyVersionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPublicKeyVersionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidPublicKeyVersionException(
    body,
    context
  );
  const contents: InvalidPublicKeyVersionException = {
    name: "InvalidPublicKeyVersionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidRegionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRegionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRegionException(
    body,
    context
  );
  const contents: InvalidRegionException = {
    name: "InvalidRegionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTokenException(
    body,
    context
  );
  const contents: InvalidTokenException = {
    name: "InvalidTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidUsageDimensionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidUsageDimensionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidUsageDimensionException(
    body,
    context
  );
  const contents: InvalidUsageDimensionException = {
    name: "InvalidUsageDimensionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1PlatformNotSupportedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PlatformNotSupportedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PlatformNotSupportedException(
    body,
    context
  );
  const contents: PlatformNotSupportedException = {
    name: "PlatformNotSupportedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ThrottlingException(
    body,
    context
  );
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TimestampOutOfBoundsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TimestampOutOfBoundsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TimestampOutOfBoundsException(
    body,
    context
  );
  const contents: TimestampOutOfBoundsException = {
    name: "TimestampOutOfBoundsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1BatchMeterUsageRequest = (
  input: BatchMeterUsageRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
  if (input.RegistrationToken !== undefined) {
    bodyParams["RegistrationToken"] = input.RegistrationToken;
  }
  return bodyParams;
};

const serializeAws_json1_1UsageRecord = (
  input: UsageRecord,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1UsageRecord(entry, context));
  }
  return contents;
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
  if (output.Results !== undefined && output.Results !== null) {
    contents.Results = deserializeAws_json1_1UsageRecordResultList(
      output.Results,
      context
    );
  }
  if (
    output.UnprocessedRecords !== undefined &&
    output.UnprocessedRecords !== null
  ) {
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
  if (output.message !== undefined && output.message !== null) {
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
  if (output.message !== undefined && output.message !== null) {
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
  if (output.message !== undefined && output.message !== null) {
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
  if (output.message !== undefined && output.message !== null) {
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
  if (output.message !== undefined && output.message !== null) {
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
  if (output.message !== undefined && output.message !== null) {
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
  if (output.message !== undefined && output.message !== null) {
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
  if (output.message !== undefined && output.message !== null) {
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
  if (output.message !== undefined && output.message !== null) {
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
  if (output.message !== undefined && output.message !== null) {
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
  if (output.message !== undefined && output.message !== null) {
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
  if (output.message !== undefined && output.message !== null) {
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
  if (
    output.MeteringRecordId !== undefined &&
    output.MeteringRecordId !== null
  ) {
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
  if (output.message !== undefined && output.message !== null) {
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
  if (
    output.PublicKeyRotationTimestamp !== undefined &&
    output.PublicKeyRotationTimestamp !== null
  ) {
    contents.PublicKeyRotationTimestamp = new Date(
      Math.round(output.PublicKeyRotationTimestamp * 1000)
    );
  }
  if (output.Signature !== undefined && output.Signature !== null) {
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
  if (
    output.CustomerIdentifier !== undefined &&
    output.CustomerIdentifier !== null
  ) {
    contents.CustomerIdentifier = output.CustomerIdentifier;
  }
  if (output.ProductCode !== undefined && output.ProductCode !== null) {
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
  if (output.message !== undefined && output.message !== null) {
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
  if (output.message !== undefined && output.message !== null) {
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
  if (
    output.CustomerIdentifier !== undefined &&
    output.CustomerIdentifier !== null
  ) {
    contents.CustomerIdentifier = output.CustomerIdentifier;
  }
  if (output.Dimension !== undefined && output.Dimension !== null) {
    contents.Dimension = output.Dimension;
  }
  if (output.Quantity !== undefined && output.Quantity !== null) {
    contents.Quantity = output.Quantity;
  }
  if (output.Timestamp !== undefined && output.Timestamp !== null) {
    contents.Timestamp = new Date(Math.round(output.Timestamp * 1000));
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
  if (
    output.MeteringRecordId !== undefined &&
    output.MeteringRecordId !== null
  ) {
    contents.MeteringRecordId = output.MeteringRecordId;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.UsageRecord !== undefined && output.UsageRecord !== null) {
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

const buildHttpRpcRequest = (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): __HttpRequest => {
  const contents: any = {
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: path,
    headers: headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
