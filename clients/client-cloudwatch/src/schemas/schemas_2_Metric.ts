// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AAV,
  _ASg,
  _AUC,
  _AV,
  _AVp,
  _Co,
  _Dat,
  _ET,
  _GIRR,
  _GIRRI,
  _GIRRO,
  _IRC,
  _IRCD,
  _IRCDn,
  _IRCn,
  _IRMD,
  _IRMDn,
  _K,
  _KL,
  _Ma,
  _MCC,
  _MCV,
  _MDe,
  _Me,
  _Mi,
  _OB,
  _P,
  _RNu,
  _SC,
  _ST,
  _Su,
  _T,
  _UC,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetInsightRuleReportInput = struct(
  n0,
  _GIRRI,
  0,
  [_RNu, _ST, _ET, _P, _MCC, _Me, _OB],
  [0, 4, 4, 1, 1, 64 | 0, 0]
);
export var GetInsightRuleReportOutput = struct(
  n0,
  _GIRRO,
  0,
  [_KL, _ASg, _AV, _AUC, _Co, _MDe],
  [64 | 0, 0, 1, 1, () => InsightRuleContributors, () => InsightRuleMetricDatapoints]
);
export var InsightRuleContributor = struct(
  n0,
  _IRC,
  0,
  [_K, _AAV, _Dat],
  [64 | 0, 1, () => InsightRuleContributorDatapoints]
);
export var InsightRuleContributorDatapoint = struct(n0, _IRCD, 0, [_T, _AVp], [4, 1]);
export var InsightRuleMetricDatapoint = struct(
  n0,
  _IRMD,
  0,
  [_T, _UC, _MCV, _SC, _A, _Su, _Mi, _Ma],
  [4, 1, 1, 1, 1, 1, 1, 1]
);
export var InsightRuleContributorDatapoints = list(n0, _IRCDn, 0, () => InsightRuleContributorDatapoint);
export var InsightRuleContributorKeyLabels = 64 | 0;

export var InsightRuleContributorKeys = 64 | 0;

export var InsightRuleContributors = list(n0, _IRCn, 0, () => InsightRuleContributor);
export var InsightRuleMetricDatapoints = list(n0, _IRMDn, 0, () => InsightRuleMetricDatapoint);
export var InsightRuleMetricList = 64 | 0;

export var GetInsightRuleReport = op(
  n0,
  _GIRR,
  0,
  () => GetInsightRuleReportInput,
  () => GetInsightRuleReportOutput
);
