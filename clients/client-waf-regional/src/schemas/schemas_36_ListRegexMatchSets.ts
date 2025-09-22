// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _L, _LRMS, _LRMSR, _LRMSRi, _N, _NM, _RMSe, _RMSI, _RMSS, _RMSSe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListRegexMatchSetsRequest = struct(n0, _LRMSR, 0, [_NM, _L], [0, 1]);
export var ListRegexMatchSetsResponse = struct(n0, _LRMSRi, 0, [_NM, _RMSe], [0, () => RegexMatchSetSummaries]);
export var RegexMatchSetSummary = struct(n0, _RMSS, 0, [_RMSI, _N], [0, 0]);
export var RegexMatchSetSummaries = list(n0, _RMSSe, 0, () => RegexMatchSetSummary);
export var ListRegexMatchSets = op(
  n0,
  _LRMS,
  0,
  () => ListRegexMatchSetsRequest,
  () => ListRegexMatchSetsResponse
);
