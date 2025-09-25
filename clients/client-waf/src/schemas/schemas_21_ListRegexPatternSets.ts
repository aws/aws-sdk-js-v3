// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _L, _LRPS, _LRPSR, _LRPSRi, _N, _NM, _RPSe, _RPSI, _RPSS, _RPSSe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListRegexPatternSetsRequest = struct(n0, _LRPSR, 0, [_NM, _L], [0, 1]);
export var ListRegexPatternSetsResponse = struct(n0, _LRPSRi, 0, [_NM, _RPSe], [0, () => RegexPatternSetSummaries]);
export var RegexPatternSetSummary = struct(n0, _RPSS, 0, [_RPSI, _N], [0, 0]);
export var RegexPatternSetSummaries = list(n0, _RPSSe, 0, () => RegexPatternSetSummary);
export var ListRegexPatternSets = op(
  n0,
  _LRPS,
  0,
  () => ListRegexPatternSetsRequest,
  () => ListRegexPatternSetsResponse
);
