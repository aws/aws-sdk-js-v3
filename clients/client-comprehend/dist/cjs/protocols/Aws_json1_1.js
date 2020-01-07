"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
const uuid_1 = require("uuid");
async function serializeAws_json1_1BatchDetectDominantLanguageCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.BatchDetectDominantLanguage";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchDetectDominantLanguageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchDetectDominantLanguageCommand = serializeAws_json1_1BatchDetectDominantLanguageCommand;
async function serializeAws_json1_1BatchDetectEntitiesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.BatchDetectEntities";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchDetectEntitiesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchDetectEntitiesCommand = serializeAws_json1_1BatchDetectEntitiesCommand;
async function serializeAws_json1_1BatchDetectKeyPhrasesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.BatchDetectKeyPhrases";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchDetectKeyPhrasesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchDetectKeyPhrasesCommand = serializeAws_json1_1BatchDetectKeyPhrasesCommand;
async function serializeAws_json1_1BatchDetectSentimentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.BatchDetectSentiment";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchDetectSentimentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchDetectSentimentCommand = serializeAws_json1_1BatchDetectSentimentCommand;
async function serializeAws_json1_1BatchDetectSyntaxCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.BatchDetectSyntax";
    let body;
    body = JSON.stringify(serializeAws_json1_1BatchDetectSyntaxRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1BatchDetectSyntaxCommand = serializeAws_json1_1BatchDetectSyntaxCommand;
async function serializeAws_json1_1ClassifyDocumentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.ClassifyDocument";
    let body;
    body = JSON.stringify(serializeAws_json1_1ClassifyDocumentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ClassifyDocumentCommand = serializeAws_json1_1ClassifyDocumentCommand;
async function serializeAws_json1_1CreateDocumentClassifierCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.CreateDocumentClassifier";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateDocumentClassifierRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateDocumentClassifierCommand = serializeAws_json1_1CreateDocumentClassifierCommand;
async function serializeAws_json1_1CreateEndpointCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.CreateEndpoint";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateEndpointRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateEndpointCommand = serializeAws_json1_1CreateEndpointCommand;
async function serializeAws_json1_1CreateEntityRecognizerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.CreateEntityRecognizer";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateEntityRecognizerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateEntityRecognizerCommand = serializeAws_json1_1CreateEntityRecognizerCommand;
async function serializeAws_json1_1DeleteDocumentClassifierCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.DeleteDocumentClassifier";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteDocumentClassifierRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteDocumentClassifierCommand = serializeAws_json1_1DeleteDocumentClassifierCommand;
async function serializeAws_json1_1DeleteEndpointCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.DeleteEndpoint";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteEndpointRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteEndpointCommand = serializeAws_json1_1DeleteEndpointCommand;
async function serializeAws_json1_1DeleteEntityRecognizerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.DeleteEntityRecognizer";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteEntityRecognizerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteEntityRecognizerCommand = serializeAws_json1_1DeleteEntityRecognizerCommand;
async function serializeAws_json1_1DescribeDocumentClassificationJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "Comprehend_20171127.DescribeDocumentClassificationJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDocumentClassificationJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeDocumentClassificationJobCommand = serializeAws_json1_1DescribeDocumentClassificationJobCommand;
async function serializeAws_json1_1DescribeDocumentClassifierCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.DescribeDocumentClassifier";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDocumentClassifierRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeDocumentClassifierCommand = serializeAws_json1_1DescribeDocumentClassifierCommand;
async function serializeAws_json1_1DescribeDominantLanguageDetectionJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "Comprehend_20171127.DescribeDominantLanguageDetectionJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDominantLanguageDetectionJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeDominantLanguageDetectionJobCommand = serializeAws_json1_1DescribeDominantLanguageDetectionJobCommand;
async function serializeAws_json1_1DescribeEndpointCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.DescribeEndpoint";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEndpointRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeEndpointCommand = serializeAws_json1_1DescribeEndpointCommand;
async function serializeAws_json1_1DescribeEntitiesDetectionJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.DescribeEntitiesDetectionJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEntitiesDetectionJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeEntitiesDetectionJobCommand = serializeAws_json1_1DescribeEntitiesDetectionJobCommand;
async function serializeAws_json1_1DescribeEntityRecognizerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.DescribeEntityRecognizer";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEntityRecognizerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeEntityRecognizerCommand = serializeAws_json1_1DescribeEntityRecognizerCommand;
async function serializeAws_json1_1DescribeKeyPhrasesDetectionJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "Comprehend_20171127.DescribeKeyPhrasesDetectionJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeKeyPhrasesDetectionJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeKeyPhrasesDetectionJobCommand = serializeAws_json1_1DescribeKeyPhrasesDetectionJobCommand;
async function serializeAws_json1_1DescribeSentimentDetectionJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.DescribeSentimentDetectionJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeSentimentDetectionJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeSentimentDetectionJobCommand = serializeAws_json1_1DescribeSentimentDetectionJobCommand;
async function serializeAws_json1_1DescribeTopicsDetectionJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.DescribeTopicsDetectionJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTopicsDetectionJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeTopicsDetectionJobCommand = serializeAws_json1_1DescribeTopicsDetectionJobCommand;
async function serializeAws_json1_1DetectDominantLanguageCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.DetectDominantLanguage";
    let body;
    body = JSON.stringify(serializeAws_json1_1DetectDominantLanguageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DetectDominantLanguageCommand = serializeAws_json1_1DetectDominantLanguageCommand;
async function serializeAws_json1_1DetectEntitiesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.DetectEntities";
    let body;
    body = JSON.stringify(serializeAws_json1_1DetectEntitiesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DetectEntitiesCommand = serializeAws_json1_1DetectEntitiesCommand;
async function serializeAws_json1_1DetectKeyPhrasesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.DetectKeyPhrases";
    let body;
    body = JSON.stringify(serializeAws_json1_1DetectKeyPhrasesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DetectKeyPhrasesCommand = serializeAws_json1_1DetectKeyPhrasesCommand;
async function serializeAws_json1_1DetectSentimentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.DetectSentiment";
    let body;
    body = JSON.stringify(serializeAws_json1_1DetectSentimentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DetectSentimentCommand = serializeAws_json1_1DetectSentimentCommand;
async function serializeAws_json1_1DetectSyntaxCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.DetectSyntax";
    let body;
    body = JSON.stringify(serializeAws_json1_1DetectSyntaxRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DetectSyntaxCommand = serializeAws_json1_1DetectSyntaxCommand;
async function serializeAws_json1_1ListDocumentClassificationJobsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "Comprehend_20171127.ListDocumentClassificationJobs";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDocumentClassificationJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListDocumentClassificationJobsCommand = serializeAws_json1_1ListDocumentClassificationJobsCommand;
async function serializeAws_json1_1ListDocumentClassifiersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.ListDocumentClassifiers";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDocumentClassifiersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListDocumentClassifiersCommand = serializeAws_json1_1ListDocumentClassifiersCommand;
async function serializeAws_json1_1ListDominantLanguageDetectionJobsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "Comprehend_20171127.ListDominantLanguageDetectionJobs";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDominantLanguageDetectionJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListDominantLanguageDetectionJobsCommand = serializeAws_json1_1ListDominantLanguageDetectionJobsCommand;
async function serializeAws_json1_1ListEndpointsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.ListEndpoints";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListEndpointsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListEndpointsCommand = serializeAws_json1_1ListEndpointsCommand;
async function serializeAws_json1_1ListEntitiesDetectionJobsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.ListEntitiesDetectionJobs";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListEntitiesDetectionJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListEntitiesDetectionJobsCommand = serializeAws_json1_1ListEntitiesDetectionJobsCommand;
async function serializeAws_json1_1ListEntityRecognizersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.ListEntityRecognizers";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListEntityRecognizersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListEntityRecognizersCommand = serializeAws_json1_1ListEntityRecognizersCommand;
async function serializeAws_json1_1ListKeyPhrasesDetectionJobsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.ListKeyPhrasesDetectionJobs";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListKeyPhrasesDetectionJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListKeyPhrasesDetectionJobsCommand = serializeAws_json1_1ListKeyPhrasesDetectionJobsCommand;
async function serializeAws_json1_1ListSentimentDetectionJobsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.ListSentimentDetectionJobs";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListSentimentDetectionJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListSentimentDetectionJobsCommand = serializeAws_json1_1ListSentimentDetectionJobsCommand;
async function serializeAws_json1_1ListTagsForResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.ListTagsForResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
async function serializeAws_json1_1ListTopicsDetectionJobsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.ListTopicsDetectionJobs";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTopicsDetectionJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListTopicsDetectionJobsCommand = serializeAws_json1_1ListTopicsDetectionJobsCommand;
async function serializeAws_json1_1StartDocumentClassificationJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "Comprehend_20171127.StartDocumentClassificationJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartDocumentClassificationJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartDocumentClassificationJobCommand = serializeAws_json1_1StartDocumentClassificationJobCommand;
async function serializeAws_json1_1StartDominantLanguageDetectionJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "Comprehend_20171127.StartDominantLanguageDetectionJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartDominantLanguageDetectionJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartDominantLanguageDetectionJobCommand = serializeAws_json1_1StartDominantLanguageDetectionJobCommand;
async function serializeAws_json1_1StartEntitiesDetectionJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.StartEntitiesDetectionJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartEntitiesDetectionJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartEntitiesDetectionJobCommand = serializeAws_json1_1StartEntitiesDetectionJobCommand;
async function serializeAws_json1_1StartKeyPhrasesDetectionJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.StartKeyPhrasesDetectionJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartKeyPhrasesDetectionJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartKeyPhrasesDetectionJobCommand = serializeAws_json1_1StartKeyPhrasesDetectionJobCommand;
async function serializeAws_json1_1StartSentimentDetectionJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.StartSentimentDetectionJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartSentimentDetectionJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartSentimentDetectionJobCommand = serializeAws_json1_1StartSentimentDetectionJobCommand;
async function serializeAws_json1_1StartTopicsDetectionJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.StartTopicsDetectionJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1StartTopicsDetectionJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StartTopicsDetectionJobCommand = serializeAws_json1_1StartTopicsDetectionJobCommand;
async function serializeAws_json1_1StopDominantLanguageDetectionJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "Comprehend_20171127.StopDominantLanguageDetectionJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopDominantLanguageDetectionJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopDominantLanguageDetectionJobCommand = serializeAws_json1_1StopDominantLanguageDetectionJobCommand;
async function serializeAws_json1_1StopEntitiesDetectionJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.StopEntitiesDetectionJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopEntitiesDetectionJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopEntitiesDetectionJobCommand = serializeAws_json1_1StopEntitiesDetectionJobCommand;
async function serializeAws_json1_1StopKeyPhrasesDetectionJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.StopKeyPhrasesDetectionJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopKeyPhrasesDetectionJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopKeyPhrasesDetectionJobCommand = serializeAws_json1_1StopKeyPhrasesDetectionJobCommand;
async function serializeAws_json1_1StopSentimentDetectionJobCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.StopSentimentDetectionJob";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopSentimentDetectionJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopSentimentDetectionJobCommand = serializeAws_json1_1StopSentimentDetectionJobCommand;
async function serializeAws_json1_1StopTrainingDocumentClassifierCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "Comprehend_20171127.StopTrainingDocumentClassifier";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopTrainingDocumentClassifierRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopTrainingDocumentClassifierCommand = serializeAws_json1_1StopTrainingDocumentClassifierCommand;
async function serializeAws_json1_1StopTrainingEntityRecognizerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.StopTrainingEntityRecognizer";
    let body;
    body = JSON.stringify(serializeAws_json1_1StopTrainingEntityRecognizerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1StopTrainingEntityRecognizerCommand = serializeAws_json1_1StopTrainingEntityRecognizerCommand;
async function serializeAws_json1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
async function serializeAws_json1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
async function serializeAws_json1_1UpdateEndpointCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "Comprehend_20171127.UpdateEndpoint";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateEndpointRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateEndpointCommand = serializeAws_json1_1UpdateEndpointCommand;
async function deserializeAws_json1_1BatchDetectDominantLanguageCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchDetectDominantLanguageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchDetectDominantLanguageResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchDetectDominantLanguageResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchDetectDominantLanguageCommand = deserializeAws_json1_1BatchDetectDominantLanguageCommand;
async function deserializeAws_json1_1BatchDetectDominantLanguageCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BatchSizeLimitExceededException":
        case "com.amazonaws.comprehend#BatchSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BatchSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TextSizeLimitExceededException":
        case "com.amazonaws.comprehend#TextSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1BatchDetectEntitiesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchDetectEntitiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchDetectEntitiesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchDetectEntitiesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchDetectEntitiesCommand = deserializeAws_json1_1BatchDetectEntitiesCommand;
async function deserializeAws_json1_1BatchDetectEntitiesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BatchSizeLimitExceededException":
        case "com.amazonaws.comprehend#BatchSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BatchSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TextSizeLimitExceededException":
        case "com.amazonaws.comprehend#TextSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedLanguageException":
        case "com.amazonaws.comprehend#UnsupportedLanguageException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedLanguageExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1BatchDetectKeyPhrasesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchDetectKeyPhrasesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchDetectKeyPhrasesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchDetectKeyPhrasesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchDetectKeyPhrasesCommand = deserializeAws_json1_1BatchDetectKeyPhrasesCommand;
async function deserializeAws_json1_1BatchDetectKeyPhrasesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BatchSizeLimitExceededException":
        case "com.amazonaws.comprehend#BatchSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BatchSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TextSizeLimitExceededException":
        case "com.amazonaws.comprehend#TextSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedLanguageException":
        case "com.amazonaws.comprehend#UnsupportedLanguageException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedLanguageExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1BatchDetectSentimentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchDetectSentimentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchDetectSentimentResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchDetectSentimentResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchDetectSentimentCommand = deserializeAws_json1_1BatchDetectSentimentCommand;
async function deserializeAws_json1_1BatchDetectSentimentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BatchSizeLimitExceededException":
        case "com.amazonaws.comprehend#BatchSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BatchSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TextSizeLimitExceededException":
        case "com.amazonaws.comprehend#TextSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedLanguageException":
        case "com.amazonaws.comprehend#UnsupportedLanguageException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedLanguageExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1BatchDetectSyntaxCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1BatchDetectSyntaxCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1BatchDetectSyntaxResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "BatchDetectSyntaxResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1BatchDetectSyntaxCommand = deserializeAws_json1_1BatchDetectSyntaxCommand;
async function deserializeAws_json1_1BatchDetectSyntaxCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "BatchSizeLimitExceededException":
        case "com.amazonaws.comprehend#BatchSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1BatchSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TextSizeLimitExceededException":
        case "com.amazonaws.comprehend#TextSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedLanguageException":
        case "com.amazonaws.comprehend#UnsupportedLanguageException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedLanguageExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ClassifyDocumentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ClassifyDocumentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ClassifyDocumentResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ClassifyDocumentResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ClassifyDocumentCommand = deserializeAws_json1_1ClassifyDocumentCommand;
async function deserializeAws_json1_1ClassifyDocumentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.comprehend#ResourceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TextSizeLimitExceededException":
        case "com.amazonaws.comprehend#TextSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateDocumentClassifierCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateDocumentClassifierCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateDocumentClassifierResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateDocumentClassifierResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateDocumentClassifierCommand = deserializeAws_json1_1CreateDocumentClassifierCommand;
async function deserializeAws_json1_1CreateDocumentClassifierCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KmsKeyValidationException":
        case "com.amazonaws.comprehend#KmsKeyValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KmsKeyValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.comprehend#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.comprehend#ResourceLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehend#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazonaws.comprehend#TooManyTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedLanguageException":
        case "com.amazonaws.comprehend#UnsupportedLanguageException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedLanguageExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateEndpointCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateEndpointResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateEndpointResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateEndpointCommand = deserializeAws_json1_1CreateEndpointCommand;
async function deserializeAws_json1_1CreateEndpointCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.comprehend#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.comprehend#ResourceLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.comprehend#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.comprehend#ResourceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehend#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazonaws.comprehend#TooManyTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateEntityRecognizerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateEntityRecognizerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateEntityRecognizerResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateEntityRecognizerResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateEntityRecognizerCommand = deserializeAws_json1_1CreateEntityRecognizerCommand;
async function deserializeAws_json1_1CreateEntityRecognizerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KmsKeyValidationException":
        case "com.amazonaws.comprehend#KmsKeyValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KmsKeyValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.comprehend#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.comprehend#ResourceLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehend#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazonaws.comprehend#TooManyTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedLanguageException":
        case "com.amazonaws.comprehend#UnsupportedLanguageException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedLanguageExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteDocumentClassifierCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteDocumentClassifierCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteDocumentClassifierResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteDocumentClassifierResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteDocumentClassifierCommand = deserializeAws_json1_1DeleteDocumentClassifierCommand;
async function deserializeAws_json1_1DeleteDocumentClassifierCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.comprehend#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.comprehend#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.comprehend#ResourceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehend#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteEndpointCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteEndpointResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteEndpointResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteEndpointCommand = deserializeAws_json1_1DeleteEndpointCommand;
async function deserializeAws_json1_1DeleteEndpointCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.comprehend#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.comprehend#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehend#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteEntityRecognizerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteEntityRecognizerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteEntityRecognizerResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteEntityRecognizerResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteEntityRecognizerCommand = deserializeAws_json1_1DeleteEntityRecognizerCommand;
async function deserializeAws_json1_1DeleteEntityRecognizerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.comprehend#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.comprehend#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.comprehend#ResourceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehend#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeDocumentClassificationJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeDocumentClassificationJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDocumentClassificationJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeDocumentClassificationJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeDocumentClassificationJobCommand = deserializeAws_json1_1DescribeDocumentClassificationJobCommand;
async function deserializeAws_json1_1DescribeDocumentClassificationJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "JobNotFoundException":
        case "com.amazonaws.comprehend#JobNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehend#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeDocumentClassifierCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeDocumentClassifierCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDocumentClassifierResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeDocumentClassifierResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeDocumentClassifierCommand = deserializeAws_json1_1DescribeDocumentClassifierCommand;
async function deserializeAws_json1_1DescribeDocumentClassifierCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.comprehend#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehend#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeDominantLanguageDetectionJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeDominantLanguageDetectionJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDominantLanguageDetectionJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeDominantLanguageDetectionJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeDominantLanguageDetectionJobCommand = deserializeAws_json1_1DescribeDominantLanguageDetectionJobCommand;
async function deserializeAws_json1_1DescribeDominantLanguageDetectionJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "JobNotFoundException":
        case "com.amazonaws.comprehend#JobNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehend#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeEndpointCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEndpointResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEndpointResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeEndpointCommand = deserializeAws_json1_1DescribeEndpointCommand;
async function deserializeAws_json1_1DescribeEndpointCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.comprehend#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehend#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeEntitiesDetectionJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeEntitiesDetectionJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEntitiesDetectionJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEntitiesDetectionJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeEntitiesDetectionJobCommand = deserializeAws_json1_1DescribeEntitiesDetectionJobCommand;
async function deserializeAws_json1_1DescribeEntitiesDetectionJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "JobNotFoundException":
        case "com.amazonaws.comprehend#JobNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehend#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeEntityRecognizerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeEntityRecognizerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEntityRecognizerResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeEntityRecognizerResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeEntityRecognizerCommand = deserializeAws_json1_1DescribeEntityRecognizerCommand;
async function deserializeAws_json1_1DescribeEntityRecognizerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.comprehend#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehend#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeKeyPhrasesDetectionJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeKeyPhrasesDetectionJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeKeyPhrasesDetectionJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeKeyPhrasesDetectionJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeKeyPhrasesDetectionJobCommand = deserializeAws_json1_1DescribeKeyPhrasesDetectionJobCommand;
async function deserializeAws_json1_1DescribeKeyPhrasesDetectionJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "JobNotFoundException":
        case "com.amazonaws.comprehend#JobNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehend#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeSentimentDetectionJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeSentimentDetectionJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeSentimentDetectionJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeSentimentDetectionJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeSentimentDetectionJobCommand = deserializeAws_json1_1DescribeSentimentDetectionJobCommand;
async function deserializeAws_json1_1DescribeSentimentDetectionJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "JobNotFoundException":
        case "com.amazonaws.comprehend#JobNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehend#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeTopicsDetectionJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeTopicsDetectionJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTopicsDetectionJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeTopicsDetectionJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeTopicsDetectionJobCommand = deserializeAws_json1_1DescribeTopicsDetectionJobCommand;
async function deserializeAws_json1_1DescribeTopicsDetectionJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "JobNotFoundException":
        case "com.amazonaws.comprehend#JobNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehend#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DetectDominantLanguageCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DetectDominantLanguageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DetectDominantLanguageResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DetectDominantLanguageResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DetectDominantLanguageCommand = deserializeAws_json1_1DetectDominantLanguageCommand;
async function deserializeAws_json1_1DetectDominantLanguageCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TextSizeLimitExceededException":
        case "com.amazonaws.comprehend#TextSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DetectEntitiesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DetectEntitiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DetectEntitiesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DetectEntitiesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DetectEntitiesCommand = deserializeAws_json1_1DetectEntitiesCommand;
async function deserializeAws_json1_1DetectEntitiesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TextSizeLimitExceededException":
        case "com.amazonaws.comprehend#TextSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedLanguageException":
        case "com.amazonaws.comprehend#UnsupportedLanguageException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedLanguageExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DetectKeyPhrasesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DetectKeyPhrasesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DetectKeyPhrasesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DetectKeyPhrasesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DetectKeyPhrasesCommand = deserializeAws_json1_1DetectKeyPhrasesCommand;
async function deserializeAws_json1_1DetectKeyPhrasesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TextSizeLimitExceededException":
        case "com.amazonaws.comprehend#TextSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedLanguageException":
        case "com.amazonaws.comprehend#UnsupportedLanguageException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedLanguageExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DetectSentimentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DetectSentimentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DetectSentimentResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DetectSentimentResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DetectSentimentCommand = deserializeAws_json1_1DetectSentimentCommand;
async function deserializeAws_json1_1DetectSentimentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TextSizeLimitExceededException":
        case "com.amazonaws.comprehend#TextSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedLanguageException":
        case "com.amazonaws.comprehend#UnsupportedLanguageException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedLanguageExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DetectSyntaxCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DetectSyntaxCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DetectSyntaxResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DetectSyntaxResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DetectSyntaxCommand = deserializeAws_json1_1DetectSyntaxCommand;
async function deserializeAws_json1_1DetectSyntaxCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TextSizeLimitExceededException":
        case "com.amazonaws.comprehend#TextSizeLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedLanguageException":
        case "com.amazonaws.comprehend#UnsupportedLanguageException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1UnsupportedLanguageExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListDocumentClassificationJobsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListDocumentClassificationJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDocumentClassificationJobsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListDocumentClassificationJobsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListDocumentClassificationJobsCommand = deserializeAws_json1_1ListDocumentClassificationJobsCommand;
async function deserializeAws_json1_1ListDocumentClassificationJobsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFilterException":
        case "com.amazonaws.comprehend#InvalidFilterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFilterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehend#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListDocumentClassifiersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListDocumentClassifiersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDocumentClassifiersResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListDocumentClassifiersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListDocumentClassifiersCommand = deserializeAws_json1_1ListDocumentClassifiersCommand;
async function deserializeAws_json1_1ListDocumentClassifiersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFilterException":
        case "com.amazonaws.comprehend#InvalidFilterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFilterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehend#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListDominantLanguageDetectionJobsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListDominantLanguageDetectionJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDominantLanguageDetectionJobsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListDominantLanguageDetectionJobsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListDominantLanguageDetectionJobsCommand = deserializeAws_json1_1ListDominantLanguageDetectionJobsCommand;
async function deserializeAws_json1_1ListDominantLanguageDetectionJobsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFilterException":
        case "com.amazonaws.comprehend#InvalidFilterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFilterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehend#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListEndpointsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListEndpointsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListEndpointsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListEndpointsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListEndpointsCommand = deserializeAws_json1_1ListEndpointsCommand;
async function deserializeAws_json1_1ListEndpointsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehend#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListEntitiesDetectionJobsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListEntitiesDetectionJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListEntitiesDetectionJobsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListEntitiesDetectionJobsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListEntitiesDetectionJobsCommand = deserializeAws_json1_1ListEntitiesDetectionJobsCommand;
async function deserializeAws_json1_1ListEntitiesDetectionJobsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFilterException":
        case "com.amazonaws.comprehend#InvalidFilterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFilterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehend#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListEntityRecognizersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListEntityRecognizersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListEntityRecognizersResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListEntityRecognizersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListEntityRecognizersCommand = deserializeAws_json1_1ListEntityRecognizersCommand;
async function deserializeAws_json1_1ListEntityRecognizersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFilterException":
        case "com.amazonaws.comprehend#InvalidFilterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFilterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehend#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListKeyPhrasesDetectionJobsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListKeyPhrasesDetectionJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListKeyPhrasesDetectionJobsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListKeyPhrasesDetectionJobsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListKeyPhrasesDetectionJobsCommand = deserializeAws_json1_1ListKeyPhrasesDetectionJobsCommand;
async function deserializeAws_json1_1ListKeyPhrasesDetectionJobsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFilterException":
        case "com.amazonaws.comprehend#InvalidFilterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFilterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehend#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListSentimentDetectionJobsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListSentimentDetectionJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListSentimentDetectionJobsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListSentimentDetectionJobsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListSentimentDetectionJobsCommand = deserializeAws_json1_1ListSentimentDetectionJobsCommand;
async function deserializeAws_json1_1ListSentimentDetectionJobsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFilterException":
        case "com.amazonaws.comprehend#InvalidFilterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFilterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehend#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListTagsForResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTagsForResourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTagsForResourceCommand = deserializeAws_json1_1ListTagsForResourceCommand;
async function deserializeAws_json1_1ListTagsForResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.comprehend#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListTopicsDetectionJobsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListTopicsDetectionJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTopicsDetectionJobsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListTopicsDetectionJobsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListTopicsDetectionJobsCommand = deserializeAws_json1_1ListTopicsDetectionJobsCommand;
async function deserializeAws_json1_1ListTopicsDetectionJobsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidFilterException":
        case "com.amazonaws.comprehend#InvalidFilterException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidFilterExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehend#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartDocumentClassificationJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartDocumentClassificationJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartDocumentClassificationJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartDocumentClassificationJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartDocumentClassificationJobCommand = deserializeAws_json1_1StartDocumentClassificationJobCommand;
async function deserializeAws_json1_1StartDocumentClassificationJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KmsKeyValidationException":
        case "com.amazonaws.comprehend#KmsKeyValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KmsKeyValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.comprehend#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.comprehend#ResourceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehend#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartDominantLanguageDetectionJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartDominantLanguageDetectionJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartDominantLanguageDetectionJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartDominantLanguageDetectionJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartDominantLanguageDetectionJobCommand = deserializeAws_json1_1StartDominantLanguageDetectionJobCommand;
async function deserializeAws_json1_1StartDominantLanguageDetectionJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KmsKeyValidationException":
        case "com.amazonaws.comprehend#KmsKeyValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KmsKeyValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehend#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartEntitiesDetectionJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartEntitiesDetectionJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartEntitiesDetectionJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartEntitiesDetectionJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartEntitiesDetectionJobCommand = deserializeAws_json1_1StartEntitiesDetectionJobCommand;
async function deserializeAws_json1_1StartEntitiesDetectionJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KmsKeyValidationException":
        case "com.amazonaws.comprehend#KmsKeyValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KmsKeyValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.comprehend#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.comprehend#ResourceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehend#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartKeyPhrasesDetectionJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartKeyPhrasesDetectionJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartKeyPhrasesDetectionJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartKeyPhrasesDetectionJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartKeyPhrasesDetectionJobCommand = deserializeAws_json1_1StartKeyPhrasesDetectionJobCommand;
async function deserializeAws_json1_1StartKeyPhrasesDetectionJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KmsKeyValidationException":
        case "com.amazonaws.comprehend#KmsKeyValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KmsKeyValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehend#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartSentimentDetectionJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartSentimentDetectionJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartSentimentDetectionJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartSentimentDetectionJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartSentimentDetectionJobCommand = deserializeAws_json1_1StartSentimentDetectionJobCommand;
async function deserializeAws_json1_1StartSentimentDetectionJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KmsKeyValidationException":
        case "com.amazonaws.comprehend#KmsKeyValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KmsKeyValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehend#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StartTopicsDetectionJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StartTopicsDetectionJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartTopicsDetectionJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StartTopicsDetectionJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StartTopicsDetectionJobCommand = deserializeAws_json1_1StartTopicsDetectionJobCommand;
async function deserializeAws_json1_1StartTopicsDetectionJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KmsKeyValidationException":
        case "com.amazonaws.comprehend#KmsKeyValidationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KmsKeyValidationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehend#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StopDominantLanguageDetectionJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopDominantLanguageDetectionJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopDominantLanguageDetectionJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopDominantLanguageDetectionJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopDominantLanguageDetectionJobCommand = deserializeAws_json1_1StopDominantLanguageDetectionJobCommand;
async function deserializeAws_json1_1StopDominantLanguageDetectionJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "JobNotFoundException":
        case "com.amazonaws.comprehend#JobNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StopEntitiesDetectionJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopEntitiesDetectionJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopEntitiesDetectionJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopEntitiesDetectionJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopEntitiesDetectionJobCommand = deserializeAws_json1_1StopEntitiesDetectionJobCommand;
async function deserializeAws_json1_1StopEntitiesDetectionJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "JobNotFoundException":
        case "com.amazonaws.comprehend#JobNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StopKeyPhrasesDetectionJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopKeyPhrasesDetectionJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopKeyPhrasesDetectionJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopKeyPhrasesDetectionJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopKeyPhrasesDetectionJobCommand = deserializeAws_json1_1StopKeyPhrasesDetectionJobCommand;
async function deserializeAws_json1_1StopKeyPhrasesDetectionJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "JobNotFoundException":
        case "com.amazonaws.comprehend#JobNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StopSentimentDetectionJobCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopSentimentDetectionJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopSentimentDetectionJobResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopSentimentDetectionJobResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopSentimentDetectionJobCommand = deserializeAws_json1_1StopSentimentDetectionJobCommand;
async function deserializeAws_json1_1StopSentimentDetectionJobCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "JobNotFoundException":
        case "com.amazonaws.comprehend#JobNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1JobNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StopTrainingDocumentClassifierCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopTrainingDocumentClassifierCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopTrainingDocumentClassifierResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopTrainingDocumentClassifierResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopTrainingDocumentClassifierCommand = deserializeAws_json1_1StopTrainingDocumentClassifierCommand;
async function deserializeAws_json1_1StopTrainingDocumentClassifierCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.comprehend#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehend#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1StopTrainingEntityRecognizerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1StopTrainingEntityRecognizerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopTrainingEntityRecognizerResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "StopTrainingEntityRecognizerResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1StopTrainingEntityRecognizerCommand = deserializeAws_json1_1StopTrainingEntityRecognizerCommand;
async function deserializeAws_json1_1StopTrainingEntityRecognizerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.comprehend#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehend#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1TagResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1TagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TagResourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "TagResourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1TagResourceCommand = deserializeAws_json1_1TagResourceCommand;
async function deserializeAws_json1_1TagResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.comprehend#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.comprehend#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagsException":
        case "com.amazonaws.comprehend#TooManyTagsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UntagResourceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UntagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UntagResourceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UntagResourceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UntagResourceCommand = deserializeAws_json1_1UntagResourceCommand;
async function deserializeAws_json1_1UntagResourceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.comprehend#ConcurrentModificationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.comprehend#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyTagKeysException":
        case "com.amazonaws.comprehend#TooManyTagKeysException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyTagKeysExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateEndpointCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateEndpointResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateEndpointResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateEndpointCommand = deserializeAws_json1_1UpdateEndpointCommand;
async function deserializeAws_json1_1UpdateEndpointCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.comprehend#InternalServerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidRequestException":
        case "com.amazonaws.comprehend#InvalidRequestException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceInUseException":
        case "com.amazonaws.comprehend#ResourceInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.comprehend#ResourceLimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.comprehend#ResourceNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.comprehend#ResourceUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.comprehend#TooManyRequestsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1BatchSizeLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1BatchSizeLimitExceededException(body, context);
    const contents = Object.assign({ name: "BatchSizeLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConcurrentModificationException(body, context);
    const contents = Object.assign({ name: "ConcurrentModificationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalServerException(body, context);
    const contents = Object.assign({ name: "InternalServerException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidFilterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidFilterException(body, context);
    const contents = Object.assign({ name: "InvalidFilterException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidRequestException(body, context);
    const contents = Object.assign({ name: "InvalidRequestException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1JobNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1JobNotFoundException(body, context);
    const contents = Object.assign({ name: "JobNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1KmsKeyValidationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KmsKeyValidationException(body, context);
    const contents = Object.assign({ name: "KmsKeyValidationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceInUseException(body, context);
    const contents = Object.assign({ name: "ResourceInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceLimitExceededException(body, context);
    const contents = Object.assign({ name: "ResourceLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
    const contents = Object.assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ResourceUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceUnavailableException(body, context);
    const contents = Object.assign({ name: "ResourceUnavailableException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TextSizeLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TextSizeLimitExceededException(body, context);
    const contents = Object.assign({ name: "TextSizeLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TooManyRequestsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyRequestsException(body, context);
    const contents = Object.assign({ name: "TooManyRequestsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TooManyTagKeysExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyTagKeysException(body, context);
    const contents = Object.assign({ name: "TooManyTagKeysException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TooManyTagsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyTagsException(body, context);
    const contents = Object.assign({ name: "TooManyTagsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UnsupportedLanguageExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedLanguageException(body, context);
    const contents = Object.assign({ name: "UnsupportedLanguageException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1BatchDetectDominantLanguageRequest = (input, context) => {
    const bodyParams = {};
    if (input.TextList !== undefined) {
        bodyParams["TextList"] = serializeAws_json1_1StringList(input.TextList, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BatchDetectEntitiesRequest = (input, context) => {
    const bodyParams = {};
    if (input.LanguageCode !== undefined) {
        bodyParams["LanguageCode"] = input.LanguageCode;
    }
    if (input.TextList !== undefined) {
        bodyParams["TextList"] = serializeAws_json1_1StringList(input.TextList, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BatchDetectKeyPhrasesRequest = (input, context) => {
    const bodyParams = {};
    if (input.LanguageCode !== undefined) {
        bodyParams["LanguageCode"] = input.LanguageCode;
    }
    if (input.TextList !== undefined) {
        bodyParams["TextList"] = serializeAws_json1_1StringList(input.TextList, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BatchDetectSentimentRequest = (input, context) => {
    const bodyParams = {};
    if (input.LanguageCode !== undefined) {
        bodyParams["LanguageCode"] = input.LanguageCode;
    }
    if (input.TextList !== undefined) {
        bodyParams["TextList"] = serializeAws_json1_1StringList(input.TextList, context);
    }
    return bodyParams;
};
const serializeAws_json1_1BatchDetectSyntaxRequest = (input, context) => {
    const bodyParams = {};
    if (input.LanguageCode !== undefined) {
        bodyParams["LanguageCode"] = input.LanguageCode;
    }
    if (input.TextList !== undefined) {
        bodyParams["TextList"] = serializeAws_json1_1StringList(input.TextList, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ClassifyDocumentRequest = (input, context) => {
    const bodyParams = {};
    if (input.EndpointArn !== undefined) {
        bodyParams["EndpointArn"] = input.EndpointArn;
    }
    if (input.Text !== undefined) {
        bodyParams["Text"] = input.Text;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateDocumentClassifierRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken === undefined) {
        input.ClientRequestToken = uuid_1.v4();
    }
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.DataAccessRoleArn !== undefined) {
        bodyParams["DataAccessRoleArn"] = input.DataAccessRoleArn;
    }
    if (input.DocumentClassifierName !== undefined) {
        bodyParams["DocumentClassifierName"] = input.DocumentClassifierName;
    }
    if (input.InputDataConfig !== undefined) {
        bodyParams["InputDataConfig"] = serializeAws_json1_1DocumentClassifierInputDataConfig(input.InputDataConfig, context);
    }
    if (input.LanguageCode !== undefined) {
        bodyParams["LanguageCode"] = input.LanguageCode;
    }
    if (input.Mode !== undefined) {
        bodyParams["Mode"] = input.Mode;
    }
    if (input.OutputDataConfig !== undefined) {
        bodyParams["OutputDataConfig"] = serializeAws_json1_1DocumentClassifierOutputDataConfig(input.OutputDataConfig, context);
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    if (input.VolumeKmsKeyId !== undefined) {
        bodyParams["VolumeKmsKeyId"] = input.VolumeKmsKeyId;
    }
    if (input.VpcConfig !== undefined) {
        bodyParams["VpcConfig"] = serializeAws_json1_1VpcConfig(input.VpcConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateEndpointRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken === undefined) {
        input.ClientRequestToken = uuid_1.v4();
    }
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.DesiredInferenceUnits !== undefined) {
        bodyParams["DesiredInferenceUnits"] = input.DesiredInferenceUnits;
    }
    if (input.EndpointName !== undefined) {
        bodyParams["EndpointName"] = input.EndpointName;
    }
    if (input.ModelArn !== undefined) {
        bodyParams["ModelArn"] = input.ModelArn;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1CreateEntityRecognizerRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken === undefined) {
        input.ClientRequestToken = uuid_1.v4();
    }
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.DataAccessRoleArn !== undefined) {
        bodyParams["DataAccessRoleArn"] = input.DataAccessRoleArn;
    }
    if (input.InputDataConfig !== undefined) {
        bodyParams["InputDataConfig"] = serializeAws_json1_1EntityRecognizerInputDataConfig(input.InputDataConfig, context);
    }
    if (input.LanguageCode !== undefined) {
        bodyParams["LanguageCode"] = input.LanguageCode;
    }
    if (input.RecognizerName !== undefined) {
        bodyParams["RecognizerName"] = input.RecognizerName;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    if (input.VolumeKmsKeyId !== undefined) {
        bodyParams["VolumeKmsKeyId"] = input.VolumeKmsKeyId;
    }
    if (input.VpcConfig !== undefined) {
        bodyParams["VpcConfig"] = serializeAws_json1_1VpcConfig(input.VpcConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteDocumentClassifierRequest = (input, context) => {
    const bodyParams = {};
    if (input.DocumentClassifierArn !== undefined) {
        bodyParams["DocumentClassifierArn"] = input.DocumentClassifierArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteEndpointRequest = (input, context) => {
    const bodyParams = {};
    if (input.EndpointArn !== undefined) {
        bodyParams["EndpointArn"] = input.EndpointArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteEntityRecognizerRequest = (input, context) => {
    const bodyParams = {};
    if (input.EntityRecognizerArn !== undefined) {
        bodyParams["EntityRecognizerArn"] = input.EntityRecognizerArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeDocumentClassificationJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobId !== undefined) {
        bodyParams["JobId"] = input.JobId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeDocumentClassifierRequest = (input, context) => {
    const bodyParams = {};
    if (input.DocumentClassifierArn !== undefined) {
        bodyParams["DocumentClassifierArn"] = input.DocumentClassifierArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeDominantLanguageDetectionJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobId !== undefined) {
        bodyParams["JobId"] = input.JobId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeEndpointRequest = (input, context) => {
    const bodyParams = {};
    if (input.EndpointArn !== undefined) {
        bodyParams["EndpointArn"] = input.EndpointArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeEntitiesDetectionJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobId !== undefined) {
        bodyParams["JobId"] = input.JobId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeEntityRecognizerRequest = (input, context) => {
    const bodyParams = {};
    if (input.EntityRecognizerArn !== undefined) {
        bodyParams["EntityRecognizerArn"] = input.EntityRecognizerArn;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeKeyPhrasesDetectionJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobId !== undefined) {
        bodyParams["JobId"] = input.JobId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeSentimentDetectionJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobId !== undefined) {
        bodyParams["JobId"] = input.JobId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeTopicsDetectionJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobId !== undefined) {
        bodyParams["JobId"] = input.JobId;
    }
    return bodyParams;
};
const serializeAws_json1_1DetectDominantLanguageRequest = (input, context) => {
    const bodyParams = {};
    if (input.Text !== undefined) {
        bodyParams["Text"] = input.Text;
    }
    return bodyParams;
};
const serializeAws_json1_1DetectEntitiesRequest = (input, context) => {
    const bodyParams = {};
    if (input.LanguageCode !== undefined) {
        bodyParams["LanguageCode"] = input.LanguageCode;
    }
    if (input.Text !== undefined) {
        bodyParams["Text"] = input.Text;
    }
    return bodyParams;
};
const serializeAws_json1_1DetectKeyPhrasesRequest = (input, context) => {
    const bodyParams = {};
    if (input.LanguageCode !== undefined) {
        bodyParams["LanguageCode"] = input.LanguageCode;
    }
    if (input.Text !== undefined) {
        bodyParams["Text"] = input.Text;
    }
    return bodyParams;
};
const serializeAws_json1_1DetectSentimentRequest = (input, context) => {
    const bodyParams = {};
    if (input.LanguageCode !== undefined) {
        bodyParams["LanguageCode"] = input.LanguageCode;
    }
    if (input.Text !== undefined) {
        bodyParams["Text"] = input.Text;
    }
    return bodyParams;
};
const serializeAws_json1_1DetectSyntaxRequest = (input, context) => {
    const bodyParams = {};
    if (input.LanguageCode !== undefined) {
        bodyParams["LanguageCode"] = input.LanguageCode;
    }
    if (input.Text !== undefined) {
        bodyParams["Text"] = input.Text;
    }
    return bodyParams;
};
const serializeAws_json1_1DocumentClassificationJobFilter = (input, context) => {
    const bodyParams = {};
    if (input.JobName !== undefined) {
        bodyParams["JobName"] = input.JobName;
    }
    if (input.JobStatus !== undefined) {
        bodyParams["JobStatus"] = input.JobStatus;
    }
    if (input.SubmitTimeAfter !== undefined) {
        bodyParams["SubmitTimeAfter"] = Math.round(input.SubmitTimeAfter.getTime() / 1000);
    }
    if (input.SubmitTimeBefore !== undefined) {
        bodyParams["SubmitTimeBefore"] = Math.round(input.SubmitTimeBefore.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1DocumentClassifierFilter = (input, context) => {
    const bodyParams = {};
    if (input.Status !== undefined) {
        bodyParams["Status"] = input.Status;
    }
    if (input.SubmitTimeAfter !== undefined) {
        bodyParams["SubmitTimeAfter"] = Math.round(input.SubmitTimeAfter.getTime() / 1000);
    }
    if (input.SubmitTimeBefore !== undefined) {
        bodyParams["SubmitTimeBefore"] = Math.round(input.SubmitTimeBefore.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1DocumentClassifierInputDataConfig = (input, context) => {
    const bodyParams = {};
    if (input.LabelDelimiter !== undefined) {
        bodyParams["LabelDelimiter"] = input.LabelDelimiter;
    }
    if (input.S3Uri !== undefined) {
        bodyParams["S3Uri"] = input.S3Uri;
    }
    return bodyParams;
};
const serializeAws_json1_1DocumentClassifierOutputDataConfig = (input, context) => {
    const bodyParams = {};
    if (input.KmsKeyId !== undefined) {
        bodyParams["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.S3Uri !== undefined) {
        bodyParams["S3Uri"] = input.S3Uri;
    }
    return bodyParams;
};
const serializeAws_json1_1DominantLanguageDetectionJobFilter = (input, context) => {
    const bodyParams = {};
    if (input.JobName !== undefined) {
        bodyParams["JobName"] = input.JobName;
    }
    if (input.JobStatus !== undefined) {
        bodyParams["JobStatus"] = input.JobStatus;
    }
    if (input.SubmitTimeAfter !== undefined) {
        bodyParams["SubmitTimeAfter"] = Math.round(input.SubmitTimeAfter.getTime() / 1000);
    }
    if (input.SubmitTimeBefore !== undefined) {
        bodyParams["SubmitTimeBefore"] = Math.round(input.SubmitTimeBefore.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1EndpointFilter = (input, context) => {
    const bodyParams = {};
    if (input.CreationTimeAfter !== undefined) {
        bodyParams["CreationTimeAfter"] = Math.round(input.CreationTimeAfter.getTime() / 1000);
    }
    if (input.CreationTimeBefore !== undefined) {
        bodyParams["CreationTimeBefore"] = Math.round(input.CreationTimeBefore.getTime() / 1000);
    }
    if (input.ModelArn !== undefined) {
        bodyParams["ModelArn"] = input.ModelArn;
    }
    if (input.Status !== undefined) {
        bodyParams["Status"] = input.Status;
    }
    return bodyParams;
};
const serializeAws_json1_1EntitiesDetectionJobFilter = (input, context) => {
    const bodyParams = {};
    if (input.JobName !== undefined) {
        bodyParams["JobName"] = input.JobName;
    }
    if (input.JobStatus !== undefined) {
        bodyParams["JobStatus"] = input.JobStatus;
    }
    if (input.SubmitTimeAfter !== undefined) {
        bodyParams["SubmitTimeAfter"] = Math.round(input.SubmitTimeAfter.getTime() / 1000);
    }
    if (input.SubmitTimeBefore !== undefined) {
        bodyParams["SubmitTimeBefore"] = Math.round(input.SubmitTimeBefore.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1EntityRecognizerAnnotations = (input, context) => {
    const bodyParams = {};
    if (input.S3Uri !== undefined) {
        bodyParams["S3Uri"] = input.S3Uri;
    }
    return bodyParams;
};
const serializeAws_json1_1EntityRecognizerDocuments = (input, context) => {
    const bodyParams = {};
    if (input.S3Uri !== undefined) {
        bodyParams["S3Uri"] = input.S3Uri;
    }
    return bodyParams;
};
const serializeAws_json1_1EntityRecognizerEntityList = (input, context) => {
    const bodyParams = {};
    if (input.S3Uri !== undefined) {
        bodyParams["S3Uri"] = input.S3Uri;
    }
    return bodyParams;
};
const serializeAws_json1_1EntityRecognizerFilter = (input, context) => {
    const bodyParams = {};
    if (input.Status !== undefined) {
        bodyParams["Status"] = input.Status;
    }
    if (input.SubmitTimeAfter !== undefined) {
        bodyParams["SubmitTimeAfter"] = Math.round(input.SubmitTimeAfter.getTime() / 1000);
    }
    if (input.SubmitTimeBefore !== undefined) {
        bodyParams["SubmitTimeBefore"] = Math.round(input.SubmitTimeBefore.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1EntityRecognizerInputDataConfig = (input, context) => {
    const bodyParams = {};
    if (input.Annotations !== undefined) {
        bodyParams["Annotations"] = serializeAws_json1_1EntityRecognizerAnnotations(input.Annotations, context);
    }
    if (input.Documents !== undefined) {
        bodyParams["Documents"] = serializeAws_json1_1EntityRecognizerDocuments(input.Documents, context);
    }
    if (input.EntityList !== undefined) {
        bodyParams["EntityList"] = serializeAws_json1_1EntityRecognizerEntityList(input.EntityList, context);
    }
    if (input.EntityTypes !== undefined) {
        bodyParams["EntityTypes"] = serializeAws_json1_1EntityTypesList(input.EntityTypes, context);
    }
    return bodyParams;
};
const serializeAws_json1_1EntityTypesList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1EntityTypesListItem(entry, context));
    }
    return contents;
};
const serializeAws_json1_1EntityTypesListItem = (input, context) => {
    const bodyParams = {};
    if (input.Type !== undefined) {
        bodyParams["Type"] = input.Type;
    }
    return bodyParams;
};
const serializeAws_json1_1InputDataConfig = (input, context) => {
    const bodyParams = {};
    if (input.InputFormat !== undefined) {
        bodyParams["InputFormat"] = input.InputFormat;
    }
    if (input.S3Uri !== undefined) {
        bodyParams["S3Uri"] = input.S3Uri;
    }
    return bodyParams;
};
const serializeAws_json1_1KeyPhrasesDetectionJobFilter = (input, context) => {
    const bodyParams = {};
    if (input.JobName !== undefined) {
        bodyParams["JobName"] = input.JobName;
    }
    if (input.JobStatus !== undefined) {
        bodyParams["JobStatus"] = input.JobStatus;
    }
    if (input.SubmitTimeAfter !== undefined) {
        bodyParams["SubmitTimeAfter"] = Math.round(input.SubmitTimeAfter.getTime() / 1000);
    }
    if (input.SubmitTimeBefore !== undefined) {
        bodyParams["SubmitTimeBefore"] = Math.round(input.SubmitTimeBefore.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1ListDocumentClassificationJobsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filter !== undefined) {
        bodyParams["Filter"] = serializeAws_json1_1DocumentClassificationJobFilter(input.Filter, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListDocumentClassifiersRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filter !== undefined) {
        bodyParams["Filter"] = serializeAws_json1_1DocumentClassifierFilter(input.Filter, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListDominantLanguageDetectionJobsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filter !== undefined) {
        bodyParams["Filter"] = serializeAws_json1_1DominantLanguageDetectionJobFilter(input.Filter, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListEndpointsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filter !== undefined) {
        bodyParams["Filter"] = serializeAws_json1_1EndpointFilter(input.Filter, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListEntitiesDetectionJobsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filter !== undefined) {
        bodyParams["Filter"] = serializeAws_json1_1EntitiesDetectionJobFilter(input.Filter, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListEntityRecognizersRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filter !== undefined) {
        bodyParams["Filter"] = serializeAws_json1_1EntityRecognizerFilter(input.Filter, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListKeyPhrasesDetectionJobsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filter !== undefined) {
        bodyParams["Filter"] = serializeAws_json1_1KeyPhrasesDetectionJobFilter(input.Filter, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListSentimentDetectionJobsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filter !== undefined) {
        bodyParams["Filter"] = serializeAws_json1_1SentimentDetectionJobFilter(input.Filter, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    return bodyParams;
};
const serializeAws_json1_1ListTopicsDetectionJobsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Filter !== undefined) {
        bodyParams["Filter"] = serializeAws_json1_1TopicsDetectionJobFilter(input.Filter, context);
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1OutputDataConfig = (input, context) => {
    const bodyParams = {};
    if (input.KmsKeyId !== undefined) {
        bodyParams["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.S3Uri !== undefined) {
        bodyParams["S3Uri"] = input.S3Uri;
    }
    return bodyParams;
};
const serializeAws_json1_1SecurityGroupIds = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1SentimentDetectionJobFilter = (input, context) => {
    const bodyParams = {};
    if (input.JobName !== undefined) {
        bodyParams["JobName"] = input.JobName;
    }
    if (input.JobStatus !== undefined) {
        bodyParams["JobStatus"] = input.JobStatus;
    }
    if (input.SubmitTimeAfter !== undefined) {
        bodyParams["SubmitTimeAfter"] = Math.round(input.SubmitTimeAfter.getTime() / 1000);
    }
    if (input.SubmitTimeBefore !== undefined) {
        bodyParams["SubmitTimeBefore"] = Math.round(input.SubmitTimeBefore.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1StartDocumentClassificationJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken === undefined) {
        input.ClientRequestToken = uuid_1.v4();
    }
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.DataAccessRoleArn !== undefined) {
        bodyParams["DataAccessRoleArn"] = input.DataAccessRoleArn;
    }
    if (input.DocumentClassifierArn !== undefined) {
        bodyParams["DocumentClassifierArn"] = input.DocumentClassifierArn;
    }
    if (input.InputDataConfig !== undefined) {
        bodyParams["InputDataConfig"] = serializeAws_json1_1InputDataConfig(input.InputDataConfig, context);
    }
    if (input.JobName !== undefined) {
        bodyParams["JobName"] = input.JobName;
    }
    if (input.OutputDataConfig !== undefined) {
        bodyParams["OutputDataConfig"] = serializeAws_json1_1OutputDataConfig(input.OutputDataConfig, context);
    }
    if (input.VolumeKmsKeyId !== undefined) {
        bodyParams["VolumeKmsKeyId"] = input.VolumeKmsKeyId;
    }
    if (input.VpcConfig !== undefined) {
        bodyParams["VpcConfig"] = serializeAws_json1_1VpcConfig(input.VpcConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1StartDominantLanguageDetectionJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken === undefined) {
        input.ClientRequestToken = uuid_1.v4();
    }
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.DataAccessRoleArn !== undefined) {
        bodyParams["DataAccessRoleArn"] = input.DataAccessRoleArn;
    }
    if (input.InputDataConfig !== undefined) {
        bodyParams["InputDataConfig"] = serializeAws_json1_1InputDataConfig(input.InputDataConfig, context);
    }
    if (input.JobName !== undefined) {
        bodyParams["JobName"] = input.JobName;
    }
    if (input.OutputDataConfig !== undefined) {
        bodyParams["OutputDataConfig"] = serializeAws_json1_1OutputDataConfig(input.OutputDataConfig, context);
    }
    if (input.VolumeKmsKeyId !== undefined) {
        bodyParams["VolumeKmsKeyId"] = input.VolumeKmsKeyId;
    }
    if (input.VpcConfig !== undefined) {
        bodyParams["VpcConfig"] = serializeAws_json1_1VpcConfig(input.VpcConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1StartEntitiesDetectionJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken === undefined) {
        input.ClientRequestToken = uuid_1.v4();
    }
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.DataAccessRoleArn !== undefined) {
        bodyParams["DataAccessRoleArn"] = input.DataAccessRoleArn;
    }
    if (input.EntityRecognizerArn !== undefined) {
        bodyParams["EntityRecognizerArn"] = input.EntityRecognizerArn;
    }
    if (input.InputDataConfig !== undefined) {
        bodyParams["InputDataConfig"] = serializeAws_json1_1InputDataConfig(input.InputDataConfig, context);
    }
    if (input.JobName !== undefined) {
        bodyParams["JobName"] = input.JobName;
    }
    if (input.LanguageCode !== undefined) {
        bodyParams["LanguageCode"] = input.LanguageCode;
    }
    if (input.OutputDataConfig !== undefined) {
        bodyParams["OutputDataConfig"] = serializeAws_json1_1OutputDataConfig(input.OutputDataConfig, context);
    }
    if (input.VolumeKmsKeyId !== undefined) {
        bodyParams["VolumeKmsKeyId"] = input.VolumeKmsKeyId;
    }
    if (input.VpcConfig !== undefined) {
        bodyParams["VpcConfig"] = serializeAws_json1_1VpcConfig(input.VpcConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1StartKeyPhrasesDetectionJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken === undefined) {
        input.ClientRequestToken = uuid_1.v4();
    }
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.DataAccessRoleArn !== undefined) {
        bodyParams["DataAccessRoleArn"] = input.DataAccessRoleArn;
    }
    if (input.InputDataConfig !== undefined) {
        bodyParams["InputDataConfig"] = serializeAws_json1_1InputDataConfig(input.InputDataConfig, context);
    }
    if (input.JobName !== undefined) {
        bodyParams["JobName"] = input.JobName;
    }
    if (input.LanguageCode !== undefined) {
        bodyParams["LanguageCode"] = input.LanguageCode;
    }
    if (input.OutputDataConfig !== undefined) {
        bodyParams["OutputDataConfig"] = serializeAws_json1_1OutputDataConfig(input.OutputDataConfig, context);
    }
    if (input.VolumeKmsKeyId !== undefined) {
        bodyParams["VolumeKmsKeyId"] = input.VolumeKmsKeyId;
    }
    if (input.VpcConfig !== undefined) {
        bodyParams["VpcConfig"] = serializeAws_json1_1VpcConfig(input.VpcConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1StartSentimentDetectionJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken === undefined) {
        input.ClientRequestToken = uuid_1.v4();
    }
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.DataAccessRoleArn !== undefined) {
        bodyParams["DataAccessRoleArn"] = input.DataAccessRoleArn;
    }
    if (input.InputDataConfig !== undefined) {
        bodyParams["InputDataConfig"] = serializeAws_json1_1InputDataConfig(input.InputDataConfig, context);
    }
    if (input.JobName !== undefined) {
        bodyParams["JobName"] = input.JobName;
    }
    if (input.LanguageCode !== undefined) {
        bodyParams["LanguageCode"] = input.LanguageCode;
    }
    if (input.OutputDataConfig !== undefined) {
        bodyParams["OutputDataConfig"] = serializeAws_json1_1OutputDataConfig(input.OutputDataConfig, context);
    }
    if (input.VolumeKmsKeyId !== undefined) {
        bodyParams["VolumeKmsKeyId"] = input.VolumeKmsKeyId;
    }
    if (input.VpcConfig !== undefined) {
        bodyParams["VpcConfig"] = serializeAws_json1_1VpcConfig(input.VpcConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1StartTopicsDetectionJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.ClientRequestToken === undefined) {
        input.ClientRequestToken = uuid_1.v4();
    }
    if (input.ClientRequestToken !== undefined) {
        bodyParams["ClientRequestToken"] = input.ClientRequestToken;
    }
    if (input.DataAccessRoleArn !== undefined) {
        bodyParams["DataAccessRoleArn"] = input.DataAccessRoleArn;
    }
    if (input.InputDataConfig !== undefined) {
        bodyParams["InputDataConfig"] = serializeAws_json1_1InputDataConfig(input.InputDataConfig, context);
    }
    if (input.JobName !== undefined) {
        bodyParams["JobName"] = input.JobName;
    }
    if (input.NumberOfTopics !== undefined) {
        bodyParams["NumberOfTopics"] = input.NumberOfTopics;
    }
    if (input.OutputDataConfig !== undefined) {
        bodyParams["OutputDataConfig"] = serializeAws_json1_1OutputDataConfig(input.OutputDataConfig, context);
    }
    if (input.VolumeKmsKeyId !== undefined) {
        bodyParams["VolumeKmsKeyId"] = input.VolumeKmsKeyId;
    }
    if (input.VpcConfig !== undefined) {
        bodyParams["VpcConfig"] = serializeAws_json1_1VpcConfig(input.VpcConfig, context);
    }
    return bodyParams;
};
const serializeAws_json1_1StopDominantLanguageDetectionJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobId !== undefined) {
        bodyParams["JobId"] = input.JobId;
    }
    return bodyParams;
};
const serializeAws_json1_1StopEntitiesDetectionJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobId !== undefined) {
        bodyParams["JobId"] = input.JobId;
    }
    return bodyParams;
};
const serializeAws_json1_1StopKeyPhrasesDetectionJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobId !== undefined) {
        bodyParams["JobId"] = input.JobId;
    }
    return bodyParams;
};
const serializeAws_json1_1StopSentimentDetectionJobRequest = (input, context) => {
    const bodyParams = {};
    if (input.JobId !== undefined) {
        bodyParams["JobId"] = input.JobId;
    }
    return bodyParams;
};
const serializeAws_json1_1StopTrainingDocumentClassifierRequest = (input, context) => {
    const bodyParams = {};
    if (input.DocumentClassifierArn !== undefined) {
        bodyParams["DocumentClassifierArn"] = input.DocumentClassifierArn;
    }
    return bodyParams;
};
const serializeAws_json1_1StopTrainingEntityRecognizerRequest = (input, context) => {
    const bodyParams = {};
    if (input.EntityRecognizerArn !== undefined) {
        bodyParams["EntityRecognizerArn"] = input.EntityRecognizerArn;
    }
    return bodyParams;
};
const serializeAws_json1_1StringList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1Subnets = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
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
const serializeAws_json1_1TagKeyList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1TagList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Tag(entry, context));
    }
    return contents;
};
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1TopicsDetectionJobFilter = (input, context) => {
    const bodyParams = {};
    if (input.JobName !== undefined) {
        bodyParams["JobName"] = input.JobName;
    }
    if (input.JobStatus !== undefined) {
        bodyParams["JobStatus"] = input.JobStatus;
    }
    if (input.SubmitTimeAfter !== undefined) {
        bodyParams["SubmitTimeAfter"] = Math.round(input.SubmitTimeAfter.getTime() / 1000);
    }
    if (input.SubmitTimeBefore !== undefined) {
        bodyParams["SubmitTimeBefore"] = Math.round(input.SubmitTimeBefore.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.ResourceArn !== undefined) {
        bodyParams["ResourceArn"] = input.ResourceArn;
    }
    if (input.TagKeys !== undefined) {
        bodyParams["TagKeys"] = serializeAws_json1_1TagKeyList(input.TagKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateEndpointRequest = (input, context) => {
    const bodyParams = {};
    if (input.DesiredInferenceUnits !== undefined) {
        bodyParams["DesiredInferenceUnits"] = input.DesiredInferenceUnits;
    }
    if (input.EndpointArn !== undefined) {
        bodyParams["EndpointArn"] = input.EndpointArn;
    }
    return bodyParams;
};
const serializeAws_json1_1VpcConfig = (input, context) => {
    const bodyParams = {};
    if (input.SecurityGroupIds !== undefined) {
        bodyParams["SecurityGroupIds"] = serializeAws_json1_1SecurityGroupIds(input.SecurityGroupIds, context);
    }
    if (input.Subnets !== undefined) {
        bodyParams["Subnets"] = serializeAws_json1_1Subnets(input.Subnets, context);
    }
    return bodyParams;
};
const deserializeAws_json1_1BatchDetectDominantLanguageItemResult = (output, context) => {
    let contents = {
        __type: "BatchDetectDominantLanguageItemResult",
        Index: undefined,
        Languages: undefined
    };
    if (output.Index !== undefined && output.Index !== null) {
        contents.Index = output.Index;
    }
    if (output.Languages !== undefined && output.Languages !== null) {
        contents.Languages = deserializeAws_json1_1ListOfDominantLanguages(output.Languages, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchDetectDominantLanguageResponse = (output, context) => {
    let contents = {
        __type: "BatchDetectDominantLanguageResponse",
        ErrorList: undefined,
        ResultList: undefined
    };
    if (output.ErrorList !== undefined && output.ErrorList !== null) {
        contents.ErrorList = deserializeAws_json1_1BatchItemErrorList(output.ErrorList, context);
    }
    if (output.ResultList !== undefined && output.ResultList !== null) {
        contents.ResultList = deserializeAws_json1_1ListOfDetectDominantLanguageResult(output.ResultList, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchDetectEntitiesItemResult = (output, context) => {
    let contents = {
        __type: "BatchDetectEntitiesItemResult",
        Entities: undefined,
        Index: undefined
    };
    if (output.Entities !== undefined && output.Entities !== null) {
        contents.Entities = deserializeAws_json1_1ListOfEntities(output.Entities, context);
    }
    if (output.Index !== undefined && output.Index !== null) {
        contents.Index = output.Index;
    }
    return contents;
};
const deserializeAws_json1_1BatchDetectEntitiesResponse = (output, context) => {
    let contents = {
        __type: "BatchDetectEntitiesResponse",
        ErrorList: undefined,
        ResultList: undefined
    };
    if (output.ErrorList !== undefined && output.ErrorList !== null) {
        contents.ErrorList = deserializeAws_json1_1BatchItemErrorList(output.ErrorList, context);
    }
    if (output.ResultList !== undefined && output.ResultList !== null) {
        contents.ResultList = deserializeAws_json1_1ListOfDetectEntitiesResult(output.ResultList, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchDetectKeyPhrasesItemResult = (output, context) => {
    let contents = {
        __type: "BatchDetectKeyPhrasesItemResult",
        Index: undefined,
        KeyPhrases: undefined
    };
    if (output.Index !== undefined && output.Index !== null) {
        contents.Index = output.Index;
    }
    if (output.KeyPhrases !== undefined && output.KeyPhrases !== null) {
        contents.KeyPhrases = deserializeAws_json1_1ListOfKeyPhrases(output.KeyPhrases, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchDetectKeyPhrasesResponse = (output, context) => {
    let contents = {
        __type: "BatchDetectKeyPhrasesResponse",
        ErrorList: undefined,
        ResultList: undefined
    };
    if (output.ErrorList !== undefined && output.ErrorList !== null) {
        contents.ErrorList = deserializeAws_json1_1BatchItemErrorList(output.ErrorList, context);
    }
    if (output.ResultList !== undefined && output.ResultList !== null) {
        contents.ResultList = deserializeAws_json1_1ListOfDetectKeyPhrasesResult(output.ResultList, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchDetectSentimentItemResult = (output, context) => {
    let contents = {
        __type: "BatchDetectSentimentItemResult",
        Index: undefined,
        Sentiment: undefined,
        SentimentScore: undefined
    };
    if (output.Index !== undefined && output.Index !== null) {
        contents.Index = output.Index;
    }
    if (output.Sentiment !== undefined && output.Sentiment !== null) {
        contents.Sentiment = output.Sentiment;
    }
    if (output.SentimentScore !== undefined && output.SentimentScore !== null) {
        contents.SentimentScore = deserializeAws_json1_1SentimentScore(output.SentimentScore, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchDetectSentimentResponse = (output, context) => {
    let contents = {
        __type: "BatchDetectSentimentResponse",
        ErrorList: undefined,
        ResultList: undefined
    };
    if (output.ErrorList !== undefined && output.ErrorList !== null) {
        contents.ErrorList = deserializeAws_json1_1BatchItemErrorList(output.ErrorList, context);
    }
    if (output.ResultList !== undefined && output.ResultList !== null) {
        contents.ResultList = deserializeAws_json1_1ListOfDetectSentimentResult(output.ResultList, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchDetectSyntaxItemResult = (output, context) => {
    let contents = {
        __type: "BatchDetectSyntaxItemResult",
        Index: undefined,
        SyntaxTokens: undefined
    };
    if (output.Index !== undefined && output.Index !== null) {
        contents.Index = output.Index;
    }
    if (output.SyntaxTokens !== undefined && output.SyntaxTokens !== null) {
        contents.SyntaxTokens = deserializeAws_json1_1ListOfSyntaxTokens(output.SyntaxTokens, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchDetectSyntaxResponse = (output, context) => {
    let contents = {
        __type: "BatchDetectSyntaxResponse",
        ErrorList: undefined,
        ResultList: undefined
    };
    if (output.ErrorList !== undefined && output.ErrorList !== null) {
        contents.ErrorList = deserializeAws_json1_1BatchItemErrorList(output.ErrorList, context);
    }
    if (output.ResultList !== undefined && output.ResultList !== null) {
        contents.ResultList = deserializeAws_json1_1ListOfDetectSyntaxResult(output.ResultList, context);
    }
    return contents;
};
const deserializeAws_json1_1BatchItemError = (output, context) => {
    let contents = {
        __type: "BatchItemError",
        ErrorCode: undefined,
        ErrorMessage: undefined,
        Index: undefined
    };
    if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
        contents.ErrorCode = output.ErrorCode;
    }
    if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
        contents.ErrorMessage = output.ErrorMessage;
    }
    if (output.Index !== undefined && output.Index !== null) {
        contents.Index = output.Index;
    }
    return contents;
};
const deserializeAws_json1_1BatchItemErrorList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1BatchItemError(entry, context));
};
const deserializeAws_json1_1BatchSizeLimitExceededException = (output, context) => {
    let contents = {
        __type: "BatchSizeLimitExceededException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ClassifierEvaluationMetrics = (output, context) => {
    let contents = {
        __type: "ClassifierEvaluationMetrics",
        Accuracy: undefined,
        F1Score: undefined,
        HammingLoss: undefined,
        MicroF1Score: undefined,
        MicroPrecision: undefined,
        MicroRecall: undefined,
        Precision: undefined,
        Recall: undefined
    };
    if (output.Accuracy !== undefined && output.Accuracy !== null) {
        contents.Accuracy = output.Accuracy;
    }
    if (output.F1Score !== undefined && output.F1Score !== null) {
        contents.F1Score = output.F1Score;
    }
    if (output.HammingLoss !== undefined && output.HammingLoss !== null) {
        contents.HammingLoss = output.HammingLoss;
    }
    if (output.MicroF1Score !== undefined && output.MicroF1Score !== null) {
        contents.MicroF1Score = output.MicroF1Score;
    }
    if (output.MicroPrecision !== undefined && output.MicroPrecision !== null) {
        contents.MicroPrecision = output.MicroPrecision;
    }
    if (output.MicroRecall !== undefined && output.MicroRecall !== null) {
        contents.MicroRecall = output.MicroRecall;
    }
    if (output.Precision !== undefined && output.Precision !== null) {
        contents.Precision = output.Precision;
    }
    if (output.Recall !== undefined && output.Recall !== null) {
        contents.Recall = output.Recall;
    }
    return contents;
};
const deserializeAws_json1_1ClassifierMetadata = (output, context) => {
    let contents = {
        __type: "ClassifierMetadata",
        EvaluationMetrics: undefined,
        NumberOfLabels: undefined,
        NumberOfTestDocuments: undefined,
        NumberOfTrainedDocuments: undefined
    };
    if (output.EvaluationMetrics !== undefined &&
        output.EvaluationMetrics !== null) {
        contents.EvaluationMetrics = deserializeAws_json1_1ClassifierEvaluationMetrics(output.EvaluationMetrics, context);
    }
    if (output.NumberOfLabels !== undefined && output.NumberOfLabels !== null) {
        contents.NumberOfLabels = output.NumberOfLabels;
    }
    if (output.NumberOfTestDocuments !== undefined &&
        output.NumberOfTestDocuments !== null) {
        contents.NumberOfTestDocuments = output.NumberOfTestDocuments;
    }
    if (output.NumberOfTrainedDocuments !== undefined &&
        output.NumberOfTrainedDocuments !== null) {
        contents.NumberOfTrainedDocuments = output.NumberOfTrainedDocuments;
    }
    return contents;
};
const deserializeAws_json1_1ClassifyDocumentResponse = (output, context) => {
    let contents = {
        __type: "ClassifyDocumentResponse",
        Classes: undefined,
        Labels: undefined
    };
    if (output.Classes !== undefined && output.Classes !== null) {
        contents.Classes = deserializeAws_json1_1ListOfClasses(output.Classes, context);
    }
    if (output.Labels !== undefined && output.Labels !== null) {
        contents.Labels = deserializeAws_json1_1ListOfLabels(output.Labels, context);
    }
    return contents;
};
const deserializeAws_json1_1ConcurrentModificationException = (output, context) => {
    let contents = {
        __type: "ConcurrentModificationException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1CreateDocumentClassifierResponse = (output, context) => {
    let contents = {
        __type: "CreateDocumentClassifierResponse",
        DocumentClassifierArn: undefined
    };
    if (output.DocumentClassifierArn !== undefined &&
        output.DocumentClassifierArn !== null) {
        contents.DocumentClassifierArn = output.DocumentClassifierArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateEndpointResponse = (output, context) => {
    let contents = {
        __type: "CreateEndpointResponse",
        EndpointArn: undefined
    };
    if (output.EndpointArn !== undefined && output.EndpointArn !== null) {
        contents.EndpointArn = output.EndpointArn;
    }
    return contents;
};
const deserializeAws_json1_1CreateEntityRecognizerResponse = (output, context) => {
    let contents = {
        __type: "CreateEntityRecognizerResponse",
        EntityRecognizerArn: undefined
    };
    if (output.EntityRecognizerArn !== undefined &&
        output.EntityRecognizerArn !== null) {
        contents.EntityRecognizerArn = output.EntityRecognizerArn;
    }
    return contents;
};
const deserializeAws_json1_1DeleteDocumentClassifierResponse = (output, context) => {
    let contents = {
        __type: "DeleteDocumentClassifierResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteEndpointResponse = (output, context) => {
    let contents = {
        __type: "DeleteEndpointResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteEntityRecognizerResponse = (output, context) => {
    let contents = {
        __type: "DeleteEntityRecognizerResponse"
    };
    return contents;
};
const deserializeAws_json1_1DescribeDocumentClassificationJobResponse = (output, context) => {
    let contents = {
        __type: "DescribeDocumentClassificationJobResponse",
        DocumentClassificationJobProperties: undefined
    };
    if (output.DocumentClassificationJobProperties !== undefined &&
        output.DocumentClassificationJobProperties !== null) {
        contents.DocumentClassificationJobProperties = deserializeAws_json1_1DocumentClassificationJobProperties(output.DocumentClassificationJobProperties, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeDocumentClassifierResponse = (output, context) => {
    let contents = {
        __type: "DescribeDocumentClassifierResponse",
        DocumentClassifierProperties: undefined
    };
    if (output.DocumentClassifierProperties !== undefined &&
        output.DocumentClassifierProperties !== null) {
        contents.DocumentClassifierProperties = deserializeAws_json1_1DocumentClassifierProperties(output.DocumentClassifierProperties, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeDominantLanguageDetectionJobResponse = (output, context) => {
    let contents = {
        __type: "DescribeDominantLanguageDetectionJobResponse",
        DominantLanguageDetectionJobProperties: undefined
    };
    if (output.DominantLanguageDetectionJobProperties !== undefined &&
        output.DominantLanguageDetectionJobProperties !== null) {
        contents.DominantLanguageDetectionJobProperties = deserializeAws_json1_1DominantLanguageDetectionJobProperties(output.DominantLanguageDetectionJobProperties, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeEndpointResponse = (output, context) => {
    let contents = {
        __type: "DescribeEndpointResponse",
        EndpointProperties: undefined
    };
    if (output.EndpointProperties !== undefined &&
        output.EndpointProperties !== null) {
        contents.EndpointProperties = deserializeAws_json1_1EndpointProperties(output.EndpointProperties, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeEntitiesDetectionJobResponse = (output, context) => {
    let contents = {
        __type: "DescribeEntitiesDetectionJobResponse",
        EntitiesDetectionJobProperties: undefined
    };
    if (output.EntitiesDetectionJobProperties !== undefined &&
        output.EntitiesDetectionJobProperties !== null) {
        contents.EntitiesDetectionJobProperties = deserializeAws_json1_1EntitiesDetectionJobProperties(output.EntitiesDetectionJobProperties, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeEntityRecognizerResponse = (output, context) => {
    let contents = {
        __type: "DescribeEntityRecognizerResponse",
        EntityRecognizerProperties: undefined
    };
    if (output.EntityRecognizerProperties !== undefined &&
        output.EntityRecognizerProperties !== null) {
        contents.EntityRecognizerProperties = deserializeAws_json1_1EntityRecognizerProperties(output.EntityRecognizerProperties, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeKeyPhrasesDetectionJobResponse = (output, context) => {
    let contents = {
        __type: "DescribeKeyPhrasesDetectionJobResponse",
        KeyPhrasesDetectionJobProperties: undefined
    };
    if (output.KeyPhrasesDetectionJobProperties !== undefined &&
        output.KeyPhrasesDetectionJobProperties !== null) {
        contents.KeyPhrasesDetectionJobProperties = deserializeAws_json1_1KeyPhrasesDetectionJobProperties(output.KeyPhrasesDetectionJobProperties, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeSentimentDetectionJobResponse = (output, context) => {
    let contents = {
        __type: "DescribeSentimentDetectionJobResponse",
        SentimentDetectionJobProperties: undefined
    };
    if (output.SentimentDetectionJobProperties !== undefined &&
        output.SentimentDetectionJobProperties !== null) {
        contents.SentimentDetectionJobProperties = deserializeAws_json1_1SentimentDetectionJobProperties(output.SentimentDetectionJobProperties, context);
    }
    return contents;
};
const deserializeAws_json1_1DescribeTopicsDetectionJobResponse = (output, context) => {
    let contents = {
        __type: "DescribeTopicsDetectionJobResponse",
        TopicsDetectionJobProperties: undefined
    };
    if (output.TopicsDetectionJobProperties !== undefined &&
        output.TopicsDetectionJobProperties !== null) {
        contents.TopicsDetectionJobProperties = deserializeAws_json1_1TopicsDetectionJobProperties(output.TopicsDetectionJobProperties, context);
    }
    return contents;
};
const deserializeAws_json1_1DetectDominantLanguageResponse = (output, context) => {
    let contents = {
        __type: "DetectDominantLanguageResponse",
        Languages: undefined
    };
    if (output.Languages !== undefined && output.Languages !== null) {
        contents.Languages = deserializeAws_json1_1ListOfDominantLanguages(output.Languages, context);
    }
    return contents;
};
const deserializeAws_json1_1DetectEntitiesResponse = (output, context) => {
    let contents = {
        __type: "DetectEntitiesResponse",
        Entities: undefined
    };
    if (output.Entities !== undefined && output.Entities !== null) {
        contents.Entities = deserializeAws_json1_1ListOfEntities(output.Entities, context);
    }
    return contents;
};
const deserializeAws_json1_1DetectKeyPhrasesResponse = (output, context) => {
    let contents = {
        __type: "DetectKeyPhrasesResponse",
        KeyPhrases: undefined
    };
    if (output.KeyPhrases !== undefined && output.KeyPhrases !== null) {
        contents.KeyPhrases = deserializeAws_json1_1ListOfKeyPhrases(output.KeyPhrases, context);
    }
    return contents;
};
const deserializeAws_json1_1DetectSentimentResponse = (output, context) => {
    let contents = {
        __type: "DetectSentimentResponse",
        Sentiment: undefined,
        SentimentScore: undefined
    };
    if (output.Sentiment !== undefined && output.Sentiment !== null) {
        contents.Sentiment = output.Sentiment;
    }
    if (output.SentimentScore !== undefined && output.SentimentScore !== null) {
        contents.SentimentScore = deserializeAws_json1_1SentimentScore(output.SentimentScore, context);
    }
    return contents;
};
const deserializeAws_json1_1DetectSyntaxResponse = (output, context) => {
    let contents = {
        __type: "DetectSyntaxResponse",
        SyntaxTokens: undefined
    };
    if (output.SyntaxTokens !== undefined && output.SyntaxTokens !== null) {
        contents.SyntaxTokens = deserializeAws_json1_1ListOfSyntaxTokens(output.SyntaxTokens, context);
    }
    return contents;
};
const deserializeAws_json1_1DocumentClass = (output, context) => {
    let contents = {
        __type: "DocumentClass",
        Name: undefined,
        Score: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Score !== undefined && output.Score !== null) {
        contents.Score = output.Score;
    }
    return contents;
};
const deserializeAws_json1_1DocumentClassificationJobProperties = (output, context) => {
    let contents = {
        __type: "DocumentClassificationJobProperties",
        DataAccessRoleArn: undefined,
        DocumentClassifierArn: undefined,
        EndTime: undefined,
        InputDataConfig: undefined,
        JobId: undefined,
        JobName: undefined,
        JobStatus: undefined,
        Message: undefined,
        OutputDataConfig: undefined,
        SubmitTime: undefined,
        VolumeKmsKeyId: undefined,
        VpcConfig: undefined
    };
    if (output.DataAccessRoleArn !== undefined &&
        output.DataAccessRoleArn !== null) {
        contents.DataAccessRoleArn = output.DataAccessRoleArn;
    }
    if (output.DocumentClassifierArn !== undefined &&
        output.DocumentClassifierArn !== null) {
        contents.DocumentClassifierArn = output.DocumentClassifierArn;
    }
    if (output.EndTime !== undefined && output.EndTime !== null) {
        contents.EndTime = new Date(Math.round(output.EndTime * 1000));
    }
    if (output.InputDataConfig !== undefined && output.InputDataConfig !== null) {
        contents.InputDataConfig = deserializeAws_json1_1InputDataConfig(output.InputDataConfig, context);
    }
    if (output.JobId !== undefined && output.JobId !== null) {
        contents.JobId = output.JobId;
    }
    if (output.JobName !== undefined && output.JobName !== null) {
        contents.JobName = output.JobName;
    }
    if (output.JobStatus !== undefined && output.JobStatus !== null) {
        contents.JobStatus = output.JobStatus;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.OutputDataConfig !== undefined &&
        output.OutputDataConfig !== null) {
        contents.OutputDataConfig = deserializeAws_json1_1OutputDataConfig(output.OutputDataConfig, context);
    }
    if (output.SubmitTime !== undefined && output.SubmitTime !== null) {
        contents.SubmitTime = new Date(Math.round(output.SubmitTime * 1000));
    }
    if (output.VolumeKmsKeyId !== undefined && output.VolumeKmsKeyId !== null) {
        contents.VolumeKmsKeyId = output.VolumeKmsKeyId;
    }
    if (output.VpcConfig !== undefined && output.VpcConfig !== null) {
        contents.VpcConfig = deserializeAws_json1_1VpcConfig(output.VpcConfig, context);
    }
    return contents;
};
const deserializeAws_json1_1DocumentClassificationJobPropertiesList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DocumentClassificationJobProperties(entry, context));
};
const deserializeAws_json1_1DocumentClassifierInputDataConfig = (output, context) => {
    let contents = {
        __type: "DocumentClassifierInputDataConfig",
        LabelDelimiter: undefined,
        S3Uri: undefined
    };
    if (output.LabelDelimiter !== undefined && output.LabelDelimiter !== null) {
        contents.LabelDelimiter = output.LabelDelimiter;
    }
    if (output.S3Uri !== undefined && output.S3Uri !== null) {
        contents.S3Uri = output.S3Uri;
    }
    return contents;
};
const deserializeAws_json1_1DocumentClassifierOutputDataConfig = (output, context) => {
    let contents = {
        __type: "DocumentClassifierOutputDataConfig",
        KmsKeyId: undefined,
        S3Uri: undefined
    };
    if (output.KmsKeyId !== undefined && output.KmsKeyId !== null) {
        contents.KmsKeyId = output.KmsKeyId;
    }
    if (output.S3Uri !== undefined && output.S3Uri !== null) {
        contents.S3Uri = output.S3Uri;
    }
    return contents;
};
const deserializeAws_json1_1DocumentClassifierProperties = (output, context) => {
    let contents = {
        __type: "DocumentClassifierProperties",
        ClassifierMetadata: undefined,
        DataAccessRoleArn: undefined,
        DocumentClassifierArn: undefined,
        EndTime: undefined,
        InputDataConfig: undefined,
        LanguageCode: undefined,
        Message: undefined,
        Mode: undefined,
        OutputDataConfig: undefined,
        Status: undefined,
        SubmitTime: undefined,
        TrainingEndTime: undefined,
        TrainingStartTime: undefined,
        VolumeKmsKeyId: undefined,
        VpcConfig: undefined
    };
    if (output.ClassifierMetadata !== undefined &&
        output.ClassifierMetadata !== null) {
        contents.ClassifierMetadata = deserializeAws_json1_1ClassifierMetadata(output.ClassifierMetadata, context);
    }
    if (output.DataAccessRoleArn !== undefined &&
        output.DataAccessRoleArn !== null) {
        contents.DataAccessRoleArn = output.DataAccessRoleArn;
    }
    if (output.DocumentClassifierArn !== undefined &&
        output.DocumentClassifierArn !== null) {
        contents.DocumentClassifierArn = output.DocumentClassifierArn;
    }
    if (output.EndTime !== undefined && output.EndTime !== null) {
        contents.EndTime = new Date(Math.round(output.EndTime * 1000));
    }
    if (output.InputDataConfig !== undefined && output.InputDataConfig !== null) {
        contents.InputDataConfig = deserializeAws_json1_1DocumentClassifierInputDataConfig(output.InputDataConfig, context);
    }
    if (output.LanguageCode !== undefined && output.LanguageCode !== null) {
        contents.LanguageCode = output.LanguageCode;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.Mode !== undefined && output.Mode !== null) {
        contents.Mode = output.Mode;
    }
    if (output.OutputDataConfig !== undefined &&
        output.OutputDataConfig !== null) {
        contents.OutputDataConfig = deserializeAws_json1_1DocumentClassifierOutputDataConfig(output.OutputDataConfig, context);
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.SubmitTime !== undefined && output.SubmitTime !== null) {
        contents.SubmitTime = new Date(Math.round(output.SubmitTime * 1000));
    }
    if (output.TrainingEndTime !== undefined && output.TrainingEndTime !== null) {
        contents.TrainingEndTime = new Date(Math.round(output.TrainingEndTime * 1000));
    }
    if (output.TrainingStartTime !== undefined &&
        output.TrainingStartTime !== null) {
        contents.TrainingStartTime = new Date(Math.round(output.TrainingStartTime * 1000));
    }
    if (output.VolumeKmsKeyId !== undefined && output.VolumeKmsKeyId !== null) {
        contents.VolumeKmsKeyId = output.VolumeKmsKeyId;
    }
    if (output.VpcConfig !== undefined && output.VpcConfig !== null) {
        contents.VpcConfig = deserializeAws_json1_1VpcConfig(output.VpcConfig, context);
    }
    return contents;
};
const deserializeAws_json1_1DocumentClassifierPropertiesList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DocumentClassifierProperties(entry, context));
};
const deserializeAws_json1_1DocumentLabel = (output, context) => {
    let contents = {
        __type: "DocumentLabel",
        Name: undefined,
        Score: undefined
    };
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Score !== undefined && output.Score !== null) {
        contents.Score = output.Score;
    }
    return contents;
};
const deserializeAws_json1_1DominantLanguage = (output, context) => {
    let contents = {
        __type: "DominantLanguage",
        LanguageCode: undefined,
        Score: undefined
    };
    if (output.LanguageCode !== undefined && output.LanguageCode !== null) {
        contents.LanguageCode = output.LanguageCode;
    }
    if (output.Score !== undefined && output.Score !== null) {
        contents.Score = output.Score;
    }
    return contents;
};
const deserializeAws_json1_1DominantLanguageDetectionJobProperties = (output, context) => {
    let contents = {
        __type: "DominantLanguageDetectionJobProperties",
        DataAccessRoleArn: undefined,
        EndTime: undefined,
        InputDataConfig: undefined,
        JobId: undefined,
        JobName: undefined,
        JobStatus: undefined,
        Message: undefined,
        OutputDataConfig: undefined,
        SubmitTime: undefined,
        VolumeKmsKeyId: undefined,
        VpcConfig: undefined
    };
    if (output.DataAccessRoleArn !== undefined &&
        output.DataAccessRoleArn !== null) {
        contents.DataAccessRoleArn = output.DataAccessRoleArn;
    }
    if (output.EndTime !== undefined && output.EndTime !== null) {
        contents.EndTime = new Date(Math.round(output.EndTime * 1000));
    }
    if (output.InputDataConfig !== undefined && output.InputDataConfig !== null) {
        contents.InputDataConfig = deserializeAws_json1_1InputDataConfig(output.InputDataConfig, context);
    }
    if (output.JobId !== undefined && output.JobId !== null) {
        contents.JobId = output.JobId;
    }
    if (output.JobName !== undefined && output.JobName !== null) {
        contents.JobName = output.JobName;
    }
    if (output.JobStatus !== undefined && output.JobStatus !== null) {
        contents.JobStatus = output.JobStatus;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.OutputDataConfig !== undefined &&
        output.OutputDataConfig !== null) {
        contents.OutputDataConfig = deserializeAws_json1_1OutputDataConfig(output.OutputDataConfig, context);
    }
    if (output.SubmitTime !== undefined && output.SubmitTime !== null) {
        contents.SubmitTime = new Date(Math.round(output.SubmitTime * 1000));
    }
    if (output.VolumeKmsKeyId !== undefined && output.VolumeKmsKeyId !== null) {
        contents.VolumeKmsKeyId = output.VolumeKmsKeyId;
    }
    if (output.VpcConfig !== undefined && output.VpcConfig !== null) {
        contents.VpcConfig = deserializeAws_json1_1VpcConfig(output.VpcConfig, context);
    }
    return contents;
};
const deserializeAws_json1_1DominantLanguageDetectionJobPropertiesList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DominantLanguageDetectionJobProperties(entry, context));
};
const deserializeAws_json1_1EndpointProperties = (output, context) => {
    let contents = {
        __type: "EndpointProperties",
        CreationTime: undefined,
        CurrentInferenceUnits: undefined,
        DesiredInferenceUnits: undefined,
        EndpointArn: undefined,
        LastModifiedTime: undefined,
        Message: undefined,
        ModelArn: undefined,
        Status: undefined
    };
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.CurrentInferenceUnits !== undefined &&
        output.CurrentInferenceUnits !== null) {
        contents.CurrentInferenceUnits = output.CurrentInferenceUnits;
    }
    if (output.DesiredInferenceUnits !== undefined &&
        output.DesiredInferenceUnits !== null) {
        contents.DesiredInferenceUnits = output.DesiredInferenceUnits;
    }
    if (output.EndpointArn !== undefined && output.EndpointArn !== null) {
        contents.EndpointArn = output.EndpointArn;
    }
    if (output.LastModifiedTime !== undefined &&
        output.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(output.LastModifiedTime * 1000));
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.ModelArn !== undefined && output.ModelArn !== null) {
        contents.ModelArn = output.ModelArn;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    return contents;
};
const deserializeAws_json1_1EndpointPropertiesList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EndpointProperties(entry, context));
};
const deserializeAws_json1_1EntitiesDetectionJobProperties = (output, context) => {
    let contents = {
        __type: "EntitiesDetectionJobProperties",
        DataAccessRoleArn: undefined,
        EndTime: undefined,
        EntityRecognizerArn: undefined,
        InputDataConfig: undefined,
        JobId: undefined,
        JobName: undefined,
        JobStatus: undefined,
        LanguageCode: undefined,
        Message: undefined,
        OutputDataConfig: undefined,
        SubmitTime: undefined,
        VolumeKmsKeyId: undefined,
        VpcConfig: undefined
    };
    if (output.DataAccessRoleArn !== undefined &&
        output.DataAccessRoleArn !== null) {
        contents.DataAccessRoleArn = output.DataAccessRoleArn;
    }
    if (output.EndTime !== undefined && output.EndTime !== null) {
        contents.EndTime = new Date(Math.round(output.EndTime * 1000));
    }
    if (output.EntityRecognizerArn !== undefined &&
        output.EntityRecognizerArn !== null) {
        contents.EntityRecognizerArn = output.EntityRecognizerArn;
    }
    if (output.InputDataConfig !== undefined && output.InputDataConfig !== null) {
        contents.InputDataConfig = deserializeAws_json1_1InputDataConfig(output.InputDataConfig, context);
    }
    if (output.JobId !== undefined && output.JobId !== null) {
        contents.JobId = output.JobId;
    }
    if (output.JobName !== undefined && output.JobName !== null) {
        contents.JobName = output.JobName;
    }
    if (output.JobStatus !== undefined && output.JobStatus !== null) {
        contents.JobStatus = output.JobStatus;
    }
    if (output.LanguageCode !== undefined && output.LanguageCode !== null) {
        contents.LanguageCode = output.LanguageCode;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.OutputDataConfig !== undefined &&
        output.OutputDataConfig !== null) {
        contents.OutputDataConfig = deserializeAws_json1_1OutputDataConfig(output.OutputDataConfig, context);
    }
    if (output.SubmitTime !== undefined && output.SubmitTime !== null) {
        contents.SubmitTime = new Date(Math.round(output.SubmitTime * 1000));
    }
    if (output.VolumeKmsKeyId !== undefined && output.VolumeKmsKeyId !== null) {
        contents.VolumeKmsKeyId = output.VolumeKmsKeyId;
    }
    if (output.VpcConfig !== undefined && output.VpcConfig !== null) {
        contents.VpcConfig = deserializeAws_json1_1VpcConfig(output.VpcConfig, context);
    }
    return contents;
};
const deserializeAws_json1_1EntitiesDetectionJobPropertiesList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EntitiesDetectionJobProperties(entry, context));
};
const deserializeAws_json1_1Entity = (output, context) => {
    let contents = {
        __type: "Entity",
        BeginOffset: undefined,
        EndOffset: undefined,
        Score: undefined,
        Text: undefined,
        Type: undefined
    };
    if (output.BeginOffset !== undefined && output.BeginOffset !== null) {
        contents.BeginOffset = output.BeginOffset;
    }
    if (output.EndOffset !== undefined && output.EndOffset !== null) {
        contents.EndOffset = output.EndOffset;
    }
    if (output.Score !== undefined && output.Score !== null) {
        contents.Score = output.Score;
    }
    if (output.Text !== undefined && output.Text !== null) {
        contents.Text = output.Text;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1EntityRecognizerAnnotations = (output, context) => {
    let contents = {
        __type: "EntityRecognizerAnnotations",
        S3Uri: undefined
    };
    if (output.S3Uri !== undefined && output.S3Uri !== null) {
        contents.S3Uri = output.S3Uri;
    }
    return contents;
};
const deserializeAws_json1_1EntityRecognizerDocuments = (output, context) => {
    let contents = {
        __type: "EntityRecognizerDocuments",
        S3Uri: undefined
    };
    if (output.S3Uri !== undefined && output.S3Uri !== null) {
        contents.S3Uri = output.S3Uri;
    }
    return contents;
};
const deserializeAws_json1_1EntityRecognizerEntityList = (output, context) => {
    let contents = {
        __type: "EntityRecognizerEntityList",
        S3Uri: undefined
    };
    if (output.S3Uri !== undefined && output.S3Uri !== null) {
        contents.S3Uri = output.S3Uri;
    }
    return contents;
};
const deserializeAws_json1_1EntityRecognizerEvaluationMetrics = (output, context) => {
    let contents = {
        __type: "EntityRecognizerEvaluationMetrics",
        F1Score: undefined,
        Precision: undefined,
        Recall: undefined
    };
    if (output.F1Score !== undefined && output.F1Score !== null) {
        contents.F1Score = output.F1Score;
    }
    if (output.Precision !== undefined && output.Precision !== null) {
        contents.Precision = output.Precision;
    }
    if (output.Recall !== undefined && output.Recall !== null) {
        contents.Recall = output.Recall;
    }
    return contents;
};
const deserializeAws_json1_1EntityRecognizerInputDataConfig = (output, context) => {
    let contents = {
        __type: "EntityRecognizerInputDataConfig",
        Annotations: undefined,
        Documents: undefined,
        EntityList: undefined,
        EntityTypes: undefined
    };
    if (output.Annotations !== undefined && output.Annotations !== null) {
        contents.Annotations = deserializeAws_json1_1EntityRecognizerAnnotations(output.Annotations, context);
    }
    if (output.Documents !== undefined && output.Documents !== null) {
        contents.Documents = deserializeAws_json1_1EntityRecognizerDocuments(output.Documents, context);
    }
    if (output.EntityList !== undefined && output.EntityList !== null) {
        contents.EntityList = deserializeAws_json1_1EntityRecognizerEntityList(output.EntityList, context);
    }
    if (output.EntityTypes !== undefined && output.EntityTypes !== null) {
        contents.EntityTypes = deserializeAws_json1_1EntityTypesList(output.EntityTypes, context);
    }
    return contents;
};
const deserializeAws_json1_1EntityRecognizerMetadata = (output, context) => {
    let contents = {
        __type: "EntityRecognizerMetadata",
        EntityTypes: undefined,
        EvaluationMetrics: undefined,
        NumberOfTestDocuments: undefined,
        NumberOfTrainedDocuments: undefined
    };
    if (output.EntityTypes !== undefined && output.EntityTypes !== null) {
        contents.EntityTypes = deserializeAws_json1_1EntityRecognizerMetadataEntityTypesList(output.EntityTypes, context);
    }
    if (output.EvaluationMetrics !== undefined &&
        output.EvaluationMetrics !== null) {
        contents.EvaluationMetrics = deserializeAws_json1_1EntityRecognizerEvaluationMetrics(output.EvaluationMetrics, context);
    }
    if (output.NumberOfTestDocuments !== undefined &&
        output.NumberOfTestDocuments !== null) {
        contents.NumberOfTestDocuments = output.NumberOfTestDocuments;
    }
    if (output.NumberOfTrainedDocuments !== undefined &&
        output.NumberOfTrainedDocuments !== null) {
        contents.NumberOfTrainedDocuments = output.NumberOfTrainedDocuments;
    }
    return contents;
};
const deserializeAws_json1_1EntityRecognizerMetadataEntityTypesList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EntityRecognizerMetadataEntityTypesListItem(entry, context));
};
const deserializeAws_json1_1EntityRecognizerMetadataEntityTypesListItem = (output, context) => {
    let contents = {
        __type: "EntityRecognizerMetadataEntityTypesListItem",
        EvaluationMetrics: undefined,
        NumberOfTrainMentions: undefined,
        Type: undefined
    };
    if (output.EvaluationMetrics !== undefined &&
        output.EvaluationMetrics !== null) {
        contents.EvaluationMetrics = deserializeAws_json1_1EntityTypesEvaluationMetrics(output.EvaluationMetrics, context);
    }
    if (output.NumberOfTrainMentions !== undefined &&
        output.NumberOfTrainMentions !== null) {
        contents.NumberOfTrainMentions = output.NumberOfTrainMentions;
    }
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1EntityRecognizerProperties = (output, context) => {
    let contents = {
        __type: "EntityRecognizerProperties",
        DataAccessRoleArn: undefined,
        EndTime: undefined,
        EntityRecognizerArn: undefined,
        InputDataConfig: undefined,
        LanguageCode: undefined,
        Message: undefined,
        RecognizerMetadata: undefined,
        Status: undefined,
        SubmitTime: undefined,
        TrainingEndTime: undefined,
        TrainingStartTime: undefined,
        VolumeKmsKeyId: undefined,
        VpcConfig: undefined
    };
    if (output.DataAccessRoleArn !== undefined &&
        output.DataAccessRoleArn !== null) {
        contents.DataAccessRoleArn = output.DataAccessRoleArn;
    }
    if (output.EndTime !== undefined && output.EndTime !== null) {
        contents.EndTime = new Date(Math.round(output.EndTime * 1000));
    }
    if (output.EntityRecognizerArn !== undefined &&
        output.EntityRecognizerArn !== null) {
        contents.EntityRecognizerArn = output.EntityRecognizerArn;
    }
    if (output.InputDataConfig !== undefined && output.InputDataConfig !== null) {
        contents.InputDataConfig = deserializeAws_json1_1EntityRecognizerInputDataConfig(output.InputDataConfig, context);
    }
    if (output.LanguageCode !== undefined && output.LanguageCode !== null) {
        contents.LanguageCode = output.LanguageCode;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.RecognizerMetadata !== undefined &&
        output.RecognizerMetadata !== null) {
        contents.RecognizerMetadata = deserializeAws_json1_1EntityRecognizerMetadata(output.RecognizerMetadata, context);
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.SubmitTime !== undefined && output.SubmitTime !== null) {
        contents.SubmitTime = new Date(Math.round(output.SubmitTime * 1000));
    }
    if (output.TrainingEndTime !== undefined && output.TrainingEndTime !== null) {
        contents.TrainingEndTime = new Date(Math.round(output.TrainingEndTime * 1000));
    }
    if (output.TrainingStartTime !== undefined &&
        output.TrainingStartTime !== null) {
        contents.TrainingStartTime = new Date(Math.round(output.TrainingStartTime * 1000));
    }
    if (output.VolumeKmsKeyId !== undefined && output.VolumeKmsKeyId !== null) {
        contents.VolumeKmsKeyId = output.VolumeKmsKeyId;
    }
    if (output.VpcConfig !== undefined && output.VpcConfig !== null) {
        contents.VpcConfig = deserializeAws_json1_1VpcConfig(output.VpcConfig, context);
    }
    return contents;
};
const deserializeAws_json1_1EntityRecognizerPropertiesList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EntityRecognizerProperties(entry, context));
};
const deserializeAws_json1_1EntityTypesEvaluationMetrics = (output, context) => {
    let contents = {
        __type: "EntityTypesEvaluationMetrics",
        F1Score: undefined,
        Precision: undefined,
        Recall: undefined
    };
    if (output.F1Score !== undefined && output.F1Score !== null) {
        contents.F1Score = output.F1Score;
    }
    if (output.Precision !== undefined && output.Precision !== null) {
        contents.Precision = output.Precision;
    }
    if (output.Recall !== undefined && output.Recall !== null) {
        contents.Recall = output.Recall;
    }
    return contents;
};
const deserializeAws_json1_1EntityTypesList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1EntityTypesListItem(entry, context));
};
const deserializeAws_json1_1EntityTypesListItem = (output, context) => {
    let contents = {
        __type: "EntityTypesListItem",
        Type: undefined
    };
    if (output.Type !== undefined && output.Type !== null) {
        contents.Type = output.Type;
    }
    return contents;
};
const deserializeAws_json1_1InputDataConfig = (output, context) => {
    let contents = {
        __type: "InputDataConfig",
        InputFormat: undefined,
        S3Uri: undefined
    };
    if (output.InputFormat !== undefined && output.InputFormat !== null) {
        contents.InputFormat = output.InputFormat;
    }
    if (output.S3Uri !== undefined && output.S3Uri !== null) {
        contents.S3Uri = output.S3Uri;
    }
    return contents;
};
const deserializeAws_json1_1InternalServerException = (output, context) => {
    let contents = {
        __type: "InternalServerException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidFilterException = (output, context) => {
    let contents = {
        __type: "InvalidFilterException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidRequestException = (output, context) => {
    let contents = {
        __type: "InvalidRequestException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1JobNotFoundException = (output, context) => {
    let contents = {
        __type: "JobNotFoundException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1KeyPhrase = (output, context) => {
    let contents = {
        __type: "KeyPhrase",
        BeginOffset: undefined,
        EndOffset: undefined,
        Score: undefined,
        Text: undefined
    };
    if (output.BeginOffset !== undefined && output.BeginOffset !== null) {
        contents.BeginOffset = output.BeginOffset;
    }
    if (output.EndOffset !== undefined && output.EndOffset !== null) {
        contents.EndOffset = output.EndOffset;
    }
    if (output.Score !== undefined && output.Score !== null) {
        contents.Score = output.Score;
    }
    if (output.Text !== undefined && output.Text !== null) {
        contents.Text = output.Text;
    }
    return contents;
};
const deserializeAws_json1_1KeyPhrasesDetectionJobProperties = (output, context) => {
    let contents = {
        __type: "KeyPhrasesDetectionJobProperties",
        DataAccessRoleArn: undefined,
        EndTime: undefined,
        InputDataConfig: undefined,
        JobId: undefined,
        JobName: undefined,
        JobStatus: undefined,
        LanguageCode: undefined,
        Message: undefined,
        OutputDataConfig: undefined,
        SubmitTime: undefined,
        VolumeKmsKeyId: undefined,
        VpcConfig: undefined
    };
    if (output.DataAccessRoleArn !== undefined &&
        output.DataAccessRoleArn !== null) {
        contents.DataAccessRoleArn = output.DataAccessRoleArn;
    }
    if (output.EndTime !== undefined && output.EndTime !== null) {
        contents.EndTime = new Date(Math.round(output.EndTime * 1000));
    }
    if (output.InputDataConfig !== undefined && output.InputDataConfig !== null) {
        contents.InputDataConfig = deserializeAws_json1_1InputDataConfig(output.InputDataConfig, context);
    }
    if (output.JobId !== undefined && output.JobId !== null) {
        contents.JobId = output.JobId;
    }
    if (output.JobName !== undefined && output.JobName !== null) {
        contents.JobName = output.JobName;
    }
    if (output.JobStatus !== undefined && output.JobStatus !== null) {
        contents.JobStatus = output.JobStatus;
    }
    if (output.LanguageCode !== undefined && output.LanguageCode !== null) {
        contents.LanguageCode = output.LanguageCode;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.OutputDataConfig !== undefined &&
        output.OutputDataConfig !== null) {
        contents.OutputDataConfig = deserializeAws_json1_1OutputDataConfig(output.OutputDataConfig, context);
    }
    if (output.SubmitTime !== undefined && output.SubmitTime !== null) {
        contents.SubmitTime = new Date(Math.round(output.SubmitTime * 1000));
    }
    if (output.VolumeKmsKeyId !== undefined && output.VolumeKmsKeyId !== null) {
        contents.VolumeKmsKeyId = output.VolumeKmsKeyId;
    }
    if (output.VpcConfig !== undefined && output.VpcConfig !== null) {
        contents.VpcConfig = deserializeAws_json1_1VpcConfig(output.VpcConfig, context);
    }
    return contents;
};
const deserializeAws_json1_1KeyPhrasesDetectionJobPropertiesList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1KeyPhrasesDetectionJobProperties(entry, context));
};
const deserializeAws_json1_1KmsKeyValidationException = (output, context) => {
    let contents = {
        __type: "KmsKeyValidationException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ListDocumentClassificationJobsResponse = (output, context) => {
    let contents = {
        __type: "ListDocumentClassificationJobsResponse",
        DocumentClassificationJobPropertiesList: undefined,
        NextToken: undefined
    };
    if (output.DocumentClassificationJobPropertiesList !== undefined &&
        output.DocumentClassificationJobPropertiesList !== null) {
        contents.DocumentClassificationJobPropertiesList = deserializeAws_json1_1DocumentClassificationJobPropertiesList(output.DocumentClassificationJobPropertiesList, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListDocumentClassifiersResponse = (output, context) => {
    let contents = {
        __type: "ListDocumentClassifiersResponse",
        DocumentClassifierPropertiesList: undefined,
        NextToken: undefined
    };
    if (output.DocumentClassifierPropertiesList !== undefined &&
        output.DocumentClassifierPropertiesList !== null) {
        contents.DocumentClassifierPropertiesList = deserializeAws_json1_1DocumentClassifierPropertiesList(output.DocumentClassifierPropertiesList, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListDominantLanguageDetectionJobsResponse = (output, context) => {
    let contents = {
        __type: "ListDominantLanguageDetectionJobsResponse",
        DominantLanguageDetectionJobPropertiesList: undefined,
        NextToken: undefined
    };
    if (output.DominantLanguageDetectionJobPropertiesList !== undefined &&
        output.DominantLanguageDetectionJobPropertiesList !== null) {
        contents.DominantLanguageDetectionJobPropertiesList = deserializeAws_json1_1DominantLanguageDetectionJobPropertiesList(output.DominantLanguageDetectionJobPropertiesList, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListEndpointsResponse = (output, context) => {
    let contents = {
        __type: "ListEndpointsResponse",
        EndpointPropertiesList: undefined,
        NextToken: undefined
    };
    if (output.EndpointPropertiesList !== undefined &&
        output.EndpointPropertiesList !== null) {
        contents.EndpointPropertiesList = deserializeAws_json1_1EndpointPropertiesList(output.EndpointPropertiesList, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListEntitiesDetectionJobsResponse = (output, context) => {
    let contents = {
        __type: "ListEntitiesDetectionJobsResponse",
        EntitiesDetectionJobPropertiesList: undefined,
        NextToken: undefined
    };
    if (output.EntitiesDetectionJobPropertiesList !== undefined &&
        output.EntitiesDetectionJobPropertiesList !== null) {
        contents.EntitiesDetectionJobPropertiesList = deserializeAws_json1_1EntitiesDetectionJobPropertiesList(output.EntitiesDetectionJobPropertiesList, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListEntityRecognizersResponse = (output, context) => {
    let contents = {
        __type: "ListEntityRecognizersResponse",
        EntityRecognizerPropertiesList: undefined,
        NextToken: undefined
    };
    if (output.EntityRecognizerPropertiesList !== undefined &&
        output.EntityRecognizerPropertiesList !== null) {
        contents.EntityRecognizerPropertiesList = deserializeAws_json1_1EntityRecognizerPropertiesList(output.EntityRecognizerPropertiesList, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListKeyPhrasesDetectionJobsResponse = (output, context) => {
    let contents = {
        __type: "ListKeyPhrasesDetectionJobsResponse",
        KeyPhrasesDetectionJobPropertiesList: undefined,
        NextToken: undefined
    };
    if (output.KeyPhrasesDetectionJobPropertiesList !== undefined &&
        output.KeyPhrasesDetectionJobPropertiesList !== null) {
        contents.KeyPhrasesDetectionJobPropertiesList = deserializeAws_json1_1KeyPhrasesDetectionJobPropertiesList(output.KeyPhrasesDetectionJobPropertiesList, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListOfClasses = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DocumentClass(entry, context));
};
const deserializeAws_json1_1ListOfDetectDominantLanguageResult = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1BatchDetectDominantLanguageItemResult(entry, context));
};
const deserializeAws_json1_1ListOfDetectEntitiesResult = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1BatchDetectEntitiesItemResult(entry, context));
};
const deserializeAws_json1_1ListOfDetectKeyPhrasesResult = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1BatchDetectKeyPhrasesItemResult(entry, context));
};
const deserializeAws_json1_1ListOfDetectSentimentResult = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1BatchDetectSentimentItemResult(entry, context));
};
const deserializeAws_json1_1ListOfDetectSyntaxResult = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1BatchDetectSyntaxItemResult(entry, context));
};
const deserializeAws_json1_1ListOfDominantLanguages = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DominantLanguage(entry, context));
};
const deserializeAws_json1_1ListOfEntities = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Entity(entry, context));
};
const deserializeAws_json1_1ListOfKeyPhrases = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1KeyPhrase(entry, context));
};
const deserializeAws_json1_1ListOfLabels = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1DocumentLabel(entry, context));
};
const deserializeAws_json1_1ListOfSyntaxTokens = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SyntaxToken(entry, context));
};
const deserializeAws_json1_1ListSentimentDetectionJobsResponse = (output, context) => {
    let contents = {
        __type: "ListSentimentDetectionJobsResponse",
        NextToken: undefined,
        SentimentDetectionJobPropertiesList: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.SentimentDetectionJobPropertiesList !== undefined &&
        output.SentimentDetectionJobPropertiesList !== null) {
        contents.SentimentDetectionJobPropertiesList = deserializeAws_json1_1SentimentDetectionJobPropertiesList(output.SentimentDetectionJobPropertiesList, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    let contents = {
        __type: "ListTagsForResourceResponse",
        ResourceArn: undefined,
        Tags: undefined
    };
    if (output.ResourceArn !== undefined && output.ResourceArn !== null) {
        contents.ResourceArn = output.ResourceArn;
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
    }
    return contents;
};
const deserializeAws_json1_1ListTopicsDetectionJobsResponse = (output, context) => {
    let contents = {
        __type: "ListTopicsDetectionJobsResponse",
        NextToken: undefined,
        TopicsDetectionJobPropertiesList: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.TopicsDetectionJobPropertiesList !== undefined &&
        output.TopicsDetectionJobPropertiesList !== null) {
        contents.TopicsDetectionJobPropertiesList = deserializeAws_json1_1TopicsDetectionJobPropertiesList(output.TopicsDetectionJobPropertiesList, context);
    }
    return contents;
};
const deserializeAws_json1_1OutputDataConfig = (output, context) => {
    let contents = {
        __type: "OutputDataConfig",
        KmsKeyId: undefined,
        S3Uri: undefined
    };
    if (output.KmsKeyId !== undefined && output.KmsKeyId !== null) {
        contents.KmsKeyId = output.KmsKeyId;
    }
    if (output.S3Uri !== undefined && output.S3Uri !== null) {
        contents.S3Uri = output.S3Uri;
    }
    return contents;
};
const deserializeAws_json1_1PartOfSpeechTag = (output, context) => {
    let contents = {
        __type: "PartOfSpeechTag",
        Score: undefined,
        Tag: undefined
    };
    if (output.Score !== undefined && output.Score !== null) {
        contents.Score = output.Score;
    }
    if (output.Tag !== undefined && output.Tag !== null) {
        contents.Tag = output.Tag;
    }
    return contents;
};
const deserializeAws_json1_1ResourceInUseException = (output, context) => {
    let contents = {
        __type: "ResourceInUseException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1ResourceLimitExceededException = (output, context) => {
    let contents = {
        __type: "ResourceLimitExceededException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
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
const deserializeAws_json1_1ResourceUnavailableException = (output, context) => {
    let contents = {
        __type: "ResourceUnavailableException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1SecurityGroupIds = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1SentimentDetectionJobProperties = (output, context) => {
    let contents = {
        __type: "SentimentDetectionJobProperties",
        DataAccessRoleArn: undefined,
        EndTime: undefined,
        InputDataConfig: undefined,
        JobId: undefined,
        JobName: undefined,
        JobStatus: undefined,
        LanguageCode: undefined,
        Message: undefined,
        OutputDataConfig: undefined,
        SubmitTime: undefined,
        VolumeKmsKeyId: undefined,
        VpcConfig: undefined
    };
    if (output.DataAccessRoleArn !== undefined &&
        output.DataAccessRoleArn !== null) {
        contents.DataAccessRoleArn = output.DataAccessRoleArn;
    }
    if (output.EndTime !== undefined && output.EndTime !== null) {
        contents.EndTime = new Date(Math.round(output.EndTime * 1000));
    }
    if (output.InputDataConfig !== undefined && output.InputDataConfig !== null) {
        contents.InputDataConfig = deserializeAws_json1_1InputDataConfig(output.InputDataConfig, context);
    }
    if (output.JobId !== undefined && output.JobId !== null) {
        contents.JobId = output.JobId;
    }
    if (output.JobName !== undefined && output.JobName !== null) {
        contents.JobName = output.JobName;
    }
    if (output.JobStatus !== undefined && output.JobStatus !== null) {
        contents.JobStatus = output.JobStatus;
    }
    if (output.LanguageCode !== undefined && output.LanguageCode !== null) {
        contents.LanguageCode = output.LanguageCode;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.OutputDataConfig !== undefined &&
        output.OutputDataConfig !== null) {
        contents.OutputDataConfig = deserializeAws_json1_1OutputDataConfig(output.OutputDataConfig, context);
    }
    if (output.SubmitTime !== undefined && output.SubmitTime !== null) {
        contents.SubmitTime = new Date(Math.round(output.SubmitTime * 1000));
    }
    if (output.VolumeKmsKeyId !== undefined && output.VolumeKmsKeyId !== null) {
        contents.VolumeKmsKeyId = output.VolumeKmsKeyId;
    }
    if (output.VpcConfig !== undefined && output.VpcConfig !== null) {
        contents.VpcConfig = deserializeAws_json1_1VpcConfig(output.VpcConfig, context);
    }
    return contents;
};
const deserializeAws_json1_1SentimentDetectionJobPropertiesList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1SentimentDetectionJobProperties(entry, context));
};
const deserializeAws_json1_1SentimentScore = (output, context) => {
    let contents = {
        __type: "SentimentScore",
        Mixed: undefined,
        Negative: undefined,
        Neutral: undefined,
        Positive: undefined
    };
    if (output.Mixed !== undefined && output.Mixed !== null) {
        contents.Mixed = output.Mixed;
    }
    if (output.Negative !== undefined && output.Negative !== null) {
        contents.Negative = output.Negative;
    }
    if (output.Neutral !== undefined && output.Neutral !== null) {
        contents.Neutral = output.Neutral;
    }
    if (output.Positive !== undefined && output.Positive !== null) {
        contents.Positive = output.Positive;
    }
    return contents;
};
const deserializeAws_json1_1StartDocumentClassificationJobResponse = (output, context) => {
    let contents = {
        __type: "StartDocumentClassificationJobResponse",
        JobId: undefined,
        JobStatus: undefined
    };
    if (output.JobId !== undefined && output.JobId !== null) {
        contents.JobId = output.JobId;
    }
    if (output.JobStatus !== undefined && output.JobStatus !== null) {
        contents.JobStatus = output.JobStatus;
    }
    return contents;
};
const deserializeAws_json1_1StartDominantLanguageDetectionJobResponse = (output, context) => {
    let contents = {
        __type: "StartDominantLanguageDetectionJobResponse",
        JobId: undefined,
        JobStatus: undefined
    };
    if (output.JobId !== undefined && output.JobId !== null) {
        contents.JobId = output.JobId;
    }
    if (output.JobStatus !== undefined && output.JobStatus !== null) {
        contents.JobStatus = output.JobStatus;
    }
    return contents;
};
const deserializeAws_json1_1StartEntitiesDetectionJobResponse = (output, context) => {
    let contents = {
        __type: "StartEntitiesDetectionJobResponse",
        JobId: undefined,
        JobStatus: undefined
    };
    if (output.JobId !== undefined && output.JobId !== null) {
        contents.JobId = output.JobId;
    }
    if (output.JobStatus !== undefined && output.JobStatus !== null) {
        contents.JobStatus = output.JobStatus;
    }
    return contents;
};
const deserializeAws_json1_1StartKeyPhrasesDetectionJobResponse = (output, context) => {
    let contents = {
        __type: "StartKeyPhrasesDetectionJobResponse",
        JobId: undefined,
        JobStatus: undefined
    };
    if (output.JobId !== undefined && output.JobId !== null) {
        contents.JobId = output.JobId;
    }
    if (output.JobStatus !== undefined && output.JobStatus !== null) {
        contents.JobStatus = output.JobStatus;
    }
    return contents;
};
const deserializeAws_json1_1StartSentimentDetectionJobResponse = (output, context) => {
    let contents = {
        __type: "StartSentimentDetectionJobResponse",
        JobId: undefined,
        JobStatus: undefined
    };
    if (output.JobId !== undefined && output.JobId !== null) {
        contents.JobId = output.JobId;
    }
    if (output.JobStatus !== undefined && output.JobStatus !== null) {
        contents.JobStatus = output.JobStatus;
    }
    return contents;
};
const deserializeAws_json1_1StartTopicsDetectionJobResponse = (output, context) => {
    let contents = {
        __type: "StartTopicsDetectionJobResponse",
        JobId: undefined,
        JobStatus: undefined
    };
    if (output.JobId !== undefined && output.JobId !== null) {
        contents.JobId = output.JobId;
    }
    if (output.JobStatus !== undefined && output.JobStatus !== null) {
        contents.JobStatus = output.JobStatus;
    }
    return contents;
};
const deserializeAws_json1_1StopDominantLanguageDetectionJobResponse = (output, context) => {
    let contents = {
        __type: "StopDominantLanguageDetectionJobResponse",
        JobId: undefined,
        JobStatus: undefined
    };
    if (output.JobId !== undefined && output.JobId !== null) {
        contents.JobId = output.JobId;
    }
    if (output.JobStatus !== undefined && output.JobStatus !== null) {
        contents.JobStatus = output.JobStatus;
    }
    return contents;
};
const deserializeAws_json1_1StopEntitiesDetectionJobResponse = (output, context) => {
    let contents = {
        __type: "StopEntitiesDetectionJobResponse",
        JobId: undefined,
        JobStatus: undefined
    };
    if (output.JobId !== undefined && output.JobId !== null) {
        contents.JobId = output.JobId;
    }
    if (output.JobStatus !== undefined && output.JobStatus !== null) {
        contents.JobStatus = output.JobStatus;
    }
    return contents;
};
const deserializeAws_json1_1StopKeyPhrasesDetectionJobResponse = (output, context) => {
    let contents = {
        __type: "StopKeyPhrasesDetectionJobResponse",
        JobId: undefined,
        JobStatus: undefined
    };
    if (output.JobId !== undefined && output.JobId !== null) {
        contents.JobId = output.JobId;
    }
    if (output.JobStatus !== undefined && output.JobStatus !== null) {
        contents.JobStatus = output.JobStatus;
    }
    return contents;
};
const deserializeAws_json1_1StopSentimentDetectionJobResponse = (output, context) => {
    let contents = {
        __type: "StopSentimentDetectionJobResponse",
        JobId: undefined,
        JobStatus: undefined
    };
    if (output.JobId !== undefined && output.JobId !== null) {
        contents.JobId = output.JobId;
    }
    if (output.JobStatus !== undefined && output.JobStatus !== null) {
        contents.JobStatus = output.JobStatus;
    }
    return contents;
};
const deserializeAws_json1_1StopTrainingDocumentClassifierResponse = (output, context) => {
    let contents = {
        __type: "StopTrainingDocumentClassifierResponse"
    };
    return contents;
};
const deserializeAws_json1_1StopTrainingEntityRecognizerResponse = (output, context) => {
    let contents = {
        __type: "StopTrainingEntityRecognizerResponse"
    };
    return contents;
};
const deserializeAws_json1_1Subnets = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1SyntaxToken = (output, context) => {
    let contents = {
        __type: "SyntaxToken",
        BeginOffset: undefined,
        EndOffset: undefined,
        PartOfSpeech: undefined,
        Text: undefined,
        TokenId: undefined
    };
    if (output.BeginOffset !== undefined && output.BeginOffset !== null) {
        contents.BeginOffset = output.BeginOffset;
    }
    if (output.EndOffset !== undefined && output.EndOffset !== null) {
        contents.EndOffset = output.EndOffset;
    }
    if (output.PartOfSpeech !== undefined && output.PartOfSpeech !== null) {
        contents.PartOfSpeech = deserializeAws_json1_1PartOfSpeechTag(output.PartOfSpeech, context);
    }
    if (output.Text !== undefined && output.Text !== null) {
        contents.Text = output.Text;
    }
    if (output.TokenId !== undefined && output.TokenId !== null) {
        contents.TokenId = output.TokenId;
    }
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
const deserializeAws_json1_1TagList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Tag(entry, context));
};
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    let contents = {
        __type: "TagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1TextSizeLimitExceededException = (output, context) => {
    let contents = {
        __type: "TextSizeLimitExceededException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1TooManyRequestsException = (output, context) => {
    let contents = {
        __type: "TooManyRequestsException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1TooManyTagKeysException = (output, context) => {
    let contents = {
        __type: "TooManyTagKeysException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1TooManyTagsException = (output, context) => {
    let contents = {
        __type: "TooManyTagsException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1TopicsDetectionJobProperties = (output, context) => {
    let contents = {
        __type: "TopicsDetectionJobProperties",
        DataAccessRoleArn: undefined,
        EndTime: undefined,
        InputDataConfig: undefined,
        JobId: undefined,
        JobName: undefined,
        JobStatus: undefined,
        Message: undefined,
        NumberOfTopics: undefined,
        OutputDataConfig: undefined,
        SubmitTime: undefined,
        VolumeKmsKeyId: undefined,
        VpcConfig: undefined
    };
    if (output.DataAccessRoleArn !== undefined &&
        output.DataAccessRoleArn !== null) {
        contents.DataAccessRoleArn = output.DataAccessRoleArn;
    }
    if (output.EndTime !== undefined && output.EndTime !== null) {
        contents.EndTime = new Date(Math.round(output.EndTime * 1000));
    }
    if (output.InputDataConfig !== undefined && output.InputDataConfig !== null) {
        contents.InputDataConfig = deserializeAws_json1_1InputDataConfig(output.InputDataConfig, context);
    }
    if (output.JobId !== undefined && output.JobId !== null) {
        contents.JobId = output.JobId;
    }
    if (output.JobName !== undefined && output.JobName !== null) {
        contents.JobName = output.JobName;
    }
    if (output.JobStatus !== undefined && output.JobStatus !== null) {
        contents.JobStatus = output.JobStatus;
    }
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.NumberOfTopics !== undefined && output.NumberOfTopics !== null) {
        contents.NumberOfTopics = output.NumberOfTopics;
    }
    if (output.OutputDataConfig !== undefined &&
        output.OutputDataConfig !== null) {
        contents.OutputDataConfig = deserializeAws_json1_1OutputDataConfig(output.OutputDataConfig, context);
    }
    if (output.SubmitTime !== undefined && output.SubmitTime !== null) {
        contents.SubmitTime = new Date(Math.round(output.SubmitTime * 1000));
    }
    if (output.VolumeKmsKeyId !== undefined && output.VolumeKmsKeyId !== null) {
        contents.VolumeKmsKeyId = output.VolumeKmsKeyId;
    }
    if (output.VpcConfig !== undefined && output.VpcConfig !== null) {
        contents.VpcConfig = deserializeAws_json1_1VpcConfig(output.VpcConfig, context);
    }
    return contents;
};
const deserializeAws_json1_1TopicsDetectionJobPropertiesList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1TopicsDetectionJobProperties(entry, context));
};
const deserializeAws_json1_1UnsupportedLanguageException = (output, context) => {
    let contents = {
        __type: "UnsupportedLanguageException",
        Message: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    return contents;
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    let contents = {
        __type: "UntagResourceResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateEndpointResponse = (output, context) => {
    let contents = {
        __type: "UpdateEndpointResponse"
    };
    return contents;
};
const deserializeAws_json1_1VpcConfig = (output, context) => {
    let contents = {
        __type: "VpcConfig",
        SecurityGroupIds: undefined,
        Subnets: undefined
    };
    if (output.SecurityGroupIds !== undefined &&
        output.SecurityGroupIds !== null) {
        contents.SecurityGroupIds = deserializeAws_json1_1SecurityGroupIds(output.SecurityGroupIds, context);
    }
    if (output.Subnets !== undefined && output.Subnets !== null) {
        contents.Subnets = deserializeAws_json1_1Subnets(output.Subnets, context);
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