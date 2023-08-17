// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
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
  ExportECSServiceRecommendationsCommandInput,
  ExportECSServiceRecommendationsCommandOutput,
} from "../commands/ExportECSServiceRecommendationsCommand";
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
  GetECSServiceRecommendationProjectedMetricsCommandInput,
  GetECSServiceRecommendationProjectedMetricsCommandOutput,
} from "../commands/GetECSServiceRecommendationProjectedMetricsCommand";
import {
  GetECSServiceRecommendationsCommandInput,
  GetECSServiceRecommendationsCommandOutput,
} from "../commands/GetECSServiceRecommendationsCommand";
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
  AutoScalingGroupRecommendation,
  AutoScalingGroupRecommendationOption,
  CpuVendorArchitecture,
  DeleteRecommendationPreferencesRequest,
  DescribeRecommendationExportJobsRequest,
  DescribeRecommendationExportJobsResponse,
  EBSFilter,
  EBSUtilizationMetric,
  ECSServiceProjectedMetric,
  ECSServiceProjectedUtilizationMetric,
  ECSServiceRecommendation,
  ECSServiceRecommendationFilter,
  ECSServiceRecommendationOption,
  ECSServiceRecommendedOptionProjectedMetric,
  ECSServiceUtilizationMetric,
  EnrollmentFilter,
  EstimatedMonthlySavings,
  ExportableAutoScalingGroupField,
  ExportableECSServiceField,
  ExportableInstanceField,
  ExportableLambdaFunctionField,
  ExportableVolumeField,
  ExportAutoScalingGroupRecommendationsRequest,
  ExportEBSVolumeRecommendationsRequest,
  ExportEC2InstanceRecommendationsRequest,
  ExportECSServiceRecommendationsRequest,
  ExportLambdaFunctionRecommendationsRequest,
  ExternalMetricsPreference,
  Filter,
  GetAutoScalingGroupRecommendationsRequest,
  GetAutoScalingGroupRecommendationsResponse,
  GetEBSVolumeRecommendationsRequest,
  GetEBSVolumeRecommendationsResponse,
  GetEC2InstanceRecommendationsRequest,
  GetEC2InstanceRecommendationsResponse,
  GetEC2RecommendationProjectedMetricsRequest,
  GetEC2RecommendationProjectedMetricsResponse,
  GetECSServiceRecommendationProjectedMetricsRequest,
  GetECSServiceRecommendationProjectedMetricsResponse,
  GetECSServiceRecommendationsRequest,
  GetECSServiceRecommendationsResponse,
  GetEffectiveRecommendationPreferencesRequest,
  GetEnrollmentStatusesForOrganizationRequest,
  GetEnrollmentStatusesForOrganizationResponse,
  GetEnrollmentStatusRequest,
  GetEnrollmentStatusResponse,
  GetLambdaFunctionRecommendationsRequest,
  GetLambdaFunctionRecommendationsResponse,
  GetRecommendationPreferencesRequest,
  GetRecommendationSummariesRequest,
  GetRecommendationSummariesResponse,
  InferredWorkloadSaving,
  InstanceRecommendation,
  InstanceRecommendationOption,
  InternalServerException,
  InvalidParameterValueException,
  JobFilter,
  LambdaFunctionMemoryProjectedMetric,
  LambdaFunctionMemoryRecommendationOption,
  LambdaFunctionRecommendation,
  LambdaFunctionRecommendationFilter,
  LambdaFunctionUtilizationMetric,
  LimitExceededException,
  MissingAuthenticationToken,
  OptInRequiredException,
  ProjectedMetric,
  PutRecommendationPreferencesRequest,
  ReasonCodeSummary,
  RecommendationExportJob,
  RecommendationPreferenceName,
  RecommendationPreferences,
  RecommendationSummary,
  RecommendedOptionProjectedMetric,
  ResourceNotFoundException,
  S3DestinationConfig,
  SavingsOpportunity,
  Scope,
  ServiceUnavailableException,
  Summary,
  ThrottlingException,
  UpdateEnrollmentStatusRequest,
  UtilizationMetric,
  VolumeRecommendation,
  VolumeRecommendationOption,
} from "../models/models_0";

/**
 * serializeAws_json1_0DeleteRecommendationPreferencesCommand
 */
export const se_DeleteRecommendationPreferencesCommand = async (
  input: DeleteRecommendationPreferencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteRecommendationPreferences");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeRecommendationExportJobsCommand
 */
export const se_DescribeRecommendationExportJobsCommand = async (
  input: DescribeRecommendationExportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeRecommendationExportJobs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ExportAutoScalingGroupRecommendationsCommand
 */
export const se_ExportAutoScalingGroupRecommendationsCommand = async (
  input: ExportAutoScalingGroupRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ExportAutoScalingGroupRecommendations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ExportEBSVolumeRecommendationsCommand
 */
export const se_ExportEBSVolumeRecommendationsCommand = async (
  input: ExportEBSVolumeRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ExportEBSVolumeRecommendations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ExportEC2InstanceRecommendationsCommand
 */
export const se_ExportEC2InstanceRecommendationsCommand = async (
  input: ExportEC2InstanceRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ExportEC2InstanceRecommendations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ExportECSServiceRecommendationsCommand
 */
export const se_ExportECSServiceRecommendationsCommand = async (
  input: ExportECSServiceRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ExportECSServiceRecommendations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ExportLambdaFunctionRecommendationsCommand
 */
export const se_ExportLambdaFunctionRecommendationsCommand = async (
  input: ExportLambdaFunctionRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ExportLambdaFunctionRecommendations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetAutoScalingGroupRecommendationsCommand
 */
export const se_GetAutoScalingGroupRecommendationsCommand = async (
  input: GetAutoScalingGroupRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAutoScalingGroupRecommendations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetEBSVolumeRecommendationsCommand
 */
export const se_GetEBSVolumeRecommendationsCommand = async (
  input: GetEBSVolumeRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetEBSVolumeRecommendations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetEC2InstanceRecommendationsCommand
 */
export const se_GetEC2InstanceRecommendationsCommand = async (
  input: GetEC2InstanceRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetEC2InstanceRecommendations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetEC2RecommendationProjectedMetricsCommand
 */
export const se_GetEC2RecommendationProjectedMetricsCommand = async (
  input: GetEC2RecommendationProjectedMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetEC2RecommendationProjectedMetrics");
  let body: any;
  body = JSON.stringify(se_GetEC2RecommendationProjectedMetricsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetECSServiceRecommendationProjectedMetricsCommand
 */
export const se_GetECSServiceRecommendationProjectedMetricsCommand = async (
  input: GetECSServiceRecommendationProjectedMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetECSServiceRecommendationProjectedMetrics");
  let body: any;
  body = JSON.stringify(se_GetECSServiceRecommendationProjectedMetricsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetECSServiceRecommendationsCommand
 */
export const se_GetECSServiceRecommendationsCommand = async (
  input: GetECSServiceRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetECSServiceRecommendations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetEffectiveRecommendationPreferencesCommand
 */
export const se_GetEffectiveRecommendationPreferencesCommand = async (
  input: GetEffectiveRecommendationPreferencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetEffectiveRecommendationPreferences");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetEnrollmentStatusCommand
 */
export const se_GetEnrollmentStatusCommand = async (
  input: GetEnrollmentStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetEnrollmentStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetEnrollmentStatusesForOrganizationCommand
 */
export const se_GetEnrollmentStatusesForOrganizationCommand = async (
  input: GetEnrollmentStatusesForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetEnrollmentStatusesForOrganization");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetLambdaFunctionRecommendationsCommand
 */
export const se_GetLambdaFunctionRecommendationsCommand = async (
  input: GetLambdaFunctionRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetLambdaFunctionRecommendations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetRecommendationPreferencesCommand
 */
export const se_GetRecommendationPreferencesCommand = async (
  input: GetRecommendationPreferencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRecommendationPreferences");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetRecommendationSummariesCommand
 */
export const se_GetRecommendationSummariesCommand = async (
  input: GetRecommendationSummariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRecommendationSummaries");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0PutRecommendationPreferencesCommand
 */
export const se_PutRecommendationPreferencesCommand = async (
  input: PutRecommendationPreferencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutRecommendationPreferences");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateEnrollmentStatusCommand
 */
export const se_UpdateEnrollmentStatusCommand = async (
  input: UpdateEnrollmentStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateEnrollmentStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0DeleteRecommendationPreferencesCommand
 */
export const de_DeleteRecommendationPreferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecommendationPreferencesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteRecommendationPreferencesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteRecommendationPreferencesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteRecommendationPreferencesCommandError
 */
const de_DeleteRecommendationPreferencesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecommendationPreferencesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      throw await de_MissingAuthenticationTokenRes(parsedOutput, context);
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer#OptInRequiredException":
      throw await de_OptInRequiredExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.computeoptimizer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DescribeRecommendationExportJobsCommand
 */
export const de_DescribeRecommendationExportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecommendationExportJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeRecommendationExportJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeRecommendationExportJobsResponse(data, context);
  const response: DescribeRecommendationExportJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeRecommendationExportJobsCommandError
 */
const de_DescribeRecommendationExportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecommendationExportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      throw await de_MissingAuthenticationTokenRes(parsedOutput, context);
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer#OptInRequiredException":
      throw await de_OptInRequiredExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.computeoptimizer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ExportAutoScalingGroupRecommendationsCommand
 */
export const de_ExportAutoScalingGroupRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportAutoScalingGroupRecommendationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ExportAutoScalingGroupRecommendationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ExportAutoScalingGroupRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ExportAutoScalingGroupRecommendationsCommandError
 */
const de_ExportAutoScalingGroupRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportAutoScalingGroupRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.computeoptimizer#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      throw await de_MissingAuthenticationTokenRes(parsedOutput, context);
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer#OptInRequiredException":
      throw await de_OptInRequiredExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ExportEBSVolumeRecommendationsCommand
 */
export const de_ExportEBSVolumeRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportEBSVolumeRecommendationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ExportEBSVolumeRecommendationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ExportEBSVolumeRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ExportEBSVolumeRecommendationsCommandError
 */
const de_ExportEBSVolumeRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportEBSVolumeRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.computeoptimizer#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      throw await de_MissingAuthenticationTokenRes(parsedOutput, context);
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer#OptInRequiredException":
      throw await de_OptInRequiredExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ExportEC2InstanceRecommendationsCommand
 */
export const de_ExportEC2InstanceRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportEC2InstanceRecommendationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ExportEC2InstanceRecommendationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ExportEC2InstanceRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ExportEC2InstanceRecommendationsCommandError
 */
const de_ExportEC2InstanceRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportEC2InstanceRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.computeoptimizer#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      throw await de_MissingAuthenticationTokenRes(parsedOutput, context);
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer#OptInRequiredException":
      throw await de_OptInRequiredExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ExportECSServiceRecommendationsCommand
 */
export const de_ExportECSServiceRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportECSServiceRecommendationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ExportECSServiceRecommendationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ExportECSServiceRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ExportECSServiceRecommendationsCommandError
 */
const de_ExportECSServiceRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportECSServiceRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.computeoptimizer#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      throw await de_MissingAuthenticationTokenRes(parsedOutput, context);
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer#OptInRequiredException":
      throw await de_OptInRequiredExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ExportLambdaFunctionRecommendationsCommand
 */
export const de_ExportLambdaFunctionRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportLambdaFunctionRecommendationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ExportLambdaFunctionRecommendationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ExportLambdaFunctionRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ExportLambdaFunctionRecommendationsCommandError
 */
const de_ExportLambdaFunctionRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportLambdaFunctionRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.computeoptimizer#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      throw await de_MissingAuthenticationTokenRes(parsedOutput, context);
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer#OptInRequiredException":
      throw await de_OptInRequiredExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetAutoScalingGroupRecommendationsCommand
 */
export const de_GetAutoScalingGroupRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAutoScalingGroupRecommendationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAutoScalingGroupRecommendationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAutoScalingGroupRecommendationsResponse(data, context);
  const response: GetAutoScalingGroupRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetAutoScalingGroupRecommendationsCommandError
 */
const de_GetAutoScalingGroupRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAutoScalingGroupRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      throw await de_MissingAuthenticationTokenRes(parsedOutput, context);
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer#OptInRequiredException":
      throw await de_OptInRequiredExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.computeoptimizer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetEBSVolumeRecommendationsCommand
 */
export const de_GetEBSVolumeRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEBSVolumeRecommendationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetEBSVolumeRecommendationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetEBSVolumeRecommendationsResponse(data, context);
  const response: GetEBSVolumeRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetEBSVolumeRecommendationsCommandError
 */
const de_GetEBSVolumeRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEBSVolumeRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      throw await de_MissingAuthenticationTokenRes(parsedOutput, context);
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer#OptInRequiredException":
      throw await de_OptInRequiredExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.computeoptimizer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetEC2InstanceRecommendationsCommand
 */
export const de_GetEC2InstanceRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEC2InstanceRecommendationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetEC2InstanceRecommendationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetEC2InstanceRecommendationsResponse(data, context);
  const response: GetEC2InstanceRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetEC2InstanceRecommendationsCommandError
 */
const de_GetEC2InstanceRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEC2InstanceRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      throw await de_MissingAuthenticationTokenRes(parsedOutput, context);
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer#OptInRequiredException":
      throw await de_OptInRequiredExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.computeoptimizer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetEC2RecommendationProjectedMetricsCommand
 */
export const de_GetEC2RecommendationProjectedMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEC2RecommendationProjectedMetricsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetEC2RecommendationProjectedMetricsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetEC2RecommendationProjectedMetricsResponse(data, context);
  const response: GetEC2RecommendationProjectedMetricsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetEC2RecommendationProjectedMetricsCommandError
 */
const de_GetEC2RecommendationProjectedMetricsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEC2RecommendationProjectedMetricsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      throw await de_MissingAuthenticationTokenRes(parsedOutput, context);
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer#OptInRequiredException":
      throw await de_OptInRequiredExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.computeoptimizer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetECSServiceRecommendationProjectedMetricsCommand
 */
export const de_GetECSServiceRecommendationProjectedMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetECSServiceRecommendationProjectedMetricsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetECSServiceRecommendationProjectedMetricsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetECSServiceRecommendationProjectedMetricsResponse(data, context);
  const response: GetECSServiceRecommendationProjectedMetricsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetECSServiceRecommendationProjectedMetricsCommandError
 */
const de_GetECSServiceRecommendationProjectedMetricsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetECSServiceRecommendationProjectedMetricsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      throw await de_MissingAuthenticationTokenRes(parsedOutput, context);
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer#OptInRequiredException":
      throw await de_OptInRequiredExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.computeoptimizer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetECSServiceRecommendationsCommand
 */
export const de_GetECSServiceRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetECSServiceRecommendationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetECSServiceRecommendationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetECSServiceRecommendationsResponse(data, context);
  const response: GetECSServiceRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetECSServiceRecommendationsCommandError
 */
const de_GetECSServiceRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetECSServiceRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      throw await de_MissingAuthenticationTokenRes(parsedOutput, context);
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer#OptInRequiredException":
      throw await de_OptInRequiredExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.computeoptimizer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetEffectiveRecommendationPreferencesCommand
 */
export const de_GetEffectiveRecommendationPreferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEffectiveRecommendationPreferencesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetEffectiveRecommendationPreferencesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetEffectiveRecommendationPreferencesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetEffectiveRecommendationPreferencesCommandError
 */
const de_GetEffectiveRecommendationPreferencesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEffectiveRecommendationPreferencesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      throw await de_MissingAuthenticationTokenRes(parsedOutput, context);
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer#OptInRequiredException":
      throw await de_OptInRequiredExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.computeoptimizer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetEnrollmentStatusCommand
 */
export const de_GetEnrollmentStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnrollmentStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetEnrollmentStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetEnrollmentStatusResponse(data, context);
  const response: GetEnrollmentStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetEnrollmentStatusCommandError
 */
const de_GetEnrollmentStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnrollmentStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      throw await de_MissingAuthenticationTokenRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetEnrollmentStatusesForOrganizationCommand
 */
export const de_GetEnrollmentStatusesForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnrollmentStatusesForOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetEnrollmentStatusesForOrganizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetEnrollmentStatusesForOrganizationResponse(data, context);
  const response: GetEnrollmentStatusesForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetEnrollmentStatusesForOrganizationCommandError
 */
const de_GetEnrollmentStatusesForOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnrollmentStatusesForOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      throw await de_MissingAuthenticationTokenRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetLambdaFunctionRecommendationsCommand
 */
export const de_GetLambdaFunctionRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLambdaFunctionRecommendationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetLambdaFunctionRecommendationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetLambdaFunctionRecommendationsResponse(data, context);
  const response: GetLambdaFunctionRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetLambdaFunctionRecommendationsCommandError
 */
const de_GetLambdaFunctionRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLambdaFunctionRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.computeoptimizer#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      throw await de_MissingAuthenticationTokenRes(parsedOutput, context);
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer#OptInRequiredException":
      throw await de_OptInRequiredExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetRecommendationPreferencesCommand
 */
export const de_GetRecommendationPreferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommendationPreferencesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRecommendationPreferencesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetRecommendationPreferencesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetRecommendationPreferencesCommandError
 */
const de_GetRecommendationPreferencesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommendationPreferencesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      throw await de_MissingAuthenticationTokenRes(parsedOutput, context);
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer#OptInRequiredException":
      throw await de_OptInRequiredExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.computeoptimizer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetRecommendationSummariesCommand
 */
export const de_GetRecommendationSummariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommendationSummariesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRecommendationSummariesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRecommendationSummariesResponse(data, context);
  const response: GetRecommendationSummariesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetRecommendationSummariesCommandError
 */
const de_GetRecommendationSummariesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommendationSummariesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      throw await de_MissingAuthenticationTokenRes(parsedOutput, context);
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer#OptInRequiredException":
      throw await de_OptInRequiredExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0PutRecommendationPreferencesCommand
 */
export const de_PutRecommendationPreferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecommendationPreferencesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutRecommendationPreferencesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutRecommendationPreferencesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0PutRecommendationPreferencesCommandError
 */
const de_PutRecommendationPreferencesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecommendationPreferencesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      throw await de_MissingAuthenticationTokenRes(parsedOutput, context);
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer#OptInRequiredException":
      throw await de_OptInRequiredExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.computeoptimizer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateEnrollmentStatusCommand
 */
export const de_UpdateEnrollmentStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnrollmentStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateEnrollmentStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateEnrollmentStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateEnrollmentStatusCommandError
 */
const de_UpdateEnrollmentStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnrollmentStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      throw await de_MissingAuthenticationTokenRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InternalServerExceptionRes
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
 * deserializeAws_json1_0InvalidParameterValueExceptionRes
 */
const de_InvalidParameterValueExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidParameterValueException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0MissingAuthenticationTokenRes
 */
const de_MissingAuthenticationTokenRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MissingAuthenticationToken> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new MissingAuthenticationToken({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0OptInRequiredExceptionRes
 */
const de_OptInRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OptInRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new OptInRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ResourceNotFoundExceptionRes
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
 * deserializeAws_json1_0ServiceUnavailableExceptionRes
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
 * deserializeAws_json1_0ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AccountIds omitted.

// se_AutoScalingGroupArns omitted.

// se_CpuVendorArchitectures omitted.

// se_DeleteRecommendationPreferencesRequest omitted.

// se_DescribeRecommendationExportJobsRequest omitted.

// se_EBSFilter omitted.

// se_EBSFilters omitted.

// se_ECSServiceRecommendationFilter omitted.

// se_ECSServiceRecommendationFilters omitted.

// se_EnrollmentFilter omitted.

// se_EnrollmentFilters omitted.

// se_ExportableAutoScalingGroupFields omitted.

// se_ExportableECSServiceFields omitted.

// se_ExportableInstanceFields omitted.

// se_ExportableLambdaFunctionFields omitted.

// se_ExportableVolumeFields omitted.

// se_ExportAutoScalingGroupRecommendationsRequest omitted.

// se_ExportEBSVolumeRecommendationsRequest omitted.

// se_ExportEC2InstanceRecommendationsRequest omitted.

// se_ExportECSServiceRecommendationsRequest omitted.

// se_ExportLambdaFunctionRecommendationsRequest omitted.

// se_ExternalMetricsPreference omitted.

// se_Filter omitted.

// se_Filters omitted.

// se_FilterValues omitted.

// se_FunctionArns omitted.

// se_GetAutoScalingGroupRecommendationsRequest omitted.

// se_GetEBSVolumeRecommendationsRequest omitted.

// se_GetEC2InstanceRecommendationsRequest omitted.

/**
 * serializeAws_json1_0GetEC2RecommendationProjectedMetricsRequest
 */
const se_GetEC2RecommendationProjectedMetricsRequest = (
  input: GetEC2RecommendationProjectedMetricsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    endTime: (_) => Math.round(_.getTime() / 1000),
    instanceArn: [],
    period: [],
    recommendationPreferences: _json,
    startTime: (_) => Math.round(_.getTime() / 1000),
    stat: [],
  });
};

/**
 * serializeAws_json1_0GetECSServiceRecommendationProjectedMetricsRequest
 */
const se_GetECSServiceRecommendationProjectedMetricsRequest = (
  input: GetECSServiceRecommendationProjectedMetricsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    endTime: (_) => Math.round(_.getTime() / 1000),
    period: [],
    serviceArn: [],
    startTime: (_) => Math.round(_.getTime() / 1000),
    stat: [],
  });
};

// se_GetECSServiceRecommendationsRequest omitted.

// se_GetEffectiveRecommendationPreferencesRequest omitted.

// se_GetEnrollmentStatusesForOrganizationRequest omitted.

// se_GetEnrollmentStatusRequest omitted.

// se_GetLambdaFunctionRecommendationsRequest omitted.

// se_GetRecommendationPreferencesRequest omitted.

// se_GetRecommendationSummariesRequest omitted.

// se_InstanceArns omitted.

// se_JobFilter omitted.

// se_JobFilters omitted.

// se_JobIds omitted.

// se_LambdaFunctionRecommendationFilter omitted.

// se_LambdaFunctionRecommendationFilters omitted.

// se_PutRecommendationPreferencesRequest omitted.

// se_RecommendationPreferenceNames omitted.

// se_RecommendationPreferences omitted.

// se_S3DestinationConfig omitted.

// se_Scope omitted.

// se_ServiceArns omitted.

// se_UpdateEnrollmentStatusRequest omitted.

// se_VolumeArns omitted.

// de_AccessDeniedException omitted.

/**
 * deserializeAws_json1_0AccountEnrollmentStatus
 */
const de_AccountEnrollmentStatus = (output: any, context: __SerdeContext): AccountEnrollmentStatus => {
  return take(output, {
    accountId: __expectString,
    lastUpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    statusReason: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0AccountEnrollmentStatuses
 */
const de_AccountEnrollmentStatuses = (output: any, context: __SerdeContext): AccountEnrollmentStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AccountEnrollmentStatus(entry, context);
    });
  return retVal;
};

// de_AutoScalingGroupConfiguration omitted.

/**
 * deserializeAws_json1_0AutoScalingGroupRecommendation
 */
const de_AutoScalingGroupRecommendation = (output: any, context: __SerdeContext): AutoScalingGroupRecommendation => {
  return take(output, {
    accountId: __expectString,
    autoScalingGroupArn: __expectString,
    autoScalingGroupName: __expectString,
    currentConfiguration: _json,
    currentPerformanceRisk: __expectString,
    effectiveRecommendationPreferences: _json,
    finding: __expectString,
    inferredWorkloadTypes: _json,
    lastRefreshTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lookBackPeriodInDays: __limitedParseDouble,
    recommendationOptions: (_: any) => de_AutoScalingGroupRecommendationOptions(_, context),
    utilizationMetrics: (_: any) => de_UtilizationMetrics(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0AutoScalingGroupRecommendationOption
 */
const de_AutoScalingGroupRecommendationOption = (
  output: any,
  context: __SerdeContext
): AutoScalingGroupRecommendationOption => {
  return take(output, {
    configuration: _json,
    migrationEffort: __expectString,
    performanceRisk: __limitedParseDouble,
    projectedUtilizationMetrics: (_: any) => de_ProjectedUtilizationMetrics(_, context),
    rank: __expectInt32,
    savingsOpportunity: (_: any) => de_SavingsOpportunity(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0AutoScalingGroupRecommendationOptions
 */
const de_AutoScalingGroupRecommendationOptions = (
  output: any,
  context: __SerdeContext
): AutoScalingGroupRecommendationOption[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AutoScalingGroupRecommendationOption(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0AutoScalingGroupRecommendations
 */
const de_AutoScalingGroupRecommendations = (output: any, context: __SerdeContext): AutoScalingGroupRecommendation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AutoScalingGroupRecommendation(entry, context);
    });
  return retVal;
};

// de_ContainerConfiguration omitted.

// de_ContainerConfigurations omitted.

// de_ContainerRecommendation omitted.

// de_ContainerRecommendations omitted.

// de_CpuVendorArchitectures omitted.

// de_CurrentPerformanceRiskRatings omitted.

// de_DeleteRecommendationPreferencesResponse omitted.

/**
 * deserializeAws_json1_0DescribeRecommendationExportJobsResponse
 */
const de_DescribeRecommendationExportJobsResponse = (
  output: any,
  context: __SerdeContext
): DescribeRecommendationExportJobsResponse => {
  return take(output, {
    nextToken: __expectString,
    recommendationExportJobs: (_: any) => de_RecommendationExportJobs(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0EBSUtilizationMetric
 */
const de_EBSUtilizationMetric = (output: any, context: __SerdeContext): EBSUtilizationMetric => {
  return take(output, {
    name: __expectString,
    statistic: __expectString,
    value: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_0EBSUtilizationMetrics
 */
const de_EBSUtilizationMetrics = (output: any, context: __SerdeContext): EBSUtilizationMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EBSUtilizationMetric(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ECSServiceProjectedMetric
 */
const de_ECSServiceProjectedMetric = (output: any, context: __SerdeContext): ECSServiceProjectedMetric => {
  return take(output, {
    lowerBoundValues: (_: any) => de_MetricValues(_, context),
    name: __expectString,
    timestamps: (_: any) => de_Timestamps(_, context),
    upperBoundValues: (_: any) => de_MetricValues(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0ECSServiceProjectedMetrics
 */
const de_ECSServiceProjectedMetrics = (output: any, context: __SerdeContext): ECSServiceProjectedMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ECSServiceProjectedMetric(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ECSServiceProjectedUtilizationMetric
 */
const de_ECSServiceProjectedUtilizationMetric = (
  output: any,
  context: __SerdeContext
): ECSServiceProjectedUtilizationMetric => {
  return take(output, {
    lowerBoundValue: __limitedParseDouble,
    name: __expectString,
    statistic: __expectString,
    upperBoundValue: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_0ECSServiceProjectedUtilizationMetrics
 */
const de_ECSServiceProjectedUtilizationMetrics = (
  output: any,
  context: __SerdeContext
): ECSServiceProjectedUtilizationMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ECSServiceProjectedUtilizationMetric(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ECSServiceRecommendation
 */
const de_ECSServiceRecommendation = (output: any, context: __SerdeContext): ECSServiceRecommendation => {
  return take(output, {
    accountId: __expectString,
    currentPerformanceRisk: __expectString,
    currentServiceConfiguration: _json,
    finding: __expectString,
    findingReasonCodes: _json,
    lastRefreshTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    launchType: __expectString,
    lookbackPeriodInDays: __limitedParseDouble,
    serviceArn: __expectString,
    serviceRecommendationOptions: (_: any) => de_ECSServiceRecommendationOptions(_, context),
    tags: _json,
    utilizationMetrics: (_: any) => de_ECSServiceUtilizationMetrics(_, context),
  }) as any;
};

// de_ECSServiceRecommendationFindingReasonCodes omitted.

/**
 * deserializeAws_json1_0ECSServiceRecommendationOption
 */
const de_ECSServiceRecommendationOption = (output: any, context: __SerdeContext): ECSServiceRecommendationOption => {
  return take(output, {
    containerRecommendations: _json,
    cpu: __expectInt32,
    memory: __expectInt32,
    projectedUtilizationMetrics: (_: any) => de_ECSServiceProjectedUtilizationMetrics(_, context),
    savingsOpportunity: (_: any) => de_SavingsOpportunity(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0ECSServiceRecommendationOptions
 */
const de_ECSServiceRecommendationOptions = (output: any, context: __SerdeContext): ECSServiceRecommendationOption[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ECSServiceRecommendationOption(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ECSServiceRecommendations
 */
const de_ECSServiceRecommendations = (output: any, context: __SerdeContext): ECSServiceRecommendation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ECSServiceRecommendation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ECSServiceRecommendedOptionProjectedMetric
 */
const de_ECSServiceRecommendedOptionProjectedMetric = (
  output: any,
  context: __SerdeContext
): ECSServiceRecommendedOptionProjectedMetric => {
  return take(output, {
    projectedMetrics: (_: any) => de_ECSServiceProjectedMetrics(_, context),
    recommendedCpuUnits: __expectInt32,
    recommendedMemorySize: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_0ECSServiceRecommendedOptionProjectedMetrics
 */
const de_ECSServiceRecommendedOptionProjectedMetrics = (
  output: any,
  context: __SerdeContext
): ECSServiceRecommendedOptionProjectedMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ECSServiceRecommendedOptionProjectedMetric(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ECSServiceUtilizationMetric
 */
const de_ECSServiceUtilizationMetric = (output: any, context: __SerdeContext): ECSServiceUtilizationMetric => {
  return take(output, {
    name: __expectString,
    statistic: __expectString,
    value: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_0ECSServiceUtilizationMetrics
 */
const de_ECSServiceUtilizationMetrics = (output: any, context: __SerdeContext): ECSServiceUtilizationMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ECSServiceUtilizationMetric(entry, context);
    });
  return retVal;
};

// de_EffectiveRecommendationPreferences omitted.

/**
 * deserializeAws_json1_0EstimatedMonthlySavings
 */
const de_EstimatedMonthlySavings = (output: any, context: __SerdeContext): EstimatedMonthlySavings => {
  return take(output, {
    currency: __expectString,
    value: __limitedParseDouble,
  }) as any;
};

// de_ExportAutoScalingGroupRecommendationsResponse omitted.

// de_ExportDestination omitted.

// de_ExportEBSVolumeRecommendationsResponse omitted.

// de_ExportEC2InstanceRecommendationsResponse omitted.

// de_ExportECSServiceRecommendationsResponse omitted.

// de_ExportLambdaFunctionRecommendationsResponse omitted.

// de_ExternalMetricsPreference omitted.

// de_ExternalMetricStatus omitted.

/**
 * deserializeAws_json1_0GetAutoScalingGroupRecommendationsResponse
 */
const de_GetAutoScalingGroupRecommendationsResponse = (
  output: any,
  context: __SerdeContext
): GetAutoScalingGroupRecommendationsResponse => {
  return take(output, {
    autoScalingGroupRecommendations: (_: any) => de_AutoScalingGroupRecommendations(_, context),
    errors: _json,
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0GetEBSVolumeRecommendationsResponse
 */
const de_GetEBSVolumeRecommendationsResponse = (
  output: any,
  context: __SerdeContext
): GetEBSVolumeRecommendationsResponse => {
  return take(output, {
    errors: _json,
    nextToken: __expectString,
    volumeRecommendations: (_: any) => de_VolumeRecommendations(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0GetEC2InstanceRecommendationsResponse
 */
const de_GetEC2InstanceRecommendationsResponse = (
  output: any,
  context: __SerdeContext
): GetEC2InstanceRecommendationsResponse => {
  return take(output, {
    errors: _json,
    instanceRecommendations: (_: any) => de_InstanceRecommendations(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0GetEC2RecommendationProjectedMetricsResponse
 */
const de_GetEC2RecommendationProjectedMetricsResponse = (
  output: any,
  context: __SerdeContext
): GetEC2RecommendationProjectedMetricsResponse => {
  return take(output, {
    recommendedOptionProjectedMetrics: (_: any) => de_RecommendedOptionProjectedMetrics(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0GetECSServiceRecommendationProjectedMetricsResponse
 */
const de_GetECSServiceRecommendationProjectedMetricsResponse = (
  output: any,
  context: __SerdeContext
): GetECSServiceRecommendationProjectedMetricsResponse => {
  return take(output, {
    recommendedOptionProjectedMetrics: (_: any) => de_ECSServiceRecommendedOptionProjectedMetrics(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0GetECSServiceRecommendationsResponse
 */
const de_GetECSServiceRecommendationsResponse = (
  output: any,
  context: __SerdeContext
): GetECSServiceRecommendationsResponse => {
  return take(output, {
    ecsServiceRecommendations: (_: any) => de_ECSServiceRecommendations(_, context),
    errors: _json,
    nextToken: __expectString,
  }) as any;
};

// de_GetEffectiveRecommendationPreferencesResponse omitted.

/**
 * deserializeAws_json1_0GetEnrollmentStatusesForOrganizationResponse
 */
const de_GetEnrollmentStatusesForOrganizationResponse = (
  output: any,
  context: __SerdeContext
): GetEnrollmentStatusesForOrganizationResponse => {
  return take(output, {
    accountEnrollmentStatuses: (_: any) => de_AccountEnrollmentStatuses(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0GetEnrollmentStatusResponse
 */
const de_GetEnrollmentStatusResponse = (output: any, context: __SerdeContext): GetEnrollmentStatusResponse => {
  return take(output, {
    lastUpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    memberAccountsEnrolled: __expectBoolean,
    numberOfMemberAccountsOptedIn: __expectInt32,
    status: __expectString,
    statusReason: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0GetLambdaFunctionRecommendationsResponse
 */
const de_GetLambdaFunctionRecommendationsResponse = (
  output: any,
  context: __SerdeContext
): GetLambdaFunctionRecommendationsResponse => {
  return take(output, {
    lambdaFunctionRecommendations: (_: any) => de_LambdaFunctionRecommendations(_, context),
    nextToken: __expectString,
  }) as any;
};

// de_GetRecommendationError omitted.

// de_GetRecommendationErrors omitted.

// de_GetRecommendationPreferencesResponse omitted.

/**
 * deserializeAws_json1_0GetRecommendationSummariesResponse
 */
const de_GetRecommendationSummariesResponse = (
  output: any,
  context: __SerdeContext
): GetRecommendationSummariesResponse => {
  return take(output, {
    nextToken: __expectString,
    recommendationSummaries: (_: any) => de_RecommendationSummaries(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0InferredWorkloadSaving
 */
const de_InferredWorkloadSaving = (output: any, context: __SerdeContext): InferredWorkloadSaving => {
  return take(output, {
    estimatedMonthlySavings: (_: any) => de_EstimatedMonthlySavings(_, context),
    inferredWorkloadTypes: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0InferredWorkloadSavings
 */
const de_InferredWorkloadSavings = (output: any, context: __SerdeContext): InferredWorkloadSaving[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InferredWorkloadSaving(entry, context);
    });
  return retVal;
};

// de_InferredWorkloadTypes omitted.

/**
 * deserializeAws_json1_0InstanceRecommendation
 */
const de_InstanceRecommendation = (output: any, context: __SerdeContext): InstanceRecommendation => {
  return take(output, {
    accountId: __expectString,
    currentInstanceType: __expectString,
    currentPerformanceRisk: __expectString,
    effectiveRecommendationPreferences: _json,
    externalMetricStatus: _json,
    finding: __expectString,
    findingReasonCodes: _json,
    inferredWorkloadTypes: _json,
    instanceArn: __expectString,
    instanceName: __expectString,
    instanceState: __expectString,
    lastRefreshTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lookBackPeriodInDays: __limitedParseDouble,
    recommendationOptions: (_: any) => de_RecommendationOptions(_, context),
    recommendationSources: _json,
    tags: _json,
    utilizationMetrics: (_: any) => de_UtilizationMetrics(_, context),
  }) as any;
};

// de_InstanceRecommendationFindingReasonCodes omitted.

/**
 * deserializeAws_json1_0InstanceRecommendationOption
 */
const de_InstanceRecommendationOption = (output: any, context: __SerdeContext): InstanceRecommendationOption => {
  return take(output, {
    instanceType: __expectString,
    migrationEffort: __expectString,
    performanceRisk: __limitedParseDouble,
    platformDifferences: _json,
    projectedUtilizationMetrics: (_: any) => de_ProjectedUtilizationMetrics(_, context),
    rank: __expectInt32,
    savingsOpportunity: (_: any) => de_SavingsOpportunity(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0InstanceRecommendations
 */
const de_InstanceRecommendations = (output: any, context: __SerdeContext): InstanceRecommendation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InstanceRecommendation(entry, context);
    });
  return retVal;
};

// de_InternalServerException omitted.

// de_InvalidParameterValueException omitted.

/**
 * deserializeAws_json1_0LambdaFunctionMemoryProjectedMetric
 */
const de_LambdaFunctionMemoryProjectedMetric = (
  output: any,
  context: __SerdeContext
): LambdaFunctionMemoryProjectedMetric => {
  return take(output, {
    name: __expectString,
    statistic: __expectString,
    value: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_0LambdaFunctionMemoryProjectedMetrics
 */
const de_LambdaFunctionMemoryProjectedMetrics = (
  output: any,
  context: __SerdeContext
): LambdaFunctionMemoryProjectedMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LambdaFunctionMemoryProjectedMetric(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0LambdaFunctionMemoryRecommendationOption
 */
const de_LambdaFunctionMemoryRecommendationOption = (
  output: any,
  context: __SerdeContext
): LambdaFunctionMemoryRecommendationOption => {
  return take(output, {
    memorySize: __expectInt32,
    projectedUtilizationMetrics: (_: any) => de_LambdaFunctionMemoryProjectedMetrics(_, context),
    rank: __expectInt32,
    savingsOpportunity: (_: any) => de_SavingsOpportunity(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0LambdaFunctionMemoryRecommendationOptions
 */
const de_LambdaFunctionMemoryRecommendationOptions = (
  output: any,
  context: __SerdeContext
): LambdaFunctionMemoryRecommendationOption[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LambdaFunctionMemoryRecommendationOption(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0LambdaFunctionRecommendation
 */
const de_LambdaFunctionRecommendation = (output: any, context: __SerdeContext): LambdaFunctionRecommendation => {
  return take(output, {
    accountId: __expectString,
    currentMemorySize: __expectInt32,
    currentPerformanceRisk: __expectString,
    finding: __expectString,
    findingReasonCodes: _json,
    functionArn: __expectString,
    functionVersion: __expectString,
    lastRefreshTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lookbackPeriodInDays: __limitedParseDouble,
    memorySizeRecommendationOptions: (_: any) => de_LambdaFunctionMemoryRecommendationOptions(_, context),
    numberOfInvocations: __expectLong,
    tags: _json,
    utilizationMetrics: (_: any) => de_LambdaFunctionUtilizationMetrics(_, context),
  }) as any;
};

// de_LambdaFunctionRecommendationFindingReasonCodes omitted.

/**
 * deserializeAws_json1_0LambdaFunctionRecommendations
 */
const de_LambdaFunctionRecommendations = (output: any, context: __SerdeContext): LambdaFunctionRecommendation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LambdaFunctionRecommendation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0LambdaFunctionUtilizationMetric
 */
const de_LambdaFunctionUtilizationMetric = (output: any, context: __SerdeContext): LambdaFunctionUtilizationMetric => {
  return take(output, {
    name: __expectString,
    statistic: __expectString,
    value: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_0LambdaFunctionUtilizationMetrics
 */
const de_LambdaFunctionUtilizationMetrics = (
  output: any,
  context: __SerdeContext
): LambdaFunctionUtilizationMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LambdaFunctionUtilizationMetric(entry, context);
    });
  return retVal;
};

// de_LimitExceededException omitted.

// de_MemorySizeConfiguration omitted.

/**
 * deserializeAws_json1_0MetricValues
 */
const de_MetricValues = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __limitedParseDouble(entry) as any;
    });
  return retVal;
};

// de_MissingAuthenticationToken omitted.

// de_OptInRequiredException omitted.

// de_PlatformDifferences omitted.

/**
 * deserializeAws_json1_0ProjectedMetric
 */
const de_ProjectedMetric = (output: any, context: __SerdeContext): ProjectedMetric => {
  return take(output, {
    name: __expectString,
    timestamps: (_: any) => de_Timestamps(_, context),
    values: (_: any) => de_MetricValues(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0ProjectedMetrics
 */
const de_ProjectedMetrics = (output: any, context: __SerdeContext): ProjectedMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProjectedMetric(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ProjectedUtilizationMetrics
 */
const de_ProjectedUtilizationMetrics = (output: any, context: __SerdeContext): UtilizationMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UtilizationMetric(entry, context);
    });
  return retVal;
};

// de_PutRecommendationPreferencesResponse omitted.

/**
 * deserializeAws_json1_0ReasonCodeSummaries
 */
const de_ReasonCodeSummaries = (output: any, context: __SerdeContext): ReasonCodeSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReasonCodeSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ReasonCodeSummary
 */
const de_ReasonCodeSummary = (output: any, context: __SerdeContext): ReasonCodeSummary => {
  return take(output, {
    name: __expectString,
    value: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_0RecommendationExportJob
 */
const de_RecommendationExportJob = (output: any, context: __SerdeContext): RecommendationExportJob => {
  return take(output, {
    creationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    destination: _json,
    failureReason: __expectString,
    jobId: __expectString,
    lastUpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    resourceType: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0RecommendationExportJobs
 */
const de_RecommendationExportJobs = (output: any, context: __SerdeContext): RecommendationExportJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RecommendationExportJob(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0RecommendationOptions
 */
const de_RecommendationOptions = (output: any, context: __SerdeContext): InstanceRecommendationOption[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InstanceRecommendationOption(entry, context);
    });
  return retVal;
};

// de_RecommendationPreferencesDetail omitted.

// de_RecommendationPreferencesDetails omitted.

// de_RecommendationSource omitted.

// de_RecommendationSources omitted.

/**
 * deserializeAws_json1_0RecommendationSummaries
 */
const de_RecommendationSummaries = (output: any, context: __SerdeContext): RecommendationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RecommendationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0RecommendationSummary
 */
const de_RecommendationSummary = (output: any, context: __SerdeContext): RecommendationSummary => {
  return take(output, {
    accountId: __expectString,
    currentPerformanceRiskRatings: _json,
    inferredWorkloadSavings: (_: any) => de_InferredWorkloadSavings(_, context),
    recommendationResourceType: __expectString,
    savingsOpportunity: (_: any) => de_SavingsOpportunity(_, context),
    summaries: (_: any) => de_Summaries(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0RecommendedOptionProjectedMetric
 */
const de_RecommendedOptionProjectedMetric = (
  output: any,
  context: __SerdeContext
): RecommendedOptionProjectedMetric => {
  return take(output, {
    projectedMetrics: (_: any) => de_ProjectedMetrics(_, context),
    rank: __expectInt32,
    recommendedInstanceType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0RecommendedOptionProjectedMetrics
 */
const de_RecommendedOptionProjectedMetrics = (
  output: any,
  context: __SerdeContext
): RecommendedOptionProjectedMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RecommendedOptionProjectedMetric(entry, context);
    });
  return retVal;
};

// de_ResourceNotFoundException omitted.

// de_S3Destination omitted.

/**
 * deserializeAws_json1_0SavingsOpportunity
 */
const de_SavingsOpportunity = (output: any, context: __SerdeContext): SavingsOpportunity => {
  return take(output, {
    estimatedMonthlySavings: (_: any) => de_EstimatedMonthlySavings(_, context),
    savingsOpportunityPercentage: __limitedParseDouble,
  }) as any;
};

// de_Scope omitted.

// de_ServiceConfiguration omitted.

// de_ServiceUnavailableException omitted.

/**
 * deserializeAws_json1_0Summaries
 */
const de_Summaries = (output: any, context: __SerdeContext): Summary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Summary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0Summary
 */
const de_Summary = (output: any, context: __SerdeContext): Summary => {
  return take(output, {
    name: __expectString,
    reasonCodeSummaries: (_: any) => de_ReasonCodeSummaries(_, context),
    value: __limitedParseDouble,
  }) as any;
};

// de_Tag omitted.

// de_Tags omitted.

// de_ThrottlingException omitted.

/**
 * deserializeAws_json1_0Timestamps
 */
const de_Timestamps = (output: any, context: __SerdeContext): Date[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectNonNull(__parseEpochTimestamp(__expectNumber(entry)));
    });
  return retVal;
};

// de_UpdateEnrollmentStatusResponse omitted.

/**
 * deserializeAws_json1_0UtilizationMetric
 */
const de_UtilizationMetric = (output: any, context: __SerdeContext): UtilizationMetric => {
  return take(output, {
    name: __expectString,
    statistic: __expectString,
    value: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_0UtilizationMetrics
 */
const de_UtilizationMetrics = (output: any, context: __SerdeContext): UtilizationMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UtilizationMetric(entry, context);
    });
  return retVal;
};

// de_VolumeConfiguration omitted.

/**
 * deserializeAws_json1_0VolumeRecommendation
 */
const de_VolumeRecommendation = (output: any, context: __SerdeContext): VolumeRecommendation => {
  return take(output, {
    accountId: __expectString,
    currentConfiguration: _json,
    currentPerformanceRisk: __expectString,
    finding: __expectString,
    lastRefreshTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lookBackPeriodInDays: __limitedParseDouble,
    tags: _json,
    utilizationMetrics: (_: any) => de_EBSUtilizationMetrics(_, context),
    volumeArn: __expectString,
    volumeRecommendationOptions: (_: any) => de_VolumeRecommendationOptions(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0VolumeRecommendationOption
 */
const de_VolumeRecommendationOption = (output: any, context: __SerdeContext): VolumeRecommendationOption => {
  return take(output, {
    configuration: _json,
    performanceRisk: __limitedParseDouble,
    rank: __expectInt32,
    savingsOpportunity: (_: any) => de_SavingsOpportunity(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0VolumeRecommendationOptions
 */
const de_VolumeRecommendationOptions = (output: any, context: __SerdeContext): VolumeRecommendationOption[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_VolumeRecommendationOption(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0VolumeRecommendations
 */
const de_VolumeRecommendations = (output: any, context: __SerdeContext): VolumeRecommendation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_VolumeRecommendation(entry, context);
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
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": `ComputeOptimizerService.${operation}`,
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
