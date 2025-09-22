// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _IPSe, _IPSI, _IPSS, _IPSSe, _L, _LIPS, _LIPSR, _LIPSRi, _N, _NM, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var IPSetSummary = struct(n0, _IPSS, 0, [_IPSI, _N], [0, 0]);
export var ListIPSetsRequest = struct(n0, _LIPSR, 0, [_NM, _L], [0, 1]);
export var ListIPSetsResponse = struct(n0, _LIPSRi, 0, [_NM, _IPSe], [0, () => IPSetSummaries]);
export var IPSetSummaries = list(n0, _IPSSe, 0, () => IPSetSummary);
export var ListIPSets = op(
  n0,
  _LIPS,
  0,
  () => ListIPSetsRequest,
  () => ListIPSetsResponse
);
