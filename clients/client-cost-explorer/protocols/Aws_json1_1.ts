import {
  CreateCostCategoryDefinitionCommandInput,
  CreateCostCategoryDefinitionCommandOutput
} from "../commands/CreateCostCategoryDefinitionCommand";
import {
  DeleteCostCategoryDefinitionCommandInput,
  DeleteCostCategoryDefinitionCommandOutput
} from "../commands/DeleteCostCategoryDefinitionCommand";
import {
  DescribeCostCategoryDefinitionCommandInput,
  DescribeCostCategoryDefinitionCommandOutput
} from "../commands/DescribeCostCategoryDefinitionCommand";
import {
  GetCostAndUsageCommandInput,
  GetCostAndUsageCommandOutput
} from "../commands/GetCostAndUsageCommand";
import {
  GetCostAndUsageWithResourcesCommandInput,
  GetCostAndUsageWithResourcesCommandOutput
} from "../commands/GetCostAndUsageWithResourcesCommand";
import {
  GetCostForecastCommandInput,
  GetCostForecastCommandOutput
} from "../commands/GetCostForecastCommand";
import {
  GetDimensionValuesCommandInput,
  GetDimensionValuesCommandOutput
} from "../commands/GetDimensionValuesCommand";
import {
  GetReservationCoverageCommandInput,
  GetReservationCoverageCommandOutput
} from "../commands/GetReservationCoverageCommand";
import {
  GetReservationPurchaseRecommendationCommandInput,
  GetReservationPurchaseRecommendationCommandOutput
} from "../commands/GetReservationPurchaseRecommendationCommand";
import {
  GetReservationUtilizationCommandInput,
  GetReservationUtilizationCommandOutput
} from "../commands/GetReservationUtilizationCommand";
import {
  GetRightsizingRecommendationCommandInput,
  GetRightsizingRecommendationCommandOutput
} from "../commands/GetRightsizingRecommendationCommand";
import {
  GetSavingsPlansCoverageCommandInput,
  GetSavingsPlansCoverageCommandOutput
} from "../commands/GetSavingsPlansCoverageCommand";
import {
  GetSavingsPlansPurchaseRecommendationCommandInput,
  GetSavingsPlansPurchaseRecommendationCommandOutput
} from "../commands/GetSavingsPlansPurchaseRecommendationCommand";
import {
  GetSavingsPlansUtilizationCommandInput,
  GetSavingsPlansUtilizationCommandOutput
} from "../commands/GetSavingsPlansUtilizationCommand";
import {
  GetSavingsPlansUtilizationDetailsCommandInput,
  GetSavingsPlansUtilizationDetailsCommandOutput
} from "../commands/GetSavingsPlansUtilizationDetailsCommand";
import {
  GetTagsCommandInput,
  GetTagsCommandOutput
} from "../commands/GetTagsCommand";
import {
  GetUsageForecastCommandInput,
  GetUsageForecastCommandOutput
} from "../commands/GetUsageForecastCommand";
import {
  ListCostCategoryDefinitionsCommandInput,
  ListCostCategoryDefinitionsCommandOutput
} from "../commands/ListCostCategoryDefinitionsCommand";
import {
  UpdateCostCategoryDefinitionCommandInput,
  UpdateCostCategoryDefinitionCommandOutput
} from "../commands/UpdateCostCategoryDefinitionCommand";
import {
  BillExpirationException,
  CostCategory,
  CostCategoryReference,
  CostCategoryRule,
  CostCategoryValues,
  Coverage,
  CoverageByTime,
  CoverageCost,
  CoverageHours,
  CoverageNormalizedUnits,
  CreateCostCategoryDefinitionRequest,
  CreateCostCategoryDefinitionResponse,
  CurrentInstance,
  DataUnavailableException,
  DateInterval,
  DeleteCostCategoryDefinitionRequest,
  DeleteCostCategoryDefinitionResponse,
  DescribeCostCategoryDefinitionRequest,
  DescribeCostCategoryDefinitionResponse,
  DimensionValues,
  DimensionValuesWithAttributes,
  EC2InstanceDetails,
  EC2ResourceDetails,
  EC2ResourceUtilization,
  EC2Specification,
  ESInstanceDetails,
  ElastiCacheInstanceDetails,
  Expression,
  ForecastResult,
  GetCostAndUsageRequest,
  GetCostAndUsageResponse,
  GetCostAndUsageWithResourcesRequest,
  GetCostAndUsageWithResourcesResponse,
  GetCostForecastRequest,
  GetCostForecastResponse,
  GetDimensionValuesRequest,
  GetDimensionValuesResponse,
  GetReservationCoverageRequest,
  GetReservationCoverageResponse,
  GetReservationPurchaseRecommendationRequest,
  GetReservationPurchaseRecommendationResponse,
  GetReservationUtilizationRequest,
  GetReservationUtilizationResponse,
  GetRightsizingRecommendationRequest,
  GetRightsizingRecommendationResponse,
  GetSavingsPlansCoverageRequest,
  GetSavingsPlansCoverageResponse,
  GetSavingsPlansPurchaseRecommendationRequest,
  GetSavingsPlansPurchaseRecommendationResponse,
  GetSavingsPlansUtilizationDetailsRequest,
  GetSavingsPlansUtilizationDetailsResponse,
  GetSavingsPlansUtilizationRequest,
  GetSavingsPlansUtilizationResponse,
  GetTagsRequest,
  GetTagsResponse,
  GetUsageForecastRequest,
  GetUsageForecastResponse,
  Group,
  GroupDefinition,
  InstanceDetails,
  InvalidNextTokenException,
  LimitExceededException,
  ListCostCategoryDefinitionsRequest,
  ListCostCategoryDefinitionsResponse,
  MetricValue,
  ModifyRecommendationDetail,
  RDSInstanceDetails,
  RedshiftInstanceDetails,
  RequestChangedException,
  ReservationAggregates,
  ReservationCoverageGroup,
  ReservationPurchaseRecommendation,
  ReservationPurchaseRecommendationDetail,
  ReservationPurchaseRecommendationMetadata,
  ReservationPurchaseRecommendationSummary,
  ReservationUtilizationGroup,
  ResourceDetails,
  ResourceNotFoundException,
  ResourceUtilization,
  ResultByTime,
  RightsizingRecommendation,
  RightsizingRecommendationMetadata,
  RightsizingRecommendationSummary,
  SavingsPlansAmortizedCommitment,
  SavingsPlansCoverage,
  SavingsPlansCoverageData,
  SavingsPlansDetails,
  SavingsPlansPurchaseRecommendation,
  SavingsPlansPurchaseRecommendationDetail,
  SavingsPlansPurchaseRecommendationMetadata,
  SavingsPlansPurchaseRecommendationSummary,
  SavingsPlansSavings,
  SavingsPlansUtilization,
  SavingsPlansUtilizationAggregates,
  SavingsPlansUtilizationByTime,
  SavingsPlansUtilizationDetail,
  ServiceQuotaExceededException,
  ServiceSpecification,
  TagValues,
  TargetInstance,
  TerminateRecommendationDetail,
  UnresolvableUsageUnitException,
  UpdateCostCategoryDefinitionRequest,
  UpdateCostCategoryDefinitionResponse,
  UtilizationByTime
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

export const serializeAws_json1_1CreateCostCategoryDefinitionCommand = async (
  input: CreateCostCategoryDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSInsightsIndexService.CreateCostCategoryDefinition"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateCostCategoryDefinitionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteCostCategoryDefinitionCommand = async (
  input: DeleteCostCategoryDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSInsightsIndexService.DeleteCostCategoryDefinition"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteCostCategoryDefinitionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeCostCategoryDefinitionCommand = async (
  input: DescribeCostCategoryDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSInsightsIndexService.DescribeCostCategoryDefinition"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeCostCategoryDefinitionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCostAndUsageCommand = async (
  input: GetCostAndUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSInsightsIndexService.GetCostAndUsage"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetCostAndUsageRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCostAndUsageWithResourcesCommand = async (
  input: GetCostAndUsageWithResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSInsightsIndexService.GetCostAndUsageWithResources"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetCostAndUsageWithResourcesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCostForecastCommand = async (
  input: GetCostForecastCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSInsightsIndexService.GetCostForecast"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetCostForecastRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDimensionValuesCommand = async (
  input: GetDimensionValuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSInsightsIndexService.GetDimensionValues"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetDimensionValuesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetReservationCoverageCommand = async (
  input: GetReservationCoverageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSInsightsIndexService.GetReservationCoverage"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetReservationCoverageRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetReservationPurchaseRecommendationCommand = async (
  input: GetReservationPurchaseRecommendationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "AWSInsightsIndexService.GetReservationPurchaseRecommendation"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetReservationPurchaseRecommendationRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetReservationUtilizationCommand = async (
  input: GetReservationUtilizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSInsightsIndexService.GetReservationUtilization"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetReservationUtilizationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRightsizingRecommendationCommand = async (
  input: GetRightsizingRecommendationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSInsightsIndexService.GetRightsizingRecommendation"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetRightsizingRecommendationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSavingsPlansCoverageCommand = async (
  input: GetSavingsPlansCoverageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSInsightsIndexService.GetSavingsPlansCoverage"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetSavingsPlansCoverageRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommand = async (
  input: GetSavingsPlansPurchaseRecommendationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetSavingsPlansPurchaseRecommendationRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSavingsPlansUtilizationCommand = async (
  input: GetSavingsPlansUtilizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSInsightsIndexService.GetSavingsPlansUtilization"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetSavingsPlansUtilizationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSavingsPlansUtilizationDetailsCommand = async (
  input: GetSavingsPlansUtilizationDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSInsightsIndexService.GetSavingsPlansUtilizationDetails"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetSavingsPlansUtilizationDetailsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetTagsCommand = async (
  input: GetTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSInsightsIndexService.GetTags"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetUsageForecastCommand = async (
  input: GetUsageForecastCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSInsightsIndexService.GetUsageForecast"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetUsageForecastRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListCostCategoryDefinitionsCommand = async (
  input: ListCostCategoryDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSInsightsIndexService.ListCostCategoryDefinitions"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListCostCategoryDefinitionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateCostCategoryDefinitionCommand = async (
  input: UpdateCostCategoryDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSInsightsIndexService.UpdateCostCategoryDefinition"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateCostCategoryDefinitionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CreateCostCategoryDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCostCategoryDefinitionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateCostCategoryDefinitionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateCostCategoryDefinitionResponse(
    data,
    context
  );
  const response: CreateCostCategoryDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateCostCategoryDefinitionResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateCostCategoryDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCostCategoryDefinitionCommandOutput> => {
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
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.costexplorer#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(
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

export const deserializeAws_json1_1DeleteCostCategoryDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCostCategoryDefinitionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteCostCategoryDefinitionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteCostCategoryDefinitionResponse(
    data,
    context
  );
  const response: DeleteCostCategoryDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteCostCategoryDefinitionResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteCostCategoryDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCostCategoryDefinitionCommandOutput> => {
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
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.costexplorer#ResourceNotFoundException":
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

export const deserializeAws_json1_1DescribeCostCategoryDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCostCategoryDefinitionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeCostCategoryDefinitionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCostCategoryDefinitionResponse(
    data,
    context
  );
  const response: DescribeCostCategoryDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeCostCategoryDefinitionResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeCostCategoryDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCostCategoryDefinitionCommandOutput> => {
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
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.costexplorer#ResourceNotFoundException":
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

export const deserializeAws_json1_1GetCostAndUsageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCostAndUsageCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetCostAndUsageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCostAndUsageResponse(data, context);
  const response: GetCostAndUsageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCostAndUsageResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCostAndUsageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCostAndUsageCommandOutput> => {
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
    case "BillExpirationException":
    case "com.amazonaws.costexplorer#BillExpirationException":
      response = {
        ...(await deserializeAws_json1_1BillExpirationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DataUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestChangedException":
    case "com.amazonaws.costexplorer#RequestChangedException":
      response = {
        ...(await deserializeAws_json1_1RequestChangedExceptionResponse(
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

export const deserializeAws_json1_1GetCostAndUsageWithResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCostAndUsageWithResourcesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetCostAndUsageWithResourcesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCostAndUsageWithResourcesResponse(
    data,
    context
  );
  const response: GetCostAndUsageWithResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCostAndUsageWithResourcesResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCostAndUsageWithResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCostAndUsageWithResourcesCommandOutput> => {
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
    case "BillExpirationException":
    case "com.amazonaws.costexplorer#BillExpirationException":
      response = {
        ...(await deserializeAws_json1_1BillExpirationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DataUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestChangedException":
    case "com.amazonaws.costexplorer#RequestChangedException":
      response = {
        ...(await deserializeAws_json1_1RequestChangedExceptionResponse(
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

export const deserializeAws_json1_1GetCostForecastCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCostForecastCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetCostForecastCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCostForecastResponse(data, context);
  const response: GetCostForecastCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCostForecastResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCostForecastCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCostForecastCommandOutput> => {
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
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DataUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
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

export const deserializeAws_json1_1GetDimensionValuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDimensionValuesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDimensionValuesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDimensionValuesResponse(data, context);
  const response: GetDimensionValuesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDimensionValuesResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDimensionValuesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDimensionValuesCommandOutput> => {
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
    case "BillExpirationException":
    case "com.amazonaws.costexplorer#BillExpirationException":
      response = {
        ...(await deserializeAws_json1_1BillExpirationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DataUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestChangedException":
    case "com.amazonaws.costexplorer#RequestChangedException":
      response = {
        ...(await deserializeAws_json1_1RequestChangedExceptionResponse(
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

export const deserializeAws_json1_1GetReservationCoverageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReservationCoverageCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetReservationCoverageCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetReservationCoverageResponse(
    data,
    context
  );
  const response: GetReservationCoverageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetReservationCoverageResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetReservationCoverageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReservationCoverageCommandOutput> => {
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
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DataUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
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

export const deserializeAws_json1_1GetReservationPurchaseRecommendationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReservationPurchaseRecommendationCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetReservationPurchaseRecommendationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetReservationPurchaseRecommendationResponse(
    data,
    context
  );
  const response: GetReservationPurchaseRecommendationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetReservationPurchaseRecommendationResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetReservationPurchaseRecommendationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReservationPurchaseRecommendationCommandOutput> => {
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
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DataUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
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

export const deserializeAws_json1_1GetReservationUtilizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReservationUtilizationCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetReservationUtilizationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetReservationUtilizationResponse(
    data,
    context
  );
  const response: GetReservationUtilizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetReservationUtilizationResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetReservationUtilizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReservationUtilizationCommandOutput> => {
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
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DataUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
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

export const deserializeAws_json1_1GetRightsizingRecommendationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRightsizingRecommendationCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetRightsizingRecommendationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRightsizingRecommendationResponse(
    data,
    context
  );
  const response: GetRightsizingRecommendationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRightsizingRecommendationResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRightsizingRecommendationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRightsizingRecommendationCommandOutput> => {
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
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
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

export const deserializeAws_json1_1GetSavingsPlansCoverageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSavingsPlansCoverageCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetSavingsPlansCoverageCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSavingsPlansCoverageResponse(
    data,
    context
  );
  const response: GetSavingsPlansCoverageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSavingsPlansCoverageResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSavingsPlansCoverageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSavingsPlansCoverageCommandOutput> => {
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
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DataUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
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

export const deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSavingsPlansPurchaseRecommendationCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationResponse(
    data,
    context
  );
  const response: GetSavingsPlansPurchaseRecommendationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSavingsPlansPurchaseRecommendationResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSavingsPlansPurchaseRecommendationCommandOutput> => {
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
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
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

export const deserializeAws_json1_1GetSavingsPlansUtilizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSavingsPlansUtilizationCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetSavingsPlansUtilizationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSavingsPlansUtilizationResponse(
    data,
    context
  );
  const response: GetSavingsPlansUtilizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSavingsPlansUtilizationResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSavingsPlansUtilizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSavingsPlansUtilizationCommandOutput> => {
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
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DataUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
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

export const deserializeAws_json1_1GetSavingsPlansUtilizationDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSavingsPlansUtilizationDetailsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetSavingsPlansUtilizationDetailsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSavingsPlansUtilizationDetailsResponse(
    data,
    context
  );
  const response: GetSavingsPlansUtilizationDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSavingsPlansUtilizationDetailsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSavingsPlansUtilizationDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSavingsPlansUtilizationDetailsCommandOutput> => {
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
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DataUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
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

export const deserializeAws_json1_1GetTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTagsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTagsResponse(data, context);
  const response: GetTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetTagsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTagsCommandOutput> => {
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
    case "BillExpirationException":
    case "com.amazonaws.costexplorer#BillExpirationException":
      response = {
        ...(await deserializeAws_json1_1BillExpirationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DataUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.costexplorer#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestChangedException":
    case "com.amazonaws.costexplorer#RequestChangedException":
      response = {
        ...(await deserializeAws_json1_1RequestChangedExceptionResponse(
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

export const deserializeAws_json1_1GetUsageForecastCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUsageForecastCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetUsageForecastCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetUsageForecastResponse(data, context);
  const response: GetUsageForecastCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetUsageForecastResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetUsageForecastCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUsageForecastCommandOutput> => {
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
    case "DataUnavailableException":
    case "com.amazonaws.costexplorer#DataUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DataUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnresolvableUsageUnitException":
    case "com.amazonaws.costexplorer#UnresolvableUsageUnitException":
      response = {
        ...(await deserializeAws_json1_1UnresolvableUsageUnitExceptionResponse(
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

export const deserializeAws_json1_1ListCostCategoryDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCostCategoryDefinitionsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListCostCategoryDefinitionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCostCategoryDefinitionsResponse(
    data,
    context
  );
  const response: ListCostCategoryDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListCostCategoryDefinitionsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListCostCategoryDefinitionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCostCategoryDefinitionsCommandOutput> => {
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
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
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

export const deserializeAws_json1_1UpdateCostCategoryDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCostCategoryDefinitionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateCostCategoryDefinitionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateCostCategoryDefinitionResponse(
    data,
    context
  );
  const response: UpdateCostCategoryDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateCostCategoryDefinitionResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateCostCategoryDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCostCategoryDefinitionCommandOutput> => {
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
    case "LimitExceededException":
    case "com.amazonaws.costexplorer#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.costexplorer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.costexplorer#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(
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

const deserializeAws_json1_1BillExpirationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BillExpirationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BillExpirationException(
    body,
    context
  );
  const contents: BillExpirationException = {
    name: "BillExpirationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DataUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DataUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DataUnavailableException(
    body,
    context
  );
  const contents: DataUnavailableException = {
    name: "DataUnavailableException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidNextTokenException(
    body,
    context
  );
  const contents: InvalidNextTokenException = {
    name: "InvalidNextTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(
    body,
    context
  );
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1RequestChangedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestChangedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RequestChangedException(
    body,
    context
  );
  const contents: RequestChangedException = {
    name: "RequestChangedException",
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

const deserializeAws_json1_1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceQuotaExceededException(
    body,
    context
  );
  const contents: ServiceQuotaExceededException = {
    name: "ServiceQuotaExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1UnresolvableUsageUnitExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnresolvableUsageUnitException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnresolvableUsageUnitException(
    body,
    context
  );
  const contents: UnresolvableUsageUnitException = {
    name: "UnresolvableUsageUnitException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1CostCategoryRule = (
  input: CostCategoryRule,
  context: __SerdeContext
): any => {
  return {
    ...(input.Rule !== undefined && {
      Rule: serializeAws_json1_1Expression(input.Rule, context)
    }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_json1_1CostCategoryRulesList = (
  input: CostCategoryRule[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1CostCategoryRule(entry, context)
  );
};

const serializeAws_json1_1CostCategoryValues = (
  input: CostCategoryValues,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Values !== undefined && {
      Values: serializeAws_json1_1Values(input.Values, context)
    })
  };
};

const serializeAws_json1_1CreateCostCategoryDefinitionRequest = (
  input: CreateCostCategoryDefinitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.RuleVersion !== undefined && { RuleVersion: input.RuleVersion }),
    ...(input.Rules !== undefined && {
      Rules: serializeAws_json1_1CostCategoryRulesList(input.Rules, context)
    })
  };
};

const serializeAws_json1_1DateInterval = (
  input: DateInterval,
  context: __SerdeContext
): any => {
  return {
    ...(input.End !== undefined && { End: input.End }),
    ...(input.Start !== undefined && { Start: input.Start })
  };
};

const serializeAws_json1_1DeleteCostCategoryDefinitionRequest = (
  input: DeleteCostCategoryDefinitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CostCategoryArn !== undefined && {
      CostCategoryArn: input.CostCategoryArn
    })
  };
};

const serializeAws_json1_1DescribeCostCategoryDefinitionRequest = (
  input: DescribeCostCategoryDefinitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CostCategoryArn !== undefined && {
      CostCategoryArn: input.CostCategoryArn
    }),
    ...(input.EffectiveOn !== undefined && { EffectiveOn: input.EffectiveOn })
  };
};

const serializeAws_json1_1DimensionValues = (
  input: DimensionValues,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Values !== undefined && {
      Values: serializeAws_json1_1Values(input.Values, context)
    })
  };
};

const serializeAws_json1_1EC2Specification = (
  input: EC2Specification,
  context: __SerdeContext
): any => {
  return {
    ...(input.OfferingClass !== undefined && {
      OfferingClass: input.OfferingClass
    })
  };
};

const serializeAws_json1_1Expression = (
  input: Expression,
  context: __SerdeContext
): any => {
  return {
    ...(input.And !== undefined && {
      And: serializeAws_json1_1Expressions(input.And, context)
    }),
    ...(input.CostCategories !== undefined && {
      CostCategories: serializeAws_json1_1CostCategoryValues(
        input.CostCategories,
        context
      )
    }),
    ...(input.Dimensions !== undefined && {
      Dimensions: serializeAws_json1_1DimensionValues(input.Dimensions, context)
    }),
    ...(input.Not !== undefined && {
      Not: serializeAws_json1_1Expression(input.Not, context)
    }),
    ...(input.Or !== undefined && {
      Or: serializeAws_json1_1Expressions(input.Or, context)
    }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1TagValues(input.Tags, context)
    })
  };
};

const serializeAws_json1_1Expressions = (
  input: Expression[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Expression(entry, context));
};

const serializeAws_json1_1GetCostAndUsageRequest = (
  input: GetCostAndUsageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter !== undefined && {
      Filter: serializeAws_json1_1Expression(input.Filter, context)
    }),
    ...(input.Granularity !== undefined && { Granularity: input.Granularity }),
    ...(input.GroupBy !== undefined && {
      GroupBy: serializeAws_json1_1GroupDefinitions(input.GroupBy, context)
    }),
    ...(input.Metrics !== undefined && {
      Metrics: serializeAws_json1_1MetricNames(input.Metrics, context)
    }),
    ...(input.NextPageToken !== undefined && {
      NextPageToken: input.NextPageToken
    }),
    ...(input.TimePeriod !== undefined && {
      TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context)
    })
  };
};

const serializeAws_json1_1GetCostAndUsageWithResourcesRequest = (
  input: GetCostAndUsageWithResourcesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter !== undefined && {
      Filter: serializeAws_json1_1Expression(input.Filter, context)
    }),
    ...(input.Granularity !== undefined && { Granularity: input.Granularity }),
    ...(input.GroupBy !== undefined && {
      GroupBy: serializeAws_json1_1GroupDefinitions(input.GroupBy, context)
    }),
    ...(input.Metrics !== undefined && {
      Metrics: serializeAws_json1_1MetricNames(input.Metrics, context)
    }),
    ...(input.NextPageToken !== undefined && {
      NextPageToken: input.NextPageToken
    }),
    ...(input.TimePeriod !== undefined && {
      TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context)
    })
  };
};

const serializeAws_json1_1GetCostForecastRequest = (
  input: GetCostForecastRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter !== undefined && {
      Filter: serializeAws_json1_1Expression(input.Filter, context)
    }),
    ...(input.Granularity !== undefined && { Granularity: input.Granularity }),
    ...(input.Metric !== undefined && { Metric: input.Metric }),
    ...(input.PredictionIntervalLevel !== undefined && {
      PredictionIntervalLevel: input.PredictionIntervalLevel
    }),
    ...(input.TimePeriod !== undefined && {
      TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context)
    })
  };
};

const serializeAws_json1_1GetDimensionValuesRequest = (
  input: GetDimensionValuesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Context !== undefined && { Context: input.Context }),
    ...(input.Dimension !== undefined && { Dimension: input.Dimension }),
    ...(input.NextPageToken !== undefined && {
      NextPageToken: input.NextPageToken
    }),
    ...(input.SearchString !== undefined && {
      SearchString: input.SearchString
    }),
    ...(input.TimePeriod !== undefined && {
      TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context)
    })
  };
};

const serializeAws_json1_1GetReservationCoverageRequest = (
  input: GetReservationCoverageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter !== undefined && {
      Filter: serializeAws_json1_1Expression(input.Filter, context)
    }),
    ...(input.Granularity !== undefined && { Granularity: input.Granularity }),
    ...(input.GroupBy !== undefined && {
      GroupBy: serializeAws_json1_1GroupDefinitions(input.GroupBy, context)
    }),
    ...(input.Metrics !== undefined && {
      Metrics: serializeAws_json1_1MetricNames(input.Metrics, context)
    }),
    ...(input.NextPageToken !== undefined && {
      NextPageToken: input.NextPageToken
    }),
    ...(input.TimePeriod !== undefined && {
      TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context)
    })
  };
};

const serializeAws_json1_1GetReservationPurchaseRecommendationRequest = (
  input: GetReservationPurchaseRecommendationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId !== undefined && { AccountId: input.AccountId }),
    ...(input.AccountScope !== undefined && {
      AccountScope: input.AccountScope
    }),
    ...(input.LookbackPeriodInDays !== undefined && {
      LookbackPeriodInDays: input.LookbackPeriodInDays
    }),
    ...(input.NextPageToken !== undefined && {
      NextPageToken: input.NextPageToken
    }),
    ...(input.PageSize !== undefined && { PageSize: input.PageSize }),
    ...(input.PaymentOption !== undefined && {
      PaymentOption: input.PaymentOption
    }),
    ...(input.Service !== undefined && { Service: input.Service }),
    ...(input.ServiceSpecification !== undefined && {
      ServiceSpecification: serializeAws_json1_1ServiceSpecification(
        input.ServiceSpecification,
        context
      )
    }),
    ...(input.TermInYears !== undefined && { TermInYears: input.TermInYears })
  };
};

const serializeAws_json1_1GetReservationUtilizationRequest = (
  input: GetReservationUtilizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter !== undefined && {
      Filter: serializeAws_json1_1Expression(input.Filter, context)
    }),
    ...(input.Granularity !== undefined && { Granularity: input.Granularity }),
    ...(input.GroupBy !== undefined && {
      GroupBy: serializeAws_json1_1GroupDefinitions(input.GroupBy, context)
    }),
    ...(input.NextPageToken !== undefined && {
      NextPageToken: input.NextPageToken
    }),
    ...(input.TimePeriod !== undefined && {
      TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context)
    })
  };
};

const serializeAws_json1_1GetRightsizingRecommendationRequest = (
  input: GetRightsizingRecommendationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter !== undefined && {
      Filter: serializeAws_json1_1Expression(input.Filter, context)
    }),
    ...(input.NextPageToken !== undefined && {
      NextPageToken: input.NextPageToken
    }),
    ...(input.PageSize !== undefined && { PageSize: input.PageSize }),
    ...(input.Service !== undefined && { Service: input.Service })
  };
};

const serializeAws_json1_1GetSavingsPlansCoverageRequest = (
  input: GetSavingsPlansCoverageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter !== undefined && {
      Filter: serializeAws_json1_1Expression(input.Filter, context)
    }),
    ...(input.Granularity !== undefined && { Granularity: input.Granularity }),
    ...(input.GroupBy !== undefined && {
      GroupBy: serializeAws_json1_1GroupDefinitions(input.GroupBy, context)
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.Metrics !== undefined && {
      Metrics: serializeAws_json1_1MetricNames(input.Metrics, context)
    }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.TimePeriod !== undefined && {
      TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context)
    })
  };
};

const serializeAws_json1_1GetSavingsPlansPurchaseRecommendationRequest = (
  input: GetSavingsPlansPurchaseRecommendationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LookbackPeriodInDays !== undefined && {
      LookbackPeriodInDays: input.LookbackPeriodInDays
    }),
    ...(input.NextPageToken !== undefined && {
      NextPageToken: input.NextPageToken
    }),
    ...(input.PageSize !== undefined && { PageSize: input.PageSize }),
    ...(input.PaymentOption !== undefined && {
      PaymentOption: input.PaymentOption
    }),
    ...(input.SavingsPlansType !== undefined && {
      SavingsPlansType: input.SavingsPlansType
    }),
    ...(input.TermInYears !== undefined && { TermInYears: input.TermInYears })
  };
};

const serializeAws_json1_1GetSavingsPlansUtilizationDetailsRequest = (
  input: GetSavingsPlansUtilizationDetailsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter !== undefined && {
      Filter: serializeAws_json1_1Expression(input.Filter, context)
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.TimePeriod !== undefined && {
      TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context)
    })
  };
};

const serializeAws_json1_1GetSavingsPlansUtilizationRequest = (
  input: GetSavingsPlansUtilizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter !== undefined && {
      Filter: serializeAws_json1_1Expression(input.Filter, context)
    }),
    ...(input.Granularity !== undefined && { Granularity: input.Granularity }),
    ...(input.TimePeriod !== undefined && {
      TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context)
    })
  };
};

const serializeAws_json1_1GetTagsRequest = (
  input: GetTagsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.NextPageToken !== undefined && {
      NextPageToken: input.NextPageToken
    }),
    ...(input.SearchString !== undefined && {
      SearchString: input.SearchString
    }),
    ...(input.TagKey !== undefined && { TagKey: input.TagKey }),
    ...(input.TimePeriod !== undefined && {
      TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context)
    })
  };
};

const serializeAws_json1_1GetUsageForecastRequest = (
  input: GetUsageForecastRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter !== undefined && {
      Filter: serializeAws_json1_1Expression(input.Filter, context)
    }),
    ...(input.Granularity !== undefined && { Granularity: input.Granularity }),
    ...(input.Metric !== undefined && { Metric: input.Metric }),
    ...(input.PredictionIntervalLevel !== undefined && {
      PredictionIntervalLevel: input.PredictionIntervalLevel
    }),
    ...(input.TimePeriod !== undefined && {
      TimePeriod: serializeAws_json1_1DateInterval(input.TimePeriod, context)
    })
  };
};

const serializeAws_json1_1GroupDefinition = (
  input: GroupDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Type !== undefined && { Type: input.Type })
  };
};

const serializeAws_json1_1GroupDefinitions = (
  input: GroupDefinition[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1GroupDefinition(entry, context)
  );
};

const serializeAws_json1_1ListCostCategoryDefinitionsRequest = (
  input: ListCostCategoryDefinitionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EffectiveOn !== undefined && { EffectiveOn: input.EffectiveOn }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1MetricNames = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1ServiceSpecification = (
  input: ServiceSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.EC2Specification !== undefined && {
      EC2Specification: serializeAws_json1_1EC2Specification(
        input.EC2Specification,
        context
      )
    })
  };
};

const serializeAws_json1_1TagValues = (
  input: TagValues,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Values !== undefined && {
      Values: serializeAws_json1_1Values(input.Values, context)
    })
  };
};

const serializeAws_json1_1UpdateCostCategoryDefinitionRequest = (
  input: UpdateCostCategoryDefinitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CostCategoryArn !== undefined && {
      CostCategoryArn: input.CostCategoryArn
    }),
    ...(input.RuleVersion !== undefined && { RuleVersion: input.RuleVersion }),
    ...(input.Rules !== undefined && {
      Rules: serializeAws_json1_1CostCategoryRulesList(input.Rules, context)
    })
  };
};

const serializeAws_json1_1Values = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const deserializeAws_json1_1Attributes = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_json1_1BillExpirationException = (
  output: any,
  context: __SerdeContext
): BillExpirationException => {
  return {
    __type: "BillExpirationException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1CostCategory = (
  output: any,
  context: __SerdeContext
): CostCategory => {
  return {
    __type: "CostCategory",
    CostCategoryArn:
      output.CostCategoryArn !== undefined && output.CostCategoryArn !== null
        ? output.CostCategoryArn
        : undefined,
    EffectiveEnd:
      output.EffectiveEnd !== undefined && output.EffectiveEnd !== null
        ? output.EffectiveEnd
        : undefined,
    EffectiveStart:
      output.EffectiveStart !== undefined && output.EffectiveStart !== null
        ? output.EffectiveStart
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    RuleVersion:
      output.RuleVersion !== undefined && output.RuleVersion !== null
        ? output.RuleVersion
        : undefined,
    Rules:
      output.Rules !== undefined && output.Rules !== null
        ? deserializeAws_json1_1CostCategoryRulesList(output.Rules, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1CostCategoryReference = (
  output: any,
  context: __SerdeContext
): CostCategoryReference => {
  return {
    __type: "CostCategoryReference",
    CostCategoryArn:
      output.CostCategoryArn !== undefined && output.CostCategoryArn !== null
        ? output.CostCategoryArn
        : undefined,
    EffectiveEnd:
      output.EffectiveEnd !== undefined && output.EffectiveEnd !== null
        ? output.EffectiveEnd
        : undefined,
    EffectiveStart:
      output.EffectiveStart !== undefined && output.EffectiveStart !== null
        ? output.EffectiveStart
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined
  } as any;
};

const deserializeAws_json1_1CostCategoryReferencesList = (
  output: any,
  context: __SerdeContext
): CostCategoryReference[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CostCategoryReference(entry, context)
  );
};

const deserializeAws_json1_1CostCategoryRule = (
  output: any,
  context: __SerdeContext
): CostCategoryRule => {
  return {
    __type: "CostCategoryRule",
    Rule:
      output.Rule !== undefined && output.Rule !== null
        ? deserializeAws_json1_1Expression(output.Rule, context)
        : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_json1_1CostCategoryRulesList = (
  output: any,
  context: __SerdeContext
): CostCategoryRule[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CostCategoryRule(entry, context)
  );
};

const deserializeAws_json1_1CostCategoryValues = (
  output: any,
  context: __SerdeContext
): CostCategoryValues => {
  return {
    __type: "CostCategoryValues",
    Key:
      output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Values:
      output.Values !== undefined && output.Values !== null
        ? deserializeAws_json1_1Values(output.Values, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1Coverage = (
  output: any,
  context: __SerdeContext
): Coverage => {
  return {
    __type: "Coverage",
    CoverageCost:
      output.CoverageCost !== undefined && output.CoverageCost !== null
        ? deserializeAws_json1_1CoverageCost(output.CoverageCost, context)
        : undefined,
    CoverageHours:
      output.CoverageHours !== undefined && output.CoverageHours !== null
        ? deserializeAws_json1_1CoverageHours(output.CoverageHours, context)
        : undefined,
    CoverageNormalizedUnits:
      output.CoverageNormalizedUnits !== undefined &&
      output.CoverageNormalizedUnits !== null
        ? deserializeAws_json1_1CoverageNormalizedUnits(
            output.CoverageNormalizedUnits,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1CoverageByTime = (
  output: any,
  context: __SerdeContext
): CoverageByTime => {
  return {
    __type: "CoverageByTime",
    Groups:
      output.Groups !== undefined && output.Groups !== null
        ? deserializeAws_json1_1ReservationCoverageGroups(
            output.Groups,
            context
          )
        : undefined,
    TimePeriod:
      output.TimePeriod !== undefined && output.TimePeriod !== null
        ? deserializeAws_json1_1DateInterval(output.TimePeriod, context)
        : undefined,
    Total:
      output.Total !== undefined && output.Total !== null
        ? deserializeAws_json1_1Coverage(output.Total, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1CoverageCost = (
  output: any,
  context: __SerdeContext
): CoverageCost => {
  return {
    __type: "CoverageCost",
    OnDemandCost:
      output.OnDemandCost !== undefined && output.OnDemandCost !== null
        ? output.OnDemandCost
        : undefined
  } as any;
};

const deserializeAws_json1_1CoverageHours = (
  output: any,
  context: __SerdeContext
): CoverageHours => {
  return {
    __type: "CoverageHours",
    CoverageHoursPercentage:
      output.CoverageHoursPercentage !== undefined &&
      output.CoverageHoursPercentage !== null
        ? output.CoverageHoursPercentage
        : undefined,
    OnDemandHours:
      output.OnDemandHours !== undefined && output.OnDemandHours !== null
        ? output.OnDemandHours
        : undefined,
    ReservedHours:
      output.ReservedHours !== undefined && output.ReservedHours !== null
        ? output.ReservedHours
        : undefined,
    TotalRunningHours:
      output.TotalRunningHours !== undefined &&
      output.TotalRunningHours !== null
        ? output.TotalRunningHours
        : undefined
  } as any;
};

const deserializeAws_json1_1CoverageNormalizedUnits = (
  output: any,
  context: __SerdeContext
): CoverageNormalizedUnits => {
  return {
    __type: "CoverageNormalizedUnits",
    CoverageNormalizedUnitsPercentage:
      output.CoverageNormalizedUnitsPercentage !== undefined &&
      output.CoverageNormalizedUnitsPercentage !== null
        ? output.CoverageNormalizedUnitsPercentage
        : undefined,
    OnDemandNormalizedUnits:
      output.OnDemandNormalizedUnits !== undefined &&
      output.OnDemandNormalizedUnits !== null
        ? output.OnDemandNormalizedUnits
        : undefined,
    ReservedNormalizedUnits:
      output.ReservedNormalizedUnits !== undefined &&
      output.ReservedNormalizedUnits !== null
        ? output.ReservedNormalizedUnits
        : undefined,
    TotalRunningNormalizedUnits:
      output.TotalRunningNormalizedUnits !== undefined &&
      output.TotalRunningNormalizedUnits !== null
        ? output.TotalRunningNormalizedUnits
        : undefined
  } as any;
};

const deserializeAws_json1_1CoveragesByTime = (
  output: any,
  context: __SerdeContext
): CoverageByTime[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CoverageByTime(entry, context)
  );
};

const deserializeAws_json1_1CreateCostCategoryDefinitionResponse = (
  output: any,
  context: __SerdeContext
): CreateCostCategoryDefinitionResponse => {
  return {
    __type: "CreateCostCategoryDefinitionResponse",
    CostCategoryArn:
      output.CostCategoryArn !== undefined && output.CostCategoryArn !== null
        ? output.CostCategoryArn
        : undefined,
    EffectiveStart:
      output.EffectiveStart !== undefined && output.EffectiveStart !== null
        ? output.EffectiveStart
        : undefined
  } as any;
};

const deserializeAws_json1_1CurrentInstance = (
  output: any,
  context: __SerdeContext
): CurrentInstance => {
  return {
    __type: "CurrentInstance",
    CurrencyCode:
      output.CurrencyCode !== undefined && output.CurrencyCode !== null
        ? output.CurrencyCode
        : undefined,
    MonthlyCost:
      output.MonthlyCost !== undefined && output.MonthlyCost !== null
        ? output.MonthlyCost
        : undefined,
    OnDemandHoursInLookbackPeriod:
      output.OnDemandHoursInLookbackPeriod !== undefined &&
      output.OnDemandHoursInLookbackPeriod !== null
        ? output.OnDemandHoursInLookbackPeriod
        : undefined,
    ReservationCoveredHoursInLookbackPeriod:
      output.ReservationCoveredHoursInLookbackPeriod !== undefined &&
      output.ReservationCoveredHoursInLookbackPeriod !== null
        ? output.ReservationCoveredHoursInLookbackPeriod
        : undefined,
    ResourceDetails:
      output.ResourceDetails !== undefined && output.ResourceDetails !== null
        ? deserializeAws_json1_1ResourceDetails(output.ResourceDetails, context)
        : undefined,
    ResourceId:
      output.ResourceId !== undefined && output.ResourceId !== null
        ? output.ResourceId
        : undefined,
    ResourceUtilization:
      output.ResourceUtilization !== undefined &&
      output.ResourceUtilization !== null
        ? deserializeAws_json1_1ResourceUtilization(
            output.ResourceUtilization,
            context
          )
        : undefined,
    SavingsPlansCoveredHoursInLookbackPeriod:
      output.SavingsPlansCoveredHoursInLookbackPeriod !== undefined &&
      output.SavingsPlansCoveredHoursInLookbackPeriod !== null
        ? output.SavingsPlansCoveredHoursInLookbackPeriod
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagValuesList(output.Tags, context)
        : undefined,
    TotalRunningHoursInLookbackPeriod:
      output.TotalRunningHoursInLookbackPeriod !== undefined &&
      output.TotalRunningHoursInLookbackPeriod !== null
        ? output.TotalRunningHoursInLookbackPeriod
        : undefined
  } as any;
};

const deserializeAws_json1_1DataUnavailableException = (
  output: any,
  context: __SerdeContext
): DataUnavailableException => {
  return {
    __type: "DataUnavailableException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1DateInterval = (
  output: any,
  context: __SerdeContext
): DateInterval => {
  return {
    __type: "DateInterval",
    End:
      output.End !== undefined && output.End !== null ? output.End : undefined,
    Start:
      output.Start !== undefined && output.Start !== null
        ? output.Start
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteCostCategoryDefinitionResponse = (
  output: any,
  context: __SerdeContext
): DeleteCostCategoryDefinitionResponse => {
  return {
    __type: "DeleteCostCategoryDefinitionResponse",
    CostCategoryArn:
      output.CostCategoryArn !== undefined && output.CostCategoryArn !== null
        ? output.CostCategoryArn
        : undefined,
    EffectiveEnd:
      output.EffectiveEnd !== undefined && output.EffectiveEnd !== null
        ? output.EffectiveEnd
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeCostCategoryDefinitionResponse = (
  output: any,
  context: __SerdeContext
): DescribeCostCategoryDefinitionResponse => {
  return {
    __type: "DescribeCostCategoryDefinitionResponse",
    CostCategory:
      output.CostCategory !== undefined && output.CostCategory !== null
        ? deserializeAws_json1_1CostCategory(output.CostCategory, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DimensionValues = (
  output: any,
  context: __SerdeContext
): DimensionValues => {
  return {
    __type: "DimensionValues",
    Key:
      output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Values:
      output.Values !== undefined && output.Values !== null
        ? deserializeAws_json1_1Values(output.Values, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DimensionValuesWithAttributes = (
  output: any,
  context: __SerdeContext
): DimensionValuesWithAttributes => {
  return {
    __type: "DimensionValuesWithAttributes",
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_json1_1Attributes(output.Attributes, context)
        : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_json1_1DimensionValuesWithAttributesList = (
  output: any,
  context: __SerdeContext
): DimensionValuesWithAttributes[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DimensionValuesWithAttributes(entry, context)
  );
};

const deserializeAws_json1_1EC2InstanceDetails = (
  output: any,
  context: __SerdeContext
): EC2InstanceDetails => {
  return {
    __type: "EC2InstanceDetails",
    AvailabilityZone:
      output.AvailabilityZone !== undefined && output.AvailabilityZone !== null
        ? output.AvailabilityZone
        : undefined,
    CurrentGeneration:
      output.CurrentGeneration !== undefined &&
      output.CurrentGeneration !== null
        ? output.CurrentGeneration
        : undefined,
    Family:
      output.Family !== undefined && output.Family !== null
        ? output.Family
        : undefined,
    InstanceType:
      output.InstanceType !== undefined && output.InstanceType !== null
        ? output.InstanceType
        : undefined,
    Platform:
      output.Platform !== undefined && output.Platform !== null
        ? output.Platform
        : undefined,
    Region:
      output.Region !== undefined && output.Region !== null
        ? output.Region
        : undefined,
    SizeFlexEligible:
      output.SizeFlexEligible !== undefined && output.SizeFlexEligible !== null
        ? output.SizeFlexEligible
        : undefined,
    Tenancy:
      output.Tenancy !== undefined && output.Tenancy !== null
        ? output.Tenancy
        : undefined
  } as any;
};

const deserializeAws_json1_1EC2ResourceDetails = (
  output: any,
  context: __SerdeContext
): EC2ResourceDetails => {
  return {
    __type: "EC2ResourceDetails",
    HourlyOnDemandRate:
      output.HourlyOnDemandRate !== undefined &&
      output.HourlyOnDemandRate !== null
        ? output.HourlyOnDemandRate
        : undefined,
    InstanceType:
      output.InstanceType !== undefined && output.InstanceType !== null
        ? output.InstanceType
        : undefined,
    Memory:
      output.Memory !== undefined && output.Memory !== null
        ? output.Memory
        : undefined,
    NetworkPerformance:
      output.NetworkPerformance !== undefined &&
      output.NetworkPerformance !== null
        ? output.NetworkPerformance
        : undefined,
    Platform:
      output.Platform !== undefined && output.Platform !== null
        ? output.Platform
        : undefined,
    Region:
      output.Region !== undefined && output.Region !== null
        ? output.Region
        : undefined,
    Sku:
      output.Sku !== undefined && output.Sku !== null ? output.Sku : undefined,
    Storage:
      output.Storage !== undefined && output.Storage !== null
        ? output.Storage
        : undefined,
    Vcpu:
      output.Vcpu !== undefined && output.Vcpu !== null
        ? output.Vcpu
        : undefined
  } as any;
};

const deserializeAws_json1_1EC2ResourceUtilization = (
  output: any,
  context: __SerdeContext
): EC2ResourceUtilization => {
  return {
    __type: "EC2ResourceUtilization",
    MaxCpuUtilizationPercentage:
      output.MaxCpuUtilizationPercentage !== undefined &&
      output.MaxCpuUtilizationPercentage !== null
        ? output.MaxCpuUtilizationPercentage
        : undefined,
    MaxMemoryUtilizationPercentage:
      output.MaxMemoryUtilizationPercentage !== undefined &&
      output.MaxMemoryUtilizationPercentage !== null
        ? output.MaxMemoryUtilizationPercentage
        : undefined,
    MaxStorageUtilizationPercentage:
      output.MaxStorageUtilizationPercentage !== undefined &&
      output.MaxStorageUtilizationPercentage !== null
        ? output.MaxStorageUtilizationPercentage
        : undefined
  } as any;
};

const deserializeAws_json1_1EC2Specification = (
  output: any,
  context: __SerdeContext
): EC2Specification => {
  return {
    __type: "EC2Specification",
    OfferingClass:
      output.OfferingClass !== undefined && output.OfferingClass !== null
        ? output.OfferingClass
        : undefined
  } as any;
};

const deserializeAws_json1_1ElastiCacheInstanceDetails = (
  output: any,
  context: __SerdeContext
): ElastiCacheInstanceDetails => {
  return {
    __type: "ElastiCacheInstanceDetails",
    CurrentGeneration:
      output.CurrentGeneration !== undefined &&
      output.CurrentGeneration !== null
        ? output.CurrentGeneration
        : undefined,
    Family:
      output.Family !== undefined && output.Family !== null
        ? output.Family
        : undefined,
    NodeType:
      output.NodeType !== undefined && output.NodeType !== null
        ? output.NodeType
        : undefined,
    ProductDescription:
      output.ProductDescription !== undefined &&
      output.ProductDescription !== null
        ? output.ProductDescription
        : undefined,
    Region:
      output.Region !== undefined && output.Region !== null
        ? output.Region
        : undefined,
    SizeFlexEligible:
      output.SizeFlexEligible !== undefined && output.SizeFlexEligible !== null
        ? output.SizeFlexEligible
        : undefined
  } as any;
};

const deserializeAws_json1_1ESInstanceDetails = (
  output: any,
  context: __SerdeContext
): ESInstanceDetails => {
  return {
    __type: "ESInstanceDetails",
    CurrentGeneration:
      output.CurrentGeneration !== undefined &&
      output.CurrentGeneration !== null
        ? output.CurrentGeneration
        : undefined,
    InstanceClass:
      output.InstanceClass !== undefined && output.InstanceClass !== null
        ? output.InstanceClass
        : undefined,
    InstanceSize:
      output.InstanceSize !== undefined && output.InstanceSize !== null
        ? output.InstanceSize
        : undefined,
    Region:
      output.Region !== undefined && output.Region !== null
        ? output.Region
        : undefined,
    SizeFlexEligible:
      output.SizeFlexEligible !== undefined && output.SizeFlexEligible !== null
        ? output.SizeFlexEligible
        : undefined
  } as any;
};

const deserializeAws_json1_1Expression = (
  output: any,
  context: __SerdeContext
): Expression => {
  return {
    __type: "Expression",
    And:
      output.And !== undefined && output.And !== null
        ? deserializeAws_json1_1Expressions(output.And, context)
        : undefined,
    CostCategories:
      output.CostCategories !== undefined && output.CostCategories !== null
        ? deserializeAws_json1_1CostCategoryValues(
            output.CostCategories,
            context
          )
        : undefined,
    Dimensions:
      output.Dimensions !== undefined && output.Dimensions !== null
        ? deserializeAws_json1_1DimensionValues(output.Dimensions, context)
        : undefined,
    Not:
      output.Not !== undefined && output.Not !== null
        ? deserializeAws_json1_1Expression(output.Not, context)
        : undefined,
    Or:
      output.Or !== undefined && output.Or !== null
        ? deserializeAws_json1_1Expressions(output.Or, context)
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagValues(output.Tags, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1Expressions = (
  output: any,
  context: __SerdeContext
): Expression[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Expression(entry, context)
  );
};

const deserializeAws_json1_1ForecastResult = (
  output: any,
  context: __SerdeContext
): ForecastResult => {
  return {
    __type: "ForecastResult",
    MeanValue:
      output.MeanValue !== undefined && output.MeanValue !== null
        ? output.MeanValue
        : undefined,
    PredictionIntervalLowerBound:
      output.PredictionIntervalLowerBound !== undefined &&
      output.PredictionIntervalLowerBound !== null
        ? output.PredictionIntervalLowerBound
        : undefined,
    PredictionIntervalUpperBound:
      output.PredictionIntervalUpperBound !== undefined &&
      output.PredictionIntervalUpperBound !== null
        ? output.PredictionIntervalUpperBound
        : undefined,
    TimePeriod:
      output.TimePeriod !== undefined && output.TimePeriod !== null
        ? deserializeAws_json1_1DateInterval(output.TimePeriod, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ForecastResultsByTime = (
  output: any,
  context: __SerdeContext
): ForecastResult[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ForecastResult(entry, context)
  );
};

const deserializeAws_json1_1GetCostAndUsageResponse = (
  output: any,
  context: __SerdeContext
): GetCostAndUsageResponse => {
  return {
    __type: "GetCostAndUsageResponse",
    GroupDefinitions:
      output.GroupDefinitions !== undefined && output.GroupDefinitions !== null
        ? deserializeAws_json1_1GroupDefinitions(
            output.GroupDefinitions,
            context
          )
        : undefined,
    NextPageToken:
      output.NextPageToken !== undefined && output.NextPageToken !== null
        ? output.NextPageToken
        : undefined,
    ResultsByTime:
      output.ResultsByTime !== undefined && output.ResultsByTime !== null
        ? deserializeAws_json1_1ResultsByTime(output.ResultsByTime, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1GetCostAndUsageWithResourcesResponse = (
  output: any,
  context: __SerdeContext
): GetCostAndUsageWithResourcesResponse => {
  return {
    __type: "GetCostAndUsageWithResourcesResponse",
    GroupDefinitions:
      output.GroupDefinitions !== undefined && output.GroupDefinitions !== null
        ? deserializeAws_json1_1GroupDefinitions(
            output.GroupDefinitions,
            context
          )
        : undefined,
    NextPageToken:
      output.NextPageToken !== undefined && output.NextPageToken !== null
        ? output.NextPageToken
        : undefined,
    ResultsByTime:
      output.ResultsByTime !== undefined && output.ResultsByTime !== null
        ? deserializeAws_json1_1ResultsByTime(output.ResultsByTime, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1GetCostForecastResponse = (
  output: any,
  context: __SerdeContext
): GetCostForecastResponse => {
  return {
    __type: "GetCostForecastResponse",
    ForecastResultsByTime:
      output.ForecastResultsByTime !== undefined &&
      output.ForecastResultsByTime !== null
        ? deserializeAws_json1_1ForecastResultsByTime(
            output.ForecastResultsByTime,
            context
          )
        : undefined,
    Total:
      output.Total !== undefined && output.Total !== null
        ? deserializeAws_json1_1MetricValue(output.Total, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1GetDimensionValuesResponse = (
  output: any,
  context: __SerdeContext
): GetDimensionValuesResponse => {
  return {
    __type: "GetDimensionValuesResponse",
    DimensionValues:
      output.DimensionValues !== undefined && output.DimensionValues !== null
        ? deserializeAws_json1_1DimensionValuesWithAttributesList(
            output.DimensionValues,
            context
          )
        : undefined,
    NextPageToken:
      output.NextPageToken !== undefined && output.NextPageToken !== null
        ? output.NextPageToken
        : undefined,
    ReturnSize:
      output.ReturnSize !== undefined && output.ReturnSize !== null
        ? output.ReturnSize
        : undefined,
    TotalSize:
      output.TotalSize !== undefined && output.TotalSize !== null
        ? output.TotalSize
        : undefined
  } as any;
};

const deserializeAws_json1_1GetReservationCoverageResponse = (
  output: any,
  context: __SerdeContext
): GetReservationCoverageResponse => {
  return {
    __type: "GetReservationCoverageResponse",
    CoveragesByTime:
      output.CoveragesByTime !== undefined && output.CoveragesByTime !== null
        ? deserializeAws_json1_1CoveragesByTime(output.CoveragesByTime, context)
        : undefined,
    NextPageToken:
      output.NextPageToken !== undefined && output.NextPageToken !== null
        ? output.NextPageToken
        : undefined,
    Total:
      output.Total !== undefined && output.Total !== null
        ? deserializeAws_json1_1Coverage(output.Total, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1GetReservationPurchaseRecommendationResponse = (
  output: any,
  context: __SerdeContext
): GetReservationPurchaseRecommendationResponse => {
  return {
    __type: "GetReservationPurchaseRecommendationResponse",
    Metadata:
      output.Metadata !== undefined && output.Metadata !== null
        ? deserializeAws_json1_1ReservationPurchaseRecommendationMetadata(
            output.Metadata,
            context
          )
        : undefined,
    NextPageToken:
      output.NextPageToken !== undefined && output.NextPageToken !== null
        ? output.NextPageToken
        : undefined,
    Recommendations:
      output.Recommendations !== undefined && output.Recommendations !== null
        ? deserializeAws_json1_1ReservationPurchaseRecommendations(
            output.Recommendations,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1GetReservationUtilizationResponse = (
  output: any,
  context: __SerdeContext
): GetReservationUtilizationResponse => {
  return {
    __type: "GetReservationUtilizationResponse",
    NextPageToken:
      output.NextPageToken !== undefined && output.NextPageToken !== null
        ? output.NextPageToken
        : undefined,
    Total:
      output.Total !== undefined && output.Total !== null
        ? deserializeAws_json1_1ReservationAggregates(output.Total, context)
        : undefined,
    UtilizationsByTime:
      output.UtilizationsByTime !== undefined &&
      output.UtilizationsByTime !== null
        ? deserializeAws_json1_1UtilizationsByTime(
            output.UtilizationsByTime,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1GetRightsizingRecommendationResponse = (
  output: any,
  context: __SerdeContext
): GetRightsizingRecommendationResponse => {
  return {
    __type: "GetRightsizingRecommendationResponse",
    Metadata:
      output.Metadata !== undefined && output.Metadata !== null
        ? deserializeAws_json1_1RightsizingRecommendationMetadata(
            output.Metadata,
            context
          )
        : undefined,
    NextPageToken:
      output.NextPageToken !== undefined && output.NextPageToken !== null
        ? output.NextPageToken
        : undefined,
    RightsizingRecommendations:
      output.RightsizingRecommendations !== undefined &&
      output.RightsizingRecommendations !== null
        ? deserializeAws_json1_1RightsizingRecommendationList(
            output.RightsizingRecommendations,
            context
          )
        : undefined,
    Summary:
      output.Summary !== undefined && output.Summary !== null
        ? deserializeAws_json1_1RightsizingRecommendationSummary(
            output.Summary,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1GetSavingsPlansCoverageResponse = (
  output: any,
  context: __SerdeContext
): GetSavingsPlansCoverageResponse => {
  return {
    __type: "GetSavingsPlansCoverageResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    SavingsPlansCoverages:
      output.SavingsPlansCoverages !== undefined &&
      output.SavingsPlansCoverages !== null
        ? deserializeAws_json1_1SavingsPlansCoverages(
            output.SavingsPlansCoverages,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1GetSavingsPlansPurchaseRecommendationResponse = (
  output: any,
  context: __SerdeContext
): GetSavingsPlansPurchaseRecommendationResponse => {
  return {
    __type: "GetSavingsPlansPurchaseRecommendationResponse",
    Metadata:
      output.Metadata !== undefined && output.Metadata !== null
        ? deserializeAws_json1_1SavingsPlansPurchaseRecommendationMetadata(
            output.Metadata,
            context
          )
        : undefined,
    NextPageToken:
      output.NextPageToken !== undefined && output.NextPageToken !== null
        ? output.NextPageToken
        : undefined,
    SavingsPlansPurchaseRecommendation:
      output.SavingsPlansPurchaseRecommendation !== undefined &&
      output.SavingsPlansPurchaseRecommendation !== null
        ? deserializeAws_json1_1SavingsPlansPurchaseRecommendation(
            output.SavingsPlansPurchaseRecommendation,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1GetSavingsPlansUtilizationDetailsResponse = (
  output: any,
  context: __SerdeContext
): GetSavingsPlansUtilizationDetailsResponse => {
  return {
    __type: "GetSavingsPlansUtilizationDetailsResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    SavingsPlansUtilizationDetails:
      output.SavingsPlansUtilizationDetails !== undefined &&
      output.SavingsPlansUtilizationDetails !== null
        ? deserializeAws_json1_1SavingsPlansUtilizationDetails(
            output.SavingsPlansUtilizationDetails,
            context
          )
        : undefined,
    TimePeriod:
      output.TimePeriod !== undefined && output.TimePeriod !== null
        ? deserializeAws_json1_1DateInterval(output.TimePeriod, context)
        : undefined,
    Total:
      output.Total !== undefined && output.Total !== null
        ? deserializeAws_json1_1SavingsPlansUtilizationAggregates(
            output.Total,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1GetSavingsPlansUtilizationResponse = (
  output: any,
  context: __SerdeContext
): GetSavingsPlansUtilizationResponse => {
  return {
    __type: "GetSavingsPlansUtilizationResponse",
    SavingsPlansUtilizationsByTime:
      output.SavingsPlansUtilizationsByTime !== undefined &&
      output.SavingsPlansUtilizationsByTime !== null
        ? deserializeAws_json1_1SavingsPlansUtilizationsByTime(
            output.SavingsPlansUtilizationsByTime,
            context
          )
        : undefined,
    Total:
      output.Total !== undefined && output.Total !== null
        ? deserializeAws_json1_1SavingsPlansUtilizationAggregates(
            output.Total,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1GetTagsResponse = (
  output: any,
  context: __SerdeContext
): GetTagsResponse => {
  return {
    __type: "GetTagsResponse",
    NextPageToken:
      output.NextPageToken !== undefined && output.NextPageToken !== null
        ? output.NextPageToken
        : undefined,
    ReturnSize:
      output.ReturnSize !== undefined && output.ReturnSize !== null
        ? output.ReturnSize
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined,
    TotalSize:
      output.TotalSize !== undefined && output.TotalSize !== null
        ? output.TotalSize
        : undefined
  } as any;
};

const deserializeAws_json1_1GetUsageForecastResponse = (
  output: any,
  context: __SerdeContext
): GetUsageForecastResponse => {
  return {
    __type: "GetUsageForecastResponse",
    ForecastResultsByTime:
      output.ForecastResultsByTime !== undefined &&
      output.ForecastResultsByTime !== null
        ? deserializeAws_json1_1ForecastResultsByTime(
            output.ForecastResultsByTime,
            context
          )
        : undefined,
    Total:
      output.Total !== undefined && output.Total !== null
        ? deserializeAws_json1_1MetricValue(output.Total, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1Group = (
  output: any,
  context: __SerdeContext
): Group => {
  return {
    __type: "Group",
    Keys:
      output.Keys !== undefined && output.Keys !== null
        ? deserializeAws_json1_1Keys(output.Keys, context)
        : undefined,
    Metrics:
      output.Metrics !== undefined && output.Metrics !== null
        ? deserializeAws_json1_1Metrics(output.Metrics, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1GroupDefinition = (
  output: any,
  context: __SerdeContext
): GroupDefinition => {
  return {
    __type: "GroupDefinition",
    Key:
      output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined
  } as any;
};

const deserializeAws_json1_1GroupDefinitions = (
  output: any,
  context: __SerdeContext
): GroupDefinition[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1GroupDefinition(entry, context)
  );
};

const deserializeAws_json1_1Groups = (
  output: any,
  context: __SerdeContext
): Group[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Group(entry, context)
  );
};

const deserializeAws_json1_1InstanceDetails = (
  output: any,
  context: __SerdeContext
): InstanceDetails => {
  return {
    __type: "InstanceDetails",
    EC2InstanceDetails:
      output.EC2InstanceDetails !== undefined &&
      output.EC2InstanceDetails !== null
        ? deserializeAws_json1_1EC2InstanceDetails(
            output.EC2InstanceDetails,
            context
          )
        : undefined,
    ESInstanceDetails:
      output.ESInstanceDetails !== undefined &&
      output.ESInstanceDetails !== null
        ? deserializeAws_json1_1ESInstanceDetails(
            output.ESInstanceDetails,
            context
          )
        : undefined,
    ElastiCacheInstanceDetails:
      output.ElastiCacheInstanceDetails !== undefined &&
      output.ElastiCacheInstanceDetails !== null
        ? deserializeAws_json1_1ElastiCacheInstanceDetails(
            output.ElastiCacheInstanceDetails,
            context
          )
        : undefined,
    RDSInstanceDetails:
      output.RDSInstanceDetails !== undefined &&
      output.RDSInstanceDetails !== null
        ? deserializeAws_json1_1RDSInstanceDetails(
            output.RDSInstanceDetails,
            context
          )
        : undefined,
    RedshiftInstanceDetails:
      output.RedshiftInstanceDetails !== undefined &&
      output.RedshiftInstanceDetails !== null
        ? deserializeAws_json1_1RedshiftInstanceDetails(
            output.RedshiftInstanceDetails,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  return {
    __type: "InvalidNextTokenException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1Keys = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  return {
    __type: "LimitExceededException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1ListCostCategoryDefinitionsResponse = (
  output: any,
  context: __SerdeContext
): ListCostCategoryDefinitionsResponse => {
  return {
    __type: "ListCostCategoryDefinitionsResponse",
    CostCategoryReferences:
      output.CostCategoryReferences !== undefined &&
      output.CostCategoryReferences !== null
        ? deserializeAws_json1_1CostCategoryReferencesList(
            output.CostCategoryReferences,
            context
          )
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1Metrics = (
  output: any,
  context: __SerdeContext
): { [key: string]: MetricValue } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: MetricValue }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: deserializeAws_json1_1MetricValue(value, context)
    }),
    {}
  );
};

const deserializeAws_json1_1MetricValue = (
  output: any,
  context: __SerdeContext
): MetricValue => {
  return {
    __type: "MetricValue",
    Amount:
      output.Amount !== undefined && output.Amount !== null
        ? output.Amount
        : undefined,
    Unit:
      output.Unit !== undefined && output.Unit !== null
        ? output.Unit
        : undefined
  } as any;
};

const deserializeAws_json1_1ModifyRecommendationDetail = (
  output: any,
  context: __SerdeContext
): ModifyRecommendationDetail => {
  return {
    __type: "ModifyRecommendationDetail",
    TargetInstances:
      output.TargetInstances !== undefined && output.TargetInstances !== null
        ? deserializeAws_json1_1TargetInstancesList(
            output.TargetInstances,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1RDSInstanceDetails = (
  output: any,
  context: __SerdeContext
): RDSInstanceDetails => {
  return {
    __type: "RDSInstanceDetails",
    CurrentGeneration:
      output.CurrentGeneration !== undefined &&
      output.CurrentGeneration !== null
        ? output.CurrentGeneration
        : undefined,
    DatabaseEdition:
      output.DatabaseEdition !== undefined && output.DatabaseEdition !== null
        ? output.DatabaseEdition
        : undefined,
    DatabaseEngine:
      output.DatabaseEngine !== undefined && output.DatabaseEngine !== null
        ? output.DatabaseEngine
        : undefined,
    DeploymentOption:
      output.DeploymentOption !== undefined && output.DeploymentOption !== null
        ? output.DeploymentOption
        : undefined,
    Family:
      output.Family !== undefined && output.Family !== null
        ? output.Family
        : undefined,
    InstanceType:
      output.InstanceType !== undefined && output.InstanceType !== null
        ? output.InstanceType
        : undefined,
    LicenseModel:
      output.LicenseModel !== undefined && output.LicenseModel !== null
        ? output.LicenseModel
        : undefined,
    Region:
      output.Region !== undefined && output.Region !== null
        ? output.Region
        : undefined,
    SizeFlexEligible:
      output.SizeFlexEligible !== undefined && output.SizeFlexEligible !== null
        ? output.SizeFlexEligible
        : undefined
  } as any;
};

const deserializeAws_json1_1RedshiftInstanceDetails = (
  output: any,
  context: __SerdeContext
): RedshiftInstanceDetails => {
  return {
    __type: "RedshiftInstanceDetails",
    CurrentGeneration:
      output.CurrentGeneration !== undefined &&
      output.CurrentGeneration !== null
        ? output.CurrentGeneration
        : undefined,
    Family:
      output.Family !== undefined && output.Family !== null
        ? output.Family
        : undefined,
    NodeType:
      output.NodeType !== undefined && output.NodeType !== null
        ? output.NodeType
        : undefined,
    Region:
      output.Region !== undefined && output.Region !== null
        ? output.Region
        : undefined,
    SizeFlexEligible:
      output.SizeFlexEligible !== undefined && output.SizeFlexEligible !== null
        ? output.SizeFlexEligible
        : undefined
  } as any;
};

const deserializeAws_json1_1RequestChangedException = (
  output: any,
  context: __SerdeContext
): RequestChangedException => {
  return {
    __type: "RequestChangedException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1ReservationAggregates = (
  output: any,
  context: __SerdeContext
): ReservationAggregates => {
  return {
    __type: "ReservationAggregates",
    AmortizedRecurringFee:
      output.AmortizedRecurringFee !== undefined &&
      output.AmortizedRecurringFee !== null
        ? output.AmortizedRecurringFee
        : undefined,
    AmortizedUpfrontFee:
      output.AmortizedUpfrontFee !== undefined &&
      output.AmortizedUpfrontFee !== null
        ? output.AmortizedUpfrontFee
        : undefined,
    NetRISavings:
      output.NetRISavings !== undefined && output.NetRISavings !== null
        ? output.NetRISavings
        : undefined,
    OnDemandCostOfRIHoursUsed:
      output.OnDemandCostOfRIHoursUsed !== undefined &&
      output.OnDemandCostOfRIHoursUsed !== null
        ? output.OnDemandCostOfRIHoursUsed
        : undefined,
    PurchasedHours:
      output.PurchasedHours !== undefined && output.PurchasedHours !== null
        ? output.PurchasedHours
        : undefined,
    PurchasedUnits:
      output.PurchasedUnits !== undefined && output.PurchasedUnits !== null
        ? output.PurchasedUnits
        : undefined,
    TotalActualHours:
      output.TotalActualHours !== undefined && output.TotalActualHours !== null
        ? output.TotalActualHours
        : undefined,
    TotalActualUnits:
      output.TotalActualUnits !== undefined && output.TotalActualUnits !== null
        ? output.TotalActualUnits
        : undefined,
    TotalAmortizedFee:
      output.TotalAmortizedFee !== undefined &&
      output.TotalAmortizedFee !== null
        ? output.TotalAmortizedFee
        : undefined,
    TotalPotentialRISavings:
      output.TotalPotentialRISavings !== undefined &&
      output.TotalPotentialRISavings !== null
        ? output.TotalPotentialRISavings
        : undefined,
    UnusedHours:
      output.UnusedHours !== undefined && output.UnusedHours !== null
        ? output.UnusedHours
        : undefined,
    UnusedUnits:
      output.UnusedUnits !== undefined && output.UnusedUnits !== null
        ? output.UnusedUnits
        : undefined,
    UtilizationPercentage:
      output.UtilizationPercentage !== undefined &&
      output.UtilizationPercentage !== null
        ? output.UtilizationPercentage
        : undefined,
    UtilizationPercentageInUnits:
      output.UtilizationPercentageInUnits !== undefined &&
      output.UtilizationPercentageInUnits !== null
        ? output.UtilizationPercentageInUnits
        : undefined
  } as any;
};

const deserializeAws_json1_1ReservationCoverageGroup = (
  output: any,
  context: __SerdeContext
): ReservationCoverageGroup => {
  return {
    __type: "ReservationCoverageGroup",
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_json1_1Attributes(output.Attributes, context)
        : undefined,
    Coverage:
      output.Coverage !== undefined && output.Coverage !== null
        ? deserializeAws_json1_1Coverage(output.Coverage, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ReservationCoverageGroups = (
  output: any,
  context: __SerdeContext
): ReservationCoverageGroup[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ReservationCoverageGroup(entry, context)
  );
};

const deserializeAws_json1_1ReservationPurchaseRecommendation = (
  output: any,
  context: __SerdeContext
): ReservationPurchaseRecommendation => {
  return {
    __type: "ReservationPurchaseRecommendation",
    AccountScope:
      output.AccountScope !== undefined && output.AccountScope !== null
        ? output.AccountScope
        : undefined,
    LookbackPeriodInDays:
      output.LookbackPeriodInDays !== undefined &&
      output.LookbackPeriodInDays !== null
        ? output.LookbackPeriodInDays
        : undefined,
    PaymentOption:
      output.PaymentOption !== undefined && output.PaymentOption !== null
        ? output.PaymentOption
        : undefined,
    RecommendationDetails:
      output.RecommendationDetails !== undefined &&
      output.RecommendationDetails !== null
        ? deserializeAws_json1_1ReservationPurchaseRecommendationDetails(
            output.RecommendationDetails,
            context
          )
        : undefined,
    RecommendationSummary:
      output.RecommendationSummary !== undefined &&
      output.RecommendationSummary !== null
        ? deserializeAws_json1_1ReservationPurchaseRecommendationSummary(
            output.RecommendationSummary,
            context
          )
        : undefined,
    ServiceSpecification:
      output.ServiceSpecification !== undefined &&
      output.ServiceSpecification !== null
        ? deserializeAws_json1_1ServiceSpecification(
            output.ServiceSpecification,
            context
          )
        : undefined,
    TermInYears:
      output.TermInYears !== undefined && output.TermInYears !== null
        ? output.TermInYears
        : undefined
  } as any;
};

const deserializeAws_json1_1ReservationPurchaseRecommendationDetail = (
  output: any,
  context: __SerdeContext
): ReservationPurchaseRecommendationDetail => {
  return {
    __type: "ReservationPurchaseRecommendationDetail",
    AccountId:
      output.AccountId !== undefined && output.AccountId !== null
        ? output.AccountId
        : undefined,
    AverageNormalizedUnitsUsedPerHour:
      output.AverageNormalizedUnitsUsedPerHour !== undefined &&
      output.AverageNormalizedUnitsUsedPerHour !== null
        ? output.AverageNormalizedUnitsUsedPerHour
        : undefined,
    AverageNumberOfInstancesUsedPerHour:
      output.AverageNumberOfInstancesUsedPerHour !== undefined &&
      output.AverageNumberOfInstancesUsedPerHour !== null
        ? output.AverageNumberOfInstancesUsedPerHour
        : undefined,
    AverageUtilization:
      output.AverageUtilization !== undefined &&
      output.AverageUtilization !== null
        ? output.AverageUtilization
        : undefined,
    CurrencyCode:
      output.CurrencyCode !== undefined && output.CurrencyCode !== null
        ? output.CurrencyCode
        : undefined,
    EstimatedBreakEvenInMonths:
      output.EstimatedBreakEvenInMonths !== undefined &&
      output.EstimatedBreakEvenInMonths !== null
        ? output.EstimatedBreakEvenInMonths
        : undefined,
    EstimatedMonthlyOnDemandCost:
      output.EstimatedMonthlyOnDemandCost !== undefined &&
      output.EstimatedMonthlyOnDemandCost !== null
        ? output.EstimatedMonthlyOnDemandCost
        : undefined,
    EstimatedMonthlySavingsAmount:
      output.EstimatedMonthlySavingsAmount !== undefined &&
      output.EstimatedMonthlySavingsAmount !== null
        ? output.EstimatedMonthlySavingsAmount
        : undefined,
    EstimatedMonthlySavingsPercentage:
      output.EstimatedMonthlySavingsPercentage !== undefined &&
      output.EstimatedMonthlySavingsPercentage !== null
        ? output.EstimatedMonthlySavingsPercentage
        : undefined,
    EstimatedReservationCostForLookbackPeriod:
      output.EstimatedReservationCostForLookbackPeriod !== undefined &&
      output.EstimatedReservationCostForLookbackPeriod !== null
        ? output.EstimatedReservationCostForLookbackPeriod
        : undefined,
    InstanceDetails:
      output.InstanceDetails !== undefined && output.InstanceDetails !== null
        ? deserializeAws_json1_1InstanceDetails(output.InstanceDetails, context)
        : undefined,
    MaximumNormalizedUnitsUsedPerHour:
      output.MaximumNormalizedUnitsUsedPerHour !== undefined &&
      output.MaximumNormalizedUnitsUsedPerHour !== null
        ? output.MaximumNormalizedUnitsUsedPerHour
        : undefined,
    MaximumNumberOfInstancesUsedPerHour:
      output.MaximumNumberOfInstancesUsedPerHour !== undefined &&
      output.MaximumNumberOfInstancesUsedPerHour !== null
        ? output.MaximumNumberOfInstancesUsedPerHour
        : undefined,
    MinimumNormalizedUnitsUsedPerHour:
      output.MinimumNormalizedUnitsUsedPerHour !== undefined &&
      output.MinimumNormalizedUnitsUsedPerHour !== null
        ? output.MinimumNormalizedUnitsUsedPerHour
        : undefined,
    MinimumNumberOfInstancesUsedPerHour:
      output.MinimumNumberOfInstancesUsedPerHour !== undefined &&
      output.MinimumNumberOfInstancesUsedPerHour !== null
        ? output.MinimumNumberOfInstancesUsedPerHour
        : undefined,
    RecommendedNormalizedUnitsToPurchase:
      output.RecommendedNormalizedUnitsToPurchase !== undefined &&
      output.RecommendedNormalizedUnitsToPurchase !== null
        ? output.RecommendedNormalizedUnitsToPurchase
        : undefined,
    RecommendedNumberOfInstancesToPurchase:
      output.RecommendedNumberOfInstancesToPurchase !== undefined &&
      output.RecommendedNumberOfInstancesToPurchase !== null
        ? output.RecommendedNumberOfInstancesToPurchase
        : undefined,
    RecurringStandardMonthlyCost:
      output.RecurringStandardMonthlyCost !== undefined &&
      output.RecurringStandardMonthlyCost !== null
        ? output.RecurringStandardMonthlyCost
        : undefined,
    UpfrontCost:
      output.UpfrontCost !== undefined && output.UpfrontCost !== null
        ? output.UpfrontCost
        : undefined
  } as any;
};

const deserializeAws_json1_1ReservationPurchaseRecommendationDetails = (
  output: any,
  context: __SerdeContext
): ReservationPurchaseRecommendationDetail[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ReservationPurchaseRecommendationDetail(
      entry,
      context
    )
  );
};

const deserializeAws_json1_1ReservationPurchaseRecommendationMetadata = (
  output: any,
  context: __SerdeContext
): ReservationPurchaseRecommendationMetadata => {
  return {
    __type: "ReservationPurchaseRecommendationMetadata",
    GenerationTimestamp:
      output.GenerationTimestamp !== undefined &&
      output.GenerationTimestamp !== null
        ? output.GenerationTimestamp
        : undefined,
    RecommendationId:
      output.RecommendationId !== undefined && output.RecommendationId !== null
        ? output.RecommendationId
        : undefined
  } as any;
};

const deserializeAws_json1_1ReservationPurchaseRecommendations = (
  output: any,
  context: __SerdeContext
): ReservationPurchaseRecommendation[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ReservationPurchaseRecommendation(entry, context)
  );
};

const deserializeAws_json1_1ReservationPurchaseRecommendationSummary = (
  output: any,
  context: __SerdeContext
): ReservationPurchaseRecommendationSummary => {
  return {
    __type: "ReservationPurchaseRecommendationSummary",
    CurrencyCode:
      output.CurrencyCode !== undefined && output.CurrencyCode !== null
        ? output.CurrencyCode
        : undefined,
    TotalEstimatedMonthlySavingsAmount:
      output.TotalEstimatedMonthlySavingsAmount !== undefined &&
      output.TotalEstimatedMonthlySavingsAmount !== null
        ? output.TotalEstimatedMonthlySavingsAmount
        : undefined,
    TotalEstimatedMonthlySavingsPercentage:
      output.TotalEstimatedMonthlySavingsPercentage !== undefined &&
      output.TotalEstimatedMonthlySavingsPercentage !== null
        ? output.TotalEstimatedMonthlySavingsPercentage
        : undefined
  } as any;
};

const deserializeAws_json1_1ReservationUtilizationGroup = (
  output: any,
  context: __SerdeContext
): ReservationUtilizationGroup => {
  return {
    __type: "ReservationUtilizationGroup",
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_json1_1Attributes(output.Attributes, context)
        : undefined,
    Key:
      output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Utilization:
      output.Utilization !== undefined && output.Utilization !== null
        ? deserializeAws_json1_1ReservationAggregates(
            output.Utilization,
            context
          )
        : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_json1_1ReservationUtilizationGroups = (
  output: any,
  context: __SerdeContext
): ReservationUtilizationGroup[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ReservationUtilizationGroup(entry, context)
  );
};

const deserializeAws_json1_1ResourceDetails = (
  output: any,
  context: __SerdeContext
): ResourceDetails => {
  return {
    __type: "ResourceDetails",
    EC2ResourceDetails:
      output.EC2ResourceDetails !== undefined &&
      output.EC2ResourceDetails !== null
        ? deserializeAws_json1_1EC2ResourceDetails(
            output.EC2ResourceDetails,
            context
          )
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

const deserializeAws_json1_1ResourceUtilization = (
  output: any,
  context: __SerdeContext
): ResourceUtilization => {
  return {
    __type: "ResourceUtilization",
    EC2ResourceUtilization:
      output.EC2ResourceUtilization !== undefined &&
      output.EC2ResourceUtilization !== null
        ? deserializeAws_json1_1EC2ResourceUtilization(
            output.EC2ResourceUtilization,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ResultByTime = (
  output: any,
  context: __SerdeContext
): ResultByTime => {
  return {
    __type: "ResultByTime",
    Estimated:
      output.Estimated !== undefined && output.Estimated !== null
        ? output.Estimated
        : undefined,
    Groups:
      output.Groups !== undefined && output.Groups !== null
        ? deserializeAws_json1_1Groups(output.Groups, context)
        : undefined,
    TimePeriod:
      output.TimePeriod !== undefined && output.TimePeriod !== null
        ? deserializeAws_json1_1DateInterval(output.TimePeriod, context)
        : undefined,
    Total:
      output.Total !== undefined && output.Total !== null
        ? deserializeAws_json1_1Metrics(output.Total, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ResultsByTime = (
  output: any,
  context: __SerdeContext
): ResultByTime[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ResultByTime(entry, context)
  );
};

const deserializeAws_json1_1RightsizingRecommendation = (
  output: any,
  context: __SerdeContext
): RightsizingRecommendation => {
  return {
    __type: "RightsizingRecommendation",
    AccountId:
      output.AccountId !== undefined && output.AccountId !== null
        ? output.AccountId
        : undefined,
    CurrentInstance:
      output.CurrentInstance !== undefined && output.CurrentInstance !== null
        ? deserializeAws_json1_1CurrentInstance(output.CurrentInstance, context)
        : undefined,
    ModifyRecommendationDetail:
      output.ModifyRecommendationDetail !== undefined &&
      output.ModifyRecommendationDetail !== null
        ? deserializeAws_json1_1ModifyRecommendationDetail(
            output.ModifyRecommendationDetail,
            context
          )
        : undefined,
    RightsizingType:
      output.RightsizingType !== undefined && output.RightsizingType !== null
        ? output.RightsizingType
        : undefined,
    TerminateRecommendationDetail:
      output.TerminateRecommendationDetail !== undefined &&
      output.TerminateRecommendationDetail !== null
        ? deserializeAws_json1_1TerminateRecommendationDetail(
            output.TerminateRecommendationDetail,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1RightsizingRecommendationList = (
  output: any,
  context: __SerdeContext
): RightsizingRecommendation[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RightsizingRecommendation(entry, context)
  );
};

const deserializeAws_json1_1RightsizingRecommendationMetadata = (
  output: any,
  context: __SerdeContext
): RightsizingRecommendationMetadata => {
  return {
    __type: "RightsizingRecommendationMetadata",
    GenerationTimestamp:
      output.GenerationTimestamp !== undefined &&
      output.GenerationTimestamp !== null
        ? output.GenerationTimestamp
        : undefined,
    LookbackPeriodInDays:
      output.LookbackPeriodInDays !== undefined &&
      output.LookbackPeriodInDays !== null
        ? output.LookbackPeriodInDays
        : undefined,
    RecommendationId:
      output.RecommendationId !== undefined && output.RecommendationId !== null
        ? output.RecommendationId
        : undefined
  } as any;
};

const deserializeAws_json1_1RightsizingRecommendationSummary = (
  output: any,
  context: __SerdeContext
): RightsizingRecommendationSummary => {
  return {
    __type: "RightsizingRecommendationSummary",
    EstimatedTotalMonthlySavingsAmount:
      output.EstimatedTotalMonthlySavingsAmount !== undefined &&
      output.EstimatedTotalMonthlySavingsAmount !== null
        ? output.EstimatedTotalMonthlySavingsAmount
        : undefined,
    SavingsCurrencyCode:
      output.SavingsCurrencyCode !== undefined &&
      output.SavingsCurrencyCode !== null
        ? output.SavingsCurrencyCode
        : undefined,
    SavingsPercentage:
      output.SavingsPercentage !== undefined &&
      output.SavingsPercentage !== null
        ? output.SavingsPercentage
        : undefined,
    TotalRecommendationCount:
      output.TotalRecommendationCount !== undefined &&
      output.TotalRecommendationCount !== null
        ? output.TotalRecommendationCount
        : undefined
  } as any;
};

const deserializeAws_json1_1SavingsPlansAmortizedCommitment = (
  output: any,
  context: __SerdeContext
): SavingsPlansAmortizedCommitment => {
  return {
    __type: "SavingsPlansAmortizedCommitment",
    AmortizedRecurringCommitment:
      output.AmortizedRecurringCommitment !== undefined &&
      output.AmortizedRecurringCommitment !== null
        ? output.AmortizedRecurringCommitment
        : undefined,
    AmortizedUpfrontCommitment:
      output.AmortizedUpfrontCommitment !== undefined &&
      output.AmortizedUpfrontCommitment !== null
        ? output.AmortizedUpfrontCommitment
        : undefined,
    TotalAmortizedCommitment:
      output.TotalAmortizedCommitment !== undefined &&
      output.TotalAmortizedCommitment !== null
        ? output.TotalAmortizedCommitment
        : undefined
  } as any;
};

const deserializeAws_json1_1SavingsPlansCoverage = (
  output: any,
  context: __SerdeContext
): SavingsPlansCoverage => {
  return {
    __type: "SavingsPlansCoverage",
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_json1_1Attributes(output.Attributes, context)
        : undefined,
    Coverage:
      output.Coverage !== undefined && output.Coverage !== null
        ? deserializeAws_json1_1SavingsPlansCoverageData(
            output.Coverage,
            context
          )
        : undefined,
    TimePeriod:
      output.TimePeriod !== undefined && output.TimePeriod !== null
        ? deserializeAws_json1_1DateInterval(output.TimePeriod, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1SavingsPlansCoverageData = (
  output: any,
  context: __SerdeContext
): SavingsPlansCoverageData => {
  return {
    __type: "SavingsPlansCoverageData",
    CoveragePercentage:
      output.CoveragePercentage !== undefined &&
      output.CoveragePercentage !== null
        ? output.CoveragePercentage
        : undefined,
    OnDemandCost:
      output.OnDemandCost !== undefined && output.OnDemandCost !== null
        ? output.OnDemandCost
        : undefined,
    SpendCoveredBySavingsPlans:
      output.SpendCoveredBySavingsPlans !== undefined &&
      output.SpendCoveredBySavingsPlans !== null
        ? output.SpendCoveredBySavingsPlans
        : undefined,
    TotalCost:
      output.TotalCost !== undefined && output.TotalCost !== null
        ? output.TotalCost
        : undefined
  } as any;
};

const deserializeAws_json1_1SavingsPlansCoverages = (
  output: any,
  context: __SerdeContext
): SavingsPlansCoverage[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SavingsPlansCoverage(entry, context)
  );
};

const deserializeAws_json1_1SavingsPlansDetails = (
  output: any,
  context: __SerdeContext
): SavingsPlansDetails => {
  return {
    __type: "SavingsPlansDetails",
    InstanceFamily:
      output.InstanceFamily !== undefined && output.InstanceFamily !== null
        ? output.InstanceFamily
        : undefined,
    OfferingId:
      output.OfferingId !== undefined && output.OfferingId !== null
        ? output.OfferingId
        : undefined,
    Region:
      output.Region !== undefined && output.Region !== null
        ? output.Region
        : undefined
  } as any;
};

const deserializeAws_json1_1SavingsPlansPurchaseRecommendation = (
  output: any,
  context: __SerdeContext
): SavingsPlansPurchaseRecommendation => {
  return {
    __type: "SavingsPlansPurchaseRecommendation",
    LookbackPeriodInDays:
      output.LookbackPeriodInDays !== undefined &&
      output.LookbackPeriodInDays !== null
        ? output.LookbackPeriodInDays
        : undefined,
    PaymentOption:
      output.PaymentOption !== undefined && output.PaymentOption !== null
        ? output.PaymentOption
        : undefined,
    SavingsPlansPurchaseRecommendationDetails:
      output.SavingsPlansPurchaseRecommendationDetails !== undefined &&
      output.SavingsPlansPurchaseRecommendationDetails !== null
        ? deserializeAws_json1_1SavingsPlansPurchaseRecommendationDetailList(
            output.SavingsPlansPurchaseRecommendationDetails,
            context
          )
        : undefined,
    SavingsPlansPurchaseRecommendationSummary:
      output.SavingsPlansPurchaseRecommendationSummary !== undefined &&
      output.SavingsPlansPurchaseRecommendationSummary !== null
        ? deserializeAws_json1_1SavingsPlansPurchaseRecommendationSummary(
            output.SavingsPlansPurchaseRecommendationSummary,
            context
          )
        : undefined,
    SavingsPlansType:
      output.SavingsPlansType !== undefined && output.SavingsPlansType !== null
        ? output.SavingsPlansType
        : undefined,
    TermInYears:
      output.TermInYears !== undefined && output.TermInYears !== null
        ? output.TermInYears
        : undefined
  } as any;
};

const deserializeAws_json1_1SavingsPlansPurchaseRecommendationDetail = (
  output: any,
  context: __SerdeContext
): SavingsPlansPurchaseRecommendationDetail => {
  return {
    __type: "SavingsPlansPurchaseRecommendationDetail",
    AccountId:
      output.AccountId !== undefined && output.AccountId !== null
        ? output.AccountId
        : undefined,
    CurrencyCode:
      output.CurrencyCode !== undefined && output.CurrencyCode !== null
        ? output.CurrencyCode
        : undefined,
    CurrentAverageHourlyOnDemandSpend:
      output.CurrentAverageHourlyOnDemandSpend !== undefined &&
      output.CurrentAverageHourlyOnDemandSpend !== null
        ? output.CurrentAverageHourlyOnDemandSpend
        : undefined,
    CurrentMaximumHourlyOnDemandSpend:
      output.CurrentMaximumHourlyOnDemandSpend !== undefined &&
      output.CurrentMaximumHourlyOnDemandSpend !== null
        ? output.CurrentMaximumHourlyOnDemandSpend
        : undefined,
    CurrentMinimumHourlyOnDemandSpend:
      output.CurrentMinimumHourlyOnDemandSpend !== undefined &&
      output.CurrentMinimumHourlyOnDemandSpend !== null
        ? output.CurrentMinimumHourlyOnDemandSpend
        : undefined,
    EstimatedAverageUtilization:
      output.EstimatedAverageUtilization !== undefined &&
      output.EstimatedAverageUtilization !== null
        ? output.EstimatedAverageUtilization
        : undefined,
    EstimatedMonthlySavingsAmount:
      output.EstimatedMonthlySavingsAmount !== undefined &&
      output.EstimatedMonthlySavingsAmount !== null
        ? output.EstimatedMonthlySavingsAmount
        : undefined,
    EstimatedOnDemandCost:
      output.EstimatedOnDemandCost !== undefined &&
      output.EstimatedOnDemandCost !== null
        ? output.EstimatedOnDemandCost
        : undefined,
    EstimatedOnDemandCostWithCurrentCommitment:
      output.EstimatedOnDemandCostWithCurrentCommitment !== undefined &&
      output.EstimatedOnDemandCostWithCurrentCommitment !== null
        ? output.EstimatedOnDemandCostWithCurrentCommitment
        : undefined,
    EstimatedROI:
      output.EstimatedROI !== undefined && output.EstimatedROI !== null
        ? output.EstimatedROI
        : undefined,
    EstimatedSPCost:
      output.EstimatedSPCost !== undefined && output.EstimatedSPCost !== null
        ? output.EstimatedSPCost
        : undefined,
    EstimatedSavingsAmount:
      output.EstimatedSavingsAmount !== undefined &&
      output.EstimatedSavingsAmount !== null
        ? output.EstimatedSavingsAmount
        : undefined,
    EstimatedSavingsPercentage:
      output.EstimatedSavingsPercentage !== undefined &&
      output.EstimatedSavingsPercentage !== null
        ? output.EstimatedSavingsPercentage
        : undefined,
    HourlyCommitmentToPurchase:
      output.HourlyCommitmentToPurchase !== undefined &&
      output.HourlyCommitmentToPurchase !== null
        ? output.HourlyCommitmentToPurchase
        : undefined,
    SavingsPlansDetails:
      output.SavingsPlansDetails !== undefined &&
      output.SavingsPlansDetails !== null
        ? deserializeAws_json1_1SavingsPlansDetails(
            output.SavingsPlansDetails,
            context
          )
        : undefined,
    UpfrontCost:
      output.UpfrontCost !== undefined && output.UpfrontCost !== null
        ? output.UpfrontCost
        : undefined
  } as any;
};

const deserializeAws_json1_1SavingsPlansPurchaseRecommendationDetailList = (
  output: any,
  context: __SerdeContext
): SavingsPlansPurchaseRecommendationDetail[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SavingsPlansPurchaseRecommendationDetail(
      entry,
      context
    )
  );
};

const deserializeAws_json1_1SavingsPlansPurchaseRecommendationMetadata = (
  output: any,
  context: __SerdeContext
): SavingsPlansPurchaseRecommendationMetadata => {
  return {
    __type: "SavingsPlansPurchaseRecommendationMetadata",
    GenerationTimestamp:
      output.GenerationTimestamp !== undefined &&
      output.GenerationTimestamp !== null
        ? output.GenerationTimestamp
        : undefined,
    RecommendationId:
      output.RecommendationId !== undefined && output.RecommendationId !== null
        ? output.RecommendationId
        : undefined
  } as any;
};

const deserializeAws_json1_1SavingsPlansPurchaseRecommendationSummary = (
  output: any,
  context: __SerdeContext
): SavingsPlansPurchaseRecommendationSummary => {
  return {
    __type: "SavingsPlansPurchaseRecommendationSummary",
    CurrencyCode:
      output.CurrencyCode !== undefined && output.CurrencyCode !== null
        ? output.CurrencyCode
        : undefined,
    CurrentOnDemandSpend:
      output.CurrentOnDemandSpend !== undefined &&
      output.CurrentOnDemandSpend !== null
        ? output.CurrentOnDemandSpend
        : undefined,
    DailyCommitmentToPurchase:
      output.DailyCommitmentToPurchase !== undefined &&
      output.DailyCommitmentToPurchase !== null
        ? output.DailyCommitmentToPurchase
        : undefined,
    EstimatedMonthlySavingsAmount:
      output.EstimatedMonthlySavingsAmount !== undefined &&
      output.EstimatedMonthlySavingsAmount !== null
        ? output.EstimatedMonthlySavingsAmount
        : undefined,
    EstimatedOnDemandCostWithCurrentCommitment:
      output.EstimatedOnDemandCostWithCurrentCommitment !== undefined &&
      output.EstimatedOnDemandCostWithCurrentCommitment !== null
        ? output.EstimatedOnDemandCostWithCurrentCommitment
        : undefined,
    EstimatedROI:
      output.EstimatedROI !== undefined && output.EstimatedROI !== null
        ? output.EstimatedROI
        : undefined,
    EstimatedSavingsAmount:
      output.EstimatedSavingsAmount !== undefined &&
      output.EstimatedSavingsAmount !== null
        ? output.EstimatedSavingsAmount
        : undefined,
    EstimatedSavingsPercentage:
      output.EstimatedSavingsPercentage !== undefined &&
      output.EstimatedSavingsPercentage !== null
        ? output.EstimatedSavingsPercentage
        : undefined,
    EstimatedTotalCost:
      output.EstimatedTotalCost !== undefined &&
      output.EstimatedTotalCost !== null
        ? output.EstimatedTotalCost
        : undefined,
    HourlyCommitmentToPurchase:
      output.HourlyCommitmentToPurchase !== undefined &&
      output.HourlyCommitmentToPurchase !== null
        ? output.HourlyCommitmentToPurchase
        : undefined,
    TotalRecommendationCount:
      output.TotalRecommendationCount !== undefined &&
      output.TotalRecommendationCount !== null
        ? output.TotalRecommendationCount
        : undefined
  } as any;
};

const deserializeAws_json1_1SavingsPlansSavings = (
  output: any,
  context: __SerdeContext
): SavingsPlansSavings => {
  return {
    __type: "SavingsPlansSavings",
    NetSavings:
      output.NetSavings !== undefined && output.NetSavings !== null
        ? output.NetSavings
        : undefined,
    OnDemandCostEquivalent:
      output.OnDemandCostEquivalent !== undefined &&
      output.OnDemandCostEquivalent !== null
        ? output.OnDemandCostEquivalent
        : undefined
  } as any;
};

const deserializeAws_json1_1SavingsPlansUtilization = (
  output: any,
  context: __SerdeContext
): SavingsPlansUtilization => {
  return {
    __type: "SavingsPlansUtilization",
    TotalCommitment:
      output.TotalCommitment !== undefined && output.TotalCommitment !== null
        ? output.TotalCommitment
        : undefined,
    UnusedCommitment:
      output.UnusedCommitment !== undefined && output.UnusedCommitment !== null
        ? output.UnusedCommitment
        : undefined,
    UsedCommitment:
      output.UsedCommitment !== undefined && output.UsedCommitment !== null
        ? output.UsedCommitment
        : undefined,
    UtilizationPercentage:
      output.UtilizationPercentage !== undefined &&
      output.UtilizationPercentage !== null
        ? output.UtilizationPercentage
        : undefined
  } as any;
};

const deserializeAws_json1_1SavingsPlansUtilizationAggregates = (
  output: any,
  context: __SerdeContext
): SavingsPlansUtilizationAggregates => {
  return {
    __type: "SavingsPlansUtilizationAggregates",
    AmortizedCommitment:
      output.AmortizedCommitment !== undefined &&
      output.AmortizedCommitment !== null
        ? deserializeAws_json1_1SavingsPlansAmortizedCommitment(
            output.AmortizedCommitment,
            context
          )
        : undefined,
    Savings:
      output.Savings !== undefined && output.Savings !== null
        ? deserializeAws_json1_1SavingsPlansSavings(output.Savings, context)
        : undefined,
    Utilization:
      output.Utilization !== undefined && output.Utilization !== null
        ? deserializeAws_json1_1SavingsPlansUtilization(
            output.Utilization,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1SavingsPlansUtilizationByTime = (
  output: any,
  context: __SerdeContext
): SavingsPlansUtilizationByTime => {
  return {
    __type: "SavingsPlansUtilizationByTime",
    AmortizedCommitment:
      output.AmortizedCommitment !== undefined &&
      output.AmortizedCommitment !== null
        ? deserializeAws_json1_1SavingsPlansAmortizedCommitment(
            output.AmortizedCommitment,
            context
          )
        : undefined,
    Savings:
      output.Savings !== undefined && output.Savings !== null
        ? deserializeAws_json1_1SavingsPlansSavings(output.Savings, context)
        : undefined,
    TimePeriod:
      output.TimePeriod !== undefined && output.TimePeriod !== null
        ? deserializeAws_json1_1DateInterval(output.TimePeriod, context)
        : undefined,
    Utilization:
      output.Utilization !== undefined && output.Utilization !== null
        ? deserializeAws_json1_1SavingsPlansUtilization(
            output.Utilization,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1SavingsPlansUtilizationDetail = (
  output: any,
  context: __SerdeContext
): SavingsPlansUtilizationDetail => {
  return {
    __type: "SavingsPlansUtilizationDetail",
    AmortizedCommitment:
      output.AmortizedCommitment !== undefined &&
      output.AmortizedCommitment !== null
        ? deserializeAws_json1_1SavingsPlansAmortizedCommitment(
            output.AmortizedCommitment,
            context
          )
        : undefined,
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_json1_1Attributes(output.Attributes, context)
        : undefined,
    Savings:
      output.Savings !== undefined && output.Savings !== null
        ? deserializeAws_json1_1SavingsPlansSavings(output.Savings, context)
        : undefined,
    SavingsPlanArn:
      output.SavingsPlanArn !== undefined && output.SavingsPlanArn !== null
        ? output.SavingsPlanArn
        : undefined,
    Utilization:
      output.Utilization !== undefined && output.Utilization !== null
        ? deserializeAws_json1_1SavingsPlansUtilization(
            output.Utilization,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1SavingsPlansUtilizationDetails = (
  output: any,
  context: __SerdeContext
): SavingsPlansUtilizationDetail[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SavingsPlansUtilizationDetail(entry, context)
  );
};

const deserializeAws_json1_1SavingsPlansUtilizationsByTime = (
  output: any,
  context: __SerdeContext
): SavingsPlansUtilizationByTime[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SavingsPlansUtilizationByTime(entry, context)
  );
};

const deserializeAws_json1_1ServiceQuotaExceededException = (
  output: any,
  context: __SerdeContext
): ServiceQuotaExceededException => {
  return {
    __type: "ServiceQuotaExceededException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1ServiceSpecification = (
  output: any,
  context: __SerdeContext
): ServiceSpecification => {
  return {
    __type: "ServiceSpecification",
    EC2Specification:
      output.EC2Specification !== undefined && output.EC2Specification !== null
        ? deserializeAws_json1_1EC2Specification(
            output.EC2Specification,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1TagValues = (
  output: any,
  context: __SerdeContext
): TagValues => {
  return {
    __type: "TagValues",
    Key:
      output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Values:
      output.Values !== undefined && output.Values !== null
        ? deserializeAws_json1_1Values(output.Values, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1TagValuesList = (
  output: any,
  context: __SerdeContext
): TagValues[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TagValues(entry, context)
  );
};

const deserializeAws_json1_1TargetInstance = (
  output: any,
  context: __SerdeContext
): TargetInstance => {
  return {
    __type: "TargetInstance",
    CurrencyCode:
      output.CurrencyCode !== undefined && output.CurrencyCode !== null
        ? output.CurrencyCode
        : undefined,
    DefaultTargetInstance:
      output.DefaultTargetInstance !== undefined &&
      output.DefaultTargetInstance !== null
        ? output.DefaultTargetInstance
        : undefined,
    EstimatedMonthlyCost:
      output.EstimatedMonthlyCost !== undefined &&
      output.EstimatedMonthlyCost !== null
        ? output.EstimatedMonthlyCost
        : undefined,
    EstimatedMonthlySavings:
      output.EstimatedMonthlySavings !== undefined &&
      output.EstimatedMonthlySavings !== null
        ? output.EstimatedMonthlySavings
        : undefined,
    ExpectedResourceUtilization:
      output.ExpectedResourceUtilization !== undefined &&
      output.ExpectedResourceUtilization !== null
        ? deserializeAws_json1_1ResourceUtilization(
            output.ExpectedResourceUtilization,
            context
          )
        : undefined,
    ResourceDetails:
      output.ResourceDetails !== undefined && output.ResourceDetails !== null
        ? deserializeAws_json1_1ResourceDetails(output.ResourceDetails, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1TargetInstancesList = (
  output: any,
  context: __SerdeContext
): TargetInstance[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TargetInstance(entry, context)
  );
};

const deserializeAws_json1_1TerminateRecommendationDetail = (
  output: any,
  context: __SerdeContext
): TerminateRecommendationDetail => {
  return {
    __type: "TerminateRecommendationDetail",
    CurrencyCode:
      output.CurrencyCode !== undefined && output.CurrencyCode !== null
        ? output.CurrencyCode
        : undefined,
    EstimatedMonthlySavings:
      output.EstimatedMonthlySavings !== undefined &&
      output.EstimatedMonthlySavings !== null
        ? output.EstimatedMonthlySavings
        : undefined
  } as any;
};

const deserializeAws_json1_1UnresolvableUsageUnitException = (
  output: any,
  context: __SerdeContext
): UnresolvableUsageUnitException => {
  return {
    __type: "UnresolvableUsageUnitException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateCostCategoryDefinitionResponse = (
  output: any,
  context: __SerdeContext
): UpdateCostCategoryDefinitionResponse => {
  return {
    __type: "UpdateCostCategoryDefinitionResponse",
    CostCategoryArn:
      output.CostCategoryArn !== undefined && output.CostCategoryArn !== null
        ? output.CostCategoryArn
        : undefined,
    EffectiveStart:
      output.EffectiveStart !== undefined && output.EffectiveStart !== null
        ? output.EffectiveStart
        : undefined
  } as any;
};

const deserializeAws_json1_1UtilizationByTime = (
  output: any,
  context: __SerdeContext
): UtilizationByTime => {
  return {
    __type: "UtilizationByTime",
    Groups:
      output.Groups !== undefined && output.Groups !== null
        ? deserializeAws_json1_1ReservationUtilizationGroups(
            output.Groups,
            context
          )
        : undefined,
    TimePeriod:
      output.TimePeriod !== undefined && output.TimePeriod !== null
        ? deserializeAws_json1_1DateInterval(output.TimePeriod, context)
        : undefined,
    Total:
      output.Total !== undefined && output.Total !== null
        ? deserializeAws_json1_1ReservationAggregates(output.Total, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1UtilizationsByTime = (
  output: any,
  context: __SerdeContext
): UtilizationByTime[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1UtilizationByTime(entry, context)
  );
};

const deserializeAws_json1_1Values = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
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
