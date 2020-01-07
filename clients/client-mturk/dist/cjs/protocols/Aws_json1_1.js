"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1AcceptQualificationRequestCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "MTurkRequesterServiceV20170117.AcceptQualificationRequest";
    let body;
    body = JSON.stringify(serializeAws_json1_1AcceptQualificationRequestRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AcceptQualificationRequestCommand = serializeAws_json1_1AcceptQualificationRequestCommand;
async function serializeAws_json1_1ApproveAssignmentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MTurkRequesterServiceV20170117.ApproveAssignment";
    let body;
    body = JSON.stringify(serializeAws_json1_1ApproveAssignmentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ApproveAssignmentCommand = serializeAws_json1_1ApproveAssignmentCommand;
async function serializeAws_json1_1AssociateQualificationWithWorkerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "MTurkRequesterServiceV20170117.AssociateQualificationWithWorker";
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateQualificationWithWorkerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1AssociateQualificationWithWorkerCommand = serializeAws_json1_1AssociateQualificationWithWorkerCommand;
async function serializeAws_json1_1CreateAdditionalAssignmentsForHITCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateAdditionalAssignmentsForHITRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateAdditionalAssignmentsForHITCommand = serializeAws_json1_1CreateAdditionalAssignmentsForHITCommand;
async function serializeAws_json1_1CreateHITCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MTurkRequesterServiceV20170117.CreateHIT";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateHITRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateHITCommand = serializeAws_json1_1CreateHITCommand;
async function serializeAws_json1_1CreateHITTypeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MTurkRequesterServiceV20170117.CreateHITType";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateHITTypeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateHITTypeCommand = serializeAws_json1_1CreateHITTypeCommand;
async function serializeAws_json1_1CreateHITWithHITTypeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "MTurkRequesterServiceV20170117.CreateHITWithHITType";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateHITWithHITTypeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateHITWithHITTypeCommand = serializeAws_json1_1CreateHITWithHITTypeCommand;
async function serializeAws_json1_1CreateQualificationTypeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "MTurkRequesterServiceV20170117.CreateQualificationType";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateQualificationTypeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateQualificationTypeCommand = serializeAws_json1_1CreateQualificationTypeCommand;
async function serializeAws_json1_1CreateWorkerBlockCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MTurkRequesterServiceV20170117.CreateWorkerBlock";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateWorkerBlockRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateWorkerBlockCommand = serializeAws_json1_1CreateWorkerBlockCommand;
async function serializeAws_json1_1DeleteHITCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MTurkRequesterServiceV20170117.DeleteHIT";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteHITRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteHITCommand = serializeAws_json1_1DeleteHITCommand;
async function serializeAws_json1_1DeleteQualificationTypeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "MTurkRequesterServiceV20170117.DeleteQualificationType";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteQualificationTypeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteQualificationTypeCommand = serializeAws_json1_1DeleteQualificationTypeCommand;
async function serializeAws_json1_1DeleteWorkerBlockCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MTurkRequesterServiceV20170117.DeleteWorkerBlock";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteWorkerBlockRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteWorkerBlockCommand = serializeAws_json1_1DeleteWorkerBlockCommand;
async function serializeAws_json1_1DisassociateQualificationFromWorkerCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateQualificationFromWorkerRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisassociateQualificationFromWorkerCommand = serializeAws_json1_1DisassociateQualificationFromWorkerCommand;
async function serializeAws_json1_1GetAccountBalanceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MTurkRequesterServiceV20170117.GetAccountBalance";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAccountBalanceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetAccountBalanceCommand = serializeAws_json1_1GetAccountBalanceCommand;
async function serializeAws_json1_1GetAssignmentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MTurkRequesterServiceV20170117.GetAssignment";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAssignmentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetAssignmentCommand = serializeAws_json1_1GetAssignmentCommand;
async function serializeAws_json1_1GetFileUploadURLCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MTurkRequesterServiceV20170117.GetFileUploadURL";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetFileUploadURLRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetFileUploadURLCommand = serializeAws_json1_1GetFileUploadURLCommand;
async function serializeAws_json1_1GetHITCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MTurkRequesterServiceV20170117.GetHIT";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetHITRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetHITCommand = serializeAws_json1_1GetHITCommand;
async function serializeAws_json1_1GetQualificationScoreCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "MTurkRequesterServiceV20170117.GetQualificationScore";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetQualificationScoreRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetQualificationScoreCommand = serializeAws_json1_1GetQualificationScoreCommand;
async function serializeAws_json1_1GetQualificationTypeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "MTurkRequesterServiceV20170117.GetQualificationType";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetQualificationTypeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetQualificationTypeCommand = serializeAws_json1_1GetQualificationTypeCommand;
async function serializeAws_json1_1ListAssignmentsForHITCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "MTurkRequesterServiceV20170117.ListAssignmentsForHIT";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAssignmentsForHITRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListAssignmentsForHITCommand = serializeAws_json1_1ListAssignmentsForHITCommand;
async function serializeAws_json1_1ListBonusPaymentsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MTurkRequesterServiceV20170117.ListBonusPayments";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListBonusPaymentsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListBonusPaymentsCommand = serializeAws_json1_1ListBonusPaymentsCommand;
async function serializeAws_json1_1ListHITsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MTurkRequesterServiceV20170117.ListHITs";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListHITsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListHITsCommand = serializeAws_json1_1ListHITsCommand;
async function serializeAws_json1_1ListHITsForQualificationTypeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "MTurkRequesterServiceV20170117.ListHITsForQualificationType";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListHITsForQualificationTypeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListHITsForQualificationTypeCommand = serializeAws_json1_1ListHITsForQualificationTypeCommand;
async function serializeAws_json1_1ListQualificationRequestsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "MTurkRequesterServiceV20170117.ListQualificationRequests";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListQualificationRequestsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListQualificationRequestsCommand = serializeAws_json1_1ListQualificationRequestsCommand;
async function serializeAws_json1_1ListQualificationTypesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "MTurkRequesterServiceV20170117.ListQualificationTypes";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListQualificationTypesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListQualificationTypesCommand = serializeAws_json1_1ListQualificationTypesCommand;
async function serializeAws_json1_1ListReviewPolicyResultsForHITCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListReviewPolicyResultsForHITRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListReviewPolicyResultsForHITCommand = serializeAws_json1_1ListReviewPolicyResultsForHITCommand;
async function serializeAws_json1_1ListReviewableHITsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MTurkRequesterServiceV20170117.ListReviewableHITs";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListReviewableHITsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListReviewableHITsCommand = serializeAws_json1_1ListReviewableHITsCommand;
async function serializeAws_json1_1ListWorkerBlocksCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MTurkRequesterServiceV20170117.ListWorkerBlocks";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListWorkerBlocksRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListWorkerBlocksCommand = serializeAws_json1_1ListWorkerBlocksCommand;
async function serializeAws_json1_1ListWorkersWithQualificationTypeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "MTurkRequesterServiceV20170117.ListWorkersWithQualificationType";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListWorkersWithQualificationTypeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListWorkersWithQualificationTypeCommand = serializeAws_json1_1ListWorkersWithQualificationTypeCommand;
async function serializeAws_json1_1NotifyWorkersCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MTurkRequesterServiceV20170117.NotifyWorkers";
    let body;
    body = JSON.stringify(serializeAws_json1_1NotifyWorkersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1NotifyWorkersCommand = serializeAws_json1_1NotifyWorkersCommand;
async function serializeAws_json1_1RejectAssignmentCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MTurkRequesterServiceV20170117.RejectAssignment";
    let body;
    body = JSON.stringify(serializeAws_json1_1RejectAssignmentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RejectAssignmentCommand = serializeAws_json1_1RejectAssignmentCommand;
async function serializeAws_json1_1RejectQualificationRequestCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "MTurkRequesterServiceV20170117.RejectQualificationRequest";
    let body;
    body = JSON.stringify(serializeAws_json1_1RejectQualificationRequestRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RejectQualificationRequestCommand = serializeAws_json1_1RejectQualificationRequestCommand;
async function serializeAws_json1_1SendBonusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MTurkRequesterServiceV20170117.SendBonus";
    let body;
    body = JSON.stringify(serializeAws_json1_1SendBonusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SendBonusCommand = serializeAws_json1_1SendBonusCommand;
async function serializeAws_json1_1SendTestEventNotificationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "MTurkRequesterServiceV20170117.SendTestEventNotification";
    let body;
    body = JSON.stringify(serializeAws_json1_1SendTestEventNotificationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SendTestEventNotificationCommand = serializeAws_json1_1SendTestEventNotificationCommand;
async function serializeAws_json1_1UpdateExpirationForHITCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "MTurkRequesterServiceV20170117.UpdateExpirationForHIT";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateExpirationForHITRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateExpirationForHITCommand = serializeAws_json1_1UpdateExpirationForHITCommand;
async function serializeAws_json1_1UpdateHITReviewStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "MTurkRequesterServiceV20170117.UpdateHITReviewStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateHITReviewStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateHITReviewStatusCommand = serializeAws_json1_1UpdateHITReviewStatusCommand;
async function serializeAws_json1_1UpdateHITTypeOfHITCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "MTurkRequesterServiceV20170117.UpdateHITTypeOfHIT";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateHITTypeOfHITRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateHITTypeOfHITCommand = serializeAws_json1_1UpdateHITTypeOfHITCommand;
async function serializeAws_json1_1UpdateNotificationSettingsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "MTurkRequesterServiceV20170117.UpdateNotificationSettings";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateNotificationSettingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateNotificationSettingsCommand = serializeAws_json1_1UpdateNotificationSettingsCommand;
async function serializeAws_json1_1UpdateQualificationTypeCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] =
        "MTurkRequesterServiceV20170117.UpdateQualificationType";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateQualificationTypeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateQualificationTypeCommand = serializeAws_json1_1UpdateQualificationTypeCommand;
async function deserializeAws_json1_1AcceptQualificationRequestCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AcceptQualificationRequestCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AcceptQualificationRequestResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AcceptQualificationRequestResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AcceptQualificationRequestCommand = deserializeAws_json1_1AcceptQualificationRequestCommand;
async function deserializeAws_json1_1AcceptQualificationRequestCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.services.mturk.requester.model#RequestError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFault":
        case "com.amazonaws.services.mturk.requester.model#ServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ApproveAssignmentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ApproveAssignmentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ApproveAssignmentResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ApproveAssignmentResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ApproveAssignmentCommand = deserializeAws_json1_1ApproveAssignmentCommand;
async function deserializeAws_json1_1ApproveAssignmentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.services.mturk.requester.model#RequestError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFault":
        case "com.amazonaws.services.mturk.requester.model#ServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1AssociateQualificationWithWorkerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1AssociateQualificationWithWorkerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateQualificationWithWorkerResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "AssociateQualificationWithWorkerResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1AssociateQualificationWithWorkerCommand = deserializeAws_json1_1AssociateQualificationWithWorkerCommand;
async function deserializeAws_json1_1AssociateQualificationWithWorkerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.services.mturk.requester.model#RequestError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFault":
        case "com.amazonaws.services.mturk.requester.model#ServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateAdditionalAssignmentsForHITCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateAdditionalAssignmentsForHITCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateAdditionalAssignmentsForHITResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateAdditionalAssignmentsForHITResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateAdditionalAssignmentsForHITCommand = deserializeAws_json1_1CreateAdditionalAssignmentsForHITCommand;
async function deserializeAws_json1_1CreateAdditionalAssignmentsForHITCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.services.mturk.requester.model#RequestError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFault":
        case "com.amazonaws.services.mturk.requester.model#ServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateHITCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateHITCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateHITResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateHITResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateHITCommand = deserializeAws_json1_1CreateHITCommand;
async function deserializeAws_json1_1CreateHITCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.services.mturk.requester.model#RequestError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFault":
        case "com.amazonaws.services.mturk.requester.model#ServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateHITTypeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateHITTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateHITTypeResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateHITTypeResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateHITTypeCommand = deserializeAws_json1_1CreateHITTypeCommand;
async function deserializeAws_json1_1CreateHITTypeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.services.mturk.requester.model#RequestError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFault":
        case "com.amazonaws.services.mturk.requester.model#ServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateHITWithHITTypeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateHITWithHITTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateHITWithHITTypeResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateHITWithHITTypeResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateHITWithHITTypeCommand = deserializeAws_json1_1CreateHITWithHITTypeCommand;
async function deserializeAws_json1_1CreateHITWithHITTypeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.services.mturk.requester.model#RequestError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFault":
        case "com.amazonaws.services.mturk.requester.model#ServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateQualificationTypeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateQualificationTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateQualificationTypeResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateQualificationTypeResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateQualificationTypeCommand = deserializeAws_json1_1CreateQualificationTypeCommand;
async function deserializeAws_json1_1CreateQualificationTypeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.services.mturk.requester.model#RequestError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFault":
        case "com.amazonaws.services.mturk.requester.model#ServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateWorkerBlockCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateWorkerBlockCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateWorkerBlockResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateWorkerBlockResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateWorkerBlockCommand = deserializeAws_json1_1CreateWorkerBlockCommand;
async function deserializeAws_json1_1CreateWorkerBlockCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.services.mturk.requester.model#RequestError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFault":
        case "com.amazonaws.services.mturk.requester.model#ServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteHITCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteHITCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteHITResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteHITResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteHITCommand = deserializeAws_json1_1DeleteHITCommand;
async function deserializeAws_json1_1DeleteHITCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.services.mturk.requester.model#RequestError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFault":
        case "com.amazonaws.services.mturk.requester.model#ServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteQualificationTypeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteQualificationTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteQualificationTypeResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteQualificationTypeResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteQualificationTypeCommand = deserializeAws_json1_1DeleteQualificationTypeCommand;
async function deserializeAws_json1_1DeleteQualificationTypeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.services.mturk.requester.model#RequestError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFault":
        case "com.amazonaws.services.mturk.requester.model#ServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteWorkerBlockCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteWorkerBlockCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteWorkerBlockResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteWorkerBlockResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteWorkerBlockCommand = deserializeAws_json1_1DeleteWorkerBlockCommand;
async function deserializeAws_json1_1DeleteWorkerBlockCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.services.mturk.requester.model#RequestError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFault":
        case "com.amazonaws.services.mturk.requester.model#ServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DisassociateQualificationFromWorkerCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisassociateQualificationFromWorkerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateQualificationFromWorkerResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisassociateQualificationFromWorkerResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisassociateQualificationFromWorkerCommand = deserializeAws_json1_1DisassociateQualificationFromWorkerCommand;
async function deserializeAws_json1_1DisassociateQualificationFromWorkerCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.services.mturk.requester.model#RequestError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFault":
        case "com.amazonaws.services.mturk.requester.model#ServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetAccountBalanceCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetAccountBalanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAccountBalanceResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetAccountBalanceResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetAccountBalanceCommand = deserializeAws_json1_1GetAccountBalanceCommand;
async function deserializeAws_json1_1GetAccountBalanceCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.services.mturk.requester.model#RequestError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFault":
        case "com.amazonaws.services.mturk.requester.model#ServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetAssignmentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetAssignmentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAssignmentResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetAssignmentResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetAssignmentCommand = deserializeAws_json1_1GetAssignmentCommand;
async function deserializeAws_json1_1GetAssignmentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.services.mturk.requester.model#RequestError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFault":
        case "com.amazonaws.services.mturk.requester.model#ServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetFileUploadURLCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetFileUploadURLCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetFileUploadURLResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetFileUploadURLResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetFileUploadURLCommand = deserializeAws_json1_1GetFileUploadURLCommand;
async function deserializeAws_json1_1GetFileUploadURLCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.services.mturk.requester.model#RequestError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFault":
        case "com.amazonaws.services.mturk.requester.model#ServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetHITCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetHITCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetHITResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetHITResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetHITCommand = deserializeAws_json1_1GetHITCommand;
async function deserializeAws_json1_1GetHITCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.services.mturk.requester.model#RequestError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFault":
        case "com.amazonaws.services.mturk.requester.model#ServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetQualificationScoreCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetQualificationScoreCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetQualificationScoreResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetQualificationScoreResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetQualificationScoreCommand = deserializeAws_json1_1GetQualificationScoreCommand;
async function deserializeAws_json1_1GetQualificationScoreCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.services.mturk.requester.model#RequestError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFault":
        case "com.amazonaws.services.mturk.requester.model#ServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetQualificationTypeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetQualificationTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetQualificationTypeResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetQualificationTypeResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetQualificationTypeCommand = deserializeAws_json1_1GetQualificationTypeCommand;
async function deserializeAws_json1_1GetQualificationTypeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.services.mturk.requester.model#RequestError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFault":
        case "com.amazonaws.services.mturk.requester.model#ServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListAssignmentsForHITCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListAssignmentsForHITCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAssignmentsForHITResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListAssignmentsForHITResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListAssignmentsForHITCommand = deserializeAws_json1_1ListAssignmentsForHITCommand;
async function deserializeAws_json1_1ListAssignmentsForHITCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.services.mturk.requester.model#RequestError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFault":
        case "com.amazonaws.services.mturk.requester.model#ServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListBonusPaymentsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListBonusPaymentsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListBonusPaymentsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListBonusPaymentsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListBonusPaymentsCommand = deserializeAws_json1_1ListBonusPaymentsCommand;
async function deserializeAws_json1_1ListBonusPaymentsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.services.mturk.requester.model#RequestError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFault":
        case "com.amazonaws.services.mturk.requester.model#ServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListHITsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListHITsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListHITsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListHITsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListHITsCommand = deserializeAws_json1_1ListHITsCommand;
async function deserializeAws_json1_1ListHITsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.services.mturk.requester.model#RequestError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFault":
        case "com.amazonaws.services.mturk.requester.model#ServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListHITsForQualificationTypeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListHITsForQualificationTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListHITsForQualificationTypeResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListHITsForQualificationTypeResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListHITsForQualificationTypeCommand = deserializeAws_json1_1ListHITsForQualificationTypeCommand;
async function deserializeAws_json1_1ListHITsForQualificationTypeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.services.mturk.requester.model#RequestError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFault":
        case "com.amazonaws.services.mturk.requester.model#ServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListQualificationRequestsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListQualificationRequestsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListQualificationRequestsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListQualificationRequestsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListQualificationRequestsCommand = deserializeAws_json1_1ListQualificationRequestsCommand;
async function deserializeAws_json1_1ListQualificationRequestsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.services.mturk.requester.model#RequestError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFault":
        case "com.amazonaws.services.mturk.requester.model#ServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListQualificationTypesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListQualificationTypesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListQualificationTypesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListQualificationTypesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListQualificationTypesCommand = deserializeAws_json1_1ListQualificationTypesCommand;
async function deserializeAws_json1_1ListQualificationTypesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.services.mturk.requester.model#RequestError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFault":
        case "com.amazonaws.services.mturk.requester.model#ServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListReviewPolicyResultsForHITCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListReviewPolicyResultsForHITCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListReviewPolicyResultsForHITResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListReviewPolicyResultsForHITResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListReviewPolicyResultsForHITCommand = deserializeAws_json1_1ListReviewPolicyResultsForHITCommand;
async function deserializeAws_json1_1ListReviewPolicyResultsForHITCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.services.mturk.requester.model#RequestError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFault":
        case "com.amazonaws.services.mturk.requester.model#ServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListReviewableHITsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListReviewableHITsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListReviewableHITsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListReviewableHITsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListReviewableHITsCommand = deserializeAws_json1_1ListReviewableHITsCommand;
async function deserializeAws_json1_1ListReviewableHITsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.services.mturk.requester.model#RequestError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFault":
        case "com.amazonaws.services.mturk.requester.model#ServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListWorkerBlocksCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListWorkerBlocksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListWorkerBlocksResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListWorkerBlocksResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListWorkerBlocksCommand = deserializeAws_json1_1ListWorkerBlocksCommand;
async function deserializeAws_json1_1ListWorkerBlocksCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.services.mturk.requester.model#RequestError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFault":
        case "com.amazonaws.services.mturk.requester.model#ServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListWorkersWithQualificationTypeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListWorkersWithQualificationTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListWorkersWithQualificationTypeResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListWorkersWithQualificationTypeResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListWorkersWithQualificationTypeCommand = deserializeAws_json1_1ListWorkersWithQualificationTypeCommand;
async function deserializeAws_json1_1ListWorkersWithQualificationTypeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.services.mturk.requester.model#RequestError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFault":
        case "com.amazonaws.services.mturk.requester.model#ServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1NotifyWorkersCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1NotifyWorkersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1NotifyWorkersResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "NotifyWorkersResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1NotifyWorkersCommand = deserializeAws_json1_1NotifyWorkersCommand;
async function deserializeAws_json1_1NotifyWorkersCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.services.mturk.requester.model#RequestError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFault":
        case "com.amazonaws.services.mturk.requester.model#ServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1RejectAssignmentCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RejectAssignmentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RejectAssignmentResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RejectAssignmentResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RejectAssignmentCommand = deserializeAws_json1_1RejectAssignmentCommand;
async function deserializeAws_json1_1RejectAssignmentCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.services.mturk.requester.model#RequestError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFault":
        case "com.amazonaws.services.mturk.requester.model#ServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1RejectQualificationRequestCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RejectQualificationRequestCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RejectQualificationRequestResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "RejectQualificationRequestResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RejectQualificationRequestCommand = deserializeAws_json1_1RejectQualificationRequestCommand;
async function deserializeAws_json1_1RejectQualificationRequestCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.services.mturk.requester.model#RequestError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFault":
        case "com.amazonaws.services.mturk.requester.model#ServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1SendBonusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SendBonusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SendBonusResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SendBonusResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SendBonusCommand = deserializeAws_json1_1SendBonusCommand;
async function deserializeAws_json1_1SendBonusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.services.mturk.requester.model#RequestError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFault":
        case "com.amazonaws.services.mturk.requester.model#ServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1SendTestEventNotificationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SendTestEventNotificationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SendTestEventNotificationResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SendTestEventNotificationResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SendTestEventNotificationCommand = deserializeAws_json1_1SendTestEventNotificationCommand;
async function deserializeAws_json1_1SendTestEventNotificationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.services.mturk.requester.model#RequestError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFault":
        case "com.amazonaws.services.mturk.requester.model#ServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateExpirationForHITCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateExpirationForHITCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateExpirationForHITResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateExpirationForHITResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateExpirationForHITCommand = deserializeAws_json1_1UpdateExpirationForHITCommand;
async function deserializeAws_json1_1UpdateExpirationForHITCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.services.mturk.requester.model#RequestError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFault":
        case "com.amazonaws.services.mturk.requester.model#ServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateHITReviewStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateHITReviewStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateHITReviewStatusResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateHITReviewStatusResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateHITReviewStatusCommand = deserializeAws_json1_1UpdateHITReviewStatusCommand;
async function deserializeAws_json1_1UpdateHITReviewStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.services.mturk.requester.model#RequestError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFault":
        case "com.amazonaws.services.mturk.requester.model#ServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateHITTypeOfHITCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateHITTypeOfHITCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateHITTypeOfHITResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateHITTypeOfHITResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateHITTypeOfHITCommand = deserializeAws_json1_1UpdateHITTypeOfHITCommand;
async function deserializeAws_json1_1UpdateHITTypeOfHITCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.services.mturk.requester.model#RequestError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFault":
        case "com.amazonaws.services.mturk.requester.model#ServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateNotificationSettingsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateNotificationSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateNotificationSettingsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateNotificationSettingsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateNotificationSettingsCommand = deserializeAws_json1_1UpdateNotificationSettingsCommand;
async function deserializeAws_json1_1UpdateNotificationSettingsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.services.mturk.requester.model#RequestError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFault":
        case "com.amazonaws.services.mturk.requester.model#ServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateQualificationTypeCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateQualificationTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateQualificationTypeResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateQualificationTypeResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateQualificationTypeCommand = deserializeAws_json1_1UpdateQualificationTypeCommand;
async function deserializeAws_json1_1UpdateQualificationTypeCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "RequestError":
        case "com.amazonaws.services.mturk.requester.model#RequestError":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1RequestErrorResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ServiceFault":
        case "com.amazonaws.services.mturk.requester.model#ServiceFault":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ServiceFaultResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1RequestErrorResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RequestError(body, context);
    const contents = Object.assign({ name: "RequestError", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ServiceFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceFault(body, context);
    const contents = Object.assign({ name: "ServiceFault", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1AcceptQualificationRequestRequest = (input, context) => {
    const bodyParams = {};
    if (input.IntegerValue !== undefined) {
        bodyParams["IntegerValue"] = input.IntegerValue;
    }
    if (input.QualificationRequestId !== undefined) {
        bodyParams["QualificationRequestId"] = input.QualificationRequestId;
    }
    return bodyParams;
};
const serializeAws_json1_1ApproveAssignmentRequest = (input, context) => {
    const bodyParams = {};
    if (input.AssignmentId !== undefined) {
        bodyParams["AssignmentId"] = input.AssignmentId;
    }
    if (input.OverrideRejection !== undefined) {
        bodyParams["OverrideRejection"] = input.OverrideRejection;
    }
    if (input.RequesterFeedback !== undefined) {
        bodyParams["RequesterFeedback"] = input.RequesterFeedback;
    }
    return bodyParams;
};
const serializeAws_json1_1AssignmentStatusList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1AssociateQualificationWithWorkerRequest = (input, context) => {
    const bodyParams = {};
    if (input.IntegerValue !== undefined) {
        bodyParams["IntegerValue"] = input.IntegerValue;
    }
    if (input.QualificationTypeId !== undefined) {
        bodyParams["QualificationTypeId"] = input.QualificationTypeId;
    }
    if (input.SendNotification !== undefined) {
        bodyParams["SendNotification"] = input.SendNotification;
    }
    if (input.WorkerId !== undefined) {
        bodyParams["WorkerId"] = input.WorkerId;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateAdditionalAssignmentsForHITRequest = (input, context) => {
    const bodyParams = {};
    if (input.HITId !== undefined) {
        bodyParams["HITId"] = input.HITId;
    }
    if (input.NumberOfAdditionalAssignments !== undefined) {
        bodyParams["NumberOfAdditionalAssignments"] =
            input.NumberOfAdditionalAssignments;
    }
    if (input.UniqueRequestToken !== undefined) {
        bodyParams["UniqueRequestToken"] = input.UniqueRequestToken;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateHITRequest = (input, context) => {
    const bodyParams = {};
    if (input.AssignmentDurationInSeconds !== undefined) {
        bodyParams["AssignmentDurationInSeconds"] =
            input.AssignmentDurationInSeconds;
    }
    if (input.AssignmentReviewPolicy !== undefined) {
        bodyParams["AssignmentReviewPolicy"] = serializeAws_json1_1ReviewPolicy(input.AssignmentReviewPolicy, context);
    }
    if (input.AutoApprovalDelayInSeconds !== undefined) {
        bodyParams["AutoApprovalDelayInSeconds"] = input.AutoApprovalDelayInSeconds;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.HITLayoutId !== undefined) {
        bodyParams["HITLayoutId"] = input.HITLayoutId;
    }
    if (input.HITLayoutParameters !== undefined) {
        bodyParams["HITLayoutParameters"] = serializeAws_json1_1HITLayoutParameterList(input.HITLayoutParameters, context);
    }
    if (input.HITReviewPolicy !== undefined) {
        bodyParams["HITReviewPolicy"] = serializeAws_json1_1ReviewPolicy(input.HITReviewPolicy, context);
    }
    if (input.Keywords !== undefined) {
        bodyParams["Keywords"] = input.Keywords;
    }
    if (input.LifetimeInSeconds !== undefined) {
        bodyParams["LifetimeInSeconds"] = input.LifetimeInSeconds;
    }
    if (input.MaxAssignments !== undefined) {
        bodyParams["MaxAssignments"] = input.MaxAssignments;
    }
    if (input.QualificationRequirements !== undefined) {
        bodyParams["QualificationRequirements"] = serializeAws_json1_1QualificationRequirementList(input.QualificationRequirements, context);
    }
    if (input.Question !== undefined) {
        bodyParams["Question"] = input.Question;
    }
    if (input.RequesterAnnotation !== undefined) {
        bodyParams["RequesterAnnotation"] = input.RequesterAnnotation;
    }
    if (input.Reward !== undefined) {
        bodyParams["Reward"] = input.Reward;
    }
    if (input.Title !== undefined) {
        bodyParams["Title"] = input.Title;
    }
    if (input.UniqueRequestToken !== undefined) {
        bodyParams["UniqueRequestToken"] = input.UniqueRequestToken;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateHITTypeRequest = (input, context) => {
    const bodyParams = {};
    if (input.AssignmentDurationInSeconds !== undefined) {
        bodyParams["AssignmentDurationInSeconds"] =
            input.AssignmentDurationInSeconds;
    }
    if (input.AutoApprovalDelayInSeconds !== undefined) {
        bodyParams["AutoApprovalDelayInSeconds"] = input.AutoApprovalDelayInSeconds;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Keywords !== undefined) {
        bodyParams["Keywords"] = input.Keywords;
    }
    if (input.QualificationRequirements !== undefined) {
        bodyParams["QualificationRequirements"] = serializeAws_json1_1QualificationRequirementList(input.QualificationRequirements, context);
    }
    if (input.Reward !== undefined) {
        bodyParams["Reward"] = input.Reward;
    }
    if (input.Title !== undefined) {
        bodyParams["Title"] = input.Title;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateHITWithHITTypeRequest = (input, context) => {
    const bodyParams = {};
    if (input.AssignmentReviewPolicy !== undefined) {
        bodyParams["AssignmentReviewPolicy"] = serializeAws_json1_1ReviewPolicy(input.AssignmentReviewPolicy, context);
    }
    if (input.HITLayoutId !== undefined) {
        bodyParams["HITLayoutId"] = input.HITLayoutId;
    }
    if (input.HITLayoutParameters !== undefined) {
        bodyParams["HITLayoutParameters"] = serializeAws_json1_1HITLayoutParameterList(input.HITLayoutParameters, context);
    }
    if (input.HITReviewPolicy !== undefined) {
        bodyParams["HITReviewPolicy"] = serializeAws_json1_1ReviewPolicy(input.HITReviewPolicy, context);
    }
    if (input.HITTypeId !== undefined) {
        bodyParams["HITTypeId"] = input.HITTypeId;
    }
    if (input.LifetimeInSeconds !== undefined) {
        bodyParams["LifetimeInSeconds"] = input.LifetimeInSeconds;
    }
    if (input.MaxAssignments !== undefined) {
        bodyParams["MaxAssignments"] = input.MaxAssignments;
    }
    if (input.Question !== undefined) {
        bodyParams["Question"] = input.Question;
    }
    if (input.RequesterAnnotation !== undefined) {
        bodyParams["RequesterAnnotation"] = input.RequesterAnnotation;
    }
    if (input.UniqueRequestToken !== undefined) {
        bodyParams["UniqueRequestToken"] = input.UniqueRequestToken;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateQualificationTypeRequest = (input, context) => {
    const bodyParams = {};
    if (input.AnswerKey !== undefined) {
        bodyParams["AnswerKey"] = input.AnswerKey;
    }
    if (input.AutoGranted !== undefined) {
        bodyParams["AutoGranted"] = input.AutoGranted;
    }
    if (input.AutoGrantedValue !== undefined) {
        bodyParams["AutoGrantedValue"] = input.AutoGrantedValue;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.Keywords !== undefined) {
        bodyParams["Keywords"] = input.Keywords;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.QualificationTypeStatus !== undefined) {
        bodyParams["QualificationTypeStatus"] = input.QualificationTypeStatus;
    }
    if (input.RetryDelayInSeconds !== undefined) {
        bodyParams["RetryDelayInSeconds"] = input.RetryDelayInSeconds;
    }
    if (input.Test !== undefined) {
        bodyParams["Test"] = input.Test;
    }
    if (input.TestDurationInSeconds !== undefined) {
        bodyParams["TestDurationInSeconds"] = input.TestDurationInSeconds;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateWorkerBlockRequest = (input, context) => {
    const bodyParams = {};
    if (input.Reason !== undefined) {
        bodyParams["Reason"] = input.Reason;
    }
    if (input.WorkerId !== undefined) {
        bodyParams["WorkerId"] = input.WorkerId;
    }
    return bodyParams;
};
const serializeAws_json1_1CustomerIdList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1DeleteHITRequest = (input, context) => {
    const bodyParams = {};
    if (input.HITId !== undefined) {
        bodyParams["HITId"] = input.HITId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteQualificationTypeRequest = (input, context) => {
    const bodyParams = {};
    if (input.QualificationTypeId !== undefined) {
        bodyParams["QualificationTypeId"] = input.QualificationTypeId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteWorkerBlockRequest = (input, context) => {
    const bodyParams = {};
    if (input.Reason !== undefined) {
        bodyParams["Reason"] = input.Reason;
    }
    if (input.WorkerId !== undefined) {
        bodyParams["WorkerId"] = input.WorkerId;
    }
    return bodyParams;
};
const serializeAws_json1_1DisassociateQualificationFromWorkerRequest = (input, context) => {
    const bodyParams = {};
    if (input.QualificationTypeId !== undefined) {
        bodyParams["QualificationTypeId"] = input.QualificationTypeId;
    }
    if (input.Reason !== undefined) {
        bodyParams["Reason"] = input.Reason;
    }
    if (input.WorkerId !== undefined) {
        bodyParams["WorkerId"] = input.WorkerId;
    }
    return bodyParams;
};
const serializeAws_json1_1EventTypeList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1GetAccountBalanceRequest = (input, context) => {
    const bodyParams = {};
    return bodyParams;
};
const serializeAws_json1_1GetAssignmentRequest = (input, context) => {
    const bodyParams = {};
    if (input.AssignmentId !== undefined) {
        bodyParams["AssignmentId"] = input.AssignmentId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetFileUploadURLRequest = (input, context) => {
    const bodyParams = {};
    if (input.AssignmentId !== undefined) {
        bodyParams["AssignmentId"] = input.AssignmentId;
    }
    if (input.QuestionIdentifier !== undefined) {
        bodyParams["QuestionIdentifier"] = input.QuestionIdentifier;
    }
    return bodyParams;
};
const serializeAws_json1_1GetHITRequest = (input, context) => {
    const bodyParams = {};
    if (input.HITId !== undefined) {
        bodyParams["HITId"] = input.HITId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetQualificationScoreRequest = (input, context) => {
    const bodyParams = {};
    if (input.QualificationTypeId !== undefined) {
        bodyParams["QualificationTypeId"] = input.QualificationTypeId;
    }
    if (input.WorkerId !== undefined) {
        bodyParams["WorkerId"] = input.WorkerId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetQualificationTypeRequest = (input, context) => {
    const bodyParams = {};
    if (input.QualificationTypeId !== undefined) {
        bodyParams["QualificationTypeId"] = input.QualificationTypeId;
    }
    return bodyParams;
};
const serializeAws_json1_1HITLayoutParameter = (input, context) => {
    const bodyParams = {};
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Value !== undefined) {
        bodyParams["Value"] = input.Value;
    }
    return bodyParams;
};
const serializeAws_json1_1HITLayoutParameterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1HITLayoutParameter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1IntegerList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ListAssignmentsForHITRequest = (input, context) => {
    const bodyParams = {};
    if (input.AssignmentStatuses !== undefined) {
        bodyParams["AssignmentStatuses"] = serializeAws_json1_1AssignmentStatusList(input.AssignmentStatuses, context);
    }
    if (input.HITId !== undefined) {
        bodyParams["HITId"] = input.HITId;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListBonusPaymentsRequest = (input, context) => {
    const bodyParams = {};
    if (input.AssignmentId !== undefined) {
        bodyParams["AssignmentId"] = input.AssignmentId;
    }
    if (input.HITId !== undefined) {
        bodyParams["HITId"] = input.HITId;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListHITsForQualificationTypeRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.QualificationTypeId !== undefined) {
        bodyParams["QualificationTypeId"] = input.QualificationTypeId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListHITsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListQualificationRequestsRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.QualificationTypeId !== undefined) {
        bodyParams["QualificationTypeId"] = input.QualificationTypeId;
    }
    return bodyParams;
};
const serializeAws_json1_1ListQualificationTypesRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.MustBeOwnedByCaller !== undefined) {
        bodyParams["MustBeOwnedByCaller"] = input.MustBeOwnedByCaller;
    }
    if (input.MustBeRequestable !== undefined) {
        bodyParams["MustBeRequestable"] = input.MustBeRequestable;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.Query !== undefined) {
        bodyParams["Query"] = input.Query;
    }
    return bodyParams;
};
const serializeAws_json1_1ListReviewPolicyResultsForHITRequest = (input, context) => {
    const bodyParams = {};
    if (input.HITId !== undefined) {
        bodyParams["HITId"] = input.HITId;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.PolicyLevels !== undefined) {
        bodyParams["PolicyLevels"] = serializeAws_json1_1ReviewPolicyLevelList(input.PolicyLevels, context);
    }
    if (input.RetrieveActions !== undefined) {
        bodyParams["RetrieveActions"] = input.RetrieveActions;
    }
    if (input.RetrieveResults !== undefined) {
        bodyParams["RetrieveResults"] = input.RetrieveResults;
    }
    return bodyParams;
};
const serializeAws_json1_1ListReviewableHITsRequest = (input, context) => {
    const bodyParams = {};
    if (input.HITTypeId !== undefined) {
        bodyParams["HITTypeId"] = input.HITTypeId;
    }
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.Status !== undefined) {
        bodyParams["Status"] = input.Status;
    }
    return bodyParams;
};
const serializeAws_json1_1ListWorkerBlocksRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    return bodyParams;
};
const serializeAws_json1_1ListWorkersWithQualificationTypeRequest = (input, context) => {
    const bodyParams = {};
    if (input.MaxResults !== undefined) {
        bodyParams["MaxResults"] = input.MaxResults;
    }
    if (input.NextToken !== undefined) {
        bodyParams["NextToken"] = input.NextToken;
    }
    if (input.QualificationTypeId !== undefined) {
        bodyParams["QualificationTypeId"] = input.QualificationTypeId;
    }
    if (input.Status !== undefined) {
        bodyParams["Status"] = input.Status;
    }
    return bodyParams;
};
const serializeAws_json1_1Locale = (input, context) => {
    const bodyParams = {};
    if (input.Country !== undefined) {
        bodyParams["Country"] = input.Country;
    }
    if (input.Subdivision !== undefined) {
        bodyParams["Subdivision"] = input.Subdivision;
    }
    return bodyParams;
};
const serializeAws_json1_1LocaleList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1Locale(entry, context));
    }
    return contents;
};
const serializeAws_json1_1NotificationSpecification = (input, context) => {
    const bodyParams = {};
    if (input.Destination !== undefined) {
        bodyParams["Destination"] = input.Destination;
    }
    if (input.EventTypes !== undefined) {
        bodyParams["EventTypes"] = serializeAws_json1_1EventTypeList(input.EventTypes, context);
    }
    if (input.Transport !== undefined) {
        bodyParams["Transport"] = input.Transport;
    }
    if (input.Version !== undefined) {
        bodyParams["Version"] = input.Version;
    }
    return bodyParams;
};
const serializeAws_json1_1NotifyWorkersRequest = (input, context) => {
    const bodyParams = {};
    if (input.MessageText !== undefined) {
        bodyParams["MessageText"] = input.MessageText;
    }
    if (input.Subject !== undefined) {
        bodyParams["Subject"] = input.Subject;
    }
    if (input.WorkerIds !== undefined) {
        bodyParams["WorkerIds"] = serializeAws_json1_1CustomerIdList(input.WorkerIds, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ParameterMapEntry = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1StringList(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1ParameterMapEntryList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1ParameterMapEntry(entry, context));
    }
    return contents;
};
const serializeAws_json1_1PolicyParameter = (input, context) => {
    const bodyParams = {};
    if (input.Key !== undefined) {
        bodyParams["Key"] = input.Key;
    }
    if (input.MapEntries !== undefined) {
        bodyParams["MapEntries"] = serializeAws_json1_1ParameterMapEntryList(input.MapEntries, context);
    }
    if (input.Values !== undefined) {
        bodyParams["Values"] = serializeAws_json1_1StringList(input.Values, context);
    }
    return bodyParams;
};
const serializeAws_json1_1PolicyParameterList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1PolicyParameter(entry, context));
    }
    return contents;
};
const serializeAws_json1_1QualificationRequirement = (input, context) => {
    const bodyParams = {};
    if (input.ActionsGuarded !== undefined) {
        bodyParams["ActionsGuarded"] = input.ActionsGuarded;
    }
    if (input.Comparator !== undefined) {
        bodyParams["Comparator"] = input.Comparator;
    }
    if (input.IntegerValues !== undefined) {
        bodyParams["IntegerValues"] = serializeAws_json1_1IntegerList(input.IntegerValues, context);
    }
    if (input.LocaleValues !== undefined) {
        bodyParams["LocaleValues"] = serializeAws_json1_1LocaleList(input.LocaleValues, context);
    }
    if (input.QualificationTypeId !== undefined) {
        bodyParams["QualificationTypeId"] = input.QualificationTypeId;
    }
    if (input.RequiredToPreview !== undefined) {
        bodyParams["RequiredToPreview"] = input.RequiredToPreview;
    }
    return bodyParams;
};
const serializeAws_json1_1QualificationRequirementList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(serializeAws_json1_1QualificationRequirement(entry, context));
    }
    return contents;
};
const serializeAws_json1_1RejectAssignmentRequest = (input, context) => {
    const bodyParams = {};
    if (input.AssignmentId !== undefined) {
        bodyParams["AssignmentId"] = input.AssignmentId;
    }
    if (input.RequesterFeedback !== undefined) {
        bodyParams["RequesterFeedback"] = input.RequesterFeedback;
    }
    return bodyParams;
};
const serializeAws_json1_1RejectQualificationRequestRequest = (input, context) => {
    const bodyParams = {};
    if (input.QualificationRequestId !== undefined) {
        bodyParams["QualificationRequestId"] = input.QualificationRequestId;
    }
    if (input.Reason !== undefined) {
        bodyParams["Reason"] = input.Reason;
    }
    return bodyParams;
};
const serializeAws_json1_1ReviewPolicy = (input, context) => {
    const bodyParams = {};
    if (input.Parameters !== undefined) {
        bodyParams["Parameters"] = serializeAws_json1_1PolicyParameterList(input.Parameters, context);
    }
    if (input.PolicyName !== undefined) {
        bodyParams["PolicyName"] = input.PolicyName;
    }
    return bodyParams;
};
const serializeAws_json1_1ReviewPolicyLevelList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1SendBonusRequest = (input, context) => {
    const bodyParams = {};
    if (input.AssignmentId !== undefined) {
        bodyParams["AssignmentId"] = input.AssignmentId;
    }
    if (input.BonusAmount !== undefined) {
        bodyParams["BonusAmount"] = input.BonusAmount;
    }
    if (input.Reason !== undefined) {
        bodyParams["Reason"] = input.Reason;
    }
    if (input.UniqueRequestToken !== undefined) {
        bodyParams["UniqueRequestToken"] = input.UniqueRequestToken;
    }
    if (input.WorkerId !== undefined) {
        bodyParams["WorkerId"] = input.WorkerId;
    }
    return bodyParams;
};
const serializeAws_json1_1SendTestEventNotificationRequest = (input, context) => {
    const bodyParams = {};
    if (input.Notification !== undefined) {
        bodyParams["Notification"] = serializeAws_json1_1NotificationSpecification(input.Notification, context);
    }
    if (input.TestEventType !== undefined) {
        bodyParams["TestEventType"] = input.TestEventType;
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
const serializeAws_json1_1UpdateExpirationForHITRequest = (input, context) => {
    const bodyParams = {};
    if (input.ExpireAt !== undefined) {
        bodyParams["ExpireAt"] = Math.round(input.ExpireAt.getTime() / 1000);
    }
    if (input.HITId !== undefined) {
        bodyParams["HITId"] = input.HITId;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateHITReviewStatusRequest = (input, context) => {
    const bodyParams = {};
    if (input.HITId !== undefined) {
        bodyParams["HITId"] = input.HITId;
    }
    if (input.Revert !== undefined) {
        bodyParams["Revert"] = input.Revert;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateHITTypeOfHITRequest = (input, context) => {
    const bodyParams = {};
    if (input.HITId !== undefined) {
        bodyParams["HITId"] = input.HITId;
    }
    if (input.HITTypeId !== undefined) {
        bodyParams["HITTypeId"] = input.HITTypeId;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateNotificationSettingsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Active !== undefined) {
        bodyParams["Active"] = input.Active;
    }
    if (input.HITTypeId !== undefined) {
        bodyParams["HITTypeId"] = input.HITTypeId;
    }
    if (input.Notification !== undefined) {
        bodyParams["Notification"] = serializeAws_json1_1NotificationSpecification(input.Notification, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateQualificationTypeRequest = (input, context) => {
    const bodyParams = {};
    if (input.AnswerKey !== undefined) {
        bodyParams["AnswerKey"] = input.AnswerKey;
    }
    if (input.AutoGranted !== undefined) {
        bodyParams["AutoGranted"] = input.AutoGranted;
    }
    if (input.AutoGrantedValue !== undefined) {
        bodyParams["AutoGrantedValue"] = input.AutoGrantedValue;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.QualificationTypeId !== undefined) {
        bodyParams["QualificationTypeId"] = input.QualificationTypeId;
    }
    if (input.QualificationTypeStatus !== undefined) {
        bodyParams["QualificationTypeStatus"] = input.QualificationTypeStatus;
    }
    if (input.RetryDelayInSeconds !== undefined) {
        bodyParams["RetryDelayInSeconds"] = input.RetryDelayInSeconds;
    }
    if (input.Test !== undefined) {
        bodyParams["Test"] = input.Test;
    }
    if (input.TestDurationInSeconds !== undefined) {
        bodyParams["TestDurationInSeconds"] = input.TestDurationInSeconds;
    }
    return bodyParams;
};
const deserializeAws_json1_1AcceptQualificationRequestResponse = (output, context) => {
    let contents = {
        __type: "AcceptQualificationRequestResponse"
    };
    return contents;
};
const deserializeAws_json1_1ApproveAssignmentResponse = (output, context) => {
    let contents = {
        __type: "ApproveAssignmentResponse"
    };
    return contents;
};
const deserializeAws_json1_1Assignment = (output, context) => {
    let contents = {
        __type: "Assignment",
        AcceptTime: undefined,
        Answer: undefined,
        ApprovalTime: undefined,
        AssignmentId: undefined,
        AssignmentStatus: undefined,
        AutoApprovalTime: undefined,
        Deadline: undefined,
        HITId: undefined,
        RejectionTime: undefined,
        RequesterFeedback: undefined,
        SubmitTime: undefined,
        WorkerId: undefined
    };
    if (output.AcceptTime !== undefined && output.AcceptTime !== null) {
        contents.AcceptTime = new Date(Math.round(output.AcceptTime * 1000));
    }
    if (output.Answer !== undefined && output.Answer !== null) {
        contents.Answer = output.Answer;
    }
    if (output.ApprovalTime !== undefined && output.ApprovalTime !== null) {
        contents.ApprovalTime = new Date(Math.round(output.ApprovalTime * 1000));
    }
    if (output.AssignmentId !== undefined && output.AssignmentId !== null) {
        contents.AssignmentId = output.AssignmentId;
    }
    if (output.AssignmentStatus !== undefined &&
        output.AssignmentStatus !== null) {
        contents.AssignmentStatus = output.AssignmentStatus;
    }
    if (output.AutoApprovalTime !== undefined &&
        output.AutoApprovalTime !== null) {
        contents.AutoApprovalTime = new Date(Math.round(output.AutoApprovalTime * 1000));
    }
    if (output.Deadline !== undefined && output.Deadline !== null) {
        contents.Deadline = new Date(Math.round(output.Deadline * 1000));
    }
    if (output.HITId !== undefined && output.HITId !== null) {
        contents.HITId = output.HITId;
    }
    if (output.RejectionTime !== undefined && output.RejectionTime !== null) {
        contents.RejectionTime = new Date(Math.round(output.RejectionTime * 1000));
    }
    if (output.RequesterFeedback !== undefined &&
        output.RequesterFeedback !== null) {
        contents.RequesterFeedback = output.RequesterFeedback;
    }
    if (output.SubmitTime !== undefined && output.SubmitTime !== null) {
        contents.SubmitTime = new Date(Math.round(output.SubmitTime * 1000));
    }
    if (output.WorkerId !== undefined && output.WorkerId !== null) {
        contents.WorkerId = output.WorkerId;
    }
    return contents;
};
const deserializeAws_json1_1AssignmentList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Assignment(entry, context));
};
const deserializeAws_json1_1AssociateQualificationWithWorkerResponse = (output, context) => {
    let contents = {
        __type: "AssociateQualificationWithWorkerResponse"
    };
    return contents;
};
const deserializeAws_json1_1BonusPayment = (output, context) => {
    let contents = {
        __type: "BonusPayment",
        AssignmentId: undefined,
        BonusAmount: undefined,
        GrantTime: undefined,
        Reason: undefined,
        WorkerId: undefined
    };
    if (output.AssignmentId !== undefined && output.AssignmentId !== null) {
        contents.AssignmentId = output.AssignmentId;
    }
    if (output.BonusAmount !== undefined && output.BonusAmount !== null) {
        contents.BonusAmount = output.BonusAmount;
    }
    if (output.GrantTime !== undefined && output.GrantTime !== null) {
        contents.GrantTime = new Date(Math.round(output.GrantTime * 1000));
    }
    if (output.Reason !== undefined && output.Reason !== null) {
        contents.Reason = output.Reason;
    }
    if (output.WorkerId !== undefined && output.WorkerId !== null) {
        contents.WorkerId = output.WorkerId;
    }
    return contents;
};
const deserializeAws_json1_1BonusPaymentList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1BonusPayment(entry, context));
};
const deserializeAws_json1_1CreateAdditionalAssignmentsForHITResponse = (output, context) => {
    let contents = {
        __type: "CreateAdditionalAssignmentsForHITResponse"
    };
    return contents;
};
const deserializeAws_json1_1CreateHITResponse = (output, context) => {
    let contents = {
        __type: "CreateHITResponse",
        HIT: undefined
    };
    if (output.HIT !== undefined && output.HIT !== null) {
        contents.HIT = deserializeAws_json1_1HIT(output.HIT, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateHITTypeResponse = (output, context) => {
    let contents = {
        __type: "CreateHITTypeResponse",
        HITTypeId: undefined
    };
    if (output.HITTypeId !== undefined && output.HITTypeId !== null) {
        contents.HITTypeId = output.HITTypeId;
    }
    return contents;
};
const deserializeAws_json1_1CreateHITWithHITTypeResponse = (output, context) => {
    let contents = {
        __type: "CreateHITWithHITTypeResponse",
        HIT: undefined
    };
    if (output.HIT !== undefined && output.HIT !== null) {
        contents.HIT = deserializeAws_json1_1HIT(output.HIT, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateQualificationTypeResponse = (output, context) => {
    let contents = {
        __type: "CreateQualificationTypeResponse",
        QualificationType: undefined
    };
    if (output.QualificationType !== undefined &&
        output.QualificationType !== null) {
        contents.QualificationType = deserializeAws_json1_1QualificationType(output.QualificationType, context);
    }
    return contents;
};
const deserializeAws_json1_1CreateWorkerBlockResponse = (output, context) => {
    let contents = {
        __type: "CreateWorkerBlockResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteHITResponse = (output, context) => {
    let contents = {
        __type: "DeleteHITResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteQualificationTypeResponse = (output, context) => {
    let contents = {
        __type: "DeleteQualificationTypeResponse"
    };
    return contents;
};
const deserializeAws_json1_1DeleteWorkerBlockResponse = (output, context) => {
    let contents = {
        __type: "DeleteWorkerBlockResponse"
    };
    return contents;
};
const deserializeAws_json1_1DisassociateQualificationFromWorkerResponse = (output, context) => {
    let contents = {
        __type: "DisassociateQualificationFromWorkerResponse"
    };
    return contents;
};
const deserializeAws_json1_1GetAccountBalanceResponse = (output, context) => {
    let contents = {
        __type: "GetAccountBalanceResponse",
        AvailableBalance: undefined,
        OnHoldBalance: undefined
    };
    if (output.AvailableBalance !== undefined &&
        output.AvailableBalance !== null) {
        contents.AvailableBalance = output.AvailableBalance;
    }
    if (output.OnHoldBalance !== undefined && output.OnHoldBalance !== null) {
        contents.OnHoldBalance = output.OnHoldBalance;
    }
    return contents;
};
const deserializeAws_json1_1GetAssignmentResponse = (output, context) => {
    let contents = {
        __type: "GetAssignmentResponse",
        Assignment: undefined,
        HIT: undefined
    };
    if (output.Assignment !== undefined && output.Assignment !== null) {
        contents.Assignment = deserializeAws_json1_1Assignment(output.Assignment, context);
    }
    if (output.HIT !== undefined && output.HIT !== null) {
        contents.HIT = deserializeAws_json1_1HIT(output.HIT, context);
    }
    return contents;
};
const deserializeAws_json1_1GetFileUploadURLResponse = (output, context) => {
    let contents = {
        __type: "GetFileUploadURLResponse",
        FileUploadURL: undefined
    };
    if (output.FileUploadURL !== undefined && output.FileUploadURL !== null) {
        contents.FileUploadURL = output.FileUploadURL;
    }
    return contents;
};
const deserializeAws_json1_1GetHITResponse = (output, context) => {
    let contents = {
        __type: "GetHITResponse",
        HIT: undefined
    };
    if (output.HIT !== undefined && output.HIT !== null) {
        contents.HIT = deserializeAws_json1_1HIT(output.HIT, context);
    }
    return contents;
};
const deserializeAws_json1_1GetQualificationScoreResponse = (output, context) => {
    let contents = {
        __type: "GetQualificationScoreResponse",
        Qualification: undefined
    };
    if (output.Qualification !== undefined && output.Qualification !== null) {
        contents.Qualification = deserializeAws_json1_1Qualification(output.Qualification, context);
    }
    return contents;
};
const deserializeAws_json1_1GetQualificationTypeResponse = (output, context) => {
    let contents = {
        __type: "GetQualificationTypeResponse",
        QualificationType: undefined
    };
    if (output.QualificationType !== undefined &&
        output.QualificationType !== null) {
        contents.QualificationType = deserializeAws_json1_1QualificationType(output.QualificationType, context);
    }
    return contents;
};
const deserializeAws_json1_1HIT = (output, context) => {
    let contents = {
        __type: "HIT",
        AssignmentDurationInSeconds: undefined,
        AutoApprovalDelayInSeconds: undefined,
        CreationTime: undefined,
        Description: undefined,
        Expiration: undefined,
        HITGroupId: undefined,
        HITId: undefined,
        HITLayoutId: undefined,
        HITReviewStatus: undefined,
        HITStatus: undefined,
        HITTypeId: undefined,
        Keywords: undefined,
        MaxAssignments: undefined,
        NumberOfAssignmentsAvailable: undefined,
        NumberOfAssignmentsCompleted: undefined,
        NumberOfAssignmentsPending: undefined,
        QualificationRequirements: undefined,
        Question: undefined,
        RequesterAnnotation: undefined,
        Reward: undefined,
        Title: undefined
    };
    if (output.AssignmentDurationInSeconds !== undefined &&
        output.AssignmentDurationInSeconds !== null) {
        contents.AssignmentDurationInSeconds = output.AssignmentDurationInSeconds;
    }
    if (output.AutoApprovalDelayInSeconds !== undefined &&
        output.AutoApprovalDelayInSeconds !== null) {
        contents.AutoApprovalDelayInSeconds = output.AutoApprovalDelayInSeconds;
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Expiration !== undefined && output.Expiration !== null) {
        contents.Expiration = new Date(Math.round(output.Expiration * 1000));
    }
    if (output.HITGroupId !== undefined && output.HITGroupId !== null) {
        contents.HITGroupId = output.HITGroupId;
    }
    if (output.HITId !== undefined && output.HITId !== null) {
        contents.HITId = output.HITId;
    }
    if (output.HITLayoutId !== undefined && output.HITLayoutId !== null) {
        contents.HITLayoutId = output.HITLayoutId;
    }
    if (output.HITReviewStatus !== undefined && output.HITReviewStatus !== null) {
        contents.HITReviewStatus = output.HITReviewStatus;
    }
    if (output.HITStatus !== undefined && output.HITStatus !== null) {
        contents.HITStatus = output.HITStatus;
    }
    if (output.HITTypeId !== undefined && output.HITTypeId !== null) {
        contents.HITTypeId = output.HITTypeId;
    }
    if (output.Keywords !== undefined && output.Keywords !== null) {
        contents.Keywords = output.Keywords;
    }
    if (output.MaxAssignments !== undefined && output.MaxAssignments !== null) {
        contents.MaxAssignments = output.MaxAssignments;
    }
    if (output.NumberOfAssignmentsAvailable !== undefined &&
        output.NumberOfAssignmentsAvailable !== null) {
        contents.NumberOfAssignmentsAvailable = output.NumberOfAssignmentsAvailable;
    }
    if (output.NumberOfAssignmentsCompleted !== undefined &&
        output.NumberOfAssignmentsCompleted !== null) {
        contents.NumberOfAssignmentsCompleted = output.NumberOfAssignmentsCompleted;
    }
    if (output.NumberOfAssignmentsPending !== undefined &&
        output.NumberOfAssignmentsPending !== null) {
        contents.NumberOfAssignmentsPending = output.NumberOfAssignmentsPending;
    }
    if (output.QualificationRequirements !== undefined &&
        output.QualificationRequirements !== null) {
        contents.QualificationRequirements = deserializeAws_json1_1QualificationRequirementList(output.QualificationRequirements, context);
    }
    if (output.Question !== undefined && output.Question !== null) {
        contents.Question = output.Question;
    }
    if (output.RequesterAnnotation !== undefined &&
        output.RequesterAnnotation !== null) {
        contents.RequesterAnnotation = output.RequesterAnnotation;
    }
    if (output.Reward !== undefined && output.Reward !== null) {
        contents.Reward = output.Reward;
    }
    if (output.Title !== undefined && output.Title !== null) {
        contents.Title = output.Title;
    }
    return contents;
};
const deserializeAws_json1_1HITList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1HIT(entry, context));
};
const deserializeAws_json1_1IntegerList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ListAssignmentsForHITResponse = (output, context) => {
    let contents = {
        __type: "ListAssignmentsForHITResponse",
        Assignments: undefined,
        NextToken: undefined,
        NumResults: undefined
    };
    if (output.Assignments !== undefined && output.Assignments !== null) {
        contents.Assignments = deserializeAws_json1_1AssignmentList(output.Assignments, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.NumResults !== undefined && output.NumResults !== null) {
        contents.NumResults = output.NumResults;
    }
    return contents;
};
const deserializeAws_json1_1ListBonusPaymentsResponse = (output, context) => {
    let contents = {
        __type: "ListBonusPaymentsResponse",
        BonusPayments: undefined,
        NextToken: undefined,
        NumResults: undefined
    };
    if (output.BonusPayments !== undefined && output.BonusPayments !== null) {
        contents.BonusPayments = deserializeAws_json1_1BonusPaymentList(output.BonusPayments, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.NumResults !== undefined && output.NumResults !== null) {
        contents.NumResults = output.NumResults;
    }
    return contents;
};
const deserializeAws_json1_1ListHITsForQualificationTypeResponse = (output, context) => {
    let contents = {
        __type: "ListHITsForQualificationTypeResponse",
        HITs: undefined,
        NextToken: undefined,
        NumResults: undefined
    };
    if (output.HITs !== undefined && output.HITs !== null) {
        contents.HITs = deserializeAws_json1_1HITList(output.HITs, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.NumResults !== undefined && output.NumResults !== null) {
        contents.NumResults = output.NumResults;
    }
    return contents;
};
const deserializeAws_json1_1ListHITsResponse = (output, context) => {
    let contents = {
        __type: "ListHITsResponse",
        HITs: undefined,
        NextToken: undefined,
        NumResults: undefined
    };
    if (output.HITs !== undefined && output.HITs !== null) {
        contents.HITs = deserializeAws_json1_1HITList(output.HITs, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.NumResults !== undefined && output.NumResults !== null) {
        contents.NumResults = output.NumResults;
    }
    return contents;
};
const deserializeAws_json1_1ListQualificationRequestsResponse = (output, context) => {
    let contents = {
        __type: "ListQualificationRequestsResponse",
        NextToken: undefined,
        NumResults: undefined,
        QualificationRequests: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.NumResults !== undefined && output.NumResults !== null) {
        contents.NumResults = output.NumResults;
    }
    if (output.QualificationRequests !== undefined &&
        output.QualificationRequests !== null) {
        contents.QualificationRequests = deserializeAws_json1_1QualificationRequestList(output.QualificationRequests, context);
    }
    return contents;
};
const deserializeAws_json1_1ListQualificationTypesResponse = (output, context) => {
    let contents = {
        __type: "ListQualificationTypesResponse",
        NextToken: undefined,
        NumResults: undefined,
        QualificationTypes: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.NumResults !== undefined && output.NumResults !== null) {
        contents.NumResults = output.NumResults;
    }
    if (output.QualificationTypes !== undefined &&
        output.QualificationTypes !== null) {
        contents.QualificationTypes = deserializeAws_json1_1QualificationTypeList(output.QualificationTypes, context);
    }
    return contents;
};
const deserializeAws_json1_1ListReviewPolicyResultsForHITResponse = (output, context) => {
    let contents = {
        __type: "ListReviewPolicyResultsForHITResponse",
        AssignmentReviewPolicy: undefined,
        AssignmentReviewReport: undefined,
        HITId: undefined,
        HITReviewPolicy: undefined,
        HITReviewReport: undefined,
        NextToken: undefined
    };
    if (output.AssignmentReviewPolicy !== undefined &&
        output.AssignmentReviewPolicy !== null) {
        contents.AssignmentReviewPolicy = deserializeAws_json1_1ReviewPolicy(output.AssignmentReviewPolicy, context);
    }
    if (output.AssignmentReviewReport !== undefined &&
        output.AssignmentReviewReport !== null) {
        contents.AssignmentReviewReport = deserializeAws_json1_1ReviewReport(output.AssignmentReviewReport, context);
    }
    if (output.HITId !== undefined && output.HITId !== null) {
        contents.HITId = output.HITId;
    }
    if (output.HITReviewPolicy !== undefined && output.HITReviewPolicy !== null) {
        contents.HITReviewPolicy = deserializeAws_json1_1ReviewPolicy(output.HITReviewPolicy, context);
    }
    if (output.HITReviewReport !== undefined && output.HITReviewReport !== null) {
        contents.HITReviewReport = deserializeAws_json1_1ReviewReport(output.HITReviewReport, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    return contents;
};
const deserializeAws_json1_1ListReviewableHITsResponse = (output, context) => {
    let contents = {
        __type: "ListReviewableHITsResponse",
        HITs: undefined,
        NextToken: undefined,
        NumResults: undefined
    };
    if (output.HITs !== undefined && output.HITs !== null) {
        contents.HITs = deserializeAws_json1_1HITList(output.HITs, context);
    }
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.NumResults !== undefined && output.NumResults !== null) {
        contents.NumResults = output.NumResults;
    }
    return contents;
};
const deserializeAws_json1_1ListWorkerBlocksResponse = (output, context) => {
    let contents = {
        __type: "ListWorkerBlocksResponse",
        NextToken: undefined,
        NumResults: undefined,
        WorkerBlocks: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.NumResults !== undefined && output.NumResults !== null) {
        contents.NumResults = output.NumResults;
    }
    if (output.WorkerBlocks !== undefined && output.WorkerBlocks !== null) {
        contents.WorkerBlocks = deserializeAws_json1_1WorkerBlockList(output.WorkerBlocks, context);
    }
    return contents;
};
const deserializeAws_json1_1ListWorkersWithQualificationTypeResponse = (output, context) => {
    let contents = {
        __type: "ListWorkersWithQualificationTypeResponse",
        NextToken: undefined,
        NumResults: undefined,
        Qualifications: undefined
    };
    if (output.NextToken !== undefined && output.NextToken !== null) {
        contents.NextToken = output.NextToken;
    }
    if (output.NumResults !== undefined && output.NumResults !== null) {
        contents.NumResults = output.NumResults;
    }
    if (output.Qualifications !== undefined && output.Qualifications !== null) {
        contents.Qualifications = deserializeAws_json1_1QualificationList(output.Qualifications, context);
    }
    return contents;
};
const deserializeAws_json1_1Locale = (output, context) => {
    let contents = {
        __type: "Locale",
        Country: undefined,
        Subdivision: undefined
    };
    if (output.Country !== undefined && output.Country !== null) {
        contents.Country = output.Country;
    }
    if (output.Subdivision !== undefined && output.Subdivision !== null) {
        contents.Subdivision = output.Subdivision;
    }
    return contents;
};
const deserializeAws_json1_1LocaleList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Locale(entry, context));
};
const deserializeAws_json1_1NotifyWorkersFailureStatus = (output, context) => {
    let contents = {
        __type: "NotifyWorkersFailureStatus",
        NotifyWorkersFailureCode: undefined,
        NotifyWorkersFailureMessage: undefined,
        WorkerId: undefined
    };
    if (output.NotifyWorkersFailureCode !== undefined &&
        output.NotifyWorkersFailureCode !== null) {
        contents.NotifyWorkersFailureCode = output.NotifyWorkersFailureCode;
    }
    if (output.NotifyWorkersFailureMessage !== undefined &&
        output.NotifyWorkersFailureMessage !== null) {
        contents.NotifyWorkersFailureMessage = output.NotifyWorkersFailureMessage;
    }
    if (output.WorkerId !== undefined && output.WorkerId !== null) {
        contents.WorkerId = output.WorkerId;
    }
    return contents;
};
const deserializeAws_json1_1NotifyWorkersFailureStatusList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1NotifyWorkersFailureStatus(entry, context));
};
const deserializeAws_json1_1NotifyWorkersResponse = (output, context) => {
    let contents = {
        __type: "NotifyWorkersResponse",
        NotifyWorkersFailureStatuses: undefined
    };
    if (output.NotifyWorkersFailureStatuses !== undefined &&
        output.NotifyWorkersFailureStatuses !== null) {
        contents.NotifyWorkersFailureStatuses = deserializeAws_json1_1NotifyWorkersFailureStatusList(output.NotifyWorkersFailureStatuses, context);
    }
    return contents;
};
const deserializeAws_json1_1ParameterMapEntry = (output, context) => {
    let contents = {
        __type: "ParameterMapEntry",
        Key: undefined,
        Values: undefined
    };
    if (output.Key !== undefined && output.Key !== null) {
        contents.Key = output.Key;
    }
    if (output.Values !== undefined && output.Values !== null) {
        contents.Values = deserializeAws_json1_1StringList(output.Values, context);
    }
    return contents;
};
const deserializeAws_json1_1ParameterMapEntryList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ParameterMapEntry(entry, context));
};
const deserializeAws_json1_1PolicyParameter = (output, context) => {
    let contents = {
        __type: "PolicyParameter",
        Key: undefined,
        MapEntries: undefined,
        Values: undefined
    };
    if (output.Key !== undefined && output.Key !== null) {
        contents.Key = output.Key;
    }
    if (output.MapEntries !== undefined && output.MapEntries !== null) {
        contents.MapEntries = deserializeAws_json1_1ParameterMapEntryList(output.MapEntries, context);
    }
    if (output.Values !== undefined && output.Values !== null) {
        contents.Values = deserializeAws_json1_1StringList(output.Values, context);
    }
    return contents;
};
const deserializeAws_json1_1PolicyParameterList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1PolicyParameter(entry, context));
};
const deserializeAws_json1_1Qualification = (output, context) => {
    let contents = {
        __type: "Qualification",
        GrantTime: undefined,
        IntegerValue: undefined,
        LocaleValue: undefined,
        QualificationTypeId: undefined,
        Status: undefined,
        WorkerId: undefined
    };
    if (output.GrantTime !== undefined && output.GrantTime !== null) {
        contents.GrantTime = new Date(Math.round(output.GrantTime * 1000));
    }
    if (output.IntegerValue !== undefined && output.IntegerValue !== null) {
        contents.IntegerValue = output.IntegerValue;
    }
    if (output.LocaleValue !== undefined && output.LocaleValue !== null) {
        contents.LocaleValue = deserializeAws_json1_1Locale(output.LocaleValue, context);
    }
    if (output.QualificationTypeId !== undefined &&
        output.QualificationTypeId !== null) {
        contents.QualificationTypeId = output.QualificationTypeId;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.WorkerId !== undefined && output.WorkerId !== null) {
        contents.WorkerId = output.WorkerId;
    }
    return contents;
};
const deserializeAws_json1_1QualificationList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Qualification(entry, context));
};
const deserializeAws_json1_1QualificationRequest = (output, context) => {
    let contents = {
        __type: "QualificationRequest",
        Answer: undefined,
        QualificationRequestId: undefined,
        QualificationTypeId: undefined,
        SubmitTime: undefined,
        Test: undefined,
        WorkerId: undefined
    };
    if (output.Answer !== undefined && output.Answer !== null) {
        contents.Answer = output.Answer;
    }
    if (output.QualificationRequestId !== undefined &&
        output.QualificationRequestId !== null) {
        contents.QualificationRequestId = output.QualificationRequestId;
    }
    if (output.QualificationTypeId !== undefined &&
        output.QualificationTypeId !== null) {
        contents.QualificationTypeId = output.QualificationTypeId;
    }
    if (output.SubmitTime !== undefined && output.SubmitTime !== null) {
        contents.SubmitTime = new Date(Math.round(output.SubmitTime * 1000));
    }
    if (output.Test !== undefined && output.Test !== null) {
        contents.Test = output.Test;
    }
    if (output.WorkerId !== undefined && output.WorkerId !== null) {
        contents.WorkerId = output.WorkerId;
    }
    return contents;
};
const deserializeAws_json1_1QualificationRequestList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1QualificationRequest(entry, context));
};
const deserializeAws_json1_1QualificationRequirement = (output, context) => {
    let contents = {
        __type: "QualificationRequirement",
        ActionsGuarded: undefined,
        Comparator: undefined,
        IntegerValues: undefined,
        LocaleValues: undefined,
        QualificationTypeId: undefined,
        RequiredToPreview: undefined
    };
    if (output.ActionsGuarded !== undefined && output.ActionsGuarded !== null) {
        contents.ActionsGuarded = output.ActionsGuarded;
    }
    if (output.Comparator !== undefined && output.Comparator !== null) {
        contents.Comparator = output.Comparator;
    }
    if (output.IntegerValues !== undefined && output.IntegerValues !== null) {
        contents.IntegerValues = deserializeAws_json1_1IntegerList(output.IntegerValues, context);
    }
    if (output.LocaleValues !== undefined && output.LocaleValues !== null) {
        contents.LocaleValues = deserializeAws_json1_1LocaleList(output.LocaleValues, context);
    }
    if (output.QualificationTypeId !== undefined &&
        output.QualificationTypeId !== null) {
        contents.QualificationTypeId = output.QualificationTypeId;
    }
    if (output.RequiredToPreview !== undefined &&
        output.RequiredToPreview !== null) {
        contents.RequiredToPreview = output.RequiredToPreview;
    }
    return contents;
};
const deserializeAws_json1_1QualificationRequirementList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1QualificationRequirement(entry, context));
};
const deserializeAws_json1_1QualificationType = (output, context) => {
    let contents = {
        __type: "QualificationType",
        AnswerKey: undefined,
        AutoGranted: undefined,
        AutoGrantedValue: undefined,
        CreationTime: undefined,
        Description: undefined,
        IsRequestable: undefined,
        Keywords: undefined,
        Name: undefined,
        QualificationTypeId: undefined,
        QualificationTypeStatus: undefined,
        RetryDelayInSeconds: undefined,
        Test: undefined,
        TestDurationInSeconds: undefined
    };
    if (output.AnswerKey !== undefined && output.AnswerKey !== null) {
        contents.AnswerKey = output.AnswerKey;
    }
    if (output.AutoGranted !== undefined && output.AutoGranted !== null) {
        contents.AutoGranted = output.AutoGranted;
    }
    if (output.AutoGrantedValue !== undefined &&
        output.AutoGrantedValue !== null) {
        contents.AutoGrantedValue = output.AutoGrantedValue;
    }
    if (output.CreationTime !== undefined && output.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.IsRequestable !== undefined && output.IsRequestable !== null) {
        contents.IsRequestable = output.IsRequestable;
    }
    if (output.Keywords !== undefined && output.Keywords !== null) {
        contents.Keywords = output.Keywords;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.QualificationTypeId !== undefined &&
        output.QualificationTypeId !== null) {
        contents.QualificationTypeId = output.QualificationTypeId;
    }
    if (output.QualificationTypeStatus !== undefined &&
        output.QualificationTypeStatus !== null) {
        contents.QualificationTypeStatus = output.QualificationTypeStatus;
    }
    if (output.RetryDelayInSeconds !== undefined &&
        output.RetryDelayInSeconds !== null) {
        contents.RetryDelayInSeconds = output.RetryDelayInSeconds;
    }
    if (output.Test !== undefined && output.Test !== null) {
        contents.Test = output.Test;
    }
    if (output.TestDurationInSeconds !== undefined &&
        output.TestDurationInSeconds !== null) {
        contents.TestDurationInSeconds = output.TestDurationInSeconds;
    }
    return contents;
};
const deserializeAws_json1_1QualificationTypeList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1QualificationType(entry, context));
};
const deserializeAws_json1_1RejectAssignmentResponse = (output, context) => {
    let contents = {
        __type: "RejectAssignmentResponse"
    };
    return contents;
};
const deserializeAws_json1_1RejectQualificationRequestResponse = (output, context) => {
    let contents = {
        __type: "RejectQualificationRequestResponse"
    };
    return contents;
};
const deserializeAws_json1_1ReviewActionDetail = (output, context) => {
    let contents = {
        __type: "ReviewActionDetail",
        ActionId: undefined,
        ActionName: undefined,
        CompleteTime: undefined,
        ErrorCode: undefined,
        Result: undefined,
        Status: undefined,
        TargetId: undefined,
        TargetType: undefined
    };
    if (output.ActionId !== undefined && output.ActionId !== null) {
        contents.ActionId = output.ActionId;
    }
    if (output.ActionName !== undefined && output.ActionName !== null) {
        contents.ActionName = output.ActionName;
    }
    if (output.CompleteTime !== undefined && output.CompleteTime !== null) {
        contents.CompleteTime = new Date(Math.round(output.CompleteTime * 1000));
    }
    if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
        contents.ErrorCode = output.ErrorCode;
    }
    if (output.Result !== undefined && output.Result !== null) {
        contents.Result = output.Result;
    }
    if (output.Status !== undefined && output.Status !== null) {
        contents.Status = output.Status;
    }
    if (output.TargetId !== undefined && output.TargetId !== null) {
        contents.TargetId = output.TargetId;
    }
    if (output.TargetType !== undefined && output.TargetType !== null) {
        contents.TargetType = output.TargetType;
    }
    return contents;
};
const deserializeAws_json1_1ReviewActionDetailList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ReviewActionDetail(entry, context));
};
const deserializeAws_json1_1ReviewPolicy = (output, context) => {
    let contents = {
        __type: "ReviewPolicy",
        Parameters: undefined,
        PolicyName: undefined
    };
    if (output.Parameters !== undefined && output.Parameters !== null) {
        contents.Parameters = deserializeAws_json1_1PolicyParameterList(output.Parameters, context);
    }
    if (output.PolicyName !== undefined && output.PolicyName !== null) {
        contents.PolicyName = output.PolicyName;
    }
    return contents;
};
const deserializeAws_json1_1ReviewReport = (output, context) => {
    let contents = {
        __type: "ReviewReport",
        ReviewActions: undefined,
        ReviewResults: undefined
    };
    if (output.ReviewActions !== undefined && output.ReviewActions !== null) {
        contents.ReviewActions = deserializeAws_json1_1ReviewActionDetailList(output.ReviewActions, context);
    }
    if (output.ReviewResults !== undefined && output.ReviewResults !== null) {
        contents.ReviewResults = deserializeAws_json1_1ReviewResultDetailList(output.ReviewResults, context);
    }
    return contents;
};
const deserializeAws_json1_1ReviewResultDetail = (output, context) => {
    let contents = {
        __type: "ReviewResultDetail",
        ActionId: undefined,
        Key: undefined,
        QuestionId: undefined,
        SubjectId: undefined,
        SubjectType: undefined,
        Value: undefined
    };
    if (output.ActionId !== undefined && output.ActionId !== null) {
        contents.ActionId = output.ActionId;
    }
    if (output.Key !== undefined && output.Key !== null) {
        contents.Key = output.Key;
    }
    if (output.QuestionId !== undefined && output.QuestionId !== null) {
        contents.QuestionId = output.QuestionId;
    }
    if (output.SubjectId !== undefined && output.SubjectId !== null) {
        contents.SubjectId = output.SubjectId;
    }
    if (output.SubjectType !== undefined && output.SubjectType !== null) {
        contents.SubjectType = output.SubjectType;
    }
    if (output.Value !== undefined && output.Value !== null) {
        contents.Value = output.Value;
    }
    return contents;
};
const deserializeAws_json1_1ReviewResultDetailList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1ReviewResultDetail(entry, context));
};
const deserializeAws_json1_1SendBonusResponse = (output, context) => {
    let contents = {
        __type: "SendBonusResponse"
    };
    return contents;
};
const deserializeAws_json1_1SendTestEventNotificationResponse = (output, context) => {
    let contents = {
        __type: "SendTestEventNotificationResponse"
    };
    return contents;
};
const deserializeAws_json1_1StringList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1UpdateExpirationForHITResponse = (output, context) => {
    let contents = {
        __type: "UpdateExpirationForHITResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateHITReviewStatusResponse = (output, context) => {
    let contents = {
        __type: "UpdateHITReviewStatusResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateHITTypeOfHITResponse = (output, context) => {
    let contents = {
        __type: "UpdateHITTypeOfHITResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateNotificationSettingsResponse = (output, context) => {
    let contents = {
        __type: "UpdateNotificationSettingsResponse"
    };
    return contents;
};
const deserializeAws_json1_1UpdateQualificationTypeResponse = (output, context) => {
    let contents = {
        __type: "UpdateQualificationTypeResponse",
        QualificationType: undefined
    };
    if (output.QualificationType !== undefined &&
        output.QualificationType !== null) {
        contents.QualificationType = deserializeAws_json1_1QualificationType(output.QualificationType, context);
    }
    return contents;
};
const deserializeAws_json1_1WorkerBlock = (output, context) => {
    let contents = {
        __type: "WorkerBlock",
        Reason: undefined,
        WorkerId: undefined
    };
    if (output.Reason !== undefined && output.Reason !== null) {
        contents.Reason = output.Reason;
    }
    if (output.WorkerId !== undefined && output.WorkerId !== null) {
        contents.WorkerId = output.WorkerId;
    }
    return contents;
};
const deserializeAws_json1_1WorkerBlockList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1WorkerBlock(entry, context));
};
const deserializeAws_json1_1RequestError = (output, context) => {
    let contents = {
        __type: "RequestError",
        Message: undefined,
        TurkErrorCode: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.TurkErrorCode !== undefined && output.TurkErrorCode !== null) {
        contents.TurkErrorCode = output.TurkErrorCode;
    }
    return contents;
};
const deserializeAws_json1_1ServiceFault = (output, context) => {
    let contents = {
        __type: "ServiceFault",
        Message: undefined,
        TurkErrorCode: undefined
    };
    if (output.Message !== undefined && output.Message !== null) {
        contents.Message = output.Message;
    }
    if (output.TurkErrorCode !== undefined && output.TurkErrorCode !== null) {
        contents.TurkErrorCode = output.TurkErrorCode;
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