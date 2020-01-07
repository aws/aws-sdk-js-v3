"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AllQueryArguments;
(function (AllQueryArguments) {
    function isa(o) {
        return smithy_client_1.isa(o, "AllQueryArguments");
    }
    AllQueryArguments.isa = isa;
})(AllQueryArguments = exports.AllQueryArguments || (exports.AllQueryArguments = {}));
var AllowAction;
(function (AllowAction) {
    function isa(o) {
        return smithy_client_1.isa(o, "AllowAction");
    }
    AllowAction.isa = isa;
})(AllowAction = exports.AllowAction || (exports.AllowAction = {}));
var AndStatement;
(function (AndStatement) {
    function isa(o) {
        return smithy_client_1.isa(o, "AndStatement");
    }
    AndStatement.isa = isa;
})(AndStatement = exports.AndStatement || (exports.AndStatement = {}));
var AssociateWebACLRequest;
(function (AssociateWebACLRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateWebACLRequest");
    }
    AssociateWebACLRequest.isa = isa;
})(AssociateWebACLRequest = exports.AssociateWebACLRequest || (exports.AssociateWebACLRequest = {}));
var AssociateWebACLResponse;
(function (AssociateWebACLResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateWebACLResponse");
    }
    AssociateWebACLResponse.isa = isa;
})(AssociateWebACLResponse = exports.AssociateWebACLResponse || (exports.AssociateWebACLResponse = {}));
var BlockAction;
(function (BlockAction) {
    function isa(o) {
        return smithy_client_1.isa(o, "BlockAction");
    }
    BlockAction.isa = isa;
})(BlockAction = exports.BlockAction || (exports.BlockAction = {}));
var Body;
(function (Body) {
    function isa(o) {
        return smithy_client_1.isa(o, "Body");
    }
    Body.isa = isa;
})(Body = exports.Body || (exports.Body = {}));
var ByteMatchStatement;
(function (ByteMatchStatement) {
    function isa(o) {
        return smithy_client_1.isa(o, "ByteMatchStatement");
    }
    ByteMatchStatement.isa = isa;
})(ByteMatchStatement = exports.ByteMatchStatement || (exports.ByteMatchStatement = {}));
var CheckCapacityRequest;
(function (CheckCapacityRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CheckCapacityRequest");
    }
    CheckCapacityRequest.isa = isa;
})(CheckCapacityRequest = exports.CheckCapacityRequest || (exports.CheckCapacityRequest = {}));
var CheckCapacityResponse;
(function (CheckCapacityResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CheckCapacityResponse");
    }
    CheckCapacityResponse.isa = isa;
})(CheckCapacityResponse = exports.CheckCapacityResponse || (exports.CheckCapacityResponse = {}));
var ComparisonOperator;
(function (ComparisonOperator) {
    ComparisonOperator["EQ"] = "EQ";
    ComparisonOperator["GE"] = "GE";
    ComparisonOperator["GT"] = "GT";
    ComparisonOperator["LE"] = "LE";
    ComparisonOperator["LT"] = "LT";
    ComparisonOperator["NE"] = "NE";
})(ComparisonOperator = exports.ComparisonOperator || (exports.ComparisonOperator = {}));
var CountAction;
(function (CountAction) {
    function isa(o) {
        return smithy_client_1.isa(o, "CountAction");
    }
    CountAction.isa = isa;
})(CountAction = exports.CountAction || (exports.CountAction = {}));
var CountryCode;
(function (CountryCode) {
    CountryCode["AD"] = "AD";
    CountryCode["AE"] = "AE";
    CountryCode["AF"] = "AF";
    CountryCode["AG"] = "AG";
    CountryCode["AI"] = "AI";
    CountryCode["AL"] = "AL";
    CountryCode["AM"] = "AM";
    CountryCode["AO"] = "AO";
    CountryCode["AQ"] = "AQ";
    CountryCode["AR"] = "AR";
    CountryCode["AS"] = "AS";
    CountryCode["AT"] = "AT";
    CountryCode["AU"] = "AU";
    CountryCode["AW"] = "AW";
    CountryCode["AX"] = "AX";
    CountryCode["AZ"] = "AZ";
    CountryCode["BA"] = "BA";
    CountryCode["BB"] = "BB";
    CountryCode["BD"] = "BD";
    CountryCode["BE"] = "BE";
    CountryCode["BF"] = "BF";
    CountryCode["BG"] = "BG";
    CountryCode["BH"] = "BH";
    CountryCode["BI"] = "BI";
    CountryCode["BJ"] = "BJ";
    CountryCode["BL"] = "BL";
    CountryCode["BM"] = "BM";
    CountryCode["BN"] = "BN";
    CountryCode["BO"] = "BO";
    CountryCode["BQ"] = "BQ";
    CountryCode["BR"] = "BR";
    CountryCode["BS"] = "BS";
    CountryCode["BT"] = "BT";
    CountryCode["BV"] = "BV";
    CountryCode["BW"] = "BW";
    CountryCode["BY"] = "BY";
    CountryCode["BZ"] = "BZ";
    CountryCode["CA"] = "CA";
    CountryCode["CC"] = "CC";
    CountryCode["CD"] = "CD";
    CountryCode["CF"] = "CF";
    CountryCode["CG"] = "CG";
    CountryCode["CH"] = "CH";
    CountryCode["CI"] = "CI";
    CountryCode["CK"] = "CK";
    CountryCode["CL"] = "CL";
    CountryCode["CM"] = "CM";
    CountryCode["CN"] = "CN";
    CountryCode["CO"] = "CO";
    CountryCode["CR"] = "CR";
    CountryCode["CU"] = "CU";
    CountryCode["CV"] = "CV";
    CountryCode["CW"] = "CW";
    CountryCode["CX"] = "CX";
    CountryCode["CY"] = "CY";
    CountryCode["CZ"] = "CZ";
    CountryCode["DE"] = "DE";
    CountryCode["DJ"] = "DJ";
    CountryCode["DK"] = "DK";
    CountryCode["DM"] = "DM";
    CountryCode["DO"] = "DO";
    CountryCode["DZ"] = "DZ";
    CountryCode["EC"] = "EC";
    CountryCode["EE"] = "EE";
    CountryCode["EG"] = "EG";
    CountryCode["EH"] = "EH";
    CountryCode["ER"] = "ER";
    CountryCode["ES"] = "ES";
    CountryCode["ET"] = "ET";
    CountryCode["FI"] = "FI";
    CountryCode["FJ"] = "FJ";
    CountryCode["FK"] = "FK";
    CountryCode["FM"] = "FM";
    CountryCode["FO"] = "FO";
    CountryCode["FR"] = "FR";
    CountryCode["GA"] = "GA";
    CountryCode["GB"] = "GB";
    CountryCode["GD"] = "GD";
    CountryCode["GE"] = "GE";
    CountryCode["GF"] = "GF";
    CountryCode["GG"] = "GG";
    CountryCode["GH"] = "GH";
    CountryCode["GI"] = "GI";
    CountryCode["GL"] = "GL";
    CountryCode["GM"] = "GM";
    CountryCode["GN"] = "GN";
    CountryCode["GP"] = "GP";
    CountryCode["GQ"] = "GQ";
    CountryCode["GR"] = "GR";
    CountryCode["GS"] = "GS";
    CountryCode["GT"] = "GT";
    CountryCode["GU"] = "GU";
    CountryCode["GW"] = "GW";
    CountryCode["GY"] = "GY";
    CountryCode["HK"] = "HK";
    CountryCode["HM"] = "HM";
    CountryCode["HN"] = "HN";
    CountryCode["HR"] = "HR";
    CountryCode["HT"] = "HT";
    CountryCode["HU"] = "HU";
    CountryCode["ID"] = "ID";
    CountryCode["IE"] = "IE";
    CountryCode["IL"] = "IL";
    CountryCode["IM"] = "IM";
    CountryCode["IN"] = "IN";
    CountryCode["IO"] = "IO";
    CountryCode["IQ"] = "IQ";
    CountryCode["IR"] = "IR";
    CountryCode["IS"] = "IS";
    CountryCode["IT"] = "IT";
    CountryCode["JE"] = "JE";
    CountryCode["JM"] = "JM";
    CountryCode["JO"] = "JO";
    CountryCode["JP"] = "JP";
    CountryCode["KE"] = "KE";
    CountryCode["KG"] = "KG";
    CountryCode["KH"] = "KH";
    CountryCode["KI"] = "KI";
    CountryCode["KM"] = "KM";
    CountryCode["KN"] = "KN";
    CountryCode["KP"] = "KP";
    CountryCode["KR"] = "KR";
    CountryCode["KW"] = "KW";
    CountryCode["KY"] = "KY";
    CountryCode["KZ"] = "KZ";
    CountryCode["LA"] = "LA";
    CountryCode["LB"] = "LB";
    CountryCode["LC"] = "LC";
    CountryCode["LI"] = "LI";
    CountryCode["LK"] = "LK";
    CountryCode["LR"] = "LR";
    CountryCode["LS"] = "LS";
    CountryCode["LT"] = "LT";
    CountryCode["LU"] = "LU";
    CountryCode["LV"] = "LV";
    CountryCode["LY"] = "LY";
    CountryCode["MA"] = "MA";
    CountryCode["MC"] = "MC";
    CountryCode["MD"] = "MD";
    CountryCode["ME"] = "ME";
    CountryCode["MF"] = "MF";
    CountryCode["MG"] = "MG";
    CountryCode["MH"] = "MH";
    CountryCode["MK"] = "MK";
    CountryCode["ML"] = "ML";
    CountryCode["MM"] = "MM";
    CountryCode["MN"] = "MN";
    CountryCode["MO"] = "MO";
    CountryCode["MP"] = "MP";
    CountryCode["MQ"] = "MQ";
    CountryCode["MR"] = "MR";
    CountryCode["MS"] = "MS";
    CountryCode["MT"] = "MT";
    CountryCode["MU"] = "MU";
    CountryCode["MV"] = "MV";
    CountryCode["MW"] = "MW";
    CountryCode["MX"] = "MX";
    CountryCode["MY"] = "MY";
    CountryCode["MZ"] = "MZ";
    CountryCode["NA"] = "NA";
    CountryCode["NC"] = "NC";
    CountryCode["NE"] = "NE";
    CountryCode["NF"] = "NF";
    CountryCode["NG"] = "NG";
    CountryCode["NI"] = "NI";
    CountryCode["NL"] = "NL";
    CountryCode["NO"] = "NO";
    CountryCode["NP"] = "NP";
    CountryCode["NR"] = "NR";
    CountryCode["NU"] = "NU";
    CountryCode["NZ"] = "NZ";
    CountryCode["OM"] = "OM";
    CountryCode["PA"] = "PA";
    CountryCode["PE"] = "PE";
    CountryCode["PF"] = "PF";
    CountryCode["PG"] = "PG";
    CountryCode["PH"] = "PH";
    CountryCode["PK"] = "PK";
    CountryCode["PL"] = "PL";
    CountryCode["PM"] = "PM";
    CountryCode["PN"] = "PN";
    CountryCode["PR"] = "PR";
    CountryCode["PS"] = "PS";
    CountryCode["PT"] = "PT";
    CountryCode["PW"] = "PW";
    CountryCode["PY"] = "PY";
    CountryCode["QA"] = "QA";
    CountryCode["RE"] = "RE";
    CountryCode["RO"] = "RO";
    CountryCode["RS"] = "RS";
    CountryCode["RU"] = "RU";
    CountryCode["RW"] = "RW";
    CountryCode["SA"] = "SA";
    CountryCode["SB"] = "SB";
    CountryCode["SC"] = "SC";
    CountryCode["SD"] = "SD";
    CountryCode["SE"] = "SE";
    CountryCode["SG"] = "SG";
    CountryCode["SH"] = "SH";
    CountryCode["SI"] = "SI";
    CountryCode["SJ"] = "SJ";
    CountryCode["SK"] = "SK";
    CountryCode["SL"] = "SL";
    CountryCode["SM"] = "SM";
    CountryCode["SN"] = "SN";
    CountryCode["SO"] = "SO";
    CountryCode["SR"] = "SR";
    CountryCode["SS"] = "SS";
    CountryCode["ST"] = "ST";
    CountryCode["SV"] = "SV";
    CountryCode["SX"] = "SX";
    CountryCode["SY"] = "SY";
    CountryCode["SZ"] = "SZ";
    CountryCode["TC"] = "TC";
    CountryCode["TD"] = "TD";
    CountryCode["TF"] = "TF";
    CountryCode["TG"] = "TG";
    CountryCode["TH"] = "TH";
    CountryCode["TJ"] = "TJ";
    CountryCode["TK"] = "TK";
    CountryCode["TL"] = "TL";
    CountryCode["TM"] = "TM";
    CountryCode["TN"] = "TN";
    CountryCode["TO"] = "TO";
    CountryCode["TR"] = "TR";
    CountryCode["TT"] = "TT";
    CountryCode["TV"] = "TV";
    CountryCode["TW"] = "TW";
    CountryCode["TZ"] = "TZ";
    CountryCode["UA"] = "UA";
    CountryCode["UG"] = "UG";
    CountryCode["UM"] = "UM";
    CountryCode["US"] = "US";
    CountryCode["UY"] = "UY";
    CountryCode["UZ"] = "UZ";
    CountryCode["VA"] = "VA";
    CountryCode["VC"] = "VC";
    CountryCode["VE"] = "VE";
    CountryCode["VG"] = "VG";
    CountryCode["VI"] = "VI";
    CountryCode["VN"] = "VN";
    CountryCode["VU"] = "VU";
    CountryCode["WF"] = "WF";
    CountryCode["WS"] = "WS";
    CountryCode["YE"] = "YE";
    CountryCode["YT"] = "YT";
    CountryCode["ZA"] = "ZA";
    CountryCode["ZM"] = "ZM";
    CountryCode["ZW"] = "ZW";
})(CountryCode = exports.CountryCode || (exports.CountryCode = {}));
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
var DefaultAction;
(function (DefaultAction) {
    function isa(o) {
        return smithy_client_1.isa(o, "DefaultAction");
    }
    DefaultAction.isa = isa;
})(DefaultAction = exports.DefaultAction || (exports.DefaultAction = {}));
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
var DescribeManagedRuleGroupRequest;
(function (DescribeManagedRuleGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeManagedRuleGroupRequest");
    }
    DescribeManagedRuleGroupRequest.isa = isa;
})(DescribeManagedRuleGroupRequest = exports.DescribeManagedRuleGroupRequest || (exports.DescribeManagedRuleGroupRequest = {}));
var DescribeManagedRuleGroupResponse;
(function (DescribeManagedRuleGroupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeManagedRuleGroupResponse");
    }
    DescribeManagedRuleGroupResponse.isa = isa;
})(DescribeManagedRuleGroupResponse = exports.DescribeManagedRuleGroupResponse || (exports.DescribeManagedRuleGroupResponse = {}));
var DisassociateWebACLRequest;
(function (DisassociateWebACLRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateWebACLRequest");
    }
    DisassociateWebACLRequest.isa = isa;
})(DisassociateWebACLRequest = exports.DisassociateWebACLRequest || (exports.DisassociateWebACLRequest = {}));
var DisassociateWebACLResponse;
(function (DisassociateWebACLResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateWebACLResponse");
    }
    DisassociateWebACLResponse.isa = isa;
})(DisassociateWebACLResponse = exports.DisassociateWebACLResponse || (exports.DisassociateWebACLResponse = {}));
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
var GeoMatchStatement;
(function (GeoMatchStatement) {
    function isa(o) {
        return smithy_client_1.isa(o, "GeoMatchStatement");
    }
    GeoMatchStatement.isa = isa;
})(GeoMatchStatement = exports.GeoMatchStatement || (exports.GeoMatchStatement = {}));
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
var GetRateBasedStatementManagedKeysRequest;
(function (GetRateBasedStatementManagedKeysRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRateBasedStatementManagedKeysRequest");
    }
    GetRateBasedStatementManagedKeysRequest.isa = isa;
})(GetRateBasedStatementManagedKeysRequest = exports.GetRateBasedStatementManagedKeysRequest || (exports.GetRateBasedStatementManagedKeysRequest = {}));
var GetRateBasedStatementManagedKeysResponse;
(function (GetRateBasedStatementManagedKeysResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRateBasedStatementManagedKeysResponse");
    }
    GetRateBasedStatementManagedKeysResponse.isa = isa;
})(GetRateBasedStatementManagedKeysResponse = exports.GetRateBasedStatementManagedKeysResponse || (exports.GetRateBasedStatementManagedKeysResponse = {}));
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
var GetWebACLForResourceRequest;
(function (GetWebACLForResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetWebACLForResourceRequest");
    }
    GetWebACLForResourceRequest.isa = isa;
})(GetWebACLForResourceRequest = exports.GetWebACLForResourceRequest || (exports.GetWebACLForResourceRequest = {}));
var GetWebACLForResourceResponse;
(function (GetWebACLForResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetWebACLForResourceResponse");
    }
    GetWebACLForResourceResponse.isa = isa;
})(GetWebACLForResourceResponse = exports.GetWebACLForResourceResponse || (exports.GetWebACLForResourceResponse = {}));
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
var IPAddressVersion;
(function (IPAddressVersion) {
    IPAddressVersion["IPV4"] = "IPV4";
    IPAddressVersion["IPV6"] = "IPV6";
})(IPAddressVersion = exports.IPAddressVersion || (exports.IPAddressVersion = {}));
var IPSet;
(function (IPSet) {
    function isa(o) {
        return smithy_client_1.isa(o, "IPSet");
    }
    IPSet.isa = isa;
})(IPSet = exports.IPSet || (exports.IPSet = {}));
var IPSetReferenceStatement;
(function (IPSetReferenceStatement) {
    function isa(o) {
        return smithy_client_1.isa(o, "IPSetReferenceStatement");
    }
    IPSetReferenceStatement.isa = isa;
})(IPSetReferenceStatement = exports.IPSetReferenceStatement || (exports.IPSetReferenceStatement = {}));
var IPSetSummary;
(function (IPSetSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "IPSetSummary");
    }
    IPSetSummary.isa = isa;
})(IPSetSummary = exports.IPSetSummary || (exports.IPSetSummary = {}));
var ListAvailableManagedRuleGroupsRequest;
(function (ListAvailableManagedRuleGroupsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAvailableManagedRuleGroupsRequest");
    }
    ListAvailableManagedRuleGroupsRequest.isa = isa;
})(ListAvailableManagedRuleGroupsRequest = exports.ListAvailableManagedRuleGroupsRequest || (exports.ListAvailableManagedRuleGroupsRequest = {}));
var ListAvailableManagedRuleGroupsResponse;
(function (ListAvailableManagedRuleGroupsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListAvailableManagedRuleGroupsResponse");
    }
    ListAvailableManagedRuleGroupsResponse.isa = isa;
})(ListAvailableManagedRuleGroupsResponse = exports.ListAvailableManagedRuleGroupsResponse || (exports.ListAvailableManagedRuleGroupsResponse = {}));
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
var ListResourcesForWebACLRequest;
(function (ListResourcesForWebACLRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListResourcesForWebACLRequest");
    }
    ListResourcesForWebACLRequest.isa = isa;
})(ListResourcesForWebACLRequest = exports.ListResourcesForWebACLRequest || (exports.ListResourcesForWebACLRequest = {}));
var ListResourcesForWebACLResponse;
(function (ListResourcesForWebACLResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListResourcesForWebACLResponse");
    }
    ListResourcesForWebACLResponse.isa = isa;
})(ListResourcesForWebACLResponse = exports.ListResourcesForWebACLResponse || (exports.ListResourcesForWebACLResponse = {}));
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
var LoggingConfiguration;
(function (LoggingConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "LoggingConfiguration");
    }
    LoggingConfiguration.isa = isa;
})(LoggingConfiguration = exports.LoggingConfiguration || (exports.LoggingConfiguration = {}));
var ManagedRuleGroupStatement;
(function (ManagedRuleGroupStatement) {
    function isa(o) {
        return smithy_client_1.isa(o, "ManagedRuleGroupStatement");
    }
    ManagedRuleGroupStatement.isa = isa;
})(ManagedRuleGroupStatement = exports.ManagedRuleGroupStatement || (exports.ManagedRuleGroupStatement = {}));
var ManagedRuleGroupSummary;
(function (ManagedRuleGroupSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "ManagedRuleGroupSummary");
    }
    ManagedRuleGroupSummary.isa = isa;
})(ManagedRuleGroupSummary = exports.ManagedRuleGroupSummary || (exports.ManagedRuleGroupSummary = {}));
var Method;
(function (Method) {
    function isa(o) {
        return smithy_client_1.isa(o, "Method");
    }
    Method.isa = isa;
})(Method = exports.Method || (exports.Method = {}));
var NoneAction;
(function (NoneAction) {
    function isa(o) {
        return smithy_client_1.isa(o, "NoneAction");
    }
    NoneAction.isa = isa;
})(NoneAction = exports.NoneAction || (exports.NoneAction = {}));
var NotStatement;
(function (NotStatement) {
    function isa(o) {
        return smithy_client_1.isa(o, "NotStatement");
    }
    NotStatement.isa = isa;
})(NotStatement = exports.NotStatement || (exports.NotStatement = {}));
var OrStatement;
(function (OrStatement) {
    function isa(o) {
        return smithy_client_1.isa(o, "OrStatement");
    }
    OrStatement.isa = isa;
})(OrStatement = exports.OrStatement || (exports.OrStatement = {}));
var OverrideAction;
(function (OverrideAction) {
    function isa(o) {
        return smithy_client_1.isa(o, "OverrideAction");
    }
    OverrideAction.isa = isa;
})(OverrideAction = exports.OverrideAction || (exports.OverrideAction = {}));
var ParameterExceptionField;
(function (ParameterExceptionField) {
    ParameterExceptionField["AND_STATEMENT"] = "AND_STATEMENT";
    ParameterExceptionField["BYTE_MATCH_STATEMENT"] = "BYTE_MATCH_STATEMENT";
    ParameterExceptionField["DEFAULT_ACTION"] = "DEFAULT_ACTION";
    ParameterExceptionField["ENTITY_LIMIT"] = "ENTITY_LIMIT";
    ParameterExceptionField["EXCLUDED_RULE"] = "EXCLUDED_RULE";
    ParameterExceptionField["FIELD_TO_MATCH"] = "FIELD_TO_MATCH";
    ParameterExceptionField["GEO_MATCH_STATEMENT"] = "GEO_MATCH_STATEMENT";
    ParameterExceptionField["IP_ADDRESS"] = "IP_ADDRESS";
    ParameterExceptionField["IP_ADDRESS_VERSION"] = "IP_ADDRESS_VERSION";
    ParameterExceptionField["IP_SET"] = "IP_SET";
    ParameterExceptionField["IP_SET_REFERENCE_STATEMENT"] = "IP_SET_REFERENCE_STATEMENT";
    ParameterExceptionField["MANAGED_RULE_SET"] = "MANAGED_RULE_SET";
    ParameterExceptionField["MANAGED_RULE_SET_STATEMENT"] = "MANAGED_RULE_SET_STATEMENT";
    ParameterExceptionField["NOT_STATEMENT"] = "NOT_STATEMENT";
    ParameterExceptionField["OR_STATEMENT"] = "OR_STATEMENT";
    ParameterExceptionField["OVERRIDE_ACTION"] = "OVERRIDE_ACTION";
    ParameterExceptionField["RATE_BASED_STATEMENT"] = "RATE_BASED_STATEMENT";
    ParameterExceptionField["REGEX_PATTERN_REFERENCE_STATEMENT"] = "REGEX_PATTERN_REFERENCE_STATEMENT";
    ParameterExceptionField["REGEX_PATTERN_SET"] = "REGEX_PATTERN_SET";
    ParameterExceptionField["RESOURCE_ARN"] = "RESOURCE_ARN";
    ParameterExceptionField["RESOURCE_TYPE"] = "RESOURCE_TYPE";
    ParameterExceptionField["RULE"] = "RULE";
    ParameterExceptionField["RULE_ACTION"] = "RULE_ACTION";
    ParameterExceptionField["RULE_GROUP"] = "RULE_GROUP";
    ParameterExceptionField["RULE_GROUP_REFERENCE_STATEMENT"] = "RULE_GROUP_REFERENCE_STATEMENT";
    ParameterExceptionField["SCOPE_VALUE"] = "SCOPE_VALUE";
    ParameterExceptionField["SINGLE_HEADER"] = "SINGLE_HEADER";
    ParameterExceptionField["SINGLE_QUERY_ARGUMENT"] = "SINGLE_QUERY_ARGUMENT";
    ParameterExceptionField["SIZE_CONSTRAINT_STATEMENT"] = "SIZE_CONSTRAINT_STATEMENT";
    ParameterExceptionField["SQLI_MATCH_STATEMENT"] = "SQLI_MATCH_STATEMENT";
    ParameterExceptionField["STATEMENT"] = "STATEMENT";
    ParameterExceptionField["TAGS"] = "TAGS";
    ParameterExceptionField["TAG_KEYS"] = "TAG_KEYS";
    ParameterExceptionField["TEXT_TRANSFORMATION"] = "TEXT_TRANSFORMATION";
    ParameterExceptionField["WEB_ACL"] = "WEB_ACL";
    ParameterExceptionField["XSS_MATCH_STATEMENT"] = "XSS_MATCH_STATEMENT";
})(ParameterExceptionField = exports.ParameterExceptionField || (exports.ParameterExceptionField = {}));
var PositionalConstraint;
(function (PositionalConstraint) {
    PositionalConstraint["CONTAINS"] = "CONTAINS";
    PositionalConstraint["CONTAINS_WORD"] = "CONTAINS_WORD";
    PositionalConstraint["ENDS_WITH"] = "ENDS_WITH";
    PositionalConstraint["EXACTLY"] = "EXACTLY";
    PositionalConstraint["STARTS_WITH"] = "STARTS_WITH";
})(PositionalConstraint = exports.PositionalConstraint || (exports.PositionalConstraint = {}));
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
var QueryString;
(function (QueryString) {
    function isa(o) {
        return smithy_client_1.isa(o, "QueryString");
    }
    QueryString.isa = isa;
})(QueryString = exports.QueryString || (exports.QueryString = {}));
var RateBasedStatement;
(function (RateBasedStatement) {
    function isa(o) {
        return smithy_client_1.isa(o, "RateBasedStatement");
    }
    RateBasedStatement.isa = isa;
})(RateBasedStatement = exports.RateBasedStatement || (exports.RateBasedStatement = {}));
var RateBasedStatementAggregateKeyType;
(function (RateBasedStatementAggregateKeyType) {
    RateBasedStatementAggregateKeyType["IP"] = "IP";
})(RateBasedStatementAggregateKeyType = exports.RateBasedStatementAggregateKeyType || (exports.RateBasedStatementAggregateKeyType = {}));
var RateBasedStatementManagedKeysIPSet;
(function (RateBasedStatementManagedKeysIPSet) {
    function isa(o) {
        return smithy_client_1.isa(o, "RateBasedStatementManagedKeysIPSet");
    }
    RateBasedStatementManagedKeysIPSet.isa = isa;
})(RateBasedStatementManagedKeysIPSet = exports.RateBasedStatementManagedKeysIPSet || (exports.RateBasedStatementManagedKeysIPSet = {}));
var Regex;
(function (Regex) {
    function isa(o) {
        return smithy_client_1.isa(o, "Regex");
    }
    Regex.isa = isa;
})(Regex = exports.Regex || (exports.Regex = {}));
var RegexPatternSet;
(function (RegexPatternSet) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegexPatternSet");
    }
    RegexPatternSet.isa = isa;
})(RegexPatternSet = exports.RegexPatternSet || (exports.RegexPatternSet = {}));
var RegexPatternSetReferenceStatement;
(function (RegexPatternSetReferenceStatement) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegexPatternSetReferenceStatement");
    }
    RegexPatternSetReferenceStatement.isa = isa;
})(RegexPatternSetReferenceStatement = exports.RegexPatternSetReferenceStatement || (exports.RegexPatternSetReferenceStatement = {}));
var RegexPatternSetSummary;
(function (RegexPatternSetSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegexPatternSetSummary");
    }
    RegexPatternSetSummary.isa = isa;
})(RegexPatternSetSummary = exports.RegexPatternSetSummary || (exports.RegexPatternSetSummary = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["API_GATEWAY"] = "API_GATEWAY";
    ResourceType["APPLICATION_LOAD_BALANCER"] = "APPLICATION_LOAD_BALANCER";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
var Rule;
(function (Rule) {
    function isa(o) {
        return smithy_client_1.isa(o, "Rule");
    }
    Rule.isa = isa;
})(Rule = exports.Rule || (exports.Rule = {}));
var RuleAction;
(function (RuleAction) {
    function isa(o) {
        return smithy_client_1.isa(o, "RuleAction");
    }
    RuleAction.isa = isa;
})(RuleAction = exports.RuleAction || (exports.RuleAction = {}));
var RuleGroup;
(function (RuleGroup) {
    function isa(o) {
        return smithy_client_1.isa(o, "RuleGroup");
    }
    RuleGroup.isa = isa;
})(RuleGroup = exports.RuleGroup || (exports.RuleGroup = {}));
var RuleGroupReferenceStatement;
(function (RuleGroupReferenceStatement) {
    function isa(o) {
        return smithy_client_1.isa(o, "RuleGroupReferenceStatement");
    }
    RuleGroupReferenceStatement.isa = isa;
})(RuleGroupReferenceStatement = exports.RuleGroupReferenceStatement || (exports.RuleGroupReferenceStatement = {}));
var RuleGroupSummary;
(function (RuleGroupSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "RuleGroupSummary");
    }
    RuleGroupSummary.isa = isa;
})(RuleGroupSummary = exports.RuleGroupSummary || (exports.RuleGroupSummary = {}));
var RuleSummary;
(function (RuleSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "RuleSummary");
    }
    RuleSummary.isa = isa;
})(RuleSummary = exports.RuleSummary || (exports.RuleSummary = {}));
var SampledHTTPRequest;
(function (SampledHTTPRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SampledHTTPRequest");
    }
    SampledHTTPRequest.isa = isa;
})(SampledHTTPRequest = exports.SampledHTTPRequest || (exports.SampledHTTPRequest = {}));
var Scope;
(function (Scope) {
    Scope["CLOUDFRONT"] = "CLOUDFRONT";
    Scope["REGIONAL"] = "REGIONAL";
})(Scope = exports.Scope || (exports.Scope = {}));
var SingleHeader;
(function (SingleHeader) {
    function isa(o) {
        return smithy_client_1.isa(o, "SingleHeader");
    }
    SingleHeader.isa = isa;
})(SingleHeader = exports.SingleHeader || (exports.SingleHeader = {}));
var SingleQueryArgument;
(function (SingleQueryArgument) {
    function isa(o) {
        return smithy_client_1.isa(o, "SingleQueryArgument");
    }
    SingleQueryArgument.isa = isa;
})(SingleQueryArgument = exports.SingleQueryArgument || (exports.SingleQueryArgument = {}));
var SizeConstraintStatement;
(function (SizeConstraintStatement) {
    function isa(o) {
        return smithy_client_1.isa(o, "SizeConstraintStatement");
    }
    SizeConstraintStatement.isa = isa;
})(SizeConstraintStatement = exports.SizeConstraintStatement || (exports.SizeConstraintStatement = {}));
var SqliMatchStatement;
(function (SqliMatchStatement) {
    function isa(o) {
        return smithy_client_1.isa(o, "SqliMatchStatement");
    }
    SqliMatchStatement.isa = isa;
})(SqliMatchStatement = exports.SqliMatchStatement || (exports.SqliMatchStatement = {}));
var Statement;
(function (Statement) {
    function isa(o) {
        return smithy_client_1.isa(o, "Statement");
    }
    Statement.isa = isa;
})(Statement = exports.Statement || (exports.Statement = {}));
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
    function isa(o) {
        return smithy_client_1.isa(o, "TextTransformation");
    }
    TextTransformation.isa = isa;
})(TextTransformation = exports.TextTransformation || (exports.TextTransformation = {}));
var TextTransformationType;
(function (TextTransformationType) {
    TextTransformationType["CMD_LINE"] = "CMD_LINE";
    TextTransformationType["COMPRESS_WHITE_SPACE"] = "COMPRESS_WHITE_SPACE";
    TextTransformationType["HTML_ENTITY_DECODE"] = "HTML_ENTITY_DECODE";
    TextTransformationType["LOWERCASE"] = "LOWERCASE";
    TextTransformationType["NONE"] = "NONE";
    TextTransformationType["URL_DECODE"] = "URL_DECODE";
})(TextTransformationType = exports.TextTransformationType || (exports.TextTransformationType = {}));
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
var UriPath;
(function (UriPath) {
    function isa(o) {
        return smithy_client_1.isa(o, "UriPath");
    }
    UriPath.isa = isa;
})(UriPath = exports.UriPath || (exports.UriPath = {}));
var VisibilityConfig;
(function (VisibilityConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "VisibilityConfig");
    }
    VisibilityConfig.isa = isa;
})(VisibilityConfig = exports.VisibilityConfig || (exports.VisibilityConfig = {}));
var WAFAssociatedItemException;
(function (WAFAssociatedItemException) {
    function isa(o) {
        return smithy_client_1.isa(o, "WAFAssociatedItemException");
    }
    WAFAssociatedItemException.isa = isa;
})(WAFAssociatedItemException = exports.WAFAssociatedItemException || (exports.WAFAssociatedItemException = {}));
var WAFDuplicateItemException;
(function (WAFDuplicateItemException) {
    function isa(o) {
        return smithy_client_1.isa(o, "WAFDuplicateItemException");
    }
    WAFDuplicateItemException.isa = isa;
})(WAFDuplicateItemException = exports.WAFDuplicateItemException || (exports.WAFDuplicateItemException = {}));
var WAFInternalErrorException;
(function (WAFInternalErrorException) {
    function isa(o) {
        return smithy_client_1.isa(o, "WAFInternalErrorException");
    }
    WAFInternalErrorException.isa = isa;
})(WAFInternalErrorException = exports.WAFInternalErrorException || (exports.WAFInternalErrorException = {}));
var WAFInvalidParameterException;
(function (WAFInvalidParameterException) {
    function isa(o) {
        return smithy_client_1.isa(o, "WAFInvalidParameterException");
    }
    WAFInvalidParameterException.isa = isa;
})(WAFInvalidParameterException = exports.WAFInvalidParameterException || (exports.WAFInvalidParameterException = {}));
var WAFInvalidResourceException;
(function (WAFInvalidResourceException) {
    function isa(o) {
        return smithy_client_1.isa(o, "WAFInvalidResourceException");
    }
    WAFInvalidResourceException.isa = isa;
})(WAFInvalidResourceException = exports.WAFInvalidResourceException || (exports.WAFInvalidResourceException = {}));
var WAFLimitsExceededException;
(function (WAFLimitsExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "WAFLimitsExceededException");
    }
    WAFLimitsExceededException.isa = isa;
})(WAFLimitsExceededException = exports.WAFLimitsExceededException || (exports.WAFLimitsExceededException = {}));
var WAFNonexistentItemException;
(function (WAFNonexistentItemException) {
    function isa(o) {
        return smithy_client_1.isa(o, "WAFNonexistentItemException");
    }
    WAFNonexistentItemException.isa = isa;
})(WAFNonexistentItemException = exports.WAFNonexistentItemException || (exports.WAFNonexistentItemException = {}));
var WAFOptimisticLockException;
(function (WAFOptimisticLockException) {
    function isa(o) {
        return smithy_client_1.isa(o, "WAFOptimisticLockException");
    }
    WAFOptimisticLockException.isa = isa;
})(WAFOptimisticLockException = exports.WAFOptimisticLockException || (exports.WAFOptimisticLockException = {}));
var WAFServiceLinkedRoleErrorException;
(function (WAFServiceLinkedRoleErrorException) {
    function isa(o) {
        return smithy_client_1.isa(o, "WAFServiceLinkedRoleErrorException");
    }
    WAFServiceLinkedRoleErrorException.isa = isa;
})(WAFServiceLinkedRoleErrorException = exports.WAFServiceLinkedRoleErrorException || (exports.WAFServiceLinkedRoleErrorException = {}));
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
var WAFUnavailableEntityException;
(function (WAFUnavailableEntityException) {
    function isa(o) {
        return smithy_client_1.isa(o, "WAFUnavailableEntityException");
    }
    WAFUnavailableEntityException.isa = isa;
})(WAFUnavailableEntityException = exports.WAFUnavailableEntityException || (exports.WAFUnavailableEntityException = {}));
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
var XssMatchStatement;
(function (XssMatchStatement) {
    function isa(o) {
        return smithy_client_1.isa(o, "XssMatchStatement");
    }
    XssMatchStatement.isa = isa;
})(XssMatchStatement = exports.XssMatchStatement || (exports.XssMatchStatement = {}));
//# sourceMappingURL=index.js.map