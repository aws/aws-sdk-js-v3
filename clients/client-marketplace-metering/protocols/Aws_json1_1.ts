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

export const serializeAws_json1_1BatchMeterUsageCommand = async (
  input: BatchMeterUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSMPMeteringService.BatchMeterUsage"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchMeterUsageRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1MeterUsageCommand = async (
  input: MeterUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSMPMeteringService.MeterUsage"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSMPMeteringService.RegisterUsage"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RegisterUsageRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ResolveCustomerCommand = async (
  input: ResolveCustomerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSMPMeteringService.ResolveCustomer"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ResolveCustomerRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1BatchMeterUsageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchMeterUsageCommandOutput> => {
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
};

const deserializeAws_json1_1BatchMeterUsageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchMeterUsageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DisabledApiException":
    case "com.amazonaws.marketplacemetering#DisabledApiException":
      response = {
        ...(await deserializeAws_json1_1DisabledApiExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.marketplacemetering#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidCustomerIdentifierException":
    case "com.amazonaws.marketplacemetering#InvalidCustomerIdentifierException":
      response = {
        ...(await deserializeAws_json1_1InvalidCustomerIdentifierExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidProductCodeException":
    case "com.amazonaws.marketplacemetering#InvalidProductCodeException":
      response = {
        ...(await deserializeAws_json1_1InvalidProductCodeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidUsageDimensionException":
    case "com.amazonaws.marketplacemetering#InvalidUsageDimensionException":
      response = {
        ...(await deserializeAws_json1_1InvalidUsageDimensionExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.marketplacemetering#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TimestampOutOfBoundsException":
    case "com.amazonaws.marketplacemetering#TimestampOutOfBoundsException":
      response = {
        ...(await deserializeAws_json1_1TimestampOutOfBoundsExceptionResponse(
          parsedOutput,
          context
        )),
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

export const deserializeAws_json1_1MeterUsageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MeterUsageCommandOutput> => {
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
};

const deserializeAws_json1_1MeterUsageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MeterUsageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CustomerNotEntitledException":
    case "com.amazonaws.marketplacemetering#CustomerNotEntitledException":
      response = {
        ...(await deserializeAws_json1_1CustomerNotEntitledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DuplicateRequestException":
    case "com.amazonaws.marketplacemetering#DuplicateRequestException":
      response = {
        ...(await deserializeAws_json1_1DuplicateRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.marketplacemetering#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEndpointRegionException":
    case "com.amazonaws.marketplacemetering#InvalidEndpointRegionException":
      response = {
        ...(await deserializeAws_json1_1InvalidEndpointRegionExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidProductCodeException":
    case "com.amazonaws.marketplacemetering#InvalidProductCodeException":
      response = {
        ...(await deserializeAws_json1_1InvalidProductCodeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidUsageDimensionException":
    case "com.amazonaws.marketplacemetering#InvalidUsageDimensionException":
      response = {
        ...(await deserializeAws_json1_1InvalidUsageDimensionExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.marketplacemetering#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TimestampOutOfBoundsException":
    case "com.amazonaws.marketplacemetering#TimestampOutOfBoundsException":
      response = {
        ...(await deserializeAws_json1_1TimestampOutOfBoundsExceptionResponse(
          parsedOutput,
          context
        )),
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

export const deserializeAws_json1_1RegisterUsageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterUsageCommandOutput> => {
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
};

const deserializeAws_json1_1RegisterUsageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterUsageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CustomerNotEntitledException":
    case "com.amazonaws.marketplacemetering#CustomerNotEntitledException":
      response = {
        ...(await deserializeAws_json1_1CustomerNotEntitledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DisabledApiException":
    case "com.amazonaws.marketplacemetering#DisabledApiException":
      response = {
        ...(await deserializeAws_json1_1DisabledApiExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.marketplacemetering#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidProductCodeException":
    case "com.amazonaws.marketplacemetering#InvalidProductCodeException":
      response = {
        ...(await deserializeAws_json1_1InvalidProductCodeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPublicKeyVersionException":
    case "com.amazonaws.marketplacemetering#InvalidPublicKeyVersionException":
      response = {
        ...(await deserializeAws_json1_1InvalidPublicKeyVersionExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRegionException":
    case "com.amazonaws.marketplacemetering#InvalidRegionException":
      response = {
        ...(await deserializeAws_json1_1InvalidRegionExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PlatformNotSupportedException":
    case "com.amazonaws.marketplacemetering#PlatformNotSupportedException":
      response = {
        ...(await deserializeAws_json1_1PlatformNotSupportedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.marketplacemetering#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
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

export const deserializeAws_json1_1ResolveCustomerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResolveCustomerCommandOutput> => {
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
};

const deserializeAws_json1_1ResolveCustomerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResolveCustomerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DisabledApiException":
    case "com.amazonaws.marketplacemetering#DisabledApiException":
      response = {
        ...(await deserializeAws_json1_1DisabledApiExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ExpiredTokenException":
    case "com.amazonaws.marketplacemetering#ExpiredTokenException":
      response = {
        ...(await deserializeAws_json1_1ExpiredTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.marketplacemetering#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTokenException":
    case "com.amazonaws.marketplacemetering#InvalidTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.marketplacemetering#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
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
  return {
    ...(input.ProductCode !== undefined && { ProductCode: input.ProductCode }),
    ...(input.UsageRecords !== undefined && {
      UsageRecords: serializeAws_json1_1UsageRecordList(
        input.UsageRecords,
        context
      )
    })
  };
};

const serializeAws_json1_1MeterUsageRequest = (
  input: MeterUsageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DryRun !== undefined && { DryRun: input.DryRun }),
    ...(input.ProductCode !== undefined && { ProductCode: input.ProductCode }),
    ...(input.Timestamp !== undefined && {
      Timestamp: Math.round(input.Timestamp.getTime() / 1000)
    }),
    ...(input.UsageDimension !== undefined && {
      UsageDimension: input.UsageDimension
    }),
    ...(input.UsageQuantity !== undefined && {
      UsageQuantity: input.UsageQuantity
    })
  };
};

const serializeAws_json1_1RegisterUsageRequest = (
  input: RegisterUsageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Nonce !== undefined && { Nonce: input.Nonce }),
    ...(input.ProductCode !== undefined && { ProductCode: input.ProductCode }),
    ...(input.PublicKeyVersion !== undefined && {
      PublicKeyVersion: input.PublicKeyVersion
    })
  };
};

const serializeAws_json1_1ResolveCustomerRequest = (
  input: ResolveCustomerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.RegistrationToken !== undefined && {
      RegistrationToken: input.RegistrationToken
    })
  };
};

const serializeAws_json1_1UsageRecord = (
  input: UsageRecord,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomerIdentifier !== undefined && {
      CustomerIdentifier: input.CustomerIdentifier
    }),
    ...(input.Dimension !== undefined && { Dimension: input.Dimension }),
    ...(input.Quantity !== undefined && { Quantity: input.Quantity }),
    ...(input.Timestamp !== undefined && {
      Timestamp: Math.round(input.Timestamp.getTime() / 1000)
    })
  };
};

const serializeAws_json1_1UsageRecordList = (
  input: UsageRecord[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1UsageRecord(entry, context));
};

const deserializeAws_json1_1BatchMeterUsageResult = (
  output: any,
  context: __SerdeContext
): BatchMeterUsageResult => {
  return {
    __type: "BatchMeterUsageResult",
    Results:
      output.Results !== undefined && output.Results !== null
        ? deserializeAws_json1_1UsageRecordResultList(output.Results, context)
        : undefined,
    UnprocessedRecords:
      output.UnprocessedRecords !== undefined &&
      output.UnprocessedRecords !== null
        ? deserializeAws_json1_1UsageRecordList(
            output.UnprocessedRecords,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1CustomerNotEntitledException = (
  output: any,
  context: __SerdeContext
): CustomerNotEntitledException => {
  return {
    __type: "CustomerNotEntitledException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1DisabledApiException = (
  output: any,
  context: __SerdeContext
): DisabledApiException => {
  return {
    __type: "DisabledApiException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1DuplicateRequestException = (
  output: any,
  context: __SerdeContext
): DuplicateRequestException => {
  return {
    __type: "DuplicateRequestException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ExpiredTokenException = (
  output: any,
  context: __SerdeContext
): ExpiredTokenException => {
  return {
    __type: "ExpiredTokenException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InternalServiceErrorException = (
  output: any,
  context: __SerdeContext
): InternalServiceErrorException => {
  return {
    __type: "InternalServiceErrorException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidCustomerIdentifierException = (
  output: any,
  context: __SerdeContext
): InvalidCustomerIdentifierException => {
  return {
    __type: "InvalidCustomerIdentifierException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidEndpointRegionException = (
  output: any,
  context: __SerdeContext
): InvalidEndpointRegionException => {
  return {
    __type: "InvalidEndpointRegionException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidProductCodeException = (
  output: any,
  context: __SerdeContext
): InvalidProductCodeException => {
  return {
    __type: "InvalidProductCodeException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidPublicKeyVersionException = (
  output: any,
  context: __SerdeContext
): InvalidPublicKeyVersionException => {
  return {
    __type: "InvalidPublicKeyVersionException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidRegionException = (
  output: any,
  context: __SerdeContext
): InvalidRegionException => {
  return {
    __type: "InvalidRegionException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidTokenException = (
  output: any,
  context: __SerdeContext
): InvalidTokenException => {
  return {
    __type: "InvalidTokenException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidUsageDimensionException = (
  output: any,
  context: __SerdeContext
): InvalidUsageDimensionException => {
  return {
    __type: "InvalidUsageDimensionException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1MeterUsageResult = (
  output: any,
  context: __SerdeContext
): MeterUsageResult => {
  return {
    __type: "MeterUsageResult",
    MeteringRecordId:
      output.MeteringRecordId !== undefined && output.MeteringRecordId !== null
        ? output.MeteringRecordId
        : undefined
  } as any;
};

const deserializeAws_json1_1PlatformNotSupportedException = (
  output: any,
  context: __SerdeContext
): PlatformNotSupportedException => {
  return {
    __type: "PlatformNotSupportedException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1RegisterUsageResult = (
  output: any,
  context: __SerdeContext
): RegisterUsageResult => {
  return {
    __type: "RegisterUsageResult",
    PublicKeyRotationTimestamp:
      output.PublicKeyRotationTimestamp !== undefined &&
      output.PublicKeyRotationTimestamp !== null
        ? new Date(Math.round(output.PublicKeyRotationTimestamp * 1000))
        : undefined,
    Signature:
      output.Signature !== undefined && output.Signature !== null
        ? output.Signature
        : undefined
  } as any;
};

const deserializeAws_json1_1ResolveCustomerResult = (
  output: any,
  context: __SerdeContext
): ResolveCustomerResult => {
  return {
    __type: "ResolveCustomerResult",
    CustomerIdentifier:
      output.CustomerIdentifier !== undefined &&
      output.CustomerIdentifier !== null
        ? output.CustomerIdentifier
        : undefined,
    ProductCode:
      output.ProductCode !== undefined && output.ProductCode !== null
        ? output.ProductCode
        : undefined
  } as any;
};

const deserializeAws_json1_1ThrottlingException = (
  output: any,
  context: __SerdeContext
): ThrottlingException => {
  return {
    __type: "ThrottlingException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1TimestampOutOfBoundsException = (
  output: any,
  context: __SerdeContext
): TimestampOutOfBoundsException => {
  return {
    __type: "TimestampOutOfBoundsException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1UsageRecord = (
  output: any,
  context: __SerdeContext
): UsageRecord => {
  return {
    __type: "UsageRecord",
    CustomerIdentifier:
      output.CustomerIdentifier !== undefined &&
      output.CustomerIdentifier !== null
        ? output.CustomerIdentifier
        : undefined,
    Dimension:
      output.Dimension !== undefined && output.Dimension !== null
        ? output.Dimension
        : undefined,
    Quantity:
      output.Quantity !== undefined && output.Quantity !== null
        ? output.Quantity
        : undefined,
    Timestamp:
      output.Timestamp !== undefined && output.Timestamp !== null
        ? new Date(Math.round(output.Timestamp * 1000))
        : undefined
  } as any;
};

const deserializeAws_json1_1UsageRecordList = (
  output: any,
  context: __SerdeContext
): UsageRecord[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1UsageRecord(entry, context)
  );
};

const deserializeAws_json1_1UsageRecordResult = (
  output: any,
  context: __SerdeContext
): UsageRecordResult => {
  return {
    __type: "UsageRecordResult",
    MeteringRecordId:
      output.MeteringRecordId !== undefined && output.MeteringRecordId !== null
        ? output.MeteringRecordId
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined,
    UsageRecord:
      output.UsageRecord !== undefined && output.UsageRecord !== null
        ? deserializeAws_json1_1UsageRecord(output.UsageRecord, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1UsageRecordResultList = (
  output: any,
  context: __SerdeContext
): UsageRecordResult[] => {
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
  streamBody: any = new Uint8Array(),
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
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
    headers
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
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
