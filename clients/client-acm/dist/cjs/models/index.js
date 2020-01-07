"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AddTagsToCertificateRequest;
(function (AddTagsToCertificateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddTagsToCertificateRequest");
    }
    AddTagsToCertificateRequest.isa = isa;
})(AddTagsToCertificateRequest = exports.AddTagsToCertificateRequest || (exports.AddTagsToCertificateRequest = {}));
var CertificateDetail;
(function (CertificateDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "CertificateDetail");
    }
    CertificateDetail.isa = isa;
})(CertificateDetail = exports.CertificateDetail || (exports.CertificateDetail = {}));
var CertificateOptions;
(function (CertificateOptions) {
    function isa(o) {
        return smithy_client_1.isa(o, "CertificateOptions");
    }
    CertificateOptions.isa = isa;
})(CertificateOptions = exports.CertificateOptions || (exports.CertificateOptions = {}));
var CertificateStatus;
(function (CertificateStatus) {
    CertificateStatus["EXPIRED"] = "EXPIRED";
    CertificateStatus["FAILED"] = "FAILED";
    CertificateStatus["INACTIVE"] = "INACTIVE";
    CertificateStatus["ISSUED"] = "ISSUED";
    CertificateStatus["PENDING_VALIDATION"] = "PENDING_VALIDATION";
    CertificateStatus["REVOKED"] = "REVOKED";
    CertificateStatus["VALIDATION_TIMED_OUT"] = "VALIDATION_TIMED_OUT";
})(CertificateStatus = exports.CertificateStatus || (exports.CertificateStatus = {}));
var CertificateSummary;
(function (CertificateSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "CertificateSummary");
    }
    CertificateSummary.isa = isa;
})(CertificateSummary = exports.CertificateSummary || (exports.CertificateSummary = {}));
var CertificateTransparencyLoggingPreference;
(function (CertificateTransparencyLoggingPreference) {
    CertificateTransparencyLoggingPreference["DISABLED"] = "DISABLED";
    CertificateTransparencyLoggingPreference["ENABLED"] = "ENABLED";
})(CertificateTransparencyLoggingPreference = exports.CertificateTransparencyLoggingPreference || (exports.CertificateTransparencyLoggingPreference = {}));
var CertificateType;
(function (CertificateType) {
    CertificateType["AMAZON_ISSUED"] = "AMAZON_ISSUED";
    CertificateType["IMPORTED"] = "IMPORTED";
    CertificateType["PRIVATE"] = "PRIVATE";
})(CertificateType = exports.CertificateType || (exports.CertificateType = {}));
var DeleteCertificateRequest;
(function (DeleteCertificateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteCertificateRequest");
    }
    DeleteCertificateRequest.isa = isa;
})(DeleteCertificateRequest = exports.DeleteCertificateRequest || (exports.DeleteCertificateRequest = {}));
var DescribeCertificateRequest;
(function (DescribeCertificateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeCertificateRequest");
    }
    DescribeCertificateRequest.isa = isa;
})(DescribeCertificateRequest = exports.DescribeCertificateRequest || (exports.DescribeCertificateRequest = {}));
var DescribeCertificateResponse;
(function (DescribeCertificateResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeCertificateResponse");
    }
    DescribeCertificateResponse.isa = isa;
})(DescribeCertificateResponse = exports.DescribeCertificateResponse || (exports.DescribeCertificateResponse = {}));
var DomainStatus;
(function (DomainStatus) {
    DomainStatus["FAILED"] = "FAILED";
    DomainStatus["PENDING_VALIDATION"] = "PENDING_VALIDATION";
    DomainStatus["SUCCESS"] = "SUCCESS";
})(DomainStatus = exports.DomainStatus || (exports.DomainStatus = {}));
var DomainValidation;
(function (DomainValidation) {
    function isa(o) {
        return smithy_client_1.isa(o, "DomainValidation");
    }
    DomainValidation.isa = isa;
})(DomainValidation = exports.DomainValidation || (exports.DomainValidation = {}));
var DomainValidationOption;
(function (DomainValidationOption) {
    function isa(o) {
        return smithy_client_1.isa(o, "DomainValidationOption");
    }
    DomainValidationOption.isa = isa;
})(DomainValidationOption = exports.DomainValidationOption || (exports.DomainValidationOption = {}));
var ExportCertificateRequest;
(function (ExportCertificateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExportCertificateRequest");
    }
    ExportCertificateRequest.isa = isa;
})(ExportCertificateRequest = exports.ExportCertificateRequest || (exports.ExportCertificateRequest = {}));
var ExportCertificateResponse;
(function (ExportCertificateResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExportCertificateResponse");
    }
    ExportCertificateResponse.isa = isa;
})(ExportCertificateResponse = exports.ExportCertificateResponse || (exports.ExportCertificateResponse = {}));
var ExtendedKeyUsage;
(function (ExtendedKeyUsage) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExtendedKeyUsage");
    }
    ExtendedKeyUsage.isa = isa;
})(ExtendedKeyUsage = exports.ExtendedKeyUsage || (exports.ExtendedKeyUsage = {}));
var ExtendedKeyUsageName;
(function (ExtendedKeyUsageName) {
    ExtendedKeyUsageName["ANY"] = "ANY";
    ExtendedKeyUsageName["CODE_SIGNING"] = "CODE_SIGNING";
    ExtendedKeyUsageName["CUSTOM"] = "CUSTOM";
    ExtendedKeyUsageName["EMAIL_PROTECTION"] = "EMAIL_PROTECTION";
    ExtendedKeyUsageName["IPSEC_END_SYSTEM"] = "IPSEC_END_SYSTEM";
    ExtendedKeyUsageName["IPSEC_TUNNEL"] = "IPSEC_TUNNEL";
    ExtendedKeyUsageName["IPSEC_USER"] = "IPSEC_USER";
    ExtendedKeyUsageName["NONE"] = "NONE";
    ExtendedKeyUsageName["OCSP_SIGNING"] = "OCSP_SIGNING";
    ExtendedKeyUsageName["TIME_STAMPING"] = "TIME_STAMPING";
    ExtendedKeyUsageName["TLS_WEB_CLIENT_AUTHENTICATION"] = "TLS_WEB_CLIENT_AUTHENTICATION";
    ExtendedKeyUsageName["TLS_WEB_SERVER_AUTHENTICATION"] = "TLS_WEB_SERVER_AUTHENTICATION";
})(ExtendedKeyUsageName = exports.ExtendedKeyUsageName || (exports.ExtendedKeyUsageName = {}));
var FailureReason;
(function (FailureReason) {
    FailureReason["ADDITIONAL_VERIFICATION_REQUIRED"] = "ADDITIONAL_VERIFICATION_REQUIRED";
    FailureReason["CAA_ERROR"] = "CAA_ERROR";
    FailureReason["DOMAIN_NOT_ALLOWED"] = "DOMAIN_NOT_ALLOWED";
    FailureReason["DOMAIN_VALIDATION_DENIED"] = "DOMAIN_VALIDATION_DENIED";
    FailureReason["INVALID_PUBLIC_DOMAIN"] = "INVALID_PUBLIC_DOMAIN";
    FailureReason["NO_AVAILABLE_CONTACTS"] = "NO_AVAILABLE_CONTACTS";
    FailureReason["OTHER"] = "OTHER";
    FailureReason["PCA_ACCESS_DENIED"] = "PCA_ACCESS_DENIED";
    FailureReason["PCA_INVALID_ARGS"] = "PCA_INVALID_ARGS";
    FailureReason["PCA_INVALID_ARN"] = "PCA_INVALID_ARN";
    FailureReason["PCA_INVALID_DURATION"] = "PCA_INVALID_DURATION";
    FailureReason["PCA_INVALID_STATE"] = "PCA_INVALID_STATE";
    FailureReason["PCA_LIMIT_EXCEEDED"] = "PCA_LIMIT_EXCEEDED";
    FailureReason["PCA_NAME_CONSTRAINTS_VALIDATION"] = "PCA_NAME_CONSTRAINTS_VALIDATION";
    FailureReason["PCA_REQUEST_FAILED"] = "PCA_REQUEST_FAILED";
    FailureReason["PCA_RESOURCE_NOT_FOUND"] = "PCA_RESOURCE_NOT_FOUND";
})(FailureReason = exports.FailureReason || (exports.FailureReason = {}));
var Filters;
(function (Filters) {
    function isa(o) {
        return smithy_client_1.isa(o, "Filters");
    }
    Filters.isa = isa;
})(Filters = exports.Filters || (exports.Filters = {}));
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
var ImportCertificateRequest;
(function (ImportCertificateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ImportCertificateRequest");
    }
    ImportCertificateRequest.isa = isa;
})(ImportCertificateRequest = exports.ImportCertificateRequest || (exports.ImportCertificateRequest = {}));
var ImportCertificateResponse;
(function (ImportCertificateResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ImportCertificateResponse");
    }
    ImportCertificateResponse.isa = isa;
})(ImportCertificateResponse = exports.ImportCertificateResponse || (exports.ImportCertificateResponse = {}));
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
var InvalidDomainValidationOptionsException;
(function (InvalidDomainValidationOptionsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidDomainValidationOptionsException");
    }
    InvalidDomainValidationOptionsException.isa = isa;
})(InvalidDomainValidationOptionsException = exports.InvalidDomainValidationOptionsException || (exports.InvalidDomainValidationOptionsException = {}));
var InvalidParameterException;
(function (InvalidParameterException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidParameterException");
    }
    InvalidParameterException.isa = isa;
})(InvalidParameterException = exports.InvalidParameterException || (exports.InvalidParameterException = {}));
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
var KeyAlgorithm;
(function (KeyAlgorithm) {
    KeyAlgorithm["EC_prime256v1"] = "EC_prime256v1";
    KeyAlgorithm["EC_secp384r1"] = "EC_secp384r1";
    KeyAlgorithm["EC_secp521r1"] = "EC_secp521r1";
    KeyAlgorithm["RSA_1024"] = "RSA_1024";
    KeyAlgorithm["RSA_2048"] = "RSA_2048";
    KeyAlgorithm["RSA_4096"] = "RSA_4096";
})(KeyAlgorithm = exports.KeyAlgorithm || (exports.KeyAlgorithm = {}));
var KeyUsage;
(function (KeyUsage) {
    function isa(o) {
        return smithy_client_1.isa(o, "KeyUsage");
    }
    KeyUsage.isa = isa;
})(KeyUsage = exports.KeyUsage || (exports.KeyUsage = {}));
var KeyUsageName;
(function (KeyUsageName) {
    KeyUsageName["ANY"] = "ANY";
    KeyUsageName["CERTIFICATE_SIGNING"] = "CERTIFICATE_SIGNING";
    KeyUsageName["CRL_SIGNING"] = "CRL_SIGNING";
    KeyUsageName["CUSTOM"] = "CUSTOM";
    KeyUsageName["DATA_ENCIPHERMENT"] = "DATA_ENCIPHERMENT";
    KeyUsageName["DECIPHER_ONLY"] = "DECIPHER_ONLY";
    KeyUsageName["DIGITAL_SIGNATURE"] = "DIGITAL_SIGNATURE";
    KeyUsageName["ENCHIPER_ONLY"] = "ENCIPHER_ONLY";
    KeyUsageName["KEY_AGREEMENT"] = "KEY_AGREEMENT";
    KeyUsageName["KEY_ENCIPHERMENT"] = "KEY_ENCIPHERMENT";
    KeyUsageName["NON_REPUDATION"] = "NON_REPUDIATION";
})(KeyUsageName = exports.KeyUsageName || (exports.KeyUsageName = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ListCertificatesRequest;
(function (ListCertificatesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListCertificatesRequest");
    }
    ListCertificatesRequest.isa = isa;
})(ListCertificatesRequest = exports.ListCertificatesRequest || (exports.ListCertificatesRequest = {}));
var ListCertificatesResponse;
(function (ListCertificatesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListCertificatesResponse");
    }
    ListCertificatesResponse.isa = isa;
})(ListCertificatesResponse = exports.ListCertificatesResponse || (exports.ListCertificatesResponse = {}));
var ListTagsForCertificateRequest;
(function (ListTagsForCertificateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsForCertificateRequest");
    }
    ListTagsForCertificateRequest.isa = isa;
})(ListTagsForCertificateRequest = exports.ListTagsForCertificateRequest || (exports.ListTagsForCertificateRequest = {}));
var ListTagsForCertificateResponse;
(function (ListTagsForCertificateResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsForCertificateResponse");
    }
    ListTagsForCertificateResponse.isa = isa;
})(ListTagsForCertificateResponse = exports.ListTagsForCertificateResponse || (exports.ListTagsForCertificateResponse = {}));
var RecordType;
(function (RecordType) {
    RecordType["CNAME"] = "CNAME";
})(RecordType = exports.RecordType || (exports.RecordType = {}));
var RemoveTagsFromCertificateRequest;
(function (RemoveTagsFromCertificateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RemoveTagsFromCertificateRequest");
    }
    RemoveTagsFromCertificateRequest.isa = isa;
})(RemoveTagsFromCertificateRequest = exports.RemoveTagsFromCertificateRequest || (exports.RemoveTagsFromCertificateRequest = {}));
var RenewCertificateRequest;
(function (RenewCertificateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RenewCertificateRequest");
    }
    RenewCertificateRequest.isa = isa;
})(RenewCertificateRequest = exports.RenewCertificateRequest || (exports.RenewCertificateRequest = {}));
var RenewalEligibility;
(function (RenewalEligibility) {
    RenewalEligibility["ELIGIBLE"] = "ELIGIBLE";
    RenewalEligibility["INELIGIBLE"] = "INELIGIBLE";
})(RenewalEligibility = exports.RenewalEligibility || (exports.RenewalEligibility = {}));
var RenewalStatus;
(function (RenewalStatus) {
    RenewalStatus["FAILED"] = "FAILED";
    RenewalStatus["PENDING_AUTO_RENEWAL"] = "PENDING_AUTO_RENEWAL";
    RenewalStatus["PENDING_VALIDATION"] = "PENDING_VALIDATION";
    RenewalStatus["SUCCESS"] = "SUCCESS";
})(RenewalStatus = exports.RenewalStatus || (exports.RenewalStatus = {}));
var RenewalSummary;
(function (RenewalSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "RenewalSummary");
    }
    RenewalSummary.isa = isa;
})(RenewalSummary = exports.RenewalSummary || (exports.RenewalSummary = {}));
var RequestCertificateRequest;
(function (RequestCertificateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RequestCertificateRequest");
    }
    RequestCertificateRequest.isa = isa;
})(RequestCertificateRequest = exports.RequestCertificateRequest || (exports.RequestCertificateRequest = {}));
var RequestCertificateResponse;
(function (RequestCertificateResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "RequestCertificateResponse");
    }
    RequestCertificateResponse.isa = isa;
})(RequestCertificateResponse = exports.RequestCertificateResponse || (exports.RequestCertificateResponse = {}));
var RequestInProgressException;
(function (RequestInProgressException) {
    function isa(o) {
        return smithy_client_1.isa(o, "RequestInProgressException");
    }
    RequestInProgressException.isa = isa;
})(RequestInProgressException = exports.RequestInProgressException || (exports.RequestInProgressException = {}));
var ResendValidationEmailRequest;
(function (ResendValidationEmailRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResendValidationEmailRequest");
    }
    ResendValidationEmailRequest.isa = isa;
})(ResendValidationEmailRequest = exports.ResendValidationEmailRequest || (exports.ResendValidationEmailRequest = {}));
var ResourceInUseException;
(function (ResourceInUseException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceInUseException");
    }
    ResourceInUseException.isa = isa;
})(ResourceInUseException = exports.ResourceInUseException || (exports.ResourceInUseException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNotFoundException");
    }
    ResourceNotFoundException.isa = isa;
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ResourceRecord;
(function (ResourceRecord) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceRecord");
    }
    ResourceRecord.isa = isa;
})(ResourceRecord = exports.ResourceRecord || (exports.ResourceRecord = {}));
var RevocationReason;
(function (RevocationReason) {
    RevocationReason["AFFILIATION_CHANGED"] = "AFFILIATION_CHANGED";
    RevocationReason["A_A_COMPROMISE"] = "A_A_COMPROMISE";
    RevocationReason["CA_COMPROMISE"] = "CA_COMPROMISE";
    RevocationReason["CERTIFICATE_HOLD"] = "CERTIFICATE_HOLD";
    RevocationReason["CESSATION_OF_OPERATION"] = "CESSATION_OF_OPERATION";
    RevocationReason["KEY_COMPROMISE"] = "KEY_COMPROMISE";
    RevocationReason["PRIVILEGE_WITHDRAWN"] = "PRIVILEGE_WITHDRAWN";
    RevocationReason["REMOVE_FROM_CRL"] = "REMOVE_FROM_CRL";
    RevocationReason["SUPERCEDED"] = "SUPERCEDED";
    RevocationReason["UNSPECIFIED"] = "UNSPECIFIED";
})(RevocationReason = exports.RevocationReason || (exports.RevocationReason = {}));
var Tag;
(function (Tag) {
    function isa(o) {
        return smithy_client_1.isa(o, "Tag");
    }
    Tag.isa = isa;
})(Tag = exports.Tag || (exports.Tag = {}));
var TagPolicyException;
(function (TagPolicyException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagPolicyException");
    }
    TagPolicyException.isa = isa;
})(TagPolicyException = exports.TagPolicyException || (exports.TagPolicyException = {}));
var TooManyTagsException;
(function (TooManyTagsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TooManyTagsException");
    }
    TooManyTagsException.isa = isa;
})(TooManyTagsException = exports.TooManyTagsException || (exports.TooManyTagsException = {}));
var UpdateCertificateOptionsRequest;
(function (UpdateCertificateOptionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateCertificateOptionsRequest");
    }
    UpdateCertificateOptionsRequest.isa = isa;
})(UpdateCertificateOptionsRequest = exports.UpdateCertificateOptionsRequest || (exports.UpdateCertificateOptionsRequest = {}));
var ValidationMethod;
(function (ValidationMethod) {
    ValidationMethod["DNS"] = "DNS";
    ValidationMethod["EMAIL"] = "EMAIL";
})(ValidationMethod = exports.ValidationMethod || (exports.ValidationMethod = {}));
//# sourceMappingURL=index.js.map