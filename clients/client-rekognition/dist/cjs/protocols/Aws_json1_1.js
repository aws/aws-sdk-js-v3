"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
async function serializeAws_json1_1CompareFacesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.CompareFaces";
    let body;
    body = JSON.stringify(serializeAws_json1_1CompareFacesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CompareFacesCommand = serializeAws_json1_1CompareFacesCommand;
async function serializeAws_json1_1CreateCollectionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.CreateCollection";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateCollectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateCollectionCommand = serializeAws_json1_1CreateCollectionCommand;
async function serializeAws_json1_1CreateProjectCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.CreateProject";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateProjectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateProjectCommand = serializeAws_json1_1CreateProjectCommand;
async function serializeAws_json1_1CreateProjectVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.CreateProjectVersion";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateProjectVersionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateProjectVersionCommand = serializeAws_json1_1CreateProjectVersionCommand;
async function serializeAws_json1_1CreateStreamProcessorCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.CreateStreamProcessor";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateStreamProcessorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateStreamProcessorCommand = serializeAws_json1_1CreateStreamProcessorCommand;
async function serializeAws_json1_1DeleteCollectionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.DeleteCollection";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteCollectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteCollectionCommand = serializeAws_json1_1DeleteCollectionCommand;
async function serializeAws_json1_1DeleteFacesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.DeleteFaces";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteFacesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteFacesCommand = serializeAws_json1_1DeleteFacesCommand;
async function serializeAws_json1_1DeleteStreamProcessorCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.DeleteStreamProcessor";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteStreamProcessorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteStreamProcessorCommand = serializeAws_json1_1DeleteStreamProcessorCommand;
async function serializeAws_json1_1DescribeCollectionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.DescribeCollection";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeCollectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeCollectionCommand = serializeAws_json1_1DescribeCollectionCommand;
async function serializeAws_json1_1DescribeProjectVersionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.DescribeProjectVersions";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeProjectVersionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeProjectVersionsCommand = serializeAws_json1_1DescribeProjectVersionsCommand;
async function serializeAws_json1_1DescribeProjectsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.DescribeProjects";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeProjectsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeProjectsCommand = serializeAws_json1_1DescribeProjectsCommand;
async function serializeAws_json1_1DescribeStreamProcessorCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.DescribeStreamProcessor";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeStreamProcessorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeStreamProcessorCommand = serializeAws_json1_1DescribeStreamProcessorCommand;
async function serializeAws_json1_1DetectCustomLabelsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.DetectCustomLabels";
    let body;
    body = JSON.stringify(serializeAws_json1_1DetectCustomLabelsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DetectCustomLabelsCommand = serializeAws_json1_1DetectCustomLabelsCommand;
async function serializeAws_json1_1DetectFacesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.DetectFaces";
    let body;
    body = JSON.stringify(serializeAws_json1_1DetectFacesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DetectFacesCommand = serializeAws_json1_1DetectFacesCommand;
async function serializeAws_json1_1DetectLabelsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.DetectLabels";
    let body;
    body = JSON.stringify(serializeAws_json1_1DetectLabelsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DetectLabelsCommand = serializeAws_json1_1DetectLabelsCommand;
async function serializeAws_json1_1DetectModerationLabelsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.DetectModerationLabels";
    let body;
    body = JSON.stringify(serializeAws_json1_1DetectModerationLabelsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DetectModerationLabelsCommand = serializeAws_json1_1DetectModerationLabelsCommand;
async function serializeAws_json1_1DetectTextCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.DetectText";
    let body;
    body = JSON.stringify(serializeAws_json1_1DetectTextRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DetectTextCommand = serializeAws_json1_1DetectTextCommand;
async function serializeAws_json1_1GetCelebrityInfoCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.GetCelebrityInfo";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCelebrityInfoRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetCelebrityInfoCommand = serializeAws_json1_1GetCelebrityInfoCommand;
async function serializeAws_json1_1GetCelebrityRecognitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.GetCelebrityRecognition";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetCelebrityRecognitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetCelebrityRecognitionCommand = serializeAws_json1_1GetCelebrityRecognitionCommand;
async function serializeAws_json1_1GetContentModerationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.GetContentModeration";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetContentModerationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetContentModerationCommand = serializeAws_json1_1GetContentModerationCommand;
async function serializeAws_json1_1GetFaceDetectionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.GetFaceDetection";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetFaceDetectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetFaceDetectionCommand = serializeAws_json1_1GetFaceDetectionCommand;
async function serializeAws_json1_1GetFaceSearchCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.GetFaceSearch";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetFaceSearchRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetFaceSearchCommand = serializeAws_json1_1GetFaceSearchCommand;
async function serializeAws_json1_1GetLabelDetectionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.GetLabelDetection";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetLabelDetectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetLabelDetectionCommand = serializeAws_json1_1GetLabelDetectionCommand;
async function serializeAws_json1_1GetPersonTrackingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.GetPersonTracking";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetPersonTrackingRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetPersonTrackingCommand = serializeAws_json1_1GetPersonTrackingCommand;
async function serializeAws_json1_1IndexFacesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.IndexFaces";
    let body;
    body = JSON.stringify(serializeAws_json1_1IndexFacesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1IndexFacesCommand = serializeAws_json1_1IndexFacesCommand;
async function serializeAws_json1_1ListCollectionsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.ListCollections";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListCollectionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListCollectionsCommand = serializeAws_json1_1ListCollectionsCommand;
async function serializeAws_json1_1ListFacesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.ListFaces";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListFacesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListFacesCommand = serializeAws_json1_1ListFacesCommand;
async function serializeAws_json1_1ListStreamProcessorsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.ListStreamProcessors";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListStreamProcessorsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListStreamProcessorsCommand = serializeAws_json1_1ListStreamProcessorsCommand;
async function serializeAws_json1_1RecognizeCelebritiesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.RecognizeCelebrities";
    let body;
    body = JSON.stringify(serializeAws_json1_1RecognizeCelebritiesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RecognizeCelebritiesCommand = serializeAws_json1_1RecognizeCelebritiesCommand;
async function serializeAws_json1_1SearchFacesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.SearchFaces";
    let body;
    body = JSON.stringify(serializeAws_json1_1SearchFacesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SearchFacesCommand = serializeAws_json1_1SearchFacesCommand;
async function serializeAws_json1_1SearchFacesByImageCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.SearchFacesByImage";
    let body;
    body = JSON.stringify(serializeAws_json1_1SearchFacesByImageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SearchFacesByImageCommand = serializeAws_json1_1SearchFacesByImageCommand;
async function serializeAws_json1_1StartCelebrityRecognitionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.StartCelebrityRecognition";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartCelebrityRecognitionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartCelebrityRecognitionCommand = serializeAws_json1_1StartCelebrityRecognitionCommand;
async function serializeAws_json1_1StartContentModerationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.StartContentModeration";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartContentModerationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartContentModerationCommand = serializeAws_json1_1StartContentModerationCommand;
async function serializeAws_json1_1StartFaceDetectionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.StartFaceDetection";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartFaceDetectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartFaceDetectionCommand = serializeAws_json1_1StartFaceDetectionCommand;
async function serializeAws_json1_1StartFaceSearchCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.StartFaceSearch";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartFaceSearchRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartFaceSearchCommand = serializeAws_json1_1StartFaceSearchCommand;
async function serializeAws_json1_1StartLabelDetectionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.StartLabelDetection";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartLabelDetectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartLabelDetectionCommand = serializeAws_json1_1StartLabelDetectionCommand;
async function serializeAws_json1_1StartPersonTrackingCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.StartPersonTracking";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartPersonTrackingRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartPersonTrackingCommand = serializeAws_json1_1StartPersonTrackingCommand;
async function serializeAws_json1_1StartProjectVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.StartProjectVersion";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartProjectVersionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartProjectVersionCommand = serializeAws_json1_1StartProjectVersionCommand;
async function serializeAws_json1_1StartStreamProcessorCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.StartStreamProcessor";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartStreamProcessorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartStreamProcessorCommand = serializeAws_json1_1StartStreamProcessorCommand;
async function serializeAws_json1_1StopProjectVersionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.StopProjectVersion";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopProjectVersionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopProjectVersionCommand = serializeAws_json1_1StopProjectVersionCommand;
async function serializeAws_json1_1StopStreamProcessorCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "RekognitionService.StopStreamProcessor";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopStreamProcessorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopStreamProcessorCommand = serializeAws_json1_1StopStreamProcessorCommand;
async function deserializeAws_json1_1CompareFacesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CompareFacesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CompareFacesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CompareFacesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CompareFacesCommand = deserializeAws_json1_1CompareFacesCommand;
async function deserializeAws_json1_1CompareFacesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ImageTooLargeException":
        case "com.amazonaws.rekognitionservice#ImageTooLargeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ImageTooLargeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidImageFormatException":
        case "com.amazonaws.rekognitionservice#InvalidImageFormatException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidImageFormatExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidS3ObjectException":
        case "com.amazonaws.rekognitionservice#InvalidS3ObjectException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateCollectionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateCollectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateCollectionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateCollectionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateCollectionCommand = deserializeAws_json1_1CreateCollectionCommand;
async function deserializeAws_json1_1CreateCollectionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.rekognitionservice#ResourceAlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateProjectCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateProjectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateProjectResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateProjectResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateProjectCommand = deserializeAws_json1_1CreateProjectCommand;
async function deserializeAws_json1_1CreateProjectCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.rekognitionservice#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.rekognitionservice#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateProjectVersionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateProjectVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateProjectVersionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateProjectVersionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateProjectVersionCommand = deserializeAws_json1_1CreateProjectVersionCommand;
async function deserializeAws_json1_1CreateProjectVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.rekognitionservice#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.rekognitionservice#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateStreamProcessorCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateStreamProcessorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateStreamProcessorResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateStreamProcessorResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateStreamProcessorCommand = deserializeAws_json1_1CreateStreamProcessorCommand;
async function deserializeAws_json1_1CreateStreamProcessorCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.rekognitionservice#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.rekognitionservice#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteCollectionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteCollectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteCollectionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteCollectionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteCollectionCommand = deserializeAws_json1_1DeleteCollectionCommand;
async function deserializeAws_json1_1DeleteCollectionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteFacesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteFacesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteFacesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteFacesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteFacesCommand = deserializeAws_json1_1DeleteFacesCommand;
async function deserializeAws_json1_1DeleteFacesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteStreamProcessorCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteStreamProcessorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteStreamProcessorResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteStreamProcessorResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteStreamProcessorCommand = deserializeAws_json1_1DeleteStreamProcessorCommand;
async function deserializeAws_json1_1DeleteStreamProcessorCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.rekognitionservice#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeCollectionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeCollectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeCollectionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeCollectionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeCollectionCommand = deserializeAws_json1_1DescribeCollectionCommand;
async function deserializeAws_json1_1DescribeCollectionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeProjectVersionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeProjectVersionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeProjectVersionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeProjectVersionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeProjectVersionsCommand = deserializeAws_json1_1DescribeProjectVersionsCommand;
async function deserializeAws_json1_1DescribeProjectVersionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPaginationTokenException":
        case "com.amazonaws.rekognitionservice#InvalidPaginationTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeProjectsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeProjectsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeProjectsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeProjectsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeProjectsCommand = deserializeAws_json1_1DescribeProjectsCommand;
async function deserializeAws_json1_1DescribeProjectsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPaginationTokenException":
        case "com.amazonaws.rekognitionservice#InvalidPaginationTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeStreamProcessorCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeStreamProcessorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeStreamProcessorResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeStreamProcessorResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeStreamProcessorCommand = deserializeAws_json1_1DescribeStreamProcessorCommand;
async function deserializeAws_json1_1DescribeStreamProcessorCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DetectCustomLabelsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DetectCustomLabelsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DetectCustomLabelsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DetectCustomLabelsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DetectCustomLabelsCommand = deserializeAws_json1_1DetectCustomLabelsCommand;
async function deserializeAws_json1_1DetectCustomLabelsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ImageTooLargeException":
        case "com.amazonaws.rekognitionservice#ImageTooLargeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ImageTooLargeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidImageFormatException":
        case "com.amazonaws.rekognitionservice#InvalidImageFormatException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidImageFormatExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidS3ObjectException":
        case "com.amazonaws.rekognitionservice#InvalidS3ObjectException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.rekognitionservice#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotReadyException":
        case "com.amazonaws.rekognitionservice#ResourceNotReadyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotReadyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DetectFacesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DetectFacesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DetectFacesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DetectFacesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DetectFacesCommand = deserializeAws_json1_1DetectFacesCommand;
async function deserializeAws_json1_1DetectFacesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ImageTooLargeException":
        case "com.amazonaws.rekognitionservice#ImageTooLargeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ImageTooLargeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidImageFormatException":
        case "com.amazonaws.rekognitionservice#InvalidImageFormatException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidImageFormatExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidS3ObjectException":
        case "com.amazonaws.rekognitionservice#InvalidS3ObjectException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DetectLabelsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DetectLabelsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DetectLabelsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DetectLabelsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DetectLabelsCommand = deserializeAws_json1_1DetectLabelsCommand;
async function deserializeAws_json1_1DetectLabelsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ImageTooLargeException":
        case "com.amazonaws.rekognitionservice#ImageTooLargeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ImageTooLargeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidImageFormatException":
        case "com.amazonaws.rekognitionservice#InvalidImageFormatException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidImageFormatExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidS3ObjectException":
        case "com.amazonaws.rekognitionservice#InvalidS3ObjectException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DetectModerationLabelsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DetectModerationLabelsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DetectModerationLabelsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DetectModerationLabelsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DetectModerationLabelsCommand = deserializeAws_json1_1DetectModerationLabelsCommand;
async function deserializeAws_json1_1DetectModerationLabelsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "HumanLoopQuotaExceededException":
        case "com.amazonaws.rekognitionservice#HumanLoopQuotaExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1HumanLoopQuotaExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ImageTooLargeException":
        case "com.amazonaws.rekognitionservice#ImageTooLargeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ImageTooLargeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidImageFormatException":
        case "com.amazonaws.rekognitionservice#InvalidImageFormatException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidImageFormatExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidS3ObjectException":
        case "com.amazonaws.rekognitionservice#InvalidS3ObjectException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DetectTextCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DetectTextCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DetectTextResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DetectTextResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DetectTextCommand = deserializeAws_json1_1DetectTextCommand;
async function deserializeAws_json1_1DetectTextCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ImageTooLargeException":
        case "com.amazonaws.rekognitionservice#ImageTooLargeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ImageTooLargeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidImageFormatException":
        case "com.amazonaws.rekognitionservice#InvalidImageFormatException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidImageFormatExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidS3ObjectException":
        case "com.amazonaws.rekognitionservice#InvalidS3ObjectException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetCelebrityInfoCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetCelebrityInfoCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCelebrityInfoResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetCelebrityInfoResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetCelebrityInfoCommand = deserializeAws_json1_1GetCelebrityInfoCommand;
async function deserializeAws_json1_1GetCelebrityInfoCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetCelebrityRecognitionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetCelebrityRecognitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetCelebrityRecognitionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetCelebrityRecognitionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetCelebrityRecognitionCommand = deserializeAws_json1_1GetCelebrityRecognitionCommand;
async function deserializeAws_json1_1GetCelebrityRecognitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPaginationTokenException":
        case "com.amazonaws.rekognitionservice#InvalidPaginationTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetContentModerationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetContentModerationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetContentModerationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetContentModerationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetContentModerationCommand = deserializeAws_json1_1GetContentModerationCommand;
async function deserializeAws_json1_1GetContentModerationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPaginationTokenException":
        case "com.amazonaws.rekognitionservice#InvalidPaginationTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetFaceDetectionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetFaceDetectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetFaceDetectionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetFaceDetectionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetFaceDetectionCommand = deserializeAws_json1_1GetFaceDetectionCommand;
async function deserializeAws_json1_1GetFaceDetectionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPaginationTokenException":
        case "com.amazonaws.rekognitionservice#InvalidPaginationTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetFaceSearchCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetFaceSearchCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetFaceSearchResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetFaceSearchResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetFaceSearchCommand = deserializeAws_json1_1GetFaceSearchCommand;
async function deserializeAws_json1_1GetFaceSearchCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPaginationTokenException":
        case "com.amazonaws.rekognitionservice#InvalidPaginationTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetLabelDetectionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetLabelDetectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetLabelDetectionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetLabelDetectionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetLabelDetectionCommand = deserializeAws_json1_1GetLabelDetectionCommand;
async function deserializeAws_json1_1GetLabelDetectionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPaginationTokenException":
        case "com.amazonaws.rekognitionservice#InvalidPaginationTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetPersonTrackingCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetPersonTrackingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetPersonTrackingResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetPersonTrackingResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetPersonTrackingCommand = deserializeAws_json1_1GetPersonTrackingCommand;
async function deserializeAws_json1_1GetPersonTrackingCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPaginationTokenException":
        case "com.amazonaws.rekognitionservice#InvalidPaginationTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1IndexFacesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1IndexFacesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1IndexFacesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "IndexFacesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1IndexFacesCommand = deserializeAws_json1_1IndexFacesCommand;
async function deserializeAws_json1_1IndexFacesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ImageTooLargeException":
        case "com.amazonaws.rekognitionservice#ImageTooLargeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ImageTooLargeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidImageFormatException":
        case "com.amazonaws.rekognitionservice#InvalidImageFormatException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidImageFormatExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidS3ObjectException":
        case "com.amazonaws.rekognitionservice#InvalidS3ObjectException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListCollectionsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListCollectionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListCollectionsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListCollectionsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListCollectionsCommand = deserializeAws_json1_1ListCollectionsCommand;
async function deserializeAws_json1_1ListCollectionsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPaginationTokenException":
        case "com.amazonaws.rekognitionservice#InvalidPaginationTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListFacesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListFacesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListFacesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListFacesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListFacesCommand = deserializeAws_json1_1ListFacesCommand;
async function deserializeAws_json1_1ListFacesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPaginationTokenException":
        case "com.amazonaws.rekognitionservice#InvalidPaginationTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListStreamProcessorsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListStreamProcessorsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListStreamProcessorsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListStreamProcessorsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListStreamProcessorsCommand = deserializeAws_json1_1ListStreamProcessorsCommand;
async function deserializeAws_json1_1ListStreamProcessorsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidPaginationTokenException":
        case "com.amazonaws.rekognitionservice#InvalidPaginationTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1RecognizeCelebritiesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RecognizeCelebritiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RecognizeCelebritiesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RecognizeCelebritiesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RecognizeCelebritiesCommand = deserializeAws_json1_1RecognizeCelebritiesCommand;
async function deserializeAws_json1_1RecognizeCelebritiesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ImageTooLargeException":
        case "com.amazonaws.rekognitionservice#ImageTooLargeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ImageTooLargeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidImageFormatException":
        case "com.amazonaws.rekognitionservice#InvalidImageFormatException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidImageFormatExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidS3ObjectException":
        case "com.amazonaws.rekognitionservice#InvalidS3ObjectException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1SearchFacesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SearchFacesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SearchFacesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SearchFacesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SearchFacesCommand = deserializeAws_json1_1SearchFacesCommand;
async function deserializeAws_json1_1SearchFacesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1SearchFacesByImageCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SearchFacesByImageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SearchFacesByImageResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SearchFacesByImageResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SearchFacesByImageCommand = deserializeAws_json1_1SearchFacesByImageCommand;
async function deserializeAws_json1_1SearchFacesByImageCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ImageTooLargeException":
        case "com.amazonaws.rekognitionservice#ImageTooLargeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ImageTooLargeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidImageFormatException":
        case "com.amazonaws.rekognitionservice#InvalidImageFormatException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidImageFormatExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidS3ObjectException":
        case "com.amazonaws.rekognitionservice#InvalidS3ObjectException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartCelebrityRecognitionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartCelebrityRecognitionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartCelebrityRecognitionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartCelebrityRecognitionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartCelebrityRecognitionCommand = deserializeAws_json1_1StartCelebrityRecognitionCommand;
async function deserializeAws_json1_1StartCelebrityRecognitionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.rekognitionservice#IdempotentParameterMismatchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidS3ObjectException":
        case "com.amazonaws.rekognitionservice#InvalidS3ObjectException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.rekognitionservice#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "VideoTooLargeException":
        case "com.amazonaws.rekognitionservice#VideoTooLargeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1VideoTooLargeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartContentModerationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartContentModerationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartContentModerationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartContentModerationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartContentModerationCommand = deserializeAws_json1_1StartContentModerationCommand;
async function deserializeAws_json1_1StartContentModerationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.rekognitionservice#IdempotentParameterMismatchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidS3ObjectException":
        case "com.amazonaws.rekognitionservice#InvalidS3ObjectException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.rekognitionservice#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "VideoTooLargeException":
        case "com.amazonaws.rekognitionservice#VideoTooLargeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1VideoTooLargeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartFaceDetectionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartFaceDetectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartFaceDetectionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartFaceDetectionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartFaceDetectionCommand = deserializeAws_json1_1StartFaceDetectionCommand;
async function deserializeAws_json1_1StartFaceDetectionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.rekognitionservice#IdempotentParameterMismatchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidS3ObjectException":
        case "com.amazonaws.rekognitionservice#InvalidS3ObjectException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.rekognitionservice#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "VideoTooLargeException":
        case "com.amazonaws.rekognitionservice#VideoTooLargeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1VideoTooLargeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartFaceSearchCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartFaceSearchCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartFaceSearchResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartFaceSearchResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartFaceSearchCommand = deserializeAws_json1_1StartFaceSearchCommand;
async function deserializeAws_json1_1StartFaceSearchCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.rekognitionservice#IdempotentParameterMismatchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidS3ObjectException":
        case "com.amazonaws.rekognitionservice#InvalidS3ObjectException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.rekognitionservice#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "VideoTooLargeException":
        case "com.amazonaws.rekognitionservice#VideoTooLargeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1VideoTooLargeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartLabelDetectionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartLabelDetectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartLabelDetectionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartLabelDetectionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartLabelDetectionCommand = deserializeAws_json1_1StartLabelDetectionCommand;
async function deserializeAws_json1_1StartLabelDetectionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.rekognitionservice#IdempotentParameterMismatchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidS3ObjectException":
        case "com.amazonaws.rekognitionservice#InvalidS3ObjectException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.rekognitionservice#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "VideoTooLargeException":
        case "com.amazonaws.rekognitionservice#VideoTooLargeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1VideoTooLargeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartPersonTrackingCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartPersonTrackingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartPersonTrackingResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartPersonTrackingResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartPersonTrackingCommand = deserializeAws_json1_1StartPersonTrackingCommand;
async function deserializeAws_json1_1StartPersonTrackingCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.rekognitionservice#IdempotentParameterMismatchException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidS3ObjectException":
        case "com.amazonaws.rekognitionservice#InvalidS3ObjectException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.rekognitionservice#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "VideoTooLargeException":
        case "com.amazonaws.rekognitionservice#VideoTooLargeException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1VideoTooLargeExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartProjectVersionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartProjectVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartProjectVersionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartProjectVersionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartProjectVersionCommand = deserializeAws_json1_1StartProjectVersionCommand;
async function deserializeAws_json1_1StartProjectVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazonaws.rekognitionservice#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.rekognitionservice#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartStreamProcessorCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartStreamProcessorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartStreamProcessorResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartStreamProcessorResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartStreamProcessorCommand = deserializeAws_json1_1StartStreamProcessorCommand;
async function deserializeAws_json1_1StartStreamProcessorCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.rekognitionservice#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StopProjectVersionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopProjectVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopProjectVersionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopProjectVersionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopProjectVersionCommand = deserializeAws_json1_1StopProjectVersionCommand;
async function deserializeAws_json1_1StopProjectVersionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.rekognitionservice#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StopStreamProcessorCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopStreamProcessorCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopStreamProcessorResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopStreamProcessorResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopStreamProcessorCommand = deserializeAws_json1_1StopStreamProcessorCommand;
async function deserializeAws_json1_1StopStreamProcessorCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.rekognitionservice#AccessDeniedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerError":
        case "com.amazonaws.rekognitionservice#InternalServerError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidParameterException":
        case "com.amazonaws.rekognitionservice#InvalidParameterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.rekognitionservice#ProvisionedThroughputExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.rekognitionservice#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.rekognitionservice#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ThrottlingException":
        case "com.amazonaws.rekognitionservice#ThrottlingException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AccessDeniedException(body, context);
    const contents = Object.assign({ name: "AccessDeniedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1HumanLoopQuotaExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1HumanLoopQuotaExceededException(body, context);
    const contents = Object.assign({ name: "HumanLoopQuotaExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IdempotentParameterMismatchException(body, context);
    const contents = Object.assign({ name: "IdempotentParameterMismatchException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ImageTooLargeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ImageTooLargeException(body, context);
    const contents = Object.assign({ name: "ImageTooLargeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InternalServerErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServerError(body, context);
    const contents = Object.assign({ name: "InternalServerError", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidImageFormatExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidImageFormatException(body, context);
    const contents = Object.assign({ name: "InvalidImageFormatException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidPaginationTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidPaginationTokenException(body, context);
    const contents = Object.assign({ name: "InvalidPaginationTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterException(body, context);
    const contents = Object.assign({ name: "InvalidParameterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidS3ObjectExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidS3ObjectException(body, context);
    const contents = Object.assign({ name: "InvalidS3ObjectException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ProvisionedThroughputExceededException(body, context);
    const contents = Object.assign({ name: "ProvisionedThroughputExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceAlreadyExistsException(body, context);
    const contents = Object.assign({ name: "ResourceAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceInUseException(body, context);
    const contents = Object.assign({ name: "ResourceInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
    const contents = Object.assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceNotReadyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotReadyException(body, context);
    const contents = Object.assign({ name: "ResourceNotReadyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ThrottlingException(body, context);
    const contents = Object.assign({ name: "ThrottlingException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1VideoTooLargeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1VideoTooLargeException(body, context);
    const contents = Object.assign({ name: "VideoTooLargeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1Asset = (input, context) => {
    const bodyParams = {};
    if (input.GroundTruthManifest !== undefined) {
        bodyParams["GroundTruthManifest"] = serializeAws_json1_1GroundTruthManifest(input.GroundTruthManifest, context);
    }
    return bodyParams;
};
const serializeAws_json1_1Assets = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Asset(entry, context));
    }
    return contents;
};
const serializeAws_json1_1Attributes = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1CompareFacesRequest = (input, context) => {
    const bodyParams = {};
    if (input.QualityFilter !== undefined) {
        bodyParams["QualityFilter"] = input.QualityFilter;
    }
    if (input.SimilarityThreshold !== undefined) {
        bodyParams["SimilarityThreshold"] = input.SimilarityThreshold;
    }
    if (input.SourceImage !== undefined) {
        bodyParams["SourceImage"] = serializeAws_json1_1Image(input.SourceImage, context);
    }
    if (input.TargetImage !== undefined) {
        bodyParams["TargetImage"] = serializeAws_json1_1Image(input.TargetImage, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ContentClassifiers = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1CreateCollectionRequest = (input, context) => {
    const bodyParams = {};
    if (input.CollectionId !== undefined) {
        bodyParams["CollectionId"] = input.CollectionId;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateProjectRequest = (input, context) => {
    const bodyParams = {};
    if (input.ProjectName !== undefined) {
        bodyParams["ProjectName"] = input.ProjectName;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateProjectVersionRequest = (input, context) => {
    const bodyParams = {};
    if (input.OutputConfig !== undefined) {
        bodyParams["OutputConfig"] = serializeAws_json1_1OutputConfig(input.OutputConfig, context);
    }
    if (input.ProjectArn !== undefined) {
        bodyParams["ProjectArn"] = input.ProjectArn;
    }
    if (input.TestingData !== undefined) {
        bodyParams["TestingData"] = serializeAws_json1_1TestingData(input.TestingData, context);
    }
    if (input.TrainingData !== undefined) {
        bodyParams["TrainingData"] = serializeAws_json1_1TrainingData(input.TrainingData, context);
    }
    if (input.VersionName !== undefined) {
        bodyParams["VersionName"] = input.VersionName;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateStreamProcessorRequest = (input, context) => {
    const bodyParams = {};
    if (input.Input !== undefined) {
        bodyParams["Input"] = serializeAws_json1_1StreamProcessorInput(input.Input, context);
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Output !== undefined) {
        bodyParams["Output"] = serializeAws_json1_1StreamProcessorOutput(input.Output, context);
    }
    if (input.RoleArn !== undefined) {
        bodyParams["RoleArn"] = input.RoleArn;
    }
    if (input.Settings !== undefined) {
        bodyParams["Settings"] = serializeAws_json1_1StreamProcessorSettings(input.Settings, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteCollectionRequest = (input, context) => {
    const bodyParams = {};
    if (input.CollectionId !== undefined) {
        bodyParams["CollectionId"] = input.CollectionId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteFacesRequest = (input, context) => {
    const bodyParams = {};
    if (input.CollectionId !== undefined) {
        bodyParams["CollectionId"] = input.CollectionId;
    }
    if (input.FaceIds !== undefined) {
        bodyParams["FaceIds"] = serializeAws_json1_1FaceIdList(input.FaceIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteStreamProcessorRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeCollectionRequest = (input, context) => {
    const bodyParams = {};
    if (input.CollectionId !== undefined) {
        bodyParams["CollectionId"] = input.CollectionId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeProjectVersionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.ProjectArn !== undefined) {
        bodyParams["ProjectArn"] = input.ProjectArn;
    }
    if (input.VersionNames !== undefined) {
        bodyParams["VersionNames"] = serializeAws_json1_1VersionNames(input.VersionNames, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeProjectsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeStreamProcessorRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1DetectCustomLabelsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Image !== undefined) {
        bodyParams["Image"] = serializeAws_json1_1Image(input.Image, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.MinConfidence !== undefined) {
        bodyParams["MinConfidence"] = input.MinConfidence;
    }
    if (input.ProjectVersionArn !== undefined) {
        bodyParams["ProjectVersionArn"] = input.ProjectVersionArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DetectFacesRequest = (input, context) => {
    const bodyParams = {};
    if (input.Attributes !== undefined) {
        bodyParams["Attributes"] = serializeAws_json1_1Attributes(input.Attributes, context);
    }
    if (input.Image !== undefined) {
        bodyParams["Image"] = serializeAws_json1_1Image(input.Image, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DetectLabelsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Image !== undefined) {
        bodyParams["Image"] = serializeAws_json1_1Image(input.Image, context);
    }
    if (input.MaxLabels !== undefined) {
        bodyParams["MaxLabels"] = input.MaxLabels;
    }
    if (input.MinConfidence !== undefined) {
        bodyParams["MinConfidence"] = input.MinConfidence;
    }
    return bodyParams;
};
const serializeAws_json1_1DetectModerationLabelsRequest = (input, context) => {
    const bodyParams = {};
    if (input.HumanLoopConfig !== undefined) {
        bodyParams["HumanLoopConfig"] = serializeAws_json1_1HumanLoopConfig(input.HumanLoopConfig, context);
    }
    if (input.Image !== undefined) {
        bodyParams["Image"] = serializeAws_json1_1Image(input.Image, context);
    }
    if (input.MinConfidence !== undefined) {
        bodyParams["MinConfidence"] = input.MinConfidence;
    }
    return bodyParams;
};
const serializeAws_json1_1DetectTextRequest = (input, context) => {
    const bodyParams = {};
    if (input.Image !== undefined) {
        bodyParams["Image"] = serializeAws_json1_1Image(input.Image, context);
    }
    return bodyParams;
};
const serializeAws_json1_1FaceIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1FaceSearchSettings = (input, context) => {
    const bodyParams = {};
    if (input.CollectionId !== undefined) {
        bodyParams["CollectionId"] = input.CollectionId;
    }
    if (input.FaceMatchThreshold !== undefined) {
        bodyParams["FaceMatchThreshold"] = input.FaceMatchThreshold;
    }
    return bodyParams;
};
const serializeAws_json1_1GetCelebrityInfoRequest = (input, context) => {
    const bodyParams = {};
    if (input.Id !== undefined) {
        bodyParams["Id"] = input.Id;
    }
    return bodyParams;
};
const serializeAws_json1_1GetCelebrityRecognitionRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobId !== undefined) {
        bodyParams["JobId"] = input.JobId;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortBy !== undefined) {
        bodyParams["SortBy"] = input.SortBy;
    }
    return bodyParams;
};
const serializeAws_json1_1GetContentModerationRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobId !== undefined) {
        bodyParams["JobId"] = input.JobId;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortBy !== undefined) {
        bodyParams["SortBy"] = input.SortBy;
    }
    return bodyParams;
};
const serializeAws_json1_1GetFaceDetectionRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobId !== undefined) {
        bodyParams["JobId"] = input.JobId;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1GetFaceSearchRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobId !== undefined) {
        bodyParams["JobId"] = input.JobId;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortBy !== undefined) {
        bodyParams["SortBy"] = input.SortBy;
    }
    return bodyParams;
};
const serializeAws_json1_1GetLabelDetectionRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobId !== undefined) {
        bodyParams["JobId"] = input.JobId;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortBy !== undefined) {
        bodyParams["SortBy"] = input.SortBy;
    }
    return bodyParams;
};
const serializeAws_json1_1GetPersonTrackingRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobId !== undefined) {
        bodyParams["JobId"] = input.JobId;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.SortBy !== undefined) {
        bodyParams["SortBy"] = input.SortBy;
    }
    return bodyParams;
};
const serializeAws_json1_1GroundTruthManifest = (input, context) => {
    const bodyParams = {};
    if (input.S3Object !== undefined) {
        bodyParams["S3Object"] = serializeAws_json1_1S3Object(input.S3Object, context);
    }
    return bodyParams;
};
const serializeAws_json1_1HumanLoopConfig = (input, context) => {
    const bodyParams = {};
    if (input.DataAttributes !== undefined) {
        bodyParams["DataAttributes"] = serializeAws_json1_1HumanLoopDataAttributes(input.DataAttributes, context);
    }
    if (input.FlowDefinitionArn !== undefined) {
        bodyParams["FlowDefinitionArn"] = input.FlowDefinitionArn;
    }
    if (input.HumanLoopName !== undefined) {
        bodyParams["HumanLoopName"] = input.HumanLoopName;
    }
    return bodyParams;
};
const serializeAws_json1_1HumanLoopDataAttributes = (input, context) => {
    const bodyParams = {};
    if (input.ContentClassifiers !== undefined) {
        bodyParams["ContentClassifiers"] = serializeAws_json1_1ContentClassifiers(input.ContentClassifiers, context);
    }
    return bodyParams;
};
const serializeAws_json1_1Image = (input, context) => {
    const bodyParams = {};
    if (input.Bytes !== undefined) {
        bodyParams["Bytes"] = Buffer.from(input.Bytes).toString("utf-8");
    }
    if (input.S3Object !== undefined) {
        bodyParams["S3Object"] = serializeAws_json1_1S3Object(input.S3Object, context);
    }
    return bodyParams;
};
const serializeAws_json1_1IndexFacesRequest = (input, context) => {
    const bodyParams = {};
    if (input.CollectionId !== undefined) {
        bodyParams["CollectionId"] = input.CollectionId;
    }
    if (input.DetectionAttributes !== undefined) {
        bodyParams["DetectionAttributes"] = serializeAws_json1_1Attributes(input.DetectionAttributes, context);
    }
    if (input.ExternalImageId !== undefined) {
        bodyParams["ExternalImageId"] = input.ExternalImageId;
    }
    if (input.Image !== undefined) {
        bodyParams["Image"] = serializeAws_json1_1Image(input.Image, context);
    }
    if (input.MaxFaces !== undefined) {
        bodyParams["MaxFaces"] = input.MaxFaces;
    }
    if (input.QualityFilter !== undefined) {
        bodyParams["QualityFilter"] = input.QualityFilter;
    }
    return bodyParams;
};
const serializeAws_json1_1KinesisDataStream = (input, context) => {
    const bodyParams = {};
    if (input.Arn !== undefined) {
        bodyParams["Arn"] = input.Arn;
    }
    return bodyParams;
};
const serializeAws_json1_1KinesisVideoStream = (input, context) => {
    const bodyParams = {};
    if (input.Arn !== undefined) {
        bodyParams["Arn"] = input.Arn;
    }
    return bodyParams;
};
const serializeAws_json1_1ListCollectionsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListFacesRequest = (input, context) => {
    const bodyParams = {};
    if (input.CollectionId !== undefined) {
        bodyParams["CollectionId"] = input.CollectionId;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListStreamProcessorsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1NotificationChannel = (input, context) => {
    const bodyParams = {};
    if (input.RoleArn !== undefined) {
        bodyParams["RoleArn"] = input.RoleArn;
    }
    if (input.SNSTopicArn !== undefined) {
        bodyParams["SNSTopicArn"] = input.SNSTopicArn;
    }
    return bodyParams;
};
const serializeAws_json1_1OutputConfig = (input, context) => {
    const bodyParams = {};
    if (input.S3Bucket !== undefined) {
        bodyParams["S3Bucket"] = input.S3Bucket;
    }
    if (input.S3KeyPrefix !== undefined) {
        bodyParams["S3KeyPrefix"] = input.S3KeyPrefix;
    }
    return bodyParams;
};
const serializeAws_json1_1RecognizeCelebritiesRequest = (input, context) => {
    const bodyParams = {};
    if (input.Image !== undefined) {
        bodyParams["Image"] = serializeAws_json1_1Image(input.Image, context);
    }
    return bodyParams;
};
const serializeAws_json1_1S3Object = (input, context) => {
    const bodyParams = {};
    if (input.Bucket !== undefined) {
        bodyParams["Bucket"] = input.Bucket;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Version !== undefined) {
        bodyParams["Version"] = input.Version;
    }
    return bodyParams;
};
const serializeAws_json1_1SearchFacesByImageRequest = (input, context) => {
    const bodyParams = {};
    if (input.CollectionId !== undefined) {
        bodyParams["CollectionId"] = input.CollectionId;
    }
    if (input.FaceMatchThreshold !== undefined) {
        bodyParams["FaceMatchThreshold"] = input.FaceMatchThreshold;
    }
    if (input.Image !== undefined) {
        bodyParams["Image"] = serializeAws_json1_1Image(input.Image, context);
    }
    if (input.MaxFaces !== undefined) {
        bodyParams["MaxFaces"] = input.MaxFaces;
    }
    if (input.QualityFilter !== undefined) {
        bodyParams["QualityFilter"] = input.QualityFilter;
    }
    return bodyParams;
};
const serializeAws_json1_1SearchFacesRequest = (input, context) => {
    const bodyParams = {};
    if (input.CollectionId !== undefined) {
        bodyParams["CollectionId"] = input.CollectionId;
    }
    if (input.FaceId !== undefined) {
        bodyParams["FaceId"] = input.FaceId;
    }
    if (input.FaceMatchThreshold !== undefined) {
        bodyParams["FaceMatchThreshold"] = input.FaceMatchThreshold;
    }
    if (input.MaxFaces !== undefined) {
        bodyParams["MaxFaces"] = input.MaxFaces;
    }
    return bodyParams;
};
const serializeAws_json1_1StartCelebrityRecognitionRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.JobTag !== undefined) {
        bodyParams["JobTag"] = input.JobTag;
    }
    if (input.NotificationChannel !== undefined) {
        bodyParams["NotificationChannel"] = serializeAws_json1_1NotificationChannel(input.NotificationChannel, context);
    }
    if (input.Video !== undefined) {
        bodyParams["Video"] = serializeAws_json1_1Video(input.Video, context);
    }
    return bodyParams;
};
const serializeAws_json1_1StartContentModerationRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.JobTag !== undefined) {
        bodyParams["JobTag"] = input.JobTag;
    }
    if (input.MinConfidence !== undefined) {
        bodyParams["MinConfidence"] = input.MinConfidence;
    }
    if (input.NotificationChannel !== undefined) {
        bodyParams["NotificationChannel"] = serializeAws_json1_1NotificationChannel(input.NotificationChannel, context);
    }
    if (input.Video !== undefined) {
        bodyParams["Video"] = serializeAws_json1_1Video(input.Video, context);
    }
    return bodyParams;
};
const serializeAws_json1_1StartFaceDetectionRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.FaceAttributes !== undefined) {
        bodyParams["FaceAttributes"] = input.FaceAttributes;
    }
    if (input.JobTag !== undefined) {
        bodyParams["JobTag"] = input.JobTag;
    }
    if (input.NotificationChannel !== undefined) {
        bodyParams["NotificationChannel"] = serializeAws_json1_1NotificationChannel(input.NotificationChannel, context);
    }
    if (input.Video !== undefined) {
        bodyParams["Video"] = serializeAws_json1_1Video(input.Video, context);
    }
    return bodyParams;
};
const serializeAws_json1_1StartFaceSearchRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.CollectionId !== undefined) {
        bodyParams["CollectionId"] = input.CollectionId;
    }
    if (input.FaceMatchThreshold !== undefined) {
        bodyParams["FaceMatchThreshold"] = input.FaceMatchThreshold;
    }
    if (input.JobTag !== undefined) {
        bodyParams["JobTag"] = input.JobTag;
    }
    if (input.NotificationChannel !== undefined) {
        bodyParams["NotificationChannel"] = serializeAws_json1_1NotificationChannel(input.NotificationChannel, context);
    }
    if (input.Video !== undefined) {
        bodyParams["Video"] = serializeAws_json1_1Video(input.Video, context);
    }
    return bodyParams;
};
const serializeAws_json1_1StartLabelDetectionRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.JobTag !== undefined) {
        bodyParams["JobTag"] = input.JobTag;
    }
    if (input.MinConfidence !== undefined) {
        bodyParams["MinConfidence"] = input.MinConfidence;
    }
    if (input.NotificationChannel !== undefined) {
        bodyParams["NotificationChannel"] = serializeAws_json1_1NotificationChannel(input.NotificationChannel, context);
    }
    if (input.Video !== undefined) {
        bodyParams["Video"] = serializeAws_json1_1Video(input.Video, context);
    }
    return bodyParams;
};
const serializeAws_json1_1StartPersonTrackingRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.JobTag !== undefined) {
        bodyParams["JobTag"] = input.JobTag;
    }
    if (input.NotificationChannel !== undefined) {
        bodyParams["NotificationChannel"] = serializeAws_json1_1NotificationChannel(input.NotificationChannel, context);
    }
    if (input.Video !== undefined) {
        bodyParams["Video"] = serializeAws_json1_1Video(input.Video, context);
    }
    return bodyParams;
};
const serializeAws_json1_1StartProjectVersionRequest = (input, context) => {
    const bodyParams = {};
    if (input.MinInferenceUnits !== undefined) {
        bodyParams["MinInferenceUnits"] = input.MinInferenceUnits;
    }
    if (input.ProjectVersionArn !== undefined) {
        bodyParams["ProjectVersionArn"] = input.ProjectVersionArn;
    }
    return bodyParams;
};
const serializeAws_json1_1StartStreamProcessorRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1StopProjectVersionRequest = (input, context) => {
    const bodyParams = {};
    if (input.ProjectVersionArn !== undefined) {
        bodyParams["ProjectVersionArn"] = input.ProjectVersionArn;
    }
    return bodyParams;
};
const serializeAws_json1_1StopStreamProcessorRequest = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    return bodyParams;
};
const serializeAws_json1_1StreamProcessorInput = (input, context) => {
    const bodyParams = {};
    if (input.KinesisVideoStream !== undefined) {
        bodyParams["KinesisVideoStream"] = serializeAws_json1_1KinesisVideoStream(input.KinesisVideoStream, context);
    }
    return bodyParams;
};
const serializeAws_json1_1StreamProcessorOutput = (input, context) => {
    const bodyParams = {};
    if (input.KinesisDataStream !== undefined) {
        bodyParams["KinesisDataStream"] = serializeAws_json1_1KinesisDataStream(input.KinesisDataStream, context);
    }
    return bodyParams;
};
const serializeAws_json1_1StreamProcessorSettings = (input, context) => {
    const bodyParams = {};
    if (input.FaceSearch !== undefined) {
        bodyParams["FaceSearch"] = serializeAws_json1_1FaceSearchSettings(input.FaceSearch, context);
    }
    return bodyParams;
};
const serializeAws_json1_1TestingData = (input, context) => {
    const bodyParams = {};
    if (input.Assets !== undefined) {
        bodyParams["Assets"] = serializeAws_json1_1Assets(input.Assets, context);
    }
    if (input.AutoCreate !== undefined) {
        bodyParams["AutoCreate"] = input.AutoCreate;
    }
    return bodyParams;
};
const serializeAws_json1_1TrainingData = (input, context) => {
    const bodyParams = {};
    if (input.Assets !== undefined) {
        bodyParams["Assets"] = serializeAws_json1_1Assets(input.Assets, context);
    }
    return bodyParams;
};
const serializeAws_json1_1VersionNames = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1Video = (input, context) => {
    const bodyParams = {};
    if (input.S3Object !== undefined) {
        bodyParams["S3Object"] = serializeAws_json1_1S3Object(input.S3Object, context);
    }
    return bodyParams;
};
const deserializeAws_json1_1AccessDeniedException = (output, context) => {
    let contents = {
        __type: "AccessDeniedException",
        Code: undefined,
        Logref: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Logref !== undefined && output.Logref !== null) {
        contents.Logref = output.Logref;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1AgeRange = (output, context) => {
    let contents = {
        __type: "AgeRange",
        High: undefined,
        Low: undefined
    };
    if (output.High !== undefined && output.High !== null) {
        contents.High = output.High;
    }
    if (output.Low !== undefined && output.Low !== null) {
        contents.Low = output.Low;
    }
    return contents;
};
const deserializeAws_json1_1Asset = (output, context) => {
    let contents = {
        __type: "Asset",
        GroundTruthManifest: undefined
    };
    if (output.GroundTruthManifest !== undefined &&
        output.GroundTruthManifest !== null) {
        contents.GroundTruthManifest = deserializeAws_json1_1GroundTruthManifest(output.GroundTruthManifest, context);
    }
    return contents;
};
const deserializeAws_json1_1Assets = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Asset(entry, context));
};
const deserializeAws_json1_1Beard = (output, context) => {
    let contents = {
        __type: "Beard",
        Confidence: undefined,
        Value: undefined
    };
    if (output.Confidence !== undefined && output.Confidence !== null) {
        contents.Confidence = output.Confidence;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1BoundingBox = (output, context) => {
    let contents = {
        __type: "BoundingBox",
        Height: undefined,
        Left: undefined,
        Top: undefined,
        Width: undefined
    };
    if (output.Height !== undefined && output.Height !== null) {
        contents.Height = output.Height;
    }
    if (output.Left !== undefined && output.Left !== null) {
        contents.Left = output.Left;
    }
    if (output.Top !== undefined && output.Top !== null) {
        contents.Top = output.Top;
    }
    if (output.Width !== undefined && output.Width !== null) {
        contents.Width = output.Width;
    }
    return contents;
};
const deserializeAws_json1_1Celebrity = (output, context) => {
    let contents = {
        __type: "Celebrity",
        Face: undefined,
        Id: undefined,
        MatchConfidence: undefined,
        Name: undefined,
        Urls: undefined
    };
    if (output.Face !== undefined && output.Face !== null) {
        contents.Face = deserializeAws_json1_1ComparedFace(output.Face, context);
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.MatchConfidence !== undefined && output.MatchConfidence !== null) {
        contents.MatchConfidence = output.MatchConfidence;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Urls !== undefined && output.Urls !== null) {
        contents.Urls = deserializeAws_json1_1Urls(output.Urls, context);
    }
    return contents;
};
const deserializeAws_json1_1CelebrityDetail = (output, context) => {
    let contents = {
        __type: "CelebrityDetail",
        BoundingBox: undefined,
        Confidence: undefined,
        Face: undefined,
        Id: undefined,
        Name: undefined,
        Urls: undefined
    };
    if (output.BoundingBox !== undefined && output.BoundingBox !== null) {
        contents.BoundingBox = deserializeAws_json1_1BoundingBox(output.BoundingBox, context);
    }
    if (output.Confidence !== undefined && output.Confidence !== null) {
        contents.Confidence = output.Confidence;
    }
    if (output.Face !== undefined && output.Face !== null) {
        contents.Face = deserializeAws_json1_1FaceDetail(output.Face, context);
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Urls !== undefined && output.Urls !== null) {
        contents.Urls = deserializeAws_json1_1Urls(output.Urls, context);
    }
    return contents;
};
const deserializeAws_json1_1CelebrityList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Celebrity(entry, context));
};
const deserializeAws_json1_1CelebrityRecognition = (output, context) => {
    let contents = {
        __type: "CelebrityRecognition",
        Celebrity: undefined,
        Timestamp: undefined
    };
    if (output.Celebrity !== undefined && output.Celebrity !== null) {
        contents.Celebrity = deserializeAws_json1_1CelebrityDetail(output.Celebrity, context);
    }
    if (output.Timestamp !== undefined && output.Timestamp !== null) {
        contents.Timestamp = output.Timestamp;
    }
    return contents;
};
const deserializeAws_json1_1CelebrityRecognitions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CelebrityRecognition(entry, context));
};
const deserializeAws_json1_1CollectionIdList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1CompareFacesMatch = (output, context) => {
    let contents = {
        __type: "CompareFacesMatch",
        Face: undefined,
        Similarity: undefined
    };
    if (output.Face !== undefined && output.Face !== null) {
        contents.Face = deserializeAws_json1_1ComparedFace(output.Face, context);
    }
    if (output.Similarity !== undefined && output.Similarity !== null) {
        contents.Similarity = output.Similarity;
    }
    return contents;
};
const deserializeAws_json1_1CompareFacesMatchList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CompareFacesMatch(entry, context));
};
const deserializeAws_json1_1CompareFacesResponse = (output, context) => {
    let contents = {
        __type: "CompareFacesResponse",
        FaceMatches: undefined,
        SourceImageFace: undefined,
        SourceImageOrientationCorrection: undefined,
        TargetImageOrientationCorrection: undefined,
        UnmatchedFaces: undefined
    };
    if (output.FaceMatches !== undefined && output.FaceMatches !== null) {
        contents.FaceMatches = deserializeAws_json1_1CompareFacesMatchList(output.FaceMatches, context);
    }
    if (output.SourceImageFace !== undefined && output.SourceImageFace !== null) {
        contents.SourceImageFace = deserializeAws_json1_1ComparedSourceImageFace(output.SourceImageFace, context);
    }
    if (output.SourceImageOrientationCorrection !== undefined &&
        output.SourceImageOrientationCorrection !== null) {
        contents.SourceImageOrientationCorrection =
            output.SourceImageOrientationCorrection;
    }
    if (output.TargetImageOrientationCorrection !== undefined &&
        output.TargetImageOrientationCorrection !== null) {
        contents.TargetImageOrientationCorrection =
            output.TargetImageOrientationCorrection;
    }
    if (output.UnmatchedFaces !== undefined && output.UnmatchedFaces !== null) {
        contents.UnmatchedFaces = deserializeAws_json1_1CompareFacesUnmatchList(output.UnmatchedFaces, context);
    }
    return contents;
};
const deserializeAws_json1_1CompareFacesUnmatchList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ComparedFace(entry, context));
};
const deserializeAws_json1_1ComparedFace = (output, context) => {
    let contents = {
        __type: "ComparedFace",
        BoundingBox: undefined,
        Confidence: undefined,
        Landmarks: undefined,
        Pose: undefined,
        Quality: undefined
    };
    if (output.BoundingBox !== undefined && output.BoundingBox !== null) {
        contents.BoundingBox = deserializeAws_json1_1BoundingBox(output.BoundingBox, context);
    }
    if (output.Confidence !== undefined && output.Confidence !== null) {
        contents.Confidence = output.Confidence;
    }
    if (output.Landmarks !== undefined && output.Landmarks !== null) {
        contents.Landmarks = deserializeAws_json1_1Landmarks(output.Landmarks, context);
    }
    if (output.Pose !== undefined && output.Pose !== null) {
        contents.Pose = deserializeAws_json1_1Pose(output.Pose, context);
    }
    if (output.Quality !== undefined && output.Quality !== null) {
        contents.Quality = deserializeAws_json1_1ImageQuality(output.Quality, context);
    }
    return contents;
};
const deserializeAws_json1_1ComparedFaceList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ComparedFace(entry, context));
};
const deserializeAws_json1_1ComparedSourceImageFace = (output, context) => {
    let contents = {
        __type: "ComparedSourceImageFace",
        BoundingBox: undefined,
        Confidence: undefined
    };
    if (output.BoundingBox !== undefined && output.BoundingBox !== null) {
        contents.BoundingBox = deserializeAws_json1_1BoundingBox(output.BoundingBox, context);
    }
    if (output.Confidence !== undefined && output.Confidence !== null) {
        contents.Confidence = output.Confidence;
    }
    return contents;
};
const deserializeAws_json1_1ContentModerationDetection = (output, context) => {
    let contents = {
        __type: "ContentModerationDetection",
        ModerationLabel: undefined,
        Timestamp: undefined
    };
    if (output.ModerationLabel !== undefined && output.ModerationLabel !== null) {
        contents.ModerationLabel = deserializeAws_json1_1ModerationLabel(output.ModerationLabel, context);
    }
    if (output.Timestamp !== undefined && output.Timestamp !== null) {
        contents.Timestamp = output.Timestamp;
    }
    return contents;
};
const deserializeAws_json1_1ContentModerationDetections = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ContentModerationDetection(entry, context));
};
const deserializeAws_json1_1CreateCollectionResponse = (output, context) => {
    let contents = {
        __type: "CreateCollectionResponse",
        CollectionArn: undefined,
        FaceModelVersion: undefined,
        StatusCode: undefined
    };
    if (output.CollectionArn !== undefined && output.CollectionArn !== null) {
        contents.CollectionArn = output.CollectionArn;
    }
    if (output.FaceModelVersion !== undefined &&
        output.FaceModelVersion !== null) {
        contents.FaceModelVersion = output.FaceModelVersion;
    }
    if (output.StatusCode !== undefined && output.StatusCode !== null) {
        contents.StatusCode = output.StatusCode;
    }
    return contents;
};
const deserializeAws_json1_1CreateProjectResponse = (output, context) => {
    let contents = {
        __type: "CreateProjectResponse",
        ProjectArn: undefined
    };
    if (output.ProjectArn !== undefined && output.ProjectArn !== null) {
        contents.ProjectArn = output.ProjectArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateProjectVersionResponse = (output, context) => {
    let contents = {
        __type: "CreateProjectVersionResponse",
        ProjectVersionArn: undefined
    };
    if (output.ProjectVersionArn !== undefined &&
        output.ProjectVersionArn !== null) {
        contents.ProjectVersionArn = output.ProjectVersionArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateStreamProcessorResponse = (output, context) => {
    let contents = {
        __type: "CreateStreamProcessorResponse",
        StreamProcessorArn: undefined
    };
    if (output.StreamProcessorArn !== undefined &&
        output.StreamProcessorArn !== null) {
        contents.StreamProcessorArn = output.StreamProcessorArn;
    }
    return contents;
};
const deserializeAws_json1_1CustomLabel = (output, context) => {
    let contents = {
        __type: "CustomLabel",
        Confidence: undefined,
        Geometry: undefined,
        Name: undefined
    };
    if (output.Confidence !== undefined && output.Confidence !== null) {
        contents.Confidence = output.Confidence;
    }
    if (output.Geometry !== undefined && output.Geometry !== null) {
        contents.Geometry = deserializeAws_json1_1Geometry(output.Geometry, context);
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1CustomLabels = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CustomLabel(entry, context));
};
const deserializeAws_json1_1DeleteCollectionResponse = (output, context) => {
    let contents = {
        __type: "DeleteCollectionResponse",
        StatusCode: undefined
    };
    if (output.StatusCode !== undefined && output.StatusCode !== null) {
        contents.StatusCode = output.StatusCode;
    }
    return contents;
};
const deserializeAws_json1_1DeleteFacesResponse = (output, context) => {
    let contents = {
        __type: "DeleteFacesResponse",
        DeletedFaces: undefined
    };
    if (output.DeletedFaces !== undefined && output.DeletedFaces !== null) {
        contents.DeletedFaces = deserializeAws_json1_1FaceIdList(output.DeletedFaces, context);
    }
    return contents;
};
const deserializeAws_json1_1DeleteStreamProcessorResponse = (output, context) => {
    let contents = {
        __type: "DeleteStreamProcessorResponse"
    };
    return contents;
};
const deserializeAws_json1_1DescribeCollectionResponse = (output, context) => {
    let contents = {
        __type: "DescribeCollectionResponse",
        CollectionARN: undefined,
        CreationTimestamp: undefined,
        FaceCount: undefined,
        FaceModelVersion: undefined
    };
    if (output.CollectionARN !== undefined && output.CollectionARN !== null) {
        contents.CollectionARN = output.CollectionARN;
    }
    if (output.CreationTimestamp !== undefined &&
        output.CreationTimestamp !== null) {
        contents.CreationTimestamp = new Date(Math.round(output.CreationTimestamp * 1000));
    }
    if (output.FaceCount !== undefined && output.FaceCount !== null) {
        contents.FaceCount = output.FaceCount;
    }
    if (output.FaceModelVersion !== undefined &&
        output.FaceModelVersion !== null) {
        contents.FaceModelVersion = output.FaceModelVersion;
    }
    return contents;
};
const deserializeAws_json1_1DescribeProjectVersionsResponse = (output, context) => {
    let contents = {
        __type: "DescribeProjectVersionsResponse",
        NextToken: undefined,
        ProjectVersionDescriptions: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.ProjectVersionDescriptions !== undefined &&
        output.ProjectVersionDescriptions !== null) {
        contents.ProjectVersionDescriptions = deserializeAws_json1_1ProjectVersionDescriptions(output.ProjectVersionDescriptions, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeProjectsResponse = (output, context) => {
    let contents = {
        __type: "DescribeProjectsResponse",
        NextToken: undefined,
        ProjectDescriptions: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.ProjectDescriptions !== undefined &&
        output.ProjectDescriptions !== null) {
        contents.ProjectDescriptions = deserializeAws_json1_1ProjectDescriptions(output.ProjectDescriptions, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeStreamProcessorResponse = (output, context) => {
    let contents = {
        __type: "DescribeStreamProcessorResponse",
        CreationTimestamp: undefined,
        Input: undefined,
        LastUpdateTimestamp: undefined,
        Name: undefined,
        Output: undefined,
        RoleArn: undefined,
        Settings: undefined,
        Status: undefined,
        StatusMessage: undefined,
        StreamProcessorArn: undefined
    };
    if (output.CreationTimestamp !== undefined &&
        output.CreationTimestamp !== null) {
        contents.CreationTimestamp = new Date(Math.round(output.CreationTimestamp * 1000));
    }
    if (output.Input !== undefined && output.Input !== null) {
        contents.Input = deserializeAws_json1_1StreamProcessorInput(output.Input, context);
    }
    if (output.LastUpdateTimestamp !== undefined &&
        output.LastUpdateTimestamp !== null) {
        contents.LastUpdateTimestamp = new Date(Math.round(output.LastUpdateTimestamp * 1000));
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Output !== undefined && output.Output !== null) {
        contents.Output = deserializeAws_json1_1StreamProcessorOutput(output.Output, context);
    }
    if (output.RoleArn !== undefined && output.RoleArn !== null) {
        contents.RoleArn = output.RoleArn;
    }
    if (output.Settings !== undefined && output.Settings !== null) {
        contents.Settings = deserializeAws_json1_1StreamProcessorSettings(output.Settings, context);
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
        contents.StatusMessage = output.StatusMessage;
    }
    if (output.StreamProcessorArn !== undefined &&
        output.StreamProcessorArn !== null) {
        contents.StreamProcessorArn = output.StreamProcessorArn;
    }
    return contents;
};
const deserializeAws_json1_1DetectCustomLabelsResponse = (output, context) => {
    let contents = {
        __type: "DetectCustomLabelsResponse",
        CustomLabels: undefined
    };
    if (output.CustomLabels !== undefined && output.CustomLabels !== null) {
        contents.CustomLabels = deserializeAws_json1_1CustomLabels(output.CustomLabels, context);
    }
    return contents;
};
const deserializeAws_json1_1DetectFacesResponse = (output, context) => {
    let contents = {
        __type: "DetectFacesResponse",
        FaceDetails: undefined,
        OrientationCorrection: undefined
    };
    if (output.FaceDetails !== undefined && output.FaceDetails !== null) {
        contents.FaceDetails = deserializeAws_json1_1FaceDetailList(output.FaceDetails, context);
    }
    if (output.OrientationCorrection !== undefined &&
        output.OrientationCorrection !== null) {
        contents.OrientationCorrection = output.OrientationCorrection;
    }
    return contents;
};
const deserializeAws_json1_1DetectLabelsResponse = (output, context) => {
    let contents = {
        __type: "DetectLabelsResponse",
        LabelModelVersion: undefined,
        Labels: undefined,
        OrientationCorrection: undefined
    };
    if (output.LabelModelVersion !== undefined &&
        output.LabelModelVersion !== null) {
        contents.LabelModelVersion = output.LabelModelVersion;
    }
    if (output.Labels !== undefined && output.Labels !== null) {
        contents.Labels = deserializeAws_json1_1Labels(output.Labels, context);
    }
    if (output.OrientationCorrection !== undefined &&
        output.OrientationCorrection !== null) {
        contents.OrientationCorrection = output.OrientationCorrection;
    }
    return contents;
};
const deserializeAws_json1_1DetectModerationLabelsResponse = (output, context) => {
    let contents = {
        __type: "DetectModerationLabelsResponse",
        HumanLoopActivationOutput: undefined,
        ModerationLabels: undefined,
        ModerationModelVersion: undefined
    };
    if (output.HumanLoopActivationOutput !== undefined &&
        output.HumanLoopActivationOutput !== null) {
        contents.HumanLoopActivationOutput = deserializeAws_json1_1HumanLoopActivationOutput(output.HumanLoopActivationOutput, context);
    }
    if (output.ModerationLabels !== undefined &&
        output.ModerationLabels !== null) {
        contents.ModerationLabels = deserializeAws_json1_1ModerationLabels(output.ModerationLabels, context);
    }
    if (output.ModerationModelVersion !== undefined &&
        output.ModerationModelVersion !== null) {
        contents.ModerationModelVersion = output.ModerationModelVersion;
    }
    return contents;
};
const deserializeAws_json1_1DetectTextResponse = (output, context) => {
    let contents = {
        __type: "DetectTextResponse",
        TextDetections: undefined
    };
    if (output.TextDetections !== undefined && output.TextDetections !== null) {
        contents.TextDetections = deserializeAws_json1_1TextDetectionList(output.TextDetections, context);
    }
    return contents;
};
const deserializeAws_json1_1Emotion = (output, context) => {
    let contents = {
        __type: "Emotion",
        Confidence: undefined,
        Type: undefined
    };
    if (output.Confidence !== undefined && output.Confidence !== null) {
        contents.Confidence = output.Confidence;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1Emotions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Emotion(entry, context));
};
const deserializeAws_json1_1EvaluationResult = (output, context) => {
    let contents = {
        __type: "EvaluationResult",
        F1Score: undefined,
        Summary: undefined
    };
    if (output.F1Score !== undefined && output.F1Score !== null) {
        contents.F1Score = output.F1Score;
    }
    if (output.Summary !== undefined && output.Summary !== null) {
        contents.Summary = deserializeAws_json1_1Summary(output.Summary, context);
    }
    return contents;
};
const deserializeAws_json1_1EyeOpen = (output, context) => {
    let contents = {
        __type: "EyeOpen",
        Confidence: undefined,
        Value: undefined
    };
    if (output.Confidence !== undefined && output.Confidence !== null) {
        contents.Confidence = output.Confidence;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1Eyeglasses = (output, context) => {
    let contents = {
        __type: "Eyeglasses",
        Confidence: undefined,
        Value: undefined
    };
    if (output.Confidence !== undefined && output.Confidence !== null) {
        contents.Confidence = output.Confidence;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1Face = (output, context) => {
    let contents = {
        __type: "Face",
        BoundingBox: undefined,
        Confidence: undefined,
        ExternalImageId: undefined,
        FaceId: undefined,
        ImageId: undefined
    };
    if (output.BoundingBox !== undefined && output.BoundingBox !== null) {
        contents.BoundingBox = deserializeAws_json1_1BoundingBox(output.BoundingBox, context);
    }
    if (output.Confidence !== undefined && output.Confidence !== null) {
        contents.Confidence = output.Confidence;
    }
    if (output.ExternalImageId !== undefined && output.ExternalImageId !== null) {
        contents.ExternalImageId = output.ExternalImageId;
    }
    if (output.FaceId !== undefined && output.FaceId !== null) {
        contents.FaceId = output.FaceId;
    }
    if (output.ImageId !== undefined && output.ImageId !== null) {
        contents.ImageId = output.ImageId;
    }
    return contents;
};
const deserializeAws_json1_1FaceDetail = (output, context) => {
    let contents = {
        __type: "FaceDetail",
        AgeRange: undefined,
        Beard: undefined,
        BoundingBox: undefined,
        Confidence: undefined,
        Emotions: undefined,
        Eyeglasses: undefined,
        EyesOpen: undefined,
        Gender: undefined,
        Landmarks: undefined,
        MouthOpen: undefined,
        Mustache: undefined,
        Pose: undefined,
        Quality: undefined,
        Smile: undefined,
        Sunglasses: undefined
    };
    if (output.AgeRange !== undefined && output.AgeRange !== null) {
        contents.AgeRange = deserializeAws_json1_1AgeRange(output.AgeRange, context);
    }
    if (output.Beard !== undefined && output.Beard !== null) {
        contents.Beard = deserializeAws_json1_1Beard(output.Beard, context);
    }
    if (output.BoundingBox !== undefined && output.BoundingBox !== null) {
        contents.BoundingBox = deserializeAws_json1_1BoundingBox(output.BoundingBox, context);
    }
    if (output.Confidence !== undefined && output.Confidence !== null) {
        contents.Confidence = output.Confidence;
    }
    if (output.Emotions !== undefined && output.Emotions !== null) {
        contents.Emotions = deserializeAws_json1_1Emotions(output.Emotions, context);
    }
    if (output.Eyeglasses !== undefined && output.Eyeglasses !== null) {
        contents.Eyeglasses = deserializeAws_json1_1Eyeglasses(output.Eyeglasses, context);
    }
    if (output.EyesOpen !== undefined && output.EyesOpen !== null) {
        contents.EyesOpen = deserializeAws_json1_1EyeOpen(output.EyesOpen, context);
    }
    if (output.Gender !== undefined && output.Gender !== null) {
        contents.Gender = deserializeAws_json1_1Gender(output.Gender, context);
    }
    if (output.Landmarks !== undefined && output.Landmarks !== null) {
        contents.Landmarks = deserializeAws_json1_1Landmarks(output.Landmarks, context);
    }
    if (output.MouthOpen !== undefined && output.MouthOpen !== null) {
        contents.MouthOpen = deserializeAws_json1_1MouthOpen(output.MouthOpen, context);
    }
    if (output.Mustache !== undefined && output.Mustache !== null) {
        contents.Mustache = deserializeAws_json1_1Mustache(output.Mustache, context);
    }
    if (output.Pose !== undefined && output.Pose !== null) {
        contents.Pose = deserializeAws_json1_1Pose(output.Pose, context);
    }
    if (output.Quality !== undefined && output.Quality !== null) {
        contents.Quality = deserializeAws_json1_1ImageQuality(output.Quality, context);
    }
    if (output.Smile !== undefined && output.Smile !== null) {
        contents.Smile = deserializeAws_json1_1Smile(output.Smile, context);
    }
    if (output.Sunglasses !== undefined && output.Sunglasses !== null) {
        contents.Sunglasses = deserializeAws_json1_1Sunglasses(output.Sunglasses, context);
    }
    return contents;
};
const deserializeAws_json1_1FaceDetailList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1FaceDetail(entry, context));
};
const deserializeAws_json1_1FaceDetection = (output, context) => {
    let contents = {
        __type: "FaceDetection",
        Face: undefined,
        Timestamp: undefined
    };
    if (output.Face !== undefined && output.Face !== null) {
        contents.Face = deserializeAws_json1_1FaceDetail(output.Face, context);
    }
    if (output.Timestamp !== undefined && output.Timestamp !== null) {
        contents.Timestamp = output.Timestamp;
    }
    return contents;
};
const deserializeAws_json1_1FaceDetections = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1FaceDetection(entry, context));
};
const deserializeAws_json1_1FaceIdList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1FaceList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Face(entry, context));
};
const deserializeAws_json1_1FaceMatch = (output, context) => {
    let contents = {
        __type: "FaceMatch",
        Face: undefined,
        Similarity: undefined
    };
    if (output.Face !== undefined && output.Face !== null) {
        contents.Face = deserializeAws_json1_1Face(output.Face, context);
    }
    if (output.Similarity !== undefined && output.Similarity !== null) {
        contents.Similarity = output.Similarity;
    }
    return contents;
};
const deserializeAws_json1_1FaceMatchList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1FaceMatch(entry, context));
};
const deserializeAws_json1_1FaceModelVersionList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1FaceRecord = (output, context) => {
    let contents = {
        __type: "FaceRecord",
        Face: undefined,
        FaceDetail: undefined
    };
    if (output.Face !== undefined && output.Face !== null) {
        contents.Face = deserializeAws_json1_1Face(output.Face, context);
    }
    if (output.FaceDetail !== undefined && output.FaceDetail !== null) {
        contents.FaceDetail = deserializeAws_json1_1FaceDetail(output.FaceDetail, context);
    }
    return contents;
};
const deserializeAws_json1_1FaceRecordList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1FaceRecord(entry, context));
};
const deserializeAws_json1_1FaceSearchSettings = (output, context) => {
    let contents = {
        __type: "FaceSearchSettings",
        CollectionId: undefined,
        FaceMatchThreshold: undefined
    };
    if (output.CollectionId !== undefined && output.CollectionId !== null) {
        contents.CollectionId = output.CollectionId;
    }
    if (output.FaceMatchThreshold !== undefined &&
        output.FaceMatchThreshold !== null) {
        contents.FaceMatchThreshold = output.FaceMatchThreshold;
    }
    return contents;
};
const deserializeAws_json1_1Gender = (output, context) => {
    let contents = {
        __type: "Gender",
        Confidence: undefined,
        Value: undefined
    };
    if (output.Confidence !== undefined && output.Confidence !== null) {
        contents.Confidence = output.Confidence;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1Geometry = (output, context) => {
    let contents = {
        __type: "Geometry",
        BoundingBox: undefined,
        Polygon: undefined
    };
    if (output.BoundingBox !== undefined && output.BoundingBox !== null) {
        contents.BoundingBox = deserializeAws_json1_1BoundingBox(output.BoundingBox, context);
    }
    if (output.Polygon !== undefined && output.Polygon !== null) {
        contents.Polygon = deserializeAws_json1_1Polygon(output.Polygon, context);
    }
    return contents;
};
const deserializeAws_json1_1GetCelebrityInfoResponse = (output, context) => {
    let contents = {
        __type: "GetCelebrityInfoResponse",
        Name: undefined,
        Urls: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Urls !== undefined && output.Urls !== null) {
        contents.Urls = deserializeAws_json1_1Urls(output.Urls, context);
    }
    return contents;
};
const deserializeAws_json1_1GetCelebrityRecognitionResponse = (output, context) => {
    let contents = {
        __type: "GetCelebrityRecognitionResponse",
        Celebrities: undefined,
        JobStatus: undefined,
        NextToken: undefined,
        StatusMessage: undefined,
        VideoMetadata: undefined
    };
    if (output.Celebrities !== undefined && output.Celebrities !== null) {
        contents.Celebrities = deserializeAws_json1_1CelebrityRecognitions(output.Celebrities, context);
    }
    if (output.JobStatus !== undefined && output.JobStatus !== null) {
        contents.JobStatus = output.JobStatus;
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
        contents.StatusMessage = output.StatusMessage;
    }
    if (output.VideoMetadata !== undefined && output.VideoMetadata !== null) {
        contents.VideoMetadata = deserializeAws_json1_1VideoMetadata(output.VideoMetadata, context);
    }
    return contents;
};
const deserializeAws_json1_1GetContentModerationResponse = (output, context) => {
    let contents = {
        __type: "GetContentModerationResponse",
        JobStatus: undefined,
        ModerationLabels: undefined,
        ModerationModelVersion: undefined,
        NextToken: undefined,
        StatusMessage: undefined,
        VideoMetadata: undefined
    };
    if (output.JobStatus !== undefined && output.JobStatus !== null) {
        contents.JobStatus = output.JobStatus;
    }
    if (output.ModerationLabels !== undefined &&
        output.ModerationLabels !== null) {
        contents.ModerationLabels = deserializeAws_json1_1ContentModerationDetections(output.ModerationLabels, context);
    }
    if (output.ModerationModelVersion !== undefined &&
        output.ModerationModelVersion !== null) {
        contents.ModerationModelVersion = output.ModerationModelVersion;
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
        contents.StatusMessage = output.StatusMessage;
    }
    if (output.VideoMetadata !== undefined && output.VideoMetadata !== null) {
        contents.VideoMetadata = deserializeAws_json1_1VideoMetadata(output.VideoMetadata, context);
    }
    return contents;
};
const deserializeAws_json1_1GetFaceDetectionResponse = (output, context) => {
    let contents = {
        __type: "GetFaceDetectionResponse",
        Faces: undefined,
        JobStatus: undefined,
        NextToken: undefined,
        StatusMessage: undefined,
        VideoMetadata: undefined
    };
    if (output.Faces !== undefined && output.Faces !== null) {
        contents.Faces = deserializeAws_json1_1FaceDetections(output.Faces, context);
    }
    if (output.JobStatus !== undefined && output.JobStatus !== null) {
        contents.JobStatus = output.JobStatus;
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
        contents.StatusMessage = output.StatusMessage;
    }
    if (output.VideoMetadata !== undefined && output.VideoMetadata !== null) {
        contents.VideoMetadata = deserializeAws_json1_1VideoMetadata(output.VideoMetadata, context);
    }
    return contents;
};
const deserializeAws_json1_1GetFaceSearchResponse = (output, context) => {
    let contents = {
        __type: "GetFaceSearchResponse",
        JobStatus: undefined,
        NextToken: undefined,
        Persons: undefined,
        StatusMessage: undefined,
        VideoMetadata: undefined
    };
    if (output.JobStatus !== undefined && output.JobStatus !== null) {
        contents.JobStatus = output.JobStatus;
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Persons !== undefined && output.Persons !== null) {
        contents.Persons = deserializeAws_json1_1PersonMatches(output.Persons, context);
    }
    if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
        contents.StatusMessage = output.StatusMessage;
    }
    if (output.VideoMetadata !== undefined && output.VideoMetadata !== null) {
        contents.VideoMetadata = deserializeAws_json1_1VideoMetadata(output.VideoMetadata, context);
    }
    return contents;
};
const deserializeAws_json1_1GetLabelDetectionResponse = (output, context) => {
    let contents = {
        __type: "GetLabelDetectionResponse",
        JobStatus: undefined,
        LabelModelVersion: undefined,
        Labels: undefined,
        NextToken: undefined,
        StatusMessage: undefined,
        VideoMetadata: undefined
    };
    if (output.JobStatus !== undefined && output.JobStatus !== null) {
        contents.JobStatus = output.JobStatus;
    }
    if (output.LabelModelVersion !== undefined &&
        output.LabelModelVersion !== null) {
        contents.LabelModelVersion = output.LabelModelVersion;
    }
    if (output.Labels !== undefined && output.Labels !== null) {
        contents.Labels = deserializeAws_json1_1LabelDetections(output.Labels, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
        contents.StatusMessage = output.StatusMessage;
    }
    if (output.VideoMetadata !== undefined && output.VideoMetadata !== null) {
        contents.VideoMetadata = deserializeAws_json1_1VideoMetadata(output.VideoMetadata, context);
    }
    return contents;
};
const deserializeAws_json1_1GetPersonTrackingResponse = (output, context) => {
    let contents = {
        __type: "GetPersonTrackingResponse",
        JobStatus: undefined,
        NextToken: undefined,
        Persons: undefined,
        StatusMessage: undefined,
        VideoMetadata: undefined
    };
    if (output.JobStatus !== undefined && output.JobStatus !== null) {
        contents.JobStatus = output.JobStatus;
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.Persons !== undefined && output.Persons !== null) {
        contents.Persons = deserializeAws_json1_1PersonDetections(output.Persons, context);
    }
    if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
        contents.StatusMessage = output.StatusMessage;
    }
    if (output.VideoMetadata !== undefined && output.VideoMetadata !== null) {
        contents.VideoMetadata = deserializeAws_json1_1VideoMetadata(output.VideoMetadata, context);
    }
    return contents;
};
const deserializeAws_json1_1GroundTruthManifest = (output, context) => {
    let contents = {
        __type: "GroundTruthManifest",
        S3Object: undefined
    };
    if (output.S3Object !== undefined && output.S3Object !== null) {
        contents.S3Object = deserializeAws_json1_1S3Object(output.S3Object, context);
    }
    return contents;
};
const deserializeAws_json1_1HumanLoopActivationOutput = (output, context) => {
    let contents = {
        __type: "HumanLoopActivationOutput",
        HumanLoopActivationConditionsEvaluationResults: undefined,
        HumanLoopActivationReasons: undefined,
        HumanLoopArn: undefined
    };
    if (output.HumanLoopActivationConditionsEvaluationResults !== undefined &&
        output.HumanLoopActivationConditionsEvaluationResults !== null) {
        contents.HumanLoopActivationConditionsEvaluationResults = new smithy_client_1.LazyJsonString(output.HumanLoopActivationConditionsEvaluationResults);
    }
    if (output.HumanLoopActivationReasons !== undefined &&
        output.HumanLoopActivationReasons !== null) {
        contents.HumanLoopActivationReasons = deserializeAws_json1_1HumanLoopActivationReasons(output.HumanLoopActivationReasons, context);
    }
    if (output.HumanLoopArn !== undefined && output.HumanLoopArn !== null) {
        contents.HumanLoopArn = output.HumanLoopArn;
    }
    return contents;
};
const deserializeAws_json1_1HumanLoopActivationReasons = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1HumanLoopQuotaExceededException = (output, context) => {
    let contents = {
        __type: "HumanLoopQuotaExceededException",
        Code: undefined,
        Logref: undefined,
        Message: undefined,
        QuotaCode: undefined,
        ResourceType: undefined,
        ServiceCode: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Logref !== undefined && output.Logref !== null) {
        contents.Logref = output.Logref;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.QuotaCode !== undefined && output.QuotaCode !== null) {
        contents.QuotaCode = output.QuotaCode;
    }
    if (output.ResourceType !== undefined && output.ResourceType !== null) {
        contents.ResourceType = output.ResourceType;
    }
    if (output.ServiceCode !== undefined && output.ServiceCode !== null) {
        contents.ServiceCode = output.ServiceCode;
    }
    return contents;
};
const deserializeAws_json1_1IdempotentParameterMismatchException = (output, context) => {
    let contents = {
        __type: "IdempotentParameterMismatchException",
        Code: undefined,
        Logref: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Logref !== undefined && output.Logref !== null) {
        contents.Logref = output.Logref;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ImageQuality = (output, context) => {
    let contents = {
        __type: "ImageQuality",
        Brightness: undefined,
        Sharpness: undefined
    };
    if (output.Brightness !== undefined && output.Brightness !== null) {
        contents.Brightness = output.Brightness;
    }
    if (output.Sharpness !== undefined && output.Sharpness !== null) {
        contents.Sharpness = output.Sharpness;
    }
    return contents;
};
const deserializeAws_json1_1ImageTooLargeException = (output, context) => {
    let contents = {
        __type: "ImageTooLargeException",
        Code: undefined,
        Logref: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Logref !== undefined && output.Logref !== null) {
        contents.Logref = output.Logref;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1IndexFacesResponse = (output, context) => {
    let contents = {
        __type: "IndexFacesResponse",
        FaceModelVersion: undefined,
        FaceRecords: undefined,
        OrientationCorrection: undefined,
        UnindexedFaces: undefined
    };
    if (output.FaceModelVersion !== undefined &&
        output.FaceModelVersion !== null) {
        contents.FaceModelVersion = output.FaceModelVersion;
    }
    if (output.FaceRecords !== undefined && output.FaceRecords !== null) {
        contents.FaceRecords = deserializeAws_json1_1FaceRecordList(output.FaceRecords, context);
    }
    if (output.OrientationCorrection !== undefined &&
        output.OrientationCorrection !== null) {
        contents.OrientationCorrection = output.OrientationCorrection;
    }
    if (output.UnindexedFaces !== undefined && output.UnindexedFaces !== null) {
        contents.UnindexedFaces = deserializeAws_json1_1UnindexedFaces(output.UnindexedFaces, context);
    }
    return contents;
};
const deserializeAws_json1_1Instance = (output, context) => {
    let contents = {
        __type: "Instance",
        BoundingBox: undefined,
        Confidence: undefined
    };
    if (output.BoundingBox !== undefined && output.BoundingBox !== null) {
        contents.BoundingBox = deserializeAws_json1_1BoundingBox(output.BoundingBox, context);
    }
    if (output.Confidence !== undefined && output.Confidence !== null) {
        contents.Confidence = output.Confidence;
    }
    return contents;
};
const deserializeAws_json1_1Instances = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Instance(entry, context));
};
const deserializeAws_json1_1InternalServerError = (output, context) => {
    let contents = {
        __type: "InternalServerError",
        Code: undefined,
        Logref: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Logref !== undefined && output.Logref !== null) {
        contents.Logref = output.Logref;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidImageFormatException = (output, context) => {
    let contents = {
        __type: "InvalidImageFormatException",
        Code: undefined,
        Logref: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Logref !== undefined && output.Logref !== null) {
        contents.Logref = output.Logref;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidPaginationTokenException = (output, context) => {
    let contents = {
        __type: "InvalidPaginationTokenException",
        Code: undefined,
        Logref: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Logref !== undefined && output.Logref !== null) {
        contents.Logref = output.Logref;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidParameterException = (output, context) => {
    let contents = {
        __type: "InvalidParameterException",
        Code: undefined,
        Logref: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Logref !== undefined && output.Logref !== null) {
        contents.Logref = output.Logref;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidS3ObjectException = (output, context) => {
    let contents = {
        __type: "InvalidS3ObjectException",
        Code: undefined,
        Logref: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Logref !== undefined && output.Logref !== null) {
        contents.Logref = output.Logref;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1KinesisDataStream = (output, context) => {
    let contents = {
        __type: "KinesisDataStream",
        Arn: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    return contents;
};
const deserializeAws_json1_1KinesisVideoStream = (output, context) => {
    let contents = {
        __type: "KinesisVideoStream",
        Arn: undefined
    };
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    return contents;
};
const deserializeAws_json1_1Label = (output, context) => {
    let contents = {
        __type: "Label",
        Confidence: undefined,
        Instances: undefined,
        Name: undefined,
        Parents: undefined
    };
    if (output.Confidence !== undefined && output.Confidence !== null) {
        contents.Confidence = output.Confidence;
    }
    if (output.Instances !== undefined && output.Instances !== null) {
        contents.Instances = deserializeAws_json1_1Instances(output.Instances, context);
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Parents !== undefined && output.Parents !== null) {
        contents.Parents = deserializeAws_json1_1Parents(output.Parents, context);
    }
    return contents;
};
const deserializeAws_json1_1LabelDetection = (output, context) => {
    let contents = {
        __type: "LabelDetection",
        Label: undefined,
        Timestamp: undefined
    };
    if (output.Label !== undefined && output.Label !== null) {
        contents.Label = deserializeAws_json1_1Label(output.Label, context);
    }
    if (output.Timestamp !== undefined && output.Timestamp !== null) {
        contents.Timestamp = output.Timestamp;
    }
    return contents;
};
const deserializeAws_json1_1LabelDetections = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1LabelDetection(entry, context));
};
const deserializeAws_json1_1Labels = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Label(entry, context));
};
const deserializeAws_json1_1Landmark = (output, context) => {
    let contents = {
        __type: "Landmark",
        Type: undefined,
        X: undefined,
        Y: undefined
    };
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    if (output.X !== undefined && output.X !== null) {
        contents.X = output.X;
    }
    if (output.Y !== undefined && output.Y !== null) {
        contents.Y = output.Y;
    }
    return contents;
};
const deserializeAws_json1_1Landmarks = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Landmark(entry, context));
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    let contents = {
        __type: "LimitExceededException",
        Code: undefined,
        Logref: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Logref !== undefined && output.Logref !== null) {
        contents.Logref = output.Logref;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ListCollectionsResponse = (output, context) => {
    let contents = {
        __type: "ListCollectionsResponse",
        CollectionIds: undefined,
        FaceModelVersions: undefined,
        NextToken: undefined
    };
    if (output.CollectionIds !== undefined && output.CollectionIds !== null) {
        contents.CollectionIds = deserializeAws_json1_1CollectionIdList(output.CollectionIds, context);
    }
    if (output.FaceModelVersions !== undefined &&
        output.FaceModelVersions !== null) {
        contents.FaceModelVersions = deserializeAws_json1_1FaceModelVersionList(output.FaceModelVersions, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListFacesResponse = (output, context) => {
    let contents = {
        __type: "ListFacesResponse",
        FaceModelVersion: undefined,
        Faces: undefined,
        NextToken: undefined
    };
    if (output.FaceModelVersion !== undefined &&
        output.FaceModelVersion !== null) {
        contents.FaceModelVersion = output.FaceModelVersion;
    }
    if (output.Faces !== undefined && output.Faces !== null) {
        contents.Faces = deserializeAws_json1_1FaceList(output.Faces, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListStreamProcessorsResponse = (output, context) => {
    let contents = {
        __type: "ListStreamProcessorsResponse",
        NextToken: undefined,
        StreamProcessors: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.StreamProcessors !== undefined &&
        output.StreamProcessors !== null) {
        contents.StreamProcessors = deserializeAws_json1_1StreamProcessorList(output.StreamProcessors, context);
    }
    return contents;
};
const deserializeAws_json1_1ModerationLabel = (output, context) => {
    let contents = {
        __type: "ModerationLabel",
        Confidence: undefined,
        Name: undefined,
        ParentName: undefined
    };
    if (output.Confidence !== undefined && output.Confidence !== null) {
        contents.Confidence = output.Confidence;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.ParentName !== undefined && output.ParentName !== null) {
        contents.ParentName = output.ParentName;
    }
    return contents;
};
const deserializeAws_json1_1ModerationLabels = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ModerationLabel(entry, context));
};
const deserializeAws_json1_1MouthOpen = (output, context) => {
    let contents = {
        __type: "MouthOpen",
        Confidence: undefined,
        Value: undefined
    };
    if (output.Confidence !== undefined && output.Confidence !== null) {
        contents.Confidence = output.Confidence;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1Mustache = (output, context) => {
    let contents = {
        __type: "Mustache",
        Confidence: undefined,
        Value: undefined
    };
    if (output.Confidence !== undefined && output.Confidence !== null) {
        contents.Confidence = output.Confidence;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1OutputConfig = (output, context) => {
    let contents = {
        __type: "OutputConfig",
        S3Bucket: undefined,
        S3KeyPrefix: undefined
    };
    if (output.S3Bucket !== undefined && output.S3Bucket !== null) {
        contents.S3Bucket = output.S3Bucket;
    }
    if (output.S3KeyPrefix !== undefined && output.S3KeyPrefix !== null) {
        contents.S3KeyPrefix = output.S3KeyPrefix;
    }
    return contents;
};
const deserializeAws_json1_1Parent = (output, context) => {
    let contents = {
        __type: "Parent",
        Name: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    return contents;
};
const deserializeAws_json1_1Parents = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Parent(entry, context));
};
const deserializeAws_json1_1PersonDetail = (output, context) => {
    let contents = {
        __type: "PersonDetail",
        BoundingBox: undefined,
        Face: undefined,
        Index: undefined
    };
    if (output.BoundingBox !== undefined && output.BoundingBox !== null) {
        contents.BoundingBox = deserializeAws_json1_1BoundingBox(output.BoundingBox, context);
    }
    if (output.Face !== undefined && output.Face !== null) {
        contents.Face = deserializeAws_json1_1FaceDetail(output.Face, context);
    }
    if (output.Index !== undefined && output.Index !== null) {
        contents.Index = output.Index;
    }
    return contents;
};
const deserializeAws_json1_1PersonDetection = (output, context) => {
    let contents = {
        __type: "PersonDetection",
        Person: undefined,
        Timestamp: undefined
    };
    if (output.Person !== undefined && output.Person !== null) {
        contents.Person = deserializeAws_json1_1PersonDetail(output.Person, context);
    }
    if (output.Timestamp !== undefined && output.Timestamp !== null) {
        contents.Timestamp = output.Timestamp;
    }
    return contents;
};
const deserializeAws_json1_1PersonDetections = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PersonDetection(entry, context));
};
const deserializeAws_json1_1PersonMatch = (output, context) => {
    let contents = {
        __type: "PersonMatch",
        FaceMatches: undefined,
        Person: undefined,
        Timestamp: undefined
    };
    if (output.FaceMatches !== undefined && output.FaceMatches !== null) {
        contents.FaceMatches = deserializeAws_json1_1FaceMatchList(output.FaceMatches, context);
    }
    if (output.Person !== undefined && output.Person !== null) {
        contents.Person = deserializeAws_json1_1PersonDetail(output.Person, context);
    }
    if (output.Timestamp !== undefined && output.Timestamp !== null) {
        contents.Timestamp = output.Timestamp;
    }
    return contents;
};
const deserializeAws_json1_1PersonMatches = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PersonMatch(entry, context));
};
const deserializeAws_json1_1Point = (output, context) => {
    let contents = {
        __type: "Point",
        X: undefined,
        Y: undefined
    };
    if (output.X !== undefined && output.X !== null) {
        contents.X = output.X;
    }
    if (output.Y !== undefined && output.Y !== null) {
        contents.Y = output.Y;
    }
    return contents;
};
const deserializeAws_json1_1Polygon = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Point(entry, context));
};
const deserializeAws_json1_1Pose = (output, context) => {
    let contents = {
        __type: "Pose",
        Pitch: undefined,
        Roll: undefined,
        Yaw: undefined
    };
    if (output.Pitch !== undefined && output.Pitch !== null) {
        contents.Pitch = output.Pitch;
    }
    if (output.Roll !== undefined && output.Roll !== null) {
        contents.Roll = output.Roll;
    }
    if (output.Yaw !== undefined && output.Yaw !== null) {
        contents.Yaw = output.Yaw;
    }
    return contents;
};
const deserializeAws_json1_1ProjectDescription = (output, context) => {
    let contents = {
        __type: "ProjectDescription",
        CreationTimestamp: undefined,
        ProjectArn: undefined,
        Status: undefined
    };
    if (output.CreationTimestamp !== undefined &&
        output.CreationTimestamp !== null) {
        contents.CreationTimestamp = new Date(Math.round(output.CreationTimestamp * 1000));
    }
    if (output.ProjectArn !== undefined && output.ProjectArn !== null) {
        contents.ProjectArn = output.ProjectArn;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1ProjectDescriptions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ProjectDescription(entry, context));
};
const deserializeAws_json1_1ProjectVersionDescription = (output, context) => {
    let contents = {
        __type: "ProjectVersionDescription",
        BillableTrainingTimeInSeconds: undefined,
        CreationTimestamp: undefined,
        EvaluationResult: undefined,
        MinInferenceUnits: undefined,
        OutputConfig: undefined,
        ProjectVersionArn: undefined,
        Status: undefined,
        StatusMessage: undefined,
        TestingDataResult: undefined,
        TrainingDataResult: undefined,
        TrainingEndTimestamp: undefined
    };
    if (output.BillableTrainingTimeInSeconds !== undefined &&
        output.BillableTrainingTimeInSeconds !== null) {
        contents.BillableTrainingTimeInSeconds =
            output.BillableTrainingTimeInSeconds;
    }
    if (output.CreationTimestamp !== undefined &&
        output.CreationTimestamp !== null) {
        contents.CreationTimestamp = new Date(Math.round(output.CreationTimestamp * 1000));
    }
    if (output.EvaluationResult !== undefined &&
        output.EvaluationResult !== null) {
        contents.EvaluationResult = deserializeAws_json1_1EvaluationResult(output.EvaluationResult, context);
    }
    if (output.MinInferenceUnits !== undefined &&
        output.MinInferenceUnits !== null) {
        contents.MinInferenceUnits = output.MinInferenceUnits;
    }
    if (output.OutputConfig !== undefined && output.OutputConfig !== null) {
        contents.OutputConfig = deserializeAws_json1_1OutputConfig(output.OutputConfig, context);
    }
    if (output.ProjectVersionArn !== undefined &&
        output.ProjectVersionArn !== null) {
        contents.ProjectVersionArn = output.ProjectVersionArn;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
        contents.StatusMessage = output.StatusMessage;
    }
    if (output.TestingDataResult !== undefined &&
        output.TestingDataResult !== null) {
        contents.TestingDataResult = deserializeAws_json1_1TestingDataResult(output.TestingDataResult, context);
    }
    if (output.TrainingDataResult !== undefined &&
        output.TrainingDataResult !== null) {
        contents.TrainingDataResult = deserializeAws_json1_1TrainingDataResult(output.TrainingDataResult, context);
    }
    if (output.TrainingEndTimestamp !== undefined &&
        output.TrainingEndTimestamp !== null) {
        contents.TrainingEndTimestamp = new Date(Math.round(output.TrainingEndTimestamp * 1000));
    }
    return contents;
};
const deserializeAws_json1_1ProjectVersionDescriptions = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ProjectVersionDescription(entry, context));
};
const deserializeAws_json1_1ProvisionedThroughputExceededException = (output, context) => {
    let contents = {
        __type: "ProvisionedThroughputExceededException",
        Code: undefined,
        Logref: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Logref !== undefined && output.Logref !== null) {
        contents.Logref = output.Logref;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1Reasons = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1RecognizeCelebritiesResponse = (output, context) => {
    let contents = {
        __type: "RecognizeCelebritiesResponse",
        CelebrityFaces: undefined,
        OrientationCorrection: undefined,
        UnrecognizedFaces: undefined
    };
    if (output.CelebrityFaces !== undefined && output.CelebrityFaces !== null) {
        contents.CelebrityFaces = deserializeAws_json1_1CelebrityList(output.CelebrityFaces, context);
    }
    if (output.OrientationCorrection !== undefined &&
        output.OrientationCorrection !== null) {
        contents.OrientationCorrection = output.OrientationCorrection;
    }
    if (output.UnrecognizedFaces !== undefined &&
        output.UnrecognizedFaces !== null) {
        contents.UnrecognizedFaces = deserializeAws_json1_1ComparedFaceList(output.UnrecognizedFaces, context);
    }
    return contents;
};
const deserializeAws_json1_1ResourceAlreadyExistsException = (output, context) => {
    let contents = {
        __type: "ResourceAlreadyExistsException",
        Code: undefined,
        Logref: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Logref !== undefined && output.Logref !== null) {
        contents.Logref = output.Logref;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceInUseException = (output, context) => {
    let contents = {
        __type: "ResourceInUseException",
        Code: undefined,
        Logref: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Logref !== undefined && output.Logref !== null) {
        contents.Logref = output.Logref;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    let contents = {
        __type: "ResourceNotFoundException",
        Code: undefined,
        Logref: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Logref !== undefined && output.Logref !== null) {
        contents.Logref = output.Logref;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceNotReadyException = (output, context) => {
    let contents = {
        __type: "ResourceNotReadyException",
        Code: undefined,
        Logref: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Logref !== undefined && output.Logref !== null) {
        contents.Logref = output.Logref;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1S3Object = (output, context) => {
    let contents = {
        __type: "S3Object",
        Bucket: undefined,
        Name: undefined,
        Version: undefined
    };
    if (output.Bucket !== undefined && output.Bucket !== null) {
        contents.Bucket = output.Bucket;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Version !== undefined && output.Version !== null) {
        contents.Version = output.Version;
    }
    return contents;
};
const deserializeAws_json1_1SearchFacesByImageResponse = (output, context) => {
    let contents = {
        __type: "SearchFacesByImageResponse",
        FaceMatches: undefined,
        FaceModelVersion: undefined,
        SearchedFaceBoundingBox: undefined,
        SearchedFaceConfidence: undefined
    };
    if (output.FaceMatches !== undefined && output.FaceMatches !== null) {
        contents.FaceMatches = deserializeAws_json1_1FaceMatchList(output.FaceMatches, context);
    }
    if (output.FaceModelVersion !== undefined &&
        output.FaceModelVersion !== null) {
        contents.FaceModelVersion = output.FaceModelVersion;
    }
    if (output.SearchedFaceBoundingBox !== undefined &&
        output.SearchedFaceBoundingBox !== null) {
        contents.SearchedFaceBoundingBox = deserializeAws_json1_1BoundingBox(output.SearchedFaceBoundingBox, context);
    }
    if (output.SearchedFaceConfidence !== undefined &&
        output.SearchedFaceConfidence !== null) {
        contents.SearchedFaceConfidence = output.SearchedFaceConfidence;
    }
    return contents;
};
const deserializeAws_json1_1SearchFacesResponse = (output, context) => {
    let contents = {
        __type: "SearchFacesResponse",
        FaceMatches: undefined,
        FaceModelVersion: undefined,
        SearchedFaceId: undefined
    };
    if (output.FaceMatches !== undefined && output.FaceMatches !== null) {
        contents.FaceMatches = deserializeAws_json1_1FaceMatchList(output.FaceMatches, context);
    }
    if (output.FaceModelVersion !== undefined &&
        output.FaceModelVersion !== null) {
        contents.FaceModelVersion = output.FaceModelVersion;
    }
    if (output.SearchedFaceId !== undefined && output.SearchedFaceId !== null) {
        contents.SearchedFaceId = output.SearchedFaceId;
    }
    return contents;
};
const deserializeAws_json1_1Smile = (output, context) => {
    let contents = {
        __type: "Smile",
        Confidence: undefined,
        Value: undefined
    };
    if (output.Confidence !== undefined && output.Confidence !== null) {
        contents.Confidence = output.Confidence;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1StartCelebrityRecognitionResponse = (output, context) => {
    let contents = {
        __type: "StartCelebrityRecognitionResponse",
        JobId: undefined
    };
    if (output.JobId !== undefined && output.JobId !== null) {
        contents.JobId = output.JobId;
    }
    return contents;
};
const deserializeAws_json1_1StartContentModerationResponse = (output, context) => {
    let contents = {
        __type: "StartContentModerationResponse",
        JobId: undefined
    };
    if (output.JobId !== undefined && output.JobId !== null) {
        contents.JobId = output.JobId;
    }
    return contents;
};
const deserializeAws_json1_1StartFaceDetectionResponse = (output, context) => {
    let contents = {
        __type: "StartFaceDetectionResponse",
        JobId: undefined
    };
    if (output.JobId !== undefined && output.JobId !== null) {
        contents.JobId = output.JobId;
    }
    return contents;
};
const deserializeAws_json1_1StartFaceSearchResponse = (output, context) => {
    let contents = {
        __type: "StartFaceSearchResponse",
        JobId: undefined
    };
    if (output.JobId !== undefined && output.JobId !== null) {
        contents.JobId = output.JobId;
    }
    return contents;
};
const deserializeAws_json1_1StartLabelDetectionResponse = (output, context) => {
    let contents = {
        __type: "StartLabelDetectionResponse",
        JobId: undefined
    };
    if (output.JobId !== undefined && output.JobId !== null) {
        contents.JobId = output.JobId;
    }
    return contents;
};
const deserializeAws_json1_1StartPersonTrackingResponse = (output, context) => {
    let contents = {
        __type: "StartPersonTrackingResponse",
        JobId: undefined
    };
    if (output.JobId !== undefined && output.JobId !== null) {
        contents.JobId = output.JobId;
    }
    return contents;
};
const deserializeAws_json1_1StartProjectVersionResponse = (output, context) => {
    let contents = {
        __type: "StartProjectVersionResponse",
        Status: undefined
    };
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1StartStreamProcessorResponse = (output, context) => {
    let contents = {
        __type: "StartStreamProcessorResponse"
    };
    return contents;
};
const deserializeAws_json1_1StopProjectVersionResponse = (output, context) => {
    let contents = {
        __type: "StopProjectVersionResponse",
        Status: undefined
    };
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1StopStreamProcessorResponse = (output, context) => {
    let contents = {
        __type: "StopStreamProcessorResponse"
    };
    return contents;
};
const deserializeAws_json1_1StreamProcessor = (output, context) => {
    let contents = {
        __type: "StreamProcessor",
        Name: undefined,
        Status: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1StreamProcessorInput = (output, context) => {
    let contents = {
        __type: "StreamProcessorInput",
        KinesisVideoStream: undefined
    };
    if (output.KinesisVideoStream !== undefined &&
        output.KinesisVideoStream !== null) {
        contents.KinesisVideoStream = deserializeAws_json1_1KinesisVideoStream(output.KinesisVideoStream, context);
    }
    return contents;
};
const deserializeAws_json1_1StreamProcessorList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1StreamProcessor(entry, context));
};
const deserializeAws_json1_1StreamProcessorOutput = (output, context) => {
    let contents = {
        __type: "StreamProcessorOutput",
        KinesisDataStream: undefined
    };
    if (output.KinesisDataStream !== undefined &&
        output.KinesisDataStream !== null) {
        contents.KinesisDataStream = deserializeAws_json1_1KinesisDataStream(output.KinesisDataStream, context);
    }
    return contents;
};
const deserializeAws_json1_1StreamProcessorSettings = (output, context) => {
    let contents = {
        __type: "StreamProcessorSettings",
        FaceSearch: undefined
    };
    if (output.FaceSearch !== undefined && output.FaceSearch !== null) {
        contents.FaceSearch = deserializeAws_json1_1FaceSearchSettings(output.FaceSearch, context);
    }
    return contents;
};
const deserializeAws_json1_1Summary = (output, context) => {
    let contents = {
        __type: "Summary",
        S3Object: undefined
    };
    if (output.S3Object !== undefined && output.S3Object !== null) {
        contents.S3Object = deserializeAws_json1_1S3Object(output.S3Object, context);
    }
    return contents;
};
const deserializeAws_json1_1Sunglasses = (output, context) => {
    let contents = {
        __type: "Sunglasses",
        Confidence: undefined,
        Value: undefined
    };
    if (output.Confidence !== undefined && output.Confidence !== null) {
        contents.Confidence = output.Confidence;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1TestingData = (output, context) => {
    let contents = {
        __type: "TestingData",
        Assets: undefined,
        AutoCreate: undefined
    };
    if (output.Assets !== undefined && output.Assets !== null) {
        contents.Assets = deserializeAws_json1_1Assets(output.Assets, context);
    }
    if (output.AutoCreate !== undefined && output.AutoCreate !== null) {
        contents.AutoCreate = output.AutoCreate;
    }
    return contents;
};
const deserializeAws_json1_1TestingDataResult = (output, context) => {
    let contents = {
        __type: "TestingDataResult",
        Input: undefined,
        Output: undefined
    };
    if (output.Input !== undefined && output.Input !== null) {
        contents.Input = deserializeAws_json1_1TestingData(output.Input, context);
    }
    if (output.Output !== undefined && output.Output !== null) {
        contents.Output = deserializeAws_json1_1TestingData(output.Output, context);
    }
    return contents;
};
const deserializeAws_json1_1TextDetection = (output, context) => {
    let contents = {
        __type: "TextDetection",
        Confidence: undefined,
        DetectedText: undefined,
        Geometry: undefined,
        Id: undefined,
        ParentId: undefined,
        Type: undefined
    };
    if (output.Confidence !== undefined && output.Confidence !== null) {
        contents.Confidence = output.Confidence;
    }
    if (output.DetectedText !== undefined && output.DetectedText !== null) {
        contents.DetectedText = output.DetectedText;
    }
    if (output.Geometry !== undefined && output.Geometry !== null) {
        contents.Geometry = deserializeAws_json1_1Geometry(output.Geometry, context);
    }
    if (output.Id !== undefined && output.Id !== null) {
        contents.Id = output.Id;
    }
    if (output.ParentId !== undefined && output.ParentId !== null) {
        contents.ParentId = output.ParentId;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1TextDetectionList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TextDetection(entry, context));
};
const deserializeAws_json1_1ThrottlingException = (output, context) => {
    let contents = {
        __type: "ThrottlingException",
        Code: undefined,
        Logref: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Logref !== undefined && output.Logref !== null) {
        contents.Logref = output.Logref;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1TrainingData = (output, context) => {
    let contents = {
        __type: "TrainingData",
        Assets: undefined
    };
    if (output.Assets !== undefined && output.Assets !== null) {
        contents.Assets = deserializeAws_json1_1Assets(output.Assets, context);
    }
    return contents;
};
const deserializeAws_json1_1TrainingDataResult = (output, context) => {
    let contents = {
        __type: "TrainingDataResult",
        Input: undefined,
        Output: undefined
    };
    if (output.Input !== undefined && output.Input !== null) {
        contents.Input = deserializeAws_json1_1TrainingData(output.Input, context);
    }
    if (output.Output !== undefined && output.Output !== null) {
        contents.Output = deserializeAws_json1_1TrainingData(output.Output, context);
    }
    return contents;
};
const deserializeAws_json1_1UnindexedFace = (output, context) => {
    let contents = {
        __type: "UnindexedFace",
        FaceDetail: undefined,
        Reasons: undefined
    };
    if (output.FaceDetail !== undefined && output.FaceDetail !== null) {
        contents.FaceDetail = deserializeAws_json1_1FaceDetail(output.FaceDetail, context);
    }
    if (output.Reasons !== undefined && output.Reasons !== null) {
        contents.Reasons = deserializeAws_json1_1Reasons(output.Reasons, context);
    }
    return contents;
};
const deserializeAws_json1_1UnindexedFaces = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1UnindexedFace(entry, context));
};
const deserializeAws_json1_1Urls = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1VideoMetadata = (output, context) => {
    let contents = {
        __type: "VideoMetadata",
        Codec: undefined,
        DurationMillis: undefined,
        Format: undefined,
        FrameHeight: undefined,
        FrameRate: undefined,
        FrameWidth: undefined
    };
    if (output.Codec !== undefined && output.Codec !== null) {
        contents.Codec = output.Codec;
    }
    if (output.DurationMillis !== undefined && output.DurationMillis !== null) {
        contents.DurationMillis = output.DurationMillis;
    }
    if (output.Format !== undefined && output.Format !== null) {
        contents.Format = output.Format;
    }
    if (output.FrameHeight !== undefined && output.FrameHeight !== null) {
        contents.FrameHeight = output.FrameHeight;
    }
    if (output.FrameRate !== undefined && output.FrameRate !== null) {
        contents.FrameRate = output.FrameRate;
    }
    if (output.FrameWidth !== undefined && output.FrameWidth !== null) {
        contents.FrameWidth = output.FrameWidth;
    }
    return contents;
};
const deserializeAws_json1_1VideoTooLargeException = (output, context) => {
    let contents = {
        __type: "VideoTooLargeException",
        Code: undefined,
        Logref: undefined,
        Message: undefined
    };
    if (output.Code !== undefined && output.Code !== null) {
        contents.Code = output.Code;
    }
    if (output.Logref !== undefined && output.Logref !== null) {
        contents.Logref = output.Logref;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
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