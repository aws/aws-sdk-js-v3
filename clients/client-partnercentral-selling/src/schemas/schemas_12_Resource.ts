// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _Ar, _C, _CRS, _CRSR, _CRSRr, _CT, _EI, _h, _R, _RI, _RSTI, _RT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateResourceSnapshotRequest = struct(
  n0,
  _CRSR,
  0,
  [_C, _EI, _RT, _RI, _RSTI, _CT],
  [0, 0, 0, 0, 0, [0, 4]]
);
export var CreateResourceSnapshotResponse = struct(n0, _CRSRr, 0, [_Ar, _R], [0, 1]);
export var CreateResourceSnapshot = op(
  n0,
  _CRS,
  {
    [_h]: ["POST", "/CreateResourceSnapshot", 200],
  },
  () => CreateResourceSnapshotRequest,
  () => CreateResourceSnapshotResponse
);
