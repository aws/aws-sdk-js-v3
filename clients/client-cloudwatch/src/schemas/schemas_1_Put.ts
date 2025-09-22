// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ConcurrentModificationException as __ConcurrentModificationException } from "../models/index";
import {
  _AOTL,
  _aQE,
  _Ar,
  _c,
  _CME,
  _e,
  _EF,
  _F,
  _FA,
  _hE,
  _IF,
  _ILAM,
  _Ke,
  _LTFR,
  _LTFRI,
  _LTFRO,
  _M,
  _MRan,
  _MRana,
  _Na,
  _OF,
  _PIR,
  _PIRI,
  _PIRO,
  _PMIR,
  _PMIRI,
  _PMIRO,
  _PMS,
  _PMSI,
  _PMSO,
  _RA,
  _RARN,
  _RDu,
  _RNu,
  _RS,
  _SCt,
  _Ta,
  _Tag,
  _TK,
  _TL,
  _TN,
  _TR,
  _TRI,
  _TRO,
  _UR,
  _URI,
  _URO,
  _V,
  n0,
} from "./schemas_0";
import { MetricStreamFilters, MetricStreamStatisticsConfigurations } from "./schemas_5_Resource";
import { BatchFailures } from "./schemas_11_InsightRules";

/* eslint no-var: 0 */

export var ConcurrentModificationException = error(
  n0,
  _CME,
  {
    [_e]: _c,
    [_hE]: 429,
    [_aQE]: [`ConcurrentModificationException`, 429],
  },
  [_M],
  [0],

  __ConcurrentModificationException
);
export var ListTagsForResourceInput = struct(n0, _LTFRI, 0, [_RARN], [0]);
export var ListTagsForResourceOutput = struct(n0, _LTFRO, 0, [_Ta], [() => TagList]);
export var ManagedRule = struct(n0, _MRan, 0, [_TN, _RARN, _Ta], [0, 0, () => TagList]);
export var PutInsightRuleInput = struct(n0, _PIRI, 0, [_RNu, _RS, _RDu, _Ta, _AOTL], [0, 0, 0, () => TagList, 2]);
export var PutInsightRuleOutput = struct(n0, _PIRO, 0, [], []);
export var PutManagedInsightRulesInput = struct(n0, _PMIRI, 0, [_MRana], [() => ManagedRules]);
export var PutManagedInsightRulesOutput = struct(n0, _PMIRO, 0, [_F], [() => BatchFailures]);
export var PutMetricStreamInput = struct(
  n0,
  _PMSI,
  0,
  [_Na, _IF, _EF, _FA, _RA, _OF, _Ta, _SCt, _ILAM],
  [
    0,
    () => MetricStreamFilters,
    () => MetricStreamFilters,
    0,
    0,
    0,
    () => TagList,
    () => MetricStreamStatisticsConfigurations,
    2,
  ]
);
export var PutMetricStreamOutput = struct(n0, _PMSO, 0, [_Ar], [0]);
export var Tag = struct(n0, _Tag, 0, [_Ke, _V], [0, 0]);
export var TagResourceInput = struct(n0, _TRI, 0, [_RARN, _Ta], [0, () => TagList]);
export var TagResourceOutput = struct(n0, _TRO, 0, [], []);
export var UntagResourceInput = struct(n0, _URI, 0, [_RARN, _TK], [0, 64 | 0]);
export var UntagResourceOutput = struct(n0, _URO, 0, [], []);
export var ManagedRules = list(n0, _MRana, 0, () => ManagedRule);
export var TagKeyList = 64 | 0;

export var TagList = list(n0, _TL, 0, () => Tag);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceInput,
  () => ListTagsForResourceOutput
);
export var PutInsightRule = op(
  n0,
  _PIR,
  0,
  () => PutInsightRuleInput,
  () => PutInsightRuleOutput
);
export var PutManagedInsightRules = op(
  n0,
  _PMIR,
  0,
  () => PutManagedInsightRulesInput,
  () => PutManagedInsightRulesOutput
);
export var PutMetricStream = op(
  n0,
  _PMS,
  0,
  () => PutMetricStreamInput,
  () => PutMetricStreamOutput
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceInput,
  () => TagResourceOutput
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceInput,
  () => UntagResourceOutput
);
