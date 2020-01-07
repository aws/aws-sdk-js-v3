"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var ActivatedRule;
(function (ActivatedRule) {
    function isa(o) {
        return smithy_client_1.isa(o, "ActivatedRule");
    }
    ActivatedRule.isa = isa;
})(ActivatedRule = exports.ActivatedRule || (exports.ActivatedRule = {}));
var ByteMatchSet;
(function (ByteMatchSet) {
    function isa(o) {
        return smithy_client_1.isa(o, "ByteMatchSet");
    }
    ByteMatchSet.isa = isa;
})(ByteMatchSet = exports.ByteMatchSet || (exports.ByteMatchSet = {}));
var ByteMatchSetSummary;
(function (ByteMatchSetSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "ByteMatchSetSummary");
    }
    ByteMatchSetSummary.isa = isa;
})(ByteMatchSetSummary = exports.ByteMatchSetSummary || (exports.ByteMatchSetSummary = {}));
var ByteMatchSetUpdate;
(function (ByteMatchSetUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "ByteMatchSetUpdate");
    }
    ByteMatchSetUpdate.isa = isa;
})(ByteMatchSetUpdate = exports.ByteMatchSetUpdate || (exports.ByteMatchSetUpdate = {}));
var ByteMatchTuple;
(function (ByteMatchTuple) {
    function isa(o) {
        return smithy_client_1.isa(o, "ByteMatchTuple");
    }
    ByteMatchTuple.isa = isa;
})(ByteMatchTuple = exports.ByteMatchTuple || (exports.ByteMatchTuple = {}));
var ChangeAction;
(function (ChangeAction) {
    ChangeAction["DELETE"] = "DELETE";
    ChangeAction["INSERT"] = "INSERT";
})(ChangeAction = exports.ChangeAction || (exports.ChangeAction = {}));
var ChangeTokenStatus;
(function (ChangeTokenStatus) {
    ChangeTokenStatus["INSYNC"] = "INSYNC";
    ChangeTokenStatus["PENDING"] = "PENDING";
    ChangeTokenStatus["PROVISIONED"] = "PROVISIONED";
})(ChangeTokenStatus = exports.ChangeTokenStatus || (exports.ChangeTokenStatus = {}));
var ComparisonOperator;
(function (ComparisonOperator) {
    ComparisonOperator["EQ"] = "EQ";
    ComparisonOperator["GE"] = "GE";
    ComparisonOperator["GT"] = "GT";
    ComparisonOperator["LE"] = "LE";
    ComparisonOperator["LT"] = "LT";
    ComparisonOperator["NE"] = "NE";
})(ComparisonOperator = exports.ComparisonOperator || (exports.ComparisonOperator = {}));
var CreateByteMatchSetRequest;
(function (CreateByteMatchSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateByteMatchSetRequest");
    }
    CreateByteMatchSetRequest.isa = isa;
})(CreateByteMatchSetRequest = exports.CreateByteMatchSetRequest || (exports.CreateByteMatchSetRequest = {}));
var CreateByteMatchSetResponse;
(function (CreateByteMatchSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateByteMatchSetResponse");
    }
    CreateByteMatchSetResponse.isa = isa;
})(CreateByteMatchSetResponse = exports.CreateByteMatchSetResponse || (exports.CreateByteMatchSetResponse = {}));
var CreateGeoMatchSetRequest;
(function (CreateGeoMatchSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateGeoMatchSetRequest");
    }
    CreateGeoMatchSetRequest.isa = isa;
})(CreateGeoMatchSetRequest = exports.CreateGeoMatchSetRequest || (exports.CreateGeoMatchSetRequest = {}));
var CreateGeoMatchSetResponse;
(function (CreateGeoMatchSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateGeoMatchSetResponse");
    }
    CreateGeoMatchSetResponse.isa = isa;
})(CreateGeoMatchSetResponse = exports.CreateGeoMatchSetResponse || (exports.CreateGeoMatchSetResponse = {}));
var CreateIPSetRequest;
(function (CreateIPSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateIPSetRequest");
    }
    CreateIPSetRequest.isa = isa;
})(CreateIPSetRequest = exports.CreateIPSetRequest || (exports.CreateIPSetRequest = {}));
var CreateIPSetResponse;
(function (CreateIPSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateIPSetResponse");
    }
    CreateIPSetResponse.isa = isa;
})(CreateIPSetResponse = exports.CreateIPSetResponse || (exports.CreateIPSetResponse = {}));
var CreateRateBasedRuleRequest;
(function (CreateRateBasedRuleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateRateBasedRuleRequest");
    }
    CreateRateBasedRuleRequest.isa = isa;
})(CreateRateBasedRuleRequest = exports.CreateRateBasedRuleRequest || (exports.CreateRateBasedRuleRequest = {}));
var CreateRateBasedRuleResponse;
(function (CreateRateBasedRuleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateRateBasedRuleResponse");
    }
    CreateRateBasedRuleResponse.isa = isa;
})(CreateRateBasedRuleResponse = exports.CreateRateBasedRuleResponse || (exports.CreateRateBasedRuleResponse = {}));
var CreateRegexMatchSetRequest;
(function (CreateRegexMatchSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateRegexMatchSetRequest");
    }
    CreateRegexMatchSetRequest.isa = isa;
})(CreateRegexMatchSetRequest = exports.CreateRegexMatchSetRequest || (exports.CreateRegexMatchSetRequest = {}));
var CreateRegexMatchSetResponse;
(function (CreateRegexMatchSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateRegexMatchSetResponse");
    }
    CreateRegexMatchSetResponse.isa = isa;
})(CreateRegexMatchSetResponse = exports.CreateRegexMatchSetResponse || (exports.CreateRegexMatchSetResponse = {}));
var CreateRegexPatternSetRequest;
(function (CreateRegexPatternSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateRegexPatternSetRequest");
    }
    CreateRegexPatternSetRequest.isa = isa;
})(CreateRegexPatternSetRequest = exports.CreateRegexPatternSetRequest || (exports.CreateRegexPatternSetRequest = {}));
var CreateRegexPatternSetResponse;
(function (CreateRegexPatternSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateRegexPatternSetResponse");
    }
    CreateRegexPatternSetResponse.isa = isa;
})(CreateRegexPatternSetResponse = exports.CreateRegexPatternSetResponse || (exports.CreateRegexPatternSetResponse = {}));
var CreateRuleGroupRequest;
(function (CreateRuleGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateRuleGroupRequest");
    }
    CreateRuleGroupRequest.isa = isa;
})(CreateRuleGroupRequest = exports.CreateRuleGroupRequest || (exports.CreateRuleGroupRequest = {}));
var CreateRuleGroupResponse;
(function (CreateRuleGroupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateRuleGroupResponse");
    }
    CreateRuleGroupResponse.isa = isa;
})(CreateRuleGroupResponse = exports.CreateRuleGroupResponse || (exports.CreateRuleGroupResponse = {}));
var CreateRuleRequest;
(function (CreateRuleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateRuleRequest");
    }
    CreateRuleRequest.isa = isa;
})(CreateRuleRequest = exports.CreateRuleRequest || (exports.CreateRuleRequest = {}));
var CreateRuleResponse;
(function (CreateRuleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateRuleResponse");
    }
    CreateRuleResponse.isa = isa;
})(CreateRuleResponse = exports.CreateRuleResponse || (exports.CreateRuleResponse = {}));
var CreateSizeConstraintSetRequest;
(function (CreateSizeConstraintSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateSizeConstraintSetRequest");
    }
    CreateSizeConstraintSetRequest.isa = isa;
})(CreateSizeConstraintSetRequest = exports.CreateSizeConstraintSetRequest || (exports.CreateSizeConstraintSetRequest = {}));
var CreateSizeConstraintSetResponse;
(function (CreateSizeConstraintSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateSizeConstraintSetResponse");
    }
    CreateSizeConstraintSetResponse.isa = isa;
})(CreateSizeConstraintSetResponse = exports.CreateSizeConstraintSetResponse || (exports.CreateSizeConstraintSetResponse = {}));
var CreateSqlInjectionMatchSetRequest;
(function (CreateSqlInjectionMatchSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateSqlInjectionMatchSetRequest");
    }
    CreateSqlInjectionMatchSetRequest.isa = isa;
})(CreateSqlInjectionMatchSetRequest = exports.CreateSqlInjectionMatchSetRequest || (exports.CreateSqlInjectionMatchSetRequest = {}));
var CreateSqlInjectionMatchSetResponse;
(function (CreateSqlInjectionMatchSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateSqlInjectionMatchSetResponse");
    }
    CreateSqlInjectionMatchSetResponse.isa = isa;
})(CreateSqlInjectionMatchSetResponse = exports.CreateSqlInjectionMatchSetResponse || (exports.CreateSqlInjectionMatchSetResponse = {}));
var CreateWebACLRequest;
(function (CreateWebACLRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateWebACLRequest");
    }
    CreateWebACLRequest.isa = isa;
})(CreateWebACLRequest = exports.CreateWebACLRequest || (exports.CreateWebACLRequest = {}));
var CreateWebACLResponse;
(function (CreateWebACLResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateWebACLResponse");
    }
    CreateWebACLResponse.isa = isa;
})(CreateWebACLResponse = exports.CreateWebACLResponse || (exports.CreateWebACLResponse = {}));
var CreateXssMatchSetRequest;
(function (CreateXssMatchSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateXssMatchSetRequest");
    }
    CreateXssMatchSetRequest.isa = isa;
})(CreateXssMatchSetRequest = exports.CreateXssMatchSetRequest || (exports.CreateXssMatchSetRequest = {}));
var CreateXssMatchSetResponse;
(function (CreateXssMatchSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateXssMatchSetResponse");
    }
    CreateXssMatchSetResponse.isa = isa;
})(CreateXssMatchSetResponse = exports.CreateXssMatchSetResponse || (exports.CreateXssMatchSetResponse = {}));
var DeleteByteMatchSetRequest;
(function (DeleteByteMatchSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteByteMatchSetRequest");
    }
    DeleteByteMatchSetRequest.isa = isa;
})(DeleteByteMatchSetRequest = exports.DeleteByteMatchSetRequest || (exports.DeleteByteMatchSetRequest = {}));
var DeleteByteMatchSetResponse;
(function (DeleteByteMatchSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteByteMatchSetResponse");
    }
    DeleteByteMatchSetResponse.isa = isa;
})(DeleteByteMatchSetResponse = exports.DeleteByteMatchSetResponse || (exports.DeleteByteMatchSetResponse = {}));
var DeleteGeoMatchSetRequest;
(function (DeleteGeoMatchSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteGeoMatchSetRequest");
    }
    DeleteGeoMatchSetRequest.isa = isa;
})(DeleteGeoMatchSetRequest = exports.DeleteGeoMatchSetRequest || (exports.DeleteGeoMatchSetRequest = {}));
var DeleteGeoMatchSetResponse;
(function (DeleteGeoMatchSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteGeoMatchSetResponse");
    }
    DeleteGeoMatchSetResponse.isa = isa;
})(DeleteGeoMatchSetResponse = exports.DeleteGeoMatchSetResponse || (exports.DeleteGeoMatchSetResponse = {}));
var DeleteIPSetRequest;
(function (DeleteIPSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteIPSetRequest");
    }
    DeleteIPSetRequest.isa = isa;
})(DeleteIPSetRequest = exports.DeleteIPSetRequest || (exports.DeleteIPSetRequest = {}));
var DeleteIPSetResponse;
(function (DeleteIPSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteIPSetResponse");
    }
    DeleteIPSetResponse.isa = isa;
})(DeleteIPSetResponse = exports.DeleteIPSetResponse || (exports.DeleteIPSetResponse = {}));
var DeleteLoggingConfigurationRequest;
(function (DeleteLoggingConfigurationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteLoggingConfigurationRequest");
    }
    DeleteLoggingConfigurationRequest.isa = isa;
})(DeleteLoggingConfigurationRequest = exports.DeleteLoggingConfigurationRequest || (exports.DeleteLoggingConfigurationRequest = {}));
var DeleteLoggingConfigurationResponse;
(function (DeleteLoggingConfigurationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteLoggingConfigurationResponse");
    }
    DeleteLoggingConfigurationResponse.isa = isa;
})(DeleteLoggingConfigurationResponse = exports.DeleteLoggingConfigurationResponse || (exports.DeleteLoggingConfigurationResponse = {}));
var DeletePermissionPolicyRequest;
(function (DeletePermissionPolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeletePermissionPolicyRequest");
    }
    DeletePermissionPolicyRequest.isa = isa;
})(DeletePermissionPolicyRequest = exports.DeletePermissionPolicyRequest || (exports.DeletePermissionPolicyRequest = {}));
var DeletePermissionPolicyResponse;
(function (DeletePermissionPolicyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeletePermissionPolicyResponse");
    }
    DeletePermissionPolicyResponse.isa = isa;
})(DeletePermissionPolicyResponse = exports.DeletePermissionPolicyResponse || (exports.DeletePermissionPolicyResponse = {}));
var DeleteRateBasedRuleRequest;
(function (DeleteRateBasedRuleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRateBasedRuleRequest");
    }
    DeleteRateBasedRuleRequest.isa = isa;
})(DeleteRateBasedRuleRequest = exports.DeleteRateBasedRuleRequest || (exports.DeleteRateBasedRuleRequest = {}));
var DeleteRateBasedRuleResponse;
(function (DeleteRateBasedRuleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRateBasedRuleResponse");
    }
    DeleteRateBasedRuleResponse.isa = isa;
})(DeleteRateBasedRuleResponse = exports.DeleteRateBasedRuleResponse || (exports.DeleteRateBasedRuleResponse = {}));
var DeleteRegexMatchSetRequest;
(function (DeleteRegexMatchSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRegexMatchSetRequest");
    }
    DeleteRegexMatchSetRequest.isa = isa;
})(DeleteRegexMatchSetRequest = exports.DeleteRegexMatchSetRequest || (exports.DeleteRegexMatchSetRequest = {}));
var DeleteRegexMatchSetResponse;
(function (DeleteRegexMatchSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRegexMatchSetResponse");
    }
    DeleteRegexMatchSetResponse.isa = isa;
})(DeleteRegexMatchSetResponse = exports.DeleteRegexMatchSetResponse || (exports.DeleteRegexMatchSetResponse = {}));
var DeleteRegexPatternSetRequest;
(function (DeleteRegexPatternSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRegexPatternSetRequest");
    }
    DeleteRegexPatternSetRequest.isa = isa;
})(DeleteRegexPatternSetRequest = exports.DeleteRegexPatternSetRequest || (exports.DeleteRegexPatternSetRequest = {}));
var DeleteRegexPatternSetResponse;
(function (DeleteRegexPatternSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRegexPatternSetResponse");
    }
    DeleteRegexPatternSetResponse.isa = isa;
})(DeleteRegexPatternSetResponse = exports.DeleteRegexPatternSetResponse || (exports.DeleteRegexPatternSetResponse = {}));
var DeleteRuleGroupRequest;
(function (DeleteRuleGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRuleGroupRequest");
    }
    DeleteRuleGroupRequest.isa = isa;
})(DeleteRuleGroupRequest = exports.DeleteRuleGroupRequest || (exports.DeleteRuleGroupRequest = {}));
var DeleteRuleGroupResponse;
(function (DeleteRuleGroupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRuleGroupResponse");
    }
    DeleteRuleGroupResponse.isa = isa;
})(DeleteRuleGroupResponse = exports.DeleteRuleGroupResponse || (exports.DeleteRuleGroupResponse = {}));
var DeleteRuleRequest;
(function (DeleteRuleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRuleRequest");
    }
    DeleteRuleRequest.isa = isa;
})(DeleteRuleRequest = exports.DeleteRuleRequest || (exports.DeleteRuleRequest = {}));
var DeleteRuleResponse;
(function (DeleteRuleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRuleResponse");
    }
    DeleteRuleResponse.isa = isa;
})(DeleteRuleResponse = exports.DeleteRuleResponse || (exports.DeleteRuleResponse = {}));
var DeleteSizeConstraintSetRequest;
(function (DeleteSizeConstraintSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteSizeConstraintSetRequest");
    }
    DeleteSizeConstraintSetRequest.isa = isa;
})(DeleteSizeConstraintSetRequest = exports.DeleteSizeConstraintSetRequest || (exports.DeleteSizeConstraintSetRequest = {}));
var DeleteSizeConstraintSetResponse;
(function (DeleteSizeConstraintSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteSizeConstraintSetResponse");
    }
    DeleteSizeConstraintSetResponse.isa = isa;
})(DeleteSizeConstraintSetResponse = exports.DeleteSizeConstraintSetResponse || (exports.DeleteSizeConstraintSetResponse = {}));
var DeleteSqlInjectionMatchSetRequest;
(function (DeleteSqlInjectionMatchSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteSqlInjectionMatchSetRequest");
    }
    DeleteSqlInjectionMatchSetRequest.isa = isa;
})(DeleteSqlInjectionMatchSetRequest = exports.DeleteSqlInjectionMatchSetRequest || (exports.DeleteSqlInjectionMatchSetRequest = {}));
var DeleteSqlInjectionMatchSetResponse;
(function (DeleteSqlInjectionMatchSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteSqlInjectionMatchSetResponse");
    }
    DeleteSqlInjectionMatchSetResponse.isa = isa;
})(DeleteSqlInjectionMatchSetResponse = exports.DeleteSqlInjectionMatchSetResponse || (exports.DeleteSqlInjectionMatchSetResponse = {}));
var DeleteWebACLRequest;
(function (DeleteWebACLRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteWebACLRequest");
    }
    DeleteWebACLRequest.isa = isa;
})(DeleteWebACLRequest = exports.DeleteWebACLRequest || (exports.DeleteWebACLRequest = {}));
var DeleteWebACLResponse;
(function (DeleteWebACLResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteWebACLResponse");
    }
    DeleteWebACLResponse.isa = isa;
})(DeleteWebACLResponse = exports.DeleteWebACLResponse || (exports.DeleteWebACLResponse = {}));
var DeleteXssMatchSetRequest;
(function (DeleteXssMatchSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteXssMatchSetRequest");
    }
    DeleteXssMatchSetRequest.isa = isa;
})(DeleteXssMatchSetRequest = exports.DeleteXssMatchSetRequest || (exports.DeleteXssMatchSetRequest = {}));
var DeleteXssMatchSetResponse;
(function (DeleteXssMatchSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteXssMatchSetResponse");
    }
    DeleteXssMatchSetResponse.isa = isa;
})(DeleteXssMatchSetResponse = exports.DeleteXssMatchSetResponse || (exports.DeleteXssMatchSetResponse = {}));
var ExcludedRule;
(function (ExcludedRule) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExcludedRule");
    }
    ExcludedRule.isa = isa;
})(ExcludedRule = exports.ExcludedRule || (exports.ExcludedRule = {}));
var FieldToMatch;
(function (FieldToMatch) {
    function isa(o) {
        return smithy_client_1.isa(o, "FieldToMatch");
    }
    FieldToMatch.isa = isa;
})(FieldToMatch = exports.FieldToMatch || (exports.FieldToMatch = {}));
var GeoMatchConstraint;
(function (GeoMatchConstraint) {
    function isa(o) {
        return smithy_client_1.isa(o, "GeoMatchConstraint");
    }
    GeoMatchConstraint.isa = isa;
})(GeoMatchConstraint = exports.GeoMatchConstraint || (exports.GeoMatchConstraint = {}));
var GeoMatchConstraintType;
(function (GeoMatchConstraintType) {
    GeoMatchConstraintType["Country"] = "Country";
})(GeoMatchConstraintType = exports.GeoMatchConstraintType || (exports.GeoMatchConstraintType = {}));
var GeoMatchConstraintValue;
(function (GeoMatchConstraintValue) {
    GeoMatchConstraintValue["AD"] = "AD";
    GeoMatchConstraintValue["AE"] = "AE";
    GeoMatchConstraintValue["AF"] = "AF";
    GeoMatchConstraintValue["AG"] = "AG";
    GeoMatchConstraintValue["AI"] = "AI";
    GeoMatchConstraintValue["AL"] = "AL";
    GeoMatchConstraintValue["AM"] = "AM";
    GeoMatchConstraintValue["AO"] = "AO";
    GeoMatchConstraintValue["AQ"] = "AQ";
    GeoMatchConstraintValue["AR"] = "AR";
    GeoMatchConstraintValue["AS"] = "AS";
    GeoMatchConstraintValue["AT"] = "AT";
    GeoMatchConstraintValue["AU"] = "AU";
    GeoMatchConstraintValue["AW"] = "AW";
    GeoMatchConstraintValue["AX"] = "AX";
    GeoMatchConstraintValue["AZ"] = "AZ";
    GeoMatchConstraintValue["BA"] = "BA";
    GeoMatchConstraintValue["BB"] = "BB";
    GeoMatchConstraintValue["BD"] = "BD";
    GeoMatchConstraintValue["BE"] = "BE";
    GeoMatchConstraintValue["BF"] = "BF";
    GeoMatchConstraintValue["BG"] = "BG";
    GeoMatchConstraintValue["BH"] = "BH";
    GeoMatchConstraintValue["BI"] = "BI";
    GeoMatchConstraintValue["BJ"] = "BJ";
    GeoMatchConstraintValue["BL"] = "BL";
    GeoMatchConstraintValue["BM"] = "BM";
    GeoMatchConstraintValue["BN"] = "BN";
    GeoMatchConstraintValue["BO"] = "BO";
    GeoMatchConstraintValue["BQ"] = "BQ";
    GeoMatchConstraintValue["BR"] = "BR";
    GeoMatchConstraintValue["BS"] = "BS";
    GeoMatchConstraintValue["BT"] = "BT";
    GeoMatchConstraintValue["BV"] = "BV";
    GeoMatchConstraintValue["BW"] = "BW";
    GeoMatchConstraintValue["BY"] = "BY";
    GeoMatchConstraintValue["BZ"] = "BZ";
    GeoMatchConstraintValue["CA"] = "CA";
    GeoMatchConstraintValue["CC"] = "CC";
    GeoMatchConstraintValue["CD"] = "CD";
    GeoMatchConstraintValue["CF"] = "CF";
    GeoMatchConstraintValue["CG"] = "CG";
    GeoMatchConstraintValue["CH"] = "CH";
    GeoMatchConstraintValue["CI"] = "CI";
    GeoMatchConstraintValue["CK"] = "CK";
    GeoMatchConstraintValue["CL"] = "CL";
    GeoMatchConstraintValue["CM"] = "CM";
    GeoMatchConstraintValue["CN"] = "CN";
    GeoMatchConstraintValue["CO"] = "CO";
    GeoMatchConstraintValue["CR"] = "CR";
    GeoMatchConstraintValue["CU"] = "CU";
    GeoMatchConstraintValue["CV"] = "CV";
    GeoMatchConstraintValue["CW"] = "CW";
    GeoMatchConstraintValue["CX"] = "CX";
    GeoMatchConstraintValue["CY"] = "CY";
    GeoMatchConstraintValue["CZ"] = "CZ";
    GeoMatchConstraintValue["DE"] = "DE";
    GeoMatchConstraintValue["DJ"] = "DJ";
    GeoMatchConstraintValue["DK"] = "DK";
    GeoMatchConstraintValue["DM"] = "DM";
    GeoMatchConstraintValue["DO"] = "DO";
    GeoMatchConstraintValue["DZ"] = "DZ";
    GeoMatchConstraintValue["EC"] = "EC";
    GeoMatchConstraintValue["EE"] = "EE";
    GeoMatchConstraintValue["EG"] = "EG";
    GeoMatchConstraintValue["EH"] = "EH";
    GeoMatchConstraintValue["ER"] = "ER";
    GeoMatchConstraintValue["ES"] = "ES";
    GeoMatchConstraintValue["ET"] = "ET";
    GeoMatchConstraintValue["FI"] = "FI";
    GeoMatchConstraintValue["FJ"] = "FJ";
    GeoMatchConstraintValue["FK"] = "FK";
    GeoMatchConstraintValue["FM"] = "FM";
    GeoMatchConstraintValue["FO"] = "FO";
    GeoMatchConstraintValue["FR"] = "FR";
    GeoMatchConstraintValue["GA"] = "GA";
    GeoMatchConstraintValue["GB"] = "GB";
    GeoMatchConstraintValue["GD"] = "GD";
    GeoMatchConstraintValue["GE"] = "GE";
    GeoMatchConstraintValue["GF"] = "GF";
    GeoMatchConstraintValue["GG"] = "GG";
    GeoMatchConstraintValue["GH"] = "GH";
    GeoMatchConstraintValue["GI"] = "GI";
    GeoMatchConstraintValue["GL"] = "GL";
    GeoMatchConstraintValue["GM"] = "GM";
    GeoMatchConstraintValue["GN"] = "GN";
    GeoMatchConstraintValue["GP"] = "GP";
    GeoMatchConstraintValue["GQ"] = "GQ";
    GeoMatchConstraintValue["GR"] = "GR";
    GeoMatchConstraintValue["GS"] = "GS";
    GeoMatchConstraintValue["GT"] = "GT";
    GeoMatchConstraintValue["GU"] = "GU";
    GeoMatchConstraintValue["GW"] = "GW";
    GeoMatchConstraintValue["GY"] = "GY";
    GeoMatchConstraintValue["HK"] = "HK";
    GeoMatchConstraintValue["HM"] = "HM";
    GeoMatchConstraintValue["HN"] = "HN";
    GeoMatchConstraintValue["HR"] = "HR";
    GeoMatchConstraintValue["HT"] = "HT";
    GeoMatchConstraintValue["HU"] = "HU";
    GeoMatchConstraintValue["ID"] = "ID";
    GeoMatchConstraintValue["IE"] = "IE";
    GeoMatchConstraintValue["IL"] = "IL";
    GeoMatchConstraintValue["IM"] = "IM";
    GeoMatchConstraintValue["IN"] = "IN";
    GeoMatchConstraintValue["IO"] = "IO";
    GeoMatchConstraintValue["IQ"] = "IQ";
    GeoMatchConstraintValue["IR"] = "IR";
    GeoMatchConstraintValue["IS"] = "IS";
    GeoMatchConstraintValue["IT"] = "IT";
    GeoMatchConstraintValue["JE"] = "JE";
    GeoMatchConstraintValue["JM"] = "JM";
    GeoMatchConstraintValue["JO"] = "JO";
    GeoMatchConstraintValue["JP"] = "JP";
    GeoMatchConstraintValue["KE"] = "KE";
    GeoMatchConstraintValue["KG"] = "KG";
    GeoMatchConstraintValue["KH"] = "KH";
    GeoMatchConstraintValue["KI"] = "KI";
    GeoMatchConstraintValue["KM"] = "KM";
    GeoMatchConstraintValue["KN"] = "KN";
    GeoMatchConstraintValue["KP"] = "KP";
    GeoMatchConstraintValue["KR"] = "KR";
    GeoMatchConstraintValue["KW"] = "KW";
    GeoMatchConstraintValue["KY"] = "KY";
    GeoMatchConstraintValue["KZ"] = "KZ";
    GeoMatchConstraintValue["LA"] = "LA";
    GeoMatchConstraintValue["LB"] = "LB";
    GeoMatchConstraintValue["LC"] = "LC";
    GeoMatchConstraintValue["LI"] = "LI";
    GeoMatchConstraintValue["LK"] = "LK";
    GeoMatchConstraintValue["LR"] = "LR";
    GeoMatchConstraintValue["LS"] = "LS";
    GeoMatchConstraintValue["LT"] = "LT";
    GeoMatchConstraintValue["LU"] = "LU";
    GeoMatchConstraintValue["LV"] = "LV";
    GeoMatchConstraintValue["LY"] = "LY";
    GeoMatchConstraintValue["MA"] = "MA";
    GeoMatchConstraintValue["MC"] = "MC";
    GeoMatchConstraintValue["MD"] = "MD";
    GeoMatchConstraintValue["ME"] = "ME";
    GeoMatchConstraintValue["MF"] = "MF";
    GeoMatchConstraintValue["MG"] = "MG";
    GeoMatchConstraintValue["MH"] = "MH";
    GeoMatchConstraintValue["MK"] = "MK";
    GeoMatchConstraintValue["ML"] = "ML";
    GeoMatchConstraintValue["MM"] = "MM";
    GeoMatchConstraintValue["MN"] = "MN";
    GeoMatchConstraintValue["MO"] = "MO";
    GeoMatchConstraintValue["MP"] = "MP";
    GeoMatchConstraintValue["MQ"] = "MQ";
    GeoMatchConstraintValue["MR"] = "MR";
    GeoMatchConstraintValue["MS"] = "MS";
    GeoMatchConstraintValue["MT"] = "MT";
    GeoMatchConstraintValue["MU"] = "MU";
    GeoMatchConstraintValue["MV"] = "MV";
    GeoMatchConstraintValue["MW"] = "MW";
    GeoMatchConstraintValue["MX"] = "MX";
    GeoMatchConstraintValue["MY"] = "MY";
    GeoMatchConstraintValue["MZ"] = "MZ";
    GeoMatchConstraintValue["NA"] = "NA";
    GeoMatchConstraintValue["NC"] = "NC";
    GeoMatchConstraintValue["NE"] = "NE";
    GeoMatchConstraintValue["NF"] = "NF";
    GeoMatchConstraintValue["NG"] = "NG";
    GeoMatchConstraintValue["NI"] = "NI";
    GeoMatchConstraintValue["NL"] = "NL";
    GeoMatchConstraintValue["NO"] = "NO";
    GeoMatchConstraintValue["NP"] = "NP";
    GeoMatchConstraintValue["NR"] = "NR";
    GeoMatchConstraintValue["NU"] = "NU";
    GeoMatchConstraintValue["NZ"] = "NZ";
    GeoMatchConstraintValue["OM"] = "OM";
    GeoMatchConstraintValue["PA"] = "PA";
    GeoMatchConstraintValue["PE"] = "PE";
    GeoMatchConstraintValue["PF"] = "PF";
    GeoMatchConstraintValue["PG"] = "PG";
    GeoMatchConstraintValue["PH"] = "PH";
    GeoMatchConstraintValue["PK"] = "PK";
    GeoMatchConstraintValue["PL"] = "PL";
    GeoMatchConstraintValue["PM"] = "PM";
    GeoMatchConstraintValue["PN"] = "PN";
    GeoMatchConstraintValue["PR"] = "PR";
    GeoMatchConstraintValue["PS"] = "PS";
    GeoMatchConstraintValue["PT"] = "PT";
    GeoMatchConstraintValue["PW"] = "PW";
    GeoMatchConstraintValue["PY"] = "PY";
    GeoMatchConstraintValue["QA"] = "QA";
    GeoMatchConstraintValue["RE"] = "RE";
    GeoMatchConstraintValue["RO"] = "RO";
    GeoMatchConstraintValue["RS"] = "RS";
    GeoMatchConstraintValue["RU"] = "RU";
    GeoMatchConstraintValue["RW"] = "RW";
    GeoMatchConstraintValue["SA"] = "SA";
    GeoMatchConstraintValue["SB"] = "SB";
    GeoMatchConstraintValue["SC"] = "SC";
    GeoMatchConstraintValue["SD"] = "SD";
    GeoMatchConstraintValue["SE"] = "SE";
    GeoMatchConstraintValue["SG"] = "SG";
    GeoMatchConstraintValue["SH"] = "SH";
    GeoMatchConstraintValue["SI"] = "SI";
    GeoMatchConstraintValue["SJ"] = "SJ";
    GeoMatchConstraintValue["SK"] = "SK";
    GeoMatchConstraintValue["SL"] = "SL";
    GeoMatchConstraintValue["SM"] = "SM";
    GeoMatchConstraintValue["SN"] = "SN";
    GeoMatchConstraintValue["SO"] = "SO";
    GeoMatchConstraintValue["SR"] = "SR";
    GeoMatchConstraintValue["SS"] = "SS";
    GeoMatchConstraintValue["ST"] = "ST";
    GeoMatchConstraintValue["SV"] = "SV";
    GeoMatchConstraintValue["SX"] = "SX";
    GeoMatchConstraintValue["SY"] = "SY";
    GeoMatchConstraintValue["SZ"] = "SZ";
    GeoMatchConstraintValue["TC"] = "TC";
    GeoMatchConstraintValue["TD"] = "TD";
    GeoMatchConstraintValue["TF"] = "TF";
    GeoMatchConstraintValue["TG"] = "TG";
    GeoMatchConstraintValue["TH"] = "TH";
    GeoMatchConstraintValue["TJ"] = "TJ";
    GeoMatchConstraintValue["TK"] = "TK";
    GeoMatchConstraintValue["TL"] = "TL";
    GeoMatchConstraintValue["TM"] = "TM";
    GeoMatchConstraintValue["TN"] = "TN";
    GeoMatchConstraintValue["TO"] = "TO";
    GeoMatchConstraintValue["TR"] = "TR";
    GeoMatchConstraintValue["TT"] = "TT";
    GeoMatchConstraintValue["TV"] = "TV";
    GeoMatchConstraintValue["TW"] = "TW";
    GeoMatchConstraintValue["TZ"] = "TZ";
    GeoMatchConstraintValue["UA"] = "UA";
    GeoMatchConstraintValue["UG"] = "UG";
    GeoMatchConstraintValue["UM"] = "UM";
    GeoMatchConstraintValue["US"] = "US";
    GeoMatchConstraintValue["UY"] = "UY";
    GeoMatchConstraintValue["UZ"] = "UZ";
    GeoMatchConstraintValue["VA"] = "VA";
    GeoMatchConstraintValue["VC"] = "VC";
    GeoMatchConstraintValue["VE"] = "VE";
    GeoMatchConstraintValue["VG"] = "VG";
    GeoMatchConstraintValue["VI"] = "VI";
    GeoMatchConstraintValue["VN"] = "VN";
    GeoMatchConstraintValue["VU"] = "VU";
    GeoMatchConstraintValue["WF"] = "WF";
    GeoMatchConstraintValue["WS"] = "WS";
    GeoMatchConstraintValue["YE"] = "YE";
    GeoMatchConstraintValue["YT"] = "YT";
    GeoMatchConstraintValue["ZA"] = "ZA";
    GeoMatchConstraintValue["ZM"] = "ZM";
    GeoMatchConstraintValue["ZW"] = "ZW";
})(GeoMatchConstraintValue = exports.GeoMatchConstraintValue || (exports.GeoMatchConstraintValue = {}));
var GeoMatchSet;
(function (GeoMatchSet) {
    function isa(o) {
        return smithy_client_1.isa(o, "GeoMatchSet");
    }
    GeoMatchSet.isa = isa;
})(GeoMatchSet = exports.GeoMatchSet || (exports.GeoMatchSet = {}));
var GeoMatchSetSummary;
(function (GeoMatchSetSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "GeoMatchSetSummary");
    }
    GeoMatchSetSummary.isa = isa;
})(GeoMatchSetSummary = exports.GeoMatchSetSummary || (exports.GeoMatchSetSummary = {}));
var GeoMatchSetUpdate;
(function (GeoMatchSetUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "GeoMatchSetUpdate");
    }
    GeoMatchSetUpdate.isa = isa;
})(GeoMatchSetUpdate = exports.GeoMatchSetUpdate || (exports.GeoMatchSetUpdate = {}));
var GetByteMatchSetRequest;
(function (GetByteMatchSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetByteMatchSetRequest");
    }
    GetByteMatchSetRequest.isa = isa;
})(GetByteMatchSetRequest = exports.GetByteMatchSetRequest || (exports.GetByteMatchSetRequest = {}));
var GetByteMatchSetResponse;
(function (GetByteMatchSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetByteMatchSetResponse");
    }
    GetByteMatchSetResponse.isa = isa;
})(GetByteMatchSetResponse = exports.GetByteMatchSetResponse || (exports.GetByteMatchSetResponse = {}));
var GetChangeTokenRequest;
(function (GetChangeTokenRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetChangeTokenRequest");
    }
    GetChangeTokenRequest.isa = isa;
})(GetChangeTokenRequest = exports.GetChangeTokenRequest || (exports.GetChangeTokenRequest = {}));
var GetChangeTokenResponse;
(function (GetChangeTokenResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetChangeTokenResponse");
    }
    GetChangeTokenResponse.isa = isa;
})(GetChangeTokenResponse = exports.GetChangeTokenResponse || (exports.GetChangeTokenResponse = {}));
var GetChangeTokenStatusRequest;
(function (GetChangeTokenStatusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetChangeTokenStatusRequest");
    }
    GetChangeTokenStatusRequest.isa = isa;
})(GetChangeTokenStatusRequest = exports.GetChangeTokenStatusRequest || (exports.GetChangeTokenStatusRequest = {}));
var GetChangeTokenStatusResponse;
(function (GetChangeTokenStatusResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetChangeTokenStatusResponse");
    }
    GetChangeTokenStatusResponse.isa = isa;
})(GetChangeTokenStatusResponse = exports.GetChangeTokenStatusResponse || (exports.GetChangeTokenStatusResponse = {}));
var GetGeoMatchSetRequest;
(function (GetGeoMatchSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetGeoMatchSetRequest");
    }
    GetGeoMatchSetRequest.isa = isa;
})(GetGeoMatchSetRequest = exports.GetGeoMatchSetRequest || (exports.GetGeoMatchSetRequest = {}));
var GetGeoMatchSetResponse;
(function (GetGeoMatchSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetGeoMatchSetResponse");
    }
    GetGeoMatchSetResponse.isa = isa;
})(GetGeoMatchSetResponse = exports.GetGeoMatchSetResponse || (exports.GetGeoMatchSetResponse = {}));
var GetIPSetRequest;
(function (GetIPSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetIPSetRequest");
    }
    GetIPSetRequest.isa = isa;
})(GetIPSetRequest = exports.GetIPSetRequest || (exports.GetIPSetRequest = {}));
var GetIPSetResponse;
(function (GetIPSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetIPSetResponse");
    }
    GetIPSetResponse.isa = isa;
})(GetIPSetResponse = exports.GetIPSetResponse || (exports.GetIPSetResponse = {}));
var GetLoggingConfigurationRequest;
(function (GetLoggingConfigurationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetLoggingConfigurationRequest");
    }
    GetLoggingConfigurationRequest.isa = isa;
})(GetLoggingConfigurationRequest = exports.GetLoggingConfigurationRequest || (exports.GetLoggingConfigurationRequest = {}));
var GetLoggingConfigurationResponse;
(function (GetLoggingConfigurationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetLoggingConfigurationResponse");
    }
    GetLoggingConfigurationResponse.isa = isa;
})(GetLoggingConfigurationResponse = exports.GetLoggingConfigurationResponse || (exports.GetLoggingConfigurationResponse = {}));
var GetPermissionPolicyRequest;
(function (GetPermissionPolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetPermissionPolicyRequest");
    }
    GetPermissionPolicyRequest.isa = isa;
})(GetPermissionPolicyRequest = exports.GetPermissionPolicyRequest || (exports.GetPermissionPolicyRequest = {}));
var GetPermissionPolicyResponse;
(function (GetPermissionPolicyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetPermissionPolicyResponse");
    }
    GetPermissionPolicyResponse.isa = isa;
})(GetPermissionPolicyResponse = exports.GetPermissionPolicyResponse || (exports.GetPermissionPolicyResponse = {}));
var GetRateBasedRuleManagedKeysRequest;
(function (GetRateBasedRuleManagedKeysRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRateBasedRuleManagedKeysRequest");
    }
    GetRateBasedRuleManagedKeysRequest.isa = isa;
})(GetRateBasedRuleManagedKeysRequest = exports.GetRateBasedRuleManagedKeysRequest || (exports.GetRateBasedRuleManagedKeysRequest = {}));
var GetRateBasedRuleManagedKeysResponse;
(function (GetRateBasedRuleManagedKeysResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRateBasedRuleManagedKeysResponse");
    }
    GetRateBasedRuleManagedKeysResponse.isa = isa;
})(GetRateBasedRuleManagedKeysResponse = exports.GetRateBasedRuleManagedKeysResponse || (exports.GetRateBasedRuleManagedKeysResponse = {}));
var GetRateBasedRuleRequest;
(function (GetRateBasedRuleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRateBasedRuleRequest");
    }
    GetRateBasedRuleRequest.isa = isa;
})(GetRateBasedRuleRequest = exports.GetRateBasedRuleRequest || (exports.GetRateBasedRuleRequest = {}));
var GetRateBasedRuleResponse;
(function (GetRateBasedRuleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRateBasedRuleResponse");
    }
    GetRateBasedRuleResponse.isa = isa;
})(GetRateBasedRuleResponse = exports.GetRateBasedRuleResponse || (exports.GetRateBasedRuleResponse = {}));
var GetRegexMatchSetRequest;
(function (GetRegexMatchSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRegexMatchSetRequest");
    }
    GetRegexMatchSetRequest.isa = isa;
})(GetRegexMatchSetRequest = exports.GetRegexMatchSetRequest || (exports.GetRegexMatchSetRequest = {}));
var GetRegexMatchSetResponse;
(function (GetRegexMatchSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRegexMatchSetResponse");
    }
    GetRegexMatchSetResponse.isa = isa;
})(GetRegexMatchSetResponse = exports.GetRegexMatchSetResponse || (exports.GetRegexMatchSetResponse = {}));
var GetRegexPatternSetRequest;
(function (GetRegexPatternSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRegexPatternSetRequest");
    }
    GetRegexPatternSetRequest.isa = isa;
})(GetRegexPatternSetRequest = exports.GetRegexPatternSetRequest || (exports.GetRegexPatternSetRequest = {}));
var GetRegexPatternSetResponse;
(function (GetRegexPatternSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRegexPatternSetResponse");
    }
    GetRegexPatternSetResponse.isa = isa;
})(GetRegexPatternSetResponse = exports.GetRegexPatternSetResponse || (exports.GetRegexPatternSetResponse = {}));
var GetRuleGroupRequest;
(function (GetRuleGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRuleGroupRequest");
    }
    GetRuleGroupRequest.isa = isa;
})(GetRuleGroupRequest = exports.GetRuleGroupRequest || (exports.GetRuleGroupRequest = {}));
var GetRuleGroupResponse;
(function (GetRuleGroupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRuleGroupResponse");
    }
    GetRuleGroupResponse.isa = isa;
})(GetRuleGroupResponse = exports.GetRuleGroupResponse || (exports.GetRuleGroupResponse = {}));
var GetRuleRequest;
(function (GetRuleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRuleRequest");
    }
    GetRuleRequest.isa = isa;
})(GetRuleRequest = exports.GetRuleRequest || (exports.GetRuleRequest = {}));
var GetRuleResponse;
(function (GetRuleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRuleResponse");
    }
    GetRuleResponse.isa = isa;
})(GetRuleResponse = exports.GetRuleResponse || (exports.GetRuleResponse = {}));
var GetSampledRequestsRequest;
(function (GetSampledRequestsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSampledRequestsRequest");
    }
    GetSampledRequestsRequest.isa = isa;
})(GetSampledRequestsRequest = exports.GetSampledRequestsRequest || (exports.GetSampledRequestsRequest = {}));
var GetSampledRequestsResponse;
(function (GetSampledRequestsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSampledRequestsResponse");
    }
    GetSampledRequestsResponse.isa = isa;
})(GetSampledRequestsResponse = exports.GetSampledRequestsResponse || (exports.GetSampledRequestsResponse = {}));
var GetSizeConstraintSetRequest;
(function (GetSizeConstraintSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSizeConstraintSetRequest");
    }
    GetSizeConstraintSetRequest.isa = isa;
})(GetSizeConstraintSetRequest = exports.GetSizeConstraintSetRequest || (exports.GetSizeConstraintSetRequest = {}));
var GetSizeConstraintSetResponse;
(function (GetSizeConstraintSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSizeConstraintSetResponse");
    }
    GetSizeConstraintSetResponse.isa = isa;
})(GetSizeConstraintSetResponse = exports.GetSizeConstraintSetResponse || (exports.GetSizeConstraintSetResponse = {}));
var GetSqlInjectionMatchSetRequest;
(function (GetSqlInjectionMatchSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSqlInjectionMatchSetRequest");
    }
    GetSqlInjectionMatchSetRequest.isa = isa;
})(GetSqlInjectionMatchSetRequest = exports.GetSqlInjectionMatchSetRequest || (exports.GetSqlInjectionMatchSetRequest = {}));
var GetSqlInjectionMatchSetResponse;
(function (GetSqlInjectionMatchSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSqlInjectionMatchSetResponse");
    }
    GetSqlInjectionMatchSetResponse.isa = isa;
})(GetSqlInjectionMatchSetResponse = exports.GetSqlInjectionMatchSetResponse || (exports.GetSqlInjectionMatchSetResponse = {}));
var GetWebACLRequest;
(function (GetWebACLRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetWebACLRequest");
    }
    GetWebACLRequest.isa = isa;
})(GetWebACLRequest = exports.GetWebACLRequest || (exports.GetWebACLRequest = {}));
var GetWebACLResponse;
(function (GetWebACLResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetWebACLResponse");
    }
    GetWebACLResponse.isa = isa;
})(GetWebACLResponse = exports.GetWebACLResponse || (exports.GetWebACLResponse = {}));
var GetXssMatchSetRequest;
(function (GetXssMatchSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetXssMatchSetRequest");
    }
    GetXssMatchSetRequest.isa = isa;
})(GetXssMatchSetRequest = exports.GetXssMatchSetRequest || (exports.GetXssMatchSetRequest = {}));
var GetXssMatchSetResponse;
(function (GetXssMatchSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetXssMatchSetResponse");
    }
    GetXssMatchSetResponse.isa = isa;
})(GetXssMatchSetResponse = exports.GetXssMatchSetResponse || (exports.GetXssMatchSetResponse = {}));
var HTTPHeader;
(function (HTTPHeader) {
    function isa(o) {
        return smithy_client_1.isa(o, "HTTPHeader");
    }
    HTTPHeader.isa = isa;
})(HTTPHeader = exports.HTTPHeader || (exports.HTTPHeader = {}));
var HTTPRequest;
(function (HTTPRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "HTTPRequest");
    }
    HTTPRequest.isa = isa;
})(HTTPRequest = exports.HTTPRequest || (exports.HTTPRequest = {}));
var IPSet;
(function (IPSet) {
    function isa(o) {
        return smithy_client_1.isa(o, "IPSet");
    }
    IPSet.isa = isa;
})(IPSet = exports.IPSet || (exports.IPSet = {}));
var IPSetDescriptor;
(function (IPSetDescriptor) {
    function isa(o) {
        return smithy_client_1.isa(o, "IPSetDescriptor");
    }
    IPSetDescriptor.isa = isa;
})(IPSetDescriptor = exports.IPSetDescriptor || (exports.IPSetDescriptor = {}));
var IPSetDescriptorType;
(function (IPSetDescriptorType) {
    IPSetDescriptorType["IPV4"] = "IPV4";
    IPSetDescriptorType["IPV6"] = "IPV6";
})(IPSetDescriptorType = exports.IPSetDescriptorType || (exports.IPSetDescriptorType = {}));
var IPSetSummary;
(function (IPSetSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "IPSetSummary");
    }
    IPSetSummary.isa = isa;
})(IPSetSummary = exports.IPSetSummary || (exports.IPSetSummary = {}));
var IPSetUpdate;
(function (IPSetUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "IPSetUpdate");
    }
    IPSetUpdate.isa = isa;
})(IPSetUpdate = exports.IPSetUpdate || (exports.IPSetUpdate = {}));
var ListActivatedRulesInRuleGroupRequest;
(function (ListActivatedRulesInRuleGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListActivatedRulesInRuleGroupRequest");
    }
    ListActivatedRulesInRuleGroupRequest.isa = isa;
})(ListActivatedRulesInRuleGroupRequest = exports.ListActivatedRulesInRuleGroupRequest || (exports.ListActivatedRulesInRuleGroupRequest = {}));
var ListActivatedRulesInRuleGroupResponse;
(function (ListActivatedRulesInRuleGroupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListActivatedRulesInRuleGroupResponse");
    }
    ListActivatedRulesInRuleGroupResponse.isa = isa;
})(ListActivatedRulesInRuleGroupResponse = exports.ListActivatedRulesInRuleGroupResponse || (exports.ListActivatedRulesInRuleGroupResponse = {}));
var ListByteMatchSetsRequest;
(function (ListByteMatchSetsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListByteMatchSetsRequest");
    }
    ListByteMatchSetsRequest.isa = isa;
})(ListByteMatchSetsRequest = exports.ListByteMatchSetsRequest || (exports.ListByteMatchSetsRequest = {}));
var ListByteMatchSetsResponse;
(function (ListByteMatchSetsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListByteMatchSetsResponse");
    }
    ListByteMatchSetsResponse.isa = isa;
})(ListByteMatchSetsResponse = exports.ListByteMatchSetsResponse || (exports.ListByteMatchSetsResponse = {}));
var ListGeoMatchSetsRequest;
(function (ListGeoMatchSetsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListGeoMatchSetsRequest");
    }
    ListGeoMatchSetsRequest.isa = isa;
})(ListGeoMatchSetsRequest = exports.ListGeoMatchSetsRequest || (exports.ListGeoMatchSetsRequest = {}));
var ListGeoMatchSetsResponse;
(function (ListGeoMatchSetsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListGeoMatchSetsResponse");
    }
    ListGeoMatchSetsResponse.isa = isa;
})(ListGeoMatchSetsResponse = exports.ListGeoMatchSetsResponse || (exports.ListGeoMatchSetsResponse = {}));
var ListIPSetsRequest;
(function (ListIPSetsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListIPSetsRequest");
    }
    ListIPSetsRequest.isa = isa;
})(ListIPSetsRequest = exports.ListIPSetsRequest || (exports.ListIPSetsRequest = {}));
var ListIPSetsResponse;
(function (ListIPSetsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListIPSetsResponse");
    }
    ListIPSetsResponse.isa = isa;
})(ListIPSetsResponse = exports.ListIPSetsResponse || (exports.ListIPSetsResponse = {}));
var ListLoggingConfigurationsRequest;
(function (ListLoggingConfigurationsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListLoggingConfigurationsRequest");
    }
    ListLoggingConfigurationsRequest.isa = isa;
})(ListLoggingConfigurationsRequest = exports.ListLoggingConfigurationsRequest || (exports.ListLoggingConfigurationsRequest = {}));
var ListLoggingConfigurationsResponse;
(function (ListLoggingConfigurationsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListLoggingConfigurationsResponse");
    }
    ListLoggingConfigurationsResponse.isa = isa;
})(ListLoggingConfigurationsResponse = exports.ListLoggingConfigurationsResponse || (exports.ListLoggingConfigurationsResponse = {}));
var ListRateBasedRulesRequest;
(function (ListRateBasedRulesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListRateBasedRulesRequest");
    }
    ListRateBasedRulesRequest.isa = isa;
})(ListRateBasedRulesRequest = exports.ListRateBasedRulesRequest || (exports.ListRateBasedRulesRequest = {}));
var ListRateBasedRulesResponse;
(function (ListRateBasedRulesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListRateBasedRulesResponse");
    }
    ListRateBasedRulesResponse.isa = isa;
})(ListRateBasedRulesResponse = exports.ListRateBasedRulesResponse || (exports.ListRateBasedRulesResponse = {}));
var ListRegexMatchSetsRequest;
(function (ListRegexMatchSetsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListRegexMatchSetsRequest");
    }
    ListRegexMatchSetsRequest.isa = isa;
})(ListRegexMatchSetsRequest = exports.ListRegexMatchSetsRequest || (exports.ListRegexMatchSetsRequest = {}));
var ListRegexMatchSetsResponse;
(function (ListRegexMatchSetsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListRegexMatchSetsResponse");
    }
    ListRegexMatchSetsResponse.isa = isa;
})(ListRegexMatchSetsResponse = exports.ListRegexMatchSetsResponse || (exports.ListRegexMatchSetsResponse = {}));
var ListRegexPatternSetsRequest;
(function (ListRegexPatternSetsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListRegexPatternSetsRequest");
    }
    ListRegexPatternSetsRequest.isa = isa;
})(ListRegexPatternSetsRequest = exports.ListRegexPatternSetsRequest || (exports.ListRegexPatternSetsRequest = {}));
var ListRegexPatternSetsResponse;
(function (ListRegexPatternSetsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListRegexPatternSetsResponse");
    }
    ListRegexPatternSetsResponse.isa = isa;
})(ListRegexPatternSetsResponse = exports.ListRegexPatternSetsResponse || (exports.ListRegexPatternSetsResponse = {}));
var ListRuleGroupsRequest;
(function (ListRuleGroupsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListRuleGroupsRequest");
    }
    ListRuleGroupsRequest.isa = isa;
})(ListRuleGroupsRequest = exports.ListRuleGroupsRequest || (exports.ListRuleGroupsRequest = {}));
var ListRuleGroupsResponse;
(function (ListRuleGroupsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListRuleGroupsResponse");
    }
    ListRuleGroupsResponse.isa = isa;
})(ListRuleGroupsResponse = exports.ListRuleGroupsResponse || (exports.ListRuleGroupsResponse = {}));
var ListRulesRequest;
(function (ListRulesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListRulesRequest");
    }
    ListRulesRequest.isa = isa;
})(ListRulesRequest = exports.ListRulesRequest || (exports.ListRulesRequest = {}));
var ListRulesResponse;
(function (ListRulesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListRulesResponse");
    }
    ListRulesResponse.isa = isa;
})(ListRulesResponse = exports.ListRulesResponse || (exports.ListRulesResponse = {}));
var ListSizeConstraintSetsRequest;
(function (ListSizeConstraintSetsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSizeConstraintSetsRequest");
    }
    ListSizeConstraintSetsRequest.isa = isa;
})(ListSizeConstraintSetsRequest = exports.ListSizeConstraintSetsRequest || (exports.ListSizeConstraintSetsRequest = {}));
var ListSizeConstraintSetsResponse;
(function (ListSizeConstraintSetsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSizeConstraintSetsResponse");
    }
    ListSizeConstraintSetsResponse.isa = isa;
})(ListSizeConstraintSetsResponse = exports.ListSizeConstraintSetsResponse || (exports.ListSizeConstraintSetsResponse = {}));
var ListSqlInjectionMatchSetsRequest;
(function (ListSqlInjectionMatchSetsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSqlInjectionMatchSetsRequest");
    }
    ListSqlInjectionMatchSetsRequest.isa = isa;
})(ListSqlInjectionMatchSetsRequest = exports.ListSqlInjectionMatchSetsRequest || (exports.ListSqlInjectionMatchSetsRequest = {}));
var ListSqlInjectionMatchSetsResponse;
(function (ListSqlInjectionMatchSetsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSqlInjectionMatchSetsResponse");
    }
    ListSqlInjectionMatchSetsResponse.isa = isa;
})(ListSqlInjectionMatchSetsResponse = exports.ListSqlInjectionMatchSetsResponse || (exports.ListSqlInjectionMatchSetsResponse = {}));
var ListSubscribedRuleGroupsRequest;
(function (ListSubscribedRuleGroupsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSubscribedRuleGroupsRequest");
    }
    ListSubscribedRuleGroupsRequest.isa = isa;
})(ListSubscribedRuleGroupsRequest = exports.ListSubscribedRuleGroupsRequest || (exports.ListSubscribedRuleGroupsRequest = {}));
var ListSubscribedRuleGroupsResponse;
(function (ListSubscribedRuleGroupsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSubscribedRuleGroupsResponse");
    }
    ListSubscribedRuleGroupsResponse.isa = isa;
})(ListSubscribedRuleGroupsResponse = exports.ListSubscribedRuleGroupsResponse || (exports.ListSubscribedRuleGroupsResponse = {}));
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
var ListWebACLsRequest;
(function (ListWebACLsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListWebACLsRequest");
    }
    ListWebACLsRequest.isa = isa;
})(ListWebACLsRequest = exports.ListWebACLsRequest || (exports.ListWebACLsRequest = {}));
var ListWebACLsResponse;
(function (ListWebACLsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListWebACLsResponse");
    }
    ListWebACLsResponse.isa = isa;
})(ListWebACLsResponse = exports.ListWebACLsResponse || (exports.ListWebACLsResponse = {}));
var ListXssMatchSetsRequest;
(function (ListXssMatchSetsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListXssMatchSetsRequest");
    }
    ListXssMatchSetsRequest.isa = isa;
})(ListXssMatchSetsRequest = exports.ListXssMatchSetsRequest || (exports.ListXssMatchSetsRequest = {}));
var ListXssMatchSetsResponse;
(function (ListXssMatchSetsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListXssMatchSetsResponse");
    }
    ListXssMatchSetsResponse.isa = isa;
})(ListXssMatchSetsResponse = exports.ListXssMatchSetsResponse || (exports.ListXssMatchSetsResponse = {}));
var LoggingConfiguration;
(function (LoggingConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "LoggingConfiguration");
    }
    LoggingConfiguration.isa = isa;
})(LoggingConfiguration = exports.LoggingConfiguration || (exports.LoggingConfiguration = {}));
var MatchFieldType;
(function (MatchFieldType) {
    MatchFieldType["ALL_QUERY_ARGS"] = "ALL_QUERY_ARGS";
    MatchFieldType["BODY"] = "BODY";
    MatchFieldType["HEADER"] = "HEADER";
    MatchFieldType["METHOD"] = "METHOD";
    MatchFieldType["QUERY_STRING"] = "QUERY_STRING";
    MatchFieldType["SINGLE_QUERY_ARG"] = "SINGLE_QUERY_ARG";
    MatchFieldType["URI"] = "URI";
})(MatchFieldType = exports.MatchFieldType || (exports.MatchFieldType = {}));
var ParameterExceptionField;
(function (ParameterExceptionField) {
    ParameterExceptionField["BYTE_MATCH_FIELD_TYPE"] = "BYTE_MATCH_FIELD_TYPE";
    ParameterExceptionField["BYTE_MATCH_POSITIONAL_CONSTRAINT"] = "BYTE_MATCH_POSITIONAL_CONSTRAINT";
    ParameterExceptionField["BYTE_MATCH_TEXT_TRANSFORMATION"] = "BYTE_MATCH_TEXT_TRANSFORMATION";
    ParameterExceptionField["CHANGE_ACTION"] = "CHANGE_ACTION";
    ParameterExceptionField["GEO_MATCH_LOCATION_TYPE"] = "GEO_MATCH_LOCATION_TYPE";
    ParameterExceptionField["GEO_MATCH_LOCATION_VALUE"] = "GEO_MATCH_LOCATION_VALUE";
    ParameterExceptionField["IPSET_TYPE"] = "IPSET_TYPE";
    ParameterExceptionField["NEXT_MARKER"] = "NEXT_MARKER";
    ParameterExceptionField["PREDICATE_TYPE"] = "PREDICATE_TYPE";
    ParameterExceptionField["RATE_KEY"] = "RATE_KEY";
    ParameterExceptionField["RESOURCE_ARN"] = "RESOURCE_ARN";
    ParameterExceptionField["RULE_TYPE"] = "RULE_TYPE";
    ParameterExceptionField["SIZE_CONSTRAINT_COMPARISON_OPERATOR"] = "SIZE_CONSTRAINT_COMPARISON_OPERATOR";
    ParameterExceptionField["SQL_INJECTION_MATCH_FIELD_TYPE"] = "SQL_INJECTION_MATCH_FIELD_TYPE";
    ParameterExceptionField["TAGS"] = "TAGS";
    ParameterExceptionField["TAG_KEYS"] = "TAG_KEYS";
    ParameterExceptionField["WAF_ACTION"] = "WAF_ACTION";
    ParameterExceptionField["WAF_OVERRIDE_ACTION"] = "WAF_OVERRIDE_ACTION";
})(ParameterExceptionField = exports.ParameterExceptionField || (exports.ParameterExceptionField = {}));
var ParameterExceptionReason;
(function (ParameterExceptionReason) {
    ParameterExceptionReason["ILLEGAL_ARGUMENT"] = "ILLEGAL_ARGUMENT";
    ParameterExceptionReason["ILLEGAL_COMBINATION"] = "ILLEGAL_COMBINATION";
    ParameterExceptionReason["INVALID_OPTION"] = "INVALID_OPTION";
    ParameterExceptionReason["INVALID_TAG_KEY"] = "INVALID_TAG_KEY";
})(ParameterExceptionReason = exports.ParameterExceptionReason || (exports.ParameterExceptionReason = {}));
var PositionalConstraint;
(function (PositionalConstraint) {
    PositionalConstraint["CONTAINS"] = "CONTAINS";
    PositionalConstraint["CONTAINS_WORD"] = "CONTAINS_WORD";
    PositionalConstraint["ENDS_WITH"] = "ENDS_WITH";
    PositionalConstraint["EXACTLY"] = "EXACTLY";
    PositionalConstraint["STARTS_WITH"] = "STARTS_WITH";
})(PositionalConstraint = exports.PositionalConstraint || (exports.PositionalConstraint = {}));
var Predicate;
(function (Predicate) {
    function isa(o) {
        return smithy_client_1.isa(o, "Predicate");
    }
    Predicate.isa = isa;
})(Predicate = exports.Predicate || (exports.Predicate = {}));
var PredicateType;
(function (PredicateType) {
    PredicateType["BYTE_MATCH"] = "ByteMatch";
    PredicateType["GEO_MATCH"] = "GeoMatch";
    PredicateType["IP_MATCH"] = "IPMatch";
    PredicateType["REGEX_MATCH"] = "RegexMatch";
    PredicateType["SIZE_CONSTRAINT"] = "SizeConstraint";
    PredicateType["SQL_INJECTION_MATCH"] = "SqlInjectionMatch";
    PredicateType["XSS_MATCH"] = "XssMatch";
})(PredicateType = exports.PredicateType || (exports.PredicateType = {}));
var PutLoggingConfigurationRequest;
(function (PutLoggingConfigurationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutLoggingConfigurationRequest");
    }
    PutLoggingConfigurationRequest.isa = isa;
})(PutLoggingConfigurationRequest = exports.PutLoggingConfigurationRequest || (exports.PutLoggingConfigurationRequest = {}));
var PutLoggingConfigurationResponse;
(function (PutLoggingConfigurationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutLoggingConfigurationResponse");
    }
    PutLoggingConfigurationResponse.isa = isa;
})(PutLoggingConfigurationResponse = exports.PutLoggingConfigurationResponse || (exports.PutLoggingConfigurationResponse = {}));
var PutPermissionPolicyRequest;
(function (PutPermissionPolicyRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutPermissionPolicyRequest");
    }
    PutPermissionPolicyRequest.isa = isa;
})(PutPermissionPolicyRequest = exports.PutPermissionPolicyRequest || (exports.PutPermissionPolicyRequest = {}));
var PutPermissionPolicyResponse;
(function (PutPermissionPolicyResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutPermissionPolicyResponse");
    }
    PutPermissionPolicyResponse.isa = isa;
})(PutPermissionPolicyResponse = exports.PutPermissionPolicyResponse || (exports.PutPermissionPolicyResponse = {}));
var RateBasedRule;
(function (RateBasedRule) {
    function isa(o) {
        return smithy_client_1.isa(o, "RateBasedRule");
    }
    RateBasedRule.isa = isa;
})(RateBasedRule = exports.RateBasedRule || (exports.RateBasedRule = {}));
var RateKey;
(function (RateKey) {
    RateKey["IP"] = "IP";
})(RateKey = exports.RateKey || (exports.RateKey = {}));
var RegexMatchSet;
(function (RegexMatchSet) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegexMatchSet");
    }
    RegexMatchSet.isa = isa;
})(RegexMatchSet = exports.RegexMatchSet || (exports.RegexMatchSet = {}));
var RegexMatchSetSummary;
(function (RegexMatchSetSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegexMatchSetSummary");
    }
    RegexMatchSetSummary.isa = isa;
})(RegexMatchSetSummary = exports.RegexMatchSetSummary || (exports.RegexMatchSetSummary = {}));
var RegexMatchSetUpdate;
(function (RegexMatchSetUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegexMatchSetUpdate");
    }
    RegexMatchSetUpdate.isa = isa;
})(RegexMatchSetUpdate = exports.RegexMatchSetUpdate || (exports.RegexMatchSetUpdate = {}));
var RegexMatchTuple;
(function (RegexMatchTuple) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegexMatchTuple");
    }
    RegexMatchTuple.isa = isa;
})(RegexMatchTuple = exports.RegexMatchTuple || (exports.RegexMatchTuple = {}));
var RegexPatternSet;
(function (RegexPatternSet) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegexPatternSet");
    }
    RegexPatternSet.isa = isa;
})(RegexPatternSet = exports.RegexPatternSet || (exports.RegexPatternSet = {}));
var RegexPatternSetSummary;
(function (RegexPatternSetSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegexPatternSetSummary");
    }
    RegexPatternSetSummary.isa = isa;
})(RegexPatternSetSummary = exports.RegexPatternSetSummary || (exports.RegexPatternSetSummary = {}));
var RegexPatternSetUpdate;
(function (RegexPatternSetUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegexPatternSetUpdate");
    }
    RegexPatternSetUpdate.isa = isa;
})(RegexPatternSetUpdate = exports.RegexPatternSetUpdate || (exports.RegexPatternSetUpdate = {}));
var Rule;
(function (Rule) {
    function isa(o) {
        return smithy_client_1.isa(o, "Rule");
    }
    Rule.isa = isa;
})(Rule = exports.Rule || (exports.Rule = {}));
var RuleGroup;
(function (RuleGroup) {
    function isa(o) {
        return smithy_client_1.isa(o, "RuleGroup");
    }
    RuleGroup.isa = isa;
})(RuleGroup = exports.RuleGroup || (exports.RuleGroup = {}));
var RuleGroupSummary;
(function (RuleGroupSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "RuleGroupSummary");
    }
    RuleGroupSummary.isa = isa;
})(RuleGroupSummary = exports.RuleGroupSummary || (exports.RuleGroupSummary = {}));
var RuleGroupUpdate;
(function (RuleGroupUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "RuleGroupUpdate");
    }
    RuleGroupUpdate.isa = isa;
})(RuleGroupUpdate = exports.RuleGroupUpdate || (exports.RuleGroupUpdate = {}));
var RuleSummary;
(function (RuleSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "RuleSummary");
    }
    RuleSummary.isa = isa;
})(RuleSummary = exports.RuleSummary || (exports.RuleSummary = {}));
var RuleUpdate;
(function (RuleUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "RuleUpdate");
    }
    RuleUpdate.isa = isa;
})(RuleUpdate = exports.RuleUpdate || (exports.RuleUpdate = {}));
var SampledHTTPRequest;
(function (SampledHTTPRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SampledHTTPRequest");
    }
    SampledHTTPRequest.isa = isa;
})(SampledHTTPRequest = exports.SampledHTTPRequest || (exports.SampledHTTPRequest = {}));
var SizeConstraint;
(function (SizeConstraint) {
    function isa(o) {
        return smithy_client_1.isa(o, "SizeConstraint");
    }
    SizeConstraint.isa = isa;
})(SizeConstraint = exports.SizeConstraint || (exports.SizeConstraint = {}));
var SizeConstraintSet;
(function (SizeConstraintSet) {
    function isa(o) {
        return smithy_client_1.isa(o, "SizeConstraintSet");
    }
    SizeConstraintSet.isa = isa;
})(SizeConstraintSet = exports.SizeConstraintSet || (exports.SizeConstraintSet = {}));
var SizeConstraintSetSummary;
(function (SizeConstraintSetSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "SizeConstraintSetSummary");
    }
    SizeConstraintSetSummary.isa = isa;
})(SizeConstraintSetSummary = exports.SizeConstraintSetSummary || (exports.SizeConstraintSetSummary = {}));
var SizeConstraintSetUpdate;
(function (SizeConstraintSetUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "SizeConstraintSetUpdate");
    }
    SizeConstraintSetUpdate.isa = isa;
})(SizeConstraintSetUpdate = exports.SizeConstraintSetUpdate || (exports.SizeConstraintSetUpdate = {}));
var SqlInjectionMatchSet;
(function (SqlInjectionMatchSet) {
    function isa(o) {
        return smithy_client_1.isa(o, "SqlInjectionMatchSet");
    }
    SqlInjectionMatchSet.isa = isa;
})(SqlInjectionMatchSet = exports.SqlInjectionMatchSet || (exports.SqlInjectionMatchSet = {}));
var SqlInjectionMatchSetSummary;
(function (SqlInjectionMatchSetSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "SqlInjectionMatchSetSummary");
    }
    SqlInjectionMatchSetSummary.isa = isa;
})(SqlInjectionMatchSetSummary = exports.SqlInjectionMatchSetSummary || (exports.SqlInjectionMatchSetSummary = {}));
var SqlInjectionMatchSetUpdate;
(function (SqlInjectionMatchSetUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "SqlInjectionMatchSetUpdate");
    }
    SqlInjectionMatchSetUpdate.isa = isa;
})(SqlInjectionMatchSetUpdate = exports.SqlInjectionMatchSetUpdate || (exports.SqlInjectionMatchSetUpdate = {}));
var SqlInjectionMatchTuple;
(function (SqlInjectionMatchTuple) {
    function isa(o) {
        return smithy_client_1.isa(o, "SqlInjectionMatchTuple");
    }
    SqlInjectionMatchTuple.isa = isa;
})(SqlInjectionMatchTuple = exports.SqlInjectionMatchTuple || (exports.SqlInjectionMatchTuple = {}));
var SubscribedRuleGroupSummary;
(function (SubscribedRuleGroupSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "SubscribedRuleGroupSummary");
    }
    SubscribedRuleGroupSummary.isa = isa;
})(SubscribedRuleGroupSummary = exports.SubscribedRuleGroupSummary || (exports.SubscribedRuleGroupSummary = {}));
var Tag;
(function (Tag) {
    function isa(o) {
        return smithy_client_1.isa(o, "Tag");
    }
    Tag.isa = isa;
})(Tag = exports.Tag || (exports.Tag = {}));
var TagInfoForResource;
(function (TagInfoForResource) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagInfoForResource");
    }
    TagInfoForResource.isa = isa;
})(TagInfoForResource = exports.TagInfoForResource || (exports.TagInfoForResource = {}));
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
var TextTransformation;
(function (TextTransformation) {
    TextTransformation["CMD_LINE"] = "CMD_LINE";
    TextTransformation["COMPRESS_WHITE_SPACE"] = "COMPRESS_WHITE_SPACE";
    TextTransformation["HTML_ENTITY_DECODE"] = "HTML_ENTITY_DECODE";
    TextTransformation["LOWERCASE"] = "LOWERCASE";
    TextTransformation["NONE"] = "NONE";
    TextTransformation["URL_DECODE"] = "URL_DECODE";
})(TextTransformation = exports.TextTransformation || (exports.TextTransformation = {}));
var TimeWindow;
(function (TimeWindow) {
    function isa(o) {
        return smithy_client_1.isa(o, "TimeWindow");
    }
    TimeWindow.isa = isa;
})(TimeWindow = exports.TimeWindow || (exports.TimeWindow = {}));
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
var UpdateByteMatchSetRequest;
(function (UpdateByteMatchSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateByteMatchSetRequest");
    }
    UpdateByteMatchSetRequest.isa = isa;
})(UpdateByteMatchSetRequest = exports.UpdateByteMatchSetRequest || (exports.UpdateByteMatchSetRequest = {}));
var UpdateByteMatchSetResponse;
(function (UpdateByteMatchSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateByteMatchSetResponse");
    }
    UpdateByteMatchSetResponse.isa = isa;
})(UpdateByteMatchSetResponse = exports.UpdateByteMatchSetResponse || (exports.UpdateByteMatchSetResponse = {}));
var UpdateGeoMatchSetRequest;
(function (UpdateGeoMatchSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateGeoMatchSetRequest");
    }
    UpdateGeoMatchSetRequest.isa = isa;
})(UpdateGeoMatchSetRequest = exports.UpdateGeoMatchSetRequest || (exports.UpdateGeoMatchSetRequest = {}));
var UpdateGeoMatchSetResponse;
(function (UpdateGeoMatchSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateGeoMatchSetResponse");
    }
    UpdateGeoMatchSetResponse.isa = isa;
})(UpdateGeoMatchSetResponse = exports.UpdateGeoMatchSetResponse || (exports.UpdateGeoMatchSetResponse = {}));
var UpdateIPSetRequest;
(function (UpdateIPSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateIPSetRequest");
    }
    UpdateIPSetRequest.isa = isa;
})(UpdateIPSetRequest = exports.UpdateIPSetRequest || (exports.UpdateIPSetRequest = {}));
var UpdateIPSetResponse;
(function (UpdateIPSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateIPSetResponse");
    }
    UpdateIPSetResponse.isa = isa;
})(UpdateIPSetResponse = exports.UpdateIPSetResponse || (exports.UpdateIPSetResponse = {}));
var UpdateRateBasedRuleRequest;
(function (UpdateRateBasedRuleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateRateBasedRuleRequest");
    }
    UpdateRateBasedRuleRequest.isa = isa;
})(UpdateRateBasedRuleRequest = exports.UpdateRateBasedRuleRequest || (exports.UpdateRateBasedRuleRequest = {}));
var UpdateRateBasedRuleResponse;
(function (UpdateRateBasedRuleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateRateBasedRuleResponse");
    }
    UpdateRateBasedRuleResponse.isa = isa;
})(UpdateRateBasedRuleResponse = exports.UpdateRateBasedRuleResponse || (exports.UpdateRateBasedRuleResponse = {}));
var UpdateRegexMatchSetRequest;
(function (UpdateRegexMatchSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateRegexMatchSetRequest");
    }
    UpdateRegexMatchSetRequest.isa = isa;
})(UpdateRegexMatchSetRequest = exports.UpdateRegexMatchSetRequest || (exports.UpdateRegexMatchSetRequest = {}));
var UpdateRegexMatchSetResponse;
(function (UpdateRegexMatchSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateRegexMatchSetResponse");
    }
    UpdateRegexMatchSetResponse.isa = isa;
})(UpdateRegexMatchSetResponse = exports.UpdateRegexMatchSetResponse || (exports.UpdateRegexMatchSetResponse = {}));
var UpdateRegexPatternSetRequest;
(function (UpdateRegexPatternSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateRegexPatternSetRequest");
    }
    UpdateRegexPatternSetRequest.isa = isa;
})(UpdateRegexPatternSetRequest = exports.UpdateRegexPatternSetRequest || (exports.UpdateRegexPatternSetRequest = {}));
var UpdateRegexPatternSetResponse;
(function (UpdateRegexPatternSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateRegexPatternSetResponse");
    }
    UpdateRegexPatternSetResponse.isa = isa;
})(UpdateRegexPatternSetResponse = exports.UpdateRegexPatternSetResponse || (exports.UpdateRegexPatternSetResponse = {}));
var UpdateRuleGroupRequest;
(function (UpdateRuleGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateRuleGroupRequest");
    }
    UpdateRuleGroupRequest.isa = isa;
})(UpdateRuleGroupRequest = exports.UpdateRuleGroupRequest || (exports.UpdateRuleGroupRequest = {}));
var UpdateRuleGroupResponse;
(function (UpdateRuleGroupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateRuleGroupResponse");
    }
    UpdateRuleGroupResponse.isa = isa;
})(UpdateRuleGroupResponse = exports.UpdateRuleGroupResponse || (exports.UpdateRuleGroupResponse = {}));
var UpdateRuleRequest;
(function (UpdateRuleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateRuleRequest");
    }
    UpdateRuleRequest.isa = isa;
})(UpdateRuleRequest = exports.UpdateRuleRequest || (exports.UpdateRuleRequest = {}));
var UpdateRuleResponse;
(function (UpdateRuleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateRuleResponse");
    }
    UpdateRuleResponse.isa = isa;
})(UpdateRuleResponse = exports.UpdateRuleResponse || (exports.UpdateRuleResponse = {}));
var UpdateSizeConstraintSetRequest;
(function (UpdateSizeConstraintSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateSizeConstraintSetRequest");
    }
    UpdateSizeConstraintSetRequest.isa = isa;
})(UpdateSizeConstraintSetRequest = exports.UpdateSizeConstraintSetRequest || (exports.UpdateSizeConstraintSetRequest = {}));
var UpdateSizeConstraintSetResponse;
(function (UpdateSizeConstraintSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateSizeConstraintSetResponse");
    }
    UpdateSizeConstraintSetResponse.isa = isa;
})(UpdateSizeConstraintSetResponse = exports.UpdateSizeConstraintSetResponse || (exports.UpdateSizeConstraintSetResponse = {}));
var UpdateSqlInjectionMatchSetRequest;
(function (UpdateSqlInjectionMatchSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateSqlInjectionMatchSetRequest");
    }
    UpdateSqlInjectionMatchSetRequest.isa = isa;
})(UpdateSqlInjectionMatchSetRequest = exports.UpdateSqlInjectionMatchSetRequest || (exports.UpdateSqlInjectionMatchSetRequest = {}));
var UpdateSqlInjectionMatchSetResponse;
(function (UpdateSqlInjectionMatchSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateSqlInjectionMatchSetResponse");
    }
    UpdateSqlInjectionMatchSetResponse.isa = isa;
})(UpdateSqlInjectionMatchSetResponse = exports.UpdateSqlInjectionMatchSetResponse || (exports.UpdateSqlInjectionMatchSetResponse = {}));
var UpdateWebACLRequest;
(function (UpdateWebACLRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateWebACLRequest");
    }
    UpdateWebACLRequest.isa = isa;
})(UpdateWebACLRequest = exports.UpdateWebACLRequest || (exports.UpdateWebACLRequest = {}));
var UpdateWebACLResponse;
(function (UpdateWebACLResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateWebACLResponse");
    }
    UpdateWebACLResponse.isa = isa;
})(UpdateWebACLResponse = exports.UpdateWebACLResponse || (exports.UpdateWebACLResponse = {}));
var UpdateXssMatchSetRequest;
(function (UpdateXssMatchSetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateXssMatchSetRequest");
    }
    UpdateXssMatchSetRequest.isa = isa;
})(UpdateXssMatchSetRequest = exports.UpdateXssMatchSetRequest || (exports.UpdateXssMatchSetRequest = {}));
var UpdateXssMatchSetResponse;
(function (UpdateXssMatchSetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateXssMatchSetResponse");
    }
    UpdateXssMatchSetResponse.isa = isa;
})(UpdateXssMatchSetResponse = exports.UpdateXssMatchSetResponse || (exports.UpdateXssMatchSetResponse = {}));
var WAFBadRequestException;
(function (WAFBadRequestException) {
    function isa(o) {
        return smithy_client_1.isa(o, "WAFBadRequestException");
    }
    WAFBadRequestException.isa = isa;
})(WAFBadRequestException = exports.WAFBadRequestException || (exports.WAFBadRequestException = {}));
var WAFDisallowedNameException;
(function (WAFDisallowedNameException) {
    function isa(o) {
        return smithy_client_1.isa(o, "WAFDisallowedNameException");
    }
    WAFDisallowedNameException.isa = isa;
})(WAFDisallowedNameException = exports.WAFDisallowedNameException || (exports.WAFDisallowedNameException = {}));
var WAFInternalErrorException;
(function (WAFInternalErrorException) {
    function isa(o) {
        return smithy_client_1.isa(o, "WAFInternalErrorException");
    }
    WAFInternalErrorException.isa = isa;
})(WAFInternalErrorException = exports.WAFInternalErrorException || (exports.WAFInternalErrorException = {}));
var WAFInvalidAccountException;
(function (WAFInvalidAccountException) {
    function isa(o) {
        return smithy_client_1.isa(o, "WAFInvalidAccountException");
    }
    WAFInvalidAccountException.isa = isa;
})(WAFInvalidAccountException = exports.WAFInvalidAccountException || (exports.WAFInvalidAccountException = {}));
var WAFInvalidOperationException;
(function (WAFInvalidOperationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "WAFInvalidOperationException");
    }
    WAFInvalidOperationException.isa = isa;
})(WAFInvalidOperationException = exports.WAFInvalidOperationException || (exports.WAFInvalidOperationException = {}));
var WAFInvalidParameterException;
(function (WAFInvalidParameterException) {
    function isa(o) {
        return smithy_client_1.isa(o, "WAFInvalidParameterException");
    }
    WAFInvalidParameterException.isa = isa;
})(WAFInvalidParameterException = exports.WAFInvalidParameterException || (exports.WAFInvalidParameterException = {}));
var WAFInvalidPermissionPolicyException;
(function (WAFInvalidPermissionPolicyException) {
    function isa(o) {
        return smithy_client_1.isa(o, "WAFInvalidPermissionPolicyException");
    }
    WAFInvalidPermissionPolicyException.isa = isa;
})(WAFInvalidPermissionPolicyException = exports.WAFInvalidPermissionPolicyException || (exports.WAFInvalidPermissionPolicyException = {}));
var WAFInvalidRegexPatternException;
(function (WAFInvalidRegexPatternException) {
    function isa(o) {
        return smithy_client_1.isa(o, "WAFInvalidRegexPatternException");
    }
    WAFInvalidRegexPatternException.isa = isa;
})(WAFInvalidRegexPatternException = exports.WAFInvalidRegexPatternException || (exports.WAFInvalidRegexPatternException = {}));
var WAFLimitsExceededException;
(function (WAFLimitsExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "WAFLimitsExceededException");
    }
    WAFLimitsExceededException.isa = isa;
})(WAFLimitsExceededException = exports.WAFLimitsExceededException || (exports.WAFLimitsExceededException = {}));
var WAFNonEmptyEntityException;
(function (WAFNonEmptyEntityException) {
    function isa(o) {
        return smithy_client_1.isa(o, "WAFNonEmptyEntityException");
    }
    WAFNonEmptyEntityException.isa = isa;
})(WAFNonEmptyEntityException = exports.WAFNonEmptyEntityException || (exports.WAFNonEmptyEntityException = {}));
var WAFNonexistentContainerException;
(function (WAFNonexistentContainerException) {
    function isa(o) {
        return smithy_client_1.isa(o, "WAFNonexistentContainerException");
    }
    WAFNonexistentContainerException.isa = isa;
})(WAFNonexistentContainerException = exports.WAFNonexistentContainerException || (exports.WAFNonexistentContainerException = {}));
var WAFNonexistentItemException;
(function (WAFNonexistentItemException) {
    function isa(o) {
        return smithy_client_1.isa(o, "WAFNonexistentItemException");
    }
    WAFNonexistentItemException.isa = isa;
})(WAFNonexistentItemException = exports.WAFNonexistentItemException || (exports.WAFNonexistentItemException = {}));
var WAFReferencedItemException;
(function (WAFReferencedItemException) {
    function isa(o) {
        return smithy_client_1.isa(o, "WAFReferencedItemException");
    }
    WAFReferencedItemException.isa = isa;
})(WAFReferencedItemException = exports.WAFReferencedItemException || (exports.WAFReferencedItemException = {}));
var WAFServiceLinkedRoleErrorException;
(function (WAFServiceLinkedRoleErrorException) {
    function isa(o) {
        return smithy_client_1.isa(o, "WAFServiceLinkedRoleErrorException");
    }
    WAFServiceLinkedRoleErrorException.isa = isa;
})(WAFServiceLinkedRoleErrorException = exports.WAFServiceLinkedRoleErrorException || (exports.WAFServiceLinkedRoleErrorException = {}));
var WAFStaleDataException;
(function (WAFStaleDataException) {
    function isa(o) {
        return smithy_client_1.isa(o, "WAFStaleDataException");
    }
    WAFStaleDataException.isa = isa;
})(WAFStaleDataException = exports.WAFStaleDataException || (exports.WAFStaleDataException = {}));
var WAFSubscriptionNotFoundException;
(function (WAFSubscriptionNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "WAFSubscriptionNotFoundException");
    }
    WAFSubscriptionNotFoundException.isa = isa;
})(WAFSubscriptionNotFoundException = exports.WAFSubscriptionNotFoundException || (exports.WAFSubscriptionNotFoundException = {}));
var WAFTagOperationException;
(function (WAFTagOperationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "WAFTagOperationException");
    }
    WAFTagOperationException.isa = isa;
})(WAFTagOperationException = exports.WAFTagOperationException || (exports.WAFTagOperationException = {}));
var WAFTagOperationInternalErrorException;
(function (WAFTagOperationInternalErrorException) {
    function isa(o) {
        return smithy_client_1.isa(o, "WAFTagOperationInternalErrorException");
    }
    WAFTagOperationInternalErrorException.isa = isa;
})(WAFTagOperationInternalErrorException = exports.WAFTagOperationInternalErrorException || (exports.WAFTagOperationInternalErrorException = {}));
var WafAction;
(function (WafAction) {
    function isa(o) {
        return smithy_client_1.isa(o, "WafAction");
    }
    WafAction.isa = isa;
})(WafAction = exports.WafAction || (exports.WafAction = {}));
var WafActionType;
(function (WafActionType) {
    WafActionType["ALLOW"] = "ALLOW";
    WafActionType["BLOCK"] = "BLOCK";
    WafActionType["COUNT"] = "COUNT";
})(WafActionType = exports.WafActionType || (exports.WafActionType = {}));
var WafOverrideAction;
(function (WafOverrideAction) {
    function isa(o) {
        return smithy_client_1.isa(o, "WafOverrideAction");
    }
    WafOverrideAction.isa = isa;
})(WafOverrideAction = exports.WafOverrideAction || (exports.WafOverrideAction = {}));
var WafOverrideActionType;
(function (WafOverrideActionType) {
    WafOverrideActionType["COUNT"] = "COUNT";
    WafOverrideActionType["NONE"] = "NONE";
})(WafOverrideActionType = exports.WafOverrideActionType || (exports.WafOverrideActionType = {}));
var WafRuleType;
(function (WafRuleType) {
    WafRuleType["GROUP"] = "GROUP";
    WafRuleType["RATE_BASED"] = "RATE_BASED";
    WafRuleType["REGULAR"] = "REGULAR";
})(WafRuleType = exports.WafRuleType || (exports.WafRuleType = {}));
var WebACL;
(function (WebACL) {
    function isa(o) {
        return smithy_client_1.isa(o, "WebACL");
    }
    WebACL.isa = isa;
})(WebACL = exports.WebACL || (exports.WebACL = {}));
var WebACLSummary;
(function (WebACLSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "WebACLSummary");
    }
    WebACLSummary.isa = isa;
})(WebACLSummary = exports.WebACLSummary || (exports.WebACLSummary = {}));
var WebACLUpdate;
(function (WebACLUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "WebACLUpdate");
    }
    WebACLUpdate.isa = isa;
})(WebACLUpdate = exports.WebACLUpdate || (exports.WebACLUpdate = {}));
var XssMatchSet;
(function (XssMatchSet) {
    function isa(o) {
        return smithy_client_1.isa(o, "XssMatchSet");
    }
    XssMatchSet.isa = isa;
})(XssMatchSet = exports.XssMatchSet || (exports.XssMatchSet = {}));
var XssMatchSetSummary;
(function (XssMatchSetSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "XssMatchSetSummary");
    }
    XssMatchSetSummary.isa = isa;
})(XssMatchSetSummary = exports.XssMatchSetSummary || (exports.XssMatchSetSummary = {}));
var XssMatchSetUpdate;
(function (XssMatchSetUpdate) {
    function isa(o) {
        return smithy_client_1.isa(o, "XssMatchSetUpdate");
    }
    XssMatchSetUpdate.isa = isa;
})(XssMatchSetUpdate = exports.XssMatchSetUpdate || (exports.XssMatchSetUpdate = {}));
var XssMatchTuple;
(function (XssMatchTuple) {
    function isa(o) {
        return smithy_client_1.isa(o, "XssMatchTuple");
    }
    XssMatchTuple.isa = isa;
})(XssMatchTuple = exports.XssMatchTuple || (exports.XssMatchTuple = {}));
//# sourceMappingURL=index.js.map