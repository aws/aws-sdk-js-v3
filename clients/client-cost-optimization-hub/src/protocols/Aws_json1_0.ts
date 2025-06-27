// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
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

import { GetPreferencesCommandInput, GetPreferencesCommandOutput } from "../commands/GetPreferencesCommand";
import { GetRecommendationCommandInput, GetRecommendationCommandOutput } from "../commands/GetRecommendationCommand";
import {
  ListEnrollmentStatusesCommandInput,
  ListEnrollmentStatusesCommandOutput,
} from "../commands/ListEnrollmentStatusesCommand";
import {
  ListRecommendationsCommandInput,
  ListRecommendationsCommandOutput,
} from "../commands/ListRecommendationsCommand";
import {
  ListRecommendationSummariesCommandInput,
  ListRecommendationSummariesCommandOutput,
} from "../commands/ListRecommendationSummariesCommand";
import {
  UpdateEnrollmentStatusCommandInput,
  UpdateEnrollmentStatusCommandOutput,
} from "../commands/UpdateEnrollmentStatusCommand";
import { UpdatePreferencesCommandInput, UpdatePreferencesCommandOutput } from "../commands/UpdatePreferencesCommand";
import { CostOptimizationHubServiceException as __BaseException } from "../models/CostOptimizationHubServiceException";
import {
  AccessDeniedException,
  AccountEnrollmentStatus,
  ActionType,
  AuroraDbClusterStorage,
  BlockStoragePerformanceConfiguration,
  ComputeConfiguration,
  ComputeSavingsPlans,
  DynamoDbReservedCapacity,
  EbsVolume,
  EbsVolumeConfiguration,
  Ec2AutoScalingGroup,
  Ec2Instance,
  Ec2InstanceSavingsPlans,
  Ec2ReservedInstances,
  EcsService,
  EcsServiceConfiguration,
  ElastiCacheReservedInstances,
  EstimatedDiscounts,
  Filter,
  GetPreferencesRequest,
  GetRecommendationRequest,
  GetRecommendationResponse,
  ImplementationEffort,
  InternalServerException,
  LambdaFunction,
  LambdaFunctionConfiguration,
  ListEnrollmentStatusesRequest,
  ListEnrollmentStatusesResponse,
  ListRecommendationsRequest,
  ListRecommendationsResponse,
  ListRecommendationSummariesRequest,
  ListRecommendationSummariesResponse,
  MemoryDbReservedInstances,
  OpenSearchReservedInstances,
  OrderBy,
  PreferredCommitment,
  RdsDbInstance,
  RdsDbInstanceStorage,
  RdsDbInstanceStorageConfiguration,
  RdsReservedInstances,
  Recommendation,
  RecommendationSummary,
  RedshiftReservedInstances,
  ReservedInstancesCostCalculation,
  ReservedInstancesPricing,
  ResourceCostCalculation,
  ResourceDetails,
  ResourceNotFoundException,
  ResourcePricing,
  ResourceType,
  SageMakerSavingsPlans,
  SavingsPlansCostCalculation,
  SavingsPlansPricing,
  StorageConfiguration,
  SummaryMetrics,
  Tag,
  ThrottlingException,
  UpdateEnrollmentStatusRequest,
  UpdatePreferencesRequest,
  Usage,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_json1_0GetPreferencesCommand
 */
export const se_GetPreferencesCommand = async (
  input: GetPreferencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetPreferences");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetRecommendationCommand
 */
export const se_GetRecommendationCommand = async (
  input: GetRecommendationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRecommendation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListEnrollmentStatusesCommand
 */
export const se_ListEnrollmentStatusesCommand = async (
  input: ListEnrollmentStatusesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEnrollmentStatuses");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListRecommendationsCommand
 */
export const se_ListRecommendationsCommand = async (
  input: ListRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListRecommendations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListRecommendationSummariesCommand
 */
export const se_ListRecommendationSummariesCommand = async (
  input: ListRecommendationSummariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListRecommendationSummaries");
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
 * serializeAws_json1_0UpdatePreferencesCommand
 */
export const se_UpdatePreferencesCommand = async (
  input: UpdatePreferencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdatePreferences");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0GetPreferencesCommand
 */
export const de_GetPreferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPreferencesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetPreferencesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetRecommendationCommand
 */
export const de_GetRecommendationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommendationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRecommendationResponse(data, context);
  const response: GetRecommendationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListEnrollmentStatusesCommand
 */
export const de_ListEnrollmentStatusesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnrollmentStatusesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEnrollmentStatusesResponse(data, context);
  const response: ListEnrollmentStatusesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListRecommendationsCommand
 */
export const de_ListRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecommendationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListRecommendationsResponse(data, context);
  const response: ListRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListRecommendationSummariesCommand
 */
export const de_ListRecommendationSummariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecommendationSummariesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListRecommendationSummariesResponse(data, context);
  const response: ListRecommendationSummariesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateEnrollmentStatusCommand
 */
export const de_UpdateEnrollmentStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnrollmentStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0UpdatePreferencesCommand
 */
export const de_UpdatePreferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePreferencesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdatePreferencesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserialize_Aws_json1_0CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.costoptimizationhub#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.costoptimizationhub#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.costoptimizationhub#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.costoptimizationhub#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.costoptimizationhub#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
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

/**
 * deserializeAws_json1_0ValidationExceptionRes
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

// se_AccountIdList omitted.

// se_ActionTypeList omitted.

// se_Filter omitted.

// se_GetPreferencesRequest omitted.

// se_GetRecommendationRequest omitted.

// se_ImplementationEffortList omitted.

// se_ListEnrollmentStatusesRequest omitted.

// se_ListRecommendationsRequest omitted.

// se_ListRecommendationSummariesRequest omitted.

// se_OrderBy omitted.

// se_PreferredCommitment omitted.

// se_RecommendationIdList omitted.

// se_RegionList omitted.

// se_ResourceArnList omitted.

// se_ResourceIdList omitted.

// se_ResourceTypeList omitted.

// se_SummaryMetricsList omitted.

// se_Tag omitted.

// se_TagList omitted.

// se_UpdateEnrollmentStatusRequest omitted.

// se_UpdatePreferencesRequest omitted.

// de_AccessDeniedException omitted.

/**
 * deserializeAws_json1_0AccountEnrollmentStatus
 */
const de_AccountEnrollmentStatus = (output: any, context: __SerdeContext): AccountEnrollmentStatus => {
  return take(output, {
    accountId: __expectString,
    createdTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
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

/**
 * deserializeAws_json1_0AuroraDbClusterStorage
 */
const de_AuroraDbClusterStorage = (output: any, context: __SerdeContext): AuroraDbClusterStorage => {
  return take(output, {
    configuration: _json,
    costCalculation: (_: any) => de_ResourceCostCalculation(_, context),
  }) as any;
};

// de_AuroraDbClusterStorageConfiguration omitted.

/**
 * deserializeAws_json1_0BlockStoragePerformanceConfiguration
 */
const de_BlockStoragePerformanceConfiguration = (
  output: any,
  context: __SerdeContext
): BlockStoragePerformanceConfiguration => {
  return take(output, {
    iops: __limitedParseDouble,
    throughput: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_0ComputeConfiguration
 */
const de_ComputeConfiguration = (output: any, context: __SerdeContext): ComputeConfiguration => {
  return take(output, {
    architecture: __expectString,
    memorySizeInMB: __expectInt32,
    platform: __expectString,
    vCpu: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_0ComputeSavingsPlans
 */
const de_ComputeSavingsPlans = (output: any, context: __SerdeContext): ComputeSavingsPlans => {
  return take(output, {
    configuration: _json,
    costCalculation: (_: any) => de_SavingsPlansCostCalculation(_, context),
  }) as any;
};

// de_ComputeSavingsPlansConfiguration omitted.

// de_DbInstanceConfiguration omitted.

/**
 * deserializeAws_json1_0DynamoDbReservedCapacity
 */
const de_DynamoDbReservedCapacity = (output: any, context: __SerdeContext): DynamoDbReservedCapacity => {
  return take(output, {
    configuration: _json,
    costCalculation: (_: any) => de_ReservedInstancesCostCalculation(_, context),
  }) as any;
};

// de_DynamoDbReservedCapacityConfiguration omitted.

/**
 * deserializeAws_json1_0EbsVolume
 */
const de_EbsVolume = (output: any, context: __SerdeContext): EbsVolume => {
  return take(output, {
    configuration: (_: any) => de_EbsVolumeConfiguration(_, context),
    costCalculation: (_: any) => de_ResourceCostCalculation(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0EbsVolumeConfiguration
 */
const de_EbsVolumeConfiguration = (output: any, context: __SerdeContext): EbsVolumeConfiguration => {
  return take(output, {
    attachmentState: __expectString,
    performance: (_: any) => de_BlockStoragePerformanceConfiguration(_, context),
    storage: (_: any) => de_StorageConfiguration(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0Ec2AutoScalingGroup
 */
const de_Ec2AutoScalingGroup = (output: any, context: __SerdeContext): Ec2AutoScalingGroup => {
  return take(output, {
    configuration: _json,
    costCalculation: (_: any) => de_ResourceCostCalculation(_, context),
  }) as any;
};

// de_Ec2AutoScalingGroupConfiguration omitted.

/**
 * deserializeAws_json1_0Ec2Instance
 */
const de_Ec2Instance = (output: any, context: __SerdeContext): Ec2Instance => {
  return take(output, {
    configuration: _json,
    costCalculation: (_: any) => de_ResourceCostCalculation(_, context),
  }) as any;
};

// de_Ec2InstanceConfiguration omitted.

/**
 * deserializeAws_json1_0Ec2InstanceSavingsPlans
 */
const de_Ec2InstanceSavingsPlans = (output: any, context: __SerdeContext): Ec2InstanceSavingsPlans => {
  return take(output, {
    configuration: _json,
    costCalculation: (_: any) => de_SavingsPlansCostCalculation(_, context),
  }) as any;
};

// de_Ec2InstanceSavingsPlansConfiguration omitted.

/**
 * deserializeAws_json1_0Ec2ReservedInstances
 */
const de_Ec2ReservedInstances = (output: any, context: __SerdeContext): Ec2ReservedInstances => {
  return take(output, {
    configuration: _json,
    costCalculation: (_: any) => de_ReservedInstancesCostCalculation(_, context),
  }) as any;
};

// de_Ec2ReservedInstancesConfiguration omitted.

/**
 * deserializeAws_json1_0EcsService
 */
const de_EcsService = (output: any, context: __SerdeContext): EcsService => {
  return take(output, {
    configuration: (_: any) => de_EcsServiceConfiguration(_, context),
    costCalculation: (_: any) => de_ResourceCostCalculation(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0EcsServiceConfiguration
 */
const de_EcsServiceConfiguration = (output: any, context: __SerdeContext): EcsServiceConfiguration => {
  return take(output, {
    compute: (_: any) => de_ComputeConfiguration(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0ElastiCacheReservedInstances
 */
const de_ElastiCacheReservedInstances = (output: any, context: __SerdeContext): ElastiCacheReservedInstances => {
  return take(output, {
    configuration: _json,
    costCalculation: (_: any) => de_ReservedInstancesCostCalculation(_, context),
  }) as any;
};

// de_ElastiCacheReservedInstancesConfiguration omitted.

/**
 * deserializeAws_json1_0EstimatedDiscounts
 */
const de_EstimatedDiscounts = (output: any, context: __SerdeContext): EstimatedDiscounts => {
  return take(output, {
    otherDiscount: __limitedParseDouble,
    reservedInstancesDiscount: __limitedParseDouble,
    savingsPlansDiscount: __limitedParseDouble,
  }) as any;
};

// de_GetPreferencesResponse omitted.

/**
 * deserializeAws_json1_0GetRecommendationResponse
 */
const de_GetRecommendationResponse = (output: any, context: __SerdeContext): GetRecommendationResponse => {
  return take(output, {
    accountId: __expectString,
    actionType: __expectString,
    costCalculationLookbackPeriodInDays: __expectInt32,
    currencyCode: __expectString,
    currentResourceDetails: (_: any) => de_ResourceDetails(__expectUnion(_), context),
    currentResourceType: __expectString,
    estimatedMonthlyCost: __limitedParseDouble,
    estimatedMonthlySavings: __limitedParseDouble,
    estimatedSavingsOverCostCalculationLookbackPeriod: __limitedParseDouble,
    estimatedSavingsPercentage: __limitedParseDouble,
    implementationEffort: __expectString,
    lastRefreshTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    recommendationId: __expectString,
    recommendationLookbackPeriodInDays: __expectInt32,
    recommendedResourceDetails: (_: any) => de_ResourceDetails(__expectUnion(_), context),
    recommendedResourceType: __expectString,
    region: __expectString,
    resourceArn: __expectString,
    resourceId: __expectString,
    restartNeeded: __expectBoolean,
    rollbackPossible: __expectBoolean,
    source: __expectString,
    tags: _json,
  }) as any;
};

// de_InstanceConfiguration omitted.

// de_InternalServerException omitted.

/**
 * deserializeAws_json1_0LambdaFunction
 */
const de_LambdaFunction = (output: any, context: __SerdeContext): LambdaFunction => {
  return take(output, {
    configuration: (_: any) => de_LambdaFunctionConfiguration(_, context),
    costCalculation: (_: any) => de_ResourceCostCalculation(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0LambdaFunctionConfiguration
 */
const de_LambdaFunctionConfiguration = (output: any, context: __SerdeContext): LambdaFunctionConfiguration => {
  return take(output, {
    compute: (_: any) => de_ComputeConfiguration(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0ListEnrollmentStatusesResponse
 */
const de_ListEnrollmentStatusesResponse = (output: any, context: __SerdeContext): ListEnrollmentStatusesResponse => {
  return take(output, {
    includeMemberAccounts: __expectBoolean,
    items: (_: any) => de_AccountEnrollmentStatuses(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListRecommendationsResponse
 */
const de_ListRecommendationsResponse = (output: any, context: __SerdeContext): ListRecommendationsResponse => {
  return take(output, {
    items: (_: any) => de_RecommendationList(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListRecommendationSummariesResponse
 */
const de_ListRecommendationSummariesResponse = (
  output: any,
  context: __SerdeContext
): ListRecommendationSummariesResponse => {
  return take(output, {
    currencyCode: __expectString,
    estimatedTotalDedupedSavings: __limitedParseDouble,
    groupBy: __expectString,
    items: (_: any) => de_RecommendationSummariesList(_, context),
    metrics: _json,
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0MemoryDbReservedInstances
 */
const de_MemoryDbReservedInstances = (output: any, context: __SerdeContext): MemoryDbReservedInstances => {
  return take(output, {
    configuration: _json,
    costCalculation: (_: any) => de_ReservedInstancesCostCalculation(_, context),
  }) as any;
};

// de_MemoryDbReservedInstancesConfiguration omitted.

// de_MixedInstanceConfiguration omitted.

// de_MixedInstanceConfigurationList omitted.

/**
 * deserializeAws_json1_0OpenSearchReservedInstances
 */
const de_OpenSearchReservedInstances = (output: any, context: __SerdeContext): OpenSearchReservedInstances => {
  return take(output, {
    configuration: _json,
    costCalculation: (_: any) => de_ReservedInstancesCostCalculation(_, context),
  }) as any;
};

// de_OpenSearchReservedInstancesConfiguration omitted.

// de_PreferredCommitment omitted.

/**
 * deserializeAws_json1_0RdsDbInstance
 */
const de_RdsDbInstance = (output: any, context: __SerdeContext): RdsDbInstance => {
  return take(output, {
    configuration: _json,
    costCalculation: (_: any) => de_ResourceCostCalculation(_, context),
  }) as any;
};

// de_RdsDbInstanceConfiguration omitted.

/**
 * deserializeAws_json1_0RdsDbInstanceStorage
 */
const de_RdsDbInstanceStorage = (output: any, context: __SerdeContext): RdsDbInstanceStorage => {
  return take(output, {
    configuration: (_: any) => de_RdsDbInstanceStorageConfiguration(_, context),
    costCalculation: (_: any) => de_ResourceCostCalculation(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0RdsDbInstanceStorageConfiguration
 */
const de_RdsDbInstanceStorageConfiguration = (
  output: any,
  context: __SerdeContext
): RdsDbInstanceStorageConfiguration => {
  return take(output, {
    allocatedStorageInGb: __limitedParseDouble,
    iops: __limitedParseDouble,
    storageThroughput: __limitedParseDouble,
    storageType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0RdsReservedInstances
 */
const de_RdsReservedInstances = (output: any, context: __SerdeContext): RdsReservedInstances => {
  return take(output, {
    configuration: _json,
    costCalculation: (_: any) => de_ReservedInstancesCostCalculation(_, context),
  }) as any;
};

// de_RdsReservedInstancesConfiguration omitted.

/**
 * deserializeAws_json1_0Recommendation
 */
const de_Recommendation = (output: any, context: __SerdeContext): Recommendation => {
  return take(output, {
    accountId: __expectString,
    actionType: __expectString,
    currencyCode: __expectString,
    currentResourceSummary: __expectString,
    currentResourceType: __expectString,
    estimatedMonthlyCost: __limitedParseDouble,
    estimatedMonthlySavings: __limitedParseDouble,
    estimatedSavingsPercentage: __limitedParseDouble,
    implementationEffort: __expectString,
    lastRefreshTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    recommendationId: __expectString,
    recommendationLookbackPeriodInDays: __expectInt32,
    recommendedResourceSummary: __expectString,
    recommendedResourceType: __expectString,
    region: __expectString,
    resourceArn: __expectString,
    resourceId: __expectString,
    restartNeeded: __expectBoolean,
    rollbackPossible: __expectBoolean,
    source: __expectString,
    tags: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0RecommendationList
 */
const de_RecommendationList = (output: any, context: __SerdeContext): Recommendation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Recommendation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0RecommendationSummariesList
 */
const de_RecommendationSummariesList = (output: any, context: __SerdeContext): RecommendationSummary[] => {
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
    estimatedMonthlySavings: __limitedParseDouble,
    group: __expectString,
    recommendationCount: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_0RedshiftReservedInstances
 */
const de_RedshiftReservedInstances = (output: any, context: __SerdeContext): RedshiftReservedInstances => {
  return take(output, {
    configuration: _json,
    costCalculation: (_: any) => de_ReservedInstancesCostCalculation(_, context),
  }) as any;
};

// de_RedshiftReservedInstancesConfiguration omitted.

/**
 * deserializeAws_json1_0ReservedInstancesCostCalculation
 */
const de_ReservedInstancesCostCalculation = (
  output: any,
  context: __SerdeContext
): ReservedInstancesCostCalculation => {
  return take(output, {
    pricing: (_: any) => de_ReservedInstancesPricing(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0ReservedInstancesPricing
 */
const de_ReservedInstancesPricing = (output: any, context: __SerdeContext): ReservedInstancesPricing => {
  return take(output, {
    estimatedMonthlyAmortizedReservationCost: __limitedParseDouble,
    estimatedOnDemandCost: __limitedParseDouble,
    monthlyReservationEligibleCost: __limitedParseDouble,
    savingsPercentage: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_0ResourceCostCalculation
 */
const de_ResourceCostCalculation = (output: any, context: __SerdeContext): ResourceCostCalculation => {
  return take(output, {
    pricing: (_: any) => de_ResourcePricing(_, context),
    usages: (_: any) => de_UsageList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0ResourceDetails
 */
const de_ResourceDetails = (output: any, context: __SerdeContext): ResourceDetails => {
  if (output.auroraDbClusterStorage != null) {
    return {
      auroraDbClusterStorage: de_AuroraDbClusterStorage(output.auroraDbClusterStorage, context),
    };
  }
  if (output.computeSavingsPlans != null) {
    return {
      computeSavingsPlans: de_ComputeSavingsPlans(output.computeSavingsPlans, context),
    };
  }
  if (output.dynamoDbReservedCapacity != null) {
    return {
      dynamoDbReservedCapacity: de_DynamoDbReservedCapacity(output.dynamoDbReservedCapacity, context),
    };
  }
  if (output.ebsVolume != null) {
    return {
      ebsVolume: de_EbsVolume(output.ebsVolume, context),
    };
  }
  if (output.ec2AutoScalingGroup != null) {
    return {
      ec2AutoScalingGroup: de_Ec2AutoScalingGroup(output.ec2AutoScalingGroup, context),
    };
  }
  if (output.ec2Instance != null) {
    return {
      ec2Instance: de_Ec2Instance(output.ec2Instance, context),
    };
  }
  if (output.ec2InstanceSavingsPlans != null) {
    return {
      ec2InstanceSavingsPlans: de_Ec2InstanceSavingsPlans(output.ec2InstanceSavingsPlans, context),
    };
  }
  if (output.ec2ReservedInstances != null) {
    return {
      ec2ReservedInstances: de_Ec2ReservedInstances(output.ec2ReservedInstances, context),
    };
  }
  if (output.ecsService != null) {
    return {
      ecsService: de_EcsService(output.ecsService, context),
    };
  }
  if (output.elastiCacheReservedInstances != null) {
    return {
      elastiCacheReservedInstances: de_ElastiCacheReservedInstances(output.elastiCacheReservedInstances, context),
    };
  }
  if (output.lambdaFunction != null) {
    return {
      lambdaFunction: de_LambdaFunction(output.lambdaFunction, context),
    };
  }
  if (output.memoryDbReservedInstances != null) {
    return {
      memoryDbReservedInstances: de_MemoryDbReservedInstances(output.memoryDbReservedInstances, context),
    };
  }
  if (output.openSearchReservedInstances != null) {
    return {
      openSearchReservedInstances: de_OpenSearchReservedInstances(output.openSearchReservedInstances, context),
    };
  }
  if (output.rdsDbInstance != null) {
    return {
      rdsDbInstance: de_RdsDbInstance(output.rdsDbInstance, context),
    };
  }
  if (output.rdsDbInstanceStorage != null) {
    return {
      rdsDbInstanceStorage: de_RdsDbInstanceStorage(output.rdsDbInstanceStorage, context),
    };
  }
  if (output.rdsReservedInstances != null) {
    return {
      rdsReservedInstances: de_RdsReservedInstances(output.rdsReservedInstances, context),
    };
  }
  if (output.redshiftReservedInstances != null) {
    return {
      redshiftReservedInstances: de_RedshiftReservedInstances(output.redshiftReservedInstances, context),
    };
  }
  if (output.sageMakerSavingsPlans != null) {
    return {
      sageMakerSavingsPlans: de_SageMakerSavingsPlans(output.sageMakerSavingsPlans, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

// de_ResourceNotFoundException omitted.

/**
 * deserializeAws_json1_0ResourcePricing
 */
const de_ResourcePricing = (output: any, context: __SerdeContext): ResourcePricing => {
  return take(output, {
    estimatedCostAfterDiscounts: __limitedParseDouble,
    estimatedCostBeforeDiscounts: __limitedParseDouble,
    estimatedDiscounts: (_: any) => de_EstimatedDiscounts(_, context),
    estimatedNetUnusedAmortizedCommitments: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_0SageMakerSavingsPlans
 */
const de_SageMakerSavingsPlans = (output: any, context: __SerdeContext): SageMakerSavingsPlans => {
  return take(output, {
    configuration: _json,
    costCalculation: (_: any) => de_SavingsPlansCostCalculation(_, context),
  }) as any;
};

// de_SageMakerSavingsPlansConfiguration omitted.

/**
 * deserializeAws_json1_0SavingsPlansCostCalculation
 */
const de_SavingsPlansCostCalculation = (output: any, context: __SerdeContext): SavingsPlansCostCalculation => {
  return take(output, {
    pricing: (_: any) => de_SavingsPlansPricing(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0SavingsPlansPricing
 */
const de_SavingsPlansPricing = (output: any, context: __SerdeContext): SavingsPlansPricing => {
  return take(output, {
    estimatedMonthlyCommitment: __limitedParseDouble,
    estimatedOnDemandCost: __limitedParseDouble,
    monthlySavingsPlansEligibleCost: __limitedParseDouble,
    savingsPercentage: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_0StorageConfiguration
 */
const de_StorageConfiguration = (output: any, context: __SerdeContext): StorageConfiguration => {
  return take(output, {
    sizeInGb: __limitedParseDouble,
    type: __expectString,
  }) as any;
};

// de_SummaryMetricsResult omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_ThrottlingException omitted.

// de_UpdateEnrollmentStatusResponse omitted.

// de_UpdatePreferencesResponse omitted.

/**
 * deserializeAws_json1_0Usage
 */
const de_Usage = (output: any, context: __SerdeContext): Usage => {
  return take(output, {
    operation: __expectString,
    productCode: __expectString,
    unit: __expectString,
    usageAmount: __limitedParseDouble,
    usageType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0UsageList
 */
const de_UsageList = (output: any, context: __SerdeContext): Usage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Usage(entry, context);
    });
  return retVal;
};

// de_ValidationException omitted.

// de_ValidationExceptionDetail omitted.

// de_ValidationExceptionDetails omitted.

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
    "x-amz-target": `CostOptimizationHubService.${operation}`,
  };
}
