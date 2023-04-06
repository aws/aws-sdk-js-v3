// smithy-typescript generated code
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
  throwDefaultError,
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
  AutoScalingGroupConfiguration,
  AutoScalingGroupRecommendation,
  AutoScalingGroupRecommendationOption,
  ContainerConfiguration,
  ContainerRecommendation,
  CpuVendorArchitecture,
  CurrentPerformanceRiskRatings,
  DeleteRecommendationPreferencesRequest,
  DeleteRecommendationPreferencesResponse,
  DescribeRecommendationExportJobsRequest,
  DescribeRecommendationExportJobsResponse,
  EBSFilter,
  EBSUtilizationMetric,
  ECSServiceProjectedMetric,
  ECSServiceProjectedUtilizationMetric,
  ECSServiceRecommendation,
  ECSServiceRecommendationFilter,
  ECSServiceRecommendationFindingReasonCode,
  ECSServiceRecommendationOption,
  ECSServiceRecommendedOptionProjectedMetric,
  ECSServiceUtilizationMetric,
  EffectiveRecommendationPreferences,
  EnrollmentFilter,
  EstimatedMonthlySavings,
  ExportableAutoScalingGroupField,
  ExportableECSServiceField,
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
  ExportECSServiceRecommendationsRequest,
  ExportECSServiceRecommendationsResponse,
  ExportLambdaFunctionRecommendationsRequest,
  ExportLambdaFunctionRecommendationsResponse,
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
  MemorySizeConfiguration,
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
  ServiceConfiguration,
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

/**
 * serializeAws_json1_0DeleteRecommendationPreferencesCommand
 */
export const se_DeleteRecommendationPreferencesCommand = async (
  input: DeleteRecommendationPreferencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ComputeOptimizerService.DeleteRecommendationPreferences",
  };
  let body: any;
  body = JSON.stringify(se_DeleteRecommendationPreferencesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeRecommendationExportJobsCommand
 */
export const se_DescribeRecommendationExportJobsCommand = async (
  input: DescribeRecommendationExportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ComputeOptimizerService.DescribeRecommendationExportJobs",
  };
  let body: any;
  body = JSON.stringify(se_DescribeRecommendationExportJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ExportAutoScalingGroupRecommendationsCommand
 */
export const se_ExportAutoScalingGroupRecommendationsCommand = async (
  input: ExportAutoScalingGroupRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ComputeOptimizerService.ExportAutoScalingGroupRecommendations",
  };
  let body: any;
  body = JSON.stringify(se_ExportAutoScalingGroupRecommendationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ExportEBSVolumeRecommendationsCommand
 */
export const se_ExportEBSVolumeRecommendationsCommand = async (
  input: ExportEBSVolumeRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ComputeOptimizerService.ExportEBSVolumeRecommendations",
  };
  let body: any;
  body = JSON.stringify(se_ExportEBSVolumeRecommendationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ExportEC2InstanceRecommendationsCommand
 */
export const se_ExportEC2InstanceRecommendationsCommand = async (
  input: ExportEC2InstanceRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ComputeOptimizerService.ExportEC2InstanceRecommendations",
  };
  let body: any;
  body = JSON.stringify(se_ExportEC2InstanceRecommendationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ExportECSServiceRecommendationsCommand
 */
export const se_ExportECSServiceRecommendationsCommand = async (
  input: ExportECSServiceRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ComputeOptimizerService.ExportECSServiceRecommendations",
  };
  let body: any;
  body = JSON.stringify(se_ExportECSServiceRecommendationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ExportLambdaFunctionRecommendationsCommand
 */
export const se_ExportLambdaFunctionRecommendationsCommand = async (
  input: ExportLambdaFunctionRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ComputeOptimizerService.ExportLambdaFunctionRecommendations",
  };
  let body: any;
  body = JSON.stringify(se_ExportLambdaFunctionRecommendationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetAutoScalingGroupRecommendationsCommand
 */
export const se_GetAutoScalingGroupRecommendationsCommand = async (
  input: GetAutoScalingGroupRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ComputeOptimizerService.GetAutoScalingGroupRecommendations",
  };
  let body: any;
  body = JSON.stringify(se_GetAutoScalingGroupRecommendationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetEBSVolumeRecommendationsCommand
 */
export const se_GetEBSVolumeRecommendationsCommand = async (
  input: GetEBSVolumeRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ComputeOptimizerService.GetEBSVolumeRecommendations",
  };
  let body: any;
  body = JSON.stringify(se_GetEBSVolumeRecommendationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetEC2InstanceRecommendationsCommand
 */
export const se_GetEC2InstanceRecommendationsCommand = async (
  input: GetEC2InstanceRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ComputeOptimizerService.GetEC2InstanceRecommendations",
  };
  let body: any;
  body = JSON.stringify(se_GetEC2InstanceRecommendationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetEC2RecommendationProjectedMetricsCommand
 */
export const se_GetEC2RecommendationProjectedMetricsCommand = async (
  input: GetEC2RecommendationProjectedMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ComputeOptimizerService.GetEC2RecommendationProjectedMetrics",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ComputeOptimizerService.GetECSServiceRecommendationProjectedMetrics",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ComputeOptimizerService.GetECSServiceRecommendations",
  };
  let body: any;
  body = JSON.stringify(se_GetECSServiceRecommendationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetEffectiveRecommendationPreferencesCommand
 */
export const se_GetEffectiveRecommendationPreferencesCommand = async (
  input: GetEffectiveRecommendationPreferencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ComputeOptimizerService.GetEffectiveRecommendationPreferences",
  };
  let body: any;
  body = JSON.stringify(se_GetEffectiveRecommendationPreferencesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetEnrollmentStatusCommand
 */
export const se_GetEnrollmentStatusCommand = async (
  input: GetEnrollmentStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ComputeOptimizerService.GetEnrollmentStatus",
  };
  let body: any;
  body = JSON.stringify(se_GetEnrollmentStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetEnrollmentStatusesForOrganizationCommand
 */
export const se_GetEnrollmentStatusesForOrganizationCommand = async (
  input: GetEnrollmentStatusesForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ComputeOptimizerService.GetEnrollmentStatusesForOrganization",
  };
  let body: any;
  body = JSON.stringify(se_GetEnrollmentStatusesForOrganizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetLambdaFunctionRecommendationsCommand
 */
export const se_GetLambdaFunctionRecommendationsCommand = async (
  input: GetLambdaFunctionRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ComputeOptimizerService.GetLambdaFunctionRecommendations",
  };
  let body: any;
  body = JSON.stringify(se_GetLambdaFunctionRecommendationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetRecommendationPreferencesCommand
 */
export const se_GetRecommendationPreferencesCommand = async (
  input: GetRecommendationPreferencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ComputeOptimizerService.GetRecommendationPreferences",
  };
  let body: any;
  body = JSON.stringify(se_GetRecommendationPreferencesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetRecommendationSummariesCommand
 */
export const se_GetRecommendationSummariesCommand = async (
  input: GetRecommendationSummariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ComputeOptimizerService.GetRecommendationSummaries",
  };
  let body: any;
  body = JSON.stringify(se_GetRecommendationSummariesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0PutRecommendationPreferencesCommand
 */
export const se_PutRecommendationPreferencesCommand = async (
  input: PutRecommendationPreferencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ComputeOptimizerService.PutRecommendationPreferences",
  };
  let body: any;
  body = JSON.stringify(se_PutRecommendationPreferencesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateEnrollmentStatusCommand
 */
export const se_UpdateEnrollmentStatusCommand = async (
  input: UpdateEnrollmentStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "ComputeOptimizerService.UpdateEnrollmentStatus",
  };
  let body: any;
  body = JSON.stringify(se_UpdateEnrollmentStatusRequest(input, context));
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
  contents = de_DeleteRecommendationPreferencesResponse(data, context);
  const response: DeleteRecommendationPreferencesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ExportAutoScalingGroupRecommendationsResponse(data, context);
  const response: ExportAutoScalingGroupRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ExportEBSVolumeRecommendationsResponse(data, context);
  const response: ExportEBSVolumeRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ExportEC2InstanceRecommendationsResponse(data, context);
  const response: ExportEC2InstanceRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ExportECSServiceRecommendationsResponse(data, context);
  const response: ExportECSServiceRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ExportLambdaFunctionRecommendationsResponse(data, context);
  const response: ExportLambdaFunctionRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetEffectiveRecommendationPreferencesResponse(data, context);
  const response: GetEffectiveRecommendationPreferencesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetRecommendationPreferencesResponse(data, context);
  const response: GetRecommendationPreferencesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_PutRecommendationPreferencesResponse(data, context);
  const response: PutRecommendationPreferencesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UpdateEnrollmentStatusResponse(data, context);
  const response: UpdateEnrollmentStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  const deserialized: any = de_AccessDeniedException(body, context);
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
  const deserialized: any = de_InternalServerException(body, context);
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
  const deserialized: any = de_InvalidParameterValueException(body, context);
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
  const deserialized: any = de_LimitExceededException(body, context);
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
  const deserialized: any = de_MissingAuthenticationToken(body, context);
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
  const deserialized: any = de_OptInRequiredException(body, context);
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
  const deserialized: any = de_ResourceNotFoundException(body, context);
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
  const deserialized: any = de_ServiceUnavailableException(body, context);
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
  const deserialized: any = de_ThrottlingException(body, context);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_0AccountIds
 */
const se_AccountIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0AutoScalingGroupArns
 */
const se_AutoScalingGroupArns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0CpuVendorArchitectures
 */
const se_CpuVendorArchitectures = (input: (CpuVendorArchitecture | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0DeleteRecommendationPreferencesRequest
 */
const se_DeleteRecommendationPreferencesRequest = (
  input: DeleteRecommendationPreferencesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.recommendationPreferenceNames != null && {
      recommendationPreferenceNames: se_RecommendationPreferenceNames(input.recommendationPreferenceNames, context),
    }),
    ...(input.resourceType != null && { resourceType: input.resourceType }),
    ...(input.scope != null && { scope: se_Scope(input.scope, context) }),
  };
};

/**
 * serializeAws_json1_0DescribeRecommendationExportJobsRequest
 */
const se_DescribeRecommendationExportJobsRequest = (
  input: DescribeRecommendationExportJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.filters != null && { filters: se_JobFilters(input.filters, context) }),
    ...(input.jobIds != null && { jobIds: se_JobIds(input.jobIds, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_0EBSFilter
 */
const se_EBSFilter = (input: EBSFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.values != null && { values: se_FilterValues(input.values, context) }),
  };
};

/**
 * serializeAws_json1_0EBSFilters
 */
const se_EBSFilters = (input: EBSFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EBSFilter(entry, context);
    });
};

/**
 * serializeAws_json1_0ECSServiceRecommendationFilter
 */
const se_ECSServiceRecommendationFilter = (input: ECSServiceRecommendationFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.values != null && { values: se_FilterValues(input.values, context) }),
  };
};

/**
 * serializeAws_json1_0ECSServiceRecommendationFilters
 */
const se_ECSServiceRecommendationFilters = (input: ECSServiceRecommendationFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ECSServiceRecommendationFilter(entry, context);
    });
};

/**
 * serializeAws_json1_0EnrollmentFilter
 */
const se_EnrollmentFilter = (input: EnrollmentFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.values != null && { values: se_FilterValues(input.values, context) }),
  };
};

/**
 * serializeAws_json1_0EnrollmentFilters
 */
const se_EnrollmentFilters = (input: EnrollmentFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EnrollmentFilter(entry, context);
    });
};

/**
 * serializeAws_json1_0ExportableAutoScalingGroupFields
 */
const se_ExportableAutoScalingGroupFields = (
  input: (ExportableAutoScalingGroupField | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0ExportableECSServiceFields
 */
const se_ExportableECSServiceFields = (input: (ExportableECSServiceField | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0ExportableInstanceFields
 */
const se_ExportableInstanceFields = (input: (ExportableInstanceField | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0ExportableLambdaFunctionFields
 */
const se_ExportableLambdaFunctionFields = (
  input: (ExportableLambdaFunctionField | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0ExportableVolumeFields
 */
const se_ExportableVolumeFields = (input: (ExportableVolumeField | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0ExportAutoScalingGroupRecommendationsRequest
 */
const se_ExportAutoScalingGroupRecommendationsRequest = (
  input: ExportAutoScalingGroupRecommendationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.accountIds != null && { accountIds: se_AccountIds(input.accountIds, context) }),
    ...(input.fieldsToExport != null && {
      fieldsToExport: se_ExportableAutoScalingGroupFields(input.fieldsToExport, context),
    }),
    ...(input.fileFormat != null && { fileFormat: input.fileFormat }),
    ...(input.filters != null && { filters: se_Filters(input.filters, context) }),
    ...(input.includeMemberAccounts != null && { includeMemberAccounts: input.includeMemberAccounts }),
    ...(input.recommendationPreferences != null && {
      recommendationPreferences: se_RecommendationPreferences(input.recommendationPreferences, context),
    }),
    ...(input.s3DestinationConfig != null && {
      s3DestinationConfig: se_S3DestinationConfig(input.s3DestinationConfig, context),
    }),
  };
};

/**
 * serializeAws_json1_0ExportEBSVolumeRecommendationsRequest
 */
const se_ExportEBSVolumeRecommendationsRequest = (
  input: ExportEBSVolumeRecommendationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.accountIds != null && { accountIds: se_AccountIds(input.accountIds, context) }),
    ...(input.fieldsToExport != null && { fieldsToExport: se_ExportableVolumeFields(input.fieldsToExport, context) }),
    ...(input.fileFormat != null && { fileFormat: input.fileFormat }),
    ...(input.filters != null && { filters: se_EBSFilters(input.filters, context) }),
    ...(input.includeMemberAccounts != null && { includeMemberAccounts: input.includeMemberAccounts }),
    ...(input.s3DestinationConfig != null && {
      s3DestinationConfig: se_S3DestinationConfig(input.s3DestinationConfig, context),
    }),
  };
};

/**
 * serializeAws_json1_0ExportEC2InstanceRecommendationsRequest
 */
const se_ExportEC2InstanceRecommendationsRequest = (
  input: ExportEC2InstanceRecommendationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.accountIds != null && { accountIds: se_AccountIds(input.accountIds, context) }),
    ...(input.fieldsToExport != null && { fieldsToExport: se_ExportableInstanceFields(input.fieldsToExport, context) }),
    ...(input.fileFormat != null && { fileFormat: input.fileFormat }),
    ...(input.filters != null && { filters: se_Filters(input.filters, context) }),
    ...(input.includeMemberAccounts != null && { includeMemberAccounts: input.includeMemberAccounts }),
    ...(input.recommendationPreferences != null && {
      recommendationPreferences: se_RecommendationPreferences(input.recommendationPreferences, context),
    }),
    ...(input.s3DestinationConfig != null && {
      s3DestinationConfig: se_S3DestinationConfig(input.s3DestinationConfig, context),
    }),
  };
};

/**
 * serializeAws_json1_0ExportECSServiceRecommendationsRequest
 */
const se_ExportECSServiceRecommendationsRequest = (
  input: ExportECSServiceRecommendationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.accountIds != null && { accountIds: se_AccountIds(input.accountIds, context) }),
    ...(input.fieldsToExport != null && {
      fieldsToExport: se_ExportableECSServiceFields(input.fieldsToExport, context),
    }),
    ...(input.fileFormat != null && { fileFormat: input.fileFormat }),
    ...(input.filters != null && { filters: se_ECSServiceRecommendationFilters(input.filters, context) }),
    ...(input.includeMemberAccounts != null && { includeMemberAccounts: input.includeMemberAccounts }),
    ...(input.s3DestinationConfig != null && {
      s3DestinationConfig: se_S3DestinationConfig(input.s3DestinationConfig, context),
    }),
  };
};

/**
 * serializeAws_json1_0ExportLambdaFunctionRecommendationsRequest
 */
const se_ExportLambdaFunctionRecommendationsRequest = (
  input: ExportLambdaFunctionRecommendationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.accountIds != null && { accountIds: se_AccountIds(input.accountIds, context) }),
    ...(input.fieldsToExport != null && {
      fieldsToExport: se_ExportableLambdaFunctionFields(input.fieldsToExport, context),
    }),
    ...(input.fileFormat != null && { fileFormat: input.fileFormat }),
    ...(input.filters != null && { filters: se_LambdaFunctionRecommendationFilters(input.filters, context) }),
    ...(input.includeMemberAccounts != null && { includeMemberAccounts: input.includeMemberAccounts }),
    ...(input.s3DestinationConfig != null && {
      s3DestinationConfig: se_S3DestinationConfig(input.s3DestinationConfig, context),
    }),
  };
};

/**
 * serializeAws_json1_0ExternalMetricsPreference
 */
const se_ExternalMetricsPreference = (input: ExternalMetricsPreference, context: __SerdeContext): any => {
  return {
    ...(input.source != null && { source: input.source }),
  };
};

/**
 * serializeAws_json1_0Filter
 */
const se_Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.values != null && { values: se_FilterValues(input.values, context) }),
  };
};

/**
 * serializeAws_json1_0Filters
 */
const se_Filters = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Filter(entry, context);
    });
};

/**
 * serializeAws_json1_0FilterValues
 */
const se_FilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0FunctionArns
 */
const se_FunctionArns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0GetAutoScalingGroupRecommendationsRequest
 */
const se_GetAutoScalingGroupRecommendationsRequest = (
  input: GetAutoScalingGroupRecommendationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.accountIds != null && { accountIds: se_AccountIds(input.accountIds, context) }),
    ...(input.autoScalingGroupArns != null && {
      autoScalingGroupArns: se_AutoScalingGroupArns(input.autoScalingGroupArns, context),
    }),
    ...(input.filters != null && { filters: se_Filters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.recommendationPreferences != null && {
      recommendationPreferences: se_RecommendationPreferences(input.recommendationPreferences, context),
    }),
  };
};

/**
 * serializeAws_json1_0GetEBSVolumeRecommendationsRequest
 */
const se_GetEBSVolumeRecommendationsRequest = (
  input: GetEBSVolumeRecommendationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.accountIds != null && { accountIds: se_AccountIds(input.accountIds, context) }),
    ...(input.filters != null && { filters: se_EBSFilters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.volumeArns != null && { volumeArns: se_VolumeArns(input.volumeArns, context) }),
  };
};

/**
 * serializeAws_json1_0GetEC2InstanceRecommendationsRequest
 */
const se_GetEC2InstanceRecommendationsRequest = (
  input: GetEC2InstanceRecommendationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.accountIds != null && { accountIds: se_AccountIds(input.accountIds, context) }),
    ...(input.filters != null && { filters: se_Filters(input.filters, context) }),
    ...(input.instanceArns != null && { instanceArns: se_InstanceArns(input.instanceArns, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.recommendationPreferences != null && {
      recommendationPreferences: se_RecommendationPreferences(input.recommendationPreferences, context),
    }),
  };
};

/**
 * serializeAws_json1_0GetEC2RecommendationProjectedMetricsRequest
 */
const se_GetEC2RecommendationProjectedMetricsRequest = (
  input: GetEC2RecommendationProjectedMetricsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.endTime != null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.instanceArn != null && { instanceArn: input.instanceArn }),
    ...(input.period != null && { period: input.period }),
    ...(input.recommendationPreferences != null && {
      recommendationPreferences: se_RecommendationPreferences(input.recommendationPreferences, context),
    }),
    ...(input.startTime != null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
    ...(input.stat != null && { stat: input.stat }),
  };
};

/**
 * serializeAws_json1_0GetECSServiceRecommendationProjectedMetricsRequest
 */
const se_GetECSServiceRecommendationProjectedMetricsRequest = (
  input: GetECSServiceRecommendationProjectedMetricsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.endTime != null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.period != null && { period: input.period }),
    ...(input.serviceArn != null && { serviceArn: input.serviceArn }),
    ...(input.startTime != null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
    ...(input.stat != null && { stat: input.stat }),
  };
};

/**
 * serializeAws_json1_0GetECSServiceRecommendationsRequest
 */
const se_GetECSServiceRecommendationsRequest = (
  input: GetECSServiceRecommendationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.accountIds != null && { accountIds: se_AccountIds(input.accountIds, context) }),
    ...(input.filters != null && { filters: se_ECSServiceRecommendationFilters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.serviceArns != null && { serviceArns: se_ServiceArns(input.serviceArns, context) }),
  };
};

/**
 * serializeAws_json1_0GetEffectiveRecommendationPreferencesRequest
 */
const se_GetEffectiveRecommendationPreferencesRequest = (
  input: GetEffectiveRecommendationPreferencesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  };
};

/**
 * serializeAws_json1_0GetEnrollmentStatusesForOrganizationRequest
 */
const se_GetEnrollmentStatusesForOrganizationRequest = (
  input: GetEnrollmentStatusesForOrganizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.filters != null && { filters: se_EnrollmentFilters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_0GetEnrollmentStatusRequest
 */
const se_GetEnrollmentStatusRequest = (input: GetEnrollmentStatusRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_0GetLambdaFunctionRecommendationsRequest
 */
const se_GetLambdaFunctionRecommendationsRequest = (
  input: GetLambdaFunctionRecommendationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.accountIds != null && { accountIds: se_AccountIds(input.accountIds, context) }),
    ...(input.filters != null && { filters: se_LambdaFunctionRecommendationFilters(input.filters, context) }),
    ...(input.functionArns != null && { functionArns: se_FunctionArns(input.functionArns, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_0GetRecommendationPreferencesRequest
 */
const se_GetRecommendationPreferencesRequest = (
  input: GetRecommendationPreferencesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.resourceType != null && { resourceType: input.resourceType }),
    ...(input.scope != null && { scope: se_Scope(input.scope, context) }),
  };
};

/**
 * serializeAws_json1_0GetRecommendationSummariesRequest
 */
const se_GetRecommendationSummariesRequest = (
  input: GetRecommendationSummariesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.accountIds != null && { accountIds: se_AccountIds(input.accountIds, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_0InstanceArns
 */
const se_InstanceArns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0JobFilter
 */
const se_JobFilter = (input: JobFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.values != null && { values: se_FilterValues(input.values, context) }),
  };
};

/**
 * serializeAws_json1_0JobFilters
 */
const se_JobFilters = (input: JobFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_JobFilter(entry, context);
    });
};

/**
 * serializeAws_json1_0JobIds
 */
const se_JobIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0LambdaFunctionRecommendationFilter
 */
const se_LambdaFunctionRecommendationFilter = (
  input: LambdaFunctionRecommendationFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.values != null && { values: se_FilterValues(input.values, context) }),
  };
};

/**
 * serializeAws_json1_0LambdaFunctionRecommendationFilters
 */
const se_LambdaFunctionRecommendationFilters = (
  input: LambdaFunctionRecommendationFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_LambdaFunctionRecommendationFilter(entry, context);
    });
};

/**
 * serializeAws_json1_0PutRecommendationPreferencesRequest
 */
const se_PutRecommendationPreferencesRequest = (
  input: PutRecommendationPreferencesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.enhancedInfrastructureMetrics != null && {
      enhancedInfrastructureMetrics: input.enhancedInfrastructureMetrics,
    }),
    ...(input.externalMetricsPreference != null && {
      externalMetricsPreference: se_ExternalMetricsPreference(input.externalMetricsPreference, context),
    }),
    ...(input.inferredWorkloadTypes != null && { inferredWorkloadTypes: input.inferredWorkloadTypes }),
    ...(input.resourceType != null && { resourceType: input.resourceType }),
    ...(input.scope != null && { scope: se_Scope(input.scope, context) }),
  };
};

/**
 * serializeAws_json1_0RecommendationPreferenceNames
 */
const se_RecommendationPreferenceNames = (
  input: (RecommendationPreferenceName | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0RecommendationPreferences
 */
const se_RecommendationPreferences = (input: RecommendationPreferences, context: __SerdeContext): any => {
  return {
    ...(input.cpuVendorArchitectures != null && {
      cpuVendorArchitectures: se_CpuVendorArchitectures(input.cpuVendorArchitectures, context),
    }),
  };
};

/**
 * serializeAws_json1_0S3DestinationConfig
 */
const se_S3DestinationConfig = (input: S3DestinationConfig, context: __SerdeContext): any => {
  return {
    ...(input.bucket != null && { bucket: input.bucket }),
    ...(input.keyPrefix != null && { keyPrefix: input.keyPrefix }),
  };
};

/**
 * serializeAws_json1_0Scope
 */
const se_Scope = (input: Scope, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_json1_0ServiceArns
 */
const se_ServiceArns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0UpdateEnrollmentStatusRequest
 */
const se_UpdateEnrollmentStatusRequest = (input: UpdateEnrollmentStatusRequest, context: __SerdeContext): any => {
  return {
    ...(input.includeMemberAccounts != null && { includeMemberAccounts: input.includeMemberAccounts }),
    ...(input.status != null && { status: input.status }),
  };
};

/**
 * serializeAws_json1_0VolumeArns
 */
const se_VolumeArns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * deserializeAws_json1_0AccessDeniedException
 */
const de_AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0AccountEnrollmentStatus
 */
const de_AccountEnrollmentStatus = (output: any, context: __SerdeContext): AccountEnrollmentStatus => {
  return {
    accountId: __expectString(output.accountId),
    lastUpdatedTimestamp:
      output.lastUpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedTimestamp)))
        : undefined,
    status: __expectString(output.status),
    statusReason: __expectString(output.statusReason),
  } as any;
};

/**
 * deserializeAws_json1_0AccountEnrollmentStatuses
 */
const de_AccountEnrollmentStatuses = (output: any, context: __SerdeContext): AccountEnrollmentStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AccountEnrollmentStatus(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0AutoScalingGroupConfiguration
 */
const de_AutoScalingGroupConfiguration = (output: any, context: __SerdeContext): AutoScalingGroupConfiguration => {
  return {
    desiredCapacity: __expectInt32(output.desiredCapacity),
    instanceType: __expectString(output.instanceType),
    maxSize: __expectInt32(output.maxSize),
    minSize: __expectInt32(output.minSize),
  } as any;
};

/**
 * deserializeAws_json1_0AutoScalingGroupRecommendation
 */
const de_AutoScalingGroupRecommendation = (output: any, context: __SerdeContext): AutoScalingGroupRecommendation => {
  return {
    accountId: __expectString(output.accountId),
    autoScalingGroupArn: __expectString(output.autoScalingGroupArn),
    autoScalingGroupName: __expectString(output.autoScalingGroupName),
    currentConfiguration:
      output.currentConfiguration != null
        ? de_AutoScalingGroupConfiguration(output.currentConfiguration, context)
        : undefined,
    currentPerformanceRisk: __expectString(output.currentPerformanceRisk),
    effectiveRecommendationPreferences:
      output.effectiveRecommendationPreferences != null
        ? de_EffectiveRecommendationPreferences(output.effectiveRecommendationPreferences, context)
        : undefined,
    finding: __expectString(output.finding),
    inferredWorkloadTypes:
      output.inferredWorkloadTypes != null
        ? de_InferredWorkloadTypes(output.inferredWorkloadTypes, context)
        : undefined,
    lastRefreshTimestamp:
      output.lastRefreshTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastRefreshTimestamp)))
        : undefined,
    lookBackPeriodInDays: __limitedParseDouble(output.lookBackPeriodInDays),
    recommendationOptions:
      output.recommendationOptions != null
        ? de_AutoScalingGroupRecommendationOptions(output.recommendationOptions, context)
        : undefined,
    utilizationMetrics:
      output.utilizationMetrics != null ? de_UtilizationMetrics(output.utilizationMetrics, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0AutoScalingGroupRecommendationOption
 */
const de_AutoScalingGroupRecommendationOption = (
  output: any,
  context: __SerdeContext
): AutoScalingGroupRecommendationOption => {
  return {
    configuration:
      output.configuration != null ? de_AutoScalingGroupConfiguration(output.configuration, context) : undefined,
    migrationEffort: __expectString(output.migrationEffort),
    performanceRisk: __limitedParseDouble(output.performanceRisk),
    projectedUtilizationMetrics:
      output.projectedUtilizationMetrics != null
        ? de_ProjectedUtilizationMetrics(output.projectedUtilizationMetrics, context)
        : undefined,
    rank: __expectInt32(output.rank),
    savingsOpportunity:
      output.savingsOpportunity != null ? de_SavingsOpportunity(output.savingsOpportunity, context) : undefined,
  } as any;
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
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
      return de_AutoScalingGroupRecommendation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ContainerConfiguration
 */
const de_ContainerConfiguration = (output: any, context: __SerdeContext): ContainerConfiguration => {
  return {
    containerName: __expectString(output.containerName),
    cpu: __expectInt32(output.cpu),
    memorySizeConfiguration:
      output.memorySizeConfiguration != null
        ? de_MemorySizeConfiguration(output.memorySizeConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ContainerConfigurations
 */
const de_ContainerConfigurations = (output: any, context: __SerdeContext): ContainerConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ContainerConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ContainerRecommendation
 */
const de_ContainerRecommendation = (output: any, context: __SerdeContext): ContainerRecommendation => {
  return {
    containerName: __expectString(output.containerName),
    cpu: __expectInt32(output.cpu),
    memorySizeConfiguration:
      output.memorySizeConfiguration != null
        ? de_MemorySizeConfiguration(output.memorySizeConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ContainerRecommendations
 */
const de_ContainerRecommendations = (output: any, context: __SerdeContext): ContainerRecommendation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ContainerRecommendation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0CpuVendorArchitectures
 */
const de_CpuVendorArchitectures = (output: any, context: __SerdeContext): (CpuVendorArchitecture | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_0CurrentPerformanceRiskRatings
 */
const de_CurrentPerformanceRiskRatings = (output: any, context: __SerdeContext): CurrentPerformanceRiskRatings => {
  return {
    high: __expectLong(output.high),
    low: __expectLong(output.low),
    medium: __expectLong(output.medium),
    veryLow: __expectLong(output.veryLow),
  } as any;
};

/**
 * deserializeAws_json1_0DeleteRecommendationPreferencesResponse
 */
const de_DeleteRecommendationPreferencesResponse = (
  output: any,
  context: __SerdeContext
): DeleteRecommendationPreferencesResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_0DescribeRecommendationExportJobsResponse
 */
const de_DescribeRecommendationExportJobsResponse = (
  output: any,
  context: __SerdeContext
): DescribeRecommendationExportJobsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    recommendationExportJobs:
      output.recommendationExportJobs != null
        ? de_RecommendationExportJobs(output.recommendationExportJobs, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0EBSUtilizationMetric
 */
const de_EBSUtilizationMetric = (output: any, context: __SerdeContext): EBSUtilizationMetric => {
  return {
    name: __expectString(output.name),
    statistic: __expectString(output.statistic),
    value: __limitedParseDouble(output.value),
  } as any;
};

/**
 * deserializeAws_json1_0EBSUtilizationMetrics
 */
const de_EBSUtilizationMetrics = (output: any, context: __SerdeContext): EBSUtilizationMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EBSUtilizationMetric(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ECSServiceProjectedMetric
 */
const de_ECSServiceProjectedMetric = (output: any, context: __SerdeContext): ECSServiceProjectedMetric => {
  return {
    lowerBoundValues: output.lowerBoundValues != null ? de_MetricValues(output.lowerBoundValues, context) : undefined,
    name: __expectString(output.name),
    timestamps: output.timestamps != null ? de_Timestamps(output.timestamps, context) : undefined,
    upperBoundValues: output.upperBoundValues != null ? de_MetricValues(output.upperBoundValues, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ECSServiceProjectedMetrics
 */
const de_ECSServiceProjectedMetrics = (output: any, context: __SerdeContext): ECSServiceProjectedMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
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
  return {
    lowerBoundValue: __limitedParseDouble(output.lowerBoundValue),
    name: __expectString(output.name),
    statistic: __expectString(output.statistic),
    upperBoundValue: __limitedParseDouble(output.upperBoundValue),
  } as any;
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
      if (entry === null) {
        return null as any;
      }
      return de_ECSServiceProjectedUtilizationMetric(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ECSServiceRecommendation
 */
const de_ECSServiceRecommendation = (output: any, context: __SerdeContext): ECSServiceRecommendation => {
  return {
    accountId: __expectString(output.accountId),
    currentPerformanceRisk: __expectString(output.currentPerformanceRisk),
    currentServiceConfiguration:
      output.currentServiceConfiguration != null
        ? de_ServiceConfiguration(output.currentServiceConfiguration, context)
        : undefined,
    finding: __expectString(output.finding),
    findingReasonCodes:
      output.findingReasonCodes != null
        ? de_ECSServiceRecommendationFindingReasonCodes(output.findingReasonCodes, context)
        : undefined,
    lastRefreshTimestamp:
      output.lastRefreshTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastRefreshTimestamp)))
        : undefined,
    launchType: __expectString(output.launchType),
    lookbackPeriodInDays: __limitedParseDouble(output.lookbackPeriodInDays),
    serviceArn: __expectString(output.serviceArn),
    serviceRecommendationOptions:
      output.serviceRecommendationOptions != null
        ? de_ECSServiceRecommendationOptions(output.serviceRecommendationOptions, context)
        : undefined,
    utilizationMetrics:
      output.utilizationMetrics != null
        ? de_ECSServiceUtilizationMetrics(output.utilizationMetrics, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ECSServiceRecommendationFindingReasonCodes
 */
const de_ECSServiceRecommendationFindingReasonCodes = (
  output: any,
  context: __SerdeContext
): (ECSServiceRecommendationFindingReasonCode | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ECSServiceRecommendationOption
 */
const de_ECSServiceRecommendationOption = (output: any, context: __SerdeContext): ECSServiceRecommendationOption => {
  return {
    containerRecommendations:
      output.containerRecommendations != null
        ? de_ContainerRecommendations(output.containerRecommendations, context)
        : undefined,
    cpu: __expectInt32(output.cpu),
    memory: __expectInt32(output.memory),
    projectedUtilizationMetrics:
      output.projectedUtilizationMetrics != null
        ? de_ECSServiceProjectedUtilizationMetrics(output.projectedUtilizationMetrics, context)
        : undefined,
    savingsOpportunity:
      output.savingsOpportunity != null ? de_SavingsOpportunity(output.savingsOpportunity, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ECSServiceRecommendationOptions
 */
const de_ECSServiceRecommendationOptions = (output: any, context: __SerdeContext): ECSServiceRecommendationOption[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
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
  return {
    projectedMetrics:
      output.projectedMetrics != null ? de_ECSServiceProjectedMetrics(output.projectedMetrics, context) : undefined,
    recommendedCpuUnits: __expectInt32(output.recommendedCpuUnits),
    recommendedMemorySize: __expectInt32(output.recommendedMemorySize),
  } as any;
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
      if (entry === null) {
        return null as any;
      }
      return de_ECSServiceRecommendedOptionProjectedMetric(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ECSServiceUtilizationMetric
 */
const de_ECSServiceUtilizationMetric = (output: any, context: __SerdeContext): ECSServiceUtilizationMetric => {
  return {
    name: __expectString(output.name),
    statistic: __expectString(output.statistic),
    value: __limitedParseDouble(output.value),
  } as any;
};

/**
 * deserializeAws_json1_0ECSServiceUtilizationMetrics
 */
const de_ECSServiceUtilizationMetrics = (output: any, context: __SerdeContext): ECSServiceUtilizationMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ECSServiceUtilizationMetric(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0EffectiveRecommendationPreferences
 */
const de_EffectiveRecommendationPreferences = (
  output: any,
  context: __SerdeContext
): EffectiveRecommendationPreferences => {
  return {
    cpuVendorArchitectures:
      output.cpuVendorArchitectures != null
        ? de_CpuVendorArchitectures(output.cpuVendorArchitectures, context)
        : undefined,
    enhancedInfrastructureMetrics: __expectString(output.enhancedInfrastructureMetrics),
    externalMetricsPreference:
      output.externalMetricsPreference != null
        ? de_ExternalMetricsPreference(output.externalMetricsPreference, context)
        : undefined,
    inferredWorkloadTypes: __expectString(output.inferredWorkloadTypes),
  } as any;
};

/**
 * deserializeAws_json1_0EstimatedMonthlySavings
 */
const de_EstimatedMonthlySavings = (output: any, context: __SerdeContext): EstimatedMonthlySavings => {
  return {
    currency: __expectString(output.currency),
    value: __limitedParseDouble(output.value),
  } as any;
};

/**
 * deserializeAws_json1_0ExportAutoScalingGroupRecommendationsResponse
 */
const de_ExportAutoScalingGroupRecommendationsResponse = (
  output: any,
  context: __SerdeContext
): ExportAutoScalingGroupRecommendationsResponse => {
  return {
    jobId: __expectString(output.jobId),
    s3Destination: output.s3Destination != null ? de_S3Destination(output.s3Destination, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ExportDestination
 */
const de_ExportDestination = (output: any, context: __SerdeContext): ExportDestination => {
  return {
    s3: output.s3 != null ? de_S3Destination(output.s3, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ExportEBSVolumeRecommendationsResponse
 */
const de_ExportEBSVolumeRecommendationsResponse = (
  output: any,
  context: __SerdeContext
): ExportEBSVolumeRecommendationsResponse => {
  return {
    jobId: __expectString(output.jobId),
    s3Destination: output.s3Destination != null ? de_S3Destination(output.s3Destination, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ExportEC2InstanceRecommendationsResponse
 */
const de_ExportEC2InstanceRecommendationsResponse = (
  output: any,
  context: __SerdeContext
): ExportEC2InstanceRecommendationsResponse => {
  return {
    jobId: __expectString(output.jobId),
    s3Destination: output.s3Destination != null ? de_S3Destination(output.s3Destination, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ExportECSServiceRecommendationsResponse
 */
const de_ExportECSServiceRecommendationsResponse = (
  output: any,
  context: __SerdeContext
): ExportECSServiceRecommendationsResponse => {
  return {
    jobId: __expectString(output.jobId),
    s3Destination: output.s3Destination != null ? de_S3Destination(output.s3Destination, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ExportLambdaFunctionRecommendationsResponse
 */
const de_ExportLambdaFunctionRecommendationsResponse = (
  output: any,
  context: __SerdeContext
): ExportLambdaFunctionRecommendationsResponse => {
  return {
    jobId: __expectString(output.jobId),
    s3Destination: output.s3Destination != null ? de_S3Destination(output.s3Destination, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ExternalMetricsPreference
 */
const de_ExternalMetricsPreference = (output: any, context: __SerdeContext): ExternalMetricsPreference => {
  return {
    source: __expectString(output.source),
  } as any;
};

/**
 * deserializeAws_json1_0GetAutoScalingGroupRecommendationsResponse
 */
const de_GetAutoScalingGroupRecommendationsResponse = (
  output: any,
  context: __SerdeContext
): GetAutoScalingGroupRecommendationsResponse => {
  return {
    autoScalingGroupRecommendations:
      output.autoScalingGroupRecommendations != null
        ? de_AutoScalingGroupRecommendations(output.autoScalingGroupRecommendations, context)
        : undefined,
    errors: output.errors != null ? de_GetRecommendationErrors(output.errors, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_0GetEBSVolumeRecommendationsResponse
 */
const de_GetEBSVolumeRecommendationsResponse = (
  output: any,
  context: __SerdeContext
): GetEBSVolumeRecommendationsResponse => {
  return {
    errors: output.errors != null ? de_GetRecommendationErrors(output.errors, context) : undefined,
    nextToken: __expectString(output.nextToken),
    volumeRecommendations:
      output.volumeRecommendations != null
        ? de_VolumeRecommendations(output.volumeRecommendations, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GetEC2InstanceRecommendationsResponse
 */
const de_GetEC2InstanceRecommendationsResponse = (
  output: any,
  context: __SerdeContext
): GetEC2InstanceRecommendationsResponse => {
  return {
    errors: output.errors != null ? de_GetRecommendationErrors(output.errors, context) : undefined,
    instanceRecommendations:
      output.instanceRecommendations != null
        ? de_InstanceRecommendations(output.instanceRecommendations, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_0GetEC2RecommendationProjectedMetricsResponse
 */
const de_GetEC2RecommendationProjectedMetricsResponse = (
  output: any,
  context: __SerdeContext
): GetEC2RecommendationProjectedMetricsResponse => {
  return {
    recommendedOptionProjectedMetrics:
      output.recommendedOptionProjectedMetrics != null
        ? de_RecommendedOptionProjectedMetrics(output.recommendedOptionProjectedMetrics, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GetECSServiceRecommendationProjectedMetricsResponse
 */
const de_GetECSServiceRecommendationProjectedMetricsResponse = (
  output: any,
  context: __SerdeContext
): GetECSServiceRecommendationProjectedMetricsResponse => {
  return {
    recommendedOptionProjectedMetrics:
      output.recommendedOptionProjectedMetrics != null
        ? de_ECSServiceRecommendedOptionProjectedMetrics(output.recommendedOptionProjectedMetrics, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GetECSServiceRecommendationsResponse
 */
const de_GetECSServiceRecommendationsResponse = (
  output: any,
  context: __SerdeContext
): GetECSServiceRecommendationsResponse => {
  return {
    ecsServiceRecommendations:
      output.ecsServiceRecommendations != null
        ? de_ECSServiceRecommendations(output.ecsServiceRecommendations, context)
        : undefined,
    errors: output.errors != null ? de_GetRecommendationErrors(output.errors, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_0GetEffectiveRecommendationPreferencesResponse
 */
const de_GetEffectiveRecommendationPreferencesResponse = (
  output: any,
  context: __SerdeContext
): GetEffectiveRecommendationPreferencesResponse => {
  return {
    enhancedInfrastructureMetrics: __expectString(output.enhancedInfrastructureMetrics),
    externalMetricsPreference:
      output.externalMetricsPreference != null
        ? de_ExternalMetricsPreference(output.externalMetricsPreference, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GetEnrollmentStatusesForOrganizationResponse
 */
const de_GetEnrollmentStatusesForOrganizationResponse = (
  output: any,
  context: __SerdeContext
): GetEnrollmentStatusesForOrganizationResponse => {
  return {
    accountEnrollmentStatuses:
      output.accountEnrollmentStatuses != null
        ? de_AccountEnrollmentStatuses(output.accountEnrollmentStatuses, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_0GetEnrollmentStatusResponse
 */
const de_GetEnrollmentStatusResponse = (output: any, context: __SerdeContext): GetEnrollmentStatusResponse => {
  return {
    lastUpdatedTimestamp:
      output.lastUpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedTimestamp)))
        : undefined,
    memberAccountsEnrolled: __expectBoolean(output.memberAccountsEnrolled),
    numberOfMemberAccountsOptedIn: __expectInt32(output.numberOfMemberAccountsOptedIn),
    status: __expectString(output.status),
    statusReason: __expectString(output.statusReason),
  } as any;
};

/**
 * deserializeAws_json1_0GetLambdaFunctionRecommendationsResponse
 */
const de_GetLambdaFunctionRecommendationsResponse = (
  output: any,
  context: __SerdeContext
): GetLambdaFunctionRecommendationsResponse => {
  return {
    lambdaFunctionRecommendations:
      output.lambdaFunctionRecommendations != null
        ? de_LambdaFunctionRecommendations(output.lambdaFunctionRecommendations, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_0GetRecommendationError
 */
const de_GetRecommendationError = (output: any, context: __SerdeContext): GetRecommendationError => {
  return {
    code: __expectString(output.code),
    identifier: __expectString(output.identifier),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0GetRecommendationErrors
 */
const de_GetRecommendationErrors = (output: any, context: __SerdeContext): GetRecommendationError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GetRecommendationError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0GetRecommendationPreferencesResponse
 */
const de_GetRecommendationPreferencesResponse = (
  output: any,
  context: __SerdeContext
): GetRecommendationPreferencesResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    recommendationPreferencesDetails:
      output.recommendationPreferencesDetails != null
        ? de_RecommendationPreferencesDetails(output.recommendationPreferencesDetails, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GetRecommendationSummariesResponse
 */
const de_GetRecommendationSummariesResponse = (
  output: any,
  context: __SerdeContext
): GetRecommendationSummariesResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    recommendationSummaries:
      output.recommendationSummaries != null
        ? de_RecommendationSummaries(output.recommendationSummaries, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0InferredWorkloadTypes
 */
const de_InferredWorkloadTypes = (output: any, context: __SerdeContext): (InferredWorkloadType | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_0InstanceRecommendation
 */
const de_InstanceRecommendation = (output: any, context: __SerdeContext): InstanceRecommendation => {
  return {
    accountId: __expectString(output.accountId),
    currentInstanceType: __expectString(output.currentInstanceType),
    currentPerformanceRisk: __expectString(output.currentPerformanceRisk),
    effectiveRecommendationPreferences:
      output.effectiveRecommendationPreferences != null
        ? de_EffectiveRecommendationPreferences(output.effectiveRecommendationPreferences, context)
        : undefined,
    finding: __expectString(output.finding),
    findingReasonCodes:
      output.findingReasonCodes != null
        ? de_InstanceRecommendationFindingReasonCodes(output.findingReasonCodes, context)
        : undefined,
    inferredWorkloadTypes:
      output.inferredWorkloadTypes != null
        ? de_InferredWorkloadTypes(output.inferredWorkloadTypes, context)
        : undefined,
    instanceArn: __expectString(output.instanceArn),
    instanceName: __expectString(output.instanceName),
    instanceState: __expectString(output.instanceState),
    lastRefreshTimestamp:
      output.lastRefreshTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastRefreshTimestamp)))
        : undefined,
    lookBackPeriodInDays: __limitedParseDouble(output.lookBackPeriodInDays),
    recommendationOptions:
      output.recommendationOptions != null
        ? de_RecommendationOptions(output.recommendationOptions, context)
        : undefined,
    recommendationSources:
      output.recommendationSources != null
        ? de_RecommendationSources(output.recommendationSources, context)
        : undefined,
    utilizationMetrics:
      output.utilizationMetrics != null ? de_UtilizationMetrics(output.utilizationMetrics, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0InstanceRecommendationFindingReasonCodes
 */
const de_InstanceRecommendationFindingReasonCodes = (
  output: any,
  context: __SerdeContext
): (InstanceRecommendationFindingReasonCode | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_0InstanceRecommendationOption
 */
const de_InstanceRecommendationOption = (output: any, context: __SerdeContext): InstanceRecommendationOption => {
  return {
    instanceType: __expectString(output.instanceType),
    migrationEffort: __expectString(output.migrationEffort),
    performanceRisk: __limitedParseDouble(output.performanceRisk),
    platformDifferences:
      output.platformDifferences != null ? de_PlatformDifferences(output.platformDifferences, context) : undefined,
    projectedUtilizationMetrics:
      output.projectedUtilizationMetrics != null
        ? de_ProjectedUtilizationMetrics(output.projectedUtilizationMetrics, context)
        : undefined,
    rank: __expectInt32(output.rank),
    savingsOpportunity:
      output.savingsOpportunity != null ? de_SavingsOpportunity(output.savingsOpportunity, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0InstanceRecommendations
 */
const de_InstanceRecommendations = (output: any, context: __SerdeContext): InstanceRecommendation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InstanceRecommendation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0InternalServerException
 */
const de_InternalServerException = (output: any, context: __SerdeContext): InternalServerException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0InvalidParameterValueException
 */
const de_InvalidParameterValueException = (output: any, context: __SerdeContext): InvalidParameterValueException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0LambdaFunctionMemoryProjectedMetric
 */
const de_LambdaFunctionMemoryProjectedMetric = (
  output: any,
  context: __SerdeContext
): LambdaFunctionMemoryProjectedMetric => {
  return {
    name: __expectString(output.name),
    statistic: __expectString(output.statistic),
    value: __limitedParseDouble(output.value),
  } as any;
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
      if (entry === null) {
        return null as any;
      }
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
  return {
    memorySize: __expectInt32(output.memorySize),
    projectedUtilizationMetrics:
      output.projectedUtilizationMetrics != null
        ? de_LambdaFunctionMemoryProjectedMetrics(output.projectedUtilizationMetrics, context)
        : undefined,
    rank: __expectInt32(output.rank),
    savingsOpportunity:
      output.savingsOpportunity != null ? de_SavingsOpportunity(output.savingsOpportunity, context) : undefined,
  } as any;
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
      if (entry === null) {
        return null as any;
      }
      return de_LambdaFunctionMemoryRecommendationOption(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0LambdaFunctionRecommendation
 */
const de_LambdaFunctionRecommendation = (output: any, context: __SerdeContext): LambdaFunctionRecommendation => {
  return {
    accountId: __expectString(output.accountId),
    currentMemorySize: __expectInt32(output.currentMemorySize),
    currentPerformanceRisk: __expectString(output.currentPerformanceRisk),
    finding: __expectString(output.finding),
    findingReasonCodes:
      output.findingReasonCodes != null
        ? de_LambdaFunctionRecommendationFindingReasonCodes(output.findingReasonCodes, context)
        : undefined,
    functionArn: __expectString(output.functionArn),
    functionVersion: __expectString(output.functionVersion),
    lastRefreshTimestamp:
      output.lastRefreshTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastRefreshTimestamp)))
        : undefined,
    lookbackPeriodInDays: __limitedParseDouble(output.lookbackPeriodInDays),
    memorySizeRecommendationOptions:
      output.memorySizeRecommendationOptions != null
        ? de_LambdaFunctionMemoryRecommendationOptions(output.memorySizeRecommendationOptions, context)
        : undefined,
    numberOfInvocations: __expectLong(output.numberOfInvocations),
    utilizationMetrics:
      output.utilizationMetrics != null
        ? de_LambdaFunctionUtilizationMetrics(output.utilizationMetrics, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0LambdaFunctionRecommendationFindingReasonCodes
 */
const de_LambdaFunctionRecommendationFindingReasonCodes = (
  output: any,
  context: __SerdeContext
): (LambdaFunctionRecommendationFindingReasonCode | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_0LambdaFunctionRecommendations
 */
const de_LambdaFunctionRecommendations = (output: any, context: __SerdeContext): LambdaFunctionRecommendation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LambdaFunctionRecommendation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0LambdaFunctionUtilizationMetric
 */
const de_LambdaFunctionUtilizationMetric = (output: any, context: __SerdeContext): LambdaFunctionUtilizationMetric => {
  return {
    name: __expectString(output.name),
    statistic: __expectString(output.statistic),
    value: __limitedParseDouble(output.value),
  } as any;
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
      if (entry === null) {
        return null as any;
      }
      return de_LambdaFunctionUtilizationMetric(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0MemorySizeConfiguration
 */
const de_MemorySizeConfiguration = (output: any, context: __SerdeContext): MemorySizeConfiguration => {
  return {
    memory: __expectInt32(output.memory),
    memoryReservation: __expectInt32(output.memoryReservation),
  } as any;
};

/**
 * deserializeAws_json1_0MetricValues
 */
const de_MetricValues = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __limitedParseDouble(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_0MissingAuthenticationToken
 */
const de_MissingAuthenticationToken = (output: any, context: __SerdeContext): MissingAuthenticationToken => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0OptInRequiredException
 */
const de_OptInRequiredException = (output: any, context: __SerdeContext): OptInRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0PlatformDifferences
 */
const de_PlatformDifferences = (output: any, context: __SerdeContext): (PlatformDifference | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ProjectedMetric
 */
const de_ProjectedMetric = (output: any, context: __SerdeContext): ProjectedMetric => {
  return {
    name: __expectString(output.name),
    timestamps: output.timestamps != null ? de_Timestamps(output.timestamps, context) : undefined,
    values: output.values != null ? de_MetricValues(output.values, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ProjectedMetrics
 */
const de_ProjectedMetrics = (output: any, context: __SerdeContext): ProjectedMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
      return de_UtilizationMetric(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0PutRecommendationPreferencesResponse
 */
const de_PutRecommendationPreferencesResponse = (
  output: any,
  context: __SerdeContext
): PutRecommendationPreferencesResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_0ReasonCodeSummaries
 */
const de_ReasonCodeSummaries = (output: any, context: __SerdeContext): ReasonCodeSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReasonCodeSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ReasonCodeSummary
 */
const de_ReasonCodeSummary = (output: any, context: __SerdeContext): ReasonCodeSummary => {
  return {
    name: __expectString(output.name),
    value: __limitedParseDouble(output.value),
  } as any;
};

/**
 * deserializeAws_json1_0RecommendationExportJob
 */
const de_RecommendationExportJob = (output: any, context: __SerdeContext): RecommendationExportJob => {
  return {
    creationTimestamp:
      output.creationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTimestamp)))
        : undefined,
    destination: output.destination != null ? de_ExportDestination(output.destination, context) : undefined,
    failureReason: __expectString(output.failureReason),
    jobId: __expectString(output.jobId),
    lastUpdatedTimestamp:
      output.lastUpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedTimestamp)))
        : undefined,
    resourceType: __expectString(output.resourceType),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_0RecommendationExportJobs
 */
const de_RecommendationExportJobs = (output: any, context: __SerdeContext): RecommendationExportJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
      return de_InstanceRecommendationOption(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0RecommendationPreferencesDetail
 */
const de_RecommendationPreferencesDetail = (output: any, context: __SerdeContext): RecommendationPreferencesDetail => {
  return {
    enhancedInfrastructureMetrics: __expectString(output.enhancedInfrastructureMetrics),
    externalMetricsPreference:
      output.externalMetricsPreference != null
        ? de_ExternalMetricsPreference(output.externalMetricsPreference, context)
        : undefined,
    inferredWorkloadTypes: __expectString(output.inferredWorkloadTypes),
    resourceType: __expectString(output.resourceType),
    scope: output.scope != null ? de_Scope(output.scope, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0RecommendationPreferencesDetails
 */
const de_RecommendationPreferencesDetails = (
  output: any,
  context: __SerdeContext
): RecommendationPreferencesDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RecommendationPreferencesDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0RecommendationSource
 */
const de_RecommendationSource = (output: any, context: __SerdeContext): RecommendationSource => {
  return {
    recommendationSourceArn: __expectString(output.recommendationSourceArn),
    recommendationSourceType: __expectString(output.recommendationSourceType),
  } as any;
};

/**
 * deserializeAws_json1_0RecommendationSources
 */
const de_RecommendationSources = (output: any, context: __SerdeContext): RecommendationSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RecommendationSource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0RecommendationSummaries
 */
const de_RecommendationSummaries = (output: any, context: __SerdeContext): RecommendationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RecommendationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0RecommendationSummary
 */
const de_RecommendationSummary = (output: any, context: __SerdeContext): RecommendationSummary => {
  return {
    accountId: __expectString(output.accountId),
    currentPerformanceRiskRatings:
      output.currentPerformanceRiskRatings != null
        ? de_CurrentPerformanceRiskRatings(output.currentPerformanceRiskRatings, context)
        : undefined,
    recommendationResourceType: __expectString(output.recommendationResourceType),
    savingsOpportunity:
      output.savingsOpportunity != null ? de_SavingsOpportunity(output.savingsOpportunity, context) : undefined,
    summaries: output.summaries != null ? de_Summaries(output.summaries, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0RecommendedOptionProjectedMetric
 */
const de_RecommendedOptionProjectedMetric = (
  output: any,
  context: __SerdeContext
): RecommendedOptionProjectedMetric => {
  return {
    projectedMetrics:
      output.projectedMetrics != null ? de_ProjectedMetrics(output.projectedMetrics, context) : undefined,
    rank: __expectInt32(output.rank),
    recommendedInstanceType: __expectString(output.recommendedInstanceType),
  } as any;
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
      if (entry === null) {
        return null as any;
      }
      return de_RecommendedOptionProjectedMetric(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0S3Destination
 */
const de_S3Destination = (output: any, context: __SerdeContext): S3Destination => {
  return {
    bucket: __expectString(output.bucket),
    key: __expectString(output.key),
    metadataKey: __expectString(output.metadataKey),
  } as any;
};

/**
 * deserializeAws_json1_0SavingsOpportunity
 */
const de_SavingsOpportunity = (output: any, context: __SerdeContext): SavingsOpportunity => {
  return {
    estimatedMonthlySavings:
      output.estimatedMonthlySavings != null
        ? de_EstimatedMonthlySavings(output.estimatedMonthlySavings, context)
        : undefined,
    savingsOpportunityPercentage: __limitedParseDouble(output.savingsOpportunityPercentage),
  } as any;
};

/**
 * deserializeAws_json1_0Scope
 */
const de_Scope = (output: any, context: __SerdeContext): Scope => {
  return {
    name: __expectString(output.name),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_json1_0ServiceConfiguration
 */
const de_ServiceConfiguration = (output: any, context: __SerdeContext): ServiceConfiguration => {
  return {
    autoScalingConfiguration: __expectString(output.autoScalingConfiguration),
    containerConfigurations:
      output.containerConfigurations != null
        ? de_ContainerConfigurations(output.containerConfigurations, context)
        : undefined,
    cpu: __expectInt32(output.cpu),
    memory: __expectInt32(output.memory),
    taskDefinitionArn: __expectString(output.taskDefinitionArn),
  } as any;
};

/**
 * deserializeAws_json1_0ServiceUnavailableException
 */
const de_ServiceUnavailableException = (output: any, context: __SerdeContext): ServiceUnavailableException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0Summaries
 */
const de_Summaries = (output: any, context: __SerdeContext): Summary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Summary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0Summary
 */
const de_Summary = (output: any, context: __SerdeContext): Summary => {
  return {
    name: __expectString(output.name),
    reasonCodeSummaries:
      output.reasonCodeSummaries != null ? de_ReasonCodeSummaries(output.reasonCodeSummaries, context) : undefined,
    value: __limitedParseDouble(output.value),
  } as any;
};

/**
 * deserializeAws_json1_0ThrottlingException
 */
const de_ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0Timestamps
 */
const de_Timestamps = (output: any, context: __SerdeContext): Date[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectNonNull(__parseEpochTimestamp(__expectNumber(entry)));
    });
  return retVal;
};

/**
 * deserializeAws_json1_0UpdateEnrollmentStatusResponse
 */
const de_UpdateEnrollmentStatusResponse = (output: any, context: __SerdeContext): UpdateEnrollmentStatusResponse => {
  return {
    status: __expectString(output.status),
    statusReason: __expectString(output.statusReason),
  } as any;
};

/**
 * deserializeAws_json1_0UtilizationMetric
 */
const de_UtilizationMetric = (output: any, context: __SerdeContext): UtilizationMetric => {
  return {
    name: __expectString(output.name),
    statistic: __expectString(output.statistic),
    value: __limitedParseDouble(output.value),
  } as any;
};

/**
 * deserializeAws_json1_0UtilizationMetrics
 */
const de_UtilizationMetrics = (output: any, context: __SerdeContext): UtilizationMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UtilizationMetric(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0VolumeConfiguration
 */
const de_VolumeConfiguration = (output: any, context: __SerdeContext): VolumeConfiguration => {
  return {
    rootVolume: __expectBoolean(output.rootVolume),
    volumeBaselineIOPS: __expectInt32(output.volumeBaselineIOPS),
    volumeBaselineThroughput: __expectInt32(output.volumeBaselineThroughput),
    volumeBurstIOPS: __expectInt32(output.volumeBurstIOPS),
    volumeBurstThroughput: __expectInt32(output.volumeBurstThroughput),
    volumeSize: __expectInt32(output.volumeSize),
    volumeType: __expectString(output.volumeType),
  } as any;
};

/**
 * deserializeAws_json1_0VolumeRecommendation
 */
const de_VolumeRecommendation = (output: any, context: __SerdeContext): VolumeRecommendation => {
  return {
    accountId: __expectString(output.accountId),
    currentConfiguration:
      output.currentConfiguration != null ? de_VolumeConfiguration(output.currentConfiguration, context) : undefined,
    currentPerformanceRisk: __expectString(output.currentPerformanceRisk),
    finding: __expectString(output.finding),
    lastRefreshTimestamp:
      output.lastRefreshTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastRefreshTimestamp)))
        : undefined,
    lookBackPeriodInDays: __limitedParseDouble(output.lookBackPeriodInDays),
    utilizationMetrics:
      output.utilizationMetrics != null ? de_EBSUtilizationMetrics(output.utilizationMetrics, context) : undefined,
    volumeArn: __expectString(output.volumeArn),
    volumeRecommendationOptions:
      output.volumeRecommendationOptions != null
        ? de_VolumeRecommendationOptions(output.volumeRecommendationOptions, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0VolumeRecommendationOption
 */
const de_VolumeRecommendationOption = (output: any, context: __SerdeContext): VolumeRecommendationOption => {
  return {
    configuration: output.configuration != null ? de_VolumeConfiguration(output.configuration, context) : undefined,
    performanceRisk: __limitedParseDouble(output.performanceRisk),
    rank: __expectInt32(output.rank),
    savingsOpportunity:
      output.savingsOpportunity != null ? de_SavingsOpportunity(output.savingsOpportunity, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0VolumeRecommendationOptions
 */
const de_VolumeRecommendationOptions = (output: any, context: __SerdeContext): VolumeRecommendationOption[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
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
