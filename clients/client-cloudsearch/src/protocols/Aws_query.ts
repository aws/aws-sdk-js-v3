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
  IntOptions,
  InternalException,
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
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
  parseBoolean as __parseBoolean,
  parseRfc3339DateTime as __parseRfc3339DateTime,
  serializeFloat as __serializeFloat,
  strictParseFloat as __strictParseFloat,
  strictParseInt32 as __strictParseInt32,
  strictParseLong as __strictParseLong,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";
import { decodeHTML } from "entities";
import { parse as xmlParse } from "fast-xml-parser";

export const serializeAws_queryBuildSuggestersCommand = async (
  input: BuildSuggestersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryBuildSuggestersRequest(input, context),
    Action: "BuildSuggesters",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateDomainCommand = async (
  input: CreateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateDomainRequest(input, context),
    Action: "CreateDomain",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDefineAnalysisSchemeCommand = async (
  input: DefineAnalysisSchemeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDefineAnalysisSchemeRequest(input, context),
    Action: "DefineAnalysisScheme",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDefineExpressionCommand = async (
  input: DefineExpressionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDefineExpressionRequest(input, context),
    Action: "DefineExpression",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDefineIndexFieldCommand = async (
  input: DefineIndexFieldCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDefineIndexFieldRequest(input, context),
    Action: "DefineIndexField",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDefineSuggesterCommand = async (
  input: DefineSuggesterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDefineSuggesterRequest(input, context),
    Action: "DefineSuggester",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteAnalysisSchemeCommand = async (
  input: DeleteAnalysisSchemeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteAnalysisSchemeRequest(input, context),
    Action: "DeleteAnalysisScheme",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteDomainCommand = async (
  input: DeleteDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteDomainRequest(input, context),
    Action: "DeleteDomain",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteExpressionCommand = async (
  input: DeleteExpressionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteExpressionRequest(input, context),
    Action: "DeleteExpression",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteIndexFieldCommand = async (
  input: DeleteIndexFieldCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteIndexFieldRequest(input, context),
    Action: "DeleteIndexField",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteSuggesterCommand = async (
  input: DeleteSuggesterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteSuggesterRequest(input, context),
    Action: "DeleteSuggester",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeAnalysisSchemesCommand = async (
  input: DescribeAnalysisSchemesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeAnalysisSchemesRequest(input, context),
    Action: "DescribeAnalysisSchemes",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeAvailabilityOptionsCommand = async (
  input: DescribeAvailabilityOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeAvailabilityOptionsRequest(input, context),
    Action: "DescribeAvailabilityOptions",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeDomainEndpointOptionsCommand = async (
  input: DescribeDomainEndpointOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeDomainEndpointOptionsRequest(input, context),
    Action: "DescribeDomainEndpointOptions",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeDomainsCommand = async (
  input: DescribeDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeDomainsRequest(input, context),
    Action: "DescribeDomains",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeExpressionsCommand = async (
  input: DescribeExpressionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeExpressionsRequest(input, context),
    Action: "DescribeExpressions",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeIndexFieldsCommand = async (
  input: DescribeIndexFieldsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeIndexFieldsRequest(input, context),
    Action: "DescribeIndexFields",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeScalingParametersCommand = async (
  input: DescribeScalingParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeScalingParametersRequest(input, context),
    Action: "DescribeScalingParameters",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeServiceAccessPoliciesCommand = async (
  input: DescribeServiceAccessPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeServiceAccessPoliciesRequest(input, context),
    Action: "DescribeServiceAccessPolicies",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeSuggestersCommand = async (
  input: DescribeSuggestersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeSuggestersRequest(input, context),
    Action: "DescribeSuggesters",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryIndexDocumentsCommand = async (
  input: IndexDocumentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryIndexDocumentsRequest(input, context),
    Action: "IndexDocuments",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListDomainNamesCommand = async (
  input: ListDomainNamesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "ListDomainNames",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateAvailabilityOptionsCommand = async (
  input: UpdateAvailabilityOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateAvailabilityOptionsRequest(input, context),
    Action: "UpdateAvailabilityOptions",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateDomainEndpointOptionsCommand = async (
  input: UpdateDomainEndpointOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateDomainEndpointOptionsRequest(input, context),
    Action: "UpdateDomainEndpointOptions",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateScalingParametersCommand = async (
  input: UpdateScalingParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateScalingParametersRequest(input, context),
    Action: "UpdateScalingParameters",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateServiceAccessPoliciesCommand = async (
  input: UpdateServiceAccessPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateServiceAccessPoliciesRequest(input, context),
    Action: "UpdateServiceAccessPolicies",
    Version: "2013-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_queryBuildSuggestersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BuildSuggestersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryBuildSuggestersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryBuildSuggestersResponse(data.BuildSuggestersResult, context);
  const response: BuildSuggestersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryBuildSuggestersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BuildSuggestersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryCreateDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateDomainResponse(data.CreateDomainResult, context);
  const response: CreateDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudsearch#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.cloudsearch#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.cloudsearch#ValidationException":
      response = {
        ...(await deserializeAws_queryValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDefineAnalysisSchemeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DefineAnalysisSchemeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDefineAnalysisSchemeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDefineAnalysisSchemeResponse(data.DefineAnalysisSchemeResult, context);
  const response: DefineAnalysisSchemeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDefineAnalysisSchemeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DefineAnalysisSchemeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTypeException":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      response = {
        ...(await deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudsearch#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDefineExpressionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DefineExpressionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDefineExpressionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDefineExpressionResponse(data.DefineExpressionResult, context);
  const response: DefineExpressionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDefineExpressionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DefineExpressionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTypeException":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      response = {
        ...(await deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudsearch#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDefineIndexFieldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DefineIndexFieldCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDefineIndexFieldCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDefineIndexFieldResponse(data.DefineIndexFieldResult, context);
  const response: DefineIndexFieldCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDefineIndexFieldCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DefineIndexFieldCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTypeException":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      response = {
        ...(await deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudsearch#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDefineSuggesterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DefineSuggesterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDefineSuggesterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDefineSuggesterResponse(data.DefineSuggesterResult, context);
  const response: DefineSuggesterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDefineSuggesterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DefineSuggesterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTypeException":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      response = {
        ...(await deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudsearch#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteAnalysisSchemeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnalysisSchemeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteAnalysisSchemeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteAnalysisSchemeResponse(data.DeleteAnalysisSchemeResult, context);
  const response: DeleteAnalysisSchemeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteAnalysisSchemeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnalysisSchemeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTypeException":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      response = {
        ...(await deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteDomainResponse(data.DeleteDomainResult, context);
  const response: DeleteDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteExpressionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExpressionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteExpressionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteExpressionResponse(data.DeleteExpressionResult, context);
  const response: DeleteExpressionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteExpressionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExpressionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTypeException":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      response = {
        ...(await deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteIndexFieldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIndexFieldCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteIndexFieldCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteIndexFieldResponse(data.DeleteIndexFieldResult, context);
  const response: DeleteIndexFieldCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteIndexFieldCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIndexFieldCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTypeException":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      response = {
        ...(await deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteSuggesterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSuggesterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteSuggesterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteSuggesterResponse(data.DeleteSuggesterResult, context);
  const response: DeleteSuggesterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteSuggesterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSuggesterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTypeException":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      response = {
        ...(await deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeAnalysisSchemesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAnalysisSchemesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeAnalysisSchemesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeAnalysisSchemesResponse(data.DescribeAnalysisSchemesResult, context);
  const response: DescribeAnalysisSchemesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeAnalysisSchemesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAnalysisSchemesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeAvailabilityOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAvailabilityOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeAvailabilityOptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeAvailabilityOptionsResponse(data.DescribeAvailabilityOptionsResult, context);
  const response: DescribeAvailabilityOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeAvailabilityOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAvailabilityOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DisabledOperationException":
    case "com.amazonaws.cloudsearch#DisabledOperationException":
      response = {
        ...(await deserializeAws_queryDisabledOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTypeException":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      response = {
        ...(await deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudsearch#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeDomainEndpointOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainEndpointOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeDomainEndpointOptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeDomainEndpointOptionsResponse(
    data.DescribeDomainEndpointOptionsResult,
    context
  );
  const response: DescribeDomainEndpointOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeDomainEndpointOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainEndpointOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DisabledOperationException":
    case "com.amazonaws.cloudsearch#DisabledOperationException":
      response = {
        ...(await deserializeAws_queryDisabledOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudsearch#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeDomainsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeDomainsResponse(data.DescribeDomainsResult, context);
  const response: DescribeDomainsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeDomainsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeExpressionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExpressionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeExpressionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeExpressionsResponse(data.DescribeExpressionsResult, context);
  const response: DescribeExpressionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeExpressionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExpressionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeIndexFieldsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIndexFieldsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeIndexFieldsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeIndexFieldsResponse(data.DescribeIndexFieldsResult, context);
  const response: DescribeIndexFieldsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeIndexFieldsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIndexFieldsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeScalingParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeScalingParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeScalingParametersResponse(data.DescribeScalingParametersResult, context);
  const response: DescribeScalingParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeScalingParametersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingParametersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeServiceAccessPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServiceAccessPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeServiceAccessPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeServiceAccessPoliciesResponse(
    data.DescribeServiceAccessPoliciesResult,
    context
  );
  const response: DescribeServiceAccessPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeServiceAccessPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServiceAccessPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeSuggestersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSuggestersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeSuggestersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeSuggestersResponse(data.DescribeSuggestersResult, context);
  const response: DescribeSuggestersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeSuggestersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSuggestersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryIndexDocumentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IndexDocumentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryIndexDocumentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryIndexDocumentsResponse(data.IndexDocumentsResult, context);
  const response: IndexDocumentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryIndexDocumentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IndexDocumentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListDomainNamesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainNamesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListDomainNamesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListDomainNamesResponse(data.ListDomainNamesResult, context);
  const response: ListDomainNamesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListDomainNamesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainNamesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUpdateAvailabilityOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAvailabilityOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryUpdateAvailabilityOptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUpdateAvailabilityOptionsResponse(data.UpdateAvailabilityOptionsResult, context);
  const response: UpdateAvailabilityOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateAvailabilityOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAvailabilityOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DisabledOperationException":
    case "com.amazonaws.cloudsearch#DisabledOperationException":
      response = {
        ...(await deserializeAws_queryDisabledOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTypeException":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      response = {
        ...(await deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudsearch#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.cloudsearch#ValidationException":
      response = {
        ...(await deserializeAws_queryValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUpdateDomainEndpointOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainEndpointOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryUpdateDomainEndpointOptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUpdateDomainEndpointOptionsResponse(data.UpdateDomainEndpointOptionsResult, context);
  const response: UpdateDomainEndpointOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateDomainEndpointOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainEndpointOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DisabledOperationException":
    case "com.amazonaws.cloudsearch#DisabledOperationException":
      response = {
        ...(await deserializeAws_queryDisabledOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTypeException":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      response = {
        ...(await deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudsearch#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.cloudsearch#ValidationException":
      response = {
        ...(await deserializeAws_queryValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUpdateScalingParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateScalingParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryUpdateScalingParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUpdateScalingParametersResponse(data.UpdateScalingParametersResult, context);
  const response: UpdateScalingParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateScalingParametersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateScalingParametersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTypeException":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      response = {
        ...(await deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudsearch#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUpdateServiceAccessPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceAccessPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryUpdateServiceAccessPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUpdateServiceAccessPoliciesResponse(data.UpdateServiceAccessPoliciesResult, context);
  const response: UpdateServiceAccessPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateServiceAccessPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceAccessPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTypeException":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      response = {
        ...(await deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudsearch#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_queryBaseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BaseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryBaseException(body.Error, context);
  const contents: BaseException = {
    name: "BaseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryDisabledOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DisabledOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDisabledOperationException(body.Error, context);
  const contents: DisabledOperationException = {
    name: "DisabledOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInternalExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInternalException(body.Error, context);
  const contents: InternalException = {
    name: "InternalException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInvalidTypeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTypeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidTypeException(body.Error, context);
  const contents: InvalidTypeException = {
    name: "InvalidTypeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryLimitExceededException(body.Error, context);
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryResourceAlreadyExistsException(body.Error, context);
  const contents: ResourceAlreadyExistsException = {
    name: "ResourceAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryResourceNotFoundException(body.Error, context);
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryValidationException(body.Error, context);
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_queryAnalysisOptions = (input: AnalysisOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Synonyms !== undefined && input.Synonyms !== null) {
    entries["Synonyms"] = input.Synonyms;
  }
  if (input.Stopwords !== undefined && input.Stopwords !== null) {
    entries["Stopwords"] = input.Stopwords;
  }
  if (input.StemmingDictionary !== undefined && input.StemmingDictionary !== null) {
    entries["StemmingDictionary"] = input.StemmingDictionary;
  }
  if (input.JapaneseTokenizationDictionary !== undefined && input.JapaneseTokenizationDictionary !== null) {
    entries["JapaneseTokenizationDictionary"] = input.JapaneseTokenizationDictionary;
  }
  if (input.AlgorithmicStemming !== undefined && input.AlgorithmicStemming !== null) {
    entries["AlgorithmicStemming"] = input.AlgorithmicStemming;
  }
  return entries;
};

const serializeAws_queryAnalysisScheme = (input: AnalysisScheme, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AnalysisSchemeName !== undefined && input.AnalysisSchemeName !== null) {
    entries["AnalysisSchemeName"] = input.AnalysisSchemeName;
  }
  if (input.AnalysisSchemeLanguage !== undefined && input.AnalysisSchemeLanguage !== null) {
    entries["AnalysisSchemeLanguage"] = input.AnalysisSchemeLanguage;
  }
  if (input.AnalysisOptions !== undefined && input.AnalysisOptions !== null) {
    const memberEntries = serializeAws_queryAnalysisOptions(input.AnalysisOptions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AnalysisOptions.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryBuildSuggestersRequest = (input: BuildSuggestersRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DomainName !== undefined && input.DomainName !== null) {
    entries["DomainName"] = input.DomainName;
  }
  return entries;
};

const serializeAws_queryCreateDomainRequest = (input: CreateDomainRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DomainName !== undefined && input.DomainName !== null) {
    entries["DomainName"] = input.DomainName;
  }
  return entries;
};

const serializeAws_queryDateArrayOptions = (input: DateArrayOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DefaultValue !== undefined && input.DefaultValue !== null) {
    entries["DefaultValue"] = input.DefaultValue;
  }
  if (input.SourceFields !== undefined && input.SourceFields !== null) {
    entries["SourceFields"] = input.SourceFields;
  }
  if (input.FacetEnabled !== undefined && input.FacetEnabled !== null) {
    entries["FacetEnabled"] = input.FacetEnabled;
  }
  if (input.SearchEnabled !== undefined && input.SearchEnabled !== null) {
    entries["SearchEnabled"] = input.SearchEnabled;
  }
  if (input.ReturnEnabled !== undefined && input.ReturnEnabled !== null) {
    entries["ReturnEnabled"] = input.ReturnEnabled;
  }
  return entries;
};

const serializeAws_queryDateOptions = (input: DateOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DefaultValue !== undefined && input.DefaultValue !== null) {
    entries["DefaultValue"] = input.DefaultValue;
  }
  if (input.SourceField !== undefined && input.SourceField !== null) {
    entries["SourceField"] = input.SourceField;
  }
  if (input.FacetEnabled !== undefined && input.FacetEnabled !== null) {
    entries["FacetEnabled"] = input.FacetEnabled;
  }
  if (input.SearchEnabled !== undefined && input.SearchEnabled !== null) {
    entries["SearchEnabled"] = input.SearchEnabled;
  }
  if (input.ReturnEnabled !== undefined && input.ReturnEnabled !== null) {
    entries["ReturnEnabled"] = input.ReturnEnabled;
  }
  if (input.SortEnabled !== undefined && input.SortEnabled !== null) {
    entries["SortEnabled"] = input.SortEnabled;
  }
  return entries;
};

const serializeAws_queryDefineAnalysisSchemeRequest = (
  input: DefineAnalysisSchemeRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DomainName !== undefined && input.DomainName !== null) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.AnalysisScheme !== undefined && input.AnalysisScheme !== null) {
    const memberEntries = serializeAws_queryAnalysisScheme(input.AnalysisScheme, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AnalysisScheme.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDefineExpressionRequest = (input: DefineExpressionRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DomainName !== undefined && input.DomainName !== null) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.Expression !== undefined && input.Expression !== null) {
    const memberEntries = serializeAws_queryExpression(input.Expression, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Expression.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDefineIndexFieldRequest = (input: DefineIndexFieldRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DomainName !== undefined && input.DomainName !== null) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.IndexField !== undefined && input.IndexField !== null) {
    const memberEntries = serializeAws_queryIndexField(input.IndexField, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `IndexField.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDefineSuggesterRequest = (input: DefineSuggesterRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DomainName !== undefined && input.DomainName !== null) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.Suggester !== undefined && input.Suggester !== null) {
    const memberEntries = serializeAws_querySuggester(input.Suggester, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Suggester.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDeleteAnalysisSchemeRequest = (
  input: DeleteAnalysisSchemeRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DomainName !== undefined && input.DomainName !== null) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.AnalysisSchemeName !== undefined && input.AnalysisSchemeName !== null) {
    entries["AnalysisSchemeName"] = input.AnalysisSchemeName;
  }
  return entries;
};

const serializeAws_queryDeleteDomainRequest = (input: DeleteDomainRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DomainName !== undefined && input.DomainName !== null) {
    entries["DomainName"] = input.DomainName;
  }
  return entries;
};

const serializeAws_queryDeleteExpressionRequest = (input: DeleteExpressionRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DomainName !== undefined && input.DomainName !== null) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.ExpressionName !== undefined && input.ExpressionName !== null) {
    entries["ExpressionName"] = input.ExpressionName;
  }
  return entries;
};

const serializeAws_queryDeleteIndexFieldRequest = (input: DeleteIndexFieldRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DomainName !== undefined && input.DomainName !== null) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.IndexFieldName !== undefined && input.IndexFieldName !== null) {
    entries["IndexFieldName"] = input.IndexFieldName;
  }
  return entries;
};

const serializeAws_queryDeleteSuggesterRequest = (input: DeleteSuggesterRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DomainName !== undefined && input.DomainName !== null) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.SuggesterName !== undefined && input.SuggesterName !== null) {
    entries["SuggesterName"] = input.SuggesterName;
  }
  return entries;
};

const serializeAws_queryDescribeAnalysisSchemesRequest = (
  input: DescribeAnalysisSchemesRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DomainName !== undefined && input.DomainName !== null) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.AnalysisSchemeNames !== undefined && input.AnalysisSchemeNames !== null) {
    const memberEntries = serializeAws_queryStandardNameList(input.AnalysisSchemeNames, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AnalysisSchemeNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Deployed !== undefined && input.Deployed !== null) {
    entries["Deployed"] = input.Deployed;
  }
  return entries;
};

const serializeAws_queryDescribeAvailabilityOptionsRequest = (
  input: DescribeAvailabilityOptionsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DomainName !== undefined && input.DomainName !== null) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.Deployed !== undefined && input.Deployed !== null) {
    entries["Deployed"] = input.Deployed;
  }
  return entries;
};

const serializeAws_queryDescribeDomainEndpointOptionsRequest = (
  input: DescribeDomainEndpointOptionsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DomainName !== undefined && input.DomainName !== null) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.Deployed !== undefined && input.Deployed !== null) {
    entries["Deployed"] = input.Deployed;
  }
  return entries;
};

const serializeAws_queryDescribeDomainsRequest = (input: DescribeDomainsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DomainNames !== undefined && input.DomainNames !== null) {
    const memberEntries = serializeAws_queryDomainNameList(input.DomainNames, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DomainNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDescribeExpressionsRequest = (
  input: DescribeExpressionsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DomainName !== undefined && input.DomainName !== null) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.ExpressionNames !== undefined && input.ExpressionNames !== null) {
    const memberEntries = serializeAws_queryStandardNameList(input.ExpressionNames, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ExpressionNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Deployed !== undefined && input.Deployed !== null) {
    entries["Deployed"] = input.Deployed;
  }
  return entries;
};

const serializeAws_queryDescribeIndexFieldsRequest = (
  input: DescribeIndexFieldsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DomainName !== undefined && input.DomainName !== null) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.FieldNames !== undefined && input.FieldNames !== null) {
    const memberEntries = serializeAws_queryDynamicFieldNameList(input.FieldNames, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `FieldNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Deployed !== undefined && input.Deployed !== null) {
    entries["Deployed"] = input.Deployed;
  }
  return entries;
};

const serializeAws_queryDescribeScalingParametersRequest = (
  input: DescribeScalingParametersRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DomainName !== undefined && input.DomainName !== null) {
    entries["DomainName"] = input.DomainName;
  }
  return entries;
};

const serializeAws_queryDescribeServiceAccessPoliciesRequest = (
  input: DescribeServiceAccessPoliciesRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DomainName !== undefined && input.DomainName !== null) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.Deployed !== undefined && input.Deployed !== null) {
    entries["Deployed"] = input.Deployed;
  }
  return entries;
};

const serializeAws_queryDescribeSuggestersRequest = (
  input: DescribeSuggestersRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DomainName !== undefined && input.DomainName !== null) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.SuggesterNames !== undefined && input.SuggesterNames !== null) {
    const memberEntries = serializeAws_queryStandardNameList(input.SuggesterNames, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SuggesterNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Deployed !== undefined && input.Deployed !== null) {
    entries["Deployed"] = input.Deployed;
  }
  return entries;
};

const serializeAws_queryDocumentSuggesterOptions = (input: DocumentSuggesterOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.SourceField !== undefined && input.SourceField !== null) {
    entries["SourceField"] = input.SourceField;
  }
  if (input.FuzzyMatching !== undefined && input.FuzzyMatching !== null) {
    entries["FuzzyMatching"] = input.FuzzyMatching;
  }
  if (input.SortExpression !== undefined && input.SortExpression !== null) {
    entries["SortExpression"] = input.SortExpression;
  }
  return entries;
};

const serializeAws_queryDomainEndpointOptions = (input: DomainEndpointOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.EnforceHTTPS !== undefined && input.EnforceHTTPS !== null) {
    entries["EnforceHTTPS"] = input.EnforceHTTPS;
  }
  if (input.TLSSecurityPolicy !== undefined && input.TLSSecurityPolicy !== null) {
    entries["TLSSecurityPolicy"] = input.TLSSecurityPolicy;
  }
  return entries;
};

const serializeAws_queryDomainNameList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryDoubleArrayOptions = (input: DoubleArrayOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DefaultValue !== undefined && input.DefaultValue !== null) {
    entries["DefaultValue"] = __serializeFloat(input.DefaultValue);
  }
  if (input.SourceFields !== undefined && input.SourceFields !== null) {
    entries["SourceFields"] = input.SourceFields;
  }
  if (input.FacetEnabled !== undefined && input.FacetEnabled !== null) {
    entries["FacetEnabled"] = input.FacetEnabled;
  }
  if (input.SearchEnabled !== undefined && input.SearchEnabled !== null) {
    entries["SearchEnabled"] = input.SearchEnabled;
  }
  if (input.ReturnEnabled !== undefined && input.ReturnEnabled !== null) {
    entries["ReturnEnabled"] = input.ReturnEnabled;
  }
  return entries;
};

const serializeAws_queryDoubleOptions = (input: DoubleOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DefaultValue !== undefined && input.DefaultValue !== null) {
    entries["DefaultValue"] = __serializeFloat(input.DefaultValue);
  }
  if (input.SourceField !== undefined && input.SourceField !== null) {
    entries["SourceField"] = input.SourceField;
  }
  if (input.FacetEnabled !== undefined && input.FacetEnabled !== null) {
    entries["FacetEnabled"] = input.FacetEnabled;
  }
  if (input.SearchEnabled !== undefined && input.SearchEnabled !== null) {
    entries["SearchEnabled"] = input.SearchEnabled;
  }
  if (input.ReturnEnabled !== undefined && input.ReturnEnabled !== null) {
    entries["ReturnEnabled"] = input.ReturnEnabled;
  }
  if (input.SortEnabled !== undefined && input.SortEnabled !== null) {
    entries["SortEnabled"] = input.SortEnabled;
  }
  return entries;
};

const serializeAws_queryDynamicFieldNameList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryExpression = (input: Expression, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ExpressionName !== undefined && input.ExpressionName !== null) {
    entries["ExpressionName"] = input.ExpressionName;
  }
  if (input.ExpressionValue !== undefined && input.ExpressionValue !== null) {
    entries["ExpressionValue"] = input.ExpressionValue;
  }
  return entries;
};

const serializeAws_queryIndexDocumentsRequest = (input: IndexDocumentsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DomainName !== undefined && input.DomainName !== null) {
    entries["DomainName"] = input.DomainName;
  }
  return entries;
};

const serializeAws_queryIndexField = (input: IndexField, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.IndexFieldName !== undefined && input.IndexFieldName !== null) {
    entries["IndexFieldName"] = input.IndexFieldName;
  }
  if (input.IndexFieldType !== undefined && input.IndexFieldType !== null) {
    entries["IndexFieldType"] = input.IndexFieldType;
  }
  if (input.IntOptions !== undefined && input.IntOptions !== null) {
    const memberEntries = serializeAws_queryIntOptions(input.IntOptions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `IntOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DoubleOptions !== undefined && input.DoubleOptions !== null) {
    const memberEntries = serializeAws_queryDoubleOptions(input.DoubleOptions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DoubleOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.LiteralOptions !== undefined && input.LiteralOptions !== null) {
    const memberEntries = serializeAws_queryLiteralOptions(input.LiteralOptions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LiteralOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TextOptions !== undefined && input.TextOptions !== null) {
    const memberEntries = serializeAws_queryTextOptions(input.TextOptions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TextOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DateOptions !== undefined && input.DateOptions !== null) {
    const memberEntries = serializeAws_queryDateOptions(input.DateOptions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DateOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.LatLonOptions !== undefined && input.LatLonOptions !== null) {
    const memberEntries = serializeAws_queryLatLonOptions(input.LatLonOptions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LatLonOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.IntArrayOptions !== undefined && input.IntArrayOptions !== null) {
    const memberEntries = serializeAws_queryIntArrayOptions(input.IntArrayOptions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `IntArrayOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DoubleArrayOptions !== undefined && input.DoubleArrayOptions !== null) {
    const memberEntries = serializeAws_queryDoubleArrayOptions(input.DoubleArrayOptions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DoubleArrayOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.LiteralArrayOptions !== undefined && input.LiteralArrayOptions !== null) {
    const memberEntries = serializeAws_queryLiteralArrayOptions(input.LiteralArrayOptions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LiteralArrayOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TextArrayOptions !== undefined && input.TextArrayOptions !== null) {
    const memberEntries = serializeAws_queryTextArrayOptions(input.TextArrayOptions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TextArrayOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DateArrayOptions !== undefined && input.DateArrayOptions !== null) {
    const memberEntries = serializeAws_queryDateArrayOptions(input.DateArrayOptions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DateArrayOptions.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryIntArrayOptions = (input: IntArrayOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DefaultValue !== undefined && input.DefaultValue !== null) {
    entries["DefaultValue"] = input.DefaultValue;
  }
  if (input.SourceFields !== undefined && input.SourceFields !== null) {
    entries["SourceFields"] = input.SourceFields;
  }
  if (input.FacetEnabled !== undefined && input.FacetEnabled !== null) {
    entries["FacetEnabled"] = input.FacetEnabled;
  }
  if (input.SearchEnabled !== undefined && input.SearchEnabled !== null) {
    entries["SearchEnabled"] = input.SearchEnabled;
  }
  if (input.ReturnEnabled !== undefined && input.ReturnEnabled !== null) {
    entries["ReturnEnabled"] = input.ReturnEnabled;
  }
  return entries;
};

const serializeAws_queryIntOptions = (input: IntOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DefaultValue !== undefined && input.DefaultValue !== null) {
    entries["DefaultValue"] = input.DefaultValue;
  }
  if (input.SourceField !== undefined && input.SourceField !== null) {
    entries["SourceField"] = input.SourceField;
  }
  if (input.FacetEnabled !== undefined && input.FacetEnabled !== null) {
    entries["FacetEnabled"] = input.FacetEnabled;
  }
  if (input.SearchEnabled !== undefined && input.SearchEnabled !== null) {
    entries["SearchEnabled"] = input.SearchEnabled;
  }
  if (input.ReturnEnabled !== undefined && input.ReturnEnabled !== null) {
    entries["ReturnEnabled"] = input.ReturnEnabled;
  }
  if (input.SortEnabled !== undefined && input.SortEnabled !== null) {
    entries["SortEnabled"] = input.SortEnabled;
  }
  return entries;
};

const serializeAws_queryLatLonOptions = (input: LatLonOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DefaultValue !== undefined && input.DefaultValue !== null) {
    entries["DefaultValue"] = input.DefaultValue;
  }
  if (input.SourceField !== undefined && input.SourceField !== null) {
    entries["SourceField"] = input.SourceField;
  }
  if (input.FacetEnabled !== undefined && input.FacetEnabled !== null) {
    entries["FacetEnabled"] = input.FacetEnabled;
  }
  if (input.SearchEnabled !== undefined && input.SearchEnabled !== null) {
    entries["SearchEnabled"] = input.SearchEnabled;
  }
  if (input.ReturnEnabled !== undefined && input.ReturnEnabled !== null) {
    entries["ReturnEnabled"] = input.ReturnEnabled;
  }
  if (input.SortEnabled !== undefined && input.SortEnabled !== null) {
    entries["SortEnabled"] = input.SortEnabled;
  }
  return entries;
};

const serializeAws_queryLiteralArrayOptions = (input: LiteralArrayOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DefaultValue !== undefined && input.DefaultValue !== null) {
    entries["DefaultValue"] = input.DefaultValue;
  }
  if (input.SourceFields !== undefined && input.SourceFields !== null) {
    entries["SourceFields"] = input.SourceFields;
  }
  if (input.FacetEnabled !== undefined && input.FacetEnabled !== null) {
    entries["FacetEnabled"] = input.FacetEnabled;
  }
  if (input.SearchEnabled !== undefined && input.SearchEnabled !== null) {
    entries["SearchEnabled"] = input.SearchEnabled;
  }
  if (input.ReturnEnabled !== undefined && input.ReturnEnabled !== null) {
    entries["ReturnEnabled"] = input.ReturnEnabled;
  }
  return entries;
};

const serializeAws_queryLiteralOptions = (input: LiteralOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DefaultValue !== undefined && input.DefaultValue !== null) {
    entries["DefaultValue"] = input.DefaultValue;
  }
  if (input.SourceField !== undefined && input.SourceField !== null) {
    entries["SourceField"] = input.SourceField;
  }
  if (input.FacetEnabled !== undefined && input.FacetEnabled !== null) {
    entries["FacetEnabled"] = input.FacetEnabled;
  }
  if (input.SearchEnabled !== undefined && input.SearchEnabled !== null) {
    entries["SearchEnabled"] = input.SearchEnabled;
  }
  if (input.ReturnEnabled !== undefined && input.ReturnEnabled !== null) {
    entries["ReturnEnabled"] = input.ReturnEnabled;
  }
  if (input.SortEnabled !== undefined && input.SortEnabled !== null) {
    entries["SortEnabled"] = input.SortEnabled;
  }
  return entries;
};

const serializeAws_queryScalingParameters = (input: ScalingParameters, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DesiredInstanceType !== undefined && input.DesiredInstanceType !== null) {
    entries["DesiredInstanceType"] = input.DesiredInstanceType;
  }
  if (input.DesiredReplicationCount !== undefined && input.DesiredReplicationCount !== null) {
    entries["DesiredReplicationCount"] = input.DesiredReplicationCount;
  }
  if (input.DesiredPartitionCount !== undefined && input.DesiredPartitionCount !== null) {
    entries["DesiredPartitionCount"] = input.DesiredPartitionCount;
  }
  return entries;
};

const serializeAws_queryStandardNameList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_querySuggester = (input: Suggester, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.SuggesterName !== undefined && input.SuggesterName !== null) {
    entries["SuggesterName"] = input.SuggesterName;
  }
  if (input.DocumentSuggesterOptions !== undefined && input.DocumentSuggesterOptions !== null) {
    const memberEntries = serializeAws_queryDocumentSuggesterOptions(input.DocumentSuggesterOptions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DocumentSuggesterOptions.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryTextArrayOptions = (input: TextArrayOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DefaultValue !== undefined && input.DefaultValue !== null) {
    entries["DefaultValue"] = input.DefaultValue;
  }
  if (input.SourceFields !== undefined && input.SourceFields !== null) {
    entries["SourceFields"] = input.SourceFields;
  }
  if (input.ReturnEnabled !== undefined && input.ReturnEnabled !== null) {
    entries["ReturnEnabled"] = input.ReturnEnabled;
  }
  if (input.HighlightEnabled !== undefined && input.HighlightEnabled !== null) {
    entries["HighlightEnabled"] = input.HighlightEnabled;
  }
  if (input.AnalysisScheme !== undefined && input.AnalysisScheme !== null) {
    entries["AnalysisScheme"] = input.AnalysisScheme;
  }
  return entries;
};

const serializeAws_queryTextOptions = (input: TextOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DefaultValue !== undefined && input.DefaultValue !== null) {
    entries["DefaultValue"] = input.DefaultValue;
  }
  if (input.SourceField !== undefined && input.SourceField !== null) {
    entries["SourceField"] = input.SourceField;
  }
  if (input.ReturnEnabled !== undefined && input.ReturnEnabled !== null) {
    entries["ReturnEnabled"] = input.ReturnEnabled;
  }
  if (input.SortEnabled !== undefined && input.SortEnabled !== null) {
    entries["SortEnabled"] = input.SortEnabled;
  }
  if (input.HighlightEnabled !== undefined && input.HighlightEnabled !== null) {
    entries["HighlightEnabled"] = input.HighlightEnabled;
  }
  if (input.AnalysisScheme !== undefined && input.AnalysisScheme !== null) {
    entries["AnalysisScheme"] = input.AnalysisScheme;
  }
  return entries;
};

const serializeAws_queryUpdateAvailabilityOptionsRequest = (
  input: UpdateAvailabilityOptionsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DomainName !== undefined && input.DomainName !== null) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.MultiAZ !== undefined && input.MultiAZ !== null) {
    entries["MultiAZ"] = input.MultiAZ;
  }
  return entries;
};

const serializeAws_queryUpdateDomainEndpointOptionsRequest = (
  input: UpdateDomainEndpointOptionsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DomainName !== undefined && input.DomainName !== null) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.DomainEndpointOptions !== undefined && input.DomainEndpointOptions !== null) {
    const memberEntries = serializeAws_queryDomainEndpointOptions(input.DomainEndpointOptions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DomainEndpointOptions.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryUpdateScalingParametersRequest = (
  input: UpdateScalingParametersRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DomainName !== undefined && input.DomainName !== null) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.ScalingParameters !== undefined && input.ScalingParameters !== null) {
    const memberEntries = serializeAws_queryScalingParameters(input.ScalingParameters, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ScalingParameters.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryUpdateServiceAccessPoliciesRequest = (
  input: UpdateServiceAccessPoliciesRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DomainName !== undefined && input.DomainName !== null) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.AccessPolicies !== undefined && input.AccessPolicies !== null) {
    entries["AccessPolicies"] = input.AccessPolicies;
  }
  return entries;
};

const deserializeAws_queryAccessPoliciesStatus = (output: any, context: __SerdeContext): AccessPoliciesStatus => {
  let contents: any = {
    Options: undefined,
    Status: undefined,
  };
  if (output["Options"] !== undefined) {
    contents.Options = __expectString(output["Options"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = deserializeAws_queryOptionStatus(output["Status"], context);
  }
  return contents;
};

const deserializeAws_queryAnalysisOptions = (output: any, context: __SerdeContext): AnalysisOptions => {
  let contents: any = {
    Synonyms: undefined,
    Stopwords: undefined,
    StemmingDictionary: undefined,
    JapaneseTokenizationDictionary: undefined,
    AlgorithmicStemming: undefined,
  };
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

const deserializeAws_queryAnalysisScheme = (output: any, context: __SerdeContext): AnalysisScheme => {
  let contents: any = {
    AnalysisSchemeName: undefined,
    AnalysisSchemeLanguage: undefined,
    AnalysisOptions: undefined,
  };
  if (output["AnalysisSchemeName"] !== undefined) {
    contents.AnalysisSchemeName = __expectString(output["AnalysisSchemeName"]);
  }
  if (output["AnalysisSchemeLanguage"] !== undefined) {
    contents.AnalysisSchemeLanguage = __expectString(output["AnalysisSchemeLanguage"]);
  }
  if (output["AnalysisOptions"] !== undefined) {
    contents.AnalysisOptions = deserializeAws_queryAnalysisOptions(output["AnalysisOptions"], context);
  }
  return contents;
};

const deserializeAws_queryAnalysisSchemeStatus = (output: any, context: __SerdeContext): AnalysisSchemeStatus => {
  let contents: any = {
    Options: undefined,
    Status: undefined,
  };
  if (output["Options"] !== undefined) {
    contents.Options = deserializeAws_queryAnalysisScheme(output["Options"], context);
  }
  if (output["Status"] !== undefined) {
    contents.Status = deserializeAws_queryOptionStatus(output["Status"], context);
  }
  return contents;
};

const deserializeAws_queryAnalysisSchemeStatusList = (output: any, context: __SerdeContext): AnalysisSchemeStatus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryAnalysisSchemeStatus(entry, context);
    });
};

const deserializeAws_queryAvailabilityOptionsStatus = (
  output: any,
  context: __SerdeContext
): AvailabilityOptionsStatus => {
  let contents: any = {
    Options: undefined,
    Status: undefined,
  };
  if (output["Options"] !== undefined) {
    contents.Options = __parseBoolean(output["Options"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = deserializeAws_queryOptionStatus(output["Status"], context);
  }
  return contents;
};

const deserializeAws_queryBaseException = (output: any, context: __SerdeContext): BaseException => {
  let contents: any = {
    Code: undefined,
    Message: undefined,
  };
  if (output["Code"] !== undefined) {
    contents.Code = __expectString(output["Code"]);
  }
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryBuildSuggestersResponse = (output: any, context: __SerdeContext): BuildSuggestersResponse => {
  let contents: any = {
    FieldNames: undefined,
  };
  if (output.FieldNames === "") {
    contents.FieldNames = [];
  }
  if (output["FieldNames"] !== undefined && output["FieldNames"]["member"] !== undefined) {
    contents.FieldNames = deserializeAws_queryFieldNameList(
      __getArrayIfSingleItem(output["FieldNames"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryCreateDomainResponse = (output: any, context: __SerdeContext): CreateDomainResponse => {
  let contents: any = {
    DomainStatus: undefined,
  };
  if (output["DomainStatus"] !== undefined) {
    contents.DomainStatus = deserializeAws_queryDomainStatus(output["DomainStatus"], context);
  }
  return contents;
};

const deserializeAws_queryDateArrayOptions = (output: any, context: __SerdeContext): DateArrayOptions => {
  let contents: any = {
    DefaultValue: undefined,
    SourceFields: undefined,
    FacetEnabled: undefined,
    SearchEnabled: undefined,
    ReturnEnabled: undefined,
  };
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

const deserializeAws_queryDateOptions = (output: any, context: __SerdeContext): DateOptions => {
  let contents: any = {
    DefaultValue: undefined,
    SourceField: undefined,
    FacetEnabled: undefined,
    SearchEnabled: undefined,
    ReturnEnabled: undefined,
    SortEnabled: undefined,
  };
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

const deserializeAws_queryDefineAnalysisSchemeResponse = (
  output: any,
  context: __SerdeContext
): DefineAnalysisSchemeResponse => {
  let contents: any = {
    AnalysisScheme: undefined,
  };
  if (output["AnalysisScheme"] !== undefined) {
    contents.AnalysisScheme = deserializeAws_queryAnalysisSchemeStatus(output["AnalysisScheme"], context);
  }
  return contents;
};

const deserializeAws_queryDefineExpressionResponse = (
  output: any,
  context: __SerdeContext
): DefineExpressionResponse => {
  let contents: any = {
    Expression: undefined,
  };
  if (output["Expression"] !== undefined) {
    contents.Expression = deserializeAws_queryExpressionStatus(output["Expression"], context);
  }
  return contents;
};

const deserializeAws_queryDefineIndexFieldResponse = (
  output: any,
  context: __SerdeContext
): DefineIndexFieldResponse => {
  let contents: any = {
    IndexField: undefined,
  };
  if (output["IndexField"] !== undefined) {
    contents.IndexField = deserializeAws_queryIndexFieldStatus(output["IndexField"], context);
  }
  return contents;
};

const deserializeAws_queryDefineSuggesterResponse = (output: any, context: __SerdeContext): DefineSuggesterResponse => {
  let contents: any = {
    Suggester: undefined,
  };
  if (output["Suggester"] !== undefined) {
    contents.Suggester = deserializeAws_querySuggesterStatus(output["Suggester"], context);
  }
  return contents;
};

const deserializeAws_queryDeleteAnalysisSchemeResponse = (
  output: any,
  context: __SerdeContext
): DeleteAnalysisSchemeResponse => {
  let contents: any = {
    AnalysisScheme: undefined,
  };
  if (output["AnalysisScheme"] !== undefined) {
    contents.AnalysisScheme = deserializeAws_queryAnalysisSchemeStatus(output["AnalysisScheme"], context);
  }
  return contents;
};

const deserializeAws_queryDeleteDomainResponse = (output: any, context: __SerdeContext): DeleteDomainResponse => {
  let contents: any = {
    DomainStatus: undefined,
  };
  if (output["DomainStatus"] !== undefined) {
    contents.DomainStatus = deserializeAws_queryDomainStatus(output["DomainStatus"], context);
  }
  return contents;
};

const deserializeAws_queryDeleteExpressionResponse = (
  output: any,
  context: __SerdeContext
): DeleteExpressionResponse => {
  let contents: any = {
    Expression: undefined,
  };
  if (output["Expression"] !== undefined) {
    contents.Expression = deserializeAws_queryExpressionStatus(output["Expression"], context);
  }
  return contents;
};

const deserializeAws_queryDeleteIndexFieldResponse = (
  output: any,
  context: __SerdeContext
): DeleteIndexFieldResponse => {
  let contents: any = {
    IndexField: undefined,
  };
  if (output["IndexField"] !== undefined) {
    contents.IndexField = deserializeAws_queryIndexFieldStatus(output["IndexField"], context);
  }
  return contents;
};

const deserializeAws_queryDeleteSuggesterResponse = (output: any, context: __SerdeContext): DeleteSuggesterResponse => {
  let contents: any = {
    Suggester: undefined,
  };
  if (output["Suggester"] !== undefined) {
    contents.Suggester = deserializeAws_querySuggesterStatus(output["Suggester"], context);
  }
  return contents;
};

const deserializeAws_queryDescribeAnalysisSchemesResponse = (
  output: any,
  context: __SerdeContext
): DescribeAnalysisSchemesResponse => {
  let contents: any = {
    AnalysisSchemes: undefined,
  };
  if (output.AnalysisSchemes === "") {
    contents.AnalysisSchemes = [];
  }
  if (output["AnalysisSchemes"] !== undefined && output["AnalysisSchemes"]["member"] !== undefined) {
    contents.AnalysisSchemes = deserializeAws_queryAnalysisSchemeStatusList(
      __getArrayIfSingleItem(output["AnalysisSchemes"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeAvailabilityOptionsResponse = (
  output: any,
  context: __SerdeContext
): DescribeAvailabilityOptionsResponse => {
  let contents: any = {
    AvailabilityOptions: undefined,
  };
  if (output["AvailabilityOptions"] !== undefined) {
    contents.AvailabilityOptions = deserializeAws_queryAvailabilityOptionsStatus(
      output["AvailabilityOptions"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeDomainEndpointOptionsResponse = (
  output: any,
  context: __SerdeContext
): DescribeDomainEndpointOptionsResponse => {
  let contents: any = {
    DomainEndpointOptions: undefined,
  };
  if (output["DomainEndpointOptions"] !== undefined) {
    contents.DomainEndpointOptions = deserializeAws_queryDomainEndpointOptionsStatus(
      output["DomainEndpointOptions"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeDomainsResponse = (output: any, context: __SerdeContext): DescribeDomainsResponse => {
  let contents: any = {
    DomainStatusList: undefined,
  };
  if (output.DomainStatusList === "") {
    contents.DomainStatusList = [];
  }
  if (output["DomainStatusList"] !== undefined && output["DomainStatusList"]["member"] !== undefined) {
    contents.DomainStatusList = deserializeAws_queryDomainStatusList(
      __getArrayIfSingleItem(output["DomainStatusList"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeExpressionsResponse = (
  output: any,
  context: __SerdeContext
): DescribeExpressionsResponse => {
  let contents: any = {
    Expressions: undefined,
  };
  if (output.Expressions === "") {
    contents.Expressions = [];
  }
  if (output["Expressions"] !== undefined && output["Expressions"]["member"] !== undefined) {
    contents.Expressions = deserializeAws_queryExpressionStatusList(
      __getArrayIfSingleItem(output["Expressions"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeIndexFieldsResponse = (
  output: any,
  context: __SerdeContext
): DescribeIndexFieldsResponse => {
  let contents: any = {
    IndexFields: undefined,
  };
  if (output.IndexFields === "") {
    contents.IndexFields = [];
  }
  if (output["IndexFields"] !== undefined && output["IndexFields"]["member"] !== undefined) {
    contents.IndexFields = deserializeAws_queryIndexFieldStatusList(
      __getArrayIfSingleItem(output["IndexFields"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeScalingParametersResponse = (
  output: any,
  context: __SerdeContext
): DescribeScalingParametersResponse => {
  let contents: any = {
    ScalingParameters: undefined,
  };
  if (output["ScalingParameters"] !== undefined) {
    contents.ScalingParameters = deserializeAws_queryScalingParametersStatus(output["ScalingParameters"], context);
  }
  return contents;
};

const deserializeAws_queryDescribeServiceAccessPoliciesResponse = (
  output: any,
  context: __SerdeContext
): DescribeServiceAccessPoliciesResponse => {
  let contents: any = {
    AccessPolicies: undefined,
  };
  if (output["AccessPolicies"] !== undefined) {
    contents.AccessPolicies = deserializeAws_queryAccessPoliciesStatus(output["AccessPolicies"], context);
  }
  return contents;
};

const deserializeAws_queryDescribeSuggestersResponse = (
  output: any,
  context: __SerdeContext
): DescribeSuggestersResponse => {
  let contents: any = {
    Suggesters: undefined,
  };
  if (output.Suggesters === "") {
    contents.Suggesters = [];
  }
  if (output["Suggesters"] !== undefined && output["Suggesters"]["member"] !== undefined) {
    contents.Suggesters = deserializeAws_querySuggesterStatusList(
      __getArrayIfSingleItem(output["Suggesters"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDisabledOperationException = (
  output: any,
  context: __SerdeContext
): DisabledOperationException => {
  let contents: any = {
    Code: undefined,
    Message: undefined,
  };
  if (output["Code"] !== undefined) {
    contents.Code = __expectString(output["Code"]);
  }
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryDocumentSuggesterOptions = (
  output: any,
  context: __SerdeContext
): DocumentSuggesterOptions => {
  let contents: any = {
    SourceField: undefined,
    FuzzyMatching: undefined,
    SortExpression: undefined,
  };
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

const deserializeAws_queryDomainEndpointOptions = (output: any, context: __SerdeContext): DomainEndpointOptions => {
  let contents: any = {
    EnforceHTTPS: undefined,
    TLSSecurityPolicy: undefined,
  };
  if (output["EnforceHTTPS"] !== undefined) {
    contents.EnforceHTTPS = __parseBoolean(output["EnforceHTTPS"]);
  }
  if (output["TLSSecurityPolicy"] !== undefined) {
    contents.TLSSecurityPolicy = __expectString(output["TLSSecurityPolicy"]);
  }
  return contents;
};

const deserializeAws_queryDomainEndpointOptionsStatus = (
  output: any,
  context: __SerdeContext
): DomainEndpointOptionsStatus => {
  let contents: any = {
    Options: undefined,
    Status: undefined,
  };
  if (output["Options"] !== undefined) {
    contents.Options = deserializeAws_queryDomainEndpointOptions(output["Options"], context);
  }
  if (output["Status"] !== undefined) {
    contents.Status = deserializeAws_queryOptionStatus(output["Status"], context);
  }
  return contents;
};

const deserializeAws_queryDomainNameMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    return {
      ...acc,
      [pair["key"]]: __expectString(pair["value"]) as any,
    };
  }, {});
};

const deserializeAws_queryDomainStatus = (output: any, context: __SerdeContext): DomainStatus => {
  let contents: any = {
    DomainId: undefined,
    DomainName: undefined,
    ARN: undefined,
    Created: undefined,
    Deleted: undefined,
    DocService: undefined,
    SearchService: undefined,
    RequiresIndexDocuments: undefined,
    Processing: undefined,
    SearchInstanceType: undefined,
    SearchPartitionCount: undefined,
    SearchInstanceCount: undefined,
    Limits: undefined,
  };
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
    contents.DocService = deserializeAws_queryServiceEndpoint(output["DocService"], context);
  }
  if (output["SearchService"] !== undefined) {
    contents.SearchService = deserializeAws_queryServiceEndpoint(output["SearchService"], context);
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
    contents.Limits = deserializeAws_queryLimits(output["Limits"], context);
  }
  return contents;
};

const deserializeAws_queryDomainStatusList = (output: any, context: __SerdeContext): DomainStatus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryDomainStatus(entry, context);
    });
};

const deserializeAws_queryDoubleArrayOptions = (output: any, context: __SerdeContext): DoubleArrayOptions => {
  let contents: any = {
    DefaultValue: undefined,
    SourceFields: undefined,
    FacetEnabled: undefined,
    SearchEnabled: undefined,
    ReturnEnabled: undefined,
  };
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

const deserializeAws_queryDoubleOptions = (output: any, context: __SerdeContext): DoubleOptions => {
  let contents: any = {
    DefaultValue: undefined,
    SourceField: undefined,
    FacetEnabled: undefined,
    SearchEnabled: undefined,
    ReturnEnabled: undefined,
    SortEnabled: undefined,
  };
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

const deserializeAws_queryExpression = (output: any, context: __SerdeContext): Expression => {
  let contents: any = {
    ExpressionName: undefined,
    ExpressionValue: undefined,
  };
  if (output["ExpressionName"] !== undefined) {
    contents.ExpressionName = __expectString(output["ExpressionName"]);
  }
  if (output["ExpressionValue"] !== undefined) {
    contents.ExpressionValue = __expectString(output["ExpressionValue"]);
  }
  return contents;
};

const deserializeAws_queryExpressionStatus = (output: any, context: __SerdeContext): ExpressionStatus => {
  let contents: any = {
    Options: undefined,
    Status: undefined,
  };
  if (output["Options"] !== undefined) {
    contents.Options = deserializeAws_queryExpression(output["Options"], context);
  }
  if (output["Status"] !== undefined) {
    contents.Status = deserializeAws_queryOptionStatus(output["Status"], context);
  }
  return contents;
};

const deserializeAws_queryExpressionStatusList = (output: any, context: __SerdeContext): ExpressionStatus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryExpressionStatus(entry, context);
    });
};

const deserializeAws_queryFieldNameList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryIndexDocumentsResponse = (output: any, context: __SerdeContext): IndexDocumentsResponse => {
  let contents: any = {
    FieldNames: undefined,
  };
  if (output.FieldNames === "") {
    contents.FieldNames = [];
  }
  if (output["FieldNames"] !== undefined && output["FieldNames"]["member"] !== undefined) {
    contents.FieldNames = deserializeAws_queryFieldNameList(
      __getArrayIfSingleItem(output["FieldNames"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryIndexField = (output: any, context: __SerdeContext): IndexField => {
  let contents: any = {
    IndexFieldName: undefined,
    IndexFieldType: undefined,
    IntOptions: undefined,
    DoubleOptions: undefined,
    LiteralOptions: undefined,
    TextOptions: undefined,
    DateOptions: undefined,
    LatLonOptions: undefined,
    IntArrayOptions: undefined,
    DoubleArrayOptions: undefined,
    LiteralArrayOptions: undefined,
    TextArrayOptions: undefined,
    DateArrayOptions: undefined,
  };
  if (output["IndexFieldName"] !== undefined) {
    contents.IndexFieldName = __expectString(output["IndexFieldName"]);
  }
  if (output["IndexFieldType"] !== undefined) {
    contents.IndexFieldType = __expectString(output["IndexFieldType"]);
  }
  if (output["IntOptions"] !== undefined) {
    contents.IntOptions = deserializeAws_queryIntOptions(output["IntOptions"], context);
  }
  if (output["DoubleOptions"] !== undefined) {
    contents.DoubleOptions = deserializeAws_queryDoubleOptions(output["DoubleOptions"], context);
  }
  if (output["LiteralOptions"] !== undefined) {
    contents.LiteralOptions = deserializeAws_queryLiteralOptions(output["LiteralOptions"], context);
  }
  if (output["TextOptions"] !== undefined) {
    contents.TextOptions = deserializeAws_queryTextOptions(output["TextOptions"], context);
  }
  if (output["DateOptions"] !== undefined) {
    contents.DateOptions = deserializeAws_queryDateOptions(output["DateOptions"], context);
  }
  if (output["LatLonOptions"] !== undefined) {
    contents.LatLonOptions = deserializeAws_queryLatLonOptions(output["LatLonOptions"], context);
  }
  if (output["IntArrayOptions"] !== undefined) {
    contents.IntArrayOptions = deserializeAws_queryIntArrayOptions(output["IntArrayOptions"], context);
  }
  if (output["DoubleArrayOptions"] !== undefined) {
    contents.DoubleArrayOptions = deserializeAws_queryDoubleArrayOptions(output["DoubleArrayOptions"], context);
  }
  if (output["LiteralArrayOptions"] !== undefined) {
    contents.LiteralArrayOptions = deserializeAws_queryLiteralArrayOptions(output["LiteralArrayOptions"], context);
  }
  if (output["TextArrayOptions"] !== undefined) {
    contents.TextArrayOptions = deserializeAws_queryTextArrayOptions(output["TextArrayOptions"], context);
  }
  if (output["DateArrayOptions"] !== undefined) {
    contents.DateArrayOptions = deserializeAws_queryDateArrayOptions(output["DateArrayOptions"], context);
  }
  return contents;
};

const deserializeAws_queryIndexFieldStatus = (output: any, context: __SerdeContext): IndexFieldStatus => {
  let contents: any = {
    Options: undefined,
    Status: undefined,
  };
  if (output["Options"] !== undefined) {
    contents.Options = deserializeAws_queryIndexField(output["Options"], context);
  }
  if (output["Status"] !== undefined) {
    contents.Status = deserializeAws_queryOptionStatus(output["Status"], context);
  }
  return contents;
};

const deserializeAws_queryIndexFieldStatusList = (output: any, context: __SerdeContext): IndexFieldStatus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryIndexFieldStatus(entry, context);
    });
};

const deserializeAws_queryIntArrayOptions = (output: any, context: __SerdeContext): IntArrayOptions => {
  let contents: any = {
    DefaultValue: undefined,
    SourceFields: undefined,
    FacetEnabled: undefined,
    SearchEnabled: undefined,
    ReturnEnabled: undefined,
  };
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

const deserializeAws_queryInternalException = (output: any, context: __SerdeContext): InternalException => {
  let contents: any = {
    Code: undefined,
    Message: undefined,
  };
  if (output["Code"] !== undefined) {
    contents.Code = __expectString(output["Code"]);
  }
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryIntOptions = (output: any, context: __SerdeContext): IntOptions => {
  let contents: any = {
    DefaultValue: undefined,
    SourceField: undefined,
    FacetEnabled: undefined,
    SearchEnabled: undefined,
    ReturnEnabled: undefined,
    SortEnabled: undefined,
  };
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

const deserializeAws_queryInvalidTypeException = (output: any, context: __SerdeContext): InvalidTypeException => {
  let contents: any = {
    Code: undefined,
    Message: undefined,
  };
  if (output["Code"] !== undefined) {
    contents.Code = __expectString(output["Code"]);
  }
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryLatLonOptions = (output: any, context: __SerdeContext): LatLonOptions => {
  let contents: any = {
    DefaultValue: undefined,
    SourceField: undefined,
    FacetEnabled: undefined,
    SearchEnabled: undefined,
    ReturnEnabled: undefined,
    SortEnabled: undefined,
  };
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

const deserializeAws_queryLimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  let contents: any = {
    Code: undefined,
    Message: undefined,
  };
  if (output["Code"] !== undefined) {
    contents.Code = __expectString(output["Code"]);
  }
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryLimits = (output: any, context: __SerdeContext): Limits => {
  let contents: any = {
    MaximumReplicationCount: undefined,
    MaximumPartitionCount: undefined,
  };
  if (output["MaximumReplicationCount"] !== undefined) {
    contents.MaximumReplicationCount = __strictParseInt32(output["MaximumReplicationCount"]) as number;
  }
  if (output["MaximumPartitionCount"] !== undefined) {
    contents.MaximumPartitionCount = __strictParseInt32(output["MaximumPartitionCount"]) as number;
  }
  return contents;
};

const deserializeAws_queryListDomainNamesResponse = (output: any, context: __SerdeContext): ListDomainNamesResponse => {
  let contents: any = {
    DomainNames: undefined,
  };
  if (output.DomainNames === "") {
    contents.DomainNames = {};
  }
  if (output["DomainNames"] !== undefined && output["DomainNames"]["entry"] !== undefined) {
    contents.DomainNames = deserializeAws_queryDomainNameMap(
      __getArrayIfSingleItem(output["DomainNames"]["entry"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryLiteralArrayOptions = (output: any, context: __SerdeContext): LiteralArrayOptions => {
  let contents: any = {
    DefaultValue: undefined,
    SourceFields: undefined,
    FacetEnabled: undefined,
    SearchEnabled: undefined,
    ReturnEnabled: undefined,
  };
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

const deserializeAws_queryLiteralOptions = (output: any, context: __SerdeContext): LiteralOptions => {
  let contents: any = {
    DefaultValue: undefined,
    SourceField: undefined,
    FacetEnabled: undefined,
    SearchEnabled: undefined,
    ReturnEnabled: undefined,
    SortEnabled: undefined,
  };
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

const deserializeAws_queryOptionStatus = (output: any, context: __SerdeContext): OptionStatus => {
  let contents: any = {
    CreationDate: undefined,
    UpdateDate: undefined,
    UpdateVersion: undefined,
    State: undefined,
    PendingDeletion: undefined,
  };
  if (output["CreationDate"] !== undefined) {
    contents.CreationDate = __expectNonNull(__parseRfc3339DateTime(output["CreationDate"]));
  }
  if (output["UpdateDate"] !== undefined) {
    contents.UpdateDate = __expectNonNull(__parseRfc3339DateTime(output["UpdateDate"]));
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

const deserializeAws_queryResourceAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ResourceAlreadyExistsException => {
  let contents: any = {
    Code: undefined,
    Message: undefined,
  };
  if (output["Code"] !== undefined) {
    contents.Code = __expectString(output["Code"]);
  }
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    Code: undefined,
    Message: undefined,
  };
  if (output["Code"] !== undefined) {
    contents.Code = __expectString(output["Code"]);
  }
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryScalingParameters = (output: any, context: __SerdeContext): ScalingParameters => {
  let contents: any = {
    DesiredInstanceType: undefined,
    DesiredReplicationCount: undefined,
    DesiredPartitionCount: undefined,
  };
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

const deserializeAws_queryScalingParametersStatus = (output: any, context: __SerdeContext): ScalingParametersStatus => {
  let contents: any = {
    Options: undefined,
    Status: undefined,
  };
  if (output["Options"] !== undefined) {
    contents.Options = deserializeAws_queryScalingParameters(output["Options"], context);
  }
  if (output["Status"] !== undefined) {
    contents.Status = deserializeAws_queryOptionStatus(output["Status"], context);
  }
  return contents;
};

const deserializeAws_queryServiceEndpoint = (output: any, context: __SerdeContext): ServiceEndpoint => {
  let contents: any = {
    Endpoint: undefined,
  };
  if (output["Endpoint"] !== undefined) {
    contents.Endpoint = __expectString(output["Endpoint"]);
  }
  return contents;
};

const deserializeAws_querySuggester = (output: any, context: __SerdeContext): Suggester => {
  let contents: any = {
    SuggesterName: undefined,
    DocumentSuggesterOptions: undefined,
  };
  if (output["SuggesterName"] !== undefined) {
    contents.SuggesterName = __expectString(output["SuggesterName"]);
  }
  if (output["DocumentSuggesterOptions"] !== undefined) {
    contents.DocumentSuggesterOptions = deserializeAws_queryDocumentSuggesterOptions(
      output["DocumentSuggesterOptions"],
      context
    );
  }
  return contents;
};

const deserializeAws_querySuggesterStatus = (output: any, context: __SerdeContext): SuggesterStatus => {
  let contents: any = {
    Options: undefined,
    Status: undefined,
  };
  if (output["Options"] !== undefined) {
    contents.Options = deserializeAws_querySuggester(output["Options"], context);
  }
  if (output["Status"] !== undefined) {
    contents.Status = deserializeAws_queryOptionStatus(output["Status"], context);
  }
  return contents;
};

const deserializeAws_querySuggesterStatusList = (output: any, context: __SerdeContext): SuggesterStatus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_querySuggesterStatus(entry, context);
    });
};

const deserializeAws_queryTextArrayOptions = (output: any, context: __SerdeContext): TextArrayOptions => {
  let contents: any = {
    DefaultValue: undefined,
    SourceFields: undefined,
    ReturnEnabled: undefined,
    HighlightEnabled: undefined,
    AnalysisScheme: undefined,
  };
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

const deserializeAws_queryTextOptions = (output: any, context: __SerdeContext): TextOptions => {
  let contents: any = {
    DefaultValue: undefined,
    SourceField: undefined,
    ReturnEnabled: undefined,
    SortEnabled: undefined,
    HighlightEnabled: undefined,
    AnalysisScheme: undefined,
  };
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

const deserializeAws_queryUpdateAvailabilityOptionsResponse = (
  output: any,
  context: __SerdeContext
): UpdateAvailabilityOptionsResponse => {
  let contents: any = {
    AvailabilityOptions: undefined,
  };
  if (output["AvailabilityOptions"] !== undefined) {
    contents.AvailabilityOptions = deserializeAws_queryAvailabilityOptionsStatus(
      output["AvailabilityOptions"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryUpdateDomainEndpointOptionsResponse = (
  output: any,
  context: __SerdeContext
): UpdateDomainEndpointOptionsResponse => {
  let contents: any = {
    DomainEndpointOptions: undefined,
  };
  if (output["DomainEndpointOptions"] !== undefined) {
    contents.DomainEndpointOptions = deserializeAws_queryDomainEndpointOptionsStatus(
      output["DomainEndpointOptions"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryUpdateScalingParametersResponse = (
  output: any,
  context: __SerdeContext
): UpdateScalingParametersResponse => {
  let contents: any = {
    ScalingParameters: undefined,
  };
  if (output["ScalingParameters"] !== undefined) {
    contents.ScalingParameters = deserializeAws_queryScalingParametersStatus(output["ScalingParameters"], context);
  }
  return contents;
};

const deserializeAws_queryUpdateServiceAccessPoliciesResponse = (
  output: any,
  context: __SerdeContext
): UpdateServiceAccessPoliciesResponse => {
  let contents: any = {
    AccessPolicies: undefined,
  };
  if (output["AccessPolicies"] !== undefined) {
    contents.AccessPolicies = deserializeAws_queryAccessPoliciesStatus(output["AccessPolicies"], context);
  }
  return contents;
};

const deserializeAws_queryValidationException = (output: any, context: __SerdeContext): ValidationException => {
  let contents: any = {
    Code: undefined,
    Message: undefined,
  };
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
      const parsedObj = xmlParse(encoded, {
        attributeNamePrefix: "",
        ignoreAttributes: false,
        parseNodeValue: false,
        trimValues: false,
        tagValueProcessor: (val) => (val.trim() === "" && val.includes("\n") ? "" : decodeHTML(val)),
      });
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

const buildFormUrlencodedString = (formEntries: { [key: string]: string }): string =>
  Object.entries(formEntries)
    .map(([key, value]) => __extendedEncodeURIComponent(key) + "=" + __extendedEncodeURIComponent(value))
    .join("&");

const loadQueryErrorCode = (output: __HttpResponse, data: any): string => {
  if (data.Error.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
  return "";
};
