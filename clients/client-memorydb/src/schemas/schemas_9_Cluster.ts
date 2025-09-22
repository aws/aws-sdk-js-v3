// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidSnapshotStateFault as __InvalidSnapshotStateFault,
  SnapshotAlreadyExistsFault as __SnapshotAlreadyExistsFault,
  SnapshotQuotaExceededFault as __SnapshotQuotaExceededFault,
} from "../models/index";
import {
  _aQE,
  _ARN,
  _c,
  _CC,
  _CNl,
  _Co,
  _CS,
  _CSR,
  _CSr,
  _CSRo,
  _CSRr,
  _CSRre,
  _D,
  _DS,
  _DSR,
  _DSRe,
  _DT,
  _E,
  _e,
  _EV,
  _hE,
  _ISSF,
  _KKI,
  _m,
  _MRCN,
  _MRPGN,
  _MW,
  _N,
  _NS,
  _NT,
  _PGN,
  _Po,
  _RCep,
  _S,
  _SAEF,
  _SC,
  _SCT,
  _SDh,
  _SDha,
  _SGN,
  _Sh,
  _Si,
  _Sl,
  _SN,
  _Sn,
  _So,
  _SQEF,
  _SRL,
  _SSN,
  _SW,
  _TA,
  _Ta,
  _TB,
  _TSN,
  _VI,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_16_Create";

/* eslint no-var: 0 */

export var ClusterConfiguration = struct(
  n0,
  _CC,
  0,
  [_N, _D, _NT, _E, _EV, _MW, _TA, _Po, _PGN, _SGN, _VI, _SRL, _SW, _NS, _Sh, _MRPGN, _MRCN],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, () => ShardDetails, 0, 0]
);
export var CopySnapshotRequest = struct(n0, _CSR, 0, [_SSN, _TSN, _TB, _KKI, _Ta], [0, 0, 0, 0, [() => TagList, 0]]);
export var CopySnapshotResponse = struct(n0, _CSRo, 0, [_Sn], [() => Snapshot]);
export var CreateSnapshotRequest = struct(n0, _CSRr, 0, [_CNl, _SN, _KKI, _Ta], [0, 0, 0, [() => TagList, 0]]);
export var CreateSnapshotResponse = struct(n0, _CSRre, 0, [_Sn], [() => Snapshot]);
export var DeleteSnapshotRequest = struct(n0, _DSR, 0, [_SN], [0]);
export var DeleteSnapshotResponse = struct(n0, _DSRe, 0, [_Sn], [() => Snapshot]);
export var InvalidSnapshotStateFault = error(
  n0,
  _ISSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidSnapshotState`, 400],
  },
  [_m],
  [0],

  __InvalidSnapshotStateFault
);
export var ShardConfiguration = struct(n0, _SC, 0, [_Sl, _RCep], [0, 1]);
export var ShardDetail = struct(n0, _SDh, 0, [_N, _Co, _Si, _SCT], [0, () => ShardConfiguration, 0, 4]);
export var Snapshot = struct(
  n0,
  _Sn,
  0,
  [_N, _S, _So, _KKI, _ARN, _CC, _DT],
  [0, 0, 0, 0, 0, () => ClusterConfiguration, 0]
);
export var SnapshotAlreadyExistsFault = error(
  n0,
  _SAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`SnapshotAlreadyExistsFault`, 400],
  },
  [_m],
  [0],

  __SnapshotAlreadyExistsFault
);
export var SnapshotQuotaExceededFault = error(
  n0,
  _SQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`SnapshotQuotaExceededFault`, 400],
  },
  [_m],
  [0],

  __SnapshotQuotaExceededFault
);
export var ShardDetails = list(n0, _SDha, 0, () => ShardDetail);
export var CopySnapshot = op(
  n0,
  _CS,
  0,
  () => CopySnapshotRequest,
  () => CopySnapshotResponse
);
export var CreateSnapshot = op(
  n0,
  _CSr,
  0,
  () => CreateSnapshotRequest,
  () => CreateSnapshotResponse
);
export var DeleteSnapshot = op(
  n0,
  _DS,
  0,
  () => DeleteSnapshotRequest,
  () => DeleteSnapshotResponse
);
