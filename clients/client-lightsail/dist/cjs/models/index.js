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
var AccessDirection;
(function (AccessDirection) {
    AccessDirection["inbound"] = "inbound";
    AccessDirection["outbound"] = "outbound";
})(AccessDirection = exports.AccessDirection || (exports.AccessDirection = {}));
var AccountSetupInProgressException;
(function (AccountSetupInProgressException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AccountSetupInProgressException");
    }
    AccountSetupInProgressException.isa = isa;
})(AccountSetupInProgressException = exports.AccountSetupInProgressException || (exports.AccountSetupInProgressException = {}));
var AddOn;
(function (AddOn) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddOn");
    }
    AddOn.isa = isa;
})(AddOn = exports.AddOn || (exports.AddOn = {}));
var AddOnRequest;
(function (AddOnRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AddOnRequest");
    }
    AddOnRequest.isa = isa;
})(AddOnRequest = exports.AddOnRequest || (exports.AddOnRequest = {}));
var AddOnType;
(function (AddOnType) {
    AddOnType["AutoSnapshot"] = "AutoSnapshot";
})(AddOnType = exports.AddOnType || (exports.AddOnType = {}));
var AllocateStaticIpRequest;
(function (AllocateStaticIpRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AllocateStaticIpRequest");
    }
    AllocateStaticIpRequest.isa = isa;
})(AllocateStaticIpRequest = exports.AllocateStaticIpRequest || (exports.AllocateStaticIpRequest = {}));
var AllocateStaticIpResult;
(function (AllocateStaticIpResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "AllocateStaticIpResult");
    }
    AllocateStaticIpResult.isa = isa;
})(AllocateStaticIpResult = exports.AllocateStaticIpResult || (exports.AllocateStaticIpResult = {}));
var AttachDiskRequest;
(function (AttachDiskRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AttachDiskRequest");
    }
    AttachDiskRequest.isa = isa;
})(AttachDiskRequest = exports.AttachDiskRequest || (exports.AttachDiskRequest = {}));
var AttachDiskResult;
(function (AttachDiskResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "AttachDiskResult");
    }
    AttachDiskResult.isa = isa;
})(AttachDiskResult = exports.AttachDiskResult || (exports.AttachDiskResult = {}));
var AttachInstancesToLoadBalancerRequest;
(function (AttachInstancesToLoadBalancerRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AttachInstancesToLoadBalancerRequest");
    }
    AttachInstancesToLoadBalancerRequest.isa = isa;
})(AttachInstancesToLoadBalancerRequest = exports.AttachInstancesToLoadBalancerRequest || (exports.AttachInstancesToLoadBalancerRequest = {}));
var AttachInstancesToLoadBalancerResult;
(function (AttachInstancesToLoadBalancerResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "AttachInstancesToLoadBalancerResult");
    }
    AttachInstancesToLoadBalancerResult.isa = isa;
})(AttachInstancesToLoadBalancerResult = exports.AttachInstancesToLoadBalancerResult || (exports.AttachInstancesToLoadBalancerResult = {}));
var AttachLoadBalancerTlsCertificateRequest;
(function (AttachLoadBalancerTlsCertificateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AttachLoadBalancerTlsCertificateRequest");
    }
    AttachLoadBalancerTlsCertificateRequest.isa = isa;
})(AttachLoadBalancerTlsCertificateRequest = exports.AttachLoadBalancerTlsCertificateRequest || (exports.AttachLoadBalancerTlsCertificateRequest = {}));
var AttachLoadBalancerTlsCertificateResult;
(function (AttachLoadBalancerTlsCertificateResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "AttachLoadBalancerTlsCertificateResult");
    }
    AttachLoadBalancerTlsCertificateResult.isa = isa;
})(AttachLoadBalancerTlsCertificateResult = exports.AttachLoadBalancerTlsCertificateResult || (exports.AttachLoadBalancerTlsCertificateResult = {}));
var AttachStaticIpRequest;
(function (AttachStaticIpRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AttachStaticIpRequest");
    }
    AttachStaticIpRequest.isa = isa;
})(AttachStaticIpRequest = exports.AttachStaticIpRequest || (exports.AttachStaticIpRequest = {}));
var AttachStaticIpResult;
(function (AttachStaticIpResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "AttachStaticIpResult");
    }
    AttachStaticIpResult.isa = isa;
})(AttachStaticIpResult = exports.AttachStaticIpResult || (exports.AttachStaticIpResult = {}));
var AttachedDisk;
(function (AttachedDisk) {
    function isa(o) {
        return smithy_client_1.isa(o, "AttachedDisk");
    }
    AttachedDisk.isa = isa;
})(AttachedDisk = exports.AttachedDisk || (exports.AttachedDisk = {}));
var AutoSnapshotAddOnRequest;
(function (AutoSnapshotAddOnRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutoSnapshotAddOnRequest");
    }
    AutoSnapshotAddOnRequest.isa = isa;
})(AutoSnapshotAddOnRequest = exports.AutoSnapshotAddOnRequest || (exports.AutoSnapshotAddOnRequest = {}));
var AutoSnapshotDetails;
(function (AutoSnapshotDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutoSnapshotDetails");
    }
    AutoSnapshotDetails.isa = isa;
})(AutoSnapshotDetails = exports.AutoSnapshotDetails || (exports.AutoSnapshotDetails = {}));
var AutoSnapshotStatus;
(function (AutoSnapshotStatus) {
    AutoSnapshotStatus["FAILED"] = "Failed";
    AutoSnapshotStatus["IN_PROGRESS"] = "InProgress";
    AutoSnapshotStatus["NOT_FOUND"] = "NotFound";
    AutoSnapshotStatus["SUCCESS"] = "Success";
})(AutoSnapshotStatus = exports.AutoSnapshotStatus || (exports.AutoSnapshotStatus = {}));
var AvailabilityZone;
(function (AvailabilityZone) {
    function isa(o) {
        return smithy_client_1.isa(o, "AvailabilityZone");
    }
    AvailabilityZone.isa = isa;
})(AvailabilityZone = exports.AvailabilityZone || (exports.AvailabilityZone = {}));
var Blueprint;
(function (Blueprint) {
    function isa(o) {
        return smithy_client_1.isa(o, "Blueprint");
    }
    Blueprint.isa = isa;
})(Blueprint = exports.Blueprint || (exports.Blueprint = {}));
var BlueprintType;
(function (BlueprintType) {
    BlueprintType["app"] = "app";
    BlueprintType["os"] = "os";
})(BlueprintType = exports.BlueprintType || (exports.BlueprintType = {}));
var Bundle;
(function (Bundle) {
    function isa(o) {
        return smithy_client_1.isa(o, "Bundle");
    }
    Bundle.isa = isa;
})(Bundle = exports.Bundle || (exports.Bundle = {}));
var CloseInstancePublicPortsRequest;
(function (CloseInstancePublicPortsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CloseInstancePublicPortsRequest");
    }
    CloseInstancePublicPortsRequest.isa = isa;
})(CloseInstancePublicPortsRequest = exports.CloseInstancePublicPortsRequest || (exports.CloseInstancePublicPortsRequest = {}));
var CloseInstancePublicPortsResult;
(function (CloseInstancePublicPortsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CloseInstancePublicPortsResult");
    }
    CloseInstancePublicPortsResult.isa = isa;
})(CloseInstancePublicPortsResult = exports.CloseInstancePublicPortsResult || (exports.CloseInstancePublicPortsResult = {}));
var CloudFormationStackRecord;
(function (CloudFormationStackRecord) {
    function isa(o) {
        return smithy_client_1.isa(o, "CloudFormationStackRecord");
    }
    CloudFormationStackRecord.isa = isa;
})(CloudFormationStackRecord = exports.CloudFormationStackRecord || (exports.CloudFormationStackRecord = {}));
var CloudFormationStackRecordSourceInfo;
(function (CloudFormationStackRecordSourceInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "CloudFormationStackRecordSourceInfo");
    }
    CloudFormationStackRecordSourceInfo.isa = isa;
})(CloudFormationStackRecordSourceInfo = exports.CloudFormationStackRecordSourceInfo || (exports.CloudFormationStackRecordSourceInfo = {}));
var CloudFormationStackRecordSourceType;
(function (CloudFormationStackRecordSourceType) {
    CloudFormationStackRecordSourceType["ExportSnapshotRecord"] = "ExportSnapshotRecord";
})(CloudFormationStackRecordSourceType = exports.CloudFormationStackRecordSourceType || (exports.CloudFormationStackRecordSourceType = {}));
var CopySnapshotRequest;
(function (CopySnapshotRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CopySnapshotRequest");
    }
    CopySnapshotRequest.isa = isa;
})(CopySnapshotRequest = exports.CopySnapshotRequest || (exports.CopySnapshotRequest = {}));
var CopySnapshotResult;
(function (CopySnapshotResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CopySnapshotResult");
    }
    CopySnapshotResult.isa = isa;
})(CopySnapshotResult = exports.CopySnapshotResult || (exports.CopySnapshotResult = {}));
var CreateCloudFormationStackRequest;
(function (CreateCloudFormationStackRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateCloudFormationStackRequest");
    }
    CreateCloudFormationStackRequest.isa = isa;
})(CreateCloudFormationStackRequest = exports.CreateCloudFormationStackRequest || (exports.CreateCloudFormationStackRequest = {}));
var CreateCloudFormationStackResult;
(function (CreateCloudFormationStackResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateCloudFormationStackResult");
    }
    CreateCloudFormationStackResult.isa = isa;
})(CreateCloudFormationStackResult = exports.CreateCloudFormationStackResult || (exports.CreateCloudFormationStackResult = {}));
var CreateDiskFromSnapshotRequest;
(function (CreateDiskFromSnapshotRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDiskFromSnapshotRequest");
    }
    CreateDiskFromSnapshotRequest.isa = isa;
})(CreateDiskFromSnapshotRequest = exports.CreateDiskFromSnapshotRequest || (exports.CreateDiskFromSnapshotRequest = {}));
var CreateDiskFromSnapshotResult;
(function (CreateDiskFromSnapshotResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDiskFromSnapshotResult");
    }
    CreateDiskFromSnapshotResult.isa = isa;
})(CreateDiskFromSnapshotResult = exports.CreateDiskFromSnapshotResult || (exports.CreateDiskFromSnapshotResult = {}));
var CreateDiskRequest;
(function (CreateDiskRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDiskRequest");
    }
    CreateDiskRequest.isa = isa;
})(CreateDiskRequest = exports.CreateDiskRequest || (exports.CreateDiskRequest = {}));
var CreateDiskResult;
(function (CreateDiskResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDiskResult");
    }
    CreateDiskResult.isa = isa;
})(CreateDiskResult = exports.CreateDiskResult || (exports.CreateDiskResult = {}));
var CreateDiskSnapshotRequest;
(function (CreateDiskSnapshotRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDiskSnapshotRequest");
    }
    CreateDiskSnapshotRequest.isa = isa;
})(CreateDiskSnapshotRequest = exports.CreateDiskSnapshotRequest || (exports.CreateDiskSnapshotRequest = {}));
var CreateDiskSnapshotResult;
(function (CreateDiskSnapshotResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDiskSnapshotResult");
    }
    CreateDiskSnapshotResult.isa = isa;
})(CreateDiskSnapshotResult = exports.CreateDiskSnapshotResult || (exports.CreateDiskSnapshotResult = {}));
var CreateDomainEntryRequest;
(function (CreateDomainEntryRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDomainEntryRequest");
    }
    CreateDomainEntryRequest.isa = isa;
})(CreateDomainEntryRequest = exports.CreateDomainEntryRequest || (exports.CreateDomainEntryRequest = {}));
var CreateDomainEntryResult;
(function (CreateDomainEntryResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDomainEntryResult");
    }
    CreateDomainEntryResult.isa = isa;
})(CreateDomainEntryResult = exports.CreateDomainEntryResult || (exports.CreateDomainEntryResult = {}));
var CreateDomainRequest;
(function (CreateDomainRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDomainRequest");
    }
    CreateDomainRequest.isa = isa;
})(CreateDomainRequest = exports.CreateDomainRequest || (exports.CreateDomainRequest = {}));
var CreateDomainResult;
(function (CreateDomainResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDomainResult");
    }
    CreateDomainResult.isa = isa;
})(CreateDomainResult = exports.CreateDomainResult || (exports.CreateDomainResult = {}));
var CreateInstanceSnapshotRequest;
(function (CreateInstanceSnapshotRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateInstanceSnapshotRequest");
    }
    CreateInstanceSnapshotRequest.isa = isa;
})(CreateInstanceSnapshotRequest = exports.CreateInstanceSnapshotRequest || (exports.CreateInstanceSnapshotRequest = {}));
var CreateInstanceSnapshotResult;
(function (CreateInstanceSnapshotResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateInstanceSnapshotResult");
    }
    CreateInstanceSnapshotResult.isa = isa;
})(CreateInstanceSnapshotResult = exports.CreateInstanceSnapshotResult || (exports.CreateInstanceSnapshotResult = {}));
var CreateInstancesFromSnapshotRequest;
(function (CreateInstancesFromSnapshotRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateInstancesFromSnapshotRequest");
    }
    CreateInstancesFromSnapshotRequest.isa = isa;
})(CreateInstancesFromSnapshotRequest = exports.CreateInstancesFromSnapshotRequest || (exports.CreateInstancesFromSnapshotRequest = {}));
var CreateInstancesFromSnapshotResult;
(function (CreateInstancesFromSnapshotResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateInstancesFromSnapshotResult");
    }
    CreateInstancesFromSnapshotResult.isa = isa;
})(CreateInstancesFromSnapshotResult = exports.CreateInstancesFromSnapshotResult || (exports.CreateInstancesFromSnapshotResult = {}));
var CreateInstancesRequest;
(function (CreateInstancesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateInstancesRequest");
    }
    CreateInstancesRequest.isa = isa;
})(CreateInstancesRequest = exports.CreateInstancesRequest || (exports.CreateInstancesRequest = {}));
var CreateInstancesResult;
(function (CreateInstancesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateInstancesResult");
    }
    CreateInstancesResult.isa = isa;
})(CreateInstancesResult = exports.CreateInstancesResult || (exports.CreateInstancesResult = {}));
var CreateKeyPairRequest;
(function (CreateKeyPairRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateKeyPairRequest");
    }
    CreateKeyPairRequest.isa = isa;
})(CreateKeyPairRequest = exports.CreateKeyPairRequest || (exports.CreateKeyPairRequest = {}));
var CreateKeyPairResult;
(function (CreateKeyPairResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateKeyPairResult");
    }
    CreateKeyPairResult.isa = isa;
})(CreateKeyPairResult = exports.CreateKeyPairResult || (exports.CreateKeyPairResult = {}));
var CreateLoadBalancerRequest;
(function (CreateLoadBalancerRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateLoadBalancerRequest");
    }
    CreateLoadBalancerRequest.isa = isa;
})(CreateLoadBalancerRequest = exports.CreateLoadBalancerRequest || (exports.CreateLoadBalancerRequest = {}));
var CreateLoadBalancerResult;
(function (CreateLoadBalancerResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateLoadBalancerResult");
    }
    CreateLoadBalancerResult.isa = isa;
})(CreateLoadBalancerResult = exports.CreateLoadBalancerResult || (exports.CreateLoadBalancerResult = {}));
var CreateLoadBalancerTlsCertificateRequest;
(function (CreateLoadBalancerTlsCertificateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateLoadBalancerTlsCertificateRequest");
    }
    CreateLoadBalancerTlsCertificateRequest.isa = isa;
})(CreateLoadBalancerTlsCertificateRequest = exports.CreateLoadBalancerTlsCertificateRequest || (exports.CreateLoadBalancerTlsCertificateRequest = {}));
var CreateLoadBalancerTlsCertificateResult;
(function (CreateLoadBalancerTlsCertificateResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateLoadBalancerTlsCertificateResult");
    }
    CreateLoadBalancerTlsCertificateResult.isa = isa;
})(CreateLoadBalancerTlsCertificateResult = exports.CreateLoadBalancerTlsCertificateResult || (exports.CreateLoadBalancerTlsCertificateResult = {}));
var CreateRelationalDatabaseFromSnapshotRequest;
(function (CreateRelationalDatabaseFromSnapshotRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateRelationalDatabaseFromSnapshotRequest");
    }
    CreateRelationalDatabaseFromSnapshotRequest.isa = isa;
})(CreateRelationalDatabaseFromSnapshotRequest = exports.CreateRelationalDatabaseFromSnapshotRequest || (exports.CreateRelationalDatabaseFromSnapshotRequest = {}));
var CreateRelationalDatabaseFromSnapshotResult;
(function (CreateRelationalDatabaseFromSnapshotResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateRelationalDatabaseFromSnapshotResult");
    }
    CreateRelationalDatabaseFromSnapshotResult.isa = isa;
})(CreateRelationalDatabaseFromSnapshotResult = exports.CreateRelationalDatabaseFromSnapshotResult || (exports.CreateRelationalDatabaseFromSnapshotResult = {}));
var CreateRelationalDatabaseRequest;
(function (CreateRelationalDatabaseRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateRelationalDatabaseRequest");
    }
    CreateRelationalDatabaseRequest.isa = isa;
})(CreateRelationalDatabaseRequest = exports.CreateRelationalDatabaseRequest || (exports.CreateRelationalDatabaseRequest = {}));
var CreateRelationalDatabaseResult;
(function (CreateRelationalDatabaseResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateRelationalDatabaseResult");
    }
    CreateRelationalDatabaseResult.isa = isa;
})(CreateRelationalDatabaseResult = exports.CreateRelationalDatabaseResult || (exports.CreateRelationalDatabaseResult = {}));
var CreateRelationalDatabaseSnapshotRequest;
(function (CreateRelationalDatabaseSnapshotRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateRelationalDatabaseSnapshotRequest");
    }
    CreateRelationalDatabaseSnapshotRequest.isa = isa;
})(CreateRelationalDatabaseSnapshotRequest = exports.CreateRelationalDatabaseSnapshotRequest || (exports.CreateRelationalDatabaseSnapshotRequest = {}));
var CreateRelationalDatabaseSnapshotResult;
(function (CreateRelationalDatabaseSnapshotResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateRelationalDatabaseSnapshotResult");
    }
    CreateRelationalDatabaseSnapshotResult.isa = isa;
})(CreateRelationalDatabaseSnapshotResult = exports.CreateRelationalDatabaseSnapshotResult || (exports.CreateRelationalDatabaseSnapshotResult = {}));
var DeleteAutoSnapshotRequest;
(function (DeleteAutoSnapshotRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteAutoSnapshotRequest");
    }
    DeleteAutoSnapshotRequest.isa = isa;
})(DeleteAutoSnapshotRequest = exports.DeleteAutoSnapshotRequest || (exports.DeleteAutoSnapshotRequest = {}));
var DeleteAutoSnapshotResult;
(function (DeleteAutoSnapshotResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteAutoSnapshotResult");
    }
    DeleteAutoSnapshotResult.isa = isa;
})(DeleteAutoSnapshotResult = exports.DeleteAutoSnapshotResult || (exports.DeleteAutoSnapshotResult = {}));
var DeleteDiskRequest;
(function (DeleteDiskRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDiskRequest");
    }
    DeleteDiskRequest.isa = isa;
})(DeleteDiskRequest = exports.DeleteDiskRequest || (exports.DeleteDiskRequest = {}));
var DeleteDiskResult;
(function (DeleteDiskResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDiskResult");
    }
    DeleteDiskResult.isa = isa;
})(DeleteDiskResult = exports.DeleteDiskResult || (exports.DeleteDiskResult = {}));
var DeleteDiskSnapshotRequest;
(function (DeleteDiskSnapshotRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDiskSnapshotRequest");
    }
    DeleteDiskSnapshotRequest.isa = isa;
})(DeleteDiskSnapshotRequest = exports.DeleteDiskSnapshotRequest || (exports.DeleteDiskSnapshotRequest = {}));
var DeleteDiskSnapshotResult;
(function (DeleteDiskSnapshotResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDiskSnapshotResult");
    }
    DeleteDiskSnapshotResult.isa = isa;
})(DeleteDiskSnapshotResult = exports.DeleteDiskSnapshotResult || (exports.DeleteDiskSnapshotResult = {}));
var DeleteDomainEntryRequest;
(function (DeleteDomainEntryRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDomainEntryRequest");
    }
    DeleteDomainEntryRequest.isa = isa;
})(DeleteDomainEntryRequest = exports.DeleteDomainEntryRequest || (exports.DeleteDomainEntryRequest = {}));
var DeleteDomainEntryResult;
(function (DeleteDomainEntryResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDomainEntryResult");
    }
    DeleteDomainEntryResult.isa = isa;
})(DeleteDomainEntryResult = exports.DeleteDomainEntryResult || (exports.DeleteDomainEntryResult = {}));
var DeleteDomainRequest;
(function (DeleteDomainRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDomainRequest");
    }
    DeleteDomainRequest.isa = isa;
})(DeleteDomainRequest = exports.DeleteDomainRequest || (exports.DeleteDomainRequest = {}));
var DeleteDomainResult;
(function (DeleteDomainResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDomainResult");
    }
    DeleteDomainResult.isa = isa;
})(DeleteDomainResult = exports.DeleteDomainResult || (exports.DeleteDomainResult = {}));
var DeleteInstanceRequest;
(function (DeleteInstanceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteInstanceRequest");
    }
    DeleteInstanceRequest.isa = isa;
})(DeleteInstanceRequest = exports.DeleteInstanceRequest || (exports.DeleteInstanceRequest = {}));
var DeleteInstanceResult;
(function (DeleteInstanceResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteInstanceResult");
    }
    DeleteInstanceResult.isa = isa;
})(DeleteInstanceResult = exports.DeleteInstanceResult || (exports.DeleteInstanceResult = {}));
var DeleteInstanceSnapshotRequest;
(function (DeleteInstanceSnapshotRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteInstanceSnapshotRequest");
    }
    DeleteInstanceSnapshotRequest.isa = isa;
})(DeleteInstanceSnapshotRequest = exports.DeleteInstanceSnapshotRequest || (exports.DeleteInstanceSnapshotRequest = {}));
var DeleteInstanceSnapshotResult;
(function (DeleteInstanceSnapshotResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteInstanceSnapshotResult");
    }
    DeleteInstanceSnapshotResult.isa = isa;
})(DeleteInstanceSnapshotResult = exports.DeleteInstanceSnapshotResult || (exports.DeleteInstanceSnapshotResult = {}));
var DeleteKeyPairRequest;
(function (DeleteKeyPairRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteKeyPairRequest");
    }
    DeleteKeyPairRequest.isa = isa;
})(DeleteKeyPairRequest = exports.DeleteKeyPairRequest || (exports.DeleteKeyPairRequest = {}));
var DeleteKeyPairResult;
(function (DeleteKeyPairResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteKeyPairResult");
    }
    DeleteKeyPairResult.isa = isa;
})(DeleteKeyPairResult = exports.DeleteKeyPairResult || (exports.DeleteKeyPairResult = {}));
var DeleteKnownHostKeysRequest;
(function (DeleteKnownHostKeysRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteKnownHostKeysRequest");
    }
    DeleteKnownHostKeysRequest.isa = isa;
})(DeleteKnownHostKeysRequest = exports.DeleteKnownHostKeysRequest || (exports.DeleteKnownHostKeysRequest = {}));
var DeleteKnownHostKeysResult;
(function (DeleteKnownHostKeysResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteKnownHostKeysResult");
    }
    DeleteKnownHostKeysResult.isa = isa;
})(DeleteKnownHostKeysResult = exports.DeleteKnownHostKeysResult || (exports.DeleteKnownHostKeysResult = {}));
var DeleteLoadBalancerRequest;
(function (DeleteLoadBalancerRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteLoadBalancerRequest");
    }
    DeleteLoadBalancerRequest.isa = isa;
})(DeleteLoadBalancerRequest = exports.DeleteLoadBalancerRequest || (exports.DeleteLoadBalancerRequest = {}));
var DeleteLoadBalancerResult;
(function (DeleteLoadBalancerResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteLoadBalancerResult");
    }
    DeleteLoadBalancerResult.isa = isa;
})(DeleteLoadBalancerResult = exports.DeleteLoadBalancerResult || (exports.DeleteLoadBalancerResult = {}));
var DeleteLoadBalancerTlsCertificateRequest;
(function (DeleteLoadBalancerTlsCertificateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteLoadBalancerTlsCertificateRequest");
    }
    DeleteLoadBalancerTlsCertificateRequest.isa = isa;
})(DeleteLoadBalancerTlsCertificateRequest = exports.DeleteLoadBalancerTlsCertificateRequest || (exports.DeleteLoadBalancerTlsCertificateRequest = {}));
var DeleteLoadBalancerTlsCertificateResult;
(function (DeleteLoadBalancerTlsCertificateResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteLoadBalancerTlsCertificateResult");
    }
    DeleteLoadBalancerTlsCertificateResult.isa = isa;
})(DeleteLoadBalancerTlsCertificateResult = exports.DeleteLoadBalancerTlsCertificateResult || (exports.DeleteLoadBalancerTlsCertificateResult = {}));
var DeleteRelationalDatabaseRequest;
(function (DeleteRelationalDatabaseRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRelationalDatabaseRequest");
    }
    DeleteRelationalDatabaseRequest.isa = isa;
})(DeleteRelationalDatabaseRequest = exports.DeleteRelationalDatabaseRequest || (exports.DeleteRelationalDatabaseRequest = {}));
var DeleteRelationalDatabaseResult;
(function (DeleteRelationalDatabaseResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRelationalDatabaseResult");
    }
    DeleteRelationalDatabaseResult.isa = isa;
})(DeleteRelationalDatabaseResult = exports.DeleteRelationalDatabaseResult || (exports.DeleteRelationalDatabaseResult = {}));
var DeleteRelationalDatabaseSnapshotRequest;
(function (DeleteRelationalDatabaseSnapshotRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRelationalDatabaseSnapshotRequest");
    }
    DeleteRelationalDatabaseSnapshotRequest.isa = isa;
})(DeleteRelationalDatabaseSnapshotRequest = exports.DeleteRelationalDatabaseSnapshotRequest || (exports.DeleteRelationalDatabaseSnapshotRequest = {}));
var DeleteRelationalDatabaseSnapshotResult;
(function (DeleteRelationalDatabaseSnapshotResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRelationalDatabaseSnapshotResult");
    }
    DeleteRelationalDatabaseSnapshotResult.isa = isa;
})(DeleteRelationalDatabaseSnapshotResult = exports.DeleteRelationalDatabaseSnapshotResult || (exports.DeleteRelationalDatabaseSnapshotResult = {}));
var DestinationInfo;
(function (DestinationInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "DestinationInfo");
    }
    DestinationInfo.isa = isa;
})(DestinationInfo = exports.DestinationInfo || (exports.DestinationInfo = {}));
var DetachDiskRequest;
(function (DetachDiskRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DetachDiskRequest");
    }
    DetachDiskRequest.isa = isa;
})(DetachDiskRequest = exports.DetachDiskRequest || (exports.DetachDiskRequest = {}));
var DetachDiskResult;
(function (DetachDiskResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DetachDiskResult");
    }
    DetachDiskResult.isa = isa;
})(DetachDiskResult = exports.DetachDiskResult || (exports.DetachDiskResult = {}));
var DetachInstancesFromLoadBalancerRequest;
(function (DetachInstancesFromLoadBalancerRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DetachInstancesFromLoadBalancerRequest");
    }
    DetachInstancesFromLoadBalancerRequest.isa = isa;
})(DetachInstancesFromLoadBalancerRequest = exports.DetachInstancesFromLoadBalancerRequest || (exports.DetachInstancesFromLoadBalancerRequest = {}));
var DetachInstancesFromLoadBalancerResult;
(function (DetachInstancesFromLoadBalancerResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DetachInstancesFromLoadBalancerResult");
    }
    DetachInstancesFromLoadBalancerResult.isa = isa;
})(DetachInstancesFromLoadBalancerResult = exports.DetachInstancesFromLoadBalancerResult || (exports.DetachInstancesFromLoadBalancerResult = {}));
var DetachStaticIpRequest;
(function (DetachStaticIpRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DetachStaticIpRequest");
    }
    DetachStaticIpRequest.isa = isa;
})(DetachStaticIpRequest = exports.DetachStaticIpRequest || (exports.DetachStaticIpRequest = {}));
var DetachStaticIpResult;
(function (DetachStaticIpResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DetachStaticIpResult");
    }
    DetachStaticIpResult.isa = isa;
})(DetachStaticIpResult = exports.DetachStaticIpResult || (exports.DetachStaticIpResult = {}));
var DisableAddOnRequest;
(function (DisableAddOnRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisableAddOnRequest");
    }
    DisableAddOnRequest.isa = isa;
})(DisableAddOnRequest = exports.DisableAddOnRequest || (exports.DisableAddOnRequest = {}));
var DisableAddOnResult;
(function (DisableAddOnResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisableAddOnResult");
    }
    DisableAddOnResult.isa = isa;
})(DisableAddOnResult = exports.DisableAddOnResult || (exports.DisableAddOnResult = {}));
var Disk;
(function (Disk) {
    function isa(o) {
        return smithy_client_1.isa(o, "Disk");
    }
    Disk.isa = isa;
})(Disk = exports.Disk || (exports.Disk = {}));
var DiskInfo;
(function (DiskInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "DiskInfo");
    }
    DiskInfo.isa = isa;
})(DiskInfo = exports.DiskInfo || (exports.DiskInfo = {}));
var DiskMap;
(function (DiskMap) {
    function isa(o) {
        return smithy_client_1.isa(o, "DiskMap");
    }
    DiskMap.isa = isa;
})(DiskMap = exports.DiskMap || (exports.DiskMap = {}));
var DiskSnapshot;
(function (DiskSnapshot) {
    function isa(o) {
        return smithy_client_1.isa(o, "DiskSnapshot");
    }
    DiskSnapshot.isa = isa;
})(DiskSnapshot = exports.DiskSnapshot || (exports.DiskSnapshot = {}));
var DiskSnapshotInfo;
(function (DiskSnapshotInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "DiskSnapshotInfo");
    }
    DiskSnapshotInfo.isa = isa;
})(DiskSnapshotInfo = exports.DiskSnapshotInfo || (exports.DiskSnapshotInfo = {}));
var DiskSnapshotState;
(function (DiskSnapshotState) {
    DiskSnapshotState["Completed"] = "completed";
    DiskSnapshotState["Error"] = "error";
    DiskSnapshotState["Pending"] = "pending";
    DiskSnapshotState["Unknown"] = "unknown";
})(DiskSnapshotState = exports.DiskSnapshotState || (exports.DiskSnapshotState = {}));
var DiskState;
(function (DiskState) {
    DiskState["Available"] = "available";
    DiskState["Error"] = "error";
    DiskState["InUse"] = "in-use";
    DiskState["Pending"] = "pending";
    DiskState["Unknown"] = "unknown";
})(DiskState = exports.DiskState || (exports.DiskState = {}));
var Domain;
(function (Domain) {
    function isa(o) {
        return smithy_client_1.isa(o, "Domain");
    }
    Domain.isa = isa;
})(Domain = exports.Domain || (exports.Domain = {}));
var DomainEntry;
(function (DomainEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "DomainEntry");
    }
    DomainEntry.isa = isa;
})(DomainEntry = exports.DomainEntry || (exports.DomainEntry = {}));
var DownloadDefaultKeyPairRequest;
(function (DownloadDefaultKeyPairRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DownloadDefaultKeyPairRequest");
    }
    DownloadDefaultKeyPairRequest.isa = isa;
})(DownloadDefaultKeyPairRequest = exports.DownloadDefaultKeyPairRequest || (exports.DownloadDefaultKeyPairRequest = {}));
var DownloadDefaultKeyPairResult;
(function (DownloadDefaultKeyPairResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DownloadDefaultKeyPairResult");
    }
    DownloadDefaultKeyPairResult.isa = isa;
})(DownloadDefaultKeyPairResult = exports.DownloadDefaultKeyPairResult || (exports.DownloadDefaultKeyPairResult = {}));
var EnableAddOnRequest;
(function (EnableAddOnRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "EnableAddOnRequest");
    }
    EnableAddOnRequest.isa = isa;
})(EnableAddOnRequest = exports.EnableAddOnRequest || (exports.EnableAddOnRequest = {}));
var EnableAddOnResult;
(function (EnableAddOnResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "EnableAddOnResult");
    }
    EnableAddOnResult.isa = isa;
})(EnableAddOnResult = exports.EnableAddOnResult || (exports.EnableAddOnResult = {}));
var ExportSnapshotRecord;
(function (ExportSnapshotRecord) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExportSnapshotRecord");
    }
    ExportSnapshotRecord.isa = isa;
})(ExportSnapshotRecord = exports.ExportSnapshotRecord || (exports.ExportSnapshotRecord = {}));
var ExportSnapshotRecordSourceInfo;
(function (ExportSnapshotRecordSourceInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExportSnapshotRecordSourceInfo");
    }
    ExportSnapshotRecordSourceInfo.isa = isa;
})(ExportSnapshotRecordSourceInfo = exports.ExportSnapshotRecordSourceInfo || (exports.ExportSnapshotRecordSourceInfo = {}));
var ExportSnapshotRecordSourceType;
(function (ExportSnapshotRecordSourceType) {
    ExportSnapshotRecordSourceType["DiskSnapshot"] = "DiskSnapshot";
    ExportSnapshotRecordSourceType["InstanceSnapshot"] = "InstanceSnapshot";
})(ExportSnapshotRecordSourceType = exports.ExportSnapshotRecordSourceType || (exports.ExportSnapshotRecordSourceType = {}));
var ExportSnapshotRequest;
(function (ExportSnapshotRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExportSnapshotRequest");
    }
    ExportSnapshotRequest.isa = isa;
})(ExportSnapshotRequest = exports.ExportSnapshotRequest || (exports.ExportSnapshotRequest = {}));
var ExportSnapshotResult;
(function (ExportSnapshotResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExportSnapshotResult");
    }
    ExportSnapshotResult.isa = isa;
})(ExportSnapshotResult = exports.ExportSnapshotResult || (exports.ExportSnapshotResult = {}));
var GetActiveNamesRequest;
(function (GetActiveNamesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetActiveNamesRequest");
    }
    GetActiveNamesRequest.isa = isa;
})(GetActiveNamesRequest = exports.GetActiveNamesRequest || (exports.GetActiveNamesRequest = {}));
var GetActiveNamesResult;
(function (GetActiveNamesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetActiveNamesResult");
    }
    GetActiveNamesResult.isa = isa;
})(GetActiveNamesResult = exports.GetActiveNamesResult || (exports.GetActiveNamesResult = {}));
var GetAutoSnapshotsRequest;
(function (GetAutoSnapshotsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAutoSnapshotsRequest");
    }
    GetAutoSnapshotsRequest.isa = isa;
})(GetAutoSnapshotsRequest = exports.GetAutoSnapshotsRequest || (exports.GetAutoSnapshotsRequest = {}));
var GetAutoSnapshotsResult;
(function (GetAutoSnapshotsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAutoSnapshotsResult");
    }
    GetAutoSnapshotsResult.isa = isa;
})(GetAutoSnapshotsResult = exports.GetAutoSnapshotsResult || (exports.GetAutoSnapshotsResult = {}));
var GetBlueprintsRequest;
(function (GetBlueprintsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetBlueprintsRequest");
    }
    GetBlueprintsRequest.isa = isa;
})(GetBlueprintsRequest = exports.GetBlueprintsRequest || (exports.GetBlueprintsRequest = {}));
var GetBlueprintsResult;
(function (GetBlueprintsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetBlueprintsResult");
    }
    GetBlueprintsResult.isa = isa;
})(GetBlueprintsResult = exports.GetBlueprintsResult || (exports.GetBlueprintsResult = {}));
var GetBundlesRequest;
(function (GetBundlesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetBundlesRequest");
    }
    GetBundlesRequest.isa = isa;
})(GetBundlesRequest = exports.GetBundlesRequest || (exports.GetBundlesRequest = {}));
var GetBundlesResult;
(function (GetBundlesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetBundlesResult");
    }
    GetBundlesResult.isa = isa;
})(GetBundlesResult = exports.GetBundlesResult || (exports.GetBundlesResult = {}));
var GetCloudFormationStackRecordsRequest;
(function (GetCloudFormationStackRecordsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCloudFormationStackRecordsRequest");
    }
    GetCloudFormationStackRecordsRequest.isa = isa;
})(GetCloudFormationStackRecordsRequest = exports.GetCloudFormationStackRecordsRequest || (exports.GetCloudFormationStackRecordsRequest = {}));
var GetCloudFormationStackRecordsResult;
(function (GetCloudFormationStackRecordsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCloudFormationStackRecordsResult");
    }
    GetCloudFormationStackRecordsResult.isa = isa;
})(GetCloudFormationStackRecordsResult = exports.GetCloudFormationStackRecordsResult || (exports.GetCloudFormationStackRecordsResult = {}));
var GetDiskRequest;
(function (GetDiskRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDiskRequest");
    }
    GetDiskRequest.isa = isa;
})(GetDiskRequest = exports.GetDiskRequest || (exports.GetDiskRequest = {}));
var GetDiskResult;
(function (GetDiskResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDiskResult");
    }
    GetDiskResult.isa = isa;
})(GetDiskResult = exports.GetDiskResult || (exports.GetDiskResult = {}));
var GetDiskSnapshotRequest;
(function (GetDiskSnapshotRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDiskSnapshotRequest");
    }
    GetDiskSnapshotRequest.isa = isa;
})(GetDiskSnapshotRequest = exports.GetDiskSnapshotRequest || (exports.GetDiskSnapshotRequest = {}));
var GetDiskSnapshotResult;
(function (GetDiskSnapshotResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDiskSnapshotResult");
    }
    GetDiskSnapshotResult.isa = isa;
})(GetDiskSnapshotResult = exports.GetDiskSnapshotResult || (exports.GetDiskSnapshotResult = {}));
var GetDiskSnapshotsRequest;
(function (GetDiskSnapshotsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDiskSnapshotsRequest");
    }
    GetDiskSnapshotsRequest.isa = isa;
})(GetDiskSnapshotsRequest = exports.GetDiskSnapshotsRequest || (exports.GetDiskSnapshotsRequest = {}));
var GetDiskSnapshotsResult;
(function (GetDiskSnapshotsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDiskSnapshotsResult");
    }
    GetDiskSnapshotsResult.isa = isa;
})(GetDiskSnapshotsResult = exports.GetDiskSnapshotsResult || (exports.GetDiskSnapshotsResult = {}));
var GetDisksRequest;
(function (GetDisksRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDisksRequest");
    }
    GetDisksRequest.isa = isa;
})(GetDisksRequest = exports.GetDisksRequest || (exports.GetDisksRequest = {}));
var GetDisksResult;
(function (GetDisksResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDisksResult");
    }
    GetDisksResult.isa = isa;
})(GetDisksResult = exports.GetDisksResult || (exports.GetDisksResult = {}));
var GetDomainRequest;
(function (GetDomainRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDomainRequest");
    }
    GetDomainRequest.isa = isa;
})(GetDomainRequest = exports.GetDomainRequest || (exports.GetDomainRequest = {}));
var GetDomainResult;
(function (GetDomainResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDomainResult");
    }
    GetDomainResult.isa = isa;
})(GetDomainResult = exports.GetDomainResult || (exports.GetDomainResult = {}));
var GetDomainsRequest;
(function (GetDomainsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDomainsRequest");
    }
    GetDomainsRequest.isa = isa;
})(GetDomainsRequest = exports.GetDomainsRequest || (exports.GetDomainsRequest = {}));
var GetDomainsResult;
(function (GetDomainsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDomainsResult");
    }
    GetDomainsResult.isa = isa;
})(GetDomainsResult = exports.GetDomainsResult || (exports.GetDomainsResult = {}));
var GetExportSnapshotRecordsRequest;
(function (GetExportSnapshotRecordsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetExportSnapshotRecordsRequest");
    }
    GetExportSnapshotRecordsRequest.isa = isa;
})(GetExportSnapshotRecordsRequest = exports.GetExportSnapshotRecordsRequest || (exports.GetExportSnapshotRecordsRequest = {}));
var GetExportSnapshotRecordsResult;
(function (GetExportSnapshotRecordsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetExportSnapshotRecordsResult");
    }
    GetExportSnapshotRecordsResult.isa = isa;
})(GetExportSnapshotRecordsResult = exports.GetExportSnapshotRecordsResult || (exports.GetExportSnapshotRecordsResult = {}));
var GetInstanceAccessDetailsRequest;
(function (GetInstanceAccessDetailsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetInstanceAccessDetailsRequest");
    }
    GetInstanceAccessDetailsRequest.isa = isa;
})(GetInstanceAccessDetailsRequest = exports.GetInstanceAccessDetailsRequest || (exports.GetInstanceAccessDetailsRequest = {}));
var GetInstanceAccessDetailsResult;
(function (GetInstanceAccessDetailsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetInstanceAccessDetailsResult");
    }
    GetInstanceAccessDetailsResult.isa = isa;
})(GetInstanceAccessDetailsResult = exports.GetInstanceAccessDetailsResult || (exports.GetInstanceAccessDetailsResult = {}));
var GetInstanceMetricDataRequest;
(function (GetInstanceMetricDataRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetInstanceMetricDataRequest");
    }
    GetInstanceMetricDataRequest.isa = isa;
})(GetInstanceMetricDataRequest = exports.GetInstanceMetricDataRequest || (exports.GetInstanceMetricDataRequest = {}));
var GetInstanceMetricDataResult;
(function (GetInstanceMetricDataResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetInstanceMetricDataResult");
    }
    GetInstanceMetricDataResult.isa = isa;
})(GetInstanceMetricDataResult = exports.GetInstanceMetricDataResult || (exports.GetInstanceMetricDataResult = {}));
var GetInstancePortStatesRequest;
(function (GetInstancePortStatesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetInstancePortStatesRequest");
    }
    GetInstancePortStatesRequest.isa = isa;
})(GetInstancePortStatesRequest = exports.GetInstancePortStatesRequest || (exports.GetInstancePortStatesRequest = {}));
var GetInstancePortStatesResult;
(function (GetInstancePortStatesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetInstancePortStatesResult");
    }
    GetInstancePortStatesResult.isa = isa;
})(GetInstancePortStatesResult = exports.GetInstancePortStatesResult || (exports.GetInstancePortStatesResult = {}));
var GetInstanceRequest;
(function (GetInstanceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetInstanceRequest");
    }
    GetInstanceRequest.isa = isa;
})(GetInstanceRequest = exports.GetInstanceRequest || (exports.GetInstanceRequest = {}));
var GetInstanceResult;
(function (GetInstanceResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetInstanceResult");
    }
    GetInstanceResult.isa = isa;
})(GetInstanceResult = exports.GetInstanceResult || (exports.GetInstanceResult = {}));
var GetInstanceSnapshotRequest;
(function (GetInstanceSnapshotRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetInstanceSnapshotRequest");
    }
    GetInstanceSnapshotRequest.isa = isa;
})(GetInstanceSnapshotRequest = exports.GetInstanceSnapshotRequest || (exports.GetInstanceSnapshotRequest = {}));
var GetInstanceSnapshotResult;
(function (GetInstanceSnapshotResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetInstanceSnapshotResult");
    }
    GetInstanceSnapshotResult.isa = isa;
})(GetInstanceSnapshotResult = exports.GetInstanceSnapshotResult || (exports.GetInstanceSnapshotResult = {}));
var GetInstanceSnapshotsRequest;
(function (GetInstanceSnapshotsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetInstanceSnapshotsRequest");
    }
    GetInstanceSnapshotsRequest.isa = isa;
})(GetInstanceSnapshotsRequest = exports.GetInstanceSnapshotsRequest || (exports.GetInstanceSnapshotsRequest = {}));
var GetInstanceSnapshotsResult;
(function (GetInstanceSnapshotsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetInstanceSnapshotsResult");
    }
    GetInstanceSnapshotsResult.isa = isa;
})(GetInstanceSnapshotsResult = exports.GetInstanceSnapshotsResult || (exports.GetInstanceSnapshotsResult = {}));
var GetInstanceStateRequest;
(function (GetInstanceStateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetInstanceStateRequest");
    }
    GetInstanceStateRequest.isa = isa;
})(GetInstanceStateRequest = exports.GetInstanceStateRequest || (exports.GetInstanceStateRequest = {}));
var GetInstanceStateResult;
(function (GetInstanceStateResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetInstanceStateResult");
    }
    GetInstanceStateResult.isa = isa;
})(GetInstanceStateResult = exports.GetInstanceStateResult || (exports.GetInstanceStateResult = {}));
var GetInstancesRequest;
(function (GetInstancesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetInstancesRequest");
    }
    GetInstancesRequest.isa = isa;
})(GetInstancesRequest = exports.GetInstancesRequest || (exports.GetInstancesRequest = {}));
var GetInstancesResult;
(function (GetInstancesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetInstancesResult");
    }
    GetInstancesResult.isa = isa;
})(GetInstancesResult = exports.GetInstancesResult || (exports.GetInstancesResult = {}));
var GetKeyPairRequest;
(function (GetKeyPairRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetKeyPairRequest");
    }
    GetKeyPairRequest.isa = isa;
})(GetKeyPairRequest = exports.GetKeyPairRequest || (exports.GetKeyPairRequest = {}));
var GetKeyPairResult;
(function (GetKeyPairResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetKeyPairResult");
    }
    GetKeyPairResult.isa = isa;
})(GetKeyPairResult = exports.GetKeyPairResult || (exports.GetKeyPairResult = {}));
var GetKeyPairsRequest;
(function (GetKeyPairsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetKeyPairsRequest");
    }
    GetKeyPairsRequest.isa = isa;
})(GetKeyPairsRequest = exports.GetKeyPairsRequest || (exports.GetKeyPairsRequest = {}));
var GetKeyPairsResult;
(function (GetKeyPairsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetKeyPairsResult");
    }
    GetKeyPairsResult.isa = isa;
})(GetKeyPairsResult = exports.GetKeyPairsResult || (exports.GetKeyPairsResult = {}));
var GetLoadBalancerMetricDataRequest;
(function (GetLoadBalancerMetricDataRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetLoadBalancerMetricDataRequest");
    }
    GetLoadBalancerMetricDataRequest.isa = isa;
})(GetLoadBalancerMetricDataRequest = exports.GetLoadBalancerMetricDataRequest || (exports.GetLoadBalancerMetricDataRequest = {}));
var GetLoadBalancerMetricDataResult;
(function (GetLoadBalancerMetricDataResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetLoadBalancerMetricDataResult");
    }
    GetLoadBalancerMetricDataResult.isa = isa;
})(GetLoadBalancerMetricDataResult = exports.GetLoadBalancerMetricDataResult || (exports.GetLoadBalancerMetricDataResult = {}));
var GetLoadBalancerRequest;
(function (GetLoadBalancerRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetLoadBalancerRequest");
    }
    GetLoadBalancerRequest.isa = isa;
})(GetLoadBalancerRequest = exports.GetLoadBalancerRequest || (exports.GetLoadBalancerRequest = {}));
var GetLoadBalancerResult;
(function (GetLoadBalancerResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetLoadBalancerResult");
    }
    GetLoadBalancerResult.isa = isa;
})(GetLoadBalancerResult = exports.GetLoadBalancerResult || (exports.GetLoadBalancerResult = {}));
var GetLoadBalancerTlsCertificatesRequest;
(function (GetLoadBalancerTlsCertificatesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetLoadBalancerTlsCertificatesRequest");
    }
    GetLoadBalancerTlsCertificatesRequest.isa = isa;
})(GetLoadBalancerTlsCertificatesRequest = exports.GetLoadBalancerTlsCertificatesRequest || (exports.GetLoadBalancerTlsCertificatesRequest = {}));
var GetLoadBalancerTlsCertificatesResult;
(function (GetLoadBalancerTlsCertificatesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetLoadBalancerTlsCertificatesResult");
    }
    GetLoadBalancerTlsCertificatesResult.isa = isa;
})(GetLoadBalancerTlsCertificatesResult = exports.GetLoadBalancerTlsCertificatesResult || (exports.GetLoadBalancerTlsCertificatesResult = {}));
var GetLoadBalancersRequest;
(function (GetLoadBalancersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetLoadBalancersRequest");
    }
    GetLoadBalancersRequest.isa = isa;
})(GetLoadBalancersRequest = exports.GetLoadBalancersRequest || (exports.GetLoadBalancersRequest = {}));
var GetLoadBalancersResult;
(function (GetLoadBalancersResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetLoadBalancersResult");
    }
    GetLoadBalancersResult.isa = isa;
})(GetLoadBalancersResult = exports.GetLoadBalancersResult || (exports.GetLoadBalancersResult = {}));
var GetOperationRequest;
(function (GetOperationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetOperationRequest");
    }
    GetOperationRequest.isa = isa;
})(GetOperationRequest = exports.GetOperationRequest || (exports.GetOperationRequest = {}));
var GetOperationResult;
(function (GetOperationResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetOperationResult");
    }
    GetOperationResult.isa = isa;
})(GetOperationResult = exports.GetOperationResult || (exports.GetOperationResult = {}));
var GetOperationsForResourceRequest;
(function (GetOperationsForResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetOperationsForResourceRequest");
    }
    GetOperationsForResourceRequest.isa = isa;
})(GetOperationsForResourceRequest = exports.GetOperationsForResourceRequest || (exports.GetOperationsForResourceRequest = {}));
var GetOperationsForResourceResult;
(function (GetOperationsForResourceResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetOperationsForResourceResult");
    }
    GetOperationsForResourceResult.isa = isa;
})(GetOperationsForResourceResult = exports.GetOperationsForResourceResult || (exports.GetOperationsForResourceResult = {}));
var GetOperationsRequest;
(function (GetOperationsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetOperationsRequest");
    }
    GetOperationsRequest.isa = isa;
})(GetOperationsRequest = exports.GetOperationsRequest || (exports.GetOperationsRequest = {}));
var GetOperationsResult;
(function (GetOperationsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetOperationsResult");
    }
    GetOperationsResult.isa = isa;
})(GetOperationsResult = exports.GetOperationsResult || (exports.GetOperationsResult = {}));
var GetRegionsRequest;
(function (GetRegionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRegionsRequest");
    }
    GetRegionsRequest.isa = isa;
})(GetRegionsRequest = exports.GetRegionsRequest || (exports.GetRegionsRequest = {}));
var GetRegionsResult;
(function (GetRegionsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRegionsResult");
    }
    GetRegionsResult.isa = isa;
})(GetRegionsResult = exports.GetRegionsResult || (exports.GetRegionsResult = {}));
var GetRelationalDatabaseBlueprintsRequest;
(function (GetRelationalDatabaseBlueprintsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRelationalDatabaseBlueprintsRequest");
    }
    GetRelationalDatabaseBlueprintsRequest.isa = isa;
})(GetRelationalDatabaseBlueprintsRequest = exports.GetRelationalDatabaseBlueprintsRequest || (exports.GetRelationalDatabaseBlueprintsRequest = {}));
var GetRelationalDatabaseBlueprintsResult;
(function (GetRelationalDatabaseBlueprintsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRelationalDatabaseBlueprintsResult");
    }
    GetRelationalDatabaseBlueprintsResult.isa = isa;
})(GetRelationalDatabaseBlueprintsResult = exports.GetRelationalDatabaseBlueprintsResult || (exports.GetRelationalDatabaseBlueprintsResult = {}));
var GetRelationalDatabaseBundlesRequest;
(function (GetRelationalDatabaseBundlesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRelationalDatabaseBundlesRequest");
    }
    GetRelationalDatabaseBundlesRequest.isa = isa;
})(GetRelationalDatabaseBundlesRequest = exports.GetRelationalDatabaseBundlesRequest || (exports.GetRelationalDatabaseBundlesRequest = {}));
var GetRelationalDatabaseBundlesResult;
(function (GetRelationalDatabaseBundlesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRelationalDatabaseBundlesResult");
    }
    GetRelationalDatabaseBundlesResult.isa = isa;
})(GetRelationalDatabaseBundlesResult = exports.GetRelationalDatabaseBundlesResult || (exports.GetRelationalDatabaseBundlesResult = {}));
var GetRelationalDatabaseEventsRequest;
(function (GetRelationalDatabaseEventsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRelationalDatabaseEventsRequest");
    }
    GetRelationalDatabaseEventsRequest.isa = isa;
})(GetRelationalDatabaseEventsRequest = exports.GetRelationalDatabaseEventsRequest || (exports.GetRelationalDatabaseEventsRequest = {}));
var GetRelationalDatabaseEventsResult;
(function (GetRelationalDatabaseEventsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRelationalDatabaseEventsResult");
    }
    GetRelationalDatabaseEventsResult.isa = isa;
})(GetRelationalDatabaseEventsResult = exports.GetRelationalDatabaseEventsResult || (exports.GetRelationalDatabaseEventsResult = {}));
var GetRelationalDatabaseLogEventsRequest;
(function (GetRelationalDatabaseLogEventsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRelationalDatabaseLogEventsRequest");
    }
    GetRelationalDatabaseLogEventsRequest.isa = isa;
})(GetRelationalDatabaseLogEventsRequest = exports.GetRelationalDatabaseLogEventsRequest || (exports.GetRelationalDatabaseLogEventsRequest = {}));
var GetRelationalDatabaseLogEventsResult;
(function (GetRelationalDatabaseLogEventsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRelationalDatabaseLogEventsResult");
    }
    GetRelationalDatabaseLogEventsResult.isa = isa;
})(GetRelationalDatabaseLogEventsResult = exports.GetRelationalDatabaseLogEventsResult || (exports.GetRelationalDatabaseLogEventsResult = {}));
var GetRelationalDatabaseLogStreamsRequest;
(function (GetRelationalDatabaseLogStreamsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRelationalDatabaseLogStreamsRequest");
    }
    GetRelationalDatabaseLogStreamsRequest.isa = isa;
})(GetRelationalDatabaseLogStreamsRequest = exports.GetRelationalDatabaseLogStreamsRequest || (exports.GetRelationalDatabaseLogStreamsRequest = {}));
var GetRelationalDatabaseLogStreamsResult;
(function (GetRelationalDatabaseLogStreamsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRelationalDatabaseLogStreamsResult");
    }
    GetRelationalDatabaseLogStreamsResult.isa = isa;
})(GetRelationalDatabaseLogStreamsResult = exports.GetRelationalDatabaseLogStreamsResult || (exports.GetRelationalDatabaseLogStreamsResult = {}));
var GetRelationalDatabaseMasterUserPasswordRequest;
(function (GetRelationalDatabaseMasterUserPasswordRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRelationalDatabaseMasterUserPasswordRequest");
    }
    GetRelationalDatabaseMasterUserPasswordRequest.isa = isa;
})(GetRelationalDatabaseMasterUserPasswordRequest = exports.GetRelationalDatabaseMasterUserPasswordRequest || (exports.GetRelationalDatabaseMasterUserPasswordRequest = {}));
var GetRelationalDatabaseMasterUserPasswordResult;
(function (GetRelationalDatabaseMasterUserPasswordResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRelationalDatabaseMasterUserPasswordResult");
    }
    GetRelationalDatabaseMasterUserPasswordResult.isa = isa;
})(GetRelationalDatabaseMasterUserPasswordResult = exports.GetRelationalDatabaseMasterUserPasswordResult || (exports.GetRelationalDatabaseMasterUserPasswordResult = {}));
var GetRelationalDatabaseMetricDataRequest;
(function (GetRelationalDatabaseMetricDataRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRelationalDatabaseMetricDataRequest");
    }
    GetRelationalDatabaseMetricDataRequest.isa = isa;
})(GetRelationalDatabaseMetricDataRequest = exports.GetRelationalDatabaseMetricDataRequest || (exports.GetRelationalDatabaseMetricDataRequest = {}));
var GetRelationalDatabaseMetricDataResult;
(function (GetRelationalDatabaseMetricDataResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRelationalDatabaseMetricDataResult");
    }
    GetRelationalDatabaseMetricDataResult.isa = isa;
})(GetRelationalDatabaseMetricDataResult = exports.GetRelationalDatabaseMetricDataResult || (exports.GetRelationalDatabaseMetricDataResult = {}));
var GetRelationalDatabaseParametersRequest;
(function (GetRelationalDatabaseParametersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRelationalDatabaseParametersRequest");
    }
    GetRelationalDatabaseParametersRequest.isa = isa;
})(GetRelationalDatabaseParametersRequest = exports.GetRelationalDatabaseParametersRequest || (exports.GetRelationalDatabaseParametersRequest = {}));
var GetRelationalDatabaseParametersResult;
(function (GetRelationalDatabaseParametersResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRelationalDatabaseParametersResult");
    }
    GetRelationalDatabaseParametersResult.isa = isa;
})(GetRelationalDatabaseParametersResult = exports.GetRelationalDatabaseParametersResult || (exports.GetRelationalDatabaseParametersResult = {}));
var GetRelationalDatabaseRequest;
(function (GetRelationalDatabaseRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRelationalDatabaseRequest");
    }
    GetRelationalDatabaseRequest.isa = isa;
})(GetRelationalDatabaseRequest = exports.GetRelationalDatabaseRequest || (exports.GetRelationalDatabaseRequest = {}));
var GetRelationalDatabaseResult;
(function (GetRelationalDatabaseResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRelationalDatabaseResult");
    }
    GetRelationalDatabaseResult.isa = isa;
})(GetRelationalDatabaseResult = exports.GetRelationalDatabaseResult || (exports.GetRelationalDatabaseResult = {}));
var GetRelationalDatabaseSnapshotRequest;
(function (GetRelationalDatabaseSnapshotRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRelationalDatabaseSnapshotRequest");
    }
    GetRelationalDatabaseSnapshotRequest.isa = isa;
})(GetRelationalDatabaseSnapshotRequest = exports.GetRelationalDatabaseSnapshotRequest || (exports.GetRelationalDatabaseSnapshotRequest = {}));
var GetRelationalDatabaseSnapshotResult;
(function (GetRelationalDatabaseSnapshotResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRelationalDatabaseSnapshotResult");
    }
    GetRelationalDatabaseSnapshotResult.isa = isa;
})(GetRelationalDatabaseSnapshotResult = exports.GetRelationalDatabaseSnapshotResult || (exports.GetRelationalDatabaseSnapshotResult = {}));
var GetRelationalDatabaseSnapshotsRequest;
(function (GetRelationalDatabaseSnapshotsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRelationalDatabaseSnapshotsRequest");
    }
    GetRelationalDatabaseSnapshotsRequest.isa = isa;
})(GetRelationalDatabaseSnapshotsRequest = exports.GetRelationalDatabaseSnapshotsRequest || (exports.GetRelationalDatabaseSnapshotsRequest = {}));
var GetRelationalDatabaseSnapshotsResult;
(function (GetRelationalDatabaseSnapshotsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRelationalDatabaseSnapshotsResult");
    }
    GetRelationalDatabaseSnapshotsResult.isa = isa;
})(GetRelationalDatabaseSnapshotsResult = exports.GetRelationalDatabaseSnapshotsResult || (exports.GetRelationalDatabaseSnapshotsResult = {}));
var GetRelationalDatabasesRequest;
(function (GetRelationalDatabasesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRelationalDatabasesRequest");
    }
    GetRelationalDatabasesRequest.isa = isa;
})(GetRelationalDatabasesRequest = exports.GetRelationalDatabasesRequest || (exports.GetRelationalDatabasesRequest = {}));
var GetRelationalDatabasesResult;
(function (GetRelationalDatabasesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRelationalDatabasesResult");
    }
    GetRelationalDatabasesResult.isa = isa;
})(GetRelationalDatabasesResult = exports.GetRelationalDatabasesResult || (exports.GetRelationalDatabasesResult = {}));
var GetStaticIpRequest;
(function (GetStaticIpRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetStaticIpRequest");
    }
    GetStaticIpRequest.isa = isa;
})(GetStaticIpRequest = exports.GetStaticIpRequest || (exports.GetStaticIpRequest = {}));
var GetStaticIpResult;
(function (GetStaticIpResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetStaticIpResult");
    }
    GetStaticIpResult.isa = isa;
})(GetStaticIpResult = exports.GetStaticIpResult || (exports.GetStaticIpResult = {}));
var GetStaticIpsRequest;
(function (GetStaticIpsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetStaticIpsRequest");
    }
    GetStaticIpsRequest.isa = isa;
})(GetStaticIpsRequest = exports.GetStaticIpsRequest || (exports.GetStaticIpsRequest = {}));
var GetStaticIpsResult;
(function (GetStaticIpsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetStaticIpsResult");
    }
    GetStaticIpsResult.isa = isa;
})(GetStaticIpsResult = exports.GetStaticIpsResult || (exports.GetStaticIpsResult = {}));
var HostKeyAttributes;
(function (HostKeyAttributes) {
    function isa(o) {
        return smithy_client_1.isa(o, "HostKeyAttributes");
    }
    HostKeyAttributes.isa = isa;
})(HostKeyAttributes = exports.HostKeyAttributes || (exports.HostKeyAttributes = {}));
var ImportKeyPairRequest;
(function (ImportKeyPairRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ImportKeyPairRequest");
    }
    ImportKeyPairRequest.isa = isa;
})(ImportKeyPairRequest = exports.ImportKeyPairRequest || (exports.ImportKeyPairRequest = {}));
var ImportKeyPairResult;
(function (ImportKeyPairResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ImportKeyPairResult");
    }
    ImportKeyPairResult.isa = isa;
})(ImportKeyPairResult = exports.ImportKeyPairResult || (exports.ImportKeyPairResult = {}));
var Instance;
(function (Instance) {
    function isa(o) {
        return smithy_client_1.isa(o, "Instance");
    }
    Instance.isa = isa;
})(Instance = exports.Instance || (exports.Instance = {}));
var InstanceAccessDetails;
(function (InstanceAccessDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceAccessDetails");
    }
    InstanceAccessDetails.isa = isa;
})(InstanceAccessDetails = exports.InstanceAccessDetails || (exports.InstanceAccessDetails = {}));
var InstanceAccessProtocol;
(function (InstanceAccessProtocol) {
    InstanceAccessProtocol["rdp"] = "rdp";
    InstanceAccessProtocol["ssh"] = "ssh";
})(InstanceAccessProtocol = exports.InstanceAccessProtocol || (exports.InstanceAccessProtocol = {}));
var InstanceEntry;
(function (InstanceEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceEntry");
    }
    InstanceEntry.isa = isa;
})(InstanceEntry = exports.InstanceEntry || (exports.InstanceEntry = {}));
var InstanceHardware;
(function (InstanceHardware) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceHardware");
    }
    InstanceHardware.isa = isa;
})(InstanceHardware = exports.InstanceHardware || (exports.InstanceHardware = {}));
var InstanceHealthReason;
(function (InstanceHealthReason) {
    InstanceHealthReason["InstanceDeregistrationInProgress"] = "Instance.DeregistrationInProgress";
    InstanceHealthReason["InstanceFailedHealthChecks"] = "Instance.FailedHealthChecks";
    InstanceHealthReason["InstanceInvalidState"] = "Instance.InvalidState";
    InstanceHealthReason["InstanceIpUnusable"] = "Instance.IpUnusable";
    InstanceHealthReason["InstanceNotInUse"] = "Instance.NotInUse";
    InstanceHealthReason["InstanceNotRegistered"] = "Instance.NotRegistered";
    InstanceHealthReason["InstanceResponseCodeMismatch"] = "Instance.ResponseCodeMismatch";
    InstanceHealthReason["InstanceTimeout"] = "Instance.Timeout";
    InstanceHealthReason["LbInitialHealthChecking"] = "Lb.InitialHealthChecking";
    InstanceHealthReason["LbInternalError"] = "Lb.InternalError";
    InstanceHealthReason["LbRegistrationInProgress"] = "Lb.RegistrationInProgress";
})(InstanceHealthReason = exports.InstanceHealthReason || (exports.InstanceHealthReason = {}));
var InstanceHealthState;
(function (InstanceHealthState) {
    InstanceHealthState["Draining"] = "draining";
    InstanceHealthState["Healthy"] = "healthy";
    InstanceHealthState["Initial"] = "initial";
    InstanceHealthState["Unavailable"] = "unavailable";
    InstanceHealthState["Unhealthy"] = "unhealthy";
    InstanceHealthState["Unused"] = "unused";
})(InstanceHealthState = exports.InstanceHealthState || (exports.InstanceHealthState = {}));
var InstanceHealthSummary;
(function (InstanceHealthSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceHealthSummary");
    }
    InstanceHealthSummary.isa = isa;
})(InstanceHealthSummary = exports.InstanceHealthSummary || (exports.InstanceHealthSummary = {}));
var InstanceMetricName;
(function (InstanceMetricName) {
    InstanceMetricName["CPUUtilization"] = "CPUUtilization";
    InstanceMetricName["NetworkIn"] = "NetworkIn";
    InstanceMetricName["NetworkOut"] = "NetworkOut";
    InstanceMetricName["StatusCheckFailed"] = "StatusCheckFailed";
    InstanceMetricName["StatusCheckFailed_Instance"] = "StatusCheckFailed_Instance";
    InstanceMetricName["StatusCheckFailed_System"] = "StatusCheckFailed_System";
})(InstanceMetricName = exports.InstanceMetricName || (exports.InstanceMetricName = {}));
var InstanceNetworking;
(function (InstanceNetworking) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceNetworking");
    }
    InstanceNetworking.isa = isa;
})(InstanceNetworking = exports.InstanceNetworking || (exports.InstanceNetworking = {}));
var InstancePlatform;
(function (InstancePlatform) {
    InstancePlatform["LinuxUnix"] = "LINUX_UNIX";
    InstancePlatform["Windows"] = "WINDOWS";
})(InstancePlatform = exports.InstancePlatform || (exports.InstancePlatform = {}));
var InstancePortInfo;
(function (InstancePortInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstancePortInfo");
    }
    InstancePortInfo.isa = isa;
})(InstancePortInfo = exports.InstancePortInfo || (exports.InstancePortInfo = {}));
var InstancePortState;
(function (InstancePortState) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstancePortState");
    }
    InstancePortState.isa = isa;
})(InstancePortState = exports.InstancePortState || (exports.InstancePortState = {}));
var InstanceSnapshot;
(function (InstanceSnapshot) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceSnapshot");
    }
    InstanceSnapshot.isa = isa;
})(InstanceSnapshot = exports.InstanceSnapshot || (exports.InstanceSnapshot = {}));
var InstanceSnapshotInfo;
(function (InstanceSnapshotInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceSnapshotInfo");
    }
    InstanceSnapshotInfo.isa = isa;
})(InstanceSnapshotInfo = exports.InstanceSnapshotInfo || (exports.InstanceSnapshotInfo = {}));
var InstanceSnapshotState;
(function (InstanceSnapshotState) {
    InstanceSnapshotState["Available"] = "available";
    InstanceSnapshotState["Error"] = "error";
    InstanceSnapshotState["Pending"] = "pending";
})(InstanceSnapshotState = exports.InstanceSnapshotState || (exports.InstanceSnapshotState = {}));
var InstanceState;
(function (InstanceState) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceState");
    }
    InstanceState.isa = isa;
})(InstanceState = exports.InstanceState || (exports.InstanceState = {}));
var InvalidInputException;
(function (InvalidInputException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidInputException");
    }
    InvalidInputException.isa = isa;
})(InvalidInputException = exports.InvalidInputException || (exports.InvalidInputException = {}));
var IsVpcPeeredRequest;
(function (IsVpcPeeredRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "IsVpcPeeredRequest");
    }
    IsVpcPeeredRequest.isa = isa;
})(IsVpcPeeredRequest = exports.IsVpcPeeredRequest || (exports.IsVpcPeeredRequest = {}));
var IsVpcPeeredResult;
(function (IsVpcPeeredResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "IsVpcPeeredResult");
    }
    IsVpcPeeredResult.isa = isa;
})(IsVpcPeeredResult = exports.IsVpcPeeredResult || (exports.IsVpcPeeredResult = {}));
var KeyPair;
(function (KeyPair) {
    function isa(o) {
        return smithy_client_1.isa(o, "KeyPair");
    }
    KeyPair.isa = isa;
})(KeyPair = exports.KeyPair || (exports.KeyPair = {}));
var LoadBalancer;
(function (LoadBalancer) {
    function isa(o) {
        return smithy_client_1.isa(o, "LoadBalancer");
    }
    LoadBalancer.isa = isa;
})(LoadBalancer = exports.LoadBalancer || (exports.LoadBalancer = {}));
var LoadBalancerAttributeName;
(function (LoadBalancerAttributeName) {
    LoadBalancerAttributeName["HealthCheckPath"] = "HealthCheckPath";
    LoadBalancerAttributeName["SessionStickinessEnabled"] = "SessionStickinessEnabled";
    LoadBalancerAttributeName["SessionStickiness_LB_CookieDurationSeconds"] = "SessionStickiness_LB_CookieDurationSeconds";
})(LoadBalancerAttributeName = exports.LoadBalancerAttributeName || (exports.LoadBalancerAttributeName = {}));
var LoadBalancerMetricName;
(function (LoadBalancerMetricName) {
    LoadBalancerMetricName["ClientTLSNegotiationErrorCount"] = "ClientTLSNegotiationErrorCount";
    LoadBalancerMetricName["HTTPCode_Instance_2XX_Count"] = "HTTPCode_Instance_2XX_Count";
    LoadBalancerMetricName["HTTPCode_Instance_3XX_Count"] = "HTTPCode_Instance_3XX_Count";
    LoadBalancerMetricName["HTTPCode_Instance_4XX_Count"] = "HTTPCode_Instance_4XX_Count";
    LoadBalancerMetricName["HTTPCode_Instance_5XX_Count"] = "HTTPCode_Instance_5XX_Count";
    LoadBalancerMetricName["HTTPCode_LB_4XX_Count"] = "HTTPCode_LB_4XX_Count";
    LoadBalancerMetricName["HTTPCode_LB_5XX_Count"] = "HTTPCode_LB_5XX_Count";
    LoadBalancerMetricName["HealthyHostCount"] = "HealthyHostCount";
    LoadBalancerMetricName["InstanceResponseTime"] = "InstanceResponseTime";
    LoadBalancerMetricName["RejectedConnectionCount"] = "RejectedConnectionCount";
    LoadBalancerMetricName["RequestCount"] = "RequestCount";
    LoadBalancerMetricName["UnhealthyHostCount"] = "UnhealthyHostCount";
})(LoadBalancerMetricName = exports.LoadBalancerMetricName || (exports.LoadBalancerMetricName = {}));
var LoadBalancerProtocol;
(function (LoadBalancerProtocol) {
    LoadBalancerProtocol["HTTP"] = "HTTP";
    LoadBalancerProtocol["HTTP_HTTPS"] = "HTTP_HTTPS";
})(LoadBalancerProtocol = exports.LoadBalancerProtocol || (exports.LoadBalancerProtocol = {}));
var LoadBalancerState;
(function (LoadBalancerState) {
    LoadBalancerState["Active"] = "active";
    LoadBalancerState["ActiveImpaired"] = "active_impaired";
    LoadBalancerState["Failed"] = "failed";
    LoadBalancerState["Provisioning"] = "provisioning";
    LoadBalancerState["Unknown"] = "unknown";
})(LoadBalancerState = exports.LoadBalancerState || (exports.LoadBalancerState = {}));
var LoadBalancerTlsCertificate;
(function (LoadBalancerTlsCertificate) {
    function isa(o) {
        return smithy_client_1.isa(o, "LoadBalancerTlsCertificate");
    }
    LoadBalancerTlsCertificate.isa = isa;
})(LoadBalancerTlsCertificate = exports.LoadBalancerTlsCertificate || (exports.LoadBalancerTlsCertificate = {}));
var LoadBalancerTlsCertificateDomainStatus;
(function (LoadBalancerTlsCertificateDomainStatus) {
    LoadBalancerTlsCertificateDomainStatus["Failed"] = "FAILED";
    LoadBalancerTlsCertificateDomainStatus["PendingValidation"] = "PENDING_VALIDATION";
    LoadBalancerTlsCertificateDomainStatus["Success"] = "SUCCESS";
})(LoadBalancerTlsCertificateDomainStatus = exports.LoadBalancerTlsCertificateDomainStatus || (exports.LoadBalancerTlsCertificateDomainStatus = {}));
var LoadBalancerTlsCertificateDomainValidationOption;
(function (LoadBalancerTlsCertificateDomainValidationOption) {
    function isa(o) {
        return smithy_client_1.isa(o, "LoadBalancerTlsCertificateDomainValidationOption");
    }
    LoadBalancerTlsCertificateDomainValidationOption.isa = isa;
})(LoadBalancerTlsCertificateDomainValidationOption = exports.LoadBalancerTlsCertificateDomainValidationOption || (exports.LoadBalancerTlsCertificateDomainValidationOption = {}));
var LoadBalancerTlsCertificateDomainValidationRecord;
(function (LoadBalancerTlsCertificateDomainValidationRecord) {
    function isa(o) {
        return smithy_client_1.isa(o, "LoadBalancerTlsCertificateDomainValidationRecord");
    }
    LoadBalancerTlsCertificateDomainValidationRecord.isa = isa;
})(LoadBalancerTlsCertificateDomainValidationRecord = exports.LoadBalancerTlsCertificateDomainValidationRecord || (exports.LoadBalancerTlsCertificateDomainValidationRecord = {}));
var LoadBalancerTlsCertificateFailureReason;
(function (LoadBalancerTlsCertificateFailureReason) {
    LoadBalancerTlsCertificateFailureReason["AdditionalVerificationRequired"] = "ADDITIONAL_VERIFICATION_REQUIRED";
    LoadBalancerTlsCertificateFailureReason["DomainNotAllowed"] = "DOMAIN_NOT_ALLOWED";
    LoadBalancerTlsCertificateFailureReason["InvalidPublicDomain"] = "INVALID_PUBLIC_DOMAIN";
    LoadBalancerTlsCertificateFailureReason["NoAvailableContacts"] = "NO_AVAILABLE_CONTACTS";
    LoadBalancerTlsCertificateFailureReason["Other"] = "OTHER";
})(LoadBalancerTlsCertificateFailureReason = exports.LoadBalancerTlsCertificateFailureReason || (exports.LoadBalancerTlsCertificateFailureReason = {}));
var LoadBalancerTlsCertificateRenewalStatus;
(function (LoadBalancerTlsCertificateRenewalStatus) {
    LoadBalancerTlsCertificateRenewalStatus["Failed"] = "FAILED";
    LoadBalancerTlsCertificateRenewalStatus["PendingAutoRenewal"] = "PENDING_AUTO_RENEWAL";
    LoadBalancerTlsCertificateRenewalStatus["PendingValidation"] = "PENDING_VALIDATION";
    LoadBalancerTlsCertificateRenewalStatus["Success"] = "SUCCESS";
})(LoadBalancerTlsCertificateRenewalStatus = exports.LoadBalancerTlsCertificateRenewalStatus || (exports.LoadBalancerTlsCertificateRenewalStatus = {}));
var LoadBalancerTlsCertificateRenewalSummary;
(function (LoadBalancerTlsCertificateRenewalSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "LoadBalancerTlsCertificateRenewalSummary");
    }
    LoadBalancerTlsCertificateRenewalSummary.isa = isa;
})(LoadBalancerTlsCertificateRenewalSummary = exports.LoadBalancerTlsCertificateRenewalSummary || (exports.LoadBalancerTlsCertificateRenewalSummary = {}));
var LoadBalancerTlsCertificateRevocationReason;
(function (LoadBalancerTlsCertificateRevocationReason) {
    LoadBalancerTlsCertificateRevocationReason["AACompromise"] = "A_A_COMPROMISE";
    LoadBalancerTlsCertificateRevocationReason["AffiliationChanged"] = "AFFILIATION_CHANGED";
    LoadBalancerTlsCertificateRevocationReason["CaCompromise"] = "CA_COMPROMISE";
    LoadBalancerTlsCertificateRevocationReason["CertificateHold"] = "CERTIFICATE_HOLD";
    LoadBalancerTlsCertificateRevocationReason["CessationOfOperation"] = "CESSATION_OF_OPERATION";
    LoadBalancerTlsCertificateRevocationReason["KeyCompromise"] = "KEY_COMPROMISE";
    LoadBalancerTlsCertificateRevocationReason["PrivilegeWithdrawn"] = "PRIVILEGE_WITHDRAWN";
    LoadBalancerTlsCertificateRevocationReason["RemoveFromCrl"] = "REMOVE_FROM_CRL";
    LoadBalancerTlsCertificateRevocationReason["Superceded"] = "SUPERCEDED";
    LoadBalancerTlsCertificateRevocationReason["Unspecified"] = "UNSPECIFIED";
})(LoadBalancerTlsCertificateRevocationReason = exports.LoadBalancerTlsCertificateRevocationReason || (exports.LoadBalancerTlsCertificateRevocationReason = {}));
var LoadBalancerTlsCertificateStatus;
(function (LoadBalancerTlsCertificateStatus) {
    LoadBalancerTlsCertificateStatus["Expired"] = "EXPIRED";
    LoadBalancerTlsCertificateStatus["Failed"] = "FAILED";
    LoadBalancerTlsCertificateStatus["Inactive"] = "INACTIVE";
    LoadBalancerTlsCertificateStatus["Issued"] = "ISSUED";
    LoadBalancerTlsCertificateStatus["PendingValidation"] = "PENDING_VALIDATION";
    LoadBalancerTlsCertificateStatus["Revoked"] = "REVOKED";
    LoadBalancerTlsCertificateStatus["Unknown"] = "UNKNOWN";
    LoadBalancerTlsCertificateStatus["ValidationTimedOut"] = "VALIDATION_TIMED_OUT";
})(LoadBalancerTlsCertificateStatus = exports.LoadBalancerTlsCertificateStatus || (exports.LoadBalancerTlsCertificateStatus = {}));
var LoadBalancerTlsCertificateSummary;
(function (LoadBalancerTlsCertificateSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "LoadBalancerTlsCertificateSummary");
    }
    LoadBalancerTlsCertificateSummary.isa = isa;
})(LoadBalancerTlsCertificateSummary = exports.LoadBalancerTlsCertificateSummary || (exports.LoadBalancerTlsCertificateSummary = {}));
var LogEvent;
(function (LogEvent) {
    function isa(o) {
        return smithy_client_1.isa(o, "LogEvent");
    }
    LogEvent.isa = isa;
})(LogEvent = exports.LogEvent || (exports.LogEvent = {}));
var MetricDatapoint;
(function (MetricDatapoint) {
    function isa(o) {
        return smithy_client_1.isa(o, "MetricDatapoint");
    }
    MetricDatapoint.isa = isa;
})(MetricDatapoint = exports.MetricDatapoint || (exports.MetricDatapoint = {}));
var MetricStatistic;
(function (MetricStatistic) {
    MetricStatistic["Average"] = "Average";
    MetricStatistic["Maximum"] = "Maximum";
    MetricStatistic["Minimum"] = "Minimum";
    MetricStatistic["SampleCount"] = "SampleCount";
    MetricStatistic["Sum"] = "Sum";
})(MetricStatistic = exports.MetricStatistic || (exports.MetricStatistic = {}));
var MetricUnit;
(function (MetricUnit) {
    MetricUnit["Bits"] = "Bits";
    MetricUnit["BitsSecond"] = "Bits/Second";
    MetricUnit["Bytes"] = "Bytes";
    MetricUnit["BytesSecond"] = "Bytes/Second";
    MetricUnit["Count"] = "Count";
    MetricUnit["CountSecond"] = "Count/Second";
    MetricUnit["Gigabits"] = "Gigabits";
    MetricUnit["GigabitsSecond"] = "Gigabits/Second";
    MetricUnit["Gigabytes"] = "Gigabytes";
    MetricUnit["GigabytesSecond"] = "Gigabytes/Second";
    MetricUnit["Kilobits"] = "Kilobits";
    MetricUnit["KilobitsSecond"] = "Kilobits/Second";
    MetricUnit["Kilobytes"] = "Kilobytes";
    MetricUnit["KilobytesSecond"] = "Kilobytes/Second";
    MetricUnit["Megabits"] = "Megabits";
    MetricUnit["MegabitsSecond"] = "Megabits/Second";
    MetricUnit["Megabytes"] = "Megabytes";
    MetricUnit["MegabytesSecond"] = "Megabytes/Second";
    MetricUnit["Microseconds"] = "Microseconds";
    MetricUnit["Milliseconds"] = "Milliseconds";
    MetricUnit["None"] = "None";
    MetricUnit["Percent"] = "Percent";
    MetricUnit["Seconds"] = "Seconds";
    MetricUnit["Terabits"] = "Terabits";
    MetricUnit["TerabitsSecond"] = "Terabits/Second";
    MetricUnit["Terabytes"] = "Terabytes";
    MetricUnit["TerabytesSecond"] = "Terabytes/Second";
})(MetricUnit = exports.MetricUnit || (exports.MetricUnit = {}));
var MonthlyTransfer;
(function (MonthlyTransfer) {
    function isa(o) {
        return smithy_client_1.isa(o, "MonthlyTransfer");
    }
    MonthlyTransfer.isa = isa;
})(MonthlyTransfer = exports.MonthlyTransfer || (exports.MonthlyTransfer = {}));
var NetworkProtocol;
(function (NetworkProtocol) {
    NetworkProtocol["ALL"] = "all";
    NetworkProtocol["TCP"] = "tcp";
    NetworkProtocol["UDP"] = "udp";
})(NetworkProtocol = exports.NetworkProtocol || (exports.NetworkProtocol = {}));
var NotFoundException;
(function (NotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NotFoundException");
    }
    NotFoundException.isa = isa;
})(NotFoundException = exports.NotFoundException || (exports.NotFoundException = {}));
var OpenInstancePublicPortsRequest;
(function (OpenInstancePublicPortsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "OpenInstancePublicPortsRequest");
    }
    OpenInstancePublicPortsRequest.isa = isa;
})(OpenInstancePublicPortsRequest = exports.OpenInstancePublicPortsRequest || (exports.OpenInstancePublicPortsRequest = {}));
var OpenInstancePublicPortsResult;
(function (OpenInstancePublicPortsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "OpenInstancePublicPortsResult");
    }
    OpenInstancePublicPortsResult.isa = isa;
})(OpenInstancePublicPortsResult = exports.OpenInstancePublicPortsResult || (exports.OpenInstancePublicPortsResult = {}));
var Operation;
(function (Operation) {
    function isa(o) {
        return smithy_client_1.isa(o, "Operation");
    }
    Operation.isa = isa;
})(Operation = exports.Operation || (exports.Operation = {}));
var OperationFailureException;
(function (OperationFailureException) {
    function isa(o) {
        return smithy_client_1.isa(o, "OperationFailureException");
    }
    OperationFailureException.isa = isa;
})(OperationFailureException = exports.OperationFailureException || (exports.OperationFailureException = {}));
var OperationStatus;
(function (OperationStatus) {
    OperationStatus["Completed"] = "Completed";
    OperationStatus["Failed"] = "Failed";
    OperationStatus["NotStarted"] = "NotStarted";
    OperationStatus["Started"] = "Started";
    OperationStatus["Succeeded"] = "Succeeded";
})(OperationStatus = exports.OperationStatus || (exports.OperationStatus = {}));
var OperationType;
(function (OperationType) {
    OperationType["AllocateStaticIp"] = "AllocateStaticIp";
    OperationType["AttachDisk"] = "AttachDisk";
    OperationType["AttachInstancesToLoadBalancer"] = "AttachInstancesToLoadBalancer";
    OperationType["AttachLoadBalancerTlsCertificate"] = "AttachLoadBalancerTlsCertificate";
    OperationType["AttachStaticIp"] = "AttachStaticIp";
    OperationType["CloseInstancePublicPorts"] = "CloseInstancePublicPorts";
    OperationType["CreateDisk"] = "CreateDisk";
    OperationType["CreateDiskFromSnapshot"] = "CreateDiskFromSnapshot";
    OperationType["CreateDiskSnapshot"] = "CreateDiskSnapshot";
    OperationType["CreateDomain"] = "CreateDomain";
    OperationType["CreateInstance"] = "CreateInstance";
    OperationType["CreateInstanceSnapshot"] = "CreateInstanceSnapshot";
    OperationType["CreateInstancesFromSnapshot"] = "CreateInstancesFromSnapshot";
    OperationType["CreateLoadBalancer"] = "CreateLoadBalancer";
    OperationType["CreateLoadBalancerTlsCertificate"] = "CreateLoadBalancerTlsCertificate";
    OperationType["CreateRelationalDatabase"] = "CreateRelationalDatabase";
    OperationType["CreateRelationalDatabaseFromSnapshot"] = "CreateRelationalDatabaseFromSnapshot";
    OperationType["CreateRelationalDatabaseSnapshot"] = "CreateRelationalDatabaseSnapshot";
    OperationType["DeleteDisk"] = "DeleteDisk";
    OperationType["DeleteDiskSnapshot"] = "DeleteDiskSnapshot";
    OperationType["DeleteDomain"] = "DeleteDomain";
    OperationType["DeleteDomainEntry"] = "DeleteDomainEntry";
    OperationType["DeleteInstance"] = "DeleteInstance";
    OperationType["DeleteInstanceSnapshot"] = "DeleteInstanceSnapshot";
    OperationType["DeleteKnownHostKeys"] = "DeleteKnownHostKeys";
    OperationType["DeleteLoadBalancer"] = "DeleteLoadBalancer";
    OperationType["DeleteLoadBalancerTlsCertificate"] = "DeleteLoadBalancerTlsCertificate";
    OperationType["DeleteRelationalDatabase"] = "DeleteRelationalDatabase";
    OperationType["DeleteRelationalDatabaseSnapshot"] = "DeleteRelationalDatabaseSnapshot";
    OperationType["DetachDisk"] = "DetachDisk";
    OperationType["DetachInstancesFromLoadBalancer"] = "DetachInstancesFromLoadBalancer";
    OperationType["DetachStaticIp"] = "DetachStaticIp";
    OperationType["DisableAddOn"] = "DisableAddOn";
    OperationType["EnableAddOn"] = "EnableAddOn";
    OperationType["OpenInstancePublicPorts"] = "OpenInstancePublicPorts";
    OperationType["PutInstancePublicPorts"] = "PutInstancePublicPorts";
    OperationType["RebootInstance"] = "RebootInstance";
    OperationType["RebootRelationalDatabase"] = "RebootRelationalDatabase";
    OperationType["ReleaseStaticIp"] = "ReleaseStaticIp";
    OperationType["StartInstance"] = "StartInstance";
    OperationType["StartRelationalDatabase"] = "StartRelationalDatabase";
    OperationType["StopInstance"] = "StopInstance";
    OperationType["StopRelationalDatabase"] = "StopRelationalDatabase";
    OperationType["UpdateDomainEntry"] = "UpdateDomainEntry";
    OperationType["UpdateLoadBalancerAttribute"] = "UpdateLoadBalancerAttribute";
    OperationType["UpdateRelationalDatabase"] = "UpdateRelationalDatabase";
    OperationType["UpdateRelationalDatabaseParameters"] = "UpdateRelationalDatabaseParameters";
})(OperationType = exports.OperationType || (exports.OperationType = {}));
var PasswordData;
(function (PasswordData) {
    function isa(o) {
        return smithy_client_1.isa(o, "PasswordData");
    }
    PasswordData.isa = isa;
})(PasswordData = exports.PasswordData || (exports.PasswordData = {}));
var PeerVpcRequest;
(function (PeerVpcRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PeerVpcRequest");
    }
    PeerVpcRequest.isa = isa;
})(PeerVpcRequest = exports.PeerVpcRequest || (exports.PeerVpcRequest = {}));
var PeerVpcResult;
(function (PeerVpcResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "PeerVpcResult");
    }
    PeerVpcResult.isa = isa;
})(PeerVpcResult = exports.PeerVpcResult || (exports.PeerVpcResult = {}));
var PendingMaintenanceAction;
(function (PendingMaintenanceAction) {
    function isa(o) {
        return smithy_client_1.isa(o, "PendingMaintenanceAction");
    }
    PendingMaintenanceAction.isa = isa;
})(PendingMaintenanceAction = exports.PendingMaintenanceAction || (exports.PendingMaintenanceAction = {}));
var PendingModifiedRelationalDatabaseValues;
(function (PendingModifiedRelationalDatabaseValues) {
    function isa(o) {
        return smithy_client_1.isa(o, "PendingModifiedRelationalDatabaseValues");
    }
    PendingModifiedRelationalDatabaseValues.isa = isa;
})(PendingModifiedRelationalDatabaseValues = exports.PendingModifiedRelationalDatabaseValues || (exports.PendingModifiedRelationalDatabaseValues = {}));
var PortAccessType;
(function (PortAccessType) {
    PortAccessType["Private"] = "Private";
    PortAccessType["Public"] = "Public";
})(PortAccessType = exports.PortAccessType || (exports.PortAccessType = {}));
var PortInfo;
(function (PortInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "PortInfo");
    }
    PortInfo.isa = isa;
})(PortInfo = exports.PortInfo || (exports.PortInfo = {}));
var PortInfoSourceType;
(function (PortInfoSourceType) {
    PortInfoSourceType["Closed"] = "CLOSED";
    PortInfoSourceType["Default"] = "DEFAULT";
    PortInfoSourceType["Instance"] = "INSTANCE";
    PortInfoSourceType["None"] = "NONE";
})(PortInfoSourceType = exports.PortInfoSourceType || (exports.PortInfoSourceType = {}));
var PortState;
(function (PortState) {
    PortState["Closed"] = "closed";
    PortState["Open"] = "open";
})(PortState = exports.PortState || (exports.PortState = {}));
var PutInstancePublicPortsRequest;
(function (PutInstancePublicPortsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutInstancePublicPortsRequest");
    }
    PutInstancePublicPortsRequest.isa = isa;
})(PutInstancePublicPortsRequest = exports.PutInstancePublicPortsRequest || (exports.PutInstancePublicPortsRequest = {}));
var PutInstancePublicPortsResult;
(function (PutInstancePublicPortsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutInstancePublicPortsResult");
    }
    PutInstancePublicPortsResult.isa = isa;
})(PutInstancePublicPortsResult = exports.PutInstancePublicPortsResult || (exports.PutInstancePublicPortsResult = {}));
var RebootInstanceRequest;
(function (RebootInstanceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RebootInstanceRequest");
    }
    RebootInstanceRequest.isa = isa;
})(RebootInstanceRequest = exports.RebootInstanceRequest || (exports.RebootInstanceRequest = {}));
var RebootInstanceResult;
(function (RebootInstanceResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "RebootInstanceResult");
    }
    RebootInstanceResult.isa = isa;
})(RebootInstanceResult = exports.RebootInstanceResult || (exports.RebootInstanceResult = {}));
var RebootRelationalDatabaseRequest;
(function (RebootRelationalDatabaseRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RebootRelationalDatabaseRequest");
    }
    RebootRelationalDatabaseRequest.isa = isa;
})(RebootRelationalDatabaseRequest = exports.RebootRelationalDatabaseRequest || (exports.RebootRelationalDatabaseRequest = {}));
var RebootRelationalDatabaseResult;
(function (RebootRelationalDatabaseResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "RebootRelationalDatabaseResult");
    }
    RebootRelationalDatabaseResult.isa = isa;
})(RebootRelationalDatabaseResult = exports.RebootRelationalDatabaseResult || (exports.RebootRelationalDatabaseResult = {}));
var RecordState;
(function (RecordState) {
    RecordState["Failed"] = "Failed";
    RecordState["Started"] = "Started";
    RecordState["Succeeded"] = "Succeeded";
})(RecordState = exports.RecordState || (exports.RecordState = {}));
var Region;
(function (Region) {
    function isa(o) {
        return smithy_client_1.isa(o, "Region");
    }
    Region.isa = isa;
})(Region = exports.Region || (exports.Region = {}));
var RegionName;
(function (RegionName) {
    RegionName["AP_NORTHEAST_1"] = "ap-northeast-1";
    RegionName["AP_NORTHEAST_2"] = "ap-northeast-2";
    RegionName["AP_SOUTHEAST_1"] = "ap-southeast-1";
    RegionName["AP_SOUTHEAST_2"] = "ap-southeast-2";
    RegionName["AP_SOUTH_1"] = "ap-south-1";
    RegionName["CA_CENTRAL_1"] = "ca-central-1";
    RegionName["EU_CENTRAL_1"] = "eu-central-1";
    RegionName["EU_WEST_1"] = "eu-west-1";
    RegionName["EU_WEST_2"] = "eu-west-2";
    RegionName["EU_WEST_3"] = "eu-west-3";
    RegionName["US_EAST_1"] = "us-east-1";
    RegionName["US_EAST_2"] = "us-east-2";
    RegionName["US_WEST_1"] = "us-west-1";
    RegionName["US_WEST_2"] = "us-west-2";
})(RegionName = exports.RegionName || (exports.RegionName = {}));
var RelationalDatabase;
(function (RelationalDatabase) {
    function isa(o) {
        return smithy_client_1.isa(o, "RelationalDatabase");
    }
    RelationalDatabase.isa = isa;
})(RelationalDatabase = exports.RelationalDatabase || (exports.RelationalDatabase = {}));
var RelationalDatabaseBlueprint;
(function (RelationalDatabaseBlueprint) {
    function isa(o) {
        return smithy_client_1.isa(o, "RelationalDatabaseBlueprint");
    }
    RelationalDatabaseBlueprint.isa = isa;
})(RelationalDatabaseBlueprint = exports.RelationalDatabaseBlueprint || (exports.RelationalDatabaseBlueprint = {}));
var RelationalDatabaseBundle;
(function (RelationalDatabaseBundle) {
    function isa(o) {
        return smithy_client_1.isa(o, "RelationalDatabaseBundle");
    }
    RelationalDatabaseBundle.isa = isa;
})(RelationalDatabaseBundle = exports.RelationalDatabaseBundle || (exports.RelationalDatabaseBundle = {}));
var RelationalDatabaseEndpoint;
(function (RelationalDatabaseEndpoint) {
    function isa(o) {
        return smithy_client_1.isa(o, "RelationalDatabaseEndpoint");
    }
    RelationalDatabaseEndpoint.isa = isa;
})(RelationalDatabaseEndpoint = exports.RelationalDatabaseEndpoint || (exports.RelationalDatabaseEndpoint = {}));
var RelationalDatabaseEngine;
(function (RelationalDatabaseEngine) {
    RelationalDatabaseEngine["MYSQL"] = "mysql";
})(RelationalDatabaseEngine = exports.RelationalDatabaseEngine || (exports.RelationalDatabaseEngine = {}));
var RelationalDatabaseEvent;
(function (RelationalDatabaseEvent) {
    function isa(o) {
        return smithy_client_1.isa(o, "RelationalDatabaseEvent");
    }
    RelationalDatabaseEvent.isa = isa;
})(RelationalDatabaseEvent = exports.RelationalDatabaseEvent || (exports.RelationalDatabaseEvent = {}));
var RelationalDatabaseHardware;
(function (RelationalDatabaseHardware) {
    function isa(o) {
        return smithy_client_1.isa(o, "RelationalDatabaseHardware");
    }
    RelationalDatabaseHardware.isa = isa;
})(RelationalDatabaseHardware = exports.RelationalDatabaseHardware || (exports.RelationalDatabaseHardware = {}));
var RelationalDatabaseMetricName;
(function (RelationalDatabaseMetricName) {
    RelationalDatabaseMetricName["CPUUtilization"] = "CPUUtilization";
    RelationalDatabaseMetricName["DatabaseConnections"] = "DatabaseConnections";
    RelationalDatabaseMetricName["DiskQueueDepth"] = "DiskQueueDepth";
    RelationalDatabaseMetricName["FreeStorageSpace"] = "FreeStorageSpace";
    RelationalDatabaseMetricName["NetworkReceiveThroughput"] = "NetworkReceiveThroughput";
    RelationalDatabaseMetricName["NetworkTransmitThroughput"] = "NetworkTransmitThroughput";
})(RelationalDatabaseMetricName = exports.RelationalDatabaseMetricName || (exports.RelationalDatabaseMetricName = {}));
var RelationalDatabaseParameter;
(function (RelationalDatabaseParameter) {
    function isa(o) {
        return smithy_client_1.isa(o, "RelationalDatabaseParameter");
    }
    RelationalDatabaseParameter.isa = isa;
})(RelationalDatabaseParameter = exports.RelationalDatabaseParameter || (exports.RelationalDatabaseParameter = {}));
var RelationalDatabasePasswordVersion;
(function (RelationalDatabasePasswordVersion) {
    RelationalDatabasePasswordVersion["CURRENT"] = "CURRENT";
    RelationalDatabasePasswordVersion["PENDING"] = "PENDING";
    RelationalDatabasePasswordVersion["PREVIOUS"] = "PREVIOUS";
})(RelationalDatabasePasswordVersion = exports.RelationalDatabasePasswordVersion || (exports.RelationalDatabasePasswordVersion = {}));
var RelationalDatabaseSnapshot;
(function (RelationalDatabaseSnapshot) {
    function isa(o) {
        return smithy_client_1.isa(o, "RelationalDatabaseSnapshot");
    }
    RelationalDatabaseSnapshot.isa = isa;
})(RelationalDatabaseSnapshot = exports.RelationalDatabaseSnapshot || (exports.RelationalDatabaseSnapshot = {}));
var ReleaseStaticIpRequest;
(function (ReleaseStaticIpRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReleaseStaticIpRequest");
    }
    ReleaseStaticIpRequest.isa = isa;
})(ReleaseStaticIpRequest = exports.ReleaseStaticIpRequest || (exports.ReleaseStaticIpRequest = {}));
var ReleaseStaticIpResult;
(function (ReleaseStaticIpResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReleaseStaticIpResult");
    }
    ReleaseStaticIpResult.isa = isa;
})(ReleaseStaticIpResult = exports.ReleaseStaticIpResult || (exports.ReleaseStaticIpResult = {}));
var ResourceLocation;
(function (ResourceLocation) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceLocation");
    }
    ResourceLocation.isa = isa;
})(ResourceLocation = exports.ResourceLocation || (exports.ResourceLocation = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["CloudFormationStackRecord"] = "CloudFormationStackRecord";
    ResourceType["Disk"] = "Disk";
    ResourceType["DiskSnapshot"] = "DiskSnapshot";
    ResourceType["Domain"] = "Domain";
    ResourceType["ExportSnapshotRecord"] = "ExportSnapshotRecord";
    ResourceType["Instance"] = "Instance";
    ResourceType["InstanceSnapshot"] = "InstanceSnapshot";
    ResourceType["KeyPair"] = "KeyPair";
    ResourceType["LoadBalancer"] = "LoadBalancer";
    ResourceType["LoadBalancerTlsCertificate"] = "LoadBalancerTlsCertificate";
    ResourceType["PeeredVpc"] = "PeeredVpc";
    ResourceType["RelationalDatabase"] = "RelationalDatabase";
    ResourceType["RelationalDatabaseSnapshot"] = "RelationalDatabaseSnapshot";
    ResourceType["StaticIp"] = "StaticIp";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
var ServiceException;
(function (ServiceException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceException");
    }
    ServiceException.isa = isa;
})(ServiceException = exports.ServiceException || (exports.ServiceException = {}));
var StartInstanceRequest;
(function (StartInstanceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartInstanceRequest");
    }
    StartInstanceRequest.isa = isa;
})(StartInstanceRequest = exports.StartInstanceRequest || (exports.StartInstanceRequest = {}));
var StartInstanceResult;
(function (StartInstanceResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartInstanceResult");
    }
    StartInstanceResult.isa = isa;
})(StartInstanceResult = exports.StartInstanceResult || (exports.StartInstanceResult = {}));
var StartRelationalDatabaseRequest;
(function (StartRelationalDatabaseRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartRelationalDatabaseRequest");
    }
    StartRelationalDatabaseRequest.isa = isa;
})(StartRelationalDatabaseRequest = exports.StartRelationalDatabaseRequest || (exports.StartRelationalDatabaseRequest = {}));
var StartRelationalDatabaseResult;
(function (StartRelationalDatabaseResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartRelationalDatabaseResult");
    }
    StartRelationalDatabaseResult.isa = isa;
})(StartRelationalDatabaseResult = exports.StartRelationalDatabaseResult || (exports.StartRelationalDatabaseResult = {}));
var StaticIp;
(function (StaticIp) {
    function isa(o) {
        return smithy_client_1.isa(o, "StaticIp");
    }
    StaticIp.isa = isa;
})(StaticIp = exports.StaticIp || (exports.StaticIp = {}));
var StopInstanceRequest;
(function (StopInstanceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopInstanceRequest");
    }
    StopInstanceRequest.isa = isa;
})(StopInstanceRequest = exports.StopInstanceRequest || (exports.StopInstanceRequest = {}));
var StopInstanceResult;
(function (StopInstanceResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopInstanceResult");
    }
    StopInstanceResult.isa = isa;
})(StopInstanceResult = exports.StopInstanceResult || (exports.StopInstanceResult = {}));
var StopRelationalDatabaseRequest;
(function (StopRelationalDatabaseRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopRelationalDatabaseRequest");
    }
    StopRelationalDatabaseRequest.isa = isa;
})(StopRelationalDatabaseRequest = exports.StopRelationalDatabaseRequest || (exports.StopRelationalDatabaseRequest = {}));
var StopRelationalDatabaseResult;
(function (StopRelationalDatabaseResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopRelationalDatabaseResult");
    }
    StopRelationalDatabaseResult.isa = isa;
})(StopRelationalDatabaseResult = exports.StopRelationalDatabaseResult || (exports.StopRelationalDatabaseResult = {}));
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
var TagResourceResult;
(function (TagResourceResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagResourceResult");
    }
    TagResourceResult.isa = isa;
})(TagResourceResult = exports.TagResourceResult || (exports.TagResourceResult = {}));
var UnauthenticatedException;
(function (UnauthenticatedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnauthenticatedException");
    }
    UnauthenticatedException.isa = isa;
})(UnauthenticatedException = exports.UnauthenticatedException || (exports.UnauthenticatedException = {}));
var UnpeerVpcRequest;
(function (UnpeerVpcRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnpeerVpcRequest");
    }
    UnpeerVpcRequest.isa = isa;
})(UnpeerVpcRequest = exports.UnpeerVpcRequest || (exports.UnpeerVpcRequest = {}));
var UnpeerVpcResult;
(function (UnpeerVpcResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnpeerVpcResult");
    }
    UnpeerVpcResult.isa = isa;
})(UnpeerVpcResult = exports.UnpeerVpcResult || (exports.UnpeerVpcResult = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceRequest");
    }
    UntagResourceRequest.isa = isa;
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UntagResourceResult;
(function (UntagResourceResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceResult");
    }
    UntagResourceResult.isa = isa;
})(UntagResourceResult = exports.UntagResourceResult || (exports.UntagResourceResult = {}));
var UpdateDomainEntryRequest;
(function (UpdateDomainEntryRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDomainEntryRequest");
    }
    UpdateDomainEntryRequest.isa = isa;
})(UpdateDomainEntryRequest = exports.UpdateDomainEntryRequest || (exports.UpdateDomainEntryRequest = {}));
var UpdateDomainEntryResult;
(function (UpdateDomainEntryResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDomainEntryResult");
    }
    UpdateDomainEntryResult.isa = isa;
})(UpdateDomainEntryResult = exports.UpdateDomainEntryResult || (exports.UpdateDomainEntryResult = {}));
var UpdateLoadBalancerAttributeRequest;
(function (UpdateLoadBalancerAttributeRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateLoadBalancerAttributeRequest");
    }
    UpdateLoadBalancerAttributeRequest.isa = isa;
})(UpdateLoadBalancerAttributeRequest = exports.UpdateLoadBalancerAttributeRequest || (exports.UpdateLoadBalancerAttributeRequest = {}));
var UpdateLoadBalancerAttributeResult;
(function (UpdateLoadBalancerAttributeResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateLoadBalancerAttributeResult");
    }
    UpdateLoadBalancerAttributeResult.isa = isa;
})(UpdateLoadBalancerAttributeResult = exports.UpdateLoadBalancerAttributeResult || (exports.UpdateLoadBalancerAttributeResult = {}));
var UpdateRelationalDatabaseParametersRequest;
(function (UpdateRelationalDatabaseParametersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateRelationalDatabaseParametersRequest");
    }
    UpdateRelationalDatabaseParametersRequest.isa = isa;
})(UpdateRelationalDatabaseParametersRequest = exports.UpdateRelationalDatabaseParametersRequest || (exports.UpdateRelationalDatabaseParametersRequest = {}));
var UpdateRelationalDatabaseParametersResult;
(function (UpdateRelationalDatabaseParametersResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateRelationalDatabaseParametersResult");
    }
    UpdateRelationalDatabaseParametersResult.isa = isa;
})(UpdateRelationalDatabaseParametersResult = exports.UpdateRelationalDatabaseParametersResult || (exports.UpdateRelationalDatabaseParametersResult = {}));
var UpdateRelationalDatabaseRequest;
(function (UpdateRelationalDatabaseRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateRelationalDatabaseRequest");
    }
    UpdateRelationalDatabaseRequest.isa = isa;
})(UpdateRelationalDatabaseRequest = exports.UpdateRelationalDatabaseRequest || (exports.UpdateRelationalDatabaseRequest = {}));
var UpdateRelationalDatabaseResult;
(function (UpdateRelationalDatabaseResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateRelationalDatabaseResult");
    }
    UpdateRelationalDatabaseResult.isa = isa;
})(UpdateRelationalDatabaseResult = exports.UpdateRelationalDatabaseResult || (exports.UpdateRelationalDatabaseResult = {}));
//# sourceMappingURL=index.js.map