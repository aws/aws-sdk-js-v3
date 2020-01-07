"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AppLaunchStatus;
(function (AppLaunchStatus) {
    AppLaunchStatus["ConfigurationInProgress"] = "CONFIGURATION_IN_PROGRESS";
    AppLaunchStatus["ConfigurationInvalid"] = "CONFIGURATION_INVALID";
    AppLaunchStatus["DeltaLaunchFailed"] = "DELTA_LAUNCH_FAILED";
    AppLaunchStatus["DeltaLaunchInProgress"] = "DELTA_LAUNCH_IN_PROGRESS";
    AppLaunchStatus["LaunchFailed"] = "LAUNCH_FAILED";
    AppLaunchStatus["LaunchInProgress"] = "LAUNCH_IN_PROGRESS";
    AppLaunchStatus["LaunchPending"] = "LAUNCH_PENDING";
    AppLaunchStatus["Launched"] = "LAUNCHED";
    AppLaunchStatus["ReadyForConfiguration"] = "READY_FOR_CONFIGURATION";
    AppLaunchStatus["ReadyForLaunch"] = "READY_FOR_LAUNCH";
    AppLaunchStatus["TerminateFailed"] = "TERMINATE_FAILED";
    AppLaunchStatus["TerminateInProgress"] = "TERMINATE_IN_PROGRESS";
    AppLaunchStatus["Terminated"] = "TERMINATED";
    AppLaunchStatus["ValidationInProgress"] = "VALIDATION_IN_PROGRESS";
})(AppLaunchStatus = exports.AppLaunchStatus || (exports.AppLaunchStatus = {}));
var AppReplicationStatus;
(function (AppReplicationStatus) {
    AppReplicationStatus["ConfigurationInProgress"] = "CONFIGURATION_IN_PROGRESS";
    AppReplicationStatus["ConfigurationInvalid"] = "CONFIGURATION_INVALID";
    AppReplicationStatus["DeltaReplicated"] = "DELTA_REPLICATED";
    AppReplicationStatus["DeltaReplicationFailed"] = "DELTA_REPLICATION_FAILED";
    AppReplicationStatus["DeltaReplicationInProgress"] = "DELTA_REPLICATION_IN_PROGRESS";
    AppReplicationStatus["ReadyForConfiguration"] = "READY_FOR_CONFIGURATION";
    AppReplicationStatus["ReadyForReplication"] = "READY_FOR_REPLICATION";
    AppReplicationStatus["Replicated"] = "REPLICATED";
    AppReplicationStatus["ReplicationFailed"] = "REPLICATION_FAILED";
    AppReplicationStatus["ReplicationInProgress"] = "REPLICATION_IN_PROGRESS";
    AppReplicationStatus["ReplicationPending"] = "REPLICATION_PENDING";
    AppReplicationStatus["ReplicationStopFailed"] = "REPLICATION_STOP_FAILED";
    AppReplicationStatus["ReplicationStopped"] = "REPLICATION_STOPPED";
    AppReplicationStatus["ReplicationStopping"] = "REPLICATION_STOPPING";
    AppReplicationStatus["ValidationInProgress"] = "VALIDATION_IN_PROGRESS";
})(AppReplicationStatus = exports.AppReplicationStatus || (exports.AppReplicationStatus = {}));
var AppStatus;
(function (AppStatus) {
    AppStatus["Active"] = "ACTIVE";
    AppStatus["Creating"] = "CREATING";
    AppStatus["DELETE_FAILED"] = "DELETE_FAILED";
    AppStatus["Deleted"] = "DELETED";
    AppStatus["Deleting"] = "DELETING";
    AppStatus["Updating"] = "UPDATING";
})(AppStatus = exports.AppStatus || (exports.AppStatus = {}));
var AppSummary;
(function (AppSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "AppSummary");
    }
    AppSummary.isa = isa;
})(AppSummary = exports.AppSummary || (exports.AppSummary = {}));
var Connector;
(function (Connector) {
    function isa(o) {
        return smithy_client_1.isa(o, "Connector");
    }
    Connector.isa = isa;
})(Connector = exports.Connector || (exports.Connector = {}));
var ConnectorCapability;
(function (ConnectorCapability) {
    ConnectorCapability["hyperVManager"] = "HYPERV-MANAGER";
    ConnectorCapability["scvmm"] = "SCVMM";
    ConnectorCapability["snapshotBatching"] = "SNAPSHOT_BATCHING";
    ConnectorCapability["vSphere"] = "VSPHERE";
})(ConnectorCapability = exports.ConnectorCapability || (exports.ConnectorCapability = {}));
var ConnectorStatus;
(function (ConnectorStatus) {
    ConnectorStatus["Healthy"] = "HEALTHY";
    ConnectorStatus["Unhealthy"] = "UNHEALTHY";
})(ConnectorStatus = exports.ConnectorStatus || (exports.ConnectorStatus = {}));
var CreateAppRequest;
(function (CreateAppRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAppRequest");
    }
    CreateAppRequest.isa = isa;
})(CreateAppRequest = exports.CreateAppRequest || (exports.CreateAppRequest = {}));
var CreateAppResponse;
(function (CreateAppResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAppResponse");
    }
    CreateAppResponse.isa = isa;
})(CreateAppResponse = exports.CreateAppResponse || (exports.CreateAppResponse = {}));
var CreateReplicationJobRequest;
(function (CreateReplicationJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateReplicationJobRequest");
    }
    CreateReplicationJobRequest.isa = isa;
})(CreateReplicationJobRequest = exports.CreateReplicationJobRequest || (exports.CreateReplicationJobRequest = {}));
var CreateReplicationJobResponse;
(function (CreateReplicationJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateReplicationJobResponse");
    }
    CreateReplicationJobResponse.isa = isa;
})(CreateReplicationJobResponse = exports.CreateReplicationJobResponse || (exports.CreateReplicationJobResponse = {}));
var DeleteAppLaunchConfigurationRequest;
(function (DeleteAppLaunchConfigurationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteAppLaunchConfigurationRequest");
    }
    DeleteAppLaunchConfigurationRequest.isa = isa;
})(DeleteAppLaunchConfigurationRequest = exports.DeleteAppLaunchConfigurationRequest || (exports.DeleteAppLaunchConfigurationRequest = {}));
var DeleteAppLaunchConfigurationResponse;
(function (DeleteAppLaunchConfigurationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteAppLaunchConfigurationResponse");
    }
    DeleteAppLaunchConfigurationResponse.isa = isa;
})(DeleteAppLaunchConfigurationResponse = exports.DeleteAppLaunchConfigurationResponse || (exports.DeleteAppLaunchConfigurationResponse = {}));
var DeleteAppReplicationConfigurationRequest;
(function (DeleteAppReplicationConfigurationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteAppReplicationConfigurationRequest");
    }
    DeleteAppReplicationConfigurationRequest.isa = isa;
})(DeleteAppReplicationConfigurationRequest = exports.DeleteAppReplicationConfigurationRequest || (exports.DeleteAppReplicationConfigurationRequest = {}));
var DeleteAppReplicationConfigurationResponse;
(function (DeleteAppReplicationConfigurationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteAppReplicationConfigurationResponse");
    }
    DeleteAppReplicationConfigurationResponse.isa = isa;
})(DeleteAppReplicationConfigurationResponse = exports.DeleteAppReplicationConfigurationResponse || (exports.DeleteAppReplicationConfigurationResponse = {}));
var DeleteAppRequest;
(function (DeleteAppRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteAppRequest");
    }
    DeleteAppRequest.isa = isa;
})(DeleteAppRequest = exports.DeleteAppRequest || (exports.DeleteAppRequest = {}));
var DeleteAppResponse;
(function (DeleteAppResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteAppResponse");
    }
    DeleteAppResponse.isa = isa;
})(DeleteAppResponse = exports.DeleteAppResponse || (exports.DeleteAppResponse = {}));
var DeleteReplicationJobRequest;
(function (DeleteReplicationJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteReplicationJobRequest");
    }
    DeleteReplicationJobRequest.isa = isa;
})(DeleteReplicationJobRequest = exports.DeleteReplicationJobRequest || (exports.DeleteReplicationJobRequest = {}));
var DeleteReplicationJobResponse;
(function (DeleteReplicationJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteReplicationJobResponse");
    }
    DeleteReplicationJobResponse.isa = isa;
})(DeleteReplicationJobResponse = exports.DeleteReplicationJobResponse || (exports.DeleteReplicationJobResponse = {}));
var DeleteServerCatalogRequest;
(function (DeleteServerCatalogRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteServerCatalogRequest");
    }
    DeleteServerCatalogRequest.isa = isa;
})(DeleteServerCatalogRequest = exports.DeleteServerCatalogRequest || (exports.DeleteServerCatalogRequest = {}));
var DeleteServerCatalogResponse;
(function (DeleteServerCatalogResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteServerCatalogResponse");
    }
    DeleteServerCatalogResponse.isa = isa;
})(DeleteServerCatalogResponse = exports.DeleteServerCatalogResponse || (exports.DeleteServerCatalogResponse = {}));
var DisassociateConnectorRequest;
(function (DisassociateConnectorRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateConnectorRequest");
    }
    DisassociateConnectorRequest.isa = isa;
})(DisassociateConnectorRequest = exports.DisassociateConnectorRequest || (exports.DisassociateConnectorRequest = {}));
var DisassociateConnectorResponse;
(function (DisassociateConnectorResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateConnectorResponse");
    }
    DisassociateConnectorResponse.isa = isa;
})(DisassociateConnectorResponse = exports.DisassociateConnectorResponse || (exports.DisassociateConnectorResponse = {}));
var GenerateChangeSetRequest;
(function (GenerateChangeSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GenerateChangeSetRequest");
    }
    GenerateChangeSetRequest.isa = isa;
})(GenerateChangeSetRequest = exports.GenerateChangeSetRequest || (exports.GenerateChangeSetRequest = {}));
var GenerateChangeSetResponse;
(function (GenerateChangeSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GenerateChangeSetResponse");
    }
    GenerateChangeSetResponse.isa = isa;
})(GenerateChangeSetResponse = exports.GenerateChangeSetResponse || (exports.GenerateChangeSetResponse = {}));
var GenerateTemplateRequest;
(function (GenerateTemplateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GenerateTemplateRequest");
    }
    GenerateTemplateRequest.isa = isa;
})(GenerateTemplateRequest = exports.GenerateTemplateRequest || (exports.GenerateTemplateRequest = {}));
var GenerateTemplateResponse;
(function (GenerateTemplateResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GenerateTemplateResponse");
    }
    GenerateTemplateResponse.isa = isa;
})(GenerateTemplateResponse = exports.GenerateTemplateResponse || (exports.GenerateTemplateResponse = {}));
var GetAppLaunchConfigurationRequest;
(function (GetAppLaunchConfigurationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAppLaunchConfigurationRequest");
    }
    GetAppLaunchConfigurationRequest.isa = isa;
})(GetAppLaunchConfigurationRequest = exports.GetAppLaunchConfigurationRequest || (exports.GetAppLaunchConfigurationRequest = {}));
var GetAppLaunchConfigurationResponse;
(function (GetAppLaunchConfigurationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAppLaunchConfigurationResponse");
    }
    GetAppLaunchConfigurationResponse.isa = isa;
})(GetAppLaunchConfigurationResponse = exports.GetAppLaunchConfigurationResponse || (exports.GetAppLaunchConfigurationResponse = {}));
var GetAppReplicationConfigurationRequest;
(function (GetAppReplicationConfigurationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAppReplicationConfigurationRequest");
    }
    GetAppReplicationConfigurationRequest.isa = isa;
})(GetAppReplicationConfigurationRequest = exports.GetAppReplicationConfigurationRequest || (exports.GetAppReplicationConfigurationRequest = {}));
var GetAppReplicationConfigurationResponse;
(function (GetAppReplicationConfigurationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAppReplicationConfigurationResponse");
    }
    GetAppReplicationConfigurationResponse.isa = isa;
})(GetAppReplicationConfigurationResponse = exports.GetAppReplicationConfigurationResponse || (exports.GetAppReplicationConfigurationResponse = {}));
var GetAppRequest;
(function (GetAppRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAppRequest");
    }
    GetAppRequest.isa = isa;
})(GetAppRequest = exports.GetAppRequest || (exports.GetAppRequest = {}));
var GetAppResponse;
(function (GetAppResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAppResponse");
    }
    GetAppResponse.isa = isa;
})(GetAppResponse = exports.GetAppResponse || (exports.GetAppResponse = {}));
var GetConnectorsRequest;
(function (GetConnectorsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetConnectorsRequest");
    }
    GetConnectorsRequest.isa = isa;
})(GetConnectorsRequest = exports.GetConnectorsRequest || (exports.GetConnectorsRequest = {}));
var GetConnectorsResponse;
(function (GetConnectorsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetConnectorsResponse");
    }
    GetConnectorsResponse.isa = isa;
})(GetConnectorsResponse = exports.GetConnectorsResponse || (exports.GetConnectorsResponse = {}));
var GetReplicationJobsRequest;
(function (GetReplicationJobsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetReplicationJobsRequest");
    }
    GetReplicationJobsRequest.isa = isa;
})(GetReplicationJobsRequest = exports.GetReplicationJobsRequest || (exports.GetReplicationJobsRequest = {}));
var GetReplicationJobsResponse;
(function (GetReplicationJobsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetReplicationJobsResponse");
    }
    GetReplicationJobsResponse.isa = isa;
})(GetReplicationJobsResponse = exports.GetReplicationJobsResponse || (exports.GetReplicationJobsResponse = {}));
var GetReplicationRunsRequest;
(function (GetReplicationRunsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetReplicationRunsRequest");
    }
    GetReplicationRunsRequest.isa = isa;
})(GetReplicationRunsRequest = exports.GetReplicationRunsRequest || (exports.GetReplicationRunsRequest = {}));
var GetReplicationRunsResponse;
(function (GetReplicationRunsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetReplicationRunsResponse");
    }
    GetReplicationRunsResponse.isa = isa;
})(GetReplicationRunsResponse = exports.GetReplicationRunsResponse || (exports.GetReplicationRunsResponse = {}));
var GetServersRequest;
(function (GetServersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetServersRequest");
    }
    GetServersRequest.isa = isa;
})(GetServersRequest = exports.GetServersRequest || (exports.GetServersRequest = {}));
var GetServersResponse;
(function (GetServersResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetServersResponse");
    }
    GetServersResponse.isa = isa;
})(GetServersResponse = exports.GetServersResponse || (exports.GetServersResponse = {}));
var ImportServerCatalogRequest;
(function (ImportServerCatalogRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ImportServerCatalogRequest");
    }
    ImportServerCatalogRequest.isa = isa;
})(ImportServerCatalogRequest = exports.ImportServerCatalogRequest || (exports.ImportServerCatalogRequest = {}));
var ImportServerCatalogResponse;
(function (ImportServerCatalogResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ImportServerCatalogResponse");
    }
    ImportServerCatalogResponse.isa = isa;
})(ImportServerCatalogResponse = exports.ImportServerCatalogResponse || (exports.ImportServerCatalogResponse = {}));
var InternalError;
(function (InternalError) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalError");
    }
    InternalError.isa = isa;
})(InternalError = exports.InternalError || (exports.InternalError = {}));
var InvalidParameterException;
(function (InvalidParameterException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidParameterException");
    }
    InvalidParameterException.isa = isa;
})(InvalidParameterException = exports.InvalidParameterException || (exports.InvalidParameterException = {}));
var LaunchAppRequest;
(function (LaunchAppRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "LaunchAppRequest");
    }
    LaunchAppRequest.isa = isa;
})(LaunchAppRequest = exports.LaunchAppRequest || (exports.LaunchAppRequest = {}));
var LaunchAppResponse;
(function (LaunchAppResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "LaunchAppResponse");
    }
    LaunchAppResponse.isa = isa;
})(LaunchAppResponse = exports.LaunchAppResponse || (exports.LaunchAppResponse = {}));
var LaunchDetails;
(function (LaunchDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "LaunchDetails");
    }
    LaunchDetails.isa = isa;
})(LaunchDetails = exports.LaunchDetails || (exports.LaunchDetails = {}));
var LicenseType;
(function (LicenseType) {
    LicenseType["AWS"] = "AWS";
    LicenseType["BYOL"] = "BYOL";
})(LicenseType = exports.LicenseType || (exports.LicenseType = {}));
var ListAppsRequest;
(function (ListAppsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAppsRequest");
    }
    ListAppsRequest.isa = isa;
})(ListAppsRequest = exports.ListAppsRequest || (exports.ListAppsRequest = {}));
var ListAppsResponse;
(function (ListAppsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAppsResponse");
    }
    ListAppsResponse.isa = isa;
})(ListAppsResponse = exports.ListAppsResponse || (exports.ListAppsResponse = {}));
var MissingRequiredParameterException;
(function (MissingRequiredParameterException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MissingRequiredParameterException");
    }
    MissingRequiredParameterException.isa = isa;
})(MissingRequiredParameterException = exports.MissingRequiredParameterException || (exports.MissingRequiredParameterException = {}));
var NoConnectorsAvailableException;
(function (NoConnectorsAvailableException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NoConnectorsAvailableException");
    }
    NoConnectorsAvailableException.isa = isa;
})(NoConnectorsAvailableException = exports.NoConnectorsAvailableException || (exports.NoConnectorsAvailableException = {}));
var OperationNotPermittedException;
(function (OperationNotPermittedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "OperationNotPermittedException");
    }
    OperationNotPermittedException.isa = isa;
})(OperationNotPermittedException = exports.OperationNotPermittedException || (exports.OperationNotPermittedException = {}));
var OutputFormat;
(function (OutputFormat) {
    OutputFormat["JSON"] = "JSON";
    OutputFormat["YAML"] = "YAML";
})(OutputFormat = exports.OutputFormat || (exports.OutputFormat = {}));
var PutAppLaunchConfigurationRequest;
(function (PutAppLaunchConfigurationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutAppLaunchConfigurationRequest");
    }
    PutAppLaunchConfigurationRequest.isa = isa;
})(PutAppLaunchConfigurationRequest = exports.PutAppLaunchConfigurationRequest || (exports.PutAppLaunchConfigurationRequest = {}));
var PutAppLaunchConfigurationResponse;
(function (PutAppLaunchConfigurationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutAppLaunchConfigurationResponse");
    }
    PutAppLaunchConfigurationResponse.isa = isa;
})(PutAppLaunchConfigurationResponse = exports.PutAppLaunchConfigurationResponse || (exports.PutAppLaunchConfigurationResponse = {}));
var PutAppReplicationConfigurationRequest;
(function (PutAppReplicationConfigurationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutAppReplicationConfigurationRequest");
    }
    PutAppReplicationConfigurationRequest.isa = isa;
})(PutAppReplicationConfigurationRequest = exports.PutAppReplicationConfigurationRequest || (exports.PutAppReplicationConfigurationRequest = {}));
var PutAppReplicationConfigurationResponse;
(function (PutAppReplicationConfigurationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutAppReplicationConfigurationResponse");
    }
    PutAppReplicationConfigurationResponse.isa = isa;
})(PutAppReplicationConfigurationResponse = exports.PutAppReplicationConfigurationResponse || (exports.PutAppReplicationConfigurationResponse = {}));
var ReplicationJob;
(function (ReplicationJob) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReplicationJob");
    }
    ReplicationJob.isa = isa;
})(ReplicationJob = exports.ReplicationJob || (exports.ReplicationJob = {}));
var ReplicationJobAlreadyExistsException;
(function (ReplicationJobAlreadyExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReplicationJobAlreadyExistsException");
    }
    ReplicationJobAlreadyExistsException.isa = isa;
})(ReplicationJobAlreadyExistsException = exports.ReplicationJobAlreadyExistsException || (exports.ReplicationJobAlreadyExistsException = {}));
var ReplicationJobNotFoundException;
(function (ReplicationJobNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReplicationJobNotFoundException");
    }
    ReplicationJobNotFoundException.isa = isa;
})(ReplicationJobNotFoundException = exports.ReplicationJobNotFoundException || (exports.ReplicationJobNotFoundException = {}));
var ReplicationJobState;
(function (ReplicationJobState) {
    ReplicationJobState["Active"] = "ACTIVE";
    ReplicationJobState["Completed"] = "COMPLETED";
    ReplicationJobState["Deleted"] = "DELETED";
    ReplicationJobState["Deleting"] = "DELETING";
    ReplicationJobState["Failed"] = "FAILED";
    ReplicationJobState["Failing"] = "FAILING";
    ReplicationJobState["PausedOnFailure"] = "PAUSED_ON_FAILURE";
    ReplicationJobState["Pending"] = "PENDING";
})(ReplicationJobState = exports.ReplicationJobState || (exports.ReplicationJobState = {}));
var ReplicationRun;
(function (ReplicationRun) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReplicationRun");
    }
    ReplicationRun.isa = isa;
})(ReplicationRun = exports.ReplicationRun || (exports.ReplicationRun = {}));
var ReplicationRunLimitExceededException;
(function (ReplicationRunLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReplicationRunLimitExceededException");
    }
    ReplicationRunLimitExceededException.isa = isa;
})(ReplicationRunLimitExceededException = exports.ReplicationRunLimitExceededException || (exports.ReplicationRunLimitExceededException = {}));
var ReplicationRunStageDetails;
(function (ReplicationRunStageDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReplicationRunStageDetails");
    }
    ReplicationRunStageDetails.isa = isa;
})(ReplicationRunStageDetails = exports.ReplicationRunStageDetails || (exports.ReplicationRunStageDetails = {}));
var ReplicationRunState;
(function (ReplicationRunState) {
    ReplicationRunState["Active"] = "ACTIVE";
    ReplicationRunState["Completed"] = "COMPLETED";
    ReplicationRunState["Deleted"] = "DELETED";
    ReplicationRunState["Deleting"] = "DELETING";
    ReplicationRunState["Failed"] = "FAILED";
    ReplicationRunState["Missed"] = "MISSED";
    ReplicationRunState["Pending"] = "PENDING";
})(ReplicationRunState = exports.ReplicationRunState || (exports.ReplicationRunState = {}));
var ReplicationRunType;
(function (ReplicationRunType) {
    ReplicationRunType["Automatic"] = "AUTOMATIC";
    ReplicationRunType["OnDemand"] = "ON_DEMAND";
})(ReplicationRunType = exports.ReplicationRunType || (exports.ReplicationRunType = {}));
var S3Location;
(function (S3Location) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3Location");
    }
    S3Location.isa = isa;
})(S3Location = exports.S3Location || (exports.S3Location = {}));
var Server;
(function (Server) {
    function isa(o) {
        return smithy_client_1.isa(o, "Server");
    }
    Server.isa = isa;
})(Server = exports.Server || (exports.Server = {}));
var ServerCannotBeReplicatedException;
(function (ServerCannotBeReplicatedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServerCannotBeReplicatedException");
    }
    ServerCannotBeReplicatedException.isa = isa;
})(ServerCannotBeReplicatedException = exports.ServerCannotBeReplicatedException || (exports.ServerCannotBeReplicatedException = {}));
var ServerCatalogStatus;
(function (ServerCatalogStatus) {
    ServerCatalogStatus["Available"] = "AVAILABLE";
    ServerCatalogStatus["Deleted"] = "DELETED";
    ServerCatalogStatus["Expired"] = "EXPIRED";
    ServerCatalogStatus["Importing"] = "IMPORTING";
    ServerCatalogStatus["NotImported"] = "NOT_IMPORTED";
})(ServerCatalogStatus = exports.ServerCatalogStatus || (exports.ServerCatalogStatus = {}));
var ServerGroup;
(function (ServerGroup) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServerGroup");
    }
    ServerGroup.isa = isa;
})(ServerGroup = exports.ServerGroup || (exports.ServerGroup = {}));
var ServerGroupLaunchConfiguration;
(function (ServerGroupLaunchConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServerGroupLaunchConfiguration");
    }
    ServerGroupLaunchConfiguration.isa = isa;
})(ServerGroupLaunchConfiguration = exports.ServerGroupLaunchConfiguration || (exports.ServerGroupLaunchConfiguration = {}));
var ServerGroupReplicationConfiguration;
(function (ServerGroupReplicationConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServerGroupReplicationConfiguration");
    }
    ServerGroupReplicationConfiguration.isa = isa;
})(ServerGroupReplicationConfiguration = exports.ServerGroupReplicationConfiguration || (exports.ServerGroupReplicationConfiguration = {}));
var ServerLaunchConfiguration;
(function (ServerLaunchConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServerLaunchConfiguration");
    }
    ServerLaunchConfiguration.isa = isa;
})(ServerLaunchConfiguration = exports.ServerLaunchConfiguration || (exports.ServerLaunchConfiguration = {}));
var ServerReplicationConfiguration;
(function (ServerReplicationConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServerReplicationConfiguration");
    }
    ServerReplicationConfiguration.isa = isa;
})(ServerReplicationConfiguration = exports.ServerReplicationConfiguration || (exports.ServerReplicationConfiguration = {}));
var ServerReplicationParameters;
(function (ServerReplicationParameters) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServerReplicationParameters");
    }
    ServerReplicationParameters.isa = isa;
})(ServerReplicationParameters = exports.ServerReplicationParameters || (exports.ServerReplicationParameters = {}));
var ServerType;
(function (ServerType) {
    ServerType["VirtualMachine"] = "VIRTUAL_MACHINE";
})(ServerType = exports.ServerType || (exports.ServerType = {}));
var StartAppReplicationRequest;
(function (StartAppReplicationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartAppReplicationRequest");
    }
    StartAppReplicationRequest.isa = isa;
})(StartAppReplicationRequest = exports.StartAppReplicationRequest || (exports.StartAppReplicationRequest = {}));
var StartAppReplicationResponse;
(function (StartAppReplicationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartAppReplicationResponse");
    }
    StartAppReplicationResponse.isa = isa;
})(StartAppReplicationResponse = exports.StartAppReplicationResponse || (exports.StartAppReplicationResponse = {}));
var StartOnDemandReplicationRunRequest;
(function (StartOnDemandReplicationRunRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartOnDemandReplicationRunRequest");
    }
    StartOnDemandReplicationRunRequest.isa = isa;
})(StartOnDemandReplicationRunRequest = exports.StartOnDemandReplicationRunRequest || (exports.StartOnDemandReplicationRunRequest = {}));
var StartOnDemandReplicationRunResponse;
(function (StartOnDemandReplicationRunResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartOnDemandReplicationRunResponse");
    }
    StartOnDemandReplicationRunResponse.isa = isa;
})(StartOnDemandReplicationRunResponse = exports.StartOnDemandReplicationRunResponse || (exports.StartOnDemandReplicationRunResponse = {}));
var StopAppReplicationRequest;
(function (StopAppReplicationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopAppReplicationRequest");
    }
    StopAppReplicationRequest.isa = isa;
})(StopAppReplicationRequest = exports.StopAppReplicationRequest || (exports.StopAppReplicationRequest = {}));
var StopAppReplicationResponse;
(function (StopAppReplicationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopAppReplicationResponse");
    }
    StopAppReplicationResponse.isa = isa;
})(StopAppReplicationResponse = exports.StopAppReplicationResponse || (exports.StopAppReplicationResponse = {}));
var Tag;
(function (Tag) {
    function isa(o) {
        return smithy_client_1.isa(o, "Tag");
    }
    Tag.isa = isa;
})(Tag = exports.Tag || (exports.Tag = {}));
var TemporarilyUnavailableException;
(function (TemporarilyUnavailableException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TemporarilyUnavailableException");
    }
    TemporarilyUnavailableException.isa = isa;
})(TemporarilyUnavailableException = exports.TemporarilyUnavailableException || (exports.TemporarilyUnavailableException = {}));
var TerminateAppRequest;
(function (TerminateAppRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "TerminateAppRequest");
    }
    TerminateAppRequest.isa = isa;
})(TerminateAppRequest = exports.TerminateAppRequest || (exports.TerminateAppRequest = {}));
var TerminateAppResponse;
(function (TerminateAppResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "TerminateAppResponse");
    }
    TerminateAppResponse.isa = isa;
})(TerminateAppResponse = exports.TerminateAppResponse || (exports.TerminateAppResponse = {}));
var UnauthorizedOperationException;
(function (UnauthorizedOperationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnauthorizedOperationException");
    }
    UnauthorizedOperationException.isa = isa;
})(UnauthorizedOperationException = exports.UnauthorizedOperationException || (exports.UnauthorizedOperationException = {}));
var UpdateAppRequest;
(function (UpdateAppRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateAppRequest");
    }
    UpdateAppRequest.isa = isa;
})(UpdateAppRequest = exports.UpdateAppRequest || (exports.UpdateAppRequest = {}));
var UpdateAppResponse;
(function (UpdateAppResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateAppResponse");
    }
    UpdateAppResponse.isa = isa;
})(UpdateAppResponse = exports.UpdateAppResponse || (exports.UpdateAppResponse = {}));
var UpdateReplicationJobRequest;
(function (UpdateReplicationJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateReplicationJobRequest");
    }
    UpdateReplicationJobRequest.isa = isa;
})(UpdateReplicationJobRequest = exports.UpdateReplicationJobRequest || (exports.UpdateReplicationJobRequest = {}));
var UpdateReplicationJobResponse;
(function (UpdateReplicationJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateReplicationJobResponse");
    }
    UpdateReplicationJobResponse.isa = isa;
})(UpdateReplicationJobResponse = exports.UpdateReplicationJobResponse || (exports.UpdateReplicationJobResponse = {}));
var UserData;
(function (UserData) {
    function isa(o) {
        return smithy_client_1.isa(o, "UserData");
    }
    UserData.isa = isa;
})(UserData = exports.UserData || (exports.UserData = {}));
var VmManagerType;
(function (VmManagerType) {
    VmManagerType["hyperVManager"] = "HYPERV-MANAGER";
    VmManagerType["scvmm"] = "SCVMM";
    VmManagerType["vSphere"] = "VSPHERE";
})(VmManagerType = exports.VmManagerType || (exports.VmManagerType = {}));
var VmServer;
(function (VmServer) {
    function isa(o) {
        return smithy_client_1.isa(o, "VmServer");
    }
    VmServer.isa = isa;
})(VmServer = exports.VmServer || (exports.VmServer = {}));
var VmServerAddress;
(function (VmServerAddress) {
    function isa(o) {
        return smithy_client_1.isa(o, "VmServerAddress");
    }
    VmServerAddress.isa = isa;
})(VmServerAddress = exports.VmServerAddress || (exports.VmServerAddress = {}));
//# sourceMappingURL=index.js.map