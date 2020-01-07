"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AttributeType;
(function (AttributeType) {
    AttributeType["FLOAT"] = "float";
    AttributeType["INTEGER"] = "integer";
    AttributeType["STRING"] = "string";
    AttributeType["TIMESTAMP"] = "timestamp";
})(AttributeType = exports.AttributeType || (exports.AttributeType = {}));
var CategoricalParameterRange;
(function (CategoricalParameterRange) {
    function isa(o) {
        return smithy_client_1.isa(o, "CategoricalParameterRange");
    }
    CategoricalParameterRange.isa = isa;
})(CategoricalParameterRange = exports.CategoricalParameterRange || (exports.CategoricalParameterRange = {}));
var ContinuousParameterRange;
(function (ContinuousParameterRange) {
    function isa(o) {
        return smithy_client_1.isa(o, "ContinuousParameterRange");
    }
    ContinuousParameterRange.isa = isa;
})(ContinuousParameterRange = exports.ContinuousParameterRange || (exports.ContinuousParameterRange = {}));
var CreateDatasetGroupRequest;
(function (CreateDatasetGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDatasetGroupRequest");
    }
    CreateDatasetGroupRequest.isa = isa;
})(CreateDatasetGroupRequest = exports.CreateDatasetGroupRequest || (exports.CreateDatasetGroupRequest = {}));
var CreateDatasetGroupResponse;
(function (CreateDatasetGroupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDatasetGroupResponse");
    }
    CreateDatasetGroupResponse.isa = isa;
})(CreateDatasetGroupResponse = exports.CreateDatasetGroupResponse || (exports.CreateDatasetGroupResponse = {}));
var CreateDatasetImportJobRequest;
(function (CreateDatasetImportJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDatasetImportJobRequest");
    }
    CreateDatasetImportJobRequest.isa = isa;
})(CreateDatasetImportJobRequest = exports.CreateDatasetImportJobRequest || (exports.CreateDatasetImportJobRequest = {}));
var CreateDatasetImportJobResponse;
(function (CreateDatasetImportJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDatasetImportJobResponse");
    }
    CreateDatasetImportJobResponse.isa = isa;
})(CreateDatasetImportJobResponse = exports.CreateDatasetImportJobResponse || (exports.CreateDatasetImportJobResponse = {}));
var CreateDatasetRequest;
(function (CreateDatasetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDatasetRequest");
    }
    CreateDatasetRequest.isa = isa;
})(CreateDatasetRequest = exports.CreateDatasetRequest || (exports.CreateDatasetRequest = {}));
var CreateDatasetResponse;
(function (CreateDatasetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDatasetResponse");
    }
    CreateDatasetResponse.isa = isa;
})(CreateDatasetResponse = exports.CreateDatasetResponse || (exports.CreateDatasetResponse = {}));
var CreateForecastExportJobRequest;
(function (CreateForecastExportJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateForecastExportJobRequest");
    }
    CreateForecastExportJobRequest.isa = isa;
})(CreateForecastExportJobRequest = exports.CreateForecastExportJobRequest || (exports.CreateForecastExportJobRequest = {}));
var CreateForecastExportJobResponse;
(function (CreateForecastExportJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateForecastExportJobResponse");
    }
    CreateForecastExportJobResponse.isa = isa;
})(CreateForecastExportJobResponse = exports.CreateForecastExportJobResponse || (exports.CreateForecastExportJobResponse = {}));
var CreateForecastRequest;
(function (CreateForecastRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateForecastRequest");
    }
    CreateForecastRequest.isa = isa;
})(CreateForecastRequest = exports.CreateForecastRequest || (exports.CreateForecastRequest = {}));
var CreateForecastResponse;
(function (CreateForecastResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateForecastResponse");
    }
    CreateForecastResponse.isa = isa;
})(CreateForecastResponse = exports.CreateForecastResponse || (exports.CreateForecastResponse = {}));
var CreatePredictorRequest;
(function (CreatePredictorRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreatePredictorRequest");
    }
    CreatePredictorRequest.isa = isa;
})(CreatePredictorRequest = exports.CreatePredictorRequest || (exports.CreatePredictorRequest = {}));
var CreatePredictorResponse;
(function (CreatePredictorResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreatePredictorResponse");
    }
    CreatePredictorResponse.isa = isa;
})(CreatePredictorResponse = exports.CreatePredictorResponse || (exports.CreatePredictorResponse = {}));
var DataDestination;
(function (DataDestination) {
    function isa(o) {
        return smithy_client_1.isa(o, "DataDestination");
    }
    DataDestination.isa = isa;
})(DataDestination = exports.DataDestination || (exports.DataDestination = {}));
var DataSource;
(function (DataSource) {
    function isa(o) {
        return smithy_client_1.isa(o, "DataSource");
    }
    DataSource.isa = isa;
})(DataSource = exports.DataSource || (exports.DataSource = {}));
var DatasetGroupSummary;
(function (DatasetGroupSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "DatasetGroupSummary");
    }
    DatasetGroupSummary.isa = isa;
})(DatasetGroupSummary = exports.DatasetGroupSummary || (exports.DatasetGroupSummary = {}));
var DatasetImportJobSummary;
(function (DatasetImportJobSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "DatasetImportJobSummary");
    }
    DatasetImportJobSummary.isa = isa;
})(DatasetImportJobSummary = exports.DatasetImportJobSummary || (exports.DatasetImportJobSummary = {}));
var DatasetSummary;
(function (DatasetSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "DatasetSummary");
    }
    DatasetSummary.isa = isa;
})(DatasetSummary = exports.DatasetSummary || (exports.DatasetSummary = {}));
var DatasetType;
(function (DatasetType) {
    DatasetType["ITEM_METADATA"] = "ITEM_METADATA";
    DatasetType["RELATED_TIME_SERIES"] = "RELATED_TIME_SERIES";
    DatasetType["TARGET_TIME_SERIES"] = "TARGET_TIME_SERIES";
})(DatasetType = exports.DatasetType || (exports.DatasetType = {}));
var DeleteDatasetGroupRequest;
(function (DeleteDatasetGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDatasetGroupRequest");
    }
    DeleteDatasetGroupRequest.isa = isa;
})(DeleteDatasetGroupRequest = exports.DeleteDatasetGroupRequest || (exports.DeleteDatasetGroupRequest = {}));
var DeleteDatasetImportJobRequest;
(function (DeleteDatasetImportJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDatasetImportJobRequest");
    }
    DeleteDatasetImportJobRequest.isa = isa;
})(DeleteDatasetImportJobRequest = exports.DeleteDatasetImportJobRequest || (exports.DeleteDatasetImportJobRequest = {}));
var DeleteDatasetRequest;
(function (DeleteDatasetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDatasetRequest");
    }
    DeleteDatasetRequest.isa = isa;
})(DeleteDatasetRequest = exports.DeleteDatasetRequest || (exports.DeleteDatasetRequest = {}));
var DeleteForecastExportJobRequest;
(function (DeleteForecastExportJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteForecastExportJobRequest");
    }
    DeleteForecastExportJobRequest.isa = isa;
})(DeleteForecastExportJobRequest = exports.DeleteForecastExportJobRequest || (exports.DeleteForecastExportJobRequest = {}));
var DeleteForecastRequest;
(function (DeleteForecastRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteForecastRequest");
    }
    DeleteForecastRequest.isa = isa;
})(DeleteForecastRequest = exports.DeleteForecastRequest || (exports.DeleteForecastRequest = {}));
var DeletePredictorRequest;
(function (DeletePredictorRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeletePredictorRequest");
    }
    DeletePredictorRequest.isa = isa;
})(DeletePredictorRequest = exports.DeletePredictorRequest || (exports.DeletePredictorRequest = {}));
var DescribeDatasetGroupRequest;
(function (DescribeDatasetGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDatasetGroupRequest");
    }
    DescribeDatasetGroupRequest.isa = isa;
})(DescribeDatasetGroupRequest = exports.DescribeDatasetGroupRequest || (exports.DescribeDatasetGroupRequest = {}));
var DescribeDatasetGroupResponse;
(function (DescribeDatasetGroupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDatasetGroupResponse");
    }
    DescribeDatasetGroupResponse.isa = isa;
})(DescribeDatasetGroupResponse = exports.DescribeDatasetGroupResponse || (exports.DescribeDatasetGroupResponse = {}));
var DescribeDatasetImportJobRequest;
(function (DescribeDatasetImportJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDatasetImportJobRequest");
    }
    DescribeDatasetImportJobRequest.isa = isa;
})(DescribeDatasetImportJobRequest = exports.DescribeDatasetImportJobRequest || (exports.DescribeDatasetImportJobRequest = {}));
var DescribeDatasetImportJobResponse;
(function (DescribeDatasetImportJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDatasetImportJobResponse");
    }
    DescribeDatasetImportJobResponse.isa = isa;
})(DescribeDatasetImportJobResponse = exports.DescribeDatasetImportJobResponse || (exports.DescribeDatasetImportJobResponse = {}));
var DescribeDatasetRequest;
(function (DescribeDatasetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDatasetRequest");
    }
    DescribeDatasetRequest.isa = isa;
})(DescribeDatasetRequest = exports.DescribeDatasetRequest || (exports.DescribeDatasetRequest = {}));
var DescribeDatasetResponse;
(function (DescribeDatasetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDatasetResponse");
    }
    DescribeDatasetResponse.isa = isa;
})(DescribeDatasetResponse = exports.DescribeDatasetResponse || (exports.DescribeDatasetResponse = {}));
var DescribeForecastExportJobRequest;
(function (DescribeForecastExportJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeForecastExportJobRequest");
    }
    DescribeForecastExportJobRequest.isa = isa;
})(DescribeForecastExportJobRequest = exports.DescribeForecastExportJobRequest || (exports.DescribeForecastExportJobRequest = {}));
var DescribeForecastExportJobResponse;
(function (DescribeForecastExportJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeForecastExportJobResponse");
    }
    DescribeForecastExportJobResponse.isa = isa;
})(DescribeForecastExportJobResponse = exports.DescribeForecastExportJobResponse || (exports.DescribeForecastExportJobResponse = {}));
var DescribeForecastRequest;
(function (DescribeForecastRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeForecastRequest");
    }
    DescribeForecastRequest.isa = isa;
})(DescribeForecastRequest = exports.DescribeForecastRequest || (exports.DescribeForecastRequest = {}));
var DescribeForecastResponse;
(function (DescribeForecastResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeForecastResponse");
    }
    DescribeForecastResponse.isa = isa;
})(DescribeForecastResponse = exports.DescribeForecastResponse || (exports.DescribeForecastResponse = {}));
var DescribePredictorRequest;
(function (DescribePredictorRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribePredictorRequest");
    }
    DescribePredictorRequest.isa = isa;
})(DescribePredictorRequest = exports.DescribePredictorRequest || (exports.DescribePredictorRequest = {}));
var DescribePredictorResponse;
(function (DescribePredictorResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribePredictorResponse");
    }
    DescribePredictorResponse.isa = isa;
})(DescribePredictorResponse = exports.DescribePredictorResponse || (exports.DescribePredictorResponse = {}));
var Domain;
(function (Domain) {
    Domain["CUSTOM"] = "CUSTOM";
    Domain["EC2_CAPACITY"] = "EC2_CAPACITY";
    Domain["INVENTORY_PLANNING"] = "INVENTORY_PLANNING";
    Domain["METRICS"] = "METRICS";
    Domain["RETAIL"] = "RETAIL";
    Domain["WEB_TRAFFIC"] = "WEB_TRAFFIC";
    Domain["WORK_FORCE"] = "WORK_FORCE";
})(Domain = exports.Domain || (exports.Domain = {}));
var EncryptionConfig;
(function (EncryptionConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "EncryptionConfig");
    }
    EncryptionConfig.isa = isa;
})(EncryptionConfig = exports.EncryptionConfig || (exports.EncryptionConfig = {}));
var EvaluationParameters;
(function (EvaluationParameters) {
    function isa(o) {
        return smithy_client_1.isa(o, "EvaluationParameters");
    }
    EvaluationParameters.isa = isa;
})(EvaluationParameters = exports.EvaluationParameters || (exports.EvaluationParameters = {}));
var EvaluationResult;
(function (EvaluationResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "EvaluationResult");
    }
    EvaluationResult.isa = isa;
})(EvaluationResult = exports.EvaluationResult || (exports.EvaluationResult = {}));
var EvaluationType;
(function (EvaluationType) {
    EvaluationType["COMPUTED"] = "COMPUTED";
    EvaluationType["SUMMARY"] = "SUMMARY";
})(EvaluationType = exports.EvaluationType || (exports.EvaluationType = {}));
var Featurization;
(function (Featurization) {
    function isa(o) {
        return smithy_client_1.isa(o, "Featurization");
    }
    Featurization.isa = isa;
})(Featurization = exports.Featurization || (exports.Featurization = {}));
var FeaturizationConfig;
(function (FeaturizationConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "FeaturizationConfig");
    }
    FeaturizationConfig.isa = isa;
})(FeaturizationConfig = exports.FeaturizationConfig || (exports.FeaturizationConfig = {}));
var FeaturizationMethod;
(function (FeaturizationMethod) {
    function isa(o) {
        return smithy_client_1.isa(o, "FeaturizationMethod");
    }
    FeaturizationMethod.isa = isa;
})(FeaturizationMethod = exports.FeaturizationMethod || (exports.FeaturizationMethod = {}));
var FeaturizationMethodName;
(function (FeaturizationMethodName) {
    FeaturizationMethodName["filling"] = "filling";
})(FeaturizationMethodName = exports.FeaturizationMethodName || (exports.FeaturizationMethodName = {}));
var Filter;
(function (Filter) {
    function isa(o) {
        return smithy_client_1.isa(o, "Filter");
    }
    Filter.isa = isa;
})(Filter = exports.Filter || (exports.Filter = {}));
var FilterConditionString;
(function (FilterConditionString) {
    FilterConditionString["IS"] = "IS";
    FilterConditionString["IS_NOT"] = "IS_NOT";
})(FilterConditionString = exports.FilterConditionString || (exports.FilterConditionString = {}));
var ForecastExportJobSummary;
(function (ForecastExportJobSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "ForecastExportJobSummary");
    }
    ForecastExportJobSummary.isa = isa;
})(ForecastExportJobSummary = exports.ForecastExportJobSummary || (exports.ForecastExportJobSummary = {}));
var ForecastSummary;
(function (ForecastSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "ForecastSummary");
    }
    ForecastSummary.isa = isa;
})(ForecastSummary = exports.ForecastSummary || (exports.ForecastSummary = {}));
var GetAccuracyMetricsRequest;
(function (GetAccuracyMetricsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAccuracyMetricsRequest");
    }
    GetAccuracyMetricsRequest.isa = isa;
})(GetAccuracyMetricsRequest = exports.GetAccuracyMetricsRequest || (exports.GetAccuracyMetricsRequest = {}));
var GetAccuracyMetricsResponse;
(function (GetAccuracyMetricsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAccuracyMetricsResponse");
    }
    GetAccuracyMetricsResponse.isa = isa;
})(GetAccuracyMetricsResponse = exports.GetAccuracyMetricsResponse || (exports.GetAccuracyMetricsResponse = {}));
var HyperParameterTuningJobConfig;
(function (HyperParameterTuningJobConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "HyperParameterTuningJobConfig");
    }
    HyperParameterTuningJobConfig.isa = isa;
})(HyperParameterTuningJobConfig = exports.HyperParameterTuningJobConfig || (exports.HyperParameterTuningJobConfig = {}));
var InputDataConfig;
(function (InputDataConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "InputDataConfig");
    }
    InputDataConfig.isa = isa;
})(InputDataConfig = exports.InputDataConfig || (exports.InputDataConfig = {}));
var IntegerParameterRange;
(function (IntegerParameterRange) {
    function isa(o) {
        return smithy_client_1.isa(o, "IntegerParameterRange");
    }
    IntegerParameterRange.isa = isa;
})(IntegerParameterRange = exports.IntegerParameterRange || (exports.IntegerParameterRange = {}));
var InvalidInputException;
(function (InvalidInputException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidInputException");
    }
    InvalidInputException.isa = isa;
})(InvalidInputException = exports.InvalidInputException || (exports.InvalidInputException = {}));
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
var ListDatasetGroupsRequest;
(function (ListDatasetGroupsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDatasetGroupsRequest");
    }
    ListDatasetGroupsRequest.isa = isa;
})(ListDatasetGroupsRequest = exports.ListDatasetGroupsRequest || (exports.ListDatasetGroupsRequest = {}));
var ListDatasetGroupsResponse;
(function (ListDatasetGroupsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDatasetGroupsResponse");
    }
    ListDatasetGroupsResponse.isa = isa;
})(ListDatasetGroupsResponse = exports.ListDatasetGroupsResponse || (exports.ListDatasetGroupsResponse = {}));
var ListDatasetImportJobsRequest;
(function (ListDatasetImportJobsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDatasetImportJobsRequest");
    }
    ListDatasetImportJobsRequest.isa = isa;
})(ListDatasetImportJobsRequest = exports.ListDatasetImportJobsRequest || (exports.ListDatasetImportJobsRequest = {}));
var ListDatasetImportJobsResponse;
(function (ListDatasetImportJobsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDatasetImportJobsResponse");
    }
    ListDatasetImportJobsResponse.isa = isa;
})(ListDatasetImportJobsResponse = exports.ListDatasetImportJobsResponse || (exports.ListDatasetImportJobsResponse = {}));
var ListDatasetsRequest;
(function (ListDatasetsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDatasetsRequest");
    }
    ListDatasetsRequest.isa = isa;
})(ListDatasetsRequest = exports.ListDatasetsRequest || (exports.ListDatasetsRequest = {}));
var ListDatasetsResponse;
(function (ListDatasetsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDatasetsResponse");
    }
    ListDatasetsResponse.isa = isa;
})(ListDatasetsResponse = exports.ListDatasetsResponse || (exports.ListDatasetsResponse = {}));
var ListForecastExportJobsRequest;
(function (ListForecastExportJobsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListForecastExportJobsRequest");
    }
    ListForecastExportJobsRequest.isa = isa;
})(ListForecastExportJobsRequest = exports.ListForecastExportJobsRequest || (exports.ListForecastExportJobsRequest = {}));
var ListForecastExportJobsResponse;
(function (ListForecastExportJobsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListForecastExportJobsResponse");
    }
    ListForecastExportJobsResponse.isa = isa;
})(ListForecastExportJobsResponse = exports.ListForecastExportJobsResponse || (exports.ListForecastExportJobsResponse = {}));
var ListForecastsRequest;
(function (ListForecastsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListForecastsRequest");
    }
    ListForecastsRequest.isa = isa;
})(ListForecastsRequest = exports.ListForecastsRequest || (exports.ListForecastsRequest = {}));
var ListForecastsResponse;
(function (ListForecastsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListForecastsResponse");
    }
    ListForecastsResponse.isa = isa;
})(ListForecastsResponse = exports.ListForecastsResponse || (exports.ListForecastsResponse = {}));
var ListPredictorsRequest;
(function (ListPredictorsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListPredictorsRequest");
    }
    ListPredictorsRequest.isa = isa;
})(ListPredictorsRequest = exports.ListPredictorsRequest || (exports.ListPredictorsRequest = {}));
var ListPredictorsResponse;
(function (ListPredictorsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListPredictorsResponse");
    }
    ListPredictorsResponse.isa = isa;
})(ListPredictorsResponse = exports.ListPredictorsResponse || (exports.ListPredictorsResponse = {}));
var Metrics;
(function (Metrics) {
    function isa(o) {
        return smithy_client_1.isa(o, "Metrics");
    }
    Metrics.isa = isa;
})(Metrics = exports.Metrics || (exports.Metrics = {}));
var ParameterRanges;
(function (ParameterRanges) {
    function isa(o) {
        return smithy_client_1.isa(o, "ParameterRanges");
    }
    ParameterRanges.isa = isa;
})(ParameterRanges = exports.ParameterRanges || (exports.ParameterRanges = {}));
var PredictorExecution;
(function (PredictorExecution) {
    function isa(o) {
        return smithy_client_1.isa(o, "PredictorExecution");
    }
    PredictorExecution.isa = isa;
})(PredictorExecution = exports.PredictorExecution || (exports.PredictorExecution = {}));
var PredictorExecutionDetails;
(function (PredictorExecutionDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "PredictorExecutionDetails");
    }
    PredictorExecutionDetails.isa = isa;
})(PredictorExecutionDetails = exports.PredictorExecutionDetails || (exports.PredictorExecutionDetails = {}));
var PredictorSummary;
(function (PredictorSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "PredictorSummary");
    }
    PredictorSummary.isa = isa;
})(PredictorSummary = exports.PredictorSummary || (exports.PredictorSummary = {}));
var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceAlreadyExistsException");
    }
    ResourceAlreadyExistsException.isa = isa;
})(ResourceAlreadyExistsException = exports.ResourceAlreadyExistsException || (exports.ResourceAlreadyExistsException = {}));
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
var S3Config;
(function (S3Config) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3Config");
    }
    S3Config.isa = isa;
})(S3Config = exports.S3Config || (exports.S3Config = {}));
var ScalingType;
(function (ScalingType) {
    ScalingType["Auto"] = "Auto";
    ScalingType["Linear"] = "Linear";
    ScalingType["Logarithmic"] = "Logarithmic";
    ScalingType["ReverseLogarithmic"] = "ReverseLogarithmic";
})(ScalingType = exports.ScalingType || (exports.ScalingType = {}));
var Schema;
(function (Schema) {
    function isa(o) {
        return smithy_client_1.isa(o, "Schema");
    }
    Schema.isa = isa;
})(Schema = exports.Schema || (exports.Schema = {}));
var SchemaAttribute;
(function (SchemaAttribute) {
    function isa(o) {
        return smithy_client_1.isa(o, "SchemaAttribute");
    }
    SchemaAttribute.isa = isa;
})(SchemaAttribute = exports.SchemaAttribute || (exports.SchemaAttribute = {}));
var Statistics;
(function (Statistics) {
    function isa(o) {
        return smithy_client_1.isa(o, "Statistics");
    }
    Statistics.isa = isa;
})(Statistics = exports.Statistics || (exports.Statistics = {}));
var SupplementaryFeature;
(function (SupplementaryFeature) {
    function isa(o) {
        return smithy_client_1.isa(o, "SupplementaryFeature");
    }
    SupplementaryFeature.isa = isa;
})(SupplementaryFeature = exports.SupplementaryFeature || (exports.SupplementaryFeature = {}));
var TestWindowSummary;
(function (TestWindowSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "TestWindowSummary");
    }
    TestWindowSummary.isa = isa;
})(TestWindowSummary = exports.TestWindowSummary || (exports.TestWindowSummary = {}));
var UpdateDatasetGroupRequest;
(function (UpdateDatasetGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDatasetGroupRequest");
    }
    UpdateDatasetGroupRequest.isa = isa;
})(UpdateDatasetGroupRequest = exports.UpdateDatasetGroupRequest || (exports.UpdateDatasetGroupRequest = {}));
var UpdateDatasetGroupResponse;
(function (UpdateDatasetGroupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDatasetGroupResponse");
    }
    UpdateDatasetGroupResponse.isa = isa;
})(UpdateDatasetGroupResponse = exports.UpdateDatasetGroupResponse || (exports.UpdateDatasetGroupResponse = {}));
var WeightedQuantileLoss;
(function (WeightedQuantileLoss) {
    function isa(o) {
        return smithy_client_1.isa(o, "WeightedQuantileLoss");
    }
    WeightedQuantileLoss.isa = isa;
})(WeightedQuantileLoss = exports.WeightedQuantileLoss || (exports.WeightedQuantileLoss = {}));
var WindowSummary;
(function (WindowSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "WindowSummary");
    }
    WindowSummary.isa = isa;
})(WindowSummary = exports.WindowSummary || (exports.WindowSummary = {}));
//# sourceMappingURL=index.js.map