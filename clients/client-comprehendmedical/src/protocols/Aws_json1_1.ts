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

/**
 * serializeAws_json1_1DescribeEntitiesDetectionV2JobCommand
 */
export const se_DescribeEntitiesDetectionV2JobCommand = async (
  input: DescribeEntitiesDetectionV2JobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEntitiesDetectionV2Job");
  let body: any;
  body = JSON.stringify(se_DescribeEntitiesDetectionV2JobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeICD10CMInferenceJobCommand
 */
export const se_DescribeICD10CMInferenceJobCommand = async (
  input: DescribeICD10CMInferenceJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeICD10CMInferenceJob");
  let body: any;
  body = JSON.stringify(se_DescribeICD10CMInferenceJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePHIDetectionJobCommand
 */
export const se_DescribePHIDetectionJobCommand = async (
  input: DescribePHIDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribePHIDetectionJob");
  let body: any;
  body = JSON.stringify(se_DescribePHIDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeRxNormInferenceJobCommand
 */
export const se_DescribeRxNormInferenceJobCommand = async (
  input: DescribeRxNormInferenceJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeRxNormInferenceJob");
  let body: any;
  body = JSON.stringify(se_DescribeRxNormInferenceJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeSNOMEDCTInferenceJobCommand
 */
export const se_DescribeSNOMEDCTInferenceJobCommand = async (
  input: DescribeSNOMEDCTInferenceJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeSNOMEDCTInferenceJob");
  let body: any;
  body = JSON.stringify(se_DescribeSNOMEDCTInferenceJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DetectEntitiesCommand
 */
export const se_DetectEntitiesCommand = async (
  input: DetectEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DetectEntities");
  let body: any;
  body = JSON.stringify(se_DetectEntitiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DetectEntitiesV2Command
 */
export const se_DetectEntitiesV2Command = async (
  input: DetectEntitiesV2CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DetectEntitiesV2");
  let body: any;
  body = JSON.stringify(se_DetectEntitiesV2Request(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DetectPHICommand
 */
export const se_DetectPHICommand = async (
  input: DetectPHICommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DetectPHI");
  let body: any;
  body = JSON.stringify(se_DetectPHIRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1InferICD10CMCommand
 */
export const se_InferICD10CMCommand = async (
  input: InferICD10CMCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("InferICD10CM");
  let body: any;
  body = JSON.stringify(se_InferICD10CMRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1InferRxNormCommand
 */
export const se_InferRxNormCommand = async (
  input: InferRxNormCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("InferRxNorm");
  let body: any;
  body = JSON.stringify(se_InferRxNormRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1InferSNOMEDCTCommand
 */
export const se_InferSNOMEDCTCommand = async (
  input: InferSNOMEDCTCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("InferSNOMEDCT");
  let body: any;
  body = JSON.stringify(se_InferSNOMEDCTRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListEntitiesDetectionV2JobsCommand
 */
export const se_ListEntitiesDetectionV2JobsCommand = async (
  input: ListEntitiesDetectionV2JobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEntitiesDetectionV2Jobs");
  let body: any;
  body = JSON.stringify(se_ListEntitiesDetectionV2JobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListICD10CMInferenceJobsCommand
 */
export const se_ListICD10CMInferenceJobsCommand = async (
  input: ListICD10CMInferenceJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListICD10CMInferenceJobs");
  let body: any;
  body = JSON.stringify(se_ListICD10CMInferenceJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPHIDetectionJobsCommand
 */
export const se_ListPHIDetectionJobsCommand = async (
  input: ListPHIDetectionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPHIDetectionJobs");
  let body: any;
  body = JSON.stringify(se_ListPHIDetectionJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListRxNormInferenceJobsCommand
 */
export const se_ListRxNormInferenceJobsCommand = async (
  input: ListRxNormInferenceJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListRxNormInferenceJobs");
  let body: any;
  body = JSON.stringify(se_ListRxNormInferenceJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSNOMEDCTInferenceJobsCommand
 */
export const se_ListSNOMEDCTInferenceJobsCommand = async (
  input: ListSNOMEDCTInferenceJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSNOMEDCTInferenceJobs");
  let body: any;
  body = JSON.stringify(se_ListSNOMEDCTInferenceJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartEntitiesDetectionV2JobCommand
 */
export const se_StartEntitiesDetectionV2JobCommand = async (
  input: StartEntitiesDetectionV2JobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartEntitiesDetectionV2Job");
  let body: any;
  body = JSON.stringify(se_StartEntitiesDetectionV2JobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartICD10CMInferenceJobCommand
 */
export const se_StartICD10CMInferenceJobCommand = async (
  input: StartICD10CMInferenceJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartICD10CMInferenceJob");
  let body: any;
  body = JSON.stringify(se_StartICD10CMInferenceJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartPHIDetectionJobCommand
 */
export const se_StartPHIDetectionJobCommand = async (
  input: StartPHIDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartPHIDetectionJob");
  let body: any;
  body = JSON.stringify(se_StartPHIDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartRxNormInferenceJobCommand
 */
export const se_StartRxNormInferenceJobCommand = async (
  input: StartRxNormInferenceJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartRxNormInferenceJob");
  let body: any;
  body = JSON.stringify(se_StartRxNormInferenceJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartSNOMEDCTInferenceJobCommand
 */
export const se_StartSNOMEDCTInferenceJobCommand = async (
  input: StartSNOMEDCTInferenceJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartSNOMEDCTInferenceJob");
  let body: any;
  body = JSON.stringify(se_StartSNOMEDCTInferenceJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopEntitiesDetectionV2JobCommand
 */
export const se_StopEntitiesDetectionV2JobCommand = async (
  input: StopEntitiesDetectionV2JobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopEntitiesDetectionV2Job");
  let body: any;
  body = JSON.stringify(se_StopEntitiesDetectionV2JobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopICD10CMInferenceJobCommand
 */
export const se_StopICD10CMInferenceJobCommand = async (
  input: StopICD10CMInferenceJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopICD10CMInferenceJob");
  let body: any;
  body = JSON.stringify(se_StopICD10CMInferenceJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopPHIDetectionJobCommand
 */
export const se_StopPHIDetectionJobCommand = async (
  input: StopPHIDetectionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopPHIDetectionJob");
  let body: any;
  body = JSON.stringify(se_StopPHIDetectionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopRxNormInferenceJobCommand
 */
export const se_StopRxNormInferenceJobCommand = async (
  input: StopRxNormInferenceJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopRxNormInferenceJob");
  let body: any;
  body = JSON.stringify(se_StopRxNormInferenceJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopSNOMEDCTInferenceJobCommand
 */
export const se_StopSNOMEDCTInferenceJobCommand = async (
  input: StopSNOMEDCTInferenceJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopSNOMEDCTInferenceJob");
  let body: any;
  body = JSON.stringify(se_StopSNOMEDCTInferenceJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1DescribeEntitiesDetectionV2JobCommand
 */
export const de_DescribeEntitiesDetectionV2JobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEntitiesDetectionV2JobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEntitiesDetectionV2JobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEntitiesDetectionV2JobResponse(data, context);
  const response: DescribeEntitiesDetectionV2JobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeEntitiesDetectionV2JobCommandError
 */
const de_DescribeEntitiesDetectionV2JobCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeICD10CMInferenceJobCommand
 */
export const de_DescribeICD10CMInferenceJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeICD10CMInferenceJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeICD10CMInferenceJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeICD10CMInferenceJobResponse(data, context);
  const response: DescribeICD10CMInferenceJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeICD10CMInferenceJobCommandError
 */
const de_DescribeICD10CMInferenceJobCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribePHIDetectionJobCommand
 */
export const de_DescribePHIDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePHIDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribePHIDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribePHIDetectionJobResponse(data, context);
  const response: DescribePHIDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribePHIDetectionJobCommandError
 */
const de_DescribePHIDetectionJobCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeRxNormInferenceJobCommand
 */
export const de_DescribeRxNormInferenceJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRxNormInferenceJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeRxNormInferenceJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeRxNormInferenceJobResponse(data, context);
  const response: DescribeRxNormInferenceJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeRxNormInferenceJobCommandError
 */
const de_DescribeRxNormInferenceJobCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeSNOMEDCTInferenceJobCommand
 */
export const de_DescribeSNOMEDCTInferenceJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSNOMEDCTInferenceJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeSNOMEDCTInferenceJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeSNOMEDCTInferenceJobResponse(data, context);
  const response: DescribeSNOMEDCTInferenceJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeSNOMEDCTInferenceJobCommandError
 */
const de_DescribeSNOMEDCTInferenceJobCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DetectEntitiesCommand
 */
export const de_DetectEntitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectEntitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetectEntitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DetectEntitiesResponse(data, context);
  const response: DetectEntitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DetectEntitiesCommandError
 */
const de_DetectEntitiesCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidEncodingException":
    case "com.amazonaws.comprehendmedical#InvalidEncodingException":
      throw await de_InvalidEncodingExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.comprehendmedical#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehendmedical#TextSizeLimitExceededException":
      throw await de_TextSizeLimitExceededExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DetectEntitiesV2Command
 */
export const de_DetectEntitiesV2Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectEntitiesV2CommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetectEntitiesV2CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DetectEntitiesV2Response(data, context);
  const response: DetectEntitiesV2CommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DetectEntitiesV2CommandError
 */
const de_DetectEntitiesV2CommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidEncodingException":
    case "com.amazonaws.comprehendmedical#InvalidEncodingException":
      throw await de_InvalidEncodingExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.comprehendmedical#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehendmedical#TextSizeLimitExceededException":
      throw await de_TextSizeLimitExceededExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DetectPHICommand
 */
export const de_DetectPHICommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectPHICommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetectPHICommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DetectPHIResponse(data, context);
  const response: DetectPHICommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DetectPHICommandError
 */
const de_DetectPHICommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidEncodingException":
    case "com.amazonaws.comprehendmedical#InvalidEncodingException":
      throw await de_InvalidEncodingExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.comprehendmedical#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehendmedical#TextSizeLimitExceededException":
      throw await de_TextSizeLimitExceededExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1InferICD10CMCommand
 */
export const de_InferICD10CMCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InferICD10CMCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_InferICD10CMCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_InferICD10CMResponse(data, context);
  const response: InferICD10CMCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1InferICD10CMCommandError
 */
const de_InferICD10CMCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidEncodingException":
    case "com.amazonaws.comprehendmedical#InvalidEncodingException":
      throw await de_InvalidEncodingExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.comprehendmedical#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehendmedical#TextSizeLimitExceededException":
      throw await de_TextSizeLimitExceededExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1InferRxNormCommand
 */
export const de_InferRxNormCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InferRxNormCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_InferRxNormCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_InferRxNormResponse(data, context);
  const response: InferRxNormCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1InferRxNormCommandError
 */
const de_InferRxNormCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidEncodingException":
    case "com.amazonaws.comprehendmedical#InvalidEncodingException":
      throw await de_InvalidEncodingExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.comprehendmedical#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehendmedical#TextSizeLimitExceededException":
      throw await de_TextSizeLimitExceededExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1InferSNOMEDCTCommand
 */
export const de_InferSNOMEDCTCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InferSNOMEDCTCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_InferSNOMEDCTCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_InferSNOMEDCTResponse(data, context);
  const response: InferSNOMEDCTCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1InferSNOMEDCTCommandError
 */
const de_InferSNOMEDCTCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidEncodingException":
    case "com.amazonaws.comprehendmedical#InvalidEncodingException":
      throw await de_InvalidEncodingExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.comprehendmedical#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TextSizeLimitExceededException":
    case "com.amazonaws.comprehendmedical#TextSizeLimitExceededException":
      throw await de_TextSizeLimitExceededExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListEntitiesDetectionV2JobsCommand
 */
export const de_ListEntitiesDetectionV2JobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntitiesDetectionV2JobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListEntitiesDetectionV2JobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEntitiesDetectionV2JobsResponse(data, context);
  const response: ListEntitiesDetectionV2JobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListEntitiesDetectionV2JobsCommandError
 */
const de_ListEntitiesDetectionV2JobsCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.comprehendmedical#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListICD10CMInferenceJobsCommand
 */
export const de_ListICD10CMInferenceJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListICD10CMInferenceJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListICD10CMInferenceJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListICD10CMInferenceJobsResponse(data, context);
  const response: ListICD10CMInferenceJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListICD10CMInferenceJobsCommandError
 */
const de_ListICD10CMInferenceJobsCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.comprehendmedical#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListPHIDetectionJobsCommand
 */
export const de_ListPHIDetectionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPHIDetectionJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPHIDetectionJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPHIDetectionJobsResponse(data, context);
  const response: ListPHIDetectionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListPHIDetectionJobsCommandError
 */
const de_ListPHIDetectionJobsCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.comprehendmedical#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListRxNormInferenceJobsCommand
 */
export const de_ListRxNormInferenceJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRxNormInferenceJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListRxNormInferenceJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListRxNormInferenceJobsResponse(data, context);
  const response: ListRxNormInferenceJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListRxNormInferenceJobsCommandError
 */
const de_ListRxNormInferenceJobsCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.comprehendmedical#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListSNOMEDCTInferenceJobsCommand
 */
export const de_ListSNOMEDCTInferenceJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSNOMEDCTInferenceJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSNOMEDCTInferenceJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSNOMEDCTInferenceJobsResponse(data, context);
  const response: ListSNOMEDCTInferenceJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListSNOMEDCTInferenceJobsCommandError
 */
const de_ListSNOMEDCTInferenceJobsCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.comprehendmedical#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StartEntitiesDetectionV2JobCommand
 */
export const de_StartEntitiesDetectionV2JobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartEntitiesDetectionV2JobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartEntitiesDetectionV2JobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartEntitiesDetectionV2JobResponse(data, context);
  const response: StartEntitiesDetectionV2JobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartEntitiesDetectionV2JobCommandError
 */
const de_StartEntitiesDetectionV2JobCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StartICD10CMInferenceJobCommand
 */
export const de_StartICD10CMInferenceJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartICD10CMInferenceJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartICD10CMInferenceJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartICD10CMInferenceJobResponse(data, context);
  const response: StartICD10CMInferenceJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartICD10CMInferenceJobCommandError
 */
const de_StartICD10CMInferenceJobCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StartPHIDetectionJobCommand
 */
export const de_StartPHIDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPHIDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartPHIDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartPHIDetectionJobResponse(data, context);
  const response: StartPHIDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartPHIDetectionJobCommandError
 */
const de_StartPHIDetectionJobCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StartRxNormInferenceJobCommand
 */
export const de_StartRxNormInferenceJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRxNormInferenceJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartRxNormInferenceJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartRxNormInferenceJobResponse(data, context);
  const response: StartRxNormInferenceJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartRxNormInferenceJobCommandError
 */
const de_StartRxNormInferenceJobCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StartSNOMEDCTInferenceJobCommand
 */
export const de_StartSNOMEDCTInferenceJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSNOMEDCTInferenceJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartSNOMEDCTInferenceJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartSNOMEDCTInferenceJobResponse(data, context);
  const response: StartSNOMEDCTInferenceJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartSNOMEDCTInferenceJobCommandError
 */
const de_StartSNOMEDCTInferenceJobCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StopEntitiesDetectionV2JobCommand
 */
export const de_StopEntitiesDetectionV2JobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopEntitiesDetectionV2JobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopEntitiesDetectionV2JobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopEntitiesDetectionV2JobResponse(data, context);
  const response: StopEntitiesDetectionV2JobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopEntitiesDetectionV2JobCommandError
 */
const de_StopEntitiesDetectionV2JobCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StopICD10CMInferenceJobCommand
 */
export const de_StopICD10CMInferenceJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopICD10CMInferenceJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopICD10CMInferenceJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopICD10CMInferenceJobResponse(data, context);
  const response: StopICD10CMInferenceJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopICD10CMInferenceJobCommandError
 */
const de_StopICD10CMInferenceJobCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StopPHIDetectionJobCommand
 */
export const de_StopPHIDetectionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopPHIDetectionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopPHIDetectionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopPHIDetectionJobResponse(data, context);
  const response: StopPHIDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopPHIDetectionJobCommandError
 */
const de_StopPHIDetectionJobCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StopRxNormInferenceJobCommand
 */
export const de_StopRxNormInferenceJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopRxNormInferenceJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopRxNormInferenceJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopRxNormInferenceJobResponse(data, context);
  const response: StopRxNormInferenceJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopRxNormInferenceJobCommandError
 */
const de_StopRxNormInferenceJobCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StopSNOMEDCTInferenceJobCommand
 */
export const de_StopSNOMEDCTInferenceJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopSNOMEDCTInferenceJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopSNOMEDCTInferenceJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopSNOMEDCTInferenceJobResponse(data, context);
  const response: StopSNOMEDCTInferenceJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopSNOMEDCTInferenceJobCommandError
 */
const de_StopSNOMEDCTInferenceJobCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.comprehendmedical#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.comprehendmedical#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.comprehendmedical#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InternalServerException(body, context);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidEncodingExceptionRes
 */
const de_InvalidEncodingExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEncodingException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidEncodingException(body, context);
  const exception = new InvalidEncodingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidRequestException(body, context);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ServiceUnavailableExceptionRes
 */
const de_ServiceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServiceUnavailableException(body, context);
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TextSizeLimitExceededExceptionRes
 */
const de_TextSizeLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TextSizeLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TextSizeLimitExceededException(body, context);
  const exception = new TextSizeLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TooManyRequestsExceptionRes
 */
const de_TooManyRequestsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyRequestsException(body, context);
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1ComprehendMedicalAsyncJobFilter
 */
const se_ComprehendMedicalAsyncJobFilter = (input: ComprehendMedicalAsyncJobFilter, context: __SerdeContext): any => {
  return {
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.JobStatus != null && { JobStatus: input.JobStatus }),
    ...(input.SubmitTimeAfter != null && { SubmitTimeAfter: Math.round(input.SubmitTimeAfter.getTime() / 1000) }),
    ...(input.SubmitTimeBefore != null && { SubmitTimeBefore: Math.round(input.SubmitTimeBefore.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1DescribeEntitiesDetectionV2JobRequest
 */
const se_DescribeEntitiesDetectionV2JobRequest = (
  input: DescribeEntitiesDetectionV2JobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * serializeAws_json1_1DescribeICD10CMInferenceJobRequest
 */
const se_DescribeICD10CMInferenceJobRequest = (
  input: DescribeICD10CMInferenceJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * serializeAws_json1_1DescribePHIDetectionJobRequest
 */
const se_DescribePHIDetectionJobRequest = (input: DescribePHIDetectionJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * serializeAws_json1_1DescribeRxNormInferenceJobRequest
 */
const se_DescribeRxNormInferenceJobRequest = (
  input: DescribeRxNormInferenceJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * serializeAws_json1_1DescribeSNOMEDCTInferenceJobRequest
 */
const se_DescribeSNOMEDCTInferenceJobRequest = (
  input: DescribeSNOMEDCTInferenceJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * serializeAws_json1_1DetectEntitiesRequest
 */
const se_DetectEntitiesRequest = (input: DetectEntitiesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Text != null && { Text: input.Text }),
  };
};

/**
 * serializeAws_json1_1DetectEntitiesV2Request
 */
const se_DetectEntitiesV2Request = (input: DetectEntitiesV2Request, context: __SerdeContext): any => {
  return {
    ...(input.Text != null && { Text: input.Text }),
  };
};

/**
 * serializeAws_json1_1DetectPHIRequest
 */
const se_DetectPHIRequest = (input: DetectPHIRequest, context: __SerdeContext): any => {
  return {
    ...(input.Text != null && { Text: input.Text }),
  };
};

/**
 * serializeAws_json1_1InferICD10CMRequest
 */
const se_InferICD10CMRequest = (input: InferICD10CMRequest, context: __SerdeContext): any => {
  return {
    ...(input.Text != null && { Text: input.Text }),
  };
};

/**
 * serializeAws_json1_1InferRxNormRequest
 */
const se_InferRxNormRequest = (input: InferRxNormRequest, context: __SerdeContext): any => {
  return {
    ...(input.Text != null && { Text: input.Text }),
  };
};

/**
 * serializeAws_json1_1InferSNOMEDCTRequest
 */
const se_InferSNOMEDCTRequest = (input: InferSNOMEDCTRequest, context: __SerdeContext): any => {
  return {
    ...(input.Text != null && { Text: input.Text }),
  };
};

/**
 * serializeAws_json1_1InputDataConfig
 */
const se_InputDataConfig = (input: InputDataConfig, context: __SerdeContext): any => {
  return {
    ...(input.S3Bucket != null && { S3Bucket: input.S3Bucket }),
    ...(input.S3Key != null && { S3Key: input.S3Key }),
  };
};

/**
 * serializeAws_json1_1ListEntitiesDetectionV2JobsRequest
 */
const se_ListEntitiesDetectionV2JobsRequest = (
  input: ListEntitiesDetectionV2JobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: se_ComprehendMedicalAsyncJobFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListICD10CMInferenceJobsRequest
 */
const se_ListICD10CMInferenceJobsRequest = (input: ListICD10CMInferenceJobsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter != null && { Filter: se_ComprehendMedicalAsyncJobFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListPHIDetectionJobsRequest
 */
const se_ListPHIDetectionJobsRequest = (input: ListPHIDetectionJobsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter != null && { Filter: se_ComprehendMedicalAsyncJobFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListRxNormInferenceJobsRequest
 */
const se_ListRxNormInferenceJobsRequest = (input: ListRxNormInferenceJobsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter != null && { Filter: se_ComprehendMedicalAsyncJobFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListSNOMEDCTInferenceJobsRequest
 */
const se_ListSNOMEDCTInferenceJobsRequest = (input: ListSNOMEDCTInferenceJobsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter != null && { Filter: se_ComprehendMedicalAsyncJobFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1OutputDataConfig
 */
const se_OutputDataConfig = (input: OutputDataConfig, context: __SerdeContext): any => {
  return {
    ...(input.S3Bucket != null && { S3Bucket: input.S3Bucket }),
    ...(input.S3Key != null && { S3Key: input.S3Key }),
  };
};

/**
 * serializeAws_json1_1StartEntitiesDetectionV2JobRequest
 */
const se_StartEntitiesDetectionV2JobRequest = (
  input: StartEntitiesDetectionV2JobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.InputDataConfig != null && { InputDataConfig: se_InputDataConfig(input.InputDataConfig, context) }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.KMSKey != null && { KMSKey: input.KMSKey }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.OutputDataConfig != null && { OutputDataConfig: se_OutputDataConfig(input.OutputDataConfig, context) }),
  };
};

/**
 * serializeAws_json1_1StartICD10CMInferenceJobRequest
 */
const se_StartICD10CMInferenceJobRequest = (input: StartICD10CMInferenceJobRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.InputDataConfig != null && { InputDataConfig: se_InputDataConfig(input.InputDataConfig, context) }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.KMSKey != null && { KMSKey: input.KMSKey }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.OutputDataConfig != null && { OutputDataConfig: se_OutputDataConfig(input.OutputDataConfig, context) }),
  };
};

/**
 * serializeAws_json1_1StartPHIDetectionJobRequest
 */
const se_StartPHIDetectionJobRequest = (input: StartPHIDetectionJobRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.InputDataConfig != null && { InputDataConfig: se_InputDataConfig(input.InputDataConfig, context) }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.KMSKey != null && { KMSKey: input.KMSKey }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.OutputDataConfig != null && { OutputDataConfig: se_OutputDataConfig(input.OutputDataConfig, context) }),
  };
};

/**
 * serializeAws_json1_1StartRxNormInferenceJobRequest
 */
const se_StartRxNormInferenceJobRequest = (input: StartRxNormInferenceJobRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.InputDataConfig != null && { InputDataConfig: se_InputDataConfig(input.InputDataConfig, context) }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.KMSKey != null && { KMSKey: input.KMSKey }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.OutputDataConfig != null && { OutputDataConfig: se_OutputDataConfig(input.OutputDataConfig, context) }),
  };
};

/**
 * serializeAws_json1_1StartSNOMEDCTInferenceJobRequest
 */
const se_StartSNOMEDCTInferenceJobRequest = (input: StartSNOMEDCTInferenceJobRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.InputDataConfig != null && { InputDataConfig: se_InputDataConfig(input.InputDataConfig, context) }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.KMSKey != null && { KMSKey: input.KMSKey }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.OutputDataConfig != null && { OutputDataConfig: se_OutputDataConfig(input.OutputDataConfig, context) }),
  };
};

/**
 * serializeAws_json1_1StopEntitiesDetectionV2JobRequest
 */
const se_StopEntitiesDetectionV2JobRequest = (
  input: StopEntitiesDetectionV2JobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * serializeAws_json1_1StopICD10CMInferenceJobRequest
 */
const se_StopICD10CMInferenceJobRequest = (input: StopICD10CMInferenceJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * serializeAws_json1_1StopPHIDetectionJobRequest
 */
const se_StopPHIDetectionJobRequest = (input: StopPHIDetectionJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * serializeAws_json1_1StopRxNormInferenceJobRequest
 */
const se_StopRxNormInferenceJobRequest = (input: StopRxNormInferenceJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * serializeAws_json1_1StopSNOMEDCTInferenceJobRequest
 */
const se_StopSNOMEDCTInferenceJobRequest = (input: StopSNOMEDCTInferenceJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * deserializeAws_json1_1Attribute
 */
const de_Attribute = (output: any, context: __SerdeContext): Attribute => {
  return {
    BeginOffset: __expectInt32(output.BeginOffset),
    Category: __expectString(output.Category),
    EndOffset: __expectInt32(output.EndOffset),
    Id: __expectInt32(output.Id),
    RelationshipScore: __limitedParseFloat32(output.RelationshipScore),
    RelationshipType: __expectString(output.RelationshipType),
    Score: __limitedParseFloat32(output.Score),
    Text: __expectString(output.Text),
    Traits: output.Traits != null ? de_TraitList(output.Traits, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1AttributeList
 */
const de_AttributeList = (output: any, context: __SerdeContext): Attribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Attribute(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Characters
 */
const de_Characters = (output: any, context: __SerdeContext): Characters => {
  return {
    OriginalTextCharacters: __expectInt32(output.OriginalTextCharacters),
  } as any;
};

/**
 * deserializeAws_json1_1ComprehendMedicalAsyncJobProperties
 */
const de_ComprehendMedicalAsyncJobProperties = (
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
    InputDataConfig: output.InputDataConfig != null ? de_InputDataConfig(output.InputDataConfig, context) : undefined,
    JobId: __expectString(output.JobId),
    JobName: __expectString(output.JobName),
    JobStatus: __expectString(output.JobStatus),
    KMSKey: __expectString(output.KMSKey),
    LanguageCode: __expectString(output.LanguageCode),
    ManifestFilePath: __expectString(output.ManifestFilePath),
    Message: __expectString(output.Message),
    ModelVersion: __expectString(output.ModelVersion),
    OutputDataConfig:
      output.OutputDataConfig != null ? de_OutputDataConfig(output.OutputDataConfig, context) : undefined,
    SubmitTime:
      output.SubmitTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SubmitTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ComprehendMedicalAsyncJobPropertiesList
 */
const de_ComprehendMedicalAsyncJobPropertiesList = (
  output: any,
  context: __SerdeContext
): ComprehendMedicalAsyncJobProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ComprehendMedicalAsyncJobProperties(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DescribeEntitiesDetectionV2JobResponse
 */
const de_DescribeEntitiesDetectionV2JobResponse = (
  output: any,
  context: __SerdeContext
): DescribeEntitiesDetectionV2JobResponse => {
  return {
    ComprehendMedicalAsyncJobProperties:
      output.ComprehendMedicalAsyncJobProperties != null
        ? de_ComprehendMedicalAsyncJobProperties(output.ComprehendMedicalAsyncJobProperties, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeICD10CMInferenceJobResponse
 */
const de_DescribeICD10CMInferenceJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeICD10CMInferenceJobResponse => {
  return {
    ComprehendMedicalAsyncJobProperties:
      output.ComprehendMedicalAsyncJobProperties != null
        ? de_ComprehendMedicalAsyncJobProperties(output.ComprehendMedicalAsyncJobProperties, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribePHIDetectionJobResponse
 */
const de_DescribePHIDetectionJobResponse = (output: any, context: __SerdeContext): DescribePHIDetectionJobResponse => {
  return {
    ComprehendMedicalAsyncJobProperties:
      output.ComprehendMedicalAsyncJobProperties != null
        ? de_ComprehendMedicalAsyncJobProperties(output.ComprehendMedicalAsyncJobProperties, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeRxNormInferenceJobResponse
 */
const de_DescribeRxNormInferenceJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeRxNormInferenceJobResponse => {
  return {
    ComprehendMedicalAsyncJobProperties:
      output.ComprehendMedicalAsyncJobProperties != null
        ? de_ComprehendMedicalAsyncJobProperties(output.ComprehendMedicalAsyncJobProperties, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeSNOMEDCTInferenceJobResponse
 */
const de_DescribeSNOMEDCTInferenceJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeSNOMEDCTInferenceJobResponse => {
  return {
    ComprehendMedicalAsyncJobProperties:
      output.ComprehendMedicalAsyncJobProperties != null
        ? de_ComprehendMedicalAsyncJobProperties(output.ComprehendMedicalAsyncJobProperties, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DetectEntitiesResponse
 */
const de_DetectEntitiesResponse = (output: any, context: __SerdeContext): DetectEntitiesResponse => {
  return {
    Entities: output.Entities != null ? de_EntityList(output.Entities, context) : undefined,
    ModelVersion: __expectString(output.ModelVersion),
    PaginationToken: __expectString(output.PaginationToken),
    UnmappedAttributes:
      output.UnmappedAttributes != null ? de_UnmappedAttributeList(output.UnmappedAttributes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DetectEntitiesV2Response
 */
const de_DetectEntitiesV2Response = (output: any, context: __SerdeContext): DetectEntitiesV2Response => {
  return {
    Entities: output.Entities != null ? de_EntityList(output.Entities, context) : undefined,
    ModelVersion: __expectString(output.ModelVersion),
    PaginationToken: __expectString(output.PaginationToken),
    UnmappedAttributes:
      output.UnmappedAttributes != null ? de_UnmappedAttributeList(output.UnmappedAttributes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DetectPHIResponse
 */
const de_DetectPHIResponse = (output: any, context: __SerdeContext): DetectPHIResponse => {
  return {
    Entities: output.Entities != null ? de_EntityList(output.Entities, context) : undefined,
    ModelVersion: __expectString(output.ModelVersion),
    PaginationToken: __expectString(output.PaginationToken),
  } as any;
};

/**
 * deserializeAws_json1_1Entity
 */
const de_Entity = (output: any, context: __SerdeContext): Entity => {
  return {
    Attributes: output.Attributes != null ? de_AttributeList(output.Attributes, context) : undefined,
    BeginOffset: __expectInt32(output.BeginOffset),
    Category: __expectString(output.Category),
    EndOffset: __expectInt32(output.EndOffset),
    Id: __expectInt32(output.Id),
    Score: __limitedParseFloat32(output.Score),
    Text: __expectString(output.Text),
    Traits: output.Traits != null ? de_TraitList(output.Traits, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1EntityList
 */
const de_EntityList = (output: any, context: __SerdeContext): Entity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Entity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ICD10CMAttribute
 */
const de_ICD10CMAttribute = (output: any, context: __SerdeContext): ICD10CMAttribute => {
  return {
    BeginOffset: __expectInt32(output.BeginOffset),
    Category: __expectString(output.Category),
    EndOffset: __expectInt32(output.EndOffset),
    Id: __expectInt32(output.Id),
    RelationshipScore: __limitedParseFloat32(output.RelationshipScore),
    RelationshipType: __expectString(output.RelationshipType),
    Score: __limitedParseFloat32(output.Score),
    Text: __expectString(output.Text),
    Traits: output.Traits != null ? de_ICD10CMTraitList(output.Traits, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1ICD10CMAttributeList
 */
const de_ICD10CMAttributeList = (output: any, context: __SerdeContext): ICD10CMAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ICD10CMAttribute(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ICD10CMConcept
 */
const de_ICD10CMConcept = (output: any, context: __SerdeContext): ICD10CMConcept => {
  return {
    Code: __expectString(output.Code),
    Description: __expectString(output.Description),
    Score: __limitedParseFloat32(output.Score),
  } as any;
};

/**
 * deserializeAws_json1_1ICD10CMConceptList
 */
const de_ICD10CMConceptList = (output: any, context: __SerdeContext): ICD10CMConcept[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ICD10CMConcept(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ICD10CMEntity
 */
const de_ICD10CMEntity = (output: any, context: __SerdeContext): ICD10CMEntity => {
  return {
    Attributes: output.Attributes != null ? de_ICD10CMAttributeList(output.Attributes, context) : undefined,
    BeginOffset: __expectInt32(output.BeginOffset),
    Category: __expectString(output.Category),
    EndOffset: __expectInt32(output.EndOffset),
    ICD10CMConcepts:
      output.ICD10CMConcepts != null ? de_ICD10CMConceptList(output.ICD10CMConcepts, context) : undefined,
    Id: __expectInt32(output.Id),
    Score: __limitedParseFloat32(output.Score),
    Text: __expectString(output.Text),
    Traits: output.Traits != null ? de_ICD10CMTraitList(output.Traits, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1ICD10CMEntityList
 */
const de_ICD10CMEntityList = (output: any, context: __SerdeContext): ICD10CMEntity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ICD10CMEntity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ICD10CMTrait
 */
const de_ICD10CMTrait = (output: any, context: __SerdeContext): ICD10CMTrait => {
  return {
    Name: __expectString(output.Name),
    Score: __limitedParseFloat32(output.Score),
  } as any;
};

/**
 * deserializeAws_json1_1ICD10CMTraitList
 */
const de_ICD10CMTraitList = (output: any, context: __SerdeContext): ICD10CMTrait[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ICD10CMTrait(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InferICD10CMResponse
 */
const de_InferICD10CMResponse = (output: any, context: __SerdeContext): InferICD10CMResponse => {
  return {
    Entities: output.Entities != null ? de_ICD10CMEntityList(output.Entities, context) : undefined,
    ModelVersion: __expectString(output.ModelVersion),
    PaginationToken: __expectString(output.PaginationToken),
  } as any;
};

/**
 * deserializeAws_json1_1InferRxNormResponse
 */
const de_InferRxNormResponse = (output: any, context: __SerdeContext): InferRxNormResponse => {
  return {
    Entities: output.Entities != null ? de_RxNormEntityList(output.Entities, context) : undefined,
    ModelVersion: __expectString(output.ModelVersion),
    PaginationToken: __expectString(output.PaginationToken),
  } as any;
};

/**
 * deserializeAws_json1_1InferSNOMEDCTResponse
 */
const de_InferSNOMEDCTResponse = (output: any, context: __SerdeContext): InferSNOMEDCTResponse => {
  return {
    Characters: output.Characters != null ? de_Characters(output.Characters, context) : undefined,
    Entities: output.Entities != null ? de_SNOMEDCTEntityList(output.Entities, context) : undefined,
    ModelVersion: __expectString(output.ModelVersion),
    PaginationToken: __expectString(output.PaginationToken),
    SNOMEDCTDetails: output.SNOMEDCTDetails != null ? de_SNOMEDCTDetails(output.SNOMEDCTDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InputDataConfig
 */
const de_InputDataConfig = (output: any, context: __SerdeContext): InputDataConfig => {
  return {
    S3Bucket: __expectString(output.S3Bucket),
    S3Key: __expectString(output.S3Key),
  } as any;
};

/**
 * deserializeAws_json1_1InternalServerException
 */
const de_InternalServerException = (output: any, context: __SerdeContext): InternalServerException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidEncodingException
 */
const de_InvalidEncodingException = (output: any, context: __SerdeContext): InvalidEncodingException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidRequestException
 */
const de_InvalidRequestException = (output: any, context: __SerdeContext): InvalidRequestException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ListEntitiesDetectionV2JobsResponse
 */
const de_ListEntitiesDetectionV2JobsResponse = (
  output: any,
  context: __SerdeContext
): ListEntitiesDetectionV2JobsResponse => {
  return {
    ComprehendMedicalAsyncJobPropertiesList:
      output.ComprehendMedicalAsyncJobPropertiesList != null
        ? de_ComprehendMedicalAsyncJobPropertiesList(output.ComprehendMedicalAsyncJobPropertiesList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListICD10CMInferenceJobsResponse
 */
const de_ListICD10CMInferenceJobsResponse = (
  output: any,
  context: __SerdeContext
): ListICD10CMInferenceJobsResponse => {
  return {
    ComprehendMedicalAsyncJobPropertiesList:
      output.ComprehendMedicalAsyncJobPropertiesList != null
        ? de_ComprehendMedicalAsyncJobPropertiesList(output.ComprehendMedicalAsyncJobPropertiesList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListPHIDetectionJobsResponse
 */
const de_ListPHIDetectionJobsResponse = (output: any, context: __SerdeContext): ListPHIDetectionJobsResponse => {
  return {
    ComprehendMedicalAsyncJobPropertiesList:
      output.ComprehendMedicalAsyncJobPropertiesList != null
        ? de_ComprehendMedicalAsyncJobPropertiesList(output.ComprehendMedicalAsyncJobPropertiesList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListRxNormInferenceJobsResponse
 */
const de_ListRxNormInferenceJobsResponse = (output: any, context: __SerdeContext): ListRxNormInferenceJobsResponse => {
  return {
    ComprehendMedicalAsyncJobPropertiesList:
      output.ComprehendMedicalAsyncJobPropertiesList != null
        ? de_ComprehendMedicalAsyncJobPropertiesList(output.ComprehendMedicalAsyncJobPropertiesList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListSNOMEDCTInferenceJobsResponse
 */
const de_ListSNOMEDCTInferenceJobsResponse = (
  output: any,
  context: __SerdeContext
): ListSNOMEDCTInferenceJobsResponse => {
  return {
    ComprehendMedicalAsyncJobPropertiesList:
      output.ComprehendMedicalAsyncJobPropertiesList != null
        ? de_ComprehendMedicalAsyncJobPropertiesList(output.ComprehendMedicalAsyncJobPropertiesList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1OutputDataConfig
 */
const de_OutputDataConfig = (output: any, context: __SerdeContext): OutputDataConfig => {
  return {
    S3Bucket: __expectString(output.S3Bucket),
    S3Key: __expectString(output.S3Key),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1RxNormAttribute
 */
const de_RxNormAttribute = (output: any, context: __SerdeContext): RxNormAttribute => {
  return {
    BeginOffset: __expectInt32(output.BeginOffset),
    EndOffset: __expectInt32(output.EndOffset),
    Id: __expectInt32(output.Id),
    RelationshipScore: __limitedParseFloat32(output.RelationshipScore),
    Score: __limitedParseFloat32(output.Score),
    Text: __expectString(output.Text),
    Traits: output.Traits != null ? de_RxNormTraitList(output.Traits, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1RxNormAttributeList
 */
const de_RxNormAttributeList = (output: any, context: __SerdeContext): RxNormAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RxNormAttribute(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RxNormConcept
 */
const de_RxNormConcept = (output: any, context: __SerdeContext): RxNormConcept => {
  return {
    Code: __expectString(output.Code),
    Description: __expectString(output.Description),
    Score: __limitedParseFloat32(output.Score),
  } as any;
};

/**
 * deserializeAws_json1_1RxNormConceptList
 */
const de_RxNormConceptList = (output: any, context: __SerdeContext): RxNormConcept[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RxNormConcept(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RxNormEntity
 */
const de_RxNormEntity = (output: any, context: __SerdeContext): RxNormEntity => {
  return {
    Attributes: output.Attributes != null ? de_RxNormAttributeList(output.Attributes, context) : undefined,
    BeginOffset: __expectInt32(output.BeginOffset),
    Category: __expectString(output.Category),
    EndOffset: __expectInt32(output.EndOffset),
    Id: __expectInt32(output.Id),
    RxNormConcepts: output.RxNormConcepts != null ? de_RxNormConceptList(output.RxNormConcepts, context) : undefined,
    Score: __limitedParseFloat32(output.Score),
    Text: __expectString(output.Text),
    Traits: output.Traits != null ? de_RxNormTraitList(output.Traits, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1RxNormEntityList
 */
const de_RxNormEntityList = (output: any, context: __SerdeContext): RxNormEntity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RxNormEntity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RxNormTrait
 */
const de_RxNormTrait = (output: any, context: __SerdeContext): RxNormTrait => {
  return {
    Name: __expectString(output.Name),
    Score: __limitedParseFloat32(output.Score),
  } as any;
};

/**
 * deserializeAws_json1_1RxNormTraitList
 */
const de_RxNormTraitList = (output: any, context: __SerdeContext): RxNormTrait[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RxNormTrait(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ServiceUnavailableException
 */
const de_ServiceUnavailableException = (output: any, context: __SerdeContext): ServiceUnavailableException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1SNOMEDCTAttribute
 */
const de_SNOMEDCTAttribute = (output: any, context: __SerdeContext): SNOMEDCTAttribute => {
  return {
    BeginOffset: __expectInt32(output.BeginOffset),
    Category: __expectString(output.Category),
    EndOffset: __expectInt32(output.EndOffset),
    Id: __expectInt32(output.Id),
    RelationshipScore: __limitedParseFloat32(output.RelationshipScore),
    RelationshipType: __expectString(output.RelationshipType),
    SNOMEDCTConcepts:
      output.SNOMEDCTConcepts != null ? de_SNOMEDCTConceptList(output.SNOMEDCTConcepts, context) : undefined,
    Score: __limitedParseFloat32(output.Score),
    Text: __expectString(output.Text),
    Traits: output.Traits != null ? de_SNOMEDCTTraitList(output.Traits, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1SNOMEDCTAttributeList
 */
const de_SNOMEDCTAttributeList = (output: any, context: __SerdeContext): SNOMEDCTAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SNOMEDCTAttribute(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SNOMEDCTConcept
 */
const de_SNOMEDCTConcept = (output: any, context: __SerdeContext): SNOMEDCTConcept => {
  return {
    Code: __expectString(output.Code),
    Description: __expectString(output.Description),
    Score: __limitedParseFloat32(output.Score),
  } as any;
};

/**
 * deserializeAws_json1_1SNOMEDCTConceptList
 */
const de_SNOMEDCTConceptList = (output: any, context: __SerdeContext): SNOMEDCTConcept[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SNOMEDCTConcept(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SNOMEDCTDetails
 */
const de_SNOMEDCTDetails = (output: any, context: __SerdeContext): SNOMEDCTDetails => {
  return {
    Edition: __expectString(output.Edition),
    Language: __expectString(output.Language),
    VersionDate: __expectString(output.VersionDate),
  } as any;
};

/**
 * deserializeAws_json1_1SNOMEDCTEntity
 */
const de_SNOMEDCTEntity = (output: any, context: __SerdeContext): SNOMEDCTEntity => {
  return {
    Attributes: output.Attributes != null ? de_SNOMEDCTAttributeList(output.Attributes, context) : undefined,
    BeginOffset: __expectInt32(output.BeginOffset),
    Category: __expectString(output.Category),
    EndOffset: __expectInt32(output.EndOffset),
    Id: __expectInt32(output.Id),
    SNOMEDCTConcepts:
      output.SNOMEDCTConcepts != null ? de_SNOMEDCTConceptList(output.SNOMEDCTConcepts, context) : undefined,
    Score: __limitedParseFloat32(output.Score),
    Text: __expectString(output.Text),
    Traits: output.Traits != null ? de_SNOMEDCTTraitList(output.Traits, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1SNOMEDCTEntityList
 */
const de_SNOMEDCTEntityList = (output: any, context: __SerdeContext): SNOMEDCTEntity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SNOMEDCTEntity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SNOMEDCTTrait
 */
const de_SNOMEDCTTrait = (output: any, context: __SerdeContext): SNOMEDCTTrait => {
  return {
    Name: __expectString(output.Name),
    Score: __limitedParseFloat32(output.Score),
  } as any;
};

/**
 * deserializeAws_json1_1SNOMEDCTTraitList
 */
const de_SNOMEDCTTraitList = (output: any, context: __SerdeContext): SNOMEDCTTrait[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SNOMEDCTTrait(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StartEntitiesDetectionV2JobResponse
 */
const de_StartEntitiesDetectionV2JobResponse = (
  output: any,
  context: __SerdeContext
): StartEntitiesDetectionV2JobResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

/**
 * deserializeAws_json1_1StartICD10CMInferenceJobResponse
 */
const de_StartICD10CMInferenceJobResponse = (
  output: any,
  context: __SerdeContext
): StartICD10CMInferenceJobResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

/**
 * deserializeAws_json1_1StartPHIDetectionJobResponse
 */
const de_StartPHIDetectionJobResponse = (output: any, context: __SerdeContext): StartPHIDetectionJobResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

/**
 * deserializeAws_json1_1StartRxNormInferenceJobResponse
 */
const de_StartRxNormInferenceJobResponse = (output: any, context: __SerdeContext): StartRxNormInferenceJobResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

/**
 * deserializeAws_json1_1StartSNOMEDCTInferenceJobResponse
 */
const de_StartSNOMEDCTInferenceJobResponse = (
  output: any,
  context: __SerdeContext
): StartSNOMEDCTInferenceJobResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

/**
 * deserializeAws_json1_1StopEntitiesDetectionV2JobResponse
 */
const de_StopEntitiesDetectionV2JobResponse = (
  output: any,
  context: __SerdeContext
): StopEntitiesDetectionV2JobResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

/**
 * deserializeAws_json1_1StopICD10CMInferenceJobResponse
 */
const de_StopICD10CMInferenceJobResponse = (output: any, context: __SerdeContext): StopICD10CMInferenceJobResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

/**
 * deserializeAws_json1_1StopPHIDetectionJobResponse
 */
const de_StopPHIDetectionJobResponse = (output: any, context: __SerdeContext): StopPHIDetectionJobResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

/**
 * deserializeAws_json1_1StopRxNormInferenceJobResponse
 */
const de_StopRxNormInferenceJobResponse = (output: any, context: __SerdeContext): StopRxNormInferenceJobResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

/**
 * deserializeAws_json1_1StopSNOMEDCTInferenceJobResponse
 */
const de_StopSNOMEDCTInferenceJobResponse = (
  output: any,
  context: __SerdeContext
): StopSNOMEDCTInferenceJobResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

/**
 * deserializeAws_json1_1TextSizeLimitExceededException
 */
const de_TextSizeLimitExceededException = (output: any, context: __SerdeContext): TextSizeLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1TooManyRequestsException
 */
const de_TooManyRequestsException = (output: any, context: __SerdeContext): TooManyRequestsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Trait
 */
const de_Trait = (output: any, context: __SerdeContext): Trait => {
  return {
    Name: __expectString(output.Name),
    Score: __limitedParseFloat32(output.Score),
  } as any;
};

/**
 * deserializeAws_json1_1TraitList
 */
const de_TraitList = (output: any, context: __SerdeContext): Trait[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Trait(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UnmappedAttribute
 */
const de_UnmappedAttribute = (output: any, context: __SerdeContext): UnmappedAttribute => {
  return {
    Attribute: output.Attribute != null ? de_Attribute(output.Attribute, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1UnmappedAttributeList
 */
const de_UnmappedAttributeList = (output: any, context: __SerdeContext): UnmappedAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UnmappedAttribute(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ValidationException
 */
const de_ValidationException = (output: any, context: __SerdeContext): ValidationException => {
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `ComprehendMedical_20181030.${operation}`,
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
