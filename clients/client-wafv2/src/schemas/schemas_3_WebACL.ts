// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import {
  WAFConfigurationWarningException as __WAFConfigurationWarningException,
  WAFSubscriptionNotFoundException as __WAFSubscriptionNotFoundException,
} from "../models/index";
import {
  _A,
  _AAp,
  _AApp,
  _ACp,
  _ACs,
  _AF,
  _AFd,
  _AIURL,
  _AKT,
  _AL,
  _ALBLRM,
  _All,
  _ALv,
  _AMS,
  _ARN,
  _AS,
  _ASN,
  _At,
  _ATU,
  _AWSMRACFPRS,
  _AWSMRADDSRS,
  _AWSMRATPRS,
  _AWSMRBCRS,
  _BC,
  _Bl,
  _BMS,
  _C,
  _c,
  _CC,
  _CCh,
  _CChe,
  _CCo,
  _CCR,
  _CCRh,
  _Ch,
  _CK,
  _CL,
  _CO,
  _Con,
  _Cook,
  _Coun,
  _CP,
  _CRB,
  _CRBu,
  _CRG,
  _CRGR,
  _CRGRr,
  _CRPS,
  _CRPSR,
  _CRPSRr,
  _CSA,
  _CSAC,
  _CTo,
  _CWACL,
  _CWACLR,
  _CWACLRr,
  _CWME,
  _D,
  _DA,
  _DP,
  _DPa,
  _DPC,
  _DSIL,
  _e,
  _EF,
  _EML,
  _ER,
  _ERBD,
  _ERIP,
  _ERMD,
  _ERx,
  _EURE,
  _EWS,
  _F,
  _FB,
  _FC,
  _FIP,
  _FIPC,
  _FK,
  _FMRG,
  _FMRGi,
  _FMS,
  _FS,
  _FT,
  _FTM,
  _FTP,
  _FV,
  _GMS,
  _GRG,
  _GRGR,
  _GRGRe,
  _GRPS,
  _GRPSR,
  _GRPSRe,
  _GWACL,
  _GWACLFR,
  _GWACLFRR,
  _GWACLFRRe,
  _GWACLR,
  _GWACLRe,
  _He,
  _HN,
  _HTTPM,
  _I,
  _Id,
  _IL,
  _IP_,
  _IPSFIPC,
  _IPSRS,
  _IT,
  _ITP,
  _J,
  _JAF,
  _JAFi,
  _K,
  _Li,
  _LMS,
  _LN,
  _LP,
  _LT,
  _MBFM,
  _Me,
  _MN,
  _MRGC,
  _MRGCa,
  _MRGS,
  _N,
  _NA,
  _Na,
  _NLT,
  _No,
  _NS,
  _OA,
  _OS,
  _OSDDSPC,
  _P,
  _PC,
  _PF,
  _PNF,
  _PNFh,
  _Pos,
  _PPFMRG,
  _PPFMRGo,
  _PTa,
  _QA,
  _QS,
  _R,
  _RA,
  _RAO,
  _RAOu,
  _RB,
  _RBARTC,
  _RBFM,
  _RBS,
  _RBSCK,
  _RBSCKa,
  _Reg,
  _REL,
  _RG,
  _RGRS,
  _RI,
  _RIACFP,
  _RIBC,
  _RIe,
  _RIH,
  _RIJ,
  _RISC,
  _RL,
  _RLA,
  _RLC,
  _RLFIP,
  _RLH,
  _RLHTTPM,
  _RLIP,
  _RLJAF,
  _RLJAFa,
  _RLLN,
  _RLQA,
  _RLQS,
  _RLUP,
  _RMS,
  _RPP,
  _RPS,
  _RPSRS,
  _RSe,
  _Ru,
  _S,
  _SC,
  _Sc,
  _SCS,
  _SCu,
  _SDS,
  _Se,
  _Si,
  _SL,
  _SMS,
  _SRE,
  _SS,
  _SSu,
  _St,
  _STB,
  _Su,
  _SV,
  _T,
  _TD,
  _TT,
  _TTe,
  _Ty,
  _UFs,
  _UOA,
  _UP,
  _URG,
  _URGR,
  _URGRp,
  _URPS,
  _URPSR,
  _URPSRp,
  _UWACL,
  _UWACLR,
  _UWACLRp,
  _V,
  _Va,
  _VC,
  _VN,
  _WACL,
  _WAFCWE,
  _WAFSNFE,
  _XMS,
  n0,
} from "./schemas_0";
import { FieldToMatch } from "./schemas_4_WebACL";
import { RuleGroupSummary } from "./schemas_9_Rule";
import { AllowAction, BlockAction, CountAction, Labels, LabelSummaries, RuleAction } from "./schemas_10_Group";
import { TagList } from "./schemas_22_Create";
import { RegexPatternSetSummary } from "./schemas_23_Pattern";
import { WebACLSummary } from "./schemas_28_WebA";

/* eslint no-var: 0 */

export var AddressField = struct(n0, _AF, 0, [_I], [0]);
export var AndStatement = struct(n0, _AS, 0, [_S], [() => Statements]);
export var ApplicationAttribute = struct(n0, _AAp, 0, [_N, _Va], [0, 64 | 0]);
export var ApplicationConfig = struct(n0, _ACp, 0, [_At], [() => ApplicationAttributes]);
export var AsnMatchStatement = struct(n0, _AMS, 0, [_AL, _FIPC], [64 | 1, () => ForwardedIPConfig]);
export var AssociationConfig = struct(n0, _ACs, 0, [_RB], [() => RequestBody]);
export var AWSManagedRulesACFPRuleSet = struct(
  n0,
  _AWSMRACFPRS,
  0,
  [_CP, _RPP, _RI, _RIe, _ERIP],
  [0, 0, () => RequestInspectionACFP, () => ResponseInspection, 2]
);
export var AWSManagedRulesAntiDDoSRuleSet = struct(
  n0,
  _AWSMRADDSRS,
  0,
  [_CSAC, _STB],
  [() => ClientSideActionConfig, 0]
);
export var AWSManagedRulesATPRuleSet = struct(
  n0,
  _AWSMRATPRS,
  0,
  [_LP, _RI, _RIe, _ERIP],
  [0, () => RequestInspection, () => ResponseInspection, 2]
);
export var AWSManagedRulesBotControlRuleSet = struct(n0, _AWSMRBCRS, 0, [_IL, _EML], [0, 2]);
export var ByteMatchStatement = struct(
  n0,
  _BMS,
  0,
  [_SS, _FTM, _TT, _PC],
  [21, () => FieldToMatch, () => TextTransformations, 0]
);
export var CaptchaConfig = struct(n0, _CC, 0, [_ITP], [() => ImmunityTimeProperty]);
export var ChallengeConfig = struct(n0, _CCh, 0, [_ITP], [() => ImmunityTimeProperty]);
export var CheckCapacityRequest = struct(n0, _CCR, 0, [_Sc, _R], [0, () => Rules]);
export var CheckCapacityResponse = struct(n0, _CCRh, 0, [_C], [1]);
export var ClientSideAction = struct(n0, _CSA, 0, [_UOA, _Se, _EURE], [0, 0, () => RegularExpressionList]);
export var ClientSideActionConfig = struct(n0, _CSAC, 0, [_Ch], [() => ClientSideAction]);
export var CreateRegexPatternSetRequest = struct(
  n0,
  _CRPSR,
  0,
  [_N, _Sc, _D, _REL, _T],
  [0, 0, 0, () => RegularExpressionList, () => TagList]
);
export var CreateRegexPatternSetResponse = struct(n0, _CRPSRr, 0, [_Su], [() => RegexPatternSetSummary]);
export var CreateRuleGroupRequest = struct(
  n0,
  _CRGR,
  0,
  [_N, _Sc, _C, _D, _R, _VC, _T, _CRB],
  [0, 0, 1, 0, () => Rules, () => VisibilityConfig, () => TagList, () => CustomResponseBodies]
);
export var CreateRuleGroupResponse = struct(n0, _CRGRr, 0, [_Su], [() => RuleGroupSummary]);
export var CreateWebACLRequest = struct(
  n0,
  _CWACLR,
  0,
  [_N, _Sc, _DA, _D, _R, _VC, _DPC, _T, _CRB, _CC, _CCh, _TD, _ACs, _OSDDSPC, _ACp],
  [
    0,
    0,
    () => DefaultAction,
    0,
    () => Rules,
    () => VisibilityConfig,
    () => DataProtectionConfig,
    () => TagList,
    () => CustomResponseBodies,
    () => CaptchaConfig,
    () => ChallengeConfig,
    64 | 0,
    () => AssociationConfig,
    () => OnSourceDDoSProtectionConfig,
    () => ApplicationConfig,
  ]
);
export var CreateWebACLResponse = struct(n0, _CWACLRr, 0, [_Su], [() => WebACLSummary]);
export var CustomResponseBody = struct(n0, _CRBu, 0, [_CTo, _Con], [0, 0]);
export var DataProtection = struct(n0, _DP, 0, [_F, _A, _ERMD, _ERBD], [() => FieldToProtect, 0, 2, 2]);
export var DataProtectionConfig = struct(n0, _DPC, 0, [_DPa], [() => DataProtections]);
export var DefaultAction = struct(n0, _DA, 0, [_Bl, _All], [() => BlockAction, () => AllowAction]);
export var EmailField = struct(n0, _EF, 0, [_I], [0]);
export var ExcludedRule = struct(n0, _ER, 0, [_N], [0]);
export var FieldToProtect = struct(n0, _FTP, 0, [_FT, _FK], [0, 64 | 0]);
export var FirewallManagerRuleGroup = struct(
  n0,
  _FMRG,
  0,
  [_N, _P, _FMS, _OA, _VC],
  [0, 1, () => FirewallManagerStatement, () => OverrideAction, () => VisibilityConfig]
);
export var FirewallManagerStatement = struct(
  n0,
  _FMS,
  0,
  [_MRGS, _RGRS],
  [() => ManagedRuleGroupStatement, () => RuleGroupReferenceStatement]
);
export var ForwardedIPConfig = struct(n0, _FIPC, 0, [_HN, _FB], [0, 0]);
export var GeoMatchStatement = struct(n0, _GMS, 0, [_CCo, _FIPC], [64 | 0, () => ForwardedIPConfig]);
export var GetRegexPatternSetRequest = struct(n0, _GRPSR, 0, [_N, _Sc, _Id], [0, 0, 0]);
export var GetRegexPatternSetResponse = struct(n0, _GRPSRe, 0, [_RPS, _LT], [() => RegexPatternSet, 0]);
export var GetRuleGroupRequest = struct(n0, _GRGR, 0, [_N, _Sc, _Id, _ARN], [0, 0, 0, 0]);
export var GetRuleGroupResponse = struct(n0, _GRGRe, 0, [_RG, _LT], [() => RuleGroup, 0]);
export var GetWebACLForResourceRequest = struct(n0, _GWACLFRR, 0, [_RA], [0]);
export var GetWebACLForResourceResponse = struct(n0, _GWACLFRRe, 0, [_WACL], [() => WebACL]);
export var GetWebACLRequest = struct(n0, _GWACLR, 0, [_N, _Sc, _Id, _ARN], [0, 0, 0, 0]);
export var GetWebACLResponse = struct(n0, _GWACLRe, 0, [_WACL, _LT, _AIURL], [() => WebACL, 0, 0]);
export var ImmunityTimeProperty = struct(n0, _ITP, 0, [_IT], [1]);
export var IPSetForwardedIPConfig = struct(n0, _IPSFIPC, 0, [_HN, _FB, _Pos], [0, 0, 0]);
export var IPSetReferenceStatement = struct(n0, _IPSRS, 0, [_ARN, _IPSFIPC], [0, () => IPSetForwardedIPConfig]);
export var LabelMatchStatement = struct(n0, _LMS, 0, [_Sc, _K], [0, 0]);
export var ManagedRuleGroupConfig = struct(
  n0,
  _MRGC,
  0,
  [_LP, _PTa, _UFs, _PF, _AWSMRBCRS, _AWSMRATPRS, _AWSMRACFPRS, _AWSMRADDSRS],
  [
    0,
    0,
    () => UsernameField,
    () => PasswordField,
    () => AWSManagedRulesBotControlRuleSet,
    () => AWSManagedRulesATPRuleSet,
    () => AWSManagedRulesACFPRuleSet,
    () => AWSManagedRulesAntiDDoSRuleSet,
  ]
);
export var ManagedRuleGroupStatement = struct(
  n0,
  _MRGS,
  0,
  [_VN, _N, _V, _ERx, _SDS, _MRGCa, _RAO],
  [0, 0, 0, () => ExcludedRules, () => Statement, () => ManagedRuleGroupConfigs, () => RuleActionOverrides]
);
export var NoneAction = struct(n0, _NA, 0, [], []);
export var NotStatement = struct(n0, _NS, 0, [_St], [() => Statement]);
export var OnSourceDDoSProtectionConfig = struct(n0, _OSDDSPC, 0, [_ALBLRM], [0]);
export var OrStatement = struct(n0, _OS, 0, [_S], [() => Statements]);
export var OverrideAction = struct(n0, _OA, 0, [_Coun, _No], [() => CountAction, () => NoneAction]);
export var PasswordField = struct(n0, _PF, 0, [_I], [0]);
export var PhoneNumberField = struct(n0, _PNF, 0, [_I], [0]);
export var RateBasedStatement = struct(
  n0,
  _RBS,
  0,
  [_Li, _EWS, _AKT, _SDS, _FIPC, _CK],
  [1, 1, 0, () => Statement, () => ForwardedIPConfig, () => RateBasedStatementCustomKeys]
);
export var RateBasedStatementCustomKey = struct(
  n0,
  _RBSCK,
  0,
  [_He, _Cook, _QA, _QS, _HTTPM, _FIP, _IP_, _LN, _UP, _JAF, _JAFi, _ASN],
  [
    () => RateLimitHeader,
    () => RateLimitCookie,
    () => RateLimitQueryArgument,
    () => RateLimitQueryString,
    () => RateLimitHTTPMethod,
    () => RateLimitForwardedIP,
    () => RateLimitIP,
    () => RateLimitLabelNamespace,
    () => RateLimitUriPath,
    () => RateLimitJA3Fingerprint,
    () => RateLimitJA4Fingerprint,
    () => RateLimitAsn,
  ]
);
export var RateLimitAsn = struct(n0, _RLA, 0, [], []);
export var RateLimitCookie = struct(n0, _RLC, 0, [_N, _TT], [0, () => TextTransformations]);
export var RateLimitForwardedIP = struct(n0, _RLFIP, 0, [], []);
export var RateLimitHeader = struct(n0, _RLH, 0, [_N, _TT], [0, () => TextTransformations]);
export var RateLimitHTTPMethod = struct(n0, _RLHTTPM, 0, [], []);
export var RateLimitIP = struct(n0, _RLIP, 0, [], []);
export var RateLimitJA3Fingerprint = struct(n0, _RLJAF, 0, [_FB], [0]);
export var RateLimitJA4Fingerprint = struct(n0, _RLJAFa, 0, [_FB], [0]);
export var RateLimitLabelNamespace = struct(n0, _RLLN, 0, [_Na], [0]);
export var RateLimitQueryArgument = struct(n0, _RLQA, 0, [_N, _TT], [0, () => TextTransformations]);
export var RateLimitQueryString = struct(n0, _RLQS, 0, [_TT], [() => TextTransformations]);
export var RateLimitUriPath = struct(n0, _RLUP, 0, [_TT], [() => TextTransformations]);
export var Regex = struct(n0, _Reg, 0, [_RSe], [0]);
export var RegexMatchStatement = struct(
  n0,
  _RMS,
  0,
  [_RSe, _FTM, _TT],
  [0, () => FieldToMatch, () => TextTransformations]
);
export var RegexPatternSet = struct(n0, _RPS, 0, [_N, _Id, _ARN, _D, _REL], [0, 0, 0, 0, () => RegularExpressionList]);
export var RegexPatternSetReferenceStatement = struct(
  n0,
  _RPSRS,
  0,
  [_ARN, _FTM, _TT],
  [0, () => FieldToMatch, () => TextTransformations]
);
export var RequestBodyAssociatedResourceTypeConfig = struct(n0, _RBARTC, 0, [_DSIL], [0]);
export var RequestInspection = struct(n0, _RI, 0, [_PTa, _UFs, _PF], [0, () => UsernameField, () => PasswordField]);
export var RequestInspectionACFP = struct(
  n0,
  _RIACFP,
  0,
  [_PTa, _UFs, _PF, _EF, _PNFh, _AFd],
  [0, () => UsernameField, () => PasswordField, () => EmailField, () => PhoneNumberFields, () => AddressFields]
);
export var ResponseInspection = struct(
  n0,
  _RIe,
  0,
  [_SC, _He, _BC, _J],
  [
    () => ResponseInspectionStatusCode,
    () => ResponseInspectionHeader,
    () => ResponseInspectionBodyContains,
    () => ResponseInspectionJson,
  ]
);
export var ResponseInspectionBodyContains = struct(n0, _RIBC, 0, [_SSu, _FS], [64 | 0, 64 | 0]);
export var ResponseInspectionHeader = struct(n0, _RIH, 0, [_N, _SV, _FV], [0, 64 | 0, 64 | 0]);
export var ResponseInspectionJson = struct(n0, _RIJ, 0, [_I, _SV, _FV], [0, 64 | 0, 64 | 0]);
export var ResponseInspectionStatusCode = struct(n0, _RISC, 0, [_SCu, _FC], [64 | 1, 64 | 1]);
export var Rule = struct(
  n0,
  _Ru,
  0,
  [_N, _P, _St, _A, _OA, _RL, _VC, _CC, _CCh],
  [
    0,
    1,
    () => Statement,
    () => RuleAction,
    () => OverrideAction,
    () => Labels,
    () => VisibilityConfig,
    () => CaptchaConfig,
    () => ChallengeConfig,
  ]
);
export var RuleActionOverride = struct(n0, _RAOu, 0, [_N, _ATU], [0, () => RuleAction]);
export var RuleGroup = struct(
  n0,
  _RG,
  0,
  [_N, _Id, _C, _ARN, _D, _R, _VC, _LN, _CRB, _ALv, _CL],
  [
    0,
    0,
    1,
    0,
    0,
    () => Rules,
    () => VisibilityConfig,
    0,
    () => CustomResponseBodies,
    () => LabelSummaries,
    () => LabelSummaries,
  ]
);
export var RuleGroupReferenceStatement = struct(
  n0,
  _RGRS,
  0,
  [_ARN, _ERx, _RAO],
  [0, () => ExcludedRules, () => RuleActionOverrides]
);
export var SizeConstraintStatement = struct(
  n0,
  _SCS,
  0,
  [_FTM, _CO, _Si, _TT],
  [() => FieldToMatch, 0, 1, () => TextTransformations]
);
export var SqliMatchStatement = struct(
  n0,
  _SMS,
  0,
  [_FTM, _TT, _SL],
  [() => FieldToMatch, () => TextTransformations, 0]
);
export var Statement = struct(
  n0,
  _St,
  0,
  [_BMS, _SMS, _XMS, _SCS, _GMS, _RGRS, _IPSRS, _RPSRS, _RBS, _AS, _OS, _NS, _MRGS, _LMS, _RMS, _AMS],
  [
    () => ByteMatchStatement,
    () => SqliMatchStatement,
    () => XssMatchStatement,
    () => SizeConstraintStatement,
    () => GeoMatchStatement,
    () => RuleGroupReferenceStatement,
    () => IPSetReferenceStatement,
    () => RegexPatternSetReferenceStatement,
    () => RateBasedStatement,
    () => AndStatement,
    () => OrStatement,
    () => NotStatement,
    () => ManagedRuleGroupStatement,
    () => LabelMatchStatement,
    () => RegexMatchStatement,
    () => AsnMatchStatement,
  ]
);
export var TextTransformation = struct(n0, _TTe, 0, [_P, _Ty], [1, 0]);
export var UpdateRegexPatternSetRequest = struct(
  n0,
  _URPSR,
  0,
  [_N, _Sc, _Id, _D, _REL, _LT],
  [0, 0, 0, 0, () => RegularExpressionList, 0]
);
export var UpdateRegexPatternSetResponse = struct(n0, _URPSRp, 0, [_NLT], [0]);
export var UpdateRuleGroupRequest = struct(
  n0,
  _URGR,
  0,
  [_N, _Sc, _Id, _D, _R, _VC, _LT, _CRB],
  [0, 0, 0, 0, () => Rules, () => VisibilityConfig, 0, () => CustomResponseBodies]
);
export var UpdateRuleGroupResponse = struct(n0, _URGRp, 0, [_NLT], [0]);
export var UpdateWebACLRequest = struct(
  n0,
  _UWACLR,
  0,
  [_N, _Sc, _Id, _DA, _D, _R, _VC, _DPC, _LT, _CRB, _CC, _CCh, _TD, _ACs, _OSDDSPC, _ACp],
  [
    0,
    0,
    0,
    () => DefaultAction,
    0,
    () => Rules,
    () => VisibilityConfig,
    () => DataProtectionConfig,
    0,
    () => CustomResponseBodies,
    () => CaptchaConfig,
    () => ChallengeConfig,
    64 | 0,
    () => AssociationConfig,
    () => OnSourceDDoSProtectionConfig,
    () => ApplicationConfig,
  ]
);
export var UpdateWebACLResponse = struct(n0, _UWACLRp, 0, [_NLT], [0]);
export var UsernameField = struct(n0, _UFs, 0, [_I], [0]);
export var VisibilityConfig = struct(n0, _VC, 0, [_SRE, _CWME, _MN], [2, 2, 0]);
export var WAFConfigurationWarningException = error(
  n0,
  _WAFCWE,
  {
    [_e]: _c,
  },
  [_Me],
  [0],

  __WAFConfigurationWarningException
);
export var WAFSubscriptionNotFoundException = error(
  n0,
  _WAFSNFE,
  {
    [_e]: _c,
  },
  [_Me],
  [0],

  __WAFSubscriptionNotFoundException
);
export var WebACL = struct(
  n0,
  _WACL,
  0,
  [
    _N,
    _Id,
    _ARN,
    _DA,
    _D,
    _R,
    _VC,
    _DPC,
    _C,
    _PPFMRG,
    _PPFMRGo,
    _MBFM,
    _LN,
    _CRB,
    _CC,
    _CCh,
    _TD,
    _ACs,
    _RBFM,
    _OSDDSPC,
    _ACp,
  ],
  [
    0,
    0,
    0,
    () => DefaultAction,
    0,
    () => Rules,
    () => VisibilityConfig,
    () => DataProtectionConfig,
    1,
    () => FirewallManagerRuleGroups,
    () => FirewallManagerRuleGroups,
    2,
    0,
    () => CustomResponseBodies,
    () => CaptchaConfig,
    () => ChallengeConfig,
    64 | 0,
    () => AssociationConfig,
    2,
    () => OnSourceDDoSProtectionConfig,
    () => ApplicationConfig,
  ]
);
export var XssMatchStatement = struct(n0, _XMS, 0, [_FTM, _TT], [() => FieldToMatch, () => TextTransformations]);
export var AddressFields = list(n0, _AFd, 0, () => AddressField);
export var ApplicationAttributes = list(n0, _AApp, 0, () => ApplicationAttribute);
export var AsnList = 64 | 1;

export var AttributeValues = 64 | 0;

export var CountryCodes = 64 | 0;

export var DataProtections = list(n0, _DPa, 0, () => DataProtection);
export var ExcludedRules = list(n0, _ERx, 0, () => ExcludedRule);
export var FieldToProtectKeys = 64 | 0;

export var FirewallManagerRuleGroups = list(n0, _FMRGi, 0, () => FirewallManagerRuleGroup);
export var ManagedRuleGroupConfigs = list(n0, _MRGCa, 0, () => ManagedRuleGroupConfig);
export var PhoneNumberFields = list(n0, _PNFh, 0, () => PhoneNumberField);
export var RateBasedStatementCustomKeys = list(n0, _RBSCKa, 0, () => RateBasedStatementCustomKey);
export var RegularExpressionList = list(n0, _REL, 0, () => Regex);
export var ResponseInspectionBodyContainsFailureStrings = 64 | 0;

export var ResponseInspectionBodyContainsSuccessStrings = 64 | 0;

export var ResponseInspectionHeaderFailureValues = 64 | 0;

export var ResponseInspectionHeaderSuccessValues = 64 | 0;

export var ResponseInspectionJsonFailureValues = 64 | 0;

export var ResponseInspectionJsonSuccessValues = 64 | 0;

export var ResponseInspectionStatusCodeFailureCodes = 64 | 1;

export var ResponseInspectionStatusCodeSuccessCodes = 64 | 1;

export var RuleActionOverrides = list(n0, _RAO, 0, () => RuleActionOverride);
export var Rules = list(n0, _R, 0, () => Rule);
export var Statements = list(n0, _S, 0, () => Statement);
export var TextTransformations = list(n0, _TT, 0, () => TextTransformation);
export var CustomResponseBodies = map(n0, _CRB, 0, 0, () => CustomResponseBody);
export var RequestBody = map(n0, _RB, 0, 0, () => RequestBodyAssociatedResourceTypeConfig);
export var CheckCapacity = op(
  n0,
  _CChe,
  0,
  () => CheckCapacityRequest,
  () => CheckCapacityResponse
);
export var CreateRegexPatternSet = op(
  n0,
  _CRPS,
  0,
  () => CreateRegexPatternSetRequest,
  () => CreateRegexPatternSetResponse
);
export var CreateRuleGroup = op(
  n0,
  _CRG,
  0,
  () => CreateRuleGroupRequest,
  () => CreateRuleGroupResponse
);
export var CreateWebACL = op(
  n0,
  _CWACL,
  0,
  () => CreateWebACLRequest,
  () => CreateWebACLResponse
);
export var GetRegexPatternSet = op(
  n0,
  _GRPS,
  0,
  () => GetRegexPatternSetRequest,
  () => GetRegexPatternSetResponse
);
export var GetRuleGroup = op(
  n0,
  _GRG,
  0,
  () => GetRuleGroupRequest,
  () => GetRuleGroupResponse
);
export var GetWebACL = op(
  n0,
  _GWACL,
  0,
  () => GetWebACLRequest,
  () => GetWebACLResponse
);
export var GetWebACLForResource = op(
  n0,
  _GWACLFR,
  0,
  () => GetWebACLForResourceRequest,
  () => GetWebACLForResourceResponse
);
export var UpdateRegexPatternSet = op(
  n0,
  _URPS,
  0,
  () => UpdateRegexPatternSetRequest,
  () => UpdateRegexPatternSetResponse
);
export var UpdateRuleGroup = op(
  n0,
  _URG,
  0,
  () => UpdateRuleGroupRequest,
  () => UpdateRuleGroupResponse
);
export var UpdateWebACL = op(
  n0,
  _UWACL,
  0,
  () => UpdateWebACLRequest,
  () => UpdateWebACLResponse
);
