"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AppliedTerminology;
(function (AppliedTerminology) {
    function isa(o) {
        return smithy_client_1.isa(o, "AppliedTerminology");
    }
    AppliedTerminology.isa = isa;
})(AppliedTerminology = exports.AppliedTerminology || (exports.AppliedTerminology = {}));
var DeleteTerminologyRequest;
(function (DeleteTerminologyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteTerminologyRequest");
    }
    DeleteTerminologyRequest.isa = isa;
})(DeleteTerminologyRequest = exports.DeleteTerminologyRequest || (exports.DeleteTerminologyRequest = {}));
var DescribeTextTranslationJobRequest;
(function (DescribeTextTranslationJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTextTranslationJobRequest");
    }
    DescribeTextTranslationJobRequest.isa = isa;
})(DescribeTextTranslationJobRequest = exports.DescribeTextTranslationJobRequest || (exports.DescribeTextTranslationJobRequest = {}));
var DescribeTextTranslationJobResponse;
(function (DescribeTextTranslationJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTextTranslationJobResponse");
    }
    DescribeTextTranslationJobResponse.isa = isa;
})(DescribeTextTranslationJobResponse = exports.DescribeTextTranslationJobResponse || (exports.DescribeTextTranslationJobResponse = {}));
var DetectedLanguageLowConfidenceException;
(function (DetectedLanguageLowConfidenceException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DetectedLanguageLowConfidenceException");
    }
    DetectedLanguageLowConfidenceException.isa = isa;
})(DetectedLanguageLowConfidenceException = exports.DetectedLanguageLowConfidenceException || (exports.DetectedLanguageLowConfidenceException = {}));
var EncryptionKey;
(function (EncryptionKey) {
    function isa(o) {
        return smithy_client_1.isa(o, "EncryptionKey");
    }
    EncryptionKey.isa = isa;
})(EncryptionKey = exports.EncryptionKey || (exports.EncryptionKey = {}));
var EncryptionKeyType;
(function (EncryptionKeyType) {
    EncryptionKeyType["KMS"] = "KMS";
})(EncryptionKeyType = exports.EncryptionKeyType || (exports.EncryptionKeyType = {}));
var GetTerminologyRequest;
(function (GetTerminologyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTerminologyRequest");
    }
    GetTerminologyRequest.isa = isa;
})(GetTerminologyRequest = exports.GetTerminologyRequest || (exports.GetTerminologyRequest = {}));
var GetTerminologyResponse;
(function (GetTerminologyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTerminologyResponse");
    }
    GetTerminologyResponse.isa = isa;
})(GetTerminologyResponse = exports.GetTerminologyResponse || (exports.GetTerminologyResponse = {}));
var ImportTerminologyRequest;
(function (ImportTerminologyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ImportTerminologyRequest");
    }
    ImportTerminologyRequest.isa = isa;
})(ImportTerminologyRequest = exports.ImportTerminologyRequest || (exports.ImportTerminologyRequest = {}));
var ImportTerminologyResponse;
(function (ImportTerminologyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ImportTerminologyResponse");
    }
    ImportTerminologyResponse.isa = isa;
})(ImportTerminologyResponse = exports.ImportTerminologyResponse || (exports.ImportTerminologyResponse = {}));
var InputDataConfig;
(function (InputDataConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "InputDataConfig");
    }
    InputDataConfig.isa = isa;
})(InputDataConfig = exports.InputDataConfig || (exports.InputDataConfig = {}));
var InternalServerException;
(function (InternalServerException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalServerException");
    }
    InternalServerException.isa = isa;
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var InvalidFilterException;
(function (InvalidFilterException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidFilterException");
    }
    InvalidFilterException.isa = isa;
})(InvalidFilterException = exports.InvalidFilterException || (exports.InvalidFilterException = {}));
var InvalidParameterValueException;
(function (InvalidParameterValueException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidParameterValueException");
    }
    InvalidParameterValueException.isa = isa;
})(InvalidParameterValueException = exports.InvalidParameterValueException || (exports.InvalidParameterValueException = {}));
var InvalidRequestException;
(function (InvalidRequestException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidRequestException");
    }
    InvalidRequestException.isa = isa;
})(InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {}));
var JobDetails;
(function (JobDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "JobDetails");
    }
    JobDetails.isa = isa;
})(JobDetails = exports.JobDetails || (exports.JobDetails = {}));
var JobStatus;
(function (JobStatus) {
    JobStatus["COMPLETED"] = "COMPLETED";
    JobStatus["COMPLETED_WITH_ERROR"] = "COMPLETED_WITH_ERROR";
    JobStatus["FAILED"] = "FAILED";
    JobStatus["IN_PROGRESS"] = "IN_PROGRESS";
    JobStatus["STOPPED"] = "STOPPED";
    JobStatus["STOP_REQUESTED"] = "STOP_REQUESTED";
    JobStatus["SUBMITTED"] = "SUBMITTED";
})(JobStatus = exports.JobStatus || (exports.JobStatus = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ListTerminologiesRequest;
(function (ListTerminologiesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTerminologiesRequest");
    }
    ListTerminologiesRequest.isa = isa;
})(ListTerminologiesRequest = exports.ListTerminologiesRequest || (exports.ListTerminologiesRequest = {}));
var ListTerminologiesResponse;
(function (ListTerminologiesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTerminologiesResponse");
    }
    ListTerminologiesResponse.isa = isa;
})(ListTerminologiesResponse = exports.ListTerminologiesResponse || (exports.ListTerminologiesResponse = {}));
var ListTextTranslationJobsRequest;
(function (ListTextTranslationJobsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTextTranslationJobsRequest");
    }
    ListTextTranslationJobsRequest.isa = isa;
})(ListTextTranslationJobsRequest = exports.ListTextTranslationJobsRequest || (exports.ListTextTranslationJobsRequest = {}));
var ListTextTranslationJobsResponse;
(function (ListTextTranslationJobsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTextTranslationJobsResponse");
    }
    ListTextTranslationJobsResponse.isa = isa;
})(ListTextTranslationJobsResponse = exports.ListTextTranslationJobsResponse || (exports.ListTextTranslationJobsResponse = {}));
var MergeStrategy;
(function (MergeStrategy) {
    MergeStrategy["OVERWRITE"] = "OVERWRITE";
})(MergeStrategy = exports.MergeStrategy || (exports.MergeStrategy = {}));
var OutputDataConfig;
(function (OutputDataConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "OutputDataConfig");
    }
    OutputDataConfig.isa = isa;
})(OutputDataConfig = exports.OutputDataConfig || (exports.OutputDataConfig = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNotFoundException");
    }
    ResourceNotFoundException.isa = isa;
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceUnavailableException");
    }
    ServiceUnavailableException.isa = isa;
})(ServiceUnavailableException = exports.ServiceUnavailableException || (exports.ServiceUnavailableException = {}));
var StartTextTranslationJobRequest;
(function (StartTextTranslationJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartTextTranslationJobRequest");
    }
    StartTextTranslationJobRequest.isa = isa;
})(StartTextTranslationJobRequest = exports.StartTextTranslationJobRequest || (exports.StartTextTranslationJobRequest = {}));
var StartTextTranslationJobResponse;
(function (StartTextTranslationJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartTextTranslationJobResponse");
    }
    StartTextTranslationJobResponse.isa = isa;
})(StartTextTranslationJobResponse = exports.StartTextTranslationJobResponse || (exports.StartTextTranslationJobResponse = {}));
var StopTextTranslationJobRequest;
(function (StopTextTranslationJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopTextTranslationJobRequest");
    }
    StopTextTranslationJobRequest.isa = isa;
})(StopTextTranslationJobRequest = exports.StopTextTranslationJobRequest || (exports.StopTextTranslationJobRequest = {}));
var StopTextTranslationJobResponse;
(function (StopTextTranslationJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopTextTranslationJobResponse");
    }
    StopTextTranslationJobResponse.isa = isa;
})(StopTextTranslationJobResponse = exports.StopTextTranslationJobResponse || (exports.StopTextTranslationJobResponse = {}));
var Term;
(function (Term) {
    function isa(o) {
        return smithy_client_1.isa(o, "Term");
    }
    Term.isa = isa;
})(Term = exports.Term || (exports.Term = {}));
var TerminologyData;
(function (TerminologyData) {
    function isa(o) {
        return smithy_client_1.isa(o, "TerminologyData");
    }
    TerminologyData.isa = isa;
})(TerminologyData = exports.TerminologyData || (exports.TerminologyData = {}));
var TerminologyDataFormat;
(function (TerminologyDataFormat) {
    TerminologyDataFormat["CSV"] = "CSV";
    TerminologyDataFormat["TMX"] = "TMX";
})(TerminologyDataFormat = exports.TerminologyDataFormat || (exports.TerminologyDataFormat = {}));
var TerminologyDataLocation;
(function (TerminologyDataLocation) {
    function isa(o) {
        return smithy_client_1.isa(o, "TerminologyDataLocation");
    }
    TerminologyDataLocation.isa = isa;
})(TerminologyDataLocation = exports.TerminologyDataLocation || (exports.TerminologyDataLocation = {}));
var TerminologyProperties;
(function (TerminologyProperties) {
    function isa(o) {
        return smithy_client_1.isa(o, "TerminologyProperties");
    }
    TerminologyProperties.isa = isa;
})(TerminologyProperties = exports.TerminologyProperties || (exports.TerminologyProperties = {}));
var TextSizeLimitExceededException;
(function (TextSizeLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TextSizeLimitExceededException");
    }
    TextSizeLimitExceededException.isa = isa;
})(TextSizeLimitExceededException = exports.TextSizeLimitExceededException || (exports.TextSizeLimitExceededException = {}));
var TextTranslationJobFilter;
(function (TextTranslationJobFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "TextTranslationJobFilter");
    }
    TextTranslationJobFilter.isa = isa;
})(TextTranslationJobFilter = exports.TextTranslationJobFilter || (exports.TextTranslationJobFilter = {}));
var TextTranslationJobProperties;
(function (TextTranslationJobProperties) {
    function isa(o) {
        return smithy_client_1.isa(o, "TextTranslationJobProperties");
    }
    TextTranslationJobProperties.isa = isa;
})(TextTranslationJobProperties = exports.TextTranslationJobProperties || (exports.TextTranslationJobProperties = {}));
var TooManyRequestsException;
(function (TooManyRequestsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TooManyRequestsException");
    }
    TooManyRequestsException.isa = isa;
})(TooManyRequestsException = exports.TooManyRequestsException || (exports.TooManyRequestsException = {}));
var TranslateTextRequest;
(function (TranslateTextRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "TranslateTextRequest");
    }
    TranslateTextRequest.isa = isa;
})(TranslateTextRequest = exports.TranslateTextRequest || (exports.TranslateTextRequest = {}));
var TranslateTextResponse;
(function (TranslateTextResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "TranslateTextResponse");
    }
    TranslateTextResponse.isa = isa;
})(TranslateTextResponse = exports.TranslateTextResponse || (exports.TranslateTextResponse = {}));
var UnsupportedLanguagePairException;
(function (UnsupportedLanguagePairException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnsupportedLanguagePairException");
    }
    UnsupportedLanguagePairException.isa = isa;
})(UnsupportedLanguagePairException = exports.UnsupportedLanguagePairException || (exports.UnsupportedLanguagePairException = {}));
//# sourceMappingURL=index.js.map