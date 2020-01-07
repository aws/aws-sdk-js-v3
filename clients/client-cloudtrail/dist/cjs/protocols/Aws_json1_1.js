"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1AddTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CloudTrail_20131101.AddTags";
    let body;
    body = JSON.stringify(serializeAws_json1_1AddTagsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AddTagsCommand = serializeAws_json1_1AddTagsCommand;
async function serializeAws_json1_1CreateTrailCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CloudTrail_20131101.CreateTrail";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateTrailRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateTrailCommand = serializeAws_json1_1CreateTrailCommand;
async function serializeAws_json1_1DeleteTrailCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CloudTrail_20131101.DeleteTrail";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteTrailRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteTrailCommand = serializeAws_json1_1DeleteTrailCommand;
async function serializeAws_json1_1DescribeTrailsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CloudTrail_20131101.DescribeTrails";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTrailsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeTrailsCommand = serializeAws_json1_1DescribeTrailsCommand;
async function serializeAws_json1_1GetEventSelectorsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CloudTrail_20131101.GetEventSelectors";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetEventSelectorsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetEventSelectorsCommand = serializeAws_json1_1GetEventSelectorsCommand;
async function serializeAws_json1_1GetInsightSelectorsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CloudTrail_20131101.GetInsightSelectors";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetInsightSelectorsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetInsightSelectorsCommand = serializeAws_json1_1GetInsightSelectorsCommand;
async function serializeAws_json1_1GetTrailCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CloudTrail_20131101.GetTrail";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetTrailRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetTrailCommand = serializeAws_json1_1GetTrailCommand;
async function serializeAws_json1_1GetTrailStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CloudTrail_20131101.GetTrailStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetTrailStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetTrailStatusCommand = serializeAws_json1_1GetTrailStatusCommand;
async function serializeAws_json1_1ListPublicKeysCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CloudTrail_20131101.ListPublicKeys";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListPublicKeysRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListPublicKeysCommand = serializeAws_json1_1ListPublicKeysCommand;
async function serializeAws_json1_1ListTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CloudTrail_20131101.ListTags";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsCommand = serializeAws_json1_1ListTagsCommand;
async function serializeAws_json1_1ListTrailsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CloudTrail_20131101.ListTrails";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTrailsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTrailsCommand = serializeAws_json1_1ListTrailsCommand;
async function serializeAws_json1_1LookupEventsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CloudTrail_20131101.LookupEvents";
    let body;
    body = JSON.stringify(serializeAws_json1_1LookupEventsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1LookupEventsCommand = serializeAws_json1_1LookupEventsCommand;
async function serializeAws_json1_1PutEventSelectorsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CloudTrail_20131101.PutEventSelectors";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutEventSelectorsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutEventSelectorsCommand = serializeAws_json1_1PutEventSelectorsCommand;
async function serializeAws_json1_1PutInsightSelectorsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CloudTrail_20131101.PutInsightSelectors";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutInsightSelectorsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutInsightSelectorsCommand = serializeAws_json1_1PutInsightSelectorsCommand;
async function serializeAws_json1_1RemoveTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CloudTrail_20131101.RemoveTags";
    let body;
    body = JSON.stringify(serializeAws_json1_1RemoveTagsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RemoveTagsCommand = serializeAws_json1_1RemoveTagsCommand;
async function serializeAws_json1_1StartLoggingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CloudTrail_20131101.StartLogging";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartLoggingRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartLoggingCommand = serializeAws_json1_1StartLoggingCommand;
async function serializeAws_json1_1StopLoggingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CloudTrail_20131101.StopLogging";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopLoggingRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopLoggingCommand = serializeAws_json1_1StopLoggingCommand;
async function serializeAws_json1_1UpdateTrailCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "CloudTrail_20131101.UpdateTrail";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateTrailRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateTrailCommand = serializeAws_json1_1UpdateTrailCommand;
async function deserializeAws_json1_1AddTagsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AddTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddTagsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AddTagsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AddTagsCommand = deserializeAws_json1_1AddTagsCommand;
async function deserializeAws_json1_1AddTagsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CloudTrailARNInvalidException":
        case "com.amazonaws.cloudtrail.v20131101#CloudTrailARNInvalidException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudTrailARNInvalidExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagParameterException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidTagParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTagParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTrailNameException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotOrganizationMasterAccountException":
        case "com.amazonaws.cloudtrail.v20131101#NotOrganizationMasterAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudtrail.v20131101#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceTypeNotSupportedException":
        case "com.amazonaws.cloudtrail.v20131101#ResourceTypeNotSupportedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceTypeNotSupportedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagsLimitExceededException":
        case "com.amazonaws.cloudtrail.v20131101#TagsLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagsLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateTrailCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateTrailCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateTrailResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateTrailResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateTrailCommand = deserializeAws_json1_1CreateTrailCommand;
async function deserializeAws_json1_1CreateTrailCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CloudTrailAccessNotEnabledException":
        case "com.amazonaws.cloudtrail.v20131101#CloudTrailAccessNotEnabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudTrailAccessNotEnabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudWatchLogsDeliveryUnavailableException":
        case "com.amazonaws.cloudtrail.v20131101#CloudWatchLogsDeliveryUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudWatchLogsDeliveryUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientDependencyServiceAccessPermissionException":
        case "com.amazonaws.cloudtrail.v20131101#InsufficientDependencyServiceAccessPermissionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientEncryptionPolicyException":
        case "com.amazonaws.cloudtrail.v20131101#InsufficientEncryptionPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InsufficientEncryptionPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientS3BucketPolicyException":
        case "com.amazonaws.cloudtrail.v20131101#InsufficientS3BucketPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InsufficientS3BucketPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientSnsTopicPolicyException":
        case "com.amazonaws.cloudtrail.v20131101#InsufficientSnsTopicPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InsufficientSnsTopicPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCloudWatchLogsLogGroupArnException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidCloudWatchLogsLogGroupArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCloudWatchLogsLogGroupArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCloudWatchLogsRoleArnException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidCloudWatchLogsRoleArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCloudWatchLogsRoleArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidKmsKeyIdException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidKmsKeyIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidKmsKeyIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidParameterCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidS3BucketNameException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidS3BucketNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidS3BucketNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidS3PrefixException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidS3PrefixException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidS3PrefixExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSnsTopicNameException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidSnsTopicNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSnsTopicNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagParameterException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidTagParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTagParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTrailNameException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KmsException":
        case "com.amazonaws.cloudtrail.v20131101#KmsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KmsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KmsKeyDisabledException":
        case "com.amazonaws.cloudtrail.v20131101#KmsKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KmsKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KmsKeyNotFoundException":
        case "com.amazonaws.cloudtrail.v20131101#KmsKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KmsKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MaximumNumberOfTrailsExceededException":
        case "com.amazonaws.cloudtrail.v20131101#MaximumNumberOfTrailsExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MaximumNumberOfTrailsExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotOrganizationMasterAccountException":
        case "com.amazonaws.cloudtrail.v20131101#NotOrganizationMasterAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationNotInAllFeaturesModeException":
        case "com.amazonaws.cloudtrail.v20131101#OrganizationNotInAllFeaturesModeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationNotInAllFeaturesModeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationsNotInUseException":
        case "com.amazonaws.cloudtrail.v20131101#OrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "S3BucketDoesNotExistException":
        case "com.amazonaws.cloudtrail.v20131101#S3BucketDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1S3BucketDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TrailAlreadyExistsException":
        case "com.amazonaws.cloudtrail.v20131101#TrailAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TrailAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TrailNotProvidedException":
        case "com.amazonaws.cloudtrail.v20131101#TrailNotProvidedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TrailNotProvidedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteTrailCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteTrailCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteTrailResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteTrailResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteTrailCommand = deserializeAws_json1_1DeleteTrailCommand;
async function deserializeAws_json1_1DeleteTrailCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InsufficientDependencyServiceAccessPermissionException":
        case "com.amazonaws.cloudtrail.v20131101#InsufficientDependencyServiceAccessPermissionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidHomeRegionException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidHomeRegionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidHomeRegionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTrailNameException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotOrganizationMasterAccountException":
        case "com.amazonaws.cloudtrail.v20131101#NotOrganizationMasterAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TrailNotFoundException":
        case "com.amazonaws.cloudtrail.v20131101#TrailNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeTrailsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeTrailsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTrailsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeTrailsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeTrailsCommand = deserializeAws_json1_1DescribeTrailsCommand;
async function deserializeAws_json1_1DescribeTrailsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidTrailNameException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetEventSelectorsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetEventSelectorsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetEventSelectorsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetEventSelectorsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetEventSelectorsCommand = deserializeAws_json1_1GetEventSelectorsCommand;
async function deserializeAws_json1_1GetEventSelectorsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidTrailNameException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TrailNotFoundException":
        case "com.amazonaws.cloudtrail.v20131101#TrailNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetInsightSelectorsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetInsightSelectorsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetInsightSelectorsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetInsightSelectorsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetInsightSelectorsCommand = deserializeAws_json1_1GetInsightSelectorsCommand;
async function deserializeAws_json1_1GetInsightSelectorsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InsightNotEnabledException":
        case "com.amazonaws.cloudtrail.v20131101#InsightNotEnabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InsightNotEnabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTrailNameException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TrailNotFoundException":
        case "com.amazonaws.cloudtrail.v20131101#TrailNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetTrailCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetTrailCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetTrailResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetTrailResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetTrailCommand = deserializeAws_json1_1GetTrailCommand;
async function deserializeAws_json1_1GetTrailCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidTrailNameException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TrailNotFoundException":
        case "com.amazonaws.cloudtrail.v20131101#TrailNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetTrailStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetTrailStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetTrailStatusResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetTrailStatusResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetTrailStatusCommand = deserializeAws_json1_1GetTrailStatusCommand;
async function deserializeAws_json1_1GetTrailStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidTrailNameException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TrailNotFoundException":
        case "com.amazonaws.cloudtrail.v20131101#TrailNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListPublicKeysCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListPublicKeysCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListPublicKeysResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListPublicKeysResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListPublicKeysCommand = deserializeAws_json1_1ListPublicKeysCommand;
async function deserializeAws_json1_1ListPublicKeysCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidTimeRangeException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidTimeRangeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTimeRangeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTokenException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListTagsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTagsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTagsCommand = deserializeAws_json1_1ListTagsCommand;
async function deserializeAws_json1_1ListTagsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CloudTrailARNInvalidException":
        case "com.amazonaws.cloudtrail.v20131101#CloudTrailARNInvalidException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudTrailARNInvalidExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTokenException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTrailNameException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudtrail.v20131101#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceTypeNotSupportedException":
        case "com.amazonaws.cloudtrail.v20131101#ResourceTypeNotSupportedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceTypeNotSupportedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListTrailsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTrailsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTrailsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTrailsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTrailsCommand = deserializeAws_json1_1ListTrailsCommand;
async function deserializeAws_json1_1ListTrailsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "OperationNotPermittedException":
        case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1LookupEventsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1LookupEventsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1LookupEventsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "LookupEventsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1LookupEventsCommand = deserializeAws_json1_1LookupEventsCommand;
async function deserializeAws_json1_1LookupEventsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidEventCategoryException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidEventCategoryException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidEventCategoryExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidLookupAttributesException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidLookupAttributesException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidLookupAttributesExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidMaxResultsException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidMaxResultsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidNextTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTimeRangeException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidTimeRangeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTimeRangeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutEventSelectorsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutEventSelectorsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutEventSelectorsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutEventSelectorsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutEventSelectorsCommand = deserializeAws_json1_1PutEventSelectorsCommand;
async function deserializeAws_json1_1PutEventSelectorsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InsufficientDependencyServiceAccessPermissionException":
        case "com.amazonaws.cloudtrail.v20131101#InsufficientDependencyServiceAccessPermissionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidEventSelectorsException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidEventSelectorsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidEventSelectorsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidHomeRegionException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidHomeRegionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidHomeRegionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTrailNameException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotOrganizationMasterAccountException":
        case "com.amazonaws.cloudtrail.v20131101#NotOrganizationMasterAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TrailNotFoundException":
        case "com.amazonaws.cloudtrail.v20131101#TrailNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutInsightSelectorsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutInsightSelectorsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutInsightSelectorsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "PutInsightSelectorsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutInsightSelectorsCommand = deserializeAws_json1_1PutInsightSelectorsCommand;
async function deserializeAws_json1_1PutInsightSelectorsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InsufficientEncryptionPolicyException":
        case "com.amazonaws.cloudtrail.v20131101#InsufficientEncryptionPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InsufficientEncryptionPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientS3BucketPolicyException":
        case "com.amazonaws.cloudtrail.v20131101#InsufficientS3BucketPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InsufficientS3BucketPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidHomeRegionException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidHomeRegionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidHomeRegionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidInsightSelectorsException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidInsightSelectorsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidInsightSelectorsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTrailNameException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotOrganizationMasterAccountException":
        case "com.amazonaws.cloudtrail.v20131101#NotOrganizationMasterAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TrailNotFoundException":
        case "com.amazonaws.cloudtrail.v20131101#TrailNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1RemoveTagsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RemoveTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RemoveTagsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RemoveTagsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RemoveTagsCommand = deserializeAws_json1_1RemoveTagsCommand;
async function deserializeAws_json1_1RemoveTagsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CloudTrailARNInvalidException":
        case "com.amazonaws.cloudtrail.v20131101#CloudTrailARNInvalidException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudTrailARNInvalidExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTagParameterException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidTagParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTagParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTrailNameException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotOrganizationMasterAccountException":
        case "com.amazonaws.cloudtrail.v20131101#NotOrganizationMasterAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudtrail.v20131101#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceTypeNotSupportedException":
        case "com.amazonaws.cloudtrail.v20131101#ResourceTypeNotSupportedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceTypeNotSupportedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartLoggingCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartLoggingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartLoggingResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartLoggingResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartLoggingCommand = deserializeAws_json1_1StartLoggingCommand;
async function deserializeAws_json1_1StartLoggingCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InsufficientDependencyServiceAccessPermissionException":
        case "com.amazonaws.cloudtrail.v20131101#InsufficientDependencyServiceAccessPermissionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidHomeRegionException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidHomeRegionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidHomeRegionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTrailNameException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotOrganizationMasterAccountException":
        case "com.amazonaws.cloudtrail.v20131101#NotOrganizationMasterAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TrailNotFoundException":
        case "com.amazonaws.cloudtrail.v20131101#TrailNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StopLoggingCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopLoggingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopLoggingResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopLoggingResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopLoggingCommand = deserializeAws_json1_1StopLoggingCommand;
async function deserializeAws_json1_1StopLoggingCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InsufficientDependencyServiceAccessPermissionException":
        case "com.amazonaws.cloudtrail.v20131101#InsufficientDependencyServiceAccessPermissionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidHomeRegionException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidHomeRegionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidHomeRegionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTrailNameException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotOrganizationMasterAccountException":
        case "com.amazonaws.cloudtrail.v20131101#NotOrganizationMasterAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TrailNotFoundException":
        case "com.amazonaws.cloudtrail.v20131101#TrailNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateTrailCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateTrailCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateTrailResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateTrailResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateTrailCommand = deserializeAws_json1_1UpdateTrailCommand;
async function deserializeAws_json1_1UpdateTrailCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CloudTrailAccessNotEnabledException":
        case "com.amazonaws.cloudtrail.v20131101#CloudTrailAccessNotEnabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudTrailAccessNotEnabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudWatchLogsDeliveryUnavailableException":
        case "com.amazonaws.cloudtrail.v20131101#CloudWatchLogsDeliveryUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudWatchLogsDeliveryUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientDependencyServiceAccessPermissionException":
        case "com.amazonaws.cloudtrail.v20131101#InsufficientDependencyServiceAccessPermissionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientEncryptionPolicyException":
        case "com.amazonaws.cloudtrail.v20131101#InsufficientEncryptionPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InsufficientEncryptionPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientS3BucketPolicyException":
        case "com.amazonaws.cloudtrail.v20131101#InsufficientS3BucketPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InsufficientS3BucketPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InsufficientSnsTopicPolicyException":
        case "com.amazonaws.cloudtrail.v20131101#InsufficientSnsTopicPolicyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InsufficientSnsTopicPolicyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCloudWatchLogsLogGroupArnException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidCloudWatchLogsLogGroupArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCloudWatchLogsLogGroupArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCloudWatchLogsRoleArnException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidCloudWatchLogsRoleArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCloudWatchLogsRoleArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidEventSelectorsException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidEventSelectorsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidEventSelectorsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidHomeRegionException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidHomeRegionException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidHomeRegionExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidKmsKeyIdException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidKmsKeyIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidKmsKeyIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidParameterCombinationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidS3BucketNameException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidS3BucketNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidS3BucketNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidS3PrefixException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidS3PrefixException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidS3PrefixExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidSnsTopicNameException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidSnsTopicNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidSnsTopicNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidTrailNameException":
        case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KmsException":
        case "com.amazonaws.cloudtrail.v20131101#KmsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KmsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KmsKeyDisabledException":
        case "com.amazonaws.cloudtrail.v20131101#KmsKeyDisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KmsKeyDisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KmsKeyNotFoundException":
        case "com.amazonaws.cloudtrail.v20131101#KmsKeyNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KmsKeyNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotOrganizationMasterAccountException":
        case "com.amazonaws.cloudtrail.v20131101#NotOrganizationMasterAccountException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationNotInAllFeaturesModeException":
        case "com.amazonaws.cloudtrail.v20131101#OrganizationNotInAllFeaturesModeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationNotInAllFeaturesModeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "OrganizationsNotInUseException":
        case "com.amazonaws.cloudtrail.v20131101#OrganizationsNotInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1OrganizationsNotInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "S3BucketDoesNotExistException":
        case "com.amazonaws.cloudtrail.v20131101#S3BucketDoesNotExistException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1S3BucketDoesNotExistExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TrailNotFoundException":
        case "com.amazonaws.cloudtrail.v20131101#TrailNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TrailNotProvidedException":
        case "com.amazonaws.cloudtrail.v20131101#TrailNotProvidedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TrailNotProvidedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1CloudTrailARNInvalidExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CloudTrailARNInvalidException(body, context);
    const contents = Object.assign({ name: "CloudTrailARNInvalidException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CloudTrailAccessNotEnabledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CloudTrailAccessNotEnabledException(body, context);
    const contents = Object.assign({ name: "CloudTrailAccessNotEnabledException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CloudWatchLogsDeliveryUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CloudWatchLogsDeliveryUnavailableException(body, context);
    const contents = Object.assign({ name: "CloudWatchLogsDeliveryUnavailableException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InsightNotEnabledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InsightNotEnabledException(body, context);
    const contents = Object.assign({ name: "InsightNotEnabledException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionException(body, context);
    const contents = Object.assign({ name: "InsufficientDependencyServiceAccessPermissionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InsufficientEncryptionPolicyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InsufficientEncryptionPolicyException(body, context);
    const contents = Object.assign({ name: "InsufficientEncryptionPolicyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InsufficientS3BucketPolicyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InsufficientS3BucketPolicyException(body, context);
    const contents = Object.assign({ name: "InsufficientS3BucketPolicyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InsufficientSnsTopicPolicyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InsufficientSnsTopicPolicyException(body, context);
    const contents = Object.assign({ name: "InsufficientSnsTopicPolicyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidCloudWatchLogsLogGroupArnExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidCloudWatchLogsLogGroupArnException(body, context);
    const contents = Object.assign({ name: "InvalidCloudWatchLogsLogGroupArnException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidCloudWatchLogsRoleArnExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidCloudWatchLogsRoleArnException(body, context);
    const contents = Object.assign({ name: "InvalidCloudWatchLogsRoleArnException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidEventCategoryExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidEventCategoryException(body, context);
    const contents = Object.assign({ name: "InvalidEventCategoryException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidEventSelectorsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidEventSelectorsException(body, context);
    const contents = Object.assign({ name: "InvalidEventSelectorsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidHomeRegionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidHomeRegionException(body, context);
    const contents = Object.assign({ name: "InvalidHomeRegionException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidInsightSelectorsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInsightSelectorsException(body, context);
    const contents = Object.assign({ name: "InvalidInsightSelectorsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidKmsKeyIdExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidKmsKeyIdException(body, context);
    const contents = Object.assign({ name: "InvalidKmsKeyIdException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidLookupAttributesExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidLookupAttributesException(body, context);
    const contents = Object.assign({ name: "InvalidLookupAttributesException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidMaxResultsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidMaxResultsException(body, context);
    const contents = Object.assign({ name: "InvalidMaxResultsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidNextTokenException(body, context);
    const contents = Object.assign({ name: "InvalidNextTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidParameterCombinationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterCombinationException(body, context);
    const contents = Object.assign({ name: "InvalidParameterCombinationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidS3BucketNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidS3BucketNameException(body, context);
    const contents = Object.assign({ name: "InvalidS3BucketNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidS3PrefixExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidS3PrefixException(body, context);
    const contents = Object.assign({ name: "InvalidS3PrefixException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidSnsTopicNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidSnsTopicNameException(body, context);
    const contents = Object.assign({ name: "InvalidSnsTopicNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidTagParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTagParameterException(body, context);
    const contents = Object.assign({ name: "InvalidTagParameterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidTimeRangeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTimeRangeException(body, context);
    const contents = Object.assign({ name: "InvalidTimeRangeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTokenException(body, context);
    const contents = Object.assign({ name: "InvalidTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidTrailNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTrailNameException(body, context);
    const contents = Object.assign({ name: "InvalidTrailNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1KmsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KmsException(body, context);
    const contents = Object.assign({ name: "KmsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1KmsKeyDisabledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KmsKeyDisabledException(body, context);
    const contents = Object.assign({ name: "KmsKeyDisabledException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1KmsKeyNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KmsKeyNotFoundException(body, context);
    const contents = Object.assign({ name: "KmsKeyNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1MaximumNumberOfTrailsExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaximumNumberOfTrailsExceededException(body, context);
    const contents = Object.assign({ name: "MaximumNumberOfTrailsExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NotOrganizationMasterAccountException(body, context);
    const contents = Object.assign({ name: "NotOrganizationMasterAccountException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1OperationNotPermittedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OperationNotPermittedException(body, context);
    const contents = Object.assign({ name: "OperationNotPermittedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1OrganizationNotInAllFeaturesModeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OrganizationNotInAllFeaturesModeException(body, context);
    const contents = Object.assign({ name: "OrganizationNotInAllFeaturesModeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1OrganizationsNotInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OrganizationsNotInUseException(body, context);
    const contents = Object.assign({ name: "OrganizationsNotInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
    const contents = Object.assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceTypeNotSupportedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceTypeNotSupportedException(body, context);
    const contents = Object.assign({ name: "ResourceTypeNotSupportedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1S3BucketDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1S3BucketDoesNotExistException(body, context);
    const contents = Object.assign({ name: "S3BucketDoesNotExistException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TagsLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TagsLimitExceededException(body, context);
    const contents = Object.assign({ name: "TagsLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TrailAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TrailAlreadyExistsException(body, context);
    const contents = Object.assign({ name: "TrailAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TrailNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TrailNotFoundException(body, context);
    const contents = Object.assign({ name: "TrailNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TrailNotProvidedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TrailNotProvidedException(body, context);
    const contents = Object.assign({ name: "TrailNotProvidedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UnsupportedOperationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedOperationException(body, context);
    const contents = Object.assign({ name: "UnsupportedOperationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AddTagsRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    if (input.TagsList !== undefined) {
        bodyParams["TagsList"] = serializeAws_json1_1TagsList(input.TagsList, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateTrailRequest = (input, context) => {
    const bodyParams = {};
    if (input.CloudWatchLogsLogGroupArn !== undefined) {
        bodyParams["CloudWatchLogsLogGroupArn"] = input.CloudWatchLogsLogGroupArn;
    }
    if (input.CloudWatchLogsRoleArn !== undefined) {
        bodyParams["CloudWatchLogsRoleArn"] = input.CloudWatchLogsRoleArn;
    }
    if (input.EnableLogFileValidation !== undefined) {
        bodyParams["EnableLogFileValidation"] = input.EnableLogFileValidation;
    }
    if (input.IncludeGlobalServiceEvents !== undefined) {
        bodyParams["IncludeGlobalServiceEvents"] = input.IncludeGlobalServiceEvents;
    }
    if (input.IsMultiRegionTrail !== undefined) {
        bodyParams["IsMultiRegionTrail"] = input.IsMultiRegionTrail;
    }
    if (input.IsOrganizationTrail !== undefined) {
        bodyParams["IsOrganizationTrail"] = input.IsOrganizationTrail;
    }
    if (input.KmsKeyId !== undefined) {
        bodyParams["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.S3BucketName !== undefined) {
        bodyParams["S3BucketName"] = input.S3BucketName;
    }
    if (input.S3KeyPrefix !== undefined) {
        bodyParams["S3KeyPrefix"] = input.S3KeyPrefix;
    }
    if (input.SnsTopicName !== undefined) {
        bodyParams["SnsTopicName"] = input.SnsTopicName;
    }
    if (input.TagsList !== undefined) {
        bodyParams["TagsList"] = serializeAws_json1_1TagsList(input.TagsList, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DataResource = (input, context) => {
    const bodyParams = {};
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1DataResourceValues(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DataResourceValues = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1DataResources = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1DataResource(entry, context));
    }
    return contents;
};
const serializeAws_json1_1DeleteTrailRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeTrailsRequest = (input, context) => {
    const bodyParams = {};
    if (input.includeShadowTrails !== undefined) {
        bodyParams["includeShadowTrails"] = input.includeShadowTrails;
    }
    if (input.trailNameList !== undefined) {
        bodyParams["trailNameList"] = serializeAws_json1_1TrailNameList(input.trailNameList, context);
    }
    return bodyParams;
};
const serializeAws_json1_1EventSelector = (input, context) => {
    const bodyParams = {};
    if (input.DataResources !== undefined) {
        bodyParams["DataResources"] = serializeAws_json1_1DataResources(input.DataResources, context);
    }
    if (input.ExcludeManagementEventSources !== undefined) {
        bodyParams["ExcludeManagementEventSources"] = serializeAws_json1_1ExcludeManagementEventSources(input.ExcludeManagementEventSources, context);
    }
    if (input.IncludeManagementEvents !== undefined) {
        bodyParams["IncludeManagementEvents"] = input.IncludeManagementEvents;
    }
    if (input.ReadWriteType !== undefined) {
        bodyParams["ReadWriteType"] = input.ReadWriteType;
    }
    return bodyParams;
};
const serializeAws_json1_1EventSelectors = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1EventSelector(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ExcludeManagementEventSources = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1GetEventSelectorsRequest = (input, context) => {
    const bodyParams = {};
    if (input.TrailName !== undefined) {
        bodyParams["TrailName"] = input.TrailName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetInsightSelectorsRequest = (input, context) => {
    const bodyParams = {};
    if (input.TrailName !== undefined) {
        bodyParams["TrailName"] = input.TrailName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetTrailRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1GetTrailStatusRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1InsightSelector = (input, context) => {
    const bodyParams = {};
    if (input.InsightType !== undefined) {
        bodyParams["InsightType"] = input.InsightType;
    }
    return bodyParams;
};
const serializeAws_json1_1InsightSelectors = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1InsightSelector(entry, context));
    }
    return contents;
};
const serializeAws_json1_1ListPublicKeysRequest = (input, context) => {
    const bodyParams = {};
    if (input.EndTime !== undefined) {
        bodyParams["EndTime"] = Math.round(input.EndTime.getTime() / 1000);
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.StartTime !== undefined) {
        bodyParams["StartTime"] = Math.round(input.StartTime.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1ListTagsRequest = (input, context) => {
    const bodyParams = {};
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ResourceIdList !== undefined) {
        bodyParams["ResourceIdList"] = serializeAws_json1_1ResourceIdList(input.ResourceIdList, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ListTrailsRequest = (input, context) => {
    const bodyParams = {};
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1LookupAttribute = (input, context) => {
    const bodyParams = {};
    if (input.AttributeKey !== undefined) {
        bodyParams["AttributeKey"] = input.AttributeKey;
    }
    if (input.AttributeValue !== undefined) {
        bodyParams["AttributeValue"] = input.AttributeValue;
    }
    return bodyParams;
};
const serializeAws_json1_1LookupAttributesList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1LookupAttribute(entry, context));
    }
    return contents;
};
const serializeAws_json1_1LookupEventsRequest = (input, context) => {
    const bodyParams = {};
    if (input.EndTime !== undefined) {
        bodyParams["EndTime"] = Math.round(input.EndTime.getTime() / 1000);
    }
    if (input.EventCategory !== undefined) {
        bodyParams["EventCategory"] = input.EventCategory;
    }
    if (input.LookupAttributes !== undefined) {
        bodyParams["LookupAttributes"] = serializeAws_json1_1LookupAttributesList(input.LookupAttributes, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.StartTime !== undefined) {
        bodyParams["StartTime"] = Math.round(input.StartTime.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1PutEventSelectorsRequest = (input, context) => {
    const bodyParams = {};
    if (input.EventSelectors !== undefined) {
        bodyParams["EventSelectors"] = serializeAws_json1_1EventSelectors(input.EventSelectors, context);
    }
    if (input.TrailName !== undefined) {
        bodyParams["TrailName"] = input.TrailName;
    }
    return bodyParams;
};
const serializeAws_json1_1PutInsightSelectorsRequest = (input, context) => {
    const bodyParams = {};
    if (input.InsightSelectors !== undefined) {
        bodyParams["InsightSelectors"] = serializeAws_json1_1InsightSelectors(input.InsightSelectors, context);
    }
    if (input.TrailName !== undefined) {
        bodyParams["TrailName"] = input.TrailName;
    }
    return bodyParams;
};
const serializeAws_json1_1RemoveTagsRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceId !== undefined) {
        bodyParams["ResourceId"] = input.ResourceId;
    }
    if (input.TagsList !== undefined) {
        bodyParams["TagsList"] = serializeAws_json1_1TagsList(input.TagsList, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ResourceIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1StartLoggingRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1StopLoggingRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1Tag = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1TagsList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Tag(entry, context));
    }
    return contents;
};
const serializeAws_json1_1TrailNameList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1UpdateTrailRequest = (input, context) => {
    const bodyParams = {};
    if (input.CloudWatchLogsLogGroupArn !== undefined) {
        bodyParams["CloudWatchLogsLogGroupArn"] = input.CloudWatchLogsLogGroupArn;
    }
    if (input.CloudWatchLogsRoleArn !== undefined) {
        bodyParams["CloudWatchLogsRoleArn"] = input.CloudWatchLogsRoleArn;
    }
    if (input.EnableLogFileValidation !== undefined) {
        bodyParams["EnableLogFileValidation"] = input.EnableLogFileValidation;
    }
    if (input.IncludeGlobalServiceEvents !== undefined) {
        bodyParams["IncludeGlobalServiceEvents"] = input.IncludeGlobalServiceEvents;
    }
    if (input.IsMultiRegionTrail !== undefined) {
        bodyParams["IsMultiRegionTrail"] = input.IsMultiRegionTrail;
    }
    if (input.IsOrganizationTrail !== undefined) {
        bodyParams["IsOrganizationTrail"] = input.IsOrganizationTrail;
    }
    if (input.KmsKeyId !== undefined) {
        bodyParams["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.S3BucketName !== undefined) {
        bodyParams["S3BucketName"] = input.S3BucketName;
    }
    if (input.S3KeyPrefix !== undefined) {
        bodyParams["S3KeyPrefix"] = input.S3KeyPrefix;
    }
    if (input.SnsTopicName !== undefined) {
        bodyParams["SnsTopicName"] = input.SnsTopicName;
    }
    return bodyParams;
};
const deserializeAws_json1_1AddTagsResponse = (output, context) => {
    let contents = {
        __type: "AddTagsResponse"
    };
    return contents;
};
const deserializeAws_json1_1CloudTrailARNInvalidException = (output, context) => {
    let contents = {
        __type: "CloudTrailARNInvalidException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1CloudTrailAccessNotEnabledException = (output, context) => {
    let contents = {
        __type: "CloudTrailAccessNotEnabledException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1CloudWatchLogsDeliveryUnavailableException = (output, context) => {
    let contents = {
        __type: "CloudWatchLogsDeliveryUnavailableException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1CreateTrailResponse = (output, context) => {
    let contents = {
        __type: "CreateTrailResponse",
        CloudWatchLogsLogGroupArn: undefined,
        CloudWatchLogsRoleArn: undefined,
        IncludeGlobalServiceEvents: undefined,
        IsMultiRegionTrail: undefined,
        IsOrganizationTrail: undefined,
        KmsKeyId: undefined,
        LogFileValidationEnabled: undefined,
        Name: undefined,
        S3BucketName: undefined,
        S3KeyPrefix: undefined,
        SnsTopicARN: undefined,
        SnsTopicName: undefined,
        TrailARN: undefined
    };
    if (output.CloudWatchLogsLogGroupArn !== undefined &&
        output.CloudWatchLogsLogGroupArn !== null) {
        contents.CloudWatchLogsLogGroupArn = output.CloudWatchLogsLogGroupArn;
    }
    if (output.CloudWatchLogsRoleArn !== undefined &&
        output.CloudWatchLogsRoleArn !== null) {
        contents.CloudWatchLogsRoleArn = output.CloudWatchLogsRoleArn;
    }
    if (output.IncludeGlobalServiceEvents !== undefined &&
        output.IncludeGlobalServiceEvents !== null) {
        contents.IncludeGlobalServiceEvents = output.IncludeGlobalServiceEvents;
    }
    if (output.IsMultiRegionTrail !== undefined &&
        output.IsMultiRegionTrail !== null) {
        contents.IsMultiRegionTrail = output.IsMultiRegionTrail;
    }
    if (output.IsOrganizationTrail !== undefined &&
        output.IsOrganizationTrail !== null) {
        contents.IsOrganizationTrail = output.IsOrganizationTrail;
    }
    if (output.KmsKeyId !== undefined && output.KmsKeyId !== null) {
        contents.KmsKeyId = output.KmsKeyId;
    }
    if (output.LogFileValidationEnabled !== undefined &&
        output.LogFileValidationEnabled !== null) {
        contents.LogFileValidationEnabled = output.LogFileValidationEnabled;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.S3BucketName !== undefined && output.S3BucketName !== null) {
        contents.S3BucketName = output.S3BucketName;
    }
    if (output.S3KeyPrefix !== undefined && output.S3KeyPrefix !== null) {
        contents.S3KeyPrefix = output.S3KeyPrefix;
    }
    if (output.SnsTopicARN !== undefined && output.SnsTopicARN !== null) {
        contents.SnsTopicARN = output.SnsTopicARN;
    }
    if (output.SnsTopicName !== undefined && output.SnsTopicName !== null) {
        contents.SnsTopicName = output.SnsTopicName;
    }
    if (output.TrailARN !== undefined && output.TrailARN !== null) {
        contents.TrailARN = output.TrailARN;
    }
    return contents;
};
const deserializeAws_json1_1DataResource = (output, context) => {
    let contents = {
        __type: "DataResource",
        Type: undefined,
        Values: undefined
    };
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    if (output.Values !== undefined && output.Values !== null) {
        contents.Values = deserializeAws_json1_1DataResourceValues(output.Values, context);
    }
    return contents;
};
const deserializeAws_json1_1DataResourceValues = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1DataResources = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DataResource(entry, context));
};
const deserializeAws_json1_1DeleteTrailResponse = (output, context) => {
    let contents = {
        __type: "DeleteTrailResponse"
    };
    return contents;
};
const deserializeAws_json1_1DescribeTrailsResponse = (output, context) => {
    let contents = {
        __type: "DescribeTrailsResponse",
        trailList: undefined
    };
    if (output.trailList !== undefined && output.trailList !== null) {
        contents.trailList = deserializeAws_json1_1TrailList(output.trailList, context);
    }
    return contents;
};
const deserializeAws_json1_1Event = (output, context) => {
    let contents = {
        __type: "Event",
        AccessKeyId: undefined,
        CloudTrailEvent: undefined,
        EventId: undefined,
        EventName: undefined,
        EventSource: undefined,
        EventTime: undefined,
        ReadOnly: undefined,
        Resources: undefined,
        Username: undefined
    };
    if (output.AccessKeyId !== undefined && output.AccessKeyId !== null) {
        contents.AccessKeyId = output.AccessKeyId;
    }
    if (output.CloudTrailEvent !== undefined && output.CloudTrailEvent !== null) {
        contents.CloudTrailEvent = output.CloudTrailEvent;
    }
    if (output.EventId !== undefined && output.EventId !== null) {
        contents.EventId = output.EventId;
    }
    if (output.EventName !== undefined && output.EventName !== null) {
        contents.EventName = output.EventName;
    }
    if (output.EventSource !== undefined && output.EventSource !== null) {
        contents.EventSource = output.EventSource;
    }
    if (output.EventTime !== undefined && output.EventTime !== null) {
        contents.EventTime = new Date(Math.round(output.EventTime * 1000));
    }
    if (output.ReadOnly !== undefined && output.ReadOnly !== null) {
        contents.ReadOnly = output.ReadOnly;
    }
    if (output.Resources !== undefined && output.Resources !== null) {
        contents.Resources = deserializeAws_json1_1ResourceList(output.Resources, context);
    }
    if (output.Username !== undefined && output.Username !== null) {
        contents.Username = output.Username;
    }
    return contents;
};
const deserializeAws_json1_1EventSelector = (output, context) => {
    let contents = {
        __type: "EventSelector",
        DataResources: undefined,
        ExcludeManagementEventSources: undefined,
        IncludeManagementEvents: undefined,
        ReadWriteType: undefined
    };
    if (output.DataResources !== undefined && output.DataResources !== null) {
        contents.DataResources = deserializeAws_json1_1DataResources(output.DataResources, context);
    }
    if (output.ExcludeManagementEventSources !== undefined &&
        output.ExcludeManagementEventSources !== null) {
        contents.ExcludeManagementEventSources = deserializeAws_json1_1ExcludeManagementEventSources(output.ExcludeManagementEventSources, context);
    }
    if (output.IncludeManagementEvents !== undefined &&
        output.IncludeManagementEvents !== null) {
        contents.IncludeManagementEvents = output.IncludeManagementEvents;
    }
    if (output.ReadWriteType !== undefined && output.ReadWriteType !== null) {
        contents.ReadWriteType = output.ReadWriteType;
    }
    return contents;
};
const deserializeAws_json1_1EventSelectors = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EventSelector(entry, context));
};
const deserializeAws_json1_1EventsList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Event(entry, context));
};
const deserializeAws_json1_1ExcludeManagementEventSources = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1GetEventSelectorsResponse = (output, context) => {
    let contents = {
        __type: "GetEventSelectorsResponse",
        EventSelectors: undefined,
        TrailARN: undefined
    };
    if (output.EventSelectors !== undefined && output.EventSelectors !== null) {
        contents.EventSelectors = deserializeAws_json1_1EventSelectors(output.EventSelectors, context);
    }
    if (output.TrailARN !== undefined && output.TrailARN !== null) {
        contents.TrailARN = output.TrailARN;
    }
    return contents;
};
const deserializeAws_json1_1GetInsightSelectorsResponse = (output, context) => {
    let contents = {
        __type: "GetInsightSelectorsResponse",
        InsightSelectors: undefined,
        TrailARN: undefined
    };
    if (output.InsightSelectors !== undefined &&
        output.InsightSelectors !== null) {
        contents.InsightSelectors = deserializeAws_json1_1InsightSelectors(output.InsightSelectors, context);
    }
    if (output.TrailARN !== undefined && output.TrailARN !== null) {
        contents.TrailARN = output.TrailARN;
    }
    return contents;
};
const deserializeAws_json1_1GetTrailResponse = (output, context) => {
    let contents = {
        __type: "GetTrailResponse",
        Trail: undefined
    };
    if (output.Trail !== undefined && output.Trail !== null) {
        contents.Trail = deserializeAws_json1_1Trail(output.Trail, context);
    }
    return contents;
};
const deserializeAws_json1_1GetTrailStatusResponse = (output, context) => {
    let contents = {
        __type: "GetTrailStatusResponse",
        IsLogging: undefined,
        LatestCloudWatchLogsDeliveryError: undefined,
        LatestCloudWatchLogsDeliveryTime: undefined,
        LatestDeliveryAttemptSucceeded: undefined,
        LatestDeliveryAttemptTime: undefined,
        LatestDeliveryError: undefined,
        LatestDeliveryTime: undefined,
        LatestDigestDeliveryError: undefined,
        LatestDigestDeliveryTime: undefined,
        LatestNotificationAttemptSucceeded: undefined,
        LatestNotificationAttemptTime: undefined,
        LatestNotificationError: undefined,
        LatestNotificationTime: undefined,
        StartLoggingTime: undefined,
        StopLoggingTime: undefined,
        TimeLoggingStarted: undefined,
        TimeLoggingStopped: undefined
    };
    if (output.IsLogging !== undefined && output.IsLogging !== null) {
        contents.IsLogging = output.IsLogging;
    }
    if (output.LatestCloudWatchLogsDeliveryError !== undefined &&
        output.LatestCloudWatchLogsDeliveryError !== null) {
        contents.LatestCloudWatchLogsDeliveryError =
            output.LatestCloudWatchLogsDeliveryError;
    }
    if (output.LatestCloudWatchLogsDeliveryTime !== undefined &&
        output.LatestCloudWatchLogsDeliveryTime !== null) {
        contents.LatestCloudWatchLogsDeliveryTime = new Date(Math.round(output.LatestCloudWatchLogsDeliveryTime * 1000));
    }
    if (output.LatestDeliveryAttemptSucceeded !== undefined &&
        output.LatestDeliveryAttemptSucceeded !== null) {
        contents.LatestDeliveryAttemptSucceeded =
            output.LatestDeliveryAttemptSucceeded;
    }
    if (output.LatestDeliveryAttemptTime !== undefined &&
        output.LatestDeliveryAttemptTime !== null) {
        contents.LatestDeliveryAttemptTime = output.LatestDeliveryAttemptTime;
    }
    if (output.LatestDeliveryError !== undefined &&
        output.LatestDeliveryError !== null) {
        contents.LatestDeliveryError = output.LatestDeliveryError;
    }
    if (output.LatestDeliveryTime !== undefined &&
        output.LatestDeliveryTime !== null) {
        contents.LatestDeliveryTime = new Date(Math.round(output.LatestDeliveryTime * 1000));
    }
    if (output.LatestDigestDeliveryError !== undefined &&
        output.LatestDigestDeliveryError !== null) {
        contents.LatestDigestDeliveryError = output.LatestDigestDeliveryError;
    }
    if (output.LatestDigestDeliveryTime !== undefined &&
        output.LatestDigestDeliveryTime !== null) {
        contents.LatestDigestDeliveryTime = new Date(Math.round(output.LatestDigestDeliveryTime * 1000));
    }
    if (output.LatestNotificationAttemptSucceeded !== undefined &&
        output.LatestNotificationAttemptSucceeded !== null) {
        contents.LatestNotificationAttemptSucceeded =
            output.LatestNotificationAttemptSucceeded;
    }
    if (output.LatestNotificationAttemptTime !== undefined &&
        output.LatestNotificationAttemptTime !== null) {
        contents.LatestNotificationAttemptTime =
            output.LatestNotificationAttemptTime;
    }
    if (output.LatestNotificationError !== undefined &&
        output.LatestNotificationError !== null) {
        contents.LatestNotificationError = output.LatestNotificationError;
    }
    if (output.LatestNotificationTime !== undefined &&
        output.LatestNotificationTime !== null) {
        contents.LatestNotificationTime = new Date(Math.round(output.LatestNotificationTime * 1000));
    }
    if (output.StartLoggingTime !== undefined &&
        output.StartLoggingTime !== null) {
        contents.StartLoggingTime = new Date(Math.round(output.StartLoggingTime * 1000));
    }
    if (output.StopLoggingTime !== undefined && output.StopLoggingTime !== null) {
        contents.StopLoggingTime = new Date(Math.round(output.StopLoggingTime * 1000));
    }
    if (output.TimeLoggingStarted !== undefined &&
        output.TimeLoggingStarted !== null) {
        contents.TimeLoggingStarted = output.TimeLoggingStarted;
    }
    if (output.TimeLoggingStopped !== undefined &&
        output.TimeLoggingStopped !== null) {
        contents.TimeLoggingStopped = output.TimeLoggingStopped;
    }
    return contents;
};
const deserializeAws_json1_1InsightNotEnabledException = (output, context) => {
    let contents = {
        __type: "InsightNotEnabledException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InsightSelector = (output, context) => {
    let contents = {
        __type: "InsightSelector",
        InsightType: undefined
    };
    if (output.InsightType !== undefined && output.InsightType !== null) {
        contents.InsightType = output.InsightType;
    }
    return contents;
};
const deserializeAws_json1_1InsightSelectors = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1InsightSelector(entry, context));
};
const deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionException = (output, context) => {
    let contents = {
        __type: "InsufficientDependencyServiceAccessPermissionException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InsufficientEncryptionPolicyException = (output, context) => {
    let contents = {
        __type: "InsufficientEncryptionPolicyException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InsufficientS3BucketPolicyException = (output, context) => {
    let contents = {
        __type: "InsufficientS3BucketPolicyException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InsufficientSnsTopicPolicyException = (output, context) => {
    let contents = {
        __type: "InsufficientSnsTopicPolicyException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidCloudWatchLogsLogGroupArnException = (output, context) => {
    let contents = {
        __type: "InvalidCloudWatchLogsLogGroupArnException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidCloudWatchLogsRoleArnException = (output, context) => {
    let contents = {
        __type: "InvalidCloudWatchLogsRoleArnException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidEventCategoryException = (output, context) => {
    let contents = {
        __type: "InvalidEventCategoryException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidEventSelectorsException = (output, context) => {
    let contents = {
        __type: "InvalidEventSelectorsException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidHomeRegionException = (output, context) => {
    let contents = {
        __type: "InvalidHomeRegionException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidInsightSelectorsException = (output, context) => {
    let contents = {
        __type: "InvalidInsightSelectorsException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidKmsKeyIdException = (output, context) => {
    let contents = {
        __type: "InvalidKmsKeyIdException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidLookupAttributesException = (output, context) => {
    let contents = {
        __type: "InvalidLookupAttributesException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidMaxResultsException = (output, context) => {
    let contents = {
        __type: "InvalidMaxResultsException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidNextTokenException = (output, context) => {
    let contents = {
        __type: "InvalidNextTokenException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidParameterCombinationException = (output, context) => {
    let contents = {
        __type: "InvalidParameterCombinationException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidS3BucketNameException = (output, context) => {
    let contents = {
        __type: "InvalidS3BucketNameException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidS3PrefixException = (output, context) => {
    let contents = {
        __type: "InvalidS3PrefixException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidSnsTopicNameException = (output, context) => {
    let contents = {
        __type: "InvalidSnsTopicNameException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidTagParameterException = (output, context) => {
    let contents = {
        __type: "InvalidTagParameterException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidTimeRangeException = (output, context) => {
    let contents = {
        __type: "InvalidTimeRangeException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidTokenException = (output, context) => {
    let contents = {
        __type: "InvalidTokenException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidTrailNameException = (output, context) => {
    let contents = {
        __type: "InvalidTrailNameException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1KmsException = (output, context) => {
    let contents = {
        __type: "KmsException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1KmsKeyDisabledException = (output, context) => {
    let contents = {
        __type: "KmsKeyDisabledException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1KmsKeyNotFoundException = (output, context) => {
    let contents = {
        __type: "KmsKeyNotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ListPublicKeysResponse = (output, context) => {
    let contents = {
        __type: "ListPublicKeysResponse",
        NextToken: undefined,
        PublicKeyList: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.PublicKeyList !== undefined && output.PublicKeyList !== null) {
        contents.PublicKeyList = deserializeAws_json1_1PublicKeyList(output.PublicKeyList, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTagsResponse = (output, context) => {
    let contents = {
        __type: "ListTagsResponse",
        NextToken: undefined,
        ResourceTagList: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.ResourceTagList !== undefined && output.ResourceTagList !== null) {
        contents.ResourceTagList = deserializeAws_json1_1ResourceTagList(output.ResourceTagList, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTrailsResponse = (output, context) => {
    let contents = {
        __type: "ListTrailsResponse",
        NextToken: undefined,
        Trails: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Trails !== undefined && output.Trails !== null) {
        contents.Trails = deserializeAws_json1_1Trails(output.Trails, context);
    }
    return contents;
};
const deserializeAws_json1_1LookupEventsResponse = (output, context) => {
    let contents = {
        __type: "LookupEventsResponse",
        Events: undefined,
        NextToken: undefined
    };
    if (output.Events !== undefined && output.Events !== null) {
        contents.Events = deserializeAws_json1_1EventsList(output.Events, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1MaximumNumberOfTrailsExceededException = (output, context) => {
    let contents = {
        __type: "MaximumNumberOfTrailsExceededException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1NotOrganizationMasterAccountException = (output, context) => {
    let contents = {
        __type: "NotOrganizationMasterAccountException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1OperationNotPermittedException = (output, context) => {
    let contents = {
        __type: "OperationNotPermittedException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1OrganizationNotInAllFeaturesModeException = (output, context) => {
    let contents = {
        __type: "OrganizationNotInAllFeaturesModeException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1OrganizationsNotInUseException = (output, context) => {
    let contents = {
        __type: "OrganizationsNotInUseException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1PublicKey = (output, context) => {
    let contents = {
        __type: "PublicKey",
        Fingerprint: undefined,
        ValidityEndTime: undefined,
        ValidityStartTime: undefined,
        Value: undefined
    };
    if (output.Fingerprint !== undefined && output.Fingerprint !== null) {
        contents.Fingerprint = output.Fingerprint;
    }
    if (output.ValidityEndTime !== undefined && output.ValidityEndTime !== null) {
        contents.ValidityEndTime = new Date(Math.round(output.ValidityEndTime * 1000));
    }
    if (output.ValidityStartTime !== undefined &&
        output.ValidityStartTime !== null) {
        contents.ValidityStartTime = new Date(Math.round(output.ValidityStartTime * 1000));
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = Uint8Array.from(output.Value);
    }
    return contents;
};
const deserializeAws_json1_1PublicKeyList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PublicKey(entry, context));
};
const deserializeAws_json1_1PutEventSelectorsResponse = (output, context) => {
    let contents = {
        __type: "PutEventSelectorsResponse",
        EventSelectors: undefined,
        TrailARN: undefined
    };
    if (output.EventSelectors !== undefined && output.EventSelectors !== null) {
        contents.EventSelectors = deserializeAws_json1_1EventSelectors(output.EventSelectors, context);
    }
    if (output.TrailARN !== undefined && output.TrailARN !== null) {
        contents.TrailARN = output.TrailARN;
    }
    return contents;
};
const deserializeAws_json1_1PutInsightSelectorsResponse = (output, context) => {
    let contents = {
        __type: "PutInsightSelectorsResponse",
        InsightSelectors: undefined,
        TrailARN: undefined
    };
    if (output.InsightSelectors !== undefined &&
        output.InsightSelectors !== null) {
        contents.InsightSelectors = deserializeAws_json1_1InsightSelectors(output.InsightSelectors, context);
    }
    if (output.TrailARN !== undefined && output.TrailARN !== null) {
        contents.TrailARN = output.TrailARN;
    }
    return contents;
};
const deserializeAws_json1_1RemoveTagsResponse = (output, context) => {
    let contents = {
        __type: "RemoveTagsResponse"
    };
    return contents;
};
const deserializeAws_json1_1Resource = (output, context) => {
    let contents = {
        __type: "Resource",
        ResourceName: undefined,
        ResourceType: undefined
    };
    if (output.ResourceName !== undefined && output.ResourceName !== null) {
        contents.ResourceName = output.ResourceName;
    }
    if (output.ResourceType !== undefined && output.ResourceType !== null) {
        contents.ResourceType = output.ResourceType;
    }
    return contents;
};
const deserializeAws_json1_1ResourceList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Resource(entry, context));
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    let contents = {
        __type: "ResourceNotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceTag = (output, context) => {
    let contents = {
        __type: "ResourceTag",
        ResourceId: undefined,
        TagsList: undefined
    };
    if (output.ResourceId !== undefined && output.ResourceId !== null) {
        contents.ResourceId = output.ResourceId;
    }
    if (output.TagsList !== undefined && output.TagsList !== null) {
        contents.TagsList = deserializeAws_json1_1TagsList(output.TagsList, context);
    }
    return contents;
};
const deserializeAws_json1_1ResourceTagList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ResourceTag(entry, context));
};
const deserializeAws_json1_1ResourceTypeNotSupportedException = (output, context) => {
    let contents = {
        __type: "ResourceTypeNotSupportedException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1S3BucketDoesNotExistException = (output, context) => {
    let contents = {
        __type: "S3BucketDoesNotExistException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1StartLoggingResponse = (output, context) => {
    let contents = {
        __type: "StartLoggingResponse"
    };
    return contents;
};
const deserializeAws_json1_1StopLoggingResponse = (output, context) => {
    let contents = {
        __type: "StopLoggingResponse"
    };
    return contents;
};
const deserializeAws_json1_1Tag = (output, context) => {
    let contents = {
        __type: "Tag",
        Key: undefined,
        Value: undefined
    };
    if (output.Key !== undefined && output.Key !== null) {
        contents.Key = output.Key;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1TagsLimitExceededException = (output, context) => {
    let contents = {
        __type: "TagsLimitExceededException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1TagsList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Tag(entry, context));
};
const deserializeAws_json1_1Trail = (output, context) => {
    let contents = {
        __type: "Trail",
        CloudWatchLogsLogGroupArn: undefined,
        CloudWatchLogsRoleArn: undefined,
        HasCustomEventSelectors: undefined,
        HasInsightSelectors: undefined,
        HomeRegion: undefined,
        IncludeGlobalServiceEvents: undefined,
        IsMultiRegionTrail: undefined,
        IsOrganizationTrail: undefined,
        KmsKeyId: undefined,
        LogFileValidationEnabled: undefined,
        Name: undefined,
        S3BucketName: undefined,
        S3KeyPrefix: undefined,
        SnsTopicARN: undefined,
        SnsTopicName: undefined,
        TrailARN: undefined
    };
    if (output.CloudWatchLogsLogGroupArn !== undefined &&
        output.CloudWatchLogsLogGroupArn !== null) {
        contents.CloudWatchLogsLogGroupArn = output.CloudWatchLogsLogGroupArn;
    }
    if (output.CloudWatchLogsRoleArn !== undefined &&
        output.CloudWatchLogsRoleArn !== null) {
        contents.CloudWatchLogsRoleArn = output.CloudWatchLogsRoleArn;
    }
    if (output.HasCustomEventSelectors !== undefined &&
        output.HasCustomEventSelectors !== null) {
        contents.HasCustomEventSelectors = output.HasCustomEventSelectors;
    }
    if (output.HasInsightSelectors !== undefined &&
        output.HasInsightSelectors !== null) {
        contents.HasInsightSelectors = output.HasInsightSelectors;
    }
    if (output.HomeRegion !== undefined && output.HomeRegion !== null) {
        contents.HomeRegion = output.HomeRegion;
    }
    if (output.IncludeGlobalServiceEvents !== undefined &&
        output.IncludeGlobalServiceEvents !== null) {
        contents.IncludeGlobalServiceEvents = output.IncludeGlobalServiceEvents;
    }
    if (output.IsMultiRegionTrail !== undefined &&
        output.IsMultiRegionTrail !== null) {
        contents.IsMultiRegionTrail = output.IsMultiRegionTrail;
    }
    if (output.IsOrganizationTrail !== undefined &&
        output.IsOrganizationTrail !== null) {
        contents.IsOrganizationTrail = output.IsOrganizationTrail;
    }
    if (output.KmsKeyId !== undefined && output.KmsKeyId !== null) {
        contents.KmsKeyId = output.KmsKeyId;
    }
    if (output.LogFileValidationEnabled !== undefined &&
        output.LogFileValidationEnabled !== null) {
        contents.LogFileValidationEnabled = output.LogFileValidationEnabled;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.S3BucketName !== undefined && output.S3BucketName !== null) {
        contents.S3BucketName = output.S3BucketName;
    }
    if (output.S3KeyPrefix !== undefined && output.S3KeyPrefix !== null) {
        contents.S3KeyPrefix = output.S3KeyPrefix;
    }
    if (output.SnsTopicARN !== undefined && output.SnsTopicARN !== null) {
        contents.SnsTopicARN = output.SnsTopicARN;
    }
    if (output.SnsTopicName !== undefined && output.SnsTopicName !== null) {
        contents.SnsTopicName = output.SnsTopicName;
    }
    if (output.TrailARN !== undefined && output.TrailARN !== null) {
        contents.TrailARN = output.TrailARN;
    }
    return contents;
};
const deserializeAws_json1_1TrailAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "TrailAlreadyExistsException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1TrailInfo = (output, context) => {
    let contents = {
        __type: "TrailInfo",
        HomeRegion: undefined,
        Name: undefined,
        TrailARN: undefined
    };
    if (output.HomeRegion !== undefined && output.HomeRegion !== null) {
        contents.HomeRegion = output.HomeRegion;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.TrailARN !== undefined && output.TrailARN !== null) {
        contents.TrailARN = output.TrailARN;
    }
    return contents;
};
const deserializeAws_json1_1TrailList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Trail(entry, context));
};
const deserializeAws_json1_1TrailNotFoundException = (output, context) => {
    let contents = {
        __type: "TrailNotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1TrailNotProvidedException = (output, context) => {
    let contents = {
        __type: "TrailNotProvidedException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1Trails = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TrailInfo(entry, context));
};
const deserializeAws_json1_1UnsupportedOperationException = (output, context) => {
    let contents = {
        __type: "UnsupportedOperationException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1UpdateTrailResponse = (output, context) => {
    let contents = {
        __type: "UpdateTrailResponse",
        CloudWatchLogsLogGroupArn: undefined,
        CloudWatchLogsRoleArn: undefined,
        IncludeGlobalServiceEvents: undefined,
        IsMultiRegionTrail: undefined,
        IsOrganizationTrail: undefined,
        KmsKeyId: undefined,
        LogFileValidationEnabled: undefined,
        Name: undefined,
        S3BucketName: undefined,
        S3KeyPrefix: undefined,
        SnsTopicARN: undefined,
        SnsTopicName: undefined,
        TrailARN: undefined
    };
    if (output.CloudWatchLogsLogGroupArn !== undefined &&
        output.CloudWatchLogsLogGroupArn !== null) {
        contents.CloudWatchLogsLogGroupArn = output.CloudWatchLogsLogGroupArn;
    }
    if (output.CloudWatchLogsRoleArn !== undefined &&
        output.CloudWatchLogsRoleArn !== null) {
        contents.CloudWatchLogsRoleArn = output.CloudWatchLogsRoleArn;
    }
    if (output.IncludeGlobalServiceEvents !== undefined &&
        output.IncludeGlobalServiceEvents !== null) {
        contents.IncludeGlobalServiceEvents = output.IncludeGlobalServiceEvents;
    }
    if (output.IsMultiRegionTrail !== undefined &&
        output.IsMultiRegionTrail !== null) {
        contents.IsMultiRegionTrail = output.IsMultiRegionTrail;
    }
    if (output.IsOrganizationTrail !== undefined &&
        output.IsOrganizationTrail !== null) {
        contents.IsOrganizationTrail = output.IsOrganizationTrail;
    }
    if (output.KmsKeyId !== undefined && output.KmsKeyId !== null) {
        contents.KmsKeyId = output.KmsKeyId;
    }
    if (output.LogFileValidationEnabled !== undefined &&
        output.LogFileValidationEnabled !== null) {
        contents.LogFileValidationEnabled = output.LogFileValidationEnabled;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.S3BucketName !== undefined && output.S3BucketName !== null) {
        contents.S3BucketName = output.S3BucketName;
    }
    if (output.S3KeyPrefix !== undefined && output.S3KeyPrefix !== null) {
        contents.S3KeyPrefix = output.S3KeyPrefix;
    }
    if (output.SnsTopicARN !== undefined && output.SnsTopicARN !== null) {
        contents.SnsTopicARN = output.SnsTopicARN;
    }
    if (output.SnsTopicName !== undefined && output.SnsTopicName !== null) {
        contents.SnsTopicName = output.SnsTopicName;
    }
    if (output.TrailARN !== undefined && output.TrailARN !== null) {
        contents.TrailARN = output.TrailARN;
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