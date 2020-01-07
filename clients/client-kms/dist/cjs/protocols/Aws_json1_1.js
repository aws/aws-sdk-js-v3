"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protocol_http_1 = require("@aws-sdk/protocol-http");
async function serializeAws_json1_1CancelKeyDeletionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.CancelKeyDeletion";
    let body;
    body = JSON.stringify(serializeAws_json1_1CancelKeyDeletionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CancelKeyDeletionCommand = serializeAws_json1_1CancelKeyDeletionCommand;
async function serializeAws_json1_1ConnectCustomKeyStoreCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.ConnectCustomKeyStore";
    let body;
    body = JSON.stringify(serializeAws_json1_1ConnectCustomKeyStoreRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ConnectCustomKeyStoreCommand = serializeAws_json1_1ConnectCustomKeyStoreCommand;
async function serializeAws_json1_1CreateAliasCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.CreateAlias";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateAliasRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateAliasCommand = serializeAws_json1_1CreateAliasCommand;
async function serializeAws_json1_1CreateCustomKeyStoreCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.CreateCustomKeyStore";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateCustomKeyStoreRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateCustomKeyStoreCommand = serializeAws_json1_1CreateCustomKeyStoreCommand;
async function serializeAws_json1_1CreateGrantCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.CreateGrant";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateGrantRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateGrantCommand = serializeAws_json1_1CreateGrantCommand;
async function serializeAws_json1_1CreateKeyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.CreateKey";
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateKeyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1CreateKeyCommand = serializeAws_json1_1CreateKeyCommand;
async function serializeAws_json1_1DecryptCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.Decrypt";
    let body;
    body = JSON.stringify(serializeAws_json1_1DecryptRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DecryptCommand = serializeAws_json1_1DecryptCommand;
async function serializeAws_json1_1DeleteAliasCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.DeleteAlias";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAliasRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteAliasCommand = serializeAws_json1_1DeleteAliasCommand;
async function serializeAws_json1_1DeleteCustomKeyStoreCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.DeleteCustomKeyStore";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteCustomKeyStoreRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteCustomKeyStoreCommand = serializeAws_json1_1DeleteCustomKeyStoreCommand;
async function serializeAws_json1_1DeleteImportedKeyMaterialCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.DeleteImportedKeyMaterial";
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteImportedKeyMaterialRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DeleteImportedKeyMaterialCommand = serializeAws_json1_1DeleteImportedKeyMaterialCommand;
async function serializeAws_json1_1DescribeCustomKeyStoresCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.DescribeCustomKeyStores";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeCustomKeyStoresRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeCustomKeyStoresCommand = serializeAws_json1_1DescribeCustomKeyStoresCommand;
async function serializeAws_json1_1DescribeKeyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.DescribeKey";
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeKeyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DescribeKeyCommand = serializeAws_json1_1DescribeKeyCommand;
async function serializeAws_json1_1DisableKeyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.DisableKey";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisableKeyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisableKeyCommand = serializeAws_json1_1DisableKeyCommand;
async function serializeAws_json1_1DisableKeyRotationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.DisableKeyRotation";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisableKeyRotationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisableKeyRotationCommand = serializeAws_json1_1DisableKeyRotationCommand;
async function serializeAws_json1_1DisconnectCustomKeyStoreCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.DisconnectCustomKeyStore";
    let body;
    body = JSON.stringify(serializeAws_json1_1DisconnectCustomKeyStoreRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1DisconnectCustomKeyStoreCommand = serializeAws_json1_1DisconnectCustomKeyStoreCommand;
async function serializeAws_json1_1EnableKeyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.EnableKey";
    let body;
    body = JSON.stringify(serializeAws_json1_1EnableKeyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1EnableKeyCommand = serializeAws_json1_1EnableKeyCommand;
async function serializeAws_json1_1EnableKeyRotationCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.EnableKeyRotation";
    let body;
    body = JSON.stringify(serializeAws_json1_1EnableKeyRotationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1EnableKeyRotationCommand = serializeAws_json1_1EnableKeyRotationCommand;
async function serializeAws_json1_1EncryptCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.Encrypt";
    let body;
    body = JSON.stringify(serializeAws_json1_1EncryptRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1EncryptCommand = serializeAws_json1_1EncryptCommand;
async function serializeAws_json1_1GenerateDataKeyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.GenerateDataKey";
    let body;
    body = JSON.stringify(serializeAws_json1_1GenerateDataKeyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GenerateDataKeyCommand = serializeAws_json1_1GenerateDataKeyCommand;
async function serializeAws_json1_1GenerateDataKeyPairCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.GenerateDataKeyPair";
    let body;
    body = JSON.stringify(serializeAws_json1_1GenerateDataKeyPairRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GenerateDataKeyPairCommand = serializeAws_json1_1GenerateDataKeyPairCommand;
async function serializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.GenerateDataKeyPairWithoutPlaintext";
    let body;
    body = JSON.stringify(serializeAws_json1_1GenerateDataKeyPairWithoutPlaintextRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommand = serializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommand;
async function serializeAws_json1_1GenerateDataKeyWithoutPlaintextCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.GenerateDataKeyWithoutPlaintext";
    let body;
    body = JSON.stringify(serializeAws_json1_1GenerateDataKeyWithoutPlaintextRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GenerateDataKeyWithoutPlaintextCommand = serializeAws_json1_1GenerateDataKeyWithoutPlaintextCommand;
async function serializeAws_json1_1GenerateRandomCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.GenerateRandom";
    let body;
    body = JSON.stringify(serializeAws_json1_1GenerateRandomRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GenerateRandomCommand = serializeAws_json1_1GenerateRandomCommand;
async function serializeAws_json1_1GetKeyPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.GetKeyPolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetKeyPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetKeyPolicyCommand = serializeAws_json1_1GetKeyPolicyCommand;
async function serializeAws_json1_1GetKeyRotationStatusCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.GetKeyRotationStatus";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetKeyRotationStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetKeyRotationStatusCommand = serializeAws_json1_1GetKeyRotationStatusCommand;
async function serializeAws_json1_1GetParametersForImportCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.GetParametersForImport";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetParametersForImportRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetParametersForImportCommand = serializeAws_json1_1GetParametersForImportCommand;
async function serializeAws_json1_1GetPublicKeyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.GetPublicKey";
    let body;
    body = JSON.stringify(serializeAws_json1_1GetPublicKeyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1GetPublicKeyCommand = serializeAws_json1_1GetPublicKeyCommand;
async function serializeAws_json1_1ImportKeyMaterialCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.ImportKeyMaterial";
    let body;
    body = JSON.stringify(serializeAws_json1_1ImportKeyMaterialRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ImportKeyMaterialCommand = serializeAws_json1_1ImportKeyMaterialCommand;
async function serializeAws_json1_1ListAliasesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.ListAliases";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAliasesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListAliasesCommand = serializeAws_json1_1ListAliasesCommand;
async function serializeAws_json1_1ListGrantsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.ListGrants";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListGrantsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListGrantsCommand = serializeAws_json1_1ListGrantsCommand;
async function serializeAws_json1_1ListKeyPoliciesCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.ListKeyPolicies";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListKeyPoliciesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListKeyPoliciesCommand = serializeAws_json1_1ListKeyPoliciesCommand;
async function serializeAws_json1_1ListKeysCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.ListKeys";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListKeysRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListKeysCommand = serializeAws_json1_1ListKeysCommand;
async function serializeAws_json1_1ListResourceTagsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.ListResourceTags";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListResourceTagsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListResourceTagsCommand = serializeAws_json1_1ListResourceTagsCommand;
async function serializeAws_json1_1ListRetirableGrantsCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.ListRetirableGrants";
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRetirableGrantsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ListRetirableGrantsCommand = serializeAws_json1_1ListRetirableGrantsCommand;
async function serializeAws_json1_1PutKeyPolicyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.PutKeyPolicy";
    let body;
    body = JSON.stringify(serializeAws_json1_1PutKeyPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1PutKeyPolicyCommand = serializeAws_json1_1PutKeyPolicyCommand;
async function serializeAws_json1_1ReEncryptCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.ReEncrypt";
    let body;
    body = JSON.stringify(serializeAws_json1_1ReEncryptRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ReEncryptCommand = serializeAws_json1_1ReEncryptCommand;
async function serializeAws_json1_1RetireGrantCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.RetireGrant";
    let body;
    body = JSON.stringify(serializeAws_json1_1RetireGrantRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RetireGrantCommand = serializeAws_json1_1RetireGrantCommand;
async function serializeAws_json1_1RevokeGrantCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.RevokeGrant";
    let body;
    body = JSON.stringify(serializeAws_json1_1RevokeGrantRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1RevokeGrantCommand = serializeAws_json1_1RevokeGrantCommand;
async function serializeAws_json1_1ScheduleKeyDeletionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.ScheduleKeyDeletion";
    let body;
    body = JSON.stringify(serializeAws_json1_1ScheduleKeyDeletionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1ScheduleKeyDeletionCommand = serializeAws_json1_1ScheduleKeyDeletionCommand;
async function serializeAws_json1_1SignCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.Sign";
    let body;
    body = JSON.stringify(serializeAws_json1_1SignRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1SignCommand = serializeAws_json1_1SignCommand;
async function serializeAws_json1_1TagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.TagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
async function serializeAws_json1_1UntagResourceCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.UntagResource";
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
async function serializeAws_json1_1UpdateAliasCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.UpdateAlias";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateAliasRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateAliasCommand = serializeAws_json1_1UpdateAliasCommand;
async function serializeAws_json1_1UpdateCustomKeyStoreCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.UpdateCustomKeyStore";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateCustomKeyStoreRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateCustomKeyStoreCommand = serializeAws_json1_1UpdateCustomKeyStoreCommand;
async function serializeAws_json1_1UpdateKeyDescriptionCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.UpdateKeyDescription";
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateKeyDescriptionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1UpdateKeyDescriptionCommand = serializeAws_json1_1UpdateKeyDescriptionCommand;
async function serializeAws_json1_1VerifyCommand(input, context) {
    const headers = {};
    headers["Content-Type"] = "application/x-amz-json-1.1";
    headers["X-Amz-Target"] = "TrentService.Verify";
    let body;
    body = JSON.stringify(serializeAws_json1_1VerifyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
}
exports.serializeAws_json1_1VerifyCommand = serializeAws_json1_1VerifyCommand;
async function deserializeAws_json1_1CancelKeyDeletionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CancelKeyDeletionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CancelKeyDeletionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CancelKeyDeletionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CancelKeyDeletionCommand = deserializeAws_json1_1CancelKeyDeletionCommand;
async function deserializeAws_json1_1CancelKeyDeletionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazon.trent#DependencyTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArnException":
        case "com.amazon.trent#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateException":
        case "com.amazon.trent#KMSInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.trent#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ConnectCustomKeyStoreCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ConnectCustomKeyStoreCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ConnectCustomKeyStoreResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ConnectCustomKeyStoreResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ConnectCustomKeyStoreCommand = deserializeAws_json1_1ConnectCustomKeyStoreCommand;
async function deserializeAws_json1_1ConnectCustomKeyStoreCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CloudHsmClusterInvalidConfigurationException":
        case "com.amazon.trent#CloudHsmClusterInvalidConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmClusterInvalidConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmClusterNotActiveException":
        case "com.amazon.trent#CloudHsmClusterNotActiveException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmClusterNotActiveExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CustomKeyStoreInvalidStateException":
        case "com.amazon.trent#CustomKeyStoreInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CustomKeyStoreNotFoundException":
        case "com.amazon.trent#CustomKeyStoreNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateAliasCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateAliasCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateAliasCommand = deserializeAws_json1_1CreateAliasCommand;
async function deserializeAws_json1_1CreateAliasCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "AlreadyExistsException":
        case "com.amazon.trent#AlreadyExistsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DependencyTimeoutException":
        case "com.amazon.trent#DependencyTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidAliasNameException":
        case "com.amazon.trent#InvalidAliasNameException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidAliasNameExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateException":
        case "com.amazon.trent#KMSInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.trent#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.trent#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateCustomKeyStoreCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateCustomKeyStoreCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateCustomKeyStoreResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateCustomKeyStoreResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateCustomKeyStoreCommand = deserializeAws_json1_1CreateCustomKeyStoreCommand;
async function deserializeAws_json1_1CreateCustomKeyStoreCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CloudHsmClusterInUseException":
        case "com.amazon.trent#CloudHsmClusterInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmClusterInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmClusterInvalidConfigurationException":
        case "com.amazon.trent#CloudHsmClusterInvalidConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmClusterInvalidConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmClusterNotActiveException":
        case "com.amazon.trent#CloudHsmClusterNotActiveException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmClusterNotActiveExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmClusterNotFoundException":
        case "com.amazon.trent#CloudHsmClusterNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmClusterNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CustomKeyStoreNameInUseException":
        case "com.amazon.trent#CustomKeyStoreNameInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CustomKeyStoreNameInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IncorrectTrustAnchorException":
        case "com.amazon.trent#IncorrectTrustAnchorException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IncorrectTrustAnchorExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateGrantCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateGrantCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateGrantResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateGrantResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateGrantCommand = deserializeAws_json1_1CreateGrantCommand;
async function deserializeAws_json1_1CreateGrantCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazon.trent#DependencyTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DisabledException":
        case "com.amazon.trent#DisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArnException":
        case "com.amazon.trent#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGrantTokenException":
        case "com.amazon.trent#InvalidGrantTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateException":
        case "com.amazon.trent#KMSInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.trent#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.trent#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1CreateKeyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1CreateKeyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateKeyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "CreateKeyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1CreateKeyCommand = deserializeAws_json1_1CreateKeyCommand;
async function deserializeAws_json1_1CreateKeyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CloudHsmClusterInvalidConfigurationException":
        case "com.amazon.trent#CloudHsmClusterInvalidConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmClusterInvalidConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CustomKeyStoreInvalidStateException":
        case "com.amazon.trent#CustomKeyStoreInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CustomKeyStoreNotFoundException":
        case "com.amazon.trent#CustomKeyStoreNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DependencyTimeoutException":
        case "com.amazon.trent#DependencyTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArnException":
        case "com.amazon.trent#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.trent#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MalformedPolicyDocumentException":
        case "com.amazon.trent#MalformedPolicyDocumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagException":
        case "com.amazon.trent#TagException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazon.trent#UnsupportedOperationException":
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
async function deserializeAws_json1_1DecryptCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DecryptCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DecryptResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DecryptResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DecryptCommand = deserializeAws_json1_1DecryptCommand;
async function deserializeAws_json1_1DecryptCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazon.trent#DependencyTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DisabledException":
        case "com.amazon.trent#DisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IncorrectKeyException":
        case "com.amazon.trent#IncorrectKeyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IncorrectKeyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCiphertextException":
        case "com.amazon.trent#InvalidCiphertextException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCiphertextExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGrantTokenException":
        case "com.amazon.trent#InvalidGrantTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidKeyUsageException":
        case "com.amazon.trent#InvalidKeyUsageException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateException":
        case "com.amazon.trent#KMSInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KeyUnavailableException":
        case "com.amazon.trent#KeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.trent#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteAliasCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteAliasCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteAliasCommand = deserializeAws_json1_1DeleteAliasCommand;
async function deserializeAws_json1_1DeleteAliasCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazon.trent#DependencyTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateException":
        case "com.amazon.trent#KMSInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.trent#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteCustomKeyStoreCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteCustomKeyStoreCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteCustomKeyStoreResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DeleteCustomKeyStoreResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteCustomKeyStoreCommand = deserializeAws_json1_1DeleteCustomKeyStoreCommand;
async function deserializeAws_json1_1DeleteCustomKeyStoreCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CustomKeyStoreHasCMKsException":
        case "com.amazon.trent#CustomKeyStoreHasCMKsException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CustomKeyStoreHasCMKsExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CustomKeyStoreInvalidStateException":
        case "com.amazon.trent#CustomKeyStoreInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CustomKeyStoreNotFoundException":
        case "com.amazon.trent#CustomKeyStoreNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DeleteImportedKeyMaterialCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DeleteImportedKeyMaterialCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DeleteImportedKeyMaterialCommand = deserializeAws_json1_1DeleteImportedKeyMaterialCommand;
async function deserializeAws_json1_1DeleteImportedKeyMaterialCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazon.trent#DependencyTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArnException":
        case "com.amazon.trent#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateException":
        case "com.amazon.trent#KMSInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.trent#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazon.trent#UnsupportedOperationException":
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
async function deserializeAws_json1_1DescribeCustomKeyStoresCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeCustomKeyStoresCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeCustomKeyStoresResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeCustomKeyStoresResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeCustomKeyStoresCommand = deserializeAws_json1_1DescribeCustomKeyStoresCommand;
async function deserializeAws_json1_1DescribeCustomKeyStoresCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CustomKeyStoreNotFoundException":
        case "com.amazon.trent#CustomKeyStoreNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DescribeKeyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DescribeKeyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeKeyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DescribeKeyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DescribeKeyCommand = deserializeAws_json1_1DescribeKeyCommand;
async function deserializeAws_json1_1DescribeKeyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazon.trent#DependencyTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArnException":
        case "com.amazon.trent#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.trent#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DisableKeyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisableKeyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisableKeyCommand = deserializeAws_json1_1DisableKeyCommand;
async function deserializeAws_json1_1DisableKeyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazon.trent#DependencyTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArnException":
        case "com.amazon.trent#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateException":
        case "com.amazon.trent#KMSInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.trent#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1DisableKeyRotationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisableKeyRotationCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisableKeyRotationCommand = deserializeAws_json1_1DisableKeyRotationCommand;
async function deserializeAws_json1_1DisableKeyRotationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazon.trent#DependencyTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DisabledException":
        case "com.amazon.trent#DisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArnException":
        case "com.amazon.trent#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateException":
        case "com.amazon.trent#KMSInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.trent#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazon.trent#UnsupportedOperationException":
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
async function deserializeAws_json1_1DisconnectCustomKeyStoreCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1DisconnectCustomKeyStoreCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisconnectCustomKeyStoreResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "DisconnectCustomKeyStoreResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1DisconnectCustomKeyStoreCommand = deserializeAws_json1_1DisconnectCustomKeyStoreCommand;
async function deserializeAws_json1_1DisconnectCustomKeyStoreCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CustomKeyStoreInvalidStateException":
        case "com.amazon.trent#CustomKeyStoreInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CustomKeyStoreNotFoundException":
        case "com.amazon.trent#CustomKeyStoreNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1EnableKeyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1EnableKeyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1EnableKeyCommand = deserializeAws_json1_1EnableKeyCommand;
async function deserializeAws_json1_1EnableKeyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazon.trent#DependencyTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArnException":
        case "com.amazon.trent#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateException":
        case "com.amazon.trent#KMSInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.trent#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.trent#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1EnableKeyRotationCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1EnableKeyRotationCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1EnableKeyRotationCommand = deserializeAws_json1_1EnableKeyRotationCommand;
async function deserializeAws_json1_1EnableKeyRotationCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazon.trent#DependencyTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DisabledException":
        case "com.amazon.trent#DisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArnException":
        case "com.amazon.trent#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateException":
        case "com.amazon.trent#KMSInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.trent#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazon.trent#UnsupportedOperationException":
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
async function deserializeAws_json1_1EncryptCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1EncryptCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1EncryptResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "EncryptResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1EncryptCommand = deserializeAws_json1_1EncryptCommand;
async function deserializeAws_json1_1EncryptCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazon.trent#DependencyTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DisabledException":
        case "com.amazon.trent#DisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGrantTokenException":
        case "com.amazon.trent#InvalidGrantTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidKeyUsageException":
        case "com.amazon.trent#InvalidKeyUsageException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateException":
        case "com.amazon.trent#KMSInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KeyUnavailableException":
        case "com.amazon.trent#KeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.trent#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GenerateDataKeyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GenerateDataKeyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GenerateDataKeyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GenerateDataKeyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GenerateDataKeyCommand = deserializeAws_json1_1GenerateDataKeyCommand;
async function deserializeAws_json1_1GenerateDataKeyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazon.trent#DependencyTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DisabledException":
        case "com.amazon.trent#DisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGrantTokenException":
        case "com.amazon.trent#InvalidGrantTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidKeyUsageException":
        case "com.amazon.trent#InvalidKeyUsageException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateException":
        case "com.amazon.trent#KMSInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KeyUnavailableException":
        case "com.amazon.trent#KeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.trent#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GenerateDataKeyPairCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GenerateDataKeyPairCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GenerateDataKeyPairResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GenerateDataKeyPairResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GenerateDataKeyPairCommand = deserializeAws_json1_1GenerateDataKeyPairCommand;
async function deserializeAws_json1_1GenerateDataKeyPairCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazon.trent#DependencyTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DisabledException":
        case "com.amazon.trent#DisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGrantTokenException":
        case "com.amazon.trent#InvalidGrantTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidKeyUsageException":
        case "com.amazon.trent#InvalidKeyUsageException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateException":
        case "com.amazon.trent#KMSInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KeyUnavailableException":
        case "com.amazon.trent#KeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.trent#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GenerateDataKeyPairWithoutPlaintextResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommand = deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommand;
async function deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazon.trent#DependencyTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DisabledException":
        case "com.amazon.trent#DisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGrantTokenException":
        case "com.amazon.trent#InvalidGrantTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidKeyUsageException":
        case "com.amazon.trent#InvalidKeyUsageException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateException":
        case "com.amazon.trent#KMSInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KeyUnavailableException":
        case "com.amazon.trent#KeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.trent#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GenerateDataKeyWithoutPlaintextCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GenerateDataKeyWithoutPlaintextCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GenerateDataKeyWithoutPlaintextResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GenerateDataKeyWithoutPlaintextResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GenerateDataKeyWithoutPlaintextCommand = deserializeAws_json1_1GenerateDataKeyWithoutPlaintextCommand;
async function deserializeAws_json1_1GenerateDataKeyWithoutPlaintextCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazon.trent#DependencyTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DisabledException":
        case "com.amazon.trent#DisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGrantTokenException":
        case "com.amazon.trent#InvalidGrantTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidKeyUsageException":
        case "com.amazon.trent#InvalidKeyUsageException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateException":
        case "com.amazon.trent#KMSInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KeyUnavailableException":
        case "com.amazon.trent#KeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.trent#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GenerateRandomCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GenerateRandomCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GenerateRandomResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GenerateRandomResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GenerateRandomCommand = deserializeAws_json1_1GenerateRandomCommand;
async function deserializeAws_json1_1GenerateRandomCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CustomKeyStoreInvalidStateException":
        case "com.amazon.trent#CustomKeyStoreInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CustomKeyStoreNotFoundException":
        case "com.amazon.trent#CustomKeyStoreNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DependencyTimeoutException":
        case "com.amazon.trent#DependencyTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetKeyPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetKeyPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetKeyPolicyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetKeyPolicyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetKeyPolicyCommand = deserializeAws_json1_1GetKeyPolicyCommand;
async function deserializeAws_json1_1GetKeyPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazon.trent#DependencyTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArnException":
        case "com.amazon.trent#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateException":
        case "com.amazon.trent#KMSInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.trent#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1GetKeyRotationStatusCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetKeyRotationStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetKeyRotationStatusResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetKeyRotationStatusResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetKeyRotationStatusCommand = deserializeAws_json1_1GetKeyRotationStatusCommand;
async function deserializeAws_json1_1GetKeyRotationStatusCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazon.trent#DependencyTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArnException":
        case "com.amazon.trent#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateException":
        case "com.amazon.trent#KMSInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.trent#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazon.trent#UnsupportedOperationException":
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
async function deserializeAws_json1_1GetParametersForImportCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetParametersForImportCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetParametersForImportResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetParametersForImportResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetParametersForImportCommand = deserializeAws_json1_1GetParametersForImportCommand;
async function deserializeAws_json1_1GetParametersForImportCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazon.trent#DependencyTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArnException":
        case "com.amazon.trent#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateException":
        case "com.amazon.trent#KMSInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.trent#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazon.trent#UnsupportedOperationException":
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
async function deserializeAws_json1_1GetPublicKeyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1GetPublicKeyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetPublicKeyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "GetPublicKeyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1GetPublicKeyCommand = deserializeAws_json1_1GetPublicKeyCommand;
async function deserializeAws_json1_1GetPublicKeyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazon.trent#DependencyTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DisabledException":
        case "com.amazon.trent#DisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArnException":
        case "com.amazon.trent#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGrantTokenException":
        case "com.amazon.trent#InvalidGrantTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidKeyUsageException":
        case "com.amazon.trent#InvalidKeyUsageException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateException":
        case "com.amazon.trent#KMSInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KeyUnavailableException":
        case "com.amazon.trent#KeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.trent#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazon.trent#UnsupportedOperationException":
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
async function deserializeAws_json1_1ImportKeyMaterialCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ImportKeyMaterialCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ImportKeyMaterialResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ImportKeyMaterialResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ImportKeyMaterialCommand = deserializeAws_json1_1ImportKeyMaterialCommand;
async function deserializeAws_json1_1ImportKeyMaterialCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazon.trent#DependencyTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "ExpiredImportTokenException":
        case "com.amazon.trent#ExpiredImportTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1ExpiredImportTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IncorrectKeyMaterialException":
        case "com.amazon.trent#IncorrectKeyMaterialException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IncorrectKeyMaterialExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArnException":
        case "com.amazon.trent#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCiphertextException":
        case "com.amazon.trent#InvalidCiphertextException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCiphertextExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidImportTokenException":
        case "com.amazon.trent#InvalidImportTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidImportTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateException":
        case "com.amazon.trent#KMSInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.trent#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazon.trent#UnsupportedOperationException":
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
async function deserializeAws_json1_1ListAliasesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListAliasesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAliasesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListAliasesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListAliasesCommand = deserializeAws_json1_1ListAliasesCommand;
async function deserializeAws_json1_1ListAliasesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazon.trent#DependencyTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArnException":
        case "com.amazon.trent#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidMarkerException":
        case "com.amazon.trent#InvalidMarkerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidMarkerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.trent#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListGrantsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListGrantsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListGrantsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListGrantsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListGrantsCommand = deserializeAws_json1_1ListGrantsCommand;
async function deserializeAws_json1_1ListGrantsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazon.trent#DependencyTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArnException":
        case "com.amazon.trent#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidMarkerException":
        case "com.amazon.trent#InvalidMarkerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidMarkerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateException":
        case "com.amazon.trent#KMSInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.trent#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListKeyPoliciesCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListKeyPoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListKeyPoliciesResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListKeyPoliciesResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListKeyPoliciesCommand = deserializeAws_json1_1ListKeyPoliciesCommand;
async function deserializeAws_json1_1ListKeyPoliciesCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazon.trent#DependencyTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArnException":
        case "com.amazon.trent#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateException":
        case "com.amazon.trent#KMSInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.trent#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListKeysCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListKeysCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListKeysResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListKeysResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListKeysCommand = deserializeAws_json1_1ListKeysCommand;
async function deserializeAws_json1_1ListKeysCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazon.trent#DependencyTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidMarkerException":
        case "com.amazon.trent#InvalidMarkerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidMarkerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListResourceTagsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListResourceTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListResourceTagsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListResourceTagsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListResourceTagsCommand = deserializeAws_json1_1ListResourceTagsCommand;
async function deserializeAws_json1_1ListResourceTagsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "InvalidArnException":
        case "com.amazon.trent#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidMarkerException":
        case "com.amazon.trent#InvalidMarkerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidMarkerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.trent#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ListRetirableGrantsCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ListRetirableGrantsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListGrantsResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ListGrantsResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ListRetirableGrantsCommand = deserializeAws_json1_1ListRetirableGrantsCommand;
async function deserializeAws_json1_1ListRetirableGrantsCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazon.trent#DependencyTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArnException":
        case "com.amazon.trent#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidMarkerException":
        case "com.amazon.trent#InvalidMarkerException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidMarkerExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.trent#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1PutKeyPolicyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1PutKeyPolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1PutKeyPolicyCommand = deserializeAws_json1_1PutKeyPolicyCommand;
async function deserializeAws_json1_1PutKeyPolicyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazon.trent#DependencyTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArnException":
        case "com.amazon.trent#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateException":
        case "com.amazon.trent#KMSInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.trent#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "MalformedPolicyDocumentException":
        case "com.amazon.trent#MalformedPolicyDocumentException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.trent#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "UnsupportedOperationException":
        case "com.amazon.trent#UnsupportedOperationException":
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
async function deserializeAws_json1_1ReEncryptCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ReEncryptCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ReEncryptResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ReEncryptResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ReEncryptCommand = deserializeAws_json1_1ReEncryptCommand;
async function deserializeAws_json1_1ReEncryptCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazon.trent#DependencyTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DisabledException":
        case "com.amazon.trent#DisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "IncorrectKeyException":
        case "com.amazon.trent#IncorrectKeyException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1IncorrectKeyExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidCiphertextException":
        case "com.amazon.trent#InvalidCiphertextException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidCiphertextExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGrantTokenException":
        case "com.amazon.trent#InvalidGrantTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidKeyUsageException":
        case "com.amazon.trent#InvalidKeyUsageException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateException":
        case "com.amazon.trent#KMSInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KeyUnavailableException":
        case "com.amazon.trent#KeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.trent#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1RetireGrantCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RetireGrantCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RetireGrantCommand = deserializeAws_json1_1RetireGrantCommand;
async function deserializeAws_json1_1RetireGrantCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazon.trent#DependencyTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArnException":
        case "com.amazon.trent#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGrantIdException":
        case "com.amazon.trent#InvalidGrantIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGrantIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGrantTokenException":
        case "com.amazon.trent#InvalidGrantTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateException":
        case "com.amazon.trent#KMSInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.trent#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1RevokeGrantCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1RevokeGrantCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1RevokeGrantCommand = deserializeAws_json1_1RevokeGrantCommand;
async function deserializeAws_json1_1RevokeGrantCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazon.trent#DependencyTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArnException":
        case "com.amazon.trent#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGrantIdException":
        case "com.amazon.trent#InvalidGrantIdException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGrantIdExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateException":
        case "com.amazon.trent#KMSInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.trent#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1ScheduleKeyDeletionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1ScheduleKeyDeletionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ScheduleKeyDeletionResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "ScheduleKeyDeletionResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1ScheduleKeyDeletionCommand = deserializeAws_json1_1ScheduleKeyDeletionCommand;
async function deserializeAws_json1_1ScheduleKeyDeletionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazon.trent#DependencyTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArnException":
        case "com.amazon.trent#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateException":
        case "com.amazon.trent#KMSInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.trent#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1SignCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1SignCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1SignResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "SignResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1SignCommand = deserializeAws_json1_1SignCommand;
async function deserializeAws_json1_1SignCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazon.trent#DependencyTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DisabledException":
        case "com.amazon.trent#DisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGrantTokenException":
        case "com.amazon.trent#InvalidGrantTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidKeyUsageException":
        case "com.amazon.trent#InvalidKeyUsageException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateException":
        case "com.amazon.trent#KMSInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KeyUnavailableException":
        case "com.amazon.trent#KeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.trent#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
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
        case "InvalidArnException":
        case "com.amazon.trent#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateException":
        case "com.amazon.trent#KMSInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "LimitExceededException":
        case "com.amazon.trent#LimitExceededException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.trent#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagException":
        case "com.amazon.trent#TagException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
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
        case "InvalidArnException":
        case "com.amazon.trent#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateException":
        case "com.amazon.trent#KMSInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.trent#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "TagException":
        case "com.amazon.trent#TagException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1TagExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateAliasCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateAliasCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateAliasCommand = deserializeAws_json1_1UpdateAliasCommand;
async function deserializeAws_json1_1UpdateAliasCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazon.trent#DependencyTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateException":
        case "com.amazon.trent#KMSInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.trent#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateCustomKeyStoreCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateCustomKeyStoreCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateCustomKeyStoreResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "UpdateCustomKeyStoreResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateCustomKeyStoreCommand = deserializeAws_json1_1UpdateCustomKeyStoreCommand;
async function deserializeAws_json1_1UpdateCustomKeyStoreCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "CloudHsmClusterInvalidConfigurationException":
        case "com.amazon.trent#CloudHsmClusterInvalidConfigurationException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmClusterInvalidConfigurationExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmClusterNotActiveException":
        case "com.amazon.trent#CloudHsmClusterNotActiveException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmClusterNotActiveExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmClusterNotFoundException":
        case "com.amazon.trent#CloudHsmClusterNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmClusterNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CloudHsmClusterNotRelatedException":
        case "com.amazon.trent#CloudHsmClusterNotRelatedException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CloudHsmClusterNotRelatedExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CustomKeyStoreInvalidStateException":
        case "com.amazon.trent#CustomKeyStoreInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CustomKeyStoreNameInUseException":
        case "com.amazon.trent#CustomKeyStoreNameInUseException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CustomKeyStoreNameInUseExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "CustomKeyStoreNotFoundException":
        case "com.amazon.trent#CustomKeyStoreNotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1UpdateKeyDescriptionCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1UpdateKeyDescriptionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output)
    };
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1UpdateKeyDescriptionCommand = deserializeAws_json1_1UpdateKeyDescriptionCommand;
async function deserializeAws_json1_1UpdateKeyDescriptionCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazon.trent#DependencyTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidArnException":
        case "com.amazon.trent#InvalidArnException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateException":
        case "com.amazon.trent#KMSInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.trent#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
async function deserializeAws_json1_1VerifyCommand(output, context) {
    if (output.statusCode >= 400) {
        return deserializeAws_json1_1VerifyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1VerifyResponse(data, context);
    const response = Object.assign({ $metadata: deserializeMetadata(output), __type: "VerifyResponse" }, contents);
    return Promise.resolve(response);
}
exports.deserializeAws_json1_1VerifyCommand = deserializeAws_json1_1VerifyCommand;
async function deserializeAws_json1_1VerifyCommandError(output, context) {
    const parsedOutput = Object.assign(Object.assign({}, output), { body: await parseBody(output.body, context) });
    let response;
    let errorCode = "UnknownError";
    const errorTypeParts = parsedOutput.body["__type"].split("#");
    errorCode =
        errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
    switch (errorCode) {
        case "DependencyTimeoutException":
        case "com.amazon.trent#DependencyTimeoutException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DependencyTimeoutExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "DisabledException":
        case "com.amazon.trent#DisabledException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1DisabledExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidGrantTokenException":
        case "com.amazon.trent#InvalidGrantTokenException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidGrantTokenExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "InvalidKeyUsageException":
        case "com.amazon.trent#InvalidKeyUsageException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1InvalidKeyUsageExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInternalException":
        case "com.amazon.trent#KMSInternalException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInternalExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidSignatureException":
        case "com.amazon.trent#KMSInvalidSignatureException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidSignatureExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KMSInvalidStateException":
        case "com.amazon.trent#KMSInvalidStateException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "KeyUnavailableException":
        case "com.amazon.trent#KeyUnavailableException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1KeyUnavailableExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
            break;
        case "NotFoundException":
        case "com.amazon.trent#NotFoundException":
            response = Object.assign(Object.assign({}, (await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context))), { name: errorCode, $metadata: deserializeMetadata(output) });
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
const deserializeAws_json1_1AlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AlreadyExistsException(body, context);
    const contents = Object.assign({ name: "AlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CloudHsmClusterInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CloudHsmClusterInUseException(body, context);
    const contents = Object.assign({ name: "CloudHsmClusterInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CloudHsmClusterInvalidConfigurationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CloudHsmClusterInvalidConfigurationException(body, context);
    const contents = Object.assign({ name: "CloudHsmClusterInvalidConfigurationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CloudHsmClusterNotActiveExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CloudHsmClusterNotActiveException(body, context);
    const contents = Object.assign({ name: "CloudHsmClusterNotActiveException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CloudHsmClusterNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CloudHsmClusterNotFoundException(body, context);
    const contents = Object.assign({ name: "CloudHsmClusterNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CloudHsmClusterNotRelatedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CloudHsmClusterNotRelatedException(body, context);
    const contents = Object.assign({ name: "CloudHsmClusterNotRelatedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CustomKeyStoreHasCMKsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CustomKeyStoreHasCMKsException(body, context);
    const contents = Object.assign({ name: "CustomKeyStoreHasCMKsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CustomKeyStoreInvalidStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CustomKeyStoreInvalidStateException(body, context);
    const contents = Object.assign({ name: "CustomKeyStoreInvalidStateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CustomKeyStoreNameInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CustomKeyStoreNameInUseException(body, context);
    const contents = Object.assign({ name: "CustomKeyStoreNameInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1CustomKeyStoreNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CustomKeyStoreNotFoundException(body, context);
    const contents = Object.assign({ name: "CustomKeyStoreNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DependencyTimeoutExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DependencyTimeoutException(body, context);
    const contents = Object.assign({ name: "DependencyTimeoutException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1DisabledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DisabledException(body, context);
    const contents = Object.assign({ name: "DisabledException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1ExpiredImportTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ExpiredImportTokenException(body, context);
    const contents = Object.assign({ name: "ExpiredImportTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1IncorrectKeyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IncorrectKeyException(body, context);
    const contents = Object.assign({ name: "IncorrectKeyException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1IncorrectKeyMaterialExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IncorrectKeyMaterialException(body, context);
    const contents = Object.assign({ name: "IncorrectKeyMaterialException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1IncorrectTrustAnchorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IncorrectTrustAnchorException(body, context);
    const contents = Object.assign({ name: "IncorrectTrustAnchorException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidAliasNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidAliasNameException(body, context);
    const contents = Object.assign({ name: "InvalidAliasNameException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidArnExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidArnException(body, context);
    const contents = Object.assign({ name: "InvalidArnException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidCiphertextExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidCiphertextException(body, context);
    const contents = Object.assign({ name: "InvalidCiphertextException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidGrantIdExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidGrantIdException(body, context);
    const contents = Object.assign({ name: "InvalidGrantIdException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidGrantTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidGrantTokenException(body, context);
    const contents = Object.assign({ name: "InvalidGrantTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidImportTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidImportTokenException(body, context);
    const contents = Object.assign({ name: "InvalidImportTokenException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidKeyUsageExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidKeyUsageException(body, context);
    const contents = Object.assign({ name: "InvalidKeyUsageException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1InvalidMarkerExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidMarkerException(body, context);
    const contents = Object.assign({ name: "InvalidMarkerException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1KMSInternalExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KMSInternalException(body, context);
    const contents = Object.assign({ name: "KMSInternalException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1KMSInvalidSignatureExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KMSInvalidSignatureException(body, context);
    const contents = Object.assign({ name: "KMSInvalidSignatureException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1KMSInvalidStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KMSInvalidStateException(body, context);
    const contents = Object.assign({ name: "KMSInvalidStateException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1KeyUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KeyUnavailableException(body, context);
    const contents = Object.assign({ name: "KeyUnavailableException", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = Object.assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MalformedPolicyDocumentException(body, context);
    const contents = Object.assign({ name: "MalformedPolicyDocumentException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1NotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NotFoundException(body, context);
    const contents = Object.assign({ name: "NotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1TagExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TagException(body, context);
    const contents = Object.assign({ name: "TagException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const deserializeAws_json1_1UnsupportedOperationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedOperationException(body, context);
    const contents = Object.assign({ name: "UnsupportedOperationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
    return contents;
};
const serializeAws_json1_1CancelKeyDeletionRequest = (input, context) => {
    const bodyParams = {};
    if (input.KeyId !== undefined) {
        bodyParams["KeyId"] = input.KeyId;
    }
    return bodyParams;
};
const serializeAws_json1_1ConnectCustomKeyStoreRequest = (input, context) => {
    const bodyParams = {};
    if (input.CustomKeyStoreId !== undefined) {
        bodyParams["CustomKeyStoreId"] = input.CustomKeyStoreId;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateAliasRequest = (input, context) => {
    const bodyParams = {};
    if (input.AliasName !== undefined) {
        bodyParams["AliasName"] = input.AliasName;
    }
    if (input.TargetKeyId !== undefined) {
        bodyParams["TargetKeyId"] = input.TargetKeyId;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateCustomKeyStoreRequest = (input, context) => {
    const bodyParams = {};
    if (input.CloudHsmClusterId !== undefined) {
        bodyParams["CloudHsmClusterId"] = input.CloudHsmClusterId;
    }
    if (input.CustomKeyStoreName !== undefined) {
        bodyParams["CustomKeyStoreName"] = input.CustomKeyStoreName;
    }
    if (input.KeyStorePassword !== undefined) {
        bodyParams["KeyStorePassword"] = input.KeyStorePassword;
    }
    if (input.TrustAnchorCertificate !== undefined) {
        bodyParams["TrustAnchorCertificate"] = input.TrustAnchorCertificate;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateGrantRequest = (input, context) => {
    const bodyParams = {};
    if (input.Constraints !== undefined) {
        bodyParams["Constraints"] = serializeAws_json1_1GrantConstraints(input.Constraints, context);
    }
    if (input.GrantTokens !== undefined) {
        bodyParams["GrantTokens"] = serializeAws_json1_1GrantTokenList(input.GrantTokens, context);
    }
    if (input.GranteePrincipal !== undefined) {
        bodyParams["GranteePrincipal"] = input.GranteePrincipal;
    }
    if (input.KeyId !== undefined) {
        bodyParams["KeyId"] = input.KeyId;
    }
    if (input.Name !== undefined) {
        bodyParams["Name"] = input.Name;
    }
    if (input.Operations !== undefined) {
        bodyParams["Operations"] = serializeAws_json1_1GrantOperationList(input.Operations, context);
    }
    if (input.RetiringPrincipal !== undefined) {
        bodyParams["RetiringPrincipal"] = input.RetiringPrincipal;
    }
    return bodyParams;
};
const serializeAws_json1_1CreateKeyRequest = (input, context) => {
    const bodyParams = {};
    if (input.BypassPolicyLockoutSafetyCheck !== undefined) {
        bodyParams["BypassPolicyLockoutSafetyCheck"] =
            input.BypassPolicyLockoutSafetyCheck;
    }
    if (input.CustomKeyStoreId !== undefined) {
        bodyParams["CustomKeyStoreId"] = input.CustomKeyStoreId;
    }
    if (input.CustomerMasterKeySpec !== undefined) {
        bodyParams["CustomerMasterKeySpec"] = input.CustomerMasterKeySpec;
    }
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.KeyUsage !== undefined) {
        bodyParams["KeyUsage"] = input.KeyUsage;
    }
    if (input.Origin !== undefined) {
        bodyParams["Origin"] = input.Origin;
    }
    if (input.Policy !== undefined) {
        bodyParams["Policy"] = input.Policy;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1DecryptRequest = (input, context) => {
    const bodyParams = {};
    if (input.CiphertextBlob !== undefined) {
        bodyParams["CiphertextBlob"] = Buffer.from(input.CiphertextBlob).toString("utf-8");
    }
    if (input.EncryptionAlgorithm !== undefined) {
        bodyParams["EncryptionAlgorithm"] = input.EncryptionAlgorithm;
    }
    if (input.EncryptionContext !== undefined) {
        bodyParams["EncryptionContext"] = serializeAws_json1_1EncryptionContextType(input.EncryptionContext, context);
    }
    if (input.GrantTokens !== undefined) {
        bodyParams["GrantTokens"] = serializeAws_json1_1GrantTokenList(input.GrantTokens, context);
    }
    if (input.KeyId !== undefined) {
        bodyParams["KeyId"] = input.KeyId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteAliasRequest = (input, context) => {
    const bodyParams = {};
    if (input.AliasName !== undefined) {
        bodyParams["AliasName"] = input.AliasName;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteCustomKeyStoreRequest = (input, context) => {
    const bodyParams = {};
    if (input.CustomKeyStoreId !== undefined) {
        bodyParams["CustomKeyStoreId"] = input.CustomKeyStoreId;
    }
    return bodyParams;
};
const serializeAws_json1_1DeleteImportedKeyMaterialRequest = (input, context) => {
    const bodyParams = {};
    if (input.KeyId !== undefined) {
        bodyParams["KeyId"] = input.KeyId;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeCustomKeyStoresRequest = (input, context) => {
    const bodyParams = {};
    if (input.CustomKeyStoreId !== undefined) {
        bodyParams["CustomKeyStoreId"] = input.CustomKeyStoreId;
    }
    if (input.CustomKeyStoreName !== undefined) {
        bodyParams["CustomKeyStoreName"] = input.CustomKeyStoreName;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.Marker !== undefined) {
        bodyParams["Marker"] = input.Marker;
    }
    return bodyParams;
};
const serializeAws_json1_1DescribeKeyRequest = (input, context) => {
    const bodyParams = {};
    if (input.GrantTokens !== undefined) {
        bodyParams["GrantTokens"] = serializeAws_json1_1GrantTokenList(input.GrantTokens, context);
    }
    if (input.KeyId !== undefined) {
        bodyParams["KeyId"] = input.KeyId;
    }
    return bodyParams;
};
const serializeAws_json1_1DisableKeyRequest = (input, context) => {
    const bodyParams = {};
    if (input.KeyId !== undefined) {
        bodyParams["KeyId"] = input.KeyId;
    }
    return bodyParams;
};
const serializeAws_json1_1DisableKeyRotationRequest = (input, context) => {
    const bodyParams = {};
    if (input.KeyId !== undefined) {
        bodyParams["KeyId"] = input.KeyId;
    }
    return bodyParams;
};
const serializeAws_json1_1DisconnectCustomKeyStoreRequest = (input, context) => {
    const bodyParams = {};
    if (input.CustomKeyStoreId !== undefined) {
        bodyParams["CustomKeyStoreId"] = input.CustomKeyStoreId;
    }
    return bodyParams;
};
const serializeAws_json1_1EnableKeyRequest = (input, context) => {
    const bodyParams = {};
    if (input.KeyId !== undefined) {
        bodyParams["KeyId"] = input.KeyId;
    }
    return bodyParams;
};
const serializeAws_json1_1EnableKeyRotationRequest = (input, context) => {
    const bodyParams = {};
    if (input.KeyId !== undefined) {
        bodyParams["KeyId"] = input.KeyId;
    }
    return bodyParams;
};
const serializeAws_json1_1EncryptRequest = (input, context) => {
    const bodyParams = {};
    if (input.EncryptionAlgorithm !== undefined) {
        bodyParams["EncryptionAlgorithm"] = input.EncryptionAlgorithm;
    }
    if (input.EncryptionContext !== undefined) {
        bodyParams["EncryptionContext"] = serializeAws_json1_1EncryptionContextType(input.EncryptionContext, context);
    }
    if (input.GrantTokens !== undefined) {
        bodyParams["GrantTokens"] = serializeAws_json1_1GrantTokenList(input.GrantTokens, context);
    }
    if (input.KeyId !== undefined) {
        bodyParams["KeyId"] = input.KeyId;
    }
    if (input.Plaintext !== undefined) {
        bodyParams["Plaintext"] = Buffer.from(input.Plaintext).toString("utf-8");
    }
    return bodyParams;
};
const serializeAws_json1_1EncryptionContextType = (input, context) => {
    const mapParams = {};
    Object.keys(input).forEach(key => {
        mapParams[key] = input[key];
    });
    return mapParams;
};
const serializeAws_json1_1GenerateDataKeyPairRequest = (input, context) => {
    const bodyParams = {};
    if (input.EncryptionContext !== undefined) {
        bodyParams["EncryptionContext"] = serializeAws_json1_1EncryptionContextType(input.EncryptionContext, context);
    }
    if (input.GrantTokens !== undefined) {
        bodyParams["GrantTokens"] = serializeAws_json1_1GrantTokenList(input.GrantTokens, context);
    }
    if (input.KeyId !== undefined) {
        bodyParams["KeyId"] = input.KeyId;
    }
    if (input.KeyPairSpec !== undefined) {
        bodyParams["KeyPairSpec"] = input.KeyPairSpec;
    }
    return bodyParams;
};
const serializeAws_json1_1GenerateDataKeyPairWithoutPlaintextRequest = (input, context) => {
    const bodyParams = {};
    if (input.EncryptionContext !== undefined) {
        bodyParams["EncryptionContext"] = serializeAws_json1_1EncryptionContextType(input.EncryptionContext, context);
    }
    if (input.GrantTokens !== undefined) {
        bodyParams["GrantTokens"] = serializeAws_json1_1GrantTokenList(input.GrantTokens, context);
    }
    if (input.KeyId !== undefined) {
        bodyParams["KeyId"] = input.KeyId;
    }
    if (input.KeyPairSpec !== undefined) {
        bodyParams["KeyPairSpec"] = input.KeyPairSpec;
    }
    return bodyParams;
};
const serializeAws_json1_1GenerateDataKeyRequest = (input, context) => {
    const bodyParams = {};
    if (input.EncryptionContext !== undefined) {
        bodyParams["EncryptionContext"] = serializeAws_json1_1EncryptionContextType(input.EncryptionContext, context);
    }
    if (input.GrantTokens !== undefined) {
        bodyParams["GrantTokens"] = serializeAws_json1_1GrantTokenList(input.GrantTokens, context);
    }
    if (input.KeyId !== undefined) {
        bodyParams["KeyId"] = input.KeyId;
    }
    if (input.KeySpec !== undefined) {
        bodyParams["KeySpec"] = input.KeySpec;
    }
    if (input.NumberOfBytes !== undefined) {
        bodyParams["NumberOfBytes"] = input.NumberOfBytes;
    }
    return bodyParams;
};
const serializeAws_json1_1GenerateDataKeyWithoutPlaintextRequest = (input, context) => {
    const bodyParams = {};
    if (input.EncryptionContext !== undefined) {
        bodyParams["EncryptionContext"] = serializeAws_json1_1EncryptionContextType(input.EncryptionContext, context);
    }
    if (input.GrantTokens !== undefined) {
        bodyParams["GrantTokens"] = serializeAws_json1_1GrantTokenList(input.GrantTokens, context);
    }
    if (input.KeyId !== undefined) {
        bodyParams["KeyId"] = input.KeyId;
    }
    if (input.KeySpec !== undefined) {
        bodyParams["KeySpec"] = input.KeySpec;
    }
    if (input.NumberOfBytes !== undefined) {
        bodyParams["NumberOfBytes"] = input.NumberOfBytes;
    }
    return bodyParams;
};
const serializeAws_json1_1GenerateRandomRequest = (input, context) => {
    const bodyParams = {};
    if (input.CustomKeyStoreId !== undefined) {
        bodyParams["CustomKeyStoreId"] = input.CustomKeyStoreId;
    }
    if (input.NumberOfBytes !== undefined) {
        bodyParams["NumberOfBytes"] = input.NumberOfBytes;
    }
    return bodyParams;
};
const serializeAws_json1_1GetKeyPolicyRequest = (input, context) => {
    const bodyParams = {};
    if (input.KeyId !== undefined) {
        bodyParams["KeyId"] = input.KeyId;
    }
    if (input.PolicyName !== undefined) {
        bodyParams["PolicyName"] = input.PolicyName;
    }
    return bodyParams;
};
const serializeAws_json1_1GetKeyRotationStatusRequest = (input, context) => {
    const bodyParams = {};
    if (input.KeyId !== undefined) {
        bodyParams["KeyId"] = input.KeyId;
    }
    return bodyParams;
};
const serializeAws_json1_1GetParametersForImportRequest = (input, context) => {
    const bodyParams = {};
    if (input.KeyId !== undefined) {
        bodyParams["KeyId"] = input.KeyId;
    }
    if (input.WrappingAlgorithm !== undefined) {
        bodyParams["WrappingAlgorithm"] = input.WrappingAlgorithm;
    }
    if (input.WrappingKeySpec !== undefined) {
        bodyParams["WrappingKeySpec"] = input.WrappingKeySpec;
    }
    return bodyParams;
};
const serializeAws_json1_1GetPublicKeyRequest = (input, context) => {
    const bodyParams = {};
    if (input.GrantTokens !== undefined) {
        bodyParams["GrantTokens"] = serializeAws_json1_1GrantTokenList(input.GrantTokens, context);
    }
    if (input.KeyId !== undefined) {
        bodyParams["KeyId"] = input.KeyId;
    }
    return bodyParams;
};
const serializeAws_json1_1GrantConstraints = (input, context) => {
    const bodyParams = {};
    if (input.EncryptionContextEquals !== undefined) {
        bodyParams["EncryptionContextEquals"] = serializeAws_json1_1EncryptionContextType(input.EncryptionContextEquals, context);
    }
    if (input.EncryptionContextSubset !== undefined) {
        bodyParams["EncryptionContextSubset"] = serializeAws_json1_1EncryptionContextType(input.EncryptionContextSubset, context);
    }
    return bodyParams;
};
const serializeAws_json1_1GrantOperationList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1GrantTokenList = (input, context) => {
    const contents = [];
    for (let entry of input) {
        contents.push(entry);
    }
    return contents;
};
const serializeAws_json1_1ImportKeyMaterialRequest = (input, context) => {
    const bodyParams = {};
    if (input.EncryptedKeyMaterial !== undefined) {
        bodyParams["EncryptedKeyMaterial"] = Buffer.from(input.EncryptedKeyMaterial).toString("utf-8");
    }
    if (input.ExpirationModel !== undefined) {
        bodyParams["ExpirationModel"] = input.ExpirationModel;
    }
    if (input.ImportToken !== undefined) {
        bodyParams["ImportToken"] = Buffer.from(input.ImportToken).toString("utf-8");
    }
    if (input.KeyId !== undefined) {
        bodyParams["KeyId"] = input.KeyId;
    }
    if (input.ValidTo !== undefined) {
        bodyParams["ValidTo"] = Math.round(input.ValidTo.getTime() / 1000);
    }
    return bodyParams;
};
const serializeAws_json1_1ListAliasesRequest = (input, context) => {
    const bodyParams = {};
    if (input.KeyId !== undefined) {
        bodyParams["KeyId"] = input.KeyId;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.Marker !== undefined) {
        bodyParams["Marker"] = input.Marker;
    }
    return bodyParams;
};
const serializeAws_json1_1ListGrantsRequest = (input, context) => {
    const bodyParams = {};
    if (input.KeyId !== undefined) {
        bodyParams["KeyId"] = input.KeyId;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.Marker !== undefined) {
        bodyParams["Marker"] = input.Marker;
    }
    return bodyParams;
};
const serializeAws_json1_1ListKeyPoliciesRequest = (input, context) => {
    const bodyParams = {};
    if (input.KeyId !== undefined) {
        bodyParams["KeyId"] = input.KeyId;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.Marker !== undefined) {
        bodyParams["Marker"] = input.Marker;
    }
    return bodyParams;
};
const serializeAws_json1_1ListKeysRequest = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.Marker !== undefined) {
        bodyParams["Marker"] = input.Marker;
    }
    return bodyParams;
};
const serializeAws_json1_1ListResourceTagsRequest = (input, context) => {
    const bodyParams = {};
    if (input.KeyId !== undefined) {
        bodyParams["KeyId"] = input.KeyId;
    }
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.Marker !== undefined) {
        bodyParams["Marker"] = input.Marker;
    }
    return bodyParams;
};
const serializeAws_json1_1ListRetirableGrantsRequest = (input, context) => {
    const bodyParams = {};
    if (input.Limit !== undefined) {
        bodyParams["Limit"] = input.Limit;
    }
    if (input.Marker !== undefined) {
        bodyParams["Marker"] = input.Marker;
    }
    if (input.RetiringPrincipal !== undefined) {
        bodyParams["RetiringPrincipal"] = input.RetiringPrincipal;
    }
    return bodyParams;
};
const serializeAws_json1_1PutKeyPolicyRequest = (input, context) => {
    const bodyParams = {};
    if (input.BypassPolicyLockoutSafetyCheck !== undefined) {
        bodyParams["BypassPolicyLockoutSafetyCheck"] =
            input.BypassPolicyLockoutSafetyCheck;
    }
    if (input.KeyId !== undefined) {
        bodyParams["KeyId"] = input.KeyId;
    }
    if (input.Policy !== undefined) {
        bodyParams["Policy"] = input.Policy;
    }
    if (input.PolicyName !== undefined) {
        bodyParams["PolicyName"] = input.PolicyName;
    }
    return bodyParams;
};
const serializeAws_json1_1ReEncryptRequest = (input, context) => {
    const bodyParams = {};
    if (input.CiphertextBlob !== undefined) {
        bodyParams["CiphertextBlob"] = Buffer.from(input.CiphertextBlob).toString("utf-8");
    }
    if (input.DestinationEncryptionAlgorithm !== undefined) {
        bodyParams["DestinationEncryptionAlgorithm"] =
            input.DestinationEncryptionAlgorithm;
    }
    if (input.DestinationEncryptionContext !== undefined) {
        bodyParams["DestinationEncryptionContext"] = serializeAws_json1_1EncryptionContextType(input.DestinationEncryptionContext, context);
    }
    if (input.DestinationKeyId !== undefined) {
        bodyParams["DestinationKeyId"] = input.DestinationKeyId;
    }
    if (input.GrantTokens !== undefined) {
        bodyParams["GrantTokens"] = serializeAws_json1_1GrantTokenList(input.GrantTokens, context);
    }
    if (input.SourceEncryptionAlgorithm !== undefined) {
        bodyParams["SourceEncryptionAlgorithm"] = input.SourceEncryptionAlgorithm;
    }
    if (input.SourceEncryptionContext !== undefined) {
        bodyParams["SourceEncryptionContext"] = serializeAws_json1_1EncryptionContextType(input.SourceEncryptionContext, context);
    }
    if (input.SourceKeyId !== undefined) {
        bodyParams["SourceKeyId"] = input.SourceKeyId;
    }
    return bodyParams;
};
const serializeAws_json1_1RetireGrantRequest = (input, context) => {
    const bodyParams = {};
    if (input.GrantId !== undefined) {
        bodyParams["GrantId"] = input.GrantId;
    }
    if (input.GrantToken !== undefined) {
        bodyParams["GrantToken"] = input.GrantToken;
    }
    if (input.KeyId !== undefined) {
        bodyParams["KeyId"] = input.KeyId;
    }
    return bodyParams;
};
const serializeAws_json1_1RevokeGrantRequest = (input, context) => {
    const bodyParams = {};
    if (input.GrantId !== undefined) {
        bodyParams["GrantId"] = input.GrantId;
    }
    if (input.KeyId !== undefined) {
        bodyParams["KeyId"] = input.KeyId;
    }
    return bodyParams;
};
const serializeAws_json1_1ScheduleKeyDeletionRequest = (input, context) => {
    const bodyParams = {};
    if (input.KeyId !== undefined) {
        bodyParams["KeyId"] = input.KeyId;
    }
    if (input.PendingWindowInDays !== undefined) {
        bodyParams["PendingWindowInDays"] = input.PendingWindowInDays;
    }
    return bodyParams;
};
const serializeAws_json1_1SignRequest = (input, context) => {
    const bodyParams = {};
    if (input.GrantTokens !== undefined) {
        bodyParams["GrantTokens"] = serializeAws_json1_1GrantTokenList(input.GrantTokens, context);
    }
    if (input.KeyId !== undefined) {
        bodyParams["KeyId"] = input.KeyId;
    }
    if (input.Message !== undefined) {
        bodyParams["Message"] = Buffer.from(input.Message).toString("utf-8");
    }
    if (input.MessageType !== undefined) {
        bodyParams["MessageType"] = input.MessageType;
    }
    if (input.SigningAlgorithm !== undefined) {
        bodyParams["SigningAlgorithm"] = input.SigningAlgorithm;
    }
    return bodyParams;
};
const serializeAws_json1_1Tag = (input, context) => {
    const bodyParams = {};
    if (input.TagKey !== undefined) {
        bodyParams["TagKey"] = input.TagKey;
    }
    if (input.TagValue !== undefined) {
        bodyParams["TagValue"] = input.TagValue;
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
    if (input.KeyId !== undefined) {
        bodyParams["KeyId"] = input.KeyId;
    }
    if (input.Tags !== undefined) {
        bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    const bodyParams = {};
    if (input.KeyId !== undefined) {
        bodyParams["KeyId"] = input.KeyId;
    }
    if (input.TagKeys !== undefined) {
        bodyParams["TagKeys"] = serializeAws_json1_1TagKeyList(input.TagKeys, context);
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateAliasRequest = (input, context) => {
    const bodyParams = {};
    if (input.AliasName !== undefined) {
        bodyParams["AliasName"] = input.AliasName;
    }
    if (input.TargetKeyId !== undefined) {
        bodyParams["TargetKeyId"] = input.TargetKeyId;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateCustomKeyStoreRequest = (input, context) => {
    const bodyParams = {};
    if (input.CloudHsmClusterId !== undefined) {
        bodyParams["CloudHsmClusterId"] = input.CloudHsmClusterId;
    }
    if (input.CustomKeyStoreId !== undefined) {
        bodyParams["CustomKeyStoreId"] = input.CustomKeyStoreId;
    }
    if (input.KeyStorePassword !== undefined) {
        bodyParams["KeyStorePassword"] = input.KeyStorePassword;
    }
    if (input.NewCustomKeyStoreName !== undefined) {
        bodyParams["NewCustomKeyStoreName"] = input.NewCustomKeyStoreName;
    }
    return bodyParams;
};
const serializeAws_json1_1UpdateKeyDescriptionRequest = (input, context) => {
    const bodyParams = {};
    if (input.Description !== undefined) {
        bodyParams["Description"] = input.Description;
    }
    if (input.KeyId !== undefined) {
        bodyParams["KeyId"] = input.KeyId;
    }
    return bodyParams;
};
const serializeAws_json1_1VerifyRequest = (input, context) => {
    const bodyParams = {};
    if (input.GrantTokens !== undefined) {
        bodyParams["GrantTokens"] = serializeAws_json1_1GrantTokenList(input.GrantTokens, context);
    }
    if (input.KeyId !== undefined) {
        bodyParams["KeyId"] = input.KeyId;
    }
    if (input.Message !== undefined) {
        bodyParams["Message"] = Buffer.from(input.Message).toString("utf-8");
    }
    if (input.MessageType !== undefined) {
        bodyParams["MessageType"] = input.MessageType;
    }
    if (input.Signature !== undefined) {
        bodyParams["Signature"] = Buffer.from(input.Signature).toString("utf-8");
    }
    if (input.SigningAlgorithm !== undefined) {
        bodyParams["SigningAlgorithm"] = input.SigningAlgorithm;
    }
    return bodyParams;
};
const deserializeAws_json1_1AliasList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1AliasListEntry(entry, context));
};
const deserializeAws_json1_1AliasListEntry = (output, context) => {
    let contents = {
        __type: "AliasListEntry",
        AliasArn: undefined,
        AliasName: undefined,
        TargetKeyId: undefined
    };
    if (output.AliasArn !== undefined && output.AliasArn !== null) {
        contents.AliasArn = output.AliasArn;
    }
    if (output.AliasName !== undefined && output.AliasName !== null) {
        contents.AliasName = output.AliasName;
    }
    if (output.TargetKeyId !== undefined && output.TargetKeyId !== null) {
        contents.TargetKeyId = output.TargetKeyId;
    }
    return contents;
};
const deserializeAws_json1_1AlreadyExistsException = (output, context) => {
    let contents = {
        __type: "AlreadyExistsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1CancelKeyDeletionResponse = (output, context) => {
    let contents = {
        __type: "CancelKeyDeletionResponse",
        KeyId: undefined
    };
    if (output.KeyId !== undefined && output.KeyId !== null) {
        contents.KeyId = output.KeyId;
    }
    return contents;
};
const deserializeAws_json1_1CloudHsmClusterInUseException = (output, context) => {
    let contents = {
        __type: "CloudHsmClusterInUseException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1CloudHsmClusterInvalidConfigurationException = (output, context) => {
    let contents = {
        __type: "CloudHsmClusterInvalidConfigurationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1CloudHsmClusterNotActiveException = (output, context) => {
    let contents = {
        __type: "CloudHsmClusterNotActiveException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1CloudHsmClusterNotFoundException = (output, context) => {
    let contents = {
        __type: "CloudHsmClusterNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1CloudHsmClusterNotRelatedException = (output, context) => {
    let contents = {
        __type: "CloudHsmClusterNotRelatedException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ConnectCustomKeyStoreResponse = (output, context) => {
    let contents = {
        __type: "ConnectCustomKeyStoreResponse"
    };
    return contents;
};
const deserializeAws_json1_1CreateCustomKeyStoreResponse = (output, context) => {
    let contents = {
        __type: "CreateCustomKeyStoreResponse",
        CustomKeyStoreId: undefined
    };
    if (output.CustomKeyStoreId !== undefined &&
        output.CustomKeyStoreId !== null) {
        contents.CustomKeyStoreId = output.CustomKeyStoreId;
    }
    return contents;
};
const deserializeAws_json1_1CreateGrantResponse = (output, context) => {
    let contents = {
        __type: "CreateGrantResponse",
        GrantId: undefined,
        GrantToken: undefined
    };
    if (output.GrantId !== undefined && output.GrantId !== null) {
        contents.GrantId = output.GrantId;
    }
    if (output.GrantToken !== undefined && output.GrantToken !== null) {
        contents.GrantToken = output.GrantToken;
    }
    return contents;
};
const deserializeAws_json1_1CreateKeyResponse = (output, context) => {
    let contents = {
        __type: "CreateKeyResponse",
        KeyMetadata: undefined
    };
    if (output.KeyMetadata !== undefined && output.KeyMetadata !== null) {
        contents.KeyMetadata = deserializeAws_json1_1KeyMetadata(output.KeyMetadata, context);
    }
    return contents;
};
const deserializeAws_json1_1CustomKeyStoreHasCMKsException = (output, context) => {
    let contents = {
        __type: "CustomKeyStoreHasCMKsException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1CustomKeyStoreInvalidStateException = (output, context) => {
    let contents = {
        __type: "CustomKeyStoreInvalidStateException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1CustomKeyStoreNameInUseException = (output, context) => {
    let contents = {
        __type: "CustomKeyStoreNameInUseException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1CustomKeyStoreNotFoundException = (output, context) => {
    let contents = {
        __type: "CustomKeyStoreNotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1CustomKeyStoresList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1CustomKeyStoresListEntry(entry, context));
};
const deserializeAws_json1_1CustomKeyStoresListEntry = (output, context) => {
    let contents = {
        __type: "CustomKeyStoresListEntry",
        CloudHsmClusterId: undefined,
        ConnectionErrorCode: undefined,
        ConnectionState: undefined,
        CreationDate: undefined,
        CustomKeyStoreId: undefined,
        CustomKeyStoreName: undefined,
        TrustAnchorCertificate: undefined
    };
    if (output.CloudHsmClusterId !== undefined &&
        output.CloudHsmClusterId !== null) {
        contents.CloudHsmClusterId = output.CloudHsmClusterId;
    }
    if (output.ConnectionErrorCode !== undefined &&
        output.ConnectionErrorCode !== null) {
        contents.ConnectionErrorCode = output.ConnectionErrorCode;
    }
    if (output.ConnectionState !== undefined && output.ConnectionState !== null) {
        contents.ConnectionState = output.ConnectionState;
    }
    if (output.CreationDate !== undefined && output.CreationDate !== null) {
        contents.CreationDate = new Date(Math.round(output.CreationDate * 1000));
    }
    if (output.CustomKeyStoreId !== undefined &&
        output.CustomKeyStoreId !== null) {
        contents.CustomKeyStoreId = output.CustomKeyStoreId;
    }
    if (output.CustomKeyStoreName !== undefined &&
        output.CustomKeyStoreName !== null) {
        contents.CustomKeyStoreName = output.CustomKeyStoreName;
    }
    if (output.TrustAnchorCertificate !== undefined &&
        output.TrustAnchorCertificate !== null) {
        contents.TrustAnchorCertificate = output.TrustAnchorCertificate;
    }
    return contents;
};
const deserializeAws_json1_1DecryptResponse = (output, context) => {
    let contents = {
        __type: "DecryptResponse",
        EncryptionAlgorithm: undefined,
        KeyId: undefined,
        Plaintext: undefined
    };
    if (output.EncryptionAlgorithm !== undefined &&
        output.EncryptionAlgorithm !== null) {
        contents.EncryptionAlgorithm = output.EncryptionAlgorithm;
    }
    if (output.KeyId !== undefined && output.KeyId !== null) {
        contents.KeyId = output.KeyId;
    }
    if (output.Plaintext !== undefined && output.Plaintext !== null) {
        contents.Plaintext = Uint8Array.from(output.Plaintext);
    }
    return contents;
};
const deserializeAws_json1_1DeleteCustomKeyStoreResponse = (output, context) => {
    let contents = {
        __type: "DeleteCustomKeyStoreResponse"
    };
    return contents;
};
const deserializeAws_json1_1DependencyTimeoutException = (output, context) => {
    let contents = {
        __type: "DependencyTimeoutException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1DescribeCustomKeyStoresResponse = (output, context) => {
    let contents = {
        __type: "DescribeCustomKeyStoresResponse",
        CustomKeyStores: undefined,
        NextMarker: undefined,
        Truncated: undefined
    };
    if (output.CustomKeyStores !== undefined && output.CustomKeyStores !== null) {
        contents.CustomKeyStores = deserializeAws_json1_1CustomKeyStoresList(output.CustomKeyStores, context);
    }
    if (output.NextMarker !== undefined && output.NextMarker !== null) {
        contents.NextMarker = output.NextMarker;
    }
    if (output.Truncated !== undefined && output.Truncated !== null) {
        contents.Truncated = output.Truncated;
    }
    return contents;
};
const deserializeAws_json1_1DescribeKeyResponse = (output, context) => {
    let contents = {
        __type: "DescribeKeyResponse",
        KeyMetadata: undefined
    };
    if (output.KeyMetadata !== undefined && output.KeyMetadata !== null) {
        contents.KeyMetadata = deserializeAws_json1_1KeyMetadata(output.KeyMetadata, context);
    }
    return contents;
};
const deserializeAws_json1_1DisabledException = (output, context) => {
    let contents = {
        __type: "DisabledException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1DisconnectCustomKeyStoreResponse = (output, context) => {
    let contents = {
        __type: "DisconnectCustomKeyStoreResponse"
    };
    return contents;
};
const deserializeAws_json1_1EncryptResponse = (output, context) => {
    let contents = {
        __type: "EncryptResponse",
        CiphertextBlob: undefined,
        EncryptionAlgorithm: undefined,
        KeyId: undefined
    };
    if (output.CiphertextBlob !== undefined && output.CiphertextBlob !== null) {
        contents.CiphertextBlob = Uint8Array.from(output.CiphertextBlob);
    }
    if (output.EncryptionAlgorithm !== undefined &&
        output.EncryptionAlgorithm !== null) {
        contents.EncryptionAlgorithm = output.EncryptionAlgorithm;
    }
    if (output.KeyId !== undefined && output.KeyId !== null) {
        contents.KeyId = output.KeyId;
    }
    return contents;
};
const deserializeAws_json1_1EncryptionAlgorithmSpecList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1EncryptionContextType = (output, context) => {
    const mapParams = {};
    Object.keys(output).forEach(key => {
        mapParams[key] = output[key];
    });
    return mapParams;
};
const deserializeAws_json1_1ExpiredImportTokenException = (output, context) => {
    let contents = {
        __type: "ExpiredImportTokenException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1GenerateDataKeyPairResponse = (output, context) => {
    let contents = {
        __type: "GenerateDataKeyPairResponse",
        KeyId: undefined,
        KeyPairSpec: undefined,
        PrivateKeyCiphertextBlob: undefined,
        PrivateKeyPlaintext: undefined,
        PublicKey: undefined
    };
    if (output.KeyId !== undefined && output.KeyId !== null) {
        contents.KeyId = output.KeyId;
    }
    if (output.KeyPairSpec !== undefined && output.KeyPairSpec !== null) {
        contents.KeyPairSpec = output.KeyPairSpec;
    }
    if (output.PrivateKeyCiphertextBlob !== undefined &&
        output.PrivateKeyCiphertextBlob !== null) {
        contents.PrivateKeyCiphertextBlob = Uint8Array.from(output.PrivateKeyCiphertextBlob);
    }
    if (output.PrivateKeyPlaintext !== undefined &&
        output.PrivateKeyPlaintext !== null) {
        contents.PrivateKeyPlaintext = Uint8Array.from(output.PrivateKeyPlaintext);
    }
    if (output.PublicKey !== undefined && output.PublicKey !== null) {
        contents.PublicKey = Uint8Array.from(output.PublicKey);
    }
    return contents;
};
const deserializeAws_json1_1GenerateDataKeyPairWithoutPlaintextResponse = (output, context) => {
    let contents = {
        __type: "GenerateDataKeyPairWithoutPlaintextResponse",
        KeyId: undefined,
        KeyPairSpec: undefined,
        PrivateKeyCiphertextBlob: undefined,
        PublicKey: undefined
    };
    if (output.KeyId !== undefined && output.KeyId !== null) {
        contents.KeyId = output.KeyId;
    }
    if (output.KeyPairSpec !== undefined && output.KeyPairSpec !== null) {
        contents.KeyPairSpec = output.KeyPairSpec;
    }
    if (output.PrivateKeyCiphertextBlob !== undefined &&
        output.PrivateKeyCiphertextBlob !== null) {
        contents.PrivateKeyCiphertextBlob = Uint8Array.from(output.PrivateKeyCiphertextBlob);
    }
    if (output.PublicKey !== undefined && output.PublicKey !== null) {
        contents.PublicKey = Uint8Array.from(output.PublicKey);
    }
    return contents;
};
const deserializeAws_json1_1GenerateDataKeyResponse = (output, context) => {
    let contents = {
        __type: "GenerateDataKeyResponse",
        CiphertextBlob: undefined,
        KeyId: undefined,
        Plaintext: undefined
    };
    if (output.CiphertextBlob !== undefined && output.CiphertextBlob !== null) {
        contents.CiphertextBlob = Uint8Array.from(output.CiphertextBlob);
    }
    if (output.KeyId !== undefined && output.KeyId !== null) {
        contents.KeyId = output.KeyId;
    }
    if (output.Plaintext !== undefined && output.Plaintext !== null) {
        contents.Plaintext = Uint8Array.from(output.Plaintext);
    }
    return contents;
};
const deserializeAws_json1_1GenerateDataKeyWithoutPlaintextResponse = (output, context) => {
    let contents = {
        __type: "GenerateDataKeyWithoutPlaintextResponse",
        CiphertextBlob: undefined,
        KeyId: undefined
    };
    if (output.CiphertextBlob !== undefined && output.CiphertextBlob !== null) {
        contents.CiphertextBlob = Uint8Array.from(output.CiphertextBlob);
    }
    if (output.KeyId !== undefined && output.KeyId !== null) {
        contents.KeyId = output.KeyId;
    }
    return contents;
};
const deserializeAws_json1_1GenerateRandomResponse = (output, context) => {
    let contents = {
        __type: "GenerateRandomResponse",
        Plaintext: undefined
    };
    if (output.Plaintext !== undefined && output.Plaintext !== null) {
        contents.Plaintext = Uint8Array.from(output.Plaintext);
    }
    return contents;
};
const deserializeAws_json1_1GetKeyPolicyResponse = (output, context) => {
    let contents = {
        __type: "GetKeyPolicyResponse",
        Policy: undefined
    };
    if (output.Policy !== undefined && output.Policy !== null) {
        contents.Policy = output.Policy;
    }
    return contents;
};
const deserializeAws_json1_1GetKeyRotationStatusResponse = (output, context) => {
    let contents = {
        __type: "GetKeyRotationStatusResponse",
        KeyRotationEnabled: undefined
    };
    if (output.KeyRotationEnabled !== undefined &&
        output.KeyRotationEnabled !== null) {
        contents.KeyRotationEnabled = output.KeyRotationEnabled;
    }
    return contents;
};
const deserializeAws_json1_1GetParametersForImportResponse = (output, context) => {
    let contents = {
        __type: "GetParametersForImportResponse",
        ImportToken: undefined,
        KeyId: undefined,
        ParametersValidTo: undefined,
        PublicKey: undefined
    };
    if (output.ImportToken !== undefined && output.ImportToken !== null) {
        contents.ImportToken = Uint8Array.from(output.ImportToken);
    }
    if (output.KeyId !== undefined && output.KeyId !== null) {
        contents.KeyId = output.KeyId;
    }
    if (output.ParametersValidTo !== undefined &&
        output.ParametersValidTo !== null) {
        contents.ParametersValidTo = new Date(Math.round(output.ParametersValidTo * 1000));
    }
    if (output.PublicKey !== undefined && output.PublicKey !== null) {
        contents.PublicKey = Uint8Array.from(output.PublicKey);
    }
    return contents;
};
const deserializeAws_json1_1GetPublicKeyResponse = (output, context) => {
    let contents = {
        __type: "GetPublicKeyResponse",
        CustomerMasterKeySpec: undefined,
        EncryptionAlgorithms: undefined,
        KeyId: undefined,
        KeyUsage: undefined,
        PublicKey: undefined,
        SigningAlgorithms: undefined
    };
    if (output.CustomerMasterKeySpec !== undefined &&
        output.CustomerMasterKeySpec !== null) {
        contents.CustomerMasterKeySpec = output.CustomerMasterKeySpec;
    }
    if (output.EncryptionAlgorithms !== undefined &&
        output.EncryptionAlgorithms !== null) {
        contents.EncryptionAlgorithms = deserializeAws_json1_1EncryptionAlgorithmSpecList(output.EncryptionAlgorithms, context);
    }
    if (output.KeyId !== undefined && output.KeyId !== null) {
        contents.KeyId = output.KeyId;
    }
    if (output.KeyUsage !== undefined && output.KeyUsage !== null) {
        contents.KeyUsage = output.KeyUsage;
    }
    if (output.PublicKey !== undefined && output.PublicKey !== null) {
        contents.PublicKey = Uint8Array.from(output.PublicKey);
    }
    if (output.SigningAlgorithms !== undefined &&
        output.SigningAlgorithms !== null) {
        contents.SigningAlgorithms = deserializeAws_json1_1SigningAlgorithmSpecList(output.SigningAlgorithms, context);
    }
    return contents;
};
const deserializeAws_json1_1GrantConstraints = (output, context) => {
    let contents = {
        __type: "GrantConstraints",
        EncryptionContextEquals: undefined,
        EncryptionContextSubset: undefined
    };
    if (output.EncryptionContextEquals !== undefined &&
        output.EncryptionContextEquals !== null) {
        contents.EncryptionContextEquals = deserializeAws_json1_1EncryptionContextType(output.EncryptionContextEquals, context);
    }
    if (output.EncryptionContextSubset !== undefined &&
        output.EncryptionContextSubset !== null) {
        contents.EncryptionContextSubset = deserializeAws_json1_1EncryptionContextType(output.EncryptionContextSubset, context);
    }
    return contents;
};
const deserializeAws_json1_1GrantList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1GrantListEntry(entry, context));
};
const deserializeAws_json1_1GrantListEntry = (output, context) => {
    let contents = {
        __type: "GrantListEntry",
        Constraints: undefined,
        CreationDate: undefined,
        GrantId: undefined,
        GranteePrincipal: undefined,
        IssuingAccount: undefined,
        KeyId: undefined,
        Name: undefined,
        Operations: undefined,
        RetiringPrincipal: undefined
    };
    if (output.Constraints !== undefined && output.Constraints !== null) {
        contents.Constraints = deserializeAws_json1_1GrantConstraints(output.Constraints, context);
    }
    if (output.CreationDate !== undefined && output.CreationDate !== null) {
        contents.CreationDate = new Date(Math.round(output.CreationDate * 1000));
    }
    if (output.GrantId !== undefined && output.GrantId !== null) {
        contents.GrantId = output.GrantId;
    }
    if (output.GranteePrincipal !== undefined &&
        output.GranteePrincipal !== null) {
        contents.GranteePrincipal = output.GranteePrincipal;
    }
    if (output.IssuingAccount !== undefined && output.IssuingAccount !== null) {
        contents.IssuingAccount = output.IssuingAccount;
    }
    if (output.KeyId !== undefined && output.KeyId !== null) {
        contents.KeyId = output.KeyId;
    }
    if (output.Name !== undefined && output.Name !== null) {
        contents.Name = output.Name;
    }
    if (output.Operations !== undefined && output.Operations !== null) {
        contents.Operations = deserializeAws_json1_1GrantOperationList(output.Operations, context);
    }
    if (output.RetiringPrincipal !== undefined &&
        output.RetiringPrincipal !== null) {
        contents.RetiringPrincipal = output.RetiringPrincipal;
    }
    return contents;
};
const deserializeAws_json1_1GrantOperationList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ImportKeyMaterialResponse = (output, context) => {
    let contents = {
        __type: "ImportKeyMaterialResponse"
    };
    return contents;
};
const deserializeAws_json1_1IncorrectKeyException = (output, context) => {
    let contents = {
        __type: "IncorrectKeyException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1IncorrectKeyMaterialException = (output, context) => {
    let contents = {
        __type: "IncorrectKeyMaterialException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1IncorrectTrustAnchorException = (output, context) => {
    let contents = {
        __type: "IncorrectTrustAnchorException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidAliasNameException = (output, context) => {
    let contents = {
        __type: "InvalidAliasNameException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidArnException = (output, context) => {
    let contents = {
        __type: "InvalidArnException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidCiphertextException = (output, context) => {
    let contents = {
        __type: "InvalidCiphertextException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidGrantIdException = (output, context) => {
    let contents = {
        __type: "InvalidGrantIdException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidGrantTokenException = (output, context) => {
    let contents = {
        __type: "InvalidGrantTokenException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidImportTokenException = (output, context) => {
    let contents = {
        __type: "InvalidImportTokenException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidKeyUsageException = (output, context) => {
    let contents = {
        __type: "InvalidKeyUsageException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1InvalidMarkerException = (output, context) => {
    let contents = {
        __type: "InvalidMarkerException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1KMSInternalException = (output, context) => {
    let contents = {
        __type: "KMSInternalException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1KMSInvalidSignatureException = (output, context) => {
    let contents = {
        __type: "KMSInvalidSignatureException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1KMSInvalidStateException = (output, context) => {
    let contents = {
        __type: "KMSInvalidStateException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1KeyList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1KeyListEntry(entry, context));
};
const deserializeAws_json1_1KeyListEntry = (output, context) => {
    let contents = {
        __type: "KeyListEntry",
        KeyArn: undefined,
        KeyId: undefined
    };
    if (output.KeyArn !== undefined && output.KeyArn !== null) {
        contents.KeyArn = output.KeyArn;
    }
    if (output.KeyId !== undefined && output.KeyId !== null) {
        contents.KeyId = output.KeyId;
    }
    return contents;
};
const deserializeAws_json1_1KeyMetadata = (output, context) => {
    let contents = {
        __type: "KeyMetadata",
        AWSAccountId: undefined,
        Arn: undefined,
        CloudHsmClusterId: undefined,
        CreationDate: undefined,
        CustomKeyStoreId: undefined,
        CustomerMasterKeySpec: undefined,
        DeletionDate: undefined,
        Description: undefined,
        Enabled: undefined,
        EncryptionAlgorithms: undefined,
        ExpirationModel: undefined,
        KeyId: undefined,
        KeyManager: undefined,
        KeyState: undefined,
        KeyUsage: undefined,
        Origin: undefined,
        SigningAlgorithms: undefined,
        ValidTo: undefined
    };
    if (output.AWSAccountId !== undefined && output.AWSAccountId !== null) {
        contents.AWSAccountId = output.AWSAccountId;
    }
    if (output.Arn !== undefined && output.Arn !== null) {
        contents.Arn = output.Arn;
    }
    if (output.CloudHsmClusterId !== undefined &&
        output.CloudHsmClusterId !== null) {
        contents.CloudHsmClusterId = output.CloudHsmClusterId;
    }
    if (output.CreationDate !== undefined && output.CreationDate !== null) {
        contents.CreationDate = new Date(Math.round(output.CreationDate * 1000));
    }
    if (output.CustomKeyStoreId !== undefined &&
        output.CustomKeyStoreId !== null) {
        contents.CustomKeyStoreId = output.CustomKeyStoreId;
    }
    if (output.CustomerMasterKeySpec !== undefined &&
        output.CustomerMasterKeySpec !== null) {
        contents.CustomerMasterKeySpec = output.CustomerMasterKeySpec;
    }
    if (output.DeletionDate !== undefined && output.DeletionDate !== null) {
        contents.DeletionDate = new Date(Math.round(output.DeletionDate * 1000));
    }
    if (output.Description !== undefined && output.Description !== null) {
        contents.Description = output.Description;
    }
    if (output.Enabled !== undefined && output.Enabled !== null) {
        contents.Enabled = output.Enabled;
    }
    if (output.EncryptionAlgorithms !== undefined &&
        output.EncryptionAlgorithms !== null) {
        contents.EncryptionAlgorithms = deserializeAws_json1_1EncryptionAlgorithmSpecList(output.EncryptionAlgorithms, context);
    }
    if (output.ExpirationModel !== undefined && output.ExpirationModel !== null) {
        contents.ExpirationModel = output.ExpirationModel;
    }
    if (output.KeyId !== undefined && output.KeyId !== null) {
        contents.KeyId = output.KeyId;
    }
    if (output.KeyManager !== undefined && output.KeyManager !== null) {
        contents.KeyManager = output.KeyManager;
    }
    if (output.KeyState !== undefined && output.KeyState !== null) {
        contents.KeyState = output.KeyState;
    }
    if (output.KeyUsage !== undefined && output.KeyUsage !== null) {
        contents.KeyUsage = output.KeyUsage;
    }
    if (output.Origin !== undefined && output.Origin !== null) {
        contents.Origin = output.Origin;
    }
    if (output.SigningAlgorithms !== undefined &&
        output.SigningAlgorithms !== null) {
        contents.SigningAlgorithms = deserializeAws_json1_1SigningAlgorithmSpecList(output.SigningAlgorithms, context);
    }
    if (output.ValidTo !== undefined && output.ValidTo !== null) {
        contents.ValidTo = new Date(Math.round(output.ValidTo * 1000));
    }
    return contents;
};
const deserializeAws_json1_1KeyUnavailableException = (output, context) => {
    let contents = {
        __type: "KeyUnavailableException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    let contents = {
        __type: "LimitExceededException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1ListAliasesResponse = (output, context) => {
    let contents = {
        __type: "ListAliasesResponse",
        Aliases: undefined,
        NextMarker: undefined,
        Truncated: undefined
    };
    if (output.Aliases !== undefined && output.Aliases !== null) {
        contents.Aliases = deserializeAws_json1_1AliasList(output.Aliases, context);
    }
    if (output.NextMarker !== undefined && output.NextMarker !== null) {
        contents.NextMarker = output.NextMarker;
    }
    if (output.Truncated !== undefined && output.Truncated !== null) {
        contents.Truncated = output.Truncated;
    }
    return contents;
};
const deserializeAws_json1_1ListGrantsResponse = (output, context) => {
    let contents = {
        __type: "ListGrantsResponse",
        Grants: undefined,
        NextMarker: undefined,
        Truncated: undefined
    };
    if (output.Grants !== undefined && output.Grants !== null) {
        contents.Grants = deserializeAws_json1_1GrantList(output.Grants, context);
    }
    if (output.NextMarker !== undefined && output.NextMarker !== null) {
        contents.NextMarker = output.NextMarker;
    }
    if (output.Truncated !== undefined && output.Truncated !== null) {
        contents.Truncated = output.Truncated;
    }
    return contents;
};
const deserializeAws_json1_1ListKeyPoliciesResponse = (output, context) => {
    let contents = {
        __type: "ListKeyPoliciesResponse",
        NextMarker: undefined,
        PolicyNames: undefined,
        Truncated: undefined
    };
    if (output.NextMarker !== undefined && output.NextMarker !== null) {
        contents.NextMarker = output.NextMarker;
    }
    if (output.PolicyNames !== undefined && output.PolicyNames !== null) {
        contents.PolicyNames = deserializeAws_json1_1PolicyNameList(output.PolicyNames, context);
    }
    if (output.Truncated !== undefined && output.Truncated !== null) {
        contents.Truncated = output.Truncated;
    }
    return contents;
};
const deserializeAws_json1_1ListKeysResponse = (output, context) => {
    let contents = {
        __type: "ListKeysResponse",
        Keys: undefined,
        NextMarker: undefined,
        Truncated: undefined
    };
    if (output.Keys !== undefined && output.Keys !== null) {
        contents.Keys = deserializeAws_json1_1KeyList(output.Keys, context);
    }
    if (output.NextMarker !== undefined && output.NextMarker !== null) {
        contents.NextMarker = output.NextMarker;
    }
    if (output.Truncated !== undefined && output.Truncated !== null) {
        contents.Truncated = output.Truncated;
    }
    return contents;
};
const deserializeAws_json1_1ListResourceTagsResponse = (output, context) => {
    let contents = {
        __type: "ListResourceTagsResponse",
        NextMarker: undefined,
        Tags: undefined,
        Truncated: undefined
    };
    if (output.NextMarker !== undefined && output.NextMarker !== null) {
        contents.NextMarker = output.NextMarker;
    }
    if (output.Tags !== undefined && output.Tags !== null) {
        contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
    }
    if (output.Truncated !== undefined && output.Truncated !== null) {
        contents.Truncated = output.Truncated;
    }
    return contents;
};
const deserializeAws_json1_1MalformedPolicyDocumentException = (output, context) => {
    let contents = {
        __type: "MalformedPolicyDocumentException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1NotFoundException = (output, context) => {
    let contents = {
        __type: "NotFoundException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1PolicyNameList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1ReEncryptResponse = (output, context) => {
    let contents = {
        __type: "ReEncryptResponse",
        CiphertextBlob: undefined,
        DestinationEncryptionAlgorithm: undefined,
        KeyId: undefined,
        SourceEncryptionAlgorithm: undefined,
        SourceKeyId: undefined
    };
    if (output.CiphertextBlob !== undefined && output.CiphertextBlob !== null) {
        contents.CiphertextBlob = Uint8Array.from(output.CiphertextBlob);
    }
    if (output.DestinationEncryptionAlgorithm !== undefined &&
        output.DestinationEncryptionAlgorithm !== null) {
        contents.DestinationEncryptionAlgorithm =
            output.DestinationEncryptionAlgorithm;
    }
    if (output.KeyId !== undefined && output.KeyId !== null) {
        contents.KeyId = output.KeyId;
    }
    if (output.SourceEncryptionAlgorithm !== undefined &&
        output.SourceEncryptionAlgorithm !== null) {
        contents.SourceEncryptionAlgorithm = output.SourceEncryptionAlgorithm;
    }
    if (output.SourceKeyId !== undefined && output.SourceKeyId !== null) {
        contents.SourceKeyId = output.SourceKeyId;
    }
    return contents;
};
const deserializeAws_json1_1ScheduleKeyDeletionResponse = (output, context) => {
    let contents = {
        __type: "ScheduleKeyDeletionResponse",
        DeletionDate: undefined,
        KeyId: undefined
    };
    if (output.DeletionDate !== undefined && output.DeletionDate !== null) {
        contents.DeletionDate = new Date(Math.round(output.DeletionDate * 1000));
    }
    if (output.KeyId !== undefined && output.KeyId !== null) {
        contents.KeyId = output.KeyId;
    }
    return contents;
};
const deserializeAws_json1_1SignResponse = (output, context) => {
    let contents = {
        __type: "SignResponse",
        KeyId: undefined,
        Signature: undefined,
        SigningAlgorithm: undefined
    };
    if (output.KeyId !== undefined && output.KeyId !== null) {
        contents.KeyId = output.KeyId;
    }
    if (output.Signature !== undefined && output.Signature !== null) {
        contents.Signature = Uint8Array.from(output.Signature);
    }
    if (output.SigningAlgorithm !== undefined &&
        output.SigningAlgorithm !== null) {
        contents.SigningAlgorithm = output.SigningAlgorithm;
    }
    return contents;
};
const deserializeAws_json1_1SigningAlgorithmSpecList = (output, context) => {
    return (output || []).map((entry) => entry);
};
const deserializeAws_json1_1Tag = (output, context) => {
    let contents = {
        __type: "Tag",
        TagKey: undefined,
        TagValue: undefined
    };
    if (output.TagKey !== undefined && output.TagKey !== null) {
        contents.TagKey = output.TagKey;
    }
    if (output.TagValue !== undefined && output.TagValue !== null) {
        contents.TagValue = output.TagValue;
    }
    return contents;
};
const deserializeAws_json1_1TagException = (output, context) => {
    let contents = {
        __type: "TagException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1TagList = (output, context) => {
    return (output || []).map((entry) => deserializeAws_json1_1Tag(entry, context));
};
const deserializeAws_json1_1UnsupportedOperationException = (output, context) => {
    let contents = {
        __type: "UnsupportedOperationException",
        message: undefined
    };
    if (output.message !== undefined && output.message !== null) {
        contents.message = output.message;
    }
    return contents;
};
const deserializeAws_json1_1UpdateCustomKeyStoreResponse = (output, context) => {
    let contents = {
        __type: "UpdateCustomKeyStoreResponse"
    };
    return contents;
};
const deserializeAws_json1_1VerifyResponse = (output, context) => {
    let contents = {
        __type: "VerifyResponse",
        KeyId: undefined,
        SignatureValid: undefined,
        SigningAlgorithm: undefined
    };
    if (output.KeyId !== undefined && output.KeyId !== null) {
        contents.KeyId = output.KeyId;
    }
    if (output.SignatureValid !== undefined && output.SignatureValid !== null) {
        contents.SignatureValid = output.SignatureValid;
    }
    if (output.SigningAlgorithm !== undefined &&
        output.SigningAlgorithm !== null) {
        contents.SigningAlgorithm = output.SigningAlgorithm;
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