import {
  DescribeEntitiesDetectionV2JobCommandInput,
  DescribeEntitiesDetectionV2JobCommandOutput
} from "../commands/DescribeEntitiesDetectionV2JobCommand";
import {
  DescribePHIDetectionJobCommandInput,
  DescribePHIDetectionJobCommandOutput
} from "../commands/DescribePHIDetectionJobCommand";
import {
  DetectEntitiesCommandInput,
  DetectEntitiesCommandOutput
} from "../commands/DetectEntitiesCommand";
import {
  DetectEntitiesV2CommandInput,
  DetectEntitiesV2CommandOutput
} from "../commands/DetectEntitiesV2Command";
import {
  DetectPHICommandInput,
  DetectPHICommandOutput
} from "../commands/DetectPHICommand";
import {
  InferICD10CMCommandInput,
  InferICD10CMCommandOutput
} from "../commands/InferICD10CMCommand";
import {
  InferRxNormCommandInput,
  InferRxNormCommandOutput
} from "../commands/InferRxNormCommand";
import {
  ListEntitiesDetectionV2JobsCommandInput,
  ListEntitiesDetectionV2JobsCommandOutput
} from "../commands/ListEntitiesDetectionV2JobsCommand";
import {
  ListPHIDetectionJobsCommandInput,
  ListPHIDetectionJobsCommandOutput
} from "../commands/ListPHIDetectionJobsCommand";
import {
  StartEntitiesDetectionV2JobCommandInput,
  StartEntitiesDetectionV2JobCommandOutput
} from "../commands/StartEntitiesDetectionV2JobCommand";
import {
  StartPHIDetectionJobCommandInput,
  StartPHIDetectionJobCommandOutput
} from "../commands/StartPHIDetectionJobCommand";
import {
  StopEntitiesDetectionV2JobCommandInput,
  StopEntitiesDetectionV2JobCommandOutput
} from "../commands/StopEntitiesDetectionV2JobCommand";
import {
  StopPHIDetectionJobCommandInput,
  StopPHIDetectionJobCommandOutput
} from "../commands/StopPHIDetectionJobCommand";
import {
  Attribute,
  ComprehendMedicalAsyncJobFilter,
  ComprehendMedicalAsyncJobProperties,
  DescribeEntitiesDetectionV2JobRequest,
  DescribeEntitiesDetectionV2JobResponse,
  DescribePHIDetectionJobRequest,
  DescribePHIDetectionJobResponse,
  DetectEntitiesRequest,
  DetectEntitiesResponse,
  DetectEntitiesV2Request,
  DetectEntitiesV2Response,
  DetectPHIRequest,
  DetectPHIResponse,
  Entity,
  ICD10CMAttribute,
  ICD10CMConcept,
  ICD10CMEntity,
  ICD10CMTrait,
  InferICD10CMRequest,
  InferICD10CMResponse,
  InferRxNormRequest,
  InferRxNormResponse,
  InputDataConfig,
  InternalServerException,
  InvalidEncodingException,
  InvalidRequestException,
  ListEntitiesDetectionV2JobsRequest,
  ListEntitiesDetectionV2JobsResponse,
  ListPHIDetectionJobsRequest,
  ListPHIDetectionJobsResponse,
  OutputDataConfig,
  ResourceNotFoundException,
  RxNormAttribute,
  RxNormConcept,
  RxNormEntity,
  RxNormTrait,
  ServiceUnavailableException,
  StartEntitiesDetectionV2JobRequest,
  StartEntitiesDetectionV2JobResponse,
  StartPHIDetectionJobRequest,
  StartPHIDetectionJobResponse,
  StopEntitiesDetectionV2JobRequest,
  StopEntitiesDetectionV2JobResponse,
  StopPHIDetectionJobRequest,
  StopPHIDetectionJobResponse,
  TextSizeLimitExceededException,
  TooManyRequestsException,
  Trait,
  UnmappedAttribute,
  ValidationException
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
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_json1_1DescribeEntitiesDetectionV2JobCommand = async (
  input: DescribeEntitiesDetectionV2JobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeEntitiesDetectionV2JobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribePHIDetectionJobCommand = async (
  input: DescribePHIDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ComprehendMedical_20181030.DescribePHIDetectionJob"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribePHIDetectionJobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DetectEntitiesCommand = async (
  input: DetectEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ComprehendMedical_20181030.DetectEntities"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DetectEntitiesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DetectEntitiesV2Command = async (
  input: DetectEntitiesV2CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ComprehendMedical_20181030.DetectEntitiesV2"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DetectEntitiesV2Request(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DetectPHICommand = async (
  input: DetectPHICommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ComprehendMedical_20181030.DetectPHI"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DetectPHIRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1InferICD10CMCommand = async (
  input: InferICD10CMCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ComprehendMedical_20181030.InferICD10CM"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1InferICD10CMRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1InferRxNormCommand = async (
  input: InferRxNormCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ComprehendMedical_20181030.InferRxNorm"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1InferRxNormRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListEntitiesDetectionV2JobsCommand = async (
  input: ListEntitiesDetectionV2JobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListEntitiesDetectionV2JobsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListPHIDetectionJobsCommand = async (
  input: ListPHIDetectionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ComprehendMedical_20181030.ListPHIDetectionJobs"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListPHIDetectionJobsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartEntitiesDetectionV2JobCommand = async (
  input: StartEntitiesDetectionV2JobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ComprehendMedical_20181030.StartEntitiesDetectionV2Job"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StartEntitiesDetectionV2JobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartPHIDetectionJobCommand = async (
  input: StartPHIDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ComprehendMedical_20181030.StartPHIDetectionJob"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StartPHIDetectionJobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopEntitiesDetectionV2JobCommand = async (
  input: StopEntitiesDetectionV2JobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ComprehendMedical_20181030.StopEntitiesDetectionV2Job"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StopEntitiesDetectionV2JobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopPHIDetectionJobCommand = async (
  input: StopPHIDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ComprehendMedical_20181030.StopPHIDetectionJob"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StopPHIDetectionJobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1DescribeEntitiesDetectionV2JobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEntitiesDetectionV2JobCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeEntitiesDetectionV2JobCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEntitiesDetectionV2JobResponse(
    data,
    context
  );
  const response: DescribeEntitiesDetectionV2JobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeEntitiesDetectionV2JobResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEntitiesDetectionV2JobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEntitiesDetectionV2JobCommandOutput> => {
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
    case "InternalServerException":
    case "com.amazonaws.comprehendmedical#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_json1_1DescribePHIDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePHIDetectionJobCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribePHIDetectionJobCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribePHIDetectionJobResponse(
    data,
    context
  );
  const response: DescribePHIDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribePHIDetectionJobResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribePHIDetectionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePHIDetectionJobCommandOutput> => {
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
    case "InternalServerException":
    case "com.amazonaws.comprehendmedical#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_json1_1DetectEntitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectEntitiesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DetectEntitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetectEntitiesResponse(data, context);
  const response: DetectEntitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetectEntitiesResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DetectEntitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectEntitiesCommandOutput> => {
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
    case "InternalServerException":
    case "com.amazonaws.comprehendmedical#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEncodingException":
    case "com.amazonaws.comprehendmedical#InvalidEncodingException":
      response = {
        ...(await deserializeAws_json1_1InvalidEncodingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.comprehendmedical#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehendmedical#TextSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_json1_1DetectEntitiesV2Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectEntitiesV2CommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DetectEntitiesV2CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetectEntitiesV2Response(data, context);
  const response: DetectEntitiesV2CommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetectEntitiesV2Response",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DetectEntitiesV2CommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectEntitiesV2CommandOutput> => {
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
    case "InternalServerException":
    case "com.amazonaws.comprehendmedical#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEncodingException":
    case "com.amazonaws.comprehendmedical#InvalidEncodingException":
      response = {
        ...(await deserializeAws_json1_1InvalidEncodingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.comprehendmedical#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehendmedical#TextSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_json1_1DetectPHICommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectPHICommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DetectPHICommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetectPHIResponse(data, context);
  const response: DetectPHICommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetectPHIResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DetectPHICommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectPHICommandOutput> => {
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
    case "InternalServerException":
    case "com.amazonaws.comprehendmedical#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEncodingException":
    case "com.amazonaws.comprehendmedical#InvalidEncodingException":
      response = {
        ...(await deserializeAws_json1_1InvalidEncodingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.comprehendmedical#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehendmedical#TextSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_json1_1InferICD10CMCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InferICD10CMCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1InferICD10CMCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1InferICD10CMResponse(data, context);
  const response: InferICD10CMCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "InferICD10CMResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1InferICD10CMCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InferICD10CMCommandOutput> => {
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
    case "InternalServerException":
    case "com.amazonaws.comprehendmedical#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEncodingException":
    case "com.amazonaws.comprehendmedical#InvalidEncodingException":
      response = {
        ...(await deserializeAws_json1_1InvalidEncodingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.comprehendmedical#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehendmedical#TextSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_json1_1InferRxNormCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InferRxNormCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1InferRxNormCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1InferRxNormResponse(data, context);
  const response: InferRxNormCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "InferRxNormResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1InferRxNormCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InferRxNormCommandOutput> => {
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
    case "InternalServerException":
    case "com.amazonaws.comprehendmedical#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEncodingException":
    case "com.amazonaws.comprehendmedical#InvalidEncodingException":
      response = {
        ...(await deserializeAws_json1_1InvalidEncodingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.comprehendmedical#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehendmedical#TextSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_json1_1ListEntitiesDetectionV2JobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntitiesDetectionV2JobsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListEntitiesDetectionV2JobsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListEntitiesDetectionV2JobsResponse(
    data,
    context
  );
  const response: ListEntitiesDetectionV2JobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListEntitiesDetectionV2JobsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListEntitiesDetectionV2JobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntitiesDetectionV2JobsCommandOutput> => {
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
    case "InternalServerException":
    case "com.amazonaws.comprehendmedical#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.comprehendmedical#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export const deserializeAws_json1_1ListPHIDetectionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPHIDetectionJobsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListPHIDetectionJobsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPHIDetectionJobsResponse(data, context);
  const response: ListPHIDetectionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPHIDetectionJobsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListPHIDetectionJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPHIDetectionJobsCommandOutput> => {
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
    case "InternalServerException":
    case "com.amazonaws.comprehendmedical#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.comprehendmedical#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export const deserializeAws_json1_1StartEntitiesDetectionV2JobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartEntitiesDetectionV2JobCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartEntitiesDetectionV2JobCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartEntitiesDetectionV2JobResponse(
    data,
    context
  );
  const response: StartEntitiesDetectionV2JobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartEntitiesDetectionV2JobResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartEntitiesDetectionV2JobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartEntitiesDetectionV2JobCommandOutput> => {
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
    case "InternalServerException":
    case "com.amazonaws.comprehendmedical#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_json1_1StartPHIDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPHIDetectionJobCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartPHIDetectionJobCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartPHIDetectionJobResponse(data, context);
  const response: StartPHIDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartPHIDetectionJobResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartPHIDetectionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPHIDetectionJobCommandOutput> => {
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
    case "InternalServerException":
    case "com.amazonaws.comprehendmedical#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_json1_1StopEntitiesDetectionV2JobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopEntitiesDetectionV2JobCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopEntitiesDetectionV2JobCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopEntitiesDetectionV2JobResponse(
    data,
    context
  );
  const response: StopEntitiesDetectionV2JobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopEntitiesDetectionV2JobResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopEntitiesDetectionV2JobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopEntitiesDetectionV2JobCommandOutput> => {
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
    case "InternalServerException":
    case "com.amazonaws.comprehendmedical#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1StopPHIDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopPHIDetectionJobCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopPHIDetectionJobCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopPHIDetectionJobResponse(data, context);
  const response: StopPHIDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopPHIDetectionJobResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopPHIDetectionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopPHIDetectionJobCommandOutput> => {
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
    case "InternalServerException":
    case "com.amazonaws.comprehendmedical#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

const deserializeAws_json1_1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerException(
    body,
    context
  );
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidEncodingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEncodingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidEncodingException(
    body,
    context
  );
  const contents: InvalidEncodingException = {
    name: "InvalidEncodingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRequestException(
    body,
    context
  );
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(
    body,
    context
  );
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceUnavailableException(
    body,
    context
  );
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TextSizeLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TextSizeLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TextSizeLimitExceededException(
    body,
    context
  );
  const contents: TextSizeLimitExceededException = {
    name: "TextSizeLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyRequestsException(
    body,
    context
  );
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ValidationException(
    body,
    context
  );
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1ComprehendMedicalAsyncJobFilter = (
  input: ComprehendMedicalAsyncJobFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobName !== undefined && { JobName: input.JobName }),
    ...(input.JobStatus !== undefined && { JobStatus: input.JobStatus }),
    ...(input.SubmitTimeAfter !== undefined && {
      SubmitTimeAfter: Math.round(input.SubmitTimeAfter.getTime() / 1000)
    }),
    ...(input.SubmitTimeBefore !== undefined && {
      SubmitTimeBefore: Math.round(input.SubmitTimeBefore.getTime() / 1000)
    })
  };
};

const serializeAws_json1_1DescribeEntitiesDetectionV2JobRequest = (
  input: DescribeEntitiesDetectionV2JobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId !== undefined && { JobId: input.JobId })
  };
};

const serializeAws_json1_1DescribePHIDetectionJobRequest = (
  input: DescribePHIDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId !== undefined && { JobId: input.JobId })
  };
};

const serializeAws_json1_1DetectEntitiesRequest = (
  input: DetectEntitiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Text !== undefined && { Text: input.Text })
  };
};

const serializeAws_json1_1DetectEntitiesV2Request = (
  input: DetectEntitiesV2Request,
  context: __SerdeContext
): any => {
  return {
    ...(input.Text !== undefined && { Text: input.Text })
  };
};

const serializeAws_json1_1DetectPHIRequest = (
  input: DetectPHIRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Text !== undefined && { Text: input.Text })
  };
};

const serializeAws_json1_1InferICD10CMRequest = (
  input: InferICD10CMRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Text !== undefined && { Text: input.Text })
  };
};

const serializeAws_json1_1InferRxNormRequest = (
  input: InferRxNormRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Text !== undefined && { Text: input.Text })
  };
};

const serializeAws_json1_1InputDataConfig = (
  input: InputDataConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3Bucket !== undefined && { S3Bucket: input.S3Bucket }),
    ...(input.S3Key !== undefined && { S3Key: input.S3Key })
  };
};

const serializeAws_json1_1ListEntitiesDetectionV2JobsRequest = (
  input: ListEntitiesDetectionV2JobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter !== undefined && {
      Filter: serializeAws_json1_1ComprehendMedicalAsyncJobFilter(
        input.Filter,
        context
      )
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListPHIDetectionJobsRequest = (
  input: ListPHIDetectionJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter !== undefined && {
      Filter: serializeAws_json1_1ComprehendMedicalAsyncJobFilter(
        input.Filter,
        context
      )
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1OutputDataConfig = (
  input: OutputDataConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3Bucket !== undefined && { S3Bucket: input.S3Bucket }),
    ...(input.S3Key !== undefined && { S3Key: input.S3Key })
  };
};

const serializeAws_json1_1StartEntitiesDetectionV2JobRequest = (
  input: StartEntitiesDetectionV2JobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn !== undefined && {
      DataAccessRoleArn: input.DataAccessRoleArn
    }),
    ...(input.InputDataConfig !== undefined && {
      InputDataConfig: serializeAws_json1_1InputDataConfig(
        input.InputDataConfig,
        context
      )
    }),
    ...(input.JobName !== undefined && { JobName: input.JobName }),
    ...(input.KMSKey !== undefined && { KMSKey: input.KMSKey }),
    ...(input.LanguageCode !== undefined && {
      LanguageCode: input.LanguageCode
    }),
    ...(input.OutputDataConfig !== undefined && {
      OutputDataConfig: serializeAws_json1_1OutputDataConfig(
        input.OutputDataConfig,
        context
      )
    })
  };
};

const serializeAws_json1_1StartPHIDetectionJobRequest = (
  input: StartPHIDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn !== undefined && {
      DataAccessRoleArn: input.DataAccessRoleArn
    }),
    ...(input.InputDataConfig !== undefined && {
      InputDataConfig: serializeAws_json1_1InputDataConfig(
        input.InputDataConfig,
        context
      )
    }),
    ...(input.JobName !== undefined && { JobName: input.JobName }),
    ...(input.KMSKey !== undefined && { KMSKey: input.KMSKey }),
    ...(input.LanguageCode !== undefined && {
      LanguageCode: input.LanguageCode
    }),
    ...(input.OutputDataConfig !== undefined && {
      OutputDataConfig: serializeAws_json1_1OutputDataConfig(
        input.OutputDataConfig,
        context
      )
    })
  };
};

const serializeAws_json1_1StopEntitiesDetectionV2JobRequest = (
  input: StopEntitiesDetectionV2JobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId !== undefined && { JobId: input.JobId })
  };
};

const serializeAws_json1_1StopPHIDetectionJobRequest = (
  input: StopPHIDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId !== undefined && { JobId: input.JobId })
  };
};

const deserializeAws_json1_1Attribute = (
  output: any,
  context: __SerdeContext
): Attribute => {
  return {
    __type: "Attribute",
    BeginOffset:
      output.BeginOffset !== undefined && output.BeginOffset !== null
        ? output.BeginOffset
        : undefined,
    EndOffset:
      output.EndOffset !== undefined && output.EndOffset !== null
        ? output.EndOffset
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    RelationshipScore:
      output.RelationshipScore !== undefined &&
      output.RelationshipScore !== null
        ? output.RelationshipScore
        : undefined,
    Score:
      output.Score !== undefined && output.Score !== null
        ? output.Score
        : undefined,
    Text:
      output.Text !== undefined && output.Text !== null
        ? output.Text
        : undefined,
    Traits:
      output.Traits !== undefined && output.Traits !== null
        ? deserializeAws_json1_1TraitList(output.Traits, context)
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined
  } as any;
};

const deserializeAws_json1_1AttributeList = (
  output: any,
  context: __SerdeContext
): Attribute[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Attribute(entry, context)
  );
};

const deserializeAws_json1_1ComprehendMedicalAsyncJobProperties = (
  output: any,
  context: __SerdeContext
): ComprehendMedicalAsyncJobProperties => {
  return {
    __type: "ComprehendMedicalAsyncJobProperties",
    DataAccessRoleArn:
      output.DataAccessRoleArn !== undefined &&
      output.DataAccessRoleArn !== null
        ? output.DataAccessRoleArn
        : undefined,
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null
        ? new Date(Math.round(output.EndTime * 1000))
        : undefined,
    ExpirationTime:
      output.ExpirationTime !== undefined && output.ExpirationTime !== null
        ? new Date(Math.round(output.ExpirationTime * 1000))
        : undefined,
    InputDataConfig:
      output.InputDataConfig !== undefined && output.InputDataConfig !== null
        ? deserializeAws_json1_1InputDataConfig(output.InputDataConfig, context)
        : undefined,
    JobId:
      output.JobId !== undefined && output.JobId !== null
        ? output.JobId
        : undefined,
    JobName:
      output.JobName !== undefined && output.JobName !== null
        ? output.JobName
        : undefined,
    JobStatus:
      output.JobStatus !== undefined && output.JobStatus !== null
        ? output.JobStatus
        : undefined,
    KMSKey:
      output.KMSKey !== undefined && output.KMSKey !== null
        ? output.KMSKey
        : undefined,
    LanguageCode:
      output.LanguageCode !== undefined && output.LanguageCode !== null
        ? output.LanguageCode
        : undefined,
    ManifestFilePath:
      output.ManifestFilePath !== undefined && output.ManifestFilePath !== null
        ? output.ManifestFilePath
        : undefined,
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined,
    ModelVersion:
      output.ModelVersion !== undefined && output.ModelVersion !== null
        ? output.ModelVersion
        : undefined,
    OutputDataConfig:
      output.OutputDataConfig !== undefined && output.OutputDataConfig !== null
        ? deserializeAws_json1_1OutputDataConfig(
            output.OutputDataConfig,
            context
          )
        : undefined,
    SubmitTime:
      output.SubmitTime !== undefined && output.SubmitTime !== null
        ? new Date(Math.round(output.SubmitTime * 1000))
        : undefined
  } as any;
};

const deserializeAws_json1_1ComprehendMedicalAsyncJobPropertiesList = (
  output: any,
  context: __SerdeContext
): ComprehendMedicalAsyncJobProperties[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ComprehendMedicalAsyncJobProperties(entry, context)
  );
};

const deserializeAws_json1_1DescribeEntitiesDetectionV2JobResponse = (
  output: any,
  context: __SerdeContext
): DescribeEntitiesDetectionV2JobResponse => {
  return {
    __type: "DescribeEntitiesDetectionV2JobResponse",
    ComprehendMedicalAsyncJobProperties:
      output.ComprehendMedicalAsyncJobProperties !== undefined &&
      output.ComprehendMedicalAsyncJobProperties !== null
        ? deserializeAws_json1_1ComprehendMedicalAsyncJobProperties(
            output.ComprehendMedicalAsyncJobProperties,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribePHIDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): DescribePHIDetectionJobResponse => {
  return {
    __type: "DescribePHIDetectionJobResponse",
    ComprehendMedicalAsyncJobProperties:
      output.ComprehendMedicalAsyncJobProperties !== undefined &&
      output.ComprehendMedicalAsyncJobProperties !== null
        ? deserializeAws_json1_1ComprehendMedicalAsyncJobProperties(
            output.ComprehendMedicalAsyncJobProperties,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DetectEntitiesResponse = (
  output: any,
  context: __SerdeContext
): DetectEntitiesResponse => {
  return {
    __type: "DetectEntitiesResponse",
    Entities:
      output.Entities !== undefined && output.Entities !== null
        ? deserializeAws_json1_1EntityList(output.Entities, context)
        : undefined,
    ModelVersion:
      output.ModelVersion !== undefined && output.ModelVersion !== null
        ? output.ModelVersion
        : undefined,
    PaginationToken:
      output.PaginationToken !== undefined && output.PaginationToken !== null
        ? output.PaginationToken
        : undefined,
    UnmappedAttributes:
      output.UnmappedAttributes !== undefined &&
      output.UnmappedAttributes !== null
        ? deserializeAws_json1_1UnmappedAttributeList(
            output.UnmappedAttributes,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DetectEntitiesV2Response = (
  output: any,
  context: __SerdeContext
): DetectEntitiesV2Response => {
  return {
    __type: "DetectEntitiesV2Response",
    Entities:
      output.Entities !== undefined && output.Entities !== null
        ? deserializeAws_json1_1EntityList(output.Entities, context)
        : undefined,
    ModelVersion:
      output.ModelVersion !== undefined && output.ModelVersion !== null
        ? output.ModelVersion
        : undefined,
    PaginationToken:
      output.PaginationToken !== undefined && output.PaginationToken !== null
        ? output.PaginationToken
        : undefined,
    UnmappedAttributes:
      output.UnmappedAttributes !== undefined &&
      output.UnmappedAttributes !== null
        ? deserializeAws_json1_1UnmappedAttributeList(
            output.UnmappedAttributes,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DetectPHIResponse = (
  output: any,
  context: __SerdeContext
): DetectPHIResponse => {
  return {
    __type: "DetectPHIResponse",
    Entities:
      output.Entities !== undefined && output.Entities !== null
        ? deserializeAws_json1_1EntityList(output.Entities, context)
        : undefined,
    ModelVersion:
      output.ModelVersion !== undefined && output.ModelVersion !== null
        ? output.ModelVersion
        : undefined,
    PaginationToken:
      output.PaginationToken !== undefined && output.PaginationToken !== null
        ? output.PaginationToken
        : undefined
  } as any;
};

const deserializeAws_json1_1Entity = (
  output: any,
  context: __SerdeContext
): Entity => {
  return {
    __type: "Entity",
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_json1_1AttributeList(output.Attributes, context)
        : undefined,
    BeginOffset:
      output.BeginOffset !== undefined && output.BeginOffset !== null
        ? output.BeginOffset
        : undefined,
    Category:
      output.Category !== undefined && output.Category !== null
        ? output.Category
        : undefined,
    EndOffset:
      output.EndOffset !== undefined && output.EndOffset !== null
        ? output.EndOffset
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Score:
      output.Score !== undefined && output.Score !== null
        ? output.Score
        : undefined,
    Text:
      output.Text !== undefined && output.Text !== null
        ? output.Text
        : undefined,
    Traits:
      output.Traits !== undefined && output.Traits !== null
        ? deserializeAws_json1_1TraitList(output.Traits, context)
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined
  } as any;
};

const deserializeAws_json1_1EntityList = (
  output: any,
  context: __SerdeContext
): Entity[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Entity(entry, context)
  );
};

const deserializeAws_json1_1ICD10CMAttribute = (
  output: any,
  context: __SerdeContext
): ICD10CMAttribute => {
  return {
    __type: "ICD10CMAttribute",
    BeginOffset:
      output.BeginOffset !== undefined && output.BeginOffset !== null
        ? output.BeginOffset
        : undefined,
    EndOffset:
      output.EndOffset !== undefined && output.EndOffset !== null
        ? output.EndOffset
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    RelationshipScore:
      output.RelationshipScore !== undefined &&
      output.RelationshipScore !== null
        ? output.RelationshipScore
        : undefined,
    Score:
      output.Score !== undefined && output.Score !== null
        ? output.Score
        : undefined,
    Text:
      output.Text !== undefined && output.Text !== null
        ? output.Text
        : undefined,
    Traits:
      output.Traits !== undefined && output.Traits !== null
        ? deserializeAws_json1_1ICD10CMTraitList(output.Traits, context)
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined
  } as any;
};

const deserializeAws_json1_1ICD10CMAttributeList = (
  output: any,
  context: __SerdeContext
): ICD10CMAttribute[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ICD10CMAttribute(entry, context)
  );
};

const deserializeAws_json1_1ICD10CMConcept = (
  output: any,
  context: __SerdeContext
): ICD10CMConcept => {
  return {
    __type: "ICD10CMConcept",
    Code:
      output.Code !== undefined && output.Code !== null
        ? output.Code
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    Score:
      output.Score !== undefined && output.Score !== null
        ? output.Score
        : undefined
  } as any;
};

const deserializeAws_json1_1ICD10CMConceptList = (
  output: any,
  context: __SerdeContext
): ICD10CMConcept[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ICD10CMConcept(entry, context)
  );
};

const deserializeAws_json1_1ICD10CMEntity = (
  output: any,
  context: __SerdeContext
): ICD10CMEntity => {
  return {
    __type: "ICD10CMEntity",
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_json1_1ICD10CMAttributeList(output.Attributes, context)
        : undefined,
    BeginOffset:
      output.BeginOffset !== undefined && output.BeginOffset !== null
        ? output.BeginOffset
        : undefined,
    Category:
      output.Category !== undefined && output.Category !== null
        ? output.Category
        : undefined,
    EndOffset:
      output.EndOffset !== undefined && output.EndOffset !== null
        ? output.EndOffset
        : undefined,
    ICD10CMConcepts:
      output.ICD10CMConcepts !== undefined && output.ICD10CMConcepts !== null
        ? deserializeAws_json1_1ICD10CMConceptList(
            output.ICD10CMConcepts,
            context
          )
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Score:
      output.Score !== undefined && output.Score !== null
        ? output.Score
        : undefined,
    Text:
      output.Text !== undefined && output.Text !== null
        ? output.Text
        : undefined,
    Traits:
      output.Traits !== undefined && output.Traits !== null
        ? deserializeAws_json1_1ICD10CMTraitList(output.Traits, context)
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined
  } as any;
};

const deserializeAws_json1_1ICD10CMEntityList = (
  output: any,
  context: __SerdeContext
): ICD10CMEntity[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ICD10CMEntity(entry, context)
  );
};

const deserializeAws_json1_1ICD10CMTrait = (
  output: any,
  context: __SerdeContext
): ICD10CMTrait => {
  return {
    __type: "ICD10CMTrait",
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    Score:
      output.Score !== undefined && output.Score !== null
        ? output.Score
        : undefined
  } as any;
};

const deserializeAws_json1_1ICD10CMTraitList = (
  output: any,
  context: __SerdeContext
): ICD10CMTrait[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ICD10CMTrait(entry, context)
  );
};

const deserializeAws_json1_1InferICD10CMResponse = (
  output: any,
  context: __SerdeContext
): InferICD10CMResponse => {
  return {
    __type: "InferICD10CMResponse",
    Entities:
      output.Entities !== undefined && output.Entities !== null
        ? deserializeAws_json1_1ICD10CMEntityList(output.Entities, context)
        : undefined,
    ModelVersion:
      output.ModelVersion !== undefined && output.ModelVersion !== null
        ? output.ModelVersion
        : undefined,
    PaginationToken:
      output.PaginationToken !== undefined && output.PaginationToken !== null
        ? output.PaginationToken
        : undefined
  } as any;
};

const deserializeAws_json1_1InferRxNormResponse = (
  output: any,
  context: __SerdeContext
): InferRxNormResponse => {
  return {
    __type: "InferRxNormResponse",
    Entities:
      output.Entities !== undefined && output.Entities !== null
        ? deserializeAws_json1_1RxNormEntityList(output.Entities, context)
        : undefined,
    ModelVersion:
      output.ModelVersion !== undefined && output.ModelVersion !== null
        ? output.ModelVersion
        : undefined,
    PaginationToken:
      output.PaginationToken !== undefined && output.PaginationToken !== null
        ? output.PaginationToken
        : undefined
  } as any;
};

const deserializeAws_json1_1InputDataConfig = (
  output: any,
  context: __SerdeContext
): InputDataConfig => {
  return {
    __type: "InputDataConfig",
    S3Bucket:
      output.S3Bucket !== undefined && output.S3Bucket !== null
        ? output.S3Bucket
        : undefined,
    S3Key:
      output.S3Key !== undefined && output.S3Key !== null
        ? output.S3Key
        : undefined
  } as any;
};

const deserializeAws_json1_1InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  return {
    __type: "InternalServerException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidEncodingException = (
  output: any,
  context: __SerdeContext
): InvalidEncodingException => {
  return {
    __type: "InvalidEncodingException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  return {
    __type: "InvalidRequestException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1ListEntitiesDetectionV2JobsResponse = (
  output: any,
  context: __SerdeContext
): ListEntitiesDetectionV2JobsResponse => {
  return {
    __type: "ListEntitiesDetectionV2JobsResponse",
    ComprehendMedicalAsyncJobPropertiesList:
      output.ComprehendMedicalAsyncJobPropertiesList !== undefined &&
      output.ComprehendMedicalAsyncJobPropertiesList !== null
        ? deserializeAws_json1_1ComprehendMedicalAsyncJobPropertiesList(
            output.ComprehendMedicalAsyncJobPropertiesList,
            context
          )
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListPHIDetectionJobsResponse = (
  output: any,
  context: __SerdeContext
): ListPHIDetectionJobsResponse => {
  return {
    __type: "ListPHIDetectionJobsResponse",
    ComprehendMedicalAsyncJobPropertiesList:
      output.ComprehendMedicalAsyncJobPropertiesList !== undefined &&
      output.ComprehendMedicalAsyncJobPropertiesList !== null
        ? deserializeAws_json1_1ComprehendMedicalAsyncJobPropertiesList(
            output.ComprehendMedicalAsyncJobPropertiesList,
            context
          )
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1OutputDataConfig = (
  output: any,
  context: __SerdeContext
): OutputDataConfig => {
  return {
    __type: "OutputDataConfig",
    S3Bucket:
      output.S3Bucket !== undefined && output.S3Bucket !== null
        ? output.S3Bucket
        : undefined,
    S3Key:
      output.S3Key !== undefined && output.S3Key !== null
        ? output.S3Key
        : undefined
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    __type: "ResourceNotFoundException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1RxNormAttribute = (
  output: any,
  context: __SerdeContext
): RxNormAttribute => {
  return {
    __type: "RxNormAttribute",
    BeginOffset:
      output.BeginOffset !== undefined && output.BeginOffset !== null
        ? output.BeginOffset
        : undefined,
    EndOffset:
      output.EndOffset !== undefined && output.EndOffset !== null
        ? output.EndOffset
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    RelationshipScore:
      output.RelationshipScore !== undefined &&
      output.RelationshipScore !== null
        ? output.RelationshipScore
        : undefined,
    Score:
      output.Score !== undefined && output.Score !== null
        ? output.Score
        : undefined,
    Text:
      output.Text !== undefined && output.Text !== null
        ? output.Text
        : undefined,
    Traits:
      output.Traits !== undefined && output.Traits !== null
        ? deserializeAws_json1_1RxNormTraitList(output.Traits, context)
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined
  } as any;
};

const deserializeAws_json1_1RxNormAttributeList = (
  output: any,
  context: __SerdeContext
): RxNormAttribute[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RxNormAttribute(entry, context)
  );
};

const deserializeAws_json1_1RxNormConcept = (
  output: any,
  context: __SerdeContext
): RxNormConcept => {
  return {
    __type: "RxNormConcept",
    Code:
      output.Code !== undefined && output.Code !== null
        ? output.Code
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    Score:
      output.Score !== undefined && output.Score !== null
        ? output.Score
        : undefined
  } as any;
};

const deserializeAws_json1_1RxNormConceptList = (
  output: any,
  context: __SerdeContext
): RxNormConcept[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RxNormConcept(entry, context)
  );
};

const deserializeAws_json1_1RxNormEntity = (
  output: any,
  context: __SerdeContext
): RxNormEntity => {
  return {
    __type: "RxNormEntity",
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_json1_1RxNormAttributeList(output.Attributes, context)
        : undefined,
    BeginOffset:
      output.BeginOffset !== undefined && output.BeginOffset !== null
        ? output.BeginOffset
        : undefined,
    Category:
      output.Category !== undefined && output.Category !== null
        ? output.Category
        : undefined,
    EndOffset:
      output.EndOffset !== undefined && output.EndOffset !== null
        ? output.EndOffset
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    RxNormConcepts:
      output.RxNormConcepts !== undefined && output.RxNormConcepts !== null
        ? deserializeAws_json1_1RxNormConceptList(
            output.RxNormConcepts,
            context
          )
        : undefined,
    Score:
      output.Score !== undefined && output.Score !== null
        ? output.Score
        : undefined,
    Text:
      output.Text !== undefined && output.Text !== null
        ? output.Text
        : undefined,
    Traits:
      output.Traits !== undefined && output.Traits !== null
        ? deserializeAws_json1_1RxNormTraitList(output.Traits, context)
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined
  } as any;
};

const deserializeAws_json1_1RxNormEntityList = (
  output: any,
  context: __SerdeContext
): RxNormEntity[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RxNormEntity(entry, context)
  );
};

const deserializeAws_json1_1RxNormTrait = (
  output: any,
  context: __SerdeContext
): RxNormTrait => {
  return {
    __type: "RxNormTrait",
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    Score:
      output.Score !== undefined && output.Score !== null
        ? output.Score
        : undefined
  } as any;
};

const deserializeAws_json1_1RxNormTraitList = (
  output: any,
  context: __SerdeContext
): RxNormTrait[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RxNormTrait(entry, context)
  );
};

const deserializeAws_json1_1ServiceUnavailableException = (
  output: any,
  context: __SerdeContext
): ServiceUnavailableException => {
  return {
    __type: "ServiceUnavailableException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1StartEntitiesDetectionV2JobResponse = (
  output: any,
  context: __SerdeContext
): StartEntitiesDetectionV2JobResponse => {
  return {
    __type: "StartEntitiesDetectionV2JobResponse",
    JobId:
      output.JobId !== undefined && output.JobId !== null
        ? output.JobId
        : undefined
  } as any;
};

const deserializeAws_json1_1StartPHIDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StartPHIDetectionJobResponse => {
  return {
    __type: "StartPHIDetectionJobResponse",
    JobId:
      output.JobId !== undefined && output.JobId !== null
        ? output.JobId
        : undefined
  } as any;
};

const deserializeAws_json1_1StopEntitiesDetectionV2JobResponse = (
  output: any,
  context: __SerdeContext
): StopEntitiesDetectionV2JobResponse => {
  return {
    __type: "StopEntitiesDetectionV2JobResponse",
    JobId:
      output.JobId !== undefined && output.JobId !== null
        ? output.JobId
        : undefined
  } as any;
};

const deserializeAws_json1_1StopPHIDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StopPHIDetectionJobResponse => {
  return {
    __type: "StopPHIDetectionJobResponse",
    JobId:
      output.JobId !== undefined && output.JobId !== null
        ? output.JobId
        : undefined
  } as any;
};

const deserializeAws_json1_1TextSizeLimitExceededException = (
  output: any,
  context: __SerdeContext
): TextSizeLimitExceededException => {
  return {
    __type: "TextSizeLimitExceededException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1TooManyRequestsException = (
  output: any,
  context: __SerdeContext
): TooManyRequestsException => {
  return {
    __type: "TooManyRequestsException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1Trait = (
  output: any,
  context: __SerdeContext
): Trait => {
  return {
    __type: "Trait",
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    Score:
      output.Score !== undefined && output.Score !== null
        ? output.Score
        : undefined
  } as any;
};

const deserializeAws_json1_1TraitList = (
  output: any,
  context: __SerdeContext
): Trait[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Trait(entry, context)
  );
};

const deserializeAws_json1_1UnmappedAttribute = (
  output: any,
  context: __SerdeContext
): UnmappedAttribute => {
  return {
    __type: "UnmappedAttribute",
    Attribute:
      output.Attribute !== undefined && output.Attribute !== null
        ? deserializeAws_json1_1Attribute(output.Attribute, context)
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined
  } as any;
};

const deserializeAws_json1_1UnmappedAttributeList = (
  output: any,
  context: __SerdeContext
): UnmappedAttribute[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1UnmappedAttribute(entry, context)
  );
};

const deserializeAws_json1_1ValidationException = (
  output: any,
  context: __SerdeContext
): ValidationException => {
  return {
    __type: "ValidationException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
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
