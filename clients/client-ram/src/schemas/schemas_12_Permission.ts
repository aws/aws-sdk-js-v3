// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _AP,
  _APL,
  _aS,
  _dV,
  _fS,
  _h,
  _it,
  _LPA,
  _LPAR,
  _LPARi,
  _lUT,
  _mR,
  _nT,
  _pA,
  _per,
  _pV,
  _rSA,
  _rT,
  _s,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociatedPermission = struct(
  n0,
  _AP,
  0,
  [_a, _pV, _dV, _rT, _s, _fS, _lUT, _rSA],
  [0, 0, 2, 0, 0, 0, 4, 0]
);
export var ListPermissionAssociationsRequest = struct(
  n0,
  _LPAR,
  0,
  [_pA, _pV, _aS, _rT, _fS, _dV, _nT, _mR],
  [0, 1, 0, 0, 0, 2, 0, 1]
);
export var ListPermissionAssociationsResponse = struct(
  n0,
  _LPARi,
  0,
  [_per, _nT],
  [[() => AssociatedPermissionList, 0], 0]
);
export var AssociatedPermissionList = list(n0, _APL, 0, [
  () => AssociatedPermission,
  {
    [_xN]: _it,
  },
]);
export var ListPermissionAssociations = op(
  n0,
  _LPA,
  {
    [_h]: ["POST", "/listpermissionassociations", 200],
  },
  () => ListPermissionAssociationsRequest,
  () => ListPermissionAssociationsResponse
);
