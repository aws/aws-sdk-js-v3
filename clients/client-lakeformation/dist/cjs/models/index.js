"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var BatchGrantPermissionsRequest;
(function (BatchGrantPermissionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGrantPermissionsRequest");
    }
    BatchGrantPermissionsRequest.isa = isa;
})(BatchGrantPermissionsRequest = exports.BatchGrantPermissionsRequest || (exports.BatchGrantPermissionsRequest = {}));
var BatchGrantPermissionsResponse;
(function (BatchGrantPermissionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGrantPermissionsResponse");
    }
    BatchGrantPermissionsResponse.isa = isa;
})(BatchGrantPermissionsResponse = exports.BatchGrantPermissionsResponse || (exports.BatchGrantPermissionsResponse = {}));
var BatchPermissionsFailureEntry;
(function (BatchPermissionsFailureEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchPermissionsFailureEntry");
    }
    BatchPermissionsFailureEntry.isa = isa;
})(BatchPermissionsFailureEntry = exports.BatchPermissionsFailureEntry || (exports.BatchPermissionsFailureEntry = {}));
var BatchPermissionsRequestEntry;
(function (BatchPermissionsRequestEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchPermissionsRequestEntry");
    }
    BatchPermissionsRequestEntry.isa = isa;
})(BatchPermissionsRequestEntry = exports.BatchPermissionsRequestEntry || (exports.BatchPermissionsRequestEntry = {}));
var BatchRevokePermissionsRequest;
(function (BatchRevokePermissionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchRevokePermissionsRequest");
    }
    BatchRevokePermissionsRequest.isa = isa;
})(BatchRevokePermissionsRequest = exports.BatchRevokePermissionsRequest || (exports.BatchRevokePermissionsRequest = {}));
var BatchRevokePermissionsResponse;
(function (BatchRevokePermissionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchRevokePermissionsResponse");
    }
    BatchRevokePermissionsResponse.isa = isa;
})(BatchRevokePermissionsResponse = exports.BatchRevokePermissionsResponse || (exports.BatchRevokePermissionsResponse = {}));
var CatalogResource;
(function (CatalogResource) {
    function isa(o) {
        return smithy_client_1.isa(o, "CatalogResource");
    }
    CatalogResource.isa = isa;
})(CatalogResource = exports.CatalogResource || (exports.CatalogResource = {}));
var ColumnWildcard;
(function (ColumnWildcard) {
    function isa(o) {
        return smithy_client_1.isa(o, "ColumnWildcard");
    }
    ColumnWildcard.isa = isa;
})(ColumnWildcard = exports.ColumnWildcard || (exports.ColumnWildcard = {}));
var DataLakePrincipal;
(function (DataLakePrincipal) {
    function isa(o) {
        return smithy_client_1.isa(o, "DataLakePrincipal");
    }
    DataLakePrincipal.isa = isa;
})(DataLakePrincipal = exports.DataLakePrincipal || (exports.DataLakePrincipal = {}));
var DataLakeResourceType;
(function (DataLakeResourceType) {
    DataLakeResourceType["CATALOG"] = "CATALOG";
    DataLakeResourceType["DATABASE"] = "DATABASE";
    DataLakeResourceType["DATA_LOCATION"] = "DATA_LOCATION";
    DataLakeResourceType["TABLE"] = "TABLE";
})(DataLakeResourceType = exports.DataLakeResourceType || (exports.DataLakeResourceType = {}));
var DataLakeSettings;
(function (DataLakeSettings) {
    function isa(o) {
        return smithy_client_1.isa(o, "DataLakeSettings");
    }
    DataLakeSettings.isa = isa;
})(DataLakeSettings = exports.DataLakeSettings || (exports.DataLakeSettings = {}));
var DataLocationResource;
(function (DataLocationResource) {
    function isa(o) {
        return smithy_client_1.isa(o, "DataLocationResource");
    }
    DataLocationResource.isa = isa;
})(DataLocationResource = exports.DataLocationResource || (exports.DataLocationResource = {}));
var DatabaseResource;
(function (DatabaseResource) {
    function isa(o) {
        return smithy_client_1.isa(o, "DatabaseResource");
    }
    DatabaseResource.isa = isa;
})(DatabaseResource = exports.DatabaseResource || (exports.DatabaseResource = {}));
var DeregisterResourceRequest;
(function (DeregisterResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeregisterResourceRequest");
    }
    DeregisterResourceRequest.isa = isa;
})(DeregisterResourceRequest = exports.DeregisterResourceRequest || (exports.DeregisterResourceRequest = {}));
var DeregisterResourceResponse;
(function (DeregisterResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeregisterResourceResponse");
    }
    DeregisterResourceResponse.isa = isa;
})(DeregisterResourceResponse = exports.DeregisterResourceResponse || (exports.DeregisterResourceResponse = {}));
var DescribeResourceRequest;
(function (DescribeResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeResourceRequest");
    }
    DescribeResourceRequest.isa = isa;
})(DescribeResourceRequest = exports.DescribeResourceRequest || (exports.DescribeResourceRequest = {}));
var DescribeResourceResponse;
(function (DescribeResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeResourceResponse");
    }
    DescribeResourceResponse.isa = isa;
})(DescribeResourceResponse = exports.DescribeResourceResponse || (exports.DescribeResourceResponse = {}));
var GetDataLakeSettingsRequest;
(function (GetDataLakeSettingsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDataLakeSettingsRequest");
    }
    GetDataLakeSettingsRequest.isa = isa;
})(GetDataLakeSettingsRequest = exports.GetDataLakeSettingsRequest || (exports.GetDataLakeSettingsRequest = {}));
var GetDataLakeSettingsResponse;
(function (GetDataLakeSettingsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDataLakeSettingsResponse");
    }
    GetDataLakeSettingsResponse.isa = isa;
})(GetDataLakeSettingsResponse = exports.GetDataLakeSettingsResponse || (exports.GetDataLakeSettingsResponse = {}));
var GetEffectivePermissionsForPathRequest;
(function (GetEffectivePermissionsForPathRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetEffectivePermissionsForPathRequest");
    }
    GetEffectivePermissionsForPathRequest.isa = isa;
})(GetEffectivePermissionsForPathRequest = exports.GetEffectivePermissionsForPathRequest || (exports.GetEffectivePermissionsForPathRequest = {}));
var GetEffectivePermissionsForPathResponse;
(function (GetEffectivePermissionsForPathResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetEffectivePermissionsForPathResponse");
    }
    GetEffectivePermissionsForPathResponse.isa = isa;
})(GetEffectivePermissionsForPathResponse = exports.GetEffectivePermissionsForPathResponse || (exports.GetEffectivePermissionsForPathResponse = {}));
var GrantPermissionsRequest;
(function (GrantPermissionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GrantPermissionsRequest");
    }
    GrantPermissionsRequest.isa = isa;
})(GrantPermissionsRequest = exports.GrantPermissionsRequest || (exports.GrantPermissionsRequest = {}));
var GrantPermissionsResponse;
(function (GrantPermissionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GrantPermissionsResponse");
    }
    GrantPermissionsResponse.isa = isa;
})(GrantPermissionsResponse = exports.GrantPermissionsResponse || (exports.GrantPermissionsResponse = {}));
var ListPermissionsRequest;
(function (ListPermissionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListPermissionsRequest");
    }
    ListPermissionsRequest.isa = isa;
})(ListPermissionsRequest = exports.ListPermissionsRequest || (exports.ListPermissionsRequest = {}));
var ListPermissionsResponse;
(function (ListPermissionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListPermissionsResponse");
    }
    ListPermissionsResponse.isa = isa;
})(ListPermissionsResponse = exports.ListPermissionsResponse || (exports.ListPermissionsResponse = {}));
var ListResourcesRequest;
(function (ListResourcesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListResourcesRequest");
    }
    ListResourcesRequest.isa = isa;
})(ListResourcesRequest = exports.ListResourcesRequest || (exports.ListResourcesRequest = {}));
var ListResourcesResponse;
(function (ListResourcesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListResourcesResponse");
    }
    ListResourcesResponse.isa = isa;
})(ListResourcesResponse = exports.ListResourcesResponse || (exports.ListResourcesResponse = {}));
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
var PrincipalPermissions;
(function (PrincipalPermissions) {
    function isa(o) {
        return smithy_client_1.isa(o, "PrincipalPermissions");
    }
    PrincipalPermissions.isa = isa;
})(PrincipalPermissions = exports.PrincipalPermissions || (exports.PrincipalPermissions = {}));
var PrincipalResourcePermissions;
(function (PrincipalResourcePermissions) {
    function isa(o) {
        return smithy_client_1.isa(o, "PrincipalResourcePermissions");
    }
    PrincipalResourcePermissions.isa = isa;
})(PrincipalResourcePermissions = exports.PrincipalResourcePermissions || (exports.PrincipalResourcePermissions = {}));
var PutDataLakeSettingsRequest;
(function (PutDataLakeSettingsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutDataLakeSettingsRequest");
    }
    PutDataLakeSettingsRequest.isa = isa;
})(PutDataLakeSettingsRequest = exports.PutDataLakeSettingsRequest || (exports.PutDataLakeSettingsRequest = {}));
var PutDataLakeSettingsResponse;
(function (PutDataLakeSettingsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutDataLakeSettingsResponse");
    }
    PutDataLakeSettingsResponse.isa = isa;
})(PutDataLakeSettingsResponse = exports.PutDataLakeSettingsResponse || (exports.PutDataLakeSettingsResponse = {}));
var RegisterResourceRequest;
(function (RegisterResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegisterResourceRequest");
    }
    RegisterResourceRequest.isa = isa;
})(RegisterResourceRequest = exports.RegisterResourceRequest || (exports.RegisterResourceRequest = {}));
var RegisterResourceResponse;
(function (RegisterResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegisterResourceResponse");
    }
    RegisterResourceResponse.isa = isa;
})(RegisterResourceResponse = exports.RegisterResourceResponse || (exports.RegisterResourceResponse = {}));
var Resource;
(function (Resource) {
    function isa(o) {
        return smithy_client_1.isa(o, "Resource");
    }
    Resource.isa = isa;
})(Resource = exports.Resource || (exports.Resource = {}));
var RevokePermissionsRequest;
(function (RevokePermissionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RevokePermissionsRequest");
    }
    RevokePermissionsRequest.isa = isa;
})(RevokePermissionsRequest = exports.RevokePermissionsRequest || (exports.RevokePermissionsRequest = {}));
var RevokePermissionsResponse;
(function (RevokePermissionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "RevokePermissionsResponse");
    }
    RevokePermissionsResponse.isa = isa;
})(RevokePermissionsResponse = exports.RevokePermissionsResponse || (exports.RevokePermissionsResponse = {}));
var TableResource;
(function (TableResource) {
    function isa(o) {
        return smithy_client_1.isa(o, "TableResource");
    }
    TableResource.isa = isa;
})(TableResource = exports.TableResource || (exports.TableResource = {}));
var TableWithColumnsResource;
(function (TableWithColumnsResource) {
    function isa(o) {
        return smithy_client_1.isa(o, "TableWithColumnsResource");
    }
    TableWithColumnsResource.isa = isa;
})(TableWithColumnsResource = exports.TableWithColumnsResource || (exports.TableWithColumnsResource = {}));
var UpdateResourceRequest;
(function (UpdateResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateResourceRequest");
    }
    UpdateResourceRequest.isa = isa;
})(UpdateResourceRequest = exports.UpdateResourceRequest || (exports.UpdateResourceRequest = {}));
var UpdateResourceResponse;
(function (UpdateResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateResourceResponse");
    }
    UpdateResourceResponse.isa = isa;
})(UpdateResourceResponse = exports.UpdateResourceResponse || (exports.UpdateResourceResponse = {}));
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
var ComparisonOperator;
(function (ComparisonOperator) {
    ComparisonOperator["BEGINS_WITH"] = "BEGINS_WITH";
    ComparisonOperator["BETWEEN"] = "BETWEEN";
    ComparisonOperator["CONTAINS"] = "CONTAINS";
    ComparisonOperator["EQ"] = "EQ";
    ComparisonOperator["GE"] = "GE";
    ComparisonOperator["GT"] = "GT";
    ComparisonOperator["IN"] = "IN";
    ComparisonOperator["LE"] = "LE";
    ComparisonOperator["LT"] = "LT";
    ComparisonOperator["NE"] = "NE";
    ComparisonOperator["NOT_CONTAINS"] = "NOT_CONTAINS";
})(ComparisonOperator = exports.ComparisonOperator || (exports.ComparisonOperator = {}));
var FieldNameString;
(function (FieldNameString) {
    FieldNameString["LAST_MODIFIED"] = "LAST_MODIFIED";
    FieldNameString["RESOURCE_ARN"] = "RESOURCE_ARN";
    FieldNameString["ROLE_ARN"] = "ROLE_ARN";
})(FieldNameString = exports.FieldNameString || (exports.FieldNameString = {}));
var FilterCondition;
(function (FilterCondition) {
    function isa(o) {
        return smithy_client_1.isa(o, "FilterCondition");
    }
    FilterCondition.isa = isa;
})(FilterCondition = exports.FilterCondition || (exports.FilterCondition = {}));
var ResourceInfo;
(function (ResourceInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceInfo");
    }
    ResourceInfo.isa = isa;
})(ResourceInfo = exports.ResourceInfo || (exports.ResourceInfo = {}));
//# sourceMappingURL=index.js.map