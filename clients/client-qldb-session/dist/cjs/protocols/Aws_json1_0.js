"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_0SendCommandCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "QLDBSession.SendCommand";
    let body;
    body = JSON.stringify(serializeAws_json1_0SendCommandRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0SendCommandCommand = serializeAws_json1_0SendCommandCommand;
async function deserializeAws_json1_0SendCommandCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0SendCommandCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0SendCommandResult(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SendCommandResult" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0SendCommandCommand = deserializeAws_json1_0SendCommandCommand;
async function deserializeAws_json1_0SendCommandCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.qldb.session#BadRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0BadRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSessionException":
        case "com.amazonaws.qldb.session#InvalidSessionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InvalidSessionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.qldb.session#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OccConflictException":
        case "com.amazonaws.qldb.session#OccConflictException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0OccConflictExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "RateExceededException":
        case "com.amazonaws.qldb.session#RateExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0RateExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_0BadRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0BadRequestException(body, context);
    const contents = Object.assign({ name: "BadRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0InvalidSessionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InvalidSessionException(body, context);
    const contents = Object.assign({ name: "InvalidSessionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0LimitExceededException(body, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0OccConflictExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0OccConflictException(body, context);
    const contents = Object.assign({ name: "OccConflictException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0RateExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0RateExceededException(body, context);
    const contents = Object.assign({ name: "RateExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_0AbortTransactionRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_0CommitTransactionRequest = (input, context) => {
    const bodyParams = {};
    if (input.CommitDigest !== undefined) {
        bodyParams["CommitDigest"] = Buffer.from(input.CommitDigest).toString("utf-8");
    }
    if (input.TransactionId !== undefined) {
        bodyParams["TransactionId"] = input.TransactionId;
    }
    return bodyParams;
};
const serializeAws_json1_0EndSessionRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_0ExecuteStatementRequest = (input, context) => {
    const bodyParams = {};
    if (input.Parameters !== undefined) {
        bodyParams["Parameters"] = serializeAws_json1_0StatementParameters(input.Parameters, context);
    }
    if (input.Statement !== undefined) {
        bodyParams["Statement"] = input.Statement;
    }
    if (input.TransactionId !== undefined) {
        bodyParams["TransactionId"] = input.TransactionId;
    }
    return bodyParams;
};
const serializeAws_json1_0FetchPageRequest = (input, context) => {
    const bodyParams = {};
    if (input.NextPageToken !== undefined) {
        bodyParams["NextPageToken"] = input.NextPageToken;
    }
    if (input.TransactionId !== undefined) {
        bodyParams["TransactionId"] = input.TransactionId;
    }
    return bodyParams;
};
const serializeAws_json1_0SendCommandRequest = (input, context) => {
    const bodyParams = {};
    if (input.AbortTransaction !== undefined) {
        bodyParams["AbortTransaction"] = serializeAws_json1_0AbortTransactionRequest(input.AbortTransaction, context);
    }
    if (input.CommitTransaction !== undefined) {
        bodyParams["CommitTransaction"] = serializeAws_json1_0CommitTransactionRequest(input.CommitTransaction, context);
    }
    if (input.EndSession !== undefined) {
        bodyParams["EndSession"] = serializeAws_json1_0EndSessionRequest(input.EndSession, context);
    }
    if (input.ExecuteStatement !== undefined) {
        bodyParams["ExecuteStatement"] = serializeAws_json1_0ExecuteStatementRequest(input.ExecuteStatement, context);
    }
    if (input.FetchPage !== undefined) {
        bodyParams["FetchPage"] = serializeAws_json1_0FetchPageRequest(input.FetchPage, context);
    }
    if (input.SessionToken !== undefined) {
        bodyParams["SessionToken"] = input.SessionToken;
    }
    if (input.StartSession !== undefined) {
        bodyParams["StartSession"] = serializeAws_json1_0StartSessionRequest(input.StartSession, context);
    }
    if (input.StartTransaction !== undefined) {
        bodyParams["StartTransaction"] = serializeAws_json1_0StartTransactionRequest(input.StartTransaction, context);
    }
    return bodyParams;
};
const serializeAws_json1_0StartSessionRequest = (input, context) => {
    const bodyParams = {};
    if (input.LedgerName !== undefined) {
        bodyParams["LedgerName"] = input.LedgerName;
    }
    return bodyParams;
};
const serializeAws_json1_0StartTransactionRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_0StatementParameters = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_0ValueHolder(entry, context));
    }
    return contents;
};
const serializeAws_json1_0ValueHolder = (input, context) => {
    const bodyParams = {};
    if (input.IonBinary !== undefined) {
        bodyParams["IonBinary"] = Buffer.from(input.IonBinary).toString("utf-8");
    }
    if (input.IonText !== undefined) {
        bodyParams["IonText"] = input.IonText;
    }
    return bodyParams;
};
const deserializeAws_json1_0AbortTransactionResult = (output, context) => {
    let contents = {
        __type: "AbortTransactionResult"
    };
    return contents;
};
const deserializeAws_json1_0BadRequestException = (output, context) => {
    let contents = {
        __type: "BadRequestException",
        Code: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_0CommitTransactionResult = (output, context) => {
    let contents = {
        __type: "CommitTransactionResult",
        CommitDigest: undefined,
        TransactionId: undefined
    };
    if (output.CommitDigest !== undefined && output.CommitDigest !== null) {
        contents.CommitDigest = Uint8Array.from(output.CommitDigest);
    }
    if (output.TransactionId !== undefined && output.TransactionId !== null) {
        contents.TransactionId = output.TransactionId;
    }
    return contents;
};
const deserializeAws_json1_0EndSessionResult = (output, context) => {
    let contents = {
        __type: "EndSessionResult"
    };
    return contents;
};
const deserializeAws_json1_0ExecuteStatementResult = (output, context) => {
    let contents = {
        __type: "ExecuteStatementResult",
        FirstPage: undefined
    };
    if (output.FirstPage !== undefined && output.FirstPage !== null) {
        contents.FirstPage = deserializeAws_json1_0Page(output.FirstPage, context);
    }
    return contents;
};
const deserializeAws_json1_0FetchPageResult = (output, context) => {
    let contents = {
        __type: "FetchPageResult",
        Page: undefined
    };
    if (output.Page !== undefined && output.Page !== null) {
        contents.Page = deserializeAws_json1_0Page(output.Page, context);
    }
    return contents;
};
const deserializeAws_json1_0InvalidSessionException = (output, context) => {
    let contents = {
        __type: "InvalidSessionException",
        Code: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_0LimitExceededException = (output, context) => {
    let contents = {
        __type: "LimitExceededException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_0OccConflictException = (output, context) => {
    let contents = {
        __type: "OccConflictException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_0Page = (output, context) => {
    let contents = {
        __type: "Page",
        NextPageToken: undefined,
        Values: undefined
    };
    if (output.NextPageToken !== undefined && output.NextPageToken !== null) {
        contents.NextPageToken = output.NextPageToken;
    }
    if (output.Values !== undefined && output.Values !== null) {
        contents.Values = deserializeAws_json1_0ValueHolders(output.Values, context);
    }
    return contents;
};
const deserializeAws_json1_0RateExceededException = (output, context) => {
    let contents = {
        __type: "RateExceededException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_0SendCommandResult = (output, context) => {
    let contents = {
        __type: "SendCommandResult",
        AbortTransaction: undefined,
        CommitTransaction: undefined,
        EndSession: undefined,
        ExecuteStatement: undefined,
        FetchPage: undefined,
        StartSession: undefined,
        StartTransaction: undefined
    };
    if (output.AbortTransaction !== undefined &&
        output.AbortTransaction !== null) {
        contents.AbortTransaction = deserializeAws_json1_0AbortTransactionResult(output.AbortTransaction, context);
    }
    if (output.CommitTransaction !== undefined &&
        output.CommitTransaction !== null) {
        contents.CommitTransaction = deserializeAws_json1_0CommitTransactionResult(output.CommitTransaction, context);
    }
    if (output.EndSession !== undefined && output.EndSession !== null) {
        contents.EndSession = deserializeAws_json1_0EndSessionResult(output.EndSession, context);
    }
    if (output.ExecuteStatement !== undefined &&
        output.ExecuteStatement !== null) {
        contents.ExecuteStatement = deserializeAws_json1_0ExecuteStatementResult(output.ExecuteStatement, context);
    }
    if (output.FetchPage !== undefined && output.FetchPage !== null) {
        contents.FetchPage = deserializeAws_json1_0FetchPageResult(output.FetchPage, context);
    }
    if (output.StartSession !== undefined && output.StartSession !== null) {
        contents.StartSession = deserializeAws_json1_0StartSessionResult(output.StartSession, context);
    }
    if (output.StartTransaction !== undefined &&
        output.StartTransaction !== null) {
        contents.StartTransaction = deserializeAws_json1_0StartTransactionResult(output.StartTransaction, context);
    }
    return contents;
};
const deserializeAws_json1_0StartSessionResult = (output, context) => {
    let contents = {
        __type: "StartSessionResult",
        SessionToken: undefined
    };
    if (output.SessionToken !== undefined && output.SessionToken !== null) {
        contents.SessionToken = output.SessionToken;
    }
    return contents;
};
const deserializeAws_json1_0StartTransactionResult = (output, context) => {
    let contents = {
        __type: "StartTransactionResult",
        TransactionId: undefined
    };
    if (output.TransactionId !== undefined && output.TransactionId !== null) {
        contents.TransactionId = output.TransactionId;
    }
    return contents;
};
const deserializeAws_json1_0ValueHolder = (output, context) => {
    let contents = {
        __type: "ValueHolder",
        IonBinary: undefined,
        IonText: undefined
    };
    if (output.IonBinary !== undefined && output.IonBinary !== null) {
        contents.IonBinary = Uint8Array.from(output.IonBinary);
    }
    if (output.IonText !== undefined && output.IonText !== null) {
        contents.IonText = output.IonText;
    }
    return contents;
};
const deserializeAws_json1_0ValueHolders = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0ValueHolder(entry, context));
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
const parseBody = (streamBody, context) => {
    return collectBodyString(streamBody, context).then(encoded => {
        if (encoded.length) {
            return JSON.parse(encoded);
        }
        return {};
    });
};
//# sourceMappingURL=Aws_json1_0.js.map