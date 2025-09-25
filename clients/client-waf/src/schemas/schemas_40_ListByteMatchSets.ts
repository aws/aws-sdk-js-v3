// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _BMSI, _BMSS, _BMSSy, _BMSy, _L, _LBMS, _LBMSR, _LBMSRi, _N, _NM, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ByteMatchSetSummary = struct(n0, _BMSS, 0, [_BMSI, _N], [0, 0]);
export var ListByteMatchSetsRequest = struct(n0, _LBMSR, 0, [_NM, _L], [0, 1]);
export var ListByteMatchSetsResponse = struct(n0, _LBMSRi, 0, [_NM, _BMSy], [0, () => ByteMatchSetSummaries]);
export var ByteMatchSetSummaries = list(n0, _BMSSy, 0, () => ByteMatchSetSummary);
export var ListByteMatchSets = op(
  n0,
  _LBMS,
  0,
  () => ListByteMatchSetsRequest,
  () => ListByteMatchSetsResponse
);
