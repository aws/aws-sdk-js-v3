"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_0DescribeStreamCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDBStreams_20120810.DescribeStream";
    let body;
    body = JSON.stringify(serializeAws_json1_0DescribeStreamInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0DescribeStreamCommand = serializeAws_json1_0DescribeStreamCommand;
async function serializeAws_json1_0GetRecordsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDBStreams_20120810.GetRecords";
    let body;
    body = JSON.stringify(serializeAws_json1_0GetRecordsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0GetRecordsCommand = serializeAws_json1_0GetRecordsCommand;
async function serializeAws_json1_0GetShardIteratorCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDBStreams_20120810.GetShardIterator";
    let body;
    body = JSON.stringify(serializeAws_json1_0GetShardIteratorInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0GetShardIteratorCommand = serializeAws_json1_0GetShardIteratorCommand;
async function serializeAws_json1_0ListStreamsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.0";
    headers["X-Amz-Target"] = "DynamoDBStreams_20120810.ListStreams";
    let body;
    body = JSON.stringify(serializeAws_json1_0ListStreamsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_0ListStreamsCommand = serializeAws_json1_0ListStreamsCommand;
async function deserializeAws_json1_0DescribeStreamCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0DescribeStreamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0DescribeStreamOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeStreamOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0DescribeStreamCommand = deserializeAws_json1_0DescribeStreamCommand;
async function deserializeAws_json1_0DescribeStreamCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0GetRecordsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0GetRecordsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0GetRecordsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetRecordsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0GetRecordsCommand = deserializeAws_json1_0GetRecordsCommand;
async function deserializeAws_json1_0GetRecordsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ExpiredIteratorException":
        case "com.amazonaws.dynamodb.streams.v20120810#ExpiredIteratorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ExpiredIteratorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TrimmedDataAccessException":
        case "com.amazonaws.dynamodb.streams.v20120810#TrimmedDataAccessException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0TrimmedDataAccessExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.dynamodb.v20120810#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0GetShardIteratorCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0GetShardIteratorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0GetShardIteratorOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetShardIteratorOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0GetShardIteratorCommand = deserializeAws_json1_0GetShardIteratorCommand;
async function deserializeAws_json1_0GetShardIteratorCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "TrimmedDataAccessException":
        case "com.amazonaws.dynamodb.streams.v20120810#TrimmedDataAccessException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0TrimmedDataAccessExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_0ListStreamsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_0ListStreamsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_0ListStreamsOutput(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListStreamsOutput" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_0ListStreamsCommand = deserializeAws_json1_0ListStreamsCommand;
async function deserializeAws_json1_0ListStreamsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb.v20120810#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_0ExpiredIteratorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ExpiredIteratorException(body, context);
    const contents = Object.assign({ name: "ExpiredIteratorException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0TrimmedDataAccessExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0TrimmedDataAccessException(body, context);
    const contents = Object.assign({ name: "TrimmedDataAccessException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0InternalServerErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0InternalServerError(body, context);
    const contents = Object.assign({ name: "InternalServerError", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0LimitExceededException(body, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_0ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_0ResourceNotFoundException(body, context);
    const contents = Object.assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_0DescribeStreamInput = (input, context) => {
    const bodyParams = {};
    if (input.ExclusiveStartShardId !== undefined) {
        bodyParams["ExclusiveStartShardId"] = input.ExclusiveStartShardId;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.StreamArn !== undefined) {
        bodyParams["StreamArn"] = input.StreamArn;
    }
    return bodyParams;
};
const serializeAws_json1_0GetRecordsInput = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.ShardIterator !== undefined) {
        bodyParams["ShardIterator"] = input.ShardIterator;
    }
    return bodyParams;
};
const serializeAws_json1_0GetShardIteratorInput = (input, context) => {
    const bodyParams = {};
    if (input.SequenceNumber !== undefined) {
        bodyParams["SequenceNumber"] = input.SequenceNumber;
    }
    if (input.ShardId !== undefined) {
        bodyParams["ShardId"] = input.ShardId;
    }
    if (input.ShardIteratorType !== undefined) {
        bodyParams["ShardIteratorType"] = input.ShardIteratorType;
    }
    if (input.StreamArn !== undefined) {
        bodyParams["StreamArn"] = input.StreamArn;
    }
    return bodyParams;
};
const serializeAws_json1_0ListStreamsInput = (input, context) => {
    const bodyParams = {};
    if (input.ExclusiveStartStreamArn !== undefined) {
        bodyParams["ExclusiveStartStreamArn"] = input.ExclusiveStartStreamArn;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.TableName !== undefined) {
        bodyParams["TableName"] = input.TableName;
    }
    return bodyParams;
};
const deserializeAws_json1_0DescribeStreamOutput = (output, context) => {
    let contents = {
        __type: "DescribeStreamOutput",
        StreamDescription: undefined
    };
    if (output.StreamDescription !== undefined &&
        output.StreamDescription !== null) {
        contents.StreamDescription = deserializeAws_json1_0StreamDescription(output.StreamDescription, context);
    }
    return contents;
};
const deserializeAws_json1_0ExpiredIteratorException = (output, context) => {
    let contents = {
        __type: "ExpiredIteratorException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0GetRecordsOutput = (output, context) => {
    let contents = {
        __type: "GetRecordsOutput",
        NextShardIterator: undefined,
        Records: undefined
    };
    if (output.NextShardIterator !== undefined &&
        output.NextShardIterator !== null) {
        contents.NextShardIterator = output.NextShardIterator;
    }
    if (output.Records !== undefined && output.Records !== null) {
        contents.Records = deserializeAws_json1_0RecordList(output.Records, context);
    }
    return contents;
};
const deserializeAws_json1_0GetShardIteratorOutput = (output, context) => {
    let contents = {
        __type: "GetShardIteratorOutput",
        ShardIterator: undefined
    };
    if (output.ShardIterator !== undefined && output.ShardIterator !== null) {
        contents.ShardIterator = output.ShardIterator;
    }
    return contents;
};
const deserializeAws_json1_0Identity = (output, context) => {
    let contents = {
        __type: "Identity",
        PrincipalId: undefined,
        Type: undefined
    };
    if (output.PrincipalId !== undefined && output.PrincipalId !== null) {
        contents.PrincipalId = output.PrincipalId;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_0ListStreamsOutput = (output, context) => {
    let contents = {
        __type: "ListStreamsOutput",
        LastEvaluatedStreamArn: undefined,
        Streams: undefined
    };
    if (output.LastEvaluatedStreamArn !== undefined &&
        output.LastEvaluatedStreamArn !== null) {
        contents.LastEvaluatedStreamArn = output.LastEvaluatedStreamArn;
    }
    if (output.Streams !== undefined && output.Streams !== null) {
        contents.Streams = deserializeAws_json1_0StreamList(output.Streams, context);
    }
    return contents;
};
const deserializeAws_json1_0_Record = (output, context) => {
    let contents = {
        __type: "Record",
        awsRegion: undefined,
        dynamodb: undefined,
        eventID: undefined,
        eventName: undefined,
        eventSource: undefined,
        eventVersion: undefined,
        userIdentity: undefined
    };
    if (output.awsRegion !== undefined && output.awsRegion !== null) {
        contents.awsRegion = output.awsRegion;
    }
    if (output.dynamodb !== undefined && output.dynamodb !== null) {
        contents.dynamodb = deserializeAws_json1_0StreamRecord(output.dynamodb, context);
    }
    if (output.eventID !== undefined && output.eventID !== null) {
        contents.eventID = output.eventID;
    }
    if (output.eventName !== undefined && output.eventName !== null) {
        contents.eventName = output.eventName;
    }
    if (output.eventSource !== undefined && output.eventSource !== null) {
        contents.eventSource = output.eventSource;
    }
    if (output.eventVersion !== undefined && output.eventVersion !== null) {
        contents.eventVersion = output.eventVersion;
    }
    if (output.userIdentity !== undefined && output.userIdentity !== null) {
        contents.userIdentity = deserializeAws_json1_0Identity(output.userIdentity, context);
    }
    return contents;
};
const deserializeAws_json1_0RecordList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0_Record(entry, context));
};
const deserializeAws_json1_0SequenceNumberRange = (output, context) => {
    let contents = {
        __type: "SequenceNumberRange",
        EndingSequenceNumber: undefined,
        StartingSequenceNumber: undefined
    };
    if (output.EndingSequenceNumber !== undefined &&
        output.EndingSequenceNumber !== null) {
        contents.EndingSequenceNumber = output.EndingSequenceNumber;
    }
    if (output.StartingSequenceNumber !== undefined &&
        output.StartingSequenceNumber !== null) {
        contents.StartingSequenceNumber = output.StartingSequenceNumber;
    }
    return contents;
};
const deserializeAws_json1_0Shard = (output, context) => {
    let contents = {
        __type: "Shard",
        ParentShardId: undefined,
        SequenceNumberRange: undefined,
        ShardId: undefined
    };
    if (output.ParentShardId !== undefined && output.ParentShardId !== null) {
        contents.ParentShardId = output.ParentShardId;
    }
    if (output.SequenceNumberRange !== undefined &&
        output.SequenceNumberRange !== null) {
        contents.SequenceNumberRange = deserializeAws_json1_0SequenceNumberRange(output.SequenceNumberRange, context);
    }
    if (output.ShardId !== undefined && output.ShardId !== null) {
        contents.ShardId = output.ShardId;
    }
    return contents;
};
const deserializeAws_json1_0ShardDescriptionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0Shard(entry, context));
};
const deserializeAws_json1_0_Stream = (output, context) => {
    let contents = {
        __type: "Stream",
        StreamArn: undefined,
        StreamLabel: undefined,
        TableName: undefined
    };
    if (output.StreamArn !== undefined && output.StreamArn !== null) {
        contents.StreamArn = output.StreamArn;
    }
    if (output.StreamLabel !== undefined && output.StreamLabel !== null) {
        contents.StreamLabel = output.StreamLabel;
    }
    if (output.TableName !== undefined && output.TableName !== null) {
        contents.TableName = output.TableName;
    }
    return contents;
};
const deserializeAws_json1_0StreamDescription = (output, context) => {
    let contents = {
        __type: "StreamDescription",
        CreationRequestDateTime: undefined,
        KeySchema: undefined,
        LastEvaluatedShardId: undefined,
        Shards: undefined,
        StreamArn: undefined,
        StreamLabel: undefined,
        StreamStatus: undefined,
        StreamViewType: undefined,
        TableName: undefined
    };
    if (output.CreationRequestDateTime !== undefined &&
        output.CreationRequestDateTime !== null) {
        contents.CreationRequestDateTime = new Date(Math.round(output.CreationRequestDateTime * 1000));
    }
    if (output.KeySchema !== undefined && output.KeySchema !== null) {
        contents.KeySchema = deserializeAws_json1_0KeySchema(output.KeySchema, context);
    }
    if (output.LastEvaluatedShardId !== undefined &&
        output.LastEvaluatedShardId !== null) {
        contents.LastEvaluatedShardId = output.LastEvaluatedShardId;
    }
    if (output.Shards !== undefined && output.Shards !== null) {
        contents.Shards = deserializeAws_json1_0ShardDescriptionList(output.Shards, context);
    }
    if (output.StreamArn !== undefined && output.StreamArn !== null) {
        contents.StreamArn = output.StreamArn;
    }
    if (output.StreamLabel !== undefined && output.StreamLabel !== null) {
        contents.StreamLabel = output.StreamLabel;
    }
    if (output.StreamStatus !== undefined && output.StreamStatus !== null) {
        contents.StreamStatus = output.StreamStatus;
    }
    if (output.StreamViewType !== undefined && output.StreamViewType !== null) {
        contents.StreamViewType = output.StreamViewType;
    }
    if (output.TableName !== undefined && output.TableName !== null) {
        contents.TableName = output.TableName;
    }
    return contents;
};
const deserializeAws_json1_0StreamList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0_Stream(entry, context));
};
const deserializeAws_json1_0StreamRecord = (output, context) => {
    let contents = {
        __type: "StreamRecord",
        ApproximateCreationDateTime: undefined,
        Keys: undefined,
        NewImage: undefined,
        OldImage: undefined,
        SequenceNumber: undefined,
        SizeBytes: undefined,
        StreamViewType: undefined
    };
    if (output.ApproximateCreationDateTime !== undefined &&
        output.ApproximateCreationDateTime !== null) {
        contents.ApproximateCreationDateTime = new Date(Math.round(output.ApproximateCreationDateTime * 1000));
    }
    if (output.Keys !== undefined && output.Keys !== null) {
        contents.Keys = deserializeAws_json1_0AttributeMap(output.Keys, context);
    }
    if (output.NewImage !== undefined && output.NewImage !== null) {
        contents.NewImage = deserializeAws_json1_0AttributeMap(output.NewImage, context);
    }
    if (output.OldImage !== undefined && output.OldImage !== null) {
        contents.OldImage = deserializeAws_json1_0AttributeMap(output.OldImage, context);
    }
    if (output.SequenceNumber !== undefined && output.SequenceNumber !== null) {
        contents.SequenceNumber = output.SequenceNumber;
    }
    if (output.SizeBytes !== undefined && output.SizeBytes !== null) {
        contents.SizeBytes = output.SizeBytes;
    }
    if (output.StreamViewType !== undefined && output.StreamViewType !== null) {
        contents.StreamViewType = output.StreamViewType;
    }
    return contents;
};
const deserializeAws_json1_0TrimmedDataAccessException = (output, context) => {
    let contents = {
        __type: "TrimmedDataAccessException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0AttributeMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_0AttributeValue(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_0AttributeValue = (output, context) => {
    let contents = {
        __type: "AttributeValue",
        B: undefined,
        BOOL: undefined,
        BS: undefined,
        L: undefined,
        M: undefined,
        N: undefined,
        NS: undefined,
        NULL: undefined,
        S: undefined,
        SS: undefined
    };
    if (output.B !== undefined && output.B !== null) {
        contents.B = Uint8Array.from(output.B);
    }
    if (output.BOOL !== undefined && output.BOOL !== null) {
        contents.BOOL = output.BOOL;
    }
    if (output.BS !== undefined && output.BS !== null) {
        contents.BS = deserializeAws_json1_0BinarySetAttributeValue(output.BS, context);
    }
    if (output.L !== undefined && output.L !== null) {
        contents.L = deserializeAws_json1_0ListAttributeValue(output.L, context);
    }
    if (output.M !== undefined && output.M !== null) {
        contents.M = deserializeAws_json1_0MapAttributeValue(output.M, context);
    }
    if (output.N !== undefined && output.N !== null) {
        contents.N = output.N;
    }
    if (output.NS !== undefined && output.NS !== null) {
        contents.NS = deserializeAws_json1_0NumberSetAttributeValue(output.NS, context);
    }
    if (output.NULL !== undefined && output.NULL !== null) {
        contents.NULL = output.NULL;
    }
    if (output.S !== undefined && output.S !== null) {
        contents.S = output.S;
    }
    if (output.SS !== undefined && output.SS !== null) {
        contents.SS = deserializeAws_json1_0StringSetAttributeValue(output.SS, context);
    }
    return contents;
};
const deserializeAws_json1_0BinarySetAttributeValue = (output, context) => {
    return (output || []).map((entry) => Uint8Array.from(entry));
};
const deserializeAws_json1_0InternalServerError = (output, context) => {
    let contents = {
        __type: "InternalServerError",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0KeySchema = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0KeySchemaElement(entry, context));
};
const deserializeAws_json1_0KeySchemaElement = (output, context) => {
    let contents = {
        __type: "KeySchemaElement",
        AttributeName: undefined,
        KeyType: undefined
    };
    if (output.AttributeName !== undefined && output.AttributeName !== null) {
        contents.AttributeName = output.AttributeName;
    }
    if (output.KeyType !== undefined && output.KeyType !== null) {
        contents.KeyType = output.KeyType;
    }
    return contents;
};
const deserializeAws_json1_0LimitExceededException = (output, context) => {
    let contents = {
        __type: "LimitExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0ListAttributeValue = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_0AttributeValue(entry, context));
};
const deserializeAws_json1_0MapAttributeValue = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = deserializeAws_json1_0AttributeValue(output[key], context);
    });
    return mapParams;
};
const deserializeAws_json1_0NumberSetAttributeValue = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_0ResourceNotFoundException = (output, context) => {
    let contents = {
        __type: "ResourceNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_0StringSetAttributeValue = (output, context) => {
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