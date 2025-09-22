// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CSR, _CSr, _CSRr, _DI, _DS, _DSR, _DSRe, _Na, _RFS, _RFSR, _RFSRe, _SIn, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateSnapshotRequest = struct(n0, _CSR, 0, [_DI, _Na], [0, 0]);
export var CreateSnapshotResult = struct(n0, _CSRr, 0, [_SIn], [0]);
export var DeleteSnapshotRequest = struct(n0, _DSR, 0, [_SIn], [0]);
export var DeleteSnapshotResult = struct(n0, _DSRe, 0, [_SIn], [0]);
export var RestoreFromSnapshotRequest = struct(n0, _RFSR, 0, [_SIn], [0]);
export var RestoreFromSnapshotResult = struct(n0, _RFSRe, 0, [], []);
export var CreateSnapshot = op(
  n0,
  _CSr,
  0,
  () => CreateSnapshotRequest,
  () => CreateSnapshotResult
);
export var DeleteSnapshot = op(
  n0,
  _DS,
  0,
  () => DeleteSnapshotRequest,
  () => DeleteSnapshotResult
);
export var RestoreFromSnapshot = op(
  n0,
  _RFS,
  0,
  () => RestoreFromSnapshotRequest,
  () => RestoreFromSnapshotResult
);
