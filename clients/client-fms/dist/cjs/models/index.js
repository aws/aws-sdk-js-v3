"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccountRoleStatus;
(function (AccountRoleStatus) {
    AccountRoleStatus["Creating"] = "CREATING";
    AccountRoleStatus["Deleted"] = "DELETED";
    AccountRoleStatus["Deleting"] = "DELETING";
    AccountRoleStatus["PendingDeletion"] = "PENDING_DELETION";
    AccountRoleStatus["Ready"] = "READY";
})(AccountRoleStatus = exports.AccountRoleStatus || (exports.AccountRoleStatus = {}));
var AssociateAdminAccountRequest;
(function (AssociateAdminAccountRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateAdminAccountRequest");
    }
    AssociateAdminAccountRequest.isa = isa;
})(AssociateAdminAccountRequest = exports.AssociateAdminAccountRequest || (exports.AssociateAdminAccountRequest = {}));
var ComplianceViolator;
(function (ComplianceViolator) {
    function isa(o) {
        return smithy_client_1.isa(o, "ComplianceViolator");
    }
    ComplianceViolator.isa = isa;
})(ComplianceViolator = exports.ComplianceViolator || (exports.ComplianceViolator = {}));
var CustomerPolicyScopeIdType;
(function (CustomerPolicyScopeIdType) {
    CustomerPolicyScopeIdType["ACCOUNT"] = "ACCOUNT";
})(CustomerPolicyScopeIdType = exports.CustomerPolicyScopeIdType || (exports.CustomerPolicyScopeIdType = {}));
var DeleteNotificationChannelRequest;
(function (DeleteNotificationChannelRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteNotificationChannelRequest");
    }
    DeleteNotificationChannelRequest.isa = isa;
})(DeleteNotificationChannelRequest = exports.DeleteNotificationChannelRequest || (exports.DeleteNotificationChannelRequest = {}));
var DeletePolicyRequest;
(function (DeletePolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeletePolicyRequest");
    }
    DeletePolicyRequest.isa = isa;
})(DeletePolicyRequest = exports.DeletePolicyRequest || (exports.DeletePolicyRequest = {}));
var DependentServiceName;
(function (DependentServiceName) {
    DependentServiceName["AWSConfig"] = "AWSCONFIG";
    DependentServiceName["AWSShieldAdvanced"] = "AWSSHIELD_ADVANCED";
    DependentServiceName["AWSVirtualPrivateCloud"] = "AWSVPC";
    DependentServiceName["AWSWAF"] = "AWSWAF";
})(DependentServiceName = exports.DependentServiceName || (exports.DependentServiceName = {}));
var DisassociateAdminAccountRequest;
(function (DisassociateAdminAccountRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateAdminAccountRequest");
    }
    DisassociateAdminAccountRequest.isa = isa;
})(DisassociateAdminAccountRequest = exports.DisassociateAdminAccountRequest || (exports.DisassociateAdminAccountRequest = {}));
var EvaluationResult;
(function (EvaluationResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "EvaluationResult");
    }
    EvaluationResult.isa = isa;
})(EvaluationResult = exports.EvaluationResult || (exports.EvaluationResult = {}));
var GetAdminAccountRequest;
(function (GetAdminAccountRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAdminAccountRequest");
    }
    GetAdminAccountRequest.isa = isa;
})(GetAdminAccountRequest = exports.GetAdminAccountRequest || (exports.GetAdminAccountRequest = {}));
var GetAdminAccountResponse;
(function (GetAdminAccountResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAdminAccountResponse");
    }
    GetAdminAccountResponse.isa = isa;
})(GetAdminAccountResponse = exports.GetAdminAccountResponse || (exports.GetAdminAccountResponse = {}));
var GetComplianceDetailRequest;
(function (GetComplianceDetailRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetComplianceDetailRequest");
    }
    GetComplianceDetailRequest.isa = isa;
})(GetComplianceDetailRequest = exports.GetComplianceDetailRequest || (exports.GetComplianceDetailRequest = {}));
var GetComplianceDetailResponse;
(function (GetComplianceDetailResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetComplianceDetailResponse");
    }
    GetComplianceDetailResponse.isa = isa;
})(GetComplianceDetailResponse = exports.GetComplianceDetailResponse || (exports.GetComplianceDetailResponse = {}));
var GetNotificationChannelRequest;
(function (GetNotificationChannelRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetNotificationChannelRequest");
    }
    GetNotificationChannelRequest.isa = isa;
})(GetNotificationChannelRequest = exports.GetNotificationChannelRequest || (exports.GetNotificationChannelRequest = {}));
var GetNotificationChannelResponse;
(function (GetNotificationChannelResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetNotificationChannelResponse");
    }
    GetNotificationChannelResponse.isa = isa;
})(GetNotificationChannelResponse = exports.GetNotificationChannelResponse || (exports.GetNotificationChannelResponse = {}));
var GetPolicyRequest;
(function (GetPolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetPolicyRequest");
    }
    GetPolicyRequest.isa = isa;
})(GetPolicyRequest = exports.GetPolicyRequest || (exports.GetPolicyRequest = {}));
var GetPolicyResponse;
(function (GetPolicyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetPolicyResponse");
    }
    GetPolicyResponse.isa = isa;
})(GetPolicyResponse = exports.GetPolicyResponse || (exports.GetPolicyResponse = {}));
var GetProtectionStatusRequest;
(function (GetProtectionStatusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetProtectionStatusRequest");
    }
    GetProtectionStatusRequest.isa = isa;
})(GetProtectionStatusRequest = exports.GetProtectionStatusRequest || (exports.GetProtectionStatusRequest = {}));
var GetProtectionStatusResponse;
(function (GetProtectionStatusResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetProtectionStatusResponse");
    }
    GetProtectionStatusResponse.isa = isa;
})(GetProtectionStatusResponse = exports.GetProtectionStatusResponse || (exports.GetProtectionStatusResponse = {}));
var InternalErrorException;
(function (InternalErrorException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalErrorException");
    }
    InternalErrorException.isa = isa;
})(InternalErrorException = exports.InternalErrorException || (exports.InternalErrorException = {}));
var InvalidInputException;
(function (InvalidInputException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidInputException");
    }
    InvalidInputException.isa = isa;
})(InvalidInputException = exports.InvalidInputException || (exports.InvalidInputException = {}));
var InvalidOperationException;
(function (InvalidOperationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidOperationException");
    }
    InvalidOperationException.isa = isa;
})(InvalidOperationException = exports.InvalidOperationException || (exports.InvalidOperationException = {}));
var InvalidTypeException;
(function (InvalidTypeException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidTypeException");
    }
    InvalidTypeException.isa = isa;
})(InvalidTypeException = exports.InvalidTypeException || (exports.InvalidTypeException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ListComplianceStatusRequest;
(function (ListComplianceStatusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListComplianceStatusRequest");
    }
    ListComplianceStatusRequest.isa = isa;
})(ListComplianceStatusRequest = exports.ListComplianceStatusRequest || (exports.ListComplianceStatusRequest = {}));
var ListComplianceStatusResponse;
(function (ListComplianceStatusResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListComplianceStatusResponse");
    }
    ListComplianceStatusResponse.isa = isa;
})(ListComplianceStatusResponse = exports.ListComplianceStatusResponse || (exports.ListComplianceStatusResponse = {}));
var ListMemberAccountsRequest;
(function (ListMemberAccountsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListMemberAccountsRequest");
    }
    ListMemberAccountsRequest.isa = isa;
})(ListMemberAccountsRequest = exports.ListMemberAccountsRequest || (exports.ListMemberAccountsRequest = {}));
var ListMemberAccountsResponse;
(function (ListMemberAccountsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListMemberAccountsResponse");
    }
    ListMemberAccountsResponse.isa = isa;
})(ListMemberAccountsResponse = exports.ListMemberAccountsResponse || (exports.ListMemberAccountsResponse = {}));
var ListPoliciesRequest;
(function (ListPoliciesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListPoliciesRequest");
    }
    ListPoliciesRequest.isa = isa;
})(ListPoliciesRequest = exports.ListPoliciesRequest || (exports.ListPoliciesRequest = {}));
var ListPoliciesResponse;
(function (ListPoliciesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListPoliciesResponse");
    }
    ListPoliciesResponse.isa = isa;
})(ListPoliciesResponse = exports.ListPoliciesResponse || (exports.ListPoliciesResponse = {}));
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
var Policy;
(function (Policy) {
    function isa(o) {
        return smithy_client_1.isa(o, "Policy");
    }
    Policy.isa = isa;
})(Policy = exports.Policy || (exports.Policy = {}));
var PolicyComplianceDetail;
(function (PolicyComplianceDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "PolicyComplianceDetail");
    }
    PolicyComplianceDetail.isa = isa;
})(PolicyComplianceDetail = exports.PolicyComplianceDetail || (exports.PolicyComplianceDetail = {}));
var PolicyComplianceStatus;
(function (PolicyComplianceStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "PolicyComplianceStatus");
    }
    PolicyComplianceStatus.isa = isa;
})(PolicyComplianceStatus = exports.PolicyComplianceStatus || (exports.PolicyComplianceStatus = {}));
var PolicyComplianceStatusType;
(function (PolicyComplianceStatusType) {
    PolicyComplianceStatusType["Compliant"] = "COMPLIANT";
    PolicyComplianceStatusType["NonCompliant"] = "NON_COMPLIANT";
})(PolicyComplianceStatusType = exports.PolicyComplianceStatusType || (exports.PolicyComplianceStatusType = {}));
var PolicySummary;
(function (PolicySummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "PolicySummary");
    }
    PolicySummary.isa = isa;
})(PolicySummary = exports.PolicySummary || (exports.PolicySummary = {}));
var PutNotificationChannelRequest;
(function (PutNotificationChannelRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutNotificationChannelRequest");
    }
    PutNotificationChannelRequest.isa = isa;
})(PutNotificationChannelRequest = exports.PutNotificationChannelRequest || (exports.PutNotificationChannelRequest = {}));
var PutPolicyRequest;
(function (PutPolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutPolicyRequest");
    }
    PutPolicyRequest.isa = isa;
})(PutPolicyRequest = exports.PutPolicyRequest || (exports.PutPolicyRequest = {}));
var PutPolicyResponse;
(function (PutPolicyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutPolicyResponse");
    }
    PutPolicyResponse.isa = isa;
})(PutPolicyResponse = exports.PutPolicyResponse || (exports.PutPolicyResponse = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNotFoundException");
    }
    ResourceNotFoundException.isa = isa;
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ResourceTag;
(function (ResourceTag) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceTag");
    }
    ResourceTag.isa = isa;
})(ResourceTag = exports.ResourceTag || (exports.ResourceTag = {}));
var SecurityServicePolicyData;
(function (SecurityServicePolicyData) {
    function isa(o) {
        return smithy_client_1.isa(o, "SecurityServicePolicyData");
    }
    SecurityServicePolicyData.isa = isa;
})(SecurityServicePolicyData = exports.SecurityServicePolicyData || (exports.SecurityServicePolicyData = {}));
var SecurityServiceType;
(function (SecurityServiceType) {
    SecurityServiceType["SECURITY_GROUPS_COMMON"] = "SECURITY_GROUPS_COMMON";
    SecurityServiceType["SECURITY_GROUPS_CONTENT_AUDIT"] = "SECURITY_GROUPS_CONTENT_AUDIT";
    SecurityServiceType["SECURITY_GROUPS_USAGE_AUDIT"] = "SECURITY_GROUPS_USAGE_AUDIT";
    SecurityServiceType["SHIELD_ADVANCED"] = "SHIELD_ADVANCED";
    SecurityServiceType["WAF"] = "WAF";
})(SecurityServiceType = exports.SecurityServiceType || (exports.SecurityServiceType = {}));
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
var TagResourceResponse;
(function (TagResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagResourceResponse");
    }
    TagResourceResponse.isa = isa;
})(TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceRequest");
    }
    UntagResourceRequest.isa = isa;
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UntagResourceResponse;
(function (UntagResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceResponse");
    }
    UntagResourceResponse.isa = isa;
})(UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {}));
var ViolationReason;
(function (ViolationReason) {
    ViolationReason["ResourceIncorrectWebAcl"] = "RESOURCE_INCORRECT_WEB_ACL";
    ViolationReason["ResourceMissingSecurityGroup"] = "RESOURCE_MISSING_SECURITY_GROUP";
    ViolationReason["ResourceMissingShieldProtection"] = "RESOURCE_MISSING_SHIELD_PROTECTION";
    ViolationReason["ResourceMissingWebAcl"] = "RESOURCE_MISSING_WEB_ACL";
    ViolationReason["ResourceMissingWebaclOrShieldProtection"] = "RESOURCE_MISSING_WEB_ACL_OR_SHIELD_PROTECTION";
    ViolationReason["ResourceViolatesAuditSecurityGroup"] = "RESOURCE_VIOLATES_AUDIT_SECURITY_GROUP";
    ViolationReason["SecurityGroupRedundant"] = "SECURITY_GROUP_REDUNDANT";
    ViolationReason["SecurityGroupUnused"] = "SECURITY_GROUP_UNUSED";
    ViolationReason["WebAclMissingRuleGroup"] = "WEB_ACL_MISSING_RULE_GROUP";
})(ViolationReason = exports.ViolationReason || (exports.ViolationReason = {}));
//# sourceMappingURL=index.js.map