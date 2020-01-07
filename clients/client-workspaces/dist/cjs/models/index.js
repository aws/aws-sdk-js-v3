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
var AccessPropertyValue;
(function (AccessPropertyValue) {
    AccessPropertyValue["ALLOW"] = "ALLOW";
    AccessPropertyValue["DENY"] = "DENY";
})(AccessPropertyValue = exports.AccessPropertyValue || (exports.AccessPropertyValue = {}));
var AccountModification;
(function (AccountModification) {
    function isa(o) {
        return smithy_client_1.isa(o, "AccountModification");
    }
    AccountModification.isa = isa;
})(AccountModification = exports.AccountModification || (exports.AccountModification = {}));
var AssociateIpGroupsRequest;
(function (AssociateIpGroupsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateIpGroupsRequest");
    }
    AssociateIpGroupsRequest.isa = isa;
})(AssociateIpGroupsRequest = exports.AssociateIpGroupsRequest || (exports.AssociateIpGroupsRequest = {}));
var AssociateIpGroupsResult;
(function (AssociateIpGroupsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateIpGroupsResult");
    }
    AssociateIpGroupsResult.isa = isa;
})(AssociateIpGroupsResult = exports.AssociateIpGroupsResult || (exports.AssociateIpGroupsResult = {}));
var AuthorizeIpRulesRequest;
(function (AuthorizeIpRulesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AuthorizeIpRulesRequest");
    }
    AuthorizeIpRulesRequest.isa = isa;
})(AuthorizeIpRulesRequest = exports.AuthorizeIpRulesRequest || (exports.AuthorizeIpRulesRequest = {}));
var AuthorizeIpRulesResult;
(function (AuthorizeIpRulesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "AuthorizeIpRulesResult");
    }
    AuthorizeIpRulesResult.isa = isa;
})(AuthorizeIpRulesResult = exports.AuthorizeIpRulesResult || (exports.AuthorizeIpRulesResult = {}));
var ClientProperties;
(function (ClientProperties) {
    function isa(o) {
        return smithy_client_1.isa(o, "ClientProperties");
    }
    ClientProperties.isa = isa;
})(ClientProperties = exports.ClientProperties || (exports.ClientProperties = {}));
var ClientPropertiesResult;
(function (ClientPropertiesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ClientPropertiesResult");
    }
    ClientPropertiesResult.isa = isa;
})(ClientPropertiesResult = exports.ClientPropertiesResult || (exports.ClientPropertiesResult = {}));
var Compute;
(function (Compute) {
    Compute["GRAPHICS"] = "GRAPHICS";
    Compute["GRAPHICSPRO"] = "GRAPHICSPRO";
    Compute["PERFORMANCE"] = "PERFORMANCE";
    Compute["POWER"] = "POWER";
    Compute["POWERPRO"] = "POWERPRO";
    Compute["STANDARD"] = "STANDARD";
    Compute["VALUE"] = "VALUE";
})(Compute = exports.Compute || (exports.Compute = {}));
var ComputeType;
(function (ComputeType) {
    function isa(o) {
        return smithy_client_1.isa(o, "ComputeType");
    }
    ComputeType.isa = isa;
})(ComputeType = exports.ComputeType || (exports.ComputeType = {}));
var ConnectionState;
(function (ConnectionState) {
    ConnectionState["CONNECTED"] = "CONNECTED";
    ConnectionState["DISCONNECTED"] = "DISCONNECTED";
    ConnectionState["UNKNOWN"] = "UNKNOWN";
})(ConnectionState = exports.ConnectionState || (exports.ConnectionState = {}));
var CopyWorkspaceImageRequest;
(function (CopyWorkspaceImageRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CopyWorkspaceImageRequest");
    }
    CopyWorkspaceImageRequest.isa = isa;
})(CopyWorkspaceImageRequest = exports.CopyWorkspaceImageRequest || (exports.CopyWorkspaceImageRequest = {}));
var CopyWorkspaceImageResult;
(function (CopyWorkspaceImageResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CopyWorkspaceImageResult");
    }
    CopyWorkspaceImageResult.isa = isa;
})(CopyWorkspaceImageResult = exports.CopyWorkspaceImageResult || (exports.CopyWorkspaceImageResult = {}));
var CreateIpGroupRequest;
(function (CreateIpGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateIpGroupRequest");
    }
    CreateIpGroupRequest.isa = isa;
})(CreateIpGroupRequest = exports.CreateIpGroupRequest || (exports.CreateIpGroupRequest = {}));
var CreateIpGroupResult;
(function (CreateIpGroupResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateIpGroupResult");
    }
    CreateIpGroupResult.isa = isa;
})(CreateIpGroupResult = exports.CreateIpGroupResult || (exports.CreateIpGroupResult = {}));
var CreateTagsRequest;
(function (CreateTagsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateTagsRequest");
    }
    CreateTagsRequest.isa = isa;
})(CreateTagsRequest = exports.CreateTagsRequest || (exports.CreateTagsRequest = {}));
var CreateTagsResult;
(function (CreateTagsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateTagsResult");
    }
    CreateTagsResult.isa = isa;
})(CreateTagsResult = exports.CreateTagsResult || (exports.CreateTagsResult = {}));
var CreateWorkspacesRequest;
(function (CreateWorkspacesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateWorkspacesRequest");
    }
    CreateWorkspacesRequest.isa = isa;
})(CreateWorkspacesRequest = exports.CreateWorkspacesRequest || (exports.CreateWorkspacesRequest = {}));
var CreateWorkspacesResult;
(function (CreateWorkspacesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateWorkspacesResult");
    }
    CreateWorkspacesResult.isa = isa;
})(CreateWorkspacesResult = exports.CreateWorkspacesResult || (exports.CreateWorkspacesResult = {}));
var DedicatedTenancyModificationStateEnum;
(function (DedicatedTenancyModificationStateEnum) {
    DedicatedTenancyModificationStateEnum["COMPLETED"] = "COMPLETED";
    DedicatedTenancyModificationStateEnum["FAILED"] = "FAILED";
    DedicatedTenancyModificationStateEnum["PENDING"] = "PENDING";
})(DedicatedTenancyModificationStateEnum = exports.DedicatedTenancyModificationStateEnum || (exports.DedicatedTenancyModificationStateEnum = {}));
var DedicatedTenancySupportEnum;
(function (DedicatedTenancySupportEnum) {
    DedicatedTenancySupportEnum["ENABLED"] = "ENABLED";
})(DedicatedTenancySupportEnum = exports.DedicatedTenancySupportEnum || (exports.DedicatedTenancySupportEnum = {}));
var DedicatedTenancySupportResultEnum;
(function (DedicatedTenancySupportResultEnum) {
    DedicatedTenancySupportResultEnum["DISABLED"] = "DISABLED";
    DedicatedTenancySupportResultEnum["ENABLED"] = "ENABLED";
})(DedicatedTenancySupportResultEnum = exports.DedicatedTenancySupportResultEnum || (exports.DedicatedTenancySupportResultEnum = {}));
var DefaultWorkspaceCreationProperties;
(function (DefaultWorkspaceCreationProperties) {
    function isa(o) {
        return smithy_client_1.isa(o, "DefaultWorkspaceCreationProperties");
    }
    DefaultWorkspaceCreationProperties.isa = isa;
})(DefaultWorkspaceCreationProperties = exports.DefaultWorkspaceCreationProperties || (exports.DefaultWorkspaceCreationProperties = {}));
var DeleteIpGroupRequest;
(function (DeleteIpGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteIpGroupRequest");
    }
    DeleteIpGroupRequest.isa = isa;
})(DeleteIpGroupRequest = exports.DeleteIpGroupRequest || (exports.DeleteIpGroupRequest = {}));
var DeleteIpGroupResult;
(function (DeleteIpGroupResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteIpGroupResult");
    }
    DeleteIpGroupResult.isa = isa;
})(DeleteIpGroupResult = exports.DeleteIpGroupResult || (exports.DeleteIpGroupResult = {}));
var DeleteTagsRequest;
(function (DeleteTagsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteTagsRequest");
    }
    DeleteTagsRequest.isa = isa;
})(DeleteTagsRequest = exports.DeleteTagsRequest || (exports.DeleteTagsRequest = {}));
var DeleteTagsResult;
(function (DeleteTagsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteTagsResult");
    }
    DeleteTagsResult.isa = isa;
})(DeleteTagsResult = exports.DeleteTagsResult || (exports.DeleteTagsResult = {}));
var DeleteWorkspaceImageRequest;
(function (DeleteWorkspaceImageRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteWorkspaceImageRequest");
    }
    DeleteWorkspaceImageRequest.isa = isa;
})(DeleteWorkspaceImageRequest = exports.DeleteWorkspaceImageRequest || (exports.DeleteWorkspaceImageRequest = {}));
var DeleteWorkspaceImageResult;
(function (DeleteWorkspaceImageResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteWorkspaceImageResult");
    }
    DeleteWorkspaceImageResult.isa = isa;
})(DeleteWorkspaceImageResult = exports.DeleteWorkspaceImageResult || (exports.DeleteWorkspaceImageResult = {}));
var DeregisterWorkspaceDirectoryRequest;
(function (DeregisterWorkspaceDirectoryRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeregisterWorkspaceDirectoryRequest");
    }
    DeregisterWorkspaceDirectoryRequest.isa = isa;
})(DeregisterWorkspaceDirectoryRequest = exports.DeregisterWorkspaceDirectoryRequest || (exports.DeregisterWorkspaceDirectoryRequest = {}));
var DeregisterWorkspaceDirectoryResult;
(function (DeregisterWorkspaceDirectoryResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeregisterWorkspaceDirectoryResult");
    }
    DeregisterWorkspaceDirectoryResult.isa = isa;
})(DeregisterWorkspaceDirectoryResult = exports.DeregisterWorkspaceDirectoryResult || (exports.DeregisterWorkspaceDirectoryResult = {}));
var DescribeAccountModificationsRequest;
(function (DescribeAccountModificationsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAccountModificationsRequest");
    }
    DescribeAccountModificationsRequest.isa = isa;
})(DescribeAccountModificationsRequest = exports.DescribeAccountModificationsRequest || (exports.DescribeAccountModificationsRequest = {}));
var DescribeAccountModificationsResult;
(function (DescribeAccountModificationsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAccountModificationsResult");
    }
    DescribeAccountModificationsResult.isa = isa;
})(DescribeAccountModificationsResult = exports.DescribeAccountModificationsResult || (exports.DescribeAccountModificationsResult = {}));
var DescribeAccountRequest;
(function (DescribeAccountRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAccountRequest");
    }
    DescribeAccountRequest.isa = isa;
})(DescribeAccountRequest = exports.DescribeAccountRequest || (exports.DescribeAccountRequest = {}));
var DescribeAccountResult;
(function (DescribeAccountResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeAccountResult");
    }
    DescribeAccountResult.isa = isa;
})(DescribeAccountResult = exports.DescribeAccountResult || (exports.DescribeAccountResult = {}));
var DescribeClientPropertiesRequest;
(function (DescribeClientPropertiesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeClientPropertiesRequest");
    }
    DescribeClientPropertiesRequest.isa = isa;
})(DescribeClientPropertiesRequest = exports.DescribeClientPropertiesRequest || (exports.DescribeClientPropertiesRequest = {}));
var DescribeClientPropertiesResult;
(function (DescribeClientPropertiesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeClientPropertiesResult");
    }
    DescribeClientPropertiesResult.isa = isa;
})(DescribeClientPropertiesResult = exports.DescribeClientPropertiesResult || (exports.DescribeClientPropertiesResult = {}));
var DescribeIpGroupsRequest;
(function (DescribeIpGroupsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeIpGroupsRequest");
    }
    DescribeIpGroupsRequest.isa = isa;
})(DescribeIpGroupsRequest = exports.DescribeIpGroupsRequest || (exports.DescribeIpGroupsRequest = {}));
var DescribeIpGroupsResult;
(function (DescribeIpGroupsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeIpGroupsResult");
    }
    DescribeIpGroupsResult.isa = isa;
})(DescribeIpGroupsResult = exports.DescribeIpGroupsResult || (exports.DescribeIpGroupsResult = {}));
var DescribeTagsRequest;
(function (DescribeTagsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTagsRequest");
    }
    DescribeTagsRequest.isa = isa;
})(DescribeTagsRequest = exports.DescribeTagsRequest || (exports.DescribeTagsRequest = {}));
var DescribeTagsResult;
(function (DescribeTagsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTagsResult");
    }
    DescribeTagsResult.isa = isa;
})(DescribeTagsResult = exports.DescribeTagsResult || (exports.DescribeTagsResult = {}));
var DescribeWorkspaceBundlesRequest;
(function (DescribeWorkspaceBundlesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeWorkspaceBundlesRequest");
    }
    DescribeWorkspaceBundlesRequest.isa = isa;
})(DescribeWorkspaceBundlesRequest = exports.DescribeWorkspaceBundlesRequest || (exports.DescribeWorkspaceBundlesRequest = {}));
var DescribeWorkspaceBundlesResult;
(function (DescribeWorkspaceBundlesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeWorkspaceBundlesResult");
    }
    DescribeWorkspaceBundlesResult.isa = isa;
})(DescribeWorkspaceBundlesResult = exports.DescribeWorkspaceBundlesResult || (exports.DescribeWorkspaceBundlesResult = {}));
var DescribeWorkspaceDirectoriesRequest;
(function (DescribeWorkspaceDirectoriesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeWorkspaceDirectoriesRequest");
    }
    DescribeWorkspaceDirectoriesRequest.isa = isa;
})(DescribeWorkspaceDirectoriesRequest = exports.DescribeWorkspaceDirectoriesRequest || (exports.DescribeWorkspaceDirectoriesRequest = {}));
var DescribeWorkspaceDirectoriesResult;
(function (DescribeWorkspaceDirectoriesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeWorkspaceDirectoriesResult");
    }
    DescribeWorkspaceDirectoriesResult.isa = isa;
})(DescribeWorkspaceDirectoriesResult = exports.DescribeWorkspaceDirectoriesResult || (exports.DescribeWorkspaceDirectoriesResult = {}));
var DescribeWorkspaceImagesRequest;
(function (DescribeWorkspaceImagesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeWorkspaceImagesRequest");
    }
    DescribeWorkspaceImagesRequest.isa = isa;
})(DescribeWorkspaceImagesRequest = exports.DescribeWorkspaceImagesRequest || (exports.DescribeWorkspaceImagesRequest = {}));
var DescribeWorkspaceImagesResult;
(function (DescribeWorkspaceImagesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeWorkspaceImagesResult");
    }
    DescribeWorkspaceImagesResult.isa = isa;
})(DescribeWorkspaceImagesResult = exports.DescribeWorkspaceImagesResult || (exports.DescribeWorkspaceImagesResult = {}));
var DescribeWorkspaceSnapshotsRequest;
(function (DescribeWorkspaceSnapshotsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeWorkspaceSnapshotsRequest");
    }
    DescribeWorkspaceSnapshotsRequest.isa = isa;
})(DescribeWorkspaceSnapshotsRequest = exports.DescribeWorkspaceSnapshotsRequest || (exports.DescribeWorkspaceSnapshotsRequest = {}));
var DescribeWorkspaceSnapshotsResult;
(function (DescribeWorkspaceSnapshotsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeWorkspaceSnapshotsResult");
    }
    DescribeWorkspaceSnapshotsResult.isa = isa;
})(DescribeWorkspaceSnapshotsResult = exports.DescribeWorkspaceSnapshotsResult || (exports.DescribeWorkspaceSnapshotsResult = {}));
var DescribeWorkspacesConnectionStatusRequest;
(function (DescribeWorkspacesConnectionStatusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeWorkspacesConnectionStatusRequest");
    }
    DescribeWorkspacesConnectionStatusRequest.isa = isa;
})(DescribeWorkspacesConnectionStatusRequest = exports.DescribeWorkspacesConnectionStatusRequest || (exports.DescribeWorkspacesConnectionStatusRequest = {}));
var DescribeWorkspacesConnectionStatusResult;
(function (DescribeWorkspacesConnectionStatusResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeWorkspacesConnectionStatusResult");
    }
    DescribeWorkspacesConnectionStatusResult.isa = isa;
})(DescribeWorkspacesConnectionStatusResult = exports.DescribeWorkspacesConnectionStatusResult || (exports.DescribeWorkspacesConnectionStatusResult = {}));
var DescribeWorkspacesRequest;
(function (DescribeWorkspacesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeWorkspacesRequest");
    }
    DescribeWorkspacesRequest.isa = isa;
})(DescribeWorkspacesRequest = exports.DescribeWorkspacesRequest || (exports.DescribeWorkspacesRequest = {}));
var DescribeWorkspacesResult;
(function (DescribeWorkspacesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeWorkspacesResult");
    }
    DescribeWorkspacesResult.isa = isa;
})(DescribeWorkspacesResult = exports.DescribeWorkspacesResult || (exports.DescribeWorkspacesResult = {}));
var DisassociateIpGroupsRequest;
(function (DisassociateIpGroupsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateIpGroupsRequest");
    }
    DisassociateIpGroupsRequest.isa = isa;
})(DisassociateIpGroupsRequest = exports.DisassociateIpGroupsRequest || (exports.DisassociateIpGroupsRequest = {}));
var DisassociateIpGroupsResult;
(function (DisassociateIpGroupsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateIpGroupsResult");
    }
    DisassociateIpGroupsResult.isa = isa;
})(DisassociateIpGroupsResult = exports.DisassociateIpGroupsResult || (exports.DisassociateIpGroupsResult = {}));
var FailedCreateWorkspaceRequest;
(function (FailedCreateWorkspaceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "FailedCreateWorkspaceRequest");
    }
    FailedCreateWorkspaceRequest.isa = isa;
})(FailedCreateWorkspaceRequest = exports.FailedCreateWorkspaceRequest || (exports.FailedCreateWorkspaceRequest = {}));
var FailedWorkspaceChangeRequest;
(function (FailedWorkspaceChangeRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "FailedWorkspaceChangeRequest");
    }
    FailedWorkspaceChangeRequest.isa = isa;
})(FailedWorkspaceChangeRequest = exports.FailedWorkspaceChangeRequest || (exports.FailedWorkspaceChangeRequest = {}));
var ImportWorkspaceImageRequest;
(function (ImportWorkspaceImageRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ImportWorkspaceImageRequest");
    }
    ImportWorkspaceImageRequest.isa = isa;
})(ImportWorkspaceImageRequest = exports.ImportWorkspaceImageRequest || (exports.ImportWorkspaceImageRequest = {}));
var ImportWorkspaceImageResult;
(function (ImportWorkspaceImageResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ImportWorkspaceImageResult");
    }
    ImportWorkspaceImageResult.isa = isa;
})(ImportWorkspaceImageResult = exports.ImportWorkspaceImageResult || (exports.ImportWorkspaceImageResult = {}));
var InvalidParameterValuesException;
(function (InvalidParameterValuesException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidParameterValuesException");
    }
    InvalidParameterValuesException.isa = isa;
})(InvalidParameterValuesException = exports.InvalidParameterValuesException || (exports.InvalidParameterValuesException = {}));
var InvalidResourceStateException;
(function (InvalidResourceStateException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidResourceStateException");
    }
    InvalidResourceStateException.isa = isa;
})(InvalidResourceStateException = exports.InvalidResourceStateException || (exports.InvalidResourceStateException = {}));
var IpRuleItem;
(function (IpRuleItem) {
    function isa(o) {
        return smithy_client_1.isa(o, "IpRuleItem");
    }
    IpRuleItem.isa = isa;
})(IpRuleItem = exports.IpRuleItem || (exports.IpRuleItem = {}));
var ListAvailableManagementCidrRangesRequest;
(function (ListAvailableManagementCidrRangesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAvailableManagementCidrRangesRequest");
    }
    ListAvailableManagementCidrRangesRequest.isa = isa;
})(ListAvailableManagementCidrRangesRequest = exports.ListAvailableManagementCidrRangesRequest || (exports.ListAvailableManagementCidrRangesRequest = {}));
var ListAvailableManagementCidrRangesResult;
(function (ListAvailableManagementCidrRangesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAvailableManagementCidrRangesResult");
    }
    ListAvailableManagementCidrRangesResult.isa = isa;
})(ListAvailableManagementCidrRangesResult = exports.ListAvailableManagementCidrRangesResult || (exports.ListAvailableManagementCidrRangesResult = {}));
var MigrateWorkspaceRequest;
(function (MigrateWorkspaceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "MigrateWorkspaceRequest");
    }
    MigrateWorkspaceRequest.isa = isa;
})(MigrateWorkspaceRequest = exports.MigrateWorkspaceRequest || (exports.MigrateWorkspaceRequest = {}));
var MigrateWorkspaceResult;
(function (MigrateWorkspaceResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "MigrateWorkspaceResult");
    }
    MigrateWorkspaceResult.isa = isa;
})(MigrateWorkspaceResult = exports.MigrateWorkspaceResult || (exports.MigrateWorkspaceResult = {}));
var ModificationResourceEnum;
(function (ModificationResourceEnum) {
    ModificationResourceEnum["COMPUTE_TYPE"] = "COMPUTE_TYPE";
    ModificationResourceEnum["ROOT_VOLUME"] = "ROOT_VOLUME";
    ModificationResourceEnum["USER_VOLUME"] = "USER_VOLUME";
})(ModificationResourceEnum = exports.ModificationResourceEnum || (exports.ModificationResourceEnum = {}));
var ModificationState;
(function (ModificationState) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModificationState");
    }
    ModificationState.isa = isa;
})(ModificationState = exports.ModificationState || (exports.ModificationState = {}));
var ModificationStateEnum;
(function (ModificationStateEnum) {
    ModificationStateEnum["UPDATE_INITIATED"] = "UPDATE_INITIATED";
    ModificationStateEnum["UPDATE_IN_PROGRESS"] = "UPDATE_IN_PROGRESS";
})(ModificationStateEnum = exports.ModificationStateEnum || (exports.ModificationStateEnum = {}));
var ModifyAccountRequest;
(function (ModifyAccountRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModifyAccountRequest");
    }
    ModifyAccountRequest.isa = isa;
})(ModifyAccountRequest = exports.ModifyAccountRequest || (exports.ModifyAccountRequest = {}));
var ModifyAccountResult;
(function (ModifyAccountResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModifyAccountResult");
    }
    ModifyAccountResult.isa = isa;
})(ModifyAccountResult = exports.ModifyAccountResult || (exports.ModifyAccountResult = {}));
var ModifyClientPropertiesRequest;
(function (ModifyClientPropertiesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModifyClientPropertiesRequest");
    }
    ModifyClientPropertiesRequest.isa = isa;
})(ModifyClientPropertiesRequest = exports.ModifyClientPropertiesRequest || (exports.ModifyClientPropertiesRequest = {}));
var ModifyClientPropertiesResult;
(function (ModifyClientPropertiesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModifyClientPropertiesResult");
    }
    ModifyClientPropertiesResult.isa = isa;
})(ModifyClientPropertiesResult = exports.ModifyClientPropertiesResult || (exports.ModifyClientPropertiesResult = {}));
var ModifySelfservicePermissionsRequest;
(function (ModifySelfservicePermissionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModifySelfservicePermissionsRequest");
    }
    ModifySelfservicePermissionsRequest.isa = isa;
})(ModifySelfservicePermissionsRequest = exports.ModifySelfservicePermissionsRequest || (exports.ModifySelfservicePermissionsRequest = {}));
var ModifySelfservicePermissionsResult;
(function (ModifySelfservicePermissionsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModifySelfservicePermissionsResult");
    }
    ModifySelfservicePermissionsResult.isa = isa;
})(ModifySelfservicePermissionsResult = exports.ModifySelfservicePermissionsResult || (exports.ModifySelfservicePermissionsResult = {}));
var ModifyWorkspaceAccessPropertiesRequest;
(function (ModifyWorkspaceAccessPropertiesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModifyWorkspaceAccessPropertiesRequest");
    }
    ModifyWorkspaceAccessPropertiesRequest.isa = isa;
})(ModifyWorkspaceAccessPropertiesRequest = exports.ModifyWorkspaceAccessPropertiesRequest || (exports.ModifyWorkspaceAccessPropertiesRequest = {}));
var ModifyWorkspaceAccessPropertiesResult;
(function (ModifyWorkspaceAccessPropertiesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModifyWorkspaceAccessPropertiesResult");
    }
    ModifyWorkspaceAccessPropertiesResult.isa = isa;
})(ModifyWorkspaceAccessPropertiesResult = exports.ModifyWorkspaceAccessPropertiesResult || (exports.ModifyWorkspaceAccessPropertiesResult = {}));
var ModifyWorkspaceCreationPropertiesRequest;
(function (ModifyWorkspaceCreationPropertiesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModifyWorkspaceCreationPropertiesRequest");
    }
    ModifyWorkspaceCreationPropertiesRequest.isa = isa;
})(ModifyWorkspaceCreationPropertiesRequest = exports.ModifyWorkspaceCreationPropertiesRequest || (exports.ModifyWorkspaceCreationPropertiesRequest = {}));
var ModifyWorkspaceCreationPropertiesResult;
(function (ModifyWorkspaceCreationPropertiesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModifyWorkspaceCreationPropertiesResult");
    }
    ModifyWorkspaceCreationPropertiesResult.isa = isa;
})(ModifyWorkspaceCreationPropertiesResult = exports.ModifyWorkspaceCreationPropertiesResult || (exports.ModifyWorkspaceCreationPropertiesResult = {}));
var ModifyWorkspacePropertiesRequest;
(function (ModifyWorkspacePropertiesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModifyWorkspacePropertiesRequest");
    }
    ModifyWorkspacePropertiesRequest.isa = isa;
})(ModifyWorkspacePropertiesRequest = exports.ModifyWorkspacePropertiesRequest || (exports.ModifyWorkspacePropertiesRequest = {}));
var ModifyWorkspacePropertiesResult;
(function (ModifyWorkspacePropertiesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModifyWorkspacePropertiesResult");
    }
    ModifyWorkspacePropertiesResult.isa = isa;
})(ModifyWorkspacePropertiesResult = exports.ModifyWorkspacePropertiesResult || (exports.ModifyWorkspacePropertiesResult = {}));
var ModifyWorkspaceStateRequest;
(function (ModifyWorkspaceStateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModifyWorkspaceStateRequest");
    }
    ModifyWorkspaceStateRequest.isa = isa;
})(ModifyWorkspaceStateRequest = exports.ModifyWorkspaceStateRequest || (exports.ModifyWorkspaceStateRequest = {}));
var ModifyWorkspaceStateResult;
(function (ModifyWorkspaceStateResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ModifyWorkspaceStateResult");
    }
    ModifyWorkspaceStateResult.isa = isa;
})(ModifyWorkspaceStateResult = exports.ModifyWorkspaceStateResult || (exports.ModifyWorkspaceStateResult = {}));
var OperatingSystem;
(function (OperatingSystem) {
    function isa(o) {
        return smithy_client_1.isa(o, "OperatingSystem");
    }
    OperatingSystem.isa = isa;
})(OperatingSystem = exports.OperatingSystem || (exports.OperatingSystem = {}));
var OperatingSystemType;
(function (OperatingSystemType) {
    OperatingSystemType["LINUX"] = "LINUX";
    OperatingSystemType["WINDOWS"] = "WINDOWS";
})(OperatingSystemType = exports.OperatingSystemType || (exports.OperatingSystemType = {}));
var OperationInProgressException;
(function (OperationInProgressException) {
    function isa(o) {
        return smithy_client_1.isa(o, "OperationInProgressException");
    }
    OperationInProgressException.isa = isa;
})(OperationInProgressException = exports.OperationInProgressException || (exports.OperationInProgressException = {}));
var OperationNotSupportedException;
(function (OperationNotSupportedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "OperationNotSupportedException");
    }
    OperationNotSupportedException.isa = isa;
})(OperationNotSupportedException = exports.OperationNotSupportedException || (exports.OperationNotSupportedException = {}));
var RebootRequest;
(function (RebootRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RebootRequest");
    }
    RebootRequest.isa = isa;
})(RebootRequest = exports.RebootRequest || (exports.RebootRequest = {}));
var RebootWorkspacesRequest;
(function (RebootWorkspacesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RebootWorkspacesRequest");
    }
    RebootWorkspacesRequest.isa = isa;
})(RebootWorkspacesRequest = exports.RebootWorkspacesRequest || (exports.RebootWorkspacesRequest = {}));
var RebootWorkspacesResult;
(function (RebootWorkspacesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "RebootWorkspacesResult");
    }
    RebootWorkspacesResult.isa = isa;
})(RebootWorkspacesResult = exports.RebootWorkspacesResult || (exports.RebootWorkspacesResult = {}));
var RebuildRequest;
(function (RebuildRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RebuildRequest");
    }
    RebuildRequest.isa = isa;
})(RebuildRequest = exports.RebuildRequest || (exports.RebuildRequest = {}));
var RebuildWorkspacesRequest;
(function (RebuildWorkspacesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RebuildWorkspacesRequest");
    }
    RebuildWorkspacesRequest.isa = isa;
})(RebuildWorkspacesRequest = exports.RebuildWorkspacesRequest || (exports.RebuildWorkspacesRequest = {}));
var RebuildWorkspacesResult;
(function (RebuildWorkspacesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "RebuildWorkspacesResult");
    }
    RebuildWorkspacesResult.isa = isa;
})(RebuildWorkspacesResult = exports.RebuildWorkspacesResult || (exports.RebuildWorkspacesResult = {}));
var ReconnectEnum;
(function (ReconnectEnum) {
    ReconnectEnum["DISABLED"] = "DISABLED";
    ReconnectEnum["ENABLED"] = "ENABLED";
})(ReconnectEnum = exports.ReconnectEnum || (exports.ReconnectEnum = {}));
var RegisterWorkspaceDirectoryRequest;
(function (RegisterWorkspaceDirectoryRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegisterWorkspaceDirectoryRequest");
    }
    RegisterWorkspaceDirectoryRequest.isa = isa;
})(RegisterWorkspaceDirectoryRequest = exports.RegisterWorkspaceDirectoryRequest || (exports.RegisterWorkspaceDirectoryRequest = {}));
var RegisterWorkspaceDirectoryResult;
(function (RegisterWorkspaceDirectoryResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegisterWorkspaceDirectoryResult");
    }
    RegisterWorkspaceDirectoryResult.isa = isa;
})(RegisterWorkspaceDirectoryResult = exports.RegisterWorkspaceDirectoryResult || (exports.RegisterWorkspaceDirectoryResult = {}));
var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceAlreadyExistsException");
    }
    ResourceAlreadyExistsException.isa = isa;
})(ResourceAlreadyExistsException = exports.ResourceAlreadyExistsException || (exports.ResourceAlreadyExistsException = {}));
var ResourceAssociatedException;
(function (ResourceAssociatedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceAssociatedException");
    }
    ResourceAssociatedException.isa = isa;
})(ResourceAssociatedException = exports.ResourceAssociatedException || (exports.ResourceAssociatedException = {}));
var ResourceCreationFailedException;
(function (ResourceCreationFailedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceCreationFailedException");
    }
    ResourceCreationFailedException.isa = isa;
})(ResourceCreationFailedException = exports.ResourceCreationFailedException || (exports.ResourceCreationFailedException = {}));
var ResourceLimitExceededException;
(function (ResourceLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceLimitExceededException");
    }
    ResourceLimitExceededException.isa = isa;
})(ResourceLimitExceededException = exports.ResourceLimitExceededException || (exports.ResourceLimitExceededException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNotFoundException");
    }
    ResourceNotFoundException.isa = isa;
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ResourceUnavailableException;
(function (ResourceUnavailableException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceUnavailableException");
    }
    ResourceUnavailableException.isa = isa;
})(ResourceUnavailableException = exports.ResourceUnavailableException || (exports.ResourceUnavailableException = {}));
var RestoreWorkspaceRequest;
(function (RestoreWorkspaceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RestoreWorkspaceRequest");
    }
    RestoreWorkspaceRequest.isa = isa;
})(RestoreWorkspaceRequest = exports.RestoreWorkspaceRequest || (exports.RestoreWorkspaceRequest = {}));
var RestoreWorkspaceResult;
(function (RestoreWorkspaceResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "RestoreWorkspaceResult");
    }
    RestoreWorkspaceResult.isa = isa;
})(RestoreWorkspaceResult = exports.RestoreWorkspaceResult || (exports.RestoreWorkspaceResult = {}));
var RevokeIpRulesRequest;
(function (RevokeIpRulesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RevokeIpRulesRequest");
    }
    RevokeIpRulesRequest.isa = isa;
})(RevokeIpRulesRequest = exports.RevokeIpRulesRequest || (exports.RevokeIpRulesRequest = {}));
var RevokeIpRulesResult;
(function (RevokeIpRulesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "RevokeIpRulesResult");
    }
    RevokeIpRulesResult.isa = isa;
})(RevokeIpRulesResult = exports.RevokeIpRulesResult || (exports.RevokeIpRulesResult = {}));
var RootStorage;
(function (RootStorage) {
    function isa(o) {
        return smithy_client_1.isa(o, "RootStorage");
    }
    RootStorage.isa = isa;
})(RootStorage = exports.RootStorage || (exports.RootStorage = {}));
var RunningMode;
(function (RunningMode) {
    RunningMode["ALWAYS_ON"] = "ALWAYS_ON";
    RunningMode["AUTO_STOP"] = "AUTO_STOP";
})(RunningMode = exports.RunningMode || (exports.RunningMode = {}));
var SelfservicePermissions;
(function (SelfservicePermissions) {
    function isa(o) {
        return smithy_client_1.isa(o, "SelfservicePermissions");
    }
    SelfservicePermissions.isa = isa;
})(SelfservicePermissions = exports.SelfservicePermissions || (exports.SelfservicePermissions = {}));
var Snapshot;
(function (Snapshot) {
    function isa(o) {
        return smithy_client_1.isa(o, "Snapshot");
    }
    Snapshot.isa = isa;
})(Snapshot = exports.Snapshot || (exports.Snapshot = {}));
var StartRequest;
(function (StartRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartRequest");
    }
    StartRequest.isa = isa;
})(StartRequest = exports.StartRequest || (exports.StartRequest = {}));
var StartWorkspacesRequest;
(function (StartWorkspacesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartWorkspacesRequest");
    }
    StartWorkspacesRequest.isa = isa;
})(StartWorkspacesRequest = exports.StartWorkspacesRequest || (exports.StartWorkspacesRequest = {}));
var StartWorkspacesResult;
(function (StartWorkspacesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartWorkspacesResult");
    }
    StartWorkspacesResult.isa = isa;
})(StartWorkspacesResult = exports.StartWorkspacesResult || (exports.StartWorkspacesResult = {}));
var StopRequest;
(function (StopRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopRequest");
    }
    StopRequest.isa = isa;
})(StopRequest = exports.StopRequest || (exports.StopRequest = {}));
var StopWorkspacesRequest;
(function (StopWorkspacesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopWorkspacesRequest");
    }
    StopWorkspacesRequest.isa = isa;
})(StopWorkspacesRequest = exports.StopWorkspacesRequest || (exports.StopWorkspacesRequest = {}));
var StopWorkspacesResult;
(function (StopWorkspacesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopWorkspacesResult");
    }
    StopWorkspacesResult.isa = isa;
})(StopWorkspacesResult = exports.StopWorkspacesResult || (exports.StopWorkspacesResult = {}));
var Tag;
(function (Tag) {
    function isa(o) {
        return smithy_client_1.isa(o, "Tag");
    }
    Tag.isa = isa;
})(Tag = exports.Tag || (exports.Tag = {}));
var TargetWorkspaceState;
(function (TargetWorkspaceState) {
    TargetWorkspaceState["ADMIN_MAINTENANCE"] = "ADMIN_MAINTENANCE";
    TargetWorkspaceState["AVAILABLE"] = "AVAILABLE";
})(TargetWorkspaceState = exports.TargetWorkspaceState || (exports.TargetWorkspaceState = {}));
var Tenancy;
(function (Tenancy) {
    Tenancy["DEDICATED"] = "DEDICATED";
    Tenancy["SHARED"] = "SHARED";
})(Tenancy = exports.Tenancy || (exports.Tenancy = {}));
var TerminateRequest;
(function (TerminateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "TerminateRequest");
    }
    TerminateRequest.isa = isa;
})(TerminateRequest = exports.TerminateRequest || (exports.TerminateRequest = {}));
var TerminateWorkspacesRequest;
(function (TerminateWorkspacesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "TerminateWorkspacesRequest");
    }
    TerminateWorkspacesRequest.isa = isa;
})(TerminateWorkspacesRequest = exports.TerminateWorkspacesRequest || (exports.TerminateWorkspacesRequest = {}));
var TerminateWorkspacesResult;
(function (TerminateWorkspacesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "TerminateWorkspacesResult");
    }
    TerminateWorkspacesResult.isa = isa;
})(TerminateWorkspacesResult = exports.TerminateWorkspacesResult || (exports.TerminateWorkspacesResult = {}));
var UnsupportedNetworkConfigurationException;
(function (UnsupportedNetworkConfigurationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnsupportedNetworkConfigurationException");
    }
    UnsupportedNetworkConfigurationException.isa = isa;
})(UnsupportedNetworkConfigurationException = exports.UnsupportedNetworkConfigurationException || (exports.UnsupportedNetworkConfigurationException = {}));
var UnsupportedWorkspaceConfigurationException;
(function (UnsupportedWorkspaceConfigurationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "UnsupportedWorkspaceConfigurationException");
    }
    UnsupportedWorkspaceConfigurationException.isa = isa;
})(UnsupportedWorkspaceConfigurationException = exports.UnsupportedWorkspaceConfigurationException || (exports.UnsupportedWorkspaceConfigurationException = {}));
var UpdateRulesOfIpGroupRequest;
(function (UpdateRulesOfIpGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateRulesOfIpGroupRequest");
    }
    UpdateRulesOfIpGroupRequest.isa = isa;
})(UpdateRulesOfIpGroupRequest = exports.UpdateRulesOfIpGroupRequest || (exports.UpdateRulesOfIpGroupRequest = {}));
var UpdateRulesOfIpGroupResult;
(function (UpdateRulesOfIpGroupResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateRulesOfIpGroupResult");
    }
    UpdateRulesOfIpGroupResult.isa = isa;
})(UpdateRulesOfIpGroupResult = exports.UpdateRulesOfIpGroupResult || (exports.UpdateRulesOfIpGroupResult = {}));
var UserStorage;
(function (UserStorage) {
    function isa(o) {
        return smithy_client_1.isa(o, "UserStorage");
    }
    UserStorage.isa = isa;
})(UserStorage = exports.UserStorage || (exports.UserStorage = {}));
var Workspace;
(function (Workspace) {
    function isa(o) {
        return smithy_client_1.isa(o, "Workspace");
    }
    Workspace.isa = isa;
})(Workspace = exports.Workspace || (exports.Workspace = {}));
var WorkspaceAccessProperties;
(function (WorkspaceAccessProperties) {
    function isa(o) {
        return smithy_client_1.isa(o, "WorkspaceAccessProperties");
    }
    WorkspaceAccessProperties.isa = isa;
})(WorkspaceAccessProperties = exports.WorkspaceAccessProperties || (exports.WorkspaceAccessProperties = {}));
var WorkspaceBundle;
(function (WorkspaceBundle) {
    function isa(o) {
        return smithy_client_1.isa(o, "WorkspaceBundle");
    }
    WorkspaceBundle.isa = isa;
})(WorkspaceBundle = exports.WorkspaceBundle || (exports.WorkspaceBundle = {}));
var WorkspaceConnectionStatus;
(function (WorkspaceConnectionStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "WorkspaceConnectionStatus");
    }
    WorkspaceConnectionStatus.isa = isa;
})(WorkspaceConnectionStatus = exports.WorkspaceConnectionStatus || (exports.WorkspaceConnectionStatus = {}));
var WorkspaceCreationProperties;
(function (WorkspaceCreationProperties) {
    function isa(o) {
        return smithy_client_1.isa(o, "WorkspaceCreationProperties");
    }
    WorkspaceCreationProperties.isa = isa;
})(WorkspaceCreationProperties = exports.WorkspaceCreationProperties || (exports.WorkspaceCreationProperties = {}));
var WorkspaceDirectory;
(function (WorkspaceDirectory) {
    function isa(o) {
        return smithy_client_1.isa(o, "WorkspaceDirectory");
    }
    WorkspaceDirectory.isa = isa;
})(WorkspaceDirectory = exports.WorkspaceDirectory || (exports.WorkspaceDirectory = {}));
var WorkspaceDirectoryState;
(function (WorkspaceDirectoryState) {
    WorkspaceDirectoryState["DEREGISTERED"] = "DEREGISTERED";
    WorkspaceDirectoryState["DEREGISTERING"] = "DEREGISTERING";
    WorkspaceDirectoryState["ERROR"] = "ERROR";
    WorkspaceDirectoryState["REGISTERED"] = "REGISTERED";
    WorkspaceDirectoryState["REGISTERING"] = "REGISTERING";
})(WorkspaceDirectoryState = exports.WorkspaceDirectoryState || (exports.WorkspaceDirectoryState = {}));
var WorkspaceDirectoryType;
(function (WorkspaceDirectoryType) {
    WorkspaceDirectoryType["AD_CONNECTOR"] = "AD_CONNECTOR";
    WorkspaceDirectoryType["SIMPLE_AD"] = "SIMPLE_AD";
})(WorkspaceDirectoryType = exports.WorkspaceDirectoryType || (exports.WorkspaceDirectoryType = {}));
var WorkspaceImage;
(function (WorkspaceImage) {
    function isa(o) {
        return smithy_client_1.isa(o, "WorkspaceImage");
    }
    WorkspaceImage.isa = isa;
})(WorkspaceImage = exports.WorkspaceImage || (exports.WorkspaceImage = {}));
var WorkspaceImageIngestionProcess;
(function (WorkspaceImageIngestionProcess) {
    WorkspaceImageIngestionProcess["BYOL_GRAPHICS"] = "BYOL_GRAPHICS";
    WorkspaceImageIngestionProcess["BYOL_GRAPHICSPRO"] = "BYOL_GRAPHICSPRO";
    WorkspaceImageIngestionProcess["BYOL_REGULAR"] = "BYOL_REGULAR";
})(WorkspaceImageIngestionProcess = exports.WorkspaceImageIngestionProcess || (exports.WorkspaceImageIngestionProcess = {}));
var WorkspaceImageRequiredTenancy;
(function (WorkspaceImageRequiredTenancy) {
    WorkspaceImageRequiredTenancy["DEDICATED"] = "DEDICATED";
    WorkspaceImageRequiredTenancy["DEFAULT"] = "DEFAULT";
})(WorkspaceImageRequiredTenancy = exports.WorkspaceImageRequiredTenancy || (exports.WorkspaceImageRequiredTenancy = {}));
var WorkspaceImageState;
(function (WorkspaceImageState) {
    WorkspaceImageState["AVAILABLE"] = "AVAILABLE";
    WorkspaceImageState["ERROR"] = "ERROR";
    WorkspaceImageState["PENDING"] = "PENDING";
})(WorkspaceImageState = exports.WorkspaceImageState || (exports.WorkspaceImageState = {}));
var WorkspaceProperties;
(function (WorkspaceProperties) {
    function isa(o) {
        return smithy_client_1.isa(o, "WorkspaceProperties");
    }
    WorkspaceProperties.isa = isa;
})(WorkspaceProperties = exports.WorkspaceProperties || (exports.WorkspaceProperties = {}));
var WorkspaceRequest;
(function (WorkspaceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "WorkspaceRequest");
    }
    WorkspaceRequest.isa = isa;
})(WorkspaceRequest = exports.WorkspaceRequest || (exports.WorkspaceRequest = {}));
var WorkspaceState;
(function (WorkspaceState) {
    WorkspaceState["ADMIN_MAINTENANCE"] = "ADMIN_MAINTENANCE";
    WorkspaceState["AVAILABLE"] = "AVAILABLE";
    WorkspaceState["ERROR"] = "ERROR";
    WorkspaceState["IMPAIRED"] = "IMPAIRED";
    WorkspaceState["MAINTENANCE"] = "MAINTENANCE";
    WorkspaceState["PENDING"] = "PENDING";
    WorkspaceState["REBOOTING"] = "REBOOTING";
    WorkspaceState["REBUILDING"] = "REBUILDING";
    WorkspaceState["RESTORING"] = "RESTORING";
    WorkspaceState["STARTING"] = "STARTING";
    WorkspaceState["STOPPED"] = "STOPPED";
    WorkspaceState["STOPPING"] = "STOPPING";
    WorkspaceState["SUSPENDED"] = "SUSPENDED";
    WorkspaceState["TERMINATED"] = "TERMINATED";
    WorkspaceState["TERMINATING"] = "TERMINATING";
    WorkspaceState["UNHEALTHY"] = "UNHEALTHY";
    WorkspaceState["UPDATING"] = "UPDATING";
})(WorkspaceState = exports.WorkspaceState || (exports.WorkspaceState = {}));
var WorkspacesDefaultRoleNotFoundException;
(function (WorkspacesDefaultRoleNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "WorkspacesDefaultRoleNotFoundException");
    }
    WorkspacesDefaultRoleNotFoundException.isa = isa;
})(WorkspacesDefaultRoleNotFoundException = exports.WorkspacesDefaultRoleNotFoundException || (exports.WorkspacesDefaultRoleNotFoundException = {}));
var WorkspacesIpGroup;
(function (WorkspacesIpGroup) {
    function isa(o) {
        return smithy_client_1.isa(o, "WorkspacesIpGroup");
    }
    WorkspacesIpGroup.isa = isa;
})(WorkspacesIpGroup = exports.WorkspacesIpGroup || (exports.WorkspacesIpGroup = {}));
//# sourceMappingURL=index.js.map