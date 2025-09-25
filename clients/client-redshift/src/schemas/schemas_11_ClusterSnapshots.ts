// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { BatchDeleteRequestSizeExceededFault as __BatchDeleteRequestSizeExceededFault } from "../models/index";
import {
  _aQE,
  _BDCS,
  _BDCSR,
  _BDCSRa,
  _BDRSEF,
  _BSOEL,
  _c,
  _DCSM,
  _DCSML,
  _E,
  _e,
  _FC,
  _FR,
  _hE,
  _I,
  _m,
  _R,
  _SCI,
  _SEM,
  _SI,
  _SIL,
  _Str,
  _xN,
  n0,
} from "./schemas_0";
import { DeleteClusterSnapshotMessage } from "./schemas_66_Delete";

/* eslint no-var: 0 */

export var BatchDeleteClusterSnapshotsRequest = struct(
  n0,
  _BDCSR,
  0,
  [_I],
  [[() => DeleteClusterSnapshotMessageList, 0]]
);
export var BatchDeleteClusterSnapshotsResult = struct(
  n0,
  _BDCSRa,
  0,
  [_R, _E],
  [
    [() => SnapshotIdentifierList, 0],
    [() => BatchSnapshotOperationErrorList, 0],
  ]
);
export var BatchDeleteRequestSizeExceededFault = error(
  n0,
  _BDRSEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`BatchDeleteRequestSizeExceeded`, 400],
  },
  [_m],
  [0],

  __BatchDeleteRequestSizeExceededFault
);
export var SnapshotErrorMessage = struct(n0, _SEM, 0, [_SI, _SCI, _FC, _FR], [0, 0, 0, 0]);
export var BatchSnapshotOperationErrorList = list(n0, _BSOEL, 0, [
  () => SnapshotErrorMessage,
  {
    [_xN]: _SEM,
  },
]);
export var DeleteClusterSnapshotMessageList = list(n0, _DCSML, 0, [
  () => DeleteClusterSnapshotMessage,
  {
    [_xN]: _DCSM,
  },
]);
export var SnapshotIdentifierList = list(n0, _SIL, 0, [
  0,
  {
    [_xN]: _Str,
  },
]);
export var BatchDeleteClusterSnapshots = op(
  n0,
  _BDCS,
  0,
  () => BatchDeleteClusterSnapshotsRequest,
  () => BatchDeleteClusterSnapshotsResult
);
