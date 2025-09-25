// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { SnapshotNotFound as __SnapshotNotFound } from "../models/index";
import {
  _c,
  _CRT,
  _DSe,
  _DSR,
  _DSRe,
  _e,
  _L,
  _M,
  _N,
  _SIn,
  _Sn,
  _SNF,
  _US,
  _USR,
  _USRp,
  n0,
  Snapshot,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSnapshotRequest = struct(n0, _DSR, 0, [_CRT, _SIn], [[0, 4], 0]);
export var DeleteSnapshotResponse = struct(n0, _DSRe, 0, [_SIn, _L], [0, 0]);
export var SnapshotNotFound = error(
  n0,
  _SNF,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __SnapshotNotFound
);
export var UpdateSnapshotRequest = struct(n0, _USR, 0, [_CRT, _N, _SIn], [[0, 4], 0, 0]);
export var UpdateSnapshotResponse = struct(n0, _USRp, 0, [_Sn], [() => Snapshot]);
export var DeleteSnapshot = op(
  n0,
  _DSe,
  2,
  () => DeleteSnapshotRequest,
  () => DeleteSnapshotResponse
);
export var UpdateSnapshot = op(
  n0,
  _US,
  2,
  () => UpdateSnapshotRequest,
  () => UpdateSnapshotResponse
);
