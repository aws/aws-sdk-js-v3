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
var AutoScalingGroupConfiguration;
(function (AutoScalingGroupConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutoScalingGroupConfiguration");
    }
    AutoScalingGroupConfiguration.isa = isa;
})(AutoScalingGroupConfiguration = exports.AutoScalingGroupConfiguration || (exports.AutoScalingGroupConfiguration = {}));
var AutoScalingGroupRecommendation;
(function (AutoScalingGroupRecommendation) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutoScalingGroupRecommendation");
    }
    AutoScalingGroupRecommendation.isa = isa;
})(AutoScalingGroupRecommendation = exports.AutoScalingGroupRecommendation || (exports.AutoScalingGroupRecommendation = {}));
var AutoScalingGroupRecommendationOption;
(function (AutoScalingGroupRecommendationOption) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutoScalingGroupRecommendationOption");
    }
    AutoScalingGroupRecommendationOption.isa = isa;
})(AutoScalingGroupRecommendationOption = exports.AutoScalingGroupRecommendationOption || (exports.AutoScalingGroupRecommendationOption = {}));
var Filter;
(function (Filter) {
    function isa(o) {
        return smithy_client_1.isa(o, "Filter");
    }
    Filter.isa = isa;
})(Filter = exports.Filter || (exports.Filter = {}));
var FilterName;
(function (FilterName) {
    FilterName["FINDING"] = "Finding";
    FilterName["RECOMMENDATION_SOURCE_TYPE"] = "RecommendationSourceType";
})(FilterName = exports.FilterName || (exports.FilterName = {}));
var Finding;
(function (Finding) {
    Finding["NOT_OPTIMIZED"] = "NotOptimized";
    Finding["OPTIMIZED"] = "Optimized";
    Finding["OVER_PROVISIONED"] = "Overprovisioned";
    Finding["UNDER_PROVISIONED"] = "Underprovisioned";
})(Finding = exports.Finding || (exports.Finding = {}));
var GetAutoScalingGroupRecommendationsRequest;
(function (GetAutoScalingGroupRecommendationsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAutoScalingGroupRecommendationsRequest");
    }
    GetAutoScalingGroupRecommendationsRequest.isa = isa;
})(GetAutoScalingGroupRecommendationsRequest = exports.GetAutoScalingGroupRecommendationsRequest || (exports.GetAutoScalingGroupRecommendationsRequest = {}));
var GetAutoScalingGroupRecommendationsResponse;
(function (GetAutoScalingGroupRecommendationsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAutoScalingGroupRecommendationsResponse");
    }
    GetAutoScalingGroupRecommendationsResponse.isa = isa;
})(GetAutoScalingGroupRecommendationsResponse = exports.GetAutoScalingGroupRecommendationsResponse || (exports.GetAutoScalingGroupRecommendationsResponse = {}));
var GetEC2InstanceRecommendationsRequest;
(function (GetEC2InstanceRecommendationsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetEC2InstanceRecommendationsRequest");
    }
    GetEC2InstanceRecommendationsRequest.isa = isa;
})(GetEC2InstanceRecommendationsRequest = exports.GetEC2InstanceRecommendationsRequest || (exports.GetEC2InstanceRecommendationsRequest = {}));
var GetEC2InstanceRecommendationsResponse;
(function (GetEC2InstanceRecommendationsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetEC2InstanceRecommendationsResponse");
    }
    GetEC2InstanceRecommendationsResponse.isa = isa;
})(GetEC2InstanceRecommendationsResponse = exports.GetEC2InstanceRecommendationsResponse || (exports.GetEC2InstanceRecommendationsResponse = {}));
var GetEC2RecommendationProjectedMetricsRequest;
(function (GetEC2RecommendationProjectedMetricsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetEC2RecommendationProjectedMetricsRequest");
    }
    GetEC2RecommendationProjectedMetricsRequest.isa = isa;
})(GetEC2RecommendationProjectedMetricsRequest = exports.GetEC2RecommendationProjectedMetricsRequest || (exports.GetEC2RecommendationProjectedMetricsRequest = {}));
var GetEC2RecommendationProjectedMetricsResponse;
(function (GetEC2RecommendationProjectedMetricsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetEC2RecommendationProjectedMetricsResponse");
    }
    GetEC2RecommendationProjectedMetricsResponse.isa = isa;
})(GetEC2RecommendationProjectedMetricsResponse = exports.GetEC2RecommendationProjectedMetricsResponse || (exports.GetEC2RecommendationProjectedMetricsResponse = {}));
var GetEnrollmentStatusRequest;
(function (GetEnrollmentStatusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetEnrollmentStatusRequest");
    }
    GetEnrollmentStatusRequest.isa = isa;
})(GetEnrollmentStatusRequest = exports.GetEnrollmentStatusRequest || (exports.GetEnrollmentStatusRequest = {}));
var GetEnrollmentStatusResponse;
(function (GetEnrollmentStatusResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetEnrollmentStatusResponse");
    }
    GetEnrollmentStatusResponse.isa = isa;
})(GetEnrollmentStatusResponse = exports.GetEnrollmentStatusResponse || (exports.GetEnrollmentStatusResponse = {}));
var GetRecommendationError;
(function (GetRecommendationError) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRecommendationError");
    }
    GetRecommendationError.isa = isa;
})(GetRecommendationError = exports.GetRecommendationError || (exports.GetRecommendationError = {}));
var GetRecommendationSummariesRequest;
(function (GetRecommendationSummariesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRecommendationSummariesRequest");
    }
    GetRecommendationSummariesRequest.isa = isa;
})(GetRecommendationSummariesRequest = exports.GetRecommendationSummariesRequest || (exports.GetRecommendationSummariesRequest = {}));
var GetRecommendationSummariesResponse;
(function (GetRecommendationSummariesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRecommendationSummariesResponse");
    }
    GetRecommendationSummariesResponse.isa = isa;
})(GetRecommendationSummariesResponse = exports.GetRecommendationSummariesResponse || (exports.GetRecommendationSummariesResponse = {}));
var InstanceRecommendation;
(function (InstanceRecommendation) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceRecommendation");
    }
    InstanceRecommendation.isa = isa;
})(InstanceRecommendation = exports.InstanceRecommendation || (exports.InstanceRecommendation = {}));
var InstanceRecommendationOption;
(function (InstanceRecommendationOption) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceRecommendationOption");
    }
    InstanceRecommendationOption.isa = isa;
})(InstanceRecommendationOption = exports.InstanceRecommendationOption || (exports.InstanceRecommendationOption = {}));
var InternalServerException;
(function (InternalServerException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalServerException");
    }
    InternalServerException.isa = isa;
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var InvalidParameterValueException;
(function (InvalidParameterValueException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidParameterValueException");
    }
    InvalidParameterValueException.isa = isa;
})(InvalidParameterValueException = exports.InvalidParameterValueException || (exports.InvalidParameterValueException = {}));
var MetricName;
(function (MetricName) {
    MetricName["CPU"] = "Cpu";
    MetricName["MEMORY"] = "Memory";
})(MetricName = exports.MetricName || (exports.MetricName = {}));
var MetricStatistic;
(function (MetricStatistic) {
    MetricStatistic["AVERAGE"] = "Average";
    MetricStatistic["MAXIMUM"] = "Maximum";
})(MetricStatistic = exports.MetricStatistic || (exports.MetricStatistic = {}));
var MissingAuthenticationToken;
(function (MissingAuthenticationToken) {
    function isa(o) {
        return smithy_client_1.isa(o, "MissingAuthenticationToken");
    }
    MissingAuthenticationToken.isa = isa;
})(MissingAuthenticationToken = exports.MissingAuthenticationToken || (exports.MissingAuthenticationToken = {}));
var OptInRequiredException;
(function (OptInRequiredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "OptInRequiredException");
    }
    OptInRequiredException.isa = isa;
})(OptInRequiredException = exports.OptInRequiredException || (exports.OptInRequiredException = {}));
var ProjectedMetric;
(function (ProjectedMetric) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProjectedMetric");
    }
    ProjectedMetric.isa = isa;
})(ProjectedMetric = exports.ProjectedMetric || (exports.ProjectedMetric = {}));
var RecommendationSource;
(function (RecommendationSource) {
    function isa(o) {
        return smithy_client_1.isa(o, "RecommendationSource");
    }
    RecommendationSource.isa = isa;
})(RecommendationSource = exports.RecommendationSource || (exports.RecommendationSource = {}));
var RecommendationSourceType;
(function (RecommendationSourceType) {
    RecommendationSourceType["AUTO_SCALING_GROUP"] = "AutoScalingGroup";
    RecommendationSourceType["EC2_INSTANCE"] = "Ec2Instance";
})(RecommendationSourceType = exports.RecommendationSourceType || (exports.RecommendationSourceType = {}));
var RecommendationSummary;
(function (RecommendationSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "RecommendationSummary");
    }
    RecommendationSummary.isa = isa;
})(RecommendationSummary = exports.RecommendationSummary || (exports.RecommendationSummary = {}));
var RecommendedOptionProjectedMetric;
(function (RecommendedOptionProjectedMetric) {
    function isa(o) {
        return smithy_client_1.isa(o, "RecommendedOptionProjectedMetric");
    }
    RecommendedOptionProjectedMetric.isa = isa;
})(RecommendedOptionProjectedMetric = exports.RecommendedOptionProjectedMetric || (exports.RecommendedOptionProjectedMetric = {}));
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
var Status;
(function (Status) {
    Status["ACTIVE"] = "Active";
    Status["FAILED"] = "Failed";
    Status["INACTIVE"] = "Inactive";
    Status["PENDING"] = "Pending";
})(Status = exports.Status || (exports.Status = {}));
var Summary;
(function (Summary) {
    function isa(o) {
        return smithy_client_1.isa(o, "Summary");
    }
    Summary.isa = isa;
})(Summary = exports.Summary || (exports.Summary = {}));
var ThrottlingException;
(function (ThrottlingException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ThrottlingException");
    }
    ThrottlingException.isa = isa;
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var UpdateEnrollmentStatusRequest;
(function (UpdateEnrollmentStatusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateEnrollmentStatusRequest");
    }
    UpdateEnrollmentStatusRequest.isa = isa;
})(UpdateEnrollmentStatusRequest = exports.UpdateEnrollmentStatusRequest || (exports.UpdateEnrollmentStatusRequest = {}));
var UpdateEnrollmentStatusResponse;
(function (UpdateEnrollmentStatusResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateEnrollmentStatusResponse");
    }
    UpdateEnrollmentStatusResponse.isa = isa;
})(UpdateEnrollmentStatusResponse = exports.UpdateEnrollmentStatusResponse || (exports.UpdateEnrollmentStatusResponse = {}));
var UtilizationMetric;
(function (UtilizationMetric) {
    function isa(o) {
        return smithy_client_1.isa(o, "UtilizationMetric");
    }
    UtilizationMetric.isa = isa;
})(UtilizationMetric = exports.UtilizationMetric || (exports.UtilizationMetric = {}));
//# sourceMappingURL=index.js.map