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
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
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

import { CreateDashboardCommandInput, CreateDashboardCommandOutput } from "../commands/CreateDashboardCommand";
import { DeleteDashboardCommandInput, DeleteDashboardCommandOutput } from "../commands/DeleteDashboardCommand";
import { GetDashboardCommandInput, GetDashboardCommandOutput } from "../commands/GetDashboardCommand";
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "../commands/GetResourcePolicyCommand";
import { ListDashboardsCommandInput, ListDashboardsCommandOutput } from "../commands/ListDashboardsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateDashboardCommandInput, UpdateDashboardCommandOutput } from "../commands/UpdateDashboardCommand";
import { BCMDashboardsServiceException as __BaseException } from "../models/BCMDashboardsServiceException";
import {
  AccessDeniedException,
  CostAndUsageQuery,
  CostCategoryValues,
  CreateDashboardRequest,
  DashboardReference,
  DateTimeRange,
  DateTimeValue,
  DeleteDashboardRequest,
  DimensionValues,
  DisplayConfig,
  Expression,
  GetDashboardRequest,
  GetDashboardResponse,
  GetResourcePolicyRequest,
  GraphDisplayConfig,
  GroupDefinition,
  InternalServerException,
  ListDashboardsRequest,
  ListDashboardsResponse,
  ListTagsForResourceRequest,
  MatchOption,
  MetricName,
  QueryParameters,
  ReservationCoverageQuery,
  ReservationUtilizationQuery,
  ResourceNotFoundException,
  ResourceTag,
  SavingsPlansCoverageQuery,
  SavingsPlansUtilizationQuery,
  ServiceQuotaExceededException,
  TableDisplayConfigStruct,
  TagResourceRequest,
  TagValues,
  ThrottlingException,
  UntagResourceRequest,
  UpdateDashboardRequest,
  ValidationException,
  Widget,
  WidgetConfig,
} from "../models/models_0";

/**
 * serializeAws_json1_0CreateDashboardCommand
 */
export const se_CreateDashboardCommand = async (
  input: CreateDashboardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDashboard");
  let body: any;
  body = JSON.stringify(se_CreateDashboardRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteDashboardCommand
 */
export const se_DeleteDashboardCommand = async (
  input: DeleteDashboardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDashboard");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetDashboardCommand
 */
export const se_GetDashboardCommand = async (
  input: GetDashboardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDashboard");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetResourcePolicyCommand
 */
export const se_GetResourcePolicyCommand = async (
  input: GetResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetResourcePolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListDashboardsCommand
 */
export const se_ListDashboardsCommand = async (
  input: ListDashboardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDashboards");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateDashboardCommand
 */
export const se_UpdateDashboardCommand = async (
  input: UpdateDashboardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDashboard");
  let body: any;
  body = JSON.stringify(se_UpdateDashboardRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0CreateDashboardCommand
 */
export const de_CreateDashboardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDashboardCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateDashboardCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteDashboardCommand
 */
export const de_DeleteDashboardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDashboardCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteDashboardCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetDashboardCommand
 */
export const de_GetDashboardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDashboardCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDashboardResponse(data, context);
  const response: GetDashboardCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetResourcePolicyCommand
 */
export const de_GetResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListDashboardsCommand
 */
export const de_ListDashboardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDashboardsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDashboardsResponse(data, context);
  const response: ListDashboardsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateDashboardCommand
 */
export const de_UpdateDashboardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDashboardCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateDashboardCommandOutput = {
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
    case "com.amazonaws.bcmdashboards#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.bcmdashboards#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.bcmdashboards#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.bcmdashboards#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.bcmdashboards#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.bcmdashboards#ResourceNotFoundException":
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
 * deserializeAws_json1_0ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ServiceQuotaExceededException({
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

/**
 * serializeAws_json1_0CostAndUsageQuery
 */
const se_CostAndUsageQuery = (input: CostAndUsageQuery, context: __SerdeContext): any => {
  return take(input, {
    filter: (_) => se_Expression(_, context),
    granularity: [],
    groupBy: _json,
    metrics: _json,
    timeRange: _json,
  });
};

// se_CostCategoryValues omitted.

/**
 * serializeAws_json1_0CreateDashboardRequest
 */
const se_CreateDashboardRequest = (input: CreateDashboardRequest, context: __SerdeContext): any => {
  return take(input, {
    description: [],
    name: [],
    resourceTags: _json,
    widgets: (_) => se_WidgetList(_, context),
  });
};

// se_DateTimeRange omitted.

// se_DateTimeValue omitted.

// se_DeleteDashboardRequest omitted.

// se_DimensionValues omitted.

// se_DisplayConfig omitted.

/**
 * serializeAws_json1_0Expression
 */
const se_Expression = (input: Expression, context: __SerdeContext): any => {
  return take(input, {
    and: (_) => se_Expressions(_, context),
    costCategories: _json,
    dimensions: _json,
    not: (_) => se_Expression(_, context),
    or: (_) => se_Expressions(_, context),
    tags: _json,
  });
};

/**
 * serializeAws_json1_0Expressions
 */
const se_Expressions = (input: Expression[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Expression(entry, context);
    });
};

// se_GetDashboardRequest omitted.

// se_GetResourcePolicyRequest omitted.

// se_GraphDisplayConfig omitted.

// se_GraphDisplayConfigMap omitted.

// se_GroupDefinition omitted.

// se_GroupDefinitions omitted.

// se_ListDashboardsRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_MatchOptions omitted.

// se_MetricNames omitted.

/**
 * serializeAws_json1_0QueryParameters
 */
const se_QueryParameters = (input: QueryParameters, context: __SerdeContext): any => {
  return QueryParameters.visit(input, {
    costAndUsage: (value) => ({ costAndUsage: se_CostAndUsageQuery(value, context) }),
    reservationCoverage: (value) => ({ reservationCoverage: se_ReservationCoverageQuery(value, context) }),
    reservationUtilization: (value) => ({ reservationUtilization: se_ReservationUtilizationQuery(value, context) }),
    savingsPlansCoverage: (value) => ({ savingsPlansCoverage: se_SavingsPlansCoverageQuery(value, context) }),
    savingsPlansUtilization: (value) => ({ savingsPlansUtilization: se_SavingsPlansUtilizationQuery(value, context) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

/**
 * serializeAws_json1_0ReservationCoverageQuery
 */
const se_ReservationCoverageQuery = (input: ReservationCoverageQuery, context: __SerdeContext): any => {
  return take(input, {
    filter: (_) => se_Expression(_, context),
    granularity: [],
    groupBy: _json,
    metrics: _json,
    timeRange: _json,
  });
};

/**
 * serializeAws_json1_0ReservationUtilizationQuery
 */
const se_ReservationUtilizationQuery = (input: ReservationUtilizationQuery, context: __SerdeContext): any => {
  return take(input, {
    filter: (_) => se_Expression(_, context),
    granularity: [],
    groupBy: _json,
    timeRange: _json,
  });
};

// se_ResourceTag omitted.

// se_ResourceTagKeyList omitted.

// se_ResourceTagList omitted.

/**
 * serializeAws_json1_0SavingsPlansCoverageQuery
 */
const se_SavingsPlansCoverageQuery = (input: SavingsPlansCoverageQuery, context: __SerdeContext): any => {
  return take(input, {
    filter: (_) => se_Expression(_, context),
    granularity: [],
    groupBy: _json,
    metrics: _json,
    timeRange: _json,
  });
};

/**
 * serializeAws_json1_0SavingsPlansUtilizationQuery
 */
const se_SavingsPlansUtilizationQuery = (input: SavingsPlansUtilizationQuery, context: __SerdeContext): any => {
  return take(input, {
    filter: (_) => se_Expression(_, context),
    granularity: [],
    timeRange: _json,
  });
};

// se_StringList omitted.

// se_TableDisplayConfigStruct omitted.

// se_TagResourceRequest omitted.

// se_TagValues omitted.

// se_UntagResourceRequest omitted.

/**
 * serializeAws_json1_0UpdateDashboardRequest
 */
const se_UpdateDashboardRequest = (input: UpdateDashboardRequest, context: __SerdeContext): any => {
  return take(input, {
    arn: [],
    description: [],
    name: [],
    widgets: (_) => se_WidgetList(_, context),
  });
};

/**
 * serializeAws_json1_0Widget
 */
const se_Widget = (input: Widget, context: __SerdeContext): any => {
  return take(input, {
    configs: (_) => se_WidgetConfigList(_, context),
    description: [],
    height: [],
    horizontalOffset: [],
    title: [],
    width: [],
  });
};

/**
 * serializeAws_json1_0WidgetConfig
 */
const se_WidgetConfig = (input: WidgetConfig, context: __SerdeContext): any => {
  return take(input, {
    displayConfig: _json,
    queryParameters: (_) => se_QueryParameters(_, context),
  });
};

/**
 * serializeAws_json1_0WidgetConfigList
 */
const se_WidgetConfigList = (input: WidgetConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_WidgetConfig(entry, context);
    });
};

/**
 * serializeAws_json1_0WidgetList
 */
const se_WidgetList = (input: Widget[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Widget(entry, context);
    });
};

// de_AccessDeniedException omitted.

/**
 * deserializeAws_json1_0CostAndUsageQuery
 */
const de_CostAndUsageQuery = (output: any, context: __SerdeContext): CostAndUsageQuery => {
  return take(output, {
    filter: (_: any) => de_Expression(_, context),
    granularity: __expectString,
    groupBy: _json,
    metrics: _json,
    timeRange: _json,
  }) as any;
};

// de_CostCategoryValues omitted.

// de_CreateDashboardResponse omitted.

/**
 * deserializeAws_json1_0DashboardReference
 */
const de_DashboardReference = (output: any, context: __SerdeContext): DashboardReference => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    name: __expectString,
    type: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_0DashboardReferenceList
 */
const de_DashboardReferenceList = (output: any, context: __SerdeContext): DashboardReference[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DashboardReference(entry, context);
    });
  return retVal;
};

// de_DateTimeRange omitted.

// de_DateTimeValue omitted.

// de_DeleteDashboardResponse omitted.

// de_DimensionValues omitted.

// de_DisplayConfig omitted.

/**
 * deserializeAws_json1_0Expression
 */
const de_Expression = (output: any, context: __SerdeContext): Expression => {
  return take(output, {
    and: (_: any) => de_Expressions(_, context),
    costCategories: _json,
    dimensions: _json,
    not: (_: any) => de_Expression(_, context),
    or: (_: any) => de_Expressions(_, context),
    tags: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0Expressions
 */
const de_Expressions = (output: any, context: __SerdeContext): Expression[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Expression(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0GetDashboardResponse
 */
const de_GetDashboardResponse = (output: any, context: __SerdeContext): GetDashboardResponse => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    name: __expectString,
    type: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    widgets: (_: any) => de_WidgetList(_, context),
  }) as any;
};

// de_GetResourcePolicyResponse omitted.

// de_GraphDisplayConfig omitted.

// de_GraphDisplayConfigMap omitted.

// de_GroupDefinition omitted.

// de_GroupDefinitions omitted.

// de_InternalServerException omitted.

/**
 * deserializeAws_json1_0ListDashboardsResponse
 */
const de_ListDashboardsResponse = (output: any, context: __SerdeContext): ListDashboardsResponse => {
  return take(output, {
    dashboards: (_: any) => de_DashboardReferenceList(_, context),
    nextToken: __expectString,
  }) as any;
};

// de_ListTagsForResourceResponse omitted.

// de_MatchOptions omitted.

// de_MetricNames omitted.

/**
 * deserializeAws_json1_0QueryParameters
 */
const de_QueryParameters = (output: any, context: __SerdeContext): QueryParameters => {
  if (output.costAndUsage != null) {
    return {
      costAndUsage: de_CostAndUsageQuery(output.costAndUsage, context),
    };
  }
  if (output.reservationCoverage != null) {
    return {
      reservationCoverage: de_ReservationCoverageQuery(output.reservationCoverage, context),
    };
  }
  if (output.reservationUtilization != null) {
    return {
      reservationUtilization: de_ReservationUtilizationQuery(output.reservationUtilization, context),
    };
  }
  if (output.savingsPlansCoverage != null) {
    return {
      savingsPlansCoverage: de_SavingsPlansCoverageQuery(output.savingsPlansCoverage, context),
    };
  }
  if (output.savingsPlansUtilization != null) {
    return {
      savingsPlansUtilization: de_SavingsPlansUtilizationQuery(output.savingsPlansUtilization, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_json1_0ReservationCoverageQuery
 */
const de_ReservationCoverageQuery = (output: any, context: __SerdeContext): ReservationCoverageQuery => {
  return take(output, {
    filter: (_: any) => de_Expression(_, context),
    granularity: __expectString,
    groupBy: _json,
    metrics: _json,
    timeRange: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0ReservationUtilizationQuery
 */
const de_ReservationUtilizationQuery = (output: any, context: __SerdeContext): ReservationUtilizationQuery => {
  return take(output, {
    filter: (_: any) => de_Expression(_, context),
    granularity: __expectString,
    groupBy: _json,
    timeRange: _json,
  }) as any;
};

// de_ResourceNotFoundException omitted.

// de_ResourceTag omitted.

// de_ResourceTagList omitted.

/**
 * deserializeAws_json1_0SavingsPlansCoverageQuery
 */
const de_SavingsPlansCoverageQuery = (output: any, context: __SerdeContext): SavingsPlansCoverageQuery => {
  return take(output, {
    filter: (_: any) => de_Expression(_, context),
    granularity: __expectString,
    groupBy: _json,
    metrics: _json,
    timeRange: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0SavingsPlansUtilizationQuery
 */
const de_SavingsPlansUtilizationQuery = (output: any, context: __SerdeContext): SavingsPlansUtilizationQuery => {
  return take(output, {
    filter: (_: any) => de_Expression(_, context),
    granularity: __expectString,
    timeRange: _json,
  }) as any;
};

// de_ServiceQuotaExceededException omitted.

// de_StringList omitted.

// de_TableDisplayConfigStruct omitted.

// de_TagResourceResponse omitted.

// de_TagValues omitted.

// de_ThrottlingException omitted.

// de_UntagResourceResponse omitted.

// de_UpdateDashboardResponse omitted.

// de_ValidationException omitted.

/**
 * deserializeAws_json1_0Widget
 */
const de_Widget = (output: any, context: __SerdeContext): Widget => {
  return take(output, {
    configs: (_: any) => de_WidgetConfigList(_, context),
    description: __expectString,
    height: __expectInt32,
    horizontalOffset: __expectInt32,
    title: __expectString,
    width: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_0WidgetConfig
 */
const de_WidgetConfig = (output: any, context: __SerdeContext): WidgetConfig => {
  return take(output, {
    displayConfig: (_: any) => _json(__expectUnion(_)),
    queryParameters: (_: any) => de_QueryParameters(__expectUnion(_), context),
  }) as any;
};

/**
 * deserializeAws_json1_0WidgetConfigList
 */
const de_WidgetConfigList = (output: any, context: __SerdeContext): WidgetConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_WidgetConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0WidgetList
 */
const de_WidgetList = (output: any, context: __SerdeContext): Widget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Widget(entry, context);
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
    "x-amz-target": `AWSBCMDashboardsService.${operation}`,
  };
}
