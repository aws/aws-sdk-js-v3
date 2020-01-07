"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccessDetail;
(function (AccessDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "AccessDetail");
    }
    AccessDetail.isa = isa;
})(AccessDetail = exports.AccessDetail || (exports.AccessDetail = {}));
var AccessKey;
(function (AccessKey) {
    function isa(o) {
        return smithy_client_1.isa(o, "AccessKey");
    }
    AccessKey.isa = isa;
})(AccessKey = exports.AccessKey || (exports.AccessKey = {}));
var AccessKeyLastUsed;
(function (AccessKeyLastUsed) {
    function isa(o) {
        return smithy_client_1.isa(o, "AccessKeyLastUsed");
    }
    AccessKeyLastUsed.isa = isa;
})(AccessKeyLastUsed = exports.AccessKeyLastUsed || (exports.AccessKeyLastUsed = {}));
var AccessKeyMetadata;
(function (AccessKeyMetadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "AccessKeyMetadata");
    }
    AccessKeyMetadata.isa = isa;
})(AccessKeyMetadata = exports.AccessKeyMetadata || (exports.AccessKeyMetadata = {}));
var AddClientIDToOpenIDConnectProviderRequest;
(function (AddClientIDToOpenIDConnectProviderRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddClientIDToOpenIDConnectProviderRequest");
    }
    AddClientIDToOpenIDConnectProviderRequest.isa = isa;
})(AddClientIDToOpenIDConnectProviderRequest = exports.AddClientIDToOpenIDConnectProviderRequest || (exports.AddClientIDToOpenIDConnectProviderRequest = {}));
var AddRoleToInstanceProfileRequest;
(function (AddRoleToInstanceProfileRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddRoleToInstanceProfileRequest");
    }
    AddRoleToInstanceProfileRequest.isa = isa;
})(AddRoleToInstanceProfileRequest = exports.AddRoleToInstanceProfileRequest || (exports.AddRoleToInstanceProfileRequest = {}));
var AddUserToGroupRequest;
(function (AddUserToGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddUserToGroupRequest");
    }
    AddUserToGroupRequest.isa = isa;
})(AddUserToGroupRequest = exports.AddUserToGroupRequest || (exports.AddUserToGroupRequest = {}));
var AttachGroupPolicyRequest;
(function (AttachGroupPolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AttachGroupPolicyRequest");
    }
    AttachGroupPolicyRequest.isa = isa;
})(AttachGroupPolicyRequest = exports.AttachGroupPolicyRequest || (exports.AttachGroupPolicyRequest = {}));
var AttachRolePolicyRequest;
(function (AttachRolePolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AttachRolePolicyRequest");
    }
    AttachRolePolicyRequest.isa = isa;
})(AttachRolePolicyRequest = exports.AttachRolePolicyRequest || (exports.AttachRolePolicyRequest = {}));
var AttachUserPolicyRequest;
(function (AttachUserPolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AttachUserPolicyRequest");
    }
    AttachUserPolicyRequest.isa = isa;
})(AttachUserPolicyRequest = exports.AttachUserPolicyRequest || (exports.AttachUserPolicyRequest = {}));
var AttachedPermissionsBoundary;
(function (AttachedPermissionsBoundary) {
    function isa(o) {
        return smithy_client_1.isa(o, "AttachedPermissionsBoundary");
    }
    AttachedPermissionsBoundary.isa = isa;
})(AttachedPermissionsBoundary = exports.AttachedPermissionsBoundary || (exports.AttachedPermissionsBoundary = {}));
var AttachedPolicy;
(function (AttachedPolicy) {
    function isa(o) {
        return smithy_client_1.isa(o, "AttachedPolicy");
    }
    AttachedPolicy.isa = isa;
})(AttachedPolicy = exports.AttachedPolicy || (exports.AttachedPolicy = {}));
var ChangePasswordRequest;
(function (ChangePasswordRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ChangePasswordRequest");
    }
    ChangePasswordRequest.isa = isa;
})(ChangePasswordRequest = exports.ChangePasswordRequest || (exports.ChangePasswordRequest = {}));
var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConcurrentModificationException");
    }
    ConcurrentModificationException.isa = isa;
})(ConcurrentModificationException = exports.ConcurrentModificationException || (exports.ConcurrentModificationException = {}));
var ContextEntry;
(function (ContextEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "ContextEntry");
    }
    ContextEntry.isa = isa;
})(ContextEntry = exports.ContextEntry || (exports.ContextEntry = {}));
var ContextKeyTypeEnum;
(function (ContextKeyTypeEnum) {
    ContextKeyTypeEnum["BINARY"] = "binary";
    ContextKeyTypeEnum["BINARY_LIST"] = "binaryList";
    ContextKeyTypeEnum["BOOLEAN"] = "boolean";
    ContextKeyTypeEnum["BOOLEAN_LIST"] = "booleanList";
    ContextKeyTypeEnum["DATE"] = "date";
    ContextKeyTypeEnum["DATE_LIST"] = "dateList";
    ContextKeyTypeEnum["IP"] = "ip";
    ContextKeyTypeEnum["IP_LIST"] = "ipList";
    ContextKeyTypeEnum["NUMERIC"] = "numeric";
    ContextKeyTypeEnum["NUMERIC_LIST"] = "numericList";
    ContextKeyTypeEnum["STRING"] = "string";
    ContextKeyTypeEnum["STRING_LIST"] = "stringList";
})(ContextKeyTypeEnum = exports.ContextKeyTypeEnum || (exports.ContextKeyTypeEnum = {}));
var CreateAccessKeyRequest;
(function (CreateAccessKeyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAccessKeyRequest");
    }
    CreateAccessKeyRequest.isa = isa;
})(CreateAccessKeyRequest = exports.CreateAccessKeyRequest || (exports.CreateAccessKeyRequest = {}));
var CreateAccessKeyResponse;
(function (CreateAccessKeyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAccessKeyResponse");
    }
    CreateAccessKeyResponse.isa = isa;
})(CreateAccessKeyResponse = exports.CreateAccessKeyResponse || (exports.CreateAccessKeyResponse = {}));
var CreateAccountAliasRequest;
(function (CreateAccountAliasRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAccountAliasRequest");
    }
    CreateAccountAliasRequest.isa = isa;
})(CreateAccountAliasRequest = exports.CreateAccountAliasRequest || (exports.CreateAccountAliasRequest = {}));
var CreateGroupRequest;
(function (CreateGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateGroupRequest");
    }
    CreateGroupRequest.isa = isa;
})(CreateGroupRequest = exports.CreateGroupRequest || (exports.CreateGroupRequest = {}));
var CreateGroupResponse;
(function (CreateGroupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateGroupResponse");
    }
    CreateGroupResponse.isa = isa;
})(CreateGroupResponse = exports.CreateGroupResponse || (exports.CreateGroupResponse = {}));
var CreateInstanceProfileRequest;
(function (CreateInstanceProfileRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateInstanceProfileRequest");
    }
    CreateInstanceProfileRequest.isa = isa;
})(CreateInstanceProfileRequest = exports.CreateInstanceProfileRequest || (exports.CreateInstanceProfileRequest = {}));
var CreateInstanceProfileResponse;
(function (CreateInstanceProfileResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateInstanceProfileResponse");
    }
    CreateInstanceProfileResponse.isa = isa;
})(CreateInstanceProfileResponse = exports.CreateInstanceProfileResponse || (exports.CreateInstanceProfileResponse = {}));
var CreateLoginProfileRequest;
(function (CreateLoginProfileRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateLoginProfileRequest");
    }
    CreateLoginProfileRequest.isa = isa;
})(CreateLoginProfileRequest = exports.CreateLoginProfileRequest || (exports.CreateLoginProfileRequest = {}));
var CreateLoginProfileResponse;
(function (CreateLoginProfileResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateLoginProfileResponse");
    }
    CreateLoginProfileResponse.isa = isa;
})(CreateLoginProfileResponse = exports.CreateLoginProfileResponse || (exports.CreateLoginProfileResponse = {}));
var CreateOpenIDConnectProviderRequest;
(function (CreateOpenIDConnectProviderRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateOpenIDConnectProviderRequest");
    }
    CreateOpenIDConnectProviderRequest.isa = isa;
})(CreateOpenIDConnectProviderRequest = exports.CreateOpenIDConnectProviderRequest || (exports.CreateOpenIDConnectProviderRequest = {}));
var CreateOpenIDConnectProviderResponse;
(function (CreateOpenIDConnectProviderResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateOpenIDConnectProviderResponse");
    }
    CreateOpenIDConnectProviderResponse.isa = isa;
})(CreateOpenIDConnectProviderResponse = exports.CreateOpenIDConnectProviderResponse || (exports.CreateOpenIDConnectProviderResponse = {}));
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
var CreatePolicyVersionRequest;
(function (CreatePolicyVersionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreatePolicyVersionRequest");
    }
    CreatePolicyVersionRequest.isa = isa;
})(CreatePolicyVersionRequest = exports.CreatePolicyVersionRequest || (exports.CreatePolicyVersionRequest = {}));
var CreatePolicyVersionResponse;
(function (CreatePolicyVersionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreatePolicyVersionResponse");
    }
    CreatePolicyVersionResponse.isa = isa;
})(CreatePolicyVersionResponse = exports.CreatePolicyVersionResponse || (exports.CreatePolicyVersionResponse = {}));
var CreateRoleRequest;
(function (CreateRoleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateRoleRequest");
    }
    CreateRoleRequest.isa = isa;
})(CreateRoleRequest = exports.CreateRoleRequest || (exports.CreateRoleRequest = {}));
var CreateRoleResponse;
(function (CreateRoleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateRoleResponse");
    }
    CreateRoleResponse.isa = isa;
})(CreateRoleResponse = exports.CreateRoleResponse || (exports.CreateRoleResponse = {}));
var CreateSAMLProviderRequest;
(function (CreateSAMLProviderRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateSAMLProviderRequest");
    }
    CreateSAMLProviderRequest.isa = isa;
})(CreateSAMLProviderRequest = exports.CreateSAMLProviderRequest || (exports.CreateSAMLProviderRequest = {}));
var CreateSAMLProviderResponse;
(function (CreateSAMLProviderResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateSAMLProviderResponse");
    }
    CreateSAMLProviderResponse.isa = isa;
})(CreateSAMLProviderResponse = exports.CreateSAMLProviderResponse || (exports.CreateSAMLProviderResponse = {}));
var CreateServiceLinkedRoleRequest;
(function (CreateServiceLinkedRoleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateServiceLinkedRoleRequest");
    }
    CreateServiceLinkedRoleRequest.isa = isa;
})(CreateServiceLinkedRoleRequest = exports.CreateServiceLinkedRoleRequest || (exports.CreateServiceLinkedRoleRequest = {}));
var CreateServiceLinkedRoleResponse;
(function (CreateServiceLinkedRoleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateServiceLinkedRoleResponse");
    }
    CreateServiceLinkedRoleResponse.isa = isa;
})(CreateServiceLinkedRoleResponse = exports.CreateServiceLinkedRoleResponse || (exports.CreateServiceLinkedRoleResponse = {}));
var CreateServiceSpecificCredentialRequest;
(function (CreateServiceSpecificCredentialRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateServiceSpecificCredentialRequest");
    }
    CreateServiceSpecificCredentialRequest.isa = isa;
})(CreateServiceSpecificCredentialRequest = exports.CreateServiceSpecificCredentialRequest || (exports.CreateServiceSpecificCredentialRequest = {}));
var CreateServiceSpecificCredentialResponse;
(function (CreateServiceSpecificCredentialResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateServiceSpecificCredentialResponse");
    }
    CreateServiceSpecificCredentialResponse.isa = isa;
})(CreateServiceSpecificCredentialResponse = exports.CreateServiceSpecificCredentialResponse || (exports.CreateServiceSpecificCredentialResponse = {}));
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
var CreateVirtualMFADeviceRequest;
(function (CreateVirtualMFADeviceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateVirtualMFADeviceRequest");
    }
    CreateVirtualMFADeviceRequest.isa = isa;
})(CreateVirtualMFADeviceRequest = exports.CreateVirtualMFADeviceRequest || (exports.CreateVirtualMFADeviceRequest = {}));
var CreateVirtualMFADeviceResponse;
(function (CreateVirtualMFADeviceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateVirtualMFADeviceResponse");
    }
    CreateVirtualMFADeviceResponse.isa = isa;
})(CreateVirtualMFADeviceResponse = exports.CreateVirtualMFADeviceResponse || (exports.CreateVirtualMFADeviceResponse = {}));
var CredentialReportExpiredException;
(function (CredentialReportExpiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CredentialReportExpiredException");
    }
    CredentialReportExpiredException.isa = isa;
})(CredentialReportExpiredException = exports.CredentialReportExpiredException || (exports.CredentialReportExpiredException = {}));
var CredentialReportNotPresentException;
(function (CredentialReportNotPresentException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CredentialReportNotPresentException");
    }
    CredentialReportNotPresentException.isa = isa;
})(CredentialReportNotPresentException = exports.CredentialReportNotPresentException || (exports.CredentialReportNotPresentException = {}));
var CredentialReportNotReadyException;
(function (CredentialReportNotReadyException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CredentialReportNotReadyException");
    }
    CredentialReportNotReadyException.isa = isa;
})(CredentialReportNotReadyException = exports.CredentialReportNotReadyException || (exports.CredentialReportNotReadyException = {}));
var DeactivateMFADeviceRequest;
(function (DeactivateMFADeviceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeactivateMFADeviceRequest");
    }
    DeactivateMFADeviceRequest.isa = isa;
})(DeactivateMFADeviceRequest = exports.DeactivateMFADeviceRequest || (exports.DeactivateMFADeviceRequest = {}));
var DeleteAccessKeyRequest;
(function (DeleteAccessKeyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteAccessKeyRequest");
    }
    DeleteAccessKeyRequest.isa = isa;
})(DeleteAccessKeyRequest = exports.DeleteAccessKeyRequest || (exports.DeleteAccessKeyRequest = {}));
var DeleteAccountAliasRequest;
(function (DeleteAccountAliasRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteAccountAliasRequest");
    }
    DeleteAccountAliasRequest.isa = isa;
})(DeleteAccountAliasRequest = exports.DeleteAccountAliasRequest || (exports.DeleteAccountAliasRequest = {}));
var DeleteConflictException;
(function (DeleteConflictException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteConflictException");
    }
    DeleteConflictException.isa = isa;
})(DeleteConflictException = exports.DeleteConflictException || (exports.DeleteConflictException = {}));
var DeleteGroupPolicyRequest;
(function (DeleteGroupPolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteGroupPolicyRequest");
    }
    DeleteGroupPolicyRequest.isa = isa;
})(DeleteGroupPolicyRequest = exports.DeleteGroupPolicyRequest || (exports.DeleteGroupPolicyRequest = {}));
var DeleteGroupRequest;
(function (DeleteGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteGroupRequest");
    }
    DeleteGroupRequest.isa = isa;
})(DeleteGroupRequest = exports.DeleteGroupRequest || (exports.DeleteGroupRequest = {}));
var DeleteInstanceProfileRequest;
(function (DeleteInstanceProfileRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteInstanceProfileRequest");
    }
    DeleteInstanceProfileRequest.isa = isa;
})(DeleteInstanceProfileRequest = exports.DeleteInstanceProfileRequest || (exports.DeleteInstanceProfileRequest = {}));
var DeleteLoginProfileRequest;
(function (DeleteLoginProfileRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteLoginProfileRequest");
    }
    DeleteLoginProfileRequest.isa = isa;
})(DeleteLoginProfileRequest = exports.DeleteLoginProfileRequest || (exports.DeleteLoginProfileRequest = {}));
var DeleteOpenIDConnectProviderRequest;
(function (DeleteOpenIDConnectProviderRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteOpenIDConnectProviderRequest");
    }
    DeleteOpenIDConnectProviderRequest.isa = isa;
})(DeleteOpenIDConnectProviderRequest = exports.DeleteOpenIDConnectProviderRequest || (exports.DeleteOpenIDConnectProviderRequest = {}));
var DeletePolicyRequest;
(function (DeletePolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeletePolicyRequest");
    }
    DeletePolicyRequest.isa = isa;
})(DeletePolicyRequest = exports.DeletePolicyRequest || (exports.DeletePolicyRequest = {}));
var DeletePolicyVersionRequest;
(function (DeletePolicyVersionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeletePolicyVersionRequest");
    }
    DeletePolicyVersionRequest.isa = isa;
})(DeletePolicyVersionRequest = exports.DeletePolicyVersionRequest || (exports.DeletePolicyVersionRequest = {}));
var DeleteRolePermissionsBoundaryRequest;
(function (DeleteRolePermissionsBoundaryRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRolePermissionsBoundaryRequest");
    }
    DeleteRolePermissionsBoundaryRequest.isa = isa;
})(DeleteRolePermissionsBoundaryRequest = exports.DeleteRolePermissionsBoundaryRequest || (exports.DeleteRolePermissionsBoundaryRequest = {}));
var DeleteRolePolicyRequest;
(function (DeleteRolePolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRolePolicyRequest");
    }
    DeleteRolePolicyRequest.isa = isa;
})(DeleteRolePolicyRequest = exports.DeleteRolePolicyRequest || (exports.DeleteRolePolicyRequest = {}));
var DeleteRoleRequest;
(function (DeleteRoleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRoleRequest");
    }
    DeleteRoleRequest.isa = isa;
})(DeleteRoleRequest = exports.DeleteRoleRequest || (exports.DeleteRoleRequest = {}));
var DeleteSAMLProviderRequest;
(function (DeleteSAMLProviderRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteSAMLProviderRequest");
    }
    DeleteSAMLProviderRequest.isa = isa;
})(DeleteSAMLProviderRequest = exports.DeleteSAMLProviderRequest || (exports.DeleteSAMLProviderRequest = {}));
var DeleteSSHPublicKeyRequest;
(function (DeleteSSHPublicKeyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteSSHPublicKeyRequest");
    }
    DeleteSSHPublicKeyRequest.isa = isa;
})(DeleteSSHPublicKeyRequest = exports.DeleteSSHPublicKeyRequest || (exports.DeleteSSHPublicKeyRequest = {}));
var DeleteServerCertificateRequest;
(function (DeleteServerCertificateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteServerCertificateRequest");
    }
    DeleteServerCertificateRequest.isa = isa;
})(DeleteServerCertificateRequest = exports.DeleteServerCertificateRequest || (exports.DeleteServerCertificateRequest = {}));
var DeleteServiceLinkedRoleRequest;
(function (DeleteServiceLinkedRoleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteServiceLinkedRoleRequest");
    }
    DeleteServiceLinkedRoleRequest.isa = isa;
})(DeleteServiceLinkedRoleRequest = exports.DeleteServiceLinkedRoleRequest || (exports.DeleteServiceLinkedRoleRequest = {}));
var DeleteServiceLinkedRoleResponse;
(function (DeleteServiceLinkedRoleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteServiceLinkedRoleResponse");
    }
    DeleteServiceLinkedRoleResponse.isa = isa;
})(DeleteServiceLinkedRoleResponse = exports.DeleteServiceLinkedRoleResponse || (exports.DeleteServiceLinkedRoleResponse = {}));
var DeleteServiceSpecificCredentialRequest;
(function (DeleteServiceSpecificCredentialRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteServiceSpecificCredentialRequest");
    }
    DeleteServiceSpecificCredentialRequest.isa = isa;
})(DeleteServiceSpecificCredentialRequest = exports.DeleteServiceSpecificCredentialRequest || (exports.DeleteServiceSpecificCredentialRequest = {}));
var DeleteSigningCertificateRequest;
(function (DeleteSigningCertificateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteSigningCertificateRequest");
    }
    DeleteSigningCertificateRequest.isa = isa;
})(DeleteSigningCertificateRequest = exports.DeleteSigningCertificateRequest || (exports.DeleteSigningCertificateRequest = {}));
var DeleteUserPermissionsBoundaryRequest;
(function (DeleteUserPermissionsBoundaryRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteUserPermissionsBoundaryRequest");
    }
    DeleteUserPermissionsBoundaryRequest.isa = isa;
})(DeleteUserPermissionsBoundaryRequest = exports.DeleteUserPermissionsBoundaryRequest || (exports.DeleteUserPermissionsBoundaryRequest = {}));
var DeleteUserPolicyRequest;
(function (DeleteUserPolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteUserPolicyRequest");
    }
    DeleteUserPolicyRequest.isa = isa;
})(DeleteUserPolicyRequest = exports.DeleteUserPolicyRequest || (exports.DeleteUserPolicyRequest = {}));
var DeleteUserRequest;
(function (DeleteUserRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteUserRequest");
    }
    DeleteUserRequest.isa = isa;
})(DeleteUserRequest = exports.DeleteUserRequest || (exports.DeleteUserRequest = {}));
var DeleteVirtualMFADeviceRequest;
(function (DeleteVirtualMFADeviceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteVirtualMFADeviceRequest");
    }
    DeleteVirtualMFADeviceRequest.isa = isa;
})(DeleteVirtualMFADeviceRequest = exports.DeleteVirtualMFADeviceRequest || (exports.DeleteVirtualMFADeviceRequest = {}));
var DeletionTaskFailureReasonType;
(function (DeletionTaskFailureReasonType) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeletionTaskFailureReasonType");
    }
    DeletionTaskFailureReasonType.isa = isa;
})(DeletionTaskFailureReasonType = exports.DeletionTaskFailureReasonType || (exports.DeletionTaskFailureReasonType = {}));
var DeletionTaskStatusType;
(function (DeletionTaskStatusType) {
    DeletionTaskStatusType["FAILED"] = "FAILED";
    DeletionTaskStatusType["IN_PROGRESS"] = "IN_PROGRESS";
    DeletionTaskStatusType["NOT_STARTED"] = "NOT_STARTED";
    DeletionTaskStatusType["SUCCEEDED"] = "SUCCEEDED";
})(DeletionTaskStatusType = exports.DeletionTaskStatusType || (exports.DeletionTaskStatusType = {}));
var DetachGroupPolicyRequest;
(function (DetachGroupPolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DetachGroupPolicyRequest");
    }
    DetachGroupPolicyRequest.isa = isa;
})(DetachGroupPolicyRequest = exports.DetachGroupPolicyRequest || (exports.DetachGroupPolicyRequest = {}));
var DetachRolePolicyRequest;
(function (DetachRolePolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DetachRolePolicyRequest");
    }
    DetachRolePolicyRequest.isa = isa;
})(DetachRolePolicyRequest = exports.DetachRolePolicyRequest || (exports.DetachRolePolicyRequest = {}));
var DetachUserPolicyRequest;
(function (DetachUserPolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DetachUserPolicyRequest");
    }
    DetachUserPolicyRequest.isa = isa;
})(DetachUserPolicyRequest = exports.DetachUserPolicyRequest || (exports.DetachUserPolicyRequest = {}));
var DuplicateCertificateException;
(function (DuplicateCertificateException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DuplicateCertificateException");
    }
    DuplicateCertificateException.isa = isa;
})(DuplicateCertificateException = exports.DuplicateCertificateException || (exports.DuplicateCertificateException = {}));
var DuplicateSSHPublicKeyException;
(function (DuplicateSSHPublicKeyException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DuplicateSSHPublicKeyException");
    }
    DuplicateSSHPublicKeyException.isa = isa;
})(DuplicateSSHPublicKeyException = exports.DuplicateSSHPublicKeyException || (exports.DuplicateSSHPublicKeyException = {}));
var EnableMFADeviceRequest;
(function (EnableMFADeviceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "EnableMFADeviceRequest");
    }
    EnableMFADeviceRequest.isa = isa;
})(EnableMFADeviceRequest = exports.EnableMFADeviceRequest || (exports.EnableMFADeviceRequest = {}));
var EntityAlreadyExistsException;
(function (EntityAlreadyExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "EntityAlreadyExistsException");
    }
    EntityAlreadyExistsException.isa = isa;
})(EntityAlreadyExistsException = exports.EntityAlreadyExistsException || (exports.EntityAlreadyExistsException = {}));
var EntityDetails;
(function (EntityDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "EntityDetails");
    }
    EntityDetails.isa = isa;
})(EntityDetails = exports.EntityDetails || (exports.EntityDetails = {}));
var EntityInfo;
(function (EntityInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "EntityInfo");
    }
    EntityInfo.isa = isa;
})(EntityInfo = exports.EntityInfo || (exports.EntityInfo = {}));
var EntityTemporarilyUnmodifiableException;
(function (EntityTemporarilyUnmodifiableException) {
    function isa(o) {
        return smithy_client_1.isa(o, "EntityTemporarilyUnmodifiableException");
    }
    EntityTemporarilyUnmodifiableException.isa = isa;
})(EntityTemporarilyUnmodifiableException = exports.EntityTemporarilyUnmodifiableException || (exports.EntityTemporarilyUnmodifiableException = {}));
var EntityType;
(function (EntityType) {
    EntityType["AWSManagedPolicy"] = "AWSManagedPolicy";
    EntityType["Group"] = "Group";
    EntityType["LocalManagedPolicy"] = "LocalManagedPolicy";
    EntityType["Role"] = "Role";
    EntityType["User"] = "User";
})(EntityType = exports.EntityType || (exports.EntityType = {}));
var ErrorDetails;
(function (ErrorDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "ErrorDetails");
    }
    ErrorDetails.isa = isa;
})(ErrorDetails = exports.ErrorDetails || (exports.ErrorDetails = {}));
var EvaluationResult;
(function (EvaluationResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "EvaluationResult");
    }
    EvaluationResult.isa = isa;
})(EvaluationResult = exports.EvaluationResult || (exports.EvaluationResult = {}));
var GenerateCredentialReportResponse;
(function (GenerateCredentialReportResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GenerateCredentialReportResponse");
    }
    GenerateCredentialReportResponse.isa = isa;
})(GenerateCredentialReportResponse = exports.GenerateCredentialReportResponse || (exports.GenerateCredentialReportResponse = {}));
var GenerateOrganizationsAccessReportRequest;
(function (GenerateOrganizationsAccessReportRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GenerateOrganizationsAccessReportRequest");
    }
    GenerateOrganizationsAccessReportRequest.isa = isa;
})(GenerateOrganizationsAccessReportRequest = exports.GenerateOrganizationsAccessReportRequest || (exports.GenerateOrganizationsAccessReportRequest = {}));
var GenerateOrganizationsAccessReportResponse;
(function (GenerateOrganizationsAccessReportResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GenerateOrganizationsAccessReportResponse");
    }
    GenerateOrganizationsAccessReportResponse.isa = isa;
})(GenerateOrganizationsAccessReportResponse = exports.GenerateOrganizationsAccessReportResponse || (exports.GenerateOrganizationsAccessReportResponse = {}));
var GenerateServiceLastAccessedDetailsRequest;
(function (GenerateServiceLastAccessedDetailsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GenerateServiceLastAccessedDetailsRequest");
    }
    GenerateServiceLastAccessedDetailsRequest.isa = isa;
})(GenerateServiceLastAccessedDetailsRequest = exports.GenerateServiceLastAccessedDetailsRequest || (exports.GenerateServiceLastAccessedDetailsRequest = {}));
var GenerateServiceLastAccessedDetailsResponse;
(function (GenerateServiceLastAccessedDetailsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GenerateServiceLastAccessedDetailsResponse");
    }
    GenerateServiceLastAccessedDetailsResponse.isa = isa;
})(GenerateServiceLastAccessedDetailsResponse = exports.GenerateServiceLastAccessedDetailsResponse || (exports.GenerateServiceLastAccessedDetailsResponse = {}));
var GetAccessKeyLastUsedRequest;
(function (GetAccessKeyLastUsedRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAccessKeyLastUsedRequest");
    }
    GetAccessKeyLastUsedRequest.isa = isa;
})(GetAccessKeyLastUsedRequest = exports.GetAccessKeyLastUsedRequest || (exports.GetAccessKeyLastUsedRequest = {}));
var GetAccessKeyLastUsedResponse;
(function (GetAccessKeyLastUsedResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAccessKeyLastUsedResponse");
    }
    GetAccessKeyLastUsedResponse.isa = isa;
})(GetAccessKeyLastUsedResponse = exports.GetAccessKeyLastUsedResponse || (exports.GetAccessKeyLastUsedResponse = {}));
var GetAccountAuthorizationDetailsRequest;
(function (GetAccountAuthorizationDetailsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAccountAuthorizationDetailsRequest");
    }
    GetAccountAuthorizationDetailsRequest.isa = isa;
})(GetAccountAuthorizationDetailsRequest = exports.GetAccountAuthorizationDetailsRequest || (exports.GetAccountAuthorizationDetailsRequest = {}));
var GetAccountAuthorizationDetailsResponse;
(function (GetAccountAuthorizationDetailsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAccountAuthorizationDetailsResponse");
    }
    GetAccountAuthorizationDetailsResponse.isa = isa;
})(GetAccountAuthorizationDetailsResponse = exports.GetAccountAuthorizationDetailsResponse || (exports.GetAccountAuthorizationDetailsResponse = {}));
var GetAccountPasswordPolicyResponse;
(function (GetAccountPasswordPolicyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAccountPasswordPolicyResponse");
    }
    GetAccountPasswordPolicyResponse.isa = isa;
})(GetAccountPasswordPolicyResponse = exports.GetAccountPasswordPolicyResponse || (exports.GetAccountPasswordPolicyResponse = {}));
var GetAccountSummaryResponse;
(function (GetAccountSummaryResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAccountSummaryResponse");
    }
    GetAccountSummaryResponse.isa = isa;
})(GetAccountSummaryResponse = exports.GetAccountSummaryResponse || (exports.GetAccountSummaryResponse = {}));
var GetContextKeysForCustomPolicyRequest;
(function (GetContextKeysForCustomPolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetContextKeysForCustomPolicyRequest");
    }
    GetContextKeysForCustomPolicyRequest.isa = isa;
})(GetContextKeysForCustomPolicyRequest = exports.GetContextKeysForCustomPolicyRequest || (exports.GetContextKeysForCustomPolicyRequest = {}));
var GetContextKeysForPolicyResponse;
(function (GetContextKeysForPolicyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetContextKeysForPolicyResponse");
    }
    GetContextKeysForPolicyResponse.isa = isa;
})(GetContextKeysForPolicyResponse = exports.GetContextKeysForPolicyResponse || (exports.GetContextKeysForPolicyResponse = {}));
var GetContextKeysForPrincipalPolicyRequest;
(function (GetContextKeysForPrincipalPolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetContextKeysForPrincipalPolicyRequest");
    }
    GetContextKeysForPrincipalPolicyRequest.isa = isa;
})(GetContextKeysForPrincipalPolicyRequest = exports.GetContextKeysForPrincipalPolicyRequest || (exports.GetContextKeysForPrincipalPolicyRequest = {}));
var GetCredentialReportResponse;
(function (GetCredentialReportResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCredentialReportResponse");
    }
    GetCredentialReportResponse.isa = isa;
})(GetCredentialReportResponse = exports.GetCredentialReportResponse || (exports.GetCredentialReportResponse = {}));
var GetGroupPolicyRequest;
(function (GetGroupPolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetGroupPolicyRequest");
    }
    GetGroupPolicyRequest.isa = isa;
})(GetGroupPolicyRequest = exports.GetGroupPolicyRequest || (exports.GetGroupPolicyRequest = {}));
var GetGroupPolicyResponse;
(function (GetGroupPolicyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetGroupPolicyResponse");
    }
    GetGroupPolicyResponse.isa = isa;
})(GetGroupPolicyResponse = exports.GetGroupPolicyResponse || (exports.GetGroupPolicyResponse = {}));
var GetGroupRequest;
(function (GetGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetGroupRequest");
    }
    GetGroupRequest.isa = isa;
})(GetGroupRequest = exports.GetGroupRequest || (exports.GetGroupRequest = {}));
var GetGroupResponse;
(function (GetGroupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetGroupResponse");
    }
    GetGroupResponse.isa = isa;
})(GetGroupResponse = exports.GetGroupResponse || (exports.GetGroupResponse = {}));
var GetInstanceProfileRequest;
(function (GetInstanceProfileRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetInstanceProfileRequest");
    }
    GetInstanceProfileRequest.isa = isa;
})(GetInstanceProfileRequest = exports.GetInstanceProfileRequest || (exports.GetInstanceProfileRequest = {}));
var GetInstanceProfileResponse;
(function (GetInstanceProfileResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetInstanceProfileResponse");
    }
    GetInstanceProfileResponse.isa = isa;
})(GetInstanceProfileResponse = exports.GetInstanceProfileResponse || (exports.GetInstanceProfileResponse = {}));
var GetLoginProfileRequest;
(function (GetLoginProfileRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetLoginProfileRequest");
    }
    GetLoginProfileRequest.isa = isa;
})(GetLoginProfileRequest = exports.GetLoginProfileRequest || (exports.GetLoginProfileRequest = {}));
var GetLoginProfileResponse;
(function (GetLoginProfileResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetLoginProfileResponse");
    }
    GetLoginProfileResponse.isa = isa;
})(GetLoginProfileResponse = exports.GetLoginProfileResponse || (exports.GetLoginProfileResponse = {}));
var GetOpenIDConnectProviderRequest;
(function (GetOpenIDConnectProviderRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetOpenIDConnectProviderRequest");
    }
    GetOpenIDConnectProviderRequest.isa = isa;
})(GetOpenIDConnectProviderRequest = exports.GetOpenIDConnectProviderRequest || (exports.GetOpenIDConnectProviderRequest = {}));
var GetOpenIDConnectProviderResponse;
(function (GetOpenIDConnectProviderResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetOpenIDConnectProviderResponse");
    }
    GetOpenIDConnectProviderResponse.isa = isa;
})(GetOpenIDConnectProviderResponse = exports.GetOpenIDConnectProviderResponse || (exports.GetOpenIDConnectProviderResponse = {}));
var GetOrganizationsAccessReportRequest;
(function (GetOrganizationsAccessReportRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetOrganizationsAccessReportRequest");
    }
    GetOrganizationsAccessReportRequest.isa = isa;
})(GetOrganizationsAccessReportRequest = exports.GetOrganizationsAccessReportRequest || (exports.GetOrganizationsAccessReportRequest = {}));
var GetOrganizationsAccessReportResponse;
(function (GetOrganizationsAccessReportResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetOrganizationsAccessReportResponse");
    }
    GetOrganizationsAccessReportResponse.isa = isa;
})(GetOrganizationsAccessReportResponse = exports.GetOrganizationsAccessReportResponse || (exports.GetOrganizationsAccessReportResponse = {}));
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
var GetPolicyVersionRequest;
(function (GetPolicyVersionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetPolicyVersionRequest");
    }
    GetPolicyVersionRequest.isa = isa;
})(GetPolicyVersionRequest = exports.GetPolicyVersionRequest || (exports.GetPolicyVersionRequest = {}));
var GetPolicyVersionResponse;
(function (GetPolicyVersionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetPolicyVersionResponse");
    }
    GetPolicyVersionResponse.isa = isa;
})(GetPolicyVersionResponse = exports.GetPolicyVersionResponse || (exports.GetPolicyVersionResponse = {}));
var GetRolePolicyRequest;
(function (GetRolePolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRolePolicyRequest");
    }
    GetRolePolicyRequest.isa = isa;
})(GetRolePolicyRequest = exports.GetRolePolicyRequest || (exports.GetRolePolicyRequest = {}));
var GetRolePolicyResponse;
(function (GetRolePolicyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRolePolicyResponse");
    }
    GetRolePolicyResponse.isa = isa;
})(GetRolePolicyResponse = exports.GetRolePolicyResponse || (exports.GetRolePolicyResponse = {}));
var GetRoleRequest;
(function (GetRoleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRoleRequest");
    }
    GetRoleRequest.isa = isa;
})(GetRoleRequest = exports.GetRoleRequest || (exports.GetRoleRequest = {}));
var GetRoleResponse;
(function (GetRoleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRoleResponse");
    }
    GetRoleResponse.isa = isa;
})(GetRoleResponse = exports.GetRoleResponse || (exports.GetRoleResponse = {}));
var GetSAMLProviderRequest;
(function (GetSAMLProviderRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSAMLProviderRequest");
    }
    GetSAMLProviderRequest.isa = isa;
})(GetSAMLProviderRequest = exports.GetSAMLProviderRequest || (exports.GetSAMLProviderRequest = {}));
var GetSAMLProviderResponse;
(function (GetSAMLProviderResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSAMLProviderResponse");
    }
    GetSAMLProviderResponse.isa = isa;
})(GetSAMLProviderResponse = exports.GetSAMLProviderResponse || (exports.GetSAMLProviderResponse = {}));
var GetSSHPublicKeyRequest;
(function (GetSSHPublicKeyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSSHPublicKeyRequest");
    }
    GetSSHPublicKeyRequest.isa = isa;
})(GetSSHPublicKeyRequest = exports.GetSSHPublicKeyRequest || (exports.GetSSHPublicKeyRequest = {}));
var GetSSHPublicKeyResponse;
(function (GetSSHPublicKeyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSSHPublicKeyResponse");
    }
    GetSSHPublicKeyResponse.isa = isa;
})(GetSSHPublicKeyResponse = exports.GetSSHPublicKeyResponse || (exports.GetSSHPublicKeyResponse = {}));
var GetServerCertificateRequest;
(function (GetServerCertificateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetServerCertificateRequest");
    }
    GetServerCertificateRequest.isa = isa;
})(GetServerCertificateRequest = exports.GetServerCertificateRequest || (exports.GetServerCertificateRequest = {}));
var GetServerCertificateResponse;
(function (GetServerCertificateResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetServerCertificateResponse");
    }
    GetServerCertificateResponse.isa = isa;
})(GetServerCertificateResponse = exports.GetServerCertificateResponse || (exports.GetServerCertificateResponse = {}));
var GetServiceLastAccessedDetailsRequest;
(function (GetServiceLastAccessedDetailsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetServiceLastAccessedDetailsRequest");
    }
    GetServiceLastAccessedDetailsRequest.isa = isa;
})(GetServiceLastAccessedDetailsRequest = exports.GetServiceLastAccessedDetailsRequest || (exports.GetServiceLastAccessedDetailsRequest = {}));
var GetServiceLastAccessedDetailsResponse;
(function (GetServiceLastAccessedDetailsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetServiceLastAccessedDetailsResponse");
    }
    GetServiceLastAccessedDetailsResponse.isa = isa;
})(GetServiceLastAccessedDetailsResponse = exports.GetServiceLastAccessedDetailsResponse || (exports.GetServiceLastAccessedDetailsResponse = {}));
var GetServiceLastAccessedDetailsWithEntitiesRequest;
(function (GetServiceLastAccessedDetailsWithEntitiesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetServiceLastAccessedDetailsWithEntitiesRequest");
    }
    GetServiceLastAccessedDetailsWithEntitiesRequest.isa = isa;
})(GetServiceLastAccessedDetailsWithEntitiesRequest = exports.GetServiceLastAccessedDetailsWithEntitiesRequest || (exports.GetServiceLastAccessedDetailsWithEntitiesRequest = {}));
var GetServiceLastAccessedDetailsWithEntitiesResponse;
(function (GetServiceLastAccessedDetailsWithEntitiesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetServiceLastAccessedDetailsWithEntitiesResponse");
    }
    GetServiceLastAccessedDetailsWithEntitiesResponse.isa = isa;
})(GetServiceLastAccessedDetailsWithEntitiesResponse = exports.GetServiceLastAccessedDetailsWithEntitiesResponse || (exports.GetServiceLastAccessedDetailsWithEntitiesResponse = {}));
var GetServiceLinkedRoleDeletionStatusRequest;
(function (GetServiceLinkedRoleDeletionStatusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetServiceLinkedRoleDeletionStatusRequest");
    }
    GetServiceLinkedRoleDeletionStatusRequest.isa = isa;
})(GetServiceLinkedRoleDeletionStatusRequest = exports.GetServiceLinkedRoleDeletionStatusRequest || (exports.GetServiceLinkedRoleDeletionStatusRequest = {}));
var GetServiceLinkedRoleDeletionStatusResponse;
(function (GetServiceLinkedRoleDeletionStatusResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetServiceLinkedRoleDeletionStatusResponse");
    }
    GetServiceLinkedRoleDeletionStatusResponse.isa = isa;
})(GetServiceLinkedRoleDeletionStatusResponse = exports.GetServiceLinkedRoleDeletionStatusResponse || (exports.GetServiceLinkedRoleDeletionStatusResponse = {}));
var GetUserPolicyRequest;
(function (GetUserPolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetUserPolicyRequest");
    }
    GetUserPolicyRequest.isa = isa;
})(GetUserPolicyRequest = exports.GetUserPolicyRequest || (exports.GetUserPolicyRequest = {}));
var GetUserPolicyResponse;
(function (GetUserPolicyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetUserPolicyResponse");
    }
    GetUserPolicyResponse.isa = isa;
})(GetUserPolicyResponse = exports.GetUserPolicyResponse || (exports.GetUserPolicyResponse = {}));
var GetUserRequest;
(function (GetUserRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetUserRequest");
    }
    GetUserRequest.isa = isa;
})(GetUserRequest = exports.GetUserRequest || (exports.GetUserRequest = {}));
var GetUserResponse;
(function (GetUserResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetUserResponse");
    }
    GetUserResponse.isa = isa;
})(GetUserResponse = exports.GetUserResponse || (exports.GetUserResponse = {}));
var Group;
(function (Group) {
    function isa(o) {
        return smithy_client_1.isa(o, "Group");
    }
    Group.isa = isa;
})(Group = exports.Group || (exports.Group = {}));
var GroupDetail;
(function (GroupDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "GroupDetail");
    }
    GroupDetail.isa = isa;
})(GroupDetail = exports.GroupDetail || (exports.GroupDetail = {}));
var InstanceProfile;
(function (InstanceProfile) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceProfile");
    }
    InstanceProfile.isa = isa;
})(InstanceProfile = exports.InstanceProfile || (exports.InstanceProfile = {}));
var InvalidAuthenticationCodeException;
(function (InvalidAuthenticationCodeException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidAuthenticationCodeException");
    }
    InvalidAuthenticationCodeException.isa = isa;
})(InvalidAuthenticationCodeException = exports.InvalidAuthenticationCodeException || (exports.InvalidAuthenticationCodeException = {}));
var InvalidCertificateException;
(function (InvalidCertificateException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidCertificateException");
    }
    InvalidCertificateException.isa = isa;
})(InvalidCertificateException = exports.InvalidCertificateException || (exports.InvalidCertificateException = {}));
var InvalidInputException;
(function (InvalidInputException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidInputException");
    }
    InvalidInputException.isa = isa;
})(InvalidInputException = exports.InvalidInputException || (exports.InvalidInputException = {}));
var InvalidPublicKeyException;
(function (InvalidPublicKeyException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidPublicKeyException");
    }
    InvalidPublicKeyException.isa = isa;
})(InvalidPublicKeyException = exports.InvalidPublicKeyException || (exports.InvalidPublicKeyException = {}));
var InvalidUserTypeException;
(function (InvalidUserTypeException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidUserTypeException");
    }
    InvalidUserTypeException.isa = isa;
})(InvalidUserTypeException = exports.InvalidUserTypeException || (exports.InvalidUserTypeException = {}));
var KeyPairMismatchException;
(function (KeyPairMismatchException) {
    function isa(o) {
        return smithy_client_1.isa(o, "KeyPairMismatchException");
    }
    KeyPairMismatchException.isa = isa;
})(KeyPairMismatchException = exports.KeyPairMismatchException || (exports.KeyPairMismatchException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ListAccessKeysRequest;
(function (ListAccessKeysRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAccessKeysRequest");
    }
    ListAccessKeysRequest.isa = isa;
})(ListAccessKeysRequest = exports.ListAccessKeysRequest || (exports.ListAccessKeysRequest = {}));
var ListAccessKeysResponse;
(function (ListAccessKeysResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAccessKeysResponse");
    }
    ListAccessKeysResponse.isa = isa;
})(ListAccessKeysResponse = exports.ListAccessKeysResponse || (exports.ListAccessKeysResponse = {}));
var ListAccountAliasesRequest;
(function (ListAccountAliasesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAccountAliasesRequest");
    }
    ListAccountAliasesRequest.isa = isa;
})(ListAccountAliasesRequest = exports.ListAccountAliasesRequest || (exports.ListAccountAliasesRequest = {}));
var ListAccountAliasesResponse;
(function (ListAccountAliasesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAccountAliasesResponse");
    }
    ListAccountAliasesResponse.isa = isa;
})(ListAccountAliasesResponse = exports.ListAccountAliasesResponse || (exports.ListAccountAliasesResponse = {}));
var ListAttachedGroupPoliciesRequest;
(function (ListAttachedGroupPoliciesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAttachedGroupPoliciesRequest");
    }
    ListAttachedGroupPoliciesRequest.isa = isa;
})(ListAttachedGroupPoliciesRequest = exports.ListAttachedGroupPoliciesRequest || (exports.ListAttachedGroupPoliciesRequest = {}));
var ListAttachedGroupPoliciesResponse;
(function (ListAttachedGroupPoliciesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAttachedGroupPoliciesResponse");
    }
    ListAttachedGroupPoliciesResponse.isa = isa;
})(ListAttachedGroupPoliciesResponse = exports.ListAttachedGroupPoliciesResponse || (exports.ListAttachedGroupPoliciesResponse = {}));
var ListAttachedRolePoliciesRequest;
(function (ListAttachedRolePoliciesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAttachedRolePoliciesRequest");
    }
    ListAttachedRolePoliciesRequest.isa = isa;
})(ListAttachedRolePoliciesRequest = exports.ListAttachedRolePoliciesRequest || (exports.ListAttachedRolePoliciesRequest = {}));
var ListAttachedRolePoliciesResponse;
(function (ListAttachedRolePoliciesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAttachedRolePoliciesResponse");
    }
    ListAttachedRolePoliciesResponse.isa = isa;
})(ListAttachedRolePoliciesResponse = exports.ListAttachedRolePoliciesResponse || (exports.ListAttachedRolePoliciesResponse = {}));
var ListAttachedUserPoliciesRequest;
(function (ListAttachedUserPoliciesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAttachedUserPoliciesRequest");
    }
    ListAttachedUserPoliciesRequest.isa = isa;
})(ListAttachedUserPoliciesRequest = exports.ListAttachedUserPoliciesRequest || (exports.ListAttachedUserPoliciesRequest = {}));
var ListAttachedUserPoliciesResponse;
(function (ListAttachedUserPoliciesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAttachedUserPoliciesResponse");
    }
    ListAttachedUserPoliciesResponse.isa = isa;
})(ListAttachedUserPoliciesResponse = exports.ListAttachedUserPoliciesResponse || (exports.ListAttachedUserPoliciesResponse = {}));
var ListEntitiesForPolicyRequest;
(function (ListEntitiesForPolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListEntitiesForPolicyRequest");
    }
    ListEntitiesForPolicyRequest.isa = isa;
})(ListEntitiesForPolicyRequest = exports.ListEntitiesForPolicyRequest || (exports.ListEntitiesForPolicyRequest = {}));
var ListEntitiesForPolicyResponse;
(function (ListEntitiesForPolicyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListEntitiesForPolicyResponse");
    }
    ListEntitiesForPolicyResponse.isa = isa;
})(ListEntitiesForPolicyResponse = exports.ListEntitiesForPolicyResponse || (exports.ListEntitiesForPolicyResponse = {}));
var ListGroupPoliciesRequest;
(function (ListGroupPoliciesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListGroupPoliciesRequest");
    }
    ListGroupPoliciesRequest.isa = isa;
})(ListGroupPoliciesRequest = exports.ListGroupPoliciesRequest || (exports.ListGroupPoliciesRequest = {}));
var ListGroupPoliciesResponse;
(function (ListGroupPoliciesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListGroupPoliciesResponse");
    }
    ListGroupPoliciesResponse.isa = isa;
})(ListGroupPoliciesResponse = exports.ListGroupPoliciesResponse || (exports.ListGroupPoliciesResponse = {}));
var ListGroupsForUserRequest;
(function (ListGroupsForUserRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListGroupsForUserRequest");
    }
    ListGroupsForUserRequest.isa = isa;
})(ListGroupsForUserRequest = exports.ListGroupsForUserRequest || (exports.ListGroupsForUserRequest = {}));
var ListGroupsForUserResponse;
(function (ListGroupsForUserResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListGroupsForUserResponse");
    }
    ListGroupsForUserResponse.isa = isa;
})(ListGroupsForUserResponse = exports.ListGroupsForUserResponse || (exports.ListGroupsForUserResponse = {}));
var ListGroupsRequest;
(function (ListGroupsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListGroupsRequest");
    }
    ListGroupsRequest.isa = isa;
})(ListGroupsRequest = exports.ListGroupsRequest || (exports.ListGroupsRequest = {}));
var ListGroupsResponse;
(function (ListGroupsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListGroupsResponse");
    }
    ListGroupsResponse.isa = isa;
})(ListGroupsResponse = exports.ListGroupsResponse || (exports.ListGroupsResponse = {}));
var ListInstanceProfilesForRoleRequest;
(function (ListInstanceProfilesForRoleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListInstanceProfilesForRoleRequest");
    }
    ListInstanceProfilesForRoleRequest.isa = isa;
})(ListInstanceProfilesForRoleRequest = exports.ListInstanceProfilesForRoleRequest || (exports.ListInstanceProfilesForRoleRequest = {}));
var ListInstanceProfilesForRoleResponse;
(function (ListInstanceProfilesForRoleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListInstanceProfilesForRoleResponse");
    }
    ListInstanceProfilesForRoleResponse.isa = isa;
})(ListInstanceProfilesForRoleResponse = exports.ListInstanceProfilesForRoleResponse || (exports.ListInstanceProfilesForRoleResponse = {}));
var ListInstanceProfilesRequest;
(function (ListInstanceProfilesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListInstanceProfilesRequest");
    }
    ListInstanceProfilesRequest.isa = isa;
})(ListInstanceProfilesRequest = exports.ListInstanceProfilesRequest || (exports.ListInstanceProfilesRequest = {}));
var ListInstanceProfilesResponse;
(function (ListInstanceProfilesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListInstanceProfilesResponse");
    }
    ListInstanceProfilesResponse.isa = isa;
})(ListInstanceProfilesResponse = exports.ListInstanceProfilesResponse || (exports.ListInstanceProfilesResponse = {}));
var ListMFADevicesRequest;
(function (ListMFADevicesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListMFADevicesRequest");
    }
    ListMFADevicesRequest.isa = isa;
})(ListMFADevicesRequest = exports.ListMFADevicesRequest || (exports.ListMFADevicesRequest = {}));
var ListMFADevicesResponse;
(function (ListMFADevicesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListMFADevicesResponse");
    }
    ListMFADevicesResponse.isa = isa;
})(ListMFADevicesResponse = exports.ListMFADevicesResponse || (exports.ListMFADevicesResponse = {}));
var ListOpenIDConnectProvidersRequest;
(function (ListOpenIDConnectProvidersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListOpenIDConnectProvidersRequest");
    }
    ListOpenIDConnectProvidersRequest.isa = isa;
})(ListOpenIDConnectProvidersRequest = exports.ListOpenIDConnectProvidersRequest || (exports.ListOpenIDConnectProvidersRequest = {}));
var ListOpenIDConnectProvidersResponse;
(function (ListOpenIDConnectProvidersResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListOpenIDConnectProvidersResponse");
    }
    ListOpenIDConnectProvidersResponse.isa = isa;
})(ListOpenIDConnectProvidersResponse = exports.ListOpenIDConnectProvidersResponse || (exports.ListOpenIDConnectProvidersResponse = {}));
var ListPoliciesGrantingServiceAccessEntry;
(function (ListPoliciesGrantingServiceAccessEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListPoliciesGrantingServiceAccessEntry");
    }
    ListPoliciesGrantingServiceAccessEntry.isa = isa;
})(ListPoliciesGrantingServiceAccessEntry = exports.ListPoliciesGrantingServiceAccessEntry || (exports.ListPoliciesGrantingServiceAccessEntry = {}));
var ListPoliciesGrantingServiceAccessRequest;
(function (ListPoliciesGrantingServiceAccessRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListPoliciesGrantingServiceAccessRequest");
    }
    ListPoliciesGrantingServiceAccessRequest.isa = isa;
})(ListPoliciesGrantingServiceAccessRequest = exports.ListPoliciesGrantingServiceAccessRequest || (exports.ListPoliciesGrantingServiceAccessRequest = {}));
var ListPoliciesGrantingServiceAccessResponse;
(function (ListPoliciesGrantingServiceAccessResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListPoliciesGrantingServiceAccessResponse");
    }
    ListPoliciesGrantingServiceAccessResponse.isa = isa;
})(ListPoliciesGrantingServiceAccessResponse = exports.ListPoliciesGrantingServiceAccessResponse || (exports.ListPoliciesGrantingServiceAccessResponse = {}));
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
var ListPolicyVersionsRequest;
(function (ListPolicyVersionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListPolicyVersionsRequest");
    }
    ListPolicyVersionsRequest.isa = isa;
})(ListPolicyVersionsRequest = exports.ListPolicyVersionsRequest || (exports.ListPolicyVersionsRequest = {}));
var ListPolicyVersionsResponse;
(function (ListPolicyVersionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListPolicyVersionsResponse");
    }
    ListPolicyVersionsResponse.isa = isa;
})(ListPolicyVersionsResponse = exports.ListPolicyVersionsResponse || (exports.ListPolicyVersionsResponse = {}));
var ListRolePoliciesRequest;
(function (ListRolePoliciesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListRolePoliciesRequest");
    }
    ListRolePoliciesRequest.isa = isa;
})(ListRolePoliciesRequest = exports.ListRolePoliciesRequest || (exports.ListRolePoliciesRequest = {}));
var ListRolePoliciesResponse;
(function (ListRolePoliciesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListRolePoliciesResponse");
    }
    ListRolePoliciesResponse.isa = isa;
})(ListRolePoliciesResponse = exports.ListRolePoliciesResponse || (exports.ListRolePoliciesResponse = {}));
var ListRoleTagsRequest;
(function (ListRoleTagsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListRoleTagsRequest");
    }
    ListRoleTagsRequest.isa = isa;
})(ListRoleTagsRequest = exports.ListRoleTagsRequest || (exports.ListRoleTagsRequest = {}));
var ListRoleTagsResponse;
(function (ListRoleTagsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListRoleTagsResponse");
    }
    ListRoleTagsResponse.isa = isa;
})(ListRoleTagsResponse = exports.ListRoleTagsResponse || (exports.ListRoleTagsResponse = {}));
var ListRolesRequest;
(function (ListRolesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListRolesRequest");
    }
    ListRolesRequest.isa = isa;
})(ListRolesRequest = exports.ListRolesRequest || (exports.ListRolesRequest = {}));
var ListRolesResponse;
(function (ListRolesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListRolesResponse");
    }
    ListRolesResponse.isa = isa;
})(ListRolesResponse = exports.ListRolesResponse || (exports.ListRolesResponse = {}));
var ListSAMLProvidersRequest;
(function (ListSAMLProvidersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSAMLProvidersRequest");
    }
    ListSAMLProvidersRequest.isa = isa;
})(ListSAMLProvidersRequest = exports.ListSAMLProvidersRequest || (exports.ListSAMLProvidersRequest = {}));
var ListSAMLProvidersResponse;
(function (ListSAMLProvidersResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSAMLProvidersResponse");
    }
    ListSAMLProvidersResponse.isa = isa;
})(ListSAMLProvidersResponse = exports.ListSAMLProvidersResponse || (exports.ListSAMLProvidersResponse = {}));
var ListSSHPublicKeysRequest;
(function (ListSSHPublicKeysRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSSHPublicKeysRequest");
    }
    ListSSHPublicKeysRequest.isa = isa;
})(ListSSHPublicKeysRequest = exports.ListSSHPublicKeysRequest || (exports.ListSSHPublicKeysRequest = {}));
var ListSSHPublicKeysResponse;
(function (ListSSHPublicKeysResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSSHPublicKeysResponse");
    }
    ListSSHPublicKeysResponse.isa = isa;
})(ListSSHPublicKeysResponse = exports.ListSSHPublicKeysResponse || (exports.ListSSHPublicKeysResponse = {}));
var ListServerCertificatesRequest;
(function (ListServerCertificatesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListServerCertificatesRequest");
    }
    ListServerCertificatesRequest.isa = isa;
})(ListServerCertificatesRequest = exports.ListServerCertificatesRequest || (exports.ListServerCertificatesRequest = {}));
var ListServerCertificatesResponse;
(function (ListServerCertificatesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListServerCertificatesResponse");
    }
    ListServerCertificatesResponse.isa = isa;
})(ListServerCertificatesResponse = exports.ListServerCertificatesResponse || (exports.ListServerCertificatesResponse = {}));
var ListServiceSpecificCredentialsRequest;
(function (ListServiceSpecificCredentialsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListServiceSpecificCredentialsRequest");
    }
    ListServiceSpecificCredentialsRequest.isa = isa;
})(ListServiceSpecificCredentialsRequest = exports.ListServiceSpecificCredentialsRequest || (exports.ListServiceSpecificCredentialsRequest = {}));
var ListServiceSpecificCredentialsResponse;
(function (ListServiceSpecificCredentialsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListServiceSpecificCredentialsResponse");
    }
    ListServiceSpecificCredentialsResponse.isa = isa;
})(ListServiceSpecificCredentialsResponse = exports.ListServiceSpecificCredentialsResponse || (exports.ListServiceSpecificCredentialsResponse = {}));
var ListSigningCertificatesRequest;
(function (ListSigningCertificatesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSigningCertificatesRequest");
    }
    ListSigningCertificatesRequest.isa = isa;
})(ListSigningCertificatesRequest = exports.ListSigningCertificatesRequest || (exports.ListSigningCertificatesRequest = {}));
var ListSigningCertificatesResponse;
(function (ListSigningCertificatesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSigningCertificatesResponse");
    }
    ListSigningCertificatesResponse.isa = isa;
})(ListSigningCertificatesResponse = exports.ListSigningCertificatesResponse || (exports.ListSigningCertificatesResponse = {}));
var ListUserPoliciesRequest;
(function (ListUserPoliciesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListUserPoliciesRequest");
    }
    ListUserPoliciesRequest.isa = isa;
})(ListUserPoliciesRequest = exports.ListUserPoliciesRequest || (exports.ListUserPoliciesRequest = {}));
var ListUserPoliciesResponse;
(function (ListUserPoliciesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListUserPoliciesResponse");
    }
    ListUserPoliciesResponse.isa = isa;
})(ListUserPoliciesResponse = exports.ListUserPoliciesResponse || (exports.ListUserPoliciesResponse = {}));
var ListUserTagsRequest;
(function (ListUserTagsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListUserTagsRequest");
    }
    ListUserTagsRequest.isa = isa;
})(ListUserTagsRequest = exports.ListUserTagsRequest || (exports.ListUserTagsRequest = {}));
var ListUserTagsResponse;
(function (ListUserTagsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListUserTagsResponse");
    }
    ListUserTagsResponse.isa = isa;
})(ListUserTagsResponse = exports.ListUserTagsResponse || (exports.ListUserTagsResponse = {}));
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
var ListVirtualMFADevicesRequest;
(function (ListVirtualMFADevicesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListVirtualMFADevicesRequest");
    }
    ListVirtualMFADevicesRequest.isa = isa;
})(ListVirtualMFADevicesRequest = exports.ListVirtualMFADevicesRequest || (exports.ListVirtualMFADevicesRequest = {}));
var ListVirtualMFADevicesResponse;
(function (ListVirtualMFADevicesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListVirtualMFADevicesResponse");
    }
    ListVirtualMFADevicesResponse.isa = isa;
})(ListVirtualMFADevicesResponse = exports.ListVirtualMFADevicesResponse || (exports.ListVirtualMFADevicesResponse = {}));
var LoginProfile;
(function (LoginProfile) {
    function isa(o) {
        return smithy_client_1.isa(o, "LoginProfile");
    }
    LoginProfile.isa = isa;
})(LoginProfile = exports.LoginProfile || (exports.LoginProfile = {}));
var MFADevice;
(function (MFADevice) {
    function isa(o) {
        return smithy_client_1.isa(o, "MFADevice");
    }
    MFADevice.isa = isa;
})(MFADevice = exports.MFADevice || (exports.MFADevice = {}));
var MalformedCertificateException;
(function (MalformedCertificateException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MalformedCertificateException");
    }
    MalformedCertificateException.isa = isa;
})(MalformedCertificateException = exports.MalformedCertificateException || (exports.MalformedCertificateException = {}));
var MalformedPolicyDocumentException;
(function (MalformedPolicyDocumentException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MalformedPolicyDocumentException");
    }
    MalformedPolicyDocumentException.isa = isa;
})(MalformedPolicyDocumentException = exports.MalformedPolicyDocumentException || (exports.MalformedPolicyDocumentException = {}));
var ManagedPolicyDetail;
(function (ManagedPolicyDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "ManagedPolicyDetail");
    }
    ManagedPolicyDetail.isa = isa;
})(ManagedPolicyDetail = exports.ManagedPolicyDetail || (exports.ManagedPolicyDetail = {}));
var NoSuchEntityException;
(function (NoSuchEntityException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NoSuchEntityException");
    }
    NoSuchEntityException.isa = isa;
})(NoSuchEntityException = exports.NoSuchEntityException || (exports.NoSuchEntityException = {}));
var OpenIDConnectProviderListEntry;
(function (OpenIDConnectProviderListEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "OpenIDConnectProviderListEntry");
    }
    OpenIDConnectProviderListEntry.isa = isa;
})(OpenIDConnectProviderListEntry = exports.OpenIDConnectProviderListEntry || (exports.OpenIDConnectProviderListEntry = {}));
var OrganizationsDecisionDetail;
(function (OrganizationsDecisionDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "OrganizationsDecisionDetail");
    }
    OrganizationsDecisionDetail.isa = isa;
})(OrganizationsDecisionDetail = exports.OrganizationsDecisionDetail || (exports.OrganizationsDecisionDetail = {}));
var PasswordPolicy;
(function (PasswordPolicy) {
    function isa(o) {
        return smithy_client_1.isa(o, "PasswordPolicy");
    }
    PasswordPolicy.isa = isa;
})(PasswordPolicy = exports.PasswordPolicy || (exports.PasswordPolicy = {}));
var PasswordPolicyViolationException;
(function (PasswordPolicyViolationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PasswordPolicyViolationException");
    }
    PasswordPolicyViolationException.isa = isa;
})(PasswordPolicyViolationException = exports.PasswordPolicyViolationException || (exports.PasswordPolicyViolationException = {}));
var PermissionsBoundaryAttachmentType;
(function (PermissionsBoundaryAttachmentType) {
    PermissionsBoundaryAttachmentType["Policy"] = "PermissionsBoundaryPolicy";
})(PermissionsBoundaryAttachmentType = exports.PermissionsBoundaryAttachmentType || (exports.PermissionsBoundaryAttachmentType = {}));
var Policy;
(function (Policy) {
    function isa(o) {
        return smithy_client_1.isa(o, "Policy");
    }
    Policy.isa = isa;
})(Policy = exports.Policy || (exports.Policy = {}));
var PolicyDetail;
(function (PolicyDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "PolicyDetail");
    }
    PolicyDetail.isa = isa;
})(PolicyDetail = exports.PolicyDetail || (exports.PolicyDetail = {}));
var PolicyEvaluationDecisionType;
(function (PolicyEvaluationDecisionType) {
    PolicyEvaluationDecisionType["ALLOWED"] = "allowed";
    PolicyEvaluationDecisionType["EXPLICIT_DENY"] = "explicitDeny";
    PolicyEvaluationDecisionType["IMPLICIT_DENY"] = "implicitDeny";
})(PolicyEvaluationDecisionType = exports.PolicyEvaluationDecisionType || (exports.PolicyEvaluationDecisionType = {}));
var PolicyEvaluationException;
(function (PolicyEvaluationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PolicyEvaluationException");
    }
    PolicyEvaluationException.isa = isa;
})(PolicyEvaluationException = exports.PolicyEvaluationException || (exports.PolicyEvaluationException = {}));
var PolicyGrantingServiceAccess;
(function (PolicyGrantingServiceAccess) {
    function isa(o) {
        return smithy_client_1.isa(o, "PolicyGrantingServiceAccess");
    }
    PolicyGrantingServiceAccess.isa = isa;
})(PolicyGrantingServiceAccess = exports.PolicyGrantingServiceAccess || (exports.PolicyGrantingServiceAccess = {}));
var PolicyGroup;
(function (PolicyGroup) {
    function isa(o) {
        return smithy_client_1.isa(o, "PolicyGroup");
    }
    PolicyGroup.isa = isa;
})(PolicyGroup = exports.PolicyGroup || (exports.PolicyGroup = {}));
var PolicyNotAttachableException;
(function (PolicyNotAttachableException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PolicyNotAttachableException");
    }
    PolicyNotAttachableException.isa = isa;
})(PolicyNotAttachableException = exports.PolicyNotAttachableException || (exports.PolicyNotAttachableException = {}));
var PolicyRole;
(function (PolicyRole) {
    function isa(o) {
        return smithy_client_1.isa(o, "PolicyRole");
    }
    PolicyRole.isa = isa;
})(PolicyRole = exports.PolicyRole || (exports.PolicyRole = {}));
var PolicySourceType;
(function (PolicySourceType) {
    PolicySourceType["AWS_MANAGED"] = "aws-managed";
    PolicySourceType["GROUP"] = "group";
    PolicySourceType["NONE"] = "none";
    PolicySourceType["RESOURCE"] = "resource";
    PolicySourceType["ROLE"] = "role";
    PolicySourceType["USER"] = "user";
    PolicySourceType["USER_MANAGED"] = "user-managed";
})(PolicySourceType = exports.PolicySourceType || (exports.PolicySourceType = {}));
var PolicyUser;
(function (PolicyUser) {
    function isa(o) {
        return smithy_client_1.isa(o, "PolicyUser");
    }
    PolicyUser.isa = isa;
})(PolicyUser = exports.PolicyUser || (exports.PolicyUser = {}));
var PolicyVersion;
(function (PolicyVersion) {
    function isa(o) {
        return smithy_client_1.isa(o, "PolicyVersion");
    }
    PolicyVersion.isa = isa;
})(PolicyVersion = exports.PolicyVersion || (exports.PolicyVersion = {}));
var Position;
(function (Position) {
    function isa(o) {
        return smithy_client_1.isa(o, "Position");
    }
    Position.isa = isa;
})(Position = exports.Position || (exports.Position = {}));
var PutGroupPolicyRequest;
(function (PutGroupPolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutGroupPolicyRequest");
    }
    PutGroupPolicyRequest.isa = isa;
})(PutGroupPolicyRequest = exports.PutGroupPolicyRequest || (exports.PutGroupPolicyRequest = {}));
var PutRolePermissionsBoundaryRequest;
(function (PutRolePermissionsBoundaryRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutRolePermissionsBoundaryRequest");
    }
    PutRolePermissionsBoundaryRequest.isa = isa;
})(PutRolePermissionsBoundaryRequest = exports.PutRolePermissionsBoundaryRequest || (exports.PutRolePermissionsBoundaryRequest = {}));
var PutRolePolicyRequest;
(function (PutRolePolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutRolePolicyRequest");
    }
    PutRolePolicyRequest.isa = isa;
})(PutRolePolicyRequest = exports.PutRolePolicyRequest || (exports.PutRolePolicyRequest = {}));
var PutUserPermissionsBoundaryRequest;
(function (PutUserPermissionsBoundaryRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutUserPermissionsBoundaryRequest");
    }
    PutUserPermissionsBoundaryRequest.isa = isa;
})(PutUserPermissionsBoundaryRequest = exports.PutUserPermissionsBoundaryRequest || (exports.PutUserPermissionsBoundaryRequest = {}));
var PutUserPolicyRequest;
(function (PutUserPolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutUserPolicyRequest");
    }
    PutUserPolicyRequest.isa = isa;
})(PutUserPolicyRequest = exports.PutUserPolicyRequest || (exports.PutUserPolicyRequest = {}));
var RemoveClientIDFromOpenIDConnectProviderRequest;
(function (RemoveClientIDFromOpenIDConnectProviderRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RemoveClientIDFromOpenIDConnectProviderRequest");
    }
    RemoveClientIDFromOpenIDConnectProviderRequest.isa = isa;
})(RemoveClientIDFromOpenIDConnectProviderRequest = exports.RemoveClientIDFromOpenIDConnectProviderRequest || (exports.RemoveClientIDFromOpenIDConnectProviderRequest = {}));
var RemoveRoleFromInstanceProfileRequest;
(function (RemoveRoleFromInstanceProfileRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RemoveRoleFromInstanceProfileRequest");
    }
    RemoveRoleFromInstanceProfileRequest.isa = isa;
})(RemoveRoleFromInstanceProfileRequest = exports.RemoveRoleFromInstanceProfileRequest || (exports.RemoveRoleFromInstanceProfileRequest = {}));
var RemoveUserFromGroupRequest;
(function (RemoveUserFromGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RemoveUserFromGroupRequest");
    }
    RemoveUserFromGroupRequest.isa = isa;
})(RemoveUserFromGroupRequest = exports.RemoveUserFromGroupRequest || (exports.RemoveUserFromGroupRequest = {}));
var ReportGenerationLimitExceededException;
(function (ReportGenerationLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReportGenerationLimitExceededException");
    }
    ReportGenerationLimitExceededException.isa = isa;
})(ReportGenerationLimitExceededException = exports.ReportGenerationLimitExceededException || (exports.ReportGenerationLimitExceededException = {}));
var ReportStateType;
(function (ReportStateType) {
    ReportStateType["COMPLETE"] = "COMPLETE";
    ReportStateType["INPROGRESS"] = "INPROGRESS";
    ReportStateType["STARTED"] = "STARTED";
})(ReportStateType = exports.ReportStateType || (exports.ReportStateType = {}));
var ResetServiceSpecificCredentialRequest;
(function (ResetServiceSpecificCredentialRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResetServiceSpecificCredentialRequest");
    }
    ResetServiceSpecificCredentialRequest.isa = isa;
})(ResetServiceSpecificCredentialRequest = exports.ResetServiceSpecificCredentialRequest || (exports.ResetServiceSpecificCredentialRequest = {}));
var ResetServiceSpecificCredentialResponse;
(function (ResetServiceSpecificCredentialResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResetServiceSpecificCredentialResponse");
    }
    ResetServiceSpecificCredentialResponse.isa = isa;
})(ResetServiceSpecificCredentialResponse = exports.ResetServiceSpecificCredentialResponse || (exports.ResetServiceSpecificCredentialResponse = {}));
var ResourceSpecificResult;
(function (ResourceSpecificResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceSpecificResult");
    }
    ResourceSpecificResult.isa = isa;
})(ResourceSpecificResult = exports.ResourceSpecificResult || (exports.ResourceSpecificResult = {}));
var ResyncMFADeviceRequest;
(function (ResyncMFADeviceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResyncMFADeviceRequest");
    }
    ResyncMFADeviceRequest.isa = isa;
})(ResyncMFADeviceRequest = exports.ResyncMFADeviceRequest || (exports.ResyncMFADeviceRequest = {}));
var Role;
(function (Role) {
    function isa(o) {
        return smithy_client_1.isa(o, "Role");
    }
    Role.isa = isa;
})(Role = exports.Role || (exports.Role = {}));
var RoleDetail;
(function (RoleDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "RoleDetail");
    }
    RoleDetail.isa = isa;
})(RoleDetail = exports.RoleDetail || (exports.RoleDetail = {}));
var RoleLastUsed;
(function (RoleLastUsed) {
    function isa(o) {
        return smithy_client_1.isa(o, "RoleLastUsed");
    }
    RoleLastUsed.isa = isa;
})(RoleLastUsed = exports.RoleLastUsed || (exports.RoleLastUsed = {}));
var RoleUsageType;
(function (RoleUsageType) {
    function isa(o) {
        return smithy_client_1.isa(o, "RoleUsageType");
    }
    RoleUsageType.isa = isa;
})(RoleUsageType = exports.RoleUsageType || (exports.RoleUsageType = {}));
var SAMLProviderListEntry;
(function (SAMLProviderListEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "SAMLProviderListEntry");
    }
    SAMLProviderListEntry.isa = isa;
})(SAMLProviderListEntry = exports.SAMLProviderListEntry || (exports.SAMLProviderListEntry = {}));
var SSHPublicKey;
(function (SSHPublicKey) {
    function isa(o) {
        return smithy_client_1.isa(o, "SSHPublicKey");
    }
    SSHPublicKey.isa = isa;
})(SSHPublicKey = exports.SSHPublicKey || (exports.SSHPublicKey = {}));
var SSHPublicKeyMetadata;
(function (SSHPublicKeyMetadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "SSHPublicKeyMetadata");
    }
    SSHPublicKeyMetadata.isa = isa;
})(SSHPublicKeyMetadata = exports.SSHPublicKeyMetadata || (exports.SSHPublicKeyMetadata = {}));
var ServerCertificate;
(function (ServerCertificate) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServerCertificate");
    }
    ServerCertificate.isa = isa;
})(ServerCertificate = exports.ServerCertificate || (exports.ServerCertificate = {}));
var ServerCertificateMetadata;
(function (ServerCertificateMetadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServerCertificateMetadata");
    }
    ServerCertificateMetadata.isa = isa;
})(ServerCertificateMetadata = exports.ServerCertificateMetadata || (exports.ServerCertificateMetadata = {}));
var ServiceFailureException;
(function (ServiceFailureException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceFailureException");
    }
    ServiceFailureException.isa = isa;
})(ServiceFailureException = exports.ServiceFailureException || (exports.ServiceFailureException = {}));
var ServiceLastAccessed;
(function (ServiceLastAccessed) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceLastAccessed");
    }
    ServiceLastAccessed.isa = isa;
})(ServiceLastAccessed = exports.ServiceLastAccessed || (exports.ServiceLastAccessed = {}));
var ServiceNotSupportedException;
(function (ServiceNotSupportedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceNotSupportedException");
    }
    ServiceNotSupportedException.isa = isa;
})(ServiceNotSupportedException = exports.ServiceNotSupportedException || (exports.ServiceNotSupportedException = {}));
var ServiceSpecificCredential;
(function (ServiceSpecificCredential) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceSpecificCredential");
    }
    ServiceSpecificCredential.isa = isa;
})(ServiceSpecificCredential = exports.ServiceSpecificCredential || (exports.ServiceSpecificCredential = {}));
var ServiceSpecificCredentialMetadata;
(function (ServiceSpecificCredentialMetadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceSpecificCredentialMetadata");
    }
    ServiceSpecificCredentialMetadata.isa = isa;
})(ServiceSpecificCredentialMetadata = exports.ServiceSpecificCredentialMetadata || (exports.ServiceSpecificCredentialMetadata = {}));
var SetDefaultPolicyVersionRequest;
(function (SetDefaultPolicyVersionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetDefaultPolicyVersionRequest");
    }
    SetDefaultPolicyVersionRequest.isa = isa;
})(SetDefaultPolicyVersionRequest = exports.SetDefaultPolicyVersionRequest || (exports.SetDefaultPolicyVersionRequest = {}));
var SetSecurityTokenServicePreferencesRequest;
(function (SetSecurityTokenServicePreferencesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetSecurityTokenServicePreferencesRequest");
    }
    SetSecurityTokenServicePreferencesRequest.isa = isa;
})(SetSecurityTokenServicePreferencesRequest = exports.SetSecurityTokenServicePreferencesRequest || (exports.SetSecurityTokenServicePreferencesRequest = {}));
var SigningCertificate;
(function (SigningCertificate) {
    function isa(o) {
        return smithy_client_1.isa(o, "SigningCertificate");
    }
    SigningCertificate.isa = isa;
})(SigningCertificate = exports.SigningCertificate || (exports.SigningCertificate = {}));
var SimulateCustomPolicyRequest;
(function (SimulateCustomPolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SimulateCustomPolicyRequest");
    }
    SimulateCustomPolicyRequest.isa = isa;
})(SimulateCustomPolicyRequest = exports.SimulateCustomPolicyRequest || (exports.SimulateCustomPolicyRequest = {}));
var SimulatePolicyResponse;
(function (SimulatePolicyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SimulatePolicyResponse");
    }
    SimulatePolicyResponse.isa = isa;
})(SimulatePolicyResponse = exports.SimulatePolicyResponse || (exports.SimulatePolicyResponse = {}));
var SimulatePrincipalPolicyRequest;
(function (SimulatePrincipalPolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SimulatePrincipalPolicyRequest");
    }
    SimulatePrincipalPolicyRequest.isa = isa;
})(SimulatePrincipalPolicyRequest = exports.SimulatePrincipalPolicyRequest || (exports.SimulatePrincipalPolicyRequest = {}));
var Statement;
(function (Statement) {
    function isa(o) {
        return smithy_client_1.isa(o, "Statement");
    }
    Statement.isa = isa;
})(Statement = exports.Statement || (exports.Statement = {}));
var Tag;
(function (Tag) {
    function isa(o) {
        return smithy_client_1.isa(o, "Tag");
    }
    Tag.isa = isa;
})(Tag = exports.Tag || (exports.Tag = {}));
var TagRoleRequest;
(function (TagRoleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagRoleRequest");
    }
    TagRoleRequest.isa = isa;
})(TagRoleRequest = exports.TagRoleRequest || (exports.TagRoleRequest = {}));
var TagUserRequest;
(function (TagUserRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagUserRequest");
    }
    TagUserRequest.isa = isa;
})(TagUserRequest = exports.TagUserRequest || (exports.TagUserRequest = {}));
var UnmodifiableEntityException;
(function (UnmodifiableEntityException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnmodifiableEntityException");
    }
    UnmodifiableEntityException.isa = isa;
})(UnmodifiableEntityException = exports.UnmodifiableEntityException || (exports.UnmodifiableEntityException = {}));
var UnrecognizedPublicKeyEncodingException;
(function (UnrecognizedPublicKeyEncodingException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnrecognizedPublicKeyEncodingException");
    }
    UnrecognizedPublicKeyEncodingException.isa = isa;
})(UnrecognizedPublicKeyEncodingException = exports.UnrecognizedPublicKeyEncodingException || (exports.UnrecognizedPublicKeyEncodingException = {}));
var UntagRoleRequest;
(function (UntagRoleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagRoleRequest");
    }
    UntagRoleRequest.isa = isa;
})(UntagRoleRequest = exports.UntagRoleRequest || (exports.UntagRoleRequest = {}));
var UntagUserRequest;
(function (UntagUserRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagUserRequest");
    }
    UntagUserRequest.isa = isa;
})(UntagUserRequest = exports.UntagUserRequest || (exports.UntagUserRequest = {}));
var UpdateAccessKeyRequest;
(function (UpdateAccessKeyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateAccessKeyRequest");
    }
    UpdateAccessKeyRequest.isa = isa;
})(UpdateAccessKeyRequest = exports.UpdateAccessKeyRequest || (exports.UpdateAccessKeyRequest = {}));
var UpdateAccountPasswordPolicyRequest;
(function (UpdateAccountPasswordPolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateAccountPasswordPolicyRequest");
    }
    UpdateAccountPasswordPolicyRequest.isa = isa;
})(UpdateAccountPasswordPolicyRequest = exports.UpdateAccountPasswordPolicyRequest || (exports.UpdateAccountPasswordPolicyRequest = {}));
var UpdateAssumeRolePolicyRequest;
(function (UpdateAssumeRolePolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateAssumeRolePolicyRequest");
    }
    UpdateAssumeRolePolicyRequest.isa = isa;
})(UpdateAssumeRolePolicyRequest = exports.UpdateAssumeRolePolicyRequest || (exports.UpdateAssumeRolePolicyRequest = {}));
var UpdateGroupRequest;
(function (UpdateGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateGroupRequest");
    }
    UpdateGroupRequest.isa = isa;
})(UpdateGroupRequest = exports.UpdateGroupRequest || (exports.UpdateGroupRequest = {}));
var UpdateLoginProfileRequest;
(function (UpdateLoginProfileRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateLoginProfileRequest");
    }
    UpdateLoginProfileRequest.isa = isa;
})(UpdateLoginProfileRequest = exports.UpdateLoginProfileRequest || (exports.UpdateLoginProfileRequest = {}));
var UpdateOpenIDConnectProviderThumbprintRequest;
(function (UpdateOpenIDConnectProviderThumbprintRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateOpenIDConnectProviderThumbprintRequest");
    }
    UpdateOpenIDConnectProviderThumbprintRequest.isa = isa;
})(UpdateOpenIDConnectProviderThumbprintRequest = exports.UpdateOpenIDConnectProviderThumbprintRequest || (exports.UpdateOpenIDConnectProviderThumbprintRequest = {}));
var UpdateRoleDescriptionRequest;
(function (UpdateRoleDescriptionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateRoleDescriptionRequest");
    }
    UpdateRoleDescriptionRequest.isa = isa;
})(UpdateRoleDescriptionRequest = exports.UpdateRoleDescriptionRequest || (exports.UpdateRoleDescriptionRequest = {}));
var UpdateRoleDescriptionResponse;
(function (UpdateRoleDescriptionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateRoleDescriptionResponse");
    }
    UpdateRoleDescriptionResponse.isa = isa;
})(UpdateRoleDescriptionResponse = exports.UpdateRoleDescriptionResponse || (exports.UpdateRoleDescriptionResponse = {}));
var UpdateRoleRequest;
(function (UpdateRoleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateRoleRequest");
    }
    UpdateRoleRequest.isa = isa;
})(UpdateRoleRequest = exports.UpdateRoleRequest || (exports.UpdateRoleRequest = {}));
var UpdateRoleResponse;
(function (UpdateRoleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateRoleResponse");
    }
    UpdateRoleResponse.isa = isa;
})(UpdateRoleResponse = exports.UpdateRoleResponse || (exports.UpdateRoleResponse = {}));
var UpdateSAMLProviderRequest;
(function (UpdateSAMLProviderRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateSAMLProviderRequest");
    }
    UpdateSAMLProviderRequest.isa = isa;
})(UpdateSAMLProviderRequest = exports.UpdateSAMLProviderRequest || (exports.UpdateSAMLProviderRequest = {}));
var UpdateSAMLProviderResponse;
(function (UpdateSAMLProviderResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateSAMLProviderResponse");
    }
    UpdateSAMLProviderResponse.isa = isa;
})(UpdateSAMLProviderResponse = exports.UpdateSAMLProviderResponse || (exports.UpdateSAMLProviderResponse = {}));
var UpdateSSHPublicKeyRequest;
(function (UpdateSSHPublicKeyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateSSHPublicKeyRequest");
    }
    UpdateSSHPublicKeyRequest.isa = isa;
})(UpdateSSHPublicKeyRequest = exports.UpdateSSHPublicKeyRequest || (exports.UpdateSSHPublicKeyRequest = {}));
var UpdateServerCertificateRequest;
(function (UpdateServerCertificateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateServerCertificateRequest");
    }
    UpdateServerCertificateRequest.isa = isa;
})(UpdateServerCertificateRequest = exports.UpdateServerCertificateRequest || (exports.UpdateServerCertificateRequest = {}));
var UpdateServiceSpecificCredentialRequest;
(function (UpdateServiceSpecificCredentialRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateServiceSpecificCredentialRequest");
    }
    UpdateServiceSpecificCredentialRequest.isa = isa;
})(UpdateServiceSpecificCredentialRequest = exports.UpdateServiceSpecificCredentialRequest || (exports.UpdateServiceSpecificCredentialRequest = {}));
var UpdateSigningCertificateRequest;
(function (UpdateSigningCertificateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateSigningCertificateRequest");
    }
    UpdateSigningCertificateRequest.isa = isa;
})(UpdateSigningCertificateRequest = exports.UpdateSigningCertificateRequest || (exports.UpdateSigningCertificateRequest = {}));
var UpdateUserRequest;
(function (UpdateUserRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateUserRequest");
    }
    UpdateUserRequest.isa = isa;
})(UpdateUserRequest = exports.UpdateUserRequest || (exports.UpdateUserRequest = {}));
var UploadSSHPublicKeyRequest;
(function (UploadSSHPublicKeyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UploadSSHPublicKeyRequest");
    }
    UploadSSHPublicKeyRequest.isa = isa;
})(UploadSSHPublicKeyRequest = exports.UploadSSHPublicKeyRequest || (exports.UploadSSHPublicKeyRequest = {}));
var UploadSSHPublicKeyResponse;
(function (UploadSSHPublicKeyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UploadSSHPublicKeyResponse");
    }
    UploadSSHPublicKeyResponse.isa = isa;
})(UploadSSHPublicKeyResponse = exports.UploadSSHPublicKeyResponse || (exports.UploadSSHPublicKeyResponse = {}));
var UploadServerCertificateRequest;
(function (UploadServerCertificateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UploadServerCertificateRequest");
    }
    UploadServerCertificateRequest.isa = isa;
})(UploadServerCertificateRequest = exports.UploadServerCertificateRequest || (exports.UploadServerCertificateRequest = {}));
var UploadServerCertificateResponse;
(function (UploadServerCertificateResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UploadServerCertificateResponse");
    }
    UploadServerCertificateResponse.isa = isa;
})(UploadServerCertificateResponse = exports.UploadServerCertificateResponse || (exports.UploadServerCertificateResponse = {}));
var UploadSigningCertificateRequest;
(function (UploadSigningCertificateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UploadSigningCertificateRequest");
    }
    UploadSigningCertificateRequest.isa = isa;
})(UploadSigningCertificateRequest = exports.UploadSigningCertificateRequest || (exports.UploadSigningCertificateRequest = {}));
var UploadSigningCertificateResponse;
(function (UploadSigningCertificateResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UploadSigningCertificateResponse");
    }
    UploadSigningCertificateResponse.isa = isa;
})(UploadSigningCertificateResponse = exports.UploadSigningCertificateResponse || (exports.UploadSigningCertificateResponse = {}));
var User;
(function (User) {
    function isa(o) {
        return smithy_client_1.isa(o, "User");
    }
    User.isa = isa;
})(User = exports.User || (exports.User = {}));
var UserDetail;
(function (UserDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "UserDetail");
    }
    UserDetail.isa = isa;
})(UserDetail = exports.UserDetail || (exports.UserDetail = {}));
var VirtualMFADevice;
(function (VirtualMFADevice) {
    function isa(o) {
        return smithy_client_1.isa(o, "VirtualMFADevice");
    }
    VirtualMFADevice.isa = isa;
})(VirtualMFADevice = exports.VirtualMFADevice || (exports.VirtualMFADevice = {}));
var GlobalEndpointTokenVersion;
(function (GlobalEndpointTokenVersion) {
    GlobalEndpointTokenVersion["v1Token"] = "v1Token";
    GlobalEndpointTokenVersion["v2Token"] = "v2Token";
})(GlobalEndpointTokenVersion = exports.GlobalEndpointTokenVersion || (exports.GlobalEndpointTokenVersion = {}));
var PolicyOwnerEntityType;
(function (PolicyOwnerEntityType) {
    PolicyOwnerEntityType["GROUP"] = "GROUP";
    PolicyOwnerEntityType["ROLE"] = "ROLE";
    PolicyOwnerEntityType["USER"] = "USER";
})(PolicyOwnerEntityType = exports.PolicyOwnerEntityType || (exports.PolicyOwnerEntityType = {}));
var PolicyScopeType;
(function (PolicyScopeType) {
    PolicyScopeType["AWS"] = "AWS";
    PolicyScopeType["All"] = "All";
    PolicyScopeType["Local"] = "Local";
})(PolicyScopeType = exports.PolicyScopeType || (exports.PolicyScopeType = {}));
var PolicyType;
(function (PolicyType) {
    PolicyType["INLINE"] = "INLINE";
    PolicyType["MANAGED"] = "MANAGED";
})(PolicyType = exports.PolicyType || (exports.PolicyType = {}));
var SortKeyType;
(function (SortKeyType) {
    SortKeyType["LAST_AUTHENTICATED_TIME_ASCENDING"] = "LAST_AUTHENTICATED_TIME_ASCENDING";
    SortKeyType["LAST_AUTHENTICATED_TIME_DESCENDING"] = "LAST_AUTHENTICATED_TIME_DESCENDING";
    SortKeyType["SERVICE_NAMESPACE_ASCENDING"] = "SERVICE_NAMESPACE_ASCENDING";
    SortKeyType["SERVICE_NAMESPACE_DESCENDING"] = "SERVICE_NAMESPACE_DESCENDING";
})(SortKeyType = exports.SortKeyType || (exports.SortKeyType = {}));
//# sourceMappingURL=index.js.map