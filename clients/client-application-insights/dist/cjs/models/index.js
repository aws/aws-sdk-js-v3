"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var ApplicationComponent;
(function (ApplicationComponent) {
    function isa(o) {
        return smithy_client_1.isa(o, "ApplicationComponent");
    }
    ApplicationComponent.isa = isa;
})(ApplicationComponent = exports.ApplicationComponent || (exports.ApplicationComponent = {}));
var ApplicationInfo;
(function (ApplicationInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "ApplicationInfo");
    }
    ApplicationInfo.isa = isa;
})(ApplicationInfo = exports.ApplicationInfo || (exports.ApplicationInfo = {}));
var BadRequestException;
(function (BadRequestException) {
    function isa(o) {
        return smithy_client_1.isa(o, "BadRequestException");
    }
    BadRequestException.isa = isa;
})(BadRequestException = exports.BadRequestException || (exports.BadRequestException = {}));
var ConfigurationEvent;
(function (ConfigurationEvent) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConfigurationEvent");
    }
    ConfigurationEvent.isa = isa;
})(ConfigurationEvent = exports.ConfigurationEvent || (exports.ConfigurationEvent = {}));
var CreateApplicationRequest;
(function (CreateApplicationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateApplicationRequest");
    }
    CreateApplicationRequest.isa = isa;
})(CreateApplicationRequest = exports.CreateApplicationRequest || (exports.CreateApplicationRequest = {}));
var CreateApplicationResponse;
(function (CreateApplicationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateApplicationResponse");
    }
    CreateApplicationResponse.isa = isa;
})(CreateApplicationResponse = exports.CreateApplicationResponse || (exports.CreateApplicationResponse = {}));
var CreateComponentRequest;
(function (CreateComponentRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateComponentRequest");
    }
    CreateComponentRequest.isa = isa;
})(CreateComponentRequest = exports.CreateComponentRequest || (exports.CreateComponentRequest = {}));
var CreateComponentResponse;
(function (CreateComponentResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateComponentResponse");
    }
    CreateComponentResponse.isa = isa;
})(CreateComponentResponse = exports.CreateComponentResponse || (exports.CreateComponentResponse = {}));
var CreateLogPatternRequest;
(function (CreateLogPatternRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateLogPatternRequest");
    }
    CreateLogPatternRequest.isa = isa;
})(CreateLogPatternRequest = exports.CreateLogPatternRequest || (exports.CreateLogPatternRequest = {}));
var CreateLogPatternResponse;
(function (CreateLogPatternResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateLogPatternResponse");
    }
    CreateLogPatternResponse.isa = isa;
})(CreateLogPatternResponse = exports.CreateLogPatternResponse || (exports.CreateLogPatternResponse = {}));
var DeleteApplicationRequest;
(function (DeleteApplicationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteApplicationRequest");
    }
    DeleteApplicationRequest.isa = isa;
})(DeleteApplicationRequest = exports.DeleteApplicationRequest || (exports.DeleteApplicationRequest = {}));
var DeleteApplicationResponse;
(function (DeleteApplicationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteApplicationResponse");
    }
    DeleteApplicationResponse.isa = isa;
})(DeleteApplicationResponse = exports.DeleteApplicationResponse || (exports.DeleteApplicationResponse = {}));
var DeleteComponentRequest;
(function (DeleteComponentRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteComponentRequest");
    }
    DeleteComponentRequest.isa = isa;
})(DeleteComponentRequest = exports.DeleteComponentRequest || (exports.DeleteComponentRequest = {}));
var DeleteComponentResponse;
(function (DeleteComponentResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteComponentResponse");
    }
    DeleteComponentResponse.isa = isa;
})(DeleteComponentResponse = exports.DeleteComponentResponse || (exports.DeleteComponentResponse = {}));
var DeleteLogPatternRequest;
(function (DeleteLogPatternRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteLogPatternRequest");
    }
    DeleteLogPatternRequest.isa = isa;
})(DeleteLogPatternRequest = exports.DeleteLogPatternRequest || (exports.DeleteLogPatternRequest = {}));
var DeleteLogPatternResponse;
(function (DeleteLogPatternResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteLogPatternResponse");
    }
    DeleteLogPatternResponse.isa = isa;
})(DeleteLogPatternResponse = exports.DeleteLogPatternResponse || (exports.DeleteLogPatternResponse = {}));
var DescribeApplicationRequest;
(function (DescribeApplicationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeApplicationRequest");
    }
    DescribeApplicationRequest.isa = isa;
})(DescribeApplicationRequest = exports.DescribeApplicationRequest || (exports.DescribeApplicationRequest = {}));
var DescribeApplicationResponse;
(function (DescribeApplicationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeApplicationResponse");
    }
    DescribeApplicationResponse.isa = isa;
})(DescribeApplicationResponse = exports.DescribeApplicationResponse || (exports.DescribeApplicationResponse = {}));
var DescribeComponentConfigurationRecommendationRequest;
(function (DescribeComponentConfigurationRecommendationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeComponentConfigurationRecommendationRequest");
    }
    DescribeComponentConfigurationRecommendationRequest.isa = isa;
})(DescribeComponentConfigurationRecommendationRequest = exports.DescribeComponentConfigurationRecommendationRequest || (exports.DescribeComponentConfigurationRecommendationRequest = {}));
var DescribeComponentConfigurationRecommendationResponse;
(function (DescribeComponentConfigurationRecommendationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeComponentConfigurationRecommendationResponse");
    }
    DescribeComponentConfigurationRecommendationResponse.isa = isa;
})(DescribeComponentConfigurationRecommendationResponse = exports.DescribeComponentConfigurationRecommendationResponse || (exports.DescribeComponentConfigurationRecommendationResponse = {}));
var DescribeComponentConfigurationRequest;
(function (DescribeComponentConfigurationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeComponentConfigurationRequest");
    }
    DescribeComponentConfigurationRequest.isa = isa;
})(DescribeComponentConfigurationRequest = exports.DescribeComponentConfigurationRequest || (exports.DescribeComponentConfigurationRequest = {}));
var DescribeComponentConfigurationResponse;
(function (DescribeComponentConfigurationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeComponentConfigurationResponse");
    }
    DescribeComponentConfigurationResponse.isa = isa;
})(DescribeComponentConfigurationResponse = exports.DescribeComponentConfigurationResponse || (exports.DescribeComponentConfigurationResponse = {}));
var DescribeComponentRequest;
(function (DescribeComponentRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeComponentRequest");
    }
    DescribeComponentRequest.isa = isa;
})(DescribeComponentRequest = exports.DescribeComponentRequest || (exports.DescribeComponentRequest = {}));
var DescribeComponentResponse;
(function (DescribeComponentResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeComponentResponse");
    }
    DescribeComponentResponse.isa = isa;
})(DescribeComponentResponse = exports.DescribeComponentResponse || (exports.DescribeComponentResponse = {}));
var DescribeLogPatternRequest;
(function (DescribeLogPatternRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeLogPatternRequest");
    }
    DescribeLogPatternRequest.isa = isa;
})(DescribeLogPatternRequest = exports.DescribeLogPatternRequest || (exports.DescribeLogPatternRequest = {}));
var DescribeLogPatternResponse;
(function (DescribeLogPatternResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeLogPatternResponse");
    }
    DescribeLogPatternResponse.isa = isa;
})(DescribeLogPatternResponse = exports.DescribeLogPatternResponse || (exports.DescribeLogPatternResponse = {}));
var DescribeObservationRequest;
(function (DescribeObservationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeObservationRequest");
    }
    DescribeObservationRequest.isa = isa;
})(DescribeObservationRequest = exports.DescribeObservationRequest || (exports.DescribeObservationRequest = {}));
var DescribeObservationResponse;
(function (DescribeObservationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeObservationResponse");
    }
    DescribeObservationResponse.isa = isa;
})(DescribeObservationResponse = exports.DescribeObservationResponse || (exports.DescribeObservationResponse = {}));
var DescribeProblemObservationsRequest;
(function (DescribeProblemObservationsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeProblemObservationsRequest");
    }
    DescribeProblemObservationsRequest.isa = isa;
})(DescribeProblemObservationsRequest = exports.DescribeProblemObservationsRequest || (exports.DescribeProblemObservationsRequest = {}));
var DescribeProblemObservationsResponse;
(function (DescribeProblemObservationsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeProblemObservationsResponse");
    }
    DescribeProblemObservationsResponse.isa = isa;
})(DescribeProblemObservationsResponse = exports.DescribeProblemObservationsResponse || (exports.DescribeProblemObservationsResponse = {}));
var DescribeProblemRequest;
(function (DescribeProblemRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeProblemRequest");
    }
    DescribeProblemRequest.isa = isa;
})(DescribeProblemRequest = exports.DescribeProblemRequest || (exports.DescribeProblemRequest = {}));
var DescribeProblemResponse;
(function (DescribeProblemResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeProblemResponse");
    }
    DescribeProblemResponse.isa = isa;
})(DescribeProblemResponse = exports.DescribeProblemResponse || (exports.DescribeProblemResponse = {}));
var InternalServerException;
(function (InternalServerException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalServerException");
    }
    InternalServerException.isa = isa;
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var ListApplicationsRequest;
(function (ListApplicationsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListApplicationsRequest");
    }
    ListApplicationsRequest.isa = isa;
})(ListApplicationsRequest = exports.ListApplicationsRequest || (exports.ListApplicationsRequest = {}));
var ListApplicationsResponse;
(function (ListApplicationsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListApplicationsResponse");
    }
    ListApplicationsResponse.isa = isa;
})(ListApplicationsResponse = exports.ListApplicationsResponse || (exports.ListApplicationsResponse = {}));
var ListComponentsRequest;
(function (ListComponentsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListComponentsRequest");
    }
    ListComponentsRequest.isa = isa;
})(ListComponentsRequest = exports.ListComponentsRequest || (exports.ListComponentsRequest = {}));
var ListComponentsResponse;
(function (ListComponentsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListComponentsResponse");
    }
    ListComponentsResponse.isa = isa;
})(ListComponentsResponse = exports.ListComponentsResponse || (exports.ListComponentsResponse = {}));
var ListConfigurationHistoryRequest;
(function (ListConfigurationHistoryRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListConfigurationHistoryRequest");
    }
    ListConfigurationHistoryRequest.isa = isa;
})(ListConfigurationHistoryRequest = exports.ListConfigurationHistoryRequest || (exports.ListConfigurationHistoryRequest = {}));
var ListConfigurationHistoryResponse;
(function (ListConfigurationHistoryResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListConfigurationHistoryResponse");
    }
    ListConfigurationHistoryResponse.isa = isa;
})(ListConfigurationHistoryResponse = exports.ListConfigurationHistoryResponse || (exports.ListConfigurationHistoryResponse = {}));
var ListLogPatternSetsRequest;
(function (ListLogPatternSetsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListLogPatternSetsRequest");
    }
    ListLogPatternSetsRequest.isa = isa;
})(ListLogPatternSetsRequest = exports.ListLogPatternSetsRequest || (exports.ListLogPatternSetsRequest = {}));
var ListLogPatternSetsResponse;
(function (ListLogPatternSetsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListLogPatternSetsResponse");
    }
    ListLogPatternSetsResponse.isa = isa;
})(ListLogPatternSetsResponse = exports.ListLogPatternSetsResponse || (exports.ListLogPatternSetsResponse = {}));
var ListLogPatternsRequest;
(function (ListLogPatternsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListLogPatternsRequest");
    }
    ListLogPatternsRequest.isa = isa;
})(ListLogPatternsRequest = exports.ListLogPatternsRequest || (exports.ListLogPatternsRequest = {}));
var ListLogPatternsResponse;
(function (ListLogPatternsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListLogPatternsResponse");
    }
    ListLogPatternsResponse.isa = isa;
})(ListLogPatternsResponse = exports.ListLogPatternsResponse || (exports.ListLogPatternsResponse = {}));
var ListProblemsRequest;
(function (ListProblemsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListProblemsRequest");
    }
    ListProblemsRequest.isa = isa;
})(ListProblemsRequest = exports.ListProblemsRequest || (exports.ListProblemsRequest = {}));
var ListProblemsResponse;
(function (ListProblemsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListProblemsResponse");
    }
    ListProblemsResponse.isa = isa;
})(ListProblemsResponse = exports.ListProblemsResponse || (exports.ListProblemsResponse = {}));
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
var LogPattern;
(function (LogPattern) {
    function isa(o) {
        return smithy_client_1.isa(o, "LogPattern");
    }
    LogPattern.isa = isa;
})(LogPattern = exports.LogPattern || (exports.LogPattern = {}));
var Observation;
(function (Observation) {
    function isa(o) {
        return smithy_client_1.isa(o, "Observation");
    }
    Observation.isa = isa;
})(Observation = exports.Observation || (exports.Observation = {}));
var Problem;
(function (Problem) {
    function isa(o) {
        return smithy_client_1.isa(o, "Problem");
    }
    Problem.isa = isa;
})(Problem = exports.Problem || (exports.Problem = {}));
var RelatedObservations;
(function (RelatedObservations) {
    function isa(o) {
        return smithy_client_1.isa(o, "RelatedObservations");
    }
    RelatedObservations.isa = isa;
})(RelatedObservations = exports.RelatedObservations || (exports.RelatedObservations = {}));
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
var Tag;
(function (Tag) {
    function isa(o) {
        return smithy_client_1.isa(o, "Tag");
    }
    Tag.isa = isa;
})(Tag = exports.Tag || (exports.Tag = {}));
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
var TagsAlreadyExistException;
(function (TagsAlreadyExistException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagsAlreadyExistException");
    }
    TagsAlreadyExistException.isa = isa;
})(TagsAlreadyExistException = exports.TagsAlreadyExistException || (exports.TagsAlreadyExistException = {}));
var TooManyTagsException;
(function (TooManyTagsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TooManyTagsException");
    }
    TooManyTagsException.isa = isa;
})(TooManyTagsException = exports.TooManyTagsException || (exports.TooManyTagsException = {}));
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
var UpdateApplicationRequest;
(function (UpdateApplicationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateApplicationRequest");
    }
    UpdateApplicationRequest.isa = isa;
})(UpdateApplicationRequest = exports.UpdateApplicationRequest || (exports.UpdateApplicationRequest = {}));
var UpdateApplicationResponse;
(function (UpdateApplicationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateApplicationResponse");
    }
    UpdateApplicationResponse.isa = isa;
})(UpdateApplicationResponse = exports.UpdateApplicationResponse || (exports.UpdateApplicationResponse = {}));
var UpdateComponentConfigurationRequest;
(function (UpdateComponentConfigurationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateComponentConfigurationRequest");
    }
    UpdateComponentConfigurationRequest.isa = isa;
})(UpdateComponentConfigurationRequest = exports.UpdateComponentConfigurationRequest || (exports.UpdateComponentConfigurationRequest = {}));
var UpdateComponentConfigurationResponse;
(function (UpdateComponentConfigurationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateComponentConfigurationResponse");
    }
    UpdateComponentConfigurationResponse.isa = isa;
})(UpdateComponentConfigurationResponse = exports.UpdateComponentConfigurationResponse || (exports.UpdateComponentConfigurationResponse = {}));
var UpdateComponentRequest;
(function (UpdateComponentRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateComponentRequest");
    }
    UpdateComponentRequest.isa = isa;
})(UpdateComponentRequest = exports.UpdateComponentRequest || (exports.UpdateComponentRequest = {}));
var UpdateComponentResponse;
(function (UpdateComponentResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateComponentResponse");
    }
    UpdateComponentResponse.isa = isa;
})(UpdateComponentResponse = exports.UpdateComponentResponse || (exports.UpdateComponentResponse = {}));
var UpdateLogPatternRequest;
(function (UpdateLogPatternRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateLogPatternRequest");
    }
    UpdateLogPatternRequest.isa = isa;
})(UpdateLogPatternRequest = exports.UpdateLogPatternRequest || (exports.UpdateLogPatternRequest = {}));
var UpdateLogPatternResponse;
(function (UpdateLogPatternResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateLogPatternResponse");
    }
    UpdateLogPatternResponse.isa = isa;
})(UpdateLogPatternResponse = exports.UpdateLogPatternResponse || (exports.UpdateLogPatternResponse = {}));
var ValidationException;
(function (ValidationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ValidationException");
    }
    ValidationException.isa = isa;
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
//# sourceMappingURL=index.js.map