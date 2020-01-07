"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var CancelRotateSecretRequest;
(function (CancelRotateSecretRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CancelRotateSecretRequest");
    }
    CancelRotateSecretRequest.isa = isa;
})(CancelRotateSecretRequest = exports.CancelRotateSecretRequest || (exports.CancelRotateSecretRequest = {}));
var CancelRotateSecretResponse;
(function (CancelRotateSecretResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CancelRotateSecretResponse");
    }
    CancelRotateSecretResponse.isa = isa;
})(CancelRotateSecretResponse = exports.CancelRotateSecretResponse || (exports.CancelRotateSecretResponse = {}));
var CreateSecretRequest;
(function (CreateSecretRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateSecretRequest");
    }
    CreateSecretRequest.isa = isa;
})(CreateSecretRequest = exports.CreateSecretRequest || (exports.CreateSecretRequest = {}));
var CreateSecretResponse;
(function (CreateSecretResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateSecretResponse");
    }
    CreateSecretResponse.isa = isa;
})(CreateSecretResponse = exports.CreateSecretResponse || (exports.CreateSecretResponse = {}));
var DecryptionFailure;
(function (DecryptionFailure) {
    function isa(o) {
        return smithy_client_1.isa(o, "DecryptionFailure");
    }
    DecryptionFailure.isa = isa;
})(DecryptionFailure = exports.DecryptionFailure || (exports.DecryptionFailure = {}));
var DeleteResourcePolicyRequest;
(function (DeleteResourcePolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteResourcePolicyRequest");
    }
    DeleteResourcePolicyRequest.isa = isa;
})(DeleteResourcePolicyRequest = exports.DeleteResourcePolicyRequest || (exports.DeleteResourcePolicyRequest = {}));
var DeleteResourcePolicyResponse;
(function (DeleteResourcePolicyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteResourcePolicyResponse");
    }
    DeleteResourcePolicyResponse.isa = isa;
})(DeleteResourcePolicyResponse = exports.DeleteResourcePolicyResponse || (exports.DeleteResourcePolicyResponse = {}));
var DeleteSecretRequest;
(function (DeleteSecretRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteSecretRequest");
    }
    DeleteSecretRequest.isa = isa;
})(DeleteSecretRequest = exports.DeleteSecretRequest || (exports.DeleteSecretRequest = {}));
var DeleteSecretResponse;
(function (DeleteSecretResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteSecretResponse");
    }
    DeleteSecretResponse.isa = isa;
})(DeleteSecretResponse = exports.DeleteSecretResponse || (exports.DeleteSecretResponse = {}));
var DescribeSecretRequest;
(function (DescribeSecretRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeSecretRequest");
    }
    DescribeSecretRequest.isa = isa;
})(DescribeSecretRequest = exports.DescribeSecretRequest || (exports.DescribeSecretRequest = {}));
var DescribeSecretResponse;
(function (DescribeSecretResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeSecretResponse");
    }
    DescribeSecretResponse.isa = isa;
})(DescribeSecretResponse = exports.DescribeSecretResponse || (exports.DescribeSecretResponse = {}));
var EncryptionFailure;
(function (EncryptionFailure) {
    function isa(o) {
        return smithy_client_1.isa(o, "EncryptionFailure");
    }
    EncryptionFailure.isa = isa;
})(EncryptionFailure = exports.EncryptionFailure || (exports.EncryptionFailure = {}));
var GetRandomPasswordRequest;
(function (GetRandomPasswordRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRandomPasswordRequest");
    }
    GetRandomPasswordRequest.isa = isa;
})(GetRandomPasswordRequest = exports.GetRandomPasswordRequest || (exports.GetRandomPasswordRequest = {}));
var GetRandomPasswordResponse;
(function (GetRandomPasswordResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRandomPasswordResponse");
    }
    GetRandomPasswordResponse.isa = isa;
})(GetRandomPasswordResponse = exports.GetRandomPasswordResponse || (exports.GetRandomPasswordResponse = {}));
var GetResourcePolicyRequest;
(function (GetResourcePolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetResourcePolicyRequest");
    }
    GetResourcePolicyRequest.isa = isa;
})(GetResourcePolicyRequest = exports.GetResourcePolicyRequest || (exports.GetResourcePolicyRequest = {}));
var GetResourcePolicyResponse;
(function (GetResourcePolicyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetResourcePolicyResponse");
    }
    GetResourcePolicyResponse.isa = isa;
})(GetResourcePolicyResponse = exports.GetResourcePolicyResponse || (exports.GetResourcePolicyResponse = {}));
var GetSecretValueRequest;
(function (GetSecretValueRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSecretValueRequest");
    }
    GetSecretValueRequest.isa = isa;
})(GetSecretValueRequest = exports.GetSecretValueRequest || (exports.GetSecretValueRequest = {}));
var GetSecretValueResponse;
(function (GetSecretValueResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSecretValueResponse");
    }
    GetSecretValueResponse.isa = isa;
})(GetSecretValueResponse = exports.GetSecretValueResponse || (exports.GetSecretValueResponse = {}));
var InternalServiceError;
(function (InternalServiceError) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalServiceError");
    }
    InternalServiceError.isa = isa;
})(InternalServiceError = exports.InternalServiceError || (exports.InternalServiceError = {}));
var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidNextTokenException");
    }
    InvalidNextTokenException.isa = isa;
})(InvalidNextTokenException = exports.InvalidNextTokenException || (exports.InvalidNextTokenException = {}));
var InvalidParameterException;
(function (InvalidParameterException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidParameterException");
    }
    InvalidParameterException.isa = isa;
})(InvalidParameterException = exports.InvalidParameterException || (exports.InvalidParameterException = {}));
var InvalidRequestException;
(function (InvalidRequestException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidRequestException");
    }
    InvalidRequestException.isa = isa;
})(InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ListSecretVersionIdsRequest;
(function (ListSecretVersionIdsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSecretVersionIdsRequest");
    }
    ListSecretVersionIdsRequest.isa = isa;
})(ListSecretVersionIdsRequest = exports.ListSecretVersionIdsRequest || (exports.ListSecretVersionIdsRequest = {}));
var ListSecretVersionIdsResponse;
(function (ListSecretVersionIdsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSecretVersionIdsResponse");
    }
    ListSecretVersionIdsResponse.isa = isa;
})(ListSecretVersionIdsResponse = exports.ListSecretVersionIdsResponse || (exports.ListSecretVersionIdsResponse = {}));
var ListSecretsRequest;
(function (ListSecretsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSecretsRequest");
    }
    ListSecretsRequest.isa = isa;
})(ListSecretsRequest = exports.ListSecretsRequest || (exports.ListSecretsRequest = {}));
var ListSecretsResponse;
(function (ListSecretsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSecretsResponse");
    }
    ListSecretsResponse.isa = isa;
})(ListSecretsResponse = exports.ListSecretsResponse || (exports.ListSecretsResponse = {}));
var MalformedPolicyDocumentException;
(function (MalformedPolicyDocumentException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MalformedPolicyDocumentException");
    }
    MalformedPolicyDocumentException.isa = isa;
})(MalformedPolicyDocumentException = exports.MalformedPolicyDocumentException || (exports.MalformedPolicyDocumentException = {}));
var PreconditionNotMetException;
(function (PreconditionNotMetException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PreconditionNotMetException");
    }
    PreconditionNotMetException.isa = isa;
})(PreconditionNotMetException = exports.PreconditionNotMetException || (exports.PreconditionNotMetException = {}));
var PutResourcePolicyRequest;
(function (PutResourcePolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutResourcePolicyRequest");
    }
    PutResourcePolicyRequest.isa = isa;
})(PutResourcePolicyRequest = exports.PutResourcePolicyRequest || (exports.PutResourcePolicyRequest = {}));
var PutResourcePolicyResponse;
(function (PutResourcePolicyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutResourcePolicyResponse");
    }
    PutResourcePolicyResponse.isa = isa;
})(PutResourcePolicyResponse = exports.PutResourcePolicyResponse || (exports.PutResourcePolicyResponse = {}));
var PutSecretValueRequest;
(function (PutSecretValueRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutSecretValueRequest");
    }
    PutSecretValueRequest.isa = isa;
})(PutSecretValueRequest = exports.PutSecretValueRequest || (exports.PutSecretValueRequest = {}));
var PutSecretValueResponse;
(function (PutSecretValueResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutSecretValueResponse");
    }
    PutSecretValueResponse.isa = isa;
})(PutSecretValueResponse = exports.PutSecretValueResponse || (exports.PutSecretValueResponse = {}));
var ResourceExistsException;
(function (ResourceExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceExistsException");
    }
    ResourceExistsException.isa = isa;
})(ResourceExistsException = exports.ResourceExistsException || (exports.ResourceExistsException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNotFoundException");
    }
    ResourceNotFoundException.isa = isa;
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var RestoreSecretRequest;
(function (RestoreSecretRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RestoreSecretRequest");
    }
    RestoreSecretRequest.isa = isa;
})(RestoreSecretRequest = exports.RestoreSecretRequest || (exports.RestoreSecretRequest = {}));
var RestoreSecretResponse;
(function (RestoreSecretResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "RestoreSecretResponse");
    }
    RestoreSecretResponse.isa = isa;
})(RestoreSecretResponse = exports.RestoreSecretResponse || (exports.RestoreSecretResponse = {}));
var RotateSecretRequest;
(function (RotateSecretRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RotateSecretRequest");
    }
    RotateSecretRequest.isa = isa;
})(RotateSecretRequest = exports.RotateSecretRequest || (exports.RotateSecretRequest = {}));
var RotateSecretResponse;
(function (RotateSecretResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "RotateSecretResponse");
    }
    RotateSecretResponse.isa = isa;
})(RotateSecretResponse = exports.RotateSecretResponse || (exports.RotateSecretResponse = {}));
var RotationRulesType;
(function (RotationRulesType) {
    function isa(o) {
        return smithy_client_1.isa(o, "RotationRulesType");
    }
    RotationRulesType.isa = isa;
})(RotationRulesType = exports.RotationRulesType || (exports.RotationRulesType = {}));
var SecretListEntry;
(function (SecretListEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "SecretListEntry");
    }
    SecretListEntry.isa = isa;
})(SecretListEntry = exports.SecretListEntry || (exports.SecretListEntry = {}));
var SecretVersionsListEntry;
(function (SecretVersionsListEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "SecretVersionsListEntry");
    }
    SecretVersionsListEntry.isa = isa;
})(SecretVersionsListEntry = exports.SecretVersionsListEntry || (exports.SecretVersionsListEntry = {}));
var Tag;
(function (Tag) {
    function isa(o) {
        return smithy_client_1.isa(o, "Tag");
    }
    Tag.isa = isa;
})(Tag = exports.Tag || (exports.Tag = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagResourceRequest");
    }
    TagResourceRequest.isa = isa;
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceRequest");
    }
    UntagResourceRequest.isa = isa;
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UpdateSecretRequest;
(function (UpdateSecretRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateSecretRequest");
    }
    UpdateSecretRequest.isa = isa;
})(UpdateSecretRequest = exports.UpdateSecretRequest || (exports.UpdateSecretRequest = {}));
var UpdateSecretResponse;
(function (UpdateSecretResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateSecretResponse");
    }
    UpdateSecretResponse.isa = isa;
})(UpdateSecretResponse = exports.UpdateSecretResponse || (exports.UpdateSecretResponse = {}));
var UpdateSecretVersionStageRequest;
(function (UpdateSecretVersionStageRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateSecretVersionStageRequest");
    }
    UpdateSecretVersionStageRequest.isa = isa;
})(UpdateSecretVersionStageRequest = exports.UpdateSecretVersionStageRequest || (exports.UpdateSecretVersionStageRequest = {}));
var UpdateSecretVersionStageResponse;
(function (UpdateSecretVersionStageResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateSecretVersionStageResponse");
    }
    UpdateSecretVersionStageResponse.isa = isa;
})(UpdateSecretVersionStageResponse = exports.UpdateSecretVersionStageResponse || (exports.UpdateSecretVersionStageResponse = {}));
//# sourceMappingURL=index.js.map