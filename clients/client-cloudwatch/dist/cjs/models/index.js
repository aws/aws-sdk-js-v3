"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var InvalidParameterCombinationException;
(function (InvalidParameterCombinationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidParameterCombinationException");
    }
    InvalidParameterCombinationException.isa = isa;
})(InvalidParameterCombinationException = exports.InvalidParameterCombinationException || (exports.InvalidParameterCombinationException = {}));
var InvalidParameterValueException;
(function (InvalidParameterValueException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidParameterValueException");
    }
    InvalidParameterValueException.isa = isa;
})(InvalidParameterValueException = exports.InvalidParameterValueException || (exports.InvalidParameterValueException = {}));
var MissingRequiredParameterException;
(function (MissingRequiredParameterException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MissingRequiredParameterException");
    }
    MissingRequiredParameterException.isa = isa;
})(MissingRequiredParameterException = exports.MissingRequiredParameterException || (exports.MissingRequiredParameterException = {}));
var AlarmHistoryItem;
(function (AlarmHistoryItem) {
    function isa(o) {
        return smithy_client_1.isa(o, "AlarmHistoryItem");
    }
    AlarmHistoryItem.isa = isa;
})(AlarmHistoryItem = exports.AlarmHistoryItem || (exports.AlarmHistoryItem = {}));
var AnomalyDetector;
(function (AnomalyDetector) {
    function isa(o) {
        return smithy_client_1.isa(o, "AnomalyDetector");
    }
    AnomalyDetector.isa = isa;
})(AnomalyDetector = exports.AnomalyDetector || (exports.AnomalyDetector = {}));
var AnomalyDetectorConfiguration;
(function (AnomalyDetectorConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "AnomalyDetectorConfiguration");
    }
    AnomalyDetectorConfiguration.isa = isa;
})(AnomalyDetectorConfiguration = exports.AnomalyDetectorConfiguration || (exports.AnomalyDetectorConfiguration = {}));
var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConcurrentModificationException");
    }
    ConcurrentModificationException.isa = isa;
})(ConcurrentModificationException = exports.ConcurrentModificationException || (exports.ConcurrentModificationException = {}));
var DashboardEntry;
(function (DashboardEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "DashboardEntry");
    }
    DashboardEntry.isa = isa;
})(DashboardEntry = exports.DashboardEntry || (exports.DashboardEntry = {}));
var DashboardInvalidInputError;
(function (DashboardInvalidInputError) {
    function isa(o) {
        return smithy_client_1.isa(o, "DashboardInvalidInputError");
    }
    DashboardInvalidInputError.isa = isa;
})(DashboardInvalidInputError = exports.DashboardInvalidInputError || (exports.DashboardInvalidInputError = {}));
var DashboardNotFoundError;
(function (DashboardNotFoundError) {
    function isa(o) {
        return smithy_client_1.isa(o, "DashboardNotFoundError");
    }
    DashboardNotFoundError.isa = isa;
})(DashboardNotFoundError = exports.DashboardNotFoundError || (exports.DashboardNotFoundError = {}));
var DashboardValidationMessage;
(function (DashboardValidationMessage) {
    function isa(o) {
        return smithy_client_1.isa(o, "DashboardValidationMessage");
    }
    DashboardValidationMessage.isa = isa;
})(DashboardValidationMessage = exports.DashboardValidationMessage || (exports.DashboardValidationMessage = {}));
var Datapoint;
(function (Datapoint) {
    function isa(o) {
        return smithy_client_1.isa(o, "Datapoint");
    }
    Datapoint.isa = isa;
})(Datapoint = exports.Datapoint || (exports.Datapoint = {}));
var DeleteAlarmsInput;
(function (DeleteAlarmsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteAlarmsInput");
    }
    DeleteAlarmsInput.isa = isa;
})(DeleteAlarmsInput = exports.DeleteAlarmsInput || (exports.DeleteAlarmsInput = {}));
var DeleteAnomalyDetectorInput;
(function (DeleteAnomalyDetectorInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteAnomalyDetectorInput");
    }
    DeleteAnomalyDetectorInput.isa = isa;
})(DeleteAnomalyDetectorInput = exports.DeleteAnomalyDetectorInput || (exports.DeleteAnomalyDetectorInput = {}));
var DeleteAnomalyDetectorOutput;
(function (DeleteAnomalyDetectorOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteAnomalyDetectorOutput");
    }
    DeleteAnomalyDetectorOutput.isa = isa;
})(DeleteAnomalyDetectorOutput = exports.DeleteAnomalyDetectorOutput || (exports.DeleteAnomalyDetectorOutput = {}));
var DeleteDashboardsInput;
(function (DeleteDashboardsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDashboardsInput");
    }
    DeleteDashboardsInput.isa = isa;
})(DeleteDashboardsInput = exports.DeleteDashboardsInput || (exports.DeleteDashboardsInput = {}));
var DeleteDashboardsOutput;
(function (DeleteDashboardsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDashboardsOutput");
    }
    DeleteDashboardsOutput.isa = isa;
})(DeleteDashboardsOutput = exports.DeleteDashboardsOutput || (exports.DeleteDashboardsOutput = {}));
var DeleteInsightRulesInput;
(function (DeleteInsightRulesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteInsightRulesInput");
    }
    DeleteInsightRulesInput.isa = isa;
})(DeleteInsightRulesInput = exports.DeleteInsightRulesInput || (exports.DeleteInsightRulesInput = {}));
var DeleteInsightRulesOutput;
(function (DeleteInsightRulesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteInsightRulesOutput");
    }
    DeleteInsightRulesOutput.isa = isa;
})(DeleteInsightRulesOutput = exports.DeleteInsightRulesOutput || (exports.DeleteInsightRulesOutput = {}));
var DescribeAlarmHistoryInput;
(function (DescribeAlarmHistoryInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAlarmHistoryInput");
    }
    DescribeAlarmHistoryInput.isa = isa;
})(DescribeAlarmHistoryInput = exports.DescribeAlarmHistoryInput || (exports.DescribeAlarmHistoryInput = {}));
var DescribeAlarmHistoryOutput;
(function (DescribeAlarmHistoryOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAlarmHistoryOutput");
    }
    DescribeAlarmHistoryOutput.isa = isa;
})(DescribeAlarmHistoryOutput = exports.DescribeAlarmHistoryOutput || (exports.DescribeAlarmHistoryOutput = {}));
var DescribeAlarmsForMetricInput;
(function (DescribeAlarmsForMetricInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAlarmsForMetricInput");
    }
    DescribeAlarmsForMetricInput.isa = isa;
})(DescribeAlarmsForMetricInput = exports.DescribeAlarmsForMetricInput || (exports.DescribeAlarmsForMetricInput = {}));
var DescribeAlarmsForMetricOutput;
(function (DescribeAlarmsForMetricOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAlarmsForMetricOutput");
    }
    DescribeAlarmsForMetricOutput.isa = isa;
})(DescribeAlarmsForMetricOutput = exports.DescribeAlarmsForMetricOutput || (exports.DescribeAlarmsForMetricOutput = {}));
var DescribeAlarmsInput;
(function (DescribeAlarmsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAlarmsInput");
    }
    DescribeAlarmsInput.isa = isa;
})(DescribeAlarmsInput = exports.DescribeAlarmsInput || (exports.DescribeAlarmsInput = {}));
var DescribeAlarmsOutput;
(function (DescribeAlarmsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAlarmsOutput");
    }
    DescribeAlarmsOutput.isa = isa;
})(DescribeAlarmsOutput = exports.DescribeAlarmsOutput || (exports.DescribeAlarmsOutput = {}));
var DescribeAnomalyDetectorsInput;
(function (DescribeAnomalyDetectorsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAnomalyDetectorsInput");
    }
    DescribeAnomalyDetectorsInput.isa = isa;
})(DescribeAnomalyDetectorsInput = exports.DescribeAnomalyDetectorsInput || (exports.DescribeAnomalyDetectorsInput = {}));
var DescribeAnomalyDetectorsOutput;
(function (DescribeAnomalyDetectorsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAnomalyDetectorsOutput");
    }
    DescribeAnomalyDetectorsOutput.isa = isa;
})(DescribeAnomalyDetectorsOutput = exports.DescribeAnomalyDetectorsOutput || (exports.DescribeAnomalyDetectorsOutput = {}));
var DescribeInsightRulesInput;
(function (DescribeInsightRulesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeInsightRulesInput");
    }
    DescribeInsightRulesInput.isa = isa;
})(DescribeInsightRulesInput = exports.DescribeInsightRulesInput || (exports.DescribeInsightRulesInput = {}));
var DescribeInsightRulesOutput;
(function (DescribeInsightRulesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeInsightRulesOutput");
    }
    DescribeInsightRulesOutput.isa = isa;
})(DescribeInsightRulesOutput = exports.DescribeInsightRulesOutput || (exports.DescribeInsightRulesOutput = {}));
var Dimension;
(function (Dimension) {
    function isa(o) {
        return smithy_client_1.isa(o, "Dimension");
    }
    Dimension.isa = isa;
})(Dimension = exports.Dimension || (exports.Dimension = {}));
var DimensionFilter;
(function (DimensionFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "DimensionFilter");
    }
    DimensionFilter.isa = isa;
})(DimensionFilter = exports.DimensionFilter || (exports.DimensionFilter = {}));
var DisableAlarmActionsInput;
(function (DisableAlarmActionsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisableAlarmActionsInput");
    }
    DisableAlarmActionsInput.isa = isa;
})(DisableAlarmActionsInput = exports.DisableAlarmActionsInput || (exports.DisableAlarmActionsInput = {}));
var DisableInsightRulesInput;
(function (DisableInsightRulesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisableInsightRulesInput");
    }
    DisableInsightRulesInput.isa = isa;
})(DisableInsightRulesInput = exports.DisableInsightRulesInput || (exports.DisableInsightRulesInput = {}));
var DisableInsightRulesOutput;
(function (DisableInsightRulesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisableInsightRulesOutput");
    }
    DisableInsightRulesOutput.isa = isa;
})(DisableInsightRulesOutput = exports.DisableInsightRulesOutput || (exports.DisableInsightRulesOutput = {}));
var EnableAlarmActionsInput;
(function (EnableAlarmActionsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "EnableAlarmActionsInput");
    }
    EnableAlarmActionsInput.isa = isa;
})(EnableAlarmActionsInput = exports.EnableAlarmActionsInput || (exports.EnableAlarmActionsInput = {}));
var EnableInsightRulesInput;
(function (EnableInsightRulesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "EnableInsightRulesInput");
    }
    EnableInsightRulesInput.isa = isa;
})(EnableInsightRulesInput = exports.EnableInsightRulesInput || (exports.EnableInsightRulesInput = {}));
var EnableInsightRulesOutput;
(function (EnableInsightRulesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "EnableInsightRulesOutput");
    }
    EnableInsightRulesOutput.isa = isa;
})(EnableInsightRulesOutput = exports.EnableInsightRulesOutput || (exports.EnableInsightRulesOutput = {}));
var GetDashboardInput;
(function (GetDashboardInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDashboardInput");
    }
    GetDashboardInput.isa = isa;
})(GetDashboardInput = exports.GetDashboardInput || (exports.GetDashboardInput = {}));
var GetDashboardOutput;
(function (GetDashboardOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDashboardOutput");
    }
    GetDashboardOutput.isa = isa;
})(GetDashboardOutput = exports.GetDashboardOutput || (exports.GetDashboardOutput = {}));
var GetInsightRuleReportInput;
(function (GetInsightRuleReportInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetInsightRuleReportInput");
    }
    GetInsightRuleReportInput.isa = isa;
})(GetInsightRuleReportInput = exports.GetInsightRuleReportInput || (exports.GetInsightRuleReportInput = {}));
var GetInsightRuleReportOutput;
(function (GetInsightRuleReportOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetInsightRuleReportOutput");
    }
    GetInsightRuleReportOutput.isa = isa;
})(GetInsightRuleReportOutput = exports.GetInsightRuleReportOutput || (exports.GetInsightRuleReportOutput = {}));
var GetMetricDataInput;
(function (GetMetricDataInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMetricDataInput");
    }
    GetMetricDataInput.isa = isa;
})(GetMetricDataInput = exports.GetMetricDataInput || (exports.GetMetricDataInput = {}));
var GetMetricDataOutput;
(function (GetMetricDataOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMetricDataOutput");
    }
    GetMetricDataOutput.isa = isa;
})(GetMetricDataOutput = exports.GetMetricDataOutput || (exports.GetMetricDataOutput = {}));
var GetMetricStatisticsInput;
(function (GetMetricStatisticsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMetricStatisticsInput");
    }
    GetMetricStatisticsInput.isa = isa;
})(GetMetricStatisticsInput = exports.GetMetricStatisticsInput || (exports.GetMetricStatisticsInput = {}));
var GetMetricStatisticsOutput;
(function (GetMetricStatisticsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMetricStatisticsOutput");
    }
    GetMetricStatisticsOutput.isa = isa;
})(GetMetricStatisticsOutput = exports.GetMetricStatisticsOutput || (exports.GetMetricStatisticsOutput = {}));
var GetMetricWidgetImageInput;
(function (GetMetricWidgetImageInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMetricWidgetImageInput");
    }
    GetMetricWidgetImageInput.isa = isa;
})(GetMetricWidgetImageInput = exports.GetMetricWidgetImageInput || (exports.GetMetricWidgetImageInput = {}));
var GetMetricWidgetImageOutput;
(function (GetMetricWidgetImageOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMetricWidgetImageOutput");
    }
    GetMetricWidgetImageOutput.isa = isa;
})(GetMetricWidgetImageOutput = exports.GetMetricWidgetImageOutput || (exports.GetMetricWidgetImageOutput = {}));
var InsightRule;
(function (InsightRule) {
    function isa(o) {
        return smithy_client_1.isa(o, "InsightRule");
    }
    InsightRule.isa = isa;
})(InsightRule = exports.InsightRule || (exports.InsightRule = {}));
var InsightRuleContributor;
(function (InsightRuleContributor) {
    function isa(o) {
        return smithy_client_1.isa(o, "InsightRuleContributor");
    }
    InsightRuleContributor.isa = isa;
})(InsightRuleContributor = exports.InsightRuleContributor || (exports.InsightRuleContributor = {}));
var InsightRuleContributorDatapoint;
(function (InsightRuleContributorDatapoint) {
    function isa(o) {
        return smithy_client_1.isa(o, "InsightRuleContributorDatapoint");
    }
    InsightRuleContributorDatapoint.isa = isa;
})(InsightRuleContributorDatapoint = exports.InsightRuleContributorDatapoint || (exports.InsightRuleContributorDatapoint = {}));
var InsightRuleMetricDatapoint;
(function (InsightRuleMetricDatapoint) {
    function isa(o) {
        return smithy_client_1.isa(o, "InsightRuleMetricDatapoint");
    }
    InsightRuleMetricDatapoint.isa = isa;
})(InsightRuleMetricDatapoint = exports.InsightRuleMetricDatapoint || (exports.InsightRuleMetricDatapoint = {}));
var InternalServiceFault;
(function (InternalServiceFault) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalServiceFault");
    }
    InternalServiceFault.isa = isa;
})(InternalServiceFault = exports.InternalServiceFault || (exports.InternalServiceFault = {}));
var InvalidFormatFault;
(function (InvalidFormatFault) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidFormatFault");
    }
    InvalidFormatFault.isa = isa;
})(InvalidFormatFault = exports.InvalidFormatFault || (exports.InvalidFormatFault = {}));
var InvalidNextToken;
(function (InvalidNextToken) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidNextToken");
    }
    InvalidNextToken.isa = isa;
})(InvalidNextToken = exports.InvalidNextToken || (exports.InvalidNextToken = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var LimitExceededFault;
(function (LimitExceededFault) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededFault");
    }
    LimitExceededFault.isa = isa;
})(LimitExceededFault = exports.LimitExceededFault || (exports.LimitExceededFault = {}));
var ListDashboardsInput;
(function (ListDashboardsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDashboardsInput");
    }
    ListDashboardsInput.isa = isa;
})(ListDashboardsInput = exports.ListDashboardsInput || (exports.ListDashboardsInput = {}));
var ListDashboardsOutput;
(function (ListDashboardsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDashboardsOutput");
    }
    ListDashboardsOutput.isa = isa;
})(ListDashboardsOutput = exports.ListDashboardsOutput || (exports.ListDashboardsOutput = {}));
var ListMetricsInput;
(function (ListMetricsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListMetricsInput");
    }
    ListMetricsInput.isa = isa;
})(ListMetricsInput = exports.ListMetricsInput || (exports.ListMetricsInput = {}));
var ListMetricsOutput;
(function (ListMetricsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListMetricsOutput");
    }
    ListMetricsOutput.isa = isa;
})(ListMetricsOutput = exports.ListMetricsOutput || (exports.ListMetricsOutput = {}));
var ListTagsForResourceInput;
(function (ListTagsForResourceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsForResourceInput");
    }
    ListTagsForResourceInput.isa = isa;
})(ListTagsForResourceInput = exports.ListTagsForResourceInput || (exports.ListTagsForResourceInput = {}));
var ListTagsForResourceOutput;
(function (ListTagsForResourceOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsForResourceOutput");
    }
    ListTagsForResourceOutput.isa = isa;
})(ListTagsForResourceOutput = exports.ListTagsForResourceOutput || (exports.ListTagsForResourceOutput = {}));
var MessageData;
(function (MessageData) {
    function isa(o) {
        return smithy_client_1.isa(o, "MessageData");
    }
    MessageData.isa = isa;
})(MessageData = exports.MessageData || (exports.MessageData = {}));
var Metric;
(function (Metric) {
    function isa(o) {
        return smithy_client_1.isa(o, "Metric");
    }
    Metric.isa = isa;
})(Metric = exports.Metric || (exports.Metric = {}));
var MetricAlarm;
(function (MetricAlarm) {
    function isa(o) {
        return smithy_client_1.isa(o, "MetricAlarm");
    }
    MetricAlarm.isa = isa;
})(MetricAlarm = exports.MetricAlarm || (exports.MetricAlarm = {}));
var MetricDataQuery;
(function (MetricDataQuery) {
    function isa(o) {
        return smithy_client_1.isa(o, "MetricDataQuery");
    }
    MetricDataQuery.isa = isa;
})(MetricDataQuery = exports.MetricDataQuery || (exports.MetricDataQuery = {}));
var MetricDataResult;
(function (MetricDataResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "MetricDataResult");
    }
    MetricDataResult.isa = isa;
})(MetricDataResult = exports.MetricDataResult || (exports.MetricDataResult = {}));
var MetricDatum;
(function (MetricDatum) {
    function isa(o) {
        return smithy_client_1.isa(o, "MetricDatum");
    }
    MetricDatum.isa = isa;
})(MetricDatum = exports.MetricDatum || (exports.MetricDatum = {}));
var MetricStat;
(function (MetricStat) {
    function isa(o) {
        return smithy_client_1.isa(o, "MetricStat");
    }
    MetricStat.isa = isa;
})(MetricStat = exports.MetricStat || (exports.MetricStat = {}));
var PartialFailure;
(function (PartialFailure) {
    function isa(o) {
        return smithy_client_1.isa(o, "PartialFailure");
    }
    PartialFailure.isa = isa;
})(PartialFailure = exports.PartialFailure || (exports.PartialFailure = {}));
var PutAnomalyDetectorInput;
(function (PutAnomalyDetectorInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutAnomalyDetectorInput");
    }
    PutAnomalyDetectorInput.isa = isa;
})(PutAnomalyDetectorInput = exports.PutAnomalyDetectorInput || (exports.PutAnomalyDetectorInput = {}));
var PutAnomalyDetectorOutput;
(function (PutAnomalyDetectorOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutAnomalyDetectorOutput");
    }
    PutAnomalyDetectorOutput.isa = isa;
})(PutAnomalyDetectorOutput = exports.PutAnomalyDetectorOutput || (exports.PutAnomalyDetectorOutput = {}));
var PutDashboardInput;
(function (PutDashboardInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutDashboardInput");
    }
    PutDashboardInput.isa = isa;
})(PutDashboardInput = exports.PutDashboardInput || (exports.PutDashboardInput = {}));
var PutDashboardOutput;
(function (PutDashboardOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutDashboardOutput");
    }
    PutDashboardOutput.isa = isa;
})(PutDashboardOutput = exports.PutDashboardOutput || (exports.PutDashboardOutput = {}));
var PutInsightRuleInput;
(function (PutInsightRuleInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutInsightRuleInput");
    }
    PutInsightRuleInput.isa = isa;
})(PutInsightRuleInput = exports.PutInsightRuleInput || (exports.PutInsightRuleInput = {}));
var PutInsightRuleOutput;
(function (PutInsightRuleOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutInsightRuleOutput");
    }
    PutInsightRuleOutput.isa = isa;
})(PutInsightRuleOutput = exports.PutInsightRuleOutput || (exports.PutInsightRuleOutput = {}));
var PutMetricAlarmInput;
(function (PutMetricAlarmInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutMetricAlarmInput");
    }
    PutMetricAlarmInput.isa = isa;
})(PutMetricAlarmInput = exports.PutMetricAlarmInput || (exports.PutMetricAlarmInput = {}));
var PutMetricDataInput;
(function (PutMetricDataInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutMetricDataInput");
    }
    PutMetricDataInput.isa = isa;
})(PutMetricDataInput = exports.PutMetricDataInput || (exports.PutMetricDataInput = {}));
var Range;
(function (Range) {
    function isa(o) {
        return smithy_client_1.isa(o, "Range");
    }
    Range.isa = isa;
})(Range = exports.Range || (exports.Range = {}));
var ResourceNotFound;
(function (ResourceNotFound) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNotFound");
    }
    ResourceNotFound.isa = isa;
})(ResourceNotFound = exports.ResourceNotFound || (exports.ResourceNotFound = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNotFoundException");
    }
    ResourceNotFoundException.isa = isa;
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ScanBy;
(function (ScanBy) {
    ScanBy["TIMESTAMP_ASCENDING"] = "TimestampAscending";
    ScanBy["TIMESTAMP_DESCENDING"] = "TimestampDescending";
})(ScanBy = exports.ScanBy || (exports.ScanBy = {}));
var SetAlarmStateInput;
(function (SetAlarmStateInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "SetAlarmStateInput");
    }
    SetAlarmStateInput.isa = isa;
})(SetAlarmStateInput = exports.SetAlarmStateInput || (exports.SetAlarmStateInput = {}));
var StatisticSet;
(function (StatisticSet) {
    function isa(o) {
        return smithy_client_1.isa(o, "StatisticSet");
    }
    StatisticSet.isa = isa;
})(StatisticSet = exports.StatisticSet || (exports.StatisticSet = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode["COMPLETE"] = "Complete";
    StatusCode["INTERNAL_ERROR"] = "InternalError";
    StatusCode["PARTIAL_DATA"] = "PartialData";
})(StatusCode = exports.StatusCode || (exports.StatusCode = {}));
var Tag;
(function (Tag) {
    function isa(o) {
        return smithy_client_1.isa(o, "Tag");
    }
    Tag.isa = isa;
})(Tag = exports.Tag || (exports.Tag = {}));
var TagResourceInput;
(function (TagResourceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagResourceInput");
    }
    TagResourceInput.isa = isa;
})(TagResourceInput = exports.TagResourceInput || (exports.TagResourceInput = {}));
var TagResourceOutput;
(function (TagResourceOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagResourceOutput");
    }
    TagResourceOutput.isa = isa;
})(TagResourceOutput = exports.TagResourceOutput || (exports.TagResourceOutput = {}));
var UntagResourceInput;
(function (UntagResourceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceInput");
    }
    UntagResourceInput.isa = isa;
})(UntagResourceInput = exports.UntagResourceInput || (exports.UntagResourceInput = {}));
var UntagResourceOutput;
(function (UntagResourceOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceOutput");
    }
    UntagResourceOutput.isa = isa;
})(UntagResourceOutput = exports.UntagResourceOutput || (exports.UntagResourceOutput = {}));
//# sourceMappingURL=index.js.map