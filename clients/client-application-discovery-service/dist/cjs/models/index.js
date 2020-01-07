"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AgentConfigurationStatus;
(function (AgentConfigurationStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "AgentConfigurationStatus");
    }
    AgentConfigurationStatus.isa = isa;
})(AgentConfigurationStatus = exports.AgentConfigurationStatus || (exports.AgentConfigurationStatus = {}));
var AgentInfo;
(function (AgentInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "AgentInfo");
    }
    AgentInfo.isa = isa;
})(AgentInfo = exports.AgentInfo || (exports.AgentInfo = {}));
var AgentNetworkInfo;
(function (AgentNetworkInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "AgentNetworkInfo");
    }
    AgentNetworkInfo.isa = isa;
})(AgentNetworkInfo = exports.AgentNetworkInfo || (exports.AgentNetworkInfo = {}));
var AgentStatus;
(function (AgentStatus) {
    AgentStatus["BLACKLISTED"] = "BLACKLISTED";
    AgentStatus["HEALTHY"] = "HEALTHY";
    AgentStatus["RUNNING"] = "RUNNING";
    AgentStatus["SHUTDOWN"] = "SHUTDOWN";
    AgentStatus["UNHEALTHY"] = "UNHEALTHY";
    AgentStatus["UNKNOWN"] = "UNKNOWN";
})(AgentStatus = exports.AgentStatus || (exports.AgentStatus = {}));
var AssociateConfigurationItemsToApplicationRequest;
(function (AssociateConfigurationItemsToApplicationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateConfigurationItemsToApplicationRequest");
    }
    AssociateConfigurationItemsToApplicationRequest.isa = isa;
})(AssociateConfigurationItemsToApplicationRequest = exports.AssociateConfigurationItemsToApplicationRequest || (exports.AssociateConfigurationItemsToApplicationRequest = {}));
var AssociateConfigurationItemsToApplicationResponse;
(function (AssociateConfigurationItemsToApplicationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateConfigurationItemsToApplicationResponse");
    }
    AssociateConfigurationItemsToApplicationResponse.isa = isa;
})(AssociateConfigurationItemsToApplicationResponse = exports.AssociateConfigurationItemsToApplicationResponse || (exports.AssociateConfigurationItemsToApplicationResponse = {}));
var AuthorizationErrorException;
(function (AuthorizationErrorException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AuthorizationErrorException");
    }
    AuthorizationErrorException.isa = isa;
})(AuthorizationErrorException = exports.AuthorizationErrorException || (exports.AuthorizationErrorException = {}));
var BatchDeleteImportDataError;
(function (BatchDeleteImportDataError) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchDeleteImportDataError");
    }
    BatchDeleteImportDataError.isa = isa;
})(BatchDeleteImportDataError = exports.BatchDeleteImportDataError || (exports.BatchDeleteImportDataError = {}));
var BatchDeleteImportDataErrorCode;
(function (BatchDeleteImportDataErrorCode) {
    BatchDeleteImportDataErrorCode["INTERNAL_SERVER_ERROR"] = "INTERNAL_SERVER_ERROR";
    BatchDeleteImportDataErrorCode["NOT_FOUND"] = "NOT_FOUND";
    BatchDeleteImportDataErrorCode["OVER_LIMIT"] = "OVER_LIMIT";
})(BatchDeleteImportDataErrorCode = exports.BatchDeleteImportDataErrorCode || (exports.BatchDeleteImportDataErrorCode = {}));
var BatchDeleteImportDataRequest;
(function (BatchDeleteImportDataRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchDeleteImportDataRequest");
    }
    BatchDeleteImportDataRequest.isa = isa;
})(BatchDeleteImportDataRequest = exports.BatchDeleteImportDataRequest || (exports.BatchDeleteImportDataRequest = {}));
var BatchDeleteImportDataResponse;
(function (BatchDeleteImportDataResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchDeleteImportDataResponse");
    }
    BatchDeleteImportDataResponse.isa = isa;
})(BatchDeleteImportDataResponse = exports.BatchDeleteImportDataResponse || (exports.BatchDeleteImportDataResponse = {}));
var ConfigurationItemType;
(function (ConfigurationItemType) {
    ConfigurationItemType["APPLICATION"] = "APPLICATION";
    ConfigurationItemType["CONNECTIONS"] = "CONNECTION";
    ConfigurationItemType["PROCESS"] = "PROCESS";
    ConfigurationItemType["SERVER"] = "SERVER";
})(ConfigurationItemType = exports.ConfigurationItemType || (exports.ConfigurationItemType = {}));
var ConfigurationTag;
(function (ConfigurationTag) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConfigurationTag");
    }
    ConfigurationTag.isa = isa;
})(ConfigurationTag = exports.ConfigurationTag || (exports.ConfigurationTag = {}));
var ConflictErrorException;
(function (ConflictErrorException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConflictErrorException");
    }
    ConflictErrorException.isa = isa;
})(ConflictErrorException = exports.ConflictErrorException || (exports.ConflictErrorException = {}));
var ContinuousExportDescription;
(function (ContinuousExportDescription) {
    function isa(o) {
        return smithy_client_1.isa(o, "ContinuousExportDescription");
    }
    ContinuousExportDescription.isa = isa;
})(ContinuousExportDescription = exports.ContinuousExportDescription || (exports.ContinuousExportDescription = {}));
var ContinuousExportStatus;
(function (ContinuousExportStatus) {
    ContinuousExportStatus["ACTIVE"] = "ACTIVE";
    ContinuousExportStatus["ERROR"] = "ERROR";
    ContinuousExportStatus["INACTIVE"] = "INACTIVE";
    ContinuousExportStatus["START_FAILED"] = "START_FAILED";
    ContinuousExportStatus["START_IN_PROGRESS"] = "START_IN_PROGRESS";
    ContinuousExportStatus["STOP_FAILED"] = "STOP_FAILED";
    ContinuousExportStatus["STOP_IN_PROGRESS"] = "STOP_IN_PROGRESS";
})(ContinuousExportStatus = exports.ContinuousExportStatus || (exports.ContinuousExportStatus = {}));
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
var CreateTagsRequest;
(function (CreateTagsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateTagsRequest");
    }
    CreateTagsRequest.isa = isa;
})(CreateTagsRequest = exports.CreateTagsRequest || (exports.CreateTagsRequest = {}));
var CreateTagsResponse;
(function (CreateTagsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateTagsResponse");
    }
    CreateTagsResponse.isa = isa;
})(CreateTagsResponse = exports.CreateTagsResponse || (exports.CreateTagsResponse = {}));
var CustomerAgentInfo;
(function (CustomerAgentInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "CustomerAgentInfo");
    }
    CustomerAgentInfo.isa = isa;
})(CustomerAgentInfo = exports.CustomerAgentInfo || (exports.CustomerAgentInfo = {}));
var CustomerConnectorInfo;
(function (CustomerConnectorInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "CustomerConnectorInfo");
    }
    CustomerConnectorInfo.isa = isa;
})(CustomerConnectorInfo = exports.CustomerConnectorInfo || (exports.CustomerConnectorInfo = {}));
var DataSource;
(function (DataSource) {
    DataSource["AGENT"] = "AGENT";
})(DataSource = exports.DataSource || (exports.DataSource = {}));
var DeleteApplicationsRequest;
(function (DeleteApplicationsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteApplicationsRequest");
    }
    DeleteApplicationsRequest.isa = isa;
})(DeleteApplicationsRequest = exports.DeleteApplicationsRequest || (exports.DeleteApplicationsRequest = {}));
var DeleteApplicationsResponse;
(function (DeleteApplicationsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteApplicationsResponse");
    }
    DeleteApplicationsResponse.isa = isa;
})(DeleteApplicationsResponse = exports.DeleteApplicationsResponse || (exports.DeleteApplicationsResponse = {}));
var DeleteTagsRequest;
(function (DeleteTagsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteTagsRequest");
    }
    DeleteTagsRequest.isa = isa;
})(DeleteTagsRequest = exports.DeleteTagsRequest || (exports.DeleteTagsRequest = {}));
var DeleteTagsResponse;
(function (DeleteTagsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteTagsResponse");
    }
    DeleteTagsResponse.isa = isa;
})(DeleteTagsResponse = exports.DeleteTagsResponse || (exports.DeleteTagsResponse = {}));
var DescribeAgentsRequest;
(function (DescribeAgentsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAgentsRequest");
    }
    DescribeAgentsRequest.isa = isa;
})(DescribeAgentsRequest = exports.DescribeAgentsRequest || (exports.DescribeAgentsRequest = {}));
var DescribeAgentsResponse;
(function (DescribeAgentsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAgentsResponse");
    }
    DescribeAgentsResponse.isa = isa;
})(DescribeAgentsResponse = exports.DescribeAgentsResponse || (exports.DescribeAgentsResponse = {}));
var DescribeConfigurationsRequest;
(function (DescribeConfigurationsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeConfigurationsRequest");
    }
    DescribeConfigurationsRequest.isa = isa;
})(DescribeConfigurationsRequest = exports.DescribeConfigurationsRequest || (exports.DescribeConfigurationsRequest = {}));
var DescribeConfigurationsResponse;
(function (DescribeConfigurationsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeConfigurationsResponse");
    }
    DescribeConfigurationsResponse.isa = isa;
})(DescribeConfigurationsResponse = exports.DescribeConfigurationsResponse || (exports.DescribeConfigurationsResponse = {}));
var DescribeContinuousExportsRequest;
(function (DescribeContinuousExportsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeContinuousExportsRequest");
    }
    DescribeContinuousExportsRequest.isa = isa;
})(DescribeContinuousExportsRequest = exports.DescribeContinuousExportsRequest || (exports.DescribeContinuousExportsRequest = {}));
var DescribeContinuousExportsResponse;
(function (DescribeContinuousExportsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeContinuousExportsResponse");
    }
    DescribeContinuousExportsResponse.isa = isa;
})(DescribeContinuousExportsResponse = exports.DescribeContinuousExportsResponse || (exports.DescribeContinuousExportsResponse = {}));
var DescribeExportConfigurationsRequest;
(function (DescribeExportConfigurationsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeExportConfigurationsRequest");
    }
    DescribeExportConfigurationsRequest.isa = isa;
})(DescribeExportConfigurationsRequest = exports.DescribeExportConfigurationsRequest || (exports.DescribeExportConfigurationsRequest = {}));
var DescribeExportConfigurationsResponse;
(function (DescribeExportConfigurationsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeExportConfigurationsResponse");
    }
    DescribeExportConfigurationsResponse.isa = isa;
})(DescribeExportConfigurationsResponse = exports.DescribeExportConfigurationsResponse || (exports.DescribeExportConfigurationsResponse = {}));
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
var DescribeImportTasksRequest;
(function (DescribeImportTasksRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeImportTasksRequest");
    }
    DescribeImportTasksRequest.isa = isa;
})(DescribeImportTasksRequest = exports.DescribeImportTasksRequest || (exports.DescribeImportTasksRequest = {}));
var DescribeImportTasksResponse;
(function (DescribeImportTasksResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeImportTasksResponse");
    }
    DescribeImportTasksResponse.isa = isa;
})(DescribeImportTasksResponse = exports.DescribeImportTasksResponse || (exports.DescribeImportTasksResponse = {}));
var DescribeTagsRequest;
(function (DescribeTagsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTagsRequest");
    }
    DescribeTagsRequest.isa = isa;
})(DescribeTagsRequest = exports.DescribeTagsRequest || (exports.DescribeTagsRequest = {}));
var DescribeTagsResponse;
(function (DescribeTagsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTagsResponse");
    }
    DescribeTagsResponse.isa = isa;
})(DescribeTagsResponse = exports.DescribeTagsResponse || (exports.DescribeTagsResponse = {}));
var DisassociateConfigurationItemsFromApplicationRequest;
(function (DisassociateConfigurationItemsFromApplicationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateConfigurationItemsFromApplicationRequest");
    }
    DisassociateConfigurationItemsFromApplicationRequest.isa = isa;
})(DisassociateConfigurationItemsFromApplicationRequest = exports.DisassociateConfigurationItemsFromApplicationRequest || (exports.DisassociateConfigurationItemsFromApplicationRequest = {}));
var DisassociateConfigurationItemsFromApplicationResponse;
(function (DisassociateConfigurationItemsFromApplicationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateConfigurationItemsFromApplicationResponse");
    }
    DisassociateConfigurationItemsFromApplicationResponse.isa = isa;
})(DisassociateConfigurationItemsFromApplicationResponse = exports.DisassociateConfigurationItemsFromApplicationResponse || (exports.DisassociateConfigurationItemsFromApplicationResponse = {}));
var ExportConfigurationsResponse;
(function (ExportConfigurationsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExportConfigurationsResponse");
    }
    ExportConfigurationsResponse.isa = isa;
})(ExportConfigurationsResponse = exports.ExportConfigurationsResponse || (exports.ExportConfigurationsResponse = {}));
var ExportDataFormat;
(function (ExportDataFormat) {
    ExportDataFormat["CSV"] = "CSV";
    ExportDataFormat["GRAPHML"] = "GRAPHML";
})(ExportDataFormat = exports.ExportDataFormat || (exports.ExportDataFormat = {}));
var ExportFilter;
(function (ExportFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExportFilter");
    }
    ExportFilter.isa = isa;
})(ExportFilter = exports.ExportFilter || (exports.ExportFilter = {}));
var ExportInfo;
(function (ExportInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExportInfo");
    }
    ExportInfo.isa = isa;
})(ExportInfo = exports.ExportInfo || (exports.ExportInfo = {}));
var ExportStatus;
(function (ExportStatus) {
    ExportStatus["FAILED"] = "FAILED";
    ExportStatus["IN_PROGRESS"] = "IN_PROGRESS";
    ExportStatus["SUCCEEDED"] = "SUCCEEDED";
})(ExportStatus = exports.ExportStatus || (exports.ExportStatus = {}));
var Filter;
(function (Filter) {
    function isa(o) {
        return smithy_client_1.isa(o, "Filter");
    }
    Filter.isa = isa;
})(Filter = exports.Filter || (exports.Filter = {}));
var GetDiscoverySummaryRequest;
(function (GetDiscoverySummaryRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDiscoverySummaryRequest");
    }
    GetDiscoverySummaryRequest.isa = isa;
})(GetDiscoverySummaryRequest = exports.GetDiscoverySummaryRequest || (exports.GetDiscoverySummaryRequest = {}));
var GetDiscoverySummaryResponse;
(function (GetDiscoverySummaryResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDiscoverySummaryResponse");
    }
    GetDiscoverySummaryResponse.isa = isa;
})(GetDiscoverySummaryResponse = exports.GetDiscoverySummaryResponse || (exports.GetDiscoverySummaryResponse = {}));
var HomeRegionNotSetException;
(function (HomeRegionNotSetException) {
    function isa(o) {
        return smithy_client_1.isa(o, "HomeRegionNotSetException");
    }
    HomeRegionNotSetException.isa = isa;
})(HomeRegionNotSetException = exports.HomeRegionNotSetException || (exports.HomeRegionNotSetException = {}));
var ImportStatus;
(function (ImportStatus) {
    ImportStatus["DELETE_COMPLETE"] = "DELETE_COMPLETE";
    ImportStatus["DELETE_FAILED"] = "DELETE_FAILED";
    ImportStatus["DELETE_FAILED_LIMIT_EXCEEDED"] = "DELETE_FAILED_LIMIT_EXCEEDED";
    ImportStatus["DELETE_IN_PROGRESS"] = "DELETE_IN_PROGRESS";
    ImportStatus["IMPORT_COMPLETE"] = "IMPORT_COMPLETE";
    ImportStatus["IMPORT_COMPLETE_WITH_ERRORS"] = "IMPORT_COMPLETE_WITH_ERRORS";
    ImportStatus["IMPORT_FAILED"] = "IMPORT_FAILED";
    ImportStatus["IMPORT_FAILED_RECORD_LIMIT_EXCEEDED"] = "IMPORT_FAILED_RECORD_LIMIT_EXCEEDED";
    ImportStatus["IMPORT_FAILED_SERVER_LIMIT_EXCEEDED"] = "IMPORT_FAILED_SERVER_LIMIT_EXCEEDED";
    ImportStatus["IMPORT_IN_PROGRESS"] = "IMPORT_IN_PROGRESS";
    ImportStatus["INTERNAL_ERROR"] = "INTERNAL_ERROR";
})(ImportStatus = exports.ImportStatus || (exports.ImportStatus = {}));
var ImportTask;
(function (ImportTask) {
    function isa(o) {
        return smithy_client_1.isa(o, "ImportTask");
    }
    ImportTask.isa = isa;
})(ImportTask = exports.ImportTask || (exports.ImportTask = {}));
var ImportTaskFilter;
(function (ImportTaskFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "ImportTaskFilter");
    }
    ImportTaskFilter.isa = isa;
})(ImportTaskFilter = exports.ImportTaskFilter || (exports.ImportTaskFilter = {}));
var ImportTaskFilterName;
(function (ImportTaskFilterName) {
    ImportTaskFilterName["IMPORT_TASK_ID"] = "IMPORT_TASK_ID";
    ImportTaskFilterName["NAME"] = "NAME";
    ImportTaskFilterName["STATUS"] = "STATUS";
})(ImportTaskFilterName = exports.ImportTaskFilterName || (exports.ImportTaskFilterName = {}));
var InvalidParameterException;
(function (InvalidParameterException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidParameterException");
    }
    InvalidParameterException.isa = isa;
})(InvalidParameterException = exports.InvalidParameterException || (exports.InvalidParameterException = {}));
var InvalidParameterValueException;
(function (InvalidParameterValueException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidParameterValueException");
    }
    InvalidParameterValueException.isa = isa;
})(InvalidParameterValueException = exports.InvalidParameterValueException || (exports.InvalidParameterValueException = {}));
var ListConfigurationsRequest;
(function (ListConfigurationsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListConfigurationsRequest");
    }
    ListConfigurationsRequest.isa = isa;
})(ListConfigurationsRequest = exports.ListConfigurationsRequest || (exports.ListConfigurationsRequest = {}));
var ListConfigurationsResponse;
(function (ListConfigurationsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListConfigurationsResponse");
    }
    ListConfigurationsResponse.isa = isa;
})(ListConfigurationsResponse = exports.ListConfigurationsResponse || (exports.ListConfigurationsResponse = {}));
var ListServerNeighborsRequest;
(function (ListServerNeighborsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListServerNeighborsRequest");
    }
    ListServerNeighborsRequest.isa = isa;
})(ListServerNeighborsRequest = exports.ListServerNeighborsRequest || (exports.ListServerNeighborsRequest = {}));
var ListServerNeighborsResponse;
(function (ListServerNeighborsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListServerNeighborsResponse");
    }
    ListServerNeighborsResponse.isa = isa;
})(ListServerNeighborsResponse = exports.ListServerNeighborsResponse || (exports.ListServerNeighborsResponse = {}));
var NeighborConnectionDetail;
(function (NeighborConnectionDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "NeighborConnectionDetail");
    }
    NeighborConnectionDetail.isa = isa;
})(NeighborConnectionDetail = exports.NeighborConnectionDetail || (exports.NeighborConnectionDetail = {}));
var OperationNotPermittedException;
(function (OperationNotPermittedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "OperationNotPermittedException");
    }
    OperationNotPermittedException.isa = isa;
})(OperationNotPermittedException = exports.OperationNotPermittedException || (exports.OperationNotPermittedException = {}));
var OrderByElement;
(function (OrderByElement) {
    function isa(o) {
        return smithy_client_1.isa(o, "OrderByElement");
    }
    OrderByElement.isa = isa;
})(OrderByElement = exports.OrderByElement || (exports.OrderByElement = {}));
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
var ServerInternalErrorException;
(function (ServerInternalErrorException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServerInternalErrorException");
    }
    ServerInternalErrorException.isa = isa;
})(ServerInternalErrorException = exports.ServerInternalErrorException || (exports.ServerInternalErrorException = {}));
var StartContinuousExportRequest;
(function (StartContinuousExportRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartContinuousExportRequest");
    }
    StartContinuousExportRequest.isa = isa;
})(StartContinuousExportRequest = exports.StartContinuousExportRequest || (exports.StartContinuousExportRequest = {}));
var StartContinuousExportResponse;
(function (StartContinuousExportResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartContinuousExportResponse");
    }
    StartContinuousExportResponse.isa = isa;
})(StartContinuousExportResponse = exports.StartContinuousExportResponse || (exports.StartContinuousExportResponse = {}));
var StartDataCollectionByAgentIdsRequest;
(function (StartDataCollectionByAgentIdsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartDataCollectionByAgentIdsRequest");
    }
    StartDataCollectionByAgentIdsRequest.isa = isa;
})(StartDataCollectionByAgentIdsRequest = exports.StartDataCollectionByAgentIdsRequest || (exports.StartDataCollectionByAgentIdsRequest = {}));
var StartDataCollectionByAgentIdsResponse;
(function (StartDataCollectionByAgentIdsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartDataCollectionByAgentIdsResponse");
    }
    StartDataCollectionByAgentIdsResponse.isa = isa;
})(StartDataCollectionByAgentIdsResponse = exports.StartDataCollectionByAgentIdsResponse || (exports.StartDataCollectionByAgentIdsResponse = {}));
var StartExportTaskRequest;
(function (StartExportTaskRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartExportTaskRequest");
    }
    StartExportTaskRequest.isa = isa;
})(StartExportTaskRequest = exports.StartExportTaskRequest || (exports.StartExportTaskRequest = {}));
var StartExportTaskResponse;
(function (StartExportTaskResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartExportTaskResponse");
    }
    StartExportTaskResponse.isa = isa;
})(StartExportTaskResponse = exports.StartExportTaskResponse || (exports.StartExportTaskResponse = {}));
var StartImportTaskRequest;
(function (StartImportTaskRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartImportTaskRequest");
    }
    StartImportTaskRequest.isa = isa;
})(StartImportTaskRequest = exports.StartImportTaskRequest || (exports.StartImportTaskRequest = {}));
var StartImportTaskResponse;
(function (StartImportTaskResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartImportTaskResponse");
    }
    StartImportTaskResponse.isa = isa;
})(StartImportTaskResponse = exports.StartImportTaskResponse || (exports.StartImportTaskResponse = {}));
var StopContinuousExportRequest;
(function (StopContinuousExportRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopContinuousExportRequest");
    }
    StopContinuousExportRequest.isa = isa;
})(StopContinuousExportRequest = exports.StopContinuousExportRequest || (exports.StopContinuousExportRequest = {}));
var StopContinuousExportResponse;
(function (StopContinuousExportResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopContinuousExportResponse");
    }
    StopContinuousExportResponse.isa = isa;
})(StopContinuousExportResponse = exports.StopContinuousExportResponse || (exports.StopContinuousExportResponse = {}));
var StopDataCollectionByAgentIdsRequest;
(function (StopDataCollectionByAgentIdsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopDataCollectionByAgentIdsRequest");
    }
    StopDataCollectionByAgentIdsRequest.isa = isa;
})(StopDataCollectionByAgentIdsRequest = exports.StopDataCollectionByAgentIdsRequest || (exports.StopDataCollectionByAgentIdsRequest = {}));
var StopDataCollectionByAgentIdsResponse;
(function (StopDataCollectionByAgentIdsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopDataCollectionByAgentIdsResponse");
    }
    StopDataCollectionByAgentIdsResponse.isa = isa;
})(StopDataCollectionByAgentIdsResponse = exports.StopDataCollectionByAgentIdsResponse || (exports.StopDataCollectionByAgentIdsResponse = {}));
var Tag;
(function (Tag) {
    function isa(o) {
        return smithy_client_1.isa(o, "Tag");
    }
    Tag.isa = isa;
})(Tag = exports.Tag || (exports.Tag = {}));
var TagFilter;
(function (TagFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagFilter");
    }
    TagFilter.isa = isa;
})(TagFilter = exports.TagFilter || (exports.TagFilter = {}));
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
var OrderString;
(function (OrderString) {
    OrderString["ASC"] = "ASC";
    OrderString["DESC"] = "DESC";
})(OrderString = exports.OrderString || (exports.OrderString = {}));
//# sourceMappingURL=index.js.map