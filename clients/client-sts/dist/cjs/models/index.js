"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AssumeRoleRequest;
(function (AssumeRoleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssumeRoleRequest");
    }
    AssumeRoleRequest.isa = isa;
})(AssumeRoleRequest = exports.AssumeRoleRequest || (exports.AssumeRoleRequest = {}));
var AssumeRoleResponse;
(function (AssumeRoleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssumeRoleResponse");
    }
    AssumeRoleResponse.isa = isa;
})(AssumeRoleResponse = exports.AssumeRoleResponse || (exports.AssumeRoleResponse = {}));
var AssumeRoleWithSAMLRequest;
(function (AssumeRoleWithSAMLRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssumeRoleWithSAMLRequest");
    }
    AssumeRoleWithSAMLRequest.isa = isa;
})(AssumeRoleWithSAMLRequest = exports.AssumeRoleWithSAMLRequest || (exports.AssumeRoleWithSAMLRequest = {}));
var AssumeRoleWithSAMLResponse;
(function (AssumeRoleWithSAMLResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssumeRoleWithSAMLResponse");
    }
    AssumeRoleWithSAMLResponse.isa = isa;
})(AssumeRoleWithSAMLResponse = exports.AssumeRoleWithSAMLResponse || (exports.AssumeRoleWithSAMLResponse = {}));
var AssumeRoleWithWebIdentityRequest;
(function (AssumeRoleWithWebIdentityRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssumeRoleWithWebIdentityRequest");
    }
    AssumeRoleWithWebIdentityRequest.isa = isa;
})(AssumeRoleWithWebIdentityRequest = exports.AssumeRoleWithWebIdentityRequest || (exports.AssumeRoleWithWebIdentityRequest = {}));
var AssumeRoleWithWebIdentityResponse;
(function (AssumeRoleWithWebIdentityResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssumeRoleWithWebIdentityResponse");
    }
    AssumeRoleWithWebIdentityResponse.isa = isa;
})(AssumeRoleWithWebIdentityResponse = exports.AssumeRoleWithWebIdentityResponse || (exports.AssumeRoleWithWebIdentityResponse = {}));
var AssumedRoleUser;
(function (AssumedRoleUser) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssumedRoleUser");
    }
    AssumedRoleUser.isa = isa;
})(AssumedRoleUser = exports.AssumedRoleUser || (exports.AssumedRoleUser = {}));
var Credentials;
(function (Credentials) {
    function isa(o) {
        return smithy_client_1.isa(o, "Credentials");
    }
    Credentials.isa = isa;
})(Credentials = exports.Credentials || (exports.Credentials = {}));
var DecodeAuthorizationMessageRequest;
(function (DecodeAuthorizationMessageRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DecodeAuthorizationMessageRequest");
    }
    DecodeAuthorizationMessageRequest.isa = isa;
})(DecodeAuthorizationMessageRequest = exports.DecodeAuthorizationMessageRequest || (exports.DecodeAuthorizationMessageRequest = {}));
var DecodeAuthorizationMessageResponse;
(function (DecodeAuthorizationMessageResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DecodeAuthorizationMessageResponse");
    }
    DecodeAuthorizationMessageResponse.isa = isa;
})(DecodeAuthorizationMessageResponse = exports.DecodeAuthorizationMessageResponse || (exports.DecodeAuthorizationMessageResponse = {}));
var ExpiredTokenException;
(function (ExpiredTokenException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExpiredTokenException");
    }
    ExpiredTokenException.isa = isa;
})(ExpiredTokenException = exports.ExpiredTokenException || (exports.ExpiredTokenException = {}));
var FederatedUser;
(function (FederatedUser) {
    function isa(o) {
        return smithy_client_1.isa(o, "FederatedUser");
    }
    FederatedUser.isa = isa;
})(FederatedUser = exports.FederatedUser || (exports.FederatedUser = {}));
var GetAccessKeyInfoRequest;
(function (GetAccessKeyInfoRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAccessKeyInfoRequest");
    }
    GetAccessKeyInfoRequest.isa = isa;
})(GetAccessKeyInfoRequest = exports.GetAccessKeyInfoRequest || (exports.GetAccessKeyInfoRequest = {}));
var GetAccessKeyInfoResponse;
(function (GetAccessKeyInfoResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAccessKeyInfoResponse");
    }
    GetAccessKeyInfoResponse.isa = isa;
})(GetAccessKeyInfoResponse = exports.GetAccessKeyInfoResponse || (exports.GetAccessKeyInfoResponse = {}));
var GetCallerIdentityRequest;
(function (GetCallerIdentityRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCallerIdentityRequest");
    }
    GetCallerIdentityRequest.isa = isa;
})(GetCallerIdentityRequest = exports.GetCallerIdentityRequest || (exports.GetCallerIdentityRequest = {}));
var GetCallerIdentityResponse;
(function (GetCallerIdentityResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCallerIdentityResponse");
    }
    GetCallerIdentityResponse.isa = isa;
})(GetCallerIdentityResponse = exports.GetCallerIdentityResponse || (exports.GetCallerIdentityResponse = {}));
var GetFederationTokenRequest;
(function (GetFederationTokenRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetFederationTokenRequest");
    }
    GetFederationTokenRequest.isa = isa;
})(GetFederationTokenRequest = exports.GetFederationTokenRequest || (exports.GetFederationTokenRequest = {}));
var GetFederationTokenResponse;
(function (GetFederationTokenResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetFederationTokenResponse");
    }
    GetFederationTokenResponse.isa = isa;
})(GetFederationTokenResponse = exports.GetFederationTokenResponse || (exports.GetFederationTokenResponse = {}));
var GetSessionTokenRequest;
(function (GetSessionTokenRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSessionTokenRequest");
    }
    GetSessionTokenRequest.isa = isa;
})(GetSessionTokenRequest = exports.GetSessionTokenRequest || (exports.GetSessionTokenRequest = {}));
var GetSessionTokenResponse;
(function (GetSessionTokenResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSessionTokenResponse");
    }
    GetSessionTokenResponse.isa = isa;
})(GetSessionTokenResponse = exports.GetSessionTokenResponse || (exports.GetSessionTokenResponse = {}));
var IDPCommunicationErrorException;
(function (IDPCommunicationErrorException) {
    function isa(o) {
        return smithy_client_1.isa(o, "IDPCommunicationErrorException");
    }
    IDPCommunicationErrorException.isa = isa;
})(IDPCommunicationErrorException = exports.IDPCommunicationErrorException || (exports.IDPCommunicationErrorException = {}));
var IDPRejectedClaimException;
(function (IDPRejectedClaimException) {
    function isa(o) {
        return smithy_client_1.isa(o, "IDPRejectedClaimException");
    }
    IDPRejectedClaimException.isa = isa;
})(IDPRejectedClaimException = exports.IDPRejectedClaimException || (exports.IDPRejectedClaimException = {}));
var InvalidAuthorizationMessageException;
(function (InvalidAuthorizationMessageException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidAuthorizationMessageException");
    }
    InvalidAuthorizationMessageException.isa = isa;
})(InvalidAuthorizationMessageException = exports.InvalidAuthorizationMessageException || (exports.InvalidAuthorizationMessageException = {}));
var InvalidIdentityTokenException;
(function (InvalidIdentityTokenException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidIdentityTokenException");
    }
    InvalidIdentityTokenException.isa = isa;
})(InvalidIdentityTokenException = exports.InvalidIdentityTokenException || (exports.InvalidIdentityTokenException = {}));
var MalformedPolicyDocumentException;
(function (MalformedPolicyDocumentException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MalformedPolicyDocumentException");
    }
    MalformedPolicyDocumentException.isa = isa;
})(MalformedPolicyDocumentException = exports.MalformedPolicyDocumentException || (exports.MalformedPolicyDocumentException = {}));
var PackedPolicyTooLargeException;
(function (PackedPolicyTooLargeException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PackedPolicyTooLargeException");
    }
    PackedPolicyTooLargeException.isa = isa;
})(PackedPolicyTooLargeException = exports.PackedPolicyTooLargeException || (exports.PackedPolicyTooLargeException = {}));
var PolicyDescriptorType;
(function (PolicyDescriptorType) {
    function isa(o) {
        return smithy_client_1.isa(o, "PolicyDescriptorType");
    }
    PolicyDescriptorType.isa = isa;
})(PolicyDescriptorType = exports.PolicyDescriptorType || (exports.PolicyDescriptorType = {}));
var RegionDisabledException;
(function (RegionDisabledException) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegionDisabledException");
    }
    RegionDisabledException.isa = isa;
})(RegionDisabledException = exports.RegionDisabledException || (exports.RegionDisabledException = {}));
var Tag;
(function (Tag) {
    function isa(o) {
        return smithy_client_1.isa(o, "Tag");
    }
    Tag.isa = isa;
})(Tag = exports.Tag || (exports.Tag = {}));
//# sourceMappingURL=index.js.map