// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _L, _LSCS, _LSCSR, _LSCSRi, _N, _NM, _SCSI, _SCSi, _SCSS, _SCSSi, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListSizeConstraintSetsRequest = struct(n0, _LSCSR, 0, [_NM, _L], [0, 1]);
export var ListSizeConstraintSetsResponse = struct(n0, _LSCSRi, 0, [_NM, _SCSi], [0, () => SizeConstraintSetSummaries]);
export var SizeConstraintSetSummary = struct(n0, _SCSS, 0, [_SCSI, _N], [0, 0]);
export var SizeConstraintSetSummaries = list(n0, _SCSSi, 0, () => SizeConstraintSetSummary);
export var ListSizeConstraintSets = op(
  n0,
  _LSCS,
  0,
  () => ListSizeConstraintSetsRequest,
  () => ListSizeConstraintSetsResponse
);
