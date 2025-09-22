// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _a,
  _aP,
  _CDR,
  _CDr,
  _CDRr,
  _CPG,
  _CPGR,
  _CPGRr,
  _cT,
  _cTr,
  _d,
  _dD,
  _dI,
  _dP,
  _DPG,
  _DPGR,
  _DPGRe,
  _dTa,
  _GPG,
  _GPGR,
  _GPGRe,
  _h,
  _hQ,
  _iT,
  _k,
  _lMT,
  _LPG,
  _LPGR,
  _LPGRi,
  _mR,
  _mS,
  _n,
  _nT,
  _oI,
  _p,
  _PG,
  _pG,
  _PGD,
  _pGe,
  _pGI,
  _PGL,
  _PGN,
  _PGP,
  _pGP,
  _RP,
  _RPL,
  _sD,
  _UPG,
  _UPGR,
  _UPGRp,
  n0,
} from "./schemas_0";
import { SchemaUnion } from "./schemas_6_Dataset";
import { DatasetOwnerInfo } from "./schemas_10_User";

/* eslint no-var: 0 */

export var PermissionGroupDescription = sim(n0, _PGD, 0, 8);
export var PermissionGroupName = sim(n0, _PGN, 0, 8);
export var CreateDatasetRequest = struct(
  n0,
  _CDR,
  0,
  [_cT, _dTa, _k, _dD, _oI, _pGP, _a, _sD],
  [[0, 4], 0, 0, 0, [() => DatasetOwnerInfo, 0], () => PermissionGroupParams, 0, () => SchemaUnion]
);
export var CreateDatasetResponse = struct(n0, _CDRr, 0, [_dI], [0]);
export var CreatePermissionGroupRequest = struct(
  n0,
  _CPGR,
  0,
  [_n, _d, _aP, _cT],
  [[() => PermissionGroupName, 0], [() => PermissionGroupDescription, 0], 64 | 0, [0, 4]]
);
export var CreatePermissionGroupResponse = struct(n0, _CPGRr, 0, [_pGI], [0]);
export var DeletePermissionGroupRequest = struct(
  n0,
  _DPGR,
  0,
  [_pGI, _cT],
  [
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cT,
      },
    ],
  ]
);
export var DeletePermissionGroupResponse = struct(n0, _DPGRe, 0, [_pGI], [0]);
export var GetPermissionGroupRequest = struct(n0, _GPGR, 0, [_pGI], [[0, 1]]);
export var GetPermissionGroupResponse = struct(n0, _GPGRe, 0, [_pG], [[() => PermissionGroup, 0]]);
export var ListPermissionGroupsRequest = struct(
  n0,
  _LPGR,
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
export var ListPermissionGroupsResponse = struct(n0, _LPGRi, 0, [_pGe, _nT], [[() => PermissionGroupList, 0], 0]);
export var PermissionGroup = struct(
  n0,
  _PG,
  0,
  [_pGI, _n, _d, _aP, _cTr, _lMT, _mS],
  [0, [() => PermissionGroupName, 0], [() => PermissionGroupDescription, 0], 64 | 0, 1, 1, 0]
);
export var PermissionGroupParams = struct(n0, _PGP, 0, [_pGI, _dP], [0, () => ResourcePermissionsList]);
export var ResourcePermission = struct(n0, _RP, 0, [_p], [0]);
export var UpdatePermissionGroupRequest = struct(
  n0,
  _UPGR,
  0,
  [_pGI, _n, _d, _aP, _cT],
  [[0, 1], [() => PermissionGroupName, 0], [() => PermissionGroupDescription, 0], 64 | 0, [0, 4]]
);
export var UpdatePermissionGroupResponse = struct(n0, _UPGRp, 0, [_pGI], [0]);
export var ApplicationPermissionList = 64 | 0;

export var PermissionGroupList = list(n0, _PGL, 0, [() => PermissionGroup, 0]);
export var ResourcePermissionsList = list(n0, _RPL, 0, () => ResourcePermission);
export var CreateDataset = op(
  n0,
  _CDr,
  {
    [_h]: ["POST", "/datasetsv2", 200],
  },
  () => CreateDatasetRequest,
  () => CreateDatasetResponse
);
export var CreatePermissionGroup = op(
  n0,
  _CPG,
  {
    [_h]: ["POST", "/permission-group", 200],
  },
  () => CreatePermissionGroupRequest,
  () => CreatePermissionGroupResponse
);
export var DeletePermissionGroup = op(
  n0,
  _DPG,
  {
    [_h]: ["DELETE", "/permission-group/{permissionGroupId}", 200],
  },
  () => DeletePermissionGroupRequest,
  () => DeletePermissionGroupResponse
);
export var GetPermissionGroup = op(
  n0,
  _GPG,
  {
    [_h]: ["GET", "/permission-group/{permissionGroupId}", 200],
  },
  () => GetPermissionGroupRequest,
  () => GetPermissionGroupResponse
);
export var ListPermissionGroups = op(
  n0,
  _LPG,
  {
    [_h]: ["GET", "/permission-group", 200],
  },
  () => ListPermissionGroupsRequest,
  () => ListPermissionGroupsResponse
);
export var UpdatePermissionGroup = op(
  n0,
  _UPG,
  {
    [_h]: ["PUT", "/permission-group/{permissionGroupId}", 200],
  },
  () => UpdatePermissionGroupRequest,
  () => UpdatePermissionGroupResponse
);
