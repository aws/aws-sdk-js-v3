"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var Backup;
(function (Backup) {
    function isa(o) {
        return smithy_client_1.isa(o, "Backup");
    }
    Backup.isa = isa;
})(Backup = exports.Backup || (exports.Backup = {}));
var BackupPolicy;
(function (BackupPolicy) {
    BackupPolicy["DEFAULT"] = "DEFAULT";
})(BackupPolicy = exports.BackupPolicy || (exports.BackupPolicy = {}));
var BackupState;
(function (BackupState) {
    BackupState["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
    BackupState["DELETED"] = "DELETED";
    BackupState["PENDING_DELETION"] = "PENDING_DELETION";
    BackupState["READY"] = "READY";
})(BackupState = exports.BackupState || (exports.BackupState = {}));
var Certificates;
(function (Certificates) {
    function isa(o) {
        return smithy_client_1.isa(o, "Certificates");
    }
    Certificates.isa = isa;
})(Certificates = exports.Certificates || (exports.Certificates = {}));
var Cluster;
(function (Cluster) {
    function isa(o) {
        return smithy_client_1.isa(o, "Cluster");
    }
    Cluster.isa = isa;
})(Cluster = exports.Cluster || (exports.Cluster = {}));
var ClusterState;
(function (ClusterState) {
    ClusterState["ACTIVE"] = "ACTIVE";
    ClusterState["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
    ClusterState["DEGRADED"] = "DEGRADED";
    ClusterState["DELETED"] = "DELETED";
    ClusterState["DELETE_IN_PROGRESS"] = "DELETE_IN_PROGRESS";
    ClusterState["INITIALIZED"] = "INITIALIZED";
    ClusterState["INITIALIZE_IN_PROGRESS"] = "INITIALIZE_IN_PROGRESS";
    ClusterState["UNINITIALIZED"] = "UNINITIALIZED";
    ClusterState["UPDATE_IN_PROGRESS"] = "UPDATE_IN_PROGRESS";
})(ClusterState = exports.ClusterState || (exports.ClusterState = {}));
var CopyBackupToRegionRequest;
(function (CopyBackupToRegionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CopyBackupToRegionRequest");
    }
    CopyBackupToRegionRequest.isa = isa;
})(CopyBackupToRegionRequest = exports.CopyBackupToRegionRequest || (exports.CopyBackupToRegionRequest = {}));
var CopyBackupToRegionResponse;
(function (CopyBackupToRegionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CopyBackupToRegionResponse");
    }
    CopyBackupToRegionResponse.isa = isa;
})(CopyBackupToRegionResponse = exports.CopyBackupToRegionResponse || (exports.CopyBackupToRegionResponse = {}));
var CreateClusterRequest;
(function (CreateClusterRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateClusterRequest");
    }
    CreateClusterRequest.isa = isa;
})(CreateClusterRequest = exports.CreateClusterRequest || (exports.CreateClusterRequest = {}));
var CreateClusterResponse;
(function (CreateClusterResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateClusterResponse");
    }
    CreateClusterResponse.isa = isa;
})(CreateClusterResponse = exports.CreateClusterResponse || (exports.CreateClusterResponse = {}));
var CreateHsmRequest;
(function (CreateHsmRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateHsmRequest");
    }
    CreateHsmRequest.isa = isa;
})(CreateHsmRequest = exports.CreateHsmRequest || (exports.CreateHsmRequest = {}));
var CreateHsmResponse;
(function (CreateHsmResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateHsmResponse");
    }
    CreateHsmResponse.isa = isa;
})(CreateHsmResponse = exports.CreateHsmResponse || (exports.CreateHsmResponse = {}));
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
var DeleteClusterRequest;
(function (DeleteClusterRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteClusterRequest");
    }
    DeleteClusterRequest.isa = isa;
})(DeleteClusterRequest = exports.DeleteClusterRequest || (exports.DeleteClusterRequest = {}));
var DeleteClusterResponse;
(function (DeleteClusterResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteClusterResponse");
    }
    DeleteClusterResponse.isa = isa;
})(DeleteClusterResponse = exports.DeleteClusterResponse || (exports.DeleteClusterResponse = {}));
var DeleteHsmRequest;
(function (DeleteHsmRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteHsmRequest");
    }
    DeleteHsmRequest.isa = isa;
})(DeleteHsmRequest = exports.DeleteHsmRequest || (exports.DeleteHsmRequest = {}));
var DeleteHsmResponse;
(function (DeleteHsmResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteHsmResponse");
    }
    DeleteHsmResponse.isa = isa;
})(DeleteHsmResponse = exports.DeleteHsmResponse || (exports.DeleteHsmResponse = {}));
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
var DescribeClustersRequest;
(function (DescribeClustersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeClustersRequest");
    }
    DescribeClustersRequest.isa = isa;
})(DescribeClustersRequest = exports.DescribeClustersRequest || (exports.DescribeClustersRequest = {}));
var DescribeClustersResponse;
(function (DescribeClustersResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeClustersResponse");
    }
    DescribeClustersResponse.isa = isa;
})(DescribeClustersResponse = exports.DescribeClustersResponse || (exports.DescribeClustersResponse = {}));
var DestinationBackup;
(function (DestinationBackup) {
    function isa(o) {
        return smithy_client_1.isa(o, "DestinationBackup");
    }
    DestinationBackup.isa = isa;
})(DestinationBackup = exports.DestinationBackup || (exports.DestinationBackup = {}));
var Hsm;
(function (Hsm) {
    function isa(o) {
        return smithy_client_1.isa(o, "Hsm");
    }
    Hsm.isa = isa;
})(Hsm = exports.Hsm || (exports.Hsm = {}));
var HsmState;
(function (HsmState) {
    HsmState["ACTIVE"] = "ACTIVE";
    HsmState["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
    HsmState["DEGRADED"] = "DEGRADED";
    HsmState["DELETED"] = "DELETED";
    HsmState["DELETE_IN_PROGRESS"] = "DELETE_IN_PROGRESS";
})(HsmState = exports.HsmState || (exports.HsmState = {}));
var InitializeClusterRequest;
(function (InitializeClusterRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "InitializeClusterRequest");
    }
    InitializeClusterRequest.isa = isa;
})(InitializeClusterRequest = exports.InitializeClusterRequest || (exports.InitializeClusterRequest = {}));
var InitializeClusterResponse;
(function (InitializeClusterResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "InitializeClusterResponse");
    }
    InitializeClusterResponse.isa = isa;
})(InitializeClusterResponse = exports.InitializeClusterResponse || (exports.InitializeClusterResponse = {}));
var ListTagsRequest;
(function (ListTagsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsRequest");
    }
    ListTagsRequest.isa = isa;
})(ListTagsRequest = exports.ListTagsRequest || (exports.ListTagsRequest = {}));
var ListTagsResponse;
(function (ListTagsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsResponse");
    }
    ListTagsResponse.isa = isa;
})(ListTagsResponse = exports.ListTagsResponse || (exports.ListTagsResponse = {}));
var RestoreBackupRequest;
(function (RestoreBackupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RestoreBackupRequest");
    }
    RestoreBackupRequest.isa = isa;
})(RestoreBackupRequest = exports.RestoreBackupRequest || (exports.RestoreBackupRequest = {}));
var RestoreBackupResponse;
(function (RestoreBackupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "RestoreBackupResponse");
    }
    RestoreBackupResponse.isa = isa;
})(RestoreBackupResponse = exports.RestoreBackupResponse || (exports.RestoreBackupResponse = {}));
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
var CloudHsmAccessDeniedException;
(function (CloudHsmAccessDeniedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CloudHsmAccessDeniedException");
    }
    CloudHsmAccessDeniedException.isa = isa;
})(CloudHsmAccessDeniedException = exports.CloudHsmAccessDeniedException || (exports.CloudHsmAccessDeniedException = {}));
var CloudHsmInternalFailureException;
(function (CloudHsmInternalFailureException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CloudHsmInternalFailureException");
    }
    CloudHsmInternalFailureException.isa = isa;
})(CloudHsmInternalFailureException = exports.CloudHsmInternalFailureException || (exports.CloudHsmInternalFailureException = {}));
var CloudHsmInvalidRequestException;
(function (CloudHsmInvalidRequestException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CloudHsmInvalidRequestException");
    }
    CloudHsmInvalidRequestException.isa = isa;
})(CloudHsmInvalidRequestException = exports.CloudHsmInvalidRequestException || (exports.CloudHsmInvalidRequestException = {}));
var CloudHsmResourceNotFoundException;
(function (CloudHsmResourceNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CloudHsmResourceNotFoundException");
    }
    CloudHsmResourceNotFoundException.isa = isa;
})(CloudHsmResourceNotFoundException = exports.CloudHsmResourceNotFoundException || (exports.CloudHsmResourceNotFoundException = {}));
var CloudHsmServiceException;
(function (CloudHsmServiceException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CloudHsmServiceException");
    }
    CloudHsmServiceException.isa = isa;
})(CloudHsmServiceException = exports.CloudHsmServiceException || (exports.CloudHsmServiceException = {}));
var CloudHsmTagException;
(function (CloudHsmTagException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CloudHsmTagException");
    }
    CloudHsmTagException.isa = isa;
})(CloudHsmTagException = exports.CloudHsmTagException || (exports.CloudHsmTagException = {}));
//# sourceMappingURL=index.js.map