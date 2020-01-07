"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccountRecoverySettingType;
(function (AccountRecoverySettingType) {
    function isa(o) {
        return smithy_client_1.isa(o, "AccountRecoverySettingType");
    }
    AccountRecoverySettingType.isa = isa;
})(AccountRecoverySettingType = exports.AccountRecoverySettingType || (exports.AccountRecoverySettingType = {}));
var AccountTakeoverActionType;
(function (AccountTakeoverActionType) {
    function isa(o) {
        return smithy_client_1.isa(o, "AccountTakeoverActionType");
    }
    AccountTakeoverActionType.isa = isa;
})(AccountTakeoverActionType = exports.AccountTakeoverActionType || (exports.AccountTakeoverActionType = {}));
var AccountTakeoverActionsType;
(function (AccountTakeoverActionsType) {
    function isa(o) {
        return smithy_client_1.isa(o, "AccountTakeoverActionsType");
    }
    AccountTakeoverActionsType.isa = isa;
})(AccountTakeoverActionsType = exports.AccountTakeoverActionsType || (exports.AccountTakeoverActionsType = {}));
var AccountTakeoverEventActionType;
(function (AccountTakeoverEventActionType) {
    AccountTakeoverEventActionType["BLOCK"] = "BLOCK";
    AccountTakeoverEventActionType["MFA_IF_CONFIGURED"] = "MFA_IF_CONFIGURED";
    AccountTakeoverEventActionType["MFA_REQUIRED"] = "MFA_REQUIRED";
    AccountTakeoverEventActionType["NO_ACTION"] = "NO_ACTION";
})(AccountTakeoverEventActionType = exports.AccountTakeoverEventActionType || (exports.AccountTakeoverEventActionType = {}));
var AccountTakeoverRiskConfigurationType;
(function (AccountTakeoverRiskConfigurationType) {
    function isa(o) {
        return smithy_client_1.isa(o, "AccountTakeoverRiskConfigurationType");
    }
    AccountTakeoverRiskConfigurationType.isa = isa;
})(AccountTakeoverRiskConfigurationType = exports.AccountTakeoverRiskConfigurationType || (exports.AccountTakeoverRiskConfigurationType = {}));
var AddCustomAttributesRequest;
(function (AddCustomAttributesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddCustomAttributesRequest");
    }
    AddCustomAttributesRequest.isa = isa;
})(AddCustomAttributesRequest = exports.AddCustomAttributesRequest || (exports.AddCustomAttributesRequest = {}));
var AddCustomAttributesResponse;
(function (AddCustomAttributesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddCustomAttributesResponse");
    }
    AddCustomAttributesResponse.isa = isa;
})(AddCustomAttributesResponse = exports.AddCustomAttributesResponse || (exports.AddCustomAttributesResponse = {}));
var AdminAddUserToGroupRequest;
(function (AdminAddUserToGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminAddUserToGroupRequest");
    }
    AdminAddUserToGroupRequest.isa = isa;
})(AdminAddUserToGroupRequest = exports.AdminAddUserToGroupRequest || (exports.AdminAddUserToGroupRequest = {}));
var AdminConfirmSignUpRequest;
(function (AdminConfirmSignUpRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminConfirmSignUpRequest");
    }
    AdminConfirmSignUpRequest.isa = isa;
})(AdminConfirmSignUpRequest = exports.AdminConfirmSignUpRequest || (exports.AdminConfirmSignUpRequest = {}));
var AdminConfirmSignUpResponse;
(function (AdminConfirmSignUpResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminConfirmSignUpResponse");
    }
    AdminConfirmSignUpResponse.isa = isa;
})(AdminConfirmSignUpResponse = exports.AdminConfirmSignUpResponse || (exports.AdminConfirmSignUpResponse = {}));
var AdminCreateUserConfigType;
(function (AdminCreateUserConfigType) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminCreateUserConfigType");
    }
    AdminCreateUserConfigType.isa = isa;
})(AdminCreateUserConfigType = exports.AdminCreateUserConfigType || (exports.AdminCreateUserConfigType = {}));
var AdminCreateUserRequest;
(function (AdminCreateUserRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminCreateUserRequest");
    }
    AdminCreateUserRequest.isa = isa;
})(AdminCreateUserRequest = exports.AdminCreateUserRequest || (exports.AdminCreateUserRequest = {}));
var AdminCreateUserResponse;
(function (AdminCreateUserResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminCreateUserResponse");
    }
    AdminCreateUserResponse.isa = isa;
})(AdminCreateUserResponse = exports.AdminCreateUserResponse || (exports.AdminCreateUserResponse = {}));
var AdminDeleteUserAttributesRequest;
(function (AdminDeleteUserAttributesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminDeleteUserAttributesRequest");
    }
    AdminDeleteUserAttributesRequest.isa = isa;
})(AdminDeleteUserAttributesRequest = exports.AdminDeleteUserAttributesRequest || (exports.AdminDeleteUserAttributesRequest = {}));
var AdminDeleteUserAttributesResponse;
(function (AdminDeleteUserAttributesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminDeleteUserAttributesResponse");
    }
    AdminDeleteUserAttributesResponse.isa = isa;
})(AdminDeleteUserAttributesResponse = exports.AdminDeleteUserAttributesResponse || (exports.AdminDeleteUserAttributesResponse = {}));
var AdminDeleteUserRequest;
(function (AdminDeleteUserRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminDeleteUserRequest");
    }
    AdminDeleteUserRequest.isa = isa;
})(AdminDeleteUserRequest = exports.AdminDeleteUserRequest || (exports.AdminDeleteUserRequest = {}));
var AdminDisableProviderForUserRequest;
(function (AdminDisableProviderForUserRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminDisableProviderForUserRequest");
    }
    AdminDisableProviderForUserRequest.isa = isa;
})(AdminDisableProviderForUserRequest = exports.AdminDisableProviderForUserRequest || (exports.AdminDisableProviderForUserRequest = {}));
var AdminDisableProviderForUserResponse;
(function (AdminDisableProviderForUserResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminDisableProviderForUserResponse");
    }
    AdminDisableProviderForUserResponse.isa = isa;
})(AdminDisableProviderForUserResponse = exports.AdminDisableProviderForUserResponse || (exports.AdminDisableProviderForUserResponse = {}));
var AdminDisableUserRequest;
(function (AdminDisableUserRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminDisableUserRequest");
    }
    AdminDisableUserRequest.isa = isa;
})(AdminDisableUserRequest = exports.AdminDisableUserRequest || (exports.AdminDisableUserRequest = {}));
var AdminDisableUserResponse;
(function (AdminDisableUserResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminDisableUserResponse");
    }
    AdminDisableUserResponse.isa = isa;
})(AdminDisableUserResponse = exports.AdminDisableUserResponse || (exports.AdminDisableUserResponse = {}));
var AdminEnableUserRequest;
(function (AdminEnableUserRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminEnableUserRequest");
    }
    AdminEnableUserRequest.isa = isa;
})(AdminEnableUserRequest = exports.AdminEnableUserRequest || (exports.AdminEnableUserRequest = {}));
var AdminEnableUserResponse;
(function (AdminEnableUserResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminEnableUserResponse");
    }
    AdminEnableUserResponse.isa = isa;
})(AdminEnableUserResponse = exports.AdminEnableUserResponse || (exports.AdminEnableUserResponse = {}));
var AdminForgetDeviceRequest;
(function (AdminForgetDeviceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminForgetDeviceRequest");
    }
    AdminForgetDeviceRequest.isa = isa;
})(AdminForgetDeviceRequest = exports.AdminForgetDeviceRequest || (exports.AdminForgetDeviceRequest = {}));
var AdminGetDeviceRequest;
(function (AdminGetDeviceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminGetDeviceRequest");
    }
    AdminGetDeviceRequest.isa = isa;
})(AdminGetDeviceRequest = exports.AdminGetDeviceRequest || (exports.AdminGetDeviceRequest = {}));
var AdminGetDeviceResponse;
(function (AdminGetDeviceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminGetDeviceResponse");
    }
    AdminGetDeviceResponse.isa = isa;
})(AdminGetDeviceResponse = exports.AdminGetDeviceResponse || (exports.AdminGetDeviceResponse = {}));
var AdminGetUserRequest;
(function (AdminGetUserRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminGetUserRequest");
    }
    AdminGetUserRequest.isa = isa;
})(AdminGetUserRequest = exports.AdminGetUserRequest || (exports.AdminGetUserRequest = {}));
var AdminGetUserResponse;
(function (AdminGetUserResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminGetUserResponse");
    }
    AdminGetUserResponse.isa = isa;
})(AdminGetUserResponse = exports.AdminGetUserResponse || (exports.AdminGetUserResponse = {}));
var AdminInitiateAuthRequest;
(function (AdminInitiateAuthRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminInitiateAuthRequest");
    }
    AdminInitiateAuthRequest.isa = isa;
})(AdminInitiateAuthRequest = exports.AdminInitiateAuthRequest || (exports.AdminInitiateAuthRequest = {}));
var AdminInitiateAuthResponse;
(function (AdminInitiateAuthResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminInitiateAuthResponse");
    }
    AdminInitiateAuthResponse.isa = isa;
})(AdminInitiateAuthResponse = exports.AdminInitiateAuthResponse || (exports.AdminInitiateAuthResponse = {}));
var AdminLinkProviderForUserRequest;
(function (AdminLinkProviderForUserRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminLinkProviderForUserRequest");
    }
    AdminLinkProviderForUserRequest.isa = isa;
})(AdminLinkProviderForUserRequest = exports.AdminLinkProviderForUserRequest || (exports.AdminLinkProviderForUserRequest = {}));
var AdminLinkProviderForUserResponse;
(function (AdminLinkProviderForUserResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminLinkProviderForUserResponse");
    }
    AdminLinkProviderForUserResponse.isa = isa;
})(AdminLinkProviderForUserResponse = exports.AdminLinkProviderForUserResponse || (exports.AdminLinkProviderForUserResponse = {}));
var AdminListDevicesRequest;
(function (AdminListDevicesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminListDevicesRequest");
    }
    AdminListDevicesRequest.isa = isa;
})(AdminListDevicesRequest = exports.AdminListDevicesRequest || (exports.AdminListDevicesRequest = {}));
var AdminListDevicesResponse;
(function (AdminListDevicesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminListDevicesResponse");
    }
    AdminListDevicesResponse.isa = isa;
})(AdminListDevicesResponse = exports.AdminListDevicesResponse || (exports.AdminListDevicesResponse = {}));
var AdminListGroupsForUserRequest;
(function (AdminListGroupsForUserRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminListGroupsForUserRequest");
    }
    AdminListGroupsForUserRequest.isa = isa;
})(AdminListGroupsForUserRequest = exports.AdminListGroupsForUserRequest || (exports.AdminListGroupsForUserRequest = {}));
var AdminListGroupsForUserResponse;
(function (AdminListGroupsForUserResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminListGroupsForUserResponse");
    }
    AdminListGroupsForUserResponse.isa = isa;
})(AdminListGroupsForUserResponse = exports.AdminListGroupsForUserResponse || (exports.AdminListGroupsForUserResponse = {}));
var AdminListUserAuthEventsRequest;
(function (AdminListUserAuthEventsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminListUserAuthEventsRequest");
    }
    AdminListUserAuthEventsRequest.isa = isa;
})(AdminListUserAuthEventsRequest = exports.AdminListUserAuthEventsRequest || (exports.AdminListUserAuthEventsRequest = {}));
var AdminListUserAuthEventsResponse;
(function (AdminListUserAuthEventsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminListUserAuthEventsResponse");
    }
    AdminListUserAuthEventsResponse.isa = isa;
})(AdminListUserAuthEventsResponse = exports.AdminListUserAuthEventsResponse || (exports.AdminListUserAuthEventsResponse = {}));
var AdminRemoveUserFromGroupRequest;
(function (AdminRemoveUserFromGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminRemoveUserFromGroupRequest");
    }
    AdminRemoveUserFromGroupRequest.isa = isa;
})(AdminRemoveUserFromGroupRequest = exports.AdminRemoveUserFromGroupRequest || (exports.AdminRemoveUserFromGroupRequest = {}));
var AdminResetUserPasswordRequest;
(function (AdminResetUserPasswordRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminResetUserPasswordRequest");
    }
    AdminResetUserPasswordRequest.isa = isa;
})(AdminResetUserPasswordRequest = exports.AdminResetUserPasswordRequest || (exports.AdminResetUserPasswordRequest = {}));
var AdminResetUserPasswordResponse;
(function (AdminResetUserPasswordResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminResetUserPasswordResponse");
    }
    AdminResetUserPasswordResponse.isa = isa;
})(AdminResetUserPasswordResponse = exports.AdminResetUserPasswordResponse || (exports.AdminResetUserPasswordResponse = {}));
var AdminRespondToAuthChallengeRequest;
(function (AdminRespondToAuthChallengeRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminRespondToAuthChallengeRequest");
    }
    AdminRespondToAuthChallengeRequest.isa = isa;
})(AdminRespondToAuthChallengeRequest = exports.AdminRespondToAuthChallengeRequest || (exports.AdminRespondToAuthChallengeRequest = {}));
var AdminRespondToAuthChallengeResponse;
(function (AdminRespondToAuthChallengeResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminRespondToAuthChallengeResponse");
    }
    AdminRespondToAuthChallengeResponse.isa = isa;
})(AdminRespondToAuthChallengeResponse = exports.AdminRespondToAuthChallengeResponse || (exports.AdminRespondToAuthChallengeResponse = {}));
var AdminSetUserMFAPreferenceRequest;
(function (AdminSetUserMFAPreferenceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminSetUserMFAPreferenceRequest");
    }
    AdminSetUserMFAPreferenceRequest.isa = isa;
})(AdminSetUserMFAPreferenceRequest = exports.AdminSetUserMFAPreferenceRequest || (exports.AdminSetUserMFAPreferenceRequest = {}));
var AdminSetUserMFAPreferenceResponse;
(function (AdminSetUserMFAPreferenceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminSetUserMFAPreferenceResponse");
    }
    AdminSetUserMFAPreferenceResponse.isa = isa;
})(AdminSetUserMFAPreferenceResponse = exports.AdminSetUserMFAPreferenceResponse || (exports.AdminSetUserMFAPreferenceResponse = {}));
var AdminSetUserPasswordRequest;
(function (AdminSetUserPasswordRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminSetUserPasswordRequest");
    }
    AdminSetUserPasswordRequest.isa = isa;
})(AdminSetUserPasswordRequest = exports.AdminSetUserPasswordRequest || (exports.AdminSetUserPasswordRequest = {}));
var AdminSetUserPasswordResponse;
(function (AdminSetUserPasswordResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminSetUserPasswordResponse");
    }
    AdminSetUserPasswordResponse.isa = isa;
})(AdminSetUserPasswordResponse = exports.AdminSetUserPasswordResponse || (exports.AdminSetUserPasswordResponse = {}));
var AdminSetUserSettingsRequest;
(function (AdminSetUserSettingsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminSetUserSettingsRequest");
    }
    AdminSetUserSettingsRequest.isa = isa;
})(AdminSetUserSettingsRequest = exports.AdminSetUserSettingsRequest || (exports.AdminSetUserSettingsRequest = {}));
var AdminSetUserSettingsResponse;
(function (AdminSetUserSettingsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminSetUserSettingsResponse");
    }
    AdminSetUserSettingsResponse.isa = isa;
})(AdminSetUserSettingsResponse = exports.AdminSetUserSettingsResponse || (exports.AdminSetUserSettingsResponse = {}));
var AdminUpdateAuthEventFeedbackRequest;
(function (AdminUpdateAuthEventFeedbackRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminUpdateAuthEventFeedbackRequest");
    }
    AdminUpdateAuthEventFeedbackRequest.isa = isa;
})(AdminUpdateAuthEventFeedbackRequest = exports.AdminUpdateAuthEventFeedbackRequest || (exports.AdminUpdateAuthEventFeedbackRequest = {}));
var AdminUpdateAuthEventFeedbackResponse;
(function (AdminUpdateAuthEventFeedbackResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminUpdateAuthEventFeedbackResponse");
    }
    AdminUpdateAuthEventFeedbackResponse.isa = isa;
})(AdminUpdateAuthEventFeedbackResponse = exports.AdminUpdateAuthEventFeedbackResponse || (exports.AdminUpdateAuthEventFeedbackResponse = {}));
var AdminUpdateDeviceStatusRequest;
(function (AdminUpdateDeviceStatusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminUpdateDeviceStatusRequest");
    }
    AdminUpdateDeviceStatusRequest.isa = isa;
})(AdminUpdateDeviceStatusRequest = exports.AdminUpdateDeviceStatusRequest || (exports.AdminUpdateDeviceStatusRequest = {}));
var AdminUpdateDeviceStatusResponse;
(function (AdminUpdateDeviceStatusResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminUpdateDeviceStatusResponse");
    }
    AdminUpdateDeviceStatusResponse.isa = isa;
})(AdminUpdateDeviceStatusResponse = exports.AdminUpdateDeviceStatusResponse || (exports.AdminUpdateDeviceStatusResponse = {}));
var AdminUpdateUserAttributesRequest;
(function (AdminUpdateUserAttributesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminUpdateUserAttributesRequest");
    }
    AdminUpdateUserAttributesRequest.isa = isa;
})(AdminUpdateUserAttributesRequest = exports.AdminUpdateUserAttributesRequest || (exports.AdminUpdateUserAttributesRequest = {}));
var AdminUpdateUserAttributesResponse;
(function (AdminUpdateUserAttributesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminUpdateUserAttributesResponse");
    }
    AdminUpdateUserAttributesResponse.isa = isa;
})(AdminUpdateUserAttributesResponse = exports.AdminUpdateUserAttributesResponse || (exports.AdminUpdateUserAttributesResponse = {}));
var AdminUserGlobalSignOutRequest;
(function (AdminUserGlobalSignOutRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminUserGlobalSignOutRequest");
    }
    AdminUserGlobalSignOutRequest.isa = isa;
})(AdminUserGlobalSignOutRequest = exports.AdminUserGlobalSignOutRequest || (exports.AdminUserGlobalSignOutRequest = {}));
var AdminUserGlobalSignOutResponse;
(function (AdminUserGlobalSignOutResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AdminUserGlobalSignOutResponse");
    }
    AdminUserGlobalSignOutResponse.isa = isa;
})(AdminUserGlobalSignOutResponse = exports.AdminUserGlobalSignOutResponse || (exports.AdminUserGlobalSignOutResponse = {}));
var AdvancedSecurityModeType;
(function (AdvancedSecurityModeType) {
    AdvancedSecurityModeType["AUDIT"] = "AUDIT";
    AdvancedSecurityModeType["ENFORCED"] = "ENFORCED";
    AdvancedSecurityModeType["OFF"] = "OFF";
})(AdvancedSecurityModeType = exports.AdvancedSecurityModeType || (exports.AdvancedSecurityModeType = {}));
var AliasAttributeType;
(function (AliasAttributeType) {
    AliasAttributeType["EMAIL"] = "email";
    AliasAttributeType["PHONE_NUMBER"] = "phone_number";
    AliasAttributeType["PREFERRED_USERNAME"] = "preferred_username";
})(AliasAttributeType = exports.AliasAttributeType || (exports.AliasAttributeType = {}));
var AliasExistsException;
(function (AliasExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AliasExistsException");
    }
    AliasExistsException.isa = isa;
})(AliasExistsException = exports.AliasExistsException || (exports.AliasExistsException = {}));
var AnalyticsConfigurationType;
(function (AnalyticsConfigurationType) {
    function isa(o) {
        return smithy_client_1.isa(o, "AnalyticsConfigurationType");
    }
    AnalyticsConfigurationType.isa = isa;
})(AnalyticsConfigurationType = exports.AnalyticsConfigurationType || (exports.AnalyticsConfigurationType = {}));
var AnalyticsMetadataType;
(function (AnalyticsMetadataType) {
    function isa(o) {
        return smithy_client_1.isa(o, "AnalyticsMetadataType");
    }
    AnalyticsMetadataType.isa = isa;
})(AnalyticsMetadataType = exports.AnalyticsMetadataType || (exports.AnalyticsMetadataType = {}));
var AssociateSoftwareTokenRequest;
(function (AssociateSoftwareTokenRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateSoftwareTokenRequest");
    }
    AssociateSoftwareTokenRequest.isa = isa;
})(AssociateSoftwareTokenRequest = exports.AssociateSoftwareTokenRequest || (exports.AssociateSoftwareTokenRequest = {}));
var AssociateSoftwareTokenResponse;
(function (AssociateSoftwareTokenResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateSoftwareTokenResponse");
    }
    AssociateSoftwareTokenResponse.isa = isa;
})(AssociateSoftwareTokenResponse = exports.AssociateSoftwareTokenResponse || (exports.AssociateSoftwareTokenResponse = {}));
var AttributeDataType;
(function (AttributeDataType) {
    AttributeDataType["BOOLEAN"] = "Boolean";
    AttributeDataType["DATETIME"] = "DateTime";
    AttributeDataType["NUMBER"] = "Number";
    AttributeDataType["STRING"] = "String";
})(AttributeDataType = exports.AttributeDataType || (exports.AttributeDataType = {}));
var AttributeType;
(function (AttributeType) {
    function isa(o) {
        return smithy_client_1.isa(o, "AttributeType");
    }
    AttributeType.isa = isa;
})(AttributeType = exports.AttributeType || (exports.AttributeType = {}));
var AuthEventType;
(function (AuthEventType) {
    function isa(o) {
        return smithy_client_1.isa(o, "AuthEventType");
    }
    AuthEventType.isa = isa;
})(AuthEventType = exports.AuthEventType || (exports.AuthEventType = {}));
var AuthFlowType;
(function (AuthFlowType) {
    AuthFlowType["ADMIN_NO_SRP_AUTH"] = "ADMIN_NO_SRP_AUTH";
    AuthFlowType["ADMIN_USER_PASSWORD_AUTH"] = "ADMIN_USER_PASSWORD_AUTH";
    AuthFlowType["CUSTOM_AUTH"] = "CUSTOM_AUTH";
    AuthFlowType["REFRESH_TOKEN"] = "REFRESH_TOKEN";
    AuthFlowType["REFRESH_TOKEN_AUTH"] = "REFRESH_TOKEN_AUTH";
    AuthFlowType["USER_PASSWORD_AUTH"] = "USER_PASSWORD_AUTH";
    AuthFlowType["USER_SRP_AUTH"] = "USER_SRP_AUTH";
})(AuthFlowType = exports.AuthFlowType || (exports.AuthFlowType = {}));
var AuthenticationResultType;
(function (AuthenticationResultType) {
    function isa(o) {
        return smithy_client_1.isa(o, "AuthenticationResultType");
    }
    AuthenticationResultType.isa = isa;
})(AuthenticationResultType = exports.AuthenticationResultType || (exports.AuthenticationResultType = {}));
var ChallengeName;
(function (ChallengeName) {
    ChallengeName["Mfa"] = "Mfa";
    ChallengeName["Password"] = "Password";
})(ChallengeName = exports.ChallengeName || (exports.ChallengeName = {}));
var ChallengeNameType;
(function (ChallengeNameType) {
    ChallengeNameType["ADMIN_NO_SRP_AUTH"] = "ADMIN_NO_SRP_AUTH";
    ChallengeNameType["CUSTOM_CHALLENGE"] = "CUSTOM_CHALLENGE";
    ChallengeNameType["DEVICE_PASSWORD_VERIFIER"] = "DEVICE_PASSWORD_VERIFIER";
    ChallengeNameType["DEVICE_SRP_AUTH"] = "DEVICE_SRP_AUTH";
    ChallengeNameType["MFA_SETUP"] = "MFA_SETUP";
    ChallengeNameType["NEW_PASSWORD_REQUIRED"] = "NEW_PASSWORD_REQUIRED";
    ChallengeNameType["PASSWORD_VERIFIER"] = "PASSWORD_VERIFIER";
    ChallengeNameType["SELECT_MFA_TYPE"] = "SELECT_MFA_TYPE";
    ChallengeNameType["SMS_MFA"] = "SMS_MFA";
    ChallengeNameType["SOFTWARE_TOKEN_MFA"] = "SOFTWARE_TOKEN_MFA";
})(ChallengeNameType = exports.ChallengeNameType || (exports.ChallengeNameType = {}));
var ChallengeResponse;
(function (ChallengeResponse) {
    ChallengeResponse["Failure"] = "Failure";
    ChallengeResponse["Success"] = "Success";
})(ChallengeResponse = exports.ChallengeResponse || (exports.ChallengeResponse = {}));
var ChallengeResponseType;
(function (ChallengeResponseType) {
    function isa(o) {
        return smithy_client_1.isa(o, "ChallengeResponseType");
    }
    ChallengeResponseType.isa = isa;
})(ChallengeResponseType = exports.ChallengeResponseType || (exports.ChallengeResponseType = {}));
var ChangePasswordRequest;
(function (ChangePasswordRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ChangePasswordRequest");
    }
    ChangePasswordRequest.isa = isa;
})(ChangePasswordRequest = exports.ChangePasswordRequest || (exports.ChangePasswordRequest = {}));
var ChangePasswordResponse;
(function (ChangePasswordResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ChangePasswordResponse");
    }
    ChangePasswordResponse.isa = isa;
})(ChangePasswordResponse = exports.ChangePasswordResponse || (exports.ChangePasswordResponse = {}));
var CodeDeliveryDetailsType;
(function (CodeDeliveryDetailsType) {
    function isa(o) {
        return smithy_client_1.isa(o, "CodeDeliveryDetailsType");
    }
    CodeDeliveryDetailsType.isa = isa;
})(CodeDeliveryDetailsType = exports.CodeDeliveryDetailsType || (exports.CodeDeliveryDetailsType = {}));
var CodeDeliveryFailureException;
(function (CodeDeliveryFailureException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CodeDeliveryFailureException");
    }
    CodeDeliveryFailureException.isa = isa;
})(CodeDeliveryFailureException = exports.CodeDeliveryFailureException || (exports.CodeDeliveryFailureException = {}));
var CodeMismatchException;
(function (CodeMismatchException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CodeMismatchException");
    }
    CodeMismatchException.isa = isa;
})(CodeMismatchException = exports.CodeMismatchException || (exports.CodeMismatchException = {}));
var CompromisedCredentialsActionsType;
(function (CompromisedCredentialsActionsType) {
    function isa(o) {
        return smithy_client_1.isa(o, "CompromisedCredentialsActionsType");
    }
    CompromisedCredentialsActionsType.isa = isa;
})(CompromisedCredentialsActionsType = exports.CompromisedCredentialsActionsType || (exports.CompromisedCredentialsActionsType = {}));
var CompromisedCredentialsEventActionType;
(function (CompromisedCredentialsEventActionType) {
    CompromisedCredentialsEventActionType["BLOCK"] = "BLOCK";
    CompromisedCredentialsEventActionType["NO_ACTION"] = "NO_ACTION";
})(CompromisedCredentialsEventActionType = exports.CompromisedCredentialsEventActionType || (exports.CompromisedCredentialsEventActionType = {}));
var CompromisedCredentialsRiskConfigurationType;
(function (CompromisedCredentialsRiskConfigurationType) {
    function isa(o) {
        return smithy_client_1.isa(o, "CompromisedCredentialsRiskConfigurationType");
    }
    CompromisedCredentialsRiskConfigurationType.isa = isa;
})(CompromisedCredentialsRiskConfigurationType = exports.CompromisedCredentialsRiskConfigurationType || (exports.CompromisedCredentialsRiskConfigurationType = {}));
var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConcurrentModificationException");
    }
    ConcurrentModificationException.isa = isa;
})(ConcurrentModificationException = exports.ConcurrentModificationException || (exports.ConcurrentModificationException = {}));
var ConfirmDeviceRequest;
(function (ConfirmDeviceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConfirmDeviceRequest");
    }
    ConfirmDeviceRequest.isa = isa;
})(ConfirmDeviceRequest = exports.ConfirmDeviceRequest || (exports.ConfirmDeviceRequest = {}));
var ConfirmDeviceResponse;
(function (ConfirmDeviceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConfirmDeviceResponse");
    }
    ConfirmDeviceResponse.isa = isa;
})(ConfirmDeviceResponse = exports.ConfirmDeviceResponse || (exports.ConfirmDeviceResponse = {}));
var ConfirmForgotPasswordRequest;
(function (ConfirmForgotPasswordRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConfirmForgotPasswordRequest");
    }
    ConfirmForgotPasswordRequest.isa = isa;
})(ConfirmForgotPasswordRequest = exports.ConfirmForgotPasswordRequest || (exports.ConfirmForgotPasswordRequest = {}));
var ConfirmForgotPasswordResponse;
(function (ConfirmForgotPasswordResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConfirmForgotPasswordResponse");
    }
    ConfirmForgotPasswordResponse.isa = isa;
})(ConfirmForgotPasswordResponse = exports.ConfirmForgotPasswordResponse || (exports.ConfirmForgotPasswordResponse = {}));
var ConfirmSignUpRequest;
(function (ConfirmSignUpRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConfirmSignUpRequest");
    }
    ConfirmSignUpRequest.isa = isa;
})(ConfirmSignUpRequest = exports.ConfirmSignUpRequest || (exports.ConfirmSignUpRequest = {}));
var ConfirmSignUpResponse;
(function (ConfirmSignUpResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConfirmSignUpResponse");
    }
    ConfirmSignUpResponse.isa = isa;
})(ConfirmSignUpResponse = exports.ConfirmSignUpResponse || (exports.ConfirmSignUpResponse = {}));
var ContextDataType;
(function (ContextDataType) {
    function isa(o) {
        return smithy_client_1.isa(o, "ContextDataType");
    }
    ContextDataType.isa = isa;
})(ContextDataType = exports.ContextDataType || (exports.ContextDataType = {}));
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
var CreateIdentityProviderRequest;
(function (CreateIdentityProviderRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateIdentityProviderRequest");
    }
    CreateIdentityProviderRequest.isa = isa;
})(CreateIdentityProviderRequest = exports.CreateIdentityProviderRequest || (exports.CreateIdentityProviderRequest = {}));
var CreateIdentityProviderResponse;
(function (CreateIdentityProviderResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateIdentityProviderResponse");
    }
    CreateIdentityProviderResponse.isa = isa;
})(CreateIdentityProviderResponse = exports.CreateIdentityProviderResponse || (exports.CreateIdentityProviderResponse = {}));
var CreateResourceServerRequest;
(function (CreateResourceServerRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateResourceServerRequest");
    }
    CreateResourceServerRequest.isa = isa;
})(CreateResourceServerRequest = exports.CreateResourceServerRequest || (exports.CreateResourceServerRequest = {}));
var CreateResourceServerResponse;
(function (CreateResourceServerResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateResourceServerResponse");
    }
    CreateResourceServerResponse.isa = isa;
})(CreateResourceServerResponse = exports.CreateResourceServerResponse || (exports.CreateResourceServerResponse = {}));
var CreateUserImportJobRequest;
(function (CreateUserImportJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateUserImportJobRequest");
    }
    CreateUserImportJobRequest.isa = isa;
})(CreateUserImportJobRequest = exports.CreateUserImportJobRequest || (exports.CreateUserImportJobRequest = {}));
var CreateUserImportJobResponse;
(function (CreateUserImportJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateUserImportJobResponse");
    }
    CreateUserImportJobResponse.isa = isa;
})(CreateUserImportJobResponse = exports.CreateUserImportJobResponse || (exports.CreateUserImportJobResponse = {}));
var CreateUserPoolClientRequest;
(function (CreateUserPoolClientRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateUserPoolClientRequest");
    }
    CreateUserPoolClientRequest.isa = isa;
})(CreateUserPoolClientRequest = exports.CreateUserPoolClientRequest || (exports.CreateUserPoolClientRequest = {}));
var CreateUserPoolClientResponse;
(function (CreateUserPoolClientResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateUserPoolClientResponse");
    }
    CreateUserPoolClientResponse.isa = isa;
})(CreateUserPoolClientResponse = exports.CreateUserPoolClientResponse || (exports.CreateUserPoolClientResponse = {}));
var CreateUserPoolDomainRequest;
(function (CreateUserPoolDomainRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateUserPoolDomainRequest");
    }
    CreateUserPoolDomainRequest.isa = isa;
})(CreateUserPoolDomainRequest = exports.CreateUserPoolDomainRequest || (exports.CreateUserPoolDomainRequest = {}));
var CreateUserPoolDomainResponse;
(function (CreateUserPoolDomainResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateUserPoolDomainResponse");
    }
    CreateUserPoolDomainResponse.isa = isa;
})(CreateUserPoolDomainResponse = exports.CreateUserPoolDomainResponse || (exports.CreateUserPoolDomainResponse = {}));
var CreateUserPoolRequest;
(function (CreateUserPoolRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateUserPoolRequest");
    }
    CreateUserPoolRequest.isa = isa;
})(CreateUserPoolRequest = exports.CreateUserPoolRequest || (exports.CreateUserPoolRequest = {}));
var CreateUserPoolResponse;
(function (CreateUserPoolResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateUserPoolResponse");
    }
    CreateUserPoolResponse.isa = isa;
})(CreateUserPoolResponse = exports.CreateUserPoolResponse || (exports.CreateUserPoolResponse = {}));
var CustomDomainConfigType;
(function (CustomDomainConfigType) {
    function isa(o) {
        return smithy_client_1.isa(o, "CustomDomainConfigType");
    }
    CustomDomainConfigType.isa = isa;
})(CustomDomainConfigType = exports.CustomDomainConfigType || (exports.CustomDomainConfigType = {}));
var DefaultEmailOptionType;
(function (DefaultEmailOptionType) {
    DefaultEmailOptionType["CONFIRM_WITH_CODE"] = "CONFIRM_WITH_CODE";
    DefaultEmailOptionType["CONFIRM_WITH_LINK"] = "CONFIRM_WITH_LINK";
})(DefaultEmailOptionType = exports.DefaultEmailOptionType || (exports.DefaultEmailOptionType = {}));
var DeleteGroupRequest;
(function (DeleteGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteGroupRequest");
    }
    DeleteGroupRequest.isa = isa;
})(DeleteGroupRequest = exports.DeleteGroupRequest || (exports.DeleteGroupRequest = {}));
var DeleteIdentityProviderRequest;
(function (DeleteIdentityProviderRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteIdentityProviderRequest");
    }
    DeleteIdentityProviderRequest.isa = isa;
})(DeleteIdentityProviderRequest = exports.DeleteIdentityProviderRequest || (exports.DeleteIdentityProviderRequest = {}));
var DeleteResourceServerRequest;
(function (DeleteResourceServerRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteResourceServerRequest");
    }
    DeleteResourceServerRequest.isa = isa;
})(DeleteResourceServerRequest = exports.DeleteResourceServerRequest || (exports.DeleteResourceServerRequest = {}));
var DeleteUserAttributesRequest;
(function (DeleteUserAttributesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteUserAttributesRequest");
    }
    DeleteUserAttributesRequest.isa = isa;
})(DeleteUserAttributesRequest = exports.DeleteUserAttributesRequest || (exports.DeleteUserAttributesRequest = {}));
var DeleteUserAttributesResponse;
(function (DeleteUserAttributesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteUserAttributesResponse");
    }
    DeleteUserAttributesResponse.isa = isa;
})(DeleteUserAttributesResponse = exports.DeleteUserAttributesResponse || (exports.DeleteUserAttributesResponse = {}));
var DeleteUserPoolClientRequest;
(function (DeleteUserPoolClientRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteUserPoolClientRequest");
    }
    DeleteUserPoolClientRequest.isa = isa;
})(DeleteUserPoolClientRequest = exports.DeleteUserPoolClientRequest || (exports.DeleteUserPoolClientRequest = {}));
var DeleteUserPoolDomainRequest;
(function (DeleteUserPoolDomainRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteUserPoolDomainRequest");
    }
    DeleteUserPoolDomainRequest.isa = isa;
})(DeleteUserPoolDomainRequest = exports.DeleteUserPoolDomainRequest || (exports.DeleteUserPoolDomainRequest = {}));
var DeleteUserPoolDomainResponse;
(function (DeleteUserPoolDomainResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteUserPoolDomainResponse");
    }
    DeleteUserPoolDomainResponse.isa = isa;
})(DeleteUserPoolDomainResponse = exports.DeleteUserPoolDomainResponse || (exports.DeleteUserPoolDomainResponse = {}));
var DeleteUserPoolRequest;
(function (DeleteUserPoolRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteUserPoolRequest");
    }
    DeleteUserPoolRequest.isa = isa;
})(DeleteUserPoolRequest = exports.DeleteUserPoolRequest || (exports.DeleteUserPoolRequest = {}));
var DeleteUserRequest;
(function (DeleteUserRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteUserRequest");
    }
    DeleteUserRequest.isa = isa;
})(DeleteUserRequest = exports.DeleteUserRequest || (exports.DeleteUserRequest = {}));
var DeliveryMediumType;
(function (DeliveryMediumType) {
    DeliveryMediumType["EMAIL"] = "EMAIL";
    DeliveryMediumType["SMS"] = "SMS";
})(DeliveryMediumType = exports.DeliveryMediumType || (exports.DeliveryMediumType = {}));
var DescribeIdentityProviderRequest;
(function (DescribeIdentityProviderRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeIdentityProviderRequest");
    }
    DescribeIdentityProviderRequest.isa = isa;
})(DescribeIdentityProviderRequest = exports.DescribeIdentityProviderRequest || (exports.DescribeIdentityProviderRequest = {}));
var DescribeIdentityProviderResponse;
(function (DescribeIdentityProviderResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeIdentityProviderResponse");
    }
    DescribeIdentityProviderResponse.isa = isa;
})(DescribeIdentityProviderResponse = exports.DescribeIdentityProviderResponse || (exports.DescribeIdentityProviderResponse = {}));
var DescribeResourceServerRequest;
(function (DescribeResourceServerRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeResourceServerRequest");
    }
    DescribeResourceServerRequest.isa = isa;
})(DescribeResourceServerRequest = exports.DescribeResourceServerRequest || (exports.DescribeResourceServerRequest = {}));
var DescribeResourceServerResponse;
(function (DescribeResourceServerResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeResourceServerResponse");
    }
    DescribeResourceServerResponse.isa = isa;
})(DescribeResourceServerResponse = exports.DescribeResourceServerResponse || (exports.DescribeResourceServerResponse = {}));
var DescribeRiskConfigurationRequest;
(function (DescribeRiskConfigurationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeRiskConfigurationRequest");
    }
    DescribeRiskConfigurationRequest.isa = isa;
})(DescribeRiskConfigurationRequest = exports.DescribeRiskConfigurationRequest || (exports.DescribeRiskConfigurationRequest = {}));
var DescribeRiskConfigurationResponse;
(function (DescribeRiskConfigurationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeRiskConfigurationResponse");
    }
    DescribeRiskConfigurationResponse.isa = isa;
})(DescribeRiskConfigurationResponse = exports.DescribeRiskConfigurationResponse || (exports.DescribeRiskConfigurationResponse = {}));
var DescribeUserImportJobRequest;
(function (DescribeUserImportJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeUserImportJobRequest");
    }
    DescribeUserImportJobRequest.isa = isa;
})(DescribeUserImportJobRequest = exports.DescribeUserImportJobRequest || (exports.DescribeUserImportJobRequest = {}));
var DescribeUserImportJobResponse;
(function (DescribeUserImportJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeUserImportJobResponse");
    }
    DescribeUserImportJobResponse.isa = isa;
})(DescribeUserImportJobResponse = exports.DescribeUserImportJobResponse || (exports.DescribeUserImportJobResponse = {}));
var DescribeUserPoolClientRequest;
(function (DescribeUserPoolClientRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeUserPoolClientRequest");
    }
    DescribeUserPoolClientRequest.isa = isa;
})(DescribeUserPoolClientRequest = exports.DescribeUserPoolClientRequest || (exports.DescribeUserPoolClientRequest = {}));
var DescribeUserPoolClientResponse;
(function (DescribeUserPoolClientResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeUserPoolClientResponse");
    }
    DescribeUserPoolClientResponse.isa = isa;
})(DescribeUserPoolClientResponse = exports.DescribeUserPoolClientResponse || (exports.DescribeUserPoolClientResponse = {}));
var DescribeUserPoolDomainRequest;
(function (DescribeUserPoolDomainRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeUserPoolDomainRequest");
    }
    DescribeUserPoolDomainRequest.isa = isa;
})(DescribeUserPoolDomainRequest = exports.DescribeUserPoolDomainRequest || (exports.DescribeUserPoolDomainRequest = {}));
var DescribeUserPoolDomainResponse;
(function (DescribeUserPoolDomainResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeUserPoolDomainResponse");
    }
    DescribeUserPoolDomainResponse.isa = isa;
})(DescribeUserPoolDomainResponse = exports.DescribeUserPoolDomainResponse || (exports.DescribeUserPoolDomainResponse = {}));
var DescribeUserPoolRequest;
(function (DescribeUserPoolRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeUserPoolRequest");
    }
    DescribeUserPoolRequest.isa = isa;
})(DescribeUserPoolRequest = exports.DescribeUserPoolRequest || (exports.DescribeUserPoolRequest = {}));
var DescribeUserPoolResponse;
(function (DescribeUserPoolResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeUserPoolResponse");
    }
    DescribeUserPoolResponse.isa = isa;
})(DescribeUserPoolResponse = exports.DescribeUserPoolResponse || (exports.DescribeUserPoolResponse = {}));
var DeviceConfigurationType;
(function (DeviceConfigurationType) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeviceConfigurationType");
    }
    DeviceConfigurationType.isa = isa;
})(DeviceConfigurationType = exports.DeviceConfigurationType || (exports.DeviceConfigurationType = {}));
var DeviceRememberedStatusType;
(function (DeviceRememberedStatusType) {
    DeviceRememberedStatusType["NOT_REMEMBERED"] = "not_remembered";
    DeviceRememberedStatusType["REMEMBERED"] = "remembered";
})(DeviceRememberedStatusType = exports.DeviceRememberedStatusType || (exports.DeviceRememberedStatusType = {}));
var DeviceSecretVerifierConfigType;
(function (DeviceSecretVerifierConfigType) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeviceSecretVerifierConfigType");
    }
    DeviceSecretVerifierConfigType.isa = isa;
})(DeviceSecretVerifierConfigType = exports.DeviceSecretVerifierConfigType || (exports.DeviceSecretVerifierConfigType = {}));
var DeviceType;
(function (DeviceType) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeviceType");
    }
    DeviceType.isa = isa;
})(DeviceType = exports.DeviceType || (exports.DeviceType = {}));
var DomainDescriptionType;
(function (DomainDescriptionType) {
    function isa(o) {
        return smithy_client_1.isa(o, "DomainDescriptionType");
    }
    DomainDescriptionType.isa = isa;
})(DomainDescriptionType = exports.DomainDescriptionType || (exports.DomainDescriptionType = {}));
var DomainStatusType;
(function (DomainStatusType) {
    DomainStatusType["ACTIVE"] = "ACTIVE";
    DomainStatusType["CREATING"] = "CREATING";
    DomainStatusType["DELETING"] = "DELETING";
    DomainStatusType["FAILED"] = "FAILED";
    DomainStatusType["UPDATING"] = "UPDATING";
})(DomainStatusType = exports.DomainStatusType || (exports.DomainStatusType = {}));
var DuplicateProviderException;
(function (DuplicateProviderException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DuplicateProviderException");
    }
    DuplicateProviderException.isa = isa;
})(DuplicateProviderException = exports.DuplicateProviderException || (exports.DuplicateProviderException = {}));
var EmailConfigurationType;
(function (EmailConfigurationType) {
    function isa(o) {
        return smithy_client_1.isa(o, "EmailConfigurationType");
    }
    EmailConfigurationType.isa = isa;
})(EmailConfigurationType = exports.EmailConfigurationType || (exports.EmailConfigurationType = {}));
var EmailSendingAccountType;
(function (EmailSendingAccountType) {
    EmailSendingAccountType["COGNITO_DEFAULT"] = "COGNITO_DEFAULT";
    EmailSendingAccountType["DEVELOPER"] = "DEVELOPER";
})(EmailSendingAccountType = exports.EmailSendingAccountType || (exports.EmailSendingAccountType = {}));
var EnableSoftwareTokenMFAException;
(function (EnableSoftwareTokenMFAException) {
    function isa(o) {
        return smithy_client_1.isa(o, "EnableSoftwareTokenMFAException");
    }
    EnableSoftwareTokenMFAException.isa = isa;
})(EnableSoftwareTokenMFAException = exports.EnableSoftwareTokenMFAException || (exports.EnableSoftwareTokenMFAException = {}));
var EventContextDataType;
(function (EventContextDataType) {
    function isa(o) {
        return smithy_client_1.isa(o, "EventContextDataType");
    }
    EventContextDataType.isa = isa;
})(EventContextDataType = exports.EventContextDataType || (exports.EventContextDataType = {}));
var EventFeedbackType;
(function (EventFeedbackType) {
    function isa(o) {
        return smithy_client_1.isa(o, "EventFeedbackType");
    }
    EventFeedbackType.isa = isa;
})(EventFeedbackType = exports.EventFeedbackType || (exports.EventFeedbackType = {}));
var EventFilterType;
(function (EventFilterType) {
    EventFilterType["PASSWORD_CHANGE"] = "PASSWORD_CHANGE";
    EventFilterType["SIGN_IN"] = "SIGN_IN";
    EventFilterType["SIGN_UP"] = "SIGN_UP";
})(EventFilterType = exports.EventFilterType || (exports.EventFilterType = {}));
var EventResponseType;
(function (EventResponseType) {
    EventResponseType["Failure"] = "Failure";
    EventResponseType["Success"] = "Success";
})(EventResponseType = exports.EventResponseType || (exports.EventResponseType = {}));
var EventRiskType;
(function (EventRiskType) {
    function isa(o) {
        return smithy_client_1.isa(o, "EventRiskType");
    }
    EventRiskType.isa = isa;
})(EventRiskType = exports.EventRiskType || (exports.EventRiskType = {}));
var EventType;
(function (EventType) {
    EventType["ForgotPassword"] = "ForgotPassword";
    EventType["SignIn"] = "SignIn";
    EventType["SignUp"] = "SignUp";
})(EventType = exports.EventType || (exports.EventType = {}));
var ExpiredCodeException;
(function (ExpiredCodeException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExpiredCodeException");
    }
    ExpiredCodeException.isa = isa;
})(ExpiredCodeException = exports.ExpiredCodeException || (exports.ExpiredCodeException = {}));
var ExplicitAuthFlowsType;
(function (ExplicitAuthFlowsType) {
    ExplicitAuthFlowsType["ADMIN_NO_SRP_AUTH"] = "ADMIN_NO_SRP_AUTH";
    ExplicitAuthFlowsType["ALLOW_ADMIN_USER_PASSWORD_AUTH"] = "ALLOW_ADMIN_USER_PASSWORD_AUTH";
    ExplicitAuthFlowsType["ALLOW_CUSTOM_AUTH"] = "ALLOW_CUSTOM_AUTH";
    ExplicitAuthFlowsType["ALLOW_REFRESH_TOKEN_AUTH"] = "ALLOW_REFRESH_TOKEN_AUTH";
    ExplicitAuthFlowsType["ALLOW_USER_PASSWORD_AUTH"] = "ALLOW_USER_PASSWORD_AUTH";
    ExplicitAuthFlowsType["ALLOW_USER_SRP_AUTH"] = "ALLOW_USER_SRP_AUTH";
    ExplicitAuthFlowsType["CUSTOM_AUTH_FLOW_ONLY"] = "CUSTOM_AUTH_FLOW_ONLY";
    ExplicitAuthFlowsType["USER_PASSWORD_AUTH"] = "USER_PASSWORD_AUTH";
})(ExplicitAuthFlowsType = exports.ExplicitAuthFlowsType || (exports.ExplicitAuthFlowsType = {}));
var FeedbackValueType;
(function (FeedbackValueType) {
    FeedbackValueType["INVALID"] = "Invalid";
    FeedbackValueType["VALID"] = "Valid";
})(FeedbackValueType = exports.FeedbackValueType || (exports.FeedbackValueType = {}));
var ForgetDeviceRequest;
(function (ForgetDeviceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ForgetDeviceRequest");
    }
    ForgetDeviceRequest.isa = isa;
})(ForgetDeviceRequest = exports.ForgetDeviceRequest || (exports.ForgetDeviceRequest = {}));
var ForgotPasswordRequest;
(function (ForgotPasswordRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ForgotPasswordRequest");
    }
    ForgotPasswordRequest.isa = isa;
})(ForgotPasswordRequest = exports.ForgotPasswordRequest || (exports.ForgotPasswordRequest = {}));
var ForgotPasswordResponse;
(function (ForgotPasswordResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ForgotPasswordResponse");
    }
    ForgotPasswordResponse.isa = isa;
})(ForgotPasswordResponse = exports.ForgotPasswordResponse || (exports.ForgotPasswordResponse = {}));
var GetCSVHeaderRequest;
(function (GetCSVHeaderRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCSVHeaderRequest");
    }
    GetCSVHeaderRequest.isa = isa;
})(GetCSVHeaderRequest = exports.GetCSVHeaderRequest || (exports.GetCSVHeaderRequest = {}));
var GetCSVHeaderResponse;
(function (GetCSVHeaderResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCSVHeaderResponse");
    }
    GetCSVHeaderResponse.isa = isa;
})(GetCSVHeaderResponse = exports.GetCSVHeaderResponse || (exports.GetCSVHeaderResponse = {}));
var GetDeviceRequest;
(function (GetDeviceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDeviceRequest");
    }
    GetDeviceRequest.isa = isa;
})(GetDeviceRequest = exports.GetDeviceRequest || (exports.GetDeviceRequest = {}));
var GetDeviceResponse;
(function (GetDeviceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDeviceResponse");
    }
    GetDeviceResponse.isa = isa;
})(GetDeviceResponse = exports.GetDeviceResponse || (exports.GetDeviceResponse = {}));
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
var GetIdentityProviderByIdentifierRequest;
(function (GetIdentityProviderByIdentifierRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetIdentityProviderByIdentifierRequest");
    }
    GetIdentityProviderByIdentifierRequest.isa = isa;
})(GetIdentityProviderByIdentifierRequest = exports.GetIdentityProviderByIdentifierRequest || (exports.GetIdentityProviderByIdentifierRequest = {}));
var GetIdentityProviderByIdentifierResponse;
(function (GetIdentityProviderByIdentifierResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetIdentityProviderByIdentifierResponse");
    }
    GetIdentityProviderByIdentifierResponse.isa = isa;
})(GetIdentityProviderByIdentifierResponse = exports.GetIdentityProviderByIdentifierResponse || (exports.GetIdentityProviderByIdentifierResponse = {}));
var GetSigningCertificateRequest;
(function (GetSigningCertificateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSigningCertificateRequest");
    }
    GetSigningCertificateRequest.isa = isa;
})(GetSigningCertificateRequest = exports.GetSigningCertificateRequest || (exports.GetSigningCertificateRequest = {}));
var GetSigningCertificateResponse;
(function (GetSigningCertificateResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSigningCertificateResponse");
    }
    GetSigningCertificateResponse.isa = isa;
})(GetSigningCertificateResponse = exports.GetSigningCertificateResponse || (exports.GetSigningCertificateResponse = {}));
var GetUICustomizationRequest;
(function (GetUICustomizationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetUICustomizationRequest");
    }
    GetUICustomizationRequest.isa = isa;
})(GetUICustomizationRequest = exports.GetUICustomizationRequest || (exports.GetUICustomizationRequest = {}));
var GetUICustomizationResponse;
(function (GetUICustomizationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetUICustomizationResponse");
    }
    GetUICustomizationResponse.isa = isa;
})(GetUICustomizationResponse = exports.GetUICustomizationResponse || (exports.GetUICustomizationResponse = {}));
var GetUserAttributeVerificationCodeRequest;
(function (GetUserAttributeVerificationCodeRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetUserAttributeVerificationCodeRequest");
    }
    GetUserAttributeVerificationCodeRequest.isa = isa;
})(GetUserAttributeVerificationCodeRequest = exports.GetUserAttributeVerificationCodeRequest || (exports.GetUserAttributeVerificationCodeRequest = {}));
var GetUserAttributeVerificationCodeResponse;
(function (GetUserAttributeVerificationCodeResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetUserAttributeVerificationCodeResponse");
    }
    GetUserAttributeVerificationCodeResponse.isa = isa;
})(GetUserAttributeVerificationCodeResponse = exports.GetUserAttributeVerificationCodeResponse || (exports.GetUserAttributeVerificationCodeResponse = {}));
var GetUserPoolMfaConfigRequest;
(function (GetUserPoolMfaConfigRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetUserPoolMfaConfigRequest");
    }
    GetUserPoolMfaConfigRequest.isa = isa;
})(GetUserPoolMfaConfigRequest = exports.GetUserPoolMfaConfigRequest || (exports.GetUserPoolMfaConfigRequest = {}));
var GetUserPoolMfaConfigResponse;
(function (GetUserPoolMfaConfigResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetUserPoolMfaConfigResponse");
    }
    GetUserPoolMfaConfigResponse.isa = isa;
})(GetUserPoolMfaConfigResponse = exports.GetUserPoolMfaConfigResponse || (exports.GetUserPoolMfaConfigResponse = {}));
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
var GlobalSignOutRequest;
(function (GlobalSignOutRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GlobalSignOutRequest");
    }
    GlobalSignOutRequest.isa = isa;
})(GlobalSignOutRequest = exports.GlobalSignOutRequest || (exports.GlobalSignOutRequest = {}));
var GlobalSignOutResponse;
(function (GlobalSignOutResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GlobalSignOutResponse");
    }
    GlobalSignOutResponse.isa = isa;
})(GlobalSignOutResponse = exports.GlobalSignOutResponse || (exports.GlobalSignOutResponse = {}));
var GroupExistsException;
(function (GroupExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "GroupExistsException");
    }
    GroupExistsException.isa = isa;
})(GroupExistsException = exports.GroupExistsException || (exports.GroupExistsException = {}));
var GroupType;
(function (GroupType) {
    function isa(o) {
        return smithy_client_1.isa(o, "GroupType");
    }
    GroupType.isa = isa;
})(GroupType = exports.GroupType || (exports.GroupType = {}));
var HttpHeader;
(function (HttpHeader) {
    function isa(o) {
        return smithy_client_1.isa(o, "HttpHeader");
    }
    HttpHeader.isa = isa;
})(HttpHeader = exports.HttpHeader || (exports.HttpHeader = {}));
var IdentityProviderType;
(function (IdentityProviderType) {
    function isa(o) {
        return smithy_client_1.isa(o, "IdentityProviderType");
    }
    IdentityProviderType.isa = isa;
})(IdentityProviderType = exports.IdentityProviderType || (exports.IdentityProviderType = {}));
var IdentityProviderTypeType;
(function (IdentityProviderTypeType) {
    IdentityProviderTypeType["Facebook"] = "Facebook";
    IdentityProviderTypeType["Google"] = "Google";
    IdentityProviderTypeType["LoginWithAmazon"] = "LoginWithAmazon";
    IdentityProviderTypeType["OIDC"] = "OIDC";
    IdentityProviderTypeType["SAML"] = "SAML";
    IdentityProviderTypeType["SignInWithApple"] = "SignInWithApple";
})(IdentityProviderTypeType = exports.IdentityProviderTypeType || (exports.IdentityProviderTypeType = {}));
var InitiateAuthRequest;
(function (InitiateAuthRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "InitiateAuthRequest");
    }
    InitiateAuthRequest.isa = isa;
})(InitiateAuthRequest = exports.InitiateAuthRequest || (exports.InitiateAuthRequest = {}));
var InitiateAuthResponse;
(function (InitiateAuthResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "InitiateAuthResponse");
    }
    InitiateAuthResponse.isa = isa;
})(InitiateAuthResponse = exports.InitiateAuthResponse || (exports.InitiateAuthResponse = {}));
var InternalErrorException;
(function (InternalErrorException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalErrorException");
    }
    InternalErrorException.isa = isa;
})(InternalErrorException = exports.InternalErrorException || (exports.InternalErrorException = {}));
var InvalidEmailRoleAccessPolicyException;
(function (InvalidEmailRoleAccessPolicyException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidEmailRoleAccessPolicyException");
    }
    InvalidEmailRoleAccessPolicyException.isa = isa;
})(InvalidEmailRoleAccessPolicyException = exports.InvalidEmailRoleAccessPolicyException || (exports.InvalidEmailRoleAccessPolicyException = {}));
var InvalidLambdaResponseException;
(function (InvalidLambdaResponseException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidLambdaResponseException");
    }
    InvalidLambdaResponseException.isa = isa;
})(InvalidLambdaResponseException = exports.InvalidLambdaResponseException || (exports.InvalidLambdaResponseException = {}));
var InvalidOAuthFlowException;
(function (InvalidOAuthFlowException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidOAuthFlowException");
    }
    InvalidOAuthFlowException.isa = isa;
})(InvalidOAuthFlowException = exports.InvalidOAuthFlowException || (exports.InvalidOAuthFlowException = {}));
var InvalidParameterException;
(function (InvalidParameterException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidParameterException");
    }
    InvalidParameterException.isa = isa;
})(InvalidParameterException = exports.InvalidParameterException || (exports.InvalidParameterException = {}));
var InvalidPasswordException;
(function (InvalidPasswordException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidPasswordException");
    }
    InvalidPasswordException.isa = isa;
})(InvalidPasswordException = exports.InvalidPasswordException || (exports.InvalidPasswordException = {}));
var InvalidSmsRoleAccessPolicyException;
(function (InvalidSmsRoleAccessPolicyException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidSmsRoleAccessPolicyException");
    }
    InvalidSmsRoleAccessPolicyException.isa = isa;
})(InvalidSmsRoleAccessPolicyException = exports.InvalidSmsRoleAccessPolicyException || (exports.InvalidSmsRoleAccessPolicyException = {}));
var InvalidSmsRoleTrustRelationshipException;
(function (InvalidSmsRoleTrustRelationshipException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidSmsRoleTrustRelationshipException");
    }
    InvalidSmsRoleTrustRelationshipException.isa = isa;
})(InvalidSmsRoleTrustRelationshipException = exports.InvalidSmsRoleTrustRelationshipException || (exports.InvalidSmsRoleTrustRelationshipException = {}));
var InvalidUserPoolConfigurationException;
(function (InvalidUserPoolConfigurationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidUserPoolConfigurationException");
    }
    InvalidUserPoolConfigurationException.isa = isa;
})(InvalidUserPoolConfigurationException = exports.InvalidUserPoolConfigurationException || (exports.InvalidUserPoolConfigurationException = {}));
var LambdaConfigType;
(function (LambdaConfigType) {
    function isa(o) {
        return smithy_client_1.isa(o, "LambdaConfigType");
    }
    LambdaConfigType.isa = isa;
})(LambdaConfigType = exports.LambdaConfigType || (exports.LambdaConfigType = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ListDevicesRequest;
(function (ListDevicesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDevicesRequest");
    }
    ListDevicesRequest.isa = isa;
})(ListDevicesRequest = exports.ListDevicesRequest || (exports.ListDevicesRequest = {}));
var ListDevicesResponse;
(function (ListDevicesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDevicesResponse");
    }
    ListDevicesResponse.isa = isa;
})(ListDevicesResponse = exports.ListDevicesResponse || (exports.ListDevicesResponse = {}));
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
var ListIdentityProvidersRequest;
(function (ListIdentityProvidersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListIdentityProvidersRequest");
    }
    ListIdentityProvidersRequest.isa = isa;
})(ListIdentityProvidersRequest = exports.ListIdentityProvidersRequest || (exports.ListIdentityProvidersRequest = {}));
var ListIdentityProvidersResponse;
(function (ListIdentityProvidersResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListIdentityProvidersResponse");
    }
    ListIdentityProvidersResponse.isa = isa;
})(ListIdentityProvidersResponse = exports.ListIdentityProvidersResponse || (exports.ListIdentityProvidersResponse = {}));
var ListResourceServersRequest;
(function (ListResourceServersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListResourceServersRequest");
    }
    ListResourceServersRequest.isa = isa;
})(ListResourceServersRequest = exports.ListResourceServersRequest || (exports.ListResourceServersRequest = {}));
var ListResourceServersResponse;
(function (ListResourceServersResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListResourceServersResponse");
    }
    ListResourceServersResponse.isa = isa;
})(ListResourceServersResponse = exports.ListResourceServersResponse || (exports.ListResourceServersResponse = {}));
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
var ListUserImportJobsRequest;
(function (ListUserImportJobsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListUserImportJobsRequest");
    }
    ListUserImportJobsRequest.isa = isa;
})(ListUserImportJobsRequest = exports.ListUserImportJobsRequest || (exports.ListUserImportJobsRequest = {}));
var ListUserImportJobsResponse;
(function (ListUserImportJobsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListUserImportJobsResponse");
    }
    ListUserImportJobsResponse.isa = isa;
})(ListUserImportJobsResponse = exports.ListUserImportJobsResponse || (exports.ListUserImportJobsResponse = {}));
var ListUserPoolClientsRequest;
(function (ListUserPoolClientsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListUserPoolClientsRequest");
    }
    ListUserPoolClientsRequest.isa = isa;
})(ListUserPoolClientsRequest = exports.ListUserPoolClientsRequest || (exports.ListUserPoolClientsRequest = {}));
var ListUserPoolClientsResponse;
(function (ListUserPoolClientsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListUserPoolClientsResponse");
    }
    ListUserPoolClientsResponse.isa = isa;
})(ListUserPoolClientsResponse = exports.ListUserPoolClientsResponse || (exports.ListUserPoolClientsResponse = {}));
var ListUserPoolsRequest;
(function (ListUserPoolsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListUserPoolsRequest");
    }
    ListUserPoolsRequest.isa = isa;
})(ListUserPoolsRequest = exports.ListUserPoolsRequest || (exports.ListUserPoolsRequest = {}));
var ListUserPoolsResponse;
(function (ListUserPoolsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListUserPoolsResponse");
    }
    ListUserPoolsResponse.isa = isa;
})(ListUserPoolsResponse = exports.ListUserPoolsResponse || (exports.ListUserPoolsResponse = {}));
var ListUsersInGroupRequest;
(function (ListUsersInGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListUsersInGroupRequest");
    }
    ListUsersInGroupRequest.isa = isa;
})(ListUsersInGroupRequest = exports.ListUsersInGroupRequest || (exports.ListUsersInGroupRequest = {}));
var ListUsersInGroupResponse;
(function (ListUsersInGroupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListUsersInGroupResponse");
    }
    ListUsersInGroupResponse.isa = isa;
})(ListUsersInGroupResponse = exports.ListUsersInGroupResponse || (exports.ListUsersInGroupResponse = {}));
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
var MFAMethodNotFoundException;
(function (MFAMethodNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MFAMethodNotFoundException");
    }
    MFAMethodNotFoundException.isa = isa;
})(MFAMethodNotFoundException = exports.MFAMethodNotFoundException || (exports.MFAMethodNotFoundException = {}));
var MFAOptionType;
(function (MFAOptionType) {
    function isa(o) {
        return smithy_client_1.isa(o, "MFAOptionType");
    }
    MFAOptionType.isa = isa;
})(MFAOptionType = exports.MFAOptionType || (exports.MFAOptionType = {}));
var MessageActionType;
(function (MessageActionType) {
    MessageActionType["RESEND"] = "RESEND";
    MessageActionType["SUPPRESS"] = "SUPPRESS";
})(MessageActionType = exports.MessageActionType || (exports.MessageActionType = {}));
var MessageTemplateType;
(function (MessageTemplateType) {
    function isa(o) {
        return smithy_client_1.isa(o, "MessageTemplateType");
    }
    MessageTemplateType.isa = isa;
})(MessageTemplateType = exports.MessageTemplateType || (exports.MessageTemplateType = {}));
var NewDeviceMetadataType;
(function (NewDeviceMetadataType) {
    function isa(o) {
        return smithy_client_1.isa(o, "NewDeviceMetadataType");
    }
    NewDeviceMetadataType.isa = isa;
})(NewDeviceMetadataType = exports.NewDeviceMetadataType || (exports.NewDeviceMetadataType = {}));
var NotAuthorizedException;
(function (NotAuthorizedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NotAuthorizedException");
    }
    NotAuthorizedException.isa = isa;
})(NotAuthorizedException = exports.NotAuthorizedException || (exports.NotAuthorizedException = {}));
var NotifyConfigurationType;
(function (NotifyConfigurationType) {
    function isa(o) {
        return smithy_client_1.isa(o, "NotifyConfigurationType");
    }
    NotifyConfigurationType.isa = isa;
})(NotifyConfigurationType = exports.NotifyConfigurationType || (exports.NotifyConfigurationType = {}));
var NotifyEmailType;
(function (NotifyEmailType) {
    function isa(o) {
        return smithy_client_1.isa(o, "NotifyEmailType");
    }
    NotifyEmailType.isa = isa;
})(NotifyEmailType = exports.NotifyEmailType || (exports.NotifyEmailType = {}));
var NumberAttributeConstraintsType;
(function (NumberAttributeConstraintsType) {
    function isa(o) {
        return smithy_client_1.isa(o, "NumberAttributeConstraintsType");
    }
    NumberAttributeConstraintsType.isa = isa;
})(NumberAttributeConstraintsType = exports.NumberAttributeConstraintsType || (exports.NumberAttributeConstraintsType = {}));
var OAuthFlowType;
(function (OAuthFlowType) {
    OAuthFlowType["client_credentials"] = "client_credentials";
    OAuthFlowType["code"] = "code";
    OAuthFlowType["implicit"] = "implicit";
})(OAuthFlowType = exports.OAuthFlowType || (exports.OAuthFlowType = {}));
var PasswordPolicyType;
(function (PasswordPolicyType) {
    function isa(o) {
        return smithy_client_1.isa(o, "PasswordPolicyType");
    }
    PasswordPolicyType.isa = isa;
})(PasswordPolicyType = exports.PasswordPolicyType || (exports.PasswordPolicyType = {}));
var PasswordResetRequiredException;
(function (PasswordResetRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PasswordResetRequiredException");
    }
    PasswordResetRequiredException.isa = isa;
})(PasswordResetRequiredException = exports.PasswordResetRequiredException || (exports.PasswordResetRequiredException = {}));
var PreconditionNotMetException;
(function (PreconditionNotMetException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PreconditionNotMetException");
    }
    PreconditionNotMetException.isa = isa;
})(PreconditionNotMetException = exports.PreconditionNotMetException || (exports.PreconditionNotMetException = {}));
var PreventUserExistenceErrorTypes;
(function (PreventUserExistenceErrorTypes) {
    PreventUserExistenceErrorTypes["ENABLED"] = "ENABLED";
    PreventUserExistenceErrorTypes["LEGACY"] = "LEGACY";
})(PreventUserExistenceErrorTypes = exports.PreventUserExistenceErrorTypes || (exports.PreventUserExistenceErrorTypes = {}));
var ProviderDescription;
(function (ProviderDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProviderDescription");
    }
    ProviderDescription.isa = isa;
})(ProviderDescription = exports.ProviderDescription || (exports.ProviderDescription = {}));
var ProviderUserIdentifierType;
(function (ProviderUserIdentifierType) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProviderUserIdentifierType");
    }
    ProviderUserIdentifierType.isa = isa;
})(ProviderUserIdentifierType = exports.ProviderUserIdentifierType || (exports.ProviderUserIdentifierType = {}));
var RecoveryOptionNameType;
(function (RecoveryOptionNameType) {
    RecoveryOptionNameType["ADMIN_ONLY"] = "admin_only";
    RecoveryOptionNameType["VERIFIED_EMAIL"] = "verified_email";
    RecoveryOptionNameType["VERIFIED_PHONE_NUMBER"] = "verified_phone_number";
})(RecoveryOptionNameType = exports.RecoveryOptionNameType || (exports.RecoveryOptionNameType = {}));
var RecoveryOptionType;
(function (RecoveryOptionType) {
    function isa(o) {
        return smithy_client_1.isa(o, "RecoveryOptionType");
    }
    RecoveryOptionType.isa = isa;
})(RecoveryOptionType = exports.RecoveryOptionType || (exports.RecoveryOptionType = {}));
var ResendConfirmationCodeRequest;
(function (ResendConfirmationCodeRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResendConfirmationCodeRequest");
    }
    ResendConfirmationCodeRequest.isa = isa;
})(ResendConfirmationCodeRequest = exports.ResendConfirmationCodeRequest || (exports.ResendConfirmationCodeRequest = {}));
var ResendConfirmationCodeResponse;
(function (ResendConfirmationCodeResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResendConfirmationCodeResponse");
    }
    ResendConfirmationCodeResponse.isa = isa;
})(ResendConfirmationCodeResponse = exports.ResendConfirmationCodeResponse || (exports.ResendConfirmationCodeResponse = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNotFoundException");
    }
    ResourceNotFoundException.isa = isa;
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ResourceServerScopeType;
(function (ResourceServerScopeType) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceServerScopeType");
    }
    ResourceServerScopeType.isa = isa;
})(ResourceServerScopeType = exports.ResourceServerScopeType || (exports.ResourceServerScopeType = {}));
var ResourceServerType;
(function (ResourceServerType) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceServerType");
    }
    ResourceServerType.isa = isa;
})(ResourceServerType = exports.ResourceServerType || (exports.ResourceServerType = {}));
var RespondToAuthChallengeRequest;
(function (RespondToAuthChallengeRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RespondToAuthChallengeRequest");
    }
    RespondToAuthChallengeRequest.isa = isa;
})(RespondToAuthChallengeRequest = exports.RespondToAuthChallengeRequest || (exports.RespondToAuthChallengeRequest = {}));
var RespondToAuthChallengeResponse;
(function (RespondToAuthChallengeResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "RespondToAuthChallengeResponse");
    }
    RespondToAuthChallengeResponse.isa = isa;
})(RespondToAuthChallengeResponse = exports.RespondToAuthChallengeResponse || (exports.RespondToAuthChallengeResponse = {}));
var RiskConfigurationType;
(function (RiskConfigurationType) {
    function isa(o) {
        return smithy_client_1.isa(o, "RiskConfigurationType");
    }
    RiskConfigurationType.isa = isa;
})(RiskConfigurationType = exports.RiskConfigurationType || (exports.RiskConfigurationType = {}));
var RiskDecisionType;
(function (RiskDecisionType) {
    RiskDecisionType["AccountTakeover"] = "AccountTakeover";
    RiskDecisionType["Block"] = "Block";
    RiskDecisionType["NoRisk"] = "NoRisk";
})(RiskDecisionType = exports.RiskDecisionType || (exports.RiskDecisionType = {}));
var RiskExceptionConfigurationType;
(function (RiskExceptionConfigurationType) {
    function isa(o) {
        return smithy_client_1.isa(o, "RiskExceptionConfigurationType");
    }
    RiskExceptionConfigurationType.isa = isa;
})(RiskExceptionConfigurationType = exports.RiskExceptionConfigurationType || (exports.RiskExceptionConfigurationType = {}));
var RiskLevelType;
(function (RiskLevelType) {
    RiskLevelType["High"] = "High";
    RiskLevelType["Low"] = "Low";
    RiskLevelType["Medium"] = "Medium";
})(RiskLevelType = exports.RiskLevelType || (exports.RiskLevelType = {}));
var SMSMfaSettingsType;
(function (SMSMfaSettingsType) {
    function isa(o) {
        return smithy_client_1.isa(o, "SMSMfaSettingsType");
    }
    SMSMfaSettingsType.isa = isa;
})(SMSMfaSettingsType = exports.SMSMfaSettingsType || (exports.SMSMfaSettingsType = {}));
var SchemaAttributeType;
(function (SchemaAttributeType) {
    function isa(o) {
        return smithy_client_1.isa(o, "SchemaAttributeType");
    }
    SchemaAttributeType.isa = isa;
})(SchemaAttributeType = exports.SchemaAttributeType || (exports.SchemaAttributeType = {}));
var ScopeDoesNotExistException;
(function (ScopeDoesNotExistException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ScopeDoesNotExistException");
    }
    ScopeDoesNotExistException.isa = isa;
})(ScopeDoesNotExistException = exports.ScopeDoesNotExistException || (exports.ScopeDoesNotExistException = {}));
var SetRiskConfigurationRequest;
(function (SetRiskConfigurationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetRiskConfigurationRequest");
    }
    SetRiskConfigurationRequest.isa = isa;
})(SetRiskConfigurationRequest = exports.SetRiskConfigurationRequest || (exports.SetRiskConfigurationRequest = {}));
var SetRiskConfigurationResponse;
(function (SetRiskConfigurationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetRiskConfigurationResponse");
    }
    SetRiskConfigurationResponse.isa = isa;
})(SetRiskConfigurationResponse = exports.SetRiskConfigurationResponse || (exports.SetRiskConfigurationResponse = {}));
var SetUICustomizationRequest;
(function (SetUICustomizationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetUICustomizationRequest");
    }
    SetUICustomizationRequest.isa = isa;
})(SetUICustomizationRequest = exports.SetUICustomizationRequest || (exports.SetUICustomizationRequest = {}));
var SetUICustomizationResponse;
(function (SetUICustomizationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetUICustomizationResponse");
    }
    SetUICustomizationResponse.isa = isa;
})(SetUICustomizationResponse = exports.SetUICustomizationResponse || (exports.SetUICustomizationResponse = {}));
var SetUserMFAPreferenceRequest;
(function (SetUserMFAPreferenceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetUserMFAPreferenceRequest");
    }
    SetUserMFAPreferenceRequest.isa = isa;
})(SetUserMFAPreferenceRequest = exports.SetUserMFAPreferenceRequest || (exports.SetUserMFAPreferenceRequest = {}));
var SetUserMFAPreferenceResponse;
(function (SetUserMFAPreferenceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetUserMFAPreferenceResponse");
    }
    SetUserMFAPreferenceResponse.isa = isa;
})(SetUserMFAPreferenceResponse = exports.SetUserMFAPreferenceResponse || (exports.SetUserMFAPreferenceResponse = {}));
var SetUserPoolMfaConfigRequest;
(function (SetUserPoolMfaConfigRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetUserPoolMfaConfigRequest");
    }
    SetUserPoolMfaConfigRequest.isa = isa;
})(SetUserPoolMfaConfigRequest = exports.SetUserPoolMfaConfigRequest || (exports.SetUserPoolMfaConfigRequest = {}));
var SetUserPoolMfaConfigResponse;
(function (SetUserPoolMfaConfigResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetUserPoolMfaConfigResponse");
    }
    SetUserPoolMfaConfigResponse.isa = isa;
})(SetUserPoolMfaConfigResponse = exports.SetUserPoolMfaConfigResponse || (exports.SetUserPoolMfaConfigResponse = {}));
var SetUserSettingsRequest;
(function (SetUserSettingsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetUserSettingsRequest");
    }
    SetUserSettingsRequest.isa = isa;
})(SetUserSettingsRequest = exports.SetUserSettingsRequest || (exports.SetUserSettingsRequest = {}));
var SetUserSettingsResponse;
(function (SetUserSettingsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetUserSettingsResponse");
    }
    SetUserSettingsResponse.isa = isa;
})(SetUserSettingsResponse = exports.SetUserSettingsResponse || (exports.SetUserSettingsResponse = {}));
var SignUpRequest;
(function (SignUpRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SignUpRequest");
    }
    SignUpRequest.isa = isa;
})(SignUpRequest = exports.SignUpRequest || (exports.SignUpRequest = {}));
var SignUpResponse;
(function (SignUpResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SignUpResponse");
    }
    SignUpResponse.isa = isa;
})(SignUpResponse = exports.SignUpResponse || (exports.SignUpResponse = {}));
var SmsConfigurationType;
(function (SmsConfigurationType) {
    function isa(o) {
        return smithy_client_1.isa(o, "SmsConfigurationType");
    }
    SmsConfigurationType.isa = isa;
})(SmsConfigurationType = exports.SmsConfigurationType || (exports.SmsConfigurationType = {}));
var SmsMfaConfigType;
(function (SmsMfaConfigType) {
    function isa(o) {
        return smithy_client_1.isa(o, "SmsMfaConfigType");
    }
    SmsMfaConfigType.isa = isa;
})(SmsMfaConfigType = exports.SmsMfaConfigType || (exports.SmsMfaConfigType = {}));
var SoftwareTokenMFANotFoundException;
(function (SoftwareTokenMFANotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "SoftwareTokenMFANotFoundException");
    }
    SoftwareTokenMFANotFoundException.isa = isa;
})(SoftwareTokenMFANotFoundException = exports.SoftwareTokenMFANotFoundException || (exports.SoftwareTokenMFANotFoundException = {}));
var SoftwareTokenMfaConfigType;
(function (SoftwareTokenMfaConfigType) {
    function isa(o) {
        return smithy_client_1.isa(o, "SoftwareTokenMfaConfigType");
    }
    SoftwareTokenMfaConfigType.isa = isa;
})(SoftwareTokenMfaConfigType = exports.SoftwareTokenMfaConfigType || (exports.SoftwareTokenMfaConfigType = {}));
var SoftwareTokenMfaSettingsType;
(function (SoftwareTokenMfaSettingsType) {
    function isa(o) {
        return smithy_client_1.isa(o, "SoftwareTokenMfaSettingsType");
    }
    SoftwareTokenMfaSettingsType.isa = isa;
})(SoftwareTokenMfaSettingsType = exports.SoftwareTokenMfaSettingsType || (exports.SoftwareTokenMfaSettingsType = {}));
var StartUserImportJobRequest;
(function (StartUserImportJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartUserImportJobRequest");
    }
    StartUserImportJobRequest.isa = isa;
})(StartUserImportJobRequest = exports.StartUserImportJobRequest || (exports.StartUserImportJobRequest = {}));
var StartUserImportJobResponse;
(function (StartUserImportJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartUserImportJobResponse");
    }
    StartUserImportJobResponse.isa = isa;
})(StartUserImportJobResponse = exports.StartUserImportJobResponse || (exports.StartUserImportJobResponse = {}));
var StatusType;
(function (StatusType) {
    StatusType["Disabled"] = "Disabled";
    StatusType["Enabled"] = "Enabled";
})(StatusType = exports.StatusType || (exports.StatusType = {}));
var StopUserImportJobRequest;
(function (StopUserImportJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopUserImportJobRequest");
    }
    StopUserImportJobRequest.isa = isa;
})(StopUserImportJobRequest = exports.StopUserImportJobRequest || (exports.StopUserImportJobRequest = {}));
var StopUserImportJobResponse;
(function (StopUserImportJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopUserImportJobResponse");
    }
    StopUserImportJobResponse.isa = isa;
})(StopUserImportJobResponse = exports.StopUserImportJobResponse || (exports.StopUserImportJobResponse = {}));
var StringAttributeConstraintsType;
(function (StringAttributeConstraintsType) {
    function isa(o) {
        return smithy_client_1.isa(o, "StringAttributeConstraintsType");
    }
    StringAttributeConstraintsType.isa = isa;
})(StringAttributeConstraintsType = exports.StringAttributeConstraintsType || (exports.StringAttributeConstraintsType = {}));
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
var TooManyFailedAttemptsException;
(function (TooManyFailedAttemptsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TooManyFailedAttemptsException");
    }
    TooManyFailedAttemptsException.isa = isa;
})(TooManyFailedAttemptsException = exports.TooManyFailedAttemptsException || (exports.TooManyFailedAttemptsException = {}));
var TooManyRequestsException;
(function (TooManyRequestsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TooManyRequestsException");
    }
    TooManyRequestsException.isa = isa;
})(TooManyRequestsException = exports.TooManyRequestsException || (exports.TooManyRequestsException = {}));
var UICustomizationType;
(function (UICustomizationType) {
    function isa(o) {
        return smithy_client_1.isa(o, "UICustomizationType");
    }
    UICustomizationType.isa = isa;
})(UICustomizationType = exports.UICustomizationType || (exports.UICustomizationType = {}));
var UnexpectedLambdaException;
(function (UnexpectedLambdaException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnexpectedLambdaException");
    }
    UnexpectedLambdaException.isa = isa;
})(UnexpectedLambdaException = exports.UnexpectedLambdaException || (exports.UnexpectedLambdaException = {}));
var UnsupportedIdentityProviderException;
(function (UnsupportedIdentityProviderException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnsupportedIdentityProviderException");
    }
    UnsupportedIdentityProviderException.isa = isa;
})(UnsupportedIdentityProviderException = exports.UnsupportedIdentityProviderException || (exports.UnsupportedIdentityProviderException = {}));
var UnsupportedUserStateException;
(function (UnsupportedUserStateException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnsupportedUserStateException");
    }
    UnsupportedUserStateException.isa = isa;
})(UnsupportedUserStateException = exports.UnsupportedUserStateException || (exports.UnsupportedUserStateException = {}));
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
var UpdateAuthEventFeedbackRequest;
(function (UpdateAuthEventFeedbackRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateAuthEventFeedbackRequest");
    }
    UpdateAuthEventFeedbackRequest.isa = isa;
})(UpdateAuthEventFeedbackRequest = exports.UpdateAuthEventFeedbackRequest || (exports.UpdateAuthEventFeedbackRequest = {}));
var UpdateAuthEventFeedbackResponse;
(function (UpdateAuthEventFeedbackResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateAuthEventFeedbackResponse");
    }
    UpdateAuthEventFeedbackResponse.isa = isa;
})(UpdateAuthEventFeedbackResponse = exports.UpdateAuthEventFeedbackResponse || (exports.UpdateAuthEventFeedbackResponse = {}));
var UpdateDeviceStatusRequest;
(function (UpdateDeviceStatusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDeviceStatusRequest");
    }
    UpdateDeviceStatusRequest.isa = isa;
})(UpdateDeviceStatusRequest = exports.UpdateDeviceStatusRequest || (exports.UpdateDeviceStatusRequest = {}));
var UpdateDeviceStatusResponse;
(function (UpdateDeviceStatusResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDeviceStatusResponse");
    }
    UpdateDeviceStatusResponse.isa = isa;
})(UpdateDeviceStatusResponse = exports.UpdateDeviceStatusResponse || (exports.UpdateDeviceStatusResponse = {}));
var UpdateGroupRequest;
(function (UpdateGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateGroupRequest");
    }
    UpdateGroupRequest.isa = isa;
})(UpdateGroupRequest = exports.UpdateGroupRequest || (exports.UpdateGroupRequest = {}));
var UpdateGroupResponse;
(function (UpdateGroupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateGroupResponse");
    }
    UpdateGroupResponse.isa = isa;
})(UpdateGroupResponse = exports.UpdateGroupResponse || (exports.UpdateGroupResponse = {}));
var UpdateIdentityProviderRequest;
(function (UpdateIdentityProviderRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateIdentityProviderRequest");
    }
    UpdateIdentityProviderRequest.isa = isa;
})(UpdateIdentityProviderRequest = exports.UpdateIdentityProviderRequest || (exports.UpdateIdentityProviderRequest = {}));
var UpdateIdentityProviderResponse;
(function (UpdateIdentityProviderResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateIdentityProviderResponse");
    }
    UpdateIdentityProviderResponse.isa = isa;
})(UpdateIdentityProviderResponse = exports.UpdateIdentityProviderResponse || (exports.UpdateIdentityProviderResponse = {}));
var UpdateResourceServerRequest;
(function (UpdateResourceServerRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateResourceServerRequest");
    }
    UpdateResourceServerRequest.isa = isa;
})(UpdateResourceServerRequest = exports.UpdateResourceServerRequest || (exports.UpdateResourceServerRequest = {}));
var UpdateResourceServerResponse;
(function (UpdateResourceServerResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateResourceServerResponse");
    }
    UpdateResourceServerResponse.isa = isa;
})(UpdateResourceServerResponse = exports.UpdateResourceServerResponse || (exports.UpdateResourceServerResponse = {}));
var UpdateUserAttributesRequest;
(function (UpdateUserAttributesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateUserAttributesRequest");
    }
    UpdateUserAttributesRequest.isa = isa;
})(UpdateUserAttributesRequest = exports.UpdateUserAttributesRequest || (exports.UpdateUserAttributesRequest = {}));
var UpdateUserAttributesResponse;
(function (UpdateUserAttributesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateUserAttributesResponse");
    }
    UpdateUserAttributesResponse.isa = isa;
})(UpdateUserAttributesResponse = exports.UpdateUserAttributesResponse || (exports.UpdateUserAttributesResponse = {}));
var UpdateUserPoolClientRequest;
(function (UpdateUserPoolClientRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateUserPoolClientRequest");
    }
    UpdateUserPoolClientRequest.isa = isa;
})(UpdateUserPoolClientRequest = exports.UpdateUserPoolClientRequest || (exports.UpdateUserPoolClientRequest = {}));
var UpdateUserPoolClientResponse;
(function (UpdateUserPoolClientResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateUserPoolClientResponse");
    }
    UpdateUserPoolClientResponse.isa = isa;
})(UpdateUserPoolClientResponse = exports.UpdateUserPoolClientResponse || (exports.UpdateUserPoolClientResponse = {}));
var UpdateUserPoolDomainRequest;
(function (UpdateUserPoolDomainRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateUserPoolDomainRequest");
    }
    UpdateUserPoolDomainRequest.isa = isa;
})(UpdateUserPoolDomainRequest = exports.UpdateUserPoolDomainRequest || (exports.UpdateUserPoolDomainRequest = {}));
var UpdateUserPoolDomainResponse;
(function (UpdateUserPoolDomainResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateUserPoolDomainResponse");
    }
    UpdateUserPoolDomainResponse.isa = isa;
})(UpdateUserPoolDomainResponse = exports.UpdateUserPoolDomainResponse || (exports.UpdateUserPoolDomainResponse = {}));
var UpdateUserPoolRequest;
(function (UpdateUserPoolRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateUserPoolRequest");
    }
    UpdateUserPoolRequest.isa = isa;
})(UpdateUserPoolRequest = exports.UpdateUserPoolRequest || (exports.UpdateUserPoolRequest = {}));
var UpdateUserPoolResponse;
(function (UpdateUserPoolResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateUserPoolResponse");
    }
    UpdateUserPoolResponse.isa = isa;
})(UpdateUserPoolResponse = exports.UpdateUserPoolResponse || (exports.UpdateUserPoolResponse = {}));
var UserContextDataType;
(function (UserContextDataType) {
    function isa(o) {
        return smithy_client_1.isa(o, "UserContextDataType");
    }
    UserContextDataType.isa = isa;
})(UserContextDataType = exports.UserContextDataType || (exports.UserContextDataType = {}));
var UserImportInProgressException;
(function (UserImportInProgressException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UserImportInProgressException");
    }
    UserImportInProgressException.isa = isa;
})(UserImportInProgressException = exports.UserImportInProgressException || (exports.UserImportInProgressException = {}));
var UserImportJobStatusType;
(function (UserImportJobStatusType) {
    UserImportJobStatusType["Created"] = "Created";
    UserImportJobStatusType["Expired"] = "Expired";
    UserImportJobStatusType["Failed"] = "Failed";
    UserImportJobStatusType["InProgress"] = "InProgress";
    UserImportJobStatusType["Pending"] = "Pending";
    UserImportJobStatusType["Stopped"] = "Stopped";
    UserImportJobStatusType["Stopping"] = "Stopping";
    UserImportJobStatusType["Succeeded"] = "Succeeded";
})(UserImportJobStatusType = exports.UserImportJobStatusType || (exports.UserImportJobStatusType = {}));
var UserImportJobType;
(function (UserImportJobType) {
    function isa(o) {
        return smithy_client_1.isa(o, "UserImportJobType");
    }
    UserImportJobType.isa = isa;
})(UserImportJobType = exports.UserImportJobType || (exports.UserImportJobType = {}));
var UserLambdaValidationException;
(function (UserLambdaValidationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UserLambdaValidationException");
    }
    UserLambdaValidationException.isa = isa;
})(UserLambdaValidationException = exports.UserLambdaValidationException || (exports.UserLambdaValidationException = {}));
var UserNotConfirmedException;
(function (UserNotConfirmedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UserNotConfirmedException");
    }
    UserNotConfirmedException.isa = isa;
})(UserNotConfirmedException = exports.UserNotConfirmedException || (exports.UserNotConfirmedException = {}));
var UserNotFoundException;
(function (UserNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UserNotFoundException");
    }
    UserNotFoundException.isa = isa;
})(UserNotFoundException = exports.UserNotFoundException || (exports.UserNotFoundException = {}));
var UserPoolAddOnNotEnabledException;
(function (UserPoolAddOnNotEnabledException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UserPoolAddOnNotEnabledException");
    }
    UserPoolAddOnNotEnabledException.isa = isa;
})(UserPoolAddOnNotEnabledException = exports.UserPoolAddOnNotEnabledException || (exports.UserPoolAddOnNotEnabledException = {}));
var UserPoolAddOnsType;
(function (UserPoolAddOnsType) {
    function isa(o) {
        return smithy_client_1.isa(o, "UserPoolAddOnsType");
    }
    UserPoolAddOnsType.isa = isa;
})(UserPoolAddOnsType = exports.UserPoolAddOnsType || (exports.UserPoolAddOnsType = {}));
var UserPoolClientDescription;
(function (UserPoolClientDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "UserPoolClientDescription");
    }
    UserPoolClientDescription.isa = isa;
})(UserPoolClientDescription = exports.UserPoolClientDescription || (exports.UserPoolClientDescription = {}));
var UserPoolClientType;
(function (UserPoolClientType) {
    function isa(o) {
        return smithy_client_1.isa(o, "UserPoolClientType");
    }
    UserPoolClientType.isa = isa;
})(UserPoolClientType = exports.UserPoolClientType || (exports.UserPoolClientType = {}));
var UserPoolDescriptionType;
(function (UserPoolDescriptionType) {
    function isa(o) {
        return smithy_client_1.isa(o, "UserPoolDescriptionType");
    }
    UserPoolDescriptionType.isa = isa;
})(UserPoolDescriptionType = exports.UserPoolDescriptionType || (exports.UserPoolDescriptionType = {}));
var UserPoolMfaType;
(function (UserPoolMfaType) {
    UserPoolMfaType["OFF"] = "OFF";
    UserPoolMfaType["ON"] = "ON";
    UserPoolMfaType["OPTIONAL"] = "OPTIONAL";
})(UserPoolMfaType = exports.UserPoolMfaType || (exports.UserPoolMfaType = {}));
var UserPoolPolicyType;
(function (UserPoolPolicyType) {
    function isa(o) {
        return smithy_client_1.isa(o, "UserPoolPolicyType");
    }
    UserPoolPolicyType.isa = isa;
})(UserPoolPolicyType = exports.UserPoolPolicyType || (exports.UserPoolPolicyType = {}));
var UserPoolTaggingException;
(function (UserPoolTaggingException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UserPoolTaggingException");
    }
    UserPoolTaggingException.isa = isa;
})(UserPoolTaggingException = exports.UserPoolTaggingException || (exports.UserPoolTaggingException = {}));
var UserPoolType;
(function (UserPoolType) {
    function isa(o) {
        return smithy_client_1.isa(o, "UserPoolType");
    }
    UserPoolType.isa = isa;
})(UserPoolType = exports.UserPoolType || (exports.UserPoolType = {}));
var UserStatusType;
(function (UserStatusType) {
    UserStatusType["ARCHIVED"] = "ARCHIVED";
    UserStatusType["COMPROMISED"] = "COMPROMISED";
    UserStatusType["CONFIRMED"] = "CONFIRMED";
    UserStatusType["FORCE_CHANGE_PASSWORD"] = "FORCE_CHANGE_PASSWORD";
    UserStatusType["RESET_REQUIRED"] = "RESET_REQUIRED";
    UserStatusType["UNCONFIRMED"] = "UNCONFIRMED";
    UserStatusType["UNKNOWN"] = "UNKNOWN";
})(UserStatusType = exports.UserStatusType || (exports.UserStatusType = {}));
var UserType;
(function (UserType) {
    function isa(o) {
        return smithy_client_1.isa(o, "UserType");
    }
    UserType.isa = isa;
})(UserType = exports.UserType || (exports.UserType = {}));
var UsernameAttributeType;
(function (UsernameAttributeType) {
    UsernameAttributeType["EMAIL"] = "email";
    UsernameAttributeType["PHONE_NUMBER"] = "phone_number";
})(UsernameAttributeType = exports.UsernameAttributeType || (exports.UsernameAttributeType = {}));
var UsernameExistsException;
(function (UsernameExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UsernameExistsException");
    }
    UsernameExistsException.isa = isa;
})(UsernameExistsException = exports.UsernameExistsException || (exports.UsernameExistsException = {}));
var VerificationMessageTemplateType;
(function (VerificationMessageTemplateType) {
    function isa(o) {
        return smithy_client_1.isa(o, "VerificationMessageTemplateType");
    }
    VerificationMessageTemplateType.isa = isa;
})(VerificationMessageTemplateType = exports.VerificationMessageTemplateType || (exports.VerificationMessageTemplateType = {}));
var VerifiedAttributeType;
(function (VerifiedAttributeType) {
    VerifiedAttributeType["EMAIL"] = "email";
    VerifiedAttributeType["PHONE_NUMBER"] = "phone_number";
})(VerifiedAttributeType = exports.VerifiedAttributeType || (exports.VerifiedAttributeType = {}));
var VerifySoftwareTokenRequest;
(function (VerifySoftwareTokenRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "VerifySoftwareTokenRequest");
    }
    VerifySoftwareTokenRequest.isa = isa;
})(VerifySoftwareTokenRequest = exports.VerifySoftwareTokenRequest || (exports.VerifySoftwareTokenRequest = {}));
var VerifySoftwareTokenResponse;
(function (VerifySoftwareTokenResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "VerifySoftwareTokenResponse");
    }
    VerifySoftwareTokenResponse.isa = isa;
})(VerifySoftwareTokenResponse = exports.VerifySoftwareTokenResponse || (exports.VerifySoftwareTokenResponse = {}));
var VerifySoftwareTokenResponseType;
(function (VerifySoftwareTokenResponseType) {
    VerifySoftwareTokenResponseType["ERROR"] = "ERROR";
    VerifySoftwareTokenResponseType["SUCCESS"] = "SUCCESS";
})(VerifySoftwareTokenResponseType = exports.VerifySoftwareTokenResponseType || (exports.VerifySoftwareTokenResponseType = {}));
var VerifyUserAttributeRequest;
(function (VerifyUserAttributeRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "VerifyUserAttributeRequest");
    }
    VerifyUserAttributeRequest.isa = isa;
})(VerifyUserAttributeRequest = exports.VerifyUserAttributeRequest || (exports.VerifyUserAttributeRequest = {}));
var VerifyUserAttributeResponse;
(function (VerifyUserAttributeResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "VerifyUserAttributeResponse");
    }
    VerifyUserAttributeResponse.isa = isa;
})(VerifyUserAttributeResponse = exports.VerifyUserAttributeResponse || (exports.VerifyUserAttributeResponse = {}));
//# sourceMappingURL=index.js.map