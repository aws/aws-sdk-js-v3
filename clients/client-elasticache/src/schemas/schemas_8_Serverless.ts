// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  InvalidServerlessCacheSnapshotStateFault as __InvalidServerlessCacheSnapshotStateFault,
  ServerlessCacheSnapshotNotFoundFault as __ServerlessCacheSnapshotNotFoundFault,
} from "../models/index";
import {
  _aQE,
  _c,
  _CSCS,
  _CSCSR,
  _CSCSRo,
  _DSCS,
  _DSCSR,
  _DSCSRe,
  _e,
  _ESCS,
  _ESCSR,
  _ESCSRx,
  _hE,
  _ISCSSF,
  _KKI,
  _m,
  _SBN,
  _SCS,
  _SCSN,
  _SCSNFF,
  _SSCSN,
  _T,
  _TSCSN,
  n0,
  TagList,
} from "./schemas_0";
import { ServerlessCacheSnapshot } from "./schemas_5_Serverless";

/* eslint no-var: 0 */

export var CopyServerlessCacheSnapshotRequest = struct(
  n0,
  _CSCSR,
  0,
  [_SSCSN, _TSCSN, _KKI, _T],
  [0, 0, 0, [() => TagList, 0]]
);
export var CopyServerlessCacheSnapshotResponse = struct(n0, _CSCSRo, 0, [_SCS], [() => ServerlessCacheSnapshot]);
export var DeleteServerlessCacheSnapshotRequest = struct(n0, _DSCSR, 0, [_SCSN], [0]);
export var DeleteServerlessCacheSnapshotResponse = struct(n0, _DSCSRe, 0, [_SCS], [() => ServerlessCacheSnapshot]);
export var ExportServerlessCacheSnapshotRequest = struct(n0, _ESCSR, 0, [_SCSN, _SBN], [0, 0]);
export var ExportServerlessCacheSnapshotResponse = struct(n0, _ESCSRx, 0, [_SCS], [() => ServerlessCacheSnapshot]);
export var InvalidServerlessCacheSnapshotStateFault = error(
  n0,
  _ISCSSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidServerlessCacheSnapshotStateFault`, 400],
  },
  [_m],
  [0],

  __InvalidServerlessCacheSnapshotStateFault
);
export var ServerlessCacheSnapshotNotFoundFault = error(
  n0,
  _SCSNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ServerlessCacheSnapshotNotFoundFault`, 404],
  },
  [_m],
  [0],

  __ServerlessCacheSnapshotNotFoundFault
);
export var CopyServerlessCacheSnapshot = op(
  n0,
  _CSCS,
  0,
  () => CopyServerlessCacheSnapshotRequest,
  () => CopyServerlessCacheSnapshotResponse
);
export var DeleteServerlessCacheSnapshot = op(
  n0,
  _DSCS,
  0,
  () => DeleteServerlessCacheSnapshotRequest,
  () => DeleteServerlessCacheSnapshotResponse
);
export var ExportServerlessCacheSnapshot = op(
  n0,
  _ESCS,
  0,
  () => ExportServerlessCacheSnapshotRequest,
  () => ExportServerlessCacheSnapshotResponse
);
