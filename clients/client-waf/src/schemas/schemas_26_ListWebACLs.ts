// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _L, _LWACL, _LWACLR, _LWACLRi, _N, _NM, _WACLe, _WACLI, _WACLS, _WACLSe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListWebACLsRequest = struct(n0, _LWACLR, 0, [_NM, _L], [0, 1]);
export var ListWebACLsResponse = struct(n0, _LWACLRi, 0, [_NM, _WACLe], [0, () => WebACLSummaries]);
export var WebACLSummary = struct(n0, _WACLS, 0, [_WACLI, _N], [0, 0]);
export var WebACLSummaries = list(n0, _WACLSe, 0, () => WebACLSummary);
export var ListWebACLs = op(
  n0,
  _LWACL,
  0,
  () => ListWebACLsRequest,
  () => ListWebACLsResponse
);
