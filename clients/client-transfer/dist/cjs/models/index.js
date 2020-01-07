"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceUnavailableException");
    }
    ServiceUnavailableException.isa = isa;
})(ServiceUnavailableException = exports.ServiceUnavailableException || (exports.ServiceUnavailableException = {}));
var ConflictException;
(function (ConflictException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConflictException");
    }
    ConflictException.isa = isa;
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var CreateServerRequest;
(function (CreateServerRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateServerRequest");
    }
    CreateServerRequest.isa = isa;
})(CreateServerRequest = exports.CreateServerRequest || (exports.CreateServerRequest = {}));
var CreateServerResponse;
(function (CreateServerResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateServerResponse");
    }
    CreateServerResponse.isa = isa;
})(CreateServerResponse = exports.CreateServerResponse || (exports.CreateServerResponse = {}));
var CreateUserRequest;
(function (CreateUserRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateUserRequest");
    }
    CreateUserRequest.isa = isa;
})(CreateUserRequest = exports.CreateUserRequest || (exports.CreateUserRequest = {}));
var CreateUserResponse;
(function (CreateUserResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateUserResponse");
    }
    CreateUserResponse.isa = isa;
})(CreateUserResponse = exports.CreateUserResponse || (exports.CreateUserResponse = {}));
var DeleteServerRequest;
(function (DeleteServerRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteServerRequest");
    }
    DeleteServerRequest.isa = isa;
})(DeleteServerRequest = exports.DeleteServerRequest || (exports.DeleteServerRequest = {}));
var DeleteSshPublicKeyRequest;
(function (DeleteSshPublicKeyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteSshPublicKeyRequest");
    }
    DeleteSshPublicKeyRequest.isa = isa;
})(DeleteSshPublicKeyRequest = exports.DeleteSshPublicKeyRequest || (exports.DeleteSshPublicKeyRequest = {}));
var DeleteUserRequest;
(function (DeleteUserRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteUserRequest");
    }
    DeleteUserRequest.isa = isa;
})(DeleteUserRequest = exports.DeleteUserRequest || (exports.DeleteUserRequest = {}));
var DescribeServerRequest;
(function (DescribeServerRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeServerRequest");
    }
    DescribeServerRequest.isa = isa;
})(DescribeServerRequest = exports.DescribeServerRequest || (exports.DescribeServerRequest = {}));
var DescribeServerResponse;
(function (DescribeServerResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeServerResponse");
    }
    DescribeServerResponse.isa = isa;
})(DescribeServerResponse = exports.DescribeServerResponse || (exports.DescribeServerResponse = {}));
var DescribeUserRequest;
(function (DescribeUserRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeUserRequest");
    }
    DescribeUserRequest.isa = isa;
})(DescribeUserRequest = exports.DescribeUserRequest || (exports.DescribeUserRequest = {}));
var DescribeUserResponse;
(function (DescribeUserResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeUserResponse");
    }
    DescribeUserResponse.isa = isa;
})(DescribeUserResponse = exports.DescribeUserResponse || (exports.DescribeUserResponse = {}));
var DescribedServer;
(function (DescribedServer) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribedServer");
    }
    DescribedServer.isa = isa;
})(DescribedServer = exports.DescribedServer || (exports.DescribedServer = {}));
var DescribedUser;
(function (DescribedUser) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribedUser");
    }
    DescribedUser.isa = isa;
})(DescribedUser = exports.DescribedUser || (exports.DescribedUser = {}));
var EndpointDetails;
(function (EndpointDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "EndpointDetails");
    }
    EndpointDetails.isa = isa;
})(EndpointDetails = exports.EndpointDetails || (exports.EndpointDetails = {}));
var EndpointType;
(function (EndpointType) {
    EndpointType["PUBLIC"] = "PUBLIC";
    EndpointType["VPC"] = "VPC";
    EndpointType["VPC_ENDPOINT"] = "VPC_ENDPOINT";
})(EndpointType = exports.EndpointType || (exports.EndpointType = {}));
var HomeDirectoryMapEntry;
(function (HomeDirectoryMapEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "HomeDirectoryMapEntry");
    }
    HomeDirectoryMapEntry.isa = isa;
})(HomeDirectoryMapEntry = exports.HomeDirectoryMapEntry || (exports.HomeDirectoryMapEntry = {}));
var HomeDirectoryType;
(function (HomeDirectoryType) {
    HomeDirectoryType["LOGICAL"] = "LOGICAL";
    HomeDirectoryType["PATH"] = "PATH";
})(HomeDirectoryType = exports.HomeDirectoryType || (exports.HomeDirectoryType = {}));
var IdentityProviderDetails;
(function (IdentityProviderDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "IdentityProviderDetails");
    }
    IdentityProviderDetails.isa = isa;
})(IdentityProviderDetails = exports.IdentityProviderDetails || (exports.IdentityProviderDetails = {}));
var IdentityProviderType;
(function (IdentityProviderType) {
    IdentityProviderType["API_GATEWAY"] = "API_GATEWAY";
    IdentityProviderType["SERVICE_MANAGED"] = "SERVICE_MANAGED";
})(IdentityProviderType = exports.IdentityProviderType || (exports.IdentityProviderType = {}));
var ImportSshPublicKeyRequest;
(function (ImportSshPublicKeyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ImportSshPublicKeyRequest");
    }
    ImportSshPublicKeyRequest.isa = isa;
})(ImportSshPublicKeyRequest = exports.ImportSshPublicKeyRequest || (exports.ImportSshPublicKeyRequest = {}));
var ImportSshPublicKeyResponse;
(function (ImportSshPublicKeyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ImportSshPublicKeyResponse");
    }
    ImportSshPublicKeyResponse.isa = isa;
})(ImportSshPublicKeyResponse = exports.ImportSshPublicKeyResponse || (exports.ImportSshPublicKeyResponse = {}));
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
var InvalidRequestException;
(function (InvalidRequestException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidRequestException");
    }
    InvalidRequestException.isa = isa;
})(InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {}));
var ListServersRequest;
(function (ListServersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListServersRequest");
    }
    ListServersRequest.isa = isa;
})(ListServersRequest = exports.ListServersRequest || (exports.ListServersRequest = {}));
var ListServersResponse;
(function (ListServersResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListServersResponse");
    }
    ListServersResponse.isa = isa;
})(ListServersResponse = exports.ListServersResponse || (exports.ListServersResponse = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsForResourceRequest");
    }
    ListTagsForResourceRequest.isa = isa;
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsForResourceResponse");
    }
    ListTagsForResourceResponse.isa = isa;
})(ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {}));
var ListUsersRequest;
(function (ListUsersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListUsersRequest");
    }
    ListUsersRequest.isa = isa;
})(ListUsersRequest = exports.ListUsersRequest || (exports.ListUsersRequest = {}));
var ListUsersResponse;
(function (ListUsersResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListUsersResponse");
    }
    ListUsersResponse.isa = isa;
})(ListUsersResponse = exports.ListUsersResponse || (exports.ListUsersResponse = {}));
var ListedServer;
(function (ListedServer) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListedServer");
    }
    ListedServer.isa = isa;
})(ListedServer = exports.ListedServer || (exports.ListedServer = {}));
var ListedUser;
(function (ListedUser) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListedUser");
    }
    ListedUser.isa = isa;
})(ListedUser = exports.ListedUser || (exports.ListedUser = {}));
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
var SshPublicKey;
(function (SshPublicKey) {
    function isa(o) {
        return smithy_client_1.isa(o, "SshPublicKey");
    }
    SshPublicKey.isa = isa;
})(SshPublicKey = exports.SshPublicKey || (exports.SshPublicKey = {}));
var StartServerRequest;
(function (StartServerRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartServerRequest");
    }
    StartServerRequest.isa = isa;
})(StartServerRequest = exports.StartServerRequest || (exports.StartServerRequest = {}));
var State;
(function (State) {
    State["OFFLINE"] = "OFFLINE";
    State["ONLINE"] = "ONLINE";
    State["STARTING"] = "STARTING";
    State["START_FAILED"] = "START_FAILED";
    State["STOPPING"] = "STOPPING";
    State["STOP_FAILED"] = "STOP_FAILED";
})(State = exports.State || (exports.State = {}));
var StopServerRequest;
(function (StopServerRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopServerRequest");
    }
    StopServerRequest.isa = isa;
})(StopServerRequest = exports.StopServerRequest || (exports.StopServerRequest = {}));
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
var TestIdentityProviderRequest;
(function (TestIdentityProviderRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "TestIdentityProviderRequest");
    }
    TestIdentityProviderRequest.isa = isa;
})(TestIdentityProviderRequest = exports.TestIdentityProviderRequest || (exports.TestIdentityProviderRequest = {}));
var TestIdentityProviderResponse;
(function (TestIdentityProviderResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "TestIdentityProviderResponse");
    }
    TestIdentityProviderResponse.isa = isa;
})(TestIdentityProviderResponse = exports.TestIdentityProviderResponse || (exports.TestIdentityProviderResponse = {}));
var ThrottlingException;
(function (ThrottlingException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ThrottlingException");
    }
    ThrottlingException.isa = isa;
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceRequest");
    }
    UntagResourceRequest.isa = isa;
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UpdateServerRequest;
(function (UpdateServerRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateServerRequest");
    }
    UpdateServerRequest.isa = isa;
})(UpdateServerRequest = exports.UpdateServerRequest || (exports.UpdateServerRequest = {}));
var UpdateServerResponse;
(function (UpdateServerResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateServerResponse");
    }
    UpdateServerResponse.isa = isa;
})(UpdateServerResponse = exports.UpdateServerResponse || (exports.UpdateServerResponse = {}));
var UpdateUserRequest;
(function (UpdateUserRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateUserRequest");
    }
    UpdateUserRequest.isa = isa;
})(UpdateUserRequest = exports.UpdateUserRequest || (exports.UpdateUserRequest = {}));
var UpdateUserResponse;
(function (UpdateUserResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateUserResponse");
    }
    UpdateUserResponse.isa = isa;
})(UpdateUserResponse = exports.UpdateUserResponse || (exports.UpdateUserResponse = {}));
//# sourceMappingURL=index.js.map