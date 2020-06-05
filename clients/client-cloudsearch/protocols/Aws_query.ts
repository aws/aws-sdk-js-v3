import {
  BuildSuggestersCommandInput,
  BuildSuggestersCommandOutput
} from "../commands/BuildSuggestersCommand";
import {
  CreateDomainCommandInput,
  CreateDomainCommandOutput
} from "../commands/CreateDomainCommand";
import {
  DefineAnalysisSchemeCommandInput,
  DefineAnalysisSchemeCommandOutput
} from "../commands/DefineAnalysisSchemeCommand";
import {
  DefineExpressionCommandInput,
  DefineExpressionCommandOutput
} from "../commands/DefineExpressionCommand";
import {
  DefineIndexFieldCommandInput,
  DefineIndexFieldCommandOutput
} from "../commands/DefineIndexFieldCommand";
import {
  DefineSuggesterCommandInput,
  DefineSuggesterCommandOutput
} from "../commands/DefineSuggesterCommand";
import {
  DeleteAnalysisSchemeCommandInput,
  DeleteAnalysisSchemeCommandOutput
} from "../commands/DeleteAnalysisSchemeCommand";
import {
  DeleteDomainCommandInput,
  DeleteDomainCommandOutput
} from "../commands/DeleteDomainCommand";
import {
  DeleteExpressionCommandInput,
  DeleteExpressionCommandOutput
} from "../commands/DeleteExpressionCommand";
import {
  DeleteIndexFieldCommandInput,
  DeleteIndexFieldCommandOutput
} from "../commands/DeleteIndexFieldCommand";
import {
  DeleteSuggesterCommandInput,
  DeleteSuggesterCommandOutput
} from "../commands/DeleteSuggesterCommand";
import {
  DescribeAnalysisSchemesCommandInput,
  DescribeAnalysisSchemesCommandOutput
} from "../commands/DescribeAnalysisSchemesCommand";
import {
  DescribeAvailabilityOptionsCommandInput,
  DescribeAvailabilityOptionsCommandOutput
} from "../commands/DescribeAvailabilityOptionsCommand";
import {
  DescribeDomainEndpointOptionsCommandInput,
  DescribeDomainEndpointOptionsCommandOutput
} from "../commands/DescribeDomainEndpointOptionsCommand";
import {
  DescribeDomainsCommandInput,
  DescribeDomainsCommandOutput
} from "../commands/DescribeDomainsCommand";
import {
  DescribeExpressionsCommandInput,
  DescribeExpressionsCommandOutput
} from "../commands/DescribeExpressionsCommand";
import {
  DescribeIndexFieldsCommandInput,
  DescribeIndexFieldsCommandOutput
} from "../commands/DescribeIndexFieldsCommand";
import {
  DescribeScalingParametersCommandInput,
  DescribeScalingParametersCommandOutput
} from "../commands/DescribeScalingParametersCommand";
import {
  DescribeServiceAccessPoliciesCommandInput,
  DescribeServiceAccessPoliciesCommandOutput
} from "../commands/DescribeServiceAccessPoliciesCommand";
import {
  DescribeSuggestersCommandInput,
  DescribeSuggestersCommandOutput
} from "../commands/DescribeSuggestersCommand";
import {
  IndexDocumentsCommandInput,
  IndexDocumentsCommandOutput
} from "../commands/IndexDocumentsCommand";
import {
  ListDomainNamesCommandInput,
  ListDomainNamesCommandOutput
} from "../commands/ListDomainNamesCommand";
import {
  UpdateAvailabilityOptionsCommandInput,
  UpdateAvailabilityOptionsCommandOutput
} from "../commands/UpdateAvailabilityOptionsCommand";
import {
  UpdateDomainEndpointOptionsCommandInput,
  UpdateDomainEndpointOptionsCommandOutput
} from "../commands/UpdateDomainEndpointOptionsCommand";
import {
  UpdateScalingParametersCommandInput,
  UpdateScalingParametersCommandOutput
} from "../commands/UpdateScalingParametersCommand";
import {
  UpdateServiceAccessPoliciesCommandInput,
  UpdateServiceAccessPoliciesCommandOutput
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
  ValidationException
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";
import { parse as xmlParse } from "fast-xml-parser";

export const serializeAws_queryBuildSuggestersCommand = async (
  input: BuildSuggestersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryBuildSuggestersRequest(input, context),
    Action: "BuildSuggesters",
    Version: "2013-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateDomainCommand = async (
  input: CreateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateDomainRequest(input, context),
    Action: "CreateDomain",
    Version: "2013-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDefineAnalysisSchemeCommand = async (
  input: DefineAnalysisSchemeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDefineAnalysisSchemeRequest(input, context),
    Action: "DefineAnalysisScheme",
    Version: "2013-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDefineExpressionCommand = async (
  input: DefineExpressionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDefineExpressionRequest(input, context),
    Action: "DefineExpression",
    Version: "2013-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDefineIndexFieldCommand = async (
  input: DefineIndexFieldCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDefineIndexFieldRequest(input, context),
    Action: "DefineIndexField",
    Version: "2013-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDefineSuggesterCommand = async (
  input: DefineSuggesterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDefineSuggesterRequest(input, context),
    Action: "DefineSuggester",
    Version: "2013-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteAnalysisSchemeCommand = async (
  input: DeleteAnalysisSchemeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteAnalysisSchemeRequest(input, context),
    Action: "DeleteAnalysisScheme",
    Version: "2013-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteDomainCommand = async (
  input: DeleteDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteDomainRequest(input, context),
    Action: "DeleteDomain",
    Version: "2013-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteExpressionCommand = async (
  input: DeleteExpressionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteExpressionRequest(input, context),
    Action: "DeleteExpression",
    Version: "2013-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteIndexFieldCommand = async (
  input: DeleteIndexFieldCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteIndexFieldRequest(input, context),
    Action: "DeleteIndexField",
    Version: "2013-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteSuggesterCommand = async (
  input: DeleteSuggesterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteSuggesterRequest(input, context),
    Action: "DeleteSuggester",
    Version: "2013-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeAnalysisSchemesCommand = async (
  input: DescribeAnalysisSchemesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeAnalysisSchemesRequest(input, context),
    Action: "DescribeAnalysisSchemes",
    Version: "2013-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeAvailabilityOptionsCommand = async (
  input: DescribeAvailabilityOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeAvailabilityOptionsRequest(input, context),
    Action: "DescribeAvailabilityOptions",
    Version: "2013-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeDomainEndpointOptionsCommand = async (
  input: DescribeDomainEndpointOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeDomainEndpointOptionsRequest(input, context),
    Action: "DescribeDomainEndpointOptions",
    Version: "2013-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeDomainsCommand = async (
  input: DescribeDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeDomainsRequest(input, context),
    Action: "DescribeDomains",
    Version: "2013-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeExpressionsCommand = async (
  input: DescribeExpressionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeExpressionsRequest(input, context),
    Action: "DescribeExpressions",
    Version: "2013-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeIndexFieldsCommand = async (
  input: DescribeIndexFieldsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeIndexFieldsRequest(input, context),
    Action: "DescribeIndexFields",
    Version: "2013-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeScalingParametersCommand = async (
  input: DescribeScalingParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeScalingParametersRequest(input, context),
    Action: "DescribeScalingParameters",
    Version: "2013-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeServiceAccessPoliciesCommand = async (
  input: DescribeServiceAccessPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeServiceAccessPoliciesRequest(input, context),
    Action: "DescribeServiceAccessPolicies",
    Version: "2013-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeSuggestersCommand = async (
  input: DescribeSuggestersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeSuggestersRequest(input, context),
    Action: "DescribeSuggesters",
    Version: "2013-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryIndexDocumentsCommand = async (
  input: IndexDocumentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryIndexDocumentsRequest(input, context),
    Action: "IndexDocuments",
    Version: "2013-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListDomainNamesCommand = async (
  input: ListDomainNamesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  const body = buildFormUrlencodedString({
    Action: "ListDomainNames",
    Version: "2013-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateAvailabilityOptionsCommand = async (
  input: UpdateAvailabilityOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateAvailabilityOptionsRequest(input, context),
    Action: "UpdateAvailabilityOptions",
    Version: "2013-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateDomainEndpointOptionsCommand = async (
  input: UpdateDomainEndpointOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateDomainEndpointOptionsRequest(input, context),
    Action: "UpdateDomainEndpointOptions",
    Version: "2013-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateScalingParametersCommand = async (
  input: UpdateScalingParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateScalingParametersRequest(input, context),
    Action: "UpdateScalingParameters",
    Version: "2013-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateServiceAccessPoliciesCommand = async (
  input: UpdateServiceAccessPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateServiceAccessPoliciesRequest(input, context),
    Action: "UpdateServiceAccessPolicies",
    Version: "2013-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_queryBuildSuggestersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BuildSuggestersCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryBuildSuggestersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryBuildSuggestersResponse(
    data.BuildSuggestersResult,
    context
  );
  const response: BuildSuggestersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BuildSuggestersResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryBuildSuggestersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BuildSuggestersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateDomainResponse(
    data.CreateDomainResult,
    context
  );
  const response: CreateDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDomainResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudsearch#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryDefineAnalysisSchemeCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDefineAnalysisSchemeResponse(
    data.DefineAnalysisSchemeResult,
    context
  );
  const response: DefineAnalysisSchemeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DefineAnalysisSchemeResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDefineAnalysisSchemeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DefineAnalysisSchemeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTypeException":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      response = {
        ...(await deserializeAws_queryInvalidTypeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudsearch#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryDefineExpressionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDefineExpressionResponse(
    data.DefineExpressionResult,
    context
  );
  const response: DefineExpressionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DefineExpressionResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDefineExpressionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DefineExpressionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTypeException":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      response = {
        ...(await deserializeAws_queryInvalidTypeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudsearch#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryDefineIndexFieldCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDefineIndexFieldResponse(
    data.DefineIndexFieldResult,
    context
  );
  const response: DefineIndexFieldCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DefineIndexFieldResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDefineIndexFieldCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DefineIndexFieldCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTypeException":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      response = {
        ...(await deserializeAws_queryInvalidTypeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudsearch#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryDefineSuggesterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDefineSuggesterResponse(
    data.DefineSuggesterResult,
    context
  );
  const response: DefineSuggesterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DefineSuggesterResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDefineSuggesterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DefineSuggesterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTypeException":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      response = {
        ...(await deserializeAws_queryInvalidTypeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudsearch#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteAnalysisSchemeCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteAnalysisSchemeResponse(
    data.DeleteAnalysisSchemeResult,
    context
  );
  const response: DeleteAnalysisSchemeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteAnalysisSchemeResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteAnalysisSchemeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnalysisSchemeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTypeException":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      response = {
        ...(await deserializeAws_queryInvalidTypeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteDomainResponse(
    data.DeleteDomainResult,
    context
  );
  const response: DeleteDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDomainResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteExpressionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteExpressionResponse(
    data.DeleteExpressionResult,
    context
  );
  const response: DeleteExpressionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteExpressionResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteExpressionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExpressionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTypeException":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      response = {
        ...(await deserializeAws_queryInvalidTypeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteIndexFieldCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteIndexFieldResponse(
    data.DeleteIndexFieldResult,
    context
  );
  const response: DeleteIndexFieldCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteIndexFieldResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteIndexFieldCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIndexFieldCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTypeException":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      response = {
        ...(await deserializeAws_queryInvalidTypeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteSuggesterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteSuggesterResponse(
    data.DeleteSuggesterResult,
    context
  );
  const response: DeleteSuggesterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteSuggesterResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteSuggesterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSuggesterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTypeException":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      response = {
        ...(await deserializeAws_queryInvalidTypeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeAnalysisSchemesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeAnalysisSchemesResponse(
    data.DescribeAnalysisSchemesResult,
    context
  );
  const response: DescribeAnalysisSchemesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeAnalysisSchemesResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeAnalysisSchemesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAnalysisSchemesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeAvailabilityOptionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeAvailabilityOptionsResponse(
    data.DescribeAvailabilityOptionsResult,
    context
  );
  const response: DescribeAvailabilityOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeAvailabilityOptionsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeAvailabilityOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAvailabilityOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DisabledOperationException":
    case "com.amazonaws.cloudsearch#DisabledOperationException":
      response = {
        ...(await deserializeAws_queryDisabledOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTypeException":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      response = {
        ...(await deserializeAws_queryInvalidTypeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudsearch#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeDomainEndpointOptionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeDomainEndpointOptionsResponse(
    data.DescribeDomainEndpointOptionsResult,
    context
  );
  const response: DescribeDomainEndpointOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDomainEndpointOptionsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeDomainEndpointOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainEndpointOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DisabledOperationException":
    case "com.amazonaws.cloudsearch#DisabledOperationException":
      response = {
        ...(await deserializeAws_queryDisabledOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudsearch#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeDomainsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeDomainsResponse(
    data.DescribeDomainsResult,
    context
  );
  const response: DescribeDomainsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDomainsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeDomainsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeExpressionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeExpressionsResponse(
    data.DescribeExpressionsResult,
    context
  );
  const response: DescribeExpressionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeExpressionsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeExpressionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExpressionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeIndexFieldsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeIndexFieldsResponse(
    data.DescribeIndexFieldsResult,
    context
  );
  const response: DescribeIndexFieldsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeIndexFieldsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeIndexFieldsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIndexFieldsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeScalingParametersCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeScalingParametersResponse(
    data.DescribeScalingParametersResult,
    context
  );
  const response: DescribeScalingParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeScalingParametersResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeScalingParametersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingParametersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeServiceAccessPoliciesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeServiceAccessPoliciesResponse(
    data.DescribeServiceAccessPoliciesResult,
    context
  );
  const response: DescribeServiceAccessPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeServiceAccessPoliciesResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeServiceAccessPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServiceAccessPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeSuggestersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeSuggestersResponse(
    data.DescribeSuggestersResult,
    context
  );
  const response: DescribeSuggestersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeSuggestersResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeSuggestersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSuggestersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryIndexDocumentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryIndexDocumentsResponse(
    data.IndexDocumentsResult,
    context
  );
  const response: IndexDocumentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "IndexDocumentsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryIndexDocumentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IndexDocumentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryListDomainNamesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListDomainNamesResponse(
    data.ListDomainNamesResult,
    context
  );
  const response: ListDomainNamesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDomainNamesResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListDomainNamesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainNamesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryUpdateAvailabilityOptionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUpdateAvailabilityOptionsResponse(
    data.UpdateAvailabilityOptionsResult,
    context
  );
  const response: UpdateAvailabilityOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateAvailabilityOptionsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateAvailabilityOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAvailabilityOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DisabledOperationException":
    case "com.amazonaws.cloudsearch#DisabledOperationException":
      response = {
        ...(await deserializeAws_queryDisabledOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTypeException":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      response = {
        ...(await deserializeAws_queryInvalidTypeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudsearch#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.cloudsearch#ValidationException":
      response = {
        ...(await deserializeAws_queryValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryUpdateDomainEndpointOptionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUpdateDomainEndpointOptionsResponse(
    data.UpdateDomainEndpointOptionsResult,
    context
  );
  const response: UpdateDomainEndpointOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateDomainEndpointOptionsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateDomainEndpointOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainEndpointOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DisabledOperationException":
    case "com.amazonaws.cloudsearch#DisabledOperationException":
      response = {
        ...(await deserializeAws_queryDisabledOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTypeException":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      response = {
        ...(await deserializeAws_queryInvalidTypeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudsearch#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.cloudsearch#ValidationException":
      response = {
        ...(await deserializeAws_queryValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryUpdateScalingParametersCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUpdateScalingParametersResponse(
    data.UpdateScalingParametersResult,
    context
  );
  const response: UpdateScalingParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateScalingParametersResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateScalingParametersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateScalingParametersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTypeException":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      response = {
        ...(await deserializeAws_queryInvalidTypeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudsearch#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryUpdateServiceAccessPoliciesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUpdateServiceAccessPoliciesResponse(
    data.UpdateServiceAccessPoliciesResult,
    context
  );
  const response: UpdateServiceAccessPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateServiceAccessPoliciesResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateServiceAccessPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceAccessPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.cloudsearch#BaseException":
      response = {
        ...(await deserializeAws_queryBaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudsearch#InternalException":
      response = {
        ...(await deserializeAws_queryInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTypeException":
    case "com.amazonaws.cloudsearch#InvalidTypeException":
      response = {
        ...(await deserializeAws_queryInvalidTypeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudsearch#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudsearch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  const deserialized: any = deserializeAws_queryBaseException(
    body.Error,
    context
  );
  const contents: BaseException = {
    name: "BaseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryDisabledOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DisabledOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDisabledOperationException(
    body.Error,
    context
  );
  const contents: DisabledOperationException = {
    name: "DisabledOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInternalExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInternalException(
    body.Error,
    context
  );
  const contents: InternalException = {
    name: "InternalException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidTypeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTypeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidTypeException(
    body.Error,
    context
  );
  const contents: InvalidTypeException = {
    name: "InvalidTypeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryLimitExceededException(
    body.Error,
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

const deserializeAws_queryResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryResourceNotFoundException(
    body.Error,
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

const deserializeAws_queryValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryValidationException(
    body.Error,
    context
  );
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_queryAnalysisOptions = (
  input: AnalysisOptions,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AlgorithmicStemming !== undefined) {
    entries["AlgorithmicStemming"] = input.AlgorithmicStemming;
  }
  if (input.JapaneseTokenizationDictionary !== undefined) {
    entries["JapaneseTokenizationDictionary"] =
      input.JapaneseTokenizationDictionary;
  }
  if (input.StemmingDictionary !== undefined) {
    entries["StemmingDictionary"] = input.StemmingDictionary;
  }
  if (input.Stopwords !== undefined) {
    entries["Stopwords"] = input.Stopwords;
  }
  if (input.Synonyms !== undefined) {
    entries["Synonyms"] = input.Synonyms;
  }
  return entries;
};

const serializeAws_queryAnalysisScheme = (
  input: AnalysisScheme,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AnalysisOptions !== undefined) {
    const memberEntries = serializeAws_queryAnalysisOptions(
      input.AnalysisOptions,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AnalysisOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AnalysisSchemeLanguage !== undefined) {
    entries["AnalysisSchemeLanguage"] = input.AnalysisSchemeLanguage;
  }
  if (input.AnalysisSchemeName !== undefined) {
    entries["AnalysisSchemeName"] = input.AnalysisSchemeName;
  }
  return entries;
};

const serializeAws_queryBuildSuggestersRequest = (
  input: BuildSuggestersRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DomainName !== undefined) {
    entries["DomainName"] = input.DomainName;
  }
  return entries;
};

const serializeAws_queryCreateDomainRequest = (
  input: CreateDomainRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DomainName !== undefined) {
    entries["DomainName"] = input.DomainName;
  }
  return entries;
};

const serializeAws_queryDateArrayOptions = (
  input: DateArrayOptions,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DefaultValue !== undefined) {
    entries["DefaultValue"] = input.DefaultValue;
  }
  if (input.FacetEnabled !== undefined) {
    entries["FacetEnabled"] = input.FacetEnabled;
  }
  if (input.ReturnEnabled !== undefined) {
    entries["ReturnEnabled"] = input.ReturnEnabled;
  }
  if (input.SearchEnabled !== undefined) {
    entries["SearchEnabled"] = input.SearchEnabled;
  }
  if (input.SourceFields !== undefined) {
    entries["SourceFields"] = input.SourceFields;
  }
  return entries;
};

const serializeAws_queryDateOptions = (
  input: DateOptions,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DefaultValue !== undefined) {
    entries["DefaultValue"] = input.DefaultValue;
  }
  if (input.FacetEnabled !== undefined) {
    entries["FacetEnabled"] = input.FacetEnabled;
  }
  if (input.ReturnEnabled !== undefined) {
    entries["ReturnEnabled"] = input.ReturnEnabled;
  }
  if (input.SearchEnabled !== undefined) {
    entries["SearchEnabled"] = input.SearchEnabled;
  }
  if (input.SortEnabled !== undefined) {
    entries["SortEnabled"] = input.SortEnabled;
  }
  if (input.SourceField !== undefined) {
    entries["SourceField"] = input.SourceField;
  }
  return entries;
};

const serializeAws_queryDefineAnalysisSchemeRequest = (
  input: DefineAnalysisSchemeRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AnalysisScheme !== undefined) {
    const memberEntries = serializeAws_queryAnalysisScheme(
      input.AnalysisScheme,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AnalysisScheme.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DomainName !== undefined) {
    entries["DomainName"] = input.DomainName;
  }
  return entries;
};

const serializeAws_queryDefineExpressionRequest = (
  input: DefineExpressionRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DomainName !== undefined) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.Expression !== undefined) {
    const memberEntries = serializeAws_queryExpression(
      input.Expression,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Expression.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDefineIndexFieldRequest = (
  input: DefineIndexFieldRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DomainName !== undefined) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.IndexField !== undefined) {
    const memberEntries = serializeAws_queryIndexField(
      input.IndexField,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `IndexField.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDefineSuggesterRequest = (
  input: DefineSuggesterRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DomainName !== undefined) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.Suggester !== undefined) {
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
  if (input.AnalysisSchemeName !== undefined) {
    entries["AnalysisSchemeName"] = input.AnalysisSchemeName;
  }
  if (input.DomainName !== undefined) {
    entries["DomainName"] = input.DomainName;
  }
  return entries;
};

const serializeAws_queryDeleteDomainRequest = (
  input: DeleteDomainRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DomainName !== undefined) {
    entries["DomainName"] = input.DomainName;
  }
  return entries;
};

const serializeAws_queryDeleteExpressionRequest = (
  input: DeleteExpressionRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DomainName !== undefined) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.ExpressionName !== undefined) {
    entries["ExpressionName"] = input.ExpressionName;
  }
  return entries;
};

const serializeAws_queryDeleteIndexFieldRequest = (
  input: DeleteIndexFieldRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DomainName !== undefined) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.IndexFieldName !== undefined) {
    entries["IndexFieldName"] = input.IndexFieldName;
  }
  return entries;
};

const serializeAws_queryDeleteSuggesterRequest = (
  input: DeleteSuggesterRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DomainName !== undefined) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.SuggesterName !== undefined) {
    entries["SuggesterName"] = input.SuggesterName;
  }
  return entries;
};

const serializeAws_queryDescribeAnalysisSchemesRequest = (
  input: DescribeAnalysisSchemesRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AnalysisSchemeNames !== undefined) {
    const memberEntries = serializeAws_queryStandardNameList(
      input.AnalysisSchemeNames,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AnalysisSchemeNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Deployed !== undefined) {
    entries["Deployed"] = input.Deployed;
  }
  if (input.DomainName !== undefined) {
    entries["DomainName"] = input.DomainName;
  }
  return entries;
};

const serializeAws_queryDescribeAvailabilityOptionsRequest = (
  input: DescribeAvailabilityOptionsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Deployed !== undefined) {
    entries["Deployed"] = input.Deployed;
  }
  if (input.DomainName !== undefined) {
    entries["DomainName"] = input.DomainName;
  }
  return entries;
};

const serializeAws_queryDescribeDomainEndpointOptionsRequest = (
  input: DescribeDomainEndpointOptionsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Deployed !== undefined) {
    entries["Deployed"] = input.Deployed;
  }
  if (input.DomainName !== undefined) {
    entries["DomainName"] = input.DomainName;
  }
  return entries;
};

const serializeAws_queryDescribeDomainsRequest = (
  input: DescribeDomainsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DomainNames !== undefined) {
    const memberEntries = serializeAws_queryDomainNameList(
      input.DomainNames,
      context
    );
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
  if (input.Deployed !== undefined) {
    entries["Deployed"] = input.Deployed;
  }
  if (input.DomainName !== undefined) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.ExpressionNames !== undefined) {
    const memberEntries = serializeAws_queryStandardNameList(
      input.ExpressionNames,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ExpressionNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDescribeIndexFieldsRequest = (
  input: DescribeIndexFieldsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Deployed !== undefined) {
    entries["Deployed"] = input.Deployed;
  }
  if (input.DomainName !== undefined) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.FieldNames !== undefined) {
    const memberEntries = serializeAws_queryDynamicFieldNameList(
      input.FieldNames,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `FieldNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDescribeScalingParametersRequest = (
  input: DescribeScalingParametersRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DomainName !== undefined) {
    entries["DomainName"] = input.DomainName;
  }
  return entries;
};

const serializeAws_queryDescribeServiceAccessPoliciesRequest = (
  input: DescribeServiceAccessPoliciesRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Deployed !== undefined) {
    entries["Deployed"] = input.Deployed;
  }
  if (input.DomainName !== undefined) {
    entries["DomainName"] = input.DomainName;
  }
  return entries;
};

const serializeAws_queryDescribeSuggestersRequest = (
  input: DescribeSuggestersRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Deployed !== undefined) {
    entries["Deployed"] = input.Deployed;
  }
  if (input.DomainName !== undefined) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.SuggesterNames !== undefined) {
    const memberEntries = serializeAws_queryStandardNameList(
      input.SuggesterNames,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SuggesterNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDocumentSuggesterOptions = (
  input: DocumentSuggesterOptions,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.FuzzyMatching !== undefined) {
    entries["FuzzyMatching"] = input.FuzzyMatching;
  }
  if (input.SortExpression !== undefined) {
    entries["SortExpression"] = input.SortExpression;
  }
  if (input.SourceField !== undefined) {
    entries["SourceField"] = input.SourceField;
  }
  return entries;
};

const serializeAws_queryDomainEndpointOptions = (
  input: DomainEndpointOptions,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.EnforceHTTPS !== undefined) {
    entries["EnforceHTTPS"] = input.EnforceHTTPS;
  }
  if (input.TLSSecurityPolicy !== undefined) {
    entries["TLSSecurityPolicy"] = input.TLSSecurityPolicy;
  }
  return entries;
};

const serializeAws_queryDomainNameList = (
  input: string[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryDoubleArrayOptions = (
  input: DoubleArrayOptions,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DefaultValue !== undefined) {
    entries["DefaultValue"] = input.DefaultValue;
  }
  if (input.FacetEnabled !== undefined) {
    entries["FacetEnabled"] = input.FacetEnabled;
  }
  if (input.ReturnEnabled !== undefined) {
    entries["ReturnEnabled"] = input.ReturnEnabled;
  }
  if (input.SearchEnabled !== undefined) {
    entries["SearchEnabled"] = input.SearchEnabled;
  }
  if (input.SourceFields !== undefined) {
    entries["SourceFields"] = input.SourceFields;
  }
  return entries;
};

const serializeAws_queryDoubleOptions = (
  input: DoubleOptions,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DefaultValue !== undefined) {
    entries["DefaultValue"] = input.DefaultValue;
  }
  if (input.FacetEnabled !== undefined) {
    entries["FacetEnabled"] = input.FacetEnabled;
  }
  if (input.ReturnEnabled !== undefined) {
    entries["ReturnEnabled"] = input.ReturnEnabled;
  }
  if (input.SearchEnabled !== undefined) {
    entries["SearchEnabled"] = input.SearchEnabled;
  }
  if (input.SortEnabled !== undefined) {
    entries["SortEnabled"] = input.SortEnabled;
  }
  if (input.SourceField !== undefined) {
    entries["SourceField"] = input.SourceField;
  }
  return entries;
};

const serializeAws_queryDynamicFieldNameList = (
  input: string[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryExpression = (
  input: Expression,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ExpressionName !== undefined) {
    entries["ExpressionName"] = input.ExpressionName;
  }
  if (input.ExpressionValue !== undefined) {
    entries["ExpressionValue"] = input.ExpressionValue;
  }
  return entries;
};

const serializeAws_queryIndexDocumentsRequest = (
  input: IndexDocumentsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DomainName !== undefined) {
    entries["DomainName"] = input.DomainName;
  }
  return entries;
};

const serializeAws_queryIndexField = (
  input: IndexField,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DateArrayOptions !== undefined) {
    const memberEntries = serializeAws_queryDateArrayOptions(
      input.DateArrayOptions,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DateArrayOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DateOptions !== undefined) {
    const memberEntries = serializeAws_queryDateOptions(
      input.DateOptions,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DateOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DoubleArrayOptions !== undefined) {
    const memberEntries = serializeAws_queryDoubleArrayOptions(
      input.DoubleArrayOptions,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DoubleArrayOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DoubleOptions !== undefined) {
    const memberEntries = serializeAws_queryDoubleOptions(
      input.DoubleOptions,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DoubleOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.IndexFieldName !== undefined) {
    entries["IndexFieldName"] = input.IndexFieldName;
  }
  if (input.IndexFieldType !== undefined) {
    entries["IndexFieldType"] = input.IndexFieldType;
  }
  if (input.IntArrayOptions !== undefined) {
    const memberEntries = serializeAws_queryIntArrayOptions(
      input.IntArrayOptions,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `IntArrayOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.IntOptions !== undefined) {
    const memberEntries = serializeAws_queryIntOptions(
      input.IntOptions,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `IntOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.LatLonOptions !== undefined) {
    const memberEntries = serializeAws_queryLatLonOptions(
      input.LatLonOptions,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LatLonOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.LiteralArrayOptions !== undefined) {
    const memberEntries = serializeAws_queryLiteralArrayOptions(
      input.LiteralArrayOptions,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LiteralArrayOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.LiteralOptions !== undefined) {
    const memberEntries = serializeAws_queryLiteralOptions(
      input.LiteralOptions,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LiteralOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TextArrayOptions !== undefined) {
    const memberEntries = serializeAws_queryTextArrayOptions(
      input.TextArrayOptions,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TextArrayOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TextOptions !== undefined) {
    const memberEntries = serializeAws_queryTextOptions(
      input.TextOptions,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TextOptions.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryIntArrayOptions = (
  input: IntArrayOptions,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DefaultValue !== undefined) {
    entries["DefaultValue"] = input.DefaultValue;
  }
  if (input.FacetEnabled !== undefined) {
    entries["FacetEnabled"] = input.FacetEnabled;
  }
  if (input.ReturnEnabled !== undefined) {
    entries["ReturnEnabled"] = input.ReturnEnabled;
  }
  if (input.SearchEnabled !== undefined) {
    entries["SearchEnabled"] = input.SearchEnabled;
  }
  if (input.SourceFields !== undefined) {
    entries["SourceFields"] = input.SourceFields;
  }
  return entries;
};

const serializeAws_queryIntOptions = (
  input: IntOptions,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DefaultValue !== undefined) {
    entries["DefaultValue"] = input.DefaultValue;
  }
  if (input.FacetEnabled !== undefined) {
    entries["FacetEnabled"] = input.FacetEnabled;
  }
  if (input.ReturnEnabled !== undefined) {
    entries["ReturnEnabled"] = input.ReturnEnabled;
  }
  if (input.SearchEnabled !== undefined) {
    entries["SearchEnabled"] = input.SearchEnabled;
  }
  if (input.SortEnabled !== undefined) {
    entries["SortEnabled"] = input.SortEnabled;
  }
  if (input.SourceField !== undefined) {
    entries["SourceField"] = input.SourceField;
  }
  return entries;
};

const serializeAws_queryLatLonOptions = (
  input: LatLonOptions,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DefaultValue !== undefined) {
    entries["DefaultValue"] = input.DefaultValue;
  }
  if (input.FacetEnabled !== undefined) {
    entries["FacetEnabled"] = input.FacetEnabled;
  }
  if (input.ReturnEnabled !== undefined) {
    entries["ReturnEnabled"] = input.ReturnEnabled;
  }
  if (input.SearchEnabled !== undefined) {
    entries["SearchEnabled"] = input.SearchEnabled;
  }
  if (input.SortEnabled !== undefined) {
    entries["SortEnabled"] = input.SortEnabled;
  }
  if (input.SourceField !== undefined) {
    entries["SourceField"] = input.SourceField;
  }
  return entries;
};

const serializeAws_queryLiteralArrayOptions = (
  input: LiteralArrayOptions,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DefaultValue !== undefined) {
    entries["DefaultValue"] = input.DefaultValue;
  }
  if (input.FacetEnabled !== undefined) {
    entries["FacetEnabled"] = input.FacetEnabled;
  }
  if (input.ReturnEnabled !== undefined) {
    entries["ReturnEnabled"] = input.ReturnEnabled;
  }
  if (input.SearchEnabled !== undefined) {
    entries["SearchEnabled"] = input.SearchEnabled;
  }
  if (input.SourceFields !== undefined) {
    entries["SourceFields"] = input.SourceFields;
  }
  return entries;
};

const serializeAws_queryLiteralOptions = (
  input: LiteralOptions,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DefaultValue !== undefined) {
    entries["DefaultValue"] = input.DefaultValue;
  }
  if (input.FacetEnabled !== undefined) {
    entries["FacetEnabled"] = input.FacetEnabled;
  }
  if (input.ReturnEnabled !== undefined) {
    entries["ReturnEnabled"] = input.ReturnEnabled;
  }
  if (input.SearchEnabled !== undefined) {
    entries["SearchEnabled"] = input.SearchEnabled;
  }
  if (input.SortEnabled !== undefined) {
    entries["SortEnabled"] = input.SortEnabled;
  }
  if (input.SourceField !== undefined) {
    entries["SourceField"] = input.SourceField;
  }
  return entries;
};

const serializeAws_queryScalingParameters = (
  input: ScalingParameters,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DesiredInstanceType !== undefined) {
    entries["DesiredInstanceType"] = input.DesiredInstanceType;
  }
  if (input.DesiredPartitionCount !== undefined) {
    entries["DesiredPartitionCount"] = input.DesiredPartitionCount;
  }
  if (input.DesiredReplicationCount !== undefined) {
    entries["DesiredReplicationCount"] = input.DesiredReplicationCount;
  }
  return entries;
};

const serializeAws_queryStandardNameList = (
  input: string[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_querySuggester = (
  input: Suggester,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DocumentSuggesterOptions !== undefined) {
    const memberEntries = serializeAws_queryDocumentSuggesterOptions(
      input.DocumentSuggesterOptions,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DocumentSuggesterOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SuggesterName !== undefined) {
    entries["SuggesterName"] = input.SuggesterName;
  }
  return entries;
};

const serializeAws_queryTextArrayOptions = (
  input: TextArrayOptions,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AnalysisScheme !== undefined) {
    entries["AnalysisScheme"] = input.AnalysisScheme;
  }
  if (input.DefaultValue !== undefined) {
    entries["DefaultValue"] = input.DefaultValue;
  }
  if (input.HighlightEnabled !== undefined) {
    entries["HighlightEnabled"] = input.HighlightEnabled;
  }
  if (input.ReturnEnabled !== undefined) {
    entries["ReturnEnabled"] = input.ReturnEnabled;
  }
  if (input.SourceFields !== undefined) {
    entries["SourceFields"] = input.SourceFields;
  }
  return entries;
};

const serializeAws_queryTextOptions = (
  input: TextOptions,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AnalysisScheme !== undefined) {
    entries["AnalysisScheme"] = input.AnalysisScheme;
  }
  if (input.DefaultValue !== undefined) {
    entries["DefaultValue"] = input.DefaultValue;
  }
  if (input.HighlightEnabled !== undefined) {
    entries["HighlightEnabled"] = input.HighlightEnabled;
  }
  if (input.ReturnEnabled !== undefined) {
    entries["ReturnEnabled"] = input.ReturnEnabled;
  }
  if (input.SortEnabled !== undefined) {
    entries["SortEnabled"] = input.SortEnabled;
  }
  if (input.SourceField !== undefined) {
    entries["SourceField"] = input.SourceField;
  }
  return entries;
};

const serializeAws_queryUpdateAvailabilityOptionsRequest = (
  input: UpdateAvailabilityOptionsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DomainName !== undefined) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.MultiAZ !== undefined) {
    entries["MultiAZ"] = input.MultiAZ;
  }
  return entries;
};

const serializeAws_queryUpdateDomainEndpointOptionsRequest = (
  input: UpdateDomainEndpointOptionsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DomainEndpointOptions !== undefined) {
    const memberEntries = serializeAws_queryDomainEndpointOptions(
      input.DomainEndpointOptions,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DomainEndpointOptions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DomainName !== undefined) {
    entries["DomainName"] = input.DomainName;
  }
  return entries;
};

const serializeAws_queryUpdateScalingParametersRequest = (
  input: UpdateScalingParametersRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DomainName !== undefined) {
    entries["DomainName"] = input.DomainName;
  }
  if (input.ScalingParameters !== undefined) {
    const memberEntries = serializeAws_queryScalingParameters(
      input.ScalingParameters,
      context
    );
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
  if (input.AccessPolicies !== undefined) {
    entries["AccessPolicies"] = input.AccessPolicies;
  }
  if (input.DomainName !== undefined) {
    entries["DomainName"] = input.DomainName;
  }
  return entries;
};

const deserializeAws_queryAccessPoliciesStatus = (
  output: any,
  context: __SerdeContext
): AccessPoliciesStatus => {
  let contents: any = {
    __type: "AccessPoliciesStatus",
    Options: undefined,
    Status: undefined
  };
  if (output["Options"] !== undefined) {
    contents.Options = output["Options"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = deserializeAws_queryOptionStatus(
      output["Status"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryAnalysisOptions = (
  output: any,
  context: __SerdeContext
): AnalysisOptions => {
  let contents: any = {
    __type: "AnalysisOptions",
    AlgorithmicStemming: undefined,
    JapaneseTokenizationDictionary: undefined,
    StemmingDictionary: undefined,
    Stopwords: undefined,
    Synonyms: undefined
  };
  if (output["AlgorithmicStemming"] !== undefined) {
    contents.AlgorithmicStemming = output["AlgorithmicStemming"];
  }
  if (output["JapaneseTokenizationDictionary"] !== undefined) {
    contents.JapaneseTokenizationDictionary =
      output["JapaneseTokenizationDictionary"];
  }
  if (output["StemmingDictionary"] !== undefined) {
    contents.StemmingDictionary = output["StemmingDictionary"];
  }
  if (output["Stopwords"] !== undefined) {
    contents.Stopwords = output["Stopwords"];
  }
  if (output["Synonyms"] !== undefined) {
    contents.Synonyms = output["Synonyms"];
  }
  return contents;
};

const deserializeAws_queryAnalysisScheme = (
  output: any,
  context: __SerdeContext
): AnalysisScheme => {
  let contents: any = {
    __type: "AnalysisScheme",
    AnalysisOptions: undefined,
    AnalysisSchemeLanguage: undefined,
    AnalysisSchemeName: undefined
  };
  if (output["AnalysisOptions"] !== undefined) {
    contents.AnalysisOptions = deserializeAws_queryAnalysisOptions(
      output["AnalysisOptions"],
      context
    );
  }
  if (output["AnalysisSchemeLanguage"] !== undefined) {
    contents.AnalysisSchemeLanguage = output["AnalysisSchemeLanguage"];
  }
  if (output["AnalysisSchemeName"] !== undefined) {
    contents.AnalysisSchemeName = output["AnalysisSchemeName"];
  }
  return contents;
};

const deserializeAws_queryAnalysisSchemeStatus = (
  output: any,
  context: __SerdeContext
): AnalysisSchemeStatus => {
  let contents: any = {
    __type: "AnalysisSchemeStatus",
    Options: undefined,
    Status: undefined
  };
  if (output["Options"] !== undefined) {
    contents.Options = deserializeAws_queryAnalysisScheme(
      output["Options"],
      context
    );
  }
  if (output["Status"] !== undefined) {
    contents.Status = deserializeAws_queryOptionStatus(
      output["Status"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryAnalysisSchemeStatusList = (
  output: any,
  context: __SerdeContext
): AnalysisSchemeStatus[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryAnalysisSchemeStatus(entry, context)
  );
};

const deserializeAws_queryAvailabilityOptionsStatus = (
  output: any,
  context: __SerdeContext
): AvailabilityOptionsStatus => {
  let contents: any = {
    __type: "AvailabilityOptionsStatus",
    Options: undefined,
    Status: undefined
  };
  if (output["Options"] !== undefined) {
    contents.Options = output["Options"] == "true";
  }
  if (output["Status"] !== undefined) {
    contents.Status = deserializeAws_queryOptionStatus(
      output["Status"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryBaseException = (
  output: any,
  context: __SerdeContext
): BaseException => {
  let contents: any = {
    __type: "BaseException",
    Code: undefined,
    Message: undefined
  };
  if (output["Code"] !== undefined) {
    contents.Code = output["Code"];
  }
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryBuildSuggestersResponse = (
  output: any,
  context: __SerdeContext
): BuildSuggestersResponse => {
  let contents: any = {
    __type: "BuildSuggestersResponse",
    FieldNames: undefined
  };
  if (output.FieldNames === "") {
    contents.FieldNames = [];
  }
  if (
    output["FieldNames"] !== undefined &&
    output["FieldNames"]["member"] !== undefined
  ) {
    contents.FieldNames = deserializeAws_queryFieldNameList(
      __getArrayIfSingleItem(output["FieldNames"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryCreateDomainResponse = (
  output: any,
  context: __SerdeContext
): CreateDomainResponse => {
  let contents: any = {
    __type: "CreateDomainResponse",
    DomainStatus: undefined
  };
  if (output["DomainStatus"] !== undefined) {
    contents.DomainStatus = deserializeAws_queryDomainStatus(
      output["DomainStatus"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDateArrayOptions = (
  output: any,
  context: __SerdeContext
): DateArrayOptions => {
  let contents: any = {
    __type: "DateArrayOptions",
    DefaultValue: undefined,
    FacetEnabled: undefined,
    ReturnEnabled: undefined,
    SearchEnabled: undefined,
    SourceFields: undefined
  };
  if (output["DefaultValue"] !== undefined) {
    contents.DefaultValue = output["DefaultValue"];
  }
  if (output["FacetEnabled"] !== undefined) {
    contents.FacetEnabled = output["FacetEnabled"] == "true";
  }
  if (output["ReturnEnabled"] !== undefined) {
    contents.ReturnEnabled = output["ReturnEnabled"] == "true";
  }
  if (output["SearchEnabled"] !== undefined) {
    contents.SearchEnabled = output["SearchEnabled"] == "true";
  }
  if (output["SourceFields"] !== undefined) {
    contents.SourceFields = output["SourceFields"];
  }
  return contents;
};

const deserializeAws_queryDateOptions = (
  output: any,
  context: __SerdeContext
): DateOptions => {
  let contents: any = {
    __type: "DateOptions",
    DefaultValue: undefined,
    FacetEnabled: undefined,
    ReturnEnabled: undefined,
    SearchEnabled: undefined,
    SortEnabled: undefined,
    SourceField: undefined
  };
  if (output["DefaultValue"] !== undefined) {
    contents.DefaultValue = output["DefaultValue"];
  }
  if (output["FacetEnabled"] !== undefined) {
    contents.FacetEnabled = output["FacetEnabled"] == "true";
  }
  if (output["ReturnEnabled"] !== undefined) {
    contents.ReturnEnabled = output["ReturnEnabled"] == "true";
  }
  if (output["SearchEnabled"] !== undefined) {
    contents.SearchEnabled = output["SearchEnabled"] == "true";
  }
  if (output["SortEnabled"] !== undefined) {
    contents.SortEnabled = output["SortEnabled"] == "true";
  }
  if (output["SourceField"] !== undefined) {
    contents.SourceField = output["SourceField"];
  }
  return contents;
};

const deserializeAws_queryDefineAnalysisSchemeResponse = (
  output: any,
  context: __SerdeContext
): DefineAnalysisSchemeResponse => {
  let contents: any = {
    __type: "DefineAnalysisSchemeResponse",
    AnalysisScheme: undefined
  };
  if (output["AnalysisScheme"] !== undefined) {
    contents.AnalysisScheme = deserializeAws_queryAnalysisSchemeStatus(
      output["AnalysisScheme"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDefineExpressionResponse = (
  output: any,
  context: __SerdeContext
): DefineExpressionResponse => {
  let contents: any = {
    __type: "DefineExpressionResponse",
    Expression: undefined
  };
  if (output["Expression"] !== undefined) {
    contents.Expression = deserializeAws_queryExpressionStatus(
      output["Expression"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDefineIndexFieldResponse = (
  output: any,
  context: __SerdeContext
): DefineIndexFieldResponse => {
  let contents: any = {
    __type: "DefineIndexFieldResponse",
    IndexField: undefined
  };
  if (output["IndexField"] !== undefined) {
    contents.IndexField = deserializeAws_queryIndexFieldStatus(
      output["IndexField"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDefineSuggesterResponse = (
  output: any,
  context: __SerdeContext
): DefineSuggesterResponse => {
  let contents: any = {
    __type: "DefineSuggesterResponse",
    Suggester: undefined
  };
  if (output["Suggester"] !== undefined) {
    contents.Suggester = deserializeAws_querySuggesterStatus(
      output["Suggester"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDeleteAnalysisSchemeResponse = (
  output: any,
  context: __SerdeContext
): DeleteAnalysisSchemeResponse => {
  let contents: any = {
    __type: "DeleteAnalysisSchemeResponse",
    AnalysisScheme: undefined
  };
  if (output["AnalysisScheme"] !== undefined) {
    contents.AnalysisScheme = deserializeAws_queryAnalysisSchemeStatus(
      output["AnalysisScheme"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDeleteDomainResponse = (
  output: any,
  context: __SerdeContext
): DeleteDomainResponse => {
  let contents: any = {
    __type: "DeleteDomainResponse",
    DomainStatus: undefined
  };
  if (output["DomainStatus"] !== undefined) {
    contents.DomainStatus = deserializeAws_queryDomainStatus(
      output["DomainStatus"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDeleteExpressionResponse = (
  output: any,
  context: __SerdeContext
): DeleteExpressionResponse => {
  let contents: any = {
    __type: "DeleteExpressionResponse",
    Expression: undefined
  };
  if (output["Expression"] !== undefined) {
    contents.Expression = deserializeAws_queryExpressionStatus(
      output["Expression"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDeleteIndexFieldResponse = (
  output: any,
  context: __SerdeContext
): DeleteIndexFieldResponse => {
  let contents: any = {
    __type: "DeleteIndexFieldResponse",
    IndexField: undefined
  };
  if (output["IndexField"] !== undefined) {
    contents.IndexField = deserializeAws_queryIndexFieldStatus(
      output["IndexField"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDeleteSuggesterResponse = (
  output: any,
  context: __SerdeContext
): DeleteSuggesterResponse => {
  let contents: any = {
    __type: "DeleteSuggesterResponse",
    Suggester: undefined
  };
  if (output["Suggester"] !== undefined) {
    contents.Suggester = deserializeAws_querySuggesterStatus(
      output["Suggester"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeAnalysisSchemesResponse = (
  output: any,
  context: __SerdeContext
): DescribeAnalysisSchemesResponse => {
  let contents: any = {
    __type: "DescribeAnalysisSchemesResponse",
    AnalysisSchemes: undefined
  };
  if (output.AnalysisSchemes === "") {
    contents.AnalysisSchemes = [];
  }
  if (
    output["AnalysisSchemes"] !== undefined &&
    output["AnalysisSchemes"]["member"] !== undefined
  ) {
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
    __type: "DescribeAvailabilityOptionsResponse",
    AvailabilityOptions: undefined
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
    __type: "DescribeDomainEndpointOptionsResponse",
    DomainEndpointOptions: undefined
  };
  if (output["DomainEndpointOptions"] !== undefined) {
    contents.DomainEndpointOptions = deserializeAws_queryDomainEndpointOptionsStatus(
      output["DomainEndpointOptions"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeDomainsResponse = (
  output: any,
  context: __SerdeContext
): DescribeDomainsResponse => {
  let contents: any = {
    __type: "DescribeDomainsResponse",
    DomainStatusList: undefined
  };
  if (output.DomainStatusList === "") {
    contents.DomainStatusList = [];
  }
  if (
    output["DomainStatusList"] !== undefined &&
    output["DomainStatusList"]["member"] !== undefined
  ) {
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
    __type: "DescribeExpressionsResponse",
    Expressions: undefined
  };
  if (output.Expressions === "") {
    contents.Expressions = [];
  }
  if (
    output["Expressions"] !== undefined &&
    output["Expressions"]["member"] !== undefined
  ) {
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
    __type: "DescribeIndexFieldsResponse",
    IndexFields: undefined
  };
  if (output.IndexFields === "") {
    contents.IndexFields = [];
  }
  if (
    output["IndexFields"] !== undefined &&
    output["IndexFields"]["member"] !== undefined
  ) {
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
    __type: "DescribeScalingParametersResponse",
    ScalingParameters: undefined
  };
  if (output["ScalingParameters"] !== undefined) {
    contents.ScalingParameters = deserializeAws_queryScalingParametersStatus(
      output["ScalingParameters"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeServiceAccessPoliciesResponse = (
  output: any,
  context: __SerdeContext
): DescribeServiceAccessPoliciesResponse => {
  let contents: any = {
    __type: "DescribeServiceAccessPoliciesResponse",
    AccessPolicies: undefined
  };
  if (output["AccessPolicies"] !== undefined) {
    contents.AccessPolicies = deserializeAws_queryAccessPoliciesStatus(
      output["AccessPolicies"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeSuggestersResponse = (
  output: any,
  context: __SerdeContext
): DescribeSuggestersResponse => {
  let contents: any = {
    __type: "DescribeSuggestersResponse",
    Suggesters: undefined
  };
  if (output.Suggesters === "") {
    contents.Suggesters = [];
  }
  if (
    output["Suggesters"] !== undefined &&
    output["Suggesters"]["member"] !== undefined
  ) {
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
    __type: "DisabledOperationException",
    Code: undefined,
    Message: undefined
  };
  if (output["Code"] !== undefined) {
    contents.Code = output["Code"];
  }
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryDocumentSuggesterOptions = (
  output: any,
  context: __SerdeContext
): DocumentSuggesterOptions => {
  let contents: any = {
    __type: "DocumentSuggesterOptions",
    FuzzyMatching: undefined,
    SortExpression: undefined,
    SourceField: undefined
  };
  if (output["FuzzyMatching"] !== undefined) {
    contents.FuzzyMatching = output["FuzzyMatching"];
  }
  if (output["SortExpression"] !== undefined) {
    contents.SortExpression = output["SortExpression"];
  }
  if (output["SourceField"] !== undefined) {
    contents.SourceField = output["SourceField"];
  }
  return contents;
};

const deserializeAws_queryDomainEndpointOptions = (
  output: any,
  context: __SerdeContext
): DomainEndpointOptions => {
  let contents: any = {
    __type: "DomainEndpointOptions",
    EnforceHTTPS: undefined,
    TLSSecurityPolicy: undefined
  };
  if (output["EnforceHTTPS"] !== undefined) {
    contents.EnforceHTTPS = output["EnforceHTTPS"] == "true";
  }
  if (output["TLSSecurityPolicy"] !== undefined) {
    contents.TLSSecurityPolicy = output["TLSSecurityPolicy"];
  }
  return contents;
};

const deserializeAws_queryDomainEndpointOptionsStatus = (
  output: any,
  context: __SerdeContext
): DomainEndpointOptionsStatus => {
  let contents: any = {
    __type: "DomainEndpointOptionsStatus",
    Options: undefined,
    Status: undefined
  };
  if (output["Options"] !== undefined) {
    contents.Options = deserializeAws_queryDomainEndpointOptions(
      output["Options"],
      context
    );
  }
  if (output["Status"] !== undefined) {
    contents.Status = deserializeAws_queryOptionStatus(
      output["Status"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDomainNameMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return output.reduce(
    (acc: any, pair: any) => ({
      ...acc,
      [pair["key"]]: pair["value"]
    }),
    {}
  );
};

const deserializeAws_queryDomainStatus = (
  output: any,
  context: __SerdeContext
): DomainStatus => {
  let contents: any = {
    __type: "DomainStatus",
    ARN: undefined,
    Created: undefined,
    Deleted: undefined,
    DocService: undefined,
    DomainId: undefined,
    DomainName: undefined,
    Limits: undefined,
    Processing: undefined,
    RequiresIndexDocuments: undefined,
    SearchInstanceCount: undefined,
    SearchInstanceType: undefined,
    SearchPartitionCount: undefined,
    SearchService: undefined
  };
  if (output["ARN"] !== undefined) {
    contents.ARN = output["ARN"];
  }
  if (output["Created"] !== undefined) {
    contents.Created = output["Created"] == "true";
  }
  if (output["Deleted"] !== undefined) {
    contents.Deleted = output["Deleted"] == "true";
  }
  if (output["DocService"] !== undefined) {
    contents.DocService = deserializeAws_queryServiceEndpoint(
      output["DocService"],
      context
    );
  }
  if (output["DomainId"] !== undefined) {
    contents.DomainId = output["DomainId"];
  }
  if (output["DomainName"] !== undefined) {
    contents.DomainName = output["DomainName"];
  }
  if (output["Limits"] !== undefined) {
    contents.Limits = deserializeAws_queryLimits(output["Limits"], context);
  }
  if (output["Processing"] !== undefined) {
    contents.Processing = output["Processing"] == "true";
  }
  if (output["RequiresIndexDocuments"] !== undefined) {
    contents.RequiresIndexDocuments =
      output["RequiresIndexDocuments"] == "true";
  }
  if (output["SearchInstanceCount"] !== undefined) {
    contents.SearchInstanceCount = parseInt(output["SearchInstanceCount"]);
  }
  if (output["SearchInstanceType"] !== undefined) {
    contents.SearchInstanceType = output["SearchInstanceType"];
  }
  if (output["SearchPartitionCount"] !== undefined) {
    contents.SearchPartitionCount = parseInt(output["SearchPartitionCount"]);
  }
  if (output["SearchService"] !== undefined) {
    contents.SearchService = deserializeAws_queryServiceEndpoint(
      output["SearchService"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryDomainStatusList = (
  output: any,
  context: __SerdeContext
): DomainStatus[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryDomainStatus(entry, context)
  );
};

const deserializeAws_queryDoubleArrayOptions = (
  output: any,
  context: __SerdeContext
): DoubleArrayOptions => {
  let contents: any = {
    __type: "DoubleArrayOptions",
    DefaultValue: undefined,
    FacetEnabled: undefined,
    ReturnEnabled: undefined,
    SearchEnabled: undefined,
    SourceFields: undefined
  };
  if (output["DefaultValue"] !== undefined) {
    contents.DefaultValue = parseFloat(output["DefaultValue"]);
  }
  if (output["FacetEnabled"] !== undefined) {
    contents.FacetEnabled = output["FacetEnabled"] == "true";
  }
  if (output["ReturnEnabled"] !== undefined) {
    contents.ReturnEnabled = output["ReturnEnabled"] == "true";
  }
  if (output["SearchEnabled"] !== undefined) {
    contents.SearchEnabled = output["SearchEnabled"] == "true";
  }
  if (output["SourceFields"] !== undefined) {
    contents.SourceFields = output["SourceFields"];
  }
  return contents;
};

const deserializeAws_queryDoubleOptions = (
  output: any,
  context: __SerdeContext
): DoubleOptions => {
  let contents: any = {
    __type: "DoubleOptions",
    DefaultValue: undefined,
    FacetEnabled: undefined,
    ReturnEnabled: undefined,
    SearchEnabled: undefined,
    SortEnabled: undefined,
    SourceField: undefined
  };
  if (output["DefaultValue"] !== undefined) {
    contents.DefaultValue = parseFloat(output["DefaultValue"]);
  }
  if (output["FacetEnabled"] !== undefined) {
    contents.FacetEnabled = output["FacetEnabled"] == "true";
  }
  if (output["ReturnEnabled"] !== undefined) {
    contents.ReturnEnabled = output["ReturnEnabled"] == "true";
  }
  if (output["SearchEnabled"] !== undefined) {
    contents.SearchEnabled = output["SearchEnabled"] == "true";
  }
  if (output["SortEnabled"] !== undefined) {
    contents.SortEnabled = output["SortEnabled"] == "true";
  }
  if (output["SourceField"] !== undefined) {
    contents.SourceField = output["SourceField"];
  }
  return contents;
};

const deserializeAws_queryExpression = (
  output: any,
  context: __SerdeContext
): Expression => {
  let contents: any = {
    __type: "Expression",
    ExpressionName: undefined,
    ExpressionValue: undefined
  };
  if (output["ExpressionName"] !== undefined) {
    contents.ExpressionName = output["ExpressionName"];
  }
  if (output["ExpressionValue"] !== undefined) {
    contents.ExpressionValue = output["ExpressionValue"];
  }
  return contents;
};

const deserializeAws_queryExpressionStatus = (
  output: any,
  context: __SerdeContext
): ExpressionStatus => {
  let contents: any = {
    __type: "ExpressionStatus",
    Options: undefined,
    Status: undefined
  };
  if (output["Options"] !== undefined) {
    contents.Options = deserializeAws_queryExpression(
      output["Options"],
      context
    );
  }
  if (output["Status"] !== undefined) {
    contents.Status = deserializeAws_queryOptionStatus(
      output["Status"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryExpressionStatusList = (
  output: any,
  context: __SerdeContext
): ExpressionStatus[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryExpressionStatus(entry, context)
  );
};

const deserializeAws_queryFieldNameList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_queryIndexDocumentsResponse = (
  output: any,
  context: __SerdeContext
): IndexDocumentsResponse => {
  let contents: any = {
    __type: "IndexDocumentsResponse",
    FieldNames: undefined
  };
  if (output.FieldNames === "") {
    contents.FieldNames = [];
  }
  if (
    output["FieldNames"] !== undefined &&
    output["FieldNames"]["member"] !== undefined
  ) {
    contents.FieldNames = deserializeAws_queryFieldNameList(
      __getArrayIfSingleItem(output["FieldNames"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryIndexField = (
  output: any,
  context: __SerdeContext
): IndexField => {
  let contents: any = {
    __type: "IndexField",
    DateArrayOptions: undefined,
    DateOptions: undefined,
    DoubleArrayOptions: undefined,
    DoubleOptions: undefined,
    IndexFieldName: undefined,
    IndexFieldType: undefined,
    IntArrayOptions: undefined,
    IntOptions: undefined,
    LatLonOptions: undefined,
    LiteralArrayOptions: undefined,
    LiteralOptions: undefined,
    TextArrayOptions: undefined,
    TextOptions: undefined
  };
  if (output["DateArrayOptions"] !== undefined) {
    contents.DateArrayOptions = deserializeAws_queryDateArrayOptions(
      output["DateArrayOptions"],
      context
    );
  }
  if (output["DateOptions"] !== undefined) {
    contents.DateOptions = deserializeAws_queryDateOptions(
      output["DateOptions"],
      context
    );
  }
  if (output["DoubleArrayOptions"] !== undefined) {
    contents.DoubleArrayOptions = deserializeAws_queryDoubleArrayOptions(
      output["DoubleArrayOptions"],
      context
    );
  }
  if (output["DoubleOptions"] !== undefined) {
    contents.DoubleOptions = deserializeAws_queryDoubleOptions(
      output["DoubleOptions"],
      context
    );
  }
  if (output["IndexFieldName"] !== undefined) {
    contents.IndexFieldName = output["IndexFieldName"];
  }
  if (output["IndexFieldType"] !== undefined) {
    contents.IndexFieldType = output["IndexFieldType"];
  }
  if (output["IntArrayOptions"] !== undefined) {
    contents.IntArrayOptions = deserializeAws_queryIntArrayOptions(
      output["IntArrayOptions"],
      context
    );
  }
  if (output["IntOptions"] !== undefined) {
    contents.IntOptions = deserializeAws_queryIntOptions(
      output["IntOptions"],
      context
    );
  }
  if (output["LatLonOptions"] !== undefined) {
    contents.LatLonOptions = deserializeAws_queryLatLonOptions(
      output["LatLonOptions"],
      context
    );
  }
  if (output["LiteralArrayOptions"] !== undefined) {
    contents.LiteralArrayOptions = deserializeAws_queryLiteralArrayOptions(
      output["LiteralArrayOptions"],
      context
    );
  }
  if (output["LiteralOptions"] !== undefined) {
    contents.LiteralOptions = deserializeAws_queryLiteralOptions(
      output["LiteralOptions"],
      context
    );
  }
  if (output["TextArrayOptions"] !== undefined) {
    contents.TextArrayOptions = deserializeAws_queryTextArrayOptions(
      output["TextArrayOptions"],
      context
    );
  }
  if (output["TextOptions"] !== undefined) {
    contents.TextOptions = deserializeAws_queryTextOptions(
      output["TextOptions"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryIndexFieldStatus = (
  output: any,
  context: __SerdeContext
): IndexFieldStatus => {
  let contents: any = {
    __type: "IndexFieldStatus",
    Options: undefined,
    Status: undefined
  };
  if (output["Options"] !== undefined) {
    contents.Options = deserializeAws_queryIndexField(
      output["Options"],
      context
    );
  }
  if (output["Status"] !== undefined) {
    contents.Status = deserializeAws_queryOptionStatus(
      output["Status"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryIndexFieldStatusList = (
  output: any,
  context: __SerdeContext
): IndexFieldStatus[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryIndexFieldStatus(entry, context)
  );
};

const deserializeAws_queryIntArrayOptions = (
  output: any,
  context: __SerdeContext
): IntArrayOptions => {
  let contents: any = {
    __type: "IntArrayOptions",
    DefaultValue: undefined,
    FacetEnabled: undefined,
    ReturnEnabled: undefined,
    SearchEnabled: undefined,
    SourceFields: undefined
  };
  if (output["DefaultValue"] !== undefined) {
    contents.DefaultValue = parseInt(output["DefaultValue"]);
  }
  if (output["FacetEnabled"] !== undefined) {
    contents.FacetEnabled = output["FacetEnabled"] == "true";
  }
  if (output["ReturnEnabled"] !== undefined) {
    contents.ReturnEnabled = output["ReturnEnabled"] == "true";
  }
  if (output["SearchEnabled"] !== undefined) {
    contents.SearchEnabled = output["SearchEnabled"] == "true";
  }
  if (output["SourceFields"] !== undefined) {
    contents.SourceFields = output["SourceFields"];
  }
  return contents;
};

const deserializeAws_queryInternalException = (
  output: any,
  context: __SerdeContext
): InternalException => {
  let contents: any = {
    __type: "InternalException",
    Code: undefined,
    Message: undefined
  };
  if (output["Code"] !== undefined) {
    contents.Code = output["Code"];
  }
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryIntOptions = (
  output: any,
  context: __SerdeContext
): IntOptions => {
  let contents: any = {
    __type: "IntOptions",
    DefaultValue: undefined,
    FacetEnabled: undefined,
    ReturnEnabled: undefined,
    SearchEnabled: undefined,
    SortEnabled: undefined,
    SourceField: undefined
  };
  if (output["DefaultValue"] !== undefined) {
    contents.DefaultValue = parseInt(output["DefaultValue"]);
  }
  if (output["FacetEnabled"] !== undefined) {
    contents.FacetEnabled = output["FacetEnabled"] == "true";
  }
  if (output["ReturnEnabled"] !== undefined) {
    contents.ReturnEnabled = output["ReturnEnabled"] == "true";
  }
  if (output["SearchEnabled"] !== undefined) {
    contents.SearchEnabled = output["SearchEnabled"] == "true";
  }
  if (output["SortEnabled"] !== undefined) {
    contents.SortEnabled = output["SortEnabled"] == "true";
  }
  if (output["SourceField"] !== undefined) {
    contents.SourceField = output["SourceField"];
  }
  return contents;
};

const deserializeAws_queryInvalidTypeException = (
  output: any,
  context: __SerdeContext
): InvalidTypeException => {
  let contents: any = {
    __type: "InvalidTypeException",
    Code: undefined,
    Message: undefined
  };
  if (output["Code"] !== undefined) {
    contents.Code = output["Code"];
  }
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryLatLonOptions = (
  output: any,
  context: __SerdeContext
): LatLonOptions => {
  let contents: any = {
    __type: "LatLonOptions",
    DefaultValue: undefined,
    FacetEnabled: undefined,
    ReturnEnabled: undefined,
    SearchEnabled: undefined,
    SortEnabled: undefined,
    SourceField: undefined
  };
  if (output["DefaultValue"] !== undefined) {
    contents.DefaultValue = output["DefaultValue"];
  }
  if (output["FacetEnabled"] !== undefined) {
    contents.FacetEnabled = output["FacetEnabled"] == "true";
  }
  if (output["ReturnEnabled"] !== undefined) {
    contents.ReturnEnabled = output["ReturnEnabled"] == "true";
  }
  if (output["SearchEnabled"] !== undefined) {
    contents.SearchEnabled = output["SearchEnabled"] == "true";
  }
  if (output["SortEnabled"] !== undefined) {
    contents.SortEnabled = output["SortEnabled"] == "true";
  }
  if (output["SourceField"] !== undefined) {
    contents.SourceField = output["SourceField"];
  }
  return contents;
};

const deserializeAws_queryLimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    Code: undefined,
    Message: undefined
  };
  if (output["Code"] !== undefined) {
    contents.Code = output["Code"];
  }
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryLimits = (
  output: any,
  context: __SerdeContext
): Limits => {
  let contents: any = {
    __type: "Limits",
    MaximumPartitionCount: undefined,
    MaximumReplicationCount: undefined
  };
  if (output["MaximumPartitionCount"] !== undefined) {
    contents.MaximumPartitionCount = parseInt(output["MaximumPartitionCount"]);
  }
  if (output["MaximumReplicationCount"] !== undefined) {
    contents.MaximumReplicationCount = parseInt(
      output["MaximumReplicationCount"]
    );
  }
  return contents;
};

const deserializeAws_queryListDomainNamesResponse = (
  output: any,
  context: __SerdeContext
): ListDomainNamesResponse => {
  let contents: any = {
    __type: "ListDomainNamesResponse",
    DomainNames: undefined
  };
  if (output.DomainNames === "") {
    contents.DomainNames = {};
  }
  if (
    output["DomainNames"] !== undefined &&
    output["DomainNames"]["entry"] !== undefined
  ) {
    contents.DomainNames = deserializeAws_queryDomainNameMap(
      __getArrayIfSingleItem(output["DomainNames"]["entry"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryLiteralArrayOptions = (
  output: any,
  context: __SerdeContext
): LiteralArrayOptions => {
  let contents: any = {
    __type: "LiteralArrayOptions",
    DefaultValue: undefined,
    FacetEnabled: undefined,
    ReturnEnabled: undefined,
    SearchEnabled: undefined,
    SourceFields: undefined
  };
  if (output["DefaultValue"] !== undefined) {
    contents.DefaultValue = output["DefaultValue"];
  }
  if (output["FacetEnabled"] !== undefined) {
    contents.FacetEnabled = output["FacetEnabled"] == "true";
  }
  if (output["ReturnEnabled"] !== undefined) {
    contents.ReturnEnabled = output["ReturnEnabled"] == "true";
  }
  if (output["SearchEnabled"] !== undefined) {
    contents.SearchEnabled = output["SearchEnabled"] == "true";
  }
  if (output["SourceFields"] !== undefined) {
    contents.SourceFields = output["SourceFields"];
  }
  return contents;
};

const deserializeAws_queryLiteralOptions = (
  output: any,
  context: __SerdeContext
): LiteralOptions => {
  let contents: any = {
    __type: "LiteralOptions",
    DefaultValue: undefined,
    FacetEnabled: undefined,
    ReturnEnabled: undefined,
    SearchEnabled: undefined,
    SortEnabled: undefined,
    SourceField: undefined
  };
  if (output["DefaultValue"] !== undefined) {
    contents.DefaultValue = output["DefaultValue"];
  }
  if (output["FacetEnabled"] !== undefined) {
    contents.FacetEnabled = output["FacetEnabled"] == "true";
  }
  if (output["ReturnEnabled"] !== undefined) {
    contents.ReturnEnabled = output["ReturnEnabled"] == "true";
  }
  if (output["SearchEnabled"] !== undefined) {
    contents.SearchEnabled = output["SearchEnabled"] == "true";
  }
  if (output["SortEnabled"] !== undefined) {
    contents.SortEnabled = output["SortEnabled"] == "true";
  }
  if (output["SourceField"] !== undefined) {
    contents.SourceField = output["SourceField"];
  }
  return contents;
};

const deserializeAws_queryOptionStatus = (
  output: any,
  context: __SerdeContext
): OptionStatus => {
  let contents: any = {
    __type: "OptionStatus",
    CreationDate: undefined,
    PendingDeletion: undefined,
    State: undefined,
    UpdateDate: undefined,
    UpdateVersion: undefined
  };
  if (output["CreationDate"] !== undefined) {
    contents.CreationDate = new Date(output["CreationDate"]);
  }
  if (output["PendingDeletion"] !== undefined) {
    contents.PendingDeletion = output["PendingDeletion"] == "true";
  }
  if (output["State"] !== undefined) {
    contents.State = output["State"];
  }
  if (output["UpdateDate"] !== undefined) {
    contents.UpdateDate = new Date(output["UpdateDate"]);
  }
  if (output["UpdateVersion"] !== undefined) {
    contents.UpdateVersion = parseInt(output["UpdateVersion"]);
  }
  return contents;
};

const deserializeAws_queryResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    Code: undefined,
    Message: undefined
  };
  if (output["Code"] !== undefined) {
    contents.Code = output["Code"];
  }
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryScalingParameters = (
  output: any,
  context: __SerdeContext
): ScalingParameters => {
  let contents: any = {
    __type: "ScalingParameters",
    DesiredInstanceType: undefined,
    DesiredPartitionCount: undefined,
    DesiredReplicationCount: undefined
  };
  if (output["DesiredInstanceType"] !== undefined) {
    contents.DesiredInstanceType = output["DesiredInstanceType"];
  }
  if (output["DesiredPartitionCount"] !== undefined) {
    contents.DesiredPartitionCount = parseInt(output["DesiredPartitionCount"]);
  }
  if (output["DesiredReplicationCount"] !== undefined) {
    contents.DesiredReplicationCount = parseInt(
      output["DesiredReplicationCount"]
    );
  }
  return contents;
};

const deserializeAws_queryScalingParametersStatus = (
  output: any,
  context: __SerdeContext
): ScalingParametersStatus => {
  let contents: any = {
    __type: "ScalingParametersStatus",
    Options: undefined,
    Status: undefined
  };
  if (output["Options"] !== undefined) {
    contents.Options = deserializeAws_queryScalingParameters(
      output["Options"],
      context
    );
  }
  if (output["Status"] !== undefined) {
    contents.Status = deserializeAws_queryOptionStatus(
      output["Status"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryServiceEndpoint = (
  output: any,
  context: __SerdeContext
): ServiceEndpoint => {
  let contents: any = {
    __type: "ServiceEndpoint",
    Endpoint: undefined
  };
  if (output["Endpoint"] !== undefined) {
    contents.Endpoint = output["Endpoint"];
  }
  return contents;
};

const deserializeAws_querySuggester = (
  output: any,
  context: __SerdeContext
): Suggester => {
  let contents: any = {
    __type: "Suggester",
    DocumentSuggesterOptions: undefined,
    SuggesterName: undefined
  };
  if (output["DocumentSuggesterOptions"] !== undefined) {
    contents.DocumentSuggesterOptions = deserializeAws_queryDocumentSuggesterOptions(
      output["DocumentSuggesterOptions"],
      context
    );
  }
  if (output["SuggesterName"] !== undefined) {
    contents.SuggesterName = output["SuggesterName"];
  }
  return contents;
};

const deserializeAws_querySuggesterStatus = (
  output: any,
  context: __SerdeContext
): SuggesterStatus => {
  let contents: any = {
    __type: "SuggesterStatus",
    Options: undefined,
    Status: undefined
  };
  if (output["Options"] !== undefined) {
    contents.Options = deserializeAws_querySuggester(
      output["Options"],
      context
    );
  }
  if (output["Status"] !== undefined) {
    contents.Status = deserializeAws_queryOptionStatus(
      output["Status"],
      context
    );
  }
  return contents;
};

const deserializeAws_querySuggesterStatusList = (
  output: any,
  context: __SerdeContext
): SuggesterStatus[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_querySuggesterStatus(entry, context)
  );
};

const deserializeAws_queryTextArrayOptions = (
  output: any,
  context: __SerdeContext
): TextArrayOptions => {
  let contents: any = {
    __type: "TextArrayOptions",
    AnalysisScheme: undefined,
    DefaultValue: undefined,
    HighlightEnabled: undefined,
    ReturnEnabled: undefined,
    SourceFields: undefined
  };
  if (output["AnalysisScheme"] !== undefined) {
    contents.AnalysisScheme = output["AnalysisScheme"];
  }
  if (output["DefaultValue"] !== undefined) {
    contents.DefaultValue = output["DefaultValue"];
  }
  if (output["HighlightEnabled"] !== undefined) {
    contents.HighlightEnabled = output["HighlightEnabled"] == "true";
  }
  if (output["ReturnEnabled"] !== undefined) {
    contents.ReturnEnabled = output["ReturnEnabled"] == "true";
  }
  if (output["SourceFields"] !== undefined) {
    contents.SourceFields = output["SourceFields"];
  }
  return contents;
};

const deserializeAws_queryTextOptions = (
  output: any,
  context: __SerdeContext
): TextOptions => {
  let contents: any = {
    __type: "TextOptions",
    AnalysisScheme: undefined,
    DefaultValue: undefined,
    HighlightEnabled: undefined,
    ReturnEnabled: undefined,
    SortEnabled: undefined,
    SourceField: undefined
  };
  if (output["AnalysisScheme"] !== undefined) {
    contents.AnalysisScheme = output["AnalysisScheme"];
  }
  if (output["DefaultValue"] !== undefined) {
    contents.DefaultValue = output["DefaultValue"];
  }
  if (output["HighlightEnabled"] !== undefined) {
    contents.HighlightEnabled = output["HighlightEnabled"] == "true";
  }
  if (output["ReturnEnabled"] !== undefined) {
    contents.ReturnEnabled = output["ReturnEnabled"] == "true";
  }
  if (output["SortEnabled"] !== undefined) {
    contents.SortEnabled = output["SortEnabled"] == "true";
  }
  if (output["SourceField"] !== undefined) {
    contents.SourceField = output["SourceField"];
  }
  return contents;
};

const deserializeAws_queryUpdateAvailabilityOptionsResponse = (
  output: any,
  context: __SerdeContext
): UpdateAvailabilityOptionsResponse => {
  let contents: any = {
    __type: "UpdateAvailabilityOptionsResponse",
    AvailabilityOptions: undefined
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
    __type: "UpdateDomainEndpointOptionsResponse",
    DomainEndpointOptions: undefined
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
    __type: "UpdateScalingParametersResponse",
    ScalingParameters: undefined
  };
  if (output["ScalingParameters"] !== undefined) {
    contents.ScalingParameters = deserializeAws_queryScalingParametersStatus(
      output["ScalingParameters"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryUpdateServiceAccessPoliciesResponse = (
  output: any,
  context: __SerdeContext
): UpdateServiceAccessPoliciesResponse => {
  let contents: any = {
    __type: "UpdateServiceAccessPoliciesResponse",
    AccessPolicies: undefined
  };
  if (output["AccessPolicies"] !== undefined) {
    contents.AccessPolicies = deserializeAws_queryAccessPoliciesStatus(
      output["AccessPolicies"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryValidationException = (
  output: any,
  context: __SerdeContext
): ValidationException => {
  let contents: any = {
    __type: "ValidationException",
    Code: undefined,
    Message: undefined
  };
  if (output["Code"] !== undefined) {
    contents.Code = output["Code"];
  }
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
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

const decodeEscapedXML = (str: string) =>
  str
    .replace(/&amp;/g, "&")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<");

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      const parsedObj = xmlParse(encoded, {
        attributeNamePrefix: "",
        ignoreAttributes: false,
        parseNodeValue: false,
        tagValueProcessor: (val, tagName) => decodeEscapedXML(val)
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

const buildFormUrlencodedString = (formEntries: {
  [key: string]: string;
}): string =>
  Object.entries(formEntries)
    .map(
      ([key, value]) =>
        __extendedEncodeURIComponent(key) +
        "=" +
        __extendedEncodeURIComponent(value)
    )
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
