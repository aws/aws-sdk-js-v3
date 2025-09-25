// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _Act,
  _AD,
  _ADn,
  _AN,
  _ARL,
  _ARn,
  _ARnal,
  _C,
  _CA,
  _CAu,
  _CC,
  _CFP,
  _CFPR,
  _CFPRr,
  _CSRC,
  _CSRCo,
  _De,
  _Def,
  _DFP,
  _DFPe,
  _DFPR,
  _DFPRe,
  _DFPRes,
  _DFPResc,
  _Di,
  _Dim,
  _DR,
  _DRG,
  _DRGM,
  _DRGMR,
  _DRGMRe,
  _DRGR,
  _DRGRe,
  _DTI,
  _EC,
  _ETLSSH,
  _FP,
  _FPA,
  _FPI,
  _FPN,
  _FPR,
  _FPS,
  _FT,
  _IPS,
  _IPSe,
  _IRI,
  _IT,
  _LMT,
  _NOA,
  _O,
  _PMA,
  _Pri,
  _PV,
  _RA,
  _RGA,
  _RGI,
  _RGN,
  _RGR,
  _RGS,
  _ROu,
  _ROul,
  _RV,
  _SAo,
  _SC,
  _SCA,
  _SDA,
  _SDAt,
  _SEO,
  _SEP,
  _SFDA,
  _SMo,
  _SRGO,
  _SRGR,
  _SRGRt,
  _SRGRta,
  _SRGRtat,
  _SRO,
  _STn,
  _SUT,
  _T,
  _TITS,
  _TLSICA,
  _Ty,
  _UFP,
  _UFPR,
  _UFPRp,
  _UT,
  _V,
  EncryptionConfiguration,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ActionDefinition = struct(n0, _AD, 0, [_PMA], [() => PublishMetricAction]);
export var AnalysisResult = struct(n0, _ARn, 0, [_IRI, _IT, _ADn], [64 | 0, 0, 0]);
export var CreateFirewallPolicyRequest = struct(
  n0,
  _CFPR,
  0,
  [_FPN, _FP, _De, _T, _DR, _EC],
  [0, () => FirewallPolicy, 0, () => TagList, 2, () => EncryptionConfiguration]
);
export var CreateFirewallPolicyResponse = struct(n0, _CFPRr, 0, [_UT, _FPR], [0, () => FirewallPolicyResponse]);
export var CustomAction = struct(n0, _CA, 0, [_AN, _AD], [0, () => ActionDefinition]);
export var DeleteFirewallPolicyRequest = struct(n0, _DFPR, 0, [_FPN, _FPA], [0, 0]);
export var DeleteFirewallPolicyResponse = struct(n0, _DFPRe, 0, [_FPR], [() => FirewallPolicyResponse]);
export var DeleteRuleGroupRequest = struct(n0, _DRGR, 0, [_RGN, _RGA, _Ty], [0, 0, 0]);
export var DeleteRuleGroupResponse = struct(n0, _DRGRe, 0, [_RGR], [() => RuleGroupResponse]);
export var DescribeFirewallPolicyRequest = struct(n0, _DFPRes, 0, [_FPN, _FPA], [0, 0]);
export var DescribeFirewallPolicyResponse = struct(
  n0,
  _DFPResc,
  0,
  [_UT, _FPR, _FP],
  [0, () => FirewallPolicyResponse, () => FirewallPolicy]
);
export var DescribeRuleGroupMetadataRequest = struct(n0, _DRGMR, 0, [_RGN, _RGA, _Ty], [0, 0, 0]);
export var DescribeRuleGroupMetadataResponse = struct(
  n0,
  _DRGMRe,
  0,
  [_RGA, _RGN, _De, _Ty, _C, _SRO, _LMT],
  [0, 0, 0, 0, 1, () => StatefulRuleOptions, 4]
);
export var Dimension = struct(n0, _Di, 0, [_V], [0]);
export var FirewallPolicy = struct(
  n0,
  _FP,
  0,
  [_SRGR, _SDA, _SFDA, _SCA, _SRGRt, _SDAt, _SEO, _TLSICA, _PV, _ETLSSH],
  [
    () => StatelessRuleGroupReferences,
    64 | 0,
    64 | 0,
    () => CustomActions,
    () => StatefulRuleGroupReferences,
    64 | 0,
    () => StatefulEngineOptions,
    0,
    () => PolicyVariables,
    2,
  ]
);
export var FirewallPolicyResponse = struct(
  n0,
  _FPR,
  0,
  [_FPN, _FPA, _FPI, _De, _FPS, _T, _CSRC, _CSRCo, _NOA, _EC, _LMT],
  [0, 0, 0, 0, 0, () => TagList, 1, 1, 1, () => EncryptionConfiguration, 4]
);
export var FlowTimeouts = struct(n0, _FT, 0, [_TITS], [1]);
export var IPSet = struct(n0, _IPS, 0, [_Def], [64 | 0]);
export var PolicyVariables = struct(n0, _PV, 0, [_RV], [() => IPSets]);
export var PublishMetricAction = struct(n0, _PMA, 0, [_Dim], [() => Dimensions]);
export var RuleGroupResponse = struct(
  n0,
  _RGR,
  0,
  [_RGA, _RGN, _RGI, _De, _Ty, _C, _RGS, _T, _CC, _NOA, _EC, _SMo, _STn, _LMT, _ARnal, _SC],
  [
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    () => TagList,
    1,
    1,
    () => EncryptionConfiguration,
    () => SourceMetadata,
    0,
    4,
    () => AnalysisResultList,
    () => SummaryConfiguration,
  ]
);
export var SourceMetadata = struct(n0, _SMo, 0, [_SAo, _SUT], [0, 0]);
export var StatefulEngineOptions = struct(n0, _SEO, 0, [_ROu, _SEP, _FT], [0, 0, () => FlowTimeouts]);
export var StatefulRuleGroupOverride = struct(n0, _SRGO, 0, [_Act], [0]);
export var StatefulRuleGroupReference = struct(
  n0,
  _SRGRta,
  0,
  [_RA, _Pri, _O, _DTI],
  [0, 1, () => StatefulRuleGroupOverride, 2]
);
export var StatefulRuleOptions = struct(n0, _SRO, 0, [_ROu], [0]);
export var StatelessRuleGroupReference = struct(n0, _SRGRtat, 0, [_RA, _Pri], [0, 1]);
export var SummaryConfiguration = struct(n0, _SC, 0, [_ROul], [64 | 0]);
export var UpdateFirewallPolicyRequest = struct(
  n0,
  _UFPR,
  0,
  [_UT, _FPA, _FPN, _FP, _De, _DR, _EC],
  [0, 0, 0, () => FirewallPolicy, 0, 2, () => EncryptionConfiguration]
);
export var UpdateFirewallPolicyResponse = struct(n0, _UFPRp, 0, [_UT, _FPR], [0, () => FirewallPolicyResponse]);
export var AnalysisResultList = list(n0, _ARL, 0, () => AnalysisResult);
export var CustomActions = list(n0, _CAu, 0, () => CustomAction);
export var Dimensions = list(n0, _Dim, 0, () => Dimension);
export var RuleIdList = 64 | 0;

export var StatefulActions = 64 | 0;

export var StatefulRuleGroupReferences = list(n0, _SRGRt, 0, () => StatefulRuleGroupReference);
export var StatelessActions = 64 | 0;

export var StatelessRuleGroupReferences = list(n0, _SRGR, 0, () => StatelessRuleGroupReference);
export var SummaryRuleOptions = 64 | 0;

export var VariableDefinitionList = 64 | 0;

export var IPSets = map(n0, _IPSe, 0, 0, () => IPSet);
export var CreateFirewallPolicy = op(
  n0,
  _CFP,
  0,
  () => CreateFirewallPolicyRequest,
  () => CreateFirewallPolicyResponse
);
export var DeleteFirewallPolicy = op(
  n0,
  _DFP,
  0,
  () => DeleteFirewallPolicyRequest,
  () => DeleteFirewallPolicyResponse
);
export var DeleteRuleGroup = op(
  n0,
  _DRG,
  0,
  () => DeleteRuleGroupRequest,
  () => DeleteRuleGroupResponse
);
export var DescribeFirewallPolicy = op(
  n0,
  _DFPe,
  0,
  () => DescribeFirewallPolicyRequest,
  () => DescribeFirewallPolicyResponse
);
export var DescribeRuleGroupMetadata = op(
  n0,
  _DRGM,
  0,
  () => DescribeRuleGroupMetadataRequest,
  () => DescribeRuleGroupMetadataResponse
);
export var UpdateFirewallPolicy = op(
  n0,
  _UFP,
  0,
  () => UpdateFirewallPolicyRequest,
  () => UpdateFirewallPolicyResponse
);
