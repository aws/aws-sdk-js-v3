"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var GetTagsRequest;
(function (GetTagsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTagsRequest");
    }
    GetTagsRequest.isa = isa;
})(GetTagsRequest = exports.GetTagsRequest || (exports.GetTagsRequest = {}));
var GetTagsResponse;
(function (GetTagsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTagsResponse");
    }
    GetTagsResponse.isa = isa;
})(GetTagsResponse = exports.GetTagsResponse || (exports.GetTagsResponse = {}));
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
var CloudWatchEncryptionMode;
(function (CloudWatchEncryptionMode) {
    CloudWatchEncryptionMode["DISABLED"] = "DISABLED";
    CloudWatchEncryptionMode["SSEKMS"] = "SSE-KMS";
})(CloudWatchEncryptionMode = exports.CloudWatchEncryptionMode || (exports.CloudWatchEncryptionMode = {}));
var ExistCondition;
(function (ExistCondition) {
    ExistCondition["MUST_EXIST"] = "MUST_EXIST";
    ExistCondition["NONE"] = "NONE";
    ExistCondition["NOT_EXIST"] = "NOT_EXIST";
})(ExistCondition = exports.ExistCondition || (exports.ExistCondition = {}));
var JobBookmarksEncryptionMode;
(function (JobBookmarksEncryptionMode) {
    JobBookmarksEncryptionMode["CSEKMS"] = "CSE-KMS";
    JobBookmarksEncryptionMode["DISABLED"] = "DISABLED";
})(JobBookmarksEncryptionMode = exports.JobBookmarksEncryptionMode || (exports.JobBookmarksEncryptionMode = {}));
var S3EncryptionMode;
(function (S3EncryptionMode) {
    S3EncryptionMode["DISABLED"] = "DISABLED";
    S3EncryptionMode["SSEKMS"] = "SSE-KMS";
    S3EncryptionMode["SSES3"] = "SSE-S3";
})(S3EncryptionMode = exports.S3EncryptionMode || (exports.S3EncryptionMode = {}));
var AccessDeniedException;
(function (AccessDeniedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AccessDeniedException");
    }
    AccessDeniedException.isa = isa;
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var AlreadyExistsException;
(function (AlreadyExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AlreadyExistsException");
    }
    AlreadyExistsException.isa = isa;
})(AlreadyExistsException = exports.AlreadyExistsException || (exports.AlreadyExistsException = {}));
var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConcurrentModificationException");
    }
    ConcurrentModificationException.isa = isa;
})(ConcurrentModificationException = exports.ConcurrentModificationException || (exports.ConcurrentModificationException = {}));
var ConcurrentRunsExceededException;
(function (ConcurrentRunsExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConcurrentRunsExceededException");
    }
    ConcurrentRunsExceededException.isa = isa;
})(ConcurrentRunsExceededException = exports.ConcurrentRunsExceededException || (exports.ConcurrentRunsExceededException = {}));
var ConditionCheckFailureException;
(function (ConditionCheckFailureException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConditionCheckFailureException");
    }
    ConditionCheckFailureException.isa = isa;
})(ConditionCheckFailureException = exports.ConditionCheckFailureException || (exports.ConditionCheckFailureException = {}));
var EntityNotFoundException;
(function (EntityNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "EntityNotFoundException");
    }
    EntityNotFoundException.isa = isa;
})(EntityNotFoundException = exports.EntityNotFoundException || (exports.EntityNotFoundException = {}));
var ErrorDetail;
(function (ErrorDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "ErrorDetail");
    }
    ErrorDetail.isa = isa;
})(ErrorDetail = exports.ErrorDetail || (exports.ErrorDetail = {}));
var GlueEncryptionException;
(function (GlueEncryptionException) {
    function isa(o) {
        return smithy_client_1.isa(o, "GlueEncryptionException");
    }
    GlueEncryptionException.isa = isa;
})(GlueEncryptionException = exports.GlueEncryptionException || (exports.GlueEncryptionException = {}));
var IdempotentParameterMismatchException;
(function (IdempotentParameterMismatchException) {
    function isa(o) {
        return smithy_client_1.isa(o, "IdempotentParameterMismatchException");
    }
    IdempotentParameterMismatchException.isa = isa;
})(IdempotentParameterMismatchException = exports.IdempotentParameterMismatchException || (exports.IdempotentParameterMismatchException = {}));
var InternalServiceException;
(function (InternalServiceException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalServiceException");
    }
    InternalServiceException.isa = isa;
})(InternalServiceException = exports.InternalServiceException || (exports.InternalServiceException = {}));
var InvalidInputException;
(function (InvalidInputException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidInputException");
    }
    InvalidInputException.isa = isa;
})(InvalidInputException = exports.InvalidInputException || (exports.InvalidInputException = {}));
var OperationTimeoutException;
(function (OperationTimeoutException) {
    function isa(o) {
        return smithy_client_1.isa(o, "OperationTimeoutException");
    }
    OperationTimeoutException.isa = isa;
})(OperationTimeoutException = exports.OperationTimeoutException || (exports.OperationTimeoutException = {}));
var ResourceNumberLimitExceededException;
(function (ResourceNumberLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNumberLimitExceededException");
    }
    ResourceNumberLimitExceededException.isa = isa;
})(ResourceNumberLimitExceededException = exports.ResourceNumberLimitExceededException || (exports.ResourceNumberLimitExceededException = {}));
var ValidationException;
(function (ValidationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ValidationException");
    }
    ValidationException.isa = isa;
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var VersionMismatchException;
(function (VersionMismatchException) {
    function isa(o) {
        return smithy_client_1.isa(o, "VersionMismatchException");
    }
    VersionMismatchException.isa = isa;
})(VersionMismatchException = exports.VersionMismatchException || (exports.VersionMismatchException = {}));
var BatchCreatePartitionRequest;
(function (BatchCreatePartitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchCreatePartitionRequest");
    }
    BatchCreatePartitionRequest.isa = isa;
})(BatchCreatePartitionRequest = exports.BatchCreatePartitionRequest || (exports.BatchCreatePartitionRequest = {}));
var BatchCreatePartitionResponse;
(function (BatchCreatePartitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchCreatePartitionResponse");
    }
    BatchCreatePartitionResponse.isa = isa;
})(BatchCreatePartitionResponse = exports.BatchCreatePartitionResponse || (exports.BatchCreatePartitionResponse = {}));
var BatchDeleteConnectionRequest;
(function (BatchDeleteConnectionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchDeleteConnectionRequest");
    }
    BatchDeleteConnectionRequest.isa = isa;
})(BatchDeleteConnectionRequest = exports.BatchDeleteConnectionRequest || (exports.BatchDeleteConnectionRequest = {}));
var BatchDeleteConnectionResponse;
(function (BatchDeleteConnectionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchDeleteConnectionResponse");
    }
    BatchDeleteConnectionResponse.isa = isa;
})(BatchDeleteConnectionResponse = exports.BatchDeleteConnectionResponse || (exports.BatchDeleteConnectionResponse = {}));
var BatchDeletePartitionRequest;
(function (BatchDeletePartitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchDeletePartitionRequest");
    }
    BatchDeletePartitionRequest.isa = isa;
})(BatchDeletePartitionRequest = exports.BatchDeletePartitionRequest || (exports.BatchDeletePartitionRequest = {}));
var BatchDeletePartitionResponse;
(function (BatchDeletePartitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchDeletePartitionResponse");
    }
    BatchDeletePartitionResponse.isa = isa;
})(BatchDeletePartitionResponse = exports.BatchDeletePartitionResponse || (exports.BatchDeletePartitionResponse = {}));
var BatchDeleteTableRequest;
(function (BatchDeleteTableRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchDeleteTableRequest");
    }
    BatchDeleteTableRequest.isa = isa;
})(BatchDeleteTableRequest = exports.BatchDeleteTableRequest || (exports.BatchDeleteTableRequest = {}));
var BatchDeleteTableResponse;
(function (BatchDeleteTableResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchDeleteTableResponse");
    }
    BatchDeleteTableResponse.isa = isa;
})(BatchDeleteTableResponse = exports.BatchDeleteTableResponse || (exports.BatchDeleteTableResponse = {}));
var BatchDeleteTableVersionRequest;
(function (BatchDeleteTableVersionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchDeleteTableVersionRequest");
    }
    BatchDeleteTableVersionRequest.isa = isa;
})(BatchDeleteTableVersionRequest = exports.BatchDeleteTableVersionRequest || (exports.BatchDeleteTableVersionRequest = {}));
var BatchDeleteTableVersionResponse;
(function (BatchDeleteTableVersionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchDeleteTableVersionResponse");
    }
    BatchDeleteTableVersionResponse.isa = isa;
})(BatchDeleteTableVersionResponse = exports.BatchDeleteTableVersionResponse || (exports.BatchDeleteTableVersionResponse = {}));
var BatchGetPartitionRequest;
(function (BatchGetPartitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetPartitionRequest");
    }
    BatchGetPartitionRequest.isa = isa;
})(BatchGetPartitionRequest = exports.BatchGetPartitionRequest || (exports.BatchGetPartitionRequest = {}));
var BatchGetPartitionResponse;
(function (BatchGetPartitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetPartitionResponse");
    }
    BatchGetPartitionResponse.isa = isa;
})(BatchGetPartitionResponse = exports.BatchGetPartitionResponse || (exports.BatchGetPartitionResponse = {}));
var CatalogEncryptionMode;
(function (CatalogEncryptionMode) {
    CatalogEncryptionMode["DISABLED"] = "DISABLED";
    CatalogEncryptionMode["SSEKMS"] = "SSE-KMS";
})(CatalogEncryptionMode = exports.CatalogEncryptionMode || (exports.CatalogEncryptionMode = {}));
var CatalogImportStatus;
(function (CatalogImportStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "CatalogImportStatus");
    }
    CatalogImportStatus.isa = isa;
})(CatalogImportStatus = exports.CatalogImportStatus || (exports.CatalogImportStatus = {}));
var Column;
(function (Column) {
    function isa(o) {
        return smithy_client_1.isa(o, "Column");
    }
    Column.isa = isa;
})(Column = exports.Column || (exports.Column = {}));
var Comparator;
(function (Comparator) {
    Comparator["EQUALS"] = "EQUALS";
    Comparator["GREATER_THAN"] = "GREATER_THAN";
    Comparator["GREATER_THAN_EQUALS"] = "GREATER_THAN_EQUALS";
    Comparator["LESS_THAN"] = "LESS_THAN";
    Comparator["LESS_THAN_EQUALS"] = "LESS_THAN_EQUALS";
})(Comparator = exports.Comparator || (exports.Comparator = {}));
var Connection;
(function (Connection) {
    function isa(o) {
        return smithy_client_1.isa(o, "Connection");
    }
    Connection.isa = isa;
})(Connection = exports.Connection || (exports.Connection = {}));
var ConnectionInput;
(function (ConnectionInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConnectionInput");
    }
    ConnectionInput.isa = isa;
})(ConnectionInput = exports.ConnectionInput || (exports.ConnectionInput = {}));
var ConnectionPasswordEncryption;
(function (ConnectionPasswordEncryption) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConnectionPasswordEncryption");
    }
    ConnectionPasswordEncryption.isa = isa;
})(ConnectionPasswordEncryption = exports.ConnectionPasswordEncryption || (exports.ConnectionPasswordEncryption = {}));
var ConnectionPropertyKey;
(function (ConnectionPropertyKey) {
    ConnectionPropertyKey["CONFIG_FILES"] = "CONFIG_FILES";
    ConnectionPropertyKey["CUSTOM_JDBC_CERT"] = "CUSTOM_JDBC_CERT";
    ConnectionPropertyKey["CUSTOM_JDBC_CERT_STRING"] = "CUSTOM_JDBC_CERT_STRING";
    ConnectionPropertyKey["ENCRYPTED_PASSWORD"] = "ENCRYPTED_PASSWORD";
    ConnectionPropertyKey["HOST"] = "HOST";
    ConnectionPropertyKey["INSTANCE_ID"] = "INSTANCE_ID";
    ConnectionPropertyKey["JDBC_CONNECTION_URL"] = "JDBC_CONNECTION_URL";
    ConnectionPropertyKey["JDBC_DRIVER_CLASS_NAME"] = "JDBC_DRIVER_CLASS_NAME";
    ConnectionPropertyKey["JDBC_DRIVER_JAR_URI"] = "JDBC_DRIVER_JAR_URI";
    ConnectionPropertyKey["JDBC_ENFORCE_SSL"] = "JDBC_ENFORCE_SSL";
    ConnectionPropertyKey["JDBC_ENGINE"] = "JDBC_ENGINE";
    ConnectionPropertyKey["JDBC_ENGINE_VERSION"] = "JDBC_ENGINE_VERSION";
    ConnectionPropertyKey["PASSWORD"] = "PASSWORD";
    ConnectionPropertyKey["PORT"] = "PORT";
    ConnectionPropertyKey["SKIP_CUSTOM_JDBC_CERT_VALIDATION"] = "SKIP_CUSTOM_JDBC_CERT_VALIDATION";
    ConnectionPropertyKey["USER_NAME"] = "USERNAME";
})(ConnectionPropertyKey = exports.ConnectionPropertyKey || (exports.ConnectionPropertyKey = {}));
var ConnectionType;
(function (ConnectionType) {
    ConnectionType["JDBC"] = "JDBC";
    ConnectionType["SFTP"] = "SFTP";
})(ConnectionType = exports.ConnectionType || (exports.ConnectionType = {}));
var CreateConnectionRequest;
(function (CreateConnectionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateConnectionRequest");
    }
    CreateConnectionRequest.isa = isa;
})(CreateConnectionRequest = exports.CreateConnectionRequest || (exports.CreateConnectionRequest = {}));
var CreateConnectionResponse;
(function (CreateConnectionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateConnectionResponse");
    }
    CreateConnectionResponse.isa = isa;
})(CreateConnectionResponse = exports.CreateConnectionResponse || (exports.CreateConnectionResponse = {}));
var CreateDatabaseRequest;
(function (CreateDatabaseRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDatabaseRequest");
    }
    CreateDatabaseRequest.isa = isa;
})(CreateDatabaseRequest = exports.CreateDatabaseRequest || (exports.CreateDatabaseRequest = {}));
var CreateDatabaseResponse;
(function (CreateDatabaseResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDatabaseResponse");
    }
    CreateDatabaseResponse.isa = isa;
})(CreateDatabaseResponse = exports.CreateDatabaseResponse || (exports.CreateDatabaseResponse = {}));
var CreatePartitionRequest;
(function (CreatePartitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreatePartitionRequest");
    }
    CreatePartitionRequest.isa = isa;
})(CreatePartitionRequest = exports.CreatePartitionRequest || (exports.CreatePartitionRequest = {}));
var CreatePartitionResponse;
(function (CreatePartitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreatePartitionResponse");
    }
    CreatePartitionResponse.isa = isa;
})(CreatePartitionResponse = exports.CreatePartitionResponse || (exports.CreatePartitionResponse = {}));
var CreateTableRequest;
(function (CreateTableRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateTableRequest");
    }
    CreateTableRequest.isa = isa;
})(CreateTableRequest = exports.CreateTableRequest || (exports.CreateTableRequest = {}));
var CreateTableResponse;
(function (CreateTableResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateTableResponse");
    }
    CreateTableResponse.isa = isa;
})(CreateTableResponse = exports.CreateTableResponse || (exports.CreateTableResponse = {}));
var CreateUserDefinedFunctionRequest;
(function (CreateUserDefinedFunctionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateUserDefinedFunctionRequest");
    }
    CreateUserDefinedFunctionRequest.isa = isa;
})(CreateUserDefinedFunctionRequest = exports.CreateUserDefinedFunctionRequest || (exports.CreateUserDefinedFunctionRequest = {}));
var CreateUserDefinedFunctionResponse;
(function (CreateUserDefinedFunctionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateUserDefinedFunctionResponse");
    }
    CreateUserDefinedFunctionResponse.isa = isa;
})(CreateUserDefinedFunctionResponse = exports.CreateUserDefinedFunctionResponse || (exports.CreateUserDefinedFunctionResponse = {}));
var DataCatalogEncryptionSettings;
(function (DataCatalogEncryptionSettings) {
    function isa(o) {
        return smithy_client_1.isa(o, "DataCatalogEncryptionSettings");
    }
    DataCatalogEncryptionSettings.isa = isa;
})(DataCatalogEncryptionSettings = exports.DataCatalogEncryptionSettings || (exports.DataCatalogEncryptionSettings = {}));
var DataLakePrincipal;
(function (DataLakePrincipal) {
    function isa(o) {
        return smithy_client_1.isa(o, "DataLakePrincipal");
    }
    DataLakePrincipal.isa = isa;
})(DataLakePrincipal = exports.DataLakePrincipal || (exports.DataLakePrincipal = {}));
var Database;
(function (Database) {
    function isa(o) {
        return smithy_client_1.isa(o, "Database");
    }
    Database.isa = isa;
})(Database = exports.Database || (exports.Database = {}));
var DatabaseInput;
(function (DatabaseInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DatabaseInput");
    }
    DatabaseInput.isa = isa;
})(DatabaseInput = exports.DatabaseInput || (exports.DatabaseInput = {}));
var DeleteConnectionRequest;
(function (DeleteConnectionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteConnectionRequest");
    }
    DeleteConnectionRequest.isa = isa;
})(DeleteConnectionRequest = exports.DeleteConnectionRequest || (exports.DeleteConnectionRequest = {}));
var DeleteConnectionResponse;
(function (DeleteConnectionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteConnectionResponse");
    }
    DeleteConnectionResponse.isa = isa;
})(DeleteConnectionResponse = exports.DeleteConnectionResponse || (exports.DeleteConnectionResponse = {}));
var DeleteDatabaseRequest;
(function (DeleteDatabaseRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDatabaseRequest");
    }
    DeleteDatabaseRequest.isa = isa;
})(DeleteDatabaseRequest = exports.DeleteDatabaseRequest || (exports.DeleteDatabaseRequest = {}));
var DeleteDatabaseResponse;
(function (DeleteDatabaseResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDatabaseResponse");
    }
    DeleteDatabaseResponse.isa = isa;
})(DeleteDatabaseResponse = exports.DeleteDatabaseResponse || (exports.DeleteDatabaseResponse = {}));
var DeletePartitionRequest;
(function (DeletePartitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeletePartitionRequest");
    }
    DeletePartitionRequest.isa = isa;
})(DeletePartitionRequest = exports.DeletePartitionRequest || (exports.DeletePartitionRequest = {}));
var DeletePartitionResponse;
(function (DeletePartitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeletePartitionResponse");
    }
    DeletePartitionResponse.isa = isa;
})(DeletePartitionResponse = exports.DeletePartitionResponse || (exports.DeletePartitionResponse = {}));
var DeleteResourcePolicyRequest;
(function (DeleteResourcePolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteResourcePolicyRequest");
    }
    DeleteResourcePolicyRequest.isa = isa;
})(DeleteResourcePolicyRequest = exports.DeleteResourcePolicyRequest || (exports.DeleteResourcePolicyRequest = {}));
var DeleteResourcePolicyResponse;
(function (DeleteResourcePolicyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteResourcePolicyResponse");
    }
    DeleteResourcePolicyResponse.isa = isa;
})(DeleteResourcePolicyResponse = exports.DeleteResourcePolicyResponse || (exports.DeleteResourcePolicyResponse = {}));
var DeleteTableRequest;
(function (DeleteTableRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteTableRequest");
    }
    DeleteTableRequest.isa = isa;
})(DeleteTableRequest = exports.DeleteTableRequest || (exports.DeleteTableRequest = {}));
var DeleteTableResponse;
(function (DeleteTableResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteTableResponse");
    }
    DeleteTableResponse.isa = isa;
})(DeleteTableResponse = exports.DeleteTableResponse || (exports.DeleteTableResponse = {}));
var DeleteTableVersionRequest;
(function (DeleteTableVersionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteTableVersionRequest");
    }
    DeleteTableVersionRequest.isa = isa;
})(DeleteTableVersionRequest = exports.DeleteTableVersionRequest || (exports.DeleteTableVersionRequest = {}));
var DeleteTableVersionResponse;
(function (DeleteTableVersionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteTableVersionResponse");
    }
    DeleteTableVersionResponse.isa = isa;
})(DeleteTableVersionResponse = exports.DeleteTableVersionResponse || (exports.DeleteTableVersionResponse = {}));
var DeleteUserDefinedFunctionRequest;
(function (DeleteUserDefinedFunctionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteUserDefinedFunctionRequest");
    }
    DeleteUserDefinedFunctionRequest.isa = isa;
})(DeleteUserDefinedFunctionRequest = exports.DeleteUserDefinedFunctionRequest || (exports.DeleteUserDefinedFunctionRequest = {}));
var DeleteUserDefinedFunctionResponse;
(function (DeleteUserDefinedFunctionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteUserDefinedFunctionResponse");
    }
    DeleteUserDefinedFunctionResponse.isa = isa;
})(DeleteUserDefinedFunctionResponse = exports.DeleteUserDefinedFunctionResponse || (exports.DeleteUserDefinedFunctionResponse = {}));
var EncryptionAtRest;
(function (EncryptionAtRest) {
    function isa(o) {
        return smithy_client_1.isa(o, "EncryptionAtRest");
    }
    EncryptionAtRest.isa = isa;
})(EncryptionAtRest = exports.EncryptionAtRest || (exports.EncryptionAtRest = {}));
var GetCatalogImportStatusRequest;
(function (GetCatalogImportStatusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCatalogImportStatusRequest");
    }
    GetCatalogImportStatusRequest.isa = isa;
})(GetCatalogImportStatusRequest = exports.GetCatalogImportStatusRequest || (exports.GetCatalogImportStatusRequest = {}));
var GetCatalogImportStatusResponse;
(function (GetCatalogImportStatusResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCatalogImportStatusResponse");
    }
    GetCatalogImportStatusResponse.isa = isa;
})(GetCatalogImportStatusResponse = exports.GetCatalogImportStatusResponse || (exports.GetCatalogImportStatusResponse = {}));
var GetConnectionRequest;
(function (GetConnectionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetConnectionRequest");
    }
    GetConnectionRequest.isa = isa;
})(GetConnectionRequest = exports.GetConnectionRequest || (exports.GetConnectionRequest = {}));
var GetConnectionResponse;
(function (GetConnectionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetConnectionResponse");
    }
    GetConnectionResponse.isa = isa;
})(GetConnectionResponse = exports.GetConnectionResponse || (exports.GetConnectionResponse = {}));
var GetConnectionsFilter;
(function (GetConnectionsFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetConnectionsFilter");
    }
    GetConnectionsFilter.isa = isa;
})(GetConnectionsFilter = exports.GetConnectionsFilter || (exports.GetConnectionsFilter = {}));
var GetConnectionsRequest;
(function (GetConnectionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetConnectionsRequest");
    }
    GetConnectionsRequest.isa = isa;
})(GetConnectionsRequest = exports.GetConnectionsRequest || (exports.GetConnectionsRequest = {}));
var GetConnectionsResponse;
(function (GetConnectionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetConnectionsResponse");
    }
    GetConnectionsResponse.isa = isa;
})(GetConnectionsResponse = exports.GetConnectionsResponse || (exports.GetConnectionsResponse = {}));
var GetDataCatalogEncryptionSettingsRequest;
(function (GetDataCatalogEncryptionSettingsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDataCatalogEncryptionSettingsRequest");
    }
    GetDataCatalogEncryptionSettingsRequest.isa = isa;
})(GetDataCatalogEncryptionSettingsRequest = exports.GetDataCatalogEncryptionSettingsRequest || (exports.GetDataCatalogEncryptionSettingsRequest = {}));
var GetDataCatalogEncryptionSettingsResponse;
(function (GetDataCatalogEncryptionSettingsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDataCatalogEncryptionSettingsResponse");
    }
    GetDataCatalogEncryptionSettingsResponse.isa = isa;
})(GetDataCatalogEncryptionSettingsResponse = exports.GetDataCatalogEncryptionSettingsResponse || (exports.GetDataCatalogEncryptionSettingsResponse = {}));
var GetDatabaseRequest;
(function (GetDatabaseRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDatabaseRequest");
    }
    GetDatabaseRequest.isa = isa;
})(GetDatabaseRequest = exports.GetDatabaseRequest || (exports.GetDatabaseRequest = {}));
var GetDatabaseResponse;
(function (GetDatabaseResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDatabaseResponse");
    }
    GetDatabaseResponse.isa = isa;
})(GetDatabaseResponse = exports.GetDatabaseResponse || (exports.GetDatabaseResponse = {}));
var GetDatabasesRequest;
(function (GetDatabasesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDatabasesRequest");
    }
    GetDatabasesRequest.isa = isa;
})(GetDatabasesRequest = exports.GetDatabasesRequest || (exports.GetDatabasesRequest = {}));
var GetDatabasesResponse;
(function (GetDatabasesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDatabasesResponse");
    }
    GetDatabasesResponse.isa = isa;
})(GetDatabasesResponse = exports.GetDatabasesResponse || (exports.GetDatabasesResponse = {}));
var GetPartitionRequest;
(function (GetPartitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetPartitionRequest");
    }
    GetPartitionRequest.isa = isa;
})(GetPartitionRequest = exports.GetPartitionRequest || (exports.GetPartitionRequest = {}));
var GetPartitionResponse;
(function (GetPartitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetPartitionResponse");
    }
    GetPartitionResponse.isa = isa;
})(GetPartitionResponse = exports.GetPartitionResponse || (exports.GetPartitionResponse = {}));
var GetPartitionsRequest;
(function (GetPartitionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetPartitionsRequest");
    }
    GetPartitionsRequest.isa = isa;
})(GetPartitionsRequest = exports.GetPartitionsRequest || (exports.GetPartitionsRequest = {}));
var GetPartitionsResponse;
(function (GetPartitionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetPartitionsResponse");
    }
    GetPartitionsResponse.isa = isa;
})(GetPartitionsResponse = exports.GetPartitionsResponse || (exports.GetPartitionsResponse = {}));
var GetResourcePolicyRequest;
(function (GetResourcePolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetResourcePolicyRequest");
    }
    GetResourcePolicyRequest.isa = isa;
})(GetResourcePolicyRequest = exports.GetResourcePolicyRequest || (exports.GetResourcePolicyRequest = {}));
var GetResourcePolicyResponse;
(function (GetResourcePolicyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetResourcePolicyResponse");
    }
    GetResourcePolicyResponse.isa = isa;
})(GetResourcePolicyResponse = exports.GetResourcePolicyResponse || (exports.GetResourcePolicyResponse = {}));
var GetTableRequest;
(function (GetTableRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTableRequest");
    }
    GetTableRequest.isa = isa;
})(GetTableRequest = exports.GetTableRequest || (exports.GetTableRequest = {}));
var GetTableResponse;
(function (GetTableResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTableResponse");
    }
    GetTableResponse.isa = isa;
})(GetTableResponse = exports.GetTableResponse || (exports.GetTableResponse = {}));
var GetTableVersionRequest;
(function (GetTableVersionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTableVersionRequest");
    }
    GetTableVersionRequest.isa = isa;
})(GetTableVersionRequest = exports.GetTableVersionRequest || (exports.GetTableVersionRequest = {}));
var GetTableVersionResponse;
(function (GetTableVersionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTableVersionResponse");
    }
    GetTableVersionResponse.isa = isa;
})(GetTableVersionResponse = exports.GetTableVersionResponse || (exports.GetTableVersionResponse = {}));
var GetTableVersionsRequest;
(function (GetTableVersionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTableVersionsRequest");
    }
    GetTableVersionsRequest.isa = isa;
})(GetTableVersionsRequest = exports.GetTableVersionsRequest || (exports.GetTableVersionsRequest = {}));
var GetTableVersionsResponse;
(function (GetTableVersionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTableVersionsResponse");
    }
    GetTableVersionsResponse.isa = isa;
})(GetTableVersionsResponse = exports.GetTableVersionsResponse || (exports.GetTableVersionsResponse = {}));
var GetTablesRequest;
(function (GetTablesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTablesRequest");
    }
    GetTablesRequest.isa = isa;
})(GetTablesRequest = exports.GetTablesRequest || (exports.GetTablesRequest = {}));
var GetTablesResponse;
(function (GetTablesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTablesResponse");
    }
    GetTablesResponse.isa = isa;
})(GetTablesResponse = exports.GetTablesResponse || (exports.GetTablesResponse = {}));
var GetUserDefinedFunctionRequest;
(function (GetUserDefinedFunctionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetUserDefinedFunctionRequest");
    }
    GetUserDefinedFunctionRequest.isa = isa;
})(GetUserDefinedFunctionRequest = exports.GetUserDefinedFunctionRequest || (exports.GetUserDefinedFunctionRequest = {}));
var GetUserDefinedFunctionResponse;
(function (GetUserDefinedFunctionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetUserDefinedFunctionResponse");
    }
    GetUserDefinedFunctionResponse.isa = isa;
})(GetUserDefinedFunctionResponse = exports.GetUserDefinedFunctionResponse || (exports.GetUserDefinedFunctionResponse = {}));
var GetUserDefinedFunctionsRequest;
(function (GetUserDefinedFunctionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetUserDefinedFunctionsRequest");
    }
    GetUserDefinedFunctionsRequest.isa = isa;
})(GetUserDefinedFunctionsRequest = exports.GetUserDefinedFunctionsRequest || (exports.GetUserDefinedFunctionsRequest = {}));
var GetUserDefinedFunctionsResponse;
(function (GetUserDefinedFunctionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetUserDefinedFunctionsResponse");
    }
    GetUserDefinedFunctionsResponse.isa = isa;
})(GetUserDefinedFunctionsResponse = exports.GetUserDefinedFunctionsResponse || (exports.GetUserDefinedFunctionsResponse = {}));
var ImportCatalogToGlueRequest;
(function (ImportCatalogToGlueRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ImportCatalogToGlueRequest");
    }
    ImportCatalogToGlueRequest.isa = isa;
})(ImportCatalogToGlueRequest = exports.ImportCatalogToGlueRequest || (exports.ImportCatalogToGlueRequest = {}));
var ImportCatalogToGlueResponse;
(function (ImportCatalogToGlueResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ImportCatalogToGlueResponse");
    }
    ImportCatalogToGlueResponse.isa = isa;
})(ImportCatalogToGlueResponse = exports.ImportCatalogToGlueResponse || (exports.ImportCatalogToGlueResponse = {}));
var Order;
(function (Order) {
    function isa(o) {
        return smithy_client_1.isa(o, "Order");
    }
    Order.isa = isa;
})(Order = exports.Order || (exports.Order = {}));
var Partition;
(function (Partition) {
    function isa(o) {
        return smithy_client_1.isa(o, "Partition");
    }
    Partition.isa = isa;
})(Partition = exports.Partition || (exports.Partition = {}));
var PartitionError;
(function (PartitionError) {
    function isa(o) {
        return smithy_client_1.isa(o, "PartitionError");
    }
    PartitionError.isa = isa;
})(PartitionError = exports.PartitionError || (exports.PartitionError = {}));
var PartitionInput;
(function (PartitionInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PartitionInput");
    }
    PartitionInput.isa = isa;
})(PartitionInput = exports.PartitionInput || (exports.PartitionInput = {}));
var PartitionValueList;
(function (PartitionValueList) {
    function isa(o) {
        return smithy_client_1.isa(o, "PartitionValueList");
    }
    PartitionValueList.isa = isa;
})(PartitionValueList = exports.PartitionValueList || (exports.PartitionValueList = {}));
var Permission;
(function (Permission) {
    Permission["ALL"] = "ALL";
    Permission["ALTER"] = "ALTER";
    Permission["CREATE_DATABASE"] = "CREATE_DATABASE";
    Permission["CREATE_TABLE"] = "CREATE_TABLE";
    Permission["DATA_LOCATION_ACCESS"] = "DATA_LOCATION_ACCESS";
    Permission["DELETE"] = "DELETE";
    Permission["DROP"] = "DROP";
    Permission["INSERT"] = "INSERT";
    Permission["SELECT"] = "SELECT";
})(Permission = exports.Permission || (exports.Permission = {}));
var PhysicalConnectionRequirements;
(function (PhysicalConnectionRequirements) {
    function isa(o) {
        return smithy_client_1.isa(o, "PhysicalConnectionRequirements");
    }
    PhysicalConnectionRequirements.isa = isa;
})(PhysicalConnectionRequirements = exports.PhysicalConnectionRequirements || (exports.PhysicalConnectionRequirements = {}));
var PrincipalPermissions;
(function (PrincipalPermissions) {
    function isa(o) {
        return smithy_client_1.isa(o, "PrincipalPermissions");
    }
    PrincipalPermissions.isa = isa;
})(PrincipalPermissions = exports.PrincipalPermissions || (exports.PrincipalPermissions = {}));
var PrincipalType;
(function (PrincipalType) {
    PrincipalType["GROUP"] = "GROUP";
    PrincipalType["ROLE"] = "ROLE";
    PrincipalType["USER"] = "USER";
})(PrincipalType = exports.PrincipalType || (exports.PrincipalType = {}));
var PropertyPredicate;
(function (PropertyPredicate) {
    function isa(o) {
        return smithy_client_1.isa(o, "PropertyPredicate");
    }
    PropertyPredicate.isa = isa;
})(PropertyPredicate = exports.PropertyPredicate || (exports.PropertyPredicate = {}));
var PutDataCatalogEncryptionSettingsRequest;
(function (PutDataCatalogEncryptionSettingsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutDataCatalogEncryptionSettingsRequest");
    }
    PutDataCatalogEncryptionSettingsRequest.isa = isa;
})(PutDataCatalogEncryptionSettingsRequest = exports.PutDataCatalogEncryptionSettingsRequest || (exports.PutDataCatalogEncryptionSettingsRequest = {}));
var PutDataCatalogEncryptionSettingsResponse;
(function (PutDataCatalogEncryptionSettingsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutDataCatalogEncryptionSettingsResponse");
    }
    PutDataCatalogEncryptionSettingsResponse.isa = isa;
})(PutDataCatalogEncryptionSettingsResponse = exports.PutDataCatalogEncryptionSettingsResponse || (exports.PutDataCatalogEncryptionSettingsResponse = {}));
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
var ResourceType;
(function (ResourceType) {
    ResourceType["ARCHIVE"] = "ARCHIVE";
    ResourceType["FILE"] = "FILE";
    ResourceType["JAR"] = "JAR";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
var ResourceUri;
(function (ResourceUri) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceUri");
    }
    ResourceUri.isa = isa;
})(ResourceUri = exports.ResourceUri || (exports.ResourceUri = {}));
var SearchTablesRequest;
(function (SearchTablesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SearchTablesRequest");
    }
    SearchTablesRequest.isa = isa;
})(SearchTablesRequest = exports.SearchTablesRequest || (exports.SearchTablesRequest = {}));
var SearchTablesResponse;
(function (SearchTablesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "SearchTablesResponse");
    }
    SearchTablesResponse.isa = isa;
})(SearchTablesResponse = exports.SearchTablesResponse || (exports.SearchTablesResponse = {}));
var Segment;
(function (Segment) {
    function isa(o) {
        return smithy_client_1.isa(o, "Segment");
    }
    Segment.isa = isa;
})(Segment = exports.Segment || (exports.Segment = {}));
var SerDeInfo;
(function (SerDeInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "SerDeInfo");
    }
    SerDeInfo.isa = isa;
})(SerDeInfo = exports.SerDeInfo || (exports.SerDeInfo = {}));
var SkewedInfo;
(function (SkewedInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "SkewedInfo");
    }
    SkewedInfo.isa = isa;
})(SkewedInfo = exports.SkewedInfo || (exports.SkewedInfo = {}));
var Sort;
(function (Sort) {
    Sort["ASCENDING"] = "ASC";
    Sort["DESCENDING"] = "DESC";
})(Sort = exports.Sort || (exports.Sort = {}));
var SortCriterion;
(function (SortCriterion) {
    function isa(o) {
        return smithy_client_1.isa(o, "SortCriterion");
    }
    SortCriterion.isa = isa;
})(SortCriterion = exports.SortCriterion || (exports.SortCriterion = {}));
var StorageDescriptor;
(function (StorageDescriptor) {
    function isa(o) {
        return smithy_client_1.isa(o, "StorageDescriptor");
    }
    StorageDescriptor.isa = isa;
})(StorageDescriptor = exports.StorageDescriptor || (exports.StorageDescriptor = {}));
var Table;
(function (Table) {
    function isa(o) {
        return smithy_client_1.isa(o, "Table");
    }
    Table.isa = isa;
})(Table = exports.Table || (exports.Table = {}));
var TableError;
(function (TableError) {
    function isa(o) {
        return smithy_client_1.isa(o, "TableError");
    }
    TableError.isa = isa;
})(TableError = exports.TableError || (exports.TableError = {}));
var TableInput;
(function (TableInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "TableInput");
    }
    TableInput.isa = isa;
})(TableInput = exports.TableInput || (exports.TableInput = {}));
var TableVersion;
(function (TableVersion) {
    function isa(o) {
        return smithy_client_1.isa(o, "TableVersion");
    }
    TableVersion.isa = isa;
})(TableVersion = exports.TableVersion || (exports.TableVersion = {}));
var TableVersionError;
(function (TableVersionError) {
    function isa(o) {
        return smithy_client_1.isa(o, "TableVersionError");
    }
    TableVersionError.isa = isa;
})(TableVersionError = exports.TableVersionError || (exports.TableVersionError = {}));
var UpdateConnectionRequest;
(function (UpdateConnectionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateConnectionRequest");
    }
    UpdateConnectionRequest.isa = isa;
})(UpdateConnectionRequest = exports.UpdateConnectionRequest || (exports.UpdateConnectionRequest = {}));
var UpdateConnectionResponse;
(function (UpdateConnectionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateConnectionResponse");
    }
    UpdateConnectionResponse.isa = isa;
})(UpdateConnectionResponse = exports.UpdateConnectionResponse || (exports.UpdateConnectionResponse = {}));
var UpdateDatabaseRequest;
(function (UpdateDatabaseRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDatabaseRequest");
    }
    UpdateDatabaseRequest.isa = isa;
})(UpdateDatabaseRequest = exports.UpdateDatabaseRequest || (exports.UpdateDatabaseRequest = {}));
var UpdateDatabaseResponse;
(function (UpdateDatabaseResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDatabaseResponse");
    }
    UpdateDatabaseResponse.isa = isa;
})(UpdateDatabaseResponse = exports.UpdateDatabaseResponse || (exports.UpdateDatabaseResponse = {}));
var UpdatePartitionRequest;
(function (UpdatePartitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdatePartitionRequest");
    }
    UpdatePartitionRequest.isa = isa;
})(UpdatePartitionRequest = exports.UpdatePartitionRequest || (exports.UpdatePartitionRequest = {}));
var UpdatePartitionResponse;
(function (UpdatePartitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdatePartitionResponse");
    }
    UpdatePartitionResponse.isa = isa;
})(UpdatePartitionResponse = exports.UpdatePartitionResponse || (exports.UpdatePartitionResponse = {}));
var UpdateTableRequest;
(function (UpdateTableRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateTableRequest");
    }
    UpdateTableRequest.isa = isa;
})(UpdateTableRequest = exports.UpdateTableRequest || (exports.UpdateTableRequest = {}));
var UpdateTableResponse;
(function (UpdateTableResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateTableResponse");
    }
    UpdateTableResponse.isa = isa;
})(UpdateTableResponse = exports.UpdateTableResponse || (exports.UpdateTableResponse = {}));
var UpdateUserDefinedFunctionRequest;
(function (UpdateUserDefinedFunctionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateUserDefinedFunctionRequest");
    }
    UpdateUserDefinedFunctionRequest.isa = isa;
})(UpdateUserDefinedFunctionRequest = exports.UpdateUserDefinedFunctionRequest || (exports.UpdateUserDefinedFunctionRequest = {}));
var UpdateUserDefinedFunctionResponse;
(function (UpdateUserDefinedFunctionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateUserDefinedFunctionResponse");
    }
    UpdateUserDefinedFunctionResponse.isa = isa;
})(UpdateUserDefinedFunctionResponse = exports.UpdateUserDefinedFunctionResponse || (exports.UpdateUserDefinedFunctionResponse = {}));
var UserDefinedFunction;
(function (UserDefinedFunction) {
    function isa(o) {
        return smithy_client_1.isa(o, "UserDefinedFunction");
    }
    UserDefinedFunction.isa = isa;
})(UserDefinedFunction = exports.UserDefinedFunction || (exports.UserDefinedFunction = {}));
var UserDefinedFunctionInput;
(function (UserDefinedFunctionInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UserDefinedFunctionInput");
    }
    UserDefinedFunctionInput.isa = isa;
})(UserDefinedFunctionInput = exports.UserDefinedFunctionInput || (exports.UserDefinedFunctionInput = {}));
var BatchGetDevEndpointsRequest;
(function (BatchGetDevEndpointsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetDevEndpointsRequest");
    }
    BatchGetDevEndpointsRequest.isa = isa;
})(BatchGetDevEndpointsRequest = exports.BatchGetDevEndpointsRequest || (exports.BatchGetDevEndpointsRequest = {}));
var BatchGetDevEndpointsResponse;
(function (BatchGetDevEndpointsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetDevEndpointsResponse");
    }
    BatchGetDevEndpointsResponse.isa = isa;
})(BatchGetDevEndpointsResponse = exports.BatchGetDevEndpointsResponse || (exports.BatchGetDevEndpointsResponse = {}));
var CloudWatchEncryption;
(function (CloudWatchEncryption) {
    function isa(o) {
        return smithy_client_1.isa(o, "CloudWatchEncryption");
    }
    CloudWatchEncryption.isa = isa;
})(CloudWatchEncryption = exports.CloudWatchEncryption || (exports.CloudWatchEncryption = {}));
var CreateDevEndpointRequest;
(function (CreateDevEndpointRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDevEndpointRequest");
    }
    CreateDevEndpointRequest.isa = isa;
})(CreateDevEndpointRequest = exports.CreateDevEndpointRequest || (exports.CreateDevEndpointRequest = {}));
var CreateDevEndpointResponse;
(function (CreateDevEndpointResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDevEndpointResponse");
    }
    CreateDevEndpointResponse.isa = isa;
})(CreateDevEndpointResponse = exports.CreateDevEndpointResponse || (exports.CreateDevEndpointResponse = {}));
var CreateSecurityConfigurationRequest;
(function (CreateSecurityConfigurationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateSecurityConfigurationRequest");
    }
    CreateSecurityConfigurationRequest.isa = isa;
})(CreateSecurityConfigurationRequest = exports.CreateSecurityConfigurationRequest || (exports.CreateSecurityConfigurationRequest = {}));
var CreateSecurityConfigurationResponse;
(function (CreateSecurityConfigurationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateSecurityConfigurationResponse");
    }
    CreateSecurityConfigurationResponse.isa = isa;
})(CreateSecurityConfigurationResponse = exports.CreateSecurityConfigurationResponse || (exports.CreateSecurityConfigurationResponse = {}));
var DeleteDevEndpointRequest;
(function (DeleteDevEndpointRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDevEndpointRequest");
    }
    DeleteDevEndpointRequest.isa = isa;
})(DeleteDevEndpointRequest = exports.DeleteDevEndpointRequest || (exports.DeleteDevEndpointRequest = {}));
var DeleteDevEndpointResponse;
(function (DeleteDevEndpointResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDevEndpointResponse");
    }
    DeleteDevEndpointResponse.isa = isa;
})(DeleteDevEndpointResponse = exports.DeleteDevEndpointResponse || (exports.DeleteDevEndpointResponse = {}));
var DeleteSecurityConfigurationRequest;
(function (DeleteSecurityConfigurationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteSecurityConfigurationRequest");
    }
    DeleteSecurityConfigurationRequest.isa = isa;
})(DeleteSecurityConfigurationRequest = exports.DeleteSecurityConfigurationRequest || (exports.DeleteSecurityConfigurationRequest = {}));
var DeleteSecurityConfigurationResponse;
(function (DeleteSecurityConfigurationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteSecurityConfigurationResponse");
    }
    DeleteSecurityConfigurationResponse.isa = isa;
})(DeleteSecurityConfigurationResponse = exports.DeleteSecurityConfigurationResponse || (exports.DeleteSecurityConfigurationResponse = {}));
var DevEndpoint;
(function (DevEndpoint) {
    function isa(o) {
        return smithy_client_1.isa(o, "DevEndpoint");
    }
    DevEndpoint.isa = isa;
})(DevEndpoint = exports.DevEndpoint || (exports.DevEndpoint = {}));
var DevEndpointCustomLibraries;
(function (DevEndpointCustomLibraries) {
    function isa(o) {
        return smithy_client_1.isa(o, "DevEndpointCustomLibraries");
    }
    DevEndpointCustomLibraries.isa = isa;
})(DevEndpointCustomLibraries = exports.DevEndpointCustomLibraries || (exports.DevEndpointCustomLibraries = {}));
var EncryptionConfiguration;
(function (EncryptionConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "EncryptionConfiguration");
    }
    EncryptionConfiguration.isa = isa;
})(EncryptionConfiguration = exports.EncryptionConfiguration || (exports.EncryptionConfiguration = {}));
var GetDevEndpointRequest;
(function (GetDevEndpointRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDevEndpointRequest");
    }
    GetDevEndpointRequest.isa = isa;
})(GetDevEndpointRequest = exports.GetDevEndpointRequest || (exports.GetDevEndpointRequest = {}));
var GetDevEndpointResponse;
(function (GetDevEndpointResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDevEndpointResponse");
    }
    GetDevEndpointResponse.isa = isa;
})(GetDevEndpointResponse = exports.GetDevEndpointResponse || (exports.GetDevEndpointResponse = {}));
var GetDevEndpointsRequest;
(function (GetDevEndpointsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDevEndpointsRequest");
    }
    GetDevEndpointsRequest.isa = isa;
})(GetDevEndpointsRequest = exports.GetDevEndpointsRequest || (exports.GetDevEndpointsRequest = {}));
var GetDevEndpointsResponse;
(function (GetDevEndpointsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDevEndpointsResponse");
    }
    GetDevEndpointsResponse.isa = isa;
})(GetDevEndpointsResponse = exports.GetDevEndpointsResponse || (exports.GetDevEndpointsResponse = {}));
var GetJobBookmarkRequest;
(function (GetJobBookmarkRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetJobBookmarkRequest");
    }
    GetJobBookmarkRequest.isa = isa;
})(GetJobBookmarkRequest = exports.GetJobBookmarkRequest || (exports.GetJobBookmarkRequest = {}));
var GetJobBookmarkResponse;
(function (GetJobBookmarkResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetJobBookmarkResponse");
    }
    GetJobBookmarkResponse.isa = isa;
})(GetJobBookmarkResponse = exports.GetJobBookmarkResponse || (exports.GetJobBookmarkResponse = {}));
var GetSecurityConfigurationRequest;
(function (GetSecurityConfigurationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSecurityConfigurationRequest");
    }
    GetSecurityConfigurationRequest.isa = isa;
})(GetSecurityConfigurationRequest = exports.GetSecurityConfigurationRequest || (exports.GetSecurityConfigurationRequest = {}));
var GetSecurityConfigurationResponse;
(function (GetSecurityConfigurationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSecurityConfigurationResponse");
    }
    GetSecurityConfigurationResponse.isa = isa;
})(GetSecurityConfigurationResponse = exports.GetSecurityConfigurationResponse || (exports.GetSecurityConfigurationResponse = {}));
var GetSecurityConfigurationsRequest;
(function (GetSecurityConfigurationsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSecurityConfigurationsRequest");
    }
    GetSecurityConfigurationsRequest.isa = isa;
})(GetSecurityConfigurationsRequest = exports.GetSecurityConfigurationsRequest || (exports.GetSecurityConfigurationsRequest = {}));
var GetSecurityConfigurationsResponse;
(function (GetSecurityConfigurationsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSecurityConfigurationsResponse");
    }
    GetSecurityConfigurationsResponse.isa = isa;
})(GetSecurityConfigurationsResponse = exports.GetSecurityConfigurationsResponse || (exports.GetSecurityConfigurationsResponse = {}));
var JobBookmarkEntry;
(function (JobBookmarkEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "JobBookmarkEntry");
    }
    JobBookmarkEntry.isa = isa;
})(JobBookmarkEntry = exports.JobBookmarkEntry || (exports.JobBookmarkEntry = {}));
var JobBookmarksEncryption;
(function (JobBookmarksEncryption) {
    function isa(o) {
        return smithy_client_1.isa(o, "JobBookmarksEncryption");
    }
    JobBookmarksEncryption.isa = isa;
})(JobBookmarksEncryption = exports.JobBookmarksEncryption || (exports.JobBookmarksEncryption = {}));
var ListDevEndpointsRequest;
(function (ListDevEndpointsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDevEndpointsRequest");
    }
    ListDevEndpointsRequest.isa = isa;
})(ListDevEndpointsRequest = exports.ListDevEndpointsRequest || (exports.ListDevEndpointsRequest = {}));
var ListDevEndpointsResponse;
(function (ListDevEndpointsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDevEndpointsResponse");
    }
    ListDevEndpointsResponse.isa = isa;
})(ListDevEndpointsResponse = exports.ListDevEndpointsResponse || (exports.ListDevEndpointsResponse = {}));
var ResetJobBookmarkRequest;
(function (ResetJobBookmarkRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResetJobBookmarkRequest");
    }
    ResetJobBookmarkRequest.isa = isa;
})(ResetJobBookmarkRequest = exports.ResetJobBookmarkRequest || (exports.ResetJobBookmarkRequest = {}));
var ResetJobBookmarkResponse;
(function (ResetJobBookmarkResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResetJobBookmarkResponse");
    }
    ResetJobBookmarkResponse.isa = isa;
})(ResetJobBookmarkResponse = exports.ResetJobBookmarkResponse || (exports.ResetJobBookmarkResponse = {}));
var S3Encryption;
(function (S3Encryption) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3Encryption");
    }
    S3Encryption.isa = isa;
})(S3Encryption = exports.S3Encryption || (exports.S3Encryption = {}));
var SecurityConfiguration;
(function (SecurityConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "SecurityConfiguration");
    }
    SecurityConfiguration.isa = isa;
})(SecurityConfiguration = exports.SecurityConfiguration || (exports.SecurityConfiguration = {}));
var UpdateDevEndpointRequest;
(function (UpdateDevEndpointRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDevEndpointRequest");
    }
    UpdateDevEndpointRequest.isa = isa;
})(UpdateDevEndpointRequest = exports.UpdateDevEndpointRequest || (exports.UpdateDevEndpointRequest = {}));
var UpdateDevEndpointResponse;
(function (UpdateDevEndpointResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDevEndpointResponse");
    }
    UpdateDevEndpointResponse.isa = isa;
})(UpdateDevEndpointResponse = exports.UpdateDevEndpointResponse || (exports.UpdateDevEndpointResponse = {}));
var CancelMLTaskRunRequest;
(function (CancelMLTaskRunRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CancelMLTaskRunRequest");
    }
    CancelMLTaskRunRequest.isa = isa;
})(CancelMLTaskRunRequest = exports.CancelMLTaskRunRequest || (exports.CancelMLTaskRunRequest = {}));
var CancelMLTaskRunResponse;
(function (CancelMLTaskRunResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CancelMLTaskRunResponse");
    }
    CancelMLTaskRunResponse.isa = isa;
})(CancelMLTaskRunResponse = exports.CancelMLTaskRunResponse || (exports.CancelMLTaskRunResponse = {}));
var ConfusionMatrix;
(function (ConfusionMatrix) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConfusionMatrix");
    }
    ConfusionMatrix.isa = isa;
})(ConfusionMatrix = exports.ConfusionMatrix || (exports.ConfusionMatrix = {}));
var CreateMLTransformRequest;
(function (CreateMLTransformRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateMLTransformRequest");
    }
    CreateMLTransformRequest.isa = isa;
})(CreateMLTransformRequest = exports.CreateMLTransformRequest || (exports.CreateMLTransformRequest = {}));
var CreateMLTransformResponse;
(function (CreateMLTransformResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateMLTransformResponse");
    }
    CreateMLTransformResponse.isa = isa;
})(CreateMLTransformResponse = exports.CreateMLTransformResponse || (exports.CreateMLTransformResponse = {}));
var DeleteMLTransformRequest;
(function (DeleteMLTransformRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteMLTransformRequest");
    }
    DeleteMLTransformRequest.isa = isa;
})(DeleteMLTransformRequest = exports.DeleteMLTransformRequest || (exports.DeleteMLTransformRequest = {}));
var DeleteMLTransformResponse;
(function (DeleteMLTransformResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteMLTransformResponse");
    }
    DeleteMLTransformResponse.isa = isa;
})(DeleteMLTransformResponse = exports.DeleteMLTransformResponse || (exports.DeleteMLTransformResponse = {}));
var EvaluationMetrics;
(function (EvaluationMetrics) {
    function isa(o) {
        return smithy_client_1.isa(o, "EvaluationMetrics");
    }
    EvaluationMetrics.isa = isa;
})(EvaluationMetrics = exports.EvaluationMetrics || (exports.EvaluationMetrics = {}));
var ExportLabelsTaskRunProperties;
(function (ExportLabelsTaskRunProperties) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExportLabelsTaskRunProperties");
    }
    ExportLabelsTaskRunProperties.isa = isa;
})(ExportLabelsTaskRunProperties = exports.ExportLabelsTaskRunProperties || (exports.ExportLabelsTaskRunProperties = {}));
var FindMatchesMetrics;
(function (FindMatchesMetrics) {
    function isa(o) {
        return smithy_client_1.isa(o, "FindMatchesMetrics");
    }
    FindMatchesMetrics.isa = isa;
})(FindMatchesMetrics = exports.FindMatchesMetrics || (exports.FindMatchesMetrics = {}));
var FindMatchesParameters;
(function (FindMatchesParameters) {
    function isa(o) {
        return smithy_client_1.isa(o, "FindMatchesParameters");
    }
    FindMatchesParameters.isa = isa;
})(FindMatchesParameters = exports.FindMatchesParameters || (exports.FindMatchesParameters = {}));
var FindMatchesTaskRunProperties;
(function (FindMatchesTaskRunProperties) {
    function isa(o) {
        return smithy_client_1.isa(o, "FindMatchesTaskRunProperties");
    }
    FindMatchesTaskRunProperties.isa = isa;
})(FindMatchesTaskRunProperties = exports.FindMatchesTaskRunProperties || (exports.FindMatchesTaskRunProperties = {}));
var GetMLTaskRunRequest;
(function (GetMLTaskRunRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMLTaskRunRequest");
    }
    GetMLTaskRunRequest.isa = isa;
})(GetMLTaskRunRequest = exports.GetMLTaskRunRequest || (exports.GetMLTaskRunRequest = {}));
var GetMLTaskRunResponse;
(function (GetMLTaskRunResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMLTaskRunResponse");
    }
    GetMLTaskRunResponse.isa = isa;
})(GetMLTaskRunResponse = exports.GetMLTaskRunResponse || (exports.GetMLTaskRunResponse = {}));
var GetMLTaskRunsRequest;
(function (GetMLTaskRunsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMLTaskRunsRequest");
    }
    GetMLTaskRunsRequest.isa = isa;
})(GetMLTaskRunsRequest = exports.GetMLTaskRunsRequest || (exports.GetMLTaskRunsRequest = {}));
var GetMLTaskRunsResponse;
(function (GetMLTaskRunsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMLTaskRunsResponse");
    }
    GetMLTaskRunsResponse.isa = isa;
})(GetMLTaskRunsResponse = exports.GetMLTaskRunsResponse || (exports.GetMLTaskRunsResponse = {}));
var GetMLTransformRequest;
(function (GetMLTransformRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMLTransformRequest");
    }
    GetMLTransformRequest.isa = isa;
})(GetMLTransformRequest = exports.GetMLTransformRequest || (exports.GetMLTransformRequest = {}));
var GetMLTransformResponse;
(function (GetMLTransformResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMLTransformResponse");
    }
    GetMLTransformResponse.isa = isa;
})(GetMLTransformResponse = exports.GetMLTransformResponse || (exports.GetMLTransformResponse = {}));
var GetMLTransformsRequest;
(function (GetMLTransformsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMLTransformsRequest");
    }
    GetMLTransformsRequest.isa = isa;
})(GetMLTransformsRequest = exports.GetMLTransformsRequest || (exports.GetMLTransformsRequest = {}));
var GetMLTransformsResponse;
(function (GetMLTransformsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMLTransformsResponse");
    }
    GetMLTransformsResponse.isa = isa;
})(GetMLTransformsResponse = exports.GetMLTransformsResponse || (exports.GetMLTransformsResponse = {}));
var GlueTable;
(function (GlueTable) {
    function isa(o) {
        return smithy_client_1.isa(o, "GlueTable");
    }
    GlueTable.isa = isa;
})(GlueTable = exports.GlueTable || (exports.GlueTable = {}));
var ImportLabelsTaskRunProperties;
(function (ImportLabelsTaskRunProperties) {
    function isa(o) {
        return smithy_client_1.isa(o, "ImportLabelsTaskRunProperties");
    }
    ImportLabelsTaskRunProperties.isa = isa;
})(ImportLabelsTaskRunProperties = exports.ImportLabelsTaskRunProperties || (exports.ImportLabelsTaskRunProperties = {}));
var LabelingSetGenerationTaskRunProperties;
(function (LabelingSetGenerationTaskRunProperties) {
    function isa(o) {
        return smithy_client_1.isa(o, "LabelingSetGenerationTaskRunProperties");
    }
    LabelingSetGenerationTaskRunProperties.isa = isa;
})(LabelingSetGenerationTaskRunProperties = exports.LabelingSetGenerationTaskRunProperties || (exports.LabelingSetGenerationTaskRunProperties = {}));
var MLTransform;
(function (MLTransform) {
    function isa(o) {
        return smithy_client_1.isa(o, "MLTransform");
    }
    MLTransform.isa = isa;
})(MLTransform = exports.MLTransform || (exports.MLTransform = {}));
var MLTransformNotReadyException;
(function (MLTransformNotReadyException) {
    function isa(o) {
        return smithy_client_1.isa(o, "MLTransformNotReadyException");
    }
    MLTransformNotReadyException.isa = isa;
})(MLTransformNotReadyException = exports.MLTransformNotReadyException || (exports.MLTransformNotReadyException = {}));
var SchemaColumn;
(function (SchemaColumn) {
    function isa(o) {
        return smithy_client_1.isa(o, "SchemaColumn");
    }
    SchemaColumn.isa = isa;
})(SchemaColumn = exports.SchemaColumn || (exports.SchemaColumn = {}));
var SortDirectionType;
(function (SortDirectionType) {
    SortDirectionType["ASCENDING"] = "ASCENDING";
    SortDirectionType["DESCENDING"] = "DESCENDING";
})(SortDirectionType = exports.SortDirectionType || (exports.SortDirectionType = {}));
var StartExportLabelsTaskRunRequest;
(function (StartExportLabelsTaskRunRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartExportLabelsTaskRunRequest");
    }
    StartExportLabelsTaskRunRequest.isa = isa;
})(StartExportLabelsTaskRunRequest = exports.StartExportLabelsTaskRunRequest || (exports.StartExportLabelsTaskRunRequest = {}));
var StartExportLabelsTaskRunResponse;
(function (StartExportLabelsTaskRunResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartExportLabelsTaskRunResponse");
    }
    StartExportLabelsTaskRunResponse.isa = isa;
})(StartExportLabelsTaskRunResponse = exports.StartExportLabelsTaskRunResponse || (exports.StartExportLabelsTaskRunResponse = {}));
var StartImportLabelsTaskRunRequest;
(function (StartImportLabelsTaskRunRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartImportLabelsTaskRunRequest");
    }
    StartImportLabelsTaskRunRequest.isa = isa;
})(StartImportLabelsTaskRunRequest = exports.StartImportLabelsTaskRunRequest || (exports.StartImportLabelsTaskRunRequest = {}));
var StartImportLabelsTaskRunResponse;
(function (StartImportLabelsTaskRunResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartImportLabelsTaskRunResponse");
    }
    StartImportLabelsTaskRunResponse.isa = isa;
})(StartImportLabelsTaskRunResponse = exports.StartImportLabelsTaskRunResponse || (exports.StartImportLabelsTaskRunResponse = {}));
var StartMLEvaluationTaskRunRequest;
(function (StartMLEvaluationTaskRunRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartMLEvaluationTaskRunRequest");
    }
    StartMLEvaluationTaskRunRequest.isa = isa;
})(StartMLEvaluationTaskRunRequest = exports.StartMLEvaluationTaskRunRequest || (exports.StartMLEvaluationTaskRunRequest = {}));
var StartMLEvaluationTaskRunResponse;
(function (StartMLEvaluationTaskRunResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartMLEvaluationTaskRunResponse");
    }
    StartMLEvaluationTaskRunResponse.isa = isa;
})(StartMLEvaluationTaskRunResponse = exports.StartMLEvaluationTaskRunResponse || (exports.StartMLEvaluationTaskRunResponse = {}));
var StartMLLabelingSetGenerationTaskRunRequest;
(function (StartMLLabelingSetGenerationTaskRunRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartMLLabelingSetGenerationTaskRunRequest");
    }
    StartMLLabelingSetGenerationTaskRunRequest.isa = isa;
})(StartMLLabelingSetGenerationTaskRunRequest = exports.StartMLLabelingSetGenerationTaskRunRequest || (exports.StartMLLabelingSetGenerationTaskRunRequest = {}));
var StartMLLabelingSetGenerationTaskRunResponse;
(function (StartMLLabelingSetGenerationTaskRunResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartMLLabelingSetGenerationTaskRunResponse");
    }
    StartMLLabelingSetGenerationTaskRunResponse.isa = isa;
})(StartMLLabelingSetGenerationTaskRunResponse = exports.StartMLLabelingSetGenerationTaskRunResponse || (exports.StartMLLabelingSetGenerationTaskRunResponse = {}));
var TaskRun;
(function (TaskRun) {
    function isa(o) {
        return smithy_client_1.isa(o, "TaskRun");
    }
    TaskRun.isa = isa;
})(TaskRun = exports.TaskRun || (exports.TaskRun = {}));
var TaskRunFilterCriteria;
(function (TaskRunFilterCriteria) {
    function isa(o) {
        return smithy_client_1.isa(o, "TaskRunFilterCriteria");
    }
    TaskRunFilterCriteria.isa = isa;
})(TaskRunFilterCriteria = exports.TaskRunFilterCriteria || (exports.TaskRunFilterCriteria = {}));
var TaskRunProperties;
(function (TaskRunProperties) {
    function isa(o) {
        return smithy_client_1.isa(o, "TaskRunProperties");
    }
    TaskRunProperties.isa = isa;
})(TaskRunProperties = exports.TaskRunProperties || (exports.TaskRunProperties = {}));
var TaskRunSortColumnType;
(function (TaskRunSortColumnType) {
    TaskRunSortColumnType["STARTED"] = "STARTED";
    TaskRunSortColumnType["STATUS"] = "STATUS";
    TaskRunSortColumnType["TASK_RUN_TYPE"] = "TASK_RUN_TYPE";
})(TaskRunSortColumnType = exports.TaskRunSortColumnType || (exports.TaskRunSortColumnType = {}));
var TaskRunSortCriteria;
(function (TaskRunSortCriteria) {
    function isa(o) {
        return smithy_client_1.isa(o, "TaskRunSortCriteria");
    }
    TaskRunSortCriteria.isa = isa;
})(TaskRunSortCriteria = exports.TaskRunSortCriteria || (exports.TaskRunSortCriteria = {}));
var TaskStatusType;
(function (TaskStatusType) {
    TaskStatusType["FAILED"] = "FAILED";
    TaskStatusType["RUNNING"] = "RUNNING";
    TaskStatusType["STARTING"] = "STARTING";
    TaskStatusType["STOPPED"] = "STOPPED";
    TaskStatusType["STOPPING"] = "STOPPING";
    TaskStatusType["SUCCEEDED"] = "SUCCEEDED";
    TaskStatusType["TIMEOUT"] = "TIMEOUT";
})(TaskStatusType = exports.TaskStatusType || (exports.TaskStatusType = {}));
var TaskType;
(function (TaskType) {
    TaskType["EVALUATION"] = "EVALUATION";
    TaskType["EXPORT_LABELS"] = "EXPORT_LABELS";
    TaskType["FIND_MATCHES"] = "FIND_MATCHES";
    TaskType["IMPORT_LABELS"] = "IMPORT_LABELS";
    TaskType["LABELING_SET_GENERATION"] = "LABELING_SET_GENERATION";
})(TaskType = exports.TaskType || (exports.TaskType = {}));
var TransformFilterCriteria;
(function (TransformFilterCriteria) {
    function isa(o) {
        return smithy_client_1.isa(o, "TransformFilterCriteria");
    }
    TransformFilterCriteria.isa = isa;
})(TransformFilterCriteria = exports.TransformFilterCriteria || (exports.TransformFilterCriteria = {}));
var TransformParameters;
(function (TransformParameters) {
    function isa(o) {
        return smithy_client_1.isa(o, "TransformParameters");
    }
    TransformParameters.isa = isa;
})(TransformParameters = exports.TransformParameters || (exports.TransformParameters = {}));
var TransformSortColumnType;
(function (TransformSortColumnType) {
    TransformSortColumnType["CREATED"] = "CREATED";
    TransformSortColumnType["LAST_MODIFIED"] = "LAST_MODIFIED";
    TransformSortColumnType["NAME"] = "NAME";
    TransformSortColumnType["STATUS"] = "STATUS";
    TransformSortColumnType["TRANSFORM_TYPE"] = "TRANSFORM_TYPE";
})(TransformSortColumnType = exports.TransformSortColumnType || (exports.TransformSortColumnType = {}));
var TransformSortCriteria;
(function (TransformSortCriteria) {
    function isa(o) {
        return smithy_client_1.isa(o, "TransformSortCriteria");
    }
    TransformSortCriteria.isa = isa;
})(TransformSortCriteria = exports.TransformSortCriteria || (exports.TransformSortCriteria = {}));
var TransformStatusType;
(function (TransformStatusType) {
    TransformStatusType["DELETING"] = "DELETING";
    TransformStatusType["NOT_READY"] = "NOT_READY";
    TransformStatusType["READY"] = "READY";
})(TransformStatusType = exports.TransformStatusType || (exports.TransformStatusType = {}));
var TransformType;
(function (TransformType) {
    TransformType["FIND_MATCHES"] = "FIND_MATCHES";
})(TransformType = exports.TransformType || (exports.TransformType = {}));
var UpdateMLTransformRequest;
(function (UpdateMLTransformRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateMLTransformRequest");
    }
    UpdateMLTransformRequest.isa = isa;
})(UpdateMLTransformRequest = exports.UpdateMLTransformRequest || (exports.UpdateMLTransformRequest = {}));
var UpdateMLTransformResponse;
(function (UpdateMLTransformResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateMLTransformResponse");
    }
    UpdateMLTransformResponse.isa = isa;
})(UpdateMLTransformResponse = exports.UpdateMLTransformResponse || (exports.UpdateMLTransformResponse = {}));
var Action;
(function (Action) {
    function isa(o) {
        return smithy_client_1.isa(o, "Action");
    }
    Action.isa = isa;
})(Action = exports.Action || (exports.Action = {}));
var BatchGetJobsRequest;
(function (BatchGetJobsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetJobsRequest");
    }
    BatchGetJobsRequest.isa = isa;
})(BatchGetJobsRequest = exports.BatchGetJobsRequest || (exports.BatchGetJobsRequest = {}));
var BatchGetJobsResponse;
(function (BatchGetJobsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetJobsResponse");
    }
    BatchGetJobsResponse.isa = isa;
})(BatchGetJobsResponse = exports.BatchGetJobsResponse || (exports.BatchGetJobsResponse = {}));
var BatchGetTriggersRequest;
(function (BatchGetTriggersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetTriggersRequest");
    }
    BatchGetTriggersRequest.isa = isa;
})(BatchGetTriggersRequest = exports.BatchGetTriggersRequest || (exports.BatchGetTriggersRequest = {}));
var BatchGetTriggersResponse;
(function (BatchGetTriggersResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetTriggersResponse");
    }
    BatchGetTriggersResponse.isa = isa;
})(BatchGetTriggersResponse = exports.BatchGetTriggersResponse || (exports.BatchGetTriggersResponse = {}));
var BatchGetWorkflowsRequest;
(function (BatchGetWorkflowsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetWorkflowsRequest");
    }
    BatchGetWorkflowsRequest.isa = isa;
})(BatchGetWorkflowsRequest = exports.BatchGetWorkflowsRequest || (exports.BatchGetWorkflowsRequest = {}));
var BatchGetWorkflowsResponse;
(function (BatchGetWorkflowsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetWorkflowsResponse");
    }
    BatchGetWorkflowsResponse.isa = isa;
})(BatchGetWorkflowsResponse = exports.BatchGetWorkflowsResponse || (exports.BatchGetWorkflowsResponse = {}));
var BatchStopJobRunError;
(function (BatchStopJobRunError) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchStopJobRunError");
    }
    BatchStopJobRunError.isa = isa;
})(BatchStopJobRunError = exports.BatchStopJobRunError || (exports.BatchStopJobRunError = {}));
var BatchStopJobRunRequest;
(function (BatchStopJobRunRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchStopJobRunRequest");
    }
    BatchStopJobRunRequest.isa = isa;
})(BatchStopJobRunRequest = exports.BatchStopJobRunRequest || (exports.BatchStopJobRunRequest = {}));
var BatchStopJobRunResponse;
(function (BatchStopJobRunResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchStopJobRunResponse");
    }
    BatchStopJobRunResponse.isa = isa;
})(BatchStopJobRunResponse = exports.BatchStopJobRunResponse || (exports.BatchStopJobRunResponse = {}));
var BatchStopJobRunSuccessfulSubmission;
(function (BatchStopJobRunSuccessfulSubmission) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchStopJobRunSuccessfulSubmission");
    }
    BatchStopJobRunSuccessfulSubmission.isa = isa;
})(BatchStopJobRunSuccessfulSubmission = exports.BatchStopJobRunSuccessfulSubmission || (exports.BatchStopJobRunSuccessfulSubmission = {}));
var Condition;
(function (Condition) {
    function isa(o) {
        return smithy_client_1.isa(o, "Condition");
    }
    Condition.isa = isa;
})(Condition = exports.Condition || (exports.Condition = {}));
var ConnectionsList;
(function (ConnectionsList) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConnectionsList");
    }
    ConnectionsList.isa = isa;
})(ConnectionsList = exports.ConnectionsList || (exports.ConnectionsList = {}));
var Crawl;
(function (Crawl) {
    function isa(o) {
        return smithy_client_1.isa(o, "Crawl");
    }
    Crawl.isa = isa;
})(Crawl = exports.Crawl || (exports.Crawl = {}));
var CrawlState;
(function (CrawlState) {
    CrawlState["CANCELLED"] = "CANCELLED";
    CrawlState["FAILED"] = "FAILED";
    CrawlState["RUNNING"] = "RUNNING";
    CrawlState["SUCCEEDED"] = "SUCCEEDED";
})(CrawlState = exports.CrawlState || (exports.CrawlState = {}));
var CrawlerNodeDetails;
(function (CrawlerNodeDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "CrawlerNodeDetails");
    }
    CrawlerNodeDetails.isa = isa;
})(CrawlerNodeDetails = exports.CrawlerNodeDetails || (exports.CrawlerNodeDetails = {}));
var CreateJobRequest;
(function (CreateJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateJobRequest");
    }
    CreateJobRequest.isa = isa;
})(CreateJobRequest = exports.CreateJobRequest || (exports.CreateJobRequest = {}));
var CreateJobResponse;
(function (CreateJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateJobResponse");
    }
    CreateJobResponse.isa = isa;
})(CreateJobResponse = exports.CreateJobResponse || (exports.CreateJobResponse = {}));
var CreateTriggerRequest;
(function (CreateTriggerRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateTriggerRequest");
    }
    CreateTriggerRequest.isa = isa;
})(CreateTriggerRequest = exports.CreateTriggerRequest || (exports.CreateTriggerRequest = {}));
var CreateTriggerResponse;
(function (CreateTriggerResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateTriggerResponse");
    }
    CreateTriggerResponse.isa = isa;
})(CreateTriggerResponse = exports.CreateTriggerResponse || (exports.CreateTriggerResponse = {}));
var CreateWorkflowRequest;
(function (CreateWorkflowRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateWorkflowRequest");
    }
    CreateWorkflowRequest.isa = isa;
})(CreateWorkflowRequest = exports.CreateWorkflowRequest || (exports.CreateWorkflowRequest = {}));
var CreateWorkflowResponse;
(function (CreateWorkflowResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateWorkflowResponse");
    }
    CreateWorkflowResponse.isa = isa;
})(CreateWorkflowResponse = exports.CreateWorkflowResponse || (exports.CreateWorkflowResponse = {}));
var DeleteJobRequest;
(function (DeleteJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteJobRequest");
    }
    DeleteJobRequest.isa = isa;
})(DeleteJobRequest = exports.DeleteJobRequest || (exports.DeleteJobRequest = {}));
var DeleteJobResponse;
(function (DeleteJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteJobResponse");
    }
    DeleteJobResponse.isa = isa;
})(DeleteJobResponse = exports.DeleteJobResponse || (exports.DeleteJobResponse = {}));
var DeleteTriggerRequest;
(function (DeleteTriggerRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteTriggerRequest");
    }
    DeleteTriggerRequest.isa = isa;
})(DeleteTriggerRequest = exports.DeleteTriggerRequest || (exports.DeleteTriggerRequest = {}));
var DeleteTriggerResponse;
(function (DeleteTriggerResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteTriggerResponse");
    }
    DeleteTriggerResponse.isa = isa;
})(DeleteTriggerResponse = exports.DeleteTriggerResponse || (exports.DeleteTriggerResponse = {}));
var DeleteWorkflowRequest;
(function (DeleteWorkflowRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteWorkflowRequest");
    }
    DeleteWorkflowRequest.isa = isa;
})(DeleteWorkflowRequest = exports.DeleteWorkflowRequest || (exports.DeleteWorkflowRequest = {}));
var DeleteWorkflowResponse;
(function (DeleteWorkflowResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteWorkflowResponse");
    }
    DeleteWorkflowResponse.isa = isa;
})(DeleteWorkflowResponse = exports.DeleteWorkflowResponse || (exports.DeleteWorkflowResponse = {}));
var Edge;
(function (Edge) {
    function isa(o) {
        return smithy_client_1.isa(o, "Edge");
    }
    Edge.isa = isa;
})(Edge = exports.Edge || (exports.Edge = {}));
var ExecutionProperty;
(function (ExecutionProperty) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExecutionProperty");
    }
    ExecutionProperty.isa = isa;
})(ExecutionProperty = exports.ExecutionProperty || (exports.ExecutionProperty = {}));
var GetJobRequest;
(function (GetJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetJobRequest");
    }
    GetJobRequest.isa = isa;
})(GetJobRequest = exports.GetJobRequest || (exports.GetJobRequest = {}));
var GetJobResponse;
(function (GetJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetJobResponse");
    }
    GetJobResponse.isa = isa;
})(GetJobResponse = exports.GetJobResponse || (exports.GetJobResponse = {}));
var GetJobRunRequest;
(function (GetJobRunRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetJobRunRequest");
    }
    GetJobRunRequest.isa = isa;
})(GetJobRunRequest = exports.GetJobRunRequest || (exports.GetJobRunRequest = {}));
var GetJobRunResponse;
(function (GetJobRunResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetJobRunResponse");
    }
    GetJobRunResponse.isa = isa;
})(GetJobRunResponse = exports.GetJobRunResponse || (exports.GetJobRunResponse = {}));
var GetJobRunsRequest;
(function (GetJobRunsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetJobRunsRequest");
    }
    GetJobRunsRequest.isa = isa;
})(GetJobRunsRequest = exports.GetJobRunsRequest || (exports.GetJobRunsRequest = {}));
var GetJobRunsResponse;
(function (GetJobRunsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetJobRunsResponse");
    }
    GetJobRunsResponse.isa = isa;
})(GetJobRunsResponse = exports.GetJobRunsResponse || (exports.GetJobRunsResponse = {}));
var GetJobsRequest;
(function (GetJobsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetJobsRequest");
    }
    GetJobsRequest.isa = isa;
})(GetJobsRequest = exports.GetJobsRequest || (exports.GetJobsRequest = {}));
var GetJobsResponse;
(function (GetJobsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetJobsResponse");
    }
    GetJobsResponse.isa = isa;
})(GetJobsResponse = exports.GetJobsResponse || (exports.GetJobsResponse = {}));
var GetTriggerRequest;
(function (GetTriggerRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTriggerRequest");
    }
    GetTriggerRequest.isa = isa;
})(GetTriggerRequest = exports.GetTriggerRequest || (exports.GetTriggerRequest = {}));
var GetTriggerResponse;
(function (GetTriggerResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTriggerResponse");
    }
    GetTriggerResponse.isa = isa;
})(GetTriggerResponse = exports.GetTriggerResponse || (exports.GetTriggerResponse = {}));
var GetTriggersRequest;
(function (GetTriggersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTriggersRequest");
    }
    GetTriggersRequest.isa = isa;
})(GetTriggersRequest = exports.GetTriggersRequest || (exports.GetTriggersRequest = {}));
var GetTriggersResponse;
(function (GetTriggersResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTriggersResponse");
    }
    GetTriggersResponse.isa = isa;
})(GetTriggersResponse = exports.GetTriggersResponse || (exports.GetTriggersResponse = {}));
var GetWorkflowRequest;
(function (GetWorkflowRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetWorkflowRequest");
    }
    GetWorkflowRequest.isa = isa;
})(GetWorkflowRequest = exports.GetWorkflowRequest || (exports.GetWorkflowRequest = {}));
var GetWorkflowResponse;
(function (GetWorkflowResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetWorkflowResponse");
    }
    GetWorkflowResponse.isa = isa;
})(GetWorkflowResponse = exports.GetWorkflowResponse || (exports.GetWorkflowResponse = {}));
var GetWorkflowRunPropertiesRequest;
(function (GetWorkflowRunPropertiesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetWorkflowRunPropertiesRequest");
    }
    GetWorkflowRunPropertiesRequest.isa = isa;
})(GetWorkflowRunPropertiesRequest = exports.GetWorkflowRunPropertiesRequest || (exports.GetWorkflowRunPropertiesRequest = {}));
var GetWorkflowRunPropertiesResponse;
(function (GetWorkflowRunPropertiesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetWorkflowRunPropertiesResponse");
    }
    GetWorkflowRunPropertiesResponse.isa = isa;
})(GetWorkflowRunPropertiesResponse = exports.GetWorkflowRunPropertiesResponse || (exports.GetWorkflowRunPropertiesResponse = {}));
var GetWorkflowRunRequest;
(function (GetWorkflowRunRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetWorkflowRunRequest");
    }
    GetWorkflowRunRequest.isa = isa;
})(GetWorkflowRunRequest = exports.GetWorkflowRunRequest || (exports.GetWorkflowRunRequest = {}));
var GetWorkflowRunResponse;
(function (GetWorkflowRunResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetWorkflowRunResponse");
    }
    GetWorkflowRunResponse.isa = isa;
})(GetWorkflowRunResponse = exports.GetWorkflowRunResponse || (exports.GetWorkflowRunResponse = {}));
var GetWorkflowRunsRequest;
(function (GetWorkflowRunsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetWorkflowRunsRequest");
    }
    GetWorkflowRunsRequest.isa = isa;
})(GetWorkflowRunsRequest = exports.GetWorkflowRunsRequest || (exports.GetWorkflowRunsRequest = {}));
var GetWorkflowRunsResponse;
(function (GetWorkflowRunsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetWorkflowRunsResponse");
    }
    GetWorkflowRunsResponse.isa = isa;
})(GetWorkflowRunsResponse = exports.GetWorkflowRunsResponse || (exports.GetWorkflowRunsResponse = {}));
var Job;
(function (Job) {
    function isa(o) {
        return smithy_client_1.isa(o, "Job");
    }
    Job.isa = isa;
})(Job = exports.Job || (exports.Job = {}));
var JobCommand;
(function (JobCommand) {
    function isa(o) {
        return smithy_client_1.isa(o, "JobCommand");
    }
    JobCommand.isa = isa;
})(JobCommand = exports.JobCommand || (exports.JobCommand = {}));
var JobNodeDetails;
(function (JobNodeDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "JobNodeDetails");
    }
    JobNodeDetails.isa = isa;
})(JobNodeDetails = exports.JobNodeDetails || (exports.JobNodeDetails = {}));
var JobRun;
(function (JobRun) {
    function isa(o) {
        return smithy_client_1.isa(o, "JobRun");
    }
    JobRun.isa = isa;
})(JobRun = exports.JobRun || (exports.JobRun = {}));
var JobRunState;
(function (JobRunState) {
    JobRunState["FAILED"] = "FAILED";
    JobRunState["RUNNING"] = "RUNNING";
    JobRunState["STARTING"] = "STARTING";
    JobRunState["STOPPED"] = "STOPPED";
    JobRunState["STOPPING"] = "STOPPING";
    JobRunState["SUCCEEDED"] = "SUCCEEDED";
    JobRunState["TIMEOUT"] = "TIMEOUT";
})(JobRunState = exports.JobRunState || (exports.JobRunState = {}));
var JobUpdate;
(function (JobUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "JobUpdate");
    }
    JobUpdate.isa = isa;
})(JobUpdate = exports.JobUpdate || (exports.JobUpdate = {}));
var ListJobsRequest;
(function (ListJobsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListJobsRequest");
    }
    ListJobsRequest.isa = isa;
})(ListJobsRequest = exports.ListJobsRequest || (exports.ListJobsRequest = {}));
var ListJobsResponse;
(function (ListJobsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListJobsResponse");
    }
    ListJobsResponse.isa = isa;
})(ListJobsResponse = exports.ListJobsResponse || (exports.ListJobsResponse = {}));
var ListTriggersRequest;
(function (ListTriggersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTriggersRequest");
    }
    ListTriggersRequest.isa = isa;
})(ListTriggersRequest = exports.ListTriggersRequest || (exports.ListTriggersRequest = {}));
var ListTriggersResponse;
(function (ListTriggersResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTriggersResponse");
    }
    ListTriggersResponse.isa = isa;
})(ListTriggersResponse = exports.ListTriggersResponse || (exports.ListTriggersResponse = {}));
var ListWorkflowsRequest;
(function (ListWorkflowsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListWorkflowsRequest");
    }
    ListWorkflowsRequest.isa = isa;
})(ListWorkflowsRequest = exports.ListWorkflowsRequest || (exports.ListWorkflowsRequest = {}));
var ListWorkflowsResponse;
(function (ListWorkflowsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListWorkflowsResponse");
    }
    ListWorkflowsResponse.isa = isa;
})(ListWorkflowsResponse = exports.ListWorkflowsResponse || (exports.ListWorkflowsResponse = {}));
var Logical;
(function (Logical) {
    Logical["AND"] = "AND";
    Logical["ANY"] = "ANY";
})(Logical = exports.Logical || (exports.Logical = {}));
var LogicalOperator;
(function (LogicalOperator) {
    LogicalOperator["EQUALS"] = "EQUALS";
})(LogicalOperator = exports.LogicalOperator || (exports.LogicalOperator = {}));
var Node;
(function (Node) {
    function isa(o) {
        return smithy_client_1.isa(o, "Node");
    }
    Node.isa = isa;
})(Node = exports.Node || (exports.Node = {}));
var NodeType;
(function (NodeType) {
    NodeType["CRAWLER"] = "CRAWLER";
    NodeType["JOB"] = "JOB";
    NodeType["TRIGGER"] = "TRIGGER";
})(NodeType = exports.NodeType || (exports.NodeType = {}));
var NotificationProperty;
(function (NotificationProperty) {
    function isa(o) {
        return smithy_client_1.isa(o, "NotificationProperty");
    }
    NotificationProperty.isa = isa;
})(NotificationProperty = exports.NotificationProperty || (exports.NotificationProperty = {}));
var Predecessor;
(function (Predecessor) {
    function isa(o) {
        return smithy_client_1.isa(o, "Predecessor");
    }
    Predecessor.isa = isa;
})(Predecessor = exports.Predecessor || (exports.Predecessor = {}));
var Predicate;
(function (Predicate) {
    function isa(o) {
        return smithy_client_1.isa(o, "Predicate");
    }
    Predicate.isa = isa;
})(Predicate = exports.Predicate || (exports.Predicate = {}));
var PutWorkflowRunPropertiesRequest;
(function (PutWorkflowRunPropertiesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutWorkflowRunPropertiesRequest");
    }
    PutWorkflowRunPropertiesRequest.isa = isa;
})(PutWorkflowRunPropertiesRequest = exports.PutWorkflowRunPropertiesRequest || (exports.PutWorkflowRunPropertiesRequest = {}));
var PutWorkflowRunPropertiesResponse;
(function (PutWorkflowRunPropertiesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutWorkflowRunPropertiesResponse");
    }
    PutWorkflowRunPropertiesResponse.isa = isa;
})(PutWorkflowRunPropertiesResponse = exports.PutWorkflowRunPropertiesResponse || (exports.PutWorkflowRunPropertiesResponse = {}));
var StartJobRunRequest;
(function (StartJobRunRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartJobRunRequest");
    }
    StartJobRunRequest.isa = isa;
})(StartJobRunRequest = exports.StartJobRunRequest || (exports.StartJobRunRequest = {}));
var StartJobRunResponse;
(function (StartJobRunResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartJobRunResponse");
    }
    StartJobRunResponse.isa = isa;
})(StartJobRunResponse = exports.StartJobRunResponse || (exports.StartJobRunResponse = {}));
var StartTriggerRequest;
(function (StartTriggerRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartTriggerRequest");
    }
    StartTriggerRequest.isa = isa;
})(StartTriggerRequest = exports.StartTriggerRequest || (exports.StartTriggerRequest = {}));
var StartTriggerResponse;
(function (StartTriggerResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartTriggerResponse");
    }
    StartTriggerResponse.isa = isa;
})(StartTriggerResponse = exports.StartTriggerResponse || (exports.StartTriggerResponse = {}));
var StartWorkflowRunRequest;
(function (StartWorkflowRunRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartWorkflowRunRequest");
    }
    StartWorkflowRunRequest.isa = isa;
})(StartWorkflowRunRequest = exports.StartWorkflowRunRequest || (exports.StartWorkflowRunRequest = {}));
var StartWorkflowRunResponse;
(function (StartWorkflowRunResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartWorkflowRunResponse");
    }
    StartWorkflowRunResponse.isa = isa;
})(StartWorkflowRunResponse = exports.StartWorkflowRunResponse || (exports.StartWorkflowRunResponse = {}));
var StopTriggerRequest;
(function (StopTriggerRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopTriggerRequest");
    }
    StopTriggerRequest.isa = isa;
})(StopTriggerRequest = exports.StopTriggerRequest || (exports.StopTriggerRequest = {}));
var StopTriggerResponse;
(function (StopTriggerResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopTriggerResponse");
    }
    StopTriggerResponse.isa = isa;
})(StopTriggerResponse = exports.StopTriggerResponse || (exports.StopTriggerResponse = {}));
var Trigger;
(function (Trigger) {
    function isa(o) {
        return smithy_client_1.isa(o, "Trigger");
    }
    Trigger.isa = isa;
})(Trigger = exports.Trigger || (exports.Trigger = {}));
var TriggerNodeDetails;
(function (TriggerNodeDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "TriggerNodeDetails");
    }
    TriggerNodeDetails.isa = isa;
})(TriggerNodeDetails = exports.TriggerNodeDetails || (exports.TriggerNodeDetails = {}));
var TriggerState;
(function (TriggerState) {
    TriggerState["ACTIVATED"] = "ACTIVATED";
    TriggerState["ACTIVATING"] = "ACTIVATING";
    TriggerState["CREATED"] = "CREATED";
    TriggerState["CREATING"] = "CREATING";
    TriggerState["DEACTIVATED"] = "DEACTIVATED";
    TriggerState["DEACTIVATING"] = "DEACTIVATING";
    TriggerState["DELETING"] = "DELETING";
    TriggerState["UPDATING"] = "UPDATING";
})(TriggerState = exports.TriggerState || (exports.TriggerState = {}));
var TriggerType;
(function (TriggerType) {
    TriggerType["CONDITIONAL"] = "CONDITIONAL";
    TriggerType["ON_DEMAND"] = "ON_DEMAND";
    TriggerType["SCHEDULED"] = "SCHEDULED";
})(TriggerType = exports.TriggerType || (exports.TriggerType = {}));
var TriggerUpdate;
(function (TriggerUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "TriggerUpdate");
    }
    TriggerUpdate.isa = isa;
})(TriggerUpdate = exports.TriggerUpdate || (exports.TriggerUpdate = {}));
var UpdateJobRequest;
(function (UpdateJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateJobRequest");
    }
    UpdateJobRequest.isa = isa;
})(UpdateJobRequest = exports.UpdateJobRequest || (exports.UpdateJobRequest = {}));
var UpdateJobResponse;
(function (UpdateJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateJobResponse");
    }
    UpdateJobResponse.isa = isa;
})(UpdateJobResponse = exports.UpdateJobResponse || (exports.UpdateJobResponse = {}));
var UpdateTriggerRequest;
(function (UpdateTriggerRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateTriggerRequest");
    }
    UpdateTriggerRequest.isa = isa;
})(UpdateTriggerRequest = exports.UpdateTriggerRequest || (exports.UpdateTriggerRequest = {}));
var UpdateTriggerResponse;
(function (UpdateTriggerResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateTriggerResponse");
    }
    UpdateTriggerResponse.isa = isa;
})(UpdateTriggerResponse = exports.UpdateTriggerResponse || (exports.UpdateTriggerResponse = {}));
var UpdateWorkflowRequest;
(function (UpdateWorkflowRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateWorkflowRequest");
    }
    UpdateWorkflowRequest.isa = isa;
})(UpdateWorkflowRequest = exports.UpdateWorkflowRequest || (exports.UpdateWorkflowRequest = {}));
var UpdateWorkflowResponse;
(function (UpdateWorkflowResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateWorkflowResponse");
    }
    UpdateWorkflowResponse.isa = isa;
})(UpdateWorkflowResponse = exports.UpdateWorkflowResponse || (exports.UpdateWorkflowResponse = {}));
var Workflow;
(function (Workflow) {
    function isa(o) {
        return smithy_client_1.isa(o, "Workflow");
    }
    Workflow.isa = isa;
})(Workflow = exports.Workflow || (exports.Workflow = {}));
var WorkflowGraph;
(function (WorkflowGraph) {
    function isa(o) {
        return smithy_client_1.isa(o, "WorkflowGraph");
    }
    WorkflowGraph.isa = isa;
})(WorkflowGraph = exports.WorkflowGraph || (exports.WorkflowGraph = {}));
var WorkflowRun;
(function (WorkflowRun) {
    function isa(o) {
        return smithy_client_1.isa(o, "WorkflowRun");
    }
    WorkflowRun.isa = isa;
})(WorkflowRun = exports.WorkflowRun || (exports.WorkflowRun = {}));
var WorkflowRunStatistics;
(function (WorkflowRunStatistics) {
    function isa(o) {
        return smithy_client_1.isa(o, "WorkflowRunStatistics");
    }
    WorkflowRunStatistics.isa = isa;
})(WorkflowRunStatistics = exports.WorkflowRunStatistics || (exports.WorkflowRunStatistics = {}));
var WorkflowRunStatus;
(function (WorkflowRunStatus) {
    WorkflowRunStatus["COMPLETED"] = "COMPLETED";
    WorkflowRunStatus["RUNNING"] = "RUNNING";
})(WorkflowRunStatus = exports.WorkflowRunStatus || (exports.WorkflowRunStatus = {}));
var BatchGetCrawlersRequest;
(function (BatchGetCrawlersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetCrawlersRequest");
    }
    BatchGetCrawlersRequest.isa = isa;
})(BatchGetCrawlersRequest = exports.BatchGetCrawlersRequest || (exports.BatchGetCrawlersRequest = {}));
var BatchGetCrawlersResponse;
(function (BatchGetCrawlersResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetCrawlersResponse");
    }
    BatchGetCrawlersResponse.isa = isa;
})(BatchGetCrawlersResponse = exports.BatchGetCrawlersResponse || (exports.BatchGetCrawlersResponse = {}));
var CatalogEntry;
(function (CatalogEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "CatalogEntry");
    }
    CatalogEntry.isa = isa;
})(CatalogEntry = exports.CatalogEntry || (exports.CatalogEntry = {}));
var CatalogTarget;
(function (CatalogTarget) {
    function isa(o) {
        return smithy_client_1.isa(o, "CatalogTarget");
    }
    CatalogTarget.isa = isa;
})(CatalogTarget = exports.CatalogTarget || (exports.CatalogTarget = {}));
var Classifier;
(function (Classifier) {
    function isa(o) {
        return smithy_client_1.isa(o, "Classifier");
    }
    Classifier.isa = isa;
})(Classifier = exports.Classifier || (exports.Classifier = {}));
var CodeGenEdge;
(function (CodeGenEdge) {
    function isa(o) {
        return smithy_client_1.isa(o, "CodeGenEdge");
    }
    CodeGenEdge.isa = isa;
})(CodeGenEdge = exports.CodeGenEdge || (exports.CodeGenEdge = {}));
var CodeGenNode;
(function (CodeGenNode) {
    function isa(o) {
        return smithy_client_1.isa(o, "CodeGenNode");
    }
    CodeGenNode.isa = isa;
})(CodeGenNode = exports.CodeGenNode || (exports.CodeGenNode = {}));
var CodeGenNodeArg;
(function (CodeGenNodeArg) {
    function isa(o) {
        return smithy_client_1.isa(o, "CodeGenNodeArg");
    }
    CodeGenNodeArg.isa = isa;
})(CodeGenNodeArg = exports.CodeGenNodeArg || (exports.CodeGenNodeArg = {}));
var Crawler;
(function (Crawler) {
    function isa(o) {
        return smithy_client_1.isa(o, "Crawler");
    }
    Crawler.isa = isa;
})(Crawler = exports.Crawler || (exports.Crawler = {}));
var CrawlerMetrics;
(function (CrawlerMetrics) {
    function isa(o) {
        return smithy_client_1.isa(o, "CrawlerMetrics");
    }
    CrawlerMetrics.isa = isa;
})(CrawlerMetrics = exports.CrawlerMetrics || (exports.CrawlerMetrics = {}));
var CrawlerNotRunningException;
(function (CrawlerNotRunningException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CrawlerNotRunningException");
    }
    CrawlerNotRunningException.isa = isa;
})(CrawlerNotRunningException = exports.CrawlerNotRunningException || (exports.CrawlerNotRunningException = {}));
var CrawlerRunningException;
(function (CrawlerRunningException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CrawlerRunningException");
    }
    CrawlerRunningException.isa = isa;
})(CrawlerRunningException = exports.CrawlerRunningException || (exports.CrawlerRunningException = {}));
var CrawlerState;
(function (CrawlerState) {
    CrawlerState["READY"] = "READY";
    CrawlerState["RUNNING"] = "RUNNING";
    CrawlerState["STOPPING"] = "STOPPING";
})(CrawlerState = exports.CrawlerState || (exports.CrawlerState = {}));
var CrawlerStoppingException;
(function (CrawlerStoppingException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CrawlerStoppingException");
    }
    CrawlerStoppingException.isa = isa;
})(CrawlerStoppingException = exports.CrawlerStoppingException || (exports.CrawlerStoppingException = {}));
var CrawlerTargets;
(function (CrawlerTargets) {
    function isa(o) {
        return smithy_client_1.isa(o, "CrawlerTargets");
    }
    CrawlerTargets.isa = isa;
})(CrawlerTargets = exports.CrawlerTargets || (exports.CrawlerTargets = {}));
var CreateClassifierRequest;
(function (CreateClassifierRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateClassifierRequest");
    }
    CreateClassifierRequest.isa = isa;
})(CreateClassifierRequest = exports.CreateClassifierRequest || (exports.CreateClassifierRequest = {}));
var CreateClassifierResponse;
(function (CreateClassifierResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateClassifierResponse");
    }
    CreateClassifierResponse.isa = isa;
})(CreateClassifierResponse = exports.CreateClassifierResponse || (exports.CreateClassifierResponse = {}));
var CreateCrawlerRequest;
(function (CreateCrawlerRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateCrawlerRequest");
    }
    CreateCrawlerRequest.isa = isa;
})(CreateCrawlerRequest = exports.CreateCrawlerRequest || (exports.CreateCrawlerRequest = {}));
var CreateCrawlerResponse;
(function (CreateCrawlerResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateCrawlerResponse");
    }
    CreateCrawlerResponse.isa = isa;
})(CreateCrawlerResponse = exports.CreateCrawlerResponse || (exports.CreateCrawlerResponse = {}));
var CreateCsvClassifierRequest;
(function (CreateCsvClassifierRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateCsvClassifierRequest");
    }
    CreateCsvClassifierRequest.isa = isa;
})(CreateCsvClassifierRequest = exports.CreateCsvClassifierRequest || (exports.CreateCsvClassifierRequest = {}));
var CreateGrokClassifierRequest;
(function (CreateGrokClassifierRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateGrokClassifierRequest");
    }
    CreateGrokClassifierRequest.isa = isa;
})(CreateGrokClassifierRequest = exports.CreateGrokClassifierRequest || (exports.CreateGrokClassifierRequest = {}));
var CreateJsonClassifierRequest;
(function (CreateJsonClassifierRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateJsonClassifierRequest");
    }
    CreateJsonClassifierRequest.isa = isa;
})(CreateJsonClassifierRequest = exports.CreateJsonClassifierRequest || (exports.CreateJsonClassifierRequest = {}));
var CreateScriptRequest;
(function (CreateScriptRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateScriptRequest");
    }
    CreateScriptRequest.isa = isa;
})(CreateScriptRequest = exports.CreateScriptRequest || (exports.CreateScriptRequest = {}));
var CreateScriptResponse;
(function (CreateScriptResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateScriptResponse");
    }
    CreateScriptResponse.isa = isa;
})(CreateScriptResponse = exports.CreateScriptResponse || (exports.CreateScriptResponse = {}));
var CreateXMLClassifierRequest;
(function (CreateXMLClassifierRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateXMLClassifierRequest");
    }
    CreateXMLClassifierRequest.isa = isa;
})(CreateXMLClassifierRequest = exports.CreateXMLClassifierRequest || (exports.CreateXMLClassifierRequest = {}));
var CsvClassifier;
(function (CsvClassifier) {
    function isa(o) {
        return smithy_client_1.isa(o, "CsvClassifier");
    }
    CsvClassifier.isa = isa;
})(CsvClassifier = exports.CsvClassifier || (exports.CsvClassifier = {}));
var CsvHeaderOption;
(function (CsvHeaderOption) {
    CsvHeaderOption["ABSENT"] = "ABSENT";
    CsvHeaderOption["PRESENT"] = "PRESENT";
    CsvHeaderOption["UNKNOWN"] = "UNKNOWN";
})(CsvHeaderOption = exports.CsvHeaderOption || (exports.CsvHeaderOption = {}));
var DeleteBehavior;
(function (DeleteBehavior) {
    DeleteBehavior["DELETE_FROM_DATABASE"] = "DELETE_FROM_DATABASE";
    DeleteBehavior["DEPRECATE_IN_DATABASE"] = "DEPRECATE_IN_DATABASE";
    DeleteBehavior["LOG"] = "LOG";
})(DeleteBehavior = exports.DeleteBehavior || (exports.DeleteBehavior = {}));
var DeleteClassifierRequest;
(function (DeleteClassifierRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteClassifierRequest");
    }
    DeleteClassifierRequest.isa = isa;
})(DeleteClassifierRequest = exports.DeleteClassifierRequest || (exports.DeleteClassifierRequest = {}));
var DeleteClassifierResponse;
(function (DeleteClassifierResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteClassifierResponse");
    }
    DeleteClassifierResponse.isa = isa;
})(DeleteClassifierResponse = exports.DeleteClassifierResponse || (exports.DeleteClassifierResponse = {}));
var DeleteCrawlerRequest;
(function (DeleteCrawlerRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteCrawlerRequest");
    }
    DeleteCrawlerRequest.isa = isa;
})(DeleteCrawlerRequest = exports.DeleteCrawlerRequest || (exports.DeleteCrawlerRequest = {}));
var DeleteCrawlerResponse;
(function (DeleteCrawlerResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteCrawlerResponse");
    }
    DeleteCrawlerResponse.isa = isa;
})(DeleteCrawlerResponse = exports.DeleteCrawlerResponse || (exports.DeleteCrawlerResponse = {}));
var DynamoDBTarget;
(function (DynamoDBTarget) {
    function isa(o) {
        return smithy_client_1.isa(o, "DynamoDBTarget");
    }
    DynamoDBTarget.isa = isa;
})(DynamoDBTarget = exports.DynamoDBTarget || (exports.DynamoDBTarget = {}));
var GetClassifierRequest;
(function (GetClassifierRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetClassifierRequest");
    }
    GetClassifierRequest.isa = isa;
})(GetClassifierRequest = exports.GetClassifierRequest || (exports.GetClassifierRequest = {}));
var GetClassifierResponse;
(function (GetClassifierResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetClassifierResponse");
    }
    GetClassifierResponse.isa = isa;
})(GetClassifierResponse = exports.GetClassifierResponse || (exports.GetClassifierResponse = {}));
var GetClassifiersRequest;
(function (GetClassifiersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetClassifiersRequest");
    }
    GetClassifiersRequest.isa = isa;
})(GetClassifiersRequest = exports.GetClassifiersRequest || (exports.GetClassifiersRequest = {}));
var GetClassifiersResponse;
(function (GetClassifiersResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetClassifiersResponse");
    }
    GetClassifiersResponse.isa = isa;
})(GetClassifiersResponse = exports.GetClassifiersResponse || (exports.GetClassifiersResponse = {}));
var GetCrawlerMetricsRequest;
(function (GetCrawlerMetricsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCrawlerMetricsRequest");
    }
    GetCrawlerMetricsRequest.isa = isa;
})(GetCrawlerMetricsRequest = exports.GetCrawlerMetricsRequest || (exports.GetCrawlerMetricsRequest = {}));
var GetCrawlerMetricsResponse;
(function (GetCrawlerMetricsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCrawlerMetricsResponse");
    }
    GetCrawlerMetricsResponse.isa = isa;
})(GetCrawlerMetricsResponse = exports.GetCrawlerMetricsResponse || (exports.GetCrawlerMetricsResponse = {}));
var GetCrawlerRequest;
(function (GetCrawlerRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCrawlerRequest");
    }
    GetCrawlerRequest.isa = isa;
})(GetCrawlerRequest = exports.GetCrawlerRequest || (exports.GetCrawlerRequest = {}));
var GetCrawlerResponse;
(function (GetCrawlerResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCrawlerResponse");
    }
    GetCrawlerResponse.isa = isa;
})(GetCrawlerResponse = exports.GetCrawlerResponse || (exports.GetCrawlerResponse = {}));
var GetCrawlersRequest;
(function (GetCrawlersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCrawlersRequest");
    }
    GetCrawlersRequest.isa = isa;
})(GetCrawlersRequest = exports.GetCrawlersRequest || (exports.GetCrawlersRequest = {}));
var GetCrawlersResponse;
(function (GetCrawlersResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCrawlersResponse");
    }
    GetCrawlersResponse.isa = isa;
})(GetCrawlersResponse = exports.GetCrawlersResponse || (exports.GetCrawlersResponse = {}));
var GetDataflowGraphRequest;
(function (GetDataflowGraphRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDataflowGraphRequest");
    }
    GetDataflowGraphRequest.isa = isa;
})(GetDataflowGraphRequest = exports.GetDataflowGraphRequest || (exports.GetDataflowGraphRequest = {}));
var GetDataflowGraphResponse;
(function (GetDataflowGraphResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDataflowGraphResponse");
    }
    GetDataflowGraphResponse.isa = isa;
})(GetDataflowGraphResponse = exports.GetDataflowGraphResponse || (exports.GetDataflowGraphResponse = {}));
var GetMappingRequest;
(function (GetMappingRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMappingRequest");
    }
    GetMappingRequest.isa = isa;
})(GetMappingRequest = exports.GetMappingRequest || (exports.GetMappingRequest = {}));
var GetMappingResponse;
(function (GetMappingResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMappingResponse");
    }
    GetMappingResponse.isa = isa;
})(GetMappingResponse = exports.GetMappingResponse || (exports.GetMappingResponse = {}));
var GetPlanRequest;
(function (GetPlanRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetPlanRequest");
    }
    GetPlanRequest.isa = isa;
})(GetPlanRequest = exports.GetPlanRequest || (exports.GetPlanRequest = {}));
var GetPlanResponse;
(function (GetPlanResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetPlanResponse");
    }
    GetPlanResponse.isa = isa;
})(GetPlanResponse = exports.GetPlanResponse || (exports.GetPlanResponse = {}));
var GrokClassifier;
(function (GrokClassifier) {
    function isa(o) {
        return smithy_client_1.isa(o, "GrokClassifier");
    }
    GrokClassifier.isa = isa;
})(GrokClassifier = exports.GrokClassifier || (exports.GrokClassifier = {}));
var JdbcTarget;
(function (JdbcTarget) {
    function isa(o) {
        return smithy_client_1.isa(o, "JdbcTarget");
    }
    JdbcTarget.isa = isa;
})(JdbcTarget = exports.JdbcTarget || (exports.JdbcTarget = {}));
var JsonClassifier;
(function (JsonClassifier) {
    function isa(o) {
        return smithy_client_1.isa(o, "JsonClassifier");
    }
    JsonClassifier.isa = isa;
})(JsonClassifier = exports.JsonClassifier || (exports.JsonClassifier = {}));
var Language;
(function (Language) {
    Language["PYTHON"] = "PYTHON";
    Language["SCALA"] = "SCALA";
})(Language = exports.Language || (exports.Language = {}));
var LastCrawlInfo;
(function (LastCrawlInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "LastCrawlInfo");
    }
    LastCrawlInfo.isa = isa;
})(LastCrawlInfo = exports.LastCrawlInfo || (exports.LastCrawlInfo = {}));
var LastCrawlStatus;
(function (LastCrawlStatus) {
    LastCrawlStatus["CANCELLED"] = "CANCELLED";
    LastCrawlStatus["FAILED"] = "FAILED";
    LastCrawlStatus["SUCCEEDED"] = "SUCCEEDED";
})(LastCrawlStatus = exports.LastCrawlStatus || (exports.LastCrawlStatus = {}));
var ListCrawlersRequest;
(function (ListCrawlersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListCrawlersRequest");
    }
    ListCrawlersRequest.isa = isa;
})(ListCrawlersRequest = exports.ListCrawlersRequest || (exports.ListCrawlersRequest = {}));
var ListCrawlersResponse;
(function (ListCrawlersResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListCrawlersResponse");
    }
    ListCrawlersResponse.isa = isa;
})(ListCrawlersResponse = exports.ListCrawlersResponse || (exports.ListCrawlersResponse = {}));
var Location;
(function (Location) {
    function isa(o) {
        return smithy_client_1.isa(o, "Location");
    }
    Location.isa = isa;
})(Location = exports.Location || (exports.Location = {}));
var MappingEntry;
(function (MappingEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "MappingEntry");
    }
    MappingEntry.isa = isa;
})(MappingEntry = exports.MappingEntry || (exports.MappingEntry = {}));
var NoScheduleException;
(function (NoScheduleException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NoScheduleException");
    }
    NoScheduleException.isa = isa;
})(NoScheduleException = exports.NoScheduleException || (exports.NoScheduleException = {}));
var S3Target;
(function (S3Target) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3Target");
    }
    S3Target.isa = isa;
})(S3Target = exports.S3Target || (exports.S3Target = {}));
var Schedule;
(function (Schedule) {
    function isa(o) {
        return smithy_client_1.isa(o, "Schedule");
    }
    Schedule.isa = isa;
})(Schedule = exports.Schedule || (exports.Schedule = {}));
var ScheduleState;
(function (ScheduleState) {
    ScheduleState["NOT_SCHEDULED"] = "NOT_SCHEDULED";
    ScheduleState["SCHEDULED"] = "SCHEDULED";
    ScheduleState["TRANSITIONING"] = "TRANSITIONING";
})(ScheduleState = exports.ScheduleState || (exports.ScheduleState = {}));
var SchedulerNotRunningException;
(function (SchedulerNotRunningException) {
    function isa(o) {
        return smithy_client_1.isa(o, "SchedulerNotRunningException");
    }
    SchedulerNotRunningException.isa = isa;
})(SchedulerNotRunningException = exports.SchedulerNotRunningException || (exports.SchedulerNotRunningException = {}));
var SchedulerRunningException;
(function (SchedulerRunningException) {
    function isa(o) {
        return smithy_client_1.isa(o, "SchedulerRunningException");
    }
    SchedulerRunningException.isa = isa;
})(SchedulerRunningException = exports.SchedulerRunningException || (exports.SchedulerRunningException = {}));
var SchedulerTransitioningException;
(function (SchedulerTransitioningException) {
    function isa(o) {
        return smithy_client_1.isa(o, "SchedulerTransitioningException");
    }
    SchedulerTransitioningException.isa = isa;
})(SchedulerTransitioningException = exports.SchedulerTransitioningException || (exports.SchedulerTransitioningException = {}));
var SchemaChangePolicy;
(function (SchemaChangePolicy) {
    function isa(o) {
        return smithy_client_1.isa(o, "SchemaChangePolicy");
    }
    SchemaChangePolicy.isa = isa;
})(SchemaChangePolicy = exports.SchemaChangePolicy || (exports.SchemaChangePolicy = {}));
var StartCrawlerRequest;
(function (StartCrawlerRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartCrawlerRequest");
    }
    StartCrawlerRequest.isa = isa;
})(StartCrawlerRequest = exports.StartCrawlerRequest || (exports.StartCrawlerRequest = {}));
var StartCrawlerResponse;
(function (StartCrawlerResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartCrawlerResponse");
    }
    StartCrawlerResponse.isa = isa;
})(StartCrawlerResponse = exports.StartCrawlerResponse || (exports.StartCrawlerResponse = {}));
var StartCrawlerScheduleRequest;
(function (StartCrawlerScheduleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartCrawlerScheduleRequest");
    }
    StartCrawlerScheduleRequest.isa = isa;
})(StartCrawlerScheduleRequest = exports.StartCrawlerScheduleRequest || (exports.StartCrawlerScheduleRequest = {}));
var StartCrawlerScheduleResponse;
(function (StartCrawlerScheduleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartCrawlerScheduleResponse");
    }
    StartCrawlerScheduleResponse.isa = isa;
})(StartCrawlerScheduleResponse = exports.StartCrawlerScheduleResponse || (exports.StartCrawlerScheduleResponse = {}));
var StopCrawlerRequest;
(function (StopCrawlerRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopCrawlerRequest");
    }
    StopCrawlerRequest.isa = isa;
})(StopCrawlerRequest = exports.StopCrawlerRequest || (exports.StopCrawlerRequest = {}));
var StopCrawlerResponse;
(function (StopCrawlerResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopCrawlerResponse");
    }
    StopCrawlerResponse.isa = isa;
})(StopCrawlerResponse = exports.StopCrawlerResponse || (exports.StopCrawlerResponse = {}));
var StopCrawlerScheduleRequest;
(function (StopCrawlerScheduleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopCrawlerScheduleRequest");
    }
    StopCrawlerScheduleRequest.isa = isa;
})(StopCrawlerScheduleRequest = exports.StopCrawlerScheduleRequest || (exports.StopCrawlerScheduleRequest = {}));
var StopCrawlerScheduleResponse;
(function (StopCrawlerScheduleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopCrawlerScheduleResponse");
    }
    StopCrawlerScheduleResponse.isa = isa;
})(StopCrawlerScheduleResponse = exports.StopCrawlerScheduleResponse || (exports.StopCrawlerScheduleResponse = {}));
var UpdateBehavior;
(function (UpdateBehavior) {
    UpdateBehavior["LOG"] = "LOG";
    UpdateBehavior["UPDATE_IN_DATABASE"] = "UPDATE_IN_DATABASE";
})(UpdateBehavior = exports.UpdateBehavior || (exports.UpdateBehavior = {}));
var UpdateClassifierRequest;
(function (UpdateClassifierRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateClassifierRequest");
    }
    UpdateClassifierRequest.isa = isa;
})(UpdateClassifierRequest = exports.UpdateClassifierRequest || (exports.UpdateClassifierRequest = {}));
var UpdateClassifierResponse;
(function (UpdateClassifierResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateClassifierResponse");
    }
    UpdateClassifierResponse.isa = isa;
})(UpdateClassifierResponse = exports.UpdateClassifierResponse || (exports.UpdateClassifierResponse = {}));
var UpdateCrawlerRequest;
(function (UpdateCrawlerRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateCrawlerRequest");
    }
    UpdateCrawlerRequest.isa = isa;
})(UpdateCrawlerRequest = exports.UpdateCrawlerRequest || (exports.UpdateCrawlerRequest = {}));
var UpdateCrawlerResponse;
(function (UpdateCrawlerResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateCrawlerResponse");
    }
    UpdateCrawlerResponse.isa = isa;
})(UpdateCrawlerResponse = exports.UpdateCrawlerResponse || (exports.UpdateCrawlerResponse = {}));
var UpdateCrawlerScheduleRequest;
(function (UpdateCrawlerScheduleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateCrawlerScheduleRequest");
    }
    UpdateCrawlerScheduleRequest.isa = isa;
})(UpdateCrawlerScheduleRequest = exports.UpdateCrawlerScheduleRequest || (exports.UpdateCrawlerScheduleRequest = {}));
var UpdateCrawlerScheduleResponse;
(function (UpdateCrawlerScheduleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateCrawlerScheduleResponse");
    }
    UpdateCrawlerScheduleResponse.isa = isa;
})(UpdateCrawlerScheduleResponse = exports.UpdateCrawlerScheduleResponse || (exports.UpdateCrawlerScheduleResponse = {}));
var UpdateCsvClassifierRequest;
(function (UpdateCsvClassifierRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateCsvClassifierRequest");
    }
    UpdateCsvClassifierRequest.isa = isa;
})(UpdateCsvClassifierRequest = exports.UpdateCsvClassifierRequest || (exports.UpdateCsvClassifierRequest = {}));
var UpdateGrokClassifierRequest;
(function (UpdateGrokClassifierRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateGrokClassifierRequest");
    }
    UpdateGrokClassifierRequest.isa = isa;
})(UpdateGrokClassifierRequest = exports.UpdateGrokClassifierRequest || (exports.UpdateGrokClassifierRequest = {}));
var UpdateJsonClassifierRequest;
(function (UpdateJsonClassifierRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateJsonClassifierRequest");
    }
    UpdateJsonClassifierRequest.isa = isa;
})(UpdateJsonClassifierRequest = exports.UpdateJsonClassifierRequest || (exports.UpdateJsonClassifierRequest = {}));
var UpdateXMLClassifierRequest;
(function (UpdateXMLClassifierRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateXMLClassifierRequest");
    }
    UpdateXMLClassifierRequest.isa = isa;
})(UpdateXMLClassifierRequest = exports.UpdateXMLClassifierRequest || (exports.UpdateXMLClassifierRequest = {}));
var XMLClassifier;
(function (XMLClassifier) {
    function isa(o) {
        return smithy_client_1.isa(o, "XMLClassifier");
    }
    XMLClassifier.isa = isa;
})(XMLClassifier = exports.XMLClassifier || (exports.XMLClassifier = {}));
//# sourceMappingURL=index.js.map