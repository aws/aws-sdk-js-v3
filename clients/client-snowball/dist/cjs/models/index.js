"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var Address;
(function (Address) {
    function isa(o) {
        return smithy_client_1.isa(o, "Address");
    }
    Address.isa = isa;
})(Address = exports.Address || (exports.Address = {}));
var CancelClusterRequest;
(function (CancelClusterRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CancelClusterRequest");
    }
    CancelClusterRequest.isa = isa;
})(CancelClusterRequest = exports.CancelClusterRequest || (exports.CancelClusterRequest = {}));
var CancelClusterResult;
(function (CancelClusterResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CancelClusterResult");
    }
    CancelClusterResult.isa = isa;
})(CancelClusterResult = exports.CancelClusterResult || (exports.CancelClusterResult = {}));
var CancelJobRequest;
(function (CancelJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CancelJobRequest");
    }
    CancelJobRequest.isa = isa;
})(CancelJobRequest = exports.CancelJobRequest || (exports.CancelJobRequest = {}));
var CancelJobResult;
(function (CancelJobResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CancelJobResult");
    }
    CancelJobResult.isa = isa;
})(CancelJobResult = exports.CancelJobResult || (exports.CancelJobResult = {}));
var ClusterLimitExceededException;
(function (ClusterLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ClusterLimitExceededException");
    }
    ClusterLimitExceededException.isa = isa;
})(ClusterLimitExceededException = exports.ClusterLimitExceededException || (exports.ClusterLimitExceededException = {}));
var ClusterListEntry;
(function (ClusterListEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "ClusterListEntry");
    }
    ClusterListEntry.isa = isa;
})(ClusterListEntry = exports.ClusterListEntry || (exports.ClusterListEntry = {}));
var ClusterMetadata;
(function (ClusterMetadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "ClusterMetadata");
    }
    ClusterMetadata.isa = isa;
})(ClusterMetadata = exports.ClusterMetadata || (exports.ClusterMetadata = {}));
var ClusterState;
(function (ClusterState) {
    ClusterState["AWAITING_QUORUM"] = "AwaitingQuorum";
    ClusterState["CANCELLED"] = "Cancelled";
    ClusterState["COMPLETE"] = "Complete";
    ClusterState["IN_USE"] = "InUse";
    ClusterState["PENDING"] = "Pending";
})(ClusterState = exports.ClusterState || (exports.ClusterState = {}));
var CompatibleImage;
(function (CompatibleImage) {
    function isa(o) {
        return smithy_client_1.isa(o, "CompatibleImage");
    }
    CompatibleImage.isa = isa;
})(CompatibleImage = exports.CompatibleImage || (exports.CompatibleImage = {}));
var CreateAddressRequest;
(function (CreateAddressRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAddressRequest");
    }
    CreateAddressRequest.isa = isa;
})(CreateAddressRequest = exports.CreateAddressRequest || (exports.CreateAddressRequest = {}));
var CreateAddressResult;
(function (CreateAddressResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateAddressResult");
    }
    CreateAddressResult.isa = isa;
})(CreateAddressResult = exports.CreateAddressResult || (exports.CreateAddressResult = {}));
var CreateClusterRequest;
(function (CreateClusterRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateClusterRequest");
    }
    CreateClusterRequest.isa = isa;
})(CreateClusterRequest = exports.CreateClusterRequest || (exports.CreateClusterRequest = {}));
var CreateClusterResult;
(function (CreateClusterResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateClusterResult");
    }
    CreateClusterResult.isa = isa;
})(CreateClusterResult = exports.CreateClusterResult || (exports.CreateClusterResult = {}));
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
var DataTransfer;
(function (DataTransfer) {
    function isa(o) {
        return smithy_client_1.isa(o, "DataTransfer");
    }
    DataTransfer.isa = isa;
})(DataTransfer = exports.DataTransfer || (exports.DataTransfer = {}));
var DescribeAddressRequest;
(function (DescribeAddressRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAddressRequest");
    }
    DescribeAddressRequest.isa = isa;
})(DescribeAddressRequest = exports.DescribeAddressRequest || (exports.DescribeAddressRequest = {}));
var DescribeAddressResult;
(function (DescribeAddressResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAddressResult");
    }
    DescribeAddressResult.isa = isa;
})(DescribeAddressResult = exports.DescribeAddressResult || (exports.DescribeAddressResult = {}));
var DescribeAddressesRequest;
(function (DescribeAddressesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAddressesRequest");
    }
    DescribeAddressesRequest.isa = isa;
})(DescribeAddressesRequest = exports.DescribeAddressesRequest || (exports.DescribeAddressesRequest = {}));
var DescribeAddressesResult;
(function (DescribeAddressesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAddressesResult");
    }
    DescribeAddressesResult.isa = isa;
})(DescribeAddressesResult = exports.DescribeAddressesResult || (exports.DescribeAddressesResult = {}));
var DescribeClusterRequest;
(function (DescribeClusterRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeClusterRequest");
    }
    DescribeClusterRequest.isa = isa;
})(DescribeClusterRequest = exports.DescribeClusterRequest || (exports.DescribeClusterRequest = {}));
var DescribeClusterResult;
(function (DescribeClusterResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeClusterResult");
    }
    DescribeClusterResult.isa = isa;
})(DescribeClusterResult = exports.DescribeClusterResult || (exports.DescribeClusterResult = {}));
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
var Ec2AmiResource;
(function (Ec2AmiResource) {
    function isa(o) {
        return smithy_client_1.isa(o, "Ec2AmiResource");
    }
    Ec2AmiResource.isa = isa;
})(Ec2AmiResource = exports.Ec2AmiResource || (exports.Ec2AmiResource = {}));
var Ec2RequestFailedException;
(function (Ec2RequestFailedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "Ec2RequestFailedException");
    }
    Ec2RequestFailedException.isa = isa;
})(Ec2RequestFailedException = exports.Ec2RequestFailedException || (exports.Ec2RequestFailedException = {}));
var EventTriggerDefinition;
(function (EventTriggerDefinition) {
    function isa(o) {
        return smithy_client_1.isa(o, "EventTriggerDefinition");
    }
    EventTriggerDefinition.isa = isa;
})(EventTriggerDefinition = exports.EventTriggerDefinition || (exports.EventTriggerDefinition = {}));
var GetJobManifestRequest;
(function (GetJobManifestRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetJobManifestRequest");
    }
    GetJobManifestRequest.isa = isa;
})(GetJobManifestRequest = exports.GetJobManifestRequest || (exports.GetJobManifestRequest = {}));
var GetJobManifestResult;
(function (GetJobManifestResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetJobManifestResult");
    }
    GetJobManifestResult.isa = isa;
})(GetJobManifestResult = exports.GetJobManifestResult || (exports.GetJobManifestResult = {}));
var GetJobUnlockCodeRequest;
(function (GetJobUnlockCodeRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetJobUnlockCodeRequest");
    }
    GetJobUnlockCodeRequest.isa = isa;
})(GetJobUnlockCodeRequest = exports.GetJobUnlockCodeRequest || (exports.GetJobUnlockCodeRequest = {}));
var GetJobUnlockCodeResult;
(function (GetJobUnlockCodeResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetJobUnlockCodeResult");
    }
    GetJobUnlockCodeResult.isa = isa;
})(GetJobUnlockCodeResult = exports.GetJobUnlockCodeResult || (exports.GetJobUnlockCodeResult = {}));
var GetSnowballUsageRequest;
(function (GetSnowballUsageRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSnowballUsageRequest");
    }
    GetSnowballUsageRequest.isa = isa;
})(GetSnowballUsageRequest = exports.GetSnowballUsageRequest || (exports.GetSnowballUsageRequest = {}));
var GetSnowballUsageResult;
(function (GetSnowballUsageResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSnowballUsageResult");
    }
    GetSnowballUsageResult.isa = isa;
})(GetSnowballUsageResult = exports.GetSnowballUsageResult || (exports.GetSnowballUsageResult = {}));
var GetSoftwareUpdatesRequest;
(function (GetSoftwareUpdatesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSoftwareUpdatesRequest");
    }
    GetSoftwareUpdatesRequest.isa = isa;
})(GetSoftwareUpdatesRequest = exports.GetSoftwareUpdatesRequest || (exports.GetSoftwareUpdatesRequest = {}));
var GetSoftwareUpdatesResult;
(function (GetSoftwareUpdatesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSoftwareUpdatesResult");
    }
    GetSoftwareUpdatesResult.isa = isa;
})(GetSoftwareUpdatesResult = exports.GetSoftwareUpdatesResult || (exports.GetSoftwareUpdatesResult = {}));
var InvalidAddressException;
(function (InvalidAddressException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidAddressException");
    }
    InvalidAddressException.isa = isa;
})(InvalidAddressException = exports.InvalidAddressException || (exports.InvalidAddressException = {}));
var InvalidInputCombinationException;
(function (InvalidInputCombinationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidInputCombinationException");
    }
    InvalidInputCombinationException.isa = isa;
})(InvalidInputCombinationException = exports.InvalidInputCombinationException || (exports.InvalidInputCombinationException = {}));
var InvalidJobStateException;
(function (InvalidJobStateException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidJobStateException");
    }
    InvalidJobStateException.isa = isa;
})(InvalidJobStateException = exports.InvalidJobStateException || (exports.InvalidJobStateException = {}));
var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidNextTokenException");
    }
    InvalidNextTokenException.isa = isa;
})(InvalidNextTokenException = exports.InvalidNextTokenException || (exports.InvalidNextTokenException = {}));
var InvalidResourceException;
(function (InvalidResourceException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidResourceException");
    }
    InvalidResourceException.isa = isa;
})(InvalidResourceException = exports.InvalidResourceException || (exports.InvalidResourceException = {}));
var JobListEntry;
(function (JobListEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "JobListEntry");
    }
    JobListEntry.isa = isa;
})(JobListEntry = exports.JobListEntry || (exports.JobListEntry = {}));
var JobLogs;
(function (JobLogs) {
    function isa(o) {
        return smithy_client_1.isa(o, "JobLogs");
    }
    JobLogs.isa = isa;
})(JobLogs = exports.JobLogs || (exports.JobLogs = {}));
var JobMetadata;
(function (JobMetadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "JobMetadata");
    }
    JobMetadata.isa = isa;
})(JobMetadata = exports.JobMetadata || (exports.JobMetadata = {}));
var JobResource;
(function (JobResource) {
    function isa(o) {
        return smithy_client_1.isa(o, "JobResource");
    }
    JobResource.isa = isa;
})(JobResource = exports.JobResource || (exports.JobResource = {}));
var JobState;
(function (JobState) {
    JobState["CANCELLED"] = "Cancelled";
    JobState["COMPLETE"] = "Complete";
    JobState["IN_PROGRESS"] = "InProgress";
    JobState["IN_TRANSIT_TO_AWS"] = "InTransitToAWS";
    JobState["IN_TRANSIT_TO_CUSTOMER"] = "InTransitToCustomer";
    JobState["LISTING"] = "Listing";
    JobState["NEW"] = "New";
    JobState["PENDING"] = "Pending";
    JobState["PREPARING_APPLIANCE"] = "PreparingAppliance";
    JobState["PREPARING_SHIPMENT"] = "PreparingShipment";
    JobState["WITH_AWS"] = "WithAWS";
    JobState["WITH_AWS_SORTING_FACILITY"] = "WithAWSSortingFacility";
    JobState["WITH_CUSTOMER"] = "WithCustomer";
})(JobState = exports.JobState || (exports.JobState = {}));
var JobType;
(function (JobType) {
    JobType["EXPORT"] = "EXPORT";
    JobType["IMPORT"] = "IMPORT";
    JobType["LOCAL_USE"] = "LOCAL_USE";
})(JobType = exports.JobType || (exports.JobType = {}));
var KMSRequestFailedException;
(function (KMSRequestFailedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "KMSRequestFailedException");
    }
    KMSRequestFailedException.isa = isa;
})(KMSRequestFailedException = exports.KMSRequestFailedException || (exports.KMSRequestFailedException = {}));
var KeyRange;
(function (KeyRange) {
    function isa(o) {
        return smithy_client_1.isa(o, "KeyRange");
    }
    KeyRange.isa = isa;
})(KeyRange = exports.KeyRange || (exports.KeyRange = {}));
var LambdaResource;
(function (LambdaResource) {
    function isa(o) {
        return smithy_client_1.isa(o, "LambdaResource");
    }
    LambdaResource.isa = isa;
})(LambdaResource = exports.LambdaResource || (exports.LambdaResource = {}));
var ListClusterJobsRequest;
(function (ListClusterJobsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListClusterJobsRequest");
    }
    ListClusterJobsRequest.isa = isa;
})(ListClusterJobsRequest = exports.ListClusterJobsRequest || (exports.ListClusterJobsRequest = {}));
var ListClusterJobsResult;
(function (ListClusterJobsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListClusterJobsResult");
    }
    ListClusterJobsResult.isa = isa;
})(ListClusterJobsResult = exports.ListClusterJobsResult || (exports.ListClusterJobsResult = {}));
var ListClustersRequest;
(function (ListClustersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListClustersRequest");
    }
    ListClustersRequest.isa = isa;
})(ListClustersRequest = exports.ListClustersRequest || (exports.ListClustersRequest = {}));
var ListClustersResult;
(function (ListClustersResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListClustersResult");
    }
    ListClustersResult.isa = isa;
})(ListClustersResult = exports.ListClustersResult || (exports.ListClustersResult = {}));
var ListCompatibleImagesRequest;
(function (ListCompatibleImagesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListCompatibleImagesRequest");
    }
    ListCompatibleImagesRequest.isa = isa;
})(ListCompatibleImagesRequest = exports.ListCompatibleImagesRequest || (exports.ListCompatibleImagesRequest = {}));
var ListCompatibleImagesResult;
(function (ListCompatibleImagesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListCompatibleImagesResult");
    }
    ListCompatibleImagesResult.isa = isa;
})(ListCompatibleImagesResult = exports.ListCompatibleImagesResult || (exports.ListCompatibleImagesResult = {}));
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
var Notification;
(function (Notification) {
    function isa(o) {
        return smithy_client_1.isa(o, "Notification");
    }
    Notification.isa = isa;
})(Notification = exports.Notification || (exports.Notification = {}));
var S3Resource;
(function (S3Resource) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3Resource");
    }
    S3Resource.isa = isa;
})(S3Resource = exports.S3Resource || (exports.S3Resource = {}));
var Shipment;
(function (Shipment) {
    function isa(o) {
        return smithy_client_1.isa(o, "Shipment");
    }
    Shipment.isa = isa;
})(Shipment = exports.Shipment || (exports.Shipment = {}));
var ShippingDetails;
(function (ShippingDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "ShippingDetails");
    }
    ShippingDetails.isa = isa;
})(ShippingDetails = exports.ShippingDetails || (exports.ShippingDetails = {}));
var ShippingOption;
(function (ShippingOption) {
    ShippingOption["EXPRESS"] = "EXPRESS";
    ShippingOption["NEXT_DAY"] = "NEXT_DAY";
    ShippingOption["SECOND_DAY"] = "SECOND_DAY";
    ShippingOption["STANDARD"] = "STANDARD";
})(ShippingOption = exports.ShippingOption || (exports.ShippingOption = {}));
var SnowballCapacity;
(function (SnowballCapacity) {
    SnowballCapacity["NO_PREFERENCE"] = "NoPreference";
    SnowballCapacity["T100"] = "T100";
    SnowballCapacity["T42"] = "T42";
    SnowballCapacity["T50"] = "T50";
    SnowballCapacity["T80"] = "T80";
})(SnowballCapacity = exports.SnowballCapacity || (exports.SnowballCapacity = {}));
var SnowballType;
(function (SnowballType) {
    SnowballType["EDGE"] = "EDGE";
    SnowballType["EDGE_C"] = "EDGE_C";
    SnowballType["EDGE_CG"] = "EDGE_CG";
    SnowballType["STANDARD"] = "STANDARD";
})(SnowballType = exports.SnowballType || (exports.SnowballType = {}));
var UnsupportedAddressException;
(function (UnsupportedAddressException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnsupportedAddressException");
    }
    UnsupportedAddressException.isa = isa;
})(UnsupportedAddressException = exports.UnsupportedAddressException || (exports.UnsupportedAddressException = {}));
var UpdateClusterRequest;
(function (UpdateClusterRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateClusterRequest");
    }
    UpdateClusterRequest.isa = isa;
})(UpdateClusterRequest = exports.UpdateClusterRequest || (exports.UpdateClusterRequest = {}));
var UpdateClusterResult;
(function (UpdateClusterResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateClusterResult");
    }
    UpdateClusterResult.isa = isa;
})(UpdateClusterResult = exports.UpdateClusterResult || (exports.UpdateClusterResult = {}));
var UpdateJobRequest;
(function (UpdateJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateJobRequest");
    }
    UpdateJobRequest.isa = isa;
})(UpdateJobRequest = exports.UpdateJobRequest || (exports.UpdateJobRequest = {}));
var UpdateJobResult;
(function (UpdateJobResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateJobResult");
    }
    UpdateJobResult.isa = isa;
})(UpdateJobResult = exports.UpdateJobResult || (exports.UpdateJobResult = {}));
//# sourceMappingURL=index.js.map