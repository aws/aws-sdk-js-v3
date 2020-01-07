"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AWSOrganizationsNotInUseException;
(function (AWSOrganizationsNotInUseException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AWSOrganizationsNotInUseException");
    }
    AWSOrganizationsNotInUseException.isa = isa;
})(AWSOrganizationsNotInUseException = exports.AWSOrganizationsNotInUseException || (exports.AWSOrganizationsNotInUseException = {}));
var AcceptHandshakeRequest;
(function (AcceptHandshakeRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AcceptHandshakeRequest");
    }
    AcceptHandshakeRequest.isa = isa;
})(AcceptHandshakeRequest = exports.AcceptHandshakeRequest || (exports.AcceptHandshakeRequest = {}));
var AcceptHandshakeResponse;
(function (AcceptHandshakeResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AcceptHandshakeResponse");
    }
    AcceptHandshakeResponse.isa = isa;
})(AcceptHandshakeResponse = exports.AcceptHandshakeResponse || (exports.AcceptHandshakeResponse = {}));
var AccessDeniedException;
(function (AccessDeniedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AccessDeniedException");
    }
    AccessDeniedException.isa = isa;
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var AccessDeniedForDependencyException;
(function (AccessDeniedForDependencyException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AccessDeniedForDependencyException");
    }
    AccessDeniedForDependencyException.isa = isa;
})(AccessDeniedForDependencyException = exports.AccessDeniedForDependencyException || (exports.AccessDeniedForDependencyException = {}));
var AccessDeniedForDependencyExceptionReason;
(function (AccessDeniedForDependencyExceptionReason) {
    AccessDeniedForDependencyExceptionReason["ACCESS_DENIED_DURING_CREATE_SERVICE_LINKED_ROLE"] = "ACCESS_DENIED_DURING_CREATE_SERVICE_LINKED_ROLE";
})(AccessDeniedForDependencyExceptionReason = exports.AccessDeniedForDependencyExceptionReason || (exports.AccessDeniedForDependencyExceptionReason = {}));
var Account;
(function (Account) {
    function isa(o) {
        return smithy_client_1.isa(o, "Account");
    }
    Account.isa = isa;
})(Account = exports.Account || (exports.Account = {}));
var AccountJoinedMethod;
(function (AccountJoinedMethod) {
    AccountJoinedMethod["CREATED"] = "CREATED";
    AccountJoinedMethod["INVITED"] = "INVITED";
})(AccountJoinedMethod = exports.AccountJoinedMethod || (exports.AccountJoinedMethod = {}));
var AccountNotFoundException;
(function (AccountNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AccountNotFoundException");
    }
    AccountNotFoundException.isa = isa;
})(AccountNotFoundException = exports.AccountNotFoundException || (exports.AccountNotFoundException = {}));
var AccountOwnerNotVerifiedException;
(function (AccountOwnerNotVerifiedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AccountOwnerNotVerifiedException");
    }
    AccountOwnerNotVerifiedException.isa = isa;
})(AccountOwnerNotVerifiedException = exports.AccountOwnerNotVerifiedException || (exports.AccountOwnerNotVerifiedException = {}));
var AccountStatus;
(function (AccountStatus) {
    AccountStatus["ACTIVE"] = "ACTIVE";
    AccountStatus["SUSPENDED"] = "SUSPENDED";
})(AccountStatus = exports.AccountStatus || (exports.AccountStatus = {}));
var ActionType;
(function (ActionType) {
    ActionType["ADD_ORGANIZATIONS_SERVICE_LINKED_ROLE"] = "ADD_ORGANIZATIONS_SERVICE_LINKED_ROLE";
    ActionType["APPROVE_ALL_FEATURES"] = "APPROVE_ALL_FEATURES";
    ActionType["ENABLE_ALL_FEATURES"] = "ENABLE_ALL_FEATURES";
    ActionType["INVITE_ACCOUNT_TO_ORGANIZATION"] = "INVITE";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
var AlreadyInOrganizationException;
(function (AlreadyInOrganizationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AlreadyInOrganizationException");
    }
    AlreadyInOrganizationException.isa = isa;
})(AlreadyInOrganizationException = exports.AlreadyInOrganizationException || (exports.AlreadyInOrganizationException = {}));
var AttachPolicyRequest;
(function (AttachPolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AttachPolicyRequest");
    }
    AttachPolicyRequest.isa = isa;
})(AttachPolicyRequest = exports.AttachPolicyRequest || (exports.AttachPolicyRequest = {}));
var CancelHandshakeRequest;
(function (CancelHandshakeRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CancelHandshakeRequest");
    }
    CancelHandshakeRequest.isa = isa;
})(CancelHandshakeRequest = exports.CancelHandshakeRequest || (exports.CancelHandshakeRequest = {}));
var CancelHandshakeResponse;
(function (CancelHandshakeResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CancelHandshakeResponse");
    }
    CancelHandshakeResponse.isa = isa;
})(CancelHandshakeResponse = exports.CancelHandshakeResponse || (exports.CancelHandshakeResponse = {}));
var Child;
(function (Child) {
    function isa(o) {
        return smithy_client_1.isa(o, "Child");
    }
    Child.isa = isa;
})(Child = exports.Child || (exports.Child = {}));
var ChildNotFoundException;
(function (ChildNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ChildNotFoundException");
    }
    ChildNotFoundException.isa = isa;
})(ChildNotFoundException = exports.ChildNotFoundException || (exports.ChildNotFoundException = {}));
var ChildType;
(function (ChildType) {
    ChildType["ACCOUNT"] = "ACCOUNT";
    ChildType["ORGANIZATIONAL_UNIT"] = "ORGANIZATIONAL_UNIT";
})(ChildType = exports.ChildType || (exports.ChildType = {}));
var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConcurrentModificationException");
    }
    ConcurrentModificationException.isa = isa;
})(ConcurrentModificationException = exports.ConcurrentModificationException || (exports.ConcurrentModificationException = {}));
var ConstraintViolationException;
(function (ConstraintViolationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConstraintViolationException");
    }
    ConstraintViolationException.isa = isa;
})(ConstraintViolationException = exports.ConstraintViolationException || (exports.ConstraintViolationException = {}));
var ConstraintViolationExceptionReason;
(function (ConstraintViolationExceptionReason) {
    ConstraintViolationExceptionReason["ACCOUNT_CANNOT_LEAVE_ORGANIZATION"] = "ACCOUNT_CANNOT_LEAVE_ORGANIZATION";
    ConstraintViolationExceptionReason["ACCOUNT_CANNOT_LEAVE_WITHOUT_EULA"] = "ACCOUNT_CANNOT_LEAVE_WITHOUT_EULA";
    ConstraintViolationExceptionReason["ACCOUNT_CANNOT_LEAVE_WITHOUT_PHONE_VERIFICATION"] = "ACCOUNT_CANNOT_LEAVE_WITHOUT_PHONE_VERIFICATION";
    ConstraintViolationExceptionReason["ACCOUNT_CREATION_RATE_LIMIT_EXCEEDED"] = "ACCOUNT_CREATION_RATE_LIMIT_EXCEEDED";
    ConstraintViolationExceptionReason["ACCOUNT_NUMBER_LIMIT_EXCEEDED"] = "ACCOUNT_NUMBER_LIMIT_EXCEEDED";
    ConstraintViolationExceptionReason["CREATE_ORGANIZATION_IN_BILLING_MODE_UNSUPPORTED_REGION"] = "CREATE_ORGANIZATION_IN_BILLING_MODE_UNSUPPORTED_REGION";
    ConstraintViolationExceptionReason["EMAIL_VERIFICATION_CODE_EXPIRED"] = "EMAIL_VERIFICATION_CODE_EXPIRED";
    ConstraintViolationExceptionReason["HANDSHAKE_RATE_LIMIT_EXCEEDED"] = "HANDSHAKE_RATE_LIMIT_EXCEEDED";
    ConstraintViolationExceptionReason["MASTER_ACCOUNT_ADDRESS_DOES_NOT_MATCH_MARKETPLACE"] = "MASTER_ACCOUNT_ADDRESS_DOES_NOT_MATCH_MARKETPLACE";
    ConstraintViolationExceptionReason["MASTER_ACCOUNT_MISSING_CONTACT_INFO"] = "MASTER_ACCOUNT_MISSING_CONTACT_INFO";
    ConstraintViolationExceptionReason["MASTER_ACCOUNT_NOT_GOVCLOUD_ENABLED"] = "MASTER_ACCOUNT_NOT_GOVCLOUD_ENABLED";
    ConstraintViolationExceptionReason["MASTER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED"] = "MASTER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED";
    ConstraintViolationExceptionReason["MAX_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED"] = "MAX_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED";
    ConstraintViolationExceptionReason["MAX_TAG_LIMIT_EXCEEDED"] = "MAX_TAG_LIMIT_EXCEEDED";
    ConstraintViolationExceptionReason["MEMBER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED"] = "MEMBER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED";
    ConstraintViolationExceptionReason["MIN_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED"] = "MIN_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED";
    ConstraintViolationExceptionReason["ORGANIZATION_NOT_IN_ALL_FEATURES_MODE"] = "ORGANIZATION_NOT_IN_ALL_FEATURES_MODE";
    ConstraintViolationExceptionReason["OU_DEPTH_LIMIT_EXCEEDED"] = "OU_DEPTH_LIMIT_EXCEEDED";
    ConstraintViolationExceptionReason["OU_NUMBER_LIMIT_EXCEEDED"] = "OU_NUMBER_LIMIT_EXCEEDED";
    ConstraintViolationExceptionReason["POLICY_CONTENT_LIMIT_EXCEEDED"] = "POLICY_CONTENT_LIMIT_EXCEEDED";
    ConstraintViolationExceptionReason["POLICY_NUMBER_LIMIT_EXCEEDED"] = "POLICY_NUMBER_LIMIT_EXCEEDED";
    ConstraintViolationExceptionReason["TAG_POLICY_VIOLATION"] = "TAG_POLICY_VIOLATION";
    ConstraintViolationExceptionReason["WAIT_PERIOD_ACTIVE"] = "WAIT_PERIOD_ACTIVE";
})(ConstraintViolationExceptionReason = exports.ConstraintViolationExceptionReason || (exports.ConstraintViolationExceptionReason = {}));
var CreateAccountFailureReason;
(function (CreateAccountFailureReason) {
    CreateAccountFailureReason["ACCOUNT_LIMIT_EXCEEDED"] = "ACCOUNT_LIMIT_EXCEEDED";
    CreateAccountFailureReason["CONCURRENT_ACCOUNT_MODIFICATION"] = "CONCURRENT_ACCOUNT_MODIFICATION";
    CreateAccountFailureReason["EMAIL_ALREADY_EXISTS"] = "EMAIL_ALREADY_EXISTS";
    CreateAccountFailureReason["GOVCLOUD_ACCOUNT_ALREADY_EXISTS"] = "GOVCLOUD_ACCOUNT_ALREADY_EXISTS";
    CreateAccountFailureReason["INTERNAL_FAILURE"] = "INTERNAL_FAILURE";
    CreateAccountFailureReason["INVALID_ADDRESS"] = "INVALID_ADDRESS";
    CreateAccountFailureReason["INVALID_EMAIL"] = "INVALID_EMAIL";
})(CreateAccountFailureReason = exports.CreateAccountFailureReason || (exports.CreateAccountFailureReason = {}));
var CreateAccountRequest;
(function (CreateAccountRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAccountRequest");
    }
    CreateAccountRequest.isa = isa;
})(CreateAccountRequest = exports.CreateAccountRequest || (exports.CreateAccountRequest = {}));
var CreateAccountResponse;
(function (CreateAccountResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAccountResponse");
    }
    CreateAccountResponse.isa = isa;
})(CreateAccountResponse = exports.CreateAccountResponse || (exports.CreateAccountResponse = {}));
var CreateAccountState;
(function (CreateAccountState) {
    CreateAccountState["FAILED"] = "FAILED";
    CreateAccountState["IN_PROGRESS"] = "IN_PROGRESS";
    CreateAccountState["SUCCEEDED"] = "SUCCEEDED";
})(CreateAccountState = exports.CreateAccountState || (exports.CreateAccountState = {}));
var CreateAccountStatus;
(function (CreateAccountStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAccountStatus");
    }
    CreateAccountStatus.isa = isa;
})(CreateAccountStatus = exports.CreateAccountStatus || (exports.CreateAccountStatus = {}));
var CreateAccountStatusNotFoundException;
(function (CreateAccountStatusNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAccountStatusNotFoundException");
    }
    CreateAccountStatusNotFoundException.isa = isa;
})(CreateAccountStatusNotFoundException = exports.CreateAccountStatusNotFoundException || (exports.CreateAccountStatusNotFoundException = {}));
var CreateGovCloudAccountRequest;
(function (CreateGovCloudAccountRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateGovCloudAccountRequest");
    }
    CreateGovCloudAccountRequest.isa = isa;
})(CreateGovCloudAccountRequest = exports.CreateGovCloudAccountRequest || (exports.CreateGovCloudAccountRequest = {}));
var CreateGovCloudAccountResponse;
(function (CreateGovCloudAccountResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateGovCloudAccountResponse");
    }
    CreateGovCloudAccountResponse.isa = isa;
})(CreateGovCloudAccountResponse = exports.CreateGovCloudAccountResponse || (exports.CreateGovCloudAccountResponse = {}));
var CreateOrganizationRequest;
(function (CreateOrganizationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateOrganizationRequest");
    }
    CreateOrganizationRequest.isa = isa;
})(CreateOrganizationRequest = exports.CreateOrganizationRequest || (exports.CreateOrganizationRequest = {}));
var CreateOrganizationResponse;
(function (CreateOrganizationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateOrganizationResponse");
    }
    CreateOrganizationResponse.isa = isa;
})(CreateOrganizationResponse = exports.CreateOrganizationResponse || (exports.CreateOrganizationResponse = {}));
var CreateOrganizationalUnitRequest;
(function (CreateOrganizationalUnitRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateOrganizationalUnitRequest");
    }
    CreateOrganizationalUnitRequest.isa = isa;
})(CreateOrganizationalUnitRequest = exports.CreateOrganizationalUnitRequest || (exports.CreateOrganizationalUnitRequest = {}));
var CreateOrganizationalUnitResponse;
(function (CreateOrganizationalUnitResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateOrganizationalUnitResponse");
    }
    CreateOrganizationalUnitResponse.isa = isa;
})(CreateOrganizationalUnitResponse = exports.CreateOrganizationalUnitResponse || (exports.CreateOrganizationalUnitResponse = {}));
var CreatePolicyRequest;
(function (CreatePolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreatePolicyRequest");
    }
    CreatePolicyRequest.isa = isa;
})(CreatePolicyRequest = exports.CreatePolicyRequest || (exports.CreatePolicyRequest = {}));
var CreatePolicyResponse;
(function (CreatePolicyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreatePolicyResponse");
    }
    CreatePolicyResponse.isa = isa;
})(CreatePolicyResponse = exports.CreatePolicyResponse || (exports.CreatePolicyResponse = {}));
var DeclineHandshakeRequest;
(function (DeclineHandshakeRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeclineHandshakeRequest");
    }
    DeclineHandshakeRequest.isa = isa;
})(DeclineHandshakeRequest = exports.DeclineHandshakeRequest || (exports.DeclineHandshakeRequest = {}));
var DeclineHandshakeResponse;
(function (DeclineHandshakeResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeclineHandshakeResponse");
    }
    DeclineHandshakeResponse.isa = isa;
})(DeclineHandshakeResponse = exports.DeclineHandshakeResponse || (exports.DeclineHandshakeResponse = {}));
var DeleteOrganizationalUnitRequest;
(function (DeleteOrganizationalUnitRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteOrganizationalUnitRequest");
    }
    DeleteOrganizationalUnitRequest.isa = isa;
})(DeleteOrganizationalUnitRequest = exports.DeleteOrganizationalUnitRequest || (exports.DeleteOrganizationalUnitRequest = {}));
var DeletePolicyRequest;
(function (DeletePolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeletePolicyRequest");
    }
    DeletePolicyRequest.isa = isa;
})(DeletePolicyRequest = exports.DeletePolicyRequest || (exports.DeletePolicyRequest = {}));
var DescribeAccountRequest;
(function (DescribeAccountRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAccountRequest");
    }
    DescribeAccountRequest.isa = isa;
})(DescribeAccountRequest = exports.DescribeAccountRequest || (exports.DescribeAccountRequest = {}));
var DescribeAccountResponse;
(function (DescribeAccountResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAccountResponse");
    }
    DescribeAccountResponse.isa = isa;
})(DescribeAccountResponse = exports.DescribeAccountResponse || (exports.DescribeAccountResponse = {}));
var DescribeCreateAccountStatusRequest;
(function (DescribeCreateAccountStatusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeCreateAccountStatusRequest");
    }
    DescribeCreateAccountStatusRequest.isa = isa;
})(DescribeCreateAccountStatusRequest = exports.DescribeCreateAccountStatusRequest || (exports.DescribeCreateAccountStatusRequest = {}));
var DescribeCreateAccountStatusResponse;
(function (DescribeCreateAccountStatusResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeCreateAccountStatusResponse");
    }
    DescribeCreateAccountStatusResponse.isa = isa;
})(DescribeCreateAccountStatusResponse = exports.DescribeCreateAccountStatusResponse || (exports.DescribeCreateAccountStatusResponse = {}));
var DescribeEffectivePolicyRequest;
(function (DescribeEffectivePolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEffectivePolicyRequest");
    }
    DescribeEffectivePolicyRequest.isa = isa;
})(DescribeEffectivePolicyRequest = exports.DescribeEffectivePolicyRequest || (exports.DescribeEffectivePolicyRequest = {}));
var DescribeEffectivePolicyResponse;
(function (DescribeEffectivePolicyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEffectivePolicyResponse");
    }
    DescribeEffectivePolicyResponse.isa = isa;
})(DescribeEffectivePolicyResponse = exports.DescribeEffectivePolicyResponse || (exports.DescribeEffectivePolicyResponse = {}));
var DescribeHandshakeRequest;
(function (DescribeHandshakeRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeHandshakeRequest");
    }
    DescribeHandshakeRequest.isa = isa;
})(DescribeHandshakeRequest = exports.DescribeHandshakeRequest || (exports.DescribeHandshakeRequest = {}));
var DescribeHandshakeResponse;
(function (DescribeHandshakeResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeHandshakeResponse");
    }
    DescribeHandshakeResponse.isa = isa;
})(DescribeHandshakeResponse = exports.DescribeHandshakeResponse || (exports.DescribeHandshakeResponse = {}));
var DescribeOrganizationResponse;
(function (DescribeOrganizationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeOrganizationResponse");
    }
    DescribeOrganizationResponse.isa = isa;
})(DescribeOrganizationResponse = exports.DescribeOrganizationResponse || (exports.DescribeOrganizationResponse = {}));
var DescribeOrganizationalUnitRequest;
(function (DescribeOrganizationalUnitRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeOrganizationalUnitRequest");
    }
    DescribeOrganizationalUnitRequest.isa = isa;
})(DescribeOrganizationalUnitRequest = exports.DescribeOrganizationalUnitRequest || (exports.DescribeOrganizationalUnitRequest = {}));
var DescribeOrganizationalUnitResponse;
(function (DescribeOrganizationalUnitResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeOrganizationalUnitResponse");
    }
    DescribeOrganizationalUnitResponse.isa = isa;
})(DescribeOrganizationalUnitResponse = exports.DescribeOrganizationalUnitResponse || (exports.DescribeOrganizationalUnitResponse = {}));
var DescribePolicyRequest;
(function (DescribePolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribePolicyRequest");
    }
    DescribePolicyRequest.isa = isa;
})(DescribePolicyRequest = exports.DescribePolicyRequest || (exports.DescribePolicyRequest = {}));
var DescribePolicyResponse;
(function (DescribePolicyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribePolicyResponse");
    }
    DescribePolicyResponse.isa = isa;
})(DescribePolicyResponse = exports.DescribePolicyResponse || (exports.DescribePolicyResponse = {}));
var DestinationParentNotFoundException;
(function (DestinationParentNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DestinationParentNotFoundException");
    }
    DestinationParentNotFoundException.isa = isa;
})(DestinationParentNotFoundException = exports.DestinationParentNotFoundException || (exports.DestinationParentNotFoundException = {}));
var DetachPolicyRequest;
(function (DetachPolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DetachPolicyRequest");
    }
    DetachPolicyRequest.isa = isa;
})(DetachPolicyRequest = exports.DetachPolicyRequest || (exports.DetachPolicyRequest = {}));
var DisableAWSServiceAccessRequest;
(function (DisableAWSServiceAccessRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisableAWSServiceAccessRequest");
    }
    DisableAWSServiceAccessRequest.isa = isa;
})(DisableAWSServiceAccessRequest = exports.DisableAWSServiceAccessRequest || (exports.DisableAWSServiceAccessRequest = {}));
var DisablePolicyTypeRequest;
(function (DisablePolicyTypeRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisablePolicyTypeRequest");
    }
    DisablePolicyTypeRequest.isa = isa;
})(DisablePolicyTypeRequest = exports.DisablePolicyTypeRequest || (exports.DisablePolicyTypeRequest = {}));
var DisablePolicyTypeResponse;
(function (DisablePolicyTypeResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisablePolicyTypeResponse");
    }
    DisablePolicyTypeResponse.isa = isa;
})(DisablePolicyTypeResponse = exports.DisablePolicyTypeResponse || (exports.DisablePolicyTypeResponse = {}));
var DuplicateAccountException;
(function (DuplicateAccountException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DuplicateAccountException");
    }
    DuplicateAccountException.isa = isa;
})(DuplicateAccountException = exports.DuplicateAccountException || (exports.DuplicateAccountException = {}));
var DuplicateHandshakeException;
(function (DuplicateHandshakeException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DuplicateHandshakeException");
    }
    DuplicateHandshakeException.isa = isa;
})(DuplicateHandshakeException = exports.DuplicateHandshakeException || (exports.DuplicateHandshakeException = {}));
var DuplicateOrganizationalUnitException;
(function (DuplicateOrganizationalUnitException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DuplicateOrganizationalUnitException");
    }
    DuplicateOrganizationalUnitException.isa = isa;
})(DuplicateOrganizationalUnitException = exports.DuplicateOrganizationalUnitException || (exports.DuplicateOrganizationalUnitException = {}));
var DuplicatePolicyAttachmentException;
(function (DuplicatePolicyAttachmentException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DuplicatePolicyAttachmentException");
    }
    DuplicatePolicyAttachmentException.isa = isa;
})(DuplicatePolicyAttachmentException = exports.DuplicatePolicyAttachmentException || (exports.DuplicatePolicyAttachmentException = {}));
var DuplicatePolicyException;
(function (DuplicatePolicyException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DuplicatePolicyException");
    }
    DuplicatePolicyException.isa = isa;
})(DuplicatePolicyException = exports.DuplicatePolicyException || (exports.DuplicatePolicyException = {}));
var EffectivePolicy;
(function (EffectivePolicy) {
    function isa(o) {
        return smithy_client_1.isa(o, "EffectivePolicy");
    }
    EffectivePolicy.isa = isa;
})(EffectivePolicy = exports.EffectivePolicy || (exports.EffectivePolicy = {}));
var EffectivePolicyNotFoundException;
(function (EffectivePolicyNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "EffectivePolicyNotFoundException");
    }
    EffectivePolicyNotFoundException.isa = isa;
})(EffectivePolicyNotFoundException = exports.EffectivePolicyNotFoundException || (exports.EffectivePolicyNotFoundException = {}));
var EffectivePolicyType;
(function (EffectivePolicyType) {
    EffectivePolicyType["TAG_POLICY"] = "TAG_POLICY";
})(EffectivePolicyType = exports.EffectivePolicyType || (exports.EffectivePolicyType = {}));
var EnableAWSServiceAccessRequest;
(function (EnableAWSServiceAccessRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "EnableAWSServiceAccessRequest");
    }
    EnableAWSServiceAccessRequest.isa = isa;
})(EnableAWSServiceAccessRequest = exports.EnableAWSServiceAccessRequest || (exports.EnableAWSServiceAccessRequest = {}));
var EnableAllFeaturesRequest;
(function (EnableAllFeaturesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "EnableAllFeaturesRequest");
    }
    EnableAllFeaturesRequest.isa = isa;
})(EnableAllFeaturesRequest = exports.EnableAllFeaturesRequest || (exports.EnableAllFeaturesRequest = {}));
var EnableAllFeaturesResponse;
(function (EnableAllFeaturesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "EnableAllFeaturesResponse");
    }
    EnableAllFeaturesResponse.isa = isa;
})(EnableAllFeaturesResponse = exports.EnableAllFeaturesResponse || (exports.EnableAllFeaturesResponse = {}));
var EnablePolicyTypeRequest;
(function (EnablePolicyTypeRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "EnablePolicyTypeRequest");
    }
    EnablePolicyTypeRequest.isa = isa;
})(EnablePolicyTypeRequest = exports.EnablePolicyTypeRequest || (exports.EnablePolicyTypeRequest = {}));
var EnablePolicyTypeResponse;
(function (EnablePolicyTypeResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "EnablePolicyTypeResponse");
    }
    EnablePolicyTypeResponse.isa = isa;
})(EnablePolicyTypeResponse = exports.EnablePolicyTypeResponse || (exports.EnablePolicyTypeResponse = {}));
var EnabledServicePrincipal;
(function (EnabledServicePrincipal) {
    function isa(o) {
        return smithy_client_1.isa(o, "EnabledServicePrincipal");
    }
    EnabledServicePrincipal.isa = isa;
})(EnabledServicePrincipal = exports.EnabledServicePrincipal || (exports.EnabledServicePrincipal = {}));
var FinalizingOrganizationException;
(function (FinalizingOrganizationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "FinalizingOrganizationException");
    }
    FinalizingOrganizationException.isa = isa;
})(FinalizingOrganizationException = exports.FinalizingOrganizationException || (exports.FinalizingOrganizationException = {}));
var Handshake;
(function (Handshake) {
    function isa(o) {
        return smithy_client_1.isa(o, "Handshake");
    }
    Handshake.isa = isa;
})(Handshake = exports.Handshake || (exports.Handshake = {}));
var HandshakeAlreadyInStateException;
(function (HandshakeAlreadyInStateException) {
    function isa(o) {
        return smithy_client_1.isa(o, "HandshakeAlreadyInStateException");
    }
    HandshakeAlreadyInStateException.isa = isa;
})(HandshakeAlreadyInStateException = exports.HandshakeAlreadyInStateException || (exports.HandshakeAlreadyInStateException = {}));
var HandshakeConstraintViolationException;
(function (HandshakeConstraintViolationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "HandshakeConstraintViolationException");
    }
    HandshakeConstraintViolationException.isa = isa;
})(HandshakeConstraintViolationException = exports.HandshakeConstraintViolationException || (exports.HandshakeConstraintViolationException = {}));
var HandshakeConstraintViolationExceptionReason;
(function (HandshakeConstraintViolationExceptionReason) {
    HandshakeConstraintViolationExceptionReason["ACCOUNT_NUMBER_LIMIT_EXCEEDED"] = "ACCOUNT_NUMBER_LIMIT_EXCEEDED";
    HandshakeConstraintViolationExceptionReason["ALREADY_IN_AN_ORGANIZATION"] = "ALREADY_IN_AN_ORGANIZATION";
    HandshakeConstraintViolationExceptionReason["HANDSHAKE_RATE_LIMIT_EXCEEDED"] = "HANDSHAKE_RATE_LIMIT_EXCEEDED";
    HandshakeConstraintViolationExceptionReason["INVITE_DISABLED_DURING_ENABLE_ALL_FEATURES"] = "INVITE_DISABLED_DURING_ENABLE_ALL_FEATURES";
    HandshakeConstraintViolationExceptionReason["ORGANIZATION_ALREADY_HAS_ALL_FEATURES"] = "ORGANIZATION_ALREADY_HAS_ALL_FEATURES";
    HandshakeConstraintViolationExceptionReason["ORGANIZATION_FROM_DIFFERENT_SELLER_OF_RECORD"] = "ORGANIZATION_FROM_DIFFERENT_SELLER_OF_RECORD";
    HandshakeConstraintViolationExceptionReason["ORGANIZATION_MEMBERSHIP_CHANGE_RATE_LIMIT_EXCEEDED"] = "ORGANIZATION_MEMBERSHIP_CHANGE_RATE_LIMIT_EXCEEDED";
    HandshakeConstraintViolationExceptionReason["PAYMENT_INSTRUMENT_REQUIRED"] = "PAYMENT_INSTRUMENT_REQUIRED";
})(HandshakeConstraintViolationExceptionReason = exports.HandshakeConstraintViolationExceptionReason || (exports.HandshakeConstraintViolationExceptionReason = {}));
var HandshakeFilter;
(function (HandshakeFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "HandshakeFilter");
    }
    HandshakeFilter.isa = isa;
})(HandshakeFilter = exports.HandshakeFilter || (exports.HandshakeFilter = {}));
var HandshakeNotFoundException;
(function (HandshakeNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "HandshakeNotFoundException");
    }
    HandshakeNotFoundException.isa = isa;
})(HandshakeNotFoundException = exports.HandshakeNotFoundException || (exports.HandshakeNotFoundException = {}));
var HandshakeParty;
(function (HandshakeParty) {
    function isa(o) {
        return smithy_client_1.isa(o, "HandshakeParty");
    }
    HandshakeParty.isa = isa;
})(HandshakeParty = exports.HandshakeParty || (exports.HandshakeParty = {}));
var HandshakePartyType;
(function (HandshakePartyType) {
    HandshakePartyType["ACCOUNT"] = "ACCOUNT";
    HandshakePartyType["EMAIL"] = "EMAIL";
    HandshakePartyType["ORGANIZATION"] = "ORGANIZATION";
})(HandshakePartyType = exports.HandshakePartyType || (exports.HandshakePartyType = {}));
var HandshakeResource;
(function (HandshakeResource) {
    function isa(o) {
        return smithy_client_1.isa(o, "HandshakeResource");
    }
    HandshakeResource.isa = isa;
})(HandshakeResource = exports.HandshakeResource || (exports.HandshakeResource = {}));
var HandshakeResourceType;
(function (HandshakeResourceType) {
    HandshakeResourceType["ACCOUNT"] = "ACCOUNT";
    HandshakeResourceType["EMAIL"] = "EMAIL";
    HandshakeResourceType["MASTER_EMAIL"] = "MASTER_EMAIL";
    HandshakeResourceType["MASTER_NAME"] = "MASTER_NAME";
    HandshakeResourceType["NOTES"] = "NOTES";
    HandshakeResourceType["ORGANIZATION"] = "ORGANIZATION";
    HandshakeResourceType["ORGANIZATION_FEATURE_SET"] = "ORGANIZATION_FEATURE_SET";
    HandshakeResourceType["PARENT_HANDSHAKE"] = "PARENT_HANDSHAKE";
})(HandshakeResourceType = exports.HandshakeResourceType || (exports.HandshakeResourceType = {}));
var HandshakeState;
(function (HandshakeState) {
    HandshakeState["ACCEPTED"] = "ACCEPTED";
    HandshakeState["CANCELED"] = "CANCELED";
    HandshakeState["DECLINED"] = "DECLINED";
    HandshakeState["EXPIRED"] = "EXPIRED";
    HandshakeState["OPEN"] = "OPEN";
    HandshakeState["REQUESTED"] = "REQUESTED";
})(HandshakeState = exports.HandshakeState || (exports.HandshakeState = {}));
var IAMUserAccessToBilling;
(function (IAMUserAccessToBilling) {
    IAMUserAccessToBilling["ALLOW"] = "ALLOW";
    IAMUserAccessToBilling["DENY"] = "DENY";
})(IAMUserAccessToBilling = exports.IAMUserAccessToBilling || (exports.IAMUserAccessToBilling = {}));
var InvalidHandshakeTransitionException;
(function (InvalidHandshakeTransitionException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidHandshakeTransitionException");
    }
    InvalidHandshakeTransitionException.isa = isa;
})(InvalidHandshakeTransitionException = exports.InvalidHandshakeTransitionException || (exports.InvalidHandshakeTransitionException = {}));
var InvalidInputException;
(function (InvalidInputException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidInputException");
    }
    InvalidInputException.isa = isa;
})(InvalidInputException = exports.InvalidInputException || (exports.InvalidInputException = {}));
var InvalidInputExceptionReason;
(function (InvalidInputExceptionReason) {
    InvalidInputExceptionReason["IMMUTABLE_POLICY"] = "IMMUTABLE_POLICY";
    InvalidInputExceptionReason["INPUT_REQUIRED"] = "INPUT_REQUIRED";
    InvalidInputExceptionReason["INVALID_ENUM"] = "INVALID_ENUM";
    InvalidInputExceptionReason["INVALID_ENUM_POLICY_TYPE"] = "INVALID_ENUM_POLICY_TYPE";
    InvalidInputExceptionReason["INVALID_FULL_NAME_TARGET"] = "INVALID_FULL_NAME_TARGET";
    InvalidInputExceptionReason["INVALID_LIST_MEMBER"] = "INVALID_LIST_MEMBER";
    InvalidInputExceptionReason["INVALID_PAGINATION_TOKEN"] = "INVALID_NEXT_TOKEN";
    InvalidInputExceptionReason["INVALID_PARTY_TYPE_TARGET"] = "INVALID_PARTY_TYPE_TARGET";
    InvalidInputExceptionReason["INVALID_PATTERN"] = "INVALID_PATTERN";
    InvalidInputExceptionReason["INVALID_PATTERN_TARGET_ID"] = "INVALID_PATTERN_TARGET_ID";
    InvalidInputExceptionReason["INVALID_ROLE_NAME"] = "INVALID_ROLE_NAME";
    InvalidInputExceptionReason["INVALID_SYNTAX_ORGANIZATION"] = "INVALID_SYNTAX_ORGANIZATION_ARN";
    InvalidInputExceptionReason["INVALID_SYNTAX_POLICY"] = "INVALID_SYNTAX_POLICY_ID";
    InvalidInputExceptionReason["INVALID_SYSTEM_TAGS_PARAMETER"] = "INVALID_SYSTEM_TAGS_PARAMETER";
    InvalidInputExceptionReason["MAX_FILTER_LIMIT_EXCEEDED"] = "MAX_LIMIT_EXCEEDED_FILTER";
    InvalidInputExceptionReason["MAX_LENGTH_EXCEEDED"] = "MAX_LENGTH_EXCEEDED";
    InvalidInputExceptionReason["MAX_VALUE_EXCEEDED"] = "MAX_VALUE_EXCEEDED";
    InvalidInputExceptionReason["MIN_LENGTH_EXCEEDED"] = "MIN_LENGTH_EXCEEDED";
    InvalidInputExceptionReason["MIN_VALUE_EXCEEDED"] = "MIN_VALUE_EXCEEDED";
    InvalidInputExceptionReason["MOVING_ACCOUNT_BETWEEN_DIFFERENT_ROOTS"] = "MOVING_ACCOUNT_BETWEEN_DIFFERENT_ROOTS";
    InvalidInputExceptionReason["TARGET_NOT_SUPPORTED"] = "TARGET_NOT_SUPPORTED";
    InvalidInputExceptionReason["UNRECOGNIZED_SERVICE_PRINCIPAL"] = "UNRECOGNIZED_SERVICE_PRINCIPAL";
})(InvalidInputExceptionReason = exports.InvalidInputExceptionReason || (exports.InvalidInputExceptionReason = {}));
var InviteAccountToOrganizationRequest;
(function (InviteAccountToOrganizationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "InviteAccountToOrganizationRequest");
    }
    InviteAccountToOrganizationRequest.isa = isa;
})(InviteAccountToOrganizationRequest = exports.InviteAccountToOrganizationRequest || (exports.InviteAccountToOrganizationRequest = {}));
var InviteAccountToOrganizationResponse;
(function (InviteAccountToOrganizationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "InviteAccountToOrganizationResponse");
    }
    InviteAccountToOrganizationResponse.isa = isa;
})(InviteAccountToOrganizationResponse = exports.InviteAccountToOrganizationResponse || (exports.InviteAccountToOrganizationResponse = {}));
var ListAWSServiceAccessForOrganizationRequest;
(function (ListAWSServiceAccessForOrganizationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAWSServiceAccessForOrganizationRequest");
    }
    ListAWSServiceAccessForOrganizationRequest.isa = isa;
})(ListAWSServiceAccessForOrganizationRequest = exports.ListAWSServiceAccessForOrganizationRequest || (exports.ListAWSServiceAccessForOrganizationRequest = {}));
var ListAWSServiceAccessForOrganizationResponse;
(function (ListAWSServiceAccessForOrganizationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAWSServiceAccessForOrganizationResponse");
    }
    ListAWSServiceAccessForOrganizationResponse.isa = isa;
})(ListAWSServiceAccessForOrganizationResponse = exports.ListAWSServiceAccessForOrganizationResponse || (exports.ListAWSServiceAccessForOrganizationResponse = {}));
var ListAccountsForParentRequest;
(function (ListAccountsForParentRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAccountsForParentRequest");
    }
    ListAccountsForParentRequest.isa = isa;
})(ListAccountsForParentRequest = exports.ListAccountsForParentRequest || (exports.ListAccountsForParentRequest = {}));
var ListAccountsForParentResponse;
(function (ListAccountsForParentResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAccountsForParentResponse");
    }
    ListAccountsForParentResponse.isa = isa;
})(ListAccountsForParentResponse = exports.ListAccountsForParentResponse || (exports.ListAccountsForParentResponse = {}));
var ListAccountsRequest;
(function (ListAccountsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAccountsRequest");
    }
    ListAccountsRequest.isa = isa;
})(ListAccountsRequest = exports.ListAccountsRequest || (exports.ListAccountsRequest = {}));
var ListAccountsResponse;
(function (ListAccountsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAccountsResponse");
    }
    ListAccountsResponse.isa = isa;
})(ListAccountsResponse = exports.ListAccountsResponse || (exports.ListAccountsResponse = {}));
var ListChildrenRequest;
(function (ListChildrenRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListChildrenRequest");
    }
    ListChildrenRequest.isa = isa;
})(ListChildrenRequest = exports.ListChildrenRequest || (exports.ListChildrenRequest = {}));
var ListChildrenResponse;
(function (ListChildrenResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListChildrenResponse");
    }
    ListChildrenResponse.isa = isa;
})(ListChildrenResponse = exports.ListChildrenResponse || (exports.ListChildrenResponse = {}));
var ListCreateAccountStatusRequest;
(function (ListCreateAccountStatusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListCreateAccountStatusRequest");
    }
    ListCreateAccountStatusRequest.isa = isa;
})(ListCreateAccountStatusRequest = exports.ListCreateAccountStatusRequest || (exports.ListCreateAccountStatusRequest = {}));
var ListCreateAccountStatusResponse;
(function (ListCreateAccountStatusResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListCreateAccountStatusResponse");
    }
    ListCreateAccountStatusResponse.isa = isa;
})(ListCreateAccountStatusResponse = exports.ListCreateAccountStatusResponse || (exports.ListCreateAccountStatusResponse = {}));
var ListHandshakesForAccountRequest;
(function (ListHandshakesForAccountRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListHandshakesForAccountRequest");
    }
    ListHandshakesForAccountRequest.isa = isa;
})(ListHandshakesForAccountRequest = exports.ListHandshakesForAccountRequest || (exports.ListHandshakesForAccountRequest = {}));
var ListHandshakesForAccountResponse;
(function (ListHandshakesForAccountResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListHandshakesForAccountResponse");
    }
    ListHandshakesForAccountResponse.isa = isa;
})(ListHandshakesForAccountResponse = exports.ListHandshakesForAccountResponse || (exports.ListHandshakesForAccountResponse = {}));
var ListHandshakesForOrganizationRequest;
(function (ListHandshakesForOrganizationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListHandshakesForOrganizationRequest");
    }
    ListHandshakesForOrganizationRequest.isa = isa;
})(ListHandshakesForOrganizationRequest = exports.ListHandshakesForOrganizationRequest || (exports.ListHandshakesForOrganizationRequest = {}));
var ListHandshakesForOrganizationResponse;
(function (ListHandshakesForOrganizationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListHandshakesForOrganizationResponse");
    }
    ListHandshakesForOrganizationResponse.isa = isa;
})(ListHandshakesForOrganizationResponse = exports.ListHandshakesForOrganizationResponse || (exports.ListHandshakesForOrganizationResponse = {}));
var ListOrganizationalUnitsForParentRequest;
(function (ListOrganizationalUnitsForParentRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListOrganizationalUnitsForParentRequest");
    }
    ListOrganizationalUnitsForParentRequest.isa = isa;
})(ListOrganizationalUnitsForParentRequest = exports.ListOrganizationalUnitsForParentRequest || (exports.ListOrganizationalUnitsForParentRequest = {}));
var ListOrganizationalUnitsForParentResponse;
(function (ListOrganizationalUnitsForParentResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListOrganizationalUnitsForParentResponse");
    }
    ListOrganizationalUnitsForParentResponse.isa = isa;
})(ListOrganizationalUnitsForParentResponse = exports.ListOrganizationalUnitsForParentResponse || (exports.ListOrganizationalUnitsForParentResponse = {}));
var ListParentsRequest;
(function (ListParentsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListParentsRequest");
    }
    ListParentsRequest.isa = isa;
})(ListParentsRequest = exports.ListParentsRequest || (exports.ListParentsRequest = {}));
var ListParentsResponse;
(function (ListParentsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListParentsResponse");
    }
    ListParentsResponse.isa = isa;
})(ListParentsResponse = exports.ListParentsResponse || (exports.ListParentsResponse = {}));
var ListPoliciesForTargetRequest;
(function (ListPoliciesForTargetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListPoliciesForTargetRequest");
    }
    ListPoliciesForTargetRequest.isa = isa;
})(ListPoliciesForTargetRequest = exports.ListPoliciesForTargetRequest || (exports.ListPoliciesForTargetRequest = {}));
var ListPoliciesForTargetResponse;
(function (ListPoliciesForTargetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListPoliciesForTargetResponse");
    }
    ListPoliciesForTargetResponse.isa = isa;
})(ListPoliciesForTargetResponse = exports.ListPoliciesForTargetResponse || (exports.ListPoliciesForTargetResponse = {}));
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
var ListRootsRequest;
(function (ListRootsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListRootsRequest");
    }
    ListRootsRequest.isa = isa;
})(ListRootsRequest = exports.ListRootsRequest || (exports.ListRootsRequest = {}));
var ListRootsResponse;
(function (ListRootsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListRootsResponse");
    }
    ListRootsResponse.isa = isa;
})(ListRootsResponse = exports.ListRootsResponse || (exports.ListRootsResponse = {}));
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
var ListTargetsForPolicyRequest;
(function (ListTargetsForPolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTargetsForPolicyRequest");
    }
    ListTargetsForPolicyRequest.isa = isa;
})(ListTargetsForPolicyRequest = exports.ListTargetsForPolicyRequest || (exports.ListTargetsForPolicyRequest = {}));
var ListTargetsForPolicyResponse;
(function (ListTargetsForPolicyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTargetsForPolicyResponse");
    }
    ListTargetsForPolicyResponse.isa = isa;
})(ListTargetsForPolicyResponse = exports.ListTargetsForPolicyResponse || (exports.ListTargetsForPolicyResponse = {}));
var MalformedPolicyDocumentException;
(function (MalformedPolicyDocumentException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MalformedPolicyDocumentException");
    }
    MalformedPolicyDocumentException.isa = isa;
})(MalformedPolicyDocumentException = exports.MalformedPolicyDocumentException || (exports.MalformedPolicyDocumentException = {}));
var MasterCannotLeaveOrganizationException;
(function (MasterCannotLeaveOrganizationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MasterCannotLeaveOrganizationException");
    }
    MasterCannotLeaveOrganizationException.isa = isa;
})(MasterCannotLeaveOrganizationException = exports.MasterCannotLeaveOrganizationException || (exports.MasterCannotLeaveOrganizationException = {}));
var MoveAccountRequest;
(function (MoveAccountRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "MoveAccountRequest");
    }
    MoveAccountRequest.isa = isa;
})(MoveAccountRequest = exports.MoveAccountRequest || (exports.MoveAccountRequest = {}));
var Organization;
(function (Organization) {
    function isa(o) {
        return smithy_client_1.isa(o, "Organization");
    }
    Organization.isa = isa;
})(Organization = exports.Organization || (exports.Organization = {}));
var OrganizationFeatureSet;
(function (OrganizationFeatureSet) {
    OrganizationFeatureSet["ALL"] = "ALL";
    OrganizationFeatureSet["CONSOLIDATED_BILLING"] = "CONSOLIDATED_BILLING";
})(OrganizationFeatureSet = exports.OrganizationFeatureSet || (exports.OrganizationFeatureSet = {}));
var OrganizationNotEmptyException;
(function (OrganizationNotEmptyException) {
    function isa(o) {
        return smithy_client_1.isa(o, "OrganizationNotEmptyException");
    }
    OrganizationNotEmptyException.isa = isa;
})(OrganizationNotEmptyException = exports.OrganizationNotEmptyException || (exports.OrganizationNotEmptyException = {}));
var OrganizationalUnit;
(function (OrganizationalUnit) {
    function isa(o) {
        return smithy_client_1.isa(o, "OrganizationalUnit");
    }
    OrganizationalUnit.isa = isa;
})(OrganizationalUnit = exports.OrganizationalUnit || (exports.OrganizationalUnit = {}));
var OrganizationalUnitNotEmptyException;
(function (OrganizationalUnitNotEmptyException) {
    function isa(o) {
        return smithy_client_1.isa(o, "OrganizationalUnitNotEmptyException");
    }
    OrganizationalUnitNotEmptyException.isa = isa;
})(OrganizationalUnitNotEmptyException = exports.OrganizationalUnitNotEmptyException || (exports.OrganizationalUnitNotEmptyException = {}));
var OrganizationalUnitNotFoundException;
(function (OrganizationalUnitNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "OrganizationalUnitNotFoundException");
    }
    OrganizationalUnitNotFoundException.isa = isa;
})(OrganizationalUnitNotFoundException = exports.OrganizationalUnitNotFoundException || (exports.OrganizationalUnitNotFoundException = {}));
var Parent;
(function (Parent) {
    function isa(o) {
        return smithy_client_1.isa(o, "Parent");
    }
    Parent.isa = isa;
})(Parent = exports.Parent || (exports.Parent = {}));
var ParentNotFoundException;
(function (ParentNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ParentNotFoundException");
    }
    ParentNotFoundException.isa = isa;
})(ParentNotFoundException = exports.ParentNotFoundException || (exports.ParentNotFoundException = {}));
var ParentType;
(function (ParentType) {
    ParentType["ORGANIZATIONAL_UNIT"] = "ORGANIZATIONAL_UNIT";
    ParentType["ROOT"] = "ROOT";
})(ParentType = exports.ParentType || (exports.ParentType = {}));
var Policy;
(function (Policy) {
    function isa(o) {
        return smithy_client_1.isa(o, "Policy");
    }
    Policy.isa = isa;
})(Policy = exports.Policy || (exports.Policy = {}));
var PolicyChangesInProgressException;
(function (PolicyChangesInProgressException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PolicyChangesInProgressException");
    }
    PolicyChangesInProgressException.isa = isa;
})(PolicyChangesInProgressException = exports.PolicyChangesInProgressException || (exports.PolicyChangesInProgressException = {}));
var PolicyInUseException;
(function (PolicyInUseException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PolicyInUseException");
    }
    PolicyInUseException.isa = isa;
})(PolicyInUseException = exports.PolicyInUseException || (exports.PolicyInUseException = {}));
var PolicyNotAttachedException;
(function (PolicyNotAttachedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PolicyNotAttachedException");
    }
    PolicyNotAttachedException.isa = isa;
})(PolicyNotAttachedException = exports.PolicyNotAttachedException || (exports.PolicyNotAttachedException = {}));
var PolicyNotFoundException;
(function (PolicyNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PolicyNotFoundException");
    }
    PolicyNotFoundException.isa = isa;
})(PolicyNotFoundException = exports.PolicyNotFoundException || (exports.PolicyNotFoundException = {}));
var PolicySummary;
(function (PolicySummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "PolicySummary");
    }
    PolicySummary.isa = isa;
})(PolicySummary = exports.PolicySummary || (exports.PolicySummary = {}));
var PolicyTargetSummary;
(function (PolicyTargetSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "PolicyTargetSummary");
    }
    PolicyTargetSummary.isa = isa;
})(PolicyTargetSummary = exports.PolicyTargetSummary || (exports.PolicyTargetSummary = {}));
var PolicyType;
(function (PolicyType) {
    PolicyType["SERVICE_CONTROL_POLICY"] = "SERVICE_CONTROL_POLICY";
    PolicyType["TAG_POLICY"] = "TAG_POLICY";
})(PolicyType = exports.PolicyType || (exports.PolicyType = {}));
var PolicyTypeAlreadyEnabledException;
(function (PolicyTypeAlreadyEnabledException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PolicyTypeAlreadyEnabledException");
    }
    PolicyTypeAlreadyEnabledException.isa = isa;
})(PolicyTypeAlreadyEnabledException = exports.PolicyTypeAlreadyEnabledException || (exports.PolicyTypeAlreadyEnabledException = {}));
var PolicyTypeNotAvailableForOrganizationException;
(function (PolicyTypeNotAvailableForOrganizationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PolicyTypeNotAvailableForOrganizationException");
    }
    PolicyTypeNotAvailableForOrganizationException.isa = isa;
})(PolicyTypeNotAvailableForOrganizationException = exports.PolicyTypeNotAvailableForOrganizationException || (exports.PolicyTypeNotAvailableForOrganizationException = {}));
var PolicyTypeNotEnabledException;
(function (PolicyTypeNotEnabledException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PolicyTypeNotEnabledException");
    }
    PolicyTypeNotEnabledException.isa = isa;
})(PolicyTypeNotEnabledException = exports.PolicyTypeNotEnabledException || (exports.PolicyTypeNotEnabledException = {}));
var PolicyTypeStatus;
(function (PolicyTypeStatus) {
    PolicyTypeStatus["ENABLED"] = "ENABLED";
    PolicyTypeStatus["PENDING_DISABLE"] = "PENDING_DISABLE";
    PolicyTypeStatus["PENDING_ENABLE"] = "PENDING_ENABLE";
})(PolicyTypeStatus = exports.PolicyTypeStatus || (exports.PolicyTypeStatus = {}));
var PolicyTypeSummary;
(function (PolicyTypeSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "PolicyTypeSummary");
    }
    PolicyTypeSummary.isa = isa;
})(PolicyTypeSummary = exports.PolicyTypeSummary || (exports.PolicyTypeSummary = {}));
var RemoveAccountFromOrganizationRequest;
(function (RemoveAccountFromOrganizationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RemoveAccountFromOrganizationRequest");
    }
    RemoveAccountFromOrganizationRequest.isa = isa;
})(RemoveAccountFromOrganizationRequest = exports.RemoveAccountFromOrganizationRequest || (exports.RemoveAccountFromOrganizationRequest = {}));
var Root;
(function (Root) {
    function isa(o) {
        return smithy_client_1.isa(o, "Root");
    }
    Root.isa = isa;
})(Root = exports.Root || (exports.Root = {}));
var RootNotFoundException;
(function (RootNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "RootNotFoundException");
    }
    RootNotFoundException.isa = isa;
})(RootNotFoundException = exports.RootNotFoundException || (exports.RootNotFoundException = {}));
var ServiceException;
(function (ServiceException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceException");
    }
    ServiceException.isa = isa;
})(ServiceException = exports.ServiceException || (exports.ServiceException = {}));
var SourceParentNotFoundException;
(function (SourceParentNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "SourceParentNotFoundException");
    }
    SourceParentNotFoundException.isa = isa;
})(SourceParentNotFoundException = exports.SourceParentNotFoundException || (exports.SourceParentNotFoundException = {}));
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
var TargetNotFoundException;
(function (TargetNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TargetNotFoundException");
    }
    TargetNotFoundException.isa = isa;
})(TargetNotFoundException = exports.TargetNotFoundException || (exports.TargetNotFoundException = {}));
var TargetType;
(function (TargetType) {
    TargetType["ACCOUNT"] = "ACCOUNT";
    TargetType["ORGANIZATIONAL_UNIT"] = "ORGANIZATIONAL_UNIT";
    TargetType["ROOT"] = "ROOT";
})(TargetType = exports.TargetType || (exports.TargetType = {}));
var TooManyRequestsException;
(function (TooManyRequestsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TooManyRequestsException");
    }
    TooManyRequestsException.isa = isa;
})(TooManyRequestsException = exports.TooManyRequestsException || (exports.TooManyRequestsException = {}));
var UnsupportedAPIEndpointException;
(function (UnsupportedAPIEndpointException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnsupportedAPIEndpointException");
    }
    UnsupportedAPIEndpointException.isa = isa;
})(UnsupportedAPIEndpointException = exports.UnsupportedAPIEndpointException || (exports.UnsupportedAPIEndpointException = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceRequest");
    }
    UntagResourceRequest.isa = isa;
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UpdateOrganizationalUnitRequest;
(function (UpdateOrganizationalUnitRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateOrganizationalUnitRequest");
    }
    UpdateOrganizationalUnitRequest.isa = isa;
})(UpdateOrganizationalUnitRequest = exports.UpdateOrganizationalUnitRequest || (exports.UpdateOrganizationalUnitRequest = {}));
var UpdateOrganizationalUnitResponse;
(function (UpdateOrganizationalUnitResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateOrganizationalUnitResponse");
    }
    UpdateOrganizationalUnitResponse.isa = isa;
})(UpdateOrganizationalUnitResponse = exports.UpdateOrganizationalUnitResponse || (exports.UpdateOrganizationalUnitResponse = {}));
var UpdatePolicyRequest;
(function (UpdatePolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdatePolicyRequest");
    }
    UpdatePolicyRequest.isa = isa;
})(UpdatePolicyRequest = exports.UpdatePolicyRequest || (exports.UpdatePolicyRequest = {}));
var UpdatePolicyResponse;
(function (UpdatePolicyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdatePolicyResponse");
    }
    UpdatePolicyResponse.isa = isa;
})(UpdatePolicyResponse = exports.UpdatePolicyResponse || (exports.UpdatePolicyResponse = {}));
//# sourceMappingURL=index.js.map