"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AssociateKmsKeyRequest;
(function (AssociateKmsKeyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateKmsKeyRequest");
    }
    AssociateKmsKeyRequest.isa = isa;
})(AssociateKmsKeyRequest = exports.AssociateKmsKeyRequest || (exports.AssociateKmsKeyRequest = {}));
var CancelExportTaskRequest;
(function (CancelExportTaskRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CancelExportTaskRequest");
    }
    CancelExportTaskRequest.isa = isa;
})(CancelExportTaskRequest = exports.CancelExportTaskRequest || (exports.CancelExportTaskRequest = {}));
var CreateExportTaskRequest;
(function (CreateExportTaskRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateExportTaskRequest");
    }
    CreateExportTaskRequest.isa = isa;
})(CreateExportTaskRequest = exports.CreateExportTaskRequest || (exports.CreateExportTaskRequest = {}));
var CreateExportTaskResponse;
(function (CreateExportTaskResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateExportTaskResponse");
    }
    CreateExportTaskResponse.isa = isa;
})(CreateExportTaskResponse = exports.CreateExportTaskResponse || (exports.CreateExportTaskResponse = {}));
var CreateLogGroupRequest;
(function (CreateLogGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateLogGroupRequest");
    }
    CreateLogGroupRequest.isa = isa;
})(CreateLogGroupRequest = exports.CreateLogGroupRequest || (exports.CreateLogGroupRequest = {}));
var CreateLogStreamRequest;
(function (CreateLogStreamRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateLogStreamRequest");
    }
    CreateLogStreamRequest.isa = isa;
})(CreateLogStreamRequest = exports.CreateLogStreamRequest || (exports.CreateLogStreamRequest = {}));
var DataAlreadyAcceptedException;
(function (DataAlreadyAcceptedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DataAlreadyAcceptedException");
    }
    DataAlreadyAcceptedException.isa = isa;
})(DataAlreadyAcceptedException = exports.DataAlreadyAcceptedException || (exports.DataAlreadyAcceptedException = {}));
var DeleteDestinationRequest;
(function (DeleteDestinationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDestinationRequest");
    }
    DeleteDestinationRequest.isa = isa;
})(DeleteDestinationRequest = exports.DeleteDestinationRequest || (exports.DeleteDestinationRequest = {}));
var DeleteLogGroupRequest;
(function (DeleteLogGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteLogGroupRequest");
    }
    DeleteLogGroupRequest.isa = isa;
})(DeleteLogGroupRequest = exports.DeleteLogGroupRequest || (exports.DeleteLogGroupRequest = {}));
var DeleteLogStreamRequest;
(function (DeleteLogStreamRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteLogStreamRequest");
    }
    DeleteLogStreamRequest.isa = isa;
})(DeleteLogStreamRequest = exports.DeleteLogStreamRequest || (exports.DeleteLogStreamRequest = {}));
var DeleteMetricFilterRequest;
(function (DeleteMetricFilterRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteMetricFilterRequest");
    }
    DeleteMetricFilterRequest.isa = isa;
})(DeleteMetricFilterRequest = exports.DeleteMetricFilterRequest || (exports.DeleteMetricFilterRequest = {}));
var DeleteResourcePolicyRequest;
(function (DeleteResourcePolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteResourcePolicyRequest");
    }
    DeleteResourcePolicyRequest.isa = isa;
})(DeleteResourcePolicyRequest = exports.DeleteResourcePolicyRequest || (exports.DeleteResourcePolicyRequest = {}));
var DeleteRetentionPolicyRequest;
(function (DeleteRetentionPolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRetentionPolicyRequest");
    }
    DeleteRetentionPolicyRequest.isa = isa;
})(DeleteRetentionPolicyRequest = exports.DeleteRetentionPolicyRequest || (exports.DeleteRetentionPolicyRequest = {}));
var DeleteSubscriptionFilterRequest;
(function (DeleteSubscriptionFilterRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteSubscriptionFilterRequest");
    }
    DeleteSubscriptionFilterRequest.isa = isa;
})(DeleteSubscriptionFilterRequest = exports.DeleteSubscriptionFilterRequest || (exports.DeleteSubscriptionFilterRequest = {}));
var DescribeDestinationsRequest;
(function (DescribeDestinationsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDestinationsRequest");
    }
    DescribeDestinationsRequest.isa = isa;
})(DescribeDestinationsRequest = exports.DescribeDestinationsRequest || (exports.DescribeDestinationsRequest = {}));
var DescribeDestinationsResponse;
(function (DescribeDestinationsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDestinationsResponse");
    }
    DescribeDestinationsResponse.isa = isa;
})(DescribeDestinationsResponse = exports.DescribeDestinationsResponse || (exports.DescribeDestinationsResponse = {}));
var DescribeExportTasksRequest;
(function (DescribeExportTasksRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeExportTasksRequest");
    }
    DescribeExportTasksRequest.isa = isa;
})(DescribeExportTasksRequest = exports.DescribeExportTasksRequest || (exports.DescribeExportTasksRequest = {}));
var DescribeExportTasksResponse;
(function (DescribeExportTasksResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeExportTasksResponse");
    }
    DescribeExportTasksResponse.isa = isa;
})(DescribeExportTasksResponse = exports.DescribeExportTasksResponse || (exports.DescribeExportTasksResponse = {}));
var DescribeLogGroupsRequest;
(function (DescribeLogGroupsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeLogGroupsRequest");
    }
    DescribeLogGroupsRequest.isa = isa;
})(DescribeLogGroupsRequest = exports.DescribeLogGroupsRequest || (exports.DescribeLogGroupsRequest = {}));
var DescribeLogGroupsResponse;
(function (DescribeLogGroupsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeLogGroupsResponse");
    }
    DescribeLogGroupsResponse.isa = isa;
})(DescribeLogGroupsResponse = exports.DescribeLogGroupsResponse || (exports.DescribeLogGroupsResponse = {}));
var DescribeLogStreamsRequest;
(function (DescribeLogStreamsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeLogStreamsRequest");
    }
    DescribeLogStreamsRequest.isa = isa;
})(DescribeLogStreamsRequest = exports.DescribeLogStreamsRequest || (exports.DescribeLogStreamsRequest = {}));
var DescribeLogStreamsResponse;
(function (DescribeLogStreamsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeLogStreamsResponse");
    }
    DescribeLogStreamsResponse.isa = isa;
})(DescribeLogStreamsResponse = exports.DescribeLogStreamsResponse || (exports.DescribeLogStreamsResponse = {}));
var DescribeMetricFiltersRequest;
(function (DescribeMetricFiltersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeMetricFiltersRequest");
    }
    DescribeMetricFiltersRequest.isa = isa;
})(DescribeMetricFiltersRequest = exports.DescribeMetricFiltersRequest || (exports.DescribeMetricFiltersRequest = {}));
var DescribeMetricFiltersResponse;
(function (DescribeMetricFiltersResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeMetricFiltersResponse");
    }
    DescribeMetricFiltersResponse.isa = isa;
})(DescribeMetricFiltersResponse = exports.DescribeMetricFiltersResponse || (exports.DescribeMetricFiltersResponse = {}));
var DescribeQueriesRequest;
(function (DescribeQueriesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeQueriesRequest");
    }
    DescribeQueriesRequest.isa = isa;
})(DescribeQueriesRequest = exports.DescribeQueriesRequest || (exports.DescribeQueriesRequest = {}));
var DescribeQueriesResponse;
(function (DescribeQueriesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeQueriesResponse");
    }
    DescribeQueriesResponse.isa = isa;
})(DescribeQueriesResponse = exports.DescribeQueriesResponse || (exports.DescribeQueriesResponse = {}));
var DescribeResourcePoliciesRequest;
(function (DescribeResourcePoliciesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeResourcePoliciesRequest");
    }
    DescribeResourcePoliciesRequest.isa = isa;
})(DescribeResourcePoliciesRequest = exports.DescribeResourcePoliciesRequest || (exports.DescribeResourcePoliciesRequest = {}));
var DescribeResourcePoliciesResponse;
(function (DescribeResourcePoliciesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeResourcePoliciesResponse");
    }
    DescribeResourcePoliciesResponse.isa = isa;
})(DescribeResourcePoliciesResponse = exports.DescribeResourcePoliciesResponse || (exports.DescribeResourcePoliciesResponse = {}));
var DescribeSubscriptionFiltersRequest;
(function (DescribeSubscriptionFiltersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeSubscriptionFiltersRequest");
    }
    DescribeSubscriptionFiltersRequest.isa = isa;
})(DescribeSubscriptionFiltersRequest = exports.DescribeSubscriptionFiltersRequest || (exports.DescribeSubscriptionFiltersRequest = {}));
var DescribeSubscriptionFiltersResponse;
(function (DescribeSubscriptionFiltersResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeSubscriptionFiltersResponse");
    }
    DescribeSubscriptionFiltersResponse.isa = isa;
})(DescribeSubscriptionFiltersResponse = exports.DescribeSubscriptionFiltersResponse || (exports.DescribeSubscriptionFiltersResponse = {}));
var Destination;
(function (Destination) {
    function isa(o) {
        return smithy_client_1.isa(o, "Destination");
    }
    Destination.isa = isa;
})(Destination = exports.Destination || (exports.Destination = {}));
var DisassociateKmsKeyRequest;
(function (DisassociateKmsKeyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateKmsKeyRequest");
    }
    DisassociateKmsKeyRequest.isa = isa;
})(DisassociateKmsKeyRequest = exports.DisassociateKmsKeyRequest || (exports.DisassociateKmsKeyRequest = {}));
var Distribution;
(function (Distribution) {
    Distribution["ByLogStream"] = "ByLogStream";
    Distribution["Random"] = "Random";
})(Distribution = exports.Distribution || (exports.Distribution = {}));
var ExportTask;
(function (ExportTask) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExportTask");
    }
    ExportTask.isa = isa;
})(ExportTask = exports.ExportTask || (exports.ExportTask = {}));
var ExportTaskExecutionInfo;
(function (ExportTaskExecutionInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExportTaskExecutionInfo");
    }
    ExportTaskExecutionInfo.isa = isa;
})(ExportTaskExecutionInfo = exports.ExportTaskExecutionInfo || (exports.ExportTaskExecutionInfo = {}));
var ExportTaskStatus;
(function (ExportTaskStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExportTaskStatus");
    }
    ExportTaskStatus.isa = isa;
})(ExportTaskStatus = exports.ExportTaskStatus || (exports.ExportTaskStatus = {}));
var ExportTaskStatusCode;
(function (ExportTaskStatusCode) {
    ExportTaskStatusCode["CANCELLED"] = "CANCELLED";
    ExportTaskStatusCode["COMPLETED"] = "COMPLETED";
    ExportTaskStatusCode["FAILED"] = "FAILED";
    ExportTaskStatusCode["PENDING"] = "PENDING";
    ExportTaskStatusCode["PENDING_CANCEL"] = "PENDING_CANCEL";
    ExportTaskStatusCode["RUNNING"] = "RUNNING";
})(ExportTaskStatusCode = exports.ExportTaskStatusCode || (exports.ExportTaskStatusCode = {}));
var FilterLogEventsRequest;
(function (FilterLogEventsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "FilterLogEventsRequest");
    }
    FilterLogEventsRequest.isa = isa;
})(FilterLogEventsRequest = exports.FilterLogEventsRequest || (exports.FilterLogEventsRequest = {}));
var FilterLogEventsResponse;
(function (FilterLogEventsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "FilterLogEventsResponse");
    }
    FilterLogEventsResponse.isa = isa;
})(FilterLogEventsResponse = exports.FilterLogEventsResponse || (exports.FilterLogEventsResponse = {}));
var FilteredLogEvent;
(function (FilteredLogEvent) {
    function isa(o) {
        return smithy_client_1.isa(o, "FilteredLogEvent");
    }
    FilteredLogEvent.isa = isa;
})(FilteredLogEvent = exports.FilteredLogEvent || (exports.FilteredLogEvent = {}));
var GetLogEventsRequest;
(function (GetLogEventsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetLogEventsRequest");
    }
    GetLogEventsRequest.isa = isa;
})(GetLogEventsRequest = exports.GetLogEventsRequest || (exports.GetLogEventsRequest = {}));
var GetLogEventsResponse;
(function (GetLogEventsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetLogEventsResponse");
    }
    GetLogEventsResponse.isa = isa;
})(GetLogEventsResponse = exports.GetLogEventsResponse || (exports.GetLogEventsResponse = {}));
var GetLogGroupFieldsRequest;
(function (GetLogGroupFieldsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetLogGroupFieldsRequest");
    }
    GetLogGroupFieldsRequest.isa = isa;
})(GetLogGroupFieldsRequest = exports.GetLogGroupFieldsRequest || (exports.GetLogGroupFieldsRequest = {}));
var GetLogGroupFieldsResponse;
(function (GetLogGroupFieldsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetLogGroupFieldsResponse");
    }
    GetLogGroupFieldsResponse.isa = isa;
})(GetLogGroupFieldsResponse = exports.GetLogGroupFieldsResponse || (exports.GetLogGroupFieldsResponse = {}));
var GetLogRecordRequest;
(function (GetLogRecordRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetLogRecordRequest");
    }
    GetLogRecordRequest.isa = isa;
})(GetLogRecordRequest = exports.GetLogRecordRequest || (exports.GetLogRecordRequest = {}));
var GetLogRecordResponse;
(function (GetLogRecordResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetLogRecordResponse");
    }
    GetLogRecordResponse.isa = isa;
})(GetLogRecordResponse = exports.GetLogRecordResponse || (exports.GetLogRecordResponse = {}));
var GetQueryResultsRequest;
(function (GetQueryResultsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetQueryResultsRequest");
    }
    GetQueryResultsRequest.isa = isa;
})(GetQueryResultsRequest = exports.GetQueryResultsRequest || (exports.GetQueryResultsRequest = {}));
var GetQueryResultsResponse;
(function (GetQueryResultsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetQueryResultsResponse");
    }
    GetQueryResultsResponse.isa = isa;
})(GetQueryResultsResponse = exports.GetQueryResultsResponse || (exports.GetQueryResultsResponse = {}));
var InputLogEvent;
(function (InputLogEvent) {
    function isa(o) {
        return smithy_client_1.isa(o, "InputLogEvent");
    }
    InputLogEvent.isa = isa;
})(InputLogEvent = exports.InputLogEvent || (exports.InputLogEvent = {}));
var InvalidOperationException;
(function (InvalidOperationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidOperationException");
    }
    InvalidOperationException.isa = isa;
})(InvalidOperationException = exports.InvalidOperationException || (exports.InvalidOperationException = {}));
var InvalidParameterException;
(function (InvalidParameterException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidParameterException");
    }
    InvalidParameterException.isa = isa;
})(InvalidParameterException = exports.InvalidParameterException || (exports.InvalidParameterException = {}));
var InvalidSequenceTokenException;
(function (InvalidSequenceTokenException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidSequenceTokenException");
    }
    InvalidSequenceTokenException.isa = isa;
})(InvalidSequenceTokenException = exports.InvalidSequenceTokenException || (exports.InvalidSequenceTokenException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ListTagsLogGroupRequest;
(function (ListTagsLogGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsLogGroupRequest");
    }
    ListTagsLogGroupRequest.isa = isa;
})(ListTagsLogGroupRequest = exports.ListTagsLogGroupRequest || (exports.ListTagsLogGroupRequest = {}));
var ListTagsLogGroupResponse;
(function (ListTagsLogGroupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsLogGroupResponse");
    }
    ListTagsLogGroupResponse.isa = isa;
})(ListTagsLogGroupResponse = exports.ListTagsLogGroupResponse || (exports.ListTagsLogGroupResponse = {}));
var LogGroup;
(function (LogGroup) {
    function isa(o) {
        return smithy_client_1.isa(o, "LogGroup");
    }
    LogGroup.isa = isa;
})(LogGroup = exports.LogGroup || (exports.LogGroup = {}));
var LogGroupField;
(function (LogGroupField) {
    function isa(o) {
        return smithy_client_1.isa(o, "LogGroupField");
    }
    LogGroupField.isa = isa;
})(LogGroupField = exports.LogGroupField || (exports.LogGroupField = {}));
var LogStream;
(function (LogStream) {
    function isa(o) {
        return smithy_client_1.isa(o, "LogStream");
    }
    LogStream.isa = isa;
})(LogStream = exports.LogStream || (exports.LogStream = {}));
var MalformedQueryException;
(function (MalformedQueryException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MalformedQueryException");
    }
    MalformedQueryException.isa = isa;
})(MalformedQueryException = exports.MalformedQueryException || (exports.MalformedQueryException = {}));
var MetricFilter;
(function (MetricFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "MetricFilter");
    }
    MetricFilter.isa = isa;
})(MetricFilter = exports.MetricFilter || (exports.MetricFilter = {}));
var MetricFilterMatchRecord;
(function (MetricFilterMatchRecord) {
    function isa(o) {
        return smithy_client_1.isa(o, "MetricFilterMatchRecord");
    }
    MetricFilterMatchRecord.isa = isa;
})(MetricFilterMatchRecord = exports.MetricFilterMatchRecord || (exports.MetricFilterMatchRecord = {}));
var MetricTransformation;
(function (MetricTransformation) {
    function isa(o) {
        return smithy_client_1.isa(o, "MetricTransformation");
    }
    MetricTransformation.isa = isa;
})(MetricTransformation = exports.MetricTransformation || (exports.MetricTransformation = {}));
var OperationAbortedException;
(function (OperationAbortedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "OperationAbortedException");
    }
    OperationAbortedException.isa = isa;
})(OperationAbortedException = exports.OperationAbortedException || (exports.OperationAbortedException = {}));
var OrderBy;
(function (OrderBy) {
    OrderBy["LastEventTime"] = "LastEventTime";
    OrderBy["LogStreamName"] = "LogStreamName";
})(OrderBy = exports.OrderBy || (exports.OrderBy = {}));
var OutputLogEvent;
(function (OutputLogEvent) {
    function isa(o) {
        return smithy_client_1.isa(o, "OutputLogEvent");
    }
    OutputLogEvent.isa = isa;
})(OutputLogEvent = exports.OutputLogEvent || (exports.OutputLogEvent = {}));
var PutDestinationPolicyRequest;
(function (PutDestinationPolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutDestinationPolicyRequest");
    }
    PutDestinationPolicyRequest.isa = isa;
})(PutDestinationPolicyRequest = exports.PutDestinationPolicyRequest || (exports.PutDestinationPolicyRequest = {}));
var PutDestinationRequest;
(function (PutDestinationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutDestinationRequest");
    }
    PutDestinationRequest.isa = isa;
})(PutDestinationRequest = exports.PutDestinationRequest || (exports.PutDestinationRequest = {}));
var PutDestinationResponse;
(function (PutDestinationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutDestinationResponse");
    }
    PutDestinationResponse.isa = isa;
})(PutDestinationResponse = exports.PutDestinationResponse || (exports.PutDestinationResponse = {}));
var PutLogEventsRequest;
(function (PutLogEventsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutLogEventsRequest");
    }
    PutLogEventsRequest.isa = isa;
})(PutLogEventsRequest = exports.PutLogEventsRequest || (exports.PutLogEventsRequest = {}));
var PutLogEventsResponse;
(function (PutLogEventsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutLogEventsResponse");
    }
    PutLogEventsResponse.isa = isa;
})(PutLogEventsResponse = exports.PutLogEventsResponse || (exports.PutLogEventsResponse = {}));
var PutMetricFilterRequest;
(function (PutMetricFilterRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutMetricFilterRequest");
    }
    PutMetricFilterRequest.isa = isa;
})(PutMetricFilterRequest = exports.PutMetricFilterRequest || (exports.PutMetricFilterRequest = {}));
var PutResourcePolicyRequest;
(function (PutResourcePolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutResourcePolicyRequest");
    }
    PutResourcePolicyRequest.isa = isa;
})(PutResourcePolicyRequest = exports.PutResourcePolicyRequest || (exports.PutResourcePolicyRequest = {}));
var PutResourcePolicyResponse;
(function (PutResourcePolicyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutResourcePolicyResponse");
    }
    PutResourcePolicyResponse.isa = isa;
})(PutResourcePolicyResponse = exports.PutResourcePolicyResponse || (exports.PutResourcePolicyResponse = {}));
var PutRetentionPolicyRequest;
(function (PutRetentionPolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutRetentionPolicyRequest");
    }
    PutRetentionPolicyRequest.isa = isa;
})(PutRetentionPolicyRequest = exports.PutRetentionPolicyRequest || (exports.PutRetentionPolicyRequest = {}));
var PutSubscriptionFilterRequest;
(function (PutSubscriptionFilterRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutSubscriptionFilterRequest");
    }
    PutSubscriptionFilterRequest.isa = isa;
})(PutSubscriptionFilterRequest = exports.PutSubscriptionFilterRequest || (exports.PutSubscriptionFilterRequest = {}));
var QueryCompileError;
(function (QueryCompileError) {
    function isa(o) {
        return smithy_client_1.isa(o, "QueryCompileError");
    }
    QueryCompileError.isa = isa;
})(QueryCompileError = exports.QueryCompileError || (exports.QueryCompileError = {}));
var QueryCompileErrorLocation;
(function (QueryCompileErrorLocation) {
    function isa(o) {
        return smithy_client_1.isa(o, "QueryCompileErrorLocation");
    }
    QueryCompileErrorLocation.isa = isa;
})(QueryCompileErrorLocation = exports.QueryCompileErrorLocation || (exports.QueryCompileErrorLocation = {}));
var QueryInfo;
(function (QueryInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "QueryInfo");
    }
    QueryInfo.isa = isa;
})(QueryInfo = exports.QueryInfo || (exports.QueryInfo = {}));
var QueryStatistics;
(function (QueryStatistics) {
    function isa(o) {
        return smithy_client_1.isa(o, "QueryStatistics");
    }
    QueryStatistics.isa = isa;
})(QueryStatistics = exports.QueryStatistics || (exports.QueryStatistics = {}));
var QueryStatus;
(function (QueryStatus) {
    QueryStatus["Cancelled"] = "Cancelled";
    QueryStatus["Complete"] = "Complete";
    QueryStatus["Failed"] = "Failed";
    QueryStatus["Running"] = "Running";
    QueryStatus["Scheduled"] = "Scheduled";
})(QueryStatus = exports.QueryStatus || (exports.QueryStatus = {}));
var RejectedLogEventsInfo;
(function (RejectedLogEventsInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "RejectedLogEventsInfo");
    }
    RejectedLogEventsInfo.isa = isa;
})(RejectedLogEventsInfo = exports.RejectedLogEventsInfo || (exports.RejectedLogEventsInfo = {}));
var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceAlreadyExistsException");
    }
    ResourceAlreadyExistsException.isa = isa;
})(ResourceAlreadyExistsException = exports.ResourceAlreadyExistsException || (exports.ResourceAlreadyExistsException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNotFoundException");
    }
    ResourceNotFoundException.isa = isa;
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ResourcePolicy;
(function (ResourcePolicy) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourcePolicy");
    }
    ResourcePolicy.isa = isa;
})(ResourcePolicy = exports.ResourcePolicy || (exports.ResourcePolicy = {}));
var ResultField;
(function (ResultField) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResultField");
    }
    ResultField.isa = isa;
})(ResultField = exports.ResultField || (exports.ResultField = {}));
var SearchedLogStream;
(function (SearchedLogStream) {
    function isa(o) {
        return smithy_client_1.isa(o, "SearchedLogStream");
    }
    SearchedLogStream.isa = isa;
})(SearchedLogStream = exports.SearchedLogStream || (exports.SearchedLogStream = {}));
var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceUnavailableException");
    }
    ServiceUnavailableException.isa = isa;
})(ServiceUnavailableException = exports.ServiceUnavailableException || (exports.ServiceUnavailableException = {}));
var StartQueryRequest;
(function (StartQueryRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartQueryRequest");
    }
    StartQueryRequest.isa = isa;
})(StartQueryRequest = exports.StartQueryRequest || (exports.StartQueryRequest = {}));
var StartQueryResponse;
(function (StartQueryResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartQueryResponse");
    }
    StartQueryResponse.isa = isa;
})(StartQueryResponse = exports.StartQueryResponse || (exports.StartQueryResponse = {}));
var StopQueryRequest;
(function (StopQueryRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopQueryRequest");
    }
    StopQueryRequest.isa = isa;
})(StopQueryRequest = exports.StopQueryRequest || (exports.StopQueryRequest = {}));
var StopQueryResponse;
(function (StopQueryResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopQueryResponse");
    }
    StopQueryResponse.isa = isa;
})(StopQueryResponse = exports.StopQueryResponse || (exports.StopQueryResponse = {}));
var SubscriptionFilter;
(function (SubscriptionFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "SubscriptionFilter");
    }
    SubscriptionFilter.isa = isa;
})(SubscriptionFilter = exports.SubscriptionFilter || (exports.SubscriptionFilter = {}));
var TagLogGroupRequest;
(function (TagLogGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagLogGroupRequest");
    }
    TagLogGroupRequest.isa = isa;
})(TagLogGroupRequest = exports.TagLogGroupRequest || (exports.TagLogGroupRequest = {}));
var TestMetricFilterRequest;
(function (TestMetricFilterRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "TestMetricFilterRequest");
    }
    TestMetricFilterRequest.isa = isa;
})(TestMetricFilterRequest = exports.TestMetricFilterRequest || (exports.TestMetricFilterRequest = {}));
var TestMetricFilterResponse;
(function (TestMetricFilterResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "TestMetricFilterResponse");
    }
    TestMetricFilterResponse.isa = isa;
})(TestMetricFilterResponse = exports.TestMetricFilterResponse || (exports.TestMetricFilterResponse = {}));
var UnrecognizedClientException;
(function (UnrecognizedClientException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnrecognizedClientException");
    }
    UnrecognizedClientException.isa = isa;
})(UnrecognizedClientException = exports.UnrecognizedClientException || (exports.UnrecognizedClientException = {}));
var UntagLogGroupRequest;
(function (UntagLogGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagLogGroupRequest");
    }
    UntagLogGroupRequest.isa = isa;
})(UntagLogGroupRequest = exports.UntagLogGroupRequest || (exports.UntagLogGroupRequest = {}));
//# sourceMappingURL=index.js.map