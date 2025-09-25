// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _L, _LSIMS, _LSIMSR, _LSIMSRi, _N, _NM, _SIMSI, _SIMSq, _SIMSS, _SIMSSq, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListSqlInjectionMatchSetsRequest = struct(n0, _LSIMSR, 0, [_NM, _L], [0, 1]);
export var ListSqlInjectionMatchSetsResponse = struct(
  n0,
  _LSIMSRi,
  0,
  [_NM, _SIMSq],
  [0, () => SqlInjectionMatchSetSummaries]
);
export var SqlInjectionMatchSetSummary = struct(n0, _SIMSS, 0, [_SIMSI, _N], [0, 0]);
export var SqlInjectionMatchSetSummaries = list(n0, _SIMSSq, 0, () => SqlInjectionMatchSetSummary);
export var ListSqlInjectionMatchSets = op(
  n0,
  _LSIMS,
  0,
  () => ListSqlInjectionMatchSetsRequest,
  () => ListSqlInjectionMatchSetsResponse
);
