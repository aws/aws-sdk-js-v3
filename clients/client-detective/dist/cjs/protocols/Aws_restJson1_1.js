"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_restJson1_1AcceptInvitationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/invitation";
    let body;
    const bodyParams = {};
    if (input.GraphArn !== undefined) {
        bodyParams["GraphArn"] = input.GraphArn;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "PUT", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1AcceptInvitationCommand = serializeAws_restJson1_1AcceptInvitationCommand;
async function serializeAws_restJson1_1CreateGraphCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "";
    let resolvedPath = "/graph";
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath }));
}
exports.serializeAws_restJson1_1CreateGraphCommand = serializeAws_restJson1_1CreateGraphCommand;
async function serializeAws_restJson1_1CreateMembersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/graph/members";
    let body;
    const bodyParams = {};
    if (input.Accounts !== undefined) {
        bodyParams["Accounts"] = serializeAws_restJson1_1AccountList(input.Accounts, context);
    }
    if (input.GraphArn !== undefined) {
        bodyParams["GraphArn"] = input.GraphArn;
    }
    if (input.Message !== undefined) {
        bodyParams["Message"] = input.Message;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1CreateMembersCommand = serializeAws_restJson1_1CreateMembersCommand;
async function serializeAws_restJson1_1DeleteGraphCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/graph/removal";
    let body;
    const bodyParams = {};
    if (input.GraphArn !== undefined) {
        bodyParams["GraphArn"] = input.GraphArn;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1DeleteGraphCommand = serializeAws_restJson1_1DeleteGraphCommand;
async function serializeAws_restJson1_1DeleteMembersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/graph/members/removal";
    let body;
    const bodyParams = {};
    if (input.AccountIds !== undefined) {
        bodyParams["AccountIds"] = serializeAws_restJson1_1AccountIdList(input.AccountIds, context);
    }
    if (input.GraphArn !== undefined) {
        bodyParams["GraphArn"] = input.GraphArn;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1DeleteMembersCommand = serializeAws_restJson1_1DeleteMembersCommand;
async function serializeAws_restJson1_1DisassociateMembershipCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/membership/removal";
    let body;
    const bodyParams = {};
    if (input.GraphArn !== undefined) {
        bodyParams["GraphArn"] = input.GraphArn;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1DisassociateMembershipCommand = serializeAws_restJson1_1DisassociateMembershipCommand;
async function serializeAws_restJson1_1GetMembersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/graph/members/get";
    let body;
    const bodyParams = {};
    if (input.AccountIds !== undefined) {
        bodyParams["AccountIds"] = serializeAws_restJson1_1AccountIdList(input.AccountIds, context);
    }
    if (input.GraphArn !== undefined) {
        bodyParams["GraphArn"] = input.GraphArn;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1GetMembersCommand = serializeAws_restJson1_1GetMembersCommand;
async function serializeAws_restJson1_1ListGraphsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/graphs/list";
    let body;
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1ListGraphsCommand = serializeAws_restJson1_1ListGraphsCommand;
async function serializeAws_restJson1_1ListInvitationsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/invitations/list";
    let body;
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1ListInvitationsCommand = serializeAws_restJson1_1ListInvitationsCommand;
async function serializeAws_restJson1_1ListMembersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/graph/members/list";
    let body;
    const bodyParams = {};
    if (input.GraphArn !== undefined) {
        bodyParams["GraphArn"] = input.GraphArn;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1ListMembersCommand = serializeAws_restJson1_1ListMembersCommand;
async function serializeAws_restJson1_1RejectInvitationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/json";
    let resolvedPath = "/invitation/removal";
    let body;
    const bodyParams = {};
    if (input.GraphArn !== undefined) {
        bodyParams["GraphArn"] = input.GraphArn;
    }
    body = JSON.stringify(bodyParams);
    return new protocol_http_1.HttpRequest(Object.assign(Object.assign({}, context.endpoint), { protocol: "https", method: "POST", headers: headers, path: resolvedPath, body: body }));
}
exports.serializeAws_restJson1_1RejectInvitationCommand = serializeAws_restJson1_1RejectInvitationCommand;
async function deserializeAws_restJson1_1AcceptInvitationCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1AcceptInvitationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1AcceptInvitationCommand = deserializeAws_restJson1_1AcceptInvitationCommand;
async function deserializeAws_restJson1_1AcceptInvitationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.detective#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.detective#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.detective#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.detective#ValidationException":
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
async function deserializeAws_restJson1_1CreateGraphCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1CreateGraphCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateGraphResponse",
        GraphArn: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.GraphArn !== undefined && data.GraphArn !== null) {
        contents.GraphArn = data.GraphArn;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1CreateGraphCommand = deserializeAws_restJson1_1CreateGraphCommand;
async function deserializeAws_restJson1_1CreateGraphCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.detective#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.detective#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_restJson1_1CreateMembersCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1CreateMembersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "CreateMembersResponse",
        Members: undefined,
        UnprocessedAccounts: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Members !== undefined && data.Members !== null) {
        contents.Members = deserializeAws_restJson1_1MemberDetailList(data.Members, context);
    }
    if (data.UnprocessedAccounts !== undefined &&
        data.UnprocessedAccounts !== null) {
        contents.UnprocessedAccounts = deserializeAws_restJson1_1UnprocessedAccountList(data.UnprocessedAccounts, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1CreateMembersCommand = deserializeAws_restJson1_1CreateMembersCommand;
async function deserializeAws_restJson1_1CreateMembersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.detective#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.detective#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.detective#ServiceQuotaExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.detective#ValidationException":
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
async function deserializeAws_restJson1_1DeleteGraphCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1DeleteGraphCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1DeleteGraphCommand = deserializeAws_restJson1_1DeleteGraphCommand;
async function deserializeAws_restJson1_1DeleteGraphCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.detective#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.detective#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.detective#ValidationException":
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
async function deserializeAws_restJson1_1DeleteMembersCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1DeleteMembersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "DeleteMembersResponse",
        AccountIds: undefined,
        UnprocessedAccounts: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.AccountIds !== undefined && data.AccountIds !== null) {
        contents.AccountIds = deserializeAws_restJson1_1AccountIdList(data.AccountIds, context);
    }
    if (data.UnprocessedAccounts !== undefined &&
        data.UnprocessedAccounts !== null) {
        contents.UnprocessedAccounts = deserializeAws_restJson1_1UnprocessedAccountList(data.UnprocessedAccounts, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1DeleteMembersCommand = deserializeAws_restJson1_1DeleteMembersCommand;
async function deserializeAws_restJson1_1DeleteMembersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.detective#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.detective#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.detective#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.detective#ValidationException":
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
async function deserializeAws_restJson1_1DisassociateMembershipCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1DisassociateMembershipCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1DisassociateMembershipCommand = deserializeAws_restJson1_1DisassociateMembershipCommand;
async function deserializeAws_restJson1_1DisassociateMembershipCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.detective#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.detective#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.detective#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.detective#ValidationException":
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
async function deserializeAws_restJson1_1GetMembersCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1GetMembersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "GetMembersResponse",
        MemberDetails: undefined,
        UnprocessedAccounts: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.MemberDetails !== undefined && data.MemberDetails !== null) {
        contents.MemberDetails = deserializeAws_restJson1_1MemberDetailList(data.MemberDetails, context);
    }
    if (data.UnprocessedAccounts !== undefined &&
        data.UnprocessedAccounts !== null) {
        contents.UnprocessedAccounts = deserializeAws_restJson1_1UnprocessedAccountList(data.UnprocessedAccounts, context);
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1GetMembersCommand = deserializeAws_restJson1_1GetMembersCommand;
async function deserializeAws_restJson1_1GetMembersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.detective#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.detective#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.detective#ValidationException":
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
async function deserializeAws_restJson1_1ListGraphsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListGraphsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListGraphsResponse",
        GraphList: undefined,
        NextToken: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.GraphList !== undefined && data.GraphList !== null) {
        contents.GraphList = deserializeAws_restJson1_1GraphList(data.GraphList, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListGraphsCommand = deserializeAws_restJson1_1ListGraphsCommand;
async function deserializeAws_restJson1_1ListGraphsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.detective#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.detective#ValidationException":
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
async function deserializeAws_restJson1_1ListInvitationsCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListInvitationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListInvitationsResponse",
        Invitations: undefined,
        NextToken: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.Invitations !== undefined && data.Invitations !== null) {
        contents.Invitations = deserializeAws_restJson1_1MemberDetailList(data.Invitations, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListInvitationsCommand = deserializeAws_restJson1_1ListInvitationsCommand;
async function deserializeAws_restJson1_1ListInvitationsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.detective#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.detective#ValidationException":
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
async function deserializeAws_restJson1_1ListMembersCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1ListMembersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        __type: "ListMembersResponse",
        MemberDetails: undefined,
        NextToken: undefined
    };
    const data = await parseBody(output.body, context);
    if (data.MemberDetails !== undefined && data.MemberDetails !== null) {
        contents.MemberDetails = deserializeAws_restJson1_1MemberDetailList(data.MemberDetails, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1ListMembersCommand = deserializeAws_restJson1_1ListMembersCommand;
async function deserializeAws_restJson1_1ListMembersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.detective#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.detective#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.detective#ValidationException":
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
async function deserializeAws_restJson1_1RejectInvitationCommand(output, context) {
    if (output.statusCode !== 200 && output.statusCode >= 400) {
        return deserializeAws_restJson1_1RejectInvitationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output)
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
}
exports.deserializeAws_restJson1_1RejectInvitationCommand = deserializeAws_restJson1_1RejectInvitationCommand;
async function deserializeAws_restJson1_1RejectInvitationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.detective#ConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.detective#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.detective#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ValidationException":
        case "com.amazonaws.detective#ValidationException":
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
const deserializeAws_restJson1_1ConflictExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1_1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceQuotaExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1_1ValidationExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ValidationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const serializeAws_restJson1_1Account = (input, context) => {
    const bodyParams = {};
    if (input.AccountId !== undefined) {
        bodyParams["AccountId"] = input.AccountId;
    }
    if (input.EmailAddress !== undefined) {
        bodyParams["EmailAddress"] = input.EmailAddress;
    }
    return bodyParams;
};
const serializeAws_restJson1_1AccountIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_restJson1_1AccountList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_restJson1_1Account(entry, context));
    }
    return contents;
};
const deserializeAws_restJson1_1AccountIdList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_restJson1_1Graph = (output, context) => {
    let contents = {
        __type: "Graph",
        Arn: undefined,
        CreatedTime: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.CreatedTime !== undefined && output.CreatedTime !== null) {
        contents.CreatedTime = new Date(Math.round(output.CreatedTime * 1000));
    }
    return contents;
};
const deserializeAws_restJson1_1GraphList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1Graph(entry, context));
};
const deserializeAws_restJson1_1MemberDetail = (output, context) => {
    let contents = {
        __type: "MemberDetail",
        AccountId: undefined,
        EmailAddress: undefined,
        GraphArn: undefined,
        InvitedTime: undefined,
        MasterId: undefined,
        Status: undefined,
        UpdatedTime: undefined
    };
    if (output.AccountId !== undefined && output.AccountId !== null) {
        contents.AccountId = output.AccountId;
    }
    if (output.EmailAddress !== undefined && output.EmailAddress !== null) {
        contents.EmailAddress = output.EmailAddress;
    }
    if (output.GraphArn !== undefined && output.GraphArn !== null) {
        contents.GraphArn = output.GraphArn;
    }
    if (output.InvitedTime !== undefined && output.InvitedTime !== null) {
        contents.InvitedTime = new Date(Math.round(output.InvitedTime * 1000));
    }
    if (output.MasterId !== undefined && output.MasterId !== null) {
        contents.MasterId = output.MasterId;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.UpdatedTime !== undefined && output.UpdatedTime !== null) {
        contents.UpdatedTime = new Date(Math.round(output.UpdatedTime * 1000));
    }
    return contents;
};
const deserializeAws_restJson1_1MemberDetailList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1MemberDetail(entry, context));
};
const deserializeAws_restJson1_1UnprocessedAccount = (output, context) => {
    let contents = {
        __type: "UnprocessedAccount",
        AccountId: undefined,
        Reason: undefined
    };
    if (output.AccountId !== undefined && output.AccountId !== null) {
        contents.AccountId = output.AccountId;
    }
    if (output.Reason !== undefined && output.Reason !== null) {
        contents.Reason = output.Reason;
    }
    return contents;
};
const deserializeAws_restJson1_1UnprocessedAccountList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_restJson1_1UnprocessedAccount(entry, context));
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