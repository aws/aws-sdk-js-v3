"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AgentListEntry;
(function (AgentListEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "AgentListEntry");
    }
    AgentListEntry.isa = isa;
})(AgentListEntry = exports.AgentListEntry || (exports.AgentListEntry = {}));
var AgentStatus;
(function (AgentStatus) {
    AgentStatus["OFFLINE"] = "OFFLINE";
    AgentStatus["ONLINE"] = "ONLINE";
})(AgentStatus = exports.AgentStatus || (exports.AgentStatus = {}));
var Atime;
(function (Atime) {
    Atime["BEST_EFFORT"] = "BEST_EFFORT";
    Atime["NONE"] = "NONE";
})(Atime = exports.Atime || (exports.Atime = {}));
var CancelTaskExecutionRequest;
(function (CancelTaskExecutionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CancelTaskExecutionRequest");
    }
    CancelTaskExecutionRequest.isa = isa;
})(CancelTaskExecutionRequest = exports.CancelTaskExecutionRequest || (exports.CancelTaskExecutionRequest = {}));
var CancelTaskExecutionResponse;
(function (CancelTaskExecutionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CancelTaskExecutionResponse");
    }
    CancelTaskExecutionResponse.isa = isa;
})(CancelTaskExecutionResponse = exports.CancelTaskExecutionResponse || (exports.CancelTaskExecutionResponse = {}));
var CreateAgentRequest;
(function (CreateAgentRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAgentRequest");
    }
    CreateAgentRequest.isa = isa;
})(CreateAgentRequest = exports.CreateAgentRequest || (exports.CreateAgentRequest = {}));
var CreateAgentResponse;
(function (CreateAgentResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAgentResponse");
    }
    CreateAgentResponse.isa = isa;
})(CreateAgentResponse = exports.CreateAgentResponse || (exports.CreateAgentResponse = {}));
var CreateLocationEfsRequest;
(function (CreateLocationEfsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateLocationEfsRequest");
    }
    CreateLocationEfsRequest.isa = isa;
})(CreateLocationEfsRequest = exports.CreateLocationEfsRequest || (exports.CreateLocationEfsRequest = {}));
var CreateLocationEfsResponse;
(function (CreateLocationEfsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateLocationEfsResponse");
    }
    CreateLocationEfsResponse.isa = isa;
})(CreateLocationEfsResponse = exports.CreateLocationEfsResponse || (exports.CreateLocationEfsResponse = {}));
var CreateLocationNfsRequest;
(function (CreateLocationNfsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateLocationNfsRequest");
    }
    CreateLocationNfsRequest.isa = isa;
})(CreateLocationNfsRequest = exports.CreateLocationNfsRequest || (exports.CreateLocationNfsRequest = {}));
var CreateLocationNfsResponse;
(function (CreateLocationNfsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateLocationNfsResponse");
    }
    CreateLocationNfsResponse.isa = isa;
})(CreateLocationNfsResponse = exports.CreateLocationNfsResponse || (exports.CreateLocationNfsResponse = {}));
var CreateLocationS3Request;
(function (CreateLocationS3Request) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateLocationS3Request");
    }
    CreateLocationS3Request.isa = isa;
})(CreateLocationS3Request = exports.CreateLocationS3Request || (exports.CreateLocationS3Request = {}));
var CreateLocationS3Response;
(function (CreateLocationS3Response) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateLocationS3Response");
    }
    CreateLocationS3Response.isa = isa;
})(CreateLocationS3Response = exports.CreateLocationS3Response || (exports.CreateLocationS3Response = {}));
var CreateLocationSmbRequest;
(function (CreateLocationSmbRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateLocationSmbRequest");
    }
    CreateLocationSmbRequest.isa = isa;
})(CreateLocationSmbRequest = exports.CreateLocationSmbRequest || (exports.CreateLocationSmbRequest = {}));
var CreateLocationSmbResponse;
(function (CreateLocationSmbResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateLocationSmbResponse");
    }
    CreateLocationSmbResponse.isa = isa;
})(CreateLocationSmbResponse = exports.CreateLocationSmbResponse || (exports.CreateLocationSmbResponse = {}));
var CreateTaskRequest;
(function (CreateTaskRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateTaskRequest");
    }
    CreateTaskRequest.isa = isa;
})(CreateTaskRequest = exports.CreateTaskRequest || (exports.CreateTaskRequest = {}));
var CreateTaskResponse;
(function (CreateTaskResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateTaskResponse");
    }
    CreateTaskResponse.isa = isa;
})(CreateTaskResponse = exports.CreateTaskResponse || (exports.CreateTaskResponse = {}));
var DeleteAgentRequest;
(function (DeleteAgentRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteAgentRequest");
    }
    DeleteAgentRequest.isa = isa;
})(DeleteAgentRequest = exports.DeleteAgentRequest || (exports.DeleteAgentRequest = {}));
var DeleteAgentResponse;
(function (DeleteAgentResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteAgentResponse");
    }
    DeleteAgentResponse.isa = isa;
})(DeleteAgentResponse = exports.DeleteAgentResponse || (exports.DeleteAgentResponse = {}));
var DeleteLocationRequest;
(function (DeleteLocationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteLocationRequest");
    }
    DeleteLocationRequest.isa = isa;
})(DeleteLocationRequest = exports.DeleteLocationRequest || (exports.DeleteLocationRequest = {}));
var DeleteLocationResponse;
(function (DeleteLocationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteLocationResponse");
    }
    DeleteLocationResponse.isa = isa;
})(DeleteLocationResponse = exports.DeleteLocationResponse || (exports.DeleteLocationResponse = {}));
var DeleteTaskRequest;
(function (DeleteTaskRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteTaskRequest");
    }
    DeleteTaskRequest.isa = isa;
})(DeleteTaskRequest = exports.DeleteTaskRequest || (exports.DeleteTaskRequest = {}));
var DeleteTaskResponse;
(function (DeleteTaskResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteTaskResponse");
    }
    DeleteTaskResponse.isa = isa;
})(DeleteTaskResponse = exports.DeleteTaskResponse || (exports.DeleteTaskResponse = {}));
var DescribeAgentRequest;
(function (DescribeAgentRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAgentRequest");
    }
    DescribeAgentRequest.isa = isa;
})(DescribeAgentRequest = exports.DescribeAgentRequest || (exports.DescribeAgentRequest = {}));
var DescribeAgentResponse;
(function (DescribeAgentResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAgentResponse");
    }
    DescribeAgentResponse.isa = isa;
})(DescribeAgentResponse = exports.DescribeAgentResponse || (exports.DescribeAgentResponse = {}));
var DescribeLocationEfsRequest;
(function (DescribeLocationEfsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeLocationEfsRequest");
    }
    DescribeLocationEfsRequest.isa = isa;
})(DescribeLocationEfsRequest = exports.DescribeLocationEfsRequest || (exports.DescribeLocationEfsRequest = {}));
var DescribeLocationEfsResponse;
(function (DescribeLocationEfsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeLocationEfsResponse");
    }
    DescribeLocationEfsResponse.isa = isa;
})(DescribeLocationEfsResponse = exports.DescribeLocationEfsResponse || (exports.DescribeLocationEfsResponse = {}));
var DescribeLocationNfsRequest;
(function (DescribeLocationNfsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeLocationNfsRequest");
    }
    DescribeLocationNfsRequest.isa = isa;
})(DescribeLocationNfsRequest = exports.DescribeLocationNfsRequest || (exports.DescribeLocationNfsRequest = {}));
var DescribeLocationNfsResponse;
(function (DescribeLocationNfsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeLocationNfsResponse");
    }
    DescribeLocationNfsResponse.isa = isa;
})(DescribeLocationNfsResponse = exports.DescribeLocationNfsResponse || (exports.DescribeLocationNfsResponse = {}));
var DescribeLocationS3Request;
(function (DescribeLocationS3Request) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeLocationS3Request");
    }
    DescribeLocationS3Request.isa = isa;
})(DescribeLocationS3Request = exports.DescribeLocationS3Request || (exports.DescribeLocationS3Request = {}));
var DescribeLocationS3Response;
(function (DescribeLocationS3Response) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeLocationS3Response");
    }
    DescribeLocationS3Response.isa = isa;
})(DescribeLocationS3Response = exports.DescribeLocationS3Response || (exports.DescribeLocationS3Response = {}));
var DescribeLocationSmbRequest;
(function (DescribeLocationSmbRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeLocationSmbRequest");
    }
    DescribeLocationSmbRequest.isa = isa;
})(DescribeLocationSmbRequest = exports.DescribeLocationSmbRequest || (exports.DescribeLocationSmbRequest = {}));
var DescribeLocationSmbResponse;
(function (DescribeLocationSmbResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeLocationSmbResponse");
    }
    DescribeLocationSmbResponse.isa = isa;
})(DescribeLocationSmbResponse = exports.DescribeLocationSmbResponse || (exports.DescribeLocationSmbResponse = {}));
var DescribeTaskExecutionRequest;
(function (DescribeTaskExecutionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTaskExecutionRequest");
    }
    DescribeTaskExecutionRequest.isa = isa;
})(DescribeTaskExecutionRequest = exports.DescribeTaskExecutionRequest || (exports.DescribeTaskExecutionRequest = {}));
var DescribeTaskExecutionResponse;
(function (DescribeTaskExecutionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTaskExecutionResponse");
    }
    DescribeTaskExecutionResponse.isa = isa;
})(DescribeTaskExecutionResponse = exports.DescribeTaskExecutionResponse || (exports.DescribeTaskExecutionResponse = {}));
var DescribeTaskRequest;
(function (DescribeTaskRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTaskRequest");
    }
    DescribeTaskRequest.isa = isa;
})(DescribeTaskRequest = exports.DescribeTaskRequest || (exports.DescribeTaskRequest = {}));
var DescribeTaskResponse;
(function (DescribeTaskResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTaskResponse");
    }
    DescribeTaskResponse.isa = isa;
})(DescribeTaskResponse = exports.DescribeTaskResponse || (exports.DescribeTaskResponse = {}));
var Ec2Config;
(function (Ec2Config) {
    function isa(o) {
        return smithy_client_1.isa(o, "Ec2Config");
    }
    Ec2Config.isa = isa;
})(Ec2Config = exports.Ec2Config || (exports.Ec2Config = {}));
var EndpointType;
(function (EndpointType) {
    EndpointType["FIPS"] = "FIPS";
    EndpointType["PRIVATE_LINK"] = "PRIVATE_LINK";
    EndpointType["PUBLIC"] = "PUBLIC";
})(EndpointType = exports.EndpointType || (exports.EndpointType = {}));
var FilterRule;
(function (FilterRule) {
    function isa(o) {
        return smithy_client_1.isa(o, "FilterRule");
    }
    FilterRule.isa = isa;
})(FilterRule = exports.FilterRule || (exports.FilterRule = {}));
var FilterType;
(function (FilterType) {
    FilterType["SIMPLE_PATTERN"] = "SIMPLE_PATTERN";
})(FilterType = exports.FilterType || (exports.FilterType = {}));
var Gid;
(function (Gid) {
    Gid["BOTH"] = "BOTH";
    Gid["INT_VALUE"] = "INT_VALUE";
    Gid["NAME"] = "NAME";
    Gid["NONE"] = "NONE";
})(Gid = exports.Gid || (exports.Gid = {}));
var InternalException;
(function (InternalException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalException");
    }
    InternalException.isa = isa;
})(InternalException = exports.InternalException || (exports.InternalException = {}));
var InvalidRequestException;
(function (InvalidRequestException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidRequestException");
    }
    InvalidRequestException.isa = isa;
})(InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {}));
var ListAgentsRequest;
(function (ListAgentsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAgentsRequest");
    }
    ListAgentsRequest.isa = isa;
})(ListAgentsRequest = exports.ListAgentsRequest || (exports.ListAgentsRequest = {}));
var ListAgentsResponse;
(function (ListAgentsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAgentsResponse");
    }
    ListAgentsResponse.isa = isa;
})(ListAgentsResponse = exports.ListAgentsResponse || (exports.ListAgentsResponse = {}));
var ListLocationsRequest;
(function (ListLocationsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListLocationsRequest");
    }
    ListLocationsRequest.isa = isa;
})(ListLocationsRequest = exports.ListLocationsRequest || (exports.ListLocationsRequest = {}));
var ListLocationsResponse;
(function (ListLocationsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListLocationsResponse");
    }
    ListLocationsResponse.isa = isa;
})(ListLocationsResponse = exports.ListLocationsResponse || (exports.ListLocationsResponse = {}));
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
var ListTaskExecutionsRequest;
(function (ListTaskExecutionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTaskExecutionsRequest");
    }
    ListTaskExecutionsRequest.isa = isa;
})(ListTaskExecutionsRequest = exports.ListTaskExecutionsRequest || (exports.ListTaskExecutionsRequest = {}));
var ListTaskExecutionsResponse;
(function (ListTaskExecutionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTaskExecutionsResponse");
    }
    ListTaskExecutionsResponse.isa = isa;
})(ListTaskExecutionsResponse = exports.ListTaskExecutionsResponse || (exports.ListTaskExecutionsResponse = {}));
var ListTasksRequest;
(function (ListTasksRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTasksRequest");
    }
    ListTasksRequest.isa = isa;
})(ListTasksRequest = exports.ListTasksRequest || (exports.ListTasksRequest = {}));
var ListTasksResponse;
(function (ListTasksResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTasksResponse");
    }
    ListTasksResponse.isa = isa;
})(ListTasksResponse = exports.ListTasksResponse || (exports.ListTasksResponse = {}));
var LocationListEntry;
(function (LocationListEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "LocationListEntry");
    }
    LocationListEntry.isa = isa;
})(LocationListEntry = exports.LocationListEntry || (exports.LocationListEntry = {}));
var Mtime;
(function (Mtime) {
    Mtime["NONE"] = "NONE";
    Mtime["PRESERVE"] = "PRESERVE";
})(Mtime = exports.Mtime || (exports.Mtime = {}));
var NfsMountOptions;
(function (NfsMountOptions) {
    function isa(o) {
        return smithy_client_1.isa(o, "NfsMountOptions");
    }
    NfsMountOptions.isa = isa;
})(NfsMountOptions = exports.NfsMountOptions || (exports.NfsMountOptions = {}));
var NfsVersion;
(function (NfsVersion) {
    NfsVersion["AUTOMATIC"] = "AUTOMATIC";
    NfsVersion["NFS3"] = "NFS3";
    NfsVersion["NFS4_0"] = "NFS4_0";
    NfsVersion["NFS4_1"] = "NFS4_1";
})(NfsVersion = exports.NfsVersion || (exports.NfsVersion = {}));
var OnPremConfig;
(function (OnPremConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "OnPremConfig");
    }
    OnPremConfig.isa = isa;
})(OnPremConfig = exports.OnPremConfig || (exports.OnPremConfig = {}));
var Options;
(function (Options) {
    function isa(o) {
        return smithy_client_1.isa(o, "Options");
    }
    Options.isa = isa;
})(Options = exports.Options || (exports.Options = {}));
var OverwriteMode;
(function (OverwriteMode) {
    OverwriteMode["ALWAYS"] = "ALWAYS";
    OverwriteMode["NEVER"] = "NEVER";
})(OverwriteMode = exports.OverwriteMode || (exports.OverwriteMode = {}));
var PhaseStatus;
(function (PhaseStatus) {
    PhaseStatus["ERROR"] = "ERROR";
    PhaseStatus["PENDING"] = "PENDING";
    PhaseStatus["SUCCESS"] = "SUCCESS";
})(PhaseStatus = exports.PhaseStatus || (exports.PhaseStatus = {}));
var PosixPermissions;
(function (PosixPermissions) {
    PosixPermissions["NONE"] = "NONE";
    PosixPermissions["PRESERVE"] = "PRESERVE";
})(PosixPermissions = exports.PosixPermissions || (exports.PosixPermissions = {}));
var PreserveDeletedFiles;
(function (PreserveDeletedFiles) {
    PreserveDeletedFiles["PRESERVE"] = "PRESERVE";
    PreserveDeletedFiles["REMOVE"] = "REMOVE";
})(PreserveDeletedFiles = exports.PreserveDeletedFiles || (exports.PreserveDeletedFiles = {}));
var PreserveDevices;
(function (PreserveDevices) {
    PreserveDevices["NONE"] = "NONE";
    PreserveDevices["PRESERVE"] = "PRESERVE";
})(PreserveDevices = exports.PreserveDevices || (exports.PreserveDevices = {}));
var PrivateLinkConfig;
(function (PrivateLinkConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "PrivateLinkConfig");
    }
    PrivateLinkConfig.isa = isa;
})(PrivateLinkConfig = exports.PrivateLinkConfig || (exports.PrivateLinkConfig = {}));
var S3Config;
(function (S3Config) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3Config");
    }
    S3Config.isa = isa;
})(S3Config = exports.S3Config || (exports.S3Config = {}));
var S3StorageClass;
(function (S3StorageClass) {
    S3StorageClass["DEEP_ARCHIVE"] = "DEEP_ARCHIVE";
    S3StorageClass["GLACIER"] = "GLACIER";
    S3StorageClass["INTELLIGENT_TIERING"] = "INTELLIGENT_TIERING";
    S3StorageClass["ONEZONE_IA"] = "ONEZONE_IA";
    S3StorageClass["STANDARD"] = "STANDARD";
    S3StorageClass["STANDARD_IA"] = "STANDARD_IA";
})(S3StorageClass = exports.S3StorageClass || (exports.S3StorageClass = {}));
var SmbMountOptions;
(function (SmbMountOptions) {
    function isa(o) {
        return smithy_client_1.isa(o, "SmbMountOptions");
    }
    SmbMountOptions.isa = isa;
})(SmbMountOptions = exports.SmbMountOptions || (exports.SmbMountOptions = {}));
var SmbVersion;
(function (SmbVersion) {
    SmbVersion["AUTOMATIC"] = "AUTOMATIC";
    SmbVersion["SMB2"] = "SMB2";
    SmbVersion["SMB3"] = "SMB3";
})(SmbVersion = exports.SmbVersion || (exports.SmbVersion = {}));
var StartTaskExecutionRequest;
(function (StartTaskExecutionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartTaskExecutionRequest");
    }
    StartTaskExecutionRequest.isa = isa;
})(StartTaskExecutionRequest = exports.StartTaskExecutionRequest || (exports.StartTaskExecutionRequest = {}));
var StartTaskExecutionResponse;
(function (StartTaskExecutionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartTaskExecutionResponse");
    }
    StartTaskExecutionResponse.isa = isa;
})(StartTaskExecutionResponse = exports.StartTaskExecutionResponse || (exports.StartTaskExecutionResponse = {}));
var TagListEntry;
(function (TagListEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagListEntry");
    }
    TagListEntry.isa = isa;
})(TagListEntry = exports.TagListEntry || (exports.TagListEntry = {}));
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
var TaskExecutionListEntry;
(function (TaskExecutionListEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "TaskExecutionListEntry");
    }
    TaskExecutionListEntry.isa = isa;
})(TaskExecutionListEntry = exports.TaskExecutionListEntry || (exports.TaskExecutionListEntry = {}));
var TaskExecutionResultDetail;
(function (TaskExecutionResultDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "TaskExecutionResultDetail");
    }
    TaskExecutionResultDetail.isa = isa;
})(TaskExecutionResultDetail = exports.TaskExecutionResultDetail || (exports.TaskExecutionResultDetail = {}));
var TaskExecutionStatus;
(function (TaskExecutionStatus) {
    TaskExecutionStatus["ERROR"] = "ERROR";
    TaskExecutionStatus["LAUNCHING"] = "LAUNCHING";
    TaskExecutionStatus["PREPARING"] = "PREPARING";
    TaskExecutionStatus["QUEUED"] = "QUEUED";
    TaskExecutionStatus["SUCCESS"] = "SUCCESS";
    TaskExecutionStatus["TRANSFERRING"] = "TRANSFERRING";
    TaskExecutionStatus["VERIFYING"] = "VERIFYING";
})(TaskExecutionStatus = exports.TaskExecutionStatus || (exports.TaskExecutionStatus = {}));
var TaskListEntry;
(function (TaskListEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "TaskListEntry");
    }
    TaskListEntry.isa = isa;
})(TaskListEntry = exports.TaskListEntry || (exports.TaskListEntry = {}));
var TaskQueueing;
(function (TaskQueueing) {
    TaskQueueing["DISABLED"] = "DISABLED";
    TaskQueueing["ENABLED"] = "ENABLED";
})(TaskQueueing = exports.TaskQueueing || (exports.TaskQueueing = {}));
var TaskSchedule;
(function (TaskSchedule) {
    function isa(o) {
        return smithy_client_1.isa(o, "TaskSchedule");
    }
    TaskSchedule.isa = isa;
})(TaskSchedule = exports.TaskSchedule || (exports.TaskSchedule = {}));
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["AVAILABLE"] = "AVAILABLE";
    TaskStatus["CREATING"] = "CREATING";
    TaskStatus["QUEUED"] = "QUEUED";
    TaskStatus["RUNNING"] = "RUNNING";
    TaskStatus["UNAVAILABLE"] = "UNAVAILABLE";
})(TaskStatus = exports.TaskStatus || (exports.TaskStatus = {}));
var Uid;
(function (Uid) {
    Uid["BOTH"] = "BOTH";
    Uid["INT_VALUE"] = "INT_VALUE";
    Uid["NAME"] = "NAME";
    Uid["NONE"] = "NONE";
})(Uid = exports.Uid || (exports.Uid = {}));
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
var UpdateAgentRequest;
(function (UpdateAgentRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateAgentRequest");
    }
    UpdateAgentRequest.isa = isa;
})(UpdateAgentRequest = exports.UpdateAgentRequest || (exports.UpdateAgentRequest = {}));
var UpdateAgentResponse;
(function (UpdateAgentResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateAgentResponse");
    }
    UpdateAgentResponse.isa = isa;
})(UpdateAgentResponse = exports.UpdateAgentResponse || (exports.UpdateAgentResponse = {}));
var UpdateTaskRequest;
(function (UpdateTaskRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateTaskRequest");
    }
    UpdateTaskRequest.isa = isa;
})(UpdateTaskRequest = exports.UpdateTaskRequest || (exports.UpdateTaskRequest = {}));
var UpdateTaskResponse;
(function (UpdateTaskResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateTaskResponse");
    }
    UpdateTaskResponse.isa = isa;
})(UpdateTaskResponse = exports.UpdateTaskResponse || (exports.UpdateTaskResponse = {}));
var VerifyMode;
(function (VerifyMode) {
    VerifyMode["NONE"] = "NONE";
    VerifyMode["ONLY_FILES_TRANSFERRED"] = "ONLY_FILES_TRANSFERRED";
    VerifyMode["POINT_IN_TIME_CONSISTENT"] = "POINT_IN_TIME_CONSISTENT";
})(VerifyMode = exports.VerifyMode || (exports.VerifyMode = {}));
//# sourceMappingURL=index.js.map