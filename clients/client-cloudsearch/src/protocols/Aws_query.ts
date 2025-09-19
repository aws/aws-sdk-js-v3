// smithy-typescript generated code
import { parseXmlBody as parseBody, parseXmlErrorBody as parseErrorBody } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
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
    [_A]: _BS,
    [_V]: _,
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
    [_A]: _CD,
    [_V]: _,
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
    [_A]: _DAS,
    [_V]: _,
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
    [_A]: _DE,
    [_V]: _,
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
    [_A]: _DIF,
    [_V]: _,
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
    [_A]: _DS,
    [_V]: _,
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
    [_A]: _DASe,
    [_V]: _,
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
    [_A]: _DD,
    [_V]: _,
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
    [_A]: _DEe,
    [_V]: _,
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
    [_A]: _DIFe,
    [_V]: _,
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
    [_A]: _DSe,
    [_V]: _,
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
    [_A]: _DASes,
    [_V]: _,
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
    [_A]: _DAO,
    [_V]: _,
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
    [_A]: _DDEO,
    [_V]: _,
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
    [_A]: _DDe,
    [_V]: _,
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
    [_A]: _DEes,
    [_V]: _,
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
    [_A]: _DIFes,
    [_V]: _,
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
    [_A]: _DSP,
    [_V]: _,
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
    [_A]: _DSAP,
    [_V]: _,
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
    [_A]: _DSes,
    [_V]: _,
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
    [_A]: _ID,
    [_V]: _,
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
    [_A]: _LDN,
    [_V]: _,
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
    [_A]: _UAO,
    [_V]: _,
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
    [_A]: _UDEO,
    [_V]: _,
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
    [_A]: _USP,
    [_V]: _,
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
    [_A]: _USAP,
    [_V]: _,
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
    return de_CommandError(output, context);
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
 * deserializeAws_queryCreateDomainCommand
 */
export const de_CreateDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDefineAnalysisSchemeCommand
 */
export const de_DefineAnalysisSchemeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DefineAnalysisSchemeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDefineExpressionCommand
 */
export const de_DefineExpressionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DefineExpressionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDefineIndexFieldCommand
 */
export const de_DefineIndexFieldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DefineIndexFieldCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDefineSuggesterCommand
 */
export const de_DefineSuggesterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DefineSuggesterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDeleteAnalysisSchemeCommand
 */
export const de_DeleteAnalysisSchemeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnalysisSchemeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDeleteDomainCommand
 */
export const de_DeleteDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDeleteExpressionCommand
 */
export const de_DeleteExpressionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExpressionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDeleteIndexFieldCommand
 */
export const de_DeleteIndexFieldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIndexFieldCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDeleteSuggesterCommand
 */
export const de_DeleteSuggesterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSuggesterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeAnalysisSchemesCommand
 */
export const de_DescribeAnalysisSchemesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAnalysisSchemesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeAvailabilityOptionsCommand
 */
export const de_DescribeAvailabilityOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAvailabilityOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeDomainEndpointOptionsCommand
 */
export const de_DescribeDomainEndpointOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainEndpointOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeDomainsCommand
 */
export const de_DescribeDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeExpressionsCommand
 */
export const de_DescribeExpressionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExpressionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeIndexFieldsCommand
 */
export const de_DescribeIndexFieldsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIndexFieldsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeScalingParametersCommand
 */
export const de_DescribeScalingParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeServiceAccessPoliciesCommand
 */
export const de_DescribeServiceAccessPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServiceAccessPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeSuggestersCommand
 */
export const de_DescribeSuggestersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSuggestersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryIndexDocumentsCommand
 */
export const de_IndexDocumentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IndexDocumentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryListDomainNamesCommand
 */
export const de_ListDomainNamesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainNamesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryUpdateAvailabilityOptionsCommand
 */
export const de_UpdateAvailabilityOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAvailabilityOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryUpdateDomainEndpointOptionsCommand
 */
export const de_UpdateDomainEndpointOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainEndpointOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryUpdateScalingParametersCommand
 */
export const de_UpdateScalingParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateScalingParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryUpdateServiceAccessPoliciesCommand
 */
export const de_UpdateServiceAccessPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceAccessPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserialize_Aws_queryCommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
    case "LimitExceeded":
    case "com.amazonaws.cloudsearch#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExists":
    case "com.amazonaws.cloudsearch#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "InvalidType":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      throw await de_InvalidTypeExceptionRes(parsedOutput, context);
    case "DisabledAction":
    case "com.amazonaws.cloudsearch#DisabledOperationException":
      throw await de_DisabledOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      }) as never;
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
  if (input[_S] != null) {
    entries[_S] = input[_S];
  }
  if (input[_St] != null) {
    entries[_St] = input[_St];
  }
  if (input[_SD] != null) {
    entries[_SD] = input[_SD];
  }
  if (input[_JTD] != null) {
    entries[_JTD] = input[_JTD];
  }
  if (input[_AS] != null) {
    entries[_AS] = input[_AS];
  }
  return entries;
};

/**
 * serializeAws_queryAnalysisScheme
 */
const se_AnalysisScheme = (input: AnalysisScheme, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ASN] != null) {
    entries[_ASN] = input[_ASN];
  }
  if (input[_ASL] != null) {
    entries[_ASL] = input[_ASL];
  }
  if (input[_AO] != null) {
    const memberEntries = se_AnalysisOptions(input[_AO], context);
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
  if (input[_DN] != null) {
    entries[_DN] = input[_DN];
  }
  return entries;
};

/**
 * serializeAws_queryCreateDomainRequest
 */
const se_CreateDomainRequest = (input: CreateDomainRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DN] != null) {
    entries[_DN] = input[_DN];
  }
  return entries;
};

/**
 * serializeAws_queryDateArrayOptions
 */
const se_DateArrayOptions = (input: DateArrayOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DV] != null) {
    entries[_DV] = input[_DV];
  }
  if (input[_SF] != null) {
    entries[_SF] = input[_SF];
  }
  if (input[_FE] != null) {
    entries[_FE] = input[_FE];
  }
  if (input[_SE] != null) {
    entries[_SE] = input[_SE];
  }
  if (input[_RE] != null) {
    entries[_RE] = input[_RE];
  }
  return entries;
};

/**
 * serializeAws_queryDateOptions
 */
const se_DateOptions = (input: DateOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DV] != null) {
    entries[_DV] = input[_DV];
  }
  if (input[_SFo] != null) {
    entries[_SFo] = input[_SFo];
  }
  if (input[_FE] != null) {
    entries[_FE] = input[_FE];
  }
  if (input[_SE] != null) {
    entries[_SE] = input[_SE];
  }
  if (input[_RE] != null) {
    entries[_RE] = input[_RE];
  }
  if (input[_SEo] != null) {
    entries[_SEo] = input[_SEo];
  }
  return entries;
};

/**
 * serializeAws_queryDefineAnalysisSchemeRequest
 */
const se_DefineAnalysisSchemeRequest = (input: DefineAnalysisSchemeRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DN] != null) {
    entries[_DN] = input[_DN];
  }
  if (input[_ASn] != null) {
    const memberEntries = se_AnalysisScheme(input[_ASn], context);
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
  if (input[_DN] != null) {
    entries[_DN] = input[_DN];
  }
  if (input[_E] != null) {
    const memberEntries = se_Expression(input[_E], context);
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
  if (input[_DN] != null) {
    entries[_DN] = input[_DN];
  }
  if (input[_IF] != null) {
    const memberEntries = se_IndexField(input[_IF], context);
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
  if (input[_DN] != null) {
    entries[_DN] = input[_DN];
  }
  if (input[_Su] != null) {
    const memberEntries = se_Suggester(input[_Su], context);
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
  if (input[_DN] != null) {
    entries[_DN] = input[_DN];
  }
  if (input[_ASN] != null) {
    entries[_ASN] = input[_ASN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteDomainRequest
 */
const se_DeleteDomainRequest = (input: DeleteDomainRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DN] != null) {
    entries[_DN] = input[_DN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteExpressionRequest
 */
const se_DeleteExpressionRequest = (input: DeleteExpressionRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DN] != null) {
    entries[_DN] = input[_DN];
  }
  if (input[_EN] != null) {
    entries[_EN] = input[_EN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteIndexFieldRequest
 */
const se_DeleteIndexFieldRequest = (input: DeleteIndexFieldRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DN] != null) {
    entries[_DN] = input[_DN];
  }
  if (input[_IFN] != null) {
    entries[_IFN] = input[_IFN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteSuggesterRequest
 */
const se_DeleteSuggesterRequest = (input: DeleteSuggesterRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DN] != null) {
    entries[_DN] = input[_DN];
  }
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeAnalysisSchemesRequest
 */
const se_DescribeAnalysisSchemesRequest = (input: DescribeAnalysisSchemesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DN] != null) {
    entries[_DN] = input[_DN];
  }
  if (input[_ASNn] != null) {
    const memberEntries = se_StandardNameList(input[_ASNn], context);
    if (input[_ASNn]?.length === 0) {
      entries.AnalysisSchemeNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AnalysisSchemeNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
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
  if (input[_DN] != null) {
    entries[_DN] = input[_DN];
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
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
  if (input[_DN] != null) {
    entries[_DN] = input[_DN];
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeDomainsRequest
 */
const se_DescribeDomainsRequest = (input: DescribeDomainsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DNo] != null) {
    const memberEntries = se_DomainNameList(input[_DNo], context);
    if (input[_DNo]?.length === 0) {
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
  if (input[_DN] != null) {
    entries[_DN] = input[_DN];
  }
  if (input[_ENx] != null) {
    const memberEntries = se_StandardNameList(input[_ENx], context);
    if (input[_ENx]?.length === 0) {
      entries.ExpressionNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ExpressionNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeIndexFieldsRequest
 */
const se_DescribeIndexFieldsRequest = (input: DescribeIndexFieldsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DN] != null) {
    entries[_DN] = input[_DN];
  }
  if (input[_FN] != null) {
    const memberEntries = se_DynamicFieldNameList(input[_FN], context);
    if (input[_FN]?.length === 0) {
      entries.FieldNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `FieldNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeScalingParametersRequest
 */
const se_DescribeScalingParametersRequest = (input: DescribeScalingParametersRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DN] != null) {
    entries[_DN] = input[_DN];
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
  if (input[_DN] != null) {
    entries[_DN] = input[_DN];
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeSuggestersRequest
 */
const se_DescribeSuggestersRequest = (input: DescribeSuggestersRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DN] != null) {
    entries[_DN] = input[_DN];
  }
  if (input[_SNu] != null) {
    const memberEntries = se_StandardNameList(input[_SNu], context);
    if (input[_SNu]?.length === 0) {
      entries.SuggesterNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SuggesterNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  return entries;
};

/**
 * serializeAws_queryDocumentSuggesterOptions
 */
const se_DocumentSuggesterOptions = (input: DocumentSuggesterOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SFo] != null) {
    entries[_SFo] = input[_SFo];
  }
  if (input[_FM] != null) {
    entries[_FM] = input[_FM];
  }
  if (input[_SEor] != null) {
    entries[_SEor] = input[_SEor];
  }
  return entries;
};

/**
 * serializeAws_queryDomainEndpointOptions
 */
const se_DomainEndpointOptions = (input: DomainEndpointOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_EHTTPS] != null) {
    entries[_EHTTPS] = input[_EHTTPS];
  }
  if (input[_TLSSP] != null) {
    entries[_TLSSP] = input[_TLSSP];
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
  if (input[_DV] != null) {
    entries[_DV] = __serializeFloat(input[_DV]);
  }
  if (input[_SF] != null) {
    entries[_SF] = input[_SF];
  }
  if (input[_FE] != null) {
    entries[_FE] = input[_FE];
  }
  if (input[_SE] != null) {
    entries[_SE] = input[_SE];
  }
  if (input[_RE] != null) {
    entries[_RE] = input[_RE];
  }
  return entries;
};

/**
 * serializeAws_queryDoubleOptions
 */
const se_DoubleOptions = (input: DoubleOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DV] != null) {
    entries[_DV] = __serializeFloat(input[_DV]);
  }
  if (input[_SFo] != null) {
    entries[_SFo] = input[_SFo];
  }
  if (input[_FE] != null) {
    entries[_FE] = input[_FE];
  }
  if (input[_SE] != null) {
    entries[_SE] = input[_SE];
  }
  if (input[_RE] != null) {
    entries[_RE] = input[_RE];
  }
  if (input[_SEo] != null) {
    entries[_SEo] = input[_SEo];
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
  if (input[_EN] != null) {
    entries[_EN] = input[_EN];
  }
  if (input[_EV] != null) {
    entries[_EV] = input[_EV];
  }
  return entries;
};

/**
 * serializeAws_queryIndexDocumentsRequest
 */
const se_IndexDocumentsRequest = (input: IndexDocumentsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DN] != null) {
    entries[_DN] = input[_DN];
  }
  return entries;
};

/**
 * serializeAws_queryIndexField
 */
const se_IndexField = (input: IndexField, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_IFN] != null) {
    entries[_IFN] = input[_IFN];
  }
  if (input[_IFT] != null) {
    entries[_IFT] = input[_IFT];
  }
  if (input[_IO] != null) {
    const memberEntries = se_IntOptions(input[_IO], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `IntOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_DO] != null) {
    const memberEntries = se_DoubleOptions(input[_DO], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DoubleOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_LO] != null) {
    const memberEntries = se_LiteralOptions(input[_LO], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LiteralOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_TO] != null) {
    const memberEntries = se_TextOptions(input[_TO], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TextOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_DOa] != null) {
    const memberEntries = se_DateOptions(input[_DOa], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DateOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_LLO] != null) {
    const memberEntries = se_LatLonOptions(input[_LLO], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LatLonOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_IAO] != null) {
    const memberEntries = se_IntArrayOptions(input[_IAO], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `IntArrayOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_DAOo] != null) {
    const memberEntries = se_DoubleArrayOptions(input[_DAOo], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DoubleArrayOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_LAO] != null) {
    const memberEntries = se_LiteralArrayOptions(input[_LAO], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LiteralArrayOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_TAO] != null) {
    const memberEntries = se_TextArrayOptions(input[_TAO], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TextArrayOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_DAOa] != null) {
    const memberEntries = se_DateArrayOptions(input[_DAOa], context);
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
  if (input[_DV] != null) {
    entries[_DV] = input[_DV];
  }
  if (input[_SF] != null) {
    entries[_SF] = input[_SF];
  }
  if (input[_FE] != null) {
    entries[_FE] = input[_FE];
  }
  if (input[_SE] != null) {
    entries[_SE] = input[_SE];
  }
  if (input[_RE] != null) {
    entries[_RE] = input[_RE];
  }
  return entries;
};

/**
 * serializeAws_queryIntOptions
 */
const se_IntOptions = (input: IntOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DV] != null) {
    entries[_DV] = input[_DV];
  }
  if (input[_SFo] != null) {
    entries[_SFo] = input[_SFo];
  }
  if (input[_FE] != null) {
    entries[_FE] = input[_FE];
  }
  if (input[_SE] != null) {
    entries[_SE] = input[_SE];
  }
  if (input[_RE] != null) {
    entries[_RE] = input[_RE];
  }
  if (input[_SEo] != null) {
    entries[_SEo] = input[_SEo];
  }
  return entries;
};

/**
 * serializeAws_queryLatLonOptions
 */
const se_LatLonOptions = (input: LatLonOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DV] != null) {
    entries[_DV] = input[_DV];
  }
  if (input[_SFo] != null) {
    entries[_SFo] = input[_SFo];
  }
  if (input[_FE] != null) {
    entries[_FE] = input[_FE];
  }
  if (input[_SE] != null) {
    entries[_SE] = input[_SE];
  }
  if (input[_RE] != null) {
    entries[_RE] = input[_RE];
  }
  if (input[_SEo] != null) {
    entries[_SEo] = input[_SEo];
  }
  return entries;
};

/**
 * serializeAws_queryLiteralArrayOptions
 */
const se_LiteralArrayOptions = (input: LiteralArrayOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DV] != null) {
    entries[_DV] = input[_DV];
  }
  if (input[_SF] != null) {
    entries[_SF] = input[_SF];
  }
  if (input[_FE] != null) {
    entries[_FE] = input[_FE];
  }
  if (input[_SE] != null) {
    entries[_SE] = input[_SE];
  }
  if (input[_RE] != null) {
    entries[_RE] = input[_RE];
  }
  return entries;
};

/**
 * serializeAws_queryLiteralOptions
 */
const se_LiteralOptions = (input: LiteralOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DV] != null) {
    entries[_DV] = input[_DV];
  }
  if (input[_SFo] != null) {
    entries[_SFo] = input[_SFo];
  }
  if (input[_FE] != null) {
    entries[_FE] = input[_FE];
  }
  if (input[_SE] != null) {
    entries[_SE] = input[_SE];
  }
  if (input[_RE] != null) {
    entries[_RE] = input[_RE];
  }
  if (input[_SEo] != null) {
    entries[_SEo] = input[_SEo];
  }
  return entries;
};

/**
 * serializeAws_queryScalingParameters
 */
const se_ScalingParameters = (input: ScalingParameters, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DIT] != null) {
    entries[_DIT] = input[_DIT];
  }
  if (input[_DRC] != null) {
    entries[_DRC] = input[_DRC];
  }
  if (input[_DPC] != null) {
    entries[_DPC] = input[_DPC];
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
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_DSO] != null) {
    const memberEntries = se_DocumentSuggesterOptions(input[_DSO], context);
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
  if (input[_DV] != null) {
    entries[_DV] = input[_DV];
  }
  if (input[_SF] != null) {
    entries[_SF] = input[_SF];
  }
  if (input[_RE] != null) {
    entries[_RE] = input[_RE];
  }
  if (input[_HE] != null) {
    entries[_HE] = input[_HE];
  }
  if (input[_ASn] != null) {
    entries[_ASn] = input[_ASn];
  }
  return entries;
};

/**
 * serializeAws_queryTextOptions
 */
const se_TextOptions = (input: TextOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DV] != null) {
    entries[_DV] = input[_DV];
  }
  if (input[_SFo] != null) {
    entries[_SFo] = input[_SFo];
  }
  if (input[_RE] != null) {
    entries[_RE] = input[_RE];
  }
  if (input[_SEo] != null) {
    entries[_SEo] = input[_SEo];
  }
  if (input[_HE] != null) {
    entries[_HE] = input[_HE];
  }
  if (input[_ASn] != null) {
    entries[_ASn] = input[_ASn];
  }
  return entries;
};

/**
 * serializeAws_queryUpdateAvailabilityOptionsRequest
 */
const se_UpdateAvailabilityOptionsRequest = (input: UpdateAvailabilityOptionsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DN] != null) {
    entries[_DN] = input[_DN];
  }
  if (input[_MAZ] != null) {
    entries[_MAZ] = input[_MAZ];
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
  if (input[_DN] != null) {
    entries[_DN] = input[_DN];
  }
  if (input[_DEO] != null) {
    const memberEntries = se_DomainEndpointOptions(input[_DEO], context);
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
  if (input[_DN] != null) {
    entries[_DN] = input[_DN];
  }
  if (input[_SP] != null) {
    const memberEntries = se_ScalingParameters(input[_SP], context);
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
  if (input[_DN] != null) {
    entries[_DN] = input[_DN];
  }
  if (input[_AP] != null) {
    entries[_AP] = input[_AP];
  }
  return entries;
};

/**
 * deserializeAws_queryAccessPoliciesStatus
 */
const de_AccessPoliciesStatus = (output: any, context: __SerdeContext): AccessPoliciesStatus => {
  const contents: any = {};
  if (output[_O] != null) {
    contents[_O] = __expectString(output[_O]);
  }
  if (output[_Sta] != null) {
    contents[_Sta] = de_OptionStatus(output[_Sta], context);
  }
  return contents;
};

/**
 * deserializeAws_queryAnalysisOptions
 */
const de_AnalysisOptions = (output: any, context: __SerdeContext): AnalysisOptions => {
  const contents: any = {};
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_SD] != null) {
    contents[_SD] = __expectString(output[_SD]);
  }
  if (output[_JTD] != null) {
    contents[_JTD] = __expectString(output[_JTD]);
  }
  if (output[_AS] != null) {
    contents[_AS] = __expectString(output[_AS]);
  }
  return contents;
};

/**
 * deserializeAws_queryAnalysisScheme
 */
const de_AnalysisScheme = (output: any, context: __SerdeContext): AnalysisScheme => {
  const contents: any = {};
  if (output[_ASN] != null) {
    contents[_ASN] = __expectString(output[_ASN]);
  }
  if (output[_ASL] != null) {
    contents[_ASL] = __expectString(output[_ASL]);
  }
  if (output[_AO] != null) {
    contents[_AO] = de_AnalysisOptions(output[_AO], context);
  }
  return contents;
};

/**
 * deserializeAws_queryAnalysisSchemeStatus
 */
const de_AnalysisSchemeStatus = (output: any, context: __SerdeContext): AnalysisSchemeStatus => {
  const contents: any = {};
  if (output[_O] != null) {
    contents[_O] = de_AnalysisScheme(output[_O], context);
  }
  if (output[_Sta] != null) {
    contents[_Sta] = de_OptionStatus(output[_Sta], context);
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
  if (output[_O] != null) {
    contents[_O] = __parseBoolean(output[_O]);
  }
  if (output[_Sta] != null) {
    contents[_Sta] = de_OptionStatus(output[_Sta], context);
  }
  return contents;
};

/**
 * deserializeAws_queryBaseException
 */
const de_BaseException = (output: any, context: __SerdeContext): BaseException => {
  const contents: any = {};
  if (output[_C] != null) {
    contents[_C] = __expectString(output[_C]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryBuildSuggestersResponse
 */
const de_BuildSuggestersResponse = (output: any, context: __SerdeContext): BuildSuggestersResponse => {
  const contents: any = {};
  if (String(output.FieldNames).trim() === "") {
    contents[_FN] = [];
  } else if (output[_FN] != null && output[_FN][_m] != null) {
    contents[_FN] = de_FieldNameList(__getArrayIfSingleItem(output[_FN][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateDomainResponse
 */
const de_CreateDomainResponse = (output: any, context: __SerdeContext): CreateDomainResponse => {
  const contents: any = {};
  if (output[_DSo] != null) {
    contents[_DSo] = de_DomainStatus(output[_DSo], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDateArrayOptions
 */
const de_DateArrayOptions = (output: any, context: __SerdeContext): DateArrayOptions => {
  const contents: any = {};
  if (output[_DV] != null) {
    contents[_DV] = __expectString(output[_DV]);
  }
  if (output[_SF] != null) {
    contents[_SF] = __expectString(output[_SF]);
  }
  if (output[_FE] != null) {
    contents[_FE] = __parseBoolean(output[_FE]);
  }
  if (output[_SE] != null) {
    contents[_SE] = __parseBoolean(output[_SE]);
  }
  if (output[_RE] != null) {
    contents[_RE] = __parseBoolean(output[_RE]);
  }
  return contents;
};

/**
 * deserializeAws_queryDateOptions
 */
const de_DateOptions = (output: any, context: __SerdeContext): DateOptions => {
  const contents: any = {};
  if (output[_DV] != null) {
    contents[_DV] = __expectString(output[_DV]);
  }
  if (output[_SFo] != null) {
    contents[_SFo] = __expectString(output[_SFo]);
  }
  if (output[_FE] != null) {
    contents[_FE] = __parseBoolean(output[_FE]);
  }
  if (output[_SE] != null) {
    contents[_SE] = __parseBoolean(output[_SE]);
  }
  if (output[_RE] != null) {
    contents[_RE] = __parseBoolean(output[_RE]);
  }
  if (output[_SEo] != null) {
    contents[_SEo] = __parseBoolean(output[_SEo]);
  }
  return contents;
};

/**
 * deserializeAws_queryDefineAnalysisSchemeResponse
 */
const de_DefineAnalysisSchemeResponse = (output: any, context: __SerdeContext): DefineAnalysisSchemeResponse => {
  const contents: any = {};
  if (output[_ASn] != null) {
    contents[_ASn] = de_AnalysisSchemeStatus(output[_ASn], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDefineExpressionResponse
 */
const de_DefineExpressionResponse = (output: any, context: __SerdeContext): DefineExpressionResponse => {
  const contents: any = {};
  if (output[_E] != null) {
    contents[_E] = de_ExpressionStatus(output[_E], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDefineIndexFieldResponse
 */
const de_DefineIndexFieldResponse = (output: any, context: __SerdeContext): DefineIndexFieldResponse => {
  const contents: any = {};
  if (output[_IF] != null) {
    contents[_IF] = de_IndexFieldStatus(output[_IF], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDefineSuggesterResponse
 */
const de_DefineSuggesterResponse = (output: any, context: __SerdeContext): DefineSuggesterResponse => {
  const contents: any = {};
  if (output[_Su] != null) {
    contents[_Su] = de_SuggesterStatus(output[_Su], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteAnalysisSchemeResponse
 */
const de_DeleteAnalysisSchemeResponse = (output: any, context: __SerdeContext): DeleteAnalysisSchemeResponse => {
  const contents: any = {};
  if (output[_ASn] != null) {
    contents[_ASn] = de_AnalysisSchemeStatus(output[_ASn], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteDomainResponse
 */
const de_DeleteDomainResponse = (output: any, context: __SerdeContext): DeleteDomainResponse => {
  const contents: any = {};
  if (output[_DSo] != null) {
    contents[_DSo] = de_DomainStatus(output[_DSo], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteExpressionResponse
 */
const de_DeleteExpressionResponse = (output: any, context: __SerdeContext): DeleteExpressionResponse => {
  const contents: any = {};
  if (output[_E] != null) {
    contents[_E] = de_ExpressionStatus(output[_E], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteIndexFieldResponse
 */
const de_DeleteIndexFieldResponse = (output: any, context: __SerdeContext): DeleteIndexFieldResponse => {
  const contents: any = {};
  if (output[_IF] != null) {
    contents[_IF] = de_IndexFieldStatus(output[_IF], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteSuggesterResponse
 */
const de_DeleteSuggesterResponse = (output: any, context: __SerdeContext): DeleteSuggesterResponse => {
  const contents: any = {};
  if (output[_Su] != null) {
    contents[_Su] = de_SuggesterStatus(output[_Su], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeAnalysisSchemesResponse
 */
const de_DescribeAnalysisSchemesResponse = (output: any, context: __SerdeContext): DescribeAnalysisSchemesResponse => {
  const contents: any = {};
  if (String(output.AnalysisSchemes).trim() === "") {
    contents[_ASna] = [];
  } else if (output[_ASna] != null && output[_ASna][_m] != null) {
    contents[_ASna] = de_AnalysisSchemeStatusList(__getArrayIfSingleItem(output[_ASna][_m]), context);
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
  if (output[_AOv] != null) {
    contents[_AOv] = de_AvailabilityOptionsStatus(output[_AOv], context);
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
  if (output[_DEO] != null) {
    contents[_DEO] = de_DomainEndpointOptionsStatus(output[_DEO], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeDomainsResponse
 */
const de_DescribeDomainsResponse = (output: any, context: __SerdeContext): DescribeDomainsResponse => {
  const contents: any = {};
  if (String(output.DomainStatusList).trim() === "") {
    contents[_DSL] = [];
  } else if (output[_DSL] != null && output[_DSL][_m] != null) {
    contents[_DSL] = de_DomainStatusList(__getArrayIfSingleItem(output[_DSL][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeExpressionsResponse
 */
const de_DescribeExpressionsResponse = (output: any, context: __SerdeContext): DescribeExpressionsResponse => {
  const contents: any = {};
  if (String(output.Expressions).trim() === "") {
    contents[_Ex] = [];
  } else if (output[_Ex] != null && output[_Ex][_m] != null) {
    contents[_Ex] = de_ExpressionStatusList(__getArrayIfSingleItem(output[_Ex][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeIndexFieldsResponse
 */
const de_DescribeIndexFieldsResponse = (output: any, context: __SerdeContext): DescribeIndexFieldsResponse => {
  const contents: any = {};
  if (String(output.IndexFields).trim() === "") {
    contents[_IFn] = [];
  } else if (output[_IFn] != null && output[_IFn][_m] != null) {
    contents[_IFn] = de_IndexFieldStatusList(__getArrayIfSingleItem(output[_IFn][_m]), context);
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
  if (output[_SP] != null) {
    contents[_SP] = de_ScalingParametersStatus(output[_SP], context);
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
  if (output[_AP] != null) {
    contents[_AP] = de_AccessPoliciesStatus(output[_AP], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeSuggestersResponse
 */
const de_DescribeSuggestersResponse = (output: any, context: __SerdeContext): DescribeSuggestersResponse => {
  const contents: any = {};
  if (String(output.Suggesters).trim() === "") {
    contents[_Sug] = [];
  } else if (output[_Sug] != null && output[_Sug][_m] != null) {
    contents[_Sug] = de_SuggesterStatusList(__getArrayIfSingleItem(output[_Sug][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDisabledOperationException
 */
const de_DisabledOperationException = (output: any, context: __SerdeContext): DisabledOperationException => {
  const contents: any = {};
  if (output[_C] != null) {
    contents[_C] = __expectString(output[_C]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryDocumentSuggesterOptions
 */
const de_DocumentSuggesterOptions = (output: any, context: __SerdeContext): DocumentSuggesterOptions => {
  const contents: any = {};
  if (output[_SFo] != null) {
    contents[_SFo] = __expectString(output[_SFo]);
  }
  if (output[_FM] != null) {
    contents[_FM] = __expectString(output[_FM]);
  }
  if (output[_SEor] != null) {
    contents[_SEor] = __expectString(output[_SEor]);
  }
  return contents;
};

/**
 * deserializeAws_queryDomainEndpointOptions
 */
const de_DomainEndpointOptions = (output: any, context: __SerdeContext): DomainEndpointOptions => {
  const contents: any = {};
  if (output[_EHTTPS] != null) {
    contents[_EHTTPS] = __parseBoolean(output[_EHTTPS]);
  }
  if (output[_TLSSP] != null) {
    contents[_TLSSP] = __expectString(output[_TLSSP]);
  }
  return contents;
};

/**
 * deserializeAws_queryDomainEndpointOptionsStatus
 */
const de_DomainEndpointOptionsStatus = (output: any, context: __SerdeContext): DomainEndpointOptionsStatus => {
  const contents: any = {};
  if (output[_O] != null) {
    contents[_O] = de_DomainEndpointOptions(output[_O], context);
  }
  if (output[_Sta] != null) {
    contents[_Sta] = de_OptionStatus(output[_Sta], context);
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
  if (output[_DI] != null) {
    contents[_DI] = __expectString(output[_DI]);
  }
  if (output[_DN] != null) {
    contents[_DN] = __expectString(output[_DN]);
  }
  if (output[_ARN] != null) {
    contents[_ARN] = __expectString(output[_ARN]);
  }
  if (output[_Cr] != null) {
    contents[_Cr] = __parseBoolean(output[_Cr]);
  }
  if (output[_De] != null) {
    contents[_De] = __parseBoolean(output[_De]);
  }
  if (output[_DSoc] != null) {
    contents[_DSoc] = de_ServiceEndpoint(output[_DSoc], context);
  }
  if (output[_SS] != null) {
    contents[_SS] = de_ServiceEndpoint(output[_SS], context);
  }
  if (output[_RID] != null) {
    contents[_RID] = __parseBoolean(output[_RID]);
  }
  if (output[_P] != null) {
    contents[_P] = __parseBoolean(output[_P]);
  }
  if (output[_SIT] != null) {
    contents[_SIT] = __expectString(output[_SIT]);
  }
  if (output[_SPC] != null) {
    contents[_SPC] = __strictParseInt32(output[_SPC]) as number;
  }
  if (output[_SIC] != null) {
    contents[_SIC] = __strictParseInt32(output[_SIC]) as number;
  }
  if (output[_L] != null) {
    contents[_L] = de_Limits(output[_L], context);
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
  if (output[_DV] != null) {
    contents[_DV] = __strictParseFloat(output[_DV]) as number;
  }
  if (output[_SF] != null) {
    contents[_SF] = __expectString(output[_SF]);
  }
  if (output[_FE] != null) {
    contents[_FE] = __parseBoolean(output[_FE]);
  }
  if (output[_SE] != null) {
    contents[_SE] = __parseBoolean(output[_SE]);
  }
  if (output[_RE] != null) {
    contents[_RE] = __parseBoolean(output[_RE]);
  }
  return contents;
};

/**
 * deserializeAws_queryDoubleOptions
 */
const de_DoubleOptions = (output: any, context: __SerdeContext): DoubleOptions => {
  const contents: any = {};
  if (output[_DV] != null) {
    contents[_DV] = __strictParseFloat(output[_DV]) as number;
  }
  if (output[_SFo] != null) {
    contents[_SFo] = __expectString(output[_SFo]);
  }
  if (output[_FE] != null) {
    contents[_FE] = __parseBoolean(output[_FE]);
  }
  if (output[_SE] != null) {
    contents[_SE] = __parseBoolean(output[_SE]);
  }
  if (output[_RE] != null) {
    contents[_RE] = __parseBoolean(output[_RE]);
  }
  if (output[_SEo] != null) {
    contents[_SEo] = __parseBoolean(output[_SEo]);
  }
  return contents;
};

/**
 * deserializeAws_queryExpression
 */
const de_Expression = (output: any, context: __SerdeContext): Expression => {
  const contents: any = {};
  if (output[_EN] != null) {
    contents[_EN] = __expectString(output[_EN]);
  }
  if (output[_EV] != null) {
    contents[_EV] = __expectString(output[_EV]);
  }
  return contents;
};

/**
 * deserializeAws_queryExpressionStatus
 */
const de_ExpressionStatus = (output: any, context: __SerdeContext): ExpressionStatus => {
  const contents: any = {};
  if (output[_O] != null) {
    contents[_O] = de_Expression(output[_O], context);
  }
  if (output[_Sta] != null) {
    contents[_Sta] = de_OptionStatus(output[_Sta], context);
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
  if (String(output.FieldNames).trim() === "") {
    contents[_FN] = [];
  } else if (output[_FN] != null && output[_FN][_m] != null) {
    contents[_FN] = de_FieldNameList(__getArrayIfSingleItem(output[_FN][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryIndexField
 */
const de_IndexField = (output: any, context: __SerdeContext): IndexField => {
  const contents: any = {};
  if (output[_IFN] != null) {
    contents[_IFN] = __expectString(output[_IFN]);
  }
  if (output[_IFT] != null) {
    contents[_IFT] = __expectString(output[_IFT]);
  }
  if (output[_IO] != null) {
    contents[_IO] = de_IntOptions(output[_IO], context);
  }
  if (output[_DO] != null) {
    contents[_DO] = de_DoubleOptions(output[_DO], context);
  }
  if (output[_LO] != null) {
    contents[_LO] = de_LiteralOptions(output[_LO], context);
  }
  if (output[_TO] != null) {
    contents[_TO] = de_TextOptions(output[_TO], context);
  }
  if (output[_DOa] != null) {
    contents[_DOa] = de_DateOptions(output[_DOa], context);
  }
  if (output[_LLO] != null) {
    contents[_LLO] = de_LatLonOptions(output[_LLO], context);
  }
  if (output[_IAO] != null) {
    contents[_IAO] = de_IntArrayOptions(output[_IAO], context);
  }
  if (output[_DAOo] != null) {
    contents[_DAOo] = de_DoubleArrayOptions(output[_DAOo], context);
  }
  if (output[_LAO] != null) {
    contents[_LAO] = de_LiteralArrayOptions(output[_LAO], context);
  }
  if (output[_TAO] != null) {
    contents[_TAO] = de_TextArrayOptions(output[_TAO], context);
  }
  if (output[_DAOa] != null) {
    contents[_DAOa] = de_DateArrayOptions(output[_DAOa], context);
  }
  return contents;
};

/**
 * deserializeAws_queryIndexFieldStatus
 */
const de_IndexFieldStatus = (output: any, context: __SerdeContext): IndexFieldStatus => {
  const contents: any = {};
  if (output[_O] != null) {
    contents[_O] = de_IndexField(output[_O], context);
  }
  if (output[_Sta] != null) {
    contents[_Sta] = de_OptionStatus(output[_Sta], context);
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
  if (output[_DV] != null) {
    contents[_DV] = __strictParseLong(output[_DV]) as number;
  }
  if (output[_SF] != null) {
    contents[_SF] = __expectString(output[_SF]);
  }
  if (output[_FE] != null) {
    contents[_FE] = __parseBoolean(output[_FE]);
  }
  if (output[_SE] != null) {
    contents[_SE] = __parseBoolean(output[_SE]);
  }
  if (output[_RE] != null) {
    contents[_RE] = __parseBoolean(output[_RE]);
  }
  return contents;
};

/**
 * deserializeAws_queryInternalException
 */
const de_InternalException = (output: any, context: __SerdeContext): InternalException => {
  const contents: any = {};
  if (output[_C] != null) {
    contents[_C] = __expectString(output[_C]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryIntOptions
 */
const de_IntOptions = (output: any, context: __SerdeContext): IntOptions => {
  const contents: any = {};
  if (output[_DV] != null) {
    contents[_DV] = __strictParseLong(output[_DV]) as number;
  }
  if (output[_SFo] != null) {
    contents[_SFo] = __expectString(output[_SFo]);
  }
  if (output[_FE] != null) {
    contents[_FE] = __parseBoolean(output[_FE]);
  }
  if (output[_SE] != null) {
    contents[_SE] = __parseBoolean(output[_SE]);
  }
  if (output[_RE] != null) {
    contents[_RE] = __parseBoolean(output[_RE]);
  }
  if (output[_SEo] != null) {
    contents[_SEo] = __parseBoolean(output[_SEo]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidTypeException
 */
const de_InvalidTypeException = (output: any, context: __SerdeContext): InvalidTypeException => {
  const contents: any = {};
  if (output[_C] != null) {
    contents[_C] = __expectString(output[_C]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryLatLonOptions
 */
const de_LatLonOptions = (output: any, context: __SerdeContext): LatLonOptions => {
  const contents: any = {};
  if (output[_DV] != null) {
    contents[_DV] = __expectString(output[_DV]);
  }
  if (output[_SFo] != null) {
    contents[_SFo] = __expectString(output[_SFo]);
  }
  if (output[_FE] != null) {
    contents[_FE] = __parseBoolean(output[_FE]);
  }
  if (output[_SE] != null) {
    contents[_SE] = __parseBoolean(output[_SE]);
  }
  if (output[_RE] != null) {
    contents[_RE] = __parseBoolean(output[_RE]);
  }
  if (output[_SEo] != null) {
    contents[_SEo] = __parseBoolean(output[_SEo]);
  }
  return contents;
};

/**
 * deserializeAws_queryLimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  const contents: any = {};
  if (output[_C] != null) {
    contents[_C] = __expectString(output[_C]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryLimits
 */
const de_Limits = (output: any, context: __SerdeContext): Limits => {
  const contents: any = {};
  if (output[_MRC] != null) {
    contents[_MRC] = __strictParseInt32(output[_MRC]) as number;
  }
  if (output[_MPC] != null) {
    contents[_MPC] = __strictParseInt32(output[_MPC]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryListDomainNamesResponse
 */
const de_ListDomainNamesResponse = (output: any, context: __SerdeContext): ListDomainNamesResponse => {
  const contents: any = {};
  if (String(output.DomainNames).trim() === "") {
    contents[_DNo] = {};
  } else if (output[_DNo] != null && output[_DNo][_e] != null) {
    contents[_DNo] = de_DomainNameMap(__getArrayIfSingleItem(output[_DNo][_e]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryLiteralArrayOptions
 */
const de_LiteralArrayOptions = (output: any, context: __SerdeContext): LiteralArrayOptions => {
  const contents: any = {};
  if (output[_DV] != null) {
    contents[_DV] = __expectString(output[_DV]);
  }
  if (output[_SF] != null) {
    contents[_SF] = __expectString(output[_SF]);
  }
  if (output[_FE] != null) {
    contents[_FE] = __parseBoolean(output[_FE]);
  }
  if (output[_SE] != null) {
    contents[_SE] = __parseBoolean(output[_SE]);
  }
  if (output[_RE] != null) {
    contents[_RE] = __parseBoolean(output[_RE]);
  }
  return contents;
};

/**
 * deserializeAws_queryLiteralOptions
 */
const de_LiteralOptions = (output: any, context: __SerdeContext): LiteralOptions => {
  const contents: any = {};
  if (output[_DV] != null) {
    contents[_DV] = __expectString(output[_DV]);
  }
  if (output[_SFo] != null) {
    contents[_SFo] = __expectString(output[_SFo]);
  }
  if (output[_FE] != null) {
    contents[_FE] = __parseBoolean(output[_FE]);
  }
  if (output[_SE] != null) {
    contents[_SE] = __parseBoolean(output[_SE]);
  }
  if (output[_RE] != null) {
    contents[_RE] = __parseBoolean(output[_RE]);
  }
  if (output[_SEo] != null) {
    contents[_SEo] = __parseBoolean(output[_SEo]);
  }
  return contents;
};

/**
 * deserializeAws_queryOptionStatus
 */
const de_OptionStatus = (output: any, context: __SerdeContext): OptionStatus => {
  const contents: any = {};
  if (output[_CDr] != null) {
    contents[_CDr] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CDr]));
  }
  if (output[_UD] != null) {
    contents[_UD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_UD]));
  }
  if (output[_UV] != null) {
    contents[_UV] = __strictParseInt32(output[_UV]) as number;
  }
  if (output[_Stat] != null) {
    contents[_Stat] = __expectString(output[_Stat]);
  }
  if (output[_PD] != null) {
    contents[_PD] = __parseBoolean(output[_PD]);
  }
  return contents;
};

/**
 * deserializeAws_queryResourceAlreadyExistsException
 */
const de_ResourceAlreadyExistsException = (output: any, context: __SerdeContext): ResourceAlreadyExistsException => {
  const contents: any = {};
  if (output[_C] != null) {
    contents[_C] = __expectString(output[_C]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  const contents: any = {};
  if (output[_C] != null) {
    contents[_C] = __expectString(output[_C]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryScalingParameters
 */
const de_ScalingParameters = (output: any, context: __SerdeContext): ScalingParameters => {
  const contents: any = {};
  if (output[_DIT] != null) {
    contents[_DIT] = __expectString(output[_DIT]);
  }
  if (output[_DRC] != null) {
    contents[_DRC] = __strictParseInt32(output[_DRC]) as number;
  }
  if (output[_DPC] != null) {
    contents[_DPC] = __strictParseInt32(output[_DPC]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryScalingParametersStatus
 */
const de_ScalingParametersStatus = (output: any, context: __SerdeContext): ScalingParametersStatus => {
  const contents: any = {};
  if (output[_O] != null) {
    contents[_O] = de_ScalingParameters(output[_O], context);
  }
  if (output[_Sta] != null) {
    contents[_Sta] = de_OptionStatus(output[_Sta], context);
  }
  return contents;
};

/**
 * deserializeAws_queryServiceEndpoint
 */
const de_ServiceEndpoint = (output: any, context: __SerdeContext): ServiceEndpoint => {
  const contents: any = {};
  if (output[_En] != null) {
    contents[_En] = __expectString(output[_En]);
  }
  return contents;
};

/**
 * deserializeAws_querySuggester
 */
const de_Suggester = (output: any, context: __SerdeContext): Suggester => {
  const contents: any = {};
  if (output[_SN] != null) {
    contents[_SN] = __expectString(output[_SN]);
  }
  if (output[_DSO] != null) {
    contents[_DSO] = de_DocumentSuggesterOptions(output[_DSO], context);
  }
  return contents;
};

/**
 * deserializeAws_querySuggesterStatus
 */
const de_SuggesterStatus = (output: any, context: __SerdeContext): SuggesterStatus => {
  const contents: any = {};
  if (output[_O] != null) {
    contents[_O] = de_Suggester(output[_O], context);
  }
  if (output[_Sta] != null) {
    contents[_Sta] = de_OptionStatus(output[_Sta], context);
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
  if (output[_DV] != null) {
    contents[_DV] = __expectString(output[_DV]);
  }
  if (output[_SF] != null) {
    contents[_SF] = __expectString(output[_SF]);
  }
  if (output[_RE] != null) {
    contents[_RE] = __parseBoolean(output[_RE]);
  }
  if (output[_HE] != null) {
    contents[_HE] = __parseBoolean(output[_HE]);
  }
  if (output[_ASn] != null) {
    contents[_ASn] = __expectString(output[_ASn]);
  }
  return contents;
};

/**
 * deserializeAws_queryTextOptions
 */
const de_TextOptions = (output: any, context: __SerdeContext): TextOptions => {
  const contents: any = {};
  if (output[_DV] != null) {
    contents[_DV] = __expectString(output[_DV]);
  }
  if (output[_SFo] != null) {
    contents[_SFo] = __expectString(output[_SFo]);
  }
  if (output[_RE] != null) {
    contents[_RE] = __parseBoolean(output[_RE]);
  }
  if (output[_SEo] != null) {
    contents[_SEo] = __parseBoolean(output[_SEo]);
  }
  if (output[_HE] != null) {
    contents[_HE] = __parseBoolean(output[_HE]);
  }
  if (output[_ASn] != null) {
    contents[_ASn] = __expectString(output[_ASn]);
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
  if (output[_AOv] != null) {
    contents[_AOv] = de_AvailabilityOptionsStatus(output[_AOv], context);
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
  if (output[_DEO] != null) {
    contents[_DEO] = de_DomainEndpointOptionsStatus(output[_DEO], context);
  }
  return contents;
};

/**
 * deserializeAws_queryUpdateScalingParametersResponse
 */
const de_UpdateScalingParametersResponse = (output: any, context: __SerdeContext): UpdateScalingParametersResponse => {
  const contents: any = {};
  if (output[_SP] != null) {
    contents[_SP] = de_ScalingParametersStatus(output[_SP], context);
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
  if (output[_AP] != null) {
    contents[_AP] = de_AccessPoliciesStatus(output[_AP], context);
  }
  return contents;
};

/**
 * deserializeAws_queryValidationException
 */
const de_ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  const contents: any = {};
  if (output[_C] != null) {
    contents[_C] = __expectString(output[_C]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
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

const _ = "2013-01-01";
const _A = "Action";
const _AO = "AnalysisOptions";
const _AOv = "AvailabilityOptions";
const _AP = "AccessPolicies";
const _ARN = "ARN";
const _AS = "AlgorithmicStemming";
const _ASL = "AnalysisSchemeLanguage";
const _ASN = "AnalysisSchemeName";
const _ASNn = "AnalysisSchemeNames";
const _ASn = "AnalysisScheme";
const _ASna = "AnalysisSchemes";
const _BS = "BuildSuggesters";
const _C = "Code";
const _CD = "CreateDomain";
const _CDr = "CreationDate";
const _Cr = "Created";
const _D = "Deployed";
const _DAO = "DescribeAvailabilityOptions";
const _DAOa = "DateArrayOptions";
const _DAOo = "DoubleArrayOptions";
const _DAS = "DefineAnalysisScheme";
const _DASe = "DeleteAnalysisScheme";
const _DASes = "DescribeAnalysisSchemes";
const _DD = "DeleteDomain";
const _DDEO = "DescribeDomainEndpointOptions";
const _DDe = "DescribeDomains";
const _DE = "DefineExpression";
const _DEO = "DomainEndpointOptions";
const _DEe = "DeleteExpression";
const _DEes = "DescribeExpressions";
const _DI = "DomainId";
const _DIF = "DefineIndexField";
const _DIFe = "DeleteIndexField";
const _DIFes = "DescribeIndexFields";
const _DIT = "DesiredInstanceType";
const _DN = "DomainName";
const _DNo = "DomainNames";
const _DO = "DoubleOptions";
const _DOa = "DateOptions";
const _DPC = "DesiredPartitionCount";
const _DRC = "DesiredReplicationCount";
const _DS = "DefineSuggester";
const _DSAP = "DescribeServiceAccessPolicies";
const _DSL = "DomainStatusList";
const _DSO = "DocumentSuggesterOptions";
const _DSP = "DescribeScalingParameters";
const _DSe = "DeleteSuggester";
const _DSes = "DescribeSuggesters";
const _DSo = "DomainStatus";
const _DSoc = "DocService";
const _DV = "DefaultValue";
const _De = "Deleted";
const _E = "Expression";
const _EHTTPS = "EnforceHTTPS";
const _EN = "ExpressionName";
const _ENx = "ExpressionNames";
const _EV = "ExpressionValue";
const _En = "Endpoint";
const _Ex = "Expressions";
const _FE = "FacetEnabled";
const _FM = "FuzzyMatching";
const _FN = "FieldNames";
const _HE = "HighlightEnabled";
const _IAO = "IntArrayOptions";
const _ID = "IndexDocuments";
const _IF = "IndexField";
const _IFN = "IndexFieldName";
const _IFT = "IndexFieldType";
const _IFn = "IndexFields";
const _IO = "IntOptions";
const _JTD = "JapaneseTokenizationDictionary";
const _L = "Limits";
const _LAO = "LiteralArrayOptions";
const _LDN = "ListDomainNames";
const _LLO = "LatLonOptions";
const _LO = "LiteralOptions";
const _M = "Message";
const _MAZ = "MultiAZ";
const _MPC = "MaximumPartitionCount";
const _MRC = "MaximumReplicationCount";
const _O = "Options";
const _P = "Processing";
const _PD = "PendingDeletion";
const _RE = "ReturnEnabled";
const _RID = "RequiresIndexDocuments";
const _S = "Synonyms";
const _SD = "StemmingDictionary";
const _SE = "SearchEnabled";
const _SEo = "SortEnabled";
const _SEor = "SortExpression";
const _SF = "SourceFields";
const _SFo = "SourceField";
const _SIC = "SearchInstanceCount";
const _SIT = "SearchInstanceType";
const _SN = "SuggesterName";
const _SNu = "SuggesterNames";
const _SP = "ScalingParameters";
const _SPC = "SearchPartitionCount";
const _SS = "SearchService";
const _St = "Stopwords";
const _Sta = "Status";
const _Stat = "State";
const _Su = "Suggester";
const _Sug = "Suggesters";
const _TAO = "TextArrayOptions";
const _TLSSP = "TLSSecurityPolicy";
const _TO = "TextOptions";
const _UAO = "UpdateAvailabilityOptions";
const _UD = "UpdateDate";
const _UDEO = "UpdateDomainEndpointOptions";
const _USAP = "UpdateServiceAccessPolicies";
const _USP = "UpdateScalingParameters";
const _UV = "UpdateVersion";
const _V = "Version";
const _e = "entry";
const _m = "member";

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
