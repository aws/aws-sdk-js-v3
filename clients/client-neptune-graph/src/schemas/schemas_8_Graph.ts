// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _DGS, _DGSI, _DGSO, _GGS, _GGSI, _GGSO, _h, _i, _kKI, _n, _sCT, _sGI, _sIn, _st, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteGraphSnapshotInput = struct(n0, _DGSI, 0, [_sIn], [[0, 1]]);
export var DeleteGraphSnapshotOutput = struct(n0, _DGSO, 0, [_i, _n, _a, _sGI, _sCT, _st, _kKI], [0, 0, 0, 0, 4, 0, 0]);
export var GetGraphSnapshotInput = struct(n0, _GGSI, 0, [_sIn], [[0, 1]]);
export var GetGraphSnapshotOutput = struct(n0, _GGSO, 0, [_i, _n, _a, _sGI, _sCT, _st, _kKI], [0, 0, 0, 0, 4, 0, 0]);
export var DeleteGraphSnapshot = op(
  n0,
  _DGS,
  {
    [_h]: ["DELETE", "/snapshots/{snapshotIdentifier}", 200],
  },
  () => DeleteGraphSnapshotInput,
  () => DeleteGraphSnapshotOutput
);
export var GetGraphSnapshot = op(
  n0,
  _GGS,
  {
    [_h]: ["GET", "/snapshots/{snapshotIdentifier}", 200],
  },
  () => GetGraphSnapshotInput,
  () => GetGraphSnapshotOutput
);
