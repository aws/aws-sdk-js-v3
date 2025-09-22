// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _ARSP,
  _ARSPR,
  _ARSPRs,
  _cT,
  _DPV,
  _DPVR,
  _DPVRe,
  _fPA,
  _fPV,
  _h,
  _hQ,
  _pA,
  _pS,
  _pV,
  _r,
  _re,
  _RPA,
  _RPAR,
  _RPARe,
  _rPAWe,
  _rSA,
  _rV,
  _SDPV,
  _SDPVR,
  _SDPVRe,
  _tPA,
  _xN,
  n0,
} from "./schemas_0";
import { ReplacePermissionAssociationsWork } from "./schemas_9_Replace";

/* eslint no-var: 0 */

export var AssociateResourceSharePermissionRequest = struct(n0, _ARSPR, 0, [_rSA, _pA, _r, _cT, _pV], [0, 0, 2, 0, 1]);
export var AssociateResourceSharePermissionResponse = struct(n0, _ARSPRs, 0, [_rV, _cT], [2, 0]);
export var DeletePermissionVersionRequest = struct(
  n0,
  _DPVR,
  0,
  [_pA, _pV, _cT],
  [
    [
      0,
      {
        [_hQ]: _pA,
      },
    ],
    [
      1,
      {
        [_hQ]: _pV,
      },
    ],
    [
      0,
      {
        [_hQ]: _cT,
      },
    ],
  ]
);
export var DeletePermissionVersionResponse = struct(
  n0,
  _DPVRe,
  0,
  [_rV, _cT, _pS],
  [
    [
      2,
      {
        [_xN]: _re,
      },
    ],
    0,
    0,
  ]
);
export var ReplacePermissionAssociationsRequest = struct(n0, _RPAR, 0, [_fPA, _fPV, _tPA, _cT], [0, 1, 0, 0]);
export var ReplacePermissionAssociationsResponse = struct(
  n0,
  _RPARe,
  0,
  [_rPAWe, _cT],
  [() => ReplacePermissionAssociationsWork, 0]
);
export var SetDefaultPermissionVersionRequest = struct(n0, _SDPVR, 0, [_pA, _pV, _cT], [0, 1, 0]);
export var SetDefaultPermissionVersionResponse = struct(
  n0,
  _SDPVRe,
  0,
  [_rV, _cT],
  [
    [
      2,
      {
        [_xN]: _re,
      },
    ],
    0,
  ]
);
export var AssociateResourceSharePermission = op(
  n0,
  _ARSP,
  {
    [_h]: ["POST", "/associateresourcesharepermission", 200],
  },
  () => AssociateResourceSharePermissionRequest,
  () => AssociateResourceSharePermissionResponse
);
export var DeletePermissionVersion = op(
  n0,
  _DPV,
  {
    [_h]: ["DELETE", "/deletepermissionversion", 200],
  },
  () => DeletePermissionVersionRequest,
  () => DeletePermissionVersionResponse
);
export var ReplacePermissionAssociations = op(
  n0,
  _RPA,
  {
    [_h]: ["POST", "/replacepermissionassociations", 200],
  },
  () => ReplacePermissionAssociationsRequest,
  () => ReplacePermissionAssociationsResponse
);
export var SetDefaultPermissionVersion = op(
  n0,
  _SDPV,
  {
    [_h]: ["POST", "/setdefaultpermissionversion", 200],
  },
  () => SetDefaultPermissionVersionRequest,
  () => SetDefaultPermissionVersionResponse
);
