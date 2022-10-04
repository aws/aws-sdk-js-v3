// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseFloat32 as __limitedParseFloat32,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  DescribeEntitiesDetectionV2JobCommandInput,
  DescribeEntitiesDetectionV2JobCommandOutput,
} from "../commands/DescribeEntitiesDetectionV2JobCommand";
import {
  DescribeICD10CMInferenceJobCommandInput,
  DescribeICD10CMInferenceJobCommandOutput,
} from "../commands/DescribeICD10CMInferenceJobCommand";
import {
  DescribePHIDetectionJobCommandInput,
  DescribePHIDetectionJobCommandOutput,
} from "../commands/DescribePHIDetectionJobCommand";
import {
  DescribeRxNormInferenceJobCommandInput,
  DescribeRxNormInferenceJobCommandOutput,
} from "../commands/DescribeRxNormInferenceJobCommand";
import {
  DescribeSNOMEDCTInferenceJobCommandInput,
  DescribeSNOMEDCTInferenceJobCommandOutput,
} from "../commands/DescribeSNOMEDCTInferenceJobCommand";
import { DetectEntitiesCommandInput, DetectEntitiesCommandOutput } from "../commands/DetectEntitiesCommand";
import { DetectEntitiesV2CommandInput, DetectEntitiesV2CommandOutput } from "../commands/DetectEntitiesV2Command";
import { DetectPHICommandInput, DetectPHICommandOutput } from "../commands/DetectPHICommand";
import { InferICD10CMCommandInput, InferICD10CMCommandOutput } from "../commands/InferICD10CMCommand";
import { InferRxNormCommandInput, InferRxNormCommandOutput } from "../commands/InferRxNormCommand";
import { InferSNOMEDCTCommandInput, InferSNOMEDCTCommandOutput } from "../commands/InferSNOMEDCTCommand";
import {
  ListEntitiesDetectionV2JobsCommandInput,
  ListEntitiesDetectionV2JobsCommandOutput,
} from "../commands/ListEntitiesDetectionV2JobsCommand";
import {
  ListICD10CMInferenceJobsCommandInput,
  ListICD10CMInferenceJobsCommandOutput,
} from "../commands/ListICD10CMInferenceJobsCommand";
import {
  ListPHIDetectionJobsCommandInput,
  ListPHIDetectionJobsCommandOutput,
} from "../commands/ListPHIDetectionJobsCommand";
import {
  ListRxNormInferenceJobsCommandInput,
  ListRxNormInferenceJobsCommandOutput,
} from "../commands/ListRxNormInferenceJobsCommand";
import {
  ListSNOMEDCTInferenceJobsCommandInput,
  ListSNOMEDCTInferenceJobsCommandOutput,
} from "../commands/ListSNOMEDCTInferenceJobsCommand";
import {
  StartEntitiesDetectionV2JobCommandInput,
  StartEntitiesDetectionV2JobCommandOutput,
} from "../commands/StartEntitiesDetectionV2JobCommand";
import {
  StartICD10CMInferenceJobCommandInput,
  StartICD10CMInferenceJobCommandOutput,
} from "../commands/StartICD10CMInferenceJobCommand";
import {
  StartPHIDetectionJobCommandInput,
  StartPHIDetectionJobCommandOutput,
} from "../commands/StartPHIDetectionJobCommand";
import {
  StartRxNormInferenceJobCommandInput,
  StartRxNormInferenceJobCommandOutput,
} from "../commands/StartRxNormInferenceJobCommand";
import {
  StartSNOMEDCTInferenceJobCommandInput,
  StartSNOMEDCTInferenceJobCommandOutput,
} from "../commands/StartSNOMEDCTInferenceJobCommand";
import {
  StopEntitiesDetectionV2JobCommandInput,
  StopEntitiesDetectionV2JobCommandOutput,
} from "../commands/StopEntitiesDetectionV2JobCommand";
import {
  StopICD10CMInferenceJobCommandInput,
  StopICD10CMInferenceJobCommandOutput,
} from "../commands/StopICD10CMInferenceJobCommand";
import {
  StopPHIDetectionJobCommandInput,
  StopPHIDetectionJobCommandOutput,
} from "../commands/StopPHIDetectionJobCommand";
import {
  StopRxNormInferenceJobCommandInput,
  StopRxNormInferenceJobCommandOutput,
} from "../commands/StopRxNormInferenceJobCommand";
import {
  StopSNOMEDCTInferenceJobCommandInput,
  StopSNOMEDCTInferenceJobCommandOutput,
} from "../commands/StopSNOMEDCTInferenceJobCommand";
import { ComprehendMedicalServiceException as __BaseException } from "../models/ComprehendMedicalServiceException";
import {
  Attribute,
  Characters,
  ComprehendMedicalAsyncJobFilter,
  ComprehendMedicalAsyncJobProperties,
  DescribeEntitiesDetectionV2JobRequest,
  DescribeEntitiesDetectionV2JobResponse,
  DescribeICD10CMInferenceJobRequest,
  DescribeICD10CMInferenceJobResponse,
  DescribePHIDetectionJobRequest,
  DescribePHIDetectionJobResponse,
  DescribeRxNormInferenceJobRequest,
  DescribeRxNormInferenceJobResponse,
  DescribeSNOMEDCTInferenceJobRequest,
  DescribeSNOMEDCTInferenceJobResponse,
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
  InferSNOMEDCTRequest,
  InferSNOMEDCTResponse,
  InputDataConfig,
  InternalServerException,
  InvalidEncodingException,
  InvalidRequestException,
  ListEntitiesDetectionV2JobsRequest,
  ListEntitiesDetectionV2JobsResponse,
  ListICD10CMInferenceJobsRequest,
  ListICD10CMInferenceJobsResponse,
  ListPHIDetectionJobsRequest,
  ListPHIDetectionJobsResponse,
  ListRxNormInferenceJobsRequest,
  ListRxNormInferenceJobsResponse,
  ListSNOMEDCTInferenceJobsRequest,
  ListSNOMEDCTInferenceJobsResponse,
  OutputDataConfig,
  ResourceNotFoundException,
  RxNormAttribute,
  RxNormConcept,
  RxNormEntity,
  RxNormTrait,
  ServiceUnavailableException,
  SNOMEDCTAttribute,
  SNOMEDCTConcept,
  SNOMEDCTDetails,
  SNOMEDCTEntity,
  SNOMEDCTTrait,
  StartEntitiesDetectionV2JobRequest,
  StartEntitiesDetectionV2JobResponse,
  StartICD10CMInferenceJobRequest,
  StartICD10CMInferenceJobResponse,
  StartPHIDetectionJobRequest,
  StartPHIDetectionJobResponse,
  StartRxNormInferenceJobRequest,
  StartRxNormInferenceJobResponse,
  StartSNOMEDCTInferenceJobRequest,
  StartSNOMEDCTInferenceJobResponse,
  StopEntitiesDetectionV2JobRequest,
  StopEntitiesDetectionV2JobResponse,
  StopICD10CMInferenceJobRequest,
  StopICD10CMInferenceJobResponse,
  StopPHIDetectionJobRequest,
  StopPHIDetectionJobResponse,
  StopRxNormInferenceJobRequest,
  StopRxNormInferenceJobResponse,
  StopSNOMEDCTInferenceJobRequest,
  StopSNOMEDCTInferenceJobResponse,
  TextSizeLimitExceededException,
  TooManyRequestsException,
  Trait,
  UnmappedAttribute,
  ValidationException,
} from "../models/models_0";

export const serializeAws_json1_1DescribeEntitiesDetectionV2JobCommand = async (
  input: DescribeEntitiesDetectionV2JobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEntitiesDetectionV2JobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeICD10CMInferenceJobCommand = async (
  input: DescribeICD10CMInferenceJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ComprehendMedical_20181030.DescribeICD10CMInferenceJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeICD10CMInferenceJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribePHIDetectionJobCommand = async (
  input: DescribePHIDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ComprehendMedical_20181030.DescribePHIDetectionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribePHIDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeRxNormInferenceJobCommand = async (
  input: DescribeRxNormInferenceJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ComprehendMedical_20181030.DescribeRxNormInferenceJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeRxNormInferenceJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSNOMEDCTInferenceJobCommand = async (
  input: DescribeSNOMEDCTInferenceJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ComprehendMedical_20181030.DescribeSNOMEDCTInferenceJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeSNOMEDCTInferenceJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DetectEntitiesCommand = async (
  input: DetectEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ComprehendMedical_20181030.DetectEntities",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DetectEntitiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DetectEntitiesV2Command = async (
  input: DetectEntitiesV2CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ComprehendMedical_20181030.DetectEntitiesV2",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DetectEntitiesV2Request(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DetectPHICommand = async (
  input: DetectPHICommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ComprehendMedical_20181030.DetectPHI",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ComprehendMedical_20181030.InferICD10CM",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1InferICD10CMRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1InferRxNormCommand = async (
  input: InferRxNormCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ComprehendMedical_20181030.InferRxNorm",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1InferRxNormRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1InferSNOMEDCTCommand = async (
  input: InferSNOMEDCTCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ComprehendMedical_20181030.InferSNOMEDCT",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1InferSNOMEDCTRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListEntitiesDetectionV2JobsCommand = async (
  input: ListEntitiesDetectionV2JobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ComprehendMedical_20181030.ListEntitiesDetectionV2Jobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListEntitiesDetectionV2JobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListICD10CMInferenceJobsCommand = async (
  input: ListICD10CMInferenceJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ComprehendMedical_20181030.ListICD10CMInferenceJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListICD10CMInferenceJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListPHIDetectionJobsCommand = async (
  input: ListPHIDetectionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ComprehendMedical_20181030.ListPHIDetectionJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListPHIDetectionJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListRxNormInferenceJobsCommand = async (
  input: ListRxNormInferenceJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ComprehendMedical_20181030.ListRxNormInferenceJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListRxNormInferenceJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSNOMEDCTInferenceJobsCommand = async (
  input: ListSNOMEDCTInferenceJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ComprehendMedical_20181030.ListSNOMEDCTInferenceJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListSNOMEDCTInferenceJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartEntitiesDetectionV2JobCommand = async (
  input: StartEntitiesDetectionV2JobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ComprehendMedical_20181030.StartEntitiesDetectionV2Job",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartEntitiesDetectionV2JobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartICD10CMInferenceJobCommand = async (
  input: StartICD10CMInferenceJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ComprehendMedical_20181030.StartICD10CMInferenceJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartICD10CMInferenceJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartPHIDetectionJobCommand = async (
  input: StartPHIDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ComprehendMedical_20181030.StartPHIDetectionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartPHIDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartRxNormInferenceJobCommand = async (
  input: StartRxNormInferenceJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ComprehendMedical_20181030.StartRxNormInferenceJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartRxNormInferenceJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartSNOMEDCTInferenceJobCommand = async (
  input: StartSNOMEDCTInferenceJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ComprehendMedical_20181030.StartSNOMEDCTInferenceJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartSNOMEDCTInferenceJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopEntitiesDetectionV2JobCommand = async (
  input: StopEntitiesDetectionV2JobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ComprehendMedical_20181030.StopEntitiesDetectionV2Job",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopEntitiesDetectionV2JobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopICD10CMInferenceJobCommand = async (
  input: StopICD10CMInferenceJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ComprehendMedical_20181030.StopICD10CMInferenceJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopICD10CMInferenceJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopPHIDetectionJobCommand = async (
  input: StopPHIDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ComprehendMedical_20181030.StopPHIDetectionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopPHIDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopRxNormInferenceJobCommand = async (
  input: StopRxNormInferenceJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ComprehendMedical_20181030.StopRxNormInferenceJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopRxNormInferenceJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopSNOMEDCTInferenceJobCommand = async (
  input: StopSNOMEDCTInferenceJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ComprehendMedical_20181030.StopSNOMEDCTInferenceJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopSNOMEDCTInferenceJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1DescribeEntitiesDetectionV2JobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEntitiesDetectionV2JobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEntitiesDetectionV2JobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEntitiesDetectionV2JobResponse(data, context);
  const response: DescribeEntitiesDetectionV2JobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEntitiesDetectionV2JobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEntitiesDetectionV2JobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehendmedical#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeICD10CMInferenceJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeICD10CMInferenceJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeICD10CMInferenceJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeICD10CMInferenceJobResponse(data, context);
  const response: DescribeICD10CMInferenceJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeICD10CMInferenceJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeICD10CMInferenceJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehendmedical#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribePHIDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePHIDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribePHIDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribePHIDetectionJobResponse(data, context);
  const response: DescribePHIDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribePHIDetectionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePHIDetectionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehendmedical#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeRxNormInferenceJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRxNormInferenceJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeRxNormInferenceJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeRxNormInferenceJobResponse(data, context);
  const response: DescribeRxNormInferenceJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeRxNormInferenceJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRxNormInferenceJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehendmedical#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeSNOMEDCTInferenceJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSNOMEDCTInferenceJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeSNOMEDCTInferenceJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSNOMEDCTInferenceJobResponse(data, context);
  const response: DescribeSNOMEDCTInferenceJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeSNOMEDCTInferenceJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSNOMEDCTInferenceJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehendmedical#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DetectEntitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectEntitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DetectEntitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetectEntitiesResponse(data, context);
  const response: DetectEntitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DetectEntitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectEntitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehendmedical#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidEncodingException":
    case "com.amazonaws.comprehendmedical#InvalidEncodingException":
      throw await deserializeAws_json1_1InvalidEncodingExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.comprehendmedical#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehendmedical#TextSizeLimitExceededException":
      throw await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DetectEntitiesV2Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectEntitiesV2CommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DetectEntitiesV2CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetectEntitiesV2Response(data, context);
  const response: DetectEntitiesV2CommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DetectEntitiesV2CommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectEntitiesV2CommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehendmedical#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidEncodingException":
    case "com.amazonaws.comprehendmedical#InvalidEncodingException":
      throw await deserializeAws_json1_1InvalidEncodingExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.comprehendmedical#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehendmedical#TextSizeLimitExceededException":
      throw await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DetectPHICommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectPHICommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DetectPHICommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetectPHIResponse(data, context);
  const response: DetectPHICommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DetectPHICommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectPHICommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehendmedical#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidEncodingException":
    case "com.amazonaws.comprehendmedical#InvalidEncodingException":
      throw await deserializeAws_json1_1InvalidEncodingExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.comprehendmedical#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehendmedical#TextSizeLimitExceededException":
      throw await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1InferICD10CMCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InferICD10CMCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1InferICD10CMCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1InferICD10CMResponse(data, context);
  const response: InferICD10CMCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1InferICD10CMCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InferICD10CMCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehendmedical#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidEncodingException":
    case "com.amazonaws.comprehendmedical#InvalidEncodingException":
      throw await deserializeAws_json1_1InvalidEncodingExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.comprehendmedical#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehendmedical#TextSizeLimitExceededException":
      throw await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1InferRxNormCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InferRxNormCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1InferRxNormCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1InferRxNormResponse(data, context);
  const response: InferRxNormCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1InferRxNormCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InferRxNormCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehendmedical#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidEncodingException":
    case "com.amazonaws.comprehendmedical#InvalidEncodingException":
      throw await deserializeAws_json1_1InvalidEncodingExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.comprehendmedical#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehendmedical#TextSizeLimitExceededException":
      throw await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1InferSNOMEDCTCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InferSNOMEDCTCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1InferSNOMEDCTCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1InferSNOMEDCTResponse(data, context);
  const response: InferSNOMEDCTCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1InferSNOMEDCTCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InferSNOMEDCTCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehendmedical#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidEncodingException":
    case "com.amazonaws.comprehendmedical#InvalidEncodingException":
      throw await deserializeAws_json1_1InvalidEncodingExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.comprehendmedical#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehendmedical#TextSizeLimitExceededException":
      throw await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListEntitiesDetectionV2JobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntitiesDetectionV2JobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListEntitiesDetectionV2JobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListEntitiesDetectionV2JobsResponse(data, context);
  const response: ListEntitiesDetectionV2JobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListEntitiesDetectionV2JobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntitiesDetectionV2JobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehendmedical#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.comprehendmedical#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListICD10CMInferenceJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListICD10CMInferenceJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListICD10CMInferenceJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListICD10CMInferenceJobsResponse(data, context);
  const response: ListICD10CMInferenceJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListICD10CMInferenceJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListICD10CMInferenceJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehendmedical#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.comprehendmedical#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListPHIDetectionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPHIDetectionJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListPHIDetectionJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPHIDetectionJobsResponse(data, context);
  const response: ListPHIDetectionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListPHIDetectionJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPHIDetectionJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehendmedical#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.comprehendmedical#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListRxNormInferenceJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRxNormInferenceJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListRxNormInferenceJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListRxNormInferenceJobsResponse(data, context);
  const response: ListRxNormInferenceJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListRxNormInferenceJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRxNormInferenceJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehendmedical#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.comprehendmedical#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListSNOMEDCTInferenceJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSNOMEDCTInferenceJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListSNOMEDCTInferenceJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSNOMEDCTInferenceJobsResponse(data, context);
  const response: ListSNOMEDCTInferenceJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSNOMEDCTInferenceJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSNOMEDCTInferenceJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehendmedical#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.comprehendmedical#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartEntitiesDetectionV2JobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartEntitiesDetectionV2JobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartEntitiesDetectionV2JobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartEntitiesDetectionV2JobResponse(data, context);
  const response: StartEntitiesDetectionV2JobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartEntitiesDetectionV2JobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartEntitiesDetectionV2JobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehendmedical#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartICD10CMInferenceJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartICD10CMInferenceJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartICD10CMInferenceJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartICD10CMInferenceJobResponse(data, context);
  const response: StartICD10CMInferenceJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartICD10CMInferenceJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartICD10CMInferenceJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehendmedical#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartPHIDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPHIDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartPHIDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartPHIDetectionJobResponse(data, context);
  const response: StartPHIDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartPHIDetectionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPHIDetectionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehendmedical#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartRxNormInferenceJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRxNormInferenceJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartRxNormInferenceJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartRxNormInferenceJobResponse(data, context);
  const response: StartRxNormInferenceJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartRxNormInferenceJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRxNormInferenceJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehendmedical#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartSNOMEDCTInferenceJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSNOMEDCTInferenceJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartSNOMEDCTInferenceJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartSNOMEDCTInferenceJobResponse(data, context);
  const response: StartSNOMEDCTInferenceJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartSNOMEDCTInferenceJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSNOMEDCTInferenceJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehendmedical#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StopEntitiesDetectionV2JobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopEntitiesDetectionV2JobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopEntitiesDetectionV2JobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopEntitiesDetectionV2JobResponse(data, context);
  const response: StopEntitiesDetectionV2JobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopEntitiesDetectionV2JobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopEntitiesDetectionV2JobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehendmedical#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StopICD10CMInferenceJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopICD10CMInferenceJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopICD10CMInferenceJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopICD10CMInferenceJobResponse(data, context);
  const response: StopICD10CMInferenceJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopICD10CMInferenceJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopICD10CMInferenceJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehendmedical#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StopPHIDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopPHIDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopPHIDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopPHIDetectionJobResponse(data, context);
  const response: StopPHIDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopPHIDetectionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopPHIDetectionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehendmedical#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StopRxNormInferenceJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopRxNormInferenceJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopRxNormInferenceJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopRxNormInferenceJobResponse(data, context);
  const response: StopRxNormInferenceJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopRxNormInferenceJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopRxNormInferenceJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehendmedical#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StopSNOMEDCTInferenceJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopSNOMEDCTInferenceJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopSNOMEDCTInferenceJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopSNOMEDCTInferenceJobResponse(data, context);
  const response: StopSNOMEDCTInferenceJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopSNOMEDCTInferenceJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopSNOMEDCTInferenceJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.comprehendmedical#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerException(body, context);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidEncodingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEncodingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidEncodingException(body, context);
  const exception = new InvalidEncodingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRequestException(body, context);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceUnavailableException(body, context);
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TextSizeLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TextSizeLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TextSizeLimitExceededException(body, context);
  const exception = new TextSizeLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyRequestsException(body, context);
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1ComprehendMedicalAsyncJobFilter = (
  input: ComprehendMedicalAsyncJobFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.JobStatus != null && { JobStatus: input.JobStatus }),
    ...(input.SubmitTimeAfter != null && { SubmitTimeAfter: Math.round(input.SubmitTimeAfter.getTime() / 1000) }),
    ...(input.SubmitTimeBefore != null && { SubmitTimeBefore: Math.round(input.SubmitTimeBefore.getTime() / 1000) }),
  };
};

const serializeAws_json1_1DescribeEntitiesDetectionV2JobRequest = (
  input: DescribeEntitiesDetectionV2JobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1DescribeICD10CMInferenceJobRequest = (
  input: DescribeICD10CMInferenceJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1DescribePHIDetectionJobRequest = (
  input: DescribePHIDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1DescribeRxNormInferenceJobRequest = (
  input: DescribeRxNormInferenceJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1DescribeSNOMEDCTInferenceJobRequest = (
  input: DescribeSNOMEDCTInferenceJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1DetectEntitiesRequest = (input: DetectEntitiesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Text != null && { Text: input.Text }),
  };
};

const serializeAws_json1_1DetectEntitiesV2Request = (input: DetectEntitiesV2Request, context: __SerdeContext): any => {
  return {
    ...(input.Text != null && { Text: input.Text }),
  };
};

const serializeAws_json1_1DetectPHIRequest = (input: DetectPHIRequest, context: __SerdeContext): any => {
  return {
    ...(input.Text != null && { Text: input.Text }),
  };
};

const serializeAws_json1_1InferICD10CMRequest = (input: InferICD10CMRequest, context: __SerdeContext): any => {
  return {
    ...(input.Text != null && { Text: input.Text }),
  };
};

const serializeAws_json1_1InferRxNormRequest = (input: InferRxNormRequest, context: __SerdeContext): any => {
  return {
    ...(input.Text != null && { Text: input.Text }),
  };
};

const serializeAws_json1_1InferSNOMEDCTRequest = (input: InferSNOMEDCTRequest, context: __SerdeContext): any => {
  return {
    ...(input.Text != null && { Text: input.Text }),
  };
};

const serializeAws_json1_1InputDataConfig = (input: InputDataConfig, context: __SerdeContext): any => {
  return {
    ...(input.S3Bucket != null && { S3Bucket: input.S3Bucket }),
    ...(input.S3Key != null && { S3Key: input.S3Key }),
  };
};

const serializeAws_json1_1ListEntitiesDetectionV2JobsRequest = (
  input: ListEntitiesDetectionV2JobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: serializeAws_json1_1ComprehendMedicalAsyncJobFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListICD10CMInferenceJobsRequest = (
  input: ListICD10CMInferenceJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: serializeAws_json1_1ComprehendMedicalAsyncJobFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListPHIDetectionJobsRequest = (
  input: ListPHIDetectionJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: serializeAws_json1_1ComprehendMedicalAsyncJobFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListRxNormInferenceJobsRequest = (
  input: ListRxNormInferenceJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: serializeAws_json1_1ComprehendMedicalAsyncJobFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListSNOMEDCTInferenceJobsRequest = (
  input: ListSNOMEDCTInferenceJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: serializeAws_json1_1ComprehendMedicalAsyncJobFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1OutputDataConfig = (input: OutputDataConfig, context: __SerdeContext): any => {
  return {
    ...(input.S3Bucket != null && { S3Bucket: input.S3Bucket }),
    ...(input.S3Key != null && { S3Key: input.S3Key }),
  };
};

const serializeAws_json1_1StartEntitiesDetectionV2JobRequest = (
  input: StartEntitiesDetectionV2JobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.InputDataConfig != null && {
      InputDataConfig: serializeAws_json1_1InputDataConfig(input.InputDataConfig, context),
    }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.KMSKey != null && { KMSKey: input.KMSKey }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.OutputDataConfig != null && {
      OutputDataConfig: serializeAws_json1_1OutputDataConfig(input.OutputDataConfig, context),
    }),
  };
};

const serializeAws_json1_1StartICD10CMInferenceJobRequest = (
  input: StartICD10CMInferenceJobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.InputDataConfig != null && {
      InputDataConfig: serializeAws_json1_1InputDataConfig(input.InputDataConfig, context),
    }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.KMSKey != null && { KMSKey: input.KMSKey }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.OutputDataConfig != null && {
      OutputDataConfig: serializeAws_json1_1OutputDataConfig(input.OutputDataConfig, context),
    }),
  };
};

const serializeAws_json1_1StartPHIDetectionJobRequest = (
  input: StartPHIDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.InputDataConfig != null && {
      InputDataConfig: serializeAws_json1_1InputDataConfig(input.InputDataConfig, context),
    }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.KMSKey != null && { KMSKey: input.KMSKey }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.OutputDataConfig != null && {
      OutputDataConfig: serializeAws_json1_1OutputDataConfig(input.OutputDataConfig, context),
    }),
  };
};

const serializeAws_json1_1StartRxNormInferenceJobRequest = (
  input: StartRxNormInferenceJobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.InputDataConfig != null && {
      InputDataConfig: serializeAws_json1_1InputDataConfig(input.InputDataConfig, context),
    }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.KMSKey != null && { KMSKey: input.KMSKey }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.OutputDataConfig != null && {
      OutputDataConfig: serializeAws_json1_1OutputDataConfig(input.OutputDataConfig, context),
    }),
  };
};

const serializeAws_json1_1StartSNOMEDCTInferenceJobRequest = (
  input: StartSNOMEDCTInferenceJobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.InputDataConfig != null && {
      InputDataConfig: serializeAws_json1_1InputDataConfig(input.InputDataConfig, context),
    }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.KMSKey != null && { KMSKey: input.KMSKey }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.OutputDataConfig != null && {
      OutputDataConfig: serializeAws_json1_1OutputDataConfig(input.OutputDataConfig, context),
    }),
  };
};

const serializeAws_json1_1StopEntitiesDetectionV2JobRequest = (
  input: StopEntitiesDetectionV2JobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1StopICD10CMInferenceJobRequest = (
  input: StopICD10CMInferenceJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1StopPHIDetectionJobRequest = (
  input: StopPHIDetectionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1StopRxNormInferenceJobRequest = (
  input: StopRxNormInferenceJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1StopSNOMEDCTInferenceJobRequest = (
  input: StopSNOMEDCTInferenceJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

const deserializeAws_json1_1Attribute = (output: any, context: __SerdeContext): Attribute => {
  return {
    BeginOffset: __expectInt32(output.BeginOffset),
    Category: __expectString(output.Category),
    EndOffset: __expectInt32(output.EndOffset),
    Id: __expectInt32(output.Id),
    RelationshipScore: __limitedParseFloat32(output.RelationshipScore),
    RelationshipType: __expectString(output.RelationshipType),
    Score: __limitedParseFloat32(output.Score),
    Text: __expectString(output.Text),
    Traits: output.Traits != null ? deserializeAws_json1_1TraitList(output.Traits, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1AttributeList = (output: any, context: __SerdeContext): Attribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Attribute(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Characters = (output: any, context: __SerdeContext): Characters => {
  return {
    OriginalTextCharacters: __expectInt32(output.OriginalTextCharacters),
  } as any;
};

const deserializeAws_json1_1ComprehendMedicalAsyncJobProperties = (
  output: any,
  context: __SerdeContext
): ComprehendMedicalAsyncJobProperties => {
  return {
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    ExpirationTime:
      output.ExpirationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExpirationTime)))
        : undefined,
    InputDataConfig:
      output.InputDataConfig != null
        ? deserializeAws_json1_1InputDataConfig(output.InputDataConfig, context)
        : undefined,
    JobId: __expectString(output.JobId),
    JobName: __expectString(output.JobName),
    JobStatus: __expectString(output.JobStatus),
    KMSKey: __expectString(output.KMSKey),
    LanguageCode: __expectString(output.LanguageCode),
    ManifestFilePath: __expectString(output.ManifestFilePath),
    Message: __expectString(output.Message),
    ModelVersion: __expectString(output.ModelVersion),
    OutputDataConfig:
      output.OutputDataConfig != null
        ? deserializeAws_json1_1OutputDataConfig(output.OutputDataConfig, context)
        : undefined,
    SubmitTime:
      output.SubmitTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SubmitTime))) : undefined,
  } as any;
};

const deserializeAws_json1_1ComprehendMedicalAsyncJobPropertiesList = (
  output: any,
  context: __SerdeContext
): ComprehendMedicalAsyncJobProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ComprehendMedicalAsyncJobProperties(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DescribeEntitiesDetectionV2JobResponse = (
  output: any,
  context: __SerdeContext
): DescribeEntitiesDetectionV2JobResponse => {
  return {
    ComprehendMedicalAsyncJobProperties:
      output.ComprehendMedicalAsyncJobProperties != null
        ? deserializeAws_json1_1ComprehendMedicalAsyncJobProperties(output.ComprehendMedicalAsyncJobProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeICD10CMInferenceJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeICD10CMInferenceJobResponse => {
  return {
    ComprehendMedicalAsyncJobProperties:
      output.ComprehendMedicalAsyncJobProperties != null
        ? deserializeAws_json1_1ComprehendMedicalAsyncJobProperties(output.ComprehendMedicalAsyncJobProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribePHIDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): DescribePHIDetectionJobResponse => {
  return {
    ComprehendMedicalAsyncJobProperties:
      output.ComprehendMedicalAsyncJobProperties != null
        ? deserializeAws_json1_1ComprehendMedicalAsyncJobProperties(output.ComprehendMedicalAsyncJobProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeRxNormInferenceJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeRxNormInferenceJobResponse => {
  return {
    ComprehendMedicalAsyncJobProperties:
      output.ComprehendMedicalAsyncJobProperties != null
        ? deserializeAws_json1_1ComprehendMedicalAsyncJobProperties(output.ComprehendMedicalAsyncJobProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeSNOMEDCTInferenceJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeSNOMEDCTInferenceJobResponse => {
  return {
    ComprehendMedicalAsyncJobProperties:
      output.ComprehendMedicalAsyncJobProperties != null
        ? deserializeAws_json1_1ComprehendMedicalAsyncJobProperties(output.ComprehendMedicalAsyncJobProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DetectEntitiesResponse = (output: any, context: __SerdeContext): DetectEntitiesResponse => {
  return {
    Entities: output.Entities != null ? deserializeAws_json1_1EntityList(output.Entities, context) : undefined,
    ModelVersion: __expectString(output.ModelVersion),
    PaginationToken: __expectString(output.PaginationToken),
    UnmappedAttributes:
      output.UnmappedAttributes != null
        ? deserializeAws_json1_1UnmappedAttributeList(output.UnmappedAttributes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DetectEntitiesV2Response = (
  output: any,
  context: __SerdeContext
): DetectEntitiesV2Response => {
  return {
    Entities: output.Entities != null ? deserializeAws_json1_1EntityList(output.Entities, context) : undefined,
    ModelVersion: __expectString(output.ModelVersion),
    PaginationToken: __expectString(output.PaginationToken),
    UnmappedAttributes:
      output.UnmappedAttributes != null
        ? deserializeAws_json1_1UnmappedAttributeList(output.UnmappedAttributes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DetectPHIResponse = (output: any, context: __SerdeContext): DetectPHIResponse => {
  return {
    Entities: output.Entities != null ? deserializeAws_json1_1EntityList(output.Entities, context) : undefined,
    ModelVersion: __expectString(output.ModelVersion),
    PaginationToken: __expectString(output.PaginationToken),
  } as any;
};

const deserializeAws_json1_1Entity = (output: any, context: __SerdeContext): Entity => {
  return {
    Attributes: output.Attributes != null ? deserializeAws_json1_1AttributeList(output.Attributes, context) : undefined,
    BeginOffset: __expectInt32(output.BeginOffset),
    Category: __expectString(output.Category),
    EndOffset: __expectInt32(output.EndOffset),
    Id: __expectInt32(output.Id),
    Score: __limitedParseFloat32(output.Score),
    Text: __expectString(output.Text),
    Traits: output.Traits != null ? deserializeAws_json1_1TraitList(output.Traits, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1EntityList = (output: any, context: __SerdeContext): Entity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Entity(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ICD10CMAttribute = (output: any, context: __SerdeContext): ICD10CMAttribute => {
  return {
    BeginOffset: __expectInt32(output.BeginOffset),
    Category: __expectString(output.Category),
    EndOffset: __expectInt32(output.EndOffset),
    Id: __expectInt32(output.Id),
    RelationshipScore: __limitedParseFloat32(output.RelationshipScore),
    RelationshipType: __expectString(output.RelationshipType),
    Score: __limitedParseFloat32(output.Score),
    Text: __expectString(output.Text),
    Traits: output.Traits != null ? deserializeAws_json1_1ICD10CMTraitList(output.Traits, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1ICD10CMAttributeList = (output: any, context: __SerdeContext): ICD10CMAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ICD10CMAttribute(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ICD10CMConcept = (output: any, context: __SerdeContext): ICD10CMConcept => {
  return {
    Code: __expectString(output.Code),
    Description: __expectString(output.Description),
    Score: __limitedParseFloat32(output.Score),
  } as any;
};

const deserializeAws_json1_1ICD10CMConceptList = (output: any, context: __SerdeContext): ICD10CMConcept[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ICD10CMConcept(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ICD10CMEntity = (output: any, context: __SerdeContext): ICD10CMEntity => {
  return {
    Attributes:
      output.Attributes != null ? deserializeAws_json1_1ICD10CMAttributeList(output.Attributes, context) : undefined,
    BeginOffset: __expectInt32(output.BeginOffset),
    Category: __expectString(output.Category),
    EndOffset: __expectInt32(output.EndOffset),
    ICD10CMConcepts:
      output.ICD10CMConcepts != null
        ? deserializeAws_json1_1ICD10CMConceptList(output.ICD10CMConcepts, context)
        : undefined,
    Id: __expectInt32(output.Id),
    Score: __limitedParseFloat32(output.Score),
    Text: __expectString(output.Text),
    Traits: output.Traits != null ? deserializeAws_json1_1ICD10CMTraitList(output.Traits, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1ICD10CMEntityList = (output: any, context: __SerdeContext): ICD10CMEntity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ICD10CMEntity(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ICD10CMTrait = (output: any, context: __SerdeContext): ICD10CMTrait => {
  return {
    Name: __expectString(output.Name),
    Score: __limitedParseFloat32(output.Score),
  } as any;
};

const deserializeAws_json1_1ICD10CMTraitList = (output: any, context: __SerdeContext): ICD10CMTrait[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ICD10CMTrait(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InferICD10CMResponse = (output: any, context: __SerdeContext): InferICD10CMResponse => {
  return {
    Entities: output.Entities != null ? deserializeAws_json1_1ICD10CMEntityList(output.Entities, context) : undefined,
    ModelVersion: __expectString(output.ModelVersion),
    PaginationToken: __expectString(output.PaginationToken),
  } as any;
};

const deserializeAws_json1_1InferRxNormResponse = (output: any, context: __SerdeContext): InferRxNormResponse => {
  return {
    Entities: output.Entities != null ? deserializeAws_json1_1RxNormEntityList(output.Entities, context) : undefined,
    ModelVersion: __expectString(output.ModelVersion),
    PaginationToken: __expectString(output.PaginationToken),
  } as any;
};

const deserializeAws_json1_1InferSNOMEDCTResponse = (output: any, context: __SerdeContext): InferSNOMEDCTResponse => {
  return {
    Characters: output.Characters != null ? deserializeAws_json1_1Characters(output.Characters, context) : undefined,
    Entities: output.Entities != null ? deserializeAws_json1_1SNOMEDCTEntityList(output.Entities, context) : undefined,
    ModelVersion: __expectString(output.ModelVersion),
    PaginationToken: __expectString(output.PaginationToken),
    SNOMEDCTDetails:
      output.SNOMEDCTDetails != null
        ? deserializeAws_json1_1SNOMEDCTDetails(output.SNOMEDCTDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InputDataConfig = (output: any, context: __SerdeContext): InputDataConfig => {
  return {
    S3Bucket: __expectString(output.S3Bucket),
    S3Key: __expectString(output.S3Key),
  } as any;
};

const deserializeAws_json1_1InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidEncodingException = (
  output: any,
  context: __SerdeContext
): InvalidEncodingException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ListEntitiesDetectionV2JobsResponse = (
  output: any,
  context: __SerdeContext
): ListEntitiesDetectionV2JobsResponse => {
  return {
    ComprehendMedicalAsyncJobPropertiesList:
      output.ComprehendMedicalAsyncJobPropertiesList != null
        ? deserializeAws_json1_1ComprehendMedicalAsyncJobPropertiesList(
            output.ComprehendMedicalAsyncJobPropertiesList,
            context
          )
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListICD10CMInferenceJobsResponse = (
  output: any,
  context: __SerdeContext
): ListICD10CMInferenceJobsResponse => {
  return {
    ComprehendMedicalAsyncJobPropertiesList:
      output.ComprehendMedicalAsyncJobPropertiesList != null
        ? deserializeAws_json1_1ComprehendMedicalAsyncJobPropertiesList(
            output.ComprehendMedicalAsyncJobPropertiesList,
            context
          )
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListPHIDetectionJobsResponse = (
  output: any,
  context: __SerdeContext
): ListPHIDetectionJobsResponse => {
  return {
    ComprehendMedicalAsyncJobPropertiesList:
      output.ComprehendMedicalAsyncJobPropertiesList != null
        ? deserializeAws_json1_1ComprehendMedicalAsyncJobPropertiesList(
            output.ComprehendMedicalAsyncJobPropertiesList,
            context
          )
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListRxNormInferenceJobsResponse = (
  output: any,
  context: __SerdeContext
): ListRxNormInferenceJobsResponse => {
  return {
    ComprehendMedicalAsyncJobPropertiesList:
      output.ComprehendMedicalAsyncJobPropertiesList != null
        ? deserializeAws_json1_1ComprehendMedicalAsyncJobPropertiesList(
            output.ComprehendMedicalAsyncJobPropertiesList,
            context
          )
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListSNOMEDCTInferenceJobsResponse = (
  output: any,
  context: __SerdeContext
): ListSNOMEDCTInferenceJobsResponse => {
  return {
    ComprehendMedicalAsyncJobPropertiesList:
      output.ComprehendMedicalAsyncJobPropertiesList != null
        ? deserializeAws_json1_1ComprehendMedicalAsyncJobPropertiesList(
            output.ComprehendMedicalAsyncJobPropertiesList,
            context
          )
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1OutputDataConfig = (output: any, context: __SerdeContext): OutputDataConfig => {
  return {
    S3Bucket: __expectString(output.S3Bucket),
    S3Key: __expectString(output.S3Key),
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1RxNormAttribute = (output: any, context: __SerdeContext): RxNormAttribute => {
  return {
    BeginOffset: __expectInt32(output.BeginOffset),
    EndOffset: __expectInt32(output.EndOffset),
    Id: __expectInt32(output.Id),
    RelationshipScore: __limitedParseFloat32(output.RelationshipScore),
    Score: __limitedParseFloat32(output.Score),
    Text: __expectString(output.Text),
    Traits: output.Traits != null ? deserializeAws_json1_1RxNormTraitList(output.Traits, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1RxNormAttributeList = (output: any, context: __SerdeContext): RxNormAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RxNormAttribute(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RxNormConcept = (output: any, context: __SerdeContext): RxNormConcept => {
  return {
    Code: __expectString(output.Code),
    Description: __expectString(output.Description),
    Score: __limitedParseFloat32(output.Score),
  } as any;
};

const deserializeAws_json1_1RxNormConceptList = (output: any, context: __SerdeContext): RxNormConcept[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RxNormConcept(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RxNormEntity = (output: any, context: __SerdeContext): RxNormEntity => {
  return {
    Attributes:
      output.Attributes != null ? deserializeAws_json1_1RxNormAttributeList(output.Attributes, context) : undefined,
    BeginOffset: __expectInt32(output.BeginOffset),
    Category: __expectString(output.Category),
    EndOffset: __expectInt32(output.EndOffset),
    Id: __expectInt32(output.Id),
    RxNormConcepts:
      output.RxNormConcepts != null
        ? deserializeAws_json1_1RxNormConceptList(output.RxNormConcepts, context)
        : undefined,
    Score: __limitedParseFloat32(output.Score),
    Text: __expectString(output.Text),
    Traits: output.Traits != null ? deserializeAws_json1_1RxNormTraitList(output.Traits, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1RxNormEntityList = (output: any, context: __SerdeContext): RxNormEntity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RxNormEntity(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RxNormTrait = (output: any, context: __SerdeContext): RxNormTrait => {
  return {
    Name: __expectString(output.Name),
    Score: __limitedParseFloat32(output.Score),
  } as any;
};

const deserializeAws_json1_1RxNormTraitList = (output: any, context: __SerdeContext): RxNormTrait[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RxNormTrait(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ServiceUnavailableException = (
  output: any,
  context: __SerdeContext
): ServiceUnavailableException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1SNOMEDCTAttribute = (output: any, context: __SerdeContext): SNOMEDCTAttribute => {
  return {
    BeginOffset: __expectInt32(output.BeginOffset),
    Category: __expectString(output.Category),
    EndOffset: __expectInt32(output.EndOffset),
    Id: __expectInt32(output.Id),
    RelationshipScore: __limitedParseFloat32(output.RelationshipScore),
    RelationshipType: __expectString(output.RelationshipType),
    SNOMEDCTConcepts:
      output.SNOMEDCTConcepts != null
        ? deserializeAws_json1_1SNOMEDCTConceptList(output.SNOMEDCTConcepts, context)
        : undefined,
    Score: __limitedParseFloat32(output.Score),
    Text: __expectString(output.Text),
    Traits: output.Traits != null ? deserializeAws_json1_1SNOMEDCTTraitList(output.Traits, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1SNOMEDCTAttributeList = (output: any, context: __SerdeContext): SNOMEDCTAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SNOMEDCTAttribute(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SNOMEDCTConcept = (output: any, context: __SerdeContext): SNOMEDCTConcept => {
  return {
    Code: __expectString(output.Code),
    Description: __expectString(output.Description),
    Score: __limitedParseFloat32(output.Score),
  } as any;
};

const deserializeAws_json1_1SNOMEDCTConceptList = (output: any, context: __SerdeContext): SNOMEDCTConcept[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SNOMEDCTConcept(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SNOMEDCTDetails = (output: any, context: __SerdeContext): SNOMEDCTDetails => {
  return {
    Edition: __expectString(output.Edition),
    Language: __expectString(output.Language),
    VersionDate: __expectString(output.VersionDate),
  } as any;
};

const deserializeAws_json1_1SNOMEDCTEntity = (output: any, context: __SerdeContext): SNOMEDCTEntity => {
  return {
    Attributes:
      output.Attributes != null ? deserializeAws_json1_1SNOMEDCTAttributeList(output.Attributes, context) : undefined,
    BeginOffset: __expectInt32(output.BeginOffset),
    Category: __expectString(output.Category),
    EndOffset: __expectInt32(output.EndOffset),
    Id: __expectInt32(output.Id),
    SNOMEDCTConcepts:
      output.SNOMEDCTConcepts != null
        ? deserializeAws_json1_1SNOMEDCTConceptList(output.SNOMEDCTConcepts, context)
        : undefined,
    Score: __limitedParseFloat32(output.Score),
    Text: __expectString(output.Text),
    Traits: output.Traits != null ? deserializeAws_json1_1SNOMEDCTTraitList(output.Traits, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1SNOMEDCTEntityList = (output: any, context: __SerdeContext): SNOMEDCTEntity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SNOMEDCTEntity(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SNOMEDCTTrait = (output: any, context: __SerdeContext): SNOMEDCTTrait => {
  return {
    Name: __expectString(output.Name),
    Score: __limitedParseFloat32(output.Score),
  } as any;
};

const deserializeAws_json1_1SNOMEDCTTraitList = (output: any, context: __SerdeContext): SNOMEDCTTrait[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SNOMEDCTTrait(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1StartEntitiesDetectionV2JobResponse = (
  output: any,
  context: __SerdeContext
): StartEntitiesDetectionV2JobResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

const deserializeAws_json1_1StartICD10CMInferenceJobResponse = (
  output: any,
  context: __SerdeContext
): StartICD10CMInferenceJobResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

const deserializeAws_json1_1StartPHIDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StartPHIDetectionJobResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

const deserializeAws_json1_1StartRxNormInferenceJobResponse = (
  output: any,
  context: __SerdeContext
): StartRxNormInferenceJobResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

const deserializeAws_json1_1StartSNOMEDCTInferenceJobResponse = (
  output: any,
  context: __SerdeContext
): StartSNOMEDCTInferenceJobResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

const deserializeAws_json1_1StopEntitiesDetectionV2JobResponse = (
  output: any,
  context: __SerdeContext
): StopEntitiesDetectionV2JobResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

const deserializeAws_json1_1StopICD10CMInferenceJobResponse = (
  output: any,
  context: __SerdeContext
): StopICD10CMInferenceJobResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

const deserializeAws_json1_1StopPHIDetectionJobResponse = (
  output: any,
  context: __SerdeContext
): StopPHIDetectionJobResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

const deserializeAws_json1_1StopRxNormInferenceJobResponse = (
  output: any,
  context: __SerdeContext
): StopRxNormInferenceJobResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

const deserializeAws_json1_1StopSNOMEDCTInferenceJobResponse = (
  output: any,
  context: __SerdeContext
): StopSNOMEDCTInferenceJobResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

const deserializeAws_json1_1TextSizeLimitExceededException = (
  output: any,
  context: __SerdeContext
): TextSizeLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1TooManyRequestsException = (
  output: any,
  context: __SerdeContext
): TooManyRequestsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Trait = (output: any, context: __SerdeContext): Trait => {
  return {
    Name: __expectString(output.Name),
    Score: __limitedParseFloat32(output.Score),
  } as any;
};

const deserializeAws_json1_1TraitList = (output: any, context: __SerdeContext): Trait[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Trait(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1UnmappedAttribute = (output: any, context: __SerdeContext): UnmappedAttribute => {
  return {
    Attribute: output.Attribute != null ? deserializeAws_json1_1Attribute(output.Attribute, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1UnmappedAttributeList = (output: any, context: __SerdeContext): UnmappedAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1UnmappedAttribute(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
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
