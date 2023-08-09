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
  limitedParseFloat32 as __limitedParseFloat32,
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
  SNOMEDCTEntity,
  SNOMEDCTTrait,
  StartEntitiesDetectionV2JobRequest,
  StartICD10CMInferenceJobRequest,
  StartPHIDetectionJobRequest,
  StartRxNormInferenceJobRequest,
  StartSNOMEDCTInferenceJobRequest,
  StopEntitiesDetectionV2JobRequest,
  StopICD10CMInferenceJobRequest,
  StopPHIDetectionJobRequest,
  StopRxNormInferenceJobRequest,
  StopSNOMEDCTInferenceJobRequest,
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartEntitiesDetectionV2JobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartICD10CMInferenceJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartPHIDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartRxNormInferenceJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartSNOMEDCTInferenceJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StopEntitiesDetectionV2JobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StopICD10CMInferenceJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StopPHIDetectionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StopRxNormInferenceJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StopSNOMEDCTInferenceJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  return take(input, {
    JobName: [],
    JobStatus: [],
    SubmitTimeAfter: (_) => Math.round(_.getTime() / 1000),
    SubmitTimeBefore: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_DescribeEntitiesDetectionV2JobRequest omitted.

// se_DescribeICD10CMInferenceJobRequest omitted.

// se_DescribePHIDetectionJobRequest omitted.

// se_DescribeRxNormInferenceJobRequest omitted.

// se_DescribeSNOMEDCTInferenceJobRequest omitted.

// se_DetectEntitiesRequest omitted.

// se_DetectEntitiesV2Request omitted.

// se_DetectPHIRequest omitted.

// se_InferICD10CMRequest omitted.

// se_InferRxNormRequest omitted.

// se_InferSNOMEDCTRequest omitted.

// se_InputDataConfig omitted.

/**
 * serializeAws_json1_1ListEntitiesDetectionV2JobsRequest
 */
const se_ListEntitiesDetectionV2JobsRequest = (
  input: ListEntitiesDetectionV2JobsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Filter: (_) => se_ComprehendMedicalAsyncJobFilter(_, context),
    MaxResults: [],
    NextToken: [],
  });
};

/**
 * serializeAws_json1_1ListICD10CMInferenceJobsRequest
 */
const se_ListICD10CMInferenceJobsRequest = (input: ListICD10CMInferenceJobsRequest, context: __SerdeContext): any => {
  return take(input, {
    Filter: (_) => se_ComprehendMedicalAsyncJobFilter(_, context),
    MaxResults: [],
    NextToken: [],
  });
};

/**
 * serializeAws_json1_1ListPHIDetectionJobsRequest
 */
const se_ListPHIDetectionJobsRequest = (input: ListPHIDetectionJobsRequest, context: __SerdeContext): any => {
  return take(input, {
    Filter: (_) => se_ComprehendMedicalAsyncJobFilter(_, context),
    MaxResults: [],
    NextToken: [],
  });
};

/**
 * serializeAws_json1_1ListRxNormInferenceJobsRequest
 */
const se_ListRxNormInferenceJobsRequest = (input: ListRxNormInferenceJobsRequest, context: __SerdeContext): any => {
  return take(input, {
    Filter: (_) => se_ComprehendMedicalAsyncJobFilter(_, context),
    MaxResults: [],
    NextToken: [],
  });
};

/**
 * serializeAws_json1_1ListSNOMEDCTInferenceJobsRequest
 */
const se_ListSNOMEDCTInferenceJobsRequest = (input: ListSNOMEDCTInferenceJobsRequest, context: __SerdeContext): any => {
  return take(input, {
    Filter: (_) => se_ComprehendMedicalAsyncJobFilter(_, context),
    MaxResults: [],
    NextToken: [],
  });
};

// se_OutputDataConfig omitted.

/**
 * serializeAws_json1_1StartEntitiesDetectionV2JobRequest
 */
const se_StartEntitiesDetectionV2JobRequest = (
  input: StartEntitiesDetectionV2JobRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DataAccessRoleArn: [],
    InputDataConfig: _json,
    JobName: [],
    KMSKey: [],
    LanguageCode: [],
    OutputDataConfig: _json,
  });
};

/**
 * serializeAws_json1_1StartICD10CMInferenceJobRequest
 */
const se_StartICD10CMInferenceJobRequest = (input: StartICD10CMInferenceJobRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DataAccessRoleArn: [],
    InputDataConfig: _json,
    JobName: [],
    KMSKey: [],
    LanguageCode: [],
    OutputDataConfig: _json,
  });
};

/**
 * serializeAws_json1_1StartPHIDetectionJobRequest
 */
const se_StartPHIDetectionJobRequest = (input: StartPHIDetectionJobRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DataAccessRoleArn: [],
    InputDataConfig: _json,
    JobName: [],
    KMSKey: [],
    LanguageCode: [],
    OutputDataConfig: _json,
  });
};

/**
 * serializeAws_json1_1StartRxNormInferenceJobRequest
 */
const se_StartRxNormInferenceJobRequest = (input: StartRxNormInferenceJobRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DataAccessRoleArn: [],
    InputDataConfig: _json,
    JobName: [],
    KMSKey: [],
    LanguageCode: [],
    OutputDataConfig: _json,
  });
};

/**
 * serializeAws_json1_1StartSNOMEDCTInferenceJobRequest
 */
const se_StartSNOMEDCTInferenceJobRequest = (input: StartSNOMEDCTInferenceJobRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DataAccessRoleArn: [],
    InputDataConfig: _json,
    JobName: [],
    KMSKey: [],
    LanguageCode: [],
    OutputDataConfig: _json,
  });
};

// se_StopEntitiesDetectionV2JobRequest omitted.

// se_StopICD10CMInferenceJobRequest omitted.

// se_StopPHIDetectionJobRequest omitted.

// se_StopRxNormInferenceJobRequest omitted.

// se_StopSNOMEDCTInferenceJobRequest omitted.

/**
 * deserializeAws_json1_1Attribute
 */
const de_Attribute = (output: any, context: __SerdeContext): Attribute => {
  return take(output, {
    BeginOffset: __expectInt32,
    Category: __expectString,
    EndOffset: __expectInt32,
    Id: __expectInt32,
    RelationshipScore: __limitedParseFloat32,
    RelationshipType: __expectString,
    Score: __limitedParseFloat32,
    Text: __expectString,
    Traits: (_: any) => de_TraitList(_, context),
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AttributeList
 */
const de_AttributeList = (output: any, context: __SerdeContext): Attribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Attribute(entry, context);
    });
  return retVal;
};

// de_Characters omitted.

/**
 * deserializeAws_json1_1ComprehendMedicalAsyncJobProperties
 */
const de_ComprehendMedicalAsyncJobProperties = (
  output: any,
  context: __SerdeContext
): ComprehendMedicalAsyncJobProperties => {
  return take(output, {
    DataAccessRoleArn: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ExpirationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InputDataConfig: _json,
    JobId: __expectString,
    JobName: __expectString,
    JobStatus: __expectString,
    KMSKey: __expectString,
    LanguageCode: __expectString,
    ManifestFilePath: __expectString,
    Message: __expectString,
    ModelVersion: __expectString,
    OutputDataConfig: _json,
    SubmitTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
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
  return take(output, {
    ComprehendMedicalAsyncJobProperties: (_: any) => de_ComprehendMedicalAsyncJobProperties(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeICD10CMInferenceJobResponse
 */
const de_DescribeICD10CMInferenceJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeICD10CMInferenceJobResponse => {
  return take(output, {
    ComprehendMedicalAsyncJobProperties: (_: any) => de_ComprehendMedicalAsyncJobProperties(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribePHIDetectionJobResponse
 */
const de_DescribePHIDetectionJobResponse = (output: any, context: __SerdeContext): DescribePHIDetectionJobResponse => {
  return take(output, {
    ComprehendMedicalAsyncJobProperties: (_: any) => de_ComprehendMedicalAsyncJobProperties(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeRxNormInferenceJobResponse
 */
const de_DescribeRxNormInferenceJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeRxNormInferenceJobResponse => {
  return take(output, {
    ComprehendMedicalAsyncJobProperties: (_: any) => de_ComprehendMedicalAsyncJobProperties(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeSNOMEDCTInferenceJobResponse
 */
const de_DescribeSNOMEDCTInferenceJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeSNOMEDCTInferenceJobResponse => {
  return take(output, {
    ComprehendMedicalAsyncJobProperties: (_: any) => de_ComprehendMedicalAsyncJobProperties(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DetectEntitiesResponse
 */
const de_DetectEntitiesResponse = (output: any, context: __SerdeContext): DetectEntitiesResponse => {
  return take(output, {
    Entities: (_: any) => de_EntityList(_, context),
    ModelVersion: __expectString,
    PaginationToken: __expectString,
    UnmappedAttributes: (_: any) => de_UnmappedAttributeList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DetectEntitiesV2Response
 */
const de_DetectEntitiesV2Response = (output: any, context: __SerdeContext): DetectEntitiesV2Response => {
  return take(output, {
    Entities: (_: any) => de_EntityList(_, context),
    ModelVersion: __expectString,
    PaginationToken: __expectString,
    UnmappedAttributes: (_: any) => de_UnmappedAttributeList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DetectPHIResponse
 */
const de_DetectPHIResponse = (output: any, context: __SerdeContext): DetectPHIResponse => {
  return take(output, {
    Entities: (_: any) => de_EntityList(_, context),
    ModelVersion: __expectString,
    PaginationToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1Entity
 */
const de_Entity = (output: any, context: __SerdeContext): Entity => {
  return take(output, {
    Attributes: (_: any) => de_AttributeList(_, context),
    BeginOffset: __expectInt32,
    Category: __expectString,
    EndOffset: __expectInt32,
    Id: __expectInt32,
    Score: __limitedParseFloat32,
    Text: __expectString,
    Traits: (_: any) => de_TraitList(_, context),
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1EntityList
 */
const de_EntityList = (output: any, context: __SerdeContext): Entity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Entity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ICD10CMAttribute
 */
const de_ICD10CMAttribute = (output: any, context: __SerdeContext): ICD10CMAttribute => {
  return take(output, {
    BeginOffset: __expectInt32,
    Category: __expectString,
    EndOffset: __expectInt32,
    Id: __expectInt32,
    RelationshipScore: __limitedParseFloat32,
    RelationshipType: __expectString,
    Score: __limitedParseFloat32,
    Text: __expectString,
    Traits: (_: any) => de_ICD10CMTraitList(_, context),
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ICD10CMAttributeList
 */
const de_ICD10CMAttributeList = (output: any, context: __SerdeContext): ICD10CMAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ICD10CMAttribute(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ICD10CMConcept
 */
const de_ICD10CMConcept = (output: any, context: __SerdeContext): ICD10CMConcept => {
  return take(output, {
    Code: __expectString,
    Description: __expectString,
    Score: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1ICD10CMConceptList
 */
const de_ICD10CMConceptList = (output: any, context: __SerdeContext): ICD10CMConcept[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ICD10CMConcept(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ICD10CMEntity
 */
const de_ICD10CMEntity = (output: any, context: __SerdeContext): ICD10CMEntity => {
  return take(output, {
    Attributes: (_: any) => de_ICD10CMAttributeList(_, context),
    BeginOffset: __expectInt32,
    Category: __expectString,
    EndOffset: __expectInt32,
    ICD10CMConcepts: (_: any) => de_ICD10CMConceptList(_, context),
    Id: __expectInt32,
    Score: __limitedParseFloat32,
    Text: __expectString,
    Traits: (_: any) => de_ICD10CMTraitList(_, context),
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ICD10CMEntityList
 */
const de_ICD10CMEntityList = (output: any, context: __SerdeContext): ICD10CMEntity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ICD10CMEntity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ICD10CMTrait
 */
const de_ICD10CMTrait = (output: any, context: __SerdeContext): ICD10CMTrait => {
  return take(output, {
    Name: __expectString,
    Score: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1ICD10CMTraitList
 */
const de_ICD10CMTraitList = (output: any, context: __SerdeContext): ICD10CMTrait[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ICD10CMTrait(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InferICD10CMResponse
 */
const de_InferICD10CMResponse = (output: any, context: __SerdeContext): InferICD10CMResponse => {
  return take(output, {
    Entities: (_: any) => de_ICD10CMEntityList(_, context),
    ModelVersion: __expectString,
    PaginationToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1InferRxNormResponse
 */
const de_InferRxNormResponse = (output: any, context: __SerdeContext): InferRxNormResponse => {
  return take(output, {
    Entities: (_: any) => de_RxNormEntityList(_, context),
    ModelVersion: __expectString,
    PaginationToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1InferSNOMEDCTResponse
 */
const de_InferSNOMEDCTResponse = (output: any, context: __SerdeContext): InferSNOMEDCTResponse => {
  return take(output, {
    Characters: _json,
    Entities: (_: any) => de_SNOMEDCTEntityList(_, context),
    ModelVersion: __expectString,
    PaginationToken: __expectString,
    SNOMEDCTDetails: _json,
  }) as any;
};

// de_InputDataConfig omitted.

// de_InternalServerException omitted.

// de_InvalidEncodingException omitted.

// de_InvalidRequestException omitted.

/**
 * deserializeAws_json1_1ListEntitiesDetectionV2JobsResponse
 */
const de_ListEntitiesDetectionV2JobsResponse = (
  output: any,
  context: __SerdeContext
): ListEntitiesDetectionV2JobsResponse => {
  return take(output, {
    ComprehendMedicalAsyncJobPropertiesList: (_: any) => de_ComprehendMedicalAsyncJobPropertiesList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListICD10CMInferenceJobsResponse
 */
const de_ListICD10CMInferenceJobsResponse = (
  output: any,
  context: __SerdeContext
): ListICD10CMInferenceJobsResponse => {
  return take(output, {
    ComprehendMedicalAsyncJobPropertiesList: (_: any) => de_ComprehendMedicalAsyncJobPropertiesList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListPHIDetectionJobsResponse
 */
const de_ListPHIDetectionJobsResponse = (output: any, context: __SerdeContext): ListPHIDetectionJobsResponse => {
  return take(output, {
    ComprehendMedicalAsyncJobPropertiesList: (_: any) => de_ComprehendMedicalAsyncJobPropertiesList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListRxNormInferenceJobsResponse
 */
const de_ListRxNormInferenceJobsResponse = (output: any, context: __SerdeContext): ListRxNormInferenceJobsResponse => {
  return take(output, {
    ComprehendMedicalAsyncJobPropertiesList: (_: any) => de_ComprehendMedicalAsyncJobPropertiesList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListSNOMEDCTInferenceJobsResponse
 */
const de_ListSNOMEDCTInferenceJobsResponse = (
  output: any,
  context: __SerdeContext
): ListSNOMEDCTInferenceJobsResponse => {
  return take(output, {
    ComprehendMedicalAsyncJobPropertiesList: (_: any) => de_ComprehendMedicalAsyncJobPropertiesList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_OutputDataConfig omitted.

// de_ResourceNotFoundException omitted.

/**
 * deserializeAws_json1_1RxNormAttribute
 */
const de_RxNormAttribute = (output: any, context: __SerdeContext): RxNormAttribute => {
  return take(output, {
    BeginOffset: __expectInt32,
    EndOffset: __expectInt32,
    Id: __expectInt32,
    RelationshipScore: __limitedParseFloat32,
    Score: __limitedParseFloat32,
    Text: __expectString,
    Traits: (_: any) => de_RxNormTraitList(_, context),
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1RxNormAttributeList
 */
const de_RxNormAttributeList = (output: any, context: __SerdeContext): RxNormAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RxNormAttribute(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RxNormConcept
 */
const de_RxNormConcept = (output: any, context: __SerdeContext): RxNormConcept => {
  return take(output, {
    Code: __expectString,
    Description: __expectString,
    Score: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1RxNormConceptList
 */
const de_RxNormConceptList = (output: any, context: __SerdeContext): RxNormConcept[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RxNormConcept(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RxNormEntity
 */
const de_RxNormEntity = (output: any, context: __SerdeContext): RxNormEntity => {
  return take(output, {
    Attributes: (_: any) => de_RxNormAttributeList(_, context),
    BeginOffset: __expectInt32,
    Category: __expectString,
    EndOffset: __expectInt32,
    Id: __expectInt32,
    RxNormConcepts: (_: any) => de_RxNormConceptList(_, context),
    Score: __limitedParseFloat32,
    Text: __expectString,
    Traits: (_: any) => de_RxNormTraitList(_, context),
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1RxNormEntityList
 */
const de_RxNormEntityList = (output: any, context: __SerdeContext): RxNormEntity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RxNormEntity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RxNormTrait
 */
const de_RxNormTrait = (output: any, context: __SerdeContext): RxNormTrait => {
  return take(output, {
    Name: __expectString,
    Score: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1RxNormTraitList
 */
const de_RxNormTraitList = (output: any, context: __SerdeContext): RxNormTrait[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RxNormTrait(entry, context);
    });
  return retVal;
};

// de_ServiceUnavailableException omitted.

/**
 * deserializeAws_json1_1SNOMEDCTAttribute
 */
const de_SNOMEDCTAttribute = (output: any, context: __SerdeContext): SNOMEDCTAttribute => {
  return take(output, {
    BeginOffset: __expectInt32,
    Category: __expectString,
    EndOffset: __expectInt32,
    Id: __expectInt32,
    RelationshipScore: __limitedParseFloat32,
    RelationshipType: __expectString,
    SNOMEDCTConcepts: (_: any) => de_SNOMEDCTConceptList(_, context),
    Score: __limitedParseFloat32,
    Text: __expectString,
    Traits: (_: any) => de_SNOMEDCTTraitList(_, context),
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1SNOMEDCTAttributeList
 */
const de_SNOMEDCTAttributeList = (output: any, context: __SerdeContext): SNOMEDCTAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SNOMEDCTAttribute(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SNOMEDCTConcept
 */
const de_SNOMEDCTConcept = (output: any, context: __SerdeContext): SNOMEDCTConcept => {
  return take(output, {
    Code: __expectString,
    Description: __expectString,
    Score: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1SNOMEDCTConceptList
 */
const de_SNOMEDCTConceptList = (output: any, context: __SerdeContext): SNOMEDCTConcept[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SNOMEDCTConcept(entry, context);
    });
  return retVal;
};

// de_SNOMEDCTDetails omitted.

/**
 * deserializeAws_json1_1SNOMEDCTEntity
 */
const de_SNOMEDCTEntity = (output: any, context: __SerdeContext): SNOMEDCTEntity => {
  return take(output, {
    Attributes: (_: any) => de_SNOMEDCTAttributeList(_, context),
    BeginOffset: __expectInt32,
    Category: __expectString,
    EndOffset: __expectInt32,
    Id: __expectInt32,
    SNOMEDCTConcepts: (_: any) => de_SNOMEDCTConceptList(_, context),
    Score: __limitedParseFloat32,
    Text: __expectString,
    Traits: (_: any) => de_SNOMEDCTTraitList(_, context),
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1SNOMEDCTEntityList
 */
const de_SNOMEDCTEntityList = (output: any, context: __SerdeContext): SNOMEDCTEntity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SNOMEDCTEntity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SNOMEDCTTrait
 */
const de_SNOMEDCTTrait = (output: any, context: __SerdeContext): SNOMEDCTTrait => {
  return take(output, {
    Name: __expectString,
    Score: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1SNOMEDCTTraitList
 */
const de_SNOMEDCTTraitList = (output: any, context: __SerdeContext): SNOMEDCTTrait[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SNOMEDCTTrait(entry, context);
    });
  return retVal;
};

// de_StartEntitiesDetectionV2JobResponse omitted.

// de_StartICD10CMInferenceJobResponse omitted.

// de_StartPHIDetectionJobResponse omitted.

// de_StartRxNormInferenceJobResponse omitted.

// de_StartSNOMEDCTInferenceJobResponse omitted.

// de_StopEntitiesDetectionV2JobResponse omitted.

// de_StopICD10CMInferenceJobResponse omitted.

// de_StopPHIDetectionJobResponse omitted.

// de_StopRxNormInferenceJobResponse omitted.

// de_StopSNOMEDCTInferenceJobResponse omitted.

// de_TextSizeLimitExceededException omitted.

// de_TooManyRequestsException omitted.

/**
 * deserializeAws_json1_1Trait
 */
const de_Trait = (output: any, context: __SerdeContext): Trait => {
  return take(output, {
    Name: __expectString,
    Score: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1TraitList
 */
const de_TraitList = (output: any, context: __SerdeContext): Trait[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Trait(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UnmappedAttribute
 */
const de_UnmappedAttribute = (output: any, context: __SerdeContext): UnmappedAttribute => {
  return take(output, {
    Attribute: (_: any) => de_Attribute(_, context),
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UnmappedAttributeList
 */
const de_UnmappedAttributeList = (output: any, context: __SerdeContext): UnmappedAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UnmappedAttribute(entry, context);
    });
  return retVal;
};

// de_ValidationException omitted.

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
