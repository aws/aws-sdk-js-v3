// smithy-typescript generated code
import { struct, struct as uni } from "@smithy/core/schema";

import { _aAA, _agg, _aRR, _CTAARA, _CTAARC, _CTAARL, _CTAARP, _CTAARPV, _cu, _li, _v_, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ConfiguredTableAssociationAnalysisRuleAggregation = struct(n0, _CTAARA, 0, [_aRR, _aAA], [64 | 0, 64 | 0]);
export var ConfiguredTableAssociationAnalysisRuleCustom = struct(n0, _CTAARC, 0, [_aRR, _aAA], [64 | 0, 64 | 0]);
export var ConfiguredTableAssociationAnalysisRuleList = struct(n0, _CTAARL, 0, [_aRR, _aAA], [64 | 0, 64 | 0]);
export var AllowedAdditionalAnalyses = 64 | 0;

export var AllowedResultReceivers = 64 | 0;

export var ConfiguredTableAssociationAnalysisRulePolicy = uni(
  n0,
  _CTAARP,
  0,
  [_v_],
  [() => ConfiguredTableAssociationAnalysisRulePolicyV1]
);
export var ConfiguredTableAssociationAnalysisRulePolicyV1 = uni(
  n0,
  _CTAARPV,
  0,
  [_li, _agg, _cu],
  [
    () => ConfiguredTableAssociationAnalysisRuleList,
    () => ConfiguredTableAssociationAnalysisRuleAggregation,
    () => ConfiguredTableAssociationAnalysisRuleCustom,
  ]
);
