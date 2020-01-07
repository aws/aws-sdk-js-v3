"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const fast_xml_parser_1 = require("fast-xml-parser");
async function serializeAws_queryBuildSuggestersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryBuildSuggestersRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "BuildSuggesters", Version: "2013-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryBuildSuggestersCommand = serializeAws_queryBuildSuggestersCommand;
async function serializeAws_queryCreateDomainCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryCreateDomainRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "CreateDomain", Version: "2013-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryCreateDomainCommand = serializeAws_queryCreateDomainCommand;
async function serializeAws_queryDefineAnalysisSchemeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDefineAnalysisSchemeRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DefineAnalysisScheme", Version: "2013-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDefineAnalysisSchemeCommand = serializeAws_queryDefineAnalysisSchemeCommand;
async function serializeAws_queryDefineExpressionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDefineExpressionRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DefineExpression", Version: "2013-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDefineExpressionCommand = serializeAws_queryDefineExpressionCommand;
async function serializeAws_queryDefineIndexFieldCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDefineIndexFieldRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DefineIndexField", Version: "2013-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDefineIndexFieldCommand = serializeAws_queryDefineIndexFieldCommand;
async function serializeAws_queryDefineSuggesterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDefineSuggesterRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DefineSuggester", Version: "2013-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDefineSuggesterCommand = serializeAws_queryDefineSuggesterCommand;
async function serializeAws_queryDeleteAnalysisSchemeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteAnalysisSchemeRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteAnalysisScheme", Version: "2013-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteAnalysisSchemeCommand = serializeAws_queryDeleteAnalysisSchemeCommand;
async function serializeAws_queryDeleteDomainCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteDomainRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteDomain", Version: "2013-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteDomainCommand = serializeAws_queryDeleteDomainCommand;
async function serializeAws_queryDeleteExpressionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteExpressionRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteExpression", Version: "2013-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteExpressionCommand = serializeAws_queryDeleteExpressionCommand;
async function serializeAws_queryDeleteIndexFieldCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteIndexFieldRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteIndexField", Version: "2013-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteIndexFieldCommand = serializeAws_queryDeleteIndexFieldCommand;
async function serializeAws_queryDeleteSuggesterCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDeleteSuggesterRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DeleteSuggester", Version: "2013-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDeleteSuggesterCommand = serializeAws_queryDeleteSuggesterCommand;
async function serializeAws_queryDescribeAnalysisSchemesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeAnalysisSchemesRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeAnalysisSchemes", Version: "2013-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeAnalysisSchemesCommand = serializeAws_queryDescribeAnalysisSchemesCommand;
async function serializeAws_queryDescribeAvailabilityOptionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeAvailabilityOptionsRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeAvailabilityOptions", Version: "2013-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeAvailabilityOptionsCommand = serializeAws_queryDescribeAvailabilityOptionsCommand;
async function serializeAws_queryDescribeDomainEndpointOptionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeDomainEndpointOptionsRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeDomainEndpointOptions", Version: "2013-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeDomainEndpointOptionsCommand = serializeAws_queryDescribeDomainEndpointOptionsCommand;
async function serializeAws_queryDescribeDomainsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeDomainsRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeDomains", Version: "2013-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeDomainsCommand = serializeAws_queryDescribeDomainsCommand;
async function serializeAws_queryDescribeExpressionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeExpressionsRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeExpressions", Version: "2013-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeExpressionsCommand = serializeAws_queryDescribeExpressionsCommand;
async function serializeAws_queryDescribeIndexFieldsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeIndexFieldsRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeIndexFields", Version: "2013-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeIndexFieldsCommand = serializeAws_queryDescribeIndexFieldsCommand;
async function serializeAws_queryDescribeScalingParametersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeScalingParametersRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeScalingParameters", Version: "2013-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeScalingParametersCommand = serializeAws_queryDescribeScalingParametersCommand;
async function serializeAws_queryDescribeServiceAccessPoliciesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeServiceAccessPoliciesRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeServiceAccessPolicies", Version: "2013-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeServiceAccessPoliciesCommand = serializeAws_queryDescribeServiceAccessPoliciesCommand;
async function serializeAws_queryDescribeSuggestersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryDescribeSuggestersRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "DescribeSuggesters", Version: "2013-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryDescribeSuggestersCommand = serializeAws_queryDescribeSuggestersCommand;
async function serializeAws_queryIndexDocumentsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryIndexDocumentsRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "IndexDocuments", Version: "2013-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryIndexDocumentsCommand = serializeAws_queryIndexDocumentsCommand;
async function serializeAws_queryListDomainNamesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    const body = buildFormUrlencodedString({
        Action: "ListDomainNames",
        Version: "2013-01-01"
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryListDomainNamesCommand = serializeAws_queryListDomainNamesCommand;
async function serializeAws_queryUpdateAvailabilityOptionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUpdateAvailabilityOptionsRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UpdateAvailabilityOptions", Version: "2013-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUpdateAvailabilityOptionsCommand = serializeAws_queryUpdateAvailabilityOptionsCommand;
async function serializeAws_queryUpdateDomainEndpointOptionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUpdateDomainEndpointOptionsRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UpdateDomainEndpointOptions", Version: "2013-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUpdateDomainEndpointOptionsCommand = serializeAws_queryUpdateDomainEndpointOptionsCommand;
async function serializeAws_queryUpdateScalingParametersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUpdateScalingParametersRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UpdateScalingParameters", Version: "2013-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUpdateScalingParametersCommand = serializeAws_queryUpdateScalingParametersCommand;
async function serializeAws_queryUpdateServiceAccessPoliciesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    let body;
    const entries = serializeAws_queryUpdateServiceAccessPoliciesRequest(input, context);
    body = buildFormUrlencodedString(Object.assign(Object.assign({}, entries), { Action: "UpdateServiceAccessPolicies", Version: "2013-01-01" }));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_queryUpdateServiceAccessPoliciesCommand = serializeAws_queryUpdateServiceAccessPoliciesCommand;
async function deserializeAws_queryBuildSuggestersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryBuildSuggestersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryBuildSuggestersResponse(data.BuildSuggestersResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BuildSuggestersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryBuildSuggestersCommand = deserializeAws_queryBuildSuggestersCommand;
async function deserializeAws_queryBuildSuggestersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.a9.cloudsearch.config2013#BaseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryBaseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.a9.cloudsearch.config2013#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.a9.cloudsearch.config2013#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryCreateDomainCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryCreateDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateDomainResponse(data.CreateDomainResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDomainResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryCreateDomainCommand = deserializeAws_queryCreateDomainCommand;
async function deserializeAws_queryCreateDomainCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.a9.cloudsearch.config2013#BaseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryBaseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.a9.cloudsearch.config2013#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.a9.cloudsearch.config2013#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDefineAnalysisSchemeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDefineAnalysisSchemeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDefineAnalysisSchemeResponse(data.DefineAnalysisSchemeResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DefineAnalysisSchemeResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDefineAnalysisSchemeCommand = deserializeAws_queryDefineAnalysisSchemeCommand;
async function deserializeAws_queryDefineAnalysisSchemeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.a9.cloudsearch.config2013#BaseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryBaseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.a9.cloudsearch.config2013#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTypeException":
        case "com.a9.cloudsearch.config2013#InvalidTypeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.a9.cloudsearch.config2013#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.a9.cloudsearch.config2013#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDefineExpressionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDefineExpressionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDefineExpressionResponse(data.DefineExpressionResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DefineExpressionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDefineExpressionCommand = deserializeAws_queryDefineExpressionCommand;
async function deserializeAws_queryDefineExpressionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.a9.cloudsearch.config2013#BaseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryBaseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.a9.cloudsearch.config2013#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTypeException":
        case "com.a9.cloudsearch.config2013#InvalidTypeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.a9.cloudsearch.config2013#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.a9.cloudsearch.config2013#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDefineIndexFieldCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDefineIndexFieldCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDefineIndexFieldResponse(data.DefineIndexFieldResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DefineIndexFieldResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDefineIndexFieldCommand = deserializeAws_queryDefineIndexFieldCommand;
async function deserializeAws_queryDefineIndexFieldCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.a9.cloudsearch.config2013#BaseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryBaseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.a9.cloudsearch.config2013#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTypeException":
        case "com.a9.cloudsearch.config2013#InvalidTypeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.a9.cloudsearch.config2013#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.a9.cloudsearch.config2013#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDefineSuggesterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDefineSuggesterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDefineSuggesterResponse(data.DefineSuggesterResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DefineSuggesterResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDefineSuggesterCommand = deserializeAws_queryDefineSuggesterCommand;
async function deserializeAws_queryDefineSuggesterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.a9.cloudsearch.config2013#BaseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryBaseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.a9.cloudsearch.config2013#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTypeException":
        case "com.a9.cloudsearch.config2013#InvalidTypeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.a9.cloudsearch.config2013#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.a9.cloudsearch.config2013#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteAnalysisSchemeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteAnalysisSchemeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteAnalysisSchemeResponse(data.DeleteAnalysisSchemeResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteAnalysisSchemeResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteAnalysisSchemeCommand = deserializeAws_queryDeleteAnalysisSchemeCommand;
async function deserializeAws_queryDeleteAnalysisSchemeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.a9.cloudsearch.config2013#BaseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryBaseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.a9.cloudsearch.config2013#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTypeException":
        case "com.a9.cloudsearch.config2013#InvalidTypeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.a9.cloudsearch.config2013#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteDomainCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteDomainResponse(data.DeleteDomainResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteDomainResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteDomainCommand = deserializeAws_queryDeleteDomainCommand;
async function deserializeAws_queryDeleteDomainCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.a9.cloudsearch.config2013#BaseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryBaseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.a9.cloudsearch.config2013#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteExpressionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteExpressionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteExpressionResponse(data.DeleteExpressionResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteExpressionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteExpressionCommand = deserializeAws_queryDeleteExpressionCommand;
async function deserializeAws_queryDeleteExpressionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.a9.cloudsearch.config2013#BaseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryBaseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.a9.cloudsearch.config2013#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTypeException":
        case "com.a9.cloudsearch.config2013#InvalidTypeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.a9.cloudsearch.config2013#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteIndexFieldCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteIndexFieldCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteIndexFieldResponse(data.DeleteIndexFieldResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteIndexFieldResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteIndexFieldCommand = deserializeAws_queryDeleteIndexFieldCommand;
async function deserializeAws_queryDeleteIndexFieldCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.a9.cloudsearch.config2013#BaseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryBaseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.a9.cloudsearch.config2013#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTypeException":
        case "com.a9.cloudsearch.config2013#InvalidTypeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.a9.cloudsearch.config2013#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDeleteSuggesterCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDeleteSuggesterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteSuggesterResponse(data.DeleteSuggesterResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteSuggesterResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDeleteSuggesterCommand = deserializeAws_queryDeleteSuggesterCommand;
async function deserializeAws_queryDeleteSuggesterCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.a9.cloudsearch.config2013#BaseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryBaseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.a9.cloudsearch.config2013#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTypeException":
        case "com.a9.cloudsearch.config2013#InvalidTypeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.a9.cloudsearch.config2013#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDescribeAnalysisSchemesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeAnalysisSchemesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeAnalysisSchemesResponse(data.DescribeAnalysisSchemesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAnalysisSchemesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeAnalysisSchemesCommand = deserializeAws_queryDescribeAnalysisSchemesCommand;
async function deserializeAws_queryDescribeAnalysisSchemesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.a9.cloudsearch.config2013#BaseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryBaseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.a9.cloudsearch.config2013#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.a9.cloudsearch.config2013#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDescribeAvailabilityOptionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeAvailabilityOptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeAvailabilityOptionsResponse(data.DescribeAvailabilityOptionsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeAvailabilityOptionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeAvailabilityOptionsCommand = deserializeAws_queryDescribeAvailabilityOptionsCommand;
async function deserializeAws_queryDescribeAvailabilityOptionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.a9.cloudsearch.config2013#BaseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryBaseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DisabledOperationException":
        case "com.a9.cloudsearch.config2013#DisabledOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDisabledOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.a9.cloudsearch.config2013#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTypeException":
        case "com.a9.cloudsearch.config2013#InvalidTypeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.a9.cloudsearch.config2013#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.a9.cloudsearch.config2013#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDescribeDomainEndpointOptionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeDomainEndpointOptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeDomainEndpointOptionsResponse(data.DescribeDomainEndpointOptionsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeDomainEndpointOptionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeDomainEndpointOptionsCommand = deserializeAws_queryDescribeDomainEndpointOptionsCommand;
async function deserializeAws_queryDescribeDomainEndpointOptionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.a9.cloudsearch.config2013#BaseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryBaseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DisabledOperationException":
        case "com.a9.cloudsearch.config2013#DisabledOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDisabledOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.a9.cloudsearch.config2013#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.a9.cloudsearch.config2013#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.a9.cloudsearch.config2013#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDescribeDomainsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeDomainsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeDomainsResponse(data.DescribeDomainsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeDomainsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeDomainsCommand = deserializeAws_queryDescribeDomainsCommand;
async function deserializeAws_queryDescribeDomainsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.a9.cloudsearch.config2013#BaseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryBaseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.a9.cloudsearch.config2013#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDescribeExpressionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeExpressionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeExpressionsResponse(data.DescribeExpressionsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeExpressionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeExpressionsCommand = deserializeAws_queryDescribeExpressionsCommand;
async function deserializeAws_queryDescribeExpressionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.a9.cloudsearch.config2013#BaseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryBaseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.a9.cloudsearch.config2013#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.a9.cloudsearch.config2013#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDescribeIndexFieldsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeIndexFieldsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeIndexFieldsResponse(data.DescribeIndexFieldsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeIndexFieldsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeIndexFieldsCommand = deserializeAws_queryDescribeIndexFieldsCommand;
async function deserializeAws_queryDescribeIndexFieldsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.a9.cloudsearch.config2013#BaseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryBaseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.a9.cloudsearch.config2013#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.a9.cloudsearch.config2013#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDescribeScalingParametersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeScalingParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeScalingParametersResponse(data.DescribeScalingParametersResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeScalingParametersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeScalingParametersCommand = deserializeAws_queryDescribeScalingParametersCommand;
async function deserializeAws_queryDescribeScalingParametersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.a9.cloudsearch.config2013#BaseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryBaseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.a9.cloudsearch.config2013#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.a9.cloudsearch.config2013#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDescribeServiceAccessPoliciesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeServiceAccessPoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeServiceAccessPoliciesResponse(data.DescribeServiceAccessPoliciesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeServiceAccessPoliciesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeServiceAccessPoliciesCommand = deserializeAws_queryDescribeServiceAccessPoliciesCommand;
async function deserializeAws_queryDescribeServiceAccessPoliciesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.a9.cloudsearch.config2013#BaseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryBaseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.a9.cloudsearch.config2013#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.a9.cloudsearch.config2013#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryDescribeSuggestersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryDescribeSuggestersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeSuggestersResponse(data.DescribeSuggestersResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeSuggestersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryDescribeSuggestersCommand = deserializeAws_queryDescribeSuggestersCommand;
async function deserializeAws_queryDescribeSuggestersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.a9.cloudsearch.config2013#BaseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryBaseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.a9.cloudsearch.config2013#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.a9.cloudsearch.config2013#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryIndexDocumentsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryIndexDocumentsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryIndexDocumentsResponse(data.IndexDocumentsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "IndexDocumentsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryIndexDocumentsCommand = deserializeAws_queryIndexDocumentsCommand;
async function deserializeAws_queryIndexDocumentsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.a9.cloudsearch.config2013#BaseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryBaseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.a9.cloudsearch.config2013#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.a9.cloudsearch.config2013#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryListDomainNamesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryListDomainNamesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListDomainNamesResponse(data.ListDomainNamesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListDomainNamesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryListDomainNamesCommand = deserializeAws_queryListDomainNamesCommand;
async function deserializeAws_queryListDomainNamesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.a9.cloudsearch.config2013#BaseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryBaseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryUpdateAvailabilityOptionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUpdateAvailabilityOptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUpdateAvailabilityOptionsResponse(data.UpdateAvailabilityOptionsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateAvailabilityOptionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryUpdateAvailabilityOptionsCommand = deserializeAws_queryUpdateAvailabilityOptionsCommand;
async function deserializeAws_queryUpdateAvailabilityOptionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.a9.cloudsearch.config2013#BaseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryBaseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DisabledOperationException":
        case "com.a9.cloudsearch.config2013#DisabledOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDisabledOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.a9.cloudsearch.config2013#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTypeException":
        case "com.a9.cloudsearch.config2013#InvalidTypeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.a9.cloudsearch.config2013#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.a9.cloudsearch.config2013#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.a9.cloudsearch.config2013#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryUpdateDomainEndpointOptionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUpdateDomainEndpointOptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUpdateDomainEndpointOptionsResponse(data.UpdateDomainEndpointOptionsResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateDomainEndpointOptionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryUpdateDomainEndpointOptionsCommand = deserializeAws_queryUpdateDomainEndpointOptionsCommand;
async function deserializeAws_queryUpdateDomainEndpointOptionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.a9.cloudsearch.config2013#BaseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryBaseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DisabledOperationException":
        case "com.a9.cloudsearch.config2013#DisabledOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryDisabledOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.a9.cloudsearch.config2013#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTypeException":
        case "com.a9.cloudsearch.config2013#InvalidTypeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.a9.cloudsearch.config2013#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.a9.cloudsearch.config2013#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.a9.cloudsearch.config2013#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryUpdateScalingParametersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUpdateScalingParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUpdateScalingParametersResponse(data.UpdateScalingParametersResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateScalingParametersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryUpdateScalingParametersCommand = deserializeAws_queryUpdateScalingParametersCommand;
async function deserializeAws_queryUpdateScalingParametersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.a9.cloudsearch.config2013#BaseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryBaseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.a9.cloudsearch.config2013#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTypeException":
        case "com.a9.cloudsearch.config2013#InvalidTypeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.a9.cloudsearch.config2013#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.a9.cloudsearch.config2013#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_queryUpdateServiceAccessPoliciesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_queryUpdateServiceAccessPoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUpdateServiceAccessPoliciesResponse(data.UpdateServiceAccessPoliciesResult, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateServiceAccessPoliciesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_queryUpdateServiceAccessPoliciesCommand = deserializeAws_queryUpdateServiceAccessPoliciesCommand;
async function deserializeAws_queryUpdateServiceAccessPoliciesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.a9.cloudsearch.config2013#BaseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryBaseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalException":
        case "com.a9.cloudsearch.config2013#InternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTypeException":
        case "com.a9.cloudsearch.config2013#InvalidTypeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.a9.cloudsearch.config2013#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.a9.cloudsearch.config2013#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody.Error), { name: `${errorCode}`, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
const deserializeAws_queryBaseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryBaseException(body.Error, context);
    const contents = Object.assign({ name: "BaseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryDisabledOperationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDisabledOperationException(body.Error, context);
    const contents = Object.assign({ name: "DisabledOperationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInternalExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInternalException(body.Error, context);
    const contents = Object.assign({ name: "InternalException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryInvalidTypeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidTypeException(body.Error, context);
    const contents = Object.assign({ name: "InvalidTypeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryLimitExceededException(body.Error, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryResourceNotFoundException(body.Error, context);
    const contents = Object.assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_queryValidationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryValidationException(body.Error, context);
    const contents = Object.assign({ name: "ValidationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_queryAnalysisOptions = (input, context) => {
    const entries = {};
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
const serializeAws_queryAnalysisScheme = (input, context) => {
    const entries = {};
    if (input.AnalysisOptions !== undefined) {
        const memberEntries = serializeAws_queryAnalysisOptions(input.AnalysisOptions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `AnalysisOptions.${key}`;
            entries[loc] = memberEntries[key];
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
const serializeAws_queryBuildSuggestersRequest = (input, context) => {
    const entries = {};
    if (input.DomainName !== undefined) {
        entries["DomainName"] = input.DomainName;
    }
    return entries;
};
const serializeAws_queryCreateDomainRequest = (input, context) => {
    const entries = {};
    if (input.DomainName !== undefined) {
        entries["DomainName"] = input.DomainName;
    }
    return entries;
};
const serializeAws_queryDateArrayOptions = (input, context) => {
    const entries = {};
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
const serializeAws_queryDateOptions = (input, context) => {
    const entries = {};
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
const serializeAws_queryDefineAnalysisSchemeRequest = (input, context) => {
    const entries = {};
    if (input.AnalysisScheme !== undefined) {
        const memberEntries = serializeAws_queryAnalysisScheme(input.AnalysisScheme, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `AnalysisScheme.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.DomainName !== undefined) {
        entries["DomainName"] = input.DomainName;
    }
    return entries;
};
const serializeAws_queryDefineExpressionRequest = (input, context) => {
    const entries = {};
    if (input.DomainName !== undefined) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.Expression !== undefined) {
        const memberEntries = serializeAws_queryExpression(input.Expression, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Expression.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDefineIndexFieldRequest = (input, context) => {
    const entries = {};
    if (input.DomainName !== undefined) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.IndexField !== undefined) {
        const memberEntries = serializeAws_queryIndexField(input.IndexField, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `IndexField.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDefineSuggesterRequest = (input, context) => {
    const entries = {};
    if (input.DomainName !== undefined) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.Suggester !== undefined) {
        const memberEntries = serializeAws_querySuggester(input.Suggester, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `Suggester.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDeleteAnalysisSchemeRequest = (input, context) => {
    const entries = {};
    if (input.AnalysisSchemeName !== undefined) {
        entries["AnalysisSchemeName"] = input.AnalysisSchemeName;
    }
    if (input.DomainName !== undefined) {
        entries["DomainName"] = input.DomainName;
    }
    return entries;
};
const serializeAws_queryDeleteDomainRequest = (input, context) => {
    const entries = {};
    if (input.DomainName !== undefined) {
        entries["DomainName"] = input.DomainName;
    }
    return entries;
};
const serializeAws_queryDeleteExpressionRequest = (input, context) => {
    const entries = {};
    if (input.DomainName !== undefined) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.ExpressionName !== undefined) {
        entries["ExpressionName"] = input.ExpressionName;
    }
    return entries;
};
const serializeAws_queryDeleteIndexFieldRequest = (input, context) => {
    const entries = {};
    if (input.DomainName !== undefined) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.IndexFieldName !== undefined) {
        entries["IndexFieldName"] = input.IndexFieldName;
    }
    return entries;
};
const serializeAws_queryDeleteSuggesterRequest = (input, context) => {
    const entries = {};
    if (input.DomainName !== undefined) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.SuggesterName !== undefined) {
        entries["SuggesterName"] = input.SuggesterName;
    }
    return entries;
};
const serializeAws_queryDescribeAnalysisSchemesRequest = (input, context) => {
    const entries = {};
    if (input.AnalysisSchemeNames !== undefined) {
        const memberEntries = serializeAws_queryStandardNameList(input.AnalysisSchemeNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `AnalysisSchemeNames.${key}`;
            entries[loc] = memberEntries[key];
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
const serializeAws_queryDescribeAvailabilityOptionsRequest = (input, context) => {
    const entries = {};
    if (input.Deployed !== undefined) {
        entries["Deployed"] = input.Deployed;
    }
    if (input.DomainName !== undefined) {
        entries["DomainName"] = input.DomainName;
    }
    return entries;
};
const serializeAws_queryDescribeDomainEndpointOptionsRequest = (input, context) => {
    const entries = {};
    if (input.Deployed !== undefined) {
        entries["Deployed"] = input.Deployed;
    }
    if (input.DomainName !== undefined) {
        entries["DomainName"] = input.DomainName;
    }
    return entries;
};
const serializeAws_queryDescribeDomainsRequest = (input, context) => {
    const entries = {};
    if (input.DomainNames !== undefined) {
        const memberEntries = serializeAws_queryDomainNameList(input.DomainNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `DomainNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDescribeExpressionsRequest = (input, context) => {
    const entries = {};
    if (input.Deployed !== undefined) {
        entries["Deployed"] = input.Deployed;
    }
    if (input.DomainName !== undefined) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.ExpressionNames !== undefined) {
        const memberEntries = serializeAws_queryStandardNameList(input.ExpressionNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ExpressionNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDescribeIndexFieldsRequest = (input, context) => {
    const entries = {};
    if (input.Deployed !== undefined) {
        entries["Deployed"] = input.Deployed;
    }
    if (input.DomainName !== undefined) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.FieldNames !== undefined) {
        const memberEntries = serializeAws_queryDynamicFieldNameList(input.FieldNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `FieldNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDescribeScalingParametersRequest = (input, context) => {
    const entries = {};
    if (input.DomainName !== undefined) {
        entries["DomainName"] = input.DomainName;
    }
    return entries;
};
const serializeAws_queryDescribeServiceAccessPoliciesRequest = (input, context) => {
    const entries = {};
    if (input.Deployed !== undefined) {
        entries["Deployed"] = input.Deployed;
    }
    if (input.DomainName !== undefined) {
        entries["DomainName"] = input.DomainName;
    }
    return entries;
};
const serializeAws_queryDescribeSuggestersRequest = (input, context) => {
    const entries = {};
    if (input.Deployed !== undefined) {
        entries["Deployed"] = input.Deployed;
    }
    if (input.DomainName !== undefined) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.SuggesterNames !== undefined) {
        const memberEntries = serializeAws_queryStandardNameList(input.SuggesterNames, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `SuggesterNames.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryDocumentSuggesterOptions = (input, context) => {
    const entries = {};
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
const serializeAws_queryDomainEndpointOptions = (input, context) => {
    const entries = {};
    if (input.EnforceHTTPS !== undefined) {
        entries["EnforceHTTPS"] = input.EnforceHTTPS;
    }
    if (input.TLSSecurityPolicy !== undefined) {
        entries["TLSSecurityPolicy"] = input.TLSSecurityPolicy;
    }
    return entries;
};
const serializeAws_queryDomainNameList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryDoubleArrayOptions = (input, context) => {
    const entries = {};
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
const serializeAws_queryDoubleOptions = (input, context) => {
    const entries = {};
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
const serializeAws_queryDynamicFieldNameList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryExpression = (input, context) => {
    const entries = {};
    if (input.ExpressionName !== undefined) {
        entries["ExpressionName"] = input.ExpressionName;
    }
    if (input.ExpressionValue !== undefined) {
        entries["ExpressionValue"] = input.ExpressionValue;
    }
    return entries;
};
const serializeAws_queryIndexDocumentsRequest = (input, context) => {
    const entries = {};
    if (input.DomainName !== undefined) {
        entries["DomainName"] = input.DomainName;
    }
    return entries;
};
const serializeAws_queryIndexField = (input, context) => {
    const entries = {};
    if (input.DateArrayOptions !== undefined) {
        const memberEntries = serializeAws_queryDateArrayOptions(input.DateArrayOptions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `DateArrayOptions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.DateOptions !== undefined) {
        const memberEntries = serializeAws_queryDateOptions(input.DateOptions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `DateOptions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.DoubleArrayOptions !== undefined) {
        const memberEntries = serializeAws_queryDoubleArrayOptions(input.DoubleArrayOptions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `DoubleArrayOptions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.DoubleOptions !== undefined) {
        const memberEntries = serializeAws_queryDoubleOptions(input.DoubleOptions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `DoubleOptions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.IndexFieldName !== undefined) {
        entries["IndexFieldName"] = input.IndexFieldName;
    }
    if (input.IndexFieldType !== undefined) {
        entries["IndexFieldType"] = input.IndexFieldType;
    }
    if (input.IntArrayOptions !== undefined) {
        const memberEntries = serializeAws_queryIntArrayOptions(input.IntArrayOptions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `IntArrayOptions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.IntOptions !== undefined) {
        const memberEntries = serializeAws_queryIntOptions(input.IntOptions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `IntOptions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.LatLonOptions !== undefined) {
        const memberEntries = serializeAws_queryLatLonOptions(input.LatLonOptions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `LatLonOptions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.LiteralArrayOptions !== undefined) {
        const memberEntries = serializeAws_queryLiteralArrayOptions(input.LiteralArrayOptions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `LiteralArrayOptions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.LiteralOptions !== undefined) {
        const memberEntries = serializeAws_queryLiteralOptions(input.LiteralOptions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `LiteralOptions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TextArrayOptions !== undefined) {
        const memberEntries = serializeAws_queryTextArrayOptions(input.TextArrayOptions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TextArrayOptions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.TextOptions !== undefined) {
        const memberEntries = serializeAws_queryTextOptions(input.TextOptions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `TextOptions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryIntArrayOptions = (input, context) => {
    const entries = {};
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
const serializeAws_queryIntOptions = (input, context) => {
    const entries = {};
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
const serializeAws_queryLatLonOptions = (input, context) => {
    const entries = {};
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
const serializeAws_queryLiteralArrayOptions = (input, context) => {
    const entries = {};
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
const serializeAws_queryLiteralOptions = (input, context) => {
    const entries = {};
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
const serializeAws_queryScalingParameters = (input, context) => {
    const entries = {};
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
const serializeAws_queryStandardNameList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_querySuggester = (input, context) => {
    const entries = {};
    if (input.DocumentSuggesterOptions !== undefined) {
        const memberEntries = serializeAws_queryDocumentSuggesterOptions(input.DocumentSuggesterOptions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `DocumentSuggesterOptions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.SuggesterName !== undefined) {
        entries["SuggesterName"] = input.SuggesterName;
    }
    return entries;
};
const serializeAws_queryTextArrayOptions = (input, context) => {
    const entries = {};
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
const serializeAws_queryTextOptions = (input, context) => {
    const entries = {};
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
const serializeAws_queryUpdateAvailabilityOptionsRequest = (input, context) => {
    const entries = {};
    if (input.DomainName !== undefined) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.MultiAZ !== undefined) {
        entries["MultiAZ"] = input.MultiAZ;
    }
    return entries;
};
const serializeAws_queryUpdateDomainEndpointOptionsRequest = (input, context) => {
    const entries = {};
    if (input.DomainEndpointOptions !== undefined) {
        const memberEntries = serializeAws_queryDomainEndpointOptions(input.DomainEndpointOptions, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `DomainEndpointOptions.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    if (input.DomainName !== undefined) {
        entries["DomainName"] = input.DomainName;
    }
    return entries;
};
const serializeAws_queryUpdateScalingParametersRequest = (input, context) => {
    const entries = {};
    if (input.DomainName !== undefined) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.ScalingParameters !== undefined) {
        const memberEntries = serializeAws_queryScalingParameters(input.ScalingParameters, context);
        Object.keys(memberEntries).forEach(key => {
            const loc = `ScalingParameters.${key}`;
            entries[loc] = memberEntries[key];
        });
    }
    return entries;
};
const serializeAws_queryUpdateServiceAccessPoliciesRequest = (input, context) => {
    const entries = {};
    if (input.AccessPolicies !== undefined) {
        entries["AccessPolicies"] = input.AccessPolicies;
    }
    if (input.DomainName !== undefined) {
        entries["DomainName"] = input.DomainName;
    }
    return entries;
};
const deserializeAws_queryAccessPoliciesStatus = (output, context) => {
    let contents = {
        __type: "AccessPoliciesStatus",
        Options: undefined,
        Status: undefined
    };
    if (output["Options"] !== undefined) {
        contents.Options = output["Options"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = deserializeAws_queryOptionStatus(output["Status"], context);
    }
    return contents;
};
const deserializeAws_queryAnalysisOptions = (output, context) => {
    let contents = {
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
const deserializeAws_queryAnalysisScheme = (output, context) => {
    let contents = {
        __type: "AnalysisScheme",
        AnalysisOptions: undefined,
        AnalysisSchemeLanguage: undefined,
        AnalysisSchemeName: undefined
    };
    if (output["AnalysisOptions"] !== undefined) {
        contents.AnalysisOptions = deserializeAws_queryAnalysisOptions(output["AnalysisOptions"], context);
    }
    if (output["AnalysisSchemeLanguage"] !== undefined) {
        contents.AnalysisSchemeLanguage = output["AnalysisSchemeLanguage"];
    }
    if (output["AnalysisSchemeName"] !== undefined) {
        contents.AnalysisSchemeName = output["AnalysisSchemeName"];
    }
    return contents;
};
const deserializeAws_queryAnalysisSchemeStatus = (output, context) => {
    let contents = {
        __type: "AnalysisSchemeStatus",
        Options: undefined,
        Status: undefined
    };
    if (output["Options"] !== undefined) {
        contents.Options = deserializeAws_queryAnalysisScheme(output["Options"], context);
    }
    if (output["Status"] !== undefined) {
        contents.Status = deserializeAws_queryOptionStatus(output["Status"], context);
    }
    return contents;
};
const deserializeAws_queryAnalysisSchemeStatusList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryAnalysisSchemeStatus(entry, context));
    });
    return contents;
};
const deserializeAws_queryAvailabilityOptionsStatus = (output, context) => {
    let contents = {
        __type: "AvailabilityOptionsStatus",
        Options: undefined,
        Status: undefined
    };
    if (output["Options"] !== undefined) {
        contents.Options = output["Options"] == "true";
    }
    if (output["Status"] !== undefined) {
        contents.Status = deserializeAws_queryOptionStatus(output["Status"], context);
    }
    return contents;
};
const deserializeAws_queryBaseException = (output, context) => {
    let contents = {
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
const deserializeAws_queryBuildSuggestersResponse = (output, context) => {
    let contents = {
        __type: "BuildSuggestersResponse",
        FieldNames: undefined
    };
    if (output.FieldNames === "") {
        contents.FieldNames = [];
    }
    if (output["FieldNames"] !== undefined &&
        output["FieldNames"]["member"] !== undefined) {
        const wrappedItem = output["FieldNames"]["member"] instanceof Array
            ? output["FieldNames"]["member"]
            : [output["FieldNames"]["member"]];
        contents.FieldNames = deserializeAws_queryFieldNameList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryCreateDomainResponse = (output, context) => {
    let contents = {
        __type: "CreateDomainResponse",
        DomainStatus: undefined
    };
    if (output["DomainStatus"] !== undefined) {
        contents.DomainStatus = deserializeAws_queryDomainStatus(output["DomainStatus"], context);
    }
    return contents;
};
const deserializeAws_queryDateArrayOptions = (output, context) => {
    let contents = {
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
const deserializeAws_queryDateOptions = (output, context) => {
    let contents = {
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
const deserializeAws_queryDefineAnalysisSchemeResponse = (output, context) => {
    let contents = {
        __type: "DefineAnalysisSchemeResponse",
        AnalysisScheme: undefined
    };
    if (output["AnalysisScheme"] !== undefined) {
        contents.AnalysisScheme = deserializeAws_queryAnalysisSchemeStatus(output["AnalysisScheme"], context);
    }
    return contents;
};
const deserializeAws_queryDefineExpressionResponse = (output, context) => {
    let contents = {
        __type: "DefineExpressionResponse",
        Expression: undefined
    };
    if (output["Expression"] !== undefined) {
        contents.Expression = deserializeAws_queryExpressionStatus(output["Expression"], context);
    }
    return contents;
};
const deserializeAws_queryDefineIndexFieldResponse = (output, context) => {
    let contents = {
        __type: "DefineIndexFieldResponse",
        IndexField: undefined
    };
    if (output["IndexField"] !== undefined) {
        contents.IndexField = deserializeAws_queryIndexFieldStatus(output["IndexField"], context);
    }
    return contents;
};
const deserializeAws_queryDefineSuggesterResponse = (output, context) => {
    let contents = {
        __type: "DefineSuggesterResponse",
        Suggester: undefined
    };
    if (output["Suggester"] !== undefined) {
        contents.Suggester = deserializeAws_querySuggesterStatus(output["Suggester"], context);
    }
    return contents;
};
const deserializeAws_queryDeleteAnalysisSchemeResponse = (output, context) => {
    let contents = {
        __type: "DeleteAnalysisSchemeResponse",
        AnalysisScheme: undefined
    };
    if (output["AnalysisScheme"] !== undefined) {
        contents.AnalysisScheme = deserializeAws_queryAnalysisSchemeStatus(output["AnalysisScheme"], context);
    }
    return contents;
};
const deserializeAws_queryDeleteDomainResponse = (output, context) => {
    let contents = {
        __type: "DeleteDomainResponse",
        DomainStatus: undefined
    };
    if (output["DomainStatus"] !== undefined) {
        contents.DomainStatus = deserializeAws_queryDomainStatus(output["DomainStatus"], context);
    }
    return contents;
};
const deserializeAws_queryDeleteExpressionResponse = (output, context) => {
    let contents = {
        __type: "DeleteExpressionResponse",
        Expression: undefined
    };
    if (output["Expression"] !== undefined) {
        contents.Expression = deserializeAws_queryExpressionStatus(output["Expression"], context);
    }
    return contents;
};
const deserializeAws_queryDeleteIndexFieldResponse = (output, context) => {
    let contents = {
        __type: "DeleteIndexFieldResponse",
        IndexField: undefined
    };
    if (output["IndexField"] !== undefined) {
        contents.IndexField = deserializeAws_queryIndexFieldStatus(output["IndexField"], context);
    }
    return contents;
};
const deserializeAws_queryDeleteSuggesterResponse = (output, context) => {
    let contents = {
        __type: "DeleteSuggesterResponse",
        Suggester: undefined
    };
    if (output["Suggester"] !== undefined) {
        contents.Suggester = deserializeAws_querySuggesterStatus(output["Suggester"], context);
    }
    return contents;
};
const deserializeAws_queryDescribeAnalysisSchemesResponse = (output, context) => {
    let contents = {
        __type: "DescribeAnalysisSchemesResponse",
        AnalysisSchemes: undefined
    };
    if (output.AnalysisSchemes === "") {
        contents.AnalysisSchemes = [];
    }
    if (output["AnalysisSchemes"] !== undefined &&
        output["AnalysisSchemes"]["member"] !== undefined) {
        const wrappedItem = output["AnalysisSchemes"]["member"] instanceof Array
            ? output["AnalysisSchemes"]["member"]
            : [output["AnalysisSchemes"]["member"]];
        contents.AnalysisSchemes = deserializeAws_queryAnalysisSchemeStatusList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDescribeAvailabilityOptionsResponse = (output, context) => {
    let contents = {
        __type: "DescribeAvailabilityOptionsResponse",
        AvailabilityOptions: undefined
    };
    if (output["AvailabilityOptions"] !== undefined) {
        contents.AvailabilityOptions = deserializeAws_queryAvailabilityOptionsStatus(output["AvailabilityOptions"], context);
    }
    return contents;
};
const deserializeAws_queryDescribeDomainEndpointOptionsResponse = (output, context) => {
    let contents = {
        __type: "DescribeDomainEndpointOptionsResponse",
        DomainEndpointOptions: undefined
    };
    if (output["DomainEndpointOptions"] !== undefined) {
        contents.DomainEndpointOptions = deserializeAws_queryDomainEndpointOptionsStatus(output["DomainEndpointOptions"], context);
    }
    return contents;
};
const deserializeAws_queryDescribeDomainsResponse = (output, context) => {
    let contents = {
        __type: "DescribeDomainsResponse",
        DomainStatusList: undefined
    };
    if (output.DomainStatusList === "") {
        contents.DomainStatusList = [];
    }
    if (output["DomainStatusList"] !== undefined &&
        output["DomainStatusList"]["member"] !== undefined) {
        const wrappedItem = output["DomainStatusList"]["member"] instanceof Array
            ? output["DomainStatusList"]["member"]
            : [output["DomainStatusList"]["member"]];
        contents.DomainStatusList = deserializeAws_queryDomainStatusList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDescribeExpressionsResponse = (output, context) => {
    let contents = {
        __type: "DescribeExpressionsResponse",
        Expressions: undefined
    };
    if (output.Expressions === "") {
        contents.Expressions = [];
    }
    if (output["Expressions"] !== undefined &&
        output["Expressions"]["member"] !== undefined) {
        const wrappedItem = output["Expressions"]["member"] instanceof Array
            ? output["Expressions"]["member"]
            : [output["Expressions"]["member"]];
        contents.Expressions = deserializeAws_queryExpressionStatusList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDescribeIndexFieldsResponse = (output, context) => {
    let contents = {
        __type: "DescribeIndexFieldsResponse",
        IndexFields: undefined
    };
    if (output.IndexFields === "") {
        contents.IndexFields = [];
    }
    if (output["IndexFields"] !== undefined &&
        output["IndexFields"]["member"] !== undefined) {
        const wrappedItem = output["IndexFields"]["member"] instanceof Array
            ? output["IndexFields"]["member"]
            : [output["IndexFields"]["member"]];
        contents.IndexFields = deserializeAws_queryIndexFieldStatusList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDescribeScalingParametersResponse = (output, context) => {
    let contents = {
        __type: "DescribeScalingParametersResponse",
        ScalingParameters: undefined
    };
    if (output["ScalingParameters"] !== undefined) {
        contents.ScalingParameters = deserializeAws_queryScalingParametersStatus(output["ScalingParameters"], context);
    }
    return contents;
};
const deserializeAws_queryDescribeServiceAccessPoliciesResponse = (output, context) => {
    let contents = {
        __type: "DescribeServiceAccessPoliciesResponse",
        AccessPolicies: undefined
    };
    if (output["AccessPolicies"] !== undefined) {
        contents.AccessPolicies = deserializeAws_queryAccessPoliciesStatus(output["AccessPolicies"], context);
    }
    return contents;
};
const deserializeAws_queryDescribeSuggestersResponse = (output, context) => {
    let contents = {
        __type: "DescribeSuggestersResponse",
        Suggesters: undefined
    };
    if (output.Suggesters === "") {
        contents.Suggesters = [];
    }
    if (output["Suggesters"] !== undefined &&
        output["Suggesters"]["member"] !== undefined) {
        const wrappedItem = output["Suggesters"]["member"] instanceof Array
            ? output["Suggesters"]["member"]
            : [output["Suggesters"]["member"]];
        contents.Suggesters = deserializeAws_querySuggesterStatusList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryDisabledOperationException = (output, context) => {
    let contents = {
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
const deserializeAws_queryDocumentSuggesterOptions = (output, context) => {
    let contents = {
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
const deserializeAws_queryDomainEndpointOptions = (output, context) => {
    let contents = {
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
const deserializeAws_queryDomainEndpointOptionsStatus = (output, context) => {
    let contents = {
        __type: "DomainEndpointOptionsStatus",
        Options: undefined,
        Status: undefined
    };
    if (output["Options"] !== undefined) {
        contents.Options = deserializeAws_queryDomainEndpointOptions(output["Options"], context);
    }
    if (output["Status"] !== undefined) {
        contents.Status = deserializeAws_queryOptionStatus(output["Status"], context);
    }
    return contents;
};
const deserializeAws_queryDomainNameMap = (output, context) => {
    const mapParams = {};
    output.forEach((pair) => {
        mapParams[pair["key"]] = pair["value"];
    });
    return mapParams;
};
const deserializeAws_queryDomainStatus = (output, context) => {
    let contents = {
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
        contents.DocService = deserializeAws_queryServiceEndpoint(output["DocService"], context);
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
        contents.SearchService = deserializeAws_queryServiceEndpoint(output["SearchService"], context);
    }
    return contents;
};
const deserializeAws_queryDomainStatusList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryDomainStatus(entry, context));
    });
    return contents;
};
const deserializeAws_queryDoubleArrayOptions = (output, context) => {
    let contents = {
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
const deserializeAws_queryDoubleOptions = (output, context) => {
    let contents = {
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
const deserializeAws_queryExpression = (output, context) => {
    let contents = {
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
const deserializeAws_queryExpressionStatus = (output, context) => {
    let contents = {
        __type: "ExpressionStatus",
        Options: undefined,
        Status: undefined
    };
    if (output["Options"] !== undefined) {
        contents.Options = deserializeAws_queryExpression(output["Options"], context);
    }
    if (output["Status"] !== undefined) {
        contents.Status = deserializeAws_queryOptionStatus(output["Status"], context);
    }
    return contents;
};
const deserializeAws_queryExpressionStatusList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryExpressionStatus(entry, context));
    });
    return contents;
};
const deserializeAws_queryFieldNameList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(entry);
    });
    return contents;
};
const deserializeAws_queryIndexDocumentsResponse = (output, context) => {
    let contents = {
        __type: "IndexDocumentsResponse",
        FieldNames: undefined
    };
    if (output.FieldNames === "") {
        contents.FieldNames = [];
    }
    if (output["FieldNames"] !== undefined &&
        output["FieldNames"]["member"] !== undefined) {
        const wrappedItem = output["FieldNames"]["member"] instanceof Array
            ? output["FieldNames"]["member"]
            : [output["FieldNames"]["member"]];
        contents.FieldNames = deserializeAws_queryFieldNameList(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryIndexField = (output, context) => {
    let contents = {
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
        contents.DateArrayOptions = deserializeAws_queryDateArrayOptions(output["DateArrayOptions"], context);
    }
    if (output["DateOptions"] !== undefined) {
        contents.DateOptions = deserializeAws_queryDateOptions(output["DateOptions"], context);
    }
    if (output["DoubleArrayOptions"] !== undefined) {
        contents.DoubleArrayOptions = deserializeAws_queryDoubleArrayOptions(output["DoubleArrayOptions"], context);
    }
    if (output["DoubleOptions"] !== undefined) {
        contents.DoubleOptions = deserializeAws_queryDoubleOptions(output["DoubleOptions"], context);
    }
    if (output["IndexFieldName"] !== undefined) {
        contents.IndexFieldName = output["IndexFieldName"];
    }
    if (output["IndexFieldType"] !== undefined) {
        contents.IndexFieldType = output["IndexFieldType"];
    }
    if (output["IntArrayOptions"] !== undefined) {
        contents.IntArrayOptions = deserializeAws_queryIntArrayOptions(output["IntArrayOptions"], context);
    }
    if (output["IntOptions"] !== undefined) {
        contents.IntOptions = deserializeAws_queryIntOptions(output["IntOptions"], context);
    }
    if (output["LatLonOptions"] !== undefined) {
        contents.LatLonOptions = deserializeAws_queryLatLonOptions(output["LatLonOptions"], context);
    }
    if (output["LiteralArrayOptions"] !== undefined) {
        contents.LiteralArrayOptions = deserializeAws_queryLiteralArrayOptions(output["LiteralArrayOptions"], context);
    }
    if (output["LiteralOptions"] !== undefined) {
        contents.LiteralOptions = deserializeAws_queryLiteralOptions(output["LiteralOptions"], context);
    }
    if (output["TextArrayOptions"] !== undefined) {
        contents.TextArrayOptions = deserializeAws_queryTextArrayOptions(output["TextArrayOptions"], context);
    }
    if (output["TextOptions"] !== undefined) {
        contents.TextOptions = deserializeAws_queryTextOptions(output["TextOptions"], context);
    }
    return contents;
};
const deserializeAws_queryIndexFieldStatus = (output, context) => {
    let contents = {
        __type: "IndexFieldStatus",
        Options: undefined,
        Status: undefined
    };
    if (output["Options"] !== undefined) {
        contents.Options = deserializeAws_queryIndexField(output["Options"], context);
    }
    if (output["Status"] !== undefined) {
        contents.Status = deserializeAws_queryOptionStatus(output["Status"], context);
    }
    return contents;
};
const deserializeAws_queryIndexFieldStatusList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_queryIndexFieldStatus(entry, context));
    });
    return contents;
};
const deserializeAws_queryIntArrayOptions = (output, context) => {
    let contents = {
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
const deserializeAws_queryIntOptions = (output, context) => {
    let contents = {
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
const deserializeAws_queryInternalException = (output, context) => {
    let contents = {
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
const deserializeAws_queryInvalidTypeException = (output, context) => {
    let contents = {
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
const deserializeAws_queryLatLonOptions = (output, context) => {
    let contents = {
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
const deserializeAws_queryLimitExceededException = (output, context) => {
    let contents = {
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
const deserializeAws_queryLimits = (output, context) => {
    let contents = {
        __type: "Limits",
        MaximumPartitionCount: undefined,
        MaximumReplicationCount: undefined
    };
    if (output["MaximumPartitionCount"] !== undefined) {
        contents.MaximumPartitionCount = parseInt(output["MaximumPartitionCount"]);
    }
    if (output["MaximumReplicationCount"] !== undefined) {
        contents.MaximumReplicationCount = parseInt(output["MaximumReplicationCount"]);
    }
    return contents;
};
const deserializeAws_queryListDomainNamesResponse = (output, context) => {
    let contents = {
        __type: "ListDomainNamesResponse",
        DomainNames: undefined
    };
    if (output.DomainNames === "") {
        contents.DomainNames = {};
    }
    if (output["DomainNames"] !== undefined &&
        output["DomainNames"]["entry"] !== undefined) {
        const wrappedItem = output["DomainNames"]["entry"] instanceof Array
            ? output["DomainNames"]["entry"]
            : [output["DomainNames"]["entry"]];
        contents.DomainNames = deserializeAws_queryDomainNameMap(wrappedItem, context);
    }
    return contents;
};
const deserializeAws_queryLiteralArrayOptions = (output, context) => {
    let contents = {
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
const deserializeAws_queryLiteralOptions = (output, context) => {
    let contents = {
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
const deserializeAws_queryOptionStatus = (output, context) => {
    let contents = {
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
const deserializeAws_queryResourceNotFoundException = (output, context) => {
    let contents = {
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
const deserializeAws_queryScalingParameters = (output, context) => {
    let contents = {
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
        contents.DesiredReplicationCount = parseInt(output["DesiredReplicationCount"]);
    }
    return contents;
};
const deserializeAws_queryScalingParametersStatus = (output, context) => {
    let contents = {
        __type: "ScalingParametersStatus",
        Options: undefined,
        Status: undefined
    };
    if (output["Options"] !== undefined) {
        contents.Options = deserializeAws_queryScalingParameters(output["Options"], context);
    }
    if (output["Status"] !== undefined) {
        contents.Status = deserializeAws_queryOptionStatus(output["Status"], context);
    }
    return contents;
};
const deserializeAws_queryServiceEndpoint = (output, context) => {
    let contents = {
        __type: "ServiceEndpoint",
        Endpoint: undefined
    };
    if (output["Endpoint"] !== undefined) {
        contents.Endpoint = output["Endpoint"];
    }
    return contents;
};
const deserializeAws_querySuggester = (output, context) => {
    let contents = {
        __type: "Suggester",
        DocumentSuggesterOptions: undefined,
        SuggesterName: undefined
    };
    if (output["DocumentSuggesterOptions"] !== undefined) {
        contents.DocumentSuggesterOptions = deserializeAws_queryDocumentSuggesterOptions(output["DocumentSuggesterOptions"], context);
    }
    if (output["SuggesterName"] !== undefined) {
        contents.SuggesterName = output["SuggesterName"];
    }
    return contents;
};
const deserializeAws_querySuggesterStatus = (output, context) => {
    let contents = {
        __type: "SuggesterStatus",
        Options: undefined,
        Status: undefined
    };
    if (output["Options"] !== undefined) {
        contents.Options = deserializeAws_querySuggester(output["Options"], context);
    }
    if (output["Status"] !== undefined) {
        contents.Status = deserializeAws_queryOptionStatus(output["Status"], context);
    }
    return contents;
};
const deserializeAws_querySuggesterStatusList = (output, context) => {
    const contents = [];
    (output || []).map((entry) => {
        contents.push(deserializeAws_querySuggesterStatus(entry, context));
    });
    return contents;
};
const deserializeAws_queryTextArrayOptions = (output, context) => {
    let contents = {
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
const deserializeAws_queryTextOptions = (output, context) => {
    let contents = {
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
const deserializeAws_queryUpdateAvailabilityOptionsResponse = (output, context) => {
    let contents = {
        __type: "UpdateAvailabilityOptionsResponse",
        AvailabilityOptions: undefined
    };
    if (output["AvailabilityOptions"] !== undefined) {
        contents.AvailabilityOptions = deserializeAws_queryAvailabilityOptionsStatus(output["AvailabilityOptions"], context);
    }
    return contents;
};
const deserializeAws_queryUpdateDomainEndpointOptionsResponse = (output, context) => {
    let contents = {
        __type: "UpdateDomainEndpointOptionsResponse",
        DomainEndpointOptions: undefined
    };
    if (output["DomainEndpointOptions"] !== undefined) {
        contents.DomainEndpointOptions = deserializeAws_queryDomainEndpointOptionsStatus(output["DomainEndpointOptions"], context);
    }
    return contents;
};
const deserializeAws_queryUpdateScalingParametersResponse = (output, context) => {
    let contents = {
        __type: "UpdateScalingParametersResponse",
        ScalingParameters: undefined
    };
    if (output["ScalingParameters"] !== undefined) {
        contents.ScalingParameters = deserializeAws_queryScalingParametersStatus(output["ScalingParameters"], context);
    }
    return contents;
};
const deserializeAws_queryUpdateServiceAccessPoliciesResponse = (output, context) => {
    let contents = {
        __type: "UpdateServiceAccessPoliciesResponse",
        AccessPolicies: undefined
    };
    if (output["AccessPolicies"] !== undefined) {
        contents.AccessPolicies = deserializeAws_queryAccessPoliciesStatus(output["AccessPolicies"], context);
    }
    return contents;
};
const deserializeAws_queryValidationException = (output, context) => {
    let contents = {
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
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    httpHeaders: output.headers,
    requestId: output.headers["x-amzn-requestid"]
});
// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody, context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return (context.streamCollector(streamBody) || Promise.resolve(new Uint8Array()));
};
// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody, context) => {
    return collectBody(streamBody, context).then(body => context.utf8Encoder(body));
};
const buildHttpRpcRequest = (context, headers, path, resolvedHostname, body) => {
    const contents = Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", path: path, headers: headers });
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new protocol_http_1.HttpRequest(contents);
};
const decodeEscapedXML = (str) => {
    return str
        .replace(/&amp;/g, "&")
        .replace(/&apos;/g, "'")
        .replace(/&quot;/g, '"')
        .replace(/&gt;/g, ">")
        .replace(/&lt;/g, "<");
};
const parseBody = (streamBody, context) => {
    return collectBodyString(streamBody, context).then(encoded => {
        if (encoded.length) {
            const parsedObj = fast_xml_parser_1.parse(encoded, {
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
            return parsedObjToReturn;
        }
        return {};
    });
};
const buildFormUrlencodedString = (entries) => {
    return Object.keys(entries)
        .map(key => smithy_client_1.extendedEncodeURIComponent(key) +
        "=" +
        smithy_client_1.extendedEncodeURIComponent(entries[key]))
        .join("&");
};
const loadQueryErrorCode = (output, data) => {
    if (data.Error.Code !== undefined) {
        return data.Error.Code;
    }
    if (output.statusCode == 404) {
        return "NotFound";
    }
    return "";
};
//# sourceMappingURL=Aws_query.js.map