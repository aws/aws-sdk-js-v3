import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  DeleteRecommendationPreferencesCommandInput,
  DeleteRecommendationPreferencesCommandOutput,
} from "../commands/DeleteRecommendationPreferencesCommand";
import {
  DescribeRecommendationExportJobsCommandInput,
  DescribeRecommendationExportJobsCommandOutput,
} from "../commands/DescribeRecommendationExportJobsCommand";
import {
  ExportAutoScalingGroupRecommendationsCommandInput,
  ExportAutoScalingGroupRecommendationsCommandOutput,
} from "../commands/ExportAutoScalingGroupRecommendationsCommand";
import {
  ExportEBSVolumeRecommendationsCommandInput,
  ExportEBSVolumeRecommendationsCommandOutput,
} from "../commands/ExportEBSVolumeRecommendationsCommand";
import {
  ExportEC2InstanceRecommendationsCommandInput,
  ExportEC2InstanceRecommendationsCommandOutput,
} from "../commands/ExportEC2InstanceRecommendationsCommand";
import {
  ExportLambdaFunctionRecommendationsCommandInput,
  ExportLambdaFunctionRecommendationsCommandOutput,
} from "../commands/ExportLambdaFunctionRecommendationsCommand";
import {
  GetAutoScalingGroupRecommendationsCommandInput,
  GetAutoScalingGroupRecommendationsCommandOutput,
} from "../commands/GetAutoScalingGroupRecommendationsCommand";
import {
  GetEBSVolumeRecommendationsCommandInput,
  GetEBSVolumeRecommendationsCommandOutput,
} from "../commands/GetEBSVolumeRecommendationsCommand";
import {
  GetEC2InstanceRecommendationsCommandInput,
  GetEC2InstanceRecommendationsCommandOutput,
} from "../commands/GetEC2InstanceRecommendationsCommand";
import {
  GetEC2RecommendationProjectedMetricsCommandInput,
  GetEC2RecommendationProjectedMetricsCommandOutput,
} from "../commands/GetEC2RecommendationProjectedMetricsCommand";
import {
  GetEffectiveRecommendationPreferencesCommandInput,
  GetEffectiveRecommendationPreferencesCommandOutput,
} from "../commands/GetEffectiveRecommendationPreferencesCommand";
import {
  GetEnrollmentStatusCommandInput,
  GetEnrollmentStatusCommandOutput,
} from "../commands/GetEnrollmentStatusCommand";
import {
  GetEnrollmentStatusesForOrganizationCommandInput,
  GetEnrollmentStatusesForOrganizationCommandOutput,
} from "../commands/GetEnrollmentStatusesForOrganizationCommand";
import {
  GetLambdaFunctionRecommendationsCommandInput,
  GetLambdaFunctionRecommendationsCommandOutput,
} from "../commands/GetLambdaFunctionRecommendationsCommand";
import {
  GetRecommendationPreferencesCommandInput,
  GetRecommendationPreferencesCommandOutput,
} from "../commands/GetRecommendationPreferencesCommand";
import {
  GetRecommendationSummariesCommandInput,
  GetRecommendationSummariesCommandOutput,
} from "../commands/GetRecommendationSummariesCommand";
import {
  PutRecommendationPreferencesCommandInput,
  PutRecommendationPreferencesCommandOutput,
} from "../commands/PutRecommendationPreferencesCommand";
import {
  UpdateEnrollmentStatusCommandInput,
  UpdateEnrollmentStatusCommandOutput,
} from "../commands/UpdateEnrollmentStatusCommand";
import { ComputeOptimizerServiceException as __BaseException } from "../models/ComputeOptimizerServiceException";
import {
  AccessDeniedException,
  AccountEnrollmentStatus,
  AutoScalingGroupConfiguration,
  AutoScalingGroupRecommendation,
  AutoScalingGroupRecommendationOption,
  CpuVendorArchitecture,
  CurrentPerformanceRiskRatings,
  DeleteRecommendationPreferencesRequest,
  DeleteRecommendationPreferencesResponse,
  DescribeRecommendationExportJobsRequest,
  DescribeRecommendationExportJobsResponse,
  EBSFilter,
  EBSUtilizationMetric,
  EffectiveRecommendationPreferences,
  EnrollmentFilter,
  EstimatedMonthlySavings,
  ExportableAutoScalingGroupField,
  ExportableInstanceField,
  ExportableLambdaFunctionField,
  ExportableVolumeField,
  ExportAutoScalingGroupRecommendationsRequest,
  ExportAutoScalingGroupRecommendationsResponse,
  ExportDestination,
  ExportEBSVolumeRecommendationsRequest,
  ExportEBSVolumeRecommendationsResponse,
  ExportEC2InstanceRecommendationsRequest,
  ExportEC2InstanceRecommendationsResponse,
  ExportLambdaFunctionRecommendationsRequest,
  ExportLambdaFunctionRecommendationsResponse,
  Filter,
  GetAutoScalingGroupRecommendationsRequest,
  GetAutoScalingGroupRecommendationsResponse,
  GetEBSVolumeRecommendationsRequest,
  GetEBSVolumeRecommendationsResponse,
  GetEC2InstanceRecommendationsRequest,
  GetEC2InstanceRecommendationsResponse,
  GetEC2RecommendationProjectedMetricsRequest,
  GetEC2RecommendationProjectedMetricsResponse,
  GetEffectiveRecommendationPreferencesRequest,
  GetEffectiveRecommendationPreferencesResponse,
  GetEnrollmentStatusesForOrganizationRequest,
  GetEnrollmentStatusesForOrganizationResponse,
  GetEnrollmentStatusRequest,
  GetEnrollmentStatusResponse,
  GetLambdaFunctionRecommendationsRequest,
  GetLambdaFunctionRecommendationsResponse,
  GetRecommendationError,
  GetRecommendationPreferencesRequest,
  GetRecommendationPreferencesResponse,
  GetRecommendationSummariesRequest,
  GetRecommendationSummariesResponse,
  InferredWorkloadType,
  InstanceRecommendation,
  InstanceRecommendationFindingReasonCode,
  InstanceRecommendationOption,
  InternalServerException,
  InvalidParameterValueException,
  JobFilter,
  LambdaFunctionMemoryProjectedMetric,
  LambdaFunctionMemoryRecommendationOption,
  LambdaFunctionRecommendation,
  LambdaFunctionRecommendationFilter,
  LambdaFunctionRecommendationFindingReasonCode,
  LambdaFunctionUtilizationMetric,
  LimitExceededException,
  MissingAuthenticationToken,
  OptInRequiredException,
  PlatformDifference,
  ProjectedMetric,
  PutRecommendationPreferencesRequest,
  PutRecommendationPreferencesResponse,
  ReasonCodeSummary,
  RecommendationExportJob,
  RecommendationPreferenceName,
  RecommendationPreferences,
  RecommendationPreferencesDetail,
  RecommendationSource,
  RecommendationSummary,
  RecommendedOptionProjectedMetric,
  ResourceNotFoundException,
  S3Destination,
  S3DestinationConfig,
  SavingsOpportunity,
  Scope,
  ServiceUnavailableException,
  Summary,
  ThrottlingException,
  UpdateEnrollmentStatusRequest,
  UpdateEnrollmentStatusResponse,
  UtilizationMetric,
  VolumeConfiguration,
  VolumeRecommendation,
  VolumeRecommendationOption,
} from "../models/models_0";

export const serializeAws_json1_0DeleteRecommendationPreferencesCommand = async (
  input: DeleteRecommendationPreferencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ComputeOptimizerService.DeleteRecommendationPreferences",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteRecommendationPreferencesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeRecommendationExportJobsCommand = async (
  input: DescribeRecommendationExportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ComputeOptimizerService.DescribeRecommendationExportJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeRecommendationExportJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ExportAutoScalingGroupRecommendationsCommand = async (
  input: ExportAutoScalingGroupRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ComputeOptimizerService.ExportAutoScalingGroupRecommendations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ExportAutoScalingGroupRecommendationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ExportEBSVolumeRecommendationsCommand = async (
  input: ExportEBSVolumeRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ComputeOptimizerService.ExportEBSVolumeRecommendations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ExportEBSVolumeRecommendationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ExportEC2InstanceRecommendationsCommand = async (
  input: ExportEC2InstanceRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ComputeOptimizerService.ExportEC2InstanceRecommendations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ExportEC2InstanceRecommendationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ExportLambdaFunctionRecommendationsCommand = async (
  input: ExportLambdaFunctionRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ComputeOptimizerService.ExportLambdaFunctionRecommendations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ExportLambdaFunctionRecommendationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetAutoScalingGroupRecommendationsCommand = async (
  input: GetAutoScalingGroupRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ComputeOptimizerService.GetAutoScalingGroupRecommendations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetAutoScalingGroupRecommendationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetEBSVolumeRecommendationsCommand = async (
  input: GetEBSVolumeRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ComputeOptimizerService.GetEBSVolumeRecommendations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetEBSVolumeRecommendationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetEC2InstanceRecommendationsCommand = async (
  input: GetEC2InstanceRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ComputeOptimizerService.GetEC2InstanceRecommendations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetEC2InstanceRecommendationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetEC2RecommendationProjectedMetricsCommand = async (
  input: GetEC2RecommendationProjectedMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ComputeOptimizerService.GetEC2RecommendationProjectedMetrics",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetEC2RecommendationProjectedMetricsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetEffectiveRecommendationPreferencesCommand = async (
  input: GetEffectiveRecommendationPreferencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ComputeOptimizerService.GetEffectiveRecommendationPreferences",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetEffectiveRecommendationPreferencesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetEnrollmentStatusCommand = async (
  input: GetEnrollmentStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ComputeOptimizerService.GetEnrollmentStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetEnrollmentStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetEnrollmentStatusesForOrganizationCommand = async (
  input: GetEnrollmentStatusesForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ComputeOptimizerService.GetEnrollmentStatusesForOrganization",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetEnrollmentStatusesForOrganizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetLambdaFunctionRecommendationsCommand = async (
  input: GetLambdaFunctionRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ComputeOptimizerService.GetLambdaFunctionRecommendations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetLambdaFunctionRecommendationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetRecommendationPreferencesCommand = async (
  input: GetRecommendationPreferencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ComputeOptimizerService.GetRecommendationPreferences",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetRecommendationPreferencesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetRecommendationSummariesCommand = async (
  input: GetRecommendationSummariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ComputeOptimizerService.GetRecommendationSummaries",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetRecommendationSummariesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0PutRecommendationPreferencesCommand = async (
  input: PutRecommendationPreferencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ComputeOptimizerService.PutRecommendationPreferences",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0PutRecommendationPreferencesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateEnrollmentStatusCommand = async (
  input: UpdateEnrollmentStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ComputeOptimizerService.UpdateEnrollmentStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateEnrollmentStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_0DeleteRecommendationPreferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecommendationPreferencesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteRecommendationPreferencesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteRecommendationPreferencesResponse(data, context);
  const response: DeleteRecommendationPreferencesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteRecommendationPreferencesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecommendationPreferencesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      throw await deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      throw await deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context);
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer#OptInRequiredException":
      throw await deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.computeoptimizer#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      throw await deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0DescribeRecommendationExportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecommendationExportJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeRecommendationExportJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeRecommendationExportJobsResponse(data, context);
  const response: DescribeRecommendationExportJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeRecommendationExportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecommendationExportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      throw await deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      throw await deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context);
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer#OptInRequiredException":
      throw await deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.computeoptimizer#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      throw await deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0ExportAutoScalingGroupRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportAutoScalingGroupRecommendationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ExportAutoScalingGroupRecommendationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ExportAutoScalingGroupRecommendationsResponse(data, context);
  const response: ExportAutoScalingGroupRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ExportAutoScalingGroupRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportAutoScalingGroupRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      throw await deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.computeoptimizer#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      throw await deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context);
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer#OptInRequiredException":
      throw await deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      throw await deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0ExportEBSVolumeRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportEBSVolumeRecommendationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ExportEBSVolumeRecommendationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ExportEBSVolumeRecommendationsResponse(data, context);
  const response: ExportEBSVolumeRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ExportEBSVolumeRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportEBSVolumeRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      throw await deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.computeoptimizer#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      throw await deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context);
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer#OptInRequiredException":
      throw await deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      throw await deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0ExportEC2InstanceRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportEC2InstanceRecommendationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ExportEC2InstanceRecommendationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ExportEC2InstanceRecommendationsResponse(data, context);
  const response: ExportEC2InstanceRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ExportEC2InstanceRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportEC2InstanceRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      throw await deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.computeoptimizer#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      throw await deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context);
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer#OptInRequiredException":
      throw await deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      throw await deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0ExportLambdaFunctionRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportLambdaFunctionRecommendationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ExportLambdaFunctionRecommendationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ExportLambdaFunctionRecommendationsResponse(data, context);
  const response: ExportLambdaFunctionRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ExportLambdaFunctionRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportLambdaFunctionRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      throw await deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.computeoptimizer#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      throw await deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context);
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer#OptInRequiredException":
      throw await deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      throw await deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0GetAutoScalingGroupRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAutoScalingGroupRecommendationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetAutoScalingGroupRecommendationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetAutoScalingGroupRecommendationsResponse(data, context);
  const response: GetAutoScalingGroupRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetAutoScalingGroupRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAutoScalingGroupRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      throw await deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      throw await deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context);
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer#OptInRequiredException":
      throw await deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.computeoptimizer#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      throw await deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0GetEBSVolumeRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEBSVolumeRecommendationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetEBSVolumeRecommendationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetEBSVolumeRecommendationsResponse(data, context);
  const response: GetEBSVolumeRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetEBSVolumeRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEBSVolumeRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      throw await deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      throw await deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context);
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer#OptInRequiredException":
      throw await deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.computeoptimizer#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      throw await deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0GetEC2InstanceRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEC2InstanceRecommendationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetEC2InstanceRecommendationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetEC2InstanceRecommendationsResponse(data, context);
  const response: GetEC2InstanceRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetEC2InstanceRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEC2InstanceRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      throw await deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      throw await deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context);
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer#OptInRequiredException":
      throw await deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.computeoptimizer#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      throw await deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0GetEC2RecommendationProjectedMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEC2RecommendationProjectedMetricsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetEC2RecommendationProjectedMetricsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetEC2RecommendationProjectedMetricsResponse(data, context);
  const response: GetEC2RecommendationProjectedMetricsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetEC2RecommendationProjectedMetricsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEC2RecommendationProjectedMetricsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      throw await deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      throw await deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context);
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer#OptInRequiredException":
      throw await deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.computeoptimizer#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      throw await deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0GetEffectiveRecommendationPreferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEffectiveRecommendationPreferencesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetEffectiveRecommendationPreferencesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetEffectiveRecommendationPreferencesResponse(data, context);
  const response: GetEffectiveRecommendationPreferencesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetEffectiveRecommendationPreferencesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEffectiveRecommendationPreferencesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      throw await deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      throw await deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context);
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer#OptInRequiredException":
      throw await deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.computeoptimizer#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      throw await deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0GetEnrollmentStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnrollmentStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetEnrollmentStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetEnrollmentStatusResponse(data, context);
  const response: GetEnrollmentStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetEnrollmentStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnrollmentStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      throw await deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      throw await deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      throw await deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0GetEnrollmentStatusesForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnrollmentStatusesForOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetEnrollmentStatusesForOrganizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetEnrollmentStatusesForOrganizationResponse(data, context);
  const response: GetEnrollmentStatusesForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetEnrollmentStatusesForOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnrollmentStatusesForOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      throw await deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      throw await deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      throw await deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0GetLambdaFunctionRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLambdaFunctionRecommendationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetLambdaFunctionRecommendationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetLambdaFunctionRecommendationsResponse(data, context);
  const response: GetLambdaFunctionRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetLambdaFunctionRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLambdaFunctionRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      throw await deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.computeoptimizer#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      throw await deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context);
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer#OptInRequiredException":
      throw await deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      throw await deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0GetRecommendationPreferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommendationPreferencesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetRecommendationPreferencesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetRecommendationPreferencesResponse(data, context);
  const response: GetRecommendationPreferencesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetRecommendationPreferencesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommendationPreferencesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      throw await deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      throw await deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context);
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer#OptInRequiredException":
      throw await deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.computeoptimizer#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      throw await deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0GetRecommendationSummariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommendationSummariesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetRecommendationSummariesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetRecommendationSummariesResponse(data, context);
  const response: GetRecommendationSummariesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetRecommendationSummariesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommendationSummariesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      throw await deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      throw await deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context);
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer#OptInRequiredException":
      throw await deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      throw await deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0PutRecommendationPreferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecommendationPreferencesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0PutRecommendationPreferencesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0PutRecommendationPreferencesResponse(data, context);
  const response: PutRecommendationPreferencesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0PutRecommendationPreferencesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecommendationPreferencesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      throw await deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      throw await deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context);
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer#OptInRequiredException":
      throw await deserializeAws_json1_0OptInRequiredExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.computeoptimizer#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      throw await deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0UpdateEnrollmentStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnrollmentStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateEnrollmentStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateEnrollmentStatusResponse(data, context);
  const response: UpdateEnrollmentStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateEnrollmentStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnrollmentStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      throw await deserializeAws_json1_0InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      throw await deserializeAws_json1_0MissingAuthenticationTokenResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      throw await deserializeAws_json1_0ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

const deserializeAws_json1_0AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InternalServerException(body, context);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0InvalidParameterValueExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidParameterValueException(body, context);
  const exception = new InvalidParameterValueException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0MissingAuthenticationTokenResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MissingAuthenticationToken> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0MissingAuthenticationToken(body, context);
  const exception = new MissingAuthenticationToken({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0OptInRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OptInRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0OptInRequiredException(body, context);
  const exception = new OptInRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ServiceUnavailableException(body, context);
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ThrottlingException(body, context);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_0AccountIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_0AutoScalingGroupArns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_0CpuVendorArchitectures = (
  input: (CpuVendorArchitecture | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_0DeleteRecommendationPreferencesRequest = (
  input: DeleteRecommendationPreferencesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.recommendationPreferenceNames !== undefined &&
      input.recommendationPreferenceNames !== null && {
        recommendationPreferenceNames: serializeAws_json1_0RecommendationPreferenceNames(
          input.recommendationPreferenceNames,
          context
        ),
      }),
    ...(input.resourceType !== undefined && input.resourceType !== null && { resourceType: input.resourceType }),
    ...(input.scope !== undefined &&
      input.scope !== null && { scope: serializeAws_json1_0Scope(input.scope, context) }),
  };
};

const serializeAws_json1_0DescribeRecommendationExportJobsRequest = (
  input: DescribeRecommendationExportJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_json1_0JobFilters(input.filters, context) }),
    ...(input.jobIds !== undefined &&
      input.jobIds !== null && { jobIds: serializeAws_json1_0JobIds(input.jobIds, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_0EBSFilter = (input: EBSFilter, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.values !== undefined &&
      input.values !== null && { values: serializeAws_json1_0FilterValues(input.values, context) }),
  };
};

const serializeAws_json1_0EBSFilters = (input: EBSFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_0EBSFilter(entry, context);
    });
};

const serializeAws_json1_0EnrollmentFilter = (input: EnrollmentFilter, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.values !== undefined &&
      input.values !== null && { values: serializeAws_json1_0FilterValues(input.values, context) }),
  };
};

const serializeAws_json1_0EnrollmentFilters = (input: EnrollmentFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_0EnrollmentFilter(entry, context);
    });
};

const serializeAws_json1_0ExportableAutoScalingGroupFields = (
  input: (ExportableAutoScalingGroupField | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_0ExportableInstanceFields = (
  input: (ExportableInstanceField | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_0ExportableLambdaFunctionFields = (
  input: (ExportableLambdaFunctionField | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_0ExportableVolumeFields = (
  input: (ExportableVolumeField | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_0ExportAutoScalingGroupRecommendationsRequest = (
  input: ExportAutoScalingGroupRecommendationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.accountIds !== undefined &&
      input.accountIds !== null && { accountIds: serializeAws_json1_0AccountIds(input.accountIds, context) }),
    ...(input.fieldsToExport !== undefined &&
      input.fieldsToExport !== null && {
        fieldsToExport: serializeAws_json1_0ExportableAutoScalingGroupFields(input.fieldsToExport, context),
      }),
    ...(input.fileFormat !== undefined && input.fileFormat !== null && { fileFormat: input.fileFormat }),
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_json1_0Filters(input.filters, context) }),
    ...(input.includeMemberAccounts !== undefined &&
      input.includeMemberAccounts !== null && { includeMemberAccounts: input.includeMemberAccounts }),
    ...(input.recommendationPreferences !== undefined &&
      input.recommendationPreferences !== null && {
        recommendationPreferences: serializeAws_json1_0RecommendationPreferences(
          input.recommendationPreferences,
          context
        ),
      }),
    ...(input.s3DestinationConfig !== undefined &&
      input.s3DestinationConfig !== null && {
        s3DestinationConfig: serializeAws_json1_0S3DestinationConfig(input.s3DestinationConfig, context),
      }),
  };
};

const serializeAws_json1_0ExportEBSVolumeRecommendationsRequest = (
  input: ExportEBSVolumeRecommendationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.accountIds !== undefined &&
      input.accountIds !== null && { accountIds: serializeAws_json1_0AccountIds(input.accountIds, context) }),
    ...(input.fieldsToExport !== undefined &&
      input.fieldsToExport !== null && {
        fieldsToExport: serializeAws_json1_0ExportableVolumeFields(input.fieldsToExport, context),
      }),
    ...(input.fileFormat !== undefined && input.fileFormat !== null && { fileFormat: input.fileFormat }),
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_json1_0EBSFilters(input.filters, context) }),
    ...(input.includeMemberAccounts !== undefined &&
      input.includeMemberAccounts !== null && { includeMemberAccounts: input.includeMemberAccounts }),
    ...(input.s3DestinationConfig !== undefined &&
      input.s3DestinationConfig !== null && {
        s3DestinationConfig: serializeAws_json1_0S3DestinationConfig(input.s3DestinationConfig, context),
      }),
  };
};

const serializeAws_json1_0ExportEC2InstanceRecommendationsRequest = (
  input: ExportEC2InstanceRecommendationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.accountIds !== undefined &&
      input.accountIds !== null && { accountIds: serializeAws_json1_0AccountIds(input.accountIds, context) }),
    ...(input.fieldsToExport !== undefined &&
      input.fieldsToExport !== null && {
        fieldsToExport: serializeAws_json1_0ExportableInstanceFields(input.fieldsToExport, context),
      }),
    ...(input.fileFormat !== undefined && input.fileFormat !== null && { fileFormat: input.fileFormat }),
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_json1_0Filters(input.filters, context) }),
    ...(input.includeMemberAccounts !== undefined &&
      input.includeMemberAccounts !== null && { includeMemberAccounts: input.includeMemberAccounts }),
    ...(input.recommendationPreferences !== undefined &&
      input.recommendationPreferences !== null && {
        recommendationPreferences: serializeAws_json1_0RecommendationPreferences(
          input.recommendationPreferences,
          context
        ),
      }),
    ...(input.s3DestinationConfig !== undefined &&
      input.s3DestinationConfig !== null && {
        s3DestinationConfig: serializeAws_json1_0S3DestinationConfig(input.s3DestinationConfig, context),
      }),
  };
};

const serializeAws_json1_0ExportLambdaFunctionRecommendationsRequest = (
  input: ExportLambdaFunctionRecommendationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.accountIds !== undefined &&
      input.accountIds !== null && { accountIds: serializeAws_json1_0AccountIds(input.accountIds, context) }),
    ...(input.fieldsToExport !== undefined &&
      input.fieldsToExport !== null && {
        fieldsToExport: serializeAws_json1_0ExportableLambdaFunctionFields(input.fieldsToExport, context),
      }),
    ...(input.fileFormat !== undefined && input.fileFormat !== null && { fileFormat: input.fileFormat }),
    ...(input.filters !== undefined &&
      input.filters !== null && {
        filters: serializeAws_json1_0LambdaFunctionRecommendationFilters(input.filters, context),
      }),
    ...(input.includeMemberAccounts !== undefined &&
      input.includeMemberAccounts !== null && { includeMemberAccounts: input.includeMemberAccounts }),
    ...(input.s3DestinationConfig !== undefined &&
      input.s3DestinationConfig !== null && {
        s3DestinationConfig: serializeAws_json1_0S3DestinationConfig(input.s3DestinationConfig, context),
      }),
  };
};

const serializeAws_json1_0Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.values !== undefined &&
      input.values !== null && { values: serializeAws_json1_0FilterValues(input.values, context) }),
  };
};

const serializeAws_json1_0Filters = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_0Filter(entry, context);
    });
};

const serializeAws_json1_0FilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_0FunctionArns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_0GetAutoScalingGroupRecommendationsRequest = (
  input: GetAutoScalingGroupRecommendationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.accountIds !== undefined &&
      input.accountIds !== null && { accountIds: serializeAws_json1_0AccountIds(input.accountIds, context) }),
    ...(input.autoScalingGroupArns !== undefined &&
      input.autoScalingGroupArns !== null && {
        autoScalingGroupArns: serializeAws_json1_0AutoScalingGroupArns(input.autoScalingGroupArns, context),
      }),
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_json1_0Filters(input.filters, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.recommendationPreferences !== undefined &&
      input.recommendationPreferences !== null && {
        recommendationPreferences: serializeAws_json1_0RecommendationPreferences(
          input.recommendationPreferences,
          context
        ),
      }),
  };
};

const serializeAws_json1_0GetEBSVolumeRecommendationsRequest = (
  input: GetEBSVolumeRecommendationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.accountIds !== undefined &&
      input.accountIds !== null && { accountIds: serializeAws_json1_0AccountIds(input.accountIds, context) }),
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_json1_0EBSFilters(input.filters, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.volumeArns !== undefined &&
      input.volumeArns !== null && { volumeArns: serializeAws_json1_0VolumeArns(input.volumeArns, context) }),
  };
};

const serializeAws_json1_0GetEC2InstanceRecommendationsRequest = (
  input: GetEC2InstanceRecommendationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.accountIds !== undefined &&
      input.accountIds !== null && { accountIds: serializeAws_json1_0AccountIds(input.accountIds, context) }),
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_json1_0Filters(input.filters, context) }),
    ...(input.instanceArns !== undefined &&
      input.instanceArns !== null && { instanceArns: serializeAws_json1_0InstanceArns(input.instanceArns, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.recommendationPreferences !== undefined &&
      input.recommendationPreferences !== null && {
        recommendationPreferences: serializeAws_json1_0RecommendationPreferences(
          input.recommendationPreferences,
          context
        ),
      }),
  };
};

const serializeAws_json1_0GetEC2RecommendationProjectedMetricsRequest = (
  input: GetEC2RecommendationProjectedMetricsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.endTime !== undefined &&
      input.endTime !== null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.instanceArn !== undefined && input.instanceArn !== null && { instanceArn: input.instanceArn }),
    ...(input.period !== undefined && input.period !== null && { period: input.period }),
    ...(input.recommendationPreferences !== undefined &&
      input.recommendationPreferences !== null && {
        recommendationPreferences: serializeAws_json1_0RecommendationPreferences(
          input.recommendationPreferences,
          context
        ),
      }),
    ...(input.startTime !== undefined &&
      input.startTime !== null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
    ...(input.stat !== undefined && input.stat !== null && { stat: input.stat }),
  };
};

const serializeAws_json1_0GetEffectiveRecommendationPreferencesRequest = (
  input: GetEffectiveRecommendationPreferencesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
  };
};

const serializeAws_json1_0GetEnrollmentStatusesForOrganizationRequest = (
  input: GetEnrollmentStatusesForOrganizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_json1_0EnrollmentFilters(input.filters, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_0GetEnrollmentStatusRequest = (
  input: GetEnrollmentStatusRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_0GetLambdaFunctionRecommendationsRequest = (
  input: GetLambdaFunctionRecommendationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.accountIds !== undefined &&
      input.accountIds !== null && { accountIds: serializeAws_json1_0AccountIds(input.accountIds, context) }),
    ...(input.filters !== undefined &&
      input.filters !== null && {
        filters: serializeAws_json1_0LambdaFunctionRecommendationFilters(input.filters, context),
      }),
    ...(input.functionArns !== undefined &&
      input.functionArns !== null && { functionArns: serializeAws_json1_0FunctionArns(input.functionArns, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_0GetRecommendationPreferencesRequest = (
  input: GetRecommendationPreferencesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.resourceType !== undefined && input.resourceType !== null && { resourceType: input.resourceType }),
    ...(input.scope !== undefined &&
      input.scope !== null && { scope: serializeAws_json1_0Scope(input.scope, context) }),
  };
};

const serializeAws_json1_0GetRecommendationSummariesRequest = (
  input: GetRecommendationSummariesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.accountIds !== undefined &&
      input.accountIds !== null && { accountIds: serializeAws_json1_0AccountIds(input.accountIds, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_0InstanceArns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_0JobFilter = (input: JobFilter, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.values !== undefined &&
      input.values !== null && { values: serializeAws_json1_0FilterValues(input.values, context) }),
  };
};

const serializeAws_json1_0JobFilters = (input: JobFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_0JobFilter(entry, context);
    });
};

const serializeAws_json1_0JobIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_0LambdaFunctionRecommendationFilter = (
  input: LambdaFunctionRecommendationFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.values !== undefined &&
      input.values !== null && { values: serializeAws_json1_0FilterValues(input.values, context) }),
  };
};

const serializeAws_json1_0LambdaFunctionRecommendationFilters = (
  input: LambdaFunctionRecommendationFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_0LambdaFunctionRecommendationFilter(entry, context);
    });
};

const serializeAws_json1_0PutRecommendationPreferencesRequest = (
  input: PutRecommendationPreferencesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.enhancedInfrastructureMetrics !== undefined &&
      input.enhancedInfrastructureMetrics !== null && {
        enhancedInfrastructureMetrics: input.enhancedInfrastructureMetrics,
      }),
    ...(input.inferredWorkloadTypes !== undefined &&
      input.inferredWorkloadTypes !== null && { inferredWorkloadTypes: input.inferredWorkloadTypes }),
    ...(input.resourceType !== undefined && input.resourceType !== null && { resourceType: input.resourceType }),
    ...(input.scope !== undefined &&
      input.scope !== null && { scope: serializeAws_json1_0Scope(input.scope, context) }),
  };
};

const serializeAws_json1_0RecommendationPreferenceNames = (
  input: (RecommendationPreferenceName | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_0RecommendationPreferences = (
  input: RecommendationPreferences,
  context: __SerdeContext
): any => {
  return {
    ...(input.cpuVendorArchitectures !== undefined &&
      input.cpuVendorArchitectures !== null && {
        cpuVendorArchitectures: serializeAws_json1_0CpuVendorArchitectures(input.cpuVendorArchitectures, context),
      }),
  };
};

const serializeAws_json1_0S3DestinationConfig = (input: S3DestinationConfig, context: __SerdeContext): any => {
  return {
    ...(input.bucket !== undefined && input.bucket !== null && { bucket: input.bucket }),
    ...(input.keyPrefix !== undefined && input.keyPrefix !== null && { keyPrefix: input.keyPrefix }),
  };
};

const serializeAws_json1_0Scope = (input: Scope, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_json1_0UpdateEnrollmentStatusRequest = (
  input: UpdateEnrollmentStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.includeMemberAccounts !== undefined &&
      input.includeMemberAccounts !== null && { includeMemberAccounts: input.includeMemberAccounts }),
    ...(input.status !== undefined && input.status !== null && { status: input.status }),
  };
};

const serializeAws_json1_0VolumeArns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_0AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0AccountEnrollmentStatus = (
  output: any,
  context: __SerdeContext
): AccountEnrollmentStatus => {
  return {
    accountId: __expectString(output.accountId),
    lastUpdatedTimestamp:
      output.lastUpdatedTimestamp !== undefined && output.lastUpdatedTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedTimestamp)))
        : undefined,
    status: __expectString(output.status),
    statusReason: __expectString(output.statusReason),
  } as any;
};

const deserializeAws_json1_0AccountEnrollmentStatuses = (
  output: any,
  context: __SerdeContext
): AccountEnrollmentStatus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0AccountEnrollmentStatus(entry, context);
    });
};

const deserializeAws_json1_0AutoScalingGroupConfiguration = (
  output: any,
  context: __SerdeContext
): AutoScalingGroupConfiguration => {
  return {
    desiredCapacity: __expectInt32(output.desiredCapacity),
    instanceType: __expectString(output.instanceType),
    maxSize: __expectInt32(output.maxSize),
    minSize: __expectInt32(output.minSize),
  } as any;
};

const deserializeAws_json1_0AutoScalingGroupRecommendation = (
  output: any,
  context: __SerdeContext
): AutoScalingGroupRecommendation => {
  return {
    accountId: __expectString(output.accountId),
    autoScalingGroupArn: __expectString(output.autoScalingGroupArn),
    autoScalingGroupName: __expectString(output.autoScalingGroupName),
    currentConfiguration:
      output.currentConfiguration !== undefined && output.currentConfiguration !== null
        ? deserializeAws_json1_0AutoScalingGroupConfiguration(output.currentConfiguration, context)
        : undefined,
    currentPerformanceRisk: __expectString(output.currentPerformanceRisk),
    effectiveRecommendationPreferences:
      output.effectiveRecommendationPreferences !== undefined && output.effectiveRecommendationPreferences !== null
        ? deserializeAws_json1_0EffectiveRecommendationPreferences(output.effectiveRecommendationPreferences, context)
        : undefined,
    finding: __expectString(output.finding),
    inferredWorkloadTypes:
      output.inferredWorkloadTypes !== undefined && output.inferredWorkloadTypes !== null
        ? deserializeAws_json1_0InferredWorkloadTypes(output.inferredWorkloadTypes, context)
        : undefined,
    lastRefreshTimestamp:
      output.lastRefreshTimestamp !== undefined && output.lastRefreshTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastRefreshTimestamp)))
        : undefined,
    lookBackPeriodInDays: __limitedParseDouble(output.lookBackPeriodInDays),
    recommendationOptions:
      output.recommendationOptions !== undefined && output.recommendationOptions !== null
        ? deserializeAws_json1_0AutoScalingGroupRecommendationOptions(output.recommendationOptions, context)
        : undefined,
    utilizationMetrics:
      output.utilizationMetrics !== undefined && output.utilizationMetrics !== null
        ? deserializeAws_json1_0UtilizationMetrics(output.utilizationMetrics, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0AutoScalingGroupRecommendationOption = (
  output: any,
  context: __SerdeContext
): AutoScalingGroupRecommendationOption => {
  return {
    configuration:
      output.configuration !== undefined && output.configuration !== null
        ? deserializeAws_json1_0AutoScalingGroupConfiguration(output.configuration, context)
        : undefined,
    migrationEffort: __expectString(output.migrationEffort),
    performanceRisk: __limitedParseDouble(output.performanceRisk),
    projectedUtilizationMetrics:
      output.projectedUtilizationMetrics !== undefined && output.projectedUtilizationMetrics !== null
        ? deserializeAws_json1_0ProjectedUtilizationMetrics(output.projectedUtilizationMetrics, context)
        : undefined,
    rank: __expectInt32(output.rank),
    savingsOpportunity:
      output.savingsOpportunity !== undefined && output.savingsOpportunity !== null
        ? deserializeAws_json1_0SavingsOpportunity(output.savingsOpportunity, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0AutoScalingGroupRecommendationOptions = (
  output: any,
  context: __SerdeContext
): AutoScalingGroupRecommendationOption[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0AutoScalingGroupRecommendationOption(entry, context);
    });
};

const deserializeAws_json1_0AutoScalingGroupRecommendations = (
  output: any,
  context: __SerdeContext
): AutoScalingGroupRecommendation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0AutoScalingGroupRecommendation(entry, context);
    });
};

const deserializeAws_json1_0CpuVendorArchitectures = (
  output: any,
  context: __SerdeContext
): (CpuVendorArchitecture | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_0CurrentPerformanceRiskRatings = (
  output: any,
  context: __SerdeContext
): CurrentPerformanceRiskRatings => {
  return {
    high: __expectLong(output.high),
    low: __expectLong(output.low),
    medium: __expectLong(output.medium),
    veryLow: __expectLong(output.veryLow),
  } as any;
};

const deserializeAws_json1_0DeleteRecommendationPreferencesResponse = (
  output: any,
  context: __SerdeContext
): DeleteRecommendationPreferencesResponse => {
  return {} as any;
};

const deserializeAws_json1_0DescribeRecommendationExportJobsResponse = (
  output: any,
  context: __SerdeContext
): DescribeRecommendationExportJobsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    recommendationExportJobs:
      output.recommendationExportJobs !== undefined && output.recommendationExportJobs !== null
        ? deserializeAws_json1_0RecommendationExportJobs(output.recommendationExportJobs, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0EBSUtilizationMetric = (output: any, context: __SerdeContext): EBSUtilizationMetric => {
  return {
    name: __expectString(output.name),
    statistic: __expectString(output.statistic),
    value: __limitedParseDouble(output.value),
  } as any;
};

const deserializeAws_json1_0EBSUtilizationMetrics = (output: any, context: __SerdeContext): EBSUtilizationMetric[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0EBSUtilizationMetric(entry, context);
    });
};

const deserializeAws_json1_0EffectiveRecommendationPreferences = (
  output: any,
  context: __SerdeContext
): EffectiveRecommendationPreferences => {
  return {
    cpuVendorArchitectures:
      output.cpuVendorArchitectures !== undefined && output.cpuVendorArchitectures !== null
        ? deserializeAws_json1_0CpuVendorArchitectures(output.cpuVendorArchitectures, context)
        : undefined,
    enhancedInfrastructureMetrics: __expectString(output.enhancedInfrastructureMetrics),
    inferredWorkloadTypes: __expectString(output.inferredWorkloadTypes),
  } as any;
};

const deserializeAws_json1_0EstimatedMonthlySavings = (
  output: any,
  context: __SerdeContext
): EstimatedMonthlySavings => {
  return {
    currency: __expectString(output.currency),
    value: __limitedParseDouble(output.value),
  } as any;
};

const deserializeAws_json1_0ExportAutoScalingGroupRecommendationsResponse = (
  output: any,
  context: __SerdeContext
): ExportAutoScalingGroupRecommendationsResponse => {
  return {
    jobId: __expectString(output.jobId),
    s3Destination:
      output.s3Destination !== undefined && output.s3Destination !== null
        ? deserializeAws_json1_0S3Destination(output.s3Destination, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ExportDestination = (output: any, context: __SerdeContext): ExportDestination => {
  return {
    s3:
      output.s3 !== undefined && output.s3 !== null
        ? deserializeAws_json1_0S3Destination(output.s3, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ExportEBSVolumeRecommendationsResponse = (
  output: any,
  context: __SerdeContext
): ExportEBSVolumeRecommendationsResponse => {
  return {
    jobId: __expectString(output.jobId),
    s3Destination:
      output.s3Destination !== undefined && output.s3Destination !== null
        ? deserializeAws_json1_0S3Destination(output.s3Destination, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ExportEC2InstanceRecommendationsResponse = (
  output: any,
  context: __SerdeContext
): ExportEC2InstanceRecommendationsResponse => {
  return {
    jobId: __expectString(output.jobId),
    s3Destination:
      output.s3Destination !== undefined && output.s3Destination !== null
        ? deserializeAws_json1_0S3Destination(output.s3Destination, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ExportLambdaFunctionRecommendationsResponse = (
  output: any,
  context: __SerdeContext
): ExportLambdaFunctionRecommendationsResponse => {
  return {
    jobId: __expectString(output.jobId),
    s3Destination:
      output.s3Destination !== undefined && output.s3Destination !== null
        ? deserializeAws_json1_0S3Destination(output.s3Destination, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0GetAutoScalingGroupRecommendationsResponse = (
  output: any,
  context: __SerdeContext
): GetAutoScalingGroupRecommendationsResponse => {
  return {
    autoScalingGroupRecommendations:
      output.autoScalingGroupRecommendations !== undefined && output.autoScalingGroupRecommendations !== null
        ? deserializeAws_json1_0AutoScalingGroupRecommendations(output.autoScalingGroupRecommendations, context)
        : undefined,
    errors:
      output.errors !== undefined && output.errors !== null
        ? deserializeAws_json1_0GetRecommendationErrors(output.errors, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_0GetEBSVolumeRecommendationsResponse = (
  output: any,
  context: __SerdeContext
): GetEBSVolumeRecommendationsResponse => {
  return {
    errors:
      output.errors !== undefined && output.errors !== null
        ? deserializeAws_json1_0GetRecommendationErrors(output.errors, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
    volumeRecommendations:
      output.volumeRecommendations !== undefined && output.volumeRecommendations !== null
        ? deserializeAws_json1_0VolumeRecommendations(output.volumeRecommendations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0GetEC2InstanceRecommendationsResponse = (
  output: any,
  context: __SerdeContext
): GetEC2InstanceRecommendationsResponse => {
  return {
    errors:
      output.errors !== undefined && output.errors !== null
        ? deserializeAws_json1_0GetRecommendationErrors(output.errors, context)
        : undefined,
    instanceRecommendations:
      output.instanceRecommendations !== undefined && output.instanceRecommendations !== null
        ? deserializeAws_json1_0InstanceRecommendations(output.instanceRecommendations, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_0GetEC2RecommendationProjectedMetricsResponse = (
  output: any,
  context: __SerdeContext
): GetEC2RecommendationProjectedMetricsResponse => {
  return {
    recommendedOptionProjectedMetrics:
      output.recommendedOptionProjectedMetrics !== undefined && output.recommendedOptionProjectedMetrics !== null
        ? deserializeAws_json1_0RecommendedOptionProjectedMetrics(output.recommendedOptionProjectedMetrics, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0GetEffectiveRecommendationPreferencesResponse = (
  output: any,
  context: __SerdeContext
): GetEffectiveRecommendationPreferencesResponse => {
  return {
    enhancedInfrastructureMetrics: __expectString(output.enhancedInfrastructureMetrics),
  } as any;
};

const deserializeAws_json1_0GetEnrollmentStatusesForOrganizationResponse = (
  output: any,
  context: __SerdeContext
): GetEnrollmentStatusesForOrganizationResponse => {
  return {
    accountEnrollmentStatuses:
      output.accountEnrollmentStatuses !== undefined && output.accountEnrollmentStatuses !== null
        ? deserializeAws_json1_0AccountEnrollmentStatuses(output.accountEnrollmentStatuses, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_0GetEnrollmentStatusResponse = (
  output: any,
  context: __SerdeContext
): GetEnrollmentStatusResponse => {
  return {
    lastUpdatedTimestamp:
      output.lastUpdatedTimestamp !== undefined && output.lastUpdatedTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedTimestamp)))
        : undefined,
    memberAccountsEnrolled: __expectBoolean(output.memberAccountsEnrolled),
    numberOfMemberAccountsOptedIn: __expectInt32(output.numberOfMemberAccountsOptedIn),
    status: __expectString(output.status),
    statusReason: __expectString(output.statusReason),
  } as any;
};

const deserializeAws_json1_0GetLambdaFunctionRecommendationsResponse = (
  output: any,
  context: __SerdeContext
): GetLambdaFunctionRecommendationsResponse => {
  return {
    lambdaFunctionRecommendations:
      output.lambdaFunctionRecommendations !== undefined && output.lambdaFunctionRecommendations !== null
        ? deserializeAws_json1_0LambdaFunctionRecommendations(output.lambdaFunctionRecommendations, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_0GetRecommendationError = (output: any, context: __SerdeContext): GetRecommendationError => {
  return {
    code: __expectString(output.code),
    identifier: __expectString(output.identifier),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0GetRecommendationErrors = (
  output: any,
  context: __SerdeContext
): GetRecommendationError[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0GetRecommendationError(entry, context);
    });
};

const deserializeAws_json1_0GetRecommendationPreferencesResponse = (
  output: any,
  context: __SerdeContext
): GetRecommendationPreferencesResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    recommendationPreferencesDetails:
      output.recommendationPreferencesDetails !== undefined && output.recommendationPreferencesDetails !== null
        ? deserializeAws_json1_0RecommendationPreferencesDetails(output.recommendationPreferencesDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0GetRecommendationSummariesResponse = (
  output: any,
  context: __SerdeContext
): GetRecommendationSummariesResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    recommendationSummaries:
      output.recommendationSummaries !== undefined && output.recommendationSummaries !== null
        ? deserializeAws_json1_0RecommendationSummaries(output.recommendationSummaries, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0InferredWorkloadTypes = (
  output: any,
  context: __SerdeContext
): (InferredWorkloadType | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_0InstanceRecommendation = (output: any, context: __SerdeContext): InstanceRecommendation => {
  return {
    accountId: __expectString(output.accountId),
    currentInstanceType: __expectString(output.currentInstanceType),
    currentPerformanceRisk: __expectString(output.currentPerformanceRisk),
    effectiveRecommendationPreferences:
      output.effectiveRecommendationPreferences !== undefined && output.effectiveRecommendationPreferences !== null
        ? deserializeAws_json1_0EffectiveRecommendationPreferences(output.effectiveRecommendationPreferences, context)
        : undefined,
    finding: __expectString(output.finding),
    findingReasonCodes:
      output.findingReasonCodes !== undefined && output.findingReasonCodes !== null
        ? deserializeAws_json1_0InstanceRecommendationFindingReasonCodes(output.findingReasonCodes, context)
        : undefined,
    inferredWorkloadTypes:
      output.inferredWorkloadTypes !== undefined && output.inferredWorkloadTypes !== null
        ? deserializeAws_json1_0InferredWorkloadTypes(output.inferredWorkloadTypes, context)
        : undefined,
    instanceArn: __expectString(output.instanceArn),
    instanceName: __expectString(output.instanceName),
    lastRefreshTimestamp:
      output.lastRefreshTimestamp !== undefined && output.lastRefreshTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastRefreshTimestamp)))
        : undefined,
    lookBackPeriodInDays: __limitedParseDouble(output.lookBackPeriodInDays),
    recommendationOptions:
      output.recommendationOptions !== undefined && output.recommendationOptions !== null
        ? deserializeAws_json1_0RecommendationOptions(output.recommendationOptions, context)
        : undefined,
    recommendationSources:
      output.recommendationSources !== undefined && output.recommendationSources !== null
        ? deserializeAws_json1_0RecommendationSources(output.recommendationSources, context)
        : undefined,
    utilizationMetrics:
      output.utilizationMetrics !== undefined && output.utilizationMetrics !== null
        ? deserializeAws_json1_0UtilizationMetrics(output.utilizationMetrics, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0InstanceRecommendationFindingReasonCodes = (
  output: any,
  context: __SerdeContext
): (InstanceRecommendationFindingReasonCode | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_0InstanceRecommendationOption = (
  output: any,
  context: __SerdeContext
): InstanceRecommendationOption => {
  return {
    instanceType: __expectString(output.instanceType),
    migrationEffort: __expectString(output.migrationEffort),
    performanceRisk: __limitedParseDouble(output.performanceRisk),
    platformDifferences:
      output.platformDifferences !== undefined && output.platformDifferences !== null
        ? deserializeAws_json1_0PlatformDifferences(output.platformDifferences, context)
        : undefined,
    projectedUtilizationMetrics:
      output.projectedUtilizationMetrics !== undefined && output.projectedUtilizationMetrics !== null
        ? deserializeAws_json1_0ProjectedUtilizationMetrics(output.projectedUtilizationMetrics, context)
        : undefined,
    rank: __expectInt32(output.rank),
    savingsOpportunity:
      output.savingsOpportunity !== undefined && output.savingsOpportunity !== null
        ? deserializeAws_json1_0SavingsOpportunity(output.savingsOpportunity, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0InstanceRecommendations = (
  output: any,
  context: __SerdeContext
): InstanceRecommendation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0InstanceRecommendation(entry, context);
    });
};

const deserializeAws_json1_0InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0InvalidParameterValueException = (
  output: any,
  context: __SerdeContext
): InvalidParameterValueException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0LambdaFunctionMemoryProjectedMetric = (
  output: any,
  context: __SerdeContext
): LambdaFunctionMemoryProjectedMetric => {
  return {
    name: __expectString(output.name),
    statistic: __expectString(output.statistic),
    value: __limitedParseDouble(output.value),
  } as any;
};

const deserializeAws_json1_0LambdaFunctionMemoryProjectedMetrics = (
  output: any,
  context: __SerdeContext
): LambdaFunctionMemoryProjectedMetric[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0LambdaFunctionMemoryProjectedMetric(entry, context);
    });
};

const deserializeAws_json1_0LambdaFunctionMemoryRecommendationOption = (
  output: any,
  context: __SerdeContext
): LambdaFunctionMemoryRecommendationOption => {
  return {
    memorySize: __expectInt32(output.memorySize),
    projectedUtilizationMetrics:
      output.projectedUtilizationMetrics !== undefined && output.projectedUtilizationMetrics !== null
        ? deserializeAws_json1_0LambdaFunctionMemoryProjectedMetrics(output.projectedUtilizationMetrics, context)
        : undefined,
    rank: __expectInt32(output.rank),
    savingsOpportunity:
      output.savingsOpportunity !== undefined && output.savingsOpportunity !== null
        ? deserializeAws_json1_0SavingsOpportunity(output.savingsOpportunity, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0LambdaFunctionMemoryRecommendationOptions = (
  output: any,
  context: __SerdeContext
): LambdaFunctionMemoryRecommendationOption[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0LambdaFunctionMemoryRecommendationOption(entry, context);
    });
};

const deserializeAws_json1_0LambdaFunctionRecommendation = (
  output: any,
  context: __SerdeContext
): LambdaFunctionRecommendation => {
  return {
    accountId: __expectString(output.accountId),
    currentMemorySize: __expectInt32(output.currentMemorySize),
    currentPerformanceRisk: __expectString(output.currentPerformanceRisk),
    finding: __expectString(output.finding),
    findingReasonCodes:
      output.findingReasonCodes !== undefined && output.findingReasonCodes !== null
        ? deserializeAws_json1_0LambdaFunctionRecommendationFindingReasonCodes(output.findingReasonCodes, context)
        : undefined,
    functionArn: __expectString(output.functionArn),
    functionVersion: __expectString(output.functionVersion),
    lastRefreshTimestamp:
      output.lastRefreshTimestamp !== undefined && output.lastRefreshTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastRefreshTimestamp)))
        : undefined,
    lookbackPeriodInDays: __limitedParseDouble(output.lookbackPeriodInDays),
    memorySizeRecommendationOptions:
      output.memorySizeRecommendationOptions !== undefined && output.memorySizeRecommendationOptions !== null
        ? deserializeAws_json1_0LambdaFunctionMemoryRecommendationOptions(
            output.memorySizeRecommendationOptions,
            context
          )
        : undefined,
    numberOfInvocations: __expectLong(output.numberOfInvocations),
    utilizationMetrics:
      output.utilizationMetrics !== undefined && output.utilizationMetrics !== null
        ? deserializeAws_json1_0LambdaFunctionUtilizationMetrics(output.utilizationMetrics, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0LambdaFunctionRecommendationFindingReasonCodes = (
  output: any,
  context: __SerdeContext
): (LambdaFunctionRecommendationFindingReasonCode | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_0LambdaFunctionRecommendations = (
  output: any,
  context: __SerdeContext
): LambdaFunctionRecommendation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0LambdaFunctionRecommendation(entry, context);
    });
};

const deserializeAws_json1_0LambdaFunctionUtilizationMetric = (
  output: any,
  context: __SerdeContext
): LambdaFunctionUtilizationMetric => {
  return {
    name: __expectString(output.name),
    statistic: __expectString(output.statistic),
    value: __limitedParseDouble(output.value),
  } as any;
};

const deserializeAws_json1_0LambdaFunctionUtilizationMetrics = (
  output: any,
  context: __SerdeContext
): LambdaFunctionUtilizationMetric[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0LambdaFunctionUtilizationMetric(entry, context);
    });
};

const deserializeAws_json1_0LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0MetricValues = (output: any, context: __SerdeContext): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __limitedParseDouble(entry) as any;
    });
};

const deserializeAws_json1_0MissingAuthenticationToken = (
  output: any,
  context: __SerdeContext
): MissingAuthenticationToken => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0OptInRequiredException = (output: any, context: __SerdeContext): OptInRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0PlatformDifferences = (
  output: any,
  context: __SerdeContext
): (PlatformDifference | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_0ProjectedMetric = (output: any, context: __SerdeContext): ProjectedMetric => {
  return {
    name: __expectString(output.name),
    timestamps:
      output.timestamps !== undefined && output.timestamps !== null
        ? deserializeAws_json1_0Timestamps(output.timestamps, context)
        : undefined,
    values:
      output.values !== undefined && output.values !== null
        ? deserializeAws_json1_0MetricValues(output.values, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ProjectedMetrics = (output: any, context: __SerdeContext): ProjectedMetric[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ProjectedMetric(entry, context);
    });
};

const deserializeAws_json1_0ProjectedUtilizationMetrics = (
  output: any,
  context: __SerdeContext
): UtilizationMetric[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0UtilizationMetric(entry, context);
    });
};

const deserializeAws_json1_0PutRecommendationPreferencesResponse = (
  output: any,
  context: __SerdeContext
): PutRecommendationPreferencesResponse => {
  return {} as any;
};

const deserializeAws_json1_0ReasonCodeSummaries = (output: any, context: __SerdeContext): ReasonCodeSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ReasonCodeSummary(entry, context);
    });
};

const deserializeAws_json1_0ReasonCodeSummary = (output: any, context: __SerdeContext): ReasonCodeSummary => {
  return {
    name: __expectString(output.name),
    value: __limitedParseDouble(output.value),
  } as any;
};

const deserializeAws_json1_0RecommendationExportJob = (
  output: any,
  context: __SerdeContext
): RecommendationExportJob => {
  return {
    creationTimestamp:
      output.creationTimestamp !== undefined && output.creationTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTimestamp)))
        : undefined,
    destination:
      output.destination !== undefined && output.destination !== null
        ? deserializeAws_json1_0ExportDestination(output.destination, context)
        : undefined,
    failureReason: __expectString(output.failureReason),
    jobId: __expectString(output.jobId),
    lastUpdatedTimestamp:
      output.lastUpdatedTimestamp !== undefined && output.lastUpdatedTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedTimestamp)))
        : undefined,
    resourceType: __expectString(output.resourceType),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_0RecommendationExportJobs = (
  output: any,
  context: __SerdeContext
): RecommendationExportJob[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0RecommendationExportJob(entry, context);
    });
};

const deserializeAws_json1_0RecommendationOptions = (
  output: any,
  context: __SerdeContext
): InstanceRecommendationOption[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0InstanceRecommendationOption(entry, context);
    });
};

const deserializeAws_json1_0RecommendationPreferencesDetail = (
  output: any,
  context: __SerdeContext
): RecommendationPreferencesDetail => {
  return {
    enhancedInfrastructureMetrics: __expectString(output.enhancedInfrastructureMetrics),
    inferredWorkloadTypes: __expectString(output.inferredWorkloadTypes),
    resourceType: __expectString(output.resourceType),
    scope:
      output.scope !== undefined && output.scope !== null
        ? deserializeAws_json1_0Scope(output.scope, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0RecommendationPreferencesDetails = (
  output: any,
  context: __SerdeContext
): RecommendationPreferencesDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0RecommendationPreferencesDetail(entry, context);
    });
};

const deserializeAws_json1_0RecommendationSource = (output: any, context: __SerdeContext): RecommendationSource => {
  return {
    recommendationSourceArn: __expectString(output.recommendationSourceArn),
    recommendationSourceType: __expectString(output.recommendationSourceType),
  } as any;
};

const deserializeAws_json1_0RecommendationSources = (output: any, context: __SerdeContext): RecommendationSource[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0RecommendationSource(entry, context);
    });
};

const deserializeAws_json1_0RecommendationSummaries = (
  output: any,
  context: __SerdeContext
): RecommendationSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0RecommendationSummary(entry, context);
    });
};

const deserializeAws_json1_0RecommendationSummary = (output: any, context: __SerdeContext): RecommendationSummary => {
  return {
    accountId: __expectString(output.accountId),
    currentPerformanceRiskRatings:
      output.currentPerformanceRiskRatings !== undefined && output.currentPerformanceRiskRatings !== null
        ? deserializeAws_json1_0CurrentPerformanceRiskRatings(output.currentPerformanceRiskRatings, context)
        : undefined,
    recommendationResourceType: __expectString(output.recommendationResourceType),
    savingsOpportunity:
      output.savingsOpportunity !== undefined && output.savingsOpportunity !== null
        ? deserializeAws_json1_0SavingsOpportunity(output.savingsOpportunity, context)
        : undefined,
    summaries:
      output.summaries !== undefined && output.summaries !== null
        ? deserializeAws_json1_0Summaries(output.summaries, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0RecommendedOptionProjectedMetric = (
  output: any,
  context: __SerdeContext
): RecommendedOptionProjectedMetric => {
  return {
    projectedMetrics:
      output.projectedMetrics !== undefined && output.projectedMetrics !== null
        ? deserializeAws_json1_0ProjectedMetrics(output.projectedMetrics, context)
        : undefined,
    rank: __expectInt32(output.rank),
    recommendedInstanceType: __expectString(output.recommendedInstanceType),
  } as any;
};

const deserializeAws_json1_0RecommendedOptionProjectedMetrics = (
  output: any,
  context: __SerdeContext
): RecommendedOptionProjectedMetric[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0RecommendedOptionProjectedMetric(entry, context);
    });
};

const deserializeAws_json1_0ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0S3Destination = (output: any, context: __SerdeContext): S3Destination => {
  return {
    bucket: __expectString(output.bucket),
    key: __expectString(output.key),
    metadataKey: __expectString(output.metadataKey),
  } as any;
};

const deserializeAws_json1_0SavingsOpportunity = (output: any, context: __SerdeContext): SavingsOpportunity => {
  return {
    estimatedMonthlySavings:
      output.estimatedMonthlySavings !== undefined && output.estimatedMonthlySavings !== null
        ? deserializeAws_json1_0EstimatedMonthlySavings(output.estimatedMonthlySavings, context)
        : undefined,
    savingsOpportunityPercentage: __limitedParseDouble(output.savingsOpportunityPercentage),
  } as any;
};

const deserializeAws_json1_0Scope = (output: any, context: __SerdeContext): Scope => {
  return {
    name: __expectString(output.name),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_json1_0ServiceUnavailableException = (
  output: any,
  context: __SerdeContext
): ServiceUnavailableException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0Summaries = (output: any, context: __SerdeContext): Summary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0Summary(entry, context);
    });
};

const deserializeAws_json1_0Summary = (output: any, context: __SerdeContext): Summary => {
  return {
    name: __expectString(output.name),
    reasonCodeSummaries:
      output.reasonCodeSummaries !== undefined && output.reasonCodeSummaries !== null
        ? deserializeAws_json1_0ReasonCodeSummaries(output.reasonCodeSummaries, context)
        : undefined,
    value: __limitedParseDouble(output.value),
  } as any;
};

const deserializeAws_json1_0ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0Timestamps = (output: any, context: __SerdeContext): Date[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectNonNull(__parseEpochTimestamp(__expectNumber(entry)));
    });
};

const deserializeAws_json1_0UpdateEnrollmentStatusResponse = (
  output: any,
  context: __SerdeContext
): UpdateEnrollmentStatusResponse => {
  return {
    status: __expectString(output.status),
    statusReason: __expectString(output.statusReason),
  } as any;
};

const deserializeAws_json1_0UtilizationMetric = (output: any, context: __SerdeContext): UtilizationMetric => {
  return {
    name: __expectString(output.name),
    statistic: __expectString(output.statistic),
    value: __limitedParseDouble(output.value),
  } as any;
};

const deserializeAws_json1_0UtilizationMetrics = (output: any, context: __SerdeContext): UtilizationMetric[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0UtilizationMetric(entry, context);
    });
};

const deserializeAws_json1_0VolumeConfiguration = (output: any, context: __SerdeContext): VolumeConfiguration => {
  return {
    volumeBaselineIOPS: __expectInt32(output.volumeBaselineIOPS),
    volumeBaselineThroughput: __expectInt32(output.volumeBaselineThroughput),
    volumeBurstIOPS: __expectInt32(output.volumeBurstIOPS),
    volumeBurstThroughput: __expectInt32(output.volumeBurstThroughput),
    volumeSize: __expectInt32(output.volumeSize),
    volumeType: __expectString(output.volumeType),
  } as any;
};

const deserializeAws_json1_0VolumeRecommendation = (output: any, context: __SerdeContext): VolumeRecommendation => {
  return {
    accountId: __expectString(output.accountId),
    currentConfiguration:
      output.currentConfiguration !== undefined && output.currentConfiguration !== null
        ? deserializeAws_json1_0VolumeConfiguration(output.currentConfiguration, context)
        : undefined,
    currentPerformanceRisk: __expectString(output.currentPerformanceRisk),
    finding: __expectString(output.finding),
    lastRefreshTimestamp:
      output.lastRefreshTimestamp !== undefined && output.lastRefreshTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastRefreshTimestamp)))
        : undefined,
    lookBackPeriodInDays: __limitedParseDouble(output.lookBackPeriodInDays),
    utilizationMetrics:
      output.utilizationMetrics !== undefined && output.utilizationMetrics !== null
        ? deserializeAws_json1_0EBSUtilizationMetrics(output.utilizationMetrics, context)
        : undefined,
    volumeArn: __expectString(output.volumeArn),
    volumeRecommendationOptions:
      output.volumeRecommendationOptions !== undefined && output.volumeRecommendationOptions !== null
        ? deserializeAws_json1_0VolumeRecommendationOptions(output.volumeRecommendationOptions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0VolumeRecommendationOption = (
  output: any,
  context: __SerdeContext
): VolumeRecommendationOption => {
  return {
    configuration:
      output.configuration !== undefined && output.configuration !== null
        ? deserializeAws_json1_0VolumeConfiguration(output.configuration, context)
        : undefined,
    performanceRisk: __limitedParseDouble(output.performanceRisk),
    rank: __expectInt32(output.rank),
    savingsOpportunity:
      output.savingsOpportunity !== undefined && output.savingsOpportunity !== null
        ? deserializeAws_json1_0SavingsOpportunity(output.savingsOpportunity, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0VolumeRecommendationOptions = (
  output: any,
  context: __SerdeContext
): VolumeRecommendationOption[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0VolumeRecommendationOption(entry, context);
    });
};

const deserializeAws_json1_0VolumeRecommendations = (output: any, context: __SerdeContext): VolumeRecommendation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0VolumeRecommendation(entry, context);
    });
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
