"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var Entitlement;
(function (Entitlement) {
    function isa(o) {
        return smithy_client_1.isa(o, "Entitlement");
    }
    Entitlement.isa = isa;
})(Entitlement = exports.Entitlement || (exports.Entitlement = {}));
var EntitlementValue;
(function (EntitlementValue) {
    function isa(o) {
        return smithy_client_1.isa(o, "EntitlementValue");
    }
    EntitlementValue.isa = isa;
})(EntitlementValue = exports.EntitlementValue || (exports.EntitlementValue = {}));
var GetEntitlementFilterName;
(function (GetEntitlementFilterName) {
    GetEntitlementFilterName["CUSTOMER_IDENTIFIER"] = "CUSTOMER_IDENTIFIER";
    GetEntitlementFilterName["DIMENSION"] = "DIMENSION";
})(GetEntitlementFilterName = exports.GetEntitlementFilterName || (exports.GetEntitlementFilterName = {}));
var GetEntitlementsRequest;
(function (GetEntitlementsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetEntitlementsRequest");
    }
    GetEntitlementsRequest.isa = isa;
})(GetEntitlementsRequest = exports.GetEntitlementsRequest || (exports.GetEntitlementsRequest = {}));
var GetEntitlementsResult;
(function (GetEntitlementsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetEntitlementsResult");
    }
    GetEntitlementsResult.isa = isa;
})(GetEntitlementsResult = exports.GetEntitlementsResult || (exports.GetEntitlementsResult = {}));
var InternalServiceErrorException;
(function (InternalServiceErrorException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalServiceErrorException");
    }
    InternalServiceErrorException.isa = isa;
})(InternalServiceErrorException = exports.InternalServiceErrorException || (exports.InternalServiceErrorException = {}));
var InvalidParameterException;
(function (InvalidParameterException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidParameterException");
    }
    InvalidParameterException.isa = isa;
})(InvalidParameterException = exports.InvalidParameterException || (exports.InvalidParameterException = {}));
var ThrottlingException;
(function (ThrottlingException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ThrottlingException");
    }
    ThrottlingException.isa = isa;
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
//# sourceMappingURL=index.js.map