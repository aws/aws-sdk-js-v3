"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccessPoint;
(function (AccessPoint) {
    function isa(o) {
        return smithy_client_1.isa(o, "AccessPoint");
    }
    AccessPoint.isa = isa;
})(AccessPoint = exports.AccessPoint || (exports.AccessPoint = {}));
var BadRequestException;
(function (BadRequestException) {
    function isa(o) {
        return smithy_client_1.isa(o, "BadRequestException");
    }
    BadRequestException.isa = isa;
})(BadRequestException = exports.BadRequestException || (exports.BadRequestException = {}));
var CreateAccessPointRequest;
(function (CreateAccessPointRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAccessPointRequest");
    }
    CreateAccessPointRequest.isa = isa;
})(CreateAccessPointRequest = exports.CreateAccessPointRequest || (exports.CreateAccessPointRequest = {}));
var CreateJobRequest;
(function (CreateJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateJobRequest");
    }
    CreateJobRequest.isa = isa;
})(CreateJobRequest = exports.CreateJobRequest || (exports.CreateJobRequest = {}));
var CreateJobResult;
(function (CreateJobResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateJobResult");
    }
    CreateJobResult.isa = isa;
})(CreateJobResult = exports.CreateJobResult || (exports.CreateJobResult = {}));
var DeleteAccessPointPolicyRequest;
(function (DeleteAccessPointPolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteAccessPointPolicyRequest");
    }
    DeleteAccessPointPolicyRequest.isa = isa;
})(DeleteAccessPointPolicyRequest = exports.DeleteAccessPointPolicyRequest || (exports.DeleteAccessPointPolicyRequest = {}));
var DeleteAccessPointRequest;
(function (DeleteAccessPointRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteAccessPointRequest");
    }
    DeleteAccessPointRequest.isa = isa;
})(DeleteAccessPointRequest = exports.DeleteAccessPointRequest || (exports.DeleteAccessPointRequest = {}));
var DeletePublicAccessBlockRequest;
(function (DeletePublicAccessBlockRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeletePublicAccessBlockRequest");
    }
    DeletePublicAccessBlockRequest.isa = isa;
})(DeletePublicAccessBlockRequest = exports.DeletePublicAccessBlockRequest || (exports.DeletePublicAccessBlockRequest = {}));
var DescribeJobRequest;
(function (DescribeJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeJobRequest");
    }
    DescribeJobRequest.isa = isa;
})(DescribeJobRequest = exports.DescribeJobRequest || (exports.DescribeJobRequest = {}));
var DescribeJobResult;
(function (DescribeJobResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeJobResult");
    }
    DescribeJobResult.isa = isa;
})(DescribeJobResult = exports.DescribeJobResult || (exports.DescribeJobResult = {}));
var GetAccessPointPolicyRequest;
(function (GetAccessPointPolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAccessPointPolicyRequest");
    }
    GetAccessPointPolicyRequest.isa = isa;
})(GetAccessPointPolicyRequest = exports.GetAccessPointPolicyRequest || (exports.GetAccessPointPolicyRequest = {}));
var GetAccessPointPolicyResult;
(function (GetAccessPointPolicyResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAccessPointPolicyResult");
    }
    GetAccessPointPolicyResult.isa = isa;
})(GetAccessPointPolicyResult = exports.GetAccessPointPolicyResult || (exports.GetAccessPointPolicyResult = {}));
var GetAccessPointPolicyStatusRequest;
(function (GetAccessPointPolicyStatusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAccessPointPolicyStatusRequest");
    }
    GetAccessPointPolicyStatusRequest.isa = isa;
})(GetAccessPointPolicyStatusRequest = exports.GetAccessPointPolicyStatusRequest || (exports.GetAccessPointPolicyStatusRequest = {}));
var GetAccessPointPolicyStatusResult;
(function (GetAccessPointPolicyStatusResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAccessPointPolicyStatusResult");
    }
    GetAccessPointPolicyStatusResult.isa = isa;
})(GetAccessPointPolicyStatusResult = exports.GetAccessPointPolicyStatusResult || (exports.GetAccessPointPolicyStatusResult = {}));
var GetAccessPointRequest;
(function (GetAccessPointRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAccessPointRequest");
    }
    GetAccessPointRequest.isa = isa;
})(GetAccessPointRequest = exports.GetAccessPointRequest || (exports.GetAccessPointRequest = {}));
var GetAccessPointResult;
(function (GetAccessPointResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAccessPointResult");
    }
    GetAccessPointResult.isa = isa;
})(GetAccessPointResult = exports.GetAccessPointResult || (exports.GetAccessPointResult = {}));
var GetPublicAccessBlockOutput;
(function (GetPublicAccessBlockOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetPublicAccessBlockOutput");
    }
    GetPublicAccessBlockOutput.isa = isa;
})(GetPublicAccessBlockOutput = exports.GetPublicAccessBlockOutput || (exports.GetPublicAccessBlockOutput = {}));
var GetPublicAccessBlockRequest;
(function (GetPublicAccessBlockRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetPublicAccessBlockRequest");
    }
    GetPublicAccessBlockRequest.isa = isa;
})(GetPublicAccessBlockRequest = exports.GetPublicAccessBlockRequest || (exports.GetPublicAccessBlockRequest = {}));
var IdempotencyException;
(function (IdempotencyException) {
    function isa(o) {
        return smithy_client_1.isa(o, "IdempotencyException");
    }
    IdempotencyException.isa = isa;
})(IdempotencyException = exports.IdempotencyException || (exports.IdempotencyException = {}));
var InternalServiceException;
(function (InternalServiceException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalServiceException");
    }
    InternalServiceException.isa = isa;
})(InternalServiceException = exports.InternalServiceException || (exports.InternalServiceException = {}));
var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidNextTokenException");
    }
    InvalidNextTokenException.isa = isa;
})(InvalidNextTokenException = exports.InvalidNextTokenException || (exports.InvalidNextTokenException = {}));
var InvalidRequestException;
(function (InvalidRequestException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidRequestException");
    }
    InvalidRequestException.isa = isa;
})(InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {}));
var JobDescriptor;
(function (JobDescriptor) {
    function isa(o) {
        return smithy_client_1.isa(o, "JobDescriptor");
    }
    JobDescriptor.isa = isa;
})(JobDescriptor = exports.JobDescriptor || (exports.JobDescriptor = {}));
var JobFailure;
(function (JobFailure) {
    function isa(o) {
        return smithy_client_1.isa(o, "JobFailure");
    }
    JobFailure.isa = isa;
})(JobFailure = exports.JobFailure || (exports.JobFailure = {}));
var JobListDescriptor;
(function (JobListDescriptor) {
    function isa(o) {
        return smithy_client_1.isa(o, "JobListDescriptor");
    }
    JobListDescriptor.isa = isa;
})(JobListDescriptor = exports.JobListDescriptor || (exports.JobListDescriptor = {}));
var JobManifest;
(function (JobManifest) {
    function isa(o) {
        return smithy_client_1.isa(o, "JobManifest");
    }
    JobManifest.isa = isa;
})(JobManifest = exports.JobManifest || (exports.JobManifest = {}));
var JobManifestFieldName;
(function (JobManifestFieldName) {
    JobManifestFieldName["Bucket"] = "Bucket";
    JobManifestFieldName["Ignore"] = "Ignore";
    JobManifestFieldName["Key"] = "Key";
    JobManifestFieldName["VersionId"] = "VersionId";
})(JobManifestFieldName = exports.JobManifestFieldName || (exports.JobManifestFieldName = {}));
var JobManifestFormat;
(function (JobManifestFormat) {
    JobManifestFormat["S3BatchOperations_CSV_20180820"] = "S3BatchOperations_CSV_20180820";
    JobManifestFormat["S3InventoryReport_CSV_20161130"] = "S3InventoryReport_CSV_20161130";
})(JobManifestFormat = exports.JobManifestFormat || (exports.JobManifestFormat = {}));
var JobManifestLocation;
(function (JobManifestLocation) {
    function isa(o) {
        return smithy_client_1.isa(o, "JobManifestLocation");
    }
    JobManifestLocation.isa = isa;
})(JobManifestLocation = exports.JobManifestLocation || (exports.JobManifestLocation = {}));
var JobManifestSpec;
(function (JobManifestSpec) {
    function isa(o) {
        return smithy_client_1.isa(o, "JobManifestSpec");
    }
    JobManifestSpec.isa = isa;
})(JobManifestSpec = exports.JobManifestSpec || (exports.JobManifestSpec = {}));
var JobOperation;
(function (JobOperation) {
    function isa(o) {
        return smithy_client_1.isa(o, "JobOperation");
    }
    JobOperation.isa = isa;
})(JobOperation = exports.JobOperation || (exports.JobOperation = {}));
var JobProgressSummary;
(function (JobProgressSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "JobProgressSummary");
    }
    JobProgressSummary.isa = isa;
})(JobProgressSummary = exports.JobProgressSummary || (exports.JobProgressSummary = {}));
var JobReport;
(function (JobReport) {
    function isa(o) {
        return smithy_client_1.isa(o, "JobReport");
    }
    JobReport.isa = isa;
})(JobReport = exports.JobReport || (exports.JobReport = {}));
var JobReportFormat;
(function (JobReportFormat) {
    JobReportFormat["Report_CSV_20180820"] = "Report_CSV_20180820";
})(JobReportFormat = exports.JobReportFormat || (exports.JobReportFormat = {}));
var JobReportScope;
(function (JobReportScope) {
    JobReportScope["AllTasks"] = "AllTasks";
    JobReportScope["FailedTasksOnly"] = "FailedTasksOnly";
})(JobReportScope = exports.JobReportScope || (exports.JobReportScope = {}));
var JobStatus;
(function (JobStatus) {
    JobStatus["Active"] = "Active";
    JobStatus["Cancelled"] = "Cancelled";
    JobStatus["Cancelling"] = "Cancelling";
    JobStatus["Complete"] = "Complete";
    JobStatus["Completing"] = "Completing";
    JobStatus["Failed"] = "Failed";
    JobStatus["Failing"] = "Failing";
    JobStatus["New"] = "New";
    JobStatus["Paused"] = "Paused";
    JobStatus["Pausing"] = "Pausing";
    JobStatus["Preparing"] = "Preparing";
    JobStatus["Ready"] = "Ready";
    JobStatus["Suspended"] = "Suspended";
})(JobStatus = exports.JobStatus || (exports.JobStatus = {}));
var JobStatusException;
(function (JobStatusException) {
    function isa(o) {
        return smithy_client_1.isa(o, "JobStatusException");
    }
    JobStatusException.isa = isa;
})(JobStatusException = exports.JobStatusException || (exports.JobStatusException = {}));
var LambdaInvokeOperation;
(function (LambdaInvokeOperation) {
    function isa(o) {
        return smithy_client_1.isa(o, "LambdaInvokeOperation");
    }
    LambdaInvokeOperation.isa = isa;
})(LambdaInvokeOperation = exports.LambdaInvokeOperation || (exports.LambdaInvokeOperation = {}));
var ListAccessPointsRequest;
(function (ListAccessPointsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAccessPointsRequest");
    }
    ListAccessPointsRequest.isa = isa;
})(ListAccessPointsRequest = exports.ListAccessPointsRequest || (exports.ListAccessPointsRequest = {}));
var ListAccessPointsResult;
(function (ListAccessPointsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAccessPointsResult");
    }
    ListAccessPointsResult.isa = isa;
})(ListAccessPointsResult = exports.ListAccessPointsResult || (exports.ListAccessPointsResult = {}));
var ListJobsRequest;
(function (ListJobsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListJobsRequest");
    }
    ListJobsRequest.isa = isa;
})(ListJobsRequest = exports.ListJobsRequest || (exports.ListJobsRequest = {}));
var ListJobsResult;
(function (ListJobsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListJobsResult");
    }
    ListJobsResult.isa = isa;
})(ListJobsResult = exports.ListJobsResult || (exports.ListJobsResult = {}));
var NetworkOrigin;
(function (NetworkOrigin) {
    NetworkOrigin["Internet"] = "Internet";
    NetworkOrigin["VPC"] = "VPC";
})(NetworkOrigin = exports.NetworkOrigin || (exports.NetworkOrigin = {}));
var NoSuchPublicAccessBlockConfiguration;
(function (NoSuchPublicAccessBlockConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "NoSuchPublicAccessBlockConfiguration");
    }
    NoSuchPublicAccessBlockConfiguration.isa = isa;
})(NoSuchPublicAccessBlockConfiguration = exports.NoSuchPublicAccessBlockConfiguration || (exports.NoSuchPublicAccessBlockConfiguration = {}));
var NotFoundException;
(function (NotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NotFoundException");
    }
    NotFoundException.isa = isa;
})(NotFoundException = exports.NotFoundException || (exports.NotFoundException = {}));
var OperationName;
(function (OperationName) {
    OperationName["LambdaInvoke"] = "LambdaInvoke";
    OperationName["S3InitiateRestoreObject"] = "S3InitiateRestoreObject";
    OperationName["S3PutObjectAcl"] = "S3PutObjectAcl";
    OperationName["S3PutObjectCopy"] = "S3PutObjectCopy";
    OperationName["S3PutObjectTagging"] = "S3PutObjectTagging";
})(OperationName = exports.OperationName || (exports.OperationName = {}));
var PolicyStatus;
(function (PolicyStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "PolicyStatus");
    }
    PolicyStatus.isa = isa;
})(PolicyStatus = exports.PolicyStatus || (exports.PolicyStatus = {}));
var PublicAccessBlockConfiguration;
(function (PublicAccessBlockConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "PublicAccessBlockConfiguration");
    }
    PublicAccessBlockConfiguration.isa = isa;
})(PublicAccessBlockConfiguration = exports.PublicAccessBlockConfiguration || (exports.PublicAccessBlockConfiguration = {}));
var PutAccessPointPolicyRequest;
(function (PutAccessPointPolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutAccessPointPolicyRequest");
    }
    PutAccessPointPolicyRequest.isa = isa;
})(PutAccessPointPolicyRequest = exports.PutAccessPointPolicyRequest || (exports.PutAccessPointPolicyRequest = {}));
var PutPublicAccessBlockRequest;
(function (PutPublicAccessBlockRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutPublicAccessBlockRequest");
    }
    PutPublicAccessBlockRequest.isa = isa;
})(PutPublicAccessBlockRequest = exports.PutPublicAccessBlockRequest || (exports.PutPublicAccessBlockRequest = {}));
var RequestedJobStatus;
(function (RequestedJobStatus) {
    RequestedJobStatus["Cancelled"] = "Cancelled";
    RequestedJobStatus["Ready"] = "Ready";
})(RequestedJobStatus = exports.RequestedJobStatus || (exports.RequestedJobStatus = {}));
var S3AccessControlList;
(function (S3AccessControlList) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3AccessControlList");
    }
    S3AccessControlList.isa = isa;
})(S3AccessControlList = exports.S3AccessControlList || (exports.S3AccessControlList = {}));
var S3AccessControlPolicy;
(function (S3AccessControlPolicy) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3AccessControlPolicy");
    }
    S3AccessControlPolicy.isa = isa;
})(S3AccessControlPolicy = exports.S3AccessControlPolicy || (exports.S3AccessControlPolicy = {}));
var S3CannedAccessControlList;
(function (S3CannedAccessControlList) {
    S3CannedAccessControlList["AUTHENTICATED_READ"] = "authenticated-read";
    S3CannedAccessControlList["AWS_EXEC_READ"] = "aws-exec-read";
    S3CannedAccessControlList["BUCKET_OWNER_FULL_CONTROL"] = "bucket-owner-full-control";
    S3CannedAccessControlList["BUCKET_OWNER_READ"] = "bucket-owner-read";
    S3CannedAccessControlList["PRIVATE"] = "private";
    S3CannedAccessControlList["PUBLIC_READ"] = "public-read";
    S3CannedAccessControlList["PUBLIC_READ_WRITE"] = "public-read-write";
})(S3CannedAccessControlList = exports.S3CannedAccessControlList || (exports.S3CannedAccessControlList = {}));
var S3CopyObjectOperation;
(function (S3CopyObjectOperation) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3CopyObjectOperation");
    }
    S3CopyObjectOperation.isa = isa;
})(S3CopyObjectOperation = exports.S3CopyObjectOperation || (exports.S3CopyObjectOperation = {}));
var S3GlacierJobTier;
(function (S3GlacierJobTier) {
    S3GlacierJobTier["BULK"] = "BULK";
    S3GlacierJobTier["STANDARD"] = "STANDARD";
})(S3GlacierJobTier = exports.S3GlacierJobTier || (exports.S3GlacierJobTier = {}));
var S3Grant;
(function (S3Grant) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3Grant");
    }
    S3Grant.isa = isa;
})(S3Grant = exports.S3Grant || (exports.S3Grant = {}));
var S3Grantee;
(function (S3Grantee) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3Grantee");
    }
    S3Grantee.isa = isa;
})(S3Grantee = exports.S3Grantee || (exports.S3Grantee = {}));
var S3GranteeTypeIdentifier;
(function (S3GranteeTypeIdentifier) {
    S3GranteeTypeIdentifier["CANONICAL"] = "id";
    S3GranteeTypeIdentifier["EMAIL_ADDRESS"] = "emailAddress";
    S3GranteeTypeIdentifier["GROUP"] = "uri";
})(S3GranteeTypeIdentifier = exports.S3GranteeTypeIdentifier || (exports.S3GranteeTypeIdentifier = {}));
var S3InitiateRestoreObjectOperation;
(function (S3InitiateRestoreObjectOperation) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3InitiateRestoreObjectOperation");
    }
    S3InitiateRestoreObjectOperation.isa = isa;
})(S3InitiateRestoreObjectOperation = exports.S3InitiateRestoreObjectOperation || (exports.S3InitiateRestoreObjectOperation = {}));
var S3MetadataDirective;
(function (S3MetadataDirective) {
    S3MetadataDirective["COPY"] = "COPY";
    S3MetadataDirective["REPLACE"] = "REPLACE";
})(S3MetadataDirective = exports.S3MetadataDirective || (exports.S3MetadataDirective = {}));
var S3ObjectLockLegalHoldStatus;
(function (S3ObjectLockLegalHoldStatus) {
    S3ObjectLockLegalHoldStatus["OFF"] = "OFF";
    S3ObjectLockLegalHoldStatus["ON"] = "ON";
})(S3ObjectLockLegalHoldStatus = exports.S3ObjectLockLegalHoldStatus || (exports.S3ObjectLockLegalHoldStatus = {}));
var S3ObjectLockMode;
(function (S3ObjectLockMode) {
    S3ObjectLockMode["COMPLIANCE"] = "COMPLIANCE";
    S3ObjectLockMode["GOVERNANCE"] = "GOVERNANCE";
})(S3ObjectLockMode = exports.S3ObjectLockMode || (exports.S3ObjectLockMode = {}));
var S3ObjectMetadata;
(function (S3ObjectMetadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3ObjectMetadata");
    }
    S3ObjectMetadata.isa = isa;
})(S3ObjectMetadata = exports.S3ObjectMetadata || (exports.S3ObjectMetadata = {}));
var S3ObjectOwner;
(function (S3ObjectOwner) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3ObjectOwner");
    }
    S3ObjectOwner.isa = isa;
})(S3ObjectOwner = exports.S3ObjectOwner || (exports.S3ObjectOwner = {}));
var S3Permission;
(function (S3Permission) {
    S3Permission["FULL_CONTROL"] = "FULL_CONTROL";
    S3Permission["READ"] = "READ";
    S3Permission["READ_ACP"] = "READ_ACP";
    S3Permission["WRITE"] = "WRITE";
    S3Permission["WRITE_ACP"] = "WRITE_ACP";
})(S3Permission = exports.S3Permission || (exports.S3Permission = {}));
var S3SSEAlgorithm;
(function (S3SSEAlgorithm) {
    S3SSEAlgorithm["AES256"] = "AES256";
    S3SSEAlgorithm["KMS"] = "KMS";
})(S3SSEAlgorithm = exports.S3SSEAlgorithm || (exports.S3SSEAlgorithm = {}));
var S3SetObjectAclOperation;
(function (S3SetObjectAclOperation) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3SetObjectAclOperation");
    }
    S3SetObjectAclOperation.isa = isa;
})(S3SetObjectAclOperation = exports.S3SetObjectAclOperation || (exports.S3SetObjectAclOperation = {}));
var S3SetObjectTaggingOperation;
(function (S3SetObjectTaggingOperation) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3SetObjectTaggingOperation");
    }
    S3SetObjectTaggingOperation.isa = isa;
})(S3SetObjectTaggingOperation = exports.S3SetObjectTaggingOperation || (exports.S3SetObjectTaggingOperation = {}));
var S3StorageClass;
(function (S3StorageClass) {
    S3StorageClass["DEEP_ARCHIVE"] = "DEEP_ARCHIVE";
    S3StorageClass["GLACIER"] = "GLACIER";
    S3StorageClass["INTELLIGENT_TIERING"] = "INTELLIGENT_TIERING";
    S3StorageClass["ONEZONE_IA"] = "ONEZONE_IA";
    S3StorageClass["STANDARD"] = "STANDARD";
    S3StorageClass["STANDARD_IA"] = "STANDARD_IA";
})(S3StorageClass = exports.S3StorageClass || (exports.S3StorageClass = {}));
var S3Tag;
(function (S3Tag) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3Tag");
    }
    S3Tag.isa = isa;
})(S3Tag = exports.S3Tag || (exports.S3Tag = {}));
var TooManyRequestsException;
(function (TooManyRequestsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TooManyRequestsException");
    }
    TooManyRequestsException.isa = isa;
})(TooManyRequestsException = exports.TooManyRequestsException || (exports.TooManyRequestsException = {}));
var UpdateJobPriorityRequest;
(function (UpdateJobPriorityRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateJobPriorityRequest");
    }
    UpdateJobPriorityRequest.isa = isa;
})(UpdateJobPriorityRequest = exports.UpdateJobPriorityRequest || (exports.UpdateJobPriorityRequest = {}));
var UpdateJobPriorityResult;
(function (UpdateJobPriorityResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateJobPriorityResult");
    }
    UpdateJobPriorityResult.isa = isa;
})(UpdateJobPriorityResult = exports.UpdateJobPriorityResult || (exports.UpdateJobPriorityResult = {}));
var UpdateJobStatusRequest;
(function (UpdateJobStatusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateJobStatusRequest");
    }
    UpdateJobStatusRequest.isa = isa;
})(UpdateJobStatusRequest = exports.UpdateJobStatusRequest || (exports.UpdateJobStatusRequest = {}));
var UpdateJobStatusResult;
(function (UpdateJobStatusResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateJobStatusResult");
    }
    UpdateJobStatusResult.isa = isa;
})(UpdateJobStatusResult = exports.UpdateJobStatusResult || (exports.UpdateJobStatusResult = {}));
var VpcConfiguration;
(function (VpcConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "VpcConfiguration");
    }
    VpcConfiguration.isa = isa;
})(VpcConfiguration = exports.VpcConfiguration || (exports.VpcConfiguration = {}));
//# sourceMappingURL=index.js.map