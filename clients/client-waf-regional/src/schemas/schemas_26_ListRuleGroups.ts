// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _L, _LRG, _LRGR, _LRGRi, _N, _NM, _RGI, _RGS, _RGSu, _RGu, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListRuleGroupsRequest = struct(n0, _LRGR, 0, [_NM, _L], [0, 1]);
export var ListRuleGroupsResponse = struct(n0, _LRGRi, 0, [_NM, _RGu], [0, () => RuleGroupSummaries]);
export var RuleGroupSummary = struct(n0, _RGS, 0, [_RGI, _N], [0, 0]);
export var RuleGroupSummaries = list(n0, _RGSu, 0, () => RuleGroupSummary);
export var ListRuleGroups = op(
  n0,
  _LRG,
  0,
  () => ListRuleGroupsRequest,
  () => ListRuleGroupsResponse
);
