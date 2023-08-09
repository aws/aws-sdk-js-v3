// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
  parseBoolean as __parseBoolean,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  serializeFloat as __serializeFloat,
  strictParseFloat as __strictParseFloat,
  strictParseInt32 as __strictParseInt32,
  strictParseLong as __strictParseLong,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { XMLParser } from "fast-xml-parser";

import { BuildSuggestersCommandInput, BuildSuggestersCommandOutput } from "../commands/BuildSuggestersCommand";
import { CreateDomainCommandInput, CreateDomainCommandOutput } from "../commands/CreateDomainCommand";
import {
  DefineAnalysisSchemeCommandInput,
  DefineAnalysisSchemeCommandOutput,
} from "../commands/DefineAnalysisSchemeCommand";
import { DefineExpressionCommandInput, DefineExpressionCommandOutput } from "../commands/DefineExpressionCommand";
import { DefineIndexFieldCommandInput, DefineIndexFieldCommandOutput } from "../commands/DefineIndexFieldCommand";
import { DefineSuggesterCommandInput, DefineSuggesterCommandOutput } from "../commands/DefineSuggesterCommand";
import {
  DeleteAnalysisSchemeCommandInput,
  DeleteAnalysisSchemeCommandOutput,
} from "../commands/DeleteAnalysisSchemeCommand";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "../commands/DeleteDomainCommand";
import { DeleteExpressionCommandInput, DeleteExpressionCommandOutput } from "../commands/DeleteExpressionCommand";
import { DeleteIndexFieldCommandInput, DeleteIndexFieldCommandOutput } from "../commands/DeleteIndexFieldCommand";
import { DeleteSuggesterCommandInput, DeleteSuggesterCommandOutput } from "../commands/DeleteSuggesterCommand";
import {
  DescribeAnalysisSchemesCommandInput,
  DescribeAnalysisSchemesCommandOutput,
} from "../commands/DescribeAnalysisSchemesCommand";
import {
  DescribeAvailabilityOptionsCommandInput,
  DescribeAvailabilityOptionsCommandOutput,
} from "../commands/DescribeAvailabilityOptionsCommand";
import {
  DescribeDomainEndpointOptionsCommandInput,
  DescribeDomainEndpointOptionsCommandOutput,
} from "../commands/DescribeDomainEndpointOptionsCommand";
import { DescribeDomainsCommandInput, DescribeDomainsCommandOutput } from "../commands/DescribeDomainsCommand";
import {
  DescribeExpressionsCommandInput,
  DescribeExpressionsCommandOutput,
} from "../commands/DescribeExpressionsCommand";
import {
  DescribeIndexFieldsCommandInput,
  DescribeIndexFieldsCommandOutput,
} from "../commands/DescribeIndexFieldsCommand";
import {
  DescribeScalingParametersCommandInput,
  DescribeScalingParametersCommandOutput,
} from "../commands/DescribeScalingParametersCommand";
import {
  DescribeServiceAccessPoliciesCommandInput,
  DescribeServiceAccessPoliciesCommandOutput,
} from "../commands/DescribeServiceAccessPoliciesCommand";
import { DescribeSuggestersCommandInput, DescribeSuggestersCommandOutput } from "../commands/DescribeSuggestersCommand";
import { IndexDocumentsCommandInput, IndexDocumentsCommandOutput } from "../commands/IndexDocumentsCommand";
import { ListDomainNamesCommandInput, ListDomainNamesCommandOutput } from "../commands/ListDomainNamesCommand";
import {
  UpdateAvailabilityOptionsCommandInput,
  UpdateAvailabilityOptionsCommandOutput,
} from "../commands/UpdateAvailabilityOptionsCommand";
import {
  UpdateDomainEndpointOptionsCommandInput,
  UpdateDomainEndpointOptionsCommandOutput,
} from "../commands/UpdateDomainEndpointOptionsCommand";
import {
  UpdateScalingParametersCommandInput,
  UpdateScalingParametersCommandOutput,
} from "../commands/UpdateScalingParametersCommand";
import {
  UpdateServiceAccessPoliciesCommandInput,
  UpdateServiceAccessPoliciesCommandOutput,
} from "../commands/UpdateServiceAccessPoliciesCommand";
import { CloudSearchServiceException as __BaseException } from "../models/CloudSearchServiceException";
import {
  AccessPoliciesStatus,
  AnalysisOptions,
  AnalysisScheme,
  AnalysisSchemeStatus,
  AvailabilityOptionsStatus,
  BaseException,
  BuildSuggestersRequest,
  BuildSuggestersResponse,
  CreateDomainRequest,
  CreateDomainResponse,
  DateArrayOptions,
  DateOptions,
  DefineAnalysisSchemeRequest,
  DefineAnalysisSchemeResponse,
  DefineExpressionRequest,
  DefineExpressionResponse,
  DefineIndexFieldRequest,
  DefineIndexFieldResponse,
  DefineSuggesterRequest,
  DefineSuggesterResponse,
  DeleteAnalysisSchemeRequest,
  DeleteAnalysisSchemeResponse,
  DeleteDomainRequest,
  DeleteDomainResponse,
  DeleteExpressionRequest,
  DeleteExpressionResponse,
  DeleteIndexFieldRequest,
  DeleteIndexFieldResponse,
  DeleteSuggesterRequest,
  DeleteSuggesterResponse,
  DescribeAnalysisSchemesRequest,
  DescribeAnalysisSchemesResponse,
  DescribeAvailabilityOptionsRequest,
  DescribeAvailabilityOptionsResponse,
  DescribeDomainEndpointOptionsRequest,
  DescribeDomainEndpointOptionsResponse,
  DescribeDomainsRequest,
  DescribeDomainsResponse,
  DescribeExpressionsRequest,
  DescribeExpressionsResponse,
  DescribeIndexFieldsRequest,
  DescribeIndexFieldsResponse,
  DescribeScalingParametersRequest,
  DescribeScalingParametersResponse,
  DescribeServiceAccessPoliciesRequest,
  DescribeServiceAccessPoliciesResponse,
  DescribeSuggestersRequest,
  DescribeSuggestersResponse,
  DisabledOperationException,
  DocumentSuggesterOptions,
  DomainEndpointOptions,
  DomainEndpointOptionsStatus,
  DomainStatus,
  DoubleArrayOptions,
  DoubleOptions,
  Expression,
  ExpressionStatus,
  IndexDocumentsRequest,
  IndexDocumentsResponse,
  IndexField,
  IndexFieldStatus,
  IntArrayOptions,
  InternalException,
  IntOptions,
  InvalidTypeException,
  LatLonOptions,
  LimitExceededException,
  Limits,
  ListDomainNamesResponse,
  LiteralArrayOptions,
  LiteralOptions,
  OptionStatus,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  ScalingParameters,
  ScalingParametersStatus,
  ServiceEndpoint,
  Suggester,
  SuggesterStatus,
  TextArrayOptions,
  TextOptions,
  UpdateAvailabilityOptionsRequest,
  UpdateAvailabilityOptionsResponse,
  UpdateDomainEndpointOptionsRequest,
  UpdateDomainEndpointOptionsResponse,
  UpdateScalingParametersRequest,
  UpdateScalingParametersResponse,
  UpdateServiceAccessPoliciesRequest,
  UpdateServiceAccessPoliciesResponse,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_queryBuildSuggestersCommand
 */
export const se_BuildSuggestersCommand = async (
  input: BuildSuggestersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_BuildSuggestersRequest(input, context),
    Action: "BuildSuggesters",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateDomainCommand
 */
export const se_CreateDomainCommand = async (
  input: CreateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateDomainRequest(input, context),
    Action: "CreateDomain",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDefineAnalysisSchemeCommand
 */
export const se_DefineAnalysisSchemeCommand = async (
  input: DefineAnalysisSchemeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DefineAnalysisSchemeRequest(input, context),
    Action: "DefineAnalysisScheme",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDefineExpressionCommand
 */
export const se_DefineExpressionCommand = async (
  input: DefineExpressionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DefineExpressionRequest(input, context),
    Action: "DefineExpression",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDefineIndexFieldCommand
 */
export const se_DefineIndexFieldCommand = async (
  input: DefineIndexFieldCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DefineIndexFieldRequest(input, context),
    Action: "DefineIndexField",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDefineSuggesterCommand
 */
export const se_DefineSuggesterCommand = async (
  input: DefineSuggesterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DefineSuggesterRequest(input, context),
    Action: "DefineSuggester",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteAnalysisSchemeCommand
 */
export const se_DeleteAnalysisSchemeCommand = async (
  input: DeleteAnalysisSchemeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteAnalysisSchemeRequest(input, context),
    Action: "DeleteAnalysisScheme",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteDomainCommand
 */
export const se_DeleteDomainCommand = async (
  input: DeleteDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteDomainRequest(input, context),
    Action: "DeleteDomain",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteExpressionCommand
 */
export const se_DeleteExpressionCommand = async (
  input: DeleteExpressionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteExpressionRequest(input, context),
    Action: "DeleteExpression",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteIndexFieldCommand
 */
export const se_DeleteIndexFieldCommand = async (
  input: DeleteIndexFieldCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteIndexFieldRequest(input, context),
    Action: "DeleteIndexField",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteSuggesterCommand
 */
export const se_DeleteSuggesterCommand = async (
  input: DeleteSuggesterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteSuggesterRequest(input, context),
    Action: "DeleteSuggester",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeAnalysisSchemesCommand
 */
export const se_DescribeAnalysisSchemesCommand = async (
  input: DescribeAnalysisSchemesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeAnalysisSchemesRequest(input, context),
    Action: "DescribeAnalysisSchemes",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeAvailabilityOptionsCommand
 */
export const se_DescribeAvailabilityOptionsCommand = async (
  input: DescribeAvailabilityOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeAvailabilityOptionsRequest(input, context),
    Action: "DescribeAvailabilityOptions",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeDomainEndpointOptionsCommand
 */
export const se_DescribeDomainEndpointOptionsCommand = async (
  input: DescribeDomainEndpointOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeDomainEndpointOptionsRequest(input, context),
    Action: "DescribeDomainEndpointOptions",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeDomainsCommand
 */
export const se_DescribeDomainsCommand = async (
  input: DescribeDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeDomainsRequest(input, context),
    Action: "DescribeDomains",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeExpressionsCommand
 */
export const se_DescribeExpressionsCommand = async (
  input: DescribeExpressionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeExpressionsRequest(input, context),
    Action: "DescribeExpressions",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeIndexFieldsCommand
 */
export const se_DescribeIndexFieldsCommand = async (
  input: DescribeIndexFieldsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeIndexFieldsRequest(input, context),
    Action: "DescribeIndexFields",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeScalingParametersCommand
 */
export const se_DescribeScalingParametersCommand = async (
  input: DescribeScalingParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeScalingParametersRequest(input, context),
    Action: "DescribeScalingParameters",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeServiceAccessPoliciesCommand
 */
export const se_DescribeServiceAccessPoliciesCommand = async (
  input: DescribeServiceAccessPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeServiceAccessPoliciesRequest(input, context),
    Action: "DescribeServiceAccessPolicies",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeSuggestersCommand
 */
export const se_DescribeSuggestersCommand = async (
  input: DescribeSuggestersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeSuggestersRequest(input, context),
    Action: "DescribeSuggesters",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryIndexDocumentsCommand
 */
export const se_IndexDocumentsCommand = async (
  input: IndexDocumentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_IndexDocumentsRequest(input, context),
    Action: "IndexDocuments",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListDomainNamesCommand
 */
export const se_ListDomainNamesCommand = async (
  input: ListDomainNamesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    Action: "ListDomainNames",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUpdateAvailabilityOptionsCommand
 */
export const se_UpdateAvailabilityOptionsCommand = async (
  input: UpdateAvailabilityOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UpdateAvailabilityOptionsRequest(input, context),
    Action: "UpdateAvailabilityOptions",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUpdateDomainEndpointOptionsCommand
 */
export const se_UpdateDomainEndpointOptionsCommand = async (
  input: UpdateDomainEndpointOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UpdateDomainEndpointOptionsRequest(input, context),
    Action: "UpdateDomainEndpointOptions",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUpdateScalingParametersCommand
 */
export const se_UpdateScalingParametersCommand = async (
  input: UpdateScalingParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UpdateScalingParametersRequest(input, context),
    Action: "UpdateScalingParameters",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUpdateServiceAccessPoliciesCommand
 */
export const se_UpdateServiceAccessPoliciesCommand = async (
  input: UpdateServiceAccessPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UpdateServiceAccessPoliciesRequest(input, context),
    Action: "UpdateServiceAccessPolicies",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_queryBuildSuggestersCommand
 */
export const de_BuildSuggestersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BuildSuggestersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BuildSuggestersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BuildSuggestersResponse(data.BuildSuggestersResult, context);
  const response: BuildSuggestersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryBuildSuggestersCommandError
 */
const de_BuildSuggestersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BuildSuggestersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cloudsearch#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateDomainCommand
 */
export const de_CreateDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDomainResponse(data.CreateDomainResult, context);
  const response: CreateDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateDomainCommandError
 */
const de_CreateDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.cloudsearch#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExists":
    case "com.amazonaws.cloudsearch#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cloudsearch#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDefineAnalysisSchemeCommand
 */
export const de_DefineAnalysisSchemeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DefineAnalysisSchemeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DefineAnalysisSchemeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DefineAnalysisSchemeResponse(data.DefineAnalysisSchemeResult, context);
  const response: DefineAnalysisSchemeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDefineAnalysisSchemeCommandError
 */
const de_DefineAnalysisSchemeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DefineAnalysisSchemeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidType":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      throw await de_InvalidTypeExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.cloudsearch#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cloudsearch#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDefineExpressionCommand
 */
export const de_DefineExpressionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DefineExpressionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DefineExpressionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DefineExpressionResponse(data.DefineExpressionResult, context);
  const response: DefineExpressionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDefineExpressionCommandError
 */
const de_DefineExpressionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DefineExpressionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidType":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      throw await de_InvalidTypeExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.cloudsearch#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cloudsearch#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDefineIndexFieldCommand
 */
export const de_DefineIndexFieldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DefineIndexFieldCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DefineIndexFieldCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DefineIndexFieldResponse(data.DefineIndexFieldResult, context);
  const response: DefineIndexFieldCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDefineIndexFieldCommandError
 */
const de_DefineIndexFieldCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DefineIndexFieldCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidType":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      throw await de_InvalidTypeExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.cloudsearch#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cloudsearch#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDefineSuggesterCommand
 */
export const de_DefineSuggesterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DefineSuggesterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DefineSuggesterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DefineSuggesterResponse(data.DefineSuggesterResult, context);
  const response: DefineSuggesterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDefineSuggesterCommandError
 */
const de_DefineSuggesterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DefineSuggesterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidType":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      throw await de_InvalidTypeExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.cloudsearch#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cloudsearch#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteAnalysisSchemeCommand
 */
export const de_DeleteAnalysisSchemeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnalysisSchemeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAnalysisSchemeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteAnalysisSchemeResponse(data.DeleteAnalysisSchemeResult, context);
  const response: DeleteAnalysisSchemeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteAnalysisSchemeCommandError
 */
const de_DeleteAnalysisSchemeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnalysisSchemeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidType":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      throw await de_InvalidTypeExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cloudsearch#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteDomainCommand
 */
export const de_DeleteDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteDomainResponse(data.DeleteDomainResult, context);
  const response: DeleteDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteDomainCommandError
 */
const de_DeleteDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteExpressionCommand
 */
export const de_DeleteExpressionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExpressionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteExpressionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteExpressionResponse(data.DeleteExpressionResult, context);
  const response: DeleteExpressionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteExpressionCommandError
 */
const de_DeleteExpressionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExpressionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidType":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      throw await de_InvalidTypeExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cloudsearch#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteIndexFieldCommand
 */
export const de_DeleteIndexFieldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIndexFieldCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteIndexFieldCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteIndexFieldResponse(data.DeleteIndexFieldResult, context);
  const response: DeleteIndexFieldCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteIndexFieldCommandError
 */
const de_DeleteIndexFieldCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIndexFieldCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidType":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      throw await de_InvalidTypeExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cloudsearch#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteSuggesterCommand
 */
export const de_DeleteSuggesterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSuggesterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteSuggesterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteSuggesterResponse(data.DeleteSuggesterResult, context);
  const response: DeleteSuggesterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteSuggesterCommandError
 */
const de_DeleteSuggesterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSuggesterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidType":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      throw await de_InvalidTypeExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cloudsearch#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeAnalysisSchemesCommand
 */
export const de_DescribeAnalysisSchemesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAnalysisSchemesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAnalysisSchemesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAnalysisSchemesResponse(data.DescribeAnalysisSchemesResult, context);
  const response: DescribeAnalysisSchemesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeAnalysisSchemesCommandError
 */
const de_DescribeAnalysisSchemesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAnalysisSchemesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeAvailabilityOptionsCommand
 */
export const de_DescribeAvailabilityOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAvailabilityOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAvailabilityOptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAvailabilityOptionsResponse(data.DescribeAvailabilityOptionsResult, context);
  const response: DescribeAvailabilityOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeAvailabilityOptionsCommandError
 */
const de_DescribeAvailabilityOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAvailabilityOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "DisabledAction":
    case "com.amazonaws.cloudsearch#DisabledOperationException":
      throw await de_DisabledOperationExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidType":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      throw await de_InvalidTypeExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.cloudsearch#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeDomainEndpointOptionsCommand
 */
export const de_DescribeDomainEndpointOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainEndpointOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDomainEndpointOptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDomainEndpointOptionsResponse(data.DescribeDomainEndpointOptionsResult, context);
  const response: DescribeDomainEndpointOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeDomainEndpointOptionsCommandError
 */
const de_DescribeDomainEndpointOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainEndpointOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "DisabledAction":
    case "com.amazonaws.cloudsearch#DisabledOperationException":
      throw await de_DisabledOperationExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.cloudsearch#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeDomainsCommand
 */
export const de_DescribeDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDomainsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDomainsResponse(data.DescribeDomainsResult, context);
  const response: DescribeDomainsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeDomainsCommandError
 */
const de_DescribeDomainsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeExpressionsCommand
 */
export const de_DescribeExpressionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExpressionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeExpressionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeExpressionsResponse(data.DescribeExpressionsResult, context);
  const response: DescribeExpressionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeExpressionsCommandError
 */
const de_DescribeExpressionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExpressionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeIndexFieldsCommand
 */
export const de_DescribeIndexFieldsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIndexFieldsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeIndexFieldsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeIndexFieldsResponse(data.DescribeIndexFieldsResult, context);
  const response: DescribeIndexFieldsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeIndexFieldsCommandError
 */
const de_DescribeIndexFieldsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIndexFieldsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeScalingParametersCommand
 */
export const de_DescribeScalingParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeScalingParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeScalingParametersResponse(data.DescribeScalingParametersResult, context);
  const response: DescribeScalingParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeScalingParametersCommandError
 */
const de_DescribeScalingParametersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingParametersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeServiceAccessPoliciesCommand
 */
export const de_DescribeServiceAccessPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServiceAccessPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeServiceAccessPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeServiceAccessPoliciesResponse(data.DescribeServiceAccessPoliciesResult, context);
  const response: DescribeServiceAccessPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeServiceAccessPoliciesCommandError
 */
const de_DescribeServiceAccessPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServiceAccessPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeSuggestersCommand
 */
export const de_DescribeSuggestersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSuggestersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeSuggestersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeSuggestersResponse(data.DescribeSuggestersResult, context);
  const response: DescribeSuggestersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeSuggestersCommandError
 */
const de_DescribeSuggestersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSuggestersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryIndexDocumentsCommand
 */
export const de_IndexDocumentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IndexDocumentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_IndexDocumentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_IndexDocumentsResponse(data.IndexDocumentsResult, context);
  const response: IndexDocumentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryIndexDocumentsCommandError
 */
const de_IndexDocumentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IndexDocumentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cloudsearch#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListDomainNamesCommand
 */
export const de_ListDomainNamesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainNamesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDomainNamesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDomainNamesResponse(data.ListDomainNamesResult, context);
  const response: ListDomainNamesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListDomainNamesCommandError
 */
const de_ListDomainNamesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainNamesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryUpdateAvailabilityOptionsCommand
 */
export const de_UpdateAvailabilityOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAvailabilityOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateAvailabilityOptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateAvailabilityOptionsResponse(data.UpdateAvailabilityOptionsResult, context);
  const response: UpdateAvailabilityOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryUpdateAvailabilityOptionsCommandError
 */
const de_UpdateAvailabilityOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAvailabilityOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "DisabledAction":
    case "com.amazonaws.cloudsearch#DisabledOperationException":
      throw await de_DisabledOperationExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidType":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      throw await de_InvalidTypeExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.cloudsearch#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cloudsearch#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryUpdateDomainEndpointOptionsCommand
 */
export const de_UpdateDomainEndpointOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainEndpointOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDomainEndpointOptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateDomainEndpointOptionsResponse(data.UpdateDomainEndpointOptionsResult, context);
  const response: UpdateDomainEndpointOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryUpdateDomainEndpointOptionsCommandError
 */
const de_UpdateDomainEndpointOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainEndpointOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "DisabledAction":
    case "com.amazonaws.cloudsearch#DisabledOperationException":
      throw await de_DisabledOperationExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidType":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      throw await de_InvalidTypeExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.cloudsearch#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cloudsearch#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryUpdateScalingParametersCommand
 */
export const de_UpdateScalingParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateScalingParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateScalingParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateScalingParametersResponse(data.UpdateScalingParametersResult, context);
  const response: UpdateScalingParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryUpdateScalingParametersCommandError
 */
const de_UpdateScalingParametersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateScalingParametersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidType":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      throw await de_InvalidTypeExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.cloudsearch#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cloudsearch#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryUpdateServiceAccessPoliciesCommand
 */
export const de_UpdateServiceAccessPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceAccessPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateServiceAccessPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateServiceAccessPoliciesResponse(data.UpdateServiceAccessPoliciesResult, context);
  const response: UpdateServiceAccessPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryUpdateServiceAccessPoliciesCommandError
 */
const de_UpdateServiceAccessPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceAccessPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidType":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      throw await de_InvalidTypeExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.cloudsearch#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cloudsearch#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryBaseExceptionRes
 */
const de_BaseExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BaseException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_BaseException(body.Error, context);
  const exception = new BaseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDisabledOperationExceptionRes
 */
const de_DisabledOperationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DisabledOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DisabledOperationException(body.Error, context);
  const exception = new DisabledOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInternalExceptionRes
 */
const de_InternalExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<InternalException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InternalException(body.Error, context);
  const exception = new InternalException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidTypeExceptionRes
 */
const de_InvalidTypeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTypeException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidTypeException(body.Error, context);
  const exception = new InvalidTypeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryLimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LimitExceededException(body.Error, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryResourceAlreadyExistsExceptionRes
 */
const de_ResourceAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceAlreadyExistsException(body.Error, context);
  const exception = new ResourceAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFoundException(body.Error, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ValidationException(body.Error, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_queryAnalysisOptions
 */
const se_AnalysisOptions = (input: AnalysisOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Synonyms != null) {
    entries["Synonyms"] = input.Synonyms;
  }
  if (input.Stopwords != null) {
    entries["Stopwords"] = input.Stopwords;
  }
  if (input.StemmingDictionary != null) {
    entries["StemmingDictionary"] = input.StemmingDictionary;
  }
  if (input.JapaneseTokenizationDictionary != null) {
    entries["JapaneseTokenizationDictionary"] = input.JapaneseTokenizationDictionary;
  }
  if (input.AlgorithmicStemming != null) {
    entries["AlgorithmicStemming"] = input.AlgorithmicStemming;
  }
  return entries;
};

/**
 * serializeAws_queryAnalysisScheme
 */
const se_AnalysisScheme = (input: AnalysisScheme, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AnalysisSchemeName != null) {
    entries["AnalysisSchemeName"] = input.AnalysisSchemeName;
  }
  if (input.AnalysisSchemeLanguage != null) {
    entries["AnalysisSchemeLanguage"] = input.AnalysisSchemeLanguage;
  }
  if (input.AnalysisOptions != null) {
    const memberEntries = se_AnalysisOptions(input.AnalysisOptions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AnalysisOptions.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryBuildSuggestersRequest
 */
const se_BuildSuggestersRequest = (input: BuildSuggestersRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DomainName != null) {
    entries["DomainName"] = input.DomainName;
  }
  return entries;
};

/**
 * serializeAws_queryCreateDomainRequest
 */
const se_CreateDomainRequest = (input: CreateDomainRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DomainName != null) {
    entries["DomainName"] = input.DomainName;
  }
  return entries;
};

/**
 * serializeAws_queryDateArrayOptions
 */
const se_DateArrayOptions = (input: DateArrayOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DefaultValue != null) {
    entries["DefaultValue"] = input.DefaultValue;
  }
  if (input.SourceFields != null) {
    entries["SourceFields"] = input.SourceFields;
  }
  if (input.FacetEnabled != null) {
    entries["FacetEnabled"] = input.FacetEnabled;
  }
  if (input.SearchEnabled != null) {
    entries["SearchEnabled"] = input.SearchEnabled;
  }
  if (input.ReturnEnabled != null) {
    entries["ReturnEnabled"] = input.ReturnEnabled;
  }
  return entries;
};

/**
 * serializeAws_queryDateOptions
 */
const se_DateOptions = (input: DateOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DefaultValue != null) {
    entries["DefaultValue"] = input.DefaultValue;
  }
  if (input.SourceField != null) {
    entries["SourceField"] = input.SourceField;
  }
  if (input.FacetEnabled != null) {
    entries["FacetEnabled"] = input.FacetEnabled;
  }
  if (input.SearchEnabled != null) {
    entries["SearchEnabled"] = input.SearchEnabled;
  }
  if (input.ReturnEnabled != null) {
    entries["ReturnEnabled"] = input.ReturnEnabled;
  }
  if (input.SortEnabled != null) {
    entries["SortEnabled"] = input.SortEnabled;
  }
  return entries;
};

/**
 * serializeAws_queryDefineAnalysisSchemeRequest
 */
const se_DefineAnalysisSchemeRequest = (input: DefineAnalysisSchemeRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DomainName != null) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.AnalysisScheme != null) {
    const memberEntries = se_AnalysisScheme(input.AnalysisScheme, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AnalysisScheme.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDefineExpressionRequest
 */
const se_DefineExpressionRequest = (input: DefineExpressionRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DomainName != null) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.Expression != null) {
    const memberEntries = se_Expression(input.Expression, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Expression.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDefineIndexFieldRequest
 */
const se_DefineIndexFieldRequest = (input: DefineIndexFieldRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DomainName != null) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.IndexField != null) {
    const memberEntries = se_IndexField(input.IndexField, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `IndexField.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDefineSuggesterRequest
 */
const se_DefineSuggesterRequest = (input: DefineSuggesterRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DomainName != null) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.Suggester != null) {
    const memberEntries = se_Suggester(input.Suggester, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Suggester.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDeleteAnalysisSchemeRequest
 */
const se_DeleteAnalysisSchemeRequest = (input: DeleteAnalysisSchemeRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DomainName != null) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.AnalysisSchemeName != null) {
    entries["AnalysisSchemeName"] = input.AnalysisSchemeName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteDomainRequest
 */
const se_DeleteDomainRequest = (input: DeleteDomainRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DomainName != null) {
    entries["DomainName"] = input.DomainName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteExpressionRequest
 */
const se_DeleteExpressionRequest = (input: DeleteExpressionRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DomainName != null) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.ExpressionName != null) {
    entries["ExpressionName"] = input.ExpressionName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteIndexFieldRequest
 */
const se_DeleteIndexFieldRequest = (input: DeleteIndexFieldRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DomainName != null) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.IndexFieldName != null) {
    entries["IndexFieldName"] = input.IndexFieldName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteSuggesterRequest
 */
const se_DeleteSuggesterRequest = (input: DeleteSuggesterRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DomainName != null) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.SuggesterName != null) {
    entries["SuggesterName"] = input.SuggesterName;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeAnalysisSchemesRequest
 */
const se_DescribeAnalysisSchemesRequest = (input: DescribeAnalysisSchemesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DomainName != null) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.AnalysisSchemeNames != null) {
    const memberEntries = se_StandardNameList(input.AnalysisSchemeNames, context);
    if (input.AnalysisSchemeNames?.length === 0) {
      entries.AnalysisSchemeNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AnalysisSchemeNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Deployed != null) {
    entries["Deployed"] = input.Deployed;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeAvailabilityOptionsRequest
 */
const se_DescribeAvailabilityOptionsRequest = (
  input: DescribeAvailabilityOptionsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DomainName != null) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.Deployed != null) {
    entries["Deployed"] = input.Deployed;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeDomainEndpointOptionsRequest
 */
const se_DescribeDomainEndpointOptionsRequest = (
  input: DescribeDomainEndpointOptionsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DomainName != null) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.Deployed != null) {
    entries["Deployed"] = input.Deployed;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeDomainsRequest
 */
const se_DescribeDomainsRequest = (input: DescribeDomainsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DomainNames != null) {
    const memberEntries = se_DomainNameList(input.DomainNames, context);
    if (input.DomainNames?.length === 0) {
      entries.DomainNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DomainNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDescribeExpressionsRequest
 */
const se_DescribeExpressionsRequest = (input: DescribeExpressionsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DomainName != null) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.ExpressionNames != null) {
    const memberEntries = se_StandardNameList(input.ExpressionNames, context);
    if (input.ExpressionNames?.length === 0) {
      entries.ExpressionNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ExpressionNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Deployed != null) {
    entries["Deployed"] = input.Deployed;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeIndexFieldsRequest
 */
const se_DescribeIndexFieldsRequest = (input: DescribeIndexFieldsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DomainName != null) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.FieldNames != null) {
    const memberEntries = se_DynamicFieldNameList(input.FieldNames, context);
    if (input.FieldNames?.length === 0) {
      entries.FieldNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `FieldNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Deployed != null) {
    entries["Deployed"] = input.Deployed;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeScalingParametersRequest
 */
const se_DescribeScalingParametersRequest = (input: DescribeScalingParametersRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DomainName != null) {
    entries["DomainName"] = input.DomainName;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeServiceAccessPoliciesRequest
 */
const se_DescribeServiceAccessPoliciesRequest = (
  input: DescribeServiceAccessPoliciesRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DomainName != null) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.Deployed != null) {
    entries["Deployed"] = input.Deployed;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeSuggestersRequest
 */
const se_DescribeSuggestersRequest = (input: DescribeSuggestersRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DomainName != null) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.SuggesterNames != null) {
    const memberEntries = se_StandardNameList(input.SuggesterNames, context);
    if (input.SuggesterNames?.length === 0) {
      entries.SuggesterNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SuggesterNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Deployed != null) {
    entries["Deployed"] = input.Deployed;
  }
  return entries;
};

/**
 * serializeAws_queryDocumentSuggesterOptions
 */
const se_DocumentSuggesterOptions = (input: DocumentSuggesterOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.SourceField != null) {
    entries["SourceField"] = input.SourceField;
  }
  if (input.FuzzyMatching != null) {
    entries["FuzzyMatching"] = input.FuzzyMatching;
  }
  if (input.SortExpression != null) {
    entries["SortExpression"] = input.SortExpression;
  }
  return entries;
};

/**
 * serializeAws_queryDomainEndpointOptions
 */
const se_DomainEndpointOptions = (input: DomainEndpointOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.EnforceHTTPS != null) {
    entries["EnforceHTTPS"] = input.EnforceHTTPS;
  }
  if (input.TLSSecurityPolicy != null) {
    entries["TLSSecurityPolicy"] = input.TLSSecurityPolicy;
  }
  return entries;
};

/**
 * serializeAws_queryDomainNameList
 */
const se_DomainNameList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryDoubleArrayOptions
 */
const se_DoubleArrayOptions = (input: DoubleArrayOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DefaultValue != null) {
    entries["DefaultValue"] = __serializeFloat(input.DefaultValue);
  }
  if (input.SourceFields != null) {
    entries["SourceFields"] = input.SourceFields;
  }
  if (input.FacetEnabled != null) {
    entries["FacetEnabled"] = input.FacetEnabled;
  }
  if (input.SearchEnabled != null) {
    entries["SearchEnabled"] = input.SearchEnabled;
  }
  if (input.ReturnEnabled != null) {
    entries["ReturnEnabled"] = input.ReturnEnabled;
  }
  return entries;
};

/**
 * serializeAws_queryDoubleOptions
 */
const se_DoubleOptions = (input: DoubleOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DefaultValue != null) {
    entries["DefaultValue"] = __serializeFloat(input.DefaultValue);
  }
  if (input.SourceField != null) {
    entries["SourceField"] = input.SourceField;
  }
  if (input.FacetEnabled != null) {
    entries["FacetEnabled"] = input.FacetEnabled;
  }
  if (input.SearchEnabled != null) {
    entries["SearchEnabled"] = input.SearchEnabled;
  }
  if (input.ReturnEnabled != null) {
    entries["ReturnEnabled"] = input.ReturnEnabled;
  }
  if (input.SortEnabled != null) {
    entries["SortEnabled"] = input.SortEnabled;
  }
  return entries;
};

/**
 * serializeAws_queryDynamicFieldNameList
 */
const se_DynamicFieldNameList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryExpression
 */
const se_Expression = (input: Expression, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ExpressionName != null) {
    entries["ExpressionName"] = input.ExpressionName;
  }
  if (input.ExpressionValue != null) {
    entries["ExpressionValue"] = input.ExpressionValue;
  }
  return entries;
};

/**
 * serializeAws_queryIndexDocumentsRequest
 */
const se_IndexDocumentsRequest = (input: IndexDocumentsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DomainName != null) {
    entries["DomainName"] = input.DomainName;
  }
  return entries;
};

/**
 * serializeAws_queryIndexField
 */
const se_IndexField = (input: IndexField, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.IndexFieldName != null) {
    entries["IndexFieldName"] = input.IndexFieldName;
  }
  if (input.IndexFieldType != null) {
    entries["IndexFieldType"] = input.IndexFieldType;
  }
  if (input.IntOptions != null) {
    const memberEntries = se_IntOptions(input.IntOptions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `IntOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DoubleOptions != null) {
    const memberEntries = se_DoubleOptions(input.DoubleOptions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DoubleOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.LiteralOptions != null) {
    const memberEntries = se_LiteralOptions(input.LiteralOptions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LiteralOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TextOptions != null) {
    const memberEntries = se_TextOptions(input.TextOptions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TextOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DateOptions != null) {
    const memberEntries = se_DateOptions(input.DateOptions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DateOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.LatLonOptions != null) {
    const memberEntries = se_LatLonOptions(input.LatLonOptions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LatLonOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.IntArrayOptions != null) {
    const memberEntries = se_IntArrayOptions(input.IntArrayOptions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `IntArrayOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DoubleArrayOptions != null) {
    const memberEntries = se_DoubleArrayOptions(input.DoubleArrayOptions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DoubleArrayOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.LiteralArrayOptions != null) {
    const memberEntries = se_LiteralArrayOptions(input.LiteralArrayOptions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LiteralArrayOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TextArrayOptions != null) {
    const memberEntries = se_TextArrayOptions(input.TextArrayOptions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TextArrayOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DateArrayOptions != null) {
    const memberEntries = se_DateArrayOptions(input.DateArrayOptions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DateArrayOptions.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryIntArrayOptions
 */
const se_IntArrayOptions = (input: IntArrayOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DefaultValue != null) {
    entries["DefaultValue"] = input.DefaultValue;
  }
  if (input.SourceFields != null) {
    entries["SourceFields"] = input.SourceFields;
  }
  if (input.FacetEnabled != null) {
    entries["FacetEnabled"] = input.FacetEnabled;
  }
  if (input.SearchEnabled != null) {
    entries["SearchEnabled"] = input.SearchEnabled;
  }
  if (input.ReturnEnabled != null) {
    entries["ReturnEnabled"] = input.ReturnEnabled;
  }
  return entries;
};

/**
 * serializeAws_queryIntOptions
 */
const se_IntOptions = (input: IntOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DefaultValue != null) {
    entries["DefaultValue"] = input.DefaultValue;
  }
  if (input.SourceField != null) {
    entries["SourceField"] = input.SourceField;
  }
  if (input.FacetEnabled != null) {
    entries["FacetEnabled"] = input.FacetEnabled;
  }
  if (input.SearchEnabled != null) {
    entries["SearchEnabled"] = input.SearchEnabled;
  }
  if (input.ReturnEnabled != null) {
    entries["ReturnEnabled"] = input.ReturnEnabled;
  }
  if (input.SortEnabled != null) {
    entries["SortEnabled"] = input.SortEnabled;
  }
  return entries;
};

/**
 * serializeAws_queryLatLonOptions
 */
const se_LatLonOptions = (input: LatLonOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DefaultValue != null) {
    entries["DefaultValue"] = input.DefaultValue;
  }
  if (input.SourceField != null) {
    entries["SourceField"] = input.SourceField;
  }
  if (input.FacetEnabled != null) {
    entries["FacetEnabled"] = input.FacetEnabled;
  }
  if (input.SearchEnabled != null) {
    entries["SearchEnabled"] = input.SearchEnabled;
  }
  if (input.ReturnEnabled != null) {
    entries["ReturnEnabled"] = input.ReturnEnabled;
  }
  if (input.SortEnabled != null) {
    entries["SortEnabled"] = input.SortEnabled;
  }
  return entries;
};

/**
 * serializeAws_queryLiteralArrayOptions
 */
const se_LiteralArrayOptions = (input: LiteralArrayOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DefaultValue != null) {
    entries["DefaultValue"] = input.DefaultValue;
  }
  if (input.SourceFields != null) {
    entries["SourceFields"] = input.SourceFields;
  }
  if (input.FacetEnabled != null) {
    entries["FacetEnabled"] = input.FacetEnabled;
  }
  if (input.SearchEnabled != null) {
    entries["SearchEnabled"] = input.SearchEnabled;
  }
  if (input.ReturnEnabled != null) {
    entries["ReturnEnabled"] = input.ReturnEnabled;
  }
  return entries;
};

/**
 * serializeAws_queryLiteralOptions
 */
const se_LiteralOptions = (input: LiteralOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DefaultValue != null) {
    entries["DefaultValue"] = input.DefaultValue;
  }
  if (input.SourceField != null) {
    entries["SourceField"] = input.SourceField;
  }
  if (input.FacetEnabled != null) {
    entries["FacetEnabled"] = input.FacetEnabled;
  }
  if (input.SearchEnabled != null) {
    entries["SearchEnabled"] = input.SearchEnabled;
  }
  if (input.ReturnEnabled != null) {
    entries["ReturnEnabled"] = input.ReturnEnabled;
  }
  if (input.SortEnabled != null) {
    entries["SortEnabled"] = input.SortEnabled;
  }
  return entries;
};

/**
 * serializeAws_queryScalingParameters
 */
const se_ScalingParameters = (input: ScalingParameters, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DesiredInstanceType != null) {
    entries["DesiredInstanceType"] = input.DesiredInstanceType;
  }
  if (input.DesiredReplicationCount != null) {
    entries["DesiredReplicationCount"] = input.DesiredReplicationCount;
  }
  if (input.DesiredPartitionCount != null) {
    entries["DesiredPartitionCount"] = input.DesiredPartitionCount;
  }
  return entries;
};

/**
 * serializeAws_queryStandardNameList
 */
const se_StandardNameList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_querySuggester
 */
const se_Suggester = (input: Suggester, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.SuggesterName != null) {
    entries["SuggesterName"] = input.SuggesterName;
  }
  if (input.DocumentSuggesterOptions != null) {
    const memberEntries = se_DocumentSuggesterOptions(input.DocumentSuggesterOptions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DocumentSuggesterOptions.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryTextArrayOptions
 */
const se_TextArrayOptions = (input: TextArrayOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DefaultValue != null) {
    entries["DefaultValue"] = input.DefaultValue;
  }
  if (input.SourceFields != null) {
    entries["SourceFields"] = input.SourceFields;
  }
  if (input.ReturnEnabled != null) {
    entries["ReturnEnabled"] = input.ReturnEnabled;
  }
  if (input.HighlightEnabled != null) {
    entries["HighlightEnabled"] = input.HighlightEnabled;
  }
  if (input.AnalysisScheme != null) {
    entries["AnalysisScheme"] = input.AnalysisScheme;
  }
  return entries;
};

/**
 * serializeAws_queryTextOptions
 */
const se_TextOptions = (input: TextOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DefaultValue != null) {
    entries["DefaultValue"] = input.DefaultValue;
  }
  if (input.SourceField != null) {
    entries["SourceField"] = input.SourceField;
  }
  if (input.ReturnEnabled != null) {
    entries["ReturnEnabled"] = input.ReturnEnabled;
  }
  if (input.SortEnabled != null) {
    entries["SortEnabled"] = input.SortEnabled;
  }
  if (input.HighlightEnabled != null) {
    entries["HighlightEnabled"] = input.HighlightEnabled;
  }
  if (input.AnalysisScheme != null) {
    entries["AnalysisScheme"] = input.AnalysisScheme;
  }
  return entries;
};

/**
 * serializeAws_queryUpdateAvailabilityOptionsRequest
 */
const se_UpdateAvailabilityOptionsRequest = (input: UpdateAvailabilityOptionsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DomainName != null) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.MultiAZ != null) {
    entries["MultiAZ"] = input.MultiAZ;
  }
  return entries;
};

/**
 * serializeAws_queryUpdateDomainEndpointOptionsRequest
 */
const se_UpdateDomainEndpointOptionsRequest = (
  input: UpdateDomainEndpointOptionsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DomainName != null) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.DomainEndpointOptions != null) {
    const memberEntries = se_DomainEndpointOptions(input.DomainEndpointOptions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DomainEndpointOptions.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryUpdateScalingParametersRequest
 */
const se_UpdateScalingParametersRequest = (input: UpdateScalingParametersRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DomainName != null) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.ScalingParameters != null) {
    const memberEntries = se_ScalingParameters(input.ScalingParameters, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ScalingParameters.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryUpdateServiceAccessPoliciesRequest
 */
const se_UpdateServiceAccessPoliciesRequest = (
  input: UpdateServiceAccessPoliciesRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DomainName != null) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.AccessPolicies != null) {
    entries["AccessPolicies"] = input.AccessPolicies;
  }
  return entries;
};

/**
 * deserializeAws_queryAccessPoliciesStatus
 */
const de_AccessPoliciesStatus = (output: any, context: __SerdeContext): AccessPoliciesStatus => {
  const contents: any = {};
  if (output["Options"] !== undefined) {
    contents.Options = __expectString(output["Options"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = de_OptionStatus(output["Status"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryAnalysisOptions
 */
const de_AnalysisOptions = (output: any, context: __SerdeContext): AnalysisOptions => {
  const contents: any = {};
  if (output["Synonyms"] !== undefined) {
    contents.Synonyms = __expectString(output["Synonyms"]);
  }
  if (output["Stopwords"] !== undefined) {
    contents.Stopwords = __expectString(output["Stopwords"]);
  }
  if (output["StemmingDictionary"] !== undefined) {
    contents.StemmingDictionary = __expectString(output["StemmingDictionary"]);
  }
  if (output["JapaneseTokenizationDictionary"] !== undefined) {
    contents.JapaneseTokenizationDictionary = __expectString(output["JapaneseTokenizationDictionary"]);
  }
  if (output["AlgorithmicStemming"] !== undefined) {
    contents.AlgorithmicStemming = __expectString(output["AlgorithmicStemming"]);
  }
  return contents;
};

/**
 * deserializeAws_queryAnalysisScheme
 */
const de_AnalysisScheme = (output: any, context: __SerdeContext): AnalysisScheme => {
  const contents: any = {};
  if (output["AnalysisSchemeName"] !== undefined) {
    contents.AnalysisSchemeName = __expectString(output["AnalysisSchemeName"]);
  }
  if (output["AnalysisSchemeLanguage"] !== undefined) {
    contents.AnalysisSchemeLanguage = __expectString(output["AnalysisSchemeLanguage"]);
  }
  if (output["AnalysisOptions"] !== undefined) {
    contents.AnalysisOptions = de_AnalysisOptions(output["AnalysisOptions"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryAnalysisSchemeStatus
 */
const de_AnalysisSchemeStatus = (output: any, context: __SerdeContext): AnalysisSchemeStatus => {
  const contents: any = {};
  if (output["Options"] !== undefined) {
    contents.Options = de_AnalysisScheme(output["Options"], context);
  }
  if (output["Status"] !== undefined) {
    contents.Status = de_OptionStatus(output["Status"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryAnalysisSchemeStatusList
 */
const de_AnalysisSchemeStatusList = (output: any, context: __SerdeContext): AnalysisSchemeStatus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AnalysisSchemeStatus(entry, context);
    });
};

/**
 * deserializeAws_queryAvailabilityOptionsStatus
 */
const de_AvailabilityOptionsStatus = (output: any, context: __SerdeContext): AvailabilityOptionsStatus => {
  const contents: any = {};
  if (output["Options"] !== undefined) {
    contents.Options = __parseBoolean(output["Options"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = de_OptionStatus(output["Status"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryBaseException
 */
const de_BaseException = (output: any, context: __SerdeContext): BaseException => {
  const contents: any = {};
  if (output["Code"] !== undefined) {
    contents.Code = __expectString(output["Code"]);
  }
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryBuildSuggestersResponse
 */
const de_BuildSuggestersResponse = (output: any, context: __SerdeContext): BuildSuggestersResponse => {
  const contents: any = {};
  if (output.FieldNames === "") {
    contents.FieldNames = [];
  } else if (output["FieldNames"] !== undefined && output["FieldNames"]["member"] !== undefined) {
    contents.FieldNames = de_FieldNameList(__getArrayIfSingleItem(output["FieldNames"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateDomainResponse
 */
const de_CreateDomainResponse = (output: any, context: __SerdeContext): CreateDomainResponse => {
  const contents: any = {};
  if (output["DomainStatus"] !== undefined) {
    contents.DomainStatus = de_DomainStatus(output["DomainStatus"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDateArrayOptions
 */
const de_DateArrayOptions = (output: any, context: __SerdeContext): DateArrayOptions => {
  const contents: any = {};
  if (output["DefaultValue"] !== undefined) {
    contents.DefaultValue = __expectString(output["DefaultValue"]);
  }
  if (output["SourceFields"] !== undefined) {
    contents.SourceFields = __expectString(output["SourceFields"]);
  }
  if (output["FacetEnabled"] !== undefined) {
    contents.FacetEnabled = __parseBoolean(output["FacetEnabled"]);
  }
  if (output["SearchEnabled"] !== undefined) {
    contents.SearchEnabled = __parseBoolean(output["SearchEnabled"]);
  }
  if (output["ReturnEnabled"] !== undefined) {
    contents.ReturnEnabled = __parseBoolean(output["ReturnEnabled"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDateOptions
 */
const de_DateOptions = (output: any, context: __SerdeContext): DateOptions => {
  const contents: any = {};
  if (output["DefaultValue"] !== undefined) {
    contents.DefaultValue = __expectString(output["DefaultValue"]);
  }
  if (output["SourceField"] !== undefined) {
    contents.SourceField = __expectString(output["SourceField"]);
  }
  if (output["FacetEnabled"] !== undefined) {
    contents.FacetEnabled = __parseBoolean(output["FacetEnabled"]);
  }
  if (output["SearchEnabled"] !== undefined) {
    contents.SearchEnabled = __parseBoolean(output["SearchEnabled"]);
  }
  if (output["ReturnEnabled"] !== undefined) {
    contents.ReturnEnabled = __parseBoolean(output["ReturnEnabled"]);
  }
  if (output["SortEnabled"] !== undefined) {
    contents.SortEnabled = __parseBoolean(output["SortEnabled"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDefineAnalysisSchemeResponse
 */
const de_DefineAnalysisSchemeResponse = (output: any, context: __SerdeContext): DefineAnalysisSchemeResponse => {
  const contents: any = {};
  if (output["AnalysisScheme"] !== undefined) {
    contents.AnalysisScheme = de_AnalysisSchemeStatus(output["AnalysisScheme"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDefineExpressionResponse
 */
const de_DefineExpressionResponse = (output: any, context: __SerdeContext): DefineExpressionResponse => {
  const contents: any = {};
  if (output["Expression"] !== undefined) {
    contents.Expression = de_ExpressionStatus(output["Expression"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDefineIndexFieldResponse
 */
const de_DefineIndexFieldResponse = (output: any, context: __SerdeContext): DefineIndexFieldResponse => {
  const contents: any = {};
  if (output["IndexField"] !== undefined) {
    contents.IndexField = de_IndexFieldStatus(output["IndexField"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDefineSuggesterResponse
 */
const de_DefineSuggesterResponse = (output: any, context: __SerdeContext): DefineSuggesterResponse => {
  const contents: any = {};
  if (output["Suggester"] !== undefined) {
    contents.Suggester = de_SuggesterStatus(output["Suggester"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteAnalysisSchemeResponse
 */
const de_DeleteAnalysisSchemeResponse = (output: any, context: __SerdeContext): DeleteAnalysisSchemeResponse => {
  const contents: any = {};
  if (output["AnalysisScheme"] !== undefined) {
    contents.AnalysisScheme = de_AnalysisSchemeStatus(output["AnalysisScheme"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteDomainResponse
 */
const de_DeleteDomainResponse = (output: any, context: __SerdeContext): DeleteDomainResponse => {
  const contents: any = {};
  if (output["DomainStatus"] !== undefined) {
    contents.DomainStatus = de_DomainStatus(output["DomainStatus"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteExpressionResponse
 */
const de_DeleteExpressionResponse = (output: any, context: __SerdeContext): DeleteExpressionResponse => {
  const contents: any = {};
  if (output["Expression"] !== undefined) {
    contents.Expression = de_ExpressionStatus(output["Expression"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteIndexFieldResponse
 */
const de_DeleteIndexFieldResponse = (output: any, context: __SerdeContext): DeleteIndexFieldResponse => {
  const contents: any = {};
  if (output["IndexField"] !== undefined) {
    contents.IndexField = de_IndexFieldStatus(output["IndexField"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteSuggesterResponse
 */
const de_DeleteSuggesterResponse = (output: any, context: __SerdeContext): DeleteSuggesterResponse => {
  const contents: any = {};
  if (output["Suggester"] !== undefined) {
    contents.Suggester = de_SuggesterStatus(output["Suggester"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeAnalysisSchemesResponse
 */
const de_DescribeAnalysisSchemesResponse = (output: any, context: __SerdeContext): DescribeAnalysisSchemesResponse => {
  const contents: any = {};
  if (output.AnalysisSchemes === "") {
    contents.AnalysisSchemes = [];
  } else if (output["AnalysisSchemes"] !== undefined && output["AnalysisSchemes"]["member"] !== undefined) {
    contents.AnalysisSchemes = de_AnalysisSchemeStatusList(
      __getArrayIfSingleItem(output["AnalysisSchemes"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeAvailabilityOptionsResponse
 */
const de_DescribeAvailabilityOptionsResponse = (
  output: any,
  context: __SerdeContext
): DescribeAvailabilityOptionsResponse => {
  const contents: any = {};
  if (output["AvailabilityOptions"] !== undefined) {
    contents.AvailabilityOptions = de_AvailabilityOptionsStatus(output["AvailabilityOptions"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeDomainEndpointOptionsResponse
 */
const de_DescribeDomainEndpointOptionsResponse = (
  output: any,
  context: __SerdeContext
): DescribeDomainEndpointOptionsResponse => {
  const contents: any = {};
  if (output["DomainEndpointOptions"] !== undefined) {
    contents.DomainEndpointOptions = de_DomainEndpointOptionsStatus(output["DomainEndpointOptions"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeDomainsResponse
 */
const de_DescribeDomainsResponse = (output: any, context: __SerdeContext): DescribeDomainsResponse => {
  const contents: any = {};
  if (output.DomainStatusList === "") {
    contents.DomainStatusList = [];
  } else if (output["DomainStatusList"] !== undefined && output["DomainStatusList"]["member"] !== undefined) {
    contents.DomainStatusList = de_DomainStatusList(
      __getArrayIfSingleItem(output["DomainStatusList"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeExpressionsResponse
 */
const de_DescribeExpressionsResponse = (output: any, context: __SerdeContext): DescribeExpressionsResponse => {
  const contents: any = {};
  if (output.Expressions === "") {
    contents.Expressions = [];
  } else if (output["Expressions"] !== undefined && output["Expressions"]["member"] !== undefined) {
    contents.Expressions = de_ExpressionStatusList(__getArrayIfSingleItem(output["Expressions"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeIndexFieldsResponse
 */
const de_DescribeIndexFieldsResponse = (output: any, context: __SerdeContext): DescribeIndexFieldsResponse => {
  const contents: any = {};
  if (output.IndexFields === "") {
    contents.IndexFields = [];
  } else if (output["IndexFields"] !== undefined && output["IndexFields"]["member"] !== undefined) {
    contents.IndexFields = de_IndexFieldStatusList(__getArrayIfSingleItem(output["IndexFields"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeScalingParametersResponse
 */
const de_DescribeScalingParametersResponse = (
  output: any,
  context: __SerdeContext
): DescribeScalingParametersResponse => {
  const contents: any = {};
  if (output["ScalingParameters"] !== undefined) {
    contents.ScalingParameters = de_ScalingParametersStatus(output["ScalingParameters"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeServiceAccessPoliciesResponse
 */
const de_DescribeServiceAccessPoliciesResponse = (
  output: any,
  context: __SerdeContext
): DescribeServiceAccessPoliciesResponse => {
  const contents: any = {};
  if (output["AccessPolicies"] !== undefined) {
    contents.AccessPolicies = de_AccessPoliciesStatus(output["AccessPolicies"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeSuggestersResponse
 */
const de_DescribeSuggestersResponse = (output: any, context: __SerdeContext): DescribeSuggestersResponse => {
  const contents: any = {};
  if (output.Suggesters === "") {
    contents.Suggesters = [];
  } else if (output["Suggesters"] !== undefined && output["Suggesters"]["member"] !== undefined) {
    contents.Suggesters = de_SuggesterStatusList(__getArrayIfSingleItem(output["Suggesters"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDisabledOperationException
 */
const de_DisabledOperationException = (output: any, context: __SerdeContext): DisabledOperationException => {
  const contents: any = {};
  if (output["Code"] !== undefined) {
    contents.Code = __expectString(output["Code"]);
  }
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDocumentSuggesterOptions
 */
const de_DocumentSuggesterOptions = (output: any, context: __SerdeContext): DocumentSuggesterOptions => {
  const contents: any = {};
  if (output["SourceField"] !== undefined) {
    contents.SourceField = __expectString(output["SourceField"]);
  }
  if (output["FuzzyMatching"] !== undefined) {
    contents.FuzzyMatching = __expectString(output["FuzzyMatching"]);
  }
  if (output["SortExpression"] !== undefined) {
    contents.SortExpression = __expectString(output["SortExpression"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDomainEndpointOptions
 */
const de_DomainEndpointOptions = (output: any, context: __SerdeContext): DomainEndpointOptions => {
  const contents: any = {};
  if (output["EnforceHTTPS"] !== undefined) {
    contents.EnforceHTTPS = __parseBoolean(output["EnforceHTTPS"]);
  }
  if (output["TLSSecurityPolicy"] !== undefined) {
    contents.TLSSecurityPolicy = __expectString(output["TLSSecurityPolicy"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDomainEndpointOptionsStatus
 */
const de_DomainEndpointOptionsStatus = (output: any, context: __SerdeContext): DomainEndpointOptionsStatus => {
  const contents: any = {};
  if (output["Options"] !== undefined) {
    contents.Options = de_DomainEndpointOptions(output["Options"], context);
  }
  if (output["Status"] !== undefined) {
    contents.Status = de_OptionStatus(output["Status"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDomainNameMap
 */
const de_DomainNameMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = __expectString(pair["value"]) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_queryDomainStatus
 */
const de_DomainStatus = (output: any, context: __SerdeContext): DomainStatus => {
  const contents: any = {};
  if (output["DomainId"] !== undefined) {
    contents.DomainId = __expectString(output["DomainId"]);
  }
  if (output["DomainName"] !== undefined) {
    contents.DomainName = __expectString(output["DomainName"]);
  }
  if (output["ARN"] !== undefined) {
    contents.ARN = __expectString(output["ARN"]);
  }
  if (output["Created"] !== undefined) {
    contents.Created = __parseBoolean(output["Created"]);
  }
  if (output["Deleted"] !== undefined) {
    contents.Deleted = __parseBoolean(output["Deleted"]);
  }
  if (output["DocService"] !== undefined) {
    contents.DocService = de_ServiceEndpoint(output["DocService"], context);
  }
  if (output["SearchService"] !== undefined) {
    contents.SearchService = de_ServiceEndpoint(output["SearchService"], context);
  }
  if (output["RequiresIndexDocuments"] !== undefined) {
    contents.RequiresIndexDocuments = __parseBoolean(output["RequiresIndexDocuments"]);
  }
  if (output["Processing"] !== undefined) {
    contents.Processing = __parseBoolean(output["Processing"]);
  }
  if (output["SearchInstanceType"] !== undefined) {
    contents.SearchInstanceType = __expectString(output["SearchInstanceType"]);
  }
  if (output["SearchPartitionCount"] !== undefined) {
    contents.SearchPartitionCount = __strictParseInt32(output["SearchPartitionCount"]) as number;
  }
  if (output["SearchInstanceCount"] !== undefined) {
    contents.SearchInstanceCount = __strictParseInt32(output["SearchInstanceCount"]) as number;
  }
  if (output["Limits"] !== undefined) {
    contents.Limits = de_Limits(output["Limits"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDomainStatusList
 */
const de_DomainStatusList = (output: any, context: __SerdeContext): DomainStatus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DomainStatus(entry, context);
    });
};

/**
 * deserializeAws_queryDoubleArrayOptions
 */
const de_DoubleArrayOptions = (output: any, context: __SerdeContext): DoubleArrayOptions => {
  const contents: any = {};
  if (output["DefaultValue"] !== undefined) {
    contents.DefaultValue = __strictParseFloat(output["DefaultValue"]) as number;
  }
  if (output["SourceFields"] !== undefined) {
    contents.SourceFields = __expectString(output["SourceFields"]);
  }
  if (output["FacetEnabled"] !== undefined) {
    contents.FacetEnabled = __parseBoolean(output["FacetEnabled"]);
  }
  if (output["SearchEnabled"] !== undefined) {
    contents.SearchEnabled = __parseBoolean(output["SearchEnabled"]);
  }
  if (output["ReturnEnabled"] !== undefined) {
    contents.ReturnEnabled = __parseBoolean(output["ReturnEnabled"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDoubleOptions
 */
const de_DoubleOptions = (output: any, context: __SerdeContext): DoubleOptions => {
  const contents: any = {};
  if (output["DefaultValue"] !== undefined) {
    contents.DefaultValue = __strictParseFloat(output["DefaultValue"]) as number;
  }
  if (output["SourceField"] !== undefined) {
    contents.SourceField = __expectString(output["SourceField"]);
  }
  if (output["FacetEnabled"] !== undefined) {
    contents.FacetEnabled = __parseBoolean(output["FacetEnabled"]);
  }
  if (output["SearchEnabled"] !== undefined) {
    contents.SearchEnabled = __parseBoolean(output["SearchEnabled"]);
  }
  if (output["ReturnEnabled"] !== undefined) {
    contents.ReturnEnabled = __parseBoolean(output["ReturnEnabled"]);
  }
  if (output["SortEnabled"] !== undefined) {
    contents.SortEnabled = __parseBoolean(output["SortEnabled"]);
  }
  return contents;
};

/**
 * deserializeAws_queryExpression
 */
const de_Expression = (output: any, context: __SerdeContext): Expression => {
  const contents: any = {};
  if (output["ExpressionName"] !== undefined) {
    contents.ExpressionName = __expectString(output["ExpressionName"]);
  }
  if (output["ExpressionValue"] !== undefined) {
    contents.ExpressionValue = __expectString(output["ExpressionValue"]);
  }
  return contents;
};

/**
 * deserializeAws_queryExpressionStatus
 */
const de_ExpressionStatus = (output: any, context: __SerdeContext): ExpressionStatus => {
  const contents: any = {};
  if (output["Options"] !== undefined) {
    contents.Options = de_Expression(output["Options"], context);
  }
  if (output["Status"] !== undefined) {
    contents.Status = de_OptionStatus(output["Status"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryExpressionStatusList
 */
const de_ExpressionStatusList = (output: any, context: __SerdeContext): ExpressionStatus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ExpressionStatus(entry, context);
    });
};

/**
 * deserializeAws_queryFieldNameList
 */
const de_FieldNameList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryIndexDocumentsResponse
 */
const de_IndexDocumentsResponse = (output: any, context: __SerdeContext): IndexDocumentsResponse => {
  const contents: any = {};
  if (output.FieldNames === "") {
    contents.FieldNames = [];
  } else if (output["FieldNames"] !== undefined && output["FieldNames"]["member"] !== undefined) {
    contents.FieldNames = de_FieldNameList(__getArrayIfSingleItem(output["FieldNames"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryIndexField
 */
const de_IndexField = (output: any, context: __SerdeContext): IndexField => {
  const contents: any = {};
  if (output["IndexFieldName"] !== undefined) {
    contents.IndexFieldName = __expectString(output["IndexFieldName"]);
  }
  if (output["IndexFieldType"] !== undefined) {
    contents.IndexFieldType = __expectString(output["IndexFieldType"]);
  }
  if (output["IntOptions"] !== undefined) {
    contents.IntOptions = de_IntOptions(output["IntOptions"], context);
  }
  if (output["DoubleOptions"] !== undefined) {
    contents.DoubleOptions = de_DoubleOptions(output["DoubleOptions"], context);
  }
  if (output["LiteralOptions"] !== undefined) {
    contents.LiteralOptions = de_LiteralOptions(output["LiteralOptions"], context);
  }
  if (output["TextOptions"] !== undefined) {
    contents.TextOptions = de_TextOptions(output["TextOptions"], context);
  }
  if (output["DateOptions"] !== undefined) {
    contents.DateOptions = de_DateOptions(output["DateOptions"], context);
  }
  if (output["LatLonOptions"] !== undefined) {
    contents.LatLonOptions = de_LatLonOptions(output["LatLonOptions"], context);
  }
  if (output["IntArrayOptions"] !== undefined) {
    contents.IntArrayOptions = de_IntArrayOptions(output["IntArrayOptions"], context);
  }
  if (output["DoubleArrayOptions"] !== undefined) {
    contents.DoubleArrayOptions = de_DoubleArrayOptions(output["DoubleArrayOptions"], context);
  }
  if (output["LiteralArrayOptions"] !== undefined) {
    contents.LiteralArrayOptions = de_LiteralArrayOptions(output["LiteralArrayOptions"], context);
  }
  if (output["TextArrayOptions"] !== undefined) {
    contents.TextArrayOptions = de_TextArrayOptions(output["TextArrayOptions"], context);
  }
  if (output["DateArrayOptions"] !== undefined) {
    contents.DateArrayOptions = de_DateArrayOptions(output["DateArrayOptions"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryIndexFieldStatus
 */
const de_IndexFieldStatus = (output: any, context: __SerdeContext): IndexFieldStatus => {
  const contents: any = {};
  if (output["Options"] !== undefined) {
    contents.Options = de_IndexField(output["Options"], context);
  }
  if (output["Status"] !== undefined) {
    contents.Status = de_OptionStatus(output["Status"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryIndexFieldStatusList
 */
const de_IndexFieldStatusList = (output: any, context: __SerdeContext): IndexFieldStatus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_IndexFieldStatus(entry, context);
    });
};

/**
 * deserializeAws_queryIntArrayOptions
 */
const de_IntArrayOptions = (output: any, context: __SerdeContext): IntArrayOptions => {
  const contents: any = {};
  if (output["DefaultValue"] !== undefined) {
    contents.DefaultValue = __strictParseLong(output["DefaultValue"]) as number;
  }
  if (output["SourceFields"] !== undefined) {
    contents.SourceFields = __expectString(output["SourceFields"]);
  }
  if (output["FacetEnabled"] !== undefined) {
    contents.FacetEnabled = __parseBoolean(output["FacetEnabled"]);
  }
  if (output["SearchEnabled"] !== undefined) {
    contents.SearchEnabled = __parseBoolean(output["SearchEnabled"]);
  }
  if (output["ReturnEnabled"] !== undefined) {
    contents.ReturnEnabled = __parseBoolean(output["ReturnEnabled"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInternalException
 */
const de_InternalException = (output: any, context: __SerdeContext): InternalException => {
  const contents: any = {};
  if (output["Code"] !== undefined) {
    contents.Code = __expectString(output["Code"]);
  }
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryIntOptions
 */
const de_IntOptions = (output: any, context: __SerdeContext): IntOptions => {
  const contents: any = {};
  if (output["DefaultValue"] !== undefined) {
    contents.DefaultValue = __strictParseLong(output["DefaultValue"]) as number;
  }
  if (output["SourceField"] !== undefined) {
    contents.SourceField = __expectString(output["SourceField"]);
  }
  if (output["FacetEnabled"] !== undefined) {
    contents.FacetEnabled = __parseBoolean(output["FacetEnabled"]);
  }
  if (output["SearchEnabled"] !== undefined) {
    contents.SearchEnabled = __parseBoolean(output["SearchEnabled"]);
  }
  if (output["ReturnEnabled"] !== undefined) {
    contents.ReturnEnabled = __parseBoolean(output["ReturnEnabled"]);
  }
  if (output["SortEnabled"] !== undefined) {
    contents.SortEnabled = __parseBoolean(output["SortEnabled"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidTypeException
 */
const de_InvalidTypeException = (output: any, context: __SerdeContext): InvalidTypeException => {
  const contents: any = {};
  if (output["Code"] !== undefined) {
    contents.Code = __expectString(output["Code"]);
  }
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryLatLonOptions
 */
const de_LatLonOptions = (output: any, context: __SerdeContext): LatLonOptions => {
  const contents: any = {};
  if (output["DefaultValue"] !== undefined) {
    contents.DefaultValue = __expectString(output["DefaultValue"]);
  }
  if (output["SourceField"] !== undefined) {
    contents.SourceField = __expectString(output["SourceField"]);
  }
  if (output["FacetEnabled"] !== undefined) {
    contents.FacetEnabled = __parseBoolean(output["FacetEnabled"]);
  }
  if (output["SearchEnabled"] !== undefined) {
    contents.SearchEnabled = __parseBoolean(output["SearchEnabled"]);
  }
  if (output["ReturnEnabled"] !== undefined) {
    contents.ReturnEnabled = __parseBoolean(output["ReturnEnabled"]);
  }
  if (output["SortEnabled"] !== undefined) {
    contents.SortEnabled = __parseBoolean(output["SortEnabled"]);
  }
  return contents;
};

/**
 * deserializeAws_queryLimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  const contents: any = {};
  if (output["Code"] !== undefined) {
    contents.Code = __expectString(output["Code"]);
  }
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryLimits
 */
const de_Limits = (output: any, context: __SerdeContext): Limits => {
  const contents: any = {};
  if (output["MaximumReplicationCount"] !== undefined) {
    contents.MaximumReplicationCount = __strictParseInt32(output["MaximumReplicationCount"]) as number;
  }
  if (output["MaximumPartitionCount"] !== undefined) {
    contents.MaximumPartitionCount = __strictParseInt32(output["MaximumPartitionCount"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryListDomainNamesResponse
 */
const de_ListDomainNamesResponse = (output: any, context: __SerdeContext): ListDomainNamesResponse => {
  const contents: any = {};
  if (output.DomainNames === "") {
    contents.DomainNames = {};
  } else if (output["DomainNames"] !== undefined && output["DomainNames"]["entry"] !== undefined) {
    contents.DomainNames = de_DomainNameMap(__getArrayIfSingleItem(output["DomainNames"]["entry"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryLiteralArrayOptions
 */
const de_LiteralArrayOptions = (output: any, context: __SerdeContext): LiteralArrayOptions => {
  const contents: any = {};
  if (output["DefaultValue"] !== undefined) {
    contents.DefaultValue = __expectString(output["DefaultValue"]);
  }
  if (output["SourceFields"] !== undefined) {
    contents.SourceFields = __expectString(output["SourceFields"]);
  }
  if (output["FacetEnabled"] !== undefined) {
    contents.FacetEnabled = __parseBoolean(output["FacetEnabled"]);
  }
  if (output["SearchEnabled"] !== undefined) {
    contents.SearchEnabled = __parseBoolean(output["SearchEnabled"]);
  }
  if (output["ReturnEnabled"] !== undefined) {
    contents.ReturnEnabled = __parseBoolean(output["ReturnEnabled"]);
  }
  return contents;
};

/**
 * deserializeAws_queryLiteralOptions
 */
const de_LiteralOptions = (output: any, context: __SerdeContext): LiteralOptions => {
  const contents: any = {};
  if (output["DefaultValue"] !== undefined) {
    contents.DefaultValue = __expectString(output["DefaultValue"]);
  }
  if (output["SourceField"] !== undefined) {
    contents.SourceField = __expectString(output["SourceField"]);
  }
  if (output["FacetEnabled"] !== undefined) {
    contents.FacetEnabled = __parseBoolean(output["FacetEnabled"]);
  }
  if (output["SearchEnabled"] !== undefined) {
    contents.SearchEnabled = __parseBoolean(output["SearchEnabled"]);
  }
  if (output["ReturnEnabled"] !== undefined) {
    contents.ReturnEnabled = __parseBoolean(output["ReturnEnabled"]);
  }
  if (output["SortEnabled"] !== undefined) {
    contents.SortEnabled = __parseBoolean(output["SortEnabled"]);
  }
  return contents;
};

/**
 * deserializeAws_queryOptionStatus
 */
const de_OptionStatus = (output: any, context: __SerdeContext): OptionStatus => {
  const contents: any = {};
  if (output["CreationDate"] !== undefined) {
    contents.CreationDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreationDate"]));
  }
  if (output["UpdateDate"] !== undefined) {
    contents.UpdateDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["UpdateDate"]));
  }
  if (output["UpdateVersion"] !== undefined) {
    contents.UpdateVersion = __strictParseInt32(output["UpdateVersion"]) as number;
  }
  if (output["State"] !== undefined) {
    contents.State = __expectString(output["State"]);
  }
  if (output["PendingDeletion"] !== undefined) {
    contents.PendingDeletion = __parseBoolean(output["PendingDeletion"]);
  }
  return contents;
};

/**
 * deserializeAws_queryResourceAlreadyExistsException
 */
const de_ResourceAlreadyExistsException = (output: any, context: __SerdeContext): ResourceAlreadyExistsException => {
  const contents: any = {};
  if (output["Code"] !== undefined) {
    contents.Code = __expectString(output["Code"]);
  }
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  const contents: any = {};
  if (output["Code"] !== undefined) {
    contents.Code = __expectString(output["Code"]);
  }
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryScalingParameters
 */
const de_ScalingParameters = (output: any, context: __SerdeContext): ScalingParameters => {
  const contents: any = {};
  if (output["DesiredInstanceType"] !== undefined) {
    contents.DesiredInstanceType = __expectString(output["DesiredInstanceType"]);
  }
  if (output["DesiredReplicationCount"] !== undefined) {
    contents.DesiredReplicationCount = __strictParseInt32(output["DesiredReplicationCount"]) as number;
  }
  if (output["DesiredPartitionCount"] !== undefined) {
    contents.DesiredPartitionCount = __strictParseInt32(output["DesiredPartitionCount"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryScalingParametersStatus
 */
const de_ScalingParametersStatus = (output: any, context: __SerdeContext): ScalingParametersStatus => {
  const contents: any = {};
  if (output["Options"] !== undefined) {
    contents.Options = de_ScalingParameters(output["Options"], context);
  }
  if (output["Status"] !== undefined) {
    contents.Status = de_OptionStatus(output["Status"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryServiceEndpoint
 */
const de_ServiceEndpoint = (output: any, context: __SerdeContext): ServiceEndpoint => {
  const contents: any = {};
  if (output["Endpoint"] !== undefined) {
    contents.Endpoint = __expectString(output["Endpoint"]);
  }
  return contents;
};

/**
 * deserializeAws_querySuggester
 */
const de_Suggester = (output: any, context: __SerdeContext): Suggester => {
  const contents: any = {};
  if (output["SuggesterName"] !== undefined) {
    contents.SuggesterName = __expectString(output["SuggesterName"]);
  }
  if (output["DocumentSuggesterOptions"] !== undefined) {
    contents.DocumentSuggesterOptions = de_DocumentSuggesterOptions(output["DocumentSuggesterOptions"], context);
  }
  return contents;
};

/**
 * deserializeAws_querySuggesterStatus
 */
const de_SuggesterStatus = (output: any, context: __SerdeContext): SuggesterStatus => {
  const contents: any = {};
  if (output["Options"] !== undefined) {
    contents.Options = de_Suggester(output["Options"], context);
  }
  if (output["Status"] !== undefined) {
    contents.Status = de_OptionStatus(output["Status"], context);
  }
  return contents;
};

/**
 * deserializeAws_querySuggesterStatusList
 */
const de_SuggesterStatusList = (output: any, context: __SerdeContext): SuggesterStatus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SuggesterStatus(entry, context);
    });
};

/**
 * deserializeAws_queryTextArrayOptions
 */
const de_TextArrayOptions = (output: any, context: __SerdeContext): TextArrayOptions => {
  const contents: any = {};
  if (output["DefaultValue"] !== undefined) {
    contents.DefaultValue = __expectString(output["DefaultValue"]);
  }
  if (output["SourceFields"] !== undefined) {
    contents.SourceFields = __expectString(output["SourceFields"]);
  }
  if (output["ReturnEnabled"] !== undefined) {
    contents.ReturnEnabled = __parseBoolean(output["ReturnEnabled"]);
  }
  if (output["HighlightEnabled"] !== undefined) {
    contents.HighlightEnabled = __parseBoolean(output["HighlightEnabled"]);
  }
  if (output["AnalysisScheme"] !== undefined) {
    contents.AnalysisScheme = __expectString(output["AnalysisScheme"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTextOptions
 */
const de_TextOptions = (output: any, context: __SerdeContext): TextOptions => {
  const contents: any = {};
  if (output["DefaultValue"] !== undefined) {
    contents.DefaultValue = __expectString(output["DefaultValue"]);
  }
  if (output["SourceField"] !== undefined) {
    contents.SourceField = __expectString(output["SourceField"]);
  }
  if (output["ReturnEnabled"] !== undefined) {
    contents.ReturnEnabled = __parseBoolean(output["ReturnEnabled"]);
  }
  if (output["SortEnabled"] !== undefined) {
    contents.SortEnabled = __parseBoolean(output["SortEnabled"]);
  }
  if (output["HighlightEnabled"] !== undefined) {
    contents.HighlightEnabled = __parseBoolean(output["HighlightEnabled"]);
  }
  if (output["AnalysisScheme"] !== undefined) {
    contents.AnalysisScheme = __expectString(output["AnalysisScheme"]);
  }
  return contents;
};

/**
 * deserializeAws_queryUpdateAvailabilityOptionsResponse
 */
const de_UpdateAvailabilityOptionsResponse = (
  output: any,
  context: __SerdeContext
): UpdateAvailabilityOptionsResponse => {
  const contents: any = {};
  if (output["AvailabilityOptions"] !== undefined) {
    contents.AvailabilityOptions = de_AvailabilityOptionsStatus(output["AvailabilityOptions"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryUpdateDomainEndpointOptionsResponse
 */
const de_UpdateDomainEndpointOptionsResponse = (
  output: any,
  context: __SerdeContext
): UpdateDomainEndpointOptionsResponse => {
  const contents: any = {};
  if (output["DomainEndpointOptions"] !== undefined) {
    contents.DomainEndpointOptions = de_DomainEndpointOptionsStatus(output["DomainEndpointOptions"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryUpdateScalingParametersResponse
 */
const de_UpdateScalingParametersResponse = (output: any, context: __SerdeContext): UpdateScalingParametersResponse => {
  const contents: any = {};
  if (output["ScalingParameters"] !== undefined) {
    contents.ScalingParameters = de_ScalingParametersStatus(output["ScalingParameters"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryUpdateServiceAccessPoliciesResponse
 */
const de_UpdateServiceAccessPoliciesResponse = (
  output: any,
  context: __SerdeContext
): UpdateServiceAccessPoliciesResponse => {
  const contents: any = {};
  if (output["AccessPolicies"] !== undefined) {
    contents.AccessPolicies = de_AccessPoliciesStatus(output["AccessPolicies"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryValidationException
 */
const de_ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  const contents: any = {};
  if (output["Code"] !== undefined) {
    contents.Code = __expectString(output["Code"]);
  }
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
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
const SHARED_HEADERS: __HeaderBag = {
  "content-type": "application/x-www-form-urlencoded",
};

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      const parser = new XMLParser({
        attributeNamePrefix: "",
        htmlEntities: true,
        ignoreAttributes: false,
        ignoreDeclaration: true,
        parseTagValue: false,
        trimValues: false,
        tagValueProcessor: (_: any, val: any) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
      });
      parser.addEntity("#xD", "\r");
      parser.addEntity("#10", "\n");
      const parsedObj = parser.parse(encoded);
      const textNodeName = "#text";
      const key = Object.keys(parsedObj)[0];
      const parsedObjToReturn = parsedObj[key];
      if (parsedObjToReturn[textNodeName]) {
        parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
        delete parsedObjToReturn[textNodeName];
      }
      return __getValueFromTextNode(parsedObjToReturn);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  if (value.Error) {
    value.Error.message = value.Error.message ?? value.Error.Message;
  }
  return value;
};

const buildFormUrlencodedString = (formEntries: Record<string, string>): string =>
  Object.entries(formEntries)
    .map(([key, value]) => __extendedEncodeURIComponent(key) + "=" + __extendedEncodeURIComponent(value))
    .join("&");

const loadQueryErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  if (data.Error?.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
};
