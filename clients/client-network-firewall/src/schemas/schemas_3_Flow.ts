// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _A,
  _Ac,
  _Act,
  _Ad,
  _ADd,
  _Ag,
  _ARG,
  _AZ,
  _BC,
  _C,
  _CAA,
  _CAu,
  _CCRS,
  _CCRSA,
  _CRG,
  _CRGR,
  _CRGRr,
  _CTLSIC,
  _CTLSICR,
  _CTLSICRr,
  _DA,
  _De,
  _Def,
  _Des,
  _Dest,
  _DFO,
  _DFOR,
  _DFORe,
  _Dir,
  _DPe,
  _DPes,
  _DR,
  _DRGe,
  _DRGRes,
  _DRGResc,
  _DTLSICe,
  _DTLSICRes,
  _DTLSICResc,
  _EC,
  _FAi,
  _FF,
  _FFl,
  _Fl,
  _Fla,
  _Flo,
  _FO,
  _FOI,
  _FOS,
  _FOT,
  _FPr,
  _FRT,
  _GRT,
  _He,
  _IPSe,
  _IPSR,
  _IPSRe,
  _IPSRM,
  _K,
  _LFORis,
  _LFORR,
  _LFORRi,
  _MA,
  _Ma,
  _MFAIS,
  _MR,
  _NT,
  _P,
  _PC,
  _PR,
  _Pr,
  _Pri,
  _PRo,
  _PS,
  _PSo,
  _R,
  _RA,
  _RAe,
  _RD,
  _RG,
  _RGA,
  _RGN,
  _RGR,
  _RO,
  _ROul,
  _RS,
  _RSA,
  _RSL,
  _RSu,
  _RSul,
  _RV,
  _SA,
  _SC,
  _SCC,
  _SCCe,
  _SCe,
  _SCer,
  _Sco,
  _SCS,
  _SCSe,
  _Se,
  _SFC,
  _SFCR,
  _SFCRt,
  _SFF,
  _SFFR,
  _SFFRt,
  _SMo,
  _SMt,
  _So,
  _Sou,
  _SP,
  _SPo,
  _SR,
  _SRACA,
  _SRO,
  _SRt,
  _SRta,
  _SRtat,
  _T,
  _Ta,
  _TCPF,
  _TCPFF,
  _TLSIC,
  _TLSICA,
  _TLSICN,
  _TLSICR,
  _TP,
  _TT,
  _Ty,
  _URG,
  _URGR,
  _URGRp,
  _USA,
  _UT,
  _UTLSIC,
  _UTLSICR,
  _UTLSICRp,
  _VEAA,
  _VEI,
  EncryptionConfiguration,
  n0,
  TagList,
} from "./schemas_0";
import {
  CustomActions,
  IPSets,
  RuleGroupResponse,
  SourceMetadata,
  StatefulRuleOptions,
  SummaryConfiguration,
} from "./schemas_1_Group";
import { TLSInspectionConfigurationResponse } from "./schemas_8_Configuration";

/* eslint no-var: 0 */

export var Address = struct(n0, _A, 0, [_ADd], [0]);
export var CheckCertificateRevocationStatusActions = struct(n0, _CCRSA, 0, [_RSA, _USA], [0, 0]);
export var CreateRuleGroupRequest = struct(
  n0,
  _CRGR,
  0,
  [_RGN, _RG, _R, _Ty, _De, _C, _T, _DR, _EC, _SMo, _ARG, _SC],
  [
    0,
    () => RuleGroup,
    0,
    0,
    0,
    1,
    () => TagList,
    2,
    () => EncryptionConfiguration,
    () => SourceMetadata,
    2,
    () => SummaryConfiguration,
  ]
);
export var CreateRuleGroupResponse = struct(n0, _CRGRr, 0, [_UT, _RGR], [0, () => RuleGroupResponse]);
export var CreateTLSInspectionConfigurationRequest = struct(
  n0,
  _CTLSICR,
  0,
  [_TLSICN, _TLSIC, _De, _T, _EC],
  [0, () => TLSInspectionConfiguration, 0, () => TagList, () => EncryptionConfiguration]
);
export var CreateTLSInspectionConfigurationResponse = struct(
  n0,
  _CTLSICRr,
  0,
  [_UT, _TLSICR],
  [0, () => TLSInspectionConfigurationResponse]
);
export var DescribeFlowOperationRequest = struct(n0, _DFOR, 0, [_FAi, _AZ, _VEAA, _VEI, _FOI], [0, 0, 0, 0, 0]);
export var DescribeFlowOperationResponse = struct(
  n0,
  _DFORe,
  0,
  [_FAi, _AZ, _VEAA, _VEI, _FOI, _FOT, _FOS, _SMt, _FRT, _FO],
  [0, 0, 0, 0, 0, 0, 0, 0, 4, () => FlowOperation]
);
export var DescribeRuleGroupRequest = struct(n0, _DRGRes, 0, [_RGN, _RGA, _Ty, _ARG], [0, 0, 0, 2]);
export var DescribeRuleGroupResponse = struct(
  n0,
  _DRGResc,
  0,
  [_UT, _RG, _RGR],
  [0, () => RuleGroup, () => RuleGroupResponse]
);
export var DescribeTLSInspectionConfigurationRequest = struct(n0, _DTLSICRes, 0, [_TLSICA, _TLSICN], [0, 0]);
export var DescribeTLSInspectionConfigurationResponse = struct(
  n0,
  _DTLSICResc,
  0,
  [_UT, _TLSIC, _TLSICR],
  [0, () => TLSInspectionConfiguration, () => TLSInspectionConfigurationResponse]
);
export var Flow = struct(
  n0,
  _Fl,
  0,
  [_SA, _DA, _SP, _DPe, _P, _Ag, _PC, _BC],
  [() => Address, () => Address, 0, 0, 0, 1, 1, 1]
);
export var FlowFilter = struct(n0, _FF, 0, [_SA, _DA, _SP, _DPe, _Pr], [() => Address, () => Address, 0, 0, 64 | 0]);
export var FlowOperation = struct(n0, _FO, 0, [_MFAIS, _FFl], [1, () => FlowFilters]);
export var Header = struct(n0, _He, 0, [_P, _So, _SP, _Dir, _Des, _DPe], [0, 0, 0, 0, 0, 0]);
export var IPSetReference = struct(n0, _IPSRe, 0, [_RAe], [0]);
export var ListFlowOperationResultsRequest = struct(
  n0,
  _LFORR,
  0,
  [_FAi, _FOI, _NT, _MR, _AZ, _VEI, _VEAA],
  [0, 0, 0, 1, 0, 0, 0]
);
export var ListFlowOperationResultsResponse = struct(
  n0,
  _LFORRi,
  0,
  [_FAi, _AZ, _VEAA, _VEI, _FOI, _FOS, _SMt, _FRT, _Flo, _NT],
  [0, 0, 0, 0, 0, 0, 0, 4, () => Flows, 0]
);
export var MatchAttributes = struct(
  n0,
  _MA,
  0,
  [_Sou, _Dest, _SPo, _DPes, _Pr, _TCPF],
  [() => Addresses, () => Addresses, () => PortRanges, () => PortRanges, 64 | 1, () => TCPFlags]
);
export var PortRange = struct(n0, _PR, 0, [_FPr, _TP], [1, 1]);
export var PortSet = struct(n0, _PS, 0, [_Def], [64 | 0]);
export var ReferenceSets = struct(n0, _RS, 0, [_IPSR], [() => IPSetReferenceMap]);
export var RuleDefinition = struct(n0, _RD, 0, [_MA, _Ac], [() => MatchAttributes, 64 | 0]);
export var RuleGroup = struct(
  n0,
  _RG,
  0,
  [_RV, _RS, _RSu, _SRO],
  [() => RuleVariables, () => ReferenceSets, () => RulesSource, () => StatefulRuleOptions]
);
export var RuleOption = struct(n0, _RO, 0, [_K, _Se], [0, 64 | 0]);
export var RulesSource = struct(
  n0,
  _RSu,
  0,
  [_RSul, _RSL, _SR, _SRACA],
  [0, () => RulesSourceList, () => StatefulRules, () => StatelessRulesAndCustomActions]
);
export var RulesSourceList = struct(n0, _RSL, 0, [_Ta, _TT, _GRT], [64 | 0, 64 | 0, 0]);
export var RuleVariables = struct(n0, _RV, 0, [_IPSe, _PSo], [() => IPSets, () => PortSets]);
export var ServerCertificate = struct(n0, _SCe, 0, [_RA], [0]);
export var ServerCertificateConfiguration = struct(
  n0,
  _SCC,
  0,
  [_SCer, _Sco, _CAA, _CCRS],
  [() => ServerCertificates, () => ServerCertificateScopes, 0, () => CheckCertificateRevocationStatusActions]
);
export var ServerCertificateScope = struct(
  n0,
  _SCS,
  0,
  [_Sou, _Dest, _SPo, _DPes, _Pr],
  [() => Addresses, () => Addresses, () => PortRanges, () => PortRanges, 64 | 1]
);
export var StartFlowCaptureRequest = struct(
  n0,
  _SFCR,
  0,
  [_FAi, _AZ, _VEAA, _VEI, _MFAIS, _FFl],
  [0, 0, 0, 0, 1, () => FlowFilters]
);
export var StartFlowCaptureResponse = struct(n0, _SFCRt, 0, [_FAi, _FOI, _FOS], [0, 0, 0]);
export var StartFlowFlushRequest = struct(
  n0,
  _SFFR,
  0,
  [_FAi, _AZ, _VEAA, _VEI, _MFAIS, _FFl],
  [0, 0, 0, 0, 1, () => FlowFilters]
);
export var StartFlowFlushResponse = struct(n0, _SFFRt, 0, [_FAi, _FOI, _FOS], [0, 0, 0]);
export var StatefulRule = struct(n0, _SRt, 0, [_Act, _He, _ROul], [0, () => Header, () => RuleOptions]);
export var StatelessRule = struct(n0, _SRta, 0, [_RD, _Pri], [() => RuleDefinition, 1]);
export var StatelessRulesAndCustomActions = struct(
  n0,
  _SRACA,
  0,
  [_SRtat, _CAu],
  [() => StatelessRules, () => CustomActions]
);
export var TCPFlagField = struct(n0, _TCPFF, 0, [_Fla, _Ma], [64 | 0, 64 | 0]);
export var TLSInspectionConfiguration = struct(n0, _TLSIC, 0, [_SCCe], [() => ServerCertificateConfigurations]);
export var UpdateRuleGroupRequest = struct(
  n0,
  _URGR,
  0,
  [_UT, _RGA, _RGN, _RG, _R, _Ty, _De, _DR, _EC, _SMo, _ARG, _SC],
  [
    0,
    0,
    0,
    () => RuleGroup,
    0,
    0,
    0,
    2,
    () => EncryptionConfiguration,
    () => SourceMetadata,
    2,
    () => SummaryConfiguration,
  ]
);
export var UpdateRuleGroupResponse = struct(n0, _URGRp, 0, [_UT, _RGR], [0, () => RuleGroupResponse]);
export var UpdateTLSInspectionConfigurationRequest = struct(
  n0,
  _UTLSICR,
  0,
  [_TLSICA, _TLSICN, _TLSIC, _De, _EC, _UT],
  [0, 0, () => TLSInspectionConfiguration, 0, () => EncryptionConfiguration, 0]
);
export var UpdateTLSInspectionConfigurationResponse = struct(
  n0,
  _UTLSICRp,
  0,
  [_UT, _TLSICR],
  [0, () => TLSInspectionConfigurationResponse]
);
export var Addresses = list(n0, _Ad, 0, () => Address);
export var Flags = 64 | 0;

export var FlowFilters = list(n0, _FFl, 0, () => FlowFilter);
export var Flows = list(n0, _Flo, 0, () => Flow);
export var PortRanges = list(n0, _PRo, 0, () => PortRange);
export var ProtocolNumbers = 64 | 1;

export var ProtocolStrings = 64 | 0;

export var RuleOptions = list(n0, _ROul, 0, () => RuleOption);
export var RuleTargets = 64 | 0;

export var ServerCertificateConfigurations = list(n0, _SCCe, 0, () => ServerCertificateConfiguration);
export var ServerCertificates = list(n0, _SCer, 0, () => ServerCertificate);
export var ServerCertificateScopes = list(n0, _SCSe, 0, () => ServerCertificateScope);
export var Settings = 64 | 0;

export var StatefulRules = list(n0, _SR, 0, () => StatefulRule);
export var StatelessRules = list(n0, _SRtat, 0, () => StatelessRule);
export var TargetTypes = 64 | 0;

export var TCPFlags = list(n0, _TCPF, 0, () => TCPFlagField);
export var IPSetReferenceMap = map(n0, _IPSRM, 0, 0, () => IPSetReference);
export var PortSets = map(n0, _PSo, 0, 0, () => PortSet);
export var CreateRuleGroup = op(
  n0,
  _CRG,
  0,
  () => CreateRuleGroupRequest,
  () => CreateRuleGroupResponse
);
export var CreateTLSInspectionConfiguration = op(
  n0,
  _CTLSIC,
  0,
  () => CreateTLSInspectionConfigurationRequest,
  () => CreateTLSInspectionConfigurationResponse
);
export var DescribeFlowOperation = op(
  n0,
  _DFO,
  0,
  () => DescribeFlowOperationRequest,
  () => DescribeFlowOperationResponse
);
export var DescribeRuleGroup = op(
  n0,
  _DRGe,
  0,
  () => DescribeRuleGroupRequest,
  () => DescribeRuleGroupResponse
);
export var DescribeTLSInspectionConfiguration = op(
  n0,
  _DTLSICe,
  0,
  () => DescribeTLSInspectionConfigurationRequest,
  () => DescribeTLSInspectionConfigurationResponse
);
export var ListFlowOperationResults = op(
  n0,
  _LFORis,
  0,
  () => ListFlowOperationResultsRequest,
  () => ListFlowOperationResultsResponse
);
export var StartFlowCapture = op(
  n0,
  _SFC,
  0,
  () => StartFlowCaptureRequest,
  () => StartFlowCaptureResponse
);
export var StartFlowFlush = op(
  n0,
  _SFF,
  0,
  () => StartFlowFlushRequest,
  () => StartFlowFlushResponse
);
export var UpdateRuleGroup = op(
  n0,
  _URG,
  0,
  () => UpdateRuleGroupRequest,
  () => UpdateRuleGroupResponse
);
export var UpdateTLSInspectionConfiguration = op(
  n0,
  _UTLSIC,
  0,
  () => UpdateTLSInspectionConfigurationRequest,
  () => UpdateTLSInspectionConfigurationResponse
);
