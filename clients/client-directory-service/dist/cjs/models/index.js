"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AcceptSharedDirectoryRequest;
(function (AcceptSharedDirectoryRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AcceptSharedDirectoryRequest");
    }
    AcceptSharedDirectoryRequest.isa = isa;
})(AcceptSharedDirectoryRequest = exports.AcceptSharedDirectoryRequest || (exports.AcceptSharedDirectoryRequest = {}));
var AcceptSharedDirectoryResult;
(function (AcceptSharedDirectoryResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "AcceptSharedDirectoryResult");
    }
    AcceptSharedDirectoryResult.isa = isa;
})(AcceptSharedDirectoryResult = exports.AcceptSharedDirectoryResult || (exports.AcceptSharedDirectoryResult = {}));
var AccessDeniedException;
(function (AccessDeniedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AccessDeniedException");
    }
    AccessDeniedException.isa = isa;
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var AddIpRoutesRequest;
(function (AddIpRoutesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddIpRoutesRequest");
    }
    AddIpRoutesRequest.isa = isa;
})(AddIpRoutesRequest = exports.AddIpRoutesRequest || (exports.AddIpRoutesRequest = {}));
var AddIpRoutesResult;
(function (AddIpRoutesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddIpRoutesResult");
    }
    AddIpRoutesResult.isa = isa;
})(AddIpRoutesResult = exports.AddIpRoutesResult || (exports.AddIpRoutesResult = {}));
var AddTagsToResourceRequest;
(function (AddTagsToResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddTagsToResourceRequest");
    }
    AddTagsToResourceRequest.isa = isa;
})(AddTagsToResourceRequest = exports.AddTagsToResourceRequest || (exports.AddTagsToResourceRequest = {}));
var AddTagsToResourceResult;
(function (AddTagsToResourceResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddTagsToResourceResult");
    }
    AddTagsToResourceResult.isa = isa;
})(AddTagsToResourceResult = exports.AddTagsToResourceResult || (exports.AddTagsToResourceResult = {}));
var Attribute;
(function (Attribute) {
    function isa(o) {
        return smithy_client_1.isa(o, "Attribute");
    }
    Attribute.isa = isa;
})(Attribute = exports.Attribute || (exports.Attribute = {}));
var AuthenticationFailedException;
(function (AuthenticationFailedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AuthenticationFailedException");
    }
    AuthenticationFailedException.isa = isa;
})(AuthenticationFailedException = exports.AuthenticationFailedException || (exports.AuthenticationFailedException = {}));
var CancelSchemaExtensionRequest;
(function (CancelSchemaExtensionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CancelSchemaExtensionRequest");
    }
    CancelSchemaExtensionRequest.isa = isa;
})(CancelSchemaExtensionRequest = exports.CancelSchemaExtensionRequest || (exports.CancelSchemaExtensionRequest = {}));
var CancelSchemaExtensionResult;
(function (CancelSchemaExtensionResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CancelSchemaExtensionResult");
    }
    CancelSchemaExtensionResult.isa = isa;
})(CancelSchemaExtensionResult = exports.CancelSchemaExtensionResult || (exports.CancelSchemaExtensionResult = {}));
var Certificate;
(function (Certificate) {
    function isa(o) {
        return smithy_client_1.isa(o, "Certificate");
    }
    Certificate.isa = isa;
})(Certificate = exports.Certificate || (exports.Certificate = {}));
var CertificateAlreadyExistsException;
(function (CertificateAlreadyExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CertificateAlreadyExistsException");
    }
    CertificateAlreadyExistsException.isa = isa;
})(CertificateAlreadyExistsException = exports.CertificateAlreadyExistsException || (exports.CertificateAlreadyExistsException = {}));
var CertificateDoesNotExistException;
(function (CertificateDoesNotExistException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CertificateDoesNotExistException");
    }
    CertificateDoesNotExistException.isa = isa;
})(CertificateDoesNotExistException = exports.CertificateDoesNotExistException || (exports.CertificateDoesNotExistException = {}));
var CertificateInUseException;
(function (CertificateInUseException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CertificateInUseException");
    }
    CertificateInUseException.isa = isa;
})(CertificateInUseException = exports.CertificateInUseException || (exports.CertificateInUseException = {}));
var CertificateInfo;
(function (CertificateInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "CertificateInfo");
    }
    CertificateInfo.isa = isa;
})(CertificateInfo = exports.CertificateInfo || (exports.CertificateInfo = {}));
var CertificateLimitExceededException;
(function (CertificateLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CertificateLimitExceededException");
    }
    CertificateLimitExceededException.isa = isa;
})(CertificateLimitExceededException = exports.CertificateLimitExceededException || (exports.CertificateLimitExceededException = {}));
var CertificateState;
(function (CertificateState) {
    CertificateState["DEREGISTERED"] = "Deregistered";
    CertificateState["DEREGISTERING"] = "Deregistering";
    CertificateState["DEREGISTER_FAILED"] = "DeregisterFailed";
    CertificateState["REGISTERED"] = "Registered";
    CertificateState["REGISTERING"] = "Registering";
    CertificateState["REGISTER_FAILED"] = "RegisterFailed";
})(CertificateState = exports.CertificateState || (exports.CertificateState = {}));
var ClientException;
(function (ClientException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ClientException");
    }
    ClientException.isa = isa;
})(ClientException = exports.ClientException || (exports.ClientException = {}));
var Computer;
(function (Computer) {
    function isa(o) {
        return smithy_client_1.isa(o, "Computer");
    }
    Computer.isa = isa;
})(Computer = exports.Computer || (exports.Computer = {}));
var ConditionalForwarder;
(function (ConditionalForwarder) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConditionalForwarder");
    }
    ConditionalForwarder.isa = isa;
})(ConditionalForwarder = exports.ConditionalForwarder || (exports.ConditionalForwarder = {}));
var ConnectDirectoryRequest;
(function (ConnectDirectoryRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConnectDirectoryRequest");
    }
    ConnectDirectoryRequest.isa = isa;
})(ConnectDirectoryRequest = exports.ConnectDirectoryRequest || (exports.ConnectDirectoryRequest = {}));
var ConnectDirectoryResult;
(function (ConnectDirectoryResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConnectDirectoryResult");
    }
    ConnectDirectoryResult.isa = isa;
})(ConnectDirectoryResult = exports.ConnectDirectoryResult || (exports.ConnectDirectoryResult = {}));
var CreateAliasRequest;
(function (CreateAliasRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAliasRequest");
    }
    CreateAliasRequest.isa = isa;
})(CreateAliasRequest = exports.CreateAliasRequest || (exports.CreateAliasRequest = {}));
var CreateAliasResult;
(function (CreateAliasResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAliasResult");
    }
    CreateAliasResult.isa = isa;
})(CreateAliasResult = exports.CreateAliasResult || (exports.CreateAliasResult = {}));
var CreateComputerRequest;
(function (CreateComputerRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateComputerRequest");
    }
    CreateComputerRequest.isa = isa;
})(CreateComputerRequest = exports.CreateComputerRequest || (exports.CreateComputerRequest = {}));
var CreateComputerResult;
(function (CreateComputerResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateComputerResult");
    }
    CreateComputerResult.isa = isa;
})(CreateComputerResult = exports.CreateComputerResult || (exports.CreateComputerResult = {}));
var CreateConditionalForwarderRequest;
(function (CreateConditionalForwarderRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateConditionalForwarderRequest");
    }
    CreateConditionalForwarderRequest.isa = isa;
})(CreateConditionalForwarderRequest = exports.CreateConditionalForwarderRequest || (exports.CreateConditionalForwarderRequest = {}));
var CreateConditionalForwarderResult;
(function (CreateConditionalForwarderResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateConditionalForwarderResult");
    }
    CreateConditionalForwarderResult.isa = isa;
})(CreateConditionalForwarderResult = exports.CreateConditionalForwarderResult || (exports.CreateConditionalForwarderResult = {}));
var CreateDirectoryRequest;
(function (CreateDirectoryRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDirectoryRequest");
    }
    CreateDirectoryRequest.isa = isa;
})(CreateDirectoryRequest = exports.CreateDirectoryRequest || (exports.CreateDirectoryRequest = {}));
var CreateDirectoryResult;
(function (CreateDirectoryResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDirectoryResult");
    }
    CreateDirectoryResult.isa = isa;
})(CreateDirectoryResult = exports.CreateDirectoryResult || (exports.CreateDirectoryResult = {}));
var CreateLogSubscriptionRequest;
(function (CreateLogSubscriptionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateLogSubscriptionRequest");
    }
    CreateLogSubscriptionRequest.isa = isa;
})(CreateLogSubscriptionRequest = exports.CreateLogSubscriptionRequest || (exports.CreateLogSubscriptionRequest = {}));
var CreateLogSubscriptionResult;
(function (CreateLogSubscriptionResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateLogSubscriptionResult");
    }
    CreateLogSubscriptionResult.isa = isa;
})(CreateLogSubscriptionResult = exports.CreateLogSubscriptionResult || (exports.CreateLogSubscriptionResult = {}));
var CreateMicrosoftADRequest;
(function (CreateMicrosoftADRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateMicrosoftADRequest");
    }
    CreateMicrosoftADRequest.isa = isa;
})(CreateMicrosoftADRequest = exports.CreateMicrosoftADRequest || (exports.CreateMicrosoftADRequest = {}));
var CreateMicrosoftADResult;
(function (CreateMicrosoftADResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateMicrosoftADResult");
    }
    CreateMicrosoftADResult.isa = isa;
})(CreateMicrosoftADResult = exports.CreateMicrosoftADResult || (exports.CreateMicrosoftADResult = {}));
var CreateSnapshotRequest;
(function (CreateSnapshotRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateSnapshotRequest");
    }
    CreateSnapshotRequest.isa = isa;
})(CreateSnapshotRequest = exports.CreateSnapshotRequest || (exports.CreateSnapshotRequest = {}));
var CreateSnapshotResult;
(function (CreateSnapshotResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateSnapshotResult");
    }
    CreateSnapshotResult.isa = isa;
})(CreateSnapshotResult = exports.CreateSnapshotResult || (exports.CreateSnapshotResult = {}));
var CreateTrustRequest;
(function (CreateTrustRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateTrustRequest");
    }
    CreateTrustRequest.isa = isa;
})(CreateTrustRequest = exports.CreateTrustRequest || (exports.CreateTrustRequest = {}));
var CreateTrustResult;
(function (CreateTrustResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateTrustResult");
    }
    CreateTrustResult.isa = isa;
})(CreateTrustResult = exports.CreateTrustResult || (exports.CreateTrustResult = {}));
var DeleteConditionalForwarderRequest;
(function (DeleteConditionalForwarderRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteConditionalForwarderRequest");
    }
    DeleteConditionalForwarderRequest.isa = isa;
})(DeleteConditionalForwarderRequest = exports.DeleteConditionalForwarderRequest || (exports.DeleteConditionalForwarderRequest = {}));
var DeleteConditionalForwarderResult;
(function (DeleteConditionalForwarderResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteConditionalForwarderResult");
    }
    DeleteConditionalForwarderResult.isa = isa;
})(DeleteConditionalForwarderResult = exports.DeleteConditionalForwarderResult || (exports.DeleteConditionalForwarderResult = {}));
var DeleteDirectoryRequest;
(function (DeleteDirectoryRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDirectoryRequest");
    }
    DeleteDirectoryRequest.isa = isa;
})(DeleteDirectoryRequest = exports.DeleteDirectoryRequest || (exports.DeleteDirectoryRequest = {}));
var DeleteDirectoryResult;
(function (DeleteDirectoryResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDirectoryResult");
    }
    DeleteDirectoryResult.isa = isa;
})(DeleteDirectoryResult = exports.DeleteDirectoryResult || (exports.DeleteDirectoryResult = {}));
var DeleteLogSubscriptionRequest;
(function (DeleteLogSubscriptionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteLogSubscriptionRequest");
    }
    DeleteLogSubscriptionRequest.isa = isa;
})(DeleteLogSubscriptionRequest = exports.DeleteLogSubscriptionRequest || (exports.DeleteLogSubscriptionRequest = {}));
var DeleteLogSubscriptionResult;
(function (DeleteLogSubscriptionResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteLogSubscriptionResult");
    }
    DeleteLogSubscriptionResult.isa = isa;
})(DeleteLogSubscriptionResult = exports.DeleteLogSubscriptionResult || (exports.DeleteLogSubscriptionResult = {}));
var DeleteSnapshotRequest;
(function (DeleteSnapshotRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteSnapshotRequest");
    }
    DeleteSnapshotRequest.isa = isa;
})(DeleteSnapshotRequest = exports.DeleteSnapshotRequest || (exports.DeleteSnapshotRequest = {}));
var DeleteSnapshotResult;
(function (DeleteSnapshotResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteSnapshotResult");
    }
    DeleteSnapshotResult.isa = isa;
})(DeleteSnapshotResult = exports.DeleteSnapshotResult || (exports.DeleteSnapshotResult = {}));
var DeleteTrustRequest;
(function (DeleteTrustRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteTrustRequest");
    }
    DeleteTrustRequest.isa = isa;
})(DeleteTrustRequest = exports.DeleteTrustRequest || (exports.DeleteTrustRequest = {}));
var DeleteTrustResult;
(function (DeleteTrustResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteTrustResult");
    }
    DeleteTrustResult.isa = isa;
})(DeleteTrustResult = exports.DeleteTrustResult || (exports.DeleteTrustResult = {}));
var DeregisterCertificateRequest;
(function (DeregisterCertificateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeregisterCertificateRequest");
    }
    DeregisterCertificateRequest.isa = isa;
})(DeregisterCertificateRequest = exports.DeregisterCertificateRequest || (exports.DeregisterCertificateRequest = {}));
var DeregisterCertificateResult;
(function (DeregisterCertificateResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeregisterCertificateResult");
    }
    DeregisterCertificateResult.isa = isa;
})(DeregisterCertificateResult = exports.DeregisterCertificateResult || (exports.DeregisterCertificateResult = {}));
var DeregisterEventTopicRequest;
(function (DeregisterEventTopicRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeregisterEventTopicRequest");
    }
    DeregisterEventTopicRequest.isa = isa;
})(DeregisterEventTopicRequest = exports.DeregisterEventTopicRequest || (exports.DeregisterEventTopicRequest = {}));
var DeregisterEventTopicResult;
(function (DeregisterEventTopicResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeregisterEventTopicResult");
    }
    DeregisterEventTopicResult.isa = isa;
})(DeregisterEventTopicResult = exports.DeregisterEventTopicResult || (exports.DeregisterEventTopicResult = {}));
var DescribeCertificateRequest;
(function (DescribeCertificateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeCertificateRequest");
    }
    DescribeCertificateRequest.isa = isa;
})(DescribeCertificateRequest = exports.DescribeCertificateRequest || (exports.DescribeCertificateRequest = {}));
var DescribeCertificateResult;
(function (DescribeCertificateResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeCertificateResult");
    }
    DescribeCertificateResult.isa = isa;
})(DescribeCertificateResult = exports.DescribeCertificateResult || (exports.DescribeCertificateResult = {}));
var DescribeConditionalForwardersRequest;
(function (DescribeConditionalForwardersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeConditionalForwardersRequest");
    }
    DescribeConditionalForwardersRequest.isa = isa;
})(DescribeConditionalForwardersRequest = exports.DescribeConditionalForwardersRequest || (exports.DescribeConditionalForwardersRequest = {}));
var DescribeConditionalForwardersResult;
(function (DescribeConditionalForwardersResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeConditionalForwardersResult");
    }
    DescribeConditionalForwardersResult.isa = isa;
})(DescribeConditionalForwardersResult = exports.DescribeConditionalForwardersResult || (exports.DescribeConditionalForwardersResult = {}));
var DescribeDirectoriesRequest;
(function (DescribeDirectoriesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDirectoriesRequest");
    }
    DescribeDirectoriesRequest.isa = isa;
})(DescribeDirectoriesRequest = exports.DescribeDirectoriesRequest || (exports.DescribeDirectoriesRequest = {}));
var DescribeDirectoriesResult;
(function (DescribeDirectoriesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDirectoriesResult");
    }
    DescribeDirectoriesResult.isa = isa;
})(DescribeDirectoriesResult = exports.DescribeDirectoriesResult || (exports.DescribeDirectoriesResult = {}));
var DescribeDomainControllersRequest;
(function (DescribeDomainControllersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDomainControllersRequest");
    }
    DescribeDomainControllersRequest.isa = isa;
})(DescribeDomainControllersRequest = exports.DescribeDomainControllersRequest || (exports.DescribeDomainControllersRequest = {}));
var DescribeDomainControllersResult;
(function (DescribeDomainControllersResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDomainControllersResult");
    }
    DescribeDomainControllersResult.isa = isa;
})(DescribeDomainControllersResult = exports.DescribeDomainControllersResult || (exports.DescribeDomainControllersResult = {}));
var DescribeEventTopicsRequest;
(function (DescribeEventTopicsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEventTopicsRequest");
    }
    DescribeEventTopicsRequest.isa = isa;
})(DescribeEventTopicsRequest = exports.DescribeEventTopicsRequest || (exports.DescribeEventTopicsRequest = {}));
var DescribeEventTopicsResult;
(function (DescribeEventTopicsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEventTopicsResult");
    }
    DescribeEventTopicsResult.isa = isa;
})(DescribeEventTopicsResult = exports.DescribeEventTopicsResult || (exports.DescribeEventTopicsResult = {}));
var DescribeLDAPSSettingsRequest;
(function (DescribeLDAPSSettingsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeLDAPSSettingsRequest");
    }
    DescribeLDAPSSettingsRequest.isa = isa;
})(DescribeLDAPSSettingsRequest = exports.DescribeLDAPSSettingsRequest || (exports.DescribeLDAPSSettingsRequest = {}));
var DescribeLDAPSSettingsResult;
(function (DescribeLDAPSSettingsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeLDAPSSettingsResult");
    }
    DescribeLDAPSSettingsResult.isa = isa;
})(DescribeLDAPSSettingsResult = exports.DescribeLDAPSSettingsResult || (exports.DescribeLDAPSSettingsResult = {}));
var DescribeSharedDirectoriesRequest;
(function (DescribeSharedDirectoriesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeSharedDirectoriesRequest");
    }
    DescribeSharedDirectoriesRequest.isa = isa;
})(DescribeSharedDirectoriesRequest = exports.DescribeSharedDirectoriesRequest || (exports.DescribeSharedDirectoriesRequest = {}));
var DescribeSharedDirectoriesResult;
(function (DescribeSharedDirectoriesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeSharedDirectoriesResult");
    }
    DescribeSharedDirectoriesResult.isa = isa;
})(DescribeSharedDirectoriesResult = exports.DescribeSharedDirectoriesResult || (exports.DescribeSharedDirectoriesResult = {}));
var DescribeSnapshotsRequest;
(function (DescribeSnapshotsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeSnapshotsRequest");
    }
    DescribeSnapshotsRequest.isa = isa;
})(DescribeSnapshotsRequest = exports.DescribeSnapshotsRequest || (exports.DescribeSnapshotsRequest = {}));
var DescribeSnapshotsResult;
(function (DescribeSnapshotsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeSnapshotsResult");
    }
    DescribeSnapshotsResult.isa = isa;
})(DescribeSnapshotsResult = exports.DescribeSnapshotsResult || (exports.DescribeSnapshotsResult = {}));
var DescribeTrustsRequest;
(function (DescribeTrustsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTrustsRequest");
    }
    DescribeTrustsRequest.isa = isa;
})(DescribeTrustsRequest = exports.DescribeTrustsRequest || (exports.DescribeTrustsRequest = {}));
var DescribeTrustsResult;
(function (DescribeTrustsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTrustsResult");
    }
    DescribeTrustsResult.isa = isa;
})(DescribeTrustsResult = exports.DescribeTrustsResult || (exports.DescribeTrustsResult = {}));
var DirectoryAlreadySharedException;
(function (DirectoryAlreadySharedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DirectoryAlreadySharedException");
    }
    DirectoryAlreadySharedException.isa = isa;
})(DirectoryAlreadySharedException = exports.DirectoryAlreadySharedException || (exports.DirectoryAlreadySharedException = {}));
var DirectoryConnectSettings;
(function (DirectoryConnectSettings) {
    function isa(o) {
        return smithy_client_1.isa(o, "DirectoryConnectSettings");
    }
    DirectoryConnectSettings.isa = isa;
})(DirectoryConnectSettings = exports.DirectoryConnectSettings || (exports.DirectoryConnectSettings = {}));
var DirectoryConnectSettingsDescription;
(function (DirectoryConnectSettingsDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "DirectoryConnectSettingsDescription");
    }
    DirectoryConnectSettingsDescription.isa = isa;
})(DirectoryConnectSettingsDescription = exports.DirectoryConnectSettingsDescription || (exports.DirectoryConnectSettingsDescription = {}));
var DirectoryDescription;
(function (DirectoryDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "DirectoryDescription");
    }
    DirectoryDescription.isa = isa;
})(DirectoryDescription = exports.DirectoryDescription || (exports.DirectoryDescription = {}));
var DirectoryDoesNotExistException;
(function (DirectoryDoesNotExistException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DirectoryDoesNotExistException");
    }
    DirectoryDoesNotExistException.isa = isa;
})(DirectoryDoesNotExistException = exports.DirectoryDoesNotExistException || (exports.DirectoryDoesNotExistException = {}));
var DirectoryEdition;
(function (DirectoryEdition) {
    DirectoryEdition["ENTERPRISE"] = "Enterprise";
    DirectoryEdition["STANDARD"] = "Standard";
})(DirectoryEdition = exports.DirectoryEdition || (exports.DirectoryEdition = {}));
var DirectoryLimitExceededException;
(function (DirectoryLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DirectoryLimitExceededException");
    }
    DirectoryLimitExceededException.isa = isa;
})(DirectoryLimitExceededException = exports.DirectoryLimitExceededException || (exports.DirectoryLimitExceededException = {}));
var DirectoryLimits;
(function (DirectoryLimits) {
    function isa(o) {
        return smithy_client_1.isa(o, "DirectoryLimits");
    }
    DirectoryLimits.isa = isa;
})(DirectoryLimits = exports.DirectoryLimits || (exports.DirectoryLimits = {}));
var DirectoryNotSharedException;
(function (DirectoryNotSharedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DirectoryNotSharedException");
    }
    DirectoryNotSharedException.isa = isa;
})(DirectoryNotSharedException = exports.DirectoryNotSharedException || (exports.DirectoryNotSharedException = {}));
var DirectorySize;
(function (DirectorySize) {
    DirectorySize["LARGE"] = "Large";
    DirectorySize["SMALL"] = "Small";
})(DirectorySize = exports.DirectorySize || (exports.DirectorySize = {}));
var DirectoryStage;
(function (DirectoryStage) {
    DirectoryStage["ACTIVE"] = "Active";
    DirectoryStage["CREATED"] = "Created";
    DirectoryStage["CREATING"] = "Creating";
    DirectoryStage["DELETED"] = "Deleted";
    DirectoryStage["DELETING"] = "Deleting";
    DirectoryStage["FAILED"] = "Failed";
    DirectoryStage["IMPAIRED"] = "Impaired";
    DirectoryStage["INOPERABLE"] = "Inoperable";
    DirectoryStage["REQUESTED"] = "Requested";
    DirectoryStage["RESTOREFAILED"] = "RestoreFailed";
    DirectoryStage["RESTORING"] = "Restoring";
})(DirectoryStage = exports.DirectoryStage || (exports.DirectoryStage = {}));
var DirectoryType;
(function (DirectoryType) {
    DirectoryType["AD_CONNECTOR"] = "ADConnector";
    DirectoryType["MICROSOFT_AD"] = "MicrosoftAD";
    DirectoryType["SHARED_MICROSOFT_AD"] = "SharedMicrosoftAD";
    DirectoryType["SIMPLE_AD"] = "SimpleAD";
})(DirectoryType = exports.DirectoryType || (exports.DirectoryType = {}));
var DirectoryUnavailableException;
(function (DirectoryUnavailableException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DirectoryUnavailableException");
    }
    DirectoryUnavailableException.isa = isa;
})(DirectoryUnavailableException = exports.DirectoryUnavailableException || (exports.DirectoryUnavailableException = {}));
var DirectoryVpcSettings;
(function (DirectoryVpcSettings) {
    function isa(o) {
        return smithy_client_1.isa(o, "DirectoryVpcSettings");
    }
    DirectoryVpcSettings.isa = isa;
})(DirectoryVpcSettings = exports.DirectoryVpcSettings || (exports.DirectoryVpcSettings = {}));
var DirectoryVpcSettingsDescription;
(function (DirectoryVpcSettingsDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "DirectoryVpcSettingsDescription");
    }
    DirectoryVpcSettingsDescription.isa = isa;
})(DirectoryVpcSettingsDescription = exports.DirectoryVpcSettingsDescription || (exports.DirectoryVpcSettingsDescription = {}));
var DisableLDAPSRequest;
(function (DisableLDAPSRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisableLDAPSRequest");
    }
    DisableLDAPSRequest.isa = isa;
})(DisableLDAPSRequest = exports.DisableLDAPSRequest || (exports.DisableLDAPSRequest = {}));
var DisableLDAPSResult;
(function (DisableLDAPSResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisableLDAPSResult");
    }
    DisableLDAPSResult.isa = isa;
})(DisableLDAPSResult = exports.DisableLDAPSResult || (exports.DisableLDAPSResult = {}));
var DisableRadiusRequest;
(function (DisableRadiusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisableRadiusRequest");
    }
    DisableRadiusRequest.isa = isa;
})(DisableRadiusRequest = exports.DisableRadiusRequest || (exports.DisableRadiusRequest = {}));
var DisableRadiusResult;
(function (DisableRadiusResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisableRadiusResult");
    }
    DisableRadiusResult.isa = isa;
})(DisableRadiusResult = exports.DisableRadiusResult || (exports.DisableRadiusResult = {}));
var DisableSsoRequest;
(function (DisableSsoRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisableSsoRequest");
    }
    DisableSsoRequest.isa = isa;
})(DisableSsoRequest = exports.DisableSsoRequest || (exports.DisableSsoRequest = {}));
var DisableSsoResult;
(function (DisableSsoResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisableSsoResult");
    }
    DisableSsoResult.isa = isa;
})(DisableSsoResult = exports.DisableSsoResult || (exports.DisableSsoResult = {}));
var DomainController;
(function (DomainController) {
    function isa(o) {
        return smithy_client_1.isa(o, "DomainController");
    }
    DomainController.isa = isa;
})(DomainController = exports.DomainController || (exports.DomainController = {}));
var DomainControllerLimitExceededException;
(function (DomainControllerLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DomainControllerLimitExceededException");
    }
    DomainControllerLimitExceededException.isa = isa;
})(DomainControllerLimitExceededException = exports.DomainControllerLimitExceededException || (exports.DomainControllerLimitExceededException = {}));
var DomainControllerStatus;
(function (DomainControllerStatus) {
    DomainControllerStatus["ACTIVE"] = "Active";
    DomainControllerStatus["CREATING"] = "Creating";
    DomainControllerStatus["DELETED"] = "Deleted";
    DomainControllerStatus["DELETING"] = "Deleting";
    DomainControllerStatus["FAILED"] = "Failed";
    DomainControllerStatus["IMPAIRED"] = "Impaired";
    DomainControllerStatus["RESTORING"] = "Restoring";
})(DomainControllerStatus = exports.DomainControllerStatus || (exports.DomainControllerStatus = {}));
var EnableLDAPSRequest;
(function (EnableLDAPSRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "EnableLDAPSRequest");
    }
    EnableLDAPSRequest.isa = isa;
})(EnableLDAPSRequest = exports.EnableLDAPSRequest || (exports.EnableLDAPSRequest = {}));
var EnableLDAPSResult;
(function (EnableLDAPSResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "EnableLDAPSResult");
    }
    EnableLDAPSResult.isa = isa;
})(EnableLDAPSResult = exports.EnableLDAPSResult || (exports.EnableLDAPSResult = {}));
var EnableRadiusRequest;
(function (EnableRadiusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "EnableRadiusRequest");
    }
    EnableRadiusRequest.isa = isa;
})(EnableRadiusRequest = exports.EnableRadiusRequest || (exports.EnableRadiusRequest = {}));
var EnableRadiusResult;
(function (EnableRadiusResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "EnableRadiusResult");
    }
    EnableRadiusResult.isa = isa;
})(EnableRadiusResult = exports.EnableRadiusResult || (exports.EnableRadiusResult = {}));
var EnableSsoRequest;
(function (EnableSsoRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "EnableSsoRequest");
    }
    EnableSsoRequest.isa = isa;
})(EnableSsoRequest = exports.EnableSsoRequest || (exports.EnableSsoRequest = {}));
var EnableSsoResult;
(function (EnableSsoResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "EnableSsoResult");
    }
    EnableSsoResult.isa = isa;
})(EnableSsoResult = exports.EnableSsoResult || (exports.EnableSsoResult = {}));
var EntityAlreadyExistsException;
(function (EntityAlreadyExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "EntityAlreadyExistsException");
    }
    EntityAlreadyExistsException.isa = isa;
})(EntityAlreadyExistsException = exports.EntityAlreadyExistsException || (exports.EntityAlreadyExistsException = {}));
var EntityDoesNotExistException;
(function (EntityDoesNotExistException) {
    function isa(o) {
        return smithy_client_1.isa(o, "EntityDoesNotExistException");
    }
    EntityDoesNotExistException.isa = isa;
})(EntityDoesNotExistException = exports.EntityDoesNotExistException || (exports.EntityDoesNotExistException = {}));
var EventTopic;
(function (EventTopic) {
    function isa(o) {
        return smithy_client_1.isa(o, "EventTopic");
    }
    EventTopic.isa = isa;
})(EventTopic = exports.EventTopic || (exports.EventTopic = {}));
var GetDirectoryLimitsRequest;
(function (GetDirectoryLimitsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDirectoryLimitsRequest");
    }
    GetDirectoryLimitsRequest.isa = isa;
})(GetDirectoryLimitsRequest = exports.GetDirectoryLimitsRequest || (exports.GetDirectoryLimitsRequest = {}));
var GetDirectoryLimitsResult;
(function (GetDirectoryLimitsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDirectoryLimitsResult");
    }
    GetDirectoryLimitsResult.isa = isa;
})(GetDirectoryLimitsResult = exports.GetDirectoryLimitsResult || (exports.GetDirectoryLimitsResult = {}));
var GetSnapshotLimitsRequest;
(function (GetSnapshotLimitsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSnapshotLimitsRequest");
    }
    GetSnapshotLimitsRequest.isa = isa;
})(GetSnapshotLimitsRequest = exports.GetSnapshotLimitsRequest || (exports.GetSnapshotLimitsRequest = {}));
var GetSnapshotLimitsResult;
(function (GetSnapshotLimitsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSnapshotLimitsResult");
    }
    GetSnapshotLimitsResult.isa = isa;
})(GetSnapshotLimitsResult = exports.GetSnapshotLimitsResult || (exports.GetSnapshotLimitsResult = {}));
var InsufficientPermissionsException;
(function (InsufficientPermissionsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InsufficientPermissionsException");
    }
    InsufficientPermissionsException.isa = isa;
})(InsufficientPermissionsException = exports.InsufficientPermissionsException || (exports.InsufficientPermissionsException = {}));
var InvalidCertificateException;
(function (InvalidCertificateException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidCertificateException");
    }
    InvalidCertificateException.isa = isa;
})(InvalidCertificateException = exports.InvalidCertificateException || (exports.InvalidCertificateException = {}));
var InvalidLDAPSStatusException;
(function (InvalidLDAPSStatusException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidLDAPSStatusException");
    }
    InvalidLDAPSStatusException.isa = isa;
})(InvalidLDAPSStatusException = exports.InvalidLDAPSStatusException || (exports.InvalidLDAPSStatusException = {}));
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
var InvalidPasswordException;
(function (InvalidPasswordException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidPasswordException");
    }
    InvalidPasswordException.isa = isa;
})(InvalidPasswordException = exports.InvalidPasswordException || (exports.InvalidPasswordException = {}));
var InvalidTargetException;
(function (InvalidTargetException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidTargetException");
    }
    InvalidTargetException.isa = isa;
})(InvalidTargetException = exports.InvalidTargetException || (exports.InvalidTargetException = {}));
var IpRoute;
(function (IpRoute) {
    function isa(o) {
        return smithy_client_1.isa(o, "IpRoute");
    }
    IpRoute.isa = isa;
})(IpRoute = exports.IpRoute || (exports.IpRoute = {}));
var IpRouteInfo;
(function (IpRouteInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "IpRouteInfo");
    }
    IpRouteInfo.isa = isa;
})(IpRouteInfo = exports.IpRouteInfo || (exports.IpRouteInfo = {}));
var IpRouteLimitExceededException;
(function (IpRouteLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "IpRouteLimitExceededException");
    }
    IpRouteLimitExceededException.isa = isa;
})(IpRouteLimitExceededException = exports.IpRouteLimitExceededException || (exports.IpRouteLimitExceededException = {}));
var IpRouteStatusMsg;
(function (IpRouteStatusMsg) {
    IpRouteStatusMsg["ADDED"] = "Added";
    IpRouteStatusMsg["ADDING"] = "Adding";
    IpRouteStatusMsg["ADD_FAILED"] = "AddFailed";
    IpRouteStatusMsg["REMOVED"] = "Removed";
    IpRouteStatusMsg["REMOVE_FAILED"] = "RemoveFailed";
    IpRouteStatusMsg["REMOVING"] = "Removing";
})(IpRouteStatusMsg = exports.IpRouteStatusMsg || (exports.IpRouteStatusMsg = {}));
var LDAPSSettingInfo;
(function (LDAPSSettingInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "LDAPSSettingInfo");
    }
    LDAPSSettingInfo.isa = isa;
})(LDAPSSettingInfo = exports.LDAPSSettingInfo || (exports.LDAPSSettingInfo = {}));
var LDAPSStatus;
(function (LDAPSStatus) {
    LDAPSStatus["DISABLED"] = "Disabled";
    LDAPSStatus["ENABLED"] = "Enabled";
    LDAPSStatus["ENABLE_FAILED"] = "EnableFailed";
    LDAPSStatus["ENABLING"] = "Enabling";
})(LDAPSStatus = exports.LDAPSStatus || (exports.LDAPSStatus = {}));
var LDAPSType;
(function (LDAPSType) {
    LDAPSType["CLIENT"] = "Client";
})(LDAPSType = exports.LDAPSType || (exports.LDAPSType = {}));
var ListCertificatesRequest;
(function (ListCertificatesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListCertificatesRequest");
    }
    ListCertificatesRequest.isa = isa;
})(ListCertificatesRequest = exports.ListCertificatesRequest || (exports.ListCertificatesRequest = {}));
var ListCertificatesResult;
(function (ListCertificatesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListCertificatesResult");
    }
    ListCertificatesResult.isa = isa;
})(ListCertificatesResult = exports.ListCertificatesResult || (exports.ListCertificatesResult = {}));
var ListIpRoutesRequest;
(function (ListIpRoutesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListIpRoutesRequest");
    }
    ListIpRoutesRequest.isa = isa;
})(ListIpRoutesRequest = exports.ListIpRoutesRequest || (exports.ListIpRoutesRequest = {}));
var ListIpRoutesResult;
(function (ListIpRoutesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListIpRoutesResult");
    }
    ListIpRoutesResult.isa = isa;
})(ListIpRoutesResult = exports.ListIpRoutesResult || (exports.ListIpRoutesResult = {}));
var ListLogSubscriptionsRequest;
(function (ListLogSubscriptionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListLogSubscriptionsRequest");
    }
    ListLogSubscriptionsRequest.isa = isa;
})(ListLogSubscriptionsRequest = exports.ListLogSubscriptionsRequest || (exports.ListLogSubscriptionsRequest = {}));
var ListLogSubscriptionsResult;
(function (ListLogSubscriptionsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListLogSubscriptionsResult");
    }
    ListLogSubscriptionsResult.isa = isa;
})(ListLogSubscriptionsResult = exports.ListLogSubscriptionsResult || (exports.ListLogSubscriptionsResult = {}));
var ListSchemaExtensionsRequest;
(function (ListSchemaExtensionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSchemaExtensionsRequest");
    }
    ListSchemaExtensionsRequest.isa = isa;
})(ListSchemaExtensionsRequest = exports.ListSchemaExtensionsRequest || (exports.ListSchemaExtensionsRequest = {}));
var ListSchemaExtensionsResult;
(function (ListSchemaExtensionsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSchemaExtensionsResult");
    }
    ListSchemaExtensionsResult.isa = isa;
})(ListSchemaExtensionsResult = exports.ListSchemaExtensionsResult || (exports.ListSchemaExtensionsResult = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsForResourceRequest");
    }
    ListTagsForResourceRequest.isa = isa;
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var ListTagsForResourceResult;
(function (ListTagsForResourceResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsForResourceResult");
    }
    ListTagsForResourceResult.isa = isa;
})(ListTagsForResourceResult = exports.ListTagsForResourceResult || (exports.ListTagsForResourceResult = {}));
var LogSubscription;
(function (LogSubscription) {
    function isa(o) {
        return smithy_client_1.isa(o, "LogSubscription");
    }
    LogSubscription.isa = isa;
})(LogSubscription = exports.LogSubscription || (exports.LogSubscription = {}));
var NoAvailableCertificateException;
(function (NoAvailableCertificateException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NoAvailableCertificateException");
    }
    NoAvailableCertificateException.isa = isa;
})(NoAvailableCertificateException = exports.NoAvailableCertificateException || (exports.NoAvailableCertificateException = {}));
var OrganizationsException;
(function (OrganizationsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "OrganizationsException");
    }
    OrganizationsException.isa = isa;
})(OrganizationsException = exports.OrganizationsException || (exports.OrganizationsException = {}));
var OwnerDirectoryDescription;
(function (OwnerDirectoryDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "OwnerDirectoryDescription");
    }
    OwnerDirectoryDescription.isa = isa;
})(OwnerDirectoryDescription = exports.OwnerDirectoryDescription || (exports.OwnerDirectoryDescription = {}));
var RadiusAuthenticationProtocol;
(function (RadiusAuthenticationProtocol) {
    RadiusAuthenticationProtocol["CHAP"] = "CHAP";
    RadiusAuthenticationProtocol["MSCHAPV1"] = "MS-CHAPv1";
    RadiusAuthenticationProtocol["MSCHAPV2"] = "MS-CHAPv2";
    RadiusAuthenticationProtocol["PAP"] = "PAP";
})(RadiusAuthenticationProtocol = exports.RadiusAuthenticationProtocol || (exports.RadiusAuthenticationProtocol = {}));
var RadiusSettings;
(function (RadiusSettings) {
    function isa(o) {
        return smithy_client_1.isa(o, "RadiusSettings");
    }
    RadiusSettings.isa = isa;
})(RadiusSettings = exports.RadiusSettings || (exports.RadiusSettings = {}));
var RadiusStatus;
(function (RadiusStatus) {
    RadiusStatus["COMPLETED"] = "Completed";
    RadiusStatus["CREATING"] = "Creating";
    RadiusStatus["FAILED"] = "Failed";
})(RadiusStatus = exports.RadiusStatus || (exports.RadiusStatus = {}));
var RegisterCertificateRequest;
(function (RegisterCertificateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegisterCertificateRequest");
    }
    RegisterCertificateRequest.isa = isa;
})(RegisterCertificateRequest = exports.RegisterCertificateRequest || (exports.RegisterCertificateRequest = {}));
var RegisterCertificateResult;
(function (RegisterCertificateResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegisterCertificateResult");
    }
    RegisterCertificateResult.isa = isa;
})(RegisterCertificateResult = exports.RegisterCertificateResult || (exports.RegisterCertificateResult = {}));
var RegisterEventTopicRequest;
(function (RegisterEventTopicRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegisterEventTopicRequest");
    }
    RegisterEventTopicRequest.isa = isa;
})(RegisterEventTopicRequest = exports.RegisterEventTopicRequest || (exports.RegisterEventTopicRequest = {}));
var RegisterEventTopicResult;
(function (RegisterEventTopicResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegisterEventTopicResult");
    }
    RegisterEventTopicResult.isa = isa;
})(RegisterEventTopicResult = exports.RegisterEventTopicResult || (exports.RegisterEventTopicResult = {}));
var RejectSharedDirectoryRequest;
(function (RejectSharedDirectoryRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RejectSharedDirectoryRequest");
    }
    RejectSharedDirectoryRequest.isa = isa;
})(RejectSharedDirectoryRequest = exports.RejectSharedDirectoryRequest || (exports.RejectSharedDirectoryRequest = {}));
var RejectSharedDirectoryResult;
(function (RejectSharedDirectoryResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "RejectSharedDirectoryResult");
    }
    RejectSharedDirectoryResult.isa = isa;
})(RejectSharedDirectoryResult = exports.RejectSharedDirectoryResult || (exports.RejectSharedDirectoryResult = {}));
var RemoveIpRoutesRequest;
(function (RemoveIpRoutesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RemoveIpRoutesRequest");
    }
    RemoveIpRoutesRequest.isa = isa;
})(RemoveIpRoutesRequest = exports.RemoveIpRoutesRequest || (exports.RemoveIpRoutesRequest = {}));
var RemoveIpRoutesResult;
(function (RemoveIpRoutesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "RemoveIpRoutesResult");
    }
    RemoveIpRoutesResult.isa = isa;
})(RemoveIpRoutesResult = exports.RemoveIpRoutesResult || (exports.RemoveIpRoutesResult = {}));
var RemoveTagsFromResourceRequest;
(function (RemoveTagsFromResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RemoveTagsFromResourceRequest");
    }
    RemoveTagsFromResourceRequest.isa = isa;
})(RemoveTagsFromResourceRequest = exports.RemoveTagsFromResourceRequest || (exports.RemoveTagsFromResourceRequest = {}));
var RemoveTagsFromResourceResult;
(function (RemoveTagsFromResourceResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "RemoveTagsFromResourceResult");
    }
    RemoveTagsFromResourceResult.isa = isa;
})(RemoveTagsFromResourceResult = exports.RemoveTagsFromResourceResult || (exports.RemoveTagsFromResourceResult = {}));
var ReplicationScope;
(function (ReplicationScope) {
    ReplicationScope["Domain"] = "Domain";
})(ReplicationScope = exports.ReplicationScope || (exports.ReplicationScope = {}));
var ResetUserPasswordRequest;
(function (ResetUserPasswordRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResetUserPasswordRequest");
    }
    ResetUserPasswordRequest.isa = isa;
})(ResetUserPasswordRequest = exports.ResetUserPasswordRequest || (exports.ResetUserPasswordRequest = {}));
var ResetUserPasswordResult;
(function (ResetUserPasswordResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResetUserPasswordResult");
    }
    ResetUserPasswordResult.isa = isa;
})(ResetUserPasswordResult = exports.ResetUserPasswordResult || (exports.ResetUserPasswordResult = {}));
var RestoreFromSnapshotRequest;
(function (RestoreFromSnapshotRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RestoreFromSnapshotRequest");
    }
    RestoreFromSnapshotRequest.isa = isa;
})(RestoreFromSnapshotRequest = exports.RestoreFromSnapshotRequest || (exports.RestoreFromSnapshotRequest = {}));
var RestoreFromSnapshotResult;
(function (RestoreFromSnapshotResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "RestoreFromSnapshotResult");
    }
    RestoreFromSnapshotResult.isa = isa;
})(RestoreFromSnapshotResult = exports.RestoreFromSnapshotResult || (exports.RestoreFromSnapshotResult = {}));
var SchemaExtensionInfo;
(function (SchemaExtensionInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "SchemaExtensionInfo");
    }
    SchemaExtensionInfo.isa = isa;
})(SchemaExtensionInfo = exports.SchemaExtensionInfo || (exports.SchemaExtensionInfo = {}));
var SchemaExtensionStatus;
(function (SchemaExtensionStatus) {
    SchemaExtensionStatus["CANCELLED"] = "Cancelled";
    SchemaExtensionStatus["CANCEL_IN_PROGRESS"] = "CancelInProgress";
    SchemaExtensionStatus["COMPLETED"] = "Completed";
    SchemaExtensionStatus["CREATING_SNAPSHOT"] = "CreatingSnapshot";
    SchemaExtensionStatus["FAILED"] = "Failed";
    SchemaExtensionStatus["INITIALIZING"] = "Initializing";
    SchemaExtensionStatus["REPLICATING"] = "Replicating";
    SchemaExtensionStatus["ROLLBACK_IN_PROGRESS"] = "RollbackInProgress";
    SchemaExtensionStatus["UPDATING_SCHEMA"] = "UpdatingSchema";
})(SchemaExtensionStatus = exports.SchemaExtensionStatus || (exports.SchemaExtensionStatus = {}));
var SelectiveAuth;
(function (SelectiveAuth) {
    SelectiveAuth["DISABLED"] = "Disabled";
    SelectiveAuth["ENABLED"] = "Enabled";
})(SelectiveAuth = exports.SelectiveAuth || (exports.SelectiveAuth = {}));
var ServiceException;
(function (ServiceException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceException");
    }
    ServiceException.isa = isa;
})(ServiceException = exports.ServiceException || (exports.ServiceException = {}));
var ShareDirectoryRequest;
(function (ShareDirectoryRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ShareDirectoryRequest");
    }
    ShareDirectoryRequest.isa = isa;
})(ShareDirectoryRequest = exports.ShareDirectoryRequest || (exports.ShareDirectoryRequest = {}));
var ShareDirectoryResult;
(function (ShareDirectoryResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ShareDirectoryResult");
    }
    ShareDirectoryResult.isa = isa;
})(ShareDirectoryResult = exports.ShareDirectoryResult || (exports.ShareDirectoryResult = {}));
var ShareLimitExceededException;
(function (ShareLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ShareLimitExceededException");
    }
    ShareLimitExceededException.isa = isa;
})(ShareLimitExceededException = exports.ShareLimitExceededException || (exports.ShareLimitExceededException = {}));
var ShareMethod;
(function (ShareMethod) {
    ShareMethod["HANDSHAKE"] = "HANDSHAKE";
    ShareMethod["ORGANIZATIONS"] = "ORGANIZATIONS";
})(ShareMethod = exports.ShareMethod || (exports.ShareMethod = {}));
var ShareStatus;
(function (ShareStatus) {
    ShareStatus["DELETED"] = "Deleted";
    ShareStatus["DELETING"] = "Deleting";
    ShareStatus["PENDING_ACCEPTANCE"] = "PendingAcceptance";
    ShareStatus["REJECTED"] = "Rejected";
    ShareStatus["REJECTING"] = "Rejecting";
    ShareStatus["REJECT_FAILED"] = "RejectFailed";
    ShareStatus["SHARED"] = "Shared";
    ShareStatus["SHARE_FAILED"] = "ShareFailed";
    ShareStatus["SHARING"] = "Sharing";
})(ShareStatus = exports.ShareStatus || (exports.ShareStatus = {}));
var ShareTarget;
(function (ShareTarget) {
    function isa(o) {
        return smithy_client_1.isa(o, "ShareTarget");
    }
    ShareTarget.isa = isa;
})(ShareTarget = exports.ShareTarget || (exports.ShareTarget = {}));
var SharedDirectory;
(function (SharedDirectory) {
    function isa(o) {
        return smithy_client_1.isa(o, "SharedDirectory");
    }
    SharedDirectory.isa = isa;
})(SharedDirectory = exports.SharedDirectory || (exports.SharedDirectory = {}));
var Snapshot;
(function (Snapshot) {
    function isa(o) {
        return smithy_client_1.isa(o, "Snapshot");
    }
    Snapshot.isa = isa;
})(Snapshot = exports.Snapshot || (exports.Snapshot = {}));
var SnapshotLimitExceededException;
(function (SnapshotLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "SnapshotLimitExceededException");
    }
    SnapshotLimitExceededException.isa = isa;
})(SnapshotLimitExceededException = exports.SnapshotLimitExceededException || (exports.SnapshotLimitExceededException = {}));
var SnapshotLimits;
(function (SnapshotLimits) {
    function isa(o) {
        return smithy_client_1.isa(o, "SnapshotLimits");
    }
    SnapshotLimits.isa = isa;
})(SnapshotLimits = exports.SnapshotLimits || (exports.SnapshotLimits = {}));
var SnapshotStatus;
(function (SnapshotStatus) {
    SnapshotStatus["COMPLETED"] = "Completed";
    SnapshotStatus["CREATING"] = "Creating";
    SnapshotStatus["FAILED"] = "Failed";
})(SnapshotStatus = exports.SnapshotStatus || (exports.SnapshotStatus = {}));
var SnapshotType;
(function (SnapshotType) {
    SnapshotType["AUTO"] = "Auto";
    SnapshotType["MANUAL"] = "Manual";
})(SnapshotType = exports.SnapshotType || (exports.SnapshotType = {}));
var StartSchemaExtensionRequest;
(function (StartSchemaExtensionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartSchemaExtensionRequest");
    }
    StartSchemaExtensionRequest.isa = isa;
})(StartSchemaExtensionRequest = exports.StartSchemaExtensionRequest || (exports.StartSchemaExtensionRequest = {}));
var StartSchemaExtensionResult;
(function (StartSchemaExtensionResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartSchemaExtensionResult");
    }
    StartSchemaExtensionResult.isa = isa;
})(StartSchemaExtensionResult = exports.StartSchemaExtensionResult || (exports.StartSchemaExtensionResult = {}));
var Tag;
(function (Tag) {
    function isa(o) {
        return smithy_client_1.isa(o, "Tag");
    }
    Tag.isa = isa;
})(Tag = exports.Tag || (exports.Tag = {}));
var TagLimitExceededException;
(function (TagLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagLimitExceededException");
    }
    TagLimitExceededException.isa = isa;
})(TagLimitExceededException = exports.TagLimitExceededException || (exports.TagLimitExceededException = {}));
var TargetType;
(function (TargetType) {
    TargetType["ACCOUNT"] = "ACCOUNT";
})(TargetType = exports.TargetType || (exports.TargetType = {}));
var TopicStatus;
(function (TopicStatus) {
    TopicStatus["DELETED"] = "Deleted";
    TopicStatus["FAILED"] = "Failed";
    TopicStatus["REGISTERED"] = "Registered";
    TopicStatus["TOPIC_NOT_FOUND"] = "Topic not found";
})(TopicStatus = exports.TopicStatus || (exports.TopicStatus = {}));
var Trust;
(function (Trust) {
    function isa(o) {
        return smithy_client_1.isa(o, "Trust");
    }
    Trust.isa = isa;
})(Trust = exports.Trust || (exports.Trust = {}));
var TrustDirection;
(function (TrustDirection) {
    TrustDirection["ONE_WAY_INCOMING"] = "One-Way: Incoming";
    TrustDirection["ONE_WAY_OUTGOING"] = "One-Way: Outgoing";
    TrustDirection["TWO_WAY"] = "Two-Way";
})(TrustDirection = exports.TrustDirection || (exports.TrustDirection = {}));
var TrustState;
(function (TrustState) {
    TrustState["CREATED"] = "Created";
    TrustState["CREATING"] = "Creating";
    TrustState["DELETED"] = "Deleted";
    TrustState["DELETING"] = "Deleting";
    TrustState["FAILED"] = "Failed";
    TrustState["UPDATED"] = "Updated";
    TrustState["UPDATE_FAILED"] = "UpdateFailed";
    TrustState["UPDATING"] = "Updating";
    TrustState["VERIFIED"] = "Verified";
    TrustState["VERIFYING"] = "Verifying";
    TrustState["VERIFY_FAILED"] = "VerifyFailed";
})(TrustState = exports.TrustState || (exports.TrustState = {}));
var TrustType;
(function (TrustType) {
    TrustType["EXTERNAL"] = "External";
    TrustType["FOREST"] = "Forest";
})(TrustType = exports.TrustType || (exports.TrustType = {}));
var UnshareDirectoryRequest;
(function (UnshareDirectoryRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnshareDirectoryRequest");
    }
    UnshareDirectoryRequest.isa = isa;
})(UnshareDirectoryRequest = exports.UnshareDirectoryRequest || (exports.UnshareDirectoryRequest = {}));
var UnshareDirectoryResult;
(function (UnshareDirectoryResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnshareDirectoryResult");
    }
    UnshareDirectoryResult.isa = isa;
})(UnshareDirectoryResult = exports.UnshareDirectoryResult || (exports.UnshareDirectoryResult = {}));
var UnshareTarget;
(function (UnshareTarget) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnshareTarget");
    }
    UnshareTarget.isa = isa;
})(UnshareTarget = exports.UnshareTarget || (exports.UnshareTarget = {}));
var UnsupportedOperationException;
(function (UnsupportedOperationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnsupportedOperationException");
    }
    UnsupportedOperationException.isa = isa;
})(UnsupportedOperationException = exports.UnsupportedOperationException || (exports.UnsupportedOperationException = {}));
var UpdateConditionalForwarderRequest;
(function (UpdateConditionalForwarderRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateConditionalForwarderRequest");
    }
    UpdateConditionalForwarderRequest.isa = isa;
})(UpdateConditionalForwarderRequest = exports.UpdateConditionalForwarderRequest || (exports.UpdateConditionalForwarderRequest = {}));
var UpdateConditionalForwarderResult;
(function (UpdateConditionalForwarderResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateConditionalForwarderResult");
    }
    UpdateConditionalForwarderResult.isa = isa;
})(UpdateConditionalForwarderResult = exports.UpdateConditionalForwarderResult || (exports.UpdateConditionalForwarderResult = {}));
var UpdateNumberOfDomainControllersRequest;
(function (UpdateNumberOfDomainControllersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateNumberOfDomainControllersRequest");
    }
    UpdateNumberOfDomainControllersRequest.isa = isa;
})(UpdateNumberOfDomainControllersRequest = exports.UpdateNumberOfDomainControllersRequest || (exports.UpdateNumberOfDomainControllersRequest = {}));
var UpdateNumberOfDomainControllersResult;
(function (UpdateNumberOfDomainControllersResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateNumberOfDomainControllersResult");
    }
    UpdateNumberOfDomainControllersResult.isa = isa;
})(UpdateNumberOfDomainControllersResult = exports.UpdateNumberOfDomainControllersResult || (exports.UpdateNumberOfDomainControllersResult = {}));
var UpdateRadiusRequest;
(function (UpdateRadiusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateRadiusRequest");
    }
    UpdateRadiusRequest.isa = isa;
})(UpdateRadiusRequest = exports.UpdateRadiusRequest || (exports.UpdateRadiusRequest = {}));
var UpdateRadiusResult;
(function (UpdateRadiusResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateRadiusResult");
    }
    UpdateRadiusResult.isa = isa;
})(UpdateRadiusResult = exports.UpdateRadiusResult || (exports.UpdateRadiusResult = {}));
var UpdateTrustRequest;
(function (UpdateTrustRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateTrustRequest");
    }
    UpdateTrustRequest.isa = isa;
})(UpdateTrustRequest = exports.UpdateTrustRequest || (exports.UpdateTrustRequest = {}));
var UpdateTrustResult;
(function (UpdateTrustResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateTrustResult");
    }
    UpdateTrustResult.isa = isa;
})(UpdateTrustResult = exports.UpdateTrustResult || (exports.UpdateTrustResult = {}));
var UserDoesNotExistException;
(function (UserDoesNotExistException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UserDoesNotExistException");
    }
    UserDoesNotExistException.isa = isa;
})(UserDoesNotExistException = exports.UserDoesNotExistException || (exports.UserDoesNotExistException = {}));
var VerifyTrustRequest;
(function (VerifyTrustRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "VerifyTrustRequest");
    }
    VerifyTrustRequest.isa = isa;
})(VerifyTrustRequest = exports.VerifyTrustRequest || (exports.VerifyTrustRequest = {}));
var VerifyTrustResult;
(function (VerifyTrustResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "VerifyTrustResult");
    }
    VerifyTrustResult.isa = isa;
})(VerifyTrustResult = exports.VerifyTrustResult || (exports.VerifyTrustResult = {}));
//# sourceMappingURL=index.js.map