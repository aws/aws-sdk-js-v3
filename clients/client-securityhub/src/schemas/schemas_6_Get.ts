// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _AAI,
  _AAN,
  _Act,
  _ARALV,
  _ARAV,
  _ARFFUV,
  _ASFF,
  _ASFL,
  _BF,
  _BFL,
  _BFo,
  _CA,
  _CAon,
  _CARV,
  _CARVR,
  _CARVRr,
  _CASI,
  _CF,
  _CFL,
  _CFo,
  _Cid,
  _CIR,
  _CIre,
  _CIRr,
  _CN,
  _Com,
  _Con,
  _COo,
  _Cr,
  _Cri,
  _CS,
  _CSCI,
  _CSCPN,
  _CSCPV,
  _CTl,
  _D,
  _DF,
  _EIC,
  _FFU,
  _Fil,
  _Filt,
  _Fin,
  _FNie,
  _FOA,
  _FPFC,
  _FPFCi,
  _FPFRFI,
  _FPFRFPA,
  _FPFSL,
  _FPFSO,
  _FPFT,
  _GARV,
  _GARVR,
  _GARVRe,
  _GBA,
  _GBF,
  _GBR,
  _GBRr,
  _GBRrou,
  _GF,
  _GFR,
  _GFRe,
  _GFSV,
  _GFSVR,
  _GFSVRe,
  _GFV,
  _GFVR,
  _GFVRe,
  _GIe,
  _GIet,
  _GIR,
  _GIRe,
  _h,
  _I,
  _IAns,
  _IAnsi,
  _Id,
  _IF,
  _IFL,
  _ILn,
  _Insi,
  _Insig,
  _Ke,
  _KF,
  _KFL,
  _LOA,
  _MF,
  _MNa,
  _MPalw,
  _MRa,
  _MSal,
  _MSR,
  _MTal,
  _N,
  _NDD,
  _NDe,
  _NDIV,
  _NDIVe,
  _NDP,
  _NF,
  _No,
  _NPe,
  _NSD,
  _NSIV,
  _NSIVe,
  _NSM,
  _NSP,
  _NT,
  _NTe,
  _NUA,
  _NUB,
  _OBF,
  _OBFL,
  _ODF,
  _ODFL,
  _OFC,
  _OFF,
  _OMF,
  _OMFL,
  _ONF,
  _ONFL,
  _Oper,
  _OSF,
  _OSFL,
  _PA,
  _PFr,
  _PLA,
  _PNr,
  _PNro,
  _PPP,
  _PPr,
  _PPro,
  _PTA,
  _RA,
  _RAA,
  _RAEIII,
  _RAEIIIPA,
  _RAEIIVA,
  _RAEIIVAe,
  _RAEIKN,
  _RAEILA,
  _RAEISI,
  _RAEIT,
  _RAEIVI,
  _RAIAKCA,
  _RAIAKPN,
  _RAIAKS,
  _RAIAKUN,
  _RAIUUN,
  _RAN,
  _RASBOI,
  _RASBON,
  _RCII,
  _RCIN,
  _RCLA,
  _RCN,
  _RDO,
  _Reg,
  _RFI,
  _RFPA,
  _RI,
  _RIu,
  _RN,
  _RO,
  _RP,
  _RR,
  _RS,
  _RSe,
  _RT,
  _RTe,
  _RTec,
  _Sam,
  _SCor,
  _SF,
  _SIe,
  _SIt,
  _SL,
  _SNev,
  _SOo,
  _SPe,
  _SU,
  _T,
  _Tags,
  _Ti,
  _TIIC,
  _TIILOA,
  _TIIS,
  _TIISU,
  _TIIT,
  _TIIV,
  _UA,
  _UARV,
  _UARVR,
  _UARVRp,
  _UDF,
  _UFpd,
  _UFR,
  _UFRp,
  _UIp,
  _UIR,
  _UIRp,
  _Val,
  _VEA,
  _VFA,
  _VS,
  _WS,
  _WSo,
  DateFilter,
  MapFilter,
  n0,
  NumberFilter,
  StringFilter,
} from "./schemas_0";
import { AwsSecurityFinding } from "./schemas_2_Security";
import { DateFilterList, MapFilterList, NumberFilterList, StringFilterList } from "./schemas_5_Automation";
import { GroupByResults } from "./schemas_10_Get";
import { NoteUpdate } from "./schemas_28_Automation";
import { SortCriteria } from "./schemas_58_Get";

/* eslint no-var: 0 */

export var AutomationRulesActionV2 = struct(
  n0,
  _ARAV,
  0,
  [_T, _FFU, _EIC],
  [0, () => AutomationRulesFindingFieldsUpdateV2, () => ExternalIntegrationConfiguration]
);
export var AutomationRulesFindingFieldsUpdateV2 = struct(n0, _ARFFUV, 0, [_SIe, _Com, _SIt], [1, 0, 1]);
export var AwsSecurityFindingFilters = struct(
  n0,
  _ASFF,
  0,
  [
    _PA,
    _AAI,
    _I,
    _GIe,
    _Reg,
    _T,
    _FOA,
    _LOA,
    _CA,
    _UA,
    _SPe,
    _SNev,
    _SL,
    _Con,
    _Cri,
    _Ti,
    _D,
    _RTec,
    _SU,
    _PFr,
    _PNr,
    _CN,
    _UDF,
    _MNa,
    _MTal,
    _MPalw,
    _MSal,
    _NDe,
    _NPe,
    _NSIV,
    _NSIVe,
    _NSP,
    _NSD,
    _NSM,
    _NDIV,
    _NDIVe,
    _NDP,
    _NDD,
    _PNro,
    _PPr,
    _PPro,
    _PPP,
    _PLA,
    _PTA,
    _TIIT,
    _TIIV,
    _TIIC,
    _TIILOA,
    _TIIS,
    _TIISU,
    _RT,
    _RI,
    _RP,
    _RR,
    _RTe,
    _RAEIT,
    _RAEIII,
    _RAEIIVA,
    _RAEIIVAe,
    _RAEIKN,
    _RAEIIIPA,
    _RAEIVI,
    _RAEISI,
    _RAEILA,
    _RASBOI,
    _RASBON,
    _RAIAKUN,
    _RAIAKPN,
    _RAIAKS,
    _RAIAKCA,
    _RAIUUN,
    _RCN,
    _RCII,
    _RCIN,
    _RCLA,
    _RDO,
    _CS,
    _VS,
    _WSo,
    _WS,
    _RSe,
    _RFPA,
    _RFI,
    _NT,
    _NUA,
    _NUB,
    _Ke,
    _FPFC,
    _FPFCi,
    _FPFRFI,
    _FPFRFPA,
    _FPFSL,
    _FPFSO,
    _FPFT,
    _Sam,
    _CSCI,
    _CASI,
    _VEA,
    _VFA,
    _CSCPN,
    _CSCPV,
    _AAN,
    _RAN,
    _RAA,
  ],
  [
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => DateFilterList,
    () => DateFilterList,
    () => DateFilterList,
    () => DateFilterList,
    () => NumberFilterList,
    () => NumberFilterList,
    () => StringFilterList,
    () => NumberFilterList,
    () => NumberFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => MapFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => MapFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => IpFilterList,
    () => IpFilterList,
    () => NumberFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => IpFilterList,
    () => IpFilterList,
    () => NumberFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => NumberFilterList,
    () => NumberFilterList,
    () => DateFilterList,
    () => DateFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => DateFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => MapFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => IpFilterList,
    () => IpFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => DateFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => DateFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => DateFilterList,
    () => MapFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => DateFilterList,
    () => StringFilterList,
    () => KeywordFilterList,
    () => NumberFilterList,
    () => NumberFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => BooleanFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
  ]
);
export var BooleanFilter = struct(n0, _BF, 0, [_Val], [2]);
export var CompositeFilter = struct(
  n0,
  _CF,
  0,
  [_SF, _DF, _BFo, _NF, _MF, _Oper],
  [
    () => OcsfStringFilterList,
    () => OcsfDateFilterList,
    () => OcsfBooleanFilterList,
    () => OcsfNumberFilterList,
    () => OcsfMapFilterList,
    0,
  ]
);
export var CreateAutomationRuleV2Request = struct(
  n0,
  _CARVR,
  0,
  [_RN, _RS, _D, _RO, _Cr, _Act, _Tags, _CTl],
  [0, 0, 0, 1, () => Criteria, () => AutomationRulesActionListV2, 128 | 0, [0, 4]]
);
export var CreateAutomationRuleV2Response = struct(n0, _CARVRr, 0, [_RA, _RIu], [0, 0]);
export var CreateInsightRequest = struct(n0, _CIR, 0, [_N, _Filt, _GBA], [0, () => AwsSecurityFindingFilters, 0]);
export var CreateInsightResponse = struct(n0, _CIRr, 0, [_IAns], [0]);
export var ExternalIntegrationConfiguration = struct(n0, _EIC, 0, [_CAon], [0]);
export var GetAutomationRuleV2Request = struct(n0, _GARVR, 0, [_Id], [[0, 1]]);
export var GetAutomationRuleV2Response = struct(
  n0,
  _GARVRe,
  0,
  [_RA, _RIu, _RO, _RN, _RS, _D, _Cr, _Act, _CA, _UA],
  [0, 0, 1, 0, 0, 0, () => Criteria, () => AutomationRulesActionListV2, 5, 5]
);
export var GetFindingsRequest = struct(
  n0,
  _GFR,
  0,
  [_Filt, _SCor, _NTe, _MRa],
  [() => AwsSecurityFindingFilters, () => SortCriteria, 0, 1]
);
export var GetFindingsResponse = struct(n0, _GFRe, 0, [_Fin, _NTe], [() => AwsSecurityFindingList, 0]);
export var GetFindingStatisticsV2Request = struct(n0, _GFSVR, 0, [_GBR, _SOo, _MSR], [() => GroupByRules, 0, 1]);
export var GetFindingStatisticsV2Response = struct(n0, _GFSVRe, 0, [_GBRr], [() => GroupByResults]);
export var GetFindingsV2Request = struct(
  n0,
  _GFVR,
  0,
  [_Filt, _SCor, _NTe, _MRa],
  [() => OcsfFindingFilters, () => SortCriteria, 0, 1]
);
export var GetFindingsV2Response = struct(n0, _GFVRe, 0, [_Fin, _NTe], [64 | 15, 0]);
export var GetInsightsRequest = struct(n0, _GIR, 0, [_IAnsi, _NTe, _MRa], [64 | 0, 0, 1]);
export var GetInsightsResponse = struct(n0, _GIRe, 0, [_Insi, _NTe], [() => InsightList, 0]);
export var GroupByRule = struct(n0, _GBRrou, 0, [_Filt, _GBF], [() => OcsfFindingFilters, 0]);
export var Insight = struct(n0, _Insig, 0, [_IAns, _N, _Filt, _GBA], [0, 0, () => AwsSecurityFindingFilters, 0]);
export var IpFilter = struct(n0, _IF, 0, [_Cid], [0]);
export var KeywordFilter = struct(n0, _KF, 0, [_Val], [0]);
export var OcsfBooleanFilter = struct(n0, _OBF, 0, [_FNie, _Fil], [0, () => BooleanFilter]);
export var OcsfDateFilter = struct(n0, _ODF, 0, [_FNie, _Fil], [0, () => DateFilter]);
export var OcsfFindingFilters = struct(n0, _OFF, 0, [_CFo, _COo], [() => CompositeFilterList, 0]);
export var OcsfMapFilter = struct(n0, _OMF, 0, [_FNie, _Fil], [0, () => MapFilter]);
export var OcsfNumberFilter = struct(n0, _ONF, 0, [_FNie, _Fil], [0, () => NumberFilter]);
export var OcsfStringFilter = struct(n0, _OSF, 0, [_FNie, _Fil], [0, () => StringFilter]);
export var UpdateAutomationRuleV2Request = struct(
  n0,
  _UARVR,
  0,
  [_Id, _RS, _RO, _D, _RN, _Cr, _Act],
  [[0, 1], 0, 1, 0, 0, () => Criteria, () => AutomationRulesActionListV2]
);
export var UpdateAutomationRuleV2Response = struct(n0, _UARVRp, 0, [], []);
export var UpdateFindingsRequest = struct(
  n0,
  _UFR,
  0,
  [_Filt, _No, _RSe],
  [() => AwsSecurityFindingFilters, () => NoteUpdate, 0]
);
export var UpdateFindingsResponse = struct(n0, _UFRp, 0, [], []);
export var UpdateInsightRequest = struct(
  n0,
  _UIR,
  0,
  [_IAns, _N, _Filt, _GBA],
  [[0, 1], 0, () => AwsSecurityFindingFilters, 0]
);
export var UpdateInsightResponse = struct(n0, _UIRp, 0, [], []);
export var AutomationRulesActionListV2 = list(n0, _ARALV, 0, () => AutomationRulesActionV2);
export var AwsSecurityFindingList = list(n0, _ASFL, 0, () => AwsSecurityFinding);
export var BooleanFilterList = list(n0, _BFL, 0, () => BooleanFilter);
export var CompositeFilterList = list(n0, _CFL, 0, () => CompositeFilter);
export var GroupByRules = list(n0, _GBR, 0, () => GroupByRule);
export var InsightList = list(n0, _ILn, 0, () => Insight);
export var IpFilterList = list(n0, _IFL, 0, () => IpFilter);
export var KeywordFilterList = list(n0, _KFL, 0, () => KeywordFilter);
export var OcsfBooleanFilterList = list(n0, _OBFL, 0, () => OcsfBooleanFilter);
export var OcsfDateFilterList = list(n0, _ODFL, 0, () => OcsfDateFilter);
export var OcsfFindingsList = 64 | 15;

export var OcsfMapFilterList = list(n0, _OMFL, 0, () => OcsfMapFilter);
export var OcsfNumberFilterList = list(n0, _ONFL, 0, () => OcsfNumberFilter);
export var OcsfStringFilterList = list(n0, _OSFL, 0, () => OcsfStringFilter);
export var Criteria = uni(n0, _Cr, 0, [_OFC], [() => OcsfFindingFilters]);
export var CreateAutomationRuleV2 = op(
  n0,
  _CARV,
  {
    [_h]: ["POST", "/automationrulesv2/create", 200],
  },
  () => CreateAutomationRuleV2Request,
  () => CreateAutomationRuleV2Response
);
export var CreateInsight = op(
  n0,
  _CIre,
  {
    [_h]: ["POST", "/insights", 200],
  },
  () => CreateInsightRequest,
  () => CreateInsightResponse
);
export var GetAutomationRuleV2 = op(
  n0,
  _GARV,
  {
    [_h]: ["GET", "/automationrulesv2/{Identifier}", 200],
  },
  () => GetAutomationRuleV2Request,
  () => GetAutomationRuleV2Response
);
export var GetFindings = op(
  n0,
  _GF,
  {
    [_h]: ["POST", "/findings", 200],
  },
  () => GetFindingsRequest,
  () => GetFindingsResponse
);
export var GetFindingStatisticsV2 = op(
  n0,
  _GFSV,
  {
    [_h]: ["POST", "/findingsv2/statistics", 200],
  },
  () => GetFindingStatisticsV2Request,
  () => GetFindingStatisticsV2Response
);
export var GetFindingsV2 = op(
  n0,
  _GFV,
  {
    [_h]: ["POST", "/findingsv2", 200],
  },
  () => GetFindingsV2Request,
  () => GetFindingsV2Response
);
export var GetInsights = op(
  n0,
  _GIet,
  {
    [_h]: ["POST", "/insights/get", 200],
  },
  () => GetInsightsRequest,
  () => GetInsightsResponse
);
export var UpdateAutomationRuleV2 = op(
  n0,
  _UARV,
  {
    [_h]: ["PATCH", "/automationrulesv2/{Identifier}", 200],
  },
  () => UpdateAutomationRuleV2Request,
  () => UpdateAutomationRuleV2Response
);
export var UpdateFindings = op(
  n0,
  _UFpd,
  {
    [_h]: ["PATCH", "/findings", 200],
  },
  () => UpdateFindingsRequest,
  () => UpdateFindingsResponse
);
export var UpdateInsight = op(
  n0,
  _UIp,
  {
    [_h]: ["PATCH", "/insights/{InsightArn+}", 200],
  },
  () => UpdateInsightRequest,
  () => UpdateInsightResponse
);
