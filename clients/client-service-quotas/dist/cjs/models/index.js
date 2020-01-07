"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AWSServiceAccessNotEnabledException;
(function (AWSServiceAccessNotEnabledException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AWSServiceAccessNotEnabledException");
    }
    AWSServiceAccessNotEnabledException.isa = isa;
})(AWSServiceAccessNotEnabledException = exports.AWSServiceAccessNotEnabledException || (exports.AWSServiceAccessNotEnabledException = {}));
var AccessDeniedException;
(function (AccessDeniedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AccessDeniedException");
    }
    AccessDeniedException.isa = isa;
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var AssociateServiceQuotaTemplateRequest;
(function (AssociateServiceQuotaTemplateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateServiceQuotaTemplateRequest");
    }
    AssociateServiceQuotaTemplateRequest.isa = isa;
})(AssociateServiceQuotaTemplateRequest = exports.AssociateServiceQuotaTemplateRequest || (exports.AssociateServiceQuotaTemplateRequest = {}));
var AssociateServiceQuotaTemplateResponse;
(function (AssociateServiceQuotaTemplateResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateServiceQuotaTemplateResponse");
    }
    AssociateServiceQuotaTemplateResponse.isa = isa;
})(AssociateServiceQuotaTemplateResponse = exports.AssociateServiceQuotaTemplateResponse || (exports.AssociateServiceQuotaTemplateResponse = {}));
var DeleteServiceQuotaIncreaseRequestFromTemplateRequest;
(function (DeleteServiceQuotaIncreaseRequestFromTemplateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteServiceQuotaIncreaseRequestFromTemplateRequest");
    }
    DeleteServiceQuotaIncreaseRequestFromTemplateRequest.isa = isa;
})(DeleteServiceQuotaIncreaseRequestFromTemplateRequest = exports.DeleteServiceQuotaIncreaseRequestFromTemplateRequest || (exports.DeleteServiceQuotaIncreaseRequestFromTemplateRequest = {}));
var DeleteServiceQuotaIncreaseRequestFromTemplateResponse;
(function (DeleteServiceQuotaIncreaseRequestFromTemplateResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteServiceQuotaIncreaseRequestFromTemplateResponse");
    }
    DeleteServiceQuotaIncreaseRequestFromTemplateResponse.isa = isa;
})(DeleteServiceQuotaIncreaseRequestFromTemplateResponse = exports.DeleteServiceQuotaIncreaseRequestFromTemplateResponse || (exports.DeleteServiceQuotaIncreaseRequestFromTemplateResponse = {}));
var DependencyAccessDeniedException;
(function (DependencyAccessDeniedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DependencyAccessDeniedException");
    }
    DependencyAccessDeniedException.isa = isa;
})(DependencyAccessDeniedException = exports.DependencyAccessDeniedException || (exports.DependencyAccessDeniedException = {}));
var DisassociateServiceQuotaTemplateRequest;
(function (DisassociateServiceQuotaTemplateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateServiceQuotaTemplateRequest");
    }
    DisassociateServiceQuotaTemplateRequest.isa = isa;
})(DisassociateServiceQuotaTemplateRequest = exports.DisassociateServiceQuotaTemplateRequest || (exports.DisassociateServiceQuotaTemplateRequest = {}));
var DisassociateServiceQuotaTemplateResponse;
(function (DisassociateServiceQuotaTemplateResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateServiceQuotaTemplateResponse");
    }
    DisassociateServiceQuotaTemplateResponse.isa = isa;
})(DisassociateServiceQuotaTemplateResponse = exports.DisassociateServiceQuotaTemplateResponse || (exports.DisassociateServiceQuotaTemplateResponse = {}));
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["DEPENDENCY_ACCESS_DENIED_ERROR"] = "DEPENDENCY_ACCESS_DENIED_ERROR";
    ErrorCode["DEPENDENCY_SERVICE_ERROR"] = "DEPENDENCY_SERVICE_ERROR";
    ErrorCode["DEPENDENCY_THROTTLING_ERROR"] = "DEPENDENCY_THROTTLING_ERROR";
    ErrorCode["SERVICE_QUOTA_NOT_AVAILABLE_ERROR"] = "SERVICE_QUOTA_NOT_AVAILABLE_ERROR";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
var ErrorReason;
(function (ErrorReason) {
    function isa(o) {
        return smithy_client_1.isa(o, "ErrorReason");
    }
    ErrorReason.isa = isa;
})(ErrorReason = exports.ErrorReason || (exports.ErrorReason = {}));
var GetAWSDefaultServiceQuotaRequest;
(function (GetAWSDefaultServiceQuotaRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAWSDefaultServiceQuotaRequest");
    }
    GetAWSDefaultServiceQuotaRequest.isa = isa;
})(GetAWSDefaultServiceQuotaRequest = exports.GetAWSDefaultServiceQuotaRequest || (exports.GetAWSDefaultServiceQuotaRequest = {}));
var GetAWSDefaultServiceQuotaResponse;
(function (GetAWSDefaultServiceQuotaResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAWSDefaultServiceQuotaResponse");
    }
    GetAWSDefaultServiceQuotaResponse.isa = isa;
})(GetAWSDefaultServiceQuotaResponse = exports.GetAWSDefaultServiceQuotaResponse || (exports.GetAWSDefaultServiceQuotaResponse = {}));
var GetAssociationForServiceQuotaTemplateRequest;
(function (GetAssociationForServiceQuotaTemplateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAssociationForServiceQuotaTemplateRequest");
    }
    GetAssociationForServiceQuotaTemplateRequest.isa = isa;
})(GetAssociationForServiceQuotaTemplateRequest = exports.GetAssociationForServiceQuotaTemplateRequest || (exports.GetAssociationForServiceQuotaTemplateRequest = {}));
var GetAssociationForServiceQuotaTemplateResponse;
(function (GetAssociationForServiceQuotaTemplateResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAssociationForServiceQuotaTemplateResponse");
    }
    GetAssociationForServiceQuotaTemplateResponse.isa = isa;
})(GetAssociationForServiceQuotaTemplateResponse = exports.GetAssociationForServiceQuotaTemplateResponse || (exports.GetAssociationForServiceQuotaTemplateResponse = {}));
var GetRequestedServiceQuotaChangeRequest;
(function (GetRequestedServiceQuotaChangeRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRequestedServiceQuotaChangeRequest");
    }
    GetRequestedServiceQuotaChangeRequest.isa = isa;
})(GetRequestedServiceQuotaChangeRequest = exports.GetRequestedServiceQuotaChangeRequest || (exports.GetRequestedServiceQuotaChangeRequest = {}));
var GetRequestedServiceQuotaChangeResponse;
(function (GetRequestedServiceQuotaChangeResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRequestedServiceQuotaChangeResponse");
    }
    GetRequestedServiceQuotaChangeResponse.isa = isa;
})(GetRequestedServiceQuotaChangeResponse = exports.GetRequestedServiceQuotaChangeResponse || (exports.GetRequestedServiceQuotaChangeResponse = {}));
var GetServiceQuotaIncreaseRequestFromTemplateRequest;
(function (GetServiceQuotaIncreaseRequestFromTemplateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetServiceQuotaIncreaseRequestFromTemplateRequest");
    }
    GetServiceQuotaIncreaseRequestFromTemplateRequest.isa = isa;
})(GetServiceQuotaIncreaseRequestFromTemplateRequest = exports.GetServiceQuotaIncreaseRequestFromTemplateRequest || (exports.GetServiceQuotaIncreaseRequestFromTemplateRequest = {}));
var GetServiceQuotaIncreaseRequestFromTemplateResponse;
(function (GetServiceQuotaIncreaseRequestFromTemplateResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetServiceQuotaIncreaseRequestFromTemplateResponse");
    }
    GetServiceQuotaIncreaseRequestFromTemplateResponse.isa = isa;
})(GetServiceQuotaIncreaseRequestFromTemplateResponse = exports.GetServiceQuotaIncreaseRequestFromTemplateResponse || (exports.GetServiceQuotaIncreaseRequestFromTemplateResponse = {}));
var GetServiceQuotaRequest;
(function (GetServiceQuotaRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetServiceQuotaRequest");
    }
    GetServiceQuotaRequest.isa = isa;
})(GetServiceQuotaRequest = exports.GetServiceQuotaRequest || (exports.GetServiceQuotaRequest = {}));
var GetServiceQuotaResponse;
(function (GetServiceQuotaResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetServiceQuotaResponse");
    }
    GetServiceQuotaResponse.isa = isa;
})(GetServiceQuotaResponse = exports.GetServiceQuotaResponse || (exports.GetServiceQuotaResponse = {}));
var IllegalArgumentException;
(function (IllegalArgumentException) {
    function isa(o) {
        return smithy_client_1.isa(o, "IllegalArgumentException");
    }
    IllegalArgumentException.isa = isa;
})(IllegalArgumentException = exports.IllegalArgumentException || (exports.IllegalArgumentException = {}));
var InvalidPaginationTokenException;
(function (InvalidPaginationTokenException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidPaginationTokenException");
    }
    InvalidPaginationTokenException.isa = isa;
})(InvalidPaginationTokenException = exports.InvalidPaginationTokenException || (exports.InvalidPaginationTokenException = {}));
var InvalidResourceStateException;
(function (InvalidResourceStateException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidResourceStateException");
    }
    InvalidResourceStateException.isa = isa;
})(InvalidResourceStateException = exports.InvalidResourceStateException || (exports.InvalidResourceStateException = {}));
var ListAWSDefaultServiceQuotasRequest;
(function (ListAWSDefaultServiceQuotasRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAWSDefaultServiceQuotasRequest");
    }
    ListAWSDefaultServiceQuotasRequest.isa = isa;
})(ListAWSDefaultServiceQuotasRequest = exports.ListAWSDefaultServiceQuotasRequest || (exports.ListAWSDefaultServiceQuotasRequest = {}));
var ListAWSDefaultServiceQuotasResponse;
(function (ListAWSDefaultServiceQuotasResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAWSDefaultServiceQuotasResponse");
    }
    ListAWSDefaultServiceQuotasResponse.isa = isa;
})(ListAWSDefaultServiceQuotasResponse = exports.ListAWSDefaultServiceQuotasResponse || (exports.ListAWSDefaultServiceQuotasResponse = {}));
var ListRequestedServiceQuotaChangeHistoryByQuotaRequest;
(function (ListRequestedServiceQuotaChangeHistoryByQuotaRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListRequestedServiceQuotaChangeHistoryByQuotaRequest");
    }
    ListRequestedServiceQuotaChangeHistoryByQuotaRequest.isa = isa;
})(ListRequestedServiceQuotaChangeHistoryByQuotaRequest = exports.ListRequestedServiceQuotaChangeHistoryByQuotaRequest || (exports.ListRequestedServiceQuotaChangeHistoryByQuotaRequest = {}));
var ListRequestedServiceQuotaChangeHistoryByQuotaResponse;
(function (ListRequestedServiceQuotaChangeHistoryByQuotaResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListRequestedServiceQuotaChangeHistoryByQuotaResponse");
    }
    ListRequestedServiceQuotaChangeHistoryByQuotaResponse.isa = isa;
})(ListRequestedServiceQuotaChangeHistoryByQuotaResponse = exports.ListRequestedServiceQuotaChangeHistoryByQuotaResponse || (exports.ListRequestedServiceQuotaChangeHistoryByQuotaResponse = {}));
var ListRequestedServiceQuotaChangeHistoryRequest;
(function (ListRequestedServiceQuotaChangeHistoryRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListRequestedServiceQuotaChangeHistoryRequest");
    }
    ListRequestedServiceQuotaChangeHistoryRequest.isa = isa;
})(ListRequestedServiceQuotaChangeHistoryRequest = exports.ListRequestedServiceQuotaChangeHistoryRequest || (exports.ListRequestedServiceQuotaChangeHistoryRequest = {}));
var ListRequestedServiceQuotaChangeHistoryResponse;
(function (ListRequestedServiceQuotaChangeHistoryResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListRequestedServiceQuotaChangeHistoryResponse");
    }
    ListRequestedServiceQuotaChangeHistoryResponse.isa = isa;
})(ListRequestedServiceQuotaChangeHistoryResponse = exports.ListRequestedServiceQuotaChangeHistoryResponse || (exports.ListRequestedServiceQuotaChangeHistoryResponse = {}));
var ListServiceQuotaIncreaseRequestsInTemplateRequest;
(function (ListServiceQuotaIncreaseRequestsInTemplateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListServiceQuotaIncreaseRequestsInTemplateRequest");
    }
    ListServiceQuotaIncreaseRequestsInTemplateRequest.isa = isa;
})(ListServiceQuotaIncreaseRequestsInTemplateRequest = exports.ListServiceQuotaIncreaseRequestsInTemplateRequest || (exports.ListServiceQuotaIncreaseRequestsInTemplateRequest = {}));
var ListServiceQuotaIncreaseRequestsInTemplateResponse;
(function (ListServiceQuotaIncreaseRequestsInTemplateResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListServiceQuotaIncreaseRequestsInTemplateResponse");
    }
    ListServiceQuotaIncreaseRequestsInTemplateResponse.isa = isa;
})(ListServiceQuotaIncreaseRequestsInTemplateResponse = exports.ListServiceQuotaIncreaseRequestsInTemplateResponse || (exports.ListServiceQuotaIncreaseRequestsInTemplateResponse = {}));
var ListServiceQuotasRequest;
(function (ListServiceQuotasRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListServiceQuotasRequest");
    }
    ListServiceQuotasRequest.isa = isa;
})(ListServiceQuotasRequest = exports.ListServiceQuotasRequest || (exports.ListServiceQuotasRequest = {}));
var ListServiceQuotasResponse;
(function (ListServiceQuotasResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListServiceQuotasResponse");
    }
    ListServiceQuotasResponse.isa = isa;
})(ListServiceQuotasResponse = exports.ListServiceQuotasResponse || (exports.ListServiceQuotasResponse = {}));
var ListServicesRequest;
(function (ListServicesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListServicesRequest");
    }
    ListServicesRequest.isa = isa;
})(ListServicesRequest = exports.ListServicesRequest || (exports.ListServicesRequest = {}));
var ListServicesResponse;
(function (ListServicesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListServicesResponse");
    }
    ListServicesResponse.isa = isa;
})(ListServicesResponse = exports.ListServicesResponse || (exports.ListServicesResponse = {}));
var MetricInfo;
(function (MetricInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "MetricInfo");
    }
    MetricInfo.isa = isa;
})(MetricInfo = exports.MetricInfo || (exports.MetricInfo = {}));
var NoAvailableOrganizationException;
(function (NoAvailableOrganizationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NoAvailableOrganizationException");
    }
    NoAvailableOrganizationException.isa = isa;
})(NoAvailableOrganizationException = exports.NoAvailableOrganizationException || (exports.NoAvailableOrganizationException = {}));
var NoSuchResourceException;
(function (NoSuchResourceException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NoSuchResourceException");
    }
    NoSuchResourceException.isa = isa;
})(NoSuchResourceException = exports.NoSuchResourceException || (exports.NoSuchResourceException = {}));
var OrganizationNotInAllFeaturesModeException;
(function (OrganizationNotInAllFeaturesModeException) {
    function isa(o) {
        return smithy_client_1.isa(o, "OrganizationNotInAllFeaturesModeException");
    }
    OrganizationNotInAllFeaturesModeException.isa = isa;
})(OrganizationNotInAllFeaturesModeException = exports.OrganizationNotInAllFeaturesModeException || (exports.OrganizationNotInAllFeaturesModeException = {}));
var PeriodUnit;
(function (PeriodUnit) {
    PeriodUnit["DAY"] = "DAY";
    PeriodUnit["HOUR"] = "HOUR";
    PeriodUnit["MICROSECOND"] = "MICROSECOND";
    PeriodUnit["MILLISECOND"] = "MILLISECOND";
    PeriodUnit["MINUTE"] = "MINUTE";
    PeriodUnit["SECOND"] = "SECOND";
    PeriodUnit["WEEK"] = "WEEK";
})(PeriodUnit = exports.PeriodUnit || (exports.PeriodUnit = {}));
var PutServiceQuotaIncreaseRequestIntoTemplateRequest;
(function (PutServiceQuotaIncreaseRequestIntoTemplateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutServiceQuotaIncreaseRequestIntoTemplateRequest");
    }
    PutServiceQuotaIncreaseRequestIntoTemplateRequest.isa = isa;
})(PutServiceQuotaIncreaseRequestIntoTemplateRequest = exports.PutServiceQuotaIncreaseRequestIntoTemplateRequest || (exports.PutServiceQuotaIncreaseRequestIntoTemplateRequest = {}));
var PutServiceQuotaIncreaseRequestIntoTemplateResponse;
(function (PutServiceQuotaIncreaseRequestIntoTemplateResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutServiceQuotaIncreaseRequestIntoTemplateResponse");
    }
    PutServiceQuotaIncreaseRequestIntoTemplateResponse.isa = isa;
})(PutServiceQuotaIncreaseRequestIntoTemplateResponse = exports.PutServiceQuotaIncreaseRequestIntoTemplateResponse || (exports.PutServiceQuotaIncreaseRequestIntoTemplateResponse = {}));
var QuotaExceededException;
(function (QuotaExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "QuotaExceededException");
    }
    QuotaExceededException.isa = isa;
})(QuotaExceededException = exports.QuotaExceededException || (exports.QuotaExceededException = {}));
var QuotaPeriod;
(function (QuotaPeriod) {
    function isa(o) {
        return smithy_client_1.isa(o, "QuotaPeriod");
    }
    QuotaPeriod.isa = isa;
})(QuotaPeriod = exports.QuotaPeriod || (exports.QuotaPeriod = {}));
var RequestServiceQuotaIncreaseRequest;
(function (RequestServiceQuotaIncreaseRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RequestServiceQuotaIncreaseRequest");
    }
    RequestServiceQuotaIncreaseRequest.isa = isa;
})(RequestServiceQuotaIncreaseRequest = exports.RequestServiceQuotaIncreaseRequest || (exports.RequestServiceQuotaIncreaseRequest = {}));
var RequestServiceQuotaIncreaseResponse;
(function (RequestServiceQuotaIncreaseResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "RequestServiceQuotaIncreaseResponse");
    }
    RequestServiceQuotaIncreaseResponse.isa = isa;
})(RequestServiceQuotaIncreaseResponse = exports.RequestServiceQuotaIncreaseResponse || (exports.RequestServiceQuotaIncreaseResponse = {}));
var RequestStatus;
(function (RequestStatus) {
    RequestStatus["APPROVED"] = "APPROVED";
    RequestStatus["CASE_CLOSED"] = "CASE_CLOSED";
    RequestStatus["CASE_OPENED"] = "CASE_OPENED";
    RequestStatus["DENIED"] = "DENIED";
    RequestStatus["PENDING"] = "PENDING";
})(RequestStatus = exports.RequestStatus || (exports.RequestStatus = {}));
var RequestedServiceQuotaChange;
(function (RequestedServiceQuotaChange) {
    function isa(o) {
        return smithy_client_1.isa(o, "RequestedServiceQuotaChange");
    }
    RequestedServiceQuotaChange.isa = isa;
})(RequestedServiceQuotaChange = exports.RequestedServiceQuotaChange || (exports.RequestedServiceQuotaChange = {}));
var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceAlreadyExistsException");
    }
    ResourceAlreadyExistsException.isa = isa;
})(ResourceAlreadyExistsException = exports.ResourceAlreadyExistsException || (exports.ResourceAlreadyExistsException = {}));
var ServiceException;
(function (ServiceException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceException");
    }
    ServiceException.isa = isa;
})(ServiceException = exports.ServiceException || (exports.ServiceException = {}));
var ServiceInfo;
(function (ServiceInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceInfo");
    }
    ServiceInfo.isa = isa;
})(ServiceInfo = exports.ServiceInfo || (exports.ServiceInfo = {}));
var ServiceQuota;
(function (ServiceQuota) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceQuota");
    }
    ServiceQuota.isa = isa;
})(ServiceQuota = exports.ServiceQuota || (exports.ServiceQuota = {}));
var ServiceQuotaIncreaseRequestInTemplate;
(function (ServiceQuotaIncreaseRequestInTemplate) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceQuotaIncreaseRequestInTemplate");
    }
    ServiceQuotaIncreaseRequestInTemplate.isa = isa;
})(ServiceQuotaIncreaseRequestInTemplate = exports.ServiceQuotaIncreaseRequestInTemplate || (exports.ServiceQuotaIncreaseRequestInTemplate = {}));
var ServiceQuotaTemplateAssociationStatus;
(function (ServiceQuotaTemplateAssociationStatus) {
    ServiceQuotaTemplateAssociationStatus["ASSOCIATED"] = "ASSOCIATED";
    ServiceQuotaTemplateAssociationStatus["DISASSOCIATED"] = "DISASSOCIATED";
})(ServiceQuotaTemplateAssociationStatus = exports.ServiceQuotaTemplateAssociationStatus || (exports.ServiceQuotaTemplateAssociationStatus = {}));
var ServiceQuotaTemplateNotInUseException;
(function (ServiceQuotaTemplateNotInUseException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceQuotaTemplateNotInUseException");
    }
    ServiceQuotaTemplateNotInUseException.isa = isa;
})(ServiceQuotaTemplateNotInUseException = exports.ServiceQuotaTemplateNotInUseException || (exports.ServiceQuotaTemplateNotInUseException = {}));
var TemplatesNotAvailableInRegionException;
(function (TemplatesNotAvailableInRegionException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TemplatesNotAvailableInRegionException");
    }
    TemplatesNotAvailableInRegionException.isa = isa;
})(TemplatesNotAvailableInRegionException = exports.TemplatesNotAvailableInRegionException || (exports.TemplatesNotAvailableInRegionException = {}));
var TooManyRequestsException;
(function (TooManyRequestsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TooManyRequestsException");
    }
    TooManyRequestsException.isa = isa;
})(TooManyRequestsException = exports.TooManyRequestsException || (exports.TooManyRequestsException = {}));
//# sourceMappingURL=index.js.map