"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var BatchGetNamedQueryInput;
(function (BatchGetNamedQueryInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetNamedQueryInput");
    }
    BatchGetNamedQueryInput.isa = isa;
})(BatchGetNamedQueryInput = exports.BatchGetNamedQueryInput || (exports.BatchGetNamedQueryInput = {}));
var BatchGetNamedQueryOutput;
(function (BatchGetNamedQueryOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetNamedQueryOutput");
    }
    BatchGetNamedQueryOutput.isa = isa;
})(BatchGetNamedQueryOutput = exports.BatchGetNamedQueryOutput || (exports.BatchGetNamedQueryOutput = {}));
var BatchGetQueryExecutionInput;
(function (BatchGetQueryExecutionInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetQueryExecutionInput");
    }
    BatchGetQueryExecutionInput.isa = isa;
})(BatchGetQueryExecutionInput = exports.BatchGetQueryExecutionInput || (exports.BatchGetQueryExecutionInput = {}));
var BatchGetQueryExecutionOutput;
(function (BatchGetQueryExecutionOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetQueryExecutionOutput");
    }
    BatchGetQueryExecutionOutput.isa = isa;
})(BatchGetQueryExecutionOutput = exports.BatchGetQueryExecutionOutput || (exports.BatchGetQueryExecutionOutput = {}));
var ColumnInfo;
(function (ColumnInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "ColumnInfo");
    }
    ColumnInfo.isa = isa;
})(ColumnInfo = exports.ColumnInfo || (exports.ColumnInfo = {}));
var ColumnNullable;
(function (ColumnNullable) {
    ColumnNullable["NOT_NULL"] = "NOT_NULL";
    ColumnNullable["NULLABLE"] = "NULLABLE";
    ColumnNullable["UNKNOWN"] = "UNKNOWN";
})(ColumnNullable = exports.ColumnNullable || (exports.ColumnNullable = {}));
var CreateNamedQueryInput;
(function (CreateNamedQueryInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateNamedQueryInput");
    }
    CreateNamedQueryInput.isa = isa;
})(CreateNamedQueryInput = exports.CreateNamedQueryInput || (exports.CreateNamedQueryInput = {}));
var CreateNamedQueryOutput;
(function (CreateNamedQueryOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateNamedQueryOutput");
    }
    CreateNamedQueryOutput.isa = isa;
})(CreateNamedQueryOutput = exports.CreateNamedQueryOutput || (exports.CreateNamedQueryOutput = {}));
var CreateWorkGroupInput;
(function (CreateWorkGroupInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateWorkGroupInput");
    }
    CreateWorkGroupInput.isa = isa;
})(CreateWorkGroupInput = exports.CreateWorkGroupInput || (exports.CreateWorkGroupInput = {}));
var CreateWorkGroupOutput;
(function (CreateWorkGroupOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateWorkGroupOutput");
    }
    CreateWorkGroupOutput.isa = isa;
})(CreateWorkGroupOutput = exports.CreateWorkGroupOutput || (exports.CreateWorkGroupOutput = {}));
var Datum;
(function (Datum) {
    function isa(o) {
        return smithy_client_1.isa(o, "Datum");
    }
    Datum.isa = isa;
})(Datum = exports.Datum || (exports.Datum = {}));
var DeleteNamedQueryInput;
(function (DeleteNamedQueryInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteNamedQueryInput");
    }
    DeleteNamedQueryInput.isa = isa;
})(DeleteNamedQueryInput = exports.DeleteNamedQueryInput || (exports.DeleteNamedQueryInput = {}));
var DeleteNamedQueryOutput;
(function (DeleteNamedQueryOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteNamedQueryOutput");
    }
    DeleteNamedQueryOutput.isa = isa;
})(DeleteNamedQueryOutput = exports.DeleteNamedQueryOutput || (exports.DeleteNamedQueryOutput = {}));
var DeleteWorkGroupInput;
(function (DeleteWorkGroupInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteWorkGroupInput");
    }
    DeleteWorkGroupInput.isa = isa;
})(DeleteWorkGroupInput = exports.DeleteWorkGroupInput || (exports.DeleteWorkGroupInput = {}));
var DeleteWorkGroupOutput;
(function (DeleteWorkGroupOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteWorkGroupOutput");
    }
    DeleteWorkGroupOutput.isa = isa;
})(DeleteWorkGroupOutput = exports.DeleteWorkGroupOutput || (exports.DeleteWorkGroupOutput = {}));
var EncryptionConfiguration;
(function (EncryptionConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "EncryptionConfiguration");
    }
    EncryptionConfiguration.isa = isa;
})(EncryptionConfiguration = exports.EncryptionConfiguration || (exports.EncryptionConfiguration = {}));
var EncryptionOption;
(function (EncryptionOption) {
    EncryptionOption["CSE_KMS"] = "CSE_KMS";
    EncryptionOption["SSE_KMS"] = "SSE_KMS";
    EncryptionOption["SSE_S3"] = "SSE_S3";
})(EncryptionOption = exports.EncryptionOption || (exports.EncryptionOption = {}));
var GetNamedQueryInput;
(function (GetNamedQueryInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetNamedQueryInput");
    }
    GetNamedQueryInput.isa = isa;
})(GetNamedQueryInput = exports.GetNamedQueryInput || (exports.GetNamedQueryInput = {}));
var GetNamedQueryOutput;
(function (GetNamedQueryOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetNamedQueryOutput");
    }
    GetNamedQueryOutput.isa = isa;
})(GetNamedQueryOutput = exports.GetNamedQueryOutput || (exports.GetNamedQueryOutput = {}));
var GetQueryExecutionInput;
(function (GetQueryExecutionInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetQueryExecutionInput");
    }
    GetQueryExecutionInput.isa = isa;
})(GetQueryExecutionInput = exports.GetQueryExecutionInput || (exports.GetQueryExecutionInput = {}));
var GetQueryExecutionOutput;
(function (GetQueryExecutionOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetQueryExecutionOutput");
    }
    GetQueryExecutionOutput.isa = isa;
})(GetQueryExecutionOutput = exports.GetQueryExecutionOutput || (exports.GetQueryExecutionOutput = {}));
var GetQueryResultsInput;
(function (GetQueryResultsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetQueryResultsInput");
    }
    GetQueryResultsInput.isa = isa;
})(GetQueryResultsInput = exports.GetQueryResultsInput || (exports.GetQueryResultsInput = {}));
var GetQueryResultsOutput;
(function (GetQueryResultsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetQueryResultsOutput");
    }
    GetQueryResultsOutput.isa = isa;
})(GetQueryResultsOutput = exports.GetQueryResultsOutput || (exports.GetQueryResultsOutput = {}));
var GetWorkGroupInput;
(function (GetWorkGroupInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetWorkGroupInput");
    }
    GetWorkGroupInput.isa = isa;
})(GetWorkGroupInput = exports.GetWorkGroupInput || (exports.GetWorkGroupInput = {}));
var GetWorkGroupOutput;
(function (GetWorkGroupOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetWorkGroupOutput");
    }
    GetWorkGroupOutput.isa = isa;
})(GetWorkGroupOutput = exports.GetWorkGroupOutput || (exports.GetWorkGroupOutput = {}));
var InternalServerException;
(function (InternalServerException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalServerException");
    }
    InternalServerException.isa = isa;
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var InvalidRequestException;
(function (InvalidRequestException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidRequestException");
    }
    InvalidRequestException.isa = isa;
})(InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {}));
var ListNamedQueriesInput;
(function (ListNamedQueriesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListNamedQueriesInput");
    }
    ListNamedQueriesInput.isa = isa;
})(ListNamedQueriesInput = exports.ListNamedQueriesInput || (exports.ListNamedQueriesInput = {}));
var ListNamedQueriesOutput;
(function (ListNamedQueriesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListNamedQueriesOutput");
    }
    ListNamedQueriesOutput.isa = isa;
})(ListNamedQueriesOutput = exports.ListNamedQueriesOutput || (exports.ListNamedQueriesOutput = {}));
var ListQueryExecutionsInput;
(function (ListQueryExecutionsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListQueryExecutionsInput");
    }
    ListQueryExecutionsInput.isa = isa;
})(ListQueryExecutionsInput = exports.ListQueryExecutionsInput || (exports.ListQueryExecutionsInput = {}));
var ListQueryExecutionsOutput;
(function (ListQueryExecutionsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListQueryExecutionsOutput");
    }
    ListQueryExecutionsOutput.isa = isa;
})(ListQueryExecutionsOutput = exports.ListQueryExecutionsOutput || (exports.ListQueryExecutionsOutput = {}));
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
var ListWorkGroupsInput;
(function (ListWorkGroupsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListWorkGroupsInput");
    }
    ListWorkGroupsInput.isa = isa;
})(ListWorkGroupsInput = exports.ListWorkGroupsInput || (exports.ListWorkGroupsInput = {}));
var ListWorkGroupsOutput;
(function (ListWorkGroupsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListWorkGroupsOutput");
    }
    ListWorkGroupsOutput.isa = isa;
})(ListWorkGroupsOutput = exports.ListWorkGroupsOutput || (exports.ListWorkGroupsOutput = {}));
var NamedQuery;
(function (NamedQuery) {
    function isa(o) {
        return smithy_client_1.isa(o, "NamedQuery");
    }
    NamedQuery.isa = isa;
})(NamedQuery = exports.NamedQuery || (exports.NamedQuery = {}));
var QueryExecution;
(function (QueryExecution) {
    function isa(o) {
        return smithy_client_1.isa(o, "QueryExecution");
    }
    QueryExecution.isa = isa;
})(QueryExecution = exports.QueryExecution || (exports.QueryExecution = {}));
var QueryExecutionContext;
(function (QueryExecutionContext) {
    function isa(o) {
        return smithy_client_1.isa(o, "QueryExecutionContext");
    }
    QueryExecutionContext.isa = isa;
})(QueryExecutionContext = exports.QueryExecutionContext || (exports.QueryExecutionContext = {}));
var QueryExecutionState;
(function (QueryExecutionState) {
    QueryExecutionState["CANCELLED"] = "CANCELLED";
    QueryExecutionState["FAILED"] = "FAILED";
    QueryExecutionState["QUEUED"] = "QUEUED";
    QueryExecutionState["RUNNING"] = "RUNNING";
    QueryExecutionState["SUCCEEDED"] = "SUCCEEDED";
})(QueryExecutionState = exports.QueryExecutionState || (exports.QueryExecutionState = {}));
var QueryExecutionStatistics;
(function (QueryExecutionStatistics) {
    function isa(o) {
        return smithy_client_1.isa(o, "QueryExecutionStatistics");
    }
    QueryExecutionStatistics.isa = isa;
})(QueryExecutionStatistics = exports.QueryExecutionStatistics || (exports.QueryExecutionStatistics = {}));
var QueryExecutionStatus;
(function (QueryExecutionStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "QueryExecutionStatus");
    }
    QueryExecutionStatus.isa = isa;
})(QueryExecutionStatus = exports.QueryExecutionStatus || (exports.QueryExecutionStatus = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNotFoundException");
    }
    ResourceNotFoundException.isa = isa;
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ResultConfiguration;
(function (ResultConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResultConfiguration");
    }
    ResultConfiguration.isa = isa;
})(ResultConfiguration = exports.ResultConfiguration || (exports.ResultConfiguration = {}));
var ResultConfigurationUpdates;
(function (ResultConfigurationUpdates) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResultConfigurationUpdates");
    }
    ResultConfigurationUpdates.isa = isa;
})(ResultConfigurationUpdates = exports.ResultConfigurationUpdates || (exports.ResultConfigurationUpdates = {}));
var ResultSet;
(function (ResultSet) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResultSet");
    }
    ResultSet.isa = isa;
})(ResultSet = exports.ResultSet || (exports.ResultSet = {}));
var ResultSetMetadata;
(function (ResultSetMetadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResultSetMetadata");
    }
    ResultSetMetadata.isa = isa;
})(ResultSetMetadata = exports.ResultSetMetadata || (exports.ResultSetMetadata = {}));
var Row;
(function (Row) {
    function isa(o) {
        return smithy_client_1.isa(o, "Row");
    }
    Row.isa = isa;
})(Row = exports.Row || (exports.Row = {}));
var StartQueryExecutionInput;
(function (StartQueryExecutionInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartQueryExecutionInput");
    }
    StartQueryExecutionInput.isa = isa;
})(StartQueryExecutionInput = exports.StartQueryExecutionInput || (exports.StartQueryExecutionInput = {}));
var StartQueryExecutionOutput;
(function (StartQueryExecutionOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartQueryExecutionOutput");
    }
    StartQueryExecutionOutput.isa = isa;
})(StartQueryExecutionOutput = exports.StartQueryExecutionOutput || (exports.StartQueryExecutionOutput = {}));
var StatementType;
(function (StatementType) {
    StatementType["DDL"] = "DDL";
    StatementType["DML"] = "DML";
    StatementType["UTILITY"] = "UTILITY";
})(StatementType = exports.StatementType || (exports.StatementType = {}));
var StopQueryExecutionInput;
(function (StopQueryExecutionInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopQueryExecutionInput");
    }
    StopQueryExecutionInput.isa = isa;
})(StopQueryExecutionInput = exports.StopQueryExecutionInput || (exports.StopQueryExecutionInput = {}));
var StopQueryExecutionOutput;
(function (StopQueryExecutionOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopQueryExecutionOutput");
    }
    StopQueryExecutionOutput.isa = isa;
})(StopQueryExecutionOutput = exports.StopQueryExecutionOutput || (exports.StopQueryExecutionOutput = {}));
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
var ThrottleReason;
(function (ThrottleReason) {
    ThrottleReason["CONCURRENT_QUERY_LIMIT_EXCEEDED"] = "CONCURRENT_QUERY_LIMIT_EXCEEDED";
})(ThrottleReason = exports.ThrottleReason || (exports.ThrottleReason = {}));
var TooManyRequestsException;
(function (TooManyRequestsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TooManyRequestsException");
    }
    TooManyRequestsException.isa = isa;
})(TooManyRequestsException = exports.TooManyRequestsException || (exports.TooManyRequestsException = {}));
var UnprocessedNamedQueryId;
(function (UnprocessedNamedQueryId) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnprocessedNamedQueryId");
    }
    UnprocessedNamedQueryId.isa = isa;
})(UnprocessedNamedQueryId = exports.UnprocessedNamedQueryId || (exports.UnprocessedNamedQueryId = {}));
var UnprocessedQueryExecutionId;
(function (UnprocessedQueryExecutionId) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnprocessedQueryExecutionId");
    }
    UnprocessedQueryExecutionId.isa = isa;
})(UnprocessedQueryExecutionId = exports.UnprocessedQueryExecutionId || (exports.UnprocessedQueryExecutionId = {}));
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
var UpdateWorkGroupInput;
(function (UpdateWorkGroupInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateWorkGroupInput");
    }
    UpdateWorkGroupInput.isa = isa;
})(UpdateWorkGroupInput = exports.UpdateWorkGroupInput || (exports.UpdateWorkGroupInput = {}));
var UpdateWorkGroupOutput;
(function (UpdateWorkGroupOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateWorkGroupOutput");
    }
    UpdateWorkGroupOutput.isa = isa;
})(UpdateWorkGroupOutput = exports.UpdateWorkGroupOutput || (exports.UpdateWorkGroupOutput = {}));
var WorkGroup;
(function (WorkGroup) {
    function isa(o) {
        return smithy_client_1.isa(o, "WorkGroup");
    }
    WorkGroup.isa = isa;
})(WorkGroup = exports.WorkGroup || (exports.WorkGroup = {}));
var WorkGroupConfiguration;
(function (WorkGroupConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "WorkGroupConfiguration");
    }
    WorkGroupConfiguration.isa = isa;
})(WorkGroupConfiguration = exports.WorkGroupConfiguration || (exports.WorkGroupConfiguration = {}));
var WorkGroupConfigurationUpdates;
(function (WorkGroupConfigurationUpdates) {
    function isa(o) {
        return smithy_client_1.isa(o, "WorkGroupConfigurationUpdates");
    }
    WorkGroupConfigurationUpdates.isa = isa;
})(WorkGroupConfigurationUpdates = exports.WorkGroupConfigurationUpdates || (exports.WorkGroupConfigurationUpdates = {}));
var WorkGroupState;
(function (WorkGroupState) {
    WorkGroupState["DISABLED"] = "DISABLED";
    WorkGroupState["ENABLED"] = "ENABLED";
})(WorkGroupState = exports.WorkGroupState || (exports.WorkGroupState = {}));
var WorkGroupSummary;
(function (WorkGroupSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "WorkGroupSummary");
    }
    WorkGroupSummary.isa = isa;
})(WorkGroupSummary = exports.WorkGroupSummary || (exports.WorkGroupSummary = {}));
//# sourceMappingURL=index.js.map