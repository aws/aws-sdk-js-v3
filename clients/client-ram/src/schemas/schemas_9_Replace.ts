// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cTr,
  _fPA,
  _fPV,
  _h,
  _i,
  _it,
  _LRPAW,
  _LRPAWR,
  _LRPAWRi,
  _lUT,
  _mR,
  _nT,
  _RPAW,
  _rPAW,
  _RPAWIL,
  _RPAWL,
  _s,
  _sM,
  _tPA,
  _tPV,
  _wI,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListReplacePermissionAssociationsWorkRequest = struct(
  n0,
  _LRPAWR,
  0,
  [_wI, _s, _nT, _mR],
  [[() => ReplacePermissionAssociationsWorkIdList, 0], 0, 0, 1]
);
export var ListReplacePermissionAssociationsWorkResponse = struct(
  n0,
  _LRPAWRi,
  0,
  [_rPAW, _nT],
  [[() => ReplacePermissionAssociationsWorkList, 0], 0]
);
export var ReplacePermissionAssociationsWork = struct(
  n0,
  _RPAW,
  0,
  [_i, _fPA, _fPV, _tPA, _tPV, _s, _sM, _cTr, _lUT],
  [0, 0, 0, 0, 0, 0, 0, 4, 4]
);
export var ReplacePermissionAssociationsWorkIdList = list(n0, _RPAWIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var ReplacePermissionAssociationsWorkList = list(n0, _RPAWL, 0, [
  () => ReplacePermissionAssociationsWork,
  {
    [_xN]: _it,
  },
]);
export var ListReplacePermissionAssociationsWork = op(
  n0,
  _LRPAW,
  {
    [_h]: ["POST", "/listreplacepermissionassociationswork", 200],
  },
  () => ListReplacePermissionAssociationsWorkRequest,
  () => ListReplacePermissionAssociationsWorkResponse
);
