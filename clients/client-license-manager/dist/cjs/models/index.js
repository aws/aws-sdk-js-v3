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
var AuthorizationException;
(function (AuthorizationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AuthorizationException");
    }
    AuthorizationException.isa = isa;
})(AuthorizationException = exports.AuthorizationException || (exports.AuthorizationException = {}));
var AutomatedDiscoveryInformation;
(function (AutomatedDiscoveryInformation) {
    function isa(o) {
        return smithy_client_1.isa(o, "AutomatedDiscoveryInformation");
    }
    AutomatedDiscoveryInformation.isa = isa;
})(AutomatedDiscoveryInformation = exports.AutomatedDiscoveryInformation || (exports.AutomatedDiscoveryInformation = {}));
var ConsumedLicenseSummary;
(function (ConsumedLicenseSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConsumedLicenseSummary");
    }
    ConsumedLicenseSummary.isa = isa;
})(ConsumedLicenseSummary = exports.ConsumedLicenseSummary || (exports.ConsumedLicenseSummary = {}));
var CreateLicenseConfigurationRequest;
(function (CreateLicenseConfigurationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateLicenseConfigurationRequest");
    }
    CreateLicenseConfigurationRequest.isa = isa;
})(CreateLicenseConfigurationRequest = exports.CreateLicenseConfigurationRequest || (exports.CreateLicenseConfigurationRequest = {}));
var CreateLicenseConfigurationResponse;
(function (CreateLicenseConfigurationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateLicenseConfigurationResponse");
    }
    CreateLicenseConfigurationResponse.isa = isa;
})(CreateLicenseConfigurationResponse = exports.CreateLicenseConfigurationResponse || (exports.CreateLicenseConfigurationResponse = {}));
var DeleteLicenseConfigurationRequest;
(function (DeleteLicenseConfigurationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteLicenseConfigurationRequest");
    }
    DeleteLicenseConfigurationRequest.isa = isa;
})(DeleteLicenseConfigurationRequest = exports.DeleteLicenseConfigurationRequest || (exports.DeleteLicenseConfigurationRequest = {}));
var DeleteLicenseConfigurationResponse;
(function (DeleteLicenseConfigurationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteLicenseConfigurationResponse");
    }
    DeleteLicenseConfigurationResponse.isa = isa;
})(DeleteLicenseConfigurationResponse = exports.DeleteLicenseConfigurationResponse || (exports.DeleteLicenseConfigurationResponse = {}));
var FailedDependencyException;
(function (FailedDependencyException) {
    function isa(o) {
        return smithy_client_1.isa(o, "FailedDependencyException");
    }
    FailedDependencyException.isa = isa;
})(FailedDependencyException = exports.FailedDependencyException || (exports.FailedDependencyException = {}));
var Filter;
(function (Filter) {
    function isa(o) {
        return smithy_client_1.isa(o, "Filter");
    }
    Filter.isa = isa;
})(Filter = exports.Filter || (exports.Filter = {}));
var FilterLimitExceededException;
(function (FilterLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "FilterLimitExceededException");
    }
    FilterLimitExceededException.isa = isa;
})(FilterLimitExceededException = exports.FilterLimitExceededException || (exports.FilterLimitExceededException = {}));
var GetLicenseConfigurationRequest;
(function (GetLicenseConfigurationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetLicenseConfigurationRequest");
    }
    GetLicenseConfigurationRequest.isa = isa;
})(GetLicenseConfigurationRequest = exports.GetLicenseConfigurationRequest || (exports.GetLicenseConfigurationRequest = {}));
var GetLicenseConfigurationResponse;
(function (GetLicenseConfigurationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetLicenseConfigurationResponse");
    }
    GetLicenseConfigurationResponse.isa = isa;
})(GetLicenseConfigurationResponse = exports.GetLicenseConfigurationResponse || (exports.GetLicenseConfigurationResponse = {}));
var GetServiceSettingsRequest;
(function (GetServiceSettingsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetServiceSettingsRequest");
    }
    GetServiceSettingsRequest.isa = isa;
})(GetServiceSettingsRequest = exports.GetServiceSettingsRequest || (exports.GetServiceSettingsRequest = {}));
var GetServiceSettingsResponse;
(function (GetServiceSettingsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetServiceSettingsResponse");
    }
    GetServiceSettingsResponse.isa = isa;
})(GetServiceSettingsResponse = exports.GetServiceSettingsResponse || (exports.GetServiceSettingsResponse = {}));
var InvalidParameterValueException;
(function (InvalidParameterValueException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidParameterValueException");
    }
    InvalidParameterValueException.isa = isa;
})(InvalidParameterValueException = exports.InvalidParameterValueException || (exports.InvalidParameterValueException = {}));
var InvalidResourceStateException;
(function (InvalidResourceStateException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidResourceStateException");
    }
    InvalidResourceStateException.isa = isa;
})(InvalidResourceStateException = exports.InvalidResourceStateException || (exports.InvalidResourceStateException = {}));
var InventoryFilter;
(function (InventoryFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "InventoryFilter");
    }
    InventoryFilter.isa = isa;
})(InventoryFilter = exports.InventoryFilter || (exports.InventoryFilter = {}));
var InventoryFilterCondition;
(function (InventoryFilterCondition) {
    InventoryFilterCondition["BEGINS_WITH"] = "BEGINS_WITH";
    InventoryFilterCondition["CONTAINS"] = "CONTAINS";
    InventoryFilterCondition["EQUALS"] = "EQUALS";
    InventoryFilterCondition["NOT_EQUALS"] = "NOT_EQUALS";
})(InventoryFilterCondition = exports.InventoryFilterCondition || (exports.InventoryFilterCondition = {}));
var LicenseConfiguration;
(function (LicenseConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "LicenseConfiguration");
    }
    LicenseConfiguration.isa = isa;
})(LicenseConfiguration = exports.LicenseConfiguration || (exports.LicenseConfiguration = {}));
var LicenseConfigurationAssociation;
(function (LicenseConfigurationAssociation) {
    function isa(o) {
        return smithy_client_1.isa(o, "LicenseConfigurationAssociation");
    }
    LicenseConfigurationAssociation.isa = isa;
})(LicenseConfigurationAssociation = exports.LicenseConfigurationAssociation || (exports.LicenseConfigurationAssociation = {}));
var LicenseConfigurationStatus;
(function (LicenseConfigurationStatus) {
    LicenseConfigurationStatus["AVAILABLE"] = "AVAILABLE";
    LicenseConfigurationStatus["DISABLED"] = "DISABLED";
})(LicenseConfigurationStatus = exports.LicenseConfigurationStatus || (exports.LicenseConfigurationStatus = {}));
var LicenseConfigurationUsage;
(function (LicenseConfigurationUsage) {
    function isa(o) {
        return smithy_client_1.isa(o, "LicenseConfigurationUsage");
    }
    LicenseConfigurationUsage.isa = isa;
})(LicenseConfigurationUsage = exports.LicenseConfigurationUsage || (exports.LicenseConfigurationUsage = {}));
var LicenseCountingType;
(function (LicenseCountingType) {
    LicenseCountingType["CORE"] = "Core";
    LicenseCountingType["INSTANCE"] = "Instance";
    LicenseCountingType["SOCKET"] = "Socket";
    LicenseCountingType["VCPU"] = "vCPU";
})(LicenseCountingType = exports.LicenseCountingType || (exports.LicenseCountingType = {}));
var LicenseOperationFailure;
(function (LicenseOperationFailure) {
    function isa(o) {
        return smithy_client_1.isa(o, "LicenseOperationFailure");
    }
    LicenseOperationFailure.isa = isa;
})(LicenseOperationFailure = exports.LicenseOperationFailure || (exports.LicenseOperationFailure = {}));
var LicenseSpecification;
(function (LicenseSpecification) {
    function isa(o) {
        return smithy_client_1.isa(o, "LicenseSpecification");
    }
    LicenseSpecification.isa = isa;
})(LicenseSpecification = exports.LicenseSpecification || (exports.LicenseSpecification = {}));
var LicenseUsageException;
(function (LicenseUsageException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LicenseUsageException");
    }
    LicenseUsageException.isa = isa;
})(LicenseUsageException = exports.LicenseUsageException || (exports.LicenseUsageException = {}));
var ListAssociationsForLicenseConfigurationRequest;
(function (ListAssociationsForLicenseConfigurationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAssociationsForLicenseConfigurationRequest");
    }
    ListAssociationsForLicenseConfigurationRequest.isa = isa;
})(ListAssociationsForLicenseConfigurationRequest = exports.ListAssociationsForLicenseConfigurationRequest || (exports.ListAssociationsForLicenseConfigurationRequest = {}));
var ListAssociationsForLicenseConfigurationResponse;
(function (ListAssociationsForLicenseConfigurationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAssociationsForLicenseConfigurationResponse");
    }
    ListAssociationsForLicenseConfigurationResponse.isa = isa;
})(ListAssociationsForLicenseConfigurationResponse = exports.ListAssociationsForLicenseConfigurationResponse || (exports.ListAssociationsForLicenseConfigurationResponse = {}));
var ListFailuresForLicenseConfigurationOperationsRequest;
(function (ListFailuresForLicenseConfigurationOperationsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListFailuresForLicenseConfigurationOperationsRequest");
    }
    ListFailuresForLicenseConfigurationOperationsRequest.isa = isa;
})(ListFailuresForLicenseConfigurationOperationsRequest = exports.ListFailuresForLicenseConfigurationOperationsRequest || (exports.ListFailuresForLicenseConfigurationOperationsRequest = {}));
var ListFailuresForLicenseConfigurationOperationsResponse;
(function (ListFailuresForLicenseConfigurationOperationsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListFailuresForLicenseConfigurationOperationsResponse");
    }
    ListFailuresForLicenseConfigurationOperationsResponse.isa = isa;
})(ListFailuresForLicenseConfigurationOperationsResponse = exports.ListFailuresForLicenseConfigurationOperationsResponse || (exports.ListFailuresForLicenseConfigurationOperationsResponse = {}));
var ListLicenseConfigurationsRequest;
(function (ListLicenseConfigurationsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListLicenseConfigurationsRequest");
    }
    ListLicenseConfigurationsRequest.isa = isa;
})(ListLicenseConfigurationsRequest = exports.ListLicenseConfigurationsRequest || (exports.ListLicenseConfigurationsRequest = {}));
var ListLicenseConfigurationsResponse;
(function (ListLicenseConfigurationsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListLicenseConfigurationsResponse");
    }
    ListLicenseConfigurationsResponse.isa = isa;
})(ListLicenseConfigurationsResponse = exports.ListLicenseConfigurationsResponse || (exports.ListLicenseConfigurationsResponse = {}));
var ListLicenseSpecificationsForResourceRequest;
(function (ListLicenseSpecificationsForResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListLicenseSpecificationsForResourceRequest");
    }
    ListLicenseSpecificationsForResourceRequest.isa = isa;
})(ListLicenseSpecificationsForResourceRequest = exports.ListLicenseSpecificationsForResourceRequest || (exports.ListLicenseSpecificationsForResourceRequest = {}));
var ListLicenseSpecificationsForResourceResponse;
(function (ListLicenseSpecificationsForResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListLicenseSpecificationsForResourceResponse");
    }
    ListLicenseSpecificationsForResourceResponse.isa = isa;
})(ListLicenseSpecificationsForResourceResponse = exports.ListLicenseSpecificationsForResourceResponse || (exports.ListLicenseSpecificationsForResourceResponse = {}));
var ListResourceInventoryRequest;
(function (ListResourceInventoryRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListResourceInventoryRequest");
    }
    ListResourceInventoryRequest.isa = isa;
})(ListResourceInventoryRequest = exports.ListResourceInventoryRequest || (exports.ListResourceInventoryRequest = {}));
var ListResourceInventoryResponse;
(function (ListResourceInventoryResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListResourceInventoryResponse");
    }
    ListResourceInventoryResponse.isa = isa;
})(ListResourceInventoryResponse = exports.ListResourceInventoryResponse || (exports.ListResourceInventoryResponse = {}));
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
var ListUsageForLicenseConfigurationRequest;
(function (ListUsageForLicenseConfigurationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListUsageForLicenseConfigurationRequest");
    }
    ListUsageForLicenseConfigurationRequest.isa = isa;
})(ListUsageForLicenseConfigurationRequest = exports.ListUsageForLicenseConfigurationRequest || (exports.ListUsageForLicenseConfigurationRequest = {}));
var ListUsageForLicenseConfigurationResponse;
(function (ListUsageForLicenseConfigurationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListUsageForLicenseConfigurationResponse");
    }
    ListUsageForLicenseConfigurationResponse.isa = isa;
})(ListUsageForLicenseConfigurationResponse = exports.ListUsageForLicenseConfigurationResponse || (exports.ListUsageForLicenseConfigurationResponse = {}));
var ManagedResourceSummary;
(function (ManagedResourceSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "ManagedResourceSummary");
    }
    ManagedResourceSummary.isa = isa;
})(ManagedResourceSummary = exports.ManagedResourceSummary || (exports.ManagedResourceSummary = {}));
var Metadata;
(function (Metadata) {
    function isa(o) {
        return smithy_client_1.isa(o, "Metadata");
    }
    Metadata.isa = isa;
})(Metadata = exports.Metadata || (exports.Metadata = {}));
var OrganizationConfiguration;
(function (OrganizationConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "OrganizationConfiguration");
    }
    OrganizationConfiguration.isa = isa;
})(OrganizationConfiguration = exports.OrganizationConfiguration || (exports.OrganizationConfiguration = {}));
var ProductInformation;
(function (ProductInformation) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProductInformation");
    }
    ProductInformation.isa = isa;
})(ProductInformation = exports.ProductInformation || (exports.ProductInformation = {}));
var ProductInformationFilter;
(function (ProductInformationFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProductInformationFilter");
    }
    ProductInformationFilter.isa = isa;
})(ProductInformationFilter = exports.ProductInformationFilter || (exports.ProductInformationFilter = {}));
var RateLimitExceededException;
(function (RateLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "RateLimitExceededException");
    }
    RateLimitExceededException.isa = isa;
})(RateLimitExceededException = exports.RateLimitExceededException || (exports.RateLimitExceededException = {}));
var ResourceInventory;
(function (ResourceInventory) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceInventory");
    }
    ResourceInventory.isa = isa;
})(ResourceInventory = exports.ResourceInventory || (exports.ResourceInventory = {}));
var ResourceLimitExceededException;
(function (ResourceLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceLimitExceededException");
    }
    ResourceLimitExceededException.isa = isa;
})(ResourceLimitExceededException = exports.ResourceLimitExceededException || (exports.ResourceLimitExceededException = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["EC2_AMI"] = "EC2_AMI";
    ResourceType["EC2_HOST"] = "EC2_HOST";
    ResourceType["EC2_INSTANCE"] = "EC2_INSTANCE";
    ResourceType["RDS"] = "RDS";
    ResourceType["SYSTEMS_MANAGER_MANAGED_INSTANCE"] = "SYSTEMS_MANAGER_MANAGED_INSTANCE";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
var ServerInternalException;
(function (ServerInternalException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServerInternalException");
    }
    ServerInternalException.isa = isa;
})(ServerInternalException = exports.ServerInternalException || (exports.ServerInternalException = {}));
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
var UpdateLicenseConfigurationRequest;
(function (UpdateLicenseConfigurationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateLicenseConfigurationRequest");
    }
    UpdateLicenseConfigurationRequest.isa = isa;
})(UpdateLicenseConfigurationRequest = exports.UpdateLicenseConfigurationRequest || (exports.UpdateLicenseConfigurationRequest = {}));
var UpdateLicenseConfigurationResponse;
(function (UpdateLicenseConfigurationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateLicenseConfigurationResponse");
    }
    UpdateLicenseConfigurationResponse.isa = isa;
})(UpdateLicenseConfigurationResponse = exports.UpdateLicenseConfigurationResponse || (exports.UpdateLicenseConfigurationResponse = {}));
var UpdateLicenseSpecificationsForResourceRequest;
(function (UpdateLicenseSpecificationsForResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateLicenseSpecificationsForResourceRequest");
    }
    UpdateLicenseSpecificationsForResourceRequest.isa = isa;
})(UpdateLicenseSpecificationsForResourceRequest = exports.UpdateLicenseSpecificationsForResourceRequest || (exports.UpdateLicenseSpecificationsForResourceRequest = {}));
var UpdateLicenseSpecificationsForResourceResponse;
(function (UpdateLicenseSpecificationsForResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateLicenseSpecificationsForResourceResponse");
    }
    UpdateLicenseSpecificationsForResourceResponse.isa = isa;
})(UpdateLicenseSpecificationsForResourceResponse = exports.UpdateLicenseSpecificationsForResourceResponse || (exports.UpdateLicenseSpecificationsForResourceResponse = {}));
var UpdateServiceSettingsRequest;
(function (UpdateServiceSettingsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateServiceSettingsRequest");
    }
    UpdateServiceSettingsRequest.isa = isa;
})(UpdateServiceSettingsRequest = exports.UpdateServiceSettingsRequest || (exports.UpdateServiceSettingsRequest = {}));
var UpdateServiceSettingsResponse;
(function (UpdateServiceSettingsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateServiceSettingsResponse");
    }
    UpdateServiceSettingsResponse.isa = isa;
})(UpdateServiceSettingsResponse = exports.UpdateServiceSettingsResponse || (exports.UpdateServiceSettingsResponse = {}));
//# sourceMappingURL=index.js.map