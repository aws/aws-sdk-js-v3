"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccountAttribute;
(function (AccountAttribute) {
    function isa(o) {
        return smithy_client_1.isa(o, "AccountAttribute");
    }
    AccountAttribute.isa = isa;
})(AccountAttribute = exports.AccountAttribute || (exports.AccountAttribute = {}));
var AssociateNodeRequest;
(function (AssociateNodeRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateNodeRequest");
    }
    AssociateNodeRequest.isa = isa;
})(AssociateNodeRequest = exports.AssociateNodeRequest || (exports.AssociateNodeRequest = {}));
var AssociateNodeResponse;
(function (AssociateNodeResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateNodeResponse");
    }
    AssociateNodeResponse.isa = isa;
})(AssociateNodeResponse = exports.AssociateNodeResponse || (exports.AssociateNodeResponse = {}));
var Backup;
(function (Backup) {
    function isa(o) {
        return smithy_client_1.isa(o, "Backup");
    }
    Backup.isa = isa;
})(Backup = exports.Backup || (exports.Backup = {}));
var BackupStatus;
(function (BackupStatus) {
    BackupStatus["DELETING"] = "DELETING";
    BackupStatus["FAILED"] = "FAILED";
    BackupStatus["IN_PROGRESS"] = "IN_PROGRESS";
    BackupStatus["OK"] = "OK";
})(BackupStatus = exports.BackupStatus || (exports.BackupStatus = {}));
var BackupType;
(function (BackupType) {
    BackupType["AUTOMATED"] = "AUTOMATED";
    BackupType["MANUAL"] = "MANUAL";
})(BackupType = exports.BackupType || (exports.BackupType = {}));
var CreateBackupRequest;
(function (CreateBackupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateBackupRequest");
    }
    CreateBackupRequest.isa = isa;
})(CreateBackupRequest = exports.CreateBackupRequest || (exports.CreateBackupRequest = {}));
var CreateBackupResponse;
(function (CreateBackupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateBackupResponse");
    }
    CreateBackupResponse.isa = isa;
})(CreateBackupResponse = exports.CreateBackupResponse || (exports.CreateBackupResponse = {}));
var CreateServerRequest;
(function (CreateServerRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateServerRequest");
    }
    CreateServerRequest.isa = isa;
})(CreateServerRequest = exports.CreateServerRequest || (exports.CreateServerRequest = {}));
var CreateServerResponse;
(function (CreateServerResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateServerResponse");
    }
    CreateServerResponse.isa = isa;
})(CreateServerResponse = exports.CreateServerResponse || (exports.CreateServerResponse = {}));
var DeleteBackupRequest;
(function (DeleteBackupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteBackupRequest");
    }
    DeleteBackupRequest.isa = isa;
})(DeleteBackupRequest = exports.DeleteBackupRequest || (exports.DeleteBackupRequest = {}));
var DeleteBackupResponse;
(function (DeleteBackupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteBackupResponse");
    }
    DeleteBackupResponse.isa = isa;
})(DeleteBackupResponse = exports.DeleteBackupResponse || (exports.DeleteBackupResponse = {}));
var DeleteServerRequest;
(function (DeleteServerRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteServerRequest");
    }
    DeleteServerRequest.isa = isa;
})(DeleteServerRequest = exports.DeleteServerRequest || (exports.DeleteServerRequest = {}));
var DeleteServerResponse;
(function (DeleteServerResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteServerResponse");
    }
    DeleteServerResponse.isa = isa;
})(DeleteServerResponse = exports.DeleteServerResponse || (exports.DeleteServerResponse = {}));
var DescribeAccountAttributesRequest;
(function (DescribeAccountAttributesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAccountAttributesRequest");
    }
    DescribeAccountAttributesRequest.isa = isa;
})(DescribeAccountAttributesRequest = exports.DescribeAccountAttributesRequest || (exports.DescribeAccountAttributesRequest = {}));
var DescribeAccountAttributesResponse;
(function (DescribeAccountAttributesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAccountAttributesResponse");
    }
    DescribeAccountAttributesResponse.isa = isa;
})(DescribeAccountAttributesResponse = exports.DescribeAccountAttributesResponse || (exports.DescribeAccountAttributesResponse = {}));
var DescribeBackupsRequest;
(function (DescribeBackupsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeBackupsRequest");
    }
    DescribeBackupsRequest.isa = isa;
})(DescribeBackupsRequest = exports.DescribeBackupsRequest || (exports.DescribeBackupsRequest = {}));
var DescribeBackupsResponse;
(function (DescribeBackupsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeBackupsResponse");
    }
    DescribeBackupsResponse.isa = isa;
})(DescribeBackupsResponse = exports.DescribeBackupsResponse || (exports.DescribeBackupsResponse = {}));
var DescribeEventsRequest;
(function (DescribeEventsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEventsRequest");
    }
    DescribeEventsRequest.isa = isa;
})(DescribeEventsRequest = exports.DescribeEventsRequest || (exports.DescribeEventsRequest = {}));
var DescribeEventsResponse;
(function (DescribeEventsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEventsResponse");
    }
    DescribeEventsResponse.isa = isa;
})(DescribeEventsResponse = exports.DescribeEventsResponse || (exports.DescribeEventsResponse = {}));
var DescribeNodeAssociationStatusRequest;
(function (DescribeNodeAssociationStatusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeNodeAssociationStatusRequest");
    }
    DescribeNodeAssociationStatusRequest.isa = isa;
})(DescribeNodeAssociationStatusRequest = exports.DescribeNodeAssociationStatusRequest || (exports.DescribeNodeAssociationStatusRequest = {}));
var DescribeNodeAssociationStatusResponse;
(function (DescribeNodeAssociationStatusResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeNodeAssociationStatusResponse");
    }
    DescribeNodeAssociationStatusResponse.isa = isa;
})(DescribeNodeAssociationStatusResponse = exports.DescribeNodeAssociationStatusResponse || (exports.DescribeNodeAssociationStatusResponse = {}));
var DescribeServersRequest;
(function (DescribeServersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeServersRequest");
    }
    DescribeServersRequest.isa = isa;
})(DescribeServersRequest = exports.DescribeServersRequest || (exports.DescribeServersRequest = {}));
var DescribeServersResponse;
(function (DescribeServersResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeServersResponse");
    }
    DescribeServersResponse.isa = isa;
})(DescribeServersResponse = exports.DescribeServersResponse || (exports.DescribeServersResponse = {}));
var DisassociateNodeRequest;
(function (DisassociateNodeRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateNodeRequest");
    }
    DisassociateNodeRequest.isa = isa;
})(DisassociateNodeRequest = exports.DisassociateNodeRequest || (exports.DisassociateNodeRequest = {}));
var DisassociateNodeResponse;
(function (DisassociateNodeResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateNodeResponse");
    }
    DisassociateNodeResponse.isa = isa;
})(DisassociateNodeResponse = exports.DisassociateNodeResponse || (exports.DisassociateNodeResponse = {}));
var EngineAttribute;
(function (EngineAttribute) {
    function isa(o) {
        return smithy_client_1.isa(o, "EngineAttribute");
    }
    EngineAttribute.isa = isa;
})(EngineAttribute = exports.EngineAttribute || (exports.EngineAttribute = {}));
var ExportServerEngineAttributeRequest;
(function (ExportServerEngineAttributeRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExportServerEngineAttributeRequest");
    }
    ExportServerEngineAttributeRequest.isa = isa;
})(ExportServerEngineAttributeRequest = exports.ExportServerEngineAttributeRequest || (exports.ExportServerEngineAttributeRequest = {}));
var ExportServerEngineAttributeResponse;
(function (ExportServerEngineAttributeResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExportServerEngineAttributeResponse");
    }
    ExportServerEngineAttributeResponse.isa = isa;
})(ExportServerEngineAttributeResponse = exports.ExportServerEngineAttributeResponse || (exports.ExportServerEngineAttributeResponse = {}));
var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidNextTokenException");
    }
    InvalidNextTokenException.isa = isa;
})(InvalidNextTokenException = exports.InvalidNextTokenException || (exports.InvalidNextTokenException = {}));
var InvalidStateException;
(function (InvalidStateException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidStateException");
    }
    InvalidStateException.isa = isa;
})(InvalidStateException = exports.InvalidStateException || (exports.InvalidStateException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
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
var MaintenanceStatus;
(function (MaintenanceStatus) {
    MaintenanceStatus["FAILED"] = "FAILED";
    MaintenanceStatus["SUCCESS"] = "SUCCESS";
})(MaintenanceStatus = exports.MaintenanceStatus || (exports.MaintenanceStatus = {}));
var NodeAssociationStatus;
(function (NodeAssociationStatus) {
    NodeAssociationStatus["FAILED"] = "FAILED";
    NodeAssociationStatus["IN_PROGRESS"] = "IN_PROGRESS";
    NodeAssociationStatus["SUCCESS"] = "SUCCESS";
})(NodeAssociationStatus = exports.NodeAssociationStatus || (exports.NodeAssociationStatus = {}));
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
var RestoreServerRequest;
(function (RestoreServerRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RestoreServerRequest");
    }
    RestoreServerRequest.isa = isa;
})(RestoreServerRequest = exports.RestoreServerRequest || (exports.RestoreServerRequest = {}));
var RestoreServerResponse;
(function (RestoreServerResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "RestoreServerResponse");
    }
    RestoreServerResponse.isa = isa;
})(RestoreServerResponse = exports.RestoreServerResponse || (exports.RestoreServerResponse = {}));
var Server;
(function (Server) {
    function isa(o) {
        return smithy_client_1.isa(o, "Server");
    }
    Server.isa = isa;
})(Server = exports.Server || (exports.Server = {}));
var ServerEvent;
(function (ServerEvent) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServerEvent");
    }
    ServerEvent.isa = isa;
})(ServerEvent = exports.ServerEvent || (exports.ServerEvent = {}));
var ServerStatus;
(function (ServerStatus) {
    ServerStatus["BACKING_UP"] = "BACKING_UP";
    ServerStatus["CONNECTION_LOST"] = "CONNECTION_LOST";
    ServerStatus["CREATING"] = "CREATING";
    ServerStatus["DELETING"] = "DELETING";
    ServerStatus["FAILED"] = "FAILED";
    ServerStatus["HEALTHY"] = "HEALTHY";
    ServerStatus["MODIFYING"] = "MODIFYING";
    ServerStatus["RESTORING"] = "RESTORING";
    ServerStatus["RUNNING"] = "RUNNING";
    ServerStatus["SETUP"] = "SETUP";
    ServerStatus["TERMINATED"] = "TERMINATED";
    ServerStatus["UNDER_MAINTENANCE"] = "UNDER_MAINTENANCE";
    ServerStatus["UNHEALTHY"] = "UNHEALTHY";
})(ServerStatus = exports.ServerStatus || (exports.ServerStatus = {}));
var StartMaintenanceRequest;
(function (StartMaintenanceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartMaintenanceRequest");
    }
    StartMaintenanceRequest.isa = isa;
})(StartMaintenanceRequest = exports.StartMaintenanceRequest || (exports.StartMaintenanceRequest = {}));
var StartMaintenanceResponse;
(function (StartMaintenanceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartMaintenanceResponse");
    }
    StartMaintenanceResponse.isa = isa;
})(StartMaintenanceResponse = exports.StartMaintenanceResponse || (exports.StartMaintenanceResponse = {}));
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
var TagResourceResponse;
(function (TagResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagResourceResponse");
    }
    TagResourceResponse.isa = isa;
})(TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceRequest");
    }
    UntagResourceRequest.isa = isa;
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UntagResourceResponse;
(function (UntagResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceResponse");
    }
    UntagResourceResponse.isa = isa;
})(UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {}));
var UpdateServerEngineAttributesRequest;
(function (UpdateServerEngineAttributesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateServerEngineAttributesRequest");
    }
    UpdateServerEngineAttributesRequest.isa = isa;
})(UpdateServerEngineAttributesRequest = exports.UpdateServerEngineAttributesRequest || (exports.UpdateServerEngineAttributesRequest = {}));
var UpdateServerEngineAttributesResponse;
(function (UpdateServerEngineAttributesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateServerEngineAttributesResponse");
    }
    UpdateServerEngineAttributesResponse.isa = isa;
})(UpdateServerEngineAttributesResponse = exports.UpdateServerEngineAttributesResponse || (exports.UpdateServerEngineAttributesResponse = {}));
var UpdateServerRequest;
(function (UpdateServerRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateServerRequest");
    }
    UpdateServerRequest.isa = isa;
})(UpdateServerRequest = exports.UpdateServerRequest || (exports.UpdateServerRequest = {}));
var UpdateServerResponse;
(function (UpdateServerResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateServerResponse");
    }
    UpdateServerResponse.isa = isa;
})(UpdateServerResponse = exports.UpdateServerResponse || (exports.UpdateServerResponse = {}));
var ValidationException;
(function (ValidationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ValidationException");
    }
    ValidationException.isa = isa;
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
//# sourceMappingURL=index.js.map