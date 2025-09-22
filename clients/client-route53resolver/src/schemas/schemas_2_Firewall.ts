// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _Ar,
  _BOD,
  _BODT,
  _BOT,
  _BR,
  _CFDL,
  _CFDLR,
  _CFDLRr,
  _CFR,
  _CFRG,
  _CFRGR,
  _CFRGRr,
  _CFRR,
  _CFRRr,
  _CRI,
  _CT,
  _CTr,
  _DC,
  _DFR,
  _DFRR,
  _DFRRe,
  _DTP,
  _FDL,
  _FDLI,
  _FDRA,
  _FR,
  _FRG,
  _FRGI,
  _FRi,
  _FTPI,
  _GFDL,
  _GFDLR,
  _GFDLRe,
  _GFRG,
  _GFRGR,
  _GFRGRe,
  _I,
  _LFR,
  _LFRR,
  _LFRRi,
  _MON,
  _MR,
  _MT,
  _N,
  _NT,
  _OI,
  _P,
  _Q,
  _RC,
  _S,
  _SM,
  _SS,
  _T,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_9_Create";

/* eslint no-var: 0 */

export var CreateFirewallDomainListRequest = struct(n0, _CFDLR, 0, [_CRI, _N, _T], [[0, 4], 0, () => TagList]);
export var CreateFirewallDomainListResponse = struct(n0, _CFDLRr, 0, [_FDL], [() => FirewallDomainList]);
export var CreateFirewallRuleGroupRequest = struct(n0, _CFRGR, 0, [_CRI, _N, _T], [[0, 4], 0, () => TagList]);
export var CreateFirewallRuleGroupResponse = struct(n0, _CFRGRr, 0, [_FRG], [() => FirewallRuleGroup]);
export var CreateFirewallRuleRequest = struct(
  n0,
  _CFRR,
  0,
  [_CRI, _FRGI, _FDLI, _P, _A, _BR, _BOD, _BODT, _BOT, _N, _FDRA, _Q, _DTP, _CT],
  [[0, 4], 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
);
export var CreateFirewallRuleResponse = struct(n0, _CFRRr, 0, [_FR], [() => FirewallRule]);
export var DeleteFirewallRuleRequest = struct(n0, _DFRR, 0, [_FRGI, _FDLI, _FTPI, _Q], [0, 0, 0, 0]);
export var DeleteFirewallRuleResponse = struct(n0, _DFRRe, 0, [_FR], [() => FirewallRule]);
export var FirewallDomainList = struct(
  n0,
  _FDL,
  0,
  [_I, _Ar, _N, _DC, _S, _SM, _MON, _CRI, _CTr, _MT],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
);
export var FirewallRule = struct(
  n0,
  _FR,
  0,
  [_FRGI, _FDLI, _FTPI, _N, _P, _A, _BR, _BOD, _BODT, _BOT, _CRI, _CTr, _MT, _FDRA, _Q, _DTP, _CT],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
);
export var FirewallRuleGroup = struct(
  n0,
  _FRG,
  0,
  [_I, _Ar, _N, _RC, _S, _SM, _OI, _CRI, _SS, _CTr, _MT],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
);
export var GetFirewallDomainListRequest = struct(n0, _GFDLR, 0, [_FDLI], [0]);
export var GetFirewallDomainListResponse = struct(n0, _GFDLRe, 0, [_FDL], [() => FirewallDomainList]);
export var GetFirewallRuleGroupRequest = struct(n0, _GFRGR, 0, [_FRGI], [0]);
export var GetFirewallRuleGroupResponse = struct(n0, _GFRGRe, 0, [_FRG], [() => FirewallRuleGroup]);
export var ListFirewallRulesRequest = struct(n0, _LFRR, 0, [_FRGI, _P, _A, _MR, _NT], [0, 1, 0, 1, 0]);
export var ListFirewallRulesResponse = struct(n0, _LFRRi, 0, [_NT, _FRi], [0, () => FirewallRules]);
export var FirewallRules = list(n0, _FRi, 0, () => FirewallRule);
export var CreateFirewallDomainList = op(
  n0,
  _CFDL,
  0,
  () => CreateFirewallDomainListRequest,
  () => CreateFirewallDomainListResponse
);
export var CreateFirewallRule = op(
  n0,
  _CFR,
  0,
  () => CreateFirewallRuleRequest,
  () => CreateFirewallRuleResponse
);
export var CreateFirewallRuleGroup = op(
  n0,
  _CFRG,
  0,
  () => CreateFirewallRuleGroupRequest,
  () => CreateFirewallRuleGroupResponse
);
export var DeleteFirewallRule = op(
  n0,
  _DFR,
  0,
  () => DeleteFirewallRuleRequest,
  () => DeleteFirewallRuleResponse
);
export var GetFirewallDomainList = op(
  n0,
  _GFDL,
  0,
  () => GetFirewallDomainListRequest,
  () => GetFirewallDomainListResponse
);
export var GetFirewallRuleGroup = op(
  n0,
  _GFRG,
  0,
  () => GetFirewallRuleGroupRequest,
  () => GetFirewallRuleGroupResponse
);
export var ListFirewallRules = op(
  n0,
  _LFR,
  0,
  () => ListFirewallRulesRequest,
  () => ListFirewallRulesResponse
);
