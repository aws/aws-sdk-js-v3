"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var Attachment;
(function (Attachment) {
    function isa(o) {
        return smithy_client_1.isa(o, "Attachment");
    }
    Attachment.isa = isa;
})(Attachment = exports.Attachment || (exports.Attachment = {}));
var AttachmentDetails;
(function (AttachmentDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "AttachmentDetails");
    }
    AttachmentDetails.isa = isa;
})(AttachmentDetails = exports.AttachmentDetails || (exports.AttachmentDetails = {}));
var CaseDetails;
(function (CaseDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "CaseDetails");
    }
    CaseDetails.isa = isa;
})(CaseDetails = exports.CaseDetails || (exports.CaseDetails = {}));
var Category;
(function (Category) {
    function isa(o) {
        return smithy_client_1.isa(o, "Category");
    }
    Category.isa = isa;
})(Category = exports.Category || (exports.Category = {}));
var Communication;
(function (Communication) {
    function isa(o) {
        return smithy_client_1.isa(o, "Communication");
    }
    Communication.isa = isa;
})(Communication = exports.Communication || (exports.Communication = {}));
var RecentCaseCommunications;
(function (RecentCaseCommunications) {
    function isa(o) {
        return smithy_client_1.isa(o, "RecentCaseCommunications");
    }
    RecentCaseCommunications.isa = isa;
})(RecentCaseCommunications = exports.RecentCaseCommunications || (exports.RecentCaseCommunications = {}));
var Service;
(function (Service) {
    function isa(o) {
        return smithy_client_1.isa(o, "Service");
    }
    Service.isa = isa;
})(Service = exports.Service || (exports.Service = {}));
var AttachmentIdNotFound;
(function (AttachmentIdNotFound) {
    function isa(o) {
        return smithy_client_1.isa(o, "AttachmentIdNotFound");
    }
    AttachmentIdNotFound.isa = isa;
})(AttachmentIdNotFound = exports.AttachmentIdNotFound || (exports.AttachmentIdNotFound = {}));
var AttachmentLimitExceeded;
(function (AttachmentLimitExceeded) {
    function isa(o) {
        return smithy_client_1.isa(o, "AttachmentLimitExceeded");
    }
    AttachmentLimitExceeded.isa = isa;
})(AttachmentLimitExceeded = exports.AttachmentLimitExceeded || (exports.AttachmentLimitExceeded = {}));
var AttachmentSetExpired;
(function (AttachmentSetExpired) {
    function isa(o) {
        return smithy_client_1.isa(o, "AttachmentSetExpired");
    }
    AttachmentSetExpired.isa = isa;
})(AttachmentSetExpired = exports.AttachmentSetExpired || (exports.AttachmentSetExpired = {}));
var AttachmentSetIdNotFound;
(function (AttachmentSetIdNotFound) {
    function isa(o) {
        return smithy_client_1.isa(o, "AttachmentSetIdNotFound");
    }
    AttachmentSetIdNotFound.isa = isa;
})(AttachmentSetIdNotFound = exports.AttachmentSetIdNotFound || (exports.AttachmentSetIdNotFound = {}));
var AttachmentSetSizeLimitExceeded;
(function (AttachmentSetSizeLimitExceeded) {
    function isa(o) {
        return smithy_client_1.isa(o, "AttachmentSetSizeLimitExceeded");
    }
    AttachmentSetSizeLimitExceeded.isa = isa;
})(AttachmentSetSizeLimitExceeded = exports.AttachmentSetSizeLimitExceeded || (exports.AttachmentSetSizeLimitExceeded = {}));
var CaseCreationLimitExceeded;
(function (CaseCreationLimitExceeded) {
    function isa(o) {
        return smithy_client_1.isa(o, "CaseCreationLimitExceeded");
    }
    CaseCreationLimitExceeded.isa = isa;
})(CaseCreationLimitExceeded = exports.CaseCreationLimitExceeded || (exports.CaseCreationLimitExceeded = {}));
var CaseIdNotFound;
(function (CaseIdNotFound) {
    function isa(o) {
        return smithy_client_1.isa(o, "CaseIdNotFound");
    }
    CaseIdNotFound.isa = isa;
})(CaseIdNotFound = exports.CaseIdNotFound || (exports.CaseIdNotFound = {}));
var DescribeAttachmentLimitExceeded;
(function (DescribeAttachmentLimitExceeded) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAttachmentLimitExceeded");
    }
    DescribeAttachmentLimitExceeded.isa = isa;
})(DescribeAttachmentLimitExceeded = exports.DescribeAttachmentLimitExceeded || (exports.DescribeAttachmentLimitExceeded = {}));
var InternalServerError;
(function (InternalServerError) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalServerError");
    }
    InternalServerError.isa = isa;
})(InternalServerError = exports.InternalServerError || (exports.InternalServerError = {}));
var AddAttachmentsToSetRequest;
(function (AddAttachmentsToSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddAttachmentsToSetRequest");
    }
    AddAttachmentsToSetRequest.isa = isa;
})(AddAttachmentsToSetRequest = exports.AddAttachmentsToSetRequest || (exports.AddAttachmentsToSetRequest = {}));
var AddAttachmentsToSetResponse;
(function (AddAttachmentsToSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddAttachmentsToSetResponse");
    }
    AddAttachmentsToSetResponse.isa = isa;
})(AddAttachmentsToSetResponse = exports.AddAttachmentsToSetResponse || (exports.AddAttachmentsToSetResponse = {}));
var AddCommunicationToCaseRequest;
(function (AddCommunicationToCaseRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddCommunicationToCaseRequest");
    }
    AddCommunicationToCaseRequest.isa = isa;
})(AddCommunicationToCaseRequest = exports.AddCommunicationToCaseRequest || (exports.AddCommunicationToCaseRequest = {}));
var AddCommunicationToCaseResponse;
(function (AddCommunicationToCaseResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddCommunicationToCaseResponse");
    }
    AddCommunicationToCaseResponse.isa = isa;
})(AddCommunicationToCaseResponse = exports.AddCommunicationToCaseResponse || (exports.AddCommunicationToCaseResponse = {}));
var CreateCaseRequest;
(function (CreateCaseRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateCaseRequest");
    }
    CreateCaseRequest.isa = isa;
})(CreateCaseRequest = exports.CreateCaseRequest || (exports.CreateCaseRequest = {}));
var CreateCaseResponse;
(function (CreateCaseResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateCaseResponse");
    }
    CreateCaseResponse.isa = isa;
})(CreateCaseResponse = exports.CreateCaseResponse || (exports.CreateCaseResponse = {}));
var DescribeAttachmentRequest;
(function (DescribeAttachmentRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAttachmentRequest");
    }
    DescribeAttachmentRequest.isa = isa;
})(DescribeAttachmentRequest = exports.DescribeAttachmentRequest || (exports.DescribeAttachmentRequest = {}));
var DescribeAttachmentResponse;
(function (DescribeAttachmentResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAttachmentResponse");
    }
    DescribeAttachmentResponse.isa = isa;
})(DescribeAttachmentResponse = exports.DescribeAttachmentResponse || (exports.DescribeAttachmentResponse = {}));
var DescribeCasesRequest;
(function (DescribeCasesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeCasesRequest");
    }
    DescribeCasesRequest.isa = isa;
})(DescribeCasesRequest = exports.DescribeCasesRequest || (exports.DescribeCasesRequest = {}));
var DescribeCasesResponse;
(function (DescribeCasesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeCasesResponse");
    }
    DescribeCasesResponse.isa = isa;
})(DescribeCasesResponse = exports.DescribeCasesResponse || (exports.DescribeCasesResponse = {}));
var DescribeCommunicationsRequest;
(function (DescribeCommunicationsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeCommunicationsRequest");
    }
    DescribeCommunicationsRequest.isa = isa;
})(DescribeCommunicationsRequest = exports.DescribeCommunicationsRequest || (exports.DescribeCommunicationsRequest = {}));
var DescribeCommunicationsResponse;
(function (DescribeCommunicationsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeCommunicationsResponse");
    }
    DescribeCommunicationsResponse.isa = isa;
})(DescribeCommunicationsResponse = exports.DescribeCommunicationsResponse || (exports.DescribeCommunicationsResponse = {}));
var DescribeServicesRequest;
(function (DescribeServicesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeServicesRequest");
    }
    DescribeServicesRequest.isa = isa;
})(DescribeServicesRequest = exports.DescribeServicesRequest || (exports.DescribeServicesRequest = {}));
var DescribeServicesResponse;
(function (DescribeServicesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeServicesResponse");
    }
    DescribeServicesResponse.isa = isa;
})(DescribeServicesResponse = exports.DescribeServicesResponse || (exports.DescribeServicesResponse = {}));
var DescribeSeverityLevelsRequest;
(function (DescribeSeverityLevelsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeSeverityLevelsRequest");
    }
    DescribeSeverityLevelsRequest.isa = isa;
})(DescribeSeverityLevelsRequest = exports.DescribeSeverityLevelsRequest || (exports.DescribeSeverityLevelsRequest = {}));
var DescribeSeverityLevelsResponse;
(function (DescribeSeverityLevelsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeSeverityLevelsResponse");
    }
    DescribeSeverityLevelsResponse.isa = isa;
})(DescribeSeverityLevelsResponse = exports.DescribeSeverityLevelsResponse || (exports.DescribeSeverityLevelsResponse = {}));
var ResolveCaseRequest;
(function (ResolveCaseRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResolveCaseRequest");
    }
    ResolveCaseRequest.isa = isa;
})(ResolveCaseRequest = exports.ResolveCaseRequest || (exports.ResolveCaseRequest = {}));
var ResolveCaseResponse;
(function (ResolveCaseResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResolveCaseResponse");
    }
    ResolveCaseResponse.isa = isa;
})(ResolveCaseResponse = exports.ResolveCaseResponse || (exports.ResolveCaseResponse = {}));
var SeverityLevel;
(function (SeverityLevel) {
    function isa(o) {
        return smithy_client_1.isa(o, "SeverityLevel");
    }
    SeverityLevel.isa = isa;
})(SeverityLevel = exports.SeverityLevel || (exports.SeverityLevel = {}));
var DescribeTrustedAdvisorCheckRefreshStatusesRequest;
(function (DescribeTrustedAdvisorCheckRefreshStatusesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTrustedAdvisorCheckRefreshStatusesRequest");
    }
    DescribeTrustedAdvisorCheckRefreshStatusesRequest.isa = isa;
})(DescribeTrustedAdvisorCheckRefreshStatusesRequest = exports.DescribeTrustedAdvisorCheckRefreshStatusesRequest || (exports.DescribeTrustedAdvisorCheckRefreshStatusesRequest = {}));
var DescribeTrustedAdvisorCheckRefreshStatusesResponse;
(function (DescribeTrustedAdvisorCheckRefreshStatusesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTrustedAdvisorCheckRefreshStatusesResponse");
    }
    DescribeTrustedAdvisorCheckRefreshStatusesResponse.isa = isa;
})(DescribeTrustedAdvisorCheckRefreshStatusesResponse = exports.DescribeTrustedAdvisorCheckRefreshStatusesResponse || (exports.DescribeTrustedAdvisorCheckRefreshStatusesResponse = {}));
var DescribeTrustedAdvisorCheckResultRequest;
(function (DescribeTrustedAdvisorCheckResultRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTrustedAdvisorCheckResultRequest");
    }
    DescribeTrustedAdvisorCheckResultRequest.isa = isa;
})(DescribeTrustedAdvisorCheckResultRequest = exports.DescribeTrustedAdvisorCheckResultRequest || (exports.DescribeTrustedAdvisorCheckResultRequest = {}));
var DescribeTrustedAdvisorCheckResultResponse;
(function (DescribeTrustedAdvisorCheckResultResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTrustedAdvisorCheckResultResponse");
    }
    DescribeTrustedAdvisorCheckResultResponse.isa = isa;
})(DescribeTrustedAdvisorCheckResultResponse = exports.DescribeTrustedAdvisorCheckResultResponse || (exports.DescribeTrustedAdvisorCheckResultResponse = {}));
var DescribeTrustedAdvisorCheckSummariesRequest;
(function (DescribeTrustedAdvisorCheckSummariesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTrustedAdvisorCheckSummariesRequest");
    }
    DescribeTrustedAdvisorCheckSummariesRequest.isa = isa;
})(DescribeTrustedAdvisorCheckSummariesRequest = exports.DescribeTrustedAdvisorCheckSummariesRequest || (exports.DescribeTrustedAdvisorCheckSummariesRequest = {}));
var DescribeTrustedAdvisorCheckSummariesResponse;
(function (DescribeTrustedAdvisorCheckSummariesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTrustedAdvisorCheckSummariesResponse");
    }
    DescribeTrustedAdvisorCheckSummariesResponse.isa = isa;
})(DescribeTrustedAdvisorCheckSummariesResponse = exports.DescribeTrustedAdvisorCheckSummariesResponse || (exports.DescribeTrustedAdvisorCheckSummariesResponse = {}));
var DescribeTrustedAdvisorChecksRequest;
(function (DescribeTrustedAdvisorChecksRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTrustedAdvisorChecksRequest");
    }
    DescribeTrustedAdvisorChecksRequest.isa = isa;
})(DescribeTrustedAdvisorChecksRequest = exports.DescribeTrustedAdvisorChecksRequest || (exports.DescribeTrustedAdvisorChecksRequest = {}));
var DescribeTrustedAdvisorChecksResponse;
(function (DescribeTrustedAdvisorChecksResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTrustedAdvisorChecksResponse");
    }
    DescribeTrustedAdvisorChecksResponse.isa = isa;
})(DescribeTrustedAdvisorChecksResponse = exports.DescribeTrustedAdvisorChecksResponse || (exports.DescribeTrustedAdvisorChecksResponse = {}));
var RefreshTrustedAdvisorCheckRequest;
(function (RefreshTrustedAdvisorCheckRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RefreshTrustedAdvisorCheckRequest");
    }
    RefreshTrustedAdvisorCheckRequest.isa = isa;
})(RefreshTrustedAdvisorCheckRequest = exports.RefreshTrustedAdvisorCheckRequest || (exports.RefreshTrustedAdvisorCheckRequest = {}));
var RefreshTrustedAdvisorCheckResponse;
(function (RefreshTrustedAdvisorCheckResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "RefreshTrustedAdvisorCheckResponse");
    }
    RefreshTrustedAdvisorCheckResponse.isa = isa;
})(RefreshTrustedAdvisorCheckResponse = exports.RefreshTrustedAdvisorCheckResponse || (exports.RefreshTrustedAdvisorCheckResponse = {}));
var TrustedAdvisorCategorySpecificSummary;
(function (TrustedAdvisorCategorySpecificSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "TrustedAdvisorCategorySpecificSummary");
    }
    TrustedAdvisorCategorySpecificSummary.isa = isa;
})(TrustedAdvisorCategorySpecificSummary = exports.TrustedAdvisorCategorySpecificSummary || (exports.TrustedAdvisorCategorySpecificSummary = {}));
var TrustedAdvisorCheckDescription;
(function (TrustedAdvisorCheckDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "TrustedAdvisorCheckDescription");
    }
    TrustedAdvisorCheckDescription.isa = isa;
})(TrustedAdvisorCheckDescription = exports.TrustedAdvisorCheckDescription || (exports.TrustedAdvisorCheckDescription = {}));
var TrustedAdvisorCheckRefreshStatus;
(function (TrustedAdvisorCheckRefreshStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "TrustedAdvisorCheckRefreshStatus");
    }
    TrustedAdvisorCheckRefreshStatus.isa = isa;
})(TrustedAdvisorCheckRefreshStatus = exports.TrustedAdvisorCheckRefreshStatus || (exports.TrustedAdvisorCheckRefreshStatus = {}));
var TrustedAdvisorCheckResult;
(function (TrustedAdvisorCheckResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "TrustedAdvisorCheckResult");
    }
    TrustedAdvisorCheckResult.isa = isa;
})(TrustedAdvisorCheckResult = exports.TrustedAdvisorCheckResult || (exports.TrustedAdvisorCheckResult = {}));
var TrustedAdvisorCheckSummary;
(function (TrustedAdvisorCheckSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "TrustedAdvisorCheckSummary");
    }
    TrustedAdvisorCheckSummary.isa = isa;
})(TrustedAdvisorCheckSummary = exports.TrustedAdvisorCheckSummary || (exports.TrustedAdvisorCheckSummary = {}));
var TrustedAdvisorCostOptimizingSummary;
(function (TrustedAdvisorCostOptimizingSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "TrustedAdvisorCostOptimizingSummary");
    }
    TrustedAdvisorCostOptimizingSummary.isa = isa;
})(TrustedAdvisorCostOptimizingSummary = exports.TrustedAdvisorCostOptimizingSummary || (exports.TrustedAdvisorCostOptimizingSummary = {}));
var TrustedAdvisorResourceDetail;
(function (TrustedAdvisorResourceDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "TrustedAdvisorResourceDetail");
    }
    TrustedAdvisorResourceDetail.isa = isa;
})(TrustedAdvisorResourceDetail = exports.TrustedAdvisorResourceDetail || (exports.TrustedAdvisorResourceDetail = {}));
var TrustedAdvisorResourcesSummary;
(function (TrustedAdvisorResourcesSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "TrustedAdvisorResourcesSummary");
    }
    TrustedAdvisorResourcesSummary.isa = isa;
})(TrustedAdvisorResourcesSummary = exports.TrustedAdvisorResourcesSummary || (exports.TrustedAdvisorResourcesSummary = {}));
//# sourceMappingURL=index.js.map