// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DIR, _DIRI, _DIRi, _DIRIi, _DIRO, _DIROi, _EIR, _EIRI, _EIRO, _F, _RN, n0 } from "./schemas_0";
import { BatchFailures } from "./schemas_11_InsightRules";

/* eslint no-var: 0 */

export var DeleteInsightRulesInput = struct(n0, _DIRI, 0, [_RN], [64 | 0]);
export var DeleteInsightRulesOutput = struct(n0, _DIRO, 0, [_F], [() => BatchFailures]);
export var DisableInsightRulesInput = struct(n0, _DIRIi, 0, [_RN], [64 | 0]);
export var DisableInsightRulesOutput = struct(n0, _DIROi, 0, [_F], [() => BatchFailures]);
export var EnableInsightRulesInput = struct(n0, _EIRI, 0, [_RN], [64 | 0]);
export var EnableInsightRulesOutput = struct(n0, _EIRO, 0, [_F], [() => BatchFailures]);
export var InsightRuleNames = 64 | 0;

export var DeleteInsightRules = op(
  n0,
  _DIR,
  0,
  () => DeleteInsightRulesInput,
  () => DeleteInsightRulesOutput
);
export var DisableInsightRules = op(
  n0,
  _DIRi,
  0,
  () => DisableInsightRulesInput,
  () => DisableInsightRulesOutput
);
export var EnableInsightRules = op(
  n0,
  _EIR,
  0,
  () => EnableInsightRulesInput,
  () => EnableInsightRulesOutput
);
