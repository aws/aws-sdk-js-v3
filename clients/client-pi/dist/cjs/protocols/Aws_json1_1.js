"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1DescribeDimensionKeysCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "PerformanceInsightsv20180227.DescribeDimensionKeys";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDimensionKeysRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeDimensionKeysCommand = serializeAws_json1_1DescribeDimensionKeysCommand;
async function serializeAws_json1_1GetResourceMetricsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "PerformanceInsightsv20180227.GetResourceMetrics";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetResourceMetricsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetResourceMetricsCommand = serializeAws_json1_1GetResourceMetricsCommand;
async function deserializeAws_json1_1DescribeDimensionKeysCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeDimensionKeysCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDimensionKeysResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeDimensionKeysResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeDimensionKeysCommand = deserializeAws_json1_1DescribeDimensionKeysCommand;
async function deserializeAws_json1_1DescribeDimensionKeysCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceError":
        case "amazonaws.pi.shared#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "amazonaws.pi.shared#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "amazonaws.pi.shared#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetResourceMetricsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetResourceMetricsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetResourceMetricsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetResourceMetricsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetResourceMetricsCommand = deserializeAws_json1_1GetResourceMetricsCommand;
async function deserializeAws_json1_1GetResourceMetricsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServiceError":
        case "amazonaws.pi.shared#InternalServiceError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArgumentException":
        case "amazonaws.pi.shared#InvalidArgumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotAuthorizedException":
        case "amazonaws.pi.shared#NotAuthorizedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1InternalServiceErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServiceError(body, context);
    const contents = Object.assign({ name: "InternalServiceError", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidArgumentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidArgumentException(body, context);
    const contents = Object.assign({ name: "InvalidArgumentException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NotAuthorizedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NotAuthorizedException(body, context);
    const contents = Object.assign({ name: "NotAuthorizedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1DescribeDimensionKeysRequest = (input, context) => {
    const bodyParams = {};
    if (input.EndTime !== undefined) {
        bodyParams["EndTime"] = Math.round(input.EndTime.getTime() / 1000);
    }
    if (input.Filter !== undefined) {
        bodyParams["Filter"] = serializeAws_json1_1MetricQueryFilterMap(input.Filter, context);
    }
    if (input.GroupBy !== undefined) {
        bodyParams["GroupBy"] = serializeAws_json1_1DimensionGroup(input.GroupBy, context);
    }
    if (input.Identifier !== undefined) {
        bodyParams["Identifier"] = input.Identifier;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.Metric !== undefined) {
        bodyParams["Metric"] = input.Metric;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.PartitionBy !== undefined) {
        bodyParams["PartitionBy"] = serializeAws_json1_1DimensionGroup(input.PartitionBy, context);
    }
    if (input.PeriodInSeconds !== undefined) {
        bodyParams["PeriodInSeconds"] = input.PeriodInSeconds;
    }
    if (input.ServiceType !== undefined) {
        bodyParams["ServiceType"] = input.ServiceType;
    }
    if (input.StartTime !== undefined) {
        bodyParams["StartTime"] = Math.round(input.StartTime.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1DimensionGroup = (input, context) => {
    const bodyParams = {};
    if (input.Dimensions !== undefined) {
        bodyParams["Dimensions"] = serializeAws_json1_1StringList(input.Dimensions, context);
    }
    if (input.Group !== undefined) {
        bodyParams["Group"] = input.Group;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    return bodyParams;
};
const serializeAws_json1_1GetResourceMetricsRequest = (input, context) => {
    const bodyParams = {};
    if (input.EndTime !== undefined) {
        bodyParams["EndTime"] = Math.round(input.EndTime.getTime() / 1000);
    }
    if (input.Identifier !== undefined) {
        bodyParams["Identifier"] = input.Identifier;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.MetricQueries !== undefined) {
        bodyParams["MetricQueries"] = serializeAws_json1_1MetricQueryList(input.MetricQueries, context);
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.PeriodInSeconds !== undefined) {
        bodyParams["PeriodInSeconds"] = input.PeriodInSeconds;
    }
    if (input.ServiceType !== undefined) {
        bodyParams["ServiceType"] = input.ServiceType;
    }
    if (input.StartTime !== undefined) {
        bodyParams["StartTime"] = Math.round(input.StartTime.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1MetricQuery = (input, context) => {
    const bodyParams = {};
    if (input.Filter !== undefined) {
        bodyParams["Filter"] = serializeAws_json1_1MetricQueryFilterMap(input.Filter, context);
    }
    if (input.GroupBy !== undefined) {
        bodyParams["GroupBy"] = serializeAws_json1_1DimensionGroup(input.GroupBy, context);
    }
    if (input.Metric !== undefined) {
        bodyParams["Metric"] = input.Metric;
    }
    return bodyParams;
};
const serializeAws_json1_1MetricQueryFilterMap = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1MetricQueryList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1MetricQuery(entry, context));
    }
    return contents;
};
const serializeAws_json1_1StringList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const deserializeAws_json1_1InternalServiceError = (output, context) => {
    let contents = {
        __type: "InternalServiceError",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidArgumentException = (output, context) => {
    let contents = {
        __type: "InvalidArgumentException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1NotAuthorizedException = (output, context) => {
    let contents = {
        __type: "NotAuthorizedException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1DataPoint = (output, context) => {
    let contents = {
        __type: "DataPoint",
        Timestamp: undefined,
        Value: undefined
    };
    if (output.Timestamp !== undefined && output.Timestamp !== null) {
        contents.Timestamp = new Date(Math.round(output.Timestamp * 1000));
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1DataPointsList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DataPoint(entry, context));
};
const deserializeAws_json1_1DescribeDimensionKeysResponse = (output, context) => {
    let contents = {
        __type: "DescribeDimensionKeysResponse",
        AlignedEndTime: undefined,
        AlignedStartTime: undefined,
        Keys: undefined,
        NextToken: undefined,
        PartitionKeys: undefined
    };
    if (output.AlignedEndTime !== undefined && output.AlignedEndTime !== null) {
        contents.AlignedEndTime = new Date(Math.round(output.AlignedEndTime * 1000));
    }
    if (output.AlignedStartTime !== undefined &&
        output.AlignedStartTime !== null) {
        contents.AlignedStartTime = new Date(Math.round(output.AlignedStartTime * 1000));
    }
    if (output.Keys !== undefined && output.Keys !== null) {
        contents.Keys = deserializeAws_json1_1DimensionKeyDescriptionList(output.Keys, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.PartitionKeys !== undefined && output.PartitionKeys !== null) {
        contents.PartitionKeys = deserializeAws_json1_1ResponsePartitionKeyList(output.PartitionKeys, context);
    }
    return contents;
};
const deserializeAws_json1_1DimensionKeyDescription = (output, context) => {
    let contents = {
        __type: "DimensionKeyDescription",
        Dimensions: undefined,
        Partitions: undefined,
        Total: undefined
    };
    if (output.Dimensions !== undefined && output.Dimensions !== null) {
        contents.Dimensions = deserializeAws_json1_1DimensionMap(output.Dimensions, context);
    }
    if (output.Partitions !== undefined && output.Partitions !== null) {
        contents.Partitions = deserializeAws_json1_1MetricValuesList(output.Partitions, context);
    }
    if (output.Total !== undefined && output.Total !== null) {
        contents.Total = output.Total;
    }
    return contents;
};
const deserializeAws_json1_1DimensionKeyDescriptionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DimensionKeyDescription(entry, context));
};
const deserializeAws_json1_1DimensionMap = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1GetResourceMetricsResponse = (output, context) => {
    let contents = {
        __type: "GetResourceMetricsResponse",
        AlignedEndTime: undefined,
        AlignedStartTime: undefined,
        Identifier: undefined,
        MetricList: undefined,
        NextToken: undefined
    };
    if (output.AlignedEndTime !== undefined && output.AlignedEndTime !== null) {
        contents.AlignedEndTime = new Date(Math.round(output.AlignedEndTime * 1000));
    }
    if (output.AlignedStartTime !== undefined &&
        output.AlignedStartTime !== null) {
        contents.AlignedStartTime = new Date(Math.round(output.AlignedStartTime * 1000));
    }
    if (output.Identifier !== undefined && output.Identifier !== null) {
        contents.Identifier = output.Identifier;
    }
    if (output.MetricList !== undefined && output.MetricList !== null) {
        contents.MetricList = deserializeAws_json1_1MetricKeyDataPointsList(output.MetricList, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1MetricKeyDataPoints = (output, context) => {
    let contents = {
        __type: "MetricKeyDataPoints",
        DataPoints: undefined,
        Key: undefined
    };
    if (output.DataPoints !== undefined && output.DataPoints !== null) {
        contents.DataPoints = deserializeAws_json1_1DataPointsList(output.DataPoints, context);
    }
    if (output.Key !== undefined && output.Key !== null) {
        contents.Key = deserializeAws_json1_1ResponseResourceMetricKey(output.Key, context);
    }
    return contents;
};
const deserializeAws_json1_1MetricKeyDataPointsList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1MetricKeyDataPoints(entry, context));
};
const deserializeAws_json1_1MetricValuesList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ResponsePartitionKey = (output, context) => {
    let contents = {
        __type: "ResponsePartitionKey",
        Dimensions: undefined
    };
    if (output.Dimensions !== undefined && output.Dimensions !== null) {
        contents.Dimensions = deserializeAws_json1_1DimensionMap(output.Dimensions, context);
    }
    return contents;
};
const deserializeAws_json1_1ResponsePartitionKeyList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ResponsePartitionKey(entry, context));
};
const deserializeAws_json1_1ResponseResourceMetricKey = (output, context) => {
    let contents = {
        __type: "ResponseResourceMetricKey",
        Dimensions: undefined,
        Metric: undefined
    };
    if (output.Dimensions !== undefined && output.Dimensions !== null) {
        contents.Dimensions = deserializeAws_json1_1DimensionMap(output.Dimensions, context);
    }
    if (output.Metric !== undefined && output.Metric !== null) {
        contents.Metric = output.Metric;
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
const parseBody = (streamBody, context) => {
    return collectBodyString(streamBody, context).then(encoded => {
        if (encoded.length) {
            return JSON.parse(encoded);
        }
        return {};
    });
};
//# sourceMappingURL=Aws_json1_1.js.map