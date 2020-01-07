"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccessDeniedException;
(function (AccessDeniedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AccessDeniedException");
    }
    AccessDeniedException.isa = isa;
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var AnalyzedResource;
(function (AnalyzedResource) {
    function isa(o) {
        return smithy_client_1.isa(o, "AnalyzedResource");
    }
    AnalyzedResource.isa = isa;
})(AnalyzedResource = exports.AnalyzedResource || (exports.AnalyzedResource = {}));
var AnalyzedResourceSummary;
(function (AnalyzedResourceSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "AnalyzedResourceSummary");
    }
    AnalyzedResourceSummary.isa = isa;
})(AnalyzedResourceSummary = exports.AnalyzedResourceSummary || (exports.AnalyzedResourceSummary = {}));
var AnalyzerSummary;
(function (AnalyzerSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "AnalyzerSummary");
    }
    AnalyzerSummary.isa = isa;
})(AnalyzerSummary = exports.AnalyzerSummary || (exports.AnalyzerSummary = {}));
var ArchiveRuleSummary;
(function (ArchiveRuleSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "ArchiveRuleSummary");
    }
    ArchiveRuleSummary.isa = isa;
})(ArchiveRuleSummary = exports.ArchiveRuleSummary || (exports.ArchiveRuleSummary = {}));
var ConflictException;
(function (ConflictException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConflictException");
    }
    ConflictException.isa = isa;
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var CreateAnalyzerRequest;
(function (CreateAnalyzerRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAnalyzerRequest");
    }
    CreateAnalyzerRequest.isa = isa;
})(CreateAnalyzerRequest = exports.CreateAnalyzerRequest || (exports.CreateAnalyzerRequest = {}));
var CreateAnalyzerResponse;
(function (CreateAnalyzerResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAnalyzerResponse");
    }
    CreateAnalyzerResponse.isa = isa;
})(CreateAnalyzerResponse = exports.CreateAnalyzerResponse || (exports.CreateAnalyzerResponse = {}));
var CreateArchiveRuleRequest;
(function (CreateArchiveRuleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateArchiveRuleRequest");
    }
    CreateArchiveRuleRequest.isa = isa;
})(CreateArchiveRuleRequest = exports.CreateArchiveRuleRequest || (exports.CreateArchiveRuleRequest = {}));
var Criterion;
(function (Criterion) {
    function isa(o) {
        return smithy_client_1.isa(o, "Criterion");
    }
    Criterion.isa = isa;
})(Criterion = exports.Criterion || (exports.Criterion = {}));
var DeleteAnalyzerRequest;
(function (DeleteAnalyzerRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteAnalyzerRequest");
    }
    DeleteAnalyzerRequest.isa = isa;
})(DeleteAnalyzerRequest = exports.DeleteAnalyzerRequest || (exports.DeleteAnalyzerRequest = {}));
var DeleteArchiveRuleRequest;
(function (DeleteArchiveRuleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteArchiveRuleRequest");
    }
    DeleteArchiveRuleRequest.isa = isa;
})(DeleteArchiveRuleRequest = exports.DeleteArchiveRuleRequest || (exports.DeleteArchiveRuleRequest = {}));
var Finding;
(function (Finding) {
    function isa(o) {
        return smithy_client_1.isa(o, "Finding");
    }
    Finding.isa = isa;
})(Finding = exports.Finding || (exports.Finding = {}));
var FindingSummary;
(function (FindingSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "FindingSummary");
    }
    FindingSummary.isa = isa;
})(FindingSummary = exports.FindingSummary || (exports.FindingSummary = {}));
var GetAnalyzedResourceRequest;
(function (GetAnalyzedResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAnalyzedResourceRequest");
    }
    GetAnalyzedResourceRequest.isa = isa;
})(GetAnalyzedResourceRequest = exports.GetAnalyzedResourceRequest || (exports.GetAnalyzedResourceRequest = {}));
var GetAnalyzedResourceResponse;
(function (GetAnalyzedResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAnalyzedResourceResponse");
    }
    GetAnalyzedResourceResponse.isa = isa;
})(GetAnalyzedResourceResponse = exports.GetAnalyzedResourceResponse || (exports.GetAnalyzedResourceResponse = {}));
var GetAnalyzerRequest;
(function (GetAnalyzerRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAnalyzerRequest");
    }
    GetAnalyzerRequest.isa = isa;
})(GetAnalyzerRequest = exports.GetAnalyzerRequest || (exports.GetAnalyzerRequest = {}));
var GetAnalyzerResponse;
(function (GetAnalyzerResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAnalyzerResponse");
    }
    GetAnalyzerResponse.isa = isa;
})(GetAnalyzerResponse = exports.GetAnalyzerResponse || (exports.GetAnalyzerResponse = {}));
var GetArchiveRuleRequest;
(function (GetArchiveRuleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetArchiveRuleRequest");
    }
    GetArchiveRuleRequest.isa = isa;
})(GetArchiveRuleRequest = exports.GetArchiveRuleRequest || (exports.GetArchiveRuleRequest = {}));
var GetArchiveRuleResponse;
(function (GetArchiveRuleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetArchiveRuleResponse");
    }
    GetArchiveRuleResponse.isa = isa;
})(GetArchiveRuleResponse = exports.GetArchiveRuleResponse || (exports.GetArchiveRuleResponse = {}));
var GetFindingRequest;
(function (GetFindingRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetFindingRequest");
    }
    GetFindingRequest.isa = isa;
})(GetFindingRequest = exports.GetFindingRequest || (exports.GetFindingRequest = {}));
var GetFindingResponse;
(function (GetFindingResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetFindingResponse");
    }
    GetFindingResponse.isa = isa;
})(GetFindingResponse = exports.GetFindingResponse || (exports.GetFindingResponse = {}));
var InlineArchiveRule;
(function (InlineArchiveRule) {
    function isa(o) {
        return smithy_client_1.isa(o, "InlineArchiveRule");
    }
    InlineArchiveRule.isa = isa;
})(InlineArchiveRule = exports.InlineArchiveRule || (exports.InlineArchiveRule = {}));
var InternalServerException;
(function (InternalServerException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalServerException");
    }
    InternalServerException.isa = isa;
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var ListAnalyzedResourcesRequest;
(function (ListAnalyzedResourcesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAnalyzedResourcesRequest");
    }
    ListAnalyzedResourcesRequest.isa = isa;
})(ListAnalyzedResourcesRequest = exports.ListAnalyzedResourcesRequest || (exports.ListAnalyzedResourcesRequest = {}));
var ListAnalyzedResourcesResponse;
(function (ListAnalyzedResourcesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAnalyzedResourcesResponse");
    }
    ListAnalyzedResourcesResponse.isa = isa;
})(ListAnalyzedResourcesResponse = exports.ListAnalyzedResourcesResponse || (exports.ListAnalyzedResourcesResponse = {}));
var ListAnalyzersRequest;
(function (ListAnalyzersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAnalyzersRequest");
    }
    ListAnalyzersRequest.isa = isa;
})(ListAnalyzersRequest = exports.ListAnalyzersRequest || (exports.ListAnalyzersRequest = {}));
var ListAnalyzersResponse;
(function (ListAnalyzersResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAnalyzersResponse");
    }
    ListAnalyzersResponse.isa = isa;
})(ListAnalyzersResponse = exports.ListAnalyzersResponse || (exports.ListAnalyzersResponse = {}));
var ListArchiveRulesRequest;
(function (ListArchiveRulesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListArchiveRulesRequest");
    }
    ListArchiveRulesRequest.isa = isa;
})(ListArchiveRulesRequest = exports.ListArchiveRulesRequest || (exports.ListArchiveRulesRequest = {}));
var ListArchiveRulesResponse;
(function (ListArchiveRulesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListArchiveRulesResponse");
    }
    ListArchiveRulesResponse.isa = isa;
})(ListArchiveRulesResponse = exports.ListArchiveRulesResponse || (exports.ListArchiveRulesResponse = {}));
var ListFindingsRequest;
(function (ListFindingsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListFindingsRequest");
    }
    ListFindingsRequest.isa = isa;
})(ListFindingsRequest = exports.ListFindingsRequest || (exports.ListFindingsRequest = {}));
var ListFindingsResponse;
(function (ListFindingsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListFindingsResponse");
    }
    ListFindingsResponse.isa = isa;
})(ListFindingsResponse = exports.ListFindingsResponse || (exports.ListFindingsResponse = {}));
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
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNotFoundException");
    }
    ResourceNotFoundException.isa = isa;
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceQuotaExceededException");
    }
    ServiceQuotaExceededException.isa = isa;
})(ServiceQuotaExceededException = exports.ServiceQuotaExceededException || (exports.ServiceQuotaExceededException = {}));
var SortCriteria;
(function (SortCriteria) {
    function isa(o) {
        return smithy_client_1.isa(o, "SortCriteria");
    }
    SortCriteria.isa = isa;
})(SortCriteria = exports.SortCriteria || (exports.SortCriteria = {}));
var StartResourceScanRequest;
(function (StartResourceScanRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartResourceScanRequest");
    }
    StartResourceScanRequest.isa = isa;
})(StartResourceScanRequest = exports.StartResourceScanRequest || (exports.StartResourceScanRequest = {}));
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
var ThrottlingException;
(function (ThrottlingException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ThrottlingException");
    }
    ThrottlingException.isa = isa;
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
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
var UpdateArchiveRuleRequest;
(function (UpdateArchiveRuleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateArchiveRuleRequest");
    }
    UpdateArchiveRuleRequest.isa = isa;
})(UpdateArchiveRuleRequest = exports.UpdateArchiveRuleRequest || (exports.UpdateArchiveRuleRequest = {}));
var UpdateFindingsRequest;
(function (UpdateFindingsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateFindingsRequest");
    }
    UpdateFindingsRequest.isa = isa;
})(UpdateFindingsRequest = exports.UpdateFindingsRequest || (exports.UpdateFindingsRequest = {}));
var ValidationException;
(function (ValidationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ValidationException");
    }
    ValidationException.isa = isa;
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var ValidationExceptionField;
(function (ValidationExceptionField) {
    function isa(o) {
        return smithy_client_1.isa(o, "ValidationExceptionField");
    }
    ValidationExceptionField.isa = isa;
})(ValidationExceptionField = exports.ValidationExceptionField || (exports.ValidationExceptionField = {}));
var ValidationExceptionReason;
(function (ValidationExceptionReason) {
    ValidationExceptionReason["CANNOT_PARSE"] = "cannotParse";
    ValidationExceptionReason["FIELD_VALIDATION_FAILED"] = "fieldValidationFailed";
    ValidationExceptionReason["OTHER"] = "other";
    ValidationExceptionReason["UNKNOWN_OPERATION"] = "unknownOperation";
})(ValidationExceptionReason = exports.ValidationExceptionReason || (exports.ValidationExceptionReason = {}));
//# sourceMappingURL=index.js.map