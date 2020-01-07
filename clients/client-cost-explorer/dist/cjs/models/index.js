"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccountScope;
(function (AccountScope) {
    AccountScope["LINKED"] = "LINKED";
    AccountScope["PAYER"] = "PAYER";
})(AccountScope = exports.AccountScope || (exports.AccountScope = {}));
var BillExpirationException;
(function (BillExpirationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "BillExpirationException");
    }
    BillExpirationException.isa = isa;
})(BillExpirationException = exports.BillExpirationException || (exports.BillExpirationException = {}));
var Context;
(function (Context) {
    Context["COST_AND_USAGE"] = "COST_AND_USAGE";
    Context["RESERVATIONS"] = "RESERVATIONS";
    Context["SAVINGS_PLANS"] = "SAVINGS_PLANS";
})(Context = exports.Context || (exports.Context = {}));
var CostCategory;
(function (CostCategory) {
    function isa(o) {
        return smithy_client_1.isa(o, "CostCategory");
    }
    CostCategory.isa = isa;
})(CostCategory = exports.CostCategory || (exports.CostCategory = {}));
var CostCategoryReference;
(function (CostCategoryReference) {
    function isa(o) {
        return smithy_client_1.isa(o, "CostCategoryReference");
    }
    CostCategoryReference.isa = isa;
})(CostCategoryReference = exports.CostCategoryReference || (exports.CostCategoryReference = {}));
var CostCategoryRule;
(function (CostCategoryRule) {
    function isa(o) {
        return smithy_client_1.isa(o, "CostCategoryRule");
    }
    CostCategoryRule.isa = isa;
})(CostCategoryRule = exports.CostCategoryRule || (exports.CostCategoryRule = {}));
var CostCategoryRuleVersion;
(function (CostCategoryRuleVersion) {
    CostCategoryRuleVersion["CostCategoryExpressionV1"] = "CostCategoryExpression.v1";
})(CostCategoryRuleVersion = exports.CostCategoryRuleVersion || (exports.CostCategoryRuleVersion = {}));
var CostCategoryValues;
(function (CostCategoryValues) {
    function isa(o) {
        return smithy_client_1.isa(o, "CostCategoryValues");
    }
    CostCategoryValues.isa = isa;
})(CostCategoryValues = exports.CostCategoryValues || (exports.CostCategoryValues = {}));
var Coverage;
(function (Coverage) {
    function isa(o) {
        return smithy_client_1.isa(o, "Coverage");
    }
    Coverage.isa = isa;
})(Coverage = exports.Coverage || (exports.Coverage = {}));
var CoverageByTime;
(function (CoverageByTime) {
    function isa(o) {
        return smithy_client_1.isa(o, "CoverageByTime");
    }
    CoverageByTime.isa = isa;
})(CoverageByTime = exports.CoverageByTime || (exports.CoverageByTime = {}));
var CoverageCost;
(function (CoverageCost) {
    function isa(o) {
        return smithy_client_1.isa(o, "CoverageCost");
    }
    CoverageCost.isa = isa;
})(CoverageCost = exports.CoverageCost || (exports.CoverageCost = {}));
var CoverageHours;
(function (CoverageHours) {
    function isa(o) {
        return smithy_client_1.isa(o, "CoverageHours");
    }
    CoverageHours.isa = isa;
})(CoverageHours = exports.CoverageHours || (exports.CoverageHours = {}));
var CoverageNormalizedUnits;
(function (CoverageNormalizedUnits) {
    function isa(o) {
        return smithy_client_1.isa(o, "CoverageNormalizedUnits");
    }
    CoverageNormalizedUnits.isa = isa;
})(CoverageNormalizedUnits = exports.CoverageNormalizedUnits || (exports.CoverageNormalizedUnits = {}));
var CreateCostCategoryDefinitionRequest;
(function (CreateCostCategoryDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateCostCategoryDefinitionRequest");
    }
    CreateCostCategoryDefinitionRequest.isa = isa;
})(CreateCostCategoryDefinitionRequest = exports.CreateCostCategoryDefinitionRequest || (exports.CreateCostCategoryDefinitionRequest = {}));
var CreateCostCategoryDefinitionResponse;
(function (CreateCostCategoryDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateCostCategoryDefinitionResponse");
    }
    CreateCostCategoryDefinitionResponse.isa = isa;
})(CreateCostCategoryDefinitionResponse = exports.CreateCostCategoryDefinitionResponse || (exports.CreateCostCategoryDefinitionResponse = {}));
var CurrentInstance;
(function (CurrentInstance) {
    function isa(o) {
        return smithy_client_1.isa(o, "CurrentInstance");
    }
    CurrentInstance.isa = isa;
})(CurrentInstance = exports.CurrentInstance || (exports.CurrentInstance = {}));
var DataUnavailableException;
(function (DataUnavailableException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DataUnavailableException");
    }
    DataUnavailableException.isa = isa;
})(DataUnavailableException = exports.DataUnavailableException || (exports.DataUnavailableException = {}));
var DateInterval;
(function (DateInterval) {
    function isa(o) {
        return smithy_client_1.isa(o, "DateInterval");
    }
    DateInterval.isa = isa;
})(DateInterval = exports.DateInterval || (exports.DateInterval = {}));
var DeleteCostCategoryDefinitionRequest;
(function (DeleteCostCategoryDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteCostCategoryDefinitionRequest");
    }
    DeleteCostCategoryDefinitionRequest.isa = isa;
})(DeleteCostCategoryDefinitionRequest = exports.DeleteCostCategoryDefinitionRequest || (exports.DeleteCostCategoryDefinitionRequest = {}));
var DeleteCostCategoryDefinitionResponse;
(function (DeleteCostCategoryDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteCostCategoryDefinitionResponse");
    }
    DeleteCostCategoryDefinitionResponse.isa = isa;
})(DeleteCostCategoryDefinitionResponse = exports.DeleteCostCategoryDefinitionResponse || (exports.DeleteCostCategoryDefinitionResponse = {}));
var DescribeCostCategoryDefinitionRequest;
(function (DescribeCostCategoryDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeCostCategoryDefinitionRequest");
    }
    DescribeCostCategoryDefinitionRequest.isa = isa;
})(DescribeCostCategoryDefinitionRequest = exports.DescribeCostCategoryDefinitionRequest || (exports.DescribeCostCategoryDefinitionRequest = {}));
var DescribeCostCategoryDefinitionResponse;
(function (DescribeCostCategoryDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeCostCategoryDefinitionResponse");
    }
    DescribeCostCategoryDefinitionResponse.isa = isa;
})(DescribeCostCategoryDefinitionResponse = exports.DescribeCostCategoryDefinitionResponse || (exports.DescribeCostCategoryDefinitionResponse = {}));
var Dimension;
(function (Dimension) {
    Dimension["AZ"] = "AZ";
    Dimension["BILLING_ENTITY"] = "BILLING_ENTITY";
    Dimension["CACHE_ENGINE"] = "CACHE_ENGINE";
    Dimension["DATABASE_ENGINE"] = "DATABASE_ENGINE";
    Dimension["DEPLOYMENT_OPTION"] = "DEPLOYMENT_OPTION";
    Dimension["INSTANCE_TYPE"] = "INSTANCE_TYPE";
    Dimension["INSTANCE_TYPE_FAMILY"] = "INSTANCE_TYPE_FAMILY";
    Dimension["LEGAL_ENTITY_NAME"] = "LEGAL_ENTITY_NAME";
    Dimension["LINKED_ACCOUNT"] = "LINKED_ACCOUNT";
    Dimension["OPERATING_SYSTEM"] = "OPERATING_SYSTEM";
    Dimension["OPERATION"] = "OPERATION";
    Dimension["PAYMENT_OPTION"] = "PAYMENT_OPTION";
    Dimension["PLATFORM"] = "PLATFORM";
    Dimension["PURCHASE_TYPE"] = "PURCHASE_TYPE";
    Dimension["RECORD_TYPE"] = "RECORD_TYPE";
    Dimension["REGION"] = "REGION";
    Dimension["RESERVATION_ID"] = "RESERVATION_ID";
    Dimension["RESOURCE_ID"] = "RESOURCE_ID";
    Dimension["RIGHTSIZING_TYPE"] = "RIGHTSIZING_TYPE";
    Dimension["SAVINGS_PLANS_TYPE"] = "SAVINGS_PLANS_TYPE";
    Dimension["SAVINGS_PLAN_ARN"] = "SAVINGS_PLAN_ARN";
    Dimension["SCOPE"] = "SCOPE";
    Dimension["SERVICE"] = "SERVICE";
    Dimension["SUBSCRIPTION_ID"] = "SUBSCRIPTION_ID";
    Dimension["TENANCY"] = "TENANCY";
    Dimension["USAGE_TYPE"] = "USAGE_TYPE";
    Dimension["USAGE_TYPE_GROUP"] = "USAGE_TYPE_GROUP";
})(Dimension = exports.Dimension || (exports.Dimension = {}));
var DimensionValues;
(function (DimensionValues) {
    function isa(o) {
        return smithy_client_1.isa(o, "DimensionValues");
    }
    DimensionValues.isa = isa;
})(DimensionValues = exports.DimensionValues || (exports.DimensionValues = {}));
var DimensionValuesWithAttributes;
(function (DimensionValuesWithAttributes) {
    function isa(o) {
        return smithy_client_1.isa(o, "DimensionValuesWithAttributes");
    }
    DimensionValuesWithAttributes.isa = isa;
})(DimensionValuesWithAttributes = exports.DimensionValuesWithAttributes || (exports.DimensionValuesWithAttributes = {}));
var EC2InstanceDetails;
(function (EC2InstanceDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "EC2InstanceDetails");
    }
    EC2InstanceDetails.isa = isa;
})(EC2InstanceDetails = exports.EC2InstanceDetails || (exports.EC2InstanceDetails = {}));
var EC2ResourceDetails;
(function (EC2ResourceDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "EC2ResourceDetails");
    }
    EC2ResourceDetails.isa = isa;
})(EC2ResourceDetails = exports.EC2ResourceDetails || (exports.EC2ResourceDetails = {}));
var EC2ResourceUtilization;
(function (EC2ResourceUtilization) {
    function isa(o) {
        return smithy_client_1.isa(o, "EC2ResourceUtilization");
    }
    EC2ResourceUtilization.isa = isa;
})(EC2ResourceUtilization = exports.EC2ResourceUtilization || (exports.EC2ResourceUtilization = {}));
var EC2Specification;
(function (EC2Specification) {
    function isa(o) {
        return smithy_client_1.isa(o, "EC2Specification");
    }
    EC2Specification.isa = isa;
})(EC2Specification = exports.EC2Specification || (exports.EC2Specification = {}));
var ESInstanceDetails;
(function (ESInstanceDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "ESInstanceDetails");
    }
    ESInstanceDetails.isa = isa;
})(ESInstanceDetails = exports.ESInstanceDetails || (exports.ESInstanceDetails = {}));
var ElastiCacheInstanceDetails;
(function (ElastiCacheInstanceDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "ElastiCacheInstanceDetails");
    }
    ElastiCacheInstanceDetails.isa = isa;
})(ElastiCacheInstanceDetails = exports.ElastiCacheInstanceDetails || (exports.ElastiCacheInstanceDetails = {}));
var Expression;
(function (Expression) {
    function isa(o) {
        return smithy_client_1.isa(o, "Expression");
    }
    Expression.isa = isa;
})(Expression = exports.Expression || (exports.Expression = {}));
var ForecastResult;
(function (ForecastResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ForecastResult");
    }
    ForecastResult.isa = isa;
})(ForecastResult = exports.ForecastResult || (exports.ForecastResult = {}));
var GetCostAndUsageRequest;
(function (GetCostAndUsageRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCostAndUsageRequest");
    }
    GetCostAndUsageRequest.isa = isa;
})(GetCostAndUsageRequest = exports.GetCostAndUsageRequest || (exports.GetCostAndUsageRequest = {}));
var GetCostAndUsageResponse;
(function (GetCostAndUsageResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCostAndUsageResponse");
    }
    GetCostAndUsageResponse.isa = isa;
})(GetCostAndUsageResponse = exports.GetCostAndUsageResponse || (exports.GetCostAndUsageResponse = {}));
var GetCostAndUsageWithResourcesRequest;
(function (GetCostAndUsageWithResourcesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCostAndUsageWithResourcesRequest");
    }
    GetCostAndUsageWithResourcesRequest.isa = isa;
})(GetCostAndUsageWithResourcesRequest = exports.GetCostAndUsageWithResourcesRequest || (exports.GetCostAndUsageWithResourcesRequest = {}));
var GetCostAndUsageWithResourcesResponse;
(function (GetCostAndUsageWithResourcesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCostAndUsageWithResourcesResponse");
    }
    GetCostAndUsageWithResourcesResponse.isa = isa;
})(GetCostAndUsageWithResourcesResponse = exports.GetCostAndUsageWithResourcesResponse || (exports.GetCostAndUsageWithResourcesResponse = {}));
var GetCostForecastRequest;
(function (GetCostForecastRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCostForecastRequest");
    }
    GetCostForecastRequest.isa = isa;
})(GetCostForecastRequest = exports.GetCostForecastRequest || (exports.GetCostForecastRequest = {}));
var GetCostForecastResponse;
(function (GetCostForecastResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCostForecastResponse");
    }
    GetCostForecastResponse.isa = isa;
})(GetCostForecastResponse = exports.GetCostForecastResponse || (exports.GetCostForecastResponse = {}));
var GetDimensionValuesRequest;
(function (GetDimensionValuesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDimensionValuesRequest");
    }
    GetDimensionValuesRequest.isa = isa;
})(GetDimensionValuesRequest = exports.GetDimensionValuesRequest || (exports.GetDimensionValuesRequest = {}));
var GetDimensionValuesResponse;
(function (GetDimensionValuesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDimensionValuesResponse");
    }
    GetDimensionValuesResponse.isa = isa;
})(GetDimensionValuesResponse = exports.GetDimensionValuesResponse || (exports.GetDimensionValuesResponse = {}));
var GetReservationCoverageRequest;
(function (GetReservationCoverageRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetReservationCoverageRequest");
    }
    GetReservationCoverageRequest.isa = isa;
})(GetReservationCoverageRequest = exports.GetReservationCoverageRequest || (exports.GetReservationCoverageRequest = {}));
var GetReservationCoverageResponse;
(function (GetReservationCoverageResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetReservationCoverageResponse");
    }
    GetReservationCoverageResponse.isa = isa;
})(GetReservationCoverageResponse = exports.GetReservationCoverageResponse || (exports.GetReservationCoverageResponse = {}));
var GetReservationPurchaseRecommendationRequest;
(function (GetReservationPurchaseRecommendationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetReservationPurchaseRecommendationRequest");
    }
    GetReservationPurchaseRecommendationRequest.isa = isa;
})(GetReservationPurchaseRecommendationRequest = exports.GetReservationPurchaseRecommendationRequest || (exports.GetReservationPurchaseRecommendationRequest = {}));
var GetReservationPurchaseRecommendationResponse;
(function (GetReservationPurchaseRecommendationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetReservationPurchaseRecommendationResponse");
    }
    GetReservationPurchaseRecommendationResponse.isa = isa;
})(GetReservationPurchaseRecommendationResponse = exports.GetReservationPurchaseRecommendationResponse || (exports.GetReservationPurchaseRecommendationResponse = {}));
var GetReservationUtilizationRequest;
(function (GetReservationUtilizationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetReservationUtilizationRequest");
    }
    GetReservationUtilizationRequest.isa = isa;
})(GetReservationUtilizationRequest = exports.GetReservationUtilizationRequest || (exports.GetReservationUtilizationRequest = {}));
var GetReservationUtilizationResponse;
(function (GetReservationUtilizationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetReservationUtilizationResponse");
    }
    GetReservationUtilizationResponse.isa = isa;
})(GetReservationUtilizationResponse = exports.GetReservationUtilizationResponse || (exports.GetReservationUtilizationResponse = {}));
var GetRightsizingRecommendationRequest;
(function (GetRightsizingRecommendationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRightsizingRecommendationRequest");
    }
    GetRightsizingRecommendationRequest.isa = isa;
})(GetRightsizingRecommendationRequest = exports.GetRightsizingRecommendationRequest || (exports.GetRightsizingRecommendationRequest = {}));
var GetRightsizingRecommendationResponse;
(function (GetRightsizingRecommendationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRightsizingRecommendationResponse");
    }
    GetRightsizingRecommendationResponse.isa = isa;
})(GetRightsizingRecommendationResponse = exports.GetRightsizingRecommendationResponse || (exports.GetRightsizingRecommendationResponse = {}));
var GetSavingsPlansCoverageRequest;
(function (GetSavingsPlansCoverageRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSavingsPlansCoverageRequest");
    }
    GetSavingsPlansCoverageRequest.isa = isa;
})(GetSavingsPlansCoverageRequest = exports.GetSavingsPlansCoverageRequest || (exports.GetSavingsPlansCoverageRequest = {}));
var GetSavingsPlansCoverageResponse;
(function (GetSavingsPlansCoverageResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSavingsPlansCoverageResponse");
    }
    GetSavingsPlansCoverageResponse.isa = isa;
})(GetSavingsPlansCoverageResponse = exports.GetSavingsPlansCoverageResponse || (exports.GetSavingsPlansCoverageResponse = {}));
var GetSavingsPlansPurchaseRecommendationRequest;
(function (GetSavingsPlansPurchaseRecommendationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSavingsPlansPurchaseRecommendationRequest");
    }
    GetSavingsPlansPurchaseRecommendationRequest.isa = isa;
})(GetSavingsPlansPurchaseRecommendationRequest = exports.GetSavingsPlansPurchaseRecommendationRequest || (exports.GetSavingsPlansPurchaseRecommendationRequest = {}));
var GetSavingsPlansPurchaseRecommendationResponse;
(function (GetSavingsPlansPurchaseRecommendationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSavingsPlansPurchaseRecommendationResponse");
    }
    GetSavingsPlansPurchaseRecommendationResponse.isa = isa;
})(GetSavingsPlansPurchaseRecommendationResponse = exports.GetSavingsPlansPurchaseRecommendationResponse || (exports.GetSavingsPlansPurchaseRecommendationResponse = {}));
var GetSavingsPlansUtilizationDetailsRequest;
(function (GetSavingsPlansUtilizationDetailsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSavingsPlansUtilizationDetailsRequest");
    }
    GetSavingsPlansUtilizationDetailsRequest.isa = isa;
})(GetSavingsPlansUtilizationDetailsRequest = exports.GetSavingsPlansUtilizationDetailsRequest || (exports.GetSavingsPlansUtilizationDetailsRequest = {}));
var GetSavingsPlansUtilizationDetailsResponse;
(function (GetSavingsPlansUtilizationDetailsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSavingsPlansUtilizationDetailsResponse");
    }
    GetSavingsPlansUtilizationDetailsResponse.isa = isa;
})(GetSavingsPlansUtilizationDetailsResponse = exports.GetSavingsPlansUtilizationDetailsResponse || (exports.GetSavingsPlansUtilizationDetailsResponse = {}));
var GetSavingsPlansUtilizationRequest;
(function (GetSavingsPlansUtilizationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSavingsPlansUtilizationRequest");
    }
    GetSavingsPlansUtilizationRequest.isa = isa;
})(GetSavingsPlansUtilizationRequest = exports.GetSavingsPlansUtilizationRequest || (exports.GetSavingsPlansUtilizationRequest = {}));
var GetSavingsPlansUtilizationResponse;
(function (GetSavingsPlansUtilizationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSavingsPlansUtilizationResponse");
    }
    GetSavingsPlansUtilizationResponse.isa = isa;
})(GetSavingsPlansUtilizationResponse = exports.GetSavingsPlansUtilizationResponse || (exports.GetSavingsPlansUtilizationResponse = {}));
var GetTagsRequest;
(function (GetTagsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTagsRequest");
    }
    GetTagsRequest.isa = isa;
})(GetTagsRequest = exports.GetTagsRequest || (exports.GetTagsRequest = {}));
var GetTagsResponse;
(function (GetTagsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTagsResponse");
    }
    GetTagsResponse.isa = isa;
})(GetTagsResponse = exports.GetTagsResponse || (exports.GetTagsResponse = {}));
var GetUsageForecastRequest;
(function (GetUsageForecastRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetUsageForecastRequest");
    }
    GetUsageForecastRequest.isa = isa;
})(GetUsageForecastRequest = exports.GetUsageForecastRequest || (exports.GetUsageForecastRequest = {}));
var GetUsageForecastResponse;
(function (GetUsageForecastResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetUsageForecastResponse");
    }
    GetUsageForecastResponse.isa = isa;
})(GetUsageForecastResponse = exports.GetUsageForecastResponse || (exports.GetUsageForecastResponse = {}));
var Granularity;
(function (Granularity) {
    Granularity["DAILY"] = "DAILY";
    Granularity["HOURLY"] = "HOURLY";
    Granularity["MONTHLY"] = "MONTHLY";
})(Granularity = exports.Granularity || (exports.Granularity = {}));
var Group;
(function (Group) {
    function isa(o) {
        return smithy_client_1.isa(o, "Group");
    }
    Group.isa = isa;
})(Group = exports.Group || (exports.Group = {}));
var GroupDefinition;
(function (GroupDefinition) {
    function isa(o) {
        return smithy_client_1.isa(o, "GroupDefinition");
    }
    GroupDefinition.isa = isa;
})(GroupDefinition = exports.GroupDefinition || (exports.GroupDefinition = {}));
var GroupDefinitionType;
(function (GroupDefinitionType) {
    GroupDefinitionType["COST_CATEGORY"] = "COST_CATEGORY";
    GroupDefinitionType["DIMENSION"] = "DIMENSION";
    GroupDefinitionType["TAG"] = "TAG";
})(GroupDefinitionType = exports.GroupDefinitionType || (exports.GroupDefinitionType = {}));
var InstanceDetails;
(function (InstanceDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceDetails");
    }
    InstanceDetails.isa = isa;
})(InstanceDetails = exports.InstanceDetails || (exports.InstanceDetails = {}));
var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidNextTokenException");
    }
    InvalidNextTokenException.isa = isa;
})(InvalidNextTokenException = exports.InvalidNextTokenException || (exports.InvalidNextTokenException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ListCostCategoryDefinitionsRequest;
(function (ListCostCategoryDefinitionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListCostCategoryDefinitionsRequest");
    }
    ListCostCategoryDefinitionsRequest.isa = isa;
})(ListCostCategoryDefinitionsRequest = exports.ListCostCategoryDefinitionsRequest || (exports.ListCostCategoryDefinitionsRequest = {}));
var ListCostCategoryDefinitionsResponse;
(function (ListCostCategoryDefinitionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListCostCategoryDefinitionsResponse");
    }
    ListCostCategoryDefinitionsResponse.isa = isa;
})(ListCostCategoryDefinitionsResponse = exports.ListCostCategoryDefinitionsResponse || (exports.ListCostCategoryDefinitionsResponse = {}));
var LookbackPeriodInDays;
(function (LookbackPeriodInDays) {
    LookbackPeriodInDays["SEVEN_DAYS"] = "SEVEN_DAYS";
    LookbackPeriodInDays["SIXTY_DAYS"] = "SIXTY_DAYS";
    LookbackPeriodInDays["THIRTY_DAYS"] = "THIRTY_DAYS";
})(LookbackPeriodInDays = exports.LookbackPeriodInDays || (exports.LookbackPeriodInDays = {}));
var Metric;
(function (Metric) {
    Metric["AMORTIZED_COST"] = "AMORTIZED_COST";
    Metric["BLENDED_COST"] = "BLENDED_COST";
    Metric["NET_AMORTIZED_COST"] = "NET_AMORTIZED_COST";
    Metric["NET_UNBLENDED_COST"] = "NET_UNBLENDED_COST";
    Metric["NORMALIZED_USAGE_AMOUNT"] = "NORMALIZED_USAGE_AMOUNT";
    Metric["UNBLENDED_COST"] = "UNBLENDED_COST";
    Metric["USAGE_QUANTITY"] = "USAGE_QUANTITY";
})(Metric = exports.Metric || (exports.Metric = {}));
var MetricValue;
(function (MetricValue) {
    function isa(o) {
        return smithy_client_1.isa(o, "MetricValue");
    }
    MetricValue.isa = isa;
})(MetricValue = exports.MetricValue || (exports.MetricValue = {}));
var ModifyRecommendationDetail;
(function (ModifyRecommendationDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModifyRecommendationDetail");
    }
    ModifyRecommendationDetail.isa = isa;
})(ModifyRecommendationDetail = exports.ModifyRecommendationDetail || (exports.ModifyRecommendationDetail = {}));
var OfferingClass;
(function (OfferingClass) {
    OfferingClass["CONVERTIBLE"] = "CONVERTIBLE";
    OfferingClass["STANDARD"] = "STANDARD";
})(OfferingClass = exports.OfferingClass || (exports.OfferingClass = {}));
var PaymentOption;
(function (PaymentOption) {
    PaymentOption["ALL_UPFRONT"] = "ALL_UPFRONT";
    PaymentOption["HEAVY_UTILIZATION"] = "HEAVY_UTILIZATION";
    PaymentOption["LIGHT_UTILIZATION"] = "LIGHT_UTILIZATION";
    PaymentOption["MEDIUM_UTILIZATION"] = "MEDIUM_UTILIZATION";
    PaymentOption["NO_UPFRONT"] = "NO_UPFRONT";
    PaymentOption["PARTIAL_UPFRONT"] = "PARTIAL_UPFRONT";
})(PaymentOption = exports.PaymentOption || (exports.PaymentOption = {}));
var RDSInstanceDetails;
(function (RDSInstanceDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "RDSInstanceDetails");
    }
    RDSInstanceDetails.isa = isa;
})(RDSInstanceDetails = exports.RDSInstanceDetails || (exports.RDSInstanceDetails = {}));
var RedshiftInstanceDetails;
(function (RedshiftInstanceDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "RedshiftInstanceDetails");
    }
    RedshiftInstanceDetails.isa = isa;
})(RedshiftInstanceDetails = exports.RedshiftInstanceDetails || (exports.RedshiftInstanceDetails = {}));
var RequestChangedException;
(function (RequestChangedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "RequestChangedException");
    }
    RequestChangedException.isa = isa;
})(RequestChangedException = exports.RequestChangedException || (exports.RequestChangedException = {}));
var ReservationAggregates;
(function (ReservationAggregates) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReservationAggregates");
    }
    ReservationAggregates.isa = isa;
})(ReservationAggregates = exports.ReservationAggregates || (exports.ReservationAggregates = {}));
var ReservationCoverageGroup;
(function (ReservationCoverageGroup) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReservationCoverageGroup");
    }
    ReservationCoverageGroup.isa = isa;
})(ReservationCoverageGroup = exports.ReservationCoverageGroup || (exports.ReservationCoverageGroup = {}));
var ReservationPurchaseRecommendation;
(function (ReservationPurchaseRecommendation) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReservationPurchaseRecommendation");
    }
    ReservationPurchaseRecommendation.isa = isa;
})(ReservationPurchaseRecommendation = exports.ReservationPurchaseRecommendation || (exports.ReservationPurchaseRecommendation = {}));
var ReservationPurchaseRecommendationDetail;
(function (ReservationPurchaseRecommendationDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReservationPurchaseRecommendationDetail");
    }
    ReservationPurchaseRecommendationDetail.isa = isa;
})(ReservationPurchaseRecommendationDetail = exports.ReservationPurchaseRecommendationDetail || (exports.ReservationPurchaseRecommendationDetail = {}));
var ReservationPurchaseRecommendationMetadata;
(function (ReservationPurchaseRecommendationMetadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReservationPurchaseRecommendationMetadata");
    }
    ReservationPurchaseRecommendationMetadata.isa = isa;
})(ReservationPurchaseRecommendationMetadata = exports.ReservationPurchaseRecommendationMetadata || (exports.ReservationPurchaseRecommendationMetadata = {}));
var ReservationPurchaseRecommendationSummary;
(function (ReservationPurchaseRecommendationSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReservationPurchaseRecommendationSummary");
    }
    ReservationPurchaseRecommendationSummary.isa = isa;
})(ReservationPurchaseRecommendationSummary = exports.ReservationPurchaseRecommendationSummary || (exports.ReservationPurchaseRecommendationSummary = {}));
var ReservationUtilizationGroup;
(function (ReservationUtilizationGroup) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReservationUtilizationGroup");
    }
    ReservationUtilizationGroup.isa = isa;
})(ReservationUtilizationGroup = exports.ReservationUtilizationGroup || (exports.ReservationUtilizationGroup = {}));
var ResourceDetails;
(function (ResourceDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceDetails");
    }
    ResourceDetails.isa = isa;
})(ResourceDetails = exports.ResourceDetails || (exports.ResourceDetails = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNotFoundException");
    }
    ResourceNotFoundException.isa = isa;
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ResourceUtilization;
(function (ResourceUtilization) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceUtilization");
    }
    ResourceUtilization.isa = isa;
})(ResourceUtilization = exports.ResourceUtilization || (exports.ResourceUtilization = {}));
var ResultByTime;
(function (ResultByTime) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResultByTime");
    }
    ResultByTime.isa = isa;
})(ResultByTime = exports.ResultByTime || (exports.ResultByTime = {}));
var RightsizingRecommendation;
(function (RightsizingRecommendation) {
    function isa(o) {
        return smithy_client_1.isa(o, "RightsizingRecommendation");
    }
    RightsizingRecommendation.isa = isa;
})(RightsizingRecommendation = exports.RightsizingRecommendation || (exports.RightsizingRecommendation = {}));
var RightsizingRecommendationMetadata;
(function (RightsizingRecommendationMetadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "RightsizingRecommendationMetadata");
    }
    RightsizingRecommendationMetadata.isa = isa;
})(RightsizingRecommendationMetadata = exports.RightsizingRecommendationMetadata || (exports.RightsizingRecommendationMetadata = {}));
var RightsizingRecommendationSummary;
(function (RightsizingRecommendationSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "RightsizingRecommendationSummary");
    }
    RightsizingRecommendationSummary.isa = isa;
})(RightsizingRecommendationSummary = exports.RightsizingRecommendationSummary || (exports.RightsizingRecommendationSummary = {}));
var RightsizingType;
(function (RightsizingType) {
    RightsizingType["MODIFY"] = "MODIFY";
    RightsizingType["TERMINATE"] = "TERMINATE";
})(RightsizingType = exports.RightsizingType || (exports.RightsizingType = {}));
var SavingsPlansAmortizedCommitment;
(function (SavingsPlansAmortizedCommitment) {
    function isa(o) {
        return smithy_client_1.isa(o, "SavingsPlansAmortizedCommitment");
    }
    SavingsPlansAmortizedCommitment.isa = isa;
})(SavingsPlansAmortizedCommitment = exports.SavingsPlansAmortizedCommitment || (exports.SavingsPlansAmortizedCommitment = {}));
var SavingsPlansCoverage;
(function (SavingsPlansCoverage) {
    function isa(o) {
        return smithy_client_1.isa(o, "SavingsPlansCoverage");
    }
    SavingsPlansCoverage.isa = isa;
})(SavingsPlansCoverage = exports.SavingsPlansCoverage || (exports.SavingsPlansCoverage = {}));
var SavingsPlansCoverageData;
(function (SavingsPlansCoverageData) {
    function isa(o) {
        return smithy_client_1.isa(o, "SavingsPlansCoverageData");
    }
    SavingsPlansCoverageData.isa = isa;
})(SavingsPlansCoverageData = exports.SavingsPlansCoverageData || (exports.SavingsPlansCoverageData = {}));
var SavingsPlansDetails;
(function (SavingsPlansDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "SavingsPlansDetails");
    }
    SavingsPlansDetails.isa = isa;
})(SavingsPlansDetails = exports.SavingsPlansDetails || (exports.SavingsPlansDetails = {}));
var SavingsPlansPurchaseRecommendation;
(function (SavingsPlansPurchaseRecommendation) {
    function isa(o) {
        return smithy_client_1.isa(o, "SavingsPlansPurchaseRecommendation");
    }
    SavingsPlansPurchaseRecommendation.isa = isa;
})(SavingsPlansPurchaseRecommendation = exports.SavingsPlansPurchaseRecommendation || (exports.SavingsPlansPurchaseRecommendation = {}));
var SavingsPlansPurchaseRecommendationDetail;
(function (SavingsPlansPurchaseRecommendationDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "SavingsPlansPurchaseRecommendationDetail");
    }
    SavingsPlansPurchaseRecommendationDetail.isa = isa;
})(SavingsPlansPurchaseRecommendationDetail = exports.SavingsPlansPurchaseRecommendationDetail || (exports.SavingsPlansPurchaseRecommendationDetail = {}));
var SavingsPlansPurchaseRecommendationMetadata;
(function (SavingsPlansPurchaseRecommendationMetadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "SavingsPlansPurchaseRecommendationMetadata");
    }
    SavingsPlansPurchaseRecommendationMetadata.isa = isa;
})(SavingsPlansPurchaseRecommendationMetadata = exports.SavingsPlansPurchaseRecommendationMetadata || (exports.SavingsPlansPurchaseRecommendationMetadata = {}));
var SavingsPlansPurchaseRecommendationSummary;
(function (SavingsPlansPurchaseRecommendationSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "SavingsPlansPurchaseRecommendationSummary");
    }
    SavingsPlansPurchaseRecommendationSummary.isa = isa;
})(SavingsPlansPurchaseRecommendationSummary = exports.SavingsPlansPurchaseRecommendationSummary || (exports.SavingsPlansPurchaseRecommendationSummary = {}));
var SavingsPlansSavings;
(function (SavingsPlansSavings) {
    function isa(o) {
        return smithy_client_1.isa(o, "SavingsPlansSavings");
    }
    SavingsPlansSavings.isa = isa;
})(SavingsPlansSavings = exports.SavingsPlansSavings || (exports.SavingsPlansSavings = {}));
var SavingsPlansUtilization;
(function (SavingsPlansUtilization) {
    function isa(o) {
        return smithy_client_1.isa(o, "SavingsPlansUtilization");
    }
    SavingsPlansUtilization.isa = isa;
})(SavingsPlansUtilization = exports.SavingsPlansUtilization || (exports.SavingsPlansUtilization = {}));
var SavingsPlansUtilizationAggregates;
(function (SavingsPlansUtilizationAggregates) {
    function isa(o) {
        return smithy_client_1.isa(o, "SavingsPlansUtilizationAggregates");
    }
    SavingsPlansUtilizationAggregates.isa = isa;
})(SavingsPlansUtilizationAggregates = exports.SavingsPlansUtilizationAggregates || (exports.SavingsPlansUtilizationAggregates = {}));
var SavingsPlansUtilizationByTime;
(function (SavingsPlansUtilizationByTime) {
    function isa(o) {
        return smithy_client_1.isa(o, "SavingsPlansUtilizationByTime");
    }
    SavingsPlansUtilizationByTime.isa = isa;
})(SavingsPlansUtilizationByTime = exports.SavingsPlansUtilizationByTime || (exports.SavingsPlansUtilizationByTime = {}));
var SavingsPlansUtilizationDetail;
(function (SavingsPlansUtilizationDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "SavingsPlansUtilizationDetail");
    }
    SavingsPlansUtilizationDetail.isa = isa;
})(SavingsPlansUtilizationDetail = exports.SavingsPlansUtilizationDetail || (exports.SavingsPlansUtilizationDetail = {}));
var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceQuotaExceededException");
    }
    ServiceQuotaExceededException.isa = isa;
})(ServiceQuotaExceededException = exports.ServiceQuotaExceededException || (exports.ServiceQuotaExceededException = {}));
var ServiceSpecification;
(function (ServiceSpecification) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceSpecification");
    }
    ServiceSpecification.isa = isa;
})(ServiceSpecification = exports.ServiceSpecification || (exports.ServiceSpecification = {}));
var SupportedSavingsPlansType;
(function (SupportedSavingsPlansType) {
    SupportedSavingsPlansType["COMPUTE_SP"] = "COMPUTE_SP";
    SupportedSavingsPlansType["EC2_INSTANCE_SP"] = "EC2_INSTANCE_SP";
})(SupportedSavingsPlansType = exports.SupportedSavingsPlansType || (exports.SupportedSavingsPlansType = {}));
var TagValues;
(function (TagValues) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagValues");
    }
    TagValues.isa = isa;
})(TagValues = exports.TagValues || (exports.TagValues = {}));
var TargetInstance;
(function (TargetInstance) {
    function isa(o) {
        return smithy_client_1.isa(o, "TargetInstance");
    }
    TargetInstance.isa = isa;
})(TargetInstance = exports.TargetInstance || (exports.TargetInstance = {}));
var TermInYears;
(function (TermInYears) {
    TermInYears["ONE_YEAR"] = "ONE_YEAR";
    TermInYears["THREE_YEARS"] = "THREE_YEARS";
})(TermInYears = exports.TermInYears || (exports.TermInYears = {}));
var TerminateRecommendationDetail;
(function (TerminateRecommendationDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "TerminateRecommendationDetail");
    }
    TerminateRecommendationDetail.isa = isa;
})(TerminateRecommendationDetail = exports.TerminateRecommendationDetail || (exports.TerminateRecommendationDetail = {}));
var UnresolvableUsageUnitException;
(function (UnresolvableUsageUnitException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnresolvableUsageUnitException");
    }
    UnresolvableUsageUnitException.isa = isa;
})(UnresolvableUsageUnitException = exports.UnresolvableUsageUnitException || (exports.UnresolvableUsageUnitException = {}));
var UpdateCostCategoryDefinitionRequest;
(function (UpdateCostCategoryDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateCostCategoryDefinitionRequest");
    }
    UpdateCostCategoryDefinitionRequest.isa = isa;
})(UpdateCostCategoryDefinitionRequest = exports.UpdateCostCategoryDefinitionRequest || (exports.UpdateCostCategoryDefinitionRequest = {}));
var UpdateCostCategoryDefinitionResponse;
(function (UpdateCostCategoryDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateCostCategoryDefinitionResponse");
    }
    UpdateCostCategoryDefinitionResponse.isa = isa;
})(UpdateCostCategoryDefinitionResponse = exports.UpdateCostCategoryDefinitionResponse || (exports.UpdateCostCategoryDefinitionResponse = {}));
var UtilizationByTime;
(function (UtilizationByTime) {
    function isa(o) {
        return smithy_client_1.isa(o, "UtilizationByTime");
    }
    UtilizationByTime.isa = isa;
})(UtilizationByTime = exports.UtilizationByTime || (exports.UtilizationByTime = {}));
//# sourceMappingURL=index.js.map