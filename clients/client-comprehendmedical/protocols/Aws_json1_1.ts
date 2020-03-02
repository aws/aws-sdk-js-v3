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

export async function serializeAws_json1_1DescribeEntitiesDetectionV2JobCommand(
  input: DescribeEntitiesDetectionV2JobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeEntitiesDetectionV2JobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribePHIDetectionJobCommand(
  input: DescribePHIDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "ComprehendMedical_20181030.DescribePHIDetectionJob";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribePHIDetectionJobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DetectEntitiesCommand(
  input: DetectEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ComprehendMedical_20181030.DetectEntities";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DetectEntitiesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DetectEntitiesV2Command(
  input: DetectEntitiesV2CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ComprehendMedical_20181030.DetectEntitiesV2";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DetectEntitiesV2Request(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DetectPHICommand(
  input: DetectPHICommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ComprehendMedical_20181030.DetectPHI";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DetectPHIRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1InferICD10CMCommand(
  input: InferICD10CMCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ComprehendMedical_20181030.InferICD10CM";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1InferICD10CMRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1InferRxNormCommand(
  input: InferRxNormCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ComprehendMedical_20181030.InferRxNorm";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1InferRxNormRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListEntitiesDetectionV2JobsCommand(
  input: ListEntitiesDetectionV2JobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListEntitiesDetectionV2JobsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListPHIDetectionJobsCommand(
  input: ListPHIDetectionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ComprehendMedical_20181030.ListPHIDetectionJobs";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListPHIDetectionJobsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StartEntitiesDetectionV2JobCommand(
  input: StartEntitiesDetectionV2JobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "ComprehendMedical_20181030.StartEntitiesDetectionV2Job";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StartEntitiesDetectionV2JobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StartPHIDetectionJobCommand(
  input: StartPHIDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ComprehendMedical_20181030.StartPHIDetectionJob";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StartPHIDetectionJobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StopEntitiesDetectionV2JobCommand(
  input: StopEntitiesDetectionV2JobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "ComprehendMedical_20181030.StopEntitiesDetectionV2Job";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StopEntitiesDetectionV2JobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StopPHIDetectionJobCommand(
  input: StopPHIDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ComprehendMedical_20181030.StopPHIDetectionJob";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StopPHIDetectionJobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1DescribeEntitiesDetectionV2JobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEntitiesDetectionV2JobCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeEntitiesDetectionV2JobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEntitiesDetectionV2JobCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.deepinsight.medical#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.deepinsight.medical#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.deepinsight.medical#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.deepinsight.medical#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_json1_1DescribePHIDetectionJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePHIDetectionJobCommandOutput> {
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
}

async function deserializeAws_json1_1DescribePHIDetectionJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePHIDetectionJobCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.deepinsight.medical#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.deepinsight.medical#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.deepinsight.medical#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.deepinsight.medical#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_json1_1DetectEntitiesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectEntitiesCommandOutput> {
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
}

async function deserializeAws_json1_1DetectEntitiesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectEntitiesCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.deepinsight.medical#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEncodingException":
    case "com.amazonaws.deepinsight.medical#InvalidEncodingException":
      response = {
        ...(await deserializeAws_json1_1InvalidEncodingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.deepinsight.medical#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.deepinsight.medical#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TextSizeLimitExceededException":
    case "com.amazonaws.deepinsight.medical#TextSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.deepinsight.medical#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_json1_1DetectEntitiesV2Command(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectEntitiesV2CommandOutput> {
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
}

async function deserializeAws_json1_1DetectEntitiesV2CommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectEntitiesV2CommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.deepinsight.medical#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEncodingException":
    case "com.amazonaws.deepinsight.medical#InvalidEncodingException":
      response = {
        ...(await deserializeAws_json1_1InvalidEncodingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.deepinsight.medical#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.deepinsight.medical#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TextSizeLimitExceededException":
    case "com.amazonaws.deepinsight.medical#TextSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.deepinsight.medical#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_json1_1DetectPHICommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectPHICommandOutput> {
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
}

async function deserializeAws_json1_1DetectPHICommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectPHICommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.deepinsight.medical#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEncodingException":
    case "com.amazonaws.deepinsight.medical#InvalidEncodingException":
      response = {
        ...(await deserializeAws_json1_1InvalidEncodingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.deepinsight.medical#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.deepinsight.medical#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TextSizeLimitExceededException":
    case "com.amazonaws.deepinsight.medical#TextSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.deepinsight.medical#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_json1_1InferICD10CMCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InferICD10CMCommandOutput> {
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
}

async function deserializeAws_json1_1InferICD10CMCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InferICD10CMCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.deepinsight.medical#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEncodingException":
    case "com.amazonaws.deepinsight.medical#InvalidEncodingException":
      response = {
        ...(await deserializeAws_json1_1InvalidEncodingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.deepinsight.medical#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.deepinsight.medical#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TextSizeLimitExceededException":
    case "com.amazonaws.deepinsight.medical#TextSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.deepinsight.medical#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_json1_1InferRxNormCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InferRxNormCommandOutput> {
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
}

async function deserializeAws_json1_1InferRxNormCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InferRxNormCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.deepinsight.medical#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEncodingException":
    case "com.amazonaws.deepinsight.medical#InvalidEncodingException":
      response = {
        ...(await deserializeAws_json1_1InvalidEncodingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.deepinsight.medical#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.deepinsight.medical#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TextSizeLimitExceededException":
    case "com.amazonaws.deepinsight.medical#TextSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.deepinsight.medical#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_json1_1ListEntitiesDetectionV2JobsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntitiesDetectionV2JobsCommandOutput> {
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
}

async function deserializeAws_json1_1ListEntitiesDetectionV2JobsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntitiesDetectionV2JobsCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.deepinsight.medical#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.deepinsight.medical#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.deepinsight.medical#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.deepinsight.medical#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export async function deserializeAws_json1_1ListPHIDetectionJobsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPHIDetectionJobsCommandOutput> {
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
}

async function deserializeAws_json1_1ListPHIDetectionJobsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPHIDetectionJobsCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.deepinsight.medical#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.deepinsight.medical#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.deepinsight.medical#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.deepinsight.medical#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export async function deserializeAws_json1_1StartEntitiesDetectionV2JobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartEntitiesDetectionV2JobCommandOutput> {
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
}

async function deserializeAws_json1_1StartEntitiesDetectionV2JobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartEntitiesDetectionV2JobCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.deepinsight.medical#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.deepinsight.medical#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.deepinsight.medical#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.deepinsight.medical#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_json1_1StartPHIDetectionJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPHIDetectionJobCommandOutput> {
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
}

async function deserializeAws_json1_1StartPHIDetectionJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPHIDetectionJobCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.deepinsight.medical#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.deepinsight.medical#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.deepinsight.medical#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.deepinsight.medical#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_json1_1StopEntitiesDetectionV2JobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopEntitiesDetectionV2JobCommandOutput> {
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
}

async function deserializeAws_json1_1StopEntitiesDetectionV2JobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopEntitiesDetectionV2JobCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.deepinsight.medical#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.deepinsight.medical#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.deepinsight.medical#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export async function deserializeAws_json1_1StopPHIDetectionJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopPHIDetectionJobCommandOutput> {
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
}

async function deserializeAws_json1_1StopPHIDetectionJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopPHIDetectionJobCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.deepinsight.medical#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.deepinsight.medical#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.deepinsight.medical#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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
  const bodyParams: any = {};
  if (input.JobName !== undefined) {
    bodyParams["JobName"] = input.JobName;
  }
  if (input.JobStatus !== undefined) {
    bodyParams["JobStatus"] = input.JobStatus;
  }
  if (input.SubmitTimeAfter !== undefined) {
    bodyParams["SubmitTimeAfter"] = Math.round(
      input.SubmitTimeAfter.getTime() / 1000
    );
  }
  if (input.SubmitTimeBefore !== undefined) {
    bodyParams["SubmitTimeBefore"] = Math.round(
      input.SubmitTimeBefore.getTime() / 1000
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeEntitiesDetectionV2JobRequest = (
  input: DescribeEntitiesDetectionV2JobRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.JobId !== undefined) {
    bodyParams["JobId"] = input.JobId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribePHIDetectionJobRequest = (
  input: DescribePHIDetectionJobRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.JobId !== undefined) {
    bodyParams["JobId"] = input.JobId;
  }
  return bodyParams;
};

const serializeAws_json1_1DetectEntitiesRequest = (
  input: DetectEntitiesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Text !== undefined) {
    bodyParams["Text"] = input.Text;
  }
  return bodyParams;
};

const serializeAws_json1_1DetectEntitiesV2Request = (
  input: DetectEntitiesV2Request,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Text !== undefined) {
    bodyParams["Text"] = input.Text;
  }
  return bodyParams;
};

const serializeAws_json1_1DetectPHIRequest = (
  input: DetectPHIRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Text !== undefined) {
    bodyParams["Text"] = input.Text;
  }
  return bodyParams;
};

const serializeAws_json1_1InferICD10CMRequest = (
  input: InferICD10CMRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Text !== undefined) {
    bodyParams["Text"] = input.Text;
  }
  return bodyParams;
};

const serializeAws_json1_1InferRxNormRequest = (
  input: InferRxNormRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Text !== undefined) {
    bodyParams["Text"] = input.Text;
  }
  return bodyParams;
};

const serializeAws_json1_1InputDataConfig = (
  input: InputDataConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.S3Bucket !== undefined) {
    bodyParams["S3Bucket"] = input.S3Bucket;
  }
  if (input.S3Key !== undefined) {
    bodyParams["S3Key"] = input.S3Key;
  }
  return bodyParams;
};

const serializeAws_json1_1ListEntitiesDetectionV2JobsRequest = (
  input: ListEntitiesDetectionV2JobsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Filter !== undefined) {
    bodyParams["Filter"] = serializeAws_json1_1ComprehendMedicalAsyncJobFilter(
      input.Filter,
      context
    );
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListPHIDetectionJobsRequest = (
  input: ListPHIDetectionJobsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Filter !== undefined) {
    bodyParams["Filter"] = serializeAws_json1_1ComprehendMedicalAsyncJobFilter(
      input.Filter,
      context
    );
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1OutputDataConfig = (
  input: OutputDataConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.S3Bucket !== undefined) {
    bodyParams["S3Bucket"] = input.S3Bucket;
  }
  if (input.S3Key !== undefined) {
    bodyParams["S3Key"] = input.S3Key;
  }
  return bodyParams;
};

const serializeAws_json1_1StartEntitiesDetectionV2JobRequest = (
  input: StartEntitiesDetectionV2JobRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ClientRequestToken === undefined) {
    input.ClientRequestToken = generateIdempotencyToken();
  }
  if (input.ClientRequestToken !== undefined) {
    bodyParams["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.DataAccessRoleArn !== undefined) {
    bodyParams["DataAccessRoleArn"] = input.DataAccessRoleArn;
  }
  if (input.InputDataConfig !== undefined) {
    bodyParams["InputDataConfig"] = serializeAws_json1_1InputDataConfig(
      input.InputDataConfig,
      context
    );
  }
  if (input.JobName !== undefined) {
    bodyParams["JobName"] = input.JobName;
  }
  if (input.KMSKey !== undefined) {
    bodyParams["KMSKey"] = input.KMSKey;
  }
  if (input.LanguageCode !== undefined) {
    bodyParams["LanguageCode"] = input.LanguageCode;
  }
  if (input.OutputDataConfig !== undefined) {
    bodyParams["OutputDataConfig"] = serializeAws_json1_1OutputDataConfig(
      input.OutputDataConfig,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1StartPHIDetectionJobRequest = (
  input: StartPHIDetectionJobRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ClientRequestToken === undefined) {
    input.ClientRequestToken = generateIdempotencyToken();
  }
  if (input.ClientRequestToken !== undefined) {
    bodyParams["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.DataAccessRoleArn !== undefined) {
    bodyParams["DataAccessRoleArn"] = input.DataAccessRoleArn;
  }
  if (input.InputDataConfig !== undefined) {
    bodyParams["InputDataConfig"] = serializeAws_json1_1InputDataConfig(
      input.InputDataConfig,
      context
    );
  }
  if (input.JobName !== undefined) {
    bodyParams["JobName"] = input.JobName;
  }
  if (input.KMSKey !== undefined) {
    bodyParams["KMSKey"] = input.KMSKey;
  }
  if (input.LanguageCode !== undefined) {
    bodyParams["LanguageCode"] = input.LanguageCode;
  }
  if (input.OutputDataConfig !== undefined) {
    bodyParams["OutputDataConfig"] = serializeAws_json1_1OutputDataConfig(
      input.OutputDataConfig,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1StopEntitiesDetectionV2JobRequest = (
  input: StopEntitiesDetectionV2JobRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.JobId !== undefined) {
    bodyParams["JobId"] = input.JobId;
  }
  return bodyParams;
};

const serializeAws_json1_1StopPHIDetectionJobRequest = (
  input: StopPHIDetectionJobRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.JobId !== undefined) {
    bodyParams["JobId"] = input.JobId;
  }
  return bodyParams;
};

const deserializeAws_json1_1Attribute = (
  output: any,
  context: __SerdeContext
): Attribute => {
  let contents: any = {
    __type: "Attribute",
    BeginOffset: undefined,
    EndOffset: undefined,
    Id: undefined,
    RelationshipScore: undefined,
    Score: undefined,
    Text: undefined,
    Traits: undefined,
    Type: undefined
  };
  if (output.BeginOffset !== undefined && output.BeginOffset !== null) {
    contents.BeginOffset = output.BeginOffset;
  }
  if (output.EndOffset !== undefined && output.EndOffset !== null) {
    contents.EndOffset = output.EndOffset;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (
    output.RelationshipScore !== undefined &&
    output.RelationshipScore !== null
  ) {
    contents.RelationshipScore = output.RelationshipScore;
  }
  if (output.Score !== undefined && output.Score !== null) {
    contents.Score = output.Score;
  }
  if (output.Text !== undefined && output.Text !== null) {
    contents.Text = output.Text;
  }
  if (output.Traits !== undefined && output.Traits !== null) {
    contents.Traits = deserializeAws_json1_1TraitList(output.Traits, context);
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1AttributeList = (
  output: any,
  context: __SerdeContext
): Array<Attribute> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Attribute(entry, context)
  );
};

const deserializeAws_json1_1ComprehendMedicalAsyncJobProperties = (
  output: any,
  context: __SerdeContext
): ComprehendMedicalAsyncJobProperties => {
  let contents: any = {
    __type: "ComprehendMedicalAsyncJobProperties",
    DataAccessRoleArn: undefined,
    EndTime: undefined,
    ExpirationTime: undefined,
    InputDataConfig: undefined,
    JobId: undefined,
    JobName: undefined,
    JobStatus: undefined,
    KMSKey: undefined,
    LanguageCode: undefined,
    ManifestFilePath: undefined,
    Message: undefined,
    ModelVersion: undefined,
    OutputDataConfig: undefined,
    SubmitTime: undefined
  };
  if (
    output.DataAccessRoleArn !== undefined &&
    output.DataAccessRoleArn !== null
  ) {
    contents.DataAccessRoleArn = output.DataAccessRoleArn;
  }
  if (output.EndTime !== undefined && output.EndTime !== null) {
    contents.EndTime = new Date(Math.round(output.EndTime * 1000));
  }
  if (output.ExpirationTime !== undefined && output.ExpirationTime !== null) {
    contents.ExpirationTime = new Date(
      Math.round(output.ExpirationTime * 1000)
    );
  }
  if (output.InputDataConfig !== undefined && output.InputDataConfig !== null) {
    contents.InputDataConfig = deserializeAws_json1_1InputDataConfig(
      output.InputDataConfig,
      context
    );
  }
  if (output.JobId !== undefined && output.JobId !== null) {
    contents.JobId = output.JobId;
  }
  if (output.JobName !== undefined && output.JobName !== null) {
    contents.JobName = output.JobName;
  }
  if (output.JobStatus !== undefined && output.JobStatus !== null) {
    contents.JobStatus = output.JobStatus;
  }
  if (output.KMSKey !== undefined && output.KMSKey !== null) {
    contents.KMSKey = output.KMSKey;
  }
  if (output.LanguageCode !== undefined && output.LanguageCode !== null) {
    contents.LanguageCode = output.LanguageCode;
  }
  if (
    output.ManifestFilePath !== undefined &&
    output.ManifestFilePath !== null
  ) {
    contents.ManifestFilePath = output.ManifestFilePath;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  if (output.ModelVersion !== undefined && output.ModelVersion !== null) {
    contents.ModelVersion = output.ModelVersion;
  }
  if (
    output.OutputDataConfig !== undefined &&
    output.OutputDataConfig !== null
  ) {
    contents.OutputDataConfig = deserializeAws_json1_1OutputDataConfig(
      output.OutputDataConfig,
      context
    );
  }
  if (output.SubmitTime !== undefined && output.SubmitTime !== null) {
    contents.SubmitTime = new Date(Math.round(output.SubmitTime * 1000));
  }
  return contents;
};

const deserializeAws_json1_1ComprehendMedicalAsyncJobPropertiesList = (
  output: any,
  context: __SerdeContext
): Array<ComprehendMedicalAsyncJobProperties> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ComprehendMedicalAsyncJobProperties(entry, context)
  );
};

const deserializeAws_json1_1DescribeEntitiesDetectionV2JobResponse = (
  output: any,
  context: __SerdeContext
): DescribeEntitiesDetectionV2JobResponse => {
  let contents: any = {
    __type: "DescribeEntitiesDetectionV2JobResponse",
    ComprehendMedicalAsyncJobProperties: undefined
  };
  if (
    output.ComprehendMedicalAsyncJobProperties !== undefined &&
    output.ComprehendMedicalAsyncJobProperties !== null
  ) {
    contents.ComprehendMedicalAsyncJobProperties = deserializeAws_json1_1ComprehendMedicalAsyncJobProperties(
      output.ComprehendMedicalAsyncJobProperties,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribePHIDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): DescribePHIDetectionJobResponse => {
  let contents: any = {
    __type: "DescribePHIDetectionJobResponse",
    ComprehendMedicalAsyncJobProperties: undefined
  };
  if (
    output.ComprehendMedicalAsyncJobProperties !== undefined &&
    output.ComprehendMedicalAsyncJobProperties !== null
  ) {
    contents.ComprehendMedicalAsyncJobProperties = deserializeAws_json1_1ComprehendMedicalAsyncJobProperties(
      output.ComprehendMedicalAsyncJobProperties,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DetectEntitiesResponse = (
  output: any,
  context: __SerdeContext
): DetectEntitiesResponse => {
  let contents: any = {
    __type: "DetectEntitiesResponse",
    Entities: undefined,
    ModelVersion: undefined,
    PaginationToken: undefined,
    UnmappedAttributes: undefined
  };
  if (output.Entities !== undefined && output.Entities !== null) {
    contents.Entities = deserializeAws_json1_1EntityList(
      output.Entities,
      context
    );
  }
  if (output.ModelVersion !== undefined && output.ModelVersion !== null) {
    contents.ModelVersion = output.ModelVersion;
  }
  if (output.PaginationToken !== undefined && output.PaginationToken !== null) {
    contents.PaginationToken = output.PaginationToken;
  }
  if (
    output.UnmappedAttributes !== undefined &&
    output.UnmappedAttributes !== null
  ) {
    contents.UnmappedAttributes = deserializeAws_json1_1UnmappedAttributeList(
      output.UnmappedAttributes,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DetectEntitiesV2Response = (
  output: any,
  context: __SerdeContext
): DetectEntitiesV2Response => {
  let contents: any = {
    __type: "DetectEntitiesV2Response",
    Entities: undefined,
    ModelVersion: undefined,
    PaginationToken: undefined,
    UnmappedAttributes: undefined
  };
  if (output.Entities !== undefined && output.Entities !== null) {
    contents.Entities = deserializeAws_json1_1EntityList(
      output.Entities,
      context
    );
  }
  if (output.ModelVersion !== undefined && output.ModelVersion !== null) {
    contents.ModelVersion = output.ModelVersion;
  }
  if (output.PaginationToken !== undefined && output.PaginationToken !== null) {
    contents.PaginationToken = output.PaginationToken;
  }
  if (
    output.UnmappedAttributes !== undefined &&
    output.UnmappedAttributes !== null
  ) {
    contents.UnmappedAttributes = deserializeAws_json1_1UnmappedAttributeList(
      output.UnmappedAttributes,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DetectPHIResponse = (
  output: any,
  context: __SerdeContext
): DetectPHIResponse => {
  let contents: any = {
    __type: "DetectPHIResponse",
    Entities: undefined,
    ModelVersion: undefined,
    PaginationToken: undefined
  };
  if (output.Entities !== undefined && output.Entities !== null) {
    contents.Entities = deserializeAws_json1_1EntityList(
      output.Entities,
      context
    );
  }
  if (output.ModelVersion !== undefined && output.ModelVersion !== null) {
    contents.ModelVersion = output.ModelVersion;
  }
  if (output.PaginationToken !== undefined && output.PaginationToken !== null) {
    contents.PaginationToken = output.PaginationToken;
  }
  return contents;
};

const deserializeAws_json1_1Entity = (
  output: any,
  context: __SerdeContext
): Entity => {
  let contents: any = {
    __type: "Entity",
    Attributes: undefined,
    BeginOffset: undefined,
    Category: undefined,
    EndOffset: undefined,
    Id: undefined,
    Score: undefined,
    Text: undefined,
    Traits: undefined,
    Type: undefined
  };
  if (output.Attributes !== undefined && output.Attributes !== null) {
    contents.Attributes = deserializeAws_json1_1AttributeList(
      output.Attributes,
      context
    );
  }
  if (output.BeginOffset !== undefined && output.BeginOffset !== null) {
    contents.BeginOffset = output.BeginOffset;
  }
  if (output.Category !== undefined && output.Category !== null) {
    contents.Category = output.Category;
  }
  if (output.EndOffset !== undefined && output.EndOffset !== null) {
    contents.EndOffset = output.EndOffset;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Score !== undefined && output.Score !== null) {
    contents.Score = output.Score;
  }
  if (output.Text !== undefined && output.Text !== null) {
    contents.Text = output.Text;
  }
  if (output.Traits !== undefined && output.Traits !== null) {
    contents.Traits = deserializeAws_json1_1TraitList(output.Traits, context);
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1EntityList = (
  output: any,
  context: __SerdeContext
): Array<Entity> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Entity(entry, context)
  );
};

const deserializeAws_json1_1ICD10CMAttribute = (
  output: any,
  context: __SerdeContext
): ICD10CMAttribute => {
  let contents: any = {
    __type: "ICD10CMAttribute",
    BeginOffset: undefined,
    EndOffset: undefined,
    Id: undefined,
    RelationshipScore: undefined,
    Score: undefined,
    Text: undefined,
    Traits: undefined,
    Type: undefined
  };
  if (output.BeginOffset !== undefined && output.BeginOffset !== null) {
    contents.BeginOffset = output.BeginOffset;
  }
  if (output.EndOffset !== undefined && output.EndOffset !== null) {
    contents.EndOffset = output.EndOffset;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (
    output.RelationshipScore !== undefined &&
    output.RelationshipScore !== null
  ) {
    contents.RelationshipScore = output.RelationshipScore;
  }
  if (output.Score !== undefined && output.Score !== null) {
    contents.Score = output.Score;
  }
  if (output.Text !== undefined && output.Text !== null) {
    contents.Text = output.Text;
  }
  if (output.Traits !== undefined && output.Traits !== null) {
    contents.Traits = deserializeAws_json1_1ICD10CMTraitList(
      output.Traits,
      context
    );
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1ICD10CMAttributeList = (
  output: any,
  context: __SerdeContext
): Array<ICD10CMAttribute> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ICD10CMAttribute(entry, context)
  );
};

const deserializeAws_json1_1ICD10CMConcept = (
  output: any,
  context: __SerdeContext
): ICD10CMConcept => {
  let contents: any = {
    __type: "ICD10CMConcept",
    Code: undefined,
    Description: undefined,
    Score: undefined
  };
  if (output.Code !== undefined && output.Code !== null) {
    contents.Code = output.Code;
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.Score !== undefined && output.Score !== null) {
    contents.Score = output.Score;
  }
  return contents;
};

const deserializeAws_json1_1ICD10CMConceptList = (
  output: any,
  context: __SerdeContext
): Array<ICD10CMConcept> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ICD10CMConcept(entry, context)
  );
};

const deserializeAws_json1_1ICD10CMEntity = (
  output: any,
  context: __SerdeContext
): ICD10CMEntity => {
  let contents: any = {
    __type: "ICD10CMEntity",
    Attributes: undefined,
    BeginOffset: undefined,
    Category: undefined,
    EndOffset: undefined,
    ICD10CMConcepts: undefined,
    Id: undefined,
    Score: undefined,
    Text: undefined,
    Traits: undefined,
    Type: undefined
  };
  if (output.Attributes !== undefined && output.Attributes !== null) {
    contents.Attributes = deserializeAws_json1_1ICD10CMAttributeList(
      output.Attributes,
      context
    );
  }
  if (output.BeginOffset !== undefined && output.BeginOffset !== null) {
    contents.BeginOffset = output.BeginOffset;
  }
  if (output.Category !== undefined && output.Category !== null) {
    contents.Category = output.Category;
  }
  if (output.EndOffset !== undefined && output.EndOffset !== null) {
    contents.EndOffset = output.EndOffset;
  }
  if (output.ICD10CMConcepts !== undefined && output.ICD10CMConcepts !== null) {
    contents.ICD10CMConcepts = deserializeAws_json1_1ICD10CMConceptList(
      output.ICD10CMConcepts,
      context
    );
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Score !== undefined && output.Score !== null) {
    contents.Score = output.Score;
  }
  if (output.Text !== undefined && output.Text !== null) {
    contents.Text = output.Text;
  }
  if (output.Traits !== undefined && output.Traits !== null) {
    contents.Traits = deserializeAws_json1_1ICD10CMTraitList(
      output.Traits,
      context
    );
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1ICD10CMEntityList = (
  output: any,
  context: __SerdeContext
): Array<ICD10CMEntity> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ICD10CMEntity(entry, context)
  );
};

const deserializeAws_json1_1ICD10CMTrait = (
  output: any,
  context: __SerdeContext
): ICD10CMTrait => {
  let contents: any = {
    __type: "ICD10CMTrait",
    Name: undefined,
    Score: undefined
  };
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Score !== undefined && output.Score !== null) {
    contents.Score = output.Score;
  }
  return contents;
};

const deserializeAws_json1_1ICD10CMTraitList = (
  output: any,
  context: __SerdeContext
): Array<ICD10CMTrait> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ICD10CMTrait(entry, context)
  );
};

const deserializeAws_json1_1InferICD10CMResponse = (
  output: any,
  context: __SerdeContext
): InferICD10CMResponse => {
  let contents: any = {
    __type: "InferICD10CMResponse",
    Entities: undefined,
    ModelVersion: undefined,
    PaginationToken: undefined
  };
  if (output.Entities !== undefined && output.Entities !== null) {
    contents.Entities = deserializeAws_json1_1ICD10CMEntityList(
      output.Entities,
      context
    );
  }
  if (output.ModelVersion !== undefined && output.ModelVersion !== null) {
    contents.ModelVersion = output.ModelVersion;
  }
  if (output.PaginationToken !== undefined && output.PaginationToken !== null) {
    contents.PaginationToken = output.PaginationToken;
  }
  return contents;
};

const deserializeAws_json1_1InferRxNormResponse = (
  output: any,
  context: __SerdeContext
): InferRxNormResponse => {
  let contents: any = {
    __type: "InferRxNormResponse",
    Entities: undefined,
    ModelVersion: undefined,
    PaginationToken: undefined
  };
  if (output.Entities !== undefined && output.Entities !== null) {
    contents.Entities = deserializeAws_json1_1RxNormEntityList(
      output.Entities,
      context
    );
  }
  if (output.ModelVersion !== undefined && output.ModelVersion !== null) {
    contents.ModelVersion = output.ModelVersion;
  }
  if (output.PaginationToken !== undefined && output.PaginationToken !== null) {
    contents.PaginationToken = output.PaginationToken;
  }
  return contents;
};

const deserializeAws_json1_1InputDataConfig = (
  output: any,
  context: __SerdeContext
): InputDataConfig => {
  let contents: any = {
    __type: "InputDataConfig",
    S3Bucket: undefined,
    S3Key: undefined
  };
  if (output.S3Bucket !== undefined && output.S3Bucket !== null) {
    contents.S3Bucket = output.S3Bucket;
  }
  if (output.S3Key !== undefined && output.S3Key !== null) {
    contents.S3Key = output.S3Key;
  }
  return contents;
};

const deserializeAws_json1_1InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  let contents: any = {
    __type: "InternalServerException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidEncodingException = (
  output: any,
  context: __SerdeContext
): InvalidEncodingException => {
  let contents: any = {
    __type: "InvalidEncodingException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  let contents: any = {
    __type: "InvalidRequestException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ListEntitiesDetectionV2JobsResponse = (
  output: any,
  context: __SerdeContext
): ListEntitiesDetectionV2JobsResponse => {
  let contents: any = {
    __type: "ListEntitiesDetectionV2JobsResponse",
    ComprehendMedicalAsyncJobPropertiesList: undefined,
    NextToken: undefined
  };
  if (
    output.ComprehendMedicalAsyncJobPropertiesList !== undefined &&
    output.ComprehendMedicalAsyncJobPropertiesList !== null
  ) {
    contents.ComprehendMedicalAsyncJobPropertiesList = deserializeAws_json1_1ComprehendMedicalAsyncJobPropertiesList(
      output.ComprehendMedicalAsyncJobPropertiesList,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListPHIDetectionJobsResponse = (
  output: any,
  context: __SerdeContext
): ListPHIDetectionJobsResponse => {
  let contents: any = {
    __type: "ListPHIDetectionJobsResponse",
    ComprehendMedicalAsyncJobPropertiesList: undefined,
    NextToken: undefined
  };
  if (
    output.ComprehendMedicalAsyncJobPropertiesList !== undefined &&
    output.ComprehendMedicalAsyncJobPropertiesList !== null
  ) {
    contents.ComprehendMedicalAsyncJobPropertiesList = deserializeAws_json1_1ComprehendMedicalAsyncJobPropertiesList(
      output.ComprehendMedicalAsyncJobPropertiesList,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1OutputDataConfig = (
  output: any,
  context: __SerdeContext
): OutputDataConfig => {
  let contents: any = {
    __type: "OutputDataConfig",
    S3Bucket: undefined,
    S3Key: undefined
  };
  if (output.S3Bucket !== undefined && output.S3Bucket !== null) {
    contents.S3Bucket = output.S3Bucket;
  }
  if (output.S3Key !== undefined && output.S3Key !== null) {
    contents.S3Key = output.S3Key;
  }
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1RxNormAttribute = (
  output: any,
  context: __SerdeContext
): RxNormAttribute => {
  let contents: any = {
    __type: "RxNormAttribute",
    BeginOffset: undefined,
    EndOffset: undefined,
    Id: undefined,
    RelationshipScore: undefined,
    Score: undefined,
    Text: undefined,
    Traits: undefined,
    Type: undefined
  };
  if (output.BeginOffset !== undefined && output.BeginOffset !== null) {
    contents.BeginOffset = output.BeginOffset;
  }
  if (output.EndOffset !== undefined && output.EndOffset !== null) {
    contents.EndOffset = output.EndOffset;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (
    output.RelationshipScore !== undefined &&
    output.RelationshipScore !== null
  ) {
    contents.RelationshipScore = output.RelationshipScore;
  }
  if (output.Score !== undefined && output.Score !== null) {
    contents.Score = output.Score;
  }
  if (output.Text !== undefined && output.Text !== null) {
    contents.Text = output.Text;
  }
  if (output.Traits !== undefined && output.Traits !== null) {
    contents.Traits = deserializeAws_json1_1RxNormTraitList(
      output.Traits,
      context
    );
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1RxNormAttributeList = (
  output: any,
  context: __SerdeContext
): Array<RxNormAttribute> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RxNormAttribute(entry, context)
  );
};

const deserializeAws_json1_1RxNormConcept = (
  output: any,
  context: __SerdeContext
): RxNormConcept => {
  let contents: any = {
    __type: "RxNormConcept",
    Code: undefined,
    Description: undefined,
    Score: undefined
  };
  if (output.Code !== undefined && output.Code !== null) {
    contents.Code = output.Code;
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.Score !== undefined && output.Score !== null) {
    contents.Score = output.Score;
  }
  return contents;
};

const deserializeAws_json1_1RxNormConceptList = (
  output: any,
  context: __SerdeContext
): Array<RxNormConcept> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RxNormConcept(entry, context)
  );
};

const deserializeAws_json1_1RxNormEntity = (
  output: any,
  context: __SerdeContext
): RxNormEntity => {
  let contents: any = {
    __type: "RxNormEntity",
    Attributes: undefined,
    BeginOffset: undefined,
    Category: undefined,
    EndOffset: undefined,
    Id: undefined,
    RxNormConcepts: undefined,
    Score: undefined,
    Text: undefined,
    Traits: undefined,
    Type: undefined
  };
  if (output.Attributes !== undefined && output.Attributes !== null) {
    contents.Attributes = deserializeAws_json1_1RxNormAttributeList(
      output.Attributes,
      context
    );
  }
  if (output.BeginOffset !== undefined && output.BeginOffset !== null) {
    contents.BeginOffset = output.BeginOffset;
  }
  if (output.Category !== undefined && output.Category !== null) {
    contents.Category = output.Category;
  }
  if (output.EndOffset !== undefined && output.EndOffset !== null) {
    contents.EndOffset = output.EndOffset;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.RxNormConcepts !== undefined && output.RxNormConcepts !== null) {
    contents.RxNormConcepts = deserializeAws_json1_1RxNormConceptList(
      output.RxNormConcepts,
      context
    );
  }
  if (output.Score !== undefined && output.Score !== null) {
    contents.Score = output.Score;
  }
  if (output.Text !== undefined && output.Text !== null) {
    contents.Text = output.Text;
  }
  if (output.Traits !== undefined && output.Traits !== null) {
    contents.Traits = deserializeAws_json1_1RxNormTraitList(
      output.Traits,
      context
    );
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1RxNormEntityList = (
  output: any,
  context: __SerdeContext
): Array<RxNormEntity> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RxNormEntity(entry, context)
  );
};

const deserializeAws_json1_1RxNormTrait = (
  output: any,
  context: __SerdeContext
): RxNormTrait => {
  let contents: any = {
    __type: "RxNormTrait",
    Name: undefined,
    Score: undefined
  };
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Score !== undefined && output.Score !== null) {
    contents.Score = output.Score;
  }
  return contents;
};

const deserializeAws_json1_1RxNormTraitList = (
  output: any,
  context: __SerdeContext
): Array<RxNormTrait> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RxNormTrait(entry, context)
  );
};

const deserializeAws_json1_1ServiceUnavailableException = (
  output: any,
  context: __SerdeContext
): ServiceUnavailableException => {
  let contents: any = {
    __type: "ServiceUnavailableException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1StartEntitiesDetectionV2JobResponse = (
  output: any,
  context: __SerdeContext
): StartEntitiesDetectionV2JobResponse => {
  let contents: any = {
    __type: "StartEntitiesDetectionV2JobResponse",
    JobId: undefined
  };
  if (output.JobId !== undefined && output.JobId !== null) {
    contents.JobId = output.JobId;
  }
  return contents;
};

const deserializeAws_json1_1StartPHIDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StartPHIDetectionJobResponse => {
  let contents: any = {
    __type: "StartPHIDetectionJobResponse",
    JobId: undefined
  };
  if (output.JobId !== undefined && output.JobId !== null) {
    contents.JobId = output.JobId;
  }
  return contents;
};

const deserializeAws_json1_1StopEntitiesDetectionV2JobResponse = (
  output: any,
  context: __SerdeContext
): StopEntitiesDetectionV2JobResponse => {
  let contents: any = {
    __type: "StopEntitiesDetectionV2JobResponse",
    JobId: undefined
  };
  if (output.JobId !== undefined && output.JobId !== null) {
    contents.JobId = output.JobId;
  }
  return contents;
};

const deserializeAws_json1_1StopPHIDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StopPHIDetectionJobResponse => {
  let contents: any = {
    __type: "StopPHIDetectionJobResponse",
    JobId: undefined
  };
  if (output.JobId !== undefined && output.JobId !== null) {
    contents.JobId = output.JobId;
  }
  return contents;
};

const deserializeAws_json1_1TextSizeLimitExceededException = (
  output: any,
  context: __SerdeContext
): TextSizeLimitExceededException => {
  let contents: any = {
    __type: "TextSizeLimitExceededException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1TooManyRequestsException = (
  output: any,
  context: __SerdeContext
): TooManyRequestsException => {
  let contents: any = {
    __type: "TooManyRequestsException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1Trait = (
  output: any,
  context: __SerdeContext
): Trait => {
  let contents: any = {
    __type: "Trait",
    Name: undefined,
    Score: undefined
  };
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Score !== undefined && output.Score !== null) {
    contents.Score = output.Score;
  }
  return contents;
};

const deserializeAws_json1_1TraitList = (
  output: any,
  context: __SerdeContext
): Array<Trait> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Trait(entry, context)
  );
};

const deserializeAws_json1_1UnmappedAttribute = (
  output: any,
  context: __SerdeContext
): UnmappedAttribute => {
  let contents: any = {
    __type: "UnmappedAttribute",
    Attribute: undefined,
    Type: undefined
  };
  if (output.Attribute !== undefined && output.Attribute !== null) {
    contents.Attribute = deserializeAws_json1_1Attribute(
      output.Attribute,
      context
    );
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1UnmappedAttributeList = (
  output: any,
  context: __SerdeContext
): Array<UnmappedAttribute> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1UnmappedAttribute(entry, context)
  );
};

const deserializeAws_json1_1ValidationException = (
  output: any,
  context: __SerdeContext
): ValidationException => {
  let contents: any = {
    __type: "ValidationException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
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
