"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var CreateHttpNamespaceRequest;
(function (CreateHttpNamespaceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateHttpNamespaceRequest");
    }
    CreateHttpNamespaceRequest.isa = isa;
})(CreateHttpNamespaceRequest = exports.CreateHttpNamespaceRequest || (exports.CreateHttpNamespaceRequest = {}));
var CreateHttpNamespaceResponse;
(function (CreateHttpNamespaceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateHttpNamespaceResponse");
    }
    CreateHttpNamespaceResponse.isa = isa;
})(CreateHttpNamespaceResponse = exports.CreateHttpNamespaceResponse || (exports.CreateHttpNamespaceResponse = {}));
var CreatePrivateDnsNamespaceRequest;
(function (CreatePrivateDnsNamespaceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreatePrivateDnsNamespaceRequest");
    }
    CreatePrivateDnsNamespaceRequest.isa = isa;
})(CreatePrivateDnsNamespaceRequest = exports.CreatePrivateDnsNamespaceRequest || (exports.CreatePrivateDnsNamespaceRequest = {}));
var CreatePrivateDnsNamespaceResponse;
(function (CreatePrivateDnsNamespaceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreatePrivateDnsNamespaceResponse");
    }
    CreatePrivateDnsNamespaceResponse.isa = isa;
})(CreatePrivateDnsNamespaceResponse = exports.CreatePrivateDnsNamespaceResponse || (exports.CreatePrivateDnsNamespaceResponse = {}));
var CreatePublicDnsNamespaceRequest;
(function (CreatePublicDnsNamespaceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreatePublicDnsNamespaceRequest");
    }
    CreatePublicDnsNamespaceRequest.isa = isa;
})(CreatePublicDnsNamespaceRequest = exports.CreatePublicDnsNamespaceRequest || (exports.CreatePublicDnsNamespaceRequest = {}));
var CreatePublicDnsNamespaceResponse;
(function (CreatePublicDnsNamespaceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreatePublicDnsNamespaceResponse");
    }
    CreatePublicDnsNamespaceResponse.isa = isa;
})(CreatePublicDnsNamespaceResponse = exports.CreatePublicDnsNamespaceResponse || (exports.CreatePublicDnsNamespaceResponse = {}));
var CreateServiceRequest;
(function (CreateServiceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateServiceRequest");
    }
    CreateServiceRequest.isa = isa;
})(CreateServiceRequest = exports.CreateServiceRequest || (exports.CreateServiceRequest = {}));
var CreateServiceResponse;
(function (CreateServiceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateServiceResponse");
    }
    CreateServiceResponse.isa = isa;
})(CreateServiceResponse = exports.CreateServiceResponse || (exports.CreateServiceResponse = {}));
var CustomHealthNotFound;
(function (CustomHealthNotFound) {
    function isa(o) {
        return smithy_client_1.isa(o, "CustomHealthNotFound");
    }
    CustomHealthNotFound.isa = isa;
})(CustomHealthNotFound = exports.CustomHealthNotFound || (exports.CustomHealthNotFound = {}));
var CustomHealthStatus;
(function (CustomHealthStatus) {
    CustomHealthStatus["HEALTHY"] = "HEALTHY";
    CustomHealthStatus["UNHEALTHY"] = "UNHEALTHY";
})(CustomHealthStatus = exports.CustomHealthStatus || (exports.CustomHealthStatus = {}));
var DeleteNamespaceRequest;
(function (DeleteNamespaceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteNamespaceRequest");
    }
    DeleteNamespaceRequest.isa = isa;
})(DeleteNamespaceRequest = exports.DeleteNamespaceRequest || (exports.DeleteNamespaceRequest = {}));
var DeleteNamespaceResponse;
(function (DeleteNamespaceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteNamespaceResponse");
    }
    DeleteNamespaceResponse.isa = isa;
})(DeleteNamespaceResponse = exports.DeleteNamespaceResponse || (exports.DeleteNamespaceResponse = {}));
var DeleteServiceRequest;
(function (DeleteServiceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteServiceRequest");
    }
    DeleteServiceRequest.isa = isa;
})(DeleteServiceRequest = exports.DeleteServiceRequest || (exports.DeleteServiceRequest = {}));
var DeleteServiceResponse;
(function (DeleteServiceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteServiceResponse");
    }
    DeleteServiceResponse.isa = isa;
})(DeleteServiceResponse = exports.DeleteServiceResponse || (exports.DeleteServiceResponse = {}));
var DeregisterInstanceRequest;
(function (DeregisterInstanceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeregisterInstanceRequest");
    }
    DeregisterInstanceRequest.isa = isa;
})(DeregisterInstanceRequest = exports.DeregisterInstanceRequest || (exports.DeregisterInstanceRequest = {}));
var DeregisterInstanceResponse;
(function (DeregisterInstanceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeregisterInstanceResponse");
    }
    DeregisterInstanceResponse.isa = isa;
})(DeregisterInstanceResponse = exports.DeregisterInstanceResponse || (exports.DeregisterInstanceResponse = {}));
var DiscoverInstancesRequest;
(function (DiscoverInstancesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DiscoverInstancesRequest");
    }
    DiscoverInstancesRequest.isa = isa;
})(DiscoverInstancesRequest = exports.DiscoverInstancesRequest || (exports.DiscoverInstancesRequest = {}));
var DiscoverInstancesResponse;
(function (DiscoverInstancesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DiscoverInstancesResponse");
    }
    DiscoverInstancesResponse.isa = isa;
})(DiscoverInstancesResponse = exports.DiscoverInstancesResponse || (exports.DiscoverInstancesResponse = {}));
var DnsConfig;
(function (DnsConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "DnsConfig");
    }
    DnsConfig.isa = isa;
})(DnsConfig = exports.DnsConfig || (exports.DnsConfig = {}));
var DnsConfigChange;
(function (DnsConfigChange) {
    function isa(o) {
        return smithy_client_1.isa(o, "DnsConfigChange");
    }
    DnsConfigChange.isa = isa;
})(DnsConfigChange = exports.DnsConfigChange || (exports.DnsConfigChange = {}));
var DnsProperties;
(function (DnsProperties) {
    function isa(o) {
        return smithy_client_1.isa(o, "DnsProperties");
    }
    DnsProperties.isa = isa;
})(DnsProperties = exports.DnsProperties || (exports.DnsProperties = {}));
var DnsRecord;
(function (DnsRecord) {
    function isa(o) {
        return smithy_client_1.isa(o, "DnsRecord");
    }
    DnsRecord.isa = isa;
})(DnsRecord = exports.DnsRecord || (exports.DnsRecord = {}));
var DuplicateRequest;
(function (DuplicateRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DuplicateRequest");
    }
    DuplicateRequest.isa = isa;
})(DuplicateRequest = exports.DuplicateRequest || (exports.DuplicateRequest = {}));
var FilterCondition;
(function (FilterCondition) {
    FilterCondition["BETWEEN"] = "BETWEEN";
    FilterCondition["EQ"] = "EQ";
    FilterCondition["IN"] = "IN";
})(FilterCondition = exports.FilterCondition || (exports.FilterCondition = {}));
var GetInstanceRequest;
(function (GetInstanceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetInstanceRequest");
    }
    GetInstanceRequest.isa = isa;
})(GetInstanceRequest = exports.GetInstanceRequest || (exports.GetInstanceRequest = {}));
var GetInstanceResponse;
(function (GetInstanceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetInstanceResponse");
    }
    GetInstanceResponse.isa = isa;
})(GetInstanceResponse = exports.GetInstanceResponse || (exports.GetInstanceResponse = {}));
var GetInstancesHealthStatusRequest;
(function (GetInstancesHealthStatusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetInstancesHealthStatusRequest");
    }
    GetInstancesHealthStatusRequest.isa = isa;
})(GetInstancesHealthStatusRequest = exports.GetInstancesHealthStatusRequest || (exports.GetInstancesHealthStatusRequest = {}));
var GetInstancesHealthStatusResponse;
(function (GetInstancesHealthStatusResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetInstancesHealthStatusResponse");
    }
    GetInstancesHealthStatusResponse.isa = isa;
})(GetInstancesHealthStatusResponse = exports.GetInstancesHealthStatusResponse || (exports.GetInstancesHealthStatusResponse = {}));
var GetNamespaceRequest;
(function (GetNamespaceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetNamespaceRequest");
    }
    GetNamespaceRequest.isa = isa;
})(GetNamespaceRequest = exports.GetNamespaceRequest || (exports.GetNamespaceRequest = {}));
var GetNamespaceResponse;
(function (GetNamespaceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetNamespaceResponse");
    }
    GetNamespaceResponse.isa = isa;
})(GetNamespaceResponse = exports.GetNamespaceResponse || (exports.GetNamespaceResponse = {}));
var GetOperationRequest;
(function (GetOperationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetOperationRequest");
    }
    GetOperationRequest.isa = isa;
})(GetOperationRequest = exports.GetOperationRequest || (exports.GetOperationRequest = {}));
var GetOperationResponse;
(function (GetOperationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetOperationResponse");
    }
    GetOperationResponse.isa = isa;
})(GetOperationResponse = exports.GetOperationResponse || (exports.GetOperationResponse = {}));
var GetServiceRequest;
(function (GetServiceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetServiceRequest");
    }
    GetServiceRequest.isa = isa;
})(GetServiceRequest = exports.GetServiceRequest || (exports.GetServiceRequest = {}));
var GetServiceResponse;
(function (GetServiceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetServiceResponse");
    }
    GetServiceResponse.isa = isa;
})(GetServiceResponse = exports.GetServiceResponse || (exports.GetServiceResponse = {}));
var HealthCheckConfig;
(function (HealthCheckConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "HealthCheckConfig");
    }
    HealthCheckConfig.isa = isa;
})(HealthCheckConfig = exports.HealthCheckConfig || (exports.HealthCheckConfig = {}));
var HealthCheckCustomConfig;
(function (HealthCheckCustomConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "HealthCheckCustomConfig");
    }
    HealthCheckCustomConfig.isa = isa;
})(HealthCheckCustomConfig = exports.HealthCheckCustomConfig || (exports.HealthCheckCustomConfig = {}));
var HealthCheckType;
(function (HealthCheckType) {
    HealthCheckType["HTTP"] = "HTTP";
    HealthCheckType["HTTPS"] = "HTTPS";
    HealthCheckType["TCP"] = "TCP";
})(HealthCheckType = exports.HealthCheckType || (exports.HealthCheckType = {}));
var HealthStatus;
(function (HealthStatus) {
    HealthStatus["HEALTHY"] = "HEALTHY";
    HealthStatus["UNHEALTHY"] = "UNHEALTHY";
    HealthStatus["UNKNOWN"] = "UNKNOWN";
})(HealthStatus = exports.HealthStatus || (exports.HealthStatus = {}));
var HealthStatusFilter;
(function (HealthStatusFilter) {
    HealthStatusFilter["ALL"] = "ALL";
    HealthStatusFilter["HEALTHY"] = "HEALTHY";
    HealthStatusFilter["UNHEALTHY"] = "UNHEALTHY";
})(HealthStatusFilter = exports.HealthStatusFilter || (exports.HealthStatusFilter = {}));
var HttpInstanceSummary;
(function (HttpInstanceSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "HttpInstanceSummary");
    }
    HttpInstanceSummary.isa = isa;
})(HttpInstanceSummary = exports.HttpInstanceSummary || (exports.HttpInstanceSummary = {}));
var HttpProperties;
(function (HttpProperties) {
    function isa(o) {
        return smithy_client_1.isa(o, "HttpProperties");
    }
    HttpProperties.isa = isa;
})(HttpProperties = exports.HttpProperties || (exports.HttpProperties = {}));
var Instance;
(function (Instance) {
    function isa(o) {
        return smithy_client_1.isa(o, "Instance");
    }
    Instance.isa = isa;
})(Instance = exports.Instance || (exports.Instance = {}));
var InstanceNotFound;
(function (InstanceNotFound) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceNotFound");
    }
    InstanceNotFound.isa = isa;
})(InstanceNotFound = exports.InstanceNotFound || (exports.InstanceNotFound = {}));
var InstanceSummary;
(function (InstanceSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceSummary");
    }
    InstanceSummary.isa = isa;
})(InstanceSummary = exports.InstanceSummary || (exports.InstanceSummary = {}));
var InvalidInput;
(function (InvalidInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidInput");
    }
    InvalidInput.isa = isa;
})(InvalidInput = exports.InvalidInput || (exports.InvalidInput = {}));
var ListInstancesRequest;
(function (ListInstancesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListInstancesRequest");
    }
    ListInstancesRequest.isa = isa;
})(ListInstancesRequest = exports.ListInstancesRequest || (exports.ListInstancesRequest = {}));
var ListInstancesResponse;
(function (ListInstancesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListInstancesResponse");
    }
    ListInstancesResponse.isa = isa;
})(ListInstancesResponse = exports.ListInstancesResponse || (exports.ListInstancesResponse = {}));
var ListNamespacesRequest;
(function (ListNamespacesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListNamespacesRequest");
    }
    ListNamespacesRequest.isa = isa;
})(ListNamespacesRequest = exports.ListNamespacesRequest || (exports.ListNamespacesRequest = {}));
var ListNamespacesResponse;
(function (ListNamespacesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListNamespacesResponse");
    }
    ListNamespacesResponse.isa = isa;
})(ListNamespacesResponse = exports.ListNamespacesResponse || (exports.ListNamespacesResponse = {}));
var ListOperationsRequest;
(function (ListOperationsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListOperationsRequest");
    }
    ListOperationsRequest.isa = isa;
})(ListOperationsRequest = exports.ListOperationsRequest || (exports.ListOperationsRequest = {}));
var ListOperationsResponse;
(function (ListOperationsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListOperationsResponse");
    }
    ListOperationsResponse.isa = isa;
})(ListOperationsResponse = exports.ListOperationsResponse || (exports.ListOperationsResponse = {}));
var ListServicesRequest;
(function (ListServicesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListServicesRequest");
    }
    ListServicesRequest.isa = isa;
})(ListServicesRequest = exports.ListServicesRequest || (exports.ListServicesRequest = {}));
var ListServicesResponse;
(function (ListServicesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListServicesResponse");
    }
    ListServicesResponse.isa = isa;
})(ListServicesResponse = exports.ListServicesResponse || (exports.ListServicesResponse = {}));
var Namespace;
(function (Namespace) {
    function isa(o) {
        return smithy_client_1.isa(o, "Namespace");
    }
    Namespace.isa = isa;
})(Namespace = exports.Namespace || (exports.Namespace = {}));
var NamespaceAlreadyExists;
(function (NamespaceAlreadyExists) {
    function isa(o) {
        return smithy_client_1.isa(o, "NamespaceAlreadyExists");
    }
    NamespaceAlreadyExists.isa = isa;
})(NamespaceAlreadyExists = exports.NamespaceAlreadyExists || (exports.NamespaceAlreadyExists = {}));
var NamespaceFilter;
(function (NamespaceFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "NamespaceFilter");
    }
    NamespaceFilter.isa = isa;
})(NamespaceFilter = exports.NamespaceFilter || (exports.NamespaceFilter = {}));
var NamespaceFilterName;
(function (NamespaceFilterName) {
    NamespaceFilterName["TYPE"] = "TYPE";
})(NamespaceFilterName = exports.NamespaceFilterName || (exports.NamespaceFilterName = {}));
var NamespaceNotFound;
(function (NamespaceNotFound) {
    function isa(o) {
        return smithy_client_1.isa(o, "NamespaceNotFound");
    }
    NamespaceNotFound.isa = isa;
})(NamespaceNotFound = exports.NamespaceNotFound || (exports.NamespaceNotFound = {}));
var NamespaceProperties;
(function (NamespaceProperties) {
    function isa(o) {
        return smithy_client_1.isa(o, "NamespaceProperties");
    }
    NamespaceProperties.isa = isa;
})(NamespaceProperties = exports.NamespaceProperties || (exports.NamespaceProperties = {}));
var NamespaceSummary;
(function (NamespaceSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "NamespaceSummary");
    }
    NamespaceSummary.isa = isa;
})(NamespaceSummary = exports.NamespaceSummary || (exports.NamespaceSummary = {}));
var NamespaceType;
(function (NamespaceType) {
    NamespaceType["DNS_PRIVATE"] = "DNS_PRIVATE";
    NamespaceType["DNS_PUBLIC"] = "DNS_PUBLIC";
    NamespaceType["HTTP"] = "HTTP";
})(NamespaceType = exports.NamespaceType || (exports.NamespaceType = {}));
var Operation;
(function (Operation) {
    function isa(o) {
        return smithy_client_1.isa(o, "Operation");
    }
    Operation.isa = isa;
})(Operation = exports.Operation || (exports.Operation = {}));
var OperationFilter;
(function (OperationFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "OperationFilter");
    }
    OperationFilter.isa = isa;
})(OperationFilter = exports.OperationFilter || (exports.OperationFilter = {}));
var OperationFilterName;
(function (OperationFilterName) {
    OperationFilterName["NAMESPACE_ID"] = "NAMESPACE_ID";
    OperationFilterName["SERVICE_ID"] = "SERVICE_ID";
    OperationFilterName["STATUS"] = "STATUS";
    OperationFilterName["TYPE"] = "TYPE";
    OperationFilterName["UPDATE_DATE"] = "UPDATE_DATE";
})(OperationFilterName = exports.OperationFilterName || (exports.OperationFilterName = {}));
var OperationNotFound;
(function (OperationNotFound) {
    function isa(o) {
        return smithy_client_1.isa(o, "OperationNotFound");
    }
    OperationNotFound.isa = isa;
})(OperationNotFound = exports.OperationNotFound || (exports.OperationNotFound = {}));
var OperationStatus;
(function (OperationStatus) {
    OperationStatus["FAIL"] = "FAIL";
    OperationStatus["PENDING"] = "PENDING";
    OperationStatus["SUBMITTED"] = "SUBMITTED";
    OperationStatus["SUCCESS"] = "SUCCESS";
})(OperationStatus = exports.OperationStatus || (exports.OperationStatus = {}));
var OperationSummary;
(function (OperationSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "OperationSummary");
    }
    OperationSummary.isa = isa;
})(OperationSummary = exports.OperationSummary || (exports.OperationSummary = {}));
var OperationTargetType;
(function (OperationTargetType) {
    OperationTargetType["INSTANCE"] = "INSTANCE";
    OperationTargetType["NAMESPACE"] = "NAMESPACE";
    OperationTargetType["SERVICE"] = "SERVICE";
})(OperationTargetType = exports.OperationTargetType || (exports.OperationTargetType = {}));
var OperationType;
(function (OperationType) {
    OperationType["CREATE_NAMESPACE"] = "CREATE_NAMESPACE";
    OperationType["DELETE_NAMESPACE"] = "DELETE_NAMESPACE";
    OperationType["DEREGISTER_INSTANCE"] = "DEREGISTER_INSTANCE";
    OperationType["REGISTER_INSTANCE"] = "REGISTER_INSTANCE";
    OperationType["UPDATE_SERVICE"] = "UPDATE_SERVICE";
})(OperationType = exports.OperationType || (exports.OperationType = {}));
var RecordType;
(function (RecordType) {
    RecordType["A"] = "A";
    RecordType["AAAA"] = "AAAA";
    RecordType["CNAME"] = "CNAME";
    RecordType["SRV"] = "SRV";
})(RecordType = exports.RecordType || (exports.RecordType = {}));
var RegisterInstanceRequest;
(function (RegisterInstanceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegisterInstanceRequest");
    }
    RegisterInstanceRequest.isa = isa;
})(RegisterInstanceRequest = exports.RegisterInstanceRequest || (exports.RegisterInstanceRequest = {}));
var RegisterInstanceResponse;
(function (RegisterInstanceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegisterInstanceResponse");
    }
    RegisterInstanceResponse.isa = isa;
})(RegisterInstanceResponse = exports.RegisterInstanceResponse || (exports.RegisterInstanceResponse = {}));
var ResourceInUse;
(function (ResourceInUse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceInUse");
    }
    ResourceInUse.isa = isa;
})(ResourceInUse = exports.ResourceInUse || (exports.ResourceInUse = {}));
var ResourceLimitExceeded;
(function (ResourceLimitExceeded) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceLimitExceeded");
    }
    ResourceLimitExceeded.isa = isa;
})(ResourceLimitExceeded = exports.ResourceLimitExceeded || (exports.ResourceLimitExceeded = {}));
var RoutingPolicy;
(function (RoutingPolicy) {
    RoutingPolicy["MULTIVALUE"] = "MULTIVALUE";
    RoutingPolicy["WEIGHTED"] = "WEIGHTED";
})(RoutingPolicy = exports.RoutingPolicy || (exports.RoutingPolicy = {}));
var Service;
(function (Service) {
    function isa(o) {
        return smithy_client_1.isa(o, "Service");
    }
    Service.isa = isa;
})(Service = exports.Service || (exports.Service = {}));
var ServiceAlreadyExists;
(function (ServiceAlreadyExists) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceAlreadyExists");
    }
    ServiceAlreadyExists.isa = isa;
})(ServiceAlreadyExists = exports.ServiceAlreadyExists || (exports.ServiceAlreadyExists = {}));
var ServiceChange;
(function (ServiceChange) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceChange");
    }
    ServiceChange.isa = isa;
})(ServiceChange = exports.ServiceChange || (exports.ServiceChange = {}));
var ServiceFilter;
(function (ServiceFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceFilter");
    }
    ServiceFilter.isa = isa;
})(ServiceFilter = exports.ServiceFilter || (exports.ServiceFilter = {}));
var ServiceFilterName;
(function (ServiceFilterName) {
    ServiceFilterName["NAMESPACE_ID"] = "NAMESPACE_ID";
})(ServiceFilterName = exports.ServiceFilterName || (exports.ServiceFilterName = {}));
var ServiceNotFound;
(function (ServiceNotFound) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceNotFound");
    }
    ServiceNotFound.isa = isa;
})(ServiceNotFound = exports.ServiceNotFound || (exports.ServiceNotFound = {}));
var ServiceSummary;
(function (ServiceSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceSummary");
    }
    ServiceSummary.isa = isa;
})(ServiceSummary = exports.ServiceSummary || (exports.ServiceSummary = {}));
var UpdateInstanceCustomHealthStatusRequest;
(function (UpdateInstanceCustomHealthStatusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateInstanceCustomHealthStatusRequest");
    }
    UpdateInstanceCustomHealthStatusRequest.isa = isa;
})(UpdateInstanceCustomHealthStatusRequest = exports.UpdateInstanceCustomHealthStatusRequest || (exports.UpdateInstanceCustomHealthStatusRequest = {}));
var UpdateServiceRequest;
(function (UpdateServiceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateServiceRequest");
    }
    UpdateServiceRequest.isa = isa;
})(UpdateServiceRequest = exports.UpdateServiceRequest || (exports.UpdateServiceRequest = {}));
var UpdateServiceResponse;
(function (UpdateServiceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateServiceResponse");
    }
    UpdateServiceResponse.isa = isa;
})(UpdateServiceResponse = exports.UpdateServiceResponse || (exports.UpdateServiceResponse = {}));
//# sourceMappingURL=index.js.map