"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AmbiguousRoleResolutionType;
(function (AmbiguousRoleResolutionType) {
    AmbiguousRoleResolutionType["AUTHENTICATED_ROLE"] = "AuthenticatedRole";
    AmbiguousRoleResolutionType["DENY"] = "Deny";
})(AmbiguousRoleResolutionType = exports.AmbiguousRoleResolutionType || (exports.AmbiguousRoleResolutionType = {}));
var CognitoIdentityProvider;
(function (CognitoIdentityProvider) {
    function isa(o) {
        return smithy_client_1.isa(o, "CognitoIdentityProvider");
    }
    CognitoIdentityProvider.isa = isa;
})(CognitoIdentityProvider = exports.CognitoIdentityProvider || (exports.CognitoIdentityProvider = {}));
var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConcurrentModificationException");
    }
    ConcurrentModificationException.isa = isa;
})(ConcurrentModificationException = exports.ConcurrentModificationException || (exports.ConcurrentModificationException = {}));
var CreateIdentityPoolInput;
(function (CreateIdentityPoolInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateIdentityPoolInput");
    }
    CreateIdentityPoolInput.isa = isa;
})(CreateIdentityPoolInput = exports.CreateIdentityPoolInput || (exports.CreateIdentityPoolInput = {}));
var Credentials;
(function (Credentials) {
    function isa(o) {
        return smithy_client_1.isa(o, "Credentials");
    }
    Credentials.isa = isa;
})(Credentials = exports.Credentials || (exports.Credentials = {}));
var DeleteIdentitiesInput;
(function (DeleteIdentitiesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteIdentitiesInput");
    }
    DeleteIdentitiesInput.isa = isa;
})(DeleteIdentitiesInput = exports.DeleteIdentitiesInput || (exports.DeleteIdentitiesInput = {}));
var DeleteIdentitiesResponse;
(function (DeleteIdentitiesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteIdentitiesResponse");
    }
    DeleteIdentitiesResponse.isa = isa;
})(DeleteIdentitiesResponse = exports.DeleteIdentitiesResponse || (exports.DeleteIdentitiesResponse = {}));
var DeleteIdentityPoolInput;
(function (DeleteIdentityPoolInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteIdentityPoolInput");
    }
    DeleteIdentityPoolInput.isa = isa;
})(DeleteIdentityPoolInput = exports.DeleteIdentityPoolInput || (exports.DeleteIdentityPoolInput = {}));
var DescribeIdentityInput;
(function (DescribeIdentityInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeIdentityInput");
    }
    DescribeIdentityInput.isa = isa;
})(DescribeIdentityInput = exports.DescribeIdentityInput || (exports.DescribeIdentityInput = {}));
var DescribeIdentityPoolInput;
(function (DescribeIdentityPoolInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeIdentityPoolInput");
    }
    DescribeIdentityPoolInput.isa = isa;
})(DescribeIdentityPoolInput = exports.DescribeIdentityPoolInput || (exports.DescribeIdentityPoolInput = {}));
var DeveloperUserAlreadyRegisteredException;
(function (DeveloperUserAlreadyRegisteredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeveloperUserAlreadyRegisteredException");
    }
    DeveloperUserAlreadyRegisteredException.isa = isa;
})(DeveloperUserAlreadyRegisteredException = exports.DeveloperUserAlreadyRegisteredException || (exports.DeveloperUserAlreadyRegisteredException = {}));
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["ACCESS_DENIED"] = "AccessDenied";
    ErrorCode["INTERNAL_SERVER_ERROR"] = "InternalServerError";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
var ExternalServiceException;
(function (ExternalServiceException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExternalServiceException");
    }
    ExternalServiceException.isa = isa;
})(ExternalServiceException = exports.ExternalServiceException || (exports.ExternalServiceException = {}));
var GetCredentialsForIdentityInput;
(function (GetCredentialsForIdentityInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCredentialsForIdentityInput");
    }
    GetCredentialsForIdentityInput.isa = isa;
})(GetCredentialsForIdentityInput = exports.GetCredentialsForIdentityInput || (exports.GetCredentialsForIdentityInput = {}));
var GetCredentialsForIdentityResponse;
(function (GetCredentialsForIdentityResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCredentialsForIdentityResponse");
    }
    GetCredentialsForIdentityResponse.isa = isa;
})(GetCredentialsForIdentityResponse = exports.GetCredentialsForIdentityResponse || (exports.GetCredentialsForIdentityResponse = {}));
var GetIdInput;
(function (GetIdInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetIdInput");
    }
    GetIdInput.isa = isa;
})(GetIdInput = exports.GetIdInput || (exports.GetIdInput = {}));
var GetIdResponse;
(function (GetIdResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetIdResponse");
    }
    GetIdResponse.isa = isa;
})(GetIdResponse = exports.GetIdResponse || (exports.GetIdResponse = {}));
var GetIdentityPoolRolesInput;
(function (GetIdentityPoolRolesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetIdentityPoolRolesInput");
    }
    GetIdentityPoolRolesInput.isa = isa;
})(GetIdentityPoolRolesInput = exports.GetIdentityPoolRolesInput || (exports.GetIdentityPoolRolesInput = {}));
var GetIdentityPoolRolesResponse;
(function (GetIdentityPoolRolesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetIdentityPoolRolesResponse");
    }
    GetIdentityPoolRolesResponse.isa = isa;
})(GetIdentityPoolRolesResponse = exports.GetIdentityPoolRolesResponse || (exports.GetIdentityPoolRolesResponse = {}));
var GetOpenIdTokenForDeveloperIdentityInput;
(function (GetOpenIdTokenForDeveloperIdentityInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetOpenIdTokenForDeveloperIdentityInput");
    }
    GetOpenIdTokenForDeveloperIdentityInput.isa = isa;
})(GetOpenIdTokenForDeveloperIdentityInput = exports.GetOpenIdTokenForDeveloperIdentityInput || (exports.GetOpenIdTokenForDeveloperIdentityInput = {}));
var GetOpenIdTokenForDeveloperIdentityResponse;
(function (GetOpenIdTokenForDeveloperIdentityResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetOpenIdTokenForDeveloperIdentityResponse");
    }
    GetOpenIdTokenForDeveloperIdentityResponse.isa = isa;
})(GetOpenIdTokenForDeveloperIdentityResponse = exports.GetOpenIdTokenForDeveloperIdentityResponse || (exports.GetOpenIdTokenForDeveloperIdentityResponse = {}));
var GetOpenIdTokenInput;
(function (GetOpenIdTokenInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetOpenIdTokenInput");
    }
    GetOpenIdTokenInput.isa = isa;
})(GetOpenIdTokenInput = exports.GetOpenIdTokenInput || (exports.GetOpenIdTokenInput = {}));
var GetOpenIdTokenResponse;
(function (GetOpenIdTokenResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetOpenIdTokenResponse");
    }
    GetOpenIdTokenResponse.isa = isa;
})(GetOpenIdTokenResponse = exports.GetOpenIdTokenResponse || (exports.GetOpenIdTokenResponse = {}));
var IdentityDescription;
(function (IdentityDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "IdentityDescription");
    }
    IdentityDescription.isa = isa;
})(IdentityDescription = exports.IdentityDescription || (exports.IdentityDescription = {}));
var IdentityPool;
(function (IdentityPool) {
    function isa(o) {
        return smithy_client_1.isa(o, "IdentityPool");
    }
    IdentityPool.isa = isa;
})(IdentityPool = exports.IdentityPool || (exports.IdentityPool = {}));
var IdentityPoolShortDescription;
(function (IdentityPoolShortDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "IdentityPoolShortDescription");
    }
    IdentityPoolShortDescription.isa = isa;
})(IdentityPoolShortDescription = exports.IdentityPoolShortDescription || (exports.IdentityPoolShortDescription = {}));
var InternalErrorException;
(function (InternalErrorException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalErrorException");
    }
    InternalErrorException.isa = isa;
})(InternalErrorException = exports.InternalErrorException || (exports.InternalErrorException = {}));
var InvalidIdentityPoolConfigurationException;
(function (InvalidIdentityPoolConfigurationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidIdentityPoolConfigurationException");
    }
    InvalidIdentityPoolConfigurationException.isa = isa;
})(InvalidIdentityPoolConfigurationException = exports.InvalidIdentityPoolConfigurationException || (exports.InvalidIdentityPoolConfigurationException = {}));
var InvalidParameterException;
(function (InvalidParameterException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidParameterException");
    }
    InvalidParameterException.isa = isa;
})(InvalidParameterException = exports.InvalidParameterException || (exports.InvalidParameterException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ListIdentitiesInput;
(function (ListIdentitiesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListIdentitiesInput");
    }
    ListIdentitiesInput.isa = isa;
})(ListIdentitiesInput = exports.ListIdentitiesInput || (exports.ListIdentitiesInput = {}));
var ListIdentitiesResponse;
(function (ListIdentitiesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListIdentitiesResponse");
    }
    ListIdentitiesResponse.isa = isa;
})(ListIdentitiesResponse = exports.ListIdentitiesResponse || (exports.ListIdentitiesResponse = {}));
var ListIdentityPoolsInput;
(function (ListIdentityPoolsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListIdentityPoolsInput");
    }
    ListIdentityPoolsInput.isa = isa;
})(ListIdentityPoolsInput = exports.ListIdentityPoolsInput || (exports.ListIdentityPoolsInput = {}));
var ListIdentityPoolsResponse;
(function (ListIdentityPoolsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListIdentityPoolsResponse");
    }
    ListIdentityPoolsResponse.isa = isa;
})(ListIdentityPoolsResponse = exports.ListIdentityPoolsResponse || (exports.ListIdentityPoolsResponse = {}));
var ListTagsForResourceInput;
(function (ListTagsForResourceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsForResourceInput");
    }
    ListTagsForResourceInput.isa = isa;
})(ListTagsForResourceInput = exports.ListTagsForResourceInput || (exports.ListTagsForResourceInput = {}));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsForResourceResponse");
    }
    ListTagsForResourceResponse.isa = isa;
})(ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {}));
var LookupDeveloperIdentityInput;
(function (LookupDeveloperIdentityInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "LookupDeveloperIdentityInput");
    }
    LookupDeveloperIdentityInput.isa = isa;
})(LookupDeveloperIdentityInput = exports.LookupDeveloperIdentityInput || (exports.LookupDeveloperIdentityInput = {}));
var LookupDeveloperIdentityResponse;
(function (LookupDeveloperIdentityResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "LookupDeveloperIdentityResponse");
    }
    LookupDeveloperIdentityResponse.isa = isa;
})(LookupDeveloperIdentityResponse = exports.LookupDeveloperIdentityResponse || (exports.LookupDeveloperIdentityResponse = {}));
var MappingRule;
(function (MappingRule) {
    function isa(o) {
        return smithy_client_1.isa(o, "MappingRule");
    }
    MappingRule.isa = isa;
})(MappingRule = exports.MappingRule || (exports.MappingRule = {}));
var MappingRuleMatchType;
(function (MappingRuleMatchType) {
    MappingRuleMatchType["CONTAINS"] = "Contains";
    MappingRuleMatchType["EQUALS"] = "Equals";
    MappingRuleMatchType["NOT_EQUAL"] = "NotEqual";
    MappingRuleMatchType["STARTS_WITH"] = "StartsWith";
})(MappingRuleMatchType = exports.MappingRuleMatchType || (exports.MappingRuleMatchType = {}));
var MergeDeveloperIdentitiesInput;
(function (MergeDeveloperIdentitiesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "MergeDeveloperIdentitiesInput");
    }
    MergeDeveloperIdentitiesInput.isa = isa;
})(MergeDeveloperIdentitiesInput = exports.MergeDeveloperIdentitiesInput || (exports.MergeDeveloperIdentitiesInput = {}));
var MergeDeveloperIdentitiesResponse;
(function (MergeDeveloperIdentitiesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "MergeDeveloperIdentitiesResponse");
    }
    MergeDeveloperIdentitiesResponse.isa = isa;
})(MergeDeveloperIdentitiesResponse = exports.MergeDeveloperIdentitiesResponse || (exports.MergeDeveloperIdentitiesResponse = {}));
var NotAuthorizedException;
(function (NotAuthorizedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NotAuthorizedException");
    }
    NotAuthorizedException.isa = isa;
})(NotAuthorizedException = exports.NotAuthorizedException || (exports.NotAuthorizedException = {}));
var ResourceConflictException;
(function (ResourceConflictException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceConflictException");
    }
    ResourceConflictException.isa = isa;
})(ResourceConflictException = exports.ResourceConflictException || (exports.ResourceConflictException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNotFoundException");
    }
    ResourceNotFoundException.isa = isa;
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var RoleMapping;
(function (RoleMapping) {
    function isa(o) {
        return smithy_client_1.isa(o, "RoleMapping");
    }
    RoleMapping.isa = isa;
})(RoleMapping = exports.RoleMapping || (exports.RoleMapping = {}));
var RoleMappingType;
(function (RoleMappingType) {
    RoleMappingType["RULES"] = "Rules";
    RoleMappingType["TOKEN"] = "Token";
})(RoleMappingType = exports.RoleMappingType || (exports.RoleMappingType = {}));
var RulesConfigurationType;
(function (RulesConfigurationType) {
    function isa(o) {
        return smithy_client_1.isa(o, "RulesConfigurationType");
    }
    RulesConfigurationType.isa = isa;
})(RulesConfigurationType = exports.RulesConfigurationType || (exports.RulesConfigurationType = {}));
var SetIdentityPoolRolesInput;
(function (SetIdentityPoolRolesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetIdentityPoolRolesInput");
    }
    SetIdentityPoolRolesInput.isa = isa;
})(SetIdentityPoolRolesInput = exports.SetIdentityPoolRolesInput || (exports.SetIdentityPoolRolesInput = {}));
var TagResourceInput;
(function (TagResourceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagResourceInput");
    }
    TagResourceInput.isa = isa;
})(TagResourceInput = exports.TagResourceInput || (exports.TagResourceInput = {}));
var TagResourceResponse;
(function (TagResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagResourceResponse");
    }
    TagResourceResponse.isa = isa;
})(TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {}));
var TooManyRequestsException;
(function (TooManyRequestsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TooManyRequestsException");
    }
    TooManyRequestsException.isa = isa;
})(TooManyRequestsException = exports.TooManyRequestsException || (exports.TooManyRequestsException = {}));
var UnlinkDeveloperIdentityInput;
(function (UnlinkDeveloperIdentityInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnlinkDeveloperIdentityInput");
    }
    UnlinkDeveloperIdentityInput.isa = isa;
})(UnlinkDeveloperIdentityInput = exports.UnlinkDeveloperIdentityInput || (exports.UnlinkDeveloperIdentityInput = {}));
var UnlinkIdentityInput;
(function (UnlinkIdentityInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnlinkIdentityInput");
    }
    UnlinkIdentityInput.isa = isa;
})(UnlinkIdentityInput = exports.UnlinkIdentityInput || (exports.UnlinkIdentityInput = {}));
var UnprocessedIdentityId;
(function (UnprocessedIdentityId) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnprocessedIdentityId");
    }
    UnprocessedIdentityId.isa = isa;
})(UnprocessedIdentityId = exports.UnprocessedIdentityId || (exports.UnprocessedIdentityId = {}));
var UntagResourceInput;
(function (UntagResourceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceInput");
    }
    UntagResourceInput.isa = isa;
})(UntagResourceInput = exports.UntagResourceInput || (exports.UntagResourceInput = {}));
var UntagResourceResponse;
(function (UntagResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceResponse");
    }
    UntagResourceResponse.isa = isa;
})(UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {}));
//# sourceMappingURL=index.js.map