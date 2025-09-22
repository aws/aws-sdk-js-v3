// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { SnapshotCopyAlreadyDisabledFault as __SnapshotCopyAlreadyDisabledFault } from "../models/index";
import { _aQE, _C, _c, _CIl, _DSC, _DSCM, _DSCR, _e, _hE, _m, _SCADF, Cluster, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisableSnapshotCopyMessage = struct(n0, _DSCM, 0, [_CIl], [0]);
export var DisableSnapshotCopyResult = struct(n0, _DSCR, 0, [_C], [[() => Cluster, 0]]);
export var SnapshotCopyAlreadyDisabledFault = error(
  n0,
  _SCADF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`SnapshotCopyAlreadyDisabledFault`, 400],
  },
  [_m],
  [0],

  __SnapshotCopyAlreadyDisabledFault
);
export var DisableSnapshotCopy = op(
  n0,
  _DSC,
  0,
  () => DisableSnapshotCopyMessage,
  () => DisableSnapshotCopyResult
);
