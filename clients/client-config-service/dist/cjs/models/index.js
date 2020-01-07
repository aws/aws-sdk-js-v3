"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccountAggregationSource;
(function (AccountAggregationSource) {
    function isa(o) {
        return smithy_client_1.isa(o, "AccountAggregationSource");
    }
    AccountAggregationSource.isa = isa;
})(AccountAggregationSource = exports.AccountAggregationSource || (exports.AccountAggregationSource = {}));
var AggregateComplianceByConfigRule;
(function (AggregateComplianceByConfigRule) {
    function isa(o) {
        return smithy_client_1.isa(o, "AggregateComplianceByConfigRule");
    }
    AggregateComplianceByConfigRule.isa = isa;
})(AggregateComplianceByConfigRule = exports.AggregateComplianceByConfigRule || (exports.AggregateComplianceByConfigRule = {}));
var AggregateComplianceCount;
(function (AggregateComplianceCount) {
    function isa(o) {
        return smithy_client_1.isa(o, "AggregateComplianceCount");
    }
    AggregateComplianceCount.isa = isa;
})(AggregateComplianceCount = exports.AggregateComplianceCount || (exports.AggregateComplianceCount = {}));
var AggregateEvaluationResult;
(function (AggregateEvaluationResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "AggregateEvaluationResult");
    }
    AggregateEvaluationResult.isa = isa;
})(AggregateEvaluationResult = exports.AggregateEvaluationResult || (exports.AggregateEvaluationResult = {}));
var AggregateResourceIdentifier;
(function (AggregateResourceIdentifier) {
    function isa(o) {
        return smithy_client_1.isa(o, "AggregateResourceIdentifier");
    }
    AggregateResourceIdentifier.isa = isa;
})(AggregateResourceIdentifier = exports.AggregateResourceIdentifier || (exports.AggregateResourceIdentifier = {}));
var AggregatedSourceStatus;
(function (AggregatedSourceStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "AggregatedSourceStatus");
    }
    AggregatedSourceStatus.isa = isa;
})(AggregatedSourceStatus = exports.AggregatedSourceStatus || (exports.AggregatedSourceStatus = {}));
var AggregatedSourceStatusType;
(function (AggregatedSourceStatusType) {
    AggregatedSourceStatusType["FAILED"] = "FAILED";
    AggregatedSourceStatusType["OUTDATED"] = "OUTDATED";
    AggregatedSourceStatusType["SUCCEEDED"] = "SUCCEEDED";
})(AggregatedSourceStatusType = exports.AggregatedSourceStatusType || (exports.AggregatedSourceStatusType = {}));
var AggregatedSourceType;
(function (AggregatedSourceType) {
    AggregatedSourceType["ACCOUNT"] = "ACCOUNT";
    AggregatedSourceType["ORGANIZATION"] = "ORGANIZATION";
})(AggregatedSourceType = exports.AggregatedSourceType || (exports.AggregatedSourceType = {}));
var AggregationAuthorization;
(function (AggregationAuthorization) {
    function isa(o) {
        return smithy_client_1.isa(o, "AggregationAuthorization");
    }
    AggregationAuthorization.isa = isa;
})(AggregationAuthorization = exports.AggregationAuthorization || (exports.AggregationAuthorization = {}));
var BaseConfigurationItem;
(function (BaseConfigurationItem) {
    function isa(o) {
        return smithy_client_1.isa(o, "BaseConfigurationItem");
    }
    BaseConfigurationItem.isa = isa;
})(BaseConfigurationItem = exports.BaseConfigurationItem || (exports.BaseConfigurationItem = {}));
var BatchGetAggregateResourceConfigRequest;
(function (BatchGetAggregateResourceConfigRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetAggregateResourceConfigRequest");
    }
    BatchGetAggregateResourceConfigRequest.isa = isa;
})(BatchGetAggregateResourceConfigRequest = exports.BatchGetAggregateResourceConfigRequest || (exports.BatchGetAggregateResourceConfigRequest = {}));
var BatchGetAggregateResourceConfigResponse;
(function (BatchGetAggregateResourceConfigResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetAggregateResourceConfigResponse");
    }
    BatchGetAggregateResourceConfigResponse.isa = isa;
})(BatchGetAggregateResourceConfigResponse = exports.BatchGetAggregateResourceConfigResponse || (exports.BatchGetAggregateResourceConfigResponse = {}));
var BatchGetResourceConfigRequest;
(function (BatchGetResourceConfigRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetResourceConfigRequest");
    }
    BatchGetResourceConfigRequest.isa = isa;
})(BatchGetResourceConfigRequest = exports.BatchGetResourceConfigRequest || (exports.BatchGetResourceConfigRequest = {}));
var BatchGetResourceConfigResponse;
(function (BatchGetResourceConfigResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetResourceConfigResponse");
    }
    BatchGetResourceConfigResponse.isa = isa;
})(BatchGetResourceConfigResponse = exports.BatchGetResourceConfigResponse || (exports.BatchGetResourceConfigResponse = {}));
var ChronologicalOrder;
(function (ChronologicalOrder) {
    ChronologicalOrder["Forward"] = "Forward";
    ChronologicalOrder["Reverse"] = "Reverse";
})(ChronologicalOrder = exports.ChronologicalOrder || (exports.ChronologicalOrder = {}));
var Compliance;
(function (Compliance) {
    function isa(o) {
        return smithy_client_1.isa(o, "Compliance");
    }
    Compliance.isa = isa;
})(Compliance = exports.Compliance || (exports.Compliance = {}));
var ComplianceByConfigRule;
(function (ComplianceByConfigRule) {
    function isa(o) {
        return smithy_client_1.isa(o, "ComplianceByConfigRule");
    }
    ComplianceByConfigRule.isa = isa;
})(ComplianceByConfigRule = exports.ComplianceByConfigRule || (exports.ComplianceByConfigRule = {}));
var ComplianceByResource;
(function (ComplianceByResource) {
    function isa(o) {
        return smithy_client_1.isa(o, "ComplianceByResource");
    }
    ComplianceByResource.isa = isa;
})(ComplianceByResource = exports.ComplianceByResource || (exports.ComplianceByResource = {}));
var ComplianceContributorCount;
(function (ComplianceContributorCount) {
    function isa(o) {
        return smithy_client_1.isa(o, "ComplianceContributorCount");
    }
    ComplianceContributorCount.isa = isa;
})(ComplianceContributorCount = exports.ComplianceContributorCount || (exports.ComplianceContributorCount = {}));
var ComplianceSummary;
(function (ComplianceSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "ComplianceSummary");
    }
    ComplianceSummary.isa = isa;
})(ComplianceSummary = exports.ComplianceSummary || (exports.ComplianceSummary = {}));
var ComplianceSummaryByResourceType;
(function (ComplianceSummaryByResourceType) {
    function isa(o) {
        return smithy_client_1.isa(o, "ComplianceSummaryByResourceType");
    }
    ComplianceSummaryByResourceType.isa = isa;
})(ComplianceSummaryByResourceType = exports.ComplianceSummaryByResourceType || (exports.ComplianceSummaryByResourceType = {}));
var ComplianceType;
(function (ComplianceType) {
    ComplianceType["Compliant"] = "COMPLIANT";
    ComplianceType["Insufficient_Data"] = "INSUFFICIENT_DATA";
    ComplianceType["Non_Compliant"] = "NON_COMPLIANT";
    ComplianceType["Not_Applicable"] = "NOT_APPLICABLE";
})(ComplianceType = exports.ComplianceType || (exports.ComplianceType = {}));
var ConfigExportDeliveryInfo;
(function (ConfigExportDeliveryInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConfigExportDeliveryInfo");
    }
    ConfigExportDeliveryInfo.isa = isa;
})(ConfigExportDeliveryInfo = exports.ConfigExportDeliveryInfo || (exports.ConfigExportDeliveryInfo = {}));
var ConfigRule;
(function (ConfigRule) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConfigRule");
    }
    ConfigRule.isa = isa;
})(ConfigRule = exports.ConfigRule || (exports.ConfigRule = {}));
var ConfigRuleComplianceFilters;
(function (ConfigRuleComplianceFilters) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConfigRuleComplianceFilters");
    }
    ConfigRuleComplianceFilters.isa = isa;
})(ConfigRuleComplianceFilters = exports.ConfigRuleComplianceFilters || (exports.ConfigRuleComplianceFilters = {}));
var ConfigRuleComplianceSummaryFilters;
(function (ConfigRuleComplianceSummaryFilters) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConfigRuleComplianceSummaryFilters");
    }
    ConfigRuleComplianceSummaryFilters.isa = isa;
})(ConfigRuleComplianceSummaryFilters = exports.ConfigRuleComplianceSummaryFilters || (exports.ConfigRuleComplianceSummaryFilters = {}));
var ConfigRuleComplianceSummaryGroupKey;
(function (ConfigRuleComplianceSummaryGroupKey) {
    ConfigRuleComplianceSummaryGroupKey["ACCOUNT_ID"] = "ACCOUNT_ID";
    ConfigRuleComplianceSummaryGroupKey["AWS_REGION"] = "AWS_REGION";
})(ConfigRuleComplianceSummaryGroupKey = exports.ConfigRuleComplianceSummaryGroupKey || (exports.ConfigRuleComplianceSummaryGroupKey = {}));
var ConfigRuleEvaluationStatus;
(function (ConfigRuleEvaluationStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConfigRuleEvaluationStatus");
    }
    ConfigRuleEvaluationStatus.isa = isa;
})(ConfigRuleEvaluationStatus = exports.ConfigRuleEvaluationStatus || (exports.ConfigRuleEvaluationStatus = {}));
var ConfigRuleState;
(function (ConfigRuleState) {
    ConfigRuleState["ACTIVE"] = "ACTIVE";
    ConfigRuleState["DELETING"] = "DELETING";
    ConfigRuleState["DELETING_RESULTS"] = "DELETING_RESULTS";
    ConfigRuleState["EVALUATING"] = "EVALUATING";
})(ConfigRuleState = exports.ConfigRuleState || (exports.ConfigRuleState = {}));
var ConfigSnapshotDeliveryProperties;
(function (ConfigSnapshotDeliveryProperties) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConfigSnapshotDeliveryProperties");
    }
    ConfigSnapshotDeliveryProperties.isa = isa;
})(ConfigSnapshotDeliveryProperties = exports.ConfigSnapshotDeliveryProperties || (exports.ConfigSnapshotDeliveryProperties = {}));
var ConfigStreamDeliveryInfo;
(function (ConfigStreamDeliveryInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConfigStreamDeliveryInfo");
    }
    ConfigStreamDeliveryInfo.isa = isa;
})(ConfigStreamDeliveryInfo = exports.ConfigStreamDeliveryInfo || (exports.ConfigStreamDeliveryInfo = {}));
var ConfigurationAggregator;
(function (ConfigurationAggregator) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConfigurationAggregator");
    }
    ConfigurationAggregator.isa = isa;
})(ConfigurationAggregator = exports.ConfigurationAggregator || (exports.ConfigurationAggregator = {}));
var ConfigurationItem;
(function (ConfigurationItem) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConfigurationItem");
    }
    ConfigurationItem.isa = isa;
})(ConfigurationItem = exports.ConfigurationItem || (exports.ConfigurationItem = {}));
var ConfigurationItemStatus;
(function (ConfigurationItemStatus) {
    ConfigurationItemStatus["OK"] = "OK";
    ConfigurationItemStatus["ResourceDeleted"] = "ResourceDeleted";
    ConfigurationItemStatus["ResourceDeletedNotRecorded"] = "ResourceDeletedNotRecorded";
    ConfigurationItemStatus["ResourceDiscovered"] = "ResourceDiscovered";
    ConfigurationItemStatus["ResourceNotRecorded"] = "ResourceNotRecorded";
})(ConfigurationItemStatus = exports.ConfigurationItemStatus || (exports.ConfigurationItemStatus = {}));
var ConfigurationRecorder;
(function (ConfigurationRecorder) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConfigurationRecorder");
    }
    ConfigurationRecorder.isa = isa;
})(ConfigurationRecorder = exports.ConfigurationRecorder || (exports.ConfigurationRecorder = {}));
var ConfigurationRecorderStatus;
(function (ConfigurationRecorderStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConfigurationRecorderStatus");
    }
    ConfigurationRecorderStatus.isa = isa;
})(ConfigurationRecorderStatus = exports.ConfigurationRecorderStatus || (exports.ConfigurationRecorderStatus = {}));
var ConformancePackComplianceFilters;
(function (ConformancePackComplianceFilters) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConformancePackComplianceFilters");
    }
    ConformancePackComplianceFilters.isa = isa;
})(ConformancePackComplianceFilters = exports.ConformancePackComplianceFilters || (exports.ConformancePackComplianceFilters = {}));
var ConformancePackComplianceSummary;
(function (ConformancePackComplianceSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConformancePackComplianceSummary");
    }
    ConformancePackComplianceSummary.isa = isa;
})(ConformancePackComplianceSummary = exports.ConformancePackComplianceSummary || (exports.ConformancePackComplianceSummary = {}));
var ConformancePackComplianceType;
(function (ConformancePackComplianceType) {
    ConformancePackComplianceType["COMPLIANT"] = "COMPLIANT";
    ConformancePackComplianceType["NON_COMPLIANT"] = "NON_COMPLIANT";
})(ConformancePackComplianceType = exports.ConformancePackComplianceType || (exports.ConformancePackComplianceType = {}));
var ConformancePackDetail;
(function (ConformancePackDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConformancePackDetail");
    }
    ConformancePackDetail.isa = isa;
})(ConformancePackDetail = exports.ConformancePackDetail || (exports.ConformancePackDetail = {}));
var ConformancePackEvaluationFilters;
(function (ConformancePackEvaluationFilters) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConformancePackEvaluationFilters");
    }
    ConformancePackEvaluationFilters.isa = isa;
})(ConformancePackEvaluationFilters = exports.ConformancePackEvaluationFilters || (exports.ConformancePackEvaluationFilters = {}));
var ConformancePackEvaluationResult;
(function (ConformancePackEvaluationResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConformancePackEvaluationResult");
    }
    ConformancePackEvaluationResult.isa = isa;
})(ConformancePackEvaluationResult = exports.ConformancePackEvaluationResult || (exports.ConformancePackEvaluationResult = {}));
var ConformancePackInputParameter;
(function (ConformancePackInputParameter) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConformancePackInputParameter");
    }
    ConformancePackInputParameter.isa = isa;
})(ConformancePackInputParameter = exports.ConformancePackInputParameter || (exports.ConformancePackInputParameter = {}));
var ConformancePackRuleCompliance;
(function (ConformancePackRuleCompliance) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConformancePackRuleCompliance");
    }
    ConformancePackRuleCompliance.isa = isa;
})(ConformancePackRuleCompliance = exports.ConformancePackRuleCompliance || (exports.ConformancePackRuleCompliance = {}));
var ConformancePackState;
(function (ConformancePackState) {
    ConformancePackState["CREATE_COMPLETE"] = "CREATE_COMPLETE";
    ConformancePackState["CREATE_FAILED"] = "CREATE_FAILED";
    ConformancePackState["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
    ConformancePackState["DELETE_FAILED"] = "DELETE_FAILED";
    ConformancePackState["DELETE_IN_PROGRESS"] = "DELETE_IN_PROGRESS";
})(ConformancePackState = exports.ConformancePackState || (exports.ConformancePackState = {}));
var ConformancePackStatusDetail;
(function (ConformancePackStatusDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConformancePackStatusDetail");
    }
    ConformancePackStatusDetail.isa = isa;
})(ConformancePackStatusDetail = exports.ConformancePackStatusDetail || (exports.ConformancePackStatusDetail = {}));
var ConformancePackTemplateValidationException;
(function (ConformancePackTemplateValidationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConformancePackTemplateValidationException");
    }
    ConformancePackTemplateValidationException.isa = isa;
})(ConformancePackTemplateValidationException = exports.ConformancePackTemplateValidationException || (exports.ConformancePackTemplateValidationException = {}));
var DeleteAggregationAuthorizationRequest;
(function (DeleteAggregationAuthorizationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteAggregationAuthorizationRequest");
    }
    DeleteAggregationAuthorizationRequest.isa = isa;
})(DeleteAggregationAuthorizationRequest = exports.DeleteAggregationAuthorizationRequest || (exports.DeleteAggregationAuthorizationRequest = {}));
var DeleteConfigRuleRequest;
(function (DeleteConfigRuleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteConfigRuleRequest");
    }
    DeleteConfigRuleRequest.isa = isa;
})(DeleteConfigRuleRequest = exports.DeleteConfigRuleRequest || (exports.DeleteConfigRuleRequest = {}));
var DeleteConfigurationAggregatorRequest;
(function (DeleteConfigurationAggregatorRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteConfigurationAggregatorRequest");
    }
    DeleteConfigurationAggregatorRequest.isa = isa;
})(DeleteConfigurationAggregatorRequest = exports.DeleteConfigurationAggregatorRequest || (exports.DeleteConfigurationAggregatorRequest = {}));
var DeleteConfigurationRecorderRequest;
(function (DeleteConfigurationRecorderRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteConfigurationRecorderRequest");
    }
    DeleteConfigurationRecorderRequest.isa = isa;
})(DeleteConfigurationRecorderRequest = exports.DeleteConfigurationRecorderRequest || (exports.DeleteConfigurationRecorderRequest = {}));
var DeleteConformancePackRequest;
(function (DeleteConformancePackRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteConformancePackRequest");
    }
    DeleteConformancePackRequest.isa = isa;
})(DeleteConformancePackRequest = exports.DeleteConformancePackRequest || (exports.DeleteConformancePackRequest = {}));
var DeleteDeliveryChannelRequest;
(function (DeleteDeliveryChannelRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDeliveryChannelRequest");
    }
    DeleteDeliveryChannelRequest.isa = isa;
})(DeleteDeliveryChannelRequest = exports.DeleteDeliveryChannelRequest || (exports.DeleteDeliveryChannelRequest = {}));
var DeleteEvaluationResultsRequest;
(function (DeleteEvaluationResultsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteEvaluationResultsRequest");
    }
    DeleteEvaluationResultsRequest.isa = isa;
})(DeleteEvaluationResultsRequest = exports.DeleteEvaluationResultsRequest || (exports.DeleteEvaluationResultsRequest = {}));
var DeleteEvaluationResultsResponse;
(function (DeleteEvaluationResultsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteEvaluationResultsResponse");
    }
    DeleteEvaluationResultsResponse.isa = isa;
})(DeleteEvaluationResultsResponse = exports.DeleteEvaluationResultsResponse || (exports.DeleteEvaluationResultsResponse = {}));
var DeleteOrganizationConfigRuleRequest;
(function (DeleteOrganizationConfigRuleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteOrganizationConfigRuleRequest");
    }
    DeleteOrganizationConfigRuleRequest.isa = isa;
})(DeleteOrganizationConfigRuleRequest = exports.DeleteOrganizationConfigRuleRequest || (exports.DeleteOrganizationConfigRuleRequest = {}));
var DeleteOrganizationConformancePackRequest;
(function (DeleteOrganizationConformancePackRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteOrganizationConformancePackRequest");
    }
    DeleteOrganizationConformancePackRequest.isa = isa;
})(DeleteOrganizationConformancePackRequest = exports.DeleteOrganizationConformancePackRequest || (exports.DeleteOrganizationConformancePackRequest = {}));
var DeletePendingAggregationRequestRequest;
(function (DeletePendingAggregationRequestRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeletePendingAggregationRequestRequest");
    }
    DeletePendingAggregationRequestRequest.isa = isa;
})(DeletePendingAggregationRequestRequest = exports.DeletePendingAggregationRequestRequest || (exports.DeletePendingAggregationRequestRequest = {}));
var DeleteRemediationConfigurationRequest;
(function (DeleteRemediationConfigurationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRemediationConfigurationRequest");
    }
    DeleteRemediationConfigurationRequest.isa = isa;
})(DeleteRemediationConfigurationRequest = exports.DeleteRemediationConfigurationRequest || (exports.DeleteRemediationConfigurationRequest = {}));
var DeleteRemediationConfigurationResponse;
(function (DeleteRemediationConfigurationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRemediationConfigurationResponse");
    }
    DeleteRemediationConfigurationResponse.isa = isa;
})(DeleteRemediationConfigurationResponse = exports.DeleteRemediationConfigurationResponse || (exports.DeleteRemediationConfigurationResponse = {}));
var DeleteRemediationExceptionsRequest;
(function (DeleteRemediationExceptionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRemediationExceptionsRequest");
    }
    DeleteRemediationExceptionsRequest.isa = isa;
})(DeleteRemediationExceptionsRequest = exports.DeleteRemediationExceptionsRequest || (exports.DeleteRemediationExceptionsRequest = {}));
var DeleteRemediationExceptionsResponse;
(function (DeleteRemediationExceptionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRemediationExceptionsResponse");
    }
    DeleteRemediationExceptionsResponse.isa = isa;
})(DeleteRemediationExceptionsResponse = exports.DeleteRemediationExceptionsResponse || (exports.DeleteRemediationExceptionsResponse = {}));
var DeleteResourceConfigRequest;
(function (DeleteResourceConfigRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteResourceConfigRequest");
    }
    DeleteResourceConfigRequest.isa = isa;
})(DeleteResourceConfigRequest = exports.DeleteResourceConfigRequest || (exports.DeleteResourceConfigRequest = {}));
var DeleteRetentionConfigurationRequest;
(function (DeleteRetentionConfigurationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRetentionConfigurationRequest");
    }
    DeleteRetentionConfigurationRequest.isa = isa;
})(DeleteRetentionConfigurationRequest = exports.DeleteRetentionConfigurationRequest || (exports.DeleteRetentionConfigurationRequest = {}));
var DeliverConfigSnapshotRequest;
(function (DeliverConfigSnapshotRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeliverConfigSnapshotRequest");
    }
    DeliverConfigSnapshotRequest.isa = isa;
})(DeliverConfigSnapshotRequest = exports.DeliverConfigSnapshotRequest || (exports.DeliverConfigSnapshotRequest = {}));
var DeliverConfigSnapshotResponse;
(function (DeliverConfigSnapshotResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeliverConfigSnapshotResponse");
    }
    DeliverConfigSnapshotResponse.isa = isa;
})(DeliverConfigSnapshotResponse = exports.DeliverConfigSnapshotResponse || (exports.DeliverConfigSnapshotResponse = {}));
var DeliveryChannel;
(function (DeliveryChannel) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeliveryChannel");
    }
    DeliveryChannel.isa = isa;
})(DeliveryChannel = exports.DeliveryChannel || (exports.DeliveryChannel = {}));
var DeliveryChannelStatus;
(function (DeliveryChannelStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeliveryChannelStatus");
    }
    DeliveryChannelStatus.isa = isa;
})(DeliveryChannelStatus = exports.DeliveryChannelStatus || (exports.DeliveryChannelStatus = {}));
var DeliveryStatus;
(function (DeliveryStatus) {
    DeliveryStatus["Failure"] = "Failure";
    DeliveryStatus["Not_Applicable"] = "Not_Applicable";
    DeliveryStatus["Success"] = "Success";
})(DeliveryStatus = exports.DeliveryStatus || (exports.DeliveryStatus = {}));
var DescribeAggregateComplianceByConfigRulesRequest;
(function (DescribeAggregateComplianceByConfigRulesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAggregateComplianceByConfigRulesRequest");
    }
    DescribeAggregateComplianceByConfigRulesRequest.isa = isa;
})(DescribeAggregateComplianceByConfigRulesRequest = exports.DescribeAggregateComplianceByConfigRulesRequest || (exports.DescribeAggregateComplianceByConfigRulesRequest = {}));
var DescribeAggregateComplianceByConfigRulesResponse;
(function (DescribeAggregateComplianceByConfigRulesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAggregateComplianceByConfigRulesResponse");
    }
    DescribeAggregateComplianceByConfigRulesResponse.isa = isa;
})(DescribeAggregateComplianceByConfigRulesResponse = exports.DescribeAggregateComplianceByConfigRulesResponse || (exports.DescribeAggregateComplianceByConfigRulesResponse = {}));
var DescribeAggregationAuthorizationsRequest;
(function (DescribeAggregationAuthorizationsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAggregationAuthorizationsRequest");
    }
    DescribeAggregationAuthorizationsRequest.isa = isa;
})(DescribeAggregationAuthorizationsRequest = exports.DescribeAggregationAuthorizationsRequest || (exports.DescribeAggregationAuthorizationsRequest = {}));
var DescribeAggregationAuthorizationsResponse;
(function (DescribeAggregationAuthorizationsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAggregationAuthorizationsResponse");
    }
    DescribeAggregationAuthorizationsResponse.isa = isa;
})(DescribeAggregationAuthorizationsResponse = exports.DescribeAggregationAuthorizationsResponse || (exports.DescribeAggregationAuthorizationsResponse = {}));
var DescribeComplianceByConfigRuleRequest;
(function (DescribeComplianceByConfigRuleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeComplianceByConfigRuleRequest");
    }
    DescribeComplianceByConfigRuleRequest.isa = isa;
})(DescribeComplianceByConfigRuleRequest = exports.DescribeComplianceByConfigRuleRequest || (exports.DescribeComplianceByConfigRuleRequest = {}));
var DescribeComplianceByConfigRuleResponse;
(function (DescribeComplianceByConfigRuleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeComplianceByConfigRuleResponse");
    }
    DescribeComplianceByConfigRuleResponse.isa = isa;
})(DescribeComplianceByConfigRuleResponse = exports.DescribeComplianceByConfigRuleResponse || (exports.DescribeComplianceByConfigRuleResponse = {}));
var DescribeComplianceByResourceRequest;
(function (DescribeComplianceByResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeComplianceByResourceRequest");
    }
    DescribeComplianceByResourceRequest.isa = isa;
})(DescribeComplianceByResourceRequest = exports.DescribeComplianceByResourceRequest || (exports.DescribeComplianceByResourceRequest = {}));
var DescribeComplianceByResourceResponse;
(function (DescribeComplianceByResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeComplianceByResourceResponse");
    }
    DescribeComplianceByResourceResponse.isa = isa;
})(DescribeComplianceByResourceResponse = exports.DescribeComplianceByResourceResponse || (exports.DescribeComplianceByResourceResponse = {}));
var DescribeConfigRuleEvaluationStatusRequest;
(function (DescribeConfigRuleEvaluationStatusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeConfigRuleEvaluationStatusRequest");
    }
    DescribeConfigRuleEvaluationStatusRequest.isa = isa;
})(DescribeConfigRuleEvaluationStatusRequest = exports.DescribeConfigRuleEvaluationStatusRequest || (exports.DescribeConfigRuleEvaluationStatusRequest = {}));
var DescribeConfigRuleEvaluationStatusResponse;
(function (DescribeConfigRuleEvaluationStatusResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeConfigRuleEvaluationStatusResponse");
    }
    DescribeConfigRuleEvaluationStatusResponse.isa = isa;
})(DescribeConfigRuleEvaluationStatusResponse = exports.DescribeConfigRuleEvaluationStatusResponse || (exports.DescribeConfigRuleEvaluationStatusResponse = {}));
var DescribeConfigRulesRequest;
(function (DescribeConfigRulesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeConfigRulesRequest");
    }
    DescribeConfigRulesRequest.isa = isa;
})(DescribeConfigRulesRequest = exports.DescribeConfigRulesRequest || (exports.DescribeConfigRulesRequest = {}));
var DescribeConfigRulesResponse;
(function (DescribeConfigRulesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeConfigRulesResponse");
    }
    DescribeConfigRulesResponse.isa = isa;
})(DescribeConfigRulesResponse = exports.DescribeConfigRulesResponse || (exports.DescribeConfigRulesResponse = {}));
var DescribeConfigurationAggregatorSourcesStatusRequest;
(function (DescribeConfigurationAggregatorSourcesStatusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeConfigurationAggregatorSourcesStatusRequest");
    }
    DescribeConfigurationAggregatorSourcesStatusRequest.isa = isa;
})(DescribeConfigurationAggregatorSourcesStatusRequest = exports.DescribeConfigurationAggregatorSourcesStatusRequest || (exports.DescribeConfigurationAggregatorSourcesStatusRequest = {}));
var DescribeConfigurationAggregatorSourcesStatusResponse;
(function (DescribeConfigurationAggregatorSourcesStatusResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeConfigurationAggregatorSourcesStatusResponse");
    }
    DescribeConfigurationAggregatorSourcesStatusResponse.isa = isa;
})(DescribeConfigurationAggregatorSourcesStatusResponse = exports.DescribeConfigurationAggregatorSourcesStatusResponse || (exports.DescribeConfigurationAggregatorSourcesStatusResponse = {}));
var DescribeConfigurationAggregatorsRequest;
(function (DescribeConfigurationAggregatorsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeConfigurationAggregatorsRequest");
    }
    DescribeConfigurationAggregatorsRequest.isa = isa;
})(DescribeConfigurationAggregatorsRequest = exports.DescribeConfigurationAggregatorsRequest || (exports.DescribeConfigurationAggregatorsRequest = {}));
var DescribeConfigurationAggregatorsResponse;
(function (DescribeConfigurationAggregatorsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeConfigurationAggregatorsResponse");
    }
    DescribeConfigurationAggregatorsResponse.isa = isa;
})(DescribeConfigurationAggregatorsResponse = exports.DescribeConfigurationAggregatorsResponse || (exports.DescribeConfigurationAggregatorsResponse = {}));
var DescribeConfigurationRecorderStatusRequest;
(function (DescribeConfigurationRecorderStatusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeConfigurationRecorderStatusRequest");
    }
    DescribeConfigurationRecorderStatusRequest.isa = isa;
})(DescribeConfigurationRecorderStatusRequest = exports.DescribeConfigurationRecorderStatusRequest || (exports.DescribeConfigurationRecorderStatusRequest = {}));
var DescribeConfigurationRecorderStatusResponse;
(function (DescribeConfigurationRecorderStatusResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeConfigurationRecorderStatusResponse");
    }
    DescribeConfigurationRecorderStatusResponse.isa = isa;
})(DescribeConfigurationRecorderStatusResponse = exports.DescribeConfigurationRecorderStatusResponse || (exports.DescribeConfigurationRecorderStatusResponse = {}));
var DescribeConfigurationRecordersRequest;
(function (DescribeConfigurationRecordersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeConfigurationRecordersRequest");
    }
    DescribeConfigurationRecordersRequest.isa = isa;
})(DescribeConfigurationRecordersRequest = exports.DescribeConfigurationRecordersRequest || (exports.DescribeConfigurationRecordersRequest = {}));
var DescribeConfigurationRecordersResponse;
(function (DescribeConfigurationRecordersResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeConfigurationRecordersResponse");
    }
    DescribeConfigurationRecordersResponse.isa = isa;
})(DescribeConfigurationRecordersResponse = exports.DescribeConfigurationRecordersResponse || (exports.DescribeConfigurationRecordersResponse = {}));
var DescribeConformancePackComplianceRequest;
(function (DescribeConformancePackComplianceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeConformancePackComplianceRequest");
    }
    DescribeConformancePackComplianceRequest.isa = isa;
})(DescribeConformancePackComplianceRequest = exports.DescribeConformancePackComplianceRequest || (exports.DescribeConformancePackComplianceRequest = {}));
var DescribeConformancePackComplianceResponse;
(function (DescribeConformancePackComplianceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeConformancePackComplianceResponse");
    }
    DescribeConformancePackComplianceResponse.isa = isa;
})(DescribeConformancePackComplianceResponse = exports.DescribeConformancePackComplianceResponse || (exports.DescribeConformancePackComplianceResponse = {}));
var DescribeConformancePackStatusRequest;
(function (DescribeConformancePackStatusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeConformancePackStatusRequest");
    }
    DescribeConformancePackStatusRequest.isa = isa;
})(DescribeConformancePackStatusRequest = exports.DescribeConformancePackStatusRequest || (exports.DescribeConformancePackStatusRequest = {}));
var DescribeConformancePackStatusResponse;
(function (DescribeConformancePackStatusResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeConformancePackStatusResponse");
    }
    DescribeConformancePackStatusResponse.isa = isa;
})(DescribeConformancePackStatusResponse = exports.DescribeConformancePackStatusResponse || (exports.DescribeConformancePackStatusResponse = {}));
var DescribeConformancePacksRequest;
(function (DescribeConformancePacksRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeConformancePacksRequest");
    }
    DescribeConformancePacksRequest.isa = isa;
})(DescribeConformancePacksRequest = exports.DescribeConformancePacksRequest || (exports.DescribeConformancePacksRequest = {}));
var DescribeConformancePacksResponse;
(function (DescribeConformancePacksResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeConformancePacksResponse");
    }
    DescribeConformancePacksResponse.isa = isa;
})(DescribeConformancePacksResponse = exports.DescribeConformancePacksResponse || (exports.DescribeConformancePacksResponse = {}));
var DescribeDeliveryChannelStatusRequest;
(function (DescribeDeliveryChannelStatusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDeliveryChannelStatusRequest");
    }
    DescribeDeliveryChannelStatusRequest.isa = isa;
})(DescribeDeliveryChannelStatusRequest = exports.DescribeDeliveryChannelStatusRequest || (exports.DescribeDeliveryChannelStatusRequest = {}));
var DescribeDeliveryChannelStatusResponse;
(function (DescribeDeliveryChannelStatusResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDeliveryChannelStatusResponse");
    }
    DescribeDeliveryChannelStatusResponse.isa = isa;
})(DescribeDeliveryChannelStatusResponse = exports.DescribeDeliveryChannelStatusResponse || (exports.DescribeDeliveryChannelStatusResponse = {}));
var DescribeDeliveryChannelsRequest;
(function (DescribeDeliveryChannelsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDeliveryChannelsRequest");
    }
    DescribeDeliveryChannelsRequest.isa = isa;
})(DescribeDeliveryChannelsRequest = exports.DescribeDeliveryChannelsRequest || (exports.DescribeDeliveryChannelsRequest = {}));
var DescribeDeliveryChannelsResponse;
(function (DescribeDeliveryChannelsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDeliveryChannelsResponse");
    }
    DescribeDeliveryChannelsResponse.isa = isa;
})(DescribeDeliveryChannelsResponse = exports.DescribeDeliveryChannelsResponse || (exports.DescribeDeliveryChannelsResponse = {}));
var DescribeOrganizationConfigRuleStatusesRequest;
(function (DescribeOrganizationConfigRuleStatusesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeOrganizationConfigRuleStatusesRequest");
    }
    DescribeOrganizationConfigRuleStatusesRequest.isa = isa;
})(DescribeOrganizationConfigRuleStatusesRequest = exports.DescribeOrganizationConfigRuleStatusesRequest || (exports.DescribeOrganizationConfigRuleStatusesRequest = {}));
var DescribeOrganizationConfigRuleStatusesResponse;
(function (DescribeOrganizationConfigRuleStatusesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeOrganizationConfigRuleStatusesResponse");
    }
    DescribeOrganizationConfigRuleStatusesResponse.isa = isa;
})(DescribeOrganizationConfigRuleStatusesResponse = exports.DescribeOrganizationConfigRuleStatusesResponse || (exports.DescribeOrganizationConfigRuleStatusesResponse = {}));
var DescribeOrganizationConfigRulesRequest;
(function (DescribeOrganizationConfigRulesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeOrganizationConfigRulesRequest");
    }
    DescribeOrganizationConfigRulesRequest.isa = isa;
})(DescribeOrganizationConfigRulesRequest = exports.DescribeOrganizationConfigRulesRequest || (exports.DescribeOrganizationConfigRulesRequest = {}));
var DescribeOrganizationConfigRulesResponse;
(function (DescribeOrganizationConfigRulesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeOrganizationConfigRulesResponse");
    }
    DescribeOrganizationConfigRulesResponse.isa = isa;
})(DescribeOrganizationConfigRulesResponse = exports.DescribeOrganizationConfigRulesResponse || (exports.DescribeOrganizationConfigRulesResponse = {}));
var DescribeOrganizationConformancePackStatusesRequest;
(function (DescribeOrganizationConformancePackStatusesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeOrganizationConformancePackStatusesRequest");
    }
    DescribeOrganizationConformancePackStatusesRequest.isa = isa;
})(DescribeOrganizationConformancePackStatusesRequest = exports.DescribeOrganizationConformancePackStatusesRequest || (exports.DescribeOrganizationConformancePackStatusesRequest = {}));
var DescribeOrganizationConformancePackStatusesResponse;
(function (DescribeOrganizationConformancePackStatusesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeOrganizationConformancePackStatusesResponse");
    }
    DescribeOrganizationConformancePackStatusesResponse.isa = isa;
})(DescribeOrganizationConformancePackStatusesResponse = exports.DescribeOrganizationConformancePackStatusesResponse || (exports.DescribeOrganizationConformancePackStatusesResponse = {}));
var DescribeOrganizationConformancePacksRequest;
(function (DescribeOrganizationConformancePacksRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeOrganizationConformancePacksRequest");
    }
    DescribeOrganizationConformancePacksRequest.isa = isa;
})(DescribeOrganizationConformancePacksRequest = exports.DescribeOrganizationConformancePacksRequest || (exports.DescribeOrganizationConformancePacksRequest = {}));
var DescribeOrganizationConformancePacksResponse;
(function (DescribeOrganizationConformancePacksResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeOrganizationConformancePacksResponse");
    }
    DescribeOrganizationConformancePacksResponse.isa = isa;
})(DescribeOrganizationConformancePacksResponse = exports.DescribeOrganizationConformancePacksResponse || (exports.DescribeOrganizationConformancePacksResponse = {}));
var DescribePendingAggregationRequestsRequest;
(function (DescribePendingAggregationRequestsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribePendingAggregationRequestsRequest");
    }
    DescribePendingAggregationRequestsRequest.isa = isa;
})(DescribePendingAggregationRequestsRequest = exports.DescribePendingAggregationRequestsRequest || (exports.DescribePendingAggregationRequestsRequest = {}));
var DescribePendingAggregationRequestsResponse;
(function (DescribePendingAggregationRequestsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribePendingAggregationRequestsResponse");
    }
    DescribePendingAggregationRequestsResponse.isa = isa;
})(DescribePendingAggregationRequestsResponse = exports.DescribePendingAggregationRequestsResponse || (exports.DescribePendingAggregationRequestsResponse = {}));
var DescribeRemediationConfigurationsRequest;
(function (DescribeRemediationConfigurationsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeRemediationConfigurationsRequest");
    }
    DescribeRemediationConfigurationsRequest.isa = isa;
})(DescribeRemediationConfigurationsRequest = exports.DescribeRemediationConfigurationsRequest || (exports.DescribeRemediationConfigurationsRequest = {}));
var DescribeRemediationConfigurationsResponse;
(function (DescribeRemediationConfigurationsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeRemediationConfigurationsResponse");
    }
    DescribeRemediationConfigurationsResponse.isa = isa;
})(DescribeRemediationConfigurationsResponse = exports.DescribeRemediationConfigurationsResponse || (exports.DescribeRemediationConfigurationsResponse = {}));
var DescribeRemediationExceptionsRequest;
(function (DescribeRemediationExceptionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeRemediationExceptionsRequest");
    }
    DescribeRemediationExceptionsRequest.isa = isa;
})(DescribeRemediationExceptionsRequest = exports.DescribeRemediationExceptionsRequest || (exports.DescribeRemediationExceptionsRequest = {}));
var DescribeRemediationExceptionsResponse;
(function (DescribeRemediationExceptionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeRemediationExceptionsResponse");
    }
    DescribeRemediationExceptionsResponse.isa = isa;
})(DescribeRemediationExceptionsResponse = exports.DescribeRemediationExceptionsResponse || (exports.DescribeRemediationExceptionsResponse = {}));
var DescribeRemediationExecutionStatusRequest;
(function (DescribeRemediationExecutionStatusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeRemediationExecutionStatusRequest");
    }
    DescribeRemediationExecutionStatusRequest.isa = isa;
})(DescribeRemediationExecutionStatusRequest = exports.DescribeRemediationExecutionStatusRequest || (exports.DescribeRemediationExecutionStatusRequest = {}));
var DescribeRemediationExecutionStatusResponse;
(function (DescribeRemediationExecutionStatusResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeRemediationExecutionStatusResponse");
    }
    DescribeRemediationExecutionStatusResponse.isa = isa;
})(DescribeRemediationExecutionStatusResponse = exports.DescribeRemediationExecutionStatusResponse || (exports.DescribeRemediationExecutionStatusResponse = {}));
var DescribeRetentionConfigurationsRequest;
(function (DescribeRetentionConfigurationsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeRetentionConfigurationsRequest");
    }
    DescribeRetentionConfigurationsRequest.isa = isa;
})(DescribeRetentionConfigurationsRequest = exports.DescribeRetentionConfigurationsRequest || (exports.DescribeRetentionConfigurationsRequest = {}));
var DescribeRetentionConfigurationsResponse;
(function (DescribeRetentionConfigurationsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeRetentionConfigurationsResponse");
    }
    DescribeRetentionConfigurationsResponse.isa = isa;
})(DescribeRetentionConfigurationsResponse = exports.DescribeRetentionConfigurationsResponse || (exports.DescribeRetentionConfigurationsResponse = {}));
var Evaluation;
(function (Evaluation) {
    function isa(o) {
        return smithy_client_1.isa(o, "Evaluation");
    }
    Evaluation.isa = isa;
})(Evaluation = exports.Evaluation || (exports.Evaluation = {}));
var EvaluationResult;
(function (EvaluationResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "EvaluationResult");
    }
    EvaluationResult.isa = isa;
})(EvaluationResult = exports.EvaluationResult || (exports.EvaluationResult = {}));
var EvaluationResultIdentifier;
(function (EvaluationResultIdentifier) {
    function isa(o) {
        return smithy_client_1.isa(o, "EvaluationResultIdentifier");
    }
    EvaluationResultIdentifier.isa = isa;
})(EvaluationResultIdentifier = exports.EvaluationResultIdentifier || (exports.EvaluationResultIdentifier = {}));
var EvaluationResultQualifier;
(function (EvaluationResultQualifier) {
    function isa(o) {
        return smithy_client_1.isa(o, "EvaluationResultQualifier");
    }
    EvaluationResultQualifier.isa = isa;
})(EvaluationResultQualifier = exports.EvaluationResultQualifier || (exports.EvaluationResultQualifier = {}));
var EventSource;
(function (EventSource) {
    EventSource["Aws_Config"] = "aws.config";
})(EventSource = exports.EventSource || (exports.EventSource = {}));
var ExecutionControls;
(function (ExecutionControls) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExecutionControls");
    }
    ExecutionControls.isa = isa;
})(ExecutionControls = exports.ExecutionControls || (exports.ExecutionControls = {}));
var FailedDeleteRemediationExceptionsBatch;
(function (FailedDeleteRemediationExceptionsBatch) {
    function isa(o) {
        return smithy_client_1.isa(o, "FailedDeleteRemediationExceptionsBatch");
    }
    FailedDeleteRemediationExceptionsBatch.isa = isa;
})(FailedDeleteRemediationExceptionsBatch = exports.FailedDeleteRemediationExceptionsBatch || (exports.FailedDeleteRemediationExceptionsBatch = {}));
var FailedRemediationBatch;
(function (FailedRemediationBatch) {
    function isa(o) {
        return smithy_client_1.isa(o, "FailedRemediationBatch");
    }
    FailedRemediationBatch.isa = isa;
})(FailedRemediationBatch = exports.FailedRemediationBatch || (exports.FailedRemediationBatch = {}));
var FailedRemediationExceptionBatch;
(function (FailedRemediationExceptionBatch) {
    function isa(o) {
        return smithy_client_1.isa(o, "FailedRemediationExceptionBatch");
    }
    FailedRemediationExceptionBatch.isa = isa;
})(FailedRemediationExceptionBatch = exports.FailedRemediationExceptionBatch || (exports.FailedRemediationExceptionBatch = {}));
var FieldInfo;
(function (FieldInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "FieldInfo");
    }
    FieldInfo.isa = isa;
})(FieldInfo = exports.FieldInfo || (exports.FieldInfo = {}));
var GetAggregateComplianceDetailsByConfigRuleRequest;
(function (GetAggregateComplianceDetailsByConfigRuleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAggregateComplianceDetailsByConfigRuleRequest");
    }
    GetAggregateComplianceDetailsByConfigRuleRequest.isa = isa;
})(GetAggregateComplianceDetailsByConfigRuleRequest = exports.GetAggregateComplianceDetailsByConfigRuleRequest || (exports.GetAggregateComplianceDetailsByConfigRuleRequest = {}));
var GetAggregateComplianceDetailsByConfigRuleResponse;
(function (GetAggregateComplianceDetailsByConfigRuleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAggregateComplianceDetailsByConfigRuleResponse");
    }
    GetAggregateComplianceDetailsByConfigRuleResponse.isa = isa;
})(GetAggregateComplianceDetailsByConfigRuleResponse = exports.GetAggregateComplianceDetailsByConfigRuleResponse || (exports.GetAggregateComplianceDetailsByConfigRuleResponse = {}));
var GetAggregateConfigRuleComplianceSummaryRequest;
(function (GetAggregateConfigRuleComplianceSummaryRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAggregateConfigRuleComplianceSummaryRequest");
    }
    GetAggregateConfigRuleComplianceSummaryRequest.isa = isa;
})(GetAggregateConfigRuleComplianceSummaryRequest = exports.GetAggregateConfigRuleComplianceSummaryRequest || (exports.GetAggregateConfigRuleComplianceSummaryRequest = {}));
var GetAggregateConfigRuleComplianceSummaryResponse;
(function (GetAggregateConfigRuleComplianceSummaryResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAggregateConfigRuleComplianceSummaryResponse");
    }
    GetAggregateConfigRuleComplianceSummaryResponse.isa = isa;
})(GetAggregateConfigRuleComplianceSummaryResponse = exports.GetAggregateConfigRuleComplianceSummaryResponse || (exports.GetAggregateConfigRuleComplianceSummaryResponse = {}));
var GetAggregateDiscoveredResourceCountsRequest;
(function (GetAggregateDiscoveredResourceCountsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAggregateDiscoveredResourceCountsRequest");
    }
    GetAggregateDiscoveredResourceCountsRequest.isa = isa;
})(GetAggregateDiscoveredResourceCountsRequest = exports.GetAggregateDiscoveredResourceCountsRequest || (exports.GetAggregateDiscoveredResourceCountsRequest = {}));
var GetAggregateDiscoveredResourceCountsResponse;
(function (GetAggregateDiscoveredResourceCountsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAggregateDiscoveredResourceCountsResponse");
    }
    GetAggregateDiscoveredResourceCountsResponse.isa = isa;
})(GetAggregateDiscoveredResourceCountsResponse = exports.GetAggregateDiscoveredResourceCountsResponse || (exports.GetAggregateDiscoveredResourceCountsResponse = {}));
var GetAggregateResourceConfigRequest;
(function (GetAggregateResourceConfigRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAggregateResourceConfigRequest");
    }
    GetAggregateResourceConfigRequest.isa = isa;
})(GetAggregateResourceConfigRequest = exports.GetAggregateResourceConfigRequest || (exports.GetAggregateResourceConfigRequest = {}));
var GetAggregateResourceConfigResponse;
(function (GetAggregateResourceConfigResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAggregateResourceConfigResponse");
    }
    GetAggregateResourceConfigResponse.isa = isa;
})(GetAggregateResourceConfigResponse = exports.GetAggregateResourceConfigResponse || (exports.GetAggregateResourceConfigResponse = {}));
var GetComplianceDetailsByConfigRuleRequest;
(function (GetComplianceDetailsByConfigRuleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetComplianceDetailsByConfigRuleRequest");
    }
    GetComplianceDetailsByConfigRuleRequest.isa = isa;
})(GetComplianceDetailsByConfigRuleRequest = exports.GetComplianceDetailsByConfigRuleRequest || (exports.GetComplianceDetailsByConfigRuleRequest = {}));
var GetComplianceDetailsByConfigRuleResponse;
(function (GetComplianceDetailsByConfigRuleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetComplianceDetailsByConfigRuleResponse");
    }
    GetComplianceDetailsByConfigRuleResponse.isa = isa;
})(GetComplianceDetailsByConfigRuleResponse = exports.GetComplianceDetailsByConfigRuleResponse || (exports.GetComplianceDetailsByConfigRuleResponse = {}));
var GetComplianceDetailsByResourceRequest;
(function (GetComplianceDetailsByResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetComplianceDetailsByResourceRequest");
    }
    GetComplianceDetailsByResourceRequest.isa = isa;
})(GetComplianceDetailsByResourceRequest = exports.GetComplianceDetailsByResourceRequest || (exports.GetComplianceDetailsByResourceRequest = {}));
var GetComplianceDetailsByResourceResponse;
(function (GetComplianceDetailsByResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetComplianceDetailsByResourceResponse");
    }
    GetComplianceDetailsByResourceResponse.isa = isa;
})(GetComplianceDetailsByResourceResponse = exports.GetComplianceDetailsByResourceResponse || (exports.GetComplianceDetailsByResourceResponse = {}));
var GetComplianceSummaryByConfigRuleResponse;
(function (GetComplianceSummaryByConfigRuleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetComplianceSummaryByConfigRuleResponse");
    }
    GetComplianceSummaryByConfigRuleResponse.isa = isa;
})(GetComplianceSummaryByConfigRuleResponse = exports.GetComplianceSummaryByConfigRuleResponse || (exports.GetComplianceSummaryByConfigRuleResponse = {}));
var GetComplianceSummaryByResourceTypeRequest;
(function (GetComplianceSummaryByResourceTypeRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetComplianceSummaryByResourceTypeRequest");
    }
    GetComplianceSummaryByResourceTypeRequest.isa = isa;
})(GetComplianceSummaryByResourceTypeRequest = exports.GetComplianceSummaryByResourceTypeRequest || (exports.GetComplianceSummaryByResourceTypeRequest = {}));
var GetComplianceSummaryByResourceTypeResponse;
(function (GetComplianceSummaryByResourceTypeResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetComplianceSummaryByResourceTypeResponse");
    }
    GetComplianceSummaryByResourceTypeResponse.isa = isa;
})(GetComplianceSummaryByResourceTypeResponse = exports.GetComplianceSummaryByResourceTypeResponse || (exports.GetComplianceSummaryByResourceTypeResponse = {}));
var GetConformancePackComplianceDetailsRequest;
(function (GetConformancePackComplianceDetailsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetConformancePackComplianceDetailsRequest");
    }
    GetConformancePackComplianceDetailsRequest.isa = isa;
})(GetConformancePackComplianceDetailsRequest = exports.GetConformancePackComplianceDetailsRequest || (exports.GetConformancePackComplianceDetailsRequest = {}));
var GetConformancePackComplianceDetailsResponse;
(function (GetConformancePackComplianceDetailsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetConformancePackComplianceDetailsResponse");
    }
    GetConformancePackComplianceDetailsResponse.isa = isa;
})(GetConformancePackComplianceDetailsResponse = exports.GetConformancePackComplianceDetailsResponse || (exports.GetConformancePackComplianceDetailsResponse = {}));
var GetConformancePackComplianceSummaryRequest;
(function (GetConformancePackComplianceSummaryRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetConformancePackComplianceSummaryRequest");
    }
    GetConformancePackComplianceSummaryRequest.isa = isa;
})(GetConformancePackComplianceSummaryRequest = exports.GetConformancePackComplianceSummaryRequest || (exports.GetConformancePackComplianceSummaryRequest = {}));
var GetConformancePackComplianceSummaryResponse;
(function (GetConformancePackComplianceSummaryResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetConformancePackComplianceSummaryResponse");
    }
    GetConformancePackComplianceSummaryResponse.isa = isa;
})(GetConformancePackComplianceSummaryResponse = exports.GetConformancePackComplianceSummaryResponse || (exports.GetConformancePackComplianceSummaryResponse = {}));
var GetDiscoveredResourceCountsRequest;
(function (GetDiscoveredResourceCountsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDiscoveredResourceCountsRequest");
    }
    GetDiscoveredResourceCountsRequest.isa = isa;
})(GetDiscoveredResourceCountsRequest = exports.GetDiscoveredResourceCountsRequest || (exports.GetDiscoveredResourceCountsRequest = {}));
var GetDiscoveredResourceCountsResponse;
(function (GetDiscoveredResourceCountsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDiscoveredResourceCountsResponse");
    }
    GetDiscoveredResourceCountsResponse.isa = isa;
})(GetDiscoveredResourceCountsResponse = exports.GetDiscoveredResourceCountsResponse || (exports.GetDiscoveredResourceCountsResponse = {}));
var GetOrganizationConfigRuleDetailedStatusRequest;
(function (GetOrganizationConfigRuleDetailedStatusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetOrganizationConfigRuleDetailedStatusRequest");
    }
    GetOrganizationConfigRuleDetailedStatusRequest.isa = isa;
})(GetOrganizationConfigRuleDetailedStatusRequest = exports.GetOrganizationConfigRuleDetailedStatusRequest || (exports.GetOrganizationConfigRuleDetailedStatusRequest = {}));
var GetOrganizationConfigRuleDetailedStatusResponse;
(function (GetOrganizationConfigRuleDetailedStatusResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetOrganizationConfigRuleDetailedStatusResponse");
    }
    GetOrganizationConfigRuleDetailedStatusResponse.isa = isa;
})(GetOrganizationConfigRuleDetailedStatusResponse = exports.GetOrganizationConfigRuleDetailedStatusResponse || (exports.GetOrganizationConfigRuleDetailedStatusResponse = {}));
var GetOrganizationConformancePackDetailedStatusRequest;
(function (GetOrganizationConformancePackDetailedStatusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetOrganizationConformancePackDetailedStatusRequest");
    }
    GetOrganizationConformancePackDetailedStatusRequest.isa = isa;
})(GetOrganizationConformancePackDetailedStatusRequest = exports.GetOrganizationConformancePackDetailedStatusRequest || (exports.GetOrganizationConformancePackDetailedStatusRequest = {}));
var GetOrganizationConformancePackDetailedStatusResponse;
(function (GetOrganizationConformancePackDetailedStatusResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetOrganizationConformancePackDetailedStatusResponse");
    }
    GetOrganizationConformancePackDetailedStatusResponse.isa = isa;
})(GetOrganizationConformancePackDetailedStatusResponse = exports.GetOrganizationConformancePackDetailedStatusResponse || (exports.GetOrganizationConformancePackDetailedStatusResponse = {}));
var GetResourceConfigHistoryRequest;
(function (GetResourceConfigHistoryRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetResourceConfigHistoryRequest");
    }
    GetResourceConfigHistoryRequest.isa = isa;
})(GetResourceConfigHistoryRequest = exports.GetResourceConfigHistoryRequest || (exports.GetResourceConfigHistoryRequest = {}));
var GetResourceConfigHistoryResponse;
(function (GetResourceConfigHistoryResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetResourceConfigHistoryResponse");
    }
    GetResourceConfigHistoryResponse.isa = isa;
})(GetResourceConfigHistoryResponse = exports.GetResourceConfigHistoryResponse || (exports.GetResourceConfigHistoryResponse = {}));
var GroupedResourceCount;
(function (GroupedResourceCount) {
    function isa(o) {
        return smithy_client_1.isa(o, "GroupedResourceCount");
    }
    GroupedResourceCount.isa = isa;
})(GroupedResourceCount = exports.GroupedResourceCount || (exports.GroupedResourceCount = {}));
var InsufficientDeliveryPolicyException;
(function (InsufficientDeliveryPolicyException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InsufficientDeliveryPolicyException");
    }
    InsufficientDeliveryPolicyException.isa = isa;
})(InsufficientDeliveryPolicyException = exports.InsufficientDeliveryPolicyException || (exports.InsufficientDeliveryPolicyException = {}));
var InsufficientPermissionsException;
(function (InsufficientPermissionsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InsufficientPermissionsException");
    }
    InsufficientPermissionsException.isa = isa;
})(InsufficientPermissionsException = exports.InsufficientPermissionsException || (exports.InsufficientPermissionsException = {}));
var InvalidConfigurationRecorderNameException;
(function (InvalidConfigurationRecorderNameException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidConfigurationRecorderNameException");
    }
    InvalidConfigurationRecorderNameException.isa = isa;
})(InvalidConfigurationRecorderNameException = exports.InvalidConfigurationRecorderNameException || (exports.InvalidConfigurationRecorderNameException = {}));
var InvalidDeliveryChannelNameException;
(function (InvalidDeliveryChannelNameException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidDeliveryChannelNameException");
    }
    InvalidDeliveryChannelNameException.isa = isa;
})(InvalidDeliveryChannelNameException = exports.InvalidDeliveryChannelNameException || (exports.InvalidDeliveryChannelNameException = {}));
var InvalidExpressionException;
(function (InvalidExpressionException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidExpressionException");
    }
    InvalidExpressionException.isa = isa;
})(InvalidExpressionException = exports.InvalidExpressionException || (exports.InvalidExpressionException = {}));
var InvalidLimitException;
(function (InvalidLimitException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidLimitException");
    }
    InvalidLimitException.isa = isa;
})(InvalidLimitException = exports.InvalidLimitException || (exports.InvalidLimitException = {}));
var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidNextTokenException");
    }
    InvalidNextTokenException.isa = isa;
})(InvalidNextTokenException = exports.InvalidNextTokenException || (exports.InvalidNextTokenException = {}));
var InvalidParameterValueException;
(function (InvalidParameterValueException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidParameterValueException");
    }
    InvalidParameterValueException.isa = isa;
})(InvalidParameterValueException = exports.InvalidParameterValueException || (exports.InvalidParameterValueException = {}));
var InvalidRecordingGroupException;
(function (InvalidRecordingGroupException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidRecordingGroupException");
    }
    InvalidRecordingGroupException.isa = isa;
})(InvalidRecordingGroupException = exports.InvalidRecordingGroupException || (exports.InvalidRecordingGroupException = {}));
var InvalidResultTokenException;
(function (InvalidResultTokenException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidResultTokenException");
    }
    InvalidResultTokenException.isa = isa;
})(InvalidResultTokenException = exports.InvalidResultTokenException || (exports.InvalidResultTokenException = {}));
var InvalidRoleException;
(function (InvalidRoleException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidRoleException");
    }
    InvalidRoleException.isa = isa;
})(InvalidRoleException = exports.InvalidRoleException || (exports.InvalidRoleException = {}));
var InvalidS3KeyPrefixException;
(function (InvalidS3KeyPrefixException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidS3KeyPrefixException");
    }
    InvalidS3KeyPrefixException.isa = isa;
})(InvalidS3KeyPrefixException = exports.InvalidS3KeyPrefixException || (exports.InvalidS3KeyPrefixException = {}));
var InvalidSNSTopicARNException;
(function (InvalidSNSTopicARNException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidSNSTopicARNException");
    }
    InvalidSNSTopicARNException.isa = isa;
})(InvalidSNSTopicARNException = exports.InvalidSNSTopicARNException || (exports.InvalidSNSTopicARNException = {}));
var InvalidTimeRangeException;
(function (InvalidTimeRangeException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidTimeRangeException");
    }
    InvalidTimeRangeException.isa = isa;
})(InvalidTimeRangeException = exports.InvalidTimeRangeException || (exports.InvalidTimeRangeException = {}));
var LastDeliveryChannelDeleteFailedException;
(function (LastDeliveryChannelDeleteFailedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LastDeliveryChannelDeleteFailedException");
    }
    LastDeliveryChannelDeleteFailedException.isa = isa;
})(LastDeliveryChannelDeleteFailedException = exports.LastDeliveryChannelDeleteFailedException || (exports.LastDeliveryChannelDeleteFailedException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ListAggregateDiscoveredResourcesRequest;
(function (ListAggregateDiscoveredResourcesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAggregateDiscoveredResourcesRequest");
    }
    ListAggregateDiscoveredResourcesRequest.isa = isa;
})(ListAggregateDiscoveredResourcesRequest = exports.ListAggregateDiscoveredResourcesRequest || (exports.ListAggregateDiscoveredResourcesRequest = {}));
var ListAggregateDiscoveredResourcesResponse;
(function (ListAggregateDiscoveredResourcesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAggregateDiscoveredResourcesResponse");
    }
    ListAggregateDiscoveredResourcesResponse.isa = isa;
})(ListAggregateDiscoveredResourcesResponse = exports.ListAggregateDiscoveredResourcesResponse || (exports.ListAggregateDiscoveredResourcesResponse = {}));
var ListDiscoveredResourcesRequest;
(function (ListDiscoveredResourcesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDiscoveredResourcesRequest");
    }
    ListDiscoveredResourcesRequest.isa = isa;
})(ListDiscoveredResourcesRequest = exports.ListDiscoveredResourcesRequest || (exports.ListDiscoveredResourcesRequest = {}));
var ListDiscoveredResourcesResponse;
(function (ListDiscoveredResourcesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDiscoveredResourcesResponse");
    }
    ListDiscoveredResourcesResponse.isa = isa;
})(ListDiscoveredResourcesResponse = exports.ListDiscoveredResourcesResponse || (exports.ListDiscoveredResourcesResponse = {}));
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
var MaxActiveResourcesExceededException;
(function (MaxActiveResourcesExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MaxActiveResourcesExceededException");
    }
    MaxActiveResourcesExceededException.isa = isa;
})(MaxActiveResourcesExceededException = exports.MaxActiveResourcesExceededException || (exports.MaxActiveResourcesExceededException = {}));
var MaxNumberOfConfigRulesExceededException;
(function (MaxNumberOfConfigRulesExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MaxNumberOfConfigRulesExceededException");
    }
    MaxNumberOfConfigRulesExceededException.isa = isa;
})(MaxNumberOfConfigRulesExceededException = exports.MaxNumberOfConfigRulesExceededException || (exports.MaxNumberOfConfigRulesExceededException = {}));
var MaxNumberOfConfigurationRecordersExceededException;
(function (MaxNumberOfConfigurationRecordersExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MaxNumberOfConfigurationRecordersExceededException");
    }
    MaxNumberOfConfigurationRecordersExceededException.isa = isa;
})(MaxNumberOfConfigurationRecordersExceededException = exports.MaxNumberOfConfigurationRecordersExceededException || (exports.MaxNumberOfConfigurationRecordersExceededException = {}));
var MaxNumberOfConformancePacksExceededException;
(function (MaxNumberOfConformancePacksExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MaxNumberOfConformancePacksExceededException");
    }
    MaxNumberOfConformancePacksExceededException.isa = isa;
})(MaxNumberOfConformancePacksExceededException = exports.MaxNumberOfConformancePacksExceededException || (exports.MaxNumberOfConformancePacksExceededException = {}));
var MaxNumberOfDeliveryChannelsExceededException;
(function (MaxNumberOfDeliveryChannelsExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MaxNumberOfDeliveryChannelsExceededException");
    }
    MaxNumberOfDeliveryChannelsExceededException.isa = isa;
})(MaxNumberOfDeliveryChannelsExceededException = exports.MaxNumberOfDeliveryChannelsExceededException || (exports.MaxNumberOfDeliveryChannelsExceededException = {}));
var MaxNumberOfOrganizationConfigRulesExceededException;
(function (MaxNumberOfOrganizationConfigRulesExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MaxNumberOfOrganizationConfigRulesExceededException");
    }
    MaxNumberOfOrganizationConfigRulesExceededException.isa = isa;
})(MaxNumberOfOrganizationConfigRulesExceededException = exports.MaxNumberOfOrganizationConfigRulesExceededException || (exports.MaxNumberOfOrganizationConfigRulesExceededException = {}));
var MaxNumberOfOrganizationConformancePacksExceededException;
(function (MaxNumberOfOrganizationConformancePacksExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MaxNumberOfOrganizationConformancePacksExceededException");
    }
    MaxNumberOfOrganizationConformancePacksExceededException.isa = isa;
})(MaxNumberOfOrganizationConformancePacksExceededException = exports.MaxNumberOfOrganizationConformancePacksExceededException || (exports.MaxNumberOfOrganizationConformancePacksExceededException = {}));
var MaxNumberOfRetentionConfigurationsExceededException;
(function (MaxNumberOfRetentionConfigurationsExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MaxNumberOfRetentionConfigurationsExceededException");
    }
    MaxNumberOfRetentionConfigurationsExceededException.isa = isa;
})(MaxNumberOfRetentionConfigurationsExceededException = exports.MaxNumberOfRetentionConfigurationsExceededException || (exports.MaxNumberOfRetentionConfigurationsExceededException = {}));
var MaximumExecutionFrequency;
(function (MaximumExecutionFrequency) {
    MaximumExecutionFrequency["One_Hour"] = "One_Hour";
    MaximumExecutionFrequency["Six_Hours"] = "Six_Hours";
    MaximumExecutionFrequency["Three_Hours"] = "Three_Hours";
    MaximumExecutionFrequency["Twelve_Hours"] = "Twelve_Hours";
    MaximumExecutionFrequency["TwentyFour_Hours"] = "TwentyFour_Hours";
})(MaximumExecutionFrequency = exports.MaximumExecutionFrequency || (exports.MaximumExecutionFrequency = {}));
var MemberAccountRuleStatus;
(function (MemberAccountRuleStatus) {
    MemberAccountRuleStatus["CREATE_FAILED"] = "CREATE_FAILED";
    MemberAccountRuleStatus["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
    MemberAccountRuleStatus["CREATE_SUCCESSFUL"] = "CREATE_SUCCESSFUL";
    MemberAccountRuleStatus["DELETE_FAILED"] = "DELETE_FAILED";
    MemberAccountRuleStatus["DELETE_IN_PROGRESS"] = "DELETE_IN_PROGRESS";
    MemberAccountRuleStatus["DELETE_SUCCESSFUL"] = "DELETE_SUCCESSFUL";
    MemberAccountRuleStatus["UPDATE_FAILED"] = "UPDATE_FAILED";
    MemberAccountRuleStatus["UPDATE_IN_PROGRESS"] = "UPDATE_IN_PROGRESS";
    MemberAccountRuleStatus["UPDATE_SUCCESSFUL"] = "UPDATE_SUCCESSFUL";
})(MemberAccountRuleStatus = exports.MemberAccountRuleStatus || (exports.MemberAccountRuleStatus = {}));
var MemberAccountStatus;
(function (MemberAccountStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "MemberAccountStatus");
    }
    MemberAccountStatus.isa = isa;
})(MemberAccountStatus = exports.MemberAccountStatus || (exports.MemberAccountStatus = {}));
var MessageType;
(function (MessageType) {
    MessageType["ConfigurationItemChangeNotification"] = "ConfigurationItemChangeNotification";
    MessageType["ConfigurationSnapshotDeliveryCompleted"] = "ConfigurationSnapshotDeliveryCompleted";
    MessageType["OversizedConfigurationItemChangeNotification"] = "OversizedConfigurationItemChangeNotification";
    MessageType["ScheduledNotification"] = "ScheduledNotification";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var NoAvailableConfigurationRecorderException;
(function (NoAvailableConfigurationRecorderException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NoAvailableConfigurationRecorderException");
    }
    NoAvailableConfigurationRecorderException.isa = isa;
})(NoAvailableConfigurationRecorderException = exports.NoAvailableConfigurationRecorderException || (exports.NoAvailableConfigurationRecorderException = {}));
var NoAvailableDeliveryChannelException;
(function (NoAvailableDeliveryChannelException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NoAvailableDeliveryChannelException");
    }
    NoAvailableDeliveryChannelException.isa = isa;
})(NoAvailableDeliveryChannelException = exports.NoAvailableDeliveryChannelException || (exports.NoAvailableDeliveryChannelException = {}));
var NoAvailableOrganizationException;
(function (NoAvailableOrganizationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NoAvailableOrganizationException");
    }
    NoAvailableOrganizationException.isa = isa;
})(NoAvailableOrganizationException = exports.NoAvailableOrganizationException || (exports.NoAvailableOrganizationException = {}));
var NoRunningConfigurationRecorderException;
(function (NoRunningConfigurationRecorderException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NoRunningConfigurationRecorderException");
    }
    NoRunningConfigurationRecorderException.isa = isa;
})(NoRunningConfigurationRecorderException = exports.NoRunningConfigurationRecorderException || (exports.NoRunningConfigurationRecorderException = {}));
var NoSuchBucketException;
(function (NoSuchBucketException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NoSuchBucketException");
    }
    NoSuchBucketException.isa = isa;
})(NoSuchBucketException = exports.NoSuchBucketException || (exports.NoSuchBucketException = {}));
var NoSuchConfigRuleException;
(function (NoSuchConfigRuleException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NoSuchConfigRuleException");
    }
    NoSuchConfigRuleException.isa = isa;
})(NoSuchConfigRuleException = exports.NoSuchConfigRuleException || (exports.NoSuchConfigRuleException = {}));
var NoSuchConfigRuleInConformancePackException;
(function (NoSuchConfigRuleInConformancePackException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NoSuchConfigRuleInConformancePackException");
    }
    NoSuchConfigRuleInConformancePackException.isa = isa;
})(NoSuchConfigRuleInConformancePackException = exports.NoSuchConfigRuleInConformancePackException || (exports.NoSuchConfigRuleInConformancePackException = {}));
var NoSuchConfigurationAggregatorException;
(function (NoSuchConfigurationAggregatorException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NoSuchConfigurationAggregatorException");
    }
    NoSuchConfigurationAggregatorException.isa = isa;
})(NoSuchConfigurationAggregatorException = exports.NoSuchConfigurationAggregatorException || (exports.NoSuchConfigurationAggregatorException = {}));
var NoSuchConfigurationRecorderException;
(function (NoSuchConfigurationRecorderException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NoSuchConfigurationRecorderException");
    }
    NoSuchConfigurationRecorderException.isa = isa;
})(NoSuchConfigurationRecorderException = exports.NoSuchConfigurationRecorderException || (exports.NoSuchConfigurationRecorderException = {}));
var NoSuchConformancePackException;
(function (NoSuchConformancePackException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NoSuchConformancePackException");
    }
    NoSuchConformancePackException.isa = isa;
})(NoSuchConformancePackException = exports.NoSuchConformancePackException || (exports.NoSuchConformancePackException = {}));
var NoSuchDeliveryChannelException;
(function (NoSuchDeliveryChannelException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NoSuchDeliveryChannelException");
    }
    NoSuchDeliveryChannelException.isa = isa;
})(NoSuchDeliveryChannelException = exports.NoSuchDeliveryChannelException || (exports.NoSuchDeliveryChannelException = {}));
var NoSuchOrganizationConfigRuleException;
(function (NoSuchOrganizationConfigRuleException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NoSuchOrganizationConfigRuleException");
    }
    NoSuchOrganizationConfigRuleException.isa = isa;
})(NoSuchOrganizationConfigRuleException = exports.NoSuchOrganizationConfigRuleException || (exports.NoSuchOrganizationConfigRuleException = {}));
var NoSuchOrganizationConformancePackException;
(function (NoSuchOrganizationConformancePackException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NoSuchOrganizationConformancePackException");
    }
    NoSuchOrganizationConformancePackException.isa = isa;
})(NoSuchOrganizationConformancePackException = exports.NoSuchOrganizationConformancePackException || (exports.NoSuchOrganizationConformancePackException = {}));
var NoSuchRemediationConfigurationException;
(function (NoSuchRemediationConfigurationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NoSuchRemediationConfigurationException");
    }
    NoSuchRemediationConfigurationException.isa = isa;
})(NoSuchRemediationConfigurationException = exports.NoSuchRemediationConfigurationException || (exports.NoSuchRemediationConfigurationException = {}));
var NoSuchRemediationExceptionException;
(function (NoSuchRemediationExceptionException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NoSuchRemediationExceptionException");
    }
    NoSuchRemediationExceptionException.isa = isa;
})(NoSuchRemediationExceptionException = exports.NoSuchRemediationExceptionException || (exports.NoSuchRemediationExceptionException = {}));
var NoSuchRetentionConfigurationException;
(function (NoSuchRetentionConfigurationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NoSuchRetentionConfigurationException");
    }
    NoSuchRetentionConfigurationException.isa = isa;
})(NoSuchRetentionConfigurationException = exports.NoSuchRetentionConfigurationException || (exports.NoSuchRetentionConfigurationException = {}));
var OrganizationAccessDeniedException;
(function (OrganizationAccessDeniedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "OrganizationAccessDeniedException");
    }
    OrganizationAccessDeniedException.isa = isa;
})(OrganizationAccessDeniedException = exports.OrganizationAccessDeniedException || (exports.OrganizationAccessDeniedException = {}));
var OrganizationAggregationSource;
(function (OrganizationAggregationSource) {
    function isa(o) {
        return smithy_client_1.isa(o, "OrganizationAggregationSource");
    }
    OrganizationAggregationSource.isa = isa;
})(OrganizationAggregationSource = exports.OrganizationAggregationSource || (exports.OrganizationAggregationSource = {}));
var OrganizationAllFeaturesNotEnabledException;
(function (OrganizationAllFeaturesNotEnabledException) {
    function isa(o) {
        return smithy_client_1.isa(o, "OrganizationAllFeaturesNotEnabledException");
    }
    OrganizationAllFeaturesNotEnabledException.isa = isa;
})(OrganizationAllFeaturesNotEnabledException = exports.OrganizationAllFeaturesNotEnabledException || (exports.OrganizationAllFeaturesNotEnabledException = {}));
var OrganizationConfigRule;
(function (OrganizationConfigRule) {
    function isa(o) {
        return smithy_client_1.isa(o, "OrganizationConfigRule");
    }
    OrganizationConfigRule.isa = isa;
})(OrganizationConfigRule = exports.OrganizationConfigRule || (exports.OrganizationConfigRule = {}));
var OrganizationConfigRuleStatus;
(function (OrganizationConfigRuleStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "OrganizationConfigRuleStatus");
    }
    OrganizationConfigRuleStatus.isa = isa;
})(OrganizationConfigRuleStatus = exports.OrganizationConfigRuleStatus || (exports.OrganizationConfigRuleStatus = {}));
var OrganizationConfigRuleTriggerType;
(function (OrganizationConfigRuleTriggerType) {
    OrganizationConfigRuleTriggerType["CONFIGURATION_ITEM_CHANGE_NOTIFICATION"] = "ConfigurationItemChangeNotification";
    OrganizationConfigRuleTriggerType["OVERSIZED_CONFIGURATION_ITEM_CHANGE_NOTIFCATION"] = "OversizedConfigurationItemChangeNotification";
    OrganizationConfigRuleTriggerType["SCHEDULED_NOTIFICATION"] = "ScheduledNotification";
})(OrganizationConfigRuleTriggerType = exports.OrganizationConfigRuleTriggerType || (exports.OrganizationConfigRuleTriggerType = {}));
var OrganizationConformancePack;
(function (OrganizationConformancePack) {
    function isa(o) {
        return smithy_client_1.isa(o, "OrganizationConformancePack");
    }
    OrganizationConformancePack.isa = isa;
})(OrganizationConformancePack = exports.OrganizationConformancePack || (exports.OrganizationConformancePack = {}));
var OrganizationConformancePackDetailedStatus;
(function (OrganizationConformancePackDetailedStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "OrganizationConformancePackDetailedStatus");
    }
    OrganizationConformancePackDetailedStatus.isa = isa;
})(OrganizationConformancePackDetailedStatus = exports.OrganizationConformancePackDetailedStatus || (exports.OrganizationConformancePackDetailedStatus = {}));
var OrganizationConformancePackStatus;
(function (OrganizationConformancePackStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "OrganizationConformancePackStatus");
    }
    OrganizationConformancePackStatus.isa = isa;
})(OrganizationConformancePackStatus = exports.OrganizationConformancePackStatus || (exports.OrganizationConformancePackStatus = {}));
var OrganizationConformancePackTemplateValidationException;
(function (OrganizationConformancePackTemplateValidationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "OrganizationConformancePackTemplateValidationException");
    }
    OrganizationConformancePackTemplateValidationException.isa = isa;
})(OrganizationConformancePackTemplateValidationException = exports.OrganizationConformancePackTemplateValidationException || (exports.OrganizationConformancePackTemplateValidationException = {}));
var OrganizationCustomRuleMetadata;
(function (OrganizationCustomRuleMetadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "OrganizationCustomRuleMetadata");
    }
    OrganizationCustomRuleMetadata.isa = isa;
})(OrganizationCustomRuleMetadata = exports.OrganizationCustomRuleMetadata || (exports.OrganizationCustomRuleMetadata = {}));
var OrganizationManagedRuleMetadata;
(function (OrganizationManagedRuleMetadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "OrganizationManagedRuleMetadata");
    }
    OrganizationManagedRuleMetadata.isa = isa;
})(OrganizationManagedRuleMetadata = exports.OrganizationManagedRuleMetadata || (exports.OrganizationManagedRuleMetadata = {}));
var OrganizationResourceDetailedStatus;
(function (OrganizationResourceDetailedStatus) {
    OrganizationResourceDetailedStatus["CREATE_FAILED"] = "CREATE_FAILED";
    OrganizationResourceDetailedStatus["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
    OrganizationResourceDetailedStatus["CREATE_SUCCESSFUL"] = "CREATE_SUCCESSFUL";
    OrganizationResourceDetailedStatus["DELETE_FAILED"] = "DELETE_FAILED";
    OrganizationResourceDetailedStatus["DELETE_IN_PROGRESS"] = "DELETE_IN_PROGRESS";
    OrganizationResourceDetailedStatus["DELETE_SUCCESSFUL"] = "DELETE_SUCCESSFUL";
    OrganizationResourceDetailedStatus["UPDATE_FAILED"] = "UPDATE_FAILED";
    OrganizationResourceDetailedStatus["UPDATE_IN_PROGRESS"] = "UPDATE_IN_PROGRESS";
    OrganizationResourceDetailedStatus["UPDATE_SUCCESSFUL"] = "UPDATE_SUCCESSFUL";
})(OrganizationResourceDetailedStatus = exports.OrganizationResourceDetailedStatus || (exports.OrganizationResourceDetailedStatus = {}));
var OrganizationResourceDetailedStatusFilters;
(function (OrganizationResourceDetailedStatusFilters) {
    function isa(o) {
        return smithy_client_1.isa(o, "OrganizationResourceDetailedStatusFilters");
    }
    OrganizationResourceDetailedStatusFilters.isa = isa;
})(OrganizationResourceDetailedStatusFilters = exports.OrganizationResourceDetailedStatusFilters || (exports.OrganizationResourceDetailedStatusFilters = {}));
var OrganizationResourceStatus;
(function (OrganizationResourceStatus) {
    OrganizationResourceStatus["CREATE_FAILED"] = "CREATE_FAILED";
    OrganizationResourceStatus["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
    OrganizationResourceStatus["CREATE_SUCCESSFUL"] = "CREATE_SUCCESSFUL";
    OrganizationResourceStatus["DELETE_FAILED"] = "DELETE_FAILED";
    OrganizationResourceStatus["DELETE_IN_PROGRESS"] = "DELETE_IN_PROGRESS";
    OrganizationResourceStatus["DELETE_SUCCESSFUL"] = "DELETE_SUCCESSFUL";
    OrganizationResourceStatus["UPDATE_FAILED"] = "UPDATE_FAILED";
    OrganizationResourceStatus["UPDATE_IN_PROGRESS"] = "UPDATE_IN_PROGRESS";
    OrganizationResourceStatus["UPDATE_SUCCESSFUL"] = "UPDATE_SUCCESSFUL";
})(OrganizationResourceStatus = exports.OrganizationResourceStatus || (exports.OrganizationResourceStatus = {}));
var OrganizationRuleStatus;
(function (OrganizationRuleStatus) {
    OrganizationRuleStatus["CREATE_FAILED"] = "CREATE_FAILED";
    OrganizationRuleStatus["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
    OrganizationRuleStatus["CREATE_SUCCESSFUL"] = "CREATE_SUCCESSFUL";
    OrganizationRuleStatus["DELETE_FAILED"] = "DELETE_FAILED";
    OrganizationRuleStatus["DELETE_IN_PROGRESS"] = "DELETE_IN_PROGRESS";
    OrganizationRuleStatus["DELETE_SUCCESSFUL"] = "DELETE_SUCCESSFUL";
    OrganizationRuleStatus["UPDATE_FAILED"] = "UPDATE_FAILED";
    OrganizationRuleStatus["UPDATE_IN_PROGRESS"] = "UPDATE_IN_PROGRESS";
    OrganizationRuleStatus["UPDATE_SUCCESSFUL"] = "UPDATE_SUCCESSFUL";
})(OrganizationRuleStatus = exports.OrganizationRuleStatus || (exports.OrganizationRuleStatus = {}));
var OversizedConfigurationItemException;
(function (OversizedConfigurationItemException) {
    function isa(o) {
        return smithy_client_1.isa(o, "OversizedConfigurationItemException");
    }
    OversizedConfigurationItemException.isa = isa;
})(OversizedConfigurationItemException = exports.OversizedConfigurationItemException || (exports.OversizedConfigurationItemException = {}));
var Owner;
(function (Owner) {
    Owner["Aws"] = "AWS";
    Owner["Custom_Lambda"] = "CUSTOM_LAMBDA";
})(Owner = exports.Owner || (exports.Owner = {}));
var PendingAggregationRequest;
(function (PendingAggregationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PendingAggregationRequest");
    }
    PendingAggregationRequest.isa = isa;
})(PendingAggregationRequest = exports.PendingAggregationRequest || (exports.PendingAggregationRequest = {}));
var PutAggregationAuthorizationRequest;
(function (PutAggregationAuthorizationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutAggregationAuthorizationRequest");
    }
    PutAggregationAuthorizationRequest.isa = isa;
})(PutAggregationAuthorizationRequest = exports.PutAggregationAuthorizationRequest || (exports.PutAggregationAuthorizationRequest = {}));
var PutAggregationAuthorizationResponse;
(function (PutAggregationAuthorizationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutAggregationAuthorizationResponse");
    }
    PutAggregationAuthorizationResponse.isa = isa;
})(PutAggregationAuthorizationResponse = exports.PutAggregationAuthorizationResponse || (exports.PutAggregationAuthorizationResponse = {}));
var PutConfigRuleRequest;
(function (PutConfigRuleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutConfigRuleRequest");
    }
    PutConfigRuleRequest.isa = isa;
})(PutConfigRuleRequest = exports.PutConfigRuleRequest || (exports.PutConfigRuleRequest = {}));
var PutConfigurationAggregatorRequest;
(function (PutConfigurationAggregatorRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutConfigurationAggregatorRequest");
    }
    PutConfigurationAggregatorRequest.isa = isa;
})(PutConfigurationAggregatorRequest = exports.PutConfigurationAggregatorRequest || (exports.PutConfigurationAggregatorRequest = {}));
var PutConfigurationAggregatorResponse;
(function (PutConfigurationAggregatorResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutConfigurationAggregatorResponse");
    }
    PutConfigurationAggregatorResponse.isa = isa;
})(PutConfigurationAggregatorResponse = exports.PutConfigurationAggregatorResponse || (exports.PutConfigurationAggregatorResponse = {}));
var PutConfigurationRecorderRequest;
(function (PutConfigurationRecorderRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutConfigurationRecorderRequest");
    }
    PutConfigurationRecorderRequest.isa = isa;
})(PutConfigurationRecorderRequest = exports.PutConfigurationRecorderRequest || (exports.PutConfigurationRecorderRequest = {}));
var PutConformancePackRequest;
(function (PutConformancePackRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutConformancePackRequest");
    }
    PutConformancePackRequest.isa = isa;
})(PutConformancePackRequest = exports.PutConformancePackRequest || (exports.PutConformancePackRequest = {}));
var PutConformancePackResponse;
(function (PutConformancePackResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutConformancePackResponse");
    }
    PutConformancePackResponse.isa = isa;
})(PutConformancePackResponse = exports.PutConformancePackResponse || (exports.PutConformancePackResponse = {}));
var PutDeliveryChannelRequest;
(function (PutDeliveryChannelRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutDeliveryChannelRequest");
    }
    PutDeliveryChannelRequest.isa = isa;
})(PutDeliveryChannelRequest = exports.PutDeliveryChannelRequest || (exports.PutDeliveryChannelRequest = {}));
var PutEvaluationsRequest;
(function (PutEvaluationsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutEvaluationsRequest");
    }
    PutEvaluationsRequest.isa = isa;
})(PutEvaluationsRequest = exports.PutEvaluationsRequest || (exports.PutEvaluationsRequest = {}));
var PutEvaluationsResponse;
(function (PutEvaluationsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutEvaluationsResponse");
    }
    PutEvaluationsResponse.isa = isa;
})(PutEvaluationsResponse = exports.PutEvaluationsResponse || (exports.PutEvaluationsResponse = {}));
var PutOrganizationConfigRuleRequest;
(function (PutOrganizationConfigRuleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutOrganizationConfigRuleRequest");
    }
    PutOrganizationConfigRuleRequest.isa = isa;
})(PutOrganizationConfigRuleRequest = exports.PutOrganizationConfigRuleRequest || (exports.PutOrganizationConfigRuleRequest = {}));
var PutOrganizationConfigRuleResponse;
(function (PutOrganizationConfigRuleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutOrganizationConfigRuleResponse");
    }
    PutOrganizationConfigRuleResponse.isa = isa;
})(PutOrganizationConfigRuleResponse = exports.PutOrganizationConfigRuleResponse || (exports.PutOrganizationConfigRuleResponse = {}));
var PutOrganizationConformancePackRequest;
(function (PutOrganizationConformancePackRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutOrganizationConformancePackRequest");
    }
    PutOrganizationConformancePackRequest.isa = isa;
})(PutOrganizationConformancePackRequest = exports.PutOrganizationConformancePackRequest || (exports.PutOrganizationConformancePackRequest = {}));
var PutOrganizationConformancePackResponse;
(function (PutOrganizationConformancePackResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutOrganizationConformancePackResponse");
    }
    PutOrganizationConformancePackResponse.isa = isa;
})(PutOrganizationConformancePackResponse = exports.PutOrganizationConformancePackResponse || (exports.PutOrganizationConformancePackResponse = {}));
var PutRemediationConfigurationsRequest;
(function (PutRemediationConfigurationsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutRemediationConfigurationsRequest");
    }
    PutRemediationConfigurationsRequest.isa = isa;
})(PutRemediationConfigurationsRequest = exports.PutRemediationConfigurationsRequest || (exports.PutRemediationConfigurationsRequest = {}));
var PutRemediationConfigurationsResponse;
(function (PutRemediationConfigurationsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutRemediationConfigurationsResponse");
    }
    PutRemediationConfigurationsResponse.isa = isa;
})(PutRemediationConfigurationsResponse = exports.PutRemediationConfigurationsResponse || (exports.PutRemediationConfigurationsResponse = {}));
var PutRemediationExceptionsRequest;
(function (PutRemediationExceptionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutRemediationExceptionsRequest");
    }
    PutRemediationExceptionsRequest.isa = isa;
})(PutRemediationExceptionsRequest = exports.PutRemediationExceptionsRequest || (exports.PutRemediationExceptionsRequest = {}));
var PutRemediationExceptionsResponse;
(function (PutRemediationExceptionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutRemediationExceptionsResponse");
    }
    PutRemediationExceptionsResponse.isa = isa;
})(PutRemediationExceptionsResponse = exports.PutRemediationExceptionsResponse || (exports.PutRemediationExceptionsResponse = {}));
var PutResourceConfigRequest;
(function (PutResourceConfigRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutResourceConfigRequest");
    }
    PutResourceConfigRequest.isa = isa;
})(PutResourceConfigRequest = exports.PutResourceConfigRequest || (exports.PutResourceConfigRequest = {}));
var PutRetentionConfigurationRequest;
(function (PutRetentionConfigurationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutRetentionConfigurationRequest");
    }
    PutRetentionConfigurationRequest.isa = isa;
})(PutRetentionConfigurationRequest = exports.PutRetentionConfigurationRequest || (exports.PutRetentionConfigurationRequest = {}));
var PutRetentionConfigurationResponse;
(function (PutRetentionConfigurationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutRetentionConfigurationResponse");
    }
    PutRetentionConfigurationResponse.isa = isa;
})(PutRetentionConfigurationResponse = exports.PutRetentionConfigurationResponse || (exports.PutRetentionConfigurationResponse = {}));
var QueryInfo;
(function (QueryInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "QueryInfo");
    }
    QueryInfo.isa = isa;
})(QueryInfo = exports.QueryInfo || (exports.QueryInfo = {}));
var RecorderStatus;
(function (RecorderStatus) {
    RecorderStatus["Failure"] = "Failure";
    RecorderStatus["Pending"] = "Pending";
    RecorderStatus["Success"] = "Success";
})(RecorderStatus = exports.RecorderStatus || (exports.RecorderStatus = {}));
var RecordingGroup;
(function (RecordingGroup) {
    function isa(o) {
        return smithy_client_1.isa(o, "RecordingGroup");
    }
    RecordingGroup.isa = isa;
})(RecordingGroup = exports.RecordingGroup || (exports.RecordingGroup = {}));
var Relationship;
(function (Relationship) {
    function isa(o) {
        return smithy_client_1.isa(o, "Relationship");
    }
    Relationship.isa = isa;
})(Relationship = exports.Relationship || (exports.Relationship = {}));
var RemediationConfiguration;
(function (RemediationConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "RemediationConfiguration");
    }
    RemediationConfiguration.isa = isa;
})(RemediationConfiguration = exports.RemediationConfiguration || (exports.RemediationConfiguration = {}));
var RemediationException;
(function (RemediationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "RemediationException");
    }
    RemediationException.isa = isa;
})(RemediationException = exports.RemediationException || (exports.RemediationException = {}));
var RemediationExceptionResourceKey;
(function (RemediationExceptionResourceKey) {
    function isa(o) {
        return smithy_client_1.isa(o, "RemediationExceptionResourceKey");
    }
    RemediationExceptionResourceKey.isa = isa;
})(RemediationExceptionResourceKey = exports.RemediationExceptionResourceKey || (exports.RemediationExceptionResourceKey = {}));
var RemediationExecutionState;
(function (RemediationExecutionState) {
    RemediationExecutionState["FAILED"] = "FAILED";
    RemediationExecutionState["IN_PROGRESS"] = "IN_PROGRESS";
    RemediationExecutionState["QUEUED"] = "QUEUED";
    RemediationExecutionState["SUCCEEDED"] = "SUCCEEDED";
})(RemediationExecutionState = exports.RemediationExecutionState || (exports.RemediationExecutionState = {}));
var RemediationExecutionStatus;
(function (RemediationExecutionStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "RemediationExecutionStatus");
    }
    RemediationExecutionStatus.isa = isa;
})(RemediationExecutionStatus = exports.RemediationExecutionStatus || (exports.RemediationExecutionStatus = {}));
var RemediationExecutionStep;
(function (RemediationExecutionStep) {
    function isa(o) {
        return smithy_client_1.isa(o, "RemediationExecutionStep");
    }
    RemediationExecutionStep.isa = isa;
})(RemediationExecutionStep = exports.RemediationExecutionStep || (exports.RemediationExecutionStep = {}));
var RemediationExecutionStepState;
(function (RemediationExecutionStepState) {
    RemediationExecutionStepState["FAILED"] = "FAILED";
    RemediationExecutionStepState["PENDING"] = "PENDING";
    RemediationExecutionStepState["SUCCEEDED"] = "SUCCEEDED";
})(RemediationExecutionStepState = exports.RemediationExecutionStepState || (exports.RemediationExecutionStepState = {}));
var RemediationInProgressException;
(function (RemediationInProgressException) {
    function isa(o) {
        return smithy_client_1.isa(o, "RemediationInProgressException");
    }
    RemediationInProgressException.isa = isa;
})(RemediationInProgressException = exports.RemediationInProgressException || (exports.RemediationInProgressException = {}));
var RemediationParameterValue;
(function (RemediationParameterValue) {
    function isa(o) {
        return smithy_client_1.isa(o, "RemediationParameterValue");
    }
    RemediationParameterValue.isa = isa;
})(RemediationParameterValue = exports.RemediationParameterValue || (exports.RemediationParameterValue = {}));
var RemediationTargetType;
(function (RemediationTargetType) {
    RemediationTargetType["SSM_DOCUMENT"] = "SSM_DOCUMENT";
})(RemediationTargetType = exports.RemediationTargetType || (exports.RemediationTargetType = {}));
var ResourceCount;
(function (ResourceCount) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceCount");
    }
    ResourceCount.isa = isa;
})(ResourceCount = exports.ResourceCount || (exports.ResourceCount = {}));
var ResourceCountFilters;
(function (ResourceCountFilters) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceCountFilters");
    }
    ResourceCountFilters.isa = isa;
})(ResourceCountFilters = exports.ResourceCountFilters || (exports.ResourceCountFilters = {}));
var ResourceCountGroupKey;
(function (ResourceCountGroupKey) {
    ResourceCountGroupKey["ACCOUNT_ID"] = "ACCOUNT_ID";
    ResourceCountGroupKey["AWS_REGION"] = "AWS_REGION";
    ResourceCountGroupKey["RESOURCE_TYPE"] = "RESOURCE_TYPE";
})(ResourceCountGroupKey = exports.ResourceCountGroupKey || (exports.ResourceCountGroupKey = {}));
var ResourceFilters;
(function (ResourceFilters) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceFilters");
    }
    ResourceFilters.isa = isa;
})(ResourceFilters = exports.ResourceFilters || (exports.ResourceFilters = {}));
var ResourceIdentifier;
(function (ResourceIdentifier) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceIdentifier");
    }
    ResourceIdentifier.isa = isa;
})(ResourceIdentifier = exports.ResourceIdentifier || (exports.ResourceIdentifier = {}));
var ResourceInUseException;
(function (ResourceInUseException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceInUseException");
    }
    ResourceInUseException.isa = isa;
})(ResourceInUseException = exports.ResourceInUseException || (exports.ResourceInUseException = {}));
var ResourceKey;
(function (ResourceKey) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceKey");
    }
    ResourceKey.isa = isa;
})(ResourceKey = exports.ResourceKey || (exports.ResourceKey = {}));
var ResourceNotDiscoveredException;
(function (ResourceNotDiscoveredException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNotDiscoveredException");
    }
    ResourceNotDiscoveredException.isa = isa;
})(ResourceNotDiscoveredException = exports.ResourceNotDiscoveredException || (exports.ResourceNotDiscoveredException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNotFoundException");
    }
    ResourceNotFoundException.isa = isa;
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["AccountPublicAccessBlock"] = "AWS::S3::AccountPublicAccessBlock";
    ResourceType["Alarm"] = "AWS::CloudWatch::Alarm";
    ResourceType["Alias"] = "AWS::Lambda::Alias";
    ResourceType["Api"] = "AWS::ApiGatewayV2::Api";
    ResourceType["Application"] = "AWS::ElasticBeanstalk::Application";
    ResourceType["ApplicationVersion"] = "AWS::ElasticBeanstalk::ApplicationVersion";
    ResourceType["AssociationCompliance"] = "AWS::SSM::AssociationCompliance";
    ResourceType["AutoScalingGroup"] = "AWS::AutoScaling::AutoScalingGroup";
    ResourceType["Bucket"] = "AWS::S3::Bucket";
    ResourceType["Certificate"] = "AWS::ACM::Certificate";
    ResourceType["CloudFormationProduct"] = "AWS::ServiceCatalog::CloudFormationProduct";
    ResourceType["CloudFormationProvisionedProduct"] = "AWS::ServiceCatalog::CloudFormationProvisionedProduct";
    ResourceType["Cluster"] = "AWS::Redshift::Cluster";
    ResourceType["ClusterParameterGroup"] = "AWS::Redshift::ClusterParameterGroup";
    ResourceType["ClusterSecurityGroup"] = "AWS::Redshift::ClusterSecurityGroup";
    ResourceType["ClusterSnapshot"] = "AWS::Redshift::ClusterSnapshot";
    ResourceType["ClusterSubnetGroup"] = "AWS::Redshift::ClusterSubnetGroup";
    ResourceType["CustomerGateway"] = "AWS::EC2::CustomerGateway";
    ResourceType["DBCluster"] = "AWS::RDS::DBCluster";
    ResourceType["DBClusterParameterGroup"] = "AWS::RDS::DBClusterParameterGroup";
    ResourceType["DBClusterSnapshot"] = "AWS::RDS::DBClusterSnapshot";
    ResourceType["DBInstance"] = "AWS::RDS::DBInstance";
    ResourceType["DBOptionGroup"] = "AWS::RDS::DBOptionGroup";
    ResourceType["DBParameterGroup"] = "AWS::RDS::DBParameterGroup";
    ResourceType["DBSecurityGroup"] = "AWS::RDS::DBSecurityGroup";
    ResourceType["DBSnapshot"] = "AWS::RDS::DBSnapshot";
    ResourceType["DBSubnetGroup"] = "AWS::RDS::DBSubnetGroup";
    ResourceType["Distribution"] = "AWS::CloudFront::Distribution";
    ResourceType["DomainName"] = "AWS::ApiGateway::DomainName";
    ResourceType["DomainNameV2"] = "AWS::ApiGatewayV2::DomainName";
    ResourceType["EIP"] = "AWS::EC2::EIP";
    ResourceType["EgressOnlyInternetGateway"] = "AWS::EC2::EgressOnlyInternetGateway";
    ResourceType["EncryptionConfig"] = "AWS::XRay::EncryptionConfig";
    ResourceType["Environment"] = "AWS::ElasticBeanstalk::Environment";
    ResourceType["EventSubscription"] = "AWS::RDS::EventSubscription";
    ResourceType["FlowLog"] = "AWS::EC2::FlowLog";
    ResourceType["Function"] = "AWS::Lambda::Function";
    ResourceType["Group"] = "AWS::IAM::Group";
    ResourceType["Host"] = "AWS::EC2::Host";
    ResourceType["Instance"] = "AWS::EC2::Instance";
    ResourceType["InternetGateway"] = "AWS::EC2::InternetGateway";
    ResourceType["LaunchConfiguration"] = "AWS::AutoScaling::LaunchConfiguration";
    ResourceType["LicenseConfiguration"] = "AWS::LicenseManager::LicenseConfiguration";
    ResourceType["LoadBalancer"] = "AWS::ElasticLoadBalancing::LoadBalancer";
    ResourceType["LoadBalancerV2"] = "AWS::ElasticLoadBalancingV2::LoadBalancer";
    ResourceType["ManagedInstanceInventory"] = "AWS::SSM::ManagedInstanceInventory";
    ResourceType["Method"] = "AWS::ApiGateway::Method";
    ResourceType["MobileHubProject"] = "AWS::MobileHub::Project";
    ResourceType["NatGateway"] = "AWS::EC2::NatGateway";
    ResourceType["NetworkAcl"] = "AWS::EC2::NetworkAcl";
    ResourceType["NetworkInterface"] = "AWS::EC2::NetworkInterface";
    ResourceType["PatchCompliance"] = "AWS::SSM::PatchCompliance";
    ResourceType["Pipeline"] = "AWS::CodePipeline::Pipeline";
    ResourceType["Policy"] = "AWS::IAM::Policy";
    ResourceType["Portfolio"] = "AWS::ServiceCatalog::Portfolio";
    ResourceType["Project"] = "AWS::CodeBuild::Project";
    ResourceType["Protection"] = "AWS::Shield::Protection";
    ResourceType["RateBasedRule"] = "AWS::WAF::RateBasedRule";
    ResourceType["RedshiftEventSubscription"] = "AWS::Redshift::EventSubscription";
    ResourceType["RegionalProtection"] = "AWS::ShieldRegional::Protection";
    ResourceType["RegionalRateBasedRule"] = "AWS::WAFRegional::RateBasedRule";
    ResourceType["RegionalRule"] = "AWS::WAFRegional::Rule";
    ResourceType["RegionalRuleGroup"] = "AWS::WAFRegional::RuleGroup";
    ResourceType["RegionalWebACL"] = "AWS::WAFRegional::WebACL";
    ResourceType["RegisteredHAInstance"] = "AWS::EC2::RegisteredHAInstance";
    ResourceType["ResourceCompliance"] = "AWS::Config::ResourceCompliance";
    ResourceType["RestApi"] = "AWS::ApiGateway::RestApi";
    ResourceType["Role"] = "AWS::IAM::Role";
    ResourceType["RouteTable"] = "AWS::EC2::RouteTable";
    ResourceType["Rule"] = "AWS::WAF::Rule";
    ResourceType["RuleGroup"] = "AWS::WAF::RuleGroup";
    ResourceType["ScalingPolicy"] = "AWS::AutoScaling::ScalingPolicy";
    ResourceType["ScheduledAction"] = "AWS::AutoScaling::ScheduledAction";
    ResourceType["SecurityGroup"] = "AWS::EC2::SecurityGroup";
    ResourceType["Stack"] = "AWS::CloudFormation::Stack";
    ResourceType["Stage"] = "AWS::ApiGateway::Stage";
    ResourceType["StageV2"] = "AWS::ApiGatewayV2::Stage";
    ResourceType["StreamingDistribution"] = "AWS::CloudFront::StreamingDistribution";
    ResourceType["Subnet"] = "AWS::EC2::Subnet";
    ResourceType["Table"] = "AWS::DynamoDB::Table";
    ResourceType["Trail"] = "AWS::CloudTrail::Trail";
    ResourceType["User"] = "AWS::IAM::User";
    ResourceType["VPC"] = "AWS::EC2::VPC";
    ResourceType["VPCEndpoint"] = "AWS::EC2::VPCEndpoint";
    ResourceType["VPCEndpointService"] = "AWS::EC2::VPCEndpointService";
    ResourceType["VPCPeeringConnection"] = "AWS::EC2::VPCPeeringConnection";
    ResourceType["VPNConnection"] = "AWS::EC2::VPNConnection";
    ResourceType["VPNGateway"] = "AWS::EC2::VPNGateway";
    ResourceType["Volume"] = "AWS::EC2::Volume";
    ResourceType["WebACL"] = "AWS::WAF::WebACL";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
var ResourceValue;
(function (ResourceValue) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceValue");
    }
    ResourceValue.isa = isa;
})(ResourceValue = exports.ResourceValue || (exports.ResourceValue = {}));
var ResourceValueType;
(function (ResourceValueType) {
    ResourceValueType["RESOURCE_ID"] = "RESOURCE_ID";
})(ResourceValueType = exports.ResourceValueType || (exports.ResourceValueType = {}));
var RetentionConfiguration;
(function (RetentionConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "RetentionConfiguration");
    }
    RetentionConfiguration.isa = isa;
})(RetentionConfiguration = exports.RetentionConfiguration || (exports.RetentionConfiguration = {}));
var Scope;
(function (Scope) {
    function isa(o) {
        return smithy_client_1.isa(o, "Scope");
    }
    Scope.isa = isa;
})(Scope = exports.Scope || (exports.Scope = {}));
var SelectResourceConfigRequest;
(function (SelectResourceConfigRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SelectResourceConfigRequest");
    }
    SelectResourceConfigRequest.isa = isa;
})(SelectResourceConfigRequest = exports.SelectResourceConfigRequest || (exports.SelectResourceConfigRequest = {}));
var SelectResourceConfigResponse;
(function (SelectResourceConfigResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SelectResourceConfigResponse");
    }
    SelectResourceConfigResponse.isa = isa;
})(SelectResourceConfigResponse = exports.SelectResourceConfigResponse || (exports.SelectResourceConfigResponse = {}));
var Source;
(function (Source) {
    function isa(o) {
        return smithy_client_1.isa(o, "Source");
    }
    Source.isa = isa;
})(Source = exports.Source || (exports.Source = {}));
var SourceDetail;
(function (SourceDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "SourceDetail");
    }
    SourceDetail.isa = isa;
})(SourceDetail = exports.SourceDetail || (exports.SourceDetail = {}));
var SsmControls;
(function (SsmControls) {
    function isa(o) {
        return smithy_client_1.isa(o, "SsmControls");
    }
    SsmControls.isa = isa;
})(SsmControls = exports.SsmControls || (exports.SsmControls = {}));
var StartConfigRulesEvaluationRequest;
(function (StartConfigRulesEvaluationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartConfigRulesEvaluationRequest");
    }
    StartConfigRulesEvaluationRequest.isa = isa;
})(StartConfigRulesEvaluationRequest = exports.StartConfigRulesEvaluationRequest || (exports.StartConfigRulesEvaluationRequest = {}));
var StartConfigRulesEvaluationResponse;
(function (StartConfigRulesEvaluationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartConfigRulesEvaluationResponse");
    }
    StartConfigRulesEvaluationResponse.isa = isa;
})(StartConfigRulesEvaluationResponse = exports.StartConfigRulesEvaluationResponse || (exports.StartConfigRulesEvaluationResponse = {}));
var StartConfigurationRecorderRequest;
(function (StartConfigurationRecorderRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartConfigurationRecorderRequest");
    }
    StartConfigurationRecorderRequest.isa = isa;
})(StartConfigurationRecorderRequest = exports.StartConfigurationRecorderRequest || (exports.StartConfigurationRecorderRequest = {}));
var StartRemediationExecutionRequest;
(function (StartRemediationExecutionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartRemediationExecutionRequest");
    }
    StartRemediationExecutionRequest.isa = isa;
})(StartRemediationExecutionRequest = exports.StartRemediationExecutionRequest || (exports.StartRemediationExecutionRequest = {}));
var StartRemediationExecutionResponse;
(function (StartRemediationExecutionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartRemediationExecutionResponse");
    }
    StartRemediationExecutionResponse.isa = isa;
})(StartRemediationExecutionResponse = exports.StartRemediationExecutionResponse || (exports.StartRemediationExecutionResponse = {}));
var StaticValue;
(function (StaticValue) {
    function isa(o) {
        return smithy_client_1.isa(o, "StaticValue");
    }
    StaticValue.isa = isa;
})(StaticValue = exports.StaticValue || (exports.StaticValue = {}));
var StatusDetailFilters;
(function (StatusDetailFilters) {
    function isa(o) {
        return smithy_client_1.isa(o, "StatusDetailFilters");
    }
    StatusDetailFilters.isa = isa;
})(StatusDetailFilters = exports.StatusDetailFilters || (exports.StatusDetailFilters = {}));
var StopConfigurationRecorderRequest;
(function (StopConfigurationRecorderRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopConfigurationRecorderRequest");
    }
    StopConfigurationRecorderRequest.isa = isa;
})(StopConfigurationRecorderRequest = exports.StopConfigurationRecorderRequest || (exports.StopConfigurationRecorderRequest = {}));
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
var ValidationException;
(function (ValidationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ValidationException");
    }
    ValidationException.isa = isa;
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
//# sourceMappingURL=index.js.map