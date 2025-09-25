// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _L, _LXMS, _LXMSR, _LXMSRi, _N, _NM, _XMSI, _XMSS, _XMSs, _XMSSs, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListXssMatchSetsRequest = struct(n0, _LXMSR, 0, [_NM, _L], [0, 1]);
export var ListXssMatchSetsResponse = struct(n0, _LXMSRi, 0, [_NM, _XMSs], [0, () => XssMatchSetSummaries]);
export var XssMatchSetSummary = struct(n0, _XMSS, 0, [_XMSI, _N], [0, 0]);
export var XssMatchSetSummaries = list(n0, _XMSSs, 0, () => XssMatchSetSummary);
export var ListXssMatchSets = op(
  n0,
  _LXMS,
  0,
  () => ListXssMatchSetsRequest,
  () => ListXssMatchSetsResponse
);
