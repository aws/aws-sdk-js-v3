"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccessDeniedException;
(function (AccessDeniedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AccessDeniedException");
    }
    AccessDeniedException.isa = isa;
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var ApplicationState;
(function (ApplicationState) {
    function isa(o) {
        return smithy_client_1.isa(o, "ApplicationState");
    }
    ApplicationState.isa = isa;
})(ApplicationState = exports.ApplicationState || (exports.ApplicationState = {}));
var ApplicationStatus;
(function (ApplicationStatus) {
    ApplicationStatus["COMPLETED"] = "COMPLETED";
    ApplicationStatus["IN_PROGRESS"] = "IN_PROGRESS";
    ApplicationStatus["NOT_STARTED"] = "NOT_STARTED";
})(ApplicationStatus = exports.ApplicationStatus || (exports.ApplicationStatus = {}));
var AssociateCreatedArtifactRequest;
(function (AssociateCreatedArtifactRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateCreatedArtifactRequest");
    }
    AssociateCreatedArtifactRequest.isa = isa;
})(AssociateCreatedArtifactRequest = exports.AssociateCreatedArtifactRequest || (exports.AssociateCreatedArtifactRequest = {}));
var AssociateCreatedArtifactResult;
(function (AssociateCreatedArtifactResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateCreatedArtifactResult");
    }
    AssociateCreatedArtifactResult.isa = isa;
})(AssociateCreatedArtifactResult = exports.AssociateCreatedArtifactResult || (exports.AssociateCreatedArtifactResult = {}));
var AssociateDiscoveredResourceRequest;
(function (AssociateDiscoveredResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateDiscoveredResourceRequest");
    }
    AssociateDiscoveredResourceRequest.isa = isa;
})(AssociateDiscoveredResourceRequest = exports.AssociateDiscoveredResourceRequest || (exports.AssociateDiscoveredResourceRequest = {}));
var AssociateDiscoveredResourceResult;
(function (AssociateDiscoveredResourceResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateDiscoveredResourceResult");
    }
    AssociateDiscoveredResourceResult.isa = isa;
})(AssociateDiscoveredResourceResult = exports.AssociateDiscoveredResourceResult || (exports.AssociateDiscoveredResourceResult = {}));
var CreateProgressUpdateStreamRequest;
(function (CreateProgressUpdateStreamRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateProgressUpdateStreamRequest");
    }
    CreateProgressUpdateStreamRequest.isa = isa;
})(CreateProgressUpdateStreamRequest = exports.CreateProgressUpdateStreamRequest || (exports.CreateProgressUpdateStreamRequest = {}));
var CreateProgressUpdateStreamResult;
(function (CreateProgressUpdateStreamResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateProgressUpdateStreamResult");
    }
    CreateProgressUpdateStreamResult.isa = isa;
})(CreateProgressUpdateStreamResult = exports.CreateProgressUpdateStreamResult || (exports.CreateProgressUpdateStreamResult = {}));
var CreatedArtifact;
(function (CreatedArtifact) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreatedArtifact");
    }
    CreatedArtifact.isa = isa;
})(CreatedArtifact = exports.CreatedArtifact || (exports.CreatedArtifact = {}));
var DeleteProgressUpdateStreamRequest;
(function (DeleteProgressUpdateStreamRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteProgressUpdateStreamRequest");
    }
    DeleteProgressUpdateStreamRequest.isa = isa;
})(DeleteProgressUpdateStreamRequest = exports.DeleteProgressUpdateStreamRequest || (exports.DeleteProgressUpdateStreamRequest = {}));
var DeleteProgressUpdateStreamResult;
(function (DeleteProgressUpdateStreamResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteProgressUpdateStreamResult");
    }
    DeleteProgressUpdateStreamResult.isa = isa;
})(DeleteProgressUpdateStreamResult = exports.DeleteProgressUpdateStreamResult || (exports.DeleteProgressUpdateStreamResult = {}));
var DescribeApplicationStateRequest;
(function (DescribeApplicationStateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeApplicationStateRequest");
    }
    DescribeApplicationStateRequest.isa = isa;
})(DescribeApplicationStateRequest = exports.DescribeApplicationStateRequest || (exports.DescribeApplicationStateRequest = {}));
var DescribeApplicationStateResult;
(function (DescribeApplicationStateResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeApplicationStateResult");
    }
    DescribeApplicationStateResult.isa = isa;
})(DescribeApplicationStateResult = exports.DescribeApplicationStateResult || (exports.DescribeApplicationStateResult = {}));
var DescribeMigrationTaskRequest;
(function (DescribeMigrationTaskRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeMigrationTaskRequest");
    }
    DescribeMigrationTaskRequest.isa = isa;
})(DescribeMigrationTaskRequest = exports.DescribeMigrationTaskRequest || (exports.DescribeMigrationTaskRequest = {}));
var DescribeMigrationTaskResult;
(function (DescribeMigrationTaskResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeMigrationTaskResult");
    }
    DescribeMigrationTaskResult.isa = isa;
})(DescribeMigrationTaskResult = exports.DescribeMigrationTaskResult || (exports.DescribeMigrationTaskResult = {}));
var DisassociateCreatedArtifactRequest;
(function (DisassociateCreatedArtifactRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateCreatedArtifactRequest");
    }
    DisassociateCreatedArtifactRequest.isa = isa;
})(DisassociateCreatedArtifactRequest = exports.DisassociateCreatedArtifactRequest || (exports.DisassociateCreatedArtifactRequest = {}));
var DisassociateCreatedArtifactResult;
(function (DisassociateCreatedArtifactResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateCreatedArtifactResult");
    }
    DisassociateCreatedArtifactResult.isa = isa;
})(DisassociateCreatedArtifactResult = exports.DisassociateCreatedArtifactResult || (exports.DisassociateCreatedArtifactResult = {}));
var DisassociateDiscoveredResourceRequest;
(function (DisassociateDiscoveredResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateDiscoveredResourceRequest");
    }
    DisassociateDiscoveredResourceRequest.isa = isa;
})(DisassociateDiscoveredResourceRequest = exports.DisassociateDiscoveredResourceRequest || (exports.DisassociateDiscoveredResourceRequest = {}));
var DisassociateDiscoveredResourceResult;
(function (DisassociateDiscoveredResourceResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateDiscoveredResourceResult");
    }
    DisassociateDiscoveredResourceResult.isa = isa;
})(DisassociateDiscoveredResourceResult = exports.DisassociateDiscoveredResourceResult || (exports.DisassociateDiscoveredResourceResult = {}));
var DiscoveredResource;
(function (DiscoveredResource) {
    function isa(o) {
        return smithy_client_1.isa(o, "DiscoveredResource");
    }
    DiscoveredResource.isa = isa;
})(DiscoveredResource = exports.DiscoveredResource || (exports.DiscoveredResource = {}));
var DryRunOperation;
(function (DryRunOperation) {
    function isa(o) {
        return smithy_client_1.isa(o, "DryRunOperation");
    }
    DryRunOperation.isa = isa;
})(DryRunOperation = exports.DryRunOperation || (exports.DryRunOperation = {}));
var HomeRegionNotSetException;
(function (HomeRegionNotSetException) {
    function isa(o) {
        return smithy_client_1.isa(o, "HomeRegionNotSetException");
    }
    HomeRegionNotSetException.isa = isa;
})(HomeRegionNotSetException = exports.HomeRegionNotSetException || (exports.HomeRegionNotSetException = {}));
var ImportMigrationTaskRequest;
(function (ImportMigrationTaskRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ImportMigrationTaskRequest");
    }
    ImportMigrationTaskRequest.isa = isa;
})(ImportMigrationTaskRequest = exports.ImportMigrationTaskRequest || (exports.ImportMigrationTaskRequest = {}));
var ImportMigrationTaskResult;
(function (ImportMigrationTaskResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ImportMigrationTaskResult");
    }
    ImportMigrationTaskResult.isa = isa;
})(ImportMigrationTaskResult = exports.ImportMigrationTaskResult || (exports.ImportMigrationTaskResult = {}));
var InternalServerError;
(function (InternalServerError) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalServerError");
    }
    InternalServerError.isa = isa;
})(InternalServerError = exports.InternalServerError || (exports.InternalServerError = {}));
var InvalidInputException;
(function (InvalidInputException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidInputException");
    }
    InvalidInputException.isa = isa;
})(InvalidInputException = exports.InvalidInputException || (exports.InvalidInputException = {}));
var ListApplicationStatesRequest;
(function (ListApplicationStatesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListApplicationStatesRequest");
    }
    ListApplicationStatesRequest.isa = isa;
})(ListApplicationStatesRequest = exports.ListApplicationStatesRequest || (exports.ListApplicationStatesRequest = {}));
var ListApplicationStatesResult;
(function (ListApplicationStatesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListApplicationStatesResult");
    }
    ListApplicationStatesResult.isa = isa;
})(ListApplicationStatesResult = exports.ListApplicationStatesResult || (exports.ListApplicationStatesResult = {}));
var ListCreatedArtifactsRequest;
(function (ListCreatedArtifactsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListCreatedArtifactsRequest");
    }
    ListCreatedArtifactsRequest.isa = isa;
})(ListCreatedArtifactsRequest = exports.ListCreatedArtifactsRequest || (exports.ListCreatedArtifactsRequest = {}));
var ListCreatedArtifactsResult;
(function (ListCreatedArtifactsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListCreatedArtifactsResult");
    }
    ListCreatedArtifactsResult.isa = isa;
})(ListCreatedArtifactsResult = exports.ListCreatedArtifactsResult || (exports.ListCreatedArtifactsResult = {}));
var ListDiscoveredResourcesRequest;
(function (ListDiscoveredResourcesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDiscoveredResourcesRequest");
    }
    ListDiscoveredResourcesRequest.isa = isa;
})(ListDiscoveredResourcesRequest = exports.ListDiscoveredResourcesRequest || (exports.ListDiscoveredResourcesRequest = {}));
var ListDiscoveredResourcesResult;
(function (ListDiscoveredResourcesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDiscoveredResourcesResult");
    }
    ListDiscoveredResourcesResult.isa = isa;
})(ListDiscoveredResourcesResult = exports.ListDiscoveredResourcesResult || (exports.ListDiscoveredResourcesResult = {}));
var ListMigrationTasksRequest;
(function (ListMigrationTasksRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListMigrationTasksRequest");
    }
    ListMigrationTasksRequest.isa = isa;
})(ListMigrationTasksRequest = exports.ListMigrationTasksRequest || (exports.ListMigrationTasksRequest = {}));
var ListMigrationTasksResult;
(function (ListMigrationTasksResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListMigrationTasksResult");
    }
    ListMigrationTasksResult.isa = isa;
})(ListMigrationTasksResult = exports.ListMigrationTasksResult || (exports.ListMigrationTasksResult = {}));
var ListProgressUpdateStreamsRequest;
(function (ListProgressUpdateStreamsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListProgressUpdateStreamsRequest");
    }
    ListProgressUpdateStreamsRequest.isa = isa;
})(ListProgressUpdateStreamsRequest = exports.ListProgressUpdateStreamsRequest || (exports.ListProgressUpdateStreamsRequest = {}));
var ListProgressUpdateStreamsResult;
(function (ListProgressUpdateStreamsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListProgressUpdateStreamsResult");
    }
    ListProgressUpdateStreamsResult.isa = isa;
})(ListProgressUpdateStreamsResult = exports.ListProgressUpdateStreamsResult || (exports.ListProgressUpdateStreamsResult = {}));
var MigrationTask;
(function (MigrationTask) {
    function isa(o) {
        return smithy_client_1.isa(o, "MigrationTask");
    }
    MigrationTask.isa = isa;
})(MigrationTask = exports.MigrationTask || (exports.MigrationTask = {}));
var MigrationTaskSummary;
(function (MigrationTaskSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "MigrationTaskSummary");
    }
    MigrationTaskSummary.isa = isa;
})(MigrationTaskSummary = exports.MigrationTaskSummary || (exports.MigrationTaskSummary = {}));
var NotifyApplicationStateRequest;
(function (NotifyApplicationStateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "NotifyApplicationStateRequest");
    }
    NotifyApplicationStateRequest.isa = isa;
})(NotifyApplicationStateRequest = exports.NotifyApplicationStateRequest || (exports.NotifyApplicationStateRequest = {}));
var NotifyApplicationStateResult;
(function (NotifyApplicationStateResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "NotifyApplicationStateResult");
    }
    NotifyApplicationStateResult.isa = isa;
})(NotifyApplicationStateResult = exports.NotifyApplicationStateResult || (exports.NotifyApplicationStateResult = {}));
var NotifyMigrationTaskStateRequest;
(function (NotifyMigrationTaskStateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "NotifyMigrationTaskStateRequest");
    }
    NotifyMigrationTaskStateRequest.isa = isa;
})(NotifyMigrationTaskStateRequest = exports.NotifyMigrationTaskStateRequest || (exports.NotifyMigrationTaskStateRequest = {}));
var NotifyMigrationTaskStateResult;
(function (NotifyMigrationTaskStateResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "NotifyMigrationTaskStateResult");
    }
    NotifyMigrationTaskStateResult.isa = isa;
})(NotifyMigrationTaskStateResult = exports.NotifyMigrationTaskStateResult || (exports.NotifyMigrationTaskStateResult = {}));
var PolicyErrorException;
(function (PolicyErrorException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PolicyErrorException");
    }
    PolicyErrorException.isa = isa;
})(PolicyErrorException = exports.PolicyErrorException || (exports.PolicyErrorException = {}));
var ProgressUpdateStreamSummary;
(function (ProgressUpdateStreamSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProgressUpdateStreamSummary");
    }
    ProgressUpdateStreamSummary.isa = isa;
})(ProgressUpdateStreamSummary = exports.ProgressUpdateStreamSummary || (exports.ProgressUpdateStreamSummary = {}));
var PutResourceAttributesRequest;
(function (PutResourceAttributesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutResourceAttributesRequest");
    }
    PutResourceAttributesRequest.isa = isa;
})(PutResourceAttributesRequest = exports.PutResourceAttributesRequest || (exports.PutResourceAttributesRequest = {}));
var PutResourceAttributesResult;
(function (PutResourceAttributesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutResourceAttributesResult");
    }
    PutResourceAttributesResult.isa = isa;
})(PutResourceAttributesResult = exports.PutResourceAttributesResult || (exports.PutResourceAttributesResult = {}));
var ResourceAttribute;
(function (ResourceAttribute) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceAttribute");
    }
    ResourceAttribute.isa = isa;
})(ResourceAttribute = exports.ResourceAttribute || (exports.ResourceAttribute = {}));
var ResourceAttributeType;
(function (ResourceAttributeType) {
    ResourceAttributeType["BIOS_ID"] = "BIOS_ID";
    ResourceAttributeType["FQDN"] = "FQDN";
    ResourceAttributeType["IPV4_ADDRESS"] = "IPV4_ADDRESS";
    ResourceAttributeType["IPV6_ADDRESS"] = "IPV6_ADDRESS";
    ResourceAttributeType["MAC_ADDRESS"] = "MAC_ADDRESS";
    ResourceAttributeType["MOTHERBOARD_SERIAL_NUMBER"] = "MOTHERBOARD_SERIAL_NUMBER";
    ResourceAttributeType["VM_MANAGED_OBJECT_REFERENCE"] = "VM_MANAGED_OBJECT_REFERENCE";
    ResourceAttributeType["VM_MANAGER_ID"] = "VM_MANAGER_ID";
    ResourceAttributeType["VM_NAME"] = "VM_NAME";
    ResourceAttributeType["VM_PATH"] = "VM_PATH";
})(ResourceAttributeType = exports.ResourceAttributeType || (exports.ResourceAttributeType = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNotFoundException");
    }
    ResourceNotFoundException.isa = isa;
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceUnavailableException");
    }
    ServiceUnavailableException.isa = isa;
})(ServiceUnavailableException = exports.ServiceUnavailableException || (exports.ServiceUnavailableException = {}));
var Status;
(function (Status) {
    Status["COMPLETED"] = "COMPLETED";
    Status["FAILED"] = "FAILED";
    Status["IN_PROGRESS"] = "IN_PROGRESS";
    Status["NOT_STARTED"] = "NOT_STARTED";
})(Status = exports.Status || (exports.Status = {}));
var Task;
(function (Task) {
    function isa(o) {
        return smithy_client_1.isa(o, "Task");
    }
    Task.isa = isa;
})(Task = exports.Task || (exports.Task = {}));
var UnauthorizedOperation;
(function (UnauthorizedOperation) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnauthorizedOperation");
    }
    UnauthorizedOperation.isa = isa;
})(UnauthorizedOperation = exports.UnauthorizedOperation || (exports.UnauthorizedOperation = {}));
//# sourceMappingURL=index.js.map