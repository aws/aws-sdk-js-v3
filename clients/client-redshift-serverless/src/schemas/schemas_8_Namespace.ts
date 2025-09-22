// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aPSA,
  _aPSKKI,
  _aU,
  _aUP,
  _cD,
  _dIRA,
  _DN,
  _dN,
  _DNR,
  _DNRe,
  _fSN,
  _fSRP,
  _GN,
  _GNR,
  _GNRe,
  _hQ,
  _iR,
  _kKI,
  _lE,
  _LN,
  _LNR,
  _LNRi,
  _mAP,
  _mR,
  _N,
  _n,
  _nA,
  _na,
  _nI,
  _NL,
  _nN,
  _nT,
  _oA,
  _RFRP,
  _RFRPR,
  _RFRPRe,
  _RFS,
  _RFSR,
  _RFSRe,
  _rPI,
  _sAn,
  _sN,
  _st,
  _UN,
  _UNR,
  _UNRp,
  _wN,
  n0,
} from "./schemas_0";
import { DbPassword, DbUser } from "./schemas_6_Namespace";

/* eslint no-var: 0 */

export var DeleteNamespaceRequest = struct(n0, _DNR, 0, [_nN, _fSN, _fSRP], [0, 0, 1]);
export var DeleteNamespaceResponse = struct(n0, _DNRe, 0, [_n], [[() => Namespace, 0]]);
export var GetNamespaceRequest = struct(n0, _GNR, 0, [_nN], [0]);
export var GetNamespaceResponse = struct(n0, _GNRe, 0, [_n], [[() => Namespace, 0]]);
export var ListNamespacesRequest = struct(
  n0,
  _LNR,
  0,
  [_nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListNamespacesResponse = struct(n0, _LNRi, 0, [_nT, _na], [0, [() => NamespaceList, 0]]);
export var Namespace = struct(
  n0,
  _N,
  0,
  [_nA, _nI, _nN, _aU, _dN, _kKI, _dIRA, _iR, _lE, _st, _cD, _aPSA, _aPSKKI],
  [0, 0, 0, [() => DbUser, 0], 0, 0, 0, 64 | 0, 64 | 0, 0, 5, 0, 0]
);
export var RestoreFromRecoveryPointRequest = struct(n0, _RFRPR, 0, [_rPI, _nN, _wN], [0, 0, 0]);
export var RestoreFromRecoveryPointResponse = struct(n0, _RFRPRe, 0, [_rPI, _n], [0, [() => Namespace, 0]]);
export var RestoreFromSnapshotRequest = struct(
  n0,
  _RFSR,
  0,
  [_nN, _wN, _sN, _sAn, _oA, _mAP, _aPSKKI],
  [0, 0, 0, 0, 0, 2, 0]
);
export var RestoreFromSnapshotResponse = struct(n0, _RFSRe, 0, [_sN, _oA, _n], [0, 0, [() => Namespace, 0]]);
export var UpdateNamespaceRequest = struct(
  n0,
  _UNR,
  0,
  [_nN, _aUP, _aU, _kKI, _dIRA, _iR, _lE, _mAP, _aPSKKI],
  [0, [() => DbPassword, 0], [() => DbUser, 0], 0, 0, 64 | 0, 64 | 0, 2, 0]
);
export var UpdateNamespaceResponse = struct(n0, _UNRp, 0, [_n], [[() => Namespace, 0]]);
export var IamRoleArnList = 64 | 0;

export var LogExportList = 64 | 0;

export var NamespaceList = list(n0, _NL, 0, [() => Namespace, 0]);
export var DeleteNamespace = op(
  n0,
  _DN,
  2,
  () => DeleteNamespaceRequest,
  () => DeleteNamespaceResponse
);
export var GetNamespace = op(
  n0,
  _GN,
  0,
  () => GetNamespaceRequest,
  () => GetNamespaceResponse
);
export var ListNamespaces = op(
  n0,
  _LN,
  0,
  () => ListNamespacesRequest,
  () => ListNamespacesResponse
);
export var RestoreFromRecoveryPoint = op(
  n0,
  _RFRP,
  0,
  () => RestoreFromRecoveryPointRequest,
  () => RestoreFromRecoveryPointResponse
);
export var RestoreFromSnapshot = op(
  n0,
  _RFS,
  2,
  () => RestoreFromSnapshotRequest,
  () => RestoreFromSnapshotResponse
);
export var UpdateNamespace = op(
  n0,
  _UN,
  0,
  () => UpdateNamespaceRequest,
  () => UpdateNamespaceResponse
);
