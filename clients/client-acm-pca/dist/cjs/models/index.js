"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var ASN1Subject;
(function (ASN1Subject) {
    function isa(o) {
        return smithy_client_1.isa(o, "ASN1Subject");
    }
    ASN1Subject.isa = isa;
})(ASN1Subject = exports.ASN1Subject || (exports.ASN1Subject = {}));
var ActionType;
(function (ActionType) {
    ActionType["GetCertificate"] = "GetCertificate";
    ActionType["IssueCertificate"] = "IssueCertificate";
    ActionType["ListPermissions"] = "ListPermissions";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
var AuditReportResponseFormat;
(function (AuditReportResponseFormat) {
    AuditReportResponseFormat["CSV"] = "CSV";
    AuditReportResponseFormat["JSON"] = "JSON";
})(AuditReportResponseFormat = exports.AuditReportResponseFormat || (exports.AuditReportResponseFormat = {}));
var AuditReportStatus;
(function (AuditReportStatus) {
    AuditReportStatus["CREATING"] = "CREATING";
    AuditReportStatus["FAILED"] = "FAILED";
    AuditReportStatus["SUCCESS"] = "SUCCESS";
})(AuditReportStatus = exports.AuditReportStatus || (exports.AuditReportStatus = {}));
var CertificateAuthority;
(function (CertificateAuthority) {
    function isa(o) {
        return smithy_client_1.isa(o, "CertificateAuthority");
    }
    CertificateAuthority.isa = isa;
})(CertificateAuthority = exports.CertificateAuthority || (exports.CertificateAuthority = {}));
var CertificateAuthorityConfiguration;
(function (CertificateAuthorityConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "CertificateAuthorityConfiguration");
    }
    CertificateAuthorityConfiguration.isa = isa;
})(CertificateAuthorityConfiguration = exports.CertificateAuthorityConfiguration || (exports.CertificateAuthorityConfiguration = {}));
var CertificateAuthorityStatus;
(function (CertificateAuthorityStatus) {
    CertificateAuthorityStatus["ACTIVE"] = "ACTIVE";
    CertificateAuthorityStatus["CREATING"] = "CREATING";
    CertificateAuthorityStatus["DELETED"] = "DELETED";
    CertificateAuthorityStatus["DISABLED"] = "DISABLED";
    CertificateAuthorityStatus["EXPIRED"] = "EXPIRED";
    CertificateAuthorityStatus["FAILED"] = "FAILED";
    CertificateAuthorityStatus["PENDING_CERTIFICATE"] = "PENDING_CERTIFICATE";
})(CertificateAuthorityStatus = exports.CertificateAuthorityStatus || (exports.CertificateAuthorityStatus = {}));
var CertificateAuthorityType;
(function (CertificateAuthorityType) {
    CertificateAuthorityType["ROOT"] = "ROOT";
    CertificateAuthorityType["SUBORDINATE"] = "SUBORDINATE";
})(CertificateAuthorityType = exports.CertificateAuthorityType || (exports.CertificateAuthorityType = {}));
var CertificateMismatchException;
(function (CertificateMismatchException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CertificateMismatchException");
    }
    CertificateMismatchException.isa = isa;
})(CertificateMismatchException = exports.CertificateMismatchException || (exports.CertificateMismatchException = {}));
var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConcurrentModificationException");
    }
    ConcurrentModificationException.isa = isa;
})(ConcurrentModificationException = exports.ConcurrentModificationException || (exports.ConcurrentModificationException = {}));
var CreateCertificateAuthorityAuditReportRequest;
(function (CreateCertificateAuthorityAuditReportRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateCertificateAuthorityAuditReportRequest");
    }
    CreateCertificateAuthorityAuditReportRequest.isa = isa;
})(CreateCertificateAuthorityAuditReportRequest = exports.CreateCertificateAuthorityAuditReportRequest || (exports.CreateCertificateAuthorityAuditReportRequest = {}));
var CreateCertificateAuthorityAuditReportResponse;
(function (CreateCertificateAuthorityAuditReportResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateCertificateAuthorityAuditReportResponse");
    }
    CreateCertificateAuthorityAuditReportResponse.isa = isa;
})(CreateCertificateAuthorityAuditReportResponse = exports.CreateCertificateAuthorityAuditReportResponse || (exports.CreateCertificateAuthorityAuditReportResponse = {}));
var CreateCertificateAuthorityRequest;
(function (CreateCertificateAuthorityRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateCertificateAuthorityRequest");
    }
    CreateCertificateAuthorityRequest.isa = isa;
})(CreateCertificateAuthorityRequest = exports.CreateCertificateAuthorityRequest || (exports.CreateCertificateAuthorityRequest = {}));
var CreateCertificateAuthorityResponse;
(function (CreateCertificateAuthorityResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateCertificateAuthorityResponse");
    }
    CreateCertificateAuthorityResponse.isa = isa;
})(CreateCertificateAuthorityResponse = exports.CreateCertificateAuthorityResponse || (exports.CreateCertificateAuthorityResponse = {}));
var CreatePermissionRequest;
(function (CreatePermissionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreatePermissionRequest");
    }
    CreatePermissionRequest.isa = isa;
})(CreatePermissionRequest = exports.CreatePermissionRequest || (exports.CreatePermissionRequest = {}));
var CrlConfiguration;
(function (CrlConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "CrlConfiguration");
    }
    CrlConfiguration.isa = isa;
})(CrlConfiguration = exports.CrlConfiguration || (exports.CrlConfiguration = {}));
var DeleteCertificateAuthorityRequest;
(function (DeleteCertificateAuthorityRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteCertificateAuthorityRequest");
    }
    DeleteCertificateAuthorityRequest.isa = isa;
})(DeleteCertificateAuthorityRequest = exports.DeleteCertificateAuthorityRequest || (exports.DeleteCertificateAuthorityRequest = {}));
var DeletePermissionRequest;
(function (DeletePermissionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeletePermissionRequest");
    }
    DeletePermissionRequest.isa = isa;
})(DeletePermissionRequest = exports.DeletePermissionRequest || (exports.DeletePermissionRequest = {}));
var DescribeCertificateAuthorityAuditReportRequest;
(function (DescribeCertificateAuthorityAuditReportRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeCertificateAuthorityAuditReportRequest");
    }
    DescribeCertificateAuthorityAuditReportRequest.isa = isa;
})(DescribeCertificateAuthorityAuditReportRequest = exports.DescribeCertificateAuthorityAuditReportRequest || (exports.DescribeCertificateAuthorityAuditReportRequest = {}));
var DescribeCertificateAuthorityAuditReportResponse;
(function (DescribeCertificateAuthorityAuditReportResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeCertificateAuthorityAuditReportResponse");
    }
    DescribeCertificateAuthorityAuditReportResponse.isa = isa;
})(DescribeCertificateAuthorityAuditReportResponse = exports.DescribeCertificateAuthorityAuditReportResponse || (exports.DescribeCertificateAuthorityAuditReportResponse = {}));
var DescribeCertificateAuthorityRequest;
(function (DescribeCertificateAuthorityRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeCertificateAuthorityRequest");
    }
    DescribeCertificateAuthorityRequest.isa = isa;
})(DescribeCertificateAuthorityRequest = exports.DescribeCertificateAuthorityRequest || (exports.DescribeCertificateAuthorityRequest = {}));
var DescribeCertificateAuthorityResponse;
(function (DescribeCertificateAuthorityResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeCertificateAuthorityResponse");
    }
    DescribeCertificateAuthorityResponse.isa = isa;
})(DescribeCertificateAuthorityResponse = exports.DescribeCertificateAuthorityResponse || (exports.DescribeCertificateAuthorityResponse = {}));
var FailureReason;
(function (FailureReason) {
    FailureReason["OTHER"] = "OTHER";
    FailureReason["REQUEST_TIMED_OUT"] = "REQUEST_TIMED_OUT";
    FailureReason["UNSUPPORTED_ALGORITHM"] = "UNSUPPORTED_ALGORITHM";
})(FailureReason = exports.FailureReason || (exports.FailureReason = {}));
var GetCertificateAuthorityCertificateRequest;
(function (GetCertificateAuthorityCertificateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCertificateAuthorityCertificateRequest");
    }
    GetCertificateAuthorityCertificateRequest.isa = isa;
})(GetCertificateAuthorityCertificateRequest = exports.GetCertificateAuthorityCertificateRequest || (exports.GetCertificateAuthorityCertificateRequest = {}));
var GetCertificateAuthorityCertificateResponse;
(function (GetCertificateAuthorityCertificateResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCertificateAuthorityCertificateResponse");
    }
    GetCertificateAuthorityCertificateResponse.isa = isa;
})(GetCertificateAuthorityCertificateResponse = exports.GetCertificateAuthorityCertificateResponse || (exports.GetCertificateAuthorityCertificateResponse = {}));
var GetCertificateAuthorityCsrRequest;
(function (GetCertificateAuthorityCsrRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCertificateAuthorityCsrRequest");
    }
    GetCertificateAuthorityCsrRequest.isa = isa;
})(GetCertificateAuthorityCsrRequest = exports.GetCertificateAuthorityCsrRequest || (exports.GetCertificateAuthorityCsrRequest = {}));
var GetCertificateAuthorityCsrResponse;
(function (GetCertificateAuthorityCsrResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCertificateAuthorityCsrResponse");
    }
    GetCertificateAuthorityCsrResponse.isa = isa;
})(GetCertificateAuthorityCsrResponse = exports.GetCertificateAuthorityCsrResponse || (exports.GetCertificateAuthorityCsrResponse = {}));
var GetCertificateRequest;
(function (GetCertificateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCertificateRequest");
    }
    GetCertificateRequest.isa = isa;
})(GetCertificateRequest = exports.GetCertificateRequest || (exports.GetCertificateRequest = {}));
var GetCertificateResponse;
(function (GetCertificateResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCertificateResponse");
    }
    GetCertificateResponse.isa = isa;
})(GetCertificateResponse = exports.GetCertificateResponse || (exports.GetCertificateResponse = {}));
var ImportCertificateAuthorityCertificateRequest;
(function (ImportCertificateAuthorityCertificateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ImportCertificateAuthorityCertificateRequest");
    }
    ImportCertificateAuthorityCertificateRequest.isa = isa;
})(ImportCertificateAuthorityCertificateRequest = exports.ImportCertificateAuthorityCertificateRequest || (exports.ImportCertificateAuthorityCertificateRequest = {}));
var InvalidArgsException;
(function (InvalidArgsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidArgsException");
    }
    InvalidArgsException.isa = isa;
})(InvalidArgsException = exports.InvalidArgsException || (exports.InvalidArgsException = {}));
var InvalidArnException;
(function (InvalidArnException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidArnException");
    }
    InvalidArnException.isa = isa;
})(InvalidArnException = exports.InvalidArnException || (exports.InvalidArnException = {}));
var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidNextTokenException");
    }
    InvalidNextTokenException.isa = isa;
})(InvalidNextTokenException = exports.InvalidNextTokenException || (exports.InvalidNextTokenException = {}));
var InvalidPolicyException;
(function (InvalidPolicyException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidPolicyException");
    }
    InvalidPolicyException.isa = isa;
})(InvalidPolicyException = exports.InvalidPolicyException || (exports.InvalidPolicyException = {}));
var InvalidRequestException;
(function (InvalidRequestException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidRequestException");
    }
    InvalidRequestException.isa = isa;
})(InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {}));
var InvalidStateException;
(function (InvalidStateException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidStateException");
    }
    InvalidStateException.isa = isa;
})(InvalidStateException = exports.InvalidStateException || (exports.InvalidStateException = {}));
var InvalidTagException;
(function (InvalidTagException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidTagException");
    }
    InvalidTagException.isa = isa;
})(InvalidTagException = exports.InvalidTagException || (exports.InvalidTagException = {}));
var IssueCertificateRequest;
(function (IssueCertificateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "IssueCertificateRequest");
    }
    IssueCertificateRequest.isa = isa;
})(IssueCertificateRequest = exports.IssueCertificateRequest || (exports.IssueCertificateRequest = {}));
var IssueCertificateResponse;
(function (IssueCertificateResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "IssueCertificateResponse");
    }
    IssueCertificateResponse.isa = isa;
})(IssueCertificateResponse = exports.IssueCertificateResponse || (exports.IssueCertificateResponse = {}));
var KeyAlgorithm;
(function (KeyAlgorithm) {
    KeyAlgorithm["EC_prime256v1"] = "EC_prime256v1";
    KeyAlgorithm["EC_secp384r1"] = "EC_secp384r1";
    KeyAlgorithm["RSA_2048"] = "RSA_2048";
    KeyAlgorithm["RSA_4096"] = "RSA_4096";
})(KeyAlgorithm = exports.KeyAlgorithm || (exports.KeyAlgorithm = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ListCertificateAuthoritiesRequest;
(function (ListCertificateAuthoritiesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListCertificateAuthoritiesRequest");
    }
    ListCertificateAuthoritiesRequest.isa = isa;
})(ListCertificateAuthoritiesRequest = exports.ListCertificateAuthoritiesRequest || (exports.ListCertificateAuthoritiesRequest = {}));
var ListCertificateAuthoritiesResponse;
(function (ListCertificateAuthoritiesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListCertificateAuthoritiesResponse");
    }
    ListCertificateAuthoritiesResponse.isa = isa;
})(ListCertificateAuthoritiesResponse = exports.ListCertificateAuthoritiesResponse || (exports.ListCertificateAuthoritiesResponse = {}));
var ListPermissionsRequest;
(function (ListPermissionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListPermissionsRequest");
    }
    ListPermissionsRequest.isa = isa;
})(ListPermissionsRequest = exports.ListPermissionsRequest || (exports.ListPermissionsRequest = {}));
var ListPermissionsResponse;
(function (ListPermissionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListPermissionsResponse");
    }
    ListPermissionsResponse.isa = isa;
})(ListPermissionsResponse = exports.ListPermissionsResponse || (exports.ListPermissionsResponse = {}));
var ListTagsRequest;
(function (ListTagsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsRequest");
    }
    ListTagsRequest.isa = isa;
})(ListTagsRequest = exports.ListTagsRequest || (exports.ListTagsRequest = {}));
var ListTagsResponse;
(function (ListTagsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsResponse");
    }
    ListTagsResponse.isa = isa;
})(ListTagsResponse = exports.ListTagsResponse || (exports.ListTagsResponse = {}));
var MalformedCSRException;
(function (MalformedCSRException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MalformedCSRException");
    }
    MalformedCSRException.isa = isa;
})(MalformedCSRException = exports.MalformedCSRException || (exports.MalformedCSRException = {}));
var MalformedCertificateException;
(function (MalformedCertificateException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MalformedCertificateException");
    }
    MalformedCertificateException.isa = isa;
})(MalformedCertificateException = exports.MalformedCertificateException || (exports.MalformedCertificateException = {}));
var Permission;
(function (Permission) {
    function isa(o) {
        return smithy_client_1.isa(o, "Permission");
    }
    Permission.isa = isa;
})(Permission = exports.Permission || (exports.Permission = {}));
var PermissionAlreadyExistsException;
(function (PermissionAlreadyExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PermissionAlreadyExistsException");
    }
    PermissionAlreadyExistsException.isa = isa;
})(PermissionAlreadyExistsException = exports.PermissionAlreadyExistsException || (exports.PermissionAlreadyExistsException = {}));
var RequestAlreadyProcessedException;
(function (RequestAlreadyProcessedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "RequestAlreadyProcessedException");
    }
    RequestAlreadyProcessedException.isa = isa;
})(RequestAlreadyProcessedException = exports.RequestAlreadyProcessedException || (exports.RequestAlreadyProcessedException = {}));
var RequestFailedException;
(function (RequestFailedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "RequestFailedException");
    }
    RequestFailedException.isa = isa;
})(RequestFailedException = exports.RequestFailedException || (exports.RequestFailedException = {}));
var RequestInProgressException;
(function (RequestInProgressException) {
    function isa(o) {
        return smithy_client_1.isa(o, "RequestInProgressException");
    }
    RequestInProgressException.isa = isa;
})(RequestInProgressException = exports.RequestInProgressException || (exports.RequestInProgressException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNotFoundException");
    }
    ResourceNotFoundException.isa = isa;
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var RestoreCertificateAuthorityRequest;
(function (RestoreCertificateAuthorityRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RestoreCertificateAuthorityRequest");
    }
    RestoreCertificateAuthorityRequest.isa = isa;
})(RestoreCertificateAuthorityRequest = exports.RestoreCertificateAuthorityRequest || (exports.RestoreCertificateAuthorityRequest = {}));
var RevocationConfiguration;
(function (RevocationConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "RevocationConfiguration");
    }
    RevocationConfiguration.isa = isa;
})(RevocationConfiguration = exports.RevocationConfiguration || (exports.RevocationConfiguration = {}));
var RevocationReason;
(function (RevocationReason) {
    RevocationReason["AFFILIATION_CHANGED"] = "AFFILIATION_CHANGED";
    RevocationReason["A_A_COMPROMISE"] = "A_A_COMPROMISE";
    RevocationReason["CERTIFICATE_AUTHORITY_COMPROMISE"] = "CERTIFICATE_AUTHORITY_COMPROMISE";
    RevocationReason["CESSATION_OF_OPERATION"] = "CESSATION_OF_OPERATION";
    RevocationReason["KEY_COMPROMISE"] = "KEY_COMPROMISE";
    RevocationReason["PRIVILEGE_WITHDRAWN"] = "PRIVILEGE_WITHDRAWN";
    RevocationReason["SUPERSEDED"] = "SUPERSEDED";
    RevocationReason["UNSPECIFIED"] = "UNSPECIFIED";
})(RevocationReason = exports.RevocationReason || (exports.RevocationReason = {}));
var RevokeCertificateRequest;
(function (RevokeCertificateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RevokeCertificateRequest");
    }
    RevokeCertificateRequest.isa = isa;
})(RevokeCertificateRequest = exports.RevokeCertificateRequest || (exports.RevokeCertificateRequest = {}));
var SigningAlgorithm;
(function (SigningAlgorithm) {
    SigningAlgorithm["SHA256WITHECDSA"] = "SHA256WITHECDSA";
    SigningAlgorithm["SHA256WITHRSA"] = "SHA256WITHRSA";
    SigningAlgorithm["SHA384WITHECDSA"] = "SHA384WITHECDSA";
    SigningAlgorithm["SHA384WITHRSA"] = "SHA384WITHRSA";
    SigningAlgorithm["SHA512WITHECDSA"] = "SHA512WITHECDSA";
    SigningAlgorithm["SHA512WITHRSA"] = "SHA512WITHRSA";
})(SigningAlgorithm = exports.SigningAlgorithm || (exports.SigningAlgorithm = {}));
var Tag;
(function (Tag) {
    function isa(o) {
        return smithy_client_1.isa(o, "Tag");
    }
    Tag.isa = isa;
})(Tag = exports.Tag || (exports.Tag = {}));
var TagCertificateAuthorityRequest;
(function (TagCertificateAuthorityRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagCertificateAuthorityRequest");
    }
    TagCertificateAuthorityRequest.isa = isa;
})(TagCertificateAuthorityRequest = exports.TagCertificateAuthorityRequest || (exports.TagCertificateAuthorityRequest = {}));
var TooManyTagsException;
(function (TooManyTagsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TooManyTagsException");
    }
    TooManyTagsException.isa = isa;
})(TooManyTagsException = exports.TooManyTagsException || (exports.TooManyTagsException = {}));
var UntagCertificateAuthorityRequest;
(function (UntagCertificateAuthorityRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagCertificateAuthorityRequest");
    }
    UntagCertificateAuthorityRequest.isa = isa;
})(UntagCertificateAuthorityRequest = exports.UntagCertificateAuthorityRequest || (exports.UntagCertificateAuthorityRequest = {}));
var UpdateCertificateAuthorityRequest;
(function (UpdateCertificateAuthorityRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateCertificateAuthorityRequest");
    }
    UpdateCertificateAuthorityRequest.isa = isa;
})(UpdateCertificateAuthorityRequest = exports.UpdateCertificateAuthorityRequest || (exports.UpdateCertificateAuthorityRequest = {}));
var Validity;
(function (Validity) {
    function isa(o) {
        return smithy_client_1.isa(o, "Validity");
    }
    Validity.isa = isa;
})(Validity = exports.Validity || (exports.Validity = {}));
var ValidityPeriodType;
(function (ValidityPeriodType) {
    ValidityPeriodType["ABSOLUTE"] = "ABSOLUTE";
    ValidityPeriodType["DAYS"] = "DAYS";
    ValidityPeriodType["END_DATE"] = "END_DATE";
    ValidityPeriodType["MONTHS"] = "MONTHS";
    ValidityPeriodType["YEARS"] = "YEARS";
})(ValidityPeriodType = exports.ValidityPeriodType || (exports.ValidityPeriodType = {}));
//# sourceMappingURL=index.js.map