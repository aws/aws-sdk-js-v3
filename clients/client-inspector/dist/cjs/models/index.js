"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccessDeniedErrorCode;
(function (AccessDeniedErrorCode) {
    AccessDeniedErrorCode["ACCESS_DENIED_TO_ASSESSMENT_RUN"] = "ACCESS_DENIED_TO_ASSESSMENT_RUN";
    AccessDeniedErrorCode["ACCESS_DENIED_TO_ASSESSMENT_TARGET"] = "ACCESS_DENIED_TO_ASSESSMENT_TARGET";
    AccessDeniedErrorCode["ACCESS_DENIED_TO_ASSESSMENT_TEMPLATE"] = "ACCESS_DENIED_TO_ASSESSMENT_TEMPLATE";
    AccessDeniedErrorCode["ACCESS_DENIED_TO_FINDING"] = "ACCESS_DENIED_TO_FINDING";
    AccessDeniedErrorCode["ACCESS_DENIED_TO_IAM_ROLE"] = "ACCESS_DENIED_TO_IAM_ROLE";
    AccessDeniedErrorCode["ACCESS_DENIED_TO_RESOURCE_GROUP"] = "ACCESS_DENIED_TO_RESOURCE_GROUP";
    AccessDeniedErrorCode["ACCESS_DENIED_TO_RULES_PACKAGE"] = "ACCESS_DENIED_TO_RULES_PACKAGE";
    AccessDeniedErrorCode["ACCESS_DENIED_TO_SNS_TOPIC"] = "ACCESS_DENIED_TO_SNS_TOPIC";
})(AccessDeniedErrorCode = exports.AccessDeniedErrorCode || (exports.AccessDeniedErrorCode = {}));
var AccessDeniedException;
(function (AccessDeniedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AccessDeniedException");
    }
    AccessDeniedException.isa = isa;
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var AddAttributesToFindingsRequest;
(function (AddAttributesToFindingsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddAttributesToFindingsRequest");
    }
    AddAttributesToFindingsRequest.isa = isa;
})(AddAttributesToFindingsRequest = exports.AddAttributesToFindingsRequest || (exports.AddAttributesToFindingsRequest = {}));
var AddAttributesToFindingsResponse;
(function (AddAttributesToFindingsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddAttributesToFindingsResponse");
    }
    AddAttributesToFindingsResponse.isa = isa;
})(AddAttributesToFindingsResponse = exports.AddAttributesToFindingsResponse || (exports.AddAttributesToFindingsResponse = {}));
var AgentAlreadyRunningAssessment;
(function (AgentAlreadyRunningAssessment) {
    function isa(o) {
        return smithy_client_1.isa(o, "AgentAlreadyRunningAssessment");
    }
    AgentAlreadyRunningAssessment.isa = isa;
})(AgentAlreadyRunningAssessment = exports.AgentAlreadyRunningAssessment || (exports.AgentAlreadyRunningAssessment = {}));
var AgentFilter;
(function (AgentFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "AgentFilter");
    }
    AgentFilter.isa = isa;
})(AgentFilter = exports.AgentFilter || (exports.AgentFilter = {}));
var AgentHealth;
(function (AgentHealth) {
    AgentHealth["HEALTHY"] = "HEALTHY";
    AgentHealth["UNHEALTHY"] = "UNHEALTHY";
    AgentHealth["UNKNOWN"] = "UNKNOWN";
})(AgentHealth = exports.AgentHealth || (exports.AgentHealth = {}));
var AgentHealthCode;
(function (AgentHealthCode) {
    AgentHealthCode["IDLE"] = "IDLE";
    AgentHealthCode["RUNNING"] = "RUNNING";
    AgentHealthCode["SHUTDOWN"] = "SHUTDOWN";
    AgentHealthCode["THROTTLED"] = "THROTTLED";
    AgentHealthCode["UNHEALTHY"] = "UNHEALTHY";
    AgentHealthCode["UNKNOWN"] = "UNKNOWN";
})(AgentHealthCode = exports.AgentHealthCode || (exports.AgentHealthCode = {}));
var AgentPreview;
(function (AgentPreview) {
    function isa(o) {
        return smithy_client_1.isa(o, "AgentPreview");
    }
    AgentPreview.isa = isa;
})(AgentPreview = exports.AgentPreview || (exports.AgentPreview = {}));
var AgentsAlreadyRunningAssessmentException;
(function (AgentsAlreadyRunningAssessmentException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AgentsAlreadyRunningAssessmentException");
    }
    AgentsAlreadyRunningAssessmentException.isa = isa;
})(AgentsAlreadyRunningAssessmentException = exports.AgentsAlreadyRunningAssessmentException || (exports.AgentsAlreadyRunningAssessmentException = {}));
var AssessmentRun;
(function (AssessmentRun) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssessmentRun");
    }
    AssessmentRun.isa = isa;
})(AssessmentRun = exports.AssessmentRun || (exports.AssessmentRun = {}));
var AssessmentRunAgent;
(function (AssessmentRunAgent) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssessmentRunAgent");
    }
    AssessmentRunAgent.isa = isa;
})(AssessmentRunAgent = exports.AssessmentRunAgent || (exports.AssessmentRunAgent = {}));
var AssessmentRunFilter;
(function (AssessmentRunFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssessmentRunFilter");
    }
    AssessmentRunFilter.isa = isa;
})(AssessmentRunFilter = exports.AssessmentRunFilter || (exports.AssessmentRunFilter = {}));
var AssessmentRunInProgressException;
(function (AssessmentRunInProgressException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssessmentRunInProgressException");
    }
    AssessmentRunInProgressException.isa = isa;
})(AssessmentRunInProgressException = exports.AssessmentRunInProgressException || (exports.AssessmentRunInProgressException = {}));
var AssessmentRunNotification;
(function (AssessmentRunNotification) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssessmentRunNotification");
    }
    AssessmentRunNotification.isa = isa;
})(AssessmentRunNotification = exports.AssessmentRunNotification || (exports.AssessmentRunNotification = {}));
var AssessmentRunNotificationSnsStatusCode;
(function (AssessmentRunNotificationSnsStatusCode) {
    AssessmentRunNotificationSnsStatusCode["ACCESS_DENIED"] = "ACCESS_DENIED";
    AssessmentRunNotificationSnsStatusCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    AssessmentRunNotificationSnsStatusCode["SUCCESS"] = "SUCCESS";
    AssessmentRunNotificationSnsStatusCode["TOPIC_DOES_NOT_EXIST"] = "TOPIC_DOES_NOT_EXIST";
})(AssessmentRunNotificationSnsStatusCode = exports.AssessmentRunNotificationSnsStatusCode || (exports.AssessmentRunNotificationSnsStatusCode = {}));
var AssessmentRunState;
(function (AssessmentRunState) {
    AssessmentRunState["CANCELED"] = "CANCELED";
    AssessmentRunState["COLLECTING_DATA"] = "COLLECTING_DATA";
    AssessmentRunState["COMPLETED"] = "COMPLETED";
    AssessmentRunState["COMPLETED_WITH_ERRORS"] = "COMPLETED_WITH_ERRORS";
    AssessmentRunState["CREATED"] = "CREATED";
    AssessmentRunState["DATA_COLLECTED"] = "DATA_COLLECTED";
    AssessmentRunState["ERROR"] = "ERROR";
    AssessmentRunState["EVALUATING_RULES"] = "EVALUATING_RULES";
    AssessmentRunState["FAILED"] = "FAILED";
    AssessmentRunState["START_DATA_COLLECTION_IN_PROGRESS"] = "START_DATA_COLLECTION_IN_PROGRESS";
    AssessmentRunState["START_DATA_COLLECTION_PENDING"] = "START_DATA_COLLECTION_PENDING";
    AssessmentRunState["START_EVALUATING_RULES_PENDING"] = "START_EVALUATING_RULES_PENDING";
    AssessmentRunState["STOP_DATA_COLLECTION_PENDING"] = "STOP_DATA_COLLECTION_PENDING";
})(AssessmentRunState = exports.AssessmentRunState || (exports.AssessmentRunState = {}));
var AssessmentRunStateChange;
(function (AssessmentRunStateChange) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssessmentRunStateChange");
    }
    AssessmentRunStateChange.isa = isa;
})(AssessmentRunStateChange = exports.AssessmentRunStateChange || (exports.AssessmentRunStateChange = {}));
var AssessmentTarget;
(function (AssessmentTarget) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssessmentTarget");
    }
    AssessmentTarget.isa = isa;
})(AssessmentTarget = exports.AssessmentTarget || (exports.AssessmentTarget = {}));
var AssessmentTargetFilter;
(function (AssessmentTargetFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssessmentTargetFilter");
    }
    AssessmentTargetFilter.isa = isa;
})(AssessmentTargetFilter = exports.AssessmentTargetFilter || (exports.AssessmentTargetFilter = {}));
var AssessmentTemplate;
(function (AssessmentTemplate) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssessmentTemplate");
    }
    AssessmentTemplate.isa = isa;
})(AssessmentTemplate = exports.AssessmentTemplate || (exports.AssessmentTemplate = {}));
var AssessmentTemplateFilter;
(function (AssessmentTemplateFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssessmentTemplateFilter");
    }
    AssessmentTemplateFilter.isa = isa;
})(AssessmentTemplateFilter = exports.AssessmentTemplateFilter || (exports.AssessmentTemplateFilter = {}));
var AssetAttributes;
(function (AssetAttributes) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssetAttributes");
    }
    AssetAttributes.isa = isa;
})(AssetAttributes = exports.AssetAttributes || (exports.AssetAttributes = {}));
var AssetType;
(function (AssetType) {
    AssetType["EC2_INSTANCE"] = "ec2-instance";
})(AssetType = exports.AssetType || (exports.AssetType = {}));
var Attribute;
(function (Attribute) {
    function isa(o) {
        return smithy_client_1.isa(o, "Attribute");
    }
    Attribute.isa = isa;
})(Attribute = exports.Attribute || (exports.Attribute = {}));
var CreateAssessmentTargetRequest;
(function (CreateAssessmentTargetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAssessmentTargetRequest");
    }
    CreateAssessmentTargetRequest.isa = isa;
})(CreateAssessmentTargetRequest = exports.CreateAssessmentTargetRequest || (exports.CreateAssessmentTargetRequest = {}));
var CreateAssessmentTargetResponse;
(function (CreateAssessmentTargetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAssessmentTargetResponse");
    }
    CreateAssessmentTargetResponse.isa = isa;
})(CreateAssessmentTargetResponse = exports.CreateAssessmentTargetResponse || (exports.CreateAssessmentTargetResponse = {}));
var CreateAssessmentTemplateRequest;
(function (CreateAssessmentTemplateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAssessmentTemplateRequest");
    }
    CreateAssessmentTemplateRequest.isa = isa;
})(CreateAssessmentTemplateRequest = exports.CreateAssessmentTemplateRequest || (exports.CreateAssessmentTemplateRequest = {}));
var CreateAssessmentTemplateResponse;
(function (CreateAssessmentTemplateResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAssessmentTemplateResponse");
    }
    CreateAssessmentTemplateResponse.isa = isa;
})(CreateAssessmentTemplateResponse = exports.CreateAssessmentTemplateResponse || (exports.CreateAssessmentTemplateResponse = {}));
var CreateExclusionsPreviewRequest;
(function (CreateExclusionsPreviewRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateExclusionsPreviewRequest");
    }
    CreateExclusionsPreviewRequest.isa = isa;
})(CreateExclusionsPreviewRequest = exports.CreateExclusionsPreviewRequest || (exports.CreateExclusionsPreviewRequest = {}));
var CreateExclusionsPreviewResponse;
(function (CreateExclusionsPreviewResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateExclusionsPreviewResponse");
    }
    CreateExclusionsPreviewResponse.isa = isa;
})(CreateExclusionsPreviewResponse = exports.CreateExclusionsPreviewResponse || (exports.CreateExclusionsPreviewResponse = {}));
var CreateResourceGroupRequest;
(function (CreateResourceGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateResourceGroupRequest");
    }
    CreateResourceGroupRequest.isa = isa;
})(CreateResourceGroupRequest = exports.CreateResourceGroupRequest || (exports.CreateResourceGroupRequest = {}));
var CreateResourceGroupResponse;
(function (CreateResourceGroupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateResourceGroupResponse");
    }
    CreateResourceGroupResponse.isa = isa;
})(CreateResourceGroupResponse = exports.CreateResourceGroupResponse || (exports.CreateResourceGroupResponse = {}));
var DeleteAssessmentRunRequest;
(function (DeleteAssessmentRunRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteAssessmentRunRequest");
    }
    DeleteAssessmentRunRequest.isa = isa;
})(DeleteAssessmentRunRequest = exports.DeleteAssessmentRunRequest || (exports.DeleteAssessmentRunRequest = {}));
var DeleteAssessmentTargetRequest;
(function (DeleteAssessmentTargetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteAssessmentTargetRequest");
    }
    DeleteAssessmentTargetRequest.isa = isa;
})(DeleteAssessmentTargetRequest = exports.DeleteAssessmentTargetRequest || (exports.DeleteAssessmentTargetRequest = {}));
var DeleteAssessmentTemplateRequest;
(function (DeleteAssessmentTemplateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteAssessmentTemplateRequest");
    }
    DeleteAssessmentTemplateRequest.isa = isa;
})(DeleteAssessmentTemplateRequest = exports.DeleteAssessmentTemplateRequest || (exports.DeleteAssessmentTemplateRequest = {}));
var DescribeAssessmentRunsRequest;
(function (DescribeAssessmentRunsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAssessmentRunsRequest");
    }
    DescribeAssessmentRunsRequest.isa = isa;
})(DescribeAssessmentRunsRequest = exports.DescribeAssessmentRunsRequest || (exports.DescribeAssessmentRunsRequest = {}));
var DescribeAssessmentRunsResponse;
(function (DescribeAssessmentRunsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAssessmentRunsResponse");
    }
    DescribeAssessmentRunsResponse.isa = isa;
})(DescribeAssessmentRunsResponse = exports.DescribeAssessmentRunsResponse || (exports.DescribeAssessmentRunsResponse = {}));
var DescribeAssessmentTargetsRequest;
(function (DescribeAssessmentTargetsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAssessmentTargetsRequest");
    }
    DescribeAssessmentTargetsRequest.isa = isa;
})(DescribeAssessmentTargetsRequest = exports.DescribeAssessmentTargetsRequest || (exports.DescribeAssessmentTargetsRequest = {}));
var DescribeAssessmentTargetsResponse;
(function (DescribeAssessmentTargetsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAssessmentTargetsResponse");
    }
    DescribeAssessmentTargetsResponse.isa = isa;
})(DescribeAssessmentTargetsResponse = exports.DescribeAssessmentTargetsResponse || (exports.DescribeAssessmentTargetsResponse = {}));
var DescribeAssessmentTemplatesRequest;
(function (DescribeAssessmentTemplatesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAssessmentTemplatesRequest");
    }
    DescribeAssessmentTemplatesRequest.isa = isa;
})(DescribeAssessmentTemplatesRequest = exports.DescribeAssessmentTemplatesRequest || (exports.DescribeAssessmentTemplatesRequest = {}));
var DescribeAssessmentTemplatesResponse;
(function (DescribeAssessmentTemplatesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAssessmentTemplatesResponse");
    }
    DescribeAssessmentTemplatesResponse.isa = isa;
})(DescribeAssessmentTemplatesResponse = exports.DescribeAssessmentTemplatesResponse || (exports.DescribeAssessmentTemplatesResponse = {}));
var DescribeCrossAccountAccessRoleResponse;
(function (DescribeCrossAccountAccessRoleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeCrossAccountAccessRoleResponse");
    }
    DescribeCrossAccountAccessRoleResponse.isa = isa;
})(DescribeCrossAccountAccessRoleResponse = exports.DescribeCrossAccountAccessRoleResponse || (exports.DescribeCrossAccountAccessRoleResponse = {}));
var DescribeExclusionsRequest;
(function (DescribeExclusionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeExclusionsRequest");
    }
    DescribeExclusionsRequest.isa = isa;
})(DescribeExclusionsRequest = exports.DescribeExclusionsRequest || (exports.DescribeExclusionsRequest = {}));
var DescribeExclusionsResponse;
(function (DescribeExclusionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeExclusionsResponse");
    }
    DescribeExclusionsResponse.isa = isa;
})(DescribeExclusionsResponse = exports.DescribeExclusionsResponse || (exports.DescribeExclusionsResponse = {}));
var DescribeFindingsRequest;
(function (DescribeFindingsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeFindingsRequest");
    }
    DescribeFindingsRequest.isa = isa;
})(DescribeFindingsRequest = exports.DescribeFindingsRequest || (exports.DescribeFindingsRequest = {}));
var DescribeFindingsResponse;
(function (DescribeFindingsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeFindingsResponse");
    }
    DescribeFindingsResponse.isa = isa;
})(DescribeFindingsResponse = exports.DescribeFindingsResponse || (exports.DescribeFindingsResponse = {}));
var DescribeResourceGroupsRequest;
(function (DescribeResourceGroupsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeResourceGroupsRequest");
    }
    DescribeResourceGroupsRequest.isa = isa;
})(DescribeResourceGroupsRequest = exports.DescribeResourceGroupsRequest || (exports.DescribeResourceGroupsRequest = {}));
var DescribeResourceGroupsResponse;
(function (DescribeResourceGroupsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeResourceGroupsResponse");
    }
    DescribeResourceGroupsResponse.isa = isa;
})(DescribeResourceGroupsResponse = exports.DescribeResourceGroupsResponse || (exports.DescribeResourceGroupsResponse = {}));
var DescribeRulesPackagesRequest;
(function (DescribeRulesPackagesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeRulesPackagesRequest");
    }
    DescribeRulesPackagesRequest.isa = isa;
})(DescribeRulesPackagesRequest = exports.DescribeRulesPackagesRequest || (exports.DescribeRulesPackagesRequest = {}));
var DescribeRulesPackagesResponse;
(function (DescribeRulesPackagesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeRulesPackagesResponse");
    }
    DescribeRulesPackagesResponse.isa = isa;
})(DescribeRulesPackagesResponse = exports.DescribeRulesPackagesResponse || (exports.DescribeRulesPackagesResponse = {}));
var DurationRange;
(function (DurationRange) {
    function isa(o) {
        return smithy_client_1.isa(o, "DurationRange");
    }
    DurationRange.isa = isa;
})(DurationRange = exports.DurationRange || (exports.DurationRange = {}));
var EventSubscription;
(function (EventSubscription) {
    function isa(o) {
        return smithy_client_1.isa(o, "EventSubscription");
    }
    EventSubscription.isa = isa;
})(EventSubscription = exports.EventSubscription || (exports.EventSubscription = {}));
var Exclusion;
(function (Exclusion) {
    function isa(o) {
        return smithy_client_1.isa(o, "Exclusion");
    }
    Exclusion.isa = isa;
})(Exclusion = exports.Exclusion || (exports.Exclusion = {}));
var ExclusionPreview;
(function (ExclusionPreview) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExclusionPreview");
    }
    ExclusionPreview.isa = isa;
})(ExclusionPreview = exports.ExclusionPreview || (exports.ExclusionPreview = {}));
var FailedItemDetails;
(function (FailedItemDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "FailedItemDetails");
    }
    FailedItemDetails.isa = isa;
})(FailedItemDetails = exports.FailedItemDetails || (exports.FailedItemDetails = {}));
var FailedItemErrorCode;
(function (FailedItemErrorCode) {
    FailedItemErrorCode["ACCESS_DENIED"] = "ACCESS_DENIED";
    FailedItemErrorCode["DUPLICATE_ARN"] = "DUPLICATE_ARN";
    FailedItemErrorCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    FailedItemErrorCode["INVALID_ARN"] = "INVALID_ARN";
    FailedItemErrorCode["ITEM_DOES_NOT_EXIST"] = "ITEM_DOES_NOT_EXIST";
    FailedItemErrorCode["LIMIT_EXCEEDED"] = "LIMIT_EXCEEDED";
})(FailedItemErrorCode = exports.FailedItemErrorCode || (exports.FailedItemErrorCode = {}));
var Finding;
(function (Finding) {
    function isa(o) {
        return smithy_client_1.isa(o, "Finding");
    }
    Finding.isa = isa;
})(Finding = exports.Finding || (exports.Finding = {}));
var FindingFilter;
(function (FindingFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "FindingFilter");
    }
    FindingFilter.isa = isa;
})(FindingFilter = exports.FindingFilter || (exports.FindingFilter = {}));
var GetAssessmentReportRequest;
(function (GetAssessmentReportRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAssessmentReportRequest");
    }
    GetAssessmentReportRequest.isa = isa;
})(GetAssessmentReportRequest = exports.GetAssessmentReportRequest || (exports.GetAssessmentReportRequest = {}));
var GetAssessmentReportResponse;
(function (GetAssessmentReportResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAssessmentReportResponse");
    }
    GetAssessmentReportResponse.isa = isa;
})(GetAssessmentReportResponse = exports.GetAssessmentReportResponse || (exports.GetAssessmentReportResponse = {}));
var GetExclusionsPreviewRequest;
(function (GetExclusionsPreviewRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetExclusionsPreviewRequest");
    }
    GetExclusionsPreviewRequest.isa = isa;
})(GetExclusionsPreviewRequest = exports.GetExclusionsPreviewRequest || (exports.GetExclusionsPreviewRequest = {}));
var GetExclusionsPreviewResponse;
(function (GetExclusionsPreviewResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetExclusionsPreviewResponse");
    }
    GetExclusionsPreviewResponse.isa = isa;
})(GetExclusionsPreviewResponse = exports.GetExclusionsPreviewResponse || (exports.GetExclusionsPreviewResponse = {}));
var GetTelemetryMetadataRequest;
(function (GetTelemetryMetadataRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTelemetryMetadataRequest");
    }
    GetTelemetryMetadataRequest.isa = isa;
})(GetTelemetryMetadataRequest = exports.GetTelemetryMetadataRequest || (exports.GetTelemetryMetadataRequest = {}));
var GetTelemetryMetadataResponse;
(function (GetTelemetryMetadataResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTelemetryMetadataResponse");
    }
    GetTelemetryMetadataResponse.isa = isa;
})(GetTelemetryMetadataResponse = exports.GetTelemetryMetadataResponse || (exports.GetTelemetryMetadataResponse = {}));
var InspectorEvent;
(function (InspectorEvent) {
    InspectorEvent["ASSESSMENT_RUN_COMPLETED"] = "ASSESSMENT_RUN_COMPLETED";
    InspectorEvent["ASSESSMENT_RUN_STARTED"] = "ASSESSMENT_RUN_STARTED";
    InspectorEvent["ASSESSMENT_RUN_STATE_CHANGED"] = "ASSESSMENT_RUN_STATE_CHANGED";
    InspectorEvent["FINDING_REPORTED"] = "FINDING_REPORTED";
    InspectorEvent["OTHER"] = "OTHER";
})(InspectorEvent = exports.InspectorEvent || (exports.InspectorEvent = {}));
var InspectorServiceAttributes;
(function (InspectorServiceAttributes) {
    function isa(o) {
        return smithy_client_1.isa(o, "InspectorServiceAttributes");
    }
    InspectorServiceAttributes.isa = isa;
})(InspectorServiceAttributes = exports.InspectorServiceAttributes || (exports.InspectorServiceAttributes = {}));
var InternalException;
(function (InternalException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalException");
    }
    InternalException.isa = isa;
})(InternalException = exports.InternalException || (exports.InternalException = {}));
var InvalidCrossAccountRoleErrorCode;
(function (InvalidCrossAccountRoleErrorCode) {
    InvalidCrossAccountRoleErrorCode["ROLE_DOES_NOT_EXIST_OR_INVALID_TRUST_RELATIONSHIP"] = "ROLE_DOES_NOT_EXIST_OR_INVALID_TRUST_RELATIONSHIP";
    InvalidCrossAccountRoleErrorCode["ROLE_DOES_NOT_HAVE_CORRECT_POLICY"] = "ROLE_DOES_NOT_HAVE_CORRECT_POLICY";
})(InvalidCrossAccountRoleErrorCode = exports.InvalidCrossAccountRoleErrorCode || (exports.InvalidCrossAccountRoleErrorCode = {}));
var InvalidCrossAccountRoleException;
(function (InvalidCrossAccountRoleException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidCrossAccountRoleException");
    }
    InvalidCrossAccountRoleException.isa = isa;
})(InvalidCrossAccountRoleException = exports.InvalidCrossAccountRoleException || (exports.InvalidCrossAccountRoleException = {}));
var InvalidInputErrorCode;
(function (InvalidInputErrorCode) {
    InvalidInputErrorCode["ASSESSMENT_TARGET_NAME_ALREADY_TAKEN"] = "ASSESSMENT_TARGET_NAME_ALREADY_TAKEN";
    InvalidInputErrorCode["ASSESSMENT_TEMPLATE_NAME_ALREADY_TAKEN"] = "ASSESSMENT_TEMPLATE_NAME_ALREADY_TAKEN";
    InvalidInputErrorCode["INVALID_AGENT_ID"] = "INVALID_AGENT_ID";
    InvalidInputErrorCode["INVALID_ASSESSMENT_RUN_ARN"] = "INVALID_ASSESSMENT_RUN_ARN";
    InvalidInputErrorCode["INVALID_ASSESSMENT_RUN_COMPLETION_TIME_RANGE"] = "INVALID_ASSESSMENT_RUN_COMPLETION_TIME_RANGE";
    InvalidInputErrorCode["INVALID_ASSESSMENT_RUN_DURATION_RANGE"] = "INVALID_ASSESSMENT_RUN_DURATION_RANGE";
    InvalidInputErrorCode["INVALID_ASSESSMENT_RUN_START_TIME_RANGE"] = "INVALID_ASSESSMENT_RUN_START_TIME_RANGE";
    InvalidInputErrorCode["INVALID_ASSESSMENT_RUN_STATE"] = "INVALID_ASSESSMENT_RUN_STATE";
    InvalidInputErrorCode["INVALID_ASSESSMENT_RUN_STATE_CHANGE_TIME_RANGE"] = "INVALID_ASSESSMENT_RUN_STATE_CHANGE_TIME_RANGE";
    InvalidInputErrorCode["INVALID_ASSESSMENT_TARGET_ARN"] = "INVALID_ASSESSMENT_TARGET_ARN";
    InvalidInputErrorCode["INVALID_ASSESSMENT_TARGET_NAME"] = "INVALID_ASSESSMENT_TARGET_NAME";
    InvalidInputErrorCode["INVALID_ASSESSMENT_TARGET_NAME_PATTERN"] = "INVALID_ASSESSMENT_TARGET_NAME_PATTERN";
    InvalidInputErrorCode["INVALID_ASSESSMENT_TEMPLATE_ARN"] = "INVALID_ASSESSMENT_TEMPLATE_ARN";
    InvalidInputErrorCode["INVALID_ASSESSMENT_TEMPLATE_DURATION"] = "INVALID_ASSESSMENT_TEMPLATE_DURATION";
    InvalidInputErrorCode["INVALID_ASSESSMENT_TEMPLATE_DURATION_RANGE"] = "INVALID_ASSESSMENT_TEMPLATE_DURATION_RANGE";
    InvalidInputErrorCode["INVALID_ASSESSMENT_TEMPLATE_NAME"] = "INVALID_ASSESSMENT_TEMPLATE_NAME";
    InvalidInputErrorCode["INVALID_ASSESSMENT_TEMPLATE_NAME_PATTERN"] = "INVALID_ASSESSMENT_TEMPLATE_NAME_PATTERN";
    InvalidInputErrorCode["INVALID_ATTRIBUTE"] = "INVALID_ATTRIBUTE";
    InvalidInputErrorCode["INVALID_AUTO_SCALING_GROUP"] = "INVALID_AUTO_SCALING_GROUP";
    InvalidInputErrorCode["INVALID_EVENT"] = "INVALID_EVENT";
    InvalidInputErrorCode["INVALID_FINDING_ARN"] = "INVALID_FINDING_ARN";
    InvalidInputErrorCode["INVALID_IAM_ROLE_ARN"] = "INVALID_IAM_ROLE_ARN";
    InvalidInputErrorCode["INVALID_LOCALE"] = "INVALID_LOCALE";
    InvalidInputErrorCode["INVALID_MAX_RESULTS"] = "INVALID_MAX_RESULTS";
    InvalidInputErrorCode["INVALID_NUMBER_OF_AGENT_IDS"] = "INVALID_NUMBER_OF_AGENT_IDS";
    InvalidInputErrorCode["INVALID_NUMBER_OF_ASSESSMENT_RUN_ARNS"] = "INVALID_NUMBER_OF_ASSESSMENT_RUN_ARNS";
    InvalidInputErrorCode["INVALID_NUMBER_OF_ASSESSMENT_RUN_STATES"] = "INVALID_NUMBER_OF_ASSESSMENT_RUN_STATES";
    InvalidInputErrorCode["INVALID_NUMBER_OF_ASSESSMENT_TARGET_ARNS"] = "INVALID_NUMBER_OF_ASSESSMENT_TARGET_ARNS";
    InvalidInputErrorCode["INVALID_NUMBER_OF_ASSESSMENT_TEMPLATE_ARNS"] = "INVALID_NUMBER_OF_ASSESSMENT_TEMPLATE_ARNS";
    InvalidInputErrorCode["INVALID_NUMBER_OF_ATTRIBUTES"] = "INVALID_NUMBER_OF_ATTRIBUTES";
    InvalidInputErrorCode["INVALID_NUMBER_OF_AUTO_SCALING_GROUPS"] = "INVALID_NUMBER_OF_AUTO_SCALING_GROUPS";
    InvalidInputErrorCode["INVALID_NUMBER_OF_FINDING_ARNS"] = "INVALID_NUMBER_OF_FINDING_ARNS";
    InvalidInputErrorCode["INVALID_NUMBER_OF_RESOURCE_GROUP_ARNS"] = "INVALID_NUMBER_OF_RESOURCE_GROUP_ARNS";
    InvalidInputErrorCode["INVALID_NUMBER_OF_RESOURCE_GROUP_TAGS"] = "INVALID_NUMBER_OF_RESOURCE_GROUP_TAGS";
    InvalidInputErrorCode["INVALID_NUMBER_OF_RULES_PACKAGE_ARNS"] = "INVALID_NUMBER_OF_RULES_PACKAGE_ARNS";
    InvalidInputErrorCode["INVALID_NUMBER_OF_RULE_NAMES"] = "INVALID_NUMBER_OF_RULE_NAMES";
    InvalidInputErrorCode["INVALID_NUMBER_OF_SEVERITIES"] = "INVALID_NUMBER_OF_SEVERITIES";
    InvalidInputErrorCode["INVALID_NUMBER_OF_TAGS"] = "INVALID_NUMBER_OF_TAGS";
    InvalidInputErrorCode["INVALID_NUMBER_OF_USER_ATTRIBUTES"] = "INVALID_NUMBER_OF_USER_ATTRIBUTES";
    InvalidInputErrorCode["INVALID_PAGINATION_TOKEN"] = "INVALID_PAGINATION_TOKEN";
    InvalidInputErrorCode["INVALID_RESOURCE_ARN"] = "INVALID_RESOURCE_ARN";
    InvalidInputErrorCode["INVALID_RESOURCE_GROUP_ARN"] = "INVALID_RESOURCE_GROUP_ARN";
    InvalidInputErrorCode["INVALID_RESOURCE_GROUP_TAG_KEY"] = "INVALID_RESOURCE_GROUP_TAG_KEY";
    InvalidInputErrorCode["INVALID_RESOURCE_GROUP_TAG_VALUE"] = "INVALID_RESOURCE_GROUP_TAG_VALUE";
    InvalidInputErrorCode["INVALID_RULES_PACKAGE_ARN"] = "INVALID_RULES_PACKAGE_ARN";
    InvalidInputErrorCode["INVALID_RULE_NAME"] = "INVALID_RULE_NAME";
    InvalidInputErrorCode["INVALID_SEVERITY"] = "INVALID_SEVERITY";
    InvalidInputErrorCode["INVALID_SNS_TOPIC_ARN"] = "INVALID_SNS_TOPIC_ARN";
    InvalidInputErrorCode["INVALID_TAG"] = "INVALID_TAG";
    InvalidInputErrorCode["INVALID_TAG_KEY"] = "INVALID_TAG_KEY";
    InvalidInputErrorCode["INVALID_TAG_VALUE"] = "INVALID_TAG_VALUE";
    InvalidInputErrorCode["INVALID_USER_ATTRIBUTE"] = "INVALID_USER_ATTRIBUTE";
    InvalidInputErrorCode["INVALID_USER_ATTRIBUTE_KEY"] = "INVALID_USER_ATTRIBUTE_KEY";
    InvalidInputErrorCode["INVALID_USER_ATTRIBUTE_VALUE"] = "INVALID_USER_ATTRIBUTE_VALUE";
})(InvalidInputErrorCode = exports.InvalidInputErrorCode || (exports.InvalidInputErrorCode = {}));
var InvalidInputException;
(function (InvalidInputException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidInputException");
    }
    InvalidInputException.isa = isa;
})(InvalidInputException = exports.InvalidInputException || (exports.InvalidInputException = {}));
var LimitExceededErrorCode;
(function (LimitExceededErrorCode) {
    LimitExceededErrorCode["ASSESSMENT_RUN_LIMIT_EXCEEDED"] = "ASSESSMENT_RUN_LIMIT_EXCEEDED";
    LimitExceededErrorCode["ASSESSMENT_TARGET_LIMIT_EXCEEDED"] = "ASSESSMENT_TARGET_LIMIT_EXCEEDED";
    LimitExceededErrorCode["ASSESSMENT_TEMPLATE_LIMIT_EXCEEDED"] = "ASSESSMENT_TEMPLATE_LIMIT_EXCEEDED";
    LimitExceededErrorCode["EVENT_SUBSCRIPTION_LIMIT_EXCEEDED"] = "EVENT_SUBSCRIPTION_LIMIT_EXCEEDED";
    LimitExceededErrorCode["RESOURCE_GROUP_LIMIT_EXCEEDED"] = "RESOURCE_GROUP_LIMIT_EXCEEDED";
})(LimitExceededErrorCode = exports.LimitExceededErrorCode || (exports.LimitExceededErrorCode = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ListAssessmentRunAgentsRequest;
(function (ListAssessmentRunAgentsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAssessmentRunAgentsRequest");
    }
    ListAssessmentRunAgentsRequest.isa = isa;
})(ListAssessmentRunAgentsRequest = exports.ListAssessmentRunAgentsRequest || (exports.ListAssessmentRunAgentsRequest = {}));
var ListAssessmentRunAgentsResponse;
(function (ListAssessmentRunAgentsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAssessmentRunAgentsResponse");
    }
    ListAssessmentRunAgentsResponse.isa = isa;
})(ListAssessmentRunAgentsResponse = exports.ListAssessmentRunAgentsResponse || (exports.ListAssessmentRunAgentsResponse = {}));
var ListAssessmentRunsRequest;
(function (ListAssessmentRunsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAssessmentRunsRequest");
    }
    ListAssessmentRunsRequest.isa = isa;
})(ListAssessmentRunsRequest = exports.ListAssessmentRunsRequest || (exports.ListAssessmentRunsRequest = {}));
var ListAssessmentRunsResponse;
(function (ListAssessmentRunsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAssessmentRunsResponse");
    }
    ListAssessmentRunsResponse.isa = isa;
})(ListAssessmentRunsResponse = exports.ListAssessmentRunsResponse || (exports.ListAssessmentRunsResponse = {}));
var ListAssessmentTargetsRequest;
(function (ListAssessmentTargetsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAssessmentTargetsRequest");
    }
    ListAssessmentTargetsRequest.isa = isa;
})(ListAssessmentTargetsRequest = exports.ListAssessmentTargetsRequest || (exports.ListAssessmentTargetsRequest = {}));
var ListAssessmentTargetsResponse;
(function (ListAssessmentTargetsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAssessmentTargetsResponse");
    }
    ListAssessmentTargetsResponse.isa = isa;
})(ListAssessmentTargetsResponse = exports.ListAssessmentTargetsResponse || (exports.ListAssessmentTargetsResponse = {}));
var ListAssessmentTemplatesRequest;
(function (ListAssessmentTemplatesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAssessmentTemplatesRequest");
    }
    ListAssessmentTemplatesRequest.isa = isa;
})(ListAssessmentTemplatesRequest = exports.ListAssessmentTemplatesRequest || (exports.ListAssessmentTemplatesRequest = {}));
var ListAssessmentTemplatesResponse;
(function (ListAssessmentTemplatesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAssessmentTemplatesResponse");
    }
    ListAssessmentTemplatesResponse.isa = isa;
})(ListAssessmentTemplatesResponse = exports.ListAssessmentTemplatesResponse || (exports.ListAssessmentTemplatesResponse = {}));
var ListEventSubscriptionsRequest;
(function (ListEventSubscriptionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListEventSubscriptionsRequest");
    }
    ListEventSubscriptionsRequest.isa = isa;
})(ListEventSubscriptionsRequest = exports.ListEventSubscriptionsRequest || (exports.ListEventSubscriptionsRequest = {}));
var ListEventSubscriptionsResponse;
(function (ListEventSubscriptionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListEventSubscriptionsResponse");
    }
    ListEventSubscriptionsResponse.isa = isa;
})(ListEventSubscriptionsResponse = exports.ListEventSubscriptionsResponse || (exports.ListEventSubscriptionsResponse = {}));
var ListExclusionsRequest;
(function (ListExclusionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListExclusionsRequest");
    }
    ListExclusionsRequest.isa = isa;
})(ListExclusionsRequest = exports.ListExclusionsRequest || (exports.ListExclusionsRequest = {}));
var ListExclusionsResponse;
(function (ListExclusionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListExclusionsResponse");
    }
    ListExclusionsResponse.isa = isa;
})(ListExclusionsResponse = exports.ListExclusionsResponse || (exports.ListExclusionsResponse = {}));
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
var ListRulesPackagesRequest;
(function (ListRulesPackagesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListRulesPackagesRequest");
    }
    ListRulesPackagesRequest.isa = isa;
})(ListRulesPackagesRequest = exports.ListRulesPackagesRequest || (exports.ListRulesPackagesRequest = {}));
var ListRulesPackagesResponse;
(function (ListRulesPackagesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListRulesPackagesResponse");
    }
    ListRulesPackagesResponse.isa = isa;
})(ListRulesPackagesResponse = exports.ListRulesPackagesResponse || (exports.ListRulesPackagesResponse = {}));
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
var Locale;
(function (Locale) {
    Locale["EN_US"] = "EN_US";
})(Locale = exports.Locale || (exports.Locale = {}));
var NetworkInterface;
(function (NetworkInterface) {
    function isa(o) {
        return smithy_client_1.isa(o, "NetworkInterface");
    }
    NetworkInterface.isa = isa;
})(NetworkInterface = exports.NetworkInterface || (exports.NetworkInterface = {}));
var NoSuchEntityErrorCode;
(function (NoSuchEntityErrorCode) {
    NoSuchEntityErrorCode["ASSESSMENT_RUN_DOES_NOT_EXIST"] = "ASSESSMENT_RUN_DOES_NOT_EXIST";
    NoSuchEntityErrorCode["ASSESSMENT_TARGET_DOES_NOT_EXIST"] = "ASSESSMENT_TARGET_DOES_NOT_EXIST";
    NoSuchEntityErrorCode["ASSESSMENT_TEMPLATE_DOES_NOT_EXIST"] = "ASSESSMENT_TEMPLATE_DOES_NOT_EXIST";
    NoSuchEntityErrorCode["FINDING_DOES_NOT_EXIST"] = "FINDING_DOES_NOT_EXIST";
    NoSuchEntityErrorCode["IAM_ROLE_DOES_NOT_EXIST"] = "IAM_ROLE_DOES_NOT_EXIST";
    NoSuchEntityErrorCode["RESOURCE_GROUP_DOES_NOT_EXIST"] = "RESOURCE_GROUP_DOES_NOT_EXIST";
    NoSuchEntityErrorCode["RULES_PACKAGE_DOES_NOT_EXIST"] = "RULES_PACKAGE_DOES_NOT_EXIST";
    NoSuchEntityErrorCode["SNS_TOPIC_DOES_NOT_EXIST"] = "SNS_TOPIC_DOES_NOT_EXIST";
})(NoSuchEntityErrorCode = exports.NoSuchEntityErrorCode || (exports.NoSuchEntityErrorCode = {}));
var NoSuchEntityException;
(function (NoSuchEntityException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NoSuchEntityException");
    }
    NoSuchEntityException.isa = isa;
})(NoSuchEntityException = exports.NoSuchEntityException || (exports.NoSuchEntityException = {}));
var PreviewAgentsRequest;
(function (PreviewAgentsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PreviewAgentsRequest");
    }
    PreviewAgentsRequest.isa = isa;
})(PreviewAgentsRequest = exports.PreviewAgentsRequest || (exports.PreviewAgentsRequest = {}));
var PreviewAgentsResponse;
(function (PreviewAgentsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PreviewAgentsResponse");
    }
    PreviewAgentsResponse.isa = isa;
})(PreviewAgentsResponse = exports.PreviewAgentsResponse || (exports.PreviewAgentsResponse = {}));
var PreviewGenerationInProgressException;
(function (PreviewGenerationInProgressException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PreviewGenerationInProgressException");
    }
    PreviewGenerationInProgressException.isa = isa;
})(PreviewGenerationInProgressException = exports.PreviewGenerationInProgressException || (exports.PreviewGenerationInProgressException = {}));
var PreviewStatus;
(function (PreviewStatus) {
    PreviewStatus["COMPLETED"] = "COMPLETED";
    PreviewStatus["WORK_IN_PROGRESS"] = "WORK_IN_PROGRESS";
})(PreviewStatus = exports.PreviewStatus || (exports.PreviewStatus = {}));
var PrivateIp;
(function (PrivateIp) {
    function isa(o) {
        return smithy_client_1.isa(o, "PrivateIp");
    }
    PrivateIp.isa = isa;
})(PrivateIp = exports.PrivateIp || (exports.PrivateIp = {}));
var RegisterCrossAccountAccessRoleRequest;
(function (RegisterCrossAccountAccessRoleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegisterCrossAccountAccessRoleRequest");
    }
    RegisterCrossAccountAccessRoleRequest.isa = isa;
})(RegisterCrossAccountAccessRoleRequest = exports.RegisterCrossAccountAccessRoleRequest || (exports.RegisterCrossAccountAccessRoleRequest = {}));
var RemoveAttributesFromFindingsRequest;
(function (RemoveAttributesFromFindingsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RemoveAttributesFromFindingsRequest");
    }
    RemoveAttributesFromFindingsRequest.isa = isa;
})(RemoveAttributesFromFindingsRequest = exports.RemoveAttributesFromFindingsRequest || (exports.RemoveAttributesFromFindingsRequest = {}));
var RemoveAttributesFromFindingsResponse;
(function (RemoveAttributesFromFindingsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "RemoveAttributesFromFindingsResponse");
    }
    RemoveAttributesFromFindingsResponse.isa = isa;
})(RemoveAttributesFromFindingsResponse = exports.RemoveAttributesFromFindingsResponse || (exports.RemoveAttributesFromFindingsResponse = {}));
var ReportFileFormat;
(function (ReportFileFormat) {
    ReportFileFormat["HTML"] = "HTML";
    ReportFileFormat["PDF"] = "PDF";
})(ReportFileFormat = exports.ReportFileFormat || (exports.ReportFileFormat = {}));
var ReportStatus;
(function (ReportStatus) {
    ReportStatus["COMPLETED"] = "COMPLETED";
    ReportStatus["FAILED"] = "FAILED";
    ReportStatus["WORK_IN_PROGRESS"] = "WORK_IN_PROGRESS";
})(ReportStatus = exports.ReportStatus || (exports.ReportStatus = {}));
var ReportType;
(function (ReportType) {
    ReportType["FINDING"] = "FINDING";
    ReportType["FULL"] = "FULL";
})(ReportType = exports.ReportType || (exports.ReportType = {}));
var ResourceGroup;
(function (ResourceGroup) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceGroup");
    }
    ResourceGroup.isa = isa;
})(ResourceGroup = exports.ResourceGroup || (exports.ResourceGroup = {}));
var ResourceGroupTag;
(function (ResourceGroupTag) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceGroupTag");
    }
    ResourceGroupTag.isa = isa;
})(ResourceGroupTag = exports.ResourceGroupTag || (exports.ResourceGroupTag = {}));
var RulesPackage;
(function (RulesPackage) {
    function isa(o) {
        return smithy_client_1.isa(o, "RulesPackage");
    }
    RulesPackage.isa = isa;
})(RulesPackage = exports.RulesPackage || (exports.RulesPackage = {}));
var Scope;
(function (Scope) {
    function isa(o) {
        return smithy_client_1.isa(o, "Scope");
    }
    Scope.isa = isa;
})(Scope = exports.Scope || (exports.Scope = {}));
var ScopeType;
(function (ScopeType) {
    ScopeType["INSTANCE_ID"] = "INSTANCE_ID";
    ScopeType["RULES_PACKAGE_ARN"] = "RULES_PACKAGE_ARN";
})(ScopeType = exports.ScopeType || (exports.ScopeType = {}));
var SecurityGroup;
(function (SecurityGroup) {
    function isa(o) {
        return smithy_client_1.isa(o, "SecurityGroup");
    }
    SecurityGroup.isa = isa;
})(SecurityGroup = exports.SecurityGroup || (exports.SecurityGroup = {}));
var ServiceTemporarilyUnavailableException;
(function (ServiceTemporarilyUnavailableException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceTemporarilyUnavailableException");
    }
    ServiceTemporarilyUnavailableException.isa = isa;
})(ServiceTemporarilyUnavailableException = exports.ServiceTemporarilyUnavailableException || (exports.ServiceTemporarilyUnavailableException = {}));
var SetTagsForResourceRequest;
(function (SetTagsForResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetTagsForResourceRequest");
    }
    SetTagsForResourceRequest.isa = isa;
})(SetTagsForResourceRequest = exports.SetTagsForResourceRequest || (exports.SetTagsForResourceRequest = {}));
var Severity;
(function (Severity) {
    Severity["HIGH"] = "High";
    Severity["INFORMATIONAL"] = "Informational";
    Severity["LOW"] = "Low";
    Severity["MEDIUM"] = "Medium";
    Severity["UNDEFINED"] = "Undefined";
})(Severity = exports.Severity || (exports.Severity = {}));
var StartAssessmentRunRequest;
(function (StartAssessmentRunRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartAssessmentRunRequest");
    }
    StartAssessmentRunRequest.isa = isa;
})(StartAssessmentRunRequest = exports.StartAssessmentRunRequest || (exports.StartAssessmentRunRequest = {}));
var StartAssessmentRunResponse;
(function (StartAssessmentRunResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartAssessmentRunResponse");
    }
    StartAssessmentRunResponse.isa = isa;
})(StartAssessmentRunResponse = exports.StartAssessmentRunResponse || (exports.StartAssessmentRunResponse = {}));
var StopAction;
(function (StopAction) {
    StopAction["SKIP_EVALUATION"] = "SKIP_EVALUATION";
    StopAction["START_EVALUATION"] = "START_EVALUATION";
})(StopAction = exports.StopAction || (exports.StopAction = {}));
var StopAssessmentRunRequest;
(function (StopAssessmentRunRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopAssessmentRunRequest");
    }
    StopAssessmentRunRequest.isa = isa;
})(StopAssessmentRunRequest = exports.StopAssessmentRunRequest || (exports.StopAssessmentRunRequest = {}));
var SubscribeToEventRequest;
(function (SubscribeToEventRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SubscribeToEventRequest");
    }
    SubscribeToEventRequest.isa = isa;
})(SubscribeToEventRequest = exports.SubscribeToEventRequest || (exports.SubscribeToEventRequest = {}));
var Subscription;
(function (Subscription) {
    function isa(o) {
        return smithy_client_1.isa(o, "Subscription");
    }
    Subscription.isa = isa;
})(Subscription = exports.Subscription || (exports.Subscription = {}));
var Tag;
(function (Tag) {
    function isa(o) {
        return smithy_client_1.isa(o, "Tag");
    }
    Tag.isa = isa;
})(Tag = exports.Tag || (exports.Tag = {}));
var TelemetryMetadata;
(function (TelemetryMetadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "TelemetryMetadata");
    }
    TelemetryMetadata.isa = isa;
})(TelemetryMetadata = exports.TelemetryMetadata || (exports.TelemetryMetadata = {}));
var TimestampRange;
(function (TimestampRange) {
    function isa(o) {
        return smithy_client_1.isa(o, "TimestampRange");
    }
    TimestampRange.isa = isa;
})(TimestampRange = exports.TimestampRange || (exports.TimestampRange = {}));
var UnsubscribeFromEventRequest;
(function (UnsubscribeFromEventRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnsubscribeFromEventRequest");
    }
    UnsubscribeFromEventRequest.isa = isa;
})(UnsubscribeFromEventRequest = exports.UnsubscribeFromEventRequest || (exports.UnsubscribeFromEventRequest = {}));
var UnsupportedFeatureException;
(function (UnsupportedFeatureException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnsupportedFeatureException");
    }
    UnsupportedFeatureException.isa = isa;
})(UnsupportedFeatureException = exports.UnsupportedFeatureException || (exports.UnsupportedFeatureException = {}));
var UpdateAssessmentTargetRequest;
(function (UpdateAssessmentTargetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateAssessmentTargetRequest");
    }
    UpdateAssessmentTargetRequest.isa = isa;
})(UpdateAssessmentTargetRequest = exports.UpdateAssessmentTargetRequest || (exports.UpdateAssessmentTargetRequest = {}));
//# sourceMappingURL=index.js.map