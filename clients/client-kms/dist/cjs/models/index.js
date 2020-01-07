"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AlgorithmSpec;
(function (AlgorithmSpec) {
    AlgorithmSpec["RSAES_OAEP_SHA_1"] = "RSAES_OAEP_SHA_1";
    AlgorithmSpec["RSAES_OAEP_SHA_256"] = "RSAES_OAEP_SHA_256";
    AlgorithmSpec["RSAES_PKCS1_V1_5"] = "RSAES_PKCS1_V1_5";
})(AlgorithmSpec = exports.AlgorithmSpec || (exports.AlgorithmSpec = {}));
var AliasListEntry;
(function (AliasListEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "AliasListEntry");
    }
    AliasListEntry.isa = isa;
})(AliasListEntry = exports.AliasListEntry || (exports.AliasListEntry = {}));
var AlreadyExistsException;
(function (AlreadyExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AlreadyExistsException");
    }
    AlreadyExistsException.isa = isa;
})(AlreadyExistsException = exports.AlreadyExistsException || (exports.AlreadyExistsException = {}));
var CancelKeyDeletionRequest;
(function (CancelKeyDeletionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CancelKeyDeletionRequest");
    }
    CancelKeyDeletionRequest.isa = isa;
})(CancelKeyDeletionRequest = exports.CancelKeyDeletionRequest || (exports.CancelKeyDeletionRequest = {}));
var CancelKeyDeletionResponse;
(function (CancelKeyDeletionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CancelKeyDeletionResponse");
    }
    CancelKeyDeletionResponse.isa = isa;
})(CancelKeyDeletionResponse = exports.CancelKeyDeletionResponse || (exports.CancelKeyDeletionResponse = {}));
var CloudHsmClusterInUseException;
(function (CloudHsmClusterInUseException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CloudHsmClusterInUseException");
    }
    CloudHsmClusterInUseException.isa = isa;
})(CloudHsmClusterInUseException = exports.CloudHsmClusterInUseException || (exports.CloudHsmClusterInUseException = {}));
var CloudHsmClusterInvalidConfigurationException;
(function (CloudHsmClusterInvalidConfigurationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CloudHsmClusterInvalidConfigurationException");
    }
    CloudHsmClusterInvalidConfigurationException.isa = isa;
})(CloudHsmClusterInvalidConfigurationException = exports.CloudHsmClusterInvalidConfigurationException || (exports.CloudHsmClusterInvalidConfigurationException = {}));
var CloudHsmClusterNotActiveException;
(function (CloudHsmClusterNotActiveException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CloudHsmClusterNotActiveException");
    }
    CloudHsmClusterNotActiveException.isa = isa;
})(CloudHsmClusterNotActiveException = exports.CloudHsmClusterNotActiveException || (exports.CloudHsmClusterNotActiveException = {}));
var CloudHsmClusterNotFoundException;
(function (CloudHsmClusterNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CloudHsmClusterNotFoundException");
    }
    CloudHsmClusterNotFoundException.isa = isa;
})(CloudHsmClusterNotFoundException = exports.CloudHsmClusterNotFoundException || (exports.CloudHsmClusterNotFoundException = {}));
var CloudHsmClusterNotRelatedException;
(function (CloudHsmClusterNotRelatedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CloudHsmClusterNotRelatedException");
    }
    CloudHsmClusterNotRelatedException.isa = isa;
})(CloudHsmClusterNotRelatedException = exports.CloudHsmClusterNotRelatedException || (exports.CloudHsmClusterNotRelatedException = {}));
var ConnectCustomKeyStoreRequest;
(function (ConnectCustomKeyStoreRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConnectCustomKeyStoreRequest");
    }
    ConnectCustomKeyStoreRequest.isa = isa;
})(ConnectCustomKeyStoreRequest = exports.ConnectCustomKeyStoreRequest || (exports.ConnectCustomKeyStoreRequest = {}));
var ConnectCustomKeyStoreResponse;
(function (ConnectCustomKeyStoreResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConnectCustomKeyStoreResponse");
    }
    ConnectCustomKeyStoreResponse.isa = isa;
})(ConnectCustomKeyStoreResponse = exports.ConnectCustomKeyStoreResponse || (exports.ConnectCustomKeyStoreResponse = {}));
var ConnectionErrorCodeType;
(function (ConnectionErrorCodeType) {
    ConnectionErrorCodeType["CLUSTER_NOT_FOUND"] = "CLUSTER_NOT_FOUND";
    ConnectionErrorCodeType["INSUFFICIENT_CLOUDHSM_HSMS"] = "INSUFFICIENT_CLOUDHSM_HSMS";
    ConnectionErrorCodeType["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    ConnectionErrorCodeType["INVALID_CREDENTIALS"] = "INVALID_CREDENTIALS";
    ConnectionErrorCodeType["NETWORK_ERRORS"] = "NETWORK_ERRORS";
    ConnectionErrorCodeType["USER_LOCKED_OUT"] = "USER_LOCKED_OUT";
    ConnectionErrorCodeType["USER_LOGGED_IN"] = "USER_LOGGED_IN";
    ConnectionErrorCodeType["USER_NOT_FOUND"] = "USER_NOT_FOUND";
})(ConnectionErrorCodeType = exports.ConnectionErrorCodeType || (exports.ConnectionErrorCodeType = {}));
var ConnectionStateType;
(function (ConnectionStateType) {
    ConnectionStateType["CONNECTED"] = "CONNECTED";
    ConnectionStateType["CONNECTING"] = "CONNECTING";
    ConnectionStateType["DISCONNECTED"] = "DISCONNECTED";
    ConnectionStateType["DISCONNECTING"] = "DISCONNECTING";
    ConnectionStateType["FAILED"] = "FAILED";
})(ConnectionStateType = exports.ConnectionStateType || (exports.ConnectionStateType = {}));
var CreateAliasRequest;
(function (CreateAliasRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAliasRequest");
    }
    CreateAliasRequest.isa = isa;
})(CreateAliasRequest = exports.CreateAliasRequest || (exports.CreateAliasRequest = {}));
var CreateCustomKeyStoreRequest;
(function (CreateCustomKeyStoreRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateCustomKeyStoreRequest");
    }
    CreateCustomKeyStoreRequest.isa = isa;
})(CreateCustomKeyStoreRequest = exports.CreateCustomKeyStoreRequest || (exports.CreateCustomKeyStoreRequest = {}));
var CreateCustomKeyStoreResponse;
(function (CreateCustomKeyStoreResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateCustomKeyStoreResponse");
    }
    CreateCustomKeyStoreResponse.isa = isa;
})(CreateCustomKeyStoreResponse = exports.CreateCustomKeyStoreResponse || (exports.CreateCustomKeyStoreResponse = {}));
var CreateGrantRequest;
(function (CreateGrantRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateGrantRequest");
    }
    CreateGrantRequest.isa = isa;
})(CreateGrantRequest = exports.CreateGrantRequest || (exports.CreateGrantRequest = {}));
var CreateGrantResponse;
(function (CreateGrantResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateGrantResponse");
    }
    CreateGrantResponse.isa = isa;
})(CreateGrantResponse = exports.CreateGrantResponse || (exports.CreateGrantResponse = {}));
var CreateKeyRequest;
(function (CreateKeyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateKeyRequest");
    }
    CreateKeyRequest.isa = isa;
})(CreateKeyRequest = exports.CreateKeyRequest || (exports.CreateKeyRequest = {}));
var CreateKeyResponse;
(function (CreateKeyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateKeyResponse");
    }
    CreateKeyResponse.isa = isa;
})(CreateKeyResponse = exports.CreateKeyResponse || (exports.CreateKeyResponse = {}));
var CustomKeyStoreHasCMKsException;
(function (CustomKeyStoreHasCMKsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CustomKeyStoreHasCMKsException");
    }
    CustomKeyStoreHasCMKsException.isa = isa;
})(CustomKeyStoreHasCMKsException = exports.CustomKeyStoreHasCMKsException || (exports.CustomKeyStoreHasCMKsException = {}));
var CustomKeyStoreInvalidStateException;
(function (CustomKeyStoreInvalidStateException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CustomKeyStoreInvalidStateException");
    }
    CustomKeyStoreInvalidStateException.isa = isa;
})(CustomKeyStoreInvalidStateException = exports.CustomKeyStoreInvalidStateException || (exports.CustomKeyStoreInvalidStateException = {}));
var CustomKeyStoreNameInUseException;
(function (CustomKeyStoreNameInUseException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CustomKeyStoreNameInUseException");
    }
    CustomKeyStoreNameInUseException.isa = isa;
})(CustomKeyStoreNameInUseException = exports.CustomKeyStoreNameInUseException || (exports.CustomKeyStoreNameInUseException = {}));
var CustomKeyStoreNotFoundException;
(function (CustomKeyStoreNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CustomKeyStoreNotFoundException");
    }
    CustomKeyStoreNotFoundException.isa = isa;
})(CustomKeyStoreNotFoundException = exports.CustomKeyStoreNotFoundException || (exports.CustomKeyStoreNotFoundException = {}));
var CustomKeyStoresListEntry;
(function (CustomKeyStoresListEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "CustomKeyStoresListEntry");
    }
    CustomKeyStoresListEntry.isa = isa;
})(CustomKeyStoresListEntry = exports.CustomKeyStoresListEntry || (exports.CustomKeyStoresListEntry = {}));
var CustomerMasterKeySpec;
(function (CustomerMasterKeySpec) {
    CustomerMasterKeySpec["ECC_NIST_P256"] = "ECC_NIST_P256";
    CustomerMasterKeySpec["ECC_NIST_P384"] = "ECC_NIST_P384";
    CustomerMasterKeySpec["ECC_NIST_P521"] = "ECC_NIST_P521";
    CustomerMasterKeySpec["ECC_SECG_P256K1"] = "ECC_SECG_P256K1";
    CustomerMasterKeySpec["RSA_2048"] = "RSA_2048";
    CustomerMasterKeySpec["RSA_3072"] = "RSA_3072";
    CustomerMasterKeySpec["RSA_4096"] = "RSA_4096";
    CustomerMasterKeySpec["SYMMETRIC_DEFAULT"] = "SYMMETRIC_DEFAULT";
})(CustomerMasterKeySpec = exports.CustomerMasterKeySpec || (exports.CustomerMasterKeySpec = {}));
var DataKeyPairSpec;
(function (DataKeyPairSpec) {
    DataKeyPairSpec["ECC_NIST_P256"] = "ECC_NIST_P256";
    DataKeyPairSpec["ECC_NIST_P384"] = "ECC_NIST_P384";
    DataKeyPairSpec["ECC_NIST_P521"] = "ECC_NIST_P521";
    DataKeyPairSpec["ECC_SECG_P256K1"] = "ECC_SECG_P256K1";
    DataKeyPairSpec["RSA_2048"] = "RSA_2048";
    DataKeyPairSpec["RSA_3072"] = "RSA_3072";
    DataKeyPairSpec["RSA_4096"] = "RSA_4096";
})(DataKeyPairSpec = exports.DataKeyPairSpec || (exports.DataKeyPairSpec = {}));
var DataKeySpec;
(function (DataKeySpec) {
    DataKeySpec["AES_128"] = "AES_128";
    DataKeySpec["AES_256"] = "AES_256";
})(DataKeySpec = exports.DataKeySpec || (exports.DataKeySpec = {}));
var DecryptRequest;
(function (DecryptRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DecryptRequest");
    }
    DecryptRequest.isa = isa;
})(DecryptRequest = exports.DecryptRequest || (exports.DecryptRequest = {}));
var DecryptResponse;
(function (DecryptResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DecryptResponse");
    }
    DecryptResponse.isa = isa;
})(DecryptResponse = exports.DecryptResponse || (exports.DecryptResponse = {}));
var DeleteAliasRequest;
(function (DeleteAliasRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteAliasRequest");
    }
    DeleteAliasRequest.isa = isa;
})(DeleteAliasRequest = exports.DeleteAliasRequest || (exports.DeleteAliasRequest = {}));
var DeleteCustomKeyStoreRequest;
(function (DeleteCustomKeyStoreRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteCustomKeyStoreRequest");
    }
    DeleteCustomKeyStoreRequest.isa = isa;
})(DeleteCustomKeyStoreRequest = exports.DeleteCustomKeyStoreRequest || (exports.DeleteCustomKeyStoreRequest = {}));
var DeleteCustomKeyStoreResponse;
(function (DeleteCustomKeyStoreResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteCustomKeyStoreResponse");
    }
    DeleteCustomKeyStoreResponse.isa = isa;
})(DeleteCustomKeyStoreResponse = exports.DeleteCustomKeyStoreResponse || (exports.DeleteCustomKeyStoreResponse = {}));
var DeleteImportedKeyMaterialRequest;
(function (DeleteImportedKeyMaterialRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteImportedKeyMaterialRequest");
    }
    DeleteImportedKeyMaterialRequest.isa = isa;
})(DeleteImportedKeyMaterialRequest = exports.DeleteImportedKeyMaterialRequest || (exports.DeleteImportedKeyMaterialRequest = {}));
var DependencyTimeoutException;
(function (DependencyTimeoutException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DependencyTimeoutException");
    }
    DependencyTimeoutException.isa = isa;
})(DependencyTimeoutException = exports.DependencyTimeoutException || (exports.DependencyTimeoutException = {}));
var DescribeCustomKeyStoresRequest;
(function (DescribeCustomKeyStoresRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeCustomKeyStoresRequest");
    }
    DescribeCustomKeyStoresRequest.isa = isa;
})(DescribeCustomKeyStoresRequest = exports.DescribeCustomKeyStoresRequest || (exports.DescribeCustomKeyStoresRequest = {}));
var DescribeCustomKeyStoresResponse;
(function (DescribeCustomKeyStoresResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeCustomKeyStoresResponse");
    }
    DescribeCustomKeyStoresResponse.isa = isa;
})(DescribeCustomKeyStoresResponse = exports.DescribeCustomKeyStoresResponse || (exports.DescribeCustomKeyStoresResponse = {}));
var DescribeKeyRequest;
(function (DescribeKeyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeKeyRequest");
    }
    DescribeKeyRequest.isa = isa;
})(DescribeKeyRequest = exports.DescribeKeyRequest || (exports.DescribeKeyRequest = {}));
var DescribeKeyResponse;
(function (DescribeKeyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeKeyResponse");
    }
    DescribeKeyResponse.isa = isa;
})(DescribeKeyResponse = exports.DescribeKeyResponse || (exports.DescribeKeyResponse = {}));
var DisableKeyRequest;
(function (DisableKeyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisableKeyRequest");
    }
    DisableKeyRequest.isa = isa;
})(DisableKeyRequest = exports.DisableKeyRequest || (exports.DisableKeyRequest = {}));
var DisableKeyRotationRequest;
(function (DisableKeyRotationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisableKeyRotationRequest");
    }
    DisableKeyRotationRequest.isa = isa;
})(DisableKeyRotationRequest = exports.DisableKeyRotationRequest || (exports.DisableKeyRotationRequest = {}));
var DisabledException;
(function (DisabledException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisabledException");
    }
    DisabledException.isa = isa;
})(DisabledException = exports.DisabledException || (exports.DisabledException = {}));
var DisconnectCustomKeyStoreRequest;
(function (DisconnectCustomKeyStoreRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisconnectCustomKeyStoreRequest");
    }
    DisconnectCustomKeyStoreRequest.isa = isa;
})(DisconnectCustomKeyStoreRequest = exports.DisconnectCustomKeyStoreRequest || (exports.DisconnectCustomKeyStoreRequest = {}));
var DisconnectCustomKeyStoreResponse;
(function (DisconnectCustomKeyStoreResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisconnectCustomKeyStoreResponse");
    }
    DisconnectCustomKeyStoreResponse.isa = isa;
})(DisconnectCustomKeyStoreResponse = exports.DisconnectCustomKeyStoreResponse || (exports.DisconnectCustomKeyStoreResponse = {}));
var EnableKeyRequest;
(function (EnableKeyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "EnableKeyRequest");
    }
    EnableKeyRequest.isa = isa;
})(EnableKeyRequest = exports.EnableKeyRequest || (exports.EnableKeyRequest = {}));
var EnableKeyRotationRequest;
(function (EnableKeyRotationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "EnableKeyRotationRequest");
    }
    EnableKeyRotationRequest.isa = isa;
})(EnableKeyRotationRequest = exports.EnableKeyRotationRequest || (exports.EnableKeyRotationRequest = {}));
var EncryptRequest;
(function (EncryptRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "EncryptRequest");
    }
    EncryptRequest.isa = isa;
})(EncryptRequest = exports.EncryptRequest || (exports.EncryptRequest = {}));
var EncryptResponse;
(function (EncryptResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "EncryptResponse");
    }
    EncryptResponse.isa = isa;
})(EncryptResponse = exports.EncryptResponse || (exports.EncryptResponse = {}));
var EncryptionAlgorithmSpec;
(function (EncryptionAlgorithmSpec) {
    EncryptionAlgorithmSpec["RSAES_OAEP_SHA_1"] = "RSAES_OAEP_SHA_1";
    EncryptionAlgorithmSpec["RSAES_OAEP_SHA_256"] = "RSAES_OAEP_SHA_256";
    EncryptionAlgorithmSpec["SYMMETRIC_DEFAULT"] = "SYMMETRIC_DEFAULT";
})(EncryptionAlgorithmSpec = exports.EncryptionAlgorithmSpec || (exports.EncryptionAlgorithmSpec = {}));
var ExpirationModelType;
(function (ExpirationModelType) {
    ExpirationModelType["KEY_MATERIAL_DOES_NOT_EXPIRE"] = "KEY_MATERIAL_DOES_NOT_EXPIRE";
    ExpirationModelType["KEY_MATERIAL_EXPIRES"] = "KEY_MATERIAL_EXPIRES";
})(ExpirationModelType = exports.ExpirationModelType || (exports.ExpirationModelType = {}));
var ExpiredImportTokenException;
(function (ExpiredImportTokenException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExpiredImportTokenException");
    }
    ExpiredImportTokenException.isa = isa;
})(ExpiredImportTokenException = exports.ExpiredImportTokenException || (exports.ExpiredImportTokenException = {}));
var GenerateDataKeyPairRequest;
(function (GenerateDataKeyPairRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GenerateDataKeyPairRequest");
    }
    GenerateDataKeyPairRequest.isa = isa;
})(GenerateDataKeyPairRequest = exports.GenerateDataKeyPairRequest || (exports.GenerateDataKeyPairRequest = {}));
var GenerateDataKeyPairResponse;
(function (GenerateDataKeyPairResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GenerateDataKeyPairResponse");
    }
    GenerateDataKeyPairResponse.isa = isa;
})(GenerateDataKeyPairResponse = exports.GenerateDataKeyPairResponse || (exports.GenerateDataKeyPairResponse = {}));
var GenerateDataKeyPairWithoutPlaintextRequest;
(function (GenerateDataKeyPairWithoutPlaintextRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GenerateDataKeyPairWithoutPlaintextRequest");
    }
    GenerateDataKeyPairWithoutPlaintextRequest.isa = isa;
})(GenerateDataKeyPairWithoutPlaintextRequest = exports.GenerateDataKeyPairWithoutPlaintextRequest || (exports.GenerateDataKeyPairWithoutPlaintextRequest = {}));
var GenerateDataKeyPairWithoutPlaintextResponse;
(function (GenerateDataKeyPairWithoutPlaintextResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GenerateDataKeyPairWithoutPlaintextResponse");
    }
    GenerateDataKeyPairWithoutPlaintextResponse.isa = isa;
})(GenerateDataKeyPairWithoutPlaintextResponse = exports.GenerateDataKeyPairWithoutPlaintextResponse || (exports.GenerateDataKeyPairWithoutPlaintextResponse = {}));
var GenerateDataKeyRequest;
(function (GenerateDataKeyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GenerateDataKeyRequest");
    }
    GenerateDataKeyRequest.isa = isa;
})(GenerateDataKeyRequest = exports.GenerateDataKeyRequest || (exports.GenerateDataKeyRequest = {}));
var GenerateDataKeyResponse;
(function (GenerateDataKeyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GenerateDataKeyResponse");
    }
    GenerateDataKeyResponse.isa = isa;
})(GenerateDataKeyResponse = exports.GenerateDataKeyResponse || (exports.GenerateDataKeyResponse = {}));
var GenerateDataKeyWithoutPlaintextRequest;
(function (GenerateDataKeyWithoutPlaintextRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GenerateDataKeyWithoutPlaintextRequest");
    }
    GenerateDataKeyWithoutPlaintextRequest.isa = isa;
})(GenerateDataKeyWithoutPlaintextRequest = exports.GenerateDataKeyWithoutPlaintextRequest || (exports.GenerateDataKeyWithoutPlaintextRequest = {}));
var GenerateDataKeyWithoutPlaintextResponse;
(function (GenerateDataKeyWithoutPlaintextResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GenerateDataKeyWithoutPlaintextResponse");
    }
    GenerateDataKeyWithoutPlaintextResponse.isa = isa;
})(GenerateDataKeyWithoutPlaintextResponse = exports.GenerateDataKeyWithoutPlaintextResponse || (exports.GenerateDataKeyWithoutPlaintextResponse = {}));
var GenerateRandomRequest;
(function (GenerateRandomRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GenerateRandomRequest");
    }
    GenerateRandomRequest.isa = isa;
})(GenerateRandomRequest = exports.GenerateRandomRequest || (exports.GenerateRandomRequest = {}));
var GenerateRandomResponse;
(function (GenerateRandomResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GenerateRandomResponse");
    }
    GenerateRandomResponse.isa = isa;
})(GenerateRandomResponse = exports.GenerateRandomResponse || (exports.GenerateRandomResponse = {}));
var GetKeyPolicyRequest;
(function (GetKeyPolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetKeyPolicyRequest");
    }
    GetKeyPolicyRequest.isa = isa;
})(GetKeyPolicyRequest = exports.GetKeyPolicyRequest || (exports.GetKeyPolicyRequest = {}));
var GetKeyPolicyResponse;
(function (GetKeyPolicyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetKeyPolicyResponse");
    }
    GetKeyPolicyResponse.isa = isa;
})(GetKeyPolicyResponse = exports.GetKeyPolicyResponse || (exports.GetKeyPolicyResponse = {}));
var GetKeyRotationStatusRequest;
(function (GetKeyRotationStatusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetKeyRotationStatusRequest");
    }
    GetKeyRotationStatusRequest.isa = isa;
})(GetKeyRotationStatusRequest = exports.GetKeyRotationStatusRequest || (exports.GetKeyRotationStatusRequest = {}));
var GetKeyRotationStatusResponse;
(function (GetKeyRotationStatusResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetKeyRotationStatusResponse");
    }
    GetKeyRotationStatusResponse.isa = isa;
})(GetKeyRotationStatusResponse = exports.GetKeyRotationStatusResponse || (exports.GetKeyRotationStatusResponse = {}));
var GetParametersForImportRequest;
(function (GetParametersForImportRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetParametersForImportRequest");
    }
    GetParametersForImportRequest.isa = isa;
})(GetParametersForImportRequest = exports.GetParametersForImportRequest || (exports.GetParametersForImportRequest = {}));
var GetParametersForImportResponse;
(function (GetParametersForImportResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetParametersForImportResponse");
    }
    GetParametersForImportResponse.isa = isa;
})(GetParametersForImportResponse = exports.GetParametersForImportResponse || (exports.GetParametersForImportResponse = {}));
var GetPublicKeyRequest;
(function (GetPublicKeyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetPublicKeyRequest");
    }
    GetPublicKeyRequest.isa = isa;
})(GetPublicKeyRequest = exports.GetPublicKeyRequest || (exports.GetPublicKeyRequest = {}));
var GetPublicKeyResponse;
(function (GetPublicKeyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetPublicKeyResponse");
    }
    GetPublicKeyResponse.isa = isa;
})(GetPublicKeyResponse = exports.GetPublicKeyResponse || (exports.GetPublicKeyResponse = {}));
var GrantConstraints;
(function (GrantConstraints) {
    function isa(o) {
        return smithy_client_1.isa(o, "GrantConstraints");
    }
    GrantConstraints.isa = isa;
})(GrantConstraints = exports.GrantConstraints || (exports.GrantConstraints = {}));
var GrantListEntry;
(function (GrantListEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "GrantListEntry");
    }
    GrantListEntry.isa = isa;
})(GrantListEntry = exports.GrantListEntry || (exports.GrantListEntry = {}));
var GrantOperation;
(function (GrantOperation) {
    GrantOperation["CreateGrant"] = "CreateGrant";
    GrantOperation["Decrypt"] = "Decrypt";
    GrantOperation["DescribeKey"] = "DescribeKey";
    GrantOperation["Encrypt"] = "Encrypt";
    GrantOperation["GenerateDataKey"] = "GenerateDataKey";
    GrantOperation["GenerateDataKeyPair"] = "GenerateDataKeyPair";
    GrantOperation["GenerateDataKeyPairWithoutPlaintext"] = "GenerateDataKeyPairWithoutPlaintext";
    GrantOperation["GenerateDataKeyWithoutPlaintext"] = "GenerateDataKeyWithoutPlaintext";
    GrantOperation["GetPublicKey"] = "GetPublicKey";
    GrantOperation["ReEncryptFrom"] = "ReEncryptFrom";
    GrantOperation["ReEncryptTo"] = "ReEncryptTo";
    GrantOperation["RetireGrant"] = "RetireGrant";
    GrantOperation["Sign"] = "Sign";
    GrantOperation["Verify"] = "Verify";
})(GrantOperation = exports.GrantOperation || (exports.GrantOperation = {}));
var ImportKeyMaterialRequest;
(function (ImportKeyMaterialRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ImportKeyMaterialRequest");
    }
    ImportKeyMaterialRequest.isa = isa;
})(ImportKeyMaterialRequest = exports.ImportKeyMaterialRequest || (exports.ImportKeyMaterialRequest = {}));
var ImportKeyMaterialResponse;
(function (ImportKeyMaterialResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ImportKeyMaterialResponse");
    }
    ImportKeyMaterialResponse.isa = isa;
})(ImportKeyMaterialResponse = exports.ImportKeyMaterialResponse || (exports.ImportKeyMaterialResponse = {}));
var IncorrectKeyException;
(function (IncorrectKeyException) {
    function isa(o) {
        return smithy_client_1.isa(o, "IncorrectKeyException");
    }
    IncorrectKeyException.isa = isa;
})(IncorrectKeyException = exports.IncorrectKeyException || (exports.IncorrectKeyException = {}));
var IncorrectKeyMaterialException;
(function (IncorrectKeyMaterialException) {
    function isa(o) {
        return smithy_client_1.isa(o, "IncorrectKeyMaterialException");
    }
    IncorrectKeyMaterialException.isa = isa;
})(IncorrectKeyMaterialException = exports.IncorrectKeyMaterialException || (exports.IncorrectKeyMaterialException = {}));
var IncorrectTrustAnchorException;
(function (IncorrectTrustAnchorException) {
    function isa(o) {
        return smithy_client_1.isa(o, "IncorrectTrustAnchorException");
    }
    IncorrectTrustAnchorException.isa = isa;
})(IncorrectTrustAnchorException = exports.IncorrectTrustAnchorException || (exports.IncorrectTrustAnchorException = {}));
var InvalidAliasNameException;
(function (InvalidAliasNameException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidAliasNameException");
    }
    InvalidAliasNameException.isa = isa;
})(InvalidAliasNameException = exports.InvalidAliasNameException || (exports.InvalidAliasNameException = {}));
var InvalidArnException;
(function (InvalidArnException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidArnException");
    }
    InvalidArnException.isa = isa;
})(InvalidArnException = exports.InvalidArnException || (exports.InvalidArnException = {}));
var InvalidCiphertextException;
(function (InvalidCiphertextException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidCiphertextException");
    }
    InvalidCiphertextException.isa = isa;
})(InvalidCiphertextException = exports.InvalidCiphertextException || (exports.InvalidCiphertextException = {}));
var InvalidGrantIdException;
(function (InvalidGrantIdException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidGrantIdException");
    }
    InvalidGrantIdException.isa = isa;
})(InvalidGrantIdException = exports.InvalidGrantIdException || (exports.InvalidGrantIdException = {}));
var InvalidGrantTokenException;
(function (InvalidGrantTokenException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidGrantTokenException");
    }
    InvalidGrantTokenException.isa = isa;
})(InvalidGrantTokenException = exports.InvalidGrantTokenException || (exports.InvalidGrantTokenException = {}));
var InvalidImportTokenException;
(function (InvalidImportTokenException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidImportTokenException");
    }
    InvalidImportTokenException.isa = isa;
})(InvalidImportTokenException = exports.InvalidImportTokenException || (exports.InvalidImportTokenException = {}));
var InvalidKeyUsageException;
(function (InvalidKeyUsageException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidKeyUsageException");
    }
    InvalidKeyUsageException.isa = isa;
})(InvalidKeyUsageException = exports.InvalidKeyUsageException || (exports.InvalidKeyUsageException = {}));
var InvalidMarkerException;
(function (InvalidMarkerException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidMarkerException");
    }
    InvalidMarkerException.isa = isa;
})(InvalidMarkerException = exports.InvalidMarkerException || (exports.InvalidMarkerException = {}));
var KMSInternalException;
(function (KMSInternalException) {
    function isa(o) {
        return smithy_client_1.isa(o, "KMSInternalException");
    }
    KMSInternalException.isa = isa;
})(KMSInternalException = exports.KMSInternalException || (exports.KMSInternalException = {}));
var KMSInvalidSignatureException;
(function (KMSInvalidSignatureException) {
    function isa(o) {
        return smithy_client_1.isa(o, "KMSInvalidSignatureException");
    }
    KMSInvalidSignatureException.isa = isa;
})(KMSInvalidSignatureException = exports.KMSInvalidSignatureException || (exports.KMSInvalidSignatureException = {}));
var KMSInvalidStateException;
(function (KMSInvalidStateException) {
    function isa(o) {
        return smithy_client_1.isa(o, "KMSInvalidStateException");
    }
    KMSInvalidStateException.isa = isa;
})(KMSInvalidStateException = exports.KMSInvalidStateException || (exports.KMSInvalidStateException = {}));
var KeyListEntry;
(function (KeyListEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "KeyListEntry");
    }
    KeyListEntry.isa = isa;
})(KeyListEntry = exports.KeyListEntry || (exports.KeyListEntry = {}));
var KeyManagerType;
(function (KeyManagerType) {
    KeyManagerType["AWS"] = "AWS";
    KeyManagerType["CUSTOMER"] = "CUSTOMER";
})(KeyManagerType = exports.KeyManagerType || (exports.KeyManagerType = {}));
var KeyMetadata;
(function (KeyMetadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "KeyMetadata");
    }
    KeyMetadata.isa = isa;
})(KeyMetadata = exports.KeyMetadata || (exports.KeyMetadata = {}));
var KeyState;
(function (KeyState) {
    KeyState["Disabled"] = "Disabled";
    KeyState["Enabled"] = "Enabled";
    KeyState["PendingDeletion"] = "PendingDeletion";
    KeyState["PendingImport"] = "PendingImport";
    KeyState["Unavailable"] = "Unavailable";
})(KeyState = exports.KeyState || (exports.KeyState = {}));
var KeyUnavailableException;
(function (KeyUnavailableException) {
    function isa(o) {
        return smithy_client_1.isa(o, "KeyUnavailableException");
    }
    KeyUnavailableException.isa = isa;
})(KeyUnavailableException = exports.KeyUnavailableException || (exports.KeyUnavailableException = {}));
var KeyUsageType;
(function (KeyUsageType) {
    KeyUsageType["ENCRYPT_DECRYPT"] = "ENCRYPT_DECRYPT";
    KeyUsageType["SIGN_VERIFY"] = "SIGN_VERIFY";
})(KeyUsageType = exports.KeyUsageType || (exports.KeyUsageType = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ListAliasesRequest;
(function (ListAliasesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAliasesRequest");
    }
    ListAliasesRequest.isa = isa;
})(ListAliasesRequest = exports.ListAliasesRequest || (exports.ListAliasesRequest = {}));
var ListAliasesResponse;
(function (ListAliasesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAliasesResponse");
    }
    ListAliasesResponse.isa = isa;
})(ListAliasesResponse = exports.ListAliasesResponse || (exports.ListAliasesResponse = {}));
var ListGrantsRequest;
(function (ListGrantsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListGrantsRequest");
    }
    ListGrantsRequest.isa = isa;
})(ListGrantsRequest = exports.ListGrantsRequest || (exports.ListGrantsRequest = {}));
var ListGrantsResponse;
(function (ListGrantsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListGrantsResponse");
    }
    ListGrantsResponse.isa = isa;
})(ListGrantsResponse = exports.ListGrantsResponse || (exports.ListGrantsResponse = {}));
var ListKeyPoliciesRequest;
(function (ListKeyPoliciesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListKeyPoliciesRequest");
    }
    ListKeyPoliciesRequest.isa = isa;
})(ListKeyPoliciesRequest = exports.ListKeyPoliciesRequest || (exports.ListKeyPoliciesRequest = {}));
var ListKeyPoliciesResponse;
(function (ListKeyPoliciesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListKeyPoliciesResponse");
    }
    ListKeyPoliciesResponse.isa = isa;
})(ListKeyPoliciesResponse = exports.ListKeyPoliciesResponse || (exports.ListKeyPoliciesResponse = {}));
var ListKeysRequest;
(function (ListKeysRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListKeysRequest");
    }
    ListKeysRequest.isa = isa;
})(ListKeysRequest = exports.ListKeysRequest || (exports.ListKeysRequest = {}));
var ListKeysResponse;
(function (ListKeysResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListKeysResponse");
    }
    ListKeysResponse.isa = isa;
})(ListKeysResponse = exports.ListKeysResponse || (exports.ListKeysResponse = {}));
var ListResourceTagsRequest;
(function (ListResourceTagsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListResourceTagsRequest");
    }
    ListResourceTagsRequest.isa = isa;
})(ListResourceTagsRequest = exports.ListResourceTagsRequest || (exports.ListResourceTagsRequest = {}));
var ListResourceTagsResponse;
(function (ListResourceTagsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListResourceTagsResponse");
    }
    ListResourceTagsResponse.isa = isa;
})(ListResourceTagsResponse = exports.ListResourceTagsResponse || (exports.ListResourceTagsResponse = {}));
var ListRetirableGrantsRequest;
(function (ListRetirableGrantsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListRetirableGrantsRequest");
    }
    ListRetirableGrantsRequest.isa = isa;
})(ListRetirableGrantsRequest = exports.ListRetirableGrantsRequest || (exports.ListRetirableGrantsRequest = {}));
var MalformedPolicyDocumentException;
(function (MalformedPolicyDocumentException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MalformedPolicyDocumentException");
    }
    MalformedPolicyDocumentException.isa = isa;
})(MalformedPolicyDocumentException = exports.MalformedPolicyDocumentException || (exports.MalformedPolicyDocumentException = {}));
var MessageType;
(function (MessageType) {
    MessageType["DIGEST"] = "DIGEST";
    MessageType["RAW"] = "RAW";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var NotFoundException;
(function (NotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NotFoundException");
    }
    NotFoundException.isa = isa;
})(NotFoundException = exports.NotFoundException || (exports.NotFoundException = {}));
var OriginType;
(function (OriginType) {
    OriginType["AWS_CLOUDHSM"] = "AWS_CLOUDHSM";
    OriginType["AWS_KMS"] = "AWS_KMS";
    OriginType["EXTERNAL"] = "EXTERNAL";
})(OriginType = exports.OriginType || (exports.OriginType = {}));
var PutKeyPolicyRequest;
(function (PutKeyPolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutKeyPolicyRequest");
    }
    PutKeyPolicyRequest.isa = isa;
})(PutKeyPolicyRequest = exports.PutKeyPolicyRequest || (exports.PutKeyPolicyRequest = {}));
var ReEncryptRequest;
(function (ReEncryptRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReEncryptRequest");
    }
    ReEncryptRequest.isa = isa;
})(ReEncryptRequest = exports.ReEncryptRequest || (exports.ReEncryptRequest = {}));
var ReEncryptResponse;
(function (ReEncryptResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReEncryptResponse");
    }
    ReEncryptResponse.isa = isa;
})(ReEncryptResponse = exports.ReEncryptResponse || (exports.ReEncryptResponse = {}));
var RetireGrantRequest;
(function (RetireGrantRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RetireGrantRequest");
    }
    RetireGrantRequest.isa = isa;
})(RetireGrantRequest = exports.RetireGrantRequest || (exports.RetireGrantRequest = {}));
var RevokeGrantRequest;
(function (RevokeGrantRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RevokeGrantRequest");
    }
    RevokeGrantRequest.isa = isa;
})(RevokeGrantRequest = exports.RevokeGrantRequest || (exports.RevokeGrantRequest = {}));
var ScheduleKeyDeletionRequest;
(function (ScheduleKeyDeletionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ScheduleKeyDeletionRequest");
    }
    ScheduleKeyDeletionRequest.isa = isa;
})(ScheduleKeyDeletionRequest = exports.ScheduleKeyDeletionRequest || (exports.ScheduleKeyDeletionRequest = {}));
var ScheduleKeyDeletionResponse;
(function (ScheduleKeyDeletionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ScheduleKeyDeletionResponse");
    }
    ScheduleKeyDeletionResponse.isa = isa;
})(ScheduleKeyDeletionResponse = exports.ScheduleKeyDeletionResponse || (exports.ScheduleKeyDeletionResponse = {}));
var SignRequest;
(function (SignRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SignRequest");
    }
    SignRequest.isa = isa;
})(SignRequest = exports.SignRequest || (exports.SignRequest = {}));
var SignResponse;
(function (SignResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SignResponse");
    }
    SignResponse.isa = isa;
})(SignResponse = exports.SignResponse || (exports.SignResponse = {}));
var SigningAlgorithmSpec;
(function (SigningAlgorithmSpec) {
    SigningAlgorithmSpec["ECDSA_SHA_256"] = "ECDSA_SHA_256";
    SigningAlgorithmSpec["ECDSA_SHA_384"] = "ECDSA_SHA_384";
    SigningAlgorithmSpec["ECDSA_SHA_512"] = "ECDSA_SHA_512";
    SigningAlgorithmSpec["RSASSA_PKCS1_V1_5_SHA_256"] = "RSASSA_PKCS1_V1_5_SHA_256";
    SigningAlgorithmSpec["RSASSA_PKCS1_V1_5_SHA_384"] = "RSASSA_PKCS1_V1_5_SHA_384";
    SigningAlgorithmSpec["RSASSA_PKCS1_V1_5_SHA_512"] = "RSASSA_PKCS1_V1_5_SHA_512";
    SigningAlgorithmSpec["RSASSA_PSS_SHA_256"] = "RSASSA_PSS_SHA_256";
    SigningAlgorithmSpec["RSASSA_PSS_SHA_384"] = "RSASSA_PSS_SHA_384";
    SigningAlgorithmSpec["RSASSA_PSS_SHA_512"] = "RSASSA_PSS_SHA_512";
})(SigningAlgorithmSpec = exports.SigningAlgorithmSpec || (exports.SigningAlgorithmSpec = {}));
var Tag;
(function (Tag) {
    function isa(o) {
        return smithy_client_1.isa(o, "Tag");
    }
    Tag.isa = isa;
})(Tag = exports.Tag || (exports.Tag = {}));
var TagException;
(function (TagException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagException");
    }
    TagException.isa = isa;
})(TagException = exports.TagException || (exports.TagException = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagResourceRequest");
    }
    TagResourceRequest.isa = isa;
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var UnsupportedOperationException;
(function (UnsupportedOperationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnsupportedOperationException");
    }
    UnsupportedOperationException.isa = isa;
})(UnsupportedOperationException = exports.UnsupportedOperationException || (exports.UnsupportedOperationException = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceRequest");
    }
    UntagResourceRequest.isa = isa;
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UpdateAliasRequest;
(function (UpdateAliasRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateAliasRequest");
    }
    UpdateAliasRequest.isa = isa;
})(UpdateAliasRequest = exports.UpdateAliasRequest || (exports.UpdateAliasRequest = {}));
var UpdateCustomKeyStoreRequest;
(function (UpdateCustomKeyStoreRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateCustomKeyStoreRequest");
    }
    UpdateCustomKeyStoreRequest.isa = isa;
})(UpdateCustomKeyStoreRequest = exports.UpdateCustomKeyStoreRequest || (exports.UpdateCustomKeyStoreRequest = {}));
var UpdateCustomKeyStoreResponse;
(function (UpdateCustomKeyStoreResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateCustomKeyStoreResponse");
    }
    UpdateCustomKeyStoreResponse.isa = isa;
})(UpdateCustomKeyStoreResponse = exports.UpdateCustomKeyStoreResponse || (exports.UpdateCustomKeyStoreResponse = {}));
var UpdateKeyDescriptionRequest;
(function (UpdateKeyDescriptionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateKeyDescriptionRequest");
    }
    UpdateKeyDescriptionRequest.isa = isa;
})(UpdateKeyDescriptionRequest = exports.UpdateKeyDescriptionRequest || (exports.UpdateKeyDescriptionRequest = {}));
var VerifyRequest;
(function (VerifyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "VerifyRequest");
    }
    VerifyRequest.isa = isa;
})(VerifyRequest = exports.VerifyRequest || (exports.VerifyRequest = {}));
var VerifyResponse;
(function (VerifyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "VerifyResponse");
    }
    VerifyResponse.isa = isa;
})(VerifyResponse = exports.VerifyResponse || (exports.VerifyResponse = {}));
var WrappingKeySpec;
(function (WrappingKeySpec) {
    WrappingKeySpec["RSA_2048"] = "RSA_2048";
})(WrappingKeySpec = exports.WrappingKeySpec || (exports.WrappingKeySpec = {}));
//# sourceMappingURL=index.js.map