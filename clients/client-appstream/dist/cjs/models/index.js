"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccessEndpoint;
(function (AccessEndpoint) {
    function isa(o) {
        return smithy_client_1.isa(o, "AccessEndpoint");
    }
    AccessEndpoint.isa = isa;
})(AccessEndpoint = exports.AccessEndpoint || (exports.AccessEndpoint = {}));
var AccessEndpointType;
(function (AccessEndpointType) {
    AccessEndpointType["STREAMING"] = "STREAMING";
})(AccessEndpointType = exports.AccessEndpointType || (exports.AccessEndpointType = {}));
var Action;
(function (Action) {
    Action["CLIPBOARD_COPY_FROM_LOCAL_DEVICE"] = "CLIPBOARD_COPY_FROM_LOCAL_DEVICE";
    Action["CLIPBOARD_COPY_TO_LOCAL_DEVICE"] = "CLIPBOARD_COPY_TO_LOCAL_DEVICE";
    Action["FILE_DOWNLOAD"] = "FILE_DOWNLOAD";
    Action["FILE_UPLOAD"] = "FILE_UPLOAD";
    Action["PRINTING_TO_LOCAL_DEVICE"] = "PRINTING_TO_LOCAL_DEVICE";
})(Action = exports.Action || (exports.Action = {}));
var Application;
(function (Application) {
    function isa(o) {
        return smithy_client_1.isa(o, "Application");
    }
    Application.isa = isa;
})(Application = exports.Application || (exports.Application = {}));
var ApplicationSettings;
(function (ApplicationSettings) {
    function isa(o) {
        return smithy_client_1.isa(o, "ApplicationSettings");
    }
    ApplicationSettings.isa = isa;
})(ApplicationSettings = exports.ApplicationSettings || (exports.ApplicationSettings = {}));
var ApplicationSettingsResponse;
(function (ApplicationSettingsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ApplicationSettingsResponse");
    }
    ApplicationSettingsResponse.isa = isa;
})(ApplicationSettingsResponse = exports.ApplicationSettingsResponse || (exports.ApplicationSettingsResponse = {}));
var AssociateFleetRequest;
(function (AssociateFleetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateFleetRequest");
    }
    AssociateFleetRequest.isa = isa;
})(AssociateFleetRequest = exports.AssociateFleetRequest || (exports.AssociateFleetRequest = {}));
var AssociateFleetResult;
(function (AssociateFleetResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateFleetResult");
    }
    AssociateFleetResult.isa = isa;
})(AssociateFleetResult = exports.AssociateFleetResult || (exports.AssociateFleetResult = {}));
var AuthenticationType;
(function (AuthenticationType) {
    AuthenticationType["API"] = "API";
    AuthenticationType["SAML"] = "SAML";
    AuthenticationType["USERPOOL"] = "USERPOOL";
})(AuthenticationType = exports.AuthenticationType || (exports.AuthenticationType = {}));
var BatchAssociateUserStackRequest;
(function (BatchAssociateUserStackRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchAssociateUserStackRequest");
    }
    BatchAssociateUserStackRequest.isa = isa;
})(BatchAssociateUserStackRequest = exports.BatchAssociateUserStackRequest || (exports.BatchAssociateUserStackRequest = {}));
var BatchAssociateUserStackResult;
(function (BatchAssociateUserStackResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchAssociateUserStackResult");
    }
    BatchAssociateUserStackResult.isa = isa;
})(BatchAssociateUserStackResult = exports.BatchAssociateUserStackResult || (exports.BatchAssociateUserStackResult = {}));
var BatchDisassociateUserStackRequest;
(function (BatchDisassociateUserStackRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchDisassociateUserStackRequest");
    }
    BatchDisassociateUserStackRequest.isa = isa;
})(BatchDisassociateUserStackRequest = exports.BatchDisassociateUserStackRequest || (exports.BatchDisassociateUserStackRequest = {}));
var BatchDisassociateUserStackResult;
(function (BatchDisassociateUserStackResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchDisassociateUserStackResult");
    }
    BatchDisassociateUserStackResult.isa = isa;
})(BatchDisassociateUserStackResult = exports.BatchDisassociateUserStackResult || (exports.BatchDisassociateUserStackResult = {}));
var ComputeCapacity;
(function (ComputeCapacity) {
    function isa(o) {
        return smithy_client_1.isa(o, "ComputeCapacity");
    }
    ComputeCapacity.isa = isa;
})(ComputeCapacity = exports.ComputeCapacity || (exports.ComputeCapacity = {}));
var ComputeCapacityStatus;
(function (ComputeCapacityStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "ComputeCapacityStatus");
    }
    ComputeCapacityStatus.isa = isa;
})(ComputeCapacityStatus = exports.ComputeCapacityStatus || (exports.ComputeCapacityStatus = {}));
var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConcurrentModificationException");
    }
    ConcurrentModificationException.isa = isa;
})(ConcurrentModificationException = exports.ConcurrentModificationException || (exports.ConcurrentModificationException = {}));
var CopyImageRequest;
(function (CopyImageRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CopyImageRequest");
    }
    CopyImageRequest.isa = isa;
})(CopyImageRequest = exports.CopyImageRequest || (exports.CopyImageRequest = {}));
var CopyImageResponse;
(function (CopyImageResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CopyImageResponse");
    }
    CopyImageResponse.isa = isa;
})(CopyImageResponse = exports.CopyImageResponse || (exports.CopyImageResponse = {}));
var CreateDirectoryConfigRequest;
(function (CreateDirectoryConfigRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDirectoryConfigRequest");
    }
    CreateDirectoryConfigRequest.isa = isa;
})(CreateDirectoryConfigRequest = exports.CreateDirectoryConfigRequest || (exports.CreateDirectoryConfigRequest = {}));
var CreateDirectoryConfigResult;
(function (CreateDirectoryConfigResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDirectoryConfigResult");
    }
    CreateDirectoryConfigResult.isa = isa;
})(CreateDirectoryConfigResult = exports.CreateDirectoryConfigResult || (exports.CreateDirectoryConfigResult = {}));
var CreateFleetRequest;
(function (CreateFleetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateFleetRequest");
    }
    CreateFleetRequest.isa = isa;
})(CreateFleetRequest = exports.CreateFleetRequest || (exports.CreateFleetRequest = {}));
var CreateFleetResult;
(function (CreateFleetResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateFleetResult");
    }
    CreateFleetResult.isa = isa;
})(CreateFleetResult = exports.CreateFleetResult || (exports.CreateFleetResult = {}));
var CreateImageBuilderRequest;
(function (CreateImageBuilderRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateImageBuilderRequest");
    }
    CreateImageBuilderRequest.isa = isa;
})(CreateImageBuilderRequest = exports.CreateImageBuilderRequest || (exports.CreateImageBuilderRequest = {}));
var CreateImageBuilderResult;
(function (CreateImageBuilderResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateImageBuilderResult");
    }
    CreateImageBuilderResult.isa = isa;
})(CreateImageBuilderResult = exports.CreateImageBuilderResult || (exports.CreateImageBuilderResult = {}));
var CreateImageBuilderStreamingURLRequest;
(function (CreateImageBuilderStreamingURLRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateImageBuilderStreamingURLRequest");
    }
    CreateImageBuilderStreamingURLRequest.isa = isa;
})(CreateImageBuilderStreamingURLRequest = exports.CreateImageBuilderStreamingURLRequest || (exports.CreateImageBuilderStreamingURLRequest = {}));
var CreateImageBuilderStreamingURLResult;
(function (CreateImageBuilderStreamingURLResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateImageBuilderStreamingURLResult");
    }
    CreateImageBuilderStreamingURLResult.isa = isa;
})(CreateImageBuilderStreamingURLResult = exports.CreateImageBuilderStreamingURLResult || (exports.CreateImageBuilderStreamingURLResult = {}));
var CreateStackRequest;
(function (CreateStackRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateStackRequest");
    }
    CreateStackRequest.isa = isa;
})(CreateStackRequest = exports.CreateStackRequest || (exports.CreateStackRequest = {}));
var CreateStackResult;
(function (CreateStackResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateStackResult");
    }
    CreateStackResult.isa = isa;
})(CreateStackResult = exports.CreateStackResult || (exports.CreateStackResult = {}));
var CreateStreamingURLRequest;
(function (CreateStreamingURLRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateStreamingURLRequest");
    }
    CreateStreamingURLRequest.isa = isa;
})(CreateStreamingURLRequest = exports.CreateStreamingURLRequest || (exports.CreateStreamingURLRequest = {}));
var CreateStreamingURLResult;
(function (CreateStreamingURLResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateStreamingURLResult");
    }
    CreateStreamingURLResult.isa = isa;
})(CreateStreamingURLResult = exports.CreateStreamingURLResult || (exports.CreateStreamingURLResult = {}));
var CreateUsageReportSubscriptionRequest;
(function (CreateUsageReportSubscriptionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateUsageReportSubscriptionRequest");
    }
    CreateUsageReportSubscriptionRequest.isa = isa;
})(CreateUsageReportSubscriptionRequest = exports.CreateUsageReportSubscriptionRequest || (exports.CreateUsageReportSubscriptionRequest = {}));
var CreateUsageReportSubscriptionResult;
(function (CreateUsageReportSubscriptionResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateUsageReportSubscriptionResult");
    }
    CreateUsageReportSubscriptionResult.isa = isa;
})(CreateUsageReportSubscriptionResult = exports.CreateUsageReportSubscriptionResult || (exports.CreateUsageReportSubscriptionResult = {}));
var CreateUserRequest;
(function (CreateUserRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateUserRequest");
    }
    CreateUserRequest.isa = isa;
})(CreateUserRequest = exports.CreateUserRequest || (exports.CreateUserRequest = {}));
var CreateUserResult;
(function (CreateUserResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateUserResult");
    }
    CreateUserResult.isa = isa;
})(CreateUserResult = exports.CreateUserResult || (exports.CreateUserResult = {}));
var DeleteDirectoryConfigRequest;
(function (DeleteDirectoryConfigRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDirectoryConfigRequest");
    }
    DeleteDirectoryConfigRequest.isa = isa;
})(DeleteDirectoryConfigRequest = exports.DeleteDirectoryConfigRequest || (exports.DeleteDirectoryConfigRequest = {}));
var DeleteDirectoryConfigResult;
(function (DeleteDirectoryConfigResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDirectoryConfigResult");
    }
    DeleteDirectoryConfigResult.isa = isa;
})(DeleteDirectoryConfigResult = exports.DeleteDirectoryConfigResult || (exports.DeleteDirectoryConfigResult = {}));
var DeleteFleetRequest;
(function (DeleteFleetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteFleetRequest");
    }
    DeleteFleetRequest.isa = isa;
})(DeleteFleetRequest = exports.DeleteFleetRequest || (exports.DeleteFleetRequest = {}));
var DeleteFleetResult;
(function (DeleteFleetResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteFleetResult");
    }
    DeleteFleetResult.isa = isa;
})(DeleteFleetResult = exports.DeleteFleetResult || (exports.DeleteFleetResult = {}));
var DeleteImageBuilderRequest;
(function (DeleteImageBuilderRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteImageBuilderRequest");
    }
    DeleteImageBuilderRequest.isa = isa;
})(DeleteImageBuilderRequest = exports.DeleteImageBuilderRequest || (exports.DeleteImageBuilderRequest = {}));
var DeleteImageBuilderResult;
(function (DeleteImageBuilderResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteImageBuilderResult");
    }
    DeleteImageBuilderResult.isa = isa;
})(DeleteImageBuilderResult = exports.DeleteImageBuilderResult || (exports.DeleteImageBuilderResult = {}));
var DeleteImagePermissionsRequest;
(function (DeleteImagePermissionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteImagePermissionsRequest");
    }
    DeleteImagePermissionsRequest.isa = isa;
})(DeleteImagePermissionsRequest = exports.DeleteImagePermissionsRequest || (exports.DeleteImagePermissionsRequest = {}));
var DeleteImagePermissionsResult;
(function (DeleteImagePermissionsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteImagePermissionsResult");
    }
    DeleteImagePermissionsResult.isa = isa;
})(DeleteImagePermissionsResult = exports.DeleteImagePermissionsResult || (exports.DeleteImagePermissionsResult = {}));
var DeleteImageRequest;
(function (DeleteImageRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteImageRequest");
    }
    DeleteImageRequest.isa = isa;
})(DeleteImageRequest = exports.DeleteImageRequest || (exports.DeleteImageRequest = {}));
var DeleteImageResult;
(function (DeleteImageResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteImageResult");
    }
    DeleteImageResult.isa = isa;
})(DeleteImageResult = exports.DeleteImageResult || (exports.DeleteImageResult = {}));
var DeleteStackRequest;
(function (DeleteStackRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteStackRequest");
    }
    DeleteStackRequest.isa = isa;
})(DeleteStackRequest = exports.DeleteStackRequest || (exports.DeleteStackRequest = {}));
var DeleteStackResult;
(function (DeleteStackResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteStackResult");
    }
    DeleteStackResult.isa = isa;
})(DeleteStackResult = exports.DeleteStackResult || (exports.DeleteStackResult = {}));
var DeleteUsageReportSubscriptionRequest;
(function (DeleteUsageReportSubscriptionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteUsageReportSubscriptionRequest");
    }
    DeleteUsageReportSubscriptionRequest.isa = isa;
})(DeleteUsageReportSubscriptionRequest = exports.DeleteUsageReportSubscriptionRequest || (exports.DeleteUsageReportSubscriptionRequest = {}));
var DeleteUsageReportSubscriptionResult;
(function (DeleteUsageReportSubscriptionResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteUsageReportSubscriptionResult");
    }
    DeleteUsageReportSubscriptionResult.isa = isa;
})(DeleteUsageReportSubscriptionResult = exports.DeleteUsageReportSubscriptionResult || (exports.DeleteUsageReportSubscriptionResult = {}));
var DeleteUserRequest;
(function (DeleteUserRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteUserRequest");
    }
    DeleteUserRequest.isa = isa;
})(DeleteUserRequest = exports.DeleteUserRequest || (exports.DeleteUserRequest = {}));
var DeleteUserResult;
(function (DeleteUserResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteUserResult");
    }
    DeleteUserResult.isa = isa;
})(DeleteUserResult = exports.DeleteUserResult || (exports.DeleteUserResult = {}));
var DescribeDirectoryConfigsRequest;
(function (DescribeDirectoryConfigsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDirectoryConfigsRequest");
    }
    DescribeDirectoryConfigsRequest.isa = isa;
})(DescribeDirectoryConfigsRequest = exports.DescribeDirectoryConfigsRequest || (exports.DescribeDirectoryConfigsRequest = {}));
var DescribeDirectoryConfigsResult;
(function (DescribeDirectoryConfigsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeDirectoryConfigsResult");
    }
    DescribeDirectoryConfigsResult.isa = isa;
})(DescribeDirectoryConfigsResult = exports.DescribeDirectoryConfigsResult || (exports.DescribeDirectoryConfigsResult = {}));
var DescribeFleetsRequest;
(function (DescribeFleetsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeFleetsRequest");
    }
    DescribeFleetsRequest.isa = isa;
})(DescribeFleetsRequest = exports.DescribeFleetsRequest || (exports.DescribeFleetsRequest = {}));
var DescribeFleetsResult;
(function (DescribeFleetsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeFleetsResult");
    }
    DescribeFleetsResult.isa = isa;
})(DescribeFleetsResult = exports.DescribeFleetsResult || (exports.DescribeFleetsResult = {}));
var DescribeImageBuildersRequest;
(function (DescribeImageBuildersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeImageBuildersRequest");
    }
    DescribeImageBuildersRequest.isa = isa;
})(DescribeImageBuildersRequest = exports.DescribeImageBuildersRequest || (exports.DescribeImageBuildersRequest = {}));
var DescribeImageBuildersResult;
(function (DescribeImageBuildersResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeImageBuildersResult");
    }
    DescribeImageBuildersResult.isa = isa;
})(DescribeImageBuildersResult = exports.DescribeImageBuildersResult || (exports.DescribeImageBuildersResult = {}));
var DescribeImagePermissionsRequest;
(function (DescribeImagePermissionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeImagePermissionsRequest");
    }
    DescribeImagePermissionsRequest.isa = isa;
})(DescribeImagePermissionsRequest = exports.DescribeImagePermissionsRequest || (exports.DescribeImagePermissionsRequest = {}));
var DescribeImagePermissionsResult;
(function (DescribeImagePermissionsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeImagePermissionsResult");
    }
    DescribeImagePermissionsResult.isa = isa;
})(DescribeImagePermissionsResult = exports.DescribeImagePermissionsResult || (exports.DescribeImagePermissionsResult = {}));
var DescribeImagesRequest;
(function (DescribeImagesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeImagesRequest");
    }
    DescribeImagesRequest.isa = isa;
})(DescribeImagesRequest = exports.DescribeImagesRequest || (exports.DescribeImagesRequest = {}));
var DescribeImagesResult;
(function (DescribeImagesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeImagesResult");
    }
    DescribeImagesResult.isa = isa;
})(DescribeImagesResult = exports.DescribeImagesResult || (exports.DescribeImagesResult = {}));
var DescribeSessionsRequest;
(function (DescribeSessionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeSessionsRequest");
    }
    DescribeSessionsRequest.isa = isa;
})(DescribeSessionsRequest = exports.DescribeSessionsRequest || (exports.DescribeSessionsRequest = {}));
var DescribeSessionsResult;
(function (DescribeSessionsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeSessionsResult");
    }
    DescribeSessionsResult.isa = isa;
})(DescribeSessionsResult = exports.DescribeSessionsResult || (exports.DescribeSessionsResult = {}));
var DescribeStacksRequest;
(function (DescribeStacksRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeStacksRequest");
    }
    DescribeStacksRequest.isa = isa;
})(DescribeStacksRequest = exports.DescribeStacksRequest || (exports.DescribeStacksRequest = {}));
var DescribeStacksResult;
(function (DescribeStacksResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeStacksResult");
    }
    DescribeStacksResult.isa = isa;
})(DescribeStacksResult = exports.DescribeStacksResult || (exports.DescribeStacksResult = {}));
var DescribeUsageReportSubscriptionsRequest;
(function (DescribeUsageReportSubscriptionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeUsageReportSubscriptionsRequest");
    }
    DescribeUsageReportSubscriptionsRequest.isa = isa;
})(DescribeUsageReportSubscriptionsRequest = exports.DescribeUsageReportSubscriptionsRequest || (exports.DescribeUsageReportSubscriptionsRequest = {}));
var DescribeUsageReportSubscriptionsResult;
(function (DescribeUsageReportSubscriptionsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeUsageReportSubscriptionsResult");
    }
    DescribeUsageReportSubscriptionsResult.isa = isa;
})(DescribeUsageReportSubscriptionsResult = exports.DescribeUsageReportSubscriptionsResult || (exports.DescribeUsageReportSubscriptionsResult = {}));
var DescribeUserStackAssociationsRequest;
(function (DescribeUserStackAssociationsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeUserStackAssociationsRequest");
    }
    DescribeUserStackAssociationsRequest.isa = isa;
})(DescribeUserStackAssociationsRequest = exports.DescribeUserStackAssociationsRequest || (exports.DescribeUserStackAssociationsRequest = {}));
var DescribeUserStackAssociationsResult;
(function (DescribeUserStackAssociationsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeUserStackAssociationsResult");
    }
    DescribeUserStackAssociationsResult.isa = isa;
})(DescribeUserStackAssociationsResult = exports.DescribeUserStackAssociationsResult || (exports.DescribeUserStackAssociationsResult = {}));
var DescribeUsersRequest;
(function (DescribeUsersRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeUsersRequest");
    }
    DescribeUsersRequest.isa = isa;
})(DescribeUsersRequest = exports.DescribeUsersRequest || (exports.DescribeUsersRequest = {}));
var DescribeUsersResult;
(function (DescribeUsersResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeUsersResult");
    }
    DescribeUsersResult.isa = isa;
})(DescribeUsersResult = exports.DescribeUsersResult || (exports.DescribeUsersResult = {}));
var DirectoryConfig;
(function (DirectoryConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "DirectoryConfig");
    }
    DirectoryConfig.isa = isa;
})(DirectoryConfig = exports.DirectoryConfig || (exports.DirectoryConfig = {}));
var DisableUserRequest;
(function (DisableUserRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisableUserRequest");
    }
    DisableUserRequest.isa = isa;
})(DisableUserRequest = exports.DisableUserRequest || (exports.DisableUserRequest = {}));
var DisableUserResult;
(function (DisableUserResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisableUserResult");
    }
    DisableUserResult.isa = isa;
})(DisableUserResult = exports.DisableUserResult || (exports.DisableUserResult = {}));
var DisassociateFleetRequest;
(function (DisassociateFleetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateFleetRequest");
    }
    DisassociateFleetRequest.isa = isa;
})(DisassociateFleetRequest = exports.DisassociateFleetRequest || (exports.DisassociateFleetRequest = {}));
var DisassociateFleetResult;
(function (DisassociateFleetResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateFleetResult");
    }
    DisassociateFleetResult.isa = isa;
})(DisassociateFleetResult = exports.DisassociateFleetResult || (exports.DisassociateFleetResult = {}));
var DomainJoinInfo;
(function (DomainJoinInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "DomainJoinInfo");
    }
    DomainJoinInfo.isa = isa;
})(DomainJoinInfo = exports.DomainJoinInfo || (exports.DomainJoinInfo = {}));
var EnableUserRequest;
(function (EnableUserRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "EnableUserRequest");
    }
    EnableUserRequest.isa = isa;
})(EnableUserRequest = exports.EnableUserRequest || (exports.EnableUserRequest = {}));
var EnableUserResult;
(function (EnableUserResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "EnableUserResult");
    }
    EnableUserResult.isa = isa;
})(EnableUserResult = exports.EnableUserResult || (exports.EnableUserResult = {}));
var ExpireSessionRequest;
(function (ExpireSessionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExpireSessionRequest");
    }
    ExpireSessionRequest.isa = isa;
})(ExpireSessionRequest = exports.ExpireSessionRequest || (exports.ExpireSessionRequest = {}));
var ExpireSessionResult;
(function (ExpireSessionResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExpireSessionResult");
    }
    ExpireSessionResult.isa = isa;
})(ExpireSessionResult = exports.ExpireSessionResult || (exports.ExpireSessionResult = {}));
var Fleet;
(function (Fleet) {
    function isa(o) {
        return smithy_client_1.isa(o, "Fleet");
    }
    Fleet.isa = isa;
})(Fleet = exports.Fleet || (exports.Fleet = {}));
var FleetAttribute;
(function (FleetAttribute) {
    FleetAttribute["DOMAIN_JOIN_INFO"] = "DOMAIN_JOIN_INFO";
    FleetAttribute["IAM_ROLE_ARN"] = "IAM_ROLE_ARN";
    FleetAttribute["VPC_CONFIGURATION"] = "VPC_CONFIGURATION";
    FleetAttribute["VPC_CONFIGURATION_SECURITY_GROUP_IDS"] = "VPC_CONFIGURATION_SECURITY_GROUP_IDS";
})(FleetAttribute = exports.FleetAttribute || (exports.FleetAttribute = {}));
var FleetError;
(function (FleetError) {
    function isa(o) {
        return smithy_client_1.isa(o, "FleetError");
    }
    FleetError.isa = isa;
})(FleetError = exports.FleetError || (exports.FleetError = {}));
var FleetErrorCode;
(function (FleetErrorCode) {
    FleetErrorCode["DOMAIN_JOIN_ERROR_ACCESS_DENIED"] = "DOMAIN_JOIN_ERROR_ACCESS_DENIED";
    FleetErrorCode["DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED"] = "DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED";
    FleetErrorCode["DOMAIN_JOIN_ERROR_FILE_NOT_FOUND"] = "DOMAIN_JOIN_ERROR_FILE_NOT_FOUND";
    FleetErrorCode["DOMAIN_JOIN_ERROR_INVALID_PARAMETER"] = "DOMAIN_JOIN_ERROR_INVALID_PARAMETER";
    FleetErrorCode["DOMAIN_JOIN_ERROR_LOGON_FAILURE"] = "DOMAIN_JOIN_ERROR_LOGON_FAILURE";
    FleetErrorCode["DOMAIN_JOIN_ERROR_MORE_DATA"] = "DOMAIN_JOIN_ERROR_MORE_DATA";
    FleetErrorCode["DOMAIN_JOIN_ERROR_NOT_SUPPORTED"] = "DOMAIN_JOIN_ERROR_NOT_SUPPORTED";
    FleetErrorCode["DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN"] = "DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN";
    FleetErrorCode["DOMAIN_JOIN_INTERNAL_SERVICE_ERROR"] = "DOMAIN_JOIN_INTERNAL_SERVICE_ERROR";
    FleetErrorCode["DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME"] = "DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME";
    FleetErrorCode["DOMAIN_JOIN_NERR_PASSWORD_EXPIRED"] = "DOMAIN_JOIN_NERR_PASSWORD_EXPIRED";
    FleetErrorCode["DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED"] = "DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED";
    FleetErrorCode["IAM_SERVICE_ROLE_IS_MISSING"] = "IAM_SERVICE_ROLE_IS_MISSING";
    FleetErrorCode["IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION"] = "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION";
    FleetErrorCode["IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION"] = "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION";
    FleetErrorCode["IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION"] = "IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION";
    FleetErrorCode["IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION"] = "IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION";
    FleetErrorCode["IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION"] = "IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION";
    FleetErrorCode["IGW_NOT_ATTACHED"] = "IGW_NOT_ATTACHED";
    FleetErrorCode["IMAGE_NOT_FOUND"] = "IMAGE_NOT_FOUND";
    FleetErrorCode["INTERNAL_SERVICE_ERROR"] = "INTERNAL_SERVICE_ERROR";
    FleetErrorCode["INVALID_SUBNET_CONFIGURATION"] = "INVALID_SUBNET_CONFIGURATION";
    FleetErrorCode["MACHINE_ROLE_IS_MISSING"] = "MACHINE_ROLE_IS_MISSING";
    FleetErrorCode["NETWORK_INTERFACE_LIMIT_EXCEEDED"] = "NETWORK_INTERFACE_LIMIT_EXCEEDED";
    FleetErrorCode["SECURITY_GROUPS_NOT_FOUND"] = "SECURITY_GROUPS_NOT_FOUND";
    FleetErrorCode["STS_DISABLED_IN_REGION"] = "STS_DISABLED_IN_REGION";
    FleetErrorCode["SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES"] = "SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES";
    FleetErrorCode["SUBNET_NOT_FOUND"] = "SUBNET_NOT_FOUND";
})(FleetErrorCode = exports.FleetErrorCode || (exports.FleetErrorCode = {}));
var FleetState;
(function (FleetState) {
    FleetState["RUNNING"] = "RUNNING";
    FleetState["STARTING"] = "STARTING";
    FleetState["STOPPED"] = "STOPPED";
    FleetState["STOPPING"] = "STOPPING";
})(FleetState = exports.FleetState || (exports.FleetState = {}));
var FleetType;
(function (FleetType) {
    FleetType["ALWAYS_ON"] = "ALWAYS_ON";
    FleetType["ON_DEMAND"] = "ON_DEMAND";
})(FleetType = exports.FleetType || (exports.FleetType = {}));
var Image;
(function (Image) {
    function isa(o) {
        return smithy_client_1.isa(o, "Image");
    }
    Image.isa = isa;
})(Image = exports.Image || (exports.Image = {}));
var ImageBuilder;
(function (ImageBuilder) {
    function isa(o) {
        return smithy_client_1.isa(o, "ImageBuilder");
    }
    ImageBuilder.isa = isa;
})(ImageBuilder = exports.ImageBuilder || (exports.ImageBuilder = {}));
var ImageBuilderState;
(function (ImageBuilderState) {
    ImageBuilderState["DELETING"] = "DELETING";
    ImageBuilderState["FAILED"] = "FAILED";
    ImageBuilderState["PENDING"] = "PENDING";
    ImageBuilderState["REBOOTING"] = "REBOOTING";
    ImageBuilderState["RUNNING"] = "RUNNING";
    ImageBuilderState["SNAPSHOTTING"] = "SNAPSHOTTING";
    ImageBuilderState["STOPPED"] = "STOPPED";
    ImageBuilderState["STOPPING"] = "STOPPING";
    ImageBuilderState["UPDATING_AGENT"] = "UPDATING_AGENT";
})(ImageBuilderState = exports.ImageBuilderState || (exports.ImageBuilderState = {}));
var ImageBuilderStateChangeReason;
(function (ImageBuilderStateChangeReason) {
    function isa(o) {
        return smithy_client_1.isa(o, "ImageBuilderStateChangeReason");
    }
    ImageBuilderStateChangeReason.isa = isa;
})(ImageBuilderStateChangeReason = exports.ImageBuilderStateChangeReason || (exports.ImageBuilderStateChangeReason = {}));
var ImageBuilderStateChangeReasonCode;
(function (ImageBuilderStateChangeReasonCode) {
    ImageBuilderStateChangeReasonCode["IMAGE_UNAVAILABLE"] = "IMAGE_UNAVAILABLE";
    ImageBuilderStateChangeReasonCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
})(ImageBuilderStateChangeReasonCode = exports.ImageBuilderStateChangeReasonCode || (exports.ImageBuilderStateChangeReasonCode = {}));
var ImagePermissions;
(function (ImagePermissions) {
    function isa(o) {
        return smithy_client_1.isa(o, "ImagePermissions");
    }
    ImagePermissions.isa = isa;
})(ImagePermissions = exports.ImagePermissions || (exports.ImagePermissions = {}));
var ImageState;
(function (ImageState) {
    ImageState["AVAILABLE"] = "AVAILABLE";
    ImageState["COPYING"] = "COPYING";
    ImageState["DELETING"] = "DELETING";
    ImageState["FAILED"] = "FAILED";
    ImageState["PENDING"] = "PENDING";
})(ImageState = exports.ImageState || (exports.ImageState = {}));
var ImageStateChangeReason;
(function (ImageStateChangeReason) {
    function isa(o) {
        return smithy_client_1.isa(o, "ImageStateChangeReason");
    }
    ImageStateChangeReason.isa = isa;
})(ImageStateChangeReason = exports.ImageStateChangeReason || (exports.ImageStateChangeReason = {}));
var ImageStateChangeReasonCode;
(function (ImageStateChangeReasonCode) {
    ImageStateChangeReasonCode["IMAGE_BUILDER_NOT_AVAILABLE"] = "IMAGE_BUILDER_NOT_AVAILABLE";
    ImageStateChangeReasonCode["IMAGE_COPY_FAILURE"] = "IMAGE_COPY_FAILURE";
    ImageStateChangeReasonCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
})(ImageStateChangeReasonCode = exports.ImageStateChangeReasonCode || (exports.ImageStateChangeReasonCode = {}));
var IncompatibleImageException;
(function (IncompatibleImageException) {
    function isa(o) {
        return smithy_client_1.isa(o, "IncompatibleImageException");
    }
    IncompatibleImageException.isa = isa;
})(IncompatibleImageException = exports.IncompatibleImageException || (exports.IncompatibleImageException = {}));
var InvalidAccountStatusException;
(function (InvalidAccountStatusException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidAccountStatusException");
    }
    InvalidAccountStatusException.isa = isa;
})(InvalidAccountStatusException = exports.InvalidAccountStatusException || (exports.InvalidAccountStatusException = {}));
var InvalidParameterCombinationException;
(function (InvalidParameterCombinationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidParameterCombinationException");
    }
    InvalidParameterCombinationException.isa = isa;
})(InvalidParameterCombinationException = exports.InvalidParameterCombinationException || (exports.InvalidParameterCombinationException = {}));
var InvalidRoleException;
(function (InvalidRoleException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidRoleException");
    }
    InvalidRoleException.isa = isa;
})(InvalidRoleException = exports.InvalidRoleException || (exports.InvalidRoleException = {}));
var LastReportGenerationExecutionError;
(function (LastReportGenerationExecutionError) {
    function isa(o) {
        return smithy_client_1.isa(o, "LastReportGenerationExecutionError");
    }
    LastReportGenerationExecutionError.isa = isa;
})(LastReportGenerationExecutionError = exports.LastReportGenerationExecutionError || (exports.LastReportGenerationExecutionError = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ListAssociatedFleetsRequest;
(function (ListAssociatedFleetsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAssociatedFleetsRequest");
    }
    ListAssociatedFleetsRequest.isa = isa;
})(ListAssociatedFleetsRequest = exports.ListAssociatedFleetsRequest || (exports.ListAssociatedFleetsRequest = {}));
var ListAssociatedFleetsResult;
(function (ListAssociatedFleetsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAssociatedFleetsResult");
    }
    ListAssociatedFleetsResult.isa = isa;
})(ListAssociatedFleetsResult = exports.ListAssociatedFleetsResult || (exports.ListAssociatedFleetsResult = {}));
var ListAssociatedStacksRequest;
(function (ListAssociatedStacksRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAssociatedStacksRequest");
    }
    ListAssociatedStacksRequest.isa = isa;
})(ListAssociatedStacksRequest = exports.ListAssociatedStacksRequest || (exports.ListAssociatedStacksRequest = {}));
var ListAssociatedStacksResult;
(function (ListAssociatedStacksResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAssociatedStacksResult");
    }
    ListAssociatedStacksResult.isa = isa;
})(ListAssociatedStacksResult = exports.ListAssociatedStacksResult || (exports.ListAssociatedStacksResult = {}));
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
var MessageAction;
(function (MessageAction) {
    MessageAction["RESEND"] = "RESEND";
    MessageAction["SUPPRESS"] = "SUPPRESS";
})(MessageAction = exports.MessageAction || (exports.MessageAction = {}));
var NetworkAccessConfiguration;
(function (NetworkAccessConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "NetworkAccessConfiguration");
    }
    NetworkAccessConfiguration.isa = isa;
})(NetworkAccessConfiguration = exports.NetworkAccessConfiguration || (exports.NetworkAccessConfiguration = {}));
var OperationNotPermittedException;
(function (OperationNotPermittedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "OperationNotPermittedException");
    }
    OperationNotPermittedException.isa = isa;
})(OperationNotPermittedException = exports.OperationNotPermittedException || (exports.OperationNotPermittedException = {}));
var Permission;
(function (Permission) {
    Permission["DISABLED"] = "DISABLED";
    Permission["ENABLED"] = "ENABLED";
})(Permission = exports.Permission || (exports.Permission = {}));
var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceAlreadyExistsException");
    }
    ResourceAlreadyExistsException.isa = isa;
})(ResourceAlreadyExistsException = exports.ResourceAlreadyExistsException || (exports.ResourceAlreadyExistsException = {}));
var ResourceError;
(function (ResourceError) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceError");
    }
    ResourceError.isa = isa;
})(ResourceError = exports.ResourceError || (exports.ResourceError = {}));
var ResourceInUseException;
(function (ResourceInUseException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceInUseException");
    }
    ResourceInUseException.isa = isa;
})(ResourceInUseException = exports.ResourceInUseException || (exports.ResourceInUseException = {}));
var ResourceNotAvailableException;
(function (ResourceNotAvailableException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNotAvailableException");
    }
    ResourceNotAvailableException.isa = isa;
})(ResourceNotAvailableException = exports.ResourceNotAvailableException || (exports.ResourceNotAvailableException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNotFoundException");
    }
    ResourceNotFoundException.isa = isa;
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ServiceAccountCredentials;
(function (ServiceAccountCredentials) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceAccountCredentials");
    }
    ServiceAccountCredentials.isa = isa;
})(ServiceAccountCredentials = exports.ServiceAccountCredentials || (exports.ServiceAccountCredentials = {}));
var Session;
(function (Session) {
    function isa(o) {
        return smithy_client_1.isa(o, "Session");
    }
    Session.isa = isa;
})(Session = exports.Session || (exports.Session = {}));
var SessionConnectionState;
(function (SessionConnectionState) {
    SessionConnectionState["CONNECTED"] = "CONNECTED";
    SessionConnectionState["NOT_CONNECTED"] = "NOT_CONNECTED";
})(SessionConnectionState = exports.SessionConnectionState || (exports.SessionConnectionState = {}));
var SessionState;
(function (SessionState) {
    SessionState["ACTIVE"] = "ACTIVE";
    SessionState["EXPIRED"] = "EXPIRED";
    SessionState["PENDING"] = "PENDING";
})(SessionState = exports.SessionState || (exports.SessionState = {}));
var SharedImagePermissions;
(function (SharedImagePermissions) {
    function isa(o) {
        return smithy_client_1.isa(o, "SharedImagePermissions");
    }
    SharedImagePermissions.isa = isa;
})(SharedImagePermissions = exports.SharedImagePermissions || (exports.SharedImagePermissions = {}));
var Stack;
(function (Stack) {
    function isa(o) {
        return smithy_client_1.isa(o, "Stack");
    }
    Stack.isa = isa;
})(Stack = exports.Stack || (exports.Stack = {}));
var StackAttribute;
(function (StackAttribute) {
    StackAttribute["ACCESS_ENDPOINTS"] = "ACCESS_ENDPOINTS";
    StackAttribute["EMBED_HOST_DOMAINS"] = "EMBED_HOST_DOMAINS";
    StackAttribute["FEEDBACK_URL"] = "FEEDBACK_URL";
    StackAttribute["IAM_ROLE_ARN"] = "IAM_ROLE_ARN";
    StackAttribute["REDIRECT_URL"] = "REDIRECT_URL";
    StackAttribute["STORAGE_CONNECTORS"] = "STORAGE_CONNECTORS";
    StackAttribute["STORAGE_CONNECTOR_GOOGLE_DRIVE"] = "STORAGE_CONNECTOR_GOOGLE_DRIVE";
    StackAttribute["STORAGE_CONNECTOR_HOMEFOLDERS"] = "STORAGE_CONNECTOR_HOMEFOLDERS";
    StackAttribute["STORAGE_CONNECTOR_ONE_DRIVE"] = "STORAGE_CONNECTOR_ONE_DRIVE";
    StackAttribute["THEME_NAME"] = "THEME_NAME";
    StackAttribute["USER_SETTINGS"] = "USER_SETTINGS";
})(StackAttribute = exports.StackAttribute || (exports.StackAttribute = {}));
var StackError;
(function (StackError) {
    function isa(o) {
        return smithy_client_1.isa(o, "StackError");
    }
    StackError.isa = isa;
})(StackError = exports.StackError || (exports.StackError = {}));
var StackErrorCode;
(function (StackErrorCode) {
    StackErrorCode["INTERNAL_SERVICE_ERROR"] = "INTERNAL_SERVICE_ERROR";
    StackErrorCode["STORAGE_CONNECTOR_ERROR"] = "STORAGE_CONNECTOR_ERROR";
})(StackErrorCode = exports.StackErrorCode || (exports.StackErrorCode = {}));
var StartFleetRequest;
(function (StartFleetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartFleetRequest");
    }
    StartFleetRequest.isa = isa;
})(StartFleetRequest = exports.StartFleetRequest || (exports.StartFleetRequest = {}));
var StartFleetResult;
(function (StartFleetResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartFleetResult");
    }
    StartFleetResult.isa = isa;
})(StartFleetResult = exports.StartFleetResult || (exports.StartFleetResult = {}));
var StartImageBuilderRequest;
(function (StartImageBuilderRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartImageBuilderRequest");
    }
    StartImageBuilderRequest.isa = isa;
})(StartImageBuilderRequest = exports.StartImageBuilderRequest || (exports.StartImageBuilderRequest = {}));
var StartImageBuilderResult;
(function (StartImageBuilderResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartImageBuilderResult");
    }
    StartImageBuilderResult.isa = isa;
})(StartImageBuilderResult = exports.StartImageBuilderResult || (exports.StartImageBuilderResult = {}));
var StopFleetRequest;
(function (StopFleetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopFleetRequest");
    }
    StopFleetRequest.isa = isa;
})(StopFleetRequest = exports.StopFleetRequest || (exports.StopFleetRequest = {}));
var StopFleetResult;
(function (StopFleetResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopFleetResult");
    }
    StopFleetResult.isa = isa;
})(StopFleetResult = exports.StopFleetResult || (exports.StopFleetResult = {}));
var StopImageBuilderRequest;
(function (StopImageBuilderRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopImageBuilderRequest");
    }
    StopImageBuilderRequest.isa = isa;
})(StopImageBuilderRequest = exports.StopImageBuilderRequest || (exports.StopImageBuilderRequest = {}));
var StopImageBuilderResult;
(function (StopImageBuilderResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopImageBuilderResult");
    }
    StopImageBuilderResult.isa = isa;
})(StopImageBuilderResult = exports.StopImageBuilderResult || (exports.StopImageBuilderResult = {}));
var StorageConnector;
(function (StorageConnector) {
    function isa(o) {
        return smithy_client_1.isa(o, "StorageConnector");
    }
    StorageConnector.isa = isa;
})(StorageConnector = exports.StorageConnector || (exports.StorageConnector = {}));
var StorageConnectorType;
(function (StorageConnectorType) {
    StorageConnectorType["GOOGLE_DRIVE"] = "GOOGLE_DRIVE";
    StorageConnectorType["HOMEFOLDERS"] = "HOMEFOLDERS";
    StorageConnectorType["ONE_DRIVE"] = "ONE_DRIVE";
})(StorageConnectorType = exports.StorageConnectorType || (exports.StorageConnectorType = {}));
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
var UpdateDirectoryConfigRequest;
(function (UpdateDirectoryConfigRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDirectoryConfigRequest");
    }
    UpdateDirectoryConfigRequest.isa = isa;
})(UpdateDirectoryConfigRequest = exports.UpdateDirectoryConfigRequest || (exports.UpdateDirectoryConfigRequest = {}));
var UpdateDirectoryConfigResult;
(function (UpdateDirectoryConfigResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDirectoryConfigResult");
    }
    UpdateDirectoryConfigResult.isa = isa;
})(UpdateDirectoryConfigResult = exports.UpdateDirectoryConfigResult || (exports.UpdateDirectoryConfigResult = {}));
var UpdateFleetRequest;
(function (UpdateFleetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateFleetRequest");
    }
    UpdateFleetRequest.isa = isa;
})(UpdateFleetRequest = exports.UpdateFleetRequest || (exports.UpdateFleetRequest = {}));
var UpdateFleetResult;
(function (UpdateFleetResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateFleetResult");
    }
    UpdateFleetResult.isa = isa;
})(UpdateFleetResult = exports.UpdateFleetResult || (exports.UpdateFleetResult = {}));
var UpdateImagePermissionsRequest;
(function (UpdateImagePermissionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateImagePermissionsRequest");
    }
    UpdateImagePermissionsRequest.isa = isa;
})(UpdateImagePermissionsRequest = exports.UpdateImagePermissionsRequest || (exports.UpdateImagePermissionsRequest = {}));
var UpdateImagePermissionsResult;
(function (UpdateImagePermissionsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateImagePermissionsResult");
    }
    UpdateImagePermissionsResult.isa = isa;
})(UpdateImagePermissionsResult = exports.UpdateImagePermissionsResult || (exports.UpdateImagePermissionsResult = {}));
var UpdateStackRequest;
(function (UpdateStackRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateStackRequest");
    }
    UpdateStackRequest.isa = isa;
})(UpdateStackRequest = exports.UpdateStackRequest || (exports.UpdateStackRequest = {}));
var UpdateStackResult;
(function (UpdateStackResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateStackResult");
    }
    UpdateStackResult.isa = isa;
})(UpdateStackResult = exports.UpdateStackResult || (exports.UpdateStackResult = {}));
var UsageReportExecutionErrorCode;
(function (UsageReportExecutionErrorCode) {
    UsageReportExecutionErrorCode["ACCESS_DENIED"] = "ACCESS_DENIED";
    UsageReportExecutionErrorCode["INTERNAL_SERVICE_ERROR"] = "INTERNAL_SERVICE_ERROR";
    UsageReportExecutionErrorCode["RESOURCE_NOT_FOUND"] = "RESOURCE_NOT_FOUND";
})(UsageReportExecutionErrorCode = exports.UsageReportExecutionErrorCode || (exports.UsageReportExecutionErrorCode = {}));
var UsageReportSchedule;
(function (UsageReportSchedule) {
    UsageReportSchedule["DAILY"] = "DAILY";
})(UsageReportSchedule = exports.UsageReportSchedule || (exports.UsageReportSchedule = {}));
var UsageReportSubscription;
(function (UsageReportSubscription) {
    function isa(o) {
        return smithy_client_1.isa(o, "UsageReportSubscription");
    }
    UsageReportSubscription.isa = isa;
})(UsageReportSubscription = exports.UsageReportSubscription || (exports.UsageReportSubscription = {}));
var User;
(function (User) {
    function isa(o) {
        return smithy_client_1.isa(o, "User");
    }
    User.isa = isa;
})(User = exports.User || (exports.User = {}));
var UserSetting;
(function (UserSetting) {
    function isa(o) {
        return smithy_client_1.isa(o, "UserSetting");
    }
    UserSetting.isa = isa;
})(UserSetting = exports.UserSetting || (exports.UserSetting = {}));
var UserStackAssociation;
(function (UserStackAssociation) {
    function isa(o) {
        return smithy_client_1.isa(o, "UserStackAssociation");
    }
    UserStackAssociation.isa = isa;
})(UserStackAssociation = exports.UserStackAssociation || (exports.UserStackAssociation = {}));
var UserStackAssociationError;
(function (UserStackAssociationError) {
    function isa(o) {
        return smithy_client_1.isa(o, "UserStackAssociationError");
    }
    UserStackAssociationError.isa = isa;
})(UserStackAssociationError = exports.UserStackAssociationError || (exports.UserStackAssociationError = {}));
var UserStackAssociationErrorCode;
(function (UserStackAssociationErrorCode) {
    UserStackAssociationErrorCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    UserStackAssociationErrorCode["STACK_NOT_FOUND"] = "STACK_NOT_FOUND";
    UserStackAssociationErrorCode["USER_NAME_NOT_FOUND"] = "USER_NAME_NOT_FOUND";
})(UserStackAssociationErrorCode = exports.UserStackAssociationErrorCode || (exports.UserStackAssociationErrorCode = {}));
var VisibilityType;
(function (VisibilityType) {
    VisibilityType["PRIVATE"] = "PRIVATE";
    VisibilityType["PUBLIC"] = "PUBLIC";
    VisibilityType["SHARED"] = "SHARED";
})(VisibilityType = exports.VisibilityType || (exports.VisibilityType = {}));
var VpcConfig;
(function (VpcConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "VpcConfig");
    }
    VpcConfig.isa = isa;
})(VpcConfig = exports.VpcConfig || (exports.VpcConfig = {}));
//# sourceMappingURL=index.js.map