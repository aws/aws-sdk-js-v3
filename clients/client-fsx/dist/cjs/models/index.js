"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var ActiveDirectoryBackupAttributes;
(function (ActiveDirectoryBackupAttributes) {
    function isa(o) {
        return smithy_client_1.isa(o, "ActiveDirectoryBackupAttributes");
    }
    ActiveDirectoryBackupAttributes.isa = isa;
})(ActiveDirectoryBackupAttributes = exports.ActiveDirectoryBackupAttributes || (exports.ActiveDirectoryBackupAttributes = {}));
var ActiveDirectoryError;
(function (ActiveDirectoryError) {
    function isa(o) {
        return smithy_client_1.isa(o, "ActiveDirectoryError");
    }
    ActiveDirectoryError.isa = isa;
})(ActiveDirectoryError = exports.ActiveDirectoryError || (exports.ActiveDirectoryError = {}));
var ActiveDirectoryErrorType;
(function (ActiveDirectoryErrorType) {
    ActiveDirectoryErrorType["DOMAIN_NOT_FOUND"] = "DOMAIN_NOT_FOUND";
    ActiveDirectoryErrorType["INCOMPATIBLE_DOMAIN_MODE"] = "INCOMPATIBLE_DOMAIN_MODE";
    ActiveDirectoryErrorType["INVALID_DOMAIN_STAGE"] = "INVALID_DOMAIN_STAGE";
    ActiveDirectoryErrorType["WRONG_VPC"] = "WRONG_VPC";
})(ActiveDirectoryErrorType = exports.ActiveDirectoryErrorType || (exports.ActiveDirectoryErrorType = {}));
var Backup;
(function (Backup) {
    function isa(o) {
        return smithy_client_1.isa(o, "Backup");
    }
    Backup.isa = isa;
})(Backup = exports.Backup || (exports.Backup = {}));
var BackupFailureDetails;
(function (BackupFailureDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "BackupFailureDetails");
    }
    BackupFailureDetails.isa = isa;
})(BackupFailureDetails = exports.BackupFailureDetails || (exports.BackupFailureDetails = {}));
var BackupInProgress;
(function (BackupInProgress) {
    function isa(o) {
        return smithy_client_1.isa(o, "BackupInProgress");
    }
    BackupInProgress.isa = isa;
})(BackupInProgress = exports.BackupInProgress || (exports.BackupInProgress = {}));
var BackupLifecycle;
(function (BackupLifecycle) {
    BackupLifecycle["AVAILABLE"] = "AVAILABLE";
    BackupLifecycle["CREATING"] = "CREATING";
    BackupLifecycle["DELETED"] = "DELETED";
    BackupLifecycle["FAILED"] = "FAILED";
})(BackupLifecycle = exports.BackupLifecycle || (exports.BackupLifecycle = {}));
var BackupNotFound;
(function (BackupNotFound) {
    function isa(o) {
        return smithy_client_1.isa(o, "BackupNotFound");
    }
    BackupNotFound.isa = isa;
})(BackupNotFound = exports.BackupNotFound || (exports.BackupNotFound = {}));
var BackupRestoring;
(function (BackupRestoring) {
    function isa(o) {
        return smithy_client_1.isa(o, "BackupRestoring");
    }
    BackupRestoring.isa = isa;
})(BackupRestoring = exports.BackupRestoring || (exports.BackupRestoring = {}));
var BackupType;
(function (BackupType) {
    BackupType["AUTOMATIC"] = "AUTOMATIC";
    BackupType["USER_INITIATED"] = "USER_INITIATED";
})(BackupType = exports.BackupType || (exports.BackupType = {}));
var BadRequest;
(function (BadRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "BadRequest");
    }
    BadRequest.isa = isa;
})(BadRequest = exports.BadRequest || (exports.BadRequest = {}));
var CancelDataRepositoryTaskRequest;
(function (CancelDataRepositoryTaskRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CancelDataRepositoryTaskRequest");
    }
    CancelDataRepositoryTaskRequest.isa = isa;
})(CancelDataRepositoryTaskRequest = exports.CancelDataRepositoryTaskRequest || (exports.CancelDataRepositoryTaskRequest = {}));
var CancelDataRepositoryTaskResponse;
(function (CancelDataRepositoryTaskResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CancelDataRepositoryTaskResponse");
    }
    CancelDataRepositoryTaskResponse.isa = isa;
})(CancelDataRepositoryTaskResponse = exports.CancelDataRepositoryTaskResponse || (exports.CancelDataRepositoryTaskResponse = {}));
var CompletionReport;
(function (CompletionReport) {
    function isa(o) {
        return smithy_client_1.isa(o, "CompletionReport");
    }
    CompletionReport.isa = isa;
})(CompletionReport = exports.CompletionReport || (exports.CompletionReport = {}));
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
var CreateDataRepositoryTaskRequest;
(function (CreateDataRepositoryTaskRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDataRepositoryTaskRequest");
    }
    CreateDataRepositoryTaskRequest.isa = isa;
})(CreateDataRepositoryTaskRequest = exports.CreateDataRepositoryTaskRequest || (exports.CreateDataRepositoryTaskRequest = {}));
var CreateDataRepositoryTaskResponse;
(function (CreateDataRepositoryTaskResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDataRepositoryTaskResponse");
    }
    CreateDataRepositoryTaskResponse.isa = isa;
})(CreateDataRepositoryTaskResponse = exports.CreateDataRepositoryTaskResponse || (exports.CreateDataRepositoryTaskResponse = {}));
var CreateFileSystemFromBackupRequest;
(function (CreateFileSystemFromBackupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateFileSystemFromBackupRequest");
    }
    CreateFileSystemFromBackupRequest.isa = isa;
})(CreateFileSystemFromBackupRequest = exports.CreateFileSystemFromBackupRequest || (exports.CreateFileSystemFromBackupRequest = {}));
var CreateFileSystemFromBackupResponse;
(function (CreateFileSystemFromBackupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateFileSystemFromBackupResponse");
    }
    CreateFileSystemFromBackupResponse.isa = isa;
})(CreateFileSystemFromBackupResponse = exports.CreateFileSystemFromBackupResponse || (exports.CreateFileSystemFromBackupResponse = {}));
var CreateFileSystemLustreConfiguration;
(function (CreateFileSystemLustreConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateFileSystemLustreConfiguration");
    }
    CreateFileSystemLustreConfiguration.isa = isa;
})(CreateFileSystemLustreConfiguration = exports.CreateFileSystemLustreConfiguration || (exports.CreateFileSystemLustreConfiguration = {}));
var CreateFileSystemRequest;
(function (CreateFileSystemRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateFileSystemRequest");
    }
    CreateFileSystemRequest.isa = isa;
})(CreateFileSystemRequest = exports.CreateFileSystemRequest || (exports.CreateFileSystemRequest = {}));
var CreateFileSystemResponse;
(function (CreateFileSystemResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateFileSystemResponse");
    }
    CreateFileSystemResponse.isa = isa;
})(CreateFileSystemResponse = exports.CreateFileSystemResponse || (exports.CreateFileSystemResponse = {}));
var CreateFileSystemWindowsConfiguration;
(function (CreateFileSystemWindowsConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateFileSystemWindowsConfiguration");
    }
    CreateFileSystemWindowsConfiguration.isa = isa;
})(CreateFileSystemWindowsConfiguration = exports.CreateFileSystemWindowsConfiguration || (exports.CreateFileSystemWindowsConfiguration = {}));
var DataRepositoryConfiguration;
(function (DataRepositoryConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "DataRepositoryConfiguration");
    }
    DataRepositoryConfiguration.isa = isa;
})(DataRepositoryConfiguration = exports.DataRepositoryConfiguration || (exports.DataRepositoryConfiguration = {}));
var DataRepositoryTask;
(function (DataRepositoryTask) {
    function isa(o) {
        return smithy_client_1.isa(o, "DataRepositoryTask");
    }
    DataRepositoryTask.isa = isa;
})(DataRepositoryTask = exports.DataRepositoryTask || (exports.DataRepositoryTask = {}));
var DataRepositoryTaskEnded;
(function (DataRepositoryTaskEnded) {
    function isa(o) {
        return smithy_client_1.isa(o, "DataRepositoryTaskEnded");
    }
    DataRepositoryTaskEnded.isa = isa;
})(DataRepositoryTaskEnded = exports.DataRepositoryTaskEnded || (exports.DataRepositoryTaskEnded = {}));
var DataRepositoryTaskExecuting;
(function (DataRepositoryTaskExecuting) {
    function isa(o) {
        return smithy_client_1.isa(o, "DataRepositoryTaskExecuting");
    }
    DataRepositoryTaskExecuting.isa = isa;
})(DataRepositoryTaskExecuting = exports.DataRepositoryTaskExecuting || (exports.DataRepositoryTaskExecuting = {}));
var DataRepositoryTaskFailureDetails;
(function (DataRepositoryTaskFailureDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "DataRepositoryTaskFailureDetails");
    }
    DataRepositoryTaskFailureDetails.isa = isa;
})(DataRepositoryTaskFailureDetails = exports.DataRepositoryTaskFailureDetails || (exports.DataRepositoryTaskFailureDetails = {}));
var DataRepositoryTaskFilter;
(function (DataRepositoryTaskFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "DataRepositoryTaskFilter");
    }
    DataRepositoryTaskFilter.isa = isa;
})(DataRepositoryTaskFilter = exports.DataRepositoryTaskFilter || (exports.DataRepositoryTaskFilter = {}));
var DataRepositoryTaskFilterName;
(function (DataRepositoryTaskFilterName) {
    DataRepositoryTaskFilterName["FILE_SYSTEM_ID"] = "file-system-id";
    DataRepositoryTaskFilterName["TASK_LIFECYCLE"] = "task-lifecycle";
})(DataRepositoryTaskFilterName = exports.DataRepositoryTaskFilterName || (exports.DataRepositoryTaskFilterName = {}));
var DataRepositoryTaskLifecycle;
(function (DataRepositoryTaskLifecycle) {
    DataRepositoryTaskLifecycle["CANCELED"] = "CANCELED";
    DataRepositoryTaskLifecycle["CANCELING"] = "CANCELING";
    DataRepositoryTaskLifecycle["EXECUTING"] = "EXECUTING";
    DataRepositoryTaskLifecycle["FAILED"] = "FAILED";
    DataRepositoryTaskLifecycle["PENDING"] = "PENDING";
    DataRepositoryTaskLifecycle["SUCCEEDED"] = "SUCCEEDED";
})(DataRepositoryTaskLifecycle = exports.DataRepositoryTaskLifecycle || (exports.DataRepositoryTaskLifecycle = {}));
var DataRepositoryTaskNotFound;
(function (DataRepositoryTaskNotFound) {
    function isa(o) {
        return smithy_client_1.isa(o, "DataRepositoryTaskNotFound");
    }
    DataRepositoryTaskNotFound.isa = isa;
})(DataRepositoryTaskNotFound = exports.DataRepositoryTaskNotFound || (exports.DataRepositoryTaskNotFound = {}));
var DataRepositoryTaskStatus;
(function (DataRepositoryTaskStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "DataRepositoryTaskStatus");
    }
    DataRepositoryTaskStatus.isa = isa;
})(DataRepositoryTaskStatus = exports.DataRepositoryTaskStatus || (exports.DataRepositoryTaskStatus = {}));
var DataRepositoryTaskType;
(function (DataRepositoryTaskType) {
    DataRepositoryTaskType["EXPORT"] = "EXPORT_TO_REPOSITORY";
})(DataRepositoryTaskType = exports.DataRepositoryTaskType || (exports.DataRepositoryTaskType = {}));
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
var DeleteFileSystemRequest;
(function (DeleteFileSystemRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteFileSystemRequest");
    }
    DeleteFileSystemRequest.isa = isa;
})(DeleteFileSystemRequest = exports.DeleteFileSystemRequest || (exports.DeleteFileSystemRequest = {}));
var DeleteFileSystemResponse;
(function (DeleteFileSystemResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteFileSystemResponse");
    }
    DeleteFileSystemResponse.isa = isa;
})(DeleteFileSystemResponse = exports.DeleteFileSystemResponse || (exports.DeleteFileSystemResponse = {}));
var DeleteFileSystemWindowsConfiguration;
(function (DeleteFileSystemWindowsConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteFileSystemWindowsConfiguration");
    }
    DeleteFileSystemWindowsConfiguration.isa = isa;
})(DeleteFileSystemWindowsConfiguration = exports.DeleteFileSystemWindowsConfiguration || (exports.DeleteFileSystemWindowsConfiguration = {}));
var DeleteFileSystemWindowsResponse;
(function (DeleteFileSystemWindowsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteFileSystemWindowsResponse");
    }
    DeleteFileSystemWindowsResponse.isa = isa;
})(DeleteFileSystemWindowsResponse = exports.DeleteFileSystemWindowsResponse || (exports.DeleteFileSystemWindowsResponse = {}));
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
var DescribeDataRepositoryTasksRequest;
(function (DescribeDataRepositoryTasksRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDataRepositoryTasksRequest");
    }
    DescribeDataRepositoryTasksRequest.isa = isa;
})(DescribeDataRepositoryTasksRequest = exports.DescribeDataRepositoryTasksRequest || (exports.DescribeDataRepositoryTasksRequest = {}));
var DescribeDataRepositoryTasksResponse;
(function (DescribeDataRepositoryTasksResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDataRepositoryTasksResponse");
    }
    DescribeDataRepositoryTasksResponse.isa = isa;
})(DescribeDataRepositoryTasksResponse = exports.DescribeDataRepositoryTasksResponse || (exports.DescribeDataRepositoryTasksResponse = {}));
var DescribeFileSystemsRequest;
(function (DescribeFileSystemsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeFileSystemsRequest");
    }
    DescribeFileSystemsRequest.isa = isa;
})(DescribeFileSystemsRequest = exports.DescribeFileSystemsRequest || (exports.DescribeFileSystemsRequest = {}));
var DescribeFileSystemsResponse;
(function (DescribeFileSystemsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeFileSystemsResponse");
    }
    DescribeFileSystemsResponse.isa = isa;
})(DescribeFileSystemsResponse = exports.DescribeFileSystemsResponse || (exports.DescribeFileSystemsResponse = {}));
var FileSystem;
(function (FileSystem) {
    function isa(o) {
        return smithy_client_1.isa(o, "FileSystem");
    }
    FileSystem.isa = isa;
})(FileSystem = exports.FileSystem || (exports.FileSystem = {}));
var FileSystemFailureDetails;
(function (FileSystemFailureDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "FileSystemFailureDetails");
    }
    FileSystemFailureDetails.isa = isa;
})(FileSystemFailureDetails = exports.FileSystemFailureDetails || (exports.FileSystemFailureDetails = {}));
var FileSystemLifecycle;
(function (FileSystemLifecycle) {
    FileSystemLifecycle["AVAILABLE"] = "AVAILABLE";
    FileSystemLifecycle["CREATING"] = "CREATING";
    FileSystemLifecycle["DELETING"] = "DELETING";
    FileSystemLifecycle["FAILED"] = "FAILED";
    FileSystemLifecycle["MISCONFIGURED"] = "MISCONFIGURED";
    FileSystemLifecycle["UPDATING"] = "UPDATING";
})(FileSystemLifecycle = exports.FileSystemLifecycle || (exports.FileSystemLifecycle = {}));
var FileSystemMaintenanceOperation;
(function (FileSystemMaintenanceOperation) {
    FileSystemMaintenanceOperation["BACKING_UP"] = "BACKING_UP";
    FileSystemMaintenanceOperation["PATCHING"] = "PATCHING";
})(FileSystemMaintenanceOperation = exports.FileSystemMaintenanceOperation || (exports.FileSystemMaintenanceOperation = {}));
var FileSystemNotFound;
(function (FileSystemNotFound) {
    function isa(o) {
        return smithy_client_1.isa(o, "FileSystemNotFound");
    }
    FileSystemNotFound.isa = isa;
})(FileSystemNotFound = exports.FileSystemNotFound || (exports.FileSystemNotFound = {}));
var FileSystemType;
(function (FileSystemType) {
    FileSystemType["LUSTRE"] = "LUSTRE";
    FileSystemType["WINDOWS"] = "WINDOWS";
})(FileSystemType = exports.FileSystemType || (exports.FileSystemType = {}));
var Filter;
(function (Filter) {
    function isa(o) {
        return smithy_client_1.isa(o, "Filter");
    }
    Filter.isa = isa;
})(Filter = exports.Filter || (exports.Filter = {}));
var FilterName;
(function (FilterName) {
    FilterName["BACKUP_TYPE"] = "backup-type";
    FilterName["FILE_SYSTEM_ID"] = "file-system-id";
})(FilterName = exports.FilterName || (exports.FilterName = {}));
var IncompatibleParameterError;
(function (IncompatibleParameterError) {
    function isa(o) {
        return smithy_client_1.isa(o, "IncompatibleParameterError");
    }
    IncompatibleParameterError.isa = isa;
})(IncompatibleParameterError = exports.IncompatibleParameterError || (exports.IncompatibleParameterError = {}));
var InternalServerError;
(function (InternalServerError) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalServerError");
    }
    InternalServerError.isa = isa;
})(InternalServerError = exports.InternalServerError || (exports.InternalServerError = {}));
var InvalidExportPath;
(function (InvalidExportPath) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidExportPath");
    }
    InvalidExportPath.isa = isa;
})(InvalidExportPath = exports.InvalidExportPath || (exports.InvalidExportPath = {}));
var InvalidImportPath;
(function (InvalidImportPath) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidImportPath");
    }
    InvalidImportPath.isa = isa;
})(InvalidImportPath = exports.InvalidImportPath || (exports.InvalidImportPath = {}));
var InvalidNetworkSettings;
(function (InvalidNetworkSettings) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidNetworkSettings");
    }
    InvalidNetworkSettings.isa = isa;
})(InvalidNetworkSettings = exports.InvalidNetworkSettings || (exports.InvalidNetworkSettings = {}));
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
var LustreFileSystemConfiguration;
(function (LustreFileSystemConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "LustreFileSystemConfiguration");
    }
    LustreFileSystemConfiguration.isa = isa;
})(LustreFileSystemConfiguration = exports.LustreFileSystemConfiguration || (exports.LustreFileSystemConfiguration = {}));
var MissingFileSystemConfiguration;
(function (MissingFileSystemConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "MissingFileSystemConfiguration");
    }
    MissingFileSystemConfiguration.isa = isa;
})(MissingFileSystemConfiguration = exports.MissingFileSystemConfiguration || (exports.MissingFileSystemConfiguration = {}));
var NotServiceResourceError;
(function (NotServiceResourceError) {
    function isa(o) {
        return smithy_client_1.isa(o, "NotServiceResourceError");
    }
    NotServiceResourceError.isa = isa;
})(NotServiceResourceError = exports.NotServiceResourceError || (exports.NotServiceResourceError = {}));
var ReportFormat;
(function (ReportFormat) {
    ReportFormat["REPORT_CSV_20191124"] = "REPORT_CSV_20191124";
})(ReportFormat = exports.ReportFormat || (exports.ReportFormat = {}));
var ReportScope;
(function (ReportScope) {
    ReportScope["FAILED_FILES_ONLY"] = "FAILED_FILES_ONLY";
})(ReportScope = exports.ReportScope || (exports.ReportScope = {}));
var ResourceDoesNotSupportTagging;
(function (ResourceDoesNotSupportTagging) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceDoesNotSupportTagging");
    }
    ResourceDoesNotSupportTagging.isa = isa;
})(ResourceDoesNotSupportTagging = exports.ResourceDoesNotSupportTagging || (exports.ResourceDoesNotSupportTagging = {}));
var ResourceNotFound;
(function (ResourceNotFound) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNotFound");
    }
    ResourceNotFound.isa = isa;
})(ResourceNotFound = exports.ResourceNotFound || (exports.ResourceNotFound = {}));
var SelfManagedActiveDirectoryAttributes;
(function (SelfManagedActiveDirectoryAttributes) {
    function isa(o) {
        return smithy_client_1.isa(o, "SelfManagedActiveDirectoryAttributes");
    }
    SelfManagedActiveDirectoryAttributes.isa = isa;
})(SelfManagedActiveDirectoryAttributes = exports.SelfManagedActiveDirectoryAttributes || (exports.SelfManagedActiveDirectoryAttributes = {}));
var SelfManagedActiveDirectoryConfiguration;
(function (SelfManagedActiveDirectoryConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "SelfManagedActiveDirectoryConfiguration");
    }
    SelfManagedActiveDirectoryConfiguration.isa = isa;
})(SelfManagedActiveDirectoryConfiguration = exports.SelfManagedActiveDirectoryConfiguration || (exports.SelfManagedActiveDirectoryConfiguration = {}));
var SelfManagedActiveDirectoryConfigurationUpdates;
(function (SelfManagedActiveDirectoryConfigurationUpdates) {
    function isa(o) {
        return smithy_client_1.isa(o, "SelfManagedActiveDirectoryConfigurationUpdates");
    }
    SelfManagedActiveDirectoryConfigurationUpdates.isa = isa;
})(SelfManagedActiveDirectoryConfigurationUpdates = exports.SelfManagedActiveDirectoryConfigurationUpdates || (exports.SelfManagedActiveDirectoryConfigurationUpdates = {}));
var ServiceLimit;
(function (ServiceLimit) {
    ServiceLimit["FILE_SYSTEM_COUNT"] = "FILE_SYSTEM_COUNT";
    ServiceLimit["TOTAL_STORAGE"] = "TOTAL_STORAGE";
    ServiceLimit["TOTAL_THROUGHPUT_CAPACITY"] = "TOTAL_THROUGHPUT_CAPACITY";
    ServiceLimit["TOTAL_USER_INITIATED_BACKUPS"] = "TOTAL_USER_INITIATED_BACKUPS";
})(ServiceLimit = exports.ServiceLimit || (exports.ServiceLimit = {}));
var ServiceLimitExceeded;
(function (ServiceLimitExceeded) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceLimitExceeded");
    }
    ServiceLimitExceeded.isa = isa;
})(ServiceLimitExceeded = exports.ServiceLimitExceeded || (exports.ServiceLimitExceeded = {}));
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
var UnsupportedOperation;
(function (UnsupportedOperation) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnsupportedOperation");
    }
    UnsupportedOperation.isa = isa;
})(UnsupportedOperation = exports.UnsupportedOperation || (exports.UnsupportedOperation = {}));
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
var UpdateFileSystemLustreConfiguration;
(function (UpdateFileSystemLustreConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateFileSystemLustreConfiguration");
    }
    UpdateFileSystemLustreConfiguration.isa = isa;
})(UpdateFileSystemLustreConfiguration = exports.UpdateFileSystemLustreConfiguration || (exports.UpdateFileSystemLustreConfiguration = {}));
var UpdateFileSystemRequest;
(function (UpdateFileSystemRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateFileSystemRequest");
    }
    UpdateFileSystemRequest.isa = isa;
})(UpdateFileSystemRequest = exports.UpdateFileSystemRequest || (exports.UpdateFileSystemRequest = {}));
var UpdateFileSystemResponse;
(function (UpdateFileSystemResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateFileSystemResponse");
    }
    UpdateFileSystemResponse.isa = isa;
})(UpdateFileSystemResponse = exports.UpdateFileSystemResponse || (exports.UpdateFileSystemResponse = {}));
var UpdateFileSystemWindowsConfiguration;
(function (UpdateFileSystemWindowsConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateFileSystemWindowsConfiguration");
    }
    UpdateFileSystemWindowsConfiguration.isa = isa;
})(UpdateFileSystemWindowsConfiguration = exports.UpdateFileSystemWindowsConfiguration || (exports.UpdateFileSystemWindowsConfiguration = {}));
var WindowsDeploymentType;
(function (WindowsDeploymentType) {
    WindowsDeploymentType["MULTI_AZ_1"] = "MULTI_AZ_1";
    WindowsDeploymentType["SINGLE_AZ_1"] = "SINGLE_AZ_1";
})(WindowsDeploymentType = exports.WindowsDeploymentType || (exports.WindowsDeploymentType = {}));
var WindowsFileSystemConfiguration;
(function (WindowsFileSystemConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "WindowsFileSystemConfiguration");
    }
    WindowsFileSystemConfiguration.isa = isa;
})(WindowsFileSystemConfiguration = exports.WindowsFileSystemConfiguration || (exports.WindowsFileSystemConfiguration = {}));
//# sourceMappingURL=index.js.map