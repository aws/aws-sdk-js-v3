"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AggregatedProfileTime;
(function (AggregatedProfileTime) {
    function isa(o) {
        return smithy_client_1.isa(o, "AggregatedProfileTime");
    }
    AggregatedProfileTime.isa = isa;
})(AggregatedProfileTime = exports.AggregatedProfileTime || (exports.AggregatedProfileTime = {}));
var AggregationPeriod;
(function (AggregationPeriod) {
    /**
     * Period of one day.
     */
    AggregationPeriod["P1D"] = "P1D";
    /**
     * Period of one hour.
     */
    AggregationPeriod["PT1H"] = "PT1H";
    /**
     * Period of five minutes.
     */
    AggregationPeriod["PT5M"] = "PT5M";
})(AggregationPeriod = exports.AggregationPeriod || (exports.AggregationPeriod = {}));
var ConflictException;
(function (ConflictException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConflictException");
    }
    ConflictException.isa = isa;
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var InternalServerException;
(function (InternalServerException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalServerException");
    }
    InternalServerException.isa = isa;
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var OrderBy;
(function (OrderBy) {
    /**
     * Order by timestamp in ascending order.
     */
    OrderBy["TIMESTAMP_ASCENDING"] = "TimestampAscending";
    /**
     * Order by timestamp in descending order.
     */
    OrderBy["TIMESTAMP_DESCENDING"] = "TimestampDescending";
})(OrderBy = exports.OrderBy || (exports.OrderBy = {}));
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
var ThrottlingException;
(function (ThrottlingException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ThrottlingException");
    }
    ThrottlingException.isa = isa;
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var ValidationException;
(function (ValidationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ValidationException");
    }
    ValidationException.isa = isa;
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var AgentConfiguration;
(function (AgentConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "AgentConfiguration");
    }
    AgentConfiguration.isa = isa;
})(AgentConfiguration = exports.AgentConfiguration || (exports.AgentConfiguration = {}));
var ConfigureAgentRequest;
(function (ConfigureAgentRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConfigureAgentRequest");
    }
    ConfigureAgentRequest.isa = isa;
})(ConfigureAgentRequest = exports.ConfigureAgentRequest || (exports.ConfigureAgentRequest = {}));
var ConfigureAgentResponse;
(function (ConfigureAgentResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConfigureAgentResponse");
    }
    ConfigureAgentResponse.isa = isa;
})(ConfigureAgentResponse = exports.ConfigureAgentResponse || (exports.ConfigureAgentResponse = {}));
var AgentOrchestrationConfig;
(function (AgentOrchestrationConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "AgentOrchestrationConfig");
    }
    AgentOrchestrationConfig.isa = isa;
})(AgentOrchestrationConfig = exports.AgentOrchestrationConfig || (exports.AgentOrchestrationConfig = {}));
var CreateProfilingGroupRequest;
(function (CreateProfilingGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateProfilingGroupRequest");
    }
    CreateProfilingGroupRequest.isa = isa;
})(CreateProfilingGroupRequest = exports.CreateProfilingGroupRequest || (exports.CreateProfilingGroupRequest = {}));
var CreateProfilingGroupResponse;
(function (CreateProfilingGroupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateProfilingGroupResponse");
    }
    CreateProfilingGroupResponse.isa = isa;
})(CreateProfilingGroupResponse = exports.CreateProfilingGroupResponse || (exports.CreateProfilingGroupResponse = {}));
var DeleteProfilingGroupRequest;
(function (DeleteProfilingGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteProfilingGroupRequest");
    }
    DeleteProfilingGroupRequest.isa = isa;
})(DeleteProfilingGroupRequest = exports.DeleteProfilingGroupRequest || (exports.DeleteProfilingGroupRequest = {}));
var DeleteProfilingGroupResponse;
(function (DeleteProfilingGroupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteProfilingGroupResponse");
    }
    DeleteProfilingGroupResponse.isa = isa;
})(DeleteProfilingGroupResponse = exports.DeleteProfilingGroupResponse || (exports.DeleteProfilingGroupResponse = {}));
var DescribeProfilingGroupRequest;
(function (DescribeProfilingGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeProfilingGroupRequest");
    }
    DescribeProfilingGroupRequest.isa = isa;
})(DescribeProfilingGroupRequest = exports.DescribeProfilingGroupRequest || (exports.DescribeProfilingGroupRequest = {}));
var DescribeProfilingGroupResponse;
(function (DescribeProfilingGroupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeProfilingGroupResponse");
    }
    DescribeProfilingGroupResponse.isa = isa;
})(DescribeProfilingGroupResponse = exports.DescribeProfilingGroupResponse || (exports.DescribeProfilingGroupResponse = {}));
var ListProfilingGroupsRequest;
(function (ListProfilingGroupsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListProfilingGroupsRequest");
    }
    ListProfilingGroupsRequest.isa = isa;
})(ListProfilingGroupsRequest = exports.ListProfilingGroupsRequest || (exports.ListProfilingGroupsRequest = {}));
var ListProfilingGroupsResponse;
(function (ListProfilingGroupsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListProfilingGroupsResponse");
    }
    ListProfilingGroupsResponse.isa = isa;
})(ListProfilingGroupsResponse = exports.ListProfilingGroupsResponse || (exports.ListProfilingGroupsResponse = {}));
var ProfilingGroupDescription;
(function (ProfilingGroupDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProfilingGroupDescription");
    }
    ProfilingGroupDescription.isa = isa;
})(ProfilingGroupDescription = exports.ProfilingGroupDescription || (exports.ProfilingGroupDescription = {}));
var ProfilingStatus;
(function (ProfilingStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProfilingStatus");
    }
    ProfilingStatus.isa = isa;
})(ProfilingStatus = exports.ProfilingStatus || (exports.ProfilingStatus = {}));
var UpdateProfilingGroupRequest;
(function (UpdateProfilingGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateProfilingGroupRequest");
    }
    UpdateProfilingGroupRequest.isa = isa;
})(UpdateProfilingGroupRequest = exports.UpdateProfilingGroupRequest || (exports.UpdateProfilingGroupRequest = {}));
var UpdateProfilingGroupResponse;
(function (UpdateProfilingGroupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateProfilingGroupResponse");
    }
    UpdateProfilingGroupResponse.isa = isa;
})(UpdateProfilingGroupResponse = exports.UpdateProfilingGroupResponse || (exports.UpdateProfilingGroupResponse = {}));
var GetProfileRequest;
(function (GetProfileRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetProfileRequest");
    }
    GetProfileRequest.isa = isa;
})(GetProfileRequest = exports.GetProfileRequest || (exports.GetProfileRequest = {}));
var GetProfileResponse;
(function (GetProfileResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetProfileResponse");
    }
    GetProfileResponse.isa = isa;
})(GetProfileResponse = exports.GetProfileResponse || (exports.GetProfileResponse = {}));
var ListProfileTimesRequest;
(function (ListProfileTimesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListProfileTimesRequest");
    }
    ListProfileTimesRequest.isa = isa;
})(ListProfileTimesRequest = exports.ListProfileTimesRequest || (exports.ListProfileTimesRequest = {}));
var ListProfileTimesResponse;
(function (ListProfileTimesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListProfileTimesResponse");
    }
    ListProfileTimesResponse.isa = isa;
})(ListProfileTimesResponse = exports.ListProfileTimesResponse || (exports.ListProfileTimesResponse = {}));
var ProfileTime;
(function (ProfileTime) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProfileTime");
    }
    ProfileTime.isa = isa;
})(ProfileTime = exports.ProfileTime || (exports.ProfileTime = {}));
var PostAgentProfileRequest;
(function (PostAgentProfileRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PostAgentProfileRequest");
    }
    PostAgentProfileRequest.isa = isa;
})(PostAgentProfileRequest = exports.PostAgentProfileRequest || (exports.PostAgentProfileRequest = {}));
var PostAgentProfileResponse;
(function (PostAgentProfileResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PostAgentProfileResponse");
    }
    PostAgentProfileResponse.isa = isa;
})(PostAgentProfileResponse = exports.PostAgentProfileResponse || (exports.PostAgentProfileResponse = {}));
//# sourceMappingURL=index.js.map