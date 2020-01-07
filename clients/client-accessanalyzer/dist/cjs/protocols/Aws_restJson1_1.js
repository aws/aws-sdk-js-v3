"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const uuid_1 = require("uuid");
async function serializeAws_restJson1_1CreateAnalyzerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/analyzer";
    let body;
    const bodyParams = {};
    if (input.analyzerName !== undefined) {
        bodyParams["analyzerName"] = input.analyzerName;
    }
    if (input.archiveRules !== undefined) {
        bodyParams["archiveRules"] = serializeAws_restJson1_1InlineArchiveRulesList(input.archiveRules, context);
    }
    if (input.clientToken === undefined) {
        input.clientToken = uuid_1.v4();
    }
    if (input.clientToken !== undefined) {
        bodyParams["clientToken"] = input.clientToken;
    }
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_restJson1_1TagsMap(input.tags, context);
    }
    if (input.type !== undefined) {
        bodyParams["type"] = input.type;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1CreateAnalyzerCommand = serializeAws_restJson1_1CreateAnalyzerCommand;
async function serializeAws_restJson1_1CreateArchiveRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/analyzer/{analyzerName}/archive-rule";
    if (input.analyzerName !== undefined) {
        const labelValue = input.analyzerName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: analyzerName.");
        }
        resolvedPath = resolvedPath.replace("{analyzerName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: analyzerName.");
    }
    let body;
    const bodyParams = {};
    if (input.clientToken === undefined) {
        input.clientToken = uuid_1.v4();
    }
    if (input.clientToken !== undefined) {
        bodyParams["clientToken"] = input.clientToken;
    }
    if (input.filter !== undefined) {
        bodyParams["filter"] = serializeAws_restJson1_1FilterCriteriaMap(input.filter, context);
    }
    if (input.ruleName !== undefined) {
        bodyParams["ruleName"] = input.ruleName;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1CreateArchiveRuleCommand = serializeAws_restJson1_1CreateArchiveRuleCommand;
async function serializeAws_restJson1_1DeleteAnalyzerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/analyzer/{analyzerName}";
    if (input.analyzerName !== undefined) {
        const labelValue = input.analyzerName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: analyzerName.");
        }
        resolvedPath = resolvedPath.replace("{analyzerName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: analyzerName.");
    }
    const query = {};
    if (input.clientToken !== undefined) {
        query["clientToken"] = input.clientToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1DeleteAnalyzerCommand = serializeAws_restJson1_1DeleteAnalyzerCommand;
async function serializeAws_restJson1_1DeleteArchiveRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/analyzer/{analyzerName}/archive-rule/{ruleName}";
    if (input.analyzerName !== undefined) {
        const labelValue = input.analyzerName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: analyzerName.");
        }
        resolvedPath = resolvedPath.replace("{analyzerName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: analyzerName.");
    }
    if (input.ruleName !== undefined) {
        const labelValue = input.ruleName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ruleName.");
        }
        resolvedPath = resolvedPath.replace("{ruleName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ruleName.");
    }
    const query = {};
    if (input.clientToken !== undefined) {
        query["clientToken"] = input.clientToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1DeleteArchiveRuleCommand = serializeAws_restJson1_1DeleteArchiveRuleCommand;
async function serializeAws_restJson1_1GetAnalyzedResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/analyzed-resource";
    const query = {};
    if (input.analyzerArn !== undefined) {
        query["analyzerArn"] = input.analyzerArn;
    }
    if (input.resourceArn !== undefined) {
        query["resourceArn"] = input.resourceArn;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1GetAnalyzedResourceCommand = serializeAws_restJson1_1GetAnalyzedResourceCommand;
async function serializeAws_restJson1_1GetAnalyzerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/analyzer/{analyzerName}";
    if (input.analyzerName !== undefined) {
        const labelValue = input.analyzerName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: analyzerName.");
        }
        resolvedPath = resolvedPath.replace("{analyzerName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: analyzerName.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1GetAnalyzerCommand = serializeAws_restJson1_1GetAnalyzerCommand;
async function serializeAws_restJson1_1GetArchiveRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/analyzer/{analyzerName}/archive-rule/{ruleName}";
    if (input.analyzerName !== undefined) {
        const labelValue = input.analyzerName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: analyzerName.");
        }
        resolvedPath = resolvedPath.replace("{analyzerName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: analyzerName.");
    }
    if (input.ruleName !== undefined) {
        const labelValue = input.ruleName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ruleName.");
        }
        resolvedPath = resolvedPath.replace("{ruleName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ruleName.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1GetArchiveRuleCommand = serializeAws_restJson1_1GetArchiveRuleCommand;
async function serializeAws_restJson1_1GetFindingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/finding/{id}";
    if (input.id !== undefined) {
        const labelValue = input.id;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: id.");
        }
        resolvedPath = resolvedPath.replace("{id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: id.");
    }
    const query = {};
    if (input.analyzerArn !== undefined) {
        query["analyzerArn"] = input.analyzerArn;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1GetFindingCommand = serializeAws_restJson1_1GetFindingCommand;
async function serializeAws_restJson1_1ListAnalyzedResourcesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/analyzed-resource";
    let body;
    const bodyParams = {};
    if (input.analyzerArn !== undefined) {
        bodyParams["analyzerArn"] = input.analyzerArn;
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.resourceType !== undefined) {
        bodyParams["resourceType"] = input.resourceType;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1ListAnalyzedResourcesCommand = serializeAws_restJson1_1ListAnalyzedResourcesCommand;
async function serializeAws_restJson1_1ListAnalyzersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/analyzer";
    const query = {};
    if (input.maxResults !== undefined) {
        query["maxResults"] = input.maxResults.toString();
    }
    if (input.nextToken !== undefined) {
        query["nextToken"] = input.nextToken;
    }
    if (input.type !== undefined) {
        query["type"] = input.type;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1ListAnalyzersCommand = serializeAws_restJson1_1ListAnalyzersCommand;
async function serializeAws_restJson1_1ListArchiveRulesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/analyzer/{analyzerName}/archive-rule";
    if (input.analyzerName !== undefined) {
        const labelValue = input.analyzerName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: analyzerName.");
        }
        resolvedPath = resolvedPath.replace("{analyzerName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: analyzerName.");
    }
    const query = {};
    if (input.maxResults !== undefined) {
        query["maxResults"] = input.maxResults.toString();
    }
    if (input.nextToken !== undefined) {
        query["nextToken"] = input.nextToken;
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1ListArchiveRulesCommand = serializeAws_restJson1_1ListArchiveRulesCommand;
async function serializeAws_restJson1_1ListFindingsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/finding";
    let body;
    const bodyParams = {};
    if (input.analyzerArn !== undefined) {
        bodyParams["analyzerArn"] = input.analyzerArn;
    }
    if (input.filter !== undefined) {
        bodyParams["filter"] = serializeAws_restJson1_1FilterCriteriaMap(input.filter, context);
    }
    if (input.maxResults !== undefined) {
        bodyParams["maxResults"] = input.maxResults;
    }
    if (input.nextToken !== undefined) {
        bodyParams["nextToken"] = input.nextToken;
    }
    if (input.sort !== undefined) {
        bodyParams["sort"] = serializeAws_restJson1_1SortCriteria(input.sort, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1ListFindingsCommand = serializeAws_restJson1_1ListFindingsCommand;
async function serializeAws_restJson1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/tags/{resourceArn}";
    if (input.resourceArn !== undefined) {
        const labelValue = input.resourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceArn.");
        }
        resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceArn.");
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "GET", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1ListTagsForResourceCommand = serializeAws_restJson1_1ListTagsForResourceCommand;
async function serializeAws_restJson1_1StartResourceScanCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/resource/scan";
    let body;
    const bodyParams = {};
    if (input.analyzerArn !== undefined) {
        bodyParams["analyzerArn"] = input.analyzerArn;
    }
    if (input.resourceArn !== undefined) {
        bodyParams["resourceArn"] = input.resourceArn;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1StartResourceScanCommand = serializeAws_restJson1_1StartResourceScanCommand;
async function serializeAws_restJson1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/tags/{resourceArn}";
    if (input.resourceArn !== undefined) {
        const labelValue = input.resourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceArn.");
        }
        resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceArn.");
    }
    let body;
    const bodyParams = {};
    if (input.tags !== undefined) {
        bodyParams["tags"] = serializeAws_restJson1_1TagsMap(input.tags, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1TagResourceCommand = serializeAws_restJson1_1TagResourceCommand;
async function serializeAws_restJson1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/tags/{resourceArn}";
    if (input.resourceArn !== undefined) {
        const labelValue = input.resourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceArn.");
        }
        resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceArn.");
    }
    const query = {};
    if (input.tagKeys !== undefined) {
        query["tagKeys"] = (input.tagKeys || []).map(_entry => _entry);
    }
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "DELETE", headers: headers, path: resolvedPath, query: query }));
}
exports.serializeAws_restJson1_1UntagResourceCommand = serializeAws_restJson1_1UntagResourceCommand;
async function serializeAws_restJson1_1UpdateArchiveRuleCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/analyzer/{analyzerName}/archive-rule/{ruleName}";
    if (input.analyzerName !== undefined) {
        const labelValue = input.analyzerName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: analyzerName.");
        }
        resolvedPath = resolvedPath.replace("{analyzerName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: analyzerName.");
    }
    if (input.ruleName !== undefined) {
        const labelValue = input.ruleName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ruleName.");
        }
        resolvedPath = resolvedPath.replace("{ruleName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ruleName.");
    }
    let body;
    const bodyParams = {};
    if (input.clientToken === undefined) {
        input.clientToken = uuid_1.v4();
    }
    if (input.clientToken !== undefined) {
        bodyParams["clientToken"] = input.clientToken;
    }
    if (input.filter !== undefined) {
        bodyParams["filter"] = serializeAws_restJson1_1FilterCriteriaMap(input.filter, context);
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1UpdateArchiveRuleCommand = serializeAws_restJson1_1UpdateArchiveRuleCommand;
async function serializeAws_restJson1_1UpdateFindingsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/finding";
    let body;
    const bodyParams = {};
    if (input.analyzerArn !== undefined) {
        bodyParams["analyzerArn"] = input.analyzerArn;
    }
    if (input.clientToken === undefined) {
        input.clientToken = uuid_1.v4();
    }
    if (input.clientToken !== undefined) {
        bodyParams["clientToken"] = input.clientToken;
    }
    if (input.ids !== undefined) {
        bodyParams["ids"] = serializeAws_restJson1_1FindingIdList(input.ids, context);
    }
    if (input.resourceArn !== undefined) {
        bodyParams["resourceArn"] = input.resourceArn;
    }
    if (input.status !== undefined) {
        bodyParams["status"] = input.status;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1UpdateFindingsCommand = serializeAws_restJson1_1UpdateFindingsCommand;
async function deserializeAws_restJson1_1CreateAnalyzerCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1CreateAnalyzerCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateAnalyzerResponse",
        arn: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1CreateAnalyzerCommand = deserializeAws_restJson1_1CreateAnalyzerCommand;
async function deserializeAws_restJson1_1CreateAnalyzerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.accessanalyzer#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictException":
        case "com.amazon.accessanalyzer#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazon.accessanalyzer#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceQuotaExceededException":
        case "com.amazon.accessanalyzer#ServiceQuotaExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazon.accessanalyzer#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazon.accessanalyzer#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1CreateArchiveRuleCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1CreateArchiveRuleCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1CreateArchiveRuleCommand = deserializeAws_restJson1_1CreateArchiveRuleCommand;
async function deserializeAws_restJson1_1CreateArchiveRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.accessanalyzer#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ConflictException":
        case "com.amazon.accessanalyzer#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazon.accessanalyzer#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.accessanalyzer#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceQuotaExceededException":
        case "com.amazon.accessanalyzer#ServiceQuotaExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazon.accessanalyzer#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazon.accessanalyzer#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1DeleteAnalyzerCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1DeleteAnalyzerCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1DeleteAnalyzerCommand = deserializeAws_restJson1_1DeleteAnalyzerCommand;
async function deserializeAws_restJson1_1DeleteAnalyzerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.accessanalyzer#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazon.accessanalyzer#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.accessanalyzer#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazon.accessanalyzer#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazon.accessanalyzer#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1DeleteArchiveRuleCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1DeleteArchiveRuleCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1DeleteArchiveRuleCommand = deserializeAws_restJson1_1DeleteArchiveRuleCommand;
async function deserializeAws_restJson1_1DeleteArchiveRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.accessanalyzer#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazon.accessanalyzer#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.accessanalyzer#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazon.accessanalyzer#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazon.accessanalyzer#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1GetAnalyzedResourceCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1GetAnalyzedResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetAnalyzedResourceResponse",
        resource: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.resource !== undefined && data.resource !== null) {
        contents.resource = deserializeAws_restJson1_1AnalyzedResource(data.resource, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1GetAnalyzedResourceCommand = deserializeAws_restJson1_1GetAnalyzedResourceCommand;
async function deserializeAws_restJson1_1GetAnalyzedResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.accessanalyzer#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazon.accessanalyzer#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.accessanalyzer#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazon.accessanalyzer#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazon.accessanalyzer#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1GetAnalyzerCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1GetAnalyzerCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetAnalyzerResponse",
        analyzer: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.analyzer !== undefined && data.analyzer !== null) {
        contents.analyzer = deserializeAws_restJson1_1AnalyzerSummary(data.analyzer, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1GetAnalyzerCommand = deserializeAws_restJson1_1GetAnalyzerCommand;
async function deserializeAws_restJson1_1GetAnalyzerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.accessanalyzer#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazon.accessanalyzer#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.accessanalyzer#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazon.accessanalyzer#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazon.accessanalyzer#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1GetArchiveRuleCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1GetArchiveRuleCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetArchiveRuleResponse",
        archiveRule: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.archiveRule !== undefined && data.archiveRule !== null) {
        contents.archiveRule = deserializeAws_restJson1_1ArchiveRuleSummary(data.archiveRule, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1GetArchiveRuleCommand = deserializeAws_restJson1_1GetArchiveRuleCommand;
async function deserializeAws_restJson1_1GetArchiveRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.accessanalyzer#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazon.accessanalyzer#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.accessanalyzer#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazon.accessanalyzer#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazon.accessanalyzer#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1GetFindingCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1GetFindingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetFindingResponse",
        finding: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.finding !== undefined && data.finding !== null) {
        contents.finding = deserializeAws_restJson1_1Finding(data.finding, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1GetFindingCommand = deserializeAws_restJson1_1GetFindingCommand;
async function deserializeAws_restJson1_1GetFindingCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.accessanalyzer#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazon.accessanalyzer#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.accessanalyzer#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazon.accessanalyzer#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazon.accessanalyzer#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1ListAnalyzedResourcesCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListAnalyzedResourcesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListAnalyzedResourcesResponse",
        analyzedResources: undefined,
        nextToken: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.analyzedResources !== undefined && data.analyzedResources !== null) {
        contents.analyzedResources = deserializeAws_restJson1_1AnalyzedResourcesList(data.analyzedResources, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListAnalyzedResourcesCommand = deserializeAws_restJson1_1ListAnalyzedResourcesCommand;
async function deserializeAws_restJson1_1ListAnalyzedResourcesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.accessanalyzer#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazon.accessanalyzer#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.accessanalyzer#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazon.accessanalyzer#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazon.accessanalyzer#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1ListAnalyzersCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListAnalyzersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListAnalyzersResponse",
        analyzers: undefined,
        nextToken: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.analyzers !== undefined && data.analyzers !== null) {
        contents.analyzers = deserializeAws_restJson1_1AnalyzersList(data.analyzers, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListAnalyzersCommand = deserializeAws_restJson1_1ListAnalyzersCommand;
async function deserializeAws_restJson1_1ListAnalyzersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.accessanalyzer#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazon.accessanalyzer#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazon.accessanalyzer#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazon.accessanalyzer#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1ListArchiveRulesCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListArchiveRulesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListArchiveRulesResponse",
        archiveRules: undefined,
        nextToken: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.archiveRules !== undefined && data.archiveRules !== null) {
        contents.archiveRules = deserializeAws_restJson1_1ArchiveRulesList(data.archiveRules, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListArchiveRulesCommand = deserializeAws_restJson1_1ListArchiveRulesCommand;
async function deserializeAws_restJson1_1ListArchiveRulesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.accessanalyzer#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazon.accessanalyzer#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazon.accessanalyzer#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazon.accessanalyzer#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1ListFindingsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListFindingsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListFindingsResponse",
        findings: undefined,
        nextToken: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.findings !== undefined && data.findings !== null) {
        contents.findings = deserializeAws_restJson1_1FindingsList(data.findings, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListFindingsCommand = deserializeAws_restJson1_1ListFindingsCommand;
async function deserializeAws_restJson1_1ListFindingsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.accessanalyzer#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazon.accessanalyzer#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.accessanalyzer#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazon.accessanalyzer#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazon.accessanalyzer#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1ListTagsForResourceCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListTagsForResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListTagsForResourceResponse",
        tags: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1_1TagsMap(data.tags, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListTagsForResourceCommand = deserializeAws_restJson1_1ListTagsForResourceCommand;
async function deserializeAws_restJson1_1ListTagsForResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.accessanalyzer#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazon.accessanalyzer#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.accessanalyzer#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazon.accessanalyzer#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazon.accessanalyzer#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1StartResourceScanCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1StartResourceScanCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1StartResourceScanCommand = deserializeAws_restJson1_1StartResourceScanCommand;
async function deserializeAws_restJson1_1StartResourceScanCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.accessanalyzer#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazon.accessanalyzer#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.accessanalyzer#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazon.accessanalyzer#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazon.accessanalyzer#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1TagResourceCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1TagResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "TagResourceResponse"
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1TagResourceCommand = deserializeAws_restJson1_1TagResourceCommand;
async function deserializeAws_restJson1_1TagResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.accessanalyzer#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazon.accessanalyzer#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.accessanalyzer#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazon.accessanalyzer#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazon.accessanalyzer#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1UntagResourceCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "UntagResourceResponse"
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1UntagResourceCommand = deserializeAws_restJson1_1UntagResourceCommand;
async function deserializeAws_restJson1_1UntagResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.accessanalyzer#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazon.accessanalyzer#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.accessanalyzer#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazon.accessanalyzer#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazon.accessanalyzer#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1UpdateArchiveRuleCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1UpdateArchiveRuleCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1UpdateArchiveRuleCommand = deserializeAws_restJson1_1UpdateArchiveRuleCommand;
async function deserializeAws_restJson1_1UpdateArchiveRuleCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.accessanalyzer#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazon.accessanalyzer#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.accessanalyzer#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazon.accessanalyzer#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazon.accessanalyzer#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
async function deserializeAws_restJson1_1UpdateFindingsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1UpdateFindingsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1UpdateFindingsCommand = deserializeAws_restJson1_1UpdateFindingsCommand;
async function deserializeAws_restJson1_1UpdateFindingsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazon.accessanalyzer#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazon.accessanalyzer#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazon.accessanalyzer#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazon.accessanalyzer#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazon.accessanalyzer#ValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = Object.assign(Object.assign({}, parsedBody), { name: `${errorCode}`, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
}
const deserializeAws_restJson1_1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "AccessDeniedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1_1ConflictExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
        resourceId: undefined,
        resourceType: undefined
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.resourceId !== undefined && data.resourceId !== null) {
        contents.resourceId = data.resourceId;
    }
    if (data.resourceType !== undefined && data.resourceType !== null) {
        contents.resourceType = data.resourceType;
    }
    return contents;
};
const deserializeAws_restJson1_1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
        retryAfterSeconds: undefined
    };
    if (parsedOutput.headers["retry-after"] !== undefined) {
        contents.retryAfterSeconds = parseInt(parsedOutput.headers["retry-after"], 10);
    }
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
        resourceId: undefined,
        resourceType: undefined
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.resourceId !== undefined && data.resourceId !== null) {
        contents.resourceId = data.resourceId;
    }
    if (data.resourceType !== undefined && data.resourceType !== null) {
        contents.resourceType = data.resourceType;
    }
    return contents;
};
const deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceQuotaExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
        resourceId: undefined,
        resourceType: undefined
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.resourceId !== undefined && data.resourceId !== null) {
        contents.resourceId = data.resourceId;
    }
    if (data.resourceType !== undefined && data.resourceType !== null) {
        contents.resourceType = data.resourceType;
    }
    return contents;
};
const deserializeAws_restJson1_1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ThrottlingException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
        retryAfterSeconds: undefined
    };
    if (parsedOutput.headers["retry-after"] !== undefined) {
        contents.retryAfterSeconds = parseInt(parsedOutput.headers["retry-after"], 10);
    }
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1_1ValidationExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ValidationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        fieldList: undefined,
        message: undefined,
        reason: undefined
    };
    const data = parsedOutput.body;
    if (data.fieldList !== undefined && data.fieldList !== null) {
        contents.fieldList = deserializeAws_restJson1_1ValidationExceptionFieldList(data.fieldList, context);
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.reason !== undefined && data.reason !== null) {
        contents.reason = data.reason;
    }
    return contents;
};
const serializeAws_restJson1_1Criterion = (input, context) => {
    const bodyParams = {};
    if (input.contains !== undefined) {
        bodyParams["contains"] = serializeAws_restJson1_1ValueList(input.contains, context);
    }
    if (input.eq !== undefined) {
        bodyParams["eq"] = serializeAws_restJson1_1ValueList(input.eq, context);
    }
    if (input.exists !== undefined) {
        bodyParams["exists"] = input.exists;
    }
    if (input.neq !== undefined) {
        bodyParams["neq"] = serializeAws_restJson1_1ValueList(input.neq, context);
    }
    return bodyParams;
};
const serializeAws_restJson1_1FilterCriteriaMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = serializeAws_restJson1_1Criterion(input[key], context);
    });
    return mapParams;
};
const serializeAws_restJson1_1FindingIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_restJson1_1InlineArchiveRule = (input, context) => {
    const bodyParams = {};
    if (input.filter !== undefined) {
        bodyParams["filter"] = serializeAws_restJson1_1FilterCriteriaMap(input.filter, context);
    }
    if (input.ruleName !== undefined) {
        bodyParams["ruleName"] = input.ruleName;
    }
    return bodyParams;
};
const serializeAws_restJson1_1InlineArchiveRulesList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_restJson1_1InlineArchiveRule(entry, context));
    }
    return contents;
};
const serializeAws_restJson1_1SortCriteria = (input, context) => {
    const bodyParams = {};
    if (input.attributeName !== undefined) {
        bodyParams["attributeName"] = input.attributeName;
    }
    if (input.orderBy !== undefined) {
        bodyParams["orderBy"] = input.orderBy;
    }
    return bodyParams;
};
const serializeAws_restJson1_1TagsMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_restJson1_1ValueList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const deserializeAws_restJson1_1ActionList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_restJson1_1AnalyzedResource = (output, context) => {
    let contents = {
        __type: "AnalyzedResource",
        actions: undefined,
        analyzedAt: undefined,
        createdAt: undefined,
        error: undefined,
        isPublic: undefined,
        resourceArn: undefined,
        resourceType: undefined,
        sharedVia: undefined,
        status: undefined,
        updatedAt: undefined
    };
    if (output.actions !== undefined && output.actions !== null) {
        contents.actions = deserializeAws_restJson1_1ActionList(output.actions, context);
    }
    if (output.analyzedAt !== undefined && output.analyzedAt !== null) {
        contents.analyzedAt = new Date(output.analyzedAt);
    }
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(output.createdAt);
    }
    if (output.error !== undefined && output.error !== null) {
        contents.error = output.error;
    }
    if (output.isPublic !== undefined && output.isPublic !== null) {
        contents.isPublic = output.isPublic;
    }
    if (output.resourceArn !== undefined && output.resourceArn !== null) {
        contents.resourceArn = output.resourceArn;
    }
    if (output.resourceType !== undefined && output.resourceType !== null) {
        contents.resourceType = output.resourceType;
    }
    if (output.sharedVia !== undefined && output.sharedVia !== null) {
        contents.sharedVia = deserializeAws_restJson1_1SharedViaList(output.sharedVia, context);
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.updatedAt !== undefined && output.updatedAt !== null) {
        contents.updatedAt = new Date(output.updatedAt);
    }
    return contents;
};
const deserializeAws_restJson1_1AnalyzedResourceSummary = (output, context) => {
    let contents = {
        __type: "AnalyzedResourceSummary",
        resourceArn: undefined,
        resourceType: undefined
    };
    if (output.resourceArn !== undefined && output.resourceArn !== null) {
        contents.resourceArn = output.resourceArn;
    }
    if (output.resourceType !== undefined && output.resourceType !== null) {
        contents.resourceType = output.resourceType;
    }
    return contents;
};
const deserializeAws_restJson1_1AnalyzedResourcesList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1AnalyzedResourceSummary(entry, context));
};
const deserializeAws_restJson1_1AnalyzerSummary = (output, context) => {
    let contents = {
        __type: "AnalyzerSummary",
        arn: undefined,
        createdAt: undefined,
        lastResourceAnalyzed: undefined,
        lastResourceAnalyzedAt: undefined,
        name: undefined,
        tags: undefined,
        type: undefined
    };
    if (output.arn !== undefined && output.arn !== null) {
        contents.arn = output.arn;
    }
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(output.createdAt);
    }
    if (output.lastResourceAnalyzed !== undefined &&
        output.lastResourceAnalyzed !== null) {
        contents.lastResourceAnalyzed = output.lastResourceAnalyzed;
    }
    if (output.lastResourceAnalyzedAt !== undefined &&
        output.lastResourceAnalyzedAt !== null) {
        contents.lastResourceAnalyzedAt = new Date(output.lastResourceAnalyzedAt);
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    if (output.tags !== undefined && output.tags !== null) {
        contents.tags = deserializeAws_restJson1_1TagsMap(output.tags, context);
    }
    if (output.type !== undefined && output.type !== null) {
        contents.type = output.type;
    }
    return contents;
};
const deserializeAws_restJson1_1AnalyzersList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1AnalyzerSummary(entry, context));
};
const deserializeAws_restJson1_1ArchiveRuleSummary = (output, context) => {
    let contents = {
        __type: "ArchiveRuleSummary",
        createdAt: undefined,
        filter: undefined,
        ruleName: undefined,
        updatedAt: undefined
    };
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(output.createdAt);
    }
    if (output.filter !== undefined && output.filter !== null) {
        contents.filter = deserializeAws_restJson1_1FilterCriteriaMap(output.filter, context);
    }
    if (output.ruleName !== undefined && output.ruleName !== null) {
        contents.ruleName = output.ruleName;
    }
    if (output.updatedAt !== undefined && output.updatedAt !== null) {
        contents.updatedAt = new Date(output.updatedAt);
    }
    return contents;
};
const deserializeAws_restJson1_1ArchiveRulesList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1ArchiveRuleSummary(entry, context));
};
const deserializeAws_restJson1_1ConditionKeyMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_restJson1_1Criterion = (output, context) => {
    let contents = {
        __type: "Criterion",
        contains: undefined,
        eq: undefined,
        exists: undefined,
        neq: undefined
    };
    if (output.contains !== undefined && output.contains !== null) {
        contents.contains = deserializeAws_restJson1_1ValueList(output.contains, context);
    }
    if (output.eq !== undefined && output.eq !== null) {
        contents.eq = deserializeAws_restJson1_1ValueList(output.eq, context);
    }
    if (output.exists !== undefined && output.exists !== null) {
        contents.exists = output.exists;
    }
    if (output.neq !== undefined && output.neq !== null) {
        contents.neq = deserializeAws_restJson1_1ValueList(output.neq, context);
    }
    return contents;
};
const deserializeAws_restJson1_1FilterCriteriaMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_restJson1_1Criterion(output[key], context);
    });
    return mapParams;
};
const deserializeAws_restJson1_1Finding = (output, context) => {
    let contents = {
        __type: "Finding",
        action: undefined,
        analyzedAt: undefined,
        condition: undefined,
        createdAt: undefined,
        error: undefined,
        id: undefined,
        isPublic: undefined,
        principal: undefined,
        resource: undefined,
        resourceType: undefined,
        status: undefined,
        updatedAt: undefined
    };
    if (output.action !== undefined && output.action !== null) {
        contents.action = deserializeAws_restJson1_1ActionList(output.action, context);
    }
    if (output.analyzedAt !== undefined && output.analyzedAt !== null) {
        contents.analyzedAt = new Date(output.analyzedAt);
    }
    if (output.condition !== undefined && output.condition !== null) {
        contents.condition = deserializeAws_restJson1_1ConditionKeyMap(output.condition, context);
    }
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(output.createdAt);
    }
    if (output.error !== undefined && output.error !== null) {
        contents.error = output.error;
    }
    if (output.id !== undefined && output.id !== null) {
        contents.id = output.id;
    }
    if (output.isPublic !== undefined && output.isPublic !== null) {
        contents.isPublic = output.isPublic;
    }
    if (output.principal !== undefined && output.principal !== null) {
        contents.principal = deserializeAws_restJson1_1PrincipalMap(output.principal, context);
    }
    if (output.resource !== undefined && output.resource !== null) {
        contents.resource = output.resource;
    }
    if (output.resourceType !== undefined && output.resourceType !== null) {
        contents.resourceType = output.resourceType;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.updatedAt !== undefined && output.updatedAt !== null) {
        contents.updatedAt = new Date(output.updatedAt);
    }
    return contents;
};
const deserializeAws_restJson1_1FindingSummary = (output, context) => {
    let contents = {
        __type: "FindingSummary",
        action: undefined,
        analyzedAt: undefined,
        condition: undefined,
        createdAt: undefined,
        error: undefined,
        id: undefined,
        isPublic: undefined,
        principal: undefined,
        resource: undefined,
        resourceType: undefined,
        status: undefined,
        updatedAt: undefined
    };
    if (output.action !== undefined && output.action !== null) {
        contents.action = deserializeAws_restJson1_1ActionList(output.action, context);
    }
    if (output.analyzedAt !== undefined && output.analyzedAt !== null) {
        contents.analyzedAt = new Date(output.analyzedAt);
    }
    if (output.condition !== undefined && output.condition !== null) {
        contents.condition = deserializeAws_restJson1_1ConditionKeyMap(output.condition, context);
    }
    if (output.createdAt !== undefined && output.createdAt !== null) {
        contents.createdAt = new Date(output.createdAt);
    }
    if (output.error !== undefined && output.error !== null) {
        contents.error = output.error;
    }
    if (output.id !== undefined && output.id !== null) {
        contents.id = output.id;
    }
    if (output.isPublic !== undefined && output.isPublic !== null) {
        contents.isPublic = output.isPublic;
    }
    if (output.principal !== undefined && output.principal !== null) {
        contents.principal = deserializeAws_restJson1_1PrincipalMap(output.principal, context);
    }
    if (output.resource !== undefined && output.resource !== null) {
        contents.resource = output.resource;
    }
    if (output.resourceType !== undefined && output.resourceType !== null) {
        contents.resourceType = output.resourceType;
    }
    if (output.status !== undefined && output.status !== null) {
        contents.status = output.status;
    }
    if (output.updatedAt !== undefined && output.updatedAt !== null) {
        contents.updatedAt = new Date(output.updatedAt);
    }
    return contents;
};
const deserializeAws_restJson1_1FindingsList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1FindingSummary(entry, context));
};
const deserializeAws_restJson1_1PrincipalMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_restJson1_1SharedViaList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_restJson1_1TagsMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_restJson1_1ValidationExceptionField = (output, context) => {
    let contents = {
        __type: "ValidationExceptionField",
        message: undefined,
        name: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    if (output.name !== undefined && output.name !== null) {
        contents.name = output.name;
    }
    return contents;
};
const deserializeAws_restJson1_1ValidationExceptionFieldList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1ValidationExceptionField(entry, context));
};
const deserializeAws_restJson1_1ValueList = (output, context) => {
    return (output || []).map((entry) => entry);
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
const parseBody = (streamBody, context) => {
    return collectBodyString(streamBody, context).then(encoded => {
        if (encoded.length) {
            return JSON.parse(encoded);
        }
        return {};
    });
};
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find(k => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
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
    return "";
};
//# sourceMappingURL=Aws_restJson1_1.js.map