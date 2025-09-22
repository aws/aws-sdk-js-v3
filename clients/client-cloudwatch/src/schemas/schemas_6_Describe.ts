// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidNextToken as __InvalidNextToken } from "../models/index";
import {
  _AOTL,
  _aQE,
  _Ar,
  _c,
  _CD,
  _DA,
  _DE,
  _De,
  _DEa,
  _DIRe,
  _DIRIe,
  _DIROe,
  _DN,
  _DNP,
  _e,
  _En,
  _FA,
  _hE,
  _INT,
  _IR,
  _IRn,
  _LD,
  _LDI,
  _LDO,
  _LM,
  _LMIR,
  _LMIRI,
  _LMIRO,
  _LMS,
  _LMSI,
  _LMSO,
  _LUD,
  _m,
  _MRa,
  _MRan,
  _MRana,
  _MRD,
  _MRDa,
  _MRS,
  _MSE,
  _MSEe,
  _Na,
  _NT,
  _OF,
  _RARN,
  _RNu,
  _RS,
  _Sc,
  _Si,
  _Stat,
  _TN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DashboardEntry = struct(n0, _DE, 0, [_DN, _DA, _LM, _Si], [0, 0, 4, 1]);
export var DescribeInsightRulesInput = struct(n0, _DIRIe, 0, [_NT, _MRa], [0, 1]);
export var DescribeInsightRulesOutput = struct(n0, _DIROe, 0, [_NT, _IR], [0, () => InsightRules]);
export var InsightRule = struct(n0, _IRn, 0, [_Na, _Stat, _Sc, _De, _MRan, _AOTL], [0, 0, 0, 0, 2, 2]);
export var InvalidNextToken = error(
  n0,
  _INT,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidNextToken`, 400],
  },
  [_m],
  [0],

  __InvalidNextToken
);
export var ListDashboardsInput = struct(n0, _LDI, 0, [_DNP, _NT], [0, 0]);
export var ListDashboardsOutput = struct(n0, _LDO, 0, [_DEa, _NT], [() => DashboardEntries, 0]);
export var ListManagedInsightRulesInput = struct(n0, _LMIRI, 0, [_RARN, _NT, _MRa], [0, 0, 1]);
export var ListManagedInsightRulesOutput = struct(n0, _LMIRO, 0, [_MRana, _NT], [() => ManagedRuleDescriptions, 0]);
export var ListMetricStreamsInput = struct(n0, _LMSI, 0, [_NT, _MRa], [0, 1]);
export var ListMetricStreamsOutput = struct(n0, _LMSO, 0, [_NT, _En], [0, () => MetricStreamEntries]);
export var ManagedRuleDescription = struct(n0, _MRD, 0, [_TN, _RARN, _RS], [0, 0, () => ManagedRuleState]);
export var ManagedRuleState = struct(n0, _MRS, 0, [_RNu, _Stat], [0, 0]);
export var MetricStreamEntry = struct(n0, _MSE, 0, [_Ar, _CD, _LUD, _Na, _FA, _Stat, _OF], [0, 4, 4, 0, 0, 0, 0]);
export var DashboardEntries = list(n0, _DEa, 0, () => DashboardEntry);
export var InsightRules = list(n0, _IR, 0, () => InsightRule);
export var ManagedRuleDescriptions = list(n0, _MRDa, 0, () => ManagedRuleDescription);
export var MetricStreamEntries = list(n0, _MSEe, 0, () => MetricStreamEntry);
export var DescribeInsightRules = op(
  n0,
  _DIRe,
  0,
  () => DescribeInsightRulesInput,
  () => DescribeInsightRulesOutput
);
export var ListDashboards = op(
  n0,
  _LD,
  0,
  () => ListDashboardsInput,
  () => ListDashboardsOutput
);
export var ListManagedInsightRules = op(
  n0,
  _LMIR,
  0,
  () => ListManagedInsightRulesInput,
  () => ListManagedInsightRulesOutput
);
export var ListMetricStreams = op(
  n0,
  _LMS,
  0,
  () => ListMetricStreamsInput,
  () => ListMetricStreamsOutput
);
