// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _aCSI,
  _GTRS,
  _GTRSR,
  _GTRSRe,
  _m,
  _nN,
  _nTN,
  _pIMB,
  _rPI,
  _rT,
  _RTFRP,
  _RTFRPR,
  _RTFRPRe,
  _RTFS,
  _RTFSR,
  _RTFSRe,
  _sDN,
  _sN,
  _sSN,
  _st,
  _sTN,
  _tDIMB,
  _tDN,
  _tRRI,
  _TRS,
  _tRS,
  _tSN,
  _wN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetTableRestoreStatusRequest = struct(n0, _GTRSR, 0, [_tRRI], [0]);
export var GetTableRestoreStatusResponse = struct(n0, _GTRSRe, 0, [_tRS], [() => TableRestoreStatus]);
export var RestoreTableFromRecoveryPointRequest = struct(
  n0,
  _RTFRPR,
  0,
  [_nN, _wN, _rPI, _sDN, _sSN, _sTN, _tDN, _tSN, _nTN, _aCSI],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 2]
);
export var RestoreTableFromRecoveryPointResponse = struct(n0, _RTFRPRe, 0, [_tRS], [() => TableRestoreStatus]);
export var RestoreTableFromSnapshotRequest = struct(
  n0,
  _RTFSR,
  0,
  [_nN, _wN, _sN, _sDN, _sSN, _sTN, _tDN, _tSN, _nTN, _aCSI],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 2]
);
export var RestoreTableFromSnapshotResponse = struct(n0, _RTFSRe, 0, [_tRS], [() => TableRestoreStatus]);
export var TableRestoreStatus = struct(
  n0,
  _TRS,
  0,
  [_tRRI, _st, _m, _rT, _nN, _wN, _sN, _pIMB, _tDIMB, _sDN, _sSN, _sTN, _tDN, _tSN, _nTN, _rPI],
  [0, 0, 0, 4, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0]
);
export var GetTableRestoreStatus = op(
  n0,
  _GTRS,
  0,
  () => GetTableRestoreStatusRequest,
  () => GetTableRestoreStatusResponse
);
export var RestoreTableFromRecoveryPoint = op(
  n0,
  _RTFRP,
  0,
  () => RestoreTableFromRecoveryPointRequest,
  () => RestoreTableFromRecoveryPointResponse
);
export var RestoreTableFromSnapshot = op(
  n0,
  _RTFS,
  0,
  () => RestoreTableFromSnapshotRequest,
  () => RestoreTableFromSnapshotResponse
);
