// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _aAss,
  _aIs,
  _as,
  _cA,
  _cN,
  _cRT,
  _DPIA,
  _DPIAe,
  _DPIAR,
  _DPIARe,
  _DPIARes,
  _DPIAResc,
  _dST,
  _eI,
  _ht,
  _mA,
  _nam,
  _oAw,
  _PIA,
  _rA,
  _sA,
  _t,
  _tRA,
  _UPIA,
  _UPIAR,
  _UPIARp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePodIdentityAssociationRequest = struct(
  n0,
  _DPIAR,
  0,
  [_cN, _aIs],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeletePodIdentityAssociationResponse = struct(n0, _DPIARe, 0, [_as], [() => PodIdentityAssociation]);
export var DescribePodIdentityAssociationRequest = struct(
  n0,
  _DPIARes,
  0,
  [_cN, _aIs],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribePodIdentityAssociationResponse = struct(n0, _DPIAResc, 0, [_as], [() => PodIdentityAssociation]);
export var PodIdentityAssociation = struct(
  n0,
  _PIA,
  0,
  [_cN, _nam, _sA, _rA, _aAss, _aIs, _t, _cA, _mA, _oAw, _dST, _tRA, _eI],
  [0, 0, 0, 0, 0, 0, 128 | 0, 4, 4, 0, 2, 0, 0]
);
export var UpdatePodIdentityAssociationRequest = struct(
  n0,
  _UPIAR,
  0,
  [_cN, _aIs, _rA, _cRT, _dST, _tRA],
  [[0, 1], [0, 1], 0, [0, 4], 2, 0]
);
export var UpdatePodIdentityAssociationResponse = struct(n0, _UPIARp, 0, [_as], [() => PodIdentityAssociation]);
export var DeletePodIdentityAssociation = op(
  n0,
  _DPIA,
  {
    [_ht]: ["DELETE", "/clusters/{clusterName}/pod-identity-associations/{associationId}", 200],
  },
  () => DeletePodIdentityAssociationRequest,
  () => DeletePodIdentityAssociationResponse
);
export var DescribePodIdentityAssociation = op(
  n0,
  _DPIAe,
  {
    [_ht]: ["GET", "/clusters/{clusterName}/pod-identity-associations/{associationId}", 200],
  },
  () => DescribePodIdentityAssociationRequest,
  () => DescribePodIdentityAssociationResponse
);
export var UpdatePodIdentityAssociation = op(
  n0,
  _UPIA,
  {
    [_ht]: ["POST", "/clusters/{clusterName}/pod-identity-associations/{associationId}", 200],
  },
  () => UpdatePodIdentityAssociationRequest,
  () => UpdatePodIdentityAssociationResponse
);
