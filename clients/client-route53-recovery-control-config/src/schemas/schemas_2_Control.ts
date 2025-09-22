// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AC,
  _AR,
  _ARU,
  _ASSERTION,
  _CA,
  _CCP,
  _CCPR,
  _CCPRr,
  _CP,
  _CPA,
  _CPN,
  _CPo,
  _CSR,
  _CSRR,
  _CSRRr,
  _CT,
  _DCP,
  _DCPes,
  _DCPRes,
  _DCPResc,
  _DSRe,
  _DSRRes,
  _DSRResc,
  _GATING,
  _GC,
  _GR,
  _GRU,
  _h,
  _hQ,
  _I,
  _LCP,
  _LCPR,
  _LCPRi,
  _lOCP,
  _lOR,
  _LSR,
  _LSRR,
  _LSRRi,
  _MR,
  _N,
  _NAR,
  _NGR,
  _NTe,
  _O,
  _RC,
  _RCC,
  _Ru,
  _S,
  _SR,
  _SRA,
  _T,
  _TC,
  _Th,
  _Ty,
  _UCP,
  _UCPR,
  _UCPRp,
  _USR,
  _USRR,
  _USRRp,
  _WPM,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssertionRule = struct(
  n0,
  _AR,
  0,
  [_AC, _CPA, _N, _RC, _SRA, _S, _WPM, _O],
  [64 | 0, 0, 0, () => RuleConfig, 0, 0, 1, 0]
);
export var AssertionRuleUpdate = struct(n0, _ARU, 0, [_N, _SRA, _WPM], [0, 0, 1]);
export var ControlPanel = struct(n0, _CP, 0, [_CA, _CPA, _DCP, _N, _RCC, _S, _O], [0, 0, 2, 0, 1, 0, 0]);
export var CreateControlPanelRequest = struct(n0, _CCPR, 0, [_CT, _CA, _CPN, _T], [[0, 4], 0, 0, 128 | 0]);
export var CreateControlPanelResponse = struct(n0, _CCPRr, 0, [_CP], [() => ControlPanel]);
export var CreateSafetyRuleRequest = struct(
  n0,
  _CSRR,
  0,
  [_AR, _CT, _GR, _T],
  [() => NewAssertionRule, [0, 4], () => NewGatingRule, 128 | 0]
);
export var CreateSafetyRuleResponse = struct(n0, _CSRRr, 0, [_AR, _GR], [() => AssertionRule, () => GatingRule]);
export var DescribeControlPanelRequest = struct(n0, _DCPRes, 0, [_CPA], [[0, 1]]);
export var DescribeControlPanelResponse = struct(n0, _DCPResc, 0, [_CP], [() => ControlPanel]);
export var DescribeSafetyRuleRequest = struct(n0, _DSRRes, 0, [_SRA], [[0, 1]]);
export var DescribeSafetyRuleResponse = struct(n0, _DSRResc, 0, [_AR, _GR], [() => AssertionRule, () => GatingRule]);
export var GatingRule = struct(
  n0,
  _GR,
  0,
  [_CPA, _GC, _N, _RC, _SRA, _S, _TC, _WPM, _O],
  [0, 64 | 0, 0, () => RuleConfig, 0, 0, 64 | 0, 1, 0]
);
export var GatingRuleUpdate = struct(n0, _GRU, 0, [_N, _SRA, _WPM], [0, 0, 1]);
export var ListControlPanelsRequest = struct(
  n0,
  _LCPR,
  0,
  [_CA, _MR, _NTe],
  [
    [
      0,
      {
        [_hQ]: _CA,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NTe,
      },
    ],
  ]
);
export var ListControlPanelsResponse = struct(n0, _LCPRi, 0, [_CPo, _NTe], [() => __listOfControlPanel, 0]);
export var ListSafetyRulesRequest = struct(
  n0,
  _LSRR,
  0,
  [_CPA, _MR, _NTe],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NTe,
      },
    ],
  ]
);
export var ListSafetyRulesResponse = struct(n0, _LSRRi, 0, [_NTe, _SR], [0, () => __listOfRule]);
export var NewAssertionRule = struct(n0, _NAR, 0, [_AC, _CPA, _N, _RC, _WPM], [64 | 0, 0, 0, () => RuleConfig, 1]);
export var NewGatingRule = struct(
  n0,
  _NGR,
  0,
  [_CPA, _GC, _N, _RC, _TC, _WPM],
  [0, 64 | 0, 0, () => RuleConfig, 64 | 0, 1]
);
export var Rule = struct(n0, _Ru, 0, [_ASSERTION, _GATING], [() => AssertionRule, () => GatingRule]);
export var RuleConfig = struct(n0, _RC, 0, [_I, _Th, _Ty], [2, 1, 0]);
export var UpdateControlPanelRequest = struct(n0, _UCPR, 0, [_CPA, _CPN], [0, 0]);
export var UpdateControlPanelResponse = struct(n0, _UCPRp, 0, [_CP], [() => ControlPanel]);
export var UpdateSafetyRuleRequest = struct(
  n0,
  _USRR,
  0,
  [_ARU, _GRU],
  [() => AssertionRuleUpdate, () => GatingRuleUpdate]
);
export var UpdateSafetyRuleResponse = struct(n0, _USRRp, 0, [_AR, _GR], [() => AssertionRule, () => GatingRule]);
export var __listOf__stringMin1Max256PatternAZaZ09 = 64 | 0;

export var __listOfControlPanel = list(n0, _lOCP, 0, () => ControlPanel);
export var __listOfRule = list(n0, _lOR, 0, () => Rule);
export var CreateControlPanel = op(
  n0,
  _CCP,
  {
    [_h]: ["POST", "/controlpanel", 200],
  },
  () => CreateControlPanelRequest,
  () => CreateControlPanelResponse
);
export var CreateSafetyRule = op(
  n0,
  _CSR,
  {
    [_h]: ["POST", "/safetyrule", 200],
  },
  () => CreateSafetyRuleRequest,
  () => CreateSafetyRuleResponse
);
export var DescribeControlPanel = op(
  n0,
  _DCPes,
  {
    [_h]: ["GET", "/controlpanel/{ControlPanelArn}", 200],
  },
  () => DescribeControlPanelRequest,
  () => DescribeControlPanelResponse
);
export var DescribeSafetyRule = op(
  n0,
  _DSRe,
  {
    [_h]: ["GET", "/safetyrule/{SafetyRuleArn}", 200],
  },
  () => DescribeSafetyRuleRequest,
  () => DescribeSafetyRuleResponse
);
export var ListControlPanels = op(
  n0,
  _LCP,
  {
    [_h]: ["GET", "/controlpanels", 200],
  },
  () => ListControlPanelsRequest,
  () => ListControlPanelsResponse
);
export var ListSafetyRules = op(
  n0,
  _LSR,
  {
    [_h]: ["GET", "/controlpanel/{ControlPanelArn}/safetyrules", 200],
  },
  () => ListSafetyRulesRequest,
  () => ListSafetyRulesResponse
);
export var UpdateControlPanel = op(
  n0,
  _UCP,
  {
    [_h]: ["PUT", "/controlpanel", 200],
  },
  () => UpdateControlPanelRequest,
  () => UpdateControlPanelResponse
);
export var UpdateSafetyRule = op(
  n0,
  _USR,
  {
    [_h]: ["PUT", "/safetyrule", 200],
  },
  () => UpdateSafetyRuleRequest,
  () => UpdateSafetyRuleResponse
);
