"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var ComplianceDetails;
(function (ComplianceDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "ComplianceDetails");
    }
    ComplianceDetails.isa = isa;
})(ComplianceDetails = exports.ComplianceDetails || (exports.ComplianceDetails = {}));
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
var DescribeReportCreationInput;
(function (DescribeReportCreationInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeReportCreationInput");
    }
    DescribeReportCreationInput.isa = isa;
})(DescribeReportCreationInput = exports.DescribeReportCreationInput || (exports.DescribeReportCreationInput = {}));
var DescribeReportCreationOutput;
(function (DescribeReportCreationOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeReportCreationOutput");
    }
    DescribeReportCreationOutput.isa = isa;
})(DescribeReportCreationOutput = exports.DescribeReportCreationOutput || (exports.DescribeReportCreationOutput = {}));
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["INTERNAL_SERVICE_EXCEPTION"] = "InternalServiceException";
    ErrorCode["INVALID_PARAMETER_EXCEPTION"] = "InvalidParameterException";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
var FailureInfo;
(function (FailureInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "FailureInfo");
    }
    FailureInfo.isa = isa;
})(FailureInfo = exports.FailureInfo || (exports.FailureInfo = {}));
var GetComplianceSummaryInput;
(function (GetComplianceSummaryInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetComplianceSummaryInput");
    }
    GetComplianceSummaryInput.isa = isa;
})(GetComplianceSummaryInput = exports.GetComplianceSummaryInput || (exports.GetComplianceSummaryInput = {}));
var GetComplianceSummaryOutput;
(function (GetComplianceSummaryOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetComplianceSummaryOutput");
    }
    GetComplianceSummaryOutput.isa = isa;
})(GetComplianceSummaryOutput = exports.GetComplianceSummaryOutput || (exports.GetComplianceSummaryOutput = {}));
var GetResourcesInput;
(function (GetResourcesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetResourcesInput");
    }
    GetResourcesInput.isa = isa;
})(GetResourcesInput = exports.GetResourcesInput || (exports.GetResourcesInput = {}));
var GetResourcesOutput;
(function (GetResourcesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetResourcesOutput");
    }
    GetResourcesOutput.isa = isa;
})(GetResourcesOutput = exports.GetResourcesOutput || (exports.GetResourcesOutput = {}));
var GetTagKeysInput;
(function (GetTagKeysInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTagKeysInput");
    }
    GetTagKeysInput.isa = isa;
})(GetTagKeysInput = exports.GetTagKeysInput || (exports.GetTagKeysInput = {}));
var GetTagKeysOutput;
(function (GetTagKeysOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTagKeysOutput");
    }
    GetTagKeysOutput.isa = isa;
})(GetTagKeysOutput = exports.GetTagKeysOutput || (exports.GetTagKeysOutput = {}));
var GetTagValuesInput;
(function (GetTagValuesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTagValuesInput");
    }
    GetTagValuesInput.isa = isa;
})(GetTagValuesInput = exports.GetTagValuesInput || (exports.GetTagValuesInput = {}));
var GetTagValuesOutput;
(function (GetTagValuesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTagValuesOutput");
    }
    GetTagValuesOutput.isa = isa;
})(GetTagValuesOutput = exports.GetTagValuesOutput || (exports.GetTagValuesOutput = {}));
var GroupByAttribute;
(function (GroupByAttribute) {
    GroupByAttribute["REGION"] = "REGION";
    GroupByAttribute["RESOURCE_TYPE"] = "RESOURCE_TYPE";
    GroupByAttribute["TARGET_ID"] = "TARGET_ID";
})(GroupByAttribute = exports.GroupByAttribute || (exports.GroupByAttribute = {}));
var InternalServiceException;
(function (InternalServiceException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalServiceException");
    }
    InternalServiceException.isa = isa;
})(InternalServiceException = exports.InternalServiceException || (exports.InternalServiceException = {}));
var InvalidParameterException;
(function (InvalidParameterException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidParameterException");
    }
    InvalidParameterException.isa = isa;
})(InvalidParameterException = exports.InvalidParameterException || (exports.InvalidParameterException = {}));
var PaginationTokenExpiredException;
(function (PaginationTokenExpiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PaginationTokenExpiredException");
    }
    PaginationTokenExpiredException.isa = isa;
})(PaginationTokenExpiredException = exports.PaginationTokenExpiredException || (exports.PaginationTokenExpiredException = {}));
var ResourceTagMapping;
(function (ResourceTagMapping) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceTagMapping");
    }
    ResourceTagMapping.isa = isa;
})(ResourceTagMapping = exports.ResourceTagMapping || (exports.ResourceTagMapping = {}));
var StartReportCreationInput;
(function (StartReportCreationInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartReportCreationInput");
    }
    StartReportCreationInput.isa = isa;
})(StartReportCreationInput = exports.StartReportCreationInput || (exports.StartReportCreationInput = {}));
var StartReportCreationOutput;
(function (StartReportCreationOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartReportCreationOutput");
    }
    StartReportCreationOutput.isa = isa;
})(StartReportCreationOutput = exports.StartReportCreationOutput || (exports.StartReportCreationOutput = {}));
var Summary;
(function (Summary) {
    function isa(o) {
        return smithy_client_1.isa(o, "Summary");
    }
    Summary.isa = isa;
})(Summary = exports.Summary || (exports.Summary = {}));
var Tag;
(function (Tag) {
    function isa(o) {
        return smithy_client_1.isa(o, "Tag");
    }
    Tag.isa = isa;
})(Tag = exports.Tag || (exports.Tag = {}));
var TagFilter;
(function (TagFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagFilter");
    }
    TagFilter.isa = isa;
})(TagFilter = exports.TagFilter || (exports.TagFilter = {}));
var TagResourcesInput;
(function (TagResourcesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagResourcesInput");
    }
    TagResourcesInput.isa = isa;
})(TagResourcesInput = exports.TagResourcesInput || (exports.TagResourcesInput = {}));
var TagResourcesOutput;
(function (TagResourcesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagResourcesOutput");
    }
    TagResourcesOutput.isa = isa;
})(TagResourcesOutput = exports.TagResourcesOutput || (exports.TagResourcesOutput = {}));
var TargetIdType;
(function (TargetIdType) {
    TargetIdType["ACCOUNT"] = "ACCOUNT";
    TargetIdType["OU"] = "OU";
    TargetIdType["ROOT"] = "ROOT";
})(TargetIdType = exports.TargetIdType || (exports.TargetIdType = {}));
var ThrottledException;
(function (ThrottledException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ThrottledException");
    }
    ThrottledException.isa = isa;
})(ThrottledException = exports.ThrottledException || (exports.ThrottledException = {}));
var UntagResourcesInput;
(function (UntagResourcesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourcesInput");
    }
    UntagResourcesInput.isa = isa;
})(UntagResourcesInput = exports.UntagResourcesInput || (exports.UntagResourcesInput = {}));
var UntagResourcesOutput;
(function (UntagResourcesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourcesOutput");
    }
    UntagResourcesOutput.isa = isa;
})(UntagResourcesOutput = exports.UntagResourcesOutput || (exports.UntagResourcesOutput = {}));
//# sourceMappingURL=index.js.map